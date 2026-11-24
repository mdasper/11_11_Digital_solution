import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export const Preloader = ({ onComplete }) => {
    const [timeDisplay, setTimeDisplay] = useState('00:00');
    const [isFinished, setIsFinished] = useState(false);
    useEffect(() => {
        // Fast, crisp 00:00 -> 11:11 counter (900ms)
        const targetMinutes = 11;
        const targetSeconds = 11;
        const durationMs = 900;
        const startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(1, elapsed / durationMs);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentMin = Math.floor(eased * targetMinutes);
            const currentSec = Math.floor(eased * targetSeconds);
            const formatted = `${currentMin.toString().padStart(2, '0')}:${currentSec.toString().padStart(2, '0')}`;
            setTimeDisplay(formatted);
            if (progress >= 1) {
                clearInterval(interval);
                setTimeDisplay('11:11');
                setTimeout(() => {
                    setIsFinished(true);
                    if (typeof window !== 'undefined') {
                        sessionStorage.setItem('1111_preloader_seen', 'true');
                    }
                    setTimeout(() => {
                        onComplete();
                    }, 400);
                }, 200);
            }
        }, 30);
        return () => clearInterval(interval);
    }, [onComplete]);
    return (<AnimatePresence>
      {!isFinished && (<motion.div initial={{ opacity: 1 }} exit={{
                opacity: 0,
                pointerEvents: 'none',
                transition: { duration: 0.45, ease: 'easeOut' },
            }} className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center select-none">
          {/* Subtle Ambient Crimson Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-crimson/20 blur-[120px] pointer-events-none" aria-hidden="true"/>

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* SVG Logo Twin Curves Drawing In */}
            <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="preloaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF1A63"/>
                  <stop offset="55%" stopColor="#C2104A"/>
                  <stop offset="100%" stopColor="#7A0A2E"/>
                </linearGradient>
              </defs>
              <motion.path d="M18 48 C 18 34, 28 34, 28 20 C 28 14, 22 14, 20 16 C 20 16, 24 26, 16 36 C 12 41, 14 48, 18 48 Z" fill="url(#preloaderGrad)" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}/>
              <motion.path d="M28 48 C 28 34, 38 34, 38 20 C 38 14, 32 14, 30 16 C 30 16, 34 26, 26 36 C 22 41, 24 48, 28 48 Z" fill="url(#preloaderGrad)" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}/>
            </svg>

            {/* 11:11 Ritual Digital Clock Counter */}
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-[#120E11] font-mono">
                {timeDisplay}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-crimson">
                Precision Meets Passion
              </span>
            </div>
          </div>
        </motion.div>)}
    </AnimatePresence>);
};
