import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, input, textarea, [data-cursor]');
      setHovering(!!interactive);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (!visible) return null;

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-all duration-150 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 6 : 6,
          height: hovering ? 6 : 6,
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#2DD4BF',
          opacity: hovering ? 0 : 0.85,
        }}
      />
      <div
        className="fixed pointer-events-none z-[9999] rounded-full border transition-all duration-300 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 36 : 22,
          height: hovering ? 36 : 22,
          transform: 'translate(-50%, -50%)',
          borderWidth: 1,
          borderColor: hovering ? 'rgba(45,212,191,0.7)' : 'rgba(45,212,191,0.35)',
          backgroundColor: hovering ? 'rgba(45,212,191,0.06)' : 'transparent',
        }}
      />
    </>
  );
}
