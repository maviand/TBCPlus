import React from 'react';
import { Tent, Ticket, Skull, Ghost, HelpCircle, Dices, Eye, Moon, Music, Sword, Heart, Crown, Sparkles, Scroll } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheDarkmoonCarnival = () => {
    const parseBold = (text) => text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i} className="text-purple-400 font-bold">{part.slice(2, -2)}</strong> : part
    );

    return (
        <div className="min-h-screen bg-[#050505] text-stone-200 font-sans selection:bg-purple-900 selection:text-white overflow-x-hidden">
            <UnifiedHeader
                icon={<Tent className="w-8 h-8 text-purple-600" />}
                background={`/TBCPlus/images/header_darkmoon.png`}
                section="Zone Overhaul"
                sub="Step Right Up... If You Dare"
                title="The Darkmoon Carnival"
                quote="Silas has secrets. And he's finally ready to share."
            />

            <div className="container mx-auto px-4 py-12">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-24 px-4 bg-purple-950/20 py-12 rounded-2xl border border-purple-900/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-50"></div>
                    <Eye className="w-12 h-12 text-purple-500 mx-auto mb-6 animate-pulse-slow" />
                    <h2 className="text-4xl font-cinzel text-white mb-6">The Faire Has Changed</h2>
                    <p className="text-lg text-stone-300 leading-relaxed font-light">
                        {parseBold(`No longer a monthly visitor, the Darkmoon Faire has permanently anchored its island to the Twisting Nether.
                        It is now a **Max-Level Zone** filled with twisted games, high-stakes gambling, and eldritch horrors lurking behind the tents.
                        The music is distorted, the clowns are not smiling, and the prizes... well, the prizes are to die for.`)}
                    </p>
                </div>

                {/* ATTRACTIONS (Updated) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
                    {/* Attraction 1 */}
                    <div className="bg-[#0a0a0a] p-8 rounded-xl border border-purple-900/30 hover:border-purple-500 transition-all group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity"><Ghost size={100} /></div>
                        <div className="flex justify-between items-start mb-6">
                            <Ghost className="text-purple-500 w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-bold bg-purple-900/40 text-purple-300 px-2 py-1 rounded tracking-widest uppercase">Roguelike</span>
                        </div>
                        <h3 className="font-cinzel text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">The Funhouse</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            A procedurally generated 5-man dungeon. Mirrors spawn clones of your party that use your own cooldowns against you.
                            <br /><span className="text-purple-400 text-xs mt-2 block">Reward: Mirror-Tier Transmog</span>
                        </p>
                    </div>

                    {/* Attraction 2 */}
                    <div className="bg-[#0a0a0a] p-8 rounded-xl border border-purple-900/30 hover:border-red-500 transition-all group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity"><Skull size={100} /></div>
                        <div className="flex justify-between items-start mb-6">
                            <Skull className="text-red-500 w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-bold bg-red-900/40 text-red-300 px-2 py-1 rounded tracking-widest uppercase">FFA Arena</span>
                        </div>
                        <h3 className="font-cinzel text-xl text-white mb-2 group-hover:text-red-400 transition-colors">The Deathmatch Cage</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            A free-for-all PvP pit. Last player standing wins the "Darkmoon Prize Ticket," exchangeable for endgame PvP gear.
                            <br /><span className="text-red-400 text-xs mt-2 block">Reward: Gladiator Titles</span>
                        </p>
                    </div>

                    {/* Attraction 3 */}
                    <div className="bg-[#0a0a0a] p-8 rounded-xl border border-purple-900/30 hover:border-amber-500 transition-all group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity"><Dices size={100} /></div>
                        <div className="flex justify-between items-start mb-6">
                            <Dices className="text-amber-500 w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-bold bg-amber-900/40 text-amber-300 px-2 py-1 rounded tracking-widest uppercase">Gambling</span>
                        </div>
                        <h3 className="font-cinzel text-xl text-white mb-2 group-hover:text-amber-400 transition-colors">Silas' High Stakes</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            Wager Gold, Primals, or Raid Consumables. The House always wins... unless it doesn't.
                            <br /><span className="text-amber-400 text-xs mt-2 block">Reward: The "High Roller" Title</span>
                        </p>
                    </div>

                    {/* Attraction 4 - UPDATED */}
                    <div className="bg-[#0a0a0a] p-8 rounded-xl border border-purple-900/30 hover:border-teal-500 transition-all group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity"><HelpCircle size={100} /></div>
                        <div className="flex justify-between items-start mb-6">
                            <HelpCircle className="text-teal-500 w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-bold bg-teal-900/40 text-teal-300 px-2 py-1 rounded tracking-widest uppercase">Mystery</span>
                        </div>
                        <h3 className="font-cinzel text-xl text-white mb-2 group-hover:text-teal-400 transition-colors">The Foggy Woods</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            The forest is alive. Elite mobs drop "Corrupted Tickets". Beware the "Darkmoon Rabbit" World Boss.
                            <br /><span className="text-teal-400 text-xs mt-2 block">Reward: Corrupted Pets</span>
                        </p>
                    </div>
                </div>

                {/* NEW FEATURE: BACKSTAGE PASS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <div className="bg-[#0f0b1a] rounded-xl border border-purple-900/20 p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <Ticket className="w-10 h-10 text-purple-500" />
                            <h3 className="text-2xl font-cinzel text-white">The Backstage Pass</h3>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed mb-6">
                            {parseBold('For those with Reputation: **Exalted**, the curtain is pulled back. Gain access to the "Performers\' Lounge" underground sanctuary.')}
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Music className="w-5 h-5 text-purple-400 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold text-sm">Bardic Duels</h4>
                                    <p className="text-stone-500 text-xs">{parseBold('Challenge other players to rhythm-game battles using the new **Bard** class mechanics.')}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Sword className="w-5 h-5 text-purple-400 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold text-sm">Illegal Transmogs</h4>
                                    <p className="text-stone-500 text-xs">Vendor selling "Grey" and "White" quality item appearances for transmog.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* NEW FEATURE: FORTUNE TELLING */}
                    <div className="bg-[#0f0b1a] rounded-xl border border-purple-900/20 p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <Sparkles className="w-10 h-10 text-amber-500" />
                            <h3 className="text-2xl font-cinzel text-white">Sayge's Fortunes</h3>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed mb-6">
                            {parseBold("Sayge doesn't just give text anymore. He gives **2-hour Server Buffs** based on your answers, but they come with a curse.")}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-black/50 p-4 rounded border border-purple-900/30">
                                <div className="text-amber-500 font-cinzel text-sm mb-1">Fortune of War</div>
                                <div className="text-green-400 text-xs">+10% Damage</div>
                                <div className="text-red-500 text-xs">-5% Stainma</div>
                            </div>
                            <div className="bg-black/50 p-4 rounded border border-purple-900/30">
                                <div className="text-amber-500 font-cinzel text-sm mb-1">Fortune of Wealth</div>
                                <div className="text-green-400 text-xs">+20% Gold Drops</div>
                                <div className="text-red-500 text-xs">-10% Move Speed</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* VISUAL: THE DECKS */}
                <div className="max-w-5xl mx-auto mb-20 text-center">
                    <h3 className="text-2xl font-cinzel text-white mb-8">The Tarot of the Old Gods</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: "Beasts", color: "text-green-500", icon: <Crown size={32} />, desc: "BiS for Hunters" },
                            { name: "Portals", color: "text-blue-500", icon: <Moon size={32} />, desc: "BiS for Mages" },
                            { name: "Warlords", color: "text-red-500", icon: <Sword size={32} />, desc: "BiS for Warriors" },
                            { name: "Furies", color: "text-amber-500", icon: <Heart size={32} />, desc: "BiS for Healers" }
                        ].map((deck, i) => (
                            <div key={i} className="bg-[#111] p-6 rounded-lg border border-stone-800 hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-purple-900/20">
                                <div className={`flex justify-center mb-4 ${deck.color}`}>{deck.icon}</div>
                                <h4 className="font-cinzel text-white text-lg mb-2">{deck.name}</h4>
                                <p className="text-stone-500 text-xs uppercase tracking-widest">{deck.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* NEW CURRENCY & REWARDS */}
                <div className="bg-[#0f0b1a] p-8 rounded-xl border border-purple-900/20 max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5"><Ticket size={200} /></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/3 text-center">
                            <div className="w-24 h-24 bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/50">
                                <Ticket className="w-12 h-12 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-cinzel text-white">The Prize Booth</h3>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-stone-400 text-sm mb-6 leading-relaxed">
                                {parseBold('Darkmoon Tickets are now a **Bind-on-Account** currency. Farm them on your main, gear up your alt.\n                                The Prize Booth has been updated with "Heirloom" items that scale to Level 70.')}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-900/40 rounded flex items-center justify-center"><Crown size={16} className="text-purple-300" /></div>
                                    <span className="text-sm text-stone-300">Class Transmog Sets</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-900/40 rounded flex items-center justify-center"><Scroll size={16} className="text-purple-300" /></div>
                                    <span className="text-sm text-stone-300">Reputation Tokens</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-900/40 rounded flex items-center justify-center"><Ghost size={16} className="text-purple-300" /></div>
                                    <span className="text-sm text-stone-300">Spectral Mounts</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-900/40 rounded flex items-center justify-center"><Music size={16} className="text-purple-300" /></div>
                                    <span className="text-sm text-stone-300">Bard Visual Effects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TheDarkmoonCarnival;
