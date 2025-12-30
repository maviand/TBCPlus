import React from 'react';
import { Sword, Shield, Swords, Users, Fingerprint, EyeOff, AlertOctagon, Skull, Flame, Crosshair, Target } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const ThePathOfBetrayal = () => {

    const parseBold = (text) => text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i} className="text-orange-400 font-bold">{part.slice(2, -2)}</strong> : part
    );

    return (
        <div className="min-h-screen bg-[#0a0505] text-stone-200 font-sans selection:bg-orange-900 selection:text-white overflow-x-hidden">
            <UnifiedHeader
                icon={<Swords className="w-8 h-8 text-orange-600" />}
                background={`/TBCPlus/images/header_betrayal.png`}
                section="Faction Mechanics"
                sub="Loyalty is a Choice. So is Treason."
                title="The Path of Betrayal"
                quote="I serve the Horde no longer. I serve only myself."
            />

            <div className="container mx-auto px-4 py-12">

                {/* Warning Alert */}
                <div className="max-w-3xl mx-auto bg-orange-950/20 border border-orange-600/50 rounded-lg p-6 flex flex-col items-center text-center gap-4 mb-16 shadow-[0_0_50px_rgba(234,88,12,0.1)]">
                    <AlertOctagon className="w-12 h-12 text-orange-500 animate-pulse-slow" />
                    <div>
                        <h3 className="text-xl font-bold text-orange-500 mb-2 font-cinzel">WARNING: IRREVERSIBLE ACTION</h3>
                        <p className="text-stone-400 text-sm leading-relaxed">
                            {parseBold('Defecting from your faction is a grueling, months-long process modeled after the "Scarab Lord" grind.\n                            It will reset your reputations, remove faction-specific mounts, and permanently mark you as a ')} <span className="text-red-500 font-bold">Traitor</span>.
                            <br /> Proceed with caution.
                        </p>
                    </div>
                </div>

                {/* THE THREE PATHS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">

                    {/* Path 1: Defection */}
                    <div className="bg-[#111] p-8 rounded-xl border border-stone-800 hover:border-orange-900 transition-all flex flex-col group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Users size={120} /></div>
                        <div className="flex items-center gap-4 mb-6 z-10">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center border-2 border-[#111]"><Sword size={16} className="text-blue-400" /></div>
                                <div className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center border-2 border-[#111]"><Sword size={16} className="text-red-400" /></div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-cinzel text-white mb-4 z-10">The Crossing</h3>
                        <p className="text-stone-400 text-sm leading-relaxed flex-grow z-10">
                            A Human Paladin fighting for the Horde. An Orc Shaman in the Alliance.
                            You must prove your worth to your enemy by slaughtering your own kin in the "Trial of Blood".
                        </p>
                        <div className="mt-8 pt-6 border-t border-stone-800 z-10">
                            <div className="text-xs text-stone-500 font-mono mb-2 uppercase tracking-widest">Requirements</div>
                            <ul className="space-y-1">
                                <li className="text-xs text-stone-300 flex items-center gap-2"><div className="w-1 h-1 bg-orange-500"></div>Kill 500 Players of your own faction</li>
                                <li className="text-xs text-stone-300 flex items-center gap-2"><div className="w-1 h-1 bg-orange-500"></div>Learn "Orcish" or "Common" to 300 skill</li>
                            </ul>
                        </div>
                    </div>

                    {/* Path 2: The Illidari */}
                    <div className="bg-[#111] p-8 rounded-xl border border-stone-800 hover:border-green-900 transition-all flex flex-col group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><EyeOff size={120} /></div>
                        <div className="flex items-center gap-4 mb-6 z-10">
                            <EyeOff className="text-green-500 w-10 h-10 group-hover:text-green-400 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-cinzel text-white mb-4 z-10">The Illidari</h3>
                        <p className="text-stone-400 text-sm leading-relaxed flex-grow z-10">
                            Reject both factions. Pledge your soul to Lord Illidan Stormrage.
                            You become a neutral entity, able to group with anyone but gaining access to the exclusive "Black Temple" social hub.
                        </p>
                        <div className="mt-8 pt-6 border-t border-stone-800 z-10">
                            <div className="text-xs text-stone-500 font-mono mb-2 uppercase tracking-widest">Unique Perks</div>
                            <ul className="space-y-1">
                                <li className="text-xs text-stone-300 flex items-center gap-2"><div className="w-1 h-1 bg-green-500"></div>Sanctuary in Shadowmoon Valley</li>
                                <li className="text-xs text-stone-300 flex items-center gap-2"><div className="w-1 h-1 bg-green-500"></div>Access to "Demon Hunter" Tattoos (Cosmetic)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Path 3: The Renegade */}
                    <div className="bg-[#111] p-8 rounded-xl border border-stone-800 hover:border-red-500 transition-all flex flex-col group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Fingerprint size={120} /></div>
                        <div className="flex items-center gap-4 mb-6 z-10">
                            <Fingerprint className="text-stone-400 w-10 h-10 group-hover:text-red-500 transition-colors" />
                        </div>
                        <h3 className="text-2xl font-cinzel text-white mb-4 z-10">Renegade</h3>
                        <p className="text-stone-400 text-sm leading-relaxed flex-grow z-10">
                            A life of total solitude. You are hostile to Alliance, Horde, and Shattrath.
                            You have no capital city, only the wilds. Survivors of this path are feared by all.
                        </p>
                        <div className="mt-8 pt-6 border-t border-stone-800 z-10">
                            <div className="text-xs text-stone-500 font-mono mb-2 uppercase tracking-widest">Status Effects</div>
                            <ul className="space-y-1">
                                <li className="text-xs text-red-400 flex items-center gap-2"><Skull size={10} /> Free-For-All PvP Always On</li>
                                <li className="text-xs text-red-400 flex items-center gap-2"><Target size={10} /> Bounty Mark on Map</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FEATURE: BOUNTY HUNTING */}
                <div className="max-w-5xl mx-auto bg-[#1a0f0f] border border-orange-900/30 rounded-xl p-10 relative overflow-hidden mb-20">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <Crosshair className="text-red-500 animate-spin-slow" />
                                <h3 className="text-2xl font-cinzel text-white">The Bounty Board</h3>
                            </div>
                            <p className="text-stone-400 text-sm leading-relaxed mb-6">
                                {parseBold('PvP is no longer just for honor. Players who kill too many low-level characters or Renegades who terrorize zones will be placed on the **Global Bounty Board**.')}
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 bg-black/40 p-3 rounded border border-red-900/20">
                                    <Skull className="text-stone-500 w-4 h-4" />
                                    <div className="text-xs text-stone-300">Collect <span className="text-white font-bold">"Bloody Earnings"</span> (Ears) from targets.</div>
                                </li>
                                <li className="flex items-center gap-3 bg-black/40 p-3 rounded border border-red-900/20">
                                    <Target className="text-stone-500 w-4 h-4" />
                                    <div className="text-xs text-stone-300">Track targets on the World Map if their bounty is high enough.</div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 relative h-64 w-full bg-[#0a0505] rounded border border-stone-800 p-4 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-red-600 font-cinzel text-4xl mb-2">WANTED</div>
                                <div className="w-24 h-24 bg-stone-800 mx-auto rounded-full mb-2 grayscale opacity-50 border-2 border-dashed border-stone-600"></div>
                                <div className="text-stone-500 text-xs font-mono">REWARD: 500g</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* REPUTATION DECAY CHART */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-cinzel text-center text-white mb-8">The Price of Betrayal</h3>
                    <div className="bg-[#111] border border-stone-800 rounded-lg p-6 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-stone-800 text-stone-500 text-xs uppercase tracking-wider">
                                    <th className="p-4">Action</th>
                                    <th className="p-4">Reputation Impact</th>
                                    <th className="p-4">Consequence</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-stone-300">
                                <tr className="border-b border-stone-800/50 hover:bg-white/5">
                                    <td className="p-4">Kill City Guard</td>
                                    <td className="p-4 text-red-500 font-mono">-250 Rep</td>
                                    <td className="p-4 text-stone-500">guards become hostile</td>
                                </tr>
                                <tr className="border-b border-stone-800/50 hover:bg-white/5">
                                    <td className="p-4">Kill Faction Leader</td>
                                    <td className="p-4 text-red-500 font-mono">-12,000 Rep</td>
                                    <td className="p-4 text-stone-500">Global Announcement</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="p-4">Complete "Traitor's Pact"</td>
                                    <td className="p-4 text-green-400 font-mono">+500 Rival Rep</td>
                                    <td className="p-4 text-stone-500">Unlocks Defection Quest</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ThePathOfBetrayal;
