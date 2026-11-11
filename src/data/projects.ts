import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'mapta',
    title: 'MAPTA: Internship Administration Platform',
    shortTagline: 'Production administration system managing participant registration, placement matching, and dynamic certificate generation.',
    role: 'Backend Developer & System Architect',
    status: 'in-progress',
    statusLabel: 'Deployment in Progress',
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
    architectureDetails: 'Express API running in a container with a 2GB memory limit on an Azure VM. Routed through Caddy reverse proxy on port 3001 with automated Let Encrypt TLS certificate provisioning.',
    tradeoffs: 'Decided against serverless Cloudflare Workers because Puppeteer requires a native Linux Chromium binary and shared memory access (/dev/shm) unavailable in v8 isolates.',
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Rahdansuwa24/Mapta', type: 'github', isExternal: true }
    ]
  },
  {
    id: 'lulusin',
    title: 'LuLuSin: UTBK-SNBT Exam Simulation Platform',
    shortTagline: 'High-availability tryout exam platform featuring real-time automated scoring, question banks, and multi-platform clients.',
    role: 'Fullstack Web & Mobile API Integrator',
    status: 'in-progress',
    statusLabel: 'Deployment in Progress',
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
    architectureDetails: 'Frontend deployed to Cloudflare Pages for instant edge distribution. Express API backend hosted on Azure VM behind Caddy reverse proxy on port 3002 with dedicated health-check endpoints.',
    tradeoffs: 'Chose TiDB Cloud Serverless MySQL compatibility over MongoDB to enforce strict relational integrity across student answers, question keys, and score calculation schemas.',
    links: [
      { label: 'Frontend Repo', url: 'https://github.com/Rahdansuwa24/LuLuSin-FrontEnd', type: 'github', isExternal: true },
      { label: 'Backend API Repo', url: 'https://github.com/Rahdansuwa24/LuLuSin-API', type: 'github', isExternal: true }
    ]
  },
  {
    id: 'trash-management',
    title: 'Trash Management: Role-Based Waste Logistics',
    shortTagline: 'Scalable municipal and commercial waste reporting system connecting residents, logistics partners, and regional administrators.',
    role: 'Backend Developer & Architecture Refactorer',
    status: 'in-progress',
    statusLabel: 'Deployment in Progress',
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
    architectureDetails: 'Runs alongside MAPTA and LuLuSin within the unified Azure VM Docker Compose network. Reverse-proxied via Caddy on port 3003 with isolated environment configuration.',
    tradeoffs: 'Migrated from local disk file uploads to cloud-ready multipart streaming to eliminate container filesystem saturation and enable stateless horizontal scaling.',
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Rahdansuwa24/trash-management', type: 'github', isExternal: true }
    ]
  },
  {
    id: 'vismed-pacs',
    title: 'VISMED-PACS: Medical Image AI Inference System',
    shortTagline: 'Multi-modal diagnostic triage platform integrating Orthanc PACS, ONNX vision models, and an LLM-assisted RAG co-pilot.',
    role: 'PACS Developer & Final Project Lead (RSI Ahmad Yani)',
    status: 'demo-ready',
    statusLabel: 'Research Case Study',
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
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Rahdansuwa24/vismed-PACS', type: 'github', isExternal: true }
    ]
  }
];
