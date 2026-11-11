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
      'Accelerated clinical triage workflows by enabling real-time detection of critical pathologies including Tuberculosis and cardiomegaly.',
      'Deployed deep learning models processing hybrid medical imaging modalities including X-Ray, CT-Scan, and ECG.'
    ],
    tags: ['ONNX Runtime', 'Orthanc PACS', 'DICOM', 'FastAPI', 'LLM RAG', 'Healthcare Tech']
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
      'Constructed data reporting funnels and business KPI queries to provide administrative visibility.',
      'Automated batch PDF certificate generation with isolated concurrency queues to protect server memory stability.'
    ],
    tags: ['Node.js', 'Express', 'MySQL', 'Puppeteer', 'REST API', 'Public Sector']
  },
  {
    id: 'pens-education',
    role: 'Applied Bachelor in Informatics Engineering (D4)',
    organization: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    period: 'Jul 2023 - Jul 2027 (Expected)',
    location: 'Surabaya, Indonesia',
    type: 'education',
    achievements: [
      'Maintained a cumulative GPA of 3.70 / 4.01 focusing on Software Engineering, Distributed Systems, and AI Integration.',
      'Earned Diploma in Informatics Engineering with Cum Laude honors (GPA: 3.72 / 4.00).',
      'Completed multiple end-to-end semester engineering systems including EduPortal Pro, LuLuSin UTBK Tryout, and Trash Management.'
    ],
    tags: ['Software Engineering', 'Cloud Deployment', 'Distributed Systems', 'Cum Laude']
  }
];
