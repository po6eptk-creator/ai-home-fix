import { NextRequest, NextResponse } from 'next/server';
import { DiagnosisResult } from '../../../types/diagnosis';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File;
    const description = formData.get('description') as string;

    if (!image || !description) {
      return NextResponse.json(
        { error: 'Image and description are required' },
        { status: 400 }
      );
    }

    // For now, return mocked data
    // In the future, this would integrate with OpenAI Vision API
    const mockDiagnosis: DiagnosisResult = {
      problem: {
        title: "Leaking faucet",
        confidence: 0.85,
        altHypotheses: ["Loose washer", "Damaged O-ring", "Worn cartridge"]
      },
      diy: {
        summary: "Replace the worn-out washer inside the faucet to stop the leak.",
        steps: [
          {
            title: "Turn off water supply",
            detail: "Locate and shut off the water supply valve under the sink",
            caution: "Make sure to turn off both hot and cold water valves"
          },
          {
            title: "Remove faucet handle",
            detail: "Use a screwdriver to remove the handle and access the cartridge",
            caution: "Keep track of all screws and parts for reassembly"
          },
          {
            title: "Inspect and replace washer",
            detail: "Remove the old washer and install a new one of the same size",
            caution: "Ensure the new washer is properly seated to prevent future leaks"
          },
          {
            title: "Reassemble and test",
            detail: "Put everything back together and turn water back on to test",
            caution: "Check for leaks before considering the repair complete"
          }
        ],
        tools: [
          {
            name: "Adjustable wrench",
            searchQueries: ["adjustable wrench plumbing", "plumbing wrench set"]
          },
          {
            name: "Screwdriver set",
            searchQueries: ["flat head screwdriver", "phillips screwdriver set"]
          },
          {
            name: "Plumber's tape",
            searchQueries: ["plumbers tape", "teflon tape"]
          }
        ],
        parts: [
          {
            name: "Faucet washer kit",
            searchQueries: ["faucet washer kit", "kitchen faucet repair kit"]
          },
          {
            name: "O-ring set",
            searchQueries: ["faucet o ring kit", "plumbing o rings"]
          }
        ],
        estimatedCost: {
          currency: "USD",
          min: 5,
          max: 15
        }
      },
      safety: {
        globalNotices: [
          "This is AI-generated advice. Always consult a licensed plumber if you're unsure about any step.",
          "Turn off the main water supply if you cannot locate the individual valve."
        ],
        risks: [
          {
            title: "Water damage",
            description: "If the leak continues after repair, it may cause damage to cabinets and flooring",
            severity: "medium"
          },
          {
            title: "Cross-threading",
            description: "Over-tightening can strip threads and make the problem worse",
            severity: "low"
          }
        ],
        showHireProCTA: true,
        category: "plumbing"
      },
      tipVideoQuery: "fix leaking kitchen faucet"
    };

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(mockDiagnosis);
  } catch (error) {
    console.error('Diagnosis error:', error);
    return NextResponse.json(
      { error: 'Failed to process diagnosis' },
      { status: 500 }
    );
  }
}
