export type ProjectStatus = 'demo-ready' | 'in-progress';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'docs';
  isExternal?: boolean;
}

export interface Project {
  id: string;
  title: string;
  shortTagline: string;
  role: string;
  status: ProjectStatus;
  statusLabel: string;
  period: string;
  featured: boolean;
  stack: string[];
  keyMetrics?: string[];
  problem: string;
  solution: string;
  architectureDetails: string;
  tradeoffs: string;
  links: ProjectLink[];
}

export interface ArchitectureNode {
  name: string;
  specs: string;
  purpose: string;
  keyConfig: string;
}

export interface ArchitectureTier {
  id: string;
  tierNumber: number;
  title: string;
  badge: string;
  roleDescription: string;
  nodes: ArchitectureNode[];
  techPills: string[];
}

export interface SkillCategory {
  category: string;
  headline: string;
  skills: {
    name: string;
    level: string;
    verifiedContext: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'work' | 'education' | 'partnership';
  achievements: string[];
  tags: string[];
}
