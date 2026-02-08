import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Sword, Shield, Zap, Sparkles, AlertTriangle, Hammer, Scroll, Skull } from 'lucide-react';
import WowTooltip from './WowTooltip';

const Legendaries = () => {
    const [activeLegendary, setActiveLegendary] = useState('sulfuras');
    const [phase, setPhase] = useState(0); // 0=Base, 1=Reforged, 2=Ascended
    const [atieshClass, setAtieshClass] = useState('Mage');

    // Backgrounds for each legendary
    const backgrounds = {
        sulfuras: 'https://images7.alphacoders.com/554/554245.jpg', // Molten Core
        thunderfury: 'https://images.alphacoders.com/109/109489.jpg', // Vortex Pinnacle / Stormy
        ashbringer: 'https://images2.alphacoders.com/717/717469.jpg', // Dark/Holy or Light's Hope
        atiesh: 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4V68P8H64L1476906233075.jpg', // Karazhan
        warglaives: 'https://images5.alphacoders.com/690/690589.jpg', // Black Temple
        thoridal: 'https://images8.alphacoders.com/133/1338666.png', // Sunwell
        vessel: 'https://images4.alphacoders.com/202/202684.jpg', // Auchindoun/Shattrath
        crown: 'https://images4.alphacoders.com/202/202680.jpg' // Zangarmarsh/Underwater
        // If image links fail, they will fallback to black in CSS, but these are fairly reliable walls.
    };

    // Helper to format quest text with bold items having simple title tooltips
    const formatText = (text) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                const content = part.slice(2, -2);
                let title = "Quest Item";
                if (content.includes("Eye of Sulfuras")) title = "Legendary Drop from Ragnaros (Molten Core)";
                if (content.includes("Sulfuron Hammer")) title = "Blacksmithing Crafted Item (Requires 300 BS)";
                if (content.includes("Bindings")) title = "Legendary Drops from Garr & Baron Geddon (Molten Core)";
                if (content.includes("Atiesh")) title = "Splinters drop from Naxxramas (40) Bosses";
                return <span key={index} className="text-yellow-400 font-bold cursor-help border-b border-dotted border-yellow-500/50" title={title}>{content}</span>;
            }
            return part;
        });
    };

    const legendaries = [
        {
            id: 'sulfuras',
            name: 'Sulfuras, Hand of Ragnaros',
            icon: <img src="https://i.imgur.com/BLMIbUW.jpeg" className="w-10 h-10 rounded-md object-cover border border-white/10" alt="Sulfuras" />,
            lore: "The flaming rune-etched hammer of the Firelord. Though Ragnaros was banished back to the Elemental Plane, a shard of his essence remains. The Earthen Ring believes that by purifying the hammer in the chaotic energies of the Outland, it can be stabilized—or unleashed.",
            items: [
                {
                    name: 'Sulfuras, Hand of Ragnaros',
                    quality: 'legendary',
                    ilvl: 115,
                    slot: 'Two-Hand',
                    type: 'Mace',
                    damage: '223 - 372',
                    speed: '3.70',
                    dps: '80.4',
                    stats: ['+12 Strength', '+12 Stamina'],
                    classes: 'Paladin, Warrior, Shaman, Druid',
                    unique: true,
                    effects: [
                        'Equip: +30 Fire Resistance.',
                        'Equip: Deals 5 fire damage to anyone who strikes you with a melee attack.',
                        'Equip: Chance on hit to hurl a fireball for 273 to 333 Fire damage and also attack for additional 75 fire damage over 10 sec.',
                        '\"The rune of the firelord glows faintly.\"'
                    ]
                },
                {
                    name: 'Sulfuras, the Extinguished Hand',
                    quality: 'legendary',
                    ilvl: 141,
                    slot: 'Two-Hand',
                    type: 'Mace',
                    damage: '355 - 540',
                    speed: '3.70',
                    dps: '120.9',
                    stats: ['+45 Strength', '+55 Stamina'],
                    classes: 'Paladin, Warrior, Shaman, Druid',
                    unique: true,
                    effects: [
                        'Equip: Improves critical strike rating by 45 (2.04% @ L70).',
                        'Equip: Your melee attacks have a chance to ignite the target, dealing 250 Fire damage over 10 sec. Stacks up to 5 times.',
                        'Use: "Reignite" - Consumes all stacks to deal massive Fire damage aimed at the target\'s location. (2 Min Cooldown)',
                        '\"The fire has gone out... for now.\"'
                    ]
                },
                {
                    name: 'Sulfuras, the Incandescent Fist',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Two-Hand',
                    type: 'Mace',
                    damage: '580 - 870',
                    speed: '3.80',
                    dps: '190.8',
                    stats: ['+75 Strength', '+90 Stamina'],
                    classes: 'Paladin, Warrior, Shaman, Druid',
                    unique: true,
                    sockets: ['Red Socket', 'Red Socket', 'Yellow Socket'],
                    socketBonus: '+12 Strength',
                    effects: [
                        'Equip: Improves hit rating by 48 (3.04% @ L70).',
                        'Equip: Your melee attacks sear the target for 15% weapon damage as Fire.',
                        'Equip: Chance on hit to blast all enemies in front of you with a wave of magma.',
                        'Use: "Cataclysm" - Slam the ground, creating a fissure that erupts after 3 sec, dealing 4000 damage and stunning enemies. (5 Min Cooldown)',
                        '\"BY FIRE BE PURGED!\"'
                    ]
                }
            ],
            quest: [
                '**Stage 1: The Timelocked Core (Tier 4)**\n(Quest Chain: 0/12) - Players must travel to the Caverns of Time and assist the Bronze Dragonflight in a "What If?" scenario where Ragnaros won. Requires defeating Ragnaros in the Timelocked Core.',
                '**Stage 2: The Extinguished Hand (Tier 5)**\nRequires looting the **"Smoldering Core"** from Kael\'thas Sunstrider (Tempest Keep) to attempt re-igniting the weapon. Requires 25x Primal Fire and 10x Primal Nether.',
                '**Stage 3: The Incandescent Fist (Tier 6.5)**\nRequires the pure elemental essence from **Kil\'jaeden** (Sunwell) to stabilize the weapon\'s chaotic power permanently. Grants the title "Hand of the Firelord".'
            ]
        },
        {
            id: 'thunderfury',
            name: 'Thunderfury, Blessed Blade',
            icon: <img src="https://i.imgur.com/u6MGeFz.jpeg" className="w-10 h-10 rounded-md object-cover border border-white/10" alt="Thunderfury" />,
            lore: "The sword of the Windseeker, Thunderaan. Long thought destroyed, the prince's essence was bound to a talisman. Now, with the opening of the Dark Portal, the winds of Outland whisper his name again. The storms of Netherstorm may be the key to his full resurrection.",
            items: [
                {
                    name: 'Thunderfury, Blessed Blade of the Windseeker',
                    quality: 'legendary',
                    ilvl: 115,
                    slot: 'One-Hand',
                    type: 'Sword',
                    damage: '60 - 145',
                    speed: '1.90',
                    dps: '53.9',
                    stats: ['+5 Agility', '+8 Stamina'],
                    classes: 'Warrior, Paladin, Rogue, Hunter',
                    unique: true,
                    effects: [
                        'Equip: +8 Fire Resistance.',
                        'Equip: +5 Nature Resistance.',
                        'Chance on hit: Blasts your enemy with lightning, dealing 300 Nature damage and then jumping to additional nearby enemies. Each jump reduces the target\'s Nature resistance by 25. Affects 5 targets. Your primary target is also consumed by a cyclone, slowing its attack speed by 20% for 12 sec.',
                        'Equip: Generates significant threat.'
                    ]
                },
                {
                    name: 'Thunderfury, the Storm\'s Wake',
                    quality: 'legendary',
                    ilvl: 141,
                    slot: 'One-Hand',
                    type: 'Sword',
                    damage: '150 - 280',
                    speed: '1.90',
                    dps: '113.2',
                    stats: ['+25 Agility', '+40 Stamina'],
                    classes: 'Warrior, Paladin, Rogue, Hunter',
                    unique: true,
                    effects: [
                        'Equip: Improves hit rating by 25 (1.59% @ L70).',
                        'Chance on hit: Blasts your enemy dealing 600 Nature damage, chaining to 10 targets. Reduces Nature resistance by 50. Primary target attack speed slowed by 25%.',
                        'Equip: Increases threat generated by 30%.',
                        '\"The wind howls...\"'
                    ]
                },
                {
                    name: 'Thunderfury, Baron of the Air',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'One-Hand',
                    type: 'Sword',
                    damage: '240 - 450',
                    speed: '1.90',
                    dps: '181.6',
                    stats: ['+45 Agility', '+75 Stamina'],
                    classes: 'Warrior, Paladin, Rogue, Hunter',
                    unique: true,
                    sockets: ['Yellow Socket', 'Blue Socket', 'Blue Socket'],
                    socketBonus: '+12 Agility',
                    effects: [
                        'Equip: Improves expertise rating by 40 (2.54% @ L70).',
                        'Chance on hit: Unleash a "Thundering Blast" dealing 900 Nature damage, chaining to 20 targets. Reduces Nature Resistance by 100.',
                        'Equip: "Eye of the Storm" - You are surrounded by a wind shield that reflects 50 Nature damage to attackers.',
                        'Equip: Generates massive threat.',
                        '\"I AM THE STORM.\"'
                    ]
                }
            ],
            quest: [
                '**Stage 1: Bindings of the Windseeker (Tier 4)**\nThe classic MC quest chain remains, but drop rates for **Bindings** are improved in TBC+ Classic. Requires 10x Elementium Bars.',
                '**Stage 2: The Storm\'s Wake (Tier 5)**\nRequires traversing the Netherstorm and harvesting energy from the Manaforges to overcharge the blade. Defeat the "Stormreaver" in The Eye.',
                '**Stage 3: Baron of the Air (Tier 6.5)**\nRequires defeating the Elemental Lords in the "Throne of the Elements" event (Nagrand) to rightfully claim the title of Baron and the favor of the Wind Lords.'
            ]
        },
        {
            id: 'ashbringer',
            name: 'The Ashbringer',
            icon: <img src="https://i.imgur.com/GJ0hAoZ.jpeg" className="w-10 h-10 rounded-md object-cover border border-white/10" alt="Ashbringer" />,
            lore: "Once the blade of the Scarlet Highlord, it was corrupted by the murder of Alexandros Mograine. Now in the possession of the Lich King's death knights in Naxxramas, rumors swirl that it can be purified... or that its hunger can be fully realized.",
            items: [
                {
                    name: 'Corrupted Ashbringer',
                    quality: 'epic',
                    ilvl: 115,
                    slot: 'Two-Hand',
                    type: 'Sword',
                    damage: '259 - 389',
                    speed: '3.60',
                    dps: '90.0',
                    stats: ['-25 Stamina', '+25 Intellect'],
                    binding: 'Soulbound',
                    unique: true,
                    effects: [
                        'Equip: Inflicts the will of the Ashbringer upon the wielder (-25 Reputation with Argent Dawn).',
                        'Chance on hit: Steals 185 to 215 life from target.',
                        '\"The blade creates a haunting sound as it is swung.\"'
                    ]
                },
                {
                    name: 'Ashbringer, the Redeemed',
                    quality: 'legendary',
                    ilvl: 141,
                    slot: 'Two-Hand',
                    type: 'Sword',
                    damage: '380 - 550',
                    speed: '3.60',
                    dps: '129.2',
                    binding: 'Soulbound',
                    stats: ['+55 Strength', '+55 Stamina'],
                    unique: true,
                    sockets: ['Red Socket', 'Red Socket'],
                    socketBonus: '+8 Strength',
                    effects: [
                        'Equip: Improves critical strike rating by 40 (1.81% @ L70).',
                        'Equip: Increases attack power by 120 vs Undead and Demons.',
                        'Chance on hit: Blasts target for 400 Holy damage and heals wielder for 100.',
                        '\"The Light prevails.\"'
                    ]
                },
                {
                    name: 'The Empty Shell',
                    quality: 'legendary',
                    ilvl: 155,
                    slot: 'Two-Hand',
                    type: 'Sword',
                    damage: '450 - 650',
                    speed: '3.60',
                    dps: '152.7',
                    binding: 'Soulbound',
                    stats: ['+70 Strength', '+70 Stamina'],
                    unique: true,
                    sockets: ['Red Socket', 'Red Socket', 'Yellow Socket'],
                    socketBonus: '+10 Strength',
                    effects: [
                        'Equip: Improves critical strike rating by 50 (2.26% @ L70).',
                        'Equip: A hollow vessel waiting for a soul. Deals no elemental damage.',
                        '\"Cold to the touch.\"'
                    ]
                },
                {
                    name: 'The Ashbringer',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Two-Hand',
                    type: 'Sword',
                    damage: '500 - 750',
                    speed: '3.60',
                    dps: '173.6',
                    binding: 'Soulbound',
                    stats: ['+80 Strength', '+80 Stamina'],
                    unique: true,
                    sockets: ['Red Socket', 'Red Socket', 'Yellow Socket', 'Prismatic Socket'],
                    socketBonus: '+12 Strength',
                    effects: [
                        'Equip: Improves critical strike rating by 60 (2.71% @ L70).',
                        'Use: "Wake of Ashes" - Unleashes a cone of Holy Light, stunning all Undead and Demons for 5 sec. (2 Min CD).',
                        'Chance on hit: Blasts the enemy for 800 Holy damage and grants "Crusader\'s Wrath" (+10% Dmg for 10s).',
                        '\"I... am... Ashbringer.\"'
                    ]
                }
            ],
            quest: [
                '**Act I: The Corrupted Blade (Steps 1-6)**\n• Loot [Corrupted Ashbringer] from the Four Horsemen.\n• Equip the blade (Hostile to Argent Dawn).\n• Enter Scarlet Monastery (Cathedral) to meet Mograine\'s ghost.\n• Feed the blade 500 Scourge souls in Plaguelands.\n• Feed the blade 100 Elite Demon souls in Outland.',
                '**Act II: The Path of Redemption (Steps 7-11)**\n• Visit Uther\'s Tomb (WPL).\n• Slay the Twilight Lord at Altar of Storms.\n• Reveal the blade to A\'dal in Shattrath.\n• Retrieve [Prism of Inner Light] from Reliquary of Souls.\n• Capture Teron Gorefiend\'s soul.',
                '**Act III: The Reforging (Steps 12-17)**\n• Gather 20 [Elementium Bars] and 10 [Fel Hardened Steel].\n• Retrieve [Hammer of the Naaru] from Gruul\'s Lair.\n• Defend the Anvil during the Reforging Ritual.\n• Receive [The Empty Shell].',
                '**Act IV: The Highlord\'s Return (Steps 18-20)**\n• Channel the blade on M\'uru (Sunwell) as he becomes Entropius.\n• Survive the "Spark of Entropy".\n• Return to Light\'s Hope Chapel for Tirion Fordring\'s blessing.\n• **Reward: [The Ashbringer]**'
            ]
        },
        {
            id: 'atiesh',
            name: 'Atiesh, Greatstaff of the Guardian',
            icon: <img src="https://i.imgur.com/3eJSFLv.jpeg" className="w-10 h-10 rounded-md object-cover border border-white/10" alt="Atiesh" />,
            lore: "The staff of Medivh, the Last Guardian. Shattered into splinters and scattered across Azeroth. Reforming it grants mastery over magical energies, but the staff retains the echo of its former master... and the demon that possessed him.",
            items: [
                {
                    name: 'Frame of Atiesh',
                    quality: 'legendary',
                    ilvl: 115,
                    slot: 'Staff',
                    type: 'Staff',
                    damage: '100 - 180',
                    speed: '2.90',
                    dps: '48.2',
                    stats: ['+30 Stamina', '+30 Intellect', '+20 Spirit'],
                    unique: true,
                    effects: [
                        'Equip: A brittle frame, pulsating with faint arcane energy.',
                        '\"It feels incomplete.\"'
                    ]
                },
                {
                    name: 'Tainted Staff of Atiesh',
                    quality: 'legendary',
                    ilvl: 141,
                    slot: 'Staff',
                    type: 'Staff',
                    damage: '160 - 320',
                    speed: '3.20',
                    dps: '75.0',
                    stats: ['+60 Intellect', '+75 Stamina', '+60 Spirit'],
                    unique: true,
                    sockets: ['Red Socket', 'Yellow Socket', 'Blue Socket'],
                    socketBonus: '+12 Spell Power',
                    effects: [
                        'Equip: Improves Spell Hit Rating by 20 (1.59% @ L70).',
                        'Equip: Improves Spell Haste Rating by 20 (1.27% @ L70).',
                        'Equip: Improves Spell Critical Strike Rating by 30 (1.36% @ L70).',
                        'Equip: Increases damage and healing done by magical spells and effects by up to 350.',
                        'Equip: "Mark of Sargeras" - Periodically summons demons to attack you.',
                        'Use: Creates a portal to Karazhan (Group).',
                        '\"The magic within is restless...\"'
                    ]
                },
                {
                    name: 'Atiesh (Purified)',
                    quality: 'legendary',
                    ilvl: 155,
                    slot: 'Staff',
                    type: 'Staff',
                    damage: '200 - 400',
                    speed: '3.20',
                    dps: '93.7',
                    stats: ['+80 Intellect', '+100 Stamina', '+80 Spirit'],
                    unique: true,
                    sockets: ['Red Socket', 'Red Socket', 'Yellow Socket'],
                    socketBonus: '+15 Spell Power',
                    effects: [
                        'Equip: The corruption has been cleansed, but the power is dormant.',
                        'Use: "Commune" - Attempt to communicate with the spirit of Medivh.',
                        '\"Waiting for a spark.\"'
                    ]
                },
                {
                    name: 'Atiesh, Greatstaff of the Guardian',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Staff',
                    type: 'Staff',
                    damage: '240 - 450',
                    speed: '3.20',
                    dps: '107.8',
                    stats: ['+90 Intellect', '+120 Stamina', '+90 Spirit'],
                    unique: true,
                    sockets: ['Red Socket', 'Red Socket', 'Yellow Socket', 'Blue Socket'],
                    socketBonus: '+16 Spell Power',
                    effects: [
                        'Equip: Improves Spell Hit Rating by 30 (2.38% @ L70).',
                        'Equip: Improves Spell Haste Rating by 30 (1.91% @ L70).',
                        'Equip: Improves Spell Critical Strike Rating by 45 (2.26% @ L70).',
                        'Equip: Increases damage and healing done by magical spells and effects by up to 600.',
                        {
                            type: 'dynamic',
                            Mage: 'Equip: Aura (Mage) - Improves Spell Critical Strike Rating of party by 5%.',
                            Warlock: 'Equip: Aura (Warlock) - Increases party Spell Damage by 20% of your Spirit.',
                            Priest: 'Equip: Aura (Priest) - Restores 60 mana per 5 seconds to party.',
                            Druid: 'Equip: Aura (Druid) - Improves Spell Haste Rating of party by 5%.'
                        },
                        'Use: Creates a portal to Karazhan (Instant) allowing the raid to access the master\'s library.',
                        '\"I am the key.\"'
                    ]
                }
            ],
            quest: [
                '**Act I: The Frame (Steps 1-7)**\n• Collect 40 [Splinters of Atiesh] from Naxxramas.\n• Combine splinters.\n• Consult Aegwynn in Theramore.\n• Exorcise the Ghost of Arcanagos (Karazhan).\n• Loot Base (C\'Thun) and Head (Kel\'Thuzad).\n• Assemble at Eternity Forge.',
                '**Act II: The Cleansing (Steps 8-12)**\n• Equip Tainted Staff ("Mark of Sargeras").\n• Absorb Fel Reaver explosion (Shadowmoon).\n• Banish Avatar of the Martyred (Auchenai).\n• Channel into Core of the Phoenix (Tempest Keep).\n• Win Chess Event SOLO.',
                '**Act III: The Weave (Steps 13-16)**\n• Slay Malygos (Timelocked) -> Blue Weave.\n• Slay Aeonus (Black Morass) -> Bronze Weave.\n• Emerald Dream Event -> Green Weave.\n• Hand-in to Alexstrasza.',
                '**Act IV: The Consecration (Steps 17-20)**\n• Summon Gul\'dan\'s Echo at Altar of Damnation.\n• Defeat "Atiesh, Hand of Sargeras".\n• Dip staff in Well of Eternity (Hyjal).\n• Return to Aegwynn.\n• **Reward: [Atiesh, Greatstaff of the Guardian]**'
            ]
        },
        {
            id: 'warglaives',
            name: 'Warglaives of Azzinoth',
            icon: <img src="https://i.imgur.com/svbHGdu.jpeg" className="w-10 h-10 rounded-md object-cover border border-white/10" alt="Warglaives" />,
            lore: "The twin blades of the Betrayer, Illidan Stormrage. Forged from the fel-metal of the Burning Legion, they crave the blood of demons. To wield them is to embrace the inner demon, for only one who has sacrificed everything can truly master them.",
            items: [
                {
                    setItems: [
                        {
                            name: 'Warglaive of Azzinoth (MH)',
                            quality: 'legendary',
                            ilvl: 146,
                            slot: 'Main Hand',
                            type: 'Sword',
                            damage: '235 - 415',
                            speed: '2.80',
                            dps: '116.1',
                            stats: ['+22 Agility', '+35 Stamina'],
                            classes: 'Warrior, Rogue',
                            effects: [
                                'Equip: Improves hit rating by 21 (1.33% @ L70).'
                            ]
                        },
                        {
                            name: 'Warglaive of Azzinoth (OH)',
                            quality: 'legendary',
                            ilvl: 146,
                            slot: 'Off Hand',
                            type: 'Sword',
                            damage: '235 - 415',
                            speed: '2.80',
                            dps: '116.1',
                            stats: ['+22 Agility', '+35 Stamina'],
                            classes: 'Warrior, Rogue',
                            effects: [
                                'Equip: Improves critical strike rating by 21 (0.95% @ L70).',
                                '(2) Set: Your melee attacks have a chance to increase your haste rating by 450 (28.5% @ L70) for 10 sec.',
                                '(2) Set: Increases attack power by 200 when fighting Demons, Void creatures, or players in Demon form.',
                                '\"You are not prepared.\"'
                            ]
                        }
                    ]
                },
                {
                    setItems: [
                        {
                            name: 'Warglaive of the Void-Hunter (MH)',
                            quality: 'legendary',
                            ilvl: 164,
                            slot: 'Main Hand',
                            type: 'Sword',
                            damage: '350 - 620',
                            speed: '2.80',
                            dps: '173.2',
                            stats: ['+45 Agility', '+60 Stamina'],
                            classes: 'Warrior, Rogue',
                            sockets: ['Red Socket', 'Red Socket'],
                            socketBonus: '+8 Agility',
                            effects: [
                                'Equip: Improves hit rating by 40 (2.54% @ L70).'
                            ]
                        },
                        {
                            name: 'Warglaive of the Void-Hunter (OH)',
                            quality: 'legendary',
                            ilvl: 164,
                            slot: 'Off Hand',
                            type: 'Sword',
                            damage: '350 - 620',
                            speed: '2.80',
                            dps: '173.2',
                            stats: ['+45 Agility', '+60 Stamina'],
                            classes: 'Warrior, Rogue',
                            sockets: ['Yellow Socket', 'Yellow Socket'],
                            socketBonus: '+8 Agility',
                            effects: [
                                'Equip: Improves critical strike rating by 40 (1.81% @ L70).',
                                '(2) Set: Chance on hit to increase haste by 600 for 15 sec.',
                                '(2) Set: Attacks ignore 35% of enemy armor.',
                                '(Note: Model has a Void-Purple Glow)',
                                '\"The hunter becomes the hunted.\"'
                            ]
                        }
                    ]
                }
            ],
            quest: [
                '**Stage 1: The Twin Blades (Tier 6)**\nRare drop from Illidan Stormrage in Black Temple. No quest required, but the drop chance is low.',
                '**Stage 2: The Void-Hunter (Tier 6.5)**\nRequires the "Heart of the Betrayer" to be cleansed in the energies of the Twisting Nether (Citadel of the Void).'
            ]
        },
        {
            id: 'thoridal',
            name: 'Thori\'dal, the Stars\' Fury',
            icon: <img src="https://i.imgur.com/qeFySCZ.jpeg" className="w-10 h-10 rounded-md object-cover border border-white/10" alt="Thori'dal" />,
            lore: "A bow woven from pure starlight, said to have been used by the high elves of old against the trolls. It draws energy from the Sunwell itself, generating magical arrows that pierce even the thickest armor.",
            items: [
                {
                    name: 'Thori\'dal, the Stars\' Fury',
                    quality: 'legendary',
                    ilvl: 154,
                    slot: 'Ranged',
                    type: 'Bow',
                    damage: '350 - 520',
                    speed: '2.70',
                    dps: '161.1',
                    binding: 'Soulbound',
                    stats: ['+45 Agility', '+40 Stamina'],
                    classes: 'Hunter, Rogue, Warrior',
                    unique: true,
                    effects: [
                        'Equip: Does not require ammo.',
                        'Equip: Improves critical strike rating by 30 (1.36% @ L70).',
                        'Equip: Arrows deal Arcane damage and leave a glittering trail.',
                        '\"The energy of the Sunwell courses through it.\"'
                    ]
                },
                {
                    name: 'Thori\'dal, Starlight\'s Vengeance',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Ranged',
                    type: 'Bow',
                    damage: '450 - 680',
                    speed: '2.70',
                    dps: '209.3',
                    binding: 'Soulbound',
                    stats: ['+65 Agility', '+55 Stamina'],
                    classes: 'Hunter, Rogue, Warrior',
                    unique: true,
                    sockets: ['Red Socket', 'Red Socket', 'Yellow Socket'],
                    socketBonus: '+12 Attack Power',
                    effects: [
                        'Equip: Does not require ammo. Arrows are formed of pure light.',
                        'Equip: Your attacks ignore 25% of your opponent\'s armor.',
                        'Equip: Improves critical strike rating by 50 (2.26% @ L70).',
                        'Chance on hit: "Starshot" - Fires a barrage of stars at the target dealing Arcane damage.',
                        '\"The stars align to strike you down.\"'
                    ]
                }
            ],
            quest: [
                '**Stage 1: The Stars\' Fury (Tier 6.5)**\nLegendary drop from Kil\'jaeden in the Sunwell Plateau.',
                '**Stage 2: Starlight\'s Vengeance (Ascended)**\nRequires a quest chain involving the Blue Dragonflight and Kalecgos to attune the bow to the songs of the cosmos.'
            ]
        },
        {
            id: 'vessel',
            name: 'Vessel of the Forgotten Light',
            icon: <img src="https://i.imgur.com/Fu9EkN1.jpeg" className="w-10 h-10 rounded-md object-cover border border-white/10" alt="Vessel" />,
            lore: "An ancient draenei mace used by the first vindicators. It was lost during the fall of Shattrath. The Light within it has grown dim, but it remembers the touch of the Naaru.",
            items: [
                {
                    name: 'Broken Vessel of the Light',
                    quality: 'epic',
                    ilvl: 115,
                    slot: 'Main Hand',
                    type: 'Mace',
                    damage: '85 - 198',
                    speed: '2.60',
                    dps: '54.4',
                    binding: 'Soulbound',
                    stats: ['+25 Intellect', '+25 Stamina', '+25 Spirit'],
                    classes: 'Priest, Paladin, Shaman, Druid',
                    unique: true,
                    effects: [
                        'Equip: Increases healing done by up to 250 and damage done by up to 85 for all magical spells and effects.',
                        '\"Cracked and fading.\"'
                    ]
                },
                {
                    name: 'Restored Vessel',
                    quality: 'legendary',
                    ilvl: 141,
                    slot: 'Main Hand',
                    type: 'Mace',
                    damage: '150 - 280',
                    speed: '2.60',
                    dps: '82.7',
                    binding: 'Soulbound',
                    stats: ['+45 Intellect', '+60 Stamina', '+45 Spirit'],
                    classes: 'Priest, Paladin, Shaman, Druid',
                    unique: true,
                    effects: [
                        'Equip: Increases healing done by up to 450 and damage done by up to 150 for all magical spells and effects.',
                        'Equip: "A\'dal\'s Grace" - Your direct heals have a chance to bless the target, increasing healing received by 10% for 10 sec.',
                        '\"The Naaru have not forgotten.\"'
                    ]
                },
                {
                    name: 'Vessel of the Forgotten Light',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Main Hand',
                    type: 'Mace',
                    damage: '200 - 370',
                    speed: '2.60',
                    dps: '109.6',
                    binding: 'Soulbound',
                    stats: ['+75 Intellect', '+100 Stamina', '+75 Spirit'],
                    classes: 'Priest, Paladin, Shaman, Druid',
                    unique: true,
                    sockets: ['Red Socket', 'Red Socket', 'Blue Socket', 'Prismatic Socket'],
                    socketBonus: '+16 Spell Power',
                    effects: [
                        'Equip: Increases healing done by up to 650 and damage done by up to 217 for all magical spells and effects.',
                        'Equip: Chance on heal to trigger "Light\'s Grace" - Stores 20% of overhealing (Max 10,000). Detonates when target drops below 35% HP, healing them and 4 allies.',
                        '\"The Light never dies.\"'
                    ]
                }
            ],
            quest: [
                '**Stage 1: The Broken Vessel (Tier 4)**\nFound in the ruins of Auchindoun (Heroic Mana-Tombs).',
                '**Stage 2: Restoration (Tier 5)**\nRequires gathering "Geometric Crystal Shards" from void entities in Netherstorm.',
                '**Stage 3: The Forgotten Light (Tier 6.5)**\nAttuned by A\'dal himself after proving your worth in the Temple of Karabor (Black Temple).'
            ]
        },
        {
            id: 'crown',
            name: 'Crown of the Sunken Star',
            icon: <img src="https://i.imgur.com/7S1vmq1.jpeg" className="w-10 h-10 rounded-md object-cover border border-white/10" alt="Crown" />,
            lore: "A helm forged by Queen Azshara's most trusted arcanists, intended for a champion who could breathe the depths. It pulses with the pressure of the ocean floor.",
            items: [
                {
                    name: 'Coral-Encrusted Helm',
                    quality: 'epic',
                    ilvl: 115,
                    slot: 'Head',
                    type: 'Cloth',
                    armor: '180 Armor',
                    stats: ['+35 Stamina', '+35 Intellect', '+25 Spirit'],
                    binding: 'Soulbound',
                    unique: true,
                    effects: [
                        'Equip: Increases damage and healing done by magical spells and effects by up to 45.',
                        'Use: Breathe underwater for 1 hour. (30 Min CD)',
                        '\"Smells of salt and rot.\"'
                    ]
                },
                {
                    name: 'Crown of the Tides',
                    quality: 'legendary',
                    ilvl: 141,
                    slot: 'Head',
                    type: 'Cloth',
                    armor: '220 Armor',
                    stats: ['+55 Stamina', '+55 Intellect', '+40 Spirit'],
                    binding: 'Soulbound',
                    unique: true,
                    sockets: ['Meta Socket', 'Blue Socket'],
                    socketBonus: '+9 Spell Damage',
                    effects: [
                        'Equip: Increases damage and healing done by magical spells and effects by up to 65.',
                        'Equip: Improves spell critical strike rating by 30 (1.36% @ L70).',
                        'Equip: Improves spell hit rating by 25 (1.98% @ L70).',
                        'Equip: Improves spell haste rating by 30 (1.90% @ L70).',
                        'Use: Gain 350 spell haste rating for 12 sec. Reduces healing received by 100% for 4 sec after.',
                        '\"A whisper in the deep.\"'
                    ]
                },
                {
                    name: 'Crown of the Sunken Star',
                    quality: 'legendary',
                    ilvl: 164,
                    slot: 'Head',
                    type: 'Cloth',
                    armor: '250 Armor',
                    stats: ['+80 Stamina', '+80 Intellect', '+60 Spirit'],
                    binding: 'Soulbound',
                    unique: true,
                    sockets: ['Meta Socket', 'Red Socket', 'Yellow Socket', 'Blue Socket'],
                    socketBonus: '+15 Spell Damage',
                    effects: [
                        'Equip: Increases damage and healing done by magical spells and effects by up to 85.',
                        'Equip: Improves spell critical strike rating by 50 (2.26% @ L70).',
                        'Equip: Improves spell hit rating by 35 (2.77% @ L70).',
                        'Equip: Improves spell haste rating by 50 (3.17% @ L70).',
                        'Use: "Gaze of the Abyss" - Gain 500 haste rating for 20 sec. Reduces healing received by 100% for 4 sec if you kill a target, otherwise for 10 sec.',
                        '\"The void stares back.\"'
                    ]
                }
            ],
            quest: [
                '**Stage 1: The Coral Helm (Tier 5)**\nLooted from Lady Vashj in Serpentshrine Cavern.',
                '**Stage 2: The Tides (Tier 6)**\nRequires "Abyssal Pearls" from the Black Temple sewers (Illidari Council).',
                '**Stage 3: The Sunken Star (Tier 6.5)**\nRequires defeating the darkness within the Sunwell Plateau and claiming the essence of the Void.'
            ]
        }
    ];

    const activeItem = legendaries.find(l => l.id === activeLegendary);

    // Safety check for phase range
    const currentItem = activeItem.items[Math.min(phase, activeItem.items.length - 1)];

    // Background Image Style
    const bgStyle = {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95), rgba(0,0,0,0.7)), url(${backgrounds[activeLegendary]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transition: 'background-image 0.5s ease-in-out'
    };

    // Update phase when switching legendary if needed (reset to 0 or keep?) 
    // Keeping it simple: Reset to 0 when switching legendary
    const handleSelectLegendary = (id) => {
        setActiveLegendary(id);
        setPhase(0);
    };

    return (
        <div className="min-h-screen text-gray-200 font-sans selection:bg-orange-500/30" style={bgStyle}>
            {/* Header */}
            <header className="bg-black/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="https://i.imgur.com/L8S5MCi.jpeg" className="w-12 h-12 rounded-lg object-cover border border-orange-500/30 shadow-lg" />
                        <div>
                            <h1 className="text-3xl font-bold text-white tracking-tight">Legendary Artifacts</h1>
                            <p className="text-orange-400/80 text-sm">Weapons of Myth & Power</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full border border-white/5">
                        <Sparkles className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-gray-400">TBC+ Progression System</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">
                {/* Sidebar Navigation */}
                <div className="w-72 flex-shrink-0 space-y-2">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">Artifacts</h3>
                    {legendaries.map((legendary) => (
                        <button
                            key={legendary.id}
                            onClick={() => handleSelectLegendary(legendary.id)}
                            className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${activeLegendary === legendary.id
                                ? 'bg-gradient-to-r from-orange-600/20 to-orange-900/10 border border-orange-500/30'
                                : 'hover:bg-white/5 border border-transparent hover:border-white/10'
                                }`}
                        >
                            {activeLegendary === legendary.id && (
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                            )}
                            <div className={`p-2 rounded-lg transition-colors ${activeLegendary === legendary.id ? 'bg-orange-500 text-black' : 'bg-gray-800 text-gray-400 group-hover:text-gray-200'
                                }`}>
                                {legendary.icon}
                            </div>
                            <span className={`font-medium ${activeLegendary === legendary.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                }`}>
                                {legendary.name}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="flex-1 space-y-8">
                    {/* Lore Section */}
                    <div className="bg-black/60 backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-orange-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                            {activeItem.name}
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed italic border-l-4 border-orange-500/50 pl-6">
                                "{activeItem.lore}"
                            </p>
                        </div>
                    </div>

                    {/* Progression Interface */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Tooltip Preview */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-orange-400" />
                                    Artifact Status
                                </h3>
                                {/* Phase Selector */}
                                <div className="flex bg-black/40 rounded-lg p-1 border border-white/10">
                                    {['Origin', 'Reforged', 'Ascended', 'Finale'].map((label, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setPhase(idx)}
                                            disabled={idx >= activeItem.items.length}
                                            className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${phase === idx
                                                ? 'bg-orange-600 text-white shadow-lg'
                                                : 'text-gray-500 hover:text-gray-300'
                                                } ${idx >= activeItem.items.length ? 'opacity-30 cursor-not-allowed' : ''}`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* The Tooltip Component - Handles both single items and Sets (Warglaives) */}
                            <div className="flex flex-col gap-4 justify-center bg-black/20 p-8 rounded-xl border border-white/5 items-center">
                                {currentItem.setItems ? (
                                    currentItem.setItems.map((setItem, idx) => (
                                        <WowTooltip key={idx} item={setItem} />
                                    ))
                                ) : (
                                    <WowTooltip item={{
                                        ...currentItem,
                                        effects: activeLegendary === 'atiesh' && currentItem.effects
                                            ? currentItem.effects.map(eff => typeof eff === 'object' && eff.type === 'dynamic' ? eff[atieshClass] : eff)
                                            : currentItem.effects
                                    }} />
                                )}
                            </div>

                            {/* Class Selector for Atiesh */}
                            {activeLegendary === 'atiesh' && phase === 3 && (
                                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl">
                                    <label className="text-blue-300 text-sm font-bold block mb-2">Select Class Aura Preview:</label>
                                    <select
                                        value={atieshClass}
                                        onChange={(e) => setAtieshClass(e.target.value)}
                                        className="w-full bg-black/50 border border-blue-500/30 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-400"
                                    >
                                        <option value="Mage">Mage (Crit)</option>
                                        <option value="Warlock">Warlock (Spell Dmg)</option>
                                        <option value="Priest">Priest (Mp5)</option>
                                        <option value="Druid">Druid (Haste)</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        {/* Quest Chain */}
                        <div className="bg-black/80 backdrop-blur rounded-2xl border border-white/10 p-6 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Scroll className="w-5 h-5 text-yellow-400" />
                                Quest Chain
                            </h3>
                            <div className="space-y-8 relative">
                                {/* Vertical Line */}
                                <div className="absolute left-3.5 top-2 bottom-4 w-0.5 bg-gradient-to-b from-orange-500/50 to-transparent" />

                                {activeItem.quest.map((step, idx) => (
                                    <div key={idx} className={`relative pl-10 transition-opacity duration-500 ${idx === phase ? 'opacity-100' : 'opacity-50'}`}>
                                        <div className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 bg-black ${idx <= phase ? 'border-orange-500 text-orange-500' : 'border-gray-700 text-gray-700'
                                            }`}>
                                            {idx + 1}
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-orange-500/30 transition-colors">
                                            <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                                                {formatText(step)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-6 flex items-start gap-3 text-xs text-gray-500">
                                <AlertTriangle className="w-4 h-4 flex-shrink-0 text-orange-500/50" />
                                <p>Progress through the tiers to unlock the weapon's true potential. Ascended forms (Tier 3) are intended for Sunwell Plateau progression.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Legendaries;
