import React, { useState } from 'react';
import { Skull, Shield, Zap, Target, AlertTriangle, Eye, Ghost, Award, Flame, Sword, Crown, UserMinus } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheIronSoul = () => {
    const [activeSection, setActiveSection] = useState('modes');

    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i} className="mb-4 text-stone-400 leading-relaxed">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-red-500 font-normal">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    return (
        <div className="min-h-screen bg-[#050505] text-stone-200 font-sans selection:bg-red-900 selection:text-white overflow-x-hidden">
            <UnifiedHeader
                icon={<Skull className="w-8 h-8 text-red-600" />}
                background={`/TBCPlus/images/header_ironsoul.png`}
                section="Challenge Modes"
                sub="Death is Permanent. Glory is Forever."
                title="The Iron Soul"
                quote="Do not ask for a lighter burden. Ask for broader shoulders."
            />

            <div className="container mx-auto px-4 py-12">

                {/* Intro Block */}
                <div className="max-w-4xl mx-auto text-center mb-16 bg-red-950/10 border border-red-900/30 p-8 rounded-xl">
                    <h2 className="text-3xl font-cinzel text-white mb-6">Choose Your Suffering</h2>
                    <p className="text-lg text-stone-500 leading-relaxed font-light">
                        In TBC+, we officially support the <span className="text-red-500 font-bold">Ironman</span> playstyle.
                        No addons required. Select your challenge at Character Creation.
                        Your deeds are recorded in the <span className="text-white">Hall of the Dead</span>, ensuring your legacy lives on even if your character does not.
                    </p>
                </div>

                {/* MODES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                    {/* Mode 1: Hardcore */}
                    <div className="bg-[#0f0f0f] border border-red-900/30 p-8 rounded-xl relative overflow-hidden group hover:border-red-600 transition-colors shadow-lg hover:shadow-red-900/20">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Ghost size={140} /></div>
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="p-3 bg-red-900/20 rounded-lg"><Skull className="text-red-500 w-8 h-8" /></div>
                            <h3 className="font-cinzel text-2xl text-white">Hardcore</h3>
                        </div>
                        <p className="text-xs text-stone-500 mb-6 uppercase tracking-wider font-bold">The Classic Challenge</p>
                        <ul className="space-y-4 text-sm text-stone-400 mb-8 relative z-10">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-red-500 mt-1.5 rounded-full"></div>One Life. Death = Transfer to Softcore.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-red-500 mt-1.5 rounded-full"></div>No Auction House or Mailbox.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-red-500 mt-1.5 rounded-full"></div>Self-Found Loot Only.</li>
                        </ul>
                        <div className="border-t border-white/5 pt-4 relative z-10">
                            <span className="text-[10px] uppercase tracking-widest text-red-500 font-bold">Reward</span>
                            <p className="text-white text-sm mt-1">"The Immortal" Title + Unique Mount</p>
                        </div>
                    </div>

                    {/* Mode 2: Masochist */}
                    <div className="bg-[#0f0f0f] border border-stone-800 p-8 rounded-xl relative overflow-hidden group hover:border-amber-600 transition-colors shadow-lg hover:shadow-amber-900/20">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Shield size={140} /></div>
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="p-3 bg-amber-900/20 rounded-lg"><AlertTriangle className="text-amber-500 w-8 h-8" /></div>
                            <h3 className="font-cinzel text-2xl text-white">Masochist</h3>
                        </div>
                        <p className="text-xs text-stone-500 mb-6 uppercase tracking-wider font-bold">For Those Who Hate Themselves</p>
                        <ul className="space-y-4 text-sm text-stone-400 mb-8 relative z-10">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-amber-500 mt-1.5 rounded-full"></div>You take 20% increased damage.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-amber-500 mt-1.5 rounded-full"></div>XP gain reduced by 50%.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-amber-500 mt-1.5 rounded-full"></div>Durability loss is doubled.</li>
                        </ul>
                        <div className="border-t border-white/5 pt-4 relative z-10">
                            <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">Reward</span>
                            <p className="text-white text-sm mt-1">"Broken" Transmog Set (Bloody Bandages)</p>
                        </div>
                    </div>

                    {/* Mode 3: Lone Wolf */}
                    <div className="bg-[#0f0f0f] border border-stone-800 p-8 rounded-xl relative overflow-hidden group hover:border-blue-600 transition-colors shadow-lg hover:shadow-blue-900/20">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Eye size={140} /></div>
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="p-3 bg-blue-900/20 rounded-lg"><UserMinus className="text-blue-500 w-8 h-8" /></div>
                            <h3 className="font-cinzel text-2xl text-white">Lone Wolf</h3>
                        </div>
                        <p className="text-xs text-stone-500 mb-6 uppercase tracking-wider font-bold">Solo Self-Found Extreme</p>
                        <ul className="space-y-4 text-sm text-stone-400 mb-8 relative z-10">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-500 mt-1.5 rounded-full"></div>Cannot join parties or raids.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-500 mt-1.5 rounded-full"></div>Dungeons scale to 1-player.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-500 mt-1.5 rounded-full"></div>Personalized Loot Tables.</li>
                        </ul>
                        <div className="border-t border-white/5 pt-4 relative z-10">
                            <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Reward</span>
                            <p className="text-white text-sm mt-1">"Soloist" Title + Portable Vendor</p>
                        </div>
                    </div>
                </div>

                {/* NEW FEATURE: ANCESTRAL SPIRIT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="bg-[#111] p-10 rounded-xl border border-stone-800 relative overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 opacity-10"><Ghost size={200} /></div>
                        <h3 className="text-2xl font-cinzel text-white mb-4 flex items-center gap-3">
                            <Ghost className="text-stone-400" /> Ancestral Spirit
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed mb-6">
                            Death is not the end. When a Hardcore character dies, they leave behind an **Ancestral Spirit** based on their level.
                            Your next character can inherit this spirit to gain a temporary boost.
                        </p>
                        <div className="bg-black/40 p-4 rounded border border-stone-700">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-stone-300 font-bold text-sm">Level 60 Ancestor</span>
                                <span className="text-stone-500 text-xs">Effects lasts 10 levels</span>
                            </div>
                            <div className="text-green-400 text-xs">+5% XP Gain</div>
                            <div className="text-green-400 text-xs">+10% Spirit</div>
                            <div className="text-stone-600 text-xs italic mt-2">"You feel the wisdom of your forebears guiding you."</div>
                        </div>
                    </div>

                    <div className="bg-[#111] p-10 rounded-xl border border-stone-800 relative overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 opacity-10"><Ghost size={200} /></div>
                        <h3 className="text-2xl font-cinzel text-white mb-4 flex items-center gap-3">
                            <Ghost className="text-stone-400" /> Hall of the Dead
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed mb-6">
                            A new UI panel accessible from the main menu.
                            View a 3D gallery of your fallen heroes, complete with their final stats, location of death, and the enemy that killed them.
                        </p>
                        <ul className="grid grid-cols-2 gap-2 text-xs text-stone-500">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-500 rounded-full"></div>Filter by Cause of Death</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-500 rounded-full"></div>Share "Obituaries" to Chat</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-500 rounded-full"></div>Global Leaderboards</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-stone-500 rounded-full"></div>"Killer of the Week" Stats</li>
                        </ul>
                    </div>
                </div>

                {/* MORTAL FLAWS SYSTEM */}
                <div className="max-w-5xl mx-auto bg-[#0a0a0a] border border-stone-800 rounded-xl p-10 relative overflow-hidden mb-16 shadow-2xl">
                    <div className="relative z-10 flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-cinzel text-white mb-4">The Mortal Flaws System</h3>
                            <div className="text-stone-400 space-y-4 text-sm leading-relaxed">
                                {formatText(`Inspired by classic RPGs, you can voluntarily take on **Flaws** at character creation in exchange for permanent bonuses to XP or Gold find.
                                
                                Choose wisely. These flaws cannot be removed and define your character's struggle.`)}
                            </div>
                        </div>
                        <div className="md:w-1/2 grid gap-4">
                            <div className="bg-[#151515] p-4 rounded border border-red-900/20 flex gap-4 items-start hover:bg-[#1a1a1a] transition-colors cursor-help group">
                                <Zap className="text-red-500 shrink-0 group-hover:text-red-400" />
                                <div>
                                    <h4 className="text-white font-bold text-sm">Hemophiliac</h4>
                                    <p className="text-xs text-stone-500">Bleed effects deal 50% more damage to you.</p>
                                    <span className="text-green-500 text-[10px] uppercase font-bold mt-1 block group-hover:text-green-400">+10% XP Gain</span>
                                </div>
                            </div>
                            <div className="bg-[#151515] p-4 rounded border border-red-900/20 flex gap-4 items-start hover:bg-[#1a1a1a] transition-colors cursor-help group">
                                <Target className="text-red-500 shrink-0 group-hover:text-red-400" />
                                <div>
                                    <h4 className="text-white font-bold text-sm">Night Blindness</h4>
                                    <p className="text-xs text-stone-500">Vision range reduced by 40% in caves and at night.</p>
                                    <span className="text-amber-500 text-[10px] uppercase font-bold mt-1 block group-hover:text-amber-400">+15% Gold Find</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TheIronSoul;
