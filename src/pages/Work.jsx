import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const FILTERS = [
    { label: 'All Projects', value: 'All', count: PROJECTS.length },
    { label: 'Websites & Apps', value: 'Websites', count: PROJECTS.filter((p) => p.category === 'Websites').length },
    { label: 'Reels & Video', value: 'Video', count: PROJECTS.filter((p) => p.category === 'Video').length },
];

const Work = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filteredProjects = PROJECTS.filter((project) => {
        if (activeFilter === 'All')
            return true;
        return project.category === activeFilter;
    });

    return (<>
      <Helmet>
        <title>Selected Work & Case Studies | 11 11 Digital Solutions</title>
        <meta name="description" content="Explore our flagship client projects: JB Healthcare, Highland Origin, Fazil Garments, SNAPIT Studio. Measurable outcomes and award-winning craft."/>
      </Helmet>

      <div className="min-h-screen">
        
        {/* 1. HERO SECTION (Obsidian Dark Stage - Full Width) */}
        <section className="pt-36 sm:pt-44 pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#0A0709] text-white border-b border-white/[0.08] relative overflow-hidden">
          {/* Ambient Crimson Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-crimson/20 blur-[150px] rounded-full" />

          <div className="w-full relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/20 border border-crimson/35 shadow-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-crimson animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#FFA3BD] tracking-widest uppercase">
                  PROOF OF CRAFT
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
                Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-[#FF2D6C]">impact</span> &amp; scale.
              </h1>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl font-normal">
                We build flagship digital products, commercial video productions, and performance campaigns that deliver tangible revenue growth and industry distinction.
              </p>
            </div>
          </div>
        </section>

        {/* 2. FILTER + PROJECTS LIST (Full-Width Blush Luxury Stage + Centered Filter Pills) */}
        <section className="bg-gradient-to-b from-[#FAF5F8] via-[#FFF0F5] to-white py-16 sm:py-24 border-b border-black/[0.06]">
          <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
            
            {/* Filter Pills Centered */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16 border-b border-black/[0.08] pb-8">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.value;
                return (
                  <button 
                    key={filter.value} 
                    onClick={() => setActiveFilter(filter.value)} 
                    className={cn(
                      'relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 select-none flex items-center gap-2',
                      isActive ? 'text-white' : 'text-[#665D63] hover:text-[#120E11] bg-white border border-black/[0.08] shadow-sm'
                    )}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeFilterPill" 
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-crimson to-magenta shadow-crimson-glow" 
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{filter.label}</span>
                    <span className={cn('relative z-10 px-1.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider', isActive ? 'bg-black/30 text-white' : 'bg-black/[0.05] text-[#665D63]')}>
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Projects List */}
            <motion.div layout className="space-y-16 sm:space-y-20">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.article 
                    key={project.id} 
                    layout 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, scale: 0.96 }} 
                    transition={{ duration: 0.5, delay: idx * 0.08 }} 
                    className="group relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#200A15] via-[#2A0D1B] to-[#15060E] border border-crimson/25 hover:border-crimson/50 hover:shadow-[0_24px_60px_rgba(248,17,90,0.25)] shadow-[0_20px_50px_rgba(32,10,21,0.35)] transition-all duration-500 overflow-hidden p-6 sm:p-10 lg:p-12 text-white" 
                    data-cursor="View"
                  >
                    {/* Subtle Inner Radial Spotlight on hover */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/15 rounded-full blur-3xl pointer-events-none group-hover:bg-crimson/25 transition-all duration-500"/>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
                      {/* Left Details Column (7 cols): Generous space for narrative & metrics */}
                      <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between">
                        <div>
                          {/* Meta Top Line */}
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-crimson/20 text-[#FF9BB5] border border-crimson/30">
                              {project.category}
                            </span>
                            <span className="text-xs text-white/60 font-mono">
                              {project.client} · {project.year}
                            </span>
                          </div>

                          {/* Project Title */}
                          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-3 group-hover:text-[#FFA3BD] transition-colors duration-300">
                            {project.title}
                          </h2>

                          {/* Tagline */}
                          <p className="text-sm sm:text-base text-white/75 mb-6 leading-relaxed font-normal">
                            {project.tagline}
                          </p>

                          {/* Impact Result Badge */}
                          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-crimson/20 border border-crimson/35 text-[#FFA3BD] font-bold text-xs sm:text-sm mb-6 shadow-sm">
                            <Sparkles className="w-4 h-4 text-crimson shrink-0 animate-pulse"/>
                            <span>{project.result}</span>
                          </div>

                          {/* Stats Breakdown */}
                          <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/10 mb-6">
                            {project.stats.map((stat, sIdx) => (
                              <div key={sIdx} className="space-y-0.5">
                                <div className="text-base sm:text-xl font-bold text-white font-mono">
                                  {stat.value}
                                </div>
                                <div className="text-[10px] sm:text-xs text-white/60 leading-tight">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Technologies Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-8">
                            {project.technologies.slice(0, 5).map((tech, tIdx) => (
                              <span key={tIdx} className="text-[11px] px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-white/75 font-mono">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action CTAs */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                          <Link to={`/work/${project.slug}`} className="inline-block">
                            <Button variant="primary" size="md" className="group/btn shadow-crimson-glow font-bold">
                              <span>View Case Study</span>
                              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"/>
                            </Button>
                          </Link>

                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-white/80 hover:text-white border border-white/20 hover:border-crimson/50 bg-white/5 transition-colors duration-200">
                            <span>Live Link</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-crimson"/>
                          </a>
                        </div>
                      </div>

                      {/* Right: Focused Brand Logo Showcase (5 cols - perfectly fitted, no empty void) */}
                      <div className="lg:col-span-5 xl:col-span-5 flex justify-center items-center">
                        <Link 
                          to={`/work/${project.slug}`} 
                          className="w-full max-w-[440px] rounded-3xl bg-gradient-to-br from-[#1B0715]/90 via-[#270B1E]/80 to-[#12050E]/90 border border-crimson/30 hover:border-crimson/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden group/logo-stage transition-all duration-300"
                        >
                          {/* Ambient Crimson Top Glow */}
                          <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-crimson/20 rounded-full blur-[60px] group-hover/logo-stage:bg-crimson/35 transition-all duration-500" />
                          <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 bg-magenta/15 rounded-full blur-[60px]" />

                          {/* Client Brand Logo Container */}
                          <div className="relative z-10 w-full flex items-center justify-center py-4">
                            <img
                              src={project.clientLogo}
                              alt={`${project.client} Logo`}
                              className="w-full h-auto max-h-32 sm:max-h-40 object-contain rounded-2xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] group-hover/logo-stage:scale-105 transition-transform duration-500"
                            />
                          </div>

                          {/* Client Verified Marker */}
                          <div className="relative z-10 mt-4 pt-3 border-t border-white/10 w-full flex items-center justify-between text-[11px] font-mono text-white/60">
                            <span className="flex items-center gap-1.5 text-white/80 font-bold uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                              {project.client}
                            </span>
                            <span className="text-crimson group-hover/logo-stage:text-[#FFA3BD] transition-colors flex items-center gap-1">
                              View Project <ArrowUpRight className="w-3 h-3" />
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Bottom Conversion Band in Velvet Dark Rose */}
            <div className="mt-24 sm:mt-32 rounded-[32px] p-8 sm:p-14 bg-gradient-to-br from-[#1C0813] via-[#280B1B] to-[#12050D] text-white border border-crimson/30 relative overflow-hidden shadow-[0_24px_70px_rgba(32,10,21,0.5)]">
              <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-crimson/20 rounded-full blur-[100px]"/>

              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/20 border border-crimson/30 text-xs font-mono font-bold tracking-widest text-[#FFA3BD] uppercase mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-crimson animate-pulse"/>
                  <span>START A COLLABORATION</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-4 leading-tight">
                  Have a project ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] to-magenta">flagship</span> execution?
                </h3>

                <p className="text-sm sm:text-base text-white/75 mb-8 leading-relaxed font-normal">
                  Whether you need a high-conversion web platform, viral reels campaign, or complete brand elevation, we deliver within 2 to 3 weeks.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/contact">
                    <Button variant="primary" size="lg" className="shadow-crimson-glow font-bold">
                      <span>Get a Free Quote</span>
                      <ArrowRight className="w-4 h-4 ml-2"/>
                    </Button>
                  </Link>

                  <a href="https://wa.me/919566498072?text=Hi%2011%2011%20Digital%20Solutions%2C%20I%20reviewed%20your%20selected%20work%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-crimson/50 transition-all duration-300">
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-4 h-4 text-crimson"/>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>);
};

export default Work;