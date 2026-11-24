import React, { useState, useRef } from 'react';
export const BeforeAfterSlider = () => {
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
    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };
    const handleMouseMove = (e) => {
        if (isDragging.current) {
            handleMove(e.clientX);
        }
    };
    return (<section className="py-28 sm:py-36 bg-gradient-to-b from-white via-[#FFF0F5]/40 to-[#FAF5F8] relative border-b border-black/[0.06]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-crimson block mb-3">
            || Visual Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mb-4 text-[#120E11]">
            Legacy template vs. <span className="text-gradient font-display font-extrabold">11 11 build</span>.
          </h2>
          <p className="text-[#665D63] text-sm sm:text-base leading-relaxed">
            Drag the handle to see how custom art direction transforms low-converting web pages into high-trust flagship platforms.
          </p>
        </div>

        {/* Interactive Comparison Canvas */}
        <div ref={containerRef} onMouseDown={() => (isDragging.current = true)} onMouseUp={() => (isDragging.current = false)} onMouseLeave={() => (isDragging.current = false)} onMouseMove={handleMouseMove} onTouchMove={handleTouchMove} data-cursor="Drag" className="relative max-w-5xl mx-auto aspect-[16/9] sm:aspect-[21/9] rounded-[28px] overflow-hidden border border-black/10 shadow-[0_20px_50px_rgba(18,14,17,0.08)] select-none cursor-ew-resize">
          {/* AFTER: 11 11 Flagship Build (Full Width Background) */}
          <div className="absolute inset-0 bg-charcoal flex items-center justify-center p-8 sm:p-12 overflow-hidden">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-charcoal to-ink border border-crimson/30 p-8 flex flex-col justify-between relative shadow-2xl">
              {/* Crimson Studio Light Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-crimson/20 rounded-full blur-[90px] pointer-events-none"/>

              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-crimson text-white text-xs font-bold uppercase tracking-wider">
                  11 11 Standard
                </span>
                <span className="font-mono text-xs text-green-400 font-bold">
                  ⚡ 0.8s LCP · 100 SEO · 3.4x Inquiries
                </span>
              </div>

              <div>
                <span className="font-mono text-xs text-crimson tracking-widest block mb-2">
                  || BESPOKE GSAP ANIMATION
                </span>
                <h4 className="text-2xl sm:text-4xl font-display font-bold text-white max-w-lg leading-tight">
                  Precision digital architecture that turns clicks into committed buyers.
                </h4>
              </div>

              <div className="flex gap-4">
                <div className="px-4 py-2 rounded-full bg-crimson text-white text-xs font-semibold">
                  Get a Free Quote
                </div>
                <div className="px-4 py-2 rounded-full border border-white/20 text-white text-xs font-semibold">
                  Explore Work
                </div>
              </div>
            </div>
          </div>

          {/* BEFORE: Outdated Generic Template (Clipped via sliderPos) */}
          <div className="absolute inset-0 bg-[#E5E5E5] flex items-center justify-center p-8 sm:p-12 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
            <div className="w-full h-full rounded-2xl bg-white border border-gray-300 p-8 flex flex-col justify-between text-gray-800 shadow-md">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider">
                  Legacy Generic Template
                </span>
                <span className="font-mono text-xs text-red-500 font-bold">
                  🐌 4.2s Load · Generic Stock Photos
                </span>
              </div>

              <div>
                <p className="text-xs text-gray-400 font-mono">TEMPLATE #4102</p>
                <h4 className="text-2xl sm:text-3xl font-serif text-gray-800 max-w-lg mt-2">
                  Welcome To Our Business Homepage Website.
                </h4>
                <p className="text-xs text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="px-4 py-2 rounded-sm bg-gray-400 text-white text-xs">
                  Click Here
                </div>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-crimson border-2 border-white flex items-center justify-center text-white shadow-lg">
              <span className="text-xs font-black select-none">&lt; &gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
