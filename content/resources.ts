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
    name: 'Mike Chaney',
    role: 'Retired P&G Senior VP, Advisory Board Member',
    topic: 'Uncovering Hidden Supply Chain Risks',
    description:
      'Mike shares decades of experience leading global supply chain operations at Procter & Gamble, and discusses how hidden risks can silently erode execution and revenue.',
    videoUrl: '/videos/mike-interview.mp4',
    image: '/team/mike-chaney.jpeg',
    linkedin: 'https://www.linkedin.com/in/mike-chaney-5577935/',
  },
  {
    id: 'anubha-bhadauria',
    name: 'Anubha Bhadauria',
    role: 'Supply Chain Leader (Tesla, Rivian, Xylem), Advisory Board Member',
    topic: 'Building Contextual AI Workflows for Immediate Impact',
    description:
      'Anubha discusses building future-ready supply chains and how contextual AI workflows can drive immediate, measurable improvements in manufacturing operations.',
    videoUrl: '/videos/anubha-interview.mp4',
    image: '/team/anubha-bhadauria.jpg',
    linkedin: 'https://www.linkedin.com/in/anubha-bhadauria-3370583a/',
  },
];

export const finalCta = {
  title: 'Want to see Alora in action?',
  description: sharedCta.description,
  supportingLine: sharedCta.supportingLine,
  primaryCta: sharedCta.primary,
};
