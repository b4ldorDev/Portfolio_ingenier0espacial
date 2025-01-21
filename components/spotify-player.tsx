"use client";
import React from 'react';
import  TransitionPage  from '@/components/transition-pages';

const SpotifyPlayer = () => {
    return (
    <main>
    <TransitionPage/> 
    <div className="flex justify-center items-center h-screen">
      <div className=" rounded-lg shadow-lg p-4 w-500 h-400 mx-auto">
        <iframe src="https://open.spotify.com/embed/artist/4F2qB8AattAcKT4noCIqcd?utm_source=generator  " width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe>      
      </div>
    </div>
    </main>  
  );
};
export default SpotifyPlayer;
