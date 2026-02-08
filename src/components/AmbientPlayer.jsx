import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, SkipForward } from 'lucide-react';

const AmbientPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.5); // Default volume 50%
    const [trackIndex, setTrackIndex] = useState(0);
    const [customTitle, setCustomTitle] = useState(null);
    const audioRef = useRef(null);

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
        if (newVolume > 0 && isMuted) {
            setIsMuted(false);
            audioRef.current.muted = false;
        }
    };

    const tracks = [
        { title: "Hyjal Winds", src: "/assets/audio/hyjal.mp3" },
        { title: "Sands of Uldum", src: "/assets/audio/uldum.mp3" },
        { title: "Dragonmaw Forge", src: "/assets/audio/grimbatol.mp3" }
    ];

    // Auto-play when component mounts (after EnterWorld click)
    useEffect(() => {
        const handleTrackChange = (e) => {
            const { title, src } = e.detail;
            if (src) {
                // If the track is already playing, don't restart it
                if (audioRef.current.src === src) return;

                audioRef.current.src = src;
                setTrackIndex(-1); // Custom track
                setCustomTitle(title);
                if (isPlaying) {
                    audioRef.current.play().catch(e => console.error("Audio play failed:", e));
                }
            }
        };

        window.addEventListener('tbc-ambient-change', handleTrackChange);
        return () => window.removeEventListener('tbc-ambient-change', handleTrackChange);
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    // Removed nextTrack usage as zone specific audio is primary

    return (
        <div className="fixed bottom-4 right-4 z-[90] bg-black/80 backdrop-blur border border-[#333] rounded-full px-4 py-2 flex items-center gap-4 shadow-2xl transition-all hover:border-[#c29c55]/50 group/player">
            <audio
                ref={audioRef}
                src={tracks[0].src}
                loop
            />

            <div className="flex flex-col">
                <span className="text-[10px] text-[#c29c55] uppercase tracking-widest font-bold">Ambient Audio</span>
                <span className="text-[10px] text-gray-400 font-mono truncate max-w-[100px]">
                    {trackIndex === -1 ? customTitle : tracks[Math.max(0, trackIndex)].title}
                </span>
            </div>

            <button onClick={togglePlay} className="text-white hover:text-[#c29c55] transition-colors">
                {isPlaying ? (
                    <div className="flex gap-1 items-end h-3">
                        <div className="w-1 bg-[#c29c55] animate-[bounce_1s_infinite]"></div>
                        <div className="w-1 bg-[#c29c55] animate-[bounce_1.2s_infinite]"></div>
                        <div className="w-1 bg-[#c29c55] animate-[bounce_0.8s_infinite]"></div>
                    </div>
                ) : (
                    <div className="w-3 h-3 bg-gray-600 rounded-sm"></div>
                )}
            </button>

            {/* Volume Control Group */}
            <div className="flex items-center group/vol">
                <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors relative z-10 px-1">
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>

                <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-300 ease-out flex items-center justify-center">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-16 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-[#c29c55] hover:accent-white transition-all mx-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default AmbientPlayer;
