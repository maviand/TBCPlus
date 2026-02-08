import React, { useState, useRef, useEffect } from 'react';
import { Home, Hammer, Crown, Feather, Key, Box, Star, Anchor, ArrowRight, Lamp, Trophy, BedDouble, Trees, Map, Shield, Flame, Move, Save, Trash2, Users, Lock, Unlock, Eye } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheHearthAndHome = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // STATE: Housing Permissions (UI #15)
    const [permissions, setPermissions] = useState({
        public: false,
        guild: true,
        friends: true,
        party: true
    });

    // STATE: Blueprint Editor (Housing #11)
    const [furniture, setFurniture] = useState([
        { id: 1, type: 'bed', x: 20, y: 20, rotation: 0 },
        { id: 2, type: 'chest', x: 60, y: 20, rotation: 0 },
        { id: 3, type: 'rug', x: 40, y: 50, rotation: 0 }
    ]);
    const [selectedFurniture, setSelectedFurniture] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const editorRef = useRef(null);

    // Available Furniture Palette
    const furniturePalette = [
        { type: 'bed', label: 'Royal Bed', icon: <BedDouble size={20} />, width: 60, height: 80, color: 'bg-blue-900' },
        { type: 'chest', label: 'Ironbound Chest', icon: <Box size={20} />, width: 40, height: 30, color: 'bg-amber-900' },
        { type: 'rug', label: 'Dalaran Rug', icon: <Map size={20} />, width: 80, height: 80, color: 'bg-purple-900' },
        { type: 'trophy', label: 'Onyxia Head', icon: <Trophy size={20} />, width: 30, height: 30, color: 'bg-red-900' },
        { type: 'lamp', label: 'Mana Lamp', icon: <Lamp size={20} />, width: 20, height: 20, color: 'bg-blue-400' }
    ];

    const handleDragStart = (e, id) => {
        if (!editMode) return;
        setSelectedFurniture(id);
    };

    const handleDrop = (e) => {
        if (!editMode || !selectedFurniture) return;
        const rect = editorRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setFurniture(prev => prev.map(item =>
            item.id === selectedFurniture ? { ...item, x, y } : item
        ));
        setSelectedFurniture(null);
    };

    const handleDragOver = (e) => e.preventDefault();

    const addFurniture = (type) => {
        const newId = Math.max(...furniture.map(f => f.id), 0) + 1;
        setFurniture([...furniture, { id: newId, type, x: 50, y: 50, rotation: 0 }]);
    };

    const removeFurniture = (id) => {
        setFurniture(furniture.filter(f => f.id !== id));
    };

    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i} className="mb-4 text-stone-400 leading-relaxed">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-amber-500 font-normal">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    return (
        <div className="min-h-screen bg-[#0c0a09] text-stone-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
            <UnifiedHeader
                icon="https://i.imgur.com/pRy2QWZ.jpeg"
                background={`/images/header_housing.png`}
                section="Player Housing"
                sub="Your Personal Slice of Azeroth"
                title="Hearth & Home"
                quote="The war against the Legion is long. Every hero deserves a rest."
            />

            <div className="container mx-auto px-4 py-12">
                {/* Navigation */}
                <div className="flex justify-center gap-8 mb-16 border-b border-stone-800 pb-4">
                    {['overview', 'districts', 'blueprint'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 px-4 font-hero uppercase tracking-widest text-sm transition-all ${activeTab === tab
                                ? 'text-amber-500 border-b-2 border-amber-500'
                                : 'text-stone-600 hover:text-stone-400'}`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto animate-fade-in">

                    {/* OVERVIEW TAB */}
                    {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="font-hero text-4xl text-amber-500">A Place to Call Your Own</h2>
                                <div className="text-lg text-stone-300 leading-relaxed font-light">
                                    {formatText(`In TBC+, housing is not just a cosmetic instance; it is integrated into the core progression loop to prevent "garrison isolation."
                                    
                                    Your home is where you display your **Trophies of War**, craft at your **Private Forge**, and gain the **"Well Rested+"** efficiency buff.`)}
                                </div>

                                {/* Permissions Widget */}
                                <div className="bg-[#151515] border border-stone-800 rounded-lg p-6 mt-8">
                                    <h3 className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                                        <Key size={14} /> Access Control
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { id: 'public', label: 'Public', icon: <Globe size={16} /> },
                                            { id: 'guild', label: 'Guild Members', icon: <Shield size={16} /> },
                                            { id: 'friends', label: 'Friends List', icon: <Users size={16} /> },
                                            { id: 'party', label: 'Party/Raid', icon: <Crown size={16} /> }
                                        ].map(perm => (
                                            <button
                                                key={perm.id}
                                                onClick={() => setPermissions(prev => ({ ...prev, [perm.id]: !prev[perm.id] }))}
                                                className={`flex items-center justify-between p-3 rounded border transition-all ${permissions[perm.id]
                                                    ? 'bg-green-900/20 border-green-500/50 text-green-400'
                                                    : 'bg-black/40 border-stone-800 text-stone-600'}`}
                                            >
                                                <div className="flex items-center gap-2 font-bold text-sm">
                                                    {perm.icon} {perm.label}
                                                </div>
                                                {permissions[perm.id] ? <Unlock size={14} /> : <Lock size={14} />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                {/* Rested+ Buff */}
                                <div className="relative p-6 border border-stone-800 rounded-lg overflow-hidden group hover:border-amber-500/50 transition-all h-32 flex items-center">
                                    <div className="absolute inset-0 bg-[url('https://i.imgur.com/2EKhoRz.jpeg')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                                    <div className="relative z-10 flex items-center gap-4">
                                        <div className="bg-stone-800/80 p-2 rounded backdrop-blur-sm"><BedDouble className="text-amber-500 w-6 h-6" /></div>
                                        <div>
                                            <h4 className="font-hero text-white text-sm mb-1">Rested+ Buff</h4>
                                            <p className="text-xs text-stone-300">Generate Rested XP 200% faster. Maintain "Inspired" state (+5% Reputation gain) for 1 hour after leaving home.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* The Vault */}
                                <div className="relative p-6 border border-stone-800 rounded-lg overflow-hidden group hover:border-amber-500/50 transition-all h-32 flex items-center">
                                    <div className="absolute inset-0 bg-[url('https://i.imgur.com/rxKRgK9.jpeg')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                                    <div className="relative z-10 flex items-center gap-4">
                                        <div className="bg-stone-800/80 p-2 rounded backdrop-blur-sm"><Box className="text-amber-500 w-6 h-6" /></div>
                                        <div>
                                            <h4 className="font-hero text-white text-sm mb-1">The Vault</h4>
                                            <p className="text-xs text-stone-300">100 slots of account-wide storage. Share reagents and gold between alts seamlessly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* DISTRICTS TAB */}
                    {activeTab === 'districts' && (
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { name: "Silvermoon Spire", loc: "Silvermoon City", img: "https://i.imgur.com/MbU3URE.jpeg", biome: "Urban / Magical" },
                                    { name: "The Iron District", loc: "Ironforge", img: "https://i.imgur.com/z3Dlsh2.jpeg", biome: "Subterranean" },
                                    { name: "Spirit Bluffs", loc: "Thunder Bluff", img: "https://i.imgur.com/nIzPJK1.jpeg", biome: "Plains / Tribal" },
                                    { name: "Eco-Dome Beta", loc: "Netherstorm", img: "https://i.imgur.com/ezIbccq.jpeg", biome: "Sci-Fi / Nature", special: "Remote Plot" },
                                    { name: "Nagrand Villa", loc: "Nagrand", img: "https://i.imgur.com/aWtMAK4.jpeg", biome: "Floating Island", special: "Remote Plot" },
                                    { name: "Shadowmoon Bunker", loc: "Shadowmoon Valley", img: "https://i.imgur.com/pang6cl.jpeg", biome: "Wasteland / Military", special: "Remote Plot" }
                                ].map((house, i) => (
                                    <div key={i} className="group relative rounded-xl overflow-hidden border border-stone-800 hover:border-amber-500 transition-all h-80">
                                        <img src={house.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={house.name} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-1">{house.loc}</div>
                                            <h4 className="font-hero text-xl text-white mb-2">{house.name}</h4>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-gray-400">{house.biome}</span>
                                                {house.special && <span className="text-[10px] bg-amber-900/80 px-2 py-0.5 rounded text-amber-200 border border-amber-500/50">{house.special}</span>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* BLUEPRINT TAB (NEW INTERACTIVE) */}
                    {activeTab === 'blueprint' && (
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Editor Canvas */}
                            <div className="flex-1 bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl relative border border-stone-800">
                                <div className="absolute top-4 right-4 z-20 flex gap-2">
                                    <button
                                        onClick={() => setEditMode(!editMode)}
                                        className={`px-4 py-2 rounded font-bold text-sm flex items-center gap-2 transition-all ${editMode ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'bg-black/60 text-white border border-stone-700'}`}
                                    >
                                        {editMode ? <Save size={16} /> : <Move size={16} />}
                                        {editMode ? 'Save Layout' : 'Edit Mode'}
                                    </button>
                                </div>

                                <div
                                    ref={editorRef}
                                    className="w-full aspect-[4/3] bg-[url('https://i.imgur.com/u5rDQIs.jpeg')] bg-cover bg-center relative cursor-crosshair"
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                >
                                    <div className="absolute inset-0 bg-[#0c0a09]/40 grid-pattern pointer-events-none"></div>

                                    {furniture.map(item => {
                                        const proto = furniturePalette.find(p => p.type === item.type) || furniturePalette[0];
                                        return (
                                            <div
                                                key={item.id}
                                                draggable={editMode}
                                                onDragStart={(e) => handleDragStart(e, item.id)}
                                                className={`absolute flex items-center justify-center shadow-lg transition-transform hover:scale-105 ${proto.color} ${editMode ? 'cursor-grab active:cursor-grabbing hover:ring-2 ring-white ' : ''}`}
                                                style={{
                                                    left: `${item.x}%`,
                                                    top: `${item.y}%`,
                                                    width: `${proto.width}px`,
                                                    height: `${proto.height}px`,
                                                    transform: 'translate(-50%, -50%)',
                                                    borderRadius: item.type === 'rug' ? '50%' : '4px'
                                                }}
                                            >
                                                <div className="text-white/80 drop-shadow-md">{proto.icon}</div>
                                                {editMode && (
                                                    <button
                                                        onClick={() => removeFurniture(item.id)}
                                                        className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100"
                                                    >
                                                        <Trash2 size={10} />
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="bg-[#111] p-4 text-xs text-stone-500 flex justify-between items-center border-t border-stone-800">
                                    <span>Floor Plan: Stormwind Estate (Tier 2)</span>
                                    <span>{furniture.length} / 50 Items</span>
                                </div>
                            </div>

                            {/* Sidebar Palette */}
                            {editMode && (
                                <div className="w-full lg:w-64 bg-[#151515] border border-stone-800 rounded-xl p-4 animate-in slide-in-from-right">
                                    <h3 className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                                        <Box size={14} /> Furniture Storage
                                    </h3>
                                    <div className="space-y-3">
                                        {furniturePalette.map((item, i) => (
                                            <button
                                                key={i}
                                                onClick={() => addFurniture(item.type)}
                                                className="w-full flex items-center gap-3 p-3 bg-black/40 border border-stone-800 rounded hover:bg-stone-800 hover:border-amber-500/30 transition-all group"
                                            >
                                                <div className={`w-8 h-8 ${item.color} rounded flex items-center justify-center text-white/80`}>{item.icon}</div>
                                                <div className="text-left">
                                                    <div className="text-sm font-bold text-gray-300 group-hover:text-amber-500">{item.label}</div>
                                                    <div className="text-[10px] text-gray-600">Common</div>
                                                </div>
                                                <div className="ml-auto opacity-0 group-hover:opacity-100 text-amber-500"><ArrowRight size={14} /></div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-8 pt-4 border-t border-stone-800">
                                        <p className="text-[10px] text-stone-500 text-center">
                                            Visit the <strong>Consortium Architect</strong> in Area 52 to buy more blueprints.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>
            <style>{`
                .grid-pattern {
                    background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
            `}</style>
        </div>
    );
};

export default TheHearthAndHome;
