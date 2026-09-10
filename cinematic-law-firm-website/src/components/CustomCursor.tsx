import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only on desktop
    if (window.innerWidth < 1024) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const hover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], input, textarea, select');
      if (ringRef.current) {
        ringRef.current.style.transform = isInteractive
          ? 'translate(-50%, -50%) scale(1.8)'
          : 'translate(-50%, -50%) scale(1)';
        ringRef.current.style.borderColor = isInteractive
          ? 'rgba(201,162,39,0.9)'
          : 'rgba(201,162,39,0.6)';
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', hover, { passive: true });

    let rafId: number;
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
      if (ringRef.current) {
        const dx = pos.current.x - ringPos.current.x;
        const dy = pos.current.y - ringPos.current.y;
        ringPos.current.x += dx * 0.12;
        ringPos.current.y += dy * 0.12;
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', hover);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          width: '6px', height: '6px',
          background: '#C9A227',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          willChange: 'left, top',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={ringRef}
        style={{
          width: '32px', height: '32px',
          border: '1px solid rgba(201,162,39,0.6)',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%) scale(1)',
          transition: 'transform 0.3s ease, border-color 0.3s ease',
          willChange: 'left, top',
        }}
      />
    </>
  );
}
