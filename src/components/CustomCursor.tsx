import React, { useEffect, useState } from 'react';

export interface CursorProps {
  cursorText?: string;
  cursorVariant?: 'default' | 'pointer' | 'view' | 'drag';
}

export const CustomCursor: React.FC<{ cursorText: string; cursorVariant: string }> = ({
  cursorText,
  cursorVariant
}) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
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
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isText = Boolean(cursorText);
  const isPointer = cursorVariant === 'pointer';

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      <div
        className={`relative -top-1/2 -left-1/2 flex items-center justify-center rounded-full transition-all duration-200 ease-out ${
          isText
            ? 'w-20 h-20 bg-violet-400 text-black font-semibold text-xs tracking-wider uppercase shadow-[0_0_24px_rgba(139,92,246,0.6)]'
            : isPointer
            ? 'w-10 h-10 bg-white/20 backdrop-blur-sm border border-violet-400/50 shadow-[0_0_16px_rgba(139,92,246,0.4)] scale-110'
            : 'w-3 h-3 bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]'
        }`}
      >
        {isText ? (
          <span className="font-mono font-bold select-none text-[11px] animate-pulse">
            {cursorText}
          </span>
        ) : null}
      </div>
    </div>
  );
};
