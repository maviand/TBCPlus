import React, { useState } from 'react';
import {
    Sword, Shield, Skull, Map, Clock, Zap, Crown,
    AlertTriangle, Eye, Flame, Ghost, Target,
    ChevronRight, BookOpen, Star, Anchor, Lock
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheVanguard = () => {
    const [activeTab, setActiveTab] = useState('raids'); // raids | dungeons | world
    const [selectedRaid, setSelectedRaid] = useState('karazhan');

    // Helper for formatting
    const formatText = (text) => {
        if (!text) return null;
        const lines = text.split('\n');
        return lines.map((line, lineIndex) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
                <React.Fragment key={lineIndex}>
                    {parts.map((part, partIndex) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={partIndex} className="text-amber-500 font-cinzel">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                    })}
                    {lineIndex < lines.length - 1 && <br />}
                </React.Fragment>
            );
        });
    };

    const raids = {
        karazhan: {
            title: "Karazhan: The Master's Key",
            tier: "Tier 4",
            size: "10 Player",
            icon: <Ghost className="w-6 h-6" />,
            desc: "The tower has awakened. Medivh's echoes are no longer passive; they are actively testing those who dare enter. The 'Chess Event' is no longer a game—it is a war.",
            bosses: [
                {
                    name: "Attumen the Huntsman",
                    title: "The First Rider",
                    mechanic: "**Midnight's Frenzy:** At 50% HP, Midnight becomes un-tankable and fixates on random players, forcing kiting throughout the stables. **Intangible Presence:** Attumen curses healers, reducing healing done by 100% until they deal damage to a ghost add."
                },
                {
                    name: "Moroes",
                    title: "The Tower Steward",
                    mechanic: "**The Dinner Party:** Moroes now invites 6 guests (up from 4). **Garrote:** Now applies a 'Bleeding Out' debuff that increases physical damage taken by 10% per stack. Must be cleansed by physically interacting with 'Guest Cleanse' objects around the room."
                },
                {
                    name: "The Opera Event",
                    title: "A Night at the Theater",
                    mechanic: "**New Play - 'The Arthas Tragedy':** Players re-enact the Culling of Stratholme. One tank plays Arthas, one healer plays Uther/Jaina (trying to stop him). Dps must kill undead citizens before they turn into elites."
                },
                {
                    name: "The Chess Event",
                    title: "Reworked: Tower Defense",
                    mechanic: "**No Vehicles:** Players fight *alongside* the pieces. You must defend your King from waves of cheating pieces (Exploding Pawns, Assassin Bishops). Players gain buffs based on the piece they stand near (Rook = Armor, Queen = Haste)."
                },
                {
                    name: "Prince Malchezaar",
                    title: "The Eredar Lord",
                    mechanic: "**Dimensional Rift:** In Phase 3, the platform shatters. Players must jump between floating debris using temporary gravity-boots to dodging Infernals."
                }
            ]
        },
        gruul: {
            title: "Gruul's Lair",
            tier: "Tier 4",
            size: "25 Player",
            icon: <Skull className="w-6 h-6" />,
            desc: "The Dragonkiller has grown. His lair is now a vertical encounter where players must climb the spires of Blade's Edge during the fight.",
            bosses: [
                {
                    name: "High King Maulgar",
                    title: "Lord of the Ogres",
                    mechanic: "**Council Mechanics:** The 4 adds must be killed simultaneously (within 10s window). If one dies early, Maulgar enrages, gaining 500% damage and wiping the raid. Requires perfect split-dps coordination."
                },
                {
                    name: "Gruul the Dragonkiller",
                    title: "Apex Predator",
                    mechanic: "**Growth:** Gruul grows physically larger every 10%. By 20%, he is so large he breaks the ceiling, causing falling debris (AOE). **Shatter:** Now creates permanent terrain fissures that block line-of-sight, which must be used to hide from his 'Gronn Roar'."
                }
            ]
        },
        magtheridon: {
            title: "Magtheridon's Lair",
            tier: "Tier 4",
            size: "20 Player",
            icon: <Flame className="w-6 h-6" />,
            desc: "The Pit Lord is bound by 5 cubes. In TBC+, the Cube Clickers are not just clicking—they are fighting a mental battle with the Legion.",
            bosses: [
                {
                    name: "Magtheridon",
                    title: "The Forgotten One",
                    mechanic: "**The Cubes:** Clicking a cube teleports the player into the 'Nether Realm' for 10s. They must defeat a scaling demon add inside to maintain the seal. If they fail, the blast goes off. **Quake:** The entire room tilts, sliding players towards pools of fel lava."
                }
            ]
        },
        ssc: {
            title: "Serpentshrine Cavern",
            tier: "Tier 5",
            size: "25 Player",
            icon: <Anchor className="w-6 h-6" />,
            desc: "Lady Vashj controls the waters of Outland. The raid now features underwater combat mechanics (with swim speed buffs) and 3D movement phases.",
            bosses: [
                {
                    name: "Lady Vashj",
                    title: "Coilfang Matron",
                    mechanic: "**Tainted Cores:** The passing mechanic remains, but the 'Strider' adds now fear players. **Phase 4 (New):** The water rises. The final 10% is fought underwater with 300% swim speed, dodging electrical currents."
                }
            ]
        },
        tk: {
            title: "The Eye (Tempest Keep)",
            tier: "Tier 5",
            size: "25 Player",
            icon: <Zap className="w-6 h-6" />,
            desc: "Kael'thas Sunstrider's fortress. The Legendary Weapons are now permanent loots that drop *before* the final phase and are equipped for the rest of the fight.",
            bosses: [
                {
                    name: "Kael'thas Sunstrider",
                    title: "Sun King",
                    mechanic: "**Gravity Lapse:** Now completely inverts controls (Up is Down). **Phoenix Rebirth:** The Phoenixes leave behind an egg that heals Kael'thas if not destroyed. **Pyroblast:** Must be reflected by the Phase Staff, not just interrupted."
                }
            ]
        }
    };

    const dungeons = [
        {
            name: "Hellfire Ramparts (H+)",
            affix: "Legion's March",
            desc: "Fel Orcs spawn continuously from portals until bosses are defeated. Speed is key.",
            loot: "Primal Nether, Tier 3.5 Token"
        },
        {
            name: "The Blood Furnace (H+)",
            affix: "Sanguine Pools",
            desc: "Enemies leave pools of blood that heal other enemies and damage players.",
            loot: "Badge of Justice x4"
        },
        {
            name: "Slave Pens (H+)",
            affix: "Rising Weeds",
            desc: "Entangling roots randomly spawn, trapping players until destroyed by allies.",
            loot: "Unidentified Plant Parts (Rep Items)"
        },
        {
            name: "Mana Tombs (H+)",
            affix: "Arcane Detonation",
            desc: "Mana-users explode upon death. Melee must move out or die.",
            loot: "Ethereal Key (Tradeable)"
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-red-900 selection:text-white">
            <UnifiedHeader
                icon="https://i.imgur.com/8t3X6qI.jpeg"
                background="https://i.imgur.com/lM8m8Dk.jpeg"
                section="Adventure Guide"
                sub="Raids & Dungeons"
                title="The Vanguard"
                quote="The great threats of Outland have evolved. Adapt or perish."
            />

            <div className="container mx-auto px-4 py-8">
                {/* --- NAVIGATION --- */}
                <div className="flex justify-center gap-8 mb-12 border-b border-red-900/30">
                    <button
                        onClick={() => setActiveTab('raids')}
                        className={`pb-4 px-6 font-cinzel text-lg tracking-widest transition-all ${activeTab === 'raids' ? 'text-red-500 border-b-2 border-red-500' : 'text-stone-500 hover:text-stone-300'}`}
                    >
                        Raid Journal
                    </button>
                    <button
                        onClick={() => setActiveTab('dungeons')}
                        className={`pb-4 px-6 font-cinzel text-lg tracking-widest transition-all ${activeTab === 'dungeons' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-stone-500 hover:text-stone-300'}`}
                    >
                        Heroic+ Dungeons
                    </button>
                </div>

                {/* --- RAIDS TAB --- */}
                {activeTab === 'raids' && (
                    <div className="animate-fade-in flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <aside className="lg:w-1/4 space-y-4">
                            {Object.entries(raids).map(([key, raid]) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedRaid(key)}
                                    className={`w-full text-left p-4 rounded border transition-all ${selectedRaid === key
                                        ? 'bg-red-900/20 border-red-500 text-white'
                                        : 'bg-[#1a1a1a] border-stone-800 text-stone-500 hover:border-stone-600'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded bg-black/50 ${selectedRaid === key ? 'text-red-400' : 'text-stone-600'}`}>
                                            {raid.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-cinzel font-bold">{raid.title}</h3>
                                            <span className="text-xs uppercase tracking-wider opacity-60">{raid.tier} - {raid.size}</span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </aside>

                        {/* Content */}
                        <main className="lg:w-3/4 bg-[#111] border border-stone-800 p-8 rounded-lg">
                            <h2 className="font-cinzel text-3xl text-red-500 mb-2">{raids[selectedRaid].title}</h2>
                            <p className="font-body text-stone-400 mb-8 italic">{raids[selectedRaid].desc}</p>

                            <h3 className="font-cinzel text-xl text-white mb-6 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-500" /> Major Mechanical Changes
                            </h3>

                            <div className="space-y-6">
                                {raids[selectedRaid].bosses.map((boss, idx) => (
                                    <div key={idx} className="bg-[#1a1a1a] p-6 rounded border-l-4 border-red-900">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-hero text-lg text-red-200">{boss.name}</h4>
                                            <span className="text-xs text-stone-500 uppercase">{boss.title}</span>
                                        </div>
                                        <p className="text-sm text-stone-300 leading-relaxed">
                                            {formatText(boss.mechanic)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </main>
                    </div>
                )}

                {/* --- DUNGEONS TAB --- */}
                {activeTab === 'dungeons' && (
                    <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-6">
                        {dungeons.map((dungeon, idx) => (
                            <div key={idx} className="bg-[#111] border border-blue-900/30 p-6 rounded hover:border-blue-500/50 transition-colors">
                                <h3 className="font-cinzel text-xl text-blue-400 mb-2">{dungeon.name}</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xs bg-blue-900/40 text-blue-200 px-2 py-1 rounded border border-blue-900">
                                        Affix: {dungeon.affix}
                                    </span>
                                </div>
                                <p className="text-stone-400 text-sm mb-4">{dungeon.desc}</p>
                                <div className="text-xs text-stone-500 border-t border-stone-800 pt-3">
                                    <strong className="text-stone-300">Key Loot:</strong> {dungeon.loot}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TheVanguard;
