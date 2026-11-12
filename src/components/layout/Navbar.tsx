import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X, FileDown, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  const navLinks = [
    { name: 'Profile', href: '#profile', id: 'profile' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Capabilities', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = navLinks.map(l => document.getElementById(l.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop - 150 <= scrollY) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-canvas-light/85 dark:bg-[#070B14]/85 border-b border-stroke-light dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 py-3 flex items-center justify-between gap-4">
        
        {/* Brand with Monogram inspired by Reference */}
        <a 
          href="#main-content" 
          className="flex items-center gap-3 text-gray-900 dark:text-gray-100 font-bold tracking-tight hover:opacity-90 transition-opacity group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white font-extrabold text-base shadow-[0_0_15px_rgba(6,182,212,0.3)] border border-cyan-400/40">
            <span>RD</span>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#070B14] rounded-full" title="Active Systems Online"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-gray-950 dark:text-white leading-tight">
              Rahadyan Danang
            </span>
            <span className="font-mono text-[11px] font-medium text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-cyan-500" />
              PORTFOLIO 2026
            </span>
          </div>
        </a>

        {/* Desktop Floating Pill Navigation inspired by Image 2 */}
        <nav 
          className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-200/70 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 shadow-inner backdrop-blur-md" 
          aria-label="Main Navigation"
        >
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold px-3.5 py-2 rounded-full transition-all duration-200 min-h-[36px] flex items-center ${
                  isActive
                    ? 'bg-cyan-500 text-white shadow-[0_0_16px_rgba(6,182,212,0.4)] dark:bg-cyan-500/20 dark:text-cyan-300 dark:border dark:border-cyan-400/50'
                    : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-white/50 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download="Rahadyan-Danang-Resume.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-950 transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)] min-h-[44px]"
            aria-label="Download Resume PDF"
          >
            <FileDown className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center border border-transparent dark:border-slate-800"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center border border-transparent dark:border-slate-800"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          data-testid="mobile-menu"
          className="lg:hidden border-b border-stroke-light dark:border-slate-800 bg-surface-light dark:bg-[#0A101D] px-4 py-4 space-y-2 shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 px-3 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-stroke-light dark:border-slate-800">
            <a
              href="/resume.pdf"
              download="Rahadyan-Danang-Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 transition-colors min-h-[44px]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
