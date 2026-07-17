import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none -z-10 w-[400px] h-[400px] rounded-full blur-[100px] opacity-25 mix-blend-screen transition-opacity duration-300"
      style={{
        left: `${position.x - 200}px`,
        top: `${position.y - 200}px`,
        background: 'radial-gradient(circle, rgba(108,99,255,0.4) 0%, rgba(0,212,170,0.15) 50%, transparent 100%)',
      }}
    />
  );
};

export default CursorGlow;
