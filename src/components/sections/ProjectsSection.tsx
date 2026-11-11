import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import ProjectCard from '../cards/ProjectCard';
import CaseStudyModal from '../modals/CaseStudyModal';

export const ProjectsSection: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-stroke-light dark:border-stroke-dark">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          <span>// Verified Case Studies</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-950 dark:text-gray-50 tracking-tight mb-4">
          Featured Engineering Systems
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Production systems and applied engineering architectures. Each study documents concrete architectural decisions, memory constraints, and technical trade-offs.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
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
