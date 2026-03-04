import { cta as sharedCta } from '../shared';

export const seo = {
  title: 'Industries We Serve',
  description:
    'Alora powers supply chain operations for complex, BOM-driven hardware manufacturers across medical devices, defense & aerospace, robotics, and industrial equipment.',
};

export const hero = {
  title: 'Built for Complex Hardware Manufacturing',
  description:
    'Where a single part can put a whole build at risk. Alora is designed for industries where deep BOMs, long lead times, and supplier variability create constant execution risk.',
};

export const industries = [
  {
    slug: 'medical-devices',
    name: 'Medical Devices',
    icon: 'HeartPulse',
    summary: 'Regulated, multi-level BOMs where late part changes cascade into production, compliance, and delivery risk.',
    href: '/industries/medical-devices',
  },
  {
    slug: 'defense-aerospace',
    name: 'Defense & Aerospace',
    icon: 'Shield',
    summary: 'Low-volume, high-impact programs where every delay escalates across contracts, suppliers, and stakeholders.',
    href: '/industries/defense-aerospace',
  },
  {
    slug: 'robotics-automation',
    name: 'Robotics & Automation',
    icon: 'Cpu',
    summary: 'Tight tolerances, long lead times, and complex assemblies with zero slack for execution errors.',
    href: '/industries/robotics-automation',
  },
  {
    slug: 'industrial-equipment',
    name: 'Industrial Equipment',
    icon: 'Factory',
    summary: 'Highly configurable products, supplier variability, and long execution cycles that demand tight operational control.',
    href: '/industries/industrial-equipment',
  },
];

export const cta = {
  title: 'See How Alora Works for Your Industry',
  description: sharedCta.description,
  primaryCta: sharedCta.primary,
};
