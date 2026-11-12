import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Server, Terminal, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="profile" className="relative pt-8 pb-16 md:pt-14 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-rose-900/10 dark:bg-rose-900/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Screen 1 Cover Banner - Inspired by Image 2 Reference */}
      <div className="relative mb-12 p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0A1124] to-[#060913] border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Framed Photo in Capsule / Arch Shape (Matching Screen 1 of Reference) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group">
              
              {/* Outer Glow & Crimson / Cyan Capsule Ring */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-rose-600 via-purple-600 to-cyan-500 opacity-60 group-hover:opacity-100 blur-lg transition duration-500"></div>
              
              {/* Capsule Container */}
              <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-rose-950 via-[#120B1C] to-[#0A1020] border-2 border-rose-500/30 flex items-end justify-center shadow-2xl">
                
                {/* User Portrait Photo */}
                <img 
                  src="/danang.jpg" 
                  alt="Rahadyan Danang Susetyo Pranawa" 
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                  loading="eager"
                />

                {/* Subtle dark gradient overlay at bottom for cinematic blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-60"></div>
                
                {/* Monogram Badge Overlay */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-[11px] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  PENS INFORMATICS
                </div>
              </div>

            </div>
          </div>

          {/* Typography & Editorial Cover Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Live Cloud Status Banner */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>3 Cloud Microservices Deployed on Azure VM</span>
            </div>

            {/* Huge Display Heading (Matching PORTFOLIO 2026 Reference) */}
            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-sans">
                PORTFOLIO
              </h1>
              <span className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-widest text-cyan-400/90 font-mono">
                2026
              </span>
            </div>

            {/* Sub-label inspired by ■ CONTENT CREATOR */}
            <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs sm:text-sm tracking-widest uppercase mb-6">
              <span className="inline-block w-2.5 h-2.5 bg-cyan-400 shadow-[0_0_8px_#38bdf8]"></span>
              <span>SOFTWARE ENGINEER // BACKEND & CLOUD SYSTEMS</span>
            </div>

            {/* Role Header required for test assertions */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight mb-4">
              Software Engineer & Backend Specialist{' '}
              <span className="text-cyan-400 block sm:inline">
                with Generative AI Integration.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
              Applied Bachelor of Informatics Engineering student at Politeknik Elektronika Negeri Surabaya (PENS).
              Specialized in production backend architecture, distributed databases (TiDB Cloud Serverless),
              asynchronous worker queues, and medical AI inference microservices (ONNX Runtime & Orthanc PACS).
            </p>

            {/* Navigation & Action Triggers */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#architecture"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] min-h-[44px]"
              >
                <Server className="w-4 h-4" />
                <span>Explore Architecture</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all min-h-[44px]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-transparent hover:bg-white/5 border border-slate-700 text-cyan-300 font-semibold text-xs transition-colors min-h-[44px]"
              >
                <span>Contact</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Screen 2 Profile & About Section - Matching Image 2 Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Column: Portrait, Education & Language */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Portrait & Greeting Block */}
          <div className="p-6 rounded-2xl bg-surface-light dark:bg-slate-900/70 border border-stroke-light dark:border-slate-800 text-left">
            <div className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest mb-1">
              HELLO, I AM
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight mb-4">
              RAHADYAN DANANG
            </h3>
            
            {/* Styled Portrait with Back-Glow */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-cyan-500/30 mb-5 aspect-[4/5] max-h-80 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <img 
                src="/danang.jpg" 
                alt="Rahadyan Danang Susetyo Pranawa" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 font-mono bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span>Surabaya, Indonesia</span>
                <span className="text-cyan-400">PENS 2026</span>
              </div>
            </div>

            {/* Quick Contact Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Rahdansuwa24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex-1 py-2.5 rounded-xl border border-stroke-light dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors min-h-[44px] flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rahadyan-danang-susetyo-pranawa-083140294/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex-1 py-2.5 rounded-xl border border-stroke-light dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors min-h-[44px] flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:dewaruci393@gmail.com"
                aria-label="Send Email"
                className="p-2.5 rounded-xl border border-stroke-light dark:border-slate-800 text-gray-700 dark:text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Education Block (from Resume) */}
          <div className="p-6 rounded-2xl bg-surface-light dark:bg-slate-900/70 border border-stroke-light dark:border-slate-800 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>EDUCATION</span>
            </h4>
            <div className="space-y-4 text-xs">
              <div className="border-l-2 border-cyan-500/50 pl-3">
                <div className="font-bold text-gray-900 dark:text-white">Politeknik Elektronika Negeri Surabaya</div>
                <div className="text-gray-600 dark:text-gray-300">Bachelor in Informatics Engineering</div>
                <div className="text-cyan-500 font-mono mt-0.5">2026 - 2027 (Expected) | GPA: 3.70 / 4.01</div>
              </div>
              <div className="border-l-2 border-cyan-500/50 pl-3">
                <div className="font-bold text-gray-900 dark:text-white">Politeknik Elektronika Negeri Surabaya</div>
                <div className="text-gray-600 dark:text-gray-300">Diploma in Informatics Engineering</div>
                <div className="text-emerald-500 font-mono mt-0.5">2023 - 2026 | GPA: 3.72 / 4.00 (Cum Laude)</div>
              </div>
              <div className="border-l-2 border-slate-600 pl-3">
                <div className="font-bold text-gray-900 dark:text-white">SMAN 2 Surabaya</div>
                <div className="text-gray-600 dark:text-gray-300">Natural Sciences</div>
                <div className="text-slate-400 font-mono mt-0.5">2019 - 2023 | Score: 87.80 / 100.00</div>
              </div>
            </div>
          </div>

          {/* Language Communication Block (Matching Image 2 Reference) */}
          <div className="p-6 rounded-2xl bg-surface-light dark:bg-slate-900/70 border border-stroke-light dark:border-slate-800 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>LANGUAGE [COMMUNICATION]</span>
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-1">
                  <span>INDONESIA (Native)</span>
                  <span className="font-mono text-cyan-400">100%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-1">
                  <span>JAWA (Native)</span>
                  <span className="font-mono text-cyan-400">100%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-1">
                  <span>ENGLISH (Technical / Professional)</span>
                  <span className="font-mono text-cyan-400">TOEFL 453</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: About Me, Software Skills Grid, and Experience Highlights */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* About Me Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-light dark:bg-slate-900/70 border border-stroke-light dark:border-slate-800">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              ABOUT ME
            </h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              Hi, I am Rahadyan Danang Susetyo Pranawa. Applied Bachelor student in Informatics Engineering at PENS,
              focusing on Web Development, Cloud Backend Architecture, and Generative AI integration.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Experienced in building resilient database schemas with TiDB and MySQL, setting up containerized
              microservice orchestration on Azure VMs, and building automated multimodal AI pipelines with ONNX Runtime
              and Orthanc PACS. Passionate about exploring cutting-edge AI implementations to create high-throughput digital solutions.
            </p>
          </div>

          {/* Software Skills Grid (Matching Reference App-Icon Grid) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-light dark:bg-slate-900/70 border border-stroke-light dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                SOFTWARE SKILLS
              </h4>
              <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">Core Technologies</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              
              {/* Docker */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-stroke-light dark:border-slate-700/60 hover:border-cyan-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold mb-1.5 group-hover:scale-110 transition-transform">
                  🐳
                </div>
                <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 text-center">Docker</span>
                <span className="text-[9px] font-mono text-gray-500">Containers</span>
              </div>

              {/* Node.js */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-stroke-light dark:border-slate-700/60 hover:border-cyan-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold mb-1.5 group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 text-center">Node.js</span>
                <span className="text-[9px] font-mono text-gray-500">Express API</span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-stroke-light dark:border-slate-700/60 hover:border-cyan-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold mb-1.5 group-hover:scale-110 transition-transform">
                  ⚛️
                </div>
                <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 text-center">React 18</span>
                <span className="text-[9px] font-mono text-gray-500">SPA / Vite</span>
              </div>

              {/* Python */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-stroke-light dark:border-slate-700/60 hover:border-cyan-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold mb-1.5 group-hover:scale-110 transition-transform">
                  🐍
                </div>
                <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 text-center">Python</span>
                <span className="text-[9px] font-mono text-gray-500">AI / ML</span>
              </div>

              {/* MySQL & TiDB */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-stroke-light dark:border-slate-700/60 hover:border-cyan-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold mb-1.5 group-hover:scale-110 transition-transform">
                  🗄️
                </div>
                <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 text-center">TiDB / MySQL</span>
                <span className="text-[9px] font-mono text-gray-500">Relational DB</span>
              </div>

              {/* Caddy */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-stroke-light dark:border-slate-700/60 hover:border-cyan-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold mb-1.5 group-hover:scale-110 transition-transform">
                  🔒
                </div>
                <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 text-center">Caddy</span>
                <span className="text-[9px] font-mono text-gray-500">Reverse Proxy</span>
              </div>

              {/* PostgreSQL */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-stroke-light dark:border-slate-700/60 hover:border-cyan-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold mb-1.5 group-hover:scale-110 transition-transform">
                  🐘
                </div>
                <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 text-center">PostgreSQL</span>
                <span className="text-[9px] font-mono text-gray-500">EduPortal</span>
              </div>

              {/* ONNX Runtime */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-stroke-light dark:border-slate-700/60 hover:border-cyan-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold mb-1.5 group-hover:scale-110 transition-transform">
                  🧠
                </div>
                <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 text-center">ONNX</span>
                <span className="text-[9px] font-mono text-gray-500">Inference</span>
              </div>

              {/* Flutter */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-stroke-light dark:border-slate-700/60 hover:border-cyan-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold mb-1.5 group-hover:scale-110 transition-transform">
                  📱
                </div>
                <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 text-center">Flutter</span>
                <span className="text-[9px] font-mono text-gray-500">Mobile UI</span>
              </div>

              {/* Linux / Azure */}
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-stroke-light dark:border-slate-700/60 hover:border-cyan-500/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 font-bold mb-1.5 group-hover:scale-110 transition-transform">
                  ☁️
                </div>
                <span className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 text-center">Azure / Linux</span>
                <span className="text-[9px] font-mono text-gray-500">Cloud Host</span>
              </div>

            </div>
          </div>

          {/* Key Experience Highlights */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-light dark:bg-slate-900/70 border border-stroke-light dark:border-slate-800">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-4">
              EXPERIENCE HIGHLIGHTS
            </h4>
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-stroke-light dark:border-slate-800">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-gray-900 dark:text-white">PACS Developer (Final Project Partnership)</span>
                  <span className="font-mono text-cyan-500">Mar 2026 - Present</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Rumah Sakit Islam Ahmad Yani, Surabaya</div>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Multi-modal AI inference system, ONNX medical screening & Orthanc PACS routing.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-stroke-light dark:border-slate-800">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-gray-900 dark:text-white">Backend Developer Intern</span>
                  <span className="font-mono text-cyan-500">Jul 2025 - Nov 2025</span>
                </div>
                <div className="text-gray-600 dark:text-gray-300">Dinas Perpustakaan Provinsi Jawa Timur</div>
                <p className="text-gray-500 dark:text-gray-400 mt-1">MAPTA administration platform, MySQL schema, and Puppeteer PDF generation queue.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Cloud Environment Highlights Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-stroke-light dark:border-slate-800 text-left">
        <div className="p-3.5 rounded-xl bg-surface-light dark:bg-slate-900/50 border border-stroke-light dark:border-slate-800">
          <div className="font-mono text-xs text-gray-500 dark:text-gray-400">EDGE CDN</div>
          <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 mt-0.5">Cloudflare Pages</div>
        </div>
        <div className="p-3.5 rounded-xl bg-surface-light dark:bg-slate-900/50 border border-stroke-light dark:border-slate-800">
          <div className="font-mono text-xs text-gray-500 dark:text-gray-400">HOST & PROXY</div>
          <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 mt-0.5">Azure VM + Caddy</div>
        </div>
        <div className="p-3.5 rounded-xl bg-surface-light dark:bg-slate-900/50 border border-stroke-light dark:border-slate-800">
          <div className="font-mono text-xs text-gray-500 dark:text-gray-400">DATABASE</div>
          <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 mt-0.5">TiDB Serverless</div>
        </div>
        <div className="p-3.5 rounded-xl bg-surface-light dark:bg-slate-900/50 border border-stroke-light dark:border-slate-800">
          <div className="font-mono text-xs text-gray-500 dark:text-gray-400">OBJECT MEDIA</div>
          <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 mt-0.5">Cloudflare R2</div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
