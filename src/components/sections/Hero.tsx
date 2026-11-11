import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Server } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Live Cloud Status Banner */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>3 Cloud Microservices Deployed on Azure VM</span>
      </div>

      {/* Main Narrative */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 dark:text-gray-50 leading-[1.15] mb-6">
        Software Engineer & Backend Specialist{' '}
        <span className="text-blue-600 dark:text-blue-400 block sm:inline">
          with Generative AI Integration.
        </span>
      </h1>

      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-8">
        Applied Bachelor of Informatics Engineering student at Politeknik Elektronika Negeri Surabaya (PENS).
        Specialized in production-grade backend systems, distributed database architecture (TiDB Cloud Serverless),
        asynchronous processing pipelines, and applied medical AI integrations (ONNX and DICOM workflows).
      </p>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <a
          href="#architecture"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm min-h-[44px]"
        >
          <Server className="w-4 h-4" />
          <span>Explore Architecture</span>
        </a>

        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-200 dark:bg-surface-dark border border-stroke-light dark:border-stroke-dark text-gray-900 dark:text-gray-200 font-semibold text-sm hover:border-blue-500 dark:hover:border-blue-400 transition-colors min-h-[44px]"
        >
          <span>View Projects</span>
          <ArrowDown className="w-4 h-4" />
        </a>

        {/* Quick Social & Contact Icons */}
        <div className="flex items-center gap-2 sm:ml-2">
          <a
            href="https://github.com/Rahdansuwa24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-xl border border-stroke-light dark:border-stroke-dark text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/rahadyan-danang-susetyo-pranawa-083140294/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-xl border border-stroke-light dark:border-stroke-dark text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="mailto:dewaruci393@gmail.com"
            aria-label="Send Email"
            className="p-3 rounded-xl border border-stroke-light dark:border-stroke-dark text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Cloud Environment Highlights Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-stroke-light dark:border-stroke-dark text-left">
        <div className="p-3 rounded-lg bg-surface-light dark:bg-surface-dark/50 border border-stroke-light dark:border-stroke-dark">
          <div className="font-mono text-xs text-gray-500 dark:text-gray-400">EDGE CDN</div>
          <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 mt-0.5">Cloudflare Pages</div>
        </div>
        <div className="p-3 rounded-lg bg-surface-light dark:bg-surface-dark/50 border border-stroke-light dark:border-stroke-dark">
          <div className="font-mono text-xs text-gray-500 dark:text-gray-400">HOST & PROXY</div>
          <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 mt-0.5">Azure VM + Caddy</div>
        </div>
        <div className="p-3 rounded-lg bg-surface-light dark:bg-surface-dark/50 border border-stroke-light dark:border-stroke-dark">
          <div className="font-mono text-xs text-gray-500 dark:text-gray-400">DATABASE</div>
          <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 mt-0.5">TiDB Serverless</div>
        </div>
        <div className="p-3 rounded-lg bg-surface-light dark:bg-surface-dark/50 border border-stroke-light dark:border-stroke-dark">
          <div className="font-mono text-xs text-gray-500 dark:text-gray-400">OBJECT MEDIA</div>
          <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 mt-0.5">Cloudflare R2</div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
