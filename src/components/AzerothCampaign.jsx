import React, { useState, useEffect } from 'react';
import {
    Shield, Map, Sword, Scroll, Globe, Mountain, Zap, Skull, Anchor,
    Wind, Hammer, Users, Feather, Layout, BookOpen, Gem, Coins, Crown,
    ArrowRight, Star, Clock, AlertTriangle, ChevronRight, X, Compass
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

// --- DATA STRUCTURE: The Defender's Codex (Simplified) ---
import { defenderData } from '../data/azeroth-campaign-data';

import DefenderModal from './DefenderModal';
import DefenderCard, { formatText } from './DefenderCard';



const AzerothCampaign = ({ setPage, initialParams }) => {
    const [activeTab, setActiveTab] = useState(initialParams?.tab || 'mission');
    const [selectedItem, setSelectedItem] = useState(null);
    const [loreMode, setLoreMode] = useState(true);

    // Audio Integration
    useEffect(() => {
        if (defenderData[activeTab]?.audioTrack) {
            window.dispatchEvent(new CustomEvent('tbc-ambient-change', {
                detail: defenderData[activeTab].audioTrack
            }));
        }
    }, [activeTab]);

    const tabs = [
        { id: 'mission', label: 'The Mission', icon: <img src="https://i.imgur.com/Zdo4toj.jpeg" className="w-5 h-5 rounded-sm object-cover" /> },
        { id: 'systems', label: 'Systems & Logistics', icon: <img src="https://i.imgur.com/49bwGfE.jpeg" className="w-5 h-5 rounded-sm object-cover" /> },
        { id: 'hyjal', label: 'Zone 1: Mount Hyjal', icon: <img src="https://i.imgur.com/QDlRYi2.jpeg" className="w-5 h-5 rounded-sm object-cover" /> },
        { id: 'uldum', label: 'Zone 2: Uldum', icon: <img src="https://i.imgur.com/59Z4zrc.jpeg" className="w-5 h-5 rounded-sm object-cover" /> },
        { id: 'grimbatol', label: 'Zone 3: Grim Batol', icon: <img src="https://i.imgur.com/TxR5l6O.jpeg" className="w-5 h-5 rounded-sm object-cover" /> },
    ];

    return (
        <div className="min-h-screen bg-[#050510] pb-20 font-sans selection:bg-[#c29c55]/30">
            <UnifiedHeader
                title="Azeroth Campaign"
                sub="The Home Front (Lvl 60-70)"
                section="Grand Campaign"
                quote="While the armies of the Horde and Alliance storm the Dark Portal, a dedicated few remain behind to protect the world we left."
                icon="https://i.imgur.com/lC4y137.png"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8">
                <div className="flex-wrap gap-2 mb-8 p-1.5 rounded-xl backdrop-blur-md inline-flex">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-hero font-normal uppercase tracking-widest drop-shadow-md text-xs transition-all duration-200 border ${activeTab === tab.id
                                ? 'bg-[#1a1c29] text-[#c29c55] border-[#c29c55]/50 shadow-[0_0_15px_rgba(255,209,0,0.1)]'
                                : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-900'
                                }`}
                        >
                            {/* Icon rendering adjustment needed if plain image vs component */}
                            {typeof tab.icon === 'string' ? <img src={tab.icon} className="w-4 h-4 rounded-sm" /> : tab.icon}
                            {tab.label}
                        </button>
                    ))}

                    {/* Lore Mode Toggle */}
                    <button
                        onClick={() => setLoreMode(!loreMode)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-hero font-normal uppercase tracking-widest drop-shadow-md text-xs transition-all duration-200 border ml-auto ${loreMode
                            ? 'bg-[#1a1c29] text-[#c29c55] border-[#c29c55]/50 shadow-[0_0_15px_rgba(255,209,0,0.1)]'
                            : 'bg-blue-900/20 text-blue-400 border-blue-500/30'
                            }`}
                    >
                        {loreMode ? <Scroll size={16} /> : <Zap size={16} />}
                        {loreMode ? 'Lore Mode' : 'Tactical Mode'}
                    </button>
                </div>

                <div className="animate-fadeIn">
                    {activeTab === 'mission' && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 relative h-[500px] bg-[#0f101a] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
                                {/* Map Background */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                    style={{ backgroundImage: "url('https://i.imgur.com/WVi61uf.jpeg')" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />

                                {/* Interactive Hotspots */}
                                {/* Hyjal - Top Leftish */}
                                <button
                                    onClick={() => setActiveTab('hyjal')}
                                    className="absolute top-[25%] left-[20%] group/spot"
                                >
                                    <div className="w-4 h-4 bg-[#c29c55] rounded-full animate-ping absolute opacity-75" />
                                    <div className="w-4 h-4 bg-[#c29c55] rounded-full border-2 border-black relative z-10 hover:scale-125 transition-transform cursor-pointer shadow-[0_0_15px_#c29c55]" />
                                    <div className="absolute left-6 top-[-4px] bg-black/80 backdrop-blur px-3 py-1 rounded border border-[#c29c55]/30 opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                                        <span className="text-[#c29c55] font-bold text-xs uppercase tracking-widest">Mount Hyjal</span>
                                        <p className="text-[10px] text-gray-400">The World Tree</p>
                                    </div>
                                </button>

                                {/* Grim Batol - Middle Rightish */}
                                <button
                                    onClick={() => setActiveTab('grimbatol')}
                                    className="absolute top-[35%] left-[79%] group/spot"
                                >
                                    <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute opacity-75" />
                                    <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-black relative z-10 hover:scale-125 transition-transform cursor-pointer shadow-[0_0_15px_red]" />
                                    <div className="absolute left-6 top-[-4px] bg-black/80 backdrop-blur px-3 py-1 rounded border border-red-500/30 opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                                        <span className="text-red-500 font-bold text-xs uppercase tracking-widest">Grim Batol</span>
                                        <p className="text-[10px] text-gray-400">The Twilight Highlands</p>
                                    </div>
                                </button>

                                {/* Uldum - Bottom Centerish */}
                                <button
                                    onClick={() => setActiveTab('uldum')}
                                    className="absolute top-[72%] left-[22%] group/spot"
                                >
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-ping absolute opacity-75" />
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-black relative z-10 hover:scale-125 transition-transform cursor-pointer shadow-[0_0_15px_yellow]" />
                                    <div className="absolute left-6 top-[-4px] bg-black/80 backdrop-blur px-3 py-1 rounded border border-yellow-500/30 opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                                        <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest">Uldum</span>
                                        <p className="text-[10px] text-gray-400">The Forge of Origination</p>
                                    </div>
                                </button>

                                <div className="absolute bottom-6 left-6 max-w-md">
                                    <h2 className="text-3xl text-white font-hero font-normal uppercase tracking-widest drop-shadow-md">Select a Front</h2>
                                    <p className="text-gray-400 text-sm mt-1">Click on a conflict zone to view campaign details.</p>
                                </div>
                            </div>

                            {/* Sidebar Info */}
                            <div className="bg-[#0f101a] border border-slate-800 rounded-xl p-6 flex flex-col h-full">
                                <h3 className="font-hero font-normal uppercase tracking-widest text-[#c29c55] mb-4 border-b border-slate-800 pb-2 drop-shadow-md">Campaign Status</h3>
                                <div className="space-y-6 flex-grow">
                                    <div className="bg-[#151720] p-4 rounded border border-slate-700/50">
                                        <h4 className="text-white font-bold text-sm mb-1">Defense of the Ancients</h4>
                                        <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
                                            <div className="bg-[#c29c55] h-full w-[35%] rounded-full" />
                                        </div>
                                        <p className="text-xs text-slate-400 mt-2 flex justify-between">
                                            <span>Progress</span>
                                            <span>35%</span>
                                        </p>
                                    </div>

                                    <ul className="space-y-4">
                                        <li className="flex justify-between items-center text-sm border-b border-slate-800/50 pb-2">
                                            <span className="text-slate-400 flex items-center gap-2"><Globe className="w-3 h-3" /> Active Fronts</span>
                                            <span className="text-red-400 font-mono animate-pulse">3 DETECTED</span>
                                        </li>
                                        <li className="flex justify-between items-center text-sm border-b border-slate-800/50 pb-2">
                                            <span className="text-slate-400 flex items-center gap-2"><Users className="w-3 h-3" /> Forces Mobilized</span>
                                            <span className="text-white font-mono">12,405</span>
                                        </li>
                                        <li className="flex justify-between items-center text-sm pb-2">
                                            <span className="text-slate-400 flex items-center gap-2"><Clock className="w-3 h-3" /> Reset Timer</span>
                                            <span className="text-white font-mono">2 Days</span>
                                        </li>
                                    </ul>
                                </div>

                                <button
                                    onClick={() => setPage('housing')}
                                    className="w-full mt-auto px-4 py-3 bg-[#c29c55] hover:bg-[#d4aa5d] text-black font-hero font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(194,156,85,0.4)] hover:shadow-[0_6px_20px_rgba(194,156,85,0.6)] hover:-translate-y-0.5 transform"
                                >
                                    <Anchor className="w-4 h-4" /> Claim Your Home
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'systems' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {Object.entries(defenderData.systems).map(([key, item]) => (
                                <DefenderCard key={key} item={{ ...item, icon: Hammer, color: 'text-blue-400', type: 'System' }} onClick={setSelectedItem} />
                            ))}
                        </div>
                    )}

                    {['hyjal', 'uldum', 'grimbatol'].includes(activeTab) && (
                        <div className="space-y-10">
                            {/* HERO HEADER */}
                            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000 scale-100 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${defenderData[activeTab].headerImage})` }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-t ${defenderData[activeTab].bgGradient} opacity-90 mix-blend-multiply`} />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10 flex flex-col justify-end h-full bg-gradient-to-t from-black via-black/50 to-transparent">
                                    <div className="animate-slideUp space-y-4 max-w-4xl">
                                        <div className="flex items-center gap-4 mb-2">
                                            <span className="px-3 py-1 bg-[#c29c55] text-black font-bold text-xs uppercase tracking-widest rounded shadow-[0_0_15px_#c29c55]">
                                                Restricted Zone
                                            </span>
                                            <span className="text-white/80 font-mono text-sm border border-white/20 px-2 py-1 rounded">
                                                Level {defenderData[activeTab].levelRange}
                                            </span>
                                        </div>
                                        <h1 className="text-5xl md:text-6xl text-[#c29c55] font-hero font-normal uppercase tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                                            {defenderData[activeTab].title}
                                        </h1>
                                        <p className="text-white/90 text-2xl font-light italic drop-shadow-md border-l-4 border-[#c29c55] pl-4">
                                            {defenderData[activeTab].subtitle}
                                        </p>
                                        <p className="text-gray-300 leading-relaxed font-sans text-lg drop-shadow-md max-w-2xl bg-black/60 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                                            {formatText(defenderData[activeTab].intro)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Dungeons */}
                            <div className="animate-fadeIn delay-100">
                                <h3 className="text-2xl text-[#c29c55] mb-6 flex items-center gap-3 font-hero font-normal uppercase tracking-widest drop-shadow-md pl-2 border-l-4 border-red-900/50">
                                    <Skull className="text-red-500" /> Major Operations
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {Object.values(defenderData[activeTab].dungeons).map((dungeon, idx) => (
                                        <DefenderCard key={idx} item={dungeon} onClick={setSelectedItem} showLore={loreMode} />
                                    ))}
                                </div>
                            </div>

                            {/* Hubs */}
                            <div className="animate-fadeIn delay-200">
                                <h3 className="text-2xl text-[#c29c55] mb-6 flex items-center gap-3 font-hero font-normal uppercase tracking-widest drop-shadow-md pl-2 border-l-4 border-blue-900/50">
                                    <Anchor className="text-blue-400" /> Strategic Hubs
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {defenderData[activeTab].hubs.map((hub, idx) => (
                                        <DefenderCard
                                            key={idx}
                                            item={{ ...hub, icon: Users, color: 'text-slate-400', type: hub.faction }}
                                            onClick={setSelectedItem}
                                            showLore={loreMode}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <DefenderModal
                    isOpen={!!selectedItem}
                    onClose={() => setSelectedItem(null)}
                    data={selectedItem}
                />
            </div>
        </div>
    );
};

export default AzerothCampaign;
