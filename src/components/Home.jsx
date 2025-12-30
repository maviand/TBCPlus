import React from 'react';
import {
    Sword, Users, Shield, Zap, Map, Crown, Hammer,
    ArrowRight, Sparkles, Scroll, Skull
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const Home = ({ setPage }) => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-amber-900 selection:text-amber-100">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
      `}</style>

            {/* --- HERO SECTION --- */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-[#c29c55]/30 pt-20">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d10]/40 via-[#0b0d10]/60 to-[#0a0a0a] z-10"></div>
                    {/* Using the Fel/Dark Portal style image */}
                    <div className="w-full h-full bg-[url('https://i.imgur.com/5xVSMcu.jpeg')] bg-cover bg-center opacity-60 scale-105 animate-slow-zoom"></div>
                </div>

                {/* Content Layer */}
                <div className="relative z-20 text-center max-w-5xl px-4 animate-fade-in-up">
                    <div className="mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-black/50 border border-[#c29c55] rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(194,156,85,0.3)]">
                            <Sparkles className="w-10 h-10 text-[#c29c55]" />
                        </div>
                    </div>

                    <h1 className="font-hero text-5xl md:text-7xl text-[#c29c55] drop-shadow-[0_4px_8px_rgba(0,0,0,1)] mb-4 tracking-wider leading-tight uppercase">
                        THE BURNING CRUSADE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c29c55] via-[#e6c270] to-[#c29c55]">PLUS</span>
                    </h1>

                    <div className="h-1 w-48 bg-gradient-to-r from-transparent via-[#c29c55] to-transparent mx-auto mb-10"></div>

                    <p className="font-body text-[#aeb6bf] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-md">
                        The experience you remember, perfected. <span className="text-[#c29c55]">Reforged classes</span>, <span className="text-[#c29c55]">new races</span>, and a world brought to life.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={() => setPage('classes')}
                            className="px-8 py-4 bg-[#c29c55] hover:bg-[#d4b470] text-black font-hero font-bold text-lg tracking-widest rounded shadow-[0_0_20px_rgba(194,156,85,0.4)] transition-all hover:scale-105 flex items-center gap-3"
                        >
                            <Sword className="w-5 h-5" /> Explore Classes
                        </button>
                        <button
                            onClick={() => setPage('content')}
                            className="px-8 py-4 bg-transparent border border-[#c29c55] text-[#c29c55] hover:bg-[#c29c55]/10 font-hero font-bold text-lg tracking-widest rounded transition-all flex items-center gap-3"
                        >
                            View Content <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>


            {/* --- FEATURES STRIP: BY THE NUMBERS --- */}
            <div className="bg-[#0b0d10] border-y border-[#2f2f35] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://i.imgur.com/i9PDsfK.jpeg')] opacity-10 bg-cover bg-fixed"></div>
                <div className="container mx-auto px-4 py-12 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {/* Stat 1 */}
                        <div className="p-4 group hover:bg-white/5 rounded transition-all">
                            <h4 className="font-hero text-4xl md:text-5xl text-[#c29c55] mb-2 group-hover:scale-110 transition-transform">6</h4>
                            <p className="font-hero text-xs text-[#aeb6bf] uppercase tracking-widest">New Playable Races</p>
                            <p className="font-body text-[10px] text-[#5c5c63] mt-1">High Elves, Goblins, Ogres, Broken, Wildhammer & Saberon</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="p-4 group hover:bg-white/5 rounded transition-all">
                            <h4 className="font-hero text-4xl md:text-5xl text-[#c29c55] mb-2 group-hover:scale-110 transition-transform">2500+</h4>
                            <p className="font-hero text-xs text-[#aeb6bf] uppercase tracking-widest">New Quests</p>
                            <p className="font-body text-[10px] text-[#5c5c63] mt-1">Class Campaigns, Zone Storylines & Prestige Chains</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="p-4 group hover:bg-white/5 rounded transition-all">
                            <h4 className="font-hero text-4xl md:text-5xl text-[#c29c55] mb-2 group-hover:scale-110 transition-transform">7+</h4>
                            <p className="font-hero text-xs text-[#aeb6bf] uppercase tracking-widest">Custom Dungeons</p>
                            <p className="font-body text-[10px] text-[#5c5c63] mt-1">Karazhan Crypts, Stormwind Vault, Caverns of Time: War</p>
                        </div>
                        <div className="p-4 group hover:bg-white/5 rounded transition-all">
                            <h4 className="font-hero text-4xl md:text-5xl text-[#c29c55] mb-2 group-hover:scale-110 transition-transform">1</h4>
                            <p className="font-hero text-xs text-[#aeb6bf] uppercase tracking-widest">New Raid Tier</p>
                            <p className="font-body text-[10px] text-[#5c5c63] mt-1">Citadel of the Void + Several Side Tiers</p>
                        </div>
                        <div className="p-4 group hover:bg-white/5 rounded transition-all">
                            <h4 className="font-hero text-4xl md:text-5xl text-[#c29c55] mb-2 group-hover:scale-110 transition-transform">2</h4>
                            <p className="font-hero text-xs text-[#aeb6bf] uppercase tracking-widest">New Battlegrounds</p>
                            <p className="font-body text-[10px] text-[#5c5c63] mt-1">Azshara Crater & Void Basin</p>
                        </div>
                        <div className="p-4 group hover:bg-white/5 rounded transition-all">
                            <h4 className="font-hero text-4xl md:text-5xl text-[#c29c55] mb-2 group-hover:scale-110 transition-transform">3</h4>
                            <p className="font-hero text-xs text-[#aeb6bf] uppercase tracking-widest">Mythic Dungeons</p>
                            <p className="font-body text-[10px] text-[#5c5c63] mt-1">Scalable Challenges</p>
                        </div>
                        <div className="p-4 group hover:bg-white/5 rounded transition-all">
                            <h4 className="font-hero text-4xl md:text-5xl text-[#c29c55] mb-2 group-hover:scale-110 transition-transform">100%</h4>
                            <p className="font-hero text-xs text-[#aeb6bf] uppercase tracking-widest">HD Remaster</p>
                            <p className="font-body text-[10px] text-[#5c5c63] mt-1">Seamless World & No Load Screens</p>
                        </div>
                        <div className="p-4 group hover:bg-white/5 rounded transition-all">
                            <h4 className="font-hero text-4xl md:text-5xl text-[#c29c55] mb-2 group-hover:scale-110 transition-transform">∞</h4>
                            <p className="font-hero text-xs text-[#aeb6bf] uppercase tracking-widest">Timelocked Raids</p>
                            <p className="font-body text-[10px] text-[#5c5c63] mt-1">Molten Core, BWL & Naxxramas</p>
                        </div>
                        <div className="p-4 group hover:bg-white/5 rounded transition-all">
                            <h4 className="font-hero text-4xl md:text-5xl text-[#c29c55] mb-2 group-hover:scale-110 transition-transform">Account</h4>
                            <p className="font-hero text-xs text-[#aeb6bf] uppercase tracking-widest">Wide Progression</p>
                            <p className="font-body text-[10px] text-[#5c5c63] mt-1">Reputation & Currencies</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FEATURES GRID --- */}
            <div className="container mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="font-hero text-4xl text-[#c29c55] uppercase tracking-widest mb-4">A World Reforged</h2>
                    <p className="font-body text-[#aeb6bf] max-w-2xl mx-auto">We have kept the soul of the original game while modernizing the mechanics that held it back.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Card 1: Classes */}
                    <div
                        onClick={() => setPage('classes')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="absolute inset-0 z-0">
                            <img src="https://i.imgur.com/X2D1sO5.jpeg" alt="" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#15171e] via-[#15171e]/80 to-transparent"></div>
                        </div>
                        <div className="relative z-10">
                            <img src="https://i.imgur.com/yRtAtam.jpeg" className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg object-cover" />
                            <h3 className="font-hero text-2xl text-[#c29c55] uppercase tracking-wide mb-3 group-hover:text-[#white] transition-colors">Class Identity</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                Every spec reworked with a "Masterwork" system. Paladins get Holy Power, Shamans get swiftness.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Races */}
                    <div
                        onClick={() => setPage('races')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="absolute inset-0 z-0">
                            <img src="https://i.imgur.com/ZH7k1Zi.jpeg" alt="" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#15171e] via-[#15171e]/80 to-transparent"></div>
                        </div>
                        <div className="relative z-10">
                            <img src="https://i.imgur.com/9G9klET.jpeg" className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg object-cover" />
                            <h3 className="font-hero text-2xl text-[#c29c55] uppercase tracking-wide mb-3 group-hover:text-[#white] transition-colors">New Allies</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                Play as <span className="text-orange-400">Goblins</span>, <span className="text-green-400">Ogres</span>, <span className="text-blue-400">High Elves</span>, Broken, Wildhammer & Saberon.
                            </p>
                        </div>
                    </div>

                    {/* Card: Housing (Redesigned) */}
                    <div
                        onClick={() => setPage('housing')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#15171e] via-[#15171e]/90 to-transparent"></div>
                            {/* Placeholder for Housing Image */}
                            <div className="w-full h-full bg-[#3c2a21] opacity-20"></div>
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg bg-black/50 flex items-center justify-center">
                                <Crown className="w-6 h-6 text-[#c29c55]" />
                            </div>
                            <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">Hearth & Home</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                Claim your own instanced housing in capital cities. Display trophies, use crafting stations, and gain Rested+ bonuses.
                            </p>
                        </div>
                    </div>

                    {/* Card: Iron Soul (Hardcore) */}
                    <div
                        onClick={() => setPage('hardcore')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#15171e] via-[#15171e]/90 to-transparent"></div>
                            <div className="w-full h-full bg-[#2a0a0a] opacity-20"></div>
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg bg-black/50 flex items-center justify-center">
                                <Skull className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">The Iron Soul</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                Official Hardcore support. Brave the "Mortal Flaws" system for increased rewards, or prove your worth in Ironman mode.
                            </p>
                        </div>
                    </div>

                    {/* Card: Economy */}
                    <div
                        onClick={() => setPage('economy')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg bg-black/50 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">Ethereal Bazaar</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                A revolutionized economy with Buy Orders, Mercenary Contracts, and high-risk Trade Caravans.
                            </p>
                        </div>
                    </div>

                    {/* Card: Seasons */}
                    <div
                        onClick={() => setPage('seasons')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg bg-black/50 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">Seasonal Themes</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                Rotating 6-month seasons that alter the world. Survive the Scourge Invasion or profit during the Season of Greed.
                            </p>
                        </div>
                    </div>

                    {/* Card: Bard */}
                    <div
                        onClick={() => setPage('bard')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg bg-black/50 flex items-center justify-center">
                                <Scroll className="w-6 h-6 text-pink-400" />
                            </div>
                            <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">Bardic Arts</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                A new secondary profession. Perform songs, play rhythm minigames, and provide powerful morale buffs to your party.
                            </p>
                        </div>
                    </div>

                    {/* Card: Betrayal (Faction Swap) */}
                    <div
                        onClick={() => setPage('betrayal')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg bg-black/50 flex items-center justify-center">
                                <Sword className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">Path of Betrayal</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                Defect from your faction. Join the neutral Illidari or become a Renegade hostile to all.
                            </p>
                        </div>
                    </div>

                    {/* Card: Transmog */}
                    <div
                        onClick={() => setPage('transmog')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg bg-black/50 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">The Weaver's Loom</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                Advanced transmog with dyes, accessory slots (quivers, librams), and 3D armor plating attachments.
                            </p>
                        </div>
                    </div>

                    {/* Card: Followers */}
                    <div
                        onClick={() => setPage('followers')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg bg-black/50 flex items-center justify-center">
                                <Users className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">Companions</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                Recruit iconic NPCs like Rexxar and Akama to join your party for 5-man content.
                            </p>
                        </div>
                    </div>

                    {/* Card: Darkmoon */}
                    <div
                        onClick={() => setPage('darkmoon')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg bg-black/50 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">Darkmoon Carnival</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                A permanent max-level zone featuring a rogue-like dungeon, deathmatch arena, and high-stakes gambling.
                            </p>
                        </div>
                    </div>

                    {/* Card: Lore UI */}
                    <div
                        onClick={() => setPage('lore')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg bg-black/50 flex items-center justify-center">
                                <Scroll className="w-6 h-6 text-amber-200" />
                            </div>
                            <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">Library of Alexandros</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                A new Lore UI. Track your story in The Living Scroll, watch unlocked cinematics, and complete your Bestiary.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Content (Endgame) */}
                    <div
                        onClick={() => setPage('content')}
                        className="group relative bg-[#15171e] border border-[#2f2f35] p-8 rounded hover:border-[#c29c55] transition-all cursor-pointer overflow-hidden min-h-[300px]"
                    >
                        <div className="absolute inset-0 z-0">
                            <img src="https://i.imgur.com/iM4mG67.jpeg" alt="" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#15171e] via-[#15171e]/80 to-transparent"></div>
                        </div>
                        <div className="relative z-10">
                            <img src="https://i.imgur.com/q9Dvzj3.jpeg" className="w-12 h-12 mb-6 rounded border border-[#c29c55]/30 shadow-lg object-cover" />
                            <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">Endgame Plus</h3>
                            <p className="font-body text-[#aeb6bf] leading-relaxed">
                                Face the <span className="text-[#a335ee] font-bold">Citadel of the Void</span> (Tier 6.5) and explore <span className="text-purple-400">Karazhan Crypts</span>.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
