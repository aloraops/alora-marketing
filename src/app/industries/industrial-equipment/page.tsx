'use client';

import { IndustryPageTemplate } from '@/components/industries/industry-page-template';
import * as content from '@content/industries/industrial-equipment';

export default function IndustrialEquipmentPage() {
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
