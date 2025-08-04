import React from 'react';

const PixelArtSnowLanding = () => {
  // Componente para los copos de nieve
  const Snowflake = ({ delay, duration, left }) => (
    <div
      className="absolute w-1 h-1 bg-white rounded-full opacity-80"
      style={{
        left: `${left}%`,
        animation: `snowfall ${duration}s linear infinite`,
        animationDelay: `${delay}s`
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Estilos CSS para el fondo pixel art y animación de nieve */}
      <style jsx>{`
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
        
        .pixel-bg {
          background-image: 
            radial-gradient(circle at 25% 25%, #e0f2fe 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #b3e5fc 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #81d4fa 0%, transparent 50%);
          background-size: 60px 60px, 40px 40px, 80px 80px;
          background-position: 0 0, 20px 20px, 40px 40px;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .pixel-gradient {
          background: linear-gradient(135deg, 
            #f8fafc 0%, 
            #e2e8f0 25%, 
            #cbd5e1 50%, 
            #94a3b8 75%, 
            #64748b 100%);
          background-size: 20px 20px;
          image-rendering: pixelated;
        }
      `}</style>

      {/* Fondo pixel art */}
      <div className="absolute inset-0 pixel-gradient"></div>
      <div className="absolute inset-0 pixel-bg opacity-60"></div>
      
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
          {/* Efecto de resplandor pixel */}
          <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-20 scale-110"></div>
          
          {/* Contenedor de la imagen */}
          <div className="relative bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 border-slate-200">
            <img
              src="https://i.imgur.com/jsDq0OP.jpg"
              alt="Profile"
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl"
              style={{ imageRendering: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* Elementos decorativos pixel art */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-blue-200 opacity-60" style={{ imageRendering: 'pixelated' }}></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-slate-300 opacity-60" style={{ imageRendering: 'pixelated' }}></div>
      <div className="absolute top-1/3 right-10 w-4 h-4 bg-indigo-200 opacity-60" style={{ imageRendering: 'pixelated' }}></div>
      <div className="absolute bottom-1/3 left-20 w-5 h-5 bg-blue-100 opacity-60" style={{ imageRendering: 'pixelated' }}></div>
    </div>
  );
};

export default PixelArtSnowLanding;