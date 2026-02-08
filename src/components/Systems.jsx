import React, { useState, useEffect } from 'react';
import { Users, Shirt, RefreshCw, Box, Globe, Shield, Zap, BookOpen, Star, Ghost, Map, MapPin, Scroll, Compass, Anchor, Layout, Sword, Crown, Settings, Sparkles, Coins, Hammer, Leaf, Skull, Droplet, ArrowRight, X, Check, Monitor, Lock, Unlock } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const Systems = ({ setPage }) => {
    const [activeSystem, setActiveSystem] = useState('seamless');
    const [comparisonMode, setComparisonMode] = useState(false);

    // COMPONENT: Smart Tooltip
    // Replaces bold text with interactive hover elements
    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').filter(line => line.trim() !== '').map((line, i) => (
            <p key={i} className="mb-4">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
                    if (part.startsWith('**')) {
                        const content = part.slice(2, -2);
                        return (
                            <span key={j} className="relative group cursor-help inline-block">
                                <strong className="text-[#c29c55] font-normal border-b border-dashed border-[#c29c55]/50 group-hover:border-[#c29c55] transition-colors">{content}</strong>
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-black/95 border border-[#c29c55]/30 rounded shadow-xl text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                                    <span className="block text-[#c29c55] font-bold mb-1 uppercase tracking-wider text-[10px]">TBC+ Mechanic</span>
                                    Contextual info for "{content}" would appear here, explaining the specific mechanic in depth.
                                    <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-r border-b border-[#c29c55]/30 transform rotate-45"></span>
                                </span>
                            </span>
                        );
                    }
                    return part;
                })}
            </p>
        ));
    };

    // COMPONENT: System Visualizer
    // Renders dynamic, animated diagrams based on the active system
    const SystemVisualizer = ({ systemId }) => {
        if (systemId === 'seamless') {
            return (
                <div className="relative w-full h-64 bg-[#0a0a0a] rounded-lg overflow-hidden border border-white/10 group">
                    <div className="absolute inset-0 bg-[url('https://i.imgur.com/qBElKqm.jpeg')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-700 active-pan"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center border border-blue-500 mb-2">
                                    <MapPin className="text-blue-400" />
                                </div>
                                <span className="text-xs font-bold text-blue-400 uppercase">Elwynn</span>
                            </div>
                            {/* Animated Connection */}
                            <div className="h-1 w-32 bg-gray-800 rounded relative overflow-hidden">
                                <div className="absolute top-0 left-0 h-full w-full bg-green-500/50 animate-progress"></div>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center border border-red-500 mb-2">
                                    <MapPin className="text-red-400" />
                                </div>
                                <span className="text-xs font-bold text-red-400 uppercase">Stormwind</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="text-green-400 text-xs font-mono font-bold px-2 py-1 bg-black/50 rounded border border-green-500/30">NO LOADING SCREEN</span>
                    </div>
                    <style jsx>{`
                        @keyframes progress { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
                        .animate-progress { animation: progress 2s infinite linear; }
                        @keyframes pan { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
                        .active-pan { animation: pan 20s infinite alternate linear; }
                    `}</style>
                </div>
            );
        }
        if (systemId === 'dual_spec') {
            return (
                <div className="relative w-full h-64 bg-[#0a0a0a] rounded-lg overflow-hidden border border-white/10 flex items-center justify-center gap-8">
                    <div className="relative w-40 h-56 bg-[#111] border border-stone-700 rounded p-2 flex flex-col items-center opacity-40 hover:opacity-100 transition-all cursor-pointer">
                        <Shield className="w-8 h-8 text-blue-500 mb-2" />
                        <div className="w-full h-2 bg-stone-800 rounded mb-2"><div className="w-3/4 h-full bg-blue-500 rounded"></div></div>
                        <span className="text-xs text-blue-300 font-bold uppercase">Protection</span>
                    </div>
                    <Settings className="text-[#c29c55] animate-spin-slow" />
                    <div className="relative w-40 h-56 bg-[#111] border border-[#c29c55] rounded p-2 flex flex-col items-center shadow-[0_0_20px_rgba(194,156,85,0.2)]">
                        <div className="absolute -top-3 -right-3 bg-yellow-600 text-black text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">ACTIVE</div>
                        <Sword className="w-8 h-8 text-red-500 mb-2" />
                        <div className="w-full h-2 bg-stone-800 rounded mb-2"><div className="w-3/4 h-full bg-red-500 rounded"></div></div>
                        <div className="space-y-1 w-full">
                            <div className="w-full h-1 bg-stone-800 rounded"></div>
                            <div className="w-2/3 h-1 bg-stone-800 rounded"></div>
                            <div className="w-5/6 h-1 bg-stone-800 rounded"></div>
                        </div>
                        <span className="mt-auto text-xs text-red-300 font-bold uppercase">Retribution</span>
                    </div>
                </div>
            );
        }
        // Default Fallback
        return null;
    };

    const systems = [
        {
            id: 'seamless',
            title: "Seamless World",
            subtitle: "One World, Under the Sky",
            icon: <img src="https://i.imgur.com/0wGYI2N.png" className="w-8 h-8 object-cover" />,
            image: "https://i.imgur.com/qBElKqm.jpeg",
            quote: "The boundaries have dissolved. The world breathes as one.",
            content: `**"One World, Under the Sky."**

            The loading screens that once fractured Azeroth have been dissolved. The borders between zones are now fluid, allowing for unprecedented immersion.

            **No Instanced Cities**
            Walk through the gates of Stormwind or Orgrimmar without a pause. The capital cities are now part of the open world. You can ride from Elwynn Forest straight into the Trade District without a single loading screen interrupting your journey. This opens up massive opportunities for city raids and defense—no longer can an invading force hide behind an instance portal.

            **True-Flight Paths**
            Wyverns and Gryphons no longer fade out into a loading screen. You can see players fighting below as you fly over contested territories. The flight paths are now physical entities in the world; if a mage blasts you while you pass over the Gurubashi Arena, you WILL fall.`,
            vanilla: "Loading screens between zones. Cities are instances. Flight paths fade out.",
            tbc_plus: "No loading screens. Continuous world. Real-time flight paths."
        },
        {
            id: 'codex',
            title: "Codex of Antiquities",
            subtitle: "The Collection Tab",
            icon: <img src="https://i.imgur.com/19wWX90.png" className="w-8 h-8 object-cover" />,
            image: "https://i.imgur.com/Zt35D7n.jpeg",
            quote: "A library of conquest, bound in leather and blood.",
            content: `**"A Library of Conquest."**

            We have moved the physical clutter from your bags to a mystical tome, but we have kept the RPG spirit alive. Items are not magically learned; they must be inscribed.

            **The Scribe’s Desk**
            You do not automatically "learn" a mount or pet just by right-clicking it. You must take the item to a **Scribe** (Inscription Profession) in a capital city to have it added to your Codex. This preserves the roleplay element of "studying" a new companion or beast.

            **Account-Wide Access**
            Once inscribed, all characters on your **War Band** have access to Mounts, Companions, Heirlooms, and Toys.`,
            vanilla: "Mounts/Pets take up bag space. Character specific.",
            tbc_plus: "Account-wide Collections. 'Inscription' RPG mechanic to learn."
        },
        {
            id: 'dual_spec',
            title: "Dual Specialization",
            subtitle: "Tactical Mastery",
            icon: <img src="https://i.imgur.com/WgYXiAC.png" className="w-8 h-8 object-cover" />,
            image: "https://i.imgur.com/VZCgrr6.jpeg",
            quote: "A warrior must be a shield one day, and a sword the next.",
            content: `**"Adapt. Overcome. Survive."**

            The war against the Illidari requires versatility. Heroes may now maintain two distinct configurations of talents and action bars.

            **The Cost of Versatility**
            Unlocking your second specialization requires a one-time, significant gold investment (1000g).

            **The Campsite Restriction**
            You must be at a **Rest Area** (Inn or City) or use a **Tome of the Clear Mind** to change your focus.`,
            vanilla: "Respec costs gold (up to 50g) every time. Visit trainer manually.",
            tbc_plus: "Two preset specs. Swap anytime in Rest Areas. One-time unlock fee."
        },
        {
            id: 'warbands',
            title: "The Vanguard",
            subtitle: "Account-Wide Command",
            icon: <img src="https://i.imgur.com/ircqK4w.png" className="w-8 h-8 object-cover" />,
            image: "https://i.imgur.com/7AYI6Zh.jpeg",
            quote: "Blood runs thicker than water, but gold binds the company.",
            content: `**"The Company You Keep."**

            Your characters are no longer isolated loners; they are part of a mercenary company under your banner—**The Vanguard**.

            **The Forward Operating Base**
            Your character selection screen is now a **Warband Housing** encampment.

            **Consortium Logistics**
            A massive 100-slot shared bank allows instant transfer of materials.`,
            vanilla: "No shared bank. Mailing alts takes 1 hour. No visual connection.",
            tbc_plus: "Shared Bank. Instant Warband Transfer. Campsite Login Screen."
        },
        {
            id: 'paragons',
            title: "Paragon Reputations",
            subtitle: "Beyond Exalted",
            icon: <img src="https://i.imgur.com/ZUZTqCW.png" className="w-8 h-8 object-cover" />,
            image: "https://i.imgur.com/6Yw2mgM.jpeg",
            quote: "Legends are not born; they are forged in repetition.",
            content: `**"The Grind Never Ends... But It Is Rewarding."**

            For those who have truly dedicated themselves to a faction, the journey does not end at Exalted.

            **Prestige Ranks**
            Every 10,000 rep past Exalted grants a **Paragon Cache**. This allows you to continue running dungeons for rewards long after the bar is full.`,
            vanilla: "Reputation stops at 999/1000 Exalted. No further rewards.",
            tbc_plus: "Infinite Paragon levels. Caches with cosmetics/gold."
        },
        {
            id: 'class_enclaves',
            title: "Class Enclaves",
            subtitle: "Sanctuaries",
            icon: <img src="https://i.imgur.com/oeKUdqB.png" className="w-8 h-8 object-cover" />,
            image: "https://i.imgur.com/DGuTBch.jpeg",
            quote: "Some secrets are only for those with the will to keep them.",
            content: `**"A Home for Your Kind."**

            Every class now has a dedicated "Enclave"—a secret base of operations hidden within the world.
            
            **The Sanctuaries**
            Warlocks have a Legion Cruiser. Rogues have Ravenholdt Cellars. Shamans have the Throne of the Elements.`,
            vanilla: "Classes have trainers in cities. No specific hub.",
            tbc_plus: "Dedicated Class Halls (Enclaves) with unique vendors and quests."
        },
        {
            id: 'adventure_guide',
            title: "The Adventure Guide",
            subtitle: "Scribe's Journal",
            icon: <img src="https://i.imgur.com/wmfhSuO.png" className="w-8 h-8 object-cover" />,
            image: "https://i.imgur.com/aU00hfX.jpeg",
            quote: "Knowledge is the first weapon of the adventurer.",
            content: `**"Knowledge is Power."**

            The Adventure Guide is not a strategy guide; it is a cartographer's journal. It provides the tools you need to plan your expedition without breaking immersion.

            **The Atlas**
            View detailed floor plans of every dungeon and raid, including boss locations and patrol routes.`,
            vanilla: "No in-game maps for instances. Third-party sites needed.",
            tbc_plus: "In-game Dungeon Journal with loot tables and lore."
        },
        {
            id: 'qol_updates',
            title: "Quality of Life",
            subtitle: "Modern Comforts",
            icon: <Settings className="w-8 h-8" />,
            image: "https://i.imgur.com/8WViTgN.png",
            quote: "We have removed the friction, not the challenge.",
            content: `**"Modern Comforts, Classic Soul."**

            We have surgically removed the "tedium" while preserving the "friction" that makes the world feel real.
            
            **Highlights**
            Guild Banks, Calendar, Equipment Manager, Reagent Bank, Mass Mail, Auto-Loot.`,
            vanilla: "Manual everything. No guild bank.",
            tbc_plus: "Guild Banks, Calendar, AoE Loot, Mass Mail."
        }
    ];

    const [activeEnclave, setActiveEnclave] = useState('warrior');
    const classEnclaves = {
        warrior: {
            name: "The Ring of Trials",
            location: "Nagrand (Instanced Wing)",
            vibe: "Gladiatorial Combat, Valhalla-lite",
            image: "https://i.imgur.com/wJbmNeR.png",
            bg: "https://i.imgur.com/DGuTBch.jpeg",
            desc: "A massive, suspended arena floating above the ancestral grounds of Nagrand. Here, warriors of all races—Horde and Alliance—clash to prove their might under the gaze of the War-Gods. It is a place of honor, sweat, and steel.",
            features: [
                { title: "Mercenary Contracts", icon: <Scroll className="w-4 h-4 text-[#c29c55]" />, desc: "The **Bulletin Board** lists players seeking protection. Sign up to tank for a group to earn 'Marks of Honor'." },
                { title: "The Armory", icon: <Shield className="w-4 h-4 text-[#c29c55]" />, desc: "A forge where you can melt down old tier sets to upgrade your current gear's visuals." },
                { title: "Sparring Pit", icon: <Sword className="w-4 h-4 text-[#c29c55]" />, desc: "Test your DPS on boss-level gladiators that actually fight back." }
            ]
        },
        paladin: {
            name: "Sanctum of Light",
            location: "Light's Hope Chapel (Undercroft)",
            vibe: "Holy Order, Stained Glass",
            image: "https://i.imgur.com/dpHn8vW.png",
            bg: "https://i.imgur.com/nbn8UHD.jpeg",
            desc: "Beneath the hallowed grounds of the chapel lies the true headquarters of the Silver Hand. Paladins gather here to coordinate the crusade against the darkness, bathed in the eternal glow of the Naaru shards.",
            features: [
                { title: "Call to Crusade", icon: <Scroll className="w-4 h-4 text-[#c29c55]" />, desc: "The **Bulletin Board** connects you with groups hunting Undead or Demons. Grants bonus reputation." },
                { title: "Libram Library", icon: <BookOpen className="w-4 h-4 text-[#c29c55]" />, desc: "Unlock ancient blessings that provide non-combat utility (e.g., faster mount speed)." },
                { title: "Altar of Tithe", icon: <Coins className="w-4 h-4 text-[#c29c55]" />, desc: "Donate gold to the order to receive temporary buffs in raid instances." }
            ]
        },
        hunter: {
            name: "The Pathfinder's Lodge",
            location: "Spirit Fields, Nagrand",
            vibe: "Trophy Room, Cozy Fireplace",
            image: "https://i.imgur.com/qtQxThz.png",
            bg: "https://i.imgur.com/O9XtjlG.png",
            desc: "A rough-hewn lodge atop a mountain peak, filled with the trophies of incredible beasts. Hunters swap stories by the fire, mend their gear, and stable their exotic pets.",
            features: [
                { title: "The Big Game Hunt", icon: <Scroll className="w-4 h-4 text-[#c29c55]" />, desc: "The **Bulletin Board** tracks the spawn timers of Rare Elites worldwide. Form hunting parties instantly." },
                { title: "Stable Master", icon: <Box className="w-4 h-4 text-[#c29c55]" />, desc: "Manage your stable of 50+ pets. Rename them, customize their collars, and train them." },
                { title: "Taxidermy", icon: <Skull className="w-4 h-4 text-[#c29c55]" />, desc: "Kill raid bosses to unlock statues of them for your personal wing of the lodge." }
            ]
        },
        rogue: {
            name: "Ravenholdt Manor",
            location: "Hidden in Alterac Mountains",
            vibe: "Spy Network, Shadows",
            image: "https://wowmeta.com/_app/immutable/assets/rogue.BcZrWFcx.png",
            bg: "https://wowmeta.com/_app/immutable/assets/classic-rogue-assassination.BssFEmMX.png",
            desc: "The public sees a noble estate; the initiated know the sprawling cellars beneath. Rogues trade secrets, poisons, and stolen goods in the candlelit darkness.",
            features: [
                { title: "Black Market Contracts", icon: <Scroll className="w-4 h-4 text-[#c29c55]" />, desc: "The **Bulletin Board** offers 'Hit Jobs' (PvP Bounties) and 'Heists' (Dungeon Stealth Runs)." },
                { title: "Fence Network", icon: <Coins className="w-4 h-4 text-[#c29c55]" />, desc: "Sell gray items for 200% value. Buy exclusive poisons and vanishing powder." },
                { title: "Duelist's Den", icon: <Sword className="w-4 h-4 text-[#c29c55]" />, desc: "A free-for-all PvP zone inside the enclave. Wagers allowed." }
            ]
        },
        priest: {
            name: "Temple of the Moon",
            location: "Unknown Separation Layer",
            vibe: "Balance of Void and Light",
            image: "https://i.imgur.com/yKNBawv.png",
            bg: "https://i.imgur.com/2JfVmju.png",
            desc: "A sanctum that exists between the Light and the Shadow. Priests of all faiths gather here to debate philosophy and maintain the cosmic balance.",
            features: [
                { title: "Confessional", icon: <Scroll className="w-4 h-4 text-[#c29c55]" />, desc: "The **Bulletin Board** lists players requesting urgent healing for difficult elite quests." },
                { title: "Moonwell", icon: <Droplet className="w-4 h-4 text-[#c29c55]" />, desc: "Craft Mooncloth without a cooldown. Create 'Vials of Light' for your party." },
                { title: "Archive of Prophecy", icon: <BookOpen className="w-4 h-4 text-[#c29c55]" />, desc: "Read lore books that hint at future expansion content." }
            ]
        },
        shaman: {
            name: "Throne of the Elements",
            location: "Nagrand",
            vibe: "Open Air, Totem Circles",
            image: "https://i.imgur.com/8ChsJBV.png",
            bg: "https://i.imgur.com/38aMS1Y.png",
            desc: "The literal seat of elemental power on Outland. Shamans commune directly with the Furies to restore balance to the shattered world.",
            features: [
                { title: "Elemental Unrest", icon: <Scroll className="w-4 h-4 text-[#c29c55]" />, desc: "The **Bulletin Board** shows zones with active Elemental Invasions. Port directly to defend them." },
                { title: "Totem Carving", icon: <Hammer className="w-4 h-4 text-[#c29c55]" />, desc: "Customize the visual appearance of your totems (e.g., Tuskarr-style, Tauren-style)." },
                { title: "Vision Quest", icon: <Ghost className="w-4 h-4 text-[#c29c55]" />, desc: "Enter the spirit realm to fight ghosts of ancestors for cosmetic rewards." }
            ]
        },
        mage: {
            name: "The Violet Citadel",
            location: "Dalaran (Crystalsong Forest)",
            vibe: "Arcane Library, Floating Books",
            image: "https://i.imgur.com/TRNTMys.png",
            bg: "https://i.imgur.com/Zt0BQe6.png",
            desc: "The Spire of the Kirin Tor. Mages study forbidden texts, practice new polymorphs, and weave the ley lines of Azeroth.",
            features: [
                { title: "Ley Line Network", icon: <Scroll className="w-4 h-4 text-[#c29c55]" />, desc: "The **Bulletin Board** requests Mages to stabilize portals. Grants 'Teleport: Raid Entrance' spells." },
                { title: "Scriptorium", icon: <BookOpen className="w-4 h-4 text-[#c29c55]" />, desc: "Learn to craft cosmetic spell variants (e.g., Blue Fire, Rainbow Missiles)." },
                { title: "Construct Lab", icon: <Settings className="w-4 h-4 text-[#c29c55]" />, desc: "Build a temporary Arcane Golem guardian." }
            ]
        },
        warlock: {
            name: "The Shattered Sanctum",
            location: "Legion Cruiser (Nether)",
            vibe: "Dark Rituals, Fel Green",
            image: "https://i.imgur.com/ZAsJNiE.jpeg",
            bg: "https://i.imgur.com/iGZVgov.png",
            desc: "A captured Legion ship, piloted by the Council of the Black Harvest. It drifts in the Nether, a base for those who fight fire with fire.",
            features: [
                { title: "Soul Trade", icon: <Scroll className="w-4 h-4 text-[#c29c55]" />, desc: "The **Bulletin Board** offers 'Summoning Rituals'. Players pay you gold to summon their raid." },
                { title: "Demon Pit", icon: <Skull className="w-4 h-4 text-[#c29c55]" />, desc: "Pit your enslaved demons against each other in auto-battler combat." },
                { title: "Fel Forge", icon: <Zap className="w-4 h-4 text-[#c29c55]" />, desc: "Infuse your gear with Fel energy for visual green fire effects." }
            ]
        },
        druid: {
            name: "The Dreamgrove",
            location: "Val'sharah / Moonglade",
            vibe: "Nature, Emerald Dream",
            image: "https://i.imgur.com/xqYw2gI.png",
            bg: "https://i.imgur.com/su1345k.jpeg",
            desc: "A sanctuary within the Emerald Dream itself. Druids hibernate, tend to the world tree, and protect the slumbering spirits of the wild.",
            features: [
                { title: "Circle of Life", icon: <Scroll className="w-4 h-4 text-[#c29c55]" />, desc: "The **Bulletin Board** requests healers for 'Dream Raids' (cleansing nightmares)." },
                { title: "Seed Couch", icon: <Leaf className="w-4 h-4 text-[#c29c55]" />, desc: "Plant seeds that grow into reagents or cosmetic pets over 3 days." },
                { title: "Waystones", icon: <Map className="w-4 h-4 text-[#c29c55]" />, desc: "Instant teleport network to any natural location in Azeroth." }
            ]
        },
    };

    // Sub-components for QoL and Enclaves (from previous implementation, simplified for brevity in this full pass)
    // I am including them if they were separate, but here I will integrate their simple rendering or keep them if they were external.
    // Since I am writing the Full file, I must include all logic.

    // Sub-component for Quality of Life Updates
    const QoLView = () => {
        const [activeTab, setActiveTab] = useState('major');

        const qolData = {
            major: {
                id: 'major',
                title: "Major Systems",
                color: "#c29c55", // Gold
                icon: <Crown className="w-5 h-5" />,
                desc: "Fundamental structural changes that modernize the game.",
                features: [
                    { title: "Guild Banks", desc: "Fully integrated vast storage for guilds. Features permission-locked tabs, transaction logs, and gold deposits." },
                    { title: "The Calendar", desc: "A built-in raid planner. Guild Masters can schedule raids, invite members, and track sign-ups (Accepted/Declined/Tentative)." },
                    { title: "Dual Specialization", desc: "Swap between two specs for 1000g. Requires visiting a trainer or rest area to change." },
                    { title: "Equipment Manager", desc: "Built-in tool to save and swap gear sets (e.g., Tank Set, PvP Set) with one click." }
                ]
            },
            inventory: {
                id: 'inventory',
                title: "Inventory & Economy",
                color: "#60a5fa", // Blue
                icon: <Box className="w-5 h-5" />,
                desc: "Streamlining the items you carry and the gold you spend.",
                features: [
                    { title: "The Reagent Bank", desc: "A dedicated, infinite-scroll tab in your personal bank specifically for crafting materials." },
                    { title: "Increased Stack Sizes", desc: "Ore, cloth, herbs, potions, and elixirs now stack to 20 or 200." },
                    { title: "The Token Keyring", desc: "Currencies (Badges, Marks) are now stored in the Currency tab, not bag slots." },
                    { title: "Account-Wide Gold", desc: "Transfer gold instantly between your War Band characters via the War Chest." },
                    { title: "Mass Mail", desc: "\"Open All\" button to collect all attachments instantly." },
                    { title: "Junk Seller", desc: "A \"Sell Greys\" button at every vendor." },
                    { title: "Loot Trading", desc: "A 2-hour window to trade soulbound raid drops with eligible party members." },
                    { title: "Auto-Loot", desc: "Option to enable auto-loot by default (no Shift-click needed)." }
                ]
            },
            combat: {
                id: 'combat',
                title: "Combat & Gameplay",
                color: "#f87171", // Red
                icon: <Sword className="w-5 h-5" />,
                desc: "Refining the moment-to-moment action.",
                features: [
                    { title: "Target of Target", desc: "Enabled by default in UI settings." },
                    { title: "Enemy Cast Bars", desc: "Built-in nameplate cast bars." },
                    { title: "Modern Raid Frames", desc: "Grid-style unit frames available in the default UI." },
                    { title: "Training Dummies", desc: "Boss-level (Skull) dummies added to all major cities." },
                    { title: "Debuff Limit Removed", desc: "The 16-slot debuff limit is gone. DoT classes can play freely." },
                    { title: "Faster Weapon Skills", desc: "Weapon skills start higher or level 5x faster." },
                    { title: "Reduced Spell Costs", desc: "Raid buffs (Arcane Brilliance) require fewer reagents / last 60 mins." }
                ]
            },
            travel: {
                id: 'travel',
                title: "Travel & Progression",
                color: "#4ade80", // Green
                icon: <Compass className="w-5 h-5" />,
                desc: "Smoothing the journey from 1 to 70.",
                features: [
                    { title: "Mounts at Level 30", desc: "Apprentice Riding (60%) is now learnable at level 30 (was 40)." },
                    { title: "Instant Flight Paths", desc: "Fly directly to the destination without landing at every stop." },
                    { title: "Reduced Hearthstone", desc: "Cooldown lowered to 30 minutes (from 60)." },
                    { title: "Summoning Stones", desc: "Function like Warlock rituals (click-to-summon)." },
                    { title: "Instant Quest Text", desc: "Toggle option to display text instantly." },
                    { title: "Shared Reputations", desc: "Wearing a faction tabard in dungeons grants reputation (WotLK style)." }
                ]
            }
        };

        const activeCategory = qolData[activeTab];

        return (
            <div className="animate-fade-in h-full flex flex-col bg-[#0f0f10]">
                {/* Header Section */}
                <div className="relative h-64 shrink-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#111]/80 to-[#0f0f10] z-10"></div>
                    <img
                        src="https://i.imgur.com/8WViTgN.png"
                        className="w-full h-full object-cover opacity-60"
                        alt="Quality of Life"
                    />
                    <div className="absolute bottom-6 left-8 z-20">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-stone-800 to-black border border-white/10 flex items-center justify-center shadow-2xl">
                                <Settings className="w-8 h-8 text-[#c29c55]" />
                            </div>
                            <h2 className="font-hero text-4xl text-white drop-shadow-lg">Quality of Life</h2>
                        </div>
                        <p className="text-[#c29c55] font-hero text-sm uppercase tracking-widest pl-20">
                            Modern Comforts | Classic Soul
                        </p>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-1 p-4 bg-[#0a0a0a] border-b border-white/5 overflow-x-auto scrollbar-hide shrink-0">
                    {Object.values(qolData).map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-hero uppercase tracking-widest transition-all whitespace-nowrap border ${activeTab === cat.id
                                ? `bg-[${cat.color}]/10 border-[${cat.color}] text-[${cat.color}] shadow-[0_0_15px_rgba(0,0,0,0.5)]`
                                : 'bg-[#1a1a1a] border-transparent text-gray-500 hover:bg-[#222] hover:text-gray-300'
                                }`}
                            style={{
                                borderColor: activeTab === cat.id ? cat.color : 'transparent',
                                color: activeTab === cat.id ? cat.color : undefined
                            }}
                        >
                            {cat.icon}
                            {cat.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1 bg-gradient-to-b from-[#0f0f10] to-[#050505]">
                    <div className="flex items-start gap-4 mb-8 p-6 bg-white/5 rounded border border-white/5">
                        <div style={{ color: activeCategory.color }} className="mt-1">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-hero text-white mb-2" style={{ color: activeCategory.color }}>
                                {activeCategory.title}
                            </h3>
                            <p className="font-body text-gray-400 text-lg leading-relaxed">
                                {activeCategory.desc}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeCategory.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-[#131313] border border-white/5 p-6 rounded hover:border-white/10 transition-all hover:bg-[#161616]"
                            >
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ backgroundColor: activeCategory.color }}
                                ></div>
                                <h4 className="font-hero text-gray-200 text-base mb-2 group-hover:text-white transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed font-body">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const EnclaveView = () => {
        const enclave = classEnclaves[activeEnclave];
        // Helper to parse bold text without wrapping in paragraphs (for inline use)
        const parseBold = (text) => {
            if (!text) return null;
            return text.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                part.startsWith('**') ? <strong key={j} className="text-[#c29c55] font-normal">{part.slice(2, -2)}</strong> : part
            );
        };

        return (
            <div className="animate-fade-in h-full flex flex-col">
                {/* Enclave Header with BG */}
                <div className="relative h-64 shrink-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] z-10"></div>
                    <img src={enclave.bg} className="w-full h-full object-cover opacity-60" alt={enclave.name} />
                    <div className="absolute bottom-6 left-8 z-20">
                        <div className="flex items-center gap-4 mb-2">
                            <img src={enclave.image} className="w-12 h-12 rounded border border-[#c29c55] shadow-lg" />
                            <h2 className="font-hero text-3xl text-white">{enclave.name}</h2>
                        </div>
                        <p className="text-[#c29c55] font-hero text-xs uppercase tracking-widest pl-16">
                            {enclave.location} | {enclave.vibe}
                        </p>
                    </div>
                </div>

                {/* Class Selector */}
                <div className="flex gap-2 p-4 bg-[#0a0a0a] border-b border-white/5 overflow-x-auto scrollbar-hide shrink-0">
                    {Object.keys(classEnclaves).map((cls) => (
                        <button
                            key={cls}
                            onClick={() => setActiveEnclave(cls)}
                            className={`px-4 py-2 rounded text-xs font-hero uppercase tracking-widest transition-all whitespace-nowrap ${activeEnclave === cls
                                ? 'bg-[#c29c55] text-black'
                                : 'bg-[#1a1a1a] text-gray-500 hover:bg-[#222] hover:text-gray-300'
                                }`}
                        >
                            {cls}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1">
                    <p className="font-body text-gray-300 leading-relaxed text-lg border-l-4 border-[#c29c55] pl-6 italic">
                        "{parseBold(enclave.desc)}"
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Bulletin Board Feature */}
                        <div className="md:col-span-2 bg-[#161616] border border-[#c29c55]/30 p-6 rounded-lg relative overflow-hidden group hover:border-[#c29c55]/60 transition-colors">
                            <div className="absolute top-0 right-0 p-16 bg-[#c29c55]/5 rounded-full blur-2xl"></div>
                            <div className="relative z-10 flex gap-4">
                                <div className="p-3 bg-[#c29c55]/10 rounded h-fit text-[#c29c55]">
                                    {enclave.features[0].icon}
                                </div>
                                <div>
                                    <h4 className="font-hero text-[#c29c55] text-lg mb-2">{enclave.features[0].title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{parseBold(enclave.features[0].desc)}</p>
                                </div>
                            </div>
                        </div>

                        {/* Other Features */}
                        {enclave.features.slice(1).map((feature, idx) => (
                            <div key={idx} className="bg-[#161616] border border-white/5 p-6 rounded-lg flex gap-4 hover:bg-[#1a1a1a] transition-colors">
                                <div className="p-2 bg-white/5 rounded h-fit text-gray-400">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="font-hero text-gray-200 text-sm mb-1 uppercase tracking-wider">{feature.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">{parseBold(feature.desc)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };


    const activeData = systems.find(s => s.id === activeSystem);

    return (
        <div className="min-h-screen bg-[#050505] text-stone-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
                .font-hero { font-family: 'Cinzel', serif; }
                .font-body { font-family: 'Lato', sans-serif; }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                /* Map Pins */
                .map-pin {
                     position: absolute; width: 10px; h-10px; border-radius: 50%;
                }
            `}</style>

            <UnifiedHeader
                icon="https://i.imgur.com/ircqK4w.png"
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
                        {systems.map((system) => (
                            <button
                                key={system.id}
                                onClick={() => setActiveSystem(system.id)}
                                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden ${activeSystem === system.id
                                    ? 'bg-[#1a1a1a] border-[#c29c55] shadow-lg shadow-[#c29c55]/10'
                                    : 'bg-[#0f0f10] border-white/5 hover:bg-[#161616] hover:border-white/10'
                                    }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${activeSystem === system.id ? 'bg-[#c29c55] text-black' : 'bg-[#1e1e20] text-gray-500 group-hover:text-gray-300'
                                        }`}>
                                        {system.icon}
                                    </div>
                                    <div>
                                        <h3 className={`font-hero text-sm font-bold uppercase tracking-wider ${activeSystem === system.id ? 'text-[#c29c55]' : 'text-gray-300'
                                            }`}>
                                            {system.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors">
                                            {system.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: CONTENT DISPLAY */}
                    <div className="w-full lg:w-2/3 bg-[#0f0f10] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative min-h-[600px] flex flex-col">

                        {/* Toggle QoL view if selected */}
                        {activeSystem === 'qol_updates' ? (
                            <QoLView />
                        ) : activeSystem === 'class_enclaves' ? (
                            <EnclaveView />
                        ) : (
                            <>
                                {/* Standard System View */}
                                <div className="relative h-64 shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f10] z-10"></div>
                                    <img
                                        src={activeData.image}
                                        className="w-full h-full object-cover opacity-80"
                                        alt={activeData.title}
                                    />
                                    <div className="absolute bottom-6 left-8 z-20 max-w-lg">
                                        <h2 className="font-hero text-4xl text-white drop-shadow-lg mb-2">{activeData.title}</h2>
                                        <p className="text-gray-300 text-sm italic opacity-90 border-l-2 border-[#c29c55] pl-3">
                                            "{activeData.quote}"
                                        </p>
                                    </div>
                                </div>

                                <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
                                    {/* COMPARISON TOGGLE */}
                                    <div className="flex justify-end mb-4">
                                        <button
                                            onClick={() => setComparisonMode(!comparisonMode)}
                                            className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border transition-all ${comparisonMode ? 'bg-[#c29c55]/20 border-[#c29c55] text-[#c29c55]' : 'bg-[#222] border-white/10 text-gray-500'}`}
                                        >
                                            <RefreshCw size={12} className={comparisonMode ? "animate-spin-slow" : ""} />
                                            {comparisonMode ? "Comparison Mode Active" : "View Comparison"}
                                        </button>
                                    </div>

                                    {/* SYSTEM VISUALIZER INJECTION */}
                                    <div className="mb-8">
                                        <SystemVisualizer systemId={activeData.id} />
                                    </div>

                                    {/* MAIN CONTENT or COMPARISON */}
                                    {comparisonMode ? (
                                        <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2">
                                            <div className="bg-red-900/10 border border-red-900/30 p-4 rounded text-center">
                                                <div className="flex items-center justify-center gap-2 text-red-500 font-bold uppercase text-xs mb-2">
                                                    <X size={14} /> Vanilla / TBC
                                                </div>
                                                <p className="text-sm text-gray-400">{activeData.vanilla}</p>
                                            </div>
                                            <div className="bg-green-900/10 border border-green-900/30 p-4 rounded text-center">
                                                <div className="flex items-center justify-center gap-2 text-green-500 font-bold uppercase text-xs mb-2">
                                                    <Check size={14} /> TBC Plus
                                                </div>
                                                <p className="text-sm text-gray-300">{activeData.tbc_plus}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-6 text-gray-300 font-body leading-relaxed text-lg">
                                            {formatText(activeData.content)}
                                        </div>
                                    )}
                                </div>
                            </>
                        )}

                    </div>

                </div>
            </main>
        </div>
    );
};

export default Systems;
