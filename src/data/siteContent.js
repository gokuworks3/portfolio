export const BRAND = {
  name: 'GokuWorks',
  shortName: 'GW',
  tagline: 'Web Developer',
  heroHeadline: 'GokuWorks builds professional, fast websites that help businesses get more enquiries.'
};

export const PROFILE = {
  name: 'M.Gopalakrishnan',
  role: 'Founder & Developer',
  location: 'Tamil Nadu, India',
  email: 'gokuworks3@gmail.com',
  phoneDisplay: '+91 93422 72925',
  phoneRaw: '9342272925',
  phoneHref: '+919342272925',
  whatsappNumber: '919342272925',
  responseTime: 'Replies within 24 hours',
  heroHeadline: BRAND.heroHeadline,
  aboutDescription:
    'I am M.Gopalakrishnan, founder of GokuWorks. I build modern business websites with clean structure, high performance, and mobile-first development to help local businesses build trust online and generate quality enquiries.'
};

export const PRICING_OPTIONS = [
  {
    id: 'option-1',
    label: 'OPTION 1',
    title: 'Website + Domain + Hosting',
    price: '₹4000-₹6000',
    note: 'Best for businesses who want everything managed end-to-end.',
    timeline: 'Delivery in 5-8 days',
    badge: 'Most Complete',
    accent: 'from-brand-600 via-cyan-500 to-accent-500',
    highlights: [
      'Custom website build',
      'Domain setup and configuration',
      'Hosting setup and deployment',
      'Mobile-first and responsive',
      'Basic SEO setup',
      '30 days free support'
    ],
    featured: true
  },
  {
    id: 'option-2',
    label: 'OPTION 2',
    title: 'Only Website (Live Link)',
    price: '₹2000',
    note: 'Perfect if you only need a professional website with a live deployment link quickly.',
    timeline: 'Delivery in 3-5 days',
    badge: 'Budget Friendly',
    accent: 'from-slate-800 via-slate-700 to-brand-700',
    highlights: [
      'Custom single website build',
      'Live deployment link',
      'Fully responsive layout',
      'Contact form integration',
      'Quick delivery'
    ],
    featured: false
  }
];
