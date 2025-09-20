import { useEffect, useState } from 'react';

interface HexagonBackgroundProps {
  density?: 'light' | 'medium' | 'heavy';
  className?: string;
}

const HexagonBackground = ({ density = 'light', className = '' }: HexagonBackgroundProps) => {
  const [hexagons, setHexagons] = useState<Array<{
    id: number;
    size: number;
    left: number;
    top: number;
    delay: number;
    duration: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const hexagonCount = density === 'light' ? 15 : density === 'medium' ? 25 : 35;
    const newHexagons = Array.from({ length: hexagonCount }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 20, // 20-60px
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 15 + 20, // 20-35s
      opacity: Math.random() * 0.08 + 0.02, // 0.02-0.1
    }));
    setHexagons(newHexagons);
  }, [density]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Base honeycomb pattern */}
      <div className="absolute inset-0 honeycomb-pattern" />
      
      {/* Random floating hexagons */}
      {hexagons.map((hex) => (
        <div
          key={hex.id}
          className="absolute hexagon bg-honey animate-pulse"
          style={{
            width: `${hex.size}px`,
            height: `${hex.size}px`,
            left: `${hex.left}%`,
            top: `${hex.top}%`,
            opacity: hex.opacity,
            animationDelay: `${hex.delay}s`,
            animationDuration: `${hex.duration}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
      
      {/* Additional subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, 
            hsl(var(--honey-yellow) / 0.05) 0%, 
            transparent 50%),
            radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, 
            hsl(var(--nature-green) / 0.03) 0%, 
            transparent 50%)`
        }}
      />
    </div>
  );
};

export default HexagonBackground;