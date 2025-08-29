'use client';

import { useState } from 'react';
import { DiagnosisResult } from '@/types/diagnosis';

interface DiagnosisDisplayProps {
  diagnosis: DiagnosisResult;
  problemDescription?: string;
  amazonCategoryLinks?: Record<string, {tools: string; parts: string}>;
  showUpgradeBanner?: boolean;
  onUpgradeClick?: () => void;
}

export default function DiagnosisDisplay({ diagnosis, problemDescription, amazonCategoryLinks, showUpgradeBanner, onUpgradeClick }: DiagnosisDisplayProps) {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set(diagnosis.diy.steps.slice(0, Math.min(3, diagnosis.diy.steps.length)).map((_, index) => index)));

  const toggleStep = (index: number) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSteps(newExpanded);
  };

  const getStepIcon = (index: number) => {
    const icons = ['🔍', '🧹', '🧴', '🔨', '🛡️', '🖌️', '🔧'];
    return icons[index] || '📋';
  };

  const getStepTime = (index: number) => {
    const times = ['~5 min', '~10 min', '~15 min', '~20 min', '~5 min', '~10 min', '~15 min'];
    return times[index] || '~10 min';
  };

  const getToolIcon = (toolName: string) => {
    const iconMap: { [key: string]: string } = {
      'Basic tools': '🔨',
      'Common household items': '🏠',
      'Screwdriver': '🔧',
      'Pliers': '🔧',
      'Wrench': '🔧',
      'Hammer': '🔨',
      'Drill': '🔧',
      'Saw': '🔧',
      'Tape measure': '📏',
      'Level': '📐',
      'Safety glasses': '🥽',
      'Work gloves': '🧤',
      'Cleaning supplies': '🧽',
      'Rags': '🧽',
      'Bucket': '🪣',
      'Sponge': '🧽',
      'Soap': '🧴',
      'Bleach': '🧴',
      'Vinegar': '🧴',
      'Baking soda': '🧴'
    };
    return iconMap[toolName] || '🔧';
  };

  const generateDiagnosisSummary = (title: string) => {
    // Convert to lowercase for easier matching
    const lowerTitle = title.toLowerCase();
    
    // Common patterns and their human-readable summaries
    if (lowerTitle.includes('leak') || lowerTitle.includes('leaking')) {
      return `Our system found a leak that requires immediate attention.`;
    }
    if (lowerTitle.includes('faucet') || lowerTitle.includes('tap')) {
      return `We detected a faucet issue that needs repair.`;
    }
    if (lowerTitle.includes('broken') || lowerTitle.includes('cracked') || lowerTitle.includes('damaged')) {
      return `We identified damage that needs to be fixed.`;
    }
    if (lowerTitle.includes('table') || lowerTitle.includes('chair') || lowerTitle.includes('furniture')) {
      return `We detected a furniture problem that requires repair.`;
    }
    if (lowerTitle.includes('electrical') || lowerTitle.includes('outlet') || lowerTitle.includes('switch')) {
      return `We found an electrical issue that needs professional attention.`;
    }
    if (lowerTitle.includes('plumbing') || lowerTitle.includes('pipe') || lowerTitle.includes('drain')) {
      return `We identified a plumbing problem that needs fixing.`;
    }
    if (lowerTitle.includes('appliance') || lowerTitle.includes('refrigerator') || lowerTitle.includes('dishwasher')) {
      return `We detected an appliance issue that requires repair.`;
    }
    if (lowerTitle.includes('door') || lowerTitle.includes('window')) {
      return `We found a door/window problem that needs attention.`;
    }
    if (lowerTitle.includes('wall') || lowerTitle.includes('drywall') || lowerTitle.includes('paint')) {
      return `We identified a wall issue that needs repair.`;
    }
    if (lowerTitle.includes('roof') || lowerTitle.includes('ceiling')) {
      return `We detected a roof/ceiling problem that requires attention.`;
    }
    
    // Default fallback for unknown patterns
    return `We analyzed your issue and found a problem that needs repair.`;
  };

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
    // Get the diagnosis category (lowercase for matching)
    const diagnosisCategory = diagnosis.safety.category?.toLowerCase() || 'default';
    
    // Use category-based Amazon links if available
    if (amazonCategoryLinks && amazonCategoryLinks[diagnosisCategory]) {
      const categoryLinks = amazonCategoryLinks[diagnosisCategory];
      
      // Map item names to category-specific links
      if (itemName === 'Basic tools') {
        return categoryLinks.tools;
      } else if (itemName === 'Common household items') {
        return categoryLinks.parts;
      }
    }
    
    // Fallback to default category links
    if (amazonCategoryLinks?.default) {
      if (itemName === 'Basic tools') {
        return amazonCategoryLinks.default.tools;
      } else if (itemName === 'Common household items') {
        return amazonCategoryLinks.default.parts;
      }
    }
    
    // Final fallback to generic search
    const fallbackLinks: { [key: string]: string } = {
      'Basic tools': 'https://www.amazon.com/s?k=basic+home+repair+tools',
      'Common household items': 'https://www.amazon.com/s?k=household+repair+items',
    };

    return fallbackLinks[itemName] || createSearchLink('repair tools', 'amazon');
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      {/* Progress Indicator */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500 font-medium">
          Step 2 of 2 – Your Diagnosis
        </p>
      </div>

      {/* Problem Diagnosis */}
      <div className="border-b border-gray-200 pb-8 mb-12">
        <div className="pb-6">
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
          {generateDiagnosisSummary(diagnosis.problem.title)}
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
      </div>

      {/* Upgrade Banner */}
      {showUpgradeBanner && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl mb-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">This was your only free diagnosis</h3>
              <p className="text-blue-100">Upgrade now to continue using AI Home Fix without limits.</p>
            </div>
            <button
              onClick={onUpgradeClick}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>
      )}

      {/* DIY Solution */}
      <div className="space-y-8 mb-12">
        <h3 className="text-xl font-semibold text-gray-900">Step-by-Step Fix</h3>
        
        {/* Summary */}
        <div className="bg-blue-50 p-4 rounded-xl">
          <p className="text-gray-700 leading-relaxed">{diagnosis.diy.summary}</p>
        </div>

        {/* Steps */}
        <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
          <h4 className="text-lg font-medium text-gray-900 mb-4">Steps to Fix</h4>
          <div className="space-y-2 sm:space-y-3">
            {diagnosis.diy.steps.map((step, index) => (
              <div key={index} className="border border-blue-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full flex items-center justify-between p-3 sm:p-4 bg-blue-100 hover:bg-blue-150 transition-colors"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-base sm:text-lg">{getStepIcon(index)}</span>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">Step {index + 1}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-sm">
                      {expandedSteps.has(index) ? '▼' : '▶'}
                    </span>
                  </div>
                </button>
                {expandedSteps.has(index) && (
                  <div className="p-3 sm:p-4 bg-white">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{step.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Parts */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="text-lg font-medium text-gray-900 mb-6">Tools & Parts</h4>
          
          {/* Required Tools & Parts */}
          <div className="mb-8">
            <h5 className="text-md font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-500">●</span>
              Required Tools & Parts
            </h5>
            <div className="space-y-3">
              {diagnosis.diy.tools.map((tool, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{getToolIcon(tool.name)}</span>
                    <span className="font-medium text-gray-900">{tool.name}</span>
                  </div>
                  <a
                    href={createDynamicAmazonLink(tool.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm"
                  >
                    Buy Now
                  </a>
                </div>
              ))}
              {diagnosis.diy.parts.map((part, index) => (
                <div key={`part-${index}`} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{getToolIcon(part.name)}</span>
                    <span className="font-medium text-gray-900">{part.name}</span>
                  </div>
                  <a
                    href={createDynamicAmazonLink(part.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm"
                  >
                    Buy Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Tools & Parts */}
          <div>
            <h5 className="text-md font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-gray-400">○</span>
              Optional Tools & Parts
            </h5>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200 opacity-60">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🔧</span>
                  <span className="font-medium text-gray-900">Professional-grade tools</span>
                </div>
                <a
                  href="https://www.amazon.com/s?k=professional+repair+tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm"
                >
                  Browse
                </a>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200 opacity-60">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🛡️</span>
                  <span className="font-medium text-gray-900">Safety equipment</span>
                </div>
                <a
                  href="https://www.amazon.com/s?k=safety+equipment+repair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm"
                >
                  Browse
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Estimate */}
        <div className="bg-green-50 p-6 rounded-xl">
          <h4 className="text-lg font-medium text-gray-900 mb-4">Estimated Time & Cost</h4>
          <div className="space-y-4">
            <p className="text-green-800 font-semibold text-lg">
              ${Math.max(diagnosis.diy.estimatedCost.min, 20)} - ${Math.max(diagnosis.diy.estimatedCost.max, 50)} {diagnosis.diy.estimatedCost.currency}+
            </p>
            
            {/* Time Timeline */}
            <div className="space-y-2">
              <p className="text-gray-600 text-sm font-medium">Time Required</p>
              <div className="relative">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>30m</span>
                  <span>1h</span>
                  <span>2h+</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span></span>
                  <span className="font-medium text-blue-600">1–2 hours or more</span>
                  <span></span>
                </div>
              </div>
            </div>

            {/* Budget Bar */}
            <div className="space-y-2">
              <p className="text-gray-600 text-sm font-medium">Cost Range</p>
              <div className="relative">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>$0</span>
                  <span>$50</span>
                  <span>$100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span></span>
                  <span className="font-medium text-green-600">$20-$50</span>
                  <span></span>
                </div>
              </div>
            </div>

            {/* Savings Tip */}
            <div className="bg-green-100 border border-green-200 rounded-lg p-3">
              <p className="text-green-800 text-sm font-medium">
                💡 Hiring a professional can save you 50% of the time, ensure safety, and guarantee results.
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* When to Call a Pro */}
      <div className="mt-12 bg-[#FFF4E5] p-6 rounded-xl border border-orange-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">👷‍♂️</span>
          <h4 className="text-lg font-semibold text-gray-900">When to Call a Pro</h4>
        </div>
        <p className="text-gray-700 mb-6">
          If you're not comfortable with this repair or need professional assistance, our trusted partners are here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.taskrabbit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-colors text-center shadow-lg"
          >
            Call a Pro
          </a>
          <a
            href="https://www.amazon.com/s?k=home+repair+tools"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-gray-700 border-2 border-orange-300 py-4 px-8 rounded-xl font-medium hover:bg-orange-50 transition-colors text-center shadow-md"
          >
            Buy Tools
          </a>
        </div>
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
