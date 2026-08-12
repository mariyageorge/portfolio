// All content lives here so the site is easy to edit later.
// Nothing in this file should be changed without updating the real resume too.

export const profile = {
  name: 'Mariya George',
  title: 'Integrated MCA Student | Full-Stack Developer',
  email: 'mariyageorge.tech@gmail.com',
  github: 'https://github.com/mariyageorge',
  // TODO: replace with your real LinkedIn URL
  linkedin: 'https://www.linkedin.com/in/REPLACE-WITH-YOUR-LINKEDIN',
  resumePath: '/resume.pdf',
}

export const heroDescription =
  "I build full-stack applications end to end — frontend interfaces, backend services, REST APIs, databases, and cloud-hosted deployments. Currently completing an Integrated MCA at Amal Jyothi College of Engineering, graduating in 2027."

export const about = {
  paragraphs: [
    "I'm an Integrated MCA student at Amal Jyothi College of Engineering, graduating in 2027, building full-stack applications across web, mobile, and cloud.",
    'I have delivered e-commerce features with .NET Core and React.js, and built a decentralized scholarship platform with Solidity and Hardhat.',
    "I design and deploy AWS EC2-hosted applications, and a cross-platform accounting system I built is currently live for a local organization.",
    "My final-year project is ScholarNexus AI — an academic literature search platform that blends search, retrieval, and AI to make research easier.",
  ],
}

export const skillCategories = [
  {
    label: 'Languages',
    tint: 'indigo',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'C'],
  },
  {
    label: 'Frameworks & Technologies',
    tint: 'teal',
    skills: ['React.js', 'Node.js', '.NET Core', 'PHP', 'HTML5', 'CSS3', 'RESTful APIs', 'JSON'],
  },
  {
    label: 'Databases',
    tint: 'amber',
    skills: ['MySQL', 'SQL', 'Relational Database Design & Data Modelling', 'MongoDB', 'Firebase'],
  },
  {
    label: 'Cloud & Deployment',
    tint: 'indigo',
    skills: ['AWS EC2', 'Server Deployment'],
  },
  {
    label: 'Developer Tools',
    tint: 'teal',
    skills: ['Git', 'GitHub', 'Version Control'],
  },
  {
    label: 'Software Engineering',
    tint: 'amber',
    skills: [
      'SDLC',
      'Agile/Scrum',
      'OOP',
      'SOLID',
      'Clean Code',
      'Unit Testing',
      'Debugging',
      'Code Reviews',
      'Design Discussions',
    ],
  },
]

export const experience = [
  {
    role: 'Software Development Intern',
    org: 'Ainsoft Solutions',
    dates: 'June 2026 – July 2026',
    location: 'Thiruvananthapuram, Kerala',
    points: [
      'Implemented full-stack e-commerce features using .NET Core and React.js.',
      'Applied clean code and OOP/SOLID principles to build reusable RESTful APIs and integrations.',
      'Collaborated with developers and QA through code reviews and design discussions.',
      'Contributed to defect detection, testing, and resolution to deliver production-ready functionality within an Agile/Scrum workflow.',
    ],
  },
  {
    role: 'Blockchain Developer Intern',
    org: 'Kerala Blockchain Academy',
    dates: 'September 2024 – November 2024',
    location: null,
    points: [
      'Built EduFund, a decentralized scholarship platform.',
      'Designed, wrote, and tested Solidity smart contracts using Hardhat.',
      'Integrated smart contracts with a React.js frontend via MetaMask authentication.',
      'Applied reusable, testable coding practices throughout.',
    ],
  },
]

export const projects = [
  {
    name: 'ScholarNexus AI',
    status: 'Ongoing',
    dates: 'July 2026 – Present',
    image: '/images/scholarnexus.png',
    tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
    description:
      'AI-powered academic literature search platform. Developing the backend with Node.js, a RESTful API layer, and MongoDB schema design to support retrieval-augmented academic literature queries.',
    features: ['Node.js backend', 'RESTful API layer', 'MongoDB schema design', 'Retrieval-augmented literature search (in development)'],
    github: null,
    demo: null,
  },
  {
    name: 'StitchAndStory',
    status: 'Completed',
    dates: 'September 2025 – October 2025',
    image: '/images/stitch-and-story.png',
    tech: ['PHP', 'MySQL', 'JavaScript', 'AWS EC2'],
    description:
      'A scalable, full-stack e-commerce platform deployed on AWS EC2, with a normalized MySQL schema designed for data integrity and query efficiency.',
    features: ['Authentication', 'Product catalog', 'Cart', 'Order management', 'Normalized MySQL schema', 'AWS EC2 deployment'],
    github: 'https://github.com/mariyageorge/StitchandStory',
    demo: null,
  },
  {
    name: 'Church Account Management System',
    status: 'Live in Production',
    dates: 'April 2025 – June 2025',
    tech: ['Flutter', 'Firebase'],
    description:
      'A cross-platform accounting system with real-time data synchronization, currently live in production and in active use by a local organization, with ongoing maintenance and defect resolution.',
    features: ['Real-time sync (Firebase)', 'Cross-platform (Flutter)', 'In active production use', 'Ongoing maintenance'],
    github: null,
    demo: null,
  },
  {
    name: 'LifeSync',
    status: 'Completed',
    dates: 'February 2025 – April 2025',
    image: '/images/lifesync.png',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'AWS EC2'],
    description:
      'A full-stack productivity web application applying relational data modelling across task management, expense tracking, and scheduling.',
    features: ['Task management', 'Expense tracking & splitting', 'Scheduling', 'Relational database design', 'AWS EC2 deployment'],
    github: 'https://github.com/mariyageorge/miniproject',
    demo: null,
  },
]

export const education = [
  {
    degree: 'MCA Integrated',
    school: 'Amal Jyothi College of Engineering (Autonomous)',
    note: 'Affiliated with APJ Abdul Kalam Technological University',
    dates: '2022 – 2027 (Anticipated)',
    stat: '8.86',
    statLabel: 'CGPA',
  },
  {
    degree: 'Class XII',
    school: "St. John Nephumsian's HSS",
    note: null,
    dates: '2020 – 2022',
    stat: '96.4%',
    statLabel: 'Aggregate',
  },
  {
    degree: 'Class X',
    school: 'Jyothi Public School',
    note: null,
    dates: '2020',
    stat: '96%',
    statLabel: 'Aggregate',
  },
]

export const certifications = [
  { name: 'Scrum Fundamentals Certified (SFC)', issuer: 'ScrumStudy' },
  { name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle' },
  { name: 'Oracle Certified Foundations Associate', issuer: 'Oracle' },
  { name: 'Develop GenAI Apps with Gemini and Streamlit', issuer: 'Google' },
]

export const achievements = [
  {
    title: 'District-Level Winner, Young Innovators Programme (YIP 6.0)',
    org: 'Government of Kerala',
    detail: 'Awarded INR 25,000 for project innovation.',
  },
  {
    title: 'I2U (Idea to Utility) Funding Recipient',
    org: 'College-Funded Interdisciplinary Project',
    detail: 'Phase 2 — Ongoing.',
  },
  {
    title: 'NASA Space Apps Challenge 2025',
    org: 'Global hackathon and tech community event',
    detail: 'Finance Team Volunteer.',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
