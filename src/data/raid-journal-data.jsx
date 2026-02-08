import React from 'react';
import {
    Map as MapIcon, Skull, Crown, Globe, Sword, Shield, Zap,
    Clock, AlertTriangle, Anchor, Compass, Scroll, X, Eye, Hammer,
    BookOpen, Flame, Droplet, Mountain, ArrowRight, Users, Layout, Grid, Landmark, Star
} from 'lucide-react';


export const contentData = {
    // --- OUTLAND ---
    hellfire: [
        {
            name: 'Legion Assault',
            type: 'World Event',
            level: '70',
            zone: 'Hellfire Peninsula',
            image: 'https://i.imgur.com/BZtads0.jpeg',
            lore: "The Burning Legion has not forgotten their defeat at the Dark Portal. Highlord Kazzak has ordered a full-scale counter-offensive. The sky above Hellfire Peninsula turns a sickly, fel-green as massive Infernals rain down upon the Path of Glory, cracking the earth and signaling the arrival of the Legion's true vanguard. The combined forces of Honor Hold and Thrallmar are being overrun, and only the heroes of Shattrath can hold the line.",
            geography: "**The Lay of the Land:** \nThe event takes place entirely on the 'Path of Glory', the massive road of bones leading to the Dark Portal. This area is usually empty; during the event, it becomes a warzone with trenches, siege towers, and aerial bombardment.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nHellfire Peninsula suffers from the 'Level 60 Problem'—it is abandoned as soon as players move to Zangarmarsh. The Zone is massive but empty.",
                plus: "**The Vision for Plus:** \nThis event pulls level 70s back to the zone. It utilizes the massive 'Path of Glory' road which was underutilized in the original game. We wanted a 'Warzone' feel where max-level players are fighting alongside leveling players to hold the line. The event scales dynamically; if 100 players are in the zone, the Legion sends Pit Lords. If 10 players are there, they send Felguards."
            },
            mechanics: "**Phase 1: The Siege:** \nDestroy 3 massive Siege Gateways along the path using 'Unstable Fel-Charges' looted from Engineers. \n\n**Phase 2: The Pylons:** \nShatter Fel-Iron Pylons using Blacksmithing 'Shattering Hammers'. These pylons buff all demons in range. \n\n**Phase 3: The General:** \nDefeat General Krazz't'lor at the Citadel Gates before he breaches the walls. He is a raid-boss level enemy that requires at least 10 players to tank."
        }
    ],
    zangar: [
        {
            name: 'Spore-Lash',
            type: 'World Event',
            image: 'https://i.imgur.com/yZcO7Fh.jpeg',
            lore: "The delicate balance of Zangarmarsh has been shattered. The Naga's pumping stations have drained too much water, causing the ancient 'Great Spore-Mound' to awaken in a defensive rage. It perceives all non-plant life as a threat. The sky turns a murky yellow as toxic pollen chokes the air, and the usually passive Sporelings and Fungal Giants are driven into a frenzy, attacking Cenarion Refuge and Telredor.",
            geography: "**The Lay of the Land:** \nThe entire zone of Zangarmarsh is enveloped in a thick, yellow 'Pollen Haze' that reduces visibility range. The usually passive Sporelings are now hostile and mutated, patrolling the roads.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nZangarmarsh is beautiful but static. The environmental threat was minimal.",
                plus: "**The Vision for Plus:** \nWe wanted an event that felt like an environmental catastrophe. By filling the screen with pollen and changing the skybox, we change the mood from 'serene' to 'hostile'. This event rewards specific nature-resist gear needed for Hydross, creating a gameplay loop where open-world content prepares you for raids."
            },
            mechanics: "**The Choking Cloud:** \nA zone-wide DoT ticks on everyone. \n\n**Counterplay:** \nHerbalists must harvest 'Ango'rosh Spore-Caps' to create localized 'Cleansing Zones' where healers can regenerate mana. \n\n**Objective:** \nDestroy Corrupted Spore-Nodes to lure out the Fungal Giant boss, who heals if he stands in the water."
        },
        {
            name: 'The Abyssal Maw',
            type: '25-Man Raid (Tier 5.5)',
            tier: 5.5,
            image: "https://i.imgur.com/bSpI3oa.png",
            lore: "The Elemental Plane of Water. \nNeptulon the Tidehunter is under siege by the naga and their faceless masters. The rapid draining of Serpentshrine Cavern has destabilized the rift, allowing players to enter.",
            geography: "**The Lay of the Land:**\nA fully underwater raid zone (with 'Sea Legs' buff for movement). Players navigate the coral spires and swirling currents of the Abyssal Breach.",
            abyssalMawData: {
                title: "The Abyssal Maw",
                overview: {
                    rationale: "Originally planned for Cataclysm but cut, the Abyssal Maw represents the missing link in the Vashj/Neptulon storyline. In TBC+ lore, the draining of Serpentshrine Cavern by the players (killing Vashj) has caused a vacuum that pulls the raid into the Elemental Plane of Water.",
                    issues: [
                        "Vashj'ir's storyline had no conclusion.",
                        "Neptulon's fate was left as a cliffhanger.",
                        "Underwater combat is famously hated (Fixed via 'Sea Legs' buff)."
                    ],
                    environment: [
                        { title: "Sea Legs", desc: "Players move at 150% speed and anchor to the floor when not jumping." },
                        { title: "Bioluminescence", desc: "Dark environments lit by glowing coral and spell effects." },
                        { title: "Verticality", desc: "Boss arenas use 3D space for mechanics (Up/Down phases)." }
                    ]
                },
                attunement: {
                    title: "The Tidehunter's Call",
                    steps: [
                        { name: "1. The Vacuum", desc: "Defeat Lady Vashj in Serpentshrine Cavern and loot [Vashj's Command Scroll]." },
                        { name: "2. The Schematic", desc: "Obtain [Schematic: Stabilized Diving Bell] from a Cenarion Expedition Paragon Cache (Requires Exalted + 10k Rep)." },
                        { name: "3. The Construction", desc: "Craft the Bell using 10 [Primal Nether], 20 [Primal Water], and a [Hardened Khorium Shell]." },
                        { name: "4. The Breach", desc: "Use the Bell at the Abyssal Breach in the Bay of Storms (Azshara) to survive the crushing pressure." }
                    ]
                },
                bosses: [
                    {
                        name: "L'ghorek the Ancient",
                        desc: "A massive demigod sea-creature being corrupted from within. Players must enter its body (literally) to kill the parasites and purge the corruption before he dies."
                    },
                    {
                        name: "Lady Naz'jar",
                        desc: "The mutated sea witch. She controls the currents, pushing/pulling players into urchin fields. 'Geyser' knocks players to the surface layer where they must fight air-elemental adds."
                    },
                    {
                        name: "Erunak Stonespeaker (Mind Controlled)",
                        desc: "The Shaman champion is enslaved by a mind-bender ghoul. DPS must break the shield on his head to damage the ghoul without killing Erunak. 'Lava Burst' underwater creates obsidian walls."
                    },
                    {
                        name: "Ozumat & The Kraken",
                        desc: "The Final Siege.\n\nPHASE 1: Defend Neptulon from waves of Faceless Ones.\n\nPHASE 2: Ozumat attaches to Neptulon. Players must swim up and attack the beak while dodging Blight Ink.\n\nPHASE 3: Neptulon empowers the raid (200% size/damage) to crush Ozumat."
                    }
                ],
                loot: [
                    {
                        name: "Trident of the Tidal Throne",
                        slot: "Two-Hand",
                        type: "Polearm",
                        boss: "Ozumat",
                        quality: "epic",
                        damage: "397 - 596",
                        speed: "3.60",
                        dps: "137.9",
                        stats: ["+65 Agility", "+60 Stamina"],
                        effects: [
                            "Equip: Increases attack power by 140.",
                            "Equip: Improves critical strike rating by 50 (2.26% @ L70).",
                            "Chance on Hit: Summons a Tidal Wave that crashes forward, dealing 600 Frost damage to all enemies in a line."
                        ],
                        flavor: "\"Neptulon's favor creates the wave; you just aim it.\""
                    },
                    {
                        name: "Ring of the Crushing Depths",
                        slot: "Finger",
                        type: "Ring",
                        boss: "L'ghorek",
                        quality: "epic",
                        stats: ["+24 Agility", "+22 Stamina"],
                        effects: [
                            "Equip: Increases attack power by 48.",
                            "Equip: Your attacks ignore 140 of your opponent's armor."
                        ],
                        flavor: "\"The first major 'ArPen' ring. Designed to make Physical DPS scale harder.\""
                    },
                    {
                        name: "Gauntlets of the Deep Guard",
                        slot: "Hands",
                        type: "Plate",
                        boss: "Erunak Stonespeaker",
                        quality: "epic",
                        stats: ["+45 Strength", "+55 Stamina"],
                        sockets: ["Blue", "Yellow"],
                        socketBonus: "+6 Stamina",
                        effects: [
                            "Equip: Increases defense rating by 30 (12.7 @ L70).",
                            "Equip: Increases the block value of your shield by 45."
                        ],
                        flavor: "\"Barnacles still cling to the knuckles.\""
                    },
                    {
                        name: "Bioluminescent Spire",
                        slot: "Two-Hand",
                        type: "Staff",
                        boss: "Lady Naz'jar",
                        quality: "epic",
                        damage: "250 - 410",
                        speed: "3.20",
                        dps: "103.1",
                        stats: ["+60 Stamina", "+70 Intellect", "+50 Spirit"],
                        effects: [
                            "Equip: Increases damage and healing done by magical spells and effects by up to 255.",
                            "Equip: Your periodic damage spills have a chance to bloom into 'Coral Growth', rooting the target for 2 sec."
                        ],
                        flavor: "\"It glows with a rhythm like a heartbeat.\""
                    },
                    {
                        name: "Carapace of the Ancient Kraken",
                        slot: "Trinket",
                        type: "Trinket",
                        boss: "L'ghorek",
                        quality: "epic",
                        stats: ["+57 Stamina"],
                        effects: [
                            "Use: Increases Block Value by 400 and creates a pressurized shield absorbing 1500 damage. Lasts 20 sec. (2 Min Cooldown)."
                        ],
                        flavor: "\"Pure Effective Health. Designed specifically for 'Crushing Blow' mitigation.\""
                    },
                    {
                        name: "The Mind-Squid's Tentacle",
                        slot: "Ranged",
                        type: "Wand",
                        boss: "Erunak Stonespeaker",
                        quality: "epic",
                        damage: "190 - 355",
                        speed: "1.40",
                        dps: "194.6",
                        stats: ["+18 Stamina", "+16 Intellect"],
                        effects: [
                            "Equip: Improves spell haste rating by 22 (1.40% @ L70).",
                            "Equip: Increases damage and healing done by magical spells and effects by up to 34."
                        ],
                        flavor: "\"A 'Haste Stick'. 22 Haste on a wand is massive.\""
                    },
                    {
                        name: "Ring of the Ancient Shell",
                        slot: "Finger",
                        type: "Ring",
                        boss: "L'ghorek",
                        quality: "epic",
                        stats: ["+30 Stamina", "+28 Intellect"],
                        effects: [
                            "Equip: Restores 14 mana per 5 sec.",
                            "Equip: Increases damage and healing done by magical spells and effects by up to 68."
                        ],
                        flavor: "\"Carved from the inner ear of a demigod.\""
                    }
                ]
            },
            philosophy: {
                tbc: "Vashj'ir didn't exist.",
                plus: "We restore the cut Abyssal Maw raid to finish the Neptune storyline."
            },
            bosses: [
                "**L'ghorek:** Inside the Behemoth.",
                "**Lady Naz'jar:** Current Control.",
                "**Erunak:** Mind Control Rescue.",
                "**Ozumat:** Kraken Siege."
            ]
        }
    ],
    terokkar: [
        {
            name: 'Arakkoa Ritual',
            type: 'World Event',
            level: '64-65',
            zone: 'Terokkar Forest',
            image: 'https://i.imgur.com/mePViec.jpeg',
            lore: "Deep within the shadowy canopy of Skettis, the Arakkoa priests have found a tear in reality. Driven mad by their fall from grace, they seek to summon a Void God, believing it to be the reincarnation of their lost hero, Terokk. The shadows in Terokkar Forest lengthen, and whispers can be heard by all players in the zone. If the ritual is completed, the Void God will devour the light of Shattrath.",
            geography: "**The Lay of the Land:** \nThe event is focused on the mountain stronghold of Skettis. The sky above turns a deep, bruising purple, and gravity becomes lighter in certain areas due to the Void's influence.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nTerokkar has two distinct vibes: the Holy Light of Shattrath and the Shadow of the Arakkoa. The shadow aspect was largely relegated to dungeons.",
                plus: "**The Vision for Plus:** \nThis event leans entirely into the Shadow theme. We wanted to make the Skettis sub-zone relevant before the daily quest hub opens in later phases. It serves as a narrative prequel to the Auchindoun dungeons."
            },
            mechanics: "**Void Shield:** \nThe ritual circles are immune to damage until Enchanters use 'Void-Bane Wands' to dispel the barriers. \n\n**The Summoning:** \nIf players fail to stop the ritual in 20 minutes, a massive Void God spawns that requires a 40-man raid to defeat, but drops significantly better loot."
        }
    ],
    nagrand: [

        {
            name: 'Twilight of the Mag\'har',
            type: '10-Man Raid (Tier 6.5)',
            image: 'https://i.imgur.com/agd7UZj.jpeg',
            lore: "Oshu'gun, the diamond mountain, is actually a crashed Naaru vessel. The Twilight's Hammer cult has discovered this and is attempting to corrupt the Naaru K'ure inside. Worse, they have sensed the deep, simmering rage within young Garrosh Hellscream. They seek to twist him into a weapon of the Old Gods, using his despair over his father's legacy as a catalyst. Thrall has asked you to intervene, not to kill Garrosh, but to save him.",
            geography: "**The Lay of the Land:** \nThe raid takes place *inside* Oshu'gun, the diamond mountain. The interior is a crystalline cathedral of Naaru technology, now being defiled by Old God tendrils and Twilight cultist graffiti. The final encounter takes place in the 'Chamber of Ancestors', a spirit-realm version of Nagrand.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nGarrosh Hellscream spent the entirety of TBC sitting by a fire feeling sorry for himself. He was a wasted character.",
                plus: "**The Vision for Plus:** \nThis raid gives him the origin story he deserved. We wanted to explore the 'What If?' scenario of Garrosh falling to the Void early. It serves as a catch-up raid (like Zul'Aman) for alts, dropping weapons and trinkets that bridge the gap between BT and Sunwell."
            },
            bosses: [
                {
                    name: "Twilight Ascendant Mal'gin",
                    preview: "https://i.imgur.com/HkmodSe.png",
                    desc: "An elementalist twisted by the Void. He rapidly shifts attunements (Fire, Frost, Shadow). Players must use the environment—dipping into lava pools or standing on ice patches—to gain specific buffs that counter his active form."
                },
                {
                    name: "Council of Ancestors",
                    preview: "https://i.imgur.com/99oQ0Ku.png",
                    desc: "Three spirits of the Mag'har (Geyah, Jorin, Dran) who are being tortured by the Cult. Players must heal them to full health to break the mind control while interrupting their lethal 'Ancestral Fury' casts."
                },
                {
                    name: "Garrosh Hellscream (Corrupted)",
                    preview: "https://i.imgur.com/0zlyknk.png",
                    desc: "The final tragedy. Powered by Void energy and his own self-hatred, Garrosh uses 'Horde Strength' to decimate the raid while 'Void Despair' mind-controls players who stray too far from their allies."
                }
            ],
            mechanics: "**Despair Meter:** \nYou cannot kill Garrosh. You must heal his spirit. Players must kill 'Doubts' (adds) that spawn. If a Doubt reaches Garrosh, his Despair increases. If Despair reaches 100%, he enrages and wipes the raid. At 0% Despair, the corruption leaves him.",
            attunement: {
                title: "The Ancestral Call",
                desc: "We need to force interaction with the Mag'har faction. This attunement is a reputation sink and a gold sink specifically designed to reactivate Nagrand.",
                steps: [
                    "Exalted with The Mag'har",
                    "Loot 'Dimming Ancestral Bead' from Paragon Cache (Garadar)",
                    "Collect 5 Void-Infused Focus Crystals (Heroic Mana Tombs)",
                    "Summon & Defeat Void Lord Xo'rath (Elemental Plateau)",
                    "Use Oshu'gun Crystal Key at Spirit Gate"
                ]
            },
            loot: [
                {
                    name: "Mantle of the Shifted Elements",
                    slot: "Shoulder",
                    ilvl: "146",
                    quality: "epic",
                    stats: [
                        "+38 Stamina",
                        "+32 Intellect"
                    ],
                    sockets: ["Red Socket", "Yellow Socket"],
                    socketBonus: "+4 Spell Damage",
                    effects: [
                        "Equip: Increases spell haste rating by 35 (2.21% @ L70).",
                        "Equip: Increases damage and healing done by magical spells and effects by up to 55."
                    ],
                    desc: "A 'Haste Heavy' piece. In 2.4.3, Warlocks are trying to get their Shadow Bolt cast time as close to 2.1s as possible."
                },
                {
                    name: "Totem of the Ancestral Mend",
                    slot: "Totem",
                    ilvl: "146",
                    quality: "epic",
                    effects: [
                        "Equip: Your Chain Heal spell has a 15% chance to grant the target \"Ancestral Will,\" reducing damage taken by 5% for 8 sec.",
                        "Equip: Increases healing done by up to 30."
                    ],
                    desc: "A niche item for the raid itself. Since the raid involves healing friendly NPCs, damage reduction on the target is key."
                },
                {
                    name: "Legplates of the Unbroken Spirit",
                    slot: "Legs",
                    ilvl: "151",
                    quality: "epic",
                    stats: [
                        "+75 Stamina"
                    ],
                    sockets: ["Blue Socket", "Blue Socket", "Yellow Socket"],
                    socketBonus: "+6 Stamina",
                    effects: [
                        "Equip: Increases defense rating by 30.",
                        "Equip: Increases shield block value by 45.",
                        "Equip: Increases your chance to dodge an attack by 2%."
                    ],
                    desc: "We are moving away from 'Crushing Blow' immunity and moving toward Effective Health (EH). The socket bonus encourages pure Stamina gemming."
                },
                {
                    name: "Decapitator of the Hellscream",
                    slot: "Two-Hand Axe",
                    ilvl: "151",
                    quality: "epic",
                    damage: "410 - 616",
                    speed: "3.60",
                    dps: "142.5",
                    stats: [
                        "+62 Strength",
                        "+55 Stamina"
                    ],
                    effects: [
                        "Equip: Increases critical strike rating by 48.",
                        "Equip: Your melee attacks have a chance to sunder the target's armor, ignoring 100% of armor for your next swing. (Internal Cooldown: 45s)."
                    ],
                    desc: "The 'Casino Weapon'. The proc is essentially a mini-Execute. It’s 'trash design' for balance, but 'legendary feel' for the player."
                }
            ]
        },
        {
            name: 'The Great Hunt',
            type: 'World Event',
            level: '65-68',
            zone: 'Nagrand',
            image: 'https://i.imgur.com/jCHAzlN.jpeg',
            lore: "Hemet Nesingwary has issued a challenge to all hunters of Azeroth. The legendary 'Ban'thalos', a Great White Clefthoof of immense size and power, has been spotted migrating through the plains of Nagrand. This beast is older than the Orcs themselves, with hide as thick as iron. It is not a creature that can be killed by a single hero; it requires a hunting party.",
            geography: "**The Lay of the Land:** \nThe entire zone of Nagrand is the arena. Ban'thalos has no spawn point; he migrates. Players must use 'Tracking' (Hunters) or 'Scouting' (Shamans) to find his current path.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nNagrand is the quintessential hunting zone, but the elite quests were static.",
                plus: "**The Vision for Plus:** \nWe wanted a world boss that wasn't just a dragon standing still in a field waiting to be tanked. Ban'thalos roams the entire zone. Players have to physically track him, set traps, and kite him across the map. It turns the zone into a dynamic hunting ground where positioning matters."
            },
            mechanics: "**The Chase:** \nPlayers must gather 'Pungent Bait' from local wildlife to lure him to stop. \n\n**The Trap:** \nOnce engaged, he takes 90% reduced damage due to 'Thick Hide'. Leatherworkers must place 'Trophy Traps' in his path. When he charges over a trap, he is stunned and his armor is broken for 20 seconds. This creates a cycle of 'Lure -> Trap -> Burn -> Chase'."
        },
        {
            name: 'The Throne of Elements',
            type: '10-Man Raid (Tier 4.5)',
            tier: 4.5,
            level: '70',
            zone: 'Nagrand',
            image: 'https://i.imgur.com/cOsLrHP.jpeg',
            lore: "The Elemental Plateau has always been a place of volatile magic, but the disturbance in the timeline has caused the elements to war against each other. The Fury of Earth, Gordawg, has rallied the elemental lords to purge the 'mortal infestation' from Nagrand. If they are not stopped, they will shatter the very tectonic plates of Outland.",
            geography: "**The Lay of the Land:** \nThe raid is an open-air gauntlet located on the floating islands of the Elemental Plateau. Players use 'jumping currents' (wind pads) to travel between the floating motes of Earth, Air, Fire, and Water before ascending to the Primal Core.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nThe Elemental Plateau was just a farming spot for Motes. There was no 'Lord' of the elements in Outland aside from Skar'this the Heretic (who was a dungeon boss).",
                plus: "**The Vision for Plus:** \nThis is a 'Catch-Up Raid' designed for fresh level 70s. It fills the gap between Heroic Dungeons (iLvl 115) and Karazhan (iLvl 115-125). We designed the mechanics specifically to teach players *how* to raid (LoS, Spread, Kite, Switch). It's a tutorial raid with lethal consequences."
            },
            bosses: [
                "**Gordawg (Earth):** \nA massive earth elemental. Teaches **Line of Sight**. His 'Earthen Tremor' deals massive damage unless players hide behind summoned Granite Pillars.",
                "**Aeros (Air):** \nA living cyclone. Teaches **Spreading**. His 'Static Charge' chains deadly damage if players are within 10 yards of each other.",
                "**Karsius (Fire):** \nA void-corrupted firewalker. Teaches **Kiting**. He drops permanent void zones ('Molten Floor') that force the tank to efficiently move him around the room.",
                "**Tidalor (Water):** \nA baron of the tide. Teaches **Target Switching**. Encapsulates players in 'Watery Tombs' that must be destroyed immediately by DPS to prevent drowning.",
                "**The Primal Heart:** \nThe amalgamation of all four elements. A 4-Phase fight that quizzes the raid on all the previous mechanics (LoS, Spread, Kite, Switch) in rapid succession."
            ],
            mechanics: "**The Engine Check:** \nUnlike other raids, there is no generic trash here. The 'Trash' are mini-teaching moments. The Earth trash does an unavoidable cast you must LoS. The Air trash has a chain lightning. If you can't beat the trash, you can't beat the boss. \n\n**The Paragon Hook:** \nBosses grant 500 Reputation each (2500 for a clear). Once Exalted, this raid becomes the fastest way to farm Paragon Caches (every 10k rep), which drop Depleted Badges of Justice.",
            attunement: {
                title: "None",
                desc: "Correct decision. If this is a catch-up raid, putting a gate in front of it defeats the purpose. The only requirement is flying to the Elemental Plateau.",
                steps: [
                    "Reach Level 70",
                    "Obtain Flying Mount",
                    "Fly to the Elemental Plateau (Nagrand)"
                ]
            },
            loot: [
                {
                    name: "Gauntlets of the Stone Grip",
                    slot: "Hands",
                    ilvl: "132",
                    quality: "rare",
                    stats: [
                        "+38 Strength",
                        "+35 Stamina"
                    ],
                    sockets: ["Red Socket", "Yellow Socket"],
                    socketBonus: "+3 Critical Strike Rating",
                    effects: [
                        "Equip: Increases expertise rating by 22 (5.58 @ L70).",
                        "Equip: Improves critical strike rating by 18 (0.81% @ L70)."
                    ],
                    desc: "Expertise is rare in T4. This item stops melee DPS from getting 'Dodge/Parry' on bosses."
                },
                {
                    name: "Capacitor-Link Chain",
                    slot: "Waist",
                    ilvl: "132",
                    quality: "rare",
                    stats: [
                        "+28 Agility",
                        "+25 Stamina"
                    ],
                    effects: [
                        "Equip: Improves hit rating by 25 (1.58% @ L70).",
                        "Equip: Increases attack power by 64."
                    ],
                    desc: "A 'Hit Stick'. Many Hunters struggle to reach the 9% Hit Cap without sacrificing Agility. This belt solves that problem."
                },
                {
                    name: "The Ever-Burning Censer",
                    slot: "Trinket",
                    ilvl: "135",
                    quality: "rare",
                    effects: [
                        "Equip: Improves spell hit rating by 30 (2.38% @ L70).",
                        "Use: Increases damage and healing done by magical spells and effects by 200 for 15 sec. (1 Min 30 Sec Cooldown)."
                    ],
                    desc: "Spell Hit is the single most valuable stat for casters. A trinket with static Hit allows Mages/Warlocks to swap out gems for pure Dmg."
                },
                {
                    name: "Heart of the Elements",
                    slot: "Neck",
                    ilvl: "141",
                    quality: "epic",
                    stats: [
                        "+28 Agility",
                        "+30 Stamina"
                    ],
                    sockets: ["Prismatic Socket"],
                    socketBonus: "None",
                    effects: [
                        "Equip: Increases attack power by 58.",
                        "Equip: Your attacks ignore 110 of your opponent's armor."
                    ],
                    desc: "The prize. The Prismatic Socket gives the player total agency to customize the piece. (ArPen value estimated for 'Stat Fixer')."
                }
            ],
            toeData: {
                title: "The Throne of Elements",
                overview: {
                    rationale: "Positioned as a Tier 4.5 catch-up raid (iLvl 132/141), this fills the gap between Heroic Dungeons and Karazhan. It serves as a mechanics tutor for fresh 70s.",
                    issues: [
                        "Lack of 'Entry Level' raiding outside of Karazhan.",
                        "Elemental Plateau was a mindless farm spot.",
                        "Fresh 70s hit a wall before T4 attunements completed."
                    ],
                    environment: [
                        { title: "The Floating Isles", desc: "Open-air combat on drifting earth motes. Falling is fatal." },
                        { title: "The Primal Core", desc: "The central vortex where all elements collide." }
                    ]
                },
                attunement: {
                    title: "Sky-High Clearance",
                    steps: [
                        { name: "1. The Call of the Elements", desc: "Reach Level 70." },
                        { name: "2. Aerial Superiority", desc: "Obtain a Flying Mount (Req: Level 70)." },
                        { name: "3. The Discovery", desc: "Fly to the Elemental Plateau in Nagrand to discover the entrance portal." }
                    ]
                },
                bosses: [
                    {
                        name: "Gordawg (The Earth Fury)",
                        desc: "A massive earth elemental testing Line of Sight. His 'Earthen Tremor' deals massive damage unless players hide behind summoned Granite Pillars."
                    },
                    {
                        name: "Aeros (The Living Cyclone)",
                        desc: "Teaches Spreading. His 'Static Charge' chains deadly damage if players are within 10 yards of each other."
                    },
                    {
                        name: "Karsius (The Void-Walker)",
                        desc: "Teaches Kiting. He drops permanent void zones ('Molten Floor') that force the tank to efficiently move him around the floating island."
                    },
                    {
                        name: "Tidalor (The Tide Baron)",
                        desc: "Teaches Target Switching. Encapsulates players in 'Watery Tombs' that must be destroyed immediately by DPS to prevent drowning."
                    },
                    {
                        name: "The Primal Heart",
                        desc: "The amalgamation of all four elements. A 4-Phase fight that quizzes the raid on all previous mechanics (LoS, Spread, Kite, Switch) in rapid succession."
                    }
                ],
                loot: [
                    {
                        name: "Gauntlets of the Stone Grip",
                        slot: "Hands",
                        ilvl: "132",
                        quality: "rare",
                        stats: [
                            "+38 Strength",
                            "+35 Stamina"
                        ],
                        sockets: ["Red Socket", "Yellow Socket"],
                        socketBonus: "+3 Critical Strike Rating",
                        effects: [
                            "Equip: Increases expertise rating by 22 (5.58 @ L70).",
                            "Equip: Improves critical strike rating by 18 (0.81% @ L70)."
                        ],
                        desc: "Expertise is rare in T4. This stops melee DPS from getting 'Dodge/Parry' on bosses."
                    },
                    {
                        name: "Capacitor-Link Chain",
                        slot: "Waist",
                        ilvl: "132",
                        quality: "rare",
                        stats: [
                            "+28 Agility",
                            "+25 Stamina"
                        ],
                        effects: [
                            "Equip: Improves hit rating by 25 (1.58% @ L70).",
                            "Equip: Increases attack power by 64."
                        ],
                        desc: "A 'Hit Stick'. Helps Hunters reach the 9% Hit Cap without sacrificing Agility."
                    },
                    {
                        name: "The Ever-Burning Censer",
                        slot: "Trinket",
                        ilvl: "135",
                        quality: "rare",
                        effects: [
                            "Equip: Improves spell hit rating by 30 (2.38% @ L70).",
                            "Use: Increases damage and healing done by magical spells and effects by 200 for 15 sec. (1 Min 30 Sec Cooldown)."
                        ],
                        desc: "Spell Hit is valuable early on. Allows casters to gem for Damage."
                    },
                    {
                        name: "Heart of the Elements",
                        slot: "Neck",
                        ilvl: "141",
                        quality: "epic",
                        stats: [
                            "+28 Agility",
                            "+30 Stamina"
                        ],
                        sockets: ["Prismatic Socket"],
                        socketBonus: "None",
                        effects: [
                            "Equip: Increases attack power by 58.",
                            "Equip: Your attacks ignore 110 of your opponent's armor."
                        ],
                        desc: "The prize. Prismatic Socket offers total customization. Huge Armor Pen value."
                    }
                ]
            }
        }

    ],
    blades: [
        {
            name: 'The Apexis Conclave',
            type: '5-Man Dungeon (Tier 6)',
            image: 'https://i.imgur.com/d0o7eWM.jpeg',
            lore: "Deep beneath the plateau of Ogri'la, Ogre excavations have broken through into a pristine, crystalline chamber. They have awoken the 'Conclave', an ancient Apexis defense system run by a hostile AI. The constructs here are rebuilding a weapon of mass destruction capable of glassing the Blade's Edge Mountains. The Ogres are terrified, and the Sha'tari Skyguard needs a strike team to shut it down.",
            geography: "**The Lay of the Land:** \nA pristine, high-tech facility hidden beneath the primitive rocks. The walls hum with energy. It features floating walkways, laser grids, and 'hard-light' bridges that players must toggle on and off.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nThe Apexis Crystals were a major currency in TBC, but they had zero lore explanation.",
                plus: "**The Vision for Plus:** \nThis dungeon explains them. It uses 'Light Reflection' puzzles (similar to Zelda) where players must angle their characters to bounce beams of light to open doors. It's a puzzle-dungeon, breaking the monotony of 'tank and spank'."
            },
            bosses: [
                "**Grom's-Bane the Digger:** \nThe Ogre foreman who broke the seal. He fights with a massive shovel and throws dynamite packs. During the fight, his explosions inadvertently trigger Apexis defense lasers, which damage both him and the players.",
                "**Corrupted Sentinel:** \nA massive crystal golem infected by the Ogre's tampering. It is immune to all damage until players reflect the 'Light of the Naaru' beams from the wall sconces onto its chest core.",
                "**Echo of the Conclave:** \nA being of pure light and sound, representing the AI's core. It has no aggro table and attacks the entire party with 'Sonic Waves'. Players must memorize color sequences to disrupt its casting."
            ],
            mechanics: "**Color Matching:** \nThe Corrupted Sentinel shifts its affinity between Red, Blue, and Yellow. Players must find colored crystals in the room and stand in the corresponding light beams to attune their weapons. Hitting the boss with the wrong color attunement reflects 200% damage back to the player."
        },
        {
            name: 'Gronn Uprising',

            type: 'World Event',
            level: '67-68',
            zone: 'Blade\'s Edge Mountains',
            image: 'https://i.imgur.com/Gsuly2Y.jpeg',
            lore: "The Sons of Gruul have united. Rampaging across the jagged peaks, they are toppling the stone bridges that connect the zone, threatening to isolate the Alliance and Horde outposts. Gruul himself bellows commands from his lair, emboldening the Ogres.",
            geography: "**The Lay of the Land:** \nThe event focuses on the deep ravines and the high stone spires. Gronn are smashing the bridges that connect the plateaus, forcing players to use flying mounts to navigate.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nBlade's Edge is defined by its verticality, but gameplay rarely utilized it.",
                plus: "**The Vision for Plus:** \nWe wanted to emphasize the verticality of Blade's Edge. This event requires flying mounts to bomb Gronn from above using 'Skyguard Bombs'. It integrates the flying mechanic directly into combat, something TBC rarely did outside of quests."
            },
            mechanics: "**Aerial Bombardment:** \nThe Gronn have 'Stone-Skin' armor stacks that make them invulnerable. Players must fly over the Gronn and drop 'Skyguard Bombs' (collected from ammo dumps) to strip their armor. Once the armor is gone, ground forces can engage. Be careful: Gronn will throw boulders at flying players!"
        }
    ],
    nether: [
        {
            name: 'The Rip',
            type: '10-Man Raid (Tier 6)',
            level: '70',
            zone: 'Netherstorm',
            image: 'https://i.imgur.com/ls3OLJ6.png',
            lore: "The sky of Netherstorm is tearing open. Dimensius the All-Devouring, the Void Lord who destroyed the Ethereal homeworld, is manifesting in a chaotic void storm. The Protectorate has crafted a 'Mana-Bomb' capable of sealing the rift, but they need a team to deploy it into the heart of the storm and defend it until detonation.",
            geography: "**The Lay of the Land:** \nThe raid takes place on the 'Protectorate Flagship', a massive Ethereal vessel flying into the storm, and on floating debris chunks in the Twisting Nether itself. Players must navigate zero-gravity environments and avoid being pulled into the void.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nNetherstorm is sci-fi fantasy, but the raids were mostly indoors (The Eye).",
                plus: "**The Vision for Plus:** \n'The Rip' is our take on a space battle. It takes place on moving platforms in the Twisting Nether. It's a 3-boss raid designed to be short, intense, and visually distinct from the stone and fire of other raids."
            },
            bosses: [
                "**The Rift-Lord:** \nA colossal Void Reaver construct acting as the storm's anchor. He patrols the outer platforms, launching 'Null-Void Orbs' that players must intercept with their own bodies to prevent the flagship from being breached.",
                "**A'kilo & H'kilo (The Binary Twins):** \nTwo Ethereal princes who have mastered opposing forces. A'kilo wields the Void, while H'kilo wields the Arcane. They swap health percentages and ability sets every 25%, requiring balanced DPS splitting.",
                "**Harbinger of Dimensius:** \nA fragment of the Void Lord himself, manifesting as a tearing hole in reality. He attempts to consume the Mana-Bomb before detonation. Players must feed him 'Unstable Mana' to sate his hunger while burning him down."
            ],
            mechanics: "**Gravity Shift:** \nDuring the final fight, gravity reverses every minute. Players must click on heavy 'Mana-Pylons' to anchor themselves or be flung into the Nether. While anchored, movement is slowed by 90%, making dodging void zones difficult."
        },
        {
            name: 'The Ethereum Vaults',
            type: '5-Man Dungeon',
            level: '70',
            zone: 'Netherstorm',
            image: 'https://i.imgur.com/EnsRdiT.jpeg',
            lore: "The Ethereum (hostile Ethereals) have breached a high-security Protectorate vault containing dangerous Void artifacts. Nexus-Stalker Xy'rath is leading the raid to steal the 'Codes of Creation'. It is a heist gone wrong, and you are the cleanup crew.",
            geography: "**The Lay of the Land:** \nA high-tech containment facility. It is clean, white, and sterile, filled with arcane conduits and stasis fields. It feels like a laboratory, distinct from the dirty mana-forges.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nMost dungeons are slow, methodical clears.",
                plus: "**The Vision for Plus:** \nThis is a 'Heist'. It has a global timer. The faster you go, the more 'Data Caches' you save, and the more loot you get. It encourages speed-running, risk-taking, and big pulls."
            },
            bosses: [
                "**Nexus-Stalker Xy'rath:** \nThe phantom assassin. He blinks through the shadows, marking players for death. His 'Backstab' instant-kills anyone not facing him when he reappears.",
                "**Overloader G'huul:** \nA Ethereal technomancer frantically hacking the mainframe. He activates 'Security Turrets' and 'Stasis Traps' that the party must disable using the Rogue or Engineering skills.",
                "**High-Trader Zax:** \nThe mastermind of the heist. He uses the stolen artifacts against you, equipping legendary weapons from the vault mid-fight (e.g., wielding Thunderfury for 30 seconds, then Atiesh)."
            ],
            mechanics: "**The Timer:** \nLoot is determined by how many caches remain un-hacked when the final boss dies. \n3 Caches Saved = Extra Badge + Epic Gem. \n0 Caches Saved = Standard Blue Loot. \nThis creates a 'Gold/Silver/Bronze' medal feeling for every run."
        },
        {
            name: 'Nether-Storm',

            type: 'World Event',
            level: '68-70',
            zone: 'Netherstorm',
            image: 'https://i.imgur.com/8yGzRH8.jpeg',
            lore: "The Mana-Forges have overloaded, causing chaotic arcane storms to tear through the eco-domes. Gravity in the zone becomes unstable.",
            geography: "**The Lay of the Land:** \nThe eco-domes have shattered. Gravity is low. Debris floats in the air, creating jumping puzzles.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nNetherstorm was a great zone for flying, but the ground gameplay was standard.",
                plus: "**The Vision for Plus:** \nThis event turns the zone into a platformer. Gravity is reduced, allowing massive jumps. It creates a playground for physics-based gameplay that WoW rarely utilizes."
            },
            mechanics: "**Arcane Anomalies:** \nPlayers must jump up floating debris to reach 'Storm Clouds' and siphon energy using an 'Engineering Extractor'. \n**The Tempest:** \nDefeating enough anomalies summons the Arcane Tempest, a giant elemental that can only be damaged by throwing 'Siphoned Energy' globes at it."
        },
        {
            name: "The Citadel of the Void",
            type: "25-Player Raid (Tier 6.5)",
            image: "https://i.imgur.com/ErIqzbU.jpeg",
            lore: "The End of All Things.\nWhile the forces of Azeroth focused on Kil'jaeden at the Sunwell, a quieter, more ancient threat has coalesced in the deepest reaches of the Nether. Dimensius the All-Devouring, the Void Lord who destroyed the Ethereal homeworld, has been summoned by a fanatical sect of Void-corrupted Ethereals.",
            geography: "**The Lay of the Land:**\nThe raid features **Zero-Gravity Combat** (3D movement similar to swimming but faster), **Vehicle Dogfights** using Protectorate Starfighters, and the unforgiving **Sanity** mechanic.",
            citadelData: {
                title: "The Citadel of the Void",
                overview: {
                    rationale: "While the forces of Azeroth focused on Kil'jaeden at the Sunwell, a quieter, more ancient threat has coalesced in the deepest reaches of the Nether. Dimensius the All-Devouring has been summoned.",
                    issues: [
                        "Tier 6.5+ Difficulty (Surpasses Sunwell Plateau).",
                        "Weekly Lockout.",
                        "Zero-Gravity mechanics."
                    ],
                    environment: [
                        { title: "Zero-Gravity Combat", desc: "3D movement similar to swimming but faster." },
                        { title: "Vehicle Dogfights", desc: "Use Protectorate Starfighters to breach the outer hull." },
                        { title: "Sanity System", desc: "Managing the mental toll of the Void." }
                    ],
                    mechanics: {
                        title: "Core Mechanic: Sanity",
                        desc: "The Void is not merely dark; it is maddening.",
                        details: [
                            "The Meter: Every player has a Sanity bar (0-100). It slowly decays over time and drops sharply when taking Shadow damage.",
                            "The Break: Reaching 0 Sanity causes 'Succumb to the Void,' permanently mind-controlling the player with +500% damage and health, forcing the raid to kill them.",
                            "Restoration: Healers can channel into 'Beacons of Light' (interactive objects) or use specific new consumables (e.g., 'Potion of Clarity') to restore Sanity to their group."
                        ]
                    }
                },
                attunement: {
                    title: "The Key of K'aresh",
                    steps: [
                        { name: "1. The Distress Signal", desc: "Intercept a coded transmission from Manaforge Ultris. It reveals Xaaven's location. Starts with Commander Ameer." },
                        { name: "2. Essence of the Betrayer", desc: "Defeat Illidan Stormrage (Black Temple) and loot the 'Void-Infused Skull'. Understand how to breach the shield." },
                        { name: "3. The Light's Protection", desc: "Obtain 'Sanctified Dust' from Archimonde (Hyjal) and 'Sunmotes' from Sunwell trash. Reward: [Amulet of Clarity] (Required to enter)." }
                    ]
                },
                phases: [
                    {
                        name: "Wing 1: The Debris Field",
                        bosses: [
                            {
                                name: "Nexus-Prince Vizaal (The Gatekeeper)",
                                desc: "A rival of Haramad who sold his people to Dimensius. He shifts between Physical and Ethereal forms. Players must kite 'Void Geodes' to him to force him back to physical form."
                            },
                            {
                                name: "Void Reaver MK-II (The Siege Engine)",
                                desc: "The finalized weapon of mass destruction. The floor drops out for Zero-G Combat. Players must 'swim' against Gravity Wells while dodging Orbital Bombardment."
                            }
                        ]
                    },
                    {
                        name: "Wing 2: The Obsidian Halls",
                        bosses: [
                            {
                                name: "Entropy (The Pure Elemental)",
                                desc: "A manifestation of pure chaos. Changes element (Shadow, Fire, Arcane) every 20 seconds. Raid must swap resistances and tactics on the fly to avoid 'Elemental Overload'."
                            },
                            {
                                name: "Xer'zul the Corrupter",
                                desc: "A Voidcaller warlock specializing in mental domination. Deals massive Sanity damage. Casts 'Mass Hysteria,' swapping UI and controls of random players."
                            },
                            {
                                name: "Council of the Ethereal Lords",
                                desc: "The three lieutenants of Xaaven: Lord Paalad (Warrior), Lord Ires (Rogue), and Lord Qruu (Mage). They do not share health. When one dies, others heal to full and gain abilities."
                            }
                        ]
                    },
                    {
                        name: "Wing 3: The Event Horizon",
                        bosses: [
                            {
                                name: "The Dark Star (Corrupted Naaru)",
                                desc: "A reverse M'uru fight. You start fighting the Dark Star. At 50%, you must HEAL the Naaru core while fending off Voidspawn. If the Naaru dies, the raid wipes."
                            },
                            {
                                name: "Shadow-Lord Xaaven",
                                desc: "Wields the 'Blade of the Black Empire'. Splits into 8 copies with 'Mirror Image'. Only one takes damage; hitting wrong ones triggers raid-wide damage. True Sight required."
                            },
                            {
                                name: "Dimensius the All-Devouring",
                                desc: "The Void Lord. Phase 1: Planetary Devastation (Platform jumping). Phase 2: The Void Realm (Inner mind battle). Phase 3: Total Entropy (DPS burn, 5x Sanity drain)."
                            }
                        ]
                    }
                ],
                misc: {
                    loot: [
                        {
                            name: "Blade of K'aresh",
                            slot: "One-Hand Sword",
                            boss: "Dimensius",
                            quality: "legendary",
                            stats: ['+25 Agility', '+35 Stamina'],
                            effects: [
                                "Equip: Increases attack power by 55.",
                                "Equip: Melee attacks have a chance to open a 'Rift' at the target's location, mimicking your next 3 special attacks for 50% damage."
                            ],
                            flavor: "\"The blade does not cut flesh; it cuts reality.\""
                        },
                        {
                            name: "Cowl of the All-Seeing",
                            slot: "Head",
                            boss: "Shadow-Lord Xaaven",
                            quality: "epic",
                            stats: ['+55 Stamina', '+50 Intellect'],
                            effects: [
                                "Equip: Improves spell hit rating by 30 (2.38% @ L70).",
                                "Equip: Increases Sanity regeneration by 20% (Works in this raid only).",
                                "Use: Reveals invisible units/stealth within 100 yds for 20 sec."
                            ],
                            flavor: "\"The eyes of the void see all truths, even the ones you wish to hide.\""
                        },
                        {
                            name: "Bulwark of the Event Horizon",
                            slot: "Shield",
                            boss: "Void Reaver MK-II",
                            quality: "epic",
                            stats: ['+45 Strength', '+75 Stamina'],
                            effects: [
                                "Equip: Increases shield block value by 55.",
                                "Equip: Increases defense rating by 35 (14.8 @ L70).",
                                "Equip: 'Gravity Well' - When struck, 5% chance to pull enemies within 10 yds to you and slow them by 50%."
                            ],
                            flavor: "\"It feels impossibly heavy, yet it floats when released.\""
                        },
                        {
                            name: "Vestments of the Dark Star",
                            slot: "Chest",
                            boss: "The Dark Star",
                            quality: "epic",
                            stats: ['+55 Stamina', '+55 Intellect', '+50 Spirit'],
                            effects: [
                                "Equip: Increases damage and healing done by magical spells and effects by up to 120.",
                                "Equip: Healing crits leave 'Lingering Light' on target, absorbing 500 Shadow damage (Stacks to 5)."
                            ],
                            flavor: "\"Even in the deepest shadow, a spark remains.\""
                        }
                    ]
                }
            },
            philosophy: {
                tbc: "**The 2007 Landscape:**\nThe Ethereals were a side-plot.",
                plus: "**The Vision for Plus:**\nThis is the ultimate confrontation with the Void, setting the stage for future cosmic narratives."
            },
            bosses: [
                "**Nexus-Prince Vizaal:** Phase shifter.",
                "**Void Reaver MK-II:** Zero-G combat.",
                "**Entropy:** Elemental chaos.",
                "**Xer'zul:** Sanity test.",
                "**Ethereal Lords:** Council fight.",
                "**The Dark Star:** Heal check.",
                "**Shadow-Lord Xaaven:** Mirror images.",
                "**Dimensius:** The Void Lord."
            ]
        }
    ],
    shadow: [
        {
            name: 'The Undercity of Karabor',
            type: 'MEGA-DUNGEON (15 Bosses)',
            image: 'https://i.imgur.com/uvSunjP.jpeg',
            lore: "**Shadowmoon Valley** \nBeneath the Black Temple lies a sprawling subterranean city, the true seat of the Shadow Council. It is a labyrinth of torture chambers, demon kennels, and forbidden libraries that predates Illidan's occupation. It is where the Council creates their Fel-Orcs and summons their darkest demons.",
            geography: "**The Lay of the Land:** \nA massive, sprawling complex with distinct districts: The 'Prison Wing' (Iron and blood), The 'Library of Shadows' (Ancient scrolls and ghosts), The 'Summoning Pits' (Fel lava and stone), and the 'Residential District'.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nOutland lacked a true 'Dungeon Crawl' like Blackrock Depths.",
                plus: "**The Vision for Plus:** \nThe ultimate 5-man challenge. Non-linear, massive scale (3-4 hours), social hubs inside. It integrates the Shadow Council storyline completely."
            },
            bosses: [
                "**Inquisitor Xillious (The Torturer):** \nA master of agony who extracts secrets from the souls of the fallen. He forces players to 'Confess' their sins (debuffs) or take massive shadow damage.",
                "**High-Summoner Kazz'ral:** \nFound chanting the final verses of the Ritual of Souls. He summons waves of uncontainable fel-hounds that must be banished.",
                "**The Circle of Shadows (Council):** \nSix warlocks sharing a single health pool, each specialized in a different curse. Players must silence the 'Curse of Tongues' caster while kiting the 'Curse of Agony' spreader.",
                "**Kanrethad the Seeker (Young):** \nThe young prodigy, arrogant and wielding raw fel fire. He transforms into a Meta-Demon at 50%, serving as a lore nod to the Warlock Green Fire quest.",
                "**Avatar of Magtheridon:** \nA shade of the imprisoned lord, leaking blood that buffs nearby orcs. The tank must drag him away from pools of his own blood.",
                "**Void-Lord Xiraxis:** \nA creature improperly summoned, tearing the room apart with gravity wells. Players are pulled toward him and must run against the drag.",
                "**Gorgoloth the Crusher:** \nA Doomguard colossal who sunders armor and cleaves the entire party. A pure 'Tank and Spank' gear check.",
                "**Nethekurse the Soul-Flayed:** \nReturned from death, his body a husk. He no longer uses Fel, but purely Necrotic magic, reducing maximum health of the tank.",
                "**Teron'gor (The First Gorefiend):** \nWielding the truncheon of the original order. He casts 'Death Coil' on random party members, healing himself if it lands.",
                "**The Soul-Engine (Reliquary Prototype):** \nAn early, volatile version of the Reliquary of Souls. It malfunctions, swapping player health and mana percentages randomly.",
                "**Mistress Vylia:** \nA shivan assassin with six blades. She parries attacks from the front, forcing melee to position carefully behind her.",
                "**Krog the Unhinged:** \nA fel-orc berserker who gains 10% attack speed every 10 seconds. He must be killed before he becomes unhealable.",
                "**Arcane Construct XC-4:** \nA captured Titan relic reacting violently to Fel. It emits waves of arcane energy that must be line-of-sighted.",
                "**Dimensius's Shadow:** \nA fragment of the Void Lord that slipped through. It summons Voidwalkers that split into smaller Voidwalkers when killed.",
                "**Echo of Gul'dan:** \nThe final, secret boss. A psychic remnant of the warlock, casting 'Hand of Gul'dan' meteors that leave permanent craters."
            ],
            mechanics: "**The Shadow Keys:** \nPlayers must collect keys (Skull Key, Bone Key) to unlock shortcuts (gates, teleporters) that persist across runs. This gives a sense of progression within the dungeon itself."
        },
        {
            name: 'Netherwing Mines',
            type: '5-Man Heroic Only',
            image: 'https://i.imgur.com/mZEhEU0.jpeg',
            lore: "**Shadowmoon Valley** \nThe Dragonmaw orcs' cruelty knows no bounds. Allied with the Netherwing faction, players are tasked with infiltrating the crystal mines beneath Netherwing Ledge to sabotage their operations from within, free enslaved drakes, and eliminate the Dragonmaw leadership.",
            geography: "**The Lay of the Land:** \nThe atmosphere is oppressive, with the sounds of cracking whips, goblin machinery, and the sorrowful cries of enslaved Nether Drakes echoing through crystalline caverns.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nThe Netherwing grind is iconic but lacked a dedicated instance.",
                plus: "**The Vision for Plus:** \nThis fills that gap. It is 'Heroic Only' to serve as a capstone for the reputation grind. The final boss drops a mount, keeping it relevant forever."
            },
            bosses: [
                "**Taskmaster Varkule:** \nThe cruelest of the Dragonmaw. He wields a 'Nether-Whip' that scars the soul. He enrages enslaved drakes to attack the party unless they are soothed by a Druid or Priest.",
                "**Chief Engineer Razgor:** \nA goblin sapper piloting the 'X-02 Crystal-Shredder'. He plants drill charges that destabilize the cavern ceiling, forcing players to catch falling rocks to prevent a wipe.",
                "**Zzeraku the Warped:** \nOnce a noble drake, now a vessel of fel energy. It phases in and out of the nether, requiring players to step into portals to damage it in the shadow realm.",
                "**Overlord Mor'ghor:** \nThe Dragonmaw commander fighting from the back of his armored Nether Drake. This is an aerial 3D fight where players must jump between rocky platforms to avoid his strafing runs."
            ],
            mechanics: "**Fel-Gas:** \nSections of the mine fill with gas. Players must move from 'Air Pocket' to 'Air Pocket' to survive, fighting mobs inside these small safe zones."
        }
    ],
    eastern: [
        {
            name: 'Quel\'Thalas Supply Route',
            type: 'Lvl 30-40 Dungeon (Plaguelands)',
            image: 'https://i.imgur.com/R3SmEkZ.jpeg',
            lore: "The Blood Elves' journey to Outland was not instantaneous. This dungeon depicts a crucial moment in their pilgrimage: escorting a massive caravan of magical supplies through the Scourge-infested Plaguelands to the Dark Portal. The journey is long, the road is broken, and the dead do not sleep.",
            geography: "**The Lay of the Land:** \nThis is an outdoor dungeon set on the main road of the Eastern Plaguelands. The sky is dark and oppressive. The 'walls' of the dungeon are massive hordes of undead that kill you if you stray too far from the caravan's light.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nLow level dungeons were just 'kill trash, kill boss'.",
                plus: "**The Vision for Plus:** \nThis dungeon explains the arduous journey the Blood Elves took. It utilizes a 'Moving Dungeon' mechanic where the entire instance takes place around a moving caravan. It forces the party to stay mobile and manage pulls on the fly, breaking the 'pull, drink, pull' monotony of Classic dungeons."
            },
            bosses: [
                "**Gorgonash (The Roadblock):** \nA massive Abomination sewn together from the corpses of fallen caravan guards. He uses 'Meat Hook' to drag players away from the safety of the caravan's light.",
                "**Lich-Lord Thule:** \nA powerful necromancer commanding the Scourge forces. He casts 'Raise Dead' on any player who dies, turning them into a hostile ghoul that must be killed by their former allies.",
                "**Anub'shiah:** \nA Crypt Lord who burrows beneath the road, attempting to capsize the supply wagons. Players must stun him with 'Holy Grenades' when he surfaces."
            ],
            mechanics: "**The Caravan:** \nThe party must stay near the cart to avoid a stacking 'Plague' debuff. If the cart takes too much damage from ghouls, it stops, and waves of enemies swarm it until repaired by an Engineer or Healer."
        },
        {
            name: 'The Dark Portal Excavation',
            type: 'Lvl 55-60 Dungeon (Blasted Lands)',
            image: 'https://i.imgur.com/Jfa9V1W.jpeg',
            lore: "Before the Portal opened, the Burning Legion's vanguard and Shadow Council cultists were already at work on the Azeroth side, widening the rift. Investigating the dig site reveals artifacts of the First War buried beneath the red sand.",
            geography: "**The Lay of the Land:** \nA deep, spiraling excavation pit right next to the Dark Portal. It goes down into the bedrock of Azeroth, revealing Titan structures that the Portal was built upon.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nTBC feels disconnected from Azeroth.",
                plus: "**The Vision for Plus:** \nThis dungeon bridges the gap. It gives level 58 players a 'pre-patch' experience permanently. It explains *how* the Legion reopened the gate and why Nethergarde Keep failed to stop them."
            },
            bosses: [
                "**Grand Warlock Ralsu:** \nThe leader of the Shadow Council deep excavation. He transforms into a Demon at 50% health, gaining 'Chaos Bolt' which pierces all absorption shields.",
                "**Captain Vrax:** \nA Felguard commander with impossible strength. His 'Mortal Strike' reduces healing by 90%, forcing tank kiting and cooldown rotation.",
                "**Echo of the Guardian:** \nA magical anomaly created by the portal's energies, taking the form of Medivh. He casts random spells from the Karazhan Chess Event (Fire, Water, Arcane) that change the terrain."
            ],
            mechanics: "**The Widening:** \nThe final boss room gets smaller as the portal grows, acting as a soft enrage timer. Players must defeat the boss before the portal consumes the entire platform."
        },
        {
            name: "Karazhan Crypts",
            type: "10-Man Raid (Tier 4.5)",
            tier: 4.5,
            image: "https://i.imgur.com/WfksQpV.jpeg",
            lore: "The Ethereum (Ethereals) have punctured the main ley-line beneath Karazhan, trying to harness the raw magic of the tower's roots. In doing so, they have run afoul of the horrifying history buried there—the Upside-Down Sinners and the dark secrets of Medivh.",
            geography: "**The Roots of the Tower:** \nThe upper levels are filled with Ethereal machinery and pink containment fields. As you descend deeper, the tech fails, replaced by damp earth, rusted chains, and the flooded chambers of the damned.",
            philosophy: {
                tbc: "**The Missing Piece:** \nThe Crypts were cut from the original game for being 'too dark'.",
                plus: "**The Vision for Plus:** \nWe are opening the gate. This 10-man raid bridges the gap between Karazhan and Tier 5. It serves as a 'Science vs. Supernatural' conflict, mixing Ethereal technology with gothic horror."
            },
            cryptsData: {
                title: "Karazhan Crypts",
                overview: {
                    rationale: "Karazhan Crypts is one of the most requested 'lost content' pieces in WoW history. Positioned as Tier 4.5 (ilvl 125), it offers a challenging 10-man progression path for guilds mastering Gruul and Magtheridon.",
                    issues: [
                        "Original Crypts was unfinished and blocked off.",
                        "Need for a 10-man bridge between T4 and T5.",
                        "Ethereal narrative presence needed expansion in Azeroth."
                    ],
                    environment: [
                        { title: "Well of the Forgotten", desc: "The upper excavation site, dominated by Ethereal machinery." },
                        { title: "The Slag Pit", desc: "A massive pit of bone and ash where early experiments were discarded." },
                        { title: "Upside-Down Sinners", desc: "The flooded lower levels where the drowned hang in eternal torment." }
                    ]
                },
                attunement: {
                    title: "The Violet Key",
                    steps: [
                        { name: "1. The Disturbance", desc: "Retrieve the [Ethereum Transponder] from Nexus-Prince Shaffar in Heroic Mana-Tombs." },
                        { name: "2. The Nightbane Connection", desc: "Summon Nightbane in Karazhan to loot the [Charred Bone Key]." },
                        { name: "3. The Soul-Lock", desc: "Collect the [Urn of the Unquiet] from Blackheart the Inciter in Heroic Shadow Labyrinth." },
                        { name: "4. The Unsealing", desc: "Defend Archmage Alturus at the crypt gate in Morgan's Plot to forge the [Key to the Damp Earth]." }
                    ]
                },
                bosses: [
                    {
                        name: "Commander Zaxus (The Breaker)",
                        lore: "The Ethereum commander leading the excavation. He has set up a forward base in the 'Well of the Forgotten.'",
                        mechanics: "**'Stasis Traps':** Zaxus throws devices that trap players in glass cubes. They are immune to damage but cannot act. Teammates must DPS the cube to break them out before the 'Oxygen Depletion' timer ends.\n\n**'Phase Shift':** At 50%, Zaxus shifts the entire raid into the 'Ethereal Plane' (graphic filter). Healing received is reduced by 50%, but movement speed is increased."
                    },
                    {
                        name: "The Upside-Down Council (The Sinners)",
                        lore: "In the flooded lower chambers, the Ethereum disturbed the resting place of thieves and murderers drowned by Medivh. They hang upside down by chains, their spirits lashing out.",
                        mechanics: "**'Chain of Sins':** Three bosses share a health pool but hang from the ceiling. Melee must attack their heads (which are at floor level).\n\n**The Thief:** Steals buffs from players and applies them to the Council.\n\n**The Murderer:** Fixates on random players; if he reaches them, he strangles them (Stun + Heavy DoT).\n\n**The Liar:** Casts 'Mass Confusion,' swapping player controls (W becomes S, A becomes D)."
                    },
                    {
                        name: "Arcanagos the Unbound (The Mana Wyrm)",
                        lore: "Before he was Nightbane, he was a blue dragon. This is not him, but a coalesced monstrosity of pure mana formed from the energy leaking from his original bones, fed by the Ethereals' tampering.",
                        mechanics: "**'Mana Burn Nova':** Drains mana from the entire raid. If a player hits 0 mana, they explode for raid-wide damage. Healers must 'stand in the bad' (Ley-Bleed zones) to keep mana high, balancing the damage taken.\n\n**'Arcane Buffet':** Classic dragon mechanic (stacks magic vulnerability). Tank swap required."
                    },
                    {
                        name: "Nexus-Lord Xaril (The Harvester)",
                        lore: "The mastermind behind the operation. He isn't trying to loot the tower; he is trying to *become* the tower's new Guardian by fusing himself with the Ley-Node.",
                        mechanics: "**'Ley Overload':** Xaril connects to the conduit. Players must physically block the beams (like Netherspite) to prevent him from gaining 'Infinite Power.'\n\n**'Reality Rip':** He summons 'Dark Matter' adds that gravitate toward the center. If they touch him, he wipes the raid. They must be kited and killed.\n\n**Hard Mode:** If you engage him without clearing the 'Upside-Down Sinners,' the spirits join the fight, making it nearly impossible but increasing loot quality."
                    }
                ],
                loot: [
                    {
                        name: "Zaxus's Phase-Blade",
                        type: "One-Hand Sword",
                        slot: "Main Hand",
                        quality: "epic",
                        damage: "165 - 307",
                        speed: "2.60",
                        dps: "90.8",
                        stats: [
                            "+18 Agility",
                            "+20 Stamina"
                        ],
                        effects: [
                            "Equip: Increases attack power by 38.",
                            "Chance on Hit: Phases the user out of reality, reducing threat generated by 50% and increasing Armor Penetration by 200 for 10 sec."
                        ],
                        flavor: "\"It shimmers between this world and the Twisting Nether.\""
                    },
                    {
                        name: "Cowl of the Upside-Down Sinner",
                        type: "Cloth",
                        slot: "Head",
                        quality: "epic",
                        armor: "168",
                        stats: [
                            "+35 Stamina",
                            "+30 Intellect"
                        ],
                        sockets: ["Meta", "Blue"],
                        socketBonus: "+4 Spell Crit Rating",
                        effects: [
                            "Equip: Improves spell hit rating by 16 (1.27% @ L70).",
                            "Equip: Increases damage and healing done by magical spells and effects by up to 55.",
                            "Equip: Your offensive spells have a chance to drown the target, silencing them for 2 sec. (Does not work on bosses)."
                        ],
                        flavor: "\"Still dripping with water that refuses to dry.\""
                    },
                    {
                        name: "Band of the Ley-Bleeder",
                        type: "Ring",
                        slot: "Finger",
                        quality: "epic",
                        stats: [
                            "+22 Intellect",
                            "+18 Spirit"
                        ],
                        effects: [
                            "Equip: Increases damage and healing done by magical spells and effects by up to 60.",
                            "Use: Tap into the Ley-Line, restoring 1500 mana over 12 sec, but dealing 200 Arcane damage to you every second. (2 Min Cooldown)"
                        ],
                        flavor: "\"It pulses with dangerously unstable arcane energy.\""
                    },
                    {
                        name: "Bulwark of the Forgotten Crypt",
                        type: "Shield",
                        slot: "Off Hand",
                        quality: "epic",
                        armor: "4200",
                        block: "130",
                        stats: [
                            "+15 Strength",
                            "+30 Stamina"
                        ],
                        sockets: ["Red"],
                        socketBonus: "+3 Dodge Rating",
                        effects: [
                            "Equip: Increases defense rating by 20 (8.47 @ L70).",
                            "Equip: When struck in combat, has a 5% chance to surround the bearer in a 'Stasis Field,' absorbing the next 1000 damage."
                        ],
                        flavor: "\"Etched with warnings in a language older than Common.\""
                    }
                ]
            }
        },
        {
            name: "The Siege of Quel'Danil",
            type: "25-Man Raid (Tier 5.5)",
            tier: 5.5,
            image: "https://i.imgur.com/ErIqzbU.jpeg",
            lore: "The fragile peace of the Hinterlands has been shattered. The Sunfury forces of Kael'thas Sunstrider, utilizing dark technology from the Netherstorm, have launched a genocidal campaign against their High Elven kin at Quel'Danil Lodge.",
            geography: "**The Lay of the Land:**\nThe raid takes place at the High Elf lodge in the Hinterlands. It involves defending the walls, fighting through the burning courtyard, and ascending to the High Terrace.",
            quelDanilData: {
                title: "The Siege of Quel'Danil",
                overview: {
                    rationale: "Positioned as a Tier 5.5 raid, this content offers a narrative bridge between the Kael'thas storyline in Netherstorm and the Sunwell. It provides a non-Outland raid environment that refreshes the visual palette.",
                    issues: [
                        "Azeroth content was largely ignored in TBC.",
                        "The High Elf storyline lacked a climactic battle.",
                        "Mid-tier guilds needed a stepping stone to Hyjal."
                    ],
                    environment: [
                        { title: "The Outer Walls", desc: "Defend the ramparts against Fel-Reavers using Wildhammer artillery." },
                        { title: "The Inner Courtyard", desc: "A burning sanctuary where magic runs wild." },
                        { title: "The High Terrace", desc: "The rooftop command center overlooking the burning forest." }
                    ]
                },
                attunement: {
                    title: "The Wildhammer Vengeance",
                    steps: [
                        { name: "1. Intercepted Orders", desc: "Loot 'Sunfury Invasion Plans' from Void Reaver in Tempest Keep (25% Drop Rate)." },
                        { name: "2. The Warning", desc: "Deliver the plans to Gryphon Master Talonaxe in Aerie Peak." },
                        { name: "3. Counter-Measure", desc: "Collect 5 Primal Mana and 2 Khorium Bars to craft a 'Fel-Disruptor' to breach the siege shield." }
                    ]
                },
                phases: [
                    {
                        name: "Phase 1: The Outer Walls",
                        bosses: [
                            {
                                name: "The Fel-Siege Engines",
                                desc: "A defense encounter. Players must man Wildhammer Cannons to destroy the shielded Fel-Reavers before they breach the gate. Repair crews must keep the walls standing amidst bombardment."
                            }
                        ]
                    },
                    {
                        name: "Phase 2: The Inner Courtyard",
                        bosses: [
                            {
                                name: "Magistrix Lyandra",
                                desc: "The Arcane Corrupter. She is overloading the Great Runestone. Players must use Grounding Totems to siphon her excess energy, preventing a zone-wide explosion."
                            }
                        ]
                    },
                    {
                        name: "Phase 3: The Hall of Records",
                        bosses: [
                            {
                                name: "Ranger-Captain Lyra & Loros",
                                desc: "The Twin Vanguards. A Hunter/Paladin duo who share a health pool. If they stand within 40 yards, they gain 99% damage reduction. They must be tanked apart but killed simultaneously."
                            }
                        ]
                    },
                    {
                        name: "Phase 4: The High Terrace",
                        bosses: [
                            {
                                name: "Warlord Salaris",
                                desc: "The Hand of Kael'thas. Starts mounted on 'Gorefang' (Beast Master phase). Upon dismounting, he enters a dual-wielding Fury Warrior enrage. Pure physical brutality."
                            }
                        ]
                    }
                ],
                misc: {
                    loot: [
                        {
                            name: "Gorefang's Tusk",
                            slot: "One-Hand Dagger",
                            boss: "Warlord Salaris",
                            quality: "epic",
                            stats: ['+25 Agility', '+30 Stamina'],
                            effects: [
                                "Equip: Increases attack power by 50.",
                                "Equip: Your attacks ignore 120 of your opponent's armor.",
                                "Chance on Hit: Gores the target, causing them to bleed for 220 damage every 2 sec for 10 sec. This effect stacks up to 3 times."
                            ],
                            flavor: "\"Severed from the warlord's mount. It is jagged, yellowed, and still smells of Fel-feed.\""
                        },
                        {
                            name: "Aegis of the Twin Sentinels",
                            slot: "Shield",
                            boss: "Lyra & Loros",
                            quality: "epic",
                            stats: ['+45 Stamina'],
                            effects: [
                                "Equip: Increases defense rating by 25 (10.6 @ L70).",
                                "Equip: Increases shield block rating by 30 (3.8% @ L70).",
                                "Equip: When you block an attack, you have a 5% chance to reflect the next spell cast against you back at the caster."
                            ],
                            flavor: "\"Loros's shield was not just steel; it was a mirror for magic.\""
                        },
                        {
                            name: "Robes of the Corrupted Runestone",
                            slot: "Cloth Chest",
                            boss: "Magistrix Lyandra",
                            quality: "epic",
                            stats: ['+40 Intellect', '+40 Stamina', '+30 Spirit'],
                            sockets: ['Red Socket', 'Red Socket', 'Blue Socket'],
                            socketBonus: '+4 Spell Power',
                            effects: [
                                "Equip: Improves spell haste rating by 35 (2.23% @ L70).",
                                "Equip: Increases damage done by Fire and Arcane spells and effects by up to 72.",
                                "Set Bonus (2-Piece): Your Fire spells have a chance to grant \"Fel-Infusion,\" causing your next Arcane spell to be instant cast."
                            ],
                            flavor: "\"The fabric is scorched with green fire where the ley-lines were forcibly twisted.\""
                        },
                        {
                            name: "Wildhammer 'Diplomacy' Adjuster",
                            slot: "Gun",
                            boss: "The Fel-Siege Engines",
                            quality: "epic",
                            stats: ['+30 Agility', '+25 Stamina'],
                            effects: [
                                "Equip: Improves critical strike rating by 24 (1.09% @ L70).",
                                "Equip: Increases attack power by 48.",
                                "Equip: Your ranged critical strikes have a chance to daze the target for 2 sec."
                            ],
                            flavor: "\" 'Diplomacy' is etched into the barrel. 'Negotiator' is etched into the stock.\""
                        }
                    ]
                }
            },
            philosophy: {
                tbc: "**The 2007 Landscape:**\nThe Hinterlands was a leveling zone with no end-game relevance.",
                plus: "**The Vision for Plus:**\nWe bring the war home. Kael'thas isn't just staying in Outland; he is striking at his 'traitorous' kin."
            },
            bosses: [
                "**The Fel-Siege Engines:** Artillery Encounter.",
                "**Magistrix Lyandra:** Arcane/Fel caster.",
                "**Lyra & Loros:** Twin Bosses.",
                "**Warlord Salaris:** Final Boss."
            ]
        },
        {
            name: 'Halls of Damnation (Stratholme)',
            type: '5-Man Dungeon (Tier 5)',
            image: 'https://i.imgur.com/tpSlaGM.jpeg',
            lore: "**Stratholme / Plaguelands** \nA cabal of surviving dreadlords, led by the cunning Lord Valerius, has returned to Stratholme. They are using the city's potent necromantic energy to tear open a permanent gateway to the Twisting Nether. Kael'thas has dispatched Magister Astromancer Vexil to aid them.",
            geography: "**The Lay of the Land:** \nThe dungeon is a journey through descending layers of corruption. The first wing is a twisted mockery of the Scarlet Crusade's fallen bastion, draped in shadow. Deeper within, the architecture warps into the distinct, elegant style of the blood elves.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nStratholme was iconic but capped at level 60.",
                plus: "**The Vision for Plus:** \nRevisiting Stratholme at level 70 with a Burning Legion twist. It connects the Scourge and Legion plotlines."
            },
            bosses: [
                "**Commander Malor (The Fallen):** \nA former Crusader raised by the Nathrezim. His 'Desecration' fills the room with void zones. He casts 'Hammer of Injustice', stunning the tank for 6 seconds.",
                "**Magister Vexil:** \nKael'thas's envoy to the Dreadlords. He places 'Mana Bombs' on players that explode after 10 seconds. Victims must run to empty corners to detonate safely.",
                "**Lord Valerius (The Dreadlord):** \nThe mastermind. He uses 'Carrion Swarm' and 'Vampiric Aura'. Players must light 'Braziers of Holy Fire' in the room to strip his aura and make him vulnerable."
            ]
        },
        {
            name: 'Scarlet Citadel',
            type: '5-Man Heroic Only (Tyr\'s Hand)',
            image: 'https://i.imgur.com/R3SmEkZ.jpeg',
            lore: "The Scarlet Crusade has retreated to their final bastion in Tyr's Hand. Under the command of High General Abbendis (and a hidden Dreadlord manipulator), they are preparing a 'Final Crusade' to purge all non-humans from Lordaeron.",
            geography: "**The Lay of the Land:** \nA heavily fortified cathedral city. Players must breach the walls using siege engines, then fight street-by-street to the Grand Cathedral.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nTyr's Hand was valid for farming but lacked an instance.",
                plus: "**The Vision for Plus:** \nA proper conclusion to the Scarlet Crusade arc. It drops the 'Scarlet Commander' set (Plate healing gear) and 'Whitemane's Chapeau'."
            },
            bosses: [
                "**High General Abbendis:** \nWields the corrupted Ashbringer (if not looted by players). She uses 'Holy Fire' that leaves permanent burning zones.",
                "**Grand Inquisitor Isillien:** \nHe dual-wields daggers and uses 'Torture' on random party members, stunning them until healed to full.",
                "**Balnazzar (True Form):** \nHidden within the basement. He sheds his human disguise to rain Carrion Swarms."
            ]
        },
        {
            name: 'Stormwind Vault',
            type: '5-Man Dungeon (Heist)',
            image: 'https://i.imgur.com/WfksQpV.jpeg',
            lore: "The Aldor believe an ancient Naaru shard is locked within the Royal Vault of Stormwind, confiscated by the House of Nobles. You are hired to break in, sneak past the elite Royal Guards, and steal it back. (Horde players are hired by the Scryers to steal it first).",
            geography: "**The Lay of the Land:** \nA high-security prison/bank beneath the canals. Lasers (Arcane wards), patrolling golems, and anti-magic fields.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nThe 'Vault' portal existed in SW but never opened.",
                plus: "**The Vision for Plus:** \nA stealth-focused dungeon. Rogues and Druids shine here. 'Alarm' mechanics mean if you are spotted, extra elites spawn, reducing your loot timer."
            },
            bosses: [
                "**Warden Thelwater:** \nThe head jailor. He releases prisoners to fight for him.",
                "**Golem MK-II:** \nA security construct. It rotates 'Elemental Shields' (Fire/Frost/Arcane).",
                "**Lord Katrana Prestor (Onyxia Human Form):** \nA cameo fight. She tries to stop the players from uncovering her secrets in the vault."
            ],
            mechanics: "**The Timer:** \nLoot is determined by how many caches remain un-hacked when the final boss dies. \n3 Caches Saved = Extra Badge + Epic Gem. \n0 Caches Saved = Standard Blue Loot. \nThis creates a 'Gold/Silver/Bronze' medal feeling for every run."
        },
        {
            name: 'Chromaggus Unleashed',
            type: 'World Boss (Burning Steppes)',
            level: '60+',
            zone: 'Burning Steppes',
            image: 'https://i.imgur.com/bkyQmF5.jpeg',
            lore: "The twin-headed monstrosity has escaped Blackwing Lair following Nefarian's defeat. He now roams the Burning Steppes, devouring Blackrock Orcs and growing to gargantuan size.",
            geography: "**The Encounter:** \nHe patrols the entire zone. Players must engage him while dealing with his 'Shimmering Scale' mechanic which changes his resistance every 30 seconds."
        }
    ],
    kalimdor: [
        {
            name: 'Timbermaw Hold: Corrupted Depths',
            type: '5-Man Dungeon (Azshara/Winterspring)',
            image: 'https://i.imgur.com/I4cElev.jpeg', // Placeholder forest/cave
            lore: "The Furbolgs of Timbermaw Hold have gone silent. A corrupting influence from the roots of Nordrassil has driven them into a feral rage. Players must delve into the deepest tunnels to cleanse the High Chief.",
            geography: "**The Lay of the Land:** \nA spiraling root system filled with corrupted nature magic and maddened bears.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nTimbermaw was just a rep grind tunnel.",
                plus: "**The Vision for Plus:** \nExpands the hold into a full dungeon. Drops 'Defender of the Timbermaw' trinkets."
            },
            bosses: [
                "**High Chief Grazzil:** \nMounted on a war-bear. He charges random players.",
                "**Xyloc the Corruptor:** \nA Satyr dwelling in the roots, spreading the nightmare.",
                "**Grizzled Ancestor:** \nA spirit bear that must be soothed, not killed."
            ]
        },
        {
            name: 'Feralas: The Dire Maul Warp',
            type: 'Lvl 40-50 Dungeon (Feralas)',
            image: 'https://i.imgur.com/rJCmdB1.jpeg',
            lore: "Highborne ghosts in Dire Maul are attempting to contact Kael'thas using ancient pylons, hoping for salvation. However, the magical feedback has driven the local ogres mad. You must shut down the pylons before they tear a hole in reality.",
            geography: "**The Lay of the Land:** \nSet in the overgrown ruins of Dire Maul, but a previously inaccessible wing. It is filled with magical anomalies, floating rocks, and distorted time.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nDire Maul lore was disconnected from the Blood Elves.",
                plus: "**The Vision for Plus:** \nThis connects the Highborne of Eldre'Thalas to the Blood Elves. It fleshes out the 'Magic Addiction' lore. The dungeon is non-linear and set in the ruins of a wing of Dire Maul that was previously inaccessible."
            },
            bosses: [
                "**Spirit of Prince Tortheldrin:** \nThe ghost of the Prince, desperate for magic. He summons 'Mirror Images' that cast high-damage spells. Players must find the real Prince to interrupt him.",
                "**The Pylon Guardian:** \An arcane construct protecting the energy source. It rotates a 'Reflective Shield'. Hitting it in the shield reflects 200% damage. Attacks must be flanked.",
                "**Magister Krelas:** \nA Blood Elf emissary who succumbed to the fel energy. He summons 'Fel-Imps' that cast Fireball. He serves as a DPS check."
            ],
            mechanics: "**Mana Bomb:** \nPlayers must pass a volatile 'Mana Bomb' between them (Hot Potato style) to destroy magical barriers blocking the path. Holding it too long kills you."
        },
        {
            name: 'The Exodar Crash Site',
            type: 'Lvl 15-25 Dungeon (Azuremyst Isle)',
            image: 'https://i.imgur.com/hJNP40m.jpeg',
            lore: "The crash of the Exodar scattered technology across the isle. Scavengers, Murlocs, and Blood Elf spies are picking through the radioactive wreckage. You must secure the sensitive technology before it falls into the wrong hands.",
            geography: "**The Lay of the Land:** \nA coastal dungeon. The crash trail of the Exodar leads into a cave system now glowing with blue radiation crystals and filled with malfunctioning tech.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nThe Draenei starting experience is isolated from the rest of the world.",
                plus: "**The Vision for Plus:** \nThis dungeon gives them a low-level instance that feels relevant to the main plot. It establishes the Blood Elf vs Draenei conflict early on."
            },
            bosses: [
                "**Infiltrator Kaelis:** \nA Blood Elf rogue stealthing through the ruins using explosives. He vanishes often; Hunters must use 'Flare' or Warlocks 'Detect Invisibility' to reveal him.",
                "**Subject Alpha:** \nA Ravager warped by crash radiation. It evolves mid-fight, gaining either 'Spiked Carapace' (Reflect Damage) or 'Wings' (Aerial Phase) depending on damage taken.",
                "**Spark-Master Ziggs:** \nA goblin thief piloting a stolen shredder. He overloads the generator, covering the floor in electricity. Players must jump on boxes to avoid the shock."
            ],
            mechanics: "**Radiation:** \nPatches of the floor are irradiated. Players must use 'Hazmat Suits' (found in the dungeon) to traverse these areas safely, or take massive damage."
        }
    ],
    timeways: [
        {
            name: 'Siege of Dalaran',
            type: '5-Man Dungeon',
            image: 'https://i.imgur.com/sXKmOoH.png',
            lore: "Travel back to the Third War. The Scourge is invading Dalaran. You must help Prince Kael'thas and Lady Vashj escape the ruins while fighting off the Undead and the racist Grand Marshal Garithos.",
            geography: "**The Lay of the Land:** \nThe streets of Dalaran, burning and ruined. The purple domes are shattered. Undead roam the streets, and Human footmen barricade the exits.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nKael'thas's motivation for joining Illidan was told in WC3 but never shown in WoW.",
                plus: "**The Vision for Plus:** \nThis fills the lore gap. It's an escort mission done right. Kael'thas is a powerful ally, not a weakling. His 'Morale' system dictates how much he helps you. It reuses the Dalaran assets in a war-torn state."
            },
            bosses: [
                "**Dreadlord Mal'Gathis:** \nA cunning nathrezim orchestrating the Scourge assault. He unleashes ' carrion Swarms' that reduce healing received and casts 'Sleep' on healers, forcing dispels.",
                "**Baron Rivendare (Alive):** \nA tragic paladin fighting for his city. He uses 'Holy Cleave' and 'Aura of Devotion'. At 50% health, he begins to succumb to the plague, switching to Shadow abilities.",
                "**Grand Marshal Garithos:** \nA mounted knight with a 'Human Supremacy' aura that reduces healing done by non-Human allies. He summons Elite Footmen who must be crowd-controlled."
            ],
            mechanics: "**Morale:** \nSave Blood Elf survivors to buff Kael'thas's damage. If his morale drops too low, he stops casting and you get overwhelmed."
        },
        {
            name: 'The Barrow Deeps',
            type: '5-Man Dungeon',
            image: 'https://i.imgur.com/GzW9s6o.jpeg', // Dark underground prison
            lore: "The Barrow Deeps, thousands of years ago. The Infinite Dragonflight is attacking Maiev Shadowsong's prison to free Illidan early and disrupt the timeline. You must hold the line.",
            geography: "**The Lay of the Land:** \nA deep, dark Night Elf prison. It is circular, with Maiev in the center. Enemies pour in from the corridors.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nThe Infinite Dragonflight's motives were vague.",
                plus: "**The Vision for Plus:** \nA 'Tower Defense' dungeon. You aren't moving forward; you are holding a room against waves. It flips the script on the usual dungeon crawl. It also establishes the Infinite Dragonflight as a threat in TBC."
            },
            bosses: [
                "**Infinite Infiltrator:** \nA dragonkin assassin cloaked in time-magic. Uses 'Chronal Shift' to teleport behind the healer and 'Temporal Poison' which reverses healing received.",
                "**Jailor's Folly:** \nA massive Iron Golem corrupted by the Infinites. His 'Spinning Decapitation' clears the room, ensuring players cannot just hold one choke point.",
                "**Epoch-Hunter Zalu:** \nThe leader of the assault. He casts 'Time Dilatation', slowing movement speed by 90% while spawning fast-moving whelps that must be AOE'd down."
            ],
            mechanics: "**Mana Defense:** \nMaiev uses her mana to keep the cage wards active. Healers must heal Maiev to restore her mana. If she hits 0 mana, the cage opens and you wipe."
        },
        {
            name: 'The Sundering of Draenor',
            type: '5-Man Dungeon',
            image: 'https://i.imgur.com/66UtpLO.jpeg',
            lore: "The final moments of Draenor. Ner'zhul is tearing the planet apart with portals. The ground is crumbling. You must survive the apocalypse and ensure the timeline remains intact.",
            geography: "**The Lay of the Land:** \nThe Black Temple summit, but the sky is a swirling vortex of destruction. Debris falls constantly. The ground shakes.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nWe hear about Draenor dying, but we never see it.",
                plus: "**The Vision for Plus:** \nThe ultimate environmental challenge. Gravity shifts, meteors rain down, the floor falls away. It captures the chaos of the planet dying. The 'Boss' is the environment itself."
            },
            bosses: [
                "**Tectonic Colossus:** \nA raging earth elemental formed from the shattering planet. He splits into smaller elementals upon death, which must be banished or tanked.",
                "**Grog'thok the Panic-Stricken:** \nAn Ogre Warlord terrified by the apocalypse. He flails wildly, dealing massive physical damage to anyone nearby. He must be kited, not tanked.",
                "**The Portal Storm:** \nThe environment itself is the enemy. Void meteors, gravity wells, and crumbling platforms force constant movement."
            ],
            mechanics: "**Survival:** \nSurvive for 3 minutes against endless waves while the room disintegrates."
        },
        {
            name: 'Caverns of Time: The First War',
            type: 'Lvl 68-70 Dungeon',
            image: 'https://i.imgur.com/66UtpLO.jpeg', // Reusing Sundering as placeholder for War
            lore: "Witness the Orcs first pouring into the Black Morass. Stop the Infinites from killing Anduin Lothar before he can rally Stormwind. It is a clash of steel and primitive fury.",
            geography: "**The Lay of the Land:** \nThe Black Morass (swamp) but filled with thousands of Orcs and Humans fighting. It is a chaotic battlefield.",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nWe have the Dark Portal opening, but not the war itself.",
                plus: "**The Vision for Plus:** \nWe wanted a dungeon that showed the sheer brutality of the First War. It contrasts the 'Alien' Orcs with the 'Medieval' Humans. It's a battlefield dungeon, similar to Hyjal but on a smaller, more intense scale."
            },
            bosses: [
                "**Warlord Throk'gar:** \nA hulking orcish commander wielding a jagged arcanite reaper. His 'Bloodlust' aura drives nearby grunts into a frenzy, requiring immediate tank positioning.",
                "**Infinite Slayer:** \nA rogue agent of the timeline, cloaked in shifting sands. She attempts to 'Chronal Shift' behind Lothar, dealing massive damage if not stunned.",
                "**Vylestrasz the Corrupt:** \nA drake twisted by the Old Gods, raining shadowflame upon the battlefield. He must be grounded by ballistae before he can be tanked."
            ],
            mechanics: "**Protect the Target:** \nKeep Lothar alive during a skirmish. He fights back, but can be overwhelmed."
        }
    ],
    far_reach: [
        {
            name: 'The Citadel of the Void',
            type: '25-Man Raid (Tier 6.5)',
            tier: 6.5,
            image: 'https://i.imgur.com/DEKpzhn.jpeg',
            lore: "**The End of All Things**\nDimensius the All-Devouring has fully manifested at the edge of the Twisting Nether, anchoring his massive void-fortress to the crumbling remains of Farahlon. The Ethereals of the Protectorate have launched a desperate assault, but their technology is failing. The Void Lord seeks to consume the mana of Outland to fuel a portal to Azeroth. This is the true final stand of the expansion.",
            citadelData: {
                title: "The Citadel of the Void",
                overview: {
                    rationale: "TBC had a massive lore gap between Black Temple and Sunwell. The 'Void' was a background threat that never culminated. The Citadel is the answer to 'What is the Ethereal homeworld?' and 'Who destroyed it?'",
                    issues: [
                        "The Ethereals were just vendors in TBC.",
                        "Dimensius was a localized quest mob in Netherstorm (greatly nerfed).",
                        "We never saw the true scope of the Void threat."
                    ],
                    environment: [
                        { title: "Zero Gravity", desc: "Combat takes place on 3D planes. Floating debris acts as cover." },
                        { title: "The Event Horizon", desc: "The skybox is a swirling black hole consuming the stars." }
                    ]
                },
                bosses: [
                    {
                        tier: "The Void Dock",
                        bosses: [
                            { name: "Nexus-Prince Vizaal", desc: "The Gatekeeper. Uses 'Stasis Traps' to freeze players in time. Allies must shatter them." },
                            { name: "Void Reaver MK-II", desc: "The ultimate Fel Reaver. 'Gravity Well' pulls the raid to the center for a massive 'Void Nova'." }
                        ]
                    },
                    {
                        tier: "Entropy Core",
                        bosses: [
                            { name: "Entropy", desc: "The Pure Elemental. Shifts between Solid (Tank), Liquid (Split), and Gas (DoT cloud) states." },
                            { name: "Xer'zul the Corrupter", desc: "Summons portals to other worlds. 'Away Teams' must enter to stop rituals." },
                            { name: "Council of Ethereal Lords", desc: "Three bosses, shared health. They swap weapons and abilities (Warrior, Mage, Rogue)." }
                        ]
                    },
                    {
                        tier: "The Event Horizon",
                        bosses: [
                            { name: "The Dark Star", desc: "A corrupted Naaru. Cycles between Light and Void phases every 30s, forcing gear swaps." },
                            { name: "Shadow-Lord Xaaven", desc: "Cloaked in absolute darkness. Players must carry 'Torches of the Naaru' to create safe zones." },
                            { name: "Dimensius", desc: "The All-Devouring. A tear in reality. Fight his hands/eyes while charging the 'Mana Bomb'." }
                        ]
                    }
                ],
                wings: [
                    { name: "The Void Dock", theme: "Ethereal Tech & Spaceships", hazard: " Vacuum (Silence)" },
                    { name: "Entropy Core", theme: "Twisted physics & broken reality", hazard: "Gravity Shifts" },
                    { name: "Event Horizon", theme: "Pure Darkness", hazard: "Insanity Drain" }
                ],
                misc: {
                    npcs: [
                        { name: "Nexus-Prince Haramad", role: "Your questgiver. He provides the 'Phase-Suit' via reputation." },
                        { name: "Commander Ameer", role: "Leads the Protectorate assault." }
                    ],
                    loot: [
                        { category: "Tier 6.5", desc: "The absolute pinnacle of TBC gear. Item Level 164." },
                        { category: "Void-Forged", desc: "Weapons that talk to you." }
                    ]
                }
            },
            geography: "**The Lay of the Land:**\nA raid set in zero-gravity space. Players fight across floating debris, Ethereal flagships, and the twisted, obsidian architecture of the Void Citadel itself. The skybox is a swirling vortex of purple and black entropy.",
            philosophy: {
                tbc: "**The Missing Tier:**\nTBC had a massive lore gap between Black Temple and Sunwell.",
                plus: "**The Bridge:**\nThis raid bridges that gap. It features vertical combat, vehicle sections (Protectorate Fighters), and 'Sanity' mechanics borrowed from future expansions but simplified for TBC. It is the hardest content in the game, harder than pre-nerf M'uru."
            },
            bosses: [
                "**Nexus-Prince Vizaal (The Gatekeeper)**",
                "**Void Reaver MK-II**",
                "**Entropy (The Pure Elemental)**",
                "**Xer'zul the Corrupter**",
                "**Council of the Ethereal Lords**",
                "**The Dark Star (Corrupted Naaru)**",
                "**Shadow-Lord Xaaven**",
                "**Dimensius the All-Devouring**"
            ],
            mechanics: "**Sanity Meter:**\nThe closer you are to the Void, the more your Sanity drains. At 0 Sanity, you become Mind Controlled. Players must stand in 'Light Wells' spawned by Healers to restore Sanity."
        },
        {
            name: 'The Void Hold',
            type: '5-Man Dungeon',
            image: 'https://i.imgur.com/ls3OLJ6.png',
            lore: "**The Prison of Worlds**\nBelow the Citadel lies the Void Hold, a prison where Dimensius keeps the souls of conquered worlds. The Protectorate needs you to break in and free the 'Astral Key' needed to breach the Citadel's main gate.",
            geography: "**The Lay of the Land:**\nA 3-Wing Dungeon (like Hellfire Citadel). Wing 1: 'The Staging Grounds' (Military Base). Wing 2: 'The Entropy Chambers' (Laboratories). Wing 3: 'The Dark Sanctum' (Religious Center).",
            philosophy: {
                tbc: "**Dungeon Fatigue:**\nBy Tier 6, players were tired of 5-mans.",
                plus: "**The Mega-Dungeon:**\nThis is a challenging 5-man designed for T6 geared players. It drops 'Badge of the Void' which can be exchanged for T6.5 equivalent belts and bracers."
            },
            bosses: [
                "**Commander Zaxus (Wing 1):** Leader of the traitor army. He commands legions of Ethereal infantry. It is a 'Gauntlet' boss—endless waves until he is engaged.",
                "**Professor Void-Scribe (Wing 2):** A mad scientist experimenting on captured Naaru. He releases 'Failed Experiments' that have random abilities every pull.",
                "**High Priestess Xylonia (Wing 3):** She sacrifices captives to fuel the Void. Players must heal the captives to full to deny her power."
            ],
            mechanics: "**The Gauntlet:**\nThe dungeon has no trash packs in the traditional sense. It is one continuous event. You move from room to room, locking doors behind you to stop the infinite spawns."
        }
    ],
    tuning_zone: [
        {
            name: 'Heroic+ Dungeons',
            type: 'System Overhaul',
            tier: 0,
            image: "https://i.imgur.com/yKumLg8.png",
            lore: "**The TBC+ Heroic Dungeon Overhaul** \nThe goal here is to modernize the experience: removing \"toxic\" difficulty (unfair one-shots, tedious trash) while injecting \"engaging\" difficulty (mechanics, routing).",
            heroicPlusData: {
                overview: {
                    rationale: "Every time a new tier of raiding is released, you have the option to bump up the difficulty, increasing iLvl of item drops, Badges of Justice, and other cosmetic rewards/mounts etc."
                },
                hubs: [
                    {
                        name: "Hellfire Citadel",
                        dungeons: [
                            {
                                name: "Hellfire Ramparts",
                                flaws: [
                                    { title: "1. Flaw: The \"Loot Pinata\" Status", issue: "It was too easy and short, offering \"free\" badges with zero challenge.", fix: "**Vazruden the Herald** now dismounts at 50% and fights alongside his dragon, requiring the tank to manage two heavy hitters simultaneously." },
                                    { title: "2. Flaw: Boring Trash", issue: "The Orcs just hit hard. No mechanics.", fix: "**Bleeding Hollow Archers** now use \"Suppressing Fire,\" creating zones of denial that slow and damage players, forcing the tank to move the pack constantly." },
                                    { title: "3. Flaw: Anti-Climactic End", issue: "The chest at the end was unrewarding.", fix: "The final chest now guarantees a **\"Primal Nether\"** drop on Heroic, making it a viable daily farm for crafters." }
                                ]
                            },
                            {
                                name: "The Blood Furnace",
                                flaws: [
                                    { title: "1. Flaw: The Stealth Detection Spam", issue: "Almost every mob saw through stealth, ruining Rogue/Druid utility.", fix: "**\"True Sight\"** is removed from 50% of the mobs. Instead, specific \"Watchman\" mobs patrol. You can sap/distract them if you are skilled." },
                                    { title: "2. Flaw: The Second Boss Gauntlet", issue: "A wipe meant restarting the entire gauntlet.", fix: "**Checkpoints.** Killing a wave \"locks\" it. If you wipe on Wave 4, you restart at Wave 4." },
                                    { title: "3. Flaw: Broggok (The Eye Boss)", issue: "He was a poison cleanse check with zero movement.", fix: "Broggok now spawns **\"Poison Clouds\"** that drift around the room. The tank must kite him in a circle pattern to keep the melee safe." }
                                ]
                            },
                            {
                                name: "The Shattered Halls",
                                flaws: [
                                    { title: "1. Flaw: The \"Legionnaire\" 360 Cleaves", issue: "The trash would one-shot melee DPS instantly with no telegraph.", fix: "**\"Whirlwind\"** now has a 1.5s cast time and a red ground indicator. It hits harder but is avoidable." },
                                    { title: "2. Flaw: The Ooze Tunnel", issue: "A pointless slow-down that just annoyed everyone.", fix: "The Oozes now drop **\"Volatile Slime\"** buffs that increase player damage by 10% (stacking), encouraging you to speed-run the tunnel rather than crawl." },
                                    { title: "3. Flaw: Grand Warlock Nethekurse", issue: "A \"target dummy\" fight once the spin phase ended.", fix: "He now casts **\"Void Zone\"** under random players during the spin phase, forcing the raid to dance while avoiding the boss." }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Coilfang Reservoir",
                        dungeons: [
                            {
                                name: "The Slave Pens",
                                flaws: [
                                    { title: "1. Flaw: Skippable Content", issue: "You could skip 80% of the trash and 1 boss.", fix: "**\"Slave Shackles.\"** You must destroy 3 \"Slave Cages\" (guarded by trash packs) to lower the bridge to Quagmirran." },
                                    { title: "2. Flaw: Quagmirran's RNG", issue: "His poison volley could instantly kill a healer if it crit.", fix: "The Poison Volley is now a DoT, not direct damage. It allows reaction time for dispels/healing." },
                                    { title: "3. Flaw: Mennu the Betrayer", issue: "His totems were too weak to matter.", fix: "His **\"Nova Totem\"** is now indestructible and pulses raid-wide damage. The tank must drag Mennu away from it (40 yards) to deactivate it." }
                                ]
                            },
                            {
                                name: "The Underbog",
                                flaws: [
                                    { title: "1. Flaw: The Bog Giants", issue: "The trash hit harder than raid bosses.", fix: "Reduced melee damage by 30%, but gave them **\"Fungal Growth,\"** a debuff that reduces tank healing received. It emphasizes dispel speed over raw mitigation." },
                                    { title: "2. Flaw: The \"Lost\" Layout", issue: "Players constantly got lost or fell off ledges.", fix: "Added bioluminescent **\"Spore Trails\"** on the ground guiding the main path." },
                                    { title: "3. Flaw: The Black Stalker", issue: "Just a \"spread out\" fight.", fix: "She now pulls all players to her before casting **\"Static Charge,\"** forcing a frantic \"run away\" moment." }
                                ]
                            },
                            {
                                name: "The Steamvault",
                                flaws: [
                                    { title: "1. Flaw: Trash Density", issue: "It took forever to clear the main rooms.", fix: "Reduced pack size from 5 to 3. Each mob is stronger (Elite+), but AoE is less mandatory." },
                                    { title: "2. Flaw: Warlord Kalithresh", issue: "His \"Tank\" ability was just a buff he cast on himself.", fix: "The **\"Naga Distillers\"** are now active participants. Players can click the distillation vats to \"Overload\" them, stunning the boss but spawning adds." },
                                    { title: "3. Flaw: Hydromancer Thespia", issue: "Her lightning cloud was barely visible.", fix: "Updated visual effects. The cloud is now a distinct, high-contrast vortex." }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Auchindoun",
                        dungeons: [
                            {
                                name: "Mana-Tombs",
                                flaws: [
                                    { title: "1. Flaw: Spell Reflection", issue: "Every Ethereal reflected spells, making it miserable for Mages/Locks.", fix: "**\"Spell Shield\"** is now a purg-able buff, not a permanent aura. Mages/Shamans/Priests can strip it." },
                                    { title: "2. Flaw: Pandemonius", issue: "The \"Dark Shell\" killed you if you had a DoT on him.", fix: "Reflect damage only applies to *direct* attacks. DoTs no longer trigger the reflection." },
                                    { title: "3. Flaw: Yor (Secret Boss)", issue: "No one had the key, so he was dead content.", fix: "The key is removed. A simple puzzle (lighting 3 braziers in the dungeon) summons him." }
                                ]
                            },
                            {
                                name: "Auchenai Crypts",
                                flaws: [
                                    { title: "1. Flaw: The Bridge of Souls", issue: "The skeletons respawned infinitely and instantly.", fix: "Killing the **\"Necromancers\"** at the end of the bridge permanently stops the spawns." },
                                    { title: "2. Flaw: Shirrak the Dead Watcher", issue: "The \"slow cast\" aura made the fight unplayable for casters.", fix: "The aura now increases cast time but *also* increases spell damage by 50%. It becomes a risk/reward mechanic (\"Turret Mode\")." },
                                    { title: "3. Flaw: Exarch Maladaar", issue: "The fight dragged on way too long with the Avatar summon.", fix: "Maladaar and the Avatar share a health pool. Cleaving them both speeds up the kill." }
                                ]
                            },
                            {
                                name: "Sethekk Halls",
                                flaws: [
                                    { title: "1. Flaw: Time-Lost Controllers", issue: "Their Charm totem was instant and often caused wipes by MCing the healer.", fix: "The Totem now has 5 Health (die in 1 hit) but must be killed within 3 seconds." },
                                    { title: "2. Flaw: Anzu Summon", issue: "Only Druids with Epic Flight Form quest could summon him.", fix: "**\"Feather of Anzu\"** drops from the final boss. Once looted, anyone can interact with the moonstone to summon him in future runs." },
                                    { title: "3. Flaw: Darkweaver Syth", issue: "The elementals he summoned were ignored.", fix: "The elementals now heal Syth if they reach him. They must be snared/killed." }
                                ]
                            },
                            {
                                name: "Shadow Labyrinth",
                                flaws: [
                                    { title: "1. Flaw: Murmur's Sonic Boom", issue: "Lag or slow movement meant instant death.", fix: "The cast time is increased by 1.5 seconds. The safe zone is clearly marked on the floor." },
                                    { title: "2. Flaw: Blackheart the Inciter", issue: "The MC mechanic was funny but often reset the boss if the tank ran out of the room.", fix: "Invisible walls block the exits during the encounter. You cannot run out and reset him." },
                                    { title: "3. Flaw: Fel Overseers", issue: "They feared constantly and hit like trucks.", fix: "Removed the Fear. Gave them **\"Fel Cleave\"** (frontal cone)." }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Tempest Keep",
                        dungeons: [
                            {
                                name: "The Botanica",
                                flaws: [
                                    { title: "1. Flaw: Trash Pulls", issue: "Some packs had 6-7 elite mobs.", fix: "**\"Symbiosis.\"** Mobs are linked. Killing the \"Pruning Keeper\" (leader) reduces the health of the plants by 50%." },
                                    { title: "2. Flaw: Commander Sarannis", issue: "The infinite reinforcement adds were tedious.", fix: "She has a limited number of reserves. Once 3 waves are dead, she enrages and fights alone." },
                                    { title: "3. Flaw: High Botanist Freywinn", issue: "The tree form healing was frustrating if you lacked interrupts.", fix: "He now plants a **\"Tree of Life\"** sapling. If you kill the sapling, the boss takes 20% damage." }
                                ]
                            },
                            {
                                name: "The Mechanar",
                                flaws: [
                                    { title: "1. Flaw: \"Welfare Badges\"", issue: "It was too easy.", fix: "**Gatewatchers** now have unique mini-boss abilities (Fire, Frost, Shadow) and drop a \"Key Fragment.\" You need all fragments to open the elevator." },
                                    { title: "2. Flaw: Pathaleon the Calculator", issue: "His Arcane Explosion was just a gear check.", fix: "He summons **\"Mana Orbs\"** that float toward him. Players must intercept them (taking light damage) to prevent him from gaining a \"Supercharge\" stack." },
                                    { title: "3. Flaw: Nethermancer Sepethrea", issue: "The kiting dragons were buggy.", fix: "The Dragons are now fixated on the *furthest* player, allowing for controlled kiting rather than random chaos." }
                                ]
                            },
                            {
                                name: "The Arcatraz",
                                flaws: [
                                    { title: "1. Flaw: The Length", issue: "It was the \"Job Killer.\"", fix: "**Teleporters.** After killing the first boss, a teleporter activates to the second floor." },
                                    { title: "2. Flaw: The Protean Spawn", issue: "The invisible mobs that stunned you were universally hated.", fix: "They are now partially visible (shimmering) and have 50% less HP." },
                                    { title: "3. Flaw: Dalliah the Doomsayer", issue: "Her \"Heal on Debuff\" mechanic punished healers for... healing.", fix: "The debuff (\"Gift of the Doomsayer\") now turns healing into a shield on the target, rather than healing the boss." }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Caverns of Time",
                        dungeons: [
                            {
                                name: "Escape from Durnholde",
                                flaws: [
                                    { title: "1. Flaw: Thrall's AI", issue: "He walked slow, pulled extra trash, and had no survival instinct.", fix: "**\"Warchief's Sprint.\"** Thrall mounts a horse. He moves at 100% speed and only stops at mandatory scripted events." },
                                    { title: "2. Flaw: Travel Time", issue: "Flying to the start took 5 minutes of unskippable dialogue.", fix: "A \"Bronze Dragonflight Steward\" offers a **\"Skip to the Action\"** gossip option, teleporting the group to the bombs." },
                                    { title: "3. Flaw: Epoch Hunter", issue: "Just a generic dragon fight.", fix: "He now uses **\"Time Lapse,\"** rewinding players' positions to where they were 5 seconds ago. You must constantly move to ensure your \"past self\" wasn't standing in fire." }
                                ]
                            },
                            {
                                name: "The Black Morass",
                                flaws: [
                                    { title: "1. Flaw: The \"Wipe Reset\"", issue: "Wiping on Wave 17 meant doing Waves 1-17 again.", fix: "**Checkpoints.** Boss kills save your wave progress. Wiping on Aeonus restarts you at Wave 13." },
                                    { title: "2. Flaw: Boredom", issue: "It was just trash waves in a swamp.", fix: "**\"Infinite Saboteurs\"** spawn at the portals. They channel onto the shield. Killing them drops \"Chronobacons\" that buff the party's Haste." },
                                    { title: "3. Flaw: Aeonus", issue: "His \"Time Stop\" was just a stun.", fix: "**\"Time Stop\"** freezes projectiles and spells in mid-air. When it ends, everything lands at once. Healers must pre-HoT the tank before the freeze." }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Magister's Terrace",
                        dungeons: [
                            {
                                name: "Magister's Terrace",
                                flaws: [
                                    { title: "1. Flaw: Kael'thas's Trash", issue: "The packs before the boss hit harder than the boss.", fix: "Reduced the damage of the **\"Sunblade Mages.\"** Added a line of sight pillar in the hallway to allow for cleaner pulls." },
                                    { title: "2. Flaw: Unskippable RP", issue: "Kael'thas's speech... every... single... time.", fix: "If you have the achievement for killing him, the RP is instant." },
                                    { title: "3. Flaw: Priestess Delrissa", issue: "The fight was pure RNG chaos (PvP style).", fix: "The adds are now susceptible to all forms of CC (Polymorph, Fear, Stun) with no diminishing returns, rewarding coordination over zerg tactics." }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: 'Karazhan: Timeless Masterpiece',
            type: '10-Man Raid Refresh',
            tier: 4,
            image: "https://i.imgur.com/VAfN8GZ.jpeg",
            lore: "**The Tower Reopened** \nKarazhan's haunted elegance—curtain halls, spectral operas, dragon duels—cements it as WoW's pinnacle raid. Now enhanced with a Heroic Encore and the long-awaited Forgotten Crypts.",
            karaData: {
                title: "Karazhan Redesign: Timeless Masterpiece",
                vision: "Gothic opulence amplified—candlelit chandeliers flicker with ghostly winds. Interactive portraits whisper hints, dynamic storms rage outside. Audio: Echoing piano, phantom footsteps.",
                tabs: {
                    normal: { title: "Normal: Polished Perfection", icon: <Sword className="w-4 h-4" /> },
                    heroic: { title: "Heroic Encore", icon: <Crown className="w-4 h-4" /> },
                    crypts: { title: "The Forgotten Crypts", icon: <Skull className="w-4 h-4" /> }
                },
                normal: {
                    desc: "Small, surgical polishes to flow and visuals. The classic 10-man experience, refined.",
                    grid: [
                        { element: "Attumen/Shade", pain: "Faster mount swaps (dodge shadows via spectral reins); VFX: Horse ghosts phase through players harmlessly.", design: "Smoother dance; VFX: Horse ghosts phase through players harmlessly.", boost: "Spectral spectral reins mechanic." },
                        { element: "Moroes", pain: "Garrote DoT telegraph (shadow pools); 1 fewer guest.", design: "Less ambush RNG; guests 'haunt' arena edges.", boost: "Dinner party lore." },
                        { element: "Maiden", pain: "Holy Fire cones predictable; add 'repel' knockback.", design: "Fairer spread; visual: Repelled players smash stained-glass windows.", boost: "Glass shatter VFX." },
                        { element: "Opera", pain: "20% shorter events; new 'Romulo & Julianne' variant.", design: "Replay pop; randomized curtains for guild memes.", boost: "New 'Duel' ending." },
                        { element: "Curator", pain: "Evocation interrupt windows glow; spheres auto-evade.", design: "Less frantic; spheres orbit like arcane fireflies.", boost: "Arcane visual clarity." },
                        { element: "Chess", pain: "Auto-piece heals on king capture; Medivh taunts.", design: "Fun > frustration; board cracks dynamically.", boost: "Medivh voice lines." },
                        { element: "Netherspite", pain: "Portal beams color-coded; 10s less banish.", design: "Class-flexible; portals spew Netherstorm wisps.", boost: "Beam visibility." },
                        { element: "Nightbane", pain: "Phase transitions smoother; ground vents for jumps.", design: "Iconic AoE fairer; VFX: Bone storms swirl like raven feathers.", boost: "Air phase improved." }
                    ]
                },
                heroic: {
                    desc: "Post-Tier 6 Challenge. Toughened mechanics and new rewards (T5.5).",
                    grid: [
                        { element: "All Bosses", pain: "Medivh's Curse: Random player 'possessed' (mirrors boss).", design: "Forces adaptation; trinket drops counter mechanic.", boost: "Curse overlay aura." },
                        { element: "Nightbane H", pain: "Adds: Bone wraiths (cleave stacks); Charred Earth lingers.", design: "Aerial mastery; Dragonbone trinket drops.", boost: "Skeletal dragon adds." },
                        { element: "Malchezaar H", pain: "Infernal adds empowered (phase 1); axe throws bounce.", design: "Chaos king; 2H Axe BiS for alts.", boost: "Infernal size increased." }
                    ]
                },
                crypts: {
                    desc: "New 5-Boss Sub-Zone. Vertical descent into the labyrinthine undercroft.",
                    grid: [
                        { element: "Wretched Attendant", pain: "Multi-arm ghoul; cleaves in dark.", design: "Torch dispels arms. Foreshadows: Moroes' 'forgotten help'.", boost: "Torch mechanic intro." },
                        { element: "Echo of Moroes", pain: "8 ghostly guests; garrotes chain via shadows.", design: "Dinner party gone wrong; VFX: Plates shatter into blades.", boost: "Feast mechanic." },
                        { element: "Felbound Warden", pain: "Patrols crypt; chains players to walls.", design: "Medivh's guards; chains swing as platforms.", boost: "Chain physics." },
                        { element: "Spectral Arcanist", pain: "Channels illusions (fake bosses); dispel with torch.", design: "Guardian experiments; bookshelves animate as adds.", boost: "Illusion shaders." },
                        { element: "Crypt Sovereign", pain: "Undead dragon skeleton; bone storms + darkness.", design: "Nightbane progenitor; post-kill: Cinematic reveals Medivh's pact.", boost: "Epic Mount reward." }
                    ]
                }
            }
        },
        {
            name: 'Gruul\'s Lair (Retuned)',
            type: '25-Man Raid (Tier 4)',
            tier: 4,
            image: 'https://i.imgur.com/c1wZFv2.jpeg',
            lore: "**Blade's Edge Mountains** \nGruul the Dragonkiller has united the ogre clans. He poses a threat to both the Horde and Alliance outposts. \n**Changes:** \nHigh King Maulgar is no longer a 'pull and pray' fight. The council has shared health but individual enrage timers.",
            gruulData: {
                overview: {
                    title: "The Dragonkiller's Throne",
                    rationale: "**Architect's Notes**\n\n**v2.4 (Live)**\n**Historical Context:**\nGruul's Lair was intended to be a quick 25-man raid (Tier 4), but it often felt like a glorified dungeon. It was mechanically shallow, visually repetitive (just a cave), and acted as a rigid \"gear check\" rather than a skill check.\n\n**The Vision for Plus:**\nWe are transforming this from a \"loot hallway\" into a dynamic gladiatorial gauntlet. The environment should feel dangerous, and the bosses must demand reactive gameplay, not just high DPS numbers."
                },
                flaws: [
                    {
                        title: "1. The Flaw: The \"Filler\" Trash",
                        issue: "The path to the bosses was populated by generic Ogres that were merely speed bumps. They offered no engagement, contributing heavily to the \"boring\" reputation of the raid.",
                        fix: "**The \"Gauntlet\" Design:** We are replacing the generic trash packs with **\"Champion\" Mobs**—essentially mini-bosses that act as gatekeepers.\n\n**Ogre Magi:** These mobs now cast **\"Arcane Shackles,\"** a stacking debuff that slows casting speed and movement. It requires an immediate dispel rotation, forcing Healers and Priests to coordinate or risk the tank becoming unhealable.\n\n**Ogre Lords:** These Brutes now use **\"Call to Arms,\"** summoning waves of non-elite Grotworms. Tanks must pick up these adds instantly while maintaining aggro on the Lord, testing the Off-Tank's ability to manage AOE threat."
                    },
                    {
                        title: "2. The Flaw: Maulgar's Static Positioning",
                        issue: "Historically, High King Maulgar was a \"pull and park\" fight. Once the tanks positioned the Council members in their corners, they never moved. The fight was static and predictable.",
                        fix: "**Dynamic Arenas:** Maulgar will now cast **\"Formation Shift\"** every 45 seconds.\n\n**The Mechanic:** The Council members will leap to new positions in the arena. The tanks must intercept them and reposition the raid immediately. For example, **Krosh Firehand** might teleport to the center, forcing the Mage Tank to blink in and shield the raid, while **Kiggler the Crazed** charges the healers, demanding a Hunter kite him away instantly."
                    },
                    {
                        title: "3. The Flaw: Lack of Tactical Priority (Maulgar)",
                        issue: "The \"Kill Order\" for Maulgar was set in stone (usually Blindeye -> Summoner -> Warlock -> King). There was no reason to ever switch targets, making the fight feel like a checklist.",
                        fix: "**The \"Favor of the King\":** Maulgar will randomly empower one of his living council members for 20 seconds.\n\n**The Mechanic:** The empowered member grows in size and deals 50% increased damage but takes 200% increased damage. The Raid Leader must call for a hard target switch to abuse this vulnerability, or the Tank will die to the increased damage. This breaks the static kill order."
                    },
                    {
                        title: "4. The Flaw: Gruul as a \"Single-Phase Sponge\"",
                        issue: "Gruul had only one phase: Grow and Shatter. From 100% to 0%, the fight never changed. This repetitiveness made the encounter feel like hitting a training dummy that occasionally knocked you back.",
                        fix: "**The \"Earth-Shaker\" Phase:** At 50% Health, Gruul enters Phase 2.\n\n**The Mechanic:** He slams the ground, permanently altering the terrain. He stops casting \"Growth\" for 30 seconds and instead channels **\"Tectonic Riff.\"** The raid must survive distinct waves of physical damage while dodging falling debris."
                    },
                    {
                        title: "5. The Flaw: No Ranged Interaction (Gruul)",
                        issue: "For Ranged DPS, the Gruul fight was purely \"stand still and shoot.\" Unless they were targeted by a cave-in, they had no mechanics to handle.",
                        fix: "**Crystal Spikes:** During Phase 2, Gruul summons **\"Gronn-Infused Spikes\"** from the ground.\n\n**The Mechanic:** These spikes pulse raid-wide nature damage. They are immune to melee damage (surrounded by a knockback aura). Ranged DPS must immediately switch targets and destroy the spikes to stop the damage. If a \"Shatter\" occurs while spikes are up, the spikes explode, wiping the raid."
                    }
                ]
            },
            philosophy: { tbc: "Gruul was a DPS dummy.", plus: "Gruul is now a physics-based encounter." },
            bosses: ["High King Maulgar (Council)", "Gruul the Dragonkiller"]
        },
        {
            name: 'Magtheridon\'s Lair (Retuned)',
            type: '25-Man Raid (Tier 4)',
            tier: 4,
            image: 'https://i.imgur.com/mxPRacy.jpeg', // Using Citadel generic
            lore: "**Hellfire Citadel** \nThe imprisonment of the Pit Lord Magtheridon. \n**Changes:** \nThe 'Clicking Cubes' mechanic is less punishing. Missed clicks deal raid damage instead of wiping instantly.",
            magData: {
                overview: {
                    title: "The Lord of Outland",
                    rationale: "**Architect's Notes**\n\n**v2.4 (Live)**\n**Historical Context:**\nMagtheridon was the \"Onyxia\" of TBC—a single-room raid boss meant to be a Tier 4 challenge. However, he is infamous for the \"Cube Clicking\" mechanic, which was fragile, frustrating, and prone to wipes caused by a single person's lag or distraction. The fight felt like a chore rather than an epic confrontation with a Pit Lord.\n\n**The Vision for Plus:**\nWe are redefining this encounter to emphasize the *containment* aspect. The raid isn't just killing him; they are desperately trying to keep him weakened while surviving his brute strength."
                },
                flaws: [
                    {
                        title: "1. The Flaw: The \"Click or Die\" Cubes",
                        issue: "The Manticron Cubes were a binary pass/fail mechanic. If one person missed a click, the entire raid wiped instantly to *Blast Nova*. It offered no recovery mechanism and put too much pressure on individual latency rather than raid coordination.",
                        fix: "**The \"Leaking Container\" System:** Clicking a Cube no longer just stops the Nova; it channels a beam that creates a **\"Containment Field\"** around the boss.\n\n**The Mechanic:** *Blast Nova* is now a continuous pulse that ramps up in damage over 10 seconds.\n\n**0 Cubes Active:** Raid wipes in 3 seconds.\n**3 Cubes Active:** Survivable with heavy healing cooldowns.\n**5 Cubes Active:** The Nova is fully suppressed, and Magtheridon takes 50% increased damage during the channel.\n\n**Result:** Missing a click is now a \"healing check\" or a \"DPS loss,\" not an instant wipe. It allows for heroic saves."
                    },
                    {
                        title: "2. The Flaw: The Static Channelers (Phase 1)",
                        issue: "Phase 1 was often harder than the boss itself, but it was boring. Five Hellfire Channelers stood still and cast Shadow Volley. It was a simple interrupt rotation that dragged on too long.",
                        fix: "**Distinct Personalities:** The 5 Channelers now have unique kits based on the Fel Orc classes:\n**The Warlock:** Summons Infernals that must be banished.\n**The Acolyte:** Heals the other channelers (Must be Mortal Struck).\n**The Executioner:** Melee cleaves and enrages (Kite required).\n\n**\"Soul Transfer\":** When a Channeler dies, their soul flows into Magtheridon, reducing the time until he breaks free by 10 seconds. This creates a \"soft enrage\" for Phase 1—kill them too slow, and you fight them *and* the boss; kill them too fast, and the boss activates before you are ready."
                    },
                    {
                        title: "3. The Flaw: Magtheridon as a Target Dummy",
                        issue: "Once Phase 1 ended, Magtheridon himself did very little. He had a Cleave and a Knockback (Quake). For a Pit Lord who once ruled Outland, he felt sluggish and weak.",
                        fix: "**Pit Lord Mastery:** Magtheridon now uses his glaive and bulk.\n\n**\"Fel Trample\":** He targets a random ranged player and charges across the room, leaving a trail of \"Liquid Hellfire.\" The raid must split and create a lane for him.\n\n**\"Glaive Sweep\":** A 360-degree cone attack. Players must crouch (using a new \"Duck\" emote or item interaction) or jump to avoid being decapitated (massive physical damage)."
                    },
                    {
                        title: "4. The Flaw: The Empty Room (No Trash)",
                        issue: "You walked in, killed 3 packs of mobs, and there was the boss. It lacked the buildup of a \"Lair.\" It felt like an instance portal led directly to a boss room.",
                        fix: "**The Prison Gauntlet:** The entrance hallway is extended. Players must fight through **\"The Warden's Wing.\"**\n\n**New Trash:** **Fel-Binder Sentinels**. These mobs carry the keys to the inner chamber. They have \"Containment Chains\" that shackle players together. If the shackled players move apart, the chain snaps and deals AOE damage. The raid must move in \"chain gangs\" to clear the trash."
                    },
                    {
                        title: "5. The Flaw: The Anti-Climactic Ending",
                        issue: "The fight got *easier* as it went on. Once the Channelers were dead and the rotation was set, the last 30% was a snooze. A raid boss should culminate in a frantic finish.",
                        fix: "**Phase 3: The Roof Collapses (30% HP):**\n\n**The Mechanic:** Magtheridon smashes the pillars holding the ceiling. The Manticron Cubes are destroyed.\n\n**The Burn:** You can no longer stop *Blast Nova*. However, the falling debris exposes the sky of Hellfire Peninsula, causing **\"Fel Rain\"** to damage both the raid *and* Magtheridon.\n\n**The Race:** The raid takes increasing environment damage, but Magtheridon takes 100% increased damage. It becomes a reckless, bloody DPS race to finish him before the room buries everyone."
                    }
                ]
            },
            philosophy: { tbc: "Cube clicking was annoying.", plus: "Focus is on managing the adds and the 'Quake' mechanic." },
            bosses: ["Magtheridon"]
        },
        {
            name: 'Serpentshrine Cavern (Retuned)',
            type: '25-Man Raid (Tier 5)',
            tier: 5,
            image: 'https://i.imgur.com/rVb2k8g.jpeg',
            lore: "**Coilfang Reservoir** \nLady Vashj's watery domain. \n**Changes:** \nThe elevator boss is removed. Trash mobs are reduced by 40%.",
            sscTkData: {
                title: "Serpentshrine Cavern: The Deep Rescue",
                vision: "Deep sea horror meets ecological rescue. The 'Drainage' narrative drives the progression.",
                tabs: {
                    summary: { title: "Executive Summary", icon: <BookOpen className="w-4 h-4" /> },
                    infrastructure: { title: "Infrastructure & Atmosphere", icon: <Layout className="w-4 h-4" /> },
                    encounters: { title: "Boss Mechanics", icon: <Skull className="w-4 h-4" /> }
                },
                summary: {
                    rationale: "The original SSC suffered from 'Plumbing Maintenance' vibes. It was a static sewer. We are transforming it into a 'Desperate Ecological Rescue'. The water level physically lowers as bosses die, stealing back the water Vashj took from Zangarmarsh.",
                    pop: "Fluidity and Clarity. No more resistance gating.",
                    issues: [
                        "Extreme Resistance Gating (Hydross).",
                        "The Elevator Boss killed more people than Vashj.",
                        "Visual monotony (Grey pipes, Grey water)."
                    ],
                    changes: [
                        { title: "The Drainage", desc: "Killing bosses lowers the water level, revealing Titan paths." },
                        { title: "Gravity Well", desc: "Replaces the Elevator. A safe, swirling vortex descent." }
                    ]
                },
                infrastructure: {
                    desc: "Overhauling the physical traversal and trash mechanics.",
                    grid: [
                        { element: "The Elevator", pain: "The #1 cause of death. Boring wait times.", design: "Replaced with the **'Gravity Well.'** Players jump into a vortex that applies feather-fall and lowers them. No waiting, no lag deaths.", boost: "Seamless entry." },
                        { element: "Navigation", pain: "Swimming with piranhas to reach platforms was tedious.", design: "**Titan Bridges.** As water lowers, hard-light bridges extend from the center hub to the boss wings.", boost: "Dry feet." },
                        { element: "Visuals", pain: "Everything looked like a sewer.", design: "**Distinct Wings:** Fungal Wing (Teal/Purple), Tech Wing (Bronze/Red), Deep Wing (Dark Blue). Players know where they are instantly.", boost: "Navigation clarity." },
                        { element: "Trash", pain: "Endless pulls with no context.", design: "**Pump Rooms.** Trash acts as 'Gauntlets' guarding the pumps. Clearing them triggers the water lowering event.", boost: "Objective-based clearing." }
                    ]
                },
                encounters: {
                    desc: "Removing gear-checks in favor of coordination checks.",
                    grid: [
                        { element: "Hydross", pain: "Pure Nature/Frost Resist gear check. Zero skill expression.", design: "**Attunement Beams.** Players intercept 'Purification Beams' to gain tanking immunity. Rotates through the raid. No gear needed.", boost: "Coordination > Grinding." },
                        { element: "The Lurker Below", pain: "Fishing for the boss was boring for 24 people.", design: "**Depth Charges.** Engineers/Raid must defend bombs placed on the platforms to force him up. **Submerge Phase:** He drags 3 players underwater to fight tentacles.", boost: "Active engagement." },
                        { element: "Leotheras", pain: "Required a Warlock Tank (High Fire Resist).", design: "**Spirit Realm Duel.** He banishes the Tank to a shadow realm. The Tank must 1v1 the 'Inner Demon' to hold threat. Skill-based tanking.", boost: "Class agnostic." },
                        { element: "Fathom-Lord", pain: "Generic Council fight.", design: "**Inheritance System.** When an advisor dies, Karathress equips their weapon and gains their abilities. The 'Kill Order' determines the final phase difficulty.", boost: "Strategic choice." },
                        { element: "Lady Vashj", pain: "Tainted Core macro clunkiness. Phase 3 visual mess.", design: "**Hot Potato Core:** Core auto-passes on death. **Phase 3:** Room turns Red (Emergency Power) for contrast. Electric fields shrink the room (Soft Enrage).", boost: "Visual clarity." }
                    ]
                }
            },
            philosophy: { tbc: "Plumbing Simulator.", plus: "Heist Movie: 'Drain the Lake'." },
            bosses: ["Hydross", "Lurker Below", "Leotheras", "Fathom-Lord", "Tidewalker", "Lady Vashj"]
        },
        {
            name: "The Siege of Quel'Danil",
            type: "25-Man Raid (Tier 5.5)",
            tier: 5.5,
            region: 'Eastern Kingdoms',
            image: "https://i.imgur.com/ErIqzbU.jpeg",
            lore: "The fragile peace of the Hinterlands has been shattered. The Sunfury forces of Kael'thas Sunstrider, utilizing dark technology from the Netherstorm, have launched a genocidal campaign against their High Elf kin at Quel'Danil Lodge.",
            geography: "**The Lay of the Land:**\nThe raid takes place at the High Elf lodge in the Hinterlands. It involves defending the walls, fighting through the burning courtyard, and ascending to the High Terrace.",
            quelDanilData: {
                title: "The Siege of Quel'Danil",
                overview: {
                    rationale: "Positioned as a Tier 5.5 raid, this content offers a narrative bridge between the Kael'thas storyline in Netherstorm and the Sunwell. It provides a non-Outland raid environment that refreshes the visual palette.",
                    issues: [
                        "Azeroth content was largely ignored in TBC.",
                        "The High Elf storyline lacked a climactic battle.",
                        "Mid-tier guilds needed a stepping stone to Hyjal."
                    ],
                    environment: [
                        { title: "The Outer Walls", desc: "Defend the ramparts against Fel-Reavers using Wildhammer artillery." },
                        { title: "The Inner Courtyard", desc: "A burning sanctuary where magic runs wild." },
                        { title: "The High Terrace", desc: "The rooftop command center overlooking the burning forest." }
                    ]
                },
                attunement: {
                    title: "The Wildhammer Vengeance",
                    steps: [
                        { name: "1. Intercepted Orders", desc: "Loot 'Sunfury Invasion Plans' from Void Reaver in Tempest Keep (25% Drop Rate)." },
                        { name: "2. The Warning", desc: "Deliver the plans to Gryphon Master Talonaxe in Aerie Peak." },
                        { name: "3. Counter-Measure", desc: "Collect 5 Primal Mana and 2 Khorium Bars to craft a 'Fel-Disruptor' to breach the siege shield." }
                    ]
                },
                phases: [
                    {
                        name: "Phase 1: The Outer Walls",
                        bosses: [
                            {
                                name: "The Fel-Siege Engines",
                                desc: "A defense encounter. Players must man Wildhammer Cannons to destroy the shielded Fel-Reavers before they breach the gate. Repair crews must keep the walls standing amidst bombardment."
                            }
                        ]
                    },
                    {
                        name: "Phase 2: The Inner Courtyard",
                        bosses: [
                            {
                                name: "Magistrix Lyandra",
                                desc: "The Arcane Corrupter. She is overloading the Great Runestone. Players must use Grounding Totems to siphon her excess energy, preventing a zone-wide explosion."
                            }
                        ]
                    },
                    {
                        name: "Phase 3: The Hall of Records",
                        bosses: [
                            {
                                name: "Ranger-Captain Lyra & Loros",
                                desc: "The Twin Vanguards. A Hunter/Paladin duo who share a health pool. If they stand within 40 yards, they gain 99% damage reduction. They must be tanked apart but killed simultaneously."
                            }
                        ]
                    },
                    {
                        name: "Phase 4: The High Terrace",
                        bosses: [
                            {
                                name: "Warlord Salaris",
                                desc: "The Hand of Kael'thas. Starts mounted on 'Gorefang' (Beast Master phase). Upon dismounting, he enters a dual-wielding Fury Warrior enrage. Pure physical brutality."
                            }
                        ]
                    }
                ],
                misc: {
                    loot: [
                        {
                            name: "Gorefang's Tusk",
                            slot: "One-Hand Dagger",
                            boss: "Warlord Salaris",
                            quality: "epic",
                            stats: ["+25 Agility", "+30 Stamina"],
                            effects: [
                                "Equip: Increases attack power by 50.",
                                "Equip: Your attacks ignore 120 of your opponent's armor.",
                                "Chance on Hit: Gores the target, causing them to bleed for 220 damage every 2 sec for 10 sec. This effect stacks up to 3 times."
                            ],
                            flavor: "\"Severed from the warlord's mount. It is jagged, yellowed, and still smells of Fel-feed.\""
                        },
                        {
                            name: "Aegis of the Twin Sentinels",
                            slot: "Shield",
                            boss: "Lyra & Loros",
                            quality: "epic",
                            stats: ["+45 Stamina"],
                            effects: [
                                "Equip: Increases defense rating by 25 (10.6 @ L70).",
                                "Equip: Increases shield block rating by 30 (3.8% @ L70).",
                                "Equip: When you block an attack, you have a 5% chance to reflect the next spell cast against you back at the caster."
                            ],
                            flavor: "\"Loros's shield was not just steel; it was a mirror for magic.\""
                        },
                        {
                            name: "Robes of the Corrupted Runestone",
                            slot: "Cloth Chest",
                            boss: "Magistrix Lyandra",
                            quality: "epic",
                            stats: ["+40 Intellect", "+40 Stamina", "+30 Spirit"],
                            sockets: ["Red Socket", "Red Socket", "Blue Socket"],
                            socketBonus: "+4 Spell Power",
                            effects: [
                                "Equip: Improves spell haste rating by 35 (2.23% @ L70).",
                                "Equip: Increases damage done by Fire and Arcane spells and effects by up to 72.",
                                "Set Bonus (2-Piece): Your Fire spells have a chance to grant \"Fel-Infusion,\" causing your next Arcane spell to be instant cast."
                            ],
                            flavor: "\"The fabric is scorched with green fire where the ley-lines were forcibly twisted.\""
                        },
                        {
                            name: "Wildhammer 'Diplomacy' Adjuster",
                            slot: "Gun",
                            boss: "The Fel-Siege Engines",
                            quality: "epic",
                            stats: ["+30 Agility", "+25 Stamina"],
                            effects: [
                                "Equip: Improves critical strike rating by 24 (1.09% @ L70).",
                                "Equip: Increases attack power by 48.",
                                "Equip: Your ranged critical strikes have a chance to daze the target for 2 sec."
                            ],
                            flavor: "\" 'Diplomacy' is etched into the barrel. 'Negotiator' is etched into the stock.\""
                        }
                    ]
                }
            },
            philosophy: {
                tbc: "**The 2007 Landscape:**\nThe Hinterlands was a leveling zone with no end-game relevance.",
                plus: "**The Vision for Plus:**\nWe bring the war home. Kael'thas isn't just staying in Outland; he is striking at his 'traitorous' kin."
            },
            bosses: [
                "**The Fel-Siege Engines:** Artillery Encounter.",
                "**Magistrix Lyandra:** Arcane/Fel caster.",
                "**Lyra & Loros:** Twin Bosses.",
                "**Warlord Salaris:** Final Boss."
            ]
        },

        {
            name: 'The Eye (Tempest Keep)',
            type: '25-Man Raid (Tier 5)',
            tier: 5,
            image: 'https://i.imgur.com/ofoMsTl.jpeg',
            lore: "**Netherstorm** \nKael'thas's fortress. \n**Changes:** \nKael'thas RP intro is skippable after the first kill.",
            sscTkData: {
                title: "Tempest Keep: The Eye",
                vision: "A technical marvel that failed as a gameplay space. It prioritized the 'cool factor' of a spaceship over raid readability.",
                tabs: {
                    summary: { title: "Executive Summary", icon: <BookOpen className="w-4 h-4" /> },
                    infrastructure: { title: "Infrastructure & Atmosphere", icon: <Layout className="w-4 h-4" /> },
                    encounters: { title: "Boss Mechanics", icon: <Skull className="w-4 h-4" /> }
                },
                summary: {
                    rationale: "Tempest Keep was a visual masterpiece—transparent textures, anti-gravity rooms, and a view of the Nether. But it failed as a playable space. The 'Spaceship' aesthetic clashed with gameplay readability, causing legitimate eye strain ('Purple Fatigue'). The layout, while circular, was effectively linear due to massive aggro radii and punishing respawn timers.",
                    pop: "We have kept the grandeur but removed the friction.",
                    issues: [
                        "The '3D' promise of the raid was a lie; it played on a 2D plane.",
                        "Trash density artificially extended the raid night by hours.",
                        "Mechanics like Al'ar's pathing were constantly fighting the pathing engine."
                    ],
                    changes: [
                        { title: "Teleport Network", desc: "A defeat of Al'ar now activates an internal teleporter, removing the 7-minute run-back." },
                        { title: "Visual Zoning", desc: "We broke the 'All Purple' aesthetic. Each wing now has distinct lighting temperatures (Warm Gold, Void Blue) to reduce eye fatigue." }
                    ]
                },
                infrastructure: {
                    desc: "Changes to the raid's physical design and pacing.",
                    grid: [
                        { element: "Trash Density", pain: "The trash wasn't just filler; it was a punitive time-sink. Wiping on Kael'thas meant a 20-minute reclear of respawns just to walk back.", design: "Hard-coded Links: Killing a wing boss (e.g., Al'ar) permanently despawns the associated trash packs in that wing. No more infinite respawns during progression.", boost: "Teleport NPC at entrance post-Al'ar." },
                        { element: "Visual Clarity", pain: "The 'Purple Fatigue' was real. Purple walls, purple floors, purple lightning, and purple-casting mobs made spotting ground effects impossible.", design: "Contrast Zoning: Al'ar's room now pushes warmer Golds/Oranges to contrast the boss. Matte floors replace the shiny specular surfaces.", boost: "Unique 'Throne Room' geometry." },
                        { element: "Layout & Travel", pain: "The run-back from the graveyard was egregious. A 7-minute walk creates 'AFK Downtime' that bleeds raid morale.", design: "Mounting Enabled: The outer ring is now flagged as 'Outdoors', increasing travel speed by 60%. Post-Clear teleporters link wings.", boost: "True 'Hub' functionality." },
                        { element: "The 'Spaceship'", pain: "Fighting a giant robot on a spaceship bridge felt jarring for a Warrior in plate armor. It broke the High Fantasy immersion.", design: "Re-contextualized as a 'Mana Fortress'. The skybox remains, but the architecture emphasizes magical containment/citadel vibes over Sci-Fi.", boost: "Immersion restoration." }
                    ]
                },
                encounters: {
                    desc: "Specific fixes to the boss fights to remove engine-fighting friction.",
                    grid: [
                        { element: "Al'ar (The Phoenix)", pain: "Al'ar's constant movement exposed the flaws in WoW's pathing engine. Tanks couldn't generate TPS because he was out of range during platform swaps.", design: "Force Grounding: Al'ar now lands on the mesh instead of hovering. Phase Shifts verify Tank Threat, granting a momentary TPS sticky buff.", boost: "Decoupled visual telegraphs (linger 1s)." },
                        { element: "Void Reaver", pain: "The 'Knock Away' threat drop turned this fight into an RNG ceiling. A string of Parries meant the DPS had to stop playing.", design: "Threat Lock: Knockback no longer reduces threat value; it merely pauses generation for 5s. Arcane Orbs now respect a 15-yard minimum range.", boost: "Melee viability restored." },
                        { element: "High Astromancer", pain: "Required crafting distinct Arcane Resist gear that was useless everywhere else. The 'Bomb' mechanic had 0.0s batching reaction time.", design: "Standardized Damage: The Bomb now deals % Health damage (ignoring Resist). It launches the player into the air, giving a clear visual cue.", boost: "Removed 'Idiot Check' friction." },
                        { element: "Kael'thas Sunstrider", pain: "Phase 3 (Advisors) was a mess of threat snaps. Healers would die instantly upon spawn. Legendary weapons broke UI layouts.", design: "Hard Threat Reset: Advisors spawn with 0 threat tables. Staggered Spawns (3s delay) allow tanks to pick them up. Legendaries are now clickable environment buffs.", boost: "Inventory management removed." }
                    ]
                }
            },
            philosophy: { tbc: "Kael'thas speech was 10 minutes long.", plus: "Respect the player's time." },
            bosses: ["Al'ar", "Void Reaver", "Solarian", "Kael'thas"]
        },
        {
            name: 'Mount Hyjal (Retuned)',
            type: '25-Man Raid (Tier 6)',
            tier: 6,
            image: 'https://i.imgur.com/2x7Vul3.jpeg', // Caverns of Time placeholder
            lore: "The Battle for Mount Hyjal. \n**Changes:** \nWaves are heavily reduced (from 8 to 4 per boss). Jaina/Thrall are much stronger and don't die easily.",
            hyjalData: {
                tabs: {
                    summary: { title: "Executive Summary", icon: <BookOpen className="w-4 h-4" /> },
                    systems: { title: "Systems & Architecture", icon: <Layout className="w-4 h-4" /> },
                    encounters: { title: "Boss Mechanics", icon: <Skull className="w-4 h-4" /> }
                },
                summary: {
                    rationale: "The original implementation was a scripting disaster. It relied on \"Wait_Timer\" loops rather than dynamic triggers, resulting in the notorious \"AFK Simulator\" where players spent more time waiting for waves to spawn than fighting. It failed to leverage the Warcraft III assets effectively, treating the greatest battle in Azeroth's history as a static tower defense minigame.",
                    pop: "We shift from \"Time-Gating\" to \"Event-Gating\".",
                    issues: [
                        "Relied on \"Wait_Timer\" loops rather than dynamic triggers.",
                        "Disjointed pockets broken by teleports destroyed narrative continuity.",
                        "Trash waves had no \"win condition\" other than endurance/mana management.",
                        "Bosses were largely tank-and-spank with simple checks."
                    ],
                    changes: [
                        { title: "Continuous Mesh", desc: "A winding trail physically connects the camps, utilizing zone streaming to solve memory issues and enable \"Traversal Events\" like rescuing defenders." },
                        { title: "Dynamic Biomes", desc: "Each boss sector acts as a visual biome (Ice, Fel, Magma) giving instant visual cues for resistance gear and consummables." },
                        { title: "Narrative Agency", desc: "Jaina and Thrall are active casters with signature spells (Frost Nova Barrier, Chain Lightning), not liability escorts." }
                    ]
                },
                systems: {
                    desc: "A complete structural overhaul of the pacing and trash mechanics to prioritize consequence over volume.",
                    grid: [
                        { element: "The Ascent", pain: "Disjointed teleports felt like loading into skirmish maps.", design: "A continuous winding trail physically connects the camps. We use aggressive \"View Distance\" fogging to manage framerates while allowing for Traversal Events between bases.", boost: "Feels like a true Siege." },
                        { element: "Trash System", pain: "8 waves per boss was an excessive endurance test.", design: "Reduced to 4 waves but introduced \"State-Machine\" logic. e.g. Failing to plant wards in Wave 1 increases add counts in Wave 2. Performance directly impacts Boss Difficulty.", boost: "Active Mitigation rewarded." },
                        { element: "Siege Engine", pain: "Escort AI is notoriously buggy and slow.", design: "The Siege Engine now moves on a Spline (invisible rail) rather than using \"Follow AI\". It moves at exactly 100% run speed so players don't have to stutter-step.", boost: "Bug-free escort experience." }
                    ]
                },
                encounters: {
                    desc: "Boss redesigns focus on specific mechanical checks that punish the \"Tunnel Vision\" meta.",
                    grid: [
                        { element: "Rage Winterchill", pain: "Tank-and-spank with Death & Decay.", design: "Added \"Frostbound Sentinel\" Shield Mechanic. Requires destroying shards to drop the shield. Forces Warlocks to swap targets, breaking their rotation macro.", boost: "Healer & Dispel checks." },
                        { element: "Anetheron", pain: "Generic Dreadlord.", design: "Added \"Corruption Bonds\" (share damage unless spread >15 yds) and \"Ethereal Nova\" requiring LoS behind newly added physical ruins/pillars.", boost: "Punishes Chain Heal stack meta." },
                        { element: "Kaz'rogal", pain: "Simple mana drain gear check.", design: "Added \"Molten Guillotine\" (Enrage). Requires destroying Cinder Shards to cancel. Creates a choice: Burn boss and risk enrage, or save Heroism for shards?", boost: "Tactical Burst Windows." },
                        { element: "Azgalor", pain: "Doom fire RNG.", design: "At 10% HP, \"Worldbreaker\" fills the arena with death zones. Tyrande creates \"Safe Platforms\", finally giving NPCs a purpose beyond auto-attacking.", boost: "Panic Phase execution." },
                        { element: "Archimonde", pain: "Falling damage and fire.", design: "New \"Drain Phase\": Attempts to drain Nordrassil spawning roots. Raid must split DPS between Boss and Roots. Runners collect \"Tyrande's Tears\" to buff the raid.", boost: "High-mobility roles matter." }
                    ]
                }
            },
            philosophy: { tbc: "WAVE... AFTER... WAVE.", plus: "A fast-paced war zone. NPCs actually help." },
            bosses: ["Rage Winterchill", "Anetheron", "Kaz'rogal", "Azgalor", "Archimonde"]
        },
        {
            name: 'Black Temple',
            type: '25-Man Raid (Tier 6)',
            tier: 6,
            image: 'https://i.imgur.com/MrFyysh.jpeg',
            lore: "Illidan's Fortress. \n**Changes:** \nThe 'Mother Shahraz' shadow resist check is removed. Entrance is now at the Main Gate (Siege Event).",
            blackTempleData: {
                title: "The Black Temple (Classic+)",
                overview: {
                    rationale: "The 'Sewer Entrance' killed the momentum before the first pull. The Black Temple should feel like a military siege, not a dungeon crawl. We have shifted the tone to mirror the Warcraft III fantasy: You are breaking in, not sneaking in.",
                    issues: [
                        "Entrance was a hole in the wall (Sewer) instead of the Main Gate.",
                        "Inventory friction (Naj'entus Spines, Shadow Res gear) broke the flow.",
                        "Illidan mechanical anti-climax (Maiev trap bugs, rigid tank movement)."
                    ],
                    environment: [
                        { title: "The Main Gates", desc: "The raid begins at the Supremus courtyard. Players defend a Fel Orc Siege Ram piloted by Akama's Deathsworn against waves of defenders." },
                        { title: "Visual Scale", desc: "Aligns with the cinematic trailer. A true assault on the Lord of Outland." }
                    ]
                },
                bosses: [
                    {
                        tier: "The Citadel",
                        bosses: [
                            { name: "High Warlord Naj'entus", desc: "The 'Spine' mechanic is no longer an inventory item. Targeted players get a 'Living Spine' debuff. Allies must pull it out (Interact Key), gaining a temporary weapon buff to shatter the boss's shield. Friction removed." },
                            { name: "Supremus", desc: "The gatekeeper. Now fights alongside the initial siege event." }
                        ]
                    },
                    {
                        tier: "The Halls of Anguish",
                        bosses: [
                            { name: "Shade of Akama", desc: "No longer a trash wave fight. The raid splits: Half enter the 'Spirit Realm' to damage the Shade, half defend Akama's body. At 20%, Akama breaks his chains and executes the Shade himself." },
                            { name: "Teron Gorefiend", desc: "The first true Death Knight. Mechanics modernized for clarity." },
                            { name: "Gurtogg Bloodboil", desc: "Relentless aggression. Focuses on healing throughput." },
                            { name: "Reliquary of Souls", desc: "Phase 2 'Reflection' replaced with 'Madness Gauge'. DPS generate Madness; capping causes MC. Players must use 'Soul Mirrors' to vent Madness, dealing burst damage to themselves. Agency restored." }
                        ]
                    },
                    {
                        tier: "The Summit",
                        bosses: [
                            { name: "Mother Shahraz", desc: "Shadow Resistance gear req REMOVED. Replaced with 'Shadow Links' (Positional checks). 'Saber Lash' targets nearest 3 players, allowing melee DPS to rotate defensive cooldowns to help soak." },
                            { name: "Illidari Council", desc: "The elite guard. Shared health pool mechanics tightened." },
                            { name: "Illidan Stormrage", desc: "Maiev is now a weapon, not a trap. Tanks drag Illidan to her for massive 'Crescent Steel' cleaves. Phase 4 Warlock tanks get a full 'Demon Form' ability bar (Leap, Volley). Narrative finale where raid pins him down." }
                        ]
                    }
                ],
                wings: [
                    { name: "The Main Gate", theme: "Siege Warfare", hazard: "Fel Cannons" },
                    { name: "Halls of Anguish", theme: "Interior Citadel", hazard: "Spirit Portals" },
                    { name: "Temple Summit", theme: "Stormswept Terrace", hazard: "Fel Lightning" }
                ],
                misc: {
                    npcs: [
                        { name: "Akama", role: "Your siege commander. He pilots the ram and executes his shade." },
                        { name: "Maiev Shadowsong", role: "Active combatant. Tanks use her positioning for DPS." }
                    ],
                    loot: [
                        { category: "Warglaives", desc: "Updated to scale with TBC+ stats." },
                        { category: "T6 Tokens", desc: "Standardized token drops." }
                    ]
                }
            },
            philosophy: { tbc: "Great raid, annoying friction.", plus: "Epic Siege. No gear checks, just skill checks." },
            bosses: ["Naj'entus", "Supremus", "Shade of Akama", "Teron Gorefiend", "Gurtogg", "Reliquary", "Shahraz", "Council", "Illidan"]
        },
        {
            name: "Zul'Aman (Reforged)",
            type: "10-MAN RAID (Tier 6.5)",
            tier: 6.5,
            image: "https://i.imgur.com/boyeUQN.jpeg",
            lore: "The Amani warlords have regrouped, empowering their Loa avatars with dark rituals. This is no longer a simple troll hunt; it is a surgical strike to sever the Amani's connection to the Sunwell's stolen power.",
            geography: "**Ghostlands:** \nThe ancient forest has grown darker. New pathways through the ruins allow for a more non-linear approach to the four animal avatars.",
            zulAmanData: {
                overview: {
                    rationale: "Zul'Aman is fondly remembered for the Bear, but mechanically it was a 'Catch-Up' raid released too late. We are repositioning it as **Tier 6.5 Content**. It is to Sunwell what Karazhan was to Gruul: a vital, challenging 10-man companion raid.",
                    context: [
                        { label: "Historical Context", desc: "Originally Tier 5.5 (Dead on Arrival). Split guilds and burned players out with trash." },
                        { label: "Plus Vision", desc: "Tier 6.5 difficulty. Drops ilvl 146 loot and required 'Sun-Touched' crafting mats." }
                    ]
                },
                flaws: [
                    {
                        title: "1. The Loot Trap",
                        issue: "Dropped nothing of value for T6 raiders. Felt like a chore.",
                        fix: "All loot bumped to **ilvl 146** (BT End-Boss level). Drops **[Primal Mojo]**, a BoP mat required to craft 'Sun-Touched' resistance gear for Sunwell."
                    },
                    {
                        title: "2. The Trash Slog",
                        issue: "The 'Gauntlet' was just high-HP sponges that slowed the pace.",
                        fix: "Reduced density by 40%. Added **'Guerilla Warfare'**: Stealth ambushers that reset on wipes. Trash is now a control mini-game, not an AoE fest."
                    },
                    {
                        title: "3. The Binary Timer",
                        issue: "Pass/Fail timer encouraged toxic 'gogogo' culture.",
                        fix: "Replaced with **'Favor of the Loa'** Gauge. Decreases on death/time. Increases on kills/objectives. High Favor unlocks the Bear + Tribute Chest. Low Favor still grants bosses."
                    },
                    {
                        title: "4. Trivial Bosses",
                        issue: "Akil'zon and Nalorakk were target-dummies.",
                        fix: "**Akil'zon:** 'Static Cling' forces spreading while Storm forces stacking. **Nalorakk:** 'Maul Defenseless' ignores Armor, requiring active mitigation CD usage."
                    },
                    {
                        title: "5. No Synergy",
                        issue: "10-man felt isolated from 25-man progression.",
                        fix: "**Attunement:** 'High Favor' run grants **[Sigil of the Amani]**. 5 Sigils are required to open the 'Amani Catacombs' shortcut in Sunwell Plateau."
                    }
                ],
                loot: [
                    {
                        name: "Blade of the Amani Empire",
                        slot: "Two-Hand",
                        type: "Sword",
                        ilvl: "146",
                        quality: "epic",
                        bindStatus: "Binds when picked up",
                        damage: "525 - 788",
                        speed: "3.60",
                        dps: "182.4",
                        stats: [
                            "+75 Strength",
                            "+110 Stamina"
                        ],
                        effects: [
                            "Equip: Improves critical strike rating by 50 (2.26% @ L70).",
                            "Equip: Increases attack power by 140.",
                            "Equip: Chance on melee hit to summon an Amani Berserker to fight for you for 15 sec."
                        ],
                        desc: "\"The Loa demand blood.\""
                    },
                    {
                        name: "Hex Shrunken Head (Ancient)",
                        slot: "Trinket",
                        ilvl: "146",
                        quality: "epic",
                        bindStatus: "Binds when picked up",
                        unique: "Equipped",
                        stats: [],
                        effects: [
                            "Equip: Increases damage and healing done by magical spells and effects by up to 84.",
                            "Use: Increases damage and healing done by magical spells and effects by 350 for 20 sec. (2 Min CD)"
                        ],
                        desc: "\"It whispers to you...\""
                    },
                    {
                        name: "Sun-Touched Bindings",
                        slot: "Wrists",
                        type: "Cloth",
                        ilvl: "146",
                        quality: "epic",
                        bindStatus: "Binds when equipped",
                        armor: "148",
                        stats: [
                            "+45 Stamina",
                            "+40 Intellect"
                        ],
                        sockets: ['Yellow Socket', 'Red Socket'],
                        socketBonus: '+4 Spell Power',
                        effects: [
                            "Equip: +45 Fire Resistance.",
                            "Equip: +45 Shadow Resistance.",
                            "Equip: Increases damage and healing done by magical spells and effects by up to 35."
                        ],
                        desc: "Essential for the Sunwell."
                    }
                ]
            }
        },
        {
            name: 'Sunwell Plateau',
            type: '25-Man Raid (Tier 6.5)',
            tier: 6.5,
            image: 'https://i.imgur.com/2FiV4uZ.jpeg', // Sunwell/Quel'Danas
            lore: "The Final Confrontation. \n**Changes:** \nSunwell Radiance is replaced by **Solar Flare** (Stacking Fire DoT). The 'Drum Meta' is dead. Mechanics that forced class stacking are removed. Sunwell is now about execution, not roster composition.",
            sunwellData: {
                title: "Sunwell Plateau",
                overview: {
                    rationale: "Sunwell was the best raid in TBC technically, but it suffered from 'Artificial Difficulty' (Sunwell Radiance) and 'Class Stacking' (Chain Heal / Destro Lock). We want to keep the challenge but open the roster.",
                    issues: [
                        "Sunwell Radiance (-20% Chance to Dodge) felt like a band-aid fix for tank scaling.",
                        "Leatherworking Drums were mandatory for every party member.",
                        "Recruiting Shaman just for Chain Heal was tedious."
                    ],
                    environment: [
                        { title: "The Holy Font", desc: "A pristine, high-elf sanctuary defiled by the Legion." },
                        { title: "Burning Skies", desc: "The skybox slowly turns from blue to fel-green as you progress." }
                    ]
                },
                bosses: [
                    {
                        tier: "The Plateau",
                        bosses: [
                            { name: "Kalecgos", desc: "No more RNG portals. 'Portal Rifts' manifest physically; players click to enter the Spectral Realm. This allows coordinated teams to send their best burst DPS inside exactly when needed." },
                            { name: "Brutallus", desc: "Burn damage is smoothed to prevent one-shot spikes, but increases Fire Damage Taken. 'Meteor Slash' now requires precise positioning rather than just healing through it. Taunts are guaranteed to hit." },
                            { name: "Felmyst", desc: "Visual Clarity update: 'Encapsulate' now has a bright target marker. 'Demonic Vapor' trails are high-contrast green flame with clear borders to prevent 'invisible clipping' deaths." }
                        ]
                    },
                    {
                        tier: "The Gauntlet",
                        bosses: [
                            { name: "Eredar Twins", desc: "Conflagration is no longer a disorient. It is a Root/Stun, allowing the tank to hold aggro while stunned. Shadow priests are no longer mandatory to soak (anyone can soak with a potion)." },
                            { name: "M'uru / Entropius", desc: "Aura of Concentration: Shadowsword adds drop zones that grant pushback resistance to casters standing in them. Void Spawn AoE reduced by 15% to make melee viable." }
                        ]
                    },
                    {
                        tier: "The Sunwell",
                        bosses: [
                            { name: "Kil'jaeden", desc: "Shield Orbs have normalized hitboxes (melee can hit them easily). Rotating Vulnerability: He gains +50% dmg from Spells or Physical on a timer. Dragonflight Breath now grants a massive Haste buff to the raid." }
                        ]
                    },
                ],
                wings: [
                    { name: "The Plateau", theme: "Elven Architecture", hazard: "Patrolling Robots" },
                    { name: "The Shrine", theme: "Interior Temple", hazard: "Magic Feedback" }
                ],
                misc: {
                    npcs: [
                        { name: "Kalecgos", role: "Aids you after his defeat." },
                        { name: "Prophet Velen", role: "Cleanses M'uru." }
                    ],
                    loot: [
                        { category: "Tier 6.5", desc: "Sunwell Tier pieces (Wrists, Boots, Belt)." },
                        { category: "Thori'dal", desc: "The Legendary Bow. Now creates its own magical ammo (no quiver needed)." }
                    ]
                }
            },
            mechanics: "**Core Mechanic: Solar Flare** \nThe hated 'Sunwell Radiance' (-20% Dodge) is removed. It is replaced by **Solar Flare**, a stacking environmental aura that deals Fire damage to the entire raid. \n\n**Impact:** \nThis acts as a 'soft enrage' on all trash and bosses. It rewards maximizing DPS uptime and efficient chain-healing. The faster you kill, the less damage you take.",
            philosophy: { tbc: "Class stacking required.", plus: "Execution > Composition. Bring the player, not the class." },
            bosses: ["Kalecgos", "Brutallus", "Felmyst", "Eredar Twins", "M'uru", "Kil'jaeden"]
        },

    ],
    // --- DEFENDERS (AZEROTH) ---
    hyjal: [
        {
            name: "The Barrow Deeps",
            type: "5-Man Dungeon",
            image: "https://i.imgur.com/1OTRoOa.jpeg",
            lore: "When Tyrande Whisperwind freed Illidan Stormrage, she slaughtered the Watchers guarding the Barrow Deeps. Now, without the Wardens to maintain the dampening fields, the ancient horrors locked away for ten thousand years have woken up.\n\nHigh Jailor Altharius, corrupted by the whispers of an Old God seeping up from the earth, has turned the prison into a gladiatorial fight club.",
            geography: "**The Lay of the Land:**\nThe dungeon is a spiraling descent into madness. The upper levels are typical Night Elf architecture—mossy stone and moonwells—but as you descend, the roots of the World Tree pierce the walls, dripping with corruption.",
            philosophy: {
                tbc: "**The 2007 Landscape:**\nHyjal was only a raid. The vast underground network of barrows seen in WC3 was never explorable.",
                plus: "**The Vision for Plus:**\nA 'Prison Break' in reverse—you are breaking IN to restore order."
            },
            bosses: [
                "**Avatar of Vengeance:** \nA manifestation of Maiev's lingering rage. It uses 'Fan of Knives' and 'Blink' to kite the party.",
                "**High Jailor Altharius:** \nThe corrupt warden. He shifts the gravity of the room, forcing players to fight on the ceiling."
            ]
        },
        {
            name: "Emerald Nightmare",
            type: "10-Man Raid (Tier 4)",
            tier: 4,
            image: "https://i.imgur.com/mroo7Hx.jpeg",
            lore: "While the druids of the Cenarion Circle focus on Outland, Xavius the Nightmare Lord has begun a subtle invasion of the World Tree's roots. This is not a full-scale war, but a surgical strike. Players must enter the Dream Portals scattered around Hyjal to cleanse the corruption.",
            geography: "**The Lay of the Land:**\nThe raid environment shifts seamlessly between the Waking World (burning, scarred Hyjal) and the Emerald Dream (psychedelic, twisted versions of the same location).",
            philosophy: {
                tbc: "**The 2007 Landscape:**\nThe Emerald Nightmare was the biggest 'missing' content of classic WoW.",
                plus: "**The Vision for Plus:**\nIt is the 'Karazhan' of the Defender path—a 10-man entry-level raid with heavy atmosphere."
            },
            bosses: [
                "**Nythendra:** A corrupted green dragon guarding the entrance.",
                "**Ursoc (The Corrupted):** The Bear God. A pure DPS check.",
                "**Xavius, the Nightmare Lord:** The final encounter. He attempts to put the entire raid to sleep permanently."
            ]
        }
    ],
    uldum: [
        {
            name: "Halls of Origination",
            type: "5-Man Dungeon",
            image: "https://i.imgur.com/Bhlb4vl.jpeg",
            lore: "The Halls contain the reformatting device capable of wiping all life from Azeroth. The Ethereum, led by Nexus-Prince Shaffar, have hacked the security systems. Players must navigate the 'Maker's Rise', an elevator system connecting different floors.",
            geography: "**The Lay of the Land:**\nA vertical dungeon. The main hub is a massive elevator. Players choose which floor to visit: The Vault of Lights, The Tomb of Earth, or The Seats of the Makers.",
            philosophy: {
                tbc: "**The 2007 Landscape:**\nUldum was a closed gate in Tanaris.",
                plus: "**The Vision for Plus:**\nWe open the gate. This dungeon matches the scale of Blackrock Depths but with Titan technology."
            },
            bosses: [
                "**Temple Guardian Anhuur:** Uses Light magic and shielding songs.",
                "**Rajh, Construct of the Sun:** Channeling the power of a solar flare."
            ]
        },
        {
            name: "The Lost City",
            type: "5-Man Dungeon",
            image: "https://i.imgur.com/SrvLDaA.jpeg",
            lore: "The Neferset tribe has sided with the Ethereum, believing the 'flesh curse' can be reversed by Titan tech. The Ramkahen tribe remains loyal but is under siege.",
            geography: "**The Lay of the Land:**\nAn outdoor urban warfare dungeon. It takes place in the streets of the capital. No loading screens between districts.",
            philosophy: {
                tbc: "**The 2007 Landscape:**\nOutdoor dungeons were rare.",
                plus: "**The Vision for Plus:**\nA fast-paced, high-density dungeon. It feels like a warzone, not a cave."
            },
            bosses: [
                "**General Husam:** The trap-master.",
                "**Siamat, Lord of South Wind:** The Djinn imprisoned in the city."
            ]
        }
    ],
    grimbatol: [
        {
            name: "Grim Batol",
            type: "MEGA-DUNGEON",
            image: "https://i.imgur.com/SzvCxKQ.jpeg",
            lore: "The dwarven architecture of Grim Batol has been perverted by Orcish spikes and chains. It is a factory of war. The Dragonmaw are breeding a new flight of dragons here, twisting the red flight with nether energies.",
            geography: "**The Lay of the Land:**\nA massive city-dungeon with 11 bosses. It is divided into three wings: The City Sector (Urban), The Breeding Grounds (Caves), and The Siege Workshop (Industrial).",
            grimBatolData: {
                title: "Grim Batol: The Dragonmaw Citadel",
                overview: {
                    rationale: "Grim Batol in TBC was an empty zone with a closed gate. We are opening it as a 'Blackrock Depths 2.0'—a massive, non-linear Mega-Dungeon that serves as the primary content hub for the '.5' patches.",
                    issues: [
                        "The zone was a tease in the original game.",
                        "No proper conclusion to the Dragonmaw storyline.",
                        "Lack of 'Dungeon Crawl' experiences in late TBC."
                    ],
                    environment: [
                        { title: "The City Sector", desc: "Claustrophobic urban combat in the corrupted dwarven streets." },
                        { title: "The Siege Workshop", desc: "A massive industrial foundry producing fel-iron war machines." },
                        { title: "The Breeding Grounds", desc: "Caverns filled with unstable nether-dragon eggs." }
                    ]
                },
                wings: [
                    { name: "Wing 1: City Sector", theme: "Urban Occupation", hazard: "Elite Patrols" },
                    { name: "Wing 2: Siege Workshop", theme: "Industrial Foundry", hazard: "Crushing Pistons" },
                    { name: "Wing 3: Breeding Grounds", theme: "Corrupted Nature", hazard: "Volatile Eggs" },
                    { name: "Wing 4: The Summit", theme: "Aerial Spire", hazard: "High Winds" }
                ],
                bosses: [
                    {
                        tier: "Wing 1: The City Sector",
                        bosses: [
                            { name: "General Umbriss", desc: "The commander of the ground forces. He utilizes 'Tactical Stances' (Phalanx, Blitz) to command his troops." },
                            { name: "High  Interrogator Gerosh", desc: "A warlock draining the secrets from captured Wildhammer Dwarves. Players must break 'Soul Cages' to save hostages." },
                            { name: "Gatekeeper Ironhand", desc: "A massive Orc warrior guarding the tram to the lower levels. Pure physical damage check." }
                        ]
                    },
                    {
                        tier: "Wing 2: The Siege Workshop",
                        bosses: [
                            { name: "Forgemaster Throngus", desc: "He wields three different weapons (Mace, Shield, Swords) that change the boss mechanics entirely." },
                            { name: "Chief Engineer Cogfizzle", desc: "A goblin defector piloting a prototype Shredder. The room is a conveyor belt of bombs." },
                            { name: "The Slag-Beast", desc: "A molten giant formed from the foundry's waste. Kiting him through cooling water creates vulnerable windows." }
                        ]
                    },
                    {
                        tier: "Wing 3: The Breeding Grounds",
                        bosses: [
                            { name: "Drahga Shadowburner", desc: "Cultist master summoning twilight drakes. He fights from atop the named drake 'Valiona' (leaving her to retreat to the raid)." },
                            { name: "Erudax, Duke of Below", desc: "A Faceless One summoned by the Old God influence deep in the earth. He shrinks the room with 'Shadow Gales'." },
                            { name: "Broodmother Xylonia", desc: "The corrupted matriarch of the nether-flight. She empowers her eggs; players must stomp them before they hatch." }
                        ]
                    },
                    {
                        tier: "The Summit (Finale)",
                        bosses: [
                            { name: "Warlord Zuluhed the Whacked", desc: "The Chieftain of the Dragonmaw. He wields the Demon Soul fragment, forcing players to use 'Willpower' to resist mind control." },
                            { name: "Kael'thas Sunstrider (Simulacrum)", desc: "A magical projection sent to negotiate. A bonus boss that hints at his future betrayal." }
                        ]
                    }
                ],
                misc: {
                    npcs: [
                        { name: "Kurdran Wildhammer", role: "Questgiver. He leads the gryphon riding assault." },
                        { name: "Alexstrasza", role: "Appears after Zuluhed is defeated to cleanse the eggs." }
                    ],
                    loot: [
                        { category: "Dungeon Set 3", desc: "High-quality blue sets designed for fresh 70s." },
                        { category: "Demon Soul Shard", desc: "Legendary trinket quest item." }
                    ]
                }
            },
            philosophy: {
                tbc: "**The 2007 Landscape:**\nGrim Batol was a tease.",
                plus: "**The Vision for Plus:**\nThe ultimate dungeon crawl. BRD 2.0. It is a 3-4 hour experience intended for dedicated groups."
            },
            bosses: [
                "**General Umbriss:** Controls the City Sector.",
                "**Erudax, Duke of Below:** A Faceless One summoned from the depths.",
                "**Zuluhed the Whacked:** The Warlord himself. He wields the Demon Soul fragment."
            ]
        }
    ],
    eastern: [
        {
            name: "The Blackrock Mega-Complex",
            type: "MEGA-DUNGEON",
            image: "https://i.imgur.com/8zyhfI6.jpeg",
            lore: "In TBC+, Blackrock Mountain is no longer just a container for separate instances. It is transformed into 'The Molten Span', a massive, contested Level 70 Elite subzone where the war between the Dark Iron Dwarves (Ragnaros) and the Dark Horde (Nefarian) has spilled out of the instances and into the mountain itself.",
            geography: "**The Molten Span:** \nPlayers act as elite saboteurs, navigating the open-world conflict to unlock and infiltrate the three fortified 'Wings' of the complex: Shadowforge City (BRD), The Garrison (LBRS), and The Dragonspire (UBRS).",
            blackrockData: {
                overview: {
                    rationale: "The Molten Span represents the ambitious realization of what Blackrock Mountain was always meant to be: a seamless, interconnected warzone. \n\nIn TBC+, we have shattered the instance portals. 'The Molten Span' is now a Level 70 Elite subzone that physically connects Shadowforge City, the Blackrock Orc Garrison, and the Spire. This is not just a lobby; it is a hostile, contested territory where the war between Ragnaros and Nefarian rages openly. Players must navigate this perilous vertical battlefield using grappling hooks and elevators to infiltrate the fortified wings of the complex.",
                    hub: [
                        { title: "The Staging Grounds", desc: "Thorium Brotherhood Hub. Questing and Repairs." },
                        { title: "The Great Chain", desc: "Active PvP Battleground. Use 'Grapple Guns' to traverse." },
                        { title: "The Iron Lift", desc: "A central Titan-forged elevator connecting all layers. Build it to unlock fast travel." }
                    ]
                },
                wings: [
                    {
                        name: "Wing A: Shadowforge City (BRD)",
                        format: "5-Man Heroic",
                        theme: "Industry & Heat",
                        objective: "Ignite the Black Anvil & Kill Emperor Thaurissan",
                        updates: [
                            "**The Detention Block:** Now a high-security prison. Release Orc prisoners to cause riots.",
                            "**The Shadowforge:** The only location to smelt Dark Iron and Sulfuron.",
                            "**MC Attunement:** Loot 'Core Fragment' from Thaurissan. Attune at the Lava Window."
                        ],
                        bosses: [
                            { name: "Emperor Dagran Thaurissan", desc: "Wields [Ironfoe]. Casts **'Avatar of Ragnaros'** at 50%, becoming an elemental requiring massive fire resistance to tank." }
                        ]
                    },
                    {
                        name: "Wing B: The Garrison (LBRS)",
                        format: "5-Man Heroic",
                        theme: "Military Logistics",
                        objective: "Cripple the Army & Repair the Lift",
                        updates: [
                            "**The Spider Web:** Destroying eggs here reduces whelps in UBRS.",
                            "**The War Room:** Wyrmthalak drops 'Gyro-Optic Gear' (Lift Key).",
                            "**Sabotage:** Poisoning Ogre food supplies weakens Wing C ogres."
                        ],
                        bosses: [
                            { name: "Overlord Wyrmthalak", desc: "Calls **'Reinforcements'** that must be CC'd. Uses **'Shout of Command'** to fear players into the spider pits if not interrupted." }
                        ]
                    },
                    {
                        name: "Wing C: The Dragonspire (UBRS)",
                        format: "10-Man Raid (Kara Diff)",
                        theme: "Flight & Command",
                        objective: "Slay General Drakkisath",
                        updates: [
                            "**The Hatchery:** Exploding Nether-Whelps.",
                            "**The Arena:** 'Gladiator' event for Pre-BiS Trinket.",
                            "**BWL Attunement:** 'Orb of Command' requires 'Brand of the General' from Drakkisath."
                        ],
                        bosses: [
                            { name: "General Drakkisath", desc: "Detailed tactical encounter. His **'Chromatic Guard'** are resistant to different magic schools. **'Conflagration'** now leaves permanent fire patches." }
                        ]
                    }
                ],
                attunement: {
                    legendaries: [
                        { name: "Sulfuras, Hand of Ragnaros", desc: "Reforge at Black Anvil during a 'Defend the Smith' wave event." },
                        { name: "Thunderfury, Blessed Blade", desc: "Reforge at Rend's Arena by absorbing Gyth's Lightning Breath." }
                    ]
                },
                challenge: {
                    title: "The Iron Sovereign",
                    mode: "Hardcore / Ironman",
                    rules: [
                        "The Gauntlet: Clear A -> B -> C in one 4-hour lockout.",
                        "No Death: One death resets the run.",
                        "No Lift: Must traverse physical connections."
                    ],
                    reward: "Title: 'The Iron Sovereign' & Cosmetic Blackrock Bulwark."
                },
                loot: [
                    {
                        name: "Ironfoe (Reforged)",
                        slot: "One-Hand Mace",
                        type: "Mace",
                        boss: "Emperor Thaurissan",
                        quality: "epic",
                        damage: "160 - 300",
                        speed: "2.60",
                        dps: "88.5",
                        stats: [
                            "+15 Strength",
                            "+15 Stamina"
                        ],
                        effects: [
                            "Equip: Your attacks ignore 125 of your opponent's armor.",
                            "Chance on Hit: Grants 2 extra attacks on your next swing."
                        ],
                        flavor: "\"The hammer speaks in dwarven, but the words are burning.\""
                    },
                    {
                        name: "Felstriker (Restored)",
                        slot: "One-Hand Dagger",
                        type: "Dagger",
                        boss: "Warchief Rend Blackhand",
                        quality: "epic",
                        damage: "110 - 210",
                        speed: "1.70",
                        dps: "94.1",
                        stats: [
                            "+15 Agility",
                            "+15 Stamina",
                            "+10 Intellect"
                        ],
                        effects: [
                            "Chance on Hit: Your next 3 attacks are guaranteed critical strikes."
                        ],
                        flavor: "\"The most coveted blade in history returns.\""
                    },
                    {
                        name: "Draconic Deflector",
                        slot: "Shield",
                        type: "Shield",
                        boss: "General Drakkisath",
                        quality: "epic",
                        armor: "3800",
                        block: "100",
                        stats: [
                            "+25 Strength",
                            "+40 Stamina"
                        ],
                        effects: [
                            "Equip: Increases fire resistance by 45.",
                            "Equip: Increases defense rating by 15 (6.35 @ L70).",
                            "Equip: Increases shield block rating by 15 (1.90% @ L70).",
                            "Equip: Blocking Dragon Breath grants 20 Rage."
                        ],
                        flavor: "\"Scale of a fallen consort.\""
                    },
                    {
                        name: "Hand of Justice",
                        slot: "Trinket",
                        boss: "Emperor Thaurissan",
                        quality: "epic",
                        stats: [],
                        effects: [
                            "Equip: Increases attack power by 54.",
                            "Equip: Improves hit rating by 22 (1.39% @ L70).",
                            "Equip: 2% Chance on hit to gain an extra attack."
                        ],
                        flavor: "\"Blind justice strikes twice.\""
                    },
                    {
                        name: "Briarwood Reed (Ancient)",
                        slot: "Trinket",
                        boss: "Jed Runewatcher (Rare)",
                        quality: "epic",
                        stats: [],
                        effects: [
                            "Equip: Increases damage and healing done by magical spells and effects by up to 52.",
                            "Use: Increases Spell Power by 125 for 15 sec. (1 Min 30 Sec Cooldown)."
                        ],
                        flavor: "\"Resonates with the twisted magic of the Dark Iron.\""
                    }
                ]

            }
        },

        {
            name: "Vermillion Redoubt",
            type: '10-Man Raid (Tier 4.5)',
            tier: 4.5,
            image: "https://i.imgur.com/ZOUb0tA.jpeg",
            lore: "While the dungeon of Grim Batol churns beneath the earth, the true threat dominates the sky. The Vermillion Redoubt is an aerial fortress where the most ancient and volatile dragons are broken.",
            geography: "**The Lay of the Land:**\nAn aerial raid. Players start on a faction gunship, breach the landing pads, and ascend the spire. Falling is fatal.",
            vermilionData: {
                title: "Vermillion Redoubt: The Sky Fortress",
                overview: {
                    rationale: "Tier 4 was too easy, and Tier 5 is a massive jump. We needed a bridge. Vermillion Redoubt is that bridge—a short, intense 4-boss raid tuned slightly above Karazhan but below SSC.",
                    issues: [
                        "Gap between Tier 4 and Tier 5 difficulty.",
                        "Lack of 'Vehicle' combat that actually felt good.",
                        "Dragonmaw storyline fizzled out after Netherwing Ledge."
                    ],
                    environment: [
                        { title: "The Aerial Breach", desc: "Start on a gunship. Dogfight against wyverns and board the fortress." },
                        { title: "The High Spire", desc: "Open-air platforms with no guard rails. Positioning is everything." }
                    ]
                },
                attunement: {
                    title: "The Skybreaker's Key",
                    steps: [
                        { name: "1. The Ground Assault", desc: "Defeat General Umbriss in Grim Batol (Megadungeon) to recover the 'Dragonmaw Codes'." },
                        { name: "2. Sabotage", desc: "Defeat Chief Engineer Cogfizzle in Grim Batol (Megadungeon) to loot the 'Gyro-Stabilizer'." },
                        { name: "3. Construction", desc: "Turn these in to your faction's Sky-Admiral to commission a 'Grappling Anchor' for the gunship." }
                    ]
                },
                bosses: [
                    {
                        name: "The Iron Matriarch (Siege)",
                        desc: "A vehicular combat encounter. Players man harpoons to snag drakes and launch boarding parties. 'Lootship' done right—failure to defend the deck results in a wipe.",
                        mechanics: [
                            "Harpoon Cannons: Use to drag Sky-Reaver Drakes to the deck.",
                            "Boarding Parties: Orcs repel down from overhead zeppelins.",
                            "Shield Generator: Protects the Matriarch. Must be disabled by boarding the enemy ship."
                        ]
                    },
                    {
                        name: "Valiona & Theralion",
                        desc: "The Twilight Twins. They share a health pool but swap between air and ground. Mechanics require splitting the raid to manage their bickering elements (Shadow vs Fire).",
                        mechanics: [
                            "Blackout: Healer check. Absorbs 10,000 healing, then explodes for remaining amount.",
                            "Twilight Zone: Valiona shifts half the raid into the shadow realm.",
                            "Engulfing Magic: You deal double damage/healing, but explode on allies."
                        ]
                    },
                    {
                        name: "Nekros Skullcrusher",
                        desc: "The Death-Warden. Wields the Demon Soul fragment. Players are Mind Controlled and must be 'broken' out by damage holding below 20% HP.",
                        mechanics: [
                            "Demon Soul Channel: Massive raid-wide shadow damage. Must be interrupted.",
                            "Mind Control: Turns 2 players hostile. DPS must burn them to 20% HP to break it.",
                            "Necrotic Strike: Tank healing reduction. Requires tank swap."
                        ]
                    },
                    {
                        name: "Sinestra (Heroic Only)",
                        desc: "The Prime Consort. Destroys the platform throughout the fight. Surviving requires perfect management of 'Twilight Cutters' (moving lasers).",
                        mechanics: [
                            "Twilight Cutters: Two orbs spawn and connect with a beam. They sweep the room.",
                            "Wrack: A DoT that jumps to 2 targets when dispelled (Exponential soft-enrage).",
                            "Essence of the Red: Buff from Caelestrasz granting infinite mana/rage for 30s."
                        ]
                    }
                ],
                loot: [
                    {
                        name: "Prosthetic of the Death-Warden",
                        slot: "Hands",
                        type: "Plate",
                        boss: "Nekros Skullcrusher",
                        quality: "epic",
                        armor: "1100",
                        stats: [
                            "+45 Strength",
                            "+60 Stamina"
                        ],
                        sockets: ["Meta", "Blue", "Blue"],
                        socketBonus: "+6 Stamina",
                        effects: [
                            "Equip: Increases shield block value by 45.",
                            "Use: Grip of the Skullcrusher. Stuns the target for 3 sec and deals 400 Physical damage. (2 Min Cooldown)."
                        ],
                        flavor: "\"The metal fingers are fused rigid. They still twitch with necrotic memory.\""
                    },
                    {
                        name: "Fragment of the Demon Soul",
                        slot: "Trinket",
                        boss: "Nekros Skullcrusher",
                        quality: "epic",
                        stats: [
                            "+45 Stamina"
                        ],
                        effects: [
                            "Equip: Improves spell critical strike rating by 42 (1.90% @ L70).",
                            "Use: Tap into the fragment, increasing Spell Damage by up to 280 for 15 sec. Consumes a portion of your soul (300 Shadow dmg to self). (1.5 Min CD)."
                        ],
                        flavor: "\"It whispers to you. It demands to be used, but it hates you for using it.\""
                    },
                    {
                        name: "Valiona's Blackout Drape",
                        slot: "Back",
                        boss: "Valiona & Theralion",
                        quality: "epic",
                        armor: "110",
                        stats: [
                            "+25 Agility",
                            "+30 Stamina"
                        ],
                        effects: [
                            "Equip: Improves hit rating by 20 (1.27% @ L70).",
                            "Equip: Attacks have a chance to shroud you in Twilight, reducing threat by 20% and increasing ArPen by 150 for 10 sec."
                        ],
                        flavor: "\"Woven from the shadows of the Twilight Realm, it seems to drink the light around it.\""
                    },
                    {
                        name: "Shard of Woe (Heroic)",
                        slot: "Trinket",
                        boss: "Sinestra (Heroic Only)",
                        quality: "epic",
                        stats: [
                            "+40 Intellect",
                            "+40 Spirit"
                        ],
                        effects: [
                            "Equip: Reduces the mana cost of your spells by 405.",
                            "Use: Increases your Haste rating by 500 for 10 seconds, but reduces your healing done by 50% for 5 seconds after the effect expires. \"The crash is inevitable.\""
                        ],
                        flavor: "\"A pure, crystallized tear of the Dragon Consort. It radiates overwhelming sorrow.\""
                    },
                    {
                        name: "Skybreaker's Pauldrons",
                        slot: "Shoulders",
                        type: "Plate",
                        boss: "The Iron Matriarch",
                        quality: "epic",
                        armor: "1250",
                        stats: [
                            "+45 Strength",
                            "+55 Stamina"
                        ],
                        sockets: ["Yellow", "Blue"],
                        socketBonus: "+4 Defense",
                        effects: [
                            "Equip: Increases defense rating by 25 (10.58 @ L70)."
                        ],
                        flavor: "\"Riveted with the scrap metal of downed alliance gryphons.\""
                    },
                    {
                        name: "Drape of the Twilight Breaker",
                        slot: "Back",
                        type: "Cloth",
                        boss: "Valiona & Theralion",
                        quality: "epic",
                        armor: "120",
                        stats: [
                            "+22 Stamina",
                            "+25 Intellect"
                        ],
                        effects: [
                            "Equip: Increases spell critical strike rating by 24.",
                            "Equip: Increases spell haste rating by 20."
                        ],
                        flavor: "\"It shimmers with the changing colors of the setting sun.\""
                    },
                    {
                        name: "Skullcrusher's Will",
                        slot: "Finger",
                        type: "Ring",
                        boss: "Nekros Skullcrusher",
                        quality: "epic",
                        stats: [
                            "+28 Agility",
                            "+30 Stamina"
                        ],
                        effects: [
                            "Equip: Increases attack power by 58.",
                            "Equip: Your attacks ignore 140 of your opponent's armor."
                        ],
                        flavor: "\"A simple band of iron, cold as the grave.\""
                    },
                    {
                        name: "Caelestrasz's Sacrifice",
                        slot: "Neck",
                        type: "Neck",
                        boss: "Sinestra",
                        quality: "epic",
                        stats: [
                            "+35 Intellect",
                            "+30 Spirit"
                        ],
                        effects: [
                            "Equip: Increases healing done by up to 75.",
                            "Equip: Chance on heal to restore 200 mana.",
                            "Use: Sacrifice 20% of your current health to instantly heal a target for that amount. (2 Min CD)."
                        ],
                        flavor: "\"The red dragon's life force still pulses faintly within.\""
                    }
                ]
            },
            philosophy: {
                tbc: "**The 2007 Landscape:**\nDragonmaw were just generic bad guys.",
                plus: "**The Vision for Plus:**\nWe give them a fleet. This is an aerial raid. It starts with a gunship battle."
            },
            bosses: [
                "**Valiona and Theralion:** The twin dragons.",
                "**Sinestra (Heroic Only):** Deathwing's prime consort.",
                "**Nekros Skullcrusher:** The final boss."
            ]
        }
    ],


    vanguard_systems_redux: [
        {
            name: 'Fel-Forged Vanguard',
            type: 'Expansion Systems',
            image: "https://placehold.co/600x400/9b2c2c/ffffff?text=Vanguard+Command",
            lore: "The Age of the Warband\nCommand your entire account as a single unit. The Vanguard system unifies your alts, reputation, and progression into a cohesive war effort.",
            vanguardData: {
                tabs: {
                    warband: { title: "The Vanguard", icon: <Users className="w-4 h-4" />, subtitle: "Account-Wide Command" },
                    vault: { title: "Consortium Vault", icon: <Grid className="w-4 h-4" />, subtitle: "Shared Logistics" },
                    renown: { title: "Renown & Influence", icon: <Star className="w-4 h-4" />, subtitle: "Faction Commendations" },
                    wings: { title: "Class Wings", icon: <Sword className="w-4 h-4" />, subtitle: "Mage Tower Challenges" },
                    paragon: { title: "Paragon Levels", icon: <Crown className="w-4 h-4" />, subtitle: "Post-Cap Progression" }
                },
                warband: {
                    title: "The Vanguard: Assemble Your Coalition",
                    desc: "The Alliance and Horde governments move too slowly. You have formed your own 'Vanguard'—a coalition of your most trusted champions (your alts) operating from a shared Forward Operating Base.",
                    sections: [
                        {
                            title: "Base Operations (Login Screen)",
                            features: [
                                { name: "Forward Operating Base", desc: "Your character select screen is now a physical encampment. See your characters interacting—Warriors sharpening blades, Mages reading, Rogues counting coin." },
                                { name: "Dynamic Atmosphere", desc: "The camp reflects real-time server weather (Day/Night cycle). Add a 'Music Scroll' (e.g., Karazhan Opera) to the Jukebox to set the mood." },
                                { name: "Camp Biomes", desc: "Unlock distinctive backdrops via gameplay: 'Karazhan Balcony' (Wizard), 'Sporeggar Glade' (Druidic), 'Netherwing Ledge' (Aerial)." },
                                { name: "Roster Management", desc: "Drag-and-drop your characters to organize who sits by the fire. Choose their 'Camp Outfit' (RP gear) separate from combat gear." }
                            ]
                        },
                        {
                            title: "Vanguard Perks",
                            features: [
                                { name: "The Mentor System", desc: "Level 70 characters grant a passive +5% XP buff to your characters below level 60 (Stacks up to 25%)." },
                                { name: "Vanguard Racials", desc: "Minor camp-wide bonuses based on roster diversity (e.g., Have a Gnome? -5% Engineering crafting time for everyone)." },
                                { name: "Mercenary Mode", desc: "Hire one of your own offline alts as a temporary 'Bodyguard' in the open world (1 hour duration, 24hr cooldown)." },
                                { name: "Map of the Pathfinder", desc: "A one-time purchase on your main that teaches an alt all learned flight paths instantly." }
                            ]
                        }
                    ]
                },
                vault: {
                    title: "The Consortium Vault",
                    desc: "Only the Consortium possesses the ethereal technology to transmit matter instantly across distances. They manage your shared 'Vanguard' assets... for a nominal fee.",
                    features: [
                        { name: "Matter Transfer (Bank)", desc: "A massive 100-slot shared bank tab. Deposit ore on your miner, withdraw it instantly on your blacksmith." },
                        { name: "Currency Exchange", desc: "Convert 'Badge of Justice' or 'Spirit Shards' into account-bound 'Caches' (at a small exchange loss) to gear up alts." },
                        { name: "Heirloom 'Hand-Me-Downs'", desc: "Box up your old T4 Raid gear into 'Faded' versions to send to leveling alts. Give your level 62 Warrior a dull Gorehowl." },
                        { name: "Profession Contracts", desc: "Post a 'Work Order'. Need 20 Elixirs? Request it from your Alchemist alt, who completes it 'offline' over 4 hours." }
                    ]
                },
                renown: {
                    title: "Diplomatic Influence",
                    desc: "Your heroic deeds are whispered across the land. A faction that trusts your General (Main) will extend that trust to your soldiers (Alts).",
                    features: [
                        { name: "Letters of Recommendation", desc: "Reached Exalted? Buy a 'Commendation' to instantly boost an alt to Revered. No need to regrind the same rep." },
                        { name: "The Keyring of the Vanguard", desc: "Attunements are now account-wide achievements. Unlock Karazhan on one, unlock it for all." },
                        { name: "Shared Tabards", desc: "Unlock the 'Vanguard Tabard', a customizable guild-style tabard that all your characters can wear regardless of guild." },
                        { name: "Guest NPCs", desc: "High renown causes faction NPCs (e.g., Watcher Jhang) to occasionally visit your Campfire login screen with gifts." }
                    ]
                },
                wings: {
                    title: "Class Wings (Mage Tower)",
                    desc: "Prove your individual skill in solo challenges designed specifically for your class spec. No gear scaling—skill only.",
                    features: [
                        { name: "The Challenges", desc: "Defeat Xylem (DPS), The God-Queen (Tank), or Lord Jaraxxus (Healer) in customized encounters." },
                        { name: "Artifact Appearances", desc: "Unlocks unique, high-definition weapon skins for your class." },
                        { name: "Class Sets", desc: "Earn the 'Recolor' of Tier 6 armor for transmog." }
                    ]
                },
                paragon: {
                    title: "Paragon Progression",
                    desc: "Level 70 is just the beginning. Excess XP fills your Paragon Bar to earn 'Motes of Light' for the Consortium.",
                    features: [
                        { name: "Cosmetic Prestige", desc: "Unlock 'Visual' enchants, mount colors, and titles (e.g., 'The Vanguard')." },
                        { name: "Quality of Life", desc: "Invest points into +Movement Speed (Max 10%), +Vendor Sell Prices, or +Crafting Speed." },
                        { name: "No Combat Power", desc: "Paragon levels provide ZERO combat stats in Raids or Arena. It is purely for efficiency and prestige." }
                    ]
                }
            }
        }
    ],
    oldworld_zone: [
        {
            name: 'Molten Core (Timelocked)',
            type: '10-Man Raid',
            tier: 4,
            image: 'https://i.imgur.com/uoHMFpl.jpeg',
            lore: "The Firelord Returns \nRagnaros has been summoned once more, but this time, his power is unchecked. Level 70 Tuned (Tier 4 Equivalent).",
            geography: "Loot Target: \nilvl 110 (Tier 4 Equivalent). \n**Tuning:** \nStrict 10-Man. Requires 2 Tanks, 2 Healers, 6 DPS. Fire Resistance is crucial (150+ unbuffed).",
            mechanics: "Core Mechanics: \nThis raid introduces the 'Heat Level' system. Taking fire damage stacks a debuff that increases damage taken. It resets only when out of combat. \n\nKey Shifts: \n- Curse of Agony (Lucifron): Now a raid-wide mechanic requiring Decurse priority. \n- Living Bomb (Geddon): Targets 2 players. 'Ignite Mana' burns mana + deals damage.",
            philosophy: {
                tbc: "In original TBC, Molten Core was a ghost town. It offered no relevant power progression for level 70 players.",
                plus: "We have reignited the blackened depths. By retuning the raid for a tight 10-man group and introducing TBC-era mechanics, Molten Core becomes a vital stepping stone for fresh level 70s."
            },
            mcData: {
                title: "Molten Core (Timelocked)",
                overview: {
                    rationale: "Molten Core is the foundational raid of WoW. We are preserving its iconic status while stripping away the '40-man zerging' that made it trivial. This 10-man version is a precise, tactical experience where individual responsibility is paramount.",
                    issues: [
                        "40-Man roster boss is dead.",
                        "Mechanics were trivialized by modern knowledge and addons.",
                        "Loot was irrelevant for TBC progression."
                    ],
                    environment: [
                        { title: "Loot Target", desc: "ilvl 110 (Tier 4 Equivalent)." },
                        { title: "Tuning", desc: "Strict 10-Man. Fire and Shadow resistance gear is highly recommended." },
                        { title: "Heat Level", desc: "New Mechanic: 'Heat' stacks on players taking fire damage. At 100 stacks, you combust." }
                    ]
                },
                attunement: {
                    title: "The Hydraxian Resurgence",
                    steps: [
                        { name: "1. The Duke's Summons", desc: "Speak to Duke Hydraxis in Azshara. He senses a disturbance in the Firelands." },
                        { name: "2. The Molten Fragment", desc: "Slay Lord Incendius in Blackrock Depths (Heroic) to recover the [Molten Fragment]." },
                        { name: "3. Douse the Flames", desc: "Use 'Hydraxian Water' to douse the Rune of Kress in the Burning Steppes (Open World Event)." }
                    ]
                },
                bosses: [
                    {
                        name: "Lucifron",
                        desc: "Curse of Doom is now instant death if not decursed in 10s. 'Dominate Mind' MCs a player, increasing their damage by 200% (must be CC'd, not killed)."
                    },
                    {
                        name: "Magmadar",
                        desc: "Enrage requires a Tranq Shot rotation (2 Hunters or Hunter/Rogue). Fire patches grow over time, acting as a soft enrage for positioning."
                    },
                    {
                        name: "Gehennas",
                        desc: "Rain of Fire applies a healing reduction debuff (Mortal Strike effect). Adds stun random targets; must be kited or stunned."
                    },
                    {
                        name: "Garr",
                        desc: "Firesworn adds explode for massive damage when killed. They must be killed one by one while the Off-Tank holds the rest. Garr gains speed/dmg for each dead add."
                    },
                    {
                        name: "Baron Geddon",
                        desc: "Living Bomb targets 2 players (must run out). 'Ignite Mana' burns 500 mana per tick and deals damage equal to mana burned. Healers must be dispelled instantly."
                    },
                    {
                        name: "Shazzrah",
                        desc: "Blinks and wipes threat instantly. Mages/Shamans must 'Counterspell/Shock' his Arcane Explosion or the raid wipes to massive AoE."
                    },
                    {
                        name: "Sulfuron Harbinger",
                        desc: "The Priest Fight. Flamewaker Healers cast 'Dark Mending' (Must be interrupted) and 'Shadow Word: Pain' (Must be dispelled). Sulfuron buffs them with 'Hand of Ragnaros'."
                    },
                    {
                        name: "Golemagg the Incinerator",
                        desc: "Magma Splash stacks armor reduction on tanks (Swap at 5). The Core Rager dogs re-ignite at full health if not killed simultaneously (within 5s)."
                    },
                    {
                        name: "Majordomo Executus",
                        desc: "The Council. 4 Healers, 4 Elites. Sheep/Banish rotation is mandatory. 'Magic Reflection' shield rotates; casters must stop DPS or kill themselves."
                    },
                    {
                        name: "Ragnaros",
                        desc: "The Firelord. Submerge Phase (3 min): 'Sons of Flame' rush the Sulfuron Hammer. If they reach it, they explode (Wipe). Knockback requires perfect positioning."
                    }
                ],
                loot: [
                    {
                        name: "Sulfuras, Hand of Ragnaros (Timelocked)",
                        slot: "Two-Hand Mace",
                        type: "Mace",
                        boss: "Ragnaros",
                        quality: "legendary",
                        damage: "305 - 460",
                        speed: "3.70",
                        dps: "103.4",
                        stats: [
                            "+35 Strength",
                            "+35 Stamina",
                            "+30 Fire Resistance"
                        ],
                        effects: [
                            "Equip: Increases your critical strike rating by 35 (1.58% @ L70).",
                            "Chance on Hit: Hurls a fireball for 273 to 333 Fire damage and an additional 75 Fire damage over 10 sec.",
                            "Equip: Deals 5 Fire damage to anyone who strikes you with a melee attack."
                        ],
                        flavor: "\"By fire be purged!\""
                    },
                    {
                        name: "Perdition's Blade (Timelocked)",
                        slot: "One-Hand Dagger",
                        type: "Dagger",
                        boss: "Ragnaros",
                        quality: "epic",
                        damage: "138 - 208",
                        speed: "1.80",
                        dps: "96.1",
                        stats: [
                            "+18 Agility",
                            "+15 Stamina"
                        ],
                        effects: [
                            "Equip: Increases attack power by 36.",
                            "Chance on Hit: Blasts a target for 48 to 76 Fire damage."
                        ],
                        flavor: "\"Forged in the heart of the Firelands.\""
                    },
                    {
                        name: "Cauterizing Band (Timelocked)",
                        slot: "Finger",
                        type: "Ring",
                        boss: "Majordomo Executus",
                        quality: "epic",
                        stats: [
                            "+18 Intellect",
                            "+15 Spirit"
                        ],
                        effects: [
                            "Equip: Increases healing done by up to 52.",
                            "Equip: Restores 6 mana per 5 sec."
                        ],
                        flavor: "\"The heat seals the wound.\""
                    },
                    {
                        name: "Striker's Mark (Timelocked)",
                        slot: "Ranged Bow",
                        type: "Bow",
                        boss: "Magmadar",
                        quality: "epic",
                        damage: "145 - 268",
                        speed: "2.80",
                        dps: "73.8",
                        stats: [
                            "+15 Agility",
                            "+12 Stamina"
                        ],
                        effects: [
                            "Equip: Increases attack power by 28.",
                            "Equip: Increases your hit rating by 14 (0.89% @ L70)."
                        ],
                        flavor: "\"Its aim is true, burning with ancient rage.\""
                    },
                    {
                        name: "Onslaught Girdle (Timelocked)",
                        slot: "Waist",
                        type: "Plate",
                        boss: "Ragnaros",
                        quality: "epic",
                        armor: "850",
                        stats: [
                            "+28 Strength",
                            "+25 Stamina"
                        ],
                        effects: [
                            "Equip: Increases your critical strike rating by 24 (1.09% @ L70).",
                            "Equip: Increases your hit rating by 15 (0.95% @ L70)."
                        ],
                        flavor: "\"The belt of a champion.\""
                    },
                    {
                        name: "Talisman of Ephemeral Power (Timelocked)",
                        slot: "Trinket",
                        boss: "Garr",
                        quality: "epic",
                        stats: [],
                        effects: [
                            "Use: Increases damage and healing done by magical spells and effects by up to 175 for 15 sec. (1 Min 30 Sec Cooldown)"
                        ],
                        flavor: "\"Fleeting, but devastating.\""
                    }
                ]
            },
        },
        {
            name: "Blackwing Lair (Timelocked)",
            type: "10-Man Raid (Tier 5)",
            tier: 5,
            image: "https://i.imgur.com/PrE1q0k.jpeg",
            lore: "**Nefarian's Experiments**\nLord Victor Nefarius has returned to his throne atop Blackrock Mountain. Not as a memory, but as a fully realized threat powered by the Infinite Dragonflight. Use the Brand of the Dark Horde to penetrate his Timelocked lair and stop his experiments before he creates a flight of Chromatic monstrosities.",
            geography: "**The Lay of the Land:**\nThe upper spire of Blackrock Mountain. A laboratory of horrors where science meets magic.",
            bwlData: {
                title: "Blackwing Lair (Timelocked)",
                overview: {
                    rationale: "Blackwing Lair is iconic, but 40-man raiding is dead. This Timelocked 10-man version emphasizes role responsibility over raw numbers. It is purely optional content for Tier 5 progression.",
                    issues: [
                        "Original suppression room was tedious.",
                        "Class calls were simplistic.",
                        "Trash density was too high."
                    ],
                    environment: [
                        { title: "Loot Target", desc: "ilvl 128-133 (Tier 5 Equivalent)." },
                        { title: "Tuning", desc: "Precision 10-Man. Punishment for individual failure is high." },
                        { title: "Role Requirements", desc: "1 Hunter (Tranq/Kiting), 1 Mage (Curse/AoE), Onyxia Scale Cloaks required." }
                    ]
                },
                attunement: {
                    title: "The Brand of the Dark Horde",
                    steps: [
                        { name: "1. The False Warchief", desc: "Loot [Unsigned Orders of the Black Flight] from General Drakkisath in Heroic UBRS." },
                        { name: "2. The Wyrmcult's Secret", desc: "Slay the 'Wyrmcult Overseer' in Blade's Edge Mountains to loot the [Orb of Draconic Command]. Survive the 'Sanity Check' channel." },
                        { name: "3. The Mark of Blackhand", desc: "Place the Orb in the Blackrock Mountain entrance console and defeat 'The Gatekeeper'." }
                    ],
                    legendary: {
                        name: "Thunderfury (The Final Chapter)",
                        subtitle: "The wind seeks a form.",
                        stages: [
                            { name: "The Elementium Flux", desc: "Mind Control Master Elemental Shaper Krixix in BWL to learn 'Smelt Enchanted Elementium'. Requires [Primal Air] x10 per bar." },
                            { name: "The Awakening", desc: "Summon Prince Thunderaan (25-Man World Boss) in Silithus." },
                            { name: "The Blessing", desc: "Raise the [Dormant Wind Kissed Blade] during a storm in The Skywall to stabilize it." }
                        ]
                    }
                },
                bosses: [
                    {
                        name: "Razorgore the Untamed",
                        desc: "Mind Control Crystal has a 30s CD. 'Unstable DNA' deals increasing Shadow damage to the controller. Dragonkin adds have 'Scalerot' (must be kited)."
                    },
                    {
                        name: "Vaelastrasz the Corrupt",
                        desc: "Strict 3-minute DPS race. 'Burning Adrenaline' now jumps to the nearest player upon death/explosion, forcing a 'suicide line' strategy."
                    },
                    {
                        name: "Broodlord Lashlayer",
                        desc: "Suppression Room traps respawn after 20s. 'Mortal Cleave' stacks indefinitely (Tank swap at 3). 'Blast Wave' knocks players into eggs."
                    },
                    {
                        name: "The Drake Wing",
                        desc: "Firemaw: LoS stacks while OT picks up 'Seeker'. Ebonroc: DPS through the 'Negative Healing' shield. Flamegor: Instant 'Frenzy' requires <1s Tranq Shot."
                    },
                    {
                        name: "Chromaggus",
                        desc: "Cycles 5 breaths randomly. 'Prismatic Shield' heals him if hit by wrong school. Players must click 'Hourglass Levers' to pause time and wipe debuffs."
                    },
                    {
                        name: "Nefarian",
                        desc: "P1: Split raid 5/5 for doors. P2: Dual Class Calls (e.g., Warrior+Priest). P3: Bone Constructs are unkillable and must be kited by OT."
                    }
                ],
                loot: [
                    {
                        name: "Ashkandi, Greatsword of the Brotherhood (Timelocked)",
                        slot: "Two-Hand Sword",
                        type: "Sword",
                        boss: "Nefarian",
                        quality: "epic",
                        damage: "355 - 534",
                        speed: "3.50",
                        dps: "127.0",
                        stats: [
                            "+55 Stamina",
                            "+86 Attack Power"
                        ],
                        effects: [
                            "Equip: Increases your critical strike rating by 48 (2.17% @ L70)."
                        ],
                        flavor: "\"A.L. stands for 'Always Loot'.\""
                    },
                    {
                        name: "Mish'undare, Circlet of the Mind Flayer (Timelocked)",
                        slot: "Head",
                        type: "Cloth",
                        boss: "Nefarian",
                        quality: "epic",
                        armor: "185",
                        stats: [
                            "+38 Stamina",
                            "+36 Intellect"
                        ],
                        sockets: ["Meta", "Yellow"],
                        socketBonus: "+4 Spell Damage",
                        effects: [
                            "Equip: Increases spell damage and healing by up to 68.",
                            "Equip: Increases your spell critical strike rating by 26 (1.18% @ L70)."
                        ],
                        flavor: "\"The mind is a terrible thing to taste.\""
                    },
                    {
                        name: "Neltharion's Tear (Timelocked)",
                        slot: "Trinket",
                        boss: "Nefarian",
                        quality: "epic",
                        stats: [],
                        effects: [
                            "Equip: Increases spell damage and healing by up to 55.",
                            "Equip: Increases your spell hit rating by 40 (3.17% @ L70).",
                            "Use: Tap into the black flight's power, making your next spell cost 0 mana and be a guaranteed critical strike. (3 Min Cooldown)"
                        ],
                        flavor: "\"A single, crystallized tear of the Earth-Warder.\""
                    },
                    {
                        name: "Pure Elementium Band (Timelocked)",
                        slot: "Finger",
                        type: "Ring",
                        boss: "Nefarian",
                        quality: "epic",
                        stats: [
                            "+28 Stamina",
                            "+22 Intellect",
                            "+15 Spirit"
                        ],
                        effects: [
                            "Equip: Increases healing done by up to 75.",
                            "Equip: Restores 8 mana per 5 sec."
                        ],
                        flavor: "\"It is heavy with the weight of the earth.\""
                    }
                ]
            }
        },
        {
            name: 'Ahn\'Qiraj (Timelocked)',
            type: '10-Man Raid (Tier 6)',
            tier: 6,
            image: 'https://i.imgur.com/HFQ75Yc.jpeg',
            lore: "The Old God Awakens \nC'Thun stirs. Level 70 Tuned (Tier 6 Equivalent).",
            geography: "**The Lay of the Land:**\nLoot Target: ilvl 141 (Tier 6 Entry/Hyjal Equivalent). \n**Tuning:** \nSprint 10-Man. High movement, low tolerance for error. \nNature Resistance is mandatory for Huhuran and Viscidus (200+ unbuffed recommended).",
            mechanics: "**Core Mechanic: \"The Whispers\"** \nEvery 2 minutes in combat, the entire raid gains a stack of Mental Erosion. \n- **Effect:** Reduces Hit Chance by 1% and increases Shadow Damage taken by 5% per stack. \n- **Counterplay:** Killing a \"Qiraji Brain-Washer\" (trash mob) or a Boss clears all stacks. This prevents guilds from waiting for cooldowns between pulls; you must keep killing to keep your mind clear.",
            aqData: {
                title: "Ahn'Qiraj (Timelocked)",
                overview: {
                    rationale: "We have transformed AQ into a sprint. The mechanics are faster, deadlier, and tuned for a Tier 6 equivalent challenge (ilvl 141). This is no longer about slogging through trash; it is about surviving high-octane encounters where the environment itself is hostile.",
                    issues: [
                        "Original AQ40 was a marathon test of endurance.",
                        "Lack of 'Sprint' style raid content.",
                        "Trash density was historically oppressive."
                    ],
                    environment: [
                        { title: "Loot Target", desc: "ilvl 141 (Tier 6 Equivalent)." },
                        { title: "Tuning", desc: "Sprint 10-Man. High movement, low tolerance for error." },
                        { title: "Resistance", desc: "Nature Resistance (200+) mandatory for Huhuran and Viscidus." }
                    ]
                },
                attunement: {
                    title: "The Echo of the Sands",
                    steps: [
                        { name: "1. The Bronze Anomaly", desc: "Retrieve [Essence of the Infinite] from Aeonus in The Black Morass (Heroic) to prove you can navigate the timeways." },
                        { name: "2. The Dark Signal", desc: "Use the Essence to expose and slay Dark Conclave Invokers in Shadowmoon Valley (or Arcatraz) to loot the [Void-Resonant Idol]." },
                        { name: "3. The Timelocked Signet", desc: "Defeat Nefarian in Blackwing Lair (Timelocked) to loot the [Timelocked Signet], forging a new anchor to the doomed timeline." }
                    ]
                },
                bosses: [
                    {
                        name: "The Prophet Skeram",
                        desc: "The Gatekeeper. His 'Triad of Truth' splits him into three at 75%/50%/25%; all must be tanked and interrupted. If the phase drags, they heal each other."
                    },
                    {
                        name: "The Silithid Royalty",
                        desc: "The Chaos Check. Killing one leaves a 'Ghost' hazard. Lord Kri leaves poison clouds; Princess Yauj spawns fear spirits; Vem pulses knockbacks. Kill order determines the hazard you deal with."
                    },
                    {
                        name: "Battleguard Sartura",
                        desc: "The Kite Check. Her Whirlwind has a vacuum effect ('Vortex Blade'), pulling players in. Mages/Hunters must snare adds to keep the kite path clear for the tank."
                    },
                    {
                        name: "Fankriss the Unyielding",
                        desc: "The DPS Race. 'Entomb' buries a player in sand; raid must break them out. 'Giant Sandworms' erupt from below and must be picked up by the OT."
                    },
                    {
                        name: "Viscidus",
                        desc: "Frost/Nature Check. Requires 200 Frost hits to freeze, then massive Physical damage to shatter. Splits into 20 'Living Globules' that must be Sapper Charged instantly."
                    },
                    {
                        name: "Princess Huhuran",
                        desc: "The Resistance Check. 'Poison Bolt Volley' hits 5 closest players (Soakers need 200+ NR). 'Wyvern Sting' forces a tank swap. Bloodlust at 30% soft enrage."
                    },
                    {
                        name: "The Twin Emperors",
                        desc: "The Coordination Check. 'Teleport' wipes threat. Healers must pre-position. Ranged DPS must snipe explosive bugs before they reach the melee pile."
                    },
                    {
                        name: "Ouro",
                        desc: "The Survival Check. 'Sand Trap' turns the floor to quicksand (Slow/Silence). 360-degree 'Sweep' requires tanks to intercept the knockback or the raid gets blasted."
                    },
                    {
                        name: "C'Thun",
                        desc: "The Old God. P1: 'Green Beam' chains indefinitely (Stay 10yds apart). P2: Players inside stomach must kill tentacles to weaken him (200% dmg taken). Interrupt Eye Tentacles or wipe."
                    }
                ],
                loot: [
                    {
                        name: "Dark Edge of Insanity (Timelocked)",
                        slot: "Two-Hand Axe",
                        type: "Axe",
                        boss: "C'Thun",
                        quality: "epic",
                        damage: "385 - 578",
                        speed: "3.60",
                        dps: "133.7",
                        stats: [
                            "+62 Strength",
                            "+45 Stamina"
                        ],
                        effects: [
                            "Equip: Increases your critical strike rating by 50 (2.26% @ L70).",
                            "Chance on Hit: Assaults the target's mind, disorienting them for 3 sec."
                        ],
                        flavor: "\"The eye in the blade blinks when you kill.\""
                    },
                    {
                        name: "Death's Sting (Timelocked)",
                        slot: "One-Hand Dagger",
                        type: "Dagger",
                        boss: "C'Thun",
                        quality: "epic",
                        damage: "172 - 259",
                        speed: "1.80",
                        dps: "119.7",
                        stats: [
                            "+28 Agility",
                            "+25 Stamina"
                        ],
                        effects: [
                            "Equip: Increases attack power by 56.",
                            "Equip: Increases your hit rating by 20 (1.27% @ L70).",
                            "Equip: +3 Dagger Weapon Skill."
                        ],
                        flavor: "\"A splinter of the Old God's fang.\""
                    },
                    {
                        name: "Scepter of the False Prophet (Timelocked)",
                        slot: "Main Hand Mace",
                        type: "Mace",
                        boss: "C'Thun",
                        quality: "epic",
                        stats: [
                            "+22 Stamina",
                            "+20 Intellect",
                            "+18 Spirit"
                        ],
                        effects: [
                            "Equip: Increases healing done by up to 230.",
                            "Equip: Restores 12 mana per 5 sec.",
                            "Equip: Chance on heal to grant 'Prophet's Grace', reducing damage taken by 5% for 10 sec."
                        ],
                        flavor: "\"Whispers of salvation that lead only to madness.\""
                    },
                    {
                        name: "Badge of the Swarmguard (Timelocked)",
                        slot: "Trinket",
                        boss: "Battleguard Sartura",
                        quality: "epic",
                        stats: [],
                        effects: [
                            "Equip: Attacks have a chance to grant 'Insight of the Qiraji', ignoring 200 of the target's armor for 10 sec. Stacks up to 6 times.",
                            "Use: Consumes all stacks to increase Haste Rating by 50 per stack for 15 sec. (3 Min Cooldown)"
                        ],
                        flavor: "\"The buzzing never stops.\""
                    }
                ]
            }
        },
        {
            name: 'Naxxramas (Timelocked)',
            type: '25-Man Raid',
            tier: 6.5,
            image: 'https://i.imgur.com/h0oLJpi.jpeg',
            lore: "The Citadel of Dread \nThe Necropolis returns. Level 70 Tuned (Tier 6.5 Finale).",
            geography: "**The Lay of the Land:**\nLoot Target: ilvl 149 (Sunwell Equivalent). \n**Tuning:** \n25-Man Mythic-style. This is the ultimate test. Frost Resistance for Sapphiron is a hard gate (~250+ unbuffed).",
            mechanics: "**Core Mechanics:** \nNaxxramas has a 'Wing Affinity' system. Clearing a wing grants a raid-wide buff specialized for the next wing (e.g., Spider Wing grants Poison Resist). Order matters. \n\n**Key Shifts:** \n- Teleporters: Instant transport between cleared wings. \n- Scourgestones: Drop from every boss, used to upgrade Tier 3 to Tier 3.5 (TBC stats).",
            philosophy: {
                tbc: "Naxxramas was the pinnacle of Classic WoW, but left behind in TBC. We have restored it as the true final boss of the expansion.",
                plus: "We have tuned Naxxramas to be the ultimate Sunwell-tier challenge (Tier 6.5). Every boss requires perfection."
            },
            naxxramasData: {
                overview: {
                    rationale: "We have tuned Naxxramas to be the ultimate Sunwell-tier challenge (Tier 6.5). It is the final exam of the expansion. Every boss has been amplified to require perfection.",
                    issues: [
                        "Tier 3 Reborn for Level 70.",
                        "Serves as the bridge to Wrath of the Lich King.",
                        "25-Man Mythic-style Difficulty."
                    ],
                    environment: [
                        { title: "Loot Target", desc: "ilvl 149-154 (Sunwell Equivalent). Timelocked Tokens exchange for T3 visuals with T6.5 stats." },
                        { title: "Gating", desc: "Heavy Frost Resistance (250+ unbuffed) required for Sapphiron. Nature Resist recommended for Loatheb." }
                    ]
                },
                attunement: {
                    title: "The Echo of Northrend",
                    steps: [
                        { name: "1. The Disturbing Tremor", desc: "Commander Eligor Dawnbringer at Light's Hope Chapel sends you to investigate a power surge in the Plaguewood." },
                        { name: "2. Shadows of the Past", desc: "Locate the 'Time-Lost Anchor' inside Stratholme (Timelocked Area)." },
                        { name: "3. The Triad of Power", desc: "Collect items to disrupt the barrier: [Vial of Purest Nihilism] (Archimonde), [Orb of the Betrayer's Sight] (Illidan), [Glacial Essence] (Rage Winterchill)." },
                        { name: "4. The Attunement Scenario", desc: "Defend Archmage Angela Dosantos at the Plaguewood Tower while she channels the artifacts to shatter the shield." }
                    ]
                },
                quarters: [
                    {
                        name: "The Arachnid Quarter",
                        bosses: [
                            { name: "Anub'Rekhan", desc: "Crypt Guards apply 'Acid Spit' (10% armor reduction, stacks). Locust Swarm = 100% movement speed (Hunter Pack kiting mandatory)." },
                            { name: "Grand Widow Faerlina", desc: "Rain of Fire targets furthest player (Ranged baiting required). 'Widow's Embrace' silences raid for 10s if Frenzy isn't dispelled." },
                            { name: "Maexxna", desc: "Web Wrap targets top 3 threat (inc. OT). Web Spray stuns for 8s. Pre-HoT tank is critical." }
                        ]
                    },
                    {
                        name: "The Plague Quarter",
                        bosses: [
                            { name: "Noth the Plaguebringer", desc: "Curse spreads if not dispelled in 5s. Blinks reset aggro (Save Taunts)." },
                            { name: "Heigan the Unclean", desc: "Safety Dance is 40% faster. 'Static Field' drains mana from stationary players (Stutter-step required)." },
                            { name: "Loatheb", desc: "Necrotic Aura lasts 20s (3s heal window). Killing Spores spawns 'Fungal Creepers' (Void Zone vs Crit Buff tradeoff)." }
                        ]
                    },
                    {
                        name: "The Military Quarter",
                        bosses: [
                            { name: "Instructor Razuvious", desc: "Requires 2 Priest MCs. 'Unbalancing Strike' hits for 50k unmitigated (Tank dies without MC cover)." },
                            { name: "Gothik the Harvester", desc: "Gate opens once every 2 mins. 'Soul Harvest' reduces max HP by 5% stacking on Dead side (Must rotate sides)." },
                            { name: "The Four Horsemen", desc: "Marks ramp 2x faster (Clockwork rotation). Thane Korth'azz casts 'Holy Wrath Chain Lightning' (12y spread)." }
                        ]
                    },
                    {
                        name: "The Construct Quarter",
                        bosses: [
                            { name: "Patchwerk", desc: "Hateful Strikes hit top 3 HP pools for 12k each. Enrage at 5% (+100% atk speed, requires Wall)." },
                            { name: "Grobbulus", desc: "Mutating Injection leaves permanent Slime Puddles. Requires spiral kiting map." },
                            { name: "Gluth", desc: "Decimate = 5% HP. Zombie Chow immune to snares <50% HP (Stun/Kill priority)." },
                            { name: "Thaddius", desc: "Polarity Shift affects the floor. Standing on wrong polarity floor with matching debuff = Death." }
                        ]
                    },
                    {
                        name: "Frostwyrm Lair",
                        bosses: [
                            { name: "Sapphiron", desc: "Frost Aura deals 1500/2s. Gate: <250 Frost Res = Death in 15s. Ice Blocks take increased damage if clustered." },
                            { name: "Kel'Thuzad", desc: "P1: 'Wail of Souls' knockback into pit. P2: Frost Blast chains 15y. Mana Detonation explodes for max mana dmg. P3: 5 Guardian adds (cannot be CC'd)." }
                        ]

                    }
                ],
                misc: {
                    loot: [

                        {
                            name: "The Hungering Cold (Timelocked)",
                            slot: "One-Hand Sword",
                            type: "Sword",
                            boss: "Kel'Thuzad",
                            quality: "epic",
                            damage: "195 - 298",
                            speed: "1.50",
                            dps: "164.3",
                            stats: [
                                "+240 Armor",
                                "+30 Stamina"
                            ],
                            effects: [
                                "Equip: Increases defense rating by 25.",
                                "Equip: Increases your hit rating by 18.",
                                "Equip: Increases your expertise rating by 20."
                            ],
                            flavor: "\"The blade is always cold to the touch.\""
                        },
                        {
                            name: "Might of Menethil (Timelocked)",
                            slot: "Two-Hand Mace",
                            type: "Mace",
                            boss: "Kel'Thuzad",
                            quality: "epic",
                            damage: "468 - 703",
                            speed: "3.80",
                            dps: "154.1",
                            stats: [
                                "+68 Strength",
                                "+55 Stamina"
                            ],
                            effects: [
                                "Equip: Increases your critical strike rating by 52.",
                                "Chance on Hit: Shatters the target's will, reducing their movement speed by 50% and Strength by 100 for 10 sec."
                            ],
                            flavor: "\"A weapon fit for a king, or a god.\""
                        },
                        {
                            name: "Soulseeker (Timelocked)",
                            slot: "Staff",
                            type: "Staff",
                            boss: "Kel'Thuzad",
                            quality: "epic",
                            damage: "185 - 298",
                            speed: "3.20",
                            dps: "75.5",
                            stats: [
                                "+60 Stamina",
                                "+55 Intellect"
                            ],
                            sockets: ["Yellow", "Blue", "Red"],
                            socketBonus: "+5 Spell Damage",
                            effects: [
                                "Equip: Increases spell damage and healing by up to 265.",
                                "Equip: Increases your spell critical strike rating by 35."
                            ],
                            flavor: "\"It hums with the screams of the trapped.\""
                        },
                        {
                            name: "Kiss of the Spider (Timelocked)",
                            slot: "Trinket",
                            boss: "Maexxna",
                            quality: "epic",
                            stats: [],
                            effects: [
                                "Equip: Increases your critical strike rating by 42.",
                                "Equip: Increases your hit rating by 25.",
                                "Use: Increases your attack speed by 25% for 15 sec. (2 Min Cooldown)"
                            ],
                            flavor: "\"A deadly embrace.\""
                        }
                    ]
                },
                legendaries: [
                    {
                        name: "The Corrupted Ashbringer",
                        subtitle: "Path of the Scarlet Highlord",
                        description: "A journey of redemption that takes the wielder from the depths of Naxxramas to the blinding light of the Sunwell.",
                        notes: {
                            vision: "The Vision for Plus:\nIn Classic, these were trophies. Now they are tools for the final challenge.",
                            role: "Designed for Retribution Paladins and Arms Warriors."
                        },
                        stages: [
                            { name: "Act I - Step 1: The Horsemen's Chest", desc: "Loot [Corrupted Ashbringer] from the Four Horsemen in Naxxramas." },
                            { name: "Act I - Step 2: The Whispers", desc: "Equip the blade. You become Hostile to Argent Dawn / Friendly to Scarlet Crusade." },
                            { name: "Act I - Step 3: A Father's Plea", desc: "Enter Scarlet Monastery (Cathedral). Mograine's ghost appears at the altar." },
                            { name: "Act I - Step 4: The Rotting Soul", desc: "Mograine reveals the crystal is dying. You must feed it." },
                            { name: "Act I - Step 5: Feed the Blade (Undead)", desc: "Slay 500 Scourge in the Plaguelands with the blade equipped." },
                            { name: "Act I - Step 6: Feed the Blade (Demons)", desc: "Slay 100 Elite Demons in Outland with the blade equipped." },
                            { name: "Act II - Step 7: Seek the Light", desc: "Visit Uther's Tomb (WPL). The ghost of Uther turns his back on you." },
                            { name: "Act II - Step 8: Penance", desc: "Slay the Twilight Lord at the Altar of Storms (Burning Steppes) to stop a ritual." },
                            { name: "Act II - Step 9: The Naaru's Insight", desc: "Show the blade to A'dal in Shattrath. He reveals it is a 'Dark Naaru' heart." },
                            { name: "Act II - Step 10: The Prism", desc: "Retrieve [Prism of Inner Light] from Reliquary of Souls (Black Temple)." },
                            { name: "Act II - Step 11: The Light's Justice", desc: "Use Prism to capture Teron Gorefiend's soul. Blade absorbs his essence." },
                            { name: "Act III - Step 12: The Shell", desc: "The blade is cracking. You need a new housing." },
                            { name: "Act III - Step 13: Metal of the Gods", desc: "Collect 20 [Elementium Bars] (BWL)." },
                            { name: "Act III - Step 14: Fire of the Legion", desc: "Collect 10 [Fel Hardened Steel]." },
                            { name: "Act III - Step 15: Hammer of the Naaru", desc: "Retrieve [Hammer of the Naaru] from High King Maulgar (Gruul's Lair)." },
                            { name: "Act III - Step 16: The Master Smith", desc: "Bring materials to Kurdran Wildhammer or Garrosh Hellscream." },
                            { name: "Act III - Step 17: Reforging the Hilt", desc: "Defend the anvil from voidwalkers during the reforging process." },
                            { name: "Act IV - Step 18: The Final Vessel", desc: "Receive [The Empty Shell]. Perfect weapon, but no heart." },
                            { name: "Act IV - Step 19: The Spark of Entropy", desc: "Channel the blade on M'uru (Sunwell) when he becomes Entropius (Take 100% extra dmg)." },
                            { name: "Act IV - Step 20: The Highlord's Return", desc: "Return to Light's Hope Chapel. Tirion Fordring performs the final blessing. Reward: [The Ashbringer]." }
                        ],
                        reward: {
                            name: "[The Ashbringer]",
                            ilvl: "164 (Legendary)",
                            stats: "Massive Strength.",
                            equip: "Equip: Increases Critical Strike Rating by 55 and Haste Rating by 45. Chance on hit to blast the enemy for 800 Holy damage and grant 'Crusader's Wrath' (+10% Dmg for 10s).",
                            use: "'Wake of Ashes': Unleashes a cone of Holy Light, stunning all Undead and Demons for 5 sec. (2 Min CD)."
                        }
                    },
                    {
                        name: "Atiesh, Greatstaff of the Guardian",
                        subtitle: "Path of the Arcane",
                        description: "A reconstruction of Medivh's legacy, requiring mastery over the Old Gods, the Scourge, and the Legion.",
                        notes: {
                            role: "A true 'Guardian' staff, offering massive utility for the entire caster group."
                        },
                        stages: [
                            { name: "Act I - Step 1: The Frame of Atiesh", desc: "Collect 40 [Splinters of Atiesh] from Naxxramas (Timelocked) bosses." },
                            { name: "Act I - Step 2: A Staff Reborn", desc: "Combine the splinters. The staff is lifeless and brittle." },
                            { name: "Act I - Step 3: Seeker of Wisdom", desc: "Bring the frame to Aegwynn (Theramore). She sends you to Karazhan." },
                            { name: "Act I - Step 4: Echoes of Medivh", desc: "Find 'Ghost of Arcanagos' on the Master's Terrace in Karazhan." },
                            { name: "Act I - Step 5: The Base", desc: "Loot [Base of Atiesh] from C'Thun (AQ Timelocked)." },
                            { name: "Act I - Step 6: The Head", desc: "Loot [Staff Head of Atiesh] from Kel'Thuzad (Naxxramas)." },
                            { name: "Act I - Step 7: Assembly", desc: "Use the [Eternity Forge] in Caverns of Time. Staff created but corrupted." },
                            { name: "Act II - Step 8: The Dark Whisper", desc: "Equip staff. 'Mark of Sargeras' summons Voidwalkers attacking you." },
                            { name: "Act II - Step 9: The First Cleansing (Fel)", desc: "Absorb Fel Reaver explosion in Shadowmoon Valley with the staff." },
                            { name: "Act II - Step 10: The Second Cleansing (Shadow)", desc: "Banish Avatar of the Martyred in Auchenai Crypts (Heroic)." },
                            { name: "Act II - Step 11: The Third Cleansing (Arcane)", desc: "Channel staff into Core of the Phoenix (Tempest Keep)." },
                            { name: "Act II - Step 12: The Guardian's Test", desc: "Win the Chess Event SOLO (scripted) in Karazhan." },
                            { name: "Act III - Step 13: Weave of the Blue Flight", desc: "Slay Malygos (Timelocked Scenario) for [Draconic Ley-Essence]." },
                            { name: "Act III - Step 14: Weave of the Bronze Flight", desc: "Slay Aeonus (Black Morass Heroic)." },
                            { name: "Act III - Step 15: Weave of the Green Flight", desc: "Cleanse a Corruptor in the Emerald Dream for [Dream-Essence]." },
                            { name: "Act III - Step 16: Weave of the Red Flight", desc: "Hand-in to Alexstrasza at Wyrmrest Temple (Prelude)." },
                            { name: "Act IV - Step 17: The Altar of Damnation", desc: "Summon Gul'dan's echo at the Altar (Shadowmoon). Survive 5 waves." },
                            { name: "Act IV - Step 18: The Demon Within", desc: "Defeat 'Atiesh, Hand of Sargeras' (Boss fight)." },
                            { name: "Act IV - Step 19: The Consecration", desc: "Dip staff into Well of Eternity during Archimonde encounter (Hyjal)." },
                            { name: "Act IV - Step 20: The Guardian", desc: "Return to Aegwynn. Reward: [Atiesh, Greatstaff of the Guardian]." }
                        ],
                        reward: {
                            name: "[Atiesh, Greatstaff of the Guardian]",
                            ilvl: "164 (Legendary)",
                            stats: "Massive Stamina, Intellect, and Spirit.",
                            equip: "Equip: Increases Spell Critical Strike Rating by 45 and Spell Hit Rating by 30. Increases Spell Power by 160.",
                            auras: [
                                "Mage: +5% Spell Crit to party.",
                                "Warlock: +Spell Dmg equal to 20% of Spirit to party.",
                                "Priest: +60 MP5 to party.",
                                "Druid: +5% Spell Haste to party."
                            ],
                            use: "Creates a portal to Karazhan (Instant)."
                        }
                    }
                ]
            }
        },
        {

            name: 'Azeroth Invasions',
            type: 'World Event',
            level: '70',
            zone: 'Azeroth (Various)',
            image: 'https://i.imgur.com/e5wE7xi.png',
            lore: "A Realm Reborn \nThe war isn't just in Outland; the Legion and its allies are striking back at our homes. This system provides a vibrant open-world endgame loop that offers competitive catch-up gear (Tier 4/5 equivalent), massive amounts of Honor, and crucial crafting materials.",
            geography: "**The Cycle:** \nRotates weekly (Tuesday Reset). One major zone in Kalimdor and one in Eastern Kingdoms function as the 'Active Front'. \n\n**The Map:** \nActive zones are marked with a 'Crossed Swords' icon. Flight paths to these zones are free but risky (aerial combat units may intercept).",
            philosophy: {
                tbc: "**The 2007 Landscape:** \nIn original TBC, once you stepped through the Dark Portal, Azeroth became a ghost town. Zones like Winterspring, Silithus, and the Plaguelands were abandoned.",
                plus: "**The Vision for Plus:** \nWe are implementing a 'Weekly Front' system. It breathes life back into the old world, making it relevant for max-level progression, gathering, and world PvP."
            },
            bosses: [
                "**Highlord Kazzak (The Legion):** \nSpawns at the Tainted Scar or Demon Fall Canyon. 'Supreme Doom' explodes players if not dispelled.",
                "**Baroness Anastari (The Scourge):** \nA Banshee Queen possessing a gargantuan Abomination. Melee must rotate out of her 'Plague Cloud'.",
                "**General Rajaxx (The Qiraji):** \nCommands waves of Silithid flyers. His 'Thundering Charge' knocks the raid 100 yards into the air."
            ],
            mechanics: "**1. The Defense Meter:** \nPlayers must destroy Invasion Portals to fill the bar. At 100%, the Grand Commander spawns. \n\n**2. Supply Lines:** \nHerbs/Ore in the zone are 'Fel-Touched', dropping double materials and [Primal Earth/Life]. \n\n**3. War Effort (PvP):** \nZones are Contested. Killing players grants 'Defender's Tokens'. Dying drops 10% of your collected scraps.",
            invasionsData: {
                grandCommanders: [
                    {
                        name: "Highlord Kazzak",
                        faction: "The Legion",
                        location: "Blasted Lands / Ashenvale",
                        desc: "The original world boss, upgraded. He shouts commands to Fel Reavers walking the zone. He heals for 50,000 HP whenever a player dies (Zerg tactics = Wipe)."
                    },
                    {
                        name: "Baroness Anastari",
                        faction: "The Scourge",
                        location: "Eastern Plaguelands / Winterspring",
                        desc: "A Banshee Queen possessing a gargantuan Abomination construct. She can 'Possess' the main tank, forcing the raid to DPS them to 50% HP to break the charm."
                    },
                    {
                        name: "General Rajaxx",
                        faction: "The Qiraji",
                        location: "Silithus / Tanaris",
                        desc: "A massive Qiraji General commanding waves of Silithid flyers. He burrows and summons elite bugs that must be AoE'd down before he re-emerges."
                    }
                ],
                loot: [
                    {
                        name: "Standard of the World Defender",
                        slot: "Trinket",
                        quality: "rare",
                        stats: [],
                        effects: [
                            "Equip: Increases your resilience rating by 45.",
                            "Use: Place a battle standard that increases the attack power and spell damage of all party members within 30 yards by 100. (5 Min Cooldown)"
                        ],
                        flavor: "\"Fabric torn from the banners of a fallen invasion commander.\""
                    },
                    {
                        name: "Leggings of the Scourge-Breaker",
                        slot: "Legs",
                        type: "Plate",
                        quality: "rare",
                        stats: ["+45 Strength", "+50 Stamina"],
                        sockets: ["Blue", "Yellow"],
                        socketBonus: "+4 Defense Rating",
                        effects: [
                            "Equip: Increases defense rating by 35.",
                            "Equip: Your melee attacks have a chance to cleanse 1 Disease or Poison effect from yourself."
                        ],
                        flavor: "\"Tempered in the fires of the Plaguelands.\""
                    },
                    {
                        name: "Fel-Infused Mining Pick",
                        slot: "Main Hand",
                        type: "Dagger",
                        quality: "rare",
                        damage: "85 - 120",
                        speed: "1.80",
                        dps: "56.9",
                        stats: [],
                        effects: [
                            "Equip: +10 Mining Skill.",
                            "Equip: Mining nodes in Invasion Zones have a chance to yield 'Mote of Fire' or 'Mote of Shadow'."
                        ],
                        flavor: "\"It glows with an unstable heat.\""
                    },
                    {
                        name: "Band of the Inevitable Swarm",
                        slot: "Finger",
                        type: "Ring",
                        quality: "rare",
                        stats: ["+22 Agility", "+24 Stamina"],
                        effects: [
                            "Equip: Increases attack power by 44.",
                            "Equip: Chance on hit to summon a Silithid Scarab to fight for you for 30 sec (Sunders armor)."
                        ],
                        flavor: "\"You can hear scuttering inside the band.\""
                    }
                ]
            }
        },
        {
            name: 'The Chronicle of Azeroth',
            type: 'Weekly World Tour',
            image: 'https://i.imgur.com/WbvlN5b.jpeg',
            lore: "Relive the History \nChromie offers a weekly 'Chronicle' quest. Revisit iconic locations (e.g., Uther's Tomb, The Dark Portal, Mount Hyjal) to close minor time anomalies.",
            geography: "Zones: \nSpans the entire Old World. 5 Random locations per week.",
            philosophy: { tbc: "Old zones were dead.", plus: "Keeps the entire world relevant for max-level players." },
            bosses: ["Time Anomalies: \nMini-bosses that spawn at the location."],
            mechanics: "Rewards: \nMassive Reputation gains with all Alliance/Horde factions + 'Sands of Time' currency.",
            chronicleData: {
                overview: {
                    rationale: "Goal: Make the entire world relevant again, not just Outland.\n\nEvery week, Chromie identifies 5 \"Time Anomalies\" across Azeroth—events where the timeline is fraying. Players must travel to these classic zones to repair the damage. This system encouragesmax-level players to revisit zones like Winterspring, Silithus, or the Plaguelands, breathing life into the old world.",
                    issues: [
                        "Azeroth felt abandoned in TBC.",
                        "Classic 1-60 content became obsolete.",
                        "Faction reputation grind was tedious."
                    ],
                    environment: [
                        { title: "Dynamic Scaling", desc: "Enemies and rewards scale to level 70." },
                        { title: "No Flying", desc: "Ground mounts only, encouraging World PvP." },
                        { title: "Shared Tagging", desc: "All faction members get credit for kills." }
                    ]
                },
                events: [
                    {
                        region: "Eastern Kingdoms",
                        location: "The Dark Portal",
                        event: "The Vanguard Defiance",
                        desc: "Defend the Azeroth side of the Dark Portal from a sudden surge of Felguards attempting to push back through. 10-minute holdout survival mode."
                    },
                    {
                        region: "Kalimdor",
                        location: "Silithus",
                        event: "The Hive Resurgence",
                        desc: "A Qiraji Prophet has awoken. Delve into a Hive tunnel system to collapse the entrance before a new army emerges. Close quarters combat."
                    },
                    {
                        region: "Eastern Kingdoms",
                        location: "Tyr's Hand",
                        event: "The Scarlet Purge",
                        desc: "The Scarlet Crusade has been infiltrated by Dreadlords. Identify and slay the imposters among the ranks without killing innocent zealots."
                    },
                    {
                        region: "Kalimdor",
                        location: "Winterspring",
                        event: "The Frozen Terror",
                        desc: "A Kel'Thuzad-empowered Wyrm is freezing the goblin trade routes. Chase it on horseback while dodging ice breath to ground it."
                    },
                    {
                        region: "Eastern Kingdoms",
                        location: "Blackrock Mountain",
                        event: "The Dark Iron Rebellion",
                        desc: "Help a faction of Dark Iron dwarves rebel against Ragnaros's influence. Escort their bomb cart to the gates of the Molten Core."
                    }
                ],
                rewards: {
                    currencies: [
                        { name: "Sands of Time", desc: "Currency exchanged for T4/T5 equivalent catch-up gear." },
                        { name: "Badge of Justice", desc: "Awards 5 Badges per event completed." }
                    ],
                    reputation: [
                        { name: "Alliance/Horde Vanguard", desc: "Massive rep gains with all racial factions (Exodar, Silvermoon, etc)." },
                        { name: "Keepers of Time", desc: "Awards reputation toward the CoT faction." }
                    ]
                }
            }
        }
    ],

};
