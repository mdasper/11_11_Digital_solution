import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '@/assets/logo-clean.png';

export const Preloader = ({ onComplete }) => {
  const [isFinished, setIsFinished] = useState(false);
  const [phase, setPhase] = useState('line-expanding'); // 'line-expanding' -> 'opening' -> 'glowing'

  useEffect(() => {
    // 0.0s - 1.0s: laser line expands across the center
    const t1 = setTimeout(() => {
      setPhase('opening'); // 1.0s: line opens the logo vertically
    }, 1000);

    // 2.3s: logo is fully open with ambient crimson bloom
    const t2 = setTimeout(() => {
      setPhase('glowing');
    }, 2300);

    // 3.4s: curtain wipe slides smoothly up
    const t3 = setTimeout(() => {
      setIsFinished(true);
    }, 3400);

    // 4.0s: complete and transition to home page
    const t4 = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-[#070406] flex items-center justify-center select-none overflow-hidden text-white"
        >
          {/* Volumetric Radial Ambient Crimson Glowing Nebula */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-crimson/[0.14] blur-[170px]"
            aria-hidden="true"
          />

          {/* Line Opens the Logo Stage */}
          <div className="relative flex items-center justify-center w-[280px] sm:w-[420px] md:w-[500px]">
            {/* High-Resolution Brand Logo with clipPath vertical reveal from center */}
            <motion.div
              initial={{ clipPath: 'inset(50% 0 50% 0)' }}
              animate={{
                clipPath: phase === 'line-expanding' ? 'inset(50% 0 50% 0)' : 'inset(0% 0 0% 0)',
                scale: phase === 'glowing' ? 1.03 : 1,
              }}
              transition={{
                clipPath: { duration: 1.3, ease: [0.7, 0, 0.2, 1] },
                scale: { duration: 1.0, ease: 'easeOut' },
              }}
              className="relative z-10 w-full flex items-center justify-center"
            >
              <img
                src={logoImg}
                alt="11 11 Digital Solutions"
                className="w-auto h-20 sm:h-24 md:h-28 object-contain drop-shadow-[0_0_35px_rgba(248,17,90,0.65)]"
              />
            </motion.div>

            {/* Glowing Laser Light Line that expands then opens and fades */}
            <motion.div
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{
                scaleX: phase === 'line-expanding' ? 1 : 1,
                opacity: phase === 'opening' || phase === 'glowing' ? 0 : 1,
              }}
              transition={{
                scaleX: { duration: 1.0, ease: [0.7, 0, 0.2, 1] },
                opacity: { duration: 0.6, delay: 0.2, ease: 'easeInOut' },
              }}
              className="absolute left-[-15%] right-[-15%] top-1/2 -translate-y-1/2 h-[2.5px] z-20 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, #ffffff, #F8115A, #ffffff, transparent)',
                boxShadow: '0 0 18px #F8115A, 0 0 35px #F8115A',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
