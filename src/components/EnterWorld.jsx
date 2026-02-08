import React, { useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

const EnterWorld = ({ onEnter }) => {
    const [isFading, setIsFading] = useState(false);

    const handleEnter = () => {
        setIsFading(true);
        // Slight delay to allow animation to play before unmounting
        setTimeout(() => {
            onEnter();
        }, 1000);
    };

    return (
        <div className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

            {/* Background Video/Image */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://i.imgur.com/ZH7k1Zi.jpeg')] bg-cover bg-center opacity-40 animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 animate-fade-in-up">
                {/* Logo */}
                <div className="relative">
                    <img
                        src="/TBCPlus/images/logo-tbc-plus.png"
                        alt="TBC Plus"
                        className="w-96 h-auto drop-shadow-[0_0_15px_rgba(50,255,50,0.4)] drop-shadow-[0_0_45px_rgba(50,255,50,0.2)] filter brightness-110"
                        style={{
                            maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
                        }}
                    />
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-[#c29c55] font-hero text-xs tracking-[0.5em] uppercase whitespace-nowrap opacity-80">
                        The Burning Crusade Reforged
                    </div>
                </div>

                {/* Enter Button */}
                <button
                    onClick={handleEnter}
                    className="group relative px-12 py-4 bg-transparent border border-[#c29c55]/30 hover:border-[#c29c55] transition-all duration-500 rounded flex items-center gap-4 overflow-hidden mt-12"
                >
                    <div className="absolute inset-0 bg-[#c29c55]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                    <span className="font-hero text-2xl text-[#c29c55] tracking-widest uppercase group-hover:text-[#ffd100] transition-colors relative z-10">
                        Enter World
                    </span>
                    <Play className="w-5 h-5 text-[#c29c55] group-hover:text-[#ffd100] transition-colors relative z-10" />
                </button>

                <p className="text-gray-500 text-xs font-mono mt-4 opacity-50">
                    Click to Initialize Audio Engine & Assets
                </p>
            </div>

            <style>{`
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1.0); }
            50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 20s infinite ease-in-out;
        }
        .animate-fade-in-up {
            animation: fadeInUp 1.5s ease-out forwards;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default EnterWorld;
