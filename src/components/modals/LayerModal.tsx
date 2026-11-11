import React, { useEffect } from 'react';
import { ArchitectureTier } from '../../types';
import { X, ShieldCheck } from 'lucide-react';

interface LayerModalProps {
  tier: ArchitectureTier | null;
  onClose: () => void;
}

export const LayerModal: React.FC<LayerModalProps> = ({ tier, onClose }) => {
  useEffect(() => {
    if (!tier) return;

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
  }, [tier, onClose]);

  if (!tier) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="layer-modal-title"
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-light dark:bg-surface-dark border border-stroke-light dark:border-stroke-dark shadow-2xl p-6 sm:p-8 text-left transition-colors duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-stroke-light dark:border-stroke-dark pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded">
                TIER 0{tier.tierNumber}
              </span>
              <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                {tier.badge}
              </span>
            </div>
            <h2 id="layer-modal-title" className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
              {tier.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Layer Details"
            className="p-2.5 rounded-xl text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Description */}
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {tier.roleDescription}
        </p>

        {/* Tech Pills */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
            Key Technologies & Policies
          </h3>
          <div className="flex flex-wrap gap-2">
            {tier.techPills.map(tech => (
              <span 
                key={tech}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-stroke-light dark:border-stroke-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Nodes Breakdown */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
            Node & Instance Specifications
          </h3>
          <div className="space-y-3">
            {tier.nodes.map(node => (
              <div 
                key={node.name}
                className="p-4 rounded-xl bg-gray-50 dark:bg-[#0B0F17] border border-stroke-light dark:border-stroke-dark"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                    {node.name}
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    {node.specs}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {node.purpose}
                </p>
                <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Config: {node.keyConfig}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-4 border-t border-stroke-light dark:border-stroke-dark flex justify-end">
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

export default LayerModal;
