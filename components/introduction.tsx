"use client"

import React from 'react';

const PixelArtSnowLanding = () => {
  // Componente para los copos de nieve
  const Snowflake = ({ delay, duration, left }) => (
    <div
      className="absolute w-1 h-1 bg-white rounded-full opacity-80 animate-pulse"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        transform: 'translateY(-100vh)',
        animation: `snowfall ${duration}s linear infinite ${delay}s`
      }}
    />
  );

  // Generar copos de nieve aleatorios
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: 3 + Math.random() * 4,
    left: Math.random() * 100
  }));

  return (
    <>
      {/* Estilos CSS para animación de nieve */}
      <style jsx global>{`
        @keyframes snowfall {
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
      `}</style>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200">
        {/* Patrón de fondo pixel art con Tailwind */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(148, 163, 184, 0.1) 20px, rgba(148, 163, 184, 0.1) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(100, 116, 139, 0.1) 20px, rgba(100, 116, 139, 0.1) 40px)
            `,
            imageRendering: 'pixelated'
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
            />
          ))}
        </div>

        {/* Imagen centrada */}
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="relative">
            {/* Efecto de resplandor */}
            <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-20 scale-110"></div>
            
            {/* Contenedor de la imagen */}
            <div className="relative bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 border-slate-200">
              <img
                src="https://i.imgur.com/AetOc8Y.jpeg"
                alt="Profile"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Elementos decorativos pixel art */}
        <div className="absolute top-10 left-10 w-8 h-8 bg-blue-200 opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-slate-300 opacity-60"></div>
        <div className="absolute top-1/3 right-10 w-4 h-4 bg-indigo-200 opacity-60"></div>
        <div className="absolute bottom-1/3 left-20 w-5 h-5 bg-blue-100 opacity-60"></div>
      </div>
    </>
  );
};

export default PixelArtSnowLanding;