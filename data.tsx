import {Share2,FileAudio, Music, HomeIcon, UserRound, Youtube, Crop, Pencil, Computer, Book, Rocket} from "lucide-react";
import { Twinkle_Star } from "next/font/google";
import { FaSoundcloud, FaSpotify, FaInstagram } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://youtube.com/@bitscraft-o2g?si=Ut5W7DMYo4iXZBOR",
    },
    {
        id: 2,
        logo: <FaSpotify size={30} strokeWidth={1} />,
        src: "https://open.spotify.com/artist/4F2qB8AattAcKT4noCIqcd?si=jA5I4DE6Rj2xKTn5JTTORg",
    },
    {
        id: 3,
        logo: <FaSoundcloud  size={30} strokeWidth={1} />,
        src: "https://on.soundcloud.com/6HVpkskQcFtRcyre8",
    },
    {
        id: 4,
        logo: <FaInstagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/ingenier0espacial/",
    },
    {
        id: 5,
        logo: <SiYoutubemusic size={30} strokeWidth={1} />,
        src: "https://music.youtube.com/playlist?list=OLAK5uy_n9LubyMvmY81MMNlxXRNRQgoQJvCrKy88&si=ho0obFKlNUWAg9ji",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    /*
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    */
    {
        id: 3,
        title: "Portfolio",
        icon: <FileAudio size={25} color="#fff" strokeWidth={1} />,
        link: "/musicPortfolio",
    },
    {   
        id: 4,
        title: "Band",
        icon: <Music size={25} color="#fff" strokeWidth={1} />,
        link: "/band",
    },
    /*{
        id: 5,
        title: "Networks",
        icon: <Share2 size={25} color="#fff" strokeWidth={1} />,
        link: "/networks",
    }*/
];


export const ExampleLol = [
    {
        id: 1,
        name: "No sé xd",
        description:
            "",
        imageUrl: "",
    },
    {
    
        id: 6,
        name: "No sé xd",
        description:"",
        imageUrl: "",
    },
];
