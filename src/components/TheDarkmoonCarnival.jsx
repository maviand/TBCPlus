import React, { useState, useEffect } from 'react';
import { Tent, Ticket, Skull, Ghost, HelpCircle, Dices, Eye, Moon, Music, Sword, Heart, Crown, Sparkles, Scroll, Clock, ShoppingBag } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';
import WowTooltip from './WowTooltip';

const TheDarkmoonCarnival = () => {
    const parseBold = (text) => text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i} className="text-purple-400 font-bold">{part.slice(2, -2)}</strong> : part
    );

    // --- COUNTDOWN LOGIC ---
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            let target = new Date(now.getFullYear(), now.getMonth(), 1); // Start of this month

            // Find first Sunday
            while (target.getDay() !== 0) {
                target.setDate(target.getDate() + 1);
            }

            // If we are past the first week (duration of Faire), move to next month
            const faireEnd = new Date(target);
            faireEnd.setDate(faireEnd.getDate() + 7);

            if (now > faireEnd) {
                target = new Date(now.getFullYear(), now.getMonth() + 1, 1);
                while (target.getDay() !== 0) {
                    target.setDate(target.getDate() + 1);
                }
            } else if (now >= target && now <= faireEnd) {
                return "THE CARNIVAL IS OPEN!";
            }

            const diff = target - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);

            return `${days}d ${hours}h ${minutes}m until Arrival`;
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 60000); // Update every minute is enough

        setTimeLeft(calculateTimeLeft()); // Initial call

        return () => clearInterval(timer);
    }, []);

    const attractions = [
        {
            name: "The Funhouse",
            type: "Roguelike Dungeon",
            icon: <Ghost className="text-purple-500 w-8 h-8 group-hover:scale-110 transition-transform" />,
            bgParams: "border-purple-900/30 hover:border-purple-500",
            bgImage: "https://i.imgur.com/BHbyk7P.jpeg",
            badge: { text: "Roguelike", color: "bg-purple-900/40 text-purple-300" },
            desc: "Step into a mirror maze where reflections hunt you. A procedural nightmare of shifting corridors and dopplegangers that learn your rotation.",
            reward: "Mirror-Tier Transmog"
        },
        {
            name: "The Deathmatch Cage",
            type: "FFA Arena",
            icon: <Skull className="text-red-500 w-8 h-8 group-hover:scale-110 transition-transform" />,
            bgParams: "border-purple-900/30 hover:border-red-500",
            bgImage: "https://i.imgur.com/1b91Rwu.jpeg",
            badge: { text: "Free-For-All", color: "bg-red-900/40 text-red-300" },
            desc: "Two enter, one leaves. Actually, a dozen enter, and usually nobody leaves intact. The ultimate test of skill, where gear matters less than Ruthlessness.",
            reward: "Gladiator Titles"
        },
        {
            name: "Silas' High Stakes",
            type: "Gambling Den",
            icon: <Dices className="text-amber-500 w-8 h-8 group-hover:scale-110 transition-transform" />,
            bgParams: "border-purple-900/30 hover:border-amber-500",
            bgImage: "https://i.imgur.com/BHbyk7P.jpeg",
            badge: { text: "High Stakes", color: "bg-amber-900/40 text-amber-300" },
            desc: "The house always wins, but you might just be the exception. Wager your soul shards, your gold, or even your XP against the Darkmoon dealers.",
            reward: "The 'High Roller' Title"
        },
        {
            name: "The Foggy Woods",
            type: "World Boss Zone",
            icon: <HelpCircle className="text-teal-500 w-8 h-8 group-hover:scale-110 transition-transform" />,
            bgParams: "border-purple-900/30 hover:border-teal-500",
            bgImage: "https://i.imgur.com/GCNVEVH.jpeg",
            badge: { text: "Mystery", color: "bg-teal-900/40 text-teal-300" },
            desc: "The mists cling to you like a lover. Unspeakable things watch from the tree line. Hunt the Darkmoon Rabbit, if you dare.",
            reward: "Corrupted Pets"
        }
    ];

    const decks = [
        {
            name: "Darkmoon Card: Beasts",
            quality: 'epic',
            ilvl: 115,
            slot: 'Trinket',
            unique: true,
            icon: <Crown size={32} />,
            color: "text-green-500",
            flavor: '"The wild answers the call."',
            stats: [],
            effects: [
                "Equip: Improves critical strike rating by 51.",
                "Equip: 10% chance on ranged attack to summon a Darkmoon Bear to protect you for 15 sec."
            ],
            desc: "BiS for Hunters"
        },
        {
            name: "Darkmoon Card: Portals",
            quality: 'epic',
            ilvl: 115,
            slot: 'Trinket',
            unique: true,
            icon: <Moon size={32} />,
            color: "text-blue-500",
            flavor: '"Reality is a suggestion."',
            stats: [],
            effects: [
                "Equip: Increases spell haste rating by 51.",
                "Equip: Your harmful spells have a chance to open a Nether Portal, casting a duplicate of your spell at the target."
            ],
            desc: "BiS for Mages"
        },
        {
            name: "Darkmoon Card: Warlords",
            quality: 'epic',
            ilvl: 115,
            slot: 'Trinket',
            unique: true,
            icon: <Sword size={32} />,
            color: "text-red-500",
            flavor: '"Blood for blood."',
            stats: ["+60 Strength"],
            effects: [
                "Equip: Chance on melee hit to increase Strength by 200 for 15 sec. While active, healing effects received are reduced by 50%."
            ],
            desc: "BiS for Warriors"
        },
        {
            name: "Darkmoon Card: Furies",
            quality: 'epic',
            ilvl: 115,
            slot: 'Trinket',
            unique: true,
            icon: <Heart size={32} />,
            color: "text-amber-500",
            flavor: '"Spirits never forget."',
            stats: [],
            effects: [
                "Equip: Increases healing done by up to 100 and damage done by up to 33 for all magical spells and effects.",
                "Equip: Your direct healing spells have a chance to blanket the target in a 'Lingering Spirit', healing them for an additional 200 over 8 sec."
            ],
            desc: "BiS for Healers"
        }
    ];

    // Shop Items
    const shopItems = [
        { name: "Replica Dungeon Set 1", cost: 50, type: "Transmog", icon: <Crown size={16} /> },
        { name: "Replica Dungeon Set 2", cost: 75, type: "Transmog", icon: <Crown size={16} /> },
        { name: "Swift Forest Strider", cost: 180, type: "Mount", icon: <Ghost size={16} /> },
        { name: "Darkmoon Dancing Bear", cost: 180, type: "Mount", icon: <Ghost size={16} /> },
        { name: "Heirloom: Burnished Breastplate", cost: 110, type: "Heirloom", icon: <Shield size={16} /> },
        { name: "Heirloom: Bloodied Arcanite Reaper", cost: 130, type: "Heirloom", icon: <Sword size={16} /> },
        { name: "Lute of the Faire", cost: 200, type: "Bard Instrument", icon: <Music size={16} /> },
        { name: "Darkmoon Top Hat", cost: 10, type: "Consumable", icon: <Tent size={16} /> },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-stone-200 font-sans selection:bg-purple-900 selection:text-white overflow-x-hidden">
            <UnifiedHeader
                icon="https://i.imgur.com/3v7pM13.png"
                background={`/TBCPlus/images/header_darkmoon.png`}
                section="Zone Overhaul"
                sub="Step Right Up... If You Dare"
                title="The Darkmoon Carnival"
                quote="Silas has secrets. And he's finally ready to share."
            />

            <div className="container mx-auto px-4 py-8">

                {/* COUNTDOWN BANNER */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-purple-900/20 border border-purple-500/30 rounded-full px-6 py-2 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <Clock className="w-5 h-5 text-purple-400 animate-pulse" />
                        <span className="font-hero tracking-widest text-purple-200 text-lg uppercase">
                            {timeLeft}
                        </span>
                    </div>
                </div>

                {/* Intro */}
                <div className="max-w-5xl mx-auto text-center mb-16 relative rounded-2xl overflow-hidden border border-purple-900/50 shadow-2xl group">
                    <div className="absolute inset-0 z-0">
                        <img src="https://i.imgur.com/1b91Rwu.jpeg" alt="Faire Background" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
                    </div>
                    <div className="relative z-10 py-16 px-6">
                        <Eye className="w-16 h-16 text-purple-500 mx-auto mb-6 animate-pulse-slow drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                        <h2 className="text-5xl font-hero text-white mb-6 drop-shadow-md">The Faire Has Changed</h2>
                        <p className="text-xl text-stone-300 leading-relaxed font-light max-w-3xl mx-auto">
                            {parseBold(`No longer a monthly visitor, the Darkmoon Faire has permanently anchored its island to the Twisting Nether.
                            It is now a **Max-Level Zone** filled with twisted games, high-stakes gambling, and eldritch horrors lurking behind the tents.
                            The music is distorted, the clowns are not smiling, and the prizes... well, the prizes are to die for.`)}
                        </p>
                    </div>
                </div>

                {/* ATTRACTIONS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
                    {attractions.map((attraction, i) => (
                        <div key={i} className={`bg-[#0a0a0a] rounded-xl border transition-all duration-300 group cursor-pointer relative overflow-hidden h-full flex flex-col ${attraction.bgParams}`}>
                            {/* Card Background Image */}
                            <div className="absolute inset-0 z-0 h-40">
                                <img src={attraction.bgImage} alt={attraction.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 mask-image-gradient-b" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]"></div>
                            </div>

                            <div className="relative z-10 p-6 flex-grow flex flex-col mt-20">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-[#0a0a0a]/80 p-2 rounded-full backdrop-blur-sm border border-stone-800 shadow-xl">
                                        {attraction.icon}
                                    </div>
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase shadow-lg ${attraction.badge.color}`}>
                                        {attraction.badge.text}
                                    </span>
                                </div>
                                <h3 className="font-hero text-2xl text-white mb-3 group-hover:text-purple-400 transition-colors drop-shadow-md">{attraction.name}</h3>
                                <p className="text-stone-400 text-sm leading-relaxed mb-4 flex-grow">
                                    {attraction.desc}
                                </p>
                                <div className="pt-4 border-t border-white/5">
                                    <span className="text-xs font-bold text-stone-500 uppercase tracking-widest block mb-1">Top Reward</span>
                                    <span className="text-sm text-purple-300">{attraction.reward}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BACKSTAGE PASS & FORTUNES */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-7xl mx-auto">
                    {/* Backstage Pass */}
                    <div className="relative rounded-xl border border-purple-900/20 overflow-hidden group min-h-[400px]">
                        <div className="absolute inset-0">
                            <img src="https://i.imgur.com/KDBUYqp.jpeg" alt="Backstage" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0b1a] via-[#0f0b1a]/90 to-transparent"></div>
                        </div>
                        <div className="relative z-10 p-10 flex flex-col justify-center h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <Ticket className="w-10 h-10 text-purple-500" />
                                <h3 className="text-3xl font-hero text-white">The Backstage Pass</h3>
                            </div>
                            <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-md">
                                {parseBold('For those with Reputation: **Exalted**, the curtain is pulled back. Gain access to the "Performers\' Lounge" underground sanctuary.')}
                            </p>
                            <ul className="space-y-6 max-w-md">
                                <li className="flex items-start gap-4">
                                    <div className="bg-purple-900/20 p-2 rounded border border-purple-500/30"><Music className="w-5 h-5 text-purple-400" /></div>
                                    <div>
                                        <h4 className="text-white font-bold text-base mb-1">Bardic Duels</h4>
                                        <p className="text-stone-400 text-sm">{parseBold('Challenge other players to rhythm-game battles using the new **Bard** class mechanics.')}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-purple-900/20 p-2 rounded border border-purple-500/30"><Sword className="w-5 h-5 text-purple-400" /></div>
                                    <div>
                                        <h4 className="text-white font-bold text-base mb-1">Illegal Transmogs</h4>
                                        <p className="text-stone-400 text-sm">Vendor selling "Grey" and "White" quality item appearances.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Fortunes */}
                    <div className="relative rounded-xl border border-purple-900/20 overflow-hidden group min-h-[400px]">
                        <div className="absolute inset-0">
                            <img src="https://i.imgur.com/aHPPpIC.jpeg" alt="Sayge" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0b1a] via-[#0f0b1a]/90 to-transparent"></div>
                        </div>
                        <div className="relative z-10 p-10 flex flex-col justify-center h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <Sparkles className="w-10 h-10 text-amber-500" />
                                <h3 className="text-3xl font-hero text-white">Sayge's Fortunes</h3>
                            </div>
                            <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-md">
                                {parseBold("Sayge doesn't just give text anymore. He gives **2-hour Faire Buffs** based on your answers, but they come with a curse.")}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                                <div className="bg-black/60 p-5 rounded border border-amber-900/30 backdrop-blur-sm">
                                    <div className="text-amber-500 font-hero text-base mb-2">Fortune of War</div>
                                    <div className="space-y-1">
                                        <div className="text-green-400 text-sm">+10% Damage</div>
                                        <div className="text-red-500 text-sm">-5% Stamina</div>
                                    </div>
                                </div>
                                <div className="bg-black/60 p-5 rounded border border-amber-900/30 backdrop-blur-sm">
                                    <div className="text-amber-500 font-hero text-base mb-2">Fortune of Wealth</div>
                                    <div className="space-y-1">
                                        <div className="text-green-400 text-sm">+20% Gold Drops</div>
                                        <div className="text-red-500 text-sm">-10% Move Speed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* THE DECKS (TRINKETS) */}
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-hero text-white mb-2">The Tarot of the Old Gods</h3>
                        <p className="text-stone-400">Collect the cards. Complete the deck. Claim your power.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {decks.map((deck, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="mb-6 relative transition-transform duration-300 group-hover:-translate-y-2">
                                    {/* This renders the actual tooltip card directly */}
                                    <WowTooltip item={deck} />
                                </div>
                                <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity">
                                    <p className={`font-hero text-lg ${deck.color} mb-1`}>{deck.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PRIZE BOOTH / TICKET SHOP */}
                <div className="relative rounded-xl border border-purple-900/20 overflow-hidden max-w-6xl mx-auto">
                    <div className="absolute inset-0">
                        <img src="https://i.imgur.com/1iPQb1Y.jpeg" alt="Prize Booth" className="w-full h-full object-cover opacity-30" />
                        <div className="absolute inset-0 bg-[#0f0b1a]/90"></div>
                    </div>

                    <div className="relative z-10 p-12">
                        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                            <div className="md:w-1/3 text-center">
                                <div className="w-32 h-32 bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                                    <Ticket className="w-16 h-16 text-purple-400" />
                                </div>
                                <h3 className="text-3xl font-hero text-white mb-2">The Prize Booth</h3>
                                <p className="text-purple-300 font-bold tracking-widest uppercase text-sm">Spend Your Tix</p>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-stone-300 text-lg leading-relaxed">
                                    {parseBold('Darkmoon Tickets are now a **Bind-on-Account** currency. Farm them on your main, gear up your alt.\n                                    The Prize Booth has been updated with "Heirloom" items that scale to Level 70.')}
                                </p>
                            </div>
                        </div>

                        {/* Shop Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {shopItems.map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-4 flex flex-col transition-all hover:bg-white/10 hover:border-purple-500/50 group">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="bg-purple-900/40 p-2 rounded text-purple-300 group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                        <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
                                            {item.cost} <Ticket size={12} />
                                        </div>
                                    </div>
                                    <h4 className="text-stone-200 font-bold text-sm leading-tight mb-1 group-hover:text-purple-300 transition-colors">{item.name}</h4>
                                    <span className="text-xs text-stone-500 uppercase tracking-widest">{item.type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TheDarkmoonCarnival;
