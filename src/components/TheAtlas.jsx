import React, { useState, useEffect } from 'react';
import {
  Map as MapIcon, Skull, Crown, Globe, Sword, Shield, Zap,
  Clock, AlertTriangle, Anchor, Compass, Scroll, X, Eye, Hammer,
  BookOpen, Flame, Droplet, Mountain, ArrowRight, Users, Layout, Grid, Landmark, Star,
  Volume2, Hourglass, PlayCircle, Key, CheckSquare
} from 'lucide-react';



import UnifiedHeader from './UnifiedHeader';
import WowTooltip from './WowTooltip';
import { contentData } from '../data/raid-journal-data';

/* --- HELPER COMPONENTS --- */
const RenderTextFormatter = ({ text }) => {
  if (!text) return null;

  // Split by bold markers
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // Remove asterisks and render as custom formatted strong text
          return <strong key={index} className="text-[#00ff9d] font-normal">{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </>
  );
};

const TheAtlas = ({ setPage, initialParams }) => {
  const [activeContinent, setActiveContinent] = useState(initialParams?.continent || 'outland');
  const [activeZone, setActiveZone] = useState(initialParams?.zone || 'hellfire');
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [filter, setFilter] = useState('All');
  const [selectedTier, setSelectedTier] = useState('All');
  const [showHeroicPlus, setShowHeroicPlus] = useState(false);
  const [groupingMode, setGroupingMode] = useState('zone'); // 'zone' | 'tier'
  const [viewMode, setViewMode] = useState('list'); // 'list', 'map'
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Initial Entry Selection
  useEffect(() => {
    if (initialParams?.entry && contentData[activeZone]) {
      const entry = contentData[activeZone].find(item => item.name === initialParams.entry);
      if (entry) setSelectedEntry(entry);
    }
  }, [initialParams, activeZone]);



  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent crash when switching continents by resetting activeZone ONLY if invalid
  useEffect(() => {
    if (zones[activeContinent]) {
      const validZones = Object.keys(zones[activeContinent]);
      if (!validZones.includes(activeZone) && validZones.length > 0) {
        setActiveZone(validZones[0]);
      }
    }
  }, [activeContinent]);

  // Helper to parse bold text
  const formatText = (text) => {
    if (!text) return null;
    // Handle both literal newlines and escaped newlines (from JSON data)
    const lines = text.split(/\\n|\n/);
    return lines.map((line, lineIndex) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const content = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex} className="text-[#c29c55] font-normal">{part.slice(2, -2)}</strong>;
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

  // Helper to calculate zone statistics
  const getZoneStats = (zoneKey) => {
    const items = contentData[zoneKey] || [];
    const dungeons = items.filter(i => i.type.toLowerCase().includes('dungeon') && !i.type.toLowerCase().includes('mega')).length;
    const megas = items.filter(i => i.type.toLowerCase().includes('mega')).length;
    const raids = items.filter(i => i.type.toLowerCase().includes('raid')).length;
    const events = items.filter(i => i.type.toLowerCase().includes('event')).length;
    const bosses = items.reduce((acc, item) => acc + (item.bosses?.length || 0), 0);

    // Fallback for "Quests" since we don't have real data, we simulate it based on content density
    const newQuests = (dungeons * 3) + (raids * 5) + (events * 2) + 10;

    return { dungeons, megas, raids, events, bosses, newQuests };
  };

  // --- CONTINENT DATA ---
  const continents = {
    outland: { name: 'Outland', icon: <Globe className="w-4 h-4" /> },
    azeroth: { name: 'Azeroth', icon: <Anchor className="w-4 h-4" /> },
    cot: { name: 'Caverns of Time', icon: <Clock className="w-4 h-4" /> },
    tuning: { name: 'Raid Fixes', icon: <Hammer className="w-4 h-4" /> },
    oldworld: { name: 'Old World', icon: <BookOpen className="w-4 h-4" /> }
  };

  // --- SORTING LOGIC ---
  const sortContent = (items) => {
    if (!items) return [];

    let filtered = [];

    if (groupingMode === 'tier') {
      // AGGREGATE MODE: Combine all relevant zones
      // We skip 'tuning' and 'classes' etc if they exist in contentData, strictly looking for arrays of content
      Object.keys(contentData).forEach(key => {
        if (key === 'tuning') return; // Skip non-content keys if any
        const zoneItems = contentData[key];
        if (Array.isArray(zoneItems)) {
          filtered = [...filtered, ...zoneItems];
        }
      });
    } else {
      // STANDARD MODE: Active Zone only
      filtered = items;
    }

    // Filter by Tier OR Content Type if selected
    if (selectedTier !== 'All') {
      if (typeof selectedTier === 'number') {
        // Numeric Tier Filter
        filtered = filtered.filter(item => item.tier === selectedTier);
      } else {
        // String Type Filter
        const typeLower = selectedTier.toLowerCase();
        filtered = filtered.filter(item => {
          const itemType = item.type.toLowerCase();
          if (typeLower === 'dungeons') {
            return itemType.includes('dungeon') && !itemType.includes('mega') && !itemType.includes('wings'); // Exclude Mega/Wings
          }
          if (typeLower === 'mega dungeons') {
            return itemType.includes('mega') || itemType.includes('wings'); // Grim Batol & Void Hold
          }
          if (typeLower === 'events') {
            return itemType.includes('event');
          }
          return false;
        });
      }
    } else if (groupingMode === 'tier') {
      // If in Tier Mode but Tier is 'All', filter to show ONLY things with a Tier property (Raids)
      // to avoid clutter, UNLESS specifically asked for dungeons via the slider.
      // Wait, if I slide to "Dungeons", `selectedTier` is not 'All', so the above block catches it.
      // So this else block is ONLY for when selectedTier is explicitly 'All'.
      // Default behavior in Tier Mode 'All' -> Show Raids (Tiered content).
      filtered = filtered.filter(item => item.tier !== undefined);
    }

    return [...filtered].sort((a, b) => {
      // 1. Assign Priority Weights
      const getPriority = (type) => {
        const t = type.toLowerCase();
        if (t.includes('dungeon')) return 1; // Dungeons First
        if (t.includes('event')) return 2;   // Events Second
        if (t.includes('raid')) return 3;    // Raids Last
        return 4; // Other
      };

      const prioA = getPriority(a.type);
      const prioB = getPriority(b.type);

      if (prioA !== prioB) return prioA - prioB;

      // 2. If both are Raids, Sort by Tier (Extract Number)
      if (prioA === 3) {
        // Use explicit tier if available, otherwise extraction fallback
        const tierA = a.tier || 0;
        const tierB = b.tier || 0;
        if (tierA !== tierB) return tierA - tierB;
      }

      // 3. If same type/tier, sort by Name
      return a.name.localeCompare(b.name);
    });
  };

  // --- ZONES DATA ---
  const zones = {
    outland: {
      hellfire: { name: 'Hellfire Peninsula', icon: <Flame className="w-4 h-4" />, level: '58-63', resources: ['Fel Iron', 'Felweed'], faction: 'Thrallmar / Honor Hold' },
      zangar: { name: 'Zangarmarsh', icon: <Droplet className="w-4 h-4" />, level: '60-64', resources: ['Adamantite', 'Ragveil'], faction: 'Cenarion Expedition' },
      terokkar: { name: 'Terokkar Forest', icon: <Scroll className="w-4 h-4" />, level: '62-65', resources: ['Adamantite', 'Terocone'], faction: 'Lower City' },
      nagrand: { name: 'Nagrand', icon: <Mountain className="w-4 h-4" />, level: '64-67', resources: ['Adamantite', 'Dreaming Glory'], faction: 'Kurenai / Mag\'har' },
      blades: { name: 'Blade\'s Edge', icon: <Sword className="w-4 h-4" />, level: '65-68', resources: ['Adamantite', 'Nightmare Vine'], faction: 'Ogri\'la' },
      nether: { name: 'Netherstorm', icon: <Zap className="w-4 h-4" />, level: '67-70', resources: ['Khorium', 'Netherbloom'], faction: 'The Consortium' },
      shadow: { name: 'Shadowmoon Valley', icon: <Skull className="w-4 h-4" />, level: '67-70', resources: ['Khorium', 'Nightmare Vine'], faction: 'Aldor / Scryer' },
    },
    azeroth: {
      hyjal: { name: 'Mount Hyjal', icon: <Mountain className="w-4 h-4" />, level: '70+', resources: ['Eternium', 'Ancient Lichen'], faction: 'Scale of the Sands' },
      uldum: { name: 'Uldum', icon: <Landmark className="w-4 h-4" />, level: '??', resources: ['Unknown'], faction: 'Ramkahen' },
      grimbatol: { name: 'Grim Batol', icon: <Flame className="w-4 h-4" />, level: '70+', resources: ['Dark Iron', 'Firebloom'], faction: 'Wildhammer' },

      eastern: { name: 'Eastern Kingdoms', icon: <Shield className="w-4 h-4" />, level: '1-60', resources: ['Various'], faction: 'Alliance' },
      kalimdor: { name: 'Kalimdor', icon: <Compass className="w-4 h-4" />, level: '1-60', resources: ['Various'], faction: 'Horde' },
    },
    cot: {
      timeways: { name: 'The Timeways', icon: <Clock className="w-4 h-4" />, level: '70+', resources: ['Sands of Time'], faction: 'Keepers of Time' }
    },
    tuning: {
      tuning_zone: { name: 'Raid Fixes', icon: <Hammer className="w-4 h-4" />, level: 'N/A', resources: [], faction: 'Developers' }
    },
    systems: {
      vanguard_systems_redux: { name: 'Fel-Forged Vanguard', icon: <Shield className="w-4 h-4" />, level: '70', resources: ['Valor'], faction: 'Vanguard' }
    },

    oldworld: {
      oldworld_zone: { name: 'Classic Content', icon: <BookOpen className="w-4 h-4" />, level: '60', resources: ['Nostalgia'], faction: 'Argent Dawn' }
    },
  };

  const [heatmapMode, setHeatmapMode] = useState('none'); // 'none', 'activity', 'threat'

  // Helper logic for Heroic+ Toggle
  const getFilteredLore = (lore) => {
    if (!lore) return "";
    if (showHeroicPlus) {
      // Look for 'Changes:' or 'Plus:' blocks
      const splitTerms = ['**Changes:**', '**The Vision for Plus:**', '**Plus Features:**'];
      for (const term of splitTerms) {
        if (lore.includes(term)) {
          const parts = lore.split(term);
          if (parts[1]) {
            return `**Plus Changes:** ${parts[1]}`.trim();
          }
        }
      }
      return lore;
    }
    return lore;
  };

  // --- HEATMAP COLOR LOGIC ---
  const getZoneColor = (zoneKey) => {
    if (heatmapMode === 'none') {
      return activeZone === zoneKey ? 'bg-[#c29c55] border-white scale-110 shadow-[0_0_20px_#c29c55]' : 'bg-[#1a1c22] border-[#2f2f35] hover:border-[#c29c55]';
    }

    if (heatmapMode === 'threat') {
      const threat = zoneIntel[zoneKey]?.threat || 'Low';
      switch (threat) {
        case 'Critical': return 'bg-red-900 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]';
        case 'High': return 'bg-orange-900 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]';
        default: return 'bg-green-900 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]';
      }
    }

    if (heatmapMode === 'activity') {
      const stats = getZoneStats(zoneKey);
      const activityScore = stats.dungeons + stats.raids + stats.events;
      if (activityScore > 5) return 'bg-[#00ccff] border-[#00ccff] shadow-[0_0_15px_rgba(0,204,255,0.5)]'; // High Activity
      if (activityScore > 2) return 'bg-[#a335ee] border-[#a335ee] shadow-[0_0_15px_rgba(163,53,238,0.5)]'; // Med
      return 'bg-[#5c5c63] border-[#5c5c63]'; // Low
    }

    return 'bg-[#1a1c22] border-[#2f2f35]';
  };

  // --- ZONE INTEL DATA (NEW) ---
  const zoneIntel = {
    hellfire: {
      threat: "Critical",
      faction: { alliance: 45, horde: 45, enemy: 10 },
      hubs: [
        { name: "The Overlook", faction: "Alliance", desc: "A forward command post on the floating rocks above the Path of Glory." },
        { name: "Mag'har Post", faction: "Horde", desc: "A hidden bunker beneath the Citadel walls, used by the uncorrupted orcs." }
      ],
      travel: {
        title: "Aerial Bombing Runs",
        desc: "Players can rent wyverns/gryphons to perform bombing runs on the Legion Front, earning rapid reputation."
      },
      microDungeons: [
        { name: "The Legion Front", level: "60-61", type: "Elite Area", desc: "Open world warzone. Capture towers to buff the entire zone." },
        { name: "Pools of Aggonar", level: "62", type: "Dungeon Delve", desc: "Cleanse the fel-corruption from the pools." }
      ]
    },
    zangar: {
      threat: "High",
      faction: { alliance: 30, horde: 30, enemy: 40 },
      hubs: [
        { name: "Sporeggar Grove", faction: "Neutral", desc: "Now a fully fledged town with an Inn, Bank, and Herb Garden." },
        { name: "Watcher's Nook", faction: "Cenarion", desc: "A druidic outpost atop the giant mushrooms." }
      ],
      travel: {
        title: "Marsh Walkers",
        desc: "Giant water-strider mounts are available for rent, allowing high-speed water travel across the marsh."
      },
      microDungeons: [
        { name: "Fungal Deep", level: "62-63", type: "Cave System", desc: "Procedurally generated mushroom caves with rare herbs." },
        { name: "The Dead Mire", level: "64", type: "Elite Area", desc: "Withered giants wandering the fog." }
      ]
    },
    terokkar: {
      threat: "Medium",
      faction: { alliance: 40, horde: 30, enemy: 30 },
      hubs: [
        { name: "Shattered Reach", faction: "Neutral", desc: "A refugee camp for Broken Draenei and Orcs, featuring the Son of Lothar blacksmith." },
        { name: "Skettis Lowlands", faction: "Neutral", desc: "A forward assault camp for the Skyguard." }
      ],
      travel: {
        title: "Spirit Towers Network",
        desc: "Controlling the PVP towers now activates instant teleporters between Stonebreaker Hold and Allerian Stronghold."
      },
      microDungeons: [
        { name: "Skettis Slums", level: "70", type: "Reputation Grind", desc: "High-density Arakkoa dwellings. Drops Skyguard rep." },
        { name: "Bone Wastes Crypts", level: "65", type: "Mini-Dungeon", desc: "Underground labyrinth connecting the Spirit Towers." }
      ]
    },
    nagrand: {
      threat: "High",
      faction: { alliance: 25, horde: 50, enemy: 25 },
      hubs: [
        { name: "The Elemental Plateau", faction: "Neutral", desc: "A sanctuary for Shamans and Engineers harnessing the storms." },
        { name: "Laughing Skull Ruins", faction: "Horde", desc: "Reclaimed ruins serving as a gladiatorial training ground." }
      ],
      travel: {
        title: "Glider Roosts",
        desc: "Goblin Gliders can be rented from high peaks to traverse the zone rapidly without a flying mount."
      },
      story: {
        title: "The Making of a Warchief",
        desc: "A sprawling questline where players mentor a depressed Garrosh Hellscream, showing him the 'Old Horde' ways via flashbacks (Rexxar/Saurfang cameos), eventually leading to him leading the charge against the Twilight Hammer in Oshu'gun."
      },
      microDungeons: [
        { name: "Oshu'gun Interior", level: "66", type: "Lore Zone", desc: "Interact with the spirits of Orc ancestors." },
        { name: "Twilight Ridge", level: "70", type: "Elite Plateau", desc: "Flying-only zone with dangerous void demons." }
      ]
    },
    blades: {
      threat: "Extreme",
      faction: { alliance: 20, horde: 30, enemy: 50 },
      hubs: [
        { name: "Skyguard Basecamp", faction: "Neutral", desc: "The main staging ground for the Ogri'la bombing campaigns." },
        { name: "Wyrmcult Den", faction: "Hostile", desc: "A hidden cultist lair worshipping the black dragons." },
      ],
      travel: {
        title: "Vertical Jump Pads",
        desc: "Gnomish gravity-pads are installed at key valleys, launching players to the upper plateaus instantly."
      },
      microDungeons: [
        { name: "Gruul's Lair Entrance", level: "68", type: "Elite Gauntlet", desc: "Fight through Gronn minions to reach the raid." },
        { name: "Vortex Pinnacle (Ground)", level: "70", type: "Elemental Area", desc: "Lightning-charged fields." }
      ]
    },
    nether: {
      threat: "Critical",
      faction: { alliance: 15, horde: 15, enemy: 70 },
      hubs: [
        { name: "Protectorate Staging", faction: "Neutral", desc: "A massive Ethereal ship docked at Area 52, selling exotic goods." },
        { name: "Kirintor Village", faction: "Alliance", desc: "A magical bubble protected by the Violet Eye." }
      ],
      travel: {
        title: "Teleporter Array",
        desc: "The Mana Forges are linked by teleporters. Controlling them allows instant travel across the zone."
      },
      story: {
        title: "The Redemption of Kael'thas",
        desc: "Discovering that Kil'jaeden has been manipulating Kael'thas with false visions of a restored Quel'Thalas. Players work with Voren'thal the Seer to break the mind control, culminating in Kael'thas turning the Tempest Keep against the Legion fleet.",
        boss: "World Boss: The Whale Shark. A massive Void-infused leviathan swimming in the Twisting Nether streams between eco-domes."
      },
      microDungeons: [
        { name: "Mana Forge B'naar", level: "68", type: "Technology Hub", desc: "Disable the mana drains to weaken the Legion." },
        { name: "Ruins of Farahlon", level: "70", type: "Ghost Town", desc: "A phased area showing what the zone used to be." }
      ]
    },
    shadow: {
      threat: "Critical",
      faction: { alliance: 25, horde: 25, enemy: 50 },
      hubs: [
        { name: "Warden's Cage", faction: "Neutral", desc: "A high-security prison block run by Maiev's forces." },
        { name: "Dragonmaw Port", faction: "Horde", desc: "A captured dock used to launch attacks on the Black Temple." }
      ],
      travel: {
        title: "Nether Drake Taxi",
        desc: "Friendly Nether Drakes will carry players through the fel-lava tubes, avoiding the dangerous surface."
      },
      story: {
        title: "The Illidari Master Plan",
        desc: "Uncovering the truth: Illidan isn't crazy, he's scared. He's building an army to invade Argus. Players witness the training of the first Demon Hunters and Akama's 'double-cross' where he pretends to betray Illidan to fool the Legion spies."
      },
      microDungeons: [
        { name: "Hand of Gul'dan", level: "70", type: "Volcanic Zone", desc: "Survive the lava eruptions while fighting elementals." },
        { name: "The Deathforge", level: "70", type: "Factory", desc: "Sabotage the Infernal production lines." }
      ]
    }
  };


  // --- COMPONENT: DETAIL VIEW ---
  const AtlasDetailModal = ({ item, onClose, setPage }) => {
    const richData = item?.sscTkData || item?.hyjalData;

    const [activeTab, setActiveTab] = useState(
      item?.vanguardData ? 'warband' :
        item?.blackTempleData ? 'overview' :
          item?.chronicleData ? 'overview' :
            item?.gruulMagData ? 'gruul' :
              item?.karaData ? 'normal' :
                item?.cryptsData ? 'overview' :
                  richData ? 'summary' :
                    'overview'
    );
    const [progressionLevel, setProgressionLevel] = useState('base');
    const [previewBoss, setPreviewBoss] = useState(null);
    const [activeTooltip, setActiveTooltip] = useState(null); // { item, x, y }

    const handleTooltip = (e, lootItem) => {
      if (!lootItem) {
        setActiveTooltip(null);
        return;
      }
      const rect = e.currentTarget.getBoundingClientRect();
      const modalRect = e.currentTarget.closest('.fixed').getBoundingClientRect(); // Get modal bounds

      // Calculate position relative to modal if needed, or just page
      // Fixed position is easiest.
      // We want it above the item, centered.
      const x = rect.left + (rect.width / 2);
      const y = rect.top; // Top of the item

      setActiveTooltip({ item: lootItem, x, y });
    };

    if (!item) return null;

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity" onClick={onClose}></div>

        {/* Boss Preview Modal Overlay */}
        {previewBoss && (
          <div className="absolute inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setPreviewBoss(null)}>
            <div className="relative max-w-4xl w-full p-4 animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setPreviewBoss(null)}
                className="absolute -top-10 right-4 text-[#5c5c63] hover:text-white flex items-center gap-2 uppercase font-bold text-xs tracking-widest"
              >
                Close <X className="w-4 h-4" />
              </button>
              <div className="bg-[#0b0d10] border border-[#c29c55] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                <img src={previewBoss.image} alt={previewBoss.name} className="w-full h-auto object-cover max-h-[80vh]" />
                <div className="p-4 bg-[#111] border-t border-[#c29c55]">
                  <h3 className="text-[#c29c55] font-hero text-lg uppercase tracking-widest">{previewBoss.name}</h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Content */}
        <div
          className="relative w-full max-w-7xl bg-[#080808] border border-[#444] shadow-[0_0_60px_rgba(194,156,85,0.15)] rounded-lg animate-in fade-in zoom-in duration-300 flex flex-col h-[90vh] overflow-hidden"
          style={{ borderImage: 'linear-gradient(to bottom, #c29c55, #5a4a2d) 1' }}
        >
          <UnifiedHeader
            icon={(item.type && item.type.includes('Raid')) ? Crown : Globe}
            section="The Archives"
            sub="Encounter Journal"
            title={item.name || "Unknown Entry"}
            quote={item.lore ? item.lore.split('\n')[0].replace(/\*\*/g, '') : "Explore the depths..."}
            background={item.image}
            onClose={onClose}
          />

          {/* DYNAMIC CONTENT AREA */}
          <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0a0a0a] relative min-h-0">

            {/* Content Switch */}
            {richData && richData.tabs ? (
              // --- TABBED VIEW (Generic - SSC, TK, Hyjal) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.entries(richData.tabs).map(([key, tab]) => (
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
                  {richData[activeTab] && (
                    <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">

                      {/* SUMMARY TAB */}
                      {activeTab === 'summary' ? (
                        <div className="space-y-8">
                          <div className="p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-24 bg-[#c29c55]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Architect's Rationale</h3>
                            <p className="text-[#aeb6bf] text-sm leading-relaxed whitespace-pre-line relative z-10">{formatText(richData.summary.rationale)}</p>
                            <div className="mt-4 pt-4 border-t border-[#2f2f35]">
                              <p className="text-[#c29c55] font-hero text-sm italic">"{richData.summary.pop}"</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#111] p-6 border border-[#2f2f35] rounded">
                              <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-4 flex items-center gap-2"><AlertTriangle className="w-3 h-3" /> Core Issues</h4>
                              <ul className="list-disc list-inside space-y-3 text-xs text-[#8a7b62]">
                                {richData.summary.issues.map((issue, i) => <li key={i} className="leading-relaxed">{issue}</li>)}
                              </ul>
                            </div>
                            <div className="bg-[#111] p-6 border border-[#2f2f35] rounded">
                              <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-4 flex items-center gap-2"><Hammer className="w-3 h-3" /> Key Changes</h4>
                              <ul className="space-y-4">
                                {richData.summary.changes.map((change, i) => (
                                  <li key={i} className="text-xs text-[#aeb6bf]">
                                    <strong className="text-[#e0e0e0] block mb-1">{change.title}</strong>
                                    {change.desc}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* INFRASTRUCTURE & ENCOUNTERS GRID */
                        <div className="space-y-6">
                          <div className="mb-8 p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded">
                            <div className="bg-[#111] p-4 rounded border border-[#2f2f35]">
                              <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-2">Design Philosophy</h4>
                              <p className="text-[#e0e0e0] text-xs leading-relaxed">{richData[activeTab].desc}</p>
                            </div>
                          </div>

                          <div className="hidden md:grid grid-cols-12 gap-4 border-b border-[#2f2f35] pb-2 text-[#5c5c63] text-[10px] uppercase tracking-widest font-bold">
                            <div className="col-span-2">Feature / Boss</div>
                            <div className="col-span-3">The Pain Point</div>
                            <div className="col-span-4 text-[#c29c55]">Design Solution</div>
                            <div className="col-span-3 text-[#a335ee]">The Boost</div>
                          </div>

                          {richData[activeTab].grid.map((row, idx) => (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start p-4 bg-[#0e0e10] border border-[#1f1f23] rounded hover:border-[#2f2f35] transition-colors group">
                              <div className="md:col-span-2 font-hero text-[#e0e0e0] text-xs border-b md:border-b-0 border-[#2f2f35] pb-2 md:pb-0 mb-2 md:mb-0 group-hover:text-white transition-colors">{row.element}</div>
                              <div className="md:col-span-3 text-[#8a7b62] text-xs leading-relaxed"><span className="md:hidden text-[#5c5c63] font-bold uppercase text-[9px] block mb-1">Pain:</span>{formatText(row.pain)}</div>
                              <div className="md:col-span-4 text-[#aeb6bf] text-xs leading-relaxed"><span className="md:hidden text-[#c29c55] font-bold uppercase text-[9px] block mb-1 mt-3">Fix:</span>{formatText(row.design)}</div>
                              <div className="md:col-span-3 text-[#d8b4fe] text-xs leading-relaxed italic"><span className="md:hidden text-[#a335ee] font-bold uppercase text-[9px] block mb-1 mt-3">Boost:</span>{formatText(row.boost)}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : item.vanguardData ? (
              // --- VANGUARD COMMAND CENTER (NEW) ---
              <div className="flex-1 flex flex-col h-full bg-[#080808] min-h-0 overflow-hidden">
                {/* Systems Tabs */}
                <div className="flex border-b border-[#333] bg-[#0c0c0c] justify-center">
                  {Object.entries(item.vanguardData.tabs).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`group flex items-center gap-2 px-8 py-5 border-b-2 transition-all duration-300 ${activeTab === key
                        ? 'border-[#c29c55] bg-[#c29c55]/10 text-[#f0e6d2]'
                        : 'border-transparent text-[#5c5c63] hover:text-[#c29c55] hover:bg-[#111]'
                        }`}
                    >
                      <span className={`transition-transform duration-300 ${activeTab === key ? 'scale-110 text-[#c29c55]' : ''}`}>{data.icon}</span>
                      <div className="text-left">
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

                  <div className="relative z-10 p-10 max-w-5xl mx-auto min-h-full">
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
                  </div>
                </div>
              </div>
            ) : item.gruulMagData && item.gruulMagData.toggles ? (
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
                        <div className="hidden md:grid grid-cols-12 gap-4 border-b border-[#2f2f35] pb-2 text-[#5c5c63] text-[10px] uppercase tracking-widest">
                          <div className="col-span-2">Element</div>
                          <div className="col-span-3">Original Pain</div>
                          <div className="col-span-4 text-[#c29c55]">Improved Design</div>
                          <div className="col-span-3 text-[#a335ee]">Creativity Boost</div>
                        </div>

                        {item.gruulMagData[activeTab].grid.map((row, idx) => (
                          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start p-4 bg-[#0e0e10] border border-[#1f1f23] rounded hover:border-[#2f2f35] transition-colors">
                            <div className="md:col-span-2 font-hero text-[#e0e0e0] text-xs border-b md:border-b-0 border-[#2f2f35] pb-2 md:pb-0 mb-2 md:mb-0">{row.element}</div>
                            <div className="md:col-span-3 text-[#8a7b62] text-xs leading-relaxed"><span className="md:hidden text-[#5c5c63] uppercase text-[9px] block mb-1">Pain:</span>{row.pain}</div>
                            <div className="md:col-span-4 text-[#aeb6bf] text-xs leading-relaxed"><span className="md:hidden text-[#c29c55] uppercase text-[9px] block mb-1 mt-3">Fix:</span>{row.design}</div>
                            <div className="md:col-span-3 text-[#d8b4fe] text-xs leading-relaxed italic"><span className="md:hidden text-[#a335ee] uppercase text-[9px] block mb-1 mt-3">Boost:</span>{row.boost}</div>
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
            ) : item.grimBatolData ? (
              // --- TABBED VIEW (GRIM BATOL) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.keys(item.grimBatolData).map((tabKey) => (
                    tabKey !== 'title' && (
                      <button
                        key={tabKey}
                        onClick={() => setActiveTab(tabKey)}
                        className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                          ? 'text-[#c29c55] border-b-2 border-[#c29c55] bg-[#c29c55]/5'
                          : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                          }`}
                      >
                        {tabKey === 'overview' && 'Overview'}
                        {tabKey === 'wings' && 'Wing Structure'}
                        {tabKey === 'bosses' && 'Boss Encounters'}
                        {tabKey === 'misc' && 'Loot & Lore'}
                      </button>
                    )
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.grimBatolData.overview.rationale}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.grimBatolData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.grimBatolData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WINGS */}
                  {activeTab === 'wings' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.grimBatolData.wings.map((wing, i) => (
                        <div key={i} className="bg-[#111] p-5 border border-[#2f2f35] rounded hover:border-[#c29c55]/50 transition-colors">
                          <h4 className="font-hero text-[#f0e6d2] mb-2">{wing.name}</h4>
                          <p className="text-xs text-[#aeb6bf] mb-1"><strong className="text-[#5c5c63]">Theme:</strong> {wing.theme}</p>
                          <p className="text-xs text-[#aeb6bf]"><strong className="text-[#5c5c63]">Hazard:</strong> <span className="text-red-400">{wing.hazard}</span></p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* BOSSES */}
                  {activeTab === 'bosses' && (
                    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.grimBatolData.bosses.map((tier, i) => (
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

                  {/* MISC */}
                  {activeTab === 'misc' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35]">
                        <h4 className="font-hero text-[#c29c55] mb-4">Crucial NPCs</h4>
                        <ul className="space-y-4">
                          {item.grimBatolData.misc.npcs.map((npc, i) => (
                            <li key={i} className="text-xs text-[#aeb6bf]">
                              <strong className="text-[#e0e0e0]">{npc.name}:</strong> {npc.role}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35]">
                        <h4 className="font-hero text-[#c29c55] mb-4">Loot & Rewards</h4>
                        <ul className="space-y-4">
                          {item.grimBatolData.misc.loot.map((loot, i) => (
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
            ) : item.vermilionData ? (
              // --- TABBED VIEW (VERMILION REDOUBT) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.keys(item.vermilionData).map((tabKey) => (
                    tabKey !== 'title' && (
                      <button
                        key={tabKey}
                        onClick={() => setActiveTab(tabKey)}
                        className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                          ? 'text-[#c29c55] border-b-2 border-[#c29c55] bg-[#c29c55]/5'
                          : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                          }`}
                      >
                        {tabKey === 'overview' && 'Overview'}
                        {tabKey === 'attunement' && 'Attunement'}
                        {tabKey === 'phases' && 'Encounters'}
                        {tabKey === 'misc' && 'Loot & Lore'}
                      </button>
                    )
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.vermilionData.overview.rationale}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.vermilionData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.vermilionData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#c29c55]">
                        <h3 className="font-hero text-[#c29c55] text-lg mb-2">{item.vermilionData.attunement.title}</h3>
                        <div className="space-y-6 mt-6">
                          {item.vermilionData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#c29c55]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PHASES */}
                  {activeTab === 'phases' && (
                    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.vermilionData.phases.map((phase, i) => (
                        <div key={i} className="space-y-4">
                          <h3 className="font-hero text-[#c29c55] border-b border-[#2f2f35] pb-2">{phase.name}</h3>
                          <div className="grid grid-cols-1 gap-4">
                            {phase.bosses.map((boss, b) => (
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

                  {/* MISC */}
                  {activeTab === 'misc' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.vermilionData.misc.loot.map((loot, i) => (
                        <div key={i} className="bg-[#1a1c22] p-4 rounded border border-[#2f2f35] hover:border-[#a335ee]/30 transition-colors group">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className={`font-hero text-sm ${loot.quality === 'epic' ? 'text-[#a335ee]' : 'text-[#0070dd]'} group-hover:text-shadow-sm`}>{loot.name}</h4>
                            <span className="text-[10px] text-[#5c5c63] uppercase tracking-wider">{loot.slot}</span>
                          </div>
                          <p className="text-[10px] text-[#8a7b62] mb-3 border-b border-[#2f2f35] pb-2">Dropped by <span className="text-[#c29c55]">{loot.boss}</span></p>
                          <div className="space-y-2 text-xs text-[#aeb6bf]">
                            <p><strong className="text-[#e0e0e0]">Stats:</strong> {loot.stats}</p>
                            <p><strong className="text-[#e0e0e0]">Effect:</strong> {loot.effect}</p>
                            <p className="italic text-[#5c5c63] border-l-2 border-[#2f2f35] pl-3 py-1 mt-2">"{loot.flavor}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.cryptsData ? (
              // --- TABBED VIEW (KARAZHAN CRYPTS) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.keys(item.cryptsData).map((tabKey) => (
                    tabKey !== 'title' && (
                      <button
                        key={tabKey}
                        onClick={() => setActiveTab(tabKey)}
                        className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                          ? 'text-[#c29c55] border-b-2 border-[#c29c55] bg-[#c29c55]/5'
                          : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                          }`}
                      >
                        {tabKey === 'overview' && 'Overview'}
                        {tabKey === 'attunement' && 'Attunement'}
                        {tabKey === 'bosses' && 'Encounters'}
                        {tabKey === 'loot' && 'Loot'}
                      </button>
                    )
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.cryptsData.overview.rationale}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.cryptsData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.cryptsData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#c29c55]">
                        <h3 className="font-hero text-[#c29c55] text-lg mb-2">{item.cryptsData.attunement.title}</h3>
                        <div className="space-y-6 mt-6">
                          {item.cryptsData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#c29c55]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* BOSSES */}
                  {activeTab === 'bosses' && (
                    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.cryptsData.bosses.map((boss, i) => (
                        <div key={i} className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35]">
                          <h3 className="font-hero text-[#c29c55] text-lg mb-4">{boss.name}</h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-[#777] text-xs uppercase font-bold mb-1">Lore</h4>
                              <p className="text-[#e0e0e0] text-sm leading-relaxed">{boss.lore}</p>
                            </div>
                            <div className="bg-[#111] p-4 rounded border border-[#2f2f35]">
                              <h4 className="text-[#a335ee] text-xs uppercase font-bold mb-2">Key Mechanics</h4>
                              <div className="text-[#aeb6bf] text-xs leading-relaxed whitespace-pre-line">{formatText(boss.mechanics)}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LOOT */}
                  {activeTab === 'loot' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 justify-items-center">
                      {item.cryptsData.loot.map((loot, i) => (
                        <div key={i} className="transform hover:scale-105 transition-transform duration-200">
                          <WowTooltip item={loot} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.quelDanilData ? (
              // --- TABBED VIEW (SIEGE OF QUEL'DANIL) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.keys(item.quelDanilData).map((tabKey) => (
                    tabKey !== 'title' && (
                      <button
                        key={tabKey}
                        onClick={() => setActiveTab(tabKey)}
                        className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                          ? 'text-[#c29c55] border-b-2 border-[#c29c55] bg-[#c29c55]/5'
                          : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                          }`}
                      >
                        {tabKey === 'overview' && 'Overview'}
                        {tabKey === 'attunement' && 'Attunement'}
                        {tabKey === 'phases' && 'Encounters'}
                        {tabKey === 'misc' && 'Loot & Lore'}
                      </button>
                    )
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.quelDanilData.overview.rationale}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.quelDanilData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.quelDanilData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#c29c55]">
                        <h3 className="font-hero text-[#c29c55] text-lg mb-2">{item.quelDanilData.attunement.title}</h3>
                        <div className="space-y-6 mt-6">
                          {item.quelDanilData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#c29c55]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PHASES */}
                  {activeTab === 'phases' && (
                    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.quelDanilData.phases.map((phase, i) => (
                        <div key={i} className="space-y-4">
                          <h3 className="font-hero text-[#c29c55] border-b border-[#2f2f35] pb-2">{phase.name}</h3>
                          <div className="grid grid-cols-1 gap-4">
                            {phase.bosses.map((boss, b) => (
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

                  {/* MISC */}
                  {activeTab === 'misc' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.quelDanilData.misc.loot.map((lootItem, i) => (
                        <div key={i} className="transform hover:scale-[1.02] transition-transform">
                          <WowTooltip item={lootItem} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.abyssalMawData ? (
              // --- ABYSSAL MAW (TIER 5.5) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c] px-8">
                  {['overview', 'attunement', 'bosses', 'loot'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors border-b-2 ${activeTab === tab
                        ? 'text-[#00ccff] border-[#00ccff] bg-[#00ccff]/5'
                        : 'text-[#5c5c63] border-transparent hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tab === 'bosses' ? 'Encounters' : tab}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#00ccff] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed whitespace-pre-line">{item.abyssalMawData.overview.rationale}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#00ccff] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.abyssalMawData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#00ccff] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.abyssalMawData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#00ccff]">
                        <h3 className="font-hero text-[#00ccff] text-lg mb-4">{item.abyssalMawData.attunement.title}</h3>
                        <div className="space-y-6">
                          {item.abyssalMawData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#00ccff]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ENCOUNTERS */}
                  {activeTab === 'bosses' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.abyssalMawData.bosses.map((boss, i) => (
                        <div key={i} className="bg-[#1a1c22] p-6 rounded border-l-4 border-[#00ccff] hover:bg-[#222] transition-colors">
                          <h4 className="font-hero text-[#e0e0e0] mb-2">{boss.name}</h4>
                          <p className="text-[#aeb6bf] text-xs leading-relaxed whitespace-pre-line">{boss.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LOOT */}
                  {activeTab === 'loot' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.abyssalMawData.loot.map((lootItem, i) => (
                        <div key={i} className="transform hover:scale-[1.02] transition-transform">
                          <WowTooltip item={lootItem} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.citadelData ? (
              // --- TABBED VIEW (CITADEL OF THE VOID) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.keys(item.citadelData).map((tabKey) => (
                    tabKey !== 'title' && (
                      <button
                        key={tabKey}
                        onClick={() => setActiveTab(tabKey)}
                        className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                          ? 'text-[#c29c55] border-b-2 border-[#c29c55] bg-[#c29c55]/5'
                          : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                          }`}
                      >
                        {tabKey === 'overview' && 'Overview'}
                        {tabKey === 'attunement' && 'Attunement'}
                        {tabKey === 'phases' && 'Encounters'}
                        {tabKey === 'misc' && 'Loot & Lore'}
                      </button>
                    )
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#c29c55] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.citadelData.overview.rationale}</p>
                      </div>

                      {/* Sanity Mechanic */}
                      {item.citadelData.overview.mechanics && (
                        <div className="bg-[#1a1c22] p-6 rounded border border-[#a335ee]/30">
                          <h3 className="font-hero text-[#a335ee] text-lg mb-2">{item.citadelData.overview.mechanics.title}</h3>
                          <p className="text-[#e0e0e0] text-sm mb-4">{item.citadelData.overview.mechanics.desc}</p>
                          <ul className="space-y-2">
                            {item.citadelData.overview.mechanics.details.map((detail, d) => (
                              <li key={d} className="text-xs text-[#aeb6bf] flex items-start gap-2">
                                <span className="text-[#a335ee] mt-0.5">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.citadelData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c29c55] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.citadelData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#c29c55]">
                        <h3 className="font-hero text-[#c29c55] text-lg mb-2">{item.citadelData.attunement.title}</h3>
                        <div className="space-y-6 mt-6">
                          {item.citadelData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#c29c55]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PHASES (WINGS) */}
                  {activeTab === 'phases' && (
                    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.citadelData.phases.map((phase, i) => (
                        <div key={i} className="space-y-4">
                          <h3 className="font-hero text-[#c29c55] border-b border-[#2f2f35] pb-2">{phase.name}</h3>
                          <div className="grid grid-cols-1 gap-4">
                            {phase.bosses.map((boss, b) => (
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

                  {/* MISC (LOOT) */}
                  {activeTab === 'misc' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.citadelData.misc.loot.map((loot, i) => (
                        <div key={i} className="bg-[#1a1c22] p-4 rounded border border-[#2f2f35] hover:border-[#a335ee]/30 transition-colors group">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className={`font-hero text-sm ${loot.quality === 'legendary' ? 'text-[#ff8000]' : 'text-[#a335ee]'} group-hover:text-shadow-sm`}>{loot.name}</h4>
                            <span className="text-[10px] text-[#5c5c63] uppercase tracking-wider">{loot.slot}</span>
                          </div>
                          <p className="text-[10px] text-[#8a7b62] mb-3 border-b border-[#2f2f35] pb-2">Dropped by <span className="text-[#c29c55]">{loot.boss}</span></p>
                          <div className="space-y-2 text-xs text-[#aeb6bf]">
                            <p><strong className="text-[#e0e0e0]">Stats:</strong> {loot.stats}</p>
                            <p><strong className="text-[#e0e0e0]">Effect:</strong> {loot.effect}</p>
                            <p className="italic text-[#5c5c63] border-l-2 border-[#2f2f35] pl-3 py-1 mt-2">"{loot.flavor}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.mcData ? (
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c] px-8">
                  {['overview', 'attunement', 'bosses', 'loot'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors border-b-2 ${activeTab === tab
                        ? 'text-[#ff6600] border-[#ff6600] bg-[#ff6600]/5'
                        : 'text-[#5c5c63] border-transparent hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tab === 'bosses' ? 'Encounters' : tab}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#ff6600] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.mcData.overview.rationale}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#ff6600] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.mcData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#ff6600] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.mcData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#ff6600]">
                        <h3 className="font-hero text-[#ff6600] text-lg mb-4">{item.mcData.attunement.title}</h3>
                        <div className="space-y-6">
                          {item.mcData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#ff6600]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ENCOUNTERS */}
                  {activeTab === 'bosses' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.mcData.bosses.map((boss, i) => (
                        <div key={i} className="bg-[#1a1c22] p-6 rounded border-l-4 border-[#ff6600] hover:bg-[#222] transition-colors">
                          <h4 className="font-hero text-[#e0e0e0] mb-2">{boss.name}</h4>
                          <p className="text-[#aeb6bf] text-xs leading-relaxed">{boss.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LOOT */}
                  {activeTab === 'loot' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.mcData.loot.map((lootItem, i) => (
                        <div key={i} className="transform hover:scale-[1.02] transition-transform">
                          <WowTooltip item={lootItem} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.toeData ? (
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c] px-8">
                  {['overview', 'attunement', 'bosses', 'loot'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors border-b-2 ${activeTab === tab
                        ? 'text-[#0070dd] border-[#0070dd] bg-[#0070dd]/5'
                        : 'text-[#5c5c63] border-transparent hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tab === 'bosses' ? 'Encounters' : tab}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#0070dd] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.toeData.overview.rationale}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#0070dd] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.toeData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#0070dd] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.toeData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#0070dd]">
                        <h3 className="font-hero text-[#0070dd] text-lg mb-4">{item.toeData.attunement.title}</h3>
                        <div className="space-y-6">
                          {item.toeData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#0070dd]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ENCOUNTERS */}
                  {activeTab === 'bosses' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.toeData.bosses.map((boss, i) => (
                        <div key={i} className="bg-[#1a1c22] p-6 rounded border-l-4 border-[#0070dd] hover:bg-[#222] transition-colors">
                          <h4 className="font-hero text-[#e0e0e0] mb-2">{boss.name}</h4>
                          <p className="text-[#aeb6bf] text-xs leading-relaxed">{boss.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LOOT */}
                  {activeTab === 'loot' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.toeData.loot.map((lootItem, i) => (
                        <div key={i} className="transform hover:scale-[1.02] transition-transform">
                          <WowTooltip item={lootItem} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.vermilionData ? (
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c] px-8">
                  {['overview', 'attunement', 'bosses', 'loot'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors border-b-2 ${activeTab === tab
                        ? 'text-[#e74c3c] border-[#e74c3c] bg-[#e74c3c]/5'
                        : 'text-[#5c5c63] border-transparent hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tab === 'bosses' ? 'Encounters' : tab}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#e74c3c] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.vermilionData.overview.rationale}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#e74c3c] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.vermilionData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#e74c3c] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.vermilionData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#e74c3c]">
                        <h3 className="font-hero text-[#e74c3c] text-lg mb-4">{item.vermilionData.attunement.title}</h3>
                        <div className="space-y-6">
                          {item.vermilionData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#e74c3c]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ENCOUNTERS */}
                  {activeTab === 'bosses' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.vermilionData.bosses.map((boss, i) => (
                        <div key={i} className="bg-[#1a1c22] p-6 rounded border-l-4 border-[#e74c3c] hover:bg-[#222] transition-colors">
                          <h4 className="font-hero text-[#e0e0e0] mb-2">{boss.name}</h4>
                          <p className="text-[#aeb6bf] text-xs leading-relaxed mb-3">{boss.desc}</p>
                          {boss.mechanics && (
                            <ul className="list-disc list-inside space-y-1 mt-2 border-t border-[#2f2f35] pt-2">
                              {boss.mechanics.map((mech, m) => (
                                <li key={m} className="text-[10px] text-[#8a7b62] pl-1">{mech}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LOOT */}
                  {activeTab === 'loot' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.vermilionData.loot.map((lootItem, i) => (
                        <div key={i} className="transform hover:scale-[1.02] transition-transform">
                          <WowTooltip item={lootItem} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.bwlData ? (
              // --- BLACKWING LAIR (TIMELOCKED) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c] px-8">
                  {['overview', 'attunement', 'bosses', 'loot'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors border-b-2 ${activeTab === tab
                        ? 'text-[#c0392b] border-[#c0392b] bg-[#c0392b]/5'
                        : 'text-[#5c5c63] border-transparent hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tab === 'bosses' ? 'Encounters' : tab}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#c0392b] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.bwlData.overview.rationale}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c0392b] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.bwlData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#c0392b] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.bwlData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      {/* Attunement Steps */}
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#c0392b]">
                        <h3 className="font-hero text-[#c0392b] text-lg mb-4">{item.bwlData.attunement.title}</h3>
                        <div className="space-y-6">
                          {item.bwlData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#c0392b]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Thunderfury */}
                      {item.bwlData.attunement.legendary && (
                        <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#ffd100]">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-hero text-[#ffd100] text-lg">{item.bwlData.attunement.legendary.name}</h3>
                              <p className="text-xs text-[#5c5c63] uppercase tracking-wider">{item.bwlData.attunement.legendary.subtitle}</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            {item.bwlData.attunement.legendary.stages.map((step, i) => (
                              <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#ffd100]"></div>
                                <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                                <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* ENCOUNTERS */}
                  {activeTab === 'bosses' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.bwlData.bosses.map((boss, i) => (
                        <div key={i} className="bg-[#1a1c22] p-6 rounded border-l-4 border-[#c0392b] hover:bg-[#222] transition-colors">
                          <h4 className="font-hero text-[#e0e0e0] mb-2">{boss.name}</h4>
                          <p className="text-[#aeb6bf] text-xs leading-relaxed">{boss.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LOOT */}
                  {activeTab === 'loot' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.bwlData.loot.map((lootItem, i) => (
                        <div key={i} className="transform hover:scale-[1.02] transition-transform">
                          <WowTooltip item={lootItem} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.aqData ? (
              // --- AHN'QIRAJ (TIMELOCKED) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c] px-8">
                  {['overview', 'attunement', 'bosses', 'loot'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors border-b-2 ${activeTab === tab
                        ? 'text-[#e67e22] border-[#e67e22] bg-[#e67e22]/5'
                        : 'text-[#5c5c63] border-transparent hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tab === 'bosses' ? 'Encounters' : tab}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#e67e22] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.aqData.overview.rationale}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#e67e22] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.aqData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#e67e22] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.aqData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#e67e22]">
                        <h3 className="font-hero text-[#e67e22] text-lg mb-4">{item.aqData.attunement.title}</h3>
                        <div className="space-y-6">
                          {item.aqData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#e67e22]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ENCOUNTERS */}
                  {activeTab === 'bosses' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.aqData.bosses.map((boss, i) => (
                        <div key={i} className="bg-[#1a1c22] p-6 rounded border-l-4 border-[#e67e22] hover:bg-[#222] transition-colors">
                          <h4 className="font-hero text-[#e0e0e0] mb-2">{boss.name}</h4>
                          <p className="text-[#aeb6bf] text-xs leading-relaxed">{boss.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LOOT */}
                  {activeTab === 'loot' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.aqData.loot.map((lootItem, i) => (
                        <div key={i} className="transform hover:scale-[1.02] transition-transform">
                          <WowTooltip item={lootItem} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.naxxramasData ? (
              // --- TABBED VIEW (NAXXRAMAS) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.keys(item.naxxramasData).map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                        ? 'text-[#ff8000] border-b-2 border-[#ff8000] bg-[#ff8000]/5'
                        : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tabKey === 'overview' && 'Overview'}
                      {tabKey === 'attunement' && 'Attunement'}
                      {tabKey === 'quarters' && 'The Quarters'}
                      {tabKey === 'misc' && 'Treasures'}
                      {tabKey === 'legendaries' && 'Legendary Ascensions'}
                    </button>
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#ff8000] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed whitespace-pre-line">{item.naxxramasData.overview.rationale}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#ff8000] text-xs uppercase mb-3">Core Pillars</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.naxxramasData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#ff8000] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.naxxramasData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#ff8000]">
                        <h3 className="font-hero text-[#ff8000] text-lg mb-2">{item.naxxramasData.attunement.title}</h3>
                        <div className="space-y-6 mt-6">
                          {item.naxxramasData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#ff8000]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* QUARTERS */}
                  {activeTab === 'quarters' && (
                    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.naxxramasData.quarters.map((quarter, i) => (
                        <div key={i} className="space-y-4">
                          <h3 className="font-hero text-[#ff8000] border-b border-[#2f2f35] pb-2">{quarter.name}</h3>
                          <div className="grid grid-cols-1 gap-4">
                            {quarter.bosses.map((boss, b) => (
                              <div key={b} className="bg-[#1a1c22] p-4 rounded border-l-2 border-[#5c5c63] hover:border-[#ff8000] transition-colors">
                                <strong className="text-[#e0e0e0] block mb-1">{boss.name}</strong>
                                <p className="text-[#aeb6bf] text-xs">{boss.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LOOT */}
                  {activeTab === 'misc' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.naxxramasData.misc.loot.map((lootItem, i) => (
                        <div key={i} className="transform hover:scale-[1.02] transition-transform">
                          <WowTooltip item={lootItem} />
                        </div>
                      ))}
                    </div>
                  )}
                  {/* LEGENDARIES TAB */}
                  {activeTab === 'legendaries' && (
                    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4">
                      {/* INTRO */}
                      <div className="text-center mb-10">
                        <h2 className="font-hero text-2xl text-[#ff8000] mb-2">Weapons of the Final Age</h2>
                        <p className="text-[#aeb6bf] text-sm italic">"In Classic, these were trophies. In TBC+, they are tools."</p>
                      </div>

                      {item.naxxramasData.legendaries.map((legendary, i) => (
                        <div key={i} className="bg-[#1a1c22] rounded-lg border border-[#2f2f35] overflow-hidden">
                          {/* Header */}
                          <div className="p-6 bg-[#111] border-b border-[#2f2f35] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                              <h3 className="font-hero text-xl text-[#ff8000] drop-shadow-sm">{legendary.name}</h3>
                              <span className="text-xs text-[#5c5c63] uppercase tracking-wider">{legendary.subtitle}</span>
                            </div>
                            {legendary.notes && (
                              <div className="md:text-right max-w-sm">
                                <p className="text-xs text-[#ffd100] leading-relaxed italic border-l-2 md:border-l-0 md:border-r-2 border-[#ff8000] pl-3 md:pl-0 md:pr-3">
                                  "{legendary.notes.vision}"
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Quest Chain */}
                            <div className="lg:col-span-2 space-y-6">
                              <h4 className="font-hero text-[#c29c55] text-sm uppercase mb-4 flex items-center gap-2">
                                <Shield className="w-4 h-4" /> The Path
                              </h4>
                              <div className="relative pl-6 border-l border-[#2f2f35] space-y-8">
                                {legendary.stages.map((stage, s) => (
                                  <div key={s} className="relative group">
                                    <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-[#111] border-2 border-[#5c5c63] group-hover:border-[#ff8000] transition-colors"></div>
                                    <h5 className="text-[#e0e0e0] font-bold text-sm mb-1">{stage.name}</h5>
                                    <div className="text-xs text-[#aeb6bf] space-y-1">
                                      {Object.entries(stage).map(([key, value]) => {
                                        if (key === 'name') return null;
                                        return (
                                          <p key={key} className="leading-relaxed">
                                            <span className="text-[#c29c55] uppercase text-[10px] font-bold mr-1">{key}:</span>
                                            {value}
                                          </p>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Reward Card */}
                            <div className="bg-[#0f0f0f] p-4 rounded border border-[#ff8000]/20 self-start sticky top-4">
                              <h4 className="font-hero text-[#ff8000] text-sm uppercase mb-4 flex items-center gap-2">
                                <Crown className="w-4 h-4" /> The Reward
                              </h4>
                              <div className="space-y-4">
                                <p className="text-[#ff8000] font-bold text-sm">{legendary.reward.name}</p>
                                <p className="text-[10px] text-[#5c5c63] uppercase">{legendary.reward.ilvl}</p>
                                <div className="space-y-2 text-xs text-[#aeb6bf] border-t border-[#2f2f35] pt-3">
                                  {legendary.reward.stats && <p><span className="text-[#e0e0e0]">Stats:</span> {legendary.reward.stats}</p>}
                                  {legendary.reward.equip && <p className="text-[#00ff00]"><span className="text-[#e0e0e0]">Equip:</span> {legendary.reward.equip}</p>}
                                  {legendary.reward.use && <p className="text-[#00ff00]"><span className="text-[#e0e0e0]">Use:</span> {legendary.reward.use}</p>}
                                  {legendary.reward.auras && (
                                    <div className="space-y-1">
                                      <span className="text-[#e0e0e0]">Auras:</span>
                                      {legendary.reward.auras.map((aura, a) => (
                                        <p key={a} className="text-[#00ff00] pl-2">• {aura}</p>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            ) : item.blackrockData ? (
              // --- TABBED VIEW (BLACKROCK MEGA-COMPLEX) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c]">
                  {Object.keys(item.blackrockData).map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                        ? 'text-[#ff4400] border-b-2 border-[#ff4400] bg-[#ff4400]/5'
                        : 'text-[#5c5c63] hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tabKey === 'overview' && 'Overview'}
                      {tabKey === 'wings' && 'The Three Wings'}
                      {tabKey === 'attunement' && 'Attunement & Legendaries'}
                      {tabKey === 'challenge' && 'The Iron Sovereign'}
                      {tabKey === 'loot' && 'Treasures'}
                    </button>
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#ff4400] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">The Molten Span</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed whitespace-pre-line">{item.blackrockData.overview.rationale}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {item.blackrockData.overview.hub.map((hub, i) => (
                          <div key={i} className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                            <h4 className="font-hero text-[#ff4400] text-xs uppercase mb-3">{hub.title}</h4>
                            <p className="text-xs text-[#aeb6bf]">{hub.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}


                  {/* WINGS */}
                  {activeTab === 'wings' && (
                    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.blackrockData.wings.map((wing, i) => (
                        <div key={i} className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] hover:border-[#ff4400] transition-colors">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-hero text-[#ff4400] text-lg">{wing.name}</h3>
                            <span className="text-[10px] text-[#5c5c63] uppercase tracking-wider">{wing.format}</span>
                          </div>
                          <p className="text-[#e0e0e0] text-sm mb-2"><strong className="text-[#c29c55]">Objective:</strong> {wing.objective}</p>

                          {/* UPDATES with Text Formatting */}
                          <div className="mt-4 space-y-2">
                            {wing.updates.map((update, u) => (
                              <p key={u} className="text-xs text-[#aeb6bf] border-l border-[#5c5c63] pl-3">
                                {update.split(/(\*\*.*?\*\*)/).map((part, p) =>
                                  part.startsWith('**') && part.endsWith('**')
                                    ? <strong key={p} className="text-[#e0e0e0]">{part.slice(2, -2)}</strong>
                                    : part
                                )}
                              </p>
                            ))}
                          </div>

                          {/* BOSSES */}
                          {wing.bosses && (
                            <div className="mt-6 pt-4 border-t border-[#2f2f35]">
                              <h4 className="text-[10px] text-[#ff4400] uppercase font-bold mb-2">Wing Boss</h4>
                              {wing.bosses.map((boss, b) => (
                                <div key={b} className="bg-[#111] p-3 rounded border border-[#2f2f35] border-l-2 border-l-[#a335ee]">
                                  <strong className="text-[#e0e0e0] text-sm block mb-1">{boss.name}</strong>
                                  <p className="text-xs text-[#aeb6bf]">
                                    {boss.desc.split(/(\*\*.*?\*\*)/).map((part, p) =>
                                      part.startsWith('**') && part.endsWith('**')
                                        ? <strong key={p} className="text-[#ff4400]">{part.slice(2, -2)}</strong>
                                        : part
                                    )}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#ff8000]">
                        <h3 className="font-hero text-[#ff8000] text-lg mb-4">Legendary Reforging</h3>
                        <div className="space-y-6">
                          {item.blackrockData.attunement.legendaries.map((leg, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#ff8000]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{leg.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{leg.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CHALLENGE */}
                  {activeTab === 'challenge' && (
                    <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <h2 className="font-hero text-2xl text-[#ff0000] drop-shadow-sm">{item.blackrockData.challenge.title}</h2>
                      <div className="bg-[#1a0505] border border-[#ff0000]/30 p-8 rounded-lg">
                        <h3 className="font-hero text-[#ff4400] uppercase tracking-widest text-sm mb-6">Rules of Engagement</h3>
                        <ul className="space-y-4 text-left max-w-md mx-auto">
                          {item.blackrockData.challenge.rules.map((rule, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-[#e0e0e0]">
                              <Skull className="w-4 h-4 text-[#ff0000]" />
                              {rule}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-[#ff0000]/20">
                          <p className="text-[#ff4400] text-xs uppercase font-bold">Reward</p>
                          <p className="text-[#e0e0e0] font-hero text-lg mt-2">{item.blackrockData.challenge.reward}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* LOOT */}
                  {activeTab === 'loot' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.blackrockData.loot.map((loot, i) => (
                        <div key={i} className="bg-[#1a1c22] p-5 rounded border border-[#2f2f35]">
                          <h4 className="font-hero text-[#ff4400] text-sm mb-2">{loot.wing}</h4>
                          <p className="text-xs text-[#aeb6bf] italic">"{loot.note}"</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            ) : item.zulAmanData ? (
              // --- TABBED VIEW (ZUL'AMAN REFORGED) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a1a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f352f] bg-[#0c140c]">
                  {Object.keys(item.zulAmanData).map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                        ? 'text-[#00ff9d] border-b-2 border-[#00ff9d] bg-[#00ff9d]/5'
                        : 'text-[#5c635c] hover:text-[#e0e0e0] hover:bg-[#1a221a]'
                        }`}
                    >
                      {tabKey === 'overview' && 'Overview'}
                      {tabKey === 'flaws' && 'The Reforging'}
                      {tabKey === 'loot' && 'Treasures'}
                    </button>
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a221a] border-l-2 border-[#00ff9d] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">The Empire's Revenge</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed"><RenderTextFormatter text={item.zulAmanData.overview.rationale} /></p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {item.zulAmanData.overview.context.map((ctx, i) => (
                          <div key={i} className="bg-[#0f1a0f] p-5 border border-[#2f352f] rounded">
                            <h4 className="font-hero text-[#00ff9d] text-xs uppercase mb-3">{ctx.label}</h4>
                            <p className="text-xs text-[#aeb6bf]">{ctx.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* FLAWS & FIXES */}
                  {activeTab === 'flaws' && (
                    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.zulAmanData.flaws.map((flaw, i) => (
                        <div key={i} className="bg-[#1a221a] rounded border border-[#2f352f] overflow-hidden">
                          <div className="p-4 bg-[#0f1a0f] border-b border-[#2f352f] flex justify-between items-center">
                            <h3 className="font-hero text-[#f0e6d2] text-sm">{flaw.title}</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 border-b md:border-b-0 md:border-r border-[#2f352f] bg-[#1a0f0f]/30">
                              <h4 className="text-[10px] text-[#ff4444] uppercase font-bold mb-2">The Issue (2007)</h4>
                              <p className="text-xs text-[#aeb6bf]">{flaw.issue}</p>
                            </div>
                            <div className="p-6 bg-[#0f1a0f]/30">
                              <h4 className="text-[10px] text-[#00ff9d] uppercase font-bold mb-2">The Fix (Plus)</h4>
                              <p className="text-xs text-[#e0e0e0]">
                                <RenderTextFormatter text={flaw.fix} />
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LOOT */}
                  {activeTab === 'loot' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 justify-items-center">
                      {item.zulAmanData.loot.map((loot, i) => (
                        <div key={i} className="transform hover:scale-105 transition-transform duration-200">
                          <WowTooltip item={loot} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.gruulData ? (
              // --- TABBED VIEW (GRUUL'S LAIR REFORGED) ---
              <div className="flex-1 flex flex-col h-full bg-[#1a0f0f] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#3b1f1f] bg-[#1a0f0f]">
                  {['overview', 'flaws'].map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                        ? 'text-[#ff4444] border-b-2 border-[#ff4444] bg-[#ff4444]/5'
                        : 'text-[#8a5c5c] hover:text-[#e0e0e0] hover:bg-[#3b1f1f]'
                        }`}
                    >
                      {tabKey === 'overview' && 'Overview'}
                      {tabKey === 'flaws' && 'The Flaws & Fixes'}
                    </button>
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#2a1212] border-l-2 border-[#ff4444] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">{item.gruulData.overview.title}</h3>
                        <div className="text-[#aeb6bf] text-sm leading-relaxed whitespace-pre-line">
                          <RenderTextFormatter text={item.gruulData.overview.rationale} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FLAWS & FIXES */}
                  {activeTab === 'flaws' && (
                    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.gruulData.flaws.map((flaw, i) => (
                        <div key={i} className="bg-[#2a1212] rounded border border-[#3b1f1f] overflow-hidden">
                          <div className="p-4 bg-[#1a0f0f] border-b border-[#3b1f1f] flex justify-between items-center">
                            <h3 className="font-hero text-[#f0e6d2] text-sm">{flaw.title}</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 border-b md:border-b-0 md:border-r border-[#3b1f1f] bg-[#000]/20">
                              <h4 className="text-[10px] text-[#ff4444] uppercase font-bold mb-2">The Issue (2007)</h4>
                              <p className="text-xs text-[#aeb6bf]">{flaw.issue}</p>
                            </div>
                            <div className="p-6 bg-[#ff4444]/5">
                              <h4 className="text-[10px] text-[#00ff9d] uppercase font-bold mb-2">The Fix (Plus)</h4>
                              <div className="text-xs text-[#e0e0e0] whitespace-pre-line">
                                <RenderTextFormatter text={flaw.fix} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.magData ? (
              // --- TABBED VIEW (MAGTHERIDON REFORGED) ---
              <div className="flex-1 flex flex-col h-full bg-[#1a0f0f] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#3b1f1f] bg-[#1a0f0f]">
                  {['overview', 'flaws'].map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors ${activeTab === tabKey
                        ? 'text-[#ff4444] border-b-2 border-[#ff4444] bg-[#ff4444]/5'
                        : 'text-[#8a5c5c] hover:text-[#e0e0e0] hover:bg-[#3b1f1f]'
                        }`}
                    >
                      {tabKey === 'overview' && 'Overview'}
                      {tabKey === 'flaws' && 'The Flaws & Fixes'}
                    </button>
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#2a1212] border-l-2 border-[#ff4444] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">{item.magData.overview.title}</h3>
                        <div className="text-[#aeb6bf] text-sm leading-relaxed whitespace-pre-line">
                          <RenderTextFormatter text={item.magData.overview.rationale} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FLAWS & FIXES */}
                  {activeTab === 'flaws' && (
                    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.magData.flaws.map((flaw, i) => (
                        <div key={i} className="bg-[#2a1212] rounded border border-[#3b1f1f] overflow-hidden">
                          <div className="p-4 bg-[#1a0f0f] border-b border-[#3b1f1f] flex justify-between items-center">
                            <h3 className="font-hero text-[#f0e6d2] text-sm">{flaw.title}</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 border-b md:border-b-0 md:border-r border-[#3b1f1f] bg-[#000]/20">
                              <h4 className="text-[10px] text-[#ff4444] uppercase font-bold mb-2">The Issue (2007)</h4>
                              <p className="text-xs text-[#aeb6bf]">{flaw.issue}</p>
                            </div>
                            <div className="p-6 bg-[#ff4444]/5">
                              <h4 className="text-[10px] text-[#00ff9d] uppercase font-bold mb-2">The Fix (Plus)</h4>
                              <div className="text-xs text-[#e0e0e0] whitespace-pre-line">
                                <RenderTextFormatter text={flaw.fix} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.quelDanilData ? (
              // --- SIEGE OF QUEL'DANIL (RESTORED) ---
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#2f2f35] bg-[#0c0c0c] px-8">
                  {['overview', 'attunement', 'bosses', 'loot'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors border-b-2 ${activeTab === tab
                        ? 'text-[#e67e22] border-[#e67e22] bg-[#e67e22]/5'
                        : 'text-[#5c5c63] border-transparent hover:text-[#e0e0e0] hover:bg-[#1a1c22]'
                        }`}
                    >
                      {tab === 'bosses' ? 'Encounters' : tab}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#1a1c22] border-l-2 border-[#e67e22] rounded">
                        <h3 className="font-hero text-lg text-[#f0e6d2] mb-4">Design Rationale</h3>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed">{item.quelDanilData.overview.rationale}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#e67e22] text-xs uppercase mb-3">Core Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a7b62]">
                            {item.quelDanilData.overview.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#111] p-5 border border-[#2f2f35] rounded">
                          <h4 className="font-hero text-[#e67e22] text-xs uppercase mb-3">Environment</h4>
                          <ul className="space-y-3">
                            {item.quelDanilData.overview.environment.map((env, i) => (
                              <li key={i} className="text-xs text-[#aeb6bf]">
                                <strong className="text-[#e0e0e0]">{env.title}:</strong> {env.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ATTUNEMENT */}
                  {activeTab === 'attunement' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="bg-[#1a1c22] p-6 rounded border border-[#2f2f35] border-l-4 border-l-[#e67e22]">
                        <h3 className="font-hero text-[#e67e22] text-lg mb-4">{item.quelDanilData.attunement.title}</h3>
                        <div className="space-y-6">
                          {item.quelDanilData.attunement.steps.map((step, i) => (
                            <div key={i} className="relative pl-8 border-l border-[#5c5c63]">
                              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#111] border border-[#e67e22]"></div>
                              <h4 className="text-[#e0e0e0] font-hero text-sm mb-1">{step.name}</h4>
                              <p className="text-[#aeb6bf] text-xs">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ENCOUNTERS */}
                  {activeTab === 'bosses' && (
                    <div className="space-y-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.quelDanilData.phases.map((phase, p) => (
                        <div key={p} className="space-y-4">
                          <h3 className="font-hero text-[#e67e22] border-b border-[#2f2f35] pb-2">{phase.name}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {phase.bosses.map((boss, b) => (
                              <div key={b} className="bg-[#1a1c22] p-6 rounded border-l-4 border-[#e67e22] hover:bg-[#222] transition-colors">
                                <h4 className="font-hero text-[#e0e0e0] mb-2">{boss.name}</h4>
                                <p className="text-[#aeb6bf] text-xs leading-relaxed mb-3">{boss.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* LOOT */}
                  {activeTab === 'loot' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.quelDanilData.misc.loot.map((lootItem, i) => (
                        <div key={i} className="transform hover:scale-[1.02] transition-transform">
                          <WowTooltip item={lootItem} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.sscTkData ? (
              // --- SSC / TK OVERHAUL ---
              <div className="flex-1 flex flex-col h-full bg-[#050505] min-h-0 overflow-hidden">
                <div className="flex border-b border-[#1f1f25] bg-[#0a0a0c] px-8">
                  {['summary', 'infrastructure', 'encounters'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest transition-colors border-b-2 ${activeTab === tab
                        ? 'text-[#00ccff] border-[#00ccff] bg-[#00ccff]/5'
                        : 'text-[#4c4c53] border-transparent hover:text-[#e0e0e0] hover:bg-[#15151a]'
                        }`}
                    >
                      {item.sscTkData.tabs && item.sscTkData.tabs[tab] ? item.sscTkData.tabs[tab].title : tab}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* SUMMARY */}
                  {activeTab === 'summary' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#0a0f14] border-l-2 border-[#00ccff] rounded">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-hero text-lg text-[#e0f7ff] mb-2">{item.sscTkData.title}</h3>
                            <p className="text-[#00ccff] text-xs uppercase tracking-widest mb-4">Vision: {item.sscTkData.vision}</p>
                          </div>
                        </div>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed whitespace-pre-line border-t border-[#1f2933] pt-4">{item.sscTkData.summary.rationale}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#0a0f14] p-5 border border-[#1f2933] rounded">
                          <h4 className="font-hero text-[#ff4444] text-xs uppercase mb-3">The Issues</h4>
                          <ul className="list-disc list-inside space-y-2 text-xs text-[#8a9bb0]">
                            {item.sscTkData.summary.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                          </ul>
                        </div>
                        <div className="bg-[#0a0f14] p-5 border border-[#1f2933] rounded">
                          <h4 className="font-hero text-[#00ccff] text-xs uppercase mb-3">The Solution</h4>
                          <ul className="space-y-3">
                            {item.sscTkData.summary.changes.map((change, i) => (
                              <li key={i} className="text-xs text-[#8a9bb0]">
                                <strong className="text-[#e0f7ff]">{change.title}:</strong> {change.desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* INFRASTRUCTURE / SYSTEMS */}
                  {activeTab === 'infrastructure' && (
                    <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      <div className="mb-4">
                        <p className="text-[#aeb6bf] text-sm italic border-l-2 border-[#1f2933] pl-4">{item.sscTkData.infrastructure.desc}</p>
                      </div>
                      {item.sscTkData.infrastructure.grid.map((gridItem, i) => (
                        <div key={i} className="bg-[#0a0f14] rounded border border-[#1f2933] overflow-hidden group hover:border-[#00ccff]/30 transition-colors">
                          <div className="p-4 bg-[#05080a] border-b border-[#1f2933] flex justify-between items-center">
                            <h3 className="font-hero text-[#e0f7ff] text-sm">{gridItem.element}</h3>
                            <span className="text-[10px] text-[#00ccff] uppercase tracking-wider px-2 py-1 bg-[#00ccff]/10 rounded">{gridItem.boost}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 border-b md:border-b-0 md:border-r border-[#1f2933] bg-[#000]/20">
                              <h4 className="text-[10px] text-[#ff4444] uppercase font-bold mb-2">Pain Point</h4>
                              <p className="text-xs text-[#8a9bb0]">{gridItem.pain}</p>
                            </div>
                            <div className="p-6 bg-[#00ccff]/5">
                              <h4 className="text-[10px] text-[#00ccff] uppercase font-bold mb-2">Design Solved</h4>
                              <div className="text-xs text-[#e0f7ff] whitespace-pre-line">
                                <RenderTextFormatter text={gridItem.design} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ENCOUNTERS */}
                  {activeTab === 'encounters' && (
                    <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      <div className="mb-4">
                        <p className="text-[#aeb6bf] text-sm italic border-l-2 border-[#1f2933] pl-4">{item.sscTkData.encounters.desc}</p>
                      </div>
                      {item.sscTkData.encounters.grid.map((gridItem, i) => (
                        <div key={i} className="bg-[#0a0f14] rounded border border-[#1f2933] overflow-hidden group hover:border-[#a335ee]/30 transition-colors">
                          <div className="p-4 bg-[#05080a] border-b border-[#1f2933] flex justify-between items-center">
                            <h3 className="font-hero text-[#e0f7ff] text-sm">{gridItem.element}</h3>
                            <span className="text-[10px] text-[#a335ee] uppercase tracking-wider px-2 py-1 bg-[#a335ee]/10 rounded">{gridItem.boost}</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 border-b md:border-b-0 md:border-r border-[#1f2933] bg-[#000]/20">
                              <h4 className="text-[10px] text-[#ff4444] uppercase font-bold mb-2">Legacy Mechanics</h4>
                              <p className="text-xs text-[#8a9bb0]">{gridItem.pain}</p>
                            </div>
                            <div className="p-6 bg-[#a335ee]/5">
                              <h4 className="text-[10px] text-[#a335ee] uppercase font-bold mb-2">Retuned Mechanics</h4>
                              <div className="text-xs text-[#e0f7ff] whitespace-pre-line">
                                <RenderTextFormatter text={gridItem.design} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : item.heroicPlusData ? (
              // --- HEROIC+ DUNGEONS OVERHAUL ---
              <div className="flex-1 flex flex-col h-full bg-[#0d1117] min-h-0 overflow-hidden">
                <div className="flex overflow-x-auto border-b border-[#2f2f35] bg-[#010409]">
                  {/* Overview Tab */}
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-6 py-4 text-xs font-hero uppercase tracking-widest whitespace-nowrap transition-colors ${activeTab === 'overview'
                      ? 'text-[#58a6ff] border-b-2 border-[#58a6ff] bg-[#58a6ff]/10'
                      : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'
                      }`}
                  >
                    Overview
                  </button>
                  {/* Hub Tabs */}
                  {item.heroicPlusData.hubs.map((hub) => (
                    <button
                      key={hub.name}
                      onClick={() => setActiveTab(hub.name)}
                      className={`px-6 py-4 text-xs font-hero uppercase tracking-widest whitespace-nowrap transition-colors ${activeTab === hub.name
                        ? 'text-[#58a6ff] border-b-2 border-[#58a6ff] bg-[#58a6ff]/10'
                        : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'
                        }`}
                    >
                      {hub.name}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                  {/* OVERVIEW CONTENT */}
                  {activeTab === 'overview' && (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4">
                      <div className="p-6 bg-[#161b22] border-l-2 border-[#58a6ff] rounded">
                        <h3 className="font-hero text-lg text-[#c9d1d9] mb-4">Architect's Patch Notes</h3>
                        <p className="text-[#8b949e] text-sm leading-relaxed">{item.heroicPlusData.overview.rationale}</p>
                        {/* Add the lore content as secondary context */}
                        {item.lore && (
                          <div className="mt-4 pt-4 border-t border-[#30363d] text-[#8b949e] text-sm leading-relaxed whitespace-pre-line">
                            <RenderTextFormatter text={item.lore} />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* HUB CONTENT */}
                  {activeTab !== 'overview' && item.heroicPlusData.hubs.find(h => h.name === activeTab) && (
                    <div className="space-y-12 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.heroicPlusData.hubs.find(h => h.name === activeTab).dungeons.map((dungeon, i) => (
                        <div key={i} className="space-y-6">
                          <h3 className="text-xl font-hero text-[#58a6ff] border-b border-[#30363d] pb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#58a6ff]"></span>
                            {dungeon.name}
                          </h3>
                          <div className="grid grid-cols-1 gap-6">
                            {dungeon.flaws.map((flaw, j) => (
                              <div key={j} className="bg-[#161b22] rounded border border-[#30363d] overflow-hidden">
                                <div className="p-3 bg-[#0d1117] border-b border-[#30363d]">
                                  <h4 className="font-hero text-[#c9d1d9] text-sm">{flaw.title}</h4>
                                </div>
                                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="md:border-r border-[#30363d] pr-4 bg-[#0d1117]/50 rounded p-2">
                                    <h5 className="text-[10px] text-[#ff7b72] uppercase font-bold mb-1">The Issue</h5>
                                    <p className="text-xs text-[#8b949e]">{flaw.issue}</p>
                                  </div>
                                  <div className="bg-[#238636]/10 rounded p-2">
                                    <h5 className="text-[10px] text-[#3fb950] uppercase font-bold mb-1">The Fix</h5>
                                    <div className="text-xs text-[#c9d1d9]">
                                      <RenderTextFormatter text={flaw.fix} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
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

                      {/* Cross-Pollination Button */}
                      <button
                        onClick={() => setPage('defenders')}
                        className="w-full mt-6 px-4 py-3 bg-[#c29c55] hover:bg-[#d4aa5d] text-black font-hero font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
                      >
                        <Shield className="w-4 h-4" /> Defend the Home Front
                      </button>
                    </div>
                  )}

                  {/* EVENTS (TWO COLUMNS) */}
                  {activeTab === 'events' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                      {item.chronicleData.events.map((event, i) => (
                        <div key={i} className="bg-[#1a1c22] p-5 rounded border border-[#2f2f35] hover:border-[#c29c55]/50 transition-colors group">
                          <div className="flex justify-between items-start mb-3 border-b border-[#2f2f35] pb-2">
                            <h4 className="font-hero text-[#f0e6d2] group-hover:text-[#c29c55] transition-colors">{event.event}</h4>
                            <span className="text-[10px] uppercase text-[#5c5c63] bg-black/40 px-2 py-1 rounded">{event.region}</span>
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
            ) : item.type === 'World Event' ? (
              <div className="p-10 overflow-y-auto custom-scrollbar h-full bg-[#0a0a0a]">
                <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4">

                  {/* INVASIONS DATA: Grand Commanders */}
                  {item.invasionsData?.grandCommanders && (
                    <div className="bg-[#1a1c22] p-8 rounded border border-[#2f2f35]">
                      <h4 className="text-[#ff4400] font-hero text-lg mb-6 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                        <Crown className="w-5 h-5" /> The Grand Commanders
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {item.invasionsData.grandCommanders.map((boss, i) => (
                          <div key={i} className="bg-[#0b0d10] p-4 rounded border-l-2 border-[#ff4400]">
                            <h5 className="text-[#e0e0e0] font-bold text-sm mb-1">{boss.name}</h5>
                            <span className="text-xs text-[#5c5c63] uppercase tracking-wider block mb-2">{boss.faction} • {boss.location}</span>
                            <p className="text-[#aeb6bf] text-xs leading-relaxed">{boss.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Geography */}
                    {item.geography && (
                      <div className="bg-[#111] p-8 rounded border border-[#2f2f35] flex flex-col hover:border-[#c29c55]/30 transition-colors">
                        <h4 className="text-[#c29c55] font-hero text-sm mb-6 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                          <Compass className="w-4 h-4" /> The Theater of War
                        </h4>
                        <p className="text-[#aeb6bf] text-sm whitespace-pre-line leading-relaxed flex-1">
                          {formatText(item.geography)}
                        </p>
                      </div>
                    )}

                    {/* Philosophy / Vision */}
                    {item.philosophy && (
                      <div className="bg-[#111] p-8 rounded border border-[#2f2f35] hover:border-[#c29c55]/30 transition-colors">
                        <h4 className="text-[#c29c55] font-hero text-sm mb-6 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                          <BookOpen className="w-4 h-4" /> Developer Commentary
                        </h4>
                        <div className="space-y-6">
                          <div className="bg-[#0b0d10] p-5 rounded border-l-2 border-[#c29c55]">
                            <span className="text-[#c29c55] text-xs uppercase tracking-widest block mb-2 font-bold">The Vision for Plus</span>
                            <p className="text-[#e0e0e0] text-sm leading-relaxed">{formatText(item.philosophy.plus)}</p>
                          </div>
                          {item.philosophy.tbc && (
                            <div className="pl-5 border-l border-[#2f2f35]">
                              <span className="text-[#5c5c63] text-xs uppercase tracking-widest block mb-2 font-bold">Historical Context (2007)</span>
                              <p className="text-[#8a7b62] text-xs leading-relaxed italic">{formatText(item.philosophy.tbc)}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* INVASIONS DATA: Loot */}
                  {item.invasionsData?.loot && (
                    <div className="bg-[#1a1c22] p-8 rounded border border-[#2f2f35]">
                      <h4 className="text-[#a335ee] font-hero text-lg mb-6 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                        <Zap className="w-5 h-5" /> Notable Loot
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {item.invasionsData.loot.map((loot, i) => (
                          <div key={i} className="bg-[#0b0d10]">
                            <WowTooltip item={loot} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mechanics if any */}
                  {item.mechanics && (
                    <div className="bg-[#1a1c22] p-10 rounded border border-[#2f2f35]">
                      <h4 className="text-[#c29c55] font-hero text-xl mb-8 flex items-center gap-3 justify-center border-b border-[#2f2f35] pb-4 mx-auto max-w-md">
                        <Shield className="w-6 h-6" /> Engagement Directives
                      </h4>
                      <div className="text-[#e0e0e0] text-sm whitespace-pre-line leading-loose text-center max-w-3xl mx-auto font-medium">
                        {formatText(item.mechanics)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-full overflow-hidden">
                {/* Left Column: Philosophy & Mechanics (7 cols) */}
                <div className="lg:col-span-7 p-8 overflow-y-auto custom-scrollbar border-r border-[#2f2f35] bg-[#0a0a0a]">
                  <div className="space-y-8">
                    {/* Architect's Notes */}
                    {item.philosophy && (
                      <div>
                        <h4 className="text-[#c29c55] font-hero text-sm mb-4 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                          <BookOpen className="w-4 h-4" /> Architect's Notes
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-[#1a1c22] p-4 rounded border-l-2 border-[#5c5c63]">
                            <span className="text-[#5c5c63] text-xs">v2.4 (Live)</span><span className="uppercase tracking-widest block mb-1">Historical Context</span>
                            <p className="text-[#aeb6bf] text-sm leading-relaxed">{formatText(item.philosophy.tbc)}</p>
                          </div>
                          <div className="bg-[#0b0d10] p-4 rounded border-l-2 border-[#c29c55]">
                            <span className="text-[#c29c55] text-xs uppercase tracking-widest block mb-1">The Vision for Plus</span>
                            <p className="text-[#e0e0e0] text-sm leading-relaxed">{formatText(item.philosophy.plus)}</p>
                          </div>
                        </div>
                      </div>
                    )}

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

                  {/* ATTUNEMENT TRACKER (RAIDS ONLY) */}
                  {item.type && item.type.includes('Raid') && (
                    <div className="mb-8 bg-[#1a1c22] border border-[#2f2f35] rounded p-4 animate-in slide-in-from-right-4">
                      {item.attunement ? (
                        <>
                          <h4 className="text-[#c29c55] font-hero text-xs uppercase mb-1 flex items-center gap-2">
                            <Key className="w-3 h-3" /> Attunement: {item.attunement.title}
                          </h4>
                          <p className="text-[#6b7280] text-[10px] mb-3 leading-relaxed">{item.attunement.desc}</p>
                          <div className="space-y-2">
                            {item.attunement.steps.map((step, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded bg-green-900/40 border border-green-500/50 flex items-center justify-center shrink-0">
                                  <CheckSquare className="w-2 h-2 text-green-500" />
                                </div>
                                <span className="text-xs text-[#aeb6bf]">{step}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <h4 className="text-[#c29c55] font-hero text-xs uppercase mb-3 flex items-center gap-2">
                            <Key className="w-3 h-3" /> Attunement Clearance
                          </h4>
                          <div className="space-y-2">
                            {(() => {
                              const attunements = {
                                'Karazhan': ['Obtain Key Fragments from SL/SV/Arc', 'Complete Black Morass'],
                                'Gruul': ['None Required'],
                                'Magtheridon': ['None Required'],
                                'Serpentshrine Cavern': ['Complete "Club of Kar\'desh" (Heroic Slave Pens)'],
                                'Tempest Keep': ['Complete "Cipher of Damnation" (Shadowmoon Valley)'],
                                'Mount Hyjal': ['Vials of Eternity (Vashj & Kael\'thas)'],
                                'Black Temple': ['Medallion of Karabor (Mount Hyjal Chain)'],
                                'Sunwell Plateau': ['Shattered Sun Offensive Exalted']
                              };
                              const steps = Object.entries(attunements).find(([k, v]) => item.name.includes(k))?.[1] || ['No Attunement Required'];
                              return steps.map((step, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded bg-green-900/40 border border-green-500/50 flex items-center justify-center">
                                    <CheckSquare className="w-2 h-2 text-green-500" />
                                  </div>
                                  <span className="text-xs text-[#aeb6bf]">{step}</span>
                                </div>
                              ));
                            })()}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {item.bosses && (
                    <div className="mb-8">
                      <h4 className="text-[#c29c55] font-hero text-sm mb-4 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                        <Skull className="w-4 h-4" /> {item.tuning ? "System Details" : "Encounter Journal"}
                      </h4>
                      <ul className="space-y-4">
                        {item.bosses.map((boss, i) => {
                          // Split boss name from description if present
                          let name = "Unknown Boss";
                          let desc = null;
                          let previewImage = null;

                          if (typeof boss === 'string') {
                            const separatorIndex = boss.indexOf(':');
                            name = separatorIndex === -1 ? boss.replace(/\*\*/g, '') : boss.substring(0, separatorIndex).replace(/\*\*/g, '').trim();
                            // Fix for descriptions starting with ** artifact
                            desc = separatorIndex === -1 ? null : boss.substring(separatorIndex + 1).trim().replace(/^\*\*|\*\*$/g, '');
                          } else if (typeof boss === 'object' && boss !== null) {
                            name = boss.name || "Unknown Boss";
                            desc = boss.desc || boss.description || null;
                            previewImage = boss.preview || boss.image || null;
                          }

                          return (
                            <li key={i} className="flex flex-col gap-2 group p-2 hover:bg-[#111] rounded transition-colors">
                              <div className="flex items-start gap-3">
                                <div className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-[#1a1c22] border border-[#2f2f35] text-[10px] text-[#5c5c63] font-hero shrink-0 group-hover:border-[#c29c55] group-hover:text-[#c29c55] transition-colors">
                                  {i + 1}
                                </div>
                                <div className="text-sm flex-1">
                                  <div className="flex justify-between items-center mb-1">
                                    <strong className="text-[#e0e0e0] group-hover:text-white transition-colors">{name}</strong>
                                    {previewImage && (
                                      <button
                                        onClick={() => setPreviewBoss({ name, image: previewImage })}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#c29c55] flex items-center gap-1 uppercase font-bold tracking-wider hover:underline"
                                        title="View Preview"
                                      >
                                        <PlayCircle className="w-3 h-3" /> Preview
                                      </button>
                                    )}
                                  </div>
                                  {desc && <span className="text-[#6b7280] text-xs leading-tight block">{formatText(desc)}</span>}
                                </div>
                              </div>
                            </li>
                          );
                        })}

                      </ul>
                    </div>
                  )}

                  {/* LOOT PREVIEW CAROUSEL */}
                  {item.loot && item.loot.length > 0 && (
                    <div className="mt-8 border-t border-[#2f2f35] pt-6">
                      <h4 className="text-[#c29c55] font-hero text-sm mb-4 flex items-center gap-2">
                        <Star className="w-4 h-4" /> Notable Loot
                      </h4>
                      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        {item.loot.map((lootItem, i) => (
                          <div
                            key={i}
                            className="min-w-[48px] w-12 h-12 bg-[#1a1c22] border border-[#2f2f35] rounded hover:border-[#a335ee] hover:shadow-[0_0_10px_#a335ee] transition-all cursor-pointer flex items-center justify-center group relative ring-offset-2 ring-offset-[#080808]"
                            onMouseEnter={(e) => handleTooltip(e, lootItem)}
                            onMouseLeave={() => setActiveTooltip(null)}
                          >
                            <div className="w-8 h-8 bg-black/50 rounded flex items-center justify-center pointer-events-none">
                              {/* TODO: Real icons. For now, text fallback or generic icons based on 'icon' field */}
                              <p className="text-[#a335ee] font-bold text-xs">{lootItem.name.charAt(0)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {(!item.loot || item.loot.length === 0) && item.type && (item.type.includes('Raid') || item.type.includes('Dungeon')) && (
                    <div className="mt-8 border-t border-[#2f2f35] pt-6">
                      <h4 className="text-[#c29c55] font-hero text-sm mb-4 flex items-center gap-2">
                        <Star className="w-4 h-4" /> Notable Loot
                      </h4>
                      {/* Mock Loot Strip Fallback */}
                      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        {[1, 2, 3, 4].map((n) => (
                          <div key={n} className="min-w-[48px] w-12 h-12 bg-[#1a1c22] border border-[#2f2f35] rounded hover:border-[#a335ee] hover:shadow-[0_0_10px_#a335ee] transition-all cursor-pointer flex items-center justify-center group relative">
                            <div className="w-8 h-8 bg-black/50 rounded flex items-center justify-center">
                              <p className="text-[#a335ee] font-bold text-xs">?</p>
                            </div>
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-[#0b0d10] border border-[#a335ee] p-2 rounded hidden group-hover:block z-50 pointer-events-none">
                              <p className="text-[#a335ee] text-xs font-bold mb-1">Undiscovered Artifact</p>
                              <p className="text-[#5c5c63] text-[9px]">Item Level ???</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div >
            )}
          </div >
        </div >

        {/* Global Floating Tooltip */}
        {
          activeTooltip && (
            <div
              className="fixed z-[10001] pointer-events-none animate-in fade-in zoom-in-95 duration-150"
              style={{
                left: activeTooltip.x,
                top: activeTooltip.y - 15,
                transform: 'translate(-50%, -100%)'
              }}
            >
              <WowTooltip item={activeTooltip.item} />
            </div>
          )
        }
        {
          false && (
            <div
              className="hidden"
              style={{
                display: 'none'
              }}
            >
              {/* Name */}
              <p className="text-[15px] font-bold text-[#a335ee] mb-0.5 leading-tight">{activeTooltip.item.name}</p>

              {/* Item Level */}
              <p className="text-[#ffd100] text-xs font-bold mb-2">Item Level {activeTooltip.item.ilvl}</p>

              {/* Binding */}
              <p className="text-white text-xs mb-0.5">Binds when picked up</p>

              {/* Slot & Type */}
              <div className="flex justify-between text-white text-xs mb-2">
                <span>{activeTooltip.item.slot}</span>
                {/* Could add armor type here if available */}
              </div>

              {/* Armor (Mock if unavailable, or skip) */}

              {/* Stats - Split by comma */}
              <div className="mb-2">
                {activeTooltip.item.stats.split(',').map((stat, i) => (
                  <p key={i} className="text-white text-xs mb-0.5 leading-tight">{stat.trim()}</p>
                ))}
              </div>

              {/* Effects */}
              <p className="text-[#1eff00] text-xs leading-normal mb-3">{activeTooltip.item.effect}</p>

              {/* Level Req */}
              <p className="text-white text-xs mb-3">Requires Level 70</p>

              {/* Flavor Text / Dev Note */}
              {activeTooltip.item.desc && (
                <p className="text-[#ffd100] text-[11px] italic leading-tight border-t border-[#444] pt-2 mt-2">"{activeTooltip.item.desc}"</p>
              )}
            </div>
          )
        }

      </div >
    );
  };

  return (
    <div className="min-h-screen bg-[#050403] text-[#e0e0e0] font-sans selection:bg-amber-900 selection:text-white overflow-x-hidden" >
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
        icon="https://i.imgur.com/I9LdqMi.png"
        background="https://i.imgur.com/iM4mG67.jpeg"
        section="The Atlas of Outland"
        sub="v3.0 (Refactor)"
        title="Uncharted Territory"
        quote="Explore the lost chapters of the Burning Crusade. From the depths of the Black Temple to the forgotten corners of Azeroth."
      />

      {/* Developer's Perspective (Moved below header) */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-left space-y-6 text-sm text-[#8a7b62] bg-[#0b0d10] p-8 rounded border border-[#2f2f35] shadow-xl">
          <p className="font-body italic border-b border-[#2f2f35] pb-6 mb-4 text-base text-[#c29c55]/80 text-center">
            &quot;From a developer&apos;s perspective, we identified narrative voids in the original expansion—like Kael&apos;thas&apos;s transition to the Legion or the Draenei&apos;s isolated starting experience—and built dungeons specifically to tell those stories.&quot;
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[#c29c55] font-hero text-xs uppercase tracking-widest mb-3 border-b border-[#c29c55]/20 pb-1">Closing Narrative Gaps</h4>
              <p className="text-[#aeb6bf] text-xs leading-relaxed">{formatText("TBC had incredible lore but often told it through text rather than gameplay. We knew Kael'thas joined Illidan, but we never *played* their escape from Dalaran. The new **Siege of Dalaran** lets players live that history. Similarly, the **Dark Portal Excavation** connects Azeroth and Outland, showing the immediate aftermath of the portal's reopening.")}</p>
            </div>
            <div>
              <h4 className="text-[#c29c55] font-hero text-xs uppercase tracking-widest mb-3 border-b border-[#c29c55]/20 pb-1">Diversifying Gameplay</h4>
              <p className="text-[#aeb6bf] text-xs leading-relaxed">{formatText("We wanted to break the \"Tank and Spank\" monotony. Dungeons like **The Apexis Conclave** introduce puzzle mechanics (Light Reflection), while **The Ethereum Vaults** introduce a \"Heist\" timer. This variety ensures that different class utilities (Mage blinking, Rogue sprinting) have moments to shine.")}</p>
            </div>
            <div>
              <h4 className="text-[#c29c55] font-hero text-xs uppercase tracking-widest mb-3 border-b border-[#c29c55]/20 pb-1">Evergreen Relevance</h4>
              <p className="text-[#aeb6bf] text-xs leading-relaxed">{formatText("By introducing **Heroic+** modes and tying crafting materials to specific dungeon activities (like the **Undercity of Karabor** crafting stations), we ensure these dungeons remain relevant throughout the entire expansion lifecycle, not just as stepping stones to raid gear.")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* VIEW MODE TOGGLE */}
      <div className="bg-[#0b0d10] pt-8 pb-4 flex justify-center border-t border-[#2f2f35]">
        <div className="inline-flex bg-[#1a1c22] p-1 rounded-lg border border-[#2f2f35]">
          <button
            onClick={() => { setGroupingMode('zone'); setSelectedTier('All'); }}
            className={`px-6 py-2 rounded-md text-xs font-hero uppercase tracking-widest transition-all ${groupingMode === 'zone' ? 'bg-[#c29c55] text-black shadow-lg' : 'text-[#5c5c63] hover:text-[#e0e0e0]'}`}
          >
            By Zone
          </button>
          <button
            onClick={() => { setGroupingMode('tier'); setSelectedTier(4); }} // Default to T4 when switching to Tier Mode
            className={`px-6 py-2 rounded-md text-xs font-hero uppercase tracking-widest transition-all ${groupingMode === 'tier' ? 'bg-[#c29c55] text-black shadow-lg' : 'text-[#5c5c63] hover:text-[#e0e0e0]'}`}
          >
            By Type
          </button>
        </div>
      </div>

      {/* CONTINENT TABS (Hidden in Tier Mode) */}
      <div className={`bg-[#0b0d10] border-b border-[#2f2f35] transition-all duration-500 overflow-hidden ${groupingMode === 'tier' ? 'max-h-0 opacity-0' : 'max-h-24 opacity-100'}`}>
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

      {/* --- VANGUARD VIEW --- */}
      {/* --- VANGUARD VIEW REMOVED - TREATED AS STANDARD ZONE --- */}

      {/* STANDARD ATLAS VIEW */}
      <>
        {/* ZONE NAVIGATION (Hidden in Tier Mode) */}
        <div className={`sticky top-0 z-40 bg-[#0b0d10] border-b border-[#2f2f35] mb-12 shadow-2xl transition-all duration-500 ${groupingMode === 'tier' ? 'pt-4' : ''}`}> {/* Add padding if map is hidden to give space */}
          <div className={`container mx-auto px-4 py-3 flex justify-between items-center bg-[#0e0e10] border-b border-[#2f2f35] ${groupingMode === 'tier' ? 'hidden' : 'block'}`}>
            <h3 className="font-hero text-[#c29c55] text-xs uppercase tracking-widest flex items-center gap-2">
              <Compass className="w-4 h-4" /> Sector Navigation
            </h3>
            <div className="flex bg-[#1a1c22] rounded p-1 border border-[#2f2f35]">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded text-[10px] uppercase font-bold transition-all ${viewMode === 'list' ? 'bg-[#c29c55] text-black' : 'text-[#5c5c63] hover:text-[#e0e0e0]'}`}
              >
                List
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-3 py-1 rounded text-[10px] uppercase font-bold transition-all ${viewMode === 'map' ? 'bg-[#c29c55] text-black' : 'text-[#5c5c63] hover:text-[#e0e0e0]'}`}
              >
                Map
              </button>
            </div>
          </div>

          {/* LIST VIEW */}
          {groupingMode === 'zone' && viewMode === 'list' && (
            <div className="overflow-x-auto no-scrollbar bg-[#0b0d10]">
              <div className="container mx-auto flex justify-start lg:justify-center gap-3 p-3 min-w-max">
                {zones?.[activeContinent] && Object.entries(zones[activeContinent]).map(([key, zone]) => (
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
          )}

          {/* MAP VIEW (Outland Only for now) */}
          {groupingMode === 'zone' && viewMode === 'map' && activeContinent === 'outland' && (
            <div className="w-full h-[400px] bg-[#050505] relative overflow-hidden flex items-center justify-center border-b border-[#2f2f35]">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1c22 0%, #000 100%)' }}></div>
              {/* Map Grid Representation */}
              <div className="relative w-[600px] h-[350px]">
                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                  {/* Simple connection paths */}
                  <path d="M300 175 L150 175" stroke="#c29c55" strokeWidth="2" /> {/* Zangar - Hellfire */}
                  <path d="M150 175 L150 80" stroke="#c29c55" strokeWidth="2" /> {/* Zangar - Blades */}
                  <path d="M150 175 L150 260" stroke="#c29c55" strokeWidth="2" /> {/* Zangar - Nagrand */}
                  <path d="M150 260 L300 260" stroke="#c29c55" strokeWidth="2" /> {/* Nagrand - Terokkar */}
                  <path d="M300 175 L300 260" stroke="#c29c55" strokeWidth="2" /> {/* Hellfire - Terokkar */}
                  <path d="M300 260 L450 260" stroke="#c29c55" strokeWidth="2" /> {/* Terokkar - Shadowmoon */}
                  <path d="M300 175 L450 80" stroke="#c29c55" strokeWidth="2" /> {/* Hellfire - Netherstorm */}
                  <path d="M150 80 L450 80" stroke="#c29c55" strokeWidth="1" strokeDasharray="5,5" /> {/* Blades - Nether */}
                </svg>

                <div className="absolute inset-0">
                  {/* Hellfire (Center) */}
                  <button onClick={() => setActiveZone('hellfire')} className={`absolute top-[45%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border-2 transition-all group ${getZoneColor('hellfire')}`}>
                    <Flame className={`w-5 h-5 ${activeZone === 'hellfire' ? 'text-black' : 'text-[#ef4444]'}`} />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap text-[#5c5c63] group-hover:text-white">Hellfire Peninsula</span>
                  </button>

                  {/* Zangarmarsh (West) */}
                  <button onClick={() => setActiveZone('zangar')} className={`absolute top-[45%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border-2 transition-all group ${getZoneColor('zangar')}`}>
                    <Droplet className={`w-5 h-5 ${activeZone === 'zangar' ? 'text-black' : 'text-[#4299e1]'}`} />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap text-[#5c5c63] group-hover:text-white">Zangarmarsh</span>
                  </button>

                  {/* Blades (North West) */}
                  <button onClick={() => setActiveZone('blades')} className={`absolute top-[15%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border-2 transition-all group ${getZoneColor('blades')}`}>
                    <Sword className={`w-5 h-5 ${activeZone === 'blades' ? 'text-black' : 'text-[#8a7b62]'}`} />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap text-[#5c5c63] group-hover:text-white">Blade's Edge</span>
                  </button>

                  {/* Netherstorm (North East) */}
                  <button onClick={() => setActiveZone('nether')} className={`absolute top-[10%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border-2 transition-all group ${getZoneColor('nether')}`}>
                    <Zap className={`w-5 h-5 ${activeZone === 'nether' ? 'text-black' : 'text-[#805ad5]'}`} />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap text-[#5c5c63] group-hover:text-white">Netherstorm</span>
                  </button>

                  {/* Nagrand (South West) */}
                  <button onClick={() => setActiveZone('nagrand')} className={`absolute top-[70%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border-2 transition-all group ${getZoneColor('nagrand')}`}>
                    <Mountain className={`w-5 h-5 ${activeZone === 'nagrand' ? 'text-black' : 'text-[#48bb78]'}`} />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap text-[#5c5c63] group-hover:text-white">Nagrand</span>
                  </button>

                  {/* Terokkar (South Center) */}
                  <button onClick={() => setActiveZone('terokkar')} className={`absolute top-[75%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border-2 transition-all group ${getZoneColor('terokkar')}`}>
                    <Scroll className={`w-5 h-5 ${activeZone === 'terokkar' ? 'text-black' : 'text-[#f6e05e]'}`} />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap text-[#5c5c63] group-hover:text-white">Terokkar Forest</span>
                  </button>

                  {/* Shadowmoon (South East) */}
                  <button onClick={() => setActiveZone('shadow')} className={`absolute top-[75%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border-2 transition-all group ${getZoneColor('shadow')}`}>
                    <Skull className={`w-5 h-5 ${activeZone === 'shadow' ? 'text-black' : 'text-[#e53e3e]'}`} />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap text-[#5c5c63] group-hover:text-white">Shadowmoon Valley</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Fallback for other continents (always list view) */}
          {viewMode === 'map' && activeContinent !== 'outland' && (
            <div className="p-8 text-center bg-[#0b0d10]">
              <p className="text-[#5c5c63] uppercase tracking-widest text-xs">Tactical Map Unavailable for this Sector</p>
              <button onClick={() => setViewMode('list')} className="text-[#c29c55] text-xs mt-2 hover:underline">Return to List View</button>
            </div>
          )}

          {/* --- FILTER BAR --- */}
          <div className="container mx-auto px-4 mb-4 mt-4 flex justify-between items-center bg-[#0b0d10] border border-[#2f2f35] p-2 rounded-lg">
            <div className="flex gap-2">
              {['All', 'Dungeons', 'Raids', 'Events'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded text-xs font-hero uppercase tracking-wider transition-colors border ${filter === f
                    ? 'bg-[#c29c55] text-black border-[#c29c55]'
                    : 'bg-transparent text-[#5c5c63] border-[#2f2f35] hover:border-[#c29c55] hover:text-[#e0e0e0]'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* HEATMAP TOGGLE */}
              <div className="flex gap-2 items-center border-r border-[#2f2f35] pr-4 mr-4 hidden md:flex">
                <span className="text-[10px] uppercase text-[#5c5c63] font-bold tracking-wider">Heatmap:</span>
                <button onClick={() => setHeatmapMode('none')} className={`px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded border ${heatmapMode === 'none' ? 'bg-[#c29c55] text-black border-[#c29c55]' : 'border-[#2f2f35] text-[#5c5c63] hover:text-[#e0e0e0]'}`}>Off</button>
                <button onClick={() => setHeatmapMode('activity')} className={`px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded border ${heatmapMode === 'activity' ? 'bg-[#00ccff] text-black border-[#00ccff]' : 'border-[#2f2f35] text-[#5c5c63] hover:text-[#e0e0e0]'}`}>Activity</button>
                <button onClick={() => setHeatmapMode('threat')} className={`px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded border ${heatmapMode === 'threat' ? 'bg-[#e53e3e] text-black border-[#e53e3e]' : 'border-[#2f2f35] text-[#5c5c63] hover:text-[#e0e0e0]'}`}>Threat</button>
              </div>

              {/* HEROIC+ TOGGLE */}
              <button
                onClick={() => setShowHeroicPlus(!showHeroicPlus)}
                className={`flex items-center gap-2 px-4 py-2 rounded border transition-all ${showHeroicPlus ? 'bg-[#c29c55]/10 border-[#c29c55] text-[#c29c55]' : 'bg-transparent border-[#2f2f35] text-[#5c5c63] hover:text-[#e0e0e0]'}`}
              >
                <div className={`w-3 h-3 rounded-sm border flex items-center justify-center ${showHeroicPlus ? 'border-[#c29c55] bg-[#c29c55]' : 'border-[#5c5c63]'}`}>
                  {showHeroicPlus && <CheckSquare className="w-2 h-2 text-black" />}
                </div>
                <span className="text-xs font-hero uppercase tracking-wider hidden md:inline">Heroic+</span>
              </button>
            </div>
          </div>

          {/* TIER SLIDER (Visible in Tier Mode OR if viewing content in Zone Mode) */}
          <div className={`container mx-auto px-4 mb-4 flex justify-center transition-all duration-500 ${activeContinent !== 'tuning' && (groupingMode === 'tier' || filter !== 'All') ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
            {/* Forced visibility for now as per user request to have it available */}
            <div className="w-full bg-[#0f0f0f] border border-[#2f2f35] rounded-full p-1 shadow-lg relative max-w-5xl">
              <div className="grid grid-cols-10 relative z-10">
                {['All', 'Dungeons', 'Mega Dungeons', 'Events', 4, 4.5, 5, 5.5, 6, 6.5].map((tier, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTier(tier)}
                    className={`
                      relative py-2 text-[9px] md:text-[10px] font-hero uppercase tracking-widest rounded-full transition-all duration-300 w-full text-center
                      ${selectedTier === tier
                        ? 'text-black font-bold'
                        : 'text-[#5c5c63] hover:text-[#c29c55]'
                      }
                    `}
                  >
                    {typeof tier === 'string' ? (tier === 'Mega Dungeons' ? 'Mega' : tier) : `T${tier}`}
                  </button>
                ))}
              </div>
              {/* Sliding Background Pill */}
              <div
                className="absolute top-1 bottom-1 bg-[#c29c55] rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(194,156,85,0.4)] pointer-events-none"
                style={{
                  left: (() => {
                    const tiers = ['All', 'Dungeons', 'Mega Dungeons', 'Events', 4, 4.5, 5, 5.5, 6, 6.5];
                    const index = tiers.indexOf(selectedTier);
                    return `calc(${index * 10}% + 4px)`;
                  })(),
                  width: `calc(10% - 8px)`
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="container mx-auto px-4 pb-24 min-h-screen">
          {selectedEntry && <AtlasDetailModal item={selectedEntry} onClose={() => setSelectedEntry(null)} setPage={setPage} />}

          {/* --- ZONE INTEL SECTION (NEW) - HIDDEN IN TIER MODE --- */}
          {groupingMode === 'zone' && zoneIntel[activeZone] && (
            <div className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-4 animate-fade-in">

              {/* 1. REGIONAL CONTROL (Threat & Faction) - 4 Cols */}
              <div className="md:col-span-4 bg-[#121212] border border-white/10 rounded-lg p-6 relative overflow-hidden flex flex-col">
                <div className={`absolute top-0 right-0 p-24 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-20 ${zoneIntel[activeZone].threat === 'Critical' ? 'bg-red-600' : zoneIntel[activeZone].threat === 'High' ? 'bg-orange-600' : 'bg-green-600'}`}></div>

                <h3 className="font-hero text-lg text-[#e0e0e0] mb-6 flex items-center gap-2 relative z-10">
                  <Shield className="w-4 h-4 text-[#c29c55]" /> Regional Control
                </h3>

                {/* Threat Meter */}
                <div className="mb-6 relative z-10">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-[#5c5c63] mb-2">
                    <span>Threat Level</span>
                    <span className={`${zoneIntel[activeZone].threat === 'Critical' ? 'text-red-500 animate-pulse' : zoneIntel[activeZone].threat === 'High' ? 'text-orange-500' : 'text-green-500'}`}>{zoneIntel[activeZone].threat}</span>
                  </div>
                  <div className="h-2 bg-[#1a1c22] rounded-full overflow-hidden flex">
                    <div className={`h-full bg-green-500/30 w-1/3 border-r border-[#0b0d10] ${zoneIntel[activeZone].threat === 'Low' ? 'bg-green-500' : ''}`}></div>
                    <div className={`h-full bg-orange-500/30 w-1/3 border-r border-[#0b0d10] ${zoneIntel[activeZone].threat === 'High' ? 'bg-orange-500' : ''}`}></div>
                    <div className={`h-full bg-red-500/30 w-1/3 ${zoneIntel[activeZone].threat === 'Critical' || zoneIntel[activeZone].threat === 'Extreme' ? 'bg-red-500' : ''}`}></div>
                  </div>
                </div>

                {/* Faction Balance */}
                {zoneIntel[activeZone].faction && (
                  <div className="mb-6 relative z-10">
                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-[#5c5c63] mb-2">
                      <span>Faction Presence</span>
                    </div>
                    <div className="h-4 bg-[#1a1c22] rounded flex overflow-hidden border border-[#2f2f35]">
                      <div style={{ width: `${zoneIntel[activeZone].faction.alliance}%` }} className="h-full bg-blue-600/60 hover:bg-blue-600 transition-colors flex items-center justify-center text-[8px] text-white">A</div>
                      <div style={{ width: `${zoneIntel[activeZone].faction.horde}%` }} className="h-full bg-red-600/60 hover:bg-red-600 transition-colors flex items-center justify-center text-[8px] text-white">H</div>
                      <div style={{ width: `${zoneIntel[activeZone].faction.enemy}%` }} className="h-full bg-purple-600/60 hover:bg-purple-600 transition-colors flex items-center justify-center text-[8px] text-white">X</div>
                    </div>
                    <div className="flex justify-between text-[9px] text-[#5c5c63] mt-1 px-1">
                      <span>Alliance {zoneIntel[activeZone].faction.alliance}%</span>
                      <span>Horde {zoneIntel[activeZone].faction.horde}%</span>
                    </div>
                  </div>
                )}

                {/* Micro Dungeons List */}
                {zoneIntel[activeZone].microDungeons && (
                  <div className="flex-1 relative z-10 mt-auto pt-4 border-t border-white/10">
                    <h4 className="text-[#c29c55] text-xs font-hero uppercase tracking-widest mb-3">Points of Interest</h4>
                    <div className="space-y-2">
                      {zoneIntel[activeZone].microDungeons.map((md, i) => (
                        <div key={i} className="flex justify-between items-start group">
                          <div>
                            <div className="text-[#e0e0e0] text-xs font-bold group-hover:text-[#c29c55] transition-colors">{md.name}</div>
                            <div className="text-[10px] text-[#5c5c63]">{md.desc}</div>
                          </div>
                          <div className="text-[9px] bg-[#1a1c22] border border-[#2f2f35] px-1.5 py-0.5 rounded text-[#aeb6bf] whitespace-nowrap">{md.type}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 2. STATS & HUBS - 4 Cols */}
              <div className="md:col-span-4 bg-[#121212] border border-white/10 rounded-lg p-6 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-16 bg-blue-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <h3 className="font-hero text-lg text-blue-400 mb-6 flex items-center gap-2">
                  <Anchor className="w-4 h-4" /> Logistics & Hubs
                </h3>

                <div className="space-y-4 mb-6">
                  {zoneIntel?.[activeZone]?.hubs?.map((hub, idx) => (
                    <div key={idx} className="bg-black/40 p-3 rounded border border-white/5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-200 font-bold text-sm">{hub.name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded uppercase tracking-wider ${hub.faction === 'Alliance' ? 'bg-blue-900/30 text-blue-200 border border-blue-900/50' :
                          hub.faction === 'Horde' ? 'bg-red-900/30 text-red-200 border border-red-900/50' :
                            'bg-yellow-900/30 text-yellow-200 border border-yellow-900/50'
                          }`}>{hub.faction}</span>
                      </div>
                      <p className="text-gray-400 text-xs italic">{hub.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Director's Commentary Audio (Mock) */}
                <div className="mt-auto bg-[#1a1c22] border border-[#2f2f35] rounded p-3 flex items-center gap-3 group cursor-pointer hover:border-[#c29c55] transition-all" onClick={() => setAudioPlaying(!audioPlaying)}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${audioPlaying ? 'bg-[#c29c55] text-black animate-pulse' : 'bg-[#0b0d10] text-[#c29c55]'}`}>
                    {audioPlaying ? <Volume2 className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-[#e0e0e0] text-xs font-bold uppercase tracking-wide">Director's Commentary</div>
                    <div className="text-[10px] text-[#5c5c63]">Listen to the design vision ({audioPlaying ? '0:12 / 2:45' : '2:45'})</div>
                  </div>
                  {audioPlaying && (
                    <div className="ml-auto flex gap-1">
                      <div className="w-1 h-3 bg-[#c29c55] animate-[bounce_1s_infinite]"></div>
                      <div className="w-1 h-3 bg-[#c29c55] animate-[bounce_1.2s_infinite]"></div>
                      <div className="w-1 h-3 bg-[#c29c55] animate-[bounce_0.8s_infinite]"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. CAMPAIGN & OPS - 4 Cols */}
              <div className="md:col-span-4 bg-[#121212] border border-white/10 rounded-lg p-6 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-16 bg-c29c55/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

                {/* Active Operations List */}
                <div className="mb-6 border-b border-white/5 pb-6">
                  <h4 className="text-[#c29c55] font-bold mb-3 text-xs uppercase tracking-wider flex justify-between items-center">
                    <span>Active Operations</span>
                    <span className="text-[9px] text-[#5c5c63] font-normal">Click to View</span>
                  </h4>
                  {(() => {
                    const zoneContent = contentData?.[activeZone] || [];
                    const operations = zoneContent.filter(c => c.type.includes('Dungeon') || c.type.includes('Raid') || c.type.includes('Mega'));

                    if (operations.length === 0) return <p className="text-gray-500 text-xs italic">No active operations in this sector.</p>;

                    return (
                      <div className="space-y-2">
                        {operations.map((op, i) => (
                          <div key={i} className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-1 rounded transition-colors" onClick={() => setSelectedEntry(op)}>
                            <div className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${op.type.includes('Raid') ? 'bg-[#a335ee] shadow-[0_0_5px_#a335ee]' : 'bg-[#00ccff] shadow-[0_0_5px_#00ccff]'}`}></div>
                              <span className="text-[#e0e0e0] text-xs font-bold group-hover:text-[#c29c55] transition-colors">{op.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {op.type.includes('Raid') && <span className="text-[9px] text-[#5c5c63] uppercase hidden xl:inline">Attunement Pending</span>}
                              <span className={`text-[10px] uppercase tracking-wider font-mono ${op.type.includes('Raid') ? 'text-[#a335ee]' : 'text-[#00ccff]'}`}>{op.level ? `Lvl ${op.level}` : 'Max'}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>

                <h3 className="font-hero text-lg text-green-400 mb-4 flex items-center gap-2">
                  <Compass className="w-4 h-4" /> Travel & Story
                </h3>

                <div className="mb-6">
                  <h4 className="text-gray-200 font-bold mb-1 text-xs">{zoneIntel?.[activeZone]?.travel?.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{zoneIntel?.[activeZone]?.travel?.desc}</p>
                </div>

                {zoneIntel?.[activeZone]?.story && (
                  <div className="mb-6">
                    <h4 className="text-[#c29c55] font-bold mb-1 text-xs uppercase tracking-wider">Campaign Spotlight</h4>
                    <strong className="text-gray-200 text-xs block mb-1">{zoneIntel[activeZone].story.title}</strong>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-4">{zoneIntel[activeZone].story.desc}</p>
                  </div>
                )}

                {/* Dynamic Event Timer (Mock) */}
                {zoneIntel[activeZone].threat === 'Critical' && (
                  <div className="mt-auto bg-red-900/20 border border-red-500/30 rounded p-3 flex items-center justify-between animate-pulse">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <div>
                        <div className="text-red-200 text-[10px] font-bold uppercase">Legion Assault Imminent</div>
                        <div className="text-red-400 text-[9px]">Sector 4 is vulnerable</div>
                      </div>
                    </div>
                    <div className="font-mono text-red-500 font-bold text-sm">14:20</div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {(() => {
              const displayItems = sortContent(contentData?.[activeZone]);
              if (displayItems.length > 0) {
                return displayItems.map((item, i) => (
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
                        <div className="flex flex-col gap-1 mt-2">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-[#aeb6bf] bg-black/60 px-3 py-1 rounded backdrop-blur-md border border-[#ffffff]/10 self-start">
                            {item.type}
                          </span>
                          {(item.level || item.zone) && (
                            <span className="text-[9px] font-bold uppercase tracking-widest text-[#c29c55] bg-black/60 px-3 py-1 rounded backdrop-blur-md border border-[#c29c55]/20 self-start">
                              {item.level && `Lvl ${item.level}`} {item.level && item.zone && '•'} {item.zone}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8">
                      <p className="text-[#aeb6bf] text-xs leading-relaxed line-clamp-3 mb-6 border-b border-[#2f2f35] pb-6 font-sans">
                        {formatText(getFilteredLore(item.lore))}
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
                        <button className="text-[#c29c55] text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                          Briefing <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                ));
              } else {
                return (
                  <div className="col-span-full text-center py-32 opacity-50">
                    <AlertTriangle className="w-16 h-16 text-[#2f2f35] mx-auto mb-6" />
                    <p className="text-[#5c5c63] font-hero uppercase tracking-widest text-lg">No content found matching filter.</p>
                  </div>
                );
              }
            })()}
          </div>
        </div>
      </>

    </div >
  );
};

export default TheAtlas;