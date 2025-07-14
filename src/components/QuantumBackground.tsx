import React from 'react';

const QuantumBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Quantum particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Black hole effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-30">
        <div className="relative w-full h-full">
          {/* Event horizon */}
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-cyan-500/20 to-black animate-spin-slow border border-cyan-400/30"></div>
          
          {/* Accretion disk */}
          <div className="absolute inset-4 rounded-full bg-gradient-conic from-cyan-400/40 via-aqua-300/30 to-cyan-400/40 animate-spin"></div>
          
          {/* Inner disk */}
          <div className="absolute inset-8 rounded-full bg-gradient-radial from-cyan-300/50 via-aqua-400/30 to-transparent animate-spin-reverse"></div>
          
          {/* Core */}
          <div className="absolute inset-1/3 rounded-full bg-black border border-cyan-400/50 animate-pulse"></div>
        </div>
      </div>

      {/* Secondary black hole */}
      <div className="absolute bottom-1/4 left-1/6 w-64 h-64 opacity-20">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-aqua-400/20 to-black animate-spin-slow-reverse"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-conic from-aqua-300/30 via-cyan-400/20 to-aqua-300/30 animate-spin-reverse"></div>
          <div className="absolute inset-1/4 rounded-full bg-black border border-aqua-400/40"></div>
        </div>
      </div>

      {/* Quantum field lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${10 + i * 12}%`,
              left: '0',
              right: '0',
              transform: `rotate(${i * 22.5}deg)`,
              transformOrigin: 'center'
            }}
          />
        ))}
      </div>

      {/* Floating energy orbs */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Quantum interference patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_cyan_1px,_transparent_1px)] bg-[length:50px_50px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_aqua_1px,_transparent_1px)] bg-[length:30px_30px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default QuantumBackground;