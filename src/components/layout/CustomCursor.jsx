import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
export const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const [cursorText, setCursorText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);
    // Smooth springs for outer ring
    const springConfig = { damping: 24, stiffness: 220, mass: 0.5 };
    const ringX = useSpring(mouseX, springConfig);
    const ringY = useSpring(mouseY, springConfig);
    useEffect(() => {
        // Check if device supports fine hover cursor
        const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        if (!hasFinePointer)
            return;
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible)
                setIsVisible(true);
            // Context detection
            const target = e.target;
            if (!target)
                return;
            // Hide cursor over inputs and textareas
            const isInput = target.closest('input, textarea, select, button[type="submit"]');
            if (isInput) {
                setIsVisible(false);
                return;
            }
            else {
                setIsVisible(true);
            }
            // Check for custom cursor label
            const labelledEl = target.closest('[data-cursor]');
            if (labelledEl) {
                setCursorText(labelledEl.getAttribute('data-cursor') || '');
                setIsPointer(true);
            }
            else {
                setCursorText('');
                const clickable = target.closest('a, button, [role="button"]');
                setIsPointer(!!clickable);
            }
        };
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible]);
    if (!isVisible)
        return null;
    return (<div className="pointer-events-none fixed inset-0 z-[9999] select-none">
      {/* Center 8px Crimson Dot */}
      <motion.div className="fixed top-0 left-0 w-2 h-2 rounded-full bg-crimson -translate-x-1/2 -translate-y-1/2" style={{
            x: mouseX,
            y: mouseY,
            opacity: cursorText ? 0 : 1,
        }}/>

      {/* Lagging 40px Ring (Expands on links or with custom text) */}
      <motion.div className="fixed top-0 left-0 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-colors duration-200" style={{
            x: ringX,
            y: ringY,
            width: cursorText ? 80 : isPointer ? 56 : 36,
            height: cursorText ? 80 : isPointer ? 56 : 36,
            backgroundColor: cursorText ? '#F8115A' : isPointer ? 'rgba(248, 17, 90, 0.15)' : 'transparent',
            border: cursorText ? 'none' : '1.5px solid rgba(248, 17, 90, 0.5)',
            backdropFilter: cursorText ? 'blur(4px)' : 'none',
        }}>
        {cursorText && (<span className="text-[11px] font-bold uppercase tracking-wider text-white">
            {cursorText}
          </span>)}
      </motion.div>
    </div>);
};
