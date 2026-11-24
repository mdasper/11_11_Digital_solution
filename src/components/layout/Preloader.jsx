import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '@/assets/logo-clean.png';

export const Preloader = ({ onComplete }) => {
  const [timeDisplay, setTimeDisplay] = useState('00:00');
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING FLAGSHIP CORE...');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // 2.0 second high-end cinematic progression
    const durationMs = 2000;
    const startTime = Date.now();

    const statuses = [
      { at: 0.15, text: 'INITIALIZING FLAGSHIP CORE...' },
      { at: 0.40, text: 'CALIBRATING 4K CINEMA ASSETS...' },
      { at: 0.70, text: 'SYNCHRONIZING CONVERSION ENGINES...' },
      { at: 0.92, text: 'ALIGNMENT ACHIEVED · 11:11' },
    ];

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      
      // Luxury easeInOutCubic
      const eased = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      // Calculate time: 00:00 -> 11:11
      const currentMin = Math.floor(eased * 11);
      const currentSec = Math.floor(eased * 11);
      const formattedTime = `${currentMin.toString().padStart(2, '0')}:${currentSec.toString().padStart(2, '0')}`;
      setTimeDisplay(formattedTime);

      // Percentage 0% -> 100%
      setPercent(Math.round(eased * 100));

      // Update status narrative
      for (let i = statuses.length - 1; i >= 0; i--) {
        if (progress >= statuses[i].at) {
          setStatusText(statuses[i].text);
          break;
        }
      }

      if (progress >= 1) {
        clearInterval(interval);
        setTimeDisplay('11:11');
        setPercent(100);
        setStatusText('ALIGNMENT ACHIEVED · 11 11 LIVE');

        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            onComplete();
          }, 850);
        }, 350);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-[#070406] flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden text-white"
        >
          {/* Volumetric Radial Ambient Neon Glowing Nebula */}
          <div 
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-crimson/[0.18] blur-[170px]" 
            aria-hidden="true"
          />
          <div 
            className="pointer-events-none absolute -top-40 right-10 w-[500px] h-[500px] rounded-full bg-magenta/10 blur-[150px]" 
            aria-hidden="true"
          />

          {/* Precision Architectural Studio Markers */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-white/40 tracking-[0.25em] uppercase relative z-10">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              <span>11 11 DIGITAL SOLUTIONS</span>
            </span>
            <span className="hidden sm:inline font-bold text-crimson/80">
              TAMIL NADU, IN · IST
            </span>
            <span className="text-white/60 font-bold">
              SYS // 04.0.0
            </span>
          </div>

          {/* Center Brand Awakening Stage */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            {/* High-Resolution Transparent Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mb-8 sm:mb-10"
            >
              <img
                src={logoImg}
                alt="11 11 Digital Solutions"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_0_35px_rgba(248,17,90,0.55)]"
              />
              {/* Subtle radiant energy ring */}
              <div className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-crimson/15 blur-xl -z-10 animate-pulse" />
            </motion.div>

            {/* 11:11 Master Time Display */}
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-2">
                <span className="text-6xl sm:text-7xl md:text-8xl font-display font-extrabold tracking-[-0.04em] text-white font-mono drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
                  {timeDisplay}
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-crimson tracking-widest uppercase">
                  IST
                </span>
              </div>

              {/* Status ticker */}
              <div className="mt-4 flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-ping" />
                <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-[#FF9BB5] uppercase">
                  {statusText}
                </span>
              </div>

              {/* Razor-thin Neon Progress Bar */}
              <div className="w-64 sm:w-80 h-[3px] bg-white/10 rounded-full mt-8 overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FF2D6C] via-[#FF5E8E] to-crimson rounded-full shadow-[0_0_12px_rgba(248,17,90,0.9)]"
                  style={{ width: `${percent}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              {/* Percentage Counter */}
              <span className="text-[11px] font-mono font-bold tracking-widest text-white/50 mt-3">
                {percent}%
              </span>
            </div>
          </div>

          {/* Bottom Luxury Footer Bar */}
          <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40 tracking-[0.25em] uppercase relative z-10 border-t border-white/[0.08] pt-4">
            <span>CODE · CINEMA · PERFORMANCE</span>
            <span className="text-white/70 font-semibold">PREPARATION &rarr; ALIGNMENT</span>
            <span className="hidden sm:inline">11:11 EXPERIENCE</span>
          </div>

          {/* Studio Corner Crosshair Accents */}
          <span className="absolute top-6 left-6 text-white/20 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute top-6 right-6 text-white/20 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute bottom-6 left-6 text-white/20 font-mono text-xs select-none pointer-events-none">+</span>
          <span className="absolute bottom-6 right-6 text-white/20 font-mono text-xs select-none pointer-events-none">+</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Preloader;
