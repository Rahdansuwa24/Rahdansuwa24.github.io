import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import ProjectCard from '../cards/ProjectCard';
import CaseStudyModal from '../modals/CaseStudyModal';
import { Layers, Globe, Shield } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'live' | 'specialized'>('all');

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'live') return project.deploymentType === 'live';
    if (activeFilter === 'specialized') return project.deploymentType !== 'live';
    return true;
  });

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-stroke-light dark:border-slate-800">
      
      {/* Section Header Matching Screen 3 of Image 2 Reference */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-3xl text-left">
          
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>// VERIFIED PRODUCTION ARCHITECTURES</span>
          </div>

          <div className="flex flex-wrap items-baseline gap-3 mb-3">
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 dark:text-white tracking-tight uppercase">
              RECAP PROJECTS
            </h2>
            <span className="text-2xl sm:text-4xl font-extralight text-cyan-400 font-mono">
              2026
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-slate-200 mb-3">
            Featured Engineering Systems
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            Live web services, cloud reverse proxy routing, and applied AI systems.
            Includes 1 to 2 visual screenshot preview slots per project, active DuckDNS deployment links, and architectural specifications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-200/80 dark:bg-slate-900 border border-stroke-light dark:border-slate-800 self-start md:self-end">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all min-h-[38px] ${
              activeFilter === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                : 'text-gray-700 dark:text-slate-300 hover:text-cyan-500'
            }`}
          >
            All Systems ({projects.length})
          </button>
          <button
            onClick={() => setActiveFilter('live')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all min-h-[38px] flex items-center gap-1.5 ${
              activeFilter === 'live'
                ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                : 'text-gray-700 dark:text-slate-300 hover:text-emerald-500'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Live Deployments (3)</span>
          </button>
          <button
            onClick={() => setActiveFilter('specialized')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all min-h-[38px] flex items-center gap-1.5 ${
              activeFilter === 'specialized'
                ? 'bg-blue-600 text-white shadow-md font-bold'
                : 'text-gray-700 dark:text-slate-300 hover:text-blue-500'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Private & Medical (2)</span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={p => setActiveCaseStudy(p)}
          />
        ))}
      </div>

      {/* Detailed Technical Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />

    </section>
  );
};

export default ProjectsSection;
