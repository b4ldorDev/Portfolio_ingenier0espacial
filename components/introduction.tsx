"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () => {

  const  contact_number = "5432423432";
  const  message = "Hola, me gustaría tener más información de tu trabajo"
  const  encodedMessage = encodeURIComponent(message);
  const  whatsappURL = `https://wa.me/${contact_number}?text=${encodedMessage}`;
  
  const navigationLinks = [
    { href: "https://on.soundcloud.com/6HVpkskQcFtRcyre8", text: "Portafolio", bgColor: "bg-modGreen" },
    { href: whatsappURL, text: "Contacto", bgColor: "bg-modOrange" },
    { 
      href: "https://open.spotify.com/artist/4F2qB8AattAcKT4noCIqcd?si=oAZvxBTmSnypQqFs_bx_Wg", 
      text: "Mi banda", 
      bgColor: "bg-modGreen" 
    }
  ];
  
  return (
    <section className="min-h-screen w-full flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center">
          <div className="w-full max-w-md flex justify-center">
            <Image
              src="/avatar_profile.png"
              width={500}
              height={500}
              alt="Profile pic"
              className="w-full h-auto object-contain"
            
            />
          </div>

          <div className="flex flex-col items-center md:items-start space-y-6 w-full max-w-md">
            <h1 className="text-xl md:text-5xl font-bold text-modYellow text-center md:text-left">
              Composición y producción musical para medios audiovisuales
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-gray-200 text-center md:text-left">
              Puedo hacer:
            </h2>

            <div className="text-xl md:text-2xl text-center md:text-left w-full">
              <TypeAnimation
                sequence={[
                  "Arreglos",
                  1000,
                  "Producción musical",
                  1000,
                  "Foleys",
                  1000,
                  "Diseño Sonoro",
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block font-bold text-modYellow"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`px-3 py-2 ${link.bgColor} text-modYellow border-2 rounded-xl 
                    text-sm md:text-base transition-all hover:shadow-xl hover:scale-105`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Introduction;
