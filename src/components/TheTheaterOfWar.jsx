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
                    Battlefields
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Azshara Crater (Featured) */}
                        <div className="md:col-span-2 bg-[#120a0a] border border-red-900/40 p-8 rounded-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                <Flag className="w-16 h-16 text-red-900" />
                            </div>
                            <h2 className="font-cinzel text-3xl text-white mb-2">Azshara Crater</h2>
                            <span className="inline-block px-2 py-1 bg-red-900/20 text-red-400 text-xs font-cinzel tracking-widest uppercase rounded mb-4 border border-red-900/30">
                                40v40 Epic Battleground
                            </span>
                            <p className="text-stone-300 leading-relaxed mb-6 max-w-4xl">
                                For years, it existed only in the game files. Now, the gates are open. A massive MOBA-style battleground focused on trench warfare, dynamic spawns, and summoning the &apos;Fel-Reaver Prototype&apos;.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-stone-400">
                                <div className="flex items-center gap-2"><Map className="w-4 h-4 text-red-500" /> <span>Three-Lane Map</span></div>
                                <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-red-500" /> <span>Construct Vehicles</span></div>
                                <div className="flex items-center gap-2"><Trophy className="w-4 h-4 text-red-500" /> <span>Resource Race</span></div>
                            </div>
                        </div>

                        {/* Hellfire Citadel Siege */}
                        <div className="bg-[#120a0a] border border-red-900/20 p-6 rounded-lg hover:border-red-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <Flame className="w-6 h-6 text-orange-500" />
                                <h3 className="font-cinzel text-xl text-white">Hellfire Citadel Siege</h3>
                            </div>
                            <span className="text-xs text-stone-500 uppercase tracking-wider block mb-3">40v40 Assault/Defend</span>
                            <p className="text-stone-400 text-sm mb-4">
                                One team defends the ramparts; the other assaults with siege engines. Destructible walls and a race to the throne room while dodging orbital Legion strikes.
                            </p>
                        </div>

                        {/* The Blood Ring */}
                        <div className="bg-[#120a0a] border border-red-900/20 p-6 rounded-lg hover:border-red-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <Skull className="w-6 h-6 text-red-600" />
                                <h3 className="font-cinzel text-xl text-white">The Blood Ring</h3>
                            </div>
                            <span className="text-xs text-stone-500 uppercase tracking-wider block mb-3">1v10 Deathmatch</span>
                            <p className="text-stone-400 text-sm mb-4">
                                A Gurubashi-style arena in Farahlon. The map physically shrinks (Battle Royale). No teams, reduced healing. Winner takes the pot.
                            </p>
                        </div>

                        {/* Zangarmarsh Trench Warfare */}
                        <div className="bg-[#120a0a] border border-blue-900/20 p-6 rounded-lg hover:border-blue-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <Shield className="w-6 h-6 text-blue-500" />
                                <h3 className="font-cinzel text-xl text-white">Zangarmarsh Trenches</h3>
                            </div>
                            <span className="text-xs text-stone-500 uppercase tracking-wider block mb-3">15v15 Control Point</span>
                            <p className="text-stone-400 text-sm mb-4">
                                Spore-choked trenches limit visibility. Capturing pumps drains the water level to open new flank routes. Sniper nests control sightlines.
                            </p>
                        </div>

                        {/* Nagrand Sky-Battles */}
                        <div className="bg-[#120a0a] border border-yellow-900/20 p-6 rounded-lg hover:border-yellow-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <Zap className="w-6 h-6 text-yellow-500" />
                                <h3 className="font-cinzel text-xl text-white">Nagrand Sky-Battles</h3>
                            </div>
                            <span className="text-xs text-stone-500 uppercase tracking-wider block mb-3">10v10 Aerial Combat</span>
                            <p className="text-stone-400 text-sm mb-4">
                                Aerial dogfighting on Nether Drakes. High-speed chases around Oshu&apos;gun. Master the &apos;Immelmann Turn&apos; to shake pursuers.
                            </p>
                        </div>
                    </div>
                )
                }

                {/* --- FISSURE OF SOULS (MOBA) --- */}
                {
                    activeTab === 'fissure' && (
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
                    )
                }

                {/* --- ARENA --- */}
                {
                    activeTab === 'arena' && (
                        <div className="text-center py-24">
                            <Crown className="w-16 h-16 text-amber-500 mx-auto mb-6" />
                            <h2 className="font-cinzel text-4xl text-white mb-4">Season 1: <span className="text-amber-500">The Gladiator's Sanctum</span></h2>
                            <p className="text-stone-400 max-w-2xl mx-auto mb-8">
                                Rankings have been reset. The new &quot;Gladiator&apos;s Sanctum&quot; in Nagrand offers a dedicated space for duels, scrimmages, and purchasing S1 gear. Solocue is now fully supported.
                            </p>
                            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded font-cinzel uppercase tracking-widest transition-colors">
                                View Leaderboards
                            </button>
                        </div>
                    )
                }

            </div >
        </div >
    );
};

export default TheTheaterOfWar;
