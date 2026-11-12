import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ProjectsSection from './components/sections/ProjectsSection';
import TechRadarSection from './components/sections/TechRadarSection';
import ExperienceSection from './components/sections/ExperienceSection';
import Footer from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-canvas-light dark:bg-canvas-dark text-gray-900 dark:text-gray-100 transition-colors duration-200 flex flex-col justify-between">
        <div>
          <Navbar />
          <main id="main-content">
            <Hero />
            <ProjectsSection />
            <TechRadarSection />
            <ExperienceSection />
          </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
