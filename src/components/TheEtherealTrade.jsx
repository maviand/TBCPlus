import React, { useState, useEffect, useRef } from 'react';
import {
    Coins, Scale, Globe, ShoppingBag, Scroll, TrendingUp, Handshake,
    ShieldCheck, MapPin, Truck, LineChart, Building2, Gavel, Skull,
    Gem, Zap, Anchor, Speaker, Volume2, VolumeX, AlertTriangle, Calculator, Crown,
    Sword, Shield, Heart, UserPlus, CheckCircle
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheEtherealTrade = () => {
    // STATE: Audio Toggle (Flavor #12)
    const [audioEnabled, setAudioEnabled] = useState(false);

    // STATE: Goblin Calculator (UI #9)
    const [calcAmount, setCalcAmount] = useState(100);

    // STATE: Active Quote (Flavor #13)
    const [quoteIndex, setQuoteIndex] = useState(0);
    const quotes = [
        "Time is money, friend. But information... that is priceless.",
        "I have the best deals anywhere, backed by the Consortium.",
        "Do not haggle with me. These prices are fixed by the laws of physics.",
        "Looking for something... exotic?"
    ];

    // STATE: Live Market Data
    const [marketData, setMarketData] = useState([]);
    const [tickerItems, setTickerItems] = useState([
        { name: "Primal Might", price: 124, trend: 1 },
        { name: "Void Crystal", price: 42, trend: -1 },
        { name: "Spellcloth", price: 80, trend: 1 },
        { name: "Cobra Scales", price: 15, trend: 1 },
        { name: "Fel Lotus", price: 35, trend: -1 },
        { name: "Khorium Bar", price: 22, trend: 1 }
    ]);

    // STATE: BMAH Bids
    const [bids, setBids] = useState({
        ashes: { current: 215000, yours: false },
        sunfire: { current: 45000, yours: false }
    });

    // STATE: Mercenary Services
    const [mercenaries, setMercenaries] = useState([
        { id: 1, name: "Tank4Hire", class: "Warrior", role: "Tank", price: "100g", rating: 4.8, status: "Available" },
        { id: 2, name: "HealBot9000", class: "Priest", role: "Healer", price: "80g", rating: 4.5, status: "Busy" },
        { id: 3, name: "BigDeepz", class: "Mage", role: "DPS", price: "50g", rating: 4.2, status: "Available" }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 8000);

        // Simulate Market Graph Data
        const generateData = () => {
            const now = Date.now();
            const points = [];
            let value = 100;
            for (let i = 0; i < 50; i++) {
                value = value + (Math.random() - 0.5) * 10;
                points.push(value);
            }
            return points;
        };
        setMarketData(generateData());

        const graphInterval = setInterval(() => {
            setMarketData(prev => {
                const newVal = prev[prev.length - 1] + (Math.random() - 0.5) * 10;
                return [...prev.slice(1), newVal];
            });
        }, 1000);

        return () => {
            clearInterval(interval);
            clearInterval(graphInterval);
        };
    }, []);

    const placeBid = (item) => {
        setBids(prev => ({
            ...prev,
            [item]: { current: prev[item].current + 1000, yours: true }
        }));
    };

    const hireMercenary = (id) => {
        setMercenaries(prev => prev.map(m => m.id === id ? { ...m, status: "Hired" } : m));
    };

    // SVG Graph Component
    const LiveGraph = ({ data, color = "#4ade80" }) => {
        const max = Math.max(...data);
        const min = Math.min(...data);
        const range = max - min || 1;
        const pts = data.map((d, i) => `${(i / (data.length - 1)) * 100},${100 - ((d - min) / range) * 100}`).join(" ");
        return (
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <polyline points={pts} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
                {/* Area fill */}
                <polygon points={`0,100 ${pts} 100,100`} fill={color} fillOpacity="0.1" />
            </svg>
        );
    };

    return (
        <div className="min-h-screen bg-[#060608] text-stone-200 font-sans selection:bg-purple-900 selection:text-purple-100 overflow-x-hidden pb-24">
            {/* STYLE INJECTION */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
                .font-hero { font-family: 'Cinzel', serif; }
                .font-body { font-family: 'Lato', sans-serif; }
                 @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-dash {
                    stroke-dashoffset: 100;
                    animation: dash 3s linear infinite;
                }
                @keyframes dash {
                    to { stroke-dashoffset: 0; }
                }
            `}</style>

            {/* UI #6: Real-Time Ticker */}
            <div className="bg-[#0f0f0f] border-b border-purple-900/30 overflow-hidden py-1 relative z-50">
                <div className="whitespace-nowrap animate-marquee flex items-center gap-12 text-xs font-mono text-gray-400 uppercase tracking-widest w-[200%]">
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span className="text-[#c29c55]">{item.name}</span> {item.price}g
                            <TrendingUp size={10} className={item.trend > 0 ? "text-green-500" : "text-red-500 rotate-180"} />
                        </span>
                    ))}
                    <span className="flex items-center gap-2 text-purple-400 font-bold"><AlertTriangle size={10} /> MARKET ALERT: Venture Co. Raids in Nagrand - Oshu'gun Crystal prices rising!</span>
                </div>
            </div>

            <UnifiedHeader
                icon="https://i.imgur.com/56Edlhu.jpeg"
                background={`/images/header_trade.png`}
                section="Economy Overhaul"
                sub="Commerce, Contracts, and Caravans"
                title="The Ethereal Bazaar"
                quote={quotes[quoteIndex]}
            />

            <div className="container mx-auto px-4 py-12 relative">

                {/* Flavor #14: Visual Vault Background */}
                <div className="absolute top-0 right-0 w-full h-[1500px] pointer-events-none opacity-5 z-0">
                    <Coins className="absolute top-20 right-20 w-96 h-96 text-yellow-600 animate-pulse" style={{ animationDuration: '10s' }} />
                    <Gem className="absolute top-[600px] left-10 w-64 h-64 text-purple-600 opacity-50" />
                </div>

                {/* AUDIO TOGGLE (Flavor #12) */}
                <button
                    onClick={() => setAudioEnabled(!audioEnabled)}
                    className="fixed bottom-8 right-8 z-50 bg-black/80 border border-purple-500/50 p-3 rounded-full text-purple-300 hover:text-white hover:scale-110 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    title="Toggle Bazaar Ambience"
                >
                    {audioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
                </button>


                {/* TOP SECTION: GADGETZAN EXCHANGE & BMAH */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 relative z-10 w-full">

                    {/* THE GADGETZAN EXCHANGE (STOCK MARKET) */}
                    <div className="relative border border-purple-900/30 rounded-xl p-8 overflow-hidden shadow-2xl group min-h-[500px] flex flex-col justify-between bg-[#08080a]">
                        {/* Live Graph Background */}
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                            <LiveGraph data={marketData} color="#8b5cf6" />
                        </div>

                        <div className="relative z-10 w-full">
                            {/* Header & Indices */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-white/5 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg shadow-black/50 border border-purple-500/30 bg-black">
                                        <img src="https://i.imgur.com/impoLGq.jpeg" className="w-full h-full object-cover mix-blend-screen scale-110" alt="Gadgetzan Exchange" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-hero text-white leading-none">The Gadgetzan Exchange</h2>
                                        <div className="flex items-center gap-4 mt-2 text-xs font-mono">
                                            <span className="text-stone-400">NAS-DRAEN:</span>
                                            <span className="text-green-500 flex items-center">14,204 <TrendingUp size={10} className="ml-1" /></span>
                                            <span className="text-stone-600">|</span>
                                            <span className="text-stone-400">S&P 70:</span>
                                            <span className="text-red-500 flex items-center">4,102 <TrendingUp size={10} className="ml-1 rotate-180" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block text-right">
                                    <div className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Market Sentiment</div>
                                    <div className="text-green-400 font-bold text-lg flex items-center justify-end gap-2">
                                        EXTREME GREED <Zap size={14} className="fill-green-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* LEFT COL: Active Listings */}
                                <div className="lg:col-span-2 space-y-4">
                                    <div className="flex justify-between items-end mb-2">
                                        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                            <LineChart size={14} className="text-blue-500" /> Blue Chip Guilds
                                        </h3>
                                        <span className="text-[10px] text-stone-500 animate-pulse">● Live Updates</span>
                                    </div>

                                    {/* Stock Row 1: Nihilum */}
                                    <div className="bg-black/60 backdrop-blur-sm p-4 rounded border border-green-900/30 flex items-center justify-between group/stock cursor-help transition-all hover:bg-green-900/20 hover:border-green-500/50">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center font-bold text-sm text-white border border-white/10">N</div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <div className="text-sm font-bold text-white">NIHILUM</div>
                                                    <span className="text-[10px] bg-green-900/30 text-green-400 px-1 rounded border border-green-900/50">BUY</span>
                                                </div>
                                                <div className="text-[10px] text-stone-400 font-mono mt-0.5">Vol: 1.2M • Cap: 450k</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-green-400 font-bold font-mono">450.00g</div>
                                            <div className="text-[10px] text-green-600">+12.4%</div>
                                        </div>
                                    </div>

                                    {/* Stock Row 2: Deus Vox */}
                                    <div className="bg-black/60 backdrop-blur-sm p-4 rounded border border-red-900/30 flex items-center justify-between group/stock cursor-help transition-all hover:bg-red-900/20 hover:border-red-500/50">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center font-bold text-sm text-white border border-white/10">D</div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <div className="text-sm font-bold text-white">DEUS VOX</div>
                                                    <span className="text-[10px] bg-red-900/30 text-red-400 px-1 rounded border border-red-900/50">SELL</span>
                                                </div>
                                                <div className="text-[10px] text-stone-400 font-mono mt-0.5">Vol: 850k • Cap: 310k</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-red-400 font-bold font-mono">320.50g</div>
                                            <div className="text-[10px] text-red-600">-5.2%</div>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT COL: IPO Watch */}
                                <div className="space-y-4">
                                    <div className="bg-[#111]/80 backdrop-blur-sm p-4 rounded border border-white/5">
                                        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                            <Building2 size={12} /> Upcoming IPOs
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-xs">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                                    <span className="text-white font-bold">Limit</span>
                                                </div>
                                                <span className="text-[10px] text-stone-500">Tyl 15th</span>
                                            </div>
                                            <div className="flex items-center justify-between text-xs">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                                    <span className="text-white font-bold">Liquid</span>
                                                </div>
                                                <span className="text-[10px] text-stone-500">Tyl 22nd</span>
                                            </div>
                                        </div>
                                        <button className="w-full mt-4 py-2 bg-[#222] hover:bg-stone-800 border border-stone-700 rounded text-[10px] uppercase font-bold text-stone-400 hover:text-white transition-all">
                                            View Prospectus
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FEATURE #1: BLACK MARKET AUCTION HOUSE (BMAH) */}
                    <div className="relative border border-stone-800 rounded-xl p-8 overflow-hidden shadow-2xl group min-h-[500px]">
                        <div className="absolute inset-0 bg-[url('https://i.imgur.com/7w8w9zM.jpeg')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-all duration-700 grayscale"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/80 to-[#060608]/20"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Gavel className="text-stone-400" size={32} />
                                    <h2 className="text-2xl font-hero text-stone-200">The Black Market</h2>
                                </div>
                                <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                                    "Some items are too... <em className="text-purple-400">volatile</em> for the Steamwheedle Cartel.
                                    Nexus-Prince Haramad offers you this exclusive catalog. No questions asked. No refunds given."
                                </p>

                                {/* Active Auctions */}
                                <div className="space-y-4">
                                    <div className="bg-[#111]/80 backdrop-blur-sm p-4 rounded border border-[#333] flex gap-4 items-center group/item hover:border-purple-500/30 transition-colors">
                                        <div className="w-12 h-12 bg-purple-900/20 rounded border border-purple-500/30 flex items-center justify-center">
                                            <Gem size={20} className="text-purple-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-purple-300 font-bold text-sm">Ashes of Al'ar (Unclaimed)</h4>
                                            <div className="flex justify-between text-xs mt-1 border-t border-white/5 pt-2">
                                                <span className="text-stone-400">Current Bid: <span className="text-white font-mono">{bids.ashes.current.toLocaleString()}g</span></span>
                                                <span className="text-red-500 font-mono animate-pulse">Ends in 2h 15m</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => placeBid('ashes')}
                                            disabled={bids.ashes.yours}
                                            className={`px-3 py-1 border rounded text-xs transition-all font-bold ${bids.ashes.yours ? 'bg-green-900/50 border-green-500 text-green-400 cursor-not-allowed' : 'bg-[#222] hover:bg-purple-900/50 border-stone-700 hover:border-purple-500 text-white'}`}
                                        >
                                            {bids.ashes.yours ? 'WINNING' : 'BID'}
                                        </button>
                                    </div>

                                    <div className="bg-[#111]/80 backdrop-blur-sm p-4 rounded border border-[#333] flex gap-4 items-center group/item hover:border-orange-500/30 transition-colors">
                                        <div className="w-12 h-12 bg-orange-900/20 rounded border border-orange-500/30 flex items-center justify-center">
                                            <Scroll size={20} className="text-orange-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-orange-300 font-bold text-sm">Pattern: Sunfire Robe</h4>
                                            <div className="flex justify-between text-xs mt-1 border-t border-white/5 pt-2">
                                                <span className="text-stone-400">Current Bid: <span className="text-white font-mono">{bids.sunfire.current.toLocaleString()}g</span></span>
                                                <span className="text-red-500 font-mono">Ends in 45m</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => placeBid('sunfire')}
                                            disabled={bids.sunfire.yours}
                                            className={`px-3 py-1 border rounded text-xs transition-all font-bold ${bids.sunfire.yours ? 'bg-green-900/50 border-green-500 text-green-400 cursor-not-allowed' : 'bg-[#222] hover:bg-orange-900/50 border-stone-700 hover:border-orange-500 text-white'}`}
                                        >
                                            {bids.sunfire.yours ? 'WINNING' : 'BID'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MERCENARY SERVICES (NEW SECTION) */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <UserPlus className="text-[#c29c55] w-8 h-8" />
                        <h2 className="text-2xl font-hero text-[#f0e6d2]">Mercenary Contracts</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {mercenaries.map(merc => (
                            <div key={merc.id} className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-[#c29c55] transition-all group relative overflow-hidden">
                                {merc.status === 'Hired' && <div className="absolute inset-0 bg-black/80 z-20 flex items-center justify-center"><span className="text-green-500 font-bold border border-green-500 px-4 py-2 rounded uppercase tracking-widest transform -rotate-12">Contract Active</span></div>}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center border border-white/20">
                                            {merc.role === 'Tank' && <Shield size={20} className="text-blue-400" />}
                                            {merc.role === 'Healer' && <Heart size={20} className="text-green-400" />}
                                            {merc.role === 'DPS' && <Sword size={20} className="text-red-400" />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{merc.name}</h4>
                                            <p className="text-xs text-gray-500">{merc.class} • {merc.rating} ★</p>
                                        </div>
                                    </div>
                                    <span className="text-[#ffd700] font-mono font-bold">{merc.price}</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => hireMercenary(merc.id)}
                                        disabled={merc.status !== 'Available'}
                                        className={`flex-1 py-1 text-xs font-bold uppercase rounded border transition-colors ${merc.status === 'Available' ? 'bg-[#c29c55] text-black border-[#c29c55] hover:bg-white' : 'bg-[#222] text-gray-600 border-[#333] cursor-not-allowed'}`}
                                    >
                                        {merc.status === 'Available' ? 'Hire Now' : merc.status}
                                    </button>
                                    <button className="px-3 border border-white/10 rounded hover:bg-white/5"><Scroll size={14} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* MIDDLE SECTION: TRADE ROUTES & CALCULATORS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative z-10 w-full">

                    {/* Feature #2: SMUGGLER'S RUN MAP */}
                    <div className="lg:col-span-2 relative bg-[#0a0a0a] border border-purple-900/20 rounded-xl p-8 overflow-hidden group hover:border-purple-500/40 transition-all">
                        <div className="absolute inset-0 bg-[url('https://i.imgur.com/gG0R4Jz.jpeg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>

                        <div className="flex justify-between items-start relative z-10 mb-6">
                            <div>
                                <h3 className="text-xl font-hero text-white flex items-center gap-2">
                                    <MapPin className="text-purple-500" /> Smuggler's Run
                                </h3>
                                <p className="text-stone-500 text-xs mt-1 max-w-md">
                                    "The roads are dangerous, but the profits are astronomical. Escort a laden pack-mule from Area 52 to Shattrath.
                                    <span className="text-red-500"> Warning:</span> You will be flagged for PvP combat for the entire duration."
                                </p>
                            </div>
                            {/* UI #8: Risk Meter */}
                            <div className="bg-black/80 px-4 py-2 rounded-full border border-red-900/50 flex items-center gap-2">
                                <span className="text-xs text-stone-400 uppercase tracking-widest">Zone Threat:</span>
                                <span className="text-red-500 font-bold animate-pulse text-sm">SUICIDE RUN</span>
                                <AlertTriangle size={14} className="text-red-500" />
                            </div>
                        </div>

                        {/* Interactive Map Viz (Abstract) */}
                        <div className="relative h-64 bg-[#050505] rounded border border-[#222] overflow-hidden shadow-inner">
                            {/* Route Line */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <path d="M 50 150 Q 200 50 400 150 T 750 100" stroke="#a855f7" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-dash opacity-50" />
                            </svg>

                            {/* Nodes */}
                            <div className="absolute left-10 top-36 w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_15px_blue] cursor-pointer hover:scale-125 transition-transform z-10" title="Area 52 (Start)">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-blue-300 font-bold whitespace-nowrap bg-black/80 px-1 rounded">Area 52 (Safe)</span>
                            </div>
                            <div className="absolute left-1/2 top-36 w-6 h-6 bg-red-600 rounded-full shadow-[0_0_20px_red] animate-pulse cursor-pointer z-10" title="Halaa (Ambush Point)">
                                <AlertTriangle size={12} className="absolute inset-0 m-auto text-black" />
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-red-300 font-bold whitespace-nowrap bg-black/80 px-1 rounded">Halaa (Combat)</span>
                            </div>
                            <div className="absolute right-12 top-24 w-4 h-4 bg-purple-600 rounded-full shadow-[0_0_15px_purple] cursor-pointer hover:scale-125 transition-transform z-10" title="Shattrath (End)">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-purple-300 font-bold whitespace-nowrap bg-black/80 px-1 rounded">Shattrath (Payout)</span>
                            </div>

                            {/* Moving Caravan */}
                            <div className="absolute left-1/2 top-36 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold px-3 py-1 rounded shadow-[0_0_15px_white] animate-bounce z-20 flex items-center gap-1 border border-purple-500">
                                <Truck size={12} /> CARAVAN #402 <span className="text-[9px] text-gray-500">(12/20 Escorts)</span>
                            </div>
                        </div>
                    </div>

                    {/* UI #9: GOBLIN TAX CALCULATOR */}
                    <div className="col-span-1 bg-[#111] border border-stone-800 rounded-xl p-6 relative shadow-lg">
                        <div className="absolute top-4 right-4 text-stone-600"><Calculator size={20} /></div>
                        <h3 className="text-lg font-hero text-green-500 mb-4">Goblin Tax Calc</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs text-stone-500 uppercase font-bold">Transaction Value (g)</label>
                                <input
                                    type="number"
                                    value={calcAmount}
                                    onChange={(e) => setCalcAmount(Number(e.target.value))}
                                    className="w-full bg-black border border-stone-700 rounded p-2 text-white font-mono text-sm focus:border-green-500 outline-none transition-colors"
                                />
                            </div>

                            <div className="space-y-2 border-t border-stone-800 pt-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-stone-400">Standard Cut (5%):</span>
                                    <span className="text-red-400 font-mono">-{Math.round(calcAmount * 0.05).toLocaleString()}g</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-stone-400">Cross-Faction (15%):</span>
                                    <span className="text-red-500 font-bold font-mono">-{Math.round(calcAmount * 0.15).toLocaleString()}g</span>
                                </div>
                                <div className="flex justify-between text-base font-bold pt-2 border-t border-stone-800">
                                    <span className="text-white">Net Profit:</span>
                                    <span className="text-green-400 font-mono text-lg">{(calcAmount - Math.round(calcAmount * 0.15)).toLocaleString()}g</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION: CURRENCY & LEADERS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Feature #3: Currency Exchange */}
                    <div className="bg-[#0a0a0a] border border-stone-800 rounded-lg p-6 hover:border-blue-500/30 transition-colors group">
                        <div className="flex items-center gap-3 mb-4">
                            <Scale className="text-blue-500 group-hover:scale-110 transition-transform" size={20} />
                            <h4 className="font-bold text-stone-200">Currency Exchange</h4>
                        </div>
                        <ul className="space-y-3 text-xs">
                            <li className="flex justify-between items-center text-stone-400 border-b border-white/5 pb-2">
                                <span>100 Badges</span>
                                <span className="text-white font-bold">↔</span>
                                <span className="text-[#c29c55] font-bold">1 Nether Vortex</span>
                            </li>
                            <li className="flex justify-between items-center text-stone-400 border-b border-white/5 pb-2">
                                <span>10 Primal Nether</span>
                                <span className="text-white font-bold">↔</span>
                                <span className="text-[#c29c55] font-bold">1 Primal Might</span>
                            </li>
                            <li className="flex justify-between items-center text-stone-400">
                                <span>5000 Honor</span>
                                <span className="text-white font-bold">↔</span>
                                <span className="text-[#c29c55] font-bold">1 Mark of Honor</span>
                            </li>
                        </ul>
                    </div>

                    {/* Feature #4: Consortium Ledger */}
                    <div className="col-span-1 md:col-span-2 bg-[#0a0a0a] border border-stone-800 rounded-lg p-6 relative overflow-hidden group hover:border-[#c29c55]/30 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Building2 size={80} /></div>
                        <h4 className="font-bold text-stone-200 mb-4 flex items-center gap-2">
                            <img src="https://i.imgur.com/r0Z0Hbz.jpeg" className="w-5 h-5 rounded-full" /> The Consortium Ledger
                        </h4>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead>
                                    <tr className="text-stone-500 border-b border-stone-800">
                                        <th className="pb-2 font-normal">Rank</th>
                                        <th className="pb-2 font-normal">Trade Prince</th>
                                        <th className="pb-2 font-normal text-right">Net Worth</th>
                                        <th className="pb-2 font-normal text-right">Trend</th>
                                    </tr>
                                </thead>
                                <tbody className="text-stone-300">
                                    <tr className="border-b border-stone-900/50 hover:bg-[#c29c55]/10">
                                        <td className="py-2 text-[#c29c55] font-bold"><Crown size={12} className="inline mr-1" /> #1</td>
                                        <td className="py-2">Gallywix (NPC)</td>
                                        <td className="py-2 text-right font-mono">9,999,999g</td>
                                        <td className="py-2 text-right text-green-500">stable</td>
                                    </tr>
                                    <tr className="border-b border-stone-900/50 hover:bg-[#c29c55]/5">
                                        <td className="py-2 text-stone-400">#2</td>
                                        <td className="py-2">Kungen (Player)</td>
                                        <td className="py-2 text-right font-mono">450,210g</td>
                                        <td className="py-2 text-right text-green-500">▲</td>
                                    </tr>
                                    <tr className="hover:bg-[#c29c55]/5">
                                        <td className="py-2 text-stone-400">#3</td>
                                        <td className="py-2">Athene (Player)</td>
                                        <td className="py-2 text-right font-mono">380,500g</td>
                                        <td className="py-2 text-right text-red-500">▼</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TheEtherealTrade;
