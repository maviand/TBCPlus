import React, { useState } from 'react';
import { CloudRain, Sun, Flame, Skull, Coins, Calendar, Clock, RefreshCw, Trophy, Zap, Droplets, Wind, Snowflake } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheSeasonsOfOutland = () => {

    const parseBold = (text) => text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i} className="text-teal-400 font-bold">{part.slice(2, -2)}</strong> : part
    );

    return (
        <div className="min-h-screen bg-[#080808] text-stone-200 font-sans selection:bg-teal-900 selection:text-white overflow-x-hidden">
            <UnifiedHeader
                icon={<RefreshCw className="w-8 h-8 text-teal-400" />}
                background={`/TBCPlus/images/header_seasons.png`}
                section="Seasonal Content"
                sub="A World That Never Stagnates"
                title="Seasons of Outland"
                quote="The stars align, the portals shift. What comes next is never what came before."
            />

            <div className="container mx-auto px-4 py-12">

                {/* Concept Intro */}
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-6 bg-[#111] p-10 rounded-xl border border-teal-900/30">
                    <h2 className="text-4xl font-cinzel text-white">The Eternal Cycle</h2>
                    <p className="text-lg text-stone-400 leading-relaxed font-light">
                        {parseBold(`To keep the experience fresh for years to come, TBC+ introduces **Seasonal Cycles**.
                        Every 6 months, a new "Season" begins, altering the game world with powerful thematic modifiers, new enemies, and limited-time loot.
                        Your characters persist, but the world around them changes.`)}
                    </p>
                </div>

                {/* TIMELINE */}
                <div className="relative max-w-7xl mx-auto mb-20">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-800 -translate-x-1/2 hidden md:block"></div>

                    {/* Season 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-24 relative animate-fade-in-up">
                        <div className="md:w-1/2 flex justify-end">
                            <div className="bg-[#111] border border-green-900/30 p-8 rounded-xl max-w-lg w-full relative group hover:border-green-500/50 transition-all shadow-lg hover:shadow-green-900/20 overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Skull size={150} /></div>
                                <div className="absolute top-4 right-4 text-green-500/20 font-cinzel text-5xl group-hover:text-green-500/40 transition-colors">01</div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Skull className="text-green-500 w-8 h-8" />
                                    <h3 className="text-2xl font-cinzel text-green-400">Season of the Scourge</h3>
                                </div>
                                <p className="text-stone-400 text-sm mb-6 leading-relaxed relative z-10">
                                    The Lich King's reach extends to Outland. Undead infusions plague every dungeon.
                                    Expect to fight Naxxramas-style mechanics in Hellfire Ramparts.
                                </p>
                                <div className="bg-black/40 p-4 rounded border border-green-900/20 relative z-10">
                                    <div className="text-xs text-stone-500 uppercase tracking-widest mb-2 font-bold">Seasonal Affixes</div>
                                    <ul className="text-xs text-stone-400 space-y-2">
                                        <li className="flex gap-2 items-center"><span className="text-green-500">Volatile Rot:</span> Enemies explore on death.</li>
                                        <li className="flex gap-2 items-center"><span className="text-green-500">Reanimation:</span> Mobs resurrect after 10s if not burned.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="z-10 bg-[#080808] p-3 border-2 border-green-900 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                            <Skull className="w-8 h-8 text-green-500" />
                        </div>
                        <div className="md:w-1/2 text-sm text-stone-600 font-mono tracking-widest">
                            DURATION: 6 MONTHS
                        </div>
                    </div>

                    {/* Season 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24 relative animate-fade-in-up delay-100">
                        <div className="md:w-1/2 flex justify-start">
                            <div className="bg-[#111] border border-amber-900/30 p-8 rounded-xl max-w-lg w-full relative group hover:border-amber-500/50 transition-all shadow-lg hover:shadow-amber-900/20 overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Coins size={150} /></div>
                                <div className="absolute top-4 right-4 text-amber-500/20 font-cinzel text-5xl group-hover:text-amber-500/40 transition-colors">02</div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Coins className="text-amber-500 w-8 h-8" />
                                    <h3 className="text-2xl font-cinzel text-amber-400">Season of Greed</h3>
                                </div>
                                <p className="text-stone-400 text-sm mb-6 leading-relaxed relative z-10">
                                    The Steamwheedle Cartel has deregulated everything. Gold drops are tripled!
                                    But greed attracts thieves...
                                </p>
                                <div className="bg-black/40 p-4 rounded border border-amber-900/20 relative z-10">
                                    <div className="text-xs text-stone-500 uppercase tracking-widest mb-2 font-bold">Seasonal Affixes</div>
                                    <ul className="text-xs text-stone-400 space-y-2">
                                        <li className="flex gap-2 items-center"><span className="text-amber-500">Gold Rush:</span> +300% Gold Find.</li>
                                        <li className="flex gap-2 items-center"><span className="text-amber-500">Tax Collector:</span> Bosses steal 10% of your gold on wipe.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="z-10 bg-[#080808] p-3 border-2 border-amber-900 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                            <Coins className="w-8 h-8 text-amber-500" />
                        </div>
                        <div className="md:w-1/2 text-right text-sm text-stone-600 font-mono tracking-widest">
                            DURATION: 6 MONTHS
                        </div>
                    </div>

                    {/* Season 3 */}
                    <div className="flex flex-col md:flex-row items-center gap-12 relative animate-fade-in-up delay-200">
                        <div className="md:w-1/2 flex justify-end">
                            <div className="bg-[#111] border border-red-900/30 p-8 rounded-xl max-w-lg w-full relative group hover:border-red-500/50 transition-all shadow-lg hover:shadow-red-900/20 overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Droplets size={150} /></div>
                                <div className="absolute top-4 right-4 text-red-500/20 font-cinzel text-5xl group-hover:text-red-500/40 transition-colors">03</div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Droplets className="text-red-500 w-8 h-8" />
                                    <h3 className="text-2xl font-cinzel text-red-400">Season of Blood</h3>
                                </div>
                                <p className="text-stone-400 text-sm mb-6 leading-relaxed relative z-10">
                                    The Fel Orcs have gone mad. Every hit you take applies a stacking bleed.
                                    Healing is reduced by 50%, but Leech is increased by 20%.
                                </p>
                                <div className="bg-black/40 p-4 rounded border border-red-900/20 relative z-10">
                                    <div className="text-xs text-stone-500 uppercase tracking-widest mb-2 font-bold">Seasonal Affixes</div>
                                    <ul className="text-xs text-stone-400 space-y-2">
                                        <li className="flex gap-2 items-center"><span className="text-red-500">Hemophilia:</span> Constant bleed ticking.</li>
                                        <li className="flex gap-2 items-center"><span className="text-red-500">Vampirism:</span> Damage done heals you.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="z-10 bg-[#080808] p-3 border-2 border-red-900 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                            <Droplets className="w-8 h-8 text-red-500" />
                        </div>
                        <div className="md:w-1/2 text-sm text-stone-600 font-mono tracking-widest">
                            DURATION: 6 MONTHS
                        </div>
                    </div>
                </div>

                {/* Seasonal Rewards */}
                <div className="bg-[#111] rounded-xl border border-stone-800 p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://i.imgur.com/GzBkC3s.jpeg')] bg-cover opacity-5"></div>
                    <div className="md:w-1/3 text-center relative z-10">
                        <div className="w-32 h-32 bg-teal-900/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-dashed border-teal-500/30">
                            <Trophy className="w-16 h-16 text-teal-500" />
                        </div>
                        <h3 className="font-cinzel text-3xl text-white mb-2">The Vault of Eras</h3>
                        <div className="text-teal-500 text-xs font-bold uppercase tracking-widest">FOMO Protection</div>
                    </div>
                    <div className="md:w-2/3 relative z-10">
                        <p className="text-stone-400 text-lg mb-8 leading-relaxed font-light">
                            {parseBold('When a season ends, your characters are moved to the "Eternal" realm.\n                            Your earned **"Season Points"** are converted to ')} <span className="text-teal-400 font-bold">Badges of Eras</span>.
                            These can be spent at the Caverns of Time to unlock cosmetic rewards from past seasons that you might have missed.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-black/50 p-4 rounded text-center border border-teal-900/30 hover:border-teal-500 transition-colors">
                                <Trophy size={20} className="mx-auto text-teal-400 mb-2" />
                                <div className="text-xs text-stone-300">Mounts</div>
                            </div>
                            <div className="bg-black/50 p-4 rounded text-center border border-teal-900/30 hover:border-teal-500 transition-colors">
                                <Trophy size={20} className="mx-auto text-teal-400 mb-2" />
                                <div className="text-xs text-stone-300">Pets</div>
                            </div>
                            <div className="bg-black/50 p-4 rounded text-center border border-teal-900/30 hover:border-teal-500 transition-colors">
                                <Trophy size={20} className="mx-auto text-teal-400 mb-2" />
                                <div className="text-xs text-stone-300">Tabards</div>
                            </div>
                            <div className="bg-black/50 p-4 rounded text-center border border-teal-900/30 hover:border-teal-500 transition-colors">
                                <Trophy size={20} className="mx-auto text-teal-400 mb-2" />
                                <div className="text-xs text-stone-300">Toys</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TheSeasonsOfOutland;
