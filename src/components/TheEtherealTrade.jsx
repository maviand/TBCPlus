import React, { useState } from 'react';
import { Coins, Scale, Globe, ShoppingBag, Scroll, TrendingUp, Handshake, ShieldCheck, MapPin, Truck, LineChart, Building2, Gavel } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheEtherealTrade = () => {

    const parseBold = (text) => text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i} className="text-purple-400 font-bold">{part.slice(2, -2)}</strong> : part
    );

    return (
        <div className="min-h-screen bg-[#060608] text-stone-200 font-sans selection:bg-purple-900 selection:text-purple-100 overflow-x-hidden">
            <UnifiedHeader
                icon={<Coins className="w-8 h-8 text-purple-400" />}
                background={`/TBCPlus/images/header_trade.png`}
                section="Economy Overhaul"
                sub="Commerce, Contracts, and Caravans"
                title="The Ethereal Bazaar"
                quote="Time is money, friend. But information... that is priceless."
            />

            <div className="container mx-auto px-4 py-12">

                {/* THE GADGETZAN EXCHANGE (STOCK MARKET) */}
                <div className="relative border border-purple-900/30 rounded-xl p-8 mb-20 overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-[url('https://i.imgur.com/gG0R4Jz.jpeg')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-[#060608]/95 to-[#060608]/50"></div>
                    <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><LineChart size={300} /></div>

                    <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="md:w-1/3">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400"><TrendingUp size={24} /></div>
                                <h2 className="text-3xl font-cinzel text-white">The Gadgetzan Exchange</h2>
                            </div>
                            <p className="text-stone-400 text-sm leading-relaxed mb-6">
                                The Auction House is no longer just for items. It is a stock market.
                                Only in TBC+, you can invest gold in <span className="text-white font-bold">Player Guilds</span>.
                                <br /><br />
                                If a guild clears Sunwell Plateau first, their stock value rises. Shareholders receive weekly dividends from the guild's loot tax.
                            </p>
                            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded font-bold text-xs uppercase tracking-widest shadow-lg transition-all">
                                View Market Cap
                            </button>
                        </div>

                        {/* Mock Stock Ticker */}
                        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-black/40 p-4 rounded border border-green-900/30">
                                <div className="text-xs text-stone-500 mb-1">NIHILLUM (NIH)</div>
                                <div className="text-green-400 font-mono font-bold text-lg flex items-center gap-2">
                                    450g <TrendingUp size={14} />
                                </div>
                                <div className="text-[10px] text-green-600">+12% this week</div>
                            </div>
                            <div className="bg-black/40 p-4 rounded border border-red-900/30">
                                <div className="text-xs text-stone-500 mb-1">DEUS VOX (DXV)</div>
                                <div className="text-red-400 font-mono font-bold text-lg flex items-center gap-2">
                                    320g <TrendingUp size={14} className="rotate-180" />
                                </div>
                                <div className="text-[10px] text-red-600">-5% this week</div>
                            </div>
                            <div className="bg-black/40 p-4 rounded border border-green-900/30">
                                <div className="text-xs text-stone-500 mb-1">METHOD (MTD)</div>
                                <div className="text-green-400 font-mono font-bold text-lg flex items-center gap-2">
                                    410g <TrendingUp size={14} />
                                </div>
                                <div className="text-[10px] text-green-600">+8% this week</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 Main Pillars */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">

                    {/* Pillar 1: Buy Orders */}
                    <div className="relative p-8 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all group overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://i.imgur.com/jRXIXQr.jpeg')] bg-cover bg-center opacity-25 group-hover:opacity-35 transition-all duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/90 to-transparent"></div>
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><ShoppingBag size={100} /></div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <Gavel size={32} />
                            </div>
                            <h3 className="text-2xl font-cinzel text-white">Buy Orders</h3>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed mb-6 relative z-10">
                            Reverse the market. List a specialized "Wanted" poster for items you need (e.g., "Buying 200 Fel Iron Ore").
                            Sellers can fulfill your order instantly from anywhere in the world.
                        </p>
                        <div className="bg-black/30 p-4 rounded border border-white/5 text-xs text-stone-500 font-mono relative z-10">
                            <div className="flex justify-between mb-2">
                                <span>[Primal Fire]</span>
                                <span className="text-green-500">WTB x30</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Price: 25g/ea</span>
                                <span className="text-stone-600">Filled: 12/30</span>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 2: Contracts */}
                    <div className="relative p-8 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all group overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://i.imgur.com/ZCmbFEo.jpeg')] bg-cover bg-center opacity-25 group-hover:opacity-35 transition-all duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/90 to-transparent"></div>
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Scroll size={100} /></div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <Handshake size={32} />
                            </div>
                            <h3 className="text-2xl font-cinzel text-white">Mercenary Contracts</h3>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed mb-6 relative z-10">
                            Sanctioned player-to-player services. Post a contract for gold:
                            "Need Tank for Heroic Shattered Halls", "Craft me a Spellfire Robe with your mats".
                            Gold is held in escrow until the system verifies completion.
                        </p>
                        <ul className="space-y-2 text-xs text-stone-400 relative z-10">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>Rating system prevents scams.</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>"Mercenary" Title for top contractors.</li>
                        </ul>
                    </div>

                    {/* Pillar 3: Caravans */}
                    <div className="relative p-8 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all group overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://i.imgur.com/zdkShOD.jpeg')] bg-cover bg-center opacity-25 group-hover:opacity-35 transition-all duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/90 to-transparent"></div>
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Truck size={100} /></div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-2xl font-cinzel text-white">The Silk Road</h3>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed mb-6 relative z-10">
                            {parseBold('Buy trade goods low in Area 52, sell high in Shattrath.\n                            Load up a pack-mule and physically escort it across the zone.\n                            **Warning:** You are PvP flagged and marked on the map while escorting.')}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-amber-500 font-bold uppercase tracking-wider relative z-10">
                            <ShieldCheck size={14} /> High Risk, High Reward
                        </div>
                    </div>
                </div>

                {/* FEATURED: CROSS FACTION TRADE */}
                <div className="max-w-5xl mx-auto bg-[#0a0a0a] rounded-2xl overflow-hidden border border-stone-800 flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-12 space-y-6 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-900/20 text-purple-400 border border-purple-900/50 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                            <Building2 size={12} /> Global Economy
                        </div>
                        <h2 className="text-4xl font-cinzel text-white">The Goblin Network</h2>
                        <p className="text-stone-400 text-lg leading-relaxed font-light">
                            {parseBold('The auction houses of Gadgetzan, Booty Bay, and Everlook have been linked into a single **Cross-Faction Market**.\n                            Alliance and Horde can now trade freely through these neutral hubs, but the Goblins take a steeper cut (15%).')}
                        </p>
                    </div>
                    <div className="md:w-1/2 bg-[url('https://i.imgur.com/ZEH6wQW.jpeg')] bg-cover bg-center min-h-[300px] relative">
                        <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TheEtherealTrade;
