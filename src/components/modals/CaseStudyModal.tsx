import React, { useEffect } from 'react';
import { Project } from '../../types';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Layers, GitCompare } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-light dark:bg-surface-dark border border-stroke-light dark:border-stroke-dark shadow-2xl p-6 sm:p-8 text-left transition-colors duration-200"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-stroke-light dark:border-stroke-dark pb-4 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                {project.role}
              </span>
              <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                {project.period}
              </span>
              <span className={`font-mono text-xs px-2.5 py-0.5 rounded ${
                project.status === 'demo-ready'
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                  : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
              }`}>
                {project.statusLabel}
              </span>
            </div>
            <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-gray-50">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2.5 rounded-xl text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Short Tagline */}
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-6">
          {project.shortTagline}
        </p>

        {/* Section 1: Problem */}
        <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-[#0B0F17] border border-stroke-light dark:border-stroke-dark">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Technical Problem & Context</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Section 2: Solution & Architecture */}
        <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-[#0B0F17] border border-stroke-light dark:border-stroke-dark">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4" />
            <span>Architecture & Solution</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            {project.solution}
          </p>
          <div className="font-mono text-xs p-2.5 rounded bg-surface-light dark:bg-surface-dark border border-stroke-light dark:border-stroke-dark text-blue-600 dark:text-blue-400">
            {project.architectureDetails}
          </div>
        </div>

        {/* Section 3: Trade-offs & Decisions */}
        <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-[#0B0F17] border border-stroke-light dark:border-stroke-dark">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
            <GitCompare className="w-4 h-4" />
            <span>Engineering Trade-offs & Decisions</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.tradeoffs}
          </p>
        </div>

        {/* Key Metrics & Highlights */}
        {project.keyMetrics && project.keyMetrics.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
              Verified Production Metrics
            </h3>
            <ul className="space-y-2">
              {project.keyMetrics.map((metric, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack Pills */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
            Production Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-stroke-light dark:border-stroke-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* External Repos & Actions */}
        <div className="pt-4 border-t border-stroke-light dark:border-stroke-dark flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {project.links.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-950 font-semibold text-xs hover:opacity-90 transition-opacity min-h-[44px]"
              >
                {link.type === 'github' ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-semibold text-xs hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors min-h-[44px]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyModal;
