import React, { useState } from 'react';
import { Mail, MessageSquare, Github, Linkedin, ArrowUp, Copy, Check, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dewaruci393@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer id="contact" className="border-t border-stroke-light dark:border-slate-800 bg-surface-light dark:bg-[#070B14] transition-colors duration-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        
        {/* Screen 4 Outro Layout Inspired by Image 2 Reference */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0A1122] to-[#050811] border border-cyan-500/20 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Circular Portrait & Contact Me */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative mb-5 group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-70 group-hover:opacity-100 blur-md transition duration-300"></div>
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-slate-950 bg-slate-900 shadow-2xl">
                  <img 
                    src="/danang.jpg" 
                    alt="Rahadyan Danang Susetyo Pranawa" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-1">
                [CONTACT PERSON]
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                CONTACT ME
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mb-4">
                Let's Build High-Performance Systems. Open for engineering collaborations, technical inquiries, and full-time opportunities.
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tuwowo 1 / 21, Surabaya, Indonesia</span>
              </div>
            </div>

            {/* Huge THANK YOU 2026 Display & Channels */}
            <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              
              {/* Massive Editorial Display Typography */}
              <div className="mb-6">
                <div className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight font-sans">
                  THANK YOU
                </div>
                <div className="text-3xl sm:text-5xl md:text-6xl font-light text-cyan-400 font-mono tracking-widest">
                  2026
                </div>
              </div>

              {/* Direct Social & Communication Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full max-w-md">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6281235163528"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Chat"
                  className="p-3 rounded-2xl bg-slate-800/80 hover:bg-emerald-600/20 border border-slate-700 hover:border-emerald-500/50 text-white transition-all min-h-[48px] flex items-center gap-3 text-left group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-slate-400">WHATSAPP</div>
                    <div className="text-xs font-bold text-white truncate">081235163528</div>
                  </div>
                </a>

                {/* Email with copy action */}
                <div className="relative">
                  <a
                    href="mailto:dewaruci393@gmail.com"
                    aria-label="Send Email"
                    className="p-3 rounded-2xl bg-slate-800/80 hover:bg-cyan-600/20 border border-slate-700 hover:border-cyan-500/50 text-white transition-all min-h-[48px] flex items-center gap-3 text-left group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono text-slate-400">EMAIL</div>
                      <div className="text-xs font-bold text-white truncate">dewaruci393</div>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy full email address"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 bg-slate-900/80 border border-slate-700"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/rahadyan-danang-susetyo-pranawa-083140294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-2xl bg-slate-800/80 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500/50 text-white transition-all min-h-[48px] flex items-center gap-3 text-left group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-slate-400">LINKEDIN</div>
                    <div className="text-xs font-bold text-white truncate">Rahadyan Danang</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Rahdansuwa24"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-white transition-all min-h-[48px] flex items-center gap-3 text-left group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-slate-400">GITHUB</div>
                    <div className="text-xs font-bold text-white truncate">Rahdansuwa24</div>
                  </div>
                </a>

              </div>

            </div>

          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 dark:text-slate-400">
          <div>
            <span>(c) {new Date().getFullYear()} Rahadyan Danang Susetyo Pranawa. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-stroke-light dark:border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors min-h-[44px]"
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
