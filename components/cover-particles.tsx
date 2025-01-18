"use client"

import {useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.


export const CoverParticles =() =>{

    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return(
        <>
        {init &&
        <div className="m-[0px]">
        <Particles
        id="tsparticles"
        options={{
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
<<<<<<< HEAD
                        distance: 300,
                        duration: 0.2,
=======
                        distance: 200,
                        duration: 0.4,
>>>>>>> 04028b0b (update links and animations)
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
<<<<<<< HEAD
                    speed: 2,
=======
                    speed: 3,
>>>>>>> 04028b0b (update links and animations)
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    /> </div>}
  </>
);
};      
