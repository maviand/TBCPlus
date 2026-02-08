import { Skull, Shield, Zap, Target, AlertTriangle, Eye, Ghost, Star, Flame, Sword, Crown, UserMinus, Anchor, BookOpen, Utensils, Footprints, Droplet, CircleDollarSign, Home, Flag, Users, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import UnifiedHeader from './UnifiedHeader';

const TheIronSoul = () => {
    const [activeSection, setActiveSection] = useState('modes');
    const [bloodEffect, setBloodEffect] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // STATE: Death Counter (Iron Soul #1)
    const [deathCount, setDeathCount] = useState(14029);

    // STATE: Flaw Selector (Iron Soul #3 toggle)
    const [selectedFlaws, setSelectedFlaws] = useState([]);

    // STATE: Duel to Death (Iron Soul #9)
    const [duelTarget, setDuelTarget] = useState('');
    const [duelStatus, setDuelStatus] = useState('idle'); // idle, challenged, accepted, mourning

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Simulate Death Counter Ticking
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                setDeathCount(prev => prev + 1);
            }
        }, 2000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, []);

    const triggerBloodPact = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setBloodEffect({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setTimeout(() => setBloodEffect(null), 1000);
    };

    const toggleFlaw = (id) => {
        if (selectedFlaws.includes(id)) {
            setSelectedFlaws(prev => prev.filter(f => f !== id));
        } else {
            if (selectedFlaws.length < 3) {
                setSelectedFlaws(prev => [...prev, id]);
            }
        }
    };

    const initiateDuel = (e) => {
        e.preventDefault();
        setDuelStatus('challenged');
        setTimeout(() => setDuelStatus('accepted'), 2000);
        setTimeout(() => {
            // 50/50 chance of win/loss
            setDuelStatus(Math.random() > 0.5 ? 'victory' : 'mourning');
        }, 5000);
    };

    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i} className="mb-4 text-stone-400 leading-relaxed">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-red-500 font-normal">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    return (
        <div className="min-h-screen bg-[#050505] text-stone-200 font-sans selection:bg-red-900 selection:text-white overflow-x-hidden">
            <UnifiedHeader
                icon="https://i.imgur.com/GruxtyX.jpeg"
                background={`/images/header_ironsoul.png`}
                section="Challenge Modes"
                sub="Death is Permanent. Glory is Forever."
                title="The Iron Soul"
                quote="Do not ask for a lighter burden. Ask for broader shoulders."
                className="parallax-bg"
                style={{ backgroundPosition: `calc(50% + ${mousePos.x}px) calc(50% + ${mousePos.y}px)` }}
            />

            <div className="container mx-auto px-4 py-12">

                {/* Intro Block with Death Counter */}
                <div className="max-w-4xl mx-auto mb-16 relative">
                    <div className="bg-red-950/10 border border-red-900/30 p-8 rounded-xl text-center relative z-10 backdrop-blur-sm">
                        <h2 className="text-3xl font-hero text-white mb-6">Choose Your Suffering</h2>
                        <p className="text-lg text-stone-500 leading-relaxed font-light mb-8">
                            In TBC+, we officially support the <span className="text-red-500 font-bold">Ironman</span> playstyle.
                            No addons required. Select your challenge at Character Creation.
                        </p>

                        {/* Live Death Counter */}
                        <div className="inline-flex items-center gap-4 bg-black/60 px-6 py-3 rounded-full border border-red-900/50 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                            <span className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-2">
                                <Skull size={14} className="animate-pulse" /> Souls Claimed Globally
                            </span>
                            <div className="font-mono text-2xl text-white tracking-widest">
                                {deathCount.toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* MODES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                    {/* Mode 1: Hardcore */}
                    <div
                        className="bg-[#0f0f0f] border border-red-900/30 p-8 rounded-xl relative overflow-hidden group hover:border-red-600 transition-all shadow-lg hover:shadow-red-900/20 cursor-pointer bg-cover bg-center"
                        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(15,15,15,0.9), rgba(15,15,15,0.95)), url("https://i.imgur.com/HTaVm8J.jpeg")' }}
                        onClick={triggerBloodPact}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Ghost size={140} /></div>
                        {bloodEffect && (
                            <div
                                className="absolute pointer-events-none w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-20 animate-ping"
                                style={{ left: bloodEffect.x - 128, top: bloodEffect.y - 128 }}
                            />
                        )}
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="p-3 bg-red-900/20 rounded-lg"><Skull className="text-red-500 w-8 h-8" /></div>
                            <h3 className="font-hero text-2xl text-white">Hardcore</h3>
                        </div>
                        <p className="text-xs text-stone-500 mb-6 uppercase tracking-wider font-bold">The Classic Challenge</p>
                        <ul className="space-y-4 text-sm text-stone-400 mb-8 relative z-10">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-red-500 mt-1.5 rounded-full"></div>One Life. Death = Free Transfer to Softcore.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-red-500 mt-1.5 rounded-full"></div>No Auction House or Mailbox.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-red-500 mt-1.5 rounded-full"></div>Self-Found Loot Only.</li>
                        </ul>
                        <div className="border-t border-white/5 pt-4 relative z-10">
                            <span className="text-[10px] uppercase tracking-widest text-red-500 font-bold">Reward</span>
                            <p className="text-white text-sm mt-1">"The Immortal" Title + Spectral Racial Mount</p>
                        </div>
                    </div>

                    {/* Mode 2: Masochist */}
                    <div
                        className="bg-[#0f0f0f] border border-stone-800 p-8 rounded-xl relative overflow-hidden group hover:border-amber-600 transition-all shadow-lg hover:shadow-amber-900/20 bg-cover bg-center"
                        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(15,15,15,0.9), rgba(15,15,15,0.95)), url("https://i.imgur.com/ggiL8Bs.jpeg")' }}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Shield size={140} /></div>
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="p-3 bg-amber-900/20 rounded-lg relative overflow-hidden">
                                <AlertTriangle className="text-amber-500 w-8 h-8 relative z-10" />
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cracked-glass.png')] opacity-30 mix-blend-overlay"></div>
                            </div>
                            <h3 className="font-hero text-2xl text-white">Masochist</h3>
                        </div>
                        <p className="text-xs text-stone-500 mb-6 uppercase tracking-wider font-bold">For Those Who Hate Themselves</p>
                        <ul className="space-y-4 text-sm text-stone-400 mb-8 relative z-10">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-amber-500 mt-1.5 rounded-full"></div>You take 20% increased damage.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-amber-500 mt-1.5 rounded-full"></div>XP gain reduced by 50%.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-amber-500 mt-1.5 rounded-full"></div>Durability loss is doubled.</li>
                        </ul>
                        <div className="border-t border-white/5 pt-4 relative z-10">
                            <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">Reward</span>
                            <p className="text-white text-sm mt-1">"Broken" Transmog Set (Bloody Bandages)</p>
                        </div>
                    </div>

                    {/* Mode 3: Lone Wolf */}
                    <div
                        className="bg-[#0f0f0f] border border-stone-800 p-8 rounded-xl relative overflow-hidden group hover:border-blue-600 transition-all shadow-lg hover:shadow-blue-900/20 bg-cover bg-center"
                        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(15,15,15,0.9), rgba(15,15,15,0.95)), url("https://i.imgur.com/P1EbZrC.jpeg")' }}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Eye size={140} /></div>
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <div className="p-3 bg-blue-900/20 rounded-lg"><UserMinus className="text-blue-500 w-8 h-8" /></div>
                            <h3 className="font-hero text-2xl text-white">Lone Wolf</h3>
                        </div>
                        <p className="text-xs text-stone-500 mb-6 uppercase tracking-wider font-bold">Solo Self-Found Extreme</p>
                        <ul className="space-y-4 text-sm text-stone-400 mb-8 relative z-10">
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-500 mt-1.5 rounded-full"></div>Cannot join parties or raids.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-500 mt-1.5 rounded-full"></div>Dungeons scale to 1-player.</li>
                            <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-500 mt-1.5 rounded-full"></div>Personalized Loot Tables.</li>
                        </ul>
                        <div className="border-t border-white/5 pt-4 relative z-10">
                            <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Reward</span>
                            <p className="text-white text-sm mt-1">"Soloist" Title + Portable Vendor</p>
                        </div>
                    </div>
                </div>

                {/* INTERACTIVE DUEL FEATURE */}
                <div className="bg-[#111] border border-red-900/30 rounded-xl p-8 mb-20 relative overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                    <Flame className="w-12 h-12 text-red-500 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-3xl font-hero text-white mb-2">Mak'gora</h3>
                    <p className="text-stone-500 mb-6">Challenge another player to a duel to the death. The loser is deleted instantly.</p>

                    {duelStatus === 'idle' ? (
                        <form onSubmit={initiateDuel} className="flex max-w-md mx-auto gap-2">
                            <input
                                type="text"
                                placeholder="Target Player Name..."
                                value={duelTarget}
                                onChange={(e) => setDuelTarget(e.target.value)}
                                className="flex-1 bg-black border border-stone-800 rounded px-4 py-2 text-white focus:border-red-500 outline-none placeholder:text-stone-700 font-mono"
                            />
                            <button type="submit" disabled={!duelTarget} className="bg-red-900/20 border border-red-500 text-red-500 px-6 py-2 rounded font-bold hover:bg-red-900 hover:text-white transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-red-500">
                                ISSUE CHALLENGE
                            </button>
                        </form>
                    ) : (
                        <div className="animate-in fade-in zoom-in duration-300">
                            {duelStatus === 'challenged' && <span className="text-xl text-yellow-500 font-bold tracking-widest animate-pulse">WAITING FOR ACCEPTANCE...</span>}
                            {duelStatus === 'accepted' && <span className="text-xl text-red-500 font-bold tracking-widest">DUEL STARTED! FIGHT!</span>}
                            {duelStatus === 'victory' && <span className="text-xl text-green-500 font-bold tracking-widest">VICTORY! TARGET DELETED.</span>}
                            {duelStatus === 'mourning' && <span className="text-xl text-stone-500 font-bold trackng-widest">DEFEAT... YOUR CHARACTER IS DELETED.</span>}
                            <button onClick={() => setDuelStatus('idle')} className="block mx-auto mt-4 text-xs text-stone-600 hover:text-white underline">Reset Simulator</button>
                        </div>
                    )}
                </div>

                {/* MORTAL FLAWS SYSTEM (INTERACTIVE) */}
                <div className="max-w-5xl mx-auto bg-[#0a0a0a] border border-stone-800 rounded-xl p-10 relative overflow-hidden mb-16 shadow-2xl">
                    <div className="relative z-10 flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3">
                            <h3 className="text-2xl font-hero text-white mb-4">The Mortal Flaws System</h3>
                            <div className="text-stone-400 space-y-4 text-sm leading-relaxed">
                                {formatText(`Inspired by classic RPGs, you can voluntarily take on **Flaws** at character creation.
                                
                                Select **up to 3** flaws below to preview your build bonuses.`)}
                            </div>
                            <div className="mt-8 p-4 bg-stone-900/50 rounded border border-stone-800">
                                <span className="block text-xs font-bold uppercase text-stone-500 mb-2">Current Bonuses:</span>
                                {selectedFlaws.length === 0 ? (
                                    <span className="text-stone-600 text-sm italic">None selected.</span>
                                ) : (
                                    <ul className="space-y-1">
                                        <li className="text-green-500 text-sm">+{(selectedFlaws.length * 10)}% XP Gain</li>
                                        <li className="text-amber-500 text-sm">+{(selectedFlaws.length * 5)}% Gold Find</li>
                                    </ul>
                                )}
                            </div>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-2 gap-4">
                            {[
                                { id: 'hemo', icon: <Zap />, name: 'Hemophiliac', desc: 'Bleed effects deal 50% more to you.' },
                                { id: 'blind', icon: <Target />, name: 'Night Blindness', desc: '-40% Vision range at night.' },
                                { id: 'hydro', icon: <Droplet />, name: 'Hydrophobic', desc: 'Damage while swimming.' },
                                { id: 'illit', icon: <BookOpen />, name: 'Illiterate', desc: 'Quest text is scrambled.' },
                                { id: 'glut', icon: <Utensils />, name: 'Gluttony', desc: 'Stats drop if not fed often.' },
                                { id: 'nomad', icon: <Footprints />, name: 'Nomad', desc: 'Cannot use Hearthstones.' },
                                { id: 'haunt', icon: <Ghost />, name: 'Haunted', desc: 'Random hallucinations attack.' },
                                { id: 'glass', icon: <Sword />, name: 'Glass Cannon', desc: '-20% Stamina.' },
                                { id: 'gold', icon: <CircleDollarSign />, name: 'Gold Cursed', desc: 'Enemies drop 0 gold.' },
                                { id: 'agora', icon: <Home />, name: 'Agoraphobia', desc: 'Reduced stats outdoors.' }
                            ].map((flaw) => (
                                <button
                                    key={flaw.id}
                                    onClick={() => toggleFlaw(flaw.id)}
                                    className={`text-left p-4 rounded border flex gap-3 items-start transition-all ${selectedFlaws.includes(flaw.id)
                                        ? 'bg-red-900/20 border-red-500 ring-1 ring-red-500'
                                        : 'bg-[#151515] border-red-900/10 hover:bg-[#1a1a1a] hover:border-red-900/30 opacity-70 hover:opacity-100'}`}
                                >
                                    <div className={`${selectedFlaws.includes(flaw.id) ? 'text-white' : 'text-red-700'}`}>{flaw.icon}</div>
                                    <div>
                                        <h4 className={`font-bold text-sm ${selectedFlaws.includes(flaw.id) ? 'text-white' : 'text-stone-300'}`}>{flaw.name}</h4>
                                        <p className="text-xs text-stone-500 leading-tight mt-1">{flaw.desc}</p>
                                    </div>
                                    {selectedFlaws.includes(flaw.id) && <div className="ml-auto text-red-500"><Flag size={12} fill="currentColor" /></div>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TheIronSoul;
