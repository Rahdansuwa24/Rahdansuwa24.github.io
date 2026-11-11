import { ArchitectureTier } from '../types';

export const architectureTiers: ArchitectureTier[] = [
  {
    id: 'edge',
    tierNumber: 1,
    title: 'Edge & Client Delivery Layer',
    badge: 'Global Anycast CDN',
    roleDescription: 'Static Single Page Applications distributed across Cloudflare global edge network, delivering sub-50ms TTFB worldwide.',
    techPills: ['Cloudflare Pages', 'React 19 / 18', 'Vite', 'Automatic SSL', 'Zero Cold Start'],
    nodes: [
      {
        name: 'mapta-rahdan.pages.dev',
        specs: 'React 19 + Vite SPA',
        purpose: 'Administrative frontend for internship registration and certificate retrieval.',
        keyConfig: 'Continuous deployment with edge asset caching'
      },
      {
        name: 'lulusin-rahdan.pages.dev',
        specs: 'React 18 + Vite SPA',
        purpose: 'Interactive exam simulation interface with real-time timers and answer sheets.',
        keyConfig: 'Client-side routing with _redirects fallback'
      },
      {
        name: 'trash-rahdan.pages.dev',
        specs: 'React + Tailwind SPA',
        purpose: 'Municipal waste reporting portal with citizen and partner dashboards.',
        keyConfig: 'Responsive role-based views'
      }
    ]
  },
  {
    id: 'gateway',
    tierNumber: 2,
    title: 'Gateway & Reverse Proxy Layer',
    badge: 'Azure Standard B2als v2',
    roleDescription: 'Central entrance managing traffic ingress, automated Let Encrypt TLS certificate provisioning, and container port multiplexing.',
    techPills: ['Caddy v2', 'DuckDNS Dynamic DNS', 'Automated TLS', 'Linux Ubuntu 24.04', '4GB Swap File'],
    nodes: [
      {
        name: 'Caddy Reverse Proxy',
        specs: 'Single binary with HTTP/2 and HTTP/3 support',
        purpose: 'Routes incoming subdomains to internal Docker bridge container ports without port exposure.',
        keyConfig: 'mapta.rahdan-api.duckdns.org -> :3001, lulusin.rahdan-api.duckdns.org -> :3002, trash.rahdan-api.duckdns.org -> :3003'
      },
      {
        name: 'Azure Virtual Machine Host',
        specs: '2 vCPU, 4GB RAM, Southeast Asia (Singapore)',
        purpose: 'Dedicated cloud compute environment hosting orchestrated container services.',
        keyConfig: 'Configured with 4GB Linux swapfile as an OOM (Out Of Memory) safety buffer'
      }
    ]
  },
  {
    id: 'services',
    tierNumber: 3,
    title: 'Service & Application Layer',
    badge: 'Docker Compose Orchestration',
    roleDescription: 'Isolated containerized backends enforcing strict memory allocations and independent process lifecycles.',
    techPills: ['Docker Compose', 'Node.js 20 LTS', 'Express.js', 'P-Queue', 'Sequelize ORM', 'Healthchecks'],
    nodes: [
      {
        name: 'backend-mapta (:3001)',
        specs: 'Memory Limit: 2.0 GB',
        purpose: 'Handles participant placement, database operations, and PDF generation.',
        keyConfig: 'PQueue(concurrency: 1) prevents Chromium memory exhaustion crashes'
      },
      {
        name: 'backend-lulusin (:3002)',
        specs: 'Memory Limit: 512 MB',
        purpose: 'Processes student exam submissions, scoring engines, and question bank feeds.',
        keyConfig: 'In-memory syllabus cache + persistent Sequelize connection pool'
      },
      {
        name: 'backend-trash (:3003)',
        specs: 'Memory Limit: 512 MB',
        purpose: 'Role-based waste report routing, partner matching, and administrative actions.',
        keyConfig: 'Modular Controller-Service-Repository architecture'
      }
    ]
  },
  {
    id: 'persistence',
    tierNumber: 4,
    title: 'Persistence & Media Layer',
    badge: 'Serverless Cloud Infrastructure',
    roleDescription: 'Fully managed distributed relational database and S3-compatible blob storage with zero maintenance overhead.',
    techPills: ['TiDB Cloud Serverless', 'MySQL 8.0 Protocol', 'Cloudflare R2', 'AWS S3 SDK Stream', 'Zero Egress Fees'],
    nodes: [
      {
        name: 'TiDB Cloud Cluster',
        specs: 'Distributed MySQL 8.0, 25 GiB free tier, zero sleep',
        purpose: 'Stores structured tabular data across three isolated schemas: db_mapta, db_lulusin, and db_trash.',
        keyConfig: 'Port 4000 with mandatory TLS 1.3 encryption and high concurrency handling'
      },
      {
        name: 'Cloudflare R2 Bucket',
        specs: 'S3-compatible Object Storage',
        purpose: 'Stores generated PDF completion certificates, registration documents, and citizen report media.',
        keyConfig: 'Zero egress fees, streamed directly via @aws-sdk/client-s3 without saving to local VM disk'
      }
    ]
  }
];
