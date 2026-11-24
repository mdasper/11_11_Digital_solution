import React from 'react';
export const DualMarquee = () => {
    const items = ['WEBSITES', 'MARKETING', 'REELS', 'EDITING', 'BRANDING'];
    return (<section className="py-12 bg-white border-y border-black/[0.06] overflow-hidden select-none">
      {/* Row 1: Forward Marquee */}
      <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (<div key={i} className="flex items-center gap-8 px-4">
            {items.map((item, idx) => (<div key={idx} className="flex items-center gap-8">
                <span className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-transparent transition-colors duration-300 hover:text-crimson" style={{
                    WebkitTextStroke: '1.5px rgba(18, 14, 17, 0.25)',
                }}>
                  {item}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-crimson"/>
              </div>))}
          </div>))}
      </div>

      {/* Row 2: Reversed Direction with Solid Crimson Accent */}
      <div className="flex w-max mt-4 animate-[marquee-reverse_28s_linear_infinite] hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (<div key={i} className="flex items-center gap-8 px-4">
            {items.map((item, idx) => (<div key={idx} className="flex items-center gap-8">
                <span className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#120E11]/40 hover:text-[#120E11] transition-colors duration-300">
                  {item}
                </span>
                <span className="font-mono text-sm text-crimson font-bold">11:11</span>
              </div>))}
          </div>))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>);
};
