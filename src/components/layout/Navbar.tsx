import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X, FileDown, Layers } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Architecture', href: '#architecture' },
    { name: 'Projects', href: '#projects' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Experience', href: '#experience' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-canvas-light/90 dark:bg-canvas-dark/90 border-b border-stroke-light dark:border-stroke-dark transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#main-content" 
          className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-bold text-base sm:text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="p-1.5 rounded-lg bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
            <Layers className="w-5 h-5" />
          </span>
          <span className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
            <span>Rahadyan Danang</span>
            <span className="font-mono text-xs font-normal text-gray-500 dark:text-gray-400">// Software Engineer</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download="Rahadyan-Danang-Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-sm min-h-[44px]"
            aria-label="Download Resume PDF"
          >
            <FileDown className="w-4 h-4" />
            <span>Resume</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
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
          className="md:hidden border-b border-stroke-light dark:border-stroke-dark bg-surface-light dark:bg-surface-dark px-4 py-4 space-y-3"
        >
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 min-h-[44px] flex items-center"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-stroke-light dark:border-stroke-dark">
            <a
              href="/resume.pdf"
              download="Rahadyan-Danang-Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors min-h-[44px]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
