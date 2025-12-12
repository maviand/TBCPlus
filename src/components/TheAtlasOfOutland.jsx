import React, { useState, useEffect } from 'react';
import {
  Map as MapIcon, Skull, Crown, Globe, Sword, Shield, Zap,
  Clock, AlertTriangle, Anchor, Compass, Scroll, X, Eye, Hammer,
  BookOpen, Flame, Droplet, Mountain, ArrowRight
} from 'lucide-react';



import UnifiedHeader from './UnifiedHeader';

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
    // Handle both literal newlines and escaped newlines (from JSON data)
    const lines = text.split(/\\n|\n/);
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
    outland: { name: 'Outland', icon: <Globe className="w-4 h-4" /> },
    azeroth: { name: 'Azeroth (The Lost Zones)', icon: <Anchor className="w-4 h-4" /> },
    cot: { name: 'Caverns of Time', icon: <Clock className="w-4 h-4" /> },
    tuning: { name: 'Raid Fixes', icon: <Hammer className="w-4 h-4" /> },
    citadel: { name: 'Citadel of the Void', icon: <Skull className="w-4 h-4" /> },
    oldworld: { name: 'Old World Scaling', icon: <BookOpen className="w-4 h-4" /> }
  };

  // --- ZONES DATA ---
  const zones = {
    outland: {
      hellfire: { name: 'Hellfire Peninsula', icon: <Flame className="w-4 h-4" /> },
      zangar: { name: 'Zangarmarsh', icon: <Droplet className="w-4 h-4" /> },
      terokkar: { name: 'Terokkar Forest', icon: <Scroll className="w-4 h-4" /> },
      nagrand: { name: 'Nagrand', icon: <Mountain className="w-4 h-4" /> },
      blades: { name: 'Blade\'s Edge', icon: <Sword className="w-4 h-4" /> },
      nether: { name: 'Netherstorm', icon: <Zap className="w-4 h-4" /> },
      shadow: { name: 'Shadowmoon Valley', icon: <Skull className="w-4 h-4" /> },
    },
    azeroth: {
      eastern: { name: 'Eastern Kingdoms', icon: <Shield className="w-4 h-4" /> },
      kalimdor: { name: 'Kalimdor', icon: <Compass className="w-4 h-4" /> },
    },
    cot: {
      timeways: { name: 'The Timeways', icon: <Clock className="w-4 h-4" /> }
    },
    tuning: {
      tuning_zone: { name: 'System Overhaul', icon: <Hammer className="w-4 h-4" /> }
    },
    citadel: {
      far_reach: { name: 'The Far Reach', icon: <Zap className="w-4 h-4" /> }
    },
    _garbage_tuning: [
      {
        name: 'Heroic+ Dungeons',
        type: 'System Update',
        image: import.meta.env.BASE_URL + "images/art/system_heroic_plus.png",
        lore: "**T5 Launch Feature** \nA new difficulty mode for all TBC 5-man dungeons. It is unlocking alongside SSC/TK to provide a massive challenge for 5-man groups.",
        geography: "**New Mechanics:** \nFrom Exploding Bog-Lords in Underbog to Sonic Booms in Shadow Labyrinth that hit 2 players, every boss has a twist.",
        philosophy: { tbc: "Badges were grindy.", plus: "Heroic+ drops T4/T5 set tokens and massive Badge yields." },
        bosses: ["**Kargath:** Blade Dance is now constant.", "**Murmur:** Sonic Boom hits two targets."],
        mechanics: "**Rewards:** \nilvl 128 Epic Gear and catch-up tokens."
      },
      {
        name: 'Gruul & Magtheridon Hard Mode',
        type: 'Raid Mechanics',
        image: import.meta.env.BASE_URL + "images/art/system_gruul_mag.png",
        lore: "**Tier 4 Hard Modes** \nOptional triggers to increase difficulty and loot. **Gruul:** Kill Council in specific order. **Magtheridon:** Click cubes in 5-second window.",
        geography: "**Mechanics:** \nGruul gains Whirlwind. Magtheridon keeps channeler abilities.",
        philosophy: { tbc: "Too easy later on.", plus: "Keeps T4 relevant during T5/T6." },
        bosses: ["**Gruul:** Reanimates Gronn Adds.", "**Magtheridon:** Permanent Shadow Bolley Volleys."],
        mechanics: "**Loot:** \nDrops optional T5-equivalent jewelry and cloaks."
      },
      {
        name: 'Hyjal: The Dynamic War',
        type: 'Raid Overhaul',
        image: import.meta.env.BASE_URL + "images/art/system_hyjal.png",
        lore: "**Tier 6 Redesign** \nNo more 8-wave boredom. Now 4 intense waves with objectives (Protect Sappers, Interrupt Summoners). Jaina and Thrall use major cooldowns to help.",
        geography: "**The Change:** \nMini-bosses spawn during waves. Archimonde has a mid-phase 'Drain Nordrassil'. Tyrande grants jump buffs.",
        philosophy: { tbc: "Hyjal was a slog.", plus: "Now a strategic, fast-paced war zone." },
        bosses: [
          "**Rage Winterchill:** \nThe Lich's prowess is fully realized. He casts 'Death & Decay' which must be kited out of, and channels an 'Ice Barrier' that makes him immune to damage until shattered by massive burst damage.",
          "**Archimonde:** \nThe Defiler requires coordination with Jaina and Thrall. At 20% health, he channels 'Drain Nordrassil', becoming immune to conventional damage. Players must use 'Tears of the Goddess' (granted by Tyrande) to reflect his own Chaos energy back at him."
        ],
        mechanics: "**Impact:** \nCleansing the base visibly changes the environment (trees bloom)."
      }
    ],
    oldworld: {
      oldworld_zone: { name: 'Classic Content', icon: <BookOpen className="w-4 h-4" /> }
    },
    _garbage_oldworld: [
      {
        name: 'Heroic Azeroth Raids',
        type: 'Scalable Content',
        image: 'https://static.wikia.nocookie.net/wowpedia/images/4/4d/WoWBlog_MC_Banner.jpg/revision/latest?cb=20211008221056',
        lore: "**Timelocked Raiding** \nMolten Core (10-Man), BWL (25-Man), AQ40, and Naxxramas are scaled up to Level 70. They drop loot just below current TBC tier ilvl.",
        geography: "**Progression:** \nMC = ilvl 110. BWL = ilvl 125. Naxx = ilvl 148 (T6 equivalent).",
        philosophy: { tbc: "Old raids died.", plus: "They offer alternative gearing paths and trinkets." },
        bosses: [
          "**Ragnar-O's:** \nThe Firelord has awakened fully. In his 'Living Meteor' phase, he submerges, and players must kite massive molten boulders into 'Vent' targets to cap the volcano before he re-emerges.",
          "**Vaelastrasz the Corrupt:** \nThe tragic red dragon now applies 'Burning Adrenaline' to multiple players. Instead of killing them, it turns them into living bombs that must run to specific 'Void Zones' to detonate safely."
        ],
        mechanics: "**Loot:** \nUnique 'Timeworn' items and Tier 2 recolors."
      },
      {
        name: 'World Invasions',
        type: 'Open World Event',
        image: 'https://i.imgur.com/e5wE7xi.png',
        lore: "**A Realm Reborn** \nScourge and Legion invasions strike classic zones (Winterspring, EPL). Phase 1: Infiltration. Phase 2: Siege (World Boss). Phase 3: Rewards.",
        geography: "**Zones:** \nRotates weekly between Kalimdor and Eastern Kingdoms.",
        philosophy: { tbc: "Azeroth was empty.", plus: "Weekly reasons to go back to the old world." },
        bosses: [
          "**Doom Lord Kazzak (World):** \nThe Supreme Commander of the Legion forces. He flies between zones, bombarding the ground. Players must use flying mounts to engage him in the air.",
          "**Highlord Kruul:** \nReplaces Kazzak on the ground. He captures faction leaders, forcing the raid to free them to gain powerful 'Faction Champion' buffs."
        ],
        mechanics: "**Rewards:** \nHonor, Catch-up gear, and gathering nodes."
      }
    ]
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
          "**Grand Warlock Nethekurse:** \nA master of fel magic who uses the souls of the fallen to fuel his spells. During the fight, he opens a 'Lesser Shadow Fissure' that slowly consumes the room's floor space, forcing a tight DPS race before the party is swallowed by the Void.",
          "**Warbringer O'mrogg:** \nAn ogre magi with two heads and zero patience. His 'Threat Drop' mechanic resets aggro on his current target to zero, requiring a coordinated tank swap or an alert DPS to kite him through 'Burning Pitch' traps.",
          "**Warchief Kargath Bladefist:** \nThe Chieftain of the Shattered Hand and ruler of the Citadel. He fights with the savagery of a gladiator. The arena crowd is an active participant; if the fight drags on, spectators throw debris and firebombs into the ring. Kargath's 'Blade Dance' targets the furthest player, forcing the party to clump and move as one."
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
          "**Twilight Ascendant Mal'gin:** \nAn elementalist twisted by the Void. He rapidly shifts attunements (Fire, Frost, Shadow). Players must use the environment—dipping into lava pools or standing on ice patches—to gain specific buffs that counter his active form.",
          "**Council of Ancestors:** \nThree spirits of the Mag'har (Geyah, Jorin, Dran) who are being tortured by the Cult. Players must heal them to full health to break the mind control while interrupting their lethal 'Ancestral Fury' casts.",
          "**Garrosh Hellscream (Corrupted):** \nThe final tragedy. Powered by Void energy and his own self-hatred, Garrosh uses 'Horde Strength' to decimate the raid while 'Void Despair' mind-controls players who stray too far from their allies."
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
      },
      {
        name: 'Throne of the Elements',
        type: '10-Man Raid (Tier 6.5)',
        image: 'https://i.imgur.com/cOsLrHP.jpeg',
        lore: "**Nagrand / Elemental Plateau** \nThe immense fel energies radiating from the Black Temple have thrown the elemental spirits of Outland into chaos. The four Elemental Lords of Draenor, once balanced, are now in a state of constant rage, threatening to unravel the very fabric of the planet. Players must enter a swirling vortex atop the Elemental Plateau to subdue them before their combined fury creates an unstoppable cataclysm.",
        geography: "**The Lay of the Land:** \nA swirling vortex atop the Elemental Plateau. The arena changes element based on the active lord.",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nThe Elemental Plateau was just a farming spot.",
          plus: "**The Vision for Plus:** \nA boss-rush raid similar to Trial of the Crusader but with elemental themes. It provides a catch-up tier for smaller guilds."
        },
        bosses: [
          "**Gordawg, the Stone-Lord:** \nA colossal earth elemental formed from the shattered bedrock of Draenor. His 'Earthen Tremor' shakes the entire plateau, dealing massive damage unless players take cover behind the stone pillars he raises.",
          "**Aeros, the Storm-Lord:** \nA manifestation of the hurricane winds. He teleports erratically around the platform, summoning 'Living Cyclones' that must be dodged while casting 'Chain Lightning' that requires the raid to spread out.",
          "**Karsius, the Flame-Lord:** \nA raging inferno that consumes the arena. He leaves a permanent trail of 'Fel-Fire' in his wake, shrinking the safe playable area and acting as a hard enrage timer.",
          "**Tidalor, the Water-Lord:** \nThe corrupted essence of the Zangar Sea. He creates deadly whirlpools that act as gravity wells, and encases players in 'Watery Tombs' that must be shattered by allies.",
          "**The Primal Heart:** \nThe final merged entity of all four Lords. It rotates through elemental phases every 25% health, combining mechanics in a chaotic test of adaptability."
        ],
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
          "**The Rift-Lord:** \nA colossal Void Reaver construct acting as the storm's anchor. He patrols the outer platforms, launching 'Null-Void Orbs' that players must intercept with their own bodies to prevent the flagship from being breached.",
          "**A'kilo & H'kilo (The Binary Twins):** \nTwo Ethereal princes who have mastered opposing forces. A'kilo wields the Void, while H'kilo wields the Arcane. They swap health percentages and ability sets every 25%, requiring balanced DPS splitting.",
          "**Harbinger of Dimensius:** \nA fragment of the Void Lord himself, manifesting as a tearing hole in reality. He attempts to consume the Mana-Bomb before detonation. Players must feed him 'Unstable Mana' to sate his hunger while burning him down."
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
          "**Nexus-Stalker Xy'rath:** \nThe phantom assassin. He blinks through the shadows, marking players for death. His 'Backstab' instant-kills anyone not facing him when he reappears.",
          "**Overloader G'huul:** \nA Ethereal technomancer frantically hacking the mainframe. He activates 'Security Turrets' and 'Stasis Traps' that the party must disable using the Rogue or Engineering skills.",
          "**High-Trader Zax:** \nThe mastermind of the heist. He uses the stolen artifacts against you, equipping legendary weapons from the vault mid-fight (e.g., wielding Thunderfury for 30 seconds, then Atiesh)."
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

      },

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
          "**Nexus-Prince Shaffar's Image:** \nA holographic projection of the Ethereal Prince. He drains the ley-lines to empower his 'Arcane Explosion', which must be interrupted by draining the line first.",
          "**Commander Zaxus:** \nAn Ethereal raider using 'Stasis Chambers' to trap players. Trapped players are removed from combat until their allies break the glass prisons.",
          "**Arcanagos (The Devourer):** \nA giant mana wyrm feasting on the leaked energy. He sucks mana from healers using 'Mana Burn'. If a healer hits 0 mana, they explode."
        ],
        mechanics: "**Ley-Lines:** \nPlayers must stand in Ley-Line beams to regain mana, but they take arcane damage every second. It's a risk/reward mechanic for healers and casters."
      },
      {
        name: 'Siege of Quel\'Danil',
        type: '10-Man Raid (Tier 5)',
        image: 'https://i.imgur.com/ErIqzbU.jpeg',
        lore: "**The Hinterlands** \nWith the Sunwell being prepared for Kil'jaeden, Kael'thas moves to eliminate all rival claimants to elven magical lore. He dispatches Warlord Salaris to eradicate the high elves of Quel'Danil Lodge and seize their ancient runestones. Allied with the Wildhammer dwarves, players must defend the besieged lodge as fel-fire rains from the sky.",
        geography: "**The Lay of the Land:** \nThe raid environment is a dynamic battlefield. Players fight through the courtyards and halls of a beautiful elven lodge under heavy assault, with fel-fire raining from the sky and the sounds of battle echoing from all sides.",
        philosophy: {
          tbc: "**The 2007 Landscape:** \nThe Hinterlands was often skipped.",
          plus: "**The Vision for Plus:** \nA proper High Elf vs Blood Elf conflict. It highlights the schism in elven society."
        },
        bosses: [
          "**The Fel-Siege Engines:** \nNot a traditional boss, but a survival endurance test. Players must man the 'Wildhammer Cannons' to destroy incoming Fel-Reavers before they breach the lodge walls.",
          "**Magistrix Lyandra:** \nA blood mage attempting to corrupt the Great Runestone. Players must siphon her 'Fel Energy' and deposit it into 'Grounding Totems' to prevent the stone from shattering.",
          "**Ranger-Captain Lyra & Spellbreaker Loros:** \nThe Twin Sentinels. They share a health pool but have a 'Bond of Blood'. They must be tanked 40 yards apart, or they gain 99% damage reduction.",
          "**Warlord Salaris:** \nThe leader of the assault. He fights from atop his felboar 'Gorefang'. Killing the mount enrages Salaris, switching him to a dual-wielding Fury Warrior stance."
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
          "**Spirit of Prince Tortheldrin:** \nThe ghost of the Prince, desperate for magic. He summons 'Mirror Images' that cast high-damage spells. Players must find the real Prince to interrupt him.",
          "**The Pylon Guardian:** \nAn arcane construct protecting the energy source. It rotates a 'Reflective Shield'. Hitting it in the shield reflects 200% damage. Attacks must be flanked.",
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
          "**Dreadlord Mal'Gathis:** \nA cunning nathrezim orchestrating the Scourge assault. He unleashes ' carrion Swarms' that reduce healing received and casts 'Sleep' on healers, forcing dispels.",
          "**Baron Rivendare (Alive):** \nA tragic paladin fighting for his city. He uses 'Holy Cleave' and 'Aura of Devotion'. At 50% health, he begins to succumb to the plague, switching to Shadow abilities.",
          "**Grand Marshal Garithos:** \nA mounted knight with a 'Human Supremacy' aura that reduces healing done by non-Human allies. He summons Elite Footmen who must be crowd-controlled."
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


    // --- CITADEL OF THE VOID (NEW TIER) ---
    far_reach: [
      {
        name: 'The Citadel of the Void',
        type: '25-Man Raid (Tier 6.5)',
        image: 'https://i.imgur.com/DEKpzhn.jpeg',
        lore: "**The End of All Things**\nDimensius the All-Devouring has fully manifested at the edge of the Twisting Nether, anchoring his massive void-fortress to the crumbling remains of Farahlon. The Ethereals of the Protectorate have launched a desperate assault, but their technology is failing. The Void Lord seeks to consume the mana of Outland to fuel a portal to Azeroth. This is the true final stand of the expansion.",
        geography: "**The Lay of the Land:**\nA raid set in zero-gravity space. Players fight across floating debris, Ethereal flagships, and the twisted, obsidian architecture of the Void Citadel itself. The skybox is a swirling vortex of purple and black entropy.",
        philosophy: {
          tbc: "**The Missing Tier:**\nTBC had a massive lore gap between Black Temple and Sunwell.",
          plus: "**The Bridge:**\nThis raid bridges that gap. It features vertical combat, vehicle sections (Protectorate Fighters), and 'Sanity' mechanics borrowed from future expansions but simplified for TBC. It is the hardest content in the game, harder than pre-nerf M'uru."
        },
        bosses: [
          "**Nexus-Prince Vizaal (The Gatekeeper):** A traitorous Ethereal who sold his people to the Void. He uses 'Stasis Traps' to freeze players in time, requiring allies to shatter them before they suffocate.",
          "**Void Reaver MK-II:** The ultimate Fel Reaver variant, infused with Void energy. It has a 'Gravity Well' ability that pulls the entire raid to the center of the room, followed by a massive 'Void Nova'. Players must anchor themselves to heavy pillars.",
          "**Entropy (The Pure Elemental):** A shapeless horror. It shifts between Solid, Liquid, and Gas states. Solid = Tank & Spank. Liquid = Splits into oozes. Gas = Fills room with DoT clouds.",
          "**Xer'zul the Corrupter:** A Voidcaller summoning portals. Players must split into 'Away Teams' to enter the portals and stop his summoning rituals from the inside.",
          "**Council of the Ethereal Lords:** Three bosses with shared health. They constantly swap weapons and abilities (Warrior, Mage, Rogue). The key is managing their 'Bargain' stacks—if they hold the same weapon too long, they enrage.",
          "**The Dark Star (Corrupted Naaru):** A fallen Naaru like M'uru, but far more aggressive. It cycles between 'Light' and 'Void' phases every 30 seconds, forcing the raid to swap resistance gear mid-fight.",
          "**Shadow-Lord Xaaven:** A Nathrezim Lord cloaked in absolute darkness. The raid must carry 'Torch of the Naaru' items to create safe zones of light. If the torch carrier dies, the wipe is instant.",
          "**Dimensius the All-Devouring:** The final confrontation. He is not a physical boss, but a tear in reality. Players fight his manifestations (Hands, Eyes, Mouths) while trying to charge the 'Mana Bomb' to close the rift. Phase 3 takes place *inside* the rift, fighting for your soul."
        ],
        mechanics: "**Sanity Meter:**\nThe closer you are to the Void, the more your Sanity drains. At 0 Sanity, you become Mind Controlled. Players must stand in 'Light Wells' spawned by Healers to restore Sanity."
      },
      {
        name: 'The Void Hold',
        type: '5-Man Dungeon (3 Wings)',
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
    // --- RAID FIXES ---
    tuning_zone: [
      {
        name: 'Heroic+ Dungeons',
        type: 'System Update',
        image: import.meta.env.BASE_URL + "images/art/system_heroic_plus.png",
        lore: "**T5 Launch Feature** \nThe ultimate 5-man challenge. Unlocks alongside SSC/TK. Every boss has new mechanics.",
        geography: "**Mechanics:** \n**Hellfire:** Kargath Blade Dances constantly. \n**Coilfang:** Hungarfen spawns fixating Bog-Lords. \n**Auchindoun:** Murmur's Sonic Boom hits two players. \n**Tempest Keep:** Freywinn summons Volatile Saplings.",
        philosophy: { tbc: "Badges were grindy.", plus: "Heroic+ drops T4/T5 set tokens and massive Badge yields." },
        bosses: ["**Rewards:** \nilvl 128 Epic Gear, Nether Vortexes, and 3x Badges of Justice per boss."],
        mechanics: "**Affixes:** \n+20% Health/Damage. Patrols respawn on a 20-minute timer."
      },
      {
        name: 'Karazhan: Timeless Masterpiece',
        type: '10-Man Raid Refresh',
        image: import.meta.env.BASE_URL + "images/art/system_karazhan.png",
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
              { element: "Attumen/Shade", pain: "Faster mount swaps (dodge shadows via spectral reins).", design: "Smoother dance; VFX: Horse ghosts phase through players harmlessly.", boost: "Spectral spectral reins mechanic." },
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
        name: 'The Titan & The Pit',
        type: 'Raid Overhaul',
        image: import.meta.env.BASE_URL + "images/art/system_gruul_mag.png",
        lore: "**Gruul's Lair & Magtheridon's Lair Redesigned** \nReimagined as multi-phase spectacles. Features 'Progression Toggles' to escalate difficulty and rewards as you conquer higher raid tiers.",
        gruulMagData: {
          toggles: {
            base: { label: "Base Difficulty (T4)", loot: "Standard Tier 4 Loot Table", affix: "Standard Mechanics" },
            t5: { label: "Ascended (Post-T5)", loot: "Drops 2x Tier 5 Tokens + Hard Mode Trinkets", affix: "Affix: 'Gronn's Grudge' & 'Legion's Wrath'" },
            t6: { label: "Apex (Post-T6)", loot: "Drops Illidari-Council Tier Loot + Mounts", affix: "Affix: 'World Breaker' & 'Pit Lord's Decree'" }
          },
          gruul: {
            title: "Gruul's Lair: Dragonkiller's Roost",
            vision: "Towering Blade's Edge aerie carved into jagged peaks—mist-shrouded entrances via wind-swept rope bridges. Interior: Vast, vertical warren with impaled dragon skulls, slave-forged chains, and bioluminescent fungi.",
            grid: [
              { element: "Trash/Approach", pain: "Linear ogre packs, boring.", design: "Branching Paths: Left (Stealth/Mini-bosses) vs Right (Boulder Traps). Ogre Rebellion Event: Rescue slaves for buffs.", boost: "Ties to Rexxar lore." },
              { element: "High King Maulgar", pain: "Static council DPS race.", design: "Totem Sabotage: Players split to platforms to disrupt 4 elemental totems. Personalities: Bosses taunt and use unique CC.", boost: "Heroic: Totems wander." },
              { element: "Gruul", pain: "Laggy Cave In, RNG Shatter.", design: "3 Phases (Wounds). Cave In 2.0: Telegraphed cracks (Brace mechanism). Shatter: Magnetic aura pulls slackers.", boost: "Dragon Echoes: Claim skulls for temp flight." }
            ]
          },
          magtheridon: {
            title: "Magtheridon's Lair: Fel Pit Siege",
            vision: "Hellfire Citadel's abyss—colossal ritual pit ringed by crumbling orc temples. Pulsing ward crystals and abyssal portals. Platforms: Shattered pillars players leap between.",
            grid: [
              { element: "Approach", pain: "Skip-heavy, empty.", design: "Pit Perimeter Gauntlet: Defend vs fel orc waves while scaling chains. Hack ward nodes to weaken crystals.", boost: "Abyssal Diversions: Optional Fel Reaver mini-boss." },
              { element: "Channelers", pain: "Timer pressure, class-stack.", design: "Orbital Arenas: 5 Channelers on floating platforms. Groups split to engage. Respite mechanics if 2 downed.", boost: "Platform Hazards: Tilting discs, ooze geysers." },
              { element: "The Break-In", pain: "Click panic, failures wipe.", design: "Ritual Infusion: Channel at ward fonts to crack crystals (Shatter VFX). Sacrifice 'Fel Essences' for power.", boost: "Epic cinematic break." },
              { element: "Magtheridon", pain: "Post-break spam-fest.", design: "Flooding Arena: Pit fills with ooze phases. Debris Adds: Hijack flying rubble to ram boss. Enrage: Spikes impale healers.", boost: "Lord of the Legion: Summon Felguard lieutenants." }
            ]
          }
        }
      }, ,
      {
        name: 'SSC & TK: The Dual Threat',
        type: 'Raid Overhaul',
        image: import.meta.env.BASE_URL + "images/art/system_ssc_tk.png",
        lore: "**Tier 5 Redefined** \nSerpentshrine Cavern and Tempest Keep are no longer just 'farm content.' Reimagined as high-octane spectacles: The Abyssal Crucible vs The Arcane Maelstrom.",
        sscTkData: {
          tabs: {
            ssc: { title: "Serpentshrine Cavern", icon: <Droplet className="w-4 h-4" />, subtitle: "Abyssal Crucible: Tidal Fury Unleashed" },
            tk: { title: "Tempest Keep", icon: <Zap className="w-4 h-4" />, subtitle: "Arcane Maelstrom: Ethereal Tempest" }
          },
          ssc: {
            title: "Abyssal Crucible",
            vision: "Sunken naga citadel—corroding pipes hiss superheated steam vents, geothermal fissures belch bubbles, bioluminescent tendrils writhe. Palette: Deep aquamarine/fel greens, steam fog.",
            grid: [
              { element: "Trash", pain: "Dense packs, slog.", design: "Condensed packs (-20%). Steam pipes rupture mid-pull—dodge or burn; burst clears weak mobs.", boost: "Naga ritual mini-events." },
              { element: "Hydross", pain: "Clunky swaps, aggro issues.", design: "Smoother swaps (glows early). Fissure surges flood sides—redirect via vents to drown adds.", boost: "Polar Echoes mechanic." },
              { element: "Leotheras", pain: "Whirlwind chaos.", design: "Whirlwind telegraphed. Tendril walls block escapes—steam blasts carve paths. Consumes player souls (mirror classes).", boost: "Sacrifice lore." },
              { element: "Fathom-Lord", pain: "Static add tanking.", design: "Shield easier to break (vulnerable glows). Bubble currents yank shield team; pop for AOE burst.", boost: "Adds ride currents." },
              { element: "Vashj", pain: "RNG Tainted Cores.", design: "Arrows predictable. Pipe network—hack valves to drain poison, flood adds. Tainted cores ride steam plumes.", boost: "Arrow storm spectacle." }
            ],
            flow: "Branching pipes for shortcuts; weekly 'Vashj's Venom' achi (perfect phases)."
          },
          tk: {
            title: "Arcane Maelstrom",
            vision: "Floating isle fortress—crackling conduits arc lightning, void rifts pulse. Holographic blood elves flicker; storms rage outside. Palette: Violet neons, crackling blues/oranges.",
            grid: [
              { element: "Trash", pain: "Respawn timer hell.", design: "Faster respawns skipped. Conduit overloads—arcs clear packs or fry slackers; rifts drop portals.", boost: "Ethereal invasion waves." },
              { element: "Al'ar", pain: "Platform pathing bugs.", design: "Feathers bolder trails. Storm winds carry feathers faster—ride gusts to safe zones. Meteor rains from rifts.", boost: "Phoenix rebirth multi-head." },
              { element: "Void Reaver", pain: "Threat drop frustration.", design: "Knockaway less lethal (shields absorb). Arc chains link players—break via conduits (overload for AOE).", boost: "Orbital rift mechanics." },
              { element: "High Astromancer", pain: "Boring tank spank.", design: "Cyclone stacks cap. Platform shifts via quakes—arcs bridge gaps. Stars fall into rifts for adds.", boost: "Astromancy puzzle alignment." },
              { element: "Kael'thas", pain: "RP length, phase transitions.", design: "Advisors shorter leash. Rift gravity pulls during Gravity Lapse; conduits charge weapons for Phase 4.", boost: "Weapons come alive (arcs)." }
            ],
            flow: "Elevator skips enhanced (rift jumps); weekly 'Kael's Fury' (all phases flawless) for cosmetics."
          }
        }
      },
      {
        name: 'Mount Hyjal: The Battle for Nordrassil',
        type: 'Raid Redesign',
        image: import.meta.env.BASE_URL + "images/art/system_hyjal.png",
        lore: "Mount Hyjal is the emotional centerpiece of TBC, but has been reimagined for TBC Plus.",
        hyjalData: {
          overview: {
            rationale: "The Battle for Mount Hyjal is the emotional centerpiece of TBC's opening raid tier. Yet, its original design suffered from repetitive waves, shallow mechanics, passive NPCs, and a static feel. Our redesign transforms Hyjal into an interactive, dynamic battleground that balances pacing, narrative urgency, and mechanical depth.",
            issues: ["Tedious trash waves (8 per boss → 4)", "Passive NPCs (Jaina, Thrall, Tyrande)", "Static/Unengaging atmosphere", "Disconnect from WC3 feel"],
            environment: [
              { title: "Ascent Path", desc: "Players ascend a winding trail from a fortified camp rather than teleporting. Punctuated by event triggers." },
              { title: "Dynamic Zones", desc: "Distinct biomes (Icy Ridge, Fel Glade, Molten Forge) that visibly change as corruption recedes." },
              { title: "Traversal Events", desc: "Repair arcane conduits or rescue defenders between pulls for minor buffs." },
              { title: "Environmental Drama", desc: "Trees wilt, lava creeps, and skies darken dynamically to heighten tension." }
            ]
          },
          waves: [
            { name: "Glaive Assault", objective: "Protect scout NPC planting wards. Interrupt Annihilators.", npc: "Tyrande (Moonfire Beacon)", fail: "+2 Adds in next wave." },
            { name: "Nature's Defenders", objective: "Escort Treant to pool. Extinguish Felfire Totems.", npc: "Jaina (Frost Nova Barrier)", fail: "Anetheron deals +15% dmg." },
            { name: "Fel Ritual", objective: "Destroy 3 summoning circles before timer. Kill Veilwalkers.", npc: "Thrall (Chain Lightning)", fail: "Boss gains 20% Shield." },
            { name: "Siege Breaker", objective: "Escort Siege Engine to Gate. Defend vs Cultists.", npc: "Engineers (Repair Engine)", fail: "Boss gains 10% Dmg Reduction." }
          ],
          bosses: [
            {
              name: "Rage Winterchill", phases: [
                { title: "Phase 1: Frostbound Sentinel", desc: "Shield at 75% HP absorbs damage. Breaking shards spawns elementals to kill." },
                { title: "Phase 2: Shattered Rage", desc: "Shield shatters -> Glacial Nova (Slow). Boss berserks (25% speed)." },
                { title: "Phase 3: Icy Retribution", desc: "<25% HP. Marks players with Frozen Mark; must stand in Jaina's thaw zones." }
              ]
            },
            {
              name: "Anetheron", phases: [
                { title: "Phase 1: Corruption Bonds", desc: "Pairs players with damage links. Must spread >15yds. Impacted by Wave 2 failure." },
                { title: "Phase 2: Fel Hound Uprising", desc: "Summons 4 Hounds that hunt Healers. Requires coordinated CC/Stuns." },
                { title: "Phase 3: Fel Nova", desc: "Massive AoE forcing LoS behind environmental pillars. Infernal Rain targets random areas." }
              ]
            },
            {
              name: "Kaz'rogal", phases: [
                { title: "Phase 1: Demonic Overload", desc: "Spawns Molten Shards. Tanks must interpose to avoid stack explosion." },
                { title: "Phase 2: Guillotine Enrage", desc: "Lethal frontal cone. Raid must destroy 3 Cinder Shards in 20s to cancel." },
                { title: "Phase 3: Lava Surge", desc: "Periodic lava vents force movement. Boss gains 'Burning Heart' cleave." }
              ]
            },
            {
              name: "Azgalor", phases: [
                { title: "Phase 1: Earthquake", desc: "Ranged must LoS behind pillars. Doom effect requires proactive dispels." },
                { title: "Phase 2: Empowered Allies", desc: "Summons previous wave NPCs (Treants/Siege) as allies for 45s." },
                { title: "Phase 3: Worldbreaker", desc: "Fills arena with death zones. Raid must navigate to Tyrande's Light Platforms." }
              ]
            },
            {
              name: "Archimonde", phases: [
                { title: "Enhancements", desc: "Fear pulse faster. Air Burst targets more players. Doomfire trails last longer." },
                { title: "Mid-Phase: Drain Nordrassil", desc: "Attempts to drain tree directly. Spawns roots that must be focus-fired." },
                { title: "Climax", desc: "World Tree visibly cracks. Tyrande's Tears create sanctuary zones if empowered." }
              ]
            }
          ],
          integration: {
            npcs: [
              { name: "Jaina", role: "Frost Nova Barriers & Cleansing Pools" },
              { name: "Thrall", role: "Chain Lightning & Earthbind Totems" },
              { name: "Tyrande", role: "Starfall, Healing, & Light Platforms" }
            ],
            loot: [
              { category: "Wave Tokens", desc: "Rare 'Hyjal Crests' drop from waves. Buy cosmetics/consumables." },
              { category: "Trinkets", desc: "Bosses drop trinkets with wave-synergy passives (e.g. +Dmg to slowed targets)." },
              { category: "Scaled Gear", desc: "Item levels adjusted to remain relevant alongside Black Temple (Tier 6.5)." }
            ]
          }
        },
        designDoc: "" // Deprecated but kept for safety if needed
      },
      {
        name: 'The Black Temple',
        type: 'Raid Overhaul (Tier 6)',
        image: 'https://i.imgur.com/SvVd7Lx.jpeg',
        lore: "The Narrative Climax. Black Temple is the crown jewel of TBC's mid-expansion. It is Illidan's stronghold.",
        bosses: ["**Illidan Stormrage:** The Betrayer himself.", "**The Illidari Council:** High command of the Illidari.", "**Mother Shahraz:** Matron of the harem."],
        blackTempleData: {
          overview: {
            rationale: "The Narrative Climax. Black Temple is the crown jewel of TBC's mid-expansion. It is Illidan's stronghold. In the original timeline, the tension was diluted by monotonous trash and underwhelming gatekeeper bosses. Our goal with v2.2 is to sharpen the pacing. We are injecting mechanical depth into every wing, weaving Illidan's presence into the very architecture, and ensuring the instance feels consequential.",
            issues: ["Pacing: Excessive, non-threatening trash.", "Boss Quality: Early bosses were 'loot piñatas'.", "Atmosphere: Disjointed corridors killed hype.", "Lack of Agency: Players felt like observers."],
            environment: [
              { title: "Architectural Overhaul", desc: "Divided into four distinct thematic zones." },
              { title: "Visual Language", desc: "Unique lighting rigs and Fel-tainted architecture." },
              { title: "Hazards", desc: "Fel Lava flows, Shadow Fissures, Soul Traps." }
            ]
          },
          bosses: [
            {
              tier: "Tier 1: The Gatekeepers", bosses: [
                { name: "High Warlord Naj'entus", desc: "Phase 1: 30% Fel Barrier. Phase 2: Pulse Nova. Phase 3: Hatred Imps." },
                { name: "Supremus", desc: "Phase 1: Lava Surge. Phase 2: Doomfire Orb. Phase 3: Magma Enrage (+50% dmg)." },
                { name: "Shade of Akama", desc: "Phase 1: Cleanse Orbs. Phase 2: Spirit Chains. Phase 3: Akama assists." }
              ]
            },
            {
              tier: "Tier 2: The Mid-Tier", bosses: [
                { name: "Teron Gorefiend", desc: "Clearer Ghost mechanics. Crushing Shadows stacking debuff." },
                { name: "Gurtogg Bloodboil", desc: "Acidic Wound stacks faster. Fel Rage less random. Arena shrinks." },
                { name: "Reliquary of Souls", desc: "Faster transitions. Tighter interrupt windows." },
                { name: "Mother Shahraz", desc: "Fatal Attraction larger radius. New Prismatic Aura Phase (Resistance rotation)." }
              ]
            },
            {
              tier: "Tier 3: The Inner Circle", bosses: [
                { name: "The Illidari Council", desc: "Gathios interrupts critical. Vanquish Shield requires swap." },
                { name: "Illidan Stormrage", desc: "P1: Shear Mitigation. P2: Faster Portals. P3: Summons Echoes. P4: Meta-Madness." }
              ]
            }
          ],
          wings: [
            { name: "Halls of Hatred", theme: "Naga / Aquatic Fel-Blue", hazard: "Water/Steam Vents" },
            { name: "Forge of Corruption", theme: "Industrial Red / Heat", hazard: "Fel Lava & Steam Pipes" },
            { name: "Celestial Sepulcher", theme: "Broken Draenei Void", hazard: "Shadow Fissures & Soul Traps" },
            { name: "Throne of the Betrayer", theme: "Open Sky Fel Green", hazard: "Patrolling Elite Demons" }
          ],
          misc: {
            npcs: [
              { name: "Illidan", role: "Taunts raid via voice-over." },
              { name: "Akama", role: "Tactical guidance & active combatant." }
            ],
            loot: [
              { category: "Wing Trinkets", desc: "Final bosses drop themed trinkets (e.g. Heart of the Forge)." },
              { category: "Black Temple Sigils", desc: "Currency for T6.5 crafted patterns." }
            ]
          }
        }
      }
    ],
    // --- OLD WORLD ---
    // --- OLD WORLD ---
    oldworld_zone: [
      {
        name: 'Molten Core (Timelocked)',
        type: '10-Man Raid',
        image: 'https://i.imgur.com/uoHMFpl.jpeg',
        lore: "**The Firelord Returns** \nRagnaros has been summoned once more, but this time, his power is unchecked. Level 70 Tuned (Tier 4 Equivalent).",
        geography: "**Loot Target:** \nilvl 110 (Tier 4 Equivalent sets). \n**Tuning:** \nStrict 10-Man. Requires 2 Tanks, 2 Healers, 6 DPS. Fire Resistance is crucial for Ragnaros and Baron Geddon (150+ unbuffed recommended).",
        mechanics: "**Core Mechanics:** \nThis raid introduces the 'Heat Level' system. Taking fire damage stacks a debuff that increases damage taken. It resets only when out of combat, forcing a brisk pace between pulls. \n\n**Key Shifts:** \n- **Curse of Agony:** Now a raid-wide mechanic on random trash, requiring Decurse priority. \n- **Lava Surge:** Randomly erupts from the floor, enforcing constant movement.",
        philosophy: {
          tbc: "In original TBC, Molten Core was a ghost town—a relic of 40-man nostalgia that offered no relevant power progression for level 70 players. It sat dormant, a vast cavern of wasted potential.",
          plus: "We have reignited the blackened depths. By retuning the raid for a tight, coordination-heavy 10-man group and introducing TBC-era mechanics (like reliance on specific resistance gear and intricate dispel rotations), Molten Core becomes a vital stepping stone for fresh level 70s."
        },
      },
      {
        name: 'Blackwing Lair (Timelocked)',
        type: '10-Man Raid',
        image: 'https://i.imgur.com/PrE1q0k.jpeg',
        lore: "**Nefarian's Experiments** \nThe Black Dragonflight has evolved. Level 70 Tuned (Tier 5 Equivalent).",
        geography: "**Loot Target:** \nilvl 128 (Tier 5 Equivalent sets). \n**Tuning:** \nPrecision 10-Man. Role checks are severe. \nRequires Hunters for Enrage dispels and Mages for reliable AoE control.",
        mechanics: "**Core Mechanics:** \nThe 'Black Flight' aura permeates the raid, reducing healing received by 10% per stack if players stand still too long. Constant stutter-stepping is required to drop stacks. \n\n**Key Shifts:** \n- **Suppression Devices:** Traps must be now be disarmed by Rogues mid-combat. \n- **Shadowflame:** Now leaves a persistent DoT, prioritizing consistent raid healing.",
        philosophy: {
          tbc: "Blackwing Lair was often reduced to a simple gear check in later expansions, losing the strategic depth that made it iconic.",
          plus: "We have restored Nefarian's genius. This 10-man version emphasizes role responsibility over raw numbers. Class Calls are now combined and lethal, punishing the entire raid if a single player fails their specific duty."
        },
      },
      {
        name: 'Ahn\'Qiraj (Timelocked)',
        type: '10-Man Raid',
        image: 'https://i.imgur.com/HFQ75Yc.jpeg',
        lore: "**The Old God Awakens** \nC'Thun stirs. Level 70 Tuned (Tier 6 Equivalent).",
        geography: "**Loot Target:** \nilvl 141 (Tier 6 Equivalent). \n**Tuning:** \nSprint 10-Man. High movement, low tolerance for error. \nNature Resistance is mandatory for Huhuran (200+ unbuffed).",
        mechanics: "**Core Mechanics:** \n'Sanity' is not just a C'Thun mechanic anymore. The entire raid applies a stacking 'Whispers' debuff that reduces Hit Chance. Killing trash mobs cleanses the mind. Speed is key. \n\n**Key Shifts:** \n- **Mounts:** You can ride Qiraji mounts throughout the entire instance. \n- **Sandstorms:** Periodic visibility reduction requires strict marking.",
        philosophy: {
          tbc: "Ahn'Qiraj was famously a marathon raid, testing endurance over skill. In the original timeline, it became an optional, often skipped tier.",
          plus: "We have transformed AQ into a sprint. The mechanics are faster, deadlier, and tuned for a Tier 6 equivalent challenge. This is no longer about slogging through trash; it is about surviving high-octane encounters."
        },
      },
      {
        name: 'Naxxramas (Timelocked)',
        type: '25-Man Raid',
        image: 'https://i.imgur.com/h0oLJpi.jpeg',
        lore: "**Tier 3 Reborn** \nThe Necropolis returns. Level 70 Tuned (Sunwell Plateau Equivalent).",
        geography: "**Loot Target:** \nilvl 149 (Sunwell Equivalent). \n**Tuning:** \n25-Man Mythic-style. \nThis is the ultimate test. Frost Resistance for Sapphiron is a hard gate.",
        mechanics: "**Core Mechanics:** \nNaxxramas has a 'Wing Affinity' system. Clearing a wing grants a raid-wide buff specialized for the next wing (e.g., Spider Wing grants Poison Resist). Order matters. \n\n**Key Shifts:** \n- **Teleporters:** Instant transport between cleared wings. \n- **Scourgestones:** Drop from every boss, used to upgrade Tier 3 to Tier 3.5 (TBC stats).",
        philosophy: {
          tbc: "Naxxramas was the pinnacle of Classic WoW, a raid so difficult only the elite saw it. In TBC, it was left behind, a floating fortress of unused assets.",
          plus: "We have tuned Naxxramas to be the ultimate Sunwell-tier challenge (Tier 6.5). It is the final exam of the expansion. Every boss has been amplified to require perfection, serving as the true final boss of the TBC Plus experience."
        },
      },
      {
        name: 'World Invasions',
        type: 'Open World Event',
        image: 'https://i.imgur.com/e5wE7xi.png',
        lore: "**A Realm Reborn** \nScourge and Legion invasions strike classic zones (Winterspring, EPL). Phase 1: Infiltration. Phase 2: Siege (World Boss). Phase 3: Rewards.",
        geography: "**Zones:** \nRotates weekly between Kalimdor and Eastern Kingdoms.",
        philosophy: { tbc: "Azeroth was empty.", plus: "Weekly reasons to go back to the old world." },
        bosses: ["**Invasion Commanders:** \nSpawn in the open world. Require 40+ players."],
        mechanics: "**Rewards:** \nHonor, Catch-up gear, and gathering nodes."
      },
      {
        name: 'The Chronicle of Azeroth',
        type: 'Weekly World Tour',
        image: 'https://i.imgur.com/WbvlN5b.jpeg',
        lore: "**Relive the History** \nChromie offers a weekly 'Chronicle' quest. Revisit iconic locations (e.g., Uther's Tomb, The Dark Portal, Mount Hyjal) to close minor time anomalies.",
        geography: "**Zones:** \nSpans the entire Old World. 5 Random locations per week.",
        philosophy: { tbc: "Old zones were dead.", plus: "Keeps the entire world relevant for max-level players." },
        bosses: ["**Time Anomalies:** \nMini-bosses that spawn at the location."],
        mechanics: "**Rewards:** \nMassive Reputation gains with all Alliance/Horde factions + 'Sands of Time' currency.",
        chronicleData: {
          overview: {
            rationale: "**Goal:** Make the entire world relevant again, not just Outland.\n\nEvery week, Chromie identifies 5 \"Time Anomalies\" across Azeroth—events where the timeline is fraying. Players must travel to these classic zones to repair the damage. This system encouragesmax-level players to revisit zones like Winterspring, Silithus, or the Plaguelands, breathing life into the old world.",
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
    ]
  };



  // --- COMPONENT: DETAIL VIEW ---
  const DetailModal = ({ item, onClose }) => {
    const [activeTab, setActiveTab] = useState(item?.blackTempleData ? 'overview' : item?.chronicleData ? 'overview' : item?.gruulMagData ? 'gruul' : item?.karaData ? 'normal' : item?.sscTkData ? 'ssc' : 'overview');
    const [progressionLevel, setProgressionLevel] = useState('base');

    if (!item) return null;

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity" onClick={onClose}></div>

        {/* Modal Content */}
        <div
          className="relative w-full max-w-7xl bg-[#080808] border border-[#444] shadow-[0_0_60px_rgba(194,156,85,0.15)] rounded-lg animate-in fade-in zoom-in duration-300 flex flex-col h-[90vh] overflow-hidden"
          style={{ borderImage: 'linear-gradient(to bottom, #c29c55, #5a4a2d) 1' }}
        >
          <UnifiedHeader
            icon={item.type.includes('Raid') ? Crown : Globe}
            section="The Archives"
            sub="Encounter Journal"
            title={item.name}
            quote={item.lore ? item.lore.split('\n')[0].replace(/\*\*/g, '') : "Explore the depths..."}
            onClose={onClose}
          />

          {/* DYNAMIC CONTENT AREA */}
          <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0a0a0a] relative">

            {/* Content Switch */}
            {item.hyjalData ? (
              // --- TABBED VIEW (HYJAL) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                {/* Tab Navigation */}
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.keys(item.hyjalData).map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                        ? 'text-[#c29c55] border-b-2 border-[#c29c55] bg-[#c29c55]/5'
                        : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tabKey === 'overview' && 'Overview'}
                      {tabKey === 'waves' && 'The 4 Waves'}
                      {tabKey === 'bosses' && 'Boss Tactics'}
                      {tabKey === 'integration' && 'NPCs & Rewards'}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW TAB */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed whitespace-pre-line">{formatText(item.hyjalData.overview.rationale)}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 bg-[#111] border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.hyjalData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="p-5 bg-[#111] border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Environmental Fixes</h4>
                          <ul className="space-y-3">
                            {item.hyjalData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WAVES TAB */}
                  {activeTab === 'waves' && (
                    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <p className="text-center text-[#8a7b62] text-sm italic mb-4">"No more mindless grinding. 4 Strategic Waves per boss."</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.hyjalData.waves.map((wave, i) => (
                          <div key={i} className="bg-[#111] border border-[#2f2f35] p-5 rounded hover:border-[#c29c55]/30 transition-colors group">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-hero text-[#f0e6d2] group-hover:text-[#c29c55] transition-colors">{wave.name}</h4>
                              <span className="text-[10px] bg-[#1a1c22] px-2 py-1 rounded text-[#5c5c63] border border-[#2f2f35]">Wave {i + 1}</span>
                            </div>
                            <div className="space-y-2 text-xs">
                              <p className="text-[#aeb6bf]"><strong className="text-[#5c5c63] uppercase tracking-wider text-[10px]">Objective:</strong> {wave.objective}</p>
                              <p className="text-[#aeb6bf]"><strong className="text-[#5c5c63] uppercase tracking-wider text-[10px]">NPC Support:</strong> <span className="text-[#84cc16]">{wave.npc}</span></p>
                              <p className="text-[#aeb6bf]"><strong className="text-[#5c5c63] uppercase tracking-wider text-[10px]">Failure Impact:</strong> <span className="text-red-400">{wave.fail}</span></p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* BOSSES TAB */}
                  {activeTab === 'bosses' && (
                    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                      {item.hyjalData.bosses.map((boss, i) => (
                        <div key={i} className="bg-[#1a1c22] border-l-4 border-[#c29c55] p-6 rounded shadow-lg">
                          <h3 className="font-hero text-xl text-[#f0e6d2] mb-4 flex items-center gap-3">
                            <Skull className="w-5 h-5 text-[#c29c55]" /> {boss.name}
                          </h3>
                          <div className="space-y-4">
                            {boss.phases.map((phase, pIndex) => (
                              <div key={pIndex} className="relative pl-4 border-l border-[#2f2f35]">
                                <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-[#5c5c63]"></span>
                                <h5 className="text-[#e0e0e0] text-sm font-bold mb-1">{phase.title}</h5>
                                <p className="text-[#aeb6bf] text-xs leading-relaxed">{phase.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* INTEGRATION TAB */}
                  {activeTab === 'integration' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="bg-[#111] p-6 rounded border border-[#2f2f35]">
                        <h4 className="font-hero text-[#c29c55] mb-4 flex items-center gap-2"><Crown className="w-4 h-4" /> NPC Integration</h4>
                        <ul className="space-y-4">
                          {item.hyjalData.integration.npcs.map((npc, i) => (
                            <li key={i} className="flex gap-3 text-xs">
                              <span className="text-[#e0e0e0] font-bold shrink-0 w-16">{npc.name}:</span>
                              <span className="text-[#aeb6bf]">{npc.role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#111] p-6 rounded border border-[#2f2f35]">
                        <h4 className="font-hero text-[#a335ee] mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> Loot & Rewards</h4>
                        <ul className="space-y-4">
                          {item.hyjalData.integration.loot.map((loot, i) => (
                            <li key={i} className="flex gap-3 text-xs">
                              <span className="text-[#e0e0e0] font-bold shrink-0 w-24">{loot.category}:</span>
                              <span className="text-[#aeb6bf]">{loot.desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : item.gruulMagData ? (
              // --- TABBED VIEW (GRUUL & MAGTHERIDON) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                {/* Custom Progression Header */}
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {/* Raid Tabs */}
                  <div className="flex">
                    {['gruul', 'magtheridon'].map((tabKey) => (
                      <button
                        key={tabKey}
                        onClick={() => setActiveTab(tabKey)}
                        className={`px-8 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                          ? 'text-[#c29c55] border-b-2 border-[#c29c55] bg-[#c29c55]/5'
                          : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                          }`}
                      >
                        {item.gruulMagData[tabKey].title}
                      </button>
                    ))}
                  </div>

                  {/* Progression Toggles (Right Aligned) */}
                  <div className="ml-auto flex items-center pr-6 gap-2 border-l border-[#2f2f35] pl-6">
                    <span className="text-[10px] text-[#5c5c63] uppercase tracking-widest font-bold hidden md:block">Difficulty Tier:</span>
                    {Object.entries(item.gruulMagData.toggles).map(([key, data]) => {
                      return (
                        <button
                          key={key}
                          onClick={() => setProgressionLevel(key)}
                          className={`px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded border transition-all ${progressionLevel === key
                            ? 'bg-[#c29c55] text-black border-[#c29c55] shadow-[0_0_10px_rgba(194,156,85,0.4)]'
                            : 'bg-[#1a1c22] text-[#5c5c63] border-[#2f2f35] hover:border-[#5c5c63]'
                            }`}
                          title={data.loot}
                        >
                          {data.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* ACTIVE TAB CONTENT (Gruul or Magtheridon) */}
                  {item.gruulMagData[activeTab] && (
                    <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">

                      {/* Vision & Toggles Context */}
                      <div className="mb-8">

                        {/* Progression Info Column */}
                        <div className="bg-[#111] border border-[#2f2f35] rounded p-5 flex flex-col md:flex-row items-center justify-between gap-6">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3 flex items-center gap-2">
                            <Crown className="w-4 h-4" /> Current Rewards ({item.gruulMagData.toggles[progressionLevel].label})
                          </h4>
                          <p className="text-[#e0e0e0] text-xs mb-2 font-bold">{item.gruulMagData.toggles[progressionLevel].loot}</p>
                          <div className="bg-[#1a1c22] p-2 rounded border border-[#2f2f35]">
                            <p className="text-[#a335ee] text-[10px] uppercase tracking-wider">{item.gruulMagData.toggles[progressionLevel].affix}</p>
                          </div>
                        </div>
                      </div>

                      {/* Design Grid (Pain -> Design -> Boost) */}
                      <div className="space-y-4">
                        <div className="hidden md:grid grid-cols-12 gap-4 border-b border-[#2f2f35] pb-2 text-[#5c5c63] text-[10px] uppercase tracking-widest font-bold">
                          <div className="col-span-2">Element</div>
                          <div className="col-span-3">Original Pain</div>
                          <div className="col-span-4 text-[#c29c55]">Improved Design</div>
                          <div className="col-span-3 text-[#a335ee]">Creativity Boost</div>
                        </div>

                        {item.gruulMagData[activeTab].grid.map((row, idx) => (
                          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start p-4 bg-[#0e0e10] border border-[#1f1f23] rounded hover:border-[#2f2f35] transition-colors">
                            <div className="md:col-span-2 font-hero text-[#e0e0e0] text-xs border-b md:border-b-0 border-[#2f2f35] pb-2 md:pb-0 mb-2 md:mb-0">{row.element}</div>
                            <div className="md:col-span-3 text-[#8a7b62] text-xs leading-relaxed"><span className="md:hidden text-[#5c5c63] font-bold uppercase text-[9px] block mb-1">Pain:</span>{row.pain}</div>
                            <div className="md:col-span-4 text-[#aeb6bf] text-xs leading-relaxed"><span className="md:hidden text-[#c29c55] font-bold uppercase text-[9px] block mb-1 mt-3">Fix:</span>{row.design}</div>
                            <div className="md:col-span-3 text-[#d8b4fe] text-xs leading-relaxed italic"><span className="md:hidden text-[#a335ee] font-bold uppercase text-[9px] block mb-1 mt-3">Boost:</span>{row.boost}</div>
                          </div>
                        ))}
                      </div>

                    </div>
                  )}
                </div>
              </div>
            ) : item.karaData ? (
              // --- TABBED VIEW (KARAZHAN) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.entries(item.karaData.tabs).map(([key, tab]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`px-8 py-4 text-xs font-hero uppercase tracking-widest transition-colors flex items-center gap-2 ${activeTab === key
                        ? 'text-[#c29c55] border-b-2 border-[#c29c55] bg-[#c29c55]/5'
                        : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tab.icon} {tab.title}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {item.karaData[activeTab] && (
                    <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">

                      {/* Context Header */}
                      <div className="mb-8 p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded">
                        <div className="bg-[#111] p-4 rounded border border-[#2f2f35]">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-2">Current Mode Focus</h4>
                          <p className="text-[#e0e0e0] text-xs leading-relaxed">{item.karaData[activeTab].desc}</p>
                        </div>
                      </div>

                      {/* Design Grid */}
                      <div className="space-y-4">
                        <div className="hidden md:grid grid-cols-12 gap-4 border-b border-[#2f2f35] pb-2 text-[#5c5c63] text-[10px] uppercase tracking-widest font-bold">
                          <div className="col-span-2">Feature / Boss</div>
                          <div className="col-span-3">Changes / Pain Points</div>
                          <div className="col-span-4 text-[#c29c55]">Design Solution</div>
                          <div className="col-span-3 text-[#a335ee]">Creativity Boost</div>
                        </div>

                        {item.karaData[activeTab].grid.map((row, idx) => (
                          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start p-4 bg-[#0e0e10] border border-[#1f1f23] rounded hover:border-[#2f2f35] transition-colors">
                            <div className="md:col-span-2 font-hero text-[#e0e0e0] text-xs border-b md:border-b-0 border-[#2f2f35] pb-2 md:pb-0 mb-2 md:mb-0">{row.element}</div>
                            <div className="md:col-span-3 text-[#8a7b62] text-xs leading-relaxed"><span className="md:hidden text-[#5c5c63] font-bold uppercase text-[9px] block mb-1">Pain:</span>{formatText(row.pain)}</div>
                            <div className="md:col-span-4 text-[#aeb6bf] text-xs leading-relaxed"><span className="md:hidden text-[#c29c55] font-bold uppercase text-[9px] block mb-1 mt-3">Fix:</span>{formatText(row.design)}</div>
                            <div className="md:col-span-3 text-[#d8b4fe] text-xs leading-relaxed italic"><span className="md:hidden text-[#a335ee] font-bold uppercase text-[9px] block mb-1 mt-3">Boost:</span>{formatText(row.boost)}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : item.sscTkData ? (
              // --- TABBED VIEW (SSC & TK) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.entries(item.sscTkData.tabs).map(([key, tab]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`px-8 py-4 text-xs font-hero uppercase tracking-widest transition-colors flex items-center gap-2 ${activeTab === key
                        ? 'text-[#c29c55] border-b-2 border-[#c29c55] bg-[#c29c55]/5'
                        : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tab.icon} {tab.title}
                    </button>
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {item.sscTkData[activeTab] && (
                    <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">

                      <div className="mb-8 p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded">
                        <div className="bg-[#111] p-4 rounded border border-[#2f2f35]">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-2">Flow & Wins</h4>
                          <p className="text-[#e0e0e0] text-xs leading-relaxed">{item.sscTkData[activeTab].flow}</p>
                        </div>
                      </div>

                      <div className="hidden md:grid grid-cols-12 gap-4 border-b border-[#2f2f35] pb-2 text-[#5c5c63] text-[10px] uppercase tracking-widest font-bold">
                        <div className="col-span-2">Feature / Boss</div>
                        <div className="col-span-3">Changes / Pain Points</div>
                        <div className="col-span-4 text-[#c29c55]">Design Solution</div>
                        <div className="col-span-3 text-[#a335ee]">Creativity Boost</div>
                      </div>

                      {item.sscTkData[activeTab].grid.map((row, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start p-4 bg-[#0e0e10] border border-[#1f1f23] rounded hover:border-[#2f2f35] transition-colors">
                          <div className="md:col-span-2 font-hero text-[#e0e0e0] text-xs border-b md:border-b-0 border-[#2f2f35] pb-2 md:pb-0 mb-2 md:mb-0">{row.element}</div>
                          <div className="md:col-span-3 text-[#8a7b62] text-xs leading-relaxed"><span className="md:hidden text-[#5c5c63] font-bold uppercase text-[9px] block mb-1">Pain:</span>{formatText(row.pain)}</div>
                          <div className="md:col-span-4 text-[#aeb6bf] text-xs leading-relaxed"><span className="md:hidden text-[#c29c55] font-bold uppercase text-[9px] block mb-1 mt-3">Fix:</span>{formatText(row.design)}</div>
                          <div className="md:col-span-3 text-[#d8b4fe] text-xs leading-relaxed italic"><span className="md:hidden text-[#a335ee] font-bold uppercase text-[9px] block mb-1 mt-3">Boost:</span>{formatText(row.boost)}</div>
                        </div>
                      ))}
                    </div>

                  )}
                </div>
              </div>
            ) : item.blackTempleData ? (
              // --- TABBED VIEW (BLACK TEMPLE) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.keys(item.blackTempleData).map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                        ? 'text-[#c29c55] border-b-2 border-[#c29c55] bg-[#c29c55]/5'
                        : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tabKey === 'overview' && 'Overview / Philosophy'}
                      {tabKey === 'bosses' && 'Boss Encounters'}
                      {tabKey === 'wings' && 'Wing Design'}
                      {tabKey === 'misc' && 'Lore & Loot'}
                    </button>
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.blackTempleData.overview.rationale}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.blackTempleData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Environmental Fixes</h4>
                          <ul className="space-y-3">
                            {item.blackTempleData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* BOSSES */}
                  {activeTab === 'bosses' && (
                    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.blackTempleData.bosses.map((tier, i) => (
                        <div key={i} className="space-y-4">
                          <h3 className="font-hero text-[#c29c55] border-b border-[#2f2f35] pb-2">{tier.tier}</h3>
                          <div className="grid grid-cols-1 gap-4">
                            {tier.bosses.map((boss, b) => (
                              <div key={b} className="bg-[#1a1c22] p-4 rounded border-l-2 border-[#5c5c63]">
                                <strong className="text-[#e0e0e0] block mb-1">{boss.name}</strong>
                                <p className="text-[#aeb6bf] text-xs">{boss.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* WINGS */}
                  {activeTab === 'wings' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.blackTempleData.wings.map((wing, i) => (
                        <div key={i} className="bg-[#111] p-5 border border-[#2f2f35] rounded hover:border-[#c29c55]/50 transition-colors">
                          <h4 className="font-hero text-[#f0e6d2] mb-2">{wing.name}</h4>
                          <p className="text-xs text-[#aeb6bf] mb-1"><strong className="text-[#5c5c63]">Theme:</strong> {wing.theme}</p>
                          <p className="text-xs text-[#aeb6bf]"><strong className="text-[#5c5c63]">Hazard:</strong> <span className="text-red-400">{wing.hazard}</span></p>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* MISC */}
                  {activeTab === 'misc' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35]">
                        <h4 className="font-hero text-[#c29c55] mb-4">NPC Integration</h4>
                        <ul className="space-y-4">
                          {item.blackTempleData.misc.npcs.map((npc, i) => (
                            <li key={i} className="text-xs text-[#aeb6bf]">
                              <strong className="text-[#e0e0e0]">{npc.name}:</strong> {npc.role}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35]">
                        <h4 className="font-hero text-[#c29c55] mb-4">Loot & Rewards</h4>
                        <ul className="space-y-4">
                          {item.blackTempleData.misc.loot.map((loot, i) => (
                            <li key={i} className="text-xs text-[#aeb6bf]">
                              <strong className="text-[#e0e0e0]">{loot.category}:</strong> {loot.desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : item.chronicleData ? (
              // --- TABBED VIEW (CHRONICLES) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {['overview', 'events', 'rewards'].map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                        ? 'text-[#c29c55] border-b-2 border-[#c29c55] bg-[#c29c55]/5'
                        : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tabKey}
                    </button>
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed whitespace-pre-line">{formatText(item.chronicleData.overview.rationale)}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.chronicleData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.chronicleData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* EVENTS (TWO COLUMNS) */}
                  {activeTab === 'events' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.chronicleData.events.map((event, i) => (
                        <div key={i} className="bg-[#1a1c22] p-5 rounded border border-[#2f2f35] hover:border-[#c29c55]/50 transition-colors group">
                          <div className="flex justify-between items-start mb-3 border-b border-[#2f2f35] pb-2">
                            <h4 className="font-hero text-[#f0e6d2] group-hover:text-[#c29c55] transition-colors">{event.event}</h4>
                            <span className="text-[10px] uppercase font-bold text-[#5c5c63] bg-black/40 px-2 py-1 rounded">{event.region}</span>
                          </div>
                          <p className="text-xs text-[#c29c55] font-bold mb-2 uppercase tracking-wide flex items-center gap-2">
                            <Compass className="w-3 h-3" /> {event.location}
                          </p>
                          <p className="text-[#aeb6bf] text-xs leading-relaxed">{event.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* REWARDS */}
                  {activeTab === 'rewards' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35]">
                        <h4 className="font-hero text-[#c29c55] mb-4">Currencies</h4>
                        <ul className="space-y-4">
                          {item.chronicleData.rewards.currencies.map((curr, i) => (
                            <li key={i} className="text-xs text-[#aeb6bf]">
                              <strong className="text-[#e0e0e0]">{curr.name}:</strong> {curr.desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35]">
                        <h4 className="font-hero text-[#c29c55] mb-4">Reputation</h4>
                        <ul className="space-y-4">
                          {item.chronicleData.rewards.reputation.map((rep, i) => (
                            <li key={i} className="text-xs text-[#aeb6bf]">
                              <strong className="text-[#e0e0e0]">{rep.name}:</strong> {rep.desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : item.designDoc ? (
              <div className="p-10 overflow-y-auto custom-scrollbar h-full">
                <div className="max-w-5xl mx-auto space-y-6 text-[#aeb6bf] text-sm leading-7 whitespace-pre-line">
                  {formatText(item.designDoc)}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-full overflow-hidden">
                {/* Left Column: Philosophy & Mechanics (7 cols) */}
                <div className="lg:col-span-7 p-8 overflow-y-auto custom-scrollbar border-r border-[#2f2f35] bg-[#0a0a0a]">
                  <div className="space-y-8">
                    {/* Architect's Notes */}
                    <div>
                      <h4 className="text-[#c29c55] font-hero text-sm mb-4 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                        <BookOpen className="w-4 h-4" /> Architect's Notes
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
                          <Compass className="w-4 h-4" /> The Lay of the Land
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
                          <Shield className="w-4 h-4" /> Core Mechanics
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
                        <Skull className="w-4 h-4" /> {item.tuning ? "System Details" : "Encounter Journal"}
                      </h4>
                      <ul className="space-y-4">
                        {item.bosses.map((boss, i) => {
                          // Split boss name from description if present
                          const separatorIndex = boss.indexOf(':');
                          const name = separatorIndex === -1 ? boss.replace(/\*\*/g, '') : boss.substring(0, separatorIndex).replace(/\*\*/g, '').trim();
                          const desc = separatorIndex === -1 ? null : boss.substring(separatorIndex + 1).trim();
                          return (
                            <li key={i} className="flex items-start gap-3 group">
                              <div className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-[#1a1c22] border border-[#2f2f35] text-[10px] text-[#5c5c63] font-hero shrink-0 group-hover:border-[#c29c55] group-hover:text-[#c29c55] transition-colors">
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
                </div>
              </div>
            )}
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

      {/* HEADER & HERO UNIFIED */}
      <UnifiedHeader
        icon="https://i.imgur.com/q9Dvzj3.jpeg"
        background="https://i.imgur.com/iM4mG67.jpeg"
        section="The Atlas of Outland"
        sub="v2.3"
        title="Uncharted Territory"
        quote="Explore the lost chapters of the Burning Crusade. From the depths of the Black Temple to the forgotten corners of Azeroth."
      />

      {/* Developer's Perspective (Moved below header) */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-left space-y-6 text-sm text-[#8a7b62] bg-[#0b0d10] p-8 rounded border border-[#2f2f35] shadow-xl">
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

      {/* CONTINENT TABS */}
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
              className={`py-5 px-8 font-hero text-sm uppercase tracking-[0.2em] transition-all border-b-4 ${activeContinent === key
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
      <div className="sticky top-0 z-40 bg-[#0b0d10] border-b border-[#2f2f35] mb-12 shadow-2xl overflow-x-auto no-scrollbar">
        <div className="container mx-auto flex justify-start lg:justify-center gap-3 p-3 min-w-max">
          {Object.entries(zones[activeContinent]).map(([key, zone]) => (
            <button
              key={key}
              onClick={() => setActiveZone(key)}
              className={`py-3 px-6 rounded-sm flex items-center gap-2 font-hero text-xs uppercase tracking-widest transition-all duration-300 ${activeZone === key
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
                    {formatText(item.lore)}
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
              {/* Contextual Extras Box */}
              <div className="bg-[#1a1c22] p-6 rounded border border-[#c29c55]/20 flex flex-col items-center justify-center text-center">
                <Compass className="w-10 h-10 text-[#c29c55] mb-3 opacity-40" />
                <p className="text-xs text-[#5c5c63] uppercase tracking-widest font-bold">Exploration Required</p>
                <span className="text-[#8a7b62] text-xs mt-1">Discover the entrance within the zone to unlock this entry in your journal.</span>
              </div>
            </div>

          )}
        </div>
      </div>
    </div >
  );
};

export default TheAtlasOfOutland;