import './globals.css';
import { CoverParticles } from '@/components/cover-particles';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center"> 
      <div className="flex flex-col items-center gap-4"> 
        <p className="text-3xl font-bold animate-fade-in">Victor Manuel Canchola 🌱</p>
        <p className="text-lg animate-slide-in">Introducción</p>
      </div>
      <CoverParticles /> 
    </main>
  );
}