import './globals.css';
import { CoverParticles } from '@/components/cover-particles'; 
import  TransitionPage  from '@/components/transition-pages';
import Introduction from '@/components/introduction';


export default function Home() {

  return (
    <main> 
      <TransitionPage/> 
      <div className="flex flex-col items-center gap-4"> 
        <CoverParticles/> 
        <Introduction />
        <h1></h1>
        <span></span>
      </div>
    </main>
  );
} 
