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
import TheTheaterOfWar from './components/TheTheaterOfWar';
import TheArmory from './components/TheArmory';
import TheVanguard from './components/TheVanguard';
import Home from './components/Home';


const NavBar = ({ active, set, mobileOpen, setMobileOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'lore', label: 'Lore' },
    { id: 'classes', label: 'Classes' },
    { id: 'races', label: 'Races' },
    { id: 'armory', label: 'Armory' },
    { id: 'pvp', label: 'PvP' },
    { id: 'raids', label: 'Raids' },
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
              <p className="text-[10px] text-green-500 tracking-[0.2em] uppercase group-hover:text-green-400">Plus v1.2</p>
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
        {activePage === 'lore' && <Lore />}
        {activePage === 'classes' && <HallOfLegends />}
        {activePage === 'races' && <TheNewBlood />}
        {activePage === 'armory' && <TheArmory />}
        {activePage === 'pvp' && <TheTheaterOfWar />}
        {activePage === 'raids' && <TheVanguard />}
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