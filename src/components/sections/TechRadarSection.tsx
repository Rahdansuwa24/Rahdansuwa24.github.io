import React from 'react';
import { skillCategories } from '../../data/skills';
import { CheckCircle2, Cpu, Database, Layout, Wrench } from 'lucide-react';

export const TechRadarSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Backend')) return <Database className="w-5 h-5 text-blue-500" />;
    if (category.includes('Frontend')) return <Layout className="w-5 h-5 text-teal-500" />;
    if (category.includes('AI')) return <Cpu className="w-5 h-5 text-purple-500" />;
    return <Wrench className="w-5 h-5 text-amber-500" />;
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-stroke-light dark:border-stroke-dark">
      
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          <span>// Verified Stack & Capabilities</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-950 dark:text-gray-50 tracking-tight mb-4">
          Verified Technical Capabilities
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Technologies and protocols applied directly in production workloads, cloud deployments, and hospital partnerships.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map(cat => (
          <div
            key={cat.category}
            className="p-6 sm:p-7 rounded-2xl bg-surface-light dark:bg-surface-dark border border-stroke-light dark:border-stroke-dark shadow-sm text-left flex flex-col justify-between"
          >
            <div>
              {/* Category Title & Icon */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-stroke-light dark:border-stroke-dark">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {cat.category}
                  </h3>
                </div>
              </div>

              {/* Headline */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                {cat.headline}
              </p>

              {/* Skills List */}
              <div className="space-y-3">
                {cat.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-gray-50 dark:bg-[#0B0F17] border border-stroke-light dark:border-stroke-dark flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        <span className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 pl-5 sm:pl-5">
                        {skill.verifiedContext}
                      </p>
                    </div>

                    <span className="self-start sm:self-center font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 whitespace-nowrap">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TechRadarSection;
