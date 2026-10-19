// Verified business facts used across the public site.
// Source: project brief (inline). Pending items are flagged.
// These are static client constants; the backend is the source of truth for orders/payments.

export const brand = {
  name: 'GreenNiche Enterprise',
  founder: 'Clement Kwasi Annan',
  founderKnownAs: 'Kwasi Annan',
  founderRole: 'Founder and Managing Director',
  founderEducation: 'Final-year BCom Marketing student, University of Cape Coast',
  founderAdvocacy: 'Founder, The African Boy Child Organisation',
  phone: '0256673127',
  email: 'clementkwasiannan01@gmail.com',
  // PENDING CONFIRMATION: brief references both Old Ebu and Abuenu.
  location: 'Central Region, Ghana',
  tagline: 'Zero Waste. Full Value. Processing the Future.',
  closing: 'We are not just processing Gari. We are processing the future.',
  values: ['Sustainability', 'Innovation', 'Community', 'Zero waste', 'Climate action'],
  colors: { primaryGreen: '#1B7A4A', white: '#FFFFFF' },
  awards: [
    {
      title: 'Most Financially Sound Business',
      event: 'Compassion Business Challenge 2025',
    },
    {
      title: 'Shortlisted',
      event: 'Ecopreneurship Challenge 2026',
    },
  ],
}

// The four core products with verified descriptions. Prices come from the API
// (Gari configured at GH₵60; others are price-on-request).
export const coreProducts = [
  {
    slug: 'gari',
    name: 'Gari',
    summary: 'Premium processed cassava — our flagship product.',
    image: '/images/gn-image-2.jpg',
  },
  {
    slug: 'animal-feed',
    name: 'Animal Feed',
    summary: 'Nutritious feed from cassava peels for livestock farmers.',
    image: '/images/gn-image-3.jpg',
  },
  {
    slug: 'charcoal',
    name: 'Charcoal',
    summary: 'Charcoal from cassava peels — cleaner community energy.',
    image: '/images/gn-image-4.jpg',
  },
  {
    slug: 'starch',
    name: 'Starch',
    summary: 'Natural cassava starch — charcoal binder and industrial use.',
    image: '/images/gn-image-5.jpg',
  },
]
