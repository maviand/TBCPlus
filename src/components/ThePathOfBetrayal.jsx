import React, { useState } from 'react';
import {
    Sword, Shield, Swords, Users, Fingerprint, EyeOff, AlertOctagon, Skull,
    Flame, Crosshair, Target, Scroll, BookOpen, Crown, Ban, AlertTriangle,
    Construction, HelpCircle, ArrowRight, Wallet, MapPin, Search, RefreshCw, Scale
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const ThePathOfBetrayal = () => {
    const [activePath, setActivePath] = useState('crossing');
    const [openFaq, setOpenFaq] = useState(null);
    const [showRaceMatrix, setShowRaceMatrix] = useState(false);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const parseBold = (text) => text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i} className="text-orange-400 font-bold">{part.slice(2, -2)}</strong> : part
    );

    const PathTab = ({ id, label, icon: Icon, color }) => (
        <button
            onClick={() => setActivePath(id)}
            className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-all font-hero uppercase tracking-widest ${activePath === id
                ? `border-${color}-500 text-${color}-400 bg-${color}-500/5`
                : 'border-transparent text-stone-500 hover:text-stone-300 hover:bg-[#1a1c22]'
                }`}
        >
            <Icon size={18} />
            {label}
        </button>
    );

    // RACE SWAP DATA
    const raceSwaps = [
        { alliance: "Human", horde: "Orc", desc: "Versatility <-> Fury" },
        { alliance: "Dwarf", horde: "Troll", desc: "Stoneform <-> Berserking" },
        { alliance: "Night Elf", horde: "Tauren", desc: "Shadowmeld <-> War Stomp" },
        { alliance: "Gnome", horde: "Undead", desc: "Escape <-> Will of the Forsaken" },
        { alliance: "Draenei", horde: "Blood Elf", desc: "Gift of Naaru <-> Arcane Torrent" },
    ];

    return (
        <div className="min-h-screen bg-[#0a0505] text-stone-200 font-sans selection:bg-orange-900 selection:text-white overflow-x-hidden">
            <UnifiedHeader
                icon="https://i.imgur.com/4hVxkEM.jpeg"
                background={`/images/header_betrayal.png`}
                section="Faction Mechanics"
                sub="There are no sides. Only survivors."
                title="The Betrayal System"
                quote="I serve the Horde no longer. I serve only myself."
            />

            <div className="container mx-auto px-4 py-12 space-y-20">

                {/* ARCHITECT'S NOTES */}
                <div className="max-w-4xl mx-auto bg-[#1a0f0f] border-l-4 border-orange-600 p-8 rounded-r-lg shadow-lg">
                    <h3 className="flex items-center gap-3 text-orange-500 font-hero text-xl mb-4">
                        <Construction size={24} />
                        Architect's Notes
                    </h3>
                    <div className="prose prose-invert prose-sm max-w-none text-stone-400 leading-relaxed">
                        <p className="mb-4">
                            <strong>Design Philosophy:</strong> Betrayal is not a feature for the casual player. It is a <span className="text-white">"Prestige Class"</span> of gameplay.
                            It is designed to be punishing, expensive, and socially isolating until the final moment of transformation.
                        </p>
                        <p>
                            <strong>The "Scarab Lord" Comparison:</strong> Just as the Scepter of the Shifting Sands required a server-wide effort or immense personal wealth,
                            Betrayal requires weeks of dedication. You don't just "switch sides"; you must dismantle your old life brick by brick.
                        </p>
                    </div>
                </div>

                {/* PREREQUISITE: THE CODEX OF TONGUES */}
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-px bg-stone-800 w-24"></div>
                        <h2 className="text-3xl font-hero text-stone-100 text-center">The Prerequisite</h2>
                        <div className="h-px bg-stone-800 w-24"></div>
                    </div>

                    <div className="bg-[#111] border border-stone-800 rounded-xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5"><BookOpen size={200} /></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-hero text-orange-400 mb-2">The Codex of Tongues</h3>
                            <p className="text-stone-500 text-sm mb-8">Before you can betray your kin, you must understand your enemy. You cannot defect if you cannot speak to your new masters.</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Step 1 */}
                                <div className="bg-[#1a1c22] p-6 rounded border border-stone-800 flex flex-col gap-4">
                                    <div className="w-10 h-10 bg-orange-900/20 rounded-full flex items-center justify-center border border-orange-900/50 text-orange-500 font-bold">1</div>
                                    <h4 className="text-stone-300 font-bold">Loot the Rosetta Stone</h4>
                                    <p className="text-xs text-stone-500 leading-relaxed">
                                        Find the <span className="text-blue-400">[Damaged Rosetta Stone]</span>. It is a world drop (0.1% chance) from Elites in Tyr's Hand or Silithus.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-[#1a1c22] p-6 rounded border border-stone-800 flex flex-col gap-4">
                                    <div className="w-10 h-10 bg-orange-900/20 rounded-full flex items-center justify-center border border-orange-900/50 text-orange-500 font-bold">2</div>
                                    <h4 className="text-stone-300 font-bold">Decipher the Gibberish</h4>
                                    <p className="text-xs text-stone-500 leading-relaxed">
                                        Collect Language Pages scattered across the world (Enemy Capital Cities, Deep inside BWL, Rare Spawns).
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-[#1a1c22] p-6 rounded border border-stone-800 flex flex-col gap-4">
                                    <div className="w-10 h-10 bg-orange-900/20 rounded-full flex items-center justify-center border border-orange-900/50 text-orange-500 font-bold">3</div>
                                    <h4 className="text-stone-300 font-bold">Learn the Tongue</h4>
                                    <p className="text-xs text-stone-500 leading-relaxed">
                                        Reach <strong>300/300 Language Skill</strong>. You can now toggle "Understand Orcish/Common" in chat settings to hear enemy insults.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* THE THREE PATHS (TABS) */}
                <div className="max-w-6xl mx-auto">
                    <div className="flex border-b border-stone-800 mb-8 justify-center">
                        <PathTab id="crossing" label="The Crossing" icon={Swords} color="blue" />
                        <PathTab id="illidari" label="The Illidari" icon={EyeOff} color="green" />
                        <PathTab id="renegade" label="Renegade" icon={Fingerprint} color="red" />
                    </div>

                    <div className="animate-in fade-in slide-in-from-bottom-4">

                        {/* PATH 1: THE CROSSING */}
                        {activePath === 'crossing' && (
                            <div className="bg-[#111] border border-blue-900/30 rounded-xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/5 to-transparent"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-3xl font-hero text-blue-400 mb-2">The Crossing</h3>
                                            <p className="text-stone-400 italic">"For those who believe they were born on the wrong side of the war."</p>
                                        </div>
                                        <button
                                            onClick={() => setShowRaceMatrix(!showRaceMatrix)}
                                            className="px-4 py-2 bg-blue-900/20 border border-blue-500/30 rounded text-xs text-blue-300 uppercase font-bold tracking-wider hover:bg-blue-900/40 transition-colors flex items-center gap-2"
                                        >
                                            <RefreshCw size={14} /> Race Swap Matrix
                                        </button>
                                    </div>

                                    {/* RACE SWAP MATRIX */}
                                    {showRaceMatrix && (
                                        <div className="mb-8 bg-black/60 border border-blue-900/50 rounded-lg p-6 animate-in fade-in zoom-in-95">
                                            <h4 className="font-hero text-stone-300 mb-4 text-center">Transformation Logic</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                                {raceSwaps.map((swap, i) => (
                                                    <div key={i} className="bg-[#1a1c22] p-3 rounded border border-stone-800 text-center">
                                                        <div className="text-blue-400 font-bold">{swap.alliance}</div>
                                                        <div className="my-1 text-stone-600"><RefreshCw size={12} className="mx-auto" /></div>
                                                        <div className="text-red-400 font-bold">{swap.horde}</div>
                                                        <div className="mt-2 text-[10px] text-stone-500">{swap.desc}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="mt-4 text-center text-xs text-stone-500">
                                                * This process is irreversible without paying the "Renegade Tax" (20,000g).
                                            </p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div>
                                            <h4 className="font-hero text-stone-300 mb-4 border-b border-stone-800 pb-2">The Journey: Trial of Blood</h4>
                                            <ul className="space-y-6">
                                                <li className="flex gap-4">
                                                    <div className="mt-1"><Sword className="text-red-500" size={16} /></div>
                                                    <div>
                                                        <strong className="text-stone-200 block text-sm">The First Cut</strong>
                                                        <span className="text-stone-500 text-xs">Kill 500 players of your own faction using the <span className="text-white">[Shroud of the Traitor]</span> to flag hostile.</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <div className="mt-1"><Users className="text-stone-500" size={16} /></div>
                                                    <div>
                                                        <strong className="text-stone-200 block text-sm">The Offering</strong>
                                                        <span className="text-stone-500 text-xs">Sneak into your future capital (e.g. Orgrimmar) and find the "Shadowy Emissary" in the Cleft of Shadow. Deliver <span className="text-orange-400 text-xs">[Head of a High Warlord]</span>.</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <div className="mt-1"><Wallet className="text-yellow-600" size={16} /></div>
                                                    <div>
                                                        <strong className="text-stone-200 block text-sm">The Purge</strong>
                                                        <span className="text-stone-500 text-xs">Unlearn all faction mounts (converted to broken items). Repurchase new mounts at 10x cost (Trust Tax).</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <div className="mt-1"><Flame className="text-orange-500" size={16} /></div>
                                                    <div>
                                                        <strong className="text-stone-200 block text-sm">The Final Test</strong>
                                                        <span className="text-stone-500 text-xs">Complete "Burn the Banner". Slay a Guard Captain in your old capital and burn your race's banner in the throne room.</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-[#0a0a0a] border border-blue-900/20 p-6 rounded-lg">
                                            <h4 className="font-hero text-blue-400 mb-4 text-sm uppercase">The Result</h4>
                                            <ul className="space-y-4 text-sm text-stone-400">
                                                <li className="flex items-center gap-3"><Users size={14} className="text-blue-500" /> Affiliation swaps (Human &rarr; Horde).</li>
                                                <li className="flex items-center gap-3"><Target size={14} className="text-red-500" /> "Defector" icon on nameplate.</li>
                                                <li className="flex items-center gap-3"><AlertTriangle size={14} className="text-yellow-500" /> Racial Passive Lost. Gained "Untrusted": +20% Vendor Prices.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* PATH 2: THE ILLIDARI */}
                        {activePath === 'illidari' && (
                            <div className="bg-[#111] border border-green-900/30 rounded-xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-900/5 to-transparent"></div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-hero text-green-400 mb-2">The Illidari</h3>
                                    <p className="text-stone-400 italic mb-8">"Reject the petty war. Embrace the power of the Master."</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div>
                                            <h4 className="font-hero text-stone-300 mb-4 border-b border-stone-800 pb-2">The Journey: The Fel Contract</h4>
                                            <ul className="space-y-6">
                                                <li className="flex gap-4">
                                                    <div className="mt-1"><MapPin className="text-green-500" size={16} /></div>
                                                    <div>
                                                        <strong className="text-stone-200 block text-sm">The Pilgrimage</strong>
                                                        <span className="text-stone-500 text-xs">Travel to the Altar of Damnation and drink the <span className="text-green-400">[Vial of Green Fire]</span>. You die and are judged by Illidan.</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <div className="mt-1"><Ban className="text-red-500" size={16} /></div>
                                                    <div>
                                                        <strong className="text-stone-200 block text-sm">The Sacrifice</strong>
                                                        <span className="text-stone-500 text-xs">Become <strong>Hated</strong> with both Stormwind and Orgrimmar.</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <div className="mt-1"><Crown className="text-yellow-500" size={16} /></div>
                                                    <div>
                                                        <strong className="text-stone-200 block text-sm">The Tithe</strong>
                                                        <span className="text-stone-500 text-xs">Quest: "Power at Any Cost". Turn in 10x Primal Nethers, 20x Sunfury Signets, and 1x <span className="text-orange-400">[Warglaive Fragment]</span>.</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <div className="mt-1"><EyeOff className="text-green-500" size={16} /></div>
                                                    <div>
                                                        <strong className="text-stone-200 block text-sm">The Branding</strong>
                                                        <span className="text-stone-500 text-xs">Permanently lock chest slot appearance to "Illidari Tattoos".</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-[#0a0a0a] border border-green-900/20 p-6 rounded-lg">
                                            <h4 className="font-hero text-green-400 mb-4 text-sm uppercase">The Result</h4>
                                            <ul className="space-y-4 text-sm text-stone-400">
                                                <li className="flex items-center gap-3"><Users size={14} className="text-green-500" /> Neutral Faction. Can group with Horde AND Alliance.</li>
                                                <li className="flex items-center gap-3"><Crown size={14} className="text-yellow-500" /> Black Temple Sanctuary (Portals, Vendors).</li>
                                                <li className="flex items-center gap-3"><Skull size={14} className="text-red-500" /> KoS in Orgrimmar/Stormwind.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* PATH 3: RENEGADE */}
                        {activePath === 'renegade' && (
                            <div className="bg-[#111] border border-red-900/30 rounded-xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/5 to-transparent"></div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-hero text-red-500 mb-2">Renegade</h3>
                                    <p className="text-stone-400 italic mb-8">"Trust no one. Kill everyone. The world is your enemy."</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div>
                                            <h4 className="font-hero text-stone-300 mb-4 border-b border-stone-800 pb-2">The Journey: The Lone Wolf</h4>
                                            <ul className="space-y-6">
                                                <li className="flex gap-4">
                                                    <div className="mt-1"><Skull className="text-red-500" size={16} /></div>
                                                    <div>
                                                        <strong className="text-stone-200 block text-sm">The Declaration</strong>
                                                        <span className="text-stone-500 text-xs">Kill a Faction Leader (Thrall, Cairne, Bolvar, etc.).</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <div className="mt-1"><Ban className="text-stone-500" size={16} /></div>
                                                    <div>
                                                        <strong className="text-stone-200 block text-sm">The Exile</strong>
                                                        <span className="text-stone-500 text-xs">Instantly kicked from Guild. Hearthstone destroyed. Gain "Enemy of the State".</span>
                                                    </div>
                                                </li>
                                                <li className="flex gap-4">
                                                    <div className="mt-1"><MapPin className="text-yellow-600" size={16} /></div>
                                                    <div>
                                                        <strong className="text-stone-200 block text-sm">The Survivalist</strong>
                                                        <span className="text-stone-500 text-xs">Craft <span className="text-white">[Makeshift Bedroll]</span>. Allows setting Hearth anywhere in the wilderness.</span>
                                                    </div>
                                                </li>
                                            </ul>

                                            <h4 className="font-hero text-stone-300 mt-8 mb-4 border-b border-stone-800 pb-2">Mechanics of Solitude</h4>
                                            <ul className="space-y-4 text-sm text-stone-400">
                                                <li className="flex items-center gap-3"><Crosshair size={14} className="text-red-500" /> Free-For-All. Attack anyone (Alliance, Horde, Renegades).</li>
                                                <li className="flex items-center gap-3"><Wallet size={14} className="text-yellow-500" /> Goblin Guards shoot on sight (Bribe: 50g/entry).</li>
                                                <li className="flex items-center gap-3"><Users size={14} className="text-stone-500" /> Black Market Vendors in Stranglethorn/Silithus caves.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-[#0a0a0a] border border-red-900/20 p-6 rounded-lg flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-hero text-red-500 mb-4 text-sm uppercase">Perks & Loot</h4>
                                                <div className="space-y-6">
                                                    <div className="bg-[#1a0f0f] p-3 rounded border border-red-900/30">
                                                        <strong className="text-red-400 text-sm block mb-1">Passives</strong>
                                                        <p className="text-xs text-stone-500">
                                                            <span className="text-white">Adrenaline Rush:</span> +5% Run / +10% Mount Speed.<br />
                                                            <span className="text-white">Predator's Sight:</span> Track Humanoids regardless of class.
                                                        </p>
                                                    </div>
                                                    <div className="bg-[#1a0f0f] p-3 rounded border border-red-900/30">
                                                        <strong className="text-red-400 text-sm block mb-1">Bloody Ear</strong>
                                                        <p className="text-xs text-stone-500">
                                                            Looted from player kills. Currency used at Black Market dealers for High-Stamina PvP Gear.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* BOUNTY SYSTEM */}
                <div className="max-w-5xl mx-auto mt-20">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-px bg-stone-800 w-24"></div>
                        <h2 className="text-3xl font-hero text-stone-100 text-center">Justice for Hire</h2>
                        <div className="h-px bg-stone-800 w-24"></div>
                    </div>

                    <div className="bg-[#1a0f0f] border border-red-900/40 rounded-xl p-8 relative overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-hero text-red-500 mb-4">The Bounty Board</h3>
                                <p className="text-stone-400 text-sm mb-6 leading-relaxed">
                                    Located in every Capital City. The system automatically posts bounties on players with high kill streaks (10+) in specific zones.
                                </p>

                                <ul className="space-y-4">
                                    <li className="bg-black/40 p-4 rounded border-l-2 border-red-500">
                                        <div className="flex justify-between text-xs text-stone-500 mb-1 uppercase font-mono">Algorithm Example</div>
                                        <div className="text-stone-300 font-mono text-sm">"WANTED: Xxroguexx. Last seen in Nagrand. Crimes: 15 murders. Reward: 200g."</div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="bg-stone-800 p-2 rounded h-min"><Search size={16} className="text-stone-400" /></div>
                                        <div>
                                            <strong className="text-stone-200 text-sm block">The Hunt</strong>
                                            <span className="text-xs text-stone-500">Accepting a bounty grants a <span className="text-white">[Tracking Compass]</span>. Points vaguely to target (updates every 5m).</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="bg-stone-800 p-2 rounded h-min"><Wallet size={16} className="text-yellow-500" /></div>
                                        <div>
                                            <strong className="text-stone-200 text-sm block">The Payout</strong>
                                            <span className="text-xs text-stone-500">Gold from Faction Treasury + Crowdfunding. Target drops <span className="text-white">[Bounty Head]</span> to complete contract.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#0a0505] p-6 rounded border border-stone-800 text-center relative">
                                <div className="absolute top-2 right-2 text-stone-700 text-xs font-mono">ID: #8821</div>
                                <div className="w-24 h-24 bg-stone-900 rounded-full mx-auto mb-4 border-2 border-dashed border-red-900/30 flex items-center justify-center">
                                    <Fingerprint size-40 className="text-stone-700 opacity-20" />
                                </div>
                                <div className="text-red-500 font-hero text-4xl mb-2 tracking-widest">WANTED</div>
                                <div className="text-stone-300 font-bold mb-1">DEAD OR ALIVE</div>
                                <div className="text-stone-600 text-xs mb-4">CRIMES AGAINST THE GRAND MARSHAL</div>
                                <div className="py-2 px-6 bg-red-900/20 text-red-400 inline-block rounded font-mono border border-red-900/50">
                                    REWARD: 1,500g
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto mt-12 bg-[#111] rounded-xl border border-stone-800 p-6">
                    <h3 className="text-xl font-hero text-stone-300 mb-6 flex items-center gap-2">
                        <HelpCircle size={20} className="text-stone-500" /> Common Questions
                    </h3>
                    <div className="space-y-4">
                        {[
                            { q: "Can a Renegade Raid?", a: "No. Renegades are strictly solo or small 'Bandit Gang' (max 5) gameplay. They cannot enter instances unless solo. Exception: 5 Renegades can do Dungeons." },
                            { q: "Can I revert the change?", a: "Crossing: Yes, but repeat Trial of Blood. Illidari: Yes, but gain Hated with faction (weeks of cloth grind). Renegade: No. Only paid Identity Change or 20,000g bribe." },
                            { q: "How do Illidari handle loot?", a: "Illidari have their own Tier Token vendors in Black Temple to exchange Horde/Alliance tokens." }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-stone-800/50 pb-4 last:border-0 last:pb-0">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="flex items-center justify-between w-full text-left font-bold text-stone-400 hover:text-orange-400 transition-colors text-sm"
                                >
                                    {item.q}
                                    <div className={`transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>▼</div>
                                </button>
                                {openFaq === i && (
                                    <p className="mt-2 text-xs text-stone-500 leading-relaxed animate-in fade-in slide-in-from-top-1">
                                        {item.a}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ThePathOfBetrayal;
