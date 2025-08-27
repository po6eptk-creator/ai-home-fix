export interface DiagnosisResult {
  problem: {
    title: string;
    confidence: number;
    altHypotheses: string[];
  };
  diy: {
    summary: string;
    steps: {
      title: string;
      detail: string;
      caution?: string;
    }[];
    tools: {
      name: string;
      searchQueries: string[];
    }[];
    parts: {
      name: string;
      searchQueries: string[];
    }[];
    estimatedCost: {
      currency: string;
      min: number;
      max: number;
    };
  };
  safety: {
    globalNotices: string[];
    risks: {
      title: string;
      description: string;
      severity: 'low' | 'medium' | 'high';
    }[];
    showHireProCTA: boolean;
    category: string;
  };
  tipVideoQuery: string;
}
