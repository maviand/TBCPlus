import React, { useState } from 'react';
import { Sword, Shield, Target, Crown, Skull, Zap, Map, Flag, Users, Trophy, Flame, Feather, Eye, Anchor, Wind } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';
import WowTooltip from './WowTooltip';

// --- SUB-COMPONENTS ---

const RatingCalculator = () => {
    const [currentRating, setCurrentRating] = useState(1500);
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);

    // Mock Calculation Logic
    const projectedRating = Math.max(0, currentRating + (wins * 15) - (losses * 12));
    const points = Math.floor(100 + (projectedRating * 0.2)); // Very rough approximation

    return (
        <div className="bg-[#111] border border-white/10 rounded-lg p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-[#c29c55] font-hero text-lg uppercase tracking-widest mb-4 flex items-center gap-2">
                <Crown size={16} /> Rating Predictor
            </h3>

            <div className="space-y-4 mb-6">
                <div>
                    <label className="text-xs text-stone-500 uppercase flex justify-between mb-1">
                        Current Rating <span>{currentRating}</span>
                    </label>
                    <input
                        type="range" min="0" max="3000" step="10"
                        value={currentRating} onChange={(e) => setCurrentRating(parseInt(e.target.value))}
                        className="w-full accent-amber-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs text-stone-500 uppercase flex justify-between mb-1">
                            Wins <span>{wins}</span>
                        </label>
                        <input
                            type="range" min="0" max="20"
                            value={wins} onChange={(e) => setWins(parseInt(e.target.value))}
                            className="w-full accent-green-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                    <div>
                        <label className="text-xs text-stone-500 uppercase flex justify-between mb-1">
                            Losses <span>{losses}</span>
                        </label>
                        <input
                            type="range" min="0" max="20"
                            value={losses} onChange={(e) => setLosses(parseInt(e.target.value))}
                            className="w-full accent-red-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-black/40 rounded p-4 border border-white/5 flex justify-between items-center">
                <div>
                    <div className="text-[10px] text-stone-500 uppercase">Projected Rating</div>
                    <div className={`text-2xl font-bold ${projectedRating > currentRating ? 'text-green-400' : projectedRating < currentRating ? 'text-red-400' : 'text-stone-300'}`}>
                        {projectedRating}
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] text-stone-500 uppercase">Est. Weekly Points</div>
                    <div className="text-amber-500 font-bold">{points}</div>
                </div>
            </div>
        </div>
    );
};

const PowerupGuide = () => {
    const powerups = [
        { name: 'Berserking', icon: '⚔️', color: 'text-red-500', desc: 'Increases all damage dealt by 30% and damage taken by 10%.', loc: 'Huts / Center' },
        { name: 'Restoration', icon: '🌿', color: 'text-green-500', desc: 'Restores 100% of Health and Mana over 10 seconds.', loc: 'Side Roads' },
        { name: 'Speed', icon: '⚡', color: 'text-yellow-400', desc: 'Increases movement speed by 100% for 10 seconds.', loc: 'Tunnels' },
        { name: 'Shadow Sight', icon: '👁️', color: 'text-purple-500', desc: 'See Stealth and Invisibility units for 30 seconds.', loc: 'Graveyards' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {powerups.map((p, i) => (
                <div key={i} className="bg-[#111] p-3 rounded border border-white/5 flex flex-col gap-2 group hover:border-white/20 transition-colors">
                    <div className="flex items-center justify-between">
                        <span className="text-2xl">{p.icon}</span>
                        <span className={`text-[10px] uppercase font-bold ${p.color}`}>{p.name}</span>
                    </div>
                    <p className="text-[10px] text-stone-400 leading-tight">{p.desc}</p>
                    <div className="mt-auto pt-2 border-t border-white/5 text-[9px] text-stone-600 uppercase">
                        Spawn: {p.loc}
                    </div>
                </div>
            ))}
        </div>
    );
};

const TheTheaterOfWar = () => {
    const [activeTab, setActiveTab] = useState('battlegrounds'); // battlegrounds | arena
    const [zoomedImage, setZoomedImage] = useState(null);

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

    const battlegrounds = [
        {
            id: 'azshara',
            name: 'Azshara Crater',
            sub: 'The War for the Ancients',
            type: '40v40 Epic Battleground (MOBA-Style)',
            location: 'The northern cliffs of Azshara (Kalimdor)',
            image: 'https://i.imgur.com/pKSaDj7.jpeg',
            lore: 'The Alliance (Night Elves) seeks to secure the ancient Highborne ruins to prevent the Horde (Orcs/Goblins) from strip-mining the arcane crystals for their war machines.',
            factions: [
                { name: 'Alliance: The Sentinel Vanguard', leader: 'General Feathermoon', focus: 'Purification & Restoration' },
                { name: 'Horde: The Bilgewater Battalion', leader: "Trade Prince Gallywix's Enforcers", focus: 'Industrialization & Fel-Tech' }
            ],
            mechanics: [
                { title: 'The Three Lanes', desc: 'Top (Cliffs), Mid (Valley), Bot (Ruins). Each favors different playstyles.' },
                { title: 'Forward Bunkers', desc: 'Capturing a Bunker pushes your graveyard forward. Destroy "Shield Generators" to attack the General.' },
                { title: 'The Super Weapon', desc: 'Summon an Ancient of War (Alliance) or Fel-Reaver Prototype (Horde) by collecting resources.' }
            ],
            loot: [
                {
                    name: "Standard of the Crater",
                    quality: "epic",
                    ilvl: 141,
                    slot: "Trinket",
                    stats: ["+45 Stamina"],
                    effects: ["Use: Places a standard that increases the maximum health of all party members within 30 yards by 10% for 2 min. (5 min cooldown)"]
                },
                {
                    name: "Gallywix's Blasting Stick",
                    quality: "epic",
                    ilvl: 141,
                    slot: "Ranged",
                    type: "Gun",
                    damage: "254 - 395",
                    speed: 2.90,
                    dps: 111.9,
                    stats: ["+35 Agility", "+40 Stamina"],
                    effects: ["Equip: Increases critical strike rating by 24."]
                },
                {
                    name: "Feathermoon's Longbow",
                    quality: "epic",
                    ilvl: 141,
                    slot: "Ranged",
                    type: "Bow",
                    damage: "254 - 395",
                    speed: 2.90,
                    dps: 111.9,
                    stats: ["+35 Agility", "+40 Stamina"],
                    effects: ["Equip: Increases attack power by 50."]
                }
            ],
            rewardsText: "Mounts: [Armored Battle-Mechanostrider] (Horde) / [Swift War-Saber] (Alliance)"
        },
        {
            id: 'hellfire',
            name: 'Hellfire Citadel Siege',
            sub: 'The Bulwark Breaker',
            type: '40v40 Assault/Defend (2 Rounds)',
            location: 'The Ramparts and the Path of Glory (Hellfire Peninsula)',
            image: 'https://i.imgur.com/wJMtCKY.jpeg',
            lore: 'A training exercise gone live. The factions simulate a Legion assault to prepare for the Sunwell.',
            mechanics: [
                { title: 'Phase 1: Path of Glory', desc: 'Attackers escort Fel-Siege Engines. Defenders use turrets and Sapper Squads.' },
                { title: 'Phase 2: The Courtyard', desc: 'Capture "Reinforcement Beacons" to reduce respawn timers.' },
                { title: 'Phase 3: The Throne Room', desc: 'Defeat Grand Warlord Kresh. He gains +10% damage every minute (Sudden Death).' }
            ],
            loot: [
                {
                    name: "Siege-Breaker's Shield",
                    quality: "epic",
                    ilvl: 141,
                    slot: "Off Hand",
                    type: "Shield",
                    armor: 6200,
                    stats: ["+55 Stamina", "+30 Resilience Rating"],
                    effects: ["Equip: Increases block value by 45.", "Equip: When you block, you deal 150 Fire damage to the attacker."]
                },
                {
                    name: "Blueprint: Fel-Cannon",
                    quality: "rare",
                    slot: "Recipe",
                    type: "Engineering",
                    description: "Allows the creation of a deployable Fel-Cannon for World PvP."
                }
            ]
        },
        {
            id: 'bloodring',
            name: 'The Blood Ring',
            sub: 'There Can Be Only One',
            type: '1v10 Free-For-All Deathmatch (Battle Royale)',
            location: 'A secluded island off the coast of Farahlon (Netherstorm)',
            image: 'https://i.imgur.com/uBKroui.jpeg',
            lore: 'An illegal fighting ring run by the Ethereals. No rules, no honor, just gambling.',
            mechanics: [
                { title: 'The Shrink', desc: 'Playable area burns with Netherfire, forcing players closer every 2 minutes.' },
                { title: 'No Healing', desc: 'Healing reduced by 100%. Loot "Blood Orbs" from dead players to restore HP.' },
                { title: 'The Dampening', desc: 'Stealth lasts max 10s. No permanent hiding.' }
            ],
            loot: [
                {
                    name: "Tabard of the Victor",
                    quality: "epic",
                    slot: "Tabard",
                    effects: ["Use: Flexing causes your character to bleed visually."]
                },
                {
                    name: "Bag of Dirty Gold",
                    quality: "rare",
                    slot: "Container",
                    description: "Contains 500-1000g. The only way to make gold in PvP."
                }
            ],
            rewardsText: "Title: The Blood Champion (Lasts 1 week)"
        },
        {
            id: 'zangarmarsh',
            name: 'Zangarmarsh Trenches',
            sub: 'The Fog of War',
            type: '15v15 Control Point (King of the Hill)',
            location: 'The Dead Mire (Zangarmarsh)',
            image: 'https://i.imgur.com/6aSPi7p.jpeg',
            lore: 'The Naga are pumping the water out. Both factions fight for control of the steam pumps.',
            mechanics: [
                { title: 'Visibility', desc: '"Spore Fog" limits view distance to 30 yards. Ranged classes must play close.' },
                { title: 'Water Level', desc: 'Holding the pump drains water. Low water = Speed buff highways. High water = Swimming slowed.' },
                { title: 'Ambush Points', desc: 'Spore Mounds allow instant vanish for ambushers.' }
            ],
            loot: [
                {
                    name: "Trench-Coat of the Marsh Walker",
                    quality: "rare",
                    slot: "Chest",
                    type: "Cosmetic",
                    stats: [],
                    effects: ["Equip: Looking cool in the rain."]
                },
                {
                    name: "Spore Sac",
                    quality: "epic",
                    ilvl: 141,
                    slot: "Trinket",
                    stats: ["+45 Stamina"],
                    effects: ["Use: Creates a 10-yard smoke bomb cloud that breaks targeting for all inside. (3 Min CD)"]
                }
            ]
        },
        {
            id: 'nagrand',
            name: 'Nagrand Sky-Battles',
            sub: 'Ace Combat: Outland',
            type: '10v10 Aerial Combat',
            location: 'The skies above Oshu\'gun (Nagrand)',
            image: 'https://i.imgur.com/SkvVuAM.jpeg',
            lore: 'The Dragonmaw Orcs challenge the Wildhammer Dwarves for air superiority.',
            mechanics: [
                { title: 'The Mounts', desc: 'Everyone flies a Combat Nether Drake. Abilities: Fireball, Barrel Roll, Afterburner, Grapple Chain.' },
                { title: 'The Objective', desc: 'Team Deathmatch (First to 50) OR Hold the Floating Relic.' },
                { title: 'The Fall', desc: '0 HP = Dismount. Use Parachute to land on islands or fall to your death.' }
            ],
            loot: [
                {
                    name: "Pilot's Insignia",
                    quality: "epic",
                    ilvl: 141,
                    slot: "Finger",
                    stats: ["+30 Stamina", "+25 Resilence Rating"],
                    effects: ["Equip: Increases mount speed by 10% (Does not stack)."]
                },
                {
                    name: "Armored Nether Drake",
                    quality: "epic",
                    slot: "Mount",
                    type: "Flying",
                    description: "A fully armored PvP version of the Gladiator mount."
                }
            ]
        },
        {
            id: 'fissure',
            name: 'The Fissure of Souls',
            sub: 'The Strategic Siege',
            type: '10v10 Siege Battleground (MOBA)',
            location: 'Deep within the Twisting Nether',
            image: 'https://i.imgur.com/PkbsqAk.jpeg',
            lore: 'A shard of reality where kill counts mean nothing without territory.',
            mechanics: [
                { title: 'The Lanes', desc: 'Three lanes (Trenches) recessed into the earth. Farming minions blocks line of sight.' },
                { title: 'The Jungle', desc: 'The Ridge offers high ground. Defeat the Pit of Dimensius to become the Avatar (+100% Dmg, -2% HP/sec).' },
                { title: 'Siege Mechanics', desc: 'Towers take 99% reduced damage without minions. Towers apply armor reduction.' }
            ],
            loot: [
                {
                    name: "Essence of the Void",
                    quality: "legendary",
                    slot: "Buff",
                    description: "Dropped by Dimensius. Grants Avatar form but drains life.",
                    effects: ["+100% Damage", "+50% Haste", "-2% HP per sec"]
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-red-900 selection:text-red-100 overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
      `}</style>

            <UnifiedHeader
                icon="https://i.imgur.com/AvacfWx.jpeg"
                background="https://i.imgur.com/tFR8uAV.jpeg"
                section="Player vs Player"
                sub="The Field of Strife"
                title="Theater of War"
                quote="Peace is a lie. There is only passion. Through passion, we gain strength."
            />

            {/* --- NAVIGATION --- */}
            <div className="container mx-auto px-4 mt-8 mb-12 border-b border-red-900/30 flex justify-center gap-8">
                <button onClick={() => setActiveTab('battlegrounds')} className={`pb-4 px-4 font-hero uppercase tracking-widest text-sm transition-all ${activeTab === 'battlegrounds' ? 'text-red-500 border-b-2 border-red-500' : 'text-stone-500 hover:text-stone-300'}`}>
                    Battlefields
                </button>
                <button onClick={() => setActiveTab('arena')} className={`pb-4 px-4 font-hero uppercase tracking-widest text-sm transition-all ${activeTab === 'arena' ? 'text-amber-500 border-b-2 border-amber-500' : 'text-stone-500 hover:text-stone-300'}`}>
                    Gladiator Sanctum
                </button>
            </div>

            <div className="container mx-auto px-4 pb-24 animate-fade-in">

                {/* --- BATTLEFIELDS TAB --- */}
                {activeTab === 'battlegrounds' && (
                    <div className="space-y-24">
                        {battlegrounds.map((bg, index) => (
                            <div key={bg.id} className="relative group">
                                {/* BG Container */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-white/5 pb-16">

                                    {/* Left: Visuals & Lore */}
                                    <div className="lg:col-span-5 relative">
                                        <div
                                            className="aspect-video rounded-lg overflow-hidden border border-red-900/30 relative cursor-pointer group-hover:border-red-500/50 transition-colors shadow-2xl"
                                            onClick={() => setZoomedImage(bg.image)}
                                        >
                                            <img src={bg.image} alt={bg.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                                            {/* Type Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-black/80 backdrop-blur border border-red-500/30 text-red-100 px-3 py-1 rounded text-[10px] font-hero tracking-widest uppercase">
                                                    {bg.type}
                                                </span>
                                            </div>

                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                <Eye className="w-12 h-12 text-white/50 drop-shadow-lg" />
                                            </div>
                                        </div>

                                        <div className="mt-6 space-y-4">
                                            <div>
                                                <h4 className="text-red-500 font-hero text-xs uppercase tracking-widest mb-1">Location</h4>
                                                <p className="text-stone-400 text-sm">{bg.location}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-red-500 font-hero text-xs uppercase tracking-widest mb-1">Mission Brief</h4>
                                                <p className="text-stone-300 text-sm italic leading-relaxed">"{bg.lore}"</p>
                                            </div>
                                            {bg.factions && (
                                                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/5">
                                                    {bg.factions.map((fac, i) => (
                                                        <div key={i}>
                                                            <div className={`text-xs font-bold font-hero uppercase mb-1 ${i === 0 ? 'text-blue-400' : 'text-red-400'}`}>
                                                                {fac.name}
                                                            </div>
                                                            <div className="text-[10px] text-stone-500">{fac.leader}</div>
                                                            <div className="text-[10px] text-stone-600 mt-1">{fac.focus}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right: Content */}
                                    <div className="lg:col-span-7">
                                        <div className="flex items-end gap-4 mb-6">
                                            <h2 className="text-4xl font-hero text-[#c29c55] leading-none">{bg.name}</h2>
                                            <span className="text-stone-500 font-hero text-sm uppercase tracking-widest pb-1 border-b border-stone-800 flex-grow">{bg.sub}</span>
                                        </div>

                                        {/* Mechanics Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                            {bg.mechanics.map((mech, i) => (
                                                <div key={i} className="bg-[#0f0f0f] p-4 rounded border border-white/5 hover:border-red-500/30 transition-colors">
                                                    <h5 className="text-red-400 font-hero text-xs uppercase mb-2">{mech.title}</h5>
                                                    <p className="text-stone-400 text-xs leading-relaxed">{mech.desc}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Loot Section */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Trophy className="w-4 h-4 text-[#c29c55]" />
                                                <h4 className="font-hero text-[#c29c55] text-sm uppercase tracking-widest">Notable Rewards</h4>
                                            </div>

                                            <div className="flex flex-wrap gap-4">
                                                {bg.loot.map((item, i) => (
                                                    <div key={i} className="group/item relative">
                                                        {/* Tooltip Wrapper */}
                                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                                                            <WowTooltip item={item} />
                                                        </div>

                                                        <div className={`px-4 py-2 bg-black border rounded cursor-help transition-all flex items-center gap-2
                                                            ${item.quality === 'legendary' ? 'border-[#ff8000]/50 hover:border-[#ff8000] text-[#ff8000]' :
                                                                item.quality === 'epic' ? 'border-[#a335ee]/50 hover:border-[#a335ee] text-[#a335ee]' :
                                                                    'border-[#0070dd]/50 hover:border-[#0070dd] text-[#0070dd]'}
                                                        `}>
                                                            <span className="font-bold text-xs">{item.name}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {bg.rewardsText && (
                                                <p className="mt-4 text-xs text-stone-500">{bg.rewardsText}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Global Reward Footer */}
                        <div className="bg-[#0a0a0a] border border-[#c29c55]/30 p-8 rounded text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c29c55]/5 to-transparent"></div>
                            <h3 className="font-hero text-2xl text-[#c29c55] mb-2 relative z-10">Global Reward: The Battlemaster's Cache</h3>
                            <p className="text-stone-400 text-sm mb-6 relative z-10">Completing the "Daily Call to Arms" for any of these modes rewards a Cache containing:</p>
                            <div className="flex justify-center gap-8 relative z-10">
                                <div className="text-center">
                                    <div className="text-white font-bold text-lg">200</div>
                                    <div className="text-stone-500 text-xs uppercase tracking-widest">Arena Points</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[#a335ee] font-bold text-lg">Mark of the Veteran</div>
                                    <div className="text-stone-500 text-xs uppercase tracking-widest">Tier 5 Catch-up</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[#0070dd] font-bold text-lg">Design: Gem of Resilience</div>
                                    <div className="text-stone-500 text-xs uppercase tracking-widest">Rare Jewelcrafting</div>
                                </div>
                            </div>
                        </div>

                        {/* Powerups Section */}
                        <div className="border-t border-white/5 pt-12">
                            <h3 className="text-[#c29c55] font-hero text-xl uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Zap size={20} /> Battlefield Enhancements
                            </h3>
                            <PowerupGuide />
                        </div>
                    </div>
                )}


                {/* --- ARENA TAB (Legacy/Sanctum) --- */}
                {activeTab === 'arena' && (
                    <div className="space-y-16 py-12">
                        {/* Header */}
                        <div className="text-center">
                            <Crown className="w-20 h-20 text-amber-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                            <h2 className="font-hero text-5xl text-[#c29c55] mb-4">The Gladiator's Sanctum</h2>
                            <p className="text-amber-500/80 font-hero tracking-[0.2em] uppercase text-sm">Season 1: The Burning Crusade</p>
                        </div>

                        {/* Philosophy */}
                        <div className="max-w-4xl mx-auto bg-[#1a120b] border border-amber-900/40 p-8 rounded relative shadow-2xl">
                            <h4 className="font-hero text-amber-500 text-lg uppercase mb-4 border-b border-amber-900/30 pb-2">Ranking Reimagined: Solo Shuffle</h4>
                            <div className="text-stone-400 text-sm leading-relaxed space-y-4">
                                {formatText(`**The Old Way:** In 2007, getting Gladiator meant you had to play at specific times, with specific people, dodging "title sitters" and wintraders. It was a logistical nightmare.
                                
                                **The New Way:** TBC Plus introduces **Solo Shuffle**. You can queue solo for 3v3 Arena. The system matches you with 5 other players, and you play 6 rounds, shuffling teams each time. Your personal performance dictates your rating. If you go 6-0, you rise. If you go 0-6, you fall. No teams to manage, no scheduling conflicts. Just you and your skill.`)}
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* The Blood Pit */}
                            <div className="bg-[#0c0a09] border border-amber-900/20 p-6 rounded-lg group hover:border-amber-600 transition-colors">
                                <img src="https://i.imgur.com/uBKroui.jpeg" alt="Duel" className="w-full h-40 object-cover rounded mb-4 opacity-50 group-hover:opacity-80 transition-opacity" />
                                <div className="flex items-center gap-3 mb-2">
                                    <Sword className="text-amber-600 w-5 h-5" />
                                    <h3 className="text-white font-hero text-xl">The Blood Pit</h3>
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
                                    <h3 className="text-white font-hero text-xl">Training Grounds</h3>
                                </div>
                                <p className="text-stone-500 text-xs leading-relaxed">
                                    Test your DPS on "Boss-Level" dummies. **Engineers** can deploy custom dummies with specific resistances. Beat the high score to earn titles.
                                </p>
                            </div>

                            {/* Spectator Hall */}
                            <div className="bg-[#0c0a09] border border-amber-900/20 p-6 rounded-lg group hover:border-amber-600 transition-colors">
                                <img src="https://i.imgur.com/gBM49rp.jpeg" alt="Spectate" className="w-full h-40 object-cover rounded mb-4 opacity-50 group-hover:opacity-80 transition-opacity" />
                                <div className="flex items-center gap-3 mb-2">
                                    <Users className="text-amber-600 w-5 h-5" />
                                    <h3 className="text-white font-hero text-xl">Spectator Hall</h3>
                                </div>
                                <p className="text-stone-500 text-xs leading-relaxed">
                                    Watch high-rated matches live. Analyze the best players with full UI tools—see their cooldowns, talents, and gear in real-time.
                                </p>
                            </div>

                            {/* The Bounty Board (New) */}
                            <div className="bg-[#0c0a09] border border-amber-900/20 p-6 rounded-lg group hover:border-amber-600 transition-colors">
                                <img src="https://i.imgur.com/pang6cl.jpeg" alt="Bounty" className="w-full h-40 object-cover rounded mb-4 opacity-50 group-hover:opacity-80 transition-opacity" />
                                <div className="flex items-center gap-3 mb-2">
                                    <Skull className="text-amber-600 w-5 h-5" />
                                    <h3 className="text-white font-hero text-xl">The Bounty Board</h3>
                                </div>
                                <p className="text-stone-500 text-xs leading-relaxed">
                                    **Economy Integration:** Place gold bounties on enemy players. High Value Targets appear on the **World Map**. Killing an **Iron Soul** player yields triple rewards.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-12">
                            <RatingCalculator />
                        </div>

                        <div className="text-center pt-8">
                            <button className="px-10 py-4 bg-amber-700 hover:bg-amber-600 text-white rounded font-hero uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)]">
                                View Season 1 Leaderboards
                            </button>
                        </div>
                    </div>
                )}

                {/* --- IMAGE ZOOM MODAL --- */}
                {zoomedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in backdrop-blur-sm"
                        onClick={() => setZoomedImage(null)}
                    >
                        <div className="relative max-w-7xl max-h-[90vh]">
                            <img
                                src={zoomedImage}
                                alt="Zoomed View"
                                className="max-w-full max-h-[90vh] rounded border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)]"
                            />
                            <p className="text-center text-stone-500 mt-4 font-hero text-sm uppercase tracking-widest">Click anywhere to close</p>
                        </div>
                    </div>
                )}
            </div >
        </div >
    );
};

export default TheTheaterOfWar;
