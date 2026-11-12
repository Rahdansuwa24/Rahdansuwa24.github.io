import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'trash-management',
    title: 'Trash Management: Role-Based Waste Logistics',
    shortTagline: 'Scalable municipal and commercial waste reporting system connecting residents, logistics partners, and regional administrators.',
    role: 'Backend Developer & Architecture Refactorer',
    status: 'demo-ready',
    statusLabel: 'Live Deployment',
    period: 'Aug 2024 - Nov 2024',
    featured: true,
    stack: ['Node.js', 'Express.js', 'React', 'MySQL', 'TiDB Cloud', 'Docker', 'Caddy'],
    keyMetrics: [
      'Role-based access control across 3 distinct user tiers',
      '512MB container memory constraint preventing resource leakage',
      'Controller-Service-Repository modular clean architecture'
    ],
    problem: 'The legacy codebase was a tightly-coupled monolith using mixed templates and unvalidated file upload handlers, creating maintenance risks and security vulnerabilities.',
    solution: 'Refactored the system into a modular Controller-Service-Repository architecture, separated client concerns into a modern React SPA, and isolated the backend in a Docker container bounded at 512MB RAM with automatic restart policies.',
    architectureDetails: 'Runs within an isolated Docker Compose network on an Azure VM. Routed and reverse-proxied via Caddy with automated HTTPS and custom DuckDNS dynamic routing.',
    tradeoffs: 'Migrated from local disk file uploads to cloud-ready multipart streaming to eliminate container filesystem saturation and enable stateless horizontal scaling.',
    liveUrl: 'http://trashmanage-sby.duckdns.org/',
    deploymentType: 'live',
    deploymentNote: 'Live and accessible on DuckDNS network with full end-to-end reporting workflow.',
    screenshotSlots: [
      {
        label: 'Screenshot Slot 1',
        caption: 'Public Waste Reporting & Interactive Map Locator'
      },
      {
        label: 'Screenshot Slot 2',
        caption: 'Admin Control Center, Device Blocking & Partner Dispatch'
      }
    ],
    links: [
      { label: 'Live Demo', url: 'http://trashmanage-sby.duckdns.org/', type: 'demo', isExternal: true },
      { label: 'GitHub Repository', url: 'https://github.com/Rahdansuwa24/trash-management', type: 'github', isExternal: true }
    ]
  },
  {
    id: 'eduportal',
    title: 'EduPortal Pro: Multi-Role School Management & AI Analytics',
    shortTagline: 'Comprehensive academic administration portal featuring role-based controls, 6-semester visual progress tracking, and automated AI quiz generation.',
    role: 'Fullstack Developer (6th Semester Project)',
    status: 'demo-ready',
    statusLabel: 'Live Deployment',
    period: 'Jun 2026 - Present',
    featured: true,
    stack: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'REST API', 'Tailwind CSS'],
    keyMetrics: [
      'Time-bound attendance tracking with automated fraud detection',
      'Multi-tier RBAC for administrators, teachers, students, and parents',
      'AI-driven quiz generation parsing curricular PDF documents'
    ],
    problem: 'Managing complex academic operations across disparate spreadsheets caused delays in attendance verification, grade reporting, and student performance visibility.',
    solution: 'Engineered a unified school management platform with strict Role-Based Access Control, automated time-bound attendance tracking, 6-semester visual analytics, and an integrated AI document parser generating quiz sets directly from teacher lesson plans.',
    architectureDetails: 'Containerized Express and React applications routed through port 8085 with persistent PostgreSQL volume storage and health checks.',
    tradeoffs: 'Selected PostgreSQL relational schemas with foreign key cascades to ensure strict data consistency between student rosters, grades, and attendance logs.',
    liveUrl: 'http://eduportal-sekolah.duckdns.org:8085/',
    deploymentType: 'live',
    deploymentNote: 'Live deployment running on port 8085 with multi-role credentials.',
    screenshotSlots: [
      {
        label: 'Screenshot Slot 1',
        caption: 'Multi-Role Portal Dashboard & Attendance Console'
      },
      {
        label: 'Screenshot Slot 2',
        caption: '6-Semester Visual Grade Analytics & AI Quiz Engine'
      }
    ],
    links: [
      { label: 'Live Demo', url: 'http://eduportal-sekolah.duckdns.org:8085/', type: 'demo', isExternal: true },
      { label: 'GitHub Repository', url: 'https://github.com/Rahdansuwa24/Eduportal', type: 'github', isExternal: true }
    ]
  },
  {
    id: 'mapta',
    title: 'MAPTA: Internship Administration Platform',
    shortTagline: 'Production administration system managing participant registration, placement matching, and dynamic certificate generation.',
    role: 'Backend Developer & System Architect (Dinas Perpustakaan Jatim)',
    status: 'demo-ready',
    statusLabel: 'Live Deployment',
    period: 'Jul 2025 - Nov 2025',
    featured: true,
    stack: ['Express.js', 'Puppeteer', 'MySQL 8.0', 'TiDB Cloud', 'Cloudflare R2', 'Docker', 'Caddy'],
    keyMetrics: [
      'Isolated 2GB memory boundary preventing host out-of-memory crashes',
      'P-Queue concurrency bottlenecking PDF renders to 1 active process',
      'Direct S3 stream upload to Cloudflare R2 bypassing VM disk I/O'
    ],
    problem: 'Batch generation of internship completion certificates using headless Chromium caused drastic RAM spikes, threatening to crash co-hosted API services on constrained virtual machines.',
    solution: 'Designed an asynchronous task queue using p-queue with strict concurrency (concurrency: 1) and containerized headless Chromium. Generated PDF buffers are directly streamed to Cloudflare R2 object storage using the AWS S3 SDK, storing only persistent CDN URLs in TiDB Cloud Serverless MySQL.',
    architectureDetails: 'Express API running in a container with a 2GB memory limit on an Azure VM. Routed through Caddy reverse proxy on port 8086 with automated TLS certificate provisioning.',
    tradeoffs: 'Decided against serverless Cloudflare Workers because Puppeteer requires a native Linux Chromium binary and shared memory access (/dev/shm) unavailable in v8 isolates.',
    liveUrl: 'http://mapta.duckdns.org:8086/',
    deploymentType: 'live',
    deploymentNote: 'Live deployment running on port 8086 developed during East Java Provincial Library service.',
    screenshotSlots: [
      {
        label: 'Screenshot Slot 1',
        caption: 'Participant Registration & Placement Workflow'
      },
      {
        label: 'Screenshot Slot 2',
        caption: 'Automated Headless PDF Certificate Engine'
      }
    ],
    links: [
      { label: 'Live Demo', url: 'http://mapta.duckdns.org:8086/', type: 'demo', isExternal: true },
      { label: 'GitHub Repository', url: 'https://github.com/Rahdansuwa24/Mapta', type: 'github', isExternal: true }
    ]
  },
  {
    id: 'lulusin',
    title: 'LuLuSin: UTBK-SNBT Exam Simulation Platform',
    shortTagline: 'High-availability tryout exam platform featuring real-time automated scoring, question banks, and multi-platform clients.',
    role: 'Mobile & API Developer (4th Semester Project)',
    status: 'in-progress',
    statusLabel: 'Private Deployment',
    period: 'Mar 2025 - Jul 2025',
    featured: true,
    stack: ['React 18', 'Vite', 'Express.js', 'Sequelize ORM', 'TiDB Cloud', 'Flutter', 'Tailwind CSS'],
    keyMetrics: [
      '24-hour in-memory cache reducing web scraper load',
      'Sequelize connection pooling with TLS verification on Port 4000',
      'Dual client ecosystem spanning Web SPA and Flutter mobile'
    ],
    problem: 'Exam syllabus data fetching relied on synchronous scraping routines that created performance bottlenecks during high-traffic practice sessions.',
    solution: 'Implemented an in-memory 24-hour cache for syllabus feeds, optimized Sequelize database connection pools with strict connection timeouts and SSL handshakes against TiDB Cloud Serverless, and containerized the API behind Docker.',
    architectureDetails: 'Frontend built with Flutter mobile and React web. Express API backend hosted locally and containerized for private deployment.',
    tradeoffs: 'Chose TiDB Cloud Serverless MySQL compatibility over MongoDB to enforce strict relational integrity across student answers, question keys, and score calculation schemas.',
    deploymentType: 'private',
    deploymentNote: 'Intentionally unhosted publicly to safeguard proprietary test items; full codebase available on GitHub.',
    screenshotSlots: [
      {
        label: 'Screenshot Slot 1',
        caption: 'Timed UTBK Practice Screen with Question Navigator'
      },
      {
        label: 'Screenshot Slot 2',
        caption: 'Real-Time Score Breakdown & Answer Diagnostics'
      }
    ],
    links: [
      { label: 'Mobile App Repo', url: 'https://github.com/Rahdansuwa24/mobile-lulusin', type: 'github', isExternal: true },
      { label: 'Backend API Repo', url: 'https://github.com/Rahdansuwa24/LuLuSin-API', type: 'github', isExternal: true }
    ]
  },
  {
    id: 'vismed-pacs',
    title: 'VISMED-PACS: Medical Image AI Inference System',
    shortTagline: 'Multi-modal diagnostic triage platform integrating Orthanc PACS, ONNX vision models, and an LLM-assisted RAG co-pilot.',
    role: 'PACS Developer & Final Project Partnership (RSI Ahmad Yani)',
    status: 'demo-ready',
    statusLabel: 'Restricted Access',
    period: 'Mar 2026 - Present',
    featured: true,
    stack: ['Python', 'ONNX Runtime', 'Orthanc PACS', 'DICOM', 'FastAPI', 'LLM RAG', 'React OHIF'],
    keyMetrics: [
      'Real-time automated pathology screening for Tuberculosis and Cardiomegaly',
      'DICOM metadata routing integrated with standard hospital PACS workflows',
      'Zero-footprint web viewer with OHIF custom extensions'
    ],
    problem: 'Clinical radiology workflows suffer from diagnostic delays and lack real-time AI assistance within traditional PACS software environments.',
    solution: 'Built lightweight ONNX microservices and an LLM-powered RAG assistant integrated directly with Orthanc PACS, automating multi-modal medical image screening across X-Ray, CT-Scan, and ECG modalities.',
    architectureDetails: 'Connects standard hospital DICOM nodes with an AI gateway microservice, using ONNX Runtime for CPU/GPU inference acceleration and local vector stores for clinical report synthesis.',
    tradeoffs: 'Selected ONNX Runtime over raw PyTorch in production to achieve faster inference cold-starts and significantly lower memory footprints on clinical workstations.',
    deploymentType: 'restricted',
    deploymentNote: 'Operates inside restricted hospital clinical network at RSI Ahmad Yani to comply with medical data privacy regulations.',
    screenshotSlots: [
      {
        label: 'Screenshot Slot 1',
        caption: 'Orthanc PACS DICOM Routing & Anomaly Triage Console'
      },
      {
        label: 'Screenshot Slot 2',
        caption: 'Multi-Modal Pathology Heatmap (TB, Cardiomegaly, ECG)'
      }
    ],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Rahdansuwa24/vismed-PACS', type: 'github', isExternal: true }
    ]
  }
];
