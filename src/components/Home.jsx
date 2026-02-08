import React, { useState, useEffect } from 'react';
import {
    Sword, Users, Shield, Zap, Map, Crown, Hammer,
    ArrowRight, Sparkles, Scroll, Skull, BookOpen,
    Music, Coins, AlertCircle, Compass, Home as HomeIcon
} from 'lucide-react';

import FactionModal from './FactionModal';

const Home = ({ setPage }) => {
    const [heroIndex, setHeroIndex] = useState(0);
    const [scrolled, setScrolled] = useState(0);
    const [activeFaction, setActiveFaction] = useState(null); // 'alliance' | 'horde' | null

    // 1. Dynamic Hero Carousel Data
    const heroes = [
        {
            title: "THE THRONE OF ELEMENTS",
            subtitle: "Tier 4.5 Catch-Up Raid Available Now",
            image: "https://i.imgur.com/cOsLrHP.jpeg", // Correct Tier 4.5 Art
            action: "View Raid",
            page: "atlas"
        },
        {
            title: "REFORGED RACES",
            subtitle: "Play as High Elf, Goblin, Ogre & More",
            image: "https://i.imgur.com/ZH7k1Zi.jpeg",
            action: "View Races",
            page: "races"
        },
        {
            title: "THE IRON SOUL",
            subtitle: "Hardcore Mode with 'Mortal Flaws'",
            image: "https://i.imgur.com/PkmAEK7.jpeg", // Updated Art
            action: "Dare to Play",
            page: "hardcore"
        }
    ];

    // Carousel Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroes.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // 4. "By the Numbers" Animation (Simple Counter Mockup)
    // In a real app, use a hook like useCountUp. Here we just static render high numbers.
    const stats = [
        { label: "New Races", value: "6", icon: Users },
        { label: "New Quests", value: "2500+", icon: Scroll },
        { label: "Custom Dungeons", value: "7+", icon: Skull },
        { label: "Raid Tiers", value: "5", icon: Crown },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-stone-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden relative">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        @keyframes subtle-drift {
            0% { transform: scale(1.05); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1.05); }
        }
        .animate-drift { animation: subtle-drift 20s infinite ease-in-out; }
      `}</style>



            <div className="relative z-10">
                {/* 13. "What's New" Ticker */}
                <div className="bg-[#c29c55] text-black text-xs font-bold py-1 px-4 text-center tracking-widest uppercase">
                    <span className="animate-pulse mr-2">●</span> Latest Update: Nagrand Raids (Tier 4.5 & 6.5) Live Now!
                </div>

                {/* 1. Dynamic Hero Carousel */}
                <div className="relative h-[85vh] overflow-hidden border-b border-[#c29c55]/30">
                    {heroes.map((hero, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            {/* 3. Video/Animated Backgrounds (Simulated with CSS Keyframes for now) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center animate-drift"
                                style={{ backgroundImage: `url('${hero.image}')` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>

                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="text-center max-w-4xl px-6 animate-fade-in-up">
                                    <h2 className="font-hero text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-[#f0e6d2] to-[#c29c55] drop-shadow-[0_4px_8px_rgba(0,0,0,1)] mb-4 tracking-wider leading-tight uppercase">
                                        {hero.title}
                                    </h2>
                                    <p className="font-body text-xl md:text-2xl text-[#aeb6bf] mb-8 drop-shadow-md border-l-4 border-[#c29c55] pl-4 inline-block">
                                        {hero.subtitle}
                                    </p>
                                    <div className="mt-8">
                                        <button
                                            onClick={() => setPage(hero.page)}
                                            className="px-10 py-4 bg-[#c29c55] hover:bg-[#d4b470] text-black font-hero font-bold text-xl tracking-widest rounded shadow-[0_0_20px_rgba(194,156,85,0.4)] transition-all hover:scale-105 flex items-center gap-3 mx-auto"
                                        >
                                            <Sword className="w-6 h-6" /> {hero.action}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Carousel Indicators */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
                        {heroes.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setHeroIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all ${idx === heroIndex ? 'bg-[#c29c55] w-8' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* 4. "By the Numbers" Stats Strip */}
                <div className="bg-[#0b0d10] border-y border-[#2f2f35] py-8 relative">
                    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center justify-center gap-4 group cursor-default">
                                <stat.icon className="w-8 h-8 text-[#c29c55] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                <div className="text-left">
                                    <div className="font-hero text-3xl md:text-4xl text-white font-bold">{stat.value}</div>
                                    <div className="font-body text-[10px] text-[#888] uppercase tracking-widest">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 14. Parallax Zone Strip (Nagrand) */}
                <div className="h-48 bg-[url('https://imagine-public.x.ai/imagine-public/images/ccdd4d70-2416-4acf-b25d-cb91d52635a1.jpg')] bg-fixed bg-cover bg-center opacity-40 border-b border-[#c29c55]/20 flex items-center justify-center">
                    <h3 className="font-hero text-4xl text-white/80 tracking-[1em] uppercase drop-shadow-[0_2px_4px_rgba(255,255,255,0.6)]">A World Reborn</h3>
                </div>

                {/* 5. Interactive Faction Split */}
                <div className="grid grid-cols-2 h-40 md:h-64 relative overflow-hidden border-b border-[#c29c55]/20">
                    <button
                        onClick={() => setActiveFaction('horde')}
                        className="relative flex items-center justify-center w-full transition-all duration-500 border-r cursor-pointer bg-[#1a0f0f] border-[#c29c55]/20 group z-30 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://i.imgur.com/kSHZtqT.jpeg')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#3a1212]/50 to-transparent"></div>

                        <div className="z-40 text-center">
                            <h3 className="font-hero text-3xl md:text-5xl text-[#8d2626] group-hover:text-[#bd3333] mb-2 uppercase tracking-widest transition-colors drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]">Horde</h3>
                            <p className="font-body text-xs text-[#8d2626]/60 group-hover:text-[#bd3333] uppercase tracking-wide opacity-50 group-hover:opacity-100 transition-opacity drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]">Strength & Honor</p>
                            <p className="text-[10px] text-red-500/50 uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">Click for Motivations</p>
                        </div>
                    </button>
                    <button
                        onClick={() => setActiveFaction('alliance')}
                        className="relative flex items-center justify-center w-full transition-all duration-500 cursor-pointer bg-[#0f121a] group z-30 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://i.imgur.com/uzonQnu.jpeg')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#121a3a]/50 to-transparent"></div>

                        <div className="z-40 text-center">
                            <h3 className="font-hero text-3xl md:text-5xl text-[#264b8d] group-hover:text-[#4169e1] mb-2 uppercase tracking-widest transition-colors drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]">Alliance</h3>
                            <p className="font-body text-xs text-[#264b8d]/60 group-hover:text-[#4169e1] uppercase tracking-wide opacity-50 group-hover:opacity-100 transition-opacity drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]">Stand as One</p>
                            <p className="text-[10px] text-blue-500/50 uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">Click for Motivations</p>
                        </div>
                    </button>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
                        <div className="bg-[#0a0a0a] border border-[#c29c55] rounded-full p-3 shadow-[0_0_20px_rgba(0,0,0,1)]">
                            <Shield className="w-8 h-8 text-[#c29c55]" />
                        </div>
                    </div>
                </div>

                {/* 2. Bento Box Grid Layout */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 md:h-auto">

                        {/* [Large 2x2] Classes */}
                        <div
                            onClick={() => setPage('classes')}
                            className="col-span-1 md:col-span-2 md:row-span-2 relative group overflow-hidden rounded border border-[#2f2f35] bg-[#15171e] hover:border-[#c29c55] transition-all cursor-pointer min-h-[300px]"
                        >
                            <img src="https://i.imgur.com/X2D1sO5.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                            {/* New Icon */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <img src="https://i.imgur.com/I9kB9z6.png" className="w-32 h-32 object-contain opacity-80 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(194,156,85,0.4)]" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="font-hero text-3xl text-[#c29c55] mb-2 uppercase">Class Identity</h3>
                                <p className="font-body text-gray-400 text-sm max-w-sm">Every specialization reforged. New talents, new mechanics, new fantasies.</p>
                            </div>
                        </div>

                        {/* [Medium 2x1] 6. Throne of Elements (Featured Content) */}
                        <div
                            onClick={() => setPage('atlas')}
                            className="col-span-1 md:col-span-2 relative group overflow-hidden rounded border border-[#c29c55]/50 bg-[#15171e] hover:border-[#c29c55] transition-all cursor-pointer min-h-[200px]"
                        >
                            <div className="absolute top-0 right-0 bg-[#c29c55] text-black text-xs font-bold px-3 py-1 z-20">NEW RAID</div>
                            <img src="https://i.imgur.com/cOsLrHP.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 right-0 p-6 text-right">
                                <h3 className="font-hero text-2xl text-white mb-1 uppercase">Throne of Elements</h3>
                                <p className="font-body text-[#c29c55] text-sm">Tier 4.5 Catch-Up Raid</p>
                            </div>
                        </div>

                        {/* [Medium 1x1] 8. Talent Calculator */}
                        <div
                            onClick={() => setPage('calculator')}
                            className="col-span-1 relative group overflow-hidden rounded border border-[#2f2f35] bg-[#15171e] hover:border-[#c29c55] transition-all cursor-pointer min-h-[200px]"
                        >
                            <img src="https://i.imgur.com/nxfdmXg.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                <img src="https://i.imgur.com/Pq3wKNM.png" className="w-16 h-16 object-contain mb-4 drop-shadow-[0_0_10px_rgba(194,156,85,0.5)]" />
                                <h3 className="font-hero text-xl text-white uppercase">Talents</h3>
                                <p className="font-body text-xs text-gray-500 mt-2">Build Your Hero</p>
                            </div>
                        </div>

                        {/* [Medium 1x1] 9. The Pathfinder */}
                        <div
                            onClick={() => setPage('pathfinder')}
                            className="col-span-1 relative group overflow-hidden rounded border border-[#2f2f35] bg-[#15171e] hover:border-[#c29c55] transition-all cursor-pointer min-h-[200px]"
                        >
                            <img src="https://i.imgur.com/O3HYYi4.png" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                <img src="https://i.imgur.com/KtvcQf2.png" className="w-16 h-16 object-contain mb-4 drop-shadow-[0_0_10px_rgba(72,187,120,0.5)]" />
                                <h3 className="font-hero text-xl text-white uppercase">Pathfinder</h3>
                                <p className="font-body text-xs text-gray-500 mt-2">Track Attunements</p>
                            </div>
                        </div>

                        {/* [Large 2x2] Races */}
                        <div
                            onClick={() => setPage('races')}
                            className="col-span-1 md:col-span-2 md:row-span-2 relative group overflow-hidden rounded border border-[#2f2f35] bg-[#15171e] hover:border-[#c29c55] transition-all cursor-pointer min-h-[300px]"
                        >
                            <img src="https://i.imgur.com/ZH7k1Zi.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                            {/* New Icon */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <img src="https://i.imgur.com/ZwPQZNk.png" className="w-32 h-32 object-contain opacity-80 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(194,156,85,0.4)]" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="font-hero text-3xl text-[#c29c55] mb-2 uppercase">New Allies</h3>
                                <p className="font-body text-gray-400 text-sm max-w-sm">From the goblin slums to high elven spires.</p>
                            </div>
                        </div>

                        {/* [Medium 1x1] 7. Guild Sanctum */}
                        <div
                            onClick={() => setPage('sanctum')}
                            className="col-span-1 relative group overflow-hidden rounded border border-[#2f2f35] bg-[#15171e] hover:border-[#c29c55] transition-all cursor-pointer min-h-[200px]"
                        >
                            <div className="absolute inset-0 bg-[url('https://i.imgur.com/BOeKWin.jpeg')] bg-cover opacity-20"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                <img src="https://i.imgur.com/hUTewNC.png" className="w-16 h-16 object-contain mb-4 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                                <h3 className="font-hero text-xl text-white uppercase">Guilds</h3>
                                <p className="font-body text-xs text-gray-500 mt-2">Housing & Perks</p>
                            </div>
                        </div>

                        {/* [Medium 1x1] 10. Chronicles */}
                        <div
                            onClick={() => setPage('chronicles')}
                            className="col-span-1 relative group overflow-hidden rounded border border-[#2f2f35] bg-[#15171e] hover:border-[#c29c55] transition-all cursor-pointer min-h-[200px]"
                        >
                            <div className="absolute inset-0 bg-[url('https://i.imgur.com/5xVSMcu.jpeg')] bg-cover opacity-20"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                <img src="https://i.imgur.com/0gcuUY9.png" className="w-16 h-16 object-contain mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                <h3 className="font-hero text-xl text-white uppercase">Lore</h3>
                                <p className="font-body text-xs text-gray-500 mt-2">The Dark Portal Opens</p>
                            </div>
                        </div>

                        {/* Small Utility Cards Row */}
                        {/* Small Utility Cards Row */}
                        <div onClick={() => setPage('economy')} className="col-span-1 md:col-span-1 p-6 border border-[#2f2f35] bg-[#111] hover:border-[#c29c55] cursor-pointer rounded flex flex-col items-center text-center group relative overflow-hidden transition-all">
                            <div className="absolute inset-0 bg-[url('https://i.imgur.com/g04bqdz.jpeg')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10">
                                <img src="https://i.imgur.com/G9jcDE3.png" className="w-12 h-12 object-contain mb-2 group-hover:scale-110 transition-transform mx-auto drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                <span className="font-hero text-sm text-gray-300">Economy</span>
                            </div>
                        </div>
                        <div onClick={() => setPage('hardcore')} className="col-span-1 md:col-span-1 p-6 border border-[#2f2f35] bg-[#111] hover:border-[#c29c55] cursor-pointer rounded flex flex-col items-center text-center group relative overflow-hidden transition-all">
                            <div className="absolute inset-0 bg-[url('https://i.imgur.com/PkmAEK7.jpeg')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10">
                                <Skull className="w-8 h-8 text-red-600 mb-2 group-hover:scale-110 transition-transform mx-auto" />
                                <span className="font-hero text-sm text-gray-300">Iron Soul</span>
                            </div>
                        </div>
                        <div onClick={() => setPage('bard')} className="col-span-1 md:col-span-1 p-6 border border-[#2f2f35] bg-[#111] hover:border-[#c29c55] cursor-pointer rounded flex flex-col items-center text-center group relative overflow-hidden transition-all">
                            <div className="absolute inset-0 bg-[url('https://i.imgur.com/BRmJJeB.png')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10">
                                <Music className="w-8 h-8 text-blue-400 mb-2 group-hover:scale-110 transition-transform mx-auto" />
                                <span className="font-hero text-sm text-gray-300">Bard</span>
                            </div>
                        </div>
                        <div onClick={() => setPage('betrayal')} className="col-span-1 md:col-span-1 p-6 border border-[#2f2f35] bg-[#111] hover:border-[#c29c55] cursor-pointer rounded flex flex-col items-center text-center group relative overflow-hidden transition-all">
                            <div className="absolute inset-0 bg-[url('https://i.imgur.com/qTiLIiM.jpeg')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10">
                                <AlertCircle className="w-8 h-8 text-orange-500 mb-2 group-hover:scale-110 transition-transform mx-auto" />
                                <span className="font-hero text-sm text-gray-300">Betrayal</span>
                            </div>
                        </div>

                        {/* 11. Endgame Card */}
                        <div
                            onClick={() => setPage('atlas')}
                            className="col-span-1 md:col-span-4 p-8 border border-[#2f2f35] bg-gradient-to-r from-[#1a1c24] to-[#0b0d10] hover:border-[#c29c55] cursor-pointer rounded flex items-center justify-between group mt-8"
                        >
                            <div className="flex items-center gap-6">
                                <Compass className="w-12 h-12 text-[#c29c55] group-hover:rotate-45 transition-transform duration-700" />
                                <div>
                                    <h3 className="font-hero text-2xl text-white uppercase mb-1">Dungeon & Raid Journal</h3>
                                    <p className="font-body text-gray-400">Featuring <span className="text-[#c29c55]">Citadel of the Void</span>, <span className="text-blue-400">Throne of Elements</span>, and <span className="text-purple-400">Karazhan Crypts</span>.</p>
                                </div>
                            </div>
                            <ArrowRight className="w-6 h-6 text-[#c29c55] group-hover:translate-x-2 transition-transform" />
                        </div>

                    </div>
                </div>

                {/* 15. Community CTA */}
                <div className="bg-[#0b0d10] border-t border-[#2f2f35] py-16 text-center">
                    <h2 className="font-hero text-3xl text-[#c29c55] mb-6">Join the Crusade</h2>
                    <p className="font-body text-gray-400 max-w-2xl mx-auto mb-8">Connect with thousands of other players, find a guild, and prepare for the opening of the Dark Portal.</p>
                    <button className="px-8 py-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold rounded shadow-lg transition-all hover:scale-105">
                        Join Discord
                    </button>
                </div>

                <div className="bg-black py-6 text-center text-gray-600 text-xs font-body">
                    TBC Plus Project 2024. Not affiliated with Blizzard Entertainment.
                </div>
            </div>

            <FactionModal
                isOpen={!!activeFaction}
                faction={activeFaction}
                onClose={() => setActiveFaction(null)}
            />
        </div>
    );
};

export default Home;
