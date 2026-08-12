// ---------------------------------------------------------------------------
// Edit this file to customize the entire site. Every section below reads
// from here — you shouldn't need to touch component files for basic content.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Your Name',
  initials: 'YN',
  role: 'Software Engineer',
  tagline: 'I build things for the web.',
  summary:
    "I'm a software engineer who enjoys turning ideas into fast, reliable products. Currently focused on full-stack development and looking for the next interesting problem to work on.",
  location: 'City, Country',
  resumeUrl: '/resume.pdf',
  availability: 'Open to new opportunities',
}

export const about = {
  paragraphs: [
    "Replace this with a couple of paragraphs about your background — where you've studied or worked, what you're good at, and what you care about as an engineer.",
    'Mention a project, a team, or a moment that shaped how you approach your work. Keep it conversational — this is the section people read to decide if they want to talk to you.',
  ],
  facts: [
    { label: 'Based in', value: 'City, Country' },
    { label: 'Focus', value: 'Full-Stack Development' },
    { label: 'Currently', value: 'Open to new roles' },
    { label: 'Education', value: 'Your Degree, Your University' },
  ],
}

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Docker', 'AWS', 'PostgreSQL'],
  },
  {
    category: 'Practices',
    items: ['REST APIs', 'CI/CD', 'Testing', 'Agile'],
  },
]

export const experience = [
  {
    role: 'Job Title',
    company: 'Company Name',
    period: '2024 — Present',
    points: [
      'Describe a responsibility or achievement in this role.',
      'Add another bullet with an outcome or metric if you have one.',
      'A third bullet works well if you have more to say.',
    ],
  },
  {
    role: 'Previous Job Title',
    company: 'Previous Company',
    period: '2022 — 2024',
    points: [
      'Describe what you did and the impact it had.',
      'Keep bullets short and specific — numbers help.',
    ],
  },
]

export const projects = [
  {
    title: 'Project One',
    description:
      'A short, punchy description of what this project does and why it matters. One or two sentences is plenty.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: null,
    liveUrl: '',
    githubUrl: '',
    featured: true,
  },
  {
    title: 'Project Two',
    description: 'Another project summary — what problem it solves and the stack you used.',
    tags: ['TypeScript', 'Next.js'],
    image: null,
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'Project Three',
    description: 'A third project. Swap these placeholders for your real work.',
    tags: ['Python', 'Flask'],
    image: null,
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
]

export const publications = [
  {
    title: 'Publication or Writing Title',
    venue: 'Conference / Journal / Blog',
    year: '2024',
    url: '',
  },
]

export const contact = {
  message:
    "I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi — my inbox is always open.",
  email: 'you@example.com',
  links: [
    { label: 'Email', value: 'you@example.com', href: 'mailto:you@example.com' },
    { label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourusername', href: 'https://linkedin.com/in/yourusername' },
  ],
}

export const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Publications', 'Contact']
