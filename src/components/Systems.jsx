import React, { useState } from 'react';
import { Users, Shirt, RefreshCw, Box, Globe, Shield, Zap, BookOpen, Star, Ghost, Map, Scroll, Compass, Anchor, Layout, Sword, Crown } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const Systems = () => {
    const [activeSystem, setActiveSystem] = useState('seamless');

    // Helper for bold text and paragraphs
    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').filter(line => line.trim() !== '').map((line, i) => (
            <p key={i} className="mb-4">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-[#c29c55] font-normal">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    const systems = [
        {
            id: 'seamless',
            title: "Seamless World",
            subtitle: "One World, Under the Sky",
            icon: <Globe className="w-6 h-6" />,
            image: "https://i.imgur.com/qBElKqm.jpeg",
            quote: "The boundaries have dissolved. The world breathes as one.",
            content: `**"One World, Under the Sky."**

            The loading screens that once fractured Azeroth have been dissolved. The borders between zones are now fluid, allowing for unprecedented immersion.

            **No Instanced Cities**
            Walk through the gates of Stormwind or Orgrimmar without a pause. The capital cities are now part of the open world. You can ride from Elwynn Forest straight into the Trade District without a single loading screen interrupting your journey. This opens up massive opportunities for city raids and defense—no longer can an invading force hide behind an instance portal.

            **True-Flight Paths**
            Wyverns and Gryphons no longer fade out into a loading screen. You can see players fighting below as you fly over contested territories. The flight paths are now physical entities in the world; if a mage blasts you while you pass over the Gurubashi Arena, you WILL fall.

            **The Great Sea**
            Boats and Zeppelins now traverse real-time physical space. You can jump off a Zeppelin mid-flight over Stranglethorn Vale (at your own peril). Naval combat is now a possibility for the adventurous.

            **TBC+ Philosophy**
            This increases World PvP opportunities and immersion. The world feels truly massive when you can traverse it from end to end without interruption. Every mountain, every valley, and every ocean is real geometry.`
        },
        {
            id: 'codex',
            title: "Codex of Antiquities",
            subtitle: "The Collection Tab",
            icon: <BookOpen className="w-6 h-6" />,
            image: "https://i.imgur.com/Zt35D7n.jpeg",
            quote: "A library of conquest, bound in leather and blood.",
            content: `**"A Library of Conquest."**

            We have moved the physical clutter from your bags to a mystical tome, but we have kept the RPG spirit alive. Items are not magically learned; they must be inscribed.

            **The Scribe’s Desk**
            You do not automatically "learn" a mount or pet just by right-clicking it. You must take the item to a **Scribe** (Inscription Profession) in a capital city to have it added to your Codex. This preserves the roleplay element of "studying" a new companion or beast.

            **Account-Wide Access**
            Once inscribed, all characters on your **War Band** have access to:
            *   **Mounts:** Ride your Zul'Gurub Raptor on your level 30 alt. (Faction restrictions apply).
            *   **Companions:** Now battle-ready for the *Pit of Pets* minigame, a turn-based tactical battler available in inns.
            *   **Heirlooms:** Old gear restored for leveling alts. A dusty *Arcanite Reaper* passed down from your main to your new Warrior.
            *   **Toy Box:** Fun items like the *Orb of Deception* no longer take up inventory space but are available on demand.

            **Heirloom System**
            Heirlooms in TBC+ are not bought with gold, but forged from the "Memory of Heroism" currency dropped by raid bosses. They grow with you, evolving visually as you level.`
        },
        {
            id: 'nual_spec',
            title: "Dual Specialization",
            subtitle: "Tactical Mastery",
            icon: <RefreshCw className="w-6 h-6" />,
            image: "https://i.imgur.com/VZCgrr6.jpeg",
            quote: "A warrior must be a shield one day, and a sword the next.",
            content: `**"Adapt. Overcome. Survive."**

            The war against the Illidari requires versatility. Heroes may now maintain two distinct configurations of talents and action bars.

            **The Cost of Versatility**
            Unlocking your second specialization requires a one-time, significant gold investment (1000g) and a questline involving the **Trainers of Old**. You must prove you have mastered your first path before you can walk a second.

            **The Campsite Restriction**
            We believe preparation is key. You cannot swap specs instantly in combat or in the middle of a dungeon run. You must be at a **Rest Area** (Inn or City) or use a **Tome of the Clear Mind** (crafted by Inscriptionists) to change your focus in the wild.

            **TBC+ Philosophy**
            Convenience is added, but it retains an economic cost and reliance on player professions. It prevents "spec-swapping for every trash pack" while allowing a Paladin to tank a dungeon and heal a raid in the same evening.`
        },
        {
            id: 'warbands',
            title: "War Bands",
            subtitle: "Account-Wide Progression",
            icon: <Users className="w-6 h-6" />,
            image: "https://i.imgur.com/Zj5uILD.jpeg",
            quote: "Blood runs thicker than water, but gold binds the company.",
            content: `**"The Company You Keep."**

            Your characters are no longer isolated loners; they are part of a mercenary company under your banner.

            **Shared Reputation (Commendations)**
            Reaching **Exalted** on one character allows you to purchase "Commendation Badges" to send to your alts, boosting their reputation gain by 100%. You still have to play the alt, but the grind is respected. A dedicated main paves the way for the squad.

            **The War Chest**
            A shared bank tab accessible by all characters on your account for reagents and gold. No more mailing cloth to your tailor alt; simply deposit it in the War Chest and withdraw it on the other side.

            **The Campfire Screen**
            Your character selection screen has been reimagined. It now features your War Band sitting around a campfire together, wearing their current gear. See your Warrior sharpening his blade while your Mage studies a tome in the background.

            **Currency Exchange**
            Certain currencies, such as **Badges of Justice** and **Honor Marks**, are now account-bound. You can farm heroics on your tank to buy gear for your fresh healer.`
        },
        {
            id: 'paragons',
            title: "Paragon Reputations",
            subtitle: "Beyond Exalted",
            icon: <Star className="w-6 h-6" />,
            image: "https://i.imgur.com/6Yw2mgM.jpeg",
            quote: "Legends are not born; they are forged in repetition.",
            content: `**"The Grind Never Ends... But It Is Rewarding."**

            For those who have truly dedicated themselves to a faction, the journey does not end at Exalted.

            **Prestige Ranks**
            Every 10,000 reputation gained past Exalted grants a **Paragon Cache**. This allows you to continue running dungeons and completing dailies for meaningful rewards long after the bar is full.

            **The Rewards**
            These caches do *not* contain player power (no gear score increases). Instead, they contain:
            *   **Visual Enchantments:** Faction-specific glows for weapons (e.g., *Cenarion Blossoms* for Druids, *Fel-Green Fire* for Warlocks).
            *   **Unique Mounts:** Armored or recolored versions of faction mounts (e.g., *Armored Netherwing Drake*).
            *   **Titles:** "The Diplomat," "Justicar," "Peacekeeper."

            **TBC+ Philosophy**
            Keep the content relevant for the hardcore players without making casual players feel underpowered in raids. You grind for cosmetic prestige, not for stats.`
        },
        {
            id: 'void_trials',
            title: "Void-Shifted Trials",
            subtitle: "The Mage Tower 2.0",
            icon: <Ghost className="w-6 h-6" />,
            image: "https://i.imgur.com/r0Z0Hbz.jpeg",
            quote: "The Ethereum collects histories. Can you survive yours?",
            content: `**"A Reflection of Failure."**

            Nexus-Prince Shaffar has opened the **Vault of Possibilities** in the Netherstorm. He challenges heroes to enter simulations of their greatest potential failures.

            **Solo Challenge**
            A brutal, high-skill solo encounter tuned specifically for your Class Spec. Gear is normalized—skill is the only variable. You cannot out-gear this challenge; you must out-play it.

            **The Scenarios**
            *   **Tanks (The Black Morass):** Hold the line against an endless Legion invasion. If a single demon passes, Medivh dies.
            *   **Healers (The Collapsing Mine):** Keep a squad of reckless goblin sappers alive in a collapsing mine while they defuse bombs.
            *   **DPS (The Dark Mirror):** Duel a "Dark Mirror" of yourself that uses your own abilities against you.

            **The Prize**
            *   **Tier 2 "Void-Touched" Recolors:** The classic Tier 2 armor sets (Judgement, Bloodfang, Nemesis) reimagined with high-res textures and void effects.
            *   **Class Artifact Weapons:** Unique weapon models that represent the pinnacle of your class fantasy.`
        },
        {
            id: 'class_enclaves',
            title: "Class Enclaves",
            subtitle: "Sanctuaries for the Initiated",
            icon: <Shield className="w-6 h-6" />,
            image: "https://i.imgur.com/DGuTBch.jpeg",
            quote: "Some secrets are only for those with the will to keep them.",
            content: `**"A Clubhouse for Heroes."**

            Not a military garrison, but a secret sanctuary. These are small, flavor-rich locations in the world where only specific classes can enter.

            **Locations**
            *   **Rogues:** The basement of Ravenholdt Manor (accessible via a hidden door in the wine cellar).
            *   **Warlocks:** The Shadowbreak, a pocket dimension in the Twisting Nether (accessible via a portal in the Slaughtered Lamb).
            *   **Paladins:** The Light’s Hope Chapel Crypts, where the ashes of the great lie.
            *   **Druids:** The Emerald Dreamway, a lush path connecting the great trees of Azeroth.
            *   **Hunters:** Nesingwary’s Lodge Private Trophy Room.

            **Features**
            *   **Class Vendors:** Selling unique cosmetic glyphs and reagents.
            *   **The Dueling Circle:** A place to test builds against members of your own class.
            *   **Dark Rumors:** NPCs that provide hints toward hidden world treasures or class-specific epic quests.`
        },
        {
            id: 'adventure_guide',
            title: "The Adventure Guide",
            subtitle: "Dungeon Journal",
            icon: <Map className="w-6 h-6" />,
            image: "https://i.imgur.com/aU00hfX.jpeg",
            quote: "Knowledge is the first weapon of the adventurer.",
            content: `**"Know Your Enemy."**

            An in-game journal detailing the lore and loot of the dungeons. It serves as a centralized database for the adventurer.

            **TBC+ Twist**
            The guide does *not* explain mechanics or show boss abilities. That is for you to discover and the community to document. We believe the mystery of the encounter is part of the challenge.

            **Features**
            *   **Lore:** Why are we killing this boss? What is their story?
            *   **Loot Table:** accurately lists what drops, including drop rates.
            *   **3D Model Viewer:** Inspect the boss model in detail before you face them.
            *   **Cartography:** Detailed maps of the instance, including patrol routes of dangerous trash packs.`
        }
    ];

    const activeData = systems.find(s => s.id === activeSystem);

    return (
        <div className="min-h-screen bg-[#050505] text-stone-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
                .font-hero { font-family: 'Cinzel', serif; }
                .font-body { font-family: 'Lato', sans-serif; }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
            `}</style>

            <UnifiedHeader
                icon={Zap}
                background="https://i.imgur.com/nqPIP1z.jpeg"
                section="Game Mechanics"
                sub="Evolution"
                title="Systems"
                quote="The engine of war has been refined."
            />

            <main className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT COLUMN: NAVIGATION */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        <div className="bg-[#111] p-6 rounded-lg border border-stone-800 mb-6">
                            <h2 className="font-hero text-2xl text-[#c29c55] mb-2 uppercase tracking-widest">System Protocols</h2>
                            <p className="text-sm text-stone-500 font-body">Select a module to view detailed schematics.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            {systems.map((sys) => (
                                <button
                                    key={sys.id}
                                    onClick={() => setActiveSystem(sys.id)}
                                    className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 text-left group ${activeSystem === sys.id
                                            ? 'bg-[#1a1c22] border-[#c29c55] shadow-[0_0_15px_rgba(194,156,85,0.2)]'
                                            : 'bg-[#0f0f10] border-white/5 hover:border-white/10 hover:bg-[#151515]'
                                        }`}
                                >
                                    <div className={`p-2 rounded-full border ${activeSystem === sys.id ? 'border-[#c29c55] text-[#c29c55]' : 'border-stone-700 text-stone-500 group-hover:text-stone-300'} transition-colors`}>
                                        {sys.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`font-hero text-sm font-bold uppercase tracking-wide ${activeSystem === sys.id ? 'text-[#c29c55]' : 'text-stone-400 group-hover:text-stone-200'}`}>
                                            {sys.title}
                                        </span>
                                        <span className="text-[10px] text-stone-600 uppercase tracking-widest font-mono">
                                            {sys.subtitle}
                                        </span>
                                    </div>
                                    {activeSystem === sys.id && (
                                        <div className="ml-auto w-1.5 h-1.5 bg-[#c29c55] rounded-full shadow-[0_0_5px_#c29c55] animate-pulse"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CONTENT DETAIL */}
                    <div className="w-full lg:w-2/3">
                        {activeData && (
                            <div className="bg-[#111] border border-stone-800 rounded-xl overflow-hidden shadow-2xl relative min-h-[800px] animate-fade-in">

                                {/* Header Image */}
                                <div className="h-64 w-full relative">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111]/50 to-[#111] z-10"></div>
                                    <img
                                        src={activeData.image}
                                        alt={activeData.title}
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                    <div className="absolute bottom-0 left-0 p-8 z-20">
                                        <h2 className="font-hero text-4xl md:text-5xl text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] uppercase tracking-wider mb-2">
                                            {activeData.title}
                                        </h2>
                                        <p className="font-hero text-[#c29c55] text-sm uppercase tracking-[0.2em] bg-black/60 backdrop-blur-sm inline-block px-3 py-1 rounded border border-[#c29c55]/30">
                                            {activeData.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-8 md:p-12 relative">
                                    {/* Decorative Quote */}
                                    <div className="mb-8 pl-6 border-l-2 border-[#c29c55] italic text-stone-400 font-serif text-lg">
                                        "{activeData.quote}"
                                    </div>

                                    {/* Main Text */}
                                    <div className="font-body text-stone-300 text-lg leading-relaxed space-y-6">
                                        {formatText(activeData.content)}
                                    </div>

                                    {/* Footer / Status Line */}
                                    <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-stone-600 uppercase tracking-widest">
                                        <span>System Status: Online</span>
                                        <span>TBC+ Core Module</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Systems;
