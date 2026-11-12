import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'rsi-ahmadyani',
    role: 'PACS Developer (Final Project Partnership)',
    organization: 'Rumah Sakit Islam Ahmad Yani Surabaya',
    period: 'Mar 2026 - Present',
    location: 'Surabaya, Indonesia',
    type: 'partnership',
    achievements: [
      'Developed VISMED, a multi-modal AI inference system to eliminate clinical diagnostic delays in traditional PACS workflows.',
      'Engineered and integrated ONNX microservices and an LLM-powered RAG assistant with Orthanc PACS to automate medical image screening.',
      'Accelerated clinical triage workflows by enabling real-time detection of critical pathologies including Tuberculosis, cardiomegaly, and intracranial hemorrhage.',
      'Deployed deep learning vision models to process hybrid medical imaging modalities including X-Ray, CT-Scan, and ECG.'
    ],
    tags: ['ONNX Runtime', 'Orthanc PACS', 'DICOM', 'FastAPI', 'LLM RAG', 'Healthcare Tech']
  },
  {
    id: 'eduportal-pens',
    role: 'Fullstack Developer (6th Semester Project)',
    organization: 'Politeknik Elektronika Negeri Surabaya',
    period: 'Jun 2026 - Present',
    location: 'Surabaya, Indonesia',
    type: 'work',
    achievements: [
      'Developed EduPortal Pro, a multi-role school management web application using React, Express.js, and PostgreSQL.',
      'Built Role-Based Access Control (RBAC) architecture for administrators, teachers, students, and parents.',
      'Engineered automated time-bound attendance tracking and 6-semester student grade visual analytics.',
      'Integrated AI-driven quiz generation parsing curricular PDF documents directly into practice modules.'
    ],
    tags: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'AI Generation', 'RBAC']
  },
  {
    id: 'disperpusip',
    role: 'Backend Developer Intern',
    organization: 'Dinas Perpustakaan Provinsi Jawa Timur',
    period: 'Jul 2025 - Nov 2025',
    location: 'Surabaya, Indonesia',
    type: 'work',
    achievements: [
      'Architected and implemented the backend for MAPTA, an internship administration platform managing participant lifecycles.',
      'Designed relational database schemas in MySQL and built responsive RESTful APIs in Express.js.',
      'Constructed data reporting funnels and business KPI queries using Tableau and SQL to provide real-time operational visibility.',
      'Automated batch PDF certificate generation with isolated concurrency queues to protect server memory stability.'
    ],
    tags: ['Node.js', 'Express', 'MySQL', 'Puppeteer', 'REST API', 'Public Sector']
  },
  {
    id: 'pens-lulusin',
    role: 'Mobile Developer (4th Semester Project)',
    organization: 'Politeknik Elektronika Negeri Surabaya',
    period: 'Mar 2025 - Jul 2025',
    location: 'Surabaya, Indonesia',
    type: 'work',
    achievements: [
      'Developed a mobile-based UTBK-SNBT tryout simulation application using Flutter with real-time automated scoring.',
      'Designed responsive UI/UX for timed mock examinations and detailed answer review screens.',
      'Integrated mobile client with Express.js server infrastructure supporting rapid exam processing and score analytics.'
    ],
    tags: ['Flutter', 'Express.js', 'Sequelize', 'TiDB Cloud', 'REST API']
  },
  {
    id: 'pens-trash',
    role: 'Backend Developer (3rd Semester Project)',
    organization: 'Politeknik Elektronika Negeri Surabaya',
    period: 'Aug 2024 - Nov 2024',
    location: 'Surabaya, Indonesia',
    type: 'work',
    achievements: [
      'Developed role-based waste management web application using Node.js, Express.js, and MySQL.',
      'Implemented waste reporting with photo/video uploads, location tracking, and partner matching.',
      'Built admin and partner dashboards with user management, report handling, and device blocking features.'
    ],
    tags: ['Node.js', 'Express', 'MySQL', 'Docker', 'Clean Architecture']
  },
  {
    id: 'pens-bachelor',
    role: 'Applied Bachelor in Informatics Engineering (D4)',
    organization: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    period: 'Jul 2026 - Jul 2027 (Expected)',
    location: 'Surabaya, Indonesia',
    type: 'education',
    achievements: [
      'Current GPA: 3.70 / 4.01 focusing on Web Development, Generative AI integration, and Distributed Systems.',
      'Earned Diploma in Informatics Engineering with Cum Laude honors (GPA: 3.72 / 4.00) in July 2026.',
      'TOEFL score: 453 achieved at Politeknik Elektronika Negeri Surabaya.'
    ],
    tags: ['Software Engineering', 'Generative AI', 'Cum Laude', 'PENS']
  },
  {
    id: 'sman2-surabaya',
    role: 'Senior High School Graduate',
    organization: 'SMAN 2 Surabaya',
    period: 'Jul 2019 - Jul 2023',
    location: 'Surabaya, Indonesia',
    type: 'education',
    achievements: [
      'Graduated with overall score 87.80 / 100.00 with focus on Natural Sciences and analytical foundations.'
    ],
    tags: ['High School', 'Surabaya', 'Science']
  },
  {
    id: 'hima-pens',
    role: 'Expert Staff of Social & Community Department',
    organization: 'Himpunan Mahasiswa PENS Sumenep',
    period: 'Jul 2024 - Jul 2025',
    location: 'Sumenep, Indonesia',
    type: 'work',
    achievements: [
      'Coordinated social community initiatives, charity events, and knowledge-sharing workshops for the student community.'
    ],
    tags: ['Community', 'Leadership', 'Social Responsibility']
  }
];
