import Image from "next/image";
import MotionTransition from "./transition-component";

const Avatar = () =>{
    return(
        <MotionTransition position="bottom" className="bottom=0 right=0 hidden md:inline-block md:absolute">
            <Image src="/avatar_profile.png" width={400} height={400} className="w-full h-full" alt="Profile"/>
        </MotionTransition>
    );
}

export default Avatar;





