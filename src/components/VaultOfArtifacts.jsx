import React, { useState, useEffect } from 'react';
import {
  Sword, Shield, Crosshair, Zap, Skull, Heart,
  Flame, Droplet, Star, Crown, Gem, ChevronRight,
  BookOpen, Medal, Play, Eye, ChevronDown, Ghost,
  Hammer, Feather, Scissors, Leaf, Axe, PawPrint
} from 'lucide-react';

const VaultOfArtifacts = () => {
  const [activeClass, setActiveClass] = useState('warrior');
  const [activeSpec, setActiveSpec] = useState('arms');
  const [relicPhase, setRelicPhase] = useState(0);

  // Helper function for bold text formatting
  const formatText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, lineIndex) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const content = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex} className="text-amber-400 font-cinzel tracking-wide">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      return (
        <React.Fragment key={lineIndex}>
          {content}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  // Reusable WoW Tooltip Component
  const WowTooltip = ({ item, phaseLabel }) => {
    const qualityColor = item.quality === 'legendary' ? 'text-[#ff8000]' : 'text-[#a335ee]';
    const borderColor = 'border-[#a3a3a3]';

    return (
      <div className={`bg-[#070710] border ${borderColor} rounded-[5px] p-2 shadow-2xl max-w-[350px] w-full font-sans text-[12px] leading-snug relative text-white`}>
        <div className="flex justify-between items-start mb-0.5">
          <h3 className={`font-bold text-[14px] ${qualityColor} flex-1 mr-2`}>
            {item.name}
          </h3>
          {phaseLabel && <span className="text-white text-[12px] whitespace-nowrap pt-0.5">{phaseLabel}</span>}
        </div>
        <div className="text-[#ffd100] mb-0.5">Item Level {item.ilvl}</div>
        <div className="mb-0.5">Binds when picked up</div>
        {item.unique && <div className="mb-0.5">Unique</div>}
        {item.slot && (
          <div className="flex justify-between mb-0.5">
            <span>{item.slot}</span>
            {item.type && <span>{item.type}</span>}
          </div>
        )}
        {item.damage && (
          <div className="flex justify-between mb-0.5">
            <span>{item.damage} Damage</span>
            <span>Speed {item.speed}</span>
          </div>
        )}
        {item.dps && <div className="mb-0.5">({item.dps} damage per second)</div>}
        {item.stats && item.stats.map((stat, i) => (
          <div key={i} className="mb-0.5">{stat}</div>
        ))}
        {item.classes && (
          <div className="mb-0.5">Classes: <span className="text-white">{item.classes}</span></div>
        )}
        <div className="mb-2">Requires Level 70</div>
        <div className="space-y-1">
          {item.effects && item.effects.map((effect, i) => {
            const isFlavor = effect.startsWith('"');
            const isUse = effect.startsWith('Use:');
            const isEquip = effect.startsWith('Equip:');
            const isChance = effect.startsWith('Chance on');

            if (isFlavor) return <div key={i} className="text-[#ffd100] mt-2 italic text-[11px] text-center">"{effect.replace(/"/g, '')}"</div>;

            if (isUse || isEquip || isChance) {
              const splitIdx = effect.indexOf(':');
              const label = effect.substring(0, splitIdx + 1);
              const val = effect.substring(splitIdx + 1);
              return (
                <div key={i} className="text-[#1eff00]">
                  <span className="font-normal text-white">{label}</span>{val}
                </div>
              )
            }
            return <div key={i} className="text-[#1eff00]">{effect}</div>;
          })}
        </div>
      </div>
    );
  };

  // --- PINNACLE QUEST DATA ---
  const pinnacleData = {
    warrior: {
      name: 'Warrior',
      icon: <Sword className="w-5 h-5" />,
      specs: {
        arms: {
          name: 'Arms',
          title: 'The Master of the Blade',
          desc: 'For the Arms warrior, the weapon is an extension of the soul. Your journey requires mastery of technique.',
          steps: [
            '**Phase 1 - A Test of Steel:** Khadgar sends you to a solo scenario in the Ring of Trials in Nagrand. Face three ethereal weaponsmasters who mimic player tactics.',
            '**Phase 2 - Sharpened by Fel Iron:** Gather Fel Iron Ore and forge a Whetstone to challenge an elite Bone-Gnasher in the Blade\'s Edge Mountains.',
            '**Phase 3 - The Unstoppable Force:** Use the Grip of the World-Breaker to calibrate a Fel Cannon in Shadowmoon Valley, using it to blast open a Legion gate.',
            '**Phase 4 - The Duelist\'s Soul:** Duel an echo of Grom Hellscream at the Throne of Kil\'jaeden. You must Bladestorm his adds and Mortal Strike his heals.'
          ],
          reward: {
            name: 'Sigil of the Blademaster',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+40 Strength'], effects: ['Equip: Your Mortal Strike has a 10% chance to make your next Slam instant.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+50 Strength'], effects: ['Equip: Your Mortal Strike has a 15% chance to make your next Slam instant.', 'Use: Instantly grants you 20 rage. (2 min cooldown)'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+60 Strength'], effects: ['Equip: Improves critical strike rating by 25.', 'Equip: Your Mortal Strike has a 20% chance to make your next Slam instant.', 'Use: Instantly grants you 30 rage. (2 min cooldown)'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', unique: true, stats: ['+75 Strength'], effects: ['Equip: Improves critical strike rating by 35.', 'Equip: Your Mortal Strike has a 25% chance to make your next Slam instant.', 'Equip: Your critical strikes with weapons have a chance to grant you "Decisive Moment", making your next Mortal Strike cost no rage and deal 20% additional damage.', '"A weapon is only as strong as the hand that wields it."'] }
            ]
          }
        },
        fury: {
          name: 'Fury',
          title: 'The Unrelenting Berserker',
          desc: 'Rage is not chaos; it is fuel. You must learn to burn without consuming yourself.',
          steps: [
            '**Phase 1 - The Endless Onslaught:** Survive 3 minutes in the Circle of Blood against infinite waves of ogres.',
            '**Phase 2 - Heart of the Rage:** Survive the "Burning Blood" effect at the Throne of Kil\'jaeden by dealing damage to heal yourself.',
            '**Phase 3 - The Eye of the Storm:** Survive a 2-minute onslaught of phase-shifting ethereals in Tempest Keep using Whirlwind to clear them.',
            '**Phase 4 - The Berserker\'s Zenith:** Face a manifestation of your own rage. Spend Rage frantically to weaken it before it explodes.'
          ],
          reward: {
            name: 'Sigil of the Unrelenting',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+40 Strength'], effects: ['Equip: Melee attacks have a chance to grant 15 AP for 10s (Stacks 5x).'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+50 Strength'], effects: ['Equip: Improves haste rating by 20.', 'Equip: Melee attacks have a chance to grant 20 AP for 10s (Stacks 5x).'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+60 Strength'], effects: ['Equip: Improves haste rating by 30.', 'Equip: Melee attacks have a chance to grant 25 AP for 10s (Stacks 10x).'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', unique: true, stats: ['+75 Strength'], effects: ['Equip: Improves haste rating by 40.', 'Equip: Melee attacks have a chance to grant 30 AP for 10s (Stacks 10x).', 'Equip: When you activate Death Wish or Recklessness, you gain 300 Armor Penetration for the duration.', '"Let the anger flow, but never let it rule you."'] }
            ]
          }
        },
        protection: {
          name: 'Protection',
          title: 'The Unbreakable Bulwark',
          desc: 'You are the shield that guards the realms of men. You do not falter.',
          steps: [
            '**Phase 1 - The Protector:** Protect a generic Mag\'har orphan from waves of ravagers using Taunt and Intervene.',
            '**Phase 2 - The Adamant Shield:** Reflect "Shatter" attacks from a Gronn-Lord\'s Chosen using Shield Block timings.',
            '**Phase 3 - Holding the Tide:** Tank "Mal\'ganis\'s Echo" for 90 seconds in Hyjal, managing defensive cooldowns.',
            '**Phase 4 - The Last Bastion:** Hold the line against 3 minutes of demons on Quel\'Danas without a healer.'
          ],
          reward: {
            name: 'Sigil of the Bulwark',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+45 Stamina'], effects: ['Equip: Increases the block value of your shield by 50.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+55 Stamina'], effects: ['Equip: Increases defense rating by 20.', 'Equip: Increases the block value of your shield by 70.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+65 Stamina'], effects: ['Equip: Increases defense rating by 30.', 'Equip: Increases the block value of your shield by 90.', 'Use: For the next 10 sec, blocking an attack generates 5 rage. (2 min cooldown)'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', unique: true, stats: ['+75 Stamina'], effects: ['Equip: Increases defense rating by 40.', 'Equip: Increases the block value of your shield by 110.', 'Equip: Blocking an attack has a chance to make your next Shield Slam a guaranteed critical strike.', 'Use: Resets the cooldown of your Shield Wall. (5 min cooldown)', '"I can do this all day."'] }
            ]
          }
        }
      }
    },
    paladin: {
      name: 'Paladin',
      icon: <Shield className="w-5 h-5" />,
      specs: {
        holy: {
          name: 'Holy',
          title: 'The Light\'s Mercy',
          desc: 'The Light burns the unworthy, but heals the faithful. Mastery lies in balancing these natures.',
          steps: [
            '**Phase 1 - Cleansing the Waters:** Cleanse the corrupted pools of Zangarmarsh while fending off Naga assault.',
            '**Phase 2 - The Broken Vindicator:** Heal a wounded draenei Vindicator at the Throne of the Elements before his soul is claimed by the void.',
            '**Phase 3 - Shadow and Light:** Survive the shadow damage pulses in the Crypts of Auchindoun while keeping a beacon lit.',
            '**Phase 4 - Redemption:** Redeem the soul of a fallen Exarch by healing him through his "Guilt" phase.'
          ],
          reward: {
            name: 'Libram of the Dawn',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases healing done by up to 45 and damage done by up to 15 for all magical spells and effects.', 'Equip: Holy Light grants 10 MP5 for 8s.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases healing done by up to 55 and damage done by up to 19 for all magical spells and effects.', 'Equip: Holy Light grants 15 MP5 for 8s.', 'Use: Next Flash of Light is instant.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases healing done by up to 65 and damage done by up to 22 for all magical spells and effects.', 'Equip: Holy Light grants 20 MP5 for 8s.', 'Use: Next Holy Shock has no cooldown (10s dur).'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases healing done by up to 80 and damage done by up to 27 for all magical spells and effects.', 'Equip: Holy Light grants 25 MP5.', 'Equip: Crits with Holy Light apply "Light\'s Grace", healing for 15% of amount over 9 sec.', 'Use: Divine Favor affects your next 3 spells.', '"The Light does not abandon its champions."'] }
            ]
          }
        },
        prot: {
          name: 'Protection',
          title: 'The Sacred Shield',
          desc: 'A shield of faith is stronger than steel. You must become the sanctuary.',
          steps: [
            '**Phase 1 - Shield of the Sha\'tar:** Defend the refugees in lower city Shattrath from an Arakkoa ambush.',
            '**Phase 2 - Iron Will:** Block the blows of a Fel Reaver Prototype in Netherstorm to test your mitigation.',
            '**Phase 3 - The Narrow Pass:** Hold the bridge at Karazhan alone against undead waves.',
            '**Phase 4 - Gaze of the Dragonkiller:** Withstand the gaze of Gruul by correctly timing Holy Shield and cooldowns.'
          ],
          reward: {
            name: 'Aegis of the Just',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+45 Stamina'], effects: ['Equip: Increases block rating by 20.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+55 Stamina'], effects: ['Equip: Increases block rating by 30.', 'Use: Consecration heals you for 50 per tick.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+65 Stamina'], effects: ['Equip: Increases damage and healing done by magical spells and effects by up to 25.', 'Equip: Increases block rating by 40.', 'Equip: Blocking reflects 50 Holy dmg.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+80 Stamina'], effects: ['Equip: Increases damage and healing done by magical spells and effects by up to 40.', 'Equip: Increases block rating by 50.', 'Equip: Avenger\'s Shield silences 2 extra targets and hits 5 targets total.', 'Use: Become immune to fear, polymorph, and stun effects for 10s.', '"Faith is my shield."'] }
            ]
          }
        },
        ret: {
          name: 'Retribution',
          title: 'The Hand of Justice',
          desc: 'Retribution is swift and final. You are the judge, jury, and executioner.',
          steps: [
            '**Phase 1 - The Purge:** Slay 50 demons in 5 minutes at the Legion Hold.',
            '**Phase 2 - The Mentor\'s Test:** Duel the shade of Uther the Lightbringer at his tomb.',
            '**Phase 3 - Breaking the Seal:** Use Crusader Strike to break the magical seals of a Legion portal.',
            '**Phase 4 - Judgment Day:** Defeat a Pit Lord using only Holy damage abilities to finish him.'
          ],
          reward: {
            name: 'Sigil of Judgment',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Strength'], effects: ['Equip: Crusader Strike deals 5% more dmg.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Strength'], effects: ['Equip: Improves critical strike rating by 20.', 'Equip: Crusader Strike deals 10% more dmg.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Strength'], effects: ['Equip: Improves critical strike rating by 30.', 'Equip: Crusader Strike grants 50 AP (stacking 3x).', 'Use: Avenging Wrath duration +5s.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Strength'], effects: ['Equip: Improves critical strike rating by 40.', 'Equip: Crusader Strike grants 75 AP (stacks up to 5 times).', 'Equip: Divine Storm hits 2 extra targets and heals for 20% of damage done.', 'Use: Hammer of Wrath usable at any HP % for 10s.', '"Justice demands retribution."'] }
            ]
          }
        }
      }
    },
    hunter: {
      name: 'Hunter',
      icon: <Crosshair className="w-5 h-5" />,
      specs: {
        bm: {
          name: 'Beast Mastery',
          title: 'The Pack Lord',
          desc: 'One heart, two bodies. You and your beast are a single predatory entity.',
          steps: [
            '**Phase 1 - The Alpha:** Prove your dominance by taming the Ghost Wolf of Nagrand (scenario only).',
            '**Phase 2 - Tracking the Fel:** Track the elusive Felstalker Matriarch through the Zangarmarsh swamps.',
            '**Phase 3 - The Arena of Beasts:** Survive the Ring of Blood with only your pet to tank for you.',
            '**Phase 4 - The Beastmaster:** Defeat the Legion\'s Houndmaster, controlling his pets with Scare Beast.'
          ],
          reward: {
            name: 'Talisman of the Alpha',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+30 Agility'], effects: ['Equip: Increases attack power by 40.', 'Equip: Pet damage increased by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+35 Agility'], effects: ['Equip: Increases attack power by 50.', 'Equip: Pet damage increased by 8%.', 'Use: Pet grows large, dealing 20% more damage for 15s.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Increases attack power by 60.', 'Equip: Improves hit rating by 20.', 'Equip: Pet damage increased by 10%.', 'Use: Bestial Wrath cooldown reduced by 30s.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+50 Agility'], effects: ['Equip: Increases attack power by 80.', 'Equip: Improves hit rating by 30.', 'Equip: Pet damage increased by 15%.', 'Equip: Kill Command has a 50% chance to reset the cooldown of Bestial Wrath.', '"We hunt as one."'] }
            ]
          }
        },
        mm: {
          name: 'Marksmanship',
          title: 'The Deadeye',
          desc: 'One shot, one kill. Patience is your weapon.',
          steps: [
            '**Phase 1 - Precision:** Hit 10 distinct targets in 10s at the archery range.',
            '**Phase 2 - The Long Shot:** Snipe the Eredar Warlock from 60 yards away without being detected.',
            '**Phase 3 - The Duel:** Duel the Ranger Captain in Silvermoon (simulation).',
            '**Phase 4 - Blind Shot:** Hit the weak point of a Void Walker while blinded.'
          ],
          reward: {
            name: 'Scope of the Void',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+20 Agility'], effects: ['Equip: Improves ranged critical strike rating by 20.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+25 Agility'], effects: ['Equip: Improves ranged critical strike rating by 30.', 'Use: Multi-Shot hits 1 extra target.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+30 Agility'], effects: ['Equip: Increases attack power by 20.', 'Equip: Improves ranged critical strike rating by 40.', 'Use: Next Aimed Shot is instant cast.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Increases attack power by 40.', 'Equip: Improves ranged critical strike rating by 50.', 'Equip: Steady Shot has a 15% chance to fire a second shot instantly.', '"Never miss."'] }
            ]
          }
        },
        surv: {
          name: 'Survival',
          title: 'The Trapper',
          desc: 'Explosives, traps, venom. You win before the fight begins.',
          steps: [
            '**Phase 1 - The Minefield:** Navigate the goblin minefield in Area 52 using Disengage.',
            '**Phase 2 - The Invisible Stalker:** Trap an invisible Panthara using Flares and Freezing Traps.',
            '**Phase 3 - Ambush:** Survive a Rogue ambush by kiting through your own traps.',
            '**Phase 4 - The Master Assassin:** Defeat the leader of the Syndicate using only instants and traps.'
          ],
          reward: {
            name: 'Kit of the Wilds',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+20 Agility'], effects: ['Equip: Trap duration increased by 2s.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+25 Agility'], effects: ['Equip: Trap duration increased by 3s.', 'Use: Launch a Frost Trap at a target location.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+30 Agility', '+20 Stamina'], effects: ['Equip: Trap cooldowns reduced by 4s.', 'Use: Wyvern Sting is now instant cast.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+40 Agility', '+30 Stamina'], effects: ['Equip: Explosive Shot deals 30% splash damage to nearby targets.', 'Equip: Expose Weakness now affects the entire raid.', '"Watch your step."'] }
            ]
          }
        }
      }
    },
    rogue: {
      name: 'Rogue',
      icon: <Skull className="w-5 h-5" />,
      specs: {
        ass: {
          name: 'Assassination',
          title: 'The Poisoner',
          desc: 'A whisper in the dark, a knife in the ribs. Lethality is an art.',
          steps: [
            '**Phase 1 - Rare Venoms:** Collect venom sacs from the spiders of Terokkar Forest.',
            '**Phase 2 - The Lab Infiltration:** Infiltrate the Shadow Council alchemy lab without breaking stealth.',
            '**Phase 3 - Tainted Supply:** Poison the Legion\'s water supply in Shadowmoon Valley.',
            '**Phase 4 - The Perfect Kill:** Assassinate a Felguard Captain without alerting his guards.'
          ],
          reward: {
            name: 'Vial of Black Blood',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+30 Agility'], effects: ['Equip: Increases attack power by 40.', 'Equip: Poisons deal +5% dmg.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+35 Agility'], effects: ['Equip: Increases attack power by 50.', 'Equip: Poisons deal +10% dmg.', 'Use: Apply Deadly Poison to target.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Increases attack power by 60.', 'Equip: Poisons deal +15% dmg.', 'Use: Envenom costs no combo points.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+50 Agility'], effects: ['Equip: Increases attack power by 80.', 'Equip: Your poisons have a chance to critically strike.', 'Use: Instantly apply 5 stacks of Deadly Poison to your target.', '"A slow death is a cruel mercy."'] }
            ]
          }
        },
        combat: {
          name: 'Combat',
          title: 'The Duelist',
          desc: 'Face your enemy steel to steel. No hiding, just skill.',
          steps: [
            '**Phase 1 - The Arena:** Win 3 consecutive duels in the Ring of Blood.',
            '**Phase 2 - Disarm:** Disarm 10 traps in the Mana Tombs while under fire.',
            '**Phase 3 - The Blademaster:** Defeat a burning blade master in a pure melee duel (no vanishing).',
            '**Phase 4 - 100 Parries:** Successfully parry 100 attacks within a time limit.'
          ],
          reward: {
            name: 'Mark of the Fencer',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+20 Agility'], effects: ['Equip: Increases attack power by 40.', 'Equip: Sinister Strike +5% dmg.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+25 Agility'], effects: ['Equip: Increases attack power by 50.', 'Equip: Sinister Strike +10% dmg.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+30 Agility'], effects: ['Equip: Increases attack power by 60.', 'Equip: Blade Flurry hits 1 extra target.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Increases attack power by 80.', 'Equip: Your offhand attacks have a chance to proc a main-hand attack.', 'Use: Increases Adrenaline Rush duration by 5s.', '"En garde!"'] }
            ]
          }
        },
        sub: {
          name: 'Subtlety',
          title: 'The Shadow',
          desc: 'You are nowhere and everywhere. A phantom of death.',
          steps: [
            '**Phase 1 - Ghost Walk:** Move through the ruins of Auchindoun unseen by truesight guards.',
            '**Phase 2 - The Key:** Pickpocket the master key from the Nexus-Prince.',
            '**Phase 3 - Ambush:** Ambush a warlock while he is summoning a demon.',
            '**Phase 4 - Vanish:** Vanish from the sight of a Fel Reaver and survive.'
          ],
          reward: {
            name: 'Cloak of the Unseen',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+20 Agility'], effects: ['Equip: Stealth level effectively increased by 5.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+25 Agility'], effects: ['Equip: Stealth level effectively increased by 10.', 'Use: Vanish cooldown reduced by 30s.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+30 Agility'], effects: ['Equip: Stealth level effectively increased by 15.', 'Equip: Ambush crit chance +10%.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Backstab ignores 100% of armor on targets below 35% health.', 'Use: Shadowstep has no cooldown for 10s.', '"Did you hear something?"'] }
            ]
          }
        }
      }
    },
    priest: {
      name: 'Priest',
      icon: <Ghost className="w-5 h-5" />,
      specs: {
        disc: {
          name: 'Discipline',
          title: 'The Shield of the Soul',
          desc: 'Willpower is stronger than steel. To protect others, you must first master your own mind.',
          steps: [
            '**Phase 1 - The Unbreaking Will:** Maintain a barrier around a meditating Farseer in Nagrand while under constant bombardment from Voidwalkers.',
            '**Phase 2 - The Penitent:** Convert a corrupted Scarlet Crusader in Tyr\'s Hand not by force, but by surviving their onslaught until they run out of mana.',
            '**Phase 3 - Power Word: Barrier:** Defend a breach in the Exodar\'s hull, rotating cooldowns to mitigate massive environmental damage waves.',
            '**Phase 4 - The Ascendant:** Reflect the shadow magic of a Void Lord back at him using perfectly timed absorbs and reflections.'
          ],
          reward: {
            name: 'Codex of Discipline',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases healing done by up to 45 and damage done by up to 15.', 'Equip: Power Word: Shield absorbs 150 more damage.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Power Word: Shield absorbs 250 more damage.', 'Use: Your next Penance channels 30% faster.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Power Word: Shield absorbs 400 more damage.', 'Equip: Reduces the weakened soul effect duration by 2 sec.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Power Word: Shield absorbs 600 more damage.', 'Equip: Pain Suppression applies to your entire party at 50% effectiveness.', 'Use: Create a Power Word: Barrier at your location reducing damage taken by 25% for all allies inside. (3 min cooldown)', '"The mind is the only fortress that matters."'] }
            ]
          }
        },
        holy: {
          name: 'Holy',
          title: 'The Beacon of Light',
          desc: 'You are a conduit of the Light\'s purest grace. Where there is death, you bring rebirth.',
          steps: [
            '**Phase 1 - The Leper\'s Comfort:** Heal a group of irradiated gnomes in Gnomeregan\'s depths, cleansing their stacks of undefined radiation.',
            '**Phase 2 - The Purge:** Cleanse a plague cauldron in the Western Plaguelands while keeping the defending Argent Dawn soldiers alive.',
            '**Phase 3 - The Spirit of Redemption:** Sacrifice yourself (spirit form) to heal a raid through an otherwise fatal explosion in Auchindoun.',
            '**Phase 4 - The Miracle:** Channel a massive resurrection spell in the Black Temple to raise the spirits of the fallen Illidari for one final charge.'
          ],
          reward: {
            name: 'Sigil of Serenity',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases healing done by up to 45.', 'Equip: Renew heals for 10% more.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases healing done by up to 55.', 'Equip: Circle of Healing heals 1 extra target.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases healing done by up to 65.', 'Equip: Your Spirit of Redemption duration is increased by 10 sec.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases healing done by up to 80.', 'Equip: Circle of Healing has no cooldown.', 'Use: Places a Guardian Spirit on a target, preventing death and increasing healing received by 40% for 10s. (3 min cooldown)', '"Light, grant me one final miracle."'] }
            ]
          }
        },
        shadow: {
          name: 'Shadow',
          title: 'The Void Cultist',
          desc: 'To defeat the darkness, you must understand it. You walk the line between genius and insanity.',
          steps: [
            '**Phase 1 - Embrace the Madness:** Meditate at the Altar of Shadows in Shadowmoon Valley until your sanity meter nearly depletes, then stabilize it.',
            '**Phase 2 - Mind Games:** Use Mind Control to force elite mobs in the Arcatraz to fight each other, managing diminishing returns.',
            '**Phase 3 - Soul Harvest:** Drain the souls of 50 demons in the Legion Hold without moving, using fear and shields to survive.',
            '**Phase 4 - Avatar of the Void:** Assume Shadowform and maintain it permanently during a boss fight where holy damage is constant.'
          ],
          reward: {
            name: 'Orb of Madness',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 35.', 'Equip: Shadow Bolt casts 0.1s faster.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 45.', 'Use: Reset the cooldown of your Shadow Word: Death.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 55.', 'Equip: Vampiric Touch restores 2% more mana per tick.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 70.', 'Equip: Mind Flay has a chance to stun the target for 1s (Insanity).', 'Use: Disperse into pure void energy, taking 90% less damage and regenerating 50% mana over 6s. You can cast while dispersed. (5 min cooldown)', '"The void does not consume mere shadows."'] }
            ]
          }
        }
      }
    },
    shaman: {
      name: 'Shaman',
      icon: <Zap className="w-5 h-5" />,
      specs: {
        ele: {
          name: 'Elemental',
          title: 'The Storm Caller',
          desc: 'The elements respond to your call. You are the lightning rod.',
          steps: [
            '**Phase 1 - Eye of the Storm:** Stand at the peak of the Throne of the Elements and channel a lightning storm, destroying targets called out by the spirits.',
            '**Phase 2 - Ride the Lightning:** A scenario where you must use Ghost Wolf and travel instantaneously between lightning rods to generate charge.',
            '**Phase 3 - Earth Shock:** Interrupt a caster boss 10 times in a row. Missing one reset the encounter.',
            '**Phase 4 - Elemental Overload:** Survive a phase where you have infinite mana but take 300% increased damage. Kill the boss before he kills you.'
          ],
          reward: {
            name: 'Totem of the Sky',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 35.', 'Equip: Lightning Bolt damage increased by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 45.', 'Use: Free casting for 6 sec.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 55.', 'Equip: Lightning Bolt has a 10% chance to cast a second bolt instantly.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 70.', 'Equip: Your Elemental Overload chance is doubled.', 'Equip: Chain Lightning has no cooldown.', '"I am the thunder."'] }
            ]
          }
        },
        enh: {
          name: 'Enhancement',
          title: 'The Storm Hammer',
          desc: 'Earth and air fused into kinetic destruction. Strike as one with the elements.',
          steps: [
            '**Phase 1 - Forging the Hammer:** Collect Fel Iron and Elementium to re-forge Doomhammer\'s handle in the Hellfire Citadel forge.',
            '**Phase 2 - Windfury Mastery:** Maintain a flurry of attacks on a training dummy, keeping Windfury active for 60 seconds straight.',
            '**Phase 3 - Spirit Walk:** Navigate the Spirit World (Nagrand) with your Feral Spirits, solving riddles given by wolf ancestors.',
            '**Phase 4 - The Earthbreaker:** Tank an elite Gronn using Shamanistic Rage and Earth Shock to hold threat and survive.'
          ],
          reward: {
            name: 'Totem of the Earth',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Agility'], effects: ['Equip: Increases attack power by 40.', 'Equip: Windfury Weapon attack power bonus increased by 50.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Agility'], effects: ['Equip: Increases attack power by 50.', 'Use: Instantly grants 3 charges of Maelstrom Weapon.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Agility'], effects: ['Equip: Increases attack power by 60.', 'Equip: Stormstrike increases Nature damage dealt by 25%.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Agility'], effects: ['Equip: Increases attack power by 80.', 'Equip: Windfury attacks hit 2 extra targets with chain lightning.', 'Use: Summon Feral Spirits permanently (they persist until death).', '"The earth trembles."'] }
            ]
          }
        },
        resto: {
          name: 'Restoration',
          title: 'The Tidecaller',
          desc: 'Water is life. You control the ebb and flow of existence.',
          steps: [
            '**Phase 1 - Call of Rain:** Summon a rainstorm in the Blade\'s Edge Mountains to extinguish a Legion fire spreading near a village.',
            '**Phase 2 - Purification:** Cleanse the corrupted waters of Coilfang Reservoir by channeling into the pumps while defending against Naga.',
            '**Phase 3 - Tidal Wave:** Heal a raid through a "Tidal Wave" boss mechanic where moving resets your cast bars. Stutter stepping is key.',
            '**Phase 4 - The Lifebinder:** Link your spirit to the World Tree in Mount Hyjal, sharing health with it to prevent its destruction.'
          ],
          reward: {
            name: 'Totem of the Tide',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases healing done by up to 45.', 'Equip: Chain Heal jumps to 1 extra target.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases healing done by up to 55.', 'Use: Your next Healing Wave is instant.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases healing done by up to 65.', 'Equip: Earth Shield has 3 extra charges.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases healing done by up to 80.', 'Equip: Chain Heal has no target limit (diminishes after 5 targets).', 'Use: Summon a Mana Tide Totem that restores 20% mana to party over 10s. (3 min cooldown)', '"Water washes away all pain."'] }
            ]
          }
        }
      }
    },
    mage: {
      name: 'Mage',
      icon: <Flame className="w-5 h-5" />,
      specs: {
        arcane: {
          name: 'Arcane',
          title: 'The Archmage',
          desc: 'Arcane is the fabric of the universe. You tug at the threads of reality.',
          steps: [
            '**Phase 1 - The Violet Library:** Decipher the Archmage\'s scrolls in Karazhan within a time limit to learn the "Greater Arcane Blast" spell.',
            '**Phase 2 - Ley Line Mastery:** Stand on ley line nexuses in Netherstorm, soaking energy while managing a mana addiction meter.',
            '**Phase 3 - The Conservationist:** Defeat a boss with 10 million HP without ever dropping below 80% mana.',
            '**Phase 4 - The Duel:** Defeat a mirror image of yourself that uses all your cooldowns against you.'
          ],
          reward: {
            name: 'Crystal of the Ley',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 35.', 'Equip: Arcane Blast mana cost reduced by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 45.', 'Use: Recover 1500 mana immediately.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 55.', 'Equip: Arcane Missiles has a 100% chance to not consume mana (Clearcasting).'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 70.', 'Equip: Arcane Blast stacks up to 8 times.', 'Use: Presence of Mind becomes passive for 15 sec. (3 min cooldown)', '"Reality is mine to shape."'] }
            ]
          }
        },
        fire: {
          name: 'Fire',
          title: 'The Pyromancer',
          desc: 'Some just want to watch the world burn. You are the spark.',
          steps: [
            '**Phase 1 - The Eternal Flame:** Carry a sacred flame from Blackrock Mountain to the Dark Portal without letting it extinguish.',
            '**Phase 2 - Feeding the Fire:** Deal critical strikes to a fire elemental to make it grow larger, then kite it into a frozen door to melt it.',
            '**Phase 3 - Hot Streak:** Maintain a "Hot Streak" buff for 60 seconds by critically striking targets repeatedly.',
            '**Phase 4 - Living Bomb:** You become the bomb. Run into the center of a Legion army and detonate, dealing damage equal to your remaining mana.'
          ],
          reward: {
            name: 'Ember of Ragnaros',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 35.', 'Equip: Ignite damage increased by 10%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 45.', 'Use: Next Pyroblast is instant.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 55.', 'Equip: Fireball leaves a patch of flame dealing AoE damage.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 70.', 'Equip: Your spells apply "Living Bomb" automatically on crits.', 'Use: Summon a Meteor at target location. (2 min cooldown)', '"By fire be purged!"'] }
            ]
          }
        },
        frost: {
          name: 'Frost',
          title: 'The Frostlord',
          desc: 'Cold, calculating, and inevitable. You are the winter storm.',
          steps: [
            '**Phase 1 - The Crossing:** Freeze the waters of the Deadwind Pass to allow refugees to cross while you hold off ghosts.',
            '**Phase 2 - Shatter:** Execute a "Shatter" combo on 50 frozen targets in under 2 minutes.',
            '**Phase 3 - Blizzard Control:** Kite an elite Giant around a localized Blizzard for 3 minutes without getting hit once.',
            '**Phase 4 - The Lich:** Ascend to a temporary Lich form and dominate the wills of undead minions to serve you.'
          ],
          reward: {
            name: 'Shard of the Deep',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 35.', 'Equip: Frostbolt slows target by 50%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 45.', 'Use: Reset cooldown of Icy Veins.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 55.', 'Equip: Fingers of Frost proc chance doubled.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 70.', 'Equip: Your Water Elemental becomes a Permanent Greater Water Elemental with new spells.', 'Equip: Frostbolt has a chance to freeze the target solid (stun).', '"Winter is here."'] }
            ]
          }
        }
      }
    },
    warlock: {
      name: 'Warlock',
      icon: <Skull className="w-5 h-5" />,
      specs: {
        aff: {
          name: 'Affliction',
          title: 'The Soul Reaper',
          desc: 'Agony, corruption, unstable magic. You slowly unravel the soul.',
          steps: [
            '**Phase 1 - Cursed Earth:** Spread corruption across the farmlands of Shadowmoon, wilting plans to uncover hidden demons.',
            '**Phase 2 - Drain Life:** Survive a gauntlet of damage solely using Drain Life and Siphon Life efficiently.',
            '**Phase 3 - The Plaguebringer:** Infect a raid dummy with every DoT possible and maintain them for 5 minutes perfectly.',
            '**Phase 4 - Soul Harvest:** Use "Soul Shatter" to instantly kill a boss at 1% health, trapping its soul in your shard.'
          ],
          reward: {
            name: 'Skull of Corruption',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 35.', 'Equip: Corruption ticks 10% faster.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 45.', 'Use: Instantly apply Corruption to all enemies within 30 yds.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 55.', 'Equip: Unstable Affliction dispel backlash damage doubled.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 70.', 'Equip: Your DoTs can effectively deal critical damage (150%).', 'Equip: Drain Soul executes targets below 25% health.', '"Their souls are mine."'] }
            ]
          }
        },
        demo: {
          name: 'Demonology',
          title: 'The Demon Commander',
          desc: 'You do not serve the Legion. The Legion serves you.',
          steps: [
            '**Phase 1 - The Summoning:** Perform a ritual to summon a Pit Lord, pressing the correct runes in sequence.',
            '**Phase 2 - My Life for Yours:** Use Health Funnel to keep your Felguard alive against a raid boss for 2 minutes.',
            '**Phase 3 - Metamorphosis:** While in Demon Form, defeat a paladin champion using only demon abilities.',
            '**Phase 4 - The Master:** Command three demons simultaneously (Imp, Voidwalker, Succubus) to solve a puzzle in the Black Temple.'
          ],
          reward: {
            name: 'Bond of the Fel',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 35.', 'Equip: Pet Stamina and Intellect +10%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 45.', 'Use: Sacrifice your pet to gain a shield equal to its max HP.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 55.', 'Equip: Hand of Gul\'dan summons 3 wild imps.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 70.', 'Equip: Metamorphosis is now a permanent toggle (reduced effectiveness, full effectiveness on cooldown).', 'Equip: Your Felguard wields a copy of your main hand weapon.', '"I am the legion."'] }
            ]
          }
        },
        destro: {
          name: 'Destruction',
          title: 'The Chaos Bringer',
          desc: 'Fel fire burns hotter than any natural flame. Unleash chaos.',
          steps: [
            '**Phase 1 - Shadowfury:** Stun 5 charging Fel Orcs instantly with a perfectly timed Shadowfury.',
            '**Phase 2 - Incinerate:** Maintain the "Backdraft" buff for 10 spellcasts in a row.',
            '**Phase 3 - Chaos Bolt:** Cast Chaos Bolt through a magical barrier that reflects all other spells.',
            '**Phase 4 - Cataclysm:** Channel a spell that destroys the terrain of the arena, forcing you to fight on floating debris.'
          ],
          reward: {
            name: 'Eye of the Legion',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 35.', 'Equip: Shadow Bolt critical strike damage bonus increased by 10%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 45.', 'Use: Next Chaos Bolt costs 0 shards and is instant.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 55.', 'Equip: Conflagrate consumes the Immolate effect but refreshes its duration instead of removing it.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 70.', 'Equip: Chaos Bolt penetrates all absorption effects and invulnerabilities.', 'Equip: Rain of Fire deals 100% more damage and stuns targets.', '"Burn it all."'] }
            ]
          }
        }
      }
    },
    druid: {
      name: 'Druid',
      icon: <Leaf className="w-5 h-5" />,
      specs: {
        balance: {
          name: 'Balance',
          title: 'The Starseer',
          desc: 'The moon and the stars are your guides. Maintain the balance of nature.',
          steps: [
            '**Phase 1 - Moonfire:** Use Moonfire to destroy corruption spores in Zangarmarsh before they touch the ground.',
            '**Phase 2 - Eclipse:** Alternate between Nature and Arcane spells perfectly to maintain a high-energy Eclipse state for 2 minutes.',
            '**Phase 3 - Starfall:** Call down stars to blindly hit invisible stalkers in the Violet Hold.',
            '**Phase 4 - Malorne\'s Antler:** Channel the power of the White Stag to banish Archimonde\'s echo from Hyjal.'
          ],
          reward: {
            name: 'Idol of the Moon',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 35.', 'Equip: Moonfire duration increased by 3s.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 45.', 'Use: Starfall cooldown reduced by 30s.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 55.', 'Equip: Wrath casts 0.2s faster.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases damage done by magical spells and effects by up to 70.', 'Equip: Starfall hits all enemies in combat (no range limit).', 'Equip: Starsurge instant cast chance increased to 20%.', '"The stars favor the patient."'] }
            ]
          }
        },
        feral: {
          name: 'Feral',
          title: 'The Apex Predator',
          desc: 'Nature is red in tooth and claw. You are the king of the jungle.',
          steps: [
            '**Phase 1 - The Stalk:** Stalk a Clefthoof Matriarch in Nagrand for 10 minutes without being seen, staying downwind.',
            '**Phase 2 - Bear Form:** Tank a mounting number of ogres in the Ring of Blood, using swipe and maul to hold threat.',
            '**Phase 3 - Shred:** Position yourself constantly behind a spinning construct boss to land Shred attacks.',
            '**Phase 4 - Primal Rage:** Defeat Goldrinn\'s avatar in a test of pure DPS brutality.'
          ],
          reward: {
            name: 'Idol of the Claw',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+30 Agility'], effects: ['Equip: Increases attack power by 40.', 'Equip: Energy regen increased by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+35 Agility'], effects: ['Equip: Increases attack power by 50.', 'Use: Instantly restore 60 energy.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Increases attack power by 60.', 'Equip: Bleed damage increased by 20%.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+50 Agility'], effects: ['Equip: Increases attack power by 80.', 'Equip: Mangle cooldown removed.', 'Use: Berserk now persists through shapeshifting (Bear/Cat).', '"Fang and claw."'] }
            ]
          }
        },
        resto: {
          name: 'Restoration',
          title: 'The World Tree\'s Tender',
          desc: 'Growth, rebirth, serenity. You are the roots that hold the world together.',
          steps: [
            '**Phase 1 - Regrowth:** Heal a burning ancient in Felwood, countering the fire damage with HoTs.',
            '**Phase 2 - Swiftmend:** React to random spikes of damage on 5 NPCs instantly using Swiftmend.',
            '**Phase 3 - Tree of Life:** Remain in Tree Form for an entire dungeon run, managing the movement speed penalty.',
            '**Phase 4 - Tranquility:** Channel Tranquility to silence a battlefield, preventing all fighting for 10 seconds.'
          ],
          reward: {
            name: 'Idol of the Grove',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases healing done by up to 45.', 'Equip: Rejuvenation mana cost reduced by 10%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases healing done by up to 55.', 'Use: Make your next Regrowth instant.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases healing done by up to 65.', 'Equip: Lifebloom blooms for 50% more.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Equip: Increases healing done by up to 80.', 'Equip: Rejuvenation automatically jumps to a nearby injured target when it expires.', 'Use: Tranquility is instant cast and makes you immune to damage while channeling. (5 min cooldown)', '"Life finds a way."'] }
            ]
          }
        }
      }
    }
  };

  // Safe state management
  useEffect(() => {
    if (pinnacleData[activeClass] && !pinnacleData[activeClass].specs[activeSpec]) {
      setActiveSpec(Object.keys(pinnacleData[activeClass].specs)[0]);
    }
  }, [activeClass]);

  const activeClassData = pinnacleData[activeClass];
  const activeSpecData = activeClassData?.specs[activeSpec] || activeClassData?.specs[Object.keys(activeClassData.specs)[0]];
  const activeRelicData = activeSpecData?.reward;
  const currentRelicPhase = activeRelicData?.phases[relicPhase];

  if (!activeSpecData) return null; // Loading or transition state

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-200 font-sans selection:bg-amber-900 selection:text-amber-100 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .obsidian-texture {
          background-color: #111;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23222' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      {/* --- HEADER --- */}
      <header className="py-10 border-b border-amber-900/50 bg-[#050505] sticky top-20 z-50 shadow-2xl">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-900/20 border border-amber-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <Gem className="text-amber-500 w-6 h-6" />
            </div>
            <div>
              <h1 className="font-cinzel text-3xl text-amber-500 tracking-[0.15em] drop-shadow-md">PINNACLE QUESTS</h1>
              <p className="text-xs text-stone-500 font-body tracking-[0.3em] uppercase">The Path of the Master</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 min-h-screen">
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <p className="font-body text-stone-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Undertake a class-specific <strong className="text-amber-500">Pinnacle Quest</strong> to unlock a Soul-Sigil.
              This relic evolves with you, growing from a simple trinket into a legendary artifact of immense power.
            </p>
          </div>

          {/* Class Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(pinnacleData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => { setActiveClass(key); }}
                className={`flex items-center gap-2 px-6 py-3 rounded border transition-all ${activeClass === key
                  ? `bg-amber-900/20 border-amber-600 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]`
                  : 'bg-[#151515] border-stone-800 text-stone-500 hover:border-stone-600'
                  }`}
              >
                {data.icon} <span className="font-cinzel text-sm tracking-wide uppercase">{data.name}</span>
              </button>
            ))}
          </div>

          {/* Spec Selector */}
          <div className="flex justify-center gap-8 mb-16 border-b border-stone-800 pb-8">
            {Object.entries(pinnacleData[activeClass].specs).map(([key, spec]) => (
              <button
                key={key}
                onClick={() => setActiveSpec(key)}
                className={`text-sm font-cinzel tracking-widest uppercase transition-colors pb-2 border-b-2 ${activeSpec === key ? 'text-white border-amber-500' : 'text-stone-600 border-transparent hover:text-stone-400'
                  }`}
              >
                {spec.name}
              </button>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* LEFT: Questline */}
            <div className="lg:col-span-7">
              <div className="bg-[#111] border border-stone-800 p-8 rounded-lg obsidian-texture">
                <h3 className="font-cinzel text-3xl text-amber-500 mb-2">{activeSpecData.title}</h3>
                <p className="font-body text-stone-400 mb-8 italic leading-relaxed border-l-2 border-amber-900/50 pl-4">
                  {activeSpecData.desc}
                </p>

                <div className="space-y-6">
                  {activeSpecData.steps.map((step, i) => (
                    <div key={i} className="relative pl-8 pb-6 border-l border-stone-800 last:border-0 last:pb-0">
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0c0a09] border border-amber-700 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="font-body text-stone-300 text-sm leading-relaxed">
                        {formatText(step)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Reward Tooltip */}
            <div className="lg:col-span-5">
              <div className="sticky top-52">
                <div className="flex justify-between items-end mb-4">
                  <h4 className="font-cinzel text-stone-500 text-xs uppercase tracking-widest">Reward Preview</h4>

                  {/* Phase Toggle */}
                  <div className="flex bg-black border border-stone-800 rounded p-1">
                    {activeRelicData.phases.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setRelicPhase(i)}
                        className={`px-3 py-1 text-[10px] font-cinzel font-bold transition-colors rounded ${relicPhase === i
                          ? 'bg-amber-900/40 text-amber-400'
                          : 'text-stone-600 hover:text-stone-400'
                          }`}
                      >
                        PHASE {i + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* WOW TOOLTIP PINNACLE */}
                <div className="flex justify-center">
                  <WowTooltip
                    item={{
                      name: activeRelicData.name,
                      ilvl: currentRelicPhase.ilvl,
                      quality: currentRelicPhase.quality,
                      unique: true,
                      slot: 'Trinket',
                      stats: currentRelicPhase.stats,
                      effects: [...currentRelicPhase.effects, ...(currentRelicPhase.use ? currentRelicPhase.use : [])]
                    }}
                    phaseLabel={`Phase ${relicPhase + 1}`}
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultOfArtifacts;