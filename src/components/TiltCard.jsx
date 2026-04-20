import React, { useRef, useState } from 'react';
import { useClickSound } from '../hooks/useSounds';

/**
 * TiltCard - 3D perspective tilt card with optional animated gradient border
 * Props:
 *   children, className, gradientBorder (bool), glowColor (css color string)
 */
export default function TiltCard({ children, className = '', gradientBorder = false, glowColor = 'rgba(139,92,246,0.5)', intensity = 15 }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const playClick = useClickSound();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -intensity;
    const rotateY = ((x - cx) / cx) * intensity;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;

    // Glow position
    if (glowRef.current) {
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      glowRef.current.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, ${glowColor} 0%, transparent 60%)`;
      glowRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    if (glowRef.current) glowRef.current.style.opacity = '0';
    setIsHovered(false);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleClick = (e) => {
    playClick();
    // Ripple effect
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      width: 30px; height: 30px;
      background: rgba(139,92,246,0.4);
      top: ${e.clientY - rect.top - 15}px;
      left: ${e.clientX - rect.left - 15}px;
      animation: ripple 0.6s linear forwards;
      pointer-events: none;
      z-index: 100;
    `;
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${gradientBorder ? 'gradient-border' : ''} ${className}`}
      style={{
        transition: 'transform 0.15s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {/* Inner glow that follows cursor */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none rounded-inherit transition-opacity duration-300"
        style={{ opacity: 0, zIndex: 1 }}
      />
      {/* Shine overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-inherit"
        style={{
          background: isHovered
            ? 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)'
            : 'none',
          zIndex: 2,
        }}
      />
      <div style={{ position: 'relative', zIndex: 3 }}>
        {children}
      </div>
    </div>
  );
}
