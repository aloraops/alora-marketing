'use client';

import { SolutionPageTemplate } from '@/components/solutions/solution-page-template';
import { POTable, type POItem } from '@/components/solutions/po-table';
import * as content from '@content/solutions/po-risk-tracking';

export default function PORiskTrackingPage() {
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
      mockUI={<POTable data={content.mockData as POItem[]} />}
    />
  );
}
