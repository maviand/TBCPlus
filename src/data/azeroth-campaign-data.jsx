import {
    Shield, Map, Sword, Scroll, Globe, Mountain, Zap, Skull, Anchor,
    Wind, Hammer, Users, Feather, Layout, BookOpen, Gem, Coins, Crown,
    ArrowRight, Star, Clock, AlertTriangle, ChevronRight, X, Compass
} from 'lucide-react';

export const defenderData = {
    mission: {
        title: "The Battle for Azeroth's Soul",
        levelRange: "[60-70]",
        subtitle: "One cohesive campaign. Three fronts. One enemy.",
        headerImage: "https://i.imgur.com/Zdo4toj.jpeg",
        bgGradient: "from-slate-900 via-slate-800 to-black",
        intro: "**The Dark Portal was just a distraction.**\n\nWhile the heroes of the Alliance and Horde fought in Outland, ancient enemies have seized the opportunity to strike at the heart of Azeroth. From the roots of the World Tree to the engines of the Titans, the **defenders of Azeroth** must unite to repel this multi-pronged invasion.",
        content: "**Campaign Structure:**\nThis is a linear narrative experience that takes players from level 60 to 70 without stepping foot in Outland. Complete the story chapters in each zone to unlock the final raid content.\n\n**Select a Front Below:**",
        hubs: [], // Placeholder to prevent map errors if code expects it
        dungeons: {} // Placeholder
    },
    hyjal: {
        title: "Zone 1: Mount Hyjal",
        levelRange: "[60-63]",
        subtitle: "Regrowth amidst Ruin. The World Tree is under siege.",
        headerImage: "https://i.imgur.com/mZiOtio.jpeg",
        bgGradient: "from-green-900 to-emerald-950",
        audioTrack: { title: "Hyjal Winds", src: "/assets/audio/hyjal.mp3" },
        intro: "**The World Tree is healing, but the scars of the Third War have been ripped open.**\n\nA new Dreadlord, **Mal'Ganis**, rallies the Scourge to strike Nordrassil. Players must climb the colossal roots of the tree, fighting through corrupted furbolg camps and burning forests. The zone emphasizes **verticality** and the desperate struggle to preserve life.",
        dungeons: {
            barrow: {
                name: "The Barrow Deeps",
                type: "5-Man Dungeon",
                level: "61-63",
                icon: Skull,
                color: "text-blue-400",
                image: "https://i.imgur.com/1OTRoOa.jpeg",
                lore: "**The Wardens' Failure**\nWhen Tyrande Whisperwind freed Illidan Stormrage, she slaughtered the Watchers guarding the Barrow Deeps. Now, without the Wardens to maintain the dampening fields, the ancient horrors locked away for ten thousand years have woken up.",
                gameplay: "**Mob Density:** High\n**Bosses:** 4\n**Loot:** Pre-BiS Dungeon Set 3 pieces.\n**Key mechanic:** 'Shadow-Dampening' Aura management.",
                linkToAtlas: true
            },
            nightmare: {
                name: "Emerald Nightmare",
                type: "10-Man Raid",
                level: "Tier 4",
                icon: Crown,
                color: "text-purple-400",
                image: "https://i.imgur.com/mroo7Hx.jpeg",
                lore: "**The Rift of Aln Open**\nWhile the druids of the Cenarion Circle focus on Outland, Xavius the Nightmare Lord has begun a subtle invasion of the World Tree's roots. This is not a full-scale war, but a surgical strike.",
                gameplay: "**Format:** 10-Man Raid\n**Bosses:** 6\n**Tier:** 4 (Equivalent to Karazhan)\n**Attunement:** Required (See 'The Pathfinder')\n**Highlights:** Dragon-riding encounter.",
                linkToAtlas: true
            }
        },
        hubs: [
            {
                name: "Nordrassil's Roots",
                faction: "Neutral (Cenarion)",
                image: "https://i.imgur.com/ai5iXG8.jpeg",
                lore: "**The Vigil of the Ancients**\nLocated at the very base of the World Tree, this camp is a joint effort between the Cenarion Circle and the remaining Wardens. The camp serves as the primary staging ground for the assault on the nightmare-infested roots below.",
                vendors: [
                    { name: "Seed of Life", type: "Restorative", cost: "5g", icon: "Leaf" },
                    { name: "Warden's Glaive-Kit", type: "Cosmetic", cost: "100g", icon: "Sword" },
                    { name: "Pattern: Living Wood Breastplate", type: "Recipe", cost: "50g", icon: "Scroll" },
                    { name: "Tabard of the Tree-Wardens", type: "Tabard", cost: "Exalted", icon: "Shield" }
                ],
                quests: [
                    { title: "The Corrupted Roots", desc: "Descend into the cavernous tunnel system." },
                    { title: "Defense of the Well", desc: "A tower-defense style public event." },
                    { title: "Awakening the Ancients", desc: "Wake slumbering Treants." }
                ]
            },
            {
                name: "Stonemaul Hold",
                faction: "Horde",
                image: "https://i.imgur.com/HVEG3Xl.jpeg",
                lore: "**A Home for the Displaced**\nRexxar has formally brought the Stonemaul Ogres into the Horde fold. This fortress is built from crude stone and timber, serving as a bulwark against the demons of Darkwhisper Gorge.",
                vendors: [
                    { name: "Ogre Strength Potion", type: "Consumable", cost: "2g", icon: "Zap" },
                    { name: "Stonemaul Battle Standard", type: "Buff", cost: "10g", icon: "Flag" },
                    { name: "Plans: Ogre-Iron Cleaver", type: "Recipe", cost: "40g", icon: "Hammer" },
                    { name: "Ensemble: Mok'Nathal Survivalist", type: "Cosmetic", cost: "200g", icon: "Shirt" }
                ],
                quests: [
                    { title: "Smashing Satyrs", desc: "Hunt down Legion remnants." },
                    { title: "Ogre Diplomacy", desc: "Clear trade routes of spiders." },
                    { title: "The Gore-Pit", desc: "Survive the Ogre Arena." }
                ]
            },
            {
                name: "Silverwing Outpost",
                faction: "Alliance",
                image: "https://i.imgur.com/Y32vZpr.jpeg",
                lore: "**The Sentinel's Last Stand**\nThe veterans of Warsong Gulch have established a permanent forward operating base. Unlike the druids, the Sentinels believe only steel and arrows can save Hyjal.",
                vendors: [
                    { name: "Silverwing Recurve Bow", type: "Weapon", cost: "Gold", icon: "Crosshair" },
                    { name: "Sentinel's Ration", type: "Food", cost: "Silver", icon: "Utensils" },
                    { name: "Design: Elune's Tear", type: "Recipe", cost: "Reputation", icon: "Gem" },
                    { name: "Mount: Armored Nightsaber", type: "Mount", cost: "Exalted", icon: "Move" }
                ],
                quests: [
                    { title: "Holding the Line", desc: "Intercept Horde caravans." },
                    { title: "The Missing Scout", desc: "Find lost sentinels in the fog." },
                    { title: "Purging the Fel", desc: "Destroy Infernal summoning circles." }
                ]
            }
        ]
    },
    uldum: {
        title: "Zone 2: Uldum",
        levelRange: "[63-67]",
        subtitle: "Titan Sci-Fi meets Ancient Sands. The race for the Forge.",
        headerImage: "https://i.imgur.com/72RKZWw.jpeg",
        bgGradient: "from-yellow-900/50 to-slate-900",
        audioTrack: { title: "Sands of Uldum", src: "/assets/audio/uldum.mp3" },
        intro: "**The Gates have opened, not by Deathwing, but by the Ethereum seeking godhood.**\n\nThe **Ethereum** seeks the **Forge of Origination** to rewrite reality. This is an Indiana Jones-style race against time, but solemn and alien. **Titan Sci-Fi meets Ancient Egypt.**",
        dungeons: {
            origination: {
                name: "Halls of Origination",
                type: "5-Man Dungeon",
                level: "65-67",
                icon: Skull,
                color: "text-yellow-400",
                image: "https://i.imgur.com/Bhlb4vl.jpeg",
                lore: "**The Ultimate Weapon**\nThe Halls contain the reformatting device capable of wiping all life from Azeroth. The Ethereum, led by **Nexus-Prince Shaffar**, have hacked the security systems. Players must navigate the 'Maker's Rise'.",
                linkToAtlas: true
            },
            lostcity: {
                name: "The Lost City",
                type: "5-Man Dungeon",
                level: "66",
                icon: Skull,
                color: "text-orange-400",
                image: "https://i.imgur.com/SrvLDaA.jpeg",
                lore: "**The Tol'vir Civil War**\nThe Neferset tribe has sided with the Ethereum, believing the 'flesh curse' can be reversed by Titan tech. The Ramkahen tribe remains loyal but is under siege. Players fight through the streets.",
                linkToAtlas: true
            }
        },
        hubs: [
            {
                name: "Ramkahen City",
                faction: "Neutral (Tol'vir)",
                image: "https://i.imgur.com/oTD6vDh.jpeg",
                lore: "**The Jewel of the Desert**\nA thriving oasis city of canals and sandstone spires. The Ramkahen Tol'vir have opened their gates to outsiders for the first time, desperate for aid against their stone-skin brethren.",
                vendors: [
                    { name: "Reins of the Grey Riding Camel", type: "Mount", cost: "Gold", icon: "Move" },
                    { name: "Tol'vir Artifacts", type: "Toy", cost: "Fragments", icon: "Box" },
                    { name: "Tabard of Ramkahen", type: "Tabard", cost: "Exalted", icon: "Shield" },
                    { name: "Schematic: Sand-Skimmer", type: "Recipe", cost: "Engineering", icon: "Settings" }
                ],
                quests: [
                    { title: "The Flesh Curse", desc: "Research the disease." },
                    { title: "Canal Patrol", desc: "Maintain order on the waterways." },
                    { title: "Vote of Confidence", desc: "Win the favor of the Elders." }
                ]
            },
            {
                name: "Sun-King's Reach",
                faction: "Horde",
                image: "https://i.imgur.com/Ym7AIGd.jpeg",
                lore: "**The Reliquary Expedition**\nThe Blood Elves have sent their elite archaeological division, The Reliquary, to plunder Uldum for Titan technology. Magister Rommath oversees the operation.",
                vendors: [
                    { name: "Arcane Dusts", type: "Reagent", cost: "Mana", icon: "Sparkles" },
                    { name: "Mana Scryer", type: "Tool", cost: "Gold", icon: "Eye" },
                    { name: "Sun-Touched Scimitar", type: "Cosmetic", cost: "Tokens", icon: "Sword" },
                    { name: "Formula: Enchant Weapon - Sunfire", type: "Recipe", cost: "Reputation", icon: "Scroll" }
                ],
                quests: [
                    { title: "Tapping the Lines", desc: "Siphon energy from obelisks." },
                    { title: "Rivalry", desc: "Sabotage Explorer's League digsites." },
                    { title: "The Construct Core", desc: "Harvest golem cores." }
                ]
            },
            {
                name: "The Iron League",
                faction: "Alliance",
                image: "https://i.imgur.com/R7lyjtG.jpeg",
                lore: "**Brann's Basecamp**\nThe Explorer's League has set up a massive excavation site. Dwarven tanks and gyrocopters dot the landscape. Brann Bronzebeard shouts orders from his tent.",
                vendors: [
                    { name: "Dwarven Hand Cannon", type: "Weapon", cost: "Gold", icon: "Crosshair" },
                    { name: "Excavator's Hat", type: "Armor", cost: "Gold", icon: "HardHat" },
                    { name: "Pattern: Archaeologist's Satchel", type: "Recipe", cost: "Reputation", icon: "ShoppingBag" },
                    { name: "Brew of the Sands", type: "Consumable", cost: "Silver", icon: "Beer" }
                ],
                quests: [
                    { title: "Digging Deep", desc: "Dynamite usage." },
                    { title: "Titan Translations", desc: "Decipher tablets for Brann." },
                    { title: "Escort the Cart", desc: "Protect artifacts from Pygmies." }
                ]
            }
        ]
    },
    grimbatol: {
        title: "Zone 3: Grim Batol",
        levelRange: "[67-70]",
        subtitle: "Industrial High Fantasy. The Dragonmaw War Machine.",
        headerImage: "https://i.imgur.com/nr9e666.jpeg",
        bgGradient: "from-red-900/40 to-slate-950",
        audioTrack: { title: "Dragonmaw Forge", src: "/assets/audio/grimbatol.mp3" },
        intro: "**The Dragonmaw Clan has returned, and they have brought the Netherwing with them.**\n\n**Zuluhed the Whacked** has sent his elite riders back to Azeroth. They have seized Grim Batol to breed a new flight. The zone is dominated by massive chains, blast furnaces, and the constant roar of dragons overhead.",
        dungeons: {
            grim: {
                name: "Grim Batol",
                type: "MEGA-DUNGEON",
                level: "68-70",
                icon: Skull,
                color: "text-red-500",
                image: "https://i.imgur.com/SzvCxKQ.jpeg",
                lore: "**A City of Dark Iron and Dragonfire**\nThe dwarven architecture of Grim Batol has been perverted by Orcish spikes and chains. It is a factory of war. The Dragonmaw are breeding a new flight of dragons here.",
                linkToAtlas: true
            },
            redoubt: {
                name: "Vermillion Redoubt",
                type: "25-Man Raid",
                level: "Tier 4",
                icon: Crown,
                color: "text-orange-500",
                image: "https://i.imgur.com/ZOUb0tA.jpeg",
                lore: "**The Final Assault**\nAlliance and Horde airships circle the peak. Players must drop onto the landing pads and fight their way IN, then UP.",
                linkToAtlas: true
            }
        },
        hubs: [
            {
                name: "Aerie Peak Command",
                faction: "Alliance",
                image: "https://i.imgur.com/M7On6Ry.jpeg",
                lore: "**High Altitude Warfare**\nThe Wildhammer Dwarves have mobilized their entire Gryphon fleet. The peak is a bustling airfield. Falstad Wildhammer personally oversees the bombing runs.",
                vendors: [
                    { name: "Reins of the Armored Snowy Gryphon", type: "Mount", cost: "Gold", icon: "Move" },
                    { name: "Stormhammer", type: "Weapon", cost: "Honor", icon: "Hammer" },
                    { name: "Wildhammer Tabard", type: "Tabard", cost: "Exalted", icon: "Shield" },
                    { name: "Recipe: Gryphon Treats", type: "Recipe", cost: "Cooking", icon: "Scroll" }
                ],
                quests: [
                    { title: "Death from Above", desc: "Carpet bomb siege engines." },
                    { title: "Dragon Hunting", desc: "Aerial dogfights." },
                    { title: "Rescue Mission", desc: "Save captured pilots." }
                ]
            },
            {
                name: "Dragonmaw Port",
                faction: "Horde",
                image: "https://i.imgur.com/oI6w7qb.jpeg",
                lore: "**The Kor'kron Beachhead**\nThe port is a logistical nightmare of oil, iron, and blood. Garrosh Hellscream has established a foothold. It is a brutal, metal-clad fortress.",
                vendors: [
                    { name: "Kor'kron Juggernaut Set", type: "Cosmetic", cost: "Tokens", icon: "Shield" },
                    { name: "Wolf Meat Stew", type: "Food", cost: "Silver", icon: "Utensils" },
                    { name: "Banner of the Horde", type: "Toy", cost: "Honor", icon: "Flag" },
                    { name: "Plans: Reinforced Steel Shield", type: "Recipe", cost: "Gold", icon: "Hammer" }
                ],
                quests: [
                    { title: "Breaching the Gate", desc: "Goblin sapper charges." },
                    { title: "Nether Drake Studies", desc: "Capture eggs." },
                    { title: "Naval Warfare", desc: "Sink cultist ships." }
                ]
            },
            {
                name: "Vermillion Redoubt",
                faction: "Neutral (Red Flight)",
                image: "https://i.imgur.com/ZOUb0tA.jpeg",
                lore: "**The Dragon's Sanctuary**\nA hidden enclave of the Red Dragonflight. Here, Alexstrasza's youngest drakes coordinate with mortal heroes to heal the land.",
                vendors: [
                    { name: "Ruby Drake Scale", type: "Trinket", cost: "Gold", icon: "Gem" },
                    { name: "Drake Scale Cloak", type: "Armor", cost: "Leather", icon: "Shield" },
                    { name: "Red Dragon Orb", type: "Toy", cost: "Reputation", icon: "Cpu" },
                    { name: "Enchant Cloak - Fire Resistance", type: "Recipe", cost: "Dust", icon: "Zap" }
                ],
                quests: [
                    { title: "Healing the Land", desc: "Restore scorched earth." },
                    { title: "Egg Rescue", desc: "Retrieve stolen eggs." },
                    { title: "The Betrayer", desc: "Hunt corrupted dragons." }
                ]
            }
        ]
    },
    systems: {
        professions: {
            title: "Reforged Professions",
            content: "**Old World Materials, New World Power**\nFel Iron is rare on Azeroth. Instead, Defenders utilize **Thorium, Arcanite, and Mooncloth** combined with **Primal Nethers**."
        },
        reputations: {
            title: "New Factions",
            content: "**Wardens of Nordrassil** (Hyjal)\n**The Ramkahen** (Uldum)\n**Dragonmaw Defectors** (Grim Batol)"
        },
        badges: {
            title: "Badge of the Home Front",
            content: "**The Currency of Defense**\nEarn **Badge of the Home Front** from Heroic Dungeons and Daily Quests. Buy Tier 4 equivalents and Attunement Keys."
        }
    }
};
