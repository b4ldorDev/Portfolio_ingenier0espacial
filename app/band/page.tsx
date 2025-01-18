"use client"
import ContainerPage from "@/components/containerPage";
import TransitionPage from "@/components/transition-pages";
import SpotifyPlayer from "@/components/spotify-player";
import { CoverParticles } from "@/components/cover-particles";
import { TypeAnimation } from "react-type-animation";

const Juliette = () => {
  return (
    <div className="z-10 w-full">
      <CoverParticles/>
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
        <div className="w-full p-4">
          <SpotifyPlayer />
        </div>
        <div className="w-full p-4">
          <h1 className="text-center md:text-left ">
            <TypeAnimation
              sequence={[
                "Somos una banda Mexicana que busca combinar sonidos del rock japonés, con nuestras influencias del sonido latino como el bossa nova, y claro, el rock latino.",
                1000,
                " Con armonías dinámicas, y líricas que hablan sobre enfrentar los sentimientos, sean buenos o malos, como una realidad, sin huir de ellos.",
                1000,
                "Buscamos conectar con el corazón de toda la gente que esté dispuesta a darnos una oportunidad en su soundtrack de vida",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block"
            />
        </h1>
      </div>
    </div>
  </div>
  );
};

export default Juliette;


