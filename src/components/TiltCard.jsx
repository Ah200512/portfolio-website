import React, { useRef, useState } from 'react';
import { useClickSound } from '../hooks/useSounds';

/**
 * TiltCard - Static version (Interactive motion removed as per user request)
 * Maintained with glow effect for "Handcrafted Gold" feel.
 */
export default function TiltCard({ children, className = '', gradientBorder = false, glowColor = 'rgba(212, 175, 55, 0.25)', intensity = 15 }) {
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

    // Glow position
    if (glowRef.current) {
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      glowRef.current.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, ${glowColor} 0%, transparent 60%)`;
      glowRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = '0';
    setIsHovered(false);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleClick = (e) => {
    playClick();
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${gradientBorder ? 'gradient-border' : ''} ${className}`}
      style={{
        transition: 'all 0.3s ease',
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
            ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 60%)'
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
