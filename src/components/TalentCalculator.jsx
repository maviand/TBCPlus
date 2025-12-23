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
    const [activeSpec, setActiveSpec] = useState('balance');
    const [points, setPoints] = useState({}); // { talentId: rank }
    const [totalPoints, setTotalPoints] = useState(0);
    const MAX_POINTS = 61;

    // -- CLASS DATA (Visuals only for now, except Druid) --
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

    // Switch spec when class changes
    useEffect(() => {
        if (activeClass === 'druid') {
            setActiveSpec('balance');
        }
    }, [activeClass]);

    // Get current tree data
    const currentTree = activeClass === 'druid' ? druidTalents[activeSpec] : null;

    // -- HANDLERS --
    const handleAddPoint = (talent, e) => {
        e.preventDefault();
        if (totalPoints >= MAX_POINTS) return;
        const currentRank = points[talent.id] || 0;
        if (currentRank < talent.maxPoints) {
            // Check requirements (simple check: total points in tree, logic omitted for prototype simplicity unless requested)
            setPoints({ ...points, [talent.id]: currentRank + 1 });
            setTotalPoints(totalPoints + 1);
        }
    };

    const handleRemovePoint = (talent, e) => {
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

    // -- RENDER HELPERS --
    const renderTalent = (talent) => {
        const rank = points[talent.id] || 0;
        const isMaxed = rank === talent.maxPoints;
        const hasPoints = rank > 0;

        // Icon URL handling (fallback to generic if missing)
        // Note: Assuming we might use a generic wow icon service or local assets.
        // For now, using a placeholder colored div if no icon url is "real" (implied by short string)
        const iconUrl = talent.icon.startsWith('http')
            ? talent.icon
            : `https://wow.zamimg.com/images/wow/icons/large/${talent.icon}.jpg`;

        return (
            <div
                key={talent.id}
                className="relative group cursor-pointer"
                style={{
                    gridColumn: talent.col + 1,
                    gridRow: talent.row + 1
                }}
                onClick={(e) => handleAddPoint(talent, e)}
                onContextMenu={(e) => handleRemovePoint(talent, e)}
            >
                {/* Talent Box */}
                <div className={`
          relative w-12 h-12 rounded border-2 transition-all
          ${isMaxed ? 'border-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]' :
                        hasPoints ? 'border-green-400' : 'border-gray-600 hover:border-gray-400'}
          bg-black
        `}>
                    <img src={iconUrl} alt={talent.name} className={`w-full h-full object-cover ${rank === 0 ? 'grayscale opacity-70' : ''}`} />

                    {/* Rank Counter */}
                    <div className="absolute -bottom-2 -right-2 bg-black border border-white/20 text-[10px] px-1 rounded text-white font-bold">
                        {rank}/{talent.maxPoints}
                    </div>
                </div>

                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 bg-slate-900 border border-white/20 p-3 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                    <h4 className="font-bold text-amber-400">{talent.name}</h4>
                    <p className="text-xs text-gray-400 mb-2">Rank {rank}/{talent.maxPoints}</p>
                    <p className="text-xs text-gray-200 leading-snug">
                        {talent.description(rank === 0 ? 1 : rank)}
                    </p>
                    {rank < talent.maxPoints && (
                        <p className="text-xs text-green-400 mt-2">Next Rank: {talent.description(rank + 1)}</p>
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

            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

                {/* LEFT: Class Selector */}
                <aside className="lg:w-64 flex-shrink-0">
                    <div className="bg-[#121212] border border-white/10 rounded-lg p-4 sticky top-24">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Select Class</h3>
                        <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
                            {Object.entries(classes).map(([key, cls]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveClass(key)}
                                    className={`flex items-center gap-3 p-2 rounded transition-colors ${activeClass === key
                                        ? `bg-white/10 text-white ${cls.border} border-l-2`
                                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                        }`}
                                >
                                    {cls.icon}
                                    <span className="font-medium hidden lg:block">{cls.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* RIGHT: Calculator Area */}
                <main className="flex-1">
                    {activeClass !== 'druid' ? (
                        <div className="h-96 flex items-center justify-center bg-[#121212] border border-white/10 rounded-lg">
                            <div className="text-center text-gray-500">
                                <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                <h2 className="text-2xl font-hero text-gray-400">Work in Progress</h2>
                                <p>The {classes[activeClass].name} talent tree is being reforged.</p>
                                <p className="text-sm mt-2">Check back soon for the TBC+ update.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-fade-in">
                            {/* Header: Points & Reset */}
                            <div className="flex justify-between items-center mb-6 bg-[#121212] p-4 rounded-lg border border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="text-center">
                                        <span className="block text-2xl font-mono text-green-400">{MAX_POINTS - totalPoints}</span>
                                        <span className="text-[10px] uppercase text-gray-500 tracking-wider">Points Left</span>
                                    </div>
                                    <div className="h-8 w-px bg-white/10"></div>
                                    <div className="text-sm text-gray-400">
                                        Level 70 Required
                                    </div>
                                </div>
                                <button
                                    onClick={handleReset}
                                    className="flex items-center gap-2 px-4 py-2 bg-red-900/20 text-red-400 rounded hover:bg-red-900/40 transition-colors text-sm"
                                >
                                    <RotateCcw size={14} /> Reset Build
                                </button>
                            </div>

                            {/* Spec Tabs */}
                            <div className="flex gap-2 mb-6 border-b border-white/10">
                                {['balance', 'feral', 'restoration'].map(spec => (
                                    <button
                                        key={spec}
                                        onClick={() => setActiveSpec(spec)}
                                        className={`
                                    px-6 py-3 font-hero tracking-wider uppercase text-sm border-b-2 transition-all
                                    ${activeSpec === spec
                                                ? 'border-orange-500 text-white bg-white/5'
                                                : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5'}
                                `}
                                    >
                                        <div className="flex items-center gap-2">
                                            <img src={druidTalents[spec].icon} className="w-5 h-5 rounded-sm" alt="" />
                                            {druidTalents[spec].name}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Talent Grid */}
                            <div className="bg-[#121212] border border-white/10 rounded-lg p-8 relative overflow-hidden min-h-[600px] select-none">
                                {/* Background Art */}
                                <div
                                    className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center grayscale mix-blend-overlay"
                                    style={{ backgroundImage: `url(${druidTalents[activeSpec].background})` }}
                                ></div>

                                {/* Grid Layer */}
                                <div className="relative z-10 grid grid-cols-4 gap-x-12 gap-y-8 max-w-2xl mx-auto">
                                    {druidTalents[activeSpec].talents.map(talent => renderTalent(talent))}
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default TalentCalculator;
