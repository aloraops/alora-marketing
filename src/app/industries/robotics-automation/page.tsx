'use client';

import { IndustryPageTemplate } from '@/components/industries/industry-page-template';
import * as content from '@content/industries/robotics-automation';

export default function RoboticsAutomationPage() {
  return (
    <IndustryPageTemplate
      hero={content.hero}
      painPoints={content.painPoints}
      capabilities={content.capabilities}
      relevantModules={content.relevantModules}
      cta={content.cta}
    />
  );
}
