import React from 'react';
import { Project } from '../../types';
import { Github, FileText, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const githubLink = project.links.find(l => l.type === 'github');

  return (
    <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface-light dark:bg-surface-dark border border-stroke-light dark:border-stroke-dark hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm text-left">
      <div>
        
        {/* Top Meta & Status Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded">
            {project.role}
          </span>
          <span className={`font-mono text-xs px-2.5 py-0.5 rounded ${
            project.status === 'demo-ready'
              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
              : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
          }`}>
            {project.statusLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-950 dark:text-gray-50 tracking-tight mb-2">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {project.shortTagline}
        </p>

        {/* Highlight Bullets */}
        {project.keyMetrics && (
          <ul className="space-y-1.5 mb-5">
            {project.keyMetrics.slice(0, 2).map((metric, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-2">{metric}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.slice(0, 5).map(tech => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-stroke-light dark:border-stroke-dark"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="font-mono text-[11px] px-2 py-0.5 rounded text-gray-500">
              +{project.stack.length - 5}
            </span>
          )}
        </div>

      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-stroke-light dark:border-stroke-dark flex items-center gap-3">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-sm min-h-[44px]"
        >
          <FileText className="w-4 h-4" />
          <span>Technical Case Study</span>
        </button>

        {githubLink && (
          <a
            href={githubLink.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub Repository`}
            className="p-2.5 rounded-xl border border-stroke-light dark:border-stroke-dark text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>

    </div>
  );
};

export default ProjectCard;
