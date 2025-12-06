import React, { useState, useEffect } from 'react';

import {
  Sword,
  Shield,
  Scroll,
  Map,
  Users,
  Download,
  Zap,
  Flame,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
  Server,
  Activity,
  BookOpen,
  Crown,
  Hammer,
  Skull,
  Wind,
  RefreshCw
} from 'lucide-react';

// --- Components ---
import HallOfLegends from './components/HallOfLegends';
import TheNewBlood from './components/TheNewBlood';
import TheAtlasOfOutland from './components/TheAtlasOfOutland';
import FelForgedVanguard from './components/FelForgedVanguard';
import VaultOfArtifacts from './components/VaultOfArtifacts';
import TheArtisansCodex from './components/TheArtisansCodex';
import Legendaries from './components/Legendaries';
import Lore from './components/Lore';


const NavBar = ({ active, set, mobileOpen, setMobileOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'lore', label: 'Lore' },
    { id: 'classes', label: 'Classes' },
    { id: 'races', label: 'Races' },
    { id: 'professions', label: 'Professions' },
    { id: 'content', label: 'Content' },
    { id: 'systems', label: 'Systems' },
    { id: 'pinnacle', label: 'Pinnacle Quests' },
    { id: 'legendaries', label: 'Legendaries' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950/90 border-b border-green-900/50 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => set('home')}>
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 blur-md opacity-40 group-hover:opacity-60 transition-opacity rounded-full"></div>
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-900 flex items-center justify-center border-2 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)] group-hover:scale-105 transition-transform">
                <Flame size={24} className="text-black fill-green-900 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wider text-gray-100 font-serif group-hover:text-white transition-colors">The Burning Crusade</h1>
              <p className="text-[10px] text-green-500 tracking-[0.2em] uppercase group-hover:text-green-400">Plus</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-4 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => set(item.id)}
                  className={`px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 uppercase tracking-wide relative overflow-hidden group ${active === item.id
                    ? 'text-green-400 bg-green-900/20 shadow-[0_0_10px_rgba(74,222,128,0.1)]'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {active === item.id && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900 border-b border-green-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { set(item.id); setMobileOpen(false); }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const ReforgingSummary = () => {
  const [activeTab, setActiveTab] = useState('classes');
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const content = {
    classes: {
      title: "Class Identities Reforged",
      icon: <Sword className="text-red-400" />,
      desc: "Every specialization has been rebuilt with a 'Masterwork' system to fulfill its deepest fantasy, solving classic rotational issues.",
      features: [
        { name: "Paladin: Holy Power", detail: "A new resource system fueling instant heals and mana-free Crusader Strikes." },
        { name: "Warrior: Ragefont", detail: "New passive rage generation on dodge/parry smooths out the rotation. Bladestorm added." },
        { name: "Hunter: Focus", detail: "Mana is gone. Replaced by Focus and 'Empowered Shots' to break the 1-button macro." },
        { name: "Shaman: Call of Elements", detail: "Drop all 4 totems instantly. No more global cooldown locking. Mobile casting." },
        { name: "Druid: Primal Weave", detail: "Shapeshifting is now a tactical offensive tool, creating powerful combos between forms." },
        { name: "Rogue: Vicious Techniques", detail: "Combo points are now on the Rogue, not the target. Redirect points instantly." },
        { name: "Priest: Evangelism", detail: "Build spiritual energy to unleash Archangel forms for massive burst healing or damage." },
        { name: "Mage: Volatile Magic", detail: "Stacking procs eliminate 'munching'. New 'Burn and Conserve' mechanics." },
        { name: "Warlock: Soul Harvest", detail: "Soul Shards are a UI combat resource, not an item. Fuels Chaos Bolt and Metamorphosis." }
      ]
    },
    races: {
      title: "New Allies Join the Fray",
      icon: <Users className="text-blue-400" />,
      desc: "Seven new playable race options bring unique perspectives and abilities to Outland.",
      features: [
        { name: "Wildhammer (Alliance)", detail: "Gryphon-riding masters of the stormhammer and aerial combat. A primal dwarven clan." },
        { name: "Goblins (Neutral)", detail: "Opportunistic capitalists with rocket jumps and corporate warfare." },
        { name: "Ogres (Horde)", detail: "Reclaiming the Gorian Empire's intellect. Two-headed Magi support." },
        { name: "Saberon (Horde)", detail: "Apex predators of Draenor. Primal druids with unique forms." },
        { name: "Broken (Alliance)", detail: "Redeemed outcasts wielding the Light through shadow and shamanism." },
        { name: "Elves (Neutral Start)", detail: "Choose your path at level 20: The High Elf purity or the Blood Elf dominion." }
      ]
    },
    guilds: {
      title: "A Living Guild System",
      icon: <Crown className="text-yellow-400" />,
      desc: "Guilds are no longer just chat channels. They are physical, customizable bastions of power.",
      features: [
        { name: "The Sanctum", detail: "A customizable, instanced Guild Hall that grows with your achievements." },
        { name: "The Guild Canvas", detail: "Permanent talent trees for your guild, unlocking crafting queues and warperks." },
        { name: "Territory Control", detail: "Capture zones like Halaa to gain region-wide buffs and tax revenues." },
        { name: "Relic Raids", detail: "Steal powerful artifacts from enemy Sanctums in epic GvG heists." }
      ]
    },
    world: {
      title: "The World is Alive",
      icon: <Map className="text-green-400" />,
      desc: "From level 1 to 70, the world has been overhauled with dynamic events and evergreen challenges.",
      features: [
        { name: "Heroic+ Dungeons", detail: "Scalable difficulty for all 5-man content with unique affixes and rewards." },
        { name: "The Azeroth Overture", detail: "A completely revamped 1-60 experience tying vanilla zones to the Crusade." },
        { name: "Dynamic Invasions", detail: "Zone-wide Legion assaults that require server-wide coordination to repel." },
        { name: "New Epics", detail: "Explore the Karazhan Crypts or the Siege of Dalaran in the Caverns of Time." }
      ]
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 bg-slate-900/80 border border-green-900/50 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-20">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar / Tabs */}
        <div className="md:w-1/5 bg-slate-950/50 border-r border-green-900/30 p-2 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible scrollbar-thin scrollbar-thumb-green-900">
          {Object.entries(content).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-3 px-4 py-4 rounded-lg text-left transition-all duration-300 group ${activeTab === key
                ? 'bg-green-900/30 text-green-400 border border-green-700/50 shadow-[0_0_15px_rgba(74,222,128,0.1)]'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
            >
              <div className={`${activeTab === key ? 'scale-110 text-green-400' : 'opacity-70 group-hover:text-white'} transition-all duration-300`}>
                {data.icon}
              </div>
              <span className="font-bold uppercase tracking-wide text-xs md:text-sm whitespace-nowrap">{key}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:w-4/5 p-6 md:p-8 min-h-[300px] relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none transition-opacity duration-500">
            {React.cloneElement(content[activeTab].icon, { size: 120 })}
          </div>

          <div key={activeTab} className="animate-in fade-in zoom-in-95 duration-300 h-full flex flex-col">
            <div className="flex-none">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 flex items-center gap-3">
                {content[activeTab].title}
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-700 rounded-full mb-4"></div>

              <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed max-w-3xl">
                {content[activeTab].desc}
              </p>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-900 pr-2 max-h-[400px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content[activeTab].features.map((feature, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredFeature(idx)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className={`bg-slate-800/50 p-4 rounded-lg border transition-all duration-300 cursor-default group ${hoveredFeature === idx ? 'border-green-500 bg-slate-800 shadow-lg -translate-y-1' : 'border-slate-700'
                      }`}
                  >
                    <h4 className={`font-bold text-sm mb-2 transition-colors flex items-center gap-2 ${hoveredFeature === idx ? 'text-green-400' : 'text-slate-200'
                      }`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      {feature.name}
                    </h4>
                    <p className="text-slate-400 text-xs leading-snug">{feature.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer of the Summary */}
      <div className="bg-slate-950 p-3 border-t border-green-900/30 flex justify-between items-center text-xs text-slate-500 px-6">
        <span className="font-mono">SYSTEM VERSION: TBC+ 1.6</span>
        <button className="flex items-center gap-1 text-green-500 hover:text-green-300 transition-colors uppercase tracking-wider font-bold text-[10px]">
          Read Full Design Document <ChevronRight size={10} />
        </button>
      </div>
    </div>
  );
};

const Hero = ({ setPage }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Simple parallax effect on mouse move
  const handleMouseMove = (e) => {
    // Calculate percentage of screen width/height
    const x = (e.clientX / window.innerWidth) * 20 - 10; // -10 to 10
    const y = (e.clientY / window.innerHeight) * 20 - 10;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative bg-slate-900 min-h-[700px] py-12 flex flex-col items-center justify-start overflow-hidden perspective-1000"
    >
      {/* Abstract Fel Background with Parallax */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none transition-transform duration-100 ease-out"
        style={{ transform: `scale(1.1) translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 pointer-events-none"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-green-500 rounded-full opacity-20 blur-sm animate-pulse"
            style={{
              width: Math.random() * 4 + 'px',
              height: Math.random() * 4 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 3 + 2 + 's',
              transform: `translate(${mousePos.x * (Math.random() * 2)}px, ${mousePos.y * (Math.random() * 2)}px)`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4 w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          You Are Not <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-300">Prepared</span>
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Relive the glory of The Burning Crusade, reforged. We have rebuilt every class, added new races, and reimagined the world to deliver the experience you remember, not the one you played.
        </p>

        {/* Interactive Summary Component */}
        <ReforgingSummary />
      </div>
    </div>
  );
};

const Features = () => (
  <div className="bg-slate-900 py-20 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Why Play TBC+?</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">We've kept the soul of 2007 intact while removing the headaches. Experience the perfect blend of nostalgia and modern convenience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Zap className="text-yellow-400" />}
          title="Instant 58"
          desc="Skip the vanilla grind. Start your journey directly in Outland with starter gear."
          detail="Includes 60% mount, weapon skills maxed, and a 'Hero's Welcome' cache."
        />
        <FeatureCard
          icon={<Users className="text-blue-400" />}
          title="Cross-Faction"
          desc="Party, raid, and trade with anyone. Faction barriers removed for PvE content."
          detail="Guilds are fully cross-faction. Speak Orcish and Common freely in sanctuary zones."
        />
        <FeatureCard
          icon={<Sword className="text-red-400" />}
          title="Tuned Raids"
          desc="Bosses have been re-scripted and buffed to provide a true challenge for modern players."
          detail="New mechanics for Karazhan, Gruul, and Magtheridon. Heroic modes for 10-man content."
        />
        <FeatureCard
          icon={<Activity className="text-green-400" />}
          title="Dual Spec"
          desc="Swap between two specialization layouts instantly. No more respec fees."
          detail="Switch from Tank to DPS in seconds. Action bars save automatically."
        />
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, desc, detail }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-64 perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

        {/* Front of Card */}
        <div className="absolute w-full h-full bg-slate-950/50 p-6 rounded-xl border border-slate-800 hover:border-green-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center backface-hidden shadow-lg">
          <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-slate-800 group-hover:border-green-800">
            {React.cloneElement(icon, { size: 24 })}
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
          <div className="absolute bottom-4 text-[10px] text-green-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Click for Details
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute w-full h-full bg-slate-900 p-6 rounded-xl border border-green-900 rotate-y-180 backface-hidden flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(22,163,74,0.2)]">
          <div className="text-green-400 mb-2"><RefreshCw size={20} /></div>
          {/* Updated the title here to use the prop instead of static text */}
          <h4 className="text-white font-bold mb-3 text-sm">{title}</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {detail}
          </p>
        </div>

      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-900 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="text-green-500" size={24} />
            <span className="text-2xl font-bold text-white font-serif">TBC+</span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            An educational project recreating the 2.4.3 experience.
            Not affiliated with Blizzard Entertainment.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Links</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-green-400 cursor-pointer">Bug Tracker</li>
            <li className="hover:text-green-400 cursor-pointer">Changelog</li>
            <li className="hover:text-green-400 cursor-pointer">Terms of Service</li>
            <li className="hover:text-green-400 cursor-pointer">Rules</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Social</h4>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-colors cursor-pointer">
              <Users size={16} />
            </div>
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 transition-colors cursor-pointer">
              <ExternalLink size={16} />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-900 pt-8 text-center text-xs text-slate-600">
        &copy; 2024 TBC Plus Project. All rights reserved. World of Warcraft is a trademark of Blizzard Entertainment.
      </div>
    </div>
  </footer>
)

// --- Main Layout ---

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans selection:bg-green-500/30 selection:text-green-100">
      <NavBar
        active={activePage}
        set={setActivePage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main>
        {activePage === 'home' && (
          <>
            <Hero setPage={setActivePage} />
            {/* NewsSection removed */}
            <Features />
          </>
        )}
        {/* Page Routing */}
        {activePage === 'lore' && <Lore />}
        {activePage === 'classes' && <HallOfLegends />}
        {activePage === 'races' && <TheNewBlood />}
        {activePage === 'professions' && <TheArtisansCodex />}
        {activePage === 'content' && <TheAtlasOfOutland />}
        {activePage === 'systems' && <FelForgedVanguard />}
        {activePage === 'pinnacle' && <VaultOfArtifacts />}
        {activePage === 'legendaries' && <Legendaries />}

      </main>

      <Footer />
    </div>
  );
};

export default App;