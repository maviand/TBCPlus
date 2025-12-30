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
import TheAtlasOfOutland from './components/TheAtlasOfOutland';

import VaultOfArtifacts from './components/VaultOfArtifacts';
import TheArtisansCodex from './components/TheArtisansCodex';
import Legendaries from './components/Legendaries';
// import Lore from './components/Lore'; // Replaced by new Lore UI
import TheTheaterOfWar from './components/TheTheaterOfWar';
import TheArmory from './components/TheArmory';
import TheGuildSanctum from './components/TheGuildSanctum';
import DefendersOfAzeroth from './components/DefendersOfAzeroth';
import Systems from './components/Systems';
import Home from './components/Home';
import TheHearthAndHome from './components/TheHearthAndHome';
import TheIronSoul from './components/TheIronSoul';
import TheEtherealTrade from './components/TheEtherealTrade';
import TheSeasonsOfOutland from './components/TheSeasonsOfOutland';
import TheBardicArts from './components/TheBardicArts';
import ThePathOfBetrayal from './components/ThePathOfBetrayal';
import TheWeaversLoom from './components/TheWeaversLoom';
import CompanionsOfConsequence from './components/CompanionsOfConsequence';
import TheDarkmoonCarnival from './components/TheDarkmoonCarnival';
import TheLibraryOfAlexandros from './components/TheLibraryOfAlexandros';

const NavBar = ({ active, set, mobileOpen, setMobileOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

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
        { id: 'professions', label: 'Professions' },
        { id: 'bard', label: 'Bard Analysis' },
        { id: 'transmog', label: 'Transmog' },
      ]
    },
    {
      id: 'world',
      label: 'World',
      items: [
        { id: 'content', label: 'Outland Atlas' },
        { id: 'defenders', label: 'Defenders (Azeroth)' },
        { id: 'seasons', label: 'Seasonal Content' },
        { id: 'darkmoon', label: 'Darkmoon Carnival' },
        { id: 'lore', label: 'Lore Library' },
      ]
    },
    {
      id: 'systems',
      label: 'Systems',
      items: [
        { id: 'systems', label: 'Core Systems' },
        { id: 'pvp', label: 'PvP & Arena' },
        { id: 'sanctum', label: 'Guild Sanctum' },
        { id: 'economy', label: 'Economy' },
        { id: 'housing', label: 'Housing' },
        { id: 'followers', label: 'Followers' },
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
                  className={`absolute left-0 top-16 w-56 bg-slate-900 border border-green-900/50 shadow-xl rounded-b-lg overflow-hidden transition-all duration-200 origin-top z-[100]
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
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-slate-800 hover:text-green-400
                          ${active === item.id ? 'text-green-400 bg-slate-800/50' : 'text-gray-400'}`}
                      >
                        {item.label}
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
          <Home setPage={setActivePage} />
        )}
        {/* Page Routing */}
        {/* {activePage === 'lore' && <Lore />} */}
        {activePage === 'classes' && <HallOfLegends setPage={setActivePage} setSelectedClass={setSelectedClass} />}
        {activePage === 'talents' && <TalentCalculator initialClass={selectedClass} />}
        {activePage === 'races' && <TheNewBlood />}
        {activePage === 'armory' && <TheArmory />}
        {activePage === 'sanctum' && <TheGuildSanctum />}
        {activePage === 'pvp' && <TheTheaterOfWar />}
        {activePage === 'professions' && <TheArtisansCodex />}
        {activePage === 'systems' && <Systems />}
        {activePage === 'content' && <TheAtlasOfOutland />}
        {activePage === 'defenders' && <DefendersOfAzeroth />}

        {activePage === 'housing' && <TheHearthAndHome />}
        {activePage === 'hardcore' && <TheIronSoul />}
        {activePage === 'economy' && <TheEtherealTrade />}
        {activePage === 'seasons' && <TheSeasonsOfOutland />}
        {activePage === 'bard' && <TheBardicArts />}
        {activePage === 'betrayal' && <ThePathOfBetrayal />}
        {activePage === 'transmog' && <TheWeaversLoom />}
        {activePage === 'followers' && <CompanionsOfConsequence />}
        {activePage === 'darkmoon' && <TheDarkmoonCarnival />}
        {activePage === 'lore' && <TheLibraryOfAlexandros />}

        {activePage === 'pinnacle' && <VaultOfArtifacts />}
        {activePage === 'legendaries' && <Legendaries />}

      </main>

      <Footer />
    </div>
  );
};

export default App;