import React from 'react';
import {
    Shield, Skull, Clock, Star, Zap, Flag, Trophy, Map, Users,
    Key, Lock, CheckCircle, Flame, Snowflake, Heart, Crown,
    Coins, BookOpen, Anchor, Ghost, Mountain, Calendar
} from 'lucide-react';

export const pathfinderData = {
    summary: {
        points: 8450,
        guildPoints: 12500, // Suggestion 8: Guild Points
        goldEarned: 154320, // Suggestion 7: Gold Metric
        exaltedCount: 14, // Suggestion 6: Rep Metric
        recent: [ // Suggestion 1: Recent Activity
            {
                title: "The Duskhaven Defender",
                desc: "Exalted with the Duskhaven Resistance.",
                points: 20,
                icon: <Shield />,
                date: "2 days ago",
                user: "You"
            },
            {
                title: "Server First: Level 80",
                desc: "Attained level 80 for the first time on the realm.",
                points: 0,
                icon: <Trophy />,
                date: "Guild Chat: 5m ago",
                user: "Kungen"
            },
            {
                title: "Slayer of Gruul",
                desc: "Defeat Gruul the Dragonkiller in the 25-player raid.",
                points: 10,
                icon: <Skull />,
                date: "5 days ago",
                user: "You"
            }
        ],
        tracked: [ // Suggestion 2: Breadcrumb Tracking
            { id: 401, title: "The Diplomat" },
            { id: 102, title: "You Are Not Prepared" }
        ],
        nearCompletion: [ // Suggestion 5: Near Completion
            { title: "Dungeon Master", progress: "95%" },
            { title: "1000 Daily Quests", progress: "89%" }
        ]
    },
    categories: [
        {
            id: "attunements", // New Section: Attunement Tracker
            title: "Attunements",
            icon: <Lock className="w-5 h-5 text-red-500" />,
            bgImage: "https://i.imgur.com/cOsLrHP.jpeg", // Dynamic BG
            description: "Track your access to the endgame raids.",
            achievements: [
                {
                    id: "attune_kara",
                    title: "Karazhan",
                    tier: "Tier 4",
                    desc: "The Master's Key. Required for entry.",
                    status: "Completed",
                    steps: [
                        { label: "Arcatraz Key Fragment", done: true },
                        { label: "Shadow Lab Key Fragment", done: true },
                        { label: "Steamvault Key Fragment", done: true },
                        { label: "Opening the Dark Portal", done: true }
                    ],
                    icon: <Ghost />,
                    reward: "Unlock: Karazhan"
                },
                {
                    id: "attune_ssc",
                    title: "Serpentshrine Cavern",
                    tier: "Tier 5",
                    desc: "The Vashj'ir Protocol. Survive the waters.",
                    status: "In Progress",
                    steps: [
                        { label: "Slave Pens (Heroic) Full Clear", done: true },
                        { label: "Summon & Kill Nightbane", done: false },
                        { label: "Loot 'Vashj's Command Scroll'", done: false }
                    ],
                    icon: <Anchor />,
                    reward: "Unlock: SSC"
                },
                {
                    id: "attune_maw",
                    title: "The Abyssal Maw", // New TBC+ Raid
                    tier: "Tier 5",
                    desc: "The Bends. Survive the crushing depths.",
                    status: "Locked",
                    steps: [
                        { label: "Loot 'Vashj's Command Scroll'", done: false },
                        { label: "10 Primal Nether & 5 Primal Water", done: false },
                        { label: "Obtain 'Cenarion Respiration Tincture'", done: false },
                        { label: "Use Tincture at Steam Pump Console", done: false }
                    ],
                    icon: <Anchor />,
                    reward: "Unlock: Abyssal Maw"
                },
                {
                    id: "attune_tk",
                    title: "The Eye (Tempest Keep)",
                    tier: "Tier 5",
                    desc: "Cipher of Damnation. The Hand of Gul'dan.",
                    status: "Locked",
                    steps: [
                        { label: "Cipher of Damnation Questline", done: false },
                        { label: "Trial of the Naaru (Magtheridon)", done: false },
                        { label: "Trial of the Naaru (Gruul)", done: false },
                        { label: "Trial of the Naaru (Nightbane)", done: false }
                    ],
                    icon: <Zap />,
                    reward: "Unlock: The Eye"
                },
                {
                    id: "attune_siegers",
                    title: "Siege of Quel'Danil", // New TBC+ Raid
                    tier: "Tier 5",
                    desc: "The Elven Schism. Defend the Lodge.",
                    status: "Locked",
                    steps: [
                        { label: "Diplomacy: Wildhammer Clan", done: false },
                        { label: "Recover High Elf Runestone", done: false },
                        { label: "Defeat Warlord Salaris (Quest)", done: false }
                    ],
                    icon: <Shield />,
                    reward: "Unlock: Seege of Quel'Danil"
                },
                {
                    id: "attune_hyjal",
                    title: "Hyjal Summit",
                    tier: "Tier 6",
                    desc: "The Vial of Eternity. Requires Tier 5 completion.",
                    status: "Locked",
                    steps: [
                        { label: "Defeat Lady Vashj", done: false },
                        { label: "Defeat Kael'thas Sunstrider", done: false }
                    ],
                    icon: <Mountain />,
                    reward: "Unlock: Hyjal Summit"
                },
                {
                    id: "attune_bt",
                    title: "Black Temple",
                    tier: "Tier 6",
                    desc: "Medallion of Karabor. The fall of the Betrayer.",
                    status: "Locked",
                    steps: [
                        { label: "Seer Olum Chain (Serpentshrine)", done: false },
                        { label: "Al'ar's Ashes (Tempest Keep)", done: false },
                        { label: "Rage Winterchill (Hyjal)", done: false }
                    ],
                    icon: <Skull />,
                    reward: "Unlock: Black Temple"
                },
                {
                    id: "attune_void",
                    title: "Citadel of the Void", // New TBC+ Raid
                    tier: "Tier 6.5",
                    desc: "Void-Attuned Seal. Confront Dimensius.",
                    status: "Locked",
                    steps: [
                        { label: "Protectorate Questline (Netherstorm)", done: false },
                        { label: "Mana Tombs (Heroic) Run", done: false },
                        { label: "Collect 10 Void Shards", done: false }
                    ],
                    icon: <Star />,
                    reward: "Unlock: Citadel of the Void"
                },
                {
                    id: "attune_twilight",
                    title: "Twilight of the Mag'har", // New TBC+ Raid
                    tier: "Tier 6.5",
                    desc: "The Ancestral Call. Save Garrosh.",
                    status: "Locked",
                    steps: [
                        { label: "Exalted with The Mag'har", done: false },
                        { label: "Loot 'Dimming Ancestral Bead'", done: false },
                        { label: "Summon & Defeat Void Lord Xo'rath", done: false },
                        { label: "Use Oshu'gun Crystal Key", done: false }
                    ],
                    icon: <Ghost />,
                    reward: "Unlock: Oshu'gun"
                },
                {
                    id: "attune_elements",
                    title: "Throne of Elements", // New TBC+ Raid
                    tier: "Tier 4.5",
                    desc: "Essence of the Furies. Restore the balance.",
                    status: "Locked",
                    steps: [
                        { label: "Cipher of Damnation Complete", done: false },
                        { label: "Elemental Plateau Event", done: false },
                        { label: "Defeat Gordawg (Quest)", done: false }
                    ],
                    icon: <Flame />,
                    reward: "Unlock: Throne of Elements"
                },
                {
                    id: "attune_crypts",
                    title: "Karazhan Crypts", // New TBC+ Raid
                    tier: "Tier 4",
                    desc: "The Lower Key. The dead do not sleep.",
                    status: "Locked",
                    steps: [
                        { label: "Moroes Drop (Key Fragment)", done: false },
                        { label: "Morgan's Plot Questline", done: false },
                        { label: "Nightbane Drop (Charred Bone)", done: false }
                    ],
                    icon: <Ghost />,
                    reward: "Unlock: Karazhan Crypts"
                }

            ]
        },
        {
            id: "feats",
            title: "Feats of Strength",
            icon: <Star className="w-5 h-5 text-orange-500" />,
            heroic: true,
            bgImage: "https://i.imgur.com/X2D1sO5.jpeg",
            achievements: [
                {
                    id: 1,
                    title: "Realm First! Kil'jaeden",
                    desc: "Participated in the realm first defeat of Kil'jaeden in Sunwell Plateau.",
                    points: 0,
                    date: "05/12/2008",
                    icon: <Skull className="text-orange-500" />,
                    reward: "Title: Hand of A'dal",
                    lore: "The final push against the Deceiver required coordinated efforts from the entire server." // Suggestion 11: Lore Tooltip
                },
                {
                    id: 2,
                    title: "Ashes of Al'ar",
                    desc: "Obtain the Phoenix Mount from Kael'thas Sunstrider.",
                    points: 0,
                    date: "11/24/2007",
                    icon: <Zap className="text-orange-500" />,
                    reward: "Mount: Ashes of Al'ar",
                    lore: "A symbol of rebirth, this mount is the rarest creature in the skies of Outland."
                },
                {
                    id: 3,
                    title: "Scarab Lord",
                    desc: "Opened the Gates of Ahn'Qiraj.",
                    points: 0,
                    date: "01/03/2006",
                    icon: <Flag className="text-orange-500" />,
                    reward: "Title: Scarab Lord",
                    lore: "Only one could bang the gong."
                }
            ]
        },
        {
            id: "raids",
            title: "Dungeons & Raids",
            icon: <Skull className="w-5 h-5" />,
            bgImage: "https://i.imgur.com/eTOvChl.jpeg",
            achievements: [
                {
                    id: 101,
                    title: "Glory of the Outland Raider",
                    desc: "Complete the raid achievements listed below.",
                    points: 50,
                    progress: "24/25",
                    icon: <Trophy />,
                    reward: "Mount: Ironbound Proto-Drake"
                },
                {
                    id: 102,
                    title: "You Are Not Prepared",
                    desc: "Defeat Illidan Stormrage in the Black Temple without anyone in the raid dying during Phase 3.",
                    points: 25,
                    icon: <Skull />,
                    lore: "Illidan's mastery of the Warglaives is unmatched."
                },
                {
                    id: 103,
                    title: "Sigil of the Seven",
                    desc: "Defeat High King Maulgar while all 4 of his councilors are still alive (simultaneous kill).",
                    points: 15,
                    icon: <Shield />,
                    lore: "A test of tanking coordination."
                }
            ]
        },
        {
            id: "seasonal", // Suggestion 15: Seasonal Tab
            title: "Seasonal",
            icon: <Calendar className="w-5 h-5" />, // Placeholder
            bgImage: "https://i.imgur.com/pU6IfTx.jpeg",
            achievements: [
                {
                    id: 801,
                    title: "Flame Keeper",
                    desc: "Complete the Midsummer achievements.",
                    points: 50,
                    icon: <Flame />,
                    reward: "Title: Flame Keeper",
                    date: "06/21/2007"
                },
                {
                    id: 802,
                    title: "Merrymaker",
                    desc: "Complete the Winter Veil achievements.",
                    points: 50,
                    icon: <Snowflake />, // Placeholder
                    reward: "Title: Merrymaker",
                    progress: "8/12"
                }
            ]
        },
        {
            id: "pvp",
            title: "Player vs Player",
            icon: <Users className="w-5 h-5" />,
            bgImage: "https://i.imgur.com/AvacfWx.jpeg",
            achievements: [
                {
                    id: 201,
                    title: "Gladiator",
                    desc: "Complete an arena season in the top 0.5% of the 3v3 or 5v5 bracket.",
                    points: 50,
                    icon: <Trophy />,
                    reward: "Title: Gladiator",
                    lore: "Only the strongest survive the arena."
                },
                {
                    id: 202,
                    title: "Wrecking Ball",
                    desc: "Get 20 killing blows without dying in a single Warsong Gulch battle.",
                    points: 10,
                    icon: <Zap />
                }
            ]
        },
        {
            id: "exploration",
            title: "Exploration",
            icon: <Map className="w-5 h-5" />,
            bgImage: "https://i.imgur.com/SMJnZZk.jpeg",
            achievements: [
                {
                    id: 301,
                    title: "Universal Explorer",
                    desc: "Explore Eastern Kingdoms, Kalimdor, and Outland.",
                    points: 50,
                    icon: <Map />,
                    reward: "Tabard of the Explorer"
                },
                {
                    id: 302,
                    title: "Going Down?",
                    desc: "Fall 65 yards without dying.",
                    points: 10,
                    icon: <Zap />,
                    lore: "Usually achieved at the Great Lift."
                }
            ]
        },
        {
            id: "reputation", // Suggestion 6: Rep Metric / Category
            title: "Reputation",
            icon: <Heart className="w-5 h-5" />,
            bgImage: "https://i.imgur.com/caSjiLV.jpeg",
            achievements: [
                {
                    id: 401,
                    title: "The Diplomat",
                    desc: "Raise 3 factions to Exalted.",
                    points: 20,
                    icon: <Crown />,
                    reward: "Title: The Diplomat",
                    progress: "2/3"
                },
                {
                    id: 402,
                    title: "Guardian of Cenarius",
                    desc: "Exalted with Cenarion Circle and Cenarion Expedition.",
                    points: 10,
                    icon: <Shield />,
                    reward: "Title: Guardian of Cenarius"
                }
            ]
        },
        {
            id: "economy", // Suggestion 7: Gold Earned + 15 New Items
            title: "Economy",
            icon: <Coins className="w-5 h-5" />,
            bgImage: "https://i.imgur.com/56Edlhu.jpeg",
            description: "Track your financial domination of Outland.",
            graphData: [12000, 13400, 13100, 14500, 14200, 15800, 16000, 15500, 16200, 17800, 18500, 18200, 19000, 19500, 15432], // 15 Data points for Sparkline
            achievements: [
                // --- HIGH-TICKET PURCHASES ---
                {
                    id: 501,
                    title: "Artisan Aviator",
                    desc: "Purchase Epic Flying skill (5,000g).",
                    points: 10,
                    icon: <Coins />,
                    status: "Completed",
                    date: "02/15/2007"
                },
                {
                    id: 502,
                    title: "Paris Hilton",
                    desc: "Purchase the 'Gigantique' Bag, the 'Socialite' Ring, and the 'Ruby Shades' from Haris Pilton.",
                    points: 25,
                    icon: <Crown />,
                    progress: "2/3"
                },
                {
                    id: 503,
                    title: "Estate Magnate",
                    desc: "Purchase an Epic Deed for your Hearth & Home plot.",
                    points: 20,
                    icon: <CheckCircle className="text-gray-500" /> // Placeholder for Scroll
                },
                {
                    id: 504,
                    title: "Exalted Patron",
                    desc: "Purchase 5 different Exalted Reputation Mounts.",
                    points: 25,
                    icon: <Trophy />,
                    progress: "3/5"
                },

                // --- PROFESSION & MATERIAL ---
                {
                    id: 505,
                    title: "Master of Arms",
                    desc: "Craft a Stage 3 Blacksmithing Weapon (e.g., Stormherald).",
                    points: 20,
                    icon: <Zap />, // Placeholder for Hammer
                    date: "04/01/2007"
                },
                {
                    id: 506,
                    title: "Primal Force",
                    desc: "Possess 10 Primal Might in your inventory simultaneously.",
                    points: 10,
                    icon: <Star />,
                    progress: "4/10"
                },
                {
                    id: 507,
                    title: "Void Tycoon",
                    desc: "Disenchant 50 Epic items into Void Crystals.",
                    points: 15,
                    icon: <Ghost />, // Placeholder for Void Crystal
                    progress: "42/50"
                },
                {
                    id: 508,
                    title: "Decked Out",
                    desc: "Assemble a complete Darkmoon Faire Deck.",
                    points: 10,
                    icon: <BookOpen />,
                    status: "Completed"
                },
                {
                    id: 509,
                    title: "Gem Perfect",
                    desc: "Have an item with 3 Epic Gems socketed and the socket bonus active.",
                    points: 10,
                    icon: <Star />,
                    lore: "Perfection is costly."
                },

                // --- GRIND & METRICS ---
                {
                    id: 510,
                    title: "Badge Billionaire",
                    desc: "Loot a lifetime total of 1,000 Badges of Justice.",
                    points: 50,
                    icon: <Shield />,
                    progress: "845/1000"
                },
                {
                    id: 511,
                    title: "Fiscal Irresponsibility",
                    desc: "Spend a lifetime total of 10,000g on Repair Bills.",
                    points: 10,
                    icon: <Coins className="text-red-500" />,
                    progress: "8,920 / 10,000"
                },
                {
                    id: 512,
                    title: "Juiced Up",
                    desc: "Consume 500 Haste Potions or Destruction Potions.",
                    points: 10,
                    icon: <Zap />,
                    progress: "124/500"
                },
                {
                    id: 513,
                    title: "Toll Collector",
                    desc: "Earn 1,000g via the Trade Window (Tips).",
                    points: 10,
                    icon: <Users />,
                    progress: "450 / 1000"
                },
                {
                    id: 514,
                    title: "Tycoon",
                    desc: "Loot 100,000 gold.",
                    points: 50,
                    icon: <Crown />,
                    progress: "15,432 / 100,000"
                },
                {
                    id: 515,
                    title: "My Sack is Gigantique",
                    desc: "Equip Haris Pilton's Gigantique Bag.",
                    points: 10,
                    icon: <Coins />,
                    status: "Completed",
                    date: "03/10/2007"
                }
            ]
        }
    ]
};
