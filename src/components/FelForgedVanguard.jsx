import React, { useState, useEffect } from 'react';
import {
  Shield, Users, Hammer, Map as MapIcon, Scroll,
  Crown, Sword, Layout, ArrowRight, Lock, Unlock,
  Tent, Landmark, Coins, Globe, Skull, Book, Feather,
  Crosshair, Anchor, Zap, Clock, Star, AlertTriangle,
  Compass, Gem, Eye, Flame, X, Leaf, Mountain, Heart,
  Grid, Award
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const FelForgedVanguard = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);

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
  const categorySections = {
    progression: ['warband', 'wings', 'paragon', 'vault', 'renown'],
    endgame: ['heroicplus', 'apexis'],
    world: ['warboard', 'skyreach'],
    guild: ['sanctum', 'canvas']
  };
  const categories = {
    progression: { label: 'Account & Power', icon: <Unlock className="w-5 h-5" /> },
    endgame: { label: 'Endgame Challenges', icon: <Swords className="w-5 h-5" /> },
    world: { label: 'Living World', icon: <Globe className="w-5 h-5" /> },
    guild: { label: 'Guild Sanctums', icon: <Crown className="w-5 h-5" /> }
  };

  // --- ICONS COMPONENT ---
  function Swords(props) { return <Sword {...props} />; }

  // --- VANGUARD MASTER DATA (Command Center) ---
  const vanguardMasterData = {
    tabs: {
      warband: { title: "Warband & Camp", icon: <Users className="w-4 h-4" />, subtitle: "Account-Wide Progression", category: 'progression', desc: "Your characters are no longer isolated. They are a family." },
      vault: { title: "Great Vault", icon: <Grid className="w-4 h-4" />, subtitle: "Weekly Rewards", category: 'progression', desc: "Bad luck protection, reimagined for TBC." },
      renown: { title: "Renown Tracks", icon: <Award className="w-4 h-4" />, subtitle: "Faction Reputation 2.0", category: 'progression', desc: "A 25-level visual track with tangible rewards." },
      wings: { title: "Class Wings", icon: <Sword className="w-4 h-4" />, subtitle: "Mage Tower Challenges", category: 'progression', desc: "Prove your mastery over your specific spec." },
      paragon: { title: "Paragon Levels", icon: <Star className="w-4 h-4" />, subtitle: "Post-Cap Progression", category: 'progression', desc: "Level 70 is just the beginning." },
      heroicplus: { title: "Heroic+ Keystones", icon: <Compass className="w-4 h-4" />, subtitle: "Infinite Dungeon Scaling", category: 'endgame', desc: "New affixes and rewards for 5-man content." },
      apexis: { title: "Apexis Trials", icon: <Zap className="w-4 h-4" />, subtitle: "Solo Challenges", category: 'endgame', desc: "Crystal-fueled solo arenas." },
      warboard: { title: "War Board", icon: <Layout className="w-4 h-4" />, subtitle: "Daily Systems", category: 'world', desc: "Centralized daily quests and events." },
      skyreach: { title: "Skyreach Zone", icon: <Mountain className="w-4 h-4" />, subtitle: "Sandbox Playground", category: 'world', desc: "A new Ogre zone in the clouds." },
      sanctum: { title: "Guild Sanctum", icon: <Landmark className="w-4 h-4" />, subtitle: "Guild Housing", category: 'guild', desc: "A home for your guild to grow." },
      canvas: { title: "The Canvas", icon: <Shield className="w-4 h-4" />, subtitle: "Guild Talent Trees", category: 'guild', desc: "Specialize your community." }
    },
    warband: {
      title: "The Warband: Unite Your Champions",
      desc: "Your characters are no longer isolated. They are a family—a Warband. They share a customizable base camp, resources, and reputation.",
      features: [
        { name: "The Warband Camp", desc: "A visual login screen where your top 5 characters sit around a campfire. Customize the background (Nagrand, Hellfire, etc.) and music." },
        { name: "Shared Reputation", desc: "Earn reputation on your main? Your alts unlock the rewards automatically up to one tier below." },
        { name: "Warband Bank", desc: "A massive, region-wide shared bank tab for crafting mats, gold, and BoA tokens." },
        { name: "Passive Missions", desc: "Assign offline characters to 'Forage' or 'Craft', earning minor resources while you play your main." }
      ]
    },
    vault: {
      title: "The Great Vault of Outland",
      desc: "Bad luck protection, reimagined. Located in Shattrath's Lower City, the Vault offers up to 9 choices of loot per week based on your activity.",
      tiers: [
        { name: "Raider's Row", req: "Defeat 3 / 6 / 9 Raid Bosses", reward: "Raid Tier Item" },
        { name: "Dungeoneer's Row", req: "Complete 1 / 4 / 8 Heroic+ Keys", reward: "Dungeon Set Item" },
        { name: "Gladiator's Row", req: "Earn 1500 / 3000 / 5000 Conquest", reward: "PvP Season Item" }
      ],
      currency: "**Steps of the Sun Token:** Don't like the choices? Take the token to upgrade a specific item slot or add a socket."
    },
    renown: {
      title: "Renown: The Grind Reborn",
      desc: "Gone are the invisible bars of 21,000 reputation. Enter Renown: a 25-level visual track with tangible rewards at every step.",
      tracks: [
        { faction: "Honor Hold", focus: "PvP & Dungeons", reward: "Alliance War-Mount" },
        { faction: "Cenarion Expedition", focus: "Ecology & Herding", reward: "Druidic Flight Form (All Classes)" },
        { faction: "The Sha'tar", focus: "Raiding & Arcatraz", reward: "Crystalforged Armor Sets" }
      ],
      levels: [
        { lvl: 5, reward: "+10% XP/Rep Account-Wide" },
        { lvl: 10, reward: "Rare Profession Recipes (BoA)" },
        { lvl: 20, reward: "Faction Tabard with Teleport" },
        { lvl: 25, reward: "Paragon Access (Infinite Chests)" }
      ]
    },
    wings: {
      title: "Class Wings: The Highlord's Trial",
      desc: "A solo-instanced challenge located in the Citadel. Prove your mastery over your specific spec to unlock prestigious rewards. No gear scaling—pure skill.",
      challenges: [
        { role: "Tank", name: "The Infinite Wall", desc: "Hold the line against endless waves of Void Terrors. Do not let the NPC die." },
        { role: "Healer", name: "The Corrupted Soul", desc: "Heal a dying Val'kyr while keeping your team alive through increasing ticking damage." },
        { role: "Melee DPS", name: "The Duelist's Dance", desc: "A 1v1 duel against a mirror image that learns your rotation." },
        { role: "Ranged DPS", name: "The Kiting Gauntlet", desc: "Slow and kite a massive Fel Reaver before it reaches you." }
      ],
      rewards: "**Tier 2 Remastered Sets** (High-Res Textures) & Class-Specific Mount Color Variants."
    },
    paragon: {
      title: "Paragon Levels: Beyond the Cap",
      desc: "Level 70 is just the beginning. Excess XP now fills your Paragon Bar, granting 'Motes of Light' to invest in a constellation tree.",
      nodes: [
        { name: "Traveler's Light", effect: "+1% Movement Speed (Max 15%)" },
        { name: "Merchant's Guile", effect: "+5% Vendor Sell Prices" },
        { name: "Craftsman's Eye", effect: "+10% Crafting Speed / +5% Rare Proc" },
        { name: "Soulshape", effect: "Unlock Ghost Wolf / Blink cosmetic FX" }
      ],
      note: "Paragon power is strictly Quality of Life and Open World efficiency. It provides **zero** combat power in Raids or Arena."
    },
    heroicplus: {
      title: "Heroic+ Keystones",
      desc: "Borrowing the brilliance of Mythic+, but recasting it in the soul of TBC. Dangerous, flavorful, rewarding dungeons that scale infinitely.",
      features: [
        { name: "Keystone System", desc: "Keys drop from Heroic chests. Each level raises enemy health/damage by 10% and adds affixes at +2, +5, +8." },
        { name: "Outland Affixes", desc: "Thematic modifiers: 'Fel Surge' (Shadowfire DoT), 'Ethereal Phase' (Phys Immunity), 'Nether Rifts' (Void Zones)." },
        { name: "Badges of Justice+", desc: "Upgraded currency drops in H+ to buy Pre-T6 equivalent gear and crafting mats like Nether Vortex." }
      ]
    },
    apexis: {
      title: "Apexis Challenges",
      desc: "The Mage Tower of TBC. Scattered across Outland are Apexis Obelisks. Attuning to them pulls you into gear-normalized solo encounters.",
      features: [
        { name: "Gear Normalization", desc: "No raid teams, no carries. Gear is scaled down to a specific ilvl to ensure the challenge remains difficult forever." },
        { name: "Class Scenarios", desc: "Warlocks duel Illidari jailors; Hunters kite Fel Reavers; Priests heal through waves of felfire." },
        { name: "Evergreen Rewards", desc: "Unlock 'Green Fire' style spell tints (e.g., Blue Pyroblast) and class-themed mounts like the Netherhawk." }
      ]
    },
    warboard: {
      title: "Shattrath War Board",
      desc: "Dynamic Outland Assignments. Instead of a repetitive grind of daily quests, adventurers rally around a rotating War Board.",
      features: [
        { name: "Dynamic Missions", desc: "Daily rotations: Disable Manaforges, Defend Kurenai caravans, Dive-bomb Legion fortifications." },
        { name: "Faction Identity", desc: "Aldor vs Scryer matters. You pledge to one emissary's call per rotation for faction-locked cosmetics." },
        { name: "Weekly Emissary", desc: "Completing 4 faction contracts unlocks a massive Bonus Cache containing raid-quality BoEs." }
      ]
    },
    skyreach: {
      title: "The Ogre Skyreach",
      desc: "A TBC+ Exclusive Zone. A brutal, vertical playground in the sky above Blade's Edge. No flying mounts allowed.",
      features: [
        { name: "Micro-Events", desc: "Constant action: 'Sky Bandit Hijack' (down drakes for loot), 'Cannon Defense' (shoot demons), 'King of the Crag' (Hold the spire)." },
        { name: "Ogre Seals", desc: "The currency of the mountain. Spend on Felbat Mounts, Ogre War-Masks, and Artisan Toys." },
        { name: "Verticality", desc: "Use Ogre Cannons, wind tunnels, and goblin gliders to navigate the perilous peaks." }
      ]
    },
    sanctum: {
      title: "The Guild Sanctum",
      desc: "The beating heart of your guild, a physical space that evolves with your achievements. Located in a pocket dimension.",
      features: [
        { name: "The Great Hall", desc: "Central hub with a dynamic 'Epic Tapestry' that visualizes your guild's boss kills and achievements." },
        { name: "Workshops", desc: "Unlock guild-only recipes. Members deposit mats into a shared queue; master crafters batch-process them instantly." },
        { name: "Personal Housing", desc: "The Barracks offers instanced rooms for every member, shared by their Warband, with trophy racks for tier sets." }
      ]
    },
    canvas: {
      title: "The Guild Canvas",
      desc: "A modular talent tree for your guild. Earn Accord Points (AP) to specialize your community into a military force, an economic empire, or a band of god-slayers.",
      features: [
        { name: "Path of Dominion", desc: "Focus: PvP & Territory. +10% Mount Speed, Stealth Detection Towers, Gold from HKs." },
        { name: "Path of Prosperity", desc: "Focus: Economy. Auction House cuts halved, Crafting Crits spawn energy motes, bulk crafting." },
        { name: "Path of Conquest", desc: "Focus: Raiding. Repair inside instances, +1% Boss Damage, Instant Combat Res." }
      ]
    }
  };

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
          detail: "**Source DNA:** The War Within Warbands. \n\n**Adaptation:** TBC's attunement chains are legendary, but repeating them on 4 alts is burnout. \n\n**Core Features:** \n1. **Shared Attunements:** If one character attunes to Karazhan, SSC, or Tempest Keep, all your Warband alts are cleared for entry. The 'Hand of A'dal' title remains character-specific, but the door is open for all. \n2. **Heroic Keys:** Reputation keys (Flamewrought, Reservoir, etc.) are one-and-done. Once purchased on any toon, they are unlocked for the account. \n3. **Dungeon Reputations:** The grind for Heroic unlocks is Warband-wide once you hit Exalted on a single character.",
          vanguardData: vanguardMasterData,
          initialTab: 'warband'
        },
        {
          name: "The Shattrath Vault",
          icon: <Lock className="w-8 h-8 text-[#c29c55]" />,
          summary: "Central banking and progression hub for your entire account.",
          detail: "**Location:** Lower City, Shattrath. \n\n**Function:** \nThis is a physical bank accessible by all your characters. \n\n**Features:** \n1. **Universal Storage:** Store currencies (Badges of Justice), crafting materials (Primals, Cloth), and account-bound catch-up gear. \n2. **The Collection:** Tracks your Warband's collective achievements. 'Every class has completed their Banner Quest' unlocks the **Outland Expedition Cloak** cosmetic for all. \n3. **The Mentor's Veil:** New characters in your Warband receive a buff granting increased XP and Reputation based on your main's progress. Your main paves the road for your alts.",
          vanguardData: vanguardMasterData,
          initialTab: 'vault'
        },
        {
          name: "Renown Tracks",
          icon: <Users className="w-8 h-8 text-[#c29c55]" />,
          summary: "Aldor, Scryer, and Shattered Sun are now Account-Wide Renown.",
          detail: "**The Problem:** Reputation in TBC was a per-character prison. \n\n**The Fix:** \nAldor, Scryer, and Shattered Sun Offensive now use a 'Renown' style track. \n\n**Mechanics:** \n1. **Shared Progress:** Reputation gained on your Mage counts for your Rogue. \n2. **Faction Choice:** The Aldor/Scryer choice is now **Warband-Locked**. You pledge your entire Warband to one faction. This prevents exploit swapping but allows for a cohesive narrative. \n3. **Catch-Up:** 'Warband Tokens' earned on a main can be sent to alts to instantly boost them to 'Honored' with key factions.",
          vanguardData: vanguardMasterData,
          initialTab: 'renown'
        }
      ]
    },
    classwings: {
      title: "Shattrath Class Wings",
      desc: "A home for every hero. Located in the Lower Terrace, these carved alcoves are public hubs where classes gather, learn, and display their prowess.",
      items: [
        {
          name: "Warrior: Arena of the Justicar",
          icon: <Sword className="w-8 h-8 text-[#ffd100]" />,
          summary: "Prove your honor in the circle of blood.",
          detail: "**The Atmosphere:** \nThe air smells of ozone, dried blood, and whetstone dust. The Arena of the Justicar is an open-air fighting pit carved into the Lower City bedrock. Orcish grunts spar with Draenei vindicators, their racial hatreds set aside for the purity of combat. The walls are lined with the shattered weapons of defeated pit lords.\n\n**The Mentor:** \nHigh Warlord Karrath, a Mag'har veteran who refused to drink the demon blood, now teaches the 'Art of the Clean Kill'. He believes rage must be focused like a laser, not an explosion.\n\n**The Banner Quest: 'The Unbroken Blade'** \n1. **The Challenge:** Karrath demands you defeat three Ogre Champions in the Nagrand Ring of Blood without healing.\n2. **The Forge:** Take their broken weapons to the Black Temple's lower distract and reforge them in fel-fire.\n3. **The Claim:** Return to Shattrath and plant the banner. \n*Reward: 'Blade of the Shattered Banner' (Weapon Illusion) & 'Justicar's Plate' (Cosmetic Set).*\n\n**Weekly Callings:**\n- **Tuesday:** *The Pit:* Win 3 Arena Skirmishes.\n- **Friday:** *Slayer's Pact:* Defeat a Raid Boss using a Two-Handed Weapon.\n- **Sunday:** *Meat Grinder:* Kill 50 Elite Demons in Blade's Edge.",
          vanguardData: vanguardMasterData,
          initialTab: 'wings'
        },
        {
          name: "Paladin: Hall of Light",
          icon: <Shield className="w-8 h-8 text-[#f48fb1]" />,
          summary: "The union of Blood Knights and Vindicators.",
          detail: "**The Atmosphere:** \nBlindingly bright and silent, save for the hum of the Naaru. The Hall of Light is a cathedral of glass and floating crystals. Blood Knights and Vindicators stand on opposite sides, glaring at each other, but united by their duty to A'dal. The floor is polished obsidian, reflecting the constellations of the Nether.\n\n**The Mentors:** \nLady Liadrin and Vindicator Maraad argue constantly about philosophy. Liadrin believes the Light is a weapon to be commanded; Maraad believes it is a tide to be surrendered to. You must learn from both.\n\n**The Banner Quest: 'Swear to the Sunwell'** \n1. **The Spark:** Travel to the ruins of the Sunwell and recover a 'Mote of Pure Light' before the Legion claims it.\n2. **The Trial:** Use the mote to heal a corrupted Broken in the slums of Shattrath.\n3. **The Oath:** Kneel before A'dal and pledge your sword.\n*Reward: 'Sunwell Crusader's Tabard' & 'Libram of Endless Light' (Toy).*\n\n**Weekly Callings:**\n- **Tuesday:** *Bulwark:* Tank 5 Heroic Dungeon Bosses.\n- **Friday:** *Mender:* Heal 100,000 Damage in Battlegrounds.\n- **Sunday:** *Judgement:* Deal final blows to 20 Undead in Karazhan.",
          vanguardData: vanguardMasterData,
          initialTab: 'wings'
        },
        {
          name: "Hunter: The Bestial Perch",
          icon: <Crosshair className="w-8 h-8 text-[#a5d6a7]" />,
          summary: "A sanctuary for the beast masters of Outland.",
          detail: "**The Atmosphere:** \nLocated on a high terrace overlooking Terokkar, this wing is a mess of cages, drying hides, and exotic feathers. It smells of wet fur and campfire smoke. Hunters trade stories of the 'One That Got Away' while mending traps. A massive telescope points towards the Throne of Kil'jaeden.\n\n**The Mentor:** \nHalduron Brightwing, Ranger-General of Silvermoon, has come to Outland to hunt the ultimate prey. He respects only those who can track a beast for days without sleep.\n\n**The Banner Quest: 'The Alpha's Call'** \n1. **The Hunt:** Track and tame a Rare Elite beast from each of the 7 zones of Outland.\n2. **The Bond:** Spend 24 hours /played time with your pet active.\n3. **The Trophy:** Bring the head of a Fel Reaver to the Perch.\n*Reward: 'Cosmetic Quivers' (Visible on back) & 'Pet Collars' (Customization).*\n\n**Weekly Callings:**\n- **Tuesday:** *Big Game Hunter:* Skin 20 Elite Beasts in Nagrand.\n- **Friday:** *Trap Master:* Trap 10 enemy players in PvP.\n- **Sunday:** *Survivalist:* Complete a Heroic Dungeon without your pet dying.",
          vanguardData: vanguardMasterData,
          initialTab: 'wings'
        },
        {
          name: "Rogue: Nether-Shadow Den",
          icon: <Skull className="w-8 h-8 text-[#fff59d]" />,
          summary: "Where the shadows of Shattrath meet.",
          detail: "**The Atmosphere:** \nThere is no door to the Rogue wing. You must find the loose brick in the Lower City slums that opens the slide-wall. Inside, it's a speakeasy of poisons, stolen maps, and illicit contracts. Spies from the Scryers and Aldor trade secrets here in the dark.\n\n**The Mentor:** \n'The Ghost', a Shivarra assassin who defected from the Legion. She teaches that a blade in the back is worth ten in the hand. She speaks in riddles and disappears mid-sentence.\n\n**The Banner Quest: 'The Unseen Blade'** \n1. **The Heist:** Infiltrate the Black Temple's sewer entrance undetected and steal a map of the patrol routes.\n2. **The Poison:** Brew a vial of 'Fel-Bane' venom using herbs from Botanica.\n3. **The Kill:** Assassinate a Legion commander in Shadowmoon Valley without pulling aggro on his guards.\n*Reward: 'Nether-Pad Boots' (Silence footstep sounds) & 'Smoke Bomb' (Toy).*\n\n**Weekly Callings:**\n- **Tuesday:** *Pickpocket:* Steal 50 Lockboxes from Humanoids.\n- **Friday:** *Sabotage:* Sap 10 Enemy Players in Battlegrounds.\n- **Sunday:** *Contract:* Kill a specific Rare Spawn in Netherstorm.",
          vanguardData: vanguardMasterData,
          initialTab: 'wings'
        },
        {
          name: "Priest: Sanctum of Whispers",
          icon: <Eye className="w-8 h-8 text-[#ce93d8]" />,
          summary: "A place of meditation between Light and Void.",
          detail: "**The Atmosphere:** \nThe Sanctum is divided in two. Half is bathed in golden sunlight, filled with incense and soft chanting. The other half is a void-shrouded quiet room where shadow priests whisper to the chaos. It is a place of perilous balance. Walking the line between sanity and madness.\n\n**The Mentor:** \nAnchorite Ishana, High Priestess of the Aldor. She struggles to keep the peace between the Holy and Shadow sects. She believes the Naaru are the answer to everything, but she fears what happens when a Naaru darkens.\n\n**The Banner Quest: 'Balance of the Soul'** \n1. **The Pilgrimage:** Meditate at the crystal shrines in Nagrand, Zangarmarsh, and Blade's Edge.\n2. **The Shadow:** Survive 5 minutes inside the Void-Storm of Manaforge Ultris.\n3. **The Unity:** Heal a tank while in Shadowform (using the quest item 'Gem of Duality').\n*Reward: 'Duality Toggle' (Toy - Switch idle stance) & 'Staff of the Naaru' (Transmog).*\n\n**Weekly Callings:**\n- **Tuesday:** *Exorcism:* Dispel 50 Magic Effects.\n- **Friday:** *Lifesaver:* Save an ally from death (Heal from <5% to 100%).\n- **Sunday:** *Mind Control:* MC an enemy off a cliff in Eye of the Storm.",
          vanguardData: vanguardMasterData,
          initialTab: 'wings'
        },
        {
          name: "Mage: Arcanum of Eternity",
          icon: <Zap className="w-8 h-8 text-[#90caf9]" />,
          summary: "The study of the chaotic nether energies.",
          detail: "**The Atmosphere:** \nBooks float in mid-air, rewriting themselves. The Arcanum is a tower inside a tower, larger on the inside than the outside. Mana wyrms swirl around the ceiling like house cats. It smells of ozone and old parchment. Apprentices constantly accidentally polymorph themselves.\n\n**The Mentor:** \nArchmage Vargoth. Yes, the one from the tower. He projects his image here to teach. He is arrogant, brilliant, and specifically obsessed with Ley Lines. He demands perfection.\n\n**The Banner Quest: 'Stabilize the Nether'** \n1. **The Leak:** Identify 3 Manaforges in Netherstorm that are leaking chaotic energy.\n2. **The Seal:** Use the 'Arcane Binder' to close the rifts while fighting off Ethereal scavengers.\n3. **The Codex:** Decipher the Archmage's diary pages found in Karazhan.\n*Reward: 'Floating Grimoire' (Pet) & 'Arcane Drift' (Movement Trail Visual).*\n\n**Weekly Callings:**\n- **Tuesday:** *Spellpower:* Deal 1,000,000 Total Damage in Dungeons.\n- **Friday:** *Portals:* Open a portal for 20 group members.\n- **Sunday:** *Decurse:* Remove 30 Curses in Raids.",
          vanguardData: vanguardMasterData,
          initialTab: 'wings'
        },
        {
          name: "Warlock: The Fel Conclave",
          icon: <Flame className="w-8 h-8 text-[#b39ddb]" />,
          summary: "Binding the powers that destroyed this world.",
          detail: "**The Atmosphere:** \nHidden behind a velvet curtain in the Lower City tavern, the Conclave is a dark, opulent lounge. Succubi serve drinks while Warlocks play cards with souls as currency. It feels dangerous, illicit, and incredibly cool. Green fire burns in the hearth.\n\n**The Mentors:** \nThe Eredar Twins (Defectors). They claims to have fled Kil'jaeden's service, but no one trusts them. They teach that Fel is not a religion, but a tool. A hammer to break the Legion.\n\n**The Banner Quest: 'The Bindings of Flesh'** \n1. **The Name:** Learn the true name of a Pit Lord in Shadowmoon Valley.\n2. **The Circle:** Draw a summoning circle using reagents looted from Heroic Dungeons.\n3. **The Bind:** Summon and enslave the Pit Lord for 5 minutes to crush a target dummy.\n*Reward: 'Felbrand Glyphs' (Green Fire visuals for Shadow Bolt) & 'Imp in a Ball' (Toy).*\n\n**Weekly Callings:**\n- **Tuesday:** *Soul Harvest:* Create 50 Healthstones.\n- **Friday:** *Summoner:* Summon 10 Lazy Raiders to the stone.\n- **Sunday:** *Executioner:* Kill 5 Players with DoTs in PvP.",
          vanguardData: vanguardMasterData,
          initialTab: 'wings'
        },
        {
          name: "Shaman: Totemic Hollow",
          icon: <Anchor className="w-8 h-8 text-[#80deea]" />,
          summary: "Communing with the broken elements of Draenor.",
          detail: "**The Atmosphere:** \nAn open-air grotto near the Scryer tier, filled with waterfalls and floating earth motes. The elements of Outland are angry and broken; the Hollow is the only place they are calm. Totems of every tribe—Tauren, Orc, Troll, Draenei—line the walls.\n\n**The Mentor:** \nFarseer Nobundo. The first Broken Shaman. He speaks softly, his voice like grinding stones. He teaches that the elements obtain strength through survival, just like the Broken.\n\n**The Banner Quest: 'Heal the Earth'** \n1. **The Call:** Listen to the screams of the fire elementals at the Throne of Kil'jaeden.\n2. **The Soothe:** Bring 20 'Primal Waters' to douse their rage.\n3. **The Storm:** Channel lightning at the top of the Spire in Blade's Edge to charge the 'Thunder-Key'.\n*Reward: 'Stormfury Totem' (Skins) & 'Ghost Wolf' (Element-Shift Forms).*\n\n**Weekly Callings:**\n- **Tuesday:** *Bloodlust:* Cast Bloodlust/Heroism in 5 Boss Fights.\n- **Friday:** *Purge:* Remove 20 Magic buffs from enemies.\n- **Sunday:** *Reincarnate:* Self-resurrect during a wipe to save the run.",
          vanguardData: vanguardMasterData,
          initialTab: 'wings'
        },
        {
          name: "Druid: Wildgrove Retreat",
          icon: <Leaf className="w-8 h-8 text-[#ffcc80]" />,
          summary: "Preserving life in a dying world.",
          detail: "**The Atmosphere:** \nA miraculous garden growing in the middle of the city. Vines climb the white stone walls, and moonwells glow with soft light. It is a refuge for life. Druids here are desperate gardeners, trying to save every seed of Draenor before it blows away into the Nether.\n\n**The Mentor:** \nZen'kiki (The quirky student). Just kidding. It's Archdruid Lilliandra. She is fierce and unyielding. She views the Legion as a forest fire that must be stomped out.\n\n**The Banner Quest: 'Awaken the Dreamseed'** \n1. **The Seed:** Loot a Dormant Dreamseed from the Botanica.\n2. **The Soil:** Plant it in the dead red earth of Hellfire Peninsula.\n3. **The Growth:** Defend the sapling from 3 waves of Felboars while healing it.\n*Reward: 'Primal Form Glyphs' (New Bear/Cat skins based on Outland creatures) & 'Treant Form' (Resto).*\n\n**Weekly Callings:**\n- **Tuesday:** *Gatherer:* Collect 50 Herbs/Ores in Flight Form.\n- **Friday:** *Innervate:* Restore 50,000 Mana to Healers.\n- **Sunday:** *Combat Res:* Battle-Resurrect 5 allies in Raids.",
          vanguardData: vanguardMasterData,
          initialTab: 'wings'
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
          detail: "**Lore:** Keystones are relics infused with Fel or Nether energy found in boss hoards. \n**Mechanics:** \n1. **Entry:** Keys drop from Heroic end chests. \n2. **Scaling:** Each level raises enemy health/damage by 10% and adds affixes at +2, +5, +8. \n3. **The Anchor:** A new altar in Shattrath allows you to empower or downgrade keys.",
          vanguardData: vanguardMasterData,
          initialTab: 'heroicplus'
        },
        {
          name: "Outland Affixes",
          icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
          summary: "Thematic modifiers, not just random noise.",
          detail: "**1. Fel Surge:** Periodic raid-wide shadowfire damage. Dispelling it grants a short Haste buff. Forces a purge/cleanse rotation. \n**2. Ethereal Phase:** Random trash pulls enter an ethereal state (immune to physical). Requires spell damage or CC shatter mechanics. \n**3. Nether Rifts:** Shifting safe/unsafe zones (purple voids) rotate through rooms. \n**4. Coilfang Flood:** Water levels visually rise in the dungeon, silencing or slowing players if they fail positioning checks.",
          vanguardData: vanguardMasterData,
          initialTab: 'heroicplus'
        },
        {
          name: "Rewards & Prestige",
          icon: <Crown className="w-8 h-8 text-[#c29c55]" />,
          summary: "Gear, mounts, and teleports.",
          detail: "**Badges of Justice+:** An upgraded currency dropped in H+ that buys Pre-T6 equivalent gear and crafting mats (Nether Vortex). \n**Master Teleports:** Completing a dungeon at +10 unlocks a permanent teleport spell to its entrance. \n**Cosmetics:** Exclusive mount recolors (Fel Talbuk, Armored Nether Ray) and titles like 'Breaker of the Rift'.",
          vanguardData: vanguardMasterData,
          initialTab: 'heroicplus'
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
          detail: "**The Obelisks:** Ancient Arakkoa beacons that channel cosmic power. \n**Gameplay:** No raid team, no carries. Just you. Gear is scaled down to a specific ilvl to ensure the challenge remains difficult forever. \n**Access:** Unlocks at level 70 via the 'Attune the Obelisks' questline.",
          vanguardData: vanguardMasterData,
          initialTab: 'apexis'
        },
        {
          name: "The Trials",
          icon: <Swords className="w-8 h-8 text-red-500" />,
          summary: "Unique scenarios for every spec.",
          detail: "**Warlocks (Shadowmoon Abyss):** Duel a lesser Illidari jailor who summons imps and curses. Must juggle CC, interrupts, and survivability. \n**Hunters (Blade's Edge):** Kite a Fel Reaver around a micro-arena with traps and line-of-sight pillars. \n**Priests (Netherstorm):** Heal injured Sha'tar NPCs through waves of AoE felfire while dispelling corruption. \n**Rogues:** Survive an Ethereal assassin gauntlet. Timed vanish breaks and interrupt tests.",
          vanguardData: vanguardMasterData,
          initialTab: 'apexis'
        },
        {
          name: "The Rewards",
          icon: <Gem className="w-8 h-8 text-purple-400" />,
          summary: "Evergreen cosmetics and bragging rights.",
          detail: "**Spell Tints:** Unlock 'Green Fire' style recolors for spells (e.g., Blue Pyroblast, Void-tinted Shadowform). \n**Mounts:** Class-themed mounts like the **Netherhawk** (Casters), **Dire Talbuk** (Melee), and **Void Disc** (Hybrids). \n**Titles:** 'Breaker of the Obelisks' (First Clear) and 'Master of the Apexis' (All specs).",
          vanguardData: vanguardMasterData,
          initialTab: 'apexis'
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
          detail: "**The Loop:** Every day, 3-4 assignments appear. \n**Examples:** \n1. *Netherstorm Sabotage:* Disable Manaforges and slay ethereal overseers. \n2. *Nagrand Escorts:* Defend Kurenai caravans. \n3. *Blade's Edge Bombardment:* Use goblin rocket packs to dive-bomb Legion fortifications. \n**Weekly Emissary:** Completing 4 faction contracts unlocks a Bonus Cache.",
          vanguardData: vanguardMasterData,
          initialTab: 'warboard'
        },
        {
          name: "Faction Identity",
          icon: <Shield className="w-8 h-8 text-blue-500" />,
          summary: "Aldor vs Scryer matters.",
          detail: "**Tension:** Both factions post assignments. You can only pledge to one emissary's call per rotation. \n**Rewards:** Faction-locked cosmetics like **Aldor Rune Auras** (Holy script effects) or **Scryer Fel-Glow Eyes**.",
          vanguardData: vanguardMasterData,
          initialTab: 'warboard'
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
          detail: "**Location:** Hidden mesa above Blade's Edge. Accessible via Ogre Cannons. \n**Vibe:** High-danger, verticality, wind tunnels. \n**No Flying:** Ground mounts only to emphasize the platforming and danger.",
          vanguardData: vanguardMasterData,
          initialTab: 'skyreach'
        },
        {
          name: "Micro-Events",
          icon: <Clock className="w-8 h-8 text-amber-500" />,
          summary: "Constant action, no schedules.",
          detail: "**Sky Bandit Hijack:** Fel orcs riding netherdrakes swoop in; down them for loot. \n**Cannon Defense:** Man Ogre cannons to shoot down demons. \n**King of the Crag:** Open-world PvP hotspot. Hold the spire for massive currency gain.",
          vanguardData: vanguardMasterData,
          initialTab: 'skyreach'
        },
        {
          name: "Ogre Seals",
          icon: <Coins className="w-8 h-8 text-yellow-400" />,
          summary: "The currency of the mountain.",
          detail: "**Earned by:** Rares, chests, events. \n**Spend on:** **Felbat Mount**, **Ogre War-Masks** (Helm transmog), and **Artisan's Trinkets** (Toys like portable cannons).",
          vanguardData: vanguardMasterData,
          initialTab: 'skyreach'
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
          detail: "**The System:** Earning reputation with Factions like Argent Dawn, Thorium Brotherhood, or Zandalar Tribe after reaching Exalted now fills a 'Paragon Bar'. \n**The Reward:** Each fill grants a 'Cache of the Old Alliances' containing heavy amounts of gold, crafting mats (Arcane Crystals), and rare chances at T3 token scraps.",
          vanguardData: vanguardMasterData,
          initialTab: 'paragon'
        },
        {
          name: "Heritage Armor",
          icon: <Shield className="w-8 h-8 text-blue-500" />,
          summary: "Race-specific cosmetic sets.",
          detail: "**Unlock:** Reaching Exalted with all your home faction cities (e.g., Orgrimmar, Darkspear, Thunder Bluff) unlocks a questline to claim your Heritage Armor, a purely cosmetic high-res set that celebrates your race's history.",
          vanguardData: vanguardMasterData,
          initialTab: 'paragon'
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
          detail: "**The Epic Tapestry:** A dynamic, physical achievement board that grows longer with every boss kill. \n**The Bountiful Board:** Activate rotating utility buffs (e.g., 'Scribe's Wisdom') for all members. \n**Portal Network:** Unlock direct links to major faction hubs.",
          vanguardData: vanguardMasterData,
          initialTab: 'sanctum'
        },
        {
          name: "The Iron Wing",
          icon: <Hammer className="w-8 h-8 text-gray-400" />,
          summary: "Industrial powerhouse and crafting.",
          detail: "**Sanctum Workshops:** Unlock guild-only recipes like 'Paragon's Plate'. \n**Shared Crafting Queue:** Members deposit mats; master crafters batch-process them instantly. \n**Salvage Yard:** Passively generates resources from failed crafts.",
          vanguardData: vanguardMasterData,
          initialTab: 'sanctum'
        },
        {
          name: "The War Room",
          icon: <MapIcon className="w-8 h-8 text-red-500" />,
          summary: "Strategic nerve center.",
          detail: "**Territory Control Map:** Manage upkeep for captured zones like Halaa. \n**Bounty Contract Board:** Generates weekly 'Guild Contracts'—challenging group quests (e.g., 'Cull the Beast: Slay Gruul') that reward massive Accord Points.",
          vanguardData: vanguardMasterData,
          initialTab: 'sanctum'
        },
        {
          name: "The Barracks",
          icon: <Tent className="w-8 h-8 text-green-500" />,
          summary: "Housing and rest.",
          detail: "**Personal Housing:** Instanced rooms for every member, shared by their Warband. \n**Trophy Racks:** Display tier sets. \n**Rested XP:** Logging out here grants accelerated Rested XP to your entire Warband.",
          vanguardData: vanguardMasterData,
          initialTab: 'sanctum'
        },
        {
          name: "The Lore Library",
          icon: <Book className="w-8 h-8 text-blue-400" />,
          summary: "History and research.",
          detail: "**Guild Sagas:** Auto-generated cinematic videos of your guild's season highlights. \n**Artifact Research:** Decrypt fragments found in the world to unlock Sanctum furniture.",
          vanguardData: vanguardMasterData,
          initialTab: 'sanctum'
        },
        {
          name: "The Menagerie",
          icon: <Feather className="w-8 h-8 text-orange-400" />,
          summary: "Beasts and trophies.",
          detail: "**Beast Corral:** Showcases rare mounts collected by members. \n**Boss Trophies:** Display the head of Onyxia or Magtheridon. \n**Stable Master:** Unique vendor for mount equipment.",
          vanguardData: vanguardMasterData,
          initialTab: 'sanctum'
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
          detail: "**Focus:** World PvP, Holding Territory, & Crowd Control. \n\n**Talents:** \n**The Long March:** Your crusades never tire. Mount speed increased by 10% in contested zones, allowing for rapid redeployment. \n**Vigilance:** The eyes of the guild are everywhere. Captured towers reveal stealth units within 100 yards, preventing ninja-caps. \n**Iron Tithe:** War requires funding. Every honorable kill grants 5 silver directly to the Guild Bank.",
          vanguardData: vanguardMasterData,
          initialTab: 'canvas'
        },
        {
          name: "Path of Prosperity",
          icon: <Coins className="w-8 h-8 text-yellow-500" />,
          summary: "The golden artery of the war effort. These guilds understand that gold is sharper than steel.",
          detail: "**Focus:** Economy, Crafting, & Logistics. \n\n**Talents:** \n**Market Savvy:** Insider trading. Auction House cuts are reduced by 50% for all members. \n**Aetherium Attunement:** Tapping into the leylines. Crafting criticals spawn a 'Mote of Pure Energy' that can be traded or sold. \n**Bulk Logistics:** Industrial scale efficiency. Crafting actions are 50% faster and have a chance to not consume reagents.",
          vanguardData: vanguardMasterData,
          initialTab: 'canvas'
        },
        {
          name: "Path of Conquest",
          icon: <Crosshair className="w-8 h-8 text-purple-500" />,
          summary: "For those who seek to dethrone gods. Conquest guilds live and die by the raid lockout.",
          detail: "**Focus:** Raiding, Dungeon Speed, & Boss Slaying. \n\n**Talents:** \n**Felweaver's Forge:** A pocket dimension anvil. Repair costs reduced by 20% and can repair inside instances. \n**Slayer's Insight:** Knowledge is power. Damage against Raid Bosses increased by 1%. \n**Warband Synergy:** The bond of brothers. If a raid member dies, they can be combat-resurrected instantly once per fight without counting towards the druid limit.",
          vanguardData: vanguardMasterData,
          initialTab: 'canvas'
        }
      ]
    }
  };

  // --- MODAL COMPONENT ---
  const DetailModal = ({ item, onClose }) => {
    const [activeTab, setActiveTab] = useState(item?.initialTab || (item?.vanguardData ? 'warband' : 'overview'));

    if (!item) return null;

    if (item.vanguardData) {
      return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity" onClick={onClose}></div>
          <div className="relative w-full max-w-6xl h-[85vh] bg-[#080808] border border-[#444] shadow-[0_0_60px_rgba(194,156,85,0.15)] rounded-lg animate-in fade-in zoom-in duration-300 flex flex-col overflow-hidden">
            <button onClick={onClose} className="absolute top-4 right-4 z-50 text-stone-400 hover:text-white transition-colors bg-black/50 rounded-full p-2 hover:bg-black/80"><X className="w-6 h-6" /></button>

            {/* Systems Tabs */}
            <div className="flex border-b border-[#333] bg-[#0c0c0c] justify-center shrink-0">
              {Object.entries(item.vanguardData.tabs)
                .filter(([_, data]) => data.category === item.initialCategory) // Filter by category
                .map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`group flex items-center gap-2 px-6 py-4 border-b-2 transition-all duration-300 ${activeTab === key
                      ? 'border-[#c29c55] bg-[#c29c55]/10 text-[#f0e6d2]'
                      : 'border-transparent text-[#5c5c63] hover:text-[#c29c55] hover:bg-[#111]'
                      }`}
                  >
                    <span className={`transition-transform duration-300 ${activeTab === key ? 'scale-110 text-[#c29c55]' : ''}`}>{data.icon}</span>
                    <div className="text-left hidden md:block">
                      <div className="text-xs font-hero uppercase tracking-widest">{data.title}</div>
                      <div className="text-[10px] opacity-60 font-sans tracking-wide">{data.subtitle}</div>
                    </div>
                  </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar relative">
              {/* Background Ambient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a120b] via-[#080808] to-black opacity-50 pointer-events-none" />

              <div className="relative z-10 p-8 max-w-5xl mx-auto min-h-full">
                {/* HEADER */}
                <div className="text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
                  <h2 className="text-3xl font-hero text-[#c29c55] mb-2 uppercase tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {item.vanguardData[activeTab]?.title || "Vanguard System"}
                  </h2>
                  <p className="text-[#8a7b62] text-sm max-w-2xl mx-auto">
                    {formatText(item.vanguardData[activeTab]?.desc || "")}
                  </p>
                </div>

                {/* WARBAND CONTENT */}
                {activeTab === 'warband' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in zoom-in-95 duration-500">
                    {item.vanguardData.warband.features.map((feature, i) => (
                      <div key={i} className="bg-[#111] border border-[#333] p-6 rounded-lg hover:border-[#c29c55]/50 transition-all hover:bg-[#161616] group">
                        <h4 className="text-[#e0e0e0] font-hero text-sm uppercase mb-2 group-hover:text-[#c29c55] transition-colors">{feature.name}</h4>
                        <p className="text-[#888] text-xs leading-relaxed">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* VAULT CONTENT */}
                {activeTab === 'vault' && (
                  <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {item.vanguardData.vault.tiers.map((tier, i) => (
                        <div key={i} className="bg-[#0f0f0f] border border-[#2a2a2a] p-6 rounded flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-lg">
                          <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#333] mb-4 text-[#c29c55]">
                            {i === 0 ? <Crown className="w-5 h-5" /> : i === 1 ? <Shield className="w-5 h-5" /> : <Sword className="w-5 h-5" />}
                          </div>
                          <h4 className="text-[#f0e6d2] font-bold text-sm mb-1">{tier.name}</h4>
                          <p className="text-[#555] text-xs mb-3 italic">{tier.req}</p>
                          <span className="px-3 py-1 bg-[#2f855a]/20 text-[#48bb78] text-[10px] uppercase font-bold rounded border border-[#2f855a]/30">{tier.reward}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#1a1c22] p-4 rounded border-l-4 border-[#e53e3e] flex gap-4 items-center">
                      <div className="p-3 bg-red-900/20 rounded-full"><Users className="w-5 h-5 text-red-500" /></div>
                      <p className="text-[#aeb6bf] text-xs">{formatText(item.vanguardData.vault.currency)}</p>
                    </div>
                  </div>
                )}

                {/* RENOWN CONTENT */}
                {activeTab === 'renown' && (
                  <div className="animate-in fade-in duration-700 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {item.vanguardData.renown.tracks.map((track, i) => (
                        <div key={i} className="relative overflow-hidden rounded-lg border border-[#333] group">
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
                          <div className="p-6 relative z-20 h-full flex flex-col justify-end min-h-[160px]">
                            <h4 className="text-lg font-hero text-white mb-1 group-hover:text-[#c29c55] transition-colors">{track.faction}</h4>
                            <p className="text-xs text-gray-400 mb-2">{track.focus}</p>
                            <span className="text-[10px] text-[#c29c55] uppercase font-bold tracking-wider">Reward: {track.reward}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#111] p-6 rounded border border-[#333]">
                      <h4 className="text-[#888] text-xs uppercase tracking-widest mb-4 border-b border-[#333] pb-2">Milestone Rewards</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {item.vanguardData.renown.levels.map((lvl, i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl font-bold text-[#c29c55] mb-1">{lvl.lvl}</div>
                            <div className="text-[10px] text-[#666] uppercase">Renown Level</div>
                            <p className="text-xs text-[#e0e0e0] mt-2">{lvl.reward}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* WINGS CONTENT */}
                {activeTab === 'wings' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-right-8 duration-500">
                    {item.vanguardData.wings.challenges.map((chal, i) => (
                      <div key={i} className="bg-[#0f0f0f] border-l-2 border-[#ecc94b] p-5 hover:bg-[#151515] transition-colors">
                        <div className="flex justify-between mb-2">
                          <h4 className="text-[#f0e6d2] font-bold text-sm">{chal.name}</h4>
                          <span className="text-[10px] text-[#ecc94b] bg-[#ecc94b]/10 px-2 py-0.5 rounded">{chal.role}</span>
                        </div>
                        <p className="text-[#777] text-xs">{chal.desc}</p>
                      </div>
                    ))}
                    <div className="col-span-full mt-4 text-center p-4 bg-[#1a1a1a] rounded border border-[#333]">
                      <p className="text-[#c29c55] text-xs font-hero uppercase tracking-widest">{formatText(item.vanguardData.wings.rewards)}</p>
                    </div>
                  </div>
                )}

                {/* PARAGON CONTENT */}
                {activeTab === 'paragon' && (
                  <div className="animate-in zoom-in duration-500">
                    <div className="flex justify-center mb-8 relative">
                      <div className="w-64 h-64 border border-[#c29c55]/30 rounded-full flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full animate-pulse bg-[#c29c55]/5"></div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-[#f0e6d2]">∞</div>
                          <div className="text-[10px] text-[#c29c55] uppercase tracking-widest mt-1">Paragon Level</div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                      {item.vanguardData.paragon.nodes.map((node, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-[#111] rounded border border-[#333]">
                          <div className="w-2 h-2 bg-[#c29c55] rounded-full shadow-[0_0_5px_#c29c55]"></div>
                          <div>
                            <div className="text-[#e0e0e0] text-xs font-bold">{node.name}</div>
                            <div className="text-[#666] text-[10px]">{node.effect}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-[#555] text-[10px] mt-8 italic">{formatText(item.vanguardData.paragon.note)}</p>
                  </div>
                )}
                {/* HEROIC+ CONTENT */}
                {activeTab === 'heroicplus' && (
                  <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
                    <div className="bg-[#111] p-6 rounded-lg border border-[#c29c55]/30">
                      <div className="flex items-center gap-4 mb-4">
                        <Compass className="w-8 h-8 text-[#c29c55]" />
                        <h3 className="text-xl font-hero text-[#f0e6d2] uppercase">{item.vanguardData.heroicplus.title}</h3>
                      </div>
                      <p className="text-[#aeb6bf] text-xs leading-relaxed mb-6">{item.vanguardData.heroicplus.desc}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {item.vanguardData.heroicplus.features.map((feat, i) => (
                          <div key={i} className="bg-[#1a1c22] p-4 rounded border border-[#333]">
                            <h4 className="text-[#c29c55] text-xs font-bold uppercase mb-2">{feat.name}</h4>
                            <p className="text-[#888] text-[10px]">{feat.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* APEXIS CONTENT */}
                {activeTab === 'apexis' && (
                  <div className="animate-in fade-in duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6 text-center md:text-left">
                        <h3 className="text-2xl font-hero text-[#a335ee] uppercase tracking-widest">{item.vanguardData.apexis.title}</h3>
                        <p className="text-[#aeb6bf] text-sm">{item.vanguardData.apexis.desc}</p>
                        <div className="space-y-4">
                          {item.vanguardData.apexis.features.map((feat, i) => (
                            <div key={i} className="flex gap-4 items-start bg-[#111] p-3 rounded hover:bg-[#161616]">
                              <Zap className="w-5 h-5 text-[#a335ee] shrink-0 mt-1" />
                              <div className="text-left">
                                <h4 className="text-[#e0e0e0] text-xs font-bold">{feat.name}</h4>
                                <p className="text-[#666] text-[10px]">{feat.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="relative h-64 border border-[#333] rounded-lg overflow-hidden bg-black flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#a335ee]/10 animate-pulse"></div>
                        <div className="text-center z-10 p-6">
                          <Gem className="w-16 h-16 text-[#a335ee] mx-auto mb-4" />
                          <p className="text-[#a335ee] font-hero uppercase tracking-widest text-lg">Solo Mastery</p>
                          <p className="text-[10px] text-gray-500 uppercase mt-2">Gear Normalized • Skill Required</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* WAR BOARD CONTENT */}
                {activeTab === 'warboard' && (
                  <div className="grid grid-cols-1 gap-6 animate-in slide-in-from-bottom-8 duration-500">
                    <div className="bg-[#2a2a2a] p-1 rounded-lg">
                      <div className="bg-[#111] p-6 rounded border border-[#444] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10"><Layout className="w-32 h-32 text-[#c29c55]" /></div>
                        <h3 className="text-xl font-hero text-[#c29c55] uppercase mb-4 relative z-10">{item.vanguardData.warboard.title}</h3>
                        <p className="text-[#aeb6bf] text-xs mb-6 max-w-lg relative z-10">{item.vanguardData.warboard.desc}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                          {item.vanguardData.warboard.features.map((feat, i) => (
                            <div key={i} className="border-l-2 border-[#c29c55] pl-4 py-2">
                              <h4 className="text-[#e0e0e0] text-xs font-bold uppercase">{feat.name}</h4>
                              <p className="text-[#666] text-[10px] mt-1">{feat.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SKYREACH CONTENT */}
                {activeTab === 'skyreach' && (
                  <div className="animate-in zoom-in duration-500 text-center">
                    <div className="mb-8">
                      <Mountain className="w-16 h-16 text-[#87ceeb] mx-auto mb-4" />
                      <h3 className="text-2xl font-hero text-[#e0e0e0] uppercase">{item.vanguardData.skyreach.title}</h3>
                      <p className="text-[#aeb6bf] text-sm max-w-2xl mx-auto mt-2">{item.vanguardData.skyreach.desc}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {item.vanguardData.skyreach.features.map((feat, i) => (
                        <div key={i} className="bg-[#0f0f0f] p-6 rounded-full aspect-square flex flex-col items-center justify-center border border-[#333] hover:border-[#87ceeb] hover:scale-105 transition-all cursor-crosshair group">
                          <div className="text-[#87ceeb] font-hero text-lg mb-2 group-hover:tracking-widest transition-all">{feat.name}</div>
                          <p className="text-[#666] text-[10px] max-w-[150px]">{feat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SANCTUM CONTENT */}
                {activeTab === 'sanctum' && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {item.vanguardData.sanctum.features.map((feat, i) => (
                        <div key={i} className="bg-[#1a1c22] border-t-4 border-[#48bb78] p-4 shadow-lg">
                          <h4 className="text-[#48bb78] font-hero text-sm uppercase mb-2">{feat.name}</h4>
                          <p className="text-[#aeb6bf] text-[10px]">{feat.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#111] p-8 text-center rounded border border-[#333]">
                      <Landmark className="w-12 h-12 text-[#48bb78] mx-auto mb-4 opacity-50" />
                      <p className="text-[#555] text-xs uppercase tracking-widest">Guild Housing Module Online</p>
                    </div>
                  </div>
                )}

                {/* CANVAS CONTENT */}
                {activeTab === 'canvas' && (
                  <div className="animate-in slide-in-from-right-8 duration-500">
                    <div className="text-center mb-8">
                      <Shield className="w-16 h-16 text-[#c29c55] mx-auto mb-4" />
                      <h3 className="text-2xl font-hero text-[#f0e6d2] uppercase">{item.vanguardData.canvas.title}</h3>
                      <p className="text-[#aeb6bf] text-sm max-w-2xl mx-auto mt-2">{item.vanguardData.canvas.desc}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {item.vanguardData.canvas.features.map((feat, i) => (
                        <div key={i} className="bg-[#1a1c22] border border-[#333] hover:border-[#c29c55] transition-colors p-6 rounded-lg group">
                          <h4 className="text-[#c29c55] font-hero text-lg uppercase mb-2 group-hover:underline decoration-[#c29c55] decoration-2 underline-offset-4">{feat.name}</h4>
                          <p className="text-[#888] text-xs leading-relaxed">{feat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

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
        sub="v3.1 (Command Center)"
        title="Fel-Forged Vanguard"
        quote="A new era of war requires a new kind of army."
      />



      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 py-16 max-w-6xl min-h-screen">
        {selectedEntry && <DetailModal item={selectedEntry} onClose={() => setSelectedEntry(null)} />}

        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="font-hero text-4xl text-[#c29c55] mb-6">Command Center</h2>
            <p className="font-body text-[#aeb6bf] text-lg max-w-3xl mx-auto">Select a system category to manage your Vanguard operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(categories).map(([key, cat]) => (
              <div
                key={key}
                onClick={() => {
                  // Find the first tab in this category to set as initial
                  const firstTab = categorySections[key][0];
                  setSelectedEntry({
                    vanguardData: vanguardMasterData,
                    initialTab: firstTab,
                    initialCategory: key // Pass category for filtering
                  });
                }}
                className="bg-[#15171e] border border-[#2f2f35] p-12 rounded shadow-lg hover:border-[#c29c55] hover:-translate-y-1 transition-all cursor-pointer group flex flex-col items-center text-center"
              >
                <div className="mb-6 p-6 bg-[#0b0d10] rounded-full w-24 h-24 flex items-center justify-center border border-[#2f2f35] group-hover:border-[#c29c55] group-hover:scale-110 transition-transform">
                  <div className="scale-150 text-[#5c5c63] group-hover:text-[#c29c55] transition-colors">
                    {cat.icon}
                  </div>
                </div>
                <h3 className="font-hero text-2xl text-[#f0e6d2] mb-3 group-hover:text-[#c29c55] transition-colors">{cat.label}</h3>
                <div className="flex flex-col gap-2 mb-8 w-full max-w-sm">
                  {categorySections[key].map(subId => (
                    <div key={subId} className="flex items-center gap-3 p-3 rounded bg-[#1f2129] border border-[#2f2f35] group-hover:bg-[#252830] transition-colors">
                      <span className="text-[#c29c55]">{vanguardMasterData.tabs[subId]?.icon}</span>
                      <div className="text-left">
                        <div className="text-[#e0e0e0] text-xs font-bold uppercase tracking-wide">{vanguardMasterData.tabs[subId]?.title}</div>
                        <div className="text-[10px] text-[#888]">{vanguardMasterData.tabs[subId]?.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <span className="text-[#c29c55] text-xs uppercase tracking-widest font-bold flex items-center gap-2 border border-[#c29c55]/30 px-6 py-2 rounded group-hover:bg-[#c29c55] group-hover:text-black transition-all">
                  Open Subsystems <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FelForgedVanguard;