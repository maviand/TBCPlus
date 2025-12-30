import React from 'react';
import { Map, Crown, Sword, Shield, Flame, Skull, Ghost, Star, Clock, Flag, Heart, Hammer, Globe } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const Lore = () => {
    // Scroll logic removed as UnifiedHeader is static

    // Helper for bold text and paragraphs
    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').filter(line => line.trim() !== '').map((line, i) => (
            <p key={i} className="mb-4">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-amber-500 font-bold">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    const sections = [
        {
            title: "The Divergence",
            icon: <Clock className="w-6 h-6 text-amber-500" />,
            image: "https://i.imgur.com/UkRrxCS.jpeg",
            content: `The timeline shattered the moment the Dark Portal reopened. In the timeline you knew, the Alliance and Horde invaded Outland as conquerors, sweeping aside the Illidari in a blind rush for loot and glory. But here, the portal did not open to the sound of trumpets, but to the screams of the dying. The Legion was waiting.
            
            **The Trap:** Highlord Fordring's expeditionary force was not met by a disorganized rabble of fel orcs, but by a disciplined Legion siege engine. The Stair of Destiny became a slaughterhouse. We were not the heroes of this story; we were the refugees.
            
            **The Illidari Alliance:** It was not the Naaru who saved the remnants of the Azerothian forces; it was *him*. Illidan Stormrage. Not the mad tyrant brooding atop the Black Temple, but the Lord of Outland, the only strategist capable of holding the line against the Burning Crusade. 
            
            In TBC Plus, the narrative has shifted from "Invade and Loot" to "Survive and Rebuild." The Alliance and Horde are fractured, their supply lines cut. They are forced to rely on the "native" factions they once scorned. Kael'thas Sunstrider did not betray his people; he saved them by turning the mana-forges into shields against the Void. Vashj controls the water not to drought the land, but to ration it against the Legion's scorched-earth tactics.
            
            The line between hero and villain has dissolved. To survive the Burning Legion, we must become monsters ourselves.`
        },
        {
            title: "The New Horde",
            icon: <Flag className="w-6 h-6 text-red-500" />,
            image: "https://i.imgur.com/YXZhmlD.jpeg",
            content: `Thrall's Horde has always been a coalition of outcasts, but in the shattered landscape of Outland, necessity has forged stranger alliances still. The Mag'har of Nagrand were not just peaceful villagers; they were the uncorrupted heart of the Orcish war machine, and under the tutelage of a younger, fiercer Garrosh Hellscream, they have reminded the Horde of what it means to conquer.
            
            **The Ogres of Ogri'la:** Intelligent, arcane-gifted, and tired of being enslaved by the Gronn, the Ogres have finally taken their place as the scholars and heavy infantry of the Horde. Led by the brilliant Mog'dorg the Wizened, they bring a magical might that rivals the elves.
            
            **The Saberon:** From the jungles of Farahlon (a zone restored in this timeline), the predatory Saberon have pledged their claws to the Horde. They are not honorable warriors; they are assassins, ambushers, and apex predators who view the Legion as merely the ultimate prey.
            
            **The Blood Elves:** Kael'thas has returned to Silvermoon not as a traitor, but as a hard-eyed realist. The utilization of Fel technology—regulated, controlled, weaponized—has created a schism with the druidic Tauren, but their results are undeniable. The Horde is no longer just a collection of mud huts and axes; it is an industrial power fueled by demon blood and goblin engineering.`
        },
        {
            title: "The Alliance Fractured",
            icon: <Globe className="w-6 h-6 text-blue-500" />,
            image: "https://i.imgur.com/dkRqSrH.jpeg",
            content: `The Alliance expedition was decimated in the initial assault. Cut off from Stormwind, Jaina Proudmoore and Khadgar were forced to make impossible choices. The high ideals of the Alliance have been stained by the mud and blood of the Hellfire Peninsula.
            
            **The Broken:** Nobundo's people were once shunned for their deformity. Now, they are the spiritual backbone of the Alliance. Their shamanistic connection to the shattered elements of Outland allows the Alliance to survive in zones where the Light cannot reach. The Krokul are not just refugees; they are the guides, the spies, and the survivors who know every bolt-hole in Argus's shadow.
            
            **The High Elves:** The Silver Covenant, refusing to bow to Kael'thas's "pragmatism," have doubled down on their purity. But without the Sunwell, they are fading. Their desperation makes them dangerous. They have turned to ancient, forbidden void research—not to embrace the darkness, but to hunt it.
            
            **The Wildhammer:** With their gryphons and stormhammers, the Wildhammer have established airy citations in the Blade's Edge Mountains to control the skies. They are the first line of defense against the Legion's bat-riders, bringing a reckless, thundering fury that the stoic Ironforge dwarves lack.
            
            This is not the Alliance of shiny plate and grand speeches. This is a resistance movement, ragged and desperate, fighting for every inch of ground with Guerilla tactics and broken equipment.`
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
            back: "https://i.imgur.com/rGZHeH1.jpeg",
            desc: "Recovered from his amnesia, Varian sees Outland not as an adventure, but as a potential stronghold. He seeks Illidan not for war, but to demand answers about the Legion's true weakness. He believes the Horde's passivity is a liability.",
            quote: "\"We do not fight for glory. We fight so that our sons do not have to.\""
        },
        {
            name: "Warchief Thrall",
            title: "Son of Durotan",
            faction: "Horde",
            icon: <Hammer className="w-5 h-5" />,
            back: "https://i.imgur.com/Id9dh9C.jpeg",
            desc: "Thrall returns to the shattered home of his ancestors with a heavy heart. He seeks the Mag'har to reconnect with his heritage, but more importantly, he seeks to redeem the Orcish race in the eyes of the elements. He fears the Fel Horde represents the future if he fails.",
            quote: "\"This world is broken. But it is still home to some.\""
        },
        {
            name: "Magni Bronzebeard",
            title: "Lord of Ironforge",
            faction: "Alliance",
            icon: <Shield className="w-5 h-5" />,
            back: "https://i.imgur.com/B8Nm60s.jpeg",
            desc: "The discovery of the Earthen in Blade's Edge Mountains has drawn Magni's gaze. He believes the connection between the Dwarves and the Titans is hidden in the Apexis crystals. He leads an excavation force, not a war party.",
            quote: "\"The stone speaks to those who listen.\""
        },
        {
            name: "Lady Sylvanas Windrunner",
            title: "The Banshee Queen",
            faction: "Horde",
            icon: <Ghost className="w-5 h-5" />,
            back: "https://i.imgur.com/tw5jEH4.jpeg",
            desc: "Sylvanas does not trust Illidan, but she respects his survival. She seeks the Val'kyr secrets rumoured to be held by the Legion's Nathrezim. Her journey to Outland is a covert mission to secure immortality for her people.",
            quote: "\"What are we, if not slaves to this torment?\""
        },
        {
            name: "Tyrande Whisperwind",
            title: "High Priestess of Elune",
            faction: "Alliance",
            icon: <Star className="w-5 h-5" />,
            back: "https://i.imgur.com/hOcfSwD.png",
            desc: "Driven by a vision from Elune, she senses that Illidan's destiny is not yet fulfilled. While Malfurion urges caution, Tyrande leads her Sentinels to shadowmoon Valley, unsure if she is there to save her former love or execute him.",
            quote: "\"The Goddess shows us the path, not the destination.\""
        },
        {
            name: "Cairne Bloodhoof",
            title: "High Chieftain",
            faction: "Horde",
            icon: <Heart className="w-5 h-5" />,
            back: "https://i.imgur.com/LUymSiZ.png",
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

            {/* --- UNIFIED HEADER --- */}
            <UnifiedHeader
                icon="https://i.imgur.com/SO4YHLu.jpeg"
                background="https://i.imgur.com/tSO8ujl.jpeg"
                section="The Story So Far"
                sub="Chronicles of the New Era"
                title="Lore & History"
                quote="The threads of fate have frayed. We must weave them anew."
            />

            <main className="container mx-auto px-4 py-12 max-w-5xl">

                {/* Hero Text */}
                <div className="text-center mb-16">
                    <h2 className="font-cinzel text-5xl md:text-6xl text-[#c29c55] mb-6 drop-shadow-[0_0_15px_rgba(194,156,85,0.3)] uppercase tracking-widest">THE DARK PORTAL REOPENS</h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
                    <p className="font-body text-xl text-stone-400 italic max-w-3xl mx-auto leading-relaxed">
                        "Ten thousand years we have waited. But the Outland you return to is not the shattered world you remember. The threads of fate have frayed."
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 gap-12 mb-20">
                    {sections.map((section, idx) => (
                        <div key={idx} className="bg-[#111] border border-stone-800 p-8 rounded-lg relative overflow-hidden group hover:border-amber-900/50 transition-colors">
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img src={section.image} alt="" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
                            </div>

                            <div className="absolute top-0 right-0 p-12 opacity-5 transform group-hover:scale-110 transition-transform duration-700 z-0">
                                {React.cloneElement(section.icon, { size: 100 })}
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                <div className="p-4 bg-black/50 rounded-full border border-stone-700 shrink-0">
                                    {section.icon}
                                </div>
                                <div>
                                    <h3 className="font-cinzel text-2xl text-[#c29c55] uppercase tracking-widest mb-4 drop-shadow-md">{section.title}</h3>
                                    <div className="font-body text-stone-300 text-lg leading-relaxed drop-shadow-sm">
                                        {formatText(section.content)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LEADERS SECTION (NEW) */}
                <div className="mb-20">
                    <h3 className="font-cinzel text-3xl text-[#c29c55] mb-10 text-center uppercase tracking-widest flex items-center justify-center gap-4">
                        <Flag className="text-[#c29c55]" /> A Council of War
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {leaders.map((leader, i) => (
                            <div key={i} className="bg-[#0c0a09] border border-stone-800 p-6 rounded-lg hover:border-amber-700/50 transition-all group relative overflow-hidden">
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <img src={leader.back} alt="" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-[1px]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/80 to-transparent"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-full border bg-black/50 ${leader.faction === 'Alliance' ? 'border-blue-700 text-blue-400' : 'border-red-700 text-red-400'}`}>
                                                {leader.icon}
                                            </div>
                                            <div>
                                                <h4 className={`font-cinzel text-lg drop-shadow-md ${leader.faction === 'Alliance' ? 'text-blue-100' : 'text-red-100'}`}>{leader.name}</h4>
                                                <p className="text-xs text-stone-400 uppercase tracking-widest font-bold">{leader.title}</p>
                                            </div>
                                        </div>
                                        <span className={`text-[10px] px-2 py-1 rounded border bg-black/50 ${leader.faction === 'Alliance' ? 'border-blue-900 text-blue-500' : 'border-red-900 text-red-500'}`}>
                                            {leader.faction}
                                        </span>
                                    </div>
                                    <p className="font-body text-stone-300 text-sm leading-relaxed mb-6 drop-shadow-sm">
                                        {leader.desc}
                                    </p>
                                    <blockquote className="border-l-2 border-stone-600 pl-4 italic text-stone-400 text-xs font-serif">
                                        {leader.quote}
                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Factions */}
                <div className="mb-12">
                    <h3 className="font-cinzel text-2xl text-[#c29c55] mb-8 text-center uppercase tracking-widest">Key Powers in Play</h3>
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
