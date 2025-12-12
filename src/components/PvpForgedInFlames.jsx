import React, { useState } from 'react';
import {
    Swords, Shield, Skull, Flag, Crown, Crosshair,
    Flame, Zap, Target, Award, Map, Users,
    Trophy, Medal, Eye, Clock, Cross, Hexagon
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const PvpForgedInFlames = () => {
    const [activeTab, setActiveTab] = useState('battlegrounds');

    // Helper for bold/color formatting
    const formatText = (text) => {
        if (!text) return null;
        const lines = text.split('\n');
        return lines.map((line, lineIndex) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            const content = parts.map((part, partIndex) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={partIndex} className="text-[#ef4444] font-bold">{part.slice(2, -2)}</strong>;
                }
                return part;
            });
            return (
                <React.Fragment key={lineIndex}>
                    {content}
                    {lineIndex < lines.length - 1 && <br />}
                </React.Fragment>
            );
        });
    };

    const tabs = [
        { id: 'battlegrounds', label: 'New Battlegrounds', icon: Flag },
        { id: 'arena', label: 'Arena Seasons', icon: Swords },
        { id: 'worldpvp', label: 'World Objectives', icon: GlobeIcon },
        { id: 'rewards', label: 'Rewards of War', icon: Crown }
    ];

    function GlobeIcon(props) { return <Map {...props} />; }

    const content = {
        battlegrounds: {
            title: "The Fields of Slaughter",
            desc: "War has evolved. We've moved beyond simple capture-the-flag. These new battlegrounds introduce verticality, vehicle combat, and environmental hazards.",
            items: [
                {
                    name: "Hellfire Citadel Siege",
                    type: "40v40 Epic Battleground",
                    icon: <Flame className="w-8 h-8 text-orange-500" />,
                    image: "/images/art/pvp_hellfire_siege.png",
                    desc: "**Objective:** Assault vs. Defend. \n**Mechanic:** The Horde defends the ramparts of Hellfire Citadel; the Alliance assaults with captured Fel Reavers. \n**Flavor:** Destructible walls. Use siege engines to breach the gates. The final phase is a rush to the throne room while dodging orbital strikes from the Legion."
                },
                {
                    name: "The Blood Ring",
                    type: "Free-for-All Deathmatch",
                    icon: <Skull className="w-8 h-8 text-red-600" />,
                    desc: "**Objective:** Survival. \n**Mechanic:** A Gurubashi-style arena in the ruins of Farahlon. 10 players enter; 1 leaves. The map physically shrinks over time (Battle Royale style) as the Nether encroaches. \n**Flavor:** No teams. No healers (healing reduced by 50%). Pure skill. Winner takes the pot of gold."
                },
                {
                    name: "Zangarmarsh Trench Warfare",
                    type: "15v15 Control Point",
                    icon: <Shield className="w-8 h-8 text-blue-500" />,
                    desc: "**Objective:** Territory Control. \n**Mechanic:** Spore-choked trenches limit visibility. Capturing pumps drains the water level, opening new flank routes below the mud. \n**Flavor:** Close-quarters combat. Ambush heavy. Snipers in the giant mushrooms control the sightlines."
                },
                {
                    name: "Nagrand Sky-Battles",
                    type: "10v10 Aerial Combat",
                    icon: <Zap className="w-8 h-8 text-yellow-500" />,
                    desc: "**Objective:** Dogfighting. \n**Mechanic:** Players mount Nether Drakes equipped with lances. Combat is entirely 3D. Dismounting means death (unless you fall into a vortex). \n**Flavor:** High-speed chases around Oshu'gun. Master the 'Immelmann Turn' ability to shake pursuers."
                }
            ]
        },
        arena: {
            title: "The Gladiator's Circle",
            desc: "Competitive PvP has been refined. We've removed RNG resists and added new tactical depth.",
            items: [
                {
                    name: "Solo Shuffle",
                    type: "Ranked Queue",
                    icon: <Users className="w-8 h-8 text-[#c29c55]" />,
                    desc: "**The System:** Queue solo. You are matched with 5 others. You play 6 rounds, shuffling teams each time. \n**Adaptation:** TBC balancing applied (no dampening instantly). \n**Rewards:** Unique 'Lone Wolf' titles and mounts."
                },
                {
                    name: "New Arena: The Black Temple",
                    type: "Arena Map",
                    icon: <Crosshair className="w-8 h-8 text-purple-500" />,
                    desc: "**Layout:** A flat, circular roof overlooking the Nether. \n**Hazard:** No pillars. Instead, 'Shadows' periodically sweep across the map, breaking line of sight. You must time your goes with the moving shadows."
                }
            ]
        },
        worldpvp: {
            title: "War in the Open World",
            desc: "Outland is a contested zone. Nowhere is safe.",
            items: [
                {
                    name: "Caravan Escorts",
                    type: "Dynamic Event",
                    icon: <Flag className="w-8 h-8 text-green-500" />,
                    desc: "**The Loop:** Every 3 hours, a massive supply caravan travels from Nagrand to Hellfire. \n**The Conflict:** One faction defends active NPCs; the other attacks. \n**The Loot:** Hijacking the caravan drops a chest for the raid with gems and badges."
                },
                {
                    name: "Bounty System",
                    type: "Manhunt",
                    icon: <Target className="w-8 h-8 text-red-500" />,
                    desc: "**Mechanic:** Killing 10 players without dying marks you as an 'Assassin' on the map. \n**Risk/Reward:** You deal 15% more damage but take 10% more. Killing an Assassin grants massive Honor and a 'Bounty Bag'."
                }
            ]
        },
        rewards: {
            title: "Spoils of Victory",
            desc: "Gear that matters. Visuals that intimidate.",
            items: [
                {
                    name: "Weapon Illusions",
                    type: "Cosmetic",
                    icon: <Flame className="w-8 h-8 text-orange-400" />,
                    desc: "**The Look:** Unique enchants tied to rating. 'Nether-Flame' (2200 Rating) makes your weapon drip void energy. 'Glorious Gold' (2400 Rating) is blindingly bright."
                },
                {
                    name: "Armored Nether Drakes",
                    type: "Mount",
                    icon: <Crown className="w-8 h-8 text-[#c29c55]" />,
                    desc: "**Gladiator Mount:** The 'Merciless Nether Drake'. Covered in spiked plate armor. It has a unique /mountspecial where it breathes fel fire."
                }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-[#050403] text-[#e0e0e0] font-sans selection:bg-red-900 selection:text-white overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .bg-pattern {
          background-image: radial-gradient(#1f1f1f 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>

            <UnifiedHeader
                icon="https://i.imgur.com/JIjC5nA.jpeg"
                background="https://i.imgur.com/YEnWczL.jpeg"
                section="PvP"
                sub="Forged in Flames"
                title="The Art of War"
                quote="Peace is a lie. There is only passion. Through passion, I gain strength."
            />

            {/* --- HERO BANNER --- */}
            <div className="relative w-full h-[300px] border-b border-[#2f2f35] overflow-hidden">
                <div className="absolute inset-0 bg-red-900/10 bg-pattern"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050403] to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center">
                    <h1 className="font-hero text-5xl md:text-7xl text-red-600 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mb-4">TOTAL WAR</h1>
                    <p className="font-body text-[#aeb6bf] max-w-2xl text-lg">
                        The battle for Outland isn't just fought in raids. Claim your dominance in revamped Battlegrounds, ranked Arenas, and persistent World PvP.
                    </p>
                </div>
            </div>

            {/* --- TAB NAVIGATION --- */}
            <div className="sticky top-20 z-40 bg-[#0b0d10]/95 backdrop-blur border-b border-[#2f2f35]">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center gap-2 md:gap-8 overflow-x-auto py-4">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-sm font-hero text-sm md:text-base uppercase tracking-widest transition-all whitespace-nowrap
                  ${activeTab === tab.id
                                        ? 'bg-red-900/20 text-red-500 border border-red-900/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                                        : 'text-[#5c5c63] hover:text-[#e0e0e0] border border-transparent'}`}
                            >
                                <tab.icon className="w-5 h-5" /> {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="container mx-auto px-4 py-16 max-w-6xl min-h-[600px] animate-fade-in-up">

                <div className="text-center mb-12">
                    <h2 className="font-hero text-3xl md:text-4xl text-[#f0e6d2] mb-4">{content[activeTab].title}</h2>
                    <p className="font-body text-[#aeb6bf] text-lg max-w-3xl mx-auto">{formatText(content[activeTab].desc)}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {content[activeTab].items.map((item, i) => (
                        <div key={i} className="group relative bg-[#0b0d10] border border-[#2f2f35] p-8 rounded hover:border-red-900/50 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-xl">
                            {/* Background Image if exists */}
                            {item.image && (
                                <div className="absolute inset-0 z-0">
                                    <img src={item.image} alt="" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-[1px]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-[#0b0d10]/80 to-transparent"></div>
                                </div>
                            )}

                            {/* Hover Effect Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900/0 via-transparent to-red-900/0 group-hover:from-red-900/10 transition-all duration-500 z-0"></div>

                            <div className="relative z-10 flex items-start gap-6">
                                <div className="p-4 bg-[#1a1c22] rounded border border-[#2f2f35] group-hover:border-red-500/30 transition-colors shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-hero text-xl text-[#f0e6d2] group-hover:text-red-500 transition-colors mb-2">{item.name}</h3>
                                    <span className="inline-block px-2 py-1 bg-red-900/20 text-red-400 text-[10px] font-hero tracking-widest uppercase rounded mb-4 border border-red-900/30">
                                        {item.type}
                                    </span>
                                    <p className="font-body text-[#aeb6bf] text-sm leading-relaxed whitespace-pre-line">
                                        {formatText(item.desc)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PvpForgedInFlames;
