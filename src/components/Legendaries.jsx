import React, { useState } from 'react';
import { BookOpen, Medal, Gem, Crown, Ghost, Zap, Leaf, Shield, Sword, Skull, Crosshair, Flame, Star, Hammer } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const Legendaries = () => {
    const [activeLegendary, setActiveLegendary] = useState('vessel');
    const [relicPhase, setRelicPhase] = useState(0);

    // Reset phase when switching items
    const handleLegendaryChange = (id) => {
        setActiveLegendary(id);
        setRelicPhase(0);
    };

    // Helper for bold text formatting
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

        const renderSockets = (sockets) => {
            if (!sockets) return null;
            return sockets.map((socket, i) => {
                let colorClass = 'bg-gray-800';
                if (socket.includes('Red')) colorClass = 'bg-red-900 border-red-500';
                if (socket.includes('Blue')) colorClass = 'bg-blue-900 border-blue-500';
                if (socket.includes('Yellow')) colorClass = 'bg-yellow-900 border-yellow-500';
                if (socket.includes('Prismatic')) colorClass = 'bg-gray-300 border-white';

                return (
                    <div key={i} className="flex items-center gap-2 mb-1">
                        <div className={`w-4 h-4 border ${colorClass} rounded-sm shadow-inner`}></div>
                        <span className="text-[#9d9d9d]">{socket}</span>
                    </div>
                );
            });
        };

        return (
            <div className={`bg-[#070710] border ${borderColor} rounded-[5px] p-2 shadow-2xl max-w-[350px] w-full font-sans text-[12px] leading-snug relative text-white transition-all duration-300`}>
                <div className="flex justify-between items-start mb-0.5">
                    <h3 className={`font-bold text-[14px] ${qualityColor} flex-1 mr-2`}>
                        {item.name}
                    </h3>
                    {phaseLabel && <span className="text-white text-[10px] whitespace-nowrap pt-0.5 bg-white/10 px-1 rounded font-normal">{phaseLabel}</span>}
                </div>
                {item.ilvl && <div className="text-[#ffd100] mb-0.5">Item Level {item.ilvl}</div>}
                <div className="mb-0.5">Binds when picked up</div>
                {item.unique && <div className="mb-0.5">Unique</div>}

                {/* Slot & Type Line */}
                {(item.slot || item.type) && (
                    <div className="flex justify-between mb-0.5 text-white">
                        <span>{item.slot}</span>
                        <span>{item.type}</span>
                    </div>
                )}

                {/* Damage & Speed */}
                {item.damage && (
                    <div className="flex justify-between mb-0.5 text-white">
                        <span>{item.damage} Damage</span>
                        <span>Speed {item.speed}</span>
                    </div>
                )}
                {item.dps && <div className="mb-0.5 text-white">({item.dps} damage per second)</div>}

                {/* Armor */}
                {item.armor && <div className="mb-0.5 text-white">{item.armor} Armor</div>}

                {/* Primary Stats */}
                {item.stats && item.stats.map((stat, i) => (
                    <div key={i} className="mb-0.5 text-white">{stat}</div>
                ))}

                {/* Sockets */}
                {item.sockets && <div className="my-2">{renderSockets(item.sockets)}</div>}
                {item.socketBonus && <div className="text-[#9d9d9d] mb-1">Socket Bonus: {item.socketBonus}</div>}

                {item.durability && <div className="mb-0.5 text-white">Durability {item.durability} / {item.durability}</div>}
                {item.classes && (
                    <div className="mb-0.5">Classes: <span className="text-white">{item.classes}</span></div>
                )}

                <div className="mb-2 text-white">Requires Level 70</div>

                <div className="space-y-1">
                    {item.effects && item.effects.map((effect, i) => {
                        const isFlavor = effect.startsWith('"');
                        const isSetHeader = effect.startsWith('The Twin Blades');
                        const isSetBonus = effect.startsWith('(2) Set');
                        const isSetItem = effect.startsWith('Warglaive of');

                        if (isFlavor) return <div key={i} className="text-[#ffd100] mt-3 italic text-[11px] text-center opacity-80">{effect}</div>;
                        if (isSetHeader) return <div key={i} className="text-[#ffd100] mt-2 font-bold">{effect}</div>;
                        if (isSetItem) return <div key={i} className="text-[#9d9d9d] ml-2">{effect}</div>;

                        if (isSetBonus) {
                            const bonusText = effect.replace('(2) Set : ', '');
                            return (
                                <div key={i} className="text-[#9d9d9d] mt-1">
                                    <span className="text-[#9d9d9d]">(2) Set: </span>
                                    <span className="text-[#1eff00]">{bonusText}</span>
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
            </div>
        );
    };

    // --- LEGENDARY DATA ---
    const legendaries = [
        {
            id: 'vessel',
            name: 'Vessel of the Forgotten Light',
            image: 'https://i.imgur.com/cDuprED.jpeg',
            icon: <Gem className="w-8 h-8 text-orange-500" />,
            lore: 'An ancient Naaru crystal, dormant since the fall of Auchindoun. It is not just a weapon, but a responsibility. You must nurture it from a flicker to a blinding sun.',
            items: [
                {
                    name: 'Daybreak, Hammer of the Naaru',
                    quality: 'epic',
                    ilvl: 120,
                    slot: 'Held In Off-hand',
                    stats: ['+30 Intellect', '+25 Stamina', '+20 Spirit'],
                    sockets: ['Yellow Socket'],
                    socketBonus: '+2 Spell Power',
                    effects: ['Equip: Increases healing done by up to 75 and damage done by up to 25 for all magical spells and effects.', '"It pulses with a faint, dying light."'],
                },
                {
                    name: 'Lantern of the Sha\'tar',
                    quality: 'epic',
                    ilvl: 138,
                    slot: 'Held In Off-hand',
                    stats: ['+40 Intellect', '+35 Stamina', '+30 Spirit'],
                    sockets: ['Yellow Socket', 'Blue Socket'],
                    socketBonus: '+4 Spell Power',
                    effects: ['Equip: Increases healing done by up to 120 and damage done by up to 40 for all magical spells and effects.', 'Use: Illuminates the area, revealing stealth units for 10 sec. (3 Min Cooldown)'],
                },
                {
                    name: 'Vessel of the Forgotten Light',
                    quality: 'legendary',
                    ilvl: 146,
                    slot: 'Main Hand',
                    type: 'Mace',
                    damage: '74 - 138',
                    speed: '1.80',
                    dps: '58.9',
                    stats: ['+45 Intellect', '+38 Stamina', '+50 Spirit'],
                    sockets: ['Red Socket', 'Yellow Socket', 'Blue Socket'],
                    socketBonus: '+6 Spell Power',
                    effects: [
                        'Equip: Increases healing done by up to 550 and damage done by up to 183 for all magical spells and effects.',
                        'Equip: Restores 15 mana per 5 sec.',
                        'Chance on Heal: Imbues target with "X\'era\'s Favor," storing 10% of overhealing. Releases as a smart AoE heal when damaged.'
                    ],
                },
                {
                    name: 'Vessel of the Forgotten Light (Awakened)',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Main Hand',
                    type: 'Mace',
                    damage: '105 - 231',
                    speed: '1.80',
                    dps: '93.3',
                    stats: ['+55 Intellect', '+50 Stamina', '+65 Spirit'],
                    sockets: ['Red Socket', 'Yellow Socket', 'Blue Socket', 'Prismatic Socket'],
                    socketBonus: '+9 Spell Power',
                    effects: [
                        'Equip: Increases healing done by up to 650 and damage done by up to 216 for all magical spells and effects.',
                        'Equip: Restores 25 mana per 5 sec.',
                        'Chance on Heal: Imbues target with "X\'era\'s Grace," storing 20% of overhealing. When the target drops below 35% HP, this energy detonates, healing them and 4 allies for the stored amount.',
                        '"The light never dies; it only waits."'
                    ],
                }
            ],
            quest: [
                '**Stage 1: The Burden (Tier 4)**\nLoot the **Dormant Crystal** from Prince Malchezaar in Karazhan. It cannot be equipped. You must carry it in your inventory while completing 5 Heroic Dungeons, absorbing the "Echoes of Defeat" from the final bosses. Return to A\'dal in Shattrath, who reveals the crystal is a dying Naaru seed.',
                '**Stage 2: The Kindle (Tier 5)**\nA\'dal tasks you with reigniting the spark. You must retrieve **"Essence of the Phoenix"** from Al\'ar (Tempest Keep) and the **"Vial of the Sunwell"** (World Drop). Combine them at the Forge of the Naaru in The Exodar to craft the **Lantern of the Sha\'tar**.',
                '**Stage 3: The Reforging (Tier 6)**\nThe lantern is weak and unstable. You must infuse it with the souls of the Damned to stabilize its core. Slay **Teron Gorefiend** in Black Temple while holding the Lantern in your off-hand. It will absorb his soul but curse you with "Weight of the Dead" (-500 HP). You must then cleanse this curse by bathing the Lantern in the **Moonwell of Mount Hyjal** after defeating Archimonde.',
                '**Stage 4: The Awakening (Sunwell)**\nThe Vessel is complete but dormant. Bring it to the heart of the Sunwell. You must channel into the Sunwell itself during the **Kil\'jaeden encounter (Phase 3)**, taking 5000 Shadow Damage per second for 10 seconds. Survive the channel while your raid protects you, and the Vessel will awaken, reaching its final form.'
            ]
        },
        {
            id: 'crown',
            name: 'Crown of the Sunken Star',
            image: 'https://i.imgur.com/5BZUgRM.jpeg',
            icon: <Crown className="w-8 h-8 text-orange-500" />,
            lore: 'An ancient Highborne diadem, lost when the Well of Eternity imploded and cast into the Great Dark Beyond. It crashed into Zangarmarsh just before the portal reopened. It promises infinite mana, at the cost of your sanity.',
            items: [
                {
                    name: 'Diadem of the Drowned Highborne',
                    quality: 'epic',
                    ilvl: 120,
                    slot: 'Head',
                    type: 'Cloth',
                    stats: ['+35 Stamina', '+35 Intellect'],
                    sockets: ['Meta Socket', 'Blue Socket'],
                    socketBonus: '+4 Spell Crit',
                    effects: ['Equip: Improves spell critical strike rating by 25.', '"Barnacles cover the intricate gem settings."']
                },
                {
                    name: 'Polished Diadem of the Deep',
                    quality: 'epic',
                    ilvl: 138,
                    slot: 'Head',
                    type: 'Cloth',
                    stats: ['+45 Stamina', '+50 Intellect'],
                    sockets: ['Meta Socket', 'Red Socket', 'Blue Socket'],
                    socketBonus: '+5 Spell Damage',
                    effects: ['Equip: Improves spell hit rating by 20.', 'Use: Consume a Mana Emerald to gain 500 Mana and 100 Spell Power for 15 sec.']
                },
                {
                    name: 'Crown of the Sunken Star',
                    quality: 'legendary',
                    ilvl: 146,
                    slot: 'Head',
                    type: 'Cloth',
                    stats: ['188 Armor', '+55 Intellect', '+48 Stamina'],
                    sockets: ['Meta Socket', 'Red Socket', 'Yellow Socket', 'Blue Socket'],
                    socketBonus: '+8 Spell Damage',
                    effects: [
                        'Equip: Improves spell hit rating by 17.',
                        'Equip: Improves spell critical strike rating by 24.',
                        'Equip: Increases damage and healing done by magical spells and effects by up to 68.',
                        'Use: Gaze into the abyss. Increase Spell Haste by 350 for 12s. Afterward, suffer "Psionic Feedback" (Silence) for 4s. (2 Min Cooldown)'
                    ],
                },
                {
                    name: 'Crown of the Sunken Star, Gaze of the Abyss',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Head',
                    type: 'Cloth',
                    stats: ['210 Armor', '+75 Intellect', '+65 Stamina'],
                    sockets: ['Meta Socket', 'Red Socket', 'Yellow Socket', 'Blue Socket', 'Prismatic Socket'],
                    socketBonus: '+12 Spell Damage',
                    effects: [
                        'Equip: Improves spell hit rating by 25.',
                        'Equip: Improves spell critical strike rating by 40.',
                        'Equip: Increases damage and healing done by magical spells and effects by up to 95.',
                        'Use: Gaze deeply into the abyss. Increase Spell Haste by 500 for 20s. The "Psionic Feedback" is negated if you kill a target that yields experience/honor during the effect.',
                        '"The whispers are no longer whispers. They are commands."'
                    ],
                }
            ],
            quest: [
                '**Stage 1: The Discovery (Tier 4)**\nFish up the **"Barnacle-Encrusted Box"** from the Serpent Lake in Zangarmarsh. Requires 375 Fishing + Aquadynamic Fish Attractor. Inside is the **Diadem of the Drowned Highborne**, covered in fel-tainted silt. It is unusable in its current state.',
                '**Stage 2: The Cleaning (Tier 5)**\nThe corrosion is magical in nature. You must cleanse it in the **"Vials of Eternity"** located in the Caverns of Time (Battle for Mount Hyjal Raid). Requires Exalted with Scale of the Sands. Cost: 20 Primal Water, 20 Primal Mana. This reveals the **Polished Diadem**.',
                '**Stage 3: The Gem (Tier 6)**\nThe central setting is empty. You must craft the **"Star of the Deep"** using Jewelcrafting (375). Materials: **Void Crystal x20**, **Mercurial Adamantite x10**, and the rare drop **"Eye of the Lurker Below"** (SSC). Placing the gem transforms the item into its Legendary form.',
                '**Stage 4: The Madness (Sunwell)**\nThe Crown whispers to you, driving you towards megalomania. To silence the voices, you must feed it overwhelming magical energy. Use the Crown to absorb the **"Death Blast"** of **Archimonde** (Mount Hyjal). If you mistime the use (0.5s window), you die instantly. If you succeed, the Crown submits to your will, becoming **Perfected**.'
            ]
        },
        {
            id: 'sulfuras',
            name: 'Sulfuras, Hand of Ragnaros',
            image: 'https://i.imgur.com/l0ZYxJt.jpeg',
            icon: <Hammer className="w-8 h-8 text-orange-500" />,
            lore: 'The Firelord may have been banished, but his hammer remains. In the Timelocked Molten Core, Ragnaros\'s power has not faded; it has grown. To wield this hammer is to hold a volcano in your hands.',
            items: [
                {
                    name: 'Sulfuras, the Incandescent Fist of Ragnaros',
                    quality: 'epic',
                    ilvl: 120,
                    slot: 'Two-Hand',
                    type: 'Mace',
                    damage: '280-420',
                    speed: '3.60',
                    stats: ['+35 Strength', '+35 Stamina'],
                    sockets: ['Red Socket', 'Red Socket'],
                    socketBonus: '+4 Strength',
                    effects: ['Equip: Chance on hit to hurl a fireball for 250 damage.']
                },
                {
                    name: 'Sulfuron Hammer (Reforged)',
                    quality: 'epic',
                    ilvl: 138,
                    slot: 'Two-Hand',
                    type: 'Mace',
                    damage: '320-480',
                    speed: '3.60',
                    stats: ['+45 Strength', '+45 Stamina'],
                    sockets: ['Red Socket', 'Red Socket'],
                    socketBonus: '+4 Strength',
                    effects: ['Equip: Chance on hit to hurl a fireball for 350 damage.']
                },
                {
                    name: 'Sulfuras, Hand of Ragnaros',
                    quality: 'legendary',
                    ilvl: 146,
                    slot: 'Two-Hand',
                    type: 'Mace',
                    damage: '400-600',
                    speed: '3.60',
                    stats: ['+55 Strength', '+55 Stamina', '+50 Fire Resistance'],
                    sockets: ['Red Socket', 'Red Socket', 'Yellow Socket'],
                    socketBonus: '+6 Strength',
                    effects: ['Equip: Deals 15 damage to anyone who strikes you.', 'Chance on hit: Hurl a fireball for 800 damage.']
                },
                {
                    name: 'Sulfuras, the Extinguisher',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Two-Hand',
                    type: 'Mace',
                    damage: '550-850',
                    speed: '3.60',
                    stats: ['+75 Strength', '+75 Stamina'],
                    sockets: ['Red Socket', 'Red Socket', 'Red Socket', 'Red Socket'],
                    socketBonus: '+10 Strength',
                    effects: ['Equip: Your melee attacks have a chance to ignite the target for 2000 damage over 10s.', 'Use: Slam the ground, creating a "Lava Fissure" that pulses 1500 Fire damage to all enemies for 10s. (2 min CD)', '"By fire be purged!"']
                }
            ],
            quest: [
                '**Stage 1: The Timelocked Core (Tier 4)**\nEnter the **Timelocked Molten Core** (scaled to L70). Collect 50 **"Sulfuron Ingots"** (Drop rate 20% from bosses). These are not the old ingots; they burn with blue flame.',
                '**Stage 2: The Base (Tier 5)**\nCraft the **"Sulfuron Hammer (Reforged)"** at the Black Anvil in BRD. Requires Blacksmithing 375. Cost: **50 Arcanite Bars**, **20 Primal Fire**, **50 Sulfuron Ingots**. The hammer is heavy, cumbersome, and lifeless.',
                '**Stage 3: The Eye (Tier 6)**\nSlay **Ragnaros (Timelocked)** in Hard Mode (Do not submerge him). Drop rate for **"Eye of Sulfuras"** is 4%. Combine the Eye with the Hammer to create the classic Legendary.',
                '**Stage 4: The Ascension (Sunwell)**\nThe Hand of Ragnaros is powerful, but chaotic. You must take it to the **Altar of Damnation** in Shadowmoon Valley and summon the **"Cipher of Damnation"**. Defeat the summoned Eredar Lord using ONLY the Hammer (no other weapons). The victory tempers the weapon into **Sulfuras, the Extinguisher**.'
            ]
        },
        {
            id: 'thunderfury',
            name: 'Thunderfury, Blessed Blade',
            image: 'https://i.imgur.com/qLo2nhZ.jpeg',
            icon: <Zap className="w-8 h-8 text-orange-500" />,
            lore: 'Prince Thunderaan was betrayed. His essence, trapped in a talisman, now yearns for freedom. In the Timelocked Blackwing Lair, the winds of the seeker blow stronger than ever.',
            items: [
                {
                    name: 'Dormant Windseeker',
                    quality: 'epic',
                    ilvl: 120,
                    slot: 'One-Hand',
                    type: 'Sword',
                    damage: '120 - 220',
                    speed: '2.60',
                    stats: ['+20 Agility', '+25 Stamina'],
                    effects: ['Equip: Weakly buzzes with electricity.']
                },
                {
                    name: 'Awakened Windseeker',
                    quality: 'epic',
                    ilvl: 138,
                    slot: 'One-Hand',
                    type: 'Sword',
                    damage: '150 - 280',
                    speed: '2.60',
                    stats: ['+30 Agility', '+35 Stamina'],
                    effects: ['Chance on hit: Blast enemy for 200 Nature damage.']
                },
                {
                    name: 'Thunderfury, Blessed Blade',
                    quality: 'legendary',
                    ilvl: 146,
                    slot: 'One-Hand',
                    type: 'Sword',
                    damage: '200-350',
                    speed: '2.60',
                    stats: ['+35 Agility', '+45 Stamina', '+25 Nature Resistance'],
                    effects: ['Chance on hit: Blast enemy for 300 Nature damage and jump to 5 nearby targets. Reduces Nature Resistance by 25.']
                },
                {
                    name: 'Thunderfury, Storm of the Creator',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'One-Hand',
                    type: 'Sword',
                    damage: '290-480',
                    speed: '2.60',
                    stats: ['+50 Agility', '+60 Stamina'],
                    sockets: ['Yellow Socket', 'Yellow Socket'],
                    socketBonus: '+6 Agility',
                    effects: ['Chance on hit: Blast enemy for 600 Nature damage, chaining to 10 targets. Reduces Nature Resistance by 50. Slows attack speed by 20%. Generates massive threat.', '"The wind does not beg; it demands."']
                }
            ],
            quest: [
                '**Stage 1: The Bindings (Tier 4)**\nObtain **"Bindings of the Windseeker"** from Baron Geddon AND Garr (Timelocked MC). Drop rate is low (3%). You also need the **"Essence of the Firelord"** from Ragnaros.',
                '**Stage 2: The Summoning (Tier 5)**\nTravel to Silithus. To summon Thunderaan, you need 10 **"Enchanted Elementium Bars"**. Each bar costs: 10 Arcanite Bars, 1 Elementium Ore (BWL), 3 Elemental Flux. Slay Thunderaan and seize the **Dormant Blade**.',
                '**Stage 3: The Containment (Tier 6)**\nThunderaan\'s essence is leaking. You must forge a new **"Containment Vessel"** using the **"Heart of Nefarian"** (Timelocked BWL) and **"Scale of Onyxia"** (L70 Version). This stabilizes the blade into its classic form.',
                '**Stage 4: The Storm (Sunwell)**\nBring the vessel to the **Throne of the Elements** in Nagrand. You must defeat the Elementals **Gordawg**, **Kalandrios**, and **Incineratus** simultaneously (requires a raid group). Then, channel the storm into the blade to unbind its true potential, creating **Storm of the Creator**.'
            ]
        },
        {
            id: 'atiesh',
            name: 'Atiesh, Greatstaff of the Guardian',
            image: 'https://i.imgur.com/U7Mz72E.jpeg',
            icon: <Ghost className="w-8 h-8 text-orange-500" />,
            lore: 'The staff of Medivh. It was shattered to prevent Sargeras from claiming it. Now, in the Timelocked Naxxramas, the splinters cry out to be reunited.',
            items: [
                {
                    name: 'Splintered Staff of Atiesh',
                    quality: 'epic',
                    ilvl: 120,
                    slot: 'Staff',
                    stats: ['+35 Intellect', '+35 Spirit'],
                    effects: ['Use: Opens a portal to Karazhan.']
                },
                {
                    name: 'Restored Staff of Atiesh',
                    quality: 'epic',
                    ilvl: 138,
                    slot: 'Staff',
                    stats: ['+50 Intellect', '+50 Spirit'],
                    effects: ['Equip: Increases damage and healing done by magical spells and effects by up to 150.', 'Use: Opens a portal to Karazhan.']
                },
                {
                    name: 'Atiesh, Greatstaff of the Guardian',
                    quality: 'legendary',
                    ilvl: 146,
                    slot: 'Staff',
                    stats: ['+60 Intellect', '+60 Spirit'],
                    sockets: ['Red Socket', 'Yellow Socket', 'Blue Socket'],
                    socketBonus: '+8 Spell Power',
                    effects: ['Equip: Increases damage and healing done by magical spells and effects by up to 420.', 'Equip: Increases spell crit of party by 2%.', 'Use: Creates a portal to Karazhan.']
                },
                {
                    name: 'Atiesh, Void-Bane',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Staff',
                    stats: ['+85 Intellect', '+85 Spirit'],
                    sockets: ['Red Socket', 'Red Socket', 'Yellow Socket', 'Blue Socket'],
                    socketBonus: '+12 Spell Power',
                    effects: [
                        'Equip: Increases damage and healing done by magical spells and effects by up to 550.',
                        'Equip: Increases spell crit of raid members by 5%.',
                        'Equip: Your spells have a chance to summon a "Raven of the Guardian" that attacks your target. The Raven\'s attacks apply "Guardian\'s Mark", increasing magical damage taken by the target by 1% per stack, up to 5%.',
                        'Use: Teleport your entire raid group to the entrance of the current instance. (2 Hour CD)',
                        '"I am the Guardian no longer. You are."'
                    ]
                }
            ],
            quest: [
                '**Stage 1: The Splinters (Tier 4)**\nCollect 40 **"Splinters of Atiesh"** from bosses in Timelocked Naxxramas. (100% droprate, but you need 40 kills to reassemble the shaft).',
                '**Stage 2: The Base and Head (Tier 5)**\nObtain the **"Base of Atiesh"** (C\'Thun - Timelocked AQ40) and **"Staff Head of Atiesh"** (Kel\'Thuzad - Timelocked Naxx). Combine them with the splinters to form the Tainted Staff of Atiesh.',
                '**Stage 3: The Exorcism (Tier 6)**\nThe staff is possessed by Sargeras\'s remaining corruption. You must take it to **Teron Gorefiend\'s corpse** in Shadowmoon Valley and perform an exorcism. This spawns **"The Dark Guardian"** (Elite Boss) which requires a 5-man party to defeat.',
                '**Stage 4: The Consecration (Sunwell)**\nThe staff is clean but empty. Bring it to the **"Well of Eternity"** (Caverns of Time: Hyjal). Defeat **Archimonde** while holding the staff (cannot cast spells, must be carried). You survive only if your raid kills him before the staff consumes you.'
            ]
        },
        {
            id: 'thoridal',
            name: 'Thori\'dal, the Stars\' Fury',
            image: 'https://i.imgur.com/TgIb02y.jpeg',
            icon: <Crosshair className="w-8 h-8 text-orange-500" />,
            lore: 'Not a weapon of mortal hands, but a poem written in starlight. Thori\'dal resonates with the restored Sunwell, evolving as you attuned yourself to the Light.',
            items: [
                {
                    name: 'Bow of the Sun\'s Grace',
                    quality: 'epic',
                    ilvl: 146,
                    unique: true,
                    slot: 'Ranged',
                    type: 'Bow',
                    damage: '240 - 360',
                    speed: '2.80',
                    stats: ['+25 Agility', '+20 Stamina'],
                    sockets: ['Red Socket', 'Red Socket'],
                    socketBonus: '+4 Agility',
                    effects: [
                        'Equip: Increases attack power by 50.',
                        '"A fine elven bow, warm to the touch."'
                    ],
                },
                {
                    name: 'Thori\'dal, the Stars\' Fury',
                    quality: 'legendary',
                    ilvl: 154,
                    unique: true,
                    slot: 'Ranged',
                    type: 'Bow',
                    damage: '300 - 450',
                    speed: '2.70',
                    dps: '138.9',
                    stats: ['+35 Agility', '+25 Stamina'],
                    effects: [
                        'Equip: Improves critical strike rating by 16.',
                        'Equip: Increases attack power by 34.',
                        'Equip: Your attacks ignore 112 of your opponent\'s armor.',
                        'Equip: Increases ranged attack speed by 15%.',
                        'Equip: Thori\'dal generates magical arrows when the bow string is drawn. Does not use ammo.',
                        '"The energy of the Sunwell courses through Thori\'dal."'
                    ],
                },
                {
                    name: 'Thori\'dal, the Sun\'s Edict',
                    quality: 'legendary',
                    ilvl: 164,
                    unique: true,
                    slot: 'Ranged',
                    type: 'Bow',
                    damage: '390 - 580',
                    speed: '2.60',
                    dps: '186.5',
                    stats: ['+55 Agility', '+45 Stamina'],
                    sockets: ['Red Socket', 'Red Socket', 'Yellow Socket'],
                    socketBonus: '+8 Attack Power',
                    effects: [
                        'Equip: Increases attack power by 120.',
                        'Equip: Increases ranged attack speed by 20%.',
                        'Equip: Does not require ammo.',
                        'Chance on Hit: Fires a "Starshot" that deals Arcane damage equal to 50% of your Attack Power and resets the cooldown of Steady Shot.',
                        '"It does not just fire arrows; it fires potential."'
                    ],
                }
            ],
            quest: [
                '**Stage 1: The Spark (Tier 6)**\nObtain **"Sun-Spark"** from Kil\'jaeden (0.1% Drop). This faint light is all that remains of the Sunwell\'s fury.',
                '**Stage 2: The Construct (Sunwell)**\nCraft the stave from **100 Stardust Motes** (Daily Quest Farm in Isle of Quel\'Danas). Each Mote requires Exalted reputation to purchase.',
                '**Stage 3: The Trial (Sunwell)**\nComplete the **"Trial of a Hundred Targets"** in under 5 minutes. This is a solo scenario where you must hit moving targets with 100% accuracy.',
                '**Stage 4: The Ascension (Sunwell)**\nDip the bow into the Sunwell after a full clear run. The bow absorbs the entire essence of the font, becoming **Thori\'dal, the Sun\'s Edict**.'
            ]
        },
        {
            id: 'warglaives',
            name: 'Warglaives of Azzinoth',
            image: 'https://i.imgur.com/cuxofIy.jpeg',
            icon: <Sword className="w-8 h-8 text-orange-500" />,
            lore: 'The Illidari creed: sacrifice everything. These blades are not drops; they are earned through a journey of stealth and assassination.',
            items: [
                {
                    name: 'Warglaive of Azzinoth (Left)',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Main Hand',
                    type: 'Sword',
                    damage: '240 - 450',
                    speed: '2.80',
                    stats: ['+35 Agility', '+40 Stamina'],
                    classes: 'Rogue, Warrior',
                    effects: ['(2) Set : Your melee attacks have a chance to increase your haste rating by 450 for 10 sec.', '(2) Set : Increases attack power by 200 when fighting Demons.'],
                },
                {
                    name: 'Warglaive of Azzinoth (Right)',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Off Hand',
                    type: 'Sword',
                    damage: '120 - 220',
                    speed: '1.40',
                    stats: ['+35 Agility', '+40 Stamina'],
                    classes: 'Rogue, Warrior',
                    effects: ['(2) Set : Your melee attacks have a chance to increase your haste rating by 450 for 10 sec.', '(2) Set : Increases attack power by 200 when fighting Demons.'],
                }
            ],
            quest: [
                '**Stage 1: Legacy of the Betrayer (Tier 6)**\nObtain **"Warden\'s Writ"** from Illidan Stormrage (Low Drop). This document lists the crimes of the Betrayer.',
                '**Stage 2: The Violet Hold (Tier 6)**\nBreak into the **Violet Hold** in Dalaran (Scenario) to steal the **"Smithing Hammer of Argus"**, the tool used to forge the original glaives.',
                '**Stage 3: The Soul-Forge (Sunwell)**\nThe blades are thirsty. Slay **1000 Demons** in Shadowmoon Valley while carrying the Smithing Hammer to charge it with Fel energy.',
                '**Stage 4: The Bind (Sunwell)**\nDefeat Illidan again. Use the charged hammer on his corpse to bind the Glaives to your soul forever. The blades are now yours.'
            ]
        },
        {
            id: 'ashbringer',
            name: 'The Ashbringer',
            image: 'https://i.imgur.com/TT2oyoG.jpeg',
            icon: <Sword className="w-8 h-8 text-orange-500" />,
            lore: "The blade that shattered Frostmourne. Legends say it was forged from a dark crystal purified by the Holy Light. Its original wielder, Alexandros Mograine, was betrayed. Now, the corrupted blade rests in Naxxramas, waiting for a champion to redeem it.",
            items: [
                {
                    name: 'Corrupted Ashbringer',
                    quality: 'epic',
                    ilvl: 120,
                    slot: 'Two-Hand',
                    type: 'Sword',
                    damage: '250 - 380',
                    speed: '3.60',
                    stats: ['-25 Stamina'],
                    effects: ['Chance on hit: Steals 185 life from target.', '"The blade whispers to you... do not trust them."'],
                },
                {
                    name: 'The Ashbringer (Purified)',
                    quality: 'epic',
                    ilvl: 138,
                    slot: 'Two-Hand',
                    type: 'Sword',
                    damage: '300 - 450',
                    speed: '3.60',
                    stats: ['+35 Strength', '+35 Stamina', '+20 Crit Rating'],
                    effects: ['Chance on hit: Blasts the target with Holy Fire for 400 damage.', 'Equip: Increases Attack Power by 120.'],
                },
                {
                    name: 'The Ashbringer (Reforged)',
                    quality: 'legendary',
                    ilvl: 146,
                    slot: 'Two-Hand',
                    type: 'Sword',
                    damage: '350 - 520',
                    speed: '3.60',
                    dps: '120.8',
                    stats: ['+45 Strength', '+45 Stamina', '+30 Crit Rating'],
                    sockets: ['Red Socket', 'Red Socket'],
                    socketBonus: '+6 Strength',
                    effects: [
                        'Chance on hit: Blasts the target with Holy Fire for 700 damage.',
                        'Equip: Increases Attack Power by 180.',
                        '"The crystal is cracked, but the light holds."'
                    ],
                },
                {
                    name: 'The Ashbringer, Light of the Dawn',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Two-Hand',
                    type: 'Sword',
                    damage: '450 - 680',
                    speed: '3.60',
                    dps: '156.9',
                    stats: ['+75 Strength', '+75 Stamina', '+50 Crit Rating'],
                    sockets: ['Red Socket', 'Red Socket', 'Yellow Socket'],
                    socketBonus: '+8 Strength',
                    effects: [
                        'Chance on hit: Blasts the target with Holy Fire for 1200 damage and burns them for 500 over 10s.',
                        'Equip: Increases Attack Power by 250.',
                        'Use: "Wake of Ashes" - Stuns all Undead and Demons in a 12 yd cone for 6 sec. (2 Min Cooldown)',
                        '"Using this sword against Undead is unfair. Good."'
                    ],
                }
            ],
            quest: [
                '**Stage 1: The Drop (Tier 4)**\nLoot the **"Corrupted Ashbringer"** from the Four Horsemen chest in Naxxramas (Classic/T3). Equip it and enter the Scarlet Monastery. The Crusaders will kneel. Speak to Commander Mograine to hear the tragedy.',
                '**Stage 2: The Whisper (Tier 5)**\nThe blade whispers to you. It hungers for demons. Slay **100 Legion enemies** in Hellfire Peninsula to feed its thirst. Show the blade to A\'dal in Shattrath, who points you to a blacksmith in the Shattered Reach.',
                '**Stage 3: The Reforging (Tier 6)**\nFind Kurdran\'s Smith. He demands payment: **20 Primal Nethers**, **10 Fel Steel Bars**, and the **"Hammer of the Naaru"** (Gruul). He shatters the corrupted crystal and forges a new housing: "The Empty Shell".',
                '**Stage 4: Redemption (Sunwell)**\nTake the shell to the **Sunwell**. Defeat M\'uru. Use the Empty Shell to absorb his essence as he shifts from Void to Light. Finally, return to Naxxramas (Timelocked) and give the blade to the ghost of Alexandros Mograine. He blesses it, freeing his soul and granting you the true **Ashbringer**.'
            ]
        }
    ];

    const activeLegendaryData = legendaries.find(l => l.id === activeLegendary);

    // Safety check for phase index
    const currentItem = activeLegendaryData.items[relicPhase] || activeLegendaryData.items[0];

    return (
        <div className="min-h-screen bg-[#0c0a09] text-stone-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
      `}</style>

            <UnifiedHeader
                icon={activeLegendaryData.image}
                background="https://i.imgur.com/LBquabK.jpeg"
                section="The Archives"
                sub="The Lost Artifacts"
                title="Legendaries"
                quote="Items of myth, forged in the fires of Outland and the stars beyond."
            />

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
                                            onClick={() => handleLegendaryChange(item.id)}
                                            className={`w-full text-left p-4 rounded border transition-all group ${activeLegendary === item.id
                                                ? `bg-gradient-to-r from-[#1a1a1a] to-transparent border-l-4 border-l-orange-500 border-y-transparent border-r-transparent`
                                                : 'border-transparent hover:bg-[#111] text-stone-500'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded overflow-hidden border ${activeLegendary === item.id ? 'border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'border-stone-800 opacity-60 group-hover:opacity-100'} transition-all flex-shrink-0`}>
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
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
                                        <h4 className="font-cinzel text-white text-lg mb-4 flex items-center gap-2"><Medal className="w-4 h-4 text-stone-500" /> The Path of Ascension</h4>
                                        <div className="space-y-6">
                                            {activeLegendaryData.quest.map((step, i) => (
                                                <div key={i} className="flex gap-4 items-start relative pb-6 border-l border-stone-800 last:border-0">
                                                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-stone-900 border border-orange-900"></div>
                                                    <p className="text-sm text-stone-400 font-body leading-relaxed pl-4">
                                                        {formatText(step)}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Item Tooltips Upgrade UI */}
                                <div>
                                    {/* Phase Selector - Hide for Warglaives */}
                                    {activeLegendary !== 'warglaives' && (
                                        <div className="flex bg-black border border-stone-800 rounded p-1 mb-4 flex-wrap gap-1">
                                            {activeLegendaryData.items.length > 1 ? (
                                                activeLegendaryData.items.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setRelicPhase(i)}
                                                        className={`px-3 py-1 text-[10px] font-cinzel font-bold transition-colors rounded ${relicPhase === i
                                                            ? 'bg-amber-900/40 text-amber-400 border border-amber-900/50'
                                                            : 'text-stone-600 hover:text-stone-400 border border-transparent'
                                                            }`}
                                                    >
                                                        TIER {i + 1}
                                                    </button>
                                                ))
                                            ) : (
                                                <span className="text-[10px] font-cinzel text-stone-600 px-3 py-1">SINGLE TIER ARTIFACT</span>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex flex-col gap-6 items-center flex-wrap">
                                        {activeLegendary === 'warglaives' ? (
                                            <div className="flex flex-col xl:flex-row gap-4">
                                                {activeLegendaryData.items.map((item, i) => (
                                                    <WowTooltip key={i} item={item} />
                                                ))}
                                            </div>
                                        ) : (
                                            <WowTooltip item={currentItem} phaseLabel={`Tier ${relicPhase + 1}`} />
                                        )}
                                    </div>
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
