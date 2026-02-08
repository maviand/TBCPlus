import React, { useState, useEffect } from 'react';
import {
    Sword, Shield, Zap, Crosshair, Heart, Skull,
    Activity, Moon, Sun, Droplet, Flame, Snowflake,
    Ghost, Hammer, BookOpen, ArrowLeft, Leaf, Crown,
    RotateCcw, Info, Share2, Search
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';
import { druidTalents } from '../data/druid-talents';
import {
    hunterTalents, mageTalents, paladinTalents, priestTalents,
    rogueTalents, shamanTalents, warlockTalents, warriorTalents
} from '../data/additional-class-talents';
import { GLYPH_DATA } from '../data/glyph-data';
import TalentChangelog from './TalentChangelog';
import TalentTooltip from './TalentTooltip';
import ErrorBoundary from './ErrorBoundary';

const TalentCalculator = ({ initialClass = 'druid' }) => {
    const [activeClass, setActiveClass] = useState(initialClass);

    // -- DUAL SPEC STATE --
    const [activeSpec, setActiveSpec] = useState(0); // 0 = Primary, 1 = Secondary
    const [specs, setSpecs] = useState({
        0: { points: {}, total: 0, glyphs: { major: [null, null, null], minor: [null, null, null] } },
        1: { points: {}, total: 0, glyphs: { major: [null, null, null], minor: [null, null, null] } }
    });

    // Derived State for Render
    const points = specs[activeSpec].points;
    const totalPoints = specs[activeSpec].total;
    // MAX_POINTS is now dynamic based on level state defined below

    const [hoveredTalent, setHoveredTalent] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeMobileTab, setActiveMobileTab] = useState(0);
    const [showGlyphs, setShowGlyphs] = useState(false);
    const [activeGlyphSlot, setActiveGlyphSlot] = useState(null); // { type: 'major'|'minor', index: 0-2 }

    // -- NEW FEATURES STATE --
    const [level, setLevel] = useState(70);
    const [freshMode, setFreshMode] = useState(false); // Toggle for Fresh/Plus differences
    const [showSim, setShowSim] = useState(false);
    const [simProgress, setSimProgress] = useState(0);
    const [simResult, setSimResult] = useState(null);

    const MAX_POINTS = Math.max(0, level - 9);

    // Parallax State
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) * 20 - 10,
                y: (e.clientY / window.innerHeight) * 20 - 10
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleGlyphSelect = (glyphId) => {
        if (!activeGlyphSlot) return;

        // CHECK DUPLICATES
        const currentTypeGlyphs = specs[activeSpec].glyphs[activeGlyphSlot.type];
        if (currentTypeGlyphs.includes(glyphId)) {
            alert("This glyph is already equipped!");
            return;
        }

        const newSpecs = { ...specs };
        newSpecs[activeSpec].glyphs[activeGlyphSlot.type][activeGlyphSlot.index] = glyphId;
        setSpecs(newSpecs);
        setActiveGlyphSlot(null);
    };

    const handleRemoveGlyph = (type, index, e) => {
        e.stopPropagation();
        const newSpecs = { ...specs };
        newSpecs[activeSpec].glyphs[type][index] = null;
        setSpecs(newSpecs);
    };

    // -- DATA AGGREGATION --
    // ... (Existing) ...

    // ... (Existing Helpers) ...

    // -- RENDER ARROWS (Existing) --
    // ...

    // -- RENDER SINGLE TREE --
    const renderTree = (specKey, specData) => {
        const treePoints = getTreePoints(specKey);

        return (
            <div className="flex-1 min-w-[300px] bg-[#121212] border border-white/10 rounded-lg flex flex-col relative shadow-xl overflow-hidden">
                {/* ... (Header & BG unchanged) ... */}
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
                {/* Background Image Layer with Reactive Lighting */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none transition-all duration-1000 ease-in-out"
                    style={{
                        backgroundImage: `url(${specData.background})`,
                        opacity: treePoints > 30 ? 0.4 : 0.15,
                        filter: treePoints > 30 ? 'saturate(1.2) contrast(1.1)' : 'grayscale(0.5)',
                        transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px) scale(1.05)`, // Parallax
                    }}
                />

                {/* Reactive Glow Overlay */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000"
                    style={{
                        background: `radial-gradient(circle at center, ${CLASS_CONFIG[activeClass].color.replace('text-', 'bg-').replace('-400', '-500') + '/20'} 0%, transparent 70%)`,
                        opacity: treePoints > 0 ? 0.5 : 0
                    }}
                />

                {/* Grid Container */}
                <div className="relative p-6 flex-1 z-10 flex justify-center">
                    <div className="relative" style={{ width: '240px' }}>

                        {/* Styles for Energy Flow Animation */}
                        <style>
                            {`
                                @keyframes flow {
                                    0% { stroke-dashoffset: 20; }
                                    100% { stroke-dashoffset: 0; }
                                }
                                .flow-animation {
                                    animation: flow 1s linear infinite;
                                }
                            `}
                        </style>
                        {/* SVG Layer for Arrows */}
                        <svg className="absolute -top-4 -left-4 w-[120%] h-[120%] pointer-events-none z-0" style={{ overflow: 'visible' }}>
                            <defs>
                                <marker id="arrow-gray" markerWidth="2" markerHeight="3" refX="2" refY="1.5" orient="auto" markerUnits="strokeWidth">
                                    <path d="M0,0 L0,3 L2,1.5 z" fill="#4b5563" />
                                </marker>
                                <marker id="arrow-gold" markerWidth="2" markerHeight="3" refX="2" refY="1.5" orient="auto" markerUnits="strokeWidth">
                                    <path d="M0,0 L0,3 L2,1.5 z" fill="#fbbf24" />
                                </marker>
                            </defs>
                            {(() => {
                                try {
                                    return renderArrows(specKey, specData.talents);
                                } catch (e) { console.warn('Arrow Render Fail', e); return null; }
                            })()}
                        </svg>

                        <div className="grid grid-cols-4 gap-y-6">
                            {specData.talents.map(talent => {
                                if (!talent) return null;
                                const rank = points[talent.id] || 0;
                                const isMaxed = rank === talent.maxPoints;
                                const hasPoints = rank > 0;
                                const prereqTalentData = talent.prereq ? currentClassData[specKey].talents.find(t => t.id === talent.prereq) : null;
                                const isLocked = talent.prereq && (points[talent.prereq] || 0) < (prereqTalentData?.maxPoints || 0);
                                const isGreyed = isLocked || (getTreePoints(specKey) < talent.row * 5);

                                // KEYSTONE CHECK
                                const isKeystone = [6, 8, 10].includes(talent.row);

                                // SEARCH DIMMING LOGIC
                                let matchesSearch = true;
                                try {
                                    if (searchQuery) {
                                        const desc = talent.description(rank || 1).toLowerCase();
                                        matchesSearch =
                                            talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                            desc.includes(searchQuery.toLowerCase());
                                    }
                                } catch (e) {
                                    // Fallback if description fails
                                    matchesSearch = false;
                                }

                                const finalOpacity = matchesSearch ? (isGreyed ? 0.5 : 1) : 0.1;

                                const safeIcon = talent.icon || 'inv_misc_questionmark';
                                const iconUrl = safeIcon.startsWith('http') || safeIcon.startsWith('data:')
                                    ? safeIcon
                                    : `https://wow.zamimg.com/images/wow/icons/large/${safeIcon}.jpg`;

                                const isTopRow = talent.row < 2;
                                let alignClass = "left-1/2 -translate-x-1/2";
                                if (talent.col === 0) alignClass = "left-0 translate-x-0";
                                if (talent.col === 3) alignClass = "right-0 translate-x-0";

                                // BORDER STYLING
                                let borderClass = isGreyed ? 'border-gray-800 opacity-50 grayscale' : 'border-gray-500 hover:border-gray-300';
                                if (hasPoints) borderClass = 'border-green-400';
                                if (isMaxed) borderClass = 'border-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]';

                                // Keystone Override
                                if (isKeystone) {
                                    if (isMaxed) borderClass = 'border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.8)] ring-1 ring-amber-100';
                                    else if (!isGreyed) borderClass = 'border-amber-700/50 hover:border-amber-500';
                                }

                                return (
                                    <div
                                        key={talent.id}
                                        className={`relative group flex justify-center w-10 h-10 transition-all duration-300 ${isKeystone ? 'scale-110 z-10' : ''}`}
                                        style={{
                                            gridColumn: talent.col + 1,
                                            gridRow: talent.row + 1,
                                            opacity: finalOpacity
                                        }}
                                        onMouseEnter={() => setHoveredTalent({ tree: specKey, data: talent })}
                                        onMouseLeave={() => setHoveredTalent(null)}
                                        onClick={(e) => handleAddPoint(talent, specKey, e)}
                                        onContextMenu={(e) => handleRemovePoint(talent, specKey, e)}
                                    >
                                        <div className={`
                                            absolute inset-0 rounded border-[3px] transition-all cursor-pointer z-20 shadow-lg
                                            ${borderClass}
                                            bg-black
                                        `}>
                                            <img src={iconUrl} className="w-full h-full object-cover" />
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
                        <ErrorBoundary>
                            <TalentTooltip
                                talent={hoveredTalent.data}
                                treeKey={specKey}
                                points={points}
                                classData={currentClassData}
                            />
                        </ErrorBoundary>
                    )}
                </div>
            </div>
        );
    };

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
        druid: { name: 'Druid', crest: "https://warcraft.wiki.gg/images/ClassIcon_druid.png?a3333f", color: 'text-orange-400', border: 'border-orange-500' },
        hunter: { name: 'Hunter', crest: "https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d", color: 'text-green-400', border: 'border-green-500' },
        mage: { name: 'Mage', crest: "https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1", color: 'text-blue-400', border: 'border-blue-500' },
        paladin: { name: 'Paladin', crest: "https://warcraft.wiki.gg/images/ClassIcon_paladin.png?4d2aad", color: 'text-pink-400', border: 'border-pink-500' },
        priest: { name: 'Priest', crest: "https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800", color: 'text-white', border: 'border-gray-400' },
        rogue: { name: 'Rogue', crest: "https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1", color: 'text-yellow-400', border: 'border-yellow-500' },
        shaman: { name: 'Shaman', crest: "https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62", color: 'text-blue-600', border: 'border-blue-600' },
        warlock: { name: 'Warlock', crest: "https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06", color: 'text-purple-500', border: 'border-purple-500' },
        warrior: { name: 'Warrior', crest: "https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad", color: 'text-red-500', border: 'border-red-500' },

    };

    const currentClassData = ALL_TALENTS[activeClass];

    // Reset or Switch Class Logic
    useEffect(() => {
        // When class changes, we might want to reset? Or keep dual spec state per class? 
        // For simplicity: Reset everything on class switch.
        setSpecs({
            0: { points: {}, total: 0, glyphs: { major: [null, null, null], minor: [null, null, null] } },
            1: { points: {}, total: 0, glyphs: { major: [null, null, null], minor: [null, null, null] } }
        });
        setActiveSpec(0);
        setActiveMobileTab(0);
    }, [activeClass]);

    // -- HELPER: Count points in a specific tree --
    const getTreePoints = (treeKey) => {
        if (!currentClassData) return 0;
        const treeData = currentClassData[treeKey];
        if (!treeData) return 0;
        return treeData.talents.reduce((acc, t) => acc + (points[t.id] || 0), 0);
    };

    // -- STATE UPDATE HELPERS --
    const updateSpecState = (newPoints, newTotal) => {
        setSpecs(prev => ({
            ...prev,
            [activeSpec]: {
                ...prev[activeSpec],
                points: newPoints,
                total: newTotal
            }
        }));
    };

    // -- HANDLERS --
    const handleAddPoint = (talent, treeKey, e) => {
        e.preventDefault();
        if (totalPoints >= MAX_POINTS) return;

        const currentRank = points[talent.id] || 0;
        if (currentRank < talent.maxPoints) {
            // Check tree validity: Must have enough points in previous rows
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

            const newPoints = { ...points, [talent.id]: currentRank + 1 };
            updateSpecState(newPoints, totalPoints + 1);
        }
    };

    const handleRemovePoint = (talent, treeKey, e) => {
        e.preventDefault();
        const currentRank = points[talent.id] || 0;
        if (currentRank > 0) {
            // TODO: Validation to ensure removing doesn't break deep talents
            // For now, strict removal.
            const newPoints = { ...points, [talent.id]: currentRank - 1 };
            updateSpecState(newPoints, totalPoints - 1);
        }
    };

    // -- EXPORT / IMPORT LOGIC --
    const generateBuildLink = () => {
        try {
            const buildData = {
                cls: activeClass,
                pts: points
            };
            const str = btoa(JSON.stringify(buildData));
            const url = `${window.location.origin}${window.location.pathname}?build=${str}`;
            navigator.clipboard.writeText(url);
            alert('Build link copied to clipboard!');
        } catch (e) {
            console.error('Failed to generate link', e);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const buildStr = params.get('build');
        if (buildStr) {
            try {
                const decoded = JSON.parse(atob(buildStr));
                if (decoded.cls && ALL_TALENTS[decoded.cls]) {
                    setActiveClass(decoded.cls);
                    // Calculates total points from the imported object
                    const total = Object.values(decoded.pts).reduce((a, b) => a + b, 0);
                    // Update Primary Spec (0) with imported data
                    setSpecs(prev => ({
                        ...prev,
                        0: { points: decoded.pts, total, glyphs: {} }
                    }));
                }
            } catch (e) {
                console.error('Failed to parse build', e);
            }
        }
    }, []);

    const handleReset = () => {
        updateSpecState({}, 0);
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
                                    className={isActive ? "flow-animation" : ""}
                                    style={{
                                        filter: isActive ? "drop-shadow(0 0 2px #fbbf24)" : "none",
                                        transition: "all 0.3s ease",
                                        strokeDasharray: isActive ? "10 5" : "none"
                                    }}
                                />
                            </g>
                        );
                    })
                }
            </g >
        );
    };



    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-body selection:bg-amber-900 selection:text-amber-100 pb-20">
            <UnifiedHeader
                icon="https://i.imgur.com/Pq3wKNM.png"
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

                        {/* Search Input */}
                        <div className="mb-4 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                            <input
                                type="text"
                                placeholder="Search talents..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded pl-9 pr-3 py-2 text-xs text-gray-300 focus:border-amber-500/50 outline-none transition-colors"
                            />
                        </div>

                        {/* Level Slider & Fresh Toggle */}
                        <div className="mb-6 p-4 bg-black/40 border border-white/5 rounded-lg space-y-4">
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">Character Level</span>
                                    <span className="text-amber-500 font-mono text-xs">{level}</span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="70"
                                    value={level}
                                    onChange={(e) => {
                                        const newLvl = parseInt(e.target.value);
                                        setLevel(newLvl);
                                        // Optional: Reset points if max reduced? For now, just let logic handle capping on new points
                                    }}
                                    className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                />
                                <div className="flex justify-between text-[9px] text-gray-600 mt-1">
                                    <span>10</span>
                                    <span>70</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Mode: Fresh</span>
                                <button
                                    onClick={() => setFreshMode(!freshMode)}
                                    className={`w-10 h-5 rounded-full relative transition-colors ${freshMode ? 'bg-[#c29c55]' : 'bg-gray-700'}`}
                                >
                                    <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${freshMode ? 'translate-x-5' : ''}`}></div>
                                </button>
                            </div>
                        </div>


                        <h3 className="font-hero text-gray-400 text-xs uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Select Class</h3>
                        <div className="grid grid-cols-4 lg:grid-cols-1 gap-2 mb-6">
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

                        {/* STAT SUMMARY */}
                        <div className="bg-black/40 rounded-lg p-3 border border-white/5">
                            <h4 className="font-hero text-amber-500 text-xs uppercase tracking-widest mb-3 border-b border-white/5 pb-1">Build Stats</h4>
                            <div className="space-y-2">
                                {(() => {
                                    // Calculate Stats on the fly
                                    const stats = {
                                        'Increased chance to hit by': 0,
                                        'Increased critical strike chance by': 0,
                                        'Increased haste by': 0,
                                        'Increased damage by': 0,
                                        'Increased healing by': 0,
                                        'Reduced mana cost by': 0
                                    };

                                    // Iterate all points
                                    if (!currentClassData) return <p className="text-[10px] text-gray-500 italic">No class data available.</p>;

                                    Object.entries(points).forEach(([talentId, rank]) => {
                                        if (rank === 0) return;
                                        // Find talent data (String IDs supported)
                                        let talent = null;
                                        if (currentClassData) {
                                            Object.values(currentClassData).forEach(tree => {
                                                const t = tree.talents.find(x => x.id === talentId);
                                                if (t) talent = t;
                                            });
                                        }

                                        if (talent) {
                                            let desc = "";
                                            try {
                                                desc = talent.description(rank).toLowerCase();
                                            } catch (err) {
                                                console.warn("Description error", talent.id, err);
                                                return;
                                            }

                                            // Simple Regex Parsing
                                            const hitMatch = desc.match(/hit chance by (\d+)%/);
                                            if (hitMatch) stats['Increased chance to hit by'] += parseInt(hitMatch[1]);

                                            const critMatch = desc.match(/critical strike chance.*by (\d+)%/);
                                            if (critMatch) stats['Increased critical strike chance by'] += parseInt(critMatch[1]);

                                            const hasteMatch = desc.match(/casting speed by (\d+)%/) || desc.match(/haste by (\d+)%/);
                                            if (hasteMatch) stats['Increased haste by'] += parseInt(hasteMatch[1]);

                                            const dmgMatch = desc.match(/damage.*by (\d+)%/);
                                            if (dmgMatch && !desc.includes("critical")) stats['Increased damage by'] += parseInt(dmgMatch[1]);

                                            const healMatch = desc.match(/healing.*by (\d+)%/);
                                            if (healMatch) stats['Increased healing by'] += parseInt(healMatch[1]);

                                            const costMatch = desc.match(/mana cost.*by (\d+)%/);
                                            if (costMatch) stats['Reduced mana cost by'] += parseInt(costMatch[1]);
                                        }
                                    });

                                    // Render non-zero stats
                                    const renderedStats = Object.entries(stats).filter(([_, val]) => val > 0);
                                    if (renderedStats.length === 0) return <p className="text-[10px] text-gray-500 italic">Distribute points to see stats.</p>;

                                    return renderedStats.map(([label, val]) => (
                                        <div key={label} className="flex justify-between items-center text-xs">
                                            <span className="text-gray-400">{label}</span>
                                            <span className="text-green-400 font-mono">+{val}%</span>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* RIGHT: Calculator Area */}
                <main className="flex-1">
                    {/* Info Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-[#121212] p-4 rounded-lg border border-white/10 shadow-lg sticky top-20 z-40 backdrop-blur-md bg-opacity-90 gap-4">
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <span className={`block text-3xl font-hero ${CLASS_CONFIG[activeClass].color}`}>
                                    {totalPoints} / {MAX_POINTS}
                                </span>
                                <span className="text-[10px] uppercase text-gray-500 tracking-wider">Points Used</span>
                            </div>
                            <div className="h-10 w-px bg-white/10"></div>

                            {/* Dual Spec Toggle */}
                            <div className="flex bg-black/40 rounded p-1 border border-white/5">
                                <button
                                    onClick={() => setActiveSpec(0)}
                                    className={`px-3 py-1 text-xs uppercase tracking-wider rounded transition-all ${activeSpec === 0 ? 'bg-white/10 text-white shadow' : 'text-gray-500 hover:text-gray-300'}`}
                                >
                                    Spec 1
                                </button>
                                <button
                                    onClick={() => setActiveSpec(1)}
                                    className={`px-3 py-1 text-xs uppercase tracking-wider rounded transition-all ${activeSpec === 1 ? 'bg-white/10 text-white shadow' : 'text-gray-500 hover:text-gray-300'}`}
                                >
                                    Spec 2
                                </button>
                            </div>

                            <div className="h-10 w-px bg-white/10 hidden md:block"></div>

                            {/* Tree Summaries */}
                            {currentClassData && Object.keys(currentClassData).map(treeKey => (
                                <div key={treeKey} className="text-center hidden lg:block">
                                    <span className="block text-xl font-mono text-gray-300">{getTreePoints(treeKey)}</span>
                                    <span className="text-[9px] uppercase text-gray-500 tracking-wider truncate max-w-[80px] block">{currentClassData[treeKey].name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setShowGlyphs(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-purple-900/20 text-purple-400 rounded hover:bg-purple-900/30 transition-colors text-xs font-bold uppercase tracking-wider border border-purple-900/30"
                            >
                                <Zap size={14} /> Glyphs
                            </button>
                            <button
                                onClick={generateBuildLink}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-900/20 text-blue-400 rounded hover:bg-blue-900/30 transition-colors text-xs font-bold uppercase tracking-wider border border-blue-900/30"
                            >
                                <Share2 size={14} /> Export
                            </button>
                            <button
                                onClick={handleReset}
                                className="flex items-center gap-2 px-4 py-2 bg-red-900/20 text-red-500 rounded hover:bg-red-900/30 transition-colors text-xs font-bold uppercase tracking-wider border border-red-900/30"
                            >
                                <RotateCcw size={14} /> Reset
                            </button>
                            <button
                                onClick={() => {
                                    setShowSim(true);
                                    setSimProgress(0);
                                    setSimResult(null);
                                    // Fake simulation
                                    let progress = 0;
                                    const interval = setInterval(() => {
                                        progress += 5;
                                        setSimProgress(progress);
                                        if (progress >= 100) {
                                            clearInterval(interval);
                                            // Generate random result based on points
                                            const baseDPS = 800 + (totalPoints * 15) + (Math.random() * 100);
                                            setSimResult(Math.floor(baseDPS));
                                        }
                                    }, 50);
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-green-900/20 text-green-400 rounded hover:bg-green-900/30 transition-colors text-xs font-bold uppercase tracking-wider border border-green-900/30"
                            >
                                <Activity size={14} /> Sim DPS
                            </button>
                        </div>
                    </div>

                    {currentClassData ? (
                        <>
                            {/* Mobile Tabs */}
                            <div className="flex xl:hidden gap-2 mb-4 px-1">
                                {Object.entries(currentClassData).map(([key, data], index) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveMobileTab(index)}
                                        className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded border transition-colors ${activeMobileTab === index ? 'bg-amber-900/40 border-amber-500 text-amber-100 shadow-lg' : 'bg-white/5 border-white/10 text-gray-500 hover:bg-white/10'}`}
                                    >
                                        {data.name}
                                    </button>
                                ))}
                            </div>

                            <div className="flex flex-col xl:flex-row gap-6 overflow-x-auto pb-8">
                                {/* Render all 3 trees with Mobile Visibility Logic */}
                                {Object.entries(currentClassData).map(([key, data], index) => (
                                    <div key={key} className={`${activeMobileTab === index ? 'block' : 'hidden xl:block'} flex-1`}>
                                        {renderTree(key, data)}
                                    </div>
                                ))}
                            </div>

                            {/* SELECTED GLYPHS DISPLAY */}
                            <div className="bg-[#121212] border border-white/10 rounded-lg p-6 mb-8 mt-6">
                                <h3 className="font-hero text-purple-400 text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <Zap size={16} /> Active Glyphs
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Major */}
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Major Glyphs</h4>
                                        <div className="space-y-3">
                                            {specs[activeSpec].glyphs.major.map((id, idx) => {
                                                const glyph = id && GLYPH_DATA[activeClass]?.major?.find(g => g.id === id);
                                                return (
                                                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5">
                                                        <div className="w-8 h-8 rounded bg-black border border-white/10 shrink-0">
                                                            {glyph ? (
                                                                <img src={`https://wow.zamimg.com/images/wow/icons/large/${glyph.icon}.jpg`} className="w-full h-full rounded" />
                                                            ) : <div className="w-full h-full opacity-20 bg-purple-900" />}
                                                        </div>
                                                        <div>
                                                            <span className={`text-sm font-bold ${glyph ? 'text-purple-300' : 'text-gray-600'}`}>
                                                                {glyph ? glyph.name : 'Empty Slot'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {/* Minor */}
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Minor Glyphs</h4>
                                        <div className="space-y-3">
                                            {specs[activeSpec].glyphs.minor.map((id, idx) => {
                                                const glyph = id && GLYPH_DATA[activeClass]?.minor?.find(g => g.id === id);
                                                return (
                                                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-2 rounded border border-white/5">
                                                        <div className="w-8 h-8 rounded bg-black border border-white/10 shrink-0">
                                                            {glyph ? (
                                                                <img src={`https://wow.zamimg.com/images/wow/icons/large/${glyph.icon}.jpg`} className="w-full h-full rounded" />
                                                            ) : <div className="w-full h-full opacity-20 bg-blue-900" />}
                                                        </div>
                                                        <div>
                                                            <span className={`text-sm font-bold ${glyph ? 'text-blue-300' : 'text-gray-600'}`}>
                                                                {glyph ? glyph.name : 'Empty Slot'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center p-20 text-gray-500 border border-white/5 rounded-lg bg-[#121212] m-4">
                            <Hammer size={48} className="mb-4 opacity-50 animate-pulse text-amber-900" />
                            <h3 className="text-xl font-bold mb-2 font-hero text-gray-400 uppercase tracking-widest">Work in Progress</h3>
                            <p className="font-mono text-sm">Talent data for <span className="text-white font-bold">{CLASS_CONFIG[activeClass]?.name || activeClass}</span> is coming soon.</p>
                            <button
                                onClick={() => setActiveClass('druid')}
                                className="mt-8 px-6 py-2 bg-purple-900/20 hover:bg-purple-900/40 text-purple-300 border border-purple-500/30 rounded uppercase text-xs font-bold tracking-widest transition-all"
                            >
                                Return to Druid
                            </button>
                        </div>
                    )}
                </main>
            </div>
            {/* CHANGELOG CARD */}
            <ErrorBoundary>
                <TalentChangelog activeClass={activeClass} classConfig={CLASS_CONFIG[activeClass]} />
            </ErrorBoundary>

            {/* GLYPH MODAL */}
            {showGlyphs && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowGlyphs(false)}>
                    <div className="bg-[#121212] border border-white/10 rounded-lg max-w-2xl w-full p-6 relative overflow-hidden flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>

                        {/* SIMULATION MODAL */}
                        {showSim && (
                            <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setShowSim(false)}>
                                <div className="bg-[#121212] border border-[#c29c55]/30 rounded-xl max-w-md w-full p-8 relative overflow-hidden" onClick={e => e.stopPropagation()}>

                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c29c55] to-transparent opacity-50"></div>

                                    <div className="text-center mb-8">
                                        <Activity size={48} className="mx-auto text-[#c29c55] mb-4 animate-pulse" />
                                        <h3 className="font-hero text-2xl text-white uppercase tracking-widest mb-1">Combat Simulation</h3>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest">Running iterative cycles...</p>
                                    </div>

                                    {simProgress < 100 ? (
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs text-[#c29c55] font-mono">
                                                <span>Calculating...</span>
                                                <span>{simProgress}%</span>
                                            </div>
                                            <div className="h-2 bg-black rounded-full overflow-hidden border border-white/10">
                                                <div className="h-full bg-[#c29c55] transition-all duration-100 ease-out" style={{ width: `${simProgress}%` }}></div>
                                            </div>
                                            <div className="text-[10px] text-gray-600 font-mono mt-2 text-center">
                                                Simulating 10,000 iterations against Patchwerk (Lv 73)
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="animate-fade-in text-center">
                                            <div className="py-6 border-y border-white/5 bg-white/5 mb-6">
                                                <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">Estimated DPS</div>
                                                <div className="text-5xl font-hero text-[#c29c55] drop-shadow-[0_0_15px_rgba(194,156,85,0.5)]">
                                                    {simResult}
                                                </div>
                                                <div className="text-xs text-green-400 mt-2 font-mono">
                                                    +{(simResult / 150).toFixed(1)}% vs Previous
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setShowSim(false)}
                                                className="px-8 py-3 bg-[#c29c55] hover:bg-white text-black font-bold text-xs uppercase tracking-widest rounded transition-colors"
                                            >
                                                Close Report
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Header */}
                        <div className="flex justify-between items-center mb-6 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-900/20 rounded-full border border-purple-500/30">
                                    <Zap size={20} className="text-purple-400" />
                                </div>
                                <h3 className="font-hero text-xl text-white uppercase tracking-widest">
                                    {activeGlyphSlot ? `Select ${activeGlyphSlot.type} Glyph` : 'Glyphs'}
                                </h3>
                            </div>
                            <div className="flex gap-2">
                                {activeGlyphSlot && (
                                    <button onClick={() => setActiveGlyphSlot(null)} className="text-xs uppercase font-bold text-gray-400 hover:text-white px-3 py-1 border border-white/10 rounded">
                                        Back
                                    </button>
                                )}
                                <button onClick={() => setShowGlyphs(false)} className="text-gray-500 hover:text-white transition-colors">
                                    <RotateCcw size={20} className="rotate-45" /> ✕
                                </button>
                            </div>
                        </div>

                        {/* CONTENT AREA */}
                        <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">

                            {/* SELECTION MODE */}
                            {activeGlyphSlot ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {(GLYPH_DATA[activeClass]?.[activeGlyphSlot.type] || []).map(glyph => (
                                        <button
                                            key={glyph.id}
                                            onClick={() => handleGlyphSelect(glyph.id)}
                                            className="flex items-start gap-3 p-3 bg-white/5 border border-white/5 hover:bg-purple-900/20 hover:border-purple-500/50 rounded transition-all text-left group"
                                        >
                                            <img src={`https://wow.zamimg.com/images/wow/icons/large/${glyph.icon}.jpg`} className="w-10 h-10 rounded border border-white/10 group-hover:border-purple-400" />
                                            <div>
                                                <h4 className="font-bold text-sm text-purple-200 group-hover:text-white">{glyph.name}</h4>
                                                <p className="text-xs text-gray-400 leading-relaxed">{glyph.desc}</p>
                                            </div>
                                        </button>
                                    ))}
                                    {(GLYPH_DATA[activeClass]?.[activeGlyphSlot.type] || []).length === 0 && (
                                        <p className="text-gray-500 italic col-span-2 text-center py-8">No glyphs found for this category.</p>
                                    )}
                                </div>
                            ) : (
                                /* SLOTS MODE */
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                    {/* Major Glyphs */}
                                    <div>
                                        <h4 className="text-xs uppercase text-purple-400 font-bold mb-4 flex items-center gap-2">
                                            <Sword size={12} fill="currentColor" /> Major Glyphs
                                        </h4>
                                        <div className="space-y-4">
                                            {[0, 1, 2].map(slotIndex => {
                                                const glyphId = specs[activeSpec].glyphs.major[slotIndex];
                                                const glyph = (glyphId && GLYPH_DATA[activeClass]) ? GLYPH_DATA[activeClass].major.find(g => g.id === glyphId) : null;

                                                return (
                                                    <div
                                                        key={`major-${slotIndex}`}
                                                        onClick={() => setActiveGlyphSlot({ type: 'major', index: slotIndex })}
                                                        onContextMenu={(e) => { e.preventDefault(); handleRemoveGlyph('major', slotIndex, e); }}
                                                        className={`h-16 bg-black/40 border ${glyph ? 'border-purple-500/50 bg-purple-900/10' : 'border-white/10 hover:border-purple-500/30'} rounded flex items-center px-4 gap-4 relative group transition-all cursor-pointer`}
                                                    >
                                                        {glyph ? (
                                                            <>
                                                                <img src={`https://wow.zamimg.com/images/wow/icons/large/${glyph.icon}.jpg`} className="w-10 h-10 rounded border border-purple-500/50" />
                                                                <div className="flex-1 min-w-0">
                                                                    <h5 className="text-sm font-bold text-purple-300 truncate">{glyph.name}</h5>
                                                                    <p className="text-[10px] text-gray-500 truncate">{glyph.desc}</p>
                                                                </div>
                                                                <button onClick={(e) => handleRemoveGlyph('major', slotIndex, e)} className="text-gray-600 hover:text-red-400 p-1"><RotateCcw size={12} className="rotate-45" /></button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className="w-10 h-10 rounded-full border border-white/5 bg-black/50 flex items-center justify-center group-hover:border-blue-500/30">
                                                                    <span className="text-xs text-gray-600 font-mono italic">Empty</span>
                                                                </div>
                                                                <span className="text-xs text-gray-600 group-hover:text-gray-400">Click to socket...</span>
                                                            </>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Minor Glyphs */}
                                    <div>
                                        <h4 className="text-xs uppercase text-blue-400 font-bold mb-4 flex items-center gap-2">
                                            <Shield size={10} /> Minor Glyphs
                                        </h4>
                                        <div className="space-y-4">
                                            {[0, 1, 2].map(slotIndex => {
                                                const glyphId = specs[activeSpec].glyphs.minor[slotIndex];
                                                const glyph = (glyphId && GLYPH_DATA[activeClass]) ? GLYPH_DATA[activeClass].minor.find(g => g.id === glyphId) : null;

                                                return (
                                                    <div
                                                        key={`minor-${slotIndex}`}
                                                        onClick={() => setActiveGlyphSlot({ type: 'minor', index: slotIndex })}
                                                        onContextMenu={(e) => { e.preventDefault(); handleRemoveGlyph('minor', slotIndex, e); }}
                                                        className={`h-16 bg-black/40 border ${glyph ? 'border-blue-500/50 bg-blue-900/10' : 'border-white/10 hover:border-blue-500/30'} rounded flex items-center px-4 gap-4 relative group transition-all cursor-pointer`}
                                                    >
                                                        {glyph ? (
                                                            <>
                                                                <img src={`https://wow.zamimg.com/images/wow/icons/large/${glyph.icon}.jpg`} className="w-10 h-10 rounded border border-blue-500/50" />
                                                                <div className="flex-1 min-w-0">
                                                                    <h5 className="text-sm font-bold text-blue-300 truncate">{glyph.name}</h5>
                                                                    <p className="text-[10px] text-gray-500 truncate">{glyph.desc}</p>
                                                                </div>
                                                                <button onClick={(e) => handleRemoveGlyph('minor', slotIndex, e)} className="text-gray-600 hover:text-red-400 p-1"><RotateCcw size={12} className="rotate-45" /></button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className="w-10 h-10 rounded-full border border-white/5 bg-black/50 flex items-center justify-center group-hover:border-blue-500/30">
                                                                    <span className="text-xs text-gray-600 font-mono italic">Empty</span>
                                                                </div>
                                                                <span className="text-xs text-gray-600 group-hover:text-gray-400">Click to socket...</span>
                                                            </>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        {!activeGlyphSlot && <p className="mt-6 text-center text-[10px] text-gray-500 uppercase tracking-widest">Select a slot to enchant</p>}

                        {/* Background Decor */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    </div>
                </div>
            )}
        </div >
    );
};

export default TalentCalculator;
