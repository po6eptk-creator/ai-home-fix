'use client';

import { DiagnosisResult } from '@/types/diagnosis';

interface DiagnosisDisplayProps {
  diagnosis: DiagnosisResult;
}

export default function DiagnosisDisplay({ diagnosis }: DiagnosisDisplayProps) {
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

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
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
          <div className="bg-gray-50 p-4 rounded-lg">
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
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-900 font-medium">{diagnosis.diy.summary}</p>
        </div>

        {/* Steps */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">Steps to Fix</h4>
          <div className="space-y-4">
            {diagnosis.diy.steps.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 mb-1">{step.title}</h5>
                    <p className="text-gray-700 mb-2">{step.detail}</p>
                    {step.caution && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                        <p className="text-yellow-800 text-sm">
                          <span className="font-medium">⚠️ Caution:</span> {step.caution}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Parts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Tools */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Tools & Parts</h4>
            <div className="space-y-3">
              {diagnosis.diy.tools.map((tool, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{tool.name}</span>
                  <div className="flex gap-2">
                    {tool.searchQueries.map((query, queryIndex) => (
                      <a
                        key={queryIndex}
                        href={createSearchLink(query, 'amazon')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Buy
                      </a>
                    ))}
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
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{part.name}</span>
                  <div className="flex gap-2">
                    {part.searchQueries.map((query, queryIndex) => (
                      <a
                        key={queryIndex}
                        href={createSearchLink(query, 'amazon')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Buy
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Estimate */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="text-lg font-medium text-gray-900 mb-2">Estimated Time & Cost</h4>
          <p className="text-green-800 font-semibold">
            ${diagnosis.diy.estimatedCost.min} - ${diagnosis.diy.estimatedCost.max} {diagnosis.diy.estimatedCost.currency}
          </p>
        </div>
      </div>

      {/* Safety & Risks */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Safety Checks</h3>
        
        {/* Global Notices */}
        {diagnosis.safety.globalNotices.length > 0 && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            {diagnosis.safety.globalNotices.map((notice, index) => (
              <p key={index} className="text-red-800 text-sm mb-2 last:mb-0">
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
                <div key={index} className={`border rounded-lg p-4 ${getSeverityColor(risk.severity)}`}>
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
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
        <a
          href={createSearchLink(diagnosis.diy.parts.map(p => p.name).join(' '), 'amazon')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
        >
          Download Repair Guide (PDF)
        </a>
        <a
          href={createSearchLink(diagnosis.diy.parts.map(p => p.name).join(' '), 'amazon')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
        >
          Order Parts
        </a>
        {diagnosis.safety.showHireProCTA && (
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(`${diagnosis.safety.category} repair professional near me`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors text-center"
          >
            Book a Pro
          </a>
        )}
      </div>

      {/* Tip Video */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          💡 <strong>Pro tip:</strong> Search for "{diagnosis.tipVideoQuery}" on YouTube for video tutorials.
        </p>
      </div>
    </div>
  );
}
