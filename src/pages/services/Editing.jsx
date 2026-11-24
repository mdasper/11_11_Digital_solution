import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Film, Sliders, Palette, Type, Clock, RotateCcw, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { WordStream } from '@/components/motion/WordStream';
import snapitImg from '@/assets/projects/snapit-studio.svg';
const editingServices = [
    {
        icon: <Film className="w-6 h-6 text-crimson mb-3"/>,
        title: 'Reels & Shorts Retention',
        desc: 'Dynamic pacing, jump cuts, audio sound design, and viral retention graph optimization.',
    },
    {
        icon: <Layers className="w-6 h-6 text-crimson mb-3"/>,
        title: 'Multi-Camera YouTube',
        desc: 'Podcasts, interviews, and documentary-style long-form editing with crisp audio leveling.',
    },
    {
        icon: <Sparkles className="w-6 h-6 text-crimson mb-3"/>,
        title: 'Commercials & Ads',
        desc: 'High-energy brand advertisements, product showcases, and TVC web commercials.',
    },
    {
        icon: <Palette className="w-6 h-6 text-crimson mb-3"/>,
        title: 'DaVinci Color Grading',
        desc: 'Professional film LUTs, skin-tone isolation, shot-matching, and HDR mastering.',
    },
    {
        icon: <Type className="w-6 h-6 text-crimson mb-3"/>,
        title: 'Kinetic Animated Subtitles',
        desc: 'Custom branded typography that highlights key words, emojis, and visual sound cues.',
    },
    {
        icon: <Sliders className="w-6 h-6 text-crimson mb-3"/>,
        title: 'Motion Graphics & Stings',
        desc: 'Logo idents, 2D lower thirds, animated diagrams, and infographic overlays.',
    },
];
const Editing = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const handleMove = (clientX) => {
        if (!containerRef.current)
            return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
        setSliderPos(percent);
    };
    const handleMouseMove = (e) => {
        if (isDragging.current)
            handleMove(e.clientX);
    };
    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };
    return (<>
      <Helmet>
        <title>Professional Video Editing & Post-Production | 11 11 Digital Solutions</title>
        <meta name="description" content="Clean cuts, sharp colour, smooth storytelling. DaVinci Resolve color grading, kinetic typography, and YouTube/Reels video editing."/>
      </Helmet>

      <div className="pt-32 sm:pt-40 bg-ink min-h-screen text-text-dark">
        {/* 1. Timeline Hero */}
        <section className="px-6 sm:px-8 max-w-7xl mx-auto pb-20 border-b border-black/[0.06]">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-sm mb-6">
              <span className="font-mono text-xs font-bold text-crimson tracking-widest">
                || CORE CAPABILITY 04
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse"/>
            </div>

            <WordStream
              as="h1"
              className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.02] mb-6 text-[#120E11]"
            >
              Clean cuts, sharp colour,{' '}
              <span className="font-accent italic text-crimson font-normal">smooth storytelling</span>.
            </WordStream>

            <WordStream
              as="p"
              className="text-lg sm:text-xl text-text-dark-muted max-w-2xl leading-relaxed mb-8"
            >
              We turn raw, unedited footage into high-converting brand films and viral reels. Hollywood color grading in DaVinci Resolve, frame-accurate pacing, and surgical sound design.
            </WordStream>

            <div className="flex flex-wrap items-center gap-4">
              <Button to="/contact?service=editing" variant="primary" size="lg">
                Submit Footage for Edit
              </Button>
              <Button to="/pricing" variant="secondary" size="lg">
                View Editing Rates
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Timeline Interface Graphic */}
        <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="rounded-[28px] bg-white border border-black/[0.08] p-6 sm:p-10 shadow-[0_16px_40px_rgba(18,14,17,0.06)] overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/[0.08] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"/>
                <span className="w-3 h-3 rounded-full bg-yellow-500"/>
                <span className="w-3 h-3 rounded-full bg-green-500"/>
                <span className="text-text-dark-muted ml-2">11_11_MASTER_TIMELINE_4K.drp</span>
              </div>
              <span className="text-crimson font-bold">24.000 FPS · REC.709 MASTER</span>
            </div>

            <img src={snapitImg} alt="Professional editing suite timeline" className="w-full h-auto rounded-xl border border-black/[0.08] shadow-sm"/>
          </div>
        </section>

        {/* 3. 6 Core Disciplines */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
              || Post-Production Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-[#120E11]">
              Every cut serves the <span className="font-accent italic text-crimson font-normal">narrative</span>.
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              From TikTok micro-hooks to multi-cam podcast productions and broadcast commercials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editingServices.map((srv, idx) => (<SpotlightCard key={idx} className="p-8 flex flex-col justify-between">
                <div>
                  {srv.icon}
                  <h3 className="text-xl font-display font-bold text-[#120E11] mb-2">{srv.title}</h3>
                  <p className="text-xs sm:text-sm text-text-dark-muted leading-relaxed">{srv.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-black/[0.06] font-mono text-[10px] text-crimson font-bold">
                  0{idx + 1} // MASTER CRAFT
                </div>
              </SpotlightCard>))}
          </div>
        </section>

        {/* 4. Before/After Color Grading Comparison Slider */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
              || DaVinci Resolve Grade
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-[#120E11]">
              Flat raw LOG vs. <span className="font-accent italic text-crimson font-normal">11 11 cinema grade</span>.
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              Drag the divider to see the dramatic color separation, skin tone correction, and deep contrast.
            </p>
          </div>

          <div ref={containerRef} onMouseDown={() => (isDragging.current = true)} onMouseUp={() => (isDragging.current = false)} onMouseLeave={() => (isDragging.current = false)} onMouseMove={handleMouseMove} onTouchMove={handleTouchMove} data-cursor="Drag" className="relative max-w-4xl mx-auto aspect-[16/9] rounded-[28px] overflow-hidden border border-black/[0.1] shadow-xl select-none cursor-ew-resize">
            {/* AFTER: Graded Cinema Look (Full Width Background) */}
            <div className="absolute inset-0 bg-[#0E0B0D] flex items-center justify-center p-8 overflow-hidden">
              <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[#FF1A63]/25 via-charcoal to-[#0D0A0C] border border-crimson/40 p-8 flex flex-col justify-between relative shadow-2xl">
                <span className="px-3.5 py-1 rounded-full bg-crimson text-white font-mono text-xs font-bold uppercase w-max">
                  11 11 Cinema Color Grade
                </span>
                <div>
                  <h4 className="text-2xl sm:text-4xl font-display font-black text-white">
                    Vibrant Skin Tones &amp; Rich Contrast
                  </h4>
                  <p className="text-xs font-mono text-text-dark-muted mt-1">
                    DaVinci Wide Gamut · Film Emulation LUT · 10-bit Master
                  </p>
                </div>
              </div>
            </div>

            {/* BEFORE: Flat Raw Log (Clipped via sliderPos) */}
            <div className="absolute inset-0 bg-[#7B7B80] flex items-center justify-center p-8 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
              <div className="w-full h-full rounded-2xl bg-[#68686D] p-8 flex flex-col justify-between text-gray-300">
                <span className="px-3.5 py-1 rounded-full bg-black/40 text-gray-200 font-mono text-xs font-bold uppercase w-max">
                  Unprocessed Flat Log Profile
                </span>
                <div>
                  <h4 className="text-2xl sm:text-4xl font-display font-bold text-gray-200">
                    Washed Out Raw Footage
                  </h4>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    No Contrast · Uncorrected Exposure · Raw Sensor Output
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Divider Handle */}
            <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-crimson border-2 border-white flex items-center justify-center text-white shadow-lg">
                <span className="text-xs font-black select-none">&lt; &gt;</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Turnaround & Revisions SLA */}
        <section className="py-24 px-6 sm:px-8 bg-[#F8F5F7]/60 border-b border-black/[0.06]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
                <Clock className="w-10 h-10 text-crimson mx-auto mb-4"/>
                <h4 className="text-xl font-bold text-[#120E11] mb-2">48-Hour Turnaround</h4>
                <p className="text-xs sm:text-sm text-text-dark-muted">
                  First cut delivered within 48 business hours of footage upload.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
                <RotateCcw className="w-10 h-10 text-crimson mx-auto mb-4"/>
                <h4 className="text-xl font-bold text-[#120E11] mb-2">Fast Revisions</h4>
                <p className="text-xs sm:text-sm text-text-dark-muted">
                  Timecode-annotated feedback implemented within 24 hours.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-crimson mx-auto mb-4"/>
                <h4 className="text-xl font-bold text-[#120E11] mb-2">4K Master Exports</h4>
                <p className="text-xs sm:text-sm text-text-dark-muted">
                  Pristine master renders formatted for Instagram, YouTube, and Broadcast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Bottom CTA */}
        <section className="py-28 px-6 sm:px-8 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#120E11] mb-6">
            Ready to give your footage the <span className="font-accent italic text-crimson font-normal">cinema treatment</span>?
          </h2>
          <div className="flex justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Send Your Footage
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              Explore Video Packages
            </Button>
          </div>
        </section>
      </div>
    </>);
};
export default Editing;
