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
                                    {/* Rested+ Buff */}
                                    <div className="relative p-6 border border-stone-800 rounded-lg overflow-hidden group hover:border-amber-500/50 transition-all h-32 flex items-center">
                                        <div className="absolute inset-0 bg-[url('https://i.imgur.com/2EKhoRz.jpeg')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                                        <div className="relative z-10 flex items-center gap-4">
                                            <div className="bg-stone-800/80 p-2 rounded backdrop-blur-sm"><BedDouble className="text-amber-500 w-6 h-6" /></div>
                                            <div>
                                                <h4 className="font-cinzel text-white text-sm mb-1">Rested+ Buff</h4>
                                                <p className="text-xs text-stone-300">Generate Rested XP 200% faster. Maintain "Inspired" state (+5% Reputation gain) for 1 hour after leaving home.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* The Vault */}
                                    <div className="relative p-6 border border-stone-800 rounded-lg overflow-hidden group hover:border-amber-500/50 transition-all h-32 flex items-center">
                                        <div className="absolute inset-0 bg-[url('https://i.imgur.com/rxKRgK9.jpeg')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                                        <div className="relative z-10 flex items-center gap-4">
                                            <div className="bg-stone-800/80 p-2 rounded backdrop-blur-sm"><Box className="text-amber-500 w-6 h-6" /></div>
                                            <div>
                                                <h4 className="font-cinzel text-white text-sm mb-1">The Vault</h4>
                                                <p className="text-xs text-stone-300">100 slots of account-wide storage. Share reagents and gold between alts seamlessly.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Warband Alts */}
                                    <div className="relative p-6 border border-stone-800 rounded-lg overflow-hidden group hover:border-amber-500/50 transition-all h-32 flex items-center">
                                        <div className="absolute inset-0 bg-[url('https://i.imgur.com/6vLXLsp.jpeg')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                                        <div className="relative z-10 flex items-center gap-4">
                                            <div className="bg-stone-800/80 p-2 rounded backdrop-blur-sm"><Map className="text-amber-500 w-6 h-6" /></div>
                                            <div>
                                                <h4 className="font-cinzel text-yellow-500 text-sm mb-1">Warband Alts</h4>
                                                <p className="text-xs text-stone-300">See your diverse characters gathered around the table. Send your alts on missions or exchange items instantly.</p>
                                            </div>
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

                            <div className="space-y-12">
                                {[
                                    {
                                        name: "Silvermoon Spire",
                                        loc: "Silvermoon City",
                                        desc: "Experience the height of Sin'dorei luxury in these gravity-defying spires. Features floating furniture, self-sweeping brooms, and a direct view of the Sunwell's energy. Includes a personal Mana Fountain that accelerates mana regeneration while relaxing.",
                                        img: "https://i.imgur.com/MbU3URE.jpeg",
                                        biome: "Urban / Magical"
                                    },
                                    {
                                        name: "The Iron District",
                                        loc: "Ironforge",
                                        desc: "Carved directly into the living rock of Khaz Modan, these suites are warm, cozy, and literally bomb-proof. Listen to the rhythmic clanging of the Great Forge as you sleep. Comes wih a private Magma Tap for Blacksmithing (+5 Skill) and radiant floor heating.",
                                        img: "https://i.imgur.com/z3Dlsh2.jpeg",
                                        biome: "Subterranean / Industrial"
                                    },
                                    {
                                        name: "Spirit Bluffs",
                                        loc: "Thunder Bluff",
                                        desc: "Pitch your open-air tent on a private mesa overlooking the Golden Plains of Mulgore. Watch the kodo herds migrate far below in peace. Includes a 'Spirit Fire' pit that allows Shaman and Spirit-walkers to commune with ancestral NPCs for daily blessings.",
                                        img: "https://i.imgur.com/nIzPJK1.jpeg",
                                        biome: "Plains / Tribal"
                                    },
                                    {
                                        name: "Eco-Dome Beta",
                                        loc: "Netherstorm",
                                        desc: "Secure your own bubble of paradise amidst the chaotic void of the Netherstorm. This Ethereal-tech bio-dome features a fully controllable localized atmosphere. Highly sought after by Druids and Botanists wishing to preserve Outland's flora.",
                                        img: "https://i.imgur.com/ezIbccq.jpeg",
                                        biome: "Sci-Fi / Nature",
                                        special: "Remote Plot"
                                    },
                                    {
                                        name: "Nagrand Villa",
                                        loc: "Nagrand",
                                        desc: "A breathtaking property atop a floating island, accessible only by flying mount. Surrounded by waterfalls and grazing wildlife, this it the ultimate status symbol for the high-flying hero. Enjoy the serenity of Nagrand from your private observation deck.",
                                        img: "https://i.imgur.com/aWtMAK4.jpeg",
                                        biome: "Floating Island",
                                        special: "Remote Plot"
                                    },
                                    {
                                        name: "Shadowmoon Stronghold",
                                        loc: "Shadowmoon Valley",
                                        desc: "A fortified Legion-styled bunker situated dangerously close to the Black Temple. Deisgned for the hardened veteran who wants to wake up and immediately fight demons. Bathed in the fel-green glow of the valley, this stronghold is defensible and grim.",
                                        img: "https://i.imgur.com/pang6cl.jpeg",
                                        biome: "Wasteland / Military",
                                        special: "Remote Plot"
                                    }
                                ].map((house, i) => (
                                    <div key={i} className="flex flex-col md:flex-row gap-8 items-stretch group">
                                        {/* Image Card (2:4 ratio - Portrait) */}
                                        <div className="md:w-1/3 relative rounded-xl overflow-hidden border border-stone-800 shadow-2xl h-[400px]">
                                            <img src={house.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={house.name} />
                                            {house.special && (
                                                <div className="absolute bottom-4 left-4 bg-amber-900/90 px-3 py-1 text-xs text-white font-bold rounded uppercase tracking-wider backdrop-blur-sm shadow-lg">
                                                    {house.special}
                                                </div>
                                            )}
                                        </div>

                                        {/* Content Card */}
                                        <div className="md:w-2/3 bg-[#151515] border border-stone-800 rounded-xl p-8 flex flex-col justify-center relative overflow-hidden group-hover:border-amber-500/30 transition-all">
                                            {/* Decorative Background Icon */}
                                            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <Home size={200} />
                                            </div>

                                            <div className="relative z-10 text-center md:text-left">
                                                <div className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">{house.loc}</div>
                                                <h4 className="font-cinzel text-3xl text-white mb-4">{house.name}</h4>
                                                <div className="inline-block px-3 py-1 bg-stone-900 rounded text-xs text-stone-500 uppercase tracking-wide mb-6">{house.biome}</div>
                                                <p className="text-stone-400 leading-relaxed text-lg font-light">{house.desc}</p>
                                            </div>
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
                            <div className="relative rounded-xl border border-stone-800 overflow-hidden group hover:border-amber-900/50 transition-all h-96">
                                <div className="absolute inset-0 bg-[url('https://i.imgur.com/EMTwb8I.jpeg')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
                                <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Trophy size={200} /></div>
                                <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                                    <h3 className="font-cinzel text-3xl text-amber-500 mb-6 flex items-center gap-3">
                                        <Trophy className="w-8 h-8" /> The Trophy Hall
                                    </h3>
                                    <div className="text-stone-300 space-y-4 text-sm leading-relaxed">
                                        {formatText(`Your deeds define your home. Unlike generic furniture, the best decorations are earned.
                                        
                                        **Boss Heads:** Looting Onyxia's Head allows you to mount it on your wall.
                                        **Weapon Racks:** Retire your legendary artifacts. That **Thunderfury** looks better on the wall than in the bank.
                                        **Lore Books:** Collectible books found in the Scarlet Monastery library can be placed on shelves. Guests can click them to read the text.
                                        **Armor Mannequins:** Display your full Tier 2 Judgment set.`)}
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2: Crafting */}
                            <div className="relative rounded-xl border border-stone-800 overflow-hidden group hover:border-amber-900/50 transition-all h-96">
                                <div className="absolute inset-0 bg-[url('https://i.imgur.com/cALjJ5I.jpeg')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
                                <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Hammer size={200} /></div>
                                <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                                    <h3 className="font-cinzel text-3xl text-amber-500 mb-6 flex items-center gap-3">
                                        <Hammer className="w-8 h-8" /> Functional Decor
                                    </h3>
                                    <div className="text-stone-300 space-y-4 text-sm leading-relaxed">
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
