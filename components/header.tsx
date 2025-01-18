import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";

const Header = () => {
    return (
<<<<<<< HEAD
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-10">
            <header className="flex justify-center items-center"> 
                <div className="container justify-between max-w-6xl mx-auto md:flex  items-center"> 
                    <Link href="/">
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left text-modYellow">
                            Victor Manuel Canchola
                            <span className="text-modOrange">
                                {' '}🌱
=======
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header className="flex justify-center items-center"> {/* Añadido flex y centrado */}
                <div className="container justify-between max-w-6xl mx-auto md:flex  items-center"> {/* Añadido centrado */}
                    <Link href="/">
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            Victor Manuel Canchola
                            <span className="bg-secondary-100">
<<<<<<< HEAD
                                Músico🌱
>>>>>>> 04028b0b (update links and animations)
=======
                                🌱
>>>>>>> f2327763 (spotify terminado y actualización de soundcloud)
                            </span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({logo, src, id}) =>(
                            <Link key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"

                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;