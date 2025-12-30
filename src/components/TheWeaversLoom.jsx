import React, { useState } from 'react';
import { Palette, Scissors, Layers, Sparkles, Shirt, Crown, Eye, VenetianMask, Trophy, Star, Box } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheWeaversLoom = () => {

    const parseBold = (text) => text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i} className="text-fuchsia-400 font-bold">{part.slice(2, -2)}</strong> : part
    );

    return (
        <div className="min-h-screen bg-[#0a0810] text-stone-200 font-sans selection:bg-fuchsia-900 selection:text-white overflow-x-hidden">
            <UnifiedHeader
                icon={<Scissors className="w-8 h-8 text-fuchsia-500" />}
                background={`/TBCPlus/images/header_transmog.png`}
                section="Cosmetic Mastery"
                sub="Wear Your Legend"
                title="The Weaver's Loom"
                quote="Why save the world if you don't look good doing it?"
            />

            <div className="container mx-auto px-4 py-12">

                {/* Main Feature Highlight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 md:order-1 relative h-[500px] bg-[#15121c] rounded-xl overflow-hidden border border-fuchsia-900/20 group shadow-2xl">
                        {/* Placeholder for Character UI */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-600 space-y-4">
                            <Shirt size={80} className="text-fuchsia-900/20 animate-pulse-slow" />
                            <span className="font-cinzel text-sm tracking-widest">[3D MODEL VIEWER]</span>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 bg-stone-700 rounded-full"></div>
                                <div className="w-2 h-2 bg-stone-700 rounded-full"></div>
                                <div className="w-2 h-2 bg-stone-700 rounded-full"></div>
                            </div>
                        </div>
                        {/* UI Overlays: Color Wheel */}
                        <div className="absolute top-8 left-8 space-y-4">
                            <div className="bg-black/80 backdrop-blur rounded-lg p-3 border border-stone-700">
                                <Palette size={20} className="text-fuchsia-400 mb-2" />
                                <div className="space-y-2">
                                    <div className="w-6 h-6 rounded-full bg-red-600 border-2 border-white shadow hover:scale-110 transition-transform cursor-pointer"></div>
                                    <div className="w-6 h-6 rounded-full bg-black border-2 border-stone-600 shadow hover:scale-110 transition-transform cursor-pointer"></div>
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 border-2 border-stone-600 shadow hover:scale-110 transition-transform cursor-pointer"></div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur px-4 py-2 rounded border border-fuchsia-500/30 text-xs text-fuchsia-300 font-mono">
                            OUTFIT SLOT: 1 / 5
                        </div>
                    </div>

                    <div className="order-1 md:order-2 space-y-8">
                        <div>
                            <h2 className="text-4xl font-cinzel text-white mb-2">Total Control</h2>
                            <p className="text-stone-400 text-lg font-light leading-relaxed">
                                The Weaver's Loom is not just a transmog interface; it is a design studio.
                                We have broken the shackles of "Set Bonuses" dictating your fashion.
                                <br /><br />
                                Save up to 20 outfits per character. Link them to specific talent specs (automatically swtich to your "Fire" outfit when swapping to Fire Mage).
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-[#1a1624] rounded-lg text-fuchsia-400 mt-1 border border-transparent group-hover:border-fuchsia-500/30 transition-colors"><Palette size={20} /></div>
                                <div>
                                    <h4 className="text-white font-bold text-lg group-hover:text-fuchsia-400 transition-colors">Alchemy Dyes</h4>
                                    <p className="text-stone-500 text-sm leading-relaxed">
                                        {parseBold('Alchemists can now craft **Prismatic Oils**. Apply these to any piece of gear to change its primary, secondary, and trim colors individually.')}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-[#1a1624] rounded-lg text-fuchsia-400 mt-1 border border-transparent group-hover:border-fuchsia-500/30 transition-colors"><Layers size={20} /></div>
                                <div>
                                    <h4 className="text-white font-bold text-lg group-hover:text-fuchsia-400 transition-colors">Armor Plating</h4>
                                    <p className="text-stone-500 text-sm leading-relaxed">
                                        Attach generic 3D meshes to your gear. Add spikes to your shoulders, a scroll case to your belt, or a heavy cloak over your plate chest.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ACCESSORIES */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-fuchsia-500 font-cinzel text-sm uppercase tracking-widest">New Slots</span>
                        <h3 className="text-3xl font-cinzel text-white mt-2">Accessory Slots</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: "Quivers", icon: "🏹", desc: "Visible on back. Hunters only." },
                            { name: "Librams/Tomes", icon: "📖", desc: "Hanging from belt chain." },
                            { name: "Trophies", icon: "💀", desc: "Monster heads attached to saddle." },
                            { name: "Capes", icon: "🧥", desc: "Physics-enabled shoulder drapes." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#110e14] p-8 rounded-lg border border-stone-800 text-center hover:bg-[#1a1624] hover:border-fuchsia-900/50 transition-all cursor-default group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h4 className="text-white font-bold mb-2 font-cinzel">{item.name}</h4>
                                <p className="text-stone-500 text-xs uppercase tracking-wide">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* WEEKLY EVENT */}
                <div className="bg-gradient-to-r from-fuchsia-950/40 via-[#15121c] to-transparent border border-fuchsia-900/30 p-10 rounded-xl mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5"><VenetianMask size={200} /></div>
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="p-6 bg-fuchsia-900/20 rounded-full border border-fuchsia-500/30">
                            <VenetianMask className="w-12 h-12 text-fuchsia-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-cinzel text-white mb-2">The Trial of Style</h3>
                            <p className="text-stone-400 text-sm leading-relaxed mb-4">
                                {parseBold('Every Sunday, the **Darkmoon Faire** hosts a server-wide fashion competition.\n                                Themes include "Faction Pride", "Summer Fun", and "Eldritch Horror".')}
                            </p>
                            <div className="flex gap-4 text-xs font-bold text-fuchsia-300">
                                <span className="flex items-center gap-1"><Trophy size={14} /> Unique Titles</span>
                                <span className="flex items-center gap-1"><Star size={14} /> Free Dyes</span>
                                <span className="flex items-center gap-1"><Crown size={14} /> Statue in Dalaran</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TRANSMOG RUNS */}
                <div className="text-center max-w-2xl mx-auto">
                    <div className="flex justify-center mb-4"><Sparkles className="text-fuchsia-500 animate-pulse" /></div>
                    <h3 className="text-xl font-cinzel text-white mb-4">Legacy of the Style</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">
                        {parseBold('Running old raids (MC, BWL, AQ40) now yields **"Tokens of the Past"**.\n                        Exchange them for high-res, polygon-updated versions of classic Tier sets (T1, T2, T2.5) specifically designed for the Weaver\'s Loom.')}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default TheWeaversLoom;
