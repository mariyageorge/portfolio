// All content lives here so the site is easy to edit later.
// Preserves real information while providing rich structure for presentation.

export const profile = {
  name: 'Mariya George',
  role: 'Integrated MCA Student & Aspiring Software Developer',
  tagline: 'Full-Stack Development · AI-Powered Applications · Cloud Technologies',
  email: 'mariyageorge.tech@gmail.com',
  github: 'https://github.com/mariyageorge',
  // Replace with your real LinkedIn profile URL
  linkedin: 'https://www.linkedin.com/in/REPLACE-WITH-YOUR-LINKEDIN',
  resumePath: '/resume.pdf',
  location: 'Kerala, India',
  availability: 'Available for Internships & Developer Roles',
}

export const heroDescription =
  'Integrated MCA student at Amal Jyothi College of Engineering with a focus on full-stack development, AI-powered software, and cloud technologies. Experienced in building production systems with modern web stacks, relational and document databases, and AWS infrastructure.'

export const about = {
  paragraphs: [
    "I'm an Integrated MCA student at Amal Jyothi College of Engineering (Autonomous), graduating in 2027, with a strong focus on end-to-end full-stack engineering across web, mobile, and cloud environments.",
    'During my software engineering internship at Ainsoft Solutions, I delivered production e-commerce features with .NET Core and React.js, applying clean code and OOP/SOLID principles within an Agile/Scrum team.',
    'I have built decentralized platforms with Solidity and Hardhat at Kerala Blockchain Academy, and deployed AWS EC2-hosted web applications. A cross-platform accounting system I engineered in Flutter and Firebase is currently live in production for a local organization.',
    'My final-year capstone project is ScholarNexus AI — an intelligent academic research ecosystem that centralizes thesis supervision, paper cataloging, and literature workflows, laying the groundwork for AI-powered literature analysis.',
  ],
  highlights: [
    {
      title: 'Full-Stack Architecture',
      desc: 'Building responsive frontends and robust REST APIs using React, Node.js, .NET Core, PHP, and modern CSS.',
    },
    {
      title: 'AI & Data Systems',
      desc: 'Architecting academic search and workflow tools, exploring RAG pipelines with LangChain, ChromaDB, and OpenAI API.',
    },
    {
      title: 'Cloud & Deployment',
      desc: 'AWS EC2 server deployment, Linux administration, and hands-on AWS Cloud Essentials training with labs.',
    },
    {
      title: 'Engineering Rigor',
      desc: '8.86 CGPA, Scrum Fundamentals Certified, YIP 6.0 District Winner, and clean code & SOLID advocate.',
    },
  ],
}

export const skillCategories = [
  {
    label: 'Languages',
    tint: 'violet',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'PHP', 'Solidity'],
  },
  {
    label: 'Frameworks & Web Technologies',
    tint: 'cyan',
    skills: ['React.js', 'Node.js', 'Express.js', '.NET Core', 'Tailwind CSS', 'RESTful APIs', 'HTML5', 'CSS3'],
  },
  {
    label: 'Databases & Storage',
    tint: 'amber',
    skills: ['MySQL', 'SQL', 'MongoDB', 'Firebase', 'Relational Database Design', 'Data Modelling'],
  },
  {
    label: 'Cloud & Infrastructure',
    tint: 'aws',
    skills: ['AWS EC2', 'AWS Cloud Essentials', 'VPC & IAM Basics', 'Server Deployment', 'Linux'],
  },
  {
    label: 'Developer Tools & Platforms',
    tint: 'teal',
    skills: ['Git', 'GitHub', 'Postman', 'Hardhat', 'MetaMask', 'Vite', 'VS Code'],
  },
  {
    label: 'Software Engineering Practices',
    tint: 'indigo',
    skills: [
      'Agile / Scrum',
      'SDLC',
      'OOP & SOLID',
      'Clean Code',
      'Unit Testing',
      'Debugging',
      'Code Reviews',
      'System Design',
    ],
  },
]

export const experience = [
  {
    role: 'Software Development Intern',
    org: 'Ainsoft Solutions',
    dates: 'June 2026 – July 2026',
    location: 'Thiruvananthapuram, Kerala',
    type: 'Internship',
    tech: ['.NET Core', 'React.js', 'REST APIs', 'OOP / SOLID', 'Agile/Scrum'],
    points: [
      'Implemented full-stack e-commerce features using .NET Core and React.js.',
      'Applied clean code and OOP/SOLID principles to build reusable RESTful APIs and frontend integrations.',
      'Collaborated with senior developers and QA through rigorous code reviews and architecture design discussions.',
      'Contributed to defect detection, testing, and resolution to deliver production-ready functionality within an Agile/Scrum workflow.',
    ],
  },
  {
    role: 'Blockchain Developer Intern',
    org: 'Kerala Blockchain Academy',
    dates: 'September 2024 – November 2024',
    location: 'Kerala, India',
    type: 'Internship',
    tech: ['Solidity', 'Hardhat', 'React.js', 'MetaMask', 'Web3'],
    points: [
      'Built EduFund, a decentralized scholarship platform ensuring transparent grant distribution.',
      'Designed, wrote, and tested Solidity smart contracts using the Hardhat development framework.',
      'Integrated smart contracts with an interactive React.js frontend via MetaMask wallet authentication.',
      'Applied reusable, modular, and testable smart contract development practices throughout the project lifecycle.',
    ],
  },
]

export const featuredProject = {
  name: 'ScholarNexus AI: An Intelligent Academic Research Ecosystem',
  shortName: 'ScholarNexus AI',
  badge: 'Featured Capstone Project',
  status: 'Final-Year Project · Active Development',
  dates: 'July 2026 – Present',
  image: '/images/scholarnexus.png',
  demo: 'https://scholar-nexus-deployment.vercel.app/',
  github: null, // Private academic repository
  overview:
    'A centralized academic research platform designed to help students organize research projects and papers, manage literature reviews, track research progress, and collaborate seamlessly with faculty guides.',
  deepDive:
    'ScholarNexus AI bridges the gap between students and research supervisors by structuring the entire academic literature lifecycle. It replaces disjointed spreadsheets and email threads with a unified workspace for proposal submissions, review iterations, and paper categorization.',
  scope: [
    'Research project and progress tracking',
    'Research paper upload and organization',
    'Student–faculty collaboration and review workflows',
    'Structured literature analysis and paper comparison',
    'Citation generation and similarity checking',
    'AI-assisted research support',
  ],
  implementedFeatures: [
    'Student–Faculty thesis supervision and mentorship queue workflow',
    'Research project proposal tracking and milestone reviews',
    'Research paper upload, categorization, and metadata indexing',
    'Node.js & Express.js RESTful API architecture',
    'MongoDB normalized schema & multi-collection data layer',
    'Responsive academic workspace UI built with React.js and Tailwind CSS',
  ],
  plannedFeatures: [
    'ChromaDB vector store integration for semantic paper search',
    'LangChain & OpenAI API integration for literature synthesis & summaries',
    'Structured cross-paper comparison and automated citation generation',
    'Python-based document processing and similarity analysis pipeline',
  ],
  integratedTech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
  plannedTech: ['OpenAI API', 'LangChain', 'ChromaDB', 'Python Document Processing'],
}

export const projects = [
  {
    name: 'StitchAndStory',
    status: 'Completed',
    dates: 'September 2025 – October 2025',
    image: '/images/stitch-and-story.png',
    tech: ['PHP', 'MySQL', 'JavaScript', 'AWS EC2', 'HTML/CSS'],
    description:
      'A scalable, full-stack e-commerce web platform deployed on an AWS EC2 instance, with a normalized MySQL schema designed for relational data integrity and high-efficiency query execution.',
    features: [
      'User authentication & session management',
      'Dynamic product catalog with category filtering',
      'Cart management & checkout pipeline',
      'Order processing & history tracking',
      'Normalized relational MySQL schema design',
      'Production deployment on AWS EC2 cloud server',
    ],
    github: 'https://github.com/mariyageorge/StitchandStory',
    demo: null,
  },
  {
    name: 'Church Account Management System',
    status: 'Live in Production',
    dates: 'April 2025 – June 2025',
    image: null,
    tech: ['Flutter', 'Firebase', 'NoSQL', 'Cloud Firestore'],
    description:
      'A cross-platform financial accounting system with real-time data synchronization, currently live in production and actively utilized by a local organization for daily bookkeeping, with ongoing maintenance and support.',
    features: [
      'Real-time bi-directional data synchronization via Firebase',
      'Cross-platform UI engineered with Flutter',
      'Transaction auditing, receipt recording & balance reconciliation',
      'Live in production use by local community stakeholders',
      'Active maintenance and continuous feature enhancements',
    ],
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
      'A full-stack productivity web application applying relational data modelling across multi-user task management, group expense tracking, and shared scheduling.',
    features: [
      'Multi-user task scheduling & priority management',
      'Group expense tracking with automatic bill-splitting calculations',
      'Relational database architecture for financial auditability',
      'Responsive dashboard with real-time balance indicators',
      'Hosted on AWS EC2 cloud infrastructure',
    ],
    github: 'https://github.com/mariyageorge/miniproject',
    demo: null,
  },
]

export const awsCertification = {
  issuer: 'AWS Training & Certification',
  title: 'Cloud Essentials - Knowledge Badge Readiness Path (includes Labs)',
  completionDate: 'October 26, 2026',
  recipient: 'MARIYA GEORGE',
  badgeImage: '/images/aws-cloud-essentials-badge.png',
  certificateFile: '/certificates/aws-cloud-essentials-certificate.pdf',
  description:
    'Completed the AWS Cloud Essentials - Knowledge Badge Readiness Path, including hands-on labs covering AWS core infrastructure, compute (EC2), networking (VPC), storage (S3), security & IAM, and foundational cloud architecture best practices.',
  skillsLearned: [
    'AWS Cloud Architecture Fundamentals',
    'Amazon EC2 Compute & Storage (S3 / EBS)',
    'Amazon VPC Networking & Subnets',
    'AWS IAM Security & Identity Best Practices',
    'Hands-on Lab Implementation & Validation',
  ],
}

export const otherCertifications = [
  {
    name: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'ScrumStudy',
    field: 'Agile & Project Management',
    year: '2024',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    field: 'Cloud & AI Foundations',
    year: '2025',
  },
  {
    name: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle',
    field: 'Database & Cloud Architecture',
    year: '2025',
  },
  {
    name: 'Develop GenAI Apps with Gemini and Streamlit',
    issuer: 'Google',
    field: 'Generative AI Applications',
    year: '2025',
  },
]

// Backward-compatible alias for any consumer relying on old 'certifications'
export const certifications = [
  { name: awsCertification.title, issuer: awsCertification.issuer },
  ...otherCertifications,
]

export const education = [
  {
    degree: 'Integrated Master of Computer Applications (MCA)',
    school: 'Amal Jyothi College of Engineering (Autonomous)',
    note: 'Affiliated with APJ Abdul Kalam Technological University',
    dates: '2022 – 2027 (Anticipated)',
    stat: '8.86',
    statLabel: 'CGPA',
    highlights: [
      'Specializing in full-stack web architectures, distributed systems, and AI engineering',
      'Leading ScholarNexus AI capstone project as final-year research thesis',
      'Active participant in technical symposiums, hackathons, and developer communities',
    ],
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    school: "St. John Nephumsian's Higher Secondary School",
    note: 'Bio-Maths / Science Stream',
    dates: '2020 – 2022',
    stat: '96.4%',
    statLabel: 'Aggregate',
    highlights: ['Academic excellence in Mathematics, Physics, Chemistry, and Computer Science'],
  },
  {
    degree: 'Secondary School Leaving Certificate (Class X)',
    school: 'Jyothi Public School',
    note: 'General Curriculum',
    dates: '2020',
    stat: '96%',
    statLabel: 'Aggregate',
    highlights: ['Top percentile academic achievement with distinction in science and mathematics'],
  },
]

export const achievements = [
  {
    title: 'District-Level Winner, Young Innovators Programme (YIP 6.0)',
    org: 'Government of Kerala',
    award: 'Awarded INR 25,000 for project innovation',
    detail:
      'Recognized at the district level for presenting an innovative technological solution evaluated on feasibility, social impact, and technical execution.',
    tag: 'Innovation Award',
  },
  {
    title: 'I2U (Idea to Utility) Funding Recipient',
    org: 'College-Funded Interdisciplinary Project',
    award: 'Phase 2 — Ongoing Grant',
    detail:
      'Awarded competitive institutional research and prototyping grant to advance an interdisciplinary technological solution from ideation to working utility.',
    tag: 'Research Grant',
  },
  {
    title: 'NASA Space Apps Challenge 2025',
    org: 'Global Hackathon & Tech Community Event',
    award: 'Finance Team Volunteer',
    detail:
      'Contributed to logistical and financial coordination for the global community hackathon, facilitating cross-functional collaboration among participating teams.',
    tag: 'Community Leadership',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
