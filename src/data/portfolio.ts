export interface Project {
  title: string
  company: string
  period?: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  image: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'tools' | 'other'
}

export interface Experience {
  company: string
  role: string
  period: string
  client?: string
  highlights: string[]
  projects: { name: string; description: string }[]
}

export const portfolio = {
  name: 'Dineshprabu A.',
  role: 'Frontend React Developer',
  tagline: 'From QA to code — building reliable, user-focused web applications.',
  email: 'prabu2809@gmail.com',
  location: 'India',
  available: true,

  social: {
    github: 'https://github.com/Dinesh-prabu',
    linkedin: 'https://www.linkedin.com/in/dineshprabu-a-97553ba0/',
  },

  about: [
    'I started my career in June 2018 as a manual tester, then moved into test automation through April 2020. That foundation in quality and attention to detail shaped how I write code today.',
    'Since April 2020, I have been building web applications as a developer — from e-commerce platforms to casino operations dashboards and enterprise shipping modules for global clients like DHL.',
    'I work primarily with React, focusing on clean UI, solid component structure, and shipping features that hold up in production. I also have 6 months of hands-on Java experience from my early development career.',
  ],

  stats: [
    { label: 'Years in IT', value: '8+' },
    { label: 'Years in Development', value: '6+' },
    { label: 'Products Built', value: '4+' },
  ],

  experience: [
    {
      company: 'Encora Innovation Labs',
      role: 'Frontend Developer',
      period: 'Sep 2025 – Present',
      client: 'DHL',
      highlights: [
        'Building the Shipping Module for DHL with guest and authenticated user flows.',
        'Enabling users to create shipments via guest mode or login mode.',
      ],
      projects: [
        {
          name: 'DHL Shipping Module',
          description:
            'Guest and login modes for shipment creation — users can start a shipment without an account or sign in for a full experience.',
        },
      ],
    },
    {
      company: 'Itechnowiz Software Solutions Pvt Ltd',
      role: 'Frontend Developer',
      period: 'Feb 2022 – Sep 2025',
      highlights: [
        'Developed web applications for casino operations — user data, financial tracking, and incident management.',
        'Built separate tools for casino employees to manage incidents and manual transactions.',
      ],
      projects: [
        {
          name: 'Synkros',
          description:
            'Central platform for casino user data — profit & loss tracking, jackpots, transactions, and incident records.',
        },
        {
          name: 'Synk31',
          description:
            'Dedicated portal for casino staff to create incidents and manually record transactions.',
        },
      ],
    },
    {
      company: 'Lynk Logistics Pvt Ltd',
      role: 'Frontend Developer',
      period: 'Apr 2020 – Feb 2022',
      highlights: [
        'Transitioned from QA into development and delivered production e-commerce features.',
      ],
      projects: [
        {
          name: 'Lynk Mandi',
          description:
            'E-commerce website for retailers to list and sell their products online.',
        },
      ],
    },
    {
      company: 'QA Foundation',
      role: 'Manual Tester → Automation Tester',
      period: 'Jun 2018 – Apr 2020',
      highlights: [
        'Started as a manual tester and progressed into test automation.',
        'Built a strong eye for edge cases and quality that carries into development today.',
      ],
      projects: [],
    },
  ] satisfies Experience[],

  skills: [
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'HTML & CSS', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'Redux', category: 'frontend' },
    { name: 'Context API', category: 'frontend' },
    { name: 'REST APIs', category: 'frontend' },
    { name: 'Responsive Design', category: 'frontend' },
    { name: 'Java', category: 'other' },
    { name: 'Git', category: 'tools' },
    { name: 'pnpm', category: 'tools' },
    { name: 'Vite', category: 'tools' },
    { name: 'Test Automation', category: 'tools' },
    { name: 'Agile / Scrum', category: 'tools' },
    { name: 'Web Accessibility', category: 'other' },
    { name: 'Performance', category: 'other' },
    { name: 'Cross-browser Testing', category: 'other' },
  ] satisfies Skill[],

  projects: [
    {
      title: 'DHL Shipping Module',
      company: 'Encora Innovation Labs · Client: DHL',
      period: '2025 – Present',
      description:
        'Shipping module with guest and login flows so users can create shipments without signing up or use a full authenticated experience.',
      tags: ['React', 'Guest Flow', 'Authentication'],
      image: 'shipping',
    },
    {
      title: 'Synkros',
      company: 'Itechnowiz Software Solutions',
      period: '2022 – 2025',
      description:
        'Casino operations platform tracking user data, profit & loss, jackpots, transactions, and incidents in one place.',
      tags: ['React', 'Dashboard', 'Data Management'],
      image: 'casino',
    },
    {
      title: 'Synk31',
      company: 'Itechnowiz Software Solutions',
      period: '2022 – 2025',
      description:
        'Employee-facing portal for manual incident creation and transaction entry used by casino operations staff.',
      tags: ['React', 'Forms', 'Internal Tools'],
      image: 'incidents',
    },
    {
      title: 'Lynk Mandi',
      company: 'Lynk Logistics Pvt Ltd',
      period: '2020 – 2022',
      description:
        'E-commerce platform enabling retailers to showcase and sell their products online.',
      tags: ['React', 'E-Commerce', 'Retail'],
      image: 'ecommerce',
    },
  ] satisfies Project[],
}

export type Portfolio = typeof portfolio
