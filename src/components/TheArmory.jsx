import React, { useState } from 'react';
import {
    Sword, Shield, Zap, Crosshair, Heart, Skull,
    Flame, Ghost, Hammer, Leaf, Star, Crown,
    LayoutGrid, Clock, Map as MapIcon, Share2,
    BarChart2, Activity, Calendar, Download, Trophy, ExternalLink, ArrowRight
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';
import { raidLootData } from '../data/item-tuning-data';

// --- SUB-COMPONENTS ---

const StatRadar = ({ stats, color }) => {
    if (!stats) return null;

    // Normalize stats for graph (Arbitrary max values for TBC context)
    const maxValues = { str: 300, agi: 300, int: 300, stam: 400, spi: 200, sp: 500, ap: 600, crit: 20, hit: 10, haste: 15, def: 100, block: 300, mp5: 100, heal: 800 };
    const statKeys = Object.keys(stats);
    if (statKeys.length < 3) return null; // Need at least 3 points for a polygon

    const radius = 60;
    const center = 70;

    const points = statKeys.map((key, i) => {
        const val = parseInt(String(stats[key]).replace('%', ''));
        const max = maxValues[key] || 200;
        const normalized = Math.min(1, Math.max(0.1, val / max));
        const angle = (Math.PI * 2 * i) / statKeys.length - Math.PI / 2;
        const x = center + Math.cos(angle) * (radius * normalized);
        const y = center + Math.sin(angle) * (radius * normalized);
        return `${x},${y}`;
    }).join(' ');

    const bgPoints = statKeys.map((_, i) => {
        const angle = (Math.PI * 2 * i) / statKeys.length - Math.PI / 2;
        const x = center + Math.cos(angle) * radius;
        const y = center + Math.sin(angle) * radius;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="relative w-full aspect-square max-w-[200px] mx-auto group">
            <svg viewBox="0 0 140 140" className="w-full h-full drop-shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                {/* Background Grid */}
                <polygon points={bgPoints} fill="none" stroke="#333" strokeWidth="1" strokeDasharray="4 2" />
                <circle cx={center} cy={center} r={radius * 0.5} fill="none" stroke="#222" strokeWidth="1" />

                {/* Data Polygon */}
                <polygon points={points} fill={`${color.replace('text-', 'var(--color-')})`} fillOpacity="0.2" stroke="currentColor" strokeWidth="2" className={`${color}`} />

                {/* Labels */}
                {statKeys.map((key, i) => {
                    const angle = (Math.PI * 2 * i) / statKeys.length - Math.PI / 2;
                    const x = center + Math.cos(angle) * (radius + 15);
                    const y = center + Math.sin(angle) * (radius + 15);
                    return (
                        <text key={key} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="text-[8px] fill-gray-400 font-bold uppercase tracking-widest">
                            {key}
                        </text>
                    );
                })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="text-[10px] bg-black/80 px-2 py-1 rounded text-white font-mono">Stat Distribution</span>
            </div>
        </div>
    );
};

const GearScoreMeter = ({ iLvl, max = 175 }) => {
    const percentage = Math.min(100, Math.max(0, (iLvl / max) * 100));
    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (percentage / 100) * circumference;

    // Color grade based on percentage
    const color = percentage > 85 ? '#eab308' : percentage > 70 ? '#a855f7' : '#3b82f6';

    return (
        <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
                <circle cx="50%" cy="50%" r="40" stroke="#222" strokeWidth="8" fill="transparent" />
                <circle
                    cx="50%" cy="50%" r="40"
                    stroke={color}
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-white font-hero">{iLvl}</span>
                <span className="text-[8px] text-gray-500 uppercase">AVG ILVL</span>
            </div>
        </div>
    );
};

const ProgressionTrack = ({ tier }) => {
    // Mock progression data based on tier
    const raids = {
        't4': [{ name: 'Karazhan', prog: '11/11' }, { name: 'Gruul', prog: '2/2' }, { name: 'Magtheridon', prog: '1/1' }],
        't5': [{ name: 'SSC', prog: '6/6' }, { name: 'The Eye', prog: '4/4' }],
        't6': [{ name: 'Hyjal', prog: '5/5' }, { name: 'Black Temple', prog: '9/9' }],
        't6.5': [{ name: 'Sunwell', prog: '6/6' }]
    }[tier] || [{ name: 'Dungeons', prog: '15/15' }];

    return (
        <div className="bg-[#111] p-4 rounded-lg border border-white/5 space-y-3">
            <h4 className="text-xs text-stone-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Trophy size={12} /> Raid Progression
            </h4>
            {raids.map((raid, i) => (
                <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs text-stone-300">
                        <span>{raid.name}</span>
                        <span className="text-green-400 font-mono">{raid.prog}</span>
                    </div>
                    <div className="h-1.5 bg-black rounded-full overflow-hidden">
                        <div className="h-full bg-green-500/50 w-full animate-pulse"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ActivityHeatmap = () => {
    // Generate 5 weeks of mock data
    const weeks = 5;
    const days = 7;
    return (
        <div className="bg-[#111] p-4 rounded-lg border border-white/5 overflow-hidden">
            <h4 className="text-xs text-stone-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Activity size={12} /> Recent Activity
            </h4>
            <div className="flex gap-1">
                {Array.from({ length: weeks }).map((_, w) => (
                    <div key={w} className="flex flex-col gap-1">
                        {Array.from({ length: days }).map((_, d) => {
                            const active = Math.random() > 0.6;
                            const intensity = active ? (Math.random() > 0.5 ? 'bg-green-500' : 'bg-green-800') : 'bg-[#222]';
                            return <div key={d} className={`w-3 h-3 rounded-sm ${intensity} hover:scale-125 transition-transform`}></div>
                        })}
                    </div>
                ))}
            </div>
            <div className="flex justify-between text-[8px] text-gray-600 mt-2 uppercase tracking-wider">
                <span>Less</span>
                <span>More</span>
            </div>
        </div>
    );
};

const ShareCard = ({ set, classData, onClose }) => (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-[#050505] border border-amber-500/30 rounded-xl p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(245,158,11,0.1)]" onClick={e => e.stopPropagation()}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

            <div className="text-center mb-6">
                <img src={classData.crest} alt="" className="w-16 h-16 mx-auto mb-4 border border-white/10 rounded-full p-2 bg-black" />
                <h2 className="font-hero text-2xl text-white">{classData.name}</h2>
                <p className="text-amber-500 text-sm uppercase tracking-widest">{set.name}</p>
            </div>

            <div className="space-y-4 border-t border-b border-white/10 py-6 mb-6">
                <div className="flex justify-between items-center">
                    <span className="text-stone-500 text-sm">Item Level</span>
                    <span className="text-white font-bold">{set.iLvl || 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-stone-500 text-sm">Set Bonus</span>
                    <span className="text-green-400 text-xs text-right max-w-[200px]">Active (4/4)</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-stone-500 text-sm">Rating</span>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="text-amber-500 fill-amber-500" />)}
                    </div>
                </div>
            </div>

            <button className="w-full py-3 bg-amber-900/20 border border-amber-500/30 text-amber-500 rounded font-hero uppercase tracking-widest hover:bg-amber-900/40 transition-colors flex items-center justify-center gap-2">
                <Download size={16} /> Save Snapshot
            </button>
            <p className="text-center text-[10px] text-stone-600 mt-4">tbc-plus.gg/armory/share/{Date.now()}</p>
        </div>
    </div>
);

const LootTooltip = ({ text, subtext, item }) => {
    if (!text) return null;

    // Quality Colors
    const getQualityColor = (quality) => {
        switch (quality) {
            case 'Legendary': return 'text-[#ff8000]';
            case 'Epic': return 'text-[#a335ee]';
            case 'Rare': return 'text-[#0070dd]';
            case 'Uncommon': return 'text-[#1eff00]';
            default: return 'text-[#a335ee]'; // Default to Epic for raids
        }
    };

    const qualityColor = getQualityColor(item?.quality || 'Epic');

    return (
        <div className="font-sans text-sm leading-snug">
            {/* Item Name Header (Only if item is provided) */}
            {item && (
                <div className={`font-bold text-[15px] mb-1 ${qualityColor}`}>
                    {item.name}
                </div>
            )}

            {/* Subtext (Original/Restored) - Kept small for context */}
            {subtext && <div className={`text-[10px] uppercase font-bold mb-2 ${subtext.includes('Original') ? 'text-red-900/70' : 'text-green-500/70'}`}>{subtext}</div>}

            {text.split('\n').map((line, i) => {
                let className = "text-white"; // Default white
                let content = line;

                // Split Lines (e.g., "Head  Mail") - Detect double space
                if (line.includes('  ') && !line.includes('Damage') && !line.startsWith('Equip')) {
                    const parts = line.split('  ');
                    return (
                        <div key={i} className="flex justify-between text-white">
                            <span>{parts[0]}</span>
                            <span>{parts[1]}</span>
                        </div>
                    );
                }

                if (line.startsWith('Equip:') || line.startsWith('Use:') || line.startsWith('Chance on hit:') || line.startsWith('Proc:')) {
                    className = "text-[#1eff00]"; // Bright Green
                } else if (line.startsWith('Set:')) {
                    className = "text-[#ffd100]"; // Set Name Gold
                } else if (line.startsWith('Socket Bonus:')) {
                    className = "text-[#808080]"; // Gray
                } else if (line.startsWith('"') && line.endsWith('"')) {
                    className = "text-[#ffd100]"; // Flavor Text Gold
                } else if (line.startsWith('Item Level') || line.startsWith('Requires Level')) {
                    // Item Level is usually Gold in modern WoW, but often White/Yellow in TBC. Let's go Gold for ILVL, White for Req.
                    if (line.startsWith('Item Level')) className = "text-[#ffd100]";
                    else className = "text-white";
                } else if (line.includes('Socket') && !line.includes('Bonus')) {
                    const getSocketIcon = () => {
                        if (line.includes('Red')) return "https://i.imgur.com/vhyS9Bz.png";
                        if (line.includes('Yellow')) return "https://i.imgur.com/AMiiZ42.png";
                        if (line.includes('Blue')) return "https://i.imgur.com/tASSMFD.png";
                        if (line.includes('Prismatic')) return "https://i.imgur.com/hPlKMiO.png";
                        if (line.includes('Meta')) return "https://i.imgur.com/6V5ASQn.png";
                        return null;
                    };

                    const icon = getSocketIcon();

                    if (icon) {
                        return (
                            <div key={i} className="flex items-center gap-1.5 mt-0.5 mb-0.5">
                                <img src={icon} alt="Socket" className="w-3.5 h-3.5" />
                                <span className="text-[#a3a3a3]">{line}</span>
                            </div>
                        );
                    }
                    // Default for Meta or others without icon
                    return <div key={i} className="text-[#808080]">{line}</div>;
                } else if (line.match(/^\d+ Armor$/)) {
                    className = "text-white";
                }

                return <div key={i} className={className}>{content}</div>;
            })}
        </div>
    );
};

const RaidLootView = () => {
    const [activeRaid, setActiveRaid] = useState('mh_bt');

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 space-y-2 flex-shrink-0">
                <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">Select Raid</h3>
                {Object.values(raidLootData).filter(raid => raid.id !== 'tier5_5' && raid.id !== 'tier5_5_qd').map((raid) => (
                    <button
                        key={raid.id}
                        onClick={() => setActiveRaid(raid.id)}
                        className={`w-full text-left p-3 rounded border transition-all duration-300 ${activeRaid === raid.id
                            ? 'bg-amber-900/20 border-amber-500/50 text-white shadow-[0_0_15px_rgba(245,158,11,0.1)]'
                            : 'bg-[#151515] border-transparent text-stone-500 hover:text-stone-300 hover:bg-[#222]'
                            }`}
                    >
                        <span className="font-hero tracking-wide">{raid.name}</span>
                    </button>
                ))}

                <div className="mt-8 p-4 bg-blue-900/10 border border-blue-500/20 rounded-lg">
                    <h4 className="text-blue-400 font-bold mb-2 text-xs uppercase flex items-center gap-2">
                        <Activity size={12} />
                        Design Philosophy
                    </h4>
                    <p className="text-stone-400 text-xs leading-relaxed">
                        Loot tables have been retuned to address itemization gaps, dead stats (like Spirit on DPS gear), and weapon speed thresholds that negatively impacted rotation fluidity in the original game.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
                <div className="bg-[#111] p-6 rounded-xl border border-white/5">
                    <h2 className="text-2xl font-hero text-white mb-2">{raidLootData[activeRaid].name}</h2>
                    <p className="text-stone-400 text-sm italic">{raidLootData[activeRaid].description}</p>
                </div>

                {raidLootData[activeRaid].bosses.map((boss, index) => (
                    <div key={index} className="space-y-4">
                        <div className="flex items-center gap-4">
                            <h3 className="text-xl font-bold text-[#c29c55] border-b border-[#c29c55]/20 pb-2 w-full">{boss.name}</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {boss.items.map((item, i) => (
                                <div key={i} className="bg-[#151515] border border-white/5 rounded-lg p-4 relative group hover:border-[#c29c55]/30 transition-colors">
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        {/* Icon & Name */}
                                        <div className="flex items-center gap-4 min-w-[250px]">
                                            <div className="w-12 h-12 bg-[#222] border border-stone-600 rounded flex-shrink-0 overflow-hidden">
                                                <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="text-[#a335ee] font-bold text-lg">{item.name}</h4>
                                                <span className="text-xs text-stone-600 uppercase tracking-wider">Item Modification</span>
                                            </div>
                                        </div>

                                        {/* Comparison */}
                                        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Original */}
                                            <div className="bg-[#0a0a0a] p-3 rounded border border-white/5 opacity-60">
                                                <LootTooltip text={item.original} subtext="Original Stats (2.4.3)" item={item} />
                                            </div>

                                            {/* New */}
                                            <div className="bg-[#0a0a0a] p-3 rounded border border-green-900/30 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-1">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                                                </div>
                                                <LootTooltip text={item.after} subtext="Restored Stats" item={item} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rationale */}
                                    <div className="mt-4 pl-4 border-l-2 border-[#c29c55] ml-6">
                                        <p className="text-[#c29c55] text-sm italic font-medium">
                                            " {item.rationale} "
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Tier55View = () => {
    const [activeRaid, setActiveRaid] = useState('tier5_5');
    const raid = raidLootData[activeRaid];

    const raids = [
        raidLootData['tier5_5'],
        raidLootData['tier5_5_qd']
    ].filter(Boolean);

    return (
        <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
            {/* Sidebar / Context */}
            <div className="w-full lg:w-64 space-y-6 flex-shrink-0">

                {/* Raid Selector */}
                <div className="space-y-2">
                    <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-2">Select Raid</h3>
                    {raids.map((r) => (
                        <button
                            key={r.id}
                            onClick={() => setActiveRaid(r.id)}
                            className={`w-full text-left p-3 rounded border transition-all duration-300 ${activeRaid === r.id
                                ? 'bg-cyan-900/20 border-cyan-500/50 text-white shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                                : 'bg-[#151515] border-transparent text-stone-500 hover:text-stone-300 hover:bg-[#222]'
                                }`}
                        >
                            <span className="font-hero tracking-wide text-sm">{r.name}</span>
                        </button>
                    ))}
                </div>

                <div className="p-1 rounded-lg border border-cyan-500/30 bg-cyan-900/10 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                    <div className="bg-[#050505] p-4 rounded border border-cyan-500/10">
                        <h3 className="font-hero text-xl text-cyan-400 mb-2">{raid.name}</h3>
                        <p className="text-xs text-cyan-200/60 leading-relaxed italic">{raid.description}</p>
                    </div>
                </div>

                <div className="p-4 rounded-lg border border-white/5 bg-[#111]">
                    <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Star size={12} className="text-amber-500" /> New Content
                    </h4>
                    <p className="text-xs text-stone-400 leading-relaxed">
                        These items are brand new additions to the game, designed to fill slot gaps and support underrepresented playstyles. They feature "Plus" itemization logic.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
                {raid.bosses.map((boss, index) => (
                    <div key={index} className="space-y-6">
                        <div className="flex items-center gap-4 border-b border-cyan-900/30 pb-4">
                            <h3 className="text-2xl font-hero text-cyan-500 w-full drop-shadow-sm">{boss.name}</h3>
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            {boss.items.map((item, i) => (
                                <div key={i} className="bg-[#080808] border border-cyan-500/10 rounded-xl p-5 relative group hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)]">
                                    {/* Header: Icon & Name */}
                                    <div className="flex items-center gap-5 mb-5 relative z-10">
                                        <div className="w-14 h-14 bg-[#111] border border-stone-700 rounded-lg shadow-lg overflow-hidden group-hover:scale-105 transition-transform">
                                            <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className={`font-bold text-lg ${item.quality === 'Legendary' ? 'text-[#ff8000]' : 'text-[#a335ee]'}`}>{item.name}</h4>
                                            <span className="text-[10px] text-cyan-400/60 uppercase tracking-widest font-bold">New Drop</span>
                                        </div>

                                        {/* Background effect */}
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors"></div>
                                    </div>

                                    {/* Tooltip Display */}
                                    <div className="bg-[#050510] p-4 rounded border border-white/5 shadow-inner relative z-10">
                                        <LootTooltip text={item.after} subtext="Item Stats" item={item} />
                                    </div>

                                    {/* Design Notes */}
                                    {item.rationale && (
                                        <div className="mt-4 pt-3 border-t border-white/5">
                                            <p className="text-xs text-stone-500 italic">
                                                <span className="text-cyan-500/70 not-italic font-bold mr-1">Design Notes:</span>
                                                {item.rationale}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TheArmory = ({ setPage }) => {
    const [activeClass, setActiveClass] = useState('warrior');
    const [activeSpec, setActiveSpec] = useState(0); // Index of the spec
    const [activeTier, setActiveTier] = useState('t4'); // t1, t2, t3, t4, t5, t6, t6.5
    const [selectedImage, setSelectedImage] = useState(null);
    const [showShare, setShowShare] = useState(false);
    const [viewMode, setViewMode] = useState('sets'); // 'sets' | 'loot' | 'tier55'

    // Helper for bold text
    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i} className="mb-2 text-stone-400 text-sm leading-relaxed">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-[#ffd100] font-bold">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    const tiers = [
        { id: 't1', label: 'Tier 1', sub: 'Time-Lost (MC)', iLvl: 115 },
        { id: 't4', label: 'Tier 4', sub: 'Karazhan / Gruul', iLvl: 120 },
        { id: 't2', label: 'Tier 2', sub: 'Time-Lost (BWL)', iLvl: 128 },
        { id: 't5', label: 'Tier 5', sub: 'SSC / The Eye', iLvl: 133 },
        { id: 't3', label: 'Tier 3', sub: 'Time-Lost (Naxx)', iLvl: 141 },
        { id: 't6', label: 'Tier 6', sub: 'Hyjal / BT', iLvl: 146 },
        { id: 't6.5', label: 'Tier 6.5', sub: 'Sunwell / Citadel', fullSource: 'Sunwell Plateau & Citadel of the Void', iLvl: 154 },
    ];

    const classes = {
        warrior: {
            name: 'Warrior',
            crest: "https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad",
            color: 'text-red-500',
            specs: [
                {
                    name: 'Arms',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_savageblow.jpg',
                    legendaryLink: 'warglaives',
                    weapons: [
                        { tier: 't4', name: 'Gorehowl', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Cataclysm\'s Edge', source: 'Archimonde' },
                        { tier: 't6', name: 'Apolyon, the Soul-Render', source: 'Kil\'jaeden' },
                        { tier: 's1', name: 'Gladiator\'s Greatsword', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Thrallmar/Honor Hold', name: 'Hellforged Battle Axe', type: 'Two-Hand Axe' },
                        { faction: 'The Sha\'tar', name: 'Crest of the Sha\'tar', type: 'Shield (Off-spec)' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Battlegear', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** Reduces the cooldown of your Intercept ability by 5 sec.\n**4-Set:** Reduces the cast time of your Slam ability by 0.5 sec + 5% Weapon Dmg.' },
                        s2: { name: 'Merciless Gladiator\'s Battlegear', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** Reduces the cooldown of your Intercept ability by 5 sec.\n**4-Set:** Reduces the cast time of your Slam ability by 0.5 sec + 5% Weapon Dmg.' },
                        s3: { name: 'Vengeful Gladiator\'s Battlegear', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** Reduces the cooldown of your Intercept ability by 5 sec.\n**4-Set:** Reduces the cast time of your Slam ability by 0.5 sec + 5% Weapon Dmg.' },
                        s4: { name: 'Brutal Gladiator\'s Battlegear', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** Reduces the cooldown of your Intercept ability by 5 sec.\n**4-Set:** Reduces the cast time of your Slam ability by 0.5 sec + 5% Weapon Dmg.' }
                    },
                    sets: {
                        t4: {
                            name: 'Warbringer Battlegear',
                            image: 'https://i.imgur.com/OT9zyqM.jpeg',
                            bonus: '**2-Set:** Your Whirlwind ability costs 10 less rage.\n**4-Set:** You gain an additional 2 Rage each time you deal melee damage.',
                            classicBonus: '**2-Set:** Your Whirlwind ability costs 5 less rage.\n**4-Set:** You gain an additional 2 Rage each time you deal melee damage.',
                            stats: { str: 145, stam: 160, crit: '4.5%', hit: '3%' },
                            offPieces: ['Girdle of the Endless Pit', 'Boots of the Resilient', 'Bracers of the Green Fortress'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'High King Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "The rage cost reduction on Whirlwind was doubled to encourage more dynamic AoE rotations in early tiers.",
                            enchants: ['Savage', 'Potency', 'Cat\'s Swiftness'],
                            gems: ['Bold Living Ruby', 'Inscribed Noble Topaz']
                        },
                        t5: {
                            name: 'Destroyer Battlegear',
                            image: 'https://i.imgur.com/NLimJLa.jpeg',
                            bonus: '**2-Set:** Your Overpower ability grants you 100 Attack Power for 5 sec.\n**4-Set:** Your Bloodthirst and Mortal Strike abilities cost 5 less rage.',
                            classicBonus: '**2-Set:** Your Overpower ability grants you 100 Attack Power for 5 sec.\n**4-Set:** Your Bloodthirst and Mortal Strike abilities cost 5 less rage.',
                            stats: { str: 175, stam: 190, crit: '5.5%', hit: '4%' },
                            offPieces: ['Belt of One-Hundred Deaths', 'Boots of the Destroyer', 'Vambraces of Ending'],
                            source: { helm: 'Lady Vashj', shoulders: 'Void Reaver', chest: 'Kael\'thas', gloves: 'Leotheras', legs: 'Fathom-Lord Karathress' },
                            devNotes: "Kept mostly faithful to the original, as it provides a solid foundation for the 'Rage Dump' playstyle.",
                            enchants: ['Mongoose', 'Dexterity'],
                            gems: ['Bold Living Ruby', 'Jagged Talasite']
                        },
                        t6: {
                            name: 'Onslaught Battlegear',
                            image: 'https://i.imgur.com/JAATJWE.jpeg',
                            bonus: '**2-Set:** Reduces the rage cost of your Execute ability by 3.\n**4-Set:** Increases the damage of your Mortal Strike and Bloodthirst abilities by 5%.',
                            classicBonus: '**2-Set:** Reduces the rage cost of your Execute ability by 3.\n**4-Set:** Increases the damage of your Mortal Strike and Bloodthirst abilities by 5%.',
                            stats: { str: 210, stam: 220, crit: '6.5%', arp: '10%' },
                            offPieces: ['Onslaught Belt (Gorefiend)', 'Onslaught Boots (Naj\'entus)', 'Onslaught Bracers (Rage Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Mother Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Rage Winterchill', belt: 'Teron Gorefiend', boots: 'High Warlord Naj\'entus' },
                            devNotes: "T6 Off-pieces have been moved from Sunwell to Hyjal/BT to allow for earlier completion of the 'Perfect Look'.",
                            enchants: ['Executioner', 'Nethercobra Leg Armor'],
                            gems: ['Bold Spinel', 'Inscribed Pyrestone']
                        },
                        't6.5': {
                            name: 'Battlegear of Resounding Rings',
                            image: 'https://i.imgur.com/CJudCyD.jpeg',
                            bonus: '**2-Set:** Mortal Strike applies Sunder Armor (stacking).\n**4-Set:** Mortal Strike has a 15% chance to trigger Colossal Smash on your target for 6 sec.',
                            classicBonus: 'N/A (New Set)',
                            stats: { str: 250, stam: 260, crit: '8%', arp: '20%' },
                            offPieces: ['Belt of the Silent Heart', 'Boots of the Forgotten', 'Bracers of the Void'],
                            source: { helm: 'Kil\'jaeden (SWP)', shoulders: 'Eredar Twins (SWP)', chest: 'M\'uru (SWP)', gloves: 'Kalecgos (SWP)', legs: 'Felmyst (SWP)', bracers: 'Citadel Boss 1', belt: 'Citadel Boss 2', boots: 'Citadel Boss 3' },
                            devNotes: "A completely new set designed to bridge the gap into WotLK playstyles, introducing the Colossal Smash mechanic early.",
                            enchants: ['Executioner', 'Nethercobra Leg Armor'],
                            gems: ['Bold Crimson Spinel']
                        },
                        t1: {
                            name: 'Battlegear of Valor (Reforged)',
                            image: 'https://i.imgur.com/IWC7Pmb.jpeg',
                            bonus: '**2-Set:** **Tactician:** Your Overpower now has two charges and a 1-second cooldown.\n**4-Set:** **Colossus Smash:** Mortal Strike grants you 15% armor penetration for 6 seconds.',
                            classicBonus: 'See Vanilla WoW',
                            stats: { str: 100, stam: 110, crit: '2%' },
                            offPieces: ['Belt of Valor', 'Boots of Valor'],
                            source: { helm: 'Garr (MC)', shoulders: 'Baron Geddon (MC)', chest: 'Golemagg (MC)', gloves: 'Gehennas (MC)', legs: 'Magmadar (MC)' },
                            devNotes: "Reforged T1 brings modern mechanics to classic aesthetics.",
                            enchants: ['Crusader'],
                            gems: ['Bold Living Ruby']
                        },
                        t2: {
                            name: 'Battlegear of Wrath (Reforged)',
                            image: 'https://i.imgur.com/kta2B5W.jpeg',
                            bonus: '**2-Set:** **Taste for Blood:** Rend ticks have a 100% chance to allow the use of Overpower.\n**4-Set:** **Blade Master:** Bladestorm now fires "Blades of Wrath" at distant enemies, dealing 70% weapon damage.',
                            classicBonus: 'See Vanilla WoW',
                            stats: { str: 120, stam: 130, crit: '3%' },
                            offPieces: ['Belt of Wrath', 'Boots of Wrath'],
                            source: { helm: 'Nefarian (BWL)', shoulders: 'Chromaggus (BWL)', chest: 'Vaelastrasz (BWL)', gloves: 'Ebonroc (BWL)', legs: 'Ragnaros (MC)' },
                            devNotes: "Reforged T2 focuses on the Bladestorm fantasy.",
                            enchants: ['Crusader'],
                            gems: ['Bold Living Ruby']
                        },
                        t3: {
                            name: 'Dreadnaught\'s Battlegear (Reforged)',
                            image: 'https://i.imgur.com/8nFaFqV.jpeg',
                            bonus: '**2-Set:** **Execute Phase:** Your attacks against targets below 20% health generate double Rage.\n**4-Set:** **Sudden Doom:** Your auto attacks have a chance to reset the cooldown of Mortal Strike and make it cost no Rage.',
                            classicBonus: 'See Vanilla WoW',
                            stats: { str: 140, stam: 150, crit: '4%' },
                            offPieces: ['Belt of Dreadnaught', 'Boots of Dreadnaught'],
                            source: { helm: 'Kel\'Thuzad (Naxx)', shoulders: 'Loatheb (Naxx)', chest: '4 Horsemen (Naxx)', gloves: 'Maexxna (Naxx)', legs: 'Thaddius (Naxx)' },
                            devNotes: "Reforged T3 brings Naxxramas power to the TBC prepatch era.",
                            enchants: ['Mongoose'],
                            gems: ['Bold Living Ruby']
                        }
                    }
                },
                {
                    name: 'Fury',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_innerrage.jpg',
                    legendaryLink: 'warglaives',
                    weapons: [
                        { tier: 't4', name: 'Dragonmaw', source: 'Blacksmithing' },
                        { tier: 't5', name: 'Talon of Azshara', source: 'Morogrim Tidewalker' },
                        { tier: 't6', name: 'Warglaive of Azzinoth', source: 'Illidan' },
                        { tier: 's2', name: 'Merciless Gladiator\'s Slicer', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Honor Hold', name: 'Blade of the Archmage', type: 'Sword' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Battlegear', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** Reduces cooldown of Intercept by 5 sec.\n**4-Set:** +5% Weapon Damage.' },
                        s2: { name: 'Merciless Gladiator\'s Battlegear', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** Reduces cooldown of Intercept by 5 sec.\n**4-Set:** +5% Weapon Damage.' },
                        s3: { name: 'Vengeful Gladiator\'s Battlegear', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** Reduces cooldown of Intercept by 5 sec.\n**4-Set:** +5% Weapon Damage.' },
                        s4: { name: 'Brutal Gladiator\'s Battlegear', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** Reduces cooldown of Intercept by 5 sec.\n**4-Set:** +5% Weapon Damage.' }
                    },
                    sets: {
                        t4: {
                            name: 'Warbringer Battlegear',
                            image: 'https://i.imgur.com/OT9zyqM.jpeg',
                            bonus: '**2-Set:** Your Whirlwind ability costs 10 less rage.\n**4-Set:** You gain an additional 2 Rage each time you deal melee damage.',
                            classicBonus: 'Standard T4',
                            stats: { str: 145, crit: '5%', hit: '3%' },
                            offPieces: ['Girdle of the Endless Pit', 'Boots of the Resilient'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'High King Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose', 'Savagery'],
                            gems: ['Bold Living Ruby']
                        },
                        t5: {
                            name: 'Destroyer Battlegear',
                            image: 'https://i.imgur.com/NLimJLa.jpeg',
                            bonus: '**2-Set:** Your Overpower ability grants you 100 Attack Power for 5 sec.\n**4-Set:** Your Bloodthirst and Mortal Strike abilities cost 5 less rage.',
                            classicBonus: 'Standard T5',
                            stats: { str: 175, crit: '6%', hit: '4%' },
                            offPieces: ['Belt of One-Hundred Deaths', 'Boots of the Destroyer'],
                            source: { helm: 'Lady Vashj', shoulders: 'Void Reaver', chest: 'Kael\'thas', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose', 'Mongoose'],
                            gems: ['Bold Living Ruby']
                        },
                        t6: {
                            name: 'Onslaught Battlegear',
                            image: 'https://i.imgur.com/JAATJWE.jpeg',
                            bonus: '**2-Set:** Reduces the rage cost of your Execute ability by 3.\n**4-Set:** Increases the damage of your Mortal Strike and Bloodthirst abilities by 5%.',
                            classicBonus: 'Standard T6',
                            stats: { str: 210, crit: '7%', arp: '10%' },
                            offPieces: ['Onslaught Belt (Gorefiend)', 'Onslaught Boots (Naj\'entus)', 'Onslaught Bracers (Rage Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Rage Winterchill', belt: 'Teron Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Bracers/Belt/Boots moved to BT/Hyjal.",
                            enchants: ['Executioner'],
                            gems: ['Bold Spinel']
                        },
                        't6.5': {
                            name: 'Plate of Resounding Rings',
                            image: 'https://i.imgur.com/CJudCyD.jpeg',
                            bonus: '**2-Set:** Increases the duration of Enrage by 1.0 sec.\n**4-Set:** Enrage increases the damage of your Raging Blow by 20%.',
                            classicBonus: 'N/A',
                            stats: { str: 250, crit: '9%', arp: '20%' },
                            offPieces: ['Belt of the Silent Heart', 'Boots of the Forgotten'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "High Enrage uptime focus.",
                            enchants: ['Executioner', 'Mongoose'],
                            gems: ['Bold Crimson Spinel']
                        },
                        t1: {
                            name: 'Valor Plate (Reforged)',
                            image: 'https://i.imgur.com/IWC7Pmb.jpeg',
                            bonus: '**2-Set:** **Furious Strikes:** Bloodthirst has a +10% Critical Strike chance.\n**4-Set:** **Enraged Regeneration:** While Enraged, you regenerate 2% of your total health every 3 seconds.',
                            classicBonus: 'Classic T1',
                            stats: { str: 100, crit: '2%' },
                            offPieces: ['Belt of Valor', 'Boots of Valor'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Sustain.",
                            enchants: ['Crusader'],
                            gems: ['Bold Living Ruby']
                        },
                        t2: {
                            name: 'Wrath Plate (Reforged)',
                            image: 'https://i.imgur.com/kta2B5W.jpeg',
                            bonus: '**2-Set:** **Taste for Blood:** Rend ticks have a 100% chance to allow the use of Overpower.\n**4-Set:** **Blade Master:** Bladestorm now fires "Blades of Wrath" at distant enemies, dealing 70% weapon damage.',
                            classicBonus: 'See Vanilla WoW',
                            stats: { str: 120, stam: 130, crit: '3%' },
                            offPieces: ['Belt of Wrath', 'Boots of Wrath'],
                            source: { helm: 'Nefarian (BWL)', shoulders: 'Chromaggus (BWL)', chest: 'Vaelastrasz (BWL)', gloves: 'Ebonroc (BWL)', legs: 'Ragnaros (MC)' },
                            devNotes: "Reforged T2 focuses on the Bladestorm fantasy.",
                            enchants: ['Crusader'],
                            gems: ['Bold Living Ruby']
                        },
                        t3: {
                            name: 'Dreadnaught\'s Battlegear (Reforged)',
                            image: 'https://i.imgur.com/8nFaFqV.jpeg',
                            bonus: '**2-Set:** **Execute Phase:** Your attacks against targets below 20% health generate double Rage.\n**4-Set:** **Sudden Doom:** Your auto attacks have a chance to reset the cooldown of Mortal Strike and make it cost no Rage.',
                            classicBonus: 'See Vanilla WoW',
                            stats: { str: 140, stam: 150, crit: '4%' },
                            offPieces: ['Belt of Dreadnaught', 'Boots of Dreadnaught'],
                            source: { helm: 'Kel\'Thuzad (Naxx)', shoulders: 'Loatheb (Naxx)', chest: '4 Horsemen (Naxx)', gloves: 'Maexxna (Naxx)', legs: 'Thaddius (Naxx)' },
                            devNotes: "Reforged T3 brings Naxxramas power to the TBC prepatch era.",
                            enchants: ['Mongoose'],
                            gems: ['Bold Living Ruby']
                        }
                    }
                },
                {
                    name: 'Fury',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_innerrage.jpg',
                    legendaryLink: 'warglaives',
                    weapons: [
                        { tier: 't4', name: 'Dragonmaw', source: 'Blacksmithing' },
                        { tier: 't5', name: 'Talon of Azshara', source: 'Morogrim Tidewalker' },
                        { tier: 't6', name: 'Warglaive of Azzinoth', source: 'Illidan' },
                        { tier: 's2', name: 'Merciless Gladiator\'s Slicer', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Honor Hold', name: 'Blade of the Archmage', type: 'Sword' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Battlegear', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** Reduces cooldown of Intercept by 5 sec.\n**4-Set:** +5% Weapon Damage.' },
                        s2: { name: 'Merciless Gladiator\'s Battlegear', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** Reduces cooldown of Intercept by 5 sec.\n**4-Set:** +5% Weapon Damage.' },
                        s3: { name: 'Vengeful Gladiator\'s Battlegear', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** Reduces cooldown of Intercept by 5 sec.\n**4-Set:** +5% Weapon Damage.' },
                        s4: { name: 'Brutal Gladiator\'s Battlegear', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** Reduces cooldown of Intercept by 5 sec.\n**4-Set:** +5% Weapon Damage.' }
                    },
                    sets: {
                        t4: {
                            name: 'Warbringer Battlegear',
                            image: 'https://i.imgur.com/OT9zyqM.jpeg',
                            bonus: '**2-Set:** Your Whirlwind ability costs 10 less rage.\n**4-Set:** You gain an additional 2 Rage each time you deal melee damage.',
                            classicBonus: 'Standard T4',
                            stats: { str: 145, crit: '5%', hit: '3%' },
                            offPieces: ['Girdle of the Endless Pit', 'Boots of the Resilient'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'High King Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose', 'Savagery'],
                            gems: ['Bold Living Ruby']
                        },
                        t5: {
                            name: 'Destroyer Battlegear',
                            image: 'https://i.imgur.com/NLimJLa.jpeg',
                            bonus: '**2-Set:** Your Overpower ability grants you 100 Attack Power for 5 sec.\n**4-Set:** Your Bloodthirst and Mortal Strike abilities cost 5 less rage.',
                            classicBonus: 'Standard T5',
                            stats: { str: 175, crit: '6%', hit: '4%' },
                            offPieces: ['Belt of One-Hundred Deaths', 'Boots of the Destroyer'],
                            source: { helm: 'Lady Vashj', shoulders: 'Void Reaver', chest: 'Kael\'thas', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose', 'Mongoose'],
                            gems: ['Bold Living Ruby']
                        },
                        t6: {
                            name: 'Onslaught Battlegear',
                            image: 'https://i.imgur.com/JAATJWE.jpeg',
                            bonus: '**2-Set:** Reduces the rage cost of your Execute ability by 3.\n**4-Set:** Increases the damage of your Mortal Strike and Bloodthirst abilities by 5%.',
                            classicBonus: 'Standard T6',
                            stats: { str: 210, crit: '7%', arp: '10%' },
                            offPieces: ['Onslaught Belt (Gorefiend)', 'Onslaught Boots (Naj\'entus)', 'Onslaught Bracers (Rage Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Rage Winterchill', belt: 'Teron Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Bracers/Belt/Boots moved to BT/Hyjal.",
                            enchants: ['Executioner'],
                            gems: ['Bold Spinel']
                        },
                        't6.5': {
                            name: 'Plate of Resounding Rings',
                            image: 'https://i.imgur.com/CJudCyD.jpeg',
                            bonus: '**2-Set:** Increases the duration of Enrage by 1.0 sec.\n**4-Set:** Enrage increases the damage of your Raging Blow by 20%.',
                            classicBonus: 'N/A',
                            stats: { str: 250, crit: '9%', arp: '20%' },
                            offPieces: ['Belt of the Silent Heart', 'Boots of the Forgotten'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "High Enrage uptime focus.",
                            enchants: ['Executioner', 'Mongoose'],
                            gems: ['Bold Crimson Spinel']
                        },
                        t1: {
                            name: 'Valor Plate (Reforged)',
                            image: 'https://i.imgur.com/IWC7Pmb.jpeg',
                            bonus: '**2-Set:** **Furious Strikes:** Bloodthirst has a +10% Critical Strike chance.\n**4-Set:** **Enraged Regeneration:** While Enraged, you regenerate 2% of your total health every 3 seconds.',
                            classicBonus: 'Classic T1',
                            stats: { str: 100, crit: '2%' },
                            offPieces: ['Belt of Valor', 'Boots of Valor'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Sustain.",
                            enchants: ['Crusader'],
                            gems: ['Bold Living Ruby']
                        },
                        t2: {
                            name: 'Wrath Plate (Reforged)',
                            image: 'https://i.imgur.com/kta2B5W.jpeg',
                            bonus: '**2-Set:** **Meat Cleaver:** Whirlwind deals 10% more damage for each target hit, stacking up to 5 times.\n**4-Set:** **Odyn\'s Fury:** Raging Blow unleashes a burst of fire, dealing fire damage to all enemies in front of you.',
                            classicBonus: 'Classic T2',
                            stats: { str: 120, crit: '3%' },
                            offPieces: ['Belt of Wrath', 'Boots of Wrath'],
                            source: { helm: 'Nefarian', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for AoE Fury.",
                            enchants: ['Crusader'],
                            gems: ['Bold Living Ruby']
                        },
                        t3: {
                            name: 'Dreadnaught Plate (Reforged)',
                            image: 'https://i.imgur.com/8nFaFqV.jpeg',
                            bonus: '**2-Set:** **Titan\'s Grip:** You can equip two-handed axes, maces, and swords in your off-hand with no penalty.\n**4-Set:** **Rampage:** Critical strikes increase your attack speed by 5%, stacking up to 5 times. At 5 stacks, you trigger a "Bloodsurge" (instant Slam).',
                            classicBonus: 'Classic T3',
                            stats: { str: 140, crit: '4%' },
                            offPieces: ['Belt of Dreadnaught', 'Boots of Dreadnaught'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged to introduce Titan's Grip.",
                            enchants: ['Mongoose'],
                            gems: ['Bold Living Ruby']
                        }
                    }
                },
                {
                    name: 'Protection',
                    role: 'Tank',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_defensivestance.jpg',
                    legendaryLink: 'thunderfury',
                    weapons: [
                        { tier: 't4', name: 'King\'s Defender', source: 'Chess Event' },
                        { tier: 't5', name: 'Mallet of the Tides', source: 'Morogrim' },
                        { tier: 't6', name: 'The Brutalizer', source: 'Supremus' },
                        { tier: 's2', name: 'Merciless Gladiator\'s Shield Wall', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Keepers of Time', name: 'Continuum Blade', type: 'Sword' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Plate', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Intervene by 5 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Plate', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Intervene by 5 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Plate', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Intervene by 5 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Plate', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Intervene by 5 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Warbringer Armor',
                            image: 'https://i.imgur.com/OT9zyqM.jpeg',
                            bonus: '**2-Set:** Your Shield Slam ability deals 10% more damage.\n**4-Set:** Your Shield Block ability grants an additional 100 block value.',
                            classicBonus: 'Standard T4',
                            stats: { stam: 200, block: 150, def: 40 },
                            offPieces: ['Girdle of the Invulnerable', 'Boots of the Protector'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Steelskin', 'Defiance'],
                            gems: ['Solid Star of Elune']
                        },
                        t5: {
                            name: 'Destroyer Armor',
                            image: 'https://i.imgur.com/NLimJLa.jpeg',
                            bonus: '**2-Set:** Each time you use your Shield Block ability, you gain 100 Block Value for 6 sec.\n**4-Set:** Your Shield Slam ability deals an additional 100% damage.',
                            classicBonus: 'Standard T5',
                            stats: { stam: 250, block: 200, def: 50 },
                            offPieces: ['Belt of the Guardian', 'Boots of the Unyielding'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'KAel', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Steelskin'],
                            gems: ['Solid Star of Elune']
                        },
                        t6: {
                            name: 'Onslaught Armor',
                            image: 'https://i.imgur.com/JAATJWE.jpeg',
                            bonus: '**2-Set:** Increases the health bonus from your Commanding Shout ability by 170.\n**4-Set:** Increases the damage of your Shield Slam ability by 10%.',
                            classicBonus: 'Standard T6',
                            stats: { stam: 300, block: 250, def: 60 },
                            offPieces: ['Onslaught Belt (Gorefiend)', 'Onslaught Boots (Naj\'entus)', 'Onslaught Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Steelskin', 'Nethercleft Leg Armor'],
                            gems: ['Solid Empyrean Sapphire']
                        },
                        't6.5': {
                            name: 'Guard of Resounding Rings',
                            image: 'https://i.imgur.com/CJudCyD.jpeg',
                            bonus: '**2-Set:** Revenge also grants a physical absorption shield equal to 20% of damage dealt.\n**4-Set:** Shield Wall now affects all party and raid members, but its reduction is set to 50% (shared).',
                            classicBonus: 'N/A',
                            stats: { stam: 350, block: 300, def: 70 },
                            offPieces: ['Belt of the Iron Prison', 'Boots of the Unbroken'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Raid-wide defensive utility added.",
                            enchants: ['Steelskin'],
                            gems: ['Solid Empyrean Sapphire']
                        },
                        t1: {
                            name: 'Valor Guard (Reforged)',
                            image: 'https://i.imgur.com/IWC7Pmb.jpeg',
                            bonus: '**2-Set:** **Vanguard:** Armor contribution from items increased by 10%.\n**4-Set:** **Into the Fray:** You gain 2% Haste for each enemy within 10 yards (up to 10%).',
                            classicBonus: 'Classic T1',
                            stats: { stam: 150, def: 20 },
                            offPieces: ['Belt of Valor', 'Boots of Valor'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for AoE Tanking.",
                            enchants: ['Stamina'],
                            gems: ['Solid Star of Elune']
                        },
                        t2: {
                            name: 'Wrath Guard (Reforged)',
                            image: 'https://i.imgur.com/kta2B5W.jpeg',
                            bonus: '**2-Set:** **Dragon Scales:** Magic damage taken reduced by 5%.\n**4-Set:** **Violent Outburst:** Shield Block now also reflects 20% of blocked physical damage back to the attacker.',
                            classicBonus: 'Classic T2',
                            stats: { stam: 180, def: 30 },
                            offPieces: ['Belt of Wrath', 'Boots of Wrath'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Magic Mitigation.",
                            enchants: ['Stamina'],
                            gems: ['Solid Star of Elune']
                        },
                        t3: {
                            name: 'Dreadnaught Guard (Reforged)',
                            image: 'https://i.imgur.com/8nFaFqV.jpeg',
                            bonus: '**2-Set:** **Shield Charge:** Shield Slam generates 50% more Rage and threat.\n**4-Set:** **Avatar:** Transform into an Avatar of Stone for 20 sec, removing all CC effects and increasing Max Health by 30%.',
                            classicBonus: 'Classic T3',
                            stats: { stam: 210, def: 40 },
                            offPieces: ['Belt of Dreadnaught', 'Boots of Dreadnaught'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Survivability Cooldowns.",
                            enchants: ['Stamina'],
                            gems: ['Solid Star of Elune']
                        }
                    }
                }
            ]
        },
        paladin: {
            name: 'Paladin',
            crest: "https://warcraft.wiki.gg/images/ClassIcon_paladin.png?ce923b",
            color: 'text-pink-500',
            specs: [
                {
                    name: 'Holy',
                    role: 'Healer',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg',
                    legendaryLink: 'valanyr',
                    weapons: [
                        { tier: 't4', name: 'Hammer of the Naaru', source: 'High King Maulgar' },
                        { tier: 't5', name: 'Hammer of Atonement', source: 'Kaz\'rogal' },
                        { tier: 't6', name: 'Crystal Spire of Karabor', source: 'Illidan' },
                        { tier: 's2', name: 'Merciless Gladiator\'s Salvation', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Sha\'tar', name: 'Gavel of Pure Light', type: 'Mace' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Redemption', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Redemption', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Redemption', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Redemption', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Justicar Raiment',
                            image: 'https://i.imgur.com/K7GQXVQ.jpeg',
                            bonus: '**2-Set:** Increases the healing of your Flash of Light spell by 10%.\n**4-Set:** Your Holy Light spell has a 10% chance to reduce the cast time of your next Holy Light by 50%.',
                            classicBonus: 'Standard T4',
                            stats: { int: 160, mp5: 20, heal: 250 },
                            offPieces: ['Girdle of Truth', 'Boots of Courage'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "Focused on single target throughput.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Noble Topaz']
                        },
                        t5: {
                            name: 'Crystalforge Raiment',
                            image: 'https://i.imgur.com/hHibhjY.jpeg',
                            bonus: '**2-Set:** Reduces the mana cost of your Holy Light spell by 10%.\n**4-Set:** Your Flash of Light spell grants the target 50 mana.',
                            classicBonus: 'Standard T5',
                            stats: { int: 190, mp5: 35, heal: 300 },
                            offPieces: ['Belt of Blasting', 'Blue Suede Shoes'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "Mana efficiency focus.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Noble Topaz']
                        },
                        t6: {
                            name: 'Lightbringer Raiment',
                            image: 'https://i.imgur.com/39W8s2x.jpeg',
                            bonus: '**2-Set:** Increases the critical strike chance of your Holy Light spell by 5%.\n**4-Set:** Your Flash of Light spell now heals for an additional 15% over 12 sec.',
                            classicBonus: 'Standard T6',
                            stats: { int: 220, mp5: 45, heal: 350, crit: '5%' },
                            offPieces: ['Lightbringer Belt (Gorefiend)', 'Lightbringer Boots (Naj\'entus)', 'Lightbringer Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Golden Spellthread'],
                            gems: ['Luminous Pyrestone']
                        },
                        't6.5': {
                            name: 'Raiment of Resounding Rings',
                            image: 'https://i.imgur.com/xswzXf1.jpeg',
                            bonus: '**2-Set:** Holy Shock critical hits reduce the cast time of your next Holy Light by 0.5 sec.\n**4-Set:** Your Holy Light spell has a chance to splash 30% of its healing to 2 nearby injured targets.',
                            classicBonus: 'N/A',
                            stats: { int: 260, mp5: 60, heal: 420, haste: '8%' },
                            offPieces: ['Belt of the Lightbearer', 'Sandals of the Light'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Introducing AoE healing capabilities to Holy Paladin.",
                            enchants: ['Golden Spellthread'],
                            gems: ['Luminous Pyrestone']
                        },
                        t1: {
                            name: 'Lawbringer Raiment (Reforged)',
                            image: 'https://i.imgur.com/vHq4wJg.jpeg',
                            bonus: '**2-Set:** **Beacon of Hope:** Healing a target below 30% health grants them a shield absorbing 10% of the amount healed.\n**4-Set:** **Divine Purpose:** Holy Shock has a 15% chance to have no cooldown.',
                            classicBonus: 'Classic T1',
                            stats: { int: 120, mp5: 15, heal: 100 },
                            offPieces: ['Belt of Law', 'Boots of Law'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Modern Holy Shock gameplay.",
                            enchants: ['Healing Power'],
                            gems: ['Luminous Living Ruby']
                        },
                        t2: {
                            name: 'Judgement Raiment (Reforged)',
                            image: 'https://i.imgur.com/kS9eQzG.jpeg',
                            bonus: '**2-Set:** **Aura Mastery:** Increases the range of your Auras by 30 yards.\n**4-Set:** **Judgement of Light:** Your Judgements now heal up to 3 nearby party members for the damage dealt.',
                            classicBonus: 'Classic T2',
                            stats: { int: 140, mp5: 25, heal: 150 },
                            offPieces: ['Belt of Judgement', 'Boots of Judgement'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Battle Healer fantasy.",
                            enchants: ['Healing Power'],
                            gems: ['Luminous Living Ruby']
                        },
                        t3: {
                            name: 'Redemption Raiment (Reforged)',
                            image: 'https://i.imgur.com/S9s4w5G.jpeg',
                            bonus: '**2-Set:** **Light of Dawn:** Holy Light reduces the remaining cooldown on Lay on Hands by 2 sec.\n**4-Set:** **Guardian:** Divine Shield now also taunts all nearby enemies for 3 seconds (usable in Raids).',
                            classicBonus: 'Classic T3',
                            stats: { int: 170, mp5: 30, heal: 200 },
                            offPieces: ['Belt of Redemption', 'Boots of Redemption'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Utility.",
                            enchants: ['Golden Spellthread'],
                            gems: ['Luminous Living Ruby']
                        }
                    }
                },
                {
                    name: 'Protection',
                    role: 'Tank',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_paladin_shieldofthetemplar.jpg',
                    legendaryLink: 'thunderfury',
                    weapons: [
                        { tier: 't4', name: 'King\'s Defender', source: 'Chess Event' },
                        { tier: 't5', name: 'Mallet of the Tides', source: 'Morogrim' },
                        { tier: 't6', name: 'The Brutalizer', source: 'Supremus' },
                        { tier: 's2', name: 'Merciless Gladiator\'s Gavel', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Keepers of Time', name: 'Continuum Blade', type: 'Sword' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Aegis', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Aegis', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Aegis', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Aegis', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Justicar Armor',
                            image: 'https://i.imgur.com/K7GQXVQ.jpeg',
                            bonus: '**2-Set:** Increases the damage dealt by your Consecration spell by 15%.\n**4-Set:** Increases the damage dealt by your Holy Shield ability by 15%.',
                            classicBonus: 'Standard T4',
                            stats: { stam: 180, int: 50, sp: 200, def: 40 },
                            offPieces: ['Girdle of the Righteous', 'Boots of the Protector'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Stamina'],
                            gems: ['Solid Star of Elune']
                        },
                        t5: {
                            name: 'Crystalforge Armor',
                            image: 'https://i.imgur.com/hHibhjY.jpeg',
                            bonus: '**2-Set:** Increases the damage dealt by your ret aura by 15%.\n**4-Set:** Each time you use your Holy Shield ability, you gain 100 Block Value for 15 sec.',
                            classicBonus: 'Standard T5',
                            stats: { stam: 220, int: 70, sp: 250, def: 50 },
                            offPieces: ['Belt of the Guardian', 'Boots of the Unyielding'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Stamina'],
                            gems: ['Solid Star of Elune']
                        },
                        t6: {
                            name: 'Lightbringer Armor',
                            image: 'https://i.imgur.com/39W8s2x.jpeg',
                            bonus: '**2-Set:** Increases the mana gained from your Spiritual Attunement ability by 10%.\n**4-Set:** Increases the damage dealt by your Consecration spell by 10%.',
                            classicBonus: 'Standard T6',
                            stats: { stam: 260, int: 90, sp: 300, def: 60 },
                            offPieces: ['Lightbringer Belt (Gorefiend)', 'Lightbringer Boots (Naj\'entus)', 'Lightbringer Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Stamina'],
                            gems: ['Solid Empyrean Sapphire']
                        },
                        't6.5': {
                            name: 'Guard of Resounding Rings',
                            image: 'https://i.imgur.com/xswzXf1.jpeg',
                            bonus: '**2-Set:** Avenger\'s Shield hits 2 additional targets.\n**4-Set:** Consecration now slows enemies movement speed by 50%.',
                            classicBonus: 'N/A',
                            stats: { stam: 300, int: 110, sp: 350, def: 70 },
                            offPieces: ['Belt of the Iron Prison', 'Boots of the Unbroken'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "AoE Control focus.",
                            enchants: ['Stamina'],
                            gems: ['Solid Empyrean Sapphire']
                        },
                        t1: {
                            name: 'Lawbringer Armor (Reforged)',
                            image: 'https://i.imgur.com/vHq4wJg.jpeg',
                            bonus: '**2-Set:** **Divine Bulwark:** Redoubt also increases your Block Value by 50.\n**4-Set:** **Righteous Defense:** Taunt now affects up to 3 targets nearby the primary target.',
                            classicBonus: 'Classic T1',
                            stats: { stam: 150, def: 20 },
                            offPieces: ['Belt of Law', 'Boots of Law'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for AoE Tanking.",
                            enchants: ['Stamina'],
                            gems: ['Solid Star of Elune']
                        },
                        t2: {
                            name: 'Judgement Armor (Reforged)',
                            image: 'https://i.imgur.com/kS9eQzG.jpeg',
                            bonus: '**2-Set:** **Retribution:** When you take damage, you deal 2% of that damage back to the attacker as Holy damage.\n**4-Set:** **Sanctified Ground:** Standing in your own Consecration reduces damage taken by 5%.',
                            classicBonus: 'Classic T2',
                            stats: { stam: 180, def: 30 },
                            offPieces: ['Belt of Judgement', 'Boots of Judgement'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Sustainability.",
                            enchants: ['Stamina'],
                            gems: ['Solid Star of Elune']
                        },
                        t3: {
                            name: 'Redemption Armor (Reforged)',
                            image: 'https://i.imgur.com/S9s4w5G.jpeg',
                            bonus: '**2-Set:** **Ardent Defender:** Passive damage reduction when below 35% health increased by 10%.\n**4-Set:** **Last Stand:** Lay on Hands can be used on yourself to heal for 50% max health with no cooldown penalty, but still triggers Forbearance.',
                            classicBonus: 'Classic T3',
                            stats: { stam: 210, def: 40 },
                            offPieces: ['Belt of Redemption', 'Boots of Redemption'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Survival.",
                            enchants: ['Stamina'],
                            gems: ['Solid Star of Elune']
                        }
                    }
                },
                {
                    name: 'Retribution',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_auraoflight.jpg',
                    legendaryLink: 'ashbringer',
                    weapons: [
                        { tier: 't4', name: 'Lionheart executioner', source: 'Blacksmithing' },
                        { tier: 't5', name: 'World Breaker', source: 'Fathom-Lord Karathress' },
                        { tier: 't6', name: 'Torch of the Damned', source: 'Reliquary of Souls' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Bonegrinder', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Shattered Sun', name: 'Blade of the Incarnate', type: 'Sword' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Scaled Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Scaled Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Scaled Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Scaled Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Hammer of Justice by 10 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Justicar Battlegear',
                            image: 'https://i.imgur.com/K7GQXVQ.jpeg',
                            bonus: '**2-Set:** Increases the damage dealt by your Crusader Strike ability by 10%.\n**4-Set:** Increases the damage dealt by your Judgement ability by 10%.',
                            classicBonus: 'Standard T4',
                            stats: { str: 150, crit: '4%', hit: '3%' },
                            offPieces: ['Girdle of the Righteous', 'Boots of the Righteous'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Savage'],
                            gems: ['Bold Living Ruby']
                        },
                        t5: {
                            name: 'Crystalforge Battlegear',
                            image: 'https://i.imgur.com/hHibhjY.jpeg',
                            bonus: '**2-Set:** Judgement has a chance to grant 50 mana to all party members.\n**4-Set:** Your Judgement deals additional damage equal to 15% of your Attack Power.',
                            classicBonus: 'Standard T5',
                            stats: { str: 180, crit: '5%', hit: '4%' },
                            offPieces: ['Belt of One-Hundred Deaths', 'Boots of the Destroyer'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose'],
                            gems: ['Bold Living Ruby']
                        },
                        t6: {
                            name: 'Lightbringer Battlegear',
                            image: 'https://i.imgur.com/39W8s2x.jpeg',
                            bonus: '**2-Set:** Your melee attacks have a chance to increase your Spell Power by 200 for 15 sec.\n**4-Set:** Increases the damage dealt by your Divine Storm by 10%.',
                            classicBonus: 'Standard T6',
                            stats: { str: 210, crit: '6%', haste: '5%' },
                            offPieces: ['Lightbringer Belt (Gorefiend)', 'Lightbringer Boots (Naj\'entus)', 'Lightbringer Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Executioner'],
                            gems: ['Bold Spinel']
                        },
                        't6.5': {
                            name: 'Battlegear of Resounding Rings',
                            image: 'https://i.imgur.com/xswzXf1.jpeg',
                            bonus: '**2-Set:** Divine Storm now hits 2 additional targets.\n**4-Set:** Crusader Strike has a 15% chance to reset the cooldown of Divine Storm.',
                            classicBonus: 'N/A',
                            stats: { str: 250, crit: '8%', haste: '10%' },
                            offPieces: ['Belt of the Silent Heart', 'Boots of the Forgotten'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "AoE Burst focus.",
                            enchants: ['Executioner'],
                            gems: ['Bold Crimson Spinel']
                        },
                        t1: {
                            name: 'Lawbringer Battlegear (Reforged)',
                            image: 'https://i.imgur.com/vHq4wJg.jpeg',
                            bonus: '**2-Set:** **Seal of Command:** Seal of Command proc rate increased by 20%.\n**4-Set:** **Crusade:** Damage dealt by Seals and Judgements increased by 10%.',
                            classicBonus: 'Classic T1',
                            stats: { str: 100, crit: '2%' },
                            offPieces: ['Belt of Law', 'Boots of Law'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Seal gameplay.",
                            enchants: ['Crusader'],
                            gems: ['Bold Living Ruby']
                        },
                        t2: {
                            name: 'Judgement Battlegear (Reforged)',
                            image: 'https://i.imgur.com/kS9eQzG.jpeg',
                            bonus: '**2-Set:** **Righteous Vengeance:** Critical strikes apply a DoT dealing 30% of the damage over 8 sec.\n**4-Set:** **Wake of Ashes:** Art of War now also resets the cooldown of Exorcism and makes it instant.',
                            classicBonus: 'Classic T2',
                            stats: { str: 120, crit: '3%' },
                            offPieces: ['Belt of Judgement', 'Boots of Judgement'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Proc gameplay.",
                            enchants: ['Crusader'],
                            gems: ['Bold Living Ruby']
                        },
                        t3: {
                            name: 'Redemption Battlegear (Reforged)',
                            image: 'https://i.imgur.com/S9s4w5G.jpeg',
                            bonus: '**2-Set:** **Templar\'s Verdict:** Judgement consumes all active Seals to deal massive holy damage.\n**4-Set:** **Wings:** Avenging Wrath duration increased by 5 seconds.',
                            classicBonus: 'Classic T3',
                            stats: { str: 140, crit: '4%' },
                            offPieces: ['Belt of Redemption', 'Boots of Redemption'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Burst Windows.",
                            enchants: ['Mongoose'],
                            gems: ['Bold Living Ruby']
                        }
                    }
                }
            ]
        },
        hunter: {
            name: 'Hunter',
            crest: "https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d",
            color: 'text-green-500',
            specs: [
                {
                    name: 'Beast Mastery',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_beasttaming.jpg',
                    legendaryLink: 'thoridal',
                    weapons: [
                        { tier: 't4', name: 'Sunfury Bow of the Phoenix', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Serpent Spine Longbow', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Black Bow of the Betrayer', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Longbow', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Cenarion Expedition', name: 'Ashyen\'s Gift', type: 'Ring' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Chain Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Multi-Shot by 1 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Chain Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Multi-Shot by 1 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Chain Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Multi-Shot by 1 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Chain Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Multi-Shot by 1 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Demon Stalker Armor',
                            image: 'https://i.imgur.com/8Go2qXQ.jpeg',
                            bonus: '**2-Set:** Reduces the chance your Feign Death ability will be resisted by 5%.\n**4-Set:** Reduces the cooldown of your Kill Command ability by 2 sec.',
                            classicBonus: 'Standard T4',
                            stats: { agi: 150, int: 80, ap: 200, crit: '4%' },
                            offPieces: ['Belt of the Tracker', 'Boots of the Stalker'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Savage'],
                            gems: ['Delicate Living Ruby']
                        },
                        t5: {
                            name: 'Rift Stalker Armor',
                            image: 'https://i.imgur.com/g8sVPwN.png',
                            bonus: '**2-Set:** Your pet heals for 15% of the damage you deal.\n**4-Set:** Your Steady Shot ability has a 5% chance to grant you 20% attack power for 10 sec.',
                            classicBonus: 'Standard T5',
                            stats: { agi: 180, int: 90, ap: 250, crit: '5%' },
                            offPieces: ['Belt of the Black Eagle', 'Boots of the Crimson Hawk'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Savage'],
                            gems: ['Delicate Living Ruby']
                        },
                        t6: {
                            name: 'Gronnstalker\'s Armor',
                            image: 'https://i.imgur.com/fa3Okw7.png',
                            bonus: '**2-Set:** Increases the mana restored by your Aspect of the Viper by an additional 5%.\n**4-Set:** Increases the damage dealt by your Steady Shot ability by 10%.',
                            classicBonus: 'Standard T6',
                            stats: { agi: 210, int: 100, ap: 300, crit: '6%' },
                            offPieces: ['Gronnstalker\'s Belt (Gorefiend)', 'Gronnstalker\'s Boots (Naj\'entus)', 'Gronnstalker\'s Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Savage'],
                            gems: ['Delicate Spinel']
                        },
                        't6.5': {
                            name: 'Harness of the Golden Forest',
                            image: 'https://i.imgur.com/gwvWJ4h.jpeg',
                            bonus: '**2-Set:** Kill Command no longer consumes a charge of your pet\'s special attacks (Claw/Bite).\n**4-Set:** Auto Shot critical strikes reduce the cooldown of Bestial Wrath by 2 seconds.',
                            classicBonus: 'N/A',
                            stats: { agi: 250, int: 120, ap: 350, crit: '8%', haste: '5%' },
                            offPieces: ['Belt of the Silent Hunt', 'Boots of the Verdant Path'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Endless Bestial Wrath fantasy.",
                            enchants: ['Savage'],
                            gems: ['Delicate Cardinal Ruby']
                        },
                        t1: {
                            name: 'Giantstalker Harness (Reforged)',
                            image: 'https://i.imgur.com/th5jcI9.png',
                            bonus: '**2-Set:** **Cobra Strikes:** Kill Command criticals reset the cooldown of Kill Shot.\n**4-Set:** **Dire Beast:** Steady Shot has a 10% chance to summon a Dire Beast to fight for you for 8 sec.',
                            classicBonus: 'Classic T1',
                            stats: { agi: 100, ap: 150, crit: '3%' },
                            offPieces: ['Belt of Giantstalker', 'Boots of Giantstalker'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Swarm gameplay.",
                            enchants: ['Agility'],
                            gems: ['Delicate Living Ruby']
                        },
                        t2: {
                            name: 'Dragonstalker Harness (Reforged)',
                            image: 'https://i.imgur.com/obcbDFp.png',
                            bonus: '**2-Set:** **Bestial Strength:** Your Pet deals 15% increased damage while under the effects of Bestial Wrath.\n**4-Set:** **Call of the Wild:** All your stable pets are summoned to fight for 12 seconds (3 min CD).',
                            classicBonus: 'Classic T2',
                            stats: { agi: 120, ap: 180, crit: '4%' },
                            offPieces: ['Reclaimed Belt of the Dragon', 'Reclaimed Boots of the Dragon'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Zoo build.",
                            enchants: ['Agility'],
                            gems: ['Delicate Living Ruby']
                        },
                        t3: {
                            name: 'Cryptstalker Harness (Reforged)',
                            image: 'https://i.imgur.com/PWlF02L.png',
                            bonus: '**2-Set:** **Pack Leader:** Kill Command has 2 charges.\n**4-Set:** **Titanspar:** Steady Shot applies a "Lacerating Wound" that increases pet damage by 5%, stacking 3 times.',
                            classicBonus: 'Classic T3',
                            stats: { agi: 140, ap: 200, crit: '5%' },
                            offPieces: ['Reclaimed Belt of the Crypt', 'Reclaimed Boots of the Crypt'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Pet Scaling.",
                            enchants: ['Savage'],
                            gems: ['Delicate One']
                        }
                    }
                },
                {
                    name: 'Marksmanship',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_focusedaim.jpg',
                    legendaryLink: 'thoridal',
                    weapons: [
                        { tier: 't4', name: 'Wolfslayer Sniper Rifle', source: 'Opera Event' },
                        { tier: 't5', name: 'Bristleblitz Striker', source: 'Archimonde' },
                        { tier: 't6', name: 'Golden Bow of Quel\'Thalas', source: 'Twins' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Rifle', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Honor Hold', name: 'Hellfire Ammo Pouch', type: 'Bag' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Pursuit', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Multi-Shot by 1 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Pursuit', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Multi-Shot by 1 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Pursuit', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Multi-Shot by 1 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Pursuit', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Multi-Shot by 1 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Demon Stalker Armor',
                            image: 'https://i.imgur.com/8Go2qXQ.jpeg',
                            bonus: '**2-Set:** Reduces the chance your Feign Death ability will be resisted by 5%.\n**4-Set:** Reduces the cooldown of your Kill Command ability by 2 sec.',
                            classicBonus: 'Standard T4',
                            stats: { agi: 150, int: 80, ap: 200, crit: '4%' },
                            offPieces: ['Belt of the Tracker', 'Boots of the Stalker'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Savage'],
                            gems: ['Delicate Living Ruby']
                        },
                        t5: {
                            name: 'Rift Stalker Armor',
                            image: 'https://i.imgur.com/g8sVPwN.png',
                            bonus: '**2-Set:** Your pet heals for 15% of the damage you deal.\n**4-Set:** Your Steady Shot ability has a 5% chance to grant you 20% attack power for 10 sec.',
                            classicBonus: 'Standard T5',
                            stats: { agi: 180, int: 90, ap: 250, crit: '5%' },
                            offPieces: ['Belt of the Black Eagle', 'Boots of the Crimson Hawk'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Savage'],
                            gems: ['Delicate Living Ruby']
                        },
                        t6: {
                            name: 'Gronnstalker\'s Armor',
                            image: 'https://i.imgur.com/fa3Okw7.png',
                            bonus: '**2-Set:** Increases the mana restored by your Aspect of the Viper by an additional 5%.\n**4-Set:** Increases the damage dealt by your Steady Shot ability by 10%.',
                            classicBonus: 'Standard T6',
                            stats: { agi: 210, int: 100, ap: 300, crit: '6%' },
                            offPieces: ['Gronnstalker\'s Belt (Gorefiend)', 'Gronnstalker\'s Boots (Naj\'entus)', 'Gronnstalker\'s Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Savage'],
                            gems: ['Delicate Spinel']
                        },
                        't6.5': {
                            name: 'Armor of the Golden Forest',
                            image: 'https://i.imgur.com/gwvWJ4h.jpeg',
                            bonus: '**2-Set:** Aimed Shot costs 100% less Focus.\n**4-Set:** Your Steady Shot critical strikes have a 10% increased critical damage.',
                            classicBonus: 'N/A',
                            stats: { agi: 250, ap: 350, crit: '8%', arp: '15%' },
                            offPieces: ['Belt of the Silent Hunt', 'Boots of the Verdant Path'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Sniper focus.",
                            enchants: ['Savage'],
                            gems: ['Delicate Cardinal Ruby']
                        },
                        t1: {
                            name: 'Giantstalker Armor (Reforged)',
                            image: 'https://i.imgur.com/th5jcI9.png',
                            bonus: '**2-Set:** **Eagle Eye:** Range of all shots increased by 5 yards.\n**4-Set:** **Dead Eye:** Aimed Shot cast time reduced by 50%.',
                            classicBonus: 'Classic T1',
                            stats: { agi: 100, ap: 150, crit: '3%' },
                            offPieces: ['Belt of Giantstalker', 'Boots of Giantstalker'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Range/Cast Time.",
                            enchants: ['Agility'],
                            gems: ['Delicate Living Ruby']
                        },
                        t2: {
                            name: 'Dragonstalker Armor (Reforged)',
                            image: 'https://i.imgur.com/obcbDFp.png',
                            bonus: '**2-Set:** **Rapid Killing:** Killing an enemy resets the cooldown of Rapid Fire.\n**4-Set:** **Windburst:** Aimed Shot leaves a wind trail, increasing movement speed of allies by 40%.',
                            classicBonus: 'Classic T2',
                            stats: { agi: 120, ap: 180, crit: '4%' },
                            offPieces: ['Reclaimed Belt of the Dragon', 'Reclaimed Boots of the Dragon'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Mobility/Reset.",
                            enchants: ['Agility'],
                            gems: ['Delicate Living Ruby']
                        },
                        t3: {
                            name: 'Cryptstalker Armor (Reforged)',
                            image: 'https://i.imgur.com/PWlF02L.png',
                            bonus: '**2-Set:** **Dark Ranger:** Black Arrow now silences the target for 3 sec.\n**4-Set:** **Wailing Arrow:** Chimera Shot splashes shadow damage to all enemies within 8 yards.',
                            classicBonus: 'Classic T3',
                            stats: { agi: 140, ap: 200, crit: '5%' },
                            offPieces: ['Reclaimed Belt of the Crypt', 'Reclaimed Boots of the Crypt'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Dark Ranger fantasy.",
                            enchants: ['Savage'],
                            gems: ['Delicate One']
                        }
                    }
                },
                {
                    name: 'Survival',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_camouflage.jpg',
                    legendaryLink: 'thoridal',
                    weapons: [
                        { tier: 't4', name: 'Legacy', source: 'Opera Event' },
                        { tier: 't5', name: 'Twinblade of the Phoenix', source: 'Kael\'thas' },
                        { tier: 't6', name: 'Halberd of Desolation', source: 'High Warlord Naj\'entus' },
                        { tier: 's4', name: 'Brutal Gladiator\'s Painsaw', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Thrallmar', name: 'Marksman\'s Belt', type: 'Mail' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Camouflage', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Wyvern Sting by 15 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Camouflage', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Wyvern Sting by 15 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Camouflage', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Wyvern Sting by 15 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Camouflage', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces cooldown of Wyvern Sting by 15 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Demon Stalker Armor',
                            image: 'https://i.imgur.com/8Go2qXQ.jpeg',
                            bonus: '**2-Set:** Reduces the chance your Feign Death ability will be resisted by 5%.\n**4-Set:** Reduces the cooldown of your Kill Command ability by 2 sec.',
                            classicBonus: 'Standard T4',
                            stats: { agi: 150, int: 80, ap: 200, crit: '4%' },
                            offPieces: ['Belt of the Tracker', 'Boots of the Stalker'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Savage'],
                            gems: ['Delicate Living Ruby']
                        },
                        t5: {
                            name: 'Rift Stalker Armor',
                            image: 'https://i.imgur.com/g8sVPwN.png',
                            bonus: '**2-Set:** Your pet heals for 15% of the damage you deal.\n**4-Set:** Your Steady Shot ability has a 5% chance to grant you 20% attack power for 10 sec.',
                            classicBonus: 'Standard T5',
                            stats: { agi: 180, int: 90, ap: 250, crit: '5%' },
                            offPieces: ['Belt of the Black Eagle', 'Boots of the Crimson Hawk'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Savage'],
                            gems: ['Delicate Living Ruby']
                        },
                        t6: {
                            name: 'Gronnstalker\'s Armor',
                            image: 'https://i.imgur.com/fa3Okw7.png',
                            bonus: '**2-Set:** Increases the mana restored by your Aspect of the Viper by an additional 5%.\n**4-Set:** Increases the damage dealt by your Steady Shot ability by 10%.',
                            classicBonus: 'Standard T6',
                            stats: { agi: 210, int: 100, ap: 300, crit: '6%' },
                            offPieces: ['Gronnstalker\'s Belt (Gorefiend)', 'Gronnstalker\'s Boots (Naj\'entus)', 'Gronnstalker\'s Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Savage'],
                            gems: ['Delicate Spinel']
                        },
                        't6.5': {
                            name: 'Guise of the Golden Forest',
                            image: 'https://i.imgur.com/gwvWJ4h.jpeg',
                            bonus: '**2-Set:** Steady Shot and Cobra Shot have a 10% chance to trigger a Flaming Arrow, dealing instant Fire damage.\n**4-Set:** Your Auto Shots have a 10% chance to make your next Explosive Shot or Arcane Shot cost no focus.',
                            classicBonus: 'N/A',
                            stats: { agi: 250, ap: 350, crit: '8%', mastery: '10%' },
                            offPieces: ['Belt of the Silent Hunt', 'Boots of the Verdant Path'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Magic Damage Archer.",
                            enchants: ['Savage'],
                            gems: ['Delicate Cardinal Ruby']
                        },
                        t1: {
                            name: 'Giantstalker Guise (Reforged)',
                            image: 'https://i.imgur.com/th5jcI9.png',
                            bonus: '**2-Set:** **Wildfire:** Explosive Trap burns enemies for 20% more damage.\n**4-Set:** **Hydra\'s Bite:** Serpent Sting shoots arrows at 2 additional nearby targets.',
                            classicBonus: 'Classic T1',
                            stats: { agi: 100, ap: 150, crit: '3%' },
                            offPieces: ['Belt of Giantstalker', 'Boots of Giantstalker'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for DoT Spread.",
                            enchants: ['Agility'],
                            gems: ['Delicate Living Ruby']
                        },
                        t2: {
                            name: 'Dragonstalker Guise (Reforged)',
                            image: 'https://i.imgur.com/obcbDFp.png',
                            bonus: '**2-Set:** **Wyvern Sting:** Cooldown reduced by 30 sec, and now deals high Nature damage over time.\n**4-Set:** **Viper\'s Venom:** Mongoose Bite has a 30% chance to reset the cooldown of Explosive Shot.',
                            classicBonus: 'Classic T2',
                            stats: { agi: 120, ap: 180, crit: '4%' },
                            offPieces: ['Reclaimed Belt of the Dragon', 'Reclaimed Boots of the Dragon'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Melee/Ranged hybrid weaving.",
                            enchants: ['Agility'],
                            gems: ['Delicate Living Ruby']
                        },
                        t3: {
                            name: 'Cryptstalker Guise (Reforged)',
                            image: 'https://i.imgur.com/PWlF02L.png',
                            bonus: '**2-Set:** **Camouflage:** You heal for 5% of your max health every sec while in Camouflage (Stealth).\n**4-Set:** **Butchery:** Carve (Melee AoE) reduces the cooldown of your Wildfire Bomb by 1 sec for each target hit.',
                            classicBonus: 'Classic T3',
                            stats: { agi: 140, ap: 200, crit: '5%' },
                            offPieces: ['Reclaimed Belt of the Crypt', 'Reclaimed Boots of the Crypt'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Survival Melee.",
                            enchants: ['Savage'],
                            gems: ['Delicate One']
                        }
                    }
                }
            ]
        },
        rogue: {
            name: 'Rogue',
            crest: "https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1",
            color: 'text-yellow-500',
            specs: [
                {
                    name: 'Assassination',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_eviscerate.jpg',
                    legendaryLink: 'warglaives',
                    weapons: [
                        { tier: 't4', name: 'Emerald Ripper', source: 'Moroes' },
                        { tier: 't5', name: 'Fangs of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Shard of Azzinoth', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Shanker', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Lower City', name: 'Shiffar\'s Nexus-Horn', type: 'Trinket' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Leather Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' },
                        s2: { name: 'Merciless Gladiator\'s Leather Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' },
                        s3: { name: 'Vengeful Gladiator\'s Leather Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' },
                        s4: { name: 'Brutal Gladiator\'s Leather Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' }
                    },
                    sets: {
                        t4: {
                            name: 'Netherblade Armor',
                            image: 'https://i.imgur.com/Kz8j8qJ.jpeg',
                            bonus: '**2-Set:** Increases the duration of your Slice and Dice ability by 3 sec.\n**4-Set:** Your finishing moves have a 15% chance to grant you an extra combo point.',
                            classicBonus: 'Standard T4',
                            stats: { agi: 160, ap: 220, hit: '5%', crit: '5%' },
                            offPieces: ['Belt of Deep Shadow', 'Edgewalker Longboots'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t5: {
                            name: 'Deathmantle Armor',
                            image: 'https://i.imgur.com/8Qe5kZz.jpeg',
                            bonus: '**2-Set:** Your Eviscerate and Envenom abilities deal 40 additional damage per combo point.\n**4-Set:** Your attacks have a chance to make your next finishing move cost no energy.',
                            classicBonus: 'Standard T5',
                            stats: { agi: 190, ap: 270, hit: '6%', crit: '6%' },
                            offPieces: ['Belt of One-Hundred Deaths', 'Boots of Effect'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t6: {
                            name: 'Slayer\'s Armor',
                            image: 'https://i.imgur.com/L3r0k8G.jpeg',
                            bonus: '**2-Set:** Increases the haste from your Slice and Dice ability by 5%.\n**4-Set:** Increases the damage dealt by your Backstab, Sinister Strike, Mutilate, and Hemorrhage abilities by 6%.',
                            classicBonus: 'Standard T6',
                            stats: { agi: 220, ap: 320, hit: '7%', crit: '7%', haste: '5%' },
                            offPieces: ['Slayer\'s Belt (Gorefiend)', 'Slayer\'s Boots (Naj\'entus)', 'Slayer\'s Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Spinel']
                        },
                        't6.5': {
                            name: 'Tunic of the Silent Assassin',
                            image: 'https://i.imgur.com/WN4zw2T.jpeg',
                            bonus: '**2-Set:** Mutilate also causes the target to Bleed for 30% additional damage over 6 sec.\n**4-Set:** Envenom deals 10% additional damage per Bleed you have on the target.',
                            classicBonus: 'N/A',
                            stats: { agi: 260, ap: 380, hit: '8%', crit: '9%', haste: '10%' },
                            offPieces: ['Midnight Sun Belt', 'Shadowmaster\'s Boots'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Bleed/Envenom synergy.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Cardinal Ruby']
                        },
                        t1: {
                            name: 'Nightslayer Tunic (Reforged)',
                            image: 'https://i.imgur.com/zX0qg6h.jpeg',
                            bonus: '**2-Set:** **Master Poisoner:** Mutilate costs 10 less Energy.\n**4-Set:** **System Shock:** Envenom critical strikes silence the target for 1.5 sec (6 sec internal CD).',
                            classicBonus: 'Classic T1',
                            stats: { agi: 100, ap: 150, crit: '3%' },
                            offPieces: ['Nightslayer Belt', 'Nightslayer Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for PvP Control.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t2: {
                            name: 'Bloodfang Tunic (Reforged)',
                            image: 'https://i.imgur.com/Xy0Zq8M.jpeg',
                            bonus: '**2-Set:** **Toxic Blade:** Shiv now applies 2 stacks of Deadly Poison.\n**4-Set:** **Kingsbane:** Vendetta applies a lethal poison, dealing massive nature damage over 12 seconds.',
                            classicBonus: 'Classic T2',
                            stats: { agi: 120, ap: 180, crit: '4%' },
                            offPieces: ['Bloodfang Belt', 'Bloodfang Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Heavy Poison.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t3: {
                            name: 'Bonescythe Tunic (Reforged)',
                            image: 'https://i.imgur.com/q7r3b9N.jpeg',
                            bonus: '**2-Set:** **Blindside:** Envenom has a 20% chance to reset the cooldown of Mutilate.\n**4-Set:** **Sudden Demise:** Your Bleed ticks have a chance to deal instant Nature damage based on your Attack Power.',
                            classicBonus: 'Classic T3',
                            stats: { agi: 140, ap: 200, crit: '5%' },
                            offPieces: ['Bonescythe Belt', 'Bonescythe Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Execute/Reset.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate One']
                        }
                    }
                },
                {
                    name: 'Combat',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_bladeflurry.jpg',
                    legendaryLink: 'warglaives',
                    weapons: [
                        { tier: 't4', name: 'Spiteblade', source: 'Netherspite' },
                        { tier: 't5', name: 'Talon of Azshara', source: 'Morogrim' },
                        { tier: 't6', name: 'Blade of Savagery', source: 'Mother Shahraz' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Slicer', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Aldor', name: 'Vindicator\'s Brand', type: 'Sword' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Leather Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' },
                        s2: { name: 'Merciless Gladiator\'s Leather Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' },
                        s3: { name: 'Vengeful Gladiator\'s Leather Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' },
                        s4: { name: 'Brutal Gladiator\'s Leather Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' }
                    },
                    sets: {
                        t4: {
                            name: 'Netherblade Armor',
                            image: 'https://i.imgur.com/Kz8j8qJ.jpeg',
                            bonus: '**2-Set:** Increases the duration of your Slice and Dice ability by 3 sec.\n**4-Set:** Your finishing moves have a 15% chance to grant you an extra combo point.',
                            classicBonus: 'Standard T4',
                            stats: { agi: 160, ap: 220, hit: '5%', crit: '5%' },
                            offPieces: ['Belt of Deep Shadow', 'Edgewalker Longboots'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t5: {
                            name: 'Deathmantle Armor',
                            image: 'https://i.imgur.com/8Qe5kZz.jpeg',
                            bonus: '**2-Set:** Your Eviscerate and Envenom abilities deal 40 additional damage per combo point.\n**4-Set:** Your attacks have a chance to make your next finishing move cost no energy.',
                            classicBonus: 'Standard T5',
                            stats: { agi: 190, ap: 270, hit: '6%', crit: '6%' },
                            offPieces: ['Belt of One-Hundred Deaths', 'Boots of Effect'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t6: {
                            name: 'Slayer\'s Armor',
                            image: 'https://i.imgur.com/L3r0k8G.jpeg',
                            bonus: '**2-Set:** Increases the haste from your Slice and Dice ability by 5%.\n**4-Set:** Increases the damage dealt by your Backstab, Sinister Strike, Mutilate, and Hemorrhage abilities by 6%.',
                            classicBonus: 'Standard T6',
                            stats: { agi: 220, ap: 320, hit: '7%', crit: '7%', haste: '5%' },
                            offPieces: ['Slayer\'s Belt (Gorefiend)', 'Slayer\'s Boots (Naj\'entus)', 'Slayer\'s Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Spinel']
                        },
                        't6.5': {
                            name: 'Chestpiece of the Silent Assassin',
                            image: 'https://i.imgur.com/WN4zw2T.jpeg',
                            bonus: '**2-Set:** Your Blade Flurry ability now has 2 charges and its cooldown is reduced by 30 seconds.\n**4-Set:** Your finishing moves have a 15% chance to grant [Adrenaline Rush] for 3 seconds.',
                            classicBonus: 'N/A',
                            stats: { agi: 260, ap: 380, hit: '8%', crit: '9%', haste: '10%' },
                            offPieces: ['Midnight Sun Belt', 'Shadowmaster\'s Boots'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "AoE Cleave focus.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Cardinal Ruby']
                        },
                        t1: {
                            name: 'Nightslayer Chestpiece (Reforged)',
                            image: 'https://i.imgur.com/zX0qg6h.jpeg',
                            bonus: '**2-Set:** **Blade Flurry:** Blade Flurry now has 2 charges.\n**4-Set:** **Adrenaline:** Adrenaline Rush lasts 5 seconds longer.',
                            classicBonus: 'Classic T1',
                            stats: { agi: 100, ap: 150, crit: '3%' },
                            offPieces: ['Nightslayer Belt', 'Nightslayer Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Cleave.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t2: {
                            name: 'Bloodfang Chestpiece (Reforged)',
                            image: 'https://i.imgur.com/Xy0Zq8M.jpeg',
                            bonus: '**2-Set:** **Broadsides:** Sinister Strike has a 20% chance to generate an additional Combo Point.\n**4-Set:** **Roll the Bones:** Finishing moves grant a random combat enhancement for 10 sec (Crit, Haste, or Energy Regen).',
                            classicBonus: 'Classic T2',
                            stats: { agi: 120, ap: 180, crit: '4%' },
                            offPieces: ['Bloodfang Belt', 'Bloodfang Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for RNG/Proc.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t3: {
                            name: 'Bonescythe Chestpiece (Reforged)',
                            image: 'https://i.imgur.com/q7r3b9N.jpeg',
                            bonus: '**2-Set:** **Revealing Strike:** Sinister Strike increases the damage of your next Eviscerate by 10%.\n**4-Set:** **Killing Spree:** Killing Spree grants you total immunity to all damage and effects while active.',
                            classicBonus: 'Classic T3',
                            stats: { agi: 140, ap: 200, crit: '5%' },
                            offPieces: ['Bonescythe Belt', 'Bonescythe Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Immunity/Survival.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate One']
                        }
                    }
                },
                {
                    name: 'Subtlety',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg',
                    legendaryLink: 'warglaives',
                    weapons: [
                        { tier: 't4', name: 'Malchameen', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of Vashj', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Shard of Azzinoth', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Shanker', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Consortium', name: 'Guile of Khoraazi', type: 'Dagger' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Leather Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/184/696.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' },
                        s2: { name: 'Merciless Gladiator\'s Leather Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/6/518.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' },
                        s3: { name: 'Vengeful Gladiator\'s Leather Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' },
                        s4: { name: 'Brutal Gladiator\'s Leather Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/2/514.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your energy capacity by 10.' }
                    },
                    sets: {
                        t4: {
                            name: 'Netherblade Armor',
                            image: 'https://i.imgur.com/Kz8j8qJ.jpeg',
                            bonus: '**2-Set:** Increases the duration of your Slice and Dice ability by 3 sec.\n**4-Set:** Your finishing moves have a 15% chance to grant you an extra combo point.',
                            classicBonus: 'Standard T4',
                            stats: { agi: 160, ap: 220, hit: '5%', crit: '5%' },
                            offPieces: ['Belt of Deep Shadow', 'Edgewalker Longboots'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t5: {
                            name: 'Deathmantle Armor',
                            image: 'https://i.imgur.com/8Qe5kZz.jpeg',
                            bonus: '**2-Set:** Your Eviscerate and Envenom abilities deal 40 additional damage per combo point.\n**4-Set:** Your attacks have a chance to make your next finishing move cost no energy.',
                            classicBonus: 'Standard T5',
                            stats: { agi: 190, ap: 270, hit: '6%', crit: '6%' },
                            offPieces: ['Belt of One-Hundred Deaths', 'Boots of Effect'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t6: {
                            name: 'Slayer\'s Armor',
                            image: 'https://i.imgur.com/L3r0k8G.jpeg',
                            bonus: '**2-Set:** Increases the haste from your Slice and Dice ability by 5%.\n**4-Set:** Increases the damage dealt by your Backstab, Sinister Strike, Mutilate, and Hemorrhage abilities by 6%.',
                            classicBonus: 'Standard T6',
                            stats: { agi: 220, ap: 320, hit: '7%', crit: '7%', haste: '5%' },
                            offPieces: ['Slayer\'s Belt (Gorefiend)', 'Slayer\'s Boots (Naj\'entus)', 'Slayer\'s Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Spinel']
                        },
                        't6.5': {
                            name: 'Vest of the Silent Assassin',
                            image: 'https://i.imgur.com/WN4zw2T.jpeg',
                            bonus: '**2-Set:** Vanish generates 5 Combo Points and increases damage dealt by 30% for 10 sec.\n**4-Set:** Eviscerate and Rupture reduce the cooldown of Vanish by 1 sec per Combo Point spent.',
                            classicBonus: 'N/A',
                            stats: { agi: 260, ap: 380, hit: '8%', crit: '9%', haste: '10%' },
                            offPieces: ['Midnight Sun Belt', 'Shadowmaster\'s Boots'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Stealth/Vanish focus.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Cardinal Ruby']
                        },
                        t1: {
                            name: 'Nightslayer Vest (Reforged)',
                            image: 'https://i.imgur.com/zX0qg6h.jpeg',
                            bonus: '**2-Set:** **Shadowstrike:** Ambush teleports you to your target (25 yd range).\n**4-Set:** **First Blood:** Eviscerate deals 50% increased damage to targets below 35% health.',
                            classicBonus: 'Classic T1',
                            stats: { agi: 100, ap: 150, crit: '3%' },
                            offPieces: ['Nightslayer Belt', 'Nightslayer Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Mobility/Execute.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t2: {
                            name: 'Bloodfang Vest (Reforged)',
                            image: 'https://i.imgur.com/Xy0Zq8M.jpeg',
                            bonus: '**2-Set:** **Shadow Techniques:** Auto-attacks have a chance to generate Combo Points.\n**4-Set:** **Secret Technique:** Eviscerate creates a shadow clone that mimics your finisher.',
                            classicBonus: 'Classic T2',
                            stats: { agi: 120, ap: 180, crit: '4%' },
                            offPieces: ['Bloodfang Belt', 'Bloodfang Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Clone generation.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate Living Ruby']
                        },
                        t3: {
                            name: 'Bonescythe Vest (Reforged)',
                            image: 'https://i.imgur.com/q7r3b9N.jpeg',
                            bonus: '**2-Set:** **Envelope of Shadows:** Vanish grants you a shield absorbing 30% of your max health.\n**4-Set:** **Akaari\'s Soul:** Shadowstrike (Ambush) leaves a soul fragment on the target that explodes for Shadow damage after 2 seconds.',
                            classicBonus: 'Classic T3',
                            stats: { agi: 140, ap: 200, crit: '5%' },
                            offPieces: ['Bonescythe Belt', 'Bonescythe Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Shadow Damage.",
                            enchants: ['Mongoose'],
                            gems: ['Delicate One']
                        }
                    }
                }
            ]
        },
        priest: {
            name: 'Priest',
            crest: "https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800",
            color: 'text-white',
            specs: [
                {
                    name: 'Discipline',
                    role: 'Healer',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg',
                    legendaryLink: 'valanyr',
                    weapons: [
                        { tier: 't4', name: 'Light\'s Justice', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of Vashj', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Crystal Spire of Karabor', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Gavel', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Sha\'tar', name: 'Gavel of Pure Light', type: 'Mace' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Satin Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/185/697.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Satin Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/7/519.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Satin Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/17/529.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Satin Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/3/515.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Incarnate Regalia',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Your Prayer of Healing spell now heals for an additional 150.\n**4-Set:** Your Flash Heal spell has a chance to cause your next Flash Heal to be instant cast.',
                            classicBonus: 'Standard T4',
                            stats: { int: 160, spirit: 140, heal: 250, mp5: 15 },
                            offPieces: ['Belt of Divine Inspiration', 'Boots of the Long Road'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Noble Topaz']
                        },
                        t5: {
                            name: 'Avatar Regalia',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** If your Greater Heal brings the target to full health, you gain 100 mana.\n**4-Set:** Your Renew spell lasts 3 sec longer.',
                            classicBonus: 'Standard T5',
                            stats: { int: 190, spirit: 160, heal: 300, mp5: 20 },
                            offPieces: ['Belt of the Long Road', 'Boots of the Divine Light'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Noble Topaz']
                        },
                        t6: {
                            name: 'Absolution Regalia',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Reduces the mana cost of your Prayer of Healing by 10%.\n**4-Set:** Your Greater Heal has a chance to heal your target for 334 mana.',
                            classicBonus: 'Standard T6',
                            stats: { int: 220, spirit: 180, heal: 350, mp5: 25 },
                            offPieces: ['Absolution Belt (Gorefiend)', 'Absolution Boots (Naj\'entus)', 'Absolution Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Pyrestone']
                        },
                        't6.5': {
                            name: 'Robe of Eternal Light',
                            image: 'https://i.imgur.com/YwYn8N6.jpeg',
                            bonus: '**2-Set:** The first bolt of light from your Penance deals 200% extra damage.\n**4-Set:** Power Word: Shield has a chance to cause your next Penance to be free and cast instantly.',
                            classicBonus: 'N/A',
                            stats: { int: 250, spirit: 200, heal: 400, haste: '10%' },
                            offPieces: ['Belt of Eternal Light', 'Boots of Eternal Light'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Penance synergy.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Cardinal Ruby']
                        },
                        t1: {
                            name: 'Prophecy Robe (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Penance:** Penance channel time reduced by 0.5 sec.\n**4-Set:** **Power of the Dark Side:** Penance has a chance to deal 50% increased damage/healing.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, spirit: 100, heal: 150 },
                            offPieces: ['Prophecy Belt', 'Prophecy Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Disc dps/healing.",
                            enchants: ['Healing Power'],
                            gems: ['Luminous Living Ruby']
                        },
                        t2: {
                            name: 'Transcendence Robe (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Atonement:** Power Word: Shield reflects 30% of damage absorbed as Holy damage.\n**4-Set:** **Barrier:** Power Word: Barrier grants immunity to interrupts while inside.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, spirit: 120, heal: 180 },
                            offPieces: ['Transcendence Belt', 'Transcendence Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Shields.",
                            enchants: ['Healing Power'],
                            gems: ['Luminous Living Ruby']
                        },
                        t3: {
                            name: 'Faith Robe (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Rapture:** When your Power Word: Shield is fully absorbed, you instantly regenerate 2% mana.\n**4-Set:** **Spirit Shell:** Power Infusion also wraps the target in a Spirit Shell, absorbing massive damage for 15 sec.',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, spirit: 140, heal: 210 },
                            offPieces: ['Faith Belt', 'Faith Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Tank Healing.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous One']
                        }
                    }
                },
                {
                    name: 'Holy',
                    role: 'Healer',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_guardianspirit.jpg',
                    legendaryLink: 'valanyr',
                    weapons: [
                        { tier: 't4', name: 'Shard of the Virtuous', source: 'Maiden of Virtue' },
                        { tier: 't5', name: 'Staff of Immaculate Recovery', source: 'Gurtogg Bloodboil' },
                        { tier: 't6', name: 'Crystal Spire of Karabor', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Staff', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Keepers of Time', name: 'Continuum Blade', type: 'Dagger' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Satin Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/185/697.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Satin Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/7/519.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Satin Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/17/529.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Satin Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/3/515.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Incarnate Regalia',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Your Prayer of Healing spell now heals for an additional 150.\n**4-Set:** Your Flash Heal spell has a chance to cause your next Flash Heal to be instant cast.',
                            classicBonus: 'Standard T4',
                            stats: { int: 160, spirit: 140, heal: 250, mp5: 15 },
                            offPieces: ['Belt of Divine Inspiration', 'Boots of the Long Road'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Noble Topaz']
                        },
                        t5: {
                            name: 'Avatar Regalia',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** If your Greater Heal brings the target to full health, you gain 100 mana.\n**4-Set:** Your Renew spell lasts 3 sec longer.',
                            classicBonus: 'Standard T5',
                            stats: { int: 190, spirit: 160, heal: 300, mp5: 20 },
                            offPieces: ['Belt of the Long Road', 'Boots of the Divine Light'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Noble Topaz']
                        },
                        t6: {
                            name: 'Absolution Regalia',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Reduces the mana cost of your Prayer of Healing by 10%.\n**4-Set:** Your Greater Heal has a chance to heal your target for 334 mana.',
                            classicBonus: 'Standard T6',
                            stats: { int: 220, spirit: 180, heal: 350, mp5: 25 },
                            offPieces: ['Absolution Belt (Gorefiend)', 'Absolution Boots (Naj\'entus)', 'Absolution Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Pyrestone']
                        },
                        't6.5': {
                            name: 'Vestments of Eternal Light',
                            image: 'https://i.imgur.com/YwYn8N6.jpeg',
                            bonus: '**2-Set:** Flash Heal, Heal, and Greater Heal cause you to regenerate Mana.\n**4-Set:** Your healing spells have a chance to summon a Holy Spirit that mimics your healing.',
                            classicBonus: 'N/A',
                            stats: { int: 250, spirit: 200, heal: 400, haste: '10%' },
                            offPieces: ['Belt of Eternal Light', 'Boots of Eternal Light'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Spirit/Mana Regen focus.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Cardinal Ruby']
                        },
                        t1: {
                            name: 'Prophecy Vestments (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Serendipity:** Flash Heal reduces the cast time of your next Greater Heal by 20% (Stacks 2x).\n**4-Set:** **Guardian Spirit:** Guardian Spirit cooldown reduced by 60 sec.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, spirit: 100, heal: 150 },
                            offPieces: ['Prophecy Belt', 'Prophecy Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Raid Healing.",
                            enchants: ['Healing Power'],
                            gems: ['Luminous Living Ruby']
                        },
                        t2: {
                            name: 'Transcendence Vestments (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Echo of Light:** Your direct heals leave a HoT for 10% of the amount healed.\n**4-Set:** **Apotheosis:** Reset the cooldown of all Holy Words and enter a pure Holy form for 10 sec.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, spirit: 120, heal: 180 },
                            offPieces: ['Transcendence Belt', 'Transcendence Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Holy Word gameplay.",
                            enchants: ['Healing Power'],
                            gems: ['Luminous Living Ruby']
                        },
                        t3: {
                            name: 'Faith Vestments (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Light of Naaru:** Holy Word: Serenity reduces the cooldown of Circle of Healing by 2 sec.\n**4-Set:** **Salvation:** Divine Hymn is now castable while moving and heals for 20% more.',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, spirit: 140, heal: 210 },
                            offPieces: ['Faith Belt', 'Faith Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for AoE Healing.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous One']
                        }
                    }
                },
                {
                    name: 'Shadow',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg',
                    legendaryLink: 'dragonwrath',
                    weapons: [
                        { tier: 't4', name: 'Nathrezim Mindblade', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Zhardoom, Greatstaff of the Devourer', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Staff', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Lower City', name: 'Auchenai Staff', type: 'Staff' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Satin Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/185/697.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Satin Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/7/519.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Satin Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/17/529.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Satin Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/3/515.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the weakened soul effect duration by 2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Incarnate Raiment',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Your Shadowfiend lasts 3 sec longer.\n**4-Set:** Your Mind Flay spell deals 5% more damage.',
                            classicBonus: 'Standard T4',
                            stats: { int: 160, spirit: 80, sp: 200, hit: '4%' },
                            offPieces: ['Belt of Divine Inspiration', 'Boots of the Long Road'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t5: {
                            name: 'Avatar Raiment',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** Each time you cast a Shadow spell, you have a chance to gain 132 Spell Power for 15 sec.\n**4-Set:** Your Shadow Word: Pain deals 12% more damage.',
                            classicBonus: 'Standard T5',
                            stats: { int: 190, spirit: 90, sp: 250, hit: '5%' },
                            offPieces: ['Belt of the Long Road', 'Boots of the Divine Light'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t6: {
                            name: 'Absolution Raiment',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Increases the duration of your Shadow Word: Pain by 3 sec.\n**4-Set:** Increases the damage of your Mind Blast by 10%.',
                            classicBonus: 'Standard T6',
                            stats: { int: 220, spirit: 100, sp: 300, hit: '6%', haste: '5%' },
                            offPieces: ['Absolution Belt (Gorefiend)', 'Absolution Boots (Naj\'entus)', 'Absolution Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Spinel']
                        },
                        't6.5': {
                            name: 'Shroud of Eternal Darkness',
                            image: 'https://i.imgur.com/YwYn8N6.jpeg',
                            bonus: '**2-Set:** Mind Flay no longer slows the target, but now deals damage to 2 additional nearby enemies (Smart targeting).\n**4-Set:** Vampiric Touch grants the priest 15% spell haste. Additionally, your Shadow Word: Death no longer deals damage to you if it fails to kill the target.',
                            classicBonus: 'N/A',
                            stats: { int: 250, spirit: 120, sp: 350, hit: '8%', haste: '10%' },
                            offPieces: ['Belt of Eternal Darkness', 'Boots of Eternal Darkness'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "AoE/Haste scaling.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Cardinal Ruby']
                        },
                        t1: {
                            name: 'Prophecy Shroud (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Voidform:** Mind Blast reduces the cast time of Vampiric Touch by 50%.\n**4-Set:** **Void Origins:** Erupting into Voidform (Shadowform) deals Shield damage to all enemies within 10yds.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, sp: 150, hit: '3%' },
                            offPieces: ['Prophecy Belt', 'Prophecy Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Voidform.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t2: {
                            name: 'Transcendence Shroud (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Shadowy Insights:** Shadow Word: Pain ticks have a chance to reset the cooldown of Mind Blast.\n**4-Set:** **Void Shift:** Swap health percentages with your Shadowfiend, effectively fully healing you when it dies or expires.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, sp: 180, hit: '4%' },
                            offPieces: ['Transcendence Belt', 'Transcendence Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for DoT/Mind Blast flow.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t3: {
                            name: 'Faith Shroud (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Call to the Void:** Mind Flay has a chance to spawn a Void Tentacle that channels at your target.\n**4-Set:** **Surrender to Madness:** Movement speed increased by 30% while in Shadowform. You can cast while moving for 10 sec after using Dispersion.',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, sp: 200, hit: '5%' },
                            offPieces: ['Faith Belt', 'Faith Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Mobility/Madness.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing One']
                        }
                    }
                }
            ]
        },
        shaman: {
            name: 'Shaman',
            crest: "https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62",
            color: 'text-blue-500',
            specs: [
                {
                    name: 'Elemental',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg',
                    legendaryLink: 'dragonwrath',
                    weapons: [
                        { tier: 't4', name: 'Nathrezim Mindblade', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Crystal Spire of Karabor', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Gavel', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Thrallmar', name: 'Stormcaller', type: 'Dagger' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Mail Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/171/683.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Lightning Bolt by 0.1 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Mail Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/238/750.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Lightning Bolt by 0.1 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Mail Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/18/530.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Lightning Bolt by 0.1 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Mail Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/4/516.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Lightning Bolt by 0.1 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Cyclone Regalia',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Your Wrath of Air Totem grants an additional 20 spell power.\n**4-Set:** Your Lightning Bolt critical strikes have a chance to grant 120 mana to all party members.',
                            classicBonus: 'Standard T4',
                            stats: { int: 150, sp: 200, crit: '4%', hit: '3%' },
                            offPieces: ['Belt of Gales', 'Boots of the Storm'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t5: {
                            name: 'Cataclysm Regalia',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** Reduces the cost of your Chain Lightning spell by 10%.\n**4-Set:** Your Lightning Bolt critical strikes have a chance to reduce the cast time of your next Lightning Bolt by 0.5 sec.',
                            classicBonus: 'Standard T5',
                            stats: { int: 180, sp: 250, crit: '5%', hit: '4%' },
                            offPieces: ['Belt of Blasting', 'Boots of the Nexus'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t6: {
                            name: 'Skyshatter Regalia',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Reduces the mana cost of your Lightning Bolt, Chain Lightning, and Lightning Shield spells by 10%.\n**4-Set:** Increases the damage done by your Lightning Bolt by 5%.',
                            classicBonus: 'Standard T6',
                            stats: { int: 210, sp: 300, crit: '6%', hit: '4%', haste: '5%' },
                            offPieces: ['Skyshatter Belt (Gorefiend)', 'Skyshatter Boots (Naj\'entus)', 'Skyshatter Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Spinel']
                        },
                        't6.5': {
                            name: 'Regalia of the Stormbreaker',
                            image: 'https://i.imgur.com/zFY0c5z.jpeg',
                            bonus: '**2-Set:** Reduces the cast time of Lightning Bolt by 0.1 sec and reduces its Mana cost by 10%.\n**4-Set:** Your Lightning Bolt and Chain Lightning have an extra 15% chance to trigger [Elemental Overload], duplicating the spell instantly for 50% damage and zero threat.',
                            classicBonus: 'N/A',
                            stats: { int: 240, sp: 350, crit: '7%', hit: '5%', haste: '10%' },
                            offPieces: ['Belt of the Stormbreaker', 'Boots of the Stormbreaker'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Overload/Haste focus.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Cardinal Ruby']
                        },
                        t1: {
                            name: 'Earthfury Regalia (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Echo of the Elements:** Lava Burst has 2 charges.\n**4-Set:** **Master of the Elements:** Casting Lava Burst increases your Nature damage by 10% for 10 sec.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, sp: 150, crit: '3%' },
                            offPieces: ['Earthfury Belt', 'Earthfury Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Lava Burst.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t2: {
                            name: 'Ten Storms Regalia (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Stormkeeper:** Your next 2 Lightning Bolts are instant cast and overload (1.5m CD).\n**4-Set:** **Unlimited Power:** Lightning Overloads generate mana.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, sp: 180, crit: '4%' },
                            offPieces: ['Ten Storms Belt', 'Ten Storms Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Stormkeeper.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t3: {
                            name: 'Earthshatter Regalia (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Primordial Wave:** Flame Shock hits 1 additional target.\n**4-Set:** **Ascendance:** Transform into a Flame Ascendant for 15 sec, replacing Chain Lightning with Lava Beam (no CD).',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, sp: 200, crit: '5%' },
                            offPieces: ['Earthshatter Belt', 'Earthshatter Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Ascendance.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing One']
                        }
                    }
                },
                {
                    name: 'Enhancement',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightningshield.jpg',
                    legendaryLink: 'sulfuras',
                    weapons: [
                        { tier: 't4', name: 'Fool\'s Bane', source: 'Terestian Illhoof' },
                        { tier: 't5', name: 'Talon of Azshara', source: 'Morogrim Tidewalker' },
                        { tier: 't6', name: 'Syphon of the Nathrezim', source: 'Supremus' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Cleaver', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Mag\'har', name: 'Hellscream\'s Will', type: 'Axe' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Linked Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/171/683.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Stormstrike ability by 1 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Linked Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/238/750.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Stormstrike ability by 1 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Linked Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/18/530.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Stormstrike ability by 1 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Linked Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/4/516.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Stormstrike ability by 1 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Cyclone Harness',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Your Strength of Earth Totem grants an additional 12 strength.\n**4-Set:** Your Stormstrike ability deals an additional 30 damage per weapon.',
                            classicBonus: 'Standard T4',
                            stats: { str: 140, agi: 120, ap: 200, crit: '4%' },
                            offPieces: ['Belt of the Spinner', 'Boots of the Endless Hunt'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose'],
                            gems: ['Bold Living Ruby']
                        },
                        t5: {
                            name: 'Cataclysm Harness',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** Your melee attacks have a chance to increase your haste by 10% for 10 sec.\n**4-Set:** Your Stormstrike ability deals 30% more damage if you are dual-wielding.',
                            classicBonus: 'Standard T5',
                            stats: { str: 170, agi: 140, ap: 250, crit: '5%' },
                            offPieces: ['Belt of One-Hundred Deaths', 'Boots of the Nexus'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose'],
                            gems: ['Bold Living Ruby']
                        },
                        t6: {
                            name: 'Skyshatter Harness',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Your Earth Shock, Flame Shock, and Frost Shock abilities cost 10% less mana.\n**4-Set:** Increases the attack power bonus from your Stormstrike ability by an additional 70.',
                            classicBonus: 'Standard T6',
                            stats: { str: 200, agi: 160, ap: 300, crit: '6%', haste: '5%' },
                            offPieces: ['Skyshatter Belt (Gorefiend)', 'Skyshatter Boots (Naj\'entus)', 'Skyshatter Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Mongoose'],
                            gems: ['Bold Spinel']
                        },
                        't6.5': {
                            name: 'Harness of the Stormbreaker',
                            image: 'https://i.imgur.com/zFY0c5z.jpeg',
                            bonus: '**2-Set:** Stormstrike has a 40% chance to increase the damage of your next Stormstrike by 40%.\n**4-Set:** Lava Lash has a 20% chance to trigger Stormbringer (resetting Stormstrike).',
                            classicBonus: 'N/A',
                            stats: { str: 230, agi: 180, ap: 350, crit: '7%', haste: '10%' },
                            offPieces: ['Belt of the Stormbreaker', 'Boots of the Stormbreaker'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Stormstrike/Reset focus.",
                            enchants: ['Mongoose'],
                            gems: ['Bold Cardinal Ruby']
                        },
                        t1: {
                            name: 'Earthfury Harness (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Hailstorm:** Frost Shock damage increased by 50%.\n**4-Set:** **Ice Strike:** Stormstrike resets the cooldown of your Frost and Earth Shocks.',
                            classicBonus: 'Classic T1',
                            stats: { str: 100, agi: 100, ap: 150 },
                            offPieces: ['Earthfury Belt', 'Earthfury Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Shock spam.",
                            enchants: ['Mongoose'],
                            gems: ['Bold Living Ruby']
                        },
                        t2: {
                            name: 'Ten Storms Harness (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Crash Lightning:** Crash Lightning (Cone AoE) replaces Chain Lightning. Enhances your weapons to cleave on all attacks.\n**4-Set:** **Stormbringer:** Stormstrike has a chance to reset its own cooldown.',
                            classicBonus: 'Classic T2',
                            stats: { str: 120, agi: 120, ap: 180 },
                            offPieces: ['Ten Storms Belt', 'Ten Storms Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Cleave.",
                            enchants: ['Mongoose'],
                            gems: ['Bold Living Ruby']
                        },
                        t3: {
                            name: 'Earthshatter Harness (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Doom Winds:** Windfury Weapon has a 100% chance to trigger for 6 seconds (1m CD).\n**4-Set:** **Sundering:** Earth Shock creates a fissure, dealing Flamestrike damage to enemies in a line.',
                            classicBonus: 'Classic T3',
                            stats: { str: 140, agi: 140, ap: 210 },
                            offPieces: ['Earthshatter Belt', 'Earthshatter Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Burst/AoE.",
                            enchants: ['Mongoose'],
                            gems: ['Bold One']
                        }
                    }
                },
                {
                    name: 'Restoration',
                    role: 'Healer',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_magicimmunity.jpg',
                    legendaryLink: 'valanyr',
                    weapons: [
                        { tier: 't4', name: 'Light\'s Justice', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of Vashj', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Crystal Spire of Karabor', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Gavel', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Sha\'tar', name: 'Gavel of Pure Light', type: 'Mace' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Ringmail Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/171/683.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Lesser Healing Wave by 0.2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Ringmail Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/238/750.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Lesser Healing Wave by 0.2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Ringmail Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/18/530.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Lesser Healing Wave by 0.2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Ringmail Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/4/516.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Lesser Healing Wave by 0.2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Cyclone Raiment',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Reduces the cooldown of your Nature\'s Swiftness ability by 24 sec.\n**4-Set:** Increases the healing gained from your Healing Stream Totem ability.',
                            classicBonus: 'Standard T4',
                            stats: { int: 160, spirit: 140, heal: 250, mp5: 15 },
                            offPieces: ['Belt of Gales', 'Boots of the Long Road'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Noble Topaz']
                        },
                        t5: {
                            name: 'Cataclysm Raiment',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** Your Lesser Healing Wave has a chance to restore 120 mana to you.\n**4-Set:** Your Chain Heal critical heals have a chance to increase the healing of your next Lesser Healing Wave by 25%.',
                            classicBonus: 'Standard T5',
                            stats: { int: 190, spirit: 160, heal: 300, mp5: 20 },
                            offPieces: ['Belt of the Long Road', 'Boots of the Divine Light'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Noble Topaz']
                        },
                        t6: {
                            name: 'Skyshatter Raiment',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Your Chain Heal spell costs 10% less mana.\n**4-Set:** Increases the amount healed by your Chain Heal spell by 5%.',
                            classicBonus: 'Standard T6',
                            stats: { int: 220, spirit: 180, heal: 350, mp5: 25 },
                            offPieces: ['Skyshatter Belt (Gorefiend)', 'Skyshatter Boots (Naj\'entus)', 'Skyshatter Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Pyrestone']
                        },
                        't6.5': {
                            name: 'Raiment of the Stormbreaker',
                            image: 'https://i.imgur.com/zFY0c5z.jpeg',
                            bonus: '**2-Set:** Riptide also places an Earth Shield on the target (3 charges).\n**4-Set:** Healing Rain heals for 20% more and grants 10% damage reduction to people inside.',
                            classicBonus: 'N/A',
                            stats: { int: 250, spirit: 200, heal: 400, haste: '10%' },
                            offPieces: ['Belt of the Stormbreaker', 'Boots of the Stormbreaker'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "HoT/AoE focus.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous Cardinal Ruby']
                        },
                        t1: {
                            name: 'Earthfury Raiment (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Cloudburst:** Consuming Riptide with Chain Heal increases the Chain Heal healing by 50%.\n**4-Set:** **High Tide:** Every 3rd Chain Heal bounces to 2 additional targets.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, spirit: 100, heal: 150 },
                            offPieces: ['Earthfury Belt', 'Earthfury Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Chain Heal.",
                            enchants: ['Healing Power'],
                            gems: ['Luminous Living Ruby']
                        },
                        t2: {
                            name: 'Ten Storms Raiment (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Earthen Wall:** Earth Shield charges reduced by 1, but healing increased by 50%.\n**4-Set:** **Ancestral Protection:** Reincarnation cooldown reduced by 50% and allows you to battle rez one ally.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, spirit: 120, heal: 180 },
                            offPieces: ['Ten Storms Belt', 'Ten Storms Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Utility.",
                            enchants: ['Healing Power'],
                            gems: ['Luminous Living Ruby']
                        },
                        t3: {
                            name: 'Earthshatter Raiment (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Wellspring:** Unleash Life sends a wave of healing forward, healing all allies in a cone.\n**4-Set:** **Spirit Link:** Spirit Link Totem redistributes health every 0.5 sec for 8 sec.',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, spirit: 140, heal: 210 },
                            offPieces: ['Earthshatter Belt', 'Earthshatter Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Raid Cooldowns.",
                            enchants: ['Spellsurge'],
                            gems: ['Luminous One']
                        }
                    }
                }
            ]
        },
        mage: {
            name: 'Mage',
            crest: "https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1",
            color: 'text-cyan-400',
            specs: [
                {
                    name: 'Arcane',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_magicalsentry.jpg',
                    legendaryLink: 'dragonwrath',
                    weapons: [
                        { tier: 't4', name: 'Nathrezim Mindblade', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Zhardoom, Greatstaff of the Devourer', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Staff', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'The Sha\'tar', name: 'A\'dal\'s Gift', type: 'Dagger' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Silk Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/185/697.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Blink ability by 2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Silk Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/7/519.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Blink ability by 2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Silk Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/17/529.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Blink ability by 2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Silk Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/3/515.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Blink ability by 2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Aldor Regalia',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Spells cast while in the Clearcasting state have 30% increased critical strike chance.\n**4-Set:** Your critical strikes have a chance to increase your spell power by 50 for 12 sec.',
                            classicBonus: 'Standard T4',
                            stats: { int: 160, spirit: 80, sp: 200, crit: '4%', hit: '3%' },
                            offPieces: ['Belt of Blasting', 'Boots of Blasting'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t5: {
                            name: 'Tirisfal Regalia',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** Increases the damage and mana cost of your Arcane Blast by 20%.\n**4-Set:** Your Spell critical strikes grant you up to 70 spell power for 6 sec.',
                            classicBonus: 'Standard T5',
                            stats: { int: 190, spirit: 90, sp: 250, crit: '5%', hit: '4%' },
                            offPieces: ['Belt of the Tempest', 'Boots of the Tempest'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t6: {
                            name: 'Tempest Regalia',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Increases the duration of your Evocation ability by 2 sec.\n**4-Set:** Increases the damage of your Fireball, Frostbolt, and Arcane Missiles abilities by 5%.',
                            classicBonus: 'Standard T6',
                            stats: { int: 220, spirit: 100, sp: 300, crit: '6%', hit: '5%', haste: '5%' },
                            offPieces: ['Tempest Belt (Gorefiend)', 'Tempest Boots (Naj\'entus)', 'Tempest Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Spinel']
                        },
                        't6.5': {
                            name: 'Regalia of the Arcane Order',
                            image: 'https://i.imgur.com/ZmtFvSD.jpeg',
                            bonus: '**2-Set:** Arcane Blast has a 40% chance to reduce the cooldown of Presence of Mind by 10 sec and cause it to trigger.\n**4-Set:** Arcane Missiles has a 12% chance to create a Time Anomaly. The anomaly summons a mirror copy of you, to assist you for 10 sec.',
                            classicBonus: 'N/A',
                            stats: { int: 250, spirit: 110, sp: 350, crit: '7%', hit: '6%', haste: '10%' },
                            offPieces: ['Belt of the Arcane Order', 'Boots of the Arcane Order'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "PoM/Haste focus.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Cardinal Ruby']
                        },
                        t1: {
                            name: 'Arcanist Regalia (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Arcane Flux:** Arcane Blast cast time reduced by 0.2 sec.\n**4-Set:** **Time Anomaly:** Casting Arcane Missiles has a chance to grant "Time Warp" to yourself for 6 seconds.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, sp: 150, crit: '3%' },
                            offPieces: ['Arcanist Belt', 'Arcanist Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Arcane Blast speed.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t2: {
                            name: 'Netherwind Regalia (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Touch of the Magi:** Arcane Power applies Touch of the Magi, accumulating 20% of damage dealt and exploding when it expires.\n**4-Set:** **Slipstream:** Arcane Missiles can be channeled while moving.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, sp: 180, crit: '4%' },
                            offPieces: ['Netherwind Belt', 'Netherwind Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Mobility/Burst.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t3: {
                            name: 'Frostfire Regalia (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Arcane Harmony:** Arcane Missiles stacks "Harmony", increasing the damage of your next Arcane Barrage by 10% per stack (up to 20).\n**4-Set:** **Radiant Spark:** Your next 4 spells deal 10%, 20%, 30%, and 40% increased damage (45s CD).',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, sp: 200, crit: '5%' },
                            offPieces: ['Frostfire Belt', 'Frostfire Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Arcane Barrage.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing One']
                        }
                    }
                },
                {
                    name: 'Fire',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_fire_firebolt02.jpg',
                    legendaryLink: 'dragonwrath',
                    weapons: [
                        { tier: 't4', name: 'Nathrezim Mindblade', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Zhardoom, Greatstaff of the Devourer', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Staff', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'The Sha\'tar', name: 'A\'dal\'s Gift', type: 'Dagger' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Silk Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/185/697.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fireball by 0.2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Silk Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/7/519.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fireball by 0.2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Silk Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/17/529.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fireball by 0.2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Silk Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/3/515.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fireball by 0.2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Aldor Regalia',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Spells cast while in the Clearcasting state have 30% increased critical strike chance.\n**4-Set:** Your critical strikes have a chance to increase your spell power by 50 for 12 sec.',
                            classicBonus: 'Standard T4',
                            stats: { int: 160, spirit: 80, sp: 200, crit: '4%', hit: '3%' },
                            offPieces: ['Belt of Blasting', 'Boots of Blasting'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t5: {
                            name: 'Tirisfal Regalia',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** Increases the damage and mana cost of your Arcane Blast by 20%.\n**4-Set:** Your Spell critical strikes grant you up to 70 spell power for 6 sec.',
                            classicBonus: 'Standard T5',
                            stats: { int: 190, spirit: 90, sp: 250, crit: '5%', hit: '4%' },
                            offPieces: ['Belt of the Tempest', 'Boots of the Tempest'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t6: {
                            name: 'Tempest Regalia',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Increases the duration of your Evocation ability by 2 sec.\n**4-Set:** Increases the damage of your Fireball, Frostbolt, and Arcane Missiles abilities by 5%.',
                            classicBonus: 'Standard T6',
                            stats: { int: 220, spirit: 100, sp: 300, crit: '6%', hit: '5%', haste: '5%' },
                            offPieces: ['Tempest Belt (Gorefiend)', 'Tempest Boots (Naj\'entus)', 'Tempest Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Spinel']
                        },
                        't6.5': {
                            name: 'Garb of the Arcane Order',
                            image: 'https://i.imgur.com/ZmtFvSD.jpeg',
                            bonus: '**2-Set:** Fire Blast becomes Inferno Blast. Now has 2 charges.\n**4-Set:** When you activate Combustion, you have a chance to gain Pyromaniac (Haste/Damage buff).',
                            classicBonus: 'N/A',
                            stats: { int: 250, spirit: 110, sp: 350, crit: '7%', hit: '6%', haste: '10%' },
                            offPieces: ['Belt of the Arcane Order', 'Boots of the Arcane Order'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Fire Blast charge synergy.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Cardinal Ruby']
                        },
                        t1: {
                            name: 'Arcanist Garb (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Phoenix Flames:** Fire Blast has 3 charges and always crits.\n**4-Set:** **From the Ashes:** Increases Mastery by 5% for each charge of Fire Blast on cooldown.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, sp: 150, crit: '3%' },
                            offPieces: ['Arcanist Belt', 'Arcanist Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Fire Blast.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t2: {
                            name: 'Netherwind Garb (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Sun King\'s Blessing:** Consuming a Hot Streak has a chance to make your next Pyroblast instant and deal 50% increased damage.\n**4-Set:** **Kindling:** Critical strikes reduce the cooldown of Combustion by 1 sec.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, sp: 180, crit: '4%' },
                            offPieces: ['Netherwind Belt', 'Netherwind Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Combustion uptime.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t3: {
                            name: 'Frostfire Garb (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Hyperthermia:** Hot Streak has a chance to activate Hyperthermia, making all Pyroblasts instant for 5 seconds.\n**4-Set:** **Meteor:** Calls down a meteor that hits for massive Fire damage split between targets.',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, sp: 200, crit: '5%' },
                            offPieces: ['Frostfire Belt', 'Frostfire Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Burst AoE.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing One']
                        }
                    }
                },
                {
                    name: 'Frost',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg',
                    legendaryLink: 'dragonwrath',
                    weapons: [
                        { tier: 't4', name: 'Nathrezim Mindblade', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Zhardoom, Greatstaff of the Devourer', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Staff', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'The Sha\'tar', name: 'A\'dal\'s Gift', type: 'Dagger' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Silk Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/185/697.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Frost Nova ability by 2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Silk Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/7/519.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Frost Nova ability by 2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Silk Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/17/529.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Frost Nova ability by 2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Silk Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/3/515.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cooldown of your Frost Nova ability by 2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Aldor Regalia',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Spells cast while in the Clearcasting state have 30% increased critical strike chance.\n**4-Set:** Your critical strikes have a chance to increase your spell power by 50 for 12 sec.',
                            classicBonus: 'Standard T4',
                            stats: { int: 160, spirit: 80, sp: 200, crit: '4%', hit: '3%' },
                            offPieces: ['Belt of Blasting', 'Boots of Blasting'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t5: {
                            name: 'Tirisfal Regalia',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** Increases the damage and mana cost of your Arcane Blast by 20%.\n**4-Set:** Your Spell critical strikes grant you up to 70 spell power for 6 sec.',
                            classicBonus: 'Standard T5',
                            stats: { int: 190, spirit: 90, sp: 250, crit: '5%', hit: '4%' },
                            offPieces: ['Belt of the Tempest', 'Boots of the Tempest'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t6: {
                            name: 'Tempest Regalia',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Increases the duration of your Evocation ability by 2 sec.\n**4-Set:** Increases the damage of your Fireball, Frostbolt, and Arcane Missiles abilities by 5%.',
                            classicBonus: 'Standard T6',
                            stats: { int: 220, spirit: 100, sp: 300, crit: '6%', hit: '5%', haste: '5%' },
                            offPieces: ['Tempest Belt (Gorefiend)', 'Tempest Boots (Naj\'entus)', 'Tempest Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Spinel']
                        },
                        't6.5': {
                            name: 'Vestments of the Arcane Order',
                            image: 'https://i.imgur.com/ZmtFvSD.jpeg',
                            bonus: '**2-Set:** Frostbolt has a +10% chance to trigger Brain Freeze.\n**4-Set:** Frozen Orb has an additional 5% chance to trigger Fingers of Frost when it deals damage.',
                            classicBonus: 'N/A',
                            stats: { int: 250, spirit: 110, sp: 350, crit: '7%', hit: '6%', haste: '10%' },
                            offPieces: ['Belt of the Arcane Order', 'Boots of the Arcane Order'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Proc chance buffs.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Cardinal Ruby']
                        },
                        t1: {
                            name: 'Arcanist Vestments (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Chain Reaction:** Frostbolt crits increase the damage of your next Ice Lance by 10% (stacks 5 times).\n**4-Set:** **Glacial Spike:** Consumes 5 Icicles to launch a massive spike dealing 300% spell power.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, sp: 150, crit: '3%' },
                            offPieces: ['Arcanist Belt', 'Arcanist Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Glacial Spike.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t2: {
                            name: 'Netherwind Vestments (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Frozen Orb:** Replaces Frost Ward. Launches an orb of swirling ice that damages and slows enemies.\n**4-Set:** **Freezing Rain:** Frozen Orb makes Blizzard instant cast and deal 50% more damage.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, sp: 180, crit: '4%' },
                            offPieces: ['Netherwind Belt', 'Netherwind Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for AoE.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t3: {
                            name: 'Frostfire Vestments (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Comet Storm:** Calls down 7 comets to impact the target area.\n**4-Set:** **Ray of Frost:** Channel a beam of ice that deals increasing damage over 6 seconds.',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, sp: 200, crit: '5%' },
                            offPieces: ['Frostfire Belt', 'Frostfire Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Burst/Ray.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing One']
                        }
                    }
                }
            ]
        },
        warlock: {
            name: 'Warlock',
            crest: "https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06",
            color: 'text-purple-500',
            specs: [
                {
                    name: 'Affliction',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg',
                    legendaryLink: 'dragonwrath',
                    weapons: [
                        { tier: 't4', name: 'Nathrezim Mindblade', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Zhardoom, Greatstaff of the Devourer', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Staff', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Lower City', name: 'Auchenai Staff', type: 'Staff' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Felweave Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/186/698.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fear spell by 0.2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Felweave Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/8/520.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fear spell by 0.2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Felweave Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/18/530.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fear spell by 0.2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Felweave Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/4/516.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fear spell by 0.2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Voidheart Raiment',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Your shadow damage spells have a chance to grant you 135 bonus shadow damage for 15 sec.\n**4-Set:** Increases the duration of your Corruption and Immolate abilities by 3 sec.',
                            classicBonus: 'Standard T4',
                            stats: { int: 150, sta: 180, sp: 200, hit: '4%' },
                            offPieces: ['Belt of Blasting', 'Boots of Blasting'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t5: {
                            name: 'Corruptor Raiment',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** Your pet heals you for 15% of the damage it deals.\n**4-Set:** Your Shadow Bolt hits have a chance to grant you 270 spell damage for 10 sec.',
                            classicBonus: 'Standard T5',
                            stats: { int: 180, sta: 200, sp: 250, hit: '5%' },
                            offPieces: ['Belt of the Tempest', 'Boots of the Tempest'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t6: {
                            name: 'Malefic Raiment',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Each time one of your corruption or immolate ticks deals damage you heal for 70 health.\n**4-Set:** Increases the damage dealt by your Shadow Bolt and Incinerate abilities by 6%.',
                            classicBonus: 'Standard T6',
                            stats: { int: 210, sta: 220, sp: 300, hit: '6%', haste: '5%' },
                            offPieces: ['Malefic Belt (Gorefiend)', 'Malefic Boots (Naj\'entus)', 'Malefic Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Spinel']
                        },
                        't6.5': {
                            name: 'Raiment of the Dark Conclave',
                            image: 'https://i.imgur.com/9IU77eZ.jpeg',
                            bonus: '**2-Set:** When Drain Soul deals damage, there is a chance to increase the duration of Unstable Affliction on the target by 1.0 sec.\n**4-Set:** When Corruption deals damage, you have a chance to increase the damage of your next Drain Soul by 100%.',
                            classicBonus: 'N/A',
                            stats: { int: 240, sta: 250, sp: 350, hit: '8%', haste: '10%' },
                            offPieces: ['Belt of the Dark Conclave', 'Boots of the Dark Conclave'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Execute phase focus.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Cardinal Ruby']
                        },
                        t1: {
                            name: 'Felheart Raiment (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Malefic Rapture:** Drain Soul now hits all targets affected by your Corruption for 50% damage.\n**4-Set:** **Soul Rot:** Withers away all life within 10yds, applying a heavy DoT.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, sta: 120, sp: 150, hit: '3%' },
                            offPieces: ['Felheart Belt', 'Felheart Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for AoE Rot.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t2: {
                            name: 'Nemesis Raiment (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Absolute Corruption:** Corruption is now permanent on non-player targets.\n**4-Set:** **Creeping Death:** Your DoTs deal their damage 15% faster.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, sta: 140, sp: 180, hit: '4%' },
                            offPieces: ['Nemesis Belt', 'Nemesis Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for QoL/Speed.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t3: {
                            name: 'Plagueheart Raiment (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Deathbolt:** Fires a bolt of death dealing 30% of remaining DoT damage on the target instantly.\n**4-Set:** **Darkglare:** Summon a Darkglare that extends the duration of your DoTs by 8 sec.',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, sta: 160, sp: 200, hit: '5%' },
                            offPieces: ['Plagueheart Belt', 'Plagueheart Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Burst.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing One']
                        }
                    }
                },
                {
                    name: 'Demonology',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_metamorphosis.jpg',
                    legendaryLink: 'dragonwrath',
                    weapons: [
                        { tier: 't4', name: 'Nathrezim Mindblade', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Zhardoom, Greatstaff of the Devourer', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Staff', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Lower City', name: 'Auchenai Staff', type: 'Staff' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Dreadweave Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/186/698.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fear spell by 0.2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Dreadweave Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/8/520.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fear spell by 0.2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Dreadweave Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/18/530.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fear spell by 0.2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Dreadweave Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/4/516.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Fear spell by 0.2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Voidheart Raiment',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Your shadow damage spells have a chance to grant you 135 bonus shadow damage for 15 sec.\n**4-Set:** Increases the duration of your Corruption and Immolate abilities by 3 sec.',
                            classicBonus: 'Standard T4',
                            stats: { int: 150, sta: 180, sp: 200, hit: '4%' },
                            offPieces: ['Belt of Blasting', 'Boots of Blasting'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t5: {
                            name: 'Corruptor Raiment',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** Your pet heals you for 15% of the damage it deals.\n**4-Set:** Your Shadow Bolt hits have a chance to grant you 270 spell damage for 10 sec.',
                            classicBonus: 'Standard T5',
                            stats: { int: 180, sta: 200, sp: 250, hit: '5%' },
                            offPieces: ['Belt of the Tempest', 'Boots of the Tempest'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t6: {
                            name: 'Malefic Raiment',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Each time one of your corruption or immolate ticks deals damage you heal for 70 health.\n**4-Set:** Increases the damage dealt by your Shadow Bolt and Incinerate abilities by 6%.',
                            classicBonus: 'Standard T6',
                            stats: { int: 210, sta: 220, sp: 300, hit: '6%', haste: '5%' },
                            offPieces: ['Malefic Belt (Gorefiend)', 'Malefic Boots (Naj\'entus)', 'Malefic Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Spinel']
                        },
                        't6.5': {
                            name: 'Robes of the Dark Conclave',
                            image: 'https://i.imgur.com/9IU77eZ.jpeg',
                            bonus: '**2-Set:** Increases the bonus Spell Power granted by your Demonic Knowledge talent by 20%.\n**4-Set:** When your summoned Demon deals a critical strike, you gain **Demonic Infusion**, increasing your Spell Haste by 5% for 10 seconds. This effect stacks up to 3 times.',
                            classicBonus: 'N/A',
                            stats: { int: 240, sta: 250, sp: 350, hit: '8%', haste: '10%' },
                            offPieces: ['Belt of the Dark Conclave', 'Boots of the Dark Conclave'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Pet scaling.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Cardinal Ruby']
                        },
                        t1: {
                            name: 'Felheart Robes (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Dreadstalkers:** Curse of Doom summons 2 Dreadstalkers when it detonates.\n**4-Set:** **Demonic Calling:** Shadow Bolt has a chance to make your next Summon Demon instant and free.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, sta: 120, sp: 150, hit: '3%' },
                            offPieces: ['Felheart Belt', 'Felheart Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Swarm.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t2: {
                            name: 'Nemesis Robes (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Hand of Gul\'dan:** Shadowfury also summons a meteor that spawns 3 Wild Imps.\n**4-Set:** **Implosion:** Detonate all your Wild Imps to deal massive AoE damage.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, sta: 140, sp: 180, hit: '4%' },
                            offPieces: ['Nemesis Belt', 'Nemesis Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Implosion.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t3: {
                            name: 'Plagueheart Robes (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Power Siphon:** Sacrifice 2 Imps to gain 2 stacks of "Demonic Core" (Instant Shadow Bolt/Incinerate).\n**4-Set:** **Demonic Tyrant:** Summon a Demonic Tyrant that extends the duration of all your other demons.',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, sta: 160, sp: 200, hit: '5%' },
                            offPieces: ['Plagueheart Belt', 'Plagueheart Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Tyrant.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing One']
                        }
                    }
                },
                {
                    name: 'Destruction',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_rainoffire.jpg',
                    legendaryLink: 'dragonwrath',
                    weapons: [
                        { tier: 't4', name: 'Nathrezim Mindblade', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Zhardoom, Greatstaff of the Devourer', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Staff', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Lower City', name: 'Auchenai Staff', type: 'Staff' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Felweave Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/186/698.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Immolate spell by 0.2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Felweave Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/8/520.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Immolate spell by 0.2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Felweave Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/18/530.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Immolate spell by 0.2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Felweave Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/4/516.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Immolate spell by 0.2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Voidheart Raiment',
                            image: 'https://i.imgur.com/e42iKqS.jpeg',
                            bonus: '**2-Set:** Your shadow damage spells have a chance to grant you 135 bonus shadow damage for 15 sec.\n**4-Set:** Increases the duration of your Corruption and Immolate abilities by 3 sec.',
                            classicBonus: 'Standard T4',
                            stats: { int: 150, sta: 180, sp: 200, hit: '4%' },
                            offPieces: ['Belt of Blasting', 'Boots of Blasting'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t5: {
                            name: 'Corruptor Raiment',
                            image: 'https://i.imgur.com/L79C7qj.jpeg',
                            bonus: '**2-Set:** Your pet heals you for 15% of the damage it deals.\n**4-Set:** Your Shadow Bolt hits have a chance to grant you 270 spell damage for 10 sec.',
                            classicBonus: 'Standard T5',
                            stats: { int: 180, sta: 200, sp: 250, hit: '5%' },
                            offPieces: ['Belt of the Tempest', 'Boots of the Tempest'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t6: {
                            name: 'Malefic Raiment',
                            image: 'https://i.imgur.com/2s4P8qL.jpeg',
                            bonus: '**2-Set:** Each time one of your corruption or immolate ticks deals damage you heal for 70 health.\n**4-Set:** Increases the damage dealt by your Shadow Bolt and Incinerate abilities by 6%.',
                            classicBonus: 'Standard T6',
                            stats: { int: 210, sta: 220, sp: 300, hit: '6%', haste: '5%' },
                            offPieces: ['Malefic Belt (Gorefiend)', 'Malefic Boots (Naj\'entus)', 'Malefic Bracers (Winterchill)'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Spinel']
                        },
                        't6.5': {
                            name: 'Vestments of the Dark Conclave',
                            image: 'https://i.imgur.com/9IU77eZ.jpeg',
                            bonus: '**2-Set:** Casting Rain of Fire or Chaos Bolt has a 40% chance to make your next cast of those spells free.\n**4-Set:** When the free version procs, you also summon an Infernal for 8 seconds.',
                            classicBonus: 'N/A',
                            stats: { int: 240, sta: 250, sp: 350, hit: '8%', haste: '10%' },
                            offPieces: ['Belt of the Dark Conclave', 'Boots of the Dark Conclave'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Destro synergy.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Cardinal Ruby']
                        },
                        t1: {
                            name: 'Felheart Vestments (Reforged)',
                            image: 'https://i.imgur.com/s6n5q8L.jpeg',
                            bonus: '**2-Set:** **Havoc:** Bane of Havoc copies single target spells to a second target for 10 sec.\n**4-Set:** **Backdraft:** Conflagrate reduces the cast time of Chaos Bolt and Incinerate by 30%.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, sta: 120, sp: 150, hit: '3%' },
                            offPieces: ['Felheart Belt', 'Felheart Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Havoc.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t2: {
                            name: 'Nemesis Vestments (Reforged)',
                            image: 'https://i.imgur.com/a4q8L6q.jpeg',
                            bonus: '**2-Set:** **Cataclysm:** Cast a massive AoE that applies Immolate to all targets hit.\n**4-Set:** **Fire and Brimstone:** Incinerate now hits all targets affected by your Immolate.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, sta: 140, sp: 180, hit: '4%' },
                            offPieces: ['Nemesis Belt', 'Nemesis Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for AoE.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t3: {
                            name: 'Plagueheart Vestments (Reforged)',
                            image: 'https://i.imgur.com/8q5q8L6.jpeg',
                            bonus: '**2-Set:** **Channel Demonfire:** Channel 15 bolts of fel fire at random targets affected by Immolate.\n**4-Set:** **Chaos Reach:** Chaos Bolt range increased by 20 yds and castable while moving.',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, sta: 160, sp: 200, hit: '5%' },
                            offPieces: ['Plagueheart Belt', 'Plagueheart Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Chaos Bolt.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing One']
                        }
                    }
                }
            ]
        },
        druid: {
            name: 'Druid',
            crest: "https://warcraft.wiki.gg/images/ClassIcon_druid.png?a3333f",
            color: 'text-orange-500',
            specs: [
                {
                    name: 'Balance',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg',
                    legendaryLink: 'dragonwrath',
                    weapons: [
                        { tier: 't4', name: 'Nathrezim Mindblade', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Crystal Spire of Karabor', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Gavel', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Cenarion Expedition', name: 'Earthwarden', type: 'Mace' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Wyrmhide Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/182/694.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cast time of your Starfire spell by 0.2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Wyrmhide Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/4/516.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cast time of your Starfire spell by 0.2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Wyrmhide Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/14/526.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cast time of your Starfire spell by 0.2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Wyrmhide Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/0/512.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the cast time of your Starfire spell by 0.2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Malorne Regalia',
                            image: 'https://imgur.com/v5A8ZtM.png',
                            bonus: '**2-Set:** Your harmful spells have a chance to restore 120 mana.\n**4-Set:** Reduces the cooldown of your Innervate ability by 48 sec.',
                            classicBonus: 'Standard T4',
                            stats: { int: 150, spirit: 160, sp: 200, hit: '4%' },
                            offPieces: ['Belt of the Tempest', 'Boots of the Tempest'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t5: {
                            name: 'Nordrassil Regalia',
                            image: 'https://imgur.com/g8sVPwN.png',
                            bonus: '**2-Set:** Increases the duration of your Moonfire ability by 3 sec.\n**4-Set:** Increases the damage dealt by your Starfire ability by 10%.',
                            classicBonus: 'Standard T5',
                            stats: { int: 180, spirit: 180, sp: 250, hit: '5%' },
                            offPieces: ['Belt of Natural Power', 'Boots of Natural Power'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Living Ruby']
                        },
                        t6: {
                            name: 'Thunderheart Regalia',
                            image: 'https://imgur.com/fa3Okw7.png',
                            bonus: '**2-Set:** Increases the duration of your Moonfire ability by 3 sec.\n**4-Set:** Increases the damage dealt by your Starfire ability by 5%.',
                            classicBonus: 'Standard T6',
                            stats: { int: 210, spirit: 200, sp: 300, hit: '6%', haste: '5%' },
                            offPieces: ['Thunderheart Belt', 'Thunderheart Boots', 'Thunderheart Bracers'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Spinel']
                        },
                        't6.5': {
                            name: 'Regalia of the Dreamwalker',
                            image: 'https://i.imgur.com/8Go2qXQ.jpeg',
                            bonus: '**2-Set:** Moonfire ticks have a chance to summon a Faerie Dragon to assist you in battle for 30 sec.\n**4-Set:** When a Faerie Dragon is summoned, your Arcane and Nature damage is increased by 5% for 30 sec. stackable.',
                            classicBonus: 'N/A',
                            stats: { int: 240, spirit: 220, sp: 350, hit: '8%', haste: '10%' },
                            offPieces: ['Belt of the Dreamwalker', 'Boots of the Dreamwalker'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Pet synergy.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing Cardinal Ruby']
                        },
                        t1: {
                            name: 'Cenarion Regalia (Reforged)',
                            image: 'https://imgur.com/th5jcI9.png',
                            bonus: '**2-Set:** **Shooting Stars:** Moonfire and Insect Swarm ticks have a chance to call down a falling star.\n**4-Set:** **Starsurge:** Launch a surge of stellar energy that empowers your next Starfire or Wrath.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, spirit: 120, sp: 150, hit: '3%' },
                            offPieces: ['Cenarion Belt', 'Cenarion Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Starsurge.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t2: {
                            name: 'Stormrage Regalia (Reforged)',
                            image: 'https://imgur.com/obcbDFp.png',
                            bonus: '**2-Set:** **Incarnation:** Transform into the Chosen of Elune, increasing Spell Power by 25% for 30s.\n**4-Set:** **New Moon:** Drop a moon on the target. Deals Astral damage and generates 100 Lunar Power.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, spirit: 140, sp: 180, hit: '4%' },
                            offPieces: ['Stormrage Belt', 'Stormrage Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Eclipse.",
                            enchants: ['Spellpower'],
                            gems: ['Glowing Living Ruby']
                        },
                        t3: {
                            name: 'Dreamwalker Regalia (Reforged)',
                            image: 'https://imgur.com/PWlF02L.png',
                            bonus: '**2-Set:** **Fury of Elune:** Call down a beam of pure energy that follows the target.\n**4-Set:** **Orbit Breaker:** Every 20th falling star triggers a Full Moon on the target automatically.',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, spirit: 160, sp: 200, hit: '5%' },
                            offPieces: ['Dreamwalker Belt', 'Dreamwalker Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for AoE.",
                            enchants: ['Sunfire'],
                            gems: ['Glowing One']
                        }
                    }
                },
                {
                    name: 'Feral',
                    role: 'DPS',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_druid_catform.jpg',
                    legendaryLink: 'warglaives',
                    weapons: [
                        { tier: 't4', name: 'Nathrezim Mindblade', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Pillar of Ferocity', source: 'Hyjal' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Staff', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Cenarion Expedition', name: 'Earthwarden', type: 'Mace' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Dragonhide Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/182/694.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your movement speed by 15% while in Bear, Cat, or Travel Form.' },
                        s2: { name: 'Merciless Gladiator\'s Dragonhide Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/4/516.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your movement speed by 15% while in Bear, Cat, or Travel Form.' },
                        s3: { name: 'Vengeful Gladiator\'s Dragonhide Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/14/526.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your movement speed by 15% while in Bear, Cat, or Travel Form.' },
                        s4: { name: 'Brutal Gladiator\'s Dragonhide Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/0/512.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Increases your movement speed by 15% while in Bear, Cat, or Travel Form.' }
                    },
                    sets: {
                        t4: {
                            name: 'Malorne Harness',
                            image: 'https://imgur.com/v5A8ZtM.png',
                            bonus: '**2-Set:** Your melee attacks have a chance to generate 20 rage or 20 energy.\n**4-Set:** Increases your Strength by 30.',
                            classicBonus: 'Standard T4',
                            stats: { str: 150, agi: 160, sta: 180, hit: '4%' },
                            offPieces: ['Belt of Deep Shadow', 'Boots of Deep Shadow'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose'],
                            gems: ['Wicked Living Ruby']
                        },
                        t5: {
                            name: 'Nordrassil Harness',
                            image: 'https://imgur.com/g8sVPwN.png',
                            bonus: '**2-Set:** Your Regrowth spell becomes an instant cast spell when in Bear Form or Cat Form.\n**4-Set:** Increases the damage dealt by your Lacerate ability by 15%.',
                            classicBonus: 'Standard T5',
                            stats: { str: 180, agi: 180, sta: 200, hit: '5%' },
                            offPieces: ['Belt of One-Hundred Deaths', 'Boots of the Effortless Striker'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Mongoose'],
                            gems: ['Wicked Living Ruby']
                        },
                        t6: {
                            name: 'Thunderheart Harness',
                            image: 'https://imgur.com/fa3Okw7.png',
                            bonus: '**2-Set:** Reduces the energy cost of your Mangle ability in Cat Form by 5 and the rage cost of your Mangle ability in Bear Form by 5.\n**4-Set:** Increases the damage dealt by your Rip, Swipe, and Ferocious Bite abilities by 15%.',
                            classicBonus: 'Standard T6',
                            stats: { str: 210, agi: 200, sta: 220, hit: '6%', armorPen: '120' },
                            offPieces: ['Thunderheart Belt', 'Thunderheart Boots', 'Thunderheart Bracers'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Mongoose'],
                            gems: ['Wicked Spinel']
                        },
                        't6.5': {
                            name: 'Harness of the Dreamwalker',
                            image: 'https://i.imgur.com/8Go2qXQ.jpeg',
                            bonus: '**2-Set:** Berserk duration increased by 5 sec.\n**4-Set:** Rip now can critically hit.',
                            classicBonus: 'N/A',
                            stats: { str: 240, agi: 220, sta: 250, hit: '8%', arp: '150' },
                            offPieces: ['Belt of the Dreamwalker', 'Boots of the Dreamwalker'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Bleed scaling.",
                            enchants: ['Mongoose'],
                            gems: ['Wicked Cardinal Ruby']
                        },
                        t1: {
                            name: 'Cenarion Harness (Reforged)',
                            image: 'https://imgur.com/th5jcI9.png',
                            bonus: '**2-Set:** **Sabertooth:** Ferocious Bite increases the duration of Rip on your target by 2 sec.\n**4-Set:** **Brutal Slash:** Replaces Swipe. Massive cone damage with 3 charges.',
                            classicBonus: 'Classic T1',
                            stats: { str: 100, agi: 120, sta: 150, hit: '3%' },
                            offPieces: ['Cenarion Belt', 'Cenarion Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for Swipe.",
                            enchants: ['Agility'],
                            gems: ['Wicked Living Ruby']
                        },
                        t2: {
                            name: 'Stormrage Harness (Reforged)',
                            image: 'https://imgur.com/obcbDFp.png',
                            bonus: '**2-Set:** **Bloodtalons:** Casting Regrowth or Entangling Roots causes your next 2 melee abilities to deal 25% increased damage.\n**4-Set:** **King of the Jungle:** Incarnation (Cat) makes Prowl usable in combat and shreds armor.',
                            classicBonus: 'Classic T2',
                            stats: { str: 120, agi: 140, sta: 180, hit: '4%' },
                            offPieces: ['Stormrage Belt', 'Stormrage Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Hybrid.",
                            enchants: ['Agility'],
                            gems: ['Wicked Living Ruby']
                        },
                        t3: {
                            name: 'Dreamwalker Harness (Reforged)',
                            image: 'https://imgur.com/PWlF02L.png',
                            bonus: '**2-Set:** **Adaptive Swarm:** Command a swarm that heals allies or dots enemies, jumping to new targets upon expiry.\n**4-Set:** **Ashamane\'s Frenzy:** Unleash a rapid series of 15 swipes over 3 sec, bleeding all targets heavily.',
                            classicBonus: 'Classic T3',
                            stats: { str: 140, agi: 160, sta: 200, hit: '5%' },
                            offPieces: ['Dreamwalker Belt', 'Dreamwalker Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Burst.",
                            enchants: ['Mongoose'],
                            gems: ['Wicked One']
                        }
                    }
                },
                {
                    name: 'Restoration',
                    role: 'Healer',
                    icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg',
                    legendaryLink: 'valanyr',
                    weapons: [
                        { tier: 't4', name: 'Light\'s Justice', source: 'Prince Malchezaar' },
                        { tier: 't5', name: 'Fang of the Leviathan', source: 'Lady Vashj' },
                        { tier: 't6', name: 'Crystal Spire of Karabor', source: 'Illidan' },
                        { tier: 's3', name: 'Vengeful Gladiator\'s Gavel', source: 'Arena Vendor' }
                    ],
                    repRewards: [
                        { faction: 'Cenarion Expedition', name: 'Earthwarden', type: 'Mace' }
                    ],
                    pvpSets: {
                        s1: { name: 'Gladiator\'s Kodohide Armor', iLvl: 123, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/182/694.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Healing Touch spell by 0.2 sec.' },
                        s2: { name: 'Merciless Gladiator\'s Kodohide Armor', iLvl: 136, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/4/516.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Healing Touch spell by 0.2 sec.' },
                        s3: { name: 'Vengeful Gladiator\'s Kodohide Armor', iLvl: 146, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/14/526.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Healing Touch spell by 0.2 sec.' },
                        s4: { name: 'Brutal Gladiator\'s Kodohide Armor', iLvl: 159, image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/0/512.webp', bonus: '**2-Set:** +35 Resilience.\n**4-Set:** Reduces the casting time of your Healing Touch spell by 0.2 sec.' }
                    },
                    sets: {
                        t4: {
                            name: 'Malorne Raiment',
                            image: 'https://imgur.com/v5A8ZtM.png',
                            bonus: '**2-Set:** Your helpful spells have a chance to restore 120 mana.\n**4-Set:** Reduces the cooldown of your Innervate ability by 48 sec.',
                            classicBonus: 'Standard T4',
                            stats: { int: 150, spirit: 160, sp: 300, healing: '400' },
                            offPieces: ['Belt of Primal Nature', 'Boots of Primal Nature'],
                            source: { helm: 'Prince Malchezaar', shoulders: 'Maulgar', chest: 'Magtheridon', gloves: 'Curator', legs: 'Gruul' },
                            devNotes: "No changes.",
                            enchants: ['Spellsurge'],
                            gems: ['Teardrop Living Ruby']
                        },
                        t5: {
                            name: 'Nordrassil Raiment',
                            image: 'https://imgur.com/g8sVPwN.png',
                            bonus: '**2-Set:** Increases the duration of your Regrowth spell by 6 sec.\n**4-Set:** Increases the healing effect of your Lifebloom ability by 150.',
                            classicBonus: 'Standard T5',
                            stats: { int: 180, spirit: 180, sp: 350, healing: '450' },
                            offPieces: ['Belt of the Long Road', 'Boots of the Long Road'],
                            source: { helm: 'Vashj', shoulders: 'Void Reaver', chest: 'Kael', gloves: 'Leotheras', legs: 'Karathress' },
                            devNotes: "No changes.",
                            enchants: ['Spellsurge'],
                            gems: ['Teardrop Living Ruby']
                        },
                        t6: {
                            name: 'Thunderheart Raiment',
                            image: 'https://imgur.com/fa3Okw7.png',
                            bonus: '**2-Set:** Reduces the cooldown of your Swiftmend ability by 2 sec.\n**4-Set:** Increases the healing of your Healing Touch by 5%.',
                            classicBonus: 'Standard T6',
                            stats: { int: 210, spirit: 200, sp: 400, healing: '500' },
                            offPieces: ['Thunderheart Belt', 'Thunderheart Boots', 'Thunderheart Bracers'],
                            source: { helm: 'Archimonde', shoulders: 'Shahraz', chest: 'Illidan', gloves: 'Azgalor', legs: 'Council', bracers: 'Winterchill', belt: 'Gorefiend', boots: 'Naj\'entus' },
                            devNotes: "Off-pieces moved to BT/Hyjal.",
                            enchants: ['Spellsurge'],
                            gems: ['Teardrop Spinel']
                        },
                        't6.5': {
                            name: 'Raiment of the Dreamwalker',
                            image: 'https://i.imgur.com/8Go2qXQ.jpeg',
                            bonus: '**2-Set:** Increases the duration of Lifebloom by 2 seconds.\n**4-Set:** When your Lifebloom blooms (expires or is dispelled), it instantly heals the target for an additional amount and grants them [Living Seed], healing them for 30% of the bloom amount the next time they are attacked.',
                            classicBonus: 'N/A',
                            stats: { int: 240, spirit: 220, sp: 450, healing: '550' },
                            offPieces: ['Belt of the Dreamwalker', 'Boots of the Dreamwalker'],
                            source: { helm: 'Kil\'jaeden', shoulders: 'Twins', chest: 'M\'uru', gloves: 'Kalecgos', legs: 'Felmyst' },
                            devNotes: "Lifebloom buffs.",
                            enchants: ['Spellsurge'],
                            gems: ['Teardrop Cardinal Ruby']
                        },
                        t1: {
                            name: 'Cenarion Raiment (Reforged)',
                            image: 'https://imgur.com/th5jcI9.png',
                            bonus: '**2-Set:** **Cenarion Ward:** Protects a friendly target, healing them for a large amount when they take damage.\n**4-Set:** **Abundance:** For each Rejuvenation you have active, Healing Touch cast time is reduced by 5%.',
                            classicBonus: 'Classic T1',
                            stats: { int: 100, spirit: 120, sp: 200, healing: '300' },
                            offPieces: ['Cenarion Belt', 'Cenarion Boots'],
                            source: { helm: 'Garr', shoulders: 'Geddon', chest: 'Golemagg', gloves: 'Gehennas', legs: 'Magmadar' },
                            devNotes: "Reforged for HoTs.",
                            enchants: ['Healing Power'],
                            gems: ['Teardrop Living Ruby']
                        },
                        t2: {
                            name: 'Stormrage Raiment (Reforged)',
                            image: 'https://imgur.com/obcbDFp.png',
                            bonus: '**2-Set:** **Flourish:** Extends the duration of all your heal over time effects by 10 sec.\n**4-Set:** **Tree of Life:** Permanent Tree form granted. Healing over time spells mana cost reduced by 20%.',
                            classicBonus: 'Classic T2',
                            stats: { int: 120, spirit: 140, sp: 250, healing: '350' },
                            offPieces: ['Stormrage Belt', 'Stormrage Boots'],
                            source: { helm: 'Nef(BWL)', shoulders: 'Chromaggus', chest: 'Vael', gloves: 'Ebonroc', legs: 'Ragnaros' },
                            devNotes: "Reforged for Tree Form.",
                            enchants: ['Healing Power'],
                            gems: ['Teardrop Living Ruby']
                        },
                        t3: {
                            name: 'Dreamwalker Raiment (Reforged)',
                            image: 'https://imgur.com/PWlF02L.png',
                            bonus: '**2-Set:** **Grove Guardians:** Summon Treants to cast Healing Touch on your current target.\n**4-Set:** **Convoke the Spirits:** Channel a flurry of 16 Druid spells and abilities over 4 seconds.',
                            classicBonus: 'Classic T3',
                            stats: { int: 140, spirit: 160, sp: 300, healing: '400' },
                            offPieces: ['Dreamwalker Belt', 'Dreamwalker Boots'],
                            source: { helm: 'KT', shoulders: 'Loatheb', chest: '4H', gloves: 'Maexxna', legs: 'Thaddius' },
                            devNotes: "Reforged for Burst Healing.",
                            enchants: ['Spellsurge'],
                            gems: ['Teardrop One']
                        }
                    }
                }
            ]
        }
    };

    const currentClass = classes[activeClass];
    const currentSpec = currentClass ? currentClass.specs[activeSpec] : null;
    const currentSet = currentSpec?.sets[activeTier];

    if (!currentClass || !currentSpec) return <div className="p-20 text-center text-stone-500">Loading Armory Data...</div>;

    return (
        <div className="min-h-screen bg-black font-sans selection:bg-amber-900/30">
            <UnifiedHeader
                icon="https://i.imgur.com/cjYAb3L.png"
                background="https://i.imgur.com/K7GQXVQ.jpeg"
                section="The Armory"
                sub="Tier Sets Retuned"
                title="Tools of War"
                quote="The finest craftsmanship of the Sha'tar, the Aldor, and the Scryers."
            />

            <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Intro Section */}
                <div className="mb-12 relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
                    <div className="absolute inset-0 bg-[url('https://i.imgur.com/8yF9m9f.jpeg')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

                    <div className="relative p-8 md:p-12 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-900/20 border border-amber-500/20 rounded-full mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">The Armory</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                            FORGED IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd100] to-[#e6b400]">LEGEND</span>
                        </h1>

                        <p className="text-lg text-stone-300 leading-relaxed max-w-2xl mb-8">
                            Browse the restored Tier sets and refined loot tables of TBC Plus.
                            From retuned Karazhan drops to the mighty arsenal of the Black Temple, every item has been polished to perfection.
                        </p>

                        {/* Navigation Tabs */}
                        <div className="flex gap-4 border-b border-white/10">
                            <button
                                onClick={() => setViewMode('sets')}
                                className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-colors relative ${viewMode === 'sets' ? 'text-white' : 'text-stone-500 hover:text-stone-300'
                                    }`}
                            >
                                <LayoutGrid size={16} className="inline mr-2 mb-1" />
                                Class Sets
                                {viewMode === 'sets' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></div>}
                            </button>
                            <button
                                onClick={() => setViewMode('loot')}
                                className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-colors relative ${viewMode === 'loot' ? 'text-white' : 'text-stone-500 hover:text-stone-300'
                                    }`}
                            >
                                <Trophy size={16} className="inline mr-2 mb-1" />
                                Raid Loot Retuning
                                {viewMode === 'loot' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></div>}
                            </button>
                            <button
                                onClick={() => setViewMode('tier55')}
                                className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-colors relative ${viewMode === 'tier55' ? 'text-cyan-400' : 'text-stone-500 hover:text-stone-300'
                                    }`}
                            >
                                <Star size={16} className="inline mr-2 mb-1" />
                                Tier 5.5
                                {viewMode === 'tier55' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"></div>}
                            </button>
                        </div>
                    </div>
                </div>

                {viewMode === 'loot' ? (
                    <RaidLootView />
                ) : viewMode === 'tier55' ? (
                    <Tier55View />
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <div className="w-full lg:w-64 space-y-8 flex-shrink-0">
                            {/* Class Selector */}
                            <div>
                                <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">Select Class</h3>
                                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-2">
                                    {Object.entries(classes).map(([key, data]) => (
                                        <button
                                            key={key}
                                            onClick={() => { setActiveClass(key); setActiveSpec(0); }}
                                            className={`p-2 rounded border transition-all duration-300 flex items-center gap-3 ${activeClass === key
                                                ? 'bg-amber-900/20 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)]'
                                                : 'bg-[#151515] border-transparent grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:bg-[#222]'
                                                }`}
                                        >
                                            <img src={data.crest} alt={data.name} className="w-8 h-8 rounded-full border border-black" />
                                            <span className={`text-xs font-bold uppercase tracking-wide hidden lg:inline ${activeClass === key ? 'text-white' : 'text-stone-500'}`}>
                                                {data.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 min-h-[600px] animate-fade-in">
                            {/* CLASS HEADER & SPEC TABS */}
                            <div className="mb-8 border-b border-white/10 pb-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-4 rounded-lg bg-white/5 ${currentClass.color} border border-white/10`}>
                                            <img src={currentClass.crest} alt={currentClass.name} className="w-12 h-12 object-contain" />
                                        </div>
                                        <div>
                                            <h2 className="font-hero text-4xl text-[#c29c55]">{currentClass.name} Armory</h2>
                                            <p className="text-stone-500 text-sm tracking-widest uppercase">Browse Tier & Gladiator Sets</p>
                                        </div>
                                    </div>

                                    {/* Link to Interface */}
                                    <button
                                        onClick={() => setPage('interface')}
                                        className="flex items-center gap-2 px-4 py-2 rounded border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 transition-all text-xs font-hero tracking-wider uppercase text-stone-500 hover:text-cyan-400"
                                    >
                                        <LayoutGrid className="w-4 h-4" /> Preview UI
                                    </button>
                                </div>

                                {/* ROLE & SPEC SELECTOR */}
                                <div className="flex flex-wrap gap-4 items-center justify-between">
                                    <div className="flex gap-2">
                                        {currentClass.specs.map((spec, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveSpec(idx)}
                                                className={`px-4 py-2 rounded font-cinzel text-sm tracking-wider border transition-all flex items-center gap-2 ${activeSpec === idx
                                                    ? `bg-${activeClass === 'paladin' ? 'pink' : activeClass === 'shaman' ? 'blue' : 'amber'}-900/20 border-${activeClass === 'paladin' ? 'pink' : 'amber'}-500/50 text-white`
                                                    : 'border-transparent text-stone-500 hover:text-stone-300 hover:bg-white/5'}`}
                                            >
                                                <img src={spec.icon} alt="" className="w-5 h-5 object-contain" />
                                                {spec.name}
                                                {spec.role && <span className="text-[10px] bg-black/50 px-1.5 py-0.5 rounded text-stone-400 ml-1">{spec.role}</span>}
                                            </button>
                                        ))}
                                    </div>

                                    {/* TALENT & LEGENDARY LINKS */}
                                    <div className="flex gap-2">
                                        {currentSpec.legendaryLink && (
                                            <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-orange-900/20 border border-orange-500/30 text-orange-400 hover:bg-orange-900/40 text-xs font-hero tracking-widest uppercase transition-colors">
                                                <Crown size={12} /> Legendary
                                            </button>
                                        )}
                                        <button onClick={() => setPage('calculator')} className="flex items-center gap-2 px-3 py-1.5 rounded bg-blue-900/20 border border-blue-500/30 text-blue-400 hover:bg-blue-900/40 text-xs font-hero tracking-widest uppercase transition-colors">
                                            <Zap size={12} /> Talents
                                        </button>
                                        <button onClick={() => setShowShare(true)} className="flex items-center gap-2 px-3 py-1.5 rounded bg-amber-900/20 border border-amber-500/30 text-amber-500 hover:bg-amber-900/40 text-xs font-hero tracking-widest uppercase transition-colors">
                                            <Share2 size={12} /> Share
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* MODE: PVE vs PVP */}
                            <div className="mb-6 flex justify-center">
                                <div className="bg-[#111] p-1 rounded-lg border border-white/10 flex gap-1">
                                    <button className={`px-6 py-2 rounded font-hero text-sm transition-all ${!activeTier.startsWith('s') ? 'bg-amber-900/40 text-amber-500 shadow-lg' : 'text-stone-500 hover:text-stone-300'}`} onClick={() => setActiveTier('t4')}>
                                        Raid Tiers
                                    </button>
                                    <button className={`px-6 py-2 rounded font-hero text-sm transition-all ${activeTier.startsWith('s') ? 'bg-red-900/40 text-red-500 shadow-lg' : 'text-stone-500 hover:text-stone-300'}`} onClick={() => setActiveTier('s1')}>
                                        Arena Seasons
                                    </button>
                                </div>
                            </div>

                            {/* TIER/SEASON SELECTOR */}
                            <div className="mb-8">
                                <div className="flex flex-wrap justify-center gap-3">
                                    {(!activeTier.startsWith('s') ? tiers : [
                                        { id: 's1', label: 'Season 1', sub: 'Gladiator', iLvl: 123 },
                                        { id: 's2', label: 'Season 2', sub: 'Merciless', iLvl: 136 },
                                        { id: 's3', label: 'Season 3', sub: 'Vengeful', iLvl: 146 },
                                        { id: 's4', label: 'Season 4', sub: 'Brutal', iLvl: 159 },
                                    ]).map((tier) => (
                                        <button
                                            key={tier.id}
                                            onClick={() => setActiveTier(tier.id)}
                                            className={`flex flex-col items-center justify-center px-4 py-3 rounded-lg border transition-all duration-300 min-w-[120px] ${activeTier === tier.id
                                                ? 'bg-white/5 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)] transform scale-105'
                                                : 'bg-[#111] border-white/5 hover:border-white/20 hover:bg-white/5'}`}
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`font-hero text-sm ${activeTier === tier.id ? 'text-[#c29c55]' : 'text-stone-400'}`}>{tier.label}</span>
                                                <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${activeTier === tier.id ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-stone-600'}`}>
                                                    {tier.iLvl}
                                                </span>
                                            </div>
                                            <span className="text-[10px] text-stone-500 uppercase tracking-wider">{tier.sub}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* SET DISPLAY CARD */}
                            {
                                (() => {
                                    // Dynamic Set Resolution (PvE or PvP)
                                    const pveSet = currentSpec?.sets?.[activeTier];
                                    const pvpSet = currentSpec?.pvpSets?.[activeTier];
                                    const set = pveSet || pvpSet;

                                    // Logic: If activeTier starts with 's', use pvpSets. Else use sets.
                                    const displaySet = activeTier.startsWith('s') ? currentSpec?.pvpSets?.[activeTier] : currentSpec?.sets?.[activeTier];

                                    if (!displaySet) return (
                                        <div className="flex flex-col items-center justify-center p-32 text-stone-600 border border-dashed border-stone-800 rounded-xl bg-[#0a0a0a/50]">
                                            <Clock size={48} className="mb-4 opacity-30" />
                                            <h3 className="font-cinzel text-xl mb-2 text-stone-500">Data Artifact Missing</h3>
                                            <p className="text-sm text-stone-600">This set data has not yet been chronicled.</p>
                                        </div>
                                    );

                                    return (
                                        <div className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                            <div className="absolute top-0 right-0 p-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

                                            <div className="flex flex-col md:flex-row min-h-[600px]">
                                                {/* IMAGE SECTION */}
                                                <div className="md:w-5/12 relative bg-[#111] overflow-hidden flex items-center justify-center p-8 group-hover:bg-[#151515] transition-colors">
                                                    {/* Background Pattern */}
                                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                        <span className="font-hero text-9xl text-white/5 select-none scale-150 transform">{activeTier.replace('t', '').replace('s', 'S').replace('.5', '½')}</span>
                                                    </div>

                                                    <img
                                                        src={displaySet.image || 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/112/624.webp'}
                                                        alt={displaySet.name}
                                                        className="relative z-10 w-full h-[60vh] object-contain cursor-pointer hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                                                        onClick={() => setSelectedImage(displaySet.image)}
                                                    />

                                                    {/* Weapons Carousel Placeholder if available */}
                                                    {currentSpec.weapons && (
                                                        <div className="absolute bottom-4 left-0 right-0 px-4">
                                                            <div className="flex justify-center gap-2">
                                                                {currentSpec.weapons?.filter(w => w.tier.startsWith(activeTier.substring(0, 2))).map((w, i) => (
                                                                    <div key={i} className="bg-black/80 p-2 rounded border border-white/10 flex items-center gap-2 backdrop-blur-md">
                                                                        <Sword size={12} className="text-red-500" />
                                                                        <div className="flex flex-col">
                                                                            <span className="text-[10px] text-white font-bold leading-none">{w.name}</span>
                                                                            <span className="text-[8px] text-stone-500 leading-none">{w.source}</span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="absolute top-4 left-4 z-20">
                                                        <div className="flex items-center gap-2 text-stone-400 bg-black/90 px-3 py-1.5 rounded-full border border-white/10 text-xs shadow-xl backdrop-blur-sm">
                                                            <LayoutGrid size={12} className="text-amber-500" />
                                                            <span className="font-medium">Click to Enlarge</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* INFO SECTION */}
                                                <div className="md:w-7/12 p-8 md:p-10 relative z-10 flex flex-col bg-gradient-to-b from-white/5 to-transparent">
                                                    {/* Header */}
                                                    <div className="border-b border-white/10 pb-6 mb-8">
                                                        <h3 className="font-cinzel text-3xl md:text-4xl text-white mb-3 text-shadow-sm">{displaySet.name}</h3>
                                                        <div className="flex flex-wrap items-center gap-3 text-sm">
                                                            <span className={`px-2.5 py-1 rounded ${activeTier.startsWith('s') ? 'bg-red-900/30 text-red-500 border-red-500/30' : 'bg-amber-900/30 text-amber-500 border-amber-500/30'} border font-medium tracking-wide`}>
                                                                {activeTier.startsWith('s') ? 'Gladiator Wargear' : 'Legendary Battlegear'}
                                                            </span>
                                                            <span className="text-stone-600 hidden md:inline">•</span>
                                                            <span className="text-stone-500">Requires Level 70</span>
                                                            <span className="text-stone-600 hidden md:inline">•</span>
                                                            <span className="text-stone-500">{currentClass.name} Only</span>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-8 flex-grow">
                                                        {/* Stats Grid & Radar & Gauge */}
                                                        {displaySet.stats && typeof displaySet.stats === 'object' && (
                                                            <div className="flex flex-col xl:flex-row gap-6 mb-6">
                                                                <div className="flex-1 space-y-4">
                                                                    <div className="grid grid-cols-4 gap-2">
                                                                        {Object.entries(displaySet.stats).map(([k, v]) => (
                                                                            <div key={k} className="bg-black/40 p-2 rounded border border-white/5 flex flex-col items-center">
                                                                                <span className="text-[10px] text-stone-500 uppercase tracking-widest">{k}</span>
                                                                                <span className="text-sm font-bold text-white">{v}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                    <div className="flex justify-center xl:justify-start gap-4">
                                                                        <GearScoreMeter iLvl={displaySet.iLvl || 120} />
                                                                        <div className="xl:hidden"><StatRadar stats={displaySet.stats} color={currentClass.color} /></div>
                                                                    </div>

                                                                    <ProgressionTrack tier={activeTier} />
                                                                </div>
                                                                <div className="hidden xl:block w-48 flex-shrink-0">
                                                                    <StatRadar stats={displaySet.stats} color={currentClass.color} />
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Bonus Box */}
                                                        <div className="bg-[#080808] p-6 rounded-xl border border-white/5 relative overflow-hidden shadow-inner">
                                                            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50"></div>
                                                            <div className="relative z-10 text-stone-300 leading-relaxed">
                                                                {/* Toggle for Classic Bonus if exists */}
                                                                {displaySet.classicBonus && (
                                                                    <div className="flex justify-end mb-2">
                                                                        <span className="text-[10px] text-stone-600 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Reforged Bonus</span>
                                                                    </div>
                                                                )}
                                                                {formatText(displaySet.bonus)}
                                                            </div>

                                                            {displaySet.devNotes && (
                                                                <div className="mt-4 pt-4 border-t border-white/5">
                                                                    <p className="text-xs text-stone-500 italic">
                                                                        <span className="text-amber-500 not-italic font-bold mr-2">Dev Note:</span>
                                                                        "{displaySet.devNotes}"
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Sources & Off-Pieces Grid */}
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            {/* Drop Locations */}
                                                            <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                                                <h4 className="text-xs text-stone-500 uppercase tracking-widest mb-3 flex items-center gap-2"><MapIcon size={12} /> Acquisition</h4>
                                                                {displaySet.source && typeof displaySet.source === 'object' ? (
                                                                    <div className="space-y-1">
                                                                        {Object.entries(displaySet.source).map(([slot, boss]) => (
                                                                            <div key={slot} className="flex justify-between text-xs">
                                                                                <span className="text-stone-400 capitalize">{slot}</span>
                                                                                <span className="text-stone-300">{boss}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    <p className="text-stone-400 text-sm">{tiers.find(t => t.id === activeTier)?.sub || 'Vendor'}</p>
                                                                )}
                                                            </div>

                                                            {/* Off-Pieces or Enchants */}
                                                            <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                                                <h4 className="text-xs text-stone-500 uppercase tracking-widest mb-3 flex items-center gap-2"><Shield size={12} /> Completion</h4>
                                                                {displaySet.offPieces ? (
                                                                    <ul className="space-y-1">
                                                                        {displaySet.offPieces.map((item, i) => (
                                                                            <li key={i} className="text-xs text-stone-300 flex items-center gap-2">
                                                                                <span className="w-1 h-1 bg-stone-500 rounded-full"></span>
                                                                                {item}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                ) : (
                                                                    <p className="text-stone-500 text-xs italic">No specific off-pieces listed.</p>
                                                                )}

                                                                {displaySet.enchants && (
                                                                    <div className="mt-3 pt-3 border-t border-white/5">
                                                                        <span className="text-[10px] text-stone-500 uppercase">Rec. Enchants: </span>
                                                                        <span className="text-xs text-stone-300">{displaySet.enchants.join(', ')}</span>
                                                                    </div>
                                                                )}

                                                                <div className="mt-4 pt-4 border-t border-white/5">
                                                                    <h5 className="text-[10px] text-stone-500 uppercase mb-2">Recommended Professions</h5>
                                                                    <div className="space-y-2">
                                                                        <div className="space-y-1">
                                                                            <div className="flex justify-between text-xs text-stone-400"><span>Blacksmithing</span><span>375/375</span></div>
                                                                            <div className="h-1 bg-black rounded overflow-hidden"><div className="h-full bg-orange-500/50 w-full"></div></div>
                                                                        </div>
                                                                        <div className="space-y-1">
                                                                            <div className="flex justify-between text-xs text-stone-400"><span>Jewelcrafting</span><span>375/375</span></div>
                                                                            <div className="h-1 bg-black rounded overflow-hidden"><div className="h-full bg-purple-500/50 w-full"></div></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Reputation Rewards */}
                                                        {currentSpec.repRewards && (
                                                            <div className="bg-[#111] p-4 rounded-lg border border-amber-500/10 mt-6 relative overflow-hidden group/rep">
                                                                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/5 to-transparent opacity-0 group-hover/rep:opacity-100 transition-opacity"></div>
                                                                <h4 className="text-xs text-amber-500 uppercase tracking-widest mb-3 flex items-center gap-2 relative z-10"><Star size={14} /> Faction Commander Rewards</h4>
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                                                                    {currentSpec.repRewards?.map((rep, i) => (
                                                                        <div key={i} className="flex items-center justify-between bg-black/40 px-3 py-2 rounded border border-white/5">
                                                                            <span className="text-sm font-medium text-stone-300">{rep.name}</span>
                                                                            <span className="text-[10px] text-stone-500 bg-white/5 px-2 py-0.5 rounded">{rep.faction}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Activity Heatmap Mock */}
                                                        <div className="mt-8 pt-6 border-t border-white/5">
                                                            <ActivityHeatmap />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()
                            }
                        </div>
                    </div>
                )}
            </main>

            {/* IMAGE ZOOM MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl max-h-[90vh] animate-fade-in">
                        <button
                            className="absolute top-4 right-4 text-white/50 hover:text-white bg-black/50 p-2 rounded-full"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full View"
                            className="w-full h-full object-contain max-h-[90vh] rounded-lg shadow-2xl border border-white/10"
                        />
                    </div>
                </div>
            )}

            {/* SHARE MODAL */}
            {showShare && (
                <ShareCard
                    set={currentSpec?.sets[activeTier] || currentSpec?.pvpSets[activeTier]}
                    classData={currentClass}
                    onClose={() => setShowShare(false)}
                />
            )}
        </div>
    );
};

export default TheArmory;
