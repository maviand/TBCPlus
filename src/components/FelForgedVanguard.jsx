import React, { useState, useEffect } from 'react';
import {
  Shield, Users, Hammer, Map as MapIcon, Scroll,
  Crown, Sword, Layout, ArrowRight, Lock, Unlock,
  Tent, Landmark, Coins, Globe, Skull, Book, Feather,
  Crosshair, Anchor, Zap, Clock, Star, AlertTriangle,
  Compass, Gem, Eye, Flame, X, Leaf, Mountain, Heart
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const FelForgedVanguard = () => {
  const [activeCategory, setActiveCategory] = useState('progression');
  const [activeSubTab, setActiveSubTab] = useState('warbands');
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

  // Helper for bold/color and italics formatting
  const formatText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, lineIndex) => {
      // Split by bold first
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const content = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex} className="text-[#ffd100] font-bold">{part.slice(2, -2)}</strong>;
        }
        // Then split by italics
        const subParts = part.split(/(\*.*?\*)/g);
        return subParts.map((subPart, subIndex) => {
          if (subPart.startsWith('*') && subPart.endsWith('*') && subPart.length > 2) {
            return <em key={`${partIndex}-${subIndex}`} className="text-white/90 italic">{subPart.slice(1, -1)}</em>;
          }
          return subPart;
        });
      });
      return (
        <React.Fragment key={lineIndex}>
          {content}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  // --- NAVIGATION STRUCTURE ---
  const categories = {
    progression: { label: 'Account & Power', icon: <Unlock className="w-5 h-5" /> },
    endgame: { label: 'Endgame Challenges', icon: <Swords className="w-5 h-5" /> },
    world: { label: 'Living World', icon: <Globe className="w-5 h-5" /> },
    guild: { label: 'Guild Sanctums', icon: <Crown className="w-5 h-5" /> }
  };

  const subTabs = {
    progression: [
      { id: 'warbands', label: 'Warbands: Outland' },
      { id: 'classwings', label: 'Shattrath Class Wings' },
      { id: 'paragon', label: 'Paragon of the Past' }
    ],
    endgame: [
      { id: 'heroicplus', label: 'Heroic+ Keystones' },
      { id: 'apexis', label: 'Apexis Solo Trials' }
    ],
    world: [
      { id: 'warboard', label: 'Shattrath War Board' },
      { id: 'skyreach', label: 'Ogre Skyreach Zone' }
    ],
    guild: [
      { id: 'sanctum', label: 'The Guild Sanctum' },
      { id: 'canvas', label: 'The Guild Canvas' }
    ]
  };

  // --- ICONS COMPONENT ---
  function Swords(props) { return <Sword {...props} />; }

  // --- CONTENT DATA ---
  const content = {
    warbands: {
      title: "Warbands: Account-Wide Progression",
      desc: "Inspired by *The War Within*, adapted for the soul of TBC. Attunements, dungeon keys, and reputation gates no longer punish rerolling. Your characters are a unified front.",
      items: [
        {
          name: "Warband-Wide Access",
          icon: <Unlock className="w-8 h-8 text-[#c29c55]" />,
          summary: "Unlock it once, use it forever. Keys and Attunements are shared.",
          detail: "**Source DNA:** The War Within Warbands. \n\n**Adaptation:** TBC's attunement chains are legendary, but repeating them on 4 alts is burnout. \n\n**Core Features:** \n1. **Shared Attunements:** If one character attunes to Karazhan, SSC, or Tempest Keep, all your Warband alts are cleared for entry. The 'Hand of A'dal' title remains character-specific, but the door is open for all. \n2. **Heroic Keys:** Reputation keys (Flamewrought, Reservoir, etc.) are one-and-done. Once purchased on any toon, they are unlocked for the account. \n3. **Dungeon Reputations:** The grind for Heroic unlocks is Warband-wide once you hit Exalted on a single character."
        },
        {
          name: "The Shattrath Vault",
          icon: <Lock className="w-8 h-8 text-[#c29c55]" />,
          summary: "Central banking and progression hub for your entire account.",
          detail: "**Location:** Lower City, Shattrath. \n\n**Function:** \nThis is a physical bank accessible by all your characters. \n\n**Features:** \n1. **Universal Storage:** Store currencies (Badges of Justice), crafting materials (Primals, Cloth), and account-bound catch-up gear. \n2. **The Collection:** Tracks your Warband's collective achievements. 'Every class has completed their Banner Quest' unlocks the **Outland Expedition Cloak** cosmetic for all. \n3. **The Mentor's Veil:** New characters in your Warband receive a buff granting increased XP and Reputation based on your main's progress. Your main paves the road for your alts."
        },
        {
          name: "Renown Tracks",
          icon: <Users className="w-8 h-8 text-[#c29c55]" />,
          summary: "Aldor, Scryer, and Shattered Sun are now Account-Wide Renown.",
          detail: "**The Problem:** Reputation in TBC was a per-character prison. \n\n**The Fix:** \nAldor, Scryer, and Shattered Sun Offensive now use a 'Renown' style track. \n\n**Mechanics:** \n1. **Shared Progress:** Reputation gained on your Mage counts for your Rogue. \n2. **Faction Choice:** The Aldor/Scryer choice is now **Warband-Locked**. You pledge your entire Warband to one faction. This prevents exploit swapping but allows for a cohesive narrative. \n3. **Catch-Up:** 'Warband Tokens' earned on a main can be sent to alts to instantly boost them to 'Honored' with key factions."
        }
      ]
    },
    classwings: {
      title: "Shattrath Class Wings",
      desc: "A home for every hero. Located in the Lower Terrace, these carved alcoves are public hubs where classes gather, learn, and display their prowess.",
      items: [
        {
          name: "Warrior: Arena of the Justicar",
          icon: <img src="/images/art/class_warrior.png" className="w-8 h-8 object-contain scale-125" alt="Warrior" />,
          summary: "Prove your honor in the circle of blood.",
          detail: "**The Atmosphere:** \nThe air smells of ozone, dried blood, and whetstone dust. The Arena of the Justicar is an open-air fighting pit carved into the Lower City bedrock. Orcish grunts spar with Draenei vindicators, their racial hatreds set aside for the purity of combat. The walls are lined with the shattered weapons of defeated pit lords.\n\n**The Mentor:** \nHigh Warlord Karrath, a Mag'har veteran who refused to drink the demon blood, now teaches the 'Art of the Clean Kill'. He believes rage must be focused like a laser, not an explosion.\n\n**The Banner Quest: 'The Unbroken Blade'** \n1. **The Challenge:** Karrath demands you defeat three Ogre Champions in the Nagrand Ring of Blood without healing.\n2. **The Forge:** Take their broken weapons to the Black Temple's lower distract and reforge them in fel-fire.\n3. **The Claim:** Return to Shattrath and plant the banner. \n*Reward: 'Blade of the Shattered Banner' (Weapon Illusion) & 'Justicar's Plate' (Cosmetic Set).*\n\n**Weekly Callings:**\n- **Tuesday:** *The Pit:* Win 3 Arena Skirmishes.\n- **Friday:** *Slayer's Pact:* Defeat a Raid Boss using a Two-Handed Weapon.\n- **Sunday:** *Meat Grinder:* Kill 50 Elite Demons in Blade's Edge."
        },
        {
          name: "Paladin: Hall of Light",
          icon: <img src="/images/art/class_paladin.png" className="w-8 h-8 object-contain scale-125" alt="Paladin" />,
          summary: "The union of Blood Knights and Vindicators.",
          detail: "**The Atmosphere:** \nBlindingly bright and silent, save for the hum of the Naaru. The Hall of Light is a cathedral of glass and floating crystals. Blood Knights and Vindicators stand on opposite sides, glaring at each other, but united by their duty to A'dal. The floor is polished obsidian, reflecting the constellations of the Nether.\n\n**The Mentors:** \nLady Liadrin and Vindicator Maraad argue constantly about philosophy. Liadrin believes the Light is a weapon to be commanded; Maraad believes it is a tide to be surrendered to. You must learn from both.\n\n**The Banner Quest: 'Swear to the Sunwell'** \n1. **The Spark:** Travel to the ruins of the Sunwell and recover a 'Mote of Pure Light' before the Legion claims it.\n2. **The Trial:** Use the mote to heal a corrupted Broken in the slums of Shattrath.\n3. **The Oath:** Kneel before A'dal and pledge your sword.\n*Reward: 'Sunwell Crusader's Tabard' & 'Libram of Endless Light' (Toy).*\n\n**Weekly Callings:**\n- **Tuesday:** *Bulwark:* Tank 5 Heroic Dungeon Bosses.\n- **Friday:** *Mender:* Heal 100,000 Damage in Battlegrounds.\n- **Sunday:** *Judgement:* Deal final blows to 20 Undead in Karazhan."
        },
        {
          name: "Hunter: The Bestial Perch",
          icon: <img src="/images/art/class_hunter.png" className="w-8 h-8 object-contain scale-125" alt="Hunter" />,
          summary: "A sanctuary for the beast masters of Outland.",
          detail: "**The Atmosphere:** \nLocated on a high terrace overlooking Terokkar, this wing is a mess of cages, drying hides, and exotic feathers. It smells of wet fur and campfire smoke. Hunters trade stories of the 'One That Got Away' while mending traps. A massive telescope points towards the Throne of Kil'jaeden.\n\n**The Mentor:** \nHalduron Brightwing, Ranger-General of Silvermoon, has come to Outland to hunt the ultimate prey. He respects only those who can track a beast for days without sleep.\n\n**The Banner Quest: 'The Alpha's Call'** \n1. **The Hunt:** Track and tame a Rare Elite beast from each of the 7 zones of Outland.\n2. **The Bond:** Spend 24 hours /played time with your pet active.\n3. **The Trophy:** Bring the head of a Fel Reaver to the Perch.\n*Reward: 'Cosmetic Quivers' (Visible on back) & 'Pet Collars' (Customization).*\n\n**Weekly Callings:**\n- **Tuesday:** *Big Game Hunter:* Skin 20 Elite Beasts in Nagrand.\n- **Friday:** *Trap Master:* Trap 10 enemy players in PvP.\n- **Sunday:** *Survivalist:* Complete a Heroic Dungeon without your pet dying."
        },
        {
          name: "Rogue: Nether-Shadow Den",
          icon: <img src="/images/art/class_rogue.png" className="w-8 h-8 object-contain scale-125" alt="Rogue" />,
          summary: "Where the shadows of Shattrath meet.",
          detail: "**The Atmosphere:** \nThere is no door to the Rogue wing. You must find the loose brick in the Lower City slums that opens the slide-wall. Inside, it's a speakeasy of poisons, stolen maps, and illicit contracts. Spies from the Scryers and Aldor trade secrets here in the dark.\n\n**The Mentor:** \n'The Ghost', a Shivarra assassin who defected from the Legion. She teaches that a blade in the back is worth ten in the hand. She speaks in riddles and disappears mid-sentence.\n\n**The Banner Quest: 'The Unseen Blade'** \n1. **The Heist:** Infiltrate the Black Temple's sewer entrance undetected and steal a map of the patrol routes.\n2. **The Poison:** Brew a vial of 'Fel-Bane' venom using herbs from Botanica.\n3. **The Kill:** Assassinate a Legion commander in Shadowmoon Valley without pulling aggro on his guards.\n*Reward: 'Nether-Pad Boots' (Silence footstep sounds) & 'Smoke Bomb' (Toy).*\n\n**Weekly Callings:**\n- **Tuesday:** *Pickpocket:* Steal 50 Lockboxes from Humanoids.\n- **Friday:** *Sabotage:* Sap 10 Enemy Players in Battlegrounds.\n- **Sunday:** *Contract:* Kill a specific Rare Spawn in Netherstorm."
        },
        {
          name: "Priest: Sanctum of Whispers",
          icon: <img src="/images/art/class_priest.png" className="w-8 h-8 object-contain scale-125" alt="Priest" />,
          summary: "A place of meditation between Light and Void.",
          detail: "**The Atmosphere:** \nThe Sanctum is divided in two. Half is bathed in golden sunlight, filled with incense and soft chanting. The other half is a void-shrouded quiet room where shadow priests whisper to the chaos. It is a place of perilous balance. Walking the line between sanity and madness.\n\n**The Mentor:** \nAnchorite Ishana, High Priestess of the Aldor. She struggles to keep the peace between the Holy and Shadow sects. She believes the Naaru are the answer to everything, but she fears what happens when a Naaru darkens.\n\n**The Banner Quest: 'Balance of the Soul'** \n1. **The Pilgrimage:** Meditate at the crystal shrines in Nagrand, Zangarmarsh, and Blade's Edge.\n2. **The Shadow:** Survive 5 minutes inside the Void-Storm of Manaforge Ultris.\n3. **The Unity:** Heal a tank while in Shadowform (using the quest item 'Gem of Duality').\n*Reward: 'Duality Toggle' (Toy - Switch idle stance) & 'Staff of the Naaru' (Transmog).*\n\n**Weekly Callings:**\n- **Tuesday:** *Exorcism:* Dispel 50 Magic Effects.\n- **Friday:** *Lifesaver:* Save an ally from death (Heal from <5% to 100%).\n- **Sunday:** *Mind Control:* MC an enemy off a cliff in Eye of the Storm."
        },
        {
          name: "Mage: Arcanum of Eternity",
          icon: <img src="/images/art/class_mage.png" className="w-8 h-8 object-contain scale-125" alt="Mage" />,
          summary: "The study of the chaotic nether energies.",
          detail: "**The Atmosphere:** \nBooks float in mid-air, rewriting themselves. The Arcanum is a tower inside a tower, larger on the inside than the outside. Mana wyrms swirl around the ceiling like house cats. It smells of ozone and old parchment. Apprentices constantly accidentally polymorph themselves.\n\n**The Mentor:** \nArchmage Vargoth. Yes, the one from the tower. He projects his image here to teach. He is arrogant, brilliant, and specifically obsessed with Ley Lines. He demands perfection.\n\n**The Banner Quest: 'Stabilize the Nether'** \n1. **The Leak:** Identify 3 Manaforges in Netherstorm that are leaking chaotic energy.\n2. **The Seal:** Use the 'Arcane Binder' to close the rifts while fighting off Ethereal scavengers.\n3. **The Codex:** Decipher the Archmage's diary pages found in Karazhan.\n*Reward: 'Floating Grimoire' (Pet) & 'Arcane Drift' (Movement Trail Visual).*\n\n**Weekly Callings:**\n- **Tuesday:** *Spellpower:* Deal 1,000,000 Total Damage in Dungeons.\n- **Friday:** *Portals:* Open a portal for 20 group members.\n- **Sunday:** *Decurse:* Remove 30 Curses in Raids."
        },
        {
          name: "Warlock: The Fel Conclave",
          icon: <img src="/images/art/class_warlock.png" className="w-8 h-8 object-contain scale-125" alt="Warlock" />,
          summary: "Binding the powers that destroyed this world.",
          detail: "**The Atmosphere:** \nHidden behind a velvet curtain in the Lower City tavern, the Conclave is a dark, opulent lounge. Succubi serve drinks while Warlocks play cards with souls as currency. It feels dangerous, illicit, and incredibly cool. Green fire burns in the hearth.\n\n**The Mentors:** \nThe Eredar Twins (Defectors). They claims to have fled Kil'jaeden's service, but no one trusts them. They teach that Fel is not a religion, but a tool. A hammer to break the Legion.\n\n**The Banner Quest: 'The Bindings of Flesh'** \n1. **The Name:** Learn the true name of a Pit Lord in Shadowmoon Valley.\n2. **The Circle:** Draw a summoning circle using reagents looted from Heroic Dungeons.\n3. **The Bind:** Summon and enslave the Pit Lord for 5 minutes to crush a target dummy.\n*Reward: 'Felbrand Glyphs' (Green Fire visuals for Shadow Bolt) & 'Imp in a Ball' (Toy).*\n\n**Weekly Callings:**\n- **Tuesday:** *Soul Harvest:* Create 50 Healthstones.\n- **Friday:** *Summoner:* Summon 10 Lazy Raiders to the stone.\n- **Sunday:** *Executioner:* Kill 5 Players with DoTs in PvP."
        },
        {
          name: "Shaman: Totemic Hollow",
          icon: <img src="/images/art/class_shaman.png" className="w-8 h-8 object-contain scale-125" alt="Shaman" />,
          summary: "Communing with the broken elements of Draenor.",
          detail: "**The Atmosphere:** \nAn open-air grotto near the Scryer tier, filled with waterfalls and floating earth motes. The elements of Outland are angry and broken; the Hollow is the only place they are calm. Totems of every tribe—Tauren, Orc, Troll, Draenei—line the walls.\n\n**The Mentor:** \nFarseer Nobundo. The first Broken Shaman. He speaks softly, his voice like grinding stones. He teaches that the elements obtain strength through survival, just like the Broken.\n\n**The Banner Quest: 'Heal the Earth'** \n1. **The Call:** Listen to the screams of the fire elementals at the Throne of Kil'jaeden.\n2. **The Soothe:** Bring 20 'Primal Waters' to douse their rage.\n3. **The Storm:** Channel lightning at the top of the Spire in Blade's Edge to charge the 'Thunder-Key'.\n*Reward: 'Stormfury Totem' (Skins) & 'Ghost Wolf' (Element-Shift Forms).*\n\n**Weekly Callings:**\n- **Tuesday:** *Bloodlust:* Cast Bloodlust/Heroism in 5 Boss Fights.\n- **Friday:** *Purge:* Remove 20 Magic buffs from enemies.\n- **Sunday:** *Reincarnate:* Self-resurrect during a wipe to save the run."
        },
        {
          name: "Druid: Wildgrove Retreat",
          icon: <img src="/images/art/class_druid.png" className="w-8 h-8 object-contain scale-125" alt="Druid" />,
          summary: "Preserving life in a dying world.",
          detail: "**The Atmosphere:** \nA miraculous garden growing in the middle of the city. Vines climb the white stone walls, and moonwells glow with soft light. It is a refuge for life. Druids here are desperate gardeners, trying to save every seed of Draenor before it blows away into the Nether.\n\n**The Mentor:** \nZen'kiki (The quirky student). Just kidding. It's Archdruid Lilliandra. She is fierce and unyielding. She views the Legion as a forest fire that must be stomped out.\n\n**The Banner Quest: 'Awaken the Dreamseed'** \n1. **The Seed:** Loot a Dormant Dreamseed from the Botanica.\n2. **The Soil:** Plant it in the dead red earth of Hellfire Peninsula.\n3. **The Growth:** Defend the sapling from 3 waves of Felboars while healing it.\n*Reward: 'Primal Form Glyphs' (New Bear/Cat skins based on Outland creatures) & 'Treant Form' (Resto).*\n\n**Weekly Callings:**\n- **Tuesday:** *Gatherer:* Collect 50 Herbs/Ores in Flight Form.\n- **Friday:** *Innervate:* Restore 50,000 Mana to Healers.\n- **Sunday:** *Combat Res:* Battle-Resurrect 5 allies in Raids."
        }
      ]
    },
    heroicplus: {
      title: "Heroic+ Keystones (H+)",
      desc: "Borrowing the brilliance of Mythic+, but recasting it in the soul of TBC. Dangerous, flavorful, rewarding dungeons that scale infinitely.",
      items: [
        {
          name: "The Keystone System",
          icon: <Compass className="w-8 h-8 text-[#c29c55]" />,
          summary: "Infinite scaling for 5-man content.",
          detail: "**Lore:** Keystones are relics infused with Fel or Nether energy found in boss hoards. \n**Mechanics:** \n1. **Entry:** Keys drop from Heroic end chests. \n2. **Scaling:** Each level raises enemy health/damage by 10% and adds affixes at +2, +5, +8. \n3. **The Anchor:** A new altar in Shattrath allows you to empower or downgrade keys."
        },
        {
          name: "Outland Affixes",
          icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
          summary: "Thematic modifiers, not just random noise.",
          detail: "**1. Fel Surge:** Periodic raid-wide shadowfire damage. Dispelling it grants a short Haste buff. Forces a purge/cleanse rotation. \n**2. Ethereal Phase:** Random trash pulls enter an ethereal state (immune to physical). Requires spell damage or CC shatter mechanics. \n**3. Nether Rifts:** Shifting safe/unsafe zones (purple voids) rotate through rooms. \n**4. Coilfang Flood:** Water levels visually rise in the dungeon, silencing or slowing players if they fail positioning checks."
        },
        {
          name: "Rewards & Prestige",
          icon: <Crown className="w-8 h-8 text-[#c29c55]" />,
          summary: "Gear, mounts, and teleports.",
          detail: "**Badges of Justice+:** An upgraded currency dropped in H+ that buys Pre-T6 equivalent gear and crafting mats (Nether Vortex). \n**Master Teleports:** Completing a dungeon at +10 unlocks a permanent teleport spell to its entrance. \n**Cosmetics:** Exclusive mount recolors (Fel Talbuk, Armored Nether Ray) and titles like 'Breaker of the Rift'."
        }
      ]
    },
    apexis: {
      title: "Apexis Challenges: Solo Trials",
      desc: "The Mage Tower of TBC. Scattered across Outland are Apexis Obelisks. Attuning to them pulls you into gear-normalized solo encounters that test mastery of your class.",
      items: [
        {
          name: "The Concept",
          icon: <Star className="w-8 h-8 text-blue-400" />,
          summary: "Solo skill checks with normalized gear.",
          detail: "**The Obelisks:** Ancient Arakkoa beacons that channel cosmic power. \n**Gameplay:** No raid team, no carries. Just you. Gear is scaled down to a specific ilvl to ensure the challenge remains difficult forever. \n**Access:** Unlocks at level 70 via the 'Attune the Obelisks' questline."
        },
        {
          name: "The Trials",
          icon: <Swords className="w-8 h-8 text-red-500" />,
          summary: "Unique scenarios for every spec.",
          detail: "**Warlocks (Shadowmoon Abyss):** Duel a lesser Illidari jailor who summons imps and curses. Must juggle CC, interrupts, and survivability. \n**Hunters (Blade's Edge):** Kite a Fel Reaver around a micro-arena with traps and line-of-sight pillars. \n**Priests (Netherstorm):** Heal injured Sha'tar NPCs through waves of AoE felfire while dispelling corruption. \n**Rogues:** Survive an Ethereal assassin gauntlet. Timed vanish breaks and interrupt tests."
        },
        {
          name: "The Rewards",
          icon: <Gem className="w-8 h-8 text-purple-400" />,
          summary: "Evergreen cosmetics and bragging rights.",
          detail: "**Spell Tints:** Unlock 'Green Fire' style recolors for spells (e.g., Blue Pyroblast, Void-tinted Shadowform). \n**Mounts:** Class-themed mounts like the **Netherhawk** (Casters), **Dire Talbuk** (Melee), and **Void Disc** (Hybrids). \n**Titles:** 'Breaker of the Obelisks' (First Clear) and 'Master of the Apexis' (All specs)."
        }
      ]
    },
    warboard: {
      title: "Shattrath War Board",
      desc: "Dynamic Outland Assignments. Instead of a repetitive grind of daily quests, adventurers rally around a rotating War Board in Shattrath City.",
      items: [
        {
          name: "Dynamic Missions",
          icon: <MapIcon className="w-8 h-8 text-[#c29c55]" />,
          summary: "Daily rotations of zone-wide objectives.",
          detail: "**The Loop:** Every day, 3-4 assignments appear. \n**Examples:** \n1. *Netherstorm Sabotage:* Disable Manaforges and slay ethereal overseers. \n2. *Nagrand Escorts:* Defend Kurenai caravans. \n3. *Blade's Edge Bombardment:* Use goblin rocket packs to dive-bomb Legion fortifications. \n**Weekly Emissary:** Completing 4 faction contracts unlocks a Bonus Cache."
        },
        {
          name: "Faction Identity",
          icon: <Shield className="w-8 h-8 text-blue-500" />,
          summary: "Aldor vs Scryer matters.",
          detail: "**Tension:** Both factions post assignments. You can only pledge to one emissary's call per rotation. \n**Rewards:** Faction-locked cosmetics like **Aldor Rune Auras** (Holy script effects) or **Scryer Fel-Glow Eyes**."
        }
      ]
    },
    skyreach: {
      title: "The Ogre Skyreach",
      desc: "A TBC+ Exclusive Zone. Inspired by the Timeless Isle, this hidden mesa above Blade's Edge is a sandbox playground.",
      items: [
        {
          name: "The Zone",
          icon: <Mountain className="w-8 h-8 text-stone-400" />,
          summary: "A brutal playground in the sky.",
          detail: "**Location:** Hidden mesa above Blade's Edge. Accessible via Ogre Cannons. \n**Vibe:** High-danger, verticality, wind tunnels. \n**No Flying:** Ground mounts only to emphasize the platforming and danger."
        },
        {
          name: "Micro-Events",
          icon: <Clock className="w-8 h-8 text-amber-500" />,
          summary: "Constant action, no schedules.",
          detail: "**Sky Bandit Hijack:** Fel orcs riding netherdrakes swoop in; down them for loot. \n**Cannon Defense:** Man Ogre cannons to shoot down demons. \n**King of the Crag:** Open-world PvP hotspot. Hold the spire for massive currency gain."
        },
        {
          name: "Ogre Seals",
          icon: <Coins className="w-8 h-8 text-yellow-400" />,
          summary: "The currency of the mountain.",
          detail: "**Earned by:** Rares, chests, events. \n**Spend on:** **Felbat Mount**, **Ogre War-Masks** (Helm transmog), and **Artisan's Trinkets** (Toys like portable cannons)."
        }
      ]
    },
    paragon: {
      title: "Paragon of the Past",
      desc: "Your exploits in Azeroth are not forgotten. The factions of the Old World have sent emissaries to Outland, offering rewards for your continued loyalty.",
      items: [
        {
          name: "Reputation Caches",
          icon: <Coins className="w-8 h-8 text-[#c29c55]" />,
          summary: "Exalted reputation now grants rewards past the cap.",
          detail: "**The System:** Earning reputation with Factions like Argent Dawn, Thorium Brotherhood, or Zandalar Tribe after reaching Exalted now fills a 'Paragon Bar'. \n**The Reward:** Each fill grants a 'Cache of the Old Alliances' containing heavy amounts of gold, crafting mats (Arcane Crystals), and rare chances at T3 token scraps."
        },
        {
          name: "Heritage Armor",
          icon: <Shield className="w-8 h-8 text-blue-500" />,
          summary: "Race-specific cosmetic sets.",
          detail: "**Unlock:** Reaching Exalted with all your home faction cities (e.g., Orgrimmar, Darkspear, Thunder Bluff) unlocks a questline to claim your Heritage Armor, a purely cosmetic high-res set that celebrates your race's history."
        }
      ]
    },
    sanctum: {
      title: "The Guild Sanctum",
      desc: "The beating heart of your guild, a physical space that evolves with your achievements.",
      items: [
        {
          name: "The Great Hall",
          icon: <Crown className="w-8 h-8 text-[#c29c55]" />,
          summary: "Central hub and achievement display.",
          detail: "**The Epic Tapestry:** A dynamic, physical achievement board that grows longer with every boss kill. \n**The Bountiful Board:** Activate rotating utility buffs (e.g., 'Scribe's Wisdom') for all members. \n**Portal Network:** Unlock direct links to major faction hubs."
        },
        {
          name: "The Iron Wing",
          icon: <Hammer className="w-8 h-8 text-gray-400" />,
          summary: "Industrial powerhouse and crafting.",
          detail: "**Sanctum Workshops:** Unlock guild-only recipes like 'Paragon's Plate'. \n**Shared Crafting Queue:** Members deposit mats; master crafters batch-process them instantly. \n**Salvage Yard:** Passively generates resources from failed crafts."
        },
        {
          name: "The War Room",
          icon: <MapIcon className="w-8 h-8 text-red-500" />,
          summary: "Strategic nerve center.",
          detail: "**Territory Control Map:** Manage upkeep for captured zones like Halaa. \n**Bounty Contract Board:** Generates weekly 'Guild Contracts'—challenging group quests (e.g., 'Cull the Beast: Slay Gruul') that reward massive Accord Points."
        },
        {
          name: "The Barracks",
          icon: <Tent className="w-8 h-8 text-green-500" />,
          summary: "Housing and rest.",
          detail: "**Personal Housing:** Instanced rooms for every member, shared by their Warband. \n**Trophy Racks:** Display tier sets. \n**Rested XP:** Logging out here grants accelerated Rested XP to your entire Warband."
        },
        {
          name: "The Lore Library",
          icon: <Book className="w-8 h-8 text-blue-400" />,
          summary: "History and research.",
          detail: "**Guild Sagas:** Auto-generated cinematic videos of your guild's season highlights. \n**Artifact Research:** Decrypt fragments found in the world to unlock Sanctum furniture."
        },
        {
          name: "The Menagerie",
          icon: <Feather className="w-8 h-8 text-orange-400" />,
          summary: "Beasts and trophies.",
          detail: "**Beast Corral:** Showcases rare mounts collected by members. \n**Boss Trophies:** Display the head of Onyxia or Magtheridon. \n**Stable Master:** Unique vendor for mount equipment."
        }
      ]
    },
    canvas: {
      title: "The Guild Canvas",
      desc: "A modular talent tree for your guild. Earn Accord Points (AP) to specialize your community into a military force, an economic empire, or a band of god-slayers.",
      items: [
        {
          name: "Path of Dominion",
          icon: <Shield className="w-8 h-8 text-red-600" />,
          summary: "A doctrine of absolute control. Guilds that walk this path are the enforcers of their faction's will.",
          detail: "**Focus:** World PvP, Holding Territory, & Crowd Control. \n\n**Talents:** \n**The Long March:** Your crusades never tire. Mount speed increased by 10% in contested zones, allowing for rapid redeployment. \n**Vigilance:** The eyes of the guild are everywhere. Captured towers reveal stealth units within 100 yards, preventing ninja-caps. \n**Iron Tithe:** War requires funding. Every honorable kill grants 5 silver directly to the Guild Bank."
        },
        {
          name: "Path of Prosperity",
          icon: <Coins className="w-8 h-8 text-yellow-500" />,
          summary: "The golden artery of the war effort. These guilds understand that gold is sharper than steel.",
          detail: "**Focus:** Economy, Crafting, & Logistics. \n\n**Talents:** \n**Market Savvy:** Insider trading. Auction House cuts are reduced by 50% for all members. \n**Aetherium Attunement:** Tapping into the leylines. Crafting criticals spawn a 'Mote of Pure Energy' that can be traded or sold. \n**Bulk Logistics:** Industrial scale efficiency. Crafting actions are 50% faster and have a chance to not consume reagents."
        },
        {
          name: "Path of Conquest",
          icon: <Crosshair className="w-8 h-8 text-purple-500" />,
          summary: "For those who seek to dethrone gods. Conquest guilds live and die by the raid lockout.",
          detail: "**Focus:** Raiding, Dungeon Speed, & Boss Slaying. \n\n**Talents:** \n**Felweaver's Forge:** A pocket dimension anvil. Repair costs reduced by 20% and can repair inside instances. \n**Slayer's Insight:** Knowledge is power. Damage against Raid Bosses increased by 1%. \n**Warband Synergy:** The bond of brothers. If a raid member dies, they can be combat-resurrected instantly once per fight without counting towards the druid limit."
        }
      ]
    }
  };

  // --- MODAL COMPONENT ---
  const DetailModal = ({ item, onClose }) => {
    if (!item) return null;
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" onClick={onClose}></div>
        <div
          className="relative w-full max-w-4xl bg-[#080808] border border-[#444] shadow-[0_0_60px_rgba(194,156,85,0.15)] rounded-lg animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh] overflow-hidden"
          style={{ borderImage: 'linear-gradient(to bottom, #c29c55, #5a4a2d) 1' }}
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors"><X className="w-8 h-8" /></button>

          <div className="p-8 pb-6 border-b border-[#2f2f35] bg-[#0c0c0c] flex items-start gap-6">
            <div className="w-20 h-20 bg-[#1a1c22] border border-[#c29c55] rounded flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <h2 className="font-hero text-3xl text-[#f0e6d2] mb-2">{item.name}</h2>
              <p className="text-[#aeb6bf] text-sm">{item.summary}</p>
            </div>
          </div>

          <div className="p-8 overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
            <div className="text-[#e0e0e0] text-sm leading-relaxed whitespace-pre-line font-sans">
              {formatText(item.detail)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#e0e0e0] font-sans selection:bg-[#c29c55] selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #080808; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
      `}</style>

      {/* HERO */}
      <UnifiedHeader
        icon="https://i.imgur.com/xz9m7dI.jpeg"
        background="https://i.imgur.com/nqPIP1z.jpeg"
        section="Systems"
        sub="Progression & Power"
        title="Fel-Forged Vanguard"
        quote="A new era of war requires a new kind of army."
      />

      {/* NAV */}
      <div className={`sticky top-20 z-50 bg-[#0b0d10]/95 backdrop-blur border-y border-[#2f2f35] transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2 md:gap-8 mb-4">
            {Object.entries(categories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => { setActiveCategory(key); setActiveSubTab(subTabs[key][0].id); }}
                className={`flex items-center gap-2 px-4 py-2 rounded font-hero text-sm tracking-widest transition-all ${activeCategory === key ? 'text-[#c29c55] bg-[#c29c55]/10 border border-[#c29c55]/30' : 'text-[#5c5c63] hover:text-[#e0e0e0]'
                  }`}
              >
                {cat.icon} <span className="hidden md:inline">{cat.label}</span>
              </button>
            ))}
          </div>
          <div className="flex justify-center gap-6 text-sm border-t border-[#2f2f35] pt-4">
            {subTabs[activeCategory].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`font-body font-bold uppercase tracking-wider transition-colors relative pb-1 ${activeSubTab === tab.id ? 'text-white' : 'text-[#5c5c63] hover:text-[#aeb6bf]'
                  }`}
              >
                {tab.label}
                {activeSubTab === tab.id && <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-[#c29c55] shadow-[0_0_10px_#c29c55]"></span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 py-16 max-w-6xl min-h-screen">
        {selectedEntry && <DetailModal item={selectedEntry} onClose={() => setSelectedEntry(null)} />}

        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="font-hero text-4xl text-[#c29c55] mb-6">{content[activeSubTab].title}</h2>
            <p className="font-body text-[#aeb6bf] text-lg max-w-3xl mx-auto">{formatText(content[activeSubTab].desc)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[activeSubTab].items.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedEntry(item)}
                className="bg-[#15171e] border border-[#2f2f35] p-8 rounded shadow-lg hover:border-[#c29c55] hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="mb-6 p-4 bg-[#0b0d10] rounded-full w-16 h-16 flex items-center justify-center border border-[#2f2f35] group-hover:border-[#c29c55]">
                  {item.icon}
                </div>
                <h3 className="font-hero text-xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">{item.name}</h3>
                <p className="font-body text-sm text-[#aeb6bf] leading-relaxed mb-6">{item.summary}</p>
                <span className="text-[#c29c55] text-xs uppercase tracking-widest font-bold flex items-center gap-2">Inspect <ArrowRight className="w-3 h-3" /></span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FelForgedVanguard;