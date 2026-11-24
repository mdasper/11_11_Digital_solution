import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';
export const PageTransition = ({ children }) => {
    const location = useLocation();
    const prefersReduced = useReducedMotion();
    if (prefersReduced) {
        return (<AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          {children}
        </motion.div>
      </AnimatePresence>);
    }
    // 5 Staggered vertical columns
    const columns = [0, 1, 2, 3, 4];
    return (<AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="relative min-h-screen">
        {/* Curtains Entry & Exit Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[9990] flex">
          {columns.map((index) => (<motion.div key={index} className="flex-1 bg-gradient-to-b from-[#FF1A63] via-[#C2104A] to-[#7A0A2E]" initial={{ scaleY: 0, originY: 1 }} animate={{
                scaleY: [0, 1, 1, 0],
                originY: [1, 1, 0, 0],
            }} transition={{
                duration: 1.1,
                times: [0, 0.45, 0.55, 1],
                delay: index * 0.05,
                ease: [0.76, 0, 0.24, 1],
            }}/>))}

          {/* Centered 11:11 Ritual Flash */}
          <motion.div className="absolute inset-0 flex items-center justify-center select-none" initial={{ opacity: 0, scale: 0.8 }} animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 1.1],
        }} transition={{
            duration: 0.7,
            times: [0, 0.3, 0.7, 1],
            delay: 0.3,
        }}>
            <span className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-widest drop-shadow-[0_10px_30px_rgba(248,17,90,0.8)]">
              11:11
            </span>
          </motion.div>
        </div>

        {/* Content Wrapper */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>);
};
