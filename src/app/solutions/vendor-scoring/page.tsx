'use client';

import { SolutionPageTemplate } from '@/components/solutions/solution-page-template';
import { VendorScoreCards, type VendorItem } from '@/components/solutions/vendor-score-cards';
import * as content from '@content/solutions/vendor-scoring';

export default function VendorScoringPage() {
  return (
    <SolutionPageTemplate
      hero={content.hero}
      challenges={content.challenges}
      features={content.features}
      howItWorks={content.howItWorks}
      useCases={content.useCases}
      metric={content.metric}
      crossLinks={content.crossLinks}
      cta={content.cta}
      mockUI={<VendorScoreCards data={content.mockData as VendorItem[]} />}
    />
  );
}
