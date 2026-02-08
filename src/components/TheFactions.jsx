import React, { useState, useMemo } from 'react';
import UnifiedHeader from './UnifiedHeader';
import WowTooltip from './WowTooltip';
import { factionsData } from '../data/the-factions-data';
import {
    Shield, Map as MapIcon, BookOpen, Scroll, Star, Eye, search,
    Swords, Coins, Search, Filter, Lock, Unlock
} from 'lucide-react';

const TheFactions = () => {
    // State
    const [selectedFactionId, setSelectedFactionId] = useState('honor');
    const [searchQuery, setSearchQuery] = useState('');
    const [filterRegion, setFilterRegion] = useState('All');
    const [rivalryMode, setRivalryMode] = useState(false);

    // Derived Data
    const selectedFaction = factionsData[selectedFactionId];

    // Filter Logic
    const filteredFactions = useMemo(() => {
        return Object.values(factionsData).filter(f => {
            const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                f.location.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesRegion = filterRegion === 'All' || f.location.includes(filterRegion);
            return matchesSearch && matchesRegion;
        });
    }, [searchQuery, filterRegion]);

    // Unique Regions for Filter
    const regions = ['All', ...new Set(Object.values(factionsData).map(f => f.location.split(' / ')[0]))];

    // Helper: Group Rewards by Reputation Level
    const rewardsByRep = useMemo(() => {
        if (!selectedFaction) return {};
        const groups = { Friendly: [], Honored: [], Revered: [], Exalted: [] };
        selectedFaction.rewards.forEach(r => {
            if (groups[r.req]) groups[r.req].push(r);
        });
        return groups;
    }, [selectedFaction]);

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
            <UnifiedHeader
                icon="https://i.imgur.com/caMZUQ7.png"
                background="https://i.imgur.com/mHJaXnG.jpeg"
                section="World Guide"
                sub="Allegiances & Rewards"
                title="Factions of the Expansion"
                quote="Reputation is the currency of kings."
            />

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT SIDEBAR: Search & List */}
                    <div className="lg:col-span-3 space-y-4">
                        {/* Search Box */}
                        <div className="bg-[#111] border border-stone-800 rounded-lg p-4 sticky top-4 z-20 shadow-xl">
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Find faction..."
                                    className="w-full bg-black/50 border border-stone-700 rounded pl-9 pr-2 py-2 text-sm text-stone-300 focus:border-amber-500/50 outline-none transition-colors"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Region Filter */}
                            <div className="flex flex-wrap gap-2">
                                {regions.slice(0, 5).map(region => (
                                    <button
                                        key={region}
                                        onClick={() => setFilterRegion(region)}
                                        className={`px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded border transition-all ${filterRegion === region
                                                ? 'bg-amber-900/40 text-amber-200 border-amber-500/30'
                                                : 'bg-stone-900 text-stone-500 border-stone-800 hover:border-stone-600'
                                            }`}
                                    >
                                        {region}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Faction List */}
                        <div className="bg-[#111] border border-stone-800 rounded-lg overflow-hidden max-h-[70vh] overflow-y-auto custom-scrollbar">
                            {filteredFactions.map((faction) => (
                                <button
                                    key={faction.id}
                                    onClick={() => setSelectedFactionId(faction.id)}
                                    className={`w-full text-left p-3 border-b border-stone-900/50 transition-all flex items-center gap-3 group relative overflow-hidden ${selectedFactionId === faction.id
                                            ? `bg-gradient-to-r from-stone-900 to-[#0a0a0a] border-l-4 border-l-${faction.color.split('-')[1]}-500`
                                            : 'hover:bg-white/5 border-l-4 border-l-transparent'
                                        }`}
                                >
                                    <img src={faction.icon} className={`w-8 h-8 rounded-full border border-stone-700 object-cover ${selectedFactionId === faction.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`} alt={faction.name} />
                                    <div className="flex flex-col z-10 w-full">
                                        <span className={`font-bold text-sm truncate ${selectedFactionId === faction.id ? 'text-white' : 'text-stone-400 group-hover:text-stone-200'}`}>
                                            {faction.name}
                                        </span>
                                        <span className="text-[10px] text-stone-600 uppercase tracking-wider truncate">
                                            {faction.location}
                                        </span>
                                    </div>
                                </button>
                            ))}
                            {filteredFactions.length === 0 && (
                                <div className="p-8 text-center text-stone-600 text-sm">
                                    No factions found.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT CONTENT: Details */}
                    <div className="lg:col-span-9 space-y-8 animate-fade-in">
                        {selectedFaction && (
                            <>
                                {/* HERO CARD */}
                                <div className="bg-[#111] border border-stone-800 rounded-xl p-8 relative overflow-hidden group">
                                    <div className={`absolute top-0 right-0 p-64 bg-gradient-to-br from-${selectedFaction.color.split('-')[1]}-900/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-1000 group-hover:opacity-100 opacity-50`}></div>

                                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-24 h-24 rounded-full bg-black border-2 border-stone-800 p-1 shadow-2xl shrink-0">
                                            <img src={selectedFaction.icon} className="w-full h-full object-cover rounded-full" alt="Icon" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h2 className={`text-4xl font-hero uppercase tracking-wider text-white drop-shadow-lg`}>
                                                    {selectedFaction.name}
                                                </h2>
                                                {/* Rivalry Badge if Applicable */}
                                                {(selectedFaction.id === 'aldor' || selectedFaction.id === 'scryers') && (
                                                    <span className="px-2 py-1 bg-red-900/30 text-red-400 border border-red-900/50 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                                                        <Swords size={12} /> Rivalry
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap gap-4 text-sm text-stone-400 mb-6">
                                                <div className="flex items-center gap-1.5">
                                                    <MapIcon size={14} className="text-amber-500" />
                                                    <span>{selectedFaction.location}</span>
                                                </div>
                                                <div className="h-4 w-px bg-stone-800"></div>
                                                <div className="flex items-center gap-1.5">
                                                    <Shield size={14} className="text-blue-500" />
                                                    <span>{selectedFaction.hubs.join(', ')}</span>
                                                </div>
                                            </div>

                                            <p className="text-lg text-stone-300 leading-relaxed italic border-l-2 border-stone-700 pl-4 mb-6">
                                                "{selectedFaction.desc}"
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/20 p-4 rounded-lg border border-white/5">
                                                <div>
                                                    <h3 className="text-xs font-bold uppercase text-stone-500 mb-2 flex items-center gap-2">
                                                        <BookOpen size={12} /> Lore
                                                    </h3>
                                                    <p className="text-xs text-stone-400 leading-relaxed">
                                                        {selectedFaction.lore}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h3 className="text-xs font-bold uppercase text-stone-500 mb-2 flex items-center gap-2">
                                                        <Scroll size={12} /> Reputation Strategy
                                                    </h3>
                                                    <p className="text-xs text-stone-400 leading-relaxed">
                                                        {selectedFaction.repGuide}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FEATURES ROW */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Discount Calculator */}
                                    <div className="bg-[#0f1115] border border-stone-800 rounded-lg p-4 flex flex-col justify-between">
                                        <div className="flex items-center gap-2 text-amber-500 mb-2">
                                            <Coins size={16} />
                                            <span className="font-bold text-sm uppercase tracking-wider">Vendor Discounts</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-stone-400">
                                            <div className="flex justify-between">
                                                <span>Friendly</span>
                                                <span className="text-green-400">5% Off</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Honored</span>
                                                <span className="text-blue-400">10% Off</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Exalted</span>
                                                <span className="text-purple-400">20% Off</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Attunement / Key Check */}
                                    <div className="bg-[#0f1115] border border-stone-800 rounded-lg p-4">
                                        <div className="flex items-center gap-2 text-cyan-500 mb-2">
                                            <Lock size={16} />
                                            <span className="font-bold text-sm uppercase tracking-wider">Access Unlocks</span>
                                        </div>
                                        <div className="text-xs text-stone-400">
                                            Contains keys for <span className="text-white">Heroic Dungeons</span>.
                                            Reach <span className="text-blue-400 font-bold">Honored</span> to purchase keys required for end-game content.
                                        </div>
                                    </div>

                                    {/* Rivalry / Unique */}
                                    <div className="bg-[#0f1115] border border-stone-800 rounded-lg p-4">
                                        <div className="flex items-center gap-2 text-red-500 mb-2">
                                            <Swords size={16} />
                                            <span className="font-bold text-sm uppercase tracking-wider">Unique Rewards</span>
                                        </div>
                                        <div className="text-xs text-stone-400">
                                            Offers exclusive <span className="text-white">Shoulder Enchants</span> or <span className="text-white">Profession Recipes</span> found nowhere else. Choose wisely.
                                        </div>
                                    </div>
                                </div>

                                {/* REWARDS MATRIX */}
                                <div>
                                    <h3 className="font-hero text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                                        <Star className="w-6 h-6 text-amber-500" />
                                        Reward Tiers
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                                        {['Friendly', 'Honored', 'Revered', 'Exalted'].map((tier) => (
                                            <div key={tier} className="bg-[#0a0a0a] border border-white/5 rounded-lg flex flex-col h-full">
                                                {/* Tier Header */}
                                                <div className={`p-3 border-b border-white/5 font-bold text-center uppercase tracking-widest text-xs
                                                    ${tier === 'Friendly' ? 'bg-green-900/20 text-green-500' :
                                                        tier === 'Honored' ? 'bg-blue-900/20 text-blue-500' :
                                                            tier === 'Revered' ? 'bg-indigo-900/20 text-indigo-500' :
                                                                'bg-purple-900/20 text-purple-500'}`}>
                                                    {tier}
                                                </div>

                                                {/* Items List */}
                                                <div className="p-2 space-y-2 flex-grow">
                                                    {rewardsByRep[tier] && rewardsByRep[tier].length > 0 ? (
                                                        rewardsByRep[tier].map((reward, idx) => (
                                                            <div key={idx} className="group relative p-2 rounded hover:bg-white/5 transition-colors cursor-default border border-transparent hover:border-white/10">
                                                                <div className="flex justify-between items-start gap-2">
                                                                    <div className="flex flex-col">
                                                                        <span className={`text-xs font-bold leading-tight ${reward.item.quality === 'epic' ? 'text-purple-400' :
                                                                                reward.item.quality === 'rare' ? 'text-blue-400' :
                                                                                    reward.item.quality === 'uncommon' ? 'text-green-400' :
                                                                                        'text-white'
                                                                            }`}>
                                                                            {reward.item.name}
                                                                        </span>
                                                                        <span className="text-[10px] text-stone-500">{reward.item.type}</span>
                                                                    </div>
                                                                    <Eye size={12} className="text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                                                                </div>

                                                                {/* Tooltip */}
                                                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block z-50 w-64 pointer-events-none drop-shadow-2xl">
                                                                    <WowTooltip item={reward.item} />
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div className="text-center py-8 text-stone-700 text-[10px] italic">
                                                            No rewards at this tier.
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TheFactions;
