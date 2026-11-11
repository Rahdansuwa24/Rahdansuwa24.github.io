import React from 'react';
import { Mail, MessageSquare, Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stroke-light dark:border-stroke-dark bg-surface-light dark:bg-surface-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        {/* Contact Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-stroke-light dark:border-stroke-dark text-left">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-gray-50 mb-2">
              Let's Build High-Performance Systems
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Available for Software Engineering, Backend Architecture, and Applied AI integration roles. Get in touch directly via email or messaging channels.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:dewaruci393@gmail.com"
              aria-label="Send Email"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-sm min-h-[44px]"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <a
              href="https://wa.me/6281235163528"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors shadow-sm min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://github.com/Rahdansuwa24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-stroke-light dark:border-stroke-dark text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/rahadyan-danang-susetyo-pranawa-083140294/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-stroke-light dark:border-stroke-dark text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom credits & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 dark:text-gray-400">
          <div>
            <span>(c) {new Date().getFullYear()} Rahadyan Danang Susetyo Pranawa. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-stroke-light dark:border-stroke-dark hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors min-h-[44px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
