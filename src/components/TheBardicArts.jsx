import React, { useState } from 'react';
import { Music, Mic2, Speaker, Heart, Play, MoreHorizontal, Headphones, Coins, Star, Zap, Volume2 } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheBardicArts = () => {

    const parseBold = (text) => text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i} className="text-pink-400 font-bold">{part.slice(2, -2)}</strong> : part
    );

    return (
        <div className="min-h-screen bg-[#0f0a0a] text-stone-200 font-sans selection:bg-pink-900 selection:text-white overflow-x-hidden">
            <UnifiedHeader
                icon={<Music className="w-8 h-8 text-pink-500" />}
                background={`/TBCPlus/images/header_bards.png`}
                section="Secondary Profession"
                sub="Strum, Sing, Inspire"
                title="The Bardic Arts"
                quote="A sword can kill a beast. A song can kill a kingdom."
            />

            <div className="container mx-auto px-4 py-12">

                {/* Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-900/20 text-pink-400 border border-pink-900/50 rounded-full text-xs font-bold uppercase tracking-widest">
                            <Star size={12} /> New For TBC+
                        </div>
                        <h2 className="text-5xl font-cinzel text-white leading-tight">More Than Just <br /><span className="text-pink-500">Noise</span></h2>
                        <p className="text-lg text-stone-400 leading-relaxed font-light">
                            {parseBold(`Available to **all classes**, the Bardic Arts is a new secondary profession focused on social interaction and downtime utility.
                            It is not about combat damage; it's about morale, atmosphere, and the joy of creation.`)}
                            <br /><br />
                            Master the rhythm, draw a crowd, and earn gold from tips while AFK in Ironforge.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded font-bold transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)] flex items-center gap-2">
                                <Play size={18} /> Watch Demo
                            </button>
                            <button className="px-6 py-3 bg-transparent border border-stone-600 text-stone-300 hover:text-white hover:border-white rounded font-bold transition-all flex items-center gap-2">
                                <Headphones size={18} /> Listen to Tracks
                            </button>
                        </div>
                    </div>

                    {/* Visual: The Note Highway */}
                    <div className="relative h-80 bg-[#15121c] rounded-xl overflow-hidden border border-stone-800 shadow-2xl group">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 perspective-[1000px]">
                            <div className="w-full h-full bg-gradient-to-t from-pink-900/40 to-transparent transform rotate-x-60"></div>
                        </div>
                        {/* Fretboard visual */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-full border-x-2 border-pink-500/30">
                            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80] animate-bounce"></div>
                            <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444] animate-ping"></div>
                        </div>
                        <div className="absolute bottom-4 left-0 w-full text-center">
                            <span className="font-mono text-pink-500 text-xs tracking-[0.5em] animate-pulse">PERFECT STREAK x42</span>
                        </div>
                    </div>
                </div>

                {/* FEATURES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

                    {/* Feature 1: The Performance */}
                    <div className="bg-[#161212] p-8 rounded-xl border border-stone-800 hover:border-pink-500/50 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Zap size={100} /></div>
                        <div className="w-14 h-14 bg-pink-900/20 rounded-full flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-900/40 transition-colors">
                            <Play size={28} />
                        </div>
                        <h3 className="text-xl font-cinzel text-white mb-4">Rhythm Minigame</h3>
                        <p className="text-sm text-stone-400 leading-relaxed mb-6">
                            Playing an instrument triggers a unique UI overlay. Hit the notes in time with the song to maintain your "Melody Streak."
                            Miss a note, and your character plays a discordant wrong chord.
                        </p>
                        <div className="text-xs text-pink-400 font-mono bg-black/40 p-2 rounded border border-pink-900/30 text-center">
                            REQUIRES: LOW LATENCY
                        </div>
                    </div>

                    {/* Feature 2: Busking */}
                    <div className="bg-[#161212] p-8 rounded-xl border border-stone-800 hover:border-amber-500/50 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Coins size={100} /></div>
                        <div className="w-14 h-14 bg-amber-900/20 rounded-full flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-900/40 transition-colors">
                            <Coins size={28} />
                        </div>
                        <h3 className="text-xl font-cinzel text-white mb-4">Busking</h3>
                        <p className="text-sm text-stone-400 leading-relaxed mb-6">
                            {parseBold('Place your "Bard\'s Hat" on the ground. Other players can click it to tip you gold.\n                            While busking, you grant a **Rest State** buff to everyone nearby, making you a welcome sight in cities.')}
                        </p>
                        <div className="text-xs text-amber-500 font-mono bg-black/40 p-2 rounded border border-amber-900/30 text-center">
                            PASSIVE INCOME GENERATOR
                        </div>
                    </div>

                    {/* Feature 3: Composition */}
                    <div className="bg-[#161212] p-8 rounded-xl border border-stone-800 hover:border-indigo-500/50 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><MoreHorizontal size={100} /></div>
                        <div className="w-14 h-14 bg-indigo-900/20 rounded-full flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-900/40 transition-colors">
                            <MoreHorizontal size={28} />
                        </div>
                        <h3 className="text-xl font-cinzel text-white mb-4">The Composer</h3>
                        <p className="text-sm text-stone-400 leading-relaxed mb-6">
                            Write your own songs using a simple in-game MIDI editor. Save them to "Sheet Music" items.
                            Trade your masterpieces to other Bards or sell them on the Auction House.
                        </p>
                        <div className="text-xs text-indigo-400 font-mono bg-black/40 p-2 rounded border border-indigo-900/30 text-center">
                            FULL MIDI SUPPORT
                        </div>
                    </div>
                </div>

                {/* INSTRUMENTS */}
                <div className="max-w-6xl mx-auto bg-[#141414] rounded-xl p-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-600 to-transparent opacity-50"></div>
                    <div className="text-center mb-10">
                        <span className="text-pink-500 text-xs font-bold uppercase tracking-widest">Gear for the Gig</span>
                        <h3 className="text-3xl font-cinzel text-white mt-2">Instruments of War</h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "Arcanite Electric Guitar", type: "Two-Hand Axe (Visual)", stat: "+20% Shred", rarity: "text-purple-400" },
                            { name: "Dwarven War-Drums", type: "Off-Hand", stat: "+10% Bass", rarity: "text-blue-400" },
                            { name: "Sin'dorei Harp", type: "Main Hand", stat: "+15% Beauty", rarity: "text-amber-400" },
                            { name: "Gnomish Synth-Board", type: "Trinket", stat: "Techno Mode", rarity: "text-green-400" },
                            { name: "Troll Bongo Set", type: "Toy", stat: "Voodoo Rhythm", rarity: "text-stone-400" }
                        ].map((inst, i) => (
                            <div key={i} className="bg-[#0a0a0a] border border-stone-800 rounded-lg p-6 w-56 hover:-translate-y-2 transition-transform duration-300 group cursor-default">
                                <Music className={`w-8 h-8 ${inst.rarity} mb-4 mx-auto`} />
                                <h4 className={`font-bold text-sm ${inst.rarity} mb-1 text-center`}>{inst.name}</h4>
                                <div className="text-[10px] text-stone-500 uppercase tracking-wide text-center mb-3">{inst.type}</div>
                                <div className="text-xs text-stone-400 text-center bg-stone-900 py-1 rounded">{inst.stat}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TheBardicArts;
