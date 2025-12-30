import React, { useState } from 'react';
import {
    Sword, Shield, Zap, Crosshair, Heart, Skull,
    Flame, Ghost, Hammer, Leaf, Star, Crown,
    LayoutGrid, Clock
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheArmory = () => {
    const [activeClass, setActiveClass] = useState('warrior');
    const [activeSpec, setActiveSpec] = useState(0); // Index of the spec
    const [activeTier, setActiveTier] = useState('t4'); // t1, t2, t3, t4, t5, t6, t6.5
    const [selectedImage, setSelectedImage] = useState(null);

    // Helper for bold text
    const formatText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i} className="mb-2 text-stone-400 text-sm leading-relaxed">
                {line.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') ? <strong key={j} className="text-[#ffd100] font-bold">{part.slice(2, -2)}</strong> : part
                )}
            </p>
        ));
    };

    const tiers = [
        { id: 't1', label: 'Tier 1', sub: 'Time-Lost (MC)', iLvl: 115 },
        { id: 't4', label: 'Tier 4', sub: 'Karazhan / Gruul', iLvl: 120 },
        { id: 't2', label: 'Tier 2', sub: 'Time-Lost (BWL)', iLvl: 128 },
        { id: 't5', label: 'Tier 5', sub: 'SSC / The Eye', iLvl: 133 },
        { id: 't3', label: 'Tier 3', sub: 'Time-Lost (Naxx)', iLvl: 141 },
        { id: 't6', label: 'Tier 6', sub: 'Hyjal / BT', iLvl: 146 },
        { id: 't6.5', label: 'Tier 6.5', sub: 'Sunwell', iLvl: 154 },
    ];

    const classes = {
        warrior: {
            name: 'Warrior',
            crest: "https://i.imgur.com/seZs5WM.png",
            color: 'text-red-500',
            specs: [
                {
                    name: 'Arms',
                    icon: 'https://i.imgur.com/tgSiYFd.png',
                    sets: {
                        t4: {
                            name: 'Warbringer Battlegear',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/143/655.webp',
                            bonus: '**2-Set:** Your Whirlwind ability costs 10 less rage.\n**4-Set:** You gain an additional 2 Rage each time you deal melee damage.'
                        },
                        t5: {
                            name: 'Destroyer Battlegear',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/144/656.webp',
                            bonus: '**2-Set:** Your Overpower ability grants you 100 Attack Power for 5 sec.\n**4-Set:** Your Bloodthirst and Mortal Strike abilities cost 5 less rage.'
                        },
                        t6: {
                            name: 'Onslaught Battlegear',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/161/673.webp',
                            bonus: '**2-Set:** Reduces the rage cost of your Execute ability by 3.\n**4-Set:** Increases the damage of your Mortal Strike and Bloodthirst abilities by 5%.'
                        },
                        't6.5': {
                            name: 'Battlegear of Resounding Rings',
                            image: 'https://i.imgur.com/CJudCyD.jpeg',
                            bonus: '**2-Set:** Increases the critical strike damage bonus of your abilities by 10%.\n**4-Set:** Sudden Death proc chance increased by 5%. Execute damage increased by 15%.'
                        },
                        t1: {
                            name: 'Battlegear of Valor (Reforged)',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/209/209.webp',
                            bonus: '**2-Set:** **Tactician:** Your Overpower now has two charges and a 1-second cooldown.\n**4-Set:** **Colossus Smash:** Mortal Strike grants you 15% armor penetration for 6 seconds.'
                        },
                        t2: {
                            name: 'Battlegear of Wrath (Reforged)',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/218/218.webp',
                            bonus: '**2-Set:** **Taste for Blood:** Rend ticks have a 100% chance to allow the use of Overpower.\n**4-Set:** **Blade Master:** Bladestorm now fires "Blades of Wrath" at distant enemies, dealing 70% weapon damage.'
                        },
                        t3: {
                            name: 'Dreadnaught\'s Battlegear (Reforged)',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/11/523.webp',
                            bonus: '**2-Set:** **Execute Phase:** Your attacks against targets below 20% health generate double Rage.\n**4-Set:** **Sudden Doom:** Your auto attacks have a chance to reset the cooldown of Mortal Strike and make it cost no Rage.'
                        }
                    }
                },
                {
                    name: 'Fury',
                    icon: 'https://i.imgur.com/wJbmNeR.png',
                    sets: {
                        t4: {
                            name: 'Warbringer Battlegear',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/143/655.webp',
                            bonus: '**2-Set:** Your Whirlwind ability costs 10 less rage.\n**4-Set:** You gain an additional 2 Rage each time you deal melee damage.'
                        },
                        t5: {
                            name: 'Destroyer Battlegear',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/144/656.webp',
                            bonus: '**2-Set:** Your Overpower ability grants you 100 Attack Power for 5 sec.\n**4-Set:** Your Bloodthirst and Mortal Strike abilities cost 5 less rage.'
                        },
                        t6: {
                            name: 'Onslaught Battlegear',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/161/673.webp',
                            bonus: '**2-Set:** Reduces the rage cost of your Execute ability by 3.\n**4-Set:** Increases the damage of your Mortal Strike and Bloodthirst abilities by 5%.'
                        },
                        't6.5': {
                            name: 'Plate of Resounding Rings',
                            image: 'https://i.imgur.com/CJudCyD.jpeg',
                            bonus: '**2-Set:** Heroic Strike costs 5 less rage.\n**4-Set:** Your off-hand attacks have a chance to grant you a "Recklessness" effect for 3 sec.'
                        },
                        t1: {
                            name: 'Valor Plate (Reforged)',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/209/209.webp',
                            bonus: '**2-Set:** **Furious Strikes:** Bloodthirst has a +10% Critical Strike chance.\n**4-Set:** **Enraged Regeneration:** While Enraged, you regenerate 2% of your total health every 3 seconds.'
                        },
                        t2: {
                            name: 'Wrath Plate (Reforged)',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/218/218.webp',
                            bonus: '**2-Set:** **Meat Cleaver:** Whirlwind deals 10% more damage for each target hit, stacking up to 5 times.\n**4-Set:** **Odyn\'s Fury:** Raging Blow unleashes a burst of fire, dealing fire damage to all enemies in front of you.'
                        },
                        t3: {
                            name: 'Dreadnaught Plate (Reforged)',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/11/523.webp',
                            bonus: '**2-Set:** **Titan\'s Grip:** You can equip two-handed axes, maces, and swords in your off-hand with no penalty.\n**4-Set:** **Rampage:** Critical strikes increase your attack speed by 5%, stacking up to 5 times. At 5 stacks, you trigger a "Bloodsurge" (instant Slam).'
                        }
                    }
                },
                {
                    name: 'Protection',
                    icon: 'https://i.imgur.com/FhuhqTX.png',
                    sets: {
                        t4: {
                            name: 'Warbringer Armor',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/143/655.webp',
                            bonus: '**2-Set:** Your Shield Slam ability deals 10% more damage.\n**4-Set:** Your Shield Block ability grants an additional 100 block value.'
                        },
                        t5: {
                            name: 'Destroyer Armor',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/144/656.webp',
                            bonus: '**2-Set:** Each time you use your Shield Block ability, you gain 100 Block Value for 6 sec.\n**4-Set:** Your Shield Slam ability deals an additional 100% damage.'
                        },
                        t6: {
                            name: 'Onslaught Armor',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/161/673.webp',
                            bonus: '**2-Set:** Increases the health bonus from your Commanding Shout ability by 170.\n**4-Set:** Increases the damage of your Shield Slam ability by 10%.'
                        },
                        't6.5': {
                            name: 'Guard of Resounding Rings',
                            image: 'https://i.imgur.com/CJudCyD.jpeg',
                            bonus: '**2-Set:** Devastate deals 20% more damage.\n**4-Set:** Shockwave cooldown reduced by 5 sec.'
                        },
                        t1: {
                            name: 'Valor Guard (Reforged)',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/209/209.webp',
                            bonus: '**2-Set:** **Vanguard:** Armor contribution from items increased by 10%.\n**4-Set:** **Into the Fray:** You gain 2% Haste for each enemy within 10 yards (up to 10%).'
                        },
                        t2: {
                            name: 'Wrath Guard (Reforged)',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/218/218.webp',
                            bonus: '**2-Set:** **Dragon Scales:** Magic damage taken reduced by 5%.\n**4-Set:** **Violent Outburst:** Shield Block now also reflects 20% of blocked physical damage back to the attacker.'
                        },
                        t3: {
                            name: 'Dreadnaught Guard (Reforged)',
                            image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/11/523.webp',
                            bonus: '**2-Set:** **Shield Charge:** Shield Slam generates 50% more Rage and threat.\n**4-Set:** **Avatar:** Transform into an Avatar of Stone for 20 sec, removing all CC effects and increasing Max Health by 30%.'
                        }
                    }
                }
            ]
        },
        paladin: {
            name: 'Paladin',
            crest: "https://i.imgur.com/tbPW0IM.png",
            color: 'text-pink-500',
            specs: [
                {
                    name: 'Holy',
                    icon: 'https://i.imgur.com/nbn8UHD.jpeg',
                    sets: {
                        t4: { name: 'Justicar Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/112/624.webp', bonus: '**2-Set:** Increases the healing delivered by your Holy Light spell by 10%.\n**4-Set:** Reduces the cooldown on your Illumination talent by 3 minutes.' },
                        t5: { name: 'Crystalforge Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/117/629.webp', bonus: '**2-Set:** Reduces the cost of your Holy Light spell by 10%.\n**4-Set:** Your critical heals from Flash of Light reduce the cast time of your next Holy Light spell by 0.50 sec for 10 sec.' },
                        t6: { name: 'Lightbringer Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/167/679.webp', bonus: '**2-Set:** Increases the critical effect chance of your Holy Light spell by 5%.\n**4-Set:** Increases the healing done by your Flash of Light spell by 5%.' },
                        't6.5': { name: 'Armor of the Light\'s Vanguard', image: 'https://i.imgur.com/IDZe4iF.jpeg', bonus: '**2-Set:** Increases spell power by 5% of your Intellect.\n**4-Set:** Flash of Light causes your next Holy Light to cast 0.5s faster.' },
                        t1: { name: 'Lawbringer Armor (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/208/208.webp', bonus: '**2-Set:** **Daybreak:** Holy Shock cooldown reduced by 2 seconds.\n**4-Set:** **Glimmer of Light:** Holy Shock leaves a "Glimmer" on the target. Your next Holy Light heals all Glimmered targets for 20% of the amount.' },
                        t2: { name: 'Judgement Armor (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/217/217.webp', bonus: '**2-Set:** **Rule of Law:** Mastery: Increases the range of your heals and the radius of your auras by 50%.\n**4-Set:** **Judgement of Light:** Judgement heals the 3 most injured nearby allies.' },
                        t3: { name: 'Redemption Armor (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** **Awakening:** Word of Glory (HP Spender) has a 15% chance to grant you "Avenging Wrath" for 8 seconds.\n**4-Set:** **Beacon of Virtue:** Beacon of Light now copies 100% of healing to the Beacon target.' }
                    }
                },
                {
                    name: 'Protection',
                    icon: 'https://i.imgur.com/tcWwZXg.png',
                    sets: {
                        t4: { name: 'Justicar Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/112/624.webp', bonus: '**2-Set:** Increases the damage dealt by your Consecration spell by 15%.\n**4-Set:** Increases the damage dealt by your Holy Shield ability by 15%.' },
                        t5: { name: 'Crystalforge Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/117/629.webp', bonus: '**2-Set:** 20% of all damage taken is applied over 12 seconds instead of instantly.\n**4-Set:** Your Judgement ability now also taunts the target to attack you.' },
                        t6: { name: 'Lightbringer Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/167/679.webp', bonus: '**2-Set:** Increases the mana gained from your Spiritual Attunement ability by 10%.\n**4-Set:** Increases the damage dealt by your Consecration spell by 10%.' },
                        't6.5': { name: 'Battlegear of the Light\'s Vanguard', image: 'https://i.imgur.com/IDZe4iF.jpeg', bonus: '**2-Set:** Hammer of the Righteous hits 1 additional target.\n**4-Set:** Divine Protection damage reduction increased by 10%.' },
                        t1: { name: 'Lawbringer Battlegear (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/208/208.webp', bonus: '**2-Set:** **Blessed Hammer:** Hammer of the Righteous spirals outward, reducing enemy damage dealt by 10%.\n**4-Set:** **Bulwark of Order:** Avenger\'s Shield grants you an absorption shield equal to 100% of damage dealt.' },
                        t2: { name: 'Judgement Battlegear (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/217/217.webp', bonus: '**2-Set:** **Grand Crusader:** Avenger\'s Shield has a 15% chance to reset its cooldown when you avoid an attack.\n**4-Set:** **Divine Toll:** Judgement casts 3 extra hammers at nearby enemies.' },
                        t3: { name: 'Redemption Battlegear (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** **Final Stand:** Divine Shield requires a defensive stance but taunts all enemies within 15 yards.\n**4-Set:** **Eye of Tyr:** Flash of Light is instant cast and costs no mana after a Shield of the Righteous crit.' }
                    }
                },
                {
                    name: 'Retribution',
                    icon: 'https://i.imgur.com/dpHn8vW.png',
                    sets: {
                        t4: { name: 'Justicar Battlegear', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/112/624.webp', bonus: '**2-Set:** Increases the damage dealt by your Crusader Strike ability by 10%.\n**4-Set:** Increases the damage dealt by your Judgement abilities by 10%.' },
                        t5: { name: 'Crystalforge Battlegear', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/117/629.webp', bonus: '**2-Set:** Your Judgement abilities have a chance to restore 50 mana to your party members.\n**4-Set:** Your Hammer of Justice hits 100% harder.' },
                        t6: { name: 'Lightbringer Battlegear', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/167/679.webp', bonus: '**2-Set:** Your melee attacks have a chance to restore 50 mana.\n**4-Set:** Increases the damage dealt by your Hammer of Wrath ability by 10%.' },
                        't6.5': { name: 'Plate of the Light\'s Vanguard', image: 'https://i.imgur.com/IDZe4iF.jpeg', bonus: '**2-Set:** Exorcism is now instant cast.\n**4-Set:** Avenging Wrath duration increased by 5 sec.' },
                        t1: { name: 'Lawbringer Plate (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/208/208.webp', bonus: '**2-Set:** **Blade of Justice:** Art of War makes your next Exorcism reset the cooldown of Divine Storm.\n**4-Set:** **Zeal:** Crusader Strike hits twice.' },
                        t2: { name: 'Judgement Plate (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/217/217.webp', bonus: '**2-Set:** **Empyrean Legacy:** Divine Storm projects a wave of light forward, dealing Holy damage.\n**4-Set:** **Final Verdict:** Templar\'s Verdict (HP Spender) has a 15% chance to make your next Hammer of Wrath usable on any target.' },
                        t3: { name: 'Redemption Plate (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/16/528.webp', bonus: '**2-Set:** **Ashes to Ashes:** Wake of Ashes (New Ability) replaces Consecration. Strikes enemies for massive Holy damage and generates 3 Holy Power.\n**4-Set:** **Crusade:** Avenging Wrath grants +3% Haste for each Holy Power spent.' }
                    }
                }
            ]
        },
        hunter: {
            name: 'Hunter',
            crest: "https://i.imgur.com/En31Y4t.png",
            color: 'text-green-500',
            specs: [
                {
                    name: 'Beast Mastery',
                    icon: 'https://i.imgur.com/O9XtjlG.png',
                    sets: {
                        t4: { name: 'Demon Stalker Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/139/651.webp', bonus: '**2-Set:** Reduces the chance your Feign Death ability will be resisted by 5%.\n**4-Set:** Reduces the cooldown of your Kill Command ability by 2 sec.' },
                        t5: { name: 'Rift Stalker Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/140/652.webp', bonus: '**2-Set:** Your pet heals for 15% of the damage you deal.\n**4-Set:** Your Steady Shot ability has a 5% chance to grant you 20% attack power for 10 sec.' },
                        t6: { name: 'Gronnstalker\'s Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/157/669.webp', bonus: '**2-Set:** Increases the mana restored by your Aspect of the Viper by an additional 5%.\n**4-Set:** Increases the damage dealt by your Steady Shot ability by 10%.' },
                        't6.5': { name: 'Harness of the Golden Forest', image: 'https://i.imgur.com/gwvWJ4h.jpeg', bonus: '**2-Set:** Intimidation cooldown reduced by 15 sec.\n**4-Set:** While Bestial Wrath is active, your pet deals 10% chaos damage.' },
                        t1: { name: 'Giantstalker Harness (Reforged)', image: 'https://wow.zamimg.com/modelviewer/classic/webthumbs/item-set/1/1/206/206.webp', bonus: '**2-Set:** **Cobra Strikes:** Kill Command criticals reset the cooldown of Kill Shot.\n**4-Set:** **Dire Beast:** Steady Shot has a 10% chance to summon a Dire Beast to fight for you for 8 sec.' },
                        t2: { name: 'Dragonstalker Harness (Reforged)', image: 'https://wow.zamimg.com/modelviewer/classic/webthumbs/item-set/1/1/215/215.webp', bonus: '**2-Set:** **Bestial Strength:** Your Pet deals 15% increased damage while under the effects of Bestial Wrath.\n**4-Set:** **Call of the Wild:** All your stable pets are summoned to fight for 12 seconds (3 min CD).' },
                        t3: { name: 'Cryptstalker Harness (Reforged)', image: 'https://wow.zamimg.com/modelviewer/classic/webthumbs/item-set/1/1/18/530.webp', bonus: '**2-Set:** **Pack Leader:** Kill Command has 2 charges.\n**4-Set:** **Titanspar:** Barbed Shot applies a "Lacerating Wound" that increases pet damage by 5%, stacking 3 times.' }
                    }
                },
                {
                    name: 'Marksmanship',
                    icon: 'https://i.imgur.com/qtQxThz.png',
                    sets: {
                        t4: { name: 'Demon Stalker Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/139/651.webp', bonus: '**2-Set:** Reduces the chance your Feign Death ability will be resisted by 5%.\n**4-Set:** Reduces the cooldown of your Kill Command ability by 2 sec.' },
                        t5: { name: 'Rift Stalker Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/140/652.webp', bonus: '**2-Set:** Your pet heals for 15% of the damage you deal.\n**4-Set:** Your Steady Shot ability has a 5% chance to grant you 20% attack power for 10 sec.' },
                        t6: { name: 'Gronnstalker\'s Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/157/669.webp', bonus: '**2-Set:** Increases the mana restored by your Aspect of the Viper by an additional 5%.\n**4-Set:** Increases the damage dealt by your Steady Shot ability by 10%.' },
                        't6.5': { name: 'Armor of the Golden Forest', image: 'https://i.imgur.com/gwvWJ4h.jpeg', bonus: '**2-Set:** Chimera Shot damage increased by 10%.\n**4-Set:** Silencing Shot cooldown reduced by 5 sec.' },
                        t1: { name: 'Giantstalker Armor (Reforged)', image: 'https://wow.zamimg.com/modelviewer/classic/webthumbs/item-set/1/1/206/206.webp', bonus: '**2-Set:** **Eagle Eye:** Range of all shots increased by 5 yards.\n**4-Set:** **Dead Eye:** Aimed Shot cast time reduced by 50%.' },
                        t2: { name: 'Dragonstalker Armor (Reforged)', image: 'https://wow.zamimg.com/modelviewer/classic/webthumbs/item-set/1/1/215/215.webp', bonus: '**2-Set:** **Rapid Killing:** Killing an enemy resets the cooldown of Rapid Fire.\n**4-Set:** **Windburst:** Aimed Shot leaves a wind trail, increasing movement speed of allies by 40%.' },
                        t3: { name: 'Cryptstalker Armor (Reforged)', image: 'https://wow.zamimg.com/modelviewer/classic/webthumbs/item-set/1/1/18/530.webp', bonus: '**2-Set:** **Dark Ranger:** Black Arrow now silences the target for 3 sec.\n**4-Set:** **Wailing Arrow:** Chimera Shot splashes shadow damage to all enemies within 8 yards.' }
                    }
                },
                {
                    name: 'Survival',
                    icon: 'https://i.imgur.com/xHx9U5j.jpeg',
                    sets: {
                        t4: { name: 'Demon Stalker Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/139/651.webp', bonus: '**2-Set:** Reduces the chance your Feign Death ability will be resisted by 5%.\n**4-Set:** Reduces the cooldown of your Kill Command ability by 2 sec.' },
                        t5: { name: 'Rift Stalker Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/140/652.webp', bonus: '**2-Set:** Your pet heals for 15% of the damage you deal.\n**4-Set:** Your Steady Shot ability has a 5% chance to grant you 20% attack power for 10 sec.' },
                        t6: { name: 'Gronnstalker\'s Armor', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/1/157/669.webp', bonus: '**2-Set:** Increases the mana restored by your Aspect of the Viper by an additional 5%.\n**4-Set:** Increases the damage dealt by your Steady Shot ability by 10%.' },
                        't6.5': { name: 'Guise of the Golden Forest', image: 'https://i.imgur.com/gwvWJ4h.jpeg', bonus: '**2-Set:** Explosive Shot ticks twice as fast.\n**4-Set:** Disengage clears all movement impairing effects.' },
                        t1: { name: 'Giantstalker Guise (Reforged)', image: 'https://wow.zamimg.com/modelviewer/classic/webthumbs/item-set/1/1/206/206.webp', bonus: '**2-Set:** **Wildfire:** Explosive Trap burns enemies for 20% more damage.\n**4-Set:** **Hydra\'s Bite:** Serpent Sting shoots arrows at 2 additional nearby targets.' },
                        t2: { name: 'Dragonstalker Guise (Reforged)', image: 'https://wow.zamimg.com/modelviewer/classic/webthumbs/item-set/1/1/215/215.webp', bonus: '**2-Set:** **Wyvern Sting:** Cooldown reduced by 30 sec, and now deals high Nature damage over time.\n**4-Set:** **Viper\'s Venom:** Mongoose Bite has a 30% chance to reset the cooldown of Explosive Shot.' },
                        t3: { name: 'Cryptstalker Guise (Reforged)', image: 'https://wow.zamimg.com/modelviewer/classic/webthumbs/item-set/1/1/18/530.webp', bonus: '**2-Set:** **Camouflage:** You heal for 5% of your max health every sec while in Camouflage (Stealth).\n**4-Set:** **Butchery:** Carve (Melee AoE) reduces the cooldown of your Wildfire Bomb by 1 sec for each target hit.' }
                    }
                }
            ]
        },
        rogue: {
            name: 'Rogue',
            crest: "https://i.imgur.com/kQJfCCO.png",
            color: 'text-yellow-500',
            specs: [
                {
                    name: 'Assassination',
                    icon: 'https://wowmeta.com/_app/immutable/assets/classic-rogue-assassination.BssFEmMX.png',
                    sets: {
                        t4: { name: 'Netherblade Breeches', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/109/621.webp', bonus: '**2-Set:** Increases the duration of your Slice and Dice ability by 3 sec.\n**4-Set:** Your finishing moves have a 15% chance to grant you an extra combo point.' },
                        t5: { name: 'Deathmantle Legguards', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/110/622.webp', bonus: '**2-Set:** Your Eviscerate and Envenom abilities deal 40 additional damage per combo point.\n**4-Set:** Your attacks have a chance to make your next finishing move cost no energy.' },
                        t6: { name: 'Slayer\'s Legguards', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/156/668.webp', bonus: '**2-Set:** Increases the haste from your Slice and Dice ability by 5%.\n**4-Set:** Increases the damage dealt by your Backstab, Sinister Strike, Mutilate, and Hemorrhage abilities by 6%.' },
                        't6.5': { name: 'Tunic of the Silent Assassin', image: 'https://i.imgur.com/WN4zw2T.jpeg', bonus: '**2-Set:** Deadly Poison ticks faster based on Haste.\n**4-Set:** Vendetta lasts 5 seconds longer.' },
                        t1: { name: 'Nightslayer Tunic (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/204/204.webp', bonus: '**2-Set:** **Master Poisoner:** Mutilate costs 10 less Energy.\n**4-Set:** **System Shock:** Envenom critical strikes silence the target for 1.5 sec (6 sec internal CD).' },
                        t2: { name: 'Bloodfang Tunic (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/213/213.webp', bonus: '**2-Set:** **Toxic Blade:** Shiv now applies 2 stacks of Deadly Poison.\n**4-Set:** **Kingsbane:** Vendetta applies a lethal poison, dealing massive nature damage over 12 seconds.' },
                        t3: { name: 'Bonescythe Tunic (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/12/524.webp', bonus: '**2-Set:** **Blindside:** Envenom has a 20% chance to reset the cooldown of Mutilate.\n**4-Set:** **Sudden Demise:** Your Bleed ticks have a chance to deal instant Nature damage based on your Attack Power.' }
                    }
                },
                {
                    name: 'Combat',
                    icon: 'https://wowmeta.com/_app/immutable/assets/rogue.BcZrWFcx.png',
                    sets: {
                        t4: { name: 'Netherblade Breeches', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/109/621.webp', bonus: '**2-Set:** Increases the duration of your Slice and Dice ability by 3 sec.\n**4-Set:** Your finishing moves have a 15% chance to grant you an extra combo point.' },
                        t5: { name: 'Deathmantle Legguards', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/110/622.webp', bonus: '**2-Set:** Your Eviscerate and Envenom abilities deal 40 additional damage per combo point.\n**4-Set:** Your attacks have a chance to make your next finishing move cost no energy.' },
                        t6: { name: 'Slayer\'s Legguards', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/156/668.webp', bonus: '**2-Set:** Increases the haste from your Slice and Dice ability by 5%.\n**4-Set:** Increases the damage dealt by your Backstab, Sinister Strike, Mutilate, and Hemorrhage abilities by 6%.' },
                        't6.5': { name: 'Chestpiece of the Silent Assassin', image: 'https://i.imgur.com/WN4zw2T.jpeg', bonus: '**2-Set:** Killing Spree deals 10% more damage.\n**4-Set:** Sword Specialization procs grant 5 energy.' },
                        t1: { name: 'Nightslayer Chestpiece (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/204/204.webp', bonus: '**2-Set:** **Blade Flurry:** Blade Flurry now has 2 charges.\n**4-Set:** **Adrenaline:** Adrenaline Rush lasts 5 seconds longer.' },
                        t2: { name: 'Bloodfang Chestpiece (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/213/213.webp', bonus: '**2-Set:** **Broadsides:** Sinister Strike has a 20% chance to generate an additional Combo Point.\n**4-Set:** **Roll the Bones:** Finishing moves grant a random combat enhancement for 10 sec (Crit, Haste, or Energy Regen).' },
                        t3: { name: 'Bonescythe Chestpiece (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/12/524.webp', bonus: '**2-Set:** **Revealing Strike:** Sinister Strike increases the damage of your next Eviscerate by 10%.\n**4-Set:** **Killing Spree:** Killing Spree grants you total immunity to all damage and effects while active.' }
                    }
                },
                {
                    name: 'Subtlety',
                    icon: 'https://wowmeta.com/_app/immutable/assets/rogue.BcZrWFcx.png',
                    sets: {
                        t4: { name: 'Netherblade Breeches', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/109/621.webp', bonus: '**2-Set:** Increases the duration of your Slice and Dice ability by 3 sec.\n**4-Set:** Your finishing moves have a 15% chance to grant you an extra combo point.' },
                        t5: { name: 'Deathmantle Legguards', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/110/622.webp', bonus: '**2-Set:** Your Eviscerate and Envenom abilities deal 40 additional damage per combo point.\n**4-Set:** Your attacks have a chance to make your next finishing move cost no energy.' },
                        t6: { name: 'Slayer\'s Legguards', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/156/668.webp', bonus: '**2-Set:** Increases the haste from your Slice and Dice ability by 5%.\n**4-Set:** Increases the damage dealt by your Backstab, Sinister Strike, Mutilate, and Hemorrhage abilities by 6%.' },
                        't6.5': { name: 'Vest of the Silent Assassin', image: 'https://i.imgur.com/WN4zw2T.jpeg', bonus: '**2-Set:** Shadow Dance duration increased by 2 sec.\n**4-Set:** Backstab damage increased by 10%.' },
                        t1: { name: 'Nightslayer Vest (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/204/204.webp', bonus: '**2-Set:** **Shadowstrike:** Ambush teleports you to your target (25 yd range).\n**4-Set:** **First Blood:** Eviscerate deals 50% increased damage to targets below 35% health.' },
                        t2: { name: 'Bloodfang Vest (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/213/213.webp', bonus: '**2-Set:** **Shadow Techniques:** Auto-attacks have a chance to generate Combo Points.\n**4-Set:** **Secret Technique:** Eviscerate creates a shadow clone that mimics your finisher.' },
                        t3: { name: 'Bonescythe Vest (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/12/524.webp', bonus: '**2-Set:** **Envelope of Shadows:** Vanish grants you a shield absorbing 30% of your max health.\n**4-Set:** **Akaari\'s Soul:** Shadowstrike (Ambush) leaves a soul fragment on the target that explodes for Shadow damage after 2 seconds.' }
                    }
                }
            ]
        },
        priest: {
            name: 'Priest',
            crest: "https://i.imgur.com/aj1CVrE.png",
            color: 'text-white',
            specs: [
                {
                    name: 'Discipline',
                    icon: 'https://i.imgur.com/yKNBawv.png',
                    sets: {
                        t4: { name: 'Incarnate Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/151/663.webp', bonus: '**2-Set:** Your Prayer of Healing spell now heals for an additional 150.\n**4-Set:** Your Flash Heal spell has a chance to cause your next Flash Heal to be instant cast.' },
                        t5: { name: 'Avatar Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/153/665.webp', bonus: '**2-Set:** If your Greater Heal brings the target to full health, you gain 100 mana.\n**4-Set:** Your Renew spell lasts 3 sec longer.' },
                        t6: { name: 'Absolution Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/162/674.webp', bonus: '**2-Set:** Reduces the mana cost of your Prayer of Healing by 10%.\n**4-Set:** Your Greater Heal has a chance to heal your target for 334 mana.' },
                        't6.5': { name: 'Robe of Eternal Light', image: 'https://i.imgur.com/YwYn8N6.jpeg', bonus: '**2-Set:** Reduces Weakened Soul duration by 2 sec.\n**4-Set:** Flash Heal shield effect increased by 30%.' },
                        t1: { name: 'Prophecy Robe (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/202/202.webp', bonus: '**2-Set:** **Penance:** Penance channel time reduced by 0.5 sec.\n**4-Set:** **Power of the Dark Side:** Penance has a chance to deal 50% increased damage/healing.' },
                        t2: { name: 'Transcendence Robe (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/211/211.webp', bonus: '**2-Set:** **Atonement:** Power Word: Shield reflects 30% of damage absorbed as Holy damage.\n**4-Set:** **Barrier:** Power Word: Barrier grants immunity to interrupts while inside.' },
                        t3: { name: 'Faith Robe (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/13/525.webp', bonus: '**2-Set:** **Rapture:** When your Power Word: Shield is fully absorbed, you instantly regenerate 2% mana.\n**4-Set:** **Spirit Shell:** Power Infusion also wraps the target in a Spirit Shell, absorbing massive damage for 15 sec.' }
                    }
                },
                {
                    name: 'Holy',
                    icon: 'https://i.imgur.com/2JfVmju.png',
                    sets: {
                        t4: { name: 'Incarnate Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/151/663.webp', bonus: '**2-Set:** Your Prayer of Healing spell now heals for an additional 150.\n**4-Set:** Your Flash Heal spell has a chance to cause your next Flash Heal to be instant cast.' },
                        t5: { name: 'Avatar Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/153/665.webp', bonus: '**2-Set:** If your Greater Heal brings the target to full health, you gain 100 mana.\n**4-Set:** Your Renew spell lasts 3 sec longer.' },
                        t6: { name: 'Absolution Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/162/674.webp', bonus: '**2-Set:** Reduces the mana cost of your Prayer of Healing by 10%.\n**4-Set:** Your Greater Heal has a chance to heal your target for 334 mana.' },
                        't6.5': { name: 'Vestments of Eternal Light', image: 'https://i.imgur.com/YwYn8N6.jpeg', bonus: '**2-Set:** Holy Nova is now targeted at a location.\n**4-Set:** Lightwell is now clickable from 40 yards away.' },
                        t1: { name: 'Prophecy Vestments (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/202/202.webp', bonus: '**2-Set:** **Serendipity:** Flash Heal reduces the cast time of your next Greater Heal by 20% (Stacks 2x).\n**4-Set:** **Guardian Spirit:** Guardian Spirit cooldown reduced by 60 sec.' },
                        t2: { name: 'Transcendence Vestments (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/211/211.webp', bonus: '**2-Set:** **Echo of Light:** Your direct heals leave a HoT for 10% of the amount healed.\n**4-Set:** **Apotheosis:** Reset the cooldown of all Holy Words and enter a pure Holy form for 10 sec.' },
                        t3: { name: 'Faith Vestments (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/13/525.webp', bonus: '**2-Set:** **Light of Naaru:** Holy Word: Serenity reduces the cooldown of Circle of Healing by 2 sec.\n**4-Set:** **Salvation:** Divine Hymn is now castable while moving and heals for 20% more.' }
                    }
                },
                {
                    name: 'Shadow',
                    icon: 'https://i.imgur.com/cgUNFcU.png',
                    sets: {
                        t4: { name: 'Incarnate Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/151/663.webp', bonus: '**2-Set:** Your Shadowfiend lasts 3 sec longer.\n**4-Set:** Your Mind Flay spell deals 5% more damage.' },
                        t5: { name: 'Avatar Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/153/665.webp', bonus: '**2-Set:** Each time you cast a Shadow spell, you have a chance to gain 132 Spell Power for 15 sec.\n**4-Set:** Your Shadow Word: Pain deals 12% more damage.' },
                        t6: { name: 'Absolution Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/162/674.webp', bonus: '**2-Set:** Increases the duration of your Shadow Word: Pain by 3 sec.\n**4-Set:** Increases the damage of your Mind Blast by 10%.' },
                        't6.5': { name: 'Shroud of Eternal Darkness', image: 'https://i.imgur.com/YwYn8N6.jpeg', bonus: '**2-Set:** Devouring Plague is now instant cast.\n**4-Set:** Dispersion heals you for 50% HP.' },
                        t1: { name: 'Prophecy Shroud (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/202/202.webp', bonus: '**2-Set:** **Voidform:** Mind Blast reduces the cast time of Vampiric Touch by 50%.\n**4-Set:** **Void Origins:** Erupting into Voidform (Shadowform) deals Shield damage to all enemies within 10yds.' },
                        t2: { name: 'Transcendence Shroud (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/211/211.webp', bonus: '**2-Set:** **Shadowy Insights:** Shadow Word: Pain ticks have a chance to reset the cooldown of Mind Blast.\n**4-Set:** **Void Shift:** Swap health percentages with your Shadowfiend, effectively fully healing you when it dies or expires.' },
                        t3: { name: 'Faith Shroud (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/13/525.webp', bonus: '**2-Set:** **Call to the Void:** Mind Flay has a chance to spawn a Void Tentacle that channels at your target.\n**4-Set:** **Surrender to Madness:** Movement speed increased by 30% while in Shadowform. You can cast while moving for 10 sec after using Dispersion.' }
                    }
                }
            ]
        },
        shaman: {
            name: 'Shaman',
            crest: "https://i.imgur.com/OaLY1Ck.png",
            color: 'text-blue-500',
            specs: [
                {
                    name: 'Elemental',
                    icon: 'https://i.imgur.com/8ChsJBV.png',
                    sets: {
                        t4: { name: 'Cyclone Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/120/632.webp', bonus: '**2-Set:** Your Wrath of Air Totem grants an additional 20 spell power.\n**4-Set:** Your Lightning Bolt critical strikes have a chance to grant 120 mana to all party members.' },
                        t5: { name: 'Cataclysm Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/123/635.webp', bonus: '**2-Set:** Reduces the cost of your Chain Lightning spell by 10%.\n**4-Set:** Your Lightning Bolt critical strikes have a chance to reduce the cast time of your next Lightning Bolt by 0.5 sec.' },
                        t6: { name: 'Skyshatter Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/170/682.webp', bonus: '**2-Set:** Reduces the mana cost of your Lightning Bolt, Chain Lightning, and Lightning Shield spells by 10%.\n**4-Set:** Increases the damage done by your Lightning Bolt by 5%.' },
                        't6.5': { name: 'Regalia of the Stormbreaker', image: 'https://i.imgur.com/zFY0c5z.jpeg', bonus: '**2-Set:** Flame Shock duration increased by 6 sec.\n**4-Set:** Lightning Overload proc chance increased by 10%.' },
                        t1: { name: 'Earthfury Regalia (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/207/207.webp', bonus: '**2-Set:** **Echo of the Elements:** Lava Burst has 2 charges.\n**4-Set:** **Master of the Elements:** Casting Lava Burst increases your Nature damage by 10% for 10 sec.' },
                        t2: { name: 'Ten Storms Regalia (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/216/216.webp', bonus: '**2-Set:** **Stormkeeper:** Your next 2 Lightning Bolts are instant cast and overload (1.5m CD).\n**4-Set:** **Unlimited Power:** Lightning Overloads generate mana.' },
                        t3: { name: 'Earthshatter Regalia (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/15/527.webp', bonus: '**2-Set:** **Primordial Wave:** Flame Shock hits 1 additional target.\n**4-Set:** **Ascendance:** Transform into a Flame Ascendant for 15 sec, replacing Chain Lightning with Lava Beam (no CD).' }
                    }
                },
                {
                    name: 'Enhancement',
                    icon: 'https://i.imgur.com/38aMS1Y.png',
                    sets: {
                        t4: { name: 'Cyclone Harness', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/120/632.webp', bonus: '**2-Set:** Your Strength of Earth Totem grants an additional 12 strength.\n**4-Set:** Your Stormstrike ability deals an additional 30 damage per weapon.' },
                        t5: { name: 'Cataclysm Harness', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/123/635.webp', bonus: '**2-Set:** Your melee attacks have a chance to increase your haste by 10% for 10 sec.\n**4-Set:** Your Stormstrike ability deals 30% more damage if you are dual-wielding.' },
                        t6: { name: 'Skyshatter Harness', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/170/682.webp', bonus: '**2-Set:** Your Earth Shock, Flame Shock, and Frost Shock abilities cost 10% less mana.\n**4-Set:** Increases the attack power bonus from your Stormstrike ability by an additional 70.' },
                        't6.5': { name: 'Harness of the Stormbreaker', image: 'https://i.imgur.com/zFY0c5z.jpeg', bonus: '**2-Set:** Maelstrom Weapon stacks to 10.\n**4-Set:** Lava Lash deals 20% more damage if Flametongue is active.' },
                        t1: { name: 'Earthfury Harness (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/207/207.webp', bonus: '**2-Set:** **Hailstorm:** Frost Shock damage increased by 50%.\n**4-Set:** **Ice Strike:** Stormstrike resets the cooldown of your Frost and Earth Shocks.' },
                        t2: { name: 'Ten Storms Harness (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/216/216.webp', bonus: '**2-Set:** **Crash Lightning:** Crash Lightning (Cone AoE) replaces Chain Lightning. Enhances your weapons to cleave on all attacks.\n**4-Set:** **Stormbringer:** Stormstrike has a chance to reset its own cooldown.' },
                        t3: { name: 'Earthshatter Harness (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/15/527.webp', bonus: '**2-Set:** **Doom Winds:** Windfury Weapon has a 100% chance to trigger for 6 seconds (1m CD).\n**4-Set:** **Sundering:** Earth Shock creates a fissure, dealing Flamestrike damage to enemies in a line.' }
                    }
                },
                {
                    name: 'Restoration',
                    icon: 'https://i.imgur.com/2msDhl4.png',
                    sets: {
                        t4: { name: 'Cyclone Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/120/632.webp', bonus: '**2-Set:** Reduces the cooldown of your Nature\'s Swiftness ability by 24 sec.\n**4-Set:** Increases the healing gained from your Healing Stream Totem ability.' },
                        t5: { name: 'Cataclysm Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/123/635.webp', bonus: '**2-Set:** Your Lesser Healing Wave has a chance to restore 120 mana to you.\n**4-Set:** Your Chain Heal critical heals have a chance to increase the healing of your next Lesser Healing Wave by 25%.' },
                        t6: { name: 'Skyshatter Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/170/682.webp', bonus: '**2-Set:** Your Chain Heal ability costs 10% less mana.\n**4-Set:** Increases the healing done by your Lesser Healing Wave ability by 5%.' },
                        't6.5': { name: 'Raiment of the Stormbreaker', image: 'https://i.imgur.com/zFY0c5z.jpeg', bonus: '**2-Set:** Nature\'s Swiftness cooldown reduced by 1 min.\n**4-Set:** Healing Stream Totem heals for 500% more.' },
                        t1: { name: 'Earthfury Raiment (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/207/207.webp', bonus: '**2-Set:** **Cloudburst:** Healing Stream Totem stores 10% of all healing you do and releases it when it expires.\n**4-Set:** **High Tide:** Chain Heal no longer reduces in potency with each bounce.' },
                        t2: { name: 'Ten Storms Raiment (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/216/216.webp', bonus: '**2-Set:** **Echo of the Elements:** Riptide has 2 charges.\n**4-Set:** **Primordial Wave:** Apply Riptide to all party members (45s CD).' },
                        t3: { name: 'Earthshatter Raiment (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/15/527.webp', bonus: '**2-Set:** **Wellspring:** Chain Heal leaves a "Riptide" HoT on the primary target.\n**4-Set:** **Spirit Link:** Spirit Link Totem reduces damage taken by all party members by 10%.' }
                    }
                }
            ]
        },
        mage: {
            name: 'Mage',
            crest: "https://i.imgur.com/qn2djXW.png",
            color: 'text-cyan-400',
            specs: [
                {
                    name: 'Arcane',
                    icon: 'https://i.imgur.com/Zt0BQe6.png',
                    sets: {
                        t4: { name: 'Aldor Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/136/648.webp', bonus: '**2-Set:** Spells cast while in the Clearcasting state have 30% increased critical strike chance.\n**4-Set:** Your critical strikes have a chance to increase your spell power by 50 for 12 sec.' },
                        t5: { name: 'Tirisfal Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/137/649.webp', bonus: '**2-Set:** Increases the damage and mana cost of your Arcane Blast by 20%.\n**4-Set:** Your Spell critical strikes grant you up to 70 spell power for 6 sec.' },
                        t6: { name: 'Tempest Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/159/671.webp', bonus: '**2-Set:** Increases the duration of your Evocation ability by 2 sec.\n**4-Set:** Increases the damage of your Fireball, Frostbolt, and Arcane Missiles abilities by 5%.' },
                        't6.5': { name: 'Regalia of the Arcane Order', image: 'https://i.imgur.com/ZmtFvSD.jpeg', bonus: '**2-Set:** Arcane Blast has a 40% chance to reduce the cooldown of Presence of Mind by 10 sec and cause it to trigger.\n**4-Set:** Arcane Missiles has a 12% chance to create a Time Anomaly. The anomaly summons a mirror copy of you, to assist you for 10 sec.' },
                        t1: { name: 'Arcanist Regalia (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/201/201.webp', bonus: '**2-Set:** **Arcane Flux:** Arcane Blast cast time reduced by 0.2 sec.\n**4-Set:** **Time Anomaly:** Casting Arcane Missiles has a chance to grant "Time Warp" to yourself for 6 seconds.' },
                        t2: { name: 'Netherwind Regalia (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/210/210.webp', bonus: '**2-Set:** **Touch of the Magi:** Arcane Power applies Touch of the Magi, accumulating 20% of damage dealt and exploding when it expires.\n**4-Set:** **Slipstream:** Arcane Missiles can be channeled while moving.' },
                        t3: { name: 'Frostfire Regalia (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/14/526.webp', bonus: '**2-Set:** **Arcane Harmony:** Arcane Missiles stacks "Harmony", increasing the damage of your next Arcane Barrage by 10% per stack (up to 20).\n**4-Set:** **Radiant Spark:** Your next 4 spells deal 10%, 20%, 30%, and 40% increased damage (45s CD).' }
                    }
                },
                {
                    name: 'Fire',
                    icon: 'https://i.imgur.com/TRNTMys.png',
                    sets: {
                        t4: { name: 'Aldor Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/136/648.webp', bonus: '**2-Set:** Spells cast while in the Clearcasting state have 30% increased critical strike chance.\n**4-Set:** Your critical strikes have a chance to increase your spell power by 50 for 12 sec.' },
                        t5: { name: 'Tirisfal Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/137/649.webp', bonus: '**2-Set:** Increases the damage and mana cost of your Arcane Blast by 20%.\n**4-Set:** Your Spell critical strikes grant you up to 70 spell power for 6 sec.' },
                        t6: { name: 'Tempest Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/159/671.webp', bonus: '**2-Set:** Increases the duration of your Evocation ability by 2 sec.\n**4-Set:** Increases the damage of your Fireball, Frostbolt, and Arcane Missiles abilities by 5%.' },
                        't6.5': { name: 'Garb of the Arcane Order', image: 'https://i.imgur.com/ZmtFvSD.jpeg', bonus: '**2-Set:** Fire Blast becomes Inferno Blast. Now has 2 charges.\n**4-Set:** When you activate Combustion, you have a chance to gain Pyromaniac (Haste/Damage buff).' },
                        t1: { name: 'Arcanist Garb (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/201/201.webp', bonus: '**2-Set:** **Phoenix Flames:** Fire Blast has 3 charges and always crits.\n**4-Set:** **From the Ashes:** Increases Mastery by 5% for each charge of Fire Blast on cooldown.' },
                        t2: { name: 'Netherwind Garb (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/210/210.webp', bonus: '**2-Set:** **Sun King\'s Blessing:** Consuming a Hot Streak has a chance to make your next Pyroblast instant and deal 50% increased damage.\n**4-Set:** **Kindling:** Critical strikes reduce the cooldown of Combustion by 1 sec.' },
                        t3: { name: 'Frostfire Garb (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/14/526.webp', bonus: '**2-Set:** **Hyperthermia:** Hot Streak has a chance to activate Hyperthermia, making all Pyroblasts instant for 5 seconds.\n**4-Set:** **Meteor:** Calls down a meteor that hits for massive Fire damage split between targets.' }
                    }
                },
                {
                    name: 'Frost',
                    icon: 'https://i.imgur.com/oR1e4BK.png',
                    sets: {
                        t4: { name: 'Aldor Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/136/648.webp', bonus: '**2-Set:** Spells cast while in the Clearcasting state have 30% increased critical strike chance.\n**4-Set:** Your critical strikes have a chance to increase your spell power by 50 for 12 sec.' },
                        t5: { name: 'Tirisfal Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/137/649.webp', bonus: '**2-Set:** Increases the damage and mana cost of your Arcane Blast by 20%.\n**4-Set:** Your Spell critical strikes grant you up to 70 spell power for 6 sec.' },
                        t6: { name: 'Tempest Regalia', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/159/671.webp', bonus: '**2-Set:** Increases the duration of your Evocation ability by 2 sec.\n**4-Set:** Increases the damage of your Fireball, Frostbolt, and Arcane Missiles abilities by 5%.' },
                        't6.5': { name: 'Vestments of the Arcane Order', image: 'https://i.imgur.com/ZmtFvSD.jpeg', bonus: '**2-Set:** Frostbolt has a +10% chance to trigger Brain Freeze.\n**4-Set:** Frozen Orb has an additional 5% chance to trigger Fingers of Frost when it deals damage.' },
                        t1: { name: 'Arcanist Vestments (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/201/201.webp', bonus: '**2-Set:** **Chain Reaction:** Frostbolt crits increase the damage of your next Ice Lance by 10% (stacks 5 times).\n**4-Set:** **Glacial Spike:** Consumes 5 Icicles to launch a massive spike dealing 300% spell power.' },
                        t2: { name: 'Netherwind Vestments (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/210/210.webp', bonus: '**2-Set:** **Frozen Orb:** Replaces Frost Ward. Launches an orb of swirling ice that damages and slows enemies.\n**4-Set:** **Freezing Rain:** Frozen Orb makes Blizzard instant cast and deal 50% more damage.' },
                        t3: { name: 'Frostfire Vestments (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/14/526.webp', bonus: '**2-Set:** **Comet Storm:** Calls down 7 comets to impact the target area.\n**4-Set:** **Ray of Frost:** Channel a beam of ice that deals increasing damage over 6 seconds.' }
                    }
                }
            ]
        },
        warlock: {
            name: 'Warlock',
            crest: "https://i.imgur.com/MHcMLJx.png",
            color: 'text-purple-500',
            specs: [
                {
                    name: 'Affliction',
                    icon: 'https://i.imgur.com/ZAsJNiE.jpeg',
                    sets: {
                        t4: { name: 'Voidheart Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/133/645.webp', bonus: '**2-Set:** Your shadow damage spells have a chance to grant you 135 bonus shadow damage for 15 sec.\n**4-Set:** Increases the duration of your Corruption and Immolate abilities by 3 sec.' },
                        t5: { name: 'Corruptor Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/134/646.webp', bonus: '**2-Set:** Your pet heals you for 15% of the damage it deals.\n**4-Set:** Your Shadow Bolt hits have a chance to grant you 270 spell damage for 10 sec.' },
                        t6: { name: 'Malefic Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/158/670.webp', bonus: '**2-Set:** Each time one of your corruption or immolate ticks deals damage you heal for 70 health.\n**4-Set:** Increases the damage dealt by your Shadow Bolt and Incinerate abilities by 6%.' },
                        't6.5': { name: 'Raiment of the Dark Conclave', image: 'https://i.imgur.com/9IU77eZ.jpeg', bonus: '**2-Set:** When Drain Soul deals damage, there is a chance to increase the duration of Unstable Affliction on the target by 1.0 sec.\n**4-Set:** When Corruption deals damage, you have a chance to increase the damage of your next Drain Soul by 100%.' },
                        t1: { name: 'Felheart Raiment (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/203/203.webp', bonus: '**2-Set:** **Malefic Rapture:** Drain Soul now hits all targets affected by your Corruption for 50% damage.\n**4-Set:** **Soul Rot:** Withers away all life within 10yds, applying a heavy DoT.' },
                        t2: { name: 'Nemesis Raiment (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/212/212.webp', bonus: '**2-Set:** **Absolute Corruption:** Corruption is now permanent on non-player targets.\n**4-Set:** **Creeping Death:** Your DoTs deal their damage 15% faster.' },
                        t3: { name: 'Plagueheart Raiment (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/17/529.webp', bonus: '**2-Set:** **Deathbolt:** Fires a bolt of death dealing 30% of remaining DoT damage on the target instantly.\n**4-Set:** **Darkglare:** Summon a Darkglare that extends the duration of your DoTs by 8 sec.' }
                    }
                },
                {
                    name: 'Demonology',
                    icon: 'https://i.imgur.com/iGZVgov.png',
                    sets: {
                        t4: { name: 'Voidheart Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/133/645.webp', bonus: '**2-Set:** Your shadow damage spells have a chance to grant you 135 bonus shadow damage for 15 sec.\n**4-Set:** Increases the duration of your Corruption and Immolate abilities by 3 sec.' },
                        t5: { name: 'Corruptor Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/134/646.webp', bonus: '**2-Set:** Your pet heals you for 15% of the damage it deals.\n**4-Set:** Your Shadow Bolt hits have a chance to grant you 270 spell damage for 10 sec.' },
                        t6: { name: 'Malefic Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/158/670.webp', bonus: '**2-Set:** Each time one of your corruption or immolate ticks deals damage you heal for 70 health.\n**4-Set:** Increases the damage dealt by your Shadow Bolt and Incinerate abilities by 6%.' },
                        't6.5': { name: 'Robes of the Dark Conclave', image: 'https://i.imgur.com/9IU77eZ.jpeg', bonus: '**2-Set:** Increases the bonus Spell Power granted by your Demonic Knowledge talent by 20%.\n**4-Set:** When your summoned Demon deals a critical strike, you gain [Demonic Infusion], increasing your Spell Haste by 5% for 10 seconds. This effect stacks up to 3 times.' },
                        t1: { name: 'Felheart Robes (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/203/203.webp', bonus: '**2-Set:** **Dreadstalkers:** Curse of Doom summons 2 Dreadstalkers when it detonates.\n**4-Set:** **Demonic Calling:** Shadow Bolt has a chance to make your next Summon Demon instant and free.' },
                        t2: { name: 'Nemesis Robes (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/212/212.webp', bonus: '**2-Set:** **Hand of Gul\'dan:** Shadowfury also summons a meteor that spawns 3 Wild Imps.\n**4-Set:** **Implosion:** Detonate all your Wild Imps to deal massive AoE damage.' },
                        t3: { name: 'Plagueheart Robes (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/17/529.webp', bonus: '**2-Set:** **Power Siphon:** Sacrifice 2 Imps to gain 2 stacks of "Demonic Core" (Instant Shadow Bolt/Incinerate).\n**4-Set:** **Demonic Tyrant:** Summon a Demonic Tyrant that extends the duration of all your other demons.' }
                    }
                },
                {
                    name: 'Destruction',
                    icon: 'https://i.imgur.com/67hJXkU.png',
                    sets: {
                        t4: { name: 'Voidheart Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/133/645.webp', bonus: '**2-Set:** Your shadow damage spells have a chance to grant you 135 bonus shadow damage for 15 sec.\n**4-Set:** Increases the duration of your Corruption and Immolate abilities by 3 sec.' },
                        t5: { name: 'Corruptor Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/134/646.webp', bonus: '**2-Set:** Your pet heals you for 15% of the damage it deals.\n**4-Set:** Your Shadow Bolt hits have a chance to grant you 270 spell damage for 10 sec.' },
                        t6: { name: 'Malefic Raiment', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/158/670.webp', bonus: '**2-Set:** Each time one of your corruption or immolate ticks deals damage you heal for 70 health.\n**4-Set:** Increases the damage dealt by your Shadow Bolt and Incinerate abilities by 6%.' },
                        't6.5': { name: 'Vestments of the Dark Conclave', image: 'https://i.imgur.com/9IU77eZ.jpeg', bonus: '**2-Set:** Casting Rain of Fire or Chaos Bolt has a 40% chance to make your next cast of those spells free.\n**4-Set:** When the free version procs, you also summon an Infernal for 8 seconds.' },
                        t1: { name: 'Felheart Vestments (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/203/203.webp', bonus: '**2-Set:** **Havoc:** Bane of Havoc copies single target spells to a second target for 10 sec.\n**4-Set:** **Backdraft:** Conflagrate reduces the cast time of Chaos Bolt and Incinerate by 30%.' },
                        t2: { name: 'Nemesis Vestments (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/212/212.webp', bonus: '**2-Set:** **Cataclysm:** Cast a massive AoE that applies Immolate to all targets hit.\n**4-Set:** **Fire and Brimstone:** Incinerate now hits all targets affected by your Immolate.' },
                        t3: { name: 'Plagueheart Vestments (Reforged)', image: 'https://wow.zamimg.com/modelviewer/tbc/webthumbs/item-set/1/0/17/529.webp', bonus: '**2-Set:** **Channel Demonfire:** Channel 15 bolts of fel fire at random targets affected by Immolate.\n**4-Set:** **Chaos Reach:** Chaos Bolt range increased by 20 yds and castable while moving.' }
                    }
                }
            ]
        },
        druid: {
            name: 'Druid',
            crest: "https://i.imgur.com/t9FOweo.png",
            color: 'text-orange-500',
            specs: [
                {
                    name: 'Balance',
                    icon: 'https://i.imgur.com/xqYw2gI.png',
                    sets: {
                        t4: { name: 'Malorne Regalia', image: 'https://imgur.com/v5A8ZtM.png', bonus: '**2-Set:** Your harmful spells have a chance to restore 120 mana.\n**4-Set:** Reduces the cooldown of your Innervate ability by 48 sec.' },
                        t5: { name: 'Nordrassil Regalia', image: 'https://imgur.com/g8sVPwN.png', bonus: '**2-Set:** Increases the duration of your Moonfire ability by 3 sec.\n**4-Set:** Increases the damage dealt by your Starfire ability by 10%.' },
                        t6: { name: 'Thunderheart Regalia', image: 'https://imgur.com/fa3Okw7.png', bonus: '**2-Set:** Increases the duration of your Moonfire ability by 3 sec.\n**4-Set:** Increases the damage dealt by your Starfire ability by 5%.' },
                        't6.5': { name: 'Regalia of the Dreamwalker', image: 'https://i.imgur.com/8Go2qXQ.jpeg', bonus: '**2-Set:** Starfall cooldown reduced by 30 sec.\n**4-Set:** Eclipse guarantees critical strike for first 2 spells.' },
                        t1: { name: 'Cenarion Regalia (Reforged)', image: 'https://imgur.com/th5jcI9.png', bonus: '**2-Set:** **Shooting Stars:** Moonfire and Sunfire ticks have a chance to call down a falling star.\n**4-Set:** **Starsurge:** Launch a surge of stellar energy that empowers your next Starfire or Wrath.' },
                        t2: { name: 'Stormrage Regalia (Reforged)', image: 'https://imgur.com/obcbDFp.png', bonus: '**2-Set:** **Incarnation:** Transform into the Chosen of Elune, increasing Spell Power by 25% for 30s.\n**4-Set:** **New Moon:** Drop a moon on the target. Deals Astral damage and generates 100 Lunar Power.' },
                        t3: { name: 'Dreamwalker Regalia (Reforged)', image: 'https://imgur.com/PWlF02L.png', bonus: '**2-Set:** **Fury of Elune:** Call down a beam of pure energy that follows the target.\n**4-Set:** **Orbit Breaker:** Every 20th falling star triggers a Full Moon on the target automatically.' }
                    }
                },
                {
                    name: 'Feral',
                    icon: 'https://i.imgur.com/su1345k.jpeg',
                    sets: {
                        t4: { name: 'Malorne Harness', image: 'https://imgur.com/v5A8ZtM.png', bonus: '**2-Set:** Your melee attacks have a chance to generate 20 rage or 20 energy.\n**4-Set:** Increases your Strength by 30.' },
                        t5: { name: 'Nordrassil Harness', image: 'https://imgur.com/g8sVPwN.png', bonus: '**2-Set:** Your Regrowth spell becomes an instant cast spell when in Bear Form or Cat Form.\n**4-Set:** Increases the damage dealt by your Lacerate ability by 15%.' },
                        t6: { name: 'Thunderheart Harness', image: 'https://imgur.com/fa3Okw7.png', bonus: '**2-Set:** Reduces the energy cost of your Mangle ability in Cat Form by 5 and the rage cost of your Mangle ability in Bear Form by 5.\n**4-Set:** Increases the damage dealt by your Rip, Swipe, and Ferocious Bite abilities by 15%.' },
                        't6.5': { name: 'Harness of the Dreamwalker', image: 'https://i.imgur.com/8Go2qXQ.jpeg', bonus: '**2-Set:** Berserk duration increased by 5 sec.\n**4-Set:** Rip now can critically hit.' },
                        t1: { name: 'Cenarion Harness (Reforged)', image: 'https://imgur.com/th5jcI9.png', bonus: '**2-Set:** **Sabertooth:** Ferocious Bite increases the duration of Rip on your target by 2 sec.\n**4-Set:** **Brutal Slash:** Replaces Swipe. Massive cone damage with 3 charges.' },
                        t2: { name: 'Stormrage Harness (Reforged)', image: 'https://imgur.com/obcbDFp.png', bonus: '**2-Set:** **Bloodtalons:** Casting Regrowth or Entangling Roots causes your next 2 melee abilities to deal 25% increased damage.\n**4-Set:** **King of the Jungle:** Incarnation (Cat) makes Prowl usable in combat and shreds armor.' },
                        t3: { name: 'Dreamwalker Harness (Reforged)', image: 'https://imgur.com/PWlF02L.png', bonus: '**2-Set:** **Adaptive Swarm:** Command a swarm that heals allies or dots enemies, jumping to new targets upon expiry.\n**4-Set:** **Ashamane\'s Frenzy:** Unleash a rapid series of 15 swipes over 3 sec, bleeding all targets heavily.' }
                    }
                },
                {
                    name: 'Restoration',
                    icon: 'https://i.imgur.com/8WViTgN.png',
                    sets: {
                        t4: { name: 'Malorne Raiment', image: 'https://imgur.com/v5A8ZtM.png', bonus: '**2-Set:** Your helpful spells have a chance to restore 120 mana.\n**4-Set:** Reduces the cooldown of your Innervate ability by 48 sec.' },
                        t5: { name: 'Nordrassil Raiment', image: 'https://imgur.com/g8sVPwN.png', bonus: '**2-Set:** Increases the duration of your Regrowth spell by 6 sec.\n**4-Set:** Increases the healing effect of your Lifebloom ability by 150.' },
                        t6: { name: 'Thunderheart Raiment', image: 'https://imgur.com/fa3Okw7.png', bonus: '**2-Set:** Reduces the cooldown of your Swiftmend ability by 2 sec.\n**4-Set:** Increases the healing of your Healing Touch by 5%.' },
                        't6.5': { name: 'Raiment of the Dreamwalker', image: 'https://i.imgur.com/8Go2qXQ.jpeg', bonus: '**2-Set:** Wild Growth affects 1 additional target.\n**4-Set:** Nourish casts 10% faster per HoT on target.' },
                        t1: { name: 'Cenarion Raiment (Reforged)', image: 'https://imgur.com/th5jcI9.png', bonus: '**2-Set:** **Cenarion Ward:** Protects a friendly target, healing them for a large amount when they take damage.\n**4-Set:** **Abundance:** For each Rejuvenation you have active, Healing Touch cast time is reduced by 5%.' },
                        t2: { name: 'Stormrage Raiment (Reforged)', image: 'https://imgur.com/obcbDFp.png', bonus: '**2-Set:** **Flourish:** Extends the duration of all your heal over time effects by 10 sec.\n**4-Set:** **Tree of Life:** Permanent Tree form granted. Healing over time spells mana cost reduced by 20%.' },
                        t3: { name: 'Dreamwalker Raiment (Reforged)', image: 'https://imgur.com/PWlF02L.png', bonus: '**2-Set:** **Grove Guardians:** Summon Treants to cast Healing Touch on your current target.\n**4-Set:** **Convoke the Spirits:** Channel a flurry of 16 Druid spells and abilities over 4 seconds.' }
                    }
                }
            ]
        }
    };

    const currentClass = classes[activeClass];
    const currentSpec = currentClass.specs[activeSpec];
    const currentSet = currentSpec?.sets[activeTier];

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
                .font-cinzel { font-family: 'Cinzel', serif; }
                .font-body { font-family: 'Lato', sans-serif; }
                .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>

            <UnifiedHeader
                icon={<Shield />}
                background="https://i.imgur.com/K7GQXVQ.jpeg"
                section="The Armory"
                sub="Tier Sets Retuned"
                title="Tools of War"
                quote="The finest craftsmanship of the Sha'tar, the Aldor, and the Scryers."
            />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* --- LEFT: CLASS SELECTOR --- */}
                    <div className="lg:w-64 flex-shrink-0">
                        <div className="sticky top-24 bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden">
                            <h3 className="bg-[#111] p-3 text-xs font-cinzel text-stone-500 uppercase tracking-widest border-b border-white/5">Select Class</h3>
                            <div className="divide-y divide-white/5">
                                {Object.entries(classes).map(([key, cls]) => (
                                    <button
                                        key={key}
                                        onClick={() => { setActiveClass(key); setActiveSpec(0); }}
                                        className={`w-full flex items-center gap-3 p-3 transition-all hover:bg-white/5 ${activeClass === key ? 'bg-white/10 border-l-2 border-amber-500' : 'border-l-2 border-transparent'}`}
                                    >
                                        <div className={`w-8 h-8 rounded bg-black/50 p-1 ${activeClass === key ? '' : 'opacity-50 grayscale'}`}>
                                            <img src={cls.crest} alt={cls.name} className="w-full h-full object-contain" />
                                        </div>
                                        <span className={`font-cinzel text-sm ${activeClass === key ? 'text-white' : 'text-stone-500'}`}>
                                            {cls.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: CONTENT --- */}
                    <div className="flex-grow animate-fade-in">
                        {/* CLASS HEADER & SPEC TABS */}
                        <div className="mb-8 border-b border-white/10 pb-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-4 rounded-lg bg-white/5 ${currentClass.color} border border-white/10`}>
                                    <img src={currentClass.crest} alt={currentClass.name} className="w-12 h-12 object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-hero text-4xl text-[#c29c55]">{currentClass.name} Armory</h2>
                                    <p className="text-stone-500 text-sm tracking-widest uppercase">Browse Tier Sets By Specialization</p>
                                </div>
                            </div>

                            {/* SPEC SELECTOR */}
                            <div className="flex gap-2">
                                {currentClass.specs.map((spec, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveSpec(idx)}
                                        className={`px-4 py-2 rounded font-cinzel text-sm tracking-wider border transition-all flex items-center gap-2 ${activeSpec === idx
                                            ? `bg-${activeClass === 'paladin' ? 'pink' : activeClass === 'shaman' ? 'blue' : 'amber'}-900/20 border-${activeClass === 'paladin' ? 'pink' : 'amber'}-500/50 text-white`
                                            : 'border-transparent text-stone-500 hover:text-stone-300 hover:bg-white/5'}`}
                                    >
                                        <img src={spec.icon} alt="" className="w-5 h-5 object-contain" />
                                        {spec.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* TIER SELECTOR */}
                        <div className="mb-8">
                            <div className="flex flex-wrap justify-center gap-3">
                                {tiers.map((tier) => (
                                    <button
                                        key={tier.id}
                                        onClick={() => setActiveTier(tier.id)}
                                        className={`flex flex-col items-center justify-center px-4 py-3 rounded-lg border transition-all duration-300 min-w-[120px] ${activeTier === tier.id
                                            ? 'bg-amber-900/40 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] transform scale-105'
                                            : 'bg-[#111] border-white/5 hover:border-white/20 hover:bg-white/5'}`}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`font-hero text-sm ${activeTier === tier.id ? 'text-[#c29c55]' : 'text-stone-400'}`}>{tier.label}</span>
                                            <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${activeTier === tier.id ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-stone-600'}`}>
                                                {tier.iLvl}
                                            </span>
                                        </div>
                                        <span className="text-[10px] text-stone-500 uppercase tracking-wider">{tier.sub}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* SET DISPLAY CARD */}
                        {currentSet ? (
                            <div className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <div className="absolute top-0 right-0 p-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="flex flex-col md:flex-row min-h-[500px]">
                                    {/* IMAGE SECTION */}
                                    <div className="md:w-5/12 relative bg-[#111] overflow-hidden flex items-center justify-center p-8 group-hover:bg-[#151515] transition-colors">
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <span className="font-hero text-9xl text-white/5 select-none scale-150 transform">{activeTier.replace('t', '').replace('.5', '½')}</span>
                                        </div>

                                        <img
                                            src={currentSet.image}
                                            alt={currentSet.name}
                                            className="relative z-10 w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                                            onClick={() => setSelectedImage(currentSet.image)}
                                        />

                                        <div className="absolute bottom-4 left-4 z-20">
                                            <div className="flex items-center gap-2 text-stone-400 bg-black/90 px-3 py-1.5 rounded-full border border-white/10 text-xs shadow-xl backdrop-blur-sm">
                                                <LayoutGrid size={12} className="text-amber-500" />
                                                <span className="font-medium">Click to Enlarge</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* INFO SECTION */}
                                    <div className="md:w-7/12 p-8 md:p-10 relative z-10 flex flex-col justify-center bg-gradient-to-b from-white/5 to-transparent">
                                        <div className="border-b border-white/10 pb-6 mb-8">
                                            <h3 className="font-cinzel text-3xl md:text-4xl text-white mb-3 text-shadow-sm">{currentSet.name}</h3>
                                            <div className="flex flex-wrap items-center gap-3 text-sm">
                                                <span className={`px-2.5 py-1 rounded bg-amber-900/30 text-amber-500 border border-amber-500/30 font-medium tracking-wide`}>Legendary Battlegear</span>
                                                <span className="text-stone-600 hidden md:inline">•</span>
                                                <span className="text-stone-500">Requires Level 70</span>
                                                <span className="text-stone-600 hidden md:inline">•</span>
                                                <span className="text-stone-500">{currentClass.name} Only</span>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="bg-[#080808] p-6 rounded-xl border border-white/5 relative overflow-hidden shadow-inner">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50"></div>
                                                <div className="absolute top-0 right-0 p-12 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
                                                <div className="relative z-10 text-stone-300 leading-relaxed">
                                                    {formatText(currentSet.bonus)}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                                                    <span className="block text-xs text-stone-500 uppercase tracking-wider mb-1">Source</span>
                                                    <div className="flex items-center gap-2">
                                                        <Shield size={14} className="text-stone-600" />
                                                        <span className="text-stone-200 font-medium">{tiers.find(t => t.id === activeTier)?.sub || 'Raid Drop'}</span>
                                                    </div>
                                                </div>
                                                <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                                                    <span className="block text-xs text-stone-500 uppercase tracking-wider mb-1">Specialization</span>
                                                    <div className="flex items-center gap-2">
                                                        <Zap size={14} className="text-stone-600" />
                                                        <span className="text-stone-200 font-medium">{currentClass.specs[activeSpec].name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center p-32 text-stone-600 border border-dashed border-stone-800 rounded-xl bg-[#0a0a0a/50]">
                                <Clock size={48} className="mb-4 opacity-30" />
                                <h3 className="font-cinzel text-xl mb-2 text-stone-500">Data Unearthed Soon</h3>
                                <p className="text-sm text-stone-600">This artifact has not yet been chronicled.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* IMAGE ZOOM MODAL */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl max-h-[90vh] animate-fade-in">
                        <button
                            className="absolute top-4 right-4 text-white/50 hover:text-white bg-black/50 p-2 rounded-full"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full View"
                            className="w-full h-full object-contain max-h-[90vh] rounded-lg shadow-2xl border border-white/10"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TheArmory;
