import React, { useState, useEffect } from 'react';
import {
    Sword, Shield, Zap, Crosshair, Heart, Skull,
    Activity, Moon, Sun, Droplet, Flame, Snowflake,
    Ghost, Hammer, BookOpen, ArrowLeft, Leaf, Crown,
    RotateCcw, Info
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';
import { druidTalents } from '../data/druid-talents';

const TalentCalculator = () => {
    const [activeClass, setActiveClass] = useState('druid');
    const [points, setPoints] = useState({}); // { talentId: rank }
    const [totalPoints, setTotalPoints] = useState(0);
    const MAX_POINTS = 61;

    // -- CLASS DATA --
    const classes = {
        druid: { name: 'Druid', icon: <Leaf className="w-5 h-5" />, color: 'text-orange-400', border: 'border-orange-500' },
        hunter: { name: 'Hunter', icon: <Crosshair className="w-5 h-5" />, color: 'text-green-400', border: 'border-green-500' },
        mage: { name: 'Mage', icon: <Flame className="w-5 h-5" />, color: 'text-blue-400', border: 'border-blue-500' },
        paladin: { name: 'Paladin', icon: <Hammer className="w-5 h-5" />, color: 'text-pink-400', border: 'border-pink-500' },
        priest: { name: 'Priest', icon: <BookOpen className="w-5 h-5" />, color: 'text-white', border: 'border-gray-400' },
        rogue: { name: 'Rogue', icon: <Sword className="w-5 h-5" />, color: 'text-yellow-400', border: 'border-yellow-500' },
        shaman: { name: 'Shaman', icon: <Zap className="w-5 h-5" />, color: 'text-blue-600', border: 'border-blue-600' },
        warlock: { name: 'Warlock', icon: <Skull className="w-5 h-5" />, color: 'text-purple-500', border: 'border-purple-500' },
        warrior: { name: 'Warrior', icon: <Shield className="w-5 h-5" />, color: 'text-red-500', border: 'border-red-500' },
    };

    // Reset points when class changes
    useEffect(() => {
        setPoints({});
        setTotalPoints(0);
    }, [activeClass]);

    // -- HELPER: Count points in a specific tree --
    const getTreePoints = (treeKey) => {
        if (activeClass !== 'druid') return 0;
        const treeTalents = druidTalents[treeKey].talents;
        return treeTalents.reduce((acc, t) => acc + (points[t.id] || 0), 0);
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
                // Find prereq max points (inefficient but works for small data)
                const prereqTalent = druidTalents[treeKey].talents.find(t => t.id === talent.prereq);
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
            // Logic to prevent breaking dependencies (simple strict mode: cannot remove if dependent exists)
            // For now, simpler removal allowed for prototype
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
        return talents.map(talent => {
            if (!talent.prereq) return null;
            const prereq = talents.find(t => t.id === talent.prereq);
            if (!prereq) return null;

            // Arrow color state
            const isActive = points[prereq.id] === prereq.maxPoints;
            const color = isActive ? "#fbbf24" : "#4b5563"; // amber-400 : gray-600

            // Grid Layout Geometry
            // Grid cols: 4, Width: 240px. 
            // Col Width = 60px.
            // Row Height = 40px (icon) + 24px (gap) = 64px.
            // Icon Size = 40px (w-10 h-10).

            // Start Point: Bottom Center of Prereq
            const startX = prereq.col * 60 + 30; // 30 is center of 60
            const startY = prereq.row * 64 + 40; // 40 is height of icon box

            // End Point: Top Center of Talent
            const endX = talent.col * 60 + 30;
            const endY = talent.row * 64;

            // PATH FINDING (Manhattan)
            // Strategy: Down -> Horizontal -> Down
            // Vertical gap is 24px (from y=40 to y=64 next row).
            // Elbow Y should be halfway in gap: 40 + 12 = 52 relative to row start.
            // But prereq.row and talent.row might differ.

            let d = "";
            const halfGap = 12;

            if (talent.col === prereq.col) {
                // Simple Vertical Drop
                d = `M${startX} ${startY} L${endX} ${endY}`;
            } else {
                // Turn Logic
                // 1. Down to elbow level (halfway between start row and next row)
                const elbowY = startY + halfGap;

                // 2. Horizontal to target X
                // 3. Down to target Y
                d = `M${startX} ${startY} L${startX} ${elbowY} L${endX} ${elbowY} L${endX} ${endY}`;
            }

            return (
                <g key={`${talent.id}-arrow`}>
                    <path
                        d={d}
                        fill="none"
                        stroke={color}
                        strokeWidth="2"
                    />
                    {/* Arrowhead */}
                    <path
                        d={`M${endX} ${endY} L${endX - 4} ${endY - 6} L${endX + 4} ${endY - 6} Z`}
                        fill={color}
                    />
                </g>
            );
        });
    };

    // -- RENDER SINGLE TREE --
    const renderTree = (specKey, specData) => {
        const treePoints = getTreePoints(specKey);

        return (
            <div className="flex-1 min-w-[300px] bg-[#121212] border border-white/10 rounded-lg overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
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
                    className="relative p-6 flex-1 bg-cover bg-center"
                    style={{ backgroundImage: `url(${specData.background})` }}
                >
                    <div className="absolute inset-0 bg-[#0a0a0a]/90"></div>

                    {/* Arrows Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
                        {renderArrows(specKey, specData.talents)}
                    </svg>

                    {/* Talent Grid */}
                    <div className="relative z-10 grid grid-cols-4 gap-y-6" style={{ width: '240px', margin: '0 auto' }}>
                        {/* Fixed width 240px = 4 cols of ~60px */}
                        {specData.talents.map(talent => {
                            const rank = points[talent.id] || 0;
                            const isMaxed = rank === talent.maxPoints;
                            const hasPoints = rank > 0;
                            // Check maxed dependency
                            const prereqTalentData = talent.prereq ? druidTalents[specKey].talents.find(t => t.id === talent.prereq) : null;
                            const isLocked = talent.prereq && (points[talent.prereq] || 0) < (prereqTalentData?.maxPoints || 0);
                            const isGreyed = isLocked || (getTreePoints(specKey) < talent.row * 5); // Simple tier availability check

                            // Icon logic
                            const iconUrl = talent.icon.startsWith('http')
                                ? talent.icon
                                : `https://wow.zamimg.com/images/wow/icons/large/${talent.icon}.jpg`;

                            // Tooltip Positioning Logic
                            const isTopRow = talent.row < 2;
                            // Horizontal alignment to prevent clipping
                            let alignClass = "left-1/2 -translate-x-1/2"; // default center
                            if (talent.col === 0) alignClass = "left-0 translate-x-0"; // align left edge
                            if (talent.col === 3) alignClass = "right-0 translate-x-0"; // align right edge

                            const tooltipClass = `${isTopRow ? "top-full mt-2" : "bottom-full mb-2"} ${alignClass}`;

                            return (
                                <div
                                    key={talent.id}
                                    className="relative group flex justify-center"
                                    style={{
                                        gridColumn: talent.col + 1,
                                        gridRow: talent.row + 1
                                    }}
                                    onClick={(e) => handleAddPoint(talent, specKey, e)}
                                    onContextMenu={(e) => handleRemovePoint(talent, specKey, e)}
                                >
                                    <div className={`
                                        relative w-10 h-10 rounded border-2 transition-all cursor-pointer z-10
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
                                    <div className={`absolute w-64 bg-slate-950 border border-white/20 p-3 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none text-left ${tooltipClass}`}>
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
                <aside className="lg:w-48 flex-shrink-0 hidden xl:block">
                    <div className="bg-[#121212] border border-white/10 rounded-lg p-3 sticky top-24">
                        <div className="grid grid-cols-4 lg:grid-cols-1 gap-2">
                            {Object.entries(classes).map(([key, cls]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveClass(key)}
                                    className={`flex items-center gap-2 p-2 rounded transition-colors ${activeClass === key
                                        ? `bg-white/10 text-white ${cls.border} border-l-2`
                                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                        }`}
                                    title={cls.name}
                                >
                                    {cls.icon}
                                    <span className="font-medium hidden lg:block text-sm">{cls.name}</span>
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
                                <span className={`block text-3xl font-hero font-bold ${activeClass === 'druid' ? 'text-amber-500' : 'text-gray-600'}`}>
                                    {totalPoints} / {MAX_POINTS}
                                </span>
                                <span className="text-[10px] uppercase text-gray-500 tracking-wider">Points Used</span>
                            </div>
                            <div className="h-10 w-px bg-white/10"></div>
                            {/* Tree Summaries */}
                            {activeClass === 'druid' && Object.keys(druidTalents).map(treeKey => (
                                <div key={treeKey} className="text-center">
                                    <span className="block text-xl font-mono text-gray-300">{getTreePoints(treeKey)}</span>
                                    <span className="text-[9px] uppercase text-gray-500 tracking-wider">{druidTalents[treeKey].name}</span>
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

                    {activeClass !== 'druid' ? (
                        <div className="h-96 flex items-center justify-center bg-[#121212] border border-white/10 rounded-lg">
                            <div className="text-center text-gray-500">
                                <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                <h2 className="text-2xl font-hero text-gray-400">Work in Progress</h2>
                                <p>The {classes[activeClass].name} talent tree is being reforged.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col lg:flex-row gap-4 overflow-x-auto pb-8">
                            {/* Render all 3 trees */}
                            {renderTree('balance', druidTalents.balance)}
                            {renderTree('feral', druidTalents.feral)}
                            {renderTree('restoration', druidTalents.restoration)}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default TalentCalculator;
