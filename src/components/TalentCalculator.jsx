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

const TalentCalculator = ({ initialClass = 'druid' }) => {
    const [activeClass, setActiveClass] = useState(initialClass);
    const [points, setPoints] = useState({}); // { talentId: rank }
    const [totalPoints, setTotalPoints] = useState(0);
    const [hoveredTalent, setHoveredTalent] = useState(null);
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
                {
                    talents.map(talent => {
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
                            <g key={`${talent.id}-arrow`}>
                                {/* Border / Shadow Path (Wooden Style) */}
                                <path
                                    d={d}
                                    fill="none"
                                    stroke="#271c19" // Deep wooden brown
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    style={{ opacity: 0.8 }}
                                />
                                {/* Inner Path */}
                                <path
                                    d={d}
                                    fill="none"
                                    stroke={color}
                                    strokeWidth="3"
                                    markerEnd={markerId}
                                    strokeLinecap="round"
                                    style={{
                                        filter: isActive ? "drop-shadow(0 0 2px #fbbf24)" : "none",
                                        transition: "all 0.3s ease"
                                    }}
                                />
                            </g>
                        );
                    })
                }
            </g >
        );
    };

    // -- RENDER SINGLE TREE --
    const renderTree = (specKey, specData) => {
        const treePoints = getTreePoints(specKey);

        return (
            <div className="flex-1 min-w-[300px] bg-[#121212] border border-white/10 rounded-lg flex flex-col relative shadow-xl overflow-hidden">
                {/* Header */}
                <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between rounded-t-lg z-20 relative">
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

                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none"
                    style={{
                        backgroundImage: `url(${specData.background})`,
                        opacity: 0.15 // Slight transparency so it doesn't overpower
                    }}
                />

                {/* Grid Container */}
                <div className="relative p-6 flex-1 z-10 flex justify-center">

                    {/* Fixed Width Wrapper to align Arrows & Grid perfectly */}
                    <div className="relative" style={{ width: '240px' }}>

                        {/* SVG Layer for Arrows */}
                        <svg className="absolute -top-4 -left-4 w-[120%] h-[120%] pointer-events-none z-0" style={{ overflow: 'visible' }}>
                            <defs>
                                {/* Small Arrowheads: Shorter (2 wide, 3 high) */}
                                <marker id="arrow-gray" markerWidth="2" markerHeight="3" refX="2" refY="1.5" orient="auto" markerUnits="strokeWidth">
                                    <path d="M0,0 L0,3 L2,1.5 z" fill="#4b5563" />
                                </marker>
                                <marker id="arrow-gold" markerWidth="2" markerHeight="3" refX="2" refY="1.5" orient="auto" markerUnits="strokeWidth">
                                    <path d="M0,0 L0,3 L2,1.5 z" fill="#fbbf24" />
                                </marker>
                            </defs>
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
                                        onMouseEnter={() => setHoveredTalent({ tree: specKey, data: talent })}
                                        onMouseLeave={() => setHoveredTalent(null)}
                                        onClick={(e) => handleAddPoint(talent, specKey, e)}
                                        onContextMenu={(e) => handleRemovePoint(talent, specKey, e)}
                                    >
                                        <div className={`
                                            absolute inset-0 rounded border-[3px] transition-all cursor-pointer z-20 shadow-lg
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
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {hoveredTalent?.tree === specKey && (
                        <div
                            style={{
                                top: hoveredTalent.data.row < 5 ? `${(hoveredTalent.data.row * 64) + 80}px` : 'auto',
                                bottom: hoveredTalent.data.row >= 5 ? `${((8 - hoveredTalent.data.row) * 64) + 80}px` : 'auto',
                            }}
                            className={`absolute left-1/2 -translate-x-1/2 w-[90%] p-3 bg-slate-950/95 border border-white/20 rounded-lg backdrop-blur-md z-50 shadow-2xl transition-all duration-200 pointer-events-none`}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-normal text-amber-400 text-sm">{hoveredTalent.data.name}</h4>
                                <span className="text-[10px] text-gray-500 font-mono bg-black/50 px-1.5 py-0.5 rounded">
                                    Rank {points[hoveredTalent.data.id] || 0}/{hoveredTalent.data.maxPoints}
                                </span>
                            </div>

                            <p className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap mb-2">
                                {hoveredTalent.data.description((points[hoveredTalent.data.id] || 0) === 0 ? 1 : (points[hoveredTalent.data.id] || 0))}
                            </p>

                            {(points[hoveredTalent.data.id] || 0) < hoveredTalent.data.maxPoints && (
                                <div className="mt-2 pt-2 border-t border-white/10">
                                    <p className="text-[10px] uppercase text-green-500 font-bold mb-0.5">Next Rank</p>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        {hoveredTalent.data.description((points[hoveredTalent.data.id] || 0) + 1)}
                                    </p>
                                </div>

                            )}

                            {/* LOCKED STATE INFO */}
                            {(hoveredTalent.data.prereq && (points[hoveredTalent.data.prereq] || 0) < (currentClassData[specKey].talents.find(t => t.id === hoveredTalent.data.prereq)?.maxPoints || 0)) && (
                                <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                                    <span className="text-[10px]">🔒</span> Requires {currentClassData[specKey].talents.find(t => t.id === hoveredTalent.data.prereq)?.name}
                                </p>
                            )}
                            {(getTreePoints(specKey) < hoveredTalent.data.row * 5) && (
                                <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                                    <span className="text-[10px]">🔒</span> Requires {hoveredTalent.data.row * 5} points in {specData.name}
                                </p>
                            )}
                        </div>
                    )}
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
                                    <span className="font-hero tracking-wide hidden lg:block text-sm">{cls.name}</span>
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
                                <span className={`block text-3xl font-hero ${CLASS_CONFIG[activeClass].color}`}>
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
            {/* CHANGELOG CARD */}
            <div className="container mx-auto px-4 pb-12 max-w-4xl">
                <div className="bg-[#121212] border border-white/10 rounded-lg p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <Info className="w-5 h-5 text-amber-500" />
                            <h3 className="font-hero text-xl text-[#c29c55] uppercase tracking-widest">Class Design Changelog</h3>
                        </div>
                        <div className="space-y-4">
                            {activeClass === 'druid' && (
                                <>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-normal text-orange-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg" className="w-5 h-5 rounded" />
                                            Druid: Balance
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Starsurge</strong> replaces Insect Swarm (Row 2). A powerful new instant cast spell that generates immense Arcane energy, it serves as a core rotational ability and drastically reduces threat.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Starfall</strong> replaces Force of Nature (Row 9). Summon a shower of falling stars to devastate all enemies within range. (Force of Nature is now a baseline ability).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[BUFF]</span>
                                                <span><strong>Moonfury</strong> has been buffed to grant 15% bonus damage to Starfire and Wrath, solidifying the Moonkin's role as a heavy-hitting caster.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[BUFF]</span>
                                                <span><strong>Control of Nature</strong> also reduces Hurricane CD by up to 100%, allowing for consistent AoE pressure.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Dreamstate</strong> merged into <strong>Lunar Guidance</strong>. Now allows your intellect to serve double duty, providing both spell power and mana regeneration.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Imp. Moonkin Form</strong> added. Passive aura that grants Spell Haste to your party, making you an invaluable asset to caster groups.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Nature's Grace</strong> redesigned. Critical hits now grant a burst of casting speed, emphasizing a rhythm of fast-paced spellcasting.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-normal text-amber-500 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/ability_druid_catform.jpg" className="w-5 h-5 rounded" />
                                            Druid: Feral
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Berserk</strong> (New 41pt). A true frenzy that grants immunity to Fear and drastically reduces energy costs, allowing for an unrelenting assault.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[MOVE]</span>
                                                <span><strong>Mangle</strong> moved up to Row 4, making this core ability accessible earlier in the tree. (Faerie Fire (Feral) is now baseline).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Survival Instincts</strong> added. A massive defensive cooldown that temporarily boosts health, ensuring survival in the most dire situations.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[BUFF]</span>
                                                <span><strong>Imp. Leader of the Pack</strong> now provides unique utility: Bears redirect damage to themselves, while Cats cause targets to bleed profusely.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[BUFF]</span>
                                                <span><strong>Feral Instinct</strong> significantly improves Swipe, allowing it to hit more targets and apply a bleed, greatly enhancing bear AoE threat.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-normal text-green-500 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg" className="w-5 h-5 rounded" />
                                            Druid: Restoration
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Tree of Life</strong> is now a temporary, powerful cooldown. Transform into the avatar of life to massively boost healing throughput when it matters most.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Wild Growth</strong> added. A potent smart heal that blooms across your party, prioritizing the most injured allies.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Serenity of the Wild</strong> replaces Imp. Tranquility. Eliminate threat from your AoE heals ensuring you can save the raid without drawing aggro.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Swiftmend</strong> logic updated. It no longer consumes the HoT but heals based on remaining duration, allowing for sustained healing output.</span>
                                            </li>
                                        </ul>
                                    </div>

                                </>
                            )}
                            {activeClass === 'shaman' && (
                                <>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-normal text-blue-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg" className="w-5 h-5 rounded" />
                                            Shaman: Elemental
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[ADJUST]</span>
                                                <span><strong>Elemental Focus</strong> and <strong>Reverberation</strong> have swapped positions to improved talents flow.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[ADJUST]</span>
                                                <span><strong>Elemental Fury</strong> no longer requires Elemental Focus, allowing for more flexible build paths.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}
                            {activeClass === 'warrior' && (
                                <>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-normal text-amber-600 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_eviscerate.jpg" className="w-5 h-5 rounded" />
                                            Warrior: Arms
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Bladestorm</strong> (51pt). The ultimate display of martial prowess, you become an unstoppable whirlwind of steel that destroys up to 4 nearby targets.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Sudden Death</strong> allows your attacks to randomly enable <strong>Execute</strong> regardless of target health, keeping pressure high at all times.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-400 font-mono">[BUFF]</span>
                                                <span><strong>Mortal Strike</strong> now deals significantly more damage (+10% base) while maintaining its iconic healing reduction debuff.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Second Wind</strong> added. When stunned or immobilized, you generate rage and health, turning your opponent's control against them.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-normal text-blue-600 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/inv_shield_06.jpg" className="w-5 h-5 rounded" />
                                            Warrior: Protection
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Shockwave</strong> (51pt). A massive frontal cone stun that locks down enemies and deals heavy damage. (Shield Slam is now baseline).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Vigilance</strong> lets you protect a party member, transferring their threat to you and refreshing your Taunt when they are hit.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Mass Spell Reflection</strong> grants your entire party magical protection, reflecting incoming spells for iconic defensive plays.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Devastate</strong> reimagined. It now resets the cooldown of Shield Slam on critical blocks, creating a reactive and aggressive tanking flow.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}
                            {activeClass === 'paladin' && (
                                <>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-normal text-amber-200 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg" className="w-5 h-5 rounded" />
                                            Paladin: Holy
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Beacon of Light</strong> (51pt). The ultimate healing tool, duplicating all your heals onto a designated target, allowing you to heal two allies at once.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Infusion of Light</strong> causes your Holy Shock crits to make your next Holy Light cast nearly instantly.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Light's Hammer</strong> Replaces Divine Favor. Hurls a hammer to the ground, healing all allies in an area over time.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-normal text-purple-300 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_devotionaura.jpg" className="w-5 h-5 rounded" />
                                            Paladin: Protection
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Hammer of the Righteous</strong> (Row 3). A cleaving attack that hits 3 targets, establishing solid AoE threat. (Blessing of Kings is now baseline).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Blessing of Sanctuary</strong> now restores Mana when you Block, Dodge, or Parry, solving all sustain issues for tanking.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Ardent Defender</strong> prevents death from a killing blow and heals you, serving as a powerful cheat-death mechanic.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-normal text-amber-500 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_auraoflight.jpg" className="w-5 h-5 rounded" />
                                            Paladin: Retribution
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Divine Storm</strong> (51pt). An iconic AoE strike that heals party members, defining the Retribution playstyle. (Repentance is now baseline).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Divine Purpose</strong> converts your Strength into Spell power, ensuring all your holy abilities scale hard with gear.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Long Arm of the Law</strong> grants a massive movement speed burst when you use Judgement, closing the gap instantly.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}
                            {activeClass === 'rogue' && (
                                <>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-normal text-yellow-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_eviscerate.jpg" className="w-5 h-5 rounded" />
                                            Rogue: Assassination
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Mutilate</strong> no longer requires you to be behind the target and generates 2 Combo points, making it the premier burst builder.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Vendetta</strong> (Row 4). Marks an enemy for death, significantly increasing all damage you deal to them.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Poison Bomb</strong> gives Envenom a chance to create a deadly poison pool, adding AoE pressure to your rotation.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-normal text-red-500 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/ability_backstab.jpg" className="w-5 h-5 rounded" />
                                            Rogue: Combat
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Crimson Tempest</strong> (51pt). A finishing move that slashes all enemies and bleeds them. Replaces Surprise Attacks.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Close Quarters Combat</strong> consolidates sword and dagger specializations into a single mastery talent.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Blade Flurry</strong> hits multiple targets for full damage, cementing Combat as the cleave king.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-normal text-purple-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg" className="w-5 h-5 rounded" />
                                            Rogue: Subtlety
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Marked for Death</strong> (Replaces Premedication). Instantly generates 5 combo points on a target. 1m CD.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Shadowstep</strong> now buffs your next ability's damage by 20% and grants a massive speed boost.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Cheat Death</strong> now has an active component (90% DR) and a passive safety net to prevent oneshots.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}
                            {activeClass === 'shaman' && (
                                <>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-normal text-blue-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/classicon_shaman.jpg" className="w-5 h-5 rounded" />
                                            Shaman: Elemental
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Thunderstorm</strong> (Row 5, Col 3). KB + Mana. Prereq: Unrelenting Storm.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Unrelenting Storm</strong> (Row 4, Col 3). Mana regen Int scaling + Mana on LB Crit.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[BUFF]</span>
                                                <span><strong>Call of Thunder</strong> +115% Crit Dmg. <strong>Reverberation</strong> Shock CD -1s.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-normal text-blue-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg" className="w-5 h-5 rounded" />
                                            Shaman: Enhancement
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Maelstrom Weapon</strong> (Row 5, Col 1). <strong>Feral Spirits</strong> (Row 4, Col 1).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Shamanistic Focus</strong> (R2 C2). <strong>Mental Quickness</strong> (AP/SP Scaling).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[MOVE]</span>
                                                <span><strong>Spirit Weapons</strong> (Row 2, Col 1). <strong>Weapon Mastery</strong> (Row 4, Col 3).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Ancestral Toughness</strong> (Old Toughness). Crit Reduction + Dmg Red Proc.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-bold text-blue-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_nature_magicimmunity.jpg" className="w-5 h-5 rounded" />
                                            Shaman: Restoration
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Riptide</strong> (Row 8, Col 1). <strong>Tidal Waves</strong> (Row 2, Col 2). <strong>Spiritwalker's Grace</strong> (Row 6, Col 0).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Mana Tide Totem</strong> restores 30% Bonus Healing every 3s.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[MOVE]</span>
                                                <span><strong>Earth Shield</strong> (Row 4, Col 1). <strong>Totemic Mastery</strong> (Baseline).</span>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}
                            {activeClass === 'priest' && (
                                <>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg" className="w-5 h-5 rounded" />
                                            Priest: Discipline
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Penance</strong> (Replaces Divine Spirit). Active Dmg/Heal.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Divine Aegis</strong> (Row 4, Col 0). Crit heals create shield.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Power Infusion</strong> (Haste + Cost Red). Self-buffs if cast on ally.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Pain Suppression</strong> (2m CD). Threat -5%, Dmg Red 40% (8s).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Reflective Shield</strong> (High Threat). 3 Ranks.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg" className="w-5 h-5 rounded" />
                                            Priest: Holy
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Serendipity</strong> (Row 1, Col 0). Flash/Binding reduces Greater/Prayer cast time.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Spirit of Redemption</strong> (Active Ability). 10s form, -100% cost.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Lightwell</strong> (Smart HoT). Doesn't break on damage.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Holy Nova</strong> (Slow Enemies/Speed Allies).</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg" className="w-5 h-5 rounded" />
                                            Priest: Shadow
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Twist of Fate</strong> (Row 6, Col 0). Dmg to low HP targets boosts Shadow dmg.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Dispersion</strong> (Row 5, Col 3). 90% Dmg Red + Regen.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Shadowy Insight</strong> (Row 7, Col 0). DoT ticks reset Mind Blast CD.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-400 font-mono">[BUFF]</span>
                                                <span><strong>Shadowform</strong> (+15% Dmg, -15% Phys Dmg, -30% Threat).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-400 font-mono">[BUFF]</span>
                                                <span><strong>Misery</strong> (+5% Spell Dmg taken).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-400 font-mono">[BUFF]</span>
                                                <span><strong>Darkness</strong> (Mind Flay resets SW:P).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-400 font-mono">[BUFF]</span>
                                                <span><strong>Shadow Weaving</strong> Reduced to 3 ranks (33/66/100% chance).</span>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}
                            {activeClass === 'mage' && (
                                <>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-bold text-cyan-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_magicalsentry.jpg" className="w-5 h-5 rounded" />
                                            Mage: Arcane
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Arcane Barrage</strong> (Row 3). An instant-cast finisher that acts as a mobile nuke, consuming your Arcane Charges for massive damage.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[BUFF]</span>
                                                <span><strong>Arcane Power</strong> duration increased to 17s and CD reduced to 2m, aligning perfectly with your burst windows.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-bold text-orange-500 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_fire_firebolt02.jpg" className="w-5 h-5 rounded" />
                                            Mage: Fire
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Living Bomb</strong> (Ultimate). Turns the enemy into a ticking time bomb that explodes for massive AoE fire damage.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Combustion</strong> is now a deadly cooldown that combines your DoTs into a new super-DoT and guarantees critical hits.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Wildfire</strong> replaces Imp. Flamestrike. A comprehensive buff to all your AoE fire spells, ensuring the world burns.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-red-500 font-mono">[BASELINE]</span>
                                                <span><strong>Pyroblast</strong> is now available to all Mages, freeing up talent points for more explosive choices.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-bold text-blue-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg" className="w-5 h-5 rounded" />
                                            Mage: Frost
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Frozen Orb</strong> (Row 5). Launches a ball of ice that deals AoE damage and slows, granting you Fingers of Frost charges.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Water Elemental</strong> is now a permanent pet, giving Frost Mages a constant companion in battle.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[BUFF]</span>
                                                <span><strong>Winter's Chill</strong> at 5 stacks now treats the target as Frozen, allowing for massive Shatter combos on bosses.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}
                            {activeClass === 'hunter' && (
                                <>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-bold text-green-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/ability_hunter_beasttaming.jpg" className="w-5 h-5 rounded" />
                                            Hunter: General
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-400 font-mono">[SYSTEM]</span>
                                                <span><strong>Focus System</strong>: Mana is gone. Focus is here. A new resource bar that regenerates rapidly, allowing for a faster, more engaging rotation.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-bold text-green-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/ability_hunter_beastwithin.jpg" className="w-5 h-5 rounded" />
                                            Hunter: Beast Mastery
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Spirit of the Pack</strong> (51pt). You summon the essence of Hati, a permanent second wolf companion to fight by your side.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Cobra Shot</strong> (Row 2). A new signature shot that deals damage and generates Focus, replacing Arcane Shot.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Bestial Wrath</strong> now instantly grants 50 Focus and breaks all CC, truly unleashing the beast within.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-bold text-green-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/ability_hunter_snipershot.jpg" className="w-5 h-5 rounded" />
                                            Hunter: Marksmanship
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Marked for Death</strong> causes your attacks to deal massive extra damage to targets marked by Hunter's Mark.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Aimed Shot</strong> is now Instant Cast. A powerful opener or weave-in ability that no longer interrupts your movement.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-400 font-mono">[BUFF]</span>
                                                <span><strong>Trueshot Aura</strong> now also scales with 5% of your Attack Power, making it the strongest raid buff for physical damage dealers.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-bold text-green-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/ability_hunter_camouflage.jpg" className="w-5 h-5 rounded" />
                                            Hunter: Survival
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Explosive Shot</strong> (Row 6). A devastating fire shot that deals AoE damage. Replaces Wyvern Sting.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Black Arrow</strong> (Row 8). Wither your target with shadow energy, increasing all damage they take from you. Resets Explosive Shot.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Lock and Load</strong> your traps now trigger instant, free Explosive Shots, rewarding tactical play.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}
                            {activeClass === 'warlock' && (
                                <>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-bold text-violet-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg" className="w-5 h-5 rounded" />
                                            Warlock: Affliction
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Pandemic</strong> allows your periodic damage (DoTs) to critically strike, massively increasing your sustained damage output.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Haunt</strong> (Row 6). A ghostly soul that heals you and increases all Shadow DoT damage on the target. Replaces Dark Pact.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Grim Precision</strong> replaces Suppression. Grants Hit Chance and reduces mana costs, fixing early game sustain.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Soul Siphon</strong> now increases drain amount and grants Execute damage to Drain Soul against low HP targets.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-bold text-violet-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_metamorphosis.jpg" className="w-5 h-5 rounded" />
                                            Warlock: Demonology
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Demonic Pact</strong> (Row 4). Your pet's critical hits grant the entire party Spell Power, making you an essential raid buffer.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Demonic Empowerment</strong> grants your summoned demon a unique, powerful active ability, adding depth to pet management.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5 mt-4">
                                        <h4 className="font-bold text-orange-400 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/spell_shadow_rainoffire.jpg" className="w-5 h-5 rounded" />
                                            Warlock: Destruction
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Chaos Bolt</strong> (51pt). A shield-piercing bolt of chaotic fire that cannot be resisted. Replaces Shadowburn.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Fire and Brimstone</strong> increases the damage of your Incinerate and Chaos Bolt on targets afflicted by Immolate.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Nether Ward</strong> replaces Nether Protection. An active shield that absorbs Shadow and Fire damage, reflecting it back.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}
                            {activeClass === 'warrior' && (
                                <>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-bold text-amber-500 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_bladestorm.jpg" className="w-5 h-5 rounded" />
                                            Warrior: Arms
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Bladestorm</strong> (51pt). The ultimate display of martial prowess, you become an unstoppable whirlwind of steel that destroys up to 4 nearby targets.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Sudden Death</strong> allows your attacks to randomly enable <strong>Execute</strong> regardless of target health, keeping pressure high.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-400 font-mono">[BUFF]</span>
                                                <span><strong>Mortal Strike</strong> now deals significantly more damage (+10% base) while maintaining its iconic healing reduction debuff.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Second Wind</strong> added. When stunned or immobilized, you generate rage and health, turning your opponent's control against them.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-bold text-red-500 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/ability_warrior_innerrage.jpg" className="w-5 h-5 rounded" />
                                            Warrior: Fury
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Titanic Grip</strong> (51pt). You can now dual-wield two-handed weapons, sacrificing precision for sheer devastating power.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Raging Blow</strong> strike your enemy with both weapons in a furious assault. Only usable while Enraged. Replaces Piercing Howl.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Fresh Meat</strong> Your Bloodthirst crits have a high chance to Enrage you, ensuring your anger never subsides in battle.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-bold text-blue-500 text-sm mb-2 flex items-center gap-2">
                                            <img src="https://wow.zamimg.com/images/wow/icons/large/inv_shield_06.jpg" className="w-5 h-5 rounded" />
                                            Warrior: Protection
                                        </h4>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Shockwave</strong> (51pt). A massive frontal cone stun that locks down enemies and deals heavy damage. (Shield Slam is now baseline).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Vigilance</strong> lets you protect a party member, transferring their threat to you and refreshing your Taunt when they are hit.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 font-mono">[NEW]</span>
                                                <span><strong>Mass Spell Reflection</strong> grants your entire party magical protection, reflecting incoming spells for iconic defensive plays.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-amber-500 font-mono">[REWORK]</span>
                                                <span><strong>Devastate</strong> reimagined. It now resets the cooldown of Shield Slam on critical blocks, creating a reactive and aggressive tanking flow.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TalentCalculator;
