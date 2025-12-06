import React, { useState, useEffect } from 'react';
import {
  Shield, Users, Hammer, Map as MapIcon, Scroll,
  Crown, Sword, Layout, ArrowRight, Lock, Unlock,
  Tent, Landmark, Coins, Globe, Skull, Book, Feather,
  Crosshair, Anchor, Zap, Clock, Star, AlertTriangle,
  Compass, Gem, Eye, Flame, X, Leaf, Mountain, Heart
} from 'lucide-react';

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

  // Helper for bold/color formatting
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
      { id: 'classwings', label: 'Shattrath Class Wings' }
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
          icon: <Sword className="w-8 h-8 text-red-500" />,
          summary: "Prove your honor in the circle of blood.",
          detail: "**Location:** Lower City, near the Battlemasters. \n**Mentor:** Karrath Bloodblade (Former Mag'har Champion). \n**Banner Quest:** 'The Unbroken Blade'. Survive a solo gladiator gauntlet against ogre champions. \n**Reward:** **Blade of the Shattered Banner** (Weapon Illusion) and the **Justicar's Plate** cosmetic set. \n**Weekly Calling:** Win 3 Arena Skirmishes or defeat a raid boss with a melee weapon."
        },
        {
          name: "Paladin: Hall of Light",
          icon: <Shield className="w-8 h-8 text-pink-400" />,
          summary: "The union of Blood Knights and Vindicators.",
          detail: "**Location:** Terrace of Light. \n**Mentor:** Lady Liadrin & Vindicator Maraad. \n**Banner Quest:** 'Swear to the Sunwell'. Travel to the ruins of the Sunwell (pre-raid) and recover a spark of pure light. \n**Reward:** **Sunwell Crusader's Tabard** and the **Libram of Endless Light** toy. \n**Weekly Calling:** Tank 5 Heroic Bosses or heal 50,000 damage in a battleground."
        },
        {
          name: "Hunter: The Bestial Perch",
          icon: <Crosshair className="w-8 h-8 text-green-500" />,
          summary: "A sanctuary for the beast masters of Outland.",
          detail: "**Location:** Higher Tier, overlooking Terokkar. \n**Mentor:** Halduron Brightwing. \n**Banner Quest:** 'The Alpha's Call'. Tame a rare elite beast from each zone of Outland using a ritual bait. \n**Reward:** **Cosmetic Quivers** and **Pet Collars**. \n**Weekly Calling:** Skin 20 Elite Beasts or defeat a dungeon boss without your pet dying."
        },
        {
          name: "Rogue: Nether-Shadow Den",
          icon: <Skull className="w-8 h-8 text-yellow-600" />,
          summary: "Where the shadows of Shattrath meet.",
          detail: "**Location:** Hidden entrance in the Lower City slums. \n**Mentor:** A Shivarra Defector Spy. \n**Banner Quest:** 'The Unseen Blade'. Infiltrate a Legion fortress in Shadowmoon Valley undetected and steal plans. \n**Reward:** **Nether-Pad Boots** (Silence footstep sounds) and **Smoke Bomb** toy. \n**Weekly Calling:** Pickpocket 10 Rare Mobs or sap 5 players in PvP."
        },
        {
          name: "Priest: Sanctum of Whispers",
          icon: <Book className="w-8 h-8 text-white" />,
          summary: "A place of meditation between Light and Void.",
          detail: "**Location:** Terrace of Light. \n**Mentor:** Anchorite Ishana. \n**Banner Quest:** 'Balance of the Soul'. Meditate at the shrines of A'dal and the Void-Star in Nagrand. \n**Reward:** **Toggle Toy:** Switch between floating 'Light' and 'Shadow' idle animations. \n**Weekly Calling:** Dispel 50 magic effects or heal a target from 1% to 100%."
        },
        {
          name: "Mage: Arcanum of Eternity",
          icon: <Zap className="w-8 h-8 text-blue-400" />,
          summary: "The study of the chaotic nether energies.",
          detail: "**Location:** Upper Terrace, near the Scryers. \n**Mentor:** Archmage Vargoth. \n**Banner Quest:** 'Stabilize the Nether'. Seal unstable rifts in Netherstorm before they explode. \n**Reward:** **Floating Grimoire** pet and **Arcane Drift** movement trail. \n**Weekly Calling:** Decurse 10 allies or deal 1,000,000 total damage in dungeons."
        },
        {
          name: "Warlock: The Fel Conclave",
          icon: <Flame className="w-8 h-8 text-purple-500" />,
          summary: "Binding the powers that destroyed this world.",
          detail: "**Location:** A sealed basement in the Lower City. \n**Mentor:** Eredar Twin Sisters (Defectors). \n**Banner Quest:** 'The Bindings of Flesh'. Defeat and bind a powerful demon in Nagrand to serve the Conclave. \n**Reward:** **Felbrand Glyphs** (Green Fire visuals for non-destro spells). \n**Weekly Calling:** Summon 5 players to a raid or create 20 Healthstones."
        },
        {
          name: "Shaman: Totemic Hollow",
          icon: <Hammer className="w-8 h-8 text-blue-600" />,
          summary: "Communing with the broken elements of Draenor.",
          detail: "**Location:** Near the Aldor Rise waterfall. \n**Mentor:** Farseer Nobundo. \n**Banner Quest:** 'Heal the Earth'. Perform rituals at the Throne of the Elements to calm the raging spirits. \n**Reward:** **Stormfury Totem** skins and **Ghost Wolf** element-shift forms. \n**Weekly Calling:** Use Bloodlust/Heroism in a raid or purge 10 enemies."
        },
        {
          name: "Druid: Wildgrove Retreat",
          icon: <Leaf className="w-8 h-8 text-orange-500" />,
          summary: "Preserving life in a dying world.",
          detail: "**Location:** Cenarion Thicket (Zangarmarsh Portal). \n**Mentor:** Cenarion Acolyte Thander. \n**Banner Quest:** 'Awaken the Dreamseed'. Plant and nurture a tree in the dead wastes of Hellfire. \n**Reward:** **Primal Form Glyphs** (New Bear/Cat skins based on Outland creatures). \n**Weekly Calling:** Gather 20 Herbs or resurrect an ally in combat."
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
      desc: "A modular talent tree for your guild. Earn Accord Points (AP) to specialize your community.",
      items: [
        {
          name: "Path of Dominion",
          icon: <Shield className="w-8 h-8 text-red-600" />,
          summary: "PvP and Territory Control.",
          detail: "**Focus:** World PvP, holding Halaa/Spirit Towers. \n**Talents:** \n**The Long March:** +5% Move Speed in Outland. \n**Vigilance:** NPC Guards in claimed zones respawn 50% faster. \n**Iron Tithe:** Claiming territory generates gold for the guild bank."
        },
        {
          name: "Path of Prosperity",
          icon: <Coins className="w-8 h-8 text-yellow-500" />,
          summary: "Economy and Crafting.",
          detail: "**Focus:** Auction House dominance, trade skills. \n**Talents:** \n**Market Savvy:** Reduces AH deposit fees. \n**Aetherium Attunement:** Chance to loot bonus Primal Nethers from bosses. \n**Bulk Logistics:** Unlocks 'Mass Production' crafting queues."
        },
        {
          name: "Path of Conquest",
          icon: <Crosshair className="w-8 h-8 text-purple-500" />,
          summary: "Raiding and PvE.",
          detail: "**Focus:** Boss slaying, progression speed. \n**Talents:** \n**Felweaver's Forge:** Repair gear inside raids. \n**Slayer's Insight:** +10% Rep gains. \n**Warband Synergy:** Summon a Warband Alt to the raid instantly."
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
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d10]/30 via-[#0b0d10]/80 to-[#0b0d10] z-10"></div>
          <div className="w-full h-full bg-[url('https://i.imgur.com/5xVSMcu.jpeg')] bg-cover bg-center opacity-40"></div>
        </div>
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h1 className="font-hero text-5xl md:text-7xl text-[#f0e6d2] drop-shadow-2xl mb-4 tracking-wider">FEL-FORGED VANGUARD</h1>
          <div className="h-1 w-32 bg-[#c29c55] mx-auto mb-6"></div>
          <p className="font-body text-[#aeb6bf] text-xl md:text-2xl leading-relaxed">
            A comprehensive guide to the new systems defining the Burning Crusade Plus.
          </p>
        </div>
      </div>

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
            <p className="font-body text-[#aeb6bf] text-lg max-w-3xl mx-auto">{content[activeSubTab].desc}</p>
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