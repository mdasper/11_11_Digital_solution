import React, { useEffect, useState } from 'react';
export const TwinBarRail = ({ currentSectionNumber = '01', currentSectionLabel = 'Precision Meets Passion', }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScroll > 0) {
                const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
                setScrollProgress(progress);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (<>
      {/* Mobile Top Progress Line (Hidden on desktop) */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-black/5 z-50 lg:hidden pointer-events-none">
        <div className="h-full bg-crimson-grad transition-all duration-100 ease-out" style={{ width: `${scrollProgress}%` }}/>
      </div>

      {/* Desktop Twin-Bar Rail (Pinned Left, Visible >= 1024px) */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4 select-none pointer-events-none" aria-hidden="true">
        {/* Active Section Index & Label */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-xs font-bold text-crimson tracking-widest">
            {currentSectionNumber}
          </span>
          <div className="w-px h-6 bg-black/10"/>
        </div>

        {/* The Signature Twin Parallel Bars */}
        <div className="relative flex items-center gap-1.5 h-32 w-4">
          {/* Left Bar Track */}
          <div className="w-1.5 h-full rounded-full bg-black/10 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 bg-crimson-grad rounded-full transition-all duration-150 ease-out" style={{ height: `${scrollProgress}%` }}/>
          </div>

          {/* Right Bar Track (Slightly Offset Dynamic Rhythm) */}
          <div className="w-1.5 h-full rounded-full bg-black/10 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 bg-crimson-grad rounded-full transition-all duration-150 ease-out delay-75" style={{ height: `${scrollProgress}%` }}/>
          </div>
        </div>

        {/* Vertical Section Indicator Label */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-6 bg-black/10"/>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#665D63] whitespace-nowrap" style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
        }}>
            {currentSectionLabel}
          </span>
        </div>
      </aside>
    </>);
};
