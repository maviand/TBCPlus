import React, { useState } from 'react';
import { Users, Hammer, Crown, Shield, Sword, Scroll, Zap, Star, Layout, Flag, BookOpen, Clock, Map, Landmark, Coins, Anvil, Gem, Crosshair } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheGuildSanctum = () => {
    const [activeTab, setActiveTab] = useState('hall');

    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i} className="mb-4 text-gray-400 leading-relaxed">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-white">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    const tabs = [
        { id: 'hall', label: 'The Great Hall', icon: <Crown size={16} /> },
        { id: 'departments', label: 'Departments', icon: <Layout size={16} /> },
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
                name: "The Treasury",
                icon: <img src="https://i.imgur.com/ZEH6wQW.jpeg" alt="Treasury Icon" className="w-10 h-10 object-cover rounded-full border border-amber-500/50" />,
                image: "https://i.imgur.com/nXlKzuW.jpeg",
                desc: "**The Iron Vault:** \nSee your guild's wealth physically piled in gold bars. \n\n**Taxation:** \nAuto-collect 5% of raw gold from boss kills to fund repairs. \n\n**Ledger:** \nA transparent transaction log of every copper deposited or withdrawn, audit-proof and real-time."
            },
            {
                name: "The War Room",
                icon: <img src="https://i.imgur.com/jmOfCEE.jpeg" alt="War Room Icon" className="w-10 h-10 object-cover rounded-full border border-red-500/50" />,
                image: "https://i.imgur.com/UMW1dn9.jpeg",
                desc: "**Raid Planner:** \nDrag-and-drop roster management. Set bench warmers, assign healing assignments, and loot priorities before the raid invites go out. \n\n**Combat Analysis:** \nAccess built-in damage meters and death logs for recent guild runs, projected on the wall screens."
            },
            {
                name: "Recruitment",
                icon: <img src="https://i.imgur.com/Wjki929.jpeg" alt="Recruitment Icon" className="w-10 h-10 object-cover rounded-full border border-blue-500/50" />,
                image: "https://i.imgur.com/lfDrMx1.jpeg",
                desc: "**Guild Finder 2.0:** \nApplicants appear as dossiers on the desk. View their gearscore, logs, and past guild history in one click. \n\n**Trial Status:** \nAuto-assign 'Trial' rank to new joins, restricting their access to the bank until a probation period ends."
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
        talents: {
            title: "The Guild Canvas",
            desc: "A modular talent tree. Earn Accord Points (AP) to specialize your community into a military force, an economic empire, or a band of god-slayers.",
            features: [
                {
                    name: "Path of Dominion",
                    icon: <Shield className="w-8 h-8 text-red-600 relative z-10" />,
                    bgImage: "https://i.imgur.com/ToWzcqR.jpeg",
                    summary: "A doctrine of absolute control. Guilds that walk this path are the enforcers of their faction's will.",
                    detail: "**Focus:** World PvP, Holding Territory, & Crowd Control. \n\n**Talents:** \n**The Long March:** Your crusades never tire. Mount speed increased by 10% in contested zones, allowing for rapid redeployment. \n**Vigilance:** The eyes of the guild are everywhere. Captured towers reveal stealth units within 100 yards, preventing ninja-caps. \n**Iron Tithe:** War requires funding. Every honorable kill grants 5 silver directly to the Guild Bank."
                },
                {
                    name: "Path of Prosperity",
                    icon: <Coins className="w-8 h-8 text-yellow-500 relative z-10" />,
                    bgImage: "https://i.imgur.com/mHJaXnG.jpeg",
                    summary: "The golden artery of the war effort. These guilds understand that gold is sharper than steel.",
                    detail: "**Focus:** Economy, Crafting, & Logistics. \n\n**Talents:** \n**Market Savvy:** Insider trading. Auction House cuts are reduced by 50% for all members. \n**Aetherium Attunement:** Tapping into the leylines. Crafting criticals spawn a 'Mote of Pure Energy' that can be traded or sold. \n**Bulk Logistics:** Industrial scale efficiency. Crafting actions are 50% faster and have a chance to not consume reagents."
                },
                {
                    name: "Path of Conquest",
                    icon: <Crosshair className="w-8 h-8 text-purple-500 relative z-10" />,
                    bgImage: "https://i.imgur.com/mDQcmb4.jpeg",
                    summary: "For those who seek to dethrone gods. Conquest guilds live and die by the raid lockout.",
                    detail: "**Focus:** Raiding, Dungeon Speed, & Boss Slaying. \n\n**Talents:** \n**Felweaver's Forge:** A pocket dimension anvil. Repair costs reduced by 20% and can repair inside instances. \n**Slayer's Insight:** Knowledge is power. Damage against Raid Bosses increased by 1%. \n**Warband Synergy:** The bond of brothers. If a raid member dies, they can be combat-resurrected instantly once per fight without counting towards the druid limit."
                }
            ]
        }
    };

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
                icon={<Crown />}
                background="https://i.imgur.com/eipXiZ4.jpeg"
                section="Social Systems"
                sub="Build Your Legacy"
                title="The Guild Sanctum"
                quote="A home for heroes, forged in the fires of brotherhood."
            />

            <div className="container mx-auto px-4 py-8">
                {/* TABS */}
                <div className="flex justify-center gap-4 mb-12 border-b border-white/10 pb-4">
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
                                <p className="text-sm text-gray-600">Administrative tools for Guild Masters and Officers</p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {content.departments.map((dept, idx) => (
                                    <div key={idx} className="bg-[#111] rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all group flex flex-col h-full">
                                        <div className="relative h-48 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10"></div>
                                            <img src={dept.image} alt={dept.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                                                <div className="bg-black/80 p-2 rounded-full border border-white/20 text-amber-500 shadow-lg">
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
                                        <div className="p-4 bg-[#0a0a0a] border-t border-white/5 text-center">
                                            <span className="text-xs font-hero text-amber-500/50 uppercase tracking-widest group-hover:text-amber-500 transition-colors">Access Terminal</span>
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
                        <div className="space-y-8">
                            <div className="text-center mb-8">
                                <h3 className="font-hero text-2xl text-[#f0e6d2] uppercase tracking-widest">{content.talents.title}</h3>
                                <p className="text-[#aeb6bf] text-sm max-w-2xl mx-auto mt-2">{content.talents.desc}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {content.talents.features.map((feat, i) => (
                                    <div key={i} className="bg-[#1a1c22] border border-[#333] hover:border-[#c29c55] transition-colors p-6 rounded-lg group relative overflow-hidden">
                                        <div className="absolute inset-0 z-0">
                                            <img src={feat.bgImage} className="w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c22] via-[#1a1c22]/90 to-transparent"></div>
                                        </div>

                                        <div className="relative z-10">
                                            <div className="mb-4">{feat.icon}</div>
                                            <h4 className="text-[#c29c55] font-hero text-lg uppercase mb-2 group-hover:underline decoration-[#c29c55] decoration-2 underline-offset-4">{feat.name}</h4>
                                            <p className="text-[#888] text-xs leading-relaxed opacity-80 mb-4">{feat.summary}</p>
                                            <div className="text-gray-300 text-xs leading-relaxed border-t border-white/10 pt-4">
                                                {formatText(feat.detail)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

};


export default TheGuildSanctum;
