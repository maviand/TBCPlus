import React, { useState } from 'react';
import { Shield, Sword, Zap, Crown, Skull, Ghost, Star, Crosshair, Heart } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheArmory = () => {
    const [activeClass, setActiveClass] = useState('paladin');

    // Helper for bold text
    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i} className="mb-2 text-stone-400 text-sm">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-white">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    const classes = {
        warrior: {
            name: 'Warrior',
            icon: <Sword />,
            color: 'text-brown-500',
            sets: [
                {
                    tier: 'Tier 4',
                    name: 'Warbringer Battlegear',
                    image: 'https://imgur.com/vL9Y1wK.jpeg', // Placeholder
                    bonus: '**2-Set:** Your Shield Slam and Mortal Strike grant "Vanguard\'s Momentum," increasing Haste by 5% for 6 sec.\n**4-Set:** Intervene now grants the target 10% damage reduction for 6 sec. If target is a Healer, cooldown is reduced by 10 sec.'
                },
                {
                    tier: 'Tier 5',
                    name: 'Destroyer Battlegear',
                    image: 'https://imgur.com/vL9Y1wK.jpeg',
                    bonus: '**2-Set:** Your Overpower and Revenge hits expose a weakness, ignoring 500 armor for 10 sec.\n**4-Set:** Execute and Shield Block now cost 0 Rage and generate 10 Rage instead.'
                },
                {
                    tier: 'Tier 6',
                    name: 'Onslaught Battlegear',
                    image: 'https://imgur.com/vL9Y1wK.jpeg',
                    bonus: '**2-Set:** Increases the health bonus of your Commanding Shout by 50% and AP of Battle Shout by 30%.\n**4-Set:** Shield Wall reduces damage taken by an additional 10% and reflects 20% of damage taken. Recklessness now lasts 20 sec.'
                }
            ]
        },
        paladin: {
            name: 'Paladin',
            icon: <Shield />,
            color: 'text-pink-500',
            sets: [
                {
                    tier: 'Tier 4',
                    name: 'Justicar Armor',
                    image: 'https://imgur.com/7j4Z1wK.jpeg',
                    bonus: '**2-Set:** Increases the healing of your Holy Light by 10% and damage of Crusader Strike by 10%.\n**4-Set:** Reduces the cooldown of Hammer of Justice by 10 sec. Holy Power generation increased by 20%.'
                },
                {
                    tier: 'Tier 5',
                    name: 'Crystalforge Armor',
                    image: 'https://imgur.com/7j4Z1wK.jpeg',
                    bonus: '**2-Set:** Your Judgements now heal your target\'s target for 2% of their Max HP.\n**4-Set:** Avengers Shield now silences 2 additional targets. Holy Shock criticals reset the cooldown of Holy Light.'
                },
                {
                    tier: 'Tier 6',
                    name: 'Lightbringer Armor',
                    image: 'https://imgur.com/7j4Z1wK.jpeg',
                    bonus: '**2-Set:** Increases the duration of your Seals by 100%.\n**4-Set:** Lay on Hands cooldown reduced by 15 min. Divine Storm heals up to 5 allies for 25% of damage done.'
                }
            ]
        },
        hunter: {
            name: 'Hunter',
            icon: <Crosshair />,
            color: 'text-green-500',
            sets: [
                {
                    tier: 'Tier 4',
                    name: 'Demon Stalker Armor',
                    image: 'https://imgur.com/xX9A1wK.jpeg',
                    bonus: '**2-Set:** Increases pet damage by 15% and pet armor by 20%.\n**4-Set:** Multi-Shot applies "Hunter\'s Mark" to all targets hit.'
                },
                {
                    tier: 'Tier 5',
                    name: 'Rift Stalker Armor',
                    image: 'https://imgur.com/xX9A1wK.jpeg',
                    bonus: '**2-Set:** Your pet\'s attacks heal you for 2% of damage dealt.\n**4-Set:** Steady Shot has a 10% chance to summon a "Rift-Wolf" to fight for you for 15 sec.'
                },
                {
                    tier: 'Tier 6',
                    name: 'Gronnstalker\'s Armor',
                    image: 'https://imgur.com/xX9A1wK.jpeg',
                    bonus: '**2-Set:** Increases total Agility by 10%.\n**4-Set:** Rapid Fire grants your entire party 5% Haste. Kill Command resets the cooldown of Bestial Wrath.'
                }
            ]
        },
        rogue: {
            name: 'Rogue',
            icon: <Ghost />,
            color: 'text-yellow-500',
            sets: [
                {
                    tier: 'Tier 4',
                    name: 'Netherblade',
                    image: 'https://imgur.com/yY9B1wK.jpeg',
                    bonus: '**2-Set:** Increases the duration of Slice and Dice by 3 sec.\n**4-Set:** Your finishing moves have a 15% chance to grant you a "Combo Point" after use.'
                },
                {
                    tier: 'Tier 5',
                    name: 'Deathmantle',
                    image: 'https://imgur.com/yY9B1wK.jpeg',
                    bonus: '**2-Set:** Eviscerate and Envenom deal 10% more damage per combo point.\n**4-Set:** Your attacks have a chance to make your next output cost 0 Energy.'
                },
                {
                    tier: 'Tier 6',
                    name: 'Slayer\'s Armor',
                    image: 'https://imgur.com/yY9B1wK.jpeg',
                    bonus: '**2-Set:** Increases the haste of your attacks by 5%.\n**4-Set:** Backstab, Sinister Strike, and Hemorrhage deal 6% more damage. Vendors for poisons cost nothing.'
                }
            ]
        },
        priest: {
            name: 'Priest',
            icon: <Heart />,
            color: 'text-white',
            sets: [
                {
                    tier: 'Tier 4',
                    name: 'Incarnate Raiment',
                    image: 'https://imgur.com/zZ9C1wK.jpeg',
                    bonus: '**2-Set:** Prayer of Healing cost reduced by 10%. Shadow Word: Pain duration increased by 3 sec.\n**4-Set:** Greater Heal grants the target "Hope," shielding them for 500 dmg.'
                },
                {
                    tier: 'Tier 5',
                    name: 'Avatar Raiment',
                    image: 'https://imgur.com/zZ9C1wK.jpeg',
                    bonus: '**2-Set:** If your Flash Heal critically hits, your next spell casts instantly.\n**4-Set:** Vampiric Touch restores 10% more mana. Circle of Healing hits 1 extra target.'
                },
                {
                    tier: 'Tier 6',
                    name: 'Vestments of Absolution',
                    image: 'https://imgur.com/zZ9C1wK.jpeg',
                    bonus: '**2-Set:** Prayer of Mending jumps to an additional target.\n**4-Set:** Mind Flay critical hits reduce the cooldown of Mind Blast by 0.5 sec. Penance cooldown reduced by 2 sec.'
                }
            ]
        },
        shaman: {
            name: 'Shaman',
            icon: <Zap />,
            color: 'text-blue-500',
            sets: [
                {
                    tier: 'Tier 4',
                    name: 'Cyclone Raiment',
                    image: 'https://imgur.com/aA9D1wK.jpeg',
                    bonus: '**2-Set:** Reduces cooldown of Totems by 2 sec.\n**4-Set:** Your Chain Lightning hits 1 additional target. Chain Heal jumps 1 additional time.'
                },
                {
                    tier: 'Tier 5',
                    name: 'Cataclysm Raiment',
                    image: 'https://imgur.com/aA9D1wK.jpeg',
                    bonus: '**2-Set:** Your critical heals grant the target "Earth Shield" charge.\n**4-Set:** Stormstrike increases nature damage dealt by party members by 2% (stacks 3 times).'
                },
                {
                    tier: 'Tier 6',
                    name: 'Skyshatter Raiment',
                    image: 'https://imgur.com/aA9D1wK.jpeg',
                    bonus: '**2-Set:** Increases range of Totems by 20 yards.\n**4-Set:** Bloodlust/Heroism cooldown reduced by 5 min. Mana Spring Totem restores 20% more mana.'
                }
            ]
        },
        mage: {
            name: 'Mage',
            icon: <Star />,
            color: 'text-cyan-400',
            sets: [
                {
                    tier: 'Tier 4',
                    name: 'Aldor Regalia',
                    image: 'https://imgur.com/bB9E1wK.jpeg',
                    bonus: '**2-Set:** Reduces pushback suffered from damaging attacks by 70%.\n**4-Set:** Reduces the cooldown of Blink by 2 sec and Ice Block by 30 sec.'
                },
                {
                    tier: 'Tier 5',
                    name: 'Tirisfal Regalia',
                    image: 'https://imgur.com/bB9E1wK.jpeg',
                    bonus: '**2-Set:** Arcane Blast damage/mana cost stack increased by 1.\n**4-Set:** Your Fireball and Frostbolt criticals grant you 3% Spell Haste for 10 sec.'
                },
                {
                    tier: 'Tier 6',
                    name: 'Tempest Regalia',
                    image: 'https://imgur.com/bB9E1wK.jpeg',
                    bonus: '**2-Set:** Increases duration of Evocation by 2 sec.\n**4-Set:** Fireball, Frostbolt, and Arcane Missiles deal 5% increased damage.'
                }
            ]
        },
        warlock: {
            name: 'Warlock',
            icon: <Skull />,
            color: 'text-purple-500',
            sets: [
                {
                    tier: 'Tier 4',
                    name: 'Voidheart Raiment',
                    image: 'https://imgur.com/cC9F1wK.jpeg',
                    bonus: '**2-Set:** Your Shadow damage spells have a chance to grant 135 Spell Power for 15 sec.\n**4-Set:** Increases the duration of Corruption and Immolate by 3 sec.'
                },
                {
                    tier: 'Tier 5',
                    name: 'Corruptor Raiment',
                    image: 'https://imgur.com/cC9F1wK.jpeg',
                    bonus: '**2-Set:** Your pet heals you for 15% of the damage it deals.\n**4-Set:** Shadow Bolt has a chance to make your next Incinerate instant (and vice versa).'
                },
                {
                    tier: 'Tier 6',
                    name: 'Malefic Raiment',
                    image: 'https://imgur.com/cC9F1wK.jpeg',
                    bonus: '**2-Set:** Reduces generated threat by 20%.\n**4-Set:** Shadow Bolt and Incinerate damage increased by 6%. Curse of Elements also reduces resistance by an additional 10.'
                }
            ]
        },
        druid: {
            name: 'Druid',
            icon: <Crown />,
            color: 'text-orange-500',
            sets: [
                {
                    tier: 'Tier 4',
                    name: 'Malorne Raiment',
                    image: 'https://imgur.com/dD9G1wK.jpeg',
                    bonus: '**2-Set:** Your melee attacks have a chance to generate 20 Rage/Energy.\n**4-Set:** Reduces the cooldown of Innervate by 4 min.'
                },
                {
                    tier: 'Tier 5',
                    name: 'Nordrassil Raiment',
                    image: 'https://imgur.com/dD9G1wK.jpeg',
                    bonus: '**2-Set:** Regrowth duration increased by 6 sec.\n**4-Set:** Starfire has a chance to increase your spell damage by 150 for 15 sec.'
                },
                {
                    tier: 'Tier 6',
                    name: 'Thunderheart Raiment',
                    image: 'https://imgur.com/dD9G1wK.jpeg',
                    bonus: '**2-Set:** Increases the duration of Mangle by 6 sec.\n**4-Set:** Rejuvenation healing increased by 10%. Moonfire duration increased by 3 sec.'
                }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
      `}</style>
            <UnifiedHeader
                icon="https://i.imgur.com/vL9Y1wK.jpeg"
                background="https://i.imgur.com/2K7W0wK.jpeg"
                section="The Armory"
                sub="Tier Sets Retuned"
                title="Tools of War"
                quote="The finest craftsmanship of the Sha'tar, the Aldor, and the Scryers."
            />

            <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
                {/* --- SIDEBAR: CLASS SELECT --- */}
                <aside className="lg:w-1/4">
                    <div className="sticky top-24 bg-[#111] border border-stone-800 rounded p-4">
                        <h3 className="font-cinzel text-stone-500 text-xs uppercase tracking-widest mb-4">Select Class</h3>
                        <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
                            {Object.entries(classes).map(([key, cls]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveClass(key)}
                                    className={`flex items-center gap-3 p-3 rounded transition-all ${activeClass === key
                                        ? 'bg-gradient-to-r from-stone-800 to-transparent border-l-4 border-white text-white'
                                        : 'text-stone-600 hover:bg-stone-900 hover:text-stone-400'}`}
                                >
                                    <div className={`${activeClass === key ? cls.color : ''}`}>{cls.icon}</div>
                                    <span className="font-cinzel text-sm hidden md:block">{cls.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* --- MAIN CONTENT: SETS --- */}
                <main className="lg:w-3/4 animate-fade-in">
                    <div className="flex items-center gap-4 mb-8">
                        <div className={`p-3 rounded bg-stone-900 ${classes[activeClass].color}`}>
                            {classes[activeClass].icon}
                        </div>
                        <div>
                            <h2 className="font-cinzel text-4xl text-white">{classes[activeClass].name}</h2>
                            <p className="font-body text-stone-500 uppercase tracking-widest text-sm">Tier Sets Overview</p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {classes[activeClass].sets.map((set, idx) => (
                            <div key={idx} className="group relative bg-[#0c0c0c] border border-stone-800 rounded-lg overflow-hidden hover:border-stone-600 transition-colors">
                                {/* Flex Layout for Tier Card */}
                                <div className="flex flex-col md:flex-row">
                                    {/* Image Side */}
                                    <div className="md:w-1/3 h-64 md:h-auto bg-[#1a1a1a] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                        {/* Placeholder for specific tier set image */}
                                        <div className="w-full h-full flex items-center justify-center text-stone-700 font-cinzel text-6xl opacity-20">
                                            {set.tier.replace('Tier ', 'T')}
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="md:w-2/3 p-8 flex flex-col justify-center">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="font-cinzel text-2xl text-white mb-1 group-hover:text-amber-500 transition-colors">{set.name}</h3>
                                                <span className="text-xs font-body text-amber-500/80 uppercase tracking-widest border border-amber-900/30 px-2 py-0.5 rounded bg-amber-900/10">{set.tier}</span>
                                            </div>
                                            <div className="text-stone-600">
                                                <Crown size={24} />
                                            </div>
                                        </div>

                                        <div className="bg-[#111] p-4 rounded border-l-2 border-stone-700">
                                            {formatText(set.bonus)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TheArmory;
