export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
}

export const AUTHORS: Author[] = [
  {
    slug: 'nolan-terry',
    name: 'Nolan Terry',
    role: 'Founder & CEO',
    bio: 'Nolan Terry is the founder of FireLog and CEO of Nolan Ventures, building inspection management software for fire protection contractors. He created FireLog to replace paper-based NFPA inspection workflows that cost fire protection companies time, money, and compliance headaches.',
    expertise: ['Fire Protection', 'NFPA Compliance', 'Inspection Software', 'SaaS'],
  },
  {
    slug: 'firelog-team',
    name: 'FireLog Editorial Team',
    role: 'Fire Protection Industry Research',
    bio: 'The FireLog editorial team produces guides on fire inspection compliance, NFPA standards, sprinkler systems, and fire protection business operations. Our content helps fire protection contractors stay compliant and grow their businesses.',
    expertise: ['NFPA Standards', 'Fire Inspection', 'Sprinkler Systems', 'Compliance'],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find(a => a.slug === slug);
}
