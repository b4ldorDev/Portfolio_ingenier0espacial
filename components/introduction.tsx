"use client"

import React from 'react';
import Image from "next/image";

interface SnowflakeProps {
  delay: number;
  duration: number;
  left: number;
  size: number;
}

const PixelArtSnowLanding = () => {
  // Componente para los copos de nieve
  const Snowflake: React.FC<SnowflakeProps> = ({ delay, duration, left, size }) => {
    const keyframes = `
      @keyframes snowfall-${delay.toString().replace('.', '')} {
        0% {
          transform: translateY(-100vh) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: keyframes }} />
        <div
          className="absolute bg-white rounded-full opacity-80"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            animation: `snowfall-${delay.toString().replace('.', '')} ${duration}s linear infinite`,
            animationDelay: `${delay}s`
          }}
        />
      </>
    );
  };

  // Generar copos de nieve aleatorios
  const snowflakes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: 3 + Math.random() * 4,
    left: Math.random() * 100,
    size: 1 + Math.random() * 2
  }));

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)'
        }}
      />
      
      {/* Patrón pixel art */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 20px,
              rgba(148, 163, 184, 0.3) 20px,
              rgba(148, 163, 184, 0.3) 22px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 20px,
              rgba(100, 116, 139, 0.3) 20px,
              rgba(100, 116, 139, 0.3) 22px
            )
          `
        }}
      />
      
      {/* Copos de nieve */}
      <div className="absolute inset-0 pointer-events-none">
        {snowflakes.map((flake) => (
          <Snowflake
            key={flake.id}
            delay={flake.delay}
            duration={flake.duration}
            left={flake.left}
            size={flake.size}
          />
        ))}
      </div>

      {/* Imagen centrada */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="relative">
          {/* Resplandor de fondo */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-20 scale-110"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
              filter: 'blur(20px)'
            }}
          />
          
          {/* Marco de la imagen */}
          <div className="relative bg-white bg-opacity-90 rounded-2xl p-6 shadow-2xl border-4 border-slate-200 backdrop-blur-sm">
            <Image
              src="https://i.imgur.com/AetOc8Y.jpeg"
              alt="Profile"
              width={400}
              height={400}
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-blue-200 opacity-40"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-slate-300 opacity-40"></div>
      <div className="absolute top-1/3 right-10 w-4 h-4 bg-indigo-200 opacity-40"></div>
      <div className="absolute bottom-1/3 left-20 w-5 h-5 bg-blue-100 opacity-40"></div>
    </div>
  );
};

export default PixelArtSnowLanding;