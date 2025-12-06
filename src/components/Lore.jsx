import React, { useState, useEffect } from 'react';
import { BookOpen, Scroll, Map, Crown, Sword, Shield, Flame, Skull, Ghost, Anchor, Star, Clock, Target, Flag, Zap, Heart, Hammer } from 'lucide-react';

const Lore = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        {
            title: "The Divergence",
            icon: <Clock className="w-6 h-6 text-amber-500" />,
            content: `The timeline changed the moment the Dark Portal opened. In the original timeline, we were conquerors. In this one, we are survivors. 
            
            Kael'thas Sunstrider did not betray his people for the Legion; he betrayed the Legion for his people, using Fel technology to rebuild Silvermoon as a floating fortress. Illidan Stormrage is not the villain of the Black Temple, but its warden, holding back a void incursion from the depths of Shadowmoon Valley. 
            
            The events of *The Burning Crusade: Plus* explore a harsher, more complex Outland where the lines between hero and villain are blurred by survival.`
        },
        {
            title: "The Fel Horde",
            icon: <Skull className="w-6 h-6 text-red-500" />,
            content: `Under Warchief Kargath Bladefist, the Fel Horde has evolved into a disciplined, industrial war machine. They have fortified Hellfire Citadel not just with stone, but with captured Legion technology. They are not mindless berserkers; they are soldiers fighting a war of attrition against both the Alliance/Horde expedition and the Burning Legion itself, refusing to bow to either.`
        },
        {
            title: "The Void Incursion",
            icon: <Ghost className="w-6 h-6 text-purple-500" />,
            content: `While existing threats remain, a new danger rises from the nether-storm lashed rocks of Netherstorm and the crypts of Auchindoun. The Void Lords have sensed the instability of Outland. Dimensius the All-Devouring was only a scout. The Ethereals have split into two factions: the Consortium, who seek profit, and the Ethereum, who seek to collapse Outland into the Void.`
        }
    ];

    const factions = [
        { name: "The Illidari", desc: "Led by the Betrayer, they are the only force actively hunting the Legion on their own worlds.", color: "text-green-500", border: "border-green-800" },
        { name: "The Sha'tar", desc: "The Naaru have revealed their true form not as beings of pure Light, but of Balance.", color: "text-amber-400", border: "border-amber-600" },
        { name: "The Violet Eye", desc: "Exiled mages of Dalaran who study the disturbance in Karazhan, which acts as an anchor to this timeline.", color: "text-violet-400", border: "border-violet-600" }
    ];

    const leaders = [
        {
            name: "High King Varian Wrynn",
            title: "The Missing Diplomat",
            faction: "Alliance",
            icon: <Sword className="w-5 h-5" />,
            desc: "Recovered from his amnesia, Varian sees Outland not as an adventure, but as a potential stronghold. He seeks Illidan not for war, but to demand answers about the Legion's true weakness. He believes the Horde's passivity is a liability.",
            quote: "\"We do not fight for glory. We fight so that our sons do not have to.\""
        },
        {
            name: "Warchief Thrall",
            title: "Son of Durotan",
            faction: "Horde",
            icon: <Hammer className="w-5 h-5" />,
            desc: "Thrall returns to the shattered home of his ancestors with a heavy heart. He seeks the Mag'har to reconnect with his heritage, but more importantly, he seeks to redeem the Orcish race in the eyes of the elements. He fears the Fel Horde represents the future if he fails.",
            quote: "\"This world is broken. But it is still home to some.\""
        },
        {
            name: "Magni Bronzebeard",
            title: "Lord of Ironforge",
            faction: "Alliance",
            icon: <Shield className="w-5 h-5" />,
            desc: "The discovery of the Earthen in Blade's Edge Mountains has drawn Magni's gaze. He believes the connection between the Dwarves and the Titans is hidden in the Apexis crystals. He leads an excavation force, not a war party.",
            quote: "\"The stone speaks to those who listen.\""
        },
        {
            name: "Lady Sylvanas Windrunner",
            title: "The Banshee Queen",
            faction: "Horde",
            icon: <Ghost className="w-5 h-5" />,
            desc: "Sylvanas does not trust Illidan, but she respects his survival. She seeks the Val'kyr secrets rumoured to be held by the Legion's Nathrezim. Her journey to Outland is a covert mission to secure immortality for her people.",
            quote: "\"What are we, if not slaves to this torment?\""
        },
        {
            name: "Tyrande Whisperwind",
            title: "High Priestess of Elune",
            faction: "Alliance",
            icon: <Star className="w-5 h-5" />,
            desc: "Driven by a vision from Elune, she senses that Illidan's destiny is not yet fulfilled. While Malfurion urges caution, Tyrande leads her Sentinels to shadowmoon Valley, unsure if she is there to save her former love or execute him.",
            quote: "\"The Goddess shows us the path, not the destination.\""
        },
        {
            name: "Cairne Bloodhoof",
            title: "High Chieftain",
            faction: "Horde",
            icon: <Heart className="w-5 h-5" />,
            desc: "The Earthmother weeps for Outland. Cairne seeks the Cenarion Expedition to help heal the wounds of the land. He believes that healing Draenor might teach the Tauren how to heal Azeroth after the cataclysms to come.",
            quote: "\"The land remembers.\""
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-stone-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
                .font-cinzel { font-family: 'Cinzel', serif; }
                .font-body { font-family: 'Lato', sans-serif; }
            `}</style>

            {/* --- HEADER --- */}
            <header className="py-8 border-b border-amber-900/30 bg-[#050505]/90 backdrop-blur-md relative z-40 transition-all duration-300">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-amber-900/20 rounded-full flex items-center justify-center border border-amber-700">
                            <BookOpen className="text-amber-500 w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="font-cinzel text-2xl text-amber-500 tracking-[0.1em]">LORE & HISTORY</h1>
                            <p className="text-[10px] text-stone-500 font-body tracking-[0.2em] uppercase">The Story So Far</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-5xl">

                {/* Hero Text */}
                <div className="text-center mb-16">
                    <h2 className="font-cinzel text-5xl md:text-6xl text-white mb-6 drop-shadow-[0_0_15px_rgba(255,165,0,0.3)]">THE DARK PORTAL REOPENS</h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
                    <p className="font-body text-xl text-stone-400 italic max-w-3xl mx-auto leading-relaxed">
                        "Ten thousand years we have waited. But the Outland you return to is not the shattered world you remember. The threads of fate have frayed."
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 gap-12 mb-20">
                    {sections.map((section, idx) => (
                        <div key={idx} className="bg-[#111] border border-stone-800 p-8 rounded-lg relative overflow-hidden group hover:border-amber-900/50 transition-colors">
                            <div className="absolute top-0 right-0 p-12 opacity-5 transform group-hover:scale-110 transition-transform duration-700">
                                {React.cloneElement(section.icon, { size: 100 })}
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                <div className="p-4 bg-black/50 rounded-full border border-stone-700 shrink-0">
                                    {section.icon}
                                </div>
                                <div>
                                    <h3 className="font-cinzel text-2xl text-amber-500 mb-4">{section.title}</h3>
                                    <p className="font-body text-stone-300 text-lg leading-relaxed whitespace-pre-line">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LEADERS SECTION (NEW) */}
                <div className="mb-20">
                    <h3 className="font-cinzel text-3xl text-white mb-10 text-center uppercase tracking-widest flex items-center justify-center gap-4">
                        <Flag className="text-amber-600" /> A Council of War
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {leaders.map((leader, i) => (
                            <div key={i} className="bg-[#0c0a09] border border-stone-800 p-6 rounded-lg hover:border-amber-700/50 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-full border ${leader.faction === 'Alliance' ? 'bg-blue-900/20 border-blue-700 text-blue-400' : 'bg-red-900/20 border-red-700 text-red-400'}`}>
                                            {leader.icon}
                                        </div>
                                        <div>
                                            <h4 className={`font-cinzel text-lg ${leader.faction === 'Alliance' ? 'text-blue-100' : 'text-red-100'}`}>{leader.name}</h4>
                                            <p className="text-xs text-stone-500 uppercase tracking-widest">{leader.title}</p>
                                        </div>
                                    </div>
                                    <span className={`text-[10px] px-2 py-1 rounded border ${leader.faction === 'Alliance' ? 'border-blue-900 text-blue-500' : 'border-red-900 text-red-500'}`}>
                                        {leader.faction}
                                    </span>
                                </div>
                                <p className="font-body text-stone-400 text-sm leading-relaxed mb-6">
                                    {leader.desc}
                                </p>
                                <blockquote className="border-l-2 border-stone-700 pl-4 italic text-stone-500 text-xs font-serif">
                                    {leader.quote}
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Factions */}
                <div className="mb-12">
                    <h3 className="font-cinzel text-2xl text-white mb-8 text-center uppercase tracking-widest">Key Powers in Play</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {factions.map((f, i) => (
                            <div key={i} className={`bg-[#0a0a0a] border ${f.border} p-6 rounded text-center hover:bg-[#111] transition-colors`}>
                                <h4 className={`font-cinzel text-xl ${f.color} mb-3`}>{f.name}</h4>
                                <p className="font-body text-stone-400 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Lore;
