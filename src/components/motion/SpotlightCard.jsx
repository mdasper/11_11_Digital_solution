import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
export const SpotlightCard = ({ children, className, tilt = true, spotlightColor = 'rgba(248, 17, 90, 0.08)', ...props }) => {
    const cardRef = useRef(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [transform, setTransform] = useState('');
    const handleMouseMove = (e) => {
        if (!cardRef.current)
            return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCoords({ x, y });
        if (tilt) {
            // 3D tilt calculation (max 6deg)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`);
        }
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
    };
    return (<div ref={cardRef} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
            transform: isHovered ? transform : undefined,
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }} className={cn('group relative rounded-[28px] bg-white border border-black/[0.08] shadow-[0_10px_30px_rgba(18,14,17,0.05)] p-6 sm:p-8 overflow-hidden transition-all duration-300', className)} {...props}>
      {/* Radial spotlight effect */}
      <div className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
            background: `radial-gradient(550px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 45%)`,
        }} aria-hidden="true"/>

      {/* Dynamic border specular shine */}
      <div className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" style={{
            border: '1px solid rgba(248, 17, 90, 0.4)',
            maskImage: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
        }} aria-hidden="true"/>

      <div className="relative z-10">{children}</div>
    </div>);
};
