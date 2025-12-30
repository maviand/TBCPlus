
import React, { useState } from 'react';
import {
    Shield, Map, Sword, Scroll, Globe, Mountain, Zap, Skull, Anchor,
    Wind, Hammer, Users, Feather, Layout, BookOpen, Gem, Coins, Crown,
    ArrowRight, Star, Clock, AlertTriangle, ChevronRight, X, Compass
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';



// --- DATA STRUCTURE: The Defender's Codex (Expanded) ---
const defenderData = {
    hyjal: {
        title: "Zone 1: Mount Hyjal",
        levelRange: "[60-63]",
        subtitle: "Regrowth amidst Ruin. The World Tree is under siege.",
        headerImage: "https://i.imgur.com/mZiOtio.jpeg",
        color: "text-green-400",
        bgGradient: "from-green-900 to-emerald-950",
        intro: "**The World Tree is healing, but the scars of the Third War have been ripped open.**\n\nA new Dreadlord, **Mal'Ganis**, rallies the Scourge to strike Nordrassil. Players must climb the colossal roots of the tree, fighting through corrupted furbolg camps and burning forests. The zone emphasizes **verticality** and the desperate struggle to preserve life.",
        dungeons: {
            barrow: {
                name: "The Barrow Deeps",
                type: "5-Man Dungeon",
                level: "61-63",
                icon: Skull,
                color: "text-blue-400",
                image: "https://i.imgur.com/1OTRoOa.jpeg",
                lore: "**The Wardens' Failure**\nWhen Tyrande Whisperwind freed Illidan Stormrage, she slaughtered the Watchers guarding the Barrow Deeps. In her wake, she left the intricate magical seals of the prison shattered. Now, without the Wardens to maintain the dampening fields, the ancient horrors locked away for ten thousand years have woken up.\n\nHigh Jailor Altharius, corrupted by the whispers of an Old God seeping up from the earth, has turned the prison into a gladiatorial fight club. He plans to sell the most dangerous entities to the Burning Legion as living weapons.",
                geography: "**The Lay of the Land:**\nThe dungeon is a spiraling descent into madness. The upper levels are typical Night Elf architecture—mossy stone and moonwells—but as you descend, the roots of the World Tree pierce the walls, dripping with corruption. The final floor is a Void-soaked cavern where reality is thin.",
                philosophy: {
                    tbc: "**The 2007 Landscape:**\nHyjal was only a raid. The vast underground network of barrows seen in WC3 was never explorable.",
                    plus: "**The Vision for Plus:**\nWe wanted to explore the consequences of Tyrande's actions. This dungeon is a 'Prison Break' in reverse—you are breaking IN to restore order. It is claustrophobic and tense."
                },
                bosses: [
                    "**Avatar of Vengeance:** \nA manifestation of Maiev's lingering rage. It uses 'Fan of Knives' and 'Blink' to kite the party.",
                    "**Thrash-Blade the Gnoll King:** \nA joke-boss turned deadly. He has been empowered by fel-steroids and dual-wields massive flails.",
                    "**Void Reaver X-7:** \nAn early prototype fel-reaver abandoned by the Legion. It leaks unstable fel-energy that must be soaked.",
                    "**Lady Sevine:** \nA Succubus interrogator who mind-controls the tank, forcing the healer to keep them alive while the DPS interrupt her.",
                    "**High Jailor Altharius:** \nThe corrupt warden. He shifts the gravity of the room, forcing players to fight on the ceiling.",
                    "**The Prisoner (Secret):** \nA random rare-spawn boss released from a stasis cell (could be a dreadlord, a demon hunter, or a murloc)."
                ],
                mechanics: "**The Stasis Cells:**\nPlayers can choose to open optional cells. Some contain loot, others contain mini-bosses. It adds a risk/reward gambling mechanic to the run."
            },
            nightmare: {
                name: "Emerald Nightmare",
                type: "10-Man Raid",
                level: "Tier 4",
                icon: Crown,
                color: "text-purple-400",
                image: "https://i.imgur.com/mroo7Hx.jpeg",
                lore: "**The Rift of Aln Open**\nWhile the druids of the Cenarion Circle focus on Outland, Xavius the Nightmare Lord has begun a subtle invasion of the World Tree's roots. This is not a full-scale war, but a surgical strike. Players must enter the **Dream Portals** scattered around Hyjal to cleanse the corruption before it spreads to the trunk.",
                geography: "**The Lay of the Land:**\nThe raid environment shifts seamlessly between the Waking World (burning, scarred Hyjal) and the Emerald Dream (psychedelic, twisted versions of the same location). Players must navigate both dimensions simultaneously.",
                philosophy: {
                    tbc: "**The 2007 Landscape:**\nThe Emerald Nightmare was the biggest 'missing' content of classic WoW.",
                    plus: "**The Vision for Plus:**\nWe finally deliver it. It is the 'Karazhan' of the Defender path—a 10-man entry-level raid with heavy atmosphere and lore significance."
                },
                bosses: [
                    "**Nythendra:** \nA corrupted green dragon guarding the entrance. Her breath causes 'Sleeping Sickness', slowing action speed.",
                    "**Elerethe Renferal:** \nA druid stuck in spider form. She webs players to the ceiling; they must cut themselves down.",
                    "**Ursoc (The Corrupted):** \nThe Bear God. A pure DPS check. He charges the furthest player, dealing massive physical damage.",
                    "**Dragons of Nightmare (Ysondre & Taerar):** \nThey share a health pool. Players must separate them or they heal each other.",
                    "**Il'gynoth, Heart of Corruption:** \nA mass of tentacles inside the tree's sap. Players must kill 'Blood Ichors' near the eye to damage it.",
                    "**Cenarius (The Nightmare Ghost):** \nAn illusion of the demigod testing the players' worthiness.",
                    "**Xavius, the Nightmare Lord:** \nThe final encounter. He attempts to put the entire raid to sleep permanently. Players must use 'Dream Potions' to stay awake."
                ],
                mechanics: "**Sanity Meter:**\nSimilar to Yogg-Saron, players have a 'Sanity' bar. Standing in corruption lowers it. Reaching 0 means you are Mind Controlled. You must enter 'Dream Bubbles' to restore sanity."
            }
        },
        hubs: [
            {
                name: "Nordrassil's Roots",
                faction: "Neutral (Cenarion)",
                image: "https://i.imgur.com/ai5iXG8.jpeg",
                lore: "**The Vigil of the Ancients**\nLocated at the very base of the World Tree, this camp is a joint effort between the Cenarion Circle and the remaining Wardens. The air hums with nature magic, but it is a frantic energy. Druids channel spells into the bark 24/7 to halt the rot, while Wardens patrol the perimeter.\n\nThe camp serves as the primary staging ground for the assault on the nightmare-infested roots below.",
                vendors: "**Requisitions of the Ancients:**\n- **Seed of Life:** A potent restorative infused with the essence of the new World Tree. Purges corruption instantly.\n- **Warden's Glaive-Kit:** A cosmetic enhancement enabling 'Glaive-Toss' animations for Hunters.\n- **Pattern: Living Wood Breastplate** (Leatherworking): BiS Nature Resistance gear grown, not crafted.\n- **Tabard of the Tree-Wardens:** Exalted Reputation Reward.",
                quests: "**The Siege of Hyjal:**\n- **The Corrupted Roots:** Descend into the cavernous tunnel system beneath the tree to purge the rot gnawing at the roots.\n- **Defense of the Well:** A tower-defense style public event where players must hold back waves of Scourge attempting to defile the Moonwell.\n- **Awakening the Ancients:** Locate and wake slumbering Treants to join the battle."
            },
            {
                name: "Stonemaul Hold",
                faction: "Horde",
                image: "https://i.imgur.com/HVEG3Xl.jpeg",
                lore: "**A Home for the Displaced**\nRexxar has formally brought the Stonemaul Ogres into the Horde fold. This fortress is built from crude stone and timber, serving as a bulwark against the demons of Darkwhisper Gorge.\n\nThe Ogres here are eager to prove their worth to the Warchief, engaging in brutal hand-to-hand combat drills day and night.",
                vendors: "**Stonemaul Quartermaster:**\n- **Ogre Strength Potion:** Increases Strength by 25 and size by 10% for 1 hour.\n- **Stonemaul Battle Standard:** A deployable AOE buff banner (+10 AP to party).\n- **Plans: Ogre-Iron Cleaver:** A massive 2H Axe design.\n- **Ensemble: Mok'Nathal Survivalist Gear:** Cosmetic armor set.",
                quests: "**Test of Strength:**\n- **Smashing Satyrs:** Hunt down the Legion remnants in the Gorge and collect their horns.\n- **Ogre Diplomacy:** Help the Ogres establish safe trade routes with Orgrimmar by clearing the road of spiders.\n- **The Gore-Pit:** Survive 5 rounds in the Ogre Arena for a rare weapon reward."
            },
            {
                name: "Silverwing Outpost",
                faction: "Alliance",
                image: "https://i.imgur.com/Y32vZpr.jpeg",
                lore: "**The Sentinel's Last Stand**\nThe veterans of Warsong Gulch have established a permanent forward operating base. It is a highly militarized Night Elf spire, designed to watch the southern approach from Ashenvale.\n\nUnlike the druids, the Sentinels believe only steel and arrows can save Hyjal. They view the Horde presence with extreme suspicion.",
                vendors: "**Sentinel Supply Officer:**\n- **Silverwing Recurve Bow:** A high-level blue ranged weapon with Night Elf aesthetics.\n- **Sentinel's Ration:** Best-in-slot food buff for Agility classes (Dried Fruit & Venison).\n- **Design: Elune's Tear:** A rare Jewelcrafting cut (+12 Stamina).\n- **Mount: Armored Nightsaber:** Requires Exalted with Silverwing Sentinels.",
                quests: "**Eternal Vigilance:**\n- **Holding the Line:** Intercept Horde supply caravans moving through the forest.\n- **The Missing Scout:** Find the sentinel lost in the nightmare fog and escort her back.\n- **Purging the Fel:** Destroy the Infernal summoning circles in the south."
            }
        ]
    },
    uldum: {
        title: "Zone 2: Uldum",
        levelRange: "[63-67]",
        subtitle: "Titan Sci-Fi meets Ancient Sands. The race for the Forge.",
        headerImage: "https://i.imgur.com/72RKZWw.jpeg",
        color: "text-yellow-400",
        bgGradient: "from-yellow-900/50 to-slate-900",
        intro: "**The Gates have opened, not by Deathwing, but by the Ethereum seeking godhood.**\n\nThe **Ethereum** seeks the **Forge of Origination** to rewrite reality and become energy-gods. This is an Indiana Jones-style race against time, but solemn and alien. **Titan Sci-Fi meets Ancient Egypt.**",
        dungeons: {
            origination: {
                name: "Halls of Origination",
                type: "5-Man Dungeon",
                level: "65-67",
                icon: Skull,
                color: "text-yellow-400",
                image: "https://i.imgur.com/Bhlb4vl.jpeg",
                lore: "**The Ultimate Weapon**\nThe Halls contain the reformatting device capable of wiping all life from Azeroth. The Ethereum, led by **Nexus-Prince Shaffar**, have hacked the security systems. Players must navigate the 'Maker's Rise', an elevator system connecting different floors.",
                geography: "**The Lay of the Land:**\nA vertical dungeon. The main hub is a massive elevator. Players choose which floor to visit: The Vault of Lights, The Tomb of Earth, or The Seats of the Makers. It feels like a high-tech pyramid.",
                philosophy: {
                    tbc: "**The 2007 Landscape:**\nUldum was a closed gate in Tanaris that teased players for years.",
                    plus: "**The Vision for Plus:**\nWe open the gate. This dungeon matches the scale of Blackrock Depths but with Titan technology. It is non-linear and massive."
                },
                bosses: [
                    "**Temple Guardian Anhuur:** \nUses Light magic and shielding songs. Players must deactivate the 'Hymn of Protection' switches.",
                    "**Earthrager Ptah:** \nA massive construct shaped like a scarab. He summons quicksand that slows movement.",
                    "**Ammunae the Construct:** \nThe tenders of the garden. They heal constantly unless players destroy the 'Seed Pods' surrounding them.",
                    "**Setesh:** \nA chaos construct relying on Void zones. It is a 'bullet-hell' style dodge fight.",
                    "**Isiset (Magic):** \nSplits into three images. Players must interrupt the 'Supernova' cast.",
                    "**Rajh, Construct of the Sun:** \nChanneling the power of a solar flare. He deals raid-wide fire damage that increases over time (Soft Enrage)."
                ],
                mechanics: "**Light Puzzles:**\nZelda-style light beam puzzles are required to unlock the final boss door. Players must angle mirrors to direct the beam."
            },
            lostcity: {
                name: "The Lost City",
                type: "5-Man Dungeon",
                level: "66",
                icon: Skull,
                color: "text-orange-400",
                image: "https://i.imgur.com/SrvLDaA.jpeg",
                lore: "**The Tol'vir Civil War**\nThe Neferset tribe has sided with the Ethereum, believing the 'flesh curse' can be reversed by Titan tech. The Ramkahen tribe remains loyal but is under siege. Players fight through the streets, commandeering chariots and using the city's own defenses against the invaders.",
                geography: "**The Lay of the Land:**\nAn outdoor urban warfare dungeon. It takes place in the streets of the capital. No loading screens between districts. You can mount up.",
                philosophy: {
                    tbc: "**The 2007 Landscape:**\nOutdoor dungeons (like Old Hillsbrad) were rare but beloved.",
                    plus: "**The Vision for Plus:**\nA fast-paced, high-density dungeon. It feels like a warzone, not a cave."
                },
                bosses: [
                    "**General Husam:** \nThe trap-master. He mines the floor with 'Shock Charges'.",
                    "**High Prophet Barim:** \nHe pulls the party into the Spirit Realm (Phase 2) where they must fight his soul.",
                    "**Lockmaw:** \nA pygmy-tamed crocodile. A simple beast fight with high physical damage.",
                    "**Augh:** \nThe secret pygmy rogue who stabs players in the back during the Lockmaw fight.",
                    "**Siamat, Lord of South Wind:** \nThe Djinn imprisoned in the city. He summons storms that knock players off the platforms."
                ],
                mechanics: "**Chariot Warfare:**\nPlayers can hijack Neferset Chariots to mow down trash packs, turning the dungeon into a vehicle combat section for 5 minutes."
            }
        },
        hubs: [
            {
                name: "Ramkahen City",
                faction: "Neutral (Tol'vir)",
                image: "https://i.imgur.com/oTD6vDh.jpeg",
                lore: "**The Jewel of the Desert**\nA thriving oasis city of canals and sandstone spires. The Ramkahen Tol'vir have opened their gates to outsiders for the first time, desperate for aid against their stone-skin brethren.\n\nThe city functions as the central trading hub for the zone, featuring a black market auction house and portal connections to capital cities.",
                vendors: "**Royal Bazaar:**\n- **Reins of the Grey Riding Camel:** A fast ground mount suited for desert terrain.\n- **Tol'vir Artifacts:** Vanity items that turn you into a statue or summon a scarab pet.\n- **Tabard of Ramkahen:** Exalted Reward.\n- **Schematic: Sand-Skimmer:** Engineering schematic for a desert land-speeder.",
                quests: "**Preserving the Past:**\n- **The Flesh Curse:** Research the disease turning Tol'vir soft and hunt for a cure in old tombs.\n- **Canal Patrol:** Maintain order on the waterways using armed barges to repel river bandits.\n- **Vote of Confidence:** Win the favor of the Council of Elders through various mini-games."
            },
            {
                name: "Sun-King's Reach",
                faction: "Horde",
                image: "https://i.imgur.com/Ym7AIGd.jpeg",
                lore: "**The Reliquary Expedition**\nThe Blood Elves have sent their elite archaeological division, The Reliquary, to plunder Uldum for Titan technology. Their camp is opulent, filled with floating cushions, magical lamps, and enslaved mana-wyrms.\n\nMagister Rommath oversees the operation, believing the secrets of the Titans could cure the Blood Elves' addiction.",
                vendors: "**Reliquary Supplier:**\n- **Arcane Dusts:** High-value reagents for high-level enchanting and crafting.\n- **Mana Scryer:** A trinket that detects hidden magic nodes on the map.\n- **Sun-Touched Scimitar:** Cosmetic Sword with a golden glow.\n- **Formula: Enchant Weapon - Sunfire:** Adds Fire damage to melee hits.",
                quests: "**Power Grabs:**\n- **Tapping the Lines:** Siphon energy from the obelisks to power the camp's defenses.\n- **Rivalry:** Sabotage the Explorer's League digsites by planting false evidence or destroying equipment.\n- **The Construct Core:** Hunt rogue golems to harvest their power cores."
            },
            {
                name: "The Iron League",
                faction: "Alliance",
                image: "https://i.imgur.com/R7lyjtG.jpeg",
                lore: "**Brann's Basecamp**\nThe Explorer's League has set up a massive excavation site. Dwarven tanks and gyrocopters dot the landscape. Brann Bronzebeard shouts orders from his tent, excited about every potsherd found.\n\nThe atmosphere is industrial and loud, with constant drilling and blasting as the Dwarves brute-force their way into sealed tombs.",
                vendors: "**League Provisioner:**\n- **Dwarven Hand Cannon:** A powerful BoE gun tailored for Dwarven Hunters.\n- **Excavator's Hat:** Vanity helm with a working mining light (illuminates dark areas).\n- **Pattern: Archaeologist's Satchel:** A 24-slot Herb/Ore bag.\n- **Brew of the Sands:** A fun alcoholic beverage that transforms the drinker.",
                quests: "**It belongs in a Museum!:**\n- **Digging Deep:** Use dynamite to uncover the entrance to a hidden vault.\n- **Titan Translations:** Collect tablets for Brann to decipher, revealing lore about the Old Gods.\n- **Escort the Cart:** classic escort mission protecting artifacts from Pygmy ambushes."
            }
        ]
    },
    grimbatol: {
        title: "Zone 3: Grim Batol",
        levelRange: "[67-70]",
        subtitle: "Industrial High Fantasy. The Dragonmaw War Machine.",
        headerImage: "https://i.imgur.com/nr9e666.jpeg",
        color: "text-red-500",
        bgGradient: "from-red-900/40 to-slate-950",
        intro: "**The Dragonmaw Clan has returned, and they have brought the Netherwing with them.**\n\n**Zuluhed the Whacked** has sent his elite riders back to Azeroth. They have seized Grim Batol to breed a new flight of '**Nether-Red**' hybrids. The atmosphere is **Industrial High Fantasy**: Oppressive, warlike, and choked with smoke.",
        dungeons: {
            grim: {
                name: "Grim Batol",
                type: "MEGA-DUNGEON",
                level: "68-70",
                icon: Skull,
                color: "text-red-500",
                image: "https://i.imgur.com/SzvCxKQ.jpeg",
                lore: "**A City of Dark Iron and Dragonfire**\nThe dwarven architecture of Grim Batol has been perverted by Orcish spikes and chains. It is a factory of war. The Dragonmaw are breeding a new flight of dragons here, twisting the red flight with nether energies.",
                geography: "**The Lay of the Land:**\nA massive city-dungeon with 11 bosses. It is divided into three wings: The City Sector (Urban), The Breeding Grounds (Caves), and The Siege Workshop (Industrial).",
                philosophy: {
                    tbc: "**The 2007 Landscape:**\nGrim Batol was a tease. A closed gate with a red dragon outside.",
                    plus: "**The Vision for Plus:**\nThe ultimate dungeon crawl. BRD 2.0. It is a 3-4 hour experience intended for dedicated groups."
                },
                bosses: [
                    "**General Umbriss:** \nUses 'Blitz' to charge players. Controls the City Sector.",
                    "**Forgemaster Throngus:** \nWields three different weapons (Shield, Sword, Mace) that change his abilities.",
                    "**Drahga Shadowburner:** \nSummons a Twilight Drake mid-fight. If the drake dies, he flees.",
                    "**Erudax, Duke of Below:** \nA Faceless One summoned from the depths. Casts 'Shadow Gale'.",
                    "**Modgud's Shade:** \nThe ghost of the Dark Iron Sorceress. She haunts the old throneroom.",
                    "**Broodmother Alextrasza (Captured):** \nNot a kill fight. You must break her chains while fighting off waves of Orcs.",
                    "**Zuluhed the Whacked:** \nThe Warlord himself. He wields the Demon Soul fragment. Teleports players to the Twisting Nether.",
                    "**Ascendant Lord Obsidius:** \nUses shadow clones that must be kited.",
                    "**High Warlock Netherkurse:** \nUses Fel-Fire to burn the room.",
                    "**The Behemoth:** \nA massive failed experiment. A patchwerk-style DPS check.",
                    "**Groyat, the Blind:** \nA bat-boss that uses echolocation. Players must stop moving when he screeches."
                ],
                mechanics: "**The Arena:**\nGrim Batol features an internal 'Ring of Blood' style arena. Players can trigger it to fight 5 waves of gladiators for extra loot."
            },
            redoubt: {
                name: "Vermillion Redoubt",
                type: "25-Man Raid",
                level: "Tier 4",
                icon: Crown,
                color: "text-orange-500",
                image: "https://i.imgur.com/ZOUb0tA.jpeg",
                lore: "**The Final Assault**\nAlliance and Horde airships circle the peak. Players must drop onto the landing pads and fight their way IN, then UP. Nekros Skullcrusher (Undead) wields the **Demon Soul Fragment**, controlling the twisted dragons.",
                geography: "**The Lay of the Land:**\nThe raid takes place on the spires OUTSIDE Grim Batol, high in the air. Falling off is a real danger.",
                philosophy: {
                    tbc: "**The 2007 Landscape:**\nDragonmaw were just generic bad guys.",
                    plus: "**The Vision for Plus:**\nWe give them a fleet. This is an aerial raid. It starts with a gunship battle."
                },
                bosses: [
                    "**Valiona and Theralion:** \nThe twin dragons. One is grounded, one is airborne. They switch.",
                    "**Halfus Wyrmbreaker:** \nHe has 5 drakes captured. You can choose which order to release them in, changing the fight's difficulty.",
                    "**Ascendant Council:** \nElemental masters. They merge into an Elementium Monstrosity offering a phase 3.",
                    "**Chogall:** \nThe ogre-mage makes a cameo. He corrupts the raid with 'Blood of the Old God'.",
                    "**Sinestra (Heroic Only):** \nDeathwing's prime consort. A brutal healing check.",
                    "**Nekros Skullcrusher:** \nThe final boss. He uses the Demon Soul to control the Red Flight. Players must steal the artifact."
                ],
                mechanics: "**Gunship Battle:**\nActual ship-to-ship combat where players man cannons, repel boarders, and fly jetpacks to the enemy ship to sabotage the engine."
            }
        },
        hubs: [
            {
                name: "Aerie Peak Command",
                faction: "Alliance",
                image: "https://i.imgur.com/M7On6Ry.jpeg",
                lore: "**High Altitude Warfare**\nThe Wildhammer Dwarves have mobilized their entire Gryphon fleet. The peak is a bustling airfield, with gryphons taking off and landing constantly. Falstad Wildhammer personally oversees the bombing runs on Grim Batol.\n\nThe base is built vertically into the mountain spire, with rope bridges connecting landing pads.",
                vendors: "**Wildhammer Quartermaster:**\n- **Reins of the Armored Snowy Gryphon:** An Epic flying mount (280% speed).\n- **Stormhammer:** A ranged weapon that has a chance to stun targets on hit.\n- **Wildhammer Tabard:** Exalted Reputation Reward.\n- **Recipe: Gryphon Treats:** Consumable that increases mount speed by 10% for 10 mins.",
                quests: "**Rule the Skies:**\n- **Death from Above:** Man the turrets of a flying gunship to carpet bomb Orcish siege engines.\n- **Dragon Hunting:** Engage in aerial dogfights against Red Drakes using your own Gryphon's abilities.\n- **Rescue Mission:** Drop behind enemy lines to save captured pilots."
            },
            {
                name: "Dragonmaw Port",
                faction: "Horde",
                image: "https://i.imgur.com/oI6w7qb.jpeg",
                lore: "**The Kor'kron Beachhead**\nGarrosh Hellscream has established a foothold on the twilight highlands coast. It is a brutal, metal-clad fortress. The Horde is here to crush the Twilight's Hammer and claim the port for themselves.\n\nThe port is a logistical nightmare of oil, iron, and blood. Orcish destroyers are docked, providing artillery support for the troops inland.",
                vendors: "**Legionnaire Supply:**\n- **Kor'kron Juggernaut Set:** Cosmetic Plate Transmog set (Garrosh style).\n- **Wolf Meat Stew:** High stamina food (+30 Stam) essential for tanking.\n- **Banner of the Horde:** A toy that plants a flag on a corpse.\n- **Plans: Reinforced Steel Shield:** High block value shield.",
                quests: "**Crush the Twilight:**\n- **Breaching the Gate:** Use goblin sapper charges to blow open the main road to Grim Batol.\n- **Nether Drake Studies:** Capture Nether-Drake eggs for research (and possible mounting).\n- **Naval Warfare:** Commandeer a turret to sink Twilight Cultist ships."
            },
            {
                name: "Vermillion Redoubt",
                faction: "Neutral (Red Flight)",
                image: "https://i.imgur.com/ZOUb0tA.jpeg",
                lore: "**The Dragon's Sanctuary**\nA hidden enclave of the Red Dragonflight, perched high above the Twilight Highlands. Here, Alexstrasza's youngest drakes coordinate with mortal heroes to heal the land. The area is lush with magical flora, a stark contrast to the blackened earth below.",
                vendors: "**Life-Binder's Hoard:**\n- **Ruby Drake Scale:** A trinket that summons a whelp guardian.\n- **Drake Scale Cloak:** High Fire Resistance cloak required for the Grim Batol raid.\n- **Red Dragon Orb:** Transforms the user into a Dragonkin for 5 minutes.\n- **Enchant Cloak - Fire Resistance:** +15 Fire Res.",
                quests: "**The Ruby Pact:**\n- **Healing the Land:** Use the Life-Binder's breath to restore scorched earth.\n- **Egg Rescue:** Retrieve stolen eggs from Dragonmaw poachers.\n- **The Betrayer:** hunt down a corrupted dragon who has joined Deathwing."
            }
        ]
    },
    systems: {
        professions: {
            title: "Reforged Professions",
            content: "**Old World Materials, New World Power**\nFel Iron is rare on Azeroth. Instead, Defenders utilize stockpiles of **Thorium, Arcanite, and Mooncloth**. Grand Masters teach 'Reforged' recipes combining Classic mats with **Primal Nethers**.\n\n**Example Recipes:**\n- **Blacksmithing:** *Truesilver Champion Reforged* (Lv 70 Epic). Requires 20x Truesilver, 5x Primal Nether.\n- **Alchemy:** *Elixir of the Old Gods*. +50 All Stats for 1 hour. Usable only in Azeroth.\n- **Tailoring:** *Mooncloth Robe of the Archmage*. High Intellect/Spirit set."
        },
        reputations: {
            title: "New Factions",
            content: "**Wardens of Nordrassil (Hyjal)**\nGuardians of the World Tree. Rewards Nature Resistance gear and Herb bags.\n\n**The Ramkahen (Uldum)**\nTol'vir guardians. Rewards Camel mounts and Agility Trinkets.\n\n**Dragonmaw Defectors (Grim Batol)**\nRebels fighting Zuluhed. Rewards Nether-Drake skins and Siege Weapon consumables."
        },
        badges: {
            title: "Badge of the Home Front",
            content: "**The Currency of Defense**\nJust as the Naaru offer **Badge of Justice** in Shattrath, the Defenders earn **Badge of the Home Front**.\n\n**Sources:**\n- Heroic Dungeons (Hyjal, Uldum, Grim Batol)\n- Daily Quests in 'The Mission' phase.\n- Rare Spawns in the open world.\n\n**Rewards:**\n- **Tier 4 Equivalent Armor** (Chest/Legs/Helm)\n- **Attunement Keys** for Heroic Modes.\n- **Pinnacle Quest** Items (The 'Core of the Titan' etc.)"
        }
    }
};

// --- HELPER: Text Formatter ---
const formatText = (text) => {
    if (!text) return null;
    const lines = text.split(/\\n|\n/);
    return lines.map((line, lineIndex) => {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        const content = parts.map((part, partIndex) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={partIndex} className="text-[#c29c55] font-bold">{part.slice(2, -2)}</strong>;
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

// --- COMPONENTS ---

// 1. The Detail Modal (Split Layout)
const DefenderModal = ({ isOpen, onClose, data }) => {
    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity" onClick={onClose} />

            {/* Modal Container */}
            <div className="relative w-full max-w-7xl bg-[#080808] border border-[#444] shadow-[0_0_60px_rgba(194,156,85,0.15)] rounded-lg flex flex-col h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300" style={{ borderImage: 'linear-gradient(to bottom, #c29c55, #5a4a2d) 1' }}>

                {/* Header */}
                <UnifiedHeader
                    icon={data.type?.includes("Raid") ? Crown : Skull}
                    section="The Defender's Codex"
                    sub="Intelligence Report"
                    title={data.name || data.title}
                    quote={data.intro ? "A World Worth Fighting For." : "Deep within enemy territory..."}
                    onClose={onClose}
                    accentColor="text-[#c29c55]"
                    background={data.image || data.headerImage}
                />

                {/* Content Area (Split Grid) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-full overflow-hidden">

                    {/* LEFT COLUMN: Lore, Geo, Mechanics (7 cols) */}
                    <div className="lg:col-span-7 p-8 overflow-y-auto custom-scrollbar border-r border-[#2f2f35] bg-[#0a0a0a]">
                        <div className="space-y-8">
                            {/* Architect's Notes (Philosophy) */}
                            {data.philosophy && (
                                <div>
                                    <h4 className="text-[#c29c55] font-serif text-sm mb-4 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                                        <BookOpen className="w-4 h-4" /> Architect's Notes
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="bg-[#1a1c22] p-4 rounded border-l-2 border-[#5c5c63]">
                                            <span className="text-[#5c5c63] text-xs font-bold uppercase tracking-widest block mb-1">Historical Context</span>
                                            <p className="text-[#aeb6bf] text-sm leading-relaxed">{formatText(data.philosophy.tbc)}</p>
                                        </div>
                                        <div className="bg-[#0b0d10] p-4 rounded border-l-2 border-[#c29c55]">
                                            <span className="text-[#c29c55] text-xs font-bold uppercase tracking-widest block mb-1">The Vision for Plus</span>
                                            <p className="text-[#e0e0e0] text-sm leading-relaxed">{formatText(data.philosophy.plus)}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Lore Block */}
                            {(data.lore || data.content) && (
                                <div className="bg-[#111] p-5 rounded border border-[#2f2f35]">
                                    <h4 className="text-[#c29c55] font-serif text-sm mb-3 flex items-center gap-2">
                                        <Scroll className="w-4 h-4" /> Operational Briefing
                                    </h4>
                                    <p className="text-[#aeb6bf] text-sm whitespace-pre-line leading-relaxed">
                                        {formatText(data.lore || data.content)}
                                    </p>
                                </div>
                            )}

                            {/* Geography */}
                            {data.geography && (
                                <div className="bg-[#111] p-5 rounded border border-[#2f2f35]">
                                    <h4 className="text-[#c29c55] font-serif text-sm mb-3 flex items-center gap-2">
                                        <Compass className="w-4 h-4" /> The Lay of the Land
                                    </h4>
                                    <p className="text-[#aeb6bf] text-sm whitespace-pre-line leading-relaxed">
                                        {formatText(data.geography)}
                                    </p>
                                </div>
                            )}

                            {/* Mechanics */}
                            {data.mechanics && (
                                <div className="bg-[#1a1c22] p-5 rounded border border-[#c29c55]/30">
                                    <h4 className="text-[#c29c55] font-serif text-sm mb-3 flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4" /> Key Mechanics
                                    </h4>
                                    <p className="text-[#e0e0e0] text-sm whitespace-pre-line leading-relaxed">
                                        {formatText(data.mechanics)}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Bosses (5 cols) */}
                    {/* RIGHT COLUMN: Bosses OR Hub Data (5 cols) */}
                    <div className="lg:col-span-5 p-8 bg-[#080808] overflow-y-auto custom-scrollbar">
                        {data.bosses && (
                            <div className="mb-8">
                                <h4 className="text-[#c29c55] font-serif text-sm mb-4 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                                    <Skull className="w-4 h-4" /> Encounter Journal
                                </h4>
                                <ul className="space-y-4">
                                    {data.bosses.map((boss, i) => {
                                        // Parse "Name: Desc" format
                                        const separatorIndex = boss.indexOf(':');
                                        const name = separatorIndex === -1 ? boss.replace(/\*\*/g, '') : boss.substring(0, separatorIndex).replace(/\*\*/g, '').trim();
                                        const desc = separatorIndex === -1 ? null : boss.substring(separatorIndex + 1).trim();

                                        return (
                                            <li key={i} className="flex items-start gap-3 group">
                                                <div className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-[#1a1c22] border border-[#2f2f35] text-[10px] text-[#5c5c63] font-serif shrink-0 group-hover:border-[#c29c55] group-hover:text-[#c29c55] transition-colors">
                                                    {i + 1}
                                                </div>
                                                <div className="text-sm">
                                                    <strong className="text-[#e0e0e0] block mb-1 group-hover:text-white transition-colors">{name}</strong>
                                                    {desc && <span className="text-[#6b7280] text-xs leading-tight block">{formatText(desc)}</span>}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}

                        {/* Hub Data: Vendors & Quests */}
                        {(!data.bosses && (data.vendors || data.quests)) && (
                            <div className="space-y-10">
                                {data.vendors && (
                                    <div className="group">
                                        <h4 className="text-[#c29c55] font-serif text-sm mb-4 flex items-center gap-2 border-b border-[#2f2f35] pb-2 group-hover:text-white transition-colors">
                                            <Coins className="w-4 h-4" /> Logistics & Rewards
                                        </h4>
                                        <div className="text-[#aeb6bf] text-sm whitespace-pre-line leading-relaxed pl-2 border-l border-[#2f2f35] group-hover:border-[#c29c55] transition-colors">
                                            {formatText(data.vendors)}
                                        </div>
                                    </div>
                                )}

                                {data.quests && (
                                    <div className="group">
                                        <h4 className="text-[#c29c55] font-serif text-sm mb-4 flex items-center gap-2 border-b border-[#2f2f35] pb-2 group-hover:text-white transition-colors">
                                            <Scroll className="w-4 h-4" /> Mission Objectives
                                        </h4>
                                        <div className="text-[#aeb6bf] text-sm whitespace-pre-line leading-relaxed pl-2 border-l border-[#2f2f35] group-hover:border-[#c29c55] transition-colors">
                                            {formatText(data.quests)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {(!data.bosses && !data.vendors && !data.quests) && (
                            <div className="text-center py-20 opacity-30">
                                <Shield size={48} className="mx-auto mb-4" />
                                <p className="text-xs uppercase tracking-widest">No Tactical Data</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


// 2. The Card (Clickable)
const DefenderCard = ({ item, onClick }) => (
    <div
        onClick={() => onClick(item)}
        className="group relative bg-[#0f101a] border border-slate-800 hover:border-[#c29c55]/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col h-full"
    >
        {/* Background Image (If available) */}
        {item.image && (
            <div className="absolute inset-0 z-0">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f101a] via-[#0f101a]/80 to-transparent" />
            </div>
        )}

        {/* Card Header Strip */}
        <div className="relative z-10 bg-[#1a1c29]/80 backdrop-blur-sm px-5 py-4 border-b border-slate-800 flex justify-between items-center group-hover:bg-[#202230]/90 transition-colors">
            <div className="flex items-center gap-3">
                {item.icon && <item.icon className={`${item.color} transition-transform group-hover:scale-110 duration-300`} size={20} />}
                <span className="text-[#c29c55] font-hero font-normal uppercase tracking-widest group-hover:text-white drop-shadow-md text-xs md:text-sm">{item.name || item.title}</span>
            </div>
            {item.type && (
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border border-${item.color.split('-')[1]}-900 bg-${item.color.split('-')[1]}-900/10 ${item.color} uppercase tracking-wider`}>
                    {item.type}
                </span>
            )}
        </div>

        {/* Card Body */}
        <div className="relative z-10 p-6 flex-grow flex flex-col justify-between">
            <div className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-4 group-hover:text-slate-300 transition-colors text-shadow-sm">
                {item.lore ? formatText(item.lore) : formatText(item.content)}
            </div>

            {/* Enter / Action Cue */}
            <div className="flex items-center justify-end gap-2 text-[#c29c55] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                Briefing <ArrowRight size={14} />
            </div>
        </div>
    </div>
);

// --- MAIN COMPONENT ---
const DefendersOfAzeroth = () => {
    const [activeTab, setActiveTab] = useState('mission');
    const [selectedItem, setSelectedItem] = useState(null);

    const tabs = [
        { id: 'mission', label: 'The Mission', icon: <img src="https://i.imgur.com/Zdo4toj.jpeg" className="w-5 h-5 rounded-sm object-cover" /> },
        { id: 'systems', label: 'Systems & Logistics', icon: <img src="https://i.imgur.com/49bwGfE.jpeg" className="w-5 h-5 rounded-sm object-cover" /> },
        { id: 'hyjal', label: 'Zone 1: Mount Hyjal', icon: <img src="https://i.imgur.com/QDlRYi2.jpeg" className="w-5 h-5 rounded-sm object-cover" /> },
        { id: 'uldum', label: 'Zone 2: Uldum', icon: <img src="https://i.imgur.com/59Z4zrc.jpeg" className="w-5 h-5 rounded-sm object-cover" /> },
        { id: 'grimbatol', label: 'Zone 3: Grim Batol', icon: <img src="https://i.imgur.com/TxR5l6O.jpeg" className="w-5 h-5 rounded-sm object-cover" /> },
    ];

    return (
        <div className="min-h-screen bg-[#050510] pb-20 font-sans selection:bg-[#c29c55]/30">
            <UnifiedHeader
                title="Defenders of Azeroth"
                sub="The Home Front Campaign (Lvl 60-70)"
                section="Grand Campaign"
                quote="While the armies of the Horde and Alliance storm the Dark Portal, a dedicated few remain behind to protect the world we left."
                icon={<Shield className="text-[#c29c55]" size={32} />}
            />

            {/* Intro Block */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
                <div className="bg-gradient-to-r from-slate-900 to-[#050510] border-l-4 border-[#c29c55] rounded-r-lg p-6 shadow-2xl">
                    <h3 className="text-xl text-[#c29c55] mb-2 font-hero font-normal uppercase tracking-wider drop-shadow-md">A World Worth Fighting For</h3>
                    <p className="text-slate-300 max-w-3xl leading-relaxed">
                        While the armies of the Horde and Alliance storm the Dark Portal, a dedicated few remain behind.
                        The <strong>Defenders of Azeroth</strong> campaign offers a complete 60-70 leveling alternative focused on
                        political intrigue, healing the world, and grounded high-fantasy adventure.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Navigation */}
                <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-xl backdrop-blur-md inline-flex">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-hero font-normal uppercase tracking-widest drop-shadow-md text-xs transition-all duration-200 border ${activeTab === tab.id
                                ? 'bg-[#1a1c29] text-[#c29c55] border-[#c29c55]/50 shadow-[0_0_15px_rgba(255,209,0,0.1)]'
                                : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-900'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="space-y-12 animate-fadeIn">

                    {/* Mission Tab */}
                    {activeTab === 'mission' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h2 className="text-3xl text-[#c29c55] font-hero font-normal uppercase tracking-widest drop-shadow-md">The Path Less Traveled</h2>
                                <div className="prose prose-invert">
                                    <p className="text-xl text-slate-300 leading-relaxed italic">
                                        "Heroes look to the stars. Defenders look to the soil."
                                    </p>
                                    <p className="text-slate-400 leading-relaxed">
                                        The Defender's path is not about conquering new worlds, but saving the one we have. It is a journey that takes you from the roots of the World Tree to the titan vaults of Uldum.
                                        <br /><br />
                                        This campaign is designed for players who prefer **Classic WoW's** pacing—ground mounts, world exploration, and faction politics—over the sci-fi intensity of Outland.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#0f101a] border border-slate-800 rounded-xl p-6">
                                <h3 className="font-hero font-normal uppercase tracking-widest text-[#c29c55] mb-4 border-b border-slate-800 pb-2 drop-shadow-md">Campaign At A Glance</h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Level Range</span>
                                        <span className="text-white font-mono">60 - 70</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Travel Mode</span>
                                        <span className="text-white font-mono">Ground / Flight Path</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Key Villains</span>
                                        <span className="text-white font-mono">Scourge, Twilight's Hammer</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Legendary Type</span>
                                        <span className="text-white font-mono">Faction / Political</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Systems Tab */}
                    {activeTab === 'systems' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(defenderData.systems).map(([key, item]) => (
                                <DefenderCard key={key} item={{ ...item, icon: Hammer, color: 'text-blue-400', type: 'System' }} onClick={setSelectedItem} />
                            ))}
                        </div>
                    )}

                    {/* Zone Tabs */}
                    {['hyjal', 'uldum', 'grimbatol'].includes(activeTab) && (
                        <div className="space-y-10">
                            {/* Zone Header */}
                            <div className="relative rounded-2xl overflow-hidden p-8 md:p-12 border border-white/10 shadow-2xl">
                                {/* Background Image Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img src={defenderData[activeTab].headerImage} className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                                    <div className={`absolute inset-0 bg-gradient-to-r ${defenderData[activeTab].bgGradient} opacity-90 mix-blend-multiply`}></div>
                                </div>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>

                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-2 text-[#c29c55] font-hero font-normal uppercase tracking-widest text-xs drop-shadow-sm">
                                        <Map size={14} /> Campaign Sector
                                    </div>
                                    <h1 className="text-4xl md:text-5xl text-[#c29c55] font-hero font-normal uppercase tracking-widest drop-shadow-lg">
                                        {defenderData[activeTab].title} <span className="text-white/50">{defenderData[activeTab].levelRange}</span>
                                    </h1>
                                    <p className="text-white/90 text-xl font-light italic max-w-2xl drop-shadow-md">{defenderData[activeTab].subtitle}</p>
                                    <div className="pt-6 max-w-3xl text-sm md:text-base text-white/80 leading-relaxed font-sans drop-shadow-md">
                                        {formatText(defenderData[activeTab].intro)}
                                    </div>
                                </div>
                            </div>

                            {/* Dungeons Grid */}
                            <div>
                                <h3 className="text-2xl text-[#c29c55] mb-6 flex items-center gap-3 font-hero font-normal uppercase tracking-widest drop-shadow-md">
                                    <Skull className="text-red-500" /> Dungeons & Raids
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {Object.values(defenderData[activeTab].dungeons).map((dungeon, idx) => (
                                        <DefenderCard key={idx} item={dungeon} onClick={setSelectedItem} />
                                    ))}
                                </div>
                            </div>

                            {/* Hubs Grid */}
                            <div>
                                <h3 className="text-2xl text-[#c29c55] mb-6 flex items-center gap-3 font-hero font-normal uppercase tracking-widest drop-shadow-md">
                                    <Anchor className="text-blue-400" /> Strategic Hubs
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {defenderData[activeTab].hubs.map((hub, idx) => (
                                        <DefenderCard
                                            key={idx}
                                            item={{ ...hub, icon: Users, color: 'text-slate-400', type: hub.faction }}
                                            onClick={setSelectedItem}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            <DefenderModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                data={selectedItem}
            />
        </div>
    );
};

export default DefendersOfAzeroth;
