import React from 'react';
import { Project } from '../../types';
import { Github, FileText, ExternalLink, Image, Lock, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const githubLink = project.links.find(l => l.type === 'github');

  return (
    <div className="flex flex-col justify-between rounded-3xl bg-surface-light dark:bg-slate-900/80 border border-stroke-light dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-lg text-left overflow-hidden group">
      
      {/* Visual Screenshot Placeholder Grid (1 or 2 Slots per User Request) */}
      <div className="p-4 sm:p-5 bg-slate-100/70 dark:bg-slate-950/70 border-b border-stroke-light dark:border-slate-800">
        <div className={`grid gap-3 ${project.screenshotSlots.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
          {project.screenshotSlots.map((slot, idx) => (
            <div 
              key={idx}
              className="relative rounded-2xl overflow-hidden bg-slate-200 dark:bg-[#070D1B] border border-stroke-light dark:border-slate-800/80 aspect-video flex flex-col justify-between p-3 group/slot hover:border-cyan-500/40 transition-colors shadow-inner"
            >
              {/* Window Chrome Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-300 dark:border-slate-800/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="font-mono text-[10px] text-gray-500 dark:text-slate-400 truncate max-w-[150px]">
                  {project.liveUrl ? project.liveUrl.replace('http://', '') : `${project.id}.local`}
                </span>
              </div>

              {/* Center Placeholder Canvas */}
              {slot.imagePath ? (
                <img 
                  src={slot.imagePath} 
                  alt={slot.caption} 
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-3 text-center">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-2 group-hover/slot:scale-110 transition-transform">
                    <Image className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="font-mono text-[11px] font-bold text-gray-800 dark:text-gray-200">
                    {slot.label}
                  </div>
                  <div className="text-[10px] text-gray-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {slot.caption}
                  </div>
                  <span className="mt-2 text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    Screenshot Slot Ready
                  </span>
                </div>
              )}

              {/* Slot Index Tag */}
              <div className="text-[9px] font-mono text-gray-400 dark:text-slate-500 self-end">
                [Slot {idx + 1}/2]
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          
          {/* Top Meta & Deployment Status Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
              {project.role}
            </span>

            {/* Deployment Status Indicator */}
            {project.deploymentType === 'live' && (
              <span className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Live Deployment</span>
              </span>
            )}

            {project.deploymentType === 'private' && (
              <span className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                <Lock className="w-3 h-3" />
                <span>Private Deployment</span>
              </span>
            )}

            {project.deploymentType === 'restricted' && (
              <span className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                <ShieldAlert className="w-3 h-3" />
                <span>Restricted Access</span>
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 dark:text-white tracking-tight mb-2">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {project.shortTagline}
          </p>

          {/* Deployment Explanation Note */}
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-stroke-light dark:border-slate-800/80 text-xs text-gray-700 dark:text-slate-300 mb-4 flex items-start gap-2">
            <span className="text-cyan-500 font-bold">INFO:</span>
            <span>{project.deploymentNote}</span>
          </div>

          {/* Key Metrics Bullets */}
          {project.keyMetrics && (
            <ul className="space-y-1.5 mb-5">
              {project.keyMetrics.slice(0, 2).map((metric, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{metric}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-stroke-light dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Action Controls & External URLs */}
        <div className="pt-4 border-t border-stroke-light dark:border-slate-800 flex flex-wrap items-center gap-3">
          
          {/* Live Launch Button for Live DuckDNS Projects */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all min-h-[44px]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Site (DuckDNS)</span>
            </a>
          )}

          {/* Technical Case Study Trigger */}
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold text-xs hover:opacity-90 transition-opacity shadow-sm min-h-[44px]"
          >
            <FileText className="w-4 h-4" />
            <span>Technical Case Study</span>
          </button>

          {/* GitHub Repository Link */}
          {githubLink && (
            <a
              href={githubLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub Repository`}
              className="p-2.5 rounded-xl border border-stroke-light dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Github className="w-4 h-4" />
            </a>
          )}

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;
