import React from 'react';
import { experiences } from '../../data/experience';
import { Briefcase, GraduationCap, Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const getExperienceIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-emerald-500" />;
      case 'partnership':
        return <Building2 className="w-5 h-5 text-purple-500" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-stroke-light dark:border-stroke-dark">
      
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          <span>// Trajectory & Credentials</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-950 dark:text-gray-50 tracking-tight mb-4">
          Engineering Experience & Education
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Industry internships, clinical hospital partnerships, and formal engineering education at Politeknik Elektronika Negeri Surabaya.
        </p>
      </div>

      {/* Timeline items */}
      <div className="space-y-6">
        {experiences.map(item => (
          <div
            key={item.id}
            className="p-6 sm:p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-stroke-light dark:border-stroke-dark shadow-sm text-left relative overflow-hidden"
          >
            
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-stroke-light dark:border-stroke-dark flex-shrink-0 mt-0.5">
                  {getExperienceIcon(item.type)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-gray-50 mb-1">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {item.organization}
                  </div>
                </div>
              </div>

              {/* Meta pills */}
              <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-100 dark:bg-gray-800/80">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-100 dark:bg-gray-800/80">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </span>
              </div>
            </div>

            {/* Achievements list */}
            <ul className="space-y-2 mb-6 sm:pl-14">
              {item.achievements.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-1.5 sm:pl-14 pt-4 border-t border-stroke-light dark:border-stroke-dark/50">
              {item.tags.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-stroke-light dark:border-stroke-dark"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default ExperienceSection;
