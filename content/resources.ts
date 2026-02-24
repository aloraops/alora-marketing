/**
 * Resources Page Content
 *
 * Video interviews and other resources.
 * Edit this file to add new videos or update descriptions.
 */

import { cta as sharedCta } from './shared';

export const meta = {
  title: 'Resources | Alora',
  description:
    'Watch interviews with supply chain leaders and explore insights on AI-driven operations.',
};

export const hero = {
  label: 'Resources',
  title: 'Learn from industry leaders',
  subtitle:
    'Watch conversations with supply chain executives on the challenges and opportunities shaping modern operations.',
};

export const interviews = [
  {
    id: 'mike-chaney',
    names: ['Mike Chaney', 'Sharon Ilan'],
    roles: ['Retired P&G Senior VP, Advisory Board Member', 'CEO & Co-Founder, Alora'],
    topic: 'Uncovering Hidden Supply Chain Risks',
    description:
      'Sharon interviews Mike about his decades leading global supply chain operations at P&G, and how hidden risks silently erode execution and revenue.',
    videoUrl: '/videos/mike-interview.mp4',
    images: ['/team/mike-chaney.jpeg', '/team/sharon-ilan.png'],
    linkedins: ['https://www.linkedin.com/in/mike-chaney-5577935/', 'https://www.linkedin.com/in/sharon-ilan/'],
    badge: '',
  },
  {
    id: 'anubha-bhadauria',
    names: ['Anubha Bhadauria'],
    roles: ['Supply Chain Leader (Tesla, Rivian, Xylem), Advisory Board Member'],
    topic: 'Building Contextual AI Workflows for Immediate Impact',
    description:
      'Anubha presents at Manifest 2026 on building future-ready supply chains and how contextual AI workflows drive immediate improvements in manufacturing.',
    videoUrl: '/videos/anubha-interview.mp4',
    images: ['/team/anubha-bhadauria.jpg'],
    linkedins: ['https://www.linkedin.com/in/anubha-bhadauria-3370583a/'],
    badge: 'Manifest 2026',
  },
];

export const finalCta = {
  title: 'Want to see Alora in action?',
  description: sharedCta.description,
  supportingLine: sharedCta.supportingLine,
  primaryCta: sharedCta.primary,
};
