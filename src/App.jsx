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
import TalentCalculator from './components/TalentCalculator';
import TheNewBlood from './components/TheNewBlood';
import TheAtlas from './components/TheAtlas';
import AzerothCampaign from './components/AzerothCampaign';
import TheChronicles from './components/TheChronicles';

import VaultOfArtifacts from './components/VaultOfArtifacts';
import TheArtisansCodex from './components/TheArtisansCodex';
import Legendaries from './components/Legendaries';

import TheTheaterOfWar from './components/TheTheaterOfWar';
import TheArmory from './components/TheArmory';
import TheGuildSanctum from './components/TheGuildSanctum';
import TheHoard from './components/TheHoard';
import ThePathfinder from './components/ThePathfinderV2';

import Systems from './components/Systems';
import InterfaceShowcase from './components/InterfaceShowcase';
import Home from './components/Home';
import TheHearthAndHome from './components/TheHearthAndHome';
import TheIronSoul from './components/TheIronSoul';
import TheEtherealTrade from './components/TheEtherealTrade';
import TheSeasonsOfOutland from './components/TheSeasonsOfOutland';
import TheBardicArts from './components/TheBardicArts';
import ThePathOfBetrayal from './components/ThePathOfBetrayal';
import TheDarkmoonCarnival from './components/TheDarkmoonCarnival';
import TheFactions from './components/TheFactions';
import EnterWorld from './components/EnterWorld';
import AmbientPlayer from './components/AmbientPlayer';
import WeatherOverlay from './components/WeatherOverlay';
import ScrollProgress from './components/ScrollProgress';
import Breadcrumbs from './components/Breadcrumbs';
import ErrorBoundary from './components/ErrorBoundary';

const classColors = {
  'druid': '#FF7D0A',
  'hunter': '#ABD473',
  'mage': '#40C7EB',
  'paladin': '#F58CBA',
  'priest': '#FFFFFF',
  'rogue': '#FFF569',
  'shaman': '#0070DE',
  'warlock': '#8787ED',
  'warrior': '#C79C6E',

};

const NavBar = ({ active, set, mobileOpen, setMobileOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const sectionIcons = {
    classes: "https://i.imgur.com/I9kB9z6.png",
    talents: "https://i.imgur.com/Pq3wKNM.png",
    races: "https://i.imgur.com/ZwPQZNk.png",
    armory: "https://i.imgur.com/cjYAb3L.png",
    hoard: "https://i.imgur.com/Z6ZVYGG.png",
    pathfinder: "https://i.imgur.com/KtvcQf2.png",
    professions: "https://i.imgur.com/Jney6fs.png",
    bard: "https://i.imgur.com/BRmJJeB.png",
    atlas: "https://i.imgur.com/I9LdqMi.png",
    chronicles: "https://i.imgur.com/0gcuUY9.png",
    defenders: "https://i.imgur.com/lC4y137.png",
    seasons: "https://i.imgur.com/H3VpwrD.png",
    darkmoon: "https://i.imgur.com/3v7pM13.png",
    factions: "https://i.imgur.com/caMZUQ7.png",
    systems: "https://i.imgur.com/zGnPmkr.png",
    interface: "https://i.imgur.com/Rx9weCp.png",
    pvp: "https://i.imgur.com/uEwR7oV.png",
    sanctum: "https://i.imgur.com/hUTewNC.png",
    economy: "https://i.imgur.com/G9jcDE3.png",
    housing: "https://i.imgur.com/V72eNrE.png",
    pinnacle: "https://i.imgur.com/2ITISCO.png",
    legendaries: "https://i.imgur.com/oCON76W.png",
    hardcore: "https://i.imgur.com/GruxtyX.jpeg",
    betrayal: "https://i.imgur.com/4hVxkEM.jpeg",
  };

  // Categorized Navigation
  const navCategories = [
    {
      id: 'character',
      label: 'Character',
      items: [
        { id: 'classes', label: 'Classes' },
        { id: 'talents', label: 'Talents' },
        { id: 'races', label: 'Races' },
        { id: 'armory', label: 'Armory' },
        { id: 'hoard', label: 'Collections' },
        { id: 'pathfinder', label: 'Achievements' },
        { id: 'professions', label: 'Professions' },
        { id: 'bard', label: 'Bard Analysis' },
      ]
    },
    {
      id: 'world',
      label: 'World',
      items: [
        { id: 'atlas', label: 'The Atlas' },
        { id: 'chronicles', label: 'The Chronicles' },
        { id: 'defenders', label: 'Azeroth Campaign' },
        { id: 'seasons', label: 'Seasonal Content' },
        { id: 'darkmoon', label: 'Darkmoon Carnival' },
        { id: 'factions', label: 'Factions' },
      ]
    },
    {
      id: 'systems',
      label: 'Systems',
      items: [
        { id: 'systems', label: 'Core Systems' },
        { id: 'interface', label: 'Interface 2.0' },
        { id: 'pvp', label: 'PvP & Arena' },
        { id: 'sanctum', label: 'Guild Sanctum' },
        { id: 'economy', label: 'Economy' },
        { id: 'housing', label: 'Housing' },
      ]
    },
    {
      id: 'challenges',
      label: 'Challenges',
      items: [
        { id: 'pinnacle', label: 'Pinnacle Quests' },
        { id: 'legendaries', label: 'Legendaries' },
        { id: 'hardcore', label: 'Iron Soul' },
        { id: 'betrayal', label: 'Betrayal' },
      ]
    }
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full bg-slate-950/90 border-b border-green-900/50 backdrop-blur-md shadow-lg" onMouseLeave={() => setOpenDropdown(null)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => set('home')}>
            <img
              src="/TBCPlus/images/logo-tbc-plus.png"
              alt="The Burning Crusade Plus"
              className="h-16 w-auto object-contain group-hover:scale-105 transition-all duration-300"
              style={{
                maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
              }}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => set('home')}
              className={`text-sm font-hero uppercase tracking-widest hover:text-[#c29c55] transition-colors ${active === 'home' ? 'text-[#c29c55]' : 'text-gray-400'}`}
            >
              Home
            </button>


            {navCategories.map((category) => (
              <div
                key={category.id}
                className="relative group h-full flex items-center"
                onMouseEnter={() => setOpenDropdown(category.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-hero uppercase tracking-widest hover:text-[#c29c55] transition-colors py-8 px-4
                    ${navCategories.some(c => c.id === category.id && c.items.some(i => i.id === active)) ? 'text-[#c29c55]' : 'text-gray-400'}`}
                >
                  {category.label}
                  <ChevronRight size={14} className={`transform transition-transform duration-200 ${openDropdown === category.id ? 'rotate-90' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 top-16 w-64 bg-slate-900 border border-green-900/50 shadow-xl rounded-b-lg overflow-hidden transition-all duration-200 origin-top z-[100]
                    ${openDropdown === category.id ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                >
                  <div className="py-2">
                    {category.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          set(item.id);
                          setOpenDropdown(null);
                        }}
                        className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm transition-colors hover:bg-slate-800 hover:text-green-400
                          ${active === item.id ? 'text-green-400 bg-slate-800/50' : 'text-gray-400'}`}
                      >
                        {sectionIcons[item.id] && (
                          <div className="w-8 h-8 rounded-md border border-[#c29c55]/30 overflow-hidden shadow-md shrink-0">
                            <img
                              src={sectionIcons[item.id]}
                              alt=""
                              className="w-full h-full object-cover scale-125"
                            />
                          </div>
                        )}
                        <span className="font-hero tracking-wide">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex lg:hidden">
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
        <div className="lg:hidden bg-slate-900 border-b border-green-900 h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => { set('home'); setMobileOpen(false); }}
              className="block w-full text-left px-3 py-3 rounded-md text-base font-bold text-white bg-slate-800"
            >
              HOME
            </button>
            {navCategories.map((category) => (
              <div key={category.id} className="py-2 border-b border-slate-800">
                <div className="px-3 py-1 text-xs font-hero uppercase text-[#c29c55] opacity-70 mb-1">{category.label}</div>
                {category.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { set(item.id); setMobileOpen(false); }}
                    className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 pl-6"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Internal components removed (ReforgingSummary, Hero, Features, FeatureCard)
// Home page is now handled by src/components/Home.jsx

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
  const [selectedClass, setSelectedClass] = useState('druid');
  const [selectedRace, setSelectedRace] = useState('goblins');
  const [hasEntered, setHasEntered] = useState(false);
  const [navParams, setNavParams] = useState(null);

  const handleNavigation = (page, params = null) => {
    setNavParams(params);
    setActivePage(page);
  };

  // Apply Class Color Global Variable
  useEffect(() => {
    const color = classColors[selectedClass] || '#00FF96'; // Default TBC Green
    document.documentElement.style.setProperty('--class-color', color);
    // Also update selection color to match class
    document.documentElement.style.setProperty('--selection-color', color + '40'); // 25% opacity
  }, [selectedClass]);

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans selection:bg-[var(--selection-color)] selection:text-white">
      {!hasEntered && <EnterWorld onEnter={() => setHasEntered(true)} />}

      {hasEntered && (
        <>
          <AmbientPlayer />
          <WeatherOverlay type="none" /> {/* logic to change this later */}
        </>
      )}

      <NavBar
        active={activePage}
        set={setActivePage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {hasEntered && <ErrorBoundary><ScrollProgress /></ErrorBoundary>}
      {hasEntered && (
        <Breadcrumbs
          page={activePage}
          subPage={
            activePage === 'classes' ? selectedClass :
              activePage === 'races' ? selectedRace :
                null
          }
          setPage={setActivePage}
        />
      )}

      <main>
        {activePage === 'home' && (
          <Home setPage={setActivePage} />
        )}
        {/* Page Routing */}

        {activePage === 'classes' && (
          <ErrorBoundary>
            <HallOfLegends
              setPage={setActivePage}
              setSelectedClass={setSelectedClass}
              initialClass={selectedClass}
            />
          </ErrorBoundary>
        )}
        {activePage === 'talents' && (
          <ErrorBoundary>
            <TalentCalculator initialClass={selectedClass} />
          </ErrorBoundary>
        )}
        {activePage === 'races' && (
          <ErrorBoundary>
            <TheNewBlood
              setPage={setActivePage}
              initialRace={selectedRace}
              setInitialRace={setSelectedRace}
            />
          </ErrorBoundary>
        )}
        {activePage === 'armory' && <ErrorBoundary><TheArmory setPage={setActivePage} /></ErrorBoundary>}
        {activePage === 'sanctum' && <ErrorBoundary><TheGuildSanctum /></ErrorBoundary>}
        {activePage === 'hoard' && <ErrorBoundary><TheHoard setPage={setActivePage} /></ErrorBoundary>}
        {activePage === 'pathfinder' && <ErrorBoundary><ThePathfinder setPage={setActivePage} /></ErrorBoundary>}
        {activePage === 'pvp' && <ErrorBoundary><TheTheaterOfWar /></ErrorBoundary>}
        {activePage === 'professions' && <ErrorBoundary><TheArtisansCodex /></ErrorBoundary>}
        {activePage === 'systems' && <ErrorBoundary><Systems setPage={setActivePage} /></ErrorBoundary>}
        {activePage === 'interface' && (
          <InterfaceShowcase
            setPage={setActivePage}
            setSelectedClass={setSelectedClass}
            setSelectedRace={setSelectedRace}
          />
        )}
        {/* Updated Components accepting navParams */}
        {activePage === 'atlas' && <TheAtlas setPage={setActivePage} initialParams={navParams} />}
        {activePage === 'chronicles' && <TheChronicles setPage={handleNavigation} />}
        {activePage === 'defenders' && <AzerothCampaign setPage={setActivePage} initialParams={navParams} />}

        {activePage === 'housing' && <TheHearthAndHome />}
        {activePage === 'hardcore' && <TheIronSoul />}
        {activePage === 'economy' && <TheEtherealTrade />}
        {activePage === 'seasons' && <TheSeasonsOfOutland />}
        {activePage === 'bard' && <TheBardicArts />}
        {activePage === 'betrayal' && <ThePathOfBetrayal />}
        {activePage === 'darkmoon' && <TheDarkmoonCarnival />}
        {activePage === 'factions' && <TheFactions />}

        {activePage === 'pinnacle' && <VaultOfArtifacts />}
        {activePage === 'legendaries' && <Legendaries />}

      </main>

      <Footer />
    </div>
  );
};

export default App;
// TBC+ v1.2 - Import Fix Deployment