import React, { useState, useMemo } from 'react';
import {
    Box,
    Map as MapIcon,
    Ghost,
    Gamepad2,
    Shirt,
    Cat,
    LayoutGrid,
    Zap,
    Search,
    Filter,
    Crown,
    ArrowRight,
    Star,
    Info
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';
import { collectionsData } from '../data/collections-data';
import WowTooltip from './WowTooltip';

const TheHoard = ({ setPage }) => {
    const [activeTab, setActiveTab] = useState('mounts');
    const [searchQuery, setSearchQuery] = useState('');
    const [hoveredItem, setHoveredItem] = useState(null);

    const tabs = [
        { id: 'mounts', label: 'The Stables', icon: <Ghost size={16} /> },
        { id: 'pets', label: 'The Menagerie', icon: <Cat size={16} /> },
        { id: 'toys', label: 'Toybox', icon: <Gamepad2 size={16} /> },
        { id: 'wardrobe', label: 'Wardrobe', icon: <Shirt size={16} /> },
        { id: 'heirlooms', label: 'Heirlooms', icon: <Crown size={16} /> },
    ];

    const currentData = collectionsData[activeTab];

    // --- SEARCH / FILTER LOGIC ---
    // Returns a flattened list of items for the active tab to calculate progress / perform search
    const flattenedItems = useMemo(() => {
        if (!currentData) return [];

        let items = [];
        if (activeTab === 'mounts') {
            currentData.categories.forEach(cat => {
                items = [...items, ...cat.mounts];
            });
        } else if (activeTab === 'wardrobe') {
            items = currentData.sets;
        } else {
            // pets, toys, heirlooms use 'featured' or 'items'
            items = currentData.featured || currentData.items || [];
        }

        if (!searchQuery) return items;

        return items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.source && item.source.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [activeTab, currentData, searchQuery]);

    // --- PROGRESS CALCULATION ---
    // Mocking total counts for demonstration. In a real app, these would come from the API.
    const totalCounts = {
        mounts: 150,
        pets: 200,
        toys: 75,
        wardrobe: 50, // Sets
        heirlooms: 45
    };

    const currentCount = flattenedItems.length; // Just using the visible mock data count for now, effectively
    // But to make the bar look realistic vs the "Total Possible", we use the mock total.
    // However, since our mock data has very few items, let's just fake a "collected" number that looks good.
    const collectedCountMock = Math.floor(totalCounts[activeTab] * 0.42); // 42% collected
    const progressPercent = (collectedCountMock / totalCounts[activeTab]) * 100;

    // --- RARITY STYLING ---
    const getRarityColor = (rarity) => {
        switch (rarity) {
            case 'Legendary': return 'text-[#ff8000] border-[#ff8000] shadow-[0_0_15px_rgba(255,128,0,0.3)]';
            case 'Epic': return 'text-[#a335ee] border-[#a335ee] shadow-[0_0_10px_rgba(163,53,238,0.2)]';
            case 'Rare': return 'text-[#0070dd] border-[#0070dd]';
            case 'Uncommon': return 'text-[#1eff00] border-[#1eff00]';
            default: return 'text-stone-400 border-stone-600';
        }
    };

    return (
        <div className="min-h-screen bg-[#080808] pb-24 relative overflow-hidden font-sans selection:bg-[#c29c55] selection:text-black">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-b from-[#c29c55]/5 to-transparent opacity-30" />
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <UnifiedHeader
                icon={<img src="https://i.imgur.com/Z6ZVYGG.png" className="w-12 h-12 rounded object-cover border border-[#c29c55]/30 shadow-lg" />}
                section="Account Progression"
                sub="The Hoard"
                title="Collections"
                quote="What good is power if you cannot display it?"
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center border-b border-[#2f2f35] bg-[#0c0c0c] sticky top-0 z-40 mb-10 rounded-lg shadow-2xl">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => { setActiveTab(tab.id); setSearchQuery(''); }}
                                className={`
                  flex items-center gap-2 px-6 py-5 border-b-2 transition-all duration-300
                  ${isActive
                                        ? 'border-[#c29c55] bg-[#c29c55]/10 text-[#f0e6d2]'
                                        : 'border-transparent text-[#5c5c63] hover:text-[#c29c55] hover:bg-[#111]'}
                `}
                            >
                                <span className={`transition-transform duration-300 ${isActive ? 'scale-110 text-[#c29c55]' : ''}`}>
                                    {tab.icon}
                                </span>
                                <span className="text-xs font-hero uppercase tracking-widest hidden md:block">{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">

                    {/* Header Section of the Active Tab */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-3 bg-[#1a1c22] rounded-full border border-[#333] shadow-[0_0_15px_rgba(194,156,85,0.1)] text-[#c29c55]">
                                    {currentData.icon}
                                </div>
                                <h2 className="text-3xl font-hero text-[#f0e6d2] uppercase tracking-[0.1em]">
                                    {currentData.title}
                                </h2>
                            </div>
                            <p className="text-[#8a7b62] text-sm max-w-xl leading-relaxed ml-14">
                                {currentData.desc}
                            </p>
                        </div>

                        {/* SEARCH & PROGRESS */}
                        <div className="w-full md:w-auto flex flex-col gap-4 min-w-[300px]">
                            {/* Search Bar */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-[#555] group-focus-within:text-[#c29c55] transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    className="bg-[#111] border border-[#333] text-[#e0e0e0] text-sm rounded block w-full pl-10 p-2.5 focus:ring-1 focus:ring-[#c29c55] focus:border-[#c29c55] transition-all placeholder-[#444]"
                                    placeholder={`Search ${activeTab}...`}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Progress Bar */}
                            <div className="bg-[#111] p-3 rounded border border-[#222]">
                                <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider text-[#666] mb-1">
                                    <span>Collected</span>
                                    <span>{collectedCountMock} / {totalCounts[activeTab]}</span>
                                </div>
                                <div className="w-full bg-[#1a1a1a] rounded-full h-2 overflow-hidden">
                                    <div
                                        className="bg-[#c29c55] h-2 rounded-full transition-all duration-1000 ease-out relative"
                                        style={{ width: `${progressPercent}%` }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New Mechanics Highlight */}
                    {currentData.mechanics && !searchQuery && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {currentData.mechanics.map((mech, idx) => (
                                <div key={idx} className="bg-gradient-to-r from-[#111] to-transparent border-l-2 border-[#c29c55] p-6 rounded-r hover:bg-[#161616] transition-colors group">
                                    <h3 className="font-hero text-[#e0e0e0] text-sm uppercase mb-2 group-hover:text-[#c29c55] transition-colors flex items-center gap-2">
                                        <Zap size={14} className="text-[#c29c55]" />
                                        {mech.title}
                                    </h3>
                                    <p className="text-[#888] text-xs leading-relaxed">{mech.desc}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Mounts Specific View */}
                    {activeTab === 'mounts' && (
                        <div className="space-y-12">
                            {currentData.categories.map((cat) => {
                                // Filter mounts within category based on search
                                const visibleMounts = searchQuery
                                    ? cat.mounts.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                    : cat.mounts;

                                if (visibleMounts.length === 0) return null;

                                return (
                                    <div key={cat.id} className="bg-[#0f0f0f] border border-[#222] rounded-lg overflow-hidden">
                                        <div className="p-4 border-b border-[#222] bg-[#141414] flex justify-between items-center">
                                            <div>
                                                <h3 className="text-lg font-hero text-[#f0e6d2] uppercase tracking-wider">{cat.name}</h3>
                                                <p className="text-[#555] text-xs mt-0.5">{cat.desc}</p>
                                            </div>
                                            <div className="text-[10px] text-[#444] font-mono">{visibleMounts.length} FOUND</div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-1">
                                            {visibleMounts.map((mount, mIdx) => (
                                                <div
                                                    key={mIdx}
                                                    className="relative group p-4 hover:bg-[#1a1a1a] transition-colors flex items-center gap-4 cursor-pointer"
                                                    onMouseEnter={() => setHoveredItem(mount.name)}
                                                    onMouseLeave={() => setHoveredItem(null)}
                                                >
                                                    <div className={`w-12 h-12 rounded border-2 flex items-center justify-center bg-black transition-all group-hover:scale-105 ${getRarityColor(mount.rarity)}`}>
                                                        <Ghost className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className={`font-bold text-xs ${getRarityColor(mount.rarity).split(' ')[0]}`}>{mount.name}</div>
                                                        <div className="text-[10px] text-[#555] uppercase mt-1 flex items-center gap-1">
                                                            <MapIcon size={10} /> {mount.source}
                                                        </div>
                                                    </div>

                                                    {/* Custom Tooltip on Hover */}
                                                    {hoveredItem === mount.name && (
                                                        <div className="absolute left-1/2 -top-2 transform -translate-x-1/2 -translate-y-full z-50 pointer-events-none mb-2 w-64">
                                                            <WowTooltip item={{
                                                                name: mount.name,
                                                                quality: mount.rarity.toLowerCase(),
                                                                type: "Mount",
                                                                description: mount.desc || `A ${mount.rarity} mount obtained from ${mount.source}.`,
                                                                req: "Level 70"
                                                            }} />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Wardrobe Grid View */}
                    {activeTab === 'wardrobe' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {flattenedItems.map((set, sIdx) => (
                                <div key={sIdx} className="bg-[#111] rounded-lg border border-[#2f2f35] overflow-hidden group hover:border-[#c29c55] transition-all duration-500 hover:shadow-[0_0_20px_rgba(194,156,85,0.1)]">
                                    <div className="h-48 bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('https://i.imgur.com/3Q9fX6y.png')] opacity-10 bg-repeat" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10" />
                                        <Shirt className="w-24 h-24 text-[#333] group-hover:text-[#c29c55] transition-colors duration-500 rotate-0 group-hover:-rotate-6 transform scale-90 group-hover:scale-100" />

                                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[10px] bg-black/80 text-white px-2 py-1 rounded border border-[#333]">View Set</span>
                                        </div>

                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="text-[10px] bg-[#c29c55] text-black px-2 py-1 rounded font-bold uppercase shadow-lg">{set.class}</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-[#f0e6d2] font-hero tracking-wide uppercase text-sm mb-2 group-hover:text-[#c29c55] transition-colors">{set.name}</h4>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="h-1.5 flex-1 bg-[#222] rounded-full overflow-hidden">
                                                <div className="h-full bg-[#c29c55] w-3/4"></div>
                                            </div>
                                            <span className="text-[10px] text-[#666]">{set.pieces} / 8</span>
                                        </div>
                                        <div className="text-[10px] text-[#8a7b62] border-t border-[#222] pt-4">
                                            <span className="uppercase text-[#555] font-bold block mb-1 flex items-center gap-1"><Zap size={10} /> Set Bonus (4pc):</span>
                                            {set.bonus}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Simple List View for Other Tabs (Pets, Toys, Heirlooms) */}
                    {(activeTab === 'pets' || activeTab === 'toys' || activeTab === 'heirlooms') && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {flattenedItems.map((item, i) => (
                                <div key={i} className="bg-[#111] p-4 rounded border border-[#2f2f35] flex items-start gap-4 hover:border-[#444] transition-colors relative group hover:bg-[#161616]">
                                    <div className="w-12 h-12 bg-[#0a0a0a] rounded flex items-center justify-center border border-[#333] shrink-0 group-hover:border-[#c29c55]/50 transition-colors">
                                        {activeTab === 'pets' ? <Cat className="text-[#c29c55]" /> :
                                            activeTab === 'toys' ? <Gamepad2 className="text-[#c29c55]" /> :
                                                <Crown className="text-[#e6cc80]" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-[#e0e0e0] font-bold text-xs truncate mb-1 group-hover:text-[#c29c55] transition-colors">{item.name}</h4>
                                        <p className="text-[#666] text-[10px] line-clamp-2">{item.source || item.desc || item.bonus}</p>
                                        {item.type && <span className="text-[9px] text-[#333] bg-[#1a1a1a] px-2 py-0.5 rounded mt-2 inline-block uppercase tracking-wider border border-[#222]">{item.type}</span>}
                                    </div>
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Info size={14} className="text-[#444] hover:text-[#c29c55] cursor-help" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default TheHoard;
