import React, { useState } from 'react';
import { Sword, Shield, Target, Crown, Skull, Zap, Map, Flag, Users, Trophy, Flame } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheTheaterOfWar = () => {
    const [activeTab, setActiveTab] = useState('battlegrounds'); // battlegrounds | arena | fissure

    // Helper for bold text
    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i} className="mb-4 text-stone-400 leading-relaxed">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-[#c29c55] font-normal">{part.slice(2, -2)}</strong> : part
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
                background="https://i.imgur.com/tFR8uAV.jpeg"
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
                        <div className="md:col-span-2 border border-red-900/40 p-8 rounded-lg relative overflow-hidden group text-shadow-sm">
                            <div className="absolute inset-0">
                                <img src="https://i.imgur.com/pKSaDj7.jpeg" alt="Azshara Crater" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="absolute top-0 right-0 p-4 opacity-50">
                                    <Flag className="w-16 h-16 text-red-500/50" />
                                </div>
                                <h2 className="font-hero text-3xl text-[#c29c55] mb-2 drop-shadow-md">Azshara Crater</h2>
                                <span className="inline-block px-2 py-1 bg-red-900/40 text-red-200 text-xs font-cinzel tracking-widest uppercase rounded mb-4 border border-red-500/30 backdrop-blur-sm">
                                    40v40 Epic Battleground
                                </span>
                                <p className="text-stone-200 leading-relaxed mb-6 max-w-4xl drop-shadow">
                                    For years, it existed only in the game files—a ghost of content cut for time. Now, the gates are finally open. Azshara Crater is a massive, MOBA-inspired battlefield focused on trench warfare, dynamic lane pushing, and summoning the 'Fel-Reaver Prototype'.
                                </p>

                                {/* Honest Philosophy Block */}
                                <div className="mb-6 p-4 bg-black/40 border-l-2 border-red-500 rounded">
                                    <h4 className="text-red-400 font-cinzel text-xs uppercase mb-2">The Design Philosophy</h4>
                                    <div className="text-stone-400 text-xs leading-relaxed">
                                        {formatText(`**The Truth:** Alterac Valley often devolves into a PvE race where players ignore each other to rush the boss.
                                        **The Fix:** Azshara Crater forces PvP. You cannot rush the General. You must capture 'Forward Bunkers' to spawn weak points on the enemy gate. The map is three lanes wide, meaning you can't just 'zerg' one side; you have to spread out and hold the line.`)}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-stone-300 font-medium">
                                    <div className="flex items-center gap-2"><Map className="w-4 h-4 text-red-400" /> <span>Three-Lane Map</span></div>
                                    <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-red-400" /> <span>Construct Vehicles</span></div>
                                    <div className="flex items-center gap-2"><Trophy className="w-4 h-4 text-red-400" /> <span>Resource Race</span></div>
                                </div>
                            </div>
                        </div>

                        {/* Hellfire Citadel Siege */}
                        <div className="border border-red-900/20 p-6 rounded-lg hover:border-red-500/50 transition-all relative overflow-hidden group">
                            <div className="absolute inset-0">
                                <img src="https://i.imgur.com/wJMtCKY.jpeg" alt="Hellfire Siege" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <Flame className="w-6 h-6 text-orange-500 drop-shadow" />
                                    <h3 className="font-cinzel text-xl text-white drop-shadow-md">Hellfire Citadel Siege</h3>
                                </div>
                                <span className="text-xs text-stone-400 uppercase tracking-wider block mb-3 font-semibold">40v40 Assault/Defend</span>
                                <p className="text-stone-300 text-sm mb-4 leading-relaxed">
                                    One team holds the ramparts; the other storms them with siege engines. It's 'Strand of the Ancients' done right—less driving vehicles, more fighting on top of them. Destructible walls and a final holdout in the Throne Room.
                                </p>
                            </div>
                        </div>

                        {/* The Blood Ring */}
                        <div className="border border-red-900/20 p-6 rounded-lg hover:border-red-500/50 transition-all relative overflow-hidden group">
                            <div className="absolute inset-0">
                                <img src="https://i.imgur.com/uBKroui.jpeg" alt="The Blood Ring" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <Skull className="w-6 h-6 text-red-600 drop-shadow" />
                                    <h3 className="font-cinzel text-xl text-white drop-shadow-md">The Blood Ring</h3>
                                </div>
                                <span className="text-xs text-stone-400 uppercase tracking-wider block mb-3 font-semibold">1v10 Deathmatch</span>
                                <p className="text-stone-300 text-sm mb-4 leading-relaxed">
                                    A Gurubashi-style arena in Farahlon. The map physically shrinks over time (Battle Royale style). No teams, no healers, strict dampening. The last player alive loots the chest. It's pure, unadulterated chaos.
                                </p>
                            </div>
                        </div>

                        {/* Zangarmarsh Trench Warfare */}
                        <div className="border border-blue-900/20 p-6 rounded-lg hover:border-blue-500/50 transition-all relative overflow-hidden group">
                            <div className="absolute inset-0">
                                <img src="https://i.imgur.com/6aSPi7p.jpeg" alt="Zangarmarsh Trenches" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <Shield className="w-6 h-6 text-blue-500 drop-shadow" />
                                    <h3 className="font-cinzel text-xl text-white drop-shadow-md">Zangarmarsh Trenches</h3>
                                </div>
                                <span className="text-xs text-stone-400 uppercase tracking-wider block mb-3 font-semibold">15v15 Control Point</span>
                                <p className="text-stone-300 text-sm mb-4 leading-relaxed">
                                    Spore-choked trenches limit visibility to 30 yards. Capturing pumps drains the water level to open new flank routes. It's a map that rewards close-quarters combat and ambushes over ranged spam.
                                </p>
                            </div>
                        </div>

                        {/* Nagrand Sky-Battles */}
                        <div className="border border-yellow-900/20 p-6 rounded-lg hover:border-yellow-500/50 transition-all relative overflow-hidden group">
                            <div className="absolute inset-0">
                                <img src="https://i.imgur.com/SkvVuAM.jpeg" alt="Nagrand Sky-Battles" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <Zap className="w-6 h-6 text-yellow-500 drop-shadow" />
                                    <h3 className="font-cinzel text-xl text-white drop-shadow-md">Nagrand Sky-Battles</h3>
                                </div>
                                <span className="text-xs text-stone-400 uppercase tracking-wider block mb-3 font-semibold">10v10 Aerial Combat</span>
                                <p className="text-stone-300 text-sm mb-4 leading-relaxed">
                                    Dogfighting on Nether Drakes. High-speed chases around Oshu'gun using 3D movement. Master the 'Immelmann Turn' to shake pursuers. If you get dismounted, you fall to your death.
                                </p>
                            </div>
                        </div>
                    </div>
                )
                }

                {/* --- FISSURE OF SOULS (MOBA) --- */}
                {
                    activeTab === 'fissure' && (
                        <div className="space-y-12">
                            <div className="text-center max-w-4xl mx-auto mb-12">
                                <h2 className="font-hero text-5xl text-[#c29c55] mb-4 tracking-tight drop-shadow-md">The Fissure of Souls</h2>
                                <p className="text-purple-200/60 font-cinzel tracking-widest uppercase text-sm mb-6">10v10 Siege Battleground</p>
                                <div className="text-stone-300 leading-relaxed text-lg">
                                    {formatText(`Deep within the Twisting Nether, a shard of reality has fractured. Here, the laws of Azeroth warfare do not apply. 
                                    **The Concept:** Fissure of Souls is a love letter to the strategic depth of MOBAs, translated into the visceral First-Person combat of World of Warcraft. It is not just about killing; it's about territory, economy, and timing.`)}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Card 1: Lanes */}
                                <div className="bg-[#120a1a] border border-purple-500/30 p-8 rounded-lg relative overflow-hidden group hover:border-purple-500 transition-colors shadow-2xl">
                                    <div className="absolute -right-10 -top-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Map size={150} />
                                    </div>
                                    <Shield className="text-purple-500 w-12 h-12 mb-6" />
                                    <h3 className="font-cinzel text-2xl text-white mb-4">The Ley-Lanes</h3>
                                    <div className="text-stone-400 leading-relaxed text-sm">
                                        {formatText(`The map is split into three ley-lines: **Void Ridge (Top)**, **The Bridge (Mid)**, and **Mana Tombs (Bot)**. 
                                        Unlike regular battlegrounds, these paths are guarded by **Arcane Towers** that disintegrate players in seconds. You cannot push without the cover of your minion wave.`)}
                                    </div>
                                </div>

                                {/* Card 2: Minions */}
                                <div className="bg-[#120a1a] border border-purple-500/30 p-8 rounded-lg relative overflow-hidden group hover:border-purple-500 transition-colors shadow-2xl">
                                    <div className="absolute -right-10 -top-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Users size={150} />
                                    </div>
                                    <Skull className="text-purple-500 w-12 h-12 mb-6" />
                                    <h3 className="font-cinzel text-2xl text-white mb-4">The Creep Waves</h3>
                                    <div className="text-stone-400 leading-relaxed text-sm">
                                        {formatText(`Every 30 seconds, portals in your base spawn waves of **Mana Wyrms** (Melee) and **Void Walkers** (Ranged). 
                                        Protecting these NPCs is paramount; they deactivate the Tower's 'Divinity Shield', allowing you to siege the objective.`)}
                                    </div>
                                </div>

                                {/* Card 3: Core */}
                                <div className="bg-[#120a1a] border border-purple-500/30 p-8 rounded-lg relative overflow-hidden group hover:border-purple-500 transition-colors shadow-2xl">
                                    <div className="absolute -right-10 -top-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Crown size={150} />
                                    </div>
                                    <Zap className="text-purple-500 w-12 h-12 mb-6" />
                                    <h3 className="font-cinzel text-2xl text-white mb-4">The Nexus Core</h3>
                                    <div className="text-stone-400 leading-relaxed text-sm">
                                        {formatText(`Victory is not points-based. You must push down a lane, destroy the **Inhibitor Crystals** to spawn Super Minions (Fel Reavers), and expose the enemy faction's **General**.
                                        Slaying the General ends the match instantly. Comebacks are always possible until the final blow.`)}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#1a0f1f] p-8 rounded-lg border-l-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                                <h3 className="font-cinzel text-xl text-white mb-4">The Jungle: <span className="text-purple-400">Neutral Objectives</span></h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <strong className="text-purple-300 block mb-2 font-cinzel text-lg">Baron Nash'or (The Void Leviathan)</strong>
                                        <p className="text-stone-400 text-sm leading-relaxed">Located in the central pit, this raid-boss requires the entire team to defeat. Slaying him grants the **"Hand of the Void"** buff, empowering your minions with frenzy and granting your team massive health regeneration.</p>
                                    </div>
                                    <div>
                                        <strong className="text-purple-300 block mb-2 font-cinzel text-lg">Elemental Obelisks</strong>
                                        <p className="text-stone-400 text-sm leading-relaxed">Capture these points in the jungle to gain map-wide vision or spawn **"Siege Breaker"** mercenaries that push lanes automatically.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                {/* --- ARENA --- */}
                {
                    activeTab === 'arena' && (
                        <div className="space-y-16 py-12">
                            {/* Header */}
                            <div className="text-center">
                                <Crown className="w-20 h-20 text-amber-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                                <h2 className="font-hero text-5xl text-[#c29c55] mb-4">The Gladiator's Sanctum</h2>
                                <p className="text-amber-500/80 font-cinzel tracking-[0.2em] uppercase text-sm">Season 1: The Burning Crusade</p>
                            </div>

                            {/* Philosophy */}
                            <div className="max-w-4xl mx-auto bg-[#1a120b] border border-amber-900/40 p-8 rounded relative shadow-2xl">
                                <h4 className="font-cinzel text-amber-500 text-lg uppercase mb-4 border-b border-amber-900/30 pb-2">Ranking Reimagined: Solo Shuffle</h4>
                                <div className="text-stone-400 text-sm leading-relaxed space-y-4">
                                    {formatText(`**The Old Way:** In 2007, getting Gladiator meant you had to play at specific times, with specific people, dodging "title sitters" and wintraders. It was a logistical nightmare.
                                    
                                    **The New Way:** TBC Plus introduces **Solo Shuffle**. You can queue solo for 3v3 Arena. The system matches you with 5 other players, and you play 6 rounds, shuffling teams each time. Your personal performance dictates your rating. If you go 6-0, you rise. If you go 0-6, you fall. No teams to manage, no scheduling conflicts. Just you and your skill.`)}
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* The Blood Pit */}
                                <div className="bg-[#0c0a09] border border-amber-900/20 p-6 rounded-lg group hover:border-amber-600 transition-colors">
                                    <img src="https://i.imgur.com/uBKroui.jpeg" alt="Duel" className="w-full h-40 object-cover rounded mb-4 opacity-50 group-hover:opacity-80 transition-opacity" />
                                    <div className="flex items-center gap-3 mb-2">
                                        <Sword className="text-amber-600 w-5 h-5" />
                                        <h3 className="text-white font-cinzel text-xl">The Blood Pit</h3>
                                    </div>
                                    <p className="text-stone-500 text-xs leading-relaxed">
                                        A high-stakes dueling ring where players can wager Gold or Tokens. Winner takes all. Spectators can bet on the outcome from the stands.
                                    </p>
                                </div>

                                {/* Training Grounds */}
                                <div className="bg-[#0c0a09] border border-amber-900/20 p-6 rounded-lg group hover:border-amber-600 transition-colors">
                                    <img src="https://i.imgur.com/mOkInZc.jpeg" alt="Training" className="w-full h-40 object-cover rounded mb-4 opacity-50 group-hover:opacity-80 transition-opacity" />
                                    <div className="flex items-center gap-3 mb-2">
                                        <Target className="text-amber-600 w-5 h-5" />
                                        <h3 className="text-white font-cinzel text-xl">Training Grounds</h3>
                                    </div>
                                    <p className="text-stone-500 text-xs leading-relaxed">
                                        Test your DPS on "Boss-Level" dummies that replicate raid mechanics (AoE zones, interrupt checks). Beat the high score to earn the "Target Dummy Hero" title.
                                    </p>
                                </div>

                                {/* Spectator Hall */}
                                <div className="bg-[#0c0a09] border border-amber-900/20 p-6 rounded-lg group hover:border-amber-600 transition-colors">
                                    <img src="https://i.imgur.com/gBM49rp.jpeg" alt="Spectate" className="w-full h-40 object-cover rounded mb-4 opacity-50 group-hover:opacity-80 transition-opacity" />
                                    <div className="flex items-center gap-3 mb-2">
                                        <Users className="text-amber-600 w-5 h-5" />
                                        <h3 className="text-white font-cinzel text-xl">Spectator Hall</h3>
                                    </div>
                                    <p className="text-stone-500 text-xs leading-relaxed">
                                        Watch high-rated matches live. Analyze the best players with full UI tools—see their cooldowns, talents, and gear in real-time. Learn from the Gladiators.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center pt-8">
                                <button className="px-10 py-4 bg-amber-700 hover:bg-amber-600 text-white rounded font-cinzel uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)]">
                                    View Season 1 Leaderboards
                                </button>
                            </div>
                        </div>
                    )
                }

            </div >
        </div >
    );
};

export default TheTheaterOfWar;
