import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

interface AssistantRequest {
  description: string;
  imageBase64?: string;
  category?: string;
}

interface AssistantResponse {
  overview: string;
  steps: string[];
  safetyTips: string[];
}

function parseAIResponse(aiResponse: string): { overview: string; steps: string[]; safetyTips: string[] } {
  // Split the response by lines
  const lines = aiResponse.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  
  const overviewLines: string[] = [];
  const stepsLines: string[] = [];
  const safetyTips: string[] = [];
  let foundSteps = false;
  let foundSafety = false;
  
  for (const line of lines) {
    const lowerLine = line.toLowerCase();
    
    // Check if we've found safety section
    if (lowerLine.includes('safety') || lowerLine.includes('warning') || lowerLine.includes('caution')) {
      foundSafety = true;
      continue;
    }
    
    // Check if this line starts a numbered step (1., 2., Step 1, etc.)
    const isStepStart = /^(\d+\.|Step\s+\d+)/i.test(line);
    
    if (isStepStart) {
      foundSteps = true;
      foundSafety = false; // Reset safety flag when we find steps
      stepsLines.push(line);
    } else if (foundSafety) {
      // If we're in safety section, add to safety tips
      const cleanedLine = cleanMarkdown(line);
      // Only add lines that are actually safety-related
      if (cleanedLine.length > 0 && 
          (cleanedLine.toLowerCase().includes('turn off') ||
           cleanedLine.toLowerCase().includes('shut off') ||
           cleanedLine.toLowerCase().includes('ensure') ||
           cleanedLine.toLowerCase().includes('always') ||
           cleanedLine.toLowerCase().includes('caution') ||
           cleanedLine.toLowerCase().includes('be careful') ||
           cleanedLine.toLowerCase().includes('safety') ||
           cleanedLine.toLowerCase().includes('warning'))) {
        safetyTips.push(cleanedLine);
      }
    } else if (foundSteps) {
      // If we've found steps, continue adding to steps
      stepsLines.push(line);
    } else {
      // If we haven't found steps yet, add to overview
      overviewLines.push(line);
    }
  }
  
  // Clean up the overview - take only the first few sentences
  let overview = overviewLines
    .filter(line => {
      // Remove common headers that shouldn't be in overview
      const skipHeaders = [
        'tools and materials needed:',
        'safety first:',
        'step-by-step instructions:',
        'when to seek professional help:',
        'safety warnings:',
        '### tools and materials needed:',
        '### safety first:',
        '### step-by-step instructions:',
        '### when to seek professional help:',
        '### safety warnings:',
        'tools you\'ll need:',
        'materials needed:',
        'what you\'ll need:',
        'adjustable wrench',
        'screwdriver',
        'replacement',
        'plumber\'s grease',
        'bucket',
        'towel'
      ];
      return !skipHeaders.some(header => line.toLowerCase().includes(header));
    })
    .join(' ')
    .trim();
  
  // Clean markdown from overview
  overview = cleanMarkdown(overview);
  
  // Take only the first sentence that describes the problem
  const sentences = overview.split(/[.!?]+/).filter(s => s.trim().length > 0);
  overview = sentences.slice(0, 1).join('. ').trim() + '.';
  
  // Remove any remaining bullet points or lists from overview
  overview = overview.replace(/[-*+]\s+/g, '').replace(/\s+/g, ' ').trim();
  
  // Clean up the steps - group related content and remove step numbers
  const steps: string[] = [];
  let currentStep = '';
  
  for (const line of stepsLines) {
    if (line.length === 0) continue;
    
    // Check if this is a new step (starts with number or bold text)
    const isNewStep = /^(\d+\.|Step\s+\d+|\*\*)/i.test(line);
    
    if (isNewStep && currentStep) {
      // Save the previous step
      const cleanStep = currentStep.replace(/^(\d+\.|Step\s+\d+)\s*/i, '').trim();
      if (cleanStep) {
        const cleanedStep = cleanMarkdown(cleanStep);
        if (cleanedStep) steps.push(cleanedStep);
      }
      currentStep = line;
    } else {
      // Continue building current step
      currentStep += (currentStep ? ' ' : '') + line;
    }
  }
  
  // Add the last step
  if (currentStep) {
    const cleanStep = currentStep.replace(/^(\d+\.|Step\s+\d+)\s*/i, '').trim();
    if (cleanStep) {
      const cleanedStep = cleanMarkdown(cleanStep);
      if (cleanedStep) steps.push(cleanedStep);
    }
  }
  
  // If no safety tips found, add fallback
  if (safetyTips.length === 0) {
    safetyTips.push('Use protective gloves and proper tools to avoid injury.');
  }
  
  return {
    overview: overview || 'AI analysis completed. Follow the steps below to fix the problem.',
    steps: steps.length > 0 ? steps : ['Follow the AI recommendations above to resolve the issue.'],
    safetyTips: safetyTips
  };
}

function cleanMarkdown(text: string): string {
  return text
    // Remove markdown headers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markers
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
    // Remove bullet points
    .replace(/^[-*+]\s+/gm, '')
    .replace(/[-*+]\s+/g, '')
    // Remove numbered lists (but keep the text)
    .replace(/^\d+\.\s+/gm, '')
    // Remove any remaining markdown symbols
    .replace(/###\s*/g, '')
    .replace(/##\s*/g, '')
    .replace(/#\s*/g, '')
    // Clean up extra whitespace and line breaks
    .replace(/\s+/g, ' ')
    .replace(/\n+/g, ' ')
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    let body: AssistantRequest;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("JSON parsing error:", parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }
    
    // Validate the request
    if (!body.description || typeof body.description !== 'string') {
      return NextResponse.json(
        { error: 'Description is required and must be a string' },
        { status: 400 }
      );
    }

    // Check if API key is available
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("Missing API key: OPENAI_API_KEY environment variable is not set");
      return NextResponse.json(
        { error: 'OpenAI API key is not configured. Please set OPENAI_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    // Initialize OpenAI client
    const client = new OpenAI({ apiKey });

    // Log the incoming request
    console.log("Incoming request:", {
      description: body.description,
      hasImage: !!body.imageBase64,
      category: body.category
    });

    // Prepare the system message for home repair context
    const systemMessage = `You are an AI home repair assistant. You provide helpful, safe, and practical advice for common household problems. 
    
    Guidelines:
    - Always prioritize safety first
    - Provide step-by-step instructions when possible
    - Mention when professional help should be sought
    - Be clear and concise
    - Focus on DIY solutions when safe and appropriate
    - Include safety warnings when necessary
    - If analyzing an image, describe what you see and provide specific advice based on the visual evidence`;

    // Prepare user message content
    let userContent: string | Array<unknown>;
    
    // If image is provided, use vision model with both text and image
    if (body.imageBase64) {
      userContent = [
        {
          type: 'text',
          text: body.description
        },
        {
          type: 'image_url',
          image_url: {
            url: `data:image/jpeg;base64,${body.imageBase64}`
          }
        }
      ] as Array<unknown>;
    } else {
      // Text-only request
      userContent = body.description;
    }

    // Make request to OpenAI using the client
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini', // This model supports both text and vision
      messages: [
        {
          role: 'system',
          content: systemMessage
        },
        {
          role: 'user',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          content: userContent as any
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    // Extract the response content
    const result = completion.choices[0]?.message?.content;
    
    // Log the AI response
    console.log("AI response:", completion.choices[0]?.message?.content);
    
    if (!result) {
      return NextResponse.json(
        { error: 'No response received from AI assistant' },
        { status: 500 }
      );
    }

    // Split the response into overview, steps, and safety tips
    const { overview, steps, safetyTips } = parseAIResponse(result);

    // Return the successful response
    const response: AssistantResponse = { overview, steps, safetyTips };
    return NextResponse.json(response);

  } catch (error) {
    console.error("Assistant API error:", error);
    
    // Provide more specific error messages based on the error type
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'OpenAI API key is invalid or missing' },
          { status: 500 }
        );
      } else if (error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      } else if (error.message.includes('quota')) {
        return NextResponse.json(
          { error: 'OpenAI quota exceeded. Please try again later.' },
          { status: 429 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
