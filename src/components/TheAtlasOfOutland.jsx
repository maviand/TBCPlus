import React, { useState, useEffect } from 'react';
import { 
  Map as MapIcon, Skull, Crown, Globe, Sword, Shield, Zap, 
  Clock, AlertTriangle, Anchor, Compass, Scroll, X, Eye, Hammer, 
  BookOpen, Flame, Droplet, Mountain, ArrowRight
} from 'lucide-react';

const TheAtlasOfOutland = () => {
  const [activeContinent, setActiveContinent] = useState('outland');
  const [activeZone, setActiveZone] = useState('hellfire'); 
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to parse bold text
  const formatText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, lineIndex) => {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        const content = parts.map((part, partIndex) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={partIndex} className="text-[#ffd100] font-bold">{part.slice(2, -2)}</strong>;
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

  // --- CONTINENT DATA ---
  const continents = {
    outland: { name: 'Outland', icon: <Globe className="w-4 h-4"/> },
    azeroth: { name: 'Azeroth (The Lost Zones)', icon: <Anchor className="w-4 h-4"/> },
    cot: { name: 'Caverns of Time', icon: <Clock className="w-4 h-4"/> },
  };

  // --- ZONES DATA ---
  const zones = {
    outland: {
      hellfire: { name: 'Hellfire Peninsula', icon: <Flame className="w-4 h-4"/> },
      zangar: { name: 'Zangarmarsh', icon: <Droplet className="w-4 h-4"/> },
      terokkar: { name: 'Terokkar Forest', icon: <Scroll className="w-4 h-4"/> },
      nagrand: { name: 'Nagrand', icon: <Mountain className="w-4 h-4"/> },
      blades: { name: 'Blade\'s Edge', icon: <Sword className="w-4 h-4"/> },
      nether: { name: 'Netherstorm', icon: <Zap className="w-4 h-4"/> },
      shadow: { name: 'Shadowmoon Valley', icon: <Skull className="w-4 h-4"/> },
    },
    azeroth: {
      eastern: { name: 'Eastern Kingdoms', icon: <Shield className="w-4 h-4"/> },
      kalimdor: { name: 'Kalimdor', icon: <Compass className="w-4 h-4"/> },
    },
    cot: {
      timeways: { name: 'The Timeways', icon: <Clock className="w-4 h-4"/> }
    }
  };

  // --- CONTENT DATA ---
  const contentData = {
    // --- OUTLAND ---
    hellfire: [
      {
        name: 'Shattered Halls (Retuned)',
        type: '5-Man Dungeon',
        image: 'https://i.imgur.com/AO7Z0zk.jpeg',
        lore: "The Shattered Halls serve as the cruel heart of the Fel Horde's operations in Hellfire Peninsula. It is here that Warchief Kargath Bladefist, the original leader of the Shattered Hand clan, trains his elite legionnaires. Unlike the chaotic, bloodthirsty orcs of the past, the Fel Horde here fights with disciplined, military precision. The halls are a gauntlet of pain, lined with spectators cheering for the execution of intruders. To enter is to challenge the very definition of brutality.",
        geography: "**The Lay of the Land:** \nThe Halls are a claustrophobic, linear gauntlet designed to break the spirit. Players must navigate the 'Legionnaire's Barracks', a densely packed training ground, before reaching the 'Arena of Blood', where spectators throw debris at the party. The final run is 'The Walk of Shame', a hallway filled with infinite spawns that requires fire to cleanse.",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nIn classic TBC, Shattered Halls was the 'optimal grind' because Paladins could pull 50 mobs at once. It reduced a legendary location to a mindless AoE farm.",
          plus: "**The Vision for Plus:** \nWe wanted to preserve the 'Legion Army' feel but punish the 'braindead' playstyle. Trash packs are now smaller but significantly deadlier. 'Shattered Hand Legionnaires' now apply a stacking 'Sunder Armor' that reduces tank armor by 10% per stack, forcing kiting or off-tanking in 5-man groups. 'Fel-Eyed Sharpshooters' ignore threat to target random healers with 'Mortal Shot' (75% healing reduction). This forces DPS to single-target them down immediately, breaking the AoE flow."
        },
        bosses: [
            "**Grand Warlock Nethekurse:** \nA master of fel magic who uses the souls of the fallen to fuel his spells. \n*Mechanic:* 'Lesser Shadow Fissure' creates a void zone that expands over time, consuming the room. Players must kill him before they run out of floor space.",
            "**Warbringer O'mrogg:** \nAn ogre magi with two heads and zero patience. \n*Mechanic:* 'Threat Drop'. He periodically wipes threat on his current target, forcing the tank to taunt immediately or lose a DPS.",
            "**Warchief Kargath Bladefist:** \nThe legend himself. \n*Mechanic:* 'The Crowd Goes Wild'. If the fight lasts too long, the spectators in the arena begin throwing rocks and firebombs into the pit, creating a soft enrage."
        ],
        loot: "T4-Equivalent Off-pieces, Primal Nethers."
      },
      {
        name: 'Legion Assault',
        type: 'World Event',
        image: 'https://i.imgur.com/bkyQmF5.jpeg',
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
      }
    ],
    terokkar: [
      {
        name: 'Arakkoa Ritual',
        type: 'World Event',
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
            "**Twilight Ascendant:** \nAn elementalist who shifts forms (Fire, Frost, Shadow). Players must use the environment (lava pools, ice patches) to counter his forms.",
            "**Council of Ancestors:** \nThree spirits of the Mag'har who are being tortured. Players must heal them to full to break the mind control while interrupting their lethal casts.",
            "**Garrosh Hellscream (Corrupted):** \nThe final encounter. Garrosh is powered by Void energy. He uses 'Horde Strength' (cleaves) and 'Void Despair' (mind control)."
        ],
        mechanics: "**Despair Meter:** \nYou cannot kill Garrosh. You must heal his spirit. Players must kill 'Doubts' (adds) that spawn. If a Doubt reaches Garrosh, his Despair increases. If Despair reaches 100%, he enrages and wipes the raid. At 0% Despair, the corruption leaves him."
      },
      {
        name: 'The Great Hunt',
        type: 'World Event',
        image: 'https://i.imgur.com/jCHAzlN.jpeg',
        lore: "Hemet Nesingwary has issued a challenge to all hunters of Azeroth. The legendary 'Ban'thalos', a Great White Clefthoof of immense size and power, has been spotted migrating through the plains of Nagrand. This beast is older than the Orcs themselves, with hide as thick as iron. It is not a creature that can be killed by a single hero; it requires a hunting party.",
        geography: "**The Lay of the Land:** \nThe entire zone of Nagrand is the arena. Ban'thalos has no spawn point; he migrates. Players must use 'Tracking' (Hunters) or 'Scouting' (Shamans) to find his current path.",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nNagrand is the quintessential hunting zone, but the elite quests were static.",
          plus: "**The Vision for Plus:** \nWe wanted a world boss that wasn't just a dragon standing still in a field waiting to be tanked. Ban'thalos roams the entire zone. Players have to physically track him, set traps, and kite him across the map. It turns the zone into a dynamic hunting ground where positioning matters."
        },
        mechanics: "**The Chase:** \nPlayers must gather 'Pungent Bait' from local wildlife to lure him to stop. \n\n**The Trap:** \nOnce engaged, he takes 90% reduced damage due to 'Thick Hide'. Leatherworkers must place 'Trophy Traps' in his path. When he charges over a trap, he is stunned and his armor is broken for 20 seconds. This creates a cycle of 'Lure -> Trap -> Burn -> Chase'."
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
            "**Grom's-Bane the Digger:** \nThe Ogre foreman who broke the seal. He fights with a massive shovel and throws dynamite. He inadvertently triggers Apexis defenses during the fight.",
            "**Corrupted Sentinel:** \nA massive crystal golem. It is immune to normal damage.",
            "**Echo of the Conclave:** \nA being of pure light and sound. It has no aggro table and attacks the entire party with light waves."
        ],
        mechanics: "**Color Matching:** \nThe Corrupted Sentinel shifts its affinity between Red, Blue, and Yellow. Players must find colored crystals in the room and stand in the corresponding light beams to attune their weapons. Hitting the boss with the wrong color attunement reflects 200% damage back to the player."
      },
      {
        name: 'Gronn Uprising',
        type: 'World Event',
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
        image: 'https://i.imgur.com/ls3OLJ6.png',
        lore: "The sky of Netherstorm is tearing open. Dimensius the All-Devouring, the Void Lord who destroyed the Ethereal homeworld, is manifesting in a chaotic void storm. The Protectorate has crafted a 'Mana-Bomb' capable of sealing the rift, but they need a team to deploy it into the heart of the storm and defend it until detonation.",
        geography: "**The Lay of the Land:** \nThe raid takes place on the 'Protectorate Flagship', a massive Ethereal vessel flying into the storm, and on floating debris chunks in the Twisting Nether itself.",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nNetherstorm is sci-fi fantasy, but the raids were mostly indoors (The Eye).",
          plus: "**The Vision for Plus:** \n'The Rip' is our take on a space battle. It takes place on moving platforms in the Twisting Nether. It's a 3-boss raid designed to be short, intense, and visually distinct from the stone and fire of other raids."
        },
        bosses: [
            "**The Rift-Lord:** \nA massive Void-Reaver construct patrolling the outer platforms. He launches 'Arcane Orbs' that must be intercepted.",
            "**A'kilo & H'kilo:** \nThe Twin Ethereals. One uses Void magic, the other Arcane. They swap places and health percentages.",
            "**Harbinger of Dimensius:** \nA fragment of the Void Lord himself. He tries to consume the Mana-Bomb."
        ],
        mechanics: "**Gravity Shift:** \nDuring the final fight, gravity reverses every minute. Players must click on heavy 'Mana-Pylons' to anchor themselves or be flung into the Nether. While anchored, movement is slowed by 90%, making dodging void zones difficult."
      },
      {
        name: 'The Ethereum Vaults',
        type: '5-Man Dungeon',
        image: 'https://i.imgur.com/EnsRdiT.jpeg',
        lore: "The Ethereum (hostile Ethereals) have breached a high-security Protectorate vault containing dangerous Void artifacts. Nexus-Stalker Xy'rath is leading the raid to steal the 'Codes of Creation'. It is a heist gone wrong, and you are the cleanup crew.",
        geography: "**The Lay of the Land:** \nA high-tech containment facility. It is clean, white, and sterile, filled with arcane conduits and stasis fields. It feels like a laboratory, distinct from the dirty mana-forges.",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nMost dungeons are slow, methodical clears.",
          plus: "**The Vision for Plus:** \nThis is a 'Heist'. It has a global timer. The faster you go, the more 'Data Caches' you save, and the more loot you get. It encourages speed-running, risk-taking, and big pulls."
        },
        bosses: [
            "**Nexus-Stalker Xy'rath:** \nAn assassin who blinks behind players and attempts to backstab them.",
            "**Overloader G'huul:** \nA technician trying to hack the main mainframe. He summons turrets that must be destroyed.",
            "**High-Trader Zax:** \nThe mastermind. He uses the stolen artifacts against you."
        ],
        mechanics: "**The Timer:** \nLoot is determined by how many caches remain un-hacked when the final boss dies. \n3 Caches Saved = Extra Badge + Epic Gem. \n0 Caches Saved = Standard Blue Loot. \nThis creates a 'Gold/Silver/Bronze' medal feeling for every run."
      },
      {
        name: 'Nether-Storm',
        type: 'World Event',
        image: 'https://i.imgur.com/8yGzRH8.jpeg',
        lore: "The Mana-Forges have overloaded, causing chaotic arcane storms to tear through the eco-domes. Gravity in the zone becomes unstable.",
        geography: "**The Lay of the Land:** \nThe eco-domes have shattered. Gravity is low. Debris floats in the air, creating jumping puzzles.",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nNetherstorm was a great zone for flying, but the ground gameplay was standard.",
          plus: "**The Vision for Plus:** \nThis event turns the zone into a platformer. Gravity is reduced, allowing massive jumps. It creates a playground for physics-based gameplay that WoW rarely utilizes."
        },
        mechanics: "**Arcane Anomalies:** \nPlayers must jump up floating debris to reach 'Storm Clouds' and siphon energy using an 'Engineering Extractor'. \n**The Tempest:** \nDefeating enough anomalies summons the Arcane Tempest, a giant elemental that can only be damaged by throwing 'Siphoned Energy' globes at it."
      }
    ],
    shadow: [
      {
        name: 'The Undercity of Karabor',
        type: 'MEGA-DUNGEON (15 Bosses)',
        image: 'https://i.imgur.com/uvSunjP.jpeg',
        lore: "We all know the Black Temple. But beneath it lies a sprawling subterranean city, the true seat of the Shadow Council. It is a labyrinth of torture chambers, demon kennels, and forbidden libraries that predates Illidan's occupation. It is where the Council creates their Fel-Orcs and summons their darkest demons.",
        geography: "**The Lay of the Land:** \nA massive, sprawling complex. It has distinct districts: The 'Prison Wing' (Iron and blood), The 'Library of Shadows' (Ancient scrolls and ghosts), The 'Summoning Pits' (Fel lava and stone), and the 'Residential District' (where the Council lives).",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nOutland lacked a true 'Dungeon Crawl' like Blackrock Depths.",
          plus: "**The Vision for Plus:** \nYou asked for a Blackrock Depths equivalent. This is it. It is not a linear hallway. It is a CITY. \n\n1. **Non-Linearity:** There are 4 different entrances in Shadowmoon Valley. You can choose to infiltrate the 'Prison Wing', the 'Library', or the 'Summoning Pits'. \n2. **Social Hub:** Inside the dungeon, there is a neutral zone, 'The Warlock's Walk', where players can interact with shady vendors to buy rare reagents, repair, and even pickpocket elite mobs. \n3. **The 'Bar':** Just like the Grim Guzzler, there is a 'Succubus Club' event that can be peaceful or hostile depending on player choices. \n4. **Scale:** It takes 3-4 hours to clear fully, but can be done in 45-minute chunks. It is the ultimate 5-man challenge."
        },
        bosses: ['The Torturer', 'High-Summoner', 'The Council of Six', 'Kanrethad Ebonlocke (Young)', 'The Pit Lord\'s Avatar', '...and 10 more.'],
        mechanics: "**The Shadow Keys:** \nPlayers must collect keys (Skull Key, Bone Key) to unlock shortcuts (gates, teleporters) that persist across runs. This gives a sense of progression within the dungeon itself, allowing seasoned players to skip to specific bosses."
      },
      {
        name: 'Halls of Damnation',
        type: '5-Man Dungeon',
        image: 'https://i.imgur.com/r2BiSNS.jpeg',
        lore: "Hidden near the Hand of Gul'dan, this is the Shadow Council's primary ritual site. They are attempting to complete the Cipher of Damnation to summon Gul'dan's true master.",
        geography: "**The Lay of the Land:** \nA volcanic cavern lit by green fire. The walls are lined with cages containing prisoners being drained of their souls.",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nThe Cipher of Damnation questline was epic but ended in a field boss.",
          plus: "**The Vision for Plus:** \nThis is a prequel to the 'Cipher of Damnation' questline. It gives context to the zone's story. We wanted a dungeon that felt like a race against a clock, with cultists constantly channeling rituals that buff the final boss if not interrupted."
        },
        bosses: [
            "**Shadow-Lord Xiraxis:** \nA warlock who summons eyes that must be killed.",
            "**Gorgoloth:** \nA massive doomguard who cleaves and stomps."
        ],
        mechanics: "**Simultaneous CC:** \nThe final boss is shielded by 4 pylons. Players must interrupt 4 channelers at the exact same time to drop the shield. Requires coordination or voice chat."
      },
      {
        name: 'Netherwing Mines',
        type: '5-Man Heroic Only',
        image: 'https://i.imgur.com/haO6Z4n.jpeg',
        lore: "Dragonmaw Orcs dug too deep and found a vault of Fel-corrupted drakes. The mines are unstable and filled with gas.",
        geography: "**The Lay of the Land:** \nA twisting network of mine shafts, glowing with unstable Nether crystals. Some tunnels are flooded with gas; others are infested with mutated flayers.",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nThe Netherwing grind is iconic but lacked a dedicated instance.",
          plus: "**The Vision for Plus:** \nThis fills that gap. It is 'Heroic Only' to serve as a capstone for the reputation grind. The final boss drops a mount, keeping it relevant forever."
        },
        bosses: [
            "**Brok'gar:** An Orc overseer with a whip.",
            "**Mutated Drake:** A drake that spews acid pools.",
            "**Dragonmaw Overlord:** He rides a drake and fights you in the air and ground."
        ],
        mechanics: "**Fel-Gas:** \nSections of the mine fill with gas. Players must move from 'Air Pocket' to 'Air Pocket' to survive, fighting mobs inside these small safe zones."
      }
    ],

    // --- AZEROTH (THE LOST ZONES) ---
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
            "**Scourge Abomination:** \nA patchwerk-style tank check that blocks the road. He hooks players away from the cart.",
            "**Necromancer:** \nSummons skeletons from the corpses of the caravan guards. Players must burn the bodies to stop the summons.",
            "**Crypt Lord:** \nBurrows under the caravan and tries to capsize it. Players must stun him when he surfaces."
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
            "**Cultist Grandmaster:** \nTransforms into a demon at 50%. He uses 'Mind Control' to turn the party against each other.",
            "**Fel-Guard Captain:** \nA brutal melee fighter with a Mortal Strike and a Cleave. He summons hounds.",
            "**Echo of Medivh:** \nA magical anomaly created by the portal's energies. He casts random spells from the Karazhan Chess Event."
        ],
        mechanics: "**The Widening:** \nThe final boss room gets smaller as the portal grows, acting as a soft enrage timer. Players must defeat the boss before the portal consumes the entire platform."
      },
      {
        name: 'Deadwind Catacombs',
        type: 'Lvl 50-55 Dungeon (Deadwind Pass)',
        image: 'https://i.imgur.com/WfksQpV.jpeg',
        lore: "Beneath the tower of Karazhan, the ley lines are bleeding. Ethereals have arrived to harvest the chaotic energy, but they have awakened the restless spirits of the tower's previous victims. The Crypts are open, and the dead are angry.",
        geography: "**The Lay of the Land:** \nA mix of natural caves and crafted stone crypts. The air is filled with purple arcane energy and grey ghostly mist.",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nDeadwind Pass is an empty zone with incredible atmosphere.",
          plus: "**The Vision for Plus:** \nThis dungeon gives it life. It foreshadows the Ethereal presence in Outland and introduces players to their 'tech-magic' aesthetic early. It also serves as a narrative hook for the Karazhan raid later."
        },
        bosses: [
            "**Ley-Walker:** \nAn Ethereal draining a ley-line node. He uses 'Arcane Explosion' and 'Blink'.",
            "**Ethereal Raider:** \nUses 'Stasis Chambers' to trap players. You must break the stasis to free your healer.",
            "**Mana-Devourer:** \nA giant mana wyrm that explodes on death. It drains healer mana if not interrupted."
        ],
        mechanics: "**Ley-Lines:** \nPlayers must stand in Ley-Line beams to regain mana, but they take arcane damage every second. It's a risk/reward mechanic for healers and casters."
      }
    ],
    kalimdor: [
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
            "**Highborne Spirit:** \nUses Frost magic and blinks away. She summons mirror images.",
            "**Arcane Construct:** \nA golem that must be shattered. It reflects spells.",
            "**Fel-Touched Elf:** \nA Blood Elf emissary who has succumbed to Fel. He uses Warlock abilities."
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
            "**Blood Elf Saboteur:** \nStealths and uses explosives. You must use a flare to find him.",
            "**Mutated Ravager:** \nA beast warped by the crash radiation. It has random mutations (extra damage, extra speed, or poison).",
            "**Tech-Thief:** \nA goblin trying to steal a generator. He rides a shredder."
        ],
        mechanics: "**Radiation:** \nPatches of the floor are irradiated. Players must use 'Hazmat Suits' (found in the dungeon) to traverse these areas safely, or take massive damage."
      }
    ],

    // --- CAVERNS OF TIME ---
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
            "**Dreadlord Mal'Gathis:** \nUses Sleep and Carrion Swarm. He summons Ghouls.",
            "**Baron Rivendare (Alive):** \nFights with the Holy Light before his fall. He heals himself.",
            "**Grand Marshal Garithos:** \nA mounted knight who summons footmen. He has an aura that reduces non-Human damage."
        ],
        mechanics: "**Morale:** \nSave Blood Elf survivors to buff Kael'thas's damage. If his morale drops too low, he stops casting and you get overwhelmed."
      },
      {
        name: 'The Wardens\' Prison',
        type: '5-Man Dungeon',
        image: 'https://i.imgur.com/YS1j7xX.jpeg',
        lore: "The Barrow Deeps, thousands of years ago. The Infinite Dragonflight is attacking Maiev Shadowsong's prison to free Illidan early and disrupt the timeline. You must hold the line.",
        geography: "**The Lay of the Land:** \nA deep, dark Night Elf prison. It is circular, with Maiev in the center. Enemies pour in from the corridors.",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nThe Infinite Dragonflight's motives were vague.",
          plus: "**The Vision for Plus:** \nA 'Tower Defense' dungeon. You aren't moving forward; you are holding a room against waves. It flips the script on the usual dungeon crawl. It also establishes the Infinite Dragonflight as a threat in TBC."
        },
        bosses: [
            "**Infinite Infiltrator:** \nA dragonkin rogue who tries to sap the healer.",
            "**Jailor's Folly:** \nA massive construct gone rogue. It cleaves.",
            "**Infinite Defiler:** \nThe leader of the assault. He uses time magic to slow players."
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
            "**Primal Elementals:** \nRaging fire and earth spirits.",
            "**Lost Ogres:** \nPanicked ogres attacking anything.",
            "**The Portal Storm:** \nA survival event against endless waves."
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
            "**Orc Warlord:** \nA brutal warrior with a massive axe. He enrages.",
            "**Infinite Assassin:** \nTrying to backstab Lothar.",
            "**Black Dragonflight Drake:** \nAssisting the Orcs. It breathes fire."
        ],
        mechanics: "**Protect the Target:** \nKeep Lothar alive during a skirmish. He fights back, but can be overwhelmed."
      }
    ]
  };

  // --- COMPONENT: DETAIL VIEW ---
  const DetailModal = ({ item, onClose }) => {
    if (!item) return null;

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" onClick={onClose}></div>
        
        {/* Modal Content */}
        <div 
          className="relative w-full max-w-6xl bg-[#080808] border border-[#444] shadow-[0_0_60px_rgba(194,156,85,0.15)] rounded-lg animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh] overflow-hidden"
          style={{ borderImage: 'linear-gradient(to bottom, #c29c55, #5a4a2d) 1' }}
        >
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors hover:rotate-90 duration-300 z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Header Section */}
          <div className="p-8 pb-6 border-b border-[#2f2f35] bg-[#0c0c0c]">
             <div className="flex items-start gap-6">
               <div className="w-32 h-32 border-2 border-[#c29c55] rounded-lg overflow-hidden shrink-0 bg-black shadow-lg">
                 {item.image ? (
                   <img src={item.image} className="w-full h-full object-cover" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center bg-[#1a1c22]">
                      <Globe className="w-10 h-10 text-[#5c5c63]" />
                   </div>
                 )}
               </div>
               <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="font-hero text-4xl text-[#f0e6d2] tracking-wide">{item.name}</h2>
                    {item.type.includes('MEGA') && <span className="bg-red-900/40 text-red-400 px-3 py-1 rounded-full text-[10px] border border-red-800/50 uppercase font-bold tracking-widest shadow-[0_0_10px_rgba(220,38,38,0.2)]">Mega-Dungeon</span>}
                  </div>
                  <p className="text-[#aeb6bf] text-sm leading-relaxed italic max-w-3xl">"{item.lore}"</p>
                  
                  <div className="flex flex-wrap gap-3 mt-4">
                     <span className="text-[10px] font-hero uppercase tracking-widest text-[#8a7b62] bg-[#1a1c22] border border-[#2f2f35] px-3 py-1.5 rounded">
                       {item.type}
                     </span>
                     {item.loot && (
                       <span className="text-[10px] font-hero uppercase tracking-widest text-[#a335ee] bg-[#a335ee]/5 border border-[#a335ee]/20 px-3 py-1.5 rounded flex items-center gap-2">
                         <Crown className="w-3 h-3"/> {item.loot}
                       </span>
                     )}
                  </div>
               </div>
             </div>
          </div>

          {/* Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 flex-1 overflow-hidden">
             
             {/* Left Column: Philosophy & Mechanics (7 cols) */}
             <div className="lg:col-span-7 p-8 overflow-y-auto custom-scrollbar border-r border-[#2f2f35] bg-[#0a0a0a]">
                <div className="space-y-8">
                  {/* Architect's Notes */}
                  <div>
                     <h4 className="text-[#c29c55] font-hero text-sm mb-4 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                       <BookOpen className="w-4 h-4"/> Architect's Notes
                     </h4>
                     <div className="space-y-4">
                        <div className="bg-[#1a1c22] p-4 rounded border-l-2 border-[#5c5c63]">
                           <span className="text-[#5c5c63] text-xs font-bold uppercase tracking-widest block mb-1">Historical Context</span>
                           <p className="text-[#aeb6bf] text-sm leading-relaxed">{formatText(item.philosophy.tbc)}</p>
                        </div>
                        <div className="bg-[#0b0d10] p-4 rounded border-l-2 border-[#c29c55]">
                           <span className="text-[#c29c55] text-xs font-bold uppercase tracking-widest block mb-1">The Vision for Plus</span>
                           <p className="text-[#e0e0e0] text-sm leading-relaxed">{formatText(item.philosophy.plus)}</p>
                        </div>
                     </div>
                  </div>

                  {/* Geography */}
                  {item.geography && (
                    <div className="bg-[#111] p-5 rounded border border-[#2f2f35]">
                       <h4 className="text-[#c29c55] font-hero text-sm mb-3 flex items-center gap-2">
                         <Compass className="w-4 h-4"/> The Lay of the Land
                       </h4>
                       <p className="text-[#aeb6bf] text-sm whitespace-pre-line leading-relaxed">
                         {formatText(item.geography)}
                       </p>
                    </div>
                  )}

                  {/* Core Mechanics */}
                  {item.mechanics && (
                    <div className="bg-[#111] p-5 rounded border border-[#2f2f35]">
                       <h4 className="text-[#c29c55] font-hero text-sm mb-3 flex items-center gap-2">
                         <Shield className="w-4 h-4"/> Core Mechanics
                       </h4>
                       <p className="text-[#aeb6bf] text-sm whitespace-pre-line leading-relaxed">
                         {formatText(item.mechanics)}
                       </p>
                    </div>
                  )}
                </div>
             </div>

             {/* Right Column: Bosses & Details (5 cols) */}
             <div className="lg:col-span-5 p-8 bg-[#080808] overflow-y-auto custom-scrollbar">
                {item.bosses && (
                   <div className="mb-8">
                      <h4 className="text-[#c29c55] font-hero text-sm mb-4 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                        <Skull className="w-4 h-4"/> Encounter Journal
                      </h4>
                      <ul className="space-y-4">
                         {item.bosses.map((boss, i) => {
                           // Split boss name from description if present
                           const [name, desc] = boss.split(':');
                           return (
                             <li key={i} className="flex items-start gap-3 group">
                                <div className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-[#1a1c22] border border-[#2f2f35] text-[10px] text-[#5c5c63] font-hero shrink-0 group-hover:border-[#c29c55] group-hover:text-[#c29c55] transition-colors">
                                  {i+1}
                                </div>
                                <div className="text-sm">
                                  <strong className="text-[#e0e0e0] block mb-1 group-hover:text-white transition-colors">{name}</strong>
                                  {desc && <span className="text-[#6b7280] text-xs leading-tight block">{desc}</span>}
                                </div>
                             </li>
                           );
                         })}
                      </ul>
                   </div>
                )}

                {/* Contextual Extras Box */}
                <div className="bg-[#1a1c22] p-6 rounded border border-[#c29c55]/20 flex flex-col items-center justify-center text-center">
                   <Compass className="w-10 h-10 text-[#c29c55] mb-3 opacity-40" />
                   <p className="text-xs text-[#5c5c63] uppercase tracking-widest font-bold">Exploration Required</p>
                   <span className="text-[#8a7b62] text-xs mt-1">Discover the entrance within the zone to unlock this entry in your journal.</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050403] text-[#e0e0e0] font-sans selection:bg-amber-900 selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        .parchment-texture {
          background-color: #0b0d10;
          background-image: url('https://i.imgur.com/i9PDsfK.jpeg');
          background-size: cover;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #080808; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #444; }
      `}</style>

      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-[#c29c55]/30 ${scrolled ? 'bg-[#050403]/95 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-[#1a1c22] border border-[#c29c55] rounded flex items-center justify-center shadow-[0_0_15px_rgba(194,156,85,0.2)]">
               <MapIcon className="text-[#c29c55] w-7 h-7" />
             </div>
             <div>
               <h1 className="font-hero text-2xl text-[#f0e6d2] tracking-[0.1em] drop-shadow-md">THE ATLAS OF OUTLAND</h1>
               <p className="text-[10px] text-[#8a7b62] font-body tracking-[0.3em] uppercase mt-1">Dungeons • Raids • Events</p>
             </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="min-h-[500px] h-auto flex flex-col items-center justify-center relative overflow-hidden pb-12">
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050403]/50 via-[#050403]/80 to-[#050403] z-10"></div>
            {/* Generic Map Background */}
            <img src="https://i.imgur.com/sXKmOoH.png" className="w-full h-full object-cover opacity-20" />
         </div>
         <div className="text-center z-10 mt-10 px-4">
           <h2 className="font-hero text-5xl lg:text-6xl text-[#c29c55] mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">UNCHARTED TERRITORY</h2>
           <p className="font-body text-[#aeb6bf] text-lg max-w-2xl mx-auto">
             Explore the lost chapters of the Burning Crusade. From the depths of the Black Temple to the forgotten corners of Azeroth.
           </p>
           
           {/* Developer's Perspective (NEW SECTION) */}
           <div className="mt-8 max-w-4xl mx-auto text-left space-y-6 text-sm text-[#8a7b62] bg-black/60 p-8 rounded border border-[#2f2f35] backdrop-blur-sm shadow-2xl">
             <p className="font-body italic border-b border-[#2f2f35] pb-6 mb-4 text-base text-[#c29c55]/80 text-center">
               "From a developer's perspective, we identified narrative voids in the original expansion—like Kael'thas's transition to the Legion or the Draenei's isolated starting experience—and built dungeons specifically to tell those stories."
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div>
                 <h4 className="text-[#c29c55] font-hero text-xs uppercase tracking-widest mb-3 border-b border-[#c29c55]/20 pb-1">Closing Narrative Gaps</h4>
                 <p className="text-[#aeb6bf] text-xs leading-relaxed">TBC had incredible lore but often told it through text rather than gameplay. We knew Kael'thas joined Illidan, but we never *played* their escape from Dalaran. The new **Siege of Dalaran** lets players live that history. Similarly, the **Dark Portal Excavation** connects Azeroth and Outland, showing the immediate aftermath of the portal's reopening.</p>
               </div>
               <div>
                 <h4 className="text-[#c29c55] font-hero text-xs uppercase tracking-widest mb-3 border-b border-[#c29c55]/20 pb-1">Diversifying Gameplay</h4>
                 <p className="text-[#aeb6bf] text-xs leading-relaxed">We wanted to break the "Tank and Spank" monotony. Dungeons like **The Apexis Conclave** introduce puzzle mechanics (Light Reflection), while **The Ethereum Vaults** introduce a "Heist" timer. This variety ensures that different class utilities (Mage blinking, Rogue sprinting) have moments to shine.</p>
               </div>
               <div>
                 <h4 className="text-[#c29c55] font-hero text-xs uppercase tracking-widest mb-3 border-b border-[#c29c55]/20 pb-1">Evergreen Relevance</h4>
                 <p className="text-[#aeb6bf] text-xs leading-relaxed">By introducing **Heroic+** modes and tying crafting materials to specific dungeon activities (like the **Undercity of Karabor** crafting stations), we ensure these dungeons remain relevant throughout the entire expansion lifecycle, not just as stepping stones to raid gear.</p>
               </div>
             </div>
           </div>

         </div>
      </div>

      {/* CONTINENT TABS */}
      <div className="bg-[#0b0d10] border-t border-[#2f2f35]">
        <div className="container mx-auto flex justify-center gap-8">
          {Object.entries(continents).map(([key, cont]) => (
             <button
                key={key}
                onClick={() => {
                    setActiveContinent(key);
                    const firstZone = Object.keys(zones[key])[0];
                    setActiveZone(firstZone);
                }}
                className={`py-5 px-8 font-hero text-sm uppercase tracking-[0.2em] transition-all border-b-4 ${
                   activeContinent === key 
                   ? 'border-[#c29c55] text-[#f0e6d2] bg-[#c29c55]/5' 
                   : 'border-transparent text-[#5c5c63] hover:text-[#aeb6bf] hover:bg-[#1a1c22]'
                }`}
             >
                <div className="flex items-center gap-3">
                    {cont.icon} {cont.name}
                </div>
             </button>
          ))}
        </div>
      </div>

      {/* ZONE NAVIGATION */}
      <div className="sticky top-[80px] z-40 bg-[#0b0d10] border-b border-[#2f2f35] mb-12 shadow-2xl overflow-x-auto no-scrollbar">
         <div className="container mx-auto flex justify-start lg:justify-center gap-3 p-3 min-w-max">
            {Object.entries(zones[activeContinent]).map(([key, zone]) => (
               <button
                  key={key}
                  onClick={() => setActiveZone(key)}
                  className={`py-3 px-6 rounded-sm flex items-center gap-2 font-hero text-xs uppercase tracking-widest transition-all duration-300 ${
                     activeZone === key 
                     ? 'bg-[#c29c55] text-black shadow-[0_0_20px_rgba(194,156,85,0.3)] transform scale-105' 
                     : 'bg-[#1a1c22] text-[#5c5c63] hover:bg-[#2f2f35] hover:text-[#e0e0e0] border border-[#2f2f35]'
                  }`}
               >
                  {zone.icon} {zone.name}
               </button>
            ))}
         </div>
      </div>

      {/* CONTENT GRID */}
      <div className="container mx-auto px-4 pb-24 min-h-screen">
         {selectedEntry && <DetailModal item={selectedEntry} onClose={() => setSelectedEntry(null)} />}

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {contentData[activeZone] ? (
              contentData[activeZone].map((item, i) => (
                 <div 
                    key={i} 
                    onClick={() => setSelectedEntry(item)}
                    className={`
                      relative rounded-sm overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2
                      ${item.type.includes('MEGA') ? 'col-span-1 md:col-span-2 lg:col-span-2 border-2 border-[#c29c55] bg-[#1a120b] shadow-[0_0_30px_rgba(194,156,85,0.1)]' : 'bg-[#0b0d10] border border-[#2f2f35] hover:border-[#c29c55]/50 hover:shadow-2xl'}
                    `}
                 >
                    {/* Card Header/Image Placeholder */}
                    <div className={`${item.type.includes('MEGA') ? 'h-72' : 'h-48'} bg-[#15171e] relative overflow-hidden`}>
                       {item.image ? (
                          <img src={item.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                       ) : (
                          <div className="w-full h-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                             <Globe className="w-24 h-24" />
                          </div>
                       )}
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-[#0b0d10]/50 to-transparent"></div>
                       
                       <div className="absolute bottom-6 left-6 z-10 pr-4">
                          <h3 className={`font-hero text-[#f0e6d2] group-hover:text-[#c29c55] transition-colors drop-shadow-lg ${item.type.includes('MEGA') ? 'text-4xl' : 'text-2xl'}`}>
                             {item.name}
                          </h3>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-[#aeb6bf] bg-black/60 px-3 py-1 rounded backdrop-blur-md border border-[#ffffff]/10 inline-block mt-2">
                             {item.type}
                          </span>
                       </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8">
                       <p className="text-[#aeb6bf] text-xs leading-relaxed line-clamp-3 mb-6 border-b border-[#2f2f35] pb-6 font-sans">
                          {item.lore}
                       </p>
                       
                       <div className="flex justify-between items-center">
                          <div className="flex -space-x-3 hover:space-x-0 transition-all duration-300">
                             {item.bosses && item.bosses.slice(0, 3).map((b, idx) => (
                                <div key={idx} className="w-8 h-8 rounded-full bg-[#1a1c22] border border-[#2f2f35] flex items-center justify-center text-[10px] text-[#5c5c63] shadow-md hover:z-10 hover:border-[#c29c55] hover:text-[#c29c55] transition-colors" title={b}>
                                   <Skull className="w-4 h-4" />
                                </div>
                             ))}
                             {item.bosses && item.bosses.length > 3 && (
                                <div className="w-8 h-8 rounded-full bg-[#0b0d10] border border-[#2f2f35] flex items-center justify-center text-[9px] text-[#aeb6bf] shadow-md z-10">
                                   +{item.bosses.length - 3}
                                </div>
                             )}
                          </div>
                          <button className="text-[#c29c55] text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                             Briefing <ArrowRight className="w-3 h-3" />
                          </button>
                       </div>
                    </div>
                 </div>
              ))
            ) : (
              <div className="col-span-full text-center py-32 opacity-50">
                 <AlertTriangle className="w-16 h-16 text-[#2f2f35] mx-auto mb-6" />
                 <p className="text-[#5c5c63] font-hero uppercase tracking-widest text-lg">No new intelligence for this region.</p>
              </div>
            )}
         </div>
      </div>

    </div>
  );
};

export default TheAtlasOfOutland;