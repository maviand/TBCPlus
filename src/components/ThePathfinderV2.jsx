import React, { useState, useEffect } from 'react';
import {
    Trophy, Medal, Star, Search, Filter, CheckCircle, Lock, Calendar,
    ChevronDown, Layout, Skull, Map, Shield, Zap, Clock, Users, Flag,
    PieChart, BarChart, ArrowRight, User
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';
import { pathfinderData } from '../data/pathfinder-data';

const ThePathfinderV2 = ({ setPage }) => {
    const [activeCategory, setActiveCategory] = useState(pathfinderData.categories[0].id);
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('personal'); // 'personal' | 'guild'

    const activeData = pathfinderData.categories.find(c => c.id === activeCategory);

    // Audio Effect (Suggestion 10)
    const playAchievementSound = () => {
        // Mock sound effect - in a real app, uses new Audio('/sound.mp3').play();
        console.log("DING! Achievement Unlocked!");
    };

    return (
        <div className="min-h-screen bg-[#080808] pb-24 relative overflow-hidden font-sans text-gray-300">
            {/* Dynamic Background (Suggestion 14) */}
            <div className="fixed inset-0 pointer-events-none transition-opacity duration-700 ease-in-out">
                {activeData?.bgImage && (
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{ backgroundImage: `url(${activeData.bgImage})` }}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/90 to-[#080808]" />
            </div>

            <UnifiedHeader
                icon="https://i.imgur.com/KtvcQf2.png"
                section="Account Progression"
                sub="The Pathfinder v2.1 (Forced Update)"
                title="Achievements"
                quote="History is written by the victors."
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-8 mt-8">

                {/* Left Sidebar */}
                <div className="lg:w-1/4 space-y-6">

                    {/* Summary Card */}
                    <div className="bg-[#111] p-6 rounded-lg border border-[#2f2f35] shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-16 bg-[#c29c55]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10 text-center">
                            {/* Toggle (Suggestion 8: Guild Achievements) */}
                            <div className="flex justify-center mb-4 bg-black/50 rounded-full p-1 w-fit mx-auto border border-gray-800">
                                <button
                                    onClick={() => setViewMode('personal')}
                                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${viewMode === 'personal' ? 'bg-[#c29c55] text-black' : 'text-gray-500 hover:text-white'}`}
                                >
                                    Personal
                                </button>
                                <button
                                    onClick={() => setViewMode('guild')}
                                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${viewMode === 'guild' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
                                >
                                    Guild
                                </button>
                            </div>

                            <div className="w-20 h-20 mx-auto bg-[#0a0a0a] rounded-full border-4 border-[#c29c55] flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(194,156,85,0.2)] group-hover:scale-110 transition-transform duration-500">
                                <span className="text-2xl font-bold text-[#f0e6d2]">
                                    {viewMode === 'personal' ? pathfinderData.summary.points : pathfinderData.summary.guildPoints}
                                </span>
                            </div>
                            <h3 className="font-hero text-[#c29c55] uppercase tracking-wider text-sm mb-1">Total Points</h3>

                            {/* Points Breakdown (Suggestion 4) */}
                            <div className="flex justify-center gap-2 mt-4 text-[10px] text-gray-500">
                                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> PvE</div>
                                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> PvP</div>
                                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Rep</div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Categories */}
                    <div className="bg-[#0c0c0c] rounded-lg border border-[#222] overflow-hidden">
                        {pathfinderData.categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`w-full flex items-center gap-3 px-6 py-4 border-b border-[#1a1a1a] transition-all duration-200
                  ${activeCategory === cat.id
                                        ? 'bg-[#1a1c22] text-[#c29c55] border-l-4 border-l-[#c29c55]'
                                        : 'text-[#888] hover:bg-[#111] hover:text-[#e0e0e0] border-l-4 border-l-transparent'}
                `}
                            >
                                {cat.icon}
                                <span className="text-sm font-bold uppercase tracking-wide">{cat.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tracked Achievements (Suggestion 2) */}
                    <div className="bg-[#111] p-4 rounded-lg border border-[#2f2f35]">
                        <h4 className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3" /> Tracked
                        </h4>
                        <div className="space-y-3">
                            {pathfinderData.summary.tracked.map(track => (
                                <div key={track.id} className="text-sm bg-black/40 p-2 rounded border border-gray-800 hover:border-gray-600 cursor-pointer transition-colors">
                                    <h5 className="text-[#c29c55] font-bold text-xs mb-1">{track.title}</h5>
                                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-green-600 h-full w-2/3"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Main Content Area */}
                <div className="lg:w-3/4 flex flex-col gap-6">

                    {/* Recent Activity Ticker (Suggestion 1) */}
                    <div className="bg-[#111] border border-[#2f2f35] rounded-lg p-4 flex items-center gap-4 overflow-hidden">
                        <div className="bg-[#c29c55]/10 p-2 rounded-full">
                            <Clock className="w-5 h-5 text-[#c29c55]" />
                        </div>
                        <div className="flex-1 overflow-hidden relative h-10">
                            <div className="absolute animate-slide-up w-full space-y-4">
                                {/* Simple CSS animation would go here, static for now logic */}
                                {pathfinderData.summary.recent.map((act, idx) => (
                                    <div key={idx} className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="text-blue-400 font-bold">[{act.user}]</span>
                                            <span className="text-gray-400">earned</span>
                                            <span className="text-[#c29c55] font-bold">[{act.title}]</span>
                                        </div>
                                        <span className="text-xs text-gray-600 uppercase">{act.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#0c0c0c] border border-[#2f2f35] rounded-lg min-h-[600px] flex flex-col">

                        {activeData ? (
                            <>
                                {/* Category Header */}
                                <div className="p-6 border-b border-[#222] bg-[#111] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            {activeData.icon}
                                            <h2 className="text-2xl font-hero text-[#f0e6d2] uppercase tracking-wider">{activeData.title}</h2>
                                        </div>
                                        {activeData.description && (
                                            <p className="text-sm text-gray-500 mt-1 max-w-lg">{activeData.description}</p>
                                        )}
                                    </div>

                                    {/* Search & Filter (Suggestion 3) */}
                                    <div className="flex gap-2">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555]" />
                                            <input
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                placeholder="Search Achievements..."
                                                className="bg-[#0a0a0a] border border-[#333] rounded-full pl-9 pr-4 py-1.5 text-xs text-[#e0e0e0] focus:border-[#c29c55] outline-none w-48 transition-all focus:w-64"
                                            />
                                        </div>
                                        <button className="p-1.5 bg-[#0a0a0a] border border-[#333] rounded-full text-[#555] hover:text-[#c29c55] tooltip" title="Filter Rewards">
                                            <Filter className="w-4 h-4" />
                                        </button>
                                        <button className="p-1.5 bg-[#0a0a0a] border border-[#333] rounded-full text-[#555] hover:text-[#c29c55] tooltip" title="Compare">
                                            <User className="w-4 h-4" /> {/* Compare Tool (Suggestion 12) */}
                                        </button>
                                    </div>
                                </div>

                                {/* Content Grid */}
                                <div className="p-6">

                                    {/* ECONOMY GRAPH (Suggestion 15) */}
                                    {activeCategory === 'economy' && activeData.graphData && (
                                        <div className="bg-[#151515] border border-[#333] rounded-xl p-6 mb-6">
                                            <div className="flex justify-between items-end mb-4">
                                                <div>
                                                    <h3 className="font-hero text-lg text-gray-200 uppercase tracking-widest flex items-center gap-2">
                                                        <BarChart className="w-5 h-5 text-[#c29c55]" /> Net Worth History
                                                    </h3>
                                                    <p className="text-xs text-gray-500">Last 15 Days</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-2xl font-bold text-[#c29c55]">{pathfinderData.summary.goldEarned.toLocaleString()}g</span>
                                                    <p className="text-[10px] text-green-500 font-bold">+1,240g (Today)</p>
                                                </div>
                                            </div>

                                            {/* Sparkline Visualization */}
                                            <div className="h-32 flex items-end justify-between gap-1">
                                                {activeData.graphData.map((val, idx) => {
                                                    const max = Math.max(...activeData.graphData);
                                                    const height = (val / max) * 100;
                                                    return (
                                                        <div key={idx} className="flex-1 flex flex-col justify-end group/bar relative">
                                                            <div
                                                                style={{ height: `${height}%` }}
                                                                className={`w-full min-w-[4px] rounded-t-sm transition-all duration-500 hover:bg-[#c29c55] ${idx === activeData.graphData.length - 1 ? 'bg-[#c29c55]' : 'bg-[#333]'}`}
                                                            />
                                                            {/* Tooltip */}
                                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-[10px] px-1 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 whitespace-nowrap z-10">
                                                                {val.toLocaleString()}g
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* ATTUNEMENT TRACKER LOGIC */}
                                    {activeCategory === 'attunements' ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {activeData.achievements.map((attune) => (
                                                <div key={attune.id} className="bg-[#151515] border border-[#333] rounded-xl overflow-hidden group hover:border-[#c29c55] transition-colors relative">
                                                    {/* Status Strip */}
                                                    <div className={`h-1 w-full ${attune.status === 'Completed' ? 'bg-green-500' : attune.status === 'In Progress' ? 'bg-yellow-500' : 'bg-red-900'}`} />

                                                    <div className="p-6">
                                                        <div className="flex justify-between items-start mb-4">
                                                            <div className="flex items-center gap-3">
                                                                <div className={`p-2 rounded-lg ${attune.status === 'Completed' ? 'bg-green-900/20 text-green-500' : 'bg-[#222] text-gray-500'}`}>
                                                                    {attune.icon}
                                                                </div>
                                                                <div>
                                                                    <h3 className="font-hero text-lg text-gray-200">{attune.title}</h3>
                                                                    <span className={`text-[10px] uppercase font-bold tracking-widest ${attune.status === 'Completed' ? 'text-green-500' : attune.status === 'In Progress' ? 'text-yellow-500' : 'text-red-500'}`}>
                                                                        {attune.status}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {attune.status === 'Locked' && <Lock className="w-4 h-4 text-red-900" />}
                                                        </div>

                                                        {/* Tier Badge */}
                                                        {attune.tier && (
                                                            <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-3
                                                                ${attune.tier.includes('Tier 6.5') ? 'bg-red-900/40 text-red-400 border border-red-900' :
                                                                    attune.tier.includes('Tier 6') ? 'bg-orange-900/40 text-orange-400 border border-orange-900' :
                                                                        attune.tier.includes('Tier 5') ? 'bg-purple-900/40 text-purple-400 border border-purple-900' :
                                                                            attune.tier.includes('Tier 4') ? 'bg-blue-900/40 text-blue-400 border border-blue-900' :
                                                                                'bg-gray-800 text-gray-400'}`}>
                                                                {attune.tier}
                                                            </div>
                                                        )}

                                                        <p className="text-xs text-gray-400 mb-6 min-h-[40px]">{attune.desc}</p>

                                                        {/* Steps Flowchart */}
                                                        <div className="space-y-3 relative">
                                                            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[#222]" /> {/* Connector Line */}
                                                            {attune.steps.map((step, idx) => (
                                                                <div key={idx} className="flex items-center gap-3 relative z-10">
                                                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${step.done ? 'bg-green-500 border-green-500' : 'bg-[#111] border-[#333]'}`}>
                                                                        {step.done && <CheckCircle className="w-3 h-3 text-black" />}
                                                                    </div>
                                                                    <span className={`text-xs ${step.done ? 'text-gray-300 line-through decoration-gray-600' : 'text-gray-600'}`}>{step.label}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* Reward */}
                                                        <div className="mt-6 pt-4 border-t border-[#222] flex items-center gap-2">
                                                            <KeyIcon className={`w-4 h-4 ${attune.status === 'Completed' ? 'text-green-500' : 'text-gray-600'}`} />
                                                            <span className="text-xs font-mono text-gray-400">{attune.reward}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        // STANDARD ACHIEVEMENT LIST
                                        <div className="space-y-4">
                                            {activeData.achievements.filter(ach => ach.title.toLowerCase().includes(searchQuery.toLowerCase())).map((ach) => (
                                                <div
                                                    key={ach.id}
                                                    onClick={playAchievementSound} // Suggestion 10
                                                    className={`bg-[#0f0f0f] border rounded-lg transition-all duration-300 relative overflow-hidden group cursor-default
                                border-[#222] hover:border-[#444] hover:bg-[#161616]
                                ${activeData.id === 'feats' ? 'border-orange-900/30' : ''} 
                              `}
                                                >
                                                    {/* Suggestion 9: Feats Styling */}
                                                    {activeData.id === 'feats' && (
                                                        <div className="absolute inset-0 border-2 border-orange-500/10 rounded-lg pointer-events-none" />
                                                    )}

                                                    <div className="p-4 flex items-start gap-4 relative z-10">
                                                        <div className={`w-14 h-14 shrink-0 rounded border flex items-center justify-center shadow-lg relative group/icon
                                           ${activeData.id === 'feats' ? 'bg-[#1a0f00] border-orange-900' : 'bg-[#141414] border-[#333]'}
                                        `}>
                                                            {ach.icon}
                                                            {/* Suggestion 11 (Lore Tooltip on Icon) */}
                                                            {ach.lore && (
                                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-black/90 border border-[#c29c55] text-[10px] text-[#f0e6d2] rounded opacity-0 group-hover/icon:opacity-100 pointer-events-none transition-opacity z-50 italic font-serif text-center">
                                                                    "{ach.lore}"
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="flex-1">
                                                            <div className="flex justify-between items-start">
                                                                <div>
                                                                    <h4 className={`font-bold text-sm mb-1 ${activeData.id === 'feats' ? 'text-orange-400' : 'text-[#e0e0e0]'}`}>
                                                                        {ach.title}
                                                                    </h4>
                                                                    <p className="text-[#888] text-xs leading-relaxed max-w-xl">
                                                                        {ach.desc}
                                                                    </p>
                                                                </div>
                                                                <div className="flex flex-col items-end gap-1">
                                                                    <div className="flex items-center gap-1 bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#333]">
                                                                        <span className="text-[#c29c55] font-bold text-xs">{ach.points}</span>
                                                                        <Shield className="w-3 h-3 text-[#c29c55]" />
                                                                    </div>
                                                                    {ach.date && <span className="text-[10px] text-[#555]">{ach.date}</span>}
                                                                </div>
                                                            </div>

                                                            {(ach.reward || ach.progress) && (
                                                                <div className="mt-3 pt-3 border-t border-[#222]/50 flex items-center justify-between">
                                                                    {ach.progress && (
                                                                        <div className="w-full max-w-xs h-2 bg-[#1a1a1a] rounded overflow-hidden relative mr-4">
                                                                            <div className="absolute inset-0 bg-[#2f855a] w-11/12" />
                                                                            <span className="absolute inset-0 flex items-center justify-center text-[9px] text-white font-bold opacity-80">{ach.progress}</span>
                                                                        </div>
                                                                    )}
                                                                    {ach.reward && (
                                                                        <div className="text-[10px] text-[#48bb78] font-bold uppercase tracking-wide flex items-center gap-1 ml-auto group/reward cursor-help">
                                                                            <CheckCircle className="w-3 h-3" /> {ach.reward}
                                                                            {/* Suggestion 13: Reward Preview Tooltip */}
                                                                            <span className="hidden group-hover/reward:inline text-white/50 text-[9px] ml-1">(View)</span>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex items-center justify-center text-[#555] text-sm italic">
                                Select a category to view achievements.
                            </div>
                        )}

                    </div>

                    {/* Near Completion (Suggestion 5) */}
                    {pathfinderData.summary.nearCompletion && (
                        <div className="grid grid-cols-2 gap-4">
                            {pathfinderData.summary.nearCompletion.map((nc, i) => (
                                <div key={i} className="bg-[#111] border border-[#222] p-3 rounded flex items-center justify-between">
                                    <span className="text-xs text-gray-400">Close to: <span className="text-white font-bold">{nc.title}</span></span>
                                    <span className="text-xs text-[#c29c55]">{nc.progress}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

// Helper Icon for Attunement
const KeyIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21 2-2 2m-7.6 7.6a6.5 6.5 0 1 1 5.3 5.3L3 21v-3.2l4.1-4.1" /></svg>
);

export default ThePathfinderV2;
