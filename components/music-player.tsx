"use client";

import React, { useEffect, useRef, useState } from 'react';
<<<<<<< HEAD
import { Play, Pause, SkipForward, SkipBack, Volume2, List } from 'lucide-react';
=======
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
>>>>>>> f2327763 (spotify terminado y actualización de soundcloud)

interface Track {
  url: string;
  title: string;
}

interface MusicPlayerProps {
  playlist: Track[];
  height?: number;
}

<<<<<<< HEAD
const MusicPlayer = ({ playlist }: MusicPlayerProps) => {
=======
const MusicPlayer = ({ playlist, height = 166 }: MusicPlayerProps) => {
>>>>>>> f2327763 (spotify terminado y actualización de soundcloud)
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [widget, setWidget] = useState(null);
  const [volume, setVolume] = useState(50);
<<<<<<< HEAD
  const [showPlaylist, setShowPlaylist] = useState(false);
=======
>>>>>>> f2327763 (spotify terminado y actualización de soundcloud)

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://w.soundcloud.com/player/api.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore - SC no está tipado
      const SC = window.SC;
      if (SC) {
        const playerWidget = SC.Widget(iframeRef.current);
        setWidget(playerWidget);

        playerWidget.bind(SC.Widget.Events.READY, () => {
          playerWidget.setVolume(volume);
        });

        playerWidget.bind(SC.Widget.Events.PLAY, () => {
          setIsPlaying(true);
        });

        playerWidget.bind(SC.Widget.Events.PAUSE, () => {
          setIsPlaying(false);
        });

        playerWidget.bind(SC.Widget.Events.FINISH, () => {
          handleNext();
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePlayPause = () => {
    if (widget) {
      if (isPlaying) {
        widget.pause();
      } else {
        widget.play();
      }
    }
  };

  const handleNext = () => {
    if (currentTrackIndex < playlist.length - 1) {
      setCurrentTrackIndex(prev => prev + 1);
      widget?.load(playlist[currentTrackIndex + 1].url, { auto_play: true });
    }
  };

  const handlePrevious = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(prev => prev - 1);
      widget?.load(playlist[currentTrackIndex - 1].url, { auto_play: true });
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    widget?.setVolume(newVolume / 100);
  };

  return (
<<<<<<< HEAD
    <div className="w-full max-w-2xl mx-auto space-y-4 px-2 sm:px-0">
      <div className="bg-modGreen shadow-lg rounded-lg p-2 sm:p-4">
        {/* Título de la canción actual - visible en móvil */}
        <div className="mb-2 md:hidden">
          <h3 className="font-semibold text-xs truncate">
            {playlist[currentTrackIndex].title}
          </h3>
        </div>

=======
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
>>>>>>> f2327763 (spotify terminado y actualización de soundcloud)
        {/* Reproductor SoundCloud */}
        <iframe
          ref={iframeRef}
          width="100%"
<<<<<<< HEAD
          height={window.innerWidth < 640 ? 120 : 166} // Altura reducida para móvil
=======
          height={height}
>>>>>>> f2327763 (spotify terminado y actualización de soundcloud)
          scrolling="no"
          frameBorder="no"
          src={`https://w.soundcloud.com/player/?url=${playlist[currentTrackIndex].url}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
          className="rounded-lg"
        />
        
        {/* Controles personalizados */}
<<<<<<< HEAD
        <div className="flex flex-col sm:flex-row items-center justify-between mt-2 sm:mt-4 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={handlePrevious}
              disabled={currentTrackIndex === 0}
              className="p-1 sm:p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              <SkipBack className="w-4 h-4 sm:w-6 sm:h-6" />
=======
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handlePrevious}
              disabled={currentTrackIndex === 0}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              <SkipBack className="w-6 h-6" />
>>>>>>> f2327763 (spotify terminado y actualización de soundcloud)
            </button>
            
            <button 
              onClick={handlePlayPause}
<<<<<<< HEAD
              className="p-1 sm:p-2 rounded-full hover:bg-gray-100"
            >
              {isPlaying ? 
                <Pause className="w-4 h-4 sm:w-6 sm:h-6" /> : 
                <Play className="w-4 h-4 sm:w-6 sm:h-6" />
=======
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {isPlaying ? 
                <Pause className="w-6 h-6" /> : 
                <Play className="w-6 h-6" />
>>>>>>> f2327763 (spotify terminado y actualización de soundcloud)
              }
            </button>
            
            <button 
              onClick={handleNext}
              disabled={currentTrackIndex === playlist.length - 1}
<<<<<<< HEAD
              className="p-1 sm:p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              <SkipForward className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 sm:w-24"
              />
            </div>
            
            <button 
              onClick={() => setShowPlaylist(!showPlaylist)}
              className="sm:hidden p-1 rounded-full hover:bg-gray-100"
            >
              <List className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
=======
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              <SkipForward className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <Volume2 className="w-5 h-5" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
>>>>>>> f2327763 (spotify terminado y actualización de soundcloud)
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Lista de reproducción - responsive */}
      <div className={`bg-modGreen shadow-lg rounded-lg p-2 sm:p-4 ${!showPlaylist && 'hidden sm:block'}`}>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-sm sm:text-base">Lista de reproducción</h3>
          <button 
            onClick={() => setShowPlaylist(false)}
            className="sm:hidden p-1 hover:bg-modGreen2 rounded text-sm"
          >
            ×
          </button>
        </div>
        <div className="space-y-1 sm:space-y-2 max-h-48 sm:max-h-60 overflow-y-auto">
=======
      {/* Lista de reproducción */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-bold mb-2">Lista de reproducción</h3>
        <div className="space-y-2">
>>>>>>> f2327763 (spotify terminado y actualización de soundcloud)
          {playlist.map((track, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTrackIndex(index);
                widget?.load(track.url, { auto_play: true });
<<<<<<< HEAD
                setShowPlaylist(false);
              }}
              className={`w-full text-left p-1.5 sm:p-2 rounded hover:bg-modGreen2 text-xs sm:text-sm ${
                currentTrackIndex === index ? 'bg-modGreen2' : ''
=======
              }}
              className={`w-full text-left p-2 rounded hover:bg-gray-100 ${
                currentTrackIndex === index ? 'bg-gray-100' : ''
>>>>>>> f2327763 (spotify terminado y actualización de soundcloud)
              }`}
            >
              {index + 1}. {track.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;