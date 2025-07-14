import React, { useState, useEffect } from 'react';

interface Flame {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: 'flame' | 'smoke';
}

const FlameEffect: React.FC = () => {
  const [flames, setFlames] = useState<Flame[]>([]);

  const createFlame = (x: number, y: number) => {
    const particles: Particle[] = [];
    const particleCount = 25 + Math.random() * 15;

    for (let i = 0; i < particleCount; i++) {
      const isSmoke = Math.random() > 0.4; // 60% smoke, 40% flame
      
      particles.push({
        id: i,
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 5,
        vx: (Math.random() - 0.5) * (isSmoke ? 4 : 6),
        vy: -Math.random() * (isSmoke ? 12 : 8) - (isSmoke ? 3 : 5),
        life: isSmoke ? 120 : 80,
        maxLife: isSmoke ? 120 : 80,
        size: Math.random() * (isSmoke ? 20 : 12) + (isSmoke ? 8 : 6),
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4,
        type: isSmoke ? 'smoke' : 'flame',
      });
    }

    const newFlame: Flame = {
      id: Date.now() + Math.random(),
      x,
      y,
      particles,
    };

    setFlames(prev => [...prev, newFlame]);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createFlame(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlames(prev => 
        prev.map(flame => ({
          ...flame,
          particles: flame.particles
            .map(particle => ({
              ...particle,
              x: particle.x + particle.vx,
              y: particle.y + particle.vy,
              vx: particle.vx * 0.98, // air resistance
              vy: particle.vy + (particle.type === 'smoke' ? 0.1 : 0.25), // different gravity for smoke vs flame
              life: particle.life - 1,
              rotation: particle.rotation + particle.rotationSpeed,
              size: particle.type === 'smoke' ? 
                particle.size + 0.1 : // smoke expands
                particle.size * 0.995, // flame shrinks slightly
            }))
            .filter(particle => particle.life > 0)
        }))
        .filter(flame => flame.particles.length > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {flames.map(flame => (
        <div key={flame.id}>
          {flame.particles.map(particle => {
            const opacity = particle.life / particle.maxLife;
            const scale = particle.type === 'smoke' ? 
              (1 - opacity) * 0.8 + 0.2 : // smoke grows as it fades
              opacity * 0.8 + 0.2; // flame shrinks as it fades
            
            const smokeOpacity = particle.type === 'smoke' ? 
              Math.min(opacity * 1.5, 0.8) * (1 - (1 - opacity) * 0.3) :
              opacity;

            return (
              <div
                key={particle.id}
                className="absolute"
                style={{
                  left: flame.x + particle.x,
                  top: flame.y + particle.y,
                  width: particle.size * scale,
                  height: particle.size * scale,
                  background: particle.type === 'smoke' ? 
                    `radial-gradient(ellipse, 
                      rgba(255, 255, 255, ${smokeOpacity * 0.9}) 0%, 
                      rgba(240, 240, 255, ${smokeOpacity * 0.7}) 20%, 
                      rgba(220, 220, 255, ${smokeOpacity * 0.5}) 40%, 
                      rgba(200, 200, 255, ${smokeOpacity * 0.3}) 60%, 
                      rgba(180, 180, 255, ${smokeOpacity * 0.2}) 80%, 
                      transparent 100%)` :
                    `radial-gradient(circle, 
                      rgba(255, 255, 255, ${opacity * 0.95}) 0%, 
                      rgba(255, 255, 255, ${opacity * 0.8}) 25%, 
                      rgba(255, 250, 250, ${opacity * 0.6}) 50%, 
                      rgba(240, 240, 255, ${opacity * 0.4}) 75%, 
                      transparent 100%)`,
                  boxShadow: particle.type === 'smoke' ?
                    `0 0 ${particle.size * scale * 1.5}px rgba(255, 255, 255, ${smokeOpacity * 0.3})` :
                    `0 0 ${particle.size * scale * 2}px rgba(255, 255, 255, ${opacity * 0.7})`,
                  transform: `translate(-50%, -50%) scale(${scale}) rotate(${particle.rotation}deg)`,
                  filter: particle.type === 'smoke' ? 
                    `blur(${2 + (1 - opacity) * 3}px)` : 
                    'blur(0.8px)',
                  borderRadius: particle.type === 'smoke' ? '50%' : '60%',
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FlameEffect;