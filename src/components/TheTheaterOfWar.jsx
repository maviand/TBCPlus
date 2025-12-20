import React, { useState } from 'react';
import { Sword, Shield, Target, Crown, Skull, Zap, Map, Flag, Users, Trophy } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheTheaterOfWar = () => {
    const [activeTab, setActiveTab] = useState('battlegrounds'); // battlegrounds | arena | fissure

    // Helper for bold text
    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i} className="mb-4 text-stone-400 leading-relaxed">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-red-500 font-cinzel">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-red-900 selection:text-red-100 overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
      `}</style>

            <UnifiedHeader
                icon="https://i.imgur.com/Gj3H1wK.jpeg"
                background="https://i.imgur.com/8Qj9w1K.jpeg"
                section="Player vs Player"
                sub="The Field of Strife"
                title="Theater of War"
                quote="Peace is a lie. There is only passion. Through passion, we gain strength."
            />

            {/* --- NAVIGATION --- */}
            <div className="container mx-auto px-4 mt-8 mb-12 border-b border-red-900/30 flex justify-center gap-8">
                <button onClick={() => setActiveTab('battlegrounds')} className={`pb-4 px-4 font-cinzel uppercase tracking-widest text-sm transition-all ${activeTab === 'battlegrounds' ? 'text-red-500 border-b-2 border-red-500' : 'text-stone-500 hover:text-stone-300'}`}>
                    Azshara Crater
                </button>
                <button onClick={() => setActiveTab('fissure')} className={`pb-4 px-4 font-cinzel uppercase tracking-widest text-sm transition-all ${activeTab === 'fissure' ? 'text-purple-500 border-b-2 border-purple-500' : 'text-stone-500 hover:text-stone-300'}`}>
                    Fissure of Souls (MOBA)
                </button>
                <button onClick={() => setActiveTab('arena')} className={`pb-4 px-4 font-cinzel uppercase tracking-widest text-sm transition-all ${activeTab === 'arena' ? 'text-amber-500 border-b-2 border-amber-500' : 'text-stone-500 hover:text-stone-300'}`}>
                    Gladiator Sanctum
                </button>
            </div>

            <div className="container mx-auto px-4 pb-24 animate-fade-in">

                {/* --- AZSHARA CRATER --- */}
                {activeTab === 'battlegrounds' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-cinzel text-4xl text-white mb-6">The Lost Battlefield: <span className="text-red-500">Azshara Crater</span></h2>
                            <div className="text-lg text-stone-300 space-y-4 font-light">
                                <p>For years, it existed only in the game files. Now, the gates are open. Azshara Crater is a massive **40v40 Battleground** focused on trench warfare and resource attrition.</p>
                                <ul className="space-y-4 mt-6">
                                    <li className="flex gap-4 items-start">
                                        <Map className="text-red-500 shrink-0" />
                                        <div>
                                            <strong className="block text-white font-cinzel mb-1">Three Ridges, One Valley</strong>
                                            <span className="text-stone-400 text-sm">The map is divided into three lanes. Controlling the high ground (Ridges) allows artillery strikes on the center valley.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <Flag className="text-red-500 shrink-0" />
                                        <div>
                                            <strong className="block text-white font-cinzel mb-1">Dynamic Spawns</strong>
                                            <span className="text-stone-400 text-sm">Graveyards are not static. Engineers can build forward bunkers that act as spawn points. Destroying a bunker pushes the enemy back.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <Trophy className="text-red-500 shrink-0" />
                                        <div>
                                            <strong className="block text-white font-cinzel mb-1">The Shredder Protocol</strong>
                                            <span className="text-stone-400 text-sm">Collecting resources in the valley allows your faction to summon a "Fel-Reaver Prototype" that marches towards the enemy base.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-[#111] border border-red-900/30 rounded-xl p-2 relative">
                            {/* Placeholder for Map Image */}
                            <div className="aspect-video bg-[#1a0f0f] flex items-center justify-center relative overflow-hidden rounded-lg">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://i.imgur.com/vL9Y1wK.jpeg')] bg-cover bg-center"></div>
                                <h3 className="relative z-10 font-cinzel text-2xl text-red-500 tracking-[0.5em] text-center">TACTICAL MAP<br />OFFLINE</h3>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- FISSURE OF SOULS (MOBA) --- */}
                {activeTab === 'fissure' && (
                    <div className="space-y-12">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="font-cinzel text-5xl text-purple-400 mb-4 tracking-tight">The Fissure of Souls</h2>
                            <p className="text-purple-200/60 font-cinzel tracking-widest uppercase text-sm">10v10 Siege Battleground</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1: Lanes */}
                            <div className="bg-[#120a1a] border border-purple-500/30 p-8 rounded-lg relative overflow-hidden group hover:border-purple-500 transition-colors">
                                <div className="absolute -right-10 -top-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Map size={150} />
                                </div>
                                <Shield className="text-purple-500 w-12 h-12 mb-6" />
                                <h3 className="font-cinzel text-2xl text-white mb-4">Three Lanes</h3>
                                <p className="text-stone-400 leading-relaxed text-sm">
                                    The map is split into **Top (Void Ridge)**, **Mid (The Bridge)**, and **Bot (Mana Tombs)**. Unlike regular BGs, these paths are guarded by **Arcane Towers** that deal massive damage. You cannot push without "Creep" support.
                                </p>
                            </div>

                            {/* Card 2: Minions */}
                            <div className="bg-[#120a1a] border border-purple-500/30 p-8 rounded-lg relative overflow-hidden group hover:border-purple-500 transition-colors">
                                <div className="absolute -right-10 -top-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Users size={150} />
                                </div>
                                <Skull className="text-purple-500 w-12 h-12 mb-6" />
                                <h3 className="font-cinzel text-2xl text-white mb-4">The Minion Waves</h3>
                                <p className="text-stone-400 leading-relaxed text-sm">
                                    Every 30 seconds, portals in your base spawn waves of **Mana Wyrms** (Melee) and **Void Walkers** (Ranged). Protecting these NPCs is key; they deactivate the Tower's invulnerability shields.
                                </p>
                            </div>

                            {/* Card 3: Core */}
                            <div className="bg-[#120a1a] border border-purple-500/30 p-8 rounded-lg relative overflow-hidden group hover:border-purple-500 transition-colors">
                                <div className="absolute -right-10 -top-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Crown size={150} />
                                </div>
                                <Zap className="text-purple-500 w-12 h-12 mb-6" />
                                <h3 className="font-cinzel text-2xl text-white mb-4">Destroy the Core</h3>
                                <p className="text-stone-400 leading-relaxed text-sm">
                                    The ultimate objective is not points, but destruction. Push down a lane, destroy the **Inhibitor Crystals**, and expose the enemy faction's **General**. Slaying the General ends the match instantly.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#1a0f1f] p-8 rounded-lg border-l-4 border-purple-500">
                            <h3 className="font-cinzel text-xl text-white mb-4">The Jungle: <span className="text-purple-400">Neutral Objectives</span></h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <strong className="text-purple-300 block mb-2">Baron Nash'or (The Void Leviathan)</strong>
                                    <p className="text-stone-400 text-sm">Located in the central pit. Slaying this raid-boss grants the "Hand of the Void" buff to the entire team, increasing size, damage, and health regeneration for 3 minutes.</p>
                                </div>
                                <div>
                                    <strong className="text-purple-300 block mb-2">Elemental Obelisks</strong>
                                    <p className="text-stone-400 text-sm">Capture these points in the jungle to spawn "Super Minions" (Fel Reavers) in the corresponding lane.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- ARENA --- */}
                {activeTab === 'arena' && (
                    <div className="text-center py-24">
                        <Crown className="w-16 h-16 text-amber-500 mx-auto mb-6" />
                        <h2 className="font-cinzel text-4xl text-white mb-4">Season 1: <span className="text-amber-500">The Gladiator's Sanctum</span></h2>
                        <p className="text-stone-400 max-w-2xl mx-auto mb-8">
                            Rankings have been reset. The new "Gladiator's Sanctum" in Nagrand offers a dedicated space for duels, scrimmages, and purchasing S1 gear. Solocue is now fully supported.
                        </p>
                        <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded font-cinzel uppercase tracking-widest transition-colors">
                            View Leaderboards
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default TheTheaterOfWar;
