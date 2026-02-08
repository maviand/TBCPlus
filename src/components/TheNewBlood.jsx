import React, { useState, useEffect, useRef } from 'react';
import {
  Ghost, Hammer, BookOpen, ArrowLeft, Star, Hexagon,
  Coins, Crown, Anchor, Eye, Map, Feather, Hand,
  Scroll, Compass, Axe, GraduationCap, Flag,
  Sword, Activity, Zap, Skull, Crosshair, Layout,
  Shield, PlayCircle, Users, Clock, Music, Image, RefreshCw
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

// --- ICONS MAPPING ---
const raceHeaderIcons = {
  goblins: 'https://wow.zamimg.com/images/wow/icons/large/race_goblin_male.jpg',
  elves: 'https://wow.zamimg.com/images/wow/icons/large/race_bloodelf_male.jpg',
  ogres: 'https://i.imgur.com/DgEuQYV.png',
  saberon: 'https://i.imgur.com/ozJwhB2.png',
  broken: 'https://wow.zamimg.com/images/wow/icons/large/race_draenei_male.jpg',
  wildhammer: 'https://i.imgur.com/M6nFkwe.png',
  humans: 'https://warcraft.wiki.gg/images/thumb/a/a2/Ui-charactercreate-races_human-male.png/64px-Ui-charactercreate-races_human-male.png',
  dwarves: 'https://warcraft.wiki.gg/images/thumb/e/e0/Ui-charactercreate-races_dwarf-male.png/64px-Ui-charactercreate-races_dwarf-male.png',
  nightelves: 'https://warcraft.wiki.gg/images/thumb/0/00/Ui-charactercreate-races_nightelf-male.png/64px-Ui-charactercreate-races_nightelf-male.png',
  gnomes: 'https://warcraft.wiki.gg/images/thumb/2/22/Ui-charactercreate-races_gnome-male.png/64px-Ui-charactercreate-races_gnome-male.png',
  orcs: 'https://warcraft.wiki.gg/images/thumb/5/53/Ui-charactercreate-races_orc-male.png/64px-Ui-charactercreate-races_orc-male.png',
  trolls: 'https://warcraft.wiki.gg/images/thumb/c/c5/Ui-charactercreate-races_troll-male.png/64px-Ui-charactercreate-races_troll-male.png',
  tauren: 'https://warcraft.wiki.gg/images/thumb/2/23/Ui-charactercreate-races_tauren-male.png/64px-Ui-charactercreate-races_tauren-male.png',
  undead: 'https://wow.zamimg.com/images/wow/icons/large/race_scourge_male.jpg',
  shendralar: 'https://i.imgur.com/0RBED7u.jpeg', // Shen'dralar Portrait
  foresttrolls: 'https://i.imgur.com/zHWIIJO.jpeg', // Revantusk Portrait
  felblood: 'https://i.imgur.com/Fu5v5W9.jpeg', // Illidari Portrait
  arakkoa: 'https://i.imgur.com/I6ntSlE.jpeg' // Arakkoa Portrait
};

// --- Sub-Components ---
// Helper function to convert markdown bold (**) and newlines (\n) to JSX elements
const formatText = (text) => {
  if (!text) return null;
  const lines = text.split('\n');
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

const NotableHeroes = ({ heroes, accentColor }) => (
  <div className="bg-[#111] border border-white/10 p-6 rounded-lg">
    <h3 className={`font-hero text-sm uppercase tracking-widest ${accentColor} mb-4 flex items-center gap-2`}>
      <Crown className="w-4 h-4" /> Notable Heroes
    </h3>
    <div className="flex flex-wrap gap-2">
      {heroes.map((hero, idx) => (
        <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300 hover:bg-white/10 transition-colors cursor-default">
          {hero}
        </span>
      ))}
    </div>
  </div>
);

const MountPreview = ({ mount, accentColor }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div
        className="bg-[#111] border border-white/10 rounded-lg overflow-hidden group cursor-pointer"
        onClick={() => setIsZoomed(true)}
      >
        <div className="h-32 overflow-hidden relative">
          <img src={mount.image} alt={mount.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
          <div className={`absolute bottom-2 left-3 font-hero text-xs ${accentColor.replace('text-', 'bg-')}/20 px-2 py-1 rounded border border-white/20`}>
            Racial Mount
          </div>
        </div>
        <div className="p-4 flex items-center gap-3">
          <img src={mount.icon} alt="" className="w-8 h-8 rounded border border-white/20" />
          <div>
            <h4 className="text-gray-200 text-sm font-bold">{mount.name}</h4>
            <p className="text-xs text-gray-500">Unique model & animation (Click to Zoom)</p>
          </div>
        </div>
      </div>

      {/* Mount Modal */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur flex items-center justify-center p-8" onClick={(e) => {
          e.stopPropagation();
          setIsZoomed(false);
        }}>
          <div className="relative max-w-4xl w-full">
            <button className="absolute -top-12 right-0 text-white hover:text-red-500">Close [X]</button>
            <img src={mount.image} alt={mount.name} className="w-full rounded-lg shadow-2xl border border-white/10" />
            <div className="mt-4 text-center">
              <h3 className={`font-hero text-2xl ${accentColor}`}>{mount.name}</h3>
              <p className="text-gray-400 uppercase tracking-widest text-xs mt-1">Racial Mount</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const DiplomacyGraph = ({ relations, accentColor }) => (
  <div className="bg-[#111] border border-white/10 p-6 rounded-lg">
    <h3 className={`font-hero text-sm uppercase tracking-widest ${accentColor} mb-4 flex items-center gap-2`}>
      <Users className="w-4 h-4" /> Diplomacy
    </h3>
    <div className="space-y-3">
      {Object.entries(relations).map(([faction, status], idx) => (
        <div key={idx} className="flex items-center justify-between text-xs">
          <span className="text-gray-400">{faction}</span>
          <span className={`px-2 py-0.5 rounded border ${status.includes('Hostile') || status.includes('Hated') || status.includes('Enemies') ? 'text-red-400 border-red-900/30 bg-red-900/10' :
            status.includes('Strained') || status.includes('Wary') || status.includes('Rivals') ? 'text-yellow-400 border-yellow-900/30 bg-yellow-900/10' :
              'text-green-400 border-green-900/30 bg-green-900/10'
            }`}>{status}</span>
        </div>
      ))}
    </div>
  </div>
);

const HeritageGallery = ({ armor, accentColor }) => {
  const [zoomedItem, setZoomedItem] = useState(null);

  return (
    <div className="bg-[#111] border border-white/10 p-6 rounded-lg">
      <h3 className={`font-hero text-sm uppercase tracking-widest ${accentColor} mb-4 flex items-center gap-2`}>
        <Shield className="w-4 h-4" /> Heritage Armor
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {armor.map((set, idx) => (
          <div key={idx} className="group cursor-pointer" onClick={() => setZoomedItem(set)}>
            <div className="aspect-square rounded border border-white/10 overflow-hidden mb-2 relative">
              <img src={set.image} alt={set.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${accentColor.replace('text-', 'bg-')}`}></div>
            </div>
            <div className="flex items-center gap-2">
              <img src={set.icon} alt="" className="w-4 h-4 rounded" />
              <span className="text-[10px] text-gray-400 group-hover:text-white transition-colors">{set.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      {zoomedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur flex items-center justify-center p-8" onClick={(e) => {
          e.stopPropagation();
          setZoomedItem(null);
        }}>
          <div className="relative max-w-2xl w-full">
            <button className="absolute -top-12 right-0 text-white hover:text-red-500" onClick={() => setZoomedItem(null)}>Close [X]</button>
            <img src={zoomedItem.image} alt={zoomedItem.name} className="w-full rounded-lg shadow-2xl border border-white/10" />
            <div className="mt-4 text-center">
              <h3 className={`font-hero text-2xl ${accentColor}`}>{zoomedItem.name}</h3>
              <p className="text-gray-400 uppercase tracking-widest text-xs mt-1">Heritage Armor Set</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const LoreTimeline = ({ events, accentColor }) => (
  <div className="relative border-l-2 border-white/10 ml-3 pl-8 space-y-8 py-4">
    {events.map((ev, idx) => (
      <div key={idx} className="relative group">
        <div className={`absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 border-[#111] ${accentColor.replace('text-', 'bg-')} group-hover:scale-125 transition-transform shadow-[0_0_15px_currentColor]`}></div>
        <span className={`font-hero text-sm ${accentColor} block mb-1 opacity-80 group-hover:opacity-100 transition-opacity`}>{ev.year}</span>
        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors p-3 bg-white/5 rounded border border-white/5 group-hover:border-white/20">{ev.event}</p>
      </div>
    ))}
  </div>
);

const LeaderSpotlight = ({ leader, heroImage, accentColor }) => {
  if (!leader) return null;
  return (
    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md p-3 pr-6 rounded-full border border-white/10 mb-6 inline-flex hover:bg-black/60 transition-colors group cursor-default">
      <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${accentColor.replace('text-', 'border-')} shadow-[0_0_10px_currentColor] group-hover:scale-105 transition-transform`}>
        <img src={heroImage} alt={leader} className="w-full h-full object-cover scale-150" />
      </div>
      <div>
        <span className="block text-[10px] text-gray-500 uppercase tracking-widest leading-none mb-1">Race Leader</span>
        <h4 className={`font-hero text-lg text-white leading-none group-hover:text-[#f8b700] transition-colors`}>{leader}</h4>
      </div>
    </div>
  );
};



const VoicePlayer = ({ lines, accentColor }) => {
  const audioRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [playingUrl, setPlayingUrl] = useState(null);

  const playAudio = async (url) => {
    if (!url) return;
    setErrorMsg(null);
    setPlayingUrl(url);

    try {
      if (audioRef.current) {
        console.log("Playing Audio (Base URL:", import.meta.env.BASE_URL, "):", url);
        audioRef.current.src = url;
        audioRef.current.load();
        await audioRef.current.play();
      }
    } catch (e) {
      console.error("Audio playback failed:", e);
      setErrorMsg(`${e.name}: ${e.message}`);
    }
  };

  return (
    <div className="bg-[#111] border border-white/10 p-4 rounded-lg flex flex-col gap-2">
      <h3 className={`font-hero text-xs uppercase tracking-widest ${accentColor} flex items-center gap-2 mb-2`}>
        <Music className="w-3 h-3" /> Voice Lines
      </h3>

      {/* Hidden Audio Element for robustness */}
      <audio
        ref={audioRef}
        style={{ display: 'none' }}
        volume={0.5}
        onError={(e) => {
          console.error("Audio tag error:", e);
          setErrorMsg("Network/Format Error");
        }}
        onEnded={() => setPlayingUrl(null)}
      />

      {errorMsg && (
        <div className="text-red-500 text-xs px-2 py-1 bg-red-900/20 border border-red-500/30 rounded">
          Error: {errorMsg}
        </div>
      )}

      {lines.map((line, idx) => (
        <button
          key={idx}
          onClick={() => playAudio(line.audioUrl)}
          className={`flex items-center gap-3 p-2 rounded transition-colors text-left group w-full ${playingUrl === line.audioUrl ? 'bg-white/10 border border-white/20' : 'hover:bg-white/5 border border-transparent'}`}
        >
          <PlayCircle className={`w-8 h-8 ${accentColor} ${playingUrl === line.audioUrl ? 'opacity-100 animate-pulse' : 'opacity-50 group-hover:opacity-100'} transition-opacity`} />
          <div>
            <span className="text-[10px] text-gray-500 uppercase block tracking-wider">{line.label}</span>
            <span className="text-xs text-gray-300 italic">"{line.text}"</span>
          </div>
        </button>
      ))}
    </div>
  );
};



const InteractiveMap = ({ locations, accentColor, capitalBG }) => {
  const [factionView, setFactionView] = useState('alliance'); // For races with split capitals

  // Resolve Background Image
  let bgImage = 'https://i.imgur.com/7J9k0oD.jpg'; // Default Outland Map
  if (capitalBG) {
    if (typeof capitalBG === 'string') {
      bgImage = capitalBG;
    } else if (typeof capitalBG === 'object') {
      bgImage = capitalBG[factionView] || capitalBG.default || 'https://i.imgur.com/7J9k0oD.jpg';
    }
  }

  return (
    <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden min-h-[400px] transition-all duration-700">
      <img
        src={bgImage}
        alt="Location Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-700 animate-pan-slow"
      />

      {/* Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

      {/* Faction Toggle for Dual-Capital Races (Elves) */}
      {capitalBG && typeof capitalBG === 'object' && (
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <button
            onClick={() => setFactionView('alliance')}
            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border ${factionView === 'alliance' ? 'bg-blue-900/80 border-blue-400 text-blue-100' : 'bg-black/50 border-white/20 text-gray-400 hover:bg-blue-900/30'}`}
          >
            Alliance View
          </button>
          <button
            onClick={() => setFactionView('horde')}
            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border ${factionView === 'horde' ? 'bg-red-900/80 border-red-400 text-red-100' : 'bg-black/50 border-white/20 text-gray-400 hover:bg-red-900/30'}`}
          >
            Horde View
          </button>
        </div>
      )}

      <div className="absolute inset-0 p-8 flex flex-col justify-center gap-8">
        {['start', 'hub', 'outpost'].map((locType, idx) => {
          if (!locations[locType]) return null;
          // Parse the text to get Title and Desc
          const raw = locations[locType];
          const titleMatch = raw.match(/\*\*(.*?)\*\*/);
          const title = titleMatch ? titleMatch[1] : 'Unknown Location';
          const desc = raw.replace(/\*\*.*?\*\*\n?/, '').trim();

          return (
            <div key={idx} className="relative pl-8 group cursor-pointer">
              <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-black ${accentColor.replace('text-', 'bg-')} shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:scale-125 transition-transform`}></div>
              <div className={`absolute left-2 top-6 bottom-[-20px] w-0.5 bg-white/10 ${idx === 2 ? 'hidden' : ''}`}></div>

              <h4 className={`font-hero text-lg ${accentColor} mb-1 group-hover:text-white transition-colors`}>{title}</h4>
              <p className="text-sm text-gray-400 max-w-md line-clamp-2 group-hover:line-clamp-none transition-all drop-shadow-md">{formatText(desc)}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const ClassMatrix = ({ classes, accentColor }) => {
  const roles = {
    'Warrior': ['Tank', 'Melee'],
    'Paladin': ['Tank', 'Healer', 'Melee'],
    'Hunter': ['Ranged', 'Melee'],
    'Rogue': ['Melee'],
    'Priest': ['Healer', 'Ranged'],
    'Shaman': ['Healer', 'Melee', 'Ranged'],
    'Mage': ['Ranged'],
    'Warlock': ['Ranged', 'Tank'],
    'Druid': ['Tank', 'Healer', 'Melee', 'Ranged']
  };

  return (
    <div className="bg-[#111] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
      <div className="grid grid-cols-12 bg-black/40 p-4 font-hero text-[10px] uppercase tracking-widest text-gray-500 border-b border-white/10">
        <div className="col-span-3">Class</div>
        <div className="col-span-7">Available Roles</div>
        <div className="col-span-2 text-center">Compatibility</div>
      </div>
      {classes.map((cls, idx) => (
        <div key={idx} className="grid grid-cols-12 p-4 border-b border-white/5 hover:bg-white/5 transition-colors items-center group">
          <div className="col-span-3 flex items-center gap-3">
            <img src={cls.icon} alt="" className="w-8 h-8 rounded shadow-lg group-hover:scale-110 transition-transform" />
            <span className="font-bold text-gray-200 text-sm group-hover:text-white transition-colors">{cls.class}</span>
          </div>
          <div className="col-span-7 flex flex-wrap gap-2">
            {(roles[cls.class] || ['DPS']).map((role, rIdx) => (
              <span key={rIdx} className={`px-2 py-1 bg-black border border-white/10 rounded text-xs text-gray-400 ${role === 'Healer' ? 'group-hover:text-green-400 group-hover:border-green-900/50' : role === 'Tank' ? 'group-hover:text-blue-400 group-hover:border-blue-900/50' : 'group-hover:text-red-400 group-hover:border-red-900/50'} transition-colors`}>
                {role}
              </span>
            ))}
          </div>
          <div className="col-span-2 flex justify-center">
            <div className={`w-3 h-3 rounded-full ${accentColor.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor] animate-pulse`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ElevatorPitch = ({ points, accentColor }) => (
  <div className="flex flex-wrap justify-center gap-4 mb-10">
    {points.map((point, idx) => (
      <div key={idx} className={`bg-black/50 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-lg hover:border-white/30 hover:bg-white/5 transition-all cursor-default group`}>
        <Star className={`w-4 h-4 ${accentColor} group-hover:scale-125 transition-transform`} />
        <span className="font-hero text-sm text-gray-200 tracking-wider uppercase group-hover:text-white">{point}</span>
      </div>
    ))}
  </div>
);

const FlavorGrid = ({ flavor, accentColor }) => {
  if (!flavor) return null;
  const { language, diet, nemesis, loot, partner, mountSpecial, heritageWeapon } = flavor;

  return (
    <div className="bg-[#111] border border-white/10 p-6 rounded-lg mt-6">
      <h3 className={`font-hero text-sm uppercase tracking-widest ${accentColor} mb-6 flex items-center gap-2`}>
        <Star className="w-4 h-4" /> Racial Flavor
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
        <div>
          <span className="block text-xs uppercase text-gray-500 mb-1">Native Language</span>
          <span className="text-gray-200">{language}</span>
        </div>
        <div>
          <span className="block text-xs uppercase text-gray-500 mb-1">Preferred Diet</span>
          <span className="text-gray-200">{diet}</span>
        </div>
        <div>
          <span className="block text-xs uppercase text-gray-500 mb-1">Sworn Nemesis</span>
          <span className="text-red-400">{nemesis}</span>
        </div>
        <div>
          <span className="block text-xs uppercase text-gray-500 mb-1">Best Partner</span>
          <span className="text-gray-200">{partner}</span>
        </div>
        <div>
          <span className="block text-xs uppercase text-gray-500 mb-1">Mount Special</span>
          <span className="text-gray-200">{mountSpecial}</span>
        </div>
        <div>
          <span className="block text-xs uppercase text-gray-500 mb-1">Heritage Wep.</span>
          <span className="text-gray-200">{heritageWeapon}</span>
        </div>
        <div className="col-span-2 md:col-span-3 border-t border-white/5 pt-4">
          <span className="block text-xs uppercase text-gray-500 mb-2">Iconic Loot Wishlist</span>
          <div className="flex flex-wrap gap-2">
            {loot.map((item, idx) => (
              <span key={idx} className="px-2 py-1 bg-[#222] rounded border border-[#333] text-purple-400 text-xs">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const UltimatePreview = ({ ultimate, accentColor }) => (
  <div className="bg-[#111] border border-white/10 rounded-lg overflow-hidden relative group h-64 md:h-80 cursor-pointer">
    {ultimate.videoUrl ? (
      <video
        src={ultimate.videoUrl}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
        autoPlay
        loop
        muted
        playsInline
      />
    ) : ultimate.imageUrl ? (
      <img src={ultimate.imageUrl} alt={ultimate.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform" />
    ) : (
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
    )}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {!ultimate.imageUrl && !ultimate.videoUrl && (
        <div className={`w-16 h-16 rounded-full border-2 ${accentColor.replace('text-', 'border-')} flex items-center justify-center bg-black/50 group-hover:scale-110 transition-transform`}>
          <PlayCircle className={`w-8 h-8 ${accentColor}`} />
        </div>
      )}
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
      <div className="flex items-center gap-2 mb-2">
        {ultimate.icon ? (
          <img src={ultimate.icon} alt="" className="w-8 h-8 rounded border border-white/20" />
        ) : (
          <Star className={`w-4 h-4 ${accentColor}`} />
        )}
        <h4 className="font-hero text-white text-xl md:text-2xl drop-shadow-md">{ultimate.name}</h4>
      </div>
      <p className="text-sm text-gray-200 max-w-2xl drop-shadow">{ultimate.desc}</p>
    </div>
  </div>
);

const TheNewBlood = ({ setPage, initialRace, setInitialRace }) => {
  const [activeRace, setActiveRace] = useState(initialRace || 'goblins');
  const [activeTab, setActiveTab] = useState('overview');
  const [isVariantActive, setIsVariantActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sync with prop if it changes
  useEffect(() => {
    if (initialRace) {
      setActiveRace(initialRace);
      setIsVariantActive(false); // Reset variant on race change
    }
    console.log("TheNewBlood activeRace:", activeRace, "Initial:", initialRace);
  }, [initialRace, activeRace]);

  // Update parent state when local state changes
  const handleRaceSelect = (race) => {
    setActiveRace(race);
    setIsVariantActive(false); // Reset variant
    if (setInitialRace) {
      setInitialRace(race);
    }
  }

  // Trigger animation when race changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeRace]);

  // Trigger animation when race changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeRace]);

  const raceGroups = {
    neutral: {
      title: 'Neutral Start',
      color: 'text-[#f8b700]', // Blizzard Gold
      borderColor: 'border-[#f8b700]/30',
      races: ['elves', 'goblins']
    },
    horde: {
      title: 'New Horde',
      color: 'text-[#8C1616]', // Horde Red
      borderColor: 'border-[#8C1616]/30',
      races: ['ogres', 'saberon', 'felblood']
    },
    alliance: {
      title: 'New Alliance',
      color: 'text-[#00558F]', // Alliance Blue
      borderColor: 'border-[#00558F]/30',
      races: ['wildhammer', 'broken', 'arakkoa']
    },
    classicAlle: {
      title: 'Classic Alliance',
      color: 'text-[#1c64f2]',
      borderColor: 'border-[#1c64f2]/30',
      races: ['humans', 'dwarves', 'nightelves', 'gnomes', 'shendralar']
    },
    classicHorde: {
      title: 'Classic Horde',
      color: 'text-[#e02424]',
      borderColor: 'border-[#e02424]/30',
      races: ['orcs', 'trolls', 'tauren', 'undead', 'foresttrolls'] // Undead is technically "Forsaken" but fits here
    }
  };

  const races = {
    goblins: {
      id: 'goblins',
      name: 'Goblins',
      tagline: 'Profit is the New Prophet',

      faction: 'Neutral / Contractual Alignment',
      leader: 'Trade Prince Gallywix',
      heroImage: 'https://imgur.com/nCr9SJ1.jpeg',
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_goblin_male.jpg`} alt="Goblins" className="w-6 h-6 object-contain" />,
      themeColor: '#00FF00', // Fel/Money Green
      accentColor: 'text-green-400',
      capitalBG: 'https://i.imgur.com/tT0xtNd.jpeg',

      notableHeroes: ['Trade Prince Gallywix', 'Gazlowe', 'Boss Mida', 'Hobart Grapplehammer'],
      mount: {
        name: 'Turbo-Charged Trike',
        icon: 'https://i.imgur.com/94zPoff.png',
        image: 'https://i.imgur.com/1y4dfbg.jpeg'
      },
      heritageArmor: [
        { name: 'Heritage of the Bilgewater', icon: 'https://i.imgur.com/wSo41VG.png', image: 'https://i.imgur.com/wSo41VG.png' }
      ],
      diplomacy: {
        'Alliance': 'Contractual (High Fees)',
        'Horde': 'Lucrative Partners',
        'Ethereals': 'Hostile Competitors'
      },
      timeline: [
        { year: '-2000', event: 'Kezan Mount Kajaro erupts, mutating the goblin race with Kaja\'mite.' },
        { year: '-500', event: 'Steamwheedle Cartel establishes trade supremacy.' },
        { year: '26', event: 'Gallywix signs the "Undermine Protocol" to exploit Outland resources.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'Time is money, friend!' },
        { label: 'Annoyed', text: 'I got the best deals... anywhere.' },
        { label: 'Combat', text: 'Can I insure this fight?' }
      ],
      ultimate: {
        name: 'Orbital Bombardment',
        desc: 'Call in a precise laser strike from the trade fleet in orbit.',
        videoUrl: 'https://i.imgur.com/9D4ARmE.mp4',
        icon: 'https://i.imgur.com/F4GZ9u9.png'
      },
      elevatorPitch: ['Profit-Driven Mobility', 'Bank Access Anywhere', 'Best Vendor Prices'],
      flavor: {
        language: 'Goblin (Fast-Talk)',
        diet: 'Kaja\'Cola & Takeout',
        nemesis: 'Nexus-Prince Shaffar',
        loot: ['Goblin Rocket Helmet', 'Dimensional Ripper', 'Big Iron Bomb'],
        partner: 'Orcs (They pay well)',
        mountSpecial: 'Nitrous Injectors',
        heritageWeapon: 'High-Explosive Wrench'
      },

      overview: {
        fantasy: 'The **Opportunistic Capitalist**. The Goblins of the Steamwheedle Cartel care for profit, not politics. You start as a **Neutral Agent**, a freelancer looking for the biggest payout. At Level 10, you must sign a **Binding Contract**:\n\n*   **The Alliance:** Wealth through trade and stability.\n*   **The Horde:** Wealth through conquest and industry.\n*   **Remain Neutral:** The "Lone Shark" path. You become **Hostile** to both factions, able to kill (and loot) anyone, but banned from all faction cities. You rely strictly on neutral hubs like Gadgetzan and Area 52.\n\n**The Undermine Protocol:** Trade Prince Gallywix has authorized "aggressive expansion" into the Twisting Nether. The Ethereals of the Consortium are your direct competitors—stuffy, energy-based elitists who hoard technology. You intend to drive them into bankruptcy, preferably with high-explosives.',
        systemName: 'Corporate Warfare',
        systemDesc: 'At Level 20, you unlock the **"Ledger of Conflict,"** a UI that replaces your reputation pane. Instead of gaining favor, you gain **"Credit Rating."** \n\n**Mercenary Contracts:** You can accept "Contracts" from Horde leadership. Sabotage a blood elf mana-forge? Pays in gold. Defend a Mag\'har caravan? Pays in rare gems. \n\n**The Black Market:** Access to a unique Auction House in Area 52 that ignores faction restrictions but charges a brutal 20% "Cartel Tax" on all transactions. \n\n**Hostile Takeover (PvP):** A dynamic world-PvP mechanic where Goblin guilds can "buy out" (capture) resource nodes in Nagrand (Mines, Gas Clouds). Holding a node generates passive gold for the guild.'
      },

      classFantasies: [
        {
          class: 'Warrior',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad',
          title: 'Bruiser-for-Hire',
          desc: 'Less "martial arts," more "dirty fighting." You are the heavy muscle for debt collection. Your "Charge" is rocket-assisted. Your "Shield Bash" uses a reinforced vault door. Your "Execute" is a point-blank shotgun blast (visual only). You wear plate armor not for honor, but because insurance premiums are lower if you wear safety gear.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Corporate Fixer',
          desc: 'Specializes in "Hostile Takeovers" and industrial espionage. Your poisons are re-purposed industrial waste and toxic sludge. Pickpocket yields 10% more gold (embezzlement). Your Stealth is less about magic and more about a high-tech cloaking field that sometimes sparks and sputters.'
        },
        {
          class: 'Hunter',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d',
          title: 'Big Game Poacher',
          desc: 'Pets are investments, not friends. You don\'t "tame" beasts; you "break" them with shock collars. Uses a pneumatic "Net-Gun" instead of traps. Exotic munitions leave glowing radioactive residue. You treat rare spawns as "high-value assets" to be captured and sold.'
        },
        {
          class: 'Mage',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1',
          title: 'Pyrotechnician',
          desc: 'Magic via technology. You don\'t chant; you calibrate. Fireballs are launched from wrist-mounted mortars. Blink leaves a puff of black exhaust smoke and an oil slick. Frost Nova is a coolant leak from your backpack reactor. You are walking OSHA violation.'
        },
        {
          class: 'Warlock',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06',
          title: 'Void-Contractor',
          desc: 'Demons aren\'t summoned; they are "sub-contracted" via binding clauses written in infernal legalese. Soulstones are literal soul-batteries you screw into a socket. Very unstable visuals—your minions sometimes complain about their pay or demand hazard pay in Demonic.'
        },
        {
          class: 'Priest',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800',
          title: 'Field Medic',
          desc: 'Healing is a fee-for-service business. You are an insurance adjustor with a med-kit. "Holy Nova" sprays a revitalizing green chemical mist. "Resurrection" involves a jumper-cable shock to the chest. Your buffs are "Performance Enhancers" (experimental drugs).'
        }
      ],

      racials: [
        { name: 'Time is Money', icon: 'https://i.imgur.com/XCxb9Dk.png', desc: '1% increase to casting and attack speed. Efficiency is key to quarterly earnings.' },
        { name: 'Rocket Jump', icon: 'https://i.imgur.com/oirwfRJ.png', desc: 'Activates a rocket belt to launch forward. Essential for tactical retreats or beating a coworker to a node. (2m CD)' },
        { name: 'Rocket Barrage', icon: 'https://i.imgur.com/x01slg2.png', desc: 'Launches a volley of rockets from your belt at an enemy. (2m CD)' },
        { name: 'Pack Hobgoblin', icon: 'https://i.imgur.com/ax2jJOs.png', desc: 'Calls a servant for instant bank access anywhere. He looks tired. (30m CD)' },
        { name: 'Better Living Through Chemistry', icon: 'https://i.imgur.com/UvpnZ6Q.png', desc: '+15 Alchemy skill. Explosions are just chemistry in a hurry.' },
        { name: 'Best Deals Anywhere', icon: 'https://i.imgur.com/Djo7qTa.png', desc: 'Always receive the best possible vendor discount, regardless of reputation.' }
      ],

      locations: {
        start: '**Starting Zone: "The Profit-Margin"**\nA massive, instanced Goblin transport barge adrift in the Twisting Nether. The ship has suffered a catastrophic "liquidity crisis" (reactor explosion). The starting quests involve fixing the Kaja\'Cola-fueled engine, fighting off void creatures leaking into the hull, and "negotiating" (i.e., looting) escape pod parts from rival contractors who didn\'t read the fine print.',
        hub: '**Capital Hub: "Gadgetzan Exports" (Nagrand)**\nA rapidly expanding strip-mine operation that evolves visually as the realm completes daily quests. It starts as a few tents and grows into a neon-lit, smog-choked city that rivals Shattrath. It features the "Black Market Auction House", the "Corporate Lounge" inn (VIP only), and a statue of Trade Prince Gallywix made of solid gold.',
        outpost: '**Outpost: "Area 52 Annex" (Netherstorm)**\nA hostile takeover of the eastern side of Area 52. Questlines here involve corporate espionage against the Ethereals, stealing their eco-dome tech to patent it, and sabotaging Mana-Forges to drive up the price of mana crystals.',
        dungeons: '**Dungeon Ties:**\n**The Mana-Tombs:** The Cartel hires you to "liquidate" the Ethereal competition and steal their trade secrets.\n**The Mechanar:** A salvage operation. You are sent to strip the Tempest Keep structures for raw parts and sell them back to the Sha\'tar at a markup.'
      },

      campaign: {
        title: "The Liquidated Assets Initiative",
        commander: "Trade Prince Gallywix",
        theme: "Aggressive Hostile Takeover",
        objective: "The Legion isn't just an enemy; they are a competitor. They hold a monopoly on Fel energy, and it's time to bust the trust.",
        moments: [
          "**The Buyout:** Bribe a Pit Lord to switch sides during the siege of a Manaforge.",
          "**Asset Seizure:** Pilot a modified Shredder to rip Fel-Cannons off Hellfire Citadel for scrap.",
          "**The IPO:** Secure the 'deeds' to Netherstorm, turning the zone into a trade district."
        ],
        result: "**Unlock: The Nether-Transponder.**\nCompleting the campaign re-activates the Ethereal technology, phasing Area 52 from a warzone into a bustling **Neutral Metropolis**. This anchors the **Economy** of Outland, enabling cross-realm trade and the stable import of Azerothian supplies.",
        foothold: {
          name: "Quest: The Hostile Frequency",
          desc: "Hellfire is cut off by a Legion jamming signal. Your solution? Overpower it. You rig the Dark Portal's frame to broadcast a Kaja'Cola advertisement at 500% volume, overloading the Legion's pylons and crashing their comms network."
        }
      }
    },

    elves: {
      id: 'elves',
      name: 'High & Blood Elves',
      tagline: 'The Divided Soul',
      faction: 'Choice at L20',
      leader: 'Alleria Windrunner (A) / Lor\'themar Theron (H)',
      heroImage: 'https://imgur.com/cuuCVtS.jpeg',
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_bloodelf_male.jpg`} alt="Elves" className="w-6 h-6 object-contain" />,
      themeColor: '#FFD700', // Gold/Sunwell
      accentColor: 'text-amber-300',
      capitalBG: {
        alliance: 'https://i.imgur.com/MFUuo5h.jpeg',
        horde: 'https://i.imgur.com/MWJqlZe.jpeg'
      },

      notableHeroes: ['Alleria Windrunner', 'Lor\'themar Theron', 'Halduron Brightwing', 'Grand Magister Rommath'],
      mount: {
        name: 'Sun-Touched Hawkstrider',
        icon: 'https://i.imgur.com/JUjfzbT.png',
        image: 'https://i.imgur.com/7GosDuc.jpeg'
      },
      heritageArmor: [
        { name: 'Sin\'dorei Regalia', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_cloth_03.jpg', image: 'https://i.imgur.com/hiWFRc6.png' }
      ],
      diplomacy: {
        'Humans': 'Strained Allies',
        'Orcs': 'Varying (Horde loyalty)',
        'Night Elves': 'Ancient Rivals',
        'Scourge': 'Eternal Enemies'
      },
      elevatorPitch: ['Mana Management', 'AoE Silence / Dispel', 'Dual Faction Choice'],
      flavor: {
        language: 'Thalassian',
        diet: 'Mana Buns & Arcwine',
        nemesis: 'Kael\'thas Sunstrider',
        loot: ['Golden Bow of Quel\'Thalas', 'Staff of the Sun', 'Phoenix Hatchling'],
        partner: 'Each other (Complicated)',
        mountSpecial: 'Saddlebags of Holding',
        heritageWeapon: 'Spellbreaker\'s Shield'
      },
      timeline: [
        { year: '-7000', event: 'Highborne exiled, founding Quel\'Thalas.' },
        { year: '20', event: 'Scourge invasion destroys the Sunwell. 90% of population lost.' },
        { year: '26', event: 'The Sunwell reignites. The schism between High and Blood elves deepens.' }
      ],
      voiceLines: [
        { label: 'High Elf', text: 'The Eternal Sun guides us.', audioUrl: `${import.meta.env.BASE_URL}sounds/high-elf-sun.mp3` },
        { label: 'High Elf', text: 'Do not loiter.', audioUrl: `${import.meta.env.BASE_URL}sounds/high-elf-loiter.mp3` },
        { label: 'High Elf', text: 'For the Sin\'dorei!', audioUrl: `${import.meta.env.BASE_URL}sounds/high-elf-sindorei.mp3` },
        { label: 'Blood Elf', text: 'The Eternal Sun guides us.', audioUrl: `${import.meta.env.BASE_URL}sounds/blood-elf-sun.mp3` },
        { label: 'Blood Elf', text: 'Do not loiter.', audioUrl: `${import.meta.env.BASE_URL}sounds/blood-elf-loiter.mp3` },
        { label: 'Blood Elf', text: 'For the Sin\'dorei!', audioUrl: `${import.meta.env.BASE_URL}sounds/blood-elf-sindorei.mp3` }
      ],
      ultimate: {
        name: 'Phoenix Rebirth',
        desc: 'Fatal damage restores 50% HP and unleashes a fire nova. (10m CD)',
        imageUrl: '',
        videoUrl: 'https://i.imgur.com/WgZXo8L.mp4',
        icon: 'https://i.imgur.com/KvgCIPD.png'
      },

      overview: {
        fantasy: 'An identity forged in tragedy. You are a survivor of the Scourge invasion of Quel\'Thalas, defined by how you cope with the loss of the Sunwell. Do you seek to **Restore** it through discipline and ancient tradition (High Elf), or **Devour** power from other sources to survive the magical famine (Blood Elf)?\n\nThis race is about **Duality**. You start together in the Ghostlands, united by survival, but are slowly torn apart by ideology until you must make a permanent choice at Level 20. High Elves formally join the Alliance under Alleria Windrunner, seeking redemption. Blood Elves remain with the Horde, embracing the power of the Sin\'dorei.',
        systemName: 'The Crucible of Choice',
        systemDesc: 'A mandatory solo scenario at Level 20. You confront an Echo of the Sunwell in a dream-state, assaulted by visions of your past leaders.\n\n**Alliance Path:** Reject the hunger. Choose discipline. Your eyes glow blue. You gain **"Grace of the Sunwell"** (Passive Mana Regen) and **"Spellbreaker"** (Reflect Chance). You reject Kael\'thas\'s teachings.\n**Horde Path:** Embrace the hunger. Dominate the energy. Your eyes glow green. You gain **"Arcane Torrent"** (AoE Silence/Restore) and **"Siphon Magic"**. You embrace the path of the Sin\'dorei.'
      },

      classFantasies: [
        {
          class: 'Paladin',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_paladin.png?4d2aad',
          title: 'Knight of the Silver Hand (A) / Blood Knight (H)',
          desc: '**High:** Classic golden light, defensive/protective. They view the Light as a sacred trust to be rebuilt, often carrying symbols of the old Alliance. \n**Blood:** Aggressive red/gold visuals. They view the Light as a resource to be bent to their will. "Seal of Blood" is standard. Their mounts wear red caparisons compared to the High Elf blue.'
        },
        {
          class: 'Mage',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1',
          title: 'Arcanist (A) / Magister (H)',
          desc: '**High:** Frost and Arcane focus, clean lines, Kirin Tor aesthetic. They study nether-stability and seek to cure the addiction through discipline. \n**Blood:** Fire focus, chaotic visuals, spells look like they are burning the air itself. They study nether-weaponization and use Fel crystals to amplify their power.'
        },
        {
          class: 'Hunter',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d',
          title: 'Ranger (A) / Farstrider (H)',
          desc: '**High:** Nature-aligned, woodland visual motifs. They bond with eagles and lynxes. They patrol the forests to heal the land. \n**Blood:** Uses darker arrows, red-feathered fletching, more militaristic. They bond with Dragonhawks and Mana-Wyrms. They patrol the forests to eradicate threats.'
        },
        {
          class: 'Warlock',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06',
          title: 'Fel-Caster (Horde Only)',
          desc: 'Blood Elves who dove too deep. They don\'t hide their demons; they parade them as symbols of mastery over the Fel. Their fire spells are tinged green. They are the ultimate pragmatists, using the very energy that destroyed their home to protect what remains of it.'
        },
        {
          class: 'Priest',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800',
          title: 'Cleric (A) / Soul-Mender (H)',
          desc: '**High:** Traditional Holy light, focused on mending the spirit and resisting the whispers of the Void. \n**Blood:** "Discipline" takes on a sinister tone—bending the will of the light to cauterize wounds. Shadow priests are viewed as "researchers" delving into the powers of the Naaru.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Shadowblade',
          desc: 'Spies used by Lor\'themar or Vereesa. They use magic to muffle their footsteps, leaving faint arcane trails. High Elves use invisibility and distraction; Blood Elves use aggressive takedowns and mana-burn poisons.'
        }
      ],

      racials: [
        { name: 'Arcane Affinity', icon: 'https://i.imgur.com/YSJiOmA.png', desc: '+10 Enchanting Skill. Magic is in your blood; you can sense magic items on the minimap.' },
        { name: 'Magic Resistance', icon: 'https://i.imgur.com/2lf7Ikq.png', desc: 'All magical resistance increased by 5. Adaptation to a magic-rich environment.' },
        { name: 'Unique: Mana Tap (Pre-L20)', icon: 'https://i.imgur.com/xnpvSOj.png', desc: 'Drains mana from target. Replaced by faction ability at L20.' },
        { name: 'High Elf: Meditation', icon: 'https://i.imgur.com/aXU221o.png', desc: 'Regenerate mana/energy while casting. (Passive) - Represents discipline.' },
        { name: 'Blood Elf: Arcane Torrent', icon: 'https://i.imgur.com/tI04ZfR.png', desc: 'Silence all enemies within 8 yds for 2 sec and restore resource. (2m CD) - Represents domination.' }
      ],

      locations: {
        start: '**Starting Zone: "Sunspire Haven"**\nA shared refugee camp in the southern Ghostlands, separate from the main Blood Elf start. The quests focus on holding back the Scourge while debating the ethics of mana-draining. You see the ideological split happening in real-time among NPCs, with arguments breaking out between "Traditionalists" and "Radicals."',
        hub: '**Capital Hubs:**\n**Alliance:** "The Silver Covenant Enclave" (Stormwind). A dedicated district in the Mage Quarter, clean, white stone, and blue banners.\n**Horde:** "The Court of the Sun" (Silvermoon City). Full access to the city, embracing the new, darker architecture.',
        outpost: '**Outpost: "The Sanctum of the Spark"**\nA hidden, ancient shrine deep beneath the Haven where the "Crucible of Choice" takes place. It acts as a pilgrimage site for max-level players to switch factions (very expensive/long cooldown), representing a change of heart.',
        dungeons: '**Dungeon Ties:**\n**Magisters\' Terrace:** The ultimate confrontation with Kael\'thas. High Elves go to punish the traitor; Blood Elves go to redeem their people and put their mad prince out of his misery.\n**The Sunwell Plateau:** The culmination of the race\'s storyline. The restoration of the Sunwell unites both factions in purpose, if not in banner.'
      },

      campaign: {
        title: "The Sunwell's Shadow",
        commander: "Alleria Windrunner (A) / Lor'themar Theron (H)",
        theme: "Redemption vs. Revenge",
        objective: "The Sunwell has sparked again, but it pulses with unstable void energy. You must purify it or consume it before the Legion dims it forever.",
        moments: [
          "**The Pilgrimage:** Escort a caravan of magisters through the Dead Scar, cleansing the earth.",
          "**The Mirror:** A solo scenario facing your own 'Wretched' reflection in the Magisters' Terrace.",
          "**Sword of the Sin'dorei:** Reforge the broken blade of Anasterian Sunstrider to strike the final blow."
        ],
        result: "**Unlock: The Ley-Line Nexus.**\nPurifying the nodes phases the 'Magisters' Terrace' from a dungeon entrance into a **Teleportation Hub**. This anchors the **Magical Transport** network, stabilizing portals to Stormwind and Orgrimmar despite the Twisting Nether's chaotic interference.",
        foothold: {
          name: "Quest: The Arcane Anchor",
          desc: "The Portal's coordinates are drifting. The first wave of troops is being teleported into the vacuum of space. You must channel into the frame, manually locking the destination to the Stair of Destiny before the connection snaps."
        }
      }
    },

    ogres: {
      id: 'ogres',
      name: 'Ogres',
      tagline: 'The Reclaimed Legacy',
      faction: 'Horde (Stonemaul Clan)',
      leader: 'Rexxar',
      heroImage: 'https://imgur.com/b4F4qBk.jpeg',
      icon: <img src={`https://i.imgur.com/DgEuQYV.png`} alt="Ogres" className="w-6 h-6 object-contain" />,
      themeColor: '#ea580c', // Rust/Orange
      accentColor: 'text-orange-500',
      capitalBG: 'https://i.imgur.com/mDc5wzb.jpeg',

      notableHeroes: ['Rexxar', 'Mogor the Ogre', 'Dentarg', 'Cho\'gall (Rival)'],
      mount: {
        name: 'Gorian Clefthoof',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_clefthoof_ground.jpg',
        image: 'https://wow.zamimg.com/uploads/screenshots/normal/431185-bloodhoof-bull.jpg'
      },
      heritageArmor: [
        { name: 'Heritage of the Stonemaul', icon: 'https://i.imgur.com/PZEeeG3.png', image: 'https://i.imgur.com/PZEeeG3.png' }
      ],
      diplomacy: {
        'Orcs': 'Strained Brotherhood',
        'Gronn': 'Hated Masters',
        'Tauren': 'Respectful Rivals'
      },
      timeline: [
        { year: '-400', event: 'Gorian Empire at its height.' },
        { year: '5', event: 'Ogres enslaved by the Old Horde for the Second War.' },
        { year: '32', event: 'Stonemaul Clan joins the New Horde under Rexxar.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'Me smash you?' },
        { label: 'Annoyed', text: 'I\'m with stupid ->' },
        { label: 'Combat', text: 'CRUSH THEM!' }
      ],
      ultimate: {
        name: 'Might of Goria',
        desc: 'Grow to massive size, becoming immune to CC and dealing 20% splash damage.',
        videoUrl: 'https://i.imgur.com/NyzB5zp.mp4',
        icon: 'https://i.imgur.com/TzTFKkO.png'
      },
      elevatorPitch: ['Massive Tank Model', '2-Headed Caster Option', 'Physical Dominance'],
      flavor: {
        language: 'Gorian & Low Orcish',
        diet: 'Anything (Literally)',
        nemesis: 'Gruul the Dragonkiller',
        loot: ['Gruul\'s Eye', 'Highmaul Maul', 'Ogre Pinata'],
        partner: 'Goblins (Smart + Strong)',
        mountSpecial: 'Iron Jaw Reinforcement',
        heritageWeapon: 'Improvised Stone Pillar'
      },

      overview: {
        fantasy: 'For too long, Ogres have been reduced to brutes and punchlines. The Stonemaul Clan remembers the **Gorian Empire**—a time when Ogres were sorcerer-kings who ruled Draenor with iron and arcane fire. Under the leadership of **Rexxar**, Champion of the Horde, you are here to prove that Ogres are the true heirs of the planet, possessing both earth-shattering strength and terrifying intellect.\n\nThis is a race of **Scale and Weight**. You are larger than Tauren. You feel heavy. When you walk, the camera shakes slightly. You are the "tank" race, physically imposing and culturally proud. You view the Orcs as "little brothers" who lost their way, and the Gronn as false gods who must be toppled.',
        systemName: 'Two-Headed Magi',
        systemDesc: '**Mage/Warlock Only:** Your character model has two heads. You can customize both names (e.g., "Cho" and "Gall") and facial features. \n\n**The Second Head:** Acts as a built-in "announcer" for your gameplay. It alerts you to procs in /say ("Burn them, idiot!"), auto-responds to whispers with insults, and grants a passive resistance to Silence effects (one head keeps chanting while the other is gagged). The heads will bicker when you are idle.'
      },

      classFantasies: [
        {
          class: 'Warrior',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad',
          title: 'Gorian Gladiator',
          desc: 'Uses "oversized" weapon models (2H weapons held in 1H - Titan\'s Grip style by default for animations). "Thunder Clap" is a literal foot stomp that cracks the ground texture. Your shout buffs are deep, resonant bellows that fear critters. You embody the physical dominance of the Highmaul Coliseum.'
        },
        {
          class: 'Mage',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1',
          title: 'Imperator',
          desc: 'Uses earth-based runes for magic. Fire spells look like molten lava. Frost spells look like jagged crystal formations. They cast spells by punching the air rather than wiggling fingers. They are the scholars of the race, seeking to rebuild the arcane libraries of Goria.'
        },
        {
          class: 'Warlock',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06',
          title: 'Void-Caller',
          desc: 'Ogres of the Twilight\'s Hammer legacy. They use physical brute force to constrain their demons. "Summon" animations involve dragging the demon out of a portal by its neck. They view Fel magic as just another tool for domination.'
        },
        {
          class: 'Shaman',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62',
          title: 'Geomancer',
          desc: 'Totems are massive stone obelisks carved with Gorian runes. Lightning Bolt is a jagged, red-hued "Gorian Lightning." Ascendance turns you into a stone golem. You speak to the earth not with requests, but with commands.'
        },
        {
          class: 'Hunter',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d',
          title: 'Beastlord',
          desc: 'You don\'t "tame" beasts; you break them. Pets scale slightly larger than normal. Start with a Rylak. Traps are massive iron cages. You wear the trophies of your kills, covering your armor in furs and bones.'
        }
      ],

      racials: [
        { name: 'Brute Force', icon: 'https://i.imgur.com/e2ZGgng.png', desc: 'Increases the Strength of all party members by 1%. Your mere presence inspires confidence.' },
        { name: 'Ogre\'s Might', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_undyingstrength.jpg', desc: 'Active: Grow 20% larger. +15% Strength, -10% Intellect. (2m CD). "ME SMASH!" mode.' },
        { name: 'Titanic Build', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_skinofearth.jpg', desc: 'Increases Total Stamina by 2%. You are hard to kill, simply because there is so much of you.' },
        { name: 'Thick Skinned', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_monsterscales_07.jpg', desc: 'Reduces Physical damage taken by 1%. Arrows just bounce off.' },
        { name: 'Gorian Legacy', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_magicalsentry.jpg', desc: '+15 Enchanting. Or "Smashing magic into things." A lost art of the Empire.' }
      ],

      locations: {
        start: '**Starting Zone: "The Stonemaul Cradle"**\nA contested canyon between Feralas and Thousand Needles. You must unite the scattered Ogre tribes under the banner of the Horde, fighting off Alliance encroachments and feral Gordunni ogres. The questline involves proving your intellect to the clan elders and recovering lost artifacts.',
        hub: '**Capital Hub: "Goria\'s Vantage" (Blade\'s Edge)**\nA rebuilt fortress in the mountains where Ogre players collect artifacts to unlock "Imperator" transmog sets. It serves as a stark contrast to the primitive ogre mounds found elsewhere, featuring actual architecture, libraries, and forges.',
        outpost: '**Outpost: "Highmaul Embassy" (Nagrand)**\nA diplomatic tent outside Garadar where Stonemaul emissaries try to convince the Mag\'har Orcs that the Ogres have changed. Quests involve proving your worth to the Orcs by hunting local fauna.',
        dungeons: '**Dungeon Ties:**\n**Gruul\'s Lair:** The ultimate vendetta. Gruul is the "Dragonkiller," but he is also the Enslaver of Ogres. You are there to break the chains and end the reign of the Gronn forever.\n**Bloodmaul Slag Mines:** A rescue mission to free your kin from servitude and recruit them to the new Gorian dream.'
      },

      campaign: {
        title: "The Neo-Gorian Empire",
        commander: "Rexxar & Centurion Cagg",
        theme: "Imperial Rebirth",
        objective: "Prove that Ogres are not stupid brutes, but the heirs to a lost empire of sorcerer-kings.",
        moments: [
          "**The Library:** Excavate Ogri'la to recover the 'Codex of Order,' unlocking new Mage abilities.",
          "**Gronn-Slayer:** A raid-boss style quest where you 1v1 a Gronn to assert dominance.",
          "**Throne of the Imperator:** Sit on the Highmaul throne (phased) and have local clans bow to you."
        ],
        result: "**Unlock: The Siege Works.**\nThe ruins of the Bladespire Citadel are rebuilt into a pristine **Ogre Fortress**. This anchors the **Military Might** of the Horde, providing the tanks, catapults, and heavy infantry required to breach the Legion's walls.",
        foothold: {
          name: "Quest: The Wall-Breakers",
          desc: "A massive 'Fel-Shield' blocks the exit from the Stair of Destiny. Mages can't dispel it. You? You pick up a Fel-Reaver's severed arm and use it as a battering ram to physically smash the shield generators."
        }
      }
    },

    saberon: {
      id: 'saberon',
      name: 'Saberon',
      tagline: 'The Primal Hunter',
      faction: 'Horde (Primal Pact)',
      leader: 'The Golden Alpha',
      heroImage: 'https://imgur.com/lR8vivT.jpeg',
      icon: <img src={`https://i.imgur.com/ozJwhB2.png`} alt="Saberon" className="w-6 h-6 object-contain" />,
      themeColor: '#CA8A04', // Feral Gold
      accentColor: 'text-yellow-500',
      capitalBG: 'https://i.imgur.com/D8UEjK3.jpeg',

      notableHeroes: ['Leorajh', 'The Golden Alpha', 'Soulbinder Tuulani'],
      mount: {
        name: 'Running Wild',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_catswiftness.jpg',
        image: 'https://i.imgur.com/IBAAANC.jpeg'
      },
      heritageArmor: [
        { name: 'Apex Predator Skins', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_leather_raidrogue_e_01.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/464977.jpg' },
        { name: 'Bloodmane Wraps', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_mail_raidshaman_e_01.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/464977.jpg' }
      ],
      diplomacy: {
        'Horde': 'Hunting Pack',
        'Arakkoa': 'Wary Neighbors',
        'Botani': 'Food Source',
        'Arakkoa Outcasts': 'Uneasy Allies'
      },
      timeline: [
        { year: '-1000', event: 'Saberon evolve from the Primals.' },
        { year: '30', event: 'Saberon tribes united by the "Golden Alpha".' },
        { year: '32', event: 'The Primal Pact is signed with the Horde.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'The hunt begins.' },
        { label: 'Annoyed', text: 'You smell... tasty.' },
        { label: 'Combat', text: 'Rend flesh!' }
      ],
      ultimate: {
        name: 'Primal Frenzy',
        desc: 'Leap instantly to targets within 30yds for 10 sec. Bleeds deal double damage.',
        imageUrl: 'https://i.imgur.com/KUiPUGV.jpeg'
      },
      elevatorPitch: ['High Mobility (No Mount)', 'Bleed Damage / Rends', 'Apex Predator Tracking'],
      flavor: {
        language: 'Razor-Tongue',
        diet: 'Fresh Meat',
        nemesis: 'The Pale',
        loot: ['Claws of the Alpha', 'Fang of the Pit Lord', 'Primal Tiki'],
        partner: 'Trolls (Spirit Bond)',
        mountSpecial: 'N/A (You run)',
        heritageWeapon: 'Fist Wraps of the Hunt'
      },

      overview: {
        fantasy: 'The apex predators of Draenor. While Orcs conquered and Draenei hid, the Saberon **hunted**. You join the Horde because they respect strength, but you view the "civilized" races with pity. You have no money, only trophies. You have no king, only the Alpha. You are a survivalist who thrives in the harshest environments.\n\nGameplay focuses on **Mobility and Bleeds**. You are a blur of fur and claws on the battlefield. You do not ride mounts comfortably; your running animation is a sprint on all fours. You speak in short, growling sentences and view armor as a second skin to be earned.',
        systemName: 'The Trophy Hunt',
        systemDesc: 'Saberon do not gain Rested XP in cities. They gain it by "Hunting" specific elites in the wild. \n\n**Trophies:** Killing dungeon bosses grants "Trophies" (teeth, ears, scales) that can be bartered at the Saberon hub for unique "Bone-Armor" cosmetics that overlay your existing gear. Completing a full "Trophy Set" (e.g., all bosses in Hellfire Citadel) grants a permanent title and a unique roar emote.'
      },

      classFantasies: [
        {
          class: 'Druid',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_druid.png?a3333f',
          title: 'Form-Shifter',
          desc: '**Cat Form:** You ARE the Saberon (no change, just prowl animation). \n**Bear Form:** A massive, armored "Alpha" Saberon. \n**Moonkin:** A "Witch Doctor" form draped in feathers and skulls. \n**Flight:** A Wyvern-hybrid shift. You view Druidism not as balance, but as mastering every predator in the ecosystem.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Stalker',
          desc: 'No daggers. You use "Fist Weapons" (Claws) exclusively for your animations. Stealth run speed is significantly faster on all fours. Ambush is a throat-bite animation. You are the terror in the tall grass.'
        },
        {
          class: 'Warrior',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad',
          title: 'Pride-Lord',
          desc: 'Battle Shout is a terrifying roar that actually fears critters. Execute is a bite animation. You fight with a savagery that unnerves even Orcs. You prefer bleeding your enemies out, watching the life drain from them.'
        },
        {
          class: 'Hunter',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d',
          title: 'Pack-Leader',
          desc: 'You fight alongside your pet as an equal. Melee animations (Wing Clip, Raptor Strike) are seamless claw swipes. You can tame "Feral Druids" (just kidding... mostly). You communicate with your pet via growls, not commands.'
        },
        {
          class: 'Shaman',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62',
          title: 'Element-Binder',
          desc: 'Primitive shamanism. Totems are piles of skulls and sticks tied with leather. Ghost Wolf turns you into a spectral tiger. Bloodlust is a "Primal Howl" that echoes across the map. You bargain with the elements of blood and earth.'
        }
      ],

      racials: [
        { name: 'Pounce', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_pounce.jpg', desc: 'Leap 20 yards to target. If used from Stealth, stuns for 2 sec. Replaces the need for a mount in combat.' },
        { name: 'Savage Roar', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_skintear.jpg', desc: 'Active: +5% Attack Power for 10 sec. (2m CD). Terrifies nearby critters.' },
        { name: 'Apex Predator', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_ferociousbite.jpg', desc: 'Movement speed +5%. Damage against Beasts +5%. You are the top of the food chain.' },
        { name: 'Primal Senses', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_snipershot.jpg', desc: '+15 Skinning. You can track enemies below 30% HP on the minimap (Hunter\'s Mark visual).' }
      ],

      locations: {
        start: '**Starting Zone: "Zangarmarsh Hunt" (Level 58)**\nA high-stakes survival tutorial. You start with nothing—no weapons, no armor. You must craft your first weapon from the spine of a marsh strider. You are being hunted by the Naga, and the tables must turn. The zone is dark, wet, and atmospheric.',
        hub: '**Capital Hub: "The Brood-Den" (Terokkar)**\nA hidden tree-city high in the canopy. No vendors accept gold here; only trade goods (meat, leather) and trophies. It connects to the Arakkoa spy network, allowing you to trade intel for supplies.',
        outpost: '**Outpost: "Fang\'s Edge" (Blade\'s Edge)**\nA hunting camp dedicated to bringing down the Gronn. It serves as the main daily quest hub for the "Trophy Hunt" system. Here, you plan raids on the Ogres below.',
        dungeons: '**Dungeon Ties:**\n**The Underbog:** Tracking the great hydra Ghazan. A rite of passage for all Saberon hunters. Bringing back his fang is a requirement for your epic mount.\n**The Steamvaults:** Vengeance against the Naga who encroached on your Zangarmarsh hunting grounds. You are there to reclaim the water.'
      },

      campaign: {
        title: "The Apex Hunt",
        commander: "Leorajh (The Enlightened)",
        theme: "Survival of the Fittest",
        objective: "The Legion creates 'Fel-Beasts.' You view them as an invasive species. Your campaign is a planetary pest control operation.",
        moments: [
          "**The Stalking:** Track a Fel-Reaver for 3 real-time days across Hellfire Peninsula to learn its route.",
          "**Blood for Blood:** Eat the heart of a Doom Lord to gain permanent resistance to Fel fire.",
          "**The Alpha's Call:** Unite the scattered Saberon tribes by defeating their chieftains in ritual combat."
        ],
        result: "**Unlock: The Marsh-Walker Paths.**\nClearing the Naga pumps refilled the lakes of Zangarmarsh. The zone phases from 'Dead Mire' to 'Verdant Hunting Ground.' This anchors **Logistics & Survival**, providing the food and leather needed to equip the expedition.",
        foothold: {
          name: "Quest: The Invisible Stalkers",
          desc: "The path to Thrallmar looks clear, but scouts are vanishing. Your senses reveal the truth: thousands of invisible Fel-Stalkers. You lead the pack, marking the targets with pheromones so the rest of the Horde can see what they are fighting."
        }
      }
    },

    broken: {
      id: 'broken',
      name: 'The Broken',
      tagline: 'The Redeemed Shadow',
      faction: 'Alliance (Ashtongue Redeemers)',
      leader: 'Akama',
      heroImage: 'https://imgur.com/jH31cAZ.jpeg',
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_draenei_male.jpg`} alt="Broken" className="w-6 h-6 object-contain" />,
      themeColor: '#14b8a6', // Teal/Nether
      accentColor: 'text-teal-400',
      capitalBG: 'https://i.imgur.com/OlDBoyM.jpeg',
      hasVariant: true, // Flag for UI toggle
      variantName: 'Classic Draenei',
      elevatorPitch: ['Classic TBC Vibe', 'Self-Healing HoT', 'Group Hit Buff'],

      notableHeroes: ['Akama', 'Farseer Nobundo', 'Strange-God Sothos'],
      mount: {
        name: 'Ashtongue Talbuk',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_mount_talbukmountwhite.jpg',
        image: 'https://i.imgur.com/1y4dfbg.jpeg' // Using similar url as provided, though user didn't specify distinct Broken mount image, this fits Talbuk vibe
      },
      heritageArmor: [
        { name: 'Krokul Shaman Wraps', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_chain_15.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' },
        { name: 'Broken Chains Plate', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_plate_04.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' }
      ],
      diplomacy: {
        'Draenei': 'Pity/Distrust',
        'Illidari': 'Feigned Loyalty',
        'Orcs': 'Ancient Enemies'
      },
      timeline: [
        { year: '-25', event: 'The Red Pox decimates the Draenei, creating the Broken.' },
        { year: '-10', event: 'Akama pledges loyalty to Illidan to retake the Black Temple.' },
        { year: '26', event: 'The Ashtongue Deathsworn begin their secret rebellion.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'We remember.' },
        { label: 'Annoyed', text: 'I am not... a Lost One.' },
        { label: 'Combat', text: 'For the Light we lost!' }
      ],
      ultimate: {
        name: 'Soul-Link Totem',
        desc: 'Redistributes health among party members, equalizing HP percentages. (5m CD)',
        imageUrl: 'https://i.imgur.com/VSTF5p8.jpeg'
      },

      overview: {
        fantasy: 'Cut off from the Light, twisted by Fel, but not broken in spirit. You are the **Survivors** of the Red Pox, a curse engineered by the Orc Warlocks to sever your connection to the divine. The Draenei look at you with pity; the Orcs with disgust. But your Kurenai brethren in Nagrand have found a new truth: the Light never abandoned you; it was merely silenced.\n\nYour aesthetic is **Ragged Nobility**. Tattered cloaks, cracked crystal staves, and glowing, weeping sores of fel energy. You fight not for glory, but for a home. You are led by **Akama**, the Elder Sage, who plays a dangerous double-game with Illidan to secure your freedom.',
        systemName: 'Vengeance & Atonement',
        systemDesc: 'A unique resource bar. \n**Vengeance:** Fills as you take damage. Can be spent to boost Shadow damage. Represents giving in to the despair. \n**Atonement:** Fills as you heal or deal Holy damage. Can be spent on a powerful self-sustain HoT. Represents holding onto the Light.\nMastering the Broken means balancing your inner turmoil—lean too far into Vengeance and you risk becoming a Lost One (visual debuff).'
      },

      classFantasies: [
        {
          class: 'Shaman',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62',
          title: 'Krokul Nobundo-Disciple',
          desc: 'The defining class. "Totems" are floating, broken crystals. Elemental spirits are darker, more chaotic forms of fire and earth. They speak to the "Broken" elements of Outland—the corrupted earth and the fel-fire. They seek to heal the land to heal themselves.'
        },
        {
          class: 'Warlock',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06',
          title: 'Fel-Binder',
          desc: 'You turn the enemy\'s weapon against them. Your demons are enslaved with chains of light. Shadow Bolts look like jagged glass. You use the Fel to destroy the Legion, a dangerous irony that makes other Alliance races uneasy.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Deathsworn',
          desc: 'Masters of stealth who learned from Akama. Vanish creates a cloud of red mist. Eviscerate leaves a fel-green scar. You specialize in killing demons from the shadows, using their own tactics against them. You are the knife in the dark.'
        },
        {
          class: 'Hunter',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d',
          title: 'Wasteland Survivor',
          desc: 'Uses scavenged technology. Traps are jury-rigged fel devices. Pets are usually Void-warped beasts (Warp Stalkers). You track demons with supernatural precision, smelling the sulfur on them from miles away.'
        },
        {
          class: 'Mage',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1',
          title: 'Nether-Mage',
          desc: 'Magic practiced in secret. Arcane Missiles are purple void-energy. Polymorph turns the target into a mutated cockroach. You tap into the leylines of Outland directly, bypassing the need for refined mana crystals.'
        }
      ],

      racials: [
        { name: 'Soul Siphon', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_manafeed.jpg', desc: 'Chance on hit to restore 2% Mana/Energy (Internal Cooldown 45s). You feed on the energy of your enemies.' },
        { name: 'Ashtongue Cunning', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg', desc: '+15 Stealth Detection. +10 Lockpicking. Movement Speed increased by 5% while Stealthed.' },
        { name: 'Fel-Scarred', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_antimagicshell.jpg', desc: '-2% Shadow Damage Taken. Duration of Curses reduced by 15%. You have already endured the worst.' },
        { name: 'Fragmented Memories', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_gem_01.jpg', desc: '+15 Jewelcrafting. You remember the old ways of Argus, if only in flashes.' }
      ],

      locations: {
        start: '**Starting Zone: "The Ashtongue Pledge" (Level 58)**\nStart as a double-agent in Shadowmoon Valley, pretending to serve Illidan while gathering intel for Akama and the Naaru. The atmosphere is oppressive and paranoid. You must torture prisoners (who are actually demons in disguise) to prove your loyalty to the Illidari while smuggling supplies to the resistance.',
        hub: '**Capital Hub: "The Lower Rise" (Shattrath)**\nA refugee camp that you upgrade into a district. It feels desperate, crowded, and hopeful. It serves as the bridge between the Aldor and Scryers, as the Broken deal with both. It features the "Shaman\'s Stone," a place of meditation.',
        outpost: '**Outpost: "Greyheart Enclave" (Zangarmarsh)**\nA hidden village of "Lost Ones" that you are trying to rehabilitate. Quests involve gathering food and medicine for your devolved kin, defending them from Naga slavers.',
        dungeons: '**Dungeon Ties:**\n**Shadow Labyrinth:** Confronting the darker aspects of your heritage and the Shadow Council. You seek to silence the whispers.\n**The Black Temple:** The ultimate goal. Helping Akama reclaim the temple from Illidan and purifying the Karabor.'
      },

      campaign: {
        title: "The Karabor Reclamation",
        commander: "Akama",
        theme: "Spiritual Purification",
        objective: "The Black Temple was once the Temple of Karabor. You are a janitor of the holy light, here to scrub the fel-stains from your home.",
        moments: [
          "**The Warlock's Curse:** A questline delving into the specific rituals Gul'dan used to break the Draenei, and finding a way to reverse the spiritual damage.",
          "**Whispers of the Dark:** A horror-themed questline in Shadow Labyrinth separating Akama's voice from the Void.",
          "**Steps of Faith:** Plant the Ashtongue banner at the summit of the Black Temple."
        ],
        result: "**Unlock: The Shadow-Sanctum.**\nThe lower sewers of the Black Temple phase into the **Ashtongue Refuge**, a forward operating base inside enemy territory. This anchors the **Intelligence Network**, providing the spies and assassins needed to dismantle the Legion from within.",
        foothold: {
          name: "Quest: The Void-Walk",
          desc: "The main road is a continuous orbital strike zone. Akama remembers a Smuggler's Path that winds through the twisted nether-rocks floating *outside* the peninsula. You guide the Alliance vanguard across these floating islands, bypassing the bombardment entirely."
        }
      },

      // --- VARIANT DATA: CLASSIC DRAENEI ---
      variantData: {
        name: 'Draenei',
        hasVariant: true,
        tagline: 'The Exiled Light',
        leader: 'Prophet Velen',
        heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/879261-draenei-heritage-armor.jpg',
        icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_draenei_female.jpg`} alt="Draenei" className="w-6 h-6 object-contain" />,
        themeColor: '#60a5fa', // Light Blue
        accentColor: 'text-blue-400',
        capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/53414-the-exodar.jpg',

        notableHeroes: ['Prophet Velen', 'Maraad', 'Yrel'],
        mount: {
          name: 'Great Elekk',
          icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_elekk_blue.jpg',
          image: 'https://i.imgur.com/KUiPUGV.jpeg' // Using same as Saberon/Draenei suggestion as per user "Draenei: https://i.imgur.com/KUiPUGV.jpeg"
        },
        heritageArmor: [
          { name: 'Crystal-Plate of Karabor', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_plate_12.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' }
        ],
        diplomacy: {
          'Broken': 'Sorrowful Regret',
          'Naaru': 'Divine Guidance',
          'Orcs': 'Wary Peace (Refugees)'
        },
        racials: [
          { name: 'Gift of the Naaru', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_flashheal.jpg', desc: 'Heals the target for 20% of their total health over 15 sec. (3m CD)' },
          { name: 'Heroic Presence', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_mindvision.jpg', desc: '+1% Hit Chance for you and your party.' },
          { name: 'Gemcutting', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_gem_01.jpg', desc: '+10 Jewelcrafting skill.' },
          { name: 'Shadow Resistance', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_antishadow.jpg', desc: 'Shadow Resistance increased by 10.' }
        ],
        ultimate: {
          name: 'Light\'s Wrath',
          desc: 'Call down a pillar of Holy Light, healing allies and damaging enemies within 10yds.',
          imageUrl: 'https://i.imgur.com/KUiPUGV.jpeg'
        },
        elevatorPitch: ['Classic TBC Vibe', 'Group Hit Buff', 'Self-Healing HoT'],
        flavor: {
          language: 'Draenei',
          diet: 'Elekk Cheese',
          nemesis: 'Kil\'jaeden',
          loot: ['Hammer of the Naaru', 'T6 Absolution Regalia', 'Aldor Tabard'],
          partner: 'Humans (Light Worshippers)',
          mountSpecial: 'Crystal Plating',
          heritageWeapon: 'Crystal-Forged Hammer'
        },
        overview: {
          fantasy: 'You are the **Exiles of Argus**. Fleeing the Burning Legion for millennia, you crash-landed on Azeroth in the Exodar. Now, the Dark Portal has opened, and you return to the shattered remnants of Draenor—not to hide, but to fight. You wield the Light not as a shield, but as a hammer of justice. Guided by prophecy, you seek to unite the scattered tribes and save what remains of your adopted home.',
          systemName: 'The Gift',
          systemDesc: 'A passive aura that strengthens as you perform heroic deeds. Slaying demons grants stacks of "Naaru\'s Favor," increasing your Holy damage and Healing done by up to 5%. At max stacks, your character glows with blinding light.'
        },
        classFantasies: [
          { class: 'Paladin', icon: 'https://warcraft.wiki.gg/images/ClassIcon_paladin.png?4d2aad', title: 'Vindicator', desc: 'The Hammer of the Naaru. You are a walking fortress of crystal and light.' },
          { class: 'Priest', icon: 'https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800', title: 'Anchorite', desc: 'keepers of the sacred crystals. Your healing spells have crystalline visual effects.' },
          { class: 'Mage', icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1', title: 'Arcanist', desc: 'Masters of ancient Eredar technology and magic.' },
          { class: 'Shaman', icon: 'https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62', title: 'Elementalist', desc: 'Those who have learned to hear the broken earth of Outland.' },
          { class: 'Warrior', icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad', title: 'Peacekeeper', desc: 'Guardians of the refugees, wielding maces and shields.' },
          { class: 'Hunter', icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d', title: 'Rangari', desc: 'Scouts and survivalists who adapted to the wild.' }
        ],
        locations: {
          start: '**Starting Zone: "Azuremyst Isle" (Level 1)**\nThe classic TBC start. You crawl out of the wreckage of the Exodar. You must heal the radioactive contamination caused by the crash, befriend the local furbolgs, and establish a foothold on this strange new world.',
          hub: '**Capital Hub: "The Exodar"**\nA dimensional ship turned city. It hums with power.',
          outpost: '**Outpost: "Telredor"**\nThe mushroom city in Zangarmarsh.',
          dungeons: '**Dungeon Ties:**\n**Auchindoun:** Reclaiming your sacred mausoleum.'
        },
        campaign: {
          title: "The Prophecy Fulfilled",
          commander: "Velen",
          theme: "Light's Victory",
          objective: "To reclaim the holy sites of the Draenei.",
          moments: ["Reclaiming Shattrath", "Purifying the Soul Grinders"],
          result: "**Unlock:** Access to the Army of the Light features.",
          foothold: { name: "Quest: Landing", desc: "Secure the crash site." }
        },
        voiceLines: [
          { label: 'Greeting', text: 'The Naaru have not forgotten us.' },
          { label: 'Combat', text: 'By the Light!' }
        ],
      }
    },

    wildhammer: {
      id: 'wildhammer',
      name: 'Wildhammer Dwarves',
      tagline: 'The Sky-Reaver',
      faction: 'Alliance (Wildhammer Clan)',
      leader: 'Kurdran Wildhammer',
      heroImage: 'https://imgur.com/NmluyOP.jpeg',
      icon: <img src={`https://i.imgur.com/M6nFkwe.png`} alt="Wildhammer" className="w-6 h-6 object-contain" />,
      themeColor: '#0ea5e9', // Sky Blue
      accentColor: 'text-sky-400',
      capitalBG: 'https://i.imgur.com/0LfDPAU.jpeg',

      notableHeroes: ['Kurdran Wildhammer', 'Falstad Wildhammer', 'Sky\'ree'],
      mount: {
        name: 'Eagletalon Gryphon',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_gryphon_01.jpg',
        image: 'https://i.imgur.com/1y4dfbg.jpeg'
      },
      heritageArmor: [
        { name: 'Star-Hammer Harness', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_plate_12.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/39061.jpg' },
        { name: 'Storm-Caller Mail', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_chain_06.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/39061.jpg' }
      ],
      diplomacy: {
        'Alliance': 'Sovereign Clan',
        'Forest Trolls': 'Blood Feud',
        'Bronzebeards': 'Mountain Rivals'
      },
      timeline: [
        { year: '-230', event: 'War of the Three Hammers drives Wildhammer to the Hinterlands.' },
        { year: '5', event: 'Kurdran leads the Gryphon Riders to Outland.' },
        { year: '26', event: 'Wildhammer Stronghold established in Shadowmoon Valley.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'Keep yer feet on the ground!' },
        { label: 'Annoyed', text: 'I can see my house from here!' },
        { label: 'Combat', text: 'Hammer time!' }
      ],
      ultimate: {
        name: 'Thunder-Slam',
        desc: 'Jump into the air and crash down, stunning all enemies for 5s. (Indoor friendly)',
        imageUrl: 'https://i.imgur.com/QrzgVVv.jpeg'
      },

      overview: {
        fantasy: 'While the Bronzebeards hide in mountains, the Wildhammers **own the sky**. You are a tattooed, storm-charged warrior who feels claustrophobic indoors. You bond with a Gryphon not as a mount, but as a soul-partner. You are loud, boisterous, and fiercely loyal.\n\nThis is the race for **Verticality**. You have slow fall mechanics, jump boosts, and a connection to the storms of Outland. You are the Alliance\'s answer to the Orcish Wyvern riders—faster, braver, and much louder. You view the Nether Drakes as rivals to be raced, not enemies to be fought.',
        systemName: 'The Gryphon Bond',
        systemDesc: 'You start with a **Gryphon Hatchling** item. \n\n**Level 10-60:** You summon it in combat (Guardian). It levels with you, gaining abilities based on your kills. It can stun enemies or fetch loot. \n**Level 70:** It becomes your **Instant-Cast Flight Form** (functionally a mount, but instant). You can customize its armor, beak type, and feather pattern via a unique "Stable Master" UI. You can also name it, and it will appear in your character pane.'
      },

      classFantasies: [
        {
          class: 'Shaman',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62',
          title: 'Stormcaller',
          desc: 'The iconic Wildhammer class. Lightning bolts are brighter, louder, and blue-white. Chain Lightning arcs like a tesla coil. Your totems are carved from Aerie Peak gryphon bones. You don\'t commune with the elements; you wrestle them.'
        },
        {
          class: 'Warrior',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad',
          title: 'Thane',
          desc: 'Specializes in Dual-Wielding Hammers. "Thunder Clap" summons a localized storm cloud. "Charge" leaves a trail of static. You are a berserker of the skies, often diving into combat from above (no fall damage).'
        },
        {
          class: 'Hunter',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d',
          title: 'Sky-Hunter',
          desc: 'Uses thrown weapons (Axes/Hammers) visually instead of bows/guns. Pets are avian (Eagles, Owls, Gryphons). You can track "Air Elementals" on the minimap. Your traps are "Storm Runes" placed on the ground.'
        },
        {
          class: 'Druid',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_druid.png?a3333f',
          title: 'Aerie-Keeper',
          desc: 'Forms are avian-themed. Moonkin is a feathered "Storm-Crow" humanoid. Bear form has Gryphon-like beak features. Cat form is a mountain lynx. You are the guardian of the roost.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Wind-Walker',
          desc: 'Subtlety focused. Shadowstep looks like a gust of wind. Sprint leaves a blurred trail of leaves and feathers. You drop from the sky silently, an assassin who strikes from the clouds.'
        }
      ],

      racials: [
        { name: 'Stormborn', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_airmastery.jpg', desc: '+1% Nature Damage. +10 Nature Resistance. 15% Stun Resistance. You were born in a thunderstorm.' },
        { name: 'Sky-Captain', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pet_gryphon.jpg', desc: '+10% Mounted Speed (Ground & Flying). Stacks with other effects. You know how to read the wind currents.' },
        { name: 'Thunderstrike', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_thunderstorm.jpg', desc: 'Active: Hurl a storm hammer. Instantly Stuns for 2 sec + Nature Dmg. (2m CD). A classic Wildhammer greeting.' },
        { name: 'Gryphon\'s Eye', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_eagleeye.jpg', desc: '+1% Hit Chance with Ranged Weapons and while Dual-Wielding. Sharp eyes from high altitudes.' },
        { name: 'Aerial Specialist', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_leatherscroll.jpg', desc: '+15 Leatherworking. (Saddles/Harnesses). You make your own gear from the beasts you hunt.' }
      ],

      locations: {
        start: '**Starting Zone: "The Hinterlands Peaks"**\nGameplay takes place entirely on cliffs and Gryphon roosts. Falling is a real danger. You learn to ride the wind currents early, bombing forest trolls from above. The quests involve hatching your gryphon, defending the aerie, and proving your worth to High Thane Falstad.',
        hub: '**Capital Hub: "Kurdran\'s Watch" (Shadowmoon Valley)**\nA high-altitude fortress accessible only by flying mount, serving as the forward base for the Alliance Air Force. It has the best view in Outland. It features a flight path to every zone and a specialized "Gryphon Racer" mini-game.',
        outpost: '**Outpost: "Eagle\'s Eye" (Blade\'s Edge)**\nA small camp perched on a spire in the Blade\'s Edge Mountains. It serves as a staging ground for attacks on the Ogres below. You engage in aerial dogfights with the nether drakes.',
        dungeons: '**Dungeon Ties:**\n**Tempest Keep:** The Sky-Reavers are fascinated by the floating fortress. You want to claim it for the Alliance as the ultimate mobile aerie.\n**Sethekk Halls:** You have a special hatred for the Arakkoa, the "corrupted bird men," and seek to purge them for their mockery of the skies.'
      },
      elevatorPitch: ['Flight from Level 1', 'Stun Resistance', 'Mobile Casting'],
      flavor: {
        language: 'Wildhammer Dialect',
        diet: 'Gryphon Jerky & Ale',
        nemesis: 'Dragonmaw Clan',
        loot: ['Stormhammer', 'Sky-Captain\'s Hat', 'Gryphon Whistle'],
        partner: 'Dwarves (Family)',
        mountSpecial: 'Aerodynamic Saddle',
        heritageWeapon: 'Thunder-Caller'
      },

      campaign: {
        title: "The Skies of Outland",
        commander: "Kurdran Wildhammer",
        theme: "Aerial Superiority",
        objective: "The Legion dominates the ground. The Wildhammers will dominate the air.",
        moments: [
          "**Dogfight at the Throne:** A vehicle quest flying against Legion Fel-Bats over Kil'jaeden's Throne.",
          "**Lightning War:** Summon a massive storm to clear the fog of war from Zangarmarsh.",
          "**The Nest:** Rescue the last clutch of pristine Gryphon eggs from Blade's Edge."
        ],
        result: "**Unlock: The Sky-Roads.**\nDefeating the Nether Drakes clears the atmospheric interference. Destroyed roosts in every zone phase into active **Flight Paths**. This anchors **Air Superiority**, allowing the Alliance to project power anywhere in Outland instantly.",
        foothold: {
          name: "Quest: The Suicide Dive",
          desc: "Legion anti-air canons are grounding the Gryphon fleet. You lead a squadron of 'Storm-Riders' in a vertical dive-bomb from the cloud layer, dropping explosives directly down the barrels of the Fel-Cannons to clear the runway."
        }
      }
    },

    // --- LEGACY ALLIANCE ---
    humans: {
      id: 'humans',
      name: 'Humans',
      tagline: 'The Sons of Lothar',
      faction: 'Alliance (Expedition)',
      leader: 'Danath Trollbane',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/879262-human-heritage-armor.jpg',
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_human_male.jpg`} alt="Humans" className="w-6 h-6 object-contain" />,
      themeColor: '#2563eb',
      accentColor: 'text-blue-600',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/1067222-stormwind-city.jpg',

      notableHeroes: ['Danath Trollbane', 'Khadgar', 'Turalyon (Missing)', 'Alleria (Missing)'],
      mount: {
        name: 'Stormwind Charger',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_ridinghorse.jpg',
        image: 'https://i.imgur.com/ZA8SoVY.jpeg'
      },
      heritageArmor: [
        { name: 'Lion\'s Guard Plate', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_plate09.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' },
        { name: '7th Legion Regalia', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_plate_16.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' }
      ],
      diplomacy: {
        'Orcs': 'Hated Enemies',
        'High Elves': 'Close Allies',
        'Dwarves': 'Blood Brothers'
      },
      timeline: [
        { year: '-5', event: 'The Alliance Expedition crosses the Dark Portal.' },
        { year: '0', event: 'Draenor shatters. The Expedition is trapped.' },
        { year: '26', event: 'The Dark Portal re-opens. Reinforcements arrive.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'Light be with you.' },
        { label: 'Annoyed', text: 'Are you still touching me?' },
        { label: 'Combat', text: 'For the Alliance!' }
      ],
      ultimate: {
        name: 'Call to Arms',
        desc: 'Summon 2 Elite Stormwind Footmen to defend you for 20 sec. They Taunt and Stun enemies. (5m CD)',
        imageUrl: 'https://i.imgur.com/VSTF5p8.jpeg'
      },
      elevatorPitch: ['Reputation Grinding Faster', 'Spirit Buff for Healers', 'PvP Stealth Detection'],
      flavor: {
        language: 'Common',
        diet: 'Bread, Cheese & Ale',
        nemesis: 'The Fel Horde',
        loot: ['Grand Marshal\'s Claymore', 'Quel\'Serrar', 'Lionheart Helm'],
        partner: 'Dwarves (The Shield)',
        mountSpecial: 'Heavy Barding',
        heritageWeapon: 'Stormwind Guard Sword'
      },

      overview: {
        fantasy: 'You are the **Vanguard**. While the humans of Stormwind worried about defias bandits, the humans of Honor Hold held the line against endless legions of demons for twenty years. You are gritty, battle-hardened, and fiercely loyal to the memory of Lothar.\n\nGameplay focuses on **Versatility and Leadership**. You are the glue that holds the Alliance together. Your reputation bonus allows you to unlock crucial gear faster than any other race. You view the Orcs not as noble savages, but as the butchers who destroyed your world once and tried to do it again.',
        systemName: 'Diplomatic Envoys',
        systemDesc: 'Humans gain **+10% Reputation** from all sources. In addition, at Exalted with any faction, you gain a "Commendation" token that can be sent to alts to boost their rep gain by 100%. You are the key to unlocking the secrets of Outland\'s factions.'
      },

      classFantasies: [
        {
          class: 'Warrior',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad',
          title: 'Knight-Captain',
          desc: 'The classic armored soldier. You fight with discipline. "Shield Block" raises a Stormwind crest. "Rallying Cry" uses the horn of Lordaeron. You are the wall against which the Legion breaks.'
        },
        {
          class: 'Paladin',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_paladin.png?4d2aad',
          title: 'Chevalier',
          desc: 'A member of the Silver Hand who stayed behind. Your armor is battered but polished. Your Light is not a gentle heal, but a burning command. You smite demons with the fury of a man who has lost everything but his faith.'
        },
        {
          class: 'Mage',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1',
          title: 'Battle-Mage',
          desc: 'Trained by Khadgar himself. You wear heavy robes and wield staves meant for cracking skulls as well as casting spells. Your magic is practical and destructive—Arcane Explosions to clear trenches, Blizzards to freeze the Fel-march.'
        },
        {
          class: 'Priest',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800',
          title: 'Chaplain',
          desc: 'A battlefield medic. You carry the Light into the darkest pits of Hellfire. Your shields look like stained glass. You keep the morale high when the sky rains fire.'
        },
        {
          class: 'Warlock',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06',
          title: 'Occultist',
          desc: 'Kept on a tight leash by the command. You study the enemy to destroy them. Your minions are bound with heavy iron chains. You are tolerated only because you get results.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Scout',
          desc: 'SI:7 agents operating behind enemy lines. You don\'t dress in flashy leather; you wear camouflage and grit. You sabotage fel-cannons and assassinate enemy commanders.'
        }
      ],

      racials: [
        { name: 'Diplomacy', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_note_02.jpg', desc: 'Reputation gains increased by 10%. The most powerful racial in the game for progression.' },
        { name: 'The Human Spirit', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_divinespirit.jpg', desc: 'Spirit increased by 5%. Great for healers and regeneration.' },
        { name: 'Perception', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_sleep.jpg', desc: 'Active: Dramatically increases stealth detection for 20 sec. (2m CD). No rogue slips past you.' },
        { name: 'Every Man for Himself', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_charm.jpg', desc: 'Removes all movement impairing effects and all effects which cause loss of control of your character. (2m CD). Shared CD with PvP Trinket.' },
        { name: 'Sword & Mace Specialization', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_04.jpg', desc: 'Expertise with Swords and Maces increased by 3.' }
      ],

      locations: {
        start: '**Starting Zone: "Northshire Under Siege"**\nKobolds have tunneled into the abbey, but these aren\'t normal Kobolds—they are corrupted by leaked Fel energy. You must purge the holy grounds and rally the recruits.',
        hub: '**Capital Hub: "Honor Hold" (Hellfire)**\nThe legendary fortress stands strong. It is the central quest hub for the Alliance in Hellfire, offering connections to the Temple of Telhamat and the Dark Portal.',
        outpost: '**Outpost: "Orebor Harborage" (Zangarmarsh)**\nA hilltop refuge donated by the Kurenai, serving as a staging ground for attacks on the naga pumping stations.',
        dungeons: '**Dungeon Ties:**\n**The Shattered Halls:** You go there to kill Kargath Bladefist, the Orc who tortured the Expedition members for years. It is a personal vendetta.'
      },

      campaign: {
        title: "The Legacy of Lothar",
        commander: "Danath Trollbane",
        theme: "Endurance",
        objective: "The Sons of Lothar have held the line for 20 years. Now, with reinforcements from Azeroth, it is time to push back.",
        moments: [
          "**The Path of Glory:** A quest to collect the dog tags of fallen soldiers from the road of bones.",
          "**Breaking the Siege:** Man the cannons and destroy the Fel Reaver besieging Honor Hold.",
          "**Turalyon's Trail:** Following clues that hint at the survival of Turalyon and Alleria."
        ],
        result: "**Unlock: The Valiant's Charge.**\nCompleting the campaign strengthens the **Honor Hold Guards**, replacing the generic NPCs with Elites that can solo doomguards. This anchors **Defense**, ensuring the main hubs are safe from random Legion attacks.",
        foothold: {
          name: "Quest: The First Strike",
          desc: "You don't wait for the Legion to attack. You lead a charge directly into the Legion Front, planting the Alliance banner on the corpse of a Pit Lord to show them that the Lion still has teeth."
        }
      }
    },
    dwarves: {
      id: 'dwarves',
      name: 'Ironforge Dwarves',
      tagline: 'Heart of the Mountain',
      faction: 'Alliance (Explorer\'s League)',
      leader: 'King Magni Bronzebeard',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/879260-dwarf-heritage-armor.jpg',
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_dwarf_male.jpg`} alt="Dwarves" className="w-6 h-6 object-contain" />,
      themeColor: '#f59e0b',
      accentColor: 'text-amber-500',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/47154-ironforge.jpg',

      notableHeroes: ['Magni Bronzebeard', 'Muradin Bronzebeard', 'Brann Bronzebeard', 'Thargas Anvilmar'],
      mount: {
        name: 'Ironforge Ram',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_mountainram.jpg',
        image: 'https://i.imgur.com/hlVGzT6.jpeg'
      },
      heritageArmor: [
        { name: 'Bronzebeard Heritage', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_helmet_146.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' },
        { name: 'Mountain King Plate', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_plate04.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' }
      ],
      diplomacy: {
        'Gnomes': 'Best Friends',
        'Trolls': 'Ancient Rivals',
        'Wildhammer': 'Cousins'
      },
      timeline: [
        { year: '-2500', event: 'Dwarves awaken in Uldaman, born of stone.' },
        { year: '-230', event: 'War of the Three Hammers divides the clans.' },
        { year: '26', event: 'Brann Bronzebeard opens the Dark Portal.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'Wash yer back!' },
        { label: 'Annoyed', text: 'I don\'t drink... water.' },
        { label: 'Combat', text: 'For Khaz Modan!' }
      ],
      ultimate: {
        name: 'Avatar',
        desc: 'Turn to stone for 20 sec, increasing Armor and Damage by 20% and becoming immune to Fear, Snare, and Root.',
        imageUrl: 'https://i.imgur.com/QrzgVVv.jpeg'
      },
      elevatorPitch: ['Stoneform Cleanser', 'Find Treasure Racial', 'Gun Specialization'],
      flavor: {
        language: 'Dwarven',
        diet: 'Thunder Ale & Boar Ribs',
        nemesis: 'Dark Iron Clan',
        loot: ['Ironfoe', 'Dwarven Hand Cannon', 'Sulfuras'],
        partner: 'Gnomes (The Brains)',
        mountSpecial: 'Ram Charge',
        heritageWeapon: 'Mountain King\'s Avatar Axes'
      },

      overview: {
        fantasy: 'You are an **Archaeologist and a Warrior**. While others see Outland as a battlefield, you see it as a treasure trove of Titan artifacts. You are driven by the need to uncover the history of your creation. You are stout, loud, and drink heavily. \n\nGameplay focuses on **Resilience and Discovery**. Stoneform makes you arguably the best PvP race against Rogues and bleed classes. Your "Find Treasure" racial now highlights rare spawns and treasure chests on the minimap.',
        systemName: 'The Explorer\'s Log',
        systemDesc: 'A unique collection tab. You can find "Titan Fragments" in dungeons and open world. Turning these into the Explorer\'s League grants "Dig Site" buffs, allowing you to deal bonus damage in specific zones or uncover hidden vendors.'
      },

      classFantasies: [
        {
          class: 'Hunter',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d',
          title: 'Mountaineer',
          desc: 'The iconic Dwarf class. You patrol the snowy peaks with a bear companion. You favor guns over bows—loud, explosive black powder rifles. Your traps are heavy iron bear-traps.'
        },
        {
          class: 'Warrior',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad',
          title: 'Mountain King',
          desc: 'Avatar of battle. You dual-wield axes or hammers and often shout loud enough to stun enemies. "Thunder Clap" is a stomp that shakes the screen. You are the tank of choice.'
        },
        {
          class: 'Paladin',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_paladin.png?4d2aad',
          title: 'Titan-Forged',
          desc: 'You view the Light through the lens of the Titans—it is order, structure, and law. Your spells look like golden runes. You are a tanky, defensive caster.'
        },
        {
          class: 'Priest',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800',
          title: 'Rune-Priest',
          desc: 'You heal by inscribing warding runes on your allies. Shadow spec deals with the "Curse of Flesh" and ancient earth magic.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Delver',
          desc: 'A dungeon crawler. You don\'t sneak to assassinate; you sneak to bypass traps and find the chest. Combat is dirty fighting—throwing sand, knee-capping, and head-butting.'
        }
      ],

      racials: [
        { name: 'Stoneform', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_unholystrength.jpg', desc: 'Active: Removes Bleed, Poison, and Disease effects. Increases Armor by 10% for 8 sec. (2m CD). The ultimate defensive cooldown.' },
        { name: 'Crack Shot', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_weapon_rifle_01.jpg', desc: 'Crit chance with Guns increased by 1%. (Sorry, Bow users).' },
        { name: 'Frost Resistance', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostward.jpg', desc: 'Frost Resistance increased by 10.' },
        { name: 'Find Treasure', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_coin_02.jpg', desc: 'Allows you to sense treasure chests and rare spawns on the minimap.' },
        { name: 'Mace Specialization', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_mace_01.jpg', desc: 'Expertise with Maces increased by 5.' }
      ],

      locations: {
        start: '**Starting Zone: "Coldridge Valley"**\nA snowy, mountainous region. You fight Troggs—failed titan experiments. It establishes your connection to the earth and the Titans immediately.',
        hub: '**Capital Hub: "Telhamat Excavation" (Hellfire)**\nThe dwarves have set up a massive dig-site behind the Draenei temple, looking for Ogre artifacts.',
        outpost: '**Outpost: "Toshley\'s Station" (Blade\'s Edge)**\nA joint Gnome/Dwarf base. The Dwarves provide the snipers and the stout walls to protect the Gnomish tech.',
        dungeons: '**Dungeon Ties:**\n**Uldaman (Azeroth):** Your holy grail.\n**Auchindoun:** The ring of observance reminds you of Titan structures. You explore it with reverence.'
      },

      campaign: {
        title: "The Disc of Norgannon",
        commander: "Brann Bronzebeard",
        theme: "Discovery",
        objective: "Locate the lost Titan discs rumored to be hidden in the Blade's Edge Mountains.",
        moments: [
          "**The Dig:** A mini-game where you excavate artifacts while defending against Ogres.",
          "**Titan Console:** Solving a puzzle in the Mechanar to download stellar data.",
          "**Brann's Escape:** Escorting the erratic explorer out of a collapsing ruin on a gyrocopter."
        ],
        result: "**Unlock: The Mole Machine.**\nA fast-travel system. Drill directly from Ironforge to Hellfire Peninsula, bypassing the Dark Portal entirely (and the lag).",
        foothold: {
          name: "Quest: Earth-Shaker",
          desc: "You detonate a series of seismic charges to collapse a canyon on a Fel-Reaver. It's not subtle, but it works."
        }
      }
    },
    nightelves: {
      id: 'nightelves',
      name: 'Night Elves',
      tagline: 'Children of the Stars',
      faction: 'Alliance (Cenarion Circle)',
      leader: 'Tyrande Whisperwind',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/879265-night-elf-heritage-armor.jpg',
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_nightelf_female.jpg`} alt="Night Elves" className="w-6 h-6 object-contain" />,
      themeColor: '#7c3aed',
      accentColor: 'text-violet-600',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/136653-darnassus.jpg',

      notableHeroes: ['Tyrande Whisperwind', 'Malfurion Stormrage', 'Maiev Shadowsong', 'Shandris Feathermoon'],
      mount: {
        name: 'Striped Nightsaber',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_blackpanther.jpg',
        image: 'https://i.imgur.com/ZA8SoVY.jpeg'
      },
      heritageArmor: [
        { name: 'Kaldorei Archer', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_chain_04.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' },
        { name: 'Highborne Robes', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_cloth_08.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' }
      ],
      diplomacy: {
        'Tauren': 'Respectful Rivals',
        'Orcs': 'Despised Invaders',
        'Highborne': 'Distrustful'
      },
      timeline: [
        { year: '-10000', event: 'The Sundering. The Night Elves save the world but lose their immortality.' },
        { year: '-7300', event: 'Druids enter the Emerald Dream.' },
        { year: '20', event: 'Battle of Mount Hyjal. Archimonde defeated.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'Elune be with you.' },
        { label: 'Annoyed', text: 'I have a callback involved in a few centuries.' },
        { label: 'Combat', text: 'Tor ilisar\'thera\'nal!' }
      ],
      ultimate: {
        name: 'Starfall',
        desc: 'Call down waves of falling stars, damaging enemies within 30yds for 10 sec. Has a chance to Stun demons.',
        imageUrl: 'https://i.imgur.com/VSTF5p8.jpeg'
      },
      elevatorPitch: ['Shadowmeld Ambush', 'Dodge Tanking', 'Wisp Speed on Death'],
      flavor: {
        language: 'Darnassian',
        diet: 'Moonberries & Kimchi',
        nemesis: 'The Burning Legion',
        loot: ['Rhok\'delar', 'Staff of Jordan', 'Warglaives of Azzinoth'],
        partner: 'Worgen (The Wild)',
        mountSpecial: 'Silent Paws',
        heritageWeapon: 'Moon-Glaive'
      },

      overview: {
        fantasy: 'You are the **Ancient Guardians**. You were the first to fight the Legion, and you will be the last. You revere nature, the moon goddess Elune, and the balance of the world. You are tall, athletic, and savage when provoked. \n\nGameplay focuses on **Agility and Nature**. Your Shadowmeld allows for unique PvP strategies (dropping target, ambush). Your Wisp form makes corpse running (a common occurrence in TBC) much faster.',
        systemName: 'Lunar Cycles',
        systemDesc: 'A passive racial that changes based on the server time. \n**Day (6am-6pm):** +1% Crit Chance (Solar focus). \n**Night (6pm-6am):** +1% Haste (Lunar focus). \nDruids and Priests can toggle this manually via a glyph.'
      },

      classFantasies: [
        {
          class: 'Druid',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_druid.png?a3333f',
          title: 'Druid of the Claw',
          desc: 'The original Druids. You spend most of your time in Bear or Cat form. You hibernate for centuries. Your lore connects you directly to Cenarius.'
        },
        {
          class: 'Hunter',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d',
          title: 'Sentinel',
          desc: 'The elite city guard of Darnassus. You use Glaives (Thown/Fist aesthetics) and bows. Your pet is a Nightsaber or Owl. You specialize in ambushes from Shadowmeld.'
        },
        {
          class: 'Priest',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800',
          title: 'Priestess of Elune',
          desc: 'Warrior-Priests. You wear cloth but fight with the ferocity of a tiger. Your Smite is "Moonfire". Your Holy Nova is "Starshards". You worship the Moon, not the abstract Light.'
        },
        {
          class: 'Warrior',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad',
          title: 'Warden Initiate',
          desc: 'Heavily armored jailors and bounty hunters. You hunt the enemies of the Kaldorei. You use circular glaives and cloaks. "Charge" is a Blink-strike visual.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Shadowstalker',
          desc: 'Assassins who blend perfectly with the night. You don\'t use poisons (mostly); you use the natural toxins of the forest. Subtlety is your preferred spec.'
        }
      ],

      racials: [
        { name: 'Shadowmeld', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_ambush.jpg', desc: 'Active: Slip into the shadows, reducing chance to be detected. Lasts until cancelled or moving. Usable in combat to drop threat (Vanishes). (2m CD).' },
        { name: 'Quickness', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_sprint.jpg', desc: 'Dodge chance increased by 2%. The best tanking racial.' },
        { name: 'Wisp Spirit', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_wispsplode.jpg', desc: 'Transform into a wisp upon death, increasing speed by 50%. You die a lot in TBC, so this is S-Tier.' },
        { name: 'Nature Resistance', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_resistnature.jpg', desc: 'Nature Resistance increased by 10.' },
        { name: 'Elune\'s Touch', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_elunesgrace.jpg', desc: 'Haste increased by 1% at night. Crit increased by 1% during the day.' }
      ],

      locations: {
        start: '**Starting Zone: "Teldrassil"**\nThe World Tree. A massive forest atop a giant stump. It is isolated, beautiful, and slightly corrupted. You must purge the satyrs and furbolgs.',
        hub: '**Capital Hub: "Sylvanaar" (Blade\'s Edge)**\nA miracle of druidism—a lush grove grown instantly in the barren rocks. It serves as the Alliance foothold in the north.',
        outpost: '**Outpost: "Cenarion Refuge" (Zangarmarsh)**\nThe central Druid hub. Night Elves lead the effort to restore the water table and stop Lady Vashj.',
        dungeons: '**Dungeon Ties:**\n**The Botanica:** Kael\'thas is twisting nature in the Netherstorm. It is an affront to everything you believe in. You go to prune the corruption.'
      },

      campaign: {
        title: "The Emerald Dream",
        commander: "Malfurion Stormrage",
        theme: "Restoration",
        objective: "The Emerald Dream is leaking into Outland, but it is the Nightmare version. You must stop it.",
        moments: [
          "**Waking the Sleepers:** Finding Druids of the Claw hibernating in the barrows of Shadowmoon.",
          "**The Nightmare Dragon:** A world boss encounter in Blade's Edge.",
          "**Cleansing the Waters:** A ritual in Zangarmarsh to purify the lakes."
        ],
        result: "**Unlock: The Dreamway.**\nA network of portals connecting the druid groves of Azeroth and Outland. Instant travel to Moonglade, Sylvanaar, and Val'sharah.",
        foothold: {
          name: "Quest: Roots of the World",
          desc: "You plant a sapling from Teldrassil in the Hellfire Peninsula. You must defend it for 10 minutes against waves of Felhounds until it grows into a permanent Ancient of War that guards the road."
        }
      }
    },
    gnomes: {
      id: 'gnomes',
      name: 'Gnomes',
      tagline: 'Small Stature, Big Brains',
      faction: 'Alliance (G-Team)',
      leader: 'High Tinker Mekkatorque',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/879264-gnome-heritage-armor.jpg',
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_gnome_male.jpg`} alt="Gnomes" className="w-6 h-6 object-contain" />,
      themeColor: '#ec4899',
      accentColor: 'text-pink-500',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/47154-ironforge.jpg',

      notableHeroes: ['Gelbin Mekkatorque', 'Millhouse Manastorm', 'Chromie', 'Wilfred Fizzlebang'],
      mount: {
        name: 'Mechanostrider',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_mechastrider.jpg',
        image: 'https://i.imgur.com/hlVGzT6.jpeg'
      },
      heritageArmor: [
        { name: 'G.E.A.R. Elite', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_helmet_47.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' },
        { name: 'Techno-Mage Weave', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_cloth_03.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' }
      ],
      diplomacy: {
        'Dwarves': 'Best Friends (Roommates)',
        'Goblins': 'Inferior Competitors',
        'Humans': 'Tall Friends'
      },
      timeline: [
        { year: '-200', event: 'Gnomes emerge from Mechagon.' },
        { year: '20', event: 'Gnomeregan falls to radiation and Troggs.' },
        { year: '26', event: 'Gnomes invent the Sky-breaker to reach Outland.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'My, you\'re a tall one!' },
        { label: 'Annoyed', text: 'I\'d explain it, but you wouldn\'t understand.' },
        { label: 'Combat', text: 'For Gnomeregan!' }
      ],
      ultimate: {
        name: 'G-Suit Alpha',
        desc: 'Call down a mech suit to pilot for 20s. Changes abilities to "Rocket Punch", "Flame Vent", and "Eject".',
        imageUrl: 'https://i.imgur.com/2oUmx8G.jpeg'
      },
      elevatorPitch: ['Escape Artist (Root Break)', 'Small Hitbox', 'Engineering Bonus'],
      flavor: {
        language: 'Gnomish (Binary)',
        diet: 'Synthetic Nutrient Paste',
        nemesis: 'Thermaplugg',
        loot: ['Hydrocane', 'Manual Crowd Pummeler', 'Arclight Spanner'],
        partner: 'Dwarves (The Muscle)',
        mountSpecial: 'Gyro-Stabilizers',
        heritageWeapon: 'Hyper-Spanner'
      },

      overview: {
        fantasy: 'You are the **Intellect** of the Alliance. While others use muscles or magic, you use science. You are small, hard to target, and incredibly annoying to catch. You possess a boundless optimism and a complete disregard for safety protocols.\n\nGameplay focuses on **Utility and Technology**. Escape Artist is the best anti-root racial in the game. You start with a "Gnomish Army Knife" that includes all profession tools (Pick, Hammer, Spanner, Flint). You view Outland not as a tragedy, but as a fascinating physics anomaly to be studied.',
        systemName: 'Schematic Hunting',
        systemDesc: 'Gnomes can find "Decoded Data Discs" on mechanical mobs (Fel Reavers, Void Walkers). These unlock unique "Schematics" for Engineering, allowing you to craft soulbound gadgets like the "Gravity Well" (Jump pad) or "Portable Mailbox".'
      },

      classFantasies: [
        {
          class: 'Mage',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1',
          title: 'Techno-Mage',
          desc: 'You don\'t cast magic; you calculate it. Fireballs are launched from wrist-mounted flame throwers. Blink is a personal teleportation device. Your water elemental is a "Liquid-Coolant Golem".'
        },
        {
          class: 'Warlock',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06',
          title: 'Nether-Physicist',
          desc: 'Demons are just extra-dimensional energy sources. You capture them with containment fields. Shadow Bolts are "Void-Energy Beams". You treat the Legion like a science experiment gone wrong.'
        },
        {
          class: 'Warrior',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad',
          title: 'Gear-Knight',
          desc: 'You wear steam-powered armor to augment your strength. Your shield is a cogwheel door. "Shield Wall" deploys a literal metal barricade. You are a tiny tank with big guns.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Covert Ops',
          desc: 'Stealth is an optical camouflage cloak. Eviscerate is a scalpel-precision strike. You use gadgets and gizmos to blind, confuse, and dismantle your enemies.'
        }
      ],

      racials: [
        { name: 'Escape Artist', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_trip.jpg', desc: 'Active: Escape the effects of any immobilization or movement speed reduction effect. (1m CD). Cast time: Instant. Global CD.' },
        { name: 'Expansive Mind', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_enchant_essenceeternallarge.jpg', desc: 'Intellect increased by 5%. The best caster racial stat-wise.' },
        { name: 'Arcane Resistance', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_starfire.jpg', desc: 'Arcane Resistance increased by 10.' },
        { name: 'Engineering Specialization', icon: 'https://wow.zamimg.com/images/wow/icons/large/trade_engineering.jpg', desc: 'Engineering skill increased by 15. You are the masters of gadgets.' },
        { name: 'Short-Blade Specialization', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_04.jpg', desc: 'Expertise with Daggers and One-Handed Swords increased by 3.' }
      ],

      locations: {
        start: '**Starting Zone: "Gnomeregan Fallout"**\nYou start outside the gates of your radiated home. You must decontaminate the survivors and develop a cure for the leper gnomes before heading into the world.',
        hub: '**Capital Hub: "Toshley\'s Station" (Blade\'s Edge)**\nThe Gnomish masterpiece. A fully functional tech-fortress with transporters, flying machines, and death rays aimed at the void.',
        outpost: '**Outpost: "Area 52" (Netherstorm)**\nYou have an uneasy truce with the Goblins here. You run the "Mana-Forge Interpretation Center" aimed at shutting down the blood elf engines.',
        dungeons: '**Dungeon Ties:**\n**The Mechanar:** This is your candy store. You want to study the Naaru tech, disassemble it, and figure out how to make it explode.'
      },

      campaign: {
        title: "The Singularity",
        commander: "High Tinker Mekkatorque",
        theme: "Innovation",
        objective: "The Legion's technology is eons ahead of Azeroth. We must bridge the gap.",
        moments: [
          "**Hack the Planet:** A quest to upload a virus into the Legion's command matrix.",
          "**Giant Robot Fight:** You pilot a Fel-Reaver you hacked and fight another Fel-Reaver.",
          "**The Teleporter:** Establishing a stable link between Toshley's Station and Stormwind."
        ],
        result: "**Unlock: The Transporter Network.**\nEngineering teleporters now have a 100% success rate (no malfunctions) and lower cooldown. Anchors **Logistics**.",
        foothold: {
          name: "Quest: Death Ray",
          desc: "You build a giant mirror array in Hellfire Peninsula to focus the light of the burning stars into a single beam that melts a legion gate."
        }
      }
    },

    // --- LEGACY HORDE ---
    orcs: {
      id: 'orcs',
      name: 'Orcs',
      tagline: 'Blood and Thunder',
      faction: 'Horde',
      leader: 'Thrall',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/879266-orc-heritage-armor.jpg',
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_orc_male.jpg`} alt="Orcs" className="w-6 h-6 object-contain" />,
      themeColor: '#b91c1c',
      accentColor: 'text-red-700',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/870233-orgrimmar.jpg',
      hasVariant: true,
      variantName: 'Mag\'har Orcs',

      notableHeroes: ['Thrall', 'Varok Saurfang', 'Rehgar Earthfury', 'Eitrigg'],
      mount: {
        name: 'Timber Wolf',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_blackdirewolf.jpg',
        image: 'https://i.imgur.com/EopPZti.jpeg'
      },
      heritageArmor: [
        { name: 'Blackrock Plate', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_plate_16.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' },
        { name: 'Warsong Harness', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_leather_08.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' }
      ],
      diplomacy: {
        'Trolls': 'Blood Brothers',
        'Humans': 'War Rivals',
        'Blood Elves': 'Useful Tools'
      },
      timeline: [
        { year: '-5', event: 'The First War. Orcs invade Azeroth.' },
        { year: '18', event: 'Thrall reforms the Horde.' },
        { year: '20', event: 'Mount Hyjal. Orcs defend the World Tree.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'Lok\'tar Ogar!' },
        { label: 'Annoyed', text: 'Me not that kind of Orc!' },
        { label: 'Combat', text: 'Blood and Thunder!' }
      ],

      racials: [
        { name: 'Blood Fury', icon: 'https://wow.zamimg.com/images/wow/icons/large/racial_orc_berserkerstrength.jpg', desc: 'Active: Increases Attack Power and Spell Power for 15 sec. (2m CD). The burst cooldown.' },
        { name: 'Hardiness', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_helmet_01.jpg', desc: 'Duration of Stun effects reduced by 15%. The bane of every rogue.' },
        { name: 'Command', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pet_wolf.jpg', desc: 'Damage dealt by pets increased by 5%. Best for Hunters and Warlocks.' },
        { name: 'Axe Specialization', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_axe_01.jpg', desc: 'Expertise with Axes and Fist Weapons increased by 5.' }
      ],

      ultimate: {
        name: 'Might of Go\'el',
        desc: 'Overload with lightning, causing your attacks to chain to nearby enemies for 10 sec and increasing Haste by 20%.',
        imageUrl: 'https://i.imgur.com/LiqeKTS.jpeg'
      },
      elevatorPitch: ['Best Burst Damage', 'Stun Resistance', 'Pet Damage Buff'],
      flavor: {
        language: 'Orcish',
        diet: 'Boar Meat & Cactus Apple',
        nemesis: 'Mannoroth / Humans',
        loot: ['Gorehowl', 'Doomhammer', 'Arcanite Ripper'],
        partner: 'Trolls (The Soul)',
        mountSpecial: 'Spiked Armor',
        heritageWeapon: 'High Warlord\'s Pig Sticker'
      },

      overview: {
        fantasy: 'You are the **Vanguard of the Horde**. You are no longer the bloodthirsty pawns of the Legion, but noble warriors fighting for survival in a world that hates you. You value honor, strength, and the shamanistic traditions of your ancestors. You are green, muscular, and look good in spikey shoulders.\n\nGameplay focuses on **Burst and Resilience**. Blood Fury makes you a terrifying opponent in both PvP and PvE burst windows. Hardiness allows you to shrug off crowd control. You are the race that defines the Horde aesthetic.',
        systemName: 'Blood Oath',
        systemDesc: 'Upon reaching level 70, you can swear a "Blood Oath" to a specific clan (Frostwolf, Warsong, Shattered Hand). This grants a unique tabard and a passive bonus (e.g., Frostwolf = +Stamina, Warsong = +Run Speed).'
      },

      classFantasies: [
        {
          class: 'Warrior',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad',
          title: 'Grunt / Kor\'kron',
          desc: 'The frontline infantry. You favor axes and massive plate armor. "Charge" is a roar of battle. You are the wall that protects the squishy casters.'
        },
        {
          class: 'Shaman',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62',
          title: 'Farseer',
          desc: 'Spiritual leaders who guide the Horde. You summon wolves and channel lightning. Your totems are simple, rugged logs and stones.'
        },
        {
          class: 'Warlock',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06',
          title: 'Shadow Council Remnant',
          desc: 'Practitioners of the dark arts who now serve the warchief (carefully). You wield the fel magic that destroyed your home world, hoping to use it against the Legion.'
        },
        {
          class: 'Hunter',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d',
          title: 'Beastmaster',
          desc: 'You bond with the wolves, boars, and windserpents of Durotar. You are a tracker of the barrens, living off the land.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Shattered Hand',
          desc: 'Spies and assassins of the New Horde. You use poisons and stealth to eliminate threats before they reach Orgrimmar. Subtlety is your art.'
        }
      ],

      locations: {
        start: '**Starting Zone: "Valley of Trials"**\nA rite of passage. You wake up in the dusty canyon of Durotar and must prove your worth by slaying boars, scorpids, and the burning blade.',
        hub: '**Capital Hub: "Thrallmar" (Hellfire Peninsula)**\nThe first major Horde fortress in Outland. It represents the New Horde returning to their homeworld, not as conquerors, but as liberators.',
        outpost: '**Outpost: "Stonebreaker Hold" (Terokkar)**\nA fortress holding the line against the Arakkoa and the Alliance of Allerian Stronghold.',
        dungeons: '**Dungeon Ties:**\n**Hellfire Ramparts:** Slaying the Fel Orcs who dishonor your heritage. It is a sombre duty to put down your corrupted brethren.'
      },

      campaign: {
        title: "Honor of the Horde",
        commander: "Thrall",
        theme: "Redemption",
        objective: "Prove that the Orcs are more than just monsters.",
        moments: [
          "**The Mag'har Reunion:** Witnessing Thrall meet his grandmother in Nagrand.",
          "**Saurfang's Charge:** Fighting alongside High Overlord Saurfang at the Dark Portal.",
          "**The Cipher of Damnation:** Stopping the Shadow Council from destoying the world (again)."
        ],
        result: "**Unlock: The Kor'kron Guard.**\nReplaces generic guards with elite Kor'kron visuals. Grants access to the 'Warchief's Command' board for daily high-yield quests.",
        foothold: {
          name: "Quest: Victory or Death",
          desc: "You challenge a Fel Orc Warlord to single combat (Mak'gora) in the middle of a battlefield. Winning buffs nearby Horde troops."
        }
      },

      // --- VARIANT DATA: MAG'HAR ORCS ---
      variantData: {
        name: "Mag'har Orcs",
        hasVariant: true,
        tagline: "The Uncorrupted",
        leader: "Greatmother Geyah",
        heroImage: "https://wow.zamimg.com/uploads/screenshots/normal/762512-maghar-orc-heritage-armor.jpg",
        icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_orc_female.jpg`} alt="Mag'har" className="w-6 h-6 object-contain" />,
        themeColor: '#78350f', // Brown
        accentColor: 'text-amber-700',
        capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/106093-garadar.jpg',

        notableHeroes: ['Greatmother Geyah', 'Garrosh Hellscream', 'Jorin Deadeye', 'Dranosh Saurfang'],
        mount: {
          name: 'Nagrand Talbuk',
          icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_mount_talbukmount.jpg',
          image: 'https://i.imgur.com/EopPZti.jpeg' // Using Orc mount as placeholder/shared if not specified
        },
        heritageArmor: [
          { name: 'Warsong Heritage', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_axe_02.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' },
          { name: 'Frostwolf Wolfshead', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_helmet_01.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' }
        ],
        diplomacy: { 'Green Orcs': 'Cautious Kin', 'Kurenai': 'Hated Enemies' },

        racials: [
          { name: 'Ancestral Spirit', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_divinespirit.jpg', desc: 'Spirit increased by 5%. (Passive Health/Mana Regen)' },
          { name: 'Nagrand Survivor', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_resistnature.jpg', desc: 'Nature and Shadow Resistance increased by 10.' },
          { name: 'Plainswalker', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_sprint.jpg', desc: 'Movement speed increased by 5% while outdoors.' },
          { name: 'Pureblood Endurance', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_healthfunnel.jpg', desc: 'Active: Increases maximum health by 10% for 20 sec. (3m CD). The Mag\'har are survivors.' }
        ],

        ultimate: {
          name: 'Might of the Warsong',
          desc: 'Unleash a terrifying howl, increasing Haste by 20% for 15s for the party.',
          imageUrl: 'https://i.imgur.com/LiqeKTS.jpeg'
        },

        elevatorPitch: ['Start at Level 58', 'Survival Racials', 'Garrosh Storyline'],

        flavor: {
          language: 'Orcish (Old Dialect)',
          diet: 'Talbuk Stag',
          nemesis: 'Kil\'jaeden',
          loot: ['Gorehowl', 'Ancestral Beads', 'Talbuk Mounts'],
          partner: 'Uncorrupted (Pure)',
          mountSpecial: 'Riding Crop',
          heritageWeapon: 'Warsong Axe'
        },

        overview: {
          fantasy: 'You are the **Uncorrupted**. While your kin drank the blood of Mannoroth and fell to the Legion, you remained in Nagrand, hidden by the Red Pox that shielded you from the warlock\'s gaze. You are taller, prouder, and unbroken. You view the "Green Skins" with a mix of pity and suspicion. You are here to save them from themselves.\n\n**Starting Level: 58.** You begin in Garadar, Greatmother Geyah\'s stronghold. You are immediately thrust into the politics of a broken Outland, serving as the bridge between the Old Horde ideals and Thrall\'s New Horde.',
          systemName: 'Ancestral Rites',
          systemDesc: 'Visit the Throne of the Elements to receive daily blessings from the Elemental Furies.'
        },

        classFantasies: [
          { class: 'Warrior', icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad', title: 'Warsong Outrider', desc: 'Savage fighters who forgo heavy plate for leather and mail aesthetics (transmog). They wield axes with brutal efficiency.' },
          { class: 'Hunter', icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d', title: 'Wolf-Brother', desc: 'You hunt alongside the frostwolves of Nagrand. Your traps are primitive snares.' },
          { class: 'Shaman', icon: 'https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62', title: 'Elementalist', desc: 'The true practitioners of shamanism, taught by Drek\'Thar and Geyah. Your totems are unblemished wood.' },
          { class: 'Rogue', icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1', title: 'Shattered Hand', desc: 'Survivors of the arena. You use dirty tactics because survival is the only rule.' }
        ],

        locations: {
          start: '**Starting Zone: "Garadar" (Level 58)**\nA protected enclave in Nagrand. You must prove yourself to Garrosh Hellscream and convince him that he is not destined to repeat his father\'s mistakes.',
          hub: '**Capital Hub: "Garadar"**\nThe main base of operations.',
          outpost: '**Outpost: "Mag\'har Post" (Hellfire)**\nA small foothold established to greet the dark portal arrivals.',
          dungeons: '**Dungeon Ties:**\n**Hellfire Ramparts:** You are sickened by the Fel Orcs. It is a mercy killing.'
        },

        campaign: {
          title: "Result of the Sin",
          commander: "Garrosh Hellscream",
          theme: "Identity",
          objective: "Reclaim the honor of the Orcish race.",
          moments: [
            "**Gorehowl:** A quest to retrieve Grom's axe from Prince Malchezaar and return it to his son.",
            "**The Pilgrimage:** Escort Thrall to see his grandmother.",
            "**Kil'sorrow:** Retake the ancestral burial grounds from the Shadow Council."
          ],
          result: "**Unlock:** Mag'har Heritage Armor.",
          foothold: { name: "Quest: Olive Branch", desc: "Aid Thrall's Horde." }
        },
        timeline: [{ year: '-10', event: 'Geyah establishes the quarantine.' }, { year: '26', event: 'Thrall arrives in Nagrand.' }],
        voiceLines: [
          { label: 'Greeting', text: 'Strength and Honor.' },
          { label: 'Combat', text: 'For the Mag\'har!' }
        ]
      }
    },
    trolls: {
      id: 'trolls',
      name: 'Darkspear Trolls',
      tagline: 'Da Voodoo Shuffle',
      faction: 'Horde (Darkspear)',
      leader: 'Vol\'jin',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/879268-troll-heritage-armor.jpg',
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_troll_male.jpg`} alt="Trolls" className="w-6 h-6 object-contain" />,
      themeColor: '#059669',
      accentColor: 'text-emerald-600',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/870233-orgrimmar.jpg', // Echo Isles

      notableHeroes: ['Vol\'jin', 'Rokhan', 'Zen\'Tabra', 'Master Gadrin'],
      mount: {
        name: 'Emerald Raptor',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_raptor.jpg',
        image: 'https://i.imgur.com/FIn0stS.jpeg'
      },
      heritageArmor: [
        { name: 'Darkspear Pride', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_mask_02.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' },
        { name: 'Shadow Hunter Faulds', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_pants_leather_13.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' }
      ],
      diplomacy: {
        'Orcs': 'Blood Brothers',
        'Night Elves': 'Ancient Enemies',
        'Zandalari': 'Distant Cousins'
      },
      timeline: [
        { year: '-20', event: 'Darkspears join the Horde.' },
        { year: '20', event: 'Zalazane betrays the tribe.' },
        { year: '26', event: 'Vol\'jin leads the charge into Outland.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'Stay away from da Voodoo!' },
        { label: 'Annoyed', text: 'I kill two dwarfs in da morning...' },
        { label: 'Combat', text: 'Taz\'dingo!' }
      ],
      ultimate: {
        name: 'Big Bad Voodoo',
        desc: 'Channel to make all party members invulnerable for 6 sec. You cannot move, but you look extremely cool doing it.',
        imageUrl: 'https://i.imgur.com/FIn0stS.jpeg'
      },
      elevatorPitch: ['Haste Cooldown', 'Beast Slaying', 'HP Regen in Combat'],
      flavor: {
        language: 'Zandali',
        diet: 'Fish & Raw Meat',
        nemesis: 'Aman\'Thul',
        loot: ['Zin\'rokh, Destroyer of Worlds', 'Ancient Amani Longbow', 'Voodoo Doll'],
        partner: 'Orcs (The Might)',
        mountSpecial: 'Raptor Leash',
        heritageWeapon: 'Shadow Hunter Glaive'
      },

      overview: {
        fantasy: 'You are the **Spiritual Heart of the Horde**. While Orcs are the muscle and Undead are the brains, you are the soul. You practice ancient voodoo, commune with the Loa spirits, and speak with a Jamaican accent that never gets old. You are agile, lanky, and look fantastic doing flips.\n\nGameplay focuses on **Speed and Regeneration**. "Berserking" is arguably the best DPS racial in the game for casters and hunters. Your regeneration allows you to sustain through rot damage in raids.',
        systemName: 'Loa Worship',
        systemDesc: 'Visit the shrines in Zangarmarsh to choose a Loa to worship (Bwonsamdi, Gonk, Pa\'ku). This grants a permanent passive buff (e.g., Gonk = +Move Speed, Bwonsamdi = Life Steal).'
      },

      classFantasies: [
        {
          class: 'Hunter',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d',
          title: 'Shadow Hunter',
          desc: 'A mix of marksmanship and voodoo. You favor bows and thrown spears. You commune with the Loa. Your "Arcane Shot" looks like a spiritual bolt.'
        },
        {
          class: 'Priest',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800',
          title: 'Witch Doctor',
          desc: 'You heal with spiritual wards and hexes. "Shadow Word: Pain" is a voodoo curse. "Renew" is a mending spirit. You are not a holy man; you are a dealer of spirits.'
        },
        {
          class: 'Mage',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1',
          title: 'Zandalari Scholar',
          desc: 'Users of ancient troll magic. Arcane is "Mojo" and Fire is "Tiki Flame". You carry the knowledge of the first empires.'
        },
        {
          class: 'Shaman',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62',
          title: 'Hexxer',
          desc: 'You place totems that are shrunken heads on sticks. Your "Hex" spell is your signature move (turns enemy into a frog). New visuals for all totems.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Headhunter',
          desc: 'Jungle stalkers. You use poisons derived from dart frogs. You are the only race that naturally squats when idle.'
        }
      ],

      racials: [
        { name: 'Berserking', icon: 'https://wow.zamimg.com/images/wow/icons/large/racial_troll_berserk.jpg', desc: 'Active: Increases your attack and casting speed by 10% to 30%. At full health the speed increase is 10%, up to 30% if you are badly hurt. (3m CD).' },
        { name: 'Regeneration', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_regenerate.jpg', desc: 'Health regeneration rate increased by 10%. 10% of total Health regeneration may continue during combat.' },
        { name: 'Beast Slaying', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_monsterclaw_04.jpg', desc: 'Damage dealt versus Beasts and Dragonkin increased by 5%. Useful in many TBC raids.' },
        { name: 'Throwing/Bow Specialization', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_weapon_bow_01.jpg', desc: 'Crit chance with Thrown weapons and Bows increased by 1%.' }
      ],

      locations: {
        start: '**Starting Zone: "Echo Isles"**\nReclaim your home from the traitor Zalazane (again). It is a tropical paradise filled with raptors and tigers.',
        hub: '**Capital Hub: "Zabra\'jin" (Zangarmarsh)**\nA major Darkspear outpost hidden in the marsh mushrooms. It is a center for voodoo studies and the fight against the Naga.',
        outpost: '**Outpost: "Swamprat Post" (Zangarmarsh)**\nA forward scout camp observing the Naga pumping stations. Also, the best place to get mushroom brew.',
        dungeons: '**Dungeon Ties:**\n**The Underbog:** Harvesting giant fungi for potent voodoo brews. The Sporeggar are your natural allies.'
      },

      campaign: {
        title: "Shadows of the Loa",
        commander: "Vol'jin",
        theme: "Spirituality",
        objective: "The Loa are silent in Outland. You must find them.",
        moments: [
          "**Vol'jin's Gambit:** Helping Vol'jin negotiate with the Shattered Hand.",
          "**The Hex of Jinx:** A humorous quest chain involving a cursed raptor.",
          "**Zul'Aman:** The Amani trolls are up to something. You must investigate the ghostlands."
        ],
        result: "**Unlock: The Spirit Mask.**\nA cosmetic helm transmog that works on top of any armor. Also unlocks a 'Voodoo Dance' toy.",
        foothold: {
          name: "Quest: Bad Voodoo",
          desc: "You cleanse a cursed shrine in Terokkar Forest by defeating waves of possessed spirits."
        }
      }
    },
    tauren: {
      id: 'tauren',
      name: 'Tauren',
      tagline: 'Walk with the Earth Mother',
      faction: 'Horde (Thunder Bluff)',
      leader: 'Cairne Bloodhoof',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/879267-tauren-heritage-armor.jpg',
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_tauren_male.jpg`} alt="Tauren" className="w-6 h-6 object-contain" />,
      themeColor: '#78350f',
      accentColor: 'text-amber-900',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/60656-thunder-bluff.jpg',

      notableHeroes: ['Cairne Bloodhoof', 'Baine Bloodhoof', 'Hamuul Runetotem', 'Magatha Grimtotem'],
      mount: {
        name: 'Great Brown Kodo',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_kodo_03.jpg',
        image: 'https://i.imgur.com/QrzgVVv.jpeg'
      },
      heritageArmor: [
        { name: 'Chieftain\'s Headdress', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_helmet_15.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' },
        { name: 'Totemic Harness', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_leather_09.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' }
      ],
      diplomacy: {
        'Night Elves': 'Respectful Allies',
        'Centaur': 'Hated Enemies',
        'Orcs': 'Brothers in Arms'
      },
      timeline: [
        { year: '20', event: 'Tauren join the Horde.' },
        { year: '25', event: 'Cairne helps found Orgrimmar.' },
        { year: '26', event: 'Tauren Druids begin healing the Plaguelands.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'May the Eternal Sun shine upon thee.' },
        { label: 'Annoyed', text: 'Moo? Are you happy now?' },
        { label: 'Combat', text: 'For the Elders!' }
      ],
      ultimate: {
        name: 'Chieftain\'s Charge',
        desc: 'Charge forward, knocking back all enemies in your path and dealing Nature damage. Grants a shield based on enemies hit.',
        imageUrl: 'https://i.imgur.com/QrzgVVv.jpeg'
      },
      elevatorPitch: ['AoE Stun', '5% More Health', 'Herbalism Bonus'],
      flavor: {
        language: 'Taurahe',
        diet: 'Corn & Grain',
        nemesis: 'Magatha Grimtotem',
        loot: ['Totem of Life', 'Halberd of Smiting', 'Thunder Bluff Tabard'],
        partner: 'Night Elves (Druidism)',
        mountSpecial: 'Heavy Cargo Bags',
        heritageWeapon: 'Ancestral Totem'
      },

      overview: {
        fantasy: 'You are the **Peacekeepers**. Amidst the savagery of the Orcs and the darkness of the Forsaken, you stand for balance. You are massive, calm, and incredibly dangerous when provoked. You view the Burning Legion as a corruption of nature itself, a weed that must be pulled.\n\nGameplay focuses on **Durability and Control**. "War Stomp" is the best AoE stun in the game for tanks and PvP. Your increased health pool makes you the natural choice for tanks. Plus, you pick flowers faster than anyone else.',
        systemName: 'Rites of the Earth',
        systemDesc: 'Participate in the "Great Hunt" seasonal event. Hunt down legendary beasts in Nagrand and Blade\'s Edge to earn trophies and materials for special leatherworking recipe sets.'
      },

      classFantasies: [
        {
          class: 'Warrior',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad',
          title: 'Brave',
          desc: 'Protectors of the tribes. You wield massive totems (maces) and shields. Your "Taunt" is a bellow that shakes the ground.'
        },
        {
          class: 'Druid',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_druid.png?a3333f',
          title: 'Guardian',
          desc: 'Keepers of the balance. Your Bear form matches your natural bulk. You are the only Horde race that remembers the old ways of Cenarius.'
        },
        {
          class: 'Shaman',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62',
          title: 'Spirit Walker',
          desc: 'You communicate with the ancestors. Your "Ghost Wolf" is a Spirit Kodo. Your chain heal looks like flowing water.'
        },
        {
          class: 'Hunter',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d',
          title: 'Longwalker',
          desc: 'Scouts who travel the length of Kalimdor. You use guns and heavy crossbows. Your pet is a plainstrider or cougar.'
        }
      ],

      racials: [
        { name: 'War Stomp', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warstomp.jpg', desc: 'Active: Stuns up to 5 enemies within 8 yds for 2 sec. (2m CD). Cast time: 0.5 sec.' },
        { name: 'Endurance', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_endurance.jpg', desc: 'Total Health increased by 5%. The tanking racial.' },
        { name: 'Cultivation', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_flower_02.jpg', desc: 'Herbalism skill increased by 15. You pick herbs faster than normal.' },
        { name: 'Nature Resistance', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_resistnature.jpg', desc: 'Nature Resistance increased by 10.' }
      ],

      locations: {
        start: '**Starting Zone: "Red Cloud Mesa"**\nA peaceful plateau. You hunt the plainstriders and learn the ways of the Earth Mother before descending into Bloodhoof Village.',
        hub: '**Capital Hub: "Thunderlord Stronghold" (Blade\'s Edge)**\nTechnically Orcish, but heavily populated by Tauren seeking to heal the land. A beacon of life in a desolate canyon.',
        outpost: '**Outpost: "Cenarion Refuge" (Zangarmarsh)**\nLeading the effort to categorize and protect the strange flora of Outland. You work closely with the Night Elves here.',
        dungeons: '**Dungeon Ties:**\n**The Botanica:** The ultimate perversion of nature. You must cleanse the labs of Kael\'thas\'s twisted experiments.'
      },

      campaign: {
        title: "The Great Hunt",
        commander: "Cairne Bloodhoof",
        theme: "Harmony",
        objective: "Restore the balance of nature to Outland.",
        moments: [
          "**The White Kodo:** A legendary beast has been spotted in Nagrand.",
          "**Cleansing the Pools:** Determine why the water elements in Outland are so angry.",
          "**Magatha's Plot:** Uncover a Grimtotem conspiracy within the Cenarion Expedition."
        ],
        result: "**Unlock: The Totem Cloak.**\nA cosmetic back item (huge totem) that replaces your cloak. Anchors **Nature**.",
        foothold: {
          name: "Quest: Seeds of Life",
          desc: "You plant a sacred tree in the middle of Hellfire Peninsula, creating a permanent oasis zone."
        }
      }
    },
    undead: {
      id: 'undead',
      name: 'Forsaken',
      tagline: 'Death to the Scourge',
      faction: 'Horde (Undercity)',
      leader: 'Sylvanas Windrunner',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/942704-forsaken-heritage-armor.jpg',
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/race_undead_female.jpg`} alt="Undead" className="w-6 h-6 object-contain" />,
      themeColor: '#581c87',
      accentColor: 'text-purple-900',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/870233-orgrimmar.jpg', // Undercity

      notableHeroes: ['Sylvanas Windrunner', 'Nathanos Blightcaller', 'Grand Apothecary Putress', 'Lilian Voss'],
      mount: {
        name: 'Red Skeletal Warhorse',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_undeadhorse.jpg',
        image: 'https://i.imgur.com/FK17C5m.jpeg'
      },
      heritageArmor: [
        { name: 'Deathguard Mail', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_chain_11.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' },
        { name: 'Apothecary Robes', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_cloth_22.jpg', image: 'https://wow.zamimg.com/uploads/screenshots/normal/309995.jpg' }
      ],
      diplomacy: {
        'Blood Elves': 'Close Allies',
        'Humans': 'Traitorous Scum',
        'Orcs': 'Tools to an End'
      },
      timeline: [
        { year: '20', event: 'The Scourge overrun Lordaeron.' },
        { year: '22', event: 'Sylvanas breaks free from the Lich King.' },
        { year: '26', event: 'The Forsaken deploy the New Plague.' }
      ],
      voiceLines: [
        { label: 'Greeting', text: 'We are the Forsaken.' },
        { label: 'Annoyed', text: 'I don\'t have all day.' },
        { label: 'Combat', text: 'Death to the Scourge!' }
      ],
      ultimate: {
        name: 'Dark Ranger\'s Curse',
        desc: 'Silence all enemies in an area and deal Shadow damage over time. Any enemy that dies under this effect raises as a skeletal minion.',
        imageUrl: 'https://i.imgur.com/FK17C5m.jpeg'
      },
      elevatorPitch: ['Charm/Fear Break', 'Cannibalize Regen', 'Underwater Breathing'],
      flavor: {
        language: 'Gutterspeak',
        diet: 'Rotten Humanoid',
        nemesis: 'The Lich King',
        loot: ['Plaguebringer', 'Deathcharger\'s Reins', 'Royal Apothecary Potion'],
        partner: 'Blood Elves (Outcast Alliance)',
        mountSpecial: 'Preserved Saddle',
        heritageWeapon: 'Blight-Spreader'
      },

      overview: {
        fantasy: 'You are the **Vengeful Dead**. You are not evil, but you are pragmatic. You have clawed your way back from the grave to exact revenge on the Lich King who enslaved you and the living who despised you. You are ruthless, brilliant, and chemically unstable.\n\nGameplay focuses on **Survival and Control**. "Will of the Forsaken" is the most famous PvP racial for a reason. "Cannibalize" drastically reduces downtime while leveling. You are the masters of Shadow damage.',
        systemName: 'The Royal Apothecary',
        systemDesc: 'Collect samples from demons and beasts to craft "Unstable Concoctions". These are unique consumables that grant powerful buffs but have side effects (e.g., +Spell Power but -Stamina).'
      },

      classFantasies: [
        {
          class: 'Priest',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800',
          title: 'Cult of Forgotten Shadow',
          desc: 'You believe in the balance of Light and Shadow, leaning heavily into Shadow. You preach that the Light abandoned you.'
        },
        {
          class: 'Rogue',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1',
          title: 'Deathstalker',
          desc: 'Assassins of the Royal Apothecary Society. You use chemical weapons and forgotten plagues to melt your targets.'
        },
        {
          class: 'Mage',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1',
          title: 'Necromancer',
          desc: 'You summon cold frost and skeletal minions (water elemental reskin). You study the magic that raised you to better understand your existence.'
        },
        {
          class: 'Warlock',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06',
          title: 'Apothecary',
          desc: 'You see demons as test subjects. Your curses are diseases and your Shadow Bolts are vials of blight.'
        },
        {
          class: 'Warrior',
          icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad',
          title: 'Deathguard',
          desc: 'The skeletal elite. You feel no pain and no fear. You replace your missing limbs with rusted iron.'
        }
      ],

      racials: [
        { name: 'Will of the Forsaken', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_raisedead.jpg', desc: 'Active: Removes any Charm, Fear and Sleep effect. (2m CD). Shares CD with PvP Trinket.' },
        { name: 'Cannibalize', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_racial_cannibalize.jpg', desc: 'Regenerates 7% of total health every 2 sec for 10 sec. Works only on Humanoid or Undead corpses.' },
        { name: 'Underwater Breathing', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_demonbreath.jpg', desc: 'Underwater breath lasts 300% longer. Useful for exploration.' },
        { name: 'Shadow Resistance', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_antishadow.jpg', desc: 'Shadow Resistance increased by 10.' }
      ],

      locations: {
        start: '**Starting Zone: "Deathknell"**\nWake up in a crypt and shake off the rigor mortis. Prove your loyalty to the Dark Lady by clearing out the mindless Scourge.',
        hub: '**Capital Hub: "The Rotting Reach" (Hellfire)**\nA new forward camp established by the Apothecary Society to test the effectiveness of the Blight on demons.',
        outpost: '**Outpost: "Falcon Watch" (Hellfire Peninsula)**\nA major Blood Elf hub, but the Forsaken have a dark basement there where they conduct... experiments.',
        dungeons: '**Dungeon Ties:**\n**Shadow Labyrinth:** Investigating the dark magic of the Cabal to see if it can be repurposed.'
      },

      campaign: {
        title: "Vengeance for Lordaeron",
        commander: "Sylvanas Windrunner",
        theme: "Revenge",
        objective: "Develop the ultimate plague to wipe out the Scourge.",
        moments: [
          "**The New Plague:** Gather ingredients from the mushroom forests of Zangarmarsh.",
          "**Putress's Experiments:** Test the new strain on the Fel Orcs of Hellfire Citadel.",
          "**The Traitor:** Hunt down a dreadlord who has infiltrated the ranks."
        ],
        result: "**Unlock: The Banshee's Wail.**\nAn active ability that fears nearby critters. Purely cosmetic but fun.",
        foothold: {
          name: "Quest: A Perfect Strain",
          desc: "You unleash a test run of the plague on a legion encampment. The results are... horrifyingly effective."
        }
      }
    },
    shendralar: {
      id: 'shendralar', name: 'Shen\'dralar', tagline: 'The Arcane Legacy', faction: 'Alliance', leader: 'Archmage Mordent Evenshade',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/879265-night-elf-heritage-armor.jpg', // Placeholder
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/spell_nature_wispsplode.jpg`
      } alt="Shen'dralar" className="w-6 h-6 object-contain" />,
      themeColor: '#7c3aed', accentColor: 'text-violet-500',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/136653-darnassus.jpg', // Placeholder
      racials: [
        { name: 'Phase Shift', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_blink.jpg', desc: 'Shift partially into the arcane realm, reducing damage by 20% and increasing speed by 40% for 4 sec. (2m CD). Attacking breaks this effect.' },
        { name: 'Highborne Legacy', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_magicalsentry.jpg', desc: 'Intellect increased by 2%. You are the inheritors of the original arcane empire.' },
        { name: 'Arcane Resistance', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_starfire.jpg', desc: 'Arcane Resistance increased by 10. Millennia of exposure has hardened your form.' },
        { name: 'Scholar of the Ancients', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_book_09.jpg', desc: '+10 Enchanting and Inscription skill. You remember the world before it was broken.' }
      ],
      ultimate: { name: 'Mana Bomb', desc: 'Detonate your mana pool to deal massive Arcane damage to enemies in a radius.', imageUrl: '' },
      elevatorPitch: ['Intellect Buff', 'Damage Reduction CD', 'Arcane Mastery'],
      flavor: {
        language: 'Thalassian (Ancient Dialect)',
        diet: 'Mana Crystals / Wine',
        nemesis: 'Prince Tortheldrin',
        loot: ['Quel\'Serrar', 'Key to the City', 'Libram of Focus'],
        partner: 'Night Elves (Uneasy Alliance)',
        mountSpecial: 'Arcane Drift',
        heritageWeapon: 'Highborne Staff'
      },
      overview: {
        fantasy: 'Locked away within the Eldre\'Thalas for ten thousand years, the Shen\'dralar are the last intact remnant of the Highborne empire. While their cousins in Silvermoon embraced the sun, and the Kaldorei embraced the moon, the Shen\'dralar clung to the pure, volatile power of the Arcane.\n\nSustained by the demon Immol\'thar, they maintained their immortality at a terrible cost. Now, with their power source gone and their Prince fallen to madness, they face a choice: wither into nothingness, or offer their unparalleled mastery of magic to a world that fears them. Under Archmage Mordent Evenshade, they have emerged from the shadows of Feralas, seeking sanctuary with Tyrande Whisperwind. The Burning Legion marches on Hyjal, and for the first time in millennia, the Night Elves are desperate enough to accept the Highborne back into the fold.',
        systemName: 'The Athenaeum',
        systemDesc: 'As a master of the Shen\'dralar, you are tasked with recovering the lost knowledge of your people. Locate ancient **Librams** scattered across the world—from the ruins of Dire Maul to the libraries of Karazhan. Returning these texts to the Athenaeum unlocks unique cosmetic enchants, powerful trinkets, and "Ancient" rank spells that differ visually from standard magic.'
      },
      classFantasies: [
        { class: 'Mage', icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1', title: 'Arcanist Supreme', desc: 'You do not study magic; you are made of it. Your spells are not mere incantations but commands spoken in the language of the Titans.' },
        { class: 'Warlock', icon: 'https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06', title: 'Binder', desc: 'For centuries, you kept a pit lord bound to your will. Lesser demons are nothing but batteries to be drained and discarded.' },
        { class: 'Priest', icon: 'https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800', title: 'Confessor', desc: 'You preach the dogma of Queen Azshara\'s golden age, weaving shadow and light to keep the lower castes in line.' },
        { class: 'Warrior', icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad', title: 'Eldre\'Thalas Guard', desc: 'Equipped with ancient enchanted plate, you are the unbreakable wall that protected the library city while the world burned.' },
        { class: 'Rogue', icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?953493', title: 'Spellblade', desc: 'A silent assassin trained to hunt mage-slayers, using blink-strikes and anti-magic poisons.' }
      ],
      locations: {
        start: '**Starting Zone: "Feralas" (Level 58)**\nYour journey begins in the chaos of evacuation. Prince Tortheldrin has been slain, and the remaining energy in Dire Maul is fading. You must rally the survivors, secure ancient texts before looting ogres destroy them, and march to the outskirts of Feathermoon Stronghold to negotiate your survival.',
        hub: '**Capital Hub: "Feathermoon Stronghold"**\nShandris Feathermoon has grudgingly allowed your people to set up a refugee camp on the shores of Sardor Isle. It is a place of high tension, where Sentinel guards watch your every move, waiting for a reason to execute you as traitors.',
        outpost: '**Outpost: "Tower of Estalan"**\nA forward operating base in the Feralas wilderness, where Shen\'dralar arcanists are attempting to create a new, clean mana source to curb their addiction.',
        dungeons: '**Dungeon Ties: Dire Maul**\nReturning to your ruined city is a tragic necessity. You will be sent back to purge the remaining demons, put down the restless spirits of your kin, and recover the Librams of Focus, Rapidity, and Protection.'
      },
      campaign: {
        title: 'The Long Exile',
        theme: 'Redemption & Survival',
        objective: 'Prove your loyalty to the Alliance without losing your soul.',
        moments: ['The Evacuation of Eldre\'Thalas', 'Audience with the High Priestess', 'The Defense of Hyjal'],
        commander: 'Archmage Mordent Evenshade',
        foothold: { name: 'Feathermoon Refugee Camp', desc: 'A tent city of silk and magic, surrounded by suspicious Sentinels.' },
        result: 'Sanctuary Granted'
      },
      notableHeroes: ['Archmage Mordent Evenshade', 'Prince Tortheldrin (Deceased)', 'Estalan'],
      mount: { name: 'Arcane Saber', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_blackpanther.jpg', image: 'https://i.imgur.com/djNc5sr.jpeg' },
      heritageArmor: [{ name: 'Highborne Regalia', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_cloth_03.jpg', image: '' }],
      diplomacy: { 'Night Elves': 'Distrusted', 'Blood Elves': 'Rivals', 'Humans': 'Curious' },
      timeline: [{ year: '-10,000', event: 'The Sundering. Eldre\'Thalas sealed.' }, { year: '26', event: 'Tortheldrin falls. The Exile begins.' }],
      voiceLines: [{ label: 'Greeting', text: 'The arcane is eternal.' }, { label: 'Combat', text: 'For the Highborne!' }]
    },
    foresttrolls: {
      id: 'foresttrolls', name: 'Revantusk Trolls', tagline: 'Vengeance of the Amani', faction: 'Horde', leader: 'Elder Torntusk',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/879268-troll-heritage-armor.jpg', // Placeholder
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/ability_racial_berserker.jpg`} alt="Forest Trolls" className="w-6 h-6 object-contain" />,
      themeColor: '#166534', accentColor: 'text-green-700',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/870233-orgrimmar.jpg', // Placeholder
      racials: [
        { name: 'Berserking', icon: 'https://wow.zamimg.com/images/wow/icons/large/racial_troll_berserk.jpg', desc: 'Increases attack and casting speed by 10% to 30%, depending on health lost. Lasts 10 sec. (3m CD)' },
        { name: 'Forest Regeneration', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_regenerate.jpg', desc: 'Health regeneration rate increased by 10%. 10% of total health regeneration may continue during combat.' },
        { name: 'Vengeance of the Amani', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_bloodsplatter.jpg', desc: 'Damage dealt to Humanoids increased by 1%. Use their hatred to your advantage.' },
        { name: 'Guerrilla Tactics', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg', desc: 'Stealth detection increased. You see what others miss in the undergrowth.' }
      ],
      ultimate: { name: 'Amani War Bear', desc: 'Summon a spectral War Bear to charge forward, stunning enemies and dealing damage.', imageUrl: 'https://i.imgur.com/FIn0stS.jpeg' },
      elevatorPitch: ['Anti-Humanoid Damage', 'Combat Regen', 'Bulky Model'],
      flavor: {
        language: 'Zandali (Forest Dialect)',
        diet: 'Elves, Dwarves, Fish',
        nemesis: 'Wildhammer Dwarves',
        loot: ['Zul\'jin\'s Head', 'Amani War Bear', 'Halberd of Smiting'],
        partner: 'Orcs (Strength)',
        mountSpecial: 'Bear Roar',
        heritageWeapon: 'Twin Throwing Axes'
      },
      overview: {
        fantasy: 'For thousands of years, the Forest Trolls ruled the Lordaeron continent. They were the masters of the woods, the conquerors of the Amani Empire. But the High Elves and Humans stole their lands, and the Orcs abandoned them in the Second War.\n\nOnly the Revantusk Tribe had the wisdom to see that the new Horde under Thrall was different. While Zul\'jin sits in his crumbling city of Zul\'Aman plotting suicidal vengeance, the Revantusk have sworn loyalty to the Horde to secure their future. Now, with the Dark Portal opening and the Alliance encroaching on the Hinterlands, the Revantusk have mobilized for war. They are the bulkier, stronger cousins of the Darkspear, and they are ready to reclaim their glory—one severed elf ear at a time.',
        systemName: 'Headhunter\'s Trophy',
        systemDesc: 'As a warrior of the Amani lineage, you collect **Trophies** (Ears, Skulls, Insignias) from fallen Humanoid enemies in PvP and PvE. Turning these in at Revantusk Village grants reputation, unique tribal armor dyes, and access to "Voodoo" weapon enchantments that drip with poison and blood.'
      },
      classFantasies: [
        { class: 'Warrior', icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad', title: 'Berserker', desc: 'Unstoppable juggernauts who dual-wield axes and shrug off wounds that would kill a lesser being.' },
        { class: 'Hunter', icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d', title: 'Headhunter', desc: 'Masters of the ambush. You do not just track your prey with a pet; you hunt them with throwing axes and venom.' },
        { class: 'Rogue', icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?953493', title: 'Shadow Hunter', desc: 'You walk in the spaces between the trees, striking from the dark with the blessings of the Loa.' },
        { class: 'Priest', icon: 'https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800', title: 'Hex Xer', desc: 'Spiritual leaders who bind the spirits of the dead and curse the living with wasting diseases.' },
        { class: 'Shaman', icon: 'https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62', title: 'Witch Doctor', desc: 'Keepers of the voodoo. You summon wards of protection and hurl flasks of volatile alchemy.' }
      ],
      locations: {
        start: '**Starting Zone: "Hinterlands" (Level 58)**\nThe Wildhammer Dwarves have launched a massive Gryphon assault on your home. You begin in the thick of a siege, repelling the invaders from the beaches and securing the safety of the Primal Torntusk.',
        hub: '**Capital Hub: "Revantusk Village"**\nOnce a quiet fishing hamlet, it has been transformed into a fortress. Siege engines overlook the sea, and raptor pens are overflowing. It is the only Horde bastion in the Eastern Kingdoms north of the Thandol Span.',
        outpost: '**Outpost: "Zul\'Aman Gates"**\nA siege camp set up outside the sealed gates of the Amani capital. Here, you recruit defectors who are tired of Zul\'jin\'s madness.',
        dungeons: '**Dungeon Ties: Zul\'Aman**\nThe ultimate goal. You are not here to raid it for loot; you are here to dethrone a false king and take control of the Amani destiny.'
      },
      campaign: {
        title: 'The Forest War',
        theme: 'Territorial Conquest',
        objective: 'Secure the Hinterlands and unite the Forest Tribes.',
        moments: ['The Gryphon Down', 'The Green Dragon', 'Zul\'jin\'s Ultimatum'],
        commander: 'Elder Torntusk',
        foothold: { name: 'Revantusk Village', desc: 'The last bastion of the Forest Empire.' },
        result: 'Hinterlands Secured'
      },
      notableHeroes: ['Elder Torntusk', 'Primal Torntusk', 'Katoom the Angler'],
      mount: { name: 'Amani War Bear', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_mount_polarbear_white.jpg', image: 'https://i.imgur.com/2lULTUg.jpeg' },
      heritageArmor: [{ name: 'Amani Plate', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_plate_12.jpg', image: '' }],
      diplomacy: { 'Orcs': 'Brotherhood', 'Elves': 'KOS', 'Darkspear': 'Runts' },
      timeline: [{ year: '-2800', event: 'Troll Wars. Defeat at hands of Humans/Elves.' }],
      voiceLines: [{ label: 'Greeting', text: 'You want axe?' }, { label: 'Combat', text: 'Taz\'dingo!' }]
    },
    felblood: {
      id: 'felblood', name: 'Illidari Defectors', tagline: 'Power at any Price', faction: 'Horde', leader: 'Kayn Sunfury',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/879287-blood-elf-heritage-armor.jpg', // Placeholder
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/spell_fire_felflamebreath.jpg`} alt="Illidari Defectors" className="w-6 h-6 object-contain" />,
      themeColor: '#16a34a', accentColor: 'text-green-600',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/117565-hellfire-peninsula.jpg', // Placeholder
      racials: [
        { name: 'Fel Infusion', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_elementaldevastation.jpg', desc: 'Increases spell and attack power by 15% for 15 sec, but deals 5% of your max health as Chaos damage to you every 3 sec. (3m CD). Great power demands sacrifice.' },
        { name: 'Demon Slayer', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_snipershot.jpg', desc: 'Experience gained from killing Demons increased by 5%. You know their weaknesses better than anyone.' },
        { name: 'Volatile Soul', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_metamorphosis.jpg', desc: 'Upon death, your unstable body detonates, dealing Fire damage to all enemies within 5 yards. Even in death, you burn.' },
        { name: 'Arcane Affinity', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_enchantarmor.jpg', desc: '+10 Enchanting skill. The thirst for magic never truly fades.' }
      ],
      ultimate: { name: 'Metamorphosis (Initiate)', desc: 'Assume a demonic form for 15s, increasing armor by 200% and reducing stun duration by 50%.', imageUrl: 'https://i.imgur.com/FK17C5m.jpeg' },
      elevatorPitch: ['Glass Cannon Racial', 'Demon Hunter Aesthetic', 'Horde DH'],
      flavor: {
        language: 'Orcish / Demonic',
        diet: 'Demonic Energy',
        nemesis: 'Illidan Stormrage',
        loot: ['Warglaives (Replica)', 'Fel Crystal', 'Demon Blood'],
        partner: 'Orcs (Accepted)',
        mountSpecial: 'Fel Trail',
        heritageWeapon: 'Twinblades of the Initiate'
      },
      overview: {
        fantasy: 'Kael\'thas Sunstrider promised his people salvation. He led the brightest and strongest of the Blood Elves to Outland to feed on the energies of the Twisting Nether. They gorged themselves on the blood of demons, mutating their bodies and twisting their souls in service of Illidan Stormrage.\n\nBut for some, the price was too high. As Kael\'thas descends into total madness and pledges himself to the Burning Legion—the very monsters they swore to destroy—a regiment of elite Illidari has defected. Led by Kayn Sunfury, these "Fel-blood" initiates have fled Shadowmoon Valley and surrendered to the Horde at Thrallmar. They are pariahs, feared by their kin and distrusted by the Orcs, but their knowledge of the Black Temple is the key to victory. They fight not for glory, but for vengeance against the Prince who sold them out.',
        systemName: 'Inner Demon',
        systemDesc: 'Your character has a **Corruption** meter. Using Fel abilities increases corruption, granting damage buffs but reducing healing received. You must manage this balance, venting excess energy through specific release abilities to avoid being stunned by "Fel Overload".'
      },
      classFantasies: [
        { class: 'Warrior', icon: 'https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad', title: 'Felguard', desc: 'You have infused your muscles with demonic strength. You do not block attacks; you shatter the weapons that strike you.' },
        { class: 'Rogue', icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?953493', title: 'Slayer', desc: 'Trained by the Illidari assassins, you use fel-fire to cauterize wounds and shadow magic to step through the Twisted Nether.' },
        { class: 'Warlock', icon: 'https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06', title: 'Demonologist', desc: 'You do not bargain with demons; you dominate them. Your minions are not pets, but slaves broken by your superior will.' },
        { class: 'Mage', icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1', title: 'Felcaster', desc: 'Arcane magic is clean, orderly, and weak. You wield the chaotic fire of the Legion to burn your enemies from the inside out.' },
        { class: 'Hunter', icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d', title: 'Stalker', desc: 'You hunt the ultimate prey. Your pets are fel-beasts tamed in the wastes of Shadowmoon Valley.' }
      ],
      locations: {
        start: '**Starting Zone: "Thrallmar" (Level 58)**\nYou arrive in chains, a prisoner of the Horde vanguard. Nazgrel gives you a choice: rotting in a cage, or proving your loyalty by slaughtering the Fel Orcs besieging the citadel. Your first task is to hunt down your former squadmates who refused to defect.',
        hub: '**Capital Hub: "Thrallmar"**\nThe Horde\'s primary foothold in Hellfire Peninsula. You are allowed to walk the streets, but the grunts watch you with hands on their axes. You have no home here, only a barracks.',
        outpost: '**Outpost: "Shadowmoon Village"**\nLater in your journey, you return to the shadow of the Black Temple. Here, you act as a double-agent, feeding false intel to Illidan\'s forces while preparing the Horde for the final assault.',
        dungeons: '**Dungeon Ties: The Blood Furnace**\nYour kin are being mass-produced in these halls. It is a mercy to endure their suffering. You will lead the strike team to shut down the Fel Orc production lines.'
      },
      campaign: {
        title: 'The Betrayer\'s Fall',
        theme: 'Vengeance',
        objective: 'Hunt down Kael\'thas and Illidan.',
        moments: ['The Defection', 'The Siege of the Temple', 'Kael\'thas\'s Betrayal'],
        commander: 'Kayn Sunfury',
        foothold: { name: 'Falcon Watch', desc: 'A precarious forward base.' },
        result: 'Redemption Earned'
      },
      notableHeroes: ['Kayn Sunfury', 'Varedis Felsoul'],
      mount: { name: 'Felstalker', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_monsterhorn_03.jpg', image: 'https://i.imgur.com/6tYCcSO.jpeg' },
      heritageArmor: [{ name: 'Illidari Leathers', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_leather_13.jpg', image: '' }],
      diplomacy: { 'Orcs': 'Cautious Allies', 'Night Elves': 'KOS', 'Blood Elves': 'Traitors' },
      timeline: [{ year: '26', event: 'Defection from Illidari.' }],
      voiceLines: [{ label: 'Greeting', text: 'My eyes are open.' }, { label: 'Combat', text: 'Vengeance!' }]
    },
    arakkoa: {
      id: 'arakkoa', name: 'Arakkoa Outcasts', tagline: 'Shadows of Skettis', faction: 'Alliance', leader: 'Veilith',
      heroImage: 'https://wow.zamimg.com/uploads/screenshots/normal/478648-arakkoa-exile.jpg', // Placeholder
      icon: <img src={`https://wow.zamimg.com/images/wow/icons/large/ability_hunter_aspectofthehawk.jpg`} alt="Arakkoa Outcasts" className="w-6 h-6 object-contain" />,
      themeColor: '#d97706', accentColor: 'text-amber-600',
      capitalBG: 'https://wow.zamimg.com/uploads/screenshots/normal/81577-shattrath-city.jpg', // Placeholder
      racials: [
        { name: 'Curse of Sethe', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_curseofachimonde.jpg', desc: 'Reduce target hit chance by 5% and increase Shadow damage taken by 5% for 10 sec. (3m CD). A crippling hex from the old gods.' },
        { name: 'Vestigial Wings', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_fleetfooted.jpg', desc: 'Reduces falling damage by 50%. You may not fly, but you remember the wind.' },
        { name: 'Shadow-Woven', icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowprotection.jpg', desc: 'Shadow Resistance increased by 15. The darkness is your friend.' },
        { name: 'Avian Swiftness', icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_dash.jpg', desc: 'Dodge chance increased by 1%. Your jerky, bird-like movements are hard to track.' }
      ],
      ultimate: { name: 'Darkflight', desc: 'Briefly gain 60% flight speed (hover) and slow fall for 10 sec. A memory of what was lost.', imageUrl: 'https://i.imgur.com/edebiSl.jpeg' },
      elevatorPitch: ['Raid Debuff (Curse)', 'Unique Model', 'Shadow Lore'],
      flavor: {
        language: 'Ravenspeech',
        diet: 'Worms / Magic',
        nemesis: 'Terokk',
        loot: ['Feathered Cloak', 'Terokk\'s Mask', 'Scroll of Sky'],
        partner: 'Draenei (Refugees)',
        mountSpecial: 'Squawk',
        heritageWeapon: 'Talon Dagger'
      },
      overview: {
        fantasy: 'High above the Terokkar Forest, the glorious Arakkoa rule from the spires of Skettis, worshiping the sun and burning dissenters. You are not one of them. You are an Outcast—cursed, wingless, and broken. Cast down into the shadows of the forest, you have found sanctuary in the Lower City of Shattrath alongside the refugees of other wars.\n\nBut the Outcasts are not helpless. Under the guidance of the Naaru and the Draenei, they have begun to weave a new destiny. They have learned that the Light casts the deepest shadows, and they have mastered both. Now, as the Alliance seeks allies against the Legion, the Arakkoa offer their secrets, their spies, and their deadly shadow-magic in exchange for one thing: the fall of Skettis.',
        systemName: 'Scroll-Keeper',
        systemDesc: 'The history of your people was stolen. As you adventure, you will find **Apocryphal Scrolls** that contain the true history of the Arakkoa. Deciphering these at the Lower City library grants "Shadow Notches"—talents that enhance your racial abilities and unlock secret vendor items.'
      },
      classFantasies: [
        { class: 'Priest', icon: 'https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800', title: 'Talonpriest', desc: 'You walk the line between the Void and the Light. Your healing spells are whispered prayers; your curses are screeched condemnations.' },
        { class: 'Mage', icon: 'https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1', title: 'Ravenmancer', desc: 'You weave illusion and shadow. Your frost spells chill the blood like the grave, and your fire burns with a dark, violet hue.' },
        { class: 'Rogue', icon: 'https://warcraft.wiki.gg/images/ClassIcon_rogue.png?953493', title: 'Talon', desc: 'You are the knife in the dark. Without wings, you have learned to climb, to hide, and to strike from above with lethal precision.' },
        { class: 'Warlock', icon: 'https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06', title: 'Darkteller', desc: 'You commune with the old gods of Draenor. The shadows whisper to you, and you scream back.' },
        { class: 'Hunter', icon: 'https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d', title: 'Kaliri Trainer', desc: 'Your bond with the birds of prey is absolute. You do not just command beasts; you share their eyes.' }
      ],
      locations: {
        start: '**Starting Zone: "Lower City" (Level 58)**\nThe refugees are starving. You must secure food, silence the Skettis spies hiding in the slums, and prove to the Sha\'tar that the Outcasts are worthy of protection.',
        hub: '**Capital Hub: "Lower City"**\nThe sprawling shantytown beneath Shattrath. It is dirty, dangerous, and teeming with life. Here, the Arakkoa huddle around shadow-fires, telling tales of the sky.',
        outpost: '**Outpost: "Veil Skith"**\nA reclaimed Arakkoa village in Terokkar Forest. It is the staging ground for the guerilla war against the high-born.',
        dungeons: '**Dungeon Ties: Sethekk Halls**\nThe source of the curse that broke your people lies within. You must brave the halls, defeat the Talon King, and break the curse once and for all.'
      },
      campaign: {
        title: 'The Sky Darkens',
        theme: 'Rebellion',
        objective: 'Topple the High Caste of Skettis.',
        moments: ['The Shadow Key', 'Terokk\'s Fall', 'Flight Restored (Bonus)'],
        commander: 'Veilith',
        foothold: { name: 'Allerian Stronghold', desc: 'An odd alliance with the Elves.' },
        result: 'The Curse Lifted'
      },
      notableHeroes: ['Veilith', 'Grizzik', 'Darkweaver Syth (Redeemed)'],
      mount: { name: 'Raven Lord', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_mount_ravenlord.jpg', image: 'https://i.imgur.com/edebiSl.jpeg' },
      heritageArmor: [{ name: 'Feathered Robes', icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_cloth_23.jpg', image: '' }],
      diplomacy: { 'Draenei': 'Saviors', 'Orcs': 'Invaders', 'Humans': 'Strange Giants' },
      timeline: [{ year: '-200', event: 'Fall of Skettis.' }, { year: '20', event: 'The Curse of Sethe spreads.' }],
      voiceLines: [{ label: 'Greeting', text: 'Shadows hide you.' }, { label: 'Combat', text: 'Squaaaaaawk!' }]
    },
  };

  let activeData = races[activeRace];
  if (isVariantActive && activeData?.variantData) {
    activeData = { ...activeData, ...activeData.variantData };
  }

  if (!activeData) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#c29c55] font-hero">
        Loading Race Data... (v1.1 Patch Applied)
      </div>
    )
  }

  // Component for the Tab Navigation
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-6 py-3 font-hero uppercase tracking-widest text-sm transition-all duration-300 border-b-2 
        ${activeTab === id
          ? `text-white ${activeData.accentColor.replace('text-', 'border-')}`
          : 'text-gray-500 border-transparent hover:text-gray-300'}`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-body selection:bg-[#f8b700] selection:text-black overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .hero-vignette {
          background: radial-gradient(circle at center, transparent 0%, #050505 90%);
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .gold-border {
          border: 1px solid transparent;
          border-image: linear-gradient(to right, transparent, #b8860b, transparent) 1;
        }

        /* Hide scrollbar for chrome/safari/opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Header Section - Kept separate to prevent overlap */}
      <div className="relative z-50 mb-4">
        <UnifiedHeader
          icon="https://i.imgur.com/ZwPQZNk.png"
          background="https://i.imgur.com/ZH7k1Zi.jpeg"
          section="Races"
          sub="Allies of the Outland"
          title="The New Blood"
          quote="From the depths of the mines to the peaks of the Aerie."
        />
      </div>

      {/* --- HERO SECTION WITH PARALLAX --- */}
      <div className="relative w-full h-[70vh] overflow-hidden border-b-4 border-[#1a1a1a] mt-0">
        {/* Dynamic Background */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out transform ${isAnimating ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`}
          style={{ backgroundImage: `url(${activeData.heroImage})` }}
        ></div>

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        <div className="absolute inset-0 hero-vignette opacity-80"></div>

        {/* Hero Content */}
        {/* Hero Content - Centered (Inverse of bottom-aligned) */}
        <div className="absolute top-1/2 left-0 w-full p-8 md:p-16 -translate-y-1/2 flex flex-col items-start z-30 pointer-events-none">
          <div className="flex gap-4 pointer-events-auto">
            <div className={`flex items-center gap-3 mb-4 px-3 py-1 bg-black/50 border ${activeData.accentColor.replace('text-', 'border-')} rounded backdrop-blur-md`}>
              <span className={`${activeData.accentColor}`}>{activeData.icon}</span>
              <span className={`font-hero text-xs tracking-[0.2em] uppercase text-gray-200`}>{activeData.faction}</span>
            </div>

            {/* VARIANT TOGGLE */}
            {((races[activeRace]?.hasVariant || activeData?.hasVariant || ['orcs', 'broken'].includes(activeRace))) && (
              <button
                onClick={() => setIsVariantActive(!isVariantActive)}
                className={`flex items-center gap-2 mb-4 px-3 py-1 bg-black/80 border border-white/40 rounded backdrop-blur-md hover:bg-[#c29c55] hover:text-black transition-all cursor-pointer shadow-[0_0_15px_rgba(194,156,85,0.3)] animate-pulse-slow`}
              >
                <RefreshCw className="w-3 h-3" />
                <span className="font-hero text-xs tracking-[0.2em] uppercase">
                  Switch to {isVariantActive ? races[activeRace].name : (races[activeRace].variantName || races[activeRace].variantData?.name || 'Variant')}
                </span>
              </button>
            )}
          </div>
          <h1 className="font-hero text-5xl md:text-7xl text-[#c29c55] mb-2 tracking-tighter shadow-black drop-shadow-lg uppercase">
            {activeData.name}
          </h1>
          {/* LEADER INFO ADDED HERE */}
          {/* LEADER INFO SPOTLIGHT */}
          <LeaderSpotlight leader={activeData.leader} heroImage={activeData.heroImage} accentColor={activeData.accentColor} />
          <p className={`font-hero text-lg md:text-xl ${activeData.accentColor} tracking-[0.3em] uppercase opacity-90`}>
            {activeData.tagline}
          </p>

          {/* ELEVATOR PITCH ADDED HERE */}
          <div className="mt-8">
            <ElevatorPitch points={activeData.elevatorPitch || []} accentColor={activeData.accentColor} />
          </div>

          {/* Cross-Pollination Button */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setPage('classes')}
              className={`px-8 py-3 bg-[#c29c55]/10 hover:bg-[#c29c55]/20 border border-[#c29c55]/50 rounded text-[#c29c55] font-hero uppercase tracking-widest text-sm transition-all flex items-center gap-2 group`}
            >
              Choose Your Path <Sword className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </button>
            <button
              onClick={() => setPage('interface')}
              className={`px-8 py-3 bg-[#00b0f0]/10 hover:bg-[#00b0f0]/20 border border-[#00b0f0]/50 rounded text-[#00b0f0] font-hero uppercase tracking-widest text-sm transition-all flex items-center gap-2 group`}
            >
              UI Theme <Layout className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 relative z-20">

        {/* --- REFACTORED RACE SELECTOR (Horizontal Scroll) --- */}
        <div className="bg-[#111111]/90 border border-white/10 rounded-lg shadow-2xl mb-12 backdrop-blur-xl overflow-hidden">
          <div className="flex overflow-x-auto py-4 px-6 gap-6 items-center">
            {Object.entries(raceGroups).map(([groupKey, group]) => (
              <div key={groupKey} className="flex flex-col items-center gap-3 shrink-0 border-r border-white/5 pr-6 last:border-0 min-w-[120px]">
                <span className={`font-hero text-[10px] uppercase tracking-widest ${group.color} opacity-70`}>{group.title}</span>
                <div className="flex gap-2">
                  {group.races.map(raceKey => {
                    const r = races[raceKey];
                    const isActive = activeRace === raceKey;
                    const iconUrl = raceHeaderIcons[raceKey] || r.heroImage;
                    return (
                      <button
                        key={raceKey}
                        onClick={() => handleRaceSelect(raceKey)}
                        className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 overflow-hidden group ${isActive
                          ? `border-${r.accentColor.split('-')[1]}-500 ring-2 ring-${r.accentColor.split('-')[1]}-500/50 scale-110 grayscale-0`
                          : 'border-white/10 hover:border-white/30 hover:scale-105 grayscale opacity-70 hover:opacity-100 hover:grayscale-0'
                          }`}
                      >
                        <img src={iconUrl} alt={r.name} className="absolute inset-0 w-full h-full object-cover" />
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- MAIN CONTENT TABS --- */}
        <div className="flex justify-center mb-8 border-b border-white/10">
          <TabButton id="overview" label="Lore & Destiny" icon={BookOpen} />
          <TabButton id="classes" label="Class Fantasies" icon={Sword} />
          <TabButton id="racials" label="Racial Traits" icon={Activity} />
          <TabButton id="origins" label="Origins & Hubs" icon={Map} />
          <TabButton id="campaign" label="Campaign" icon={Flag} />
        </div>

        {/* --- TAB CONTENT AREA --- */}
        <div className="min-h-[500px] animate-fade-in pb-20">

          {/* 1. OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* LEFT COLUMN (Content) */}
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h2 className="font-hero text-3xl text-[#c29c55] border-l-4 border-[#f8b700] pl-4 uppercase tracking-widest mb-6">The Fantasy</h2>
                  <div className="text-gray-300 text-lg leading-relaxed space-y-4 font-light mb-8">
                    {formatText(activeData.overview.fantasy)}
                  </div>
                  {/* Voice Lines */}
                  <div className="mb-8">
                    <VoicePlayer lines={activeData.voiceLines || []} accentColor={activeData.accentColor} />
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-[#111] border border-white/5 p-6 rounded-lg">
                  <h3 className={`font-hero text-sm uppercase tracking-widest ${activeData.accentColor} mb-6 flex items-center gap-2`}>
                    <Clock className="w-4 h-4" /> Historical Timeline
                  </h3>
                  <LoreTimeline events={activeData.timeline || []} accentColor={activeData.accentColor} />
                </div>
              </div>

              {/* RIGHT COLUMN (Sidebar) */}
              <div className="lg:col-span-4 space-y-6">
                {/* System Card */}
                <div className="bg-[#151515] border border-white/5 rounded-xl p-6 relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${activeData.accentColor.split('-')[1]}-500 to-transparent`}></div>
                  <h3 className={`font-hero text-lg text-[#c29c55] uppercase tracking-widest mb-2 flex items-center gap-2`}>
                    <Hexagon className="w-4 h-4" /> System: {activeData.overview.systemName}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-xs whitespace-pre-line">
                    {formatText(activeData.overview.systemDesc)}
                  </p>
                </div>

                {/* Visual Sidebar Components */}
                <NotableHeroes heroes={activeData.notableHeroes || []} accentColor={activeData.accentColor} />
                <MountPreview mount={activeData.mount} accentColor={activeData.accentColor} />
                <DiplomacyGraph relations={activeData.diplomacy || {}} accentColor={activeData.accentColor} />
                <FlavorGrid flavor={activeData.flavor} accentColor={activeData.accentColor} />
                <HeritageGallery armor={activeData.heritageArmor || []} accentColor={activeData.accentColor} />
              </div>
            </div>
          )}

          {/* 2. CLASSES TAB */}
          {activeTab === 'classes' && (
            <div className="space-y-8">
              {/* Class Matrix */}
              <ClassMatrix classes={activeData.classFantasies} accentColor={activeData.accentColor} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeData.classFantasies.map((cls, idx) => (
                  <div key={idx} className="bg-[#111] border border-white/10 p-6 rounded hover:border-[#f8b700]/50 transition-colors group cursor-pointer hover:bg-white/5">
                    <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                      <h3 className="font-hero text-lg text-white group-hover:text-[#f8b700] transition-colors">{cls.class}</h3>
                      <img src={cls.icon} alt="" className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className={`text-xs uppercase tracking-widest ${activeData.accentColor} mb-2`}>{cls.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {formatText(cls.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. RACIALS TAB */}
          {activeTab === 'racials' && (
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Ultimate Preview */}
              <div className="space-y-4">
                <h3 className={`font-hero text-xl text-center uppercase tracking-widest ${activeData.accentColor}`}>Racial Ultimate Ability</h3>
                <UltimatePreview ultimate={activeData.ultimate || { name: 'Unknown', desc: 'No ultimate data provided.' }} accentColor={activeData.accentColor} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeData.racials.map((racial, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 hover:bg-white/5 rounded transition-colors group">
                    <div className={`mt-1 p-2 rounded bg-black border border-white/10 ${activeData.accentColor} group-hover:scale-110 transition-transform overflow-hidden relative flex-shrink-0`}>
                      {racial.icon ? (
                        <img src={racial.icon} alt={racial.name} className="w-10 h-10 object-cover" />
                      ) : (
                        <Zap size={20} />
                      )}
                    </div>
                    <div>
                      <h4 className="font-hero text-white text-lg">{racial.name}</h4>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">{racial.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. ORIGINS TAB */}
          {activeTab === 'origins' && (
            <div className="grid grid-cols-1 gap-12">

              {/* Interactive Map */}
              {/* Interactive Map */}
              <InteractiveMap locations={activeData.locations} accentColor={activeData.accentColor} capitalBG={activeData.capitalBG} />

              {/* 2x2 Grid for Location Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#111] p-8 rounded border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-[#f8b700]">
                    <Compass size={24} />
                    <h3 className="font-hero text-xl uppercase tracking-widest text-[#c29c55]">Starting Experience</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                    {formatText(activeData.locations.start)}
                  </p>
                </div>

                <div className="bg-[#111] p-8 rounded border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-[#f8b700]">
                    <Anchor size={24} />
                    <h3 className="font-hero text-xl uppercase tracking-widest text-[#c29c55]">Capital Hubs</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                    {formatText(activeData.locations.hub)}
                  </p>
                </div>

                <div className="bg-[#111] p-8 rounded border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-[#f8b700]">
                    <Map size={24} />
                    <h3 className="font-hero text-xl uppercase tracking-widest text-[#c29c55]">Outposts</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                    {formatText(activeData.locations.outpost)}
                  </p>
                </div>

                <div className="bg-[#111] p-8 rounded border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-[#f8b700]">
                    <Skull size={24} />
                    <h3 className="font-hero text-xl uppercase tracking-widest">Dungeon Ties</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                    {formatText(activeData.locations.dungeons)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 5. CAMPAIGN TAB */}
          {activeTab === 'campaign' && (
            <div className="bg-[#111] p-8 rounded border border-white/10 animate-fade-in relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-[#f8b700]/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3">
                  <div className={`w-full aspect-square rounded-full border-4 ${activeData.accentColor.replace('text-', 'border-')} p-2 relative`}>
                    <img
                      src={activeData.heroImage}
                      alt="Campaign Hero"
                      className="w-full h-full object-cover rounded-full opacity-80"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
                      <Flag size={64} className="text-white opacity-50" />
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 space-y-6">
                  <h2 className="font-hero text-3xl text-white mb-2">{activeData.campaign.title}</h2>
                  <p className="text-[#f8b700] text-sm uppercase tracking-widest border-b border-white/10 pb-4">
                    {activeData.campaign.theme}
                  </p>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    {/* Foothold Quest */}
                    <div className="bg-[#1a1a1a] p-4 rounded border-l-2 border-[#f8b700] mb-6 shadow-lg">
                      <div className="flex items-center gap-2 mb-2 text-[#f8b700]">
                        <Compass className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-widest font-bold">Prologue: The Disconnected Peninsula</span>
                      </div>
                      <h4 className="text-white font-hero text-lg mb-1">{activeData.campaign.foothold.name}</h4>
                      <p className="text-xs text-stone-400 leading-relaxed">{activeData.campaign.foothold.desc}</p>
                    </div>

                    <p>
                      <strong className="text-white">Commander:</strong> {activeData.campaign.commander}
                    </p>
                    <p className="text-sm">
                      {activeData.campaign.objective}
                    </p>
                    <div className="mt-4">
                      <h4 className={`font-hero text-sm uppercase mb-2 ${activeData.accentColor}`}>Key Moments</h4>
                      <ul className="space-y-2 text-stone-400 text-sm">
                        {activeData.campaign.moments.map((moment, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-[#f8b700]">•</span>
                            <span>{formatText(moment)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`mt-6 p-4 bg-white/5 rounded border-l-2 ${activeData.accentColor.replace('text-', 'border-')}`}>
                    <h4 className="font-hero text-white mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#f8b700]" />
                      Campaign Outcome: Phasing & Unlocks
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
                      {formatText(activeData.campaign.result)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default TheNewBlood;