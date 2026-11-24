import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { DeviceMockup } from '@/components/ui/DeviceMockup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const CaseStudy = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
    const project = PROJECTS[currentIndex];
    const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            // Subtle parallax on gallery cards
            const galleryItems = document.querySelectorAll('.gallery-parallax');
            galleryItems.forEach((item) => {
                gsap.fromTo(item, { y: 30, opacity: 0.9 }, {
                    y: -30,
                    opacity: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, [slug]);
    if (!project) {
        return (<div className="min-h-screen bg-ink text-text-dark pt-40 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Project Not Found</h1>
        <p className="text-text-dark-muted mb-8">The case study you are looking for does not exist.</p>
        <Link to="/work">
          <Button variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2"/>
            <span>Back to Selected Work</span>
          </Button>
        </Link>
      </div>);
    }
    return (<>
      <Helmet>
        <title>{project.title} Case Study | 11 11 Digital Solutions</title>
        <meta name="description" content={`${project.title} - ${project.tagline}. ${project.result}`}/>
      </Helmet>

      <div ref={containerRef} className="min-h-screen bg-ink text-text-dark pt-32 sm:pt-40 pb-24 overflow-x-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-crimson/15 blur-[160px] pointer-events-none -z-10"/>

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Top Navigation Row */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-black/[0.08]">
            <Link to="/work" className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-text-dark-muted hover:text-[#120E11] transition-colors duration-200 group">
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-crimson"/>
              <span>Back to All Work</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono text-text-dark-muted">
              <span>0{currentIndex + 1}</span>
              <span className="text-crimson">/</span>
              <span>0{PROJECTS.length}</span>
            </div>
          </div>

          {/* Hero Header */}
          <div className="max-w-4xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-4 bg-crimson rounded-full"/>
              <span className="w-1.5 h-4 bg-crimson/60 rounded-full"/>
              <span className="text-xs uppercase font-medium tracking-[0.2em] text-crimson ml-1">
                CASE STUDY // {project.category.toUpperCase()}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#120E11] mb-6 leading-[1.05]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-2xl text-[#120E11] font-medium leading-snug mb-8">
              {project.tagline}
            </p>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-black/[0.08]">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-text-dark-muted mb-1">
                  Client
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#120E11]">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-text-dark-muted mb-1">
                  Industry
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#120E11]">
                  {project.industry}
                </span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-text-dark-muted mb-1">
                  Year
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#120E11]">
                  {project.year}
                </span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-text-dark-muted mb-1">
                  Live Deployment
                </span>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-crimson hover:underline">
                  <span>Visit Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5"/>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Main Mockup Frame */}
          <div className="mb-20 sm:mb-28 relative rounded-[32px] sm:rounded-[40px] bg-[#F4EEF1]/60 border border-black/[0.08] p-6 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(18,14,17,0.06)] overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-crimson/5 rounded-full blur-[100px] pointer-events-none"/>
            <div className="relative z-10 flex justify-center">
              {project.deviceType === 'phone' ? (<div className="py-6">
                  <DeviceMockup type="phone" imageSrc={project.mockupImage} alt={project.title} className="max-w-[320px] shadow-2xl"/>
                </div>) : (<DeviceMockup type="laptop" imageSrc={project.mockupImage} alt={project.title} className="max-w-[960px] shadow-2xl"/>)}
            </div>
          </div>

          {/* Impact Stats Grid (3 Metrics) */}
          <div className="mb-24 sm:mb-32">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase font-medium tracking-[0.2em] text-crimson">
                KEY METRICS ACHIEVED
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#120E11] mt-2">
                Measurable business transformation.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.stats.map((stat, idx) => (<div key={idx} className="rounded-[24px] bg-white border border-black/[0.08] p-8 relative overflow-hidden group hover:border-crimson/50 hover:shadow-[0_10px_30px_rgba(248,17,90,0.08)] transition-all duration-300 shadow-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/5 rounded-full blur-2xl group-hover:bg-crimson/10 transition-all duration-300"/>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient font-mono mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-[#120E11] mb-1">{stat.label}</div>
                  <div className="text-xs text-text-dark-muted">
                    Verified post-launch analytics benchmark
                  </div>
                </div>))}
            </div>
          </div>

          {/* The Brief & The Challenge (Two Column) */}
          <div className="mb-24 sm:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Pull-Quote */}
            <div className="lg:col-span-5 rounded-[28px] bg-white p-8 sm:p-10 border border-black/[0.08] shadow-[0_10px_30px_rgba(18,14,17,0.04)] relative">
              <div className="w-8 h-8 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center text-crimson font-serif text-xl mb-6">
                “
              </div>
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#120E11] leading-relaxed mb-6">
                {project.pullQuote}
              </blockquote>
              <div className="text-xs uppercase tracking-wider text-crimson font-semibold">
                Client Leadership Feedback
              </div>
            </div>

            {/* Right Detailed Challenge & Solution Breakdown */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs uppercase font-medium tracking-[0.2em] text-crimson block mb-2">
                  THE CHALLENGE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#120E11] mb-4">
                  What was holding growth back.
                </h3>
                <p className="text-base text-text-dark-muted leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.08]">
                <span className="text-xs uppercase font-medium tracking-[0.2em] text-crimson block mb-2">
                  THE SOLUTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#120E11] mb-4">
                  How 11 11 engineered the breakthrough.
                </h3>
                <p className="text-base text-text-dark-muted leading-relaxed mb-6">
                  {project.solution}
                </p>

                {/* Deliverables tags */}
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item, dIdx) => (<span key={dIdx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-black/[0.08] text-[#120E11] shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-crimson"/>
                      <span>{item}</span>
                    </span>))}
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Gallery */}
          <div className="mb-24 sm:mb-32">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs uppercase font-medium tracking-[0.2em] text-crimson">
                VISUAL GALLERY &amp; INTERFACES
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#120E11] mt-2">
                Every detail built with purpose.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.galleryImages.slice(0, 2).map((imgSrc, gIdx) => (<div key={gIdx} className="gallery-parallax rounded-[28px] bg-white border border-black/[0.08] overflow-hidden shadow-[0_10px_30px_rgba(18,14,17,0.05)] group">
                  <div className="p-4 sm:p-6 bg-[#FAF7F9] border-b border-black/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"/>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"/>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"/>
                    </div>
                    <span className="text-[11px] font-mono text-text-dark-muted">
                      {project.title} · Screen 0{gIdx + 1}
                    </span>
                  </div>
                  <div className="p-4 sm:p-8 flex justify-center items-center bg-[#F8F5F7]">
                    <img src={imgSrc} alt={`${project.title} interface ${gIdx + 1}`} className="w-full h-auto rounded-xl object-contain max-h-[460px] group-hover:scale-[1.02] transition-transform duration-500"/>
                  </div>
                </div>))}
            </div>
          </div>

          {/* Engineering & Architecture Highlights */}
          <div className="mb-24 sm:mb-32 rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-14 shadow-[0_16px_40px_rgba(18,14,17,0.05)]">
            <div className="max-w-2xl mb-10">
              <span className="text-xs uppercase font-medium tracking-[0.2em] text-crimson block mb-2">
                TECHNICAL ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#120E11] mb-4">
                Under the hood.
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, tIdx) => (<span key={tIdx} className="px-3 py-1 rounded-md text-xs font-semibold bg-[#FAF7F9] border border-black/[0.08] text-[#120E11]">
                    {tech}
                  </span>))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.architectureNotes.map((note, nIdx) => (<div key={nIdx} className="rounded-2xl p-6 bg-[#FAF7F9] border border-black/[0.08] space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-crimson/10 border border-crimson/20 flex items-center justify-center text-crimson font-mono text-sm font-bold">
                    0{nIdx + 1}
                  </div>
                  <h4 className="text-base font-bold text-[#120E11]">{note.title}</h4>
                  <p className="text-xs sm:text-sm text-text-dark-muted leading-relaxed">
                    {note.desc}
                  </p>
                </div>))}
            </div>
          </div>

          {/* Next Project Teaser Card */}
          <div className="rounded-[32px] bg-white border border-black/[0.08] shadow-[0_16px_40px_rgba(18,14,17,0.06)] p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase font-medium tracking-[0.2em] text-crimson">
                UP NEXT
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#120E11]">
                {nextProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-dark-muted max-w-md">
                {nextProject.tagline}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <Link to={`/work/${nextProject.slug}`}>
                <Button variant="primary" size="lg">
                  <span>View Next Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2"/>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>);
};
export default CaseStudy;
