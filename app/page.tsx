import './globals.css';
import { CoverParticles } from '@/components/cover-particles'; 
import  TransitionPage  from '@/components/transition-pages';

export default function Home() {
  return (
    <main> 
      <TransitionPage/> 
      <div className="flex flex-col items-center gap-4"> 
        <CoverParticles /> 
      {/*  <p className="text-3xl font-bold animate-fade-in">Introducción </p>       */} 
      {/*  <p className="text-lg animate-slide-in">Productor musical y compositor originario de Querétaro. Especializado en la creación y producción de música para medios audiovisuales. Fundador de la banda "Juliette!", donde fusiona elementos del rock alternativo con influencias del rock japonés</p>*/}
      </div>
    </main>
  );
}