import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Film, Sliders, Palette, Type, Clock, RotateCcw, CheckCircle2, Sparkles, Layers, Wand2, Volume2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { WordStream } from '@/components/motion/WordStream';

import heroEditingImg from '@/assets/crafts/hero-editing.jpg';
import craftEditingImg from '@/assets/crafts/craft-editing.jpg';

const editingServices = [
    {
        icon: <Film className="w-6 h-6 text-crimson mb-3" />,
        title: 'Reels & Shorts Retention',
        desc: 'Dynamic pacing, jump cuts, audio sound design, and viral retention graph optimization.',
    },
    {
        icon: <Layers className="w-6 h-6 text-crimson mb-3" />,
        title: 'Multi-Camera YouTube',
        desc: 'Podcasts, interviews, and documentary-style long-form editing with crisp audio leveling.',
    },
    {
        icon: <Sparkles className="w-6 h-6 text-crimson mb-3" />,
        title: 'Commercials & Ads',
        desc: 'High-energy brand advertisements, product showcases, and TVC web commercials.',
    },
    {
        icon: <Palette className="w-6 h-6 text-crimson mb-3" />,
        title: 'DaVinci Color Grading',
        desc: 'Professional film LUTs, skin-tone isolation, shot-matching, and HDR mastering.',
    },
    {
        icon: <Type className="w-6 h-6 text-crimson mb-3" />,
        title: 'Kinetic Animated Subtitles',
        desc: 'Custom branded typography that highlights key words, emojis, and visual sound cues.',
    },
    {
        icon: <Sliders className="w-6 h-6 text-crimson mb-3" />,
        title: 'Motion Graphics & Stings',
        desc: 'Logo idents, 2D lower thirds, animated diagrams, and infographic overlays.',
    },
];

const postProductionStages = [
    {
        stage: '01',
        title: 'Assembly & Rhythm Pacing',
        desc: 'Surgical dead-air removal, micro-hook alignment, and narrative rhythm engineered for zero drop-off.',
        specs: '100% dead-space eliminated · Sub-second jump cuts · J- & L-cut transitions',
    },
    {
        stage: '02',
        title: 'DaVinci Color Science',
        desc: 'Custom film emulation LUTs, natural skin-tone isolation, and deep contrast grading in DaVinci Resolve Studio.',
        specs: 'Rec.709 & HDR Wide Gamut · Node-based skin correction · Black level balancing',
    },
    {
        stage: '03',
        title: 'Spatial Sound & Master Export',
        desc: 'Binaural sound effects, dynamic EQ polish, dialogue de-noising, and broadcast-ready master renders.',
        specs: '-14 LUFS standard mastering · ProRes 422HQ & H.265 · Platform-tailored exports',
    },
];

const Editing = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
        setSliderPos(percent);
    };

    const handleMouseMove = (e) => {
        if (isDragging.current) handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    return (<>
      <Helmet>
        <title>Professional Video Editing & Post-Production | 11 11 Digital Solutions</title>
        <meta name="description" content="Clean cuts, sharp colour, smooth storytelling. DaVinci Resolve color grading, kinetic typography, and YouTube/Reels video editing."/>
      </Helmet>

      <div className="bg-[#FAF7F9] min-h-screen text-[#120E11]">
        {/* 1. Full-Width Deep Obsidian Dark Velvet Hero Stage */}
        <section className="relative w-full pt-36 sm:pt-44 pb-20 sm:pb-28 bg-[#0A0709] text-white border-b border-white/[0.08] overflow-hidden">
          {/* Ambient Crimson Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-crimson/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-crimson/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-8">
                  <span className="font-mono text-xs font-bold text-crimson tracking-widest uppercase">
                    || CORE CAPABILITY 04
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                </div>

                <WordStream
                  as="h1"
                  className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.03] mb-6 text-white"
                >
                  Clean cuts, sharp colour,{' '}
                  <span className="font-accent italic text-crimson font-normal">smooth storytelling</span>.
                </WordStream>

                <WordStream
                  as="p"
                  className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed mb-10"
                >
                  We turn raw, unedited footage into high-converting brand films and viral reels. Hollywood color grading in DaVinci Resolve, frame-accurate pacing, and surgical sound design.
                </WordStream>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Button to="/contact?service=editing" variant="primary" size="lg" className="shadow-[0_0_30px_rgba(248,17,90,0.4)]">
                    Submit Footage for Edit
                  </Button>
                  <Button to="/pricing" variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    View Editing Rates
                  </Button>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/[0.08]">
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-crimson">48 Hrs</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">First Cut Turnaround</div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-white">4K DCI</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Master Resolution</div>
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl sm:text-3xl text-white">100%</div>
                    <div className="font-mono text-[11px] text-white/50 uppercase tracking-wider mt-0.5">DaVinci Resolve Color</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Editing Console */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-[28px] overflow-hidden border border-white/15 bg-white/[0.03] shadow-[0_24px_60px_rgba(0,0,0,0.8)] backdrop-blur-sm group">
                  <img
                    src={heroEditingImg}
                    alt="DaVinci Resolve Editing Studio"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0709] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-crimson uppercase tracking-widest font-bold">DAVINCI RESOLVE SUITE</div>
                      <div className="text-sm font-display font-bold text-white mt-0.5">4K Cinema Grading &amp; Mastering</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-crimson/20 border border-crimson/40 text-crimson font-mono text-xs font-bold">
                      24 FPS MASTER
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 3-Stage Post-Production Master Pipeline (Brand New, Relatable & Understandable) */}
        <section className="py-24 sm:py-32 w-full bg-[#0D0A0C] text-white border-b border-white/[0.08]">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3 font-bold">
                || SURGICAL WORKFLOW
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
                How we elevate your <span className="font-accent italic text-crimson font-normal">raw footage</span>.
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-3">
                A seamless 3-stage post-production pipeline delivering cinema-grade results on every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {postProductionStages.map((stage) => (
                <div
                  key={stage.stage}
                  className="rounded-[28px] p-8 bg-white/[0.02] border border-white/10 hover:border-crimson/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-crimson px-3 py-1 rounded-full bg-crimson/10 border border-crimson/20">
                        STAGE {stage.stage}
                      </span>
                      <span className="text-xs font-mono text-white/40">PRO POST SUITE</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-3">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-white/50">
                    <span className="text-crimson font-bold block mb-1">Standard Specs:</span>
                    {stage.specs}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. 6 Core Disciplines */}
        <section className="py-28 sm:py-36 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 border-b border-black/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3 font-bold">
              || Post-Production Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-[#120E11]">
              Every cut serves the <span className="font-accent italic text-crimson font-normal">narrative</span>.
            </h2>
            <p className="text-black/60 text-sm sm:text-base">
              From TikTok micro-hooks to multi-cam podcast productions and broadcast commercials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editingServices.map((srv, idx) => (
              <SpotlightCard key={idx} className="p-8 flex flex-col justify-between bg-white border border-black/[0.08] shadow-sm">
                <div>
                  {srv.icon}
                  <h3 className="text-xl font-display font-bold text-[#120E11] mb-2">{srv.title}</h3>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed">{srv.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-black/[0.06] font-mono text-[10px] text-crimson font-bold">
                  0{idx + 1} // MASTER CRAFT
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* 4. Real Before/After Color Grading Comparison Slider */}
        <section className="py-28 sm:py-36 w-full bg-[#0D0A0C] text-white border-b border-white/[0.08]">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3 font-bold">
                || DaVinci Resolve Grade
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4 text-white">
                Flat raw LOG vs. <span className="font-accent italic text-crimson font-normal">11 11 cinema grade</span>.
              </h2>
              <p className="text-white/60 text-sm sm:text-base">
                Drag the divider left or right to see real color separation, deep blacks, and radiant cinematic skin tones.
              </p>
            </div>

            <div
              ref={containerRef}
              onMouseDown={() => (isDragging.current = true)}
              onMouseUp={() => (isDragging.current = false)}
              onMouseLeave={() => (isDragging.current = false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              data-cursor="Drag"
              className="relative max-w-5xl mx-auto aspect-[16/9] rounded-[28px] overflow-hidden border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.8)] select-none cursor-ew-resize group"
            >
              {/* AFTER: 11 11 Cinema Color Grade (Full-Color Real High-Res Asset) */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={craftEditingImg}
                  alt="11 11 Cinema Color Graded Frame"
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                
                {/* AFTER Label & Badge */}
                <div className="absolute top-6 right-6 z-20 pointer-events-none text-right">
                  <span className="px-3.5 py-1.5 rounded-full bg-crimson text-white font-mono text-xs font-bold uppercase shadow-lg inline-block">
                    11 11 Cinema Grade
                  </span>
                  <div className="text-white text-xs font-mono mt-2 drop-shadow-md">
                    DaVinci Wide Gamut · Film Emulation LUT · 10-Bit Master
                  </div>
                </div>
              </div>

              {/* BEFORE: Flat Raw Log Profile (Clipped to sliderPos% with Real Authentic S-Log3 Filter) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={craftEditingImg}
                  alt="Flat Raw Log Profile"
                  className="w-full h-full object-cover scale-105"
                  style={{
                    filter: 'grayscale(80%) contrast(65%) brightness(125%) saturate(30%)',
                  }}
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                {/* BEFORE Label & Badge */}
                <div className="absolute top-6 left-6 z-20 pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-gray-200 font-mono text-xs font-bold uppercase shadow-lg inline-block">
                    Flat Raw LOG Profile
                  </span>
                  <div className="text-gray-300 text-xs font-mono mt-2 drop-shadow-md">
                    No Contrast · Washed Sensor Output · Flat S-Log3
                  </div>
                </div>
              </div>

              {/* Slider Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)] z-30"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-crimson border-2 border-white flex items-center justify-center text-white shadow-[0_0_20px_rgba(248,17,90,0.8)]">
                  <span className="text-xs font-black select-none tracking-tighter">&lt; &gt;</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Turnaround & Revisions SLA */}
        <section className="py-24 px-6 sm:px-10 lg:px-16 w-full max-w-[1440px] mx-auto border-b border-black/[0.06]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-[28px] bg-white border border-black/[0.08] shadow-sm">
              <Clock className="w-10 h-10 text-crimson mx-auto mb-4" />
              <h4 className="text-xl font-bold text-[#120E11] mb-2 font-display">48-Hour Turnaround</h4>
              <p className="text-xs sm:text-sm text-black/60">
                First cut delivered within 48 business hours of footage upload via Google Drive or Frame.io.
              </p>
            </div>
            <div className="p-8 rounded-[28px] bg-white border border-black/[0.08] shadow-sm">
              <RotateCcw className="w-10 h-10 text-crimson mx-auto mb-4" />
              <h4 className="text-xl font-bold text-[#120E11] mb-2 font-display">Fast Revisions</h4>
              <p className="text-xs sm:text-sm text-black/60">
                Timecode-annotated feedback implemented within 24 hours until complete client sign-off.
              </p>
            </div>
            <div className="p-8 rounded-[28px] bg-white border border-black/[0.08] shadow-sm">
              <CheckCircle2 className="w-10 h-10 text-crimson mx-auto mb-4" />
              <h4 className="text-xl font-bold text-[#120E11] mb-2 font-display">4K Master Exports</h4>
              <p className="text-xs sm:text-sm text-black/60">
                Pristine master renders formatted for Instagram Reels, YouTube 4K, and Commercial Broadcast.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Bottom CTA */}
        <section className="py-28 px-6 sm:px-10 lg:px-16 w-full max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#120E11] mb-6">
            Ready to give your footage the <span className="font-accent italic text-crimson font-normal">cinema treatment</span>?
          </h2>
          <p className="text-black/60 max-w-xl mx-auto text-base sm:text-lg mb-8">
            Upload a sample clip and get a free color grading preview.
          </p>
          <div className="flex justify-center gap-4">
            <Button to="/contact?service=editing" variant="primary" size="lg">
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