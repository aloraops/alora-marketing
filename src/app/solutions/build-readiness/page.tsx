'use client';

import { SolutionPageTemplate } from '@/components/solutions/solution-page-template';
import { BuildDashboard, type BuildData } from '@/components/solutions/build-dashboard';
import * as content from '@content/solutions/build-readiness';

export default function BuildReadinessPage() {
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
      mockUI={<BuildDashboard data={content.mockData as BuildData} />}
    />
  );
}
