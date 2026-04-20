import React, { useEffect, useRef, useState } from 'react';

export default function CursorLight() {
  const dotRef    = useRef(null);
  const ringRef   = useRef(null);
  const glowRef   = useRef(null);
  const [visible, setVisible] = useState(false);

  const pos     = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf     = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringPos.current.x - 24}px, ${ringPos.current.y - 24}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);   // eslint-disable-line

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s',
          willChange: 'transform',
        }}
      />

      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9998] border-2 border-violet-400/60"
        style={{
          opacity: visible ? 0.75 : 0,
          transition: 'opacity 0.3s',
          willChange: 'transform',
        }}
      />

      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9990]"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  );
}
