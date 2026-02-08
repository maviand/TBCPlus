import React, { useState } from 'react';
import {
    Layout,
    Monitor,
    Eye,
    MousePointer,
    Grid,
    Maximize,
    Sliders,
    Move,
    Activity,
    MessageSquare,

    Mic,
    BookOpen,
    MapPin,
    Headphones,
    Sword,
    ArrowRight
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const InterfaceShowcase = ({ setPage, setSelectedClass, setSelectedRace }) => {
    const [themeMode, setThemeMode] = useState('race'); // 'race' or 'spec'
    const [selectedTheme, setSelectedTheme] = useState('Night Elf');

    const themes = {
        race: {
            'Blood Elf': 'https://i.imgur.com/fJWe1lc.jpeg',
            'Broken': 'https://i.imgur.com/rNrGaOW.jpeg',
            'Draenei': 'https://i.imgur.com/XmWcezF.jpeg',
            'Dwarf': 'https://i.imgur.com/uuQ18MM.jpeg',
            'Gnome': 'https://i.imgur.com/raPiyfX.jpeg',
            'High Elf': 'https://i.imgur.com/bpGfdab.jpeg',
            'Human': 'https://i.imgur.com/ESaiUqo.jpeg',
            'Night Elf': 'https://i.imgur.com/idNbcIk.jpeg',
            'Orc': 'https://i.imgur.com/Vi5h0il.jpeg',
            'Saberon': 'https://i.imgur.com/ozJwhB2.png',
            'Tauren': 'https://i.imgur.com/7xwsR5K.jpeg',
            'Troll': 'https://i.imgur.com/bzqg0bP.jpeg',
            'Undead': 'https://i.imgur.com/5uK42c0.jpeg',
            'Wildhammer Clan': 'https://i.imgur.com/M6nFkwe.png',
        },
        spec: {
            'Affliction Warlock': 'https://i.imgur.com/l1xiQTR.jpeg',
            'Arcane Mage': 'https://i.imgur.com/5B0U3uq.jpeg',
            'Arms Warrior': 'https://i.imgur.com/UwmpVvB.jpeg',
            'Assassination Rogue': 'https://i.imgur.com/DJ4sFCb.jpeg',
            'Balance Druid': 'https://i.imgur.com/P2OCMZ7.jpeg',
            'Beast Mastery Hunter': 'https://i.imgur.com/FfcaTA7.jpeg',
            'Combat Rogue': 'https://i.imgur.com/JfpQ5gl.jpeg',
            'Demonology Warlock': 'https://i.imgur.com/oULwzyG.jpeg',
            'Destruction Warlock': 'https://i.imgur.com/h4nWNao.jpeg',
            'Discipline Priest': 'https://i.imgur.com/fAuB9sx.jpeg',
            'Elemental Shaman': 'https://i.imgur.com/kAOM5OQ.jpeg',
            'Enhancement Shaman': 'https://i.imgur.com/UJUEMjE.jpeg',
            'Feral Druid': 'https://i.imgur.com/bwSxMTC.jpeg',
            'Fire Mage': 'https://i.imgur.com/b3pSDFt.jpeg',
            'Frost Mage': 'https://i.imgur.com/bOIHnHU.jpeg',
            'Fury Warrior': 'https://i.imgur.com/HqXfk71.jpeg',
            'Holy Paladin': 'https://i.imgur.com/DB8Udhc.jpeg',
            'Holy Priest': 'https://i.imgur.com/SFLCJ5H.jpeg',
            'Marksmanship Hunter': 'https://i.imgur.com/8UHVbUt.jpeg',
            'Protection Paladin': 'https://i.imgur.com/dsQmLVC.jpeg',
            'Protection Warrior': 'https://i.imgur.com/BpgBAUy.jpeg',
            'Restoration Druid': 'https://i.imgur.com/WP89a7Q.jpeg',
            'Restoration Shaman': 'https://i.imgur.com/Us0g1Oi.jpeg',
            'Retribution Paladin': 'https://i.imgur.com/ApQtcaJ.jpeg',
            'Shadow Priest': 'https://i.imgur.com/mDVred5.jpeg',
            'Subtlety Rogue': 'https://i.imgur.com/tMvIjaX.jpeg',
            'Survival Hunter': 'https://i.imgur.com/FpNFwKf.jpeg',
        }
    };

    const currentImage = themes[themeMode][selectedTheme] || Object.values(themes[themeMode])[0];

    return (
        <div className="min-h-screen bg-[#080808] pb-24 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-b from-[#00b0f0]/5 to-transparent opacity-20" />
            </div>

            <UnifiedHeader
                icon="https://i.imgur.com/wA5eGcB.jpeg"
                section="Core Systems"
                sub="Interface 2.0"
                title="The Modern Standard"
                quote="Clarity in chaos."
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10 mt-12">

                {/* Hero Section: The HUD */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00b0f0]/10 border border-[#00b0f0]/30 text-[#00b0f0] text-xs font-bold uppercase tracking-wider mb-6">
                            <Maximize className="w-3 h-3" /> native overhaul
                        </div>
                        <h2 className="text-4xl font-hero text-[#f0e6d2] mb-6">
                            Your UI, <span className="text-[#00b0f0]">Your Way.</span>
                        </h2>
                        <p className="text-[#aeb6bf] text-sm leading-relaxed mb-6">
                            Gone are the days of editing Lua files or downloading 50 addons just to move your health bar.
                            The TBC+ client features a completely rebuilt, modular HUD engine inspired by modern standards.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                { label: "Edit Mode", desc: "Drag, resize, and snap every element of the UI." },
                                { label: "Profile Sharing", desc: "Share your layout string with a single click." },
                                { label: "Artistic Themes", desc: "Switch between Race-based and Spec-based art styles instantly." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-[#1a1c22] border border-[#333] flex items-center justify-center shrink-0 mt-0.5">
                                        <Grid className="w-3 h-3 text-[#00b0f0]" />
                                    </div>
                                    <div>
                                        <strong className="text-[#e0e0e0] block text-sm">{item.label}</strong>
                                        <span className="text-[#666] text-xs">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Theme Controller */}
                        <div className="bg-[#111] p-6 rounded-lg border border-[#222]">
                            <h3 className="text-xs text-[#666] uppercase tracking-widest mb-4 font-bold">Customize Theme</h3>
                            <div className="flex gap-4 mb-4">
                                <button
                                    onClick={() => { setThemeMode('race'); setSelectedTheme('Night Elf'); }}
                                    className={`flex-1 py-2 text-sm font-bold uppercase tracking-wider rounded transition-colors ${themeMode === 'race' ? 'bg-[#00b0f0] text-black' : 'bg-[#222] text-[#666] hover:bg-[#333]'}`}
                                >
                                    By Race
                                </button>
                                <button
                                    onClick={() => { setThemeMode('spec'); setSelectedTheme('Fire Mage'); }}
                                    className={`flex-1 py-2 text-sm font-bold uppercase tracking-wider rounded transition-colors ${themeMode === 'spec' ? 'bg-[#00b0f0] text-black' : 'bg-[#222] text-[#666] hover:bg-[#333]'}`}
                                >
                                    By Spec
                                </button>
                            </div>

                            <select
                                value={selectedTheme}
                                onChange={(e) => setSelectedTheme(e.target.value)}
                                className="w-full bg-[#0a0a0a] border border-[#333] text-[#f0e6d2] px-4 py-3 rounded focus:outline-none focus:border-[#00b0f0] transition-colors appearance-none cursor-pointer mb-4"
                            >
                                {Object.keys(themes[themeMode]).map((key) => (
                                    <option key={key} value={key}>{key}</option>
                                ))}
                            </select>

                            {/* Deep Linking Buttons */}
                            <div className="pt-4 border-t border-[#222]">
                                {themeMode === 'race' && (
                                    <button
                                        onClick={() => {
                                            const raceMap = {
                                                'Blood Elf': 'elves',
                                                'High Elf': 'elves',
                                                'Gnome': 'goblins', // Goblins/Gnomes share tech theme sometimes? or just fallback
                                                'Goblin': 'goblins', // If added
                                                'Saberon': 'saberon',
                                                'Ogre': 'ogres', // If added
                                                'Broken': 'broken',
                                                'Wildhammer Clan': 'wildhammer'
                                            };
                                            const targetRace = raceMap[selectedTheme];
                                            if (targetRace && setSelectedRace) {
                                                setSelectedRace(targetRace);
                                                setPage('races');
                                            } else {
                                                // Default behavior or notification
                                                console.log("No specific page for this race yet.");
                                            }
                                        }}
                                        disabled={!['Blood Elf', 'High Elf', 'Saberon', 'Broken', 'Wildhammer Clan'].includes(selectedTheme)}
                                        className={`w-full py-3 rounded border border-[#00b0f0]/30 text-[#00b0f0] uppercase font-bold text-xs tracking-widest hover:bg-[#00b0f0]/10 transition-all flex items-center justify-center gap-2 ${!['Blood Elf', 'High Elf', 'Saberon', 'Broken', 'Wildhammer Clan'].includes(selectedTheme) ? 'opacity-50 cursor-not-allowed border-[#333] text-[#555]' : ''}`}
                                    >
                                        Explore Race Lore <ArrowRight className="w-4 h-4" />
                                    </button>
                                )}
                                {themeMode === 'spec' && (
                                    <button
                                        onClick={() => {
                                            // Extract class name (last word usually works, e.g. "Fire Mage" -> "Mage")
                                            const parts = selectedTheme.split(' ');
                                            const className = parts[parts.length - 1].toLowerCase();
                                            if (setSelectedClass) {
                                                setSelectedClass(className);
                                                setPage('classes');
                                            }
                                        }}
                                        className="w-full py-3 rounded border border-[#00b0f0]/30 text-[#00b0f0] uppercase font-bold text-xs tracking-widest hover:bg-[#00b0f0]/10 transition-all flex items-center justify-center gap-2"
                                    >
                                        Explore Class Guide <Sword className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Interactive Preview */}
                    <div className="relative group perspective-1000">
                        <div className="relative rounded-lg border border-[#333] overflow-hidden shadow-2xl bg-black transform transition-transform duration-500 group-hover:scale-[1.02]">
                            {/* Header Bar */}
                            <div className="h-8 bg-[#111] border-b border-[#333] flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center"></div>
                                <div className="ml-auto text-[10px] text-[#444] font-mono">INTERFACE_PREVIEW_Render.exe</div>
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-video bg-[#050505]">
                                <img
                                    key={currentImage} // Force re-render for animation
                                    src={currentImage}
                                    alt="Interface Theme Preview"
                                    className="w-full h-full object-cover animate-fade-in"
                                />

                                {/* Overlay UI Grid Lines (Decorative) */}
                                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(0,176,240,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,176,240,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                            </div>
                        </div>
                        {/* Reflection Effect */}
                        <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/50 blur-xl rounded-[100%] z-[-1]"></div>
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#111] p-6 rounded border border-[#2f2f35] hover:border-[#00b0f0]/50 transition-colors group">
                        <div className="w-12 h-12 bg-[#1a1c22] rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Eye className="w-6 h-6 text-[#00b0f0]" />
                        </div>
                        <h3 className="font-hero text-[#e0e0e0] uppercase mb-2">Accessibility First</h3>
                        <p className="text-[#666] text-xs leading-relaxed">
                            Native colorblind filters, text-to-speech for quest text, and controller support with console-style radial menus are now built-in.
                        </p>
                    </div>

                    <div className="bg-[#111] p-0 rounded border border-[#2f2f35] hover:border-[#00b0f0]/50 transition-colors group overflow-hidden relative">
                        <div className="p-6 pb-20 relative z-10">
                            <div className="w-12 h-12 bg-[#1a1c22] rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Activity className="w-6 h-6 text-[#00b0f0]" />
                            </div>
                            <h3 className="font-hero text-[#e0e0e0] uppercase mb-2">Integrated Metrics</h3>
                            <p className="text-[#666] text-xs leading-relaxed">
                                No more Recount. The "Combat Analysis" window provides CPU-efficient, accurate DPS/HPS tracking.
                            </p>
                        </div>
                        {/* Damage Meter Image Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
                            <img
                                src="https://i.imgur.com/5ucMtk0.jpeg"
                                alt="Damage Meter"
                                className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-100 transition-opacity duration-300 mask-image-gradient"
                                style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}
                            />
                        </div>
                    </div>

                    <div className="bg-[#111] p-6 rounded border border-[#2f2f35] hover:border-[#00b0f0]/50 transition-colors group">
                        <div className="w-12 h-12 bg-[#1a1c22] rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mic className="w-6 h-6 text-[#00b0f0]" />
                        </div>
                        <h3 className="font-hero text-[#e0e0e0] uppercase mb-2">Voice Chat 2.0</h3>
                        <p className="text-[#666] text-xs leading-relaxed">
                            Proximity voice chat for the open world, and crystal-clear, low-latency raid channels with role-based volume ducking.
                        </p>
                    </div>

                    <div className="bg-[#111] p-6 rounded border border-[#2f2f35] hover:border-[#00b0f0]/50 transition-colors group">
                        <div className="w-12 h-12 bg-[#1a1c22] rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Headphones className="w-6 h-6 text-[#00b0f0]" />
                        </div>
                        <h3 className="font-hero text-[#e0e0e0] uppercase mb-2">AI Voiceover</h3>
                        <p className="text-[#666] text-xs leading-relaxed">
                            Fully voiced quest text generated by neural networks. Hear every NPC, from the humblest peasant to Illidan himself, speak their lines with emotional depth.
                        </p>
                    </div>

                    <div className="bg-[#111] p-6 rounded border border-[#2f2f35] hover:border-[#00b0f0]/50 transition-colors group">
                        <div className="w-12 h-12 bg-[#1a1c22] rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <BookOpen className="w-6 h-6 text-[#00b0f0]" />
                        </div>
                        <h3 className="font-hero text-[#e0e0e0] uppercase mb-2">The Atlas</h3>
                        <p className="text-[#666] text-xs leading-relaxed">
                            A complete loot compendium and dungeon journal. Browse 3D models and drop tables without leaving the game.
                        </p>
                    </div>

                    <div className="bg-[#111] p-6 rounded border border-[#2f2f35] hover:border-[#00b0f0]/50 transition-colors group">
                        <div className="w-12 h-12 bg-[#1a1c22] rounded flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <MapPin className="w-6 h-6 text-[#00b0f0]" />
                        </div>
                        <h3 className="font-hero text-[#e0e0e0] uppercase mb-2">Integrated Quest Helper</h3>
                        <p className="text-[#666] text-xs leading-relaxed">
                            Objectives tracked on your map and minimap with 3D waypoints. 'Questie' functionality is now native to the client.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InterfaceShowcase;
