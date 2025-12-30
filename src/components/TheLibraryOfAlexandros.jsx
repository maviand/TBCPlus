import React from 'react';
import { BookOpen, Scroll, Video, Search, Bookmark, Feather, Map, GraduationCap, Star, Library } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheLibraryOfAlexandros = () => {

    const parseBold = (text) => text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i} className="text-amber-400 font-bold">{part.slice(2, -2)}</strong> : part
    );

    return (
        <div className="min-h-screen bg-[#0c0a09] text-stone-200 font-sans selection:bg-amber-900 selection:text-white overflow-x-hidden">
            <UnifiedHeader
                icon={<BookOpen className="w-8 h-8 text-amber-600" />}
                background={`/TBCPlus/images/header_lore.png`}
                section="Lore Interface"
                sub="Your Legend, Written in Ink"
                title="The Library of Alexandros"
                quote="History is not what happened. It is what we remember."
            />

            <div className="container mx-auto px-4 py-12">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-16 px-4 bg-amber-950/10 py-10 rounded-xl border border-amber-900/30">
                    <h2 className="text-3xl font-cinzel text-white mb-6">The Living History</h2>
                    <p className="text-lg text-stone-400 leading-relaxed font-light">
                        {parseBold(`The Quest Text of old is gone.
                        The **Library of Alexandros** is a new UI panel (Shift+L) that acts as your character's personal journal, cinematic theater, and encyclopedia.
                        It records your journey not as a list of completed quests, but as a cohesive story visible to you and your visitors.`)}
                    </p>
                </div>

                {/* UI MOCKUP GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">

                    {/* The Living Scroll */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-amber-900/20 rounded-lg text-amber-500"><Scroll size={24} /></div>
                            <h3 className="text-2xl font-cinzel text-white">The Living Scroll</h3>
                        </div>
                        <p className="text-stone-400 text-sm">
                            Every major achievement writes a new entry in your scroll.
                            Unlike the "Statistics" page, this is written in prose, dynamically generated based on your choices and spec.
                        </p>

                        {/* Mockup Entry */}
                        <div className="bg-[#161311] p-8 rounded-lg border border-stone-800 font-serif italic text-stone-300 leading-loose relative shadow-lg">
                            <Feather className="absolute top-4 right-4 text-stone-700 w-6 h-6 rotate-45" />
                            "...and so it was that <span className="text-amber-500 font-bold">[PlayerName]</span>, Champion of the Naaru, struck down the Fel Reaver of Hellfire.
                            The metal giant fell, shaking the very foundations of Thrallmar.
                            From that day forth, the skies of the peninsula were silent, save for the wind."
                        </div>
                    </div>

                    {/* The Cinematic Vault */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-amber-900/20 rounded-lg text-amber-500"><Video size={24} /></div>
                            <h3 className="text-2xl font-cinzel text-white">The Cinematic Vault</h3>
                        </div>
                        <p className="text-stone-400 text-sm">
                            {parseBold('Re-watch any in-game cutscene or pre-rendered cinematic you have unlocked.\n                            Includes **"Director\'s Commentary"** nodes from the developers explaining the lore changes in TBC+.')}
                        </p>

                        {/* Mockup Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "The Dark Portal Opens",
                                "Illidan's Defeat",
                                "Kael'thas Returns",
                                "The Sunwell Ignites",
                                "Zul'Aman Trailer",
                                "Credits"
                            ].map((title, i) => (
                                <div key={i} className="bg-[#111] p-3 rounded border border-stone-800 group cursor-pointer hover:border-amber-600 transition-colors">
                                    <div className="h-20 bg-black mb-2 flex items-center justify-center text-stone-700 group-hover:bg-stone-900 transition-colors overflow-hidden relative">
                                        <Video size={20} className="relative z-10" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                                    </div>
                                    <span className="text-[10px] text-stone-400 group-hover:text-white uppercase tracking-wide block truncate">{title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* THE BESTIARY & SCHOLAR SYSTEM */}
                <div className="bg-[#131110] border border-stone-800 rounded-xl p-10 max-w-6xl mx-auto relative overflow-hidden mb-20 shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                        <Library size={300} />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/3 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-900/30 text-amber-500 text-xs rounded border border-amber-900 mb-4">
                                <GraduationCap size={14} />
                                <span>New Profession: Scholar</span>
                            </div>
                            <h3 className="text-4xl font-cinzel text-white mb-4">The Scholar's Path</h3>
                            <p className="text-stone-400 text-sm leading-relaxed mb-6">
                                {parseBold('Knowledge is power. Collecting books and killing enemies grants **Scholar XP**.\n                                As you rank up, you unlock passive benefits against specific creature types.')}
                            </p>
                            <div className="bg-black/40 p-4 rounded border border-stone-800 text-left">
                                <div className="text-xs text-stone-500 uppercase tracking-widest mb-2">Current Rank: <span className="text-white">Archivist</span></div>
                                <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden mb-2">
                                    <div className="bg-amber-600 h-full w-2/3"></div>
                                </div>
                                <div className="text-[10px] text-stone-600">Next Reward: +5% Dmg vs Demons</div>
                            </div>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Bestiary Feature */}
                            <div className="bg-[#1a1817] p-6 rounded-lg border border-stone-800 hover:border-amber-900/50 transition-colors">
                                <h4 className="text-white font-cinzel mb-2 flex items-center gap-2"><Search size={16} className="text-amber-500" /> Monster Analysis</h4>
                                <p className="text-stone-500 text-xs leading-relaxed">
                                    Reveal exact drop rates, ability timers, and weaknesses for any mob you have researched fully.
                                </p>
                            </div>
                            {/* Books Feature */}
                            <div className="bg-[#1a1817] p-6 rounded-lg border border-stone-800 hover:border-amber-900/50 transition-colors">
                                <h4 className="text-white font-cinzel mb-2 flex items-center gap-2"><Bookmark size={16} className="text-amber-500" /> The Great Library</h4>
                                <p className="text-stone-500 text-xs leading-relaxed">
                                    Collect physical lore books from the world (e.g., "The History of Stormwind"). They are stored here permanently, freeing up bag space.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TheLibraryOfAlexandros;
