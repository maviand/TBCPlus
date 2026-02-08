import React, { useState } from 'react';
import {
    Users, Hammer, Crown, Shield, Sword, Scroll, Zap, Star, LayoutDashboard,
    Flag, BookOpen, Map, Landmark, Coins, Anvil, Gem, Crosshair, Eye,
    X, ChevronLeft, TrendingUp, PieChart, Check, Ban
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheGuildSanctum = () => {
    const [activeTab, setActiveTab] = useState('hall');
    const [selectedDept, setSelectedDept] = useState(null); // 'treasury', 'war_room', 'recruitment'

    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i} className="mb-4 text-gray-400 leading-relaxed font-body">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-white font-bold">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    const tabs = [
        { id: 'hall', label: 'The Great Hall', icon: <Crown size={16} /> },
        { id: 'departments', label: 'Departments', icon: <LayoutDashboard size={16} /> },
        { id: 'workshops', label: 'Workshops', icon: <Hammer size={16} /> },
        { id: 'talents', label: 'Guild Talents', icon: <Shield size={16} /> },
    ];

    const content = {
        hall: {
            title: "The Heart of the Guild",
            desc: "The Guild Sanctum is not just a UI menu; it is a physical location within the game world, instanced for your guild. It is where you plan raids, display trophies, and coordinate your war effort against the Legion.",
            features: [
                {
                    title: "Customizable Architecture",
                    image: "https://i.imgur.com/u5rDQIs.jpeg",
                    icon: <Landmark className="w-6 h-6 text-amber-500" />,
                    desc: "**Choose Your Legacy:** \nTransform your Sanctum's aesthetic to match your guild's identity. From the **Crystal Spires of Karabor** to the **Iron Bulwarks of the Horde**, every wall and pillar can be customized. \n\n**Visual Progression:** \nAs your guild levels up, the hall evolves. Tattered banners are replaced by silk tapestries; wooden chairs become thrones of obsidian."
                },
                {
                    title: "The Trophy Room",
                    image: "https://i.imgur.com/mOkInZc.jpeg",
                    icon: <Crown className="w-6 h-6 text-yellow-500" />,
                    desc: "**A Monument to Victory:** \nEvery major raid boss defeat yields a trophy. Mount the **Head of Magtheridon** on a pike, or display the **Warglaives of Azzinoth** in a glass stasis case. \n\n**Interactive History:** \nClicking on a trophy plays a cinematic replay of your guild's first kill of that boss, complete with voice comms if recorded."
                },
                {
                    title: "The War Table",
                    image: "https://i.imgur.com/gBM49rp.jpeg",
                    icon: <Map className="w-6 h-6 text-red-500" />,
                    desc: "**Strategic Command:** \nA fully interactive 3D map of Outland. Officers can draw raid routes, mark world PvP objectives, and assign guild squads to specific zones. \n\n**The Calendar:** \nIntegrated directly into the table, allowing you to schedule events that push notifications to members' mobile companion apps."
                }
            ]
        },
        departments: [
            {
                id: "treasury",
                name: "The Treasury",
                icon: <img src="https://i.imgur.com/ZEH6wQW.jpeg" alt="Treasury Icon" className="w-10 h-10 object-cover rounded-full border border-amber-500/50" />,
                image: "https://i.imgur.com/nXlKzuW.jpeg",
                desc: "**The Iron Vault:** \nSee your guild's wealth physically piled in gold bars. \n\n**Taxation:** \nAuto-collect 5% of raw gold from boss kills to fund repairs. \n\n**Ledger:** \nA transparent transaction log of every copper deposited or withdrawn, audit-proof and real-time."
            },
            {
                id: "war_room",
                name: "The War Room",
                icon: <img src="https://i.imgur.com/jmOfCEE.jpeg" alt="War Room Icon" className="w-10 h-10 object-cover rounded-full border border-red-500/50" />,
                image: "https://i.imgur.com/UMW1dn9.jpeg",
                desc: "**Raid Planner:** \nDrag-and-drop roster management. Set bench warmers, assign healing assignments, and loot priorities before the raid invites go out. \n\n**Combat Analysis:** \nAccess built-in damage meters and death logs for recent guild runs, projected on the wall screens."
            },
            {
                id: "recruitment",
                name: "Recruitment",
                icon: <img src="https://i.imgur.com/Wjki929.jpeg" alt="Recruitment Icon" className="w-10 h-10 object-cover rounded-full border border-blue-500/50" />,
                image: "https://i.imgur.com/lfDrMx1.jpeg", // Using previous image
                desc: "**Guild Finder 2.0:** \nApplicants appear as dossiers on the desk. View their gearscore, logs, and past guild history in one click. \n\n**Trial Status:** \nAuto-assign 'Trial' rank to new joins, restricting their access to the bank until a probation period ends."
            },
            {
                id: "academy",
                name: "The Academy",
                icon: <img src="https://i.imgur.com/GzBwJ9h.png" alt="Academy Icon" className="w-10 h-10 object-cover rounded-full border border-green-500/50" />,
                image: "https://i.imgur.com/L13U3nF.jpeg",
                desc: "**Mentoring Program:** \nMax-level players can 'downscale' their level to group with low-level guildies. \n\n**Rewards:** \nMentors earn 'Tokens of Guidance' to buy cosmetic transmogs and mounts. \n\n**Training Grounds:** \nInstanced scenarios where veterans can teach mechanics (tank swapping, interrupt rotations) to new recruits."
            },
            {
                id: "lfg",
                name: "LFG Command",
                icon: <img src="https://i.imgur.com/ZnHjH9h.png" alt="LFG Icon" className="w-10 h-10 object-cover rounded-full border border-orange-500/50" />,
                image: "https://i.imgur.com/9wX9X9h.jpeg",
                desc: "**The Bulletin Board:** \nA visually immersive LFG tool. Post your 'Job Listing' (Dungeon Group) with specific requirements. \n\n**Bounty Hunts:** \nWeekly realm-wide targets posted here. 'Kill 50 Alliance in Nagrand' or 'Slay the World Boss Doom Lord Kazzak'."
            }
        ],
        workshops: [
            {
                name: "Aldor Alchemy Lab",
                tier: "Tier 3",
                icon: <Zap className="w-8 h-8 text-purple-500" />,
                image: "https://i.imgur.com/3jYrQGp.png",
                desc: "**Passive:** Flasks crafted here have a 20% chance to duplicate. \n**Active:** **[Cauldron of Battle]** - Place a cauldron in the raid that grants flasks to 25 players."
            },
            {
                name: "Scryer Enchanting Sanctum",
                tier: "Tier 2",
                icon: <Star className="w-8 h-8 text-cyan-500" />,
                image: "https://i.imgur.com/yxPi2Ay.png",
                desc: "**Passive:** Disenchanting yields +1 dust/essence per item. \n**Active:** **[Crystal of Clarity]** - Apply a 2-hour weapon oil to all raid members instantly."
            },
            {
                name: "Goblin Engineering Works",
                tier: "Tier 1",
                icon: <Hammer className="w-8 h-8 text-orange-500" />,
                image: "https://i.imgur.com/paB7FKD.png",
                desc: "**Passive:** Repair costs reduced by 20% for guild members. \n**Active:** **[Jeeves Mk. II]** - Summons a guild bank/repair bot that lasts 1 hour."
            },
            {
                name: "Ironforge Anvil (Blacksmithing)",
                tier: "Tier 2",
                icon: <Anvil className="w-8 h-8 text-gray-400" />,
                image: "https://i.imgur.com/Prhz9Nt.png",
                desc: "**Passive:** Durability loss reduced by 10%. \n**Active:** **[Whetstone Station]** - Sharpen weapons for the whole raid (+10 Weapon Damage)."
            },
            {
                name: "Ethereal Gem Press (Jewelcrafting)",
                tier: "Tier 3",
                icon: <Gem className="w-8 h-8 text-emerald-400" />,
                image: "https://i.imgur.com/fsUdp1l.png",
                desc: "**Passive:** Prospecting ore has a chance to find Epic Gems. \n**Active:** **[Focusing Lens]** - Allows recrafting of gems in socketed gear without destroying them."
            },
            {
                name: "Netherweave Loom (Tailoring)",
                tier: "Tier 1",
                icon: <Scroll className="w-8 h-8 text-indigo-400" />,
                image: "https://i.imgur.com/SbcisVa.png",
                desc: "**Passive:** Cloth drops increased by 15% for guild members. \n**Active:** **[Banner of High morale]** - Place a banner granting +5% Movement Speed to the raid."
            }
        ],

    };

    const TreasuryDashboard = () => (
        <div className="bg-[#111] p-8 rounded-xl border border-amber-900/30 animate-in fade-in slide-in-from-right">
            <h3 className="text-2xl font-hero text-amber-500 mb-6 flex items-center gap-3"><Coins /> The Vault Ledger</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#0a0a0a] p-4 rounded border border-white/5">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Total Assets</div>
                    <div className="text-2xl font-mono text-[#ffd700] font-bold">452,981g 40s 95c</div>
                </div>
                <div className="bg-[#0a0a0a] p-4 rounded border border-white/5">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Weekly Income</div>
                    <div className="text-xl font-mono text-green-400 font-bold flex items-center gap-2"><TrendingUp size={16} /> +12,450g</div>
                </div>
                <div className="bg-[#0a0a0a] p-4 rounded border border-white/5">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Tax Rate</div>
                    <div className="flex items-center gap-2">
                        <input type="range" min="0" max="15" defaultValue="5" className="w-full accent-amber-500" />
                        <span className="font-mono text-amber-500 font-bold">5%</span>
                    </div>
                </div>
            </div>

            <div className="bg-[#0a0a0a] rounded border border-white/5 overflow-hidden">
                <div className="px-4 py-2 bg-white/5 text-xs text-gray-400 uppercase tracking-widest font-bold">Recent Transactions</div>
                <div className="divide-y divide-white/5">
                    {[
                        { user: "Kungen", action: "Deposit", amount: "+500g", time: "10 mins ago" },
                        { user: "Athene", action: "Repair", amount: "-42g 50s", time: "1 hour ago" },
                        { user: "Nihilum", action: "Withdraw", amount: "-2000g", time: "1 day ago" },
                        { user: "Taxman", action: "Guild Tax", amount: "+154g", time: "Yesterday" },
                    ].map((tx, i) => (
                        <div key={i} className="px-4 py-3 flex justify-between items-center text-sm hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-gray-300">{tx.user}</span>
                                <span className="text-gray-500 italic">{tx.action}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-gray-600 text-xs">{tx.time}</span>
                                <span className={`font-mono font-bold ${tx.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{tx.amount}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const RecruitmentDashboard = () => (
        <div className="bg-[#111] p-8 rounded-xl border border-blue-900/30 animate-in fade-in slide-in-from-right">
            <h3 className="text-2xl font-hero text-blue-500 mb-6 flex items-center gap-3"><Users /> Talent Acquisition</h3>

            <div className="space-y-4">
                {[
                    { name: "Legolazz", class: "Hunter", spec: "Beast Mastery", ilvl: 115, role: "DPS", status: "Pending" },
                    { name: "Healbot", class: "Priest", spec: "Holy", ilvl: 120, role: "Healer", status: "Pending" },
                    { name: "Beefcake", class: "Warrior", spec: "Protection", ilvl: 118, role: "Tank", status: "Pending" }
                ].map((app, i) => (
                    <div key={i} className="bg-[#0a0a0a] p-4 rounded border border-white/5 flex items-center justify-between group hover:border-blue-500/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded bg-stone-800 flex items-center justify-center font-bold text-lg">{app.name[0]}</div>
                            <div>
                                <h4 className="font-bold text-white">{app.name}</h4>
                                <p className="text-xs text-gray-500">{app.ilvl} iLvl • {app.spec} {app.class}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 bg-green-900/20 text-green-500 border border-green-900/50 rounded hover:bg-green-900/40" title="Accept"><Check size={16} /></button>
                            <button className="p-2 bg-red-900/20 text-red-500 border border-red-900/50 rounded hover:bg-red-900/40" title="Reject"><Ban size={16} /></button>
                        </div>
                    </div>
                ))}
                <div className="text-center pt-4">
                    <button className="text-blue-500 text-sm hover:underline">View Archived Applications</button>
                </div>
            </div>
        </div>
    );

    const WarRoomDashboard = () => (
        <div className="bg-[#111] p-8 rounded-xl border border-red-900/30 animate-in fade-in slide-in-from-right">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-hero text-red-500 flex items-center gap-3"><Sword /> Raid Strategy</h3>
                <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs bg-red-900/30 text-red-400 border border-red-900/50 rounded uppercase font-bold">Karazhan</button>
                    <button className="px-3 py-1 text-xs bg-[#1a1a1a] text-gray-500 border border-white/10 rounded uppercase font-bold hover:text-white">Gruul</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h4 className="text-gray-400 text-sm uppercase tracking-widest border-b border-white/10 pb-2">Roster Composition</h4>
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1 bg-[#0a0a0a] p-3 rounded border border-white/5 text-center">
                            <span className="block text-xl font-bold text-blue-400">2</span>
                            <span className="text-[10px] text-gray-600 uppercase">Tanks</span>
                        </div>
                        <div className="flex-1 bg-[#0a0a0a] p-3 rounded border border-white/5 text-center">
                            <span className="block text-xl font-bold text-green-400">3</span>
                            <span className="text-[10px] text-gray-600 uppercase">Healers</span>
                        </div>
                        <div className="flex-1 bg-[#0a0a0a] p-3 rounded border border-white/5 text-center">
                            <span className="block text-xl font-bold text-red-400">5</span>
                            <span className="text-[10px] text-gray-600 uppercase">DPS</span>
                        </div>
                    </div>
                    <div className="bg-[#2a1a1a] p-4 rounded border border-red-900/20">
                        <h5 className="text-red-400 font-bold text-xs uppercase mb-2">Priority Targets</h5>
                        <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                            <li>Interrupt <strong>Dark Mending</strong></li>
                            <li>Kill <strong>Nether Portals</strong> ASAP</li>
                            <li>Kite <strong>Infernals</strong> to West wall</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] border border-white/5 rounded p-4 h-64 flex items-center justify-center relative overflow-hidden group">
                    {/* Placeholder Map */}
                    <img src="https://i.imgur.com/gBM49rp.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" />
                    <button className="relative z-10 px-6 py-2 bg-red-600 hover:bg-red-500 text-white font-hero uppercase tracking-widest rounded shadow-xl">Open Tactical Map</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
                .font-hero { font-family: 'Cinzel', serif; }
                .font-body { font-family: 'Lato', sans-serif; }
                .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .tooltip-text strong { color: #ffd100; text-shadow: 0 1px 2px rgba(0,0,0,0.8); }
            `}</style>

            <UnifiedHeader
                icon={<img src="https://i.imgur.com/7Ymv7GV.jpeg" className="w-12 h-12 rounded object-cover border border-[#c29c55]/30 shadow-lg" />}
                background="https://i.imgur.com/eipXiZ4.jpeg"
                section="Social Systems"
                sub="Build Your Legacy"
                title="The Guild Sanctum"
                quote="A home for heroes, forged in the fires of brotherhood."
            />

            <div className="container mx-auto px-4 py-8">
                {/* TABS (Hidden when viewing detail) */}
                <div className={`flex justify-center gap-4 mb-12 border-b border-white/10 pb-4 transition-opacity duration-300 ${selectedDept ? 'opacity-0 pointer-events-none h-0 p-0 m-0 overflow-hidden' : 'opacity-100'}`}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-2 rounded-t-lg transition-all ${activeTab === tab.id
                                ? 'bg-amber-900/20 text-amber-500 border-b-2 border-amber-500'
                                : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            {tab.icon}
                            <span className="font-hero tracking-widest text-sm uppercase">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* CONTENT */}
                <div className="animate-fade-in max-w-6xl mx-auto">

                    {/* SHOW DASHBOARD IF SELECTED */}
                    {selectedDept ? (
                        <div>
                            <button
                                onClick={() => setSelectedDept(null)}
                                className="mb-6 flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
                            >
                                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Departments
                            </button>

                            {selectedDept === 'treasury' && <TreasuryDashboard />}
                            {selectedDept === 'war_room' && <WarRoomDashboard />}
                            {selectedDept === 'recruitment' && <RecruitmentDashboard />}
                            {/* Fallback for others not implemented yet */}
                            {!['treasury', 'war_room', 'recruitment'].includes(selectedDept) && (
                                <div className="p-12 text-center text-gray-500 italic border border-white/5 rounded-xl bg-[#111]">
                                    Access Terminal Offline (Work in Progress)
                                </div>
                            )}

                        </div>
                    ) : (
                        <>
                            {activeTab === 'hall' && (
                                <div className="space-y-16">
                                    <div className="text-center max-w-4xl mx-auto mb-12">
                                        <h3 className="font-hero text-3xl text-[#f0e6d2] mb-4">{content.hall.title}</h3>
                                        <p className="text-[#aeb6bf] text-lg leading-relaxed">{content.hall.desc}</p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-12">
                                        {content.hall.features.map((feature, i) => (
                                            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-[#0a0a0a] p-6 rounded-xl border border-white/5 hover:border-amber-500/30 transition-all shadow-2xl group`}>
                                                <div className="w-full md:w-1/2 overflow-hidden rounded-lg relative">
                                                    <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                                                    <img src={feature.image} alt={feature.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                                </div>
                                                <div className="w-full md:w-1/2 space-y-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-amber-900/20 rounded text-amber-500">{feature.icon}</div>
                                                        <h4 className="font-hero text-2xl text-amber-500">{feature.title}</h4>
                                                    </div>
                                                    <div className="text-gray-300 leading-relaxed">
                                                        {formatText(feature.desc)}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'departments' && (
                                <div className="space-y-8">
                                    <div className="text-center mb-8">
                                        <h3 className="font-hero text-2xl text-gray-400 uppercase tracking-widest">Command Departments</h3>
                                        <p className="text-sm text-gray-600">Select a department to access its terminal</p>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        {content.departments.map((dept, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => setSelectedDept(dept.id)}
                                                className="bg-[#111] rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all group flex flex-col h-full cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02]"
                                            >
                                                <div className="relative h-48 overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10"></div>
                                                    <img src={dept.image} alt={dept.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                                                        <div className="bg-black/80 p-2 rounded-full border border-white/20 text-amber-500 shadow-lg group-hover:text-white group-hover:bg-amber-500 transition-colors">
                                                            {dept.icon}
                                                        </div>
                                                        <h3 className="font-hero text-xl text-white drop-shadow-md">{dept.name}</h3>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex-grow bg-[#151515]">
                                                    <div className="text-sm text-gray-400 leading-relaxed tooltip-text">
                                                        {formatText(dept.desc)}
                                                    </div>
                                                </div>
                                                <div className="p-4 bg-[#0a0a0a] border-t border-white/5 text-center group-hover:bg-amber-900/10 transition-colors">
                                                    <span className="text-xs font-hero text-amber-500/50 uppercase tracking-widest group-hover:text-amber-500 transition-colors flex justify-center items-center gap-2">
                                                        Access Terminal <ChevronLeft className="rotate-180" size={12} />
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'workshops' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {content.workshops.map((shop, idx) => (
                                        <div key={idx} className="bg-[#111] p-1 rounded-lg border border-white/10 hover:border-amber-500/50 transition-all group">
                                            <div className="bg-[#151515] p-6 h-full rounded flex items-start gap-4">
                                                <div className="shrink-0 flex flex-col items-center gap-2">
                                                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/20 shadow-lg relative group-hover:border-amber-500 transition-colors">
                                                        <img src={shop.image} alt={shop.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${shop.tier === 'Tier 3' ? 'border-purple-500/30 text-purple-400 bg-purple-900/20' : 'border-blue-500/30 text-blue-400 bg-blue-900/20'}`}>
                                                        {shop.tier}
                                                    </span>
                                                </div>
                                                <div className="grow">
                                                    <div className="flex justify-between items-start mb-3">
                                                        <h3 className="font-hero text-lg text-white group-hover:text-amber-500 transition-colors">{shop.name}</h3>
                                                        {shop.icon}
                                                    </div>
                                                    <div className="text-xs text-gray-400 space-y-2 tooltip-text font-body p-3 bg-[#0a0a0a] rounded border border-white/5 shadow-inner">
                                                        {formatText(shop.desc)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'talents' && (
                                <GuildPerkTree />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );

};


const GuildPerkTree = () => {
    const [selectedPerk, setSelectedPerk] = useState(null);

    const paths = {
        dominion: {
            id: 'dominion',
            name: 'Path of Dominion',
            color: 'text-red-500',
            borderColor: 'border-red-500',
            bgGradient: 'from-red-900/40 to-black',
            icon: <Shield className="w-6 h-6" />,
            desc: "Control. Territory. Enforcing the Guild's will upon the world.",
            nodes: [
                // Tier 1
                { id: 'd1', maxRanks: 1, tier: 1, col: 2, name: 'The Long March', icon: <Flag />, desc: "Passive. Your guild's mounted movement speed is increased by 10% in all contested territories and Battlegrounds. 'The legion moves as one, swift and terrible.'" },
                // Tier 2
                { id: 'd2_new', maxRanks: 3, tier: 2, col: 1, name: 'Siegebreaker', icon: <Hammer />, desc: "Passive. Your guild deals 15% increased damage to destructible buildings and siege vehicles. 'Walls are merely suggestions to those with enough force.'" },
                { id: 'd2', maxRanks: 3, tier: 2, col: 3, name: 'Vigilance', icon: <Eye />, desc: "Passive. Towers and bases captured by your guild grant 'True Sight' to all nearby members, revealing stealth units within 100 yards. 'Nothing escapes the watchful eye of the conqueror.'" },
                // Tier 3
                { id: 'd3_new', maxRanks: 3, tier: 3, col: 1, name: 'Bounty Hunter', icon: <Crosshair />, desc: "Passive. Looting enemy players in World PvP now grants 'Spoils of War', containing gold and consumables. 'Every head has a price. Collect them all.'" },
                { id: 'd3', maxRanks: 3, tier: 3, col: 3, name: 'Iron Tithe', icon: <Coins />, desc: "Passive. Honorable Kills grant 10 Silver directly to the Guild Bank. 'War is expensive. Make the enemy pay for it.'" },
                // Tier 4
                { id: 'd4', maxRanks: 1, tier: 4, col: 2, name: 'Warlord\'s Decree', icon: <Scroll />, desc: "Passive. The cooldown on your Guild Standard is reduced by 50%, and its range is doubled. 'Raise the banner. Let them know death has arrived.'" },
            ]
        },
        prosperity: {
            id: 'prosperity',
            name: 'Path of Prosperity',
            color: 'text-amber-500',
            borderColor: 'border-amber-500',
            bgGradient: 'from-amber-900/40 to-black',
            icon: <Coins className="w-6 h-6" />,
            desc: "Wealth. Logistics. The golden artery of the war effort.",
            nodes: [
                // Tier 1
                { id: 'p1', maxRanks: 1, tier: 1, col: 2, name: 'Market Savvy', icon: <Gem />, desc: "Passive. The Auction House deposit fee is removed, and the sales cut is reduced by 50% for all guild members. 'Margins matter. Every copper counts.'" },
                // Tier 2
                { id: 'p2_new', maxRanks: 3, tier: 2, col: 1, name: 'Mercantile Network', icon: <Map />, desc: "Passive. Vendors recognize your guild's influence, reducing the cost of all goods and repairs by 15%. 'We have friends in high places. And low ones.'" },
                { id: 'p2', maxRanks: 3, tier: 2, col: 3, name: 'Bulk Logistics', icon: <Anvil />, desc: "Passive. Crafting items takes 50% less time, and you have a 10% chance to save rare reagents. 'Infinity efficiency. Zero waste.'" },
                // Tier 3
                { id: 'p3_new', maxRanks: 3, tier: 3, col: 1, name: 'Salvage Operations', icon: <Hammer />, desc: "Passive. Disenchanting items or prospecting ore yields 15% more materials. 'One man's trash is our treasury's treasure.'" },
                { id: 'p3', maxRanks: 3, tier: 3, col: 3, name: 'Aetherium Attunement', icon: <Zap />, desc: "Passive. Mining, herbalism, and skinning have a chance to grant 'Motes of Energy', which can be traded to the guild bank. ' The land itself capitulates to our greed.'" },
                // Tier 4
                { id: 'p4', maxRanks: 1, tier: 4, col: 2, name: 'Golden Age', icon: <Crown />, desc: "Passive. If the Guild Bank holds over 50,000 Gold, all members gain 'Guild Subsidies', making repairs completely free. 'We have entered an era of unbridled affluence.'" },
            ]
        },
        conquest: {
            id: 'conquest',
            name: 'Path of Conquest',
            color: 'text-purple-500',
            borderColor: 'border-purple-500',
            bgGradient: 'from-purple-900/40 to-black',
            icon: <Sword className="w-6 h-6" />,
            desc: "Glory. Slaying Gods. Living and dying by the raid lockout.",
            nodes: [
                // Tier 1
                { id: 'c1', maxRanks: 1, tier: 1, col: 2, name: 'Felweaver\'s Forge', icon: <Hammer />, desc: "Passive. You can repair your equipment inside any Raid or Dungeon instance without a bot. 'Maintenance is the difference between a wipe and a kill.'" },
                // Tier 2
                { id: 'c2_new', maxRanks: 3, tier: 2, col: 1, name: 'Trash Thrasher', icon: <Crosshair />, desc: "Passive. Your guild deals 10% increased damage to all non-boss enemies in Raid instances. 'Clear the chaff. The master awaits.'" },
                { id: 'c2', maxRanks: 3, tier: 2, col: 3, name: 'Slayer\'s Insight', icon: <BookOpen />, desc: "Passive. Damage against Raid Bosses is increased by 1%. 'Study the prey. Find the weakness. Strike.'" },
                // Tier 3
                { id: 'c3_new', maxRanks: 3, tier: 3, col: 1, name: 'Speed of Light', icon: <Zap />, desc: "Passive. After wiping on a raid boss, all members gain 50% movement speed for 2 minutes to run back. 'Fall down seven times, stand up eight. Quickly.'" },
                { id: 'c3', maxRanks: 3, tier: 3, col: 3, name: 'Vanguard Synergy', icon: <Users />, desc: "Passive. The raid gains one global 'Soulstone' charge per encounter, allowing an instant combat resurrection on any member. 'Death is a minor inconvenience.'" },
                // Tier 4
                { id: 'c4', maxRanks: 1, tier: 4, col: 2, name: 'Titan\'s Grip', icon: <Star />, desc: "Passive. Guild Flasks and Food buffs persist through death inside raid instances. 'The power of the titans does not fade so easily.'" },
            ]
        }
    };

    return (
        <div className="flex flex-col gap-12 animate-fade-in min-h-[800px]">
            {/* INTRO TEXT */}
            <div className="text-center max-w-3xl mx-auto">
                <p className="font-body text-gray-400 italic">
                    "A guild is more than a list of names. It is a living organism that evolves, adapts, and grows in power. Choose your path wisely."
                </p>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {Object.values(paths).map((path) => (
                    <div key={path.id} className="relative bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all flex flex-col">
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-b ${path.bgGradient} opacity-20 pointer-events-none`}></div>

                        {/* Header */}
                        <div className="relative p-6 border-b border-white/5 bg-black/20 text-center z-10">
                            <div className={`w-14 h-14 mx-auto rounded-full border-2 ${path.borderColor} flex items-center justify-center bg-[#111] shadow-[0_0_20px_rgba(0,0,0,0.5)] mb-3 text-white`}>
                                <div className={`${path.color} scale-125`}>{path.icon}</div>
                            </div>
                            <h3 className={`font-hero text-lg ${path.color} tracking-widest uppercase`}>{path.name}</h3>
                            <p className="text-xs text-gray-500 font-body mt-2 h-8">{path.desc}</p>
                        </div>

                        {/* TREE CONTAINER */}
                        <div className="relative p-8 flex-grow flex justify-center items-center">
                            {/* SVG Connectors */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{ zIndex: 0 }}>
                                <defs>
                                    <linearGradient id={`grad-${path.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="gray" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="white" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                                <line x1="50%" y1="15%" x2="25%" y2="38%" stroke={`url(#grad-${path.id})`} strokeWidth="2" />
                                <line x1="50%" y1="15%" x2="75%" y2="38%" stroke={`url(#grad-${path.id})`} strokeWidth="2" />
                                <line x1="25%" y1="38%" x2="25%" y2="62%" stroke={`url(#grad-${path.id})`} strokeWidth="2" />
                                <line x1="75%" y1="38%" x2="75%" y2="62%" stroke={`url(#grad-${path.id})`} strokeWidth="2" />
                                <line x1="25%" y1="62%" x2="50%" y2="85%" stroke={`url(#grad-${path.id})`} strokeWidth="2" />
                                <line x1="75%" y1="62%" x2="50%" y2="85%" stroke={`url(#grad-${path.id})`} strokeWidth="2" />
                            </svg>

                            {/* NODES GRID */}
                            <div className="relative w-full h-[400px]">
                                {path.nodes.map((node) => {
                                    const topPos = { 1: '5%', 2: '30%', 3: '55%', 4: '80%' }[node.tier];
                                    let cssLeft = '50%';
                                    if (node.col === 1) cssLeft = '20%';
                                    if (node.col === 2) cssLeft = '50%';
                                    if (node.col === 3) cssLeft = '80%';

                                    return (
                                        <div
                                            key={node.id}
                                            className="absolute transform -translate-x-1/2"
                                            style={{ top: topPos, left: cssLeft, zIndex: 10 }}
                                        >
                                            <button
                                                onClick={() => setSelectedPerk({ ...node, color: path.color, borderColor: path.borderColor })}
                                                className={`
                                                    w-12 h-12 rounded bg-[#1a1a1a] border-2 flex items-center justify-center transition-all duration-300
                                                    ${selectedPerk?.id === node.id
                                                        ? `${path.borderColor} shadow-[0_0_20px_currentColor] scale-125 z-20`
                                                        : 'border-white/10 hover:border-white/40 hover:scale-110'
                                                    }
                                                `}
                                            >
                                                <div className={`${selectedPerk?.id === node.id ? path.color : 'text-gray-500'} transition-colors`}>
                                                    {React.cloneElement(node.icon, { size: 20 })}
                                                </div>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* DETAILS PANEL (Fixed Bottom) */}
            <div className={`fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-amber-900/30 p-8 transform transition-transform duration-500 z-50 ${selectedPerk ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="container mx-auto flex items-start gap-8 relative">
                    <button
                        onClick={() => setSelectedPerk(null)}
                        className="absolute top-0 right-0 text-gray-500 hover:text-white"
                    >
                        ✕
                    </button>

                    {selectedPerk && (
                        <>
                            <div className={`w-20 h-20 rounded border-2 ${selectedPerk.borderColor} bg-black flex items-center justify-center shrink-0`}>
                                <div className={`${selectedPerk.color}`}>{React.cloneElement(selectedPerk.icon, { size: 40 })}</div>
                            </div>
                            <div>
                                <h3 className={`font-hero text-2xl ${selectedPerk.color} mb-2`}>{selectedPerk.name}</h3>
                                <p className="font-body text-gray-300 text-lg max-w-4xl leading-relaxed">
                                    {selectedPerk.desc}
                                </p>
                                <div className="mt-4 flex gap-4">
                                    <span className="text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded text-gray-500 border border-white/10">Rank {selectedPerk.maxRanks}/{selectedPerk.maxRanks}</span>
                                    <span className="text-xs uppercase tracking-widest bg-white/5 px-3 py-1 rounded text-gray-500 border border-white/10">Passive Guild Perk</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {selectedPerk && <div className="h-40"></div>}
        </div>
    );
};

export default TheGuildSanctum;
