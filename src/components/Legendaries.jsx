import React, { useState } from 'react';
import { BookOpen, Medal, Gem, Crown, Ghost, Zap, Leaf, Shield, Sword, Skull, Crosshair, Flame, Star, PawPrint } from 'lucide-react';

const Legendaries = () => {
    const [activeLegendary, setActiveLegendary] = useState('vessel');

    // Helper function for bold text formatting
    const formatText = (text) => {
        if (!text) return null;
        const lines = text.split('\n');
        return lines.map((line, lineIndex) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            const content = parts.map((part, partIndex) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={partIndex} className="text-orange-400 font-cinzel tracking-wide">{part.slice(2, -2)}</strong>;
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

    // Reusable WoW Tooltip Component
    const WowTooltip = ({ item, phaseLabel }) => {
        const qualityColor = item.quality === 'legendary' ? 'text-[#ff8000]' : 'text-[#a335ee]';
        const borderColor = 'border-[#a3a3a3]';

        return (
            <div className={`bg-[#070710] border ${borderColor} rounded-[5px] p-2 shadow-2xl max-w-[350px] w-full font-sans text-[12px] leading-snug relative text-white`}>
                <div className="flex justify-between items-start mb-0.5">
                    <h3 className={`font-bold text-[14px] ${qualityColor} flex-1 mr-2`}>
                        {item.name}
                    </h3>
                    {phaseLabel && <span className="text-white text-[12px] whitespace-nowrap pt-0.5">{phaseLabel}</span>}
                </div>
                <div className="text-[#ffd100] mb-0.5">Item Level {item.ilvl}</div>
                <div className="mb-0.5">Binds when picked up</div>
                {item.unique && <div className="mb-0.5">Unique</div>}
                {item.slot && (
                    <div className="flex justify-between mb-0.5">
                        <span>{item.slot}</span>
                        {item.type && <span>{item.type}</span>}
                    </div>
                )}
                {item.damage && (
                    <div className="flex justify-between mb-0.5">
                        <span>{item.damage} Damage</span>
                        <span>Speed {item.speed}</span>
                    </div>
                )}
                {item.dps && <div className="mb-0.5">({item.dps} damage per second)</div>}
                {item.stats && item.stats.map((stat, i) => (
                    <div key={i} className="mb-0.5">{stat}</div>
                ))}
                {item.durability && <div className="mb-0.5">Durability {item.durability} / {item.durability}</div>}
                {item.classes && (
                    <div className="mb-0.5">Classes: <span className="text-white">{item.classes}</span></div>
                )}
                <div className="mb-2">Requires Level 70</div>
                <div className="space-y-1">
                    {item.effects && item.effects.map((effect, i) => {
                        const isFlavor = effect.startsWith('"');
                        const isSetHeader = effect.startsWith('The Twin Blades');
                        const isSetBonus = effect.startsWith('(2) Set');
                        const isSetItem = effect.startsWith('Warglaive of');

                        if (isFlavor) return <div key={i} className="text-[#ffd100] mt-2 italic text-[11px] text-center">"{effect.replace(/"/g, '')}"</div>;
                        if (isSetHeader) return <div key={i} className="text-[#ffd100] mt-2 font-bold">{effect}</div>;
                        if (isSetItem) return <div key={i} className="text-[#9d9d9d] ml-2">{effect}</div>;

                        if (isSetBonus) {
                            const bonusText = effect.replace('(2) Set : ', '');
                            return (
                                <div key={i} className="text-[#9d9d9d] mt-1">
                                    (2) Set : <span className="text-[#1eff00]">{bonusText}</span>
                                </div>
                            );
                        }

                        const parts = effect.split(':');
                        const label = parts[0];
                        const value = parts.slice(1).join(':');
                        const isTrigger = ['Equip', 'Use', 'Chance on Hit'].includes(label);

                        return (
                            <div key={i} className="text-[#1eff00]">
                                {isTrigger ? <><span className="font-normal text-white">{label}:</span>{value}</> : effect}
                            </div>
                        );
                    })}
                </div>
                {item.sellPrice && (
                    <div className="mt-3 flex items-center gap-1 text-[11px] text-white justify-end">
                        Sell Price:
                        <span className="flex items-center"><span className="text-white">{item.sellPrice.g}</span><div className="w-2.5 h-2.5 rounded-full bg-[#ffd700] ml-0.5 mr-1 border border-[#b8860b]"></div></span>
                        <span className="flex items-center"><span className="text-white">{item.sellPrice.s}</span><div className="w-2.5 h-2.5 rounded-full bg-[#c0c0c0] ml-0.5 mr-1 border border-[#808080]"></div></span>
                        <span className="flex items-center"><span className="text-white">{item.sellPrice.c}</span><div className="w-2.5 h-2.5 rounded-full bg-[#b87333] ml-0.5 border border-[#8b4513]"></div></span>
                    </div>
                )}
            </div>
        );
    };

    // --- LEGENDARY DATA ---
    const legendaries = [
        {
            id: 'vessel',
            name: 'Vessel of the Forgotten Light',
            icon: <Star className="w-5 h-5" />,
            quest: ['Acquire the Dimmed Naaru Crystal.', 'Cleanse Karabor and Auchindoun.', 'Defend crystal in Solo Scenario.', 'Forge the Vessel at the Heart of X\'era.'],
            lore: 'The Draenei\'s flight from Argus was a tragedy. X\'era, a prime Naaru, fell in the Twisting Nether. This mace is a pilgrimage to reclaim that lost light before the Shadow Council twists it into a weapon of despair.',
            items: [{
                name: 'Vessel of the Forgotten Light',
                quality: 'legendary',
                ilvl: 164,
                slot: 'Main Hand',
                type: 'Mace',
                damage: '74 - 138',
                speed: '1.80',
                dps: '58.9',
                stats: ['+45 Intellect', '+38 Stamina', '+50 Spirit'],
                effects: [
                    'Equip: Increases healing done by up to 550 and damage done by up to 184 for all magical spells and effects.',
                    'Equip: Restores 15 mana per 5 sec.',
                    'Chance on Heal: Imbues target with "X\'era\'s Favor," storing 15% of overhealing. Releases as a smart AoE heal when damaged.'
                ],
                sellPrice: { g: 24, s: 32, c: 15 }
            }]
        },
        {
            id: 'thoridal',
            name: 'Thori\'dal, the Stars\' Fury',
            icon: <Crosshair className="w-5 h-5" />,
            quest: ['Obtain Sun-Spark from Kil\'jaeden.', 'Craft stave from Stardust Motes.', 'Complete "Trial of a Hundred Targets".', 'Dip bow into the Sunwell.'],
            lore: 'Not a weapon of mortal hands, but a poem written in starlight. Thori\'dal resonates with the restored Sunwell.',
            items: [{
                name: 'Thori\'dal, the Stars\' Fury',
                quality: 'legendary',
                ilvl: 164,
                unique: true,
                slot: 'Ranged',
                type: 'Bow',
                damage: '356 - 524',
                speed: '2.70',
                dps: '162.96',
                stats: ['+17 Agility'],
                durability: 110,
                effects: [
                    'Equip: Improves critical strike rating by 16 (0.72% @ L70).',
                    'Equip: Increases attack power by 34.',
                    'Equip: Your attacks ignore 112 of your opponent\'s armor.',
                    'Equip: Increases ranged attack speed by 15%. Does not stack with quiver or ammo pouch haste effects.',
                    'Equip: Thori\'dal generates magical arrows when the bow string is drawn. Does not use ammo.',
                    '"The energy of the Sunwell courses through Thori\'dal."'
                ],
                sellPrice: { g: 18, s: 29, c: 30 }
            }]
        },
        {
            id: 'warglaives',
            name: 'Warglaives of Azzinoth',
            icon: <Sword className="w-5 h-5" />,
            items: [
                {
                    name: 'Warglaive of Azzinoth',
                    quality: 'legendary',
                    ilvl: 156,
                    unique: true,
                    slot: 'Main Hand',
                    type: 'Sword',
                    damage: '214 - 398',
                    speed: '2.80',
                    dps: '109.29',
                    stats: ['+22 Agility', '+29 Stamina'],
                    durability: 125,
                    classes: 'Warrior, Rogue',
                    effects: [
                        'Equip: Improves hit rating by 21 (1.33% @ L70).',
                        'Equip: Increases attack power by 44.',
                        'The Twin Blades of Azzinoth (0/2)',
                        'Warglaive of Azzinoth',
                        'Warglaive of Azzinoth',
                        '(2) Set : Your melee attacks have a chance to increase your haste rating by 450 for 10 sec. (45s cooldown)',
                        '(2) Set : Increases attack power by 200 when fighting Demons.'
                    ],
                    sellPrice: { g: 24, s: 31, c: 12 }
                },
                {
                    name: 'Warglaive of Azzinoth',
                    quality: 'legendary',
                    ilvl: 156,
                    unique: true,
                    slot: 'Off Hand',
                    type: 'Sword',
                    damage: '107 - 199',
                    speed: '1.40',
                    dps: '109.29',
                    stats: ['+21 Agility', '+28 Stamina'],
                    durability: 125,
                    classes: 'Warrior, Rogue',
                    effects: [
                        'Equip: Improves critical strike rating by 23 (1.04% @ L70).',
                        'Equip: Increases attack power by 44.',
                        'The Twin Blades of Azzinoth (0/2)',
                        'Warglaive of Azzinoth',
                        'Warglaive of Azzinoth',
                        '(2) Set : Your melee attacks have a chance to increase your haste rating by 450 for 10 sec. (45s cooldown)',
                        '(2) Set : Increases attack power by 200 when fighting Demons.'
                    ],
                    sellPrice: { g: 24, s: 39, c: 74 }
                }
            ],
            lore: 'The Illidari creed: sacrifice everything. These blades are not drops; they are earned through a journey of stealth and assassination.',
            quest: ['Find "Warden\'s Writ" on Illidan.', 'Craft "Eye of the Assassin".', 'Infiltrate Black Temple stealth mission.', 'Defeat Xylos the Condemned.']
        },
        {
            id: 'fang',
            name: 'The Echoing Fang',
            icon: <PawPrint className="w-5 h-5" />,
            items: [{
                name: 'The Echoing Fang',
                quality: 'legendary',
                ilvl: 164,
                unique: true,
                slot: 'Main Hand',
                type: 'Fist Weapon',
                damage: '216 - 325',
                speed: '1.90',
                dps: '142.3',
                stats: ['+30 Agility', '+25 Stamina'],
                effects: [
                    'Equip: Increases attack power by 52.',
                    'Equip: Improves critical strike rating by 20 (0.91% @ L70).',
                    'Chance on Hit: Awakens "Echo of Goldrinn," causing next 3 attacks to apply a bleed dealing 330 damage. Stacks 3 times.'
                ],
                sellPrice: { g: 22, s: 50, c: 0 }
            }],
            lore: 'Goldrinn, the Wolf God, lives on in the Emerald Dream. His echo calls to the most ferocious champions.',
            quest: ['Obtain "Primal Whisper" from Karazhan.', 'Complete "Ultimate Safari".', 'Commune with Goldrinn shrines.', 'Survive "Trial of the Alpha".']
        },
        {
            id: 'crown',
            name: 'Crown of the Sunken Star',
            icon: <Crown className="w-5 h-5" />,
            items: [{
                name: 'Crown of the Sunken Star',
                quality: 'legendary',
                ilvl: 164,
                unique: true,
                slot: 'Head',
                type: 'Cloth',
                stats: ['188 Armor', '+55 Intellect', '+48 Stamina'],
                effects: [
                    'Equip: Improves spell hit rating by 17 (2.00% @ L70).',
                    'Equip: Improves spell critical strike rating by 24 (1.59% @ L70).',
                    'Equip: Increases damage and healing done by magical spells and effects by up to 68.',
                    'Use: Gaze into the abyss. Increase Spell Haste by 350 for 12s. Afterward, suffer "Psionic Feedback" (Silence) for 2s. (2 Min Cooldown)',
                    '"The whispers of the artifact call to you..."'
                ],
                sellPrice: { g: 25, s: 0, c: 0 }
            }],
            lore: 'A star of cold, arcane light fell into Zangarmarsh\'s ocean ages ago. This quest is a descent into madness.',
            quest: ['Find Abyssal Pearl in SSC.', 'Craft Bathysphere Helm.', 'Navigate Sunken Vault maze.', 'Defeat Guardian of the Abyss.']
        }
    ];

    const activeLegendaryData = legendaries.find(l => l.id === activeLegendary);

    return (
        <div className="min-h-screen bg-[#0c0a09] text-stone-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
      `}</style>

            {/* --- HEADER --- */}
            <header className="py-10 border-b border-orange-900/50 bg-[#050505] relative z-50 shadow-2xl">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-900/20 border border-orange-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,165,0,0.3)]">
                            <Crown className="text-orange-500 w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="font-cinzel text-3xl text-orange-500 tracking-[0.15em] drop-shadow-md">LEGENDARIES</h1>
                            <p className="text-xs text-stone-500 font-body tracking-[0.3em] uppercase">The Lost Artifacts</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12 min-h-screen">
                <div className="animate-fade-in">
                    <div className="flex flex-col lg:flex-row gap-8 min-h-[800px]">

                        {/* Sidebar List */}
                        <aside className="lg:w-1/4 border-r border-stone-800 pr-8">
                            <div className="sticky top-52">
                                <h3 className="font-cinzel text-stone-500 text-xs uppercase tracking-widest mb-6">Select Artifact</h3>
                                <div className="space-y-2">
                                    {legendaries.map(item => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveLegendary(item.id)}
                                            className={`w-full text-left p-4 rounded border transition-all group ${activeLegendary === item.id
                                                ? `bg-gradient-to-r from-[#1a1a1a] to-transparent border-l-4 border-l-orange-500 border-y-transparent border-r-transparent`
                                                : 'border-transparent hover:bg-[#111] text-stone-500'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`${activeLegendary === item.id ? 'text-orange-400' : 'text-stone-600 group-hover:text-stone-400'}`}>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h4 className={`font-cinzel text-sm ${activeLegendary === item.id ? 'text-white' : 'group-hover:text-stone-300'}`}>
                                                        {item.name}
                                                    </h4>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* Content */}
                        <main className="lg:w-3/4">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h2 className={`font-cinzel text-4xl md:text-5xl text-white mb-2 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]`}>
                                        {activeLegendaryData.name}
                                    </h2>
                                    <p className="font-cinzel text-orange-500 text-sm uppercase tracking-[0.2em]">Legendary Quest Chain</p>
                                </div>
                                <div className="text-orange-500 opacity-20 transform scale-150">
                                    {activeLegendaryData.icon}
                                </div>
                            </div>

                            {/* Lore & Tooltip Split */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-12">

                                {/* Lore & Quest */}
                                <div className="space-y-8">
                                    <div className="bg-[#111] p-6 rounded border border-stone-800">
                                        <h4 className="font-cinzel text-white text-lg mb-4 flex items-center gap-2"><BookOpen className="w-4 h-4 text-stone-500" /> Loremaster's Notes</h4>
                                        <p className="font-body text-stone-400 leading-relaxed italic">
                                            "{activeLegendaryData.lore}"
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-cinzel text-white text-lg mb-4 flex items-center gap-2"><Medal className="w-4 h-4 text-stone-500" /> Quest Chain</h4>
                                        <div className="space-y-4">
                                            {activeLegendaryData.quest.map((step, i) => (
                                                <div key={i} className="flex gap-4 items-start">
                                                    <div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-stone-800 border border-stone-600 flex items-center justify-center text-[10px] text-stone-400">{i + 1}</div>
                                                    <p className="text-sm text-stone-400 font-body leading-relaxed">
                                                        {formatText(step)}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Item Tooltips Area */}
                                <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start justify-center xl:justify-start flex-wrap">
                                    {activeLegendaryData.items.map((item, idx) => (
                                        <div key={idx} className="w-full max-w-sm">
                                            <WowTooltip item={item} phaseLabel={activeLegendary === "warglaives" ? "Final Phase" : null} />
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </main>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Legendaries;
