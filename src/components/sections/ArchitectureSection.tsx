import React, { useState } from 'react';
import { architectureTiers } from '../../data/architecture';
import { ArchitectureTier } from '../../types';
import LayerModal from '../modals/LayerModal';
import { Server, Globe, Database, ArrowDown, ChevronRight, Layers } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<ArchitectureTier | null>(null);

  const getTierIcon = (id: string) => {
    switch (id) {
      case 'edge':
        return <Globe className="w-5 h-5 text-blue-500" />;
      case 'gateway':
        return <Server className="w-5 h-5 text-purple-500" />;
      case 'services':
        return <Layers className="w-5 h-5 text-amber-500" />;
      case 'persistence':
        return <Database className="w-5 h-5 text-emerald-500" />;
      default:
        return <Server className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="architecture" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-stroke-light dark:border-stroke-dark">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          <span>// Production Blueprint</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-950 dark:text-gray-50 tracking-tight mb-4">
          Interactive Cloud Topology
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Production architecture orchestrating frontend SPAs on Cloudflare Pages, containerized microservices on an Azure Virtual Machine behind Caddy, and persistent cloud data stores. Click any tier to inspect internal port routing, memory boundaries, and failover swap design.
        </p>
      </div>

      {/* Topology Flow Canvas */}
      <div className="space-y-4">
        {architectureTiers.map((tier, index) => (
          <div key={tier.id} className="relative">
            
            {/* Layer Card */}
            <div
              onClick={() => setSelectedTier(tier)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedTier(tier);
                }
              }}
              className="p-5 sm:p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-stroke-light dark:border-stroke-dark hover:border-blue-500 dark:hover:border-blue-400 transition-all cursor-pointer shadow-sm group text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Left: Tier identity & badge */}
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-stroke-light dark:border-stroke-dark flex-shrink-0">
                    {getTierIcon(tier.id)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                        TIER 0{tier.tierNumber}
                      </span>
                      <span className="font-mono text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-2 py-0.5 rounded">
                        {tier.badge}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tier.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Inspection Action */}
                <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <span className="hidden sm:inline">Inspect Tier Specs</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>

              </div>

              {/* Node pills preview */}
              <div className="mt-4 pt-4 border-t border-stroke-light dark:border-stroke-dark/50 flex flex-wrap gap-2">
                {tier.nodes.map(node => (
                  <span
                    key={node.name}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-gray-50 dark:bg-[#0B0F17] text-gray-700 dark:text-gray-300 border border-stroke-light dark:border-stroke-dark flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{node.name}</span>
                  </span>
                ))}
              </div>

            </div>

            {/* Connecting Flow Arrow between tiers */}
            {index < architectureTiers.length - 1 && (
              <div className="flex items-center justify-center my-1.5 text-gray-400 dark:text-gray-600">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            )}

          </div>
        ))}
      </div>

      {/* Layer Detail Inspection Modal */}
      <LayerModal
        tier={selectedTier}
        onClose={() => setSelectedTier(null)}
      />

    </section>
  );
};

export default ArchitectureSection;
