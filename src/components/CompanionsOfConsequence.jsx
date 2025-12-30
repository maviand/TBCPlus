import React from 'react';
import { Users, Shield, Sword, Heart, Star, UserPlus, Map, MessageCircle, Skull, Flame } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const CompanionsOfConsequence = () => {

    const parseBold = (text) => text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i} className="text-blue-400 font-bold">{part.slice(2, -2)}</strong> : part
    );

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-stone-200 font-sans selection:bg-blue-900 selection:text-white overflow-x-hidden">
            <UnifiedHeader
                icon={<Users className="w-8 h-8 text-blue-400" />}
                background={`/TBCPlus/images/header_followers.png`}
                section="Follower System"
                sub="Never Fight Alone"
                title="Companions of Consequence"
                quote="Even the mightiest hero needs a shield-brother."
            />

            <div className="container mx-auto px-4 py-12">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-16 px-4 bg-blue-950/10 py-10 rounded-xl border border-blue-900/30">
                    <h2 className="text-3xl font-cinzel text-white mb-6">The Fellowship</h2>
                    <p className="text-lg text-stone-400 leading-relaxed font-light">
                        {parseBold(`The dungeons of Outland are treacherous, and sometimes your guild is offline.
                        **Companions of Consequence** allows you to recruit iconic NPCs to fill your party slots for 5-man content.
                        They are not pets; they are fully realized characters with gear, talent trees, and **loyalty quests**.
                        Treat them well, and they will die for you. Treat them poorly, and they may leave.`)}
                    </p>
                </div>

                {/* THE COMPANIONS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">

                    {/* Companion 1 */}
                    <div className="bg-[#12141a] rounded-xl overflow-hidden border border-stone-800 group hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-900/20">
                        <div className="h-72 overflow-hidden relative">
                            <img src="https://i.imgur.com/u5rDQIs.jpeg" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Akama" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-2xl font-cinzel text-white group-hover:text-blue-400 transition-colors">Akama</h3>
                                <span className="text-xs text-blue-500 font-bold uppercase tracking-wider bg-blue-900/20 px-2 py-1 rounded border border-blue-900/30">Elder Shaman</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2 mb-4">
                                <span className="px-2 py-1 bg-stone-800 text-stone-300 text-[10px] uppercase tracking-wide rounded">Healer</span>
                                <span className="px-2 py-1 bg-stone-800 text-stone-300 text-[10px] uppercase tracking-wide rounded">Support</span>
                            </div>
                            <p className="text-sm text-stone-400 mb-6 leading-relaxed">
                                Provides powerful totems and Chain Heals. His unique "Shadow's Grasp" ability can CC undead/demon enemies.
                                <br /><em className="text-stone-500 block mt-2 text-xs">"The light... it flickers in the dark."</em>
                            </p>
                            <div className="border-t border-stone-800 pt-4 mt-4">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-stone-500">Loyalty</span>
                                    <span className="text-blue-400">Revered</span>
                                </div>
                                <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 h-full w-3/4"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Companion 2 - NEW */}
                    <div className="bg-[#12141a] rounded-xl overflow-hidden border border-stone-800 group hover:border-purple-500/50 transition-all shadow-lg hover:shadow-purple-900/20">
                        <div className="h-72 overflow-hidden relative">
                            <img src="https://i.imgur.com/Prhz9Nt.png" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Tala" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-2xl font-cinzel text-white group-hover:text-purple-400 transition-colors">Tala the Lost</h3>
                                <span className="text-xs text-purple-500 font-bold uppercase tracking-wider bg-purple-900/20 px-2 py-1 rounded border border-purple-900/30">Draenei Artificer</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2 mb-4">
                                <span className="px-2 py-1 bg-stone-800 text-stone-300 text-[10px] uppercase tracking-wide rounded">Ranged DPS</span>
                                <span className="px-2 py-1 bg-stone-800 text-stone-300 text-[10px] uppercase tracking-wide rounded">Utility</span>
                            </div>
                            <p className="text-sm text-stone-400 mb-6 leading-relaxed">
                                Uses crystal-technology to snipe enemies. Deploys "Pylons" that buff party haste. Can craft unique gems for the player.
                                <br /><em className="text-stone-500 block mt-2 text-xs">"My calculations predict... pain."</em>
                            </p>
                            <div className="border-t border-stone-800 pt-4 mt-4">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-stone-500">Loyalty</span>
                                    <span className="text-purple-400">Friendly</span>
                                </div>
                                <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-purple-500 h-full w-1/3"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Companion 3 */}
                    <div className="bg-[#12141a] rounded-xl overflow-hidden border border-stone-800 group hover:border-red-500/50 transition-all shadow-lg hover:shadow-red-900/20">
                        <div className="h-72 overflow-hidden relative">
                            <img src="https://i.imgur.com/yxPi2Ay.png" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Rexxar" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-2xl font-cinzel text-white group-hover:text-red-400 transition-colors">Rexxar</h3>
                                <span className="text-xs text-red-500 font-bold uppercase tracking-wider bg-red-900/20 px-2 py-1 rounded border border-red-900/30">Beastmaster</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex gap-2 mb-4">
                                <span className="px-2 py-1 bg-stone-800 text-stone-300 text-[10px] uppercase tracking-wide rounded">Tank</span>
                                <span className="px-2 py-1 bg-stone-800 text-stone-300 text-[10px] uppercase tracking-wide rounded">Melee DPS</span>
                            </div>
                            <p className="text-sm text-stone-400 mb-6 leading-relaxed">
                                Comes with Misha (Tank). Rexxar dual-wields axes for massive cleave damage. Grants "Pack Mentality" aura.
                                <br /><em className="text-stone-500 block mt-2 text-xs">"The wilds claim us all eventually."</em>
                            </p>
                            <div className="border-t border-stone-800 pt-4 mt-4">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-stone-500">Loyalty</span>
                                    <span className="text-red-400">Exalted</span>
                                </div>
                                <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-red-500 h-full w-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MECHANICS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
                    <div className="bg-[#12141a] border border-stone-800 rounded-lg p-8 flex flex-col hover:border-blue-500/30 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-900/20 rounded-lg text-blue-400"><Heart size={24} /></div>
                            <h4 className="text-xl font-cinzel text-white">Loyalty & Bonds</h4>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed mb-4 flex-grow">
                            {parseBold(`Companions react to your choices. Help the Broken, and Akama gains loyalty.
                            At **Maximum Loyalty**, you unlock their "Personal Questline" which rewards a Legendary item specific to them.`)}
                        </p>
                        <ul className="text-xs text-stone-500 space-y-2">
                            <li className="flex gap-2"><div className="w-1 h-1 bg-blue-500 mt-1.5"></div>Unlock new dialogue options.</li>
                            <li className="flex gap-2"><div className="w-1 h-1 bg-blue-500 mt-1.5"></div>Romance options (select characters).</li>
                        </ul>
                    </div>

                    <div className="bg-[#12141a] border border-stone-800 rounded-lg p-8 flex flex-col hover:border-blue-500/30 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-900/20 rounded-lg text-blue-400"><Flame size={24} /></div>
                            <h4 className="text-xl font-cinzel text-white">Campfire System</h4>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed mb-4 flex-grow">
                            While resting at an inn or player housing, Companions will interact with each other.
                            Listen to their banter to learn lore secrets or gain temporary "Morale" buffs for the next dungeon.
                        </p>
                        <ul className="text-xs text-stone-500 space-y-2">
                            <li className="flex gap-2"><div className="w-1 h-1 bg-blue-500 mt-1.5"></div>Akama argues with Maiev.</li>
                            <li className="flex gap-2"><div className="w-1 h-1 bg-blue-500 mt-1.5"></div>Rexxar shares survival tips.</li>
                        </ul>
                    </div>

                    <div className="bg-[#12141a] border border-stone-800 rounded-lg p-8 flex flex-col hover:border-blue-500/30 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-900/20 rounded-lg text-blue-400"><Skull size={24} /></div>
                            <h4 className="text-xl font-cinzel text-white">Permadeath (Iron Soul)</h4>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed mb-4 flex-grow">
                            {parseBold(`If playing on **Iron Soul** difficulty, Companions can die permanently.
                            If they fall in battle, you have 60 seconds to resurrect them. If you fail, they—and their gear—are gone forever.`)}
                        </p>
                        <ul className="text-xs text-stone-500 space-y-2">
                            <li className="flex gap-2"><div className="w-1 h-1 bg-red-500 mt-1.5"></div>Unique "Grave" interaction in Housing.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#12141a] border border-stone-800 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <Map className="w-16 h-16 text-stone-600 mb-4" />
                    <h4 className="text-lg font-cinzel text-stone-300 mb-2">Restricted Zones</h4>
                    <p className="text-stone-500 text-xs max-w-sm">
                        Companions are for 1-5 player content. They <span className="text-red-500 font-bold">CANNOT</span> enter 10/25-man Raids or Battlegrounds.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CompanionsOfConsequence;
