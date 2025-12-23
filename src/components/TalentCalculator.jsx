import React, { useState, useEffect } from 'react';
import {
    Sword, Shield, Zap, Crosshair, Heart, Skull,
    Activity, Moon, Sun, Droplet, Flame, Snowflake,
    Ghost, Hammer, BookOpen, ArrowLeft, Leaf, Crown,
    RotateCcw, Info
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';
import { druidTalents } from '../data/druid-talents';
import {
    hunterTalents, mageTalents, paladinTalents, priestTalents,
    rogueTalents, shamanTalents, warlockTalents, warriorTalents
} from '../data/additional-class-talents';

const TalentCalculator = () => {
    const [activeClass, setActiveClass] = useState('druid');
    const [points, setPoints] = useState({}); // { talentId: rank }
    const [totalPoints, setTotalPoints] = useState(0);
    const MAX_POINTS = 61;

    // -- DATA AGGREGATION --
    const ALL_TALENTS = {
        druid: druidTalents,
        hunter: hunterTalents,
        mage: mageTalents,
        paladin: paladinTalents,
        priest: priestTalents,
        rogue: rogueTalents,
        shaman: shamanTalents,
        warlock: warlockTalents,
        warrior: warriorTalents
    };

    // -- CLASS CONFIG (Icons & Colors) --
    // Using Crests as requested from the Classes page
    const CLASS_CONFIG = {
        druid: { name: 'Druid', crest: "https://i.imgur.com/t9FOweo.png", color: 'text-orange-400', border: 'border-orange-500' },
        hunter: { name: 'Hunter', crest: "https://i.imgur.com/En31Y4t.png", color: 'text-green-400', border: 'border-green-500' },
        mage: { name: 'Mage', crest: "https://i.imgur.com/qn2djXW.png", color: 'text-blue-400', border: 'border-blue-500' },
        paladin: { name: 'Paladin', crest: "https://i.imgur.com/tbPW0IM.png", color: 'text-pink-400', border: 'border-pink-500' },
        priest: { name: 'Priest', crest: "https://i.imgur.com/aj1CVrE.png", color: 'text-white', border: 'border-gray-400' },
        rogue: { name: 'Rogue', crest: "https://i.imgur.com/kQJfCCO.png", color: 'text-yellow-400', border: 'border-yellow-500' },
        shaman: { name: 'Shaman', crest: "https://i.imgur.com/OaLY1Ck.png", color: 'text-blue-600', border: 'border-blue-600' },
        warlock: { name: 'Warlock', crest: "https://i.imgur.com/MHcMLJx.png", color: 'text-purple-500', border: 'border-purple-500' },
        warrior: { name: 'Warrior', crest: "https://i.imgur.com/seZs5WM.png", color: 'text-red-500', border: 'border-red-500' },
    };

    const currentClassData = ALL_TALENTS[activeClass];

    // Reset points when class changes
    useEffect(() => {
        setPoints({});
        setTotalPoints(0);
    }, [activeClass]);

    // -- HELPER: Count points in a specific tree --
    const getTreePoints = (treeKey) => {
        const treeData = currentClassData[treeKey];
        if (!treeData) return 0;
        return treeData.talents.reduce((acc, t) => acc + (points[t.id] || 0), 0);
    };

    // -- HANDLERS --
    const handleAddPoint = (talent, treeKey, e) => {
        e.preventDefault();
        if (totalPoints >= MAX_POINTS) return;

        const currentRank = points[talent.id] || 0;
        if (currentRank < talent.maxPoints) {
            // Check tree validity: Must have enough points in previous rows
            // Simple row check: (row_index * 5) points required in this tree
            const pointsInTree = getTreePoints(treeKey);
            const reqPointsForTier = talent.row * 5;

            if (pointsInTree < reqPointsForTier) return;

            // Check prerequisite dependency
            if (talent.prereq) {
                const prereqRank = points[talent.prereq] || 0;
                // Find prereq max points
                const prereqTalent = currentClassData[treeKey].talents.find(t => t.id === talent.prereq);
                if (prereqTalent && prereqRank < prereqTalent.maxPoints) return;
            }

            setPoints({ ...points, [talent.id]: currentRank + 1 });
            setTotalPoints(totalPoints + 1);
        }
    };

    const handleRemovePoint = (talent, treeKey, e) => {
        e.preventDefault();
        const currentRank = points[talent.id] || 0;
        if (currentRank > 0) {
            setPoints({ ...points, [talent.id]: currentRank - 1 });
            setTotalPoints(totalPoints - 1);
        }
    };

    const handleReset = () => {
        setPoints({});
        setTotalPoints(0);
    };

    // -- ARROW RENDERING --
    const renderArrows = (treeKey, talents) => {
        return (
            <g>
                <defs>
                    {/* Small Arrowheads: 3.5px width */}
                    <marker id="arrow-gray" markerWidth="3.5" markerHeight="3.5" refX="3.5" refY="1.75" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,3.5 L3.5,1.75 z" fill="#4b5563" />
                    </marker>
                    <marker id="arrow-gold" markerWidth="3.5" markerHeight="3.5" refX="3.5" refY="1.75" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,3.5 L3.5,1.75 z" fill="#fbbf24" />
                    </marker>
                </defs>
                {talents.map(talent => {
                    if (!talent.prereq) return null;
                    const prereq = talents.find(t => t.id === talent.prereq);
                    if (!prereq) return null;

                    // Arrow color state
                    const isActive = points[prereq.id] === prereq.maxPoints;
                    const color = isActive ? "#fbbf24" : "#4b5563"; // amber-400 : gray-600
                    const markerId = isActive ? "url(#arrow-gold)" : "url(#arrow-gray)";

                    // Grid Layout Geometry
                    // Grid cols: 4, Width: 240px. Col Width = 60px.
                    // Row Height = 64px (40px icon + 24px gap).
                    // Icon Size = 40px.
                    // MEASURED OFFSETS (Browser Refined): X+36, Y+36.

                    const pCol = prereq.col;
                    const pRow = prereq.row;
                    const tCol = talent.col;
                    const tRow = talent.row;

                    const pCx = pCol * 60 + 36;
                    const pCy = pRow * 64 + 36;

                    const tCx = tCol * 60 + 36;
                    const tCy = tRow * 64 + 36;

                    // Radius adjustment:
                    // Icon is 40px wide/high (r=20).
                    // User requested "edge to edge".
                    // r=20 touches exactly the boundary of a 40px icon.
                    // With a 3px border, the "outside edge" is at the 40px boundary.
                    const r = 20;

                    let d = "";

                    // Logic: Connect shortest path between edges using orthogonal lines.

                    // 1. Same Row (Horizontal)
                    if (pRow === tRow) {
                        if (tCol > pCol) {
                            // Prereq (Right Edge) -> Talent (Left Edge)
                            const startX = pCx + r;
                            const startY = pCy;
                            const endX = tCx - r;
                            const endY = tCy;
                            d = `M${startX} ${startY} L${endX} ${endY}`;
                        } else { // tCol < pCol
                            // Prereq (Left Edge) -> Talent (Right Edge)
                            const startX = pCx - r;
                            const startY = pCy;
                            const endX = tCx + r;
                            const endY = tCy;
                            d = `M${startX} ${startY} L${endX} ${endY}`;
                        }
                    }
                    // 2. Same Column (Vertical)
                    else if (pCol === tCol) {
                        if (tRow > pRow) {
                            // Prereq (Bottom Edge) -> Talent (Top Edge)
                            const startX = pCx;
                            const startY = pCy + r;
                            const endX = tCx;
                            const endY = tCy - r;
                            d = `M${startX} ${startY} L${endX} ${endY}`;
                        } else { // tRow < pRow
                            // Prereq (Top Edge) -> Talent (Bottom Edge)
                            const startX = pCx;
                            const startY = pCy - r;
                            const endX = tCx;
                            const endY = tCy + r;
                            d = `M${startX} ${startY} L${endX} ${endY}`;
                        }
                    }
                    // 3. Different Row & Col (Elbow)
                    else {
                        // Determine direction of elbow
                        const startX = pCx;
                        const endX = tCx;

                        // Exit/Enter Vertical Edges (standard tree flow)
                        const exitY = (tRow > pRow) ? pCy + r : pCy - r;
                        const enterY = (tRow > pRow) ? tCy - r : tCy + r;

                        // Mid Y calculation
                        // Centered in gap.
                        const bendY = (tRow > pRow) ? pCy + 32 : pCy - 32;

                        d = `M${startX} ${exitY} L${startX} ${bendY} L${endX} ${bendY} L${endX} ${enterY}`;
                    }

                    return (
                        <path
                            key={`${talent.id}-arrow`}
                            d={d}
                            fill="none"
                            stroke={color}
                            strokeWidth="3"
                            markerEnd={markerId}
                            style={{
                                filter: isActive ? "drop-shadow(0 0 3px #fbbf24)" : "none",
                                transition: "all 0.3s ease"
                            }}
                        />
                    );
                })}
            </g>
        );
    };

    // -- RENDER SINGLE TREE --
    const renderTree = (specKey, specData) => {
        const treePoints = getTreePoints(specKey);

        return (
            <div className="flex-1 min-w-[300px] bg-[#121212] border border-white/10 rounded-lg flex flex-col relative shadow-xl">
                {/* Header */}
                <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between rounded-t-lg">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-black/50 border border-white/10 p-1">
                            <img src={specData.icon} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-hero text-amber-500 text-sm tracking-widest uppercase">{specData.name}</h3>
                            <span className="text-xs text-gray-500 font-mono">{treePoints} / {MAX_POINTS}</span>
                        </div>
                    </div>
                </div>

                {/* Grid Container */}
                <div
                    className="relative p-6 flex-1 bg-cover bg-center rounded-b-lg"
                    style={{
                        backgroundImage: `url(${specData.background})`,
                        backgroundBlendMode: 'overlay',
                        backgroundColor: '#0a0a0a' // Darken default
                    }}
                >
                    <div className="absolute inset-0 bg-[#0a0a0a]/80 rounded-b-lg"></div>

                    {/* Talent Grid Wrapper */}
                    <div className="relative z-10" style={{ width: '240px', margin: '0 auto' }}>

                        {/* SVG Layer for Arrows */}
                        <svg className="absolute -top-4 -left-4 w-[120%] h-[120%] pointer-events-none z-0" style={{ overflow: 'visible' }}>
                            {renderArrows(specKey, specData.talents)}
                        </svg>

                        <div className="grid grid-cols-4 gap-y-6">
                            {/* Fixed width 240px = 4 cols of ~60px */}
                            {specData.talents.map(talent => {
                                const rank = points[talent.id] || 0;
                                const isMaxed = rank === talent.maxPoints;
                                const hasPoints = rank > 0;
                                // Check maxed dependency
                                const prereqTalentData = talent.prereq ? currentClassData[specKey].talents.find(t => t.id === talent.prereq) : null;
                                const isLocked = talent.prereq && (points[talent.prereq] || 0) < (prereqTalentData?.maxPoints || 0);
                                const isGreyed = isLocked || (getTreePoints(specKey) < talent.row * 5); // Simple tier availability check

                                // Icon logic
                                const iconUrl = talent.icon.startsWith('http') || talent.icon.startsWith('data:')
                                    ? talent.icon
                                    : `https://wow.zamimg.com/images/wow/icons/large/${talent.icon}.jpg`;

                                // Tooltip Positioning Logic
                                const isTopRow = talent.row < 2;
                                let alignClass = "left-1/2 -translate-x-1/2";
                                if (talent.col === 0) alignClass = "left-0 translate-x-0";
                                if (talent.col === 3) alignClass = "right-0 translate-x-0";

                                const tooltipClass = `${isTopRow ? "top-full mt-2" : "bottom-full mb-2"} ${alignClass}`;

                                return (
                                    <div
                                        key={talent.id}
                                        className="relative group flex justify-center w-10 h-10"
                                        style={{
                                            gridColumn: talent.col + 1,
                                            gridRow: talent.row + 1
                                        }}
                                        onClick={(e) => handleAddPoint(talent, specKey, e)}
                                        onContextMenu={(e) => handleRemovePoint(talent, specKey, e)}
                                    >
                                        <div className={`
                                            absolute inset-0 rounded border-[3px] transition-all cursor-pointer z-20
                                            ${isMaxed ? 'border-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]' :
                                                hasPoints ? 'border-green-400' :
                                                    isGreyed ? 'border-gray-800 opacity-50 grayscale' : 'border-gray-500 hover:border-gray-300'}
                                            bg-black
                                        `}>
                                            <img src={iconUrl} className="w-full h-full object-cover" />

                                            {/* Rank */}
                                            <div className={`absolute -bottom-2 -right-2 border text-[9px] px-1 rounded font-bold
                                                ${isMaxed ? 'bg-amber-900 border-amber-500 text-amber-100' : 'bg-black border-gray-600 text-gray-300'}
                                            `}>
                                                {rank}/{talent.maxPoints}
                                            </div>
                                        </div>

                                        {/* Tooltip */}
                                        <div className={`absolute w-64 bg-slate-950 border border-white/20 p-3 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-[100] pointer-events-none text-left ${tooltipClass}`}>
                                            <h4 className="font-bold text-amber-400 text-sm">{talent.name}</h4>
                                            <p className="text-[10px] text-gray-400 mb-2">Rank {rank}/{talent.maxPoints}</p>
                                            <p className="text-xs text-gray-300 leading-snug">
                                                {talent.description(rank === 0 ? 1 : rank)}
                                            </p>
                                            {rank < talent.maxPoints && (
                                                <div className="mt-2 pt-2 border-t border-white/10">
                                                    <p className="text-xs text-green-400">Next Rank:</p>
                                                    <p className="text-xs text-gray-400">{talent.description(rank + 1)}</p>
                                                </div>
                                            )}
                                            {isLocked && <p className="text-xs text-red-500 mt-2">Requires fully ranked {prereqTalentData?.name}</p>}
                                            {(getTreePoints(specKey) < talent.row * 5) && <p className="text-xs text-red-500 mt-2">Requires {talent.row * 5} points in {specData.name} Talents</p>}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-body selection:bg-amber-900 selection:text-amber-100 pb-20">
            <UnifiedHeader
                icon="https://i.imgur.com/yRtAtam.jpeg"
                background="https://i.imgur.com/X2D1sO5.jpeg"
                section="Systems"
                sub="Character Customization"
                title="Talent Calculator"
                quote="Forge your destiny with new powers."
            />

            <div className="w-full max-w-[1920px] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

                {/* LEFT: Class Selector */}
                <aside className="lg:w-64 flex-shrink-0">
                    <div className="bg-[#121212] border border-white/10 rounded-lg p-4 sticky top-24">
                        <h3 className="font-hero text-gray-400 text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Select Class</h3>
                        <div className="grid grid-cols-4 lg:grid-cols-1 gap-2">
                            {Object.entries(CLASS_CONFIG).map(([key, cls]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveClass(key)}
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group ${activeClass === key
                                        ? `bg-white/10 text-white ${cls.border} border-l-4 shadow-lg`
                                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent'
                                        }`}
                                    title={cls.name}
                                >
                                    <div className={`w-8 h-8 rounded bg-black/40 border border-white/5 p-1 ${activeClass === key ? 'scale-110' : 'group-hover:scale-110'} transition-transform`}>
                                        <img src={cls.crest} className="w-full h-full object-contain" />
                                    </div>
                                    <span className="font-hero font-bold tracking-wide hidden lg:block text-sm">{cls.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* RIGHT: Calculator Area */}
                <main className="flex-1">
                    {/* Info Bar */}
                    <div className="flex justify-between items-center mb-6 bg-[#121212] p-4 rounded-lg border border-white/10 shadow-lg sticky top-20 z-40 backdrop-blur-md bg-opacity-90">
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <span className={`block text-3xl font-hero font-bold ${CLASS_CONFIG[activeClass].color}`}>
                                    {totalPoints} / {MAX_POINTS}
                                </span>
                                <span className="text-[10px] uppercase text-gray-500 tracking-wider">Points Used</span>
                            </div>
                            <div className="h-10 w-px bg-white/10"></div>
                            {/* Tree Summaries */}
                            {Object.keys(currentClassData).map(treeKey => (
                                <div key={treeKey} className="text-center hidden md:block">
                                    <span className="block text-xl font-mono text-gray-300">{getTreePoints(treeKey)}</span>
                                    <span className="text-[9px] uppercase text-gray-500 tracking-wider truncate max-w-[80px] block">{currentClassData[treeKey].name}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 px-4 py-2 bg-red-900/20 text-red-500 rounded hover:bg-red-900/30 transition-colors text-xs font-bold uppercase tracking-wider"
                        >
                            <RotateCcw size={14} /> Reset
                        </button>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-6 overflow-x-auto pb-8">
                        {/* Render all 3 trees */}
                        {Object.entries(currentClassData).map(([key, data]) => renderTree(key, data))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TalentCalculator;
