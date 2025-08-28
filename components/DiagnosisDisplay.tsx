'use client';

import { DiagnosisResult } from '@/types/diagnosis';

interface DiagnosisDisplayProps {
  diagnosis: DiagnosisResult;
  problemDescription?: string;
}

export default function DiagnosisDisplay({ diagnosis, problemDescription }: DiagnosisDisplayProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const createSearchLink = (query: string, store: string) => {
    const encodedQuery = encodeURIComponent(query);
    switch (store) {
      case 'amazon':
        return `https://www.amazon.com/s?k=${encodedQuery}`;
      case 'homedepot':
        return `https://www.homedepot.com/s/${encodedQuery}`;
      case 'lowes':
        return `https://www.lowes.com/search?searchTerm=${encodedQuery}`;
      default:
        return `https://www.google.com/search?q=${encodedQuery}`;
    }
  };

  const createDynamicAmazonLink = (itemName: string) => {
    if (!problemDescription) {
      // Fallback to general repair search if no problem description
      return createSearchLink('repair tools', 'amazon');
    }

    // Extract keywords from problem description (take first 2-3 words)
    const keywords = problemDescription
      .split(' ')
      .slice(0, 3)
      .join('+');

    // Create dynamic Amazon search URLs based on item type
    const amazonLinks: { [key: string]: string } = {
      'Basic tools': `https://www.amazon.com/s?k=repair+tools+${keywords}`,
      'Common household items': `https://www.amazon.com/s?k=repair+supplies+${keywords}`,
    };

    // Return dynamic link if available, otherwise fallback to general search
    return amazonLinks[itemName] || createSearchLink('repair tools', 'amazon');
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 space-y-8">
      {/* Problem Diagnosis */}
      <div className="border-b border-gray-200 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Diagnosis
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Confidence:</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
              {Math.round(diagnosis.problem.confidence * 100)}%
            </span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {diagnosis.problem.title}
        </h3>
        {diagnosis.problem.altHypotheses.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">Why we think so:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {diagnosis.problem.altHypotheses.map((hypothesis, index) => (
                <li key={index}>{hypothesis}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* DIY Solution */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Step-by-Step Fix</h3>
        
        {/* Summary */}
        <div className="bg-blue-50 p-4 rounded-xl">
          <p className="text-gray-700 leading-relaxed">{diagnosis.diy.summary}</p>
        </div>

        {/* Steps */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">Steps to Fix</h4>
          <ol className="list-decimal pl-5 space-y-3">
            {diagnosis.diy.steps.map((step, index) => (
              <li key={index} className="text-gray-700 leading-relaxed">
                {step.detail}
              </li>
            ))}
          </ol>
        </div>

        {/* Tools & Parts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Tools */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Tools & Parts</h4>
            <div className="space-y-3">
              {diagnosis.diy.tools.map((tool, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl shadow-md">
                  <span className="font-medium text-gray-900">{tool.name}</span>
                  <div className="flex gap-2">
                    <a
                      href={createDynamicAmazonLink(tool.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parts */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Parts</h4>
            <div className="space-y-3">
              {diagnosis.diy.parts.map((part, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl shadow-md">
                  <span className="font-medium text-gray-900">{part.name}</span>
                  <div className="flex gap-2">
                    <a
                      href={createDynamicAmazonLink(part.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Estimate */}
        <div className="bg-green-50 p-4 rounded-xl">
          <h4 className="text-lg font-medium text-gray-900 mb-3">Estimated Time & Cost</h4>
          <div className="space-y-2">
            <p className="text-green-800 font-semibold">
              ${Math.max(diagnosis.diy.estimatedCost.min, 20)} - ${Math.max(diagnosis.diy.estimatedCost.max, 50)} {diagnosis.diy.estimatedCost.currency}
            </p>
            <p className="text-gray-600 text-sm">
              1-2 hours average repair time
            </p>
            <p className="text-gray-500 text-xs">
              Hiring a pro can save you ~30% of the time
            </p>
          </div>
        </div>
      </div>

      {/* Safety & Risks */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Safety Checks</h3>
        
        {/* Safety Tips */}
        {diagnosis.safety.globalNotices.length > 0 && (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-sm">
            {diagnosis.safety.globalNotices.map((notice, index) => (
              <p key={index} className="text-yellow-800 mb-2 last:mb-0">
                {notice}
              </p>
            ))}
          </div>
        )}

        {/* Risks */}
        {diagnosis.safety.risks.length > 0 && (
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">When to call a pro</h4>
            <div className="space-y-3">
              {diagnosis.safety.risks.map((risk, index) => (
                <div key={index} className={`border rounded-xl p-4 shadow-md ${getSeverityColor(risk.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">{risk.title}</h5>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/50">
                      {risk.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm">{risk.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="https://www.taskrabbit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-black text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors text-center shadow-md"
        >
          Call a Pro
        </a>
        <a
          href="https://www.repairclinic.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white text-black border-2 border-gray-300 py-3 px-6 rounded-xl font-medium hover:bg-gray-50 transition-colors text-center shadow-md"
        >
          Buy Tools
        </a>
      </div>

      {/* Pro Tip */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Pro Tip: Find video tutorials on YouTube</h4>
        <p className="text-gray-600 mb-4">
          Watch step-by-step video guides from real people fixing similar problems.
        </p>
        <a
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(diagnosis.tipVideoQuery || 'home repair tutorial')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
        >
          Search on YouTube
        </a>
      </div>
    </div>
  );
}

