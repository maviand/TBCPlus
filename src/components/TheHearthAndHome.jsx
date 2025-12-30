import React, { useState } from 'react';
import { Home, Hammer, Crown, Feather, Key, Box, Star, Anchor, ArrowRight, Lamp, Trophy, BedDouble, Trees, Map, Shield, Flame } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheHearthAndHome = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i} className="mb-4 text-stone-400 leading-relaxed">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-amber-500 font-normal">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    return (
        <div className="min-h-screen bg-[#0c0a09] text-stone-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
            <UnifiedHeader
                icon={<Home className="w-8 h-8 text-amber-500" />}
                background={`/TBCPlus/images/header_housing.png`}
                section="Player Housing"
                sub="Your Personal Slice of Azeroth"
                title="Hearth & Home"
                quote="The war against the Legion is long. Every hero deserves a rest."
            />

            <div className="container mx-auto px-4 py-12">
                {/* Navigation */}
                <div className="flex justify-center gap-8 mb-16 border-b border-stone-800 pb-4">
                    {['overview', 'districts', 'customization'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 px-4 font-cinzel uppercase tracking-widest text-sm transition-all ${activeTab === tab
                                ? 'text-amber-500 border-b-2 border-amber-500'
                                : 'text-stone-600 hover:text-stone-400'}`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto animate-fade-in">

                    {/* OVERVIEW TAB */}
                    {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="font-cinzel text-4xl text-amber-500">A Place to Call Your Own</h2>
                                <div className="text-lg text-stone-300 leading-relaxed font-light">
                                    {formatText(`In TBC+, housing is not just a cosmetic instance; it is integrated into the core progression loop to prevent "garrison isolation."
                                    
                                    Your home is where you display your **Trophies of War**, craft at your **Private Forge**, and gain the **"Well Rested+"** efficiency buff. Key services like the Auction House are purposely excluded to ensure cities remain populated.`)}
                                </div>
                                <div className="space-y-4 pt-4">
                                    <div className="p-4 bg-[#1a1c22] border border-stone-800 rounded-lg flex items-center gap-4 hover:border-amber-900/50 transition-colors">
                                        <div className="bg-stone-800 p-2 rounded"><BedDouble className="text-amber-500 w-6 h-6" /></div>
                                        <div>
                                            <h4 className="font-cinzel text-white text-sm">Rested+ Buff</h4>
                                            <p className="text-xs text-stone-500">Generate Rested XP 200% faster. Maintain "Inspired" state (+5% Reputation gain) for 1 hour after leaving home.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-[#1a1c22] border border-stone-800 rounded-lg flex items-center gap-4 hover:border-amber-900/50 transition-colors">
                                        <div className="bg-stone-800 p-2 rounded"><Box className="text-amber-500 w-6 h-6" /></div>
                                        <div>
                                            <h4 className="font-cinzel text-white text-sm">The Vault</h4>
                                            <p className="text-xs text-stone-500">100 slots of account-wide storage. Share reagents and gold between alts seamlessly.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-[#1a1c22] border border-stone-800 rounded-lg flex items-center gap-4 hover:border-amber-900/50 transition-colors">
                                        <div className="bg-stone-800 p-2 rounded"><Map className="text-amber-500 w-6 h-6" /></div>
                                        <div>
                                            <h4 className="font-cinzel text-white text-sm">The Planning Table</h4>
                                            <p className="text-xs text-stone-500">Send your **Followers** on missions or queue for Battlegrounds directly from your "War Room".</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[600px] border border-stone-800 rounded-lg overflow-hidden group shadow-2xl">
                                <img src="https://i.imgur.com/u5rDQIs.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Housing Interior" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-8 left-8">
                                    <span className="text-amber-500 font-cinzel text-sm uppercase tracking-widest block mb-2">Architectural Style</span>
                                    <span className="text-white font-bold text-3xl font-serif">Human - Stormwind Estate</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* DISTRICTS TAB */}
                    {activeTab === 'districts' && (
                        <div className="space-y-12">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h3 className="font-cinzel text-3xl text-stone-200 mb-4">Architecture & Biomes</h3>
                                <p className="text-stone-500">Housing is available in "Districts" attached to capital cities, or special "Remote Plots" in the open world.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        name: "Silvermoon Spire",
                                        loc: "Silvermoon City",
                                        desc: "Floating furniture, self-sweeping brooms, and a view of the Sunwell. Features a mana-fountain that restores mana rapidly.",
                                        img: "https://i.imgur.com/yxPi2Ay.png",
                                        biome: "Urban / Magical"
                                    },
                                    {
                                        name: "The Iron District",
                                        loc: "Ironforge",
                                        desc: "Carved directly into the mountain. Warm, cozy, and literally bomb-proof. Comes with a private magma-tap for Blacksmithing (+5 Skill).",
                                        img: "https://i.imgur.com/Prhz9Nt.png",
                                        biome: "Subterranean / Industrial"
                                    },
                                    {
                                        name: "Spirit Bluffs",
                                        loc: "Thunder Bluff",
                                        desc: "Open-air tents on a private mesa. Watch the kodo herds migrate below. Includes a 'Spirit Fire' that allows talking to dead NPCs.",
                                        img: "https://i.imgur.com/mroo7Hx.jpeg",
                                        biome: "Plains / Tribal"
                                    },
                                    {
                                        name: "Eco-Dome Beta",
                                        loc: "Netherstorm",
                                        desc: "A personal bubbly of nature in the void. You control the weather inside. Highly sought after by Druids and Botanists.",
                                        img: "https://i.imgur.com/L1T7wF8.jpeg",
                                        biome: "Sci-Fi / Nature",
                                        special: "Remote Plot"
                                    },
                                    {
                                        name: "Nagrand Villa",
                                        loc: "Nagrand",
                                        desc: "A floating island property. Requires a flying mount to access. The ultimate status symbol.",
                                        img: "https://i.imgur.com/GzBkC3s.jpeg",
                                        biome: "Floating Island",
                                        special: "Remote Plot"
                                    },
                                    {
                                        name: "Shadowmoon Stronghold",
                                        loc: "Shadowmoon Valley",
                                        desc: "A fortified bunker near the Black Temple. For those who want to wake up and immediately fight demons.",
                                        img: "https://i.imgur.com/8yGzRH8.jpeg",
                                        biome: "Wasteland / Military",
                                        special: "Remote Plot"
                                    }
                                ].map((house, i) => (
                                    <div key={i} className="bg-[#151515] border border-stone-800 rounded-lg overflow-hidden group hover:border-amber-500/50 transition-all cursor-pointer">
                                        <div className="h-48 overflow-hidden relative">
                                            <img src={house.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt={house.name} />
                                            <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 text-[10px] text-amber-500 font-bold rounded uppercase tracking-wider border border-amber-900/30">
                                                {house.loc}
                                            </div>
                                            {house.special && (
                                                <div className="absolute bottom-4 left-4 bg-amber-900/80 px-3 py-1 text-[10px] text-white font-bold rounded uppercase tracking-wider backdrop-blur-sm">
                                                    {house.special}
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <h4 className="font-cinzel text-xl text-white mb-2">{house.name}</h4>
                                            <div className="text-xs text-stone-600 mb-3 uppercase tracking-wide">{house.biome}</div>
                                            <p className="text-sm text-stone-400 leading-relaxed">{house.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CUSTOMIZATION TAB */}
                    {activeTab === 'customization' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Feature 1: Trophies */}
                            <div className="bg-[#111] p-10 rounded-xl border border-stone-800 relative overflow-hidden group hover:border-amber-900/50 transition-all">
                                <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Trophy size={200} /></div>
                                <div className="relative z-10">
                                    <h3 className="font-cinzel text-2xl text-amber-500 mb-6 flex items-center gap-3">
                                        <Trophy className="w-6 h-6" /> The Trophy Hall
                                    </h3>
                                    <div className="text-stone-400 space-y-6 text-sm leading-relaxed">
                                        {formatText(`Your deeds define your home. Unlike generic furniture, the best decorations are earned.
                                        
                                        **Boss Heads:** Looting Onyxia's Head allows you to mount it on your wall.
                                        **Weapon Racks:** Retire your legendary artifacts. That **Thunderfury** looks better on the wall than in the bank.
                                        **Lore Books:** Collectible books found in the Scarlet Monastery library can be placed on shelves. Guests can click them to read the text.
                                        **Armor Mannequins:** Display your full Tier 2 Judgment set.`)}
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2: Crafting */}
                            <div className="bg-[#111] p-10 rounded-xl border border-stone-800 relative overflow-hidden group hover:border-amber-900/50 transition-all">
                                <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Hammer size={200} /></div>
                                <div className="relative z-10">
                                    <h3 className="font-cinzel text-2xl text-amber-500 mb-6 flex items-center gap-3">
                                        <Hammer className="w-6 h-6" /> Functional Decor
                                    </h3>
                                    <div className="text-stone-400 space-y-6 text-sm leading-relaxed">
                                        {formatText(`Furniture isn't just for show. It serves a purpose for the dedicated artisan.
                                        
                                        **The Alchemy Lab:** An interactive table that acts as an Alchemy Station. Gain a 5% chance to create an extra potion.
                                        **The Herbalist's Garden:** A small plot of land where you can grow Peacebloom or Felweed (takes 24h real time).
                                        **The Map Table:** Allows instant teleportation to any zone you have fully explored (Account Cooldown).
                                        **Training Dummies:** Test your DPS in private without judgment.`)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}



                </div>
            </div>
        </div>
    );
};

export default TheHearthAndHome;
