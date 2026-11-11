import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend & Cloud Systems',
    headline: 'Containerized microservices, relational modeling, and production cloud hosting.',
    skills: [
      { name: 'Node.js & Express', level: 'Production', verifiedContext: 'Core backend engine for MAPTA, LuLuSin, and Trash Management' },
      { name: 'Docker & Compose', level: 'Production', verifiedContext: 'Multi-service orchestration on Azure VM with memory boundaries' },
      { name: 'MySQL & TiDB Cloud', level: 'Production', verifiedContext: 'Distributed relational databases with strict TLS handshakes' },
      { name: 'Caddy & Reverse Proxy', level: 'Production', verifiedContext: 'Automated HTTPS Let Encrypt certificates and internal port routing' },
      { name: 'Linux / Ubuntu', level: 'Intermediate', verifiedContext: 'Server provisioning, swap configuration, and daemon management' },
      { name: 'PostgreSQL', level: 'Academic', verifiedContext: 'EduPortal Pro RBAC database architecture' }
    ]
  },
  {
    category: 'Frontend & Mobile',
    headline: 'High-performance responsive clients with zero lag and accessible interactions.',
    skills: [
      { name: 'React & Vite', level: 'Production', verifiedContext: 'SPA development with optimized bundle splits and edge hosting' },
      { name: 'Tailwind CSS', level: 'Production', verifiedContext: 'Utility-first responsive layouts adhering to strict contrast standards' },
      { name: 'Flutter', level: 'Academic', verifiedContext: 'Mobile exam application for LuLuSin UTBK simulation' },
      { name: 'TypeScript', level: 'Production', verifiedContext: 'Type-safe contracts across components and domain schemas' }
    ]
  },
  {
    category: 'AI & Domain Specialization',
    headline: 'Applied artificial intelligence, medical imaging protocols, and retrieval augmentation.',
    skills: [
      { name: 'ONNX Runtime', level: 'Production', verifiedContext: 'Pathology screening for Tuberculosis and Cardiomegaly in VISMED-PACS' },
      { name: 'LLM RAG & Copilots', level: 'Production', verifiedContext: 'Contextual medical report interpretation and anomaly synthesis' },
      { name: 'DICOM & Orthanc PACS', level: 'Domain', verifiedContext: 'Medical imaging network routing, C-STORE, and OHIF viewer integration' },
      { name: 'Model Context Protocol (MCP)', level: 'Applied', verifiedContext: 'Tool routing between AI agents and PACS database gateways' }
    ]
  },
  {
    category: 'DevOps & Tooling',
    headline: 'Continuous delivery pipelines, object storage, and API verification.',
    skills: [
      { name: 'Cloudflare Pages', level: 'Production', verifiedContext: 'Automated Git builds and edge Anycast global CDN distribution' },
      { name: 'Cloudflare R2', level: 'Production', verifiedContext: 'S3-compatible blob storage with zero egress bandwidth charges' },
      { name: 'Git & GitHub', level: 'Proficient', verifiedContext: 'Branching workflows, version control, and open source collaboration' },
      { name: 'Postman & TablePlus', level: 'Proficient', verifiedContext: 'API contract testing and database inspection' }
    ]
  }
];
