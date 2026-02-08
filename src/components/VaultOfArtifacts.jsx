import React, { useState, useEffect } from 'react';
import {
  Sword, Shield, Crosshair, Zap, Skull, Heart,
  Flame, Droplet, Star, Crown, Gem, ChevronRight,
  BookOpen, Medal, Play, Eye, ChevronDown, Ghost,
  Hammer, Feather, Scissors, Leaf, Axe, PawPrint,
  Trophy, RotateCcw, ZoomIn, Info
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';
import WowTooltip from './WowTooltip';

const VaultOfArtifacts = () => {
  // Tab state removed

  const [activeClass, setActiveClass] = useState('warrior');
  const [activeSpec, setActiveSpec] = useState('arms');
  const [relicPhase, setRelicPhase] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});

  // STATE: Model Viewer (Vault #2)
  const [inspecting, setInspecting] = useState(null);
  const [rotation, setRotation] = useState(0);

  const toggleStep = (stepIndex) => {
    const key = `${activeClass}-${activeSpec}-${stepIndex}`;
    setCompletedSteps(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const classColorsHash = {
    'warrior': '#C79C6E', 'paladin': '#F58CBA', 'hunter': '#ABD473',
    'rogue': '#FFF569', 'priest': '#FFFFFF', 'shaman': '#0070DE',
    'mage': '#40C7EB', 'warlock': '#8787ED', 'druid': '#FF7D0A'
  };

  const formatText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, lineIndex) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const content = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex} className="text-amber-400 font-hero tracking-wide">{part.slice(2, -2)}</strong>;
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

  // --- PINNACLE QUEST DATA ---
  const pinnacleData = {
    warrior: {
      name: 'Warrior',
      icon: <img src="https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad" className="w-5 h-5 object-contain" alt="Warrior" />,
      specs: {
        arms: {
          name: 'Arms',
          icon: 'https://i.imgur.com/tgSiYFd.png',
          title: 'The Blademaster',
          desc: 'For the Arms warrior, the weapon is an extension of the soul. Your journey requires mastery of technique.',
          steps: [
            '**Phase 1 - A Test of Steel:** Khadgar sends you to a solo scenario in the Ring of Trials. Face three ethereal weaponsmasters who mimic player tactics perfectly.',
            '**Phase 2 - Sharpened by Fel Iron:** Gather Fel Iron Ore and forge a Whetstone to challenge an elite Bone-Gnasher in the *Fissure of Souls*.',
            '**Phase 3 - The Unstoppable Force:** Use the "Grip of the World-Breaker" to calibrate a Fel Cannon in Shadowmoon Valley, using it to blast open a Legion gate.',
            '**Phase 4 - The Duelist\'s Soul:** Duel a "Time-Lost Echo of Grom Hellscream" at the Throne of Kil\'jaeden. You must "Bladestorm" his adds and "Mortal Strike" his heals.'
          ],
          reward: {
            name: 'Sigil of the Blademaster',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+40 Strength'], effects: ['Equip: Your Mortal Strike has a 10% chance to make your next Slam instant.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+50 Strength'], effects: ['Equip: Your Mortal Strike has a 15% chance to make your next Slam instant.', 'Use: Instantly grants you 20 rage. (2 min cooldown)'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+60 Strength'], effects: ['Equip: Improves critical strike rating by 25 (1.13% @ L70).', 'Equip: Your Mortal Strike has a 20% chance to make your next Slam instant.', 'Use: Instantly grants you 30 rage. (2 min cooldown)'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', unique: true, stats: ['+75 Strength'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Improves critical strike rating by 35 (1.58% @ L70).', 'Equip: Your Mortal Strike has a 25% chance to make your next Slam instant.', 'Equip: Your critical strikes with weapons have a chance to grant you "Decisive Moment", making your next Mortal Strike cost no rage and deal 20% additional damage.', '"A weapon is only as strong as the hand that wields it."'] }
            ]
          }
        },
        fury: {
          name: 'Fury',
          icon: 'https://i.imgur.com/wJbmNeR.png',
          title: 'The Berserker',
          desc: 'Rage is not chaos; it is fuel. You must learn to burn without consuming yourself.',
          steps: [
            '**Phase 1 - The Endless Onslaught:** Survive 3 minutes in the *Fissure of Souls* blood pit against infinite waves of demons.',
            '**Phase 2 - Heart of the Rage:** Survive the "Burning Blood" effect at the Throne of Kil\'jaeden by dealing damage to heal yourself.',
            '**Phase 3 - The Eye of the Storm:** Navigate a gauntlet of moving tornados in the *Iron Soul* dungeon using Intercept and Whirlwind.',
            '**Phase 4 - The Berserker\'s Zenith:** Face a manifestation of your own rage. Spend Rage frantically to weaken it before it explodes.'
          ],
          reward: {
            name: 'Sigil of the Unrelenting',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+40 Strength'], effects: ['Equip: Melee attacks have a chance to grant 15 AP for 10s (Stacks 5x).'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+50 Strength'], effects: ['Equip: Improves haste rating by 20 (1.27% @ L70).', 'Equip: Melee attacks have a chance to grant 20 AP for 10s (Stacks 5x).'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', unique: true, stats: ['+60 Strength'], effects: ['Equip: Improves haste rating by 30 (1.90% @ L70).', 'Equip: Melee attacks have a chance to grant 25 AP for 10s (Stacks 10x).'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', unique: true, stats: ['+75 Strength'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Improves haste rating by 40 (2.53% @ L70).', 'Equip: Improves proficiency rating by 20 (Expertise).', 'Equip: Melee attacks have a chance to grant 30 AP for 10s (Stacks 10x).', 'Equip: When you activate Death Wish or Recklessness, your attacks ignore 300 of your opponent\'s armor for the duration.', '"Let the anger flow, but never let it rule you."'] }
            ]
          }
        },
        protection: {
          name: 'Protection',
          icon: 'https://i.imgur.com/FhuhqTX.png',
          title: 'The Bulwark',
          desc: 'You are the shield that guards the realms of men. You do not falter.',
          steps: [
            '**Phase 1 - The Protector:** Protect a caravan in Nagrand from waves of Wolf-Riders using Taunt and Intervene.',
            '**Phase 2 - The Adamant Shield:** Reflect "Shatter" attacks from a Colossus in the *Iron Soul* dungeon using Shield Block.',
            '**Phase 3 - Holding the Tide:** Tank "Mal\'ganis\'s Echo" for 90 seconds in Hyjal, managing defensive cooldowns.',
            '**Phase 4 - The Last Bastion:** Hold the line against 3 minutes of demons on the *Fissure of Souls* bridge without a healer.'
          ],
          reward: {
            name: 'Scale of Azzinoth',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+45 Stamina'], effects: ['Equip: Increases block value by 100.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+55 Stamina'], effects: ['Equip: Increases defense rating by 20 (0.85% @ L70).', 'Equip: Increases the block value of your shield by 150.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+65 Stamina'], effects: ['Equip: Increases defense rating by 30 (1.27% @ L70).', 'Equip: Chance on block to increase armor by 2000 for 10s.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+85 Stamina'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Increases defense rating by 40 (1.69% @ L70).', 'Equip: Increases the block value of your shield by 300.', 'Use: Activate "Great Shield", reducing all damage taken by 50% for 12 sec. (3 min cooldown)', '"The indomitable barrier."'] }
            ]
          }
        }
      }
    },
    paladin: {
      name: 'Paladin',
      icon: <img src="https://warcraft.wiki.gg/images/ClassIcon_paladin.png?4d2aad" className="w-5 h-5 object-contain" alt="Paladin" />,
      specs: {
        holy: {
          name: 'Holy',
          icon: 'https://i.imgur.com/nbn8UHD.jpeg',
          title: 'The Light\'s Mercy',
          desc: 'The Light does not merely heal; it burns away the corruption of the world. You are the beacon in the endless dark.',
          steps: [
            '**Phase 1 - The Dimming Naaru:** Travel to Oshu\'gun and cleanse the void energies manifesting as "Darkened Sparks" around K\'ure, preventing his total collapse.',
            '**Phase 2 - The Iron Soul:** Venture into the *Iron Soul* dungeon. Recover the "Tear of the Naaru" from the corrupted Construct Governor, purifying it with Holy Light during the encounter.',
            '**Phase 3 - Battlefield Medic:** Enter the *Fissure of Souls*. Keep a squad of "Defender" troops alive against a constant onslaught of Legion fire for 5 minutes.',
            '**Phase 4 - The Sunwell\'s Grace:** Bring the purified Tear to the Sunwell. Channel pure light into it until it crystallizes into the Libram of the Dawn, rejecting the Void entirely.'
          ],
          reward: {
            name: 'Libram of the Dawn',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+25 Intellect'], effects: ['Equip: Increases healing done by up to 45.', 'Equip: Holy Light grants 10 mana per cast.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+30 Intellect'], effects: ['Equip: Increases healing done by up to 55.', 'Use: Your next Flash of Light heals for 100% more and is instant.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+35 Intellect'], effects: ['Equip: Increases healing done by up to 65.', 'Equip: Holy Shock criticals reset the cooldown of Holy Light.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+45 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Increases healing done by up to 80.', 'Equip: Your Illumination talent returns 100% of mana cost on criticals.', 'Use: "Dawn\'s Light" - Unleashes a wave of light after a 1.5s cast, healing all allies within 40yds for (150% of Spell Power) and removing all magical debuffs. (3 min cooldown)', '"The Light does not abandon its champions."'] }
            ]
          }
        },
        prot: {
          name: 'Protection',
          icon: 'https://i.imgur.com/tcWwZXg.png',
          title: 'The Sacred Shield',
          desc: 'A shield of faith is stronger than steel. You must become the sanctuary that protects the weak from the burning shadow.',
          steps: [
            '**Phase 1 - Defenders of Azeroth:** Report to the purely defensive faction "The Defenders". Hold the bridge at Karazhan alone against waves of undead for 5 minutes.',
            '**Phase 2 - The Fel Reaver:** Tank a Fel Reaver Prototype in Netherstorm, using "Righteous Defense" to redirect its orbital strikes away from civilians.',
            '**Phase 3 - The Mountain:** Survive the gaze of Gruul the Dragonkiller. Time your Holy Shield perfectly to mitigate his "Hateful Strike" mechanics.',
            '**Phase 4 - The Last Bastion:** Defend a generic Mag\'har orphan from an infinite legion of demons on the Isle of Quel\'Danas. You cannot win, you just have to survive long enough.'
          ],
          reward: {
            name: 'Aegis of the Just',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+45 Stamina'], effects: ['Equip: Increases the block value of your shield by 100.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+55 Stamina'], effects: ['Equip: Increases the block value of your shield by 150.', 'Use: Consecration heals you for 50 per tick.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+65 Stamina'], effects: ['Equip: Increases the block value of your shield by 200.', 'Equip: Blocking an attack deals 100 Holy damage to the attacker.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+80 Stamina'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Increases the block value of your shield by 300.', 'Equip: Avenger\'s Shield now silences 2 extra targets.', 'Use: "Divine Fortress" - Become immune to all Fear, Polymorph, and Stun effects, and reduce damage taken by 40% for 12 sec. (3 min cooldown)', '"Faith is my shield."'] }
            ]
          }
        },
        ret: {
          name: 'Retribution',
          icon: 'https://i.imgur.com/dpHn8vW.png',
          title: 'The Hand of Justice',
          desc: 'Retribution is swift and final. You are the judge, jury, and executioner of the wicked.',
          steps: [
            '**Phase 1 - The Purge:** Slay 50 demons in the *Fissure of Souls* battleground, collecting their "Fel Hearts" as proof of judgment.',
            '**Phase 2 - The Mentor\'s Test:** Travel to Uther\'s Tomb. Duel the shade of Uther the Lightbringer, proving that your zeal matches his own.',
            '**Phase 3 - Breaking the Seal:** Use "Crusader Strike" to shatter the magical seals protecting a Legion portal in Shadowmoon Valley.',
            '**Phase 4 - Ashbringer\'s Legacy:** Defeat a Pit Lord using only Holy damage abilities to finish him, channeling the spirit of the Ashbringer.'
          ],
          reward: {
            name: 'Shard of the Ashbringer',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Strength'], effects: ['Equip: Melee attacks chance to deal 150 Holy damage.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Strength'], effects: ['Equip: Melee attacks chance to deal 250 Holy damage.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Strength'], effects: ['Equip: Melee attacks chance to deal 350 Holy damage.', 'Equip: Divine Storm heals for 50% more.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Strength'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Improves proficiency rating by 20 (Expertise).', 'Equip: Melee attacks chance to deal 700 Holy damage.', 'Equip: Your Crusader Strike applies "Ashbringer\'s Wrath", increasing Holy damage taken by the target by 5% (Stacks 3 times).', 'Use: "Wake of Ashes" - Deals (200% AP) Radiant damage to enemies in front of you and slows them by 50%. (2 min cooldown)', '"The Light\'s vengeance."'] }
            ]
          }
        }
      }
    },
    hunter: {
      name: 'Hunter',
      icon: <img src="https://warcraft.wiki.gg/images/ClassIcon_hunter.png?7a3ba5" className="w-5 h-5 object-contain" alt="Hunter" />,
      specs: {
        beast: {
          name: 'Beast Mastery',
          icon: 'https://i.imgur.com/qtQxThz.png',
          title: 'The Pack Leader',
          desc: 'A hunter is never alone. You are the alpha, and your will is the command of the wild.',
          steps: [
            '**Phase 1 - The Alpha:** Tame the "Ghost of Loque\'nahak" in Sholazar Basin, proving your dominance over the spirits of beasts.',
            '**Phase 2 - The Great Hunt:** Track and kill King Krush in a solo scenario where you must use your pet to tank while managing threat.',
            '**Phase 3 - Bond of Iron:** Equip your pet with "Fel-Infused Armor" crafted from materials in the *Fissure of Souls*.',
            '**Phase 4 - The Beast Within:** Defeat a gauntlet of 5 elite beasts in the Ring of Blood without using any ranged weapons—only your pet and traps.'
          ],
          reward: {
            name: 'Fang of the Alpha',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Your pet deals 10% more damage.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Agility'], effects: ['Equip: Your pet deals 15% more damage.', 'Use: Bestial Wrath lasts 5 sec longer.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Agility'], effects: ['Equip: Your pet deals 20% more damage.', 'Equip: Kill Command has a 50% chance to reset the cooldown of Bestial Wrath.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Agility'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Your pet deals 30% more damage.', 'Equip: Your pet gains 50% AoE damage reduction.', 'Use: "Stampede" - Summon all your stabled pets to fight for you for 12 sec. (5 min cooldown)', '"Hunt as one."'] }
            ]
          }
        },
        marks: {
          name: 'Marksmanship',
          icon: 'https://i.imgur.com/Gj3Hq4Y.png',
          title: 'The Deadeye',
          desc: 'One shot, one kill. Patience is your ally, and silence is your friend.',
          steps: [
            '**Phase 1 - The Long Shot:** Hit a target dummy from 100 yards away in Nagrand using a sniper mechanic.',
            '**Phase 2 - Cold Precision:** Defeat a rogue-like boss in the *Iron Soul* dungeon who stealths frequently. You must use Flare and Hunter\'s Mark effectively.',
            '**Phase 3 - The Perfect Trap:** Lure a Fel Reaver into a sequence of massive traps in Hellfire Peninsula.',
            '**Phase 4 - No Scope:** Win a sniper duel against the ghost of Alleria Windrunner (Echo) at the Sunwell.'
          ],
          reward: {
            name: 'Scope of the Void-Stalker',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Increases range of all shots by 5 yards.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Agility'], effects: ['Equip: Increases range by 7 yards.', 'Use: Your next Aimed Shot is instant.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Agility'], effects: ['Equip: Increases range by 10 yards.', 'Equip: Chimera Shot deals 20% more damage.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Agility'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Increases range by 15 yards.', 'Equip: You can shoot while moving.', 'Use: "Trueshot Aura" - Grants 10% AP to the raid and guarantees critical hits for you for 10 sec. (3 min cooldown)', '"Never miss."'] }
            ]
          }
        },
        surv: {
          name: 'Survival',
          icon: 'https://i.imgur.com/Bi3IA08.png',
          title: 'The Ranger',
          desc: 'Explosives, traps, and guerilla warfare. You adapt to any environment.',
          steps: [
            '**Phase 1 - Volatile Compounds:** Collect volatile reagents from the Netherstorm eco-domes to craft "Masterwork Explosives".',
            '**Phase 2 - The Gauntlet:** Run through a trapped hallway in *Iron Soul* specifically designed to test your disarm trap and feign death skills.',
            '**Phase 3 - Guerilla Warfare:** Defeat a heavily armored elite in Blade\'s Edge by kiting him through 20 consecutive explosive traps.',
            '**Phase 4 - Close Quarters:** Survive 3 minutes in melee combat against a Fury Warrior NPC using only Mongoose Bite, Traps, and Raptor Strike.'
          ],
          reward: {
            name: 'Satchel of Endless Munitions',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Trap cooldowns reduced by 4 sec.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Agility'], effects: ['Equip: Trap cooldowns reduced by 6 sec.', 'Use: Throw 3 explosive traps at once.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Agility'], effects: ['Equip: Trap cooldowns reduced by 8 sec.', 'Equip: Explosive Shot has a 30% chance to trigger "Lock and Load".'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Agility'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Trap cooldowns reduced by 10 sec.', 'Equip: Black Arrow deals 100% more damage.', 'Use: "Cluster Bomb" - Rain explosives on the target area dealing massive Fire damage. (2 min cooldown)', '"Watch your step."'] }
            ]
          }
        }
      }
    },
    rogue: {
      name: 'Rogue',
      icon: <img src="https://warcraft.wiki.gg/images/ClassIcon_rogue.png?6673d3" className="w-5 h-5 object-contain" alt="Rogue" />,
      specs: {
        assassination: {
          name: 'Assassination',
          icon: 'https://wowmeta.com/_app/immutable/assets/rogue.BcZrWFcx.png',
          title: 'The Slayer',
          desc: 'Poison is your perfume, and shadows are your cloak. Death comes before they even know you are there.',
          steps: [
            '**Phase 1 - The Perfect Poison:** Harvest venom from the "Queen Maiev\'s Spider" in Terokkar Forest without being detected.',
            '**Phase 2 - Silence:** Infiltrate the *Iron Soul* dungeon and assassinate a specific target in a crowded room without alerting any guards.',
            '**Phase 3 - Blood Pact:** Defeat a Blood Council member in the *Fissure of Souls* using only bleeds and poisons.',
            '**Phase 4 - The King Slayer:** Re-enact the assassination of King Llane in a Caverns of Time scenario.'
          ],
          reward: {
            name: 'Vial of the Unseen',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Increases poison application chance by 10%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Agility'], effects: ['Equip: Increases poison application chance by 15%.', 'Use: Your next Mutilate guarantees a critical hit.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Agility'], effects: ['Equip: Increases poison damage by 20%.', 'Equip: Envenom grants 100% chance to apply poisons for 5s.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Agility'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Poison damage can critically hit.', 'Equip: Vendetta lasts 10s longer.', 'Use: "Toxic Cloud" - Vanish in a cloud of poison, choking enemies for Nature damage. (3 min cooldown)', '"The last thing they never saw."'] }
            ]
          }
        },
        combat: {
          name: 'Combat',
          icon: 'https://i.imgur.com/wJbmNeR.png',
          title: 'The Swashbuckler',
          desc: 'Toe to toe, blade to blade. You don\'t need to hide to win.',
          steps: [
            '**Phase 1 - Pirate\'s Life:** Win a bar brawl in Booty Bay against 5 goblins simultaneously.',
            '**Phase 2 - Steel Dancer:** Parry 10 attacks in a row from a blademaster in Nagrand.',
            '**Phase 3 - Cannon Barrage:** Survive a bombardment in the *Fissure of Souls* while dodging fel fire.',
            '**Phase 4 - Killing Spree:** Defeat 3 elite mobs in under 20 seconds using Adrenaline Rush and Blade Flurry.'
          ],
          reward: {
            name: 'Dice of the Grand Admiral',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Chance on hit to gain 10% attack speed.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Agility'], effects: ['Equip: Chance on hit to gain 15% attack speed.', 'Use: Roll the Bones (Grants a random combat buff).'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Agility'], effects: ['Equip: Sword Specialization proc chance doubled.', 'Equip: Sinister Strike has a chance to strike twice.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Agility'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Adrenaline Rush cooldown reduced by 60s.', 'Equip: Your attacks cleave to 1 nearby target for 50% damage.', 'Use: "Broadside" - Call a cannon barrage on your location. (5 min cooldown)', '"Fortune favors the bold."'] }
            ]
          }
        },
        subtlety: {
          name: 'Subtlety',
          icon: 'https://i.imgur.com/Gj3Hq4Y.png',
          title: 'The Shadow',
          desc: 'You are a ghost. You strike from the darkness and return to it before the body hits the floor.',
          steps: [
            '**Phase 1 - Shadow Walk:** Navigate the *Iron Soul* dungeon without taking damage, using Shadowstep and Distract.',
            '**Phase 2 - The unseen Blade:** Backstab "Kael\'thas Sunstrider" (Echo) 50 times during his monologue phase in Magisters\' Terrace.',
            '**Phase 3 - Dance of Death:** Maintain "Shadow Dance" uptime for 60 seconds total in a fight against a training dummy.',
            '**Phase 4 - Soul Thief:** Steal a specific item from a demon lord\'s pocket in the *Fissure of Souls* and escape.'
          ],
          reward: {
            name: 'Cloak of the Night',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Stealth level increased by 5.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Agility'], effects: ['Equip: Stealth level increased by 10.', 'Use: Instantly enter Stealth combat.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Agility'], effects: ['Equip: Backstab deals 20% more damage.', 'Equip: Shadow Dance lasts 2s longer.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Agility'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: You regenerate 5 Energy every second while in Stealth.', 'Equip: Shadowstep has 2 charges.', 'Use: "Shadow Clone" - Summon a shadow copy of yourself that mimics your opening attacks. (3 min cooldown)', '"Darkness is my ally."'] }
            ]
          }
        }
      }
    },
    priest: {
      name: 'Priest',
      icon: <img src="https://warcraft.wiki.gg/images/ClassIcon_priest.png?e0a7df" className="w-5 h-5 object-contain" alt="Priest" />,
      specs: {
        discipline: {
          name: 'Discipline',
          icon: 'https://i.imgur.com/yKNBawv.png',
          title: 'The Inquisitor',
          desc: 'The mind is weak, but faith is strong. You shield the faithful and break the will of the heretic.',
          steps: [
            '**Phase 1 - Penance:** Heal a target from 1% to 100% using only Penance in the Library of Stormwind while under "Silenced" debuff intervals.',
            '**Phase 2 - Power Word: Shield:** Mitigate 1,000,000 damage total in the *Iron Soul* dungeon.',
            '**Phase 3 - Pain Suppression:** Survive a one-shot mechanic from a raid boss by timing your cooldown perfectly.',
            '**Phase 4 - Evangelism:** Convert 10 Scarlet Crusade zealots to the grandiose Light in Tyr\'s Hand.'
          ],
          reward: {
            name: 'Censer of the High Inquisitor',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: Shield absorption increased by 10%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: Shield absorption increased by 15%.', 'Use: Your next Power Word: Shield absorbs double.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Penance channels 1 extra tick.', 'Equip: Rapture returns 20% more mana.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Power Infusion serves you and your target.', 'Equip: Atonement heals for 20% more.', 'Use: "Barrier of Will" - Creates a massive bubble reducing damage taken by 25% for all allies inside. (3 min cooldown)', '"Discipline is the bridge between thought and accomplishment."'] }
            ]
          }
        },
        holy: {
          name: 'Holy',
          icon: 'https://i.imgur.com/2JfVmju.png',
          title: 'The Savior',
          desc: 'Even in death, there is life. You are the miracle that defies the grave.',
          steps: [
            '**Phase 1 - Spirit of Redemption:** Heal a party for 20 seconds while in Spirit of Redemption form in a scripted scenario.',
            '**Phase 2 - Circle of Healing:** Hit 6 injured allies with a single Circle of Healing in a raid environment.',
            '**Phase 3 - Lightwell:** Force teammates to actually click your Lightwell (Scripted NPC logic).',
            '**Phase 4 - Guardian Spirit:** Save a tank from a killing blow in *Fissure of Souls* using Guardian Spirit.'
          ],
          reward: {
            name: 'Staff of the Naaru',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: Spirit increased by 40.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: Spirit increased by 50.', 'Use: Gain 500 mana immediately.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Circle of Healing heals 1 extra target.', 'Equip: Prayer of Mending jumps to 1 extra target.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Your Spirit of Redemption form lasts 10s longer and you can act normally (but are still immune).', 'Use: "Divine Hymn" - Channeled heal that restores massive health to all raid members. (5 min cooldown)', '"The Light preserves."'] }
            ]
          }
        },
        shadow: {
          name: 'Shadow',
          icon: 'https://i.imgur.com/iGZVgov.png',
          title: 'The Cultist',
          desc: 'The Void whisppers truths that the Light fears to speak. You listen.',
          steps: [
            '**Phase 1 - Mind Flay:** Channel Mind Flay uninterrupted for 30 seconds on a training dummy while moving (using the artifact).',
            '**Phase 2 - Shadowform:** Maintain Shadowform while taking massive Holy damage in the Scarlet Monastery.',
            '**Phase 3 - Vampiric Embrace:** Heal your party for 50,000 health solely through damage dealt in a dungeon.',
            '**Phase 4 - Surrender to Madness:** Generate enough Insanity to stay in Voidform for 60 seconds.'
          ],
          reward: {
            name: 'Heart of the Void',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: Shadow damage increased by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: Shadow damage increased by 8%.', 'Use: Reset the cooldown of Mind Blast.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Shadow Word: Pain grants Insanity on tick.', 'Equip: Vampiric Touch deals 10% more damage.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: You can cast while moving during Voidform.', 'Equip: Mind Flay becomes "Mind Spike" (Instant cast).', 'Use: "Void Eruption" - Explode for massive Shadow damage and enter Voidform immediately. (2 min cooldown)', '" Embrace the madness."'] }
            ]
          }
        }
      }
    },
    shaman: {
      name: 'Shaman',
      icon: <img src="https://warcraft.wiki.gg/images/ClassIcon_shaman.png?613d94" className="w-5 h-5 object-contain" alt="Shaman" />,
      specs: {
        elemental: {
          name: 'Elemental',
          icon: 'https://i.imgur.com/38aMS1Y.png',
          title: 'The Stormcaller',
          desc: 'Lightning strikes at your command. The earth trembles beneath your feet.',
          steps: [
            '**Phase 1 - Overload:** Trigger Elemental Overload 20 times in 1 minute.',
            '**Phase 2 - Thunderstorm:** Knock 10 enemies off a cliff in Arathi Basin.',
            '**Phase 3 - Lava Burst:** Land a guaranteed crit Lava Burst on a frozen target in *Iron Soul*.',
            '**Phase 4 - The Elements:** Solo an Elite Earth Elemental in Nagrand using only Earth Shock.'
          ],
          reward: {
            name: 'Totem of the Storm',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: Lightning Bolt damage increased by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: Lightning Bolt damage increased by 8%.', 'Use: Next Chain Lightning hits 10 targets.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Lava Burst cooldown reduced by 2s.', 'Equip: Elemental Overload chance increased by 5%.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Your spells have a chance to summon a Greater Elemental to fight for you.', 'Equip: You can cast Lightning Bolt while moving.', 'Use: "Stormkeeper" - Your next 3 Lightning Bolts are instant and deal 150% damage. (2 min cooldown)', '"I am the storm."'] }
            ]
          }
        },
        enhancement: {
          name: 'Enhancement',
          icon: 'https://i.imgur.com/8ChsJBV.png',
          title: 'The Stormbringer',
          desc: 'Imbue your weapons with the elements and strike with the force of a hurricane.',
          steps: [
            '**Phase 1 - Windfury:** Proc Windfury Weapon 5 times in a row (RNG test in scenario).',
            '**Phase 2 - Feral Spirit:** Keep your Spirit Wolves alive for their full duration against an AoE boss in *Fissure of Souls*.',
            '**Phase 3 - Stormstrike:** Reset the cooldown of Stormstrike using Static Shock.',
            '**Phase 4 - Doomhammer:** Wield the Doomhammer (replica) and defeat a demon lord.'
          ],
          reward: {
            name: 'Core of the Elements',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Windfury Weapon damage increased by 10%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Agility'], effects: ['Equip: Windfury Weapon damage increased by 15%.', 'Use: Your next Stormstrike deals Nature damage.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Agility'], effects: ['Equip: Maelstrom Weapon stacks up to 10 times.', 'Equip: Lava Lash spreads Flame Shock.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Agility'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Windfury Weapon has no internal cooldown.', 'Equip: Feral Spirits last indefinitely but deal 50% less damage (Perma-pets).', 'Use: "Ascendance" - Transform into an Air Ascendant, allowing auto-attacks to bypass armor and have 30y range. (3 min cooldown)', '"Strike with the wind."'] }
            ]
          }
        },
        restoration: {
          name: 'Restoration',
          icon: 'https://i.imgur.com/38aMS1Y.png', // Reusing placeholder, ideally distinct
          title: 'The Tidecaller',
          desc: 'Water is life. You guide the healing rains to wash away the wounds of war.',
          steps: [
            '**Phase 1 - Chain Heal:** Heal 4 targets with a single Chain Heal.',
            '**Phase 2 - Mana Tide:** Restore 10,000 mana to your party using Mana Tide Totem.',
            '**Phase 3 - Earth Shield:** Keep Earth Shield active on a tank taking heavy damage for 2 minutes.',
            '**Phase 4 - Spirit Link:** Save a party from a wipe mechanic using Spirit Link Totem.'
          ],
          reward: {
            name: 'Vial of the Living Current',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: Chain Heal healing increased by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: Chain Heal healing increased by 10%.', 'Use: Next Healing Wave is instant.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Riptide has 2 charges.', 'Equip: Earth Shield heals correctly when below 20% hp.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Chain Heal has no target cap (diminishing returns apply).', 'Equip: Rain of Healing follows the Shaman.', 'Use: "High Tide" - Your next 3 Chain Heals bounce twice as far and heal for 50% more. (2 min cooldown)', '"The tides obey."'] }
            ]
          }
        }
      }
    },
    mage: {
      name: 'Mage',
      icon: <img src="https://warcraft.wiki.gg/images/ClassIcon_mage.png?7cb113" className="w-5 h-5 object-contain" alt="Mage" />,
      specs: {
        arcane: {
          name: 'Arcane',
          icon: 'https://i.imgur.com/TRNTMys.png',
          title: 'The Arcanist',
          desc: 'Magic is order imposed upon chaos. You calculate every variable.',
          steps: [
            '**Phase 1 - Mana Management:** Maintain 80% mana for 2 minutes while casting Arcane Blast.',
            '**Phase 2 - Arcane Power:** Burst down a target in 10 seconds using Arcane Power.',
            '**Phase 3 - Blink:** Blink through a wall in *Iron Soul* to bypass a trap.',
            '**Phase 4 - Evolution:** Transform 5 enemies into sheep simultaneously.'
          ],
          reward: {
            name: 'Crystal of Infinite Potential',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: Arcane Blast damage increased by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: Arcane Blast damage increased by 8%.', 'Use: Restore 3000 mana.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Clearcasting chance increased by 10%.', 'Equip: Arcane Missiles can move while channeling.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Arcane Power cooldown reduced by 50%.', 'Equip: Evocation is instant.', 'Use: "Overpower" - Your Arcane Blasts are instant cast for 10 sec. (3 min cooldown)', '"Unlimited power."'] }
            ]
          }
        },
        fire: {
          name: 'Fire',
          icon: 'https://i.imgur.com/Zt0BQe6.png',
          title: 'The Pyromancer',
          desc: 'Some just want to watch the world burn. You carry the match.',
          steps: [
            '**Phase 1 - Hot Streak:** Get 3 Hot Streaks in a row.',
            '**Phase 2 - Combustion:** Do 100k damage in a single Combustion window.',
            '**Phase 3 - Dragon\'s Breath:** Disorient 5 targets at once.',
            '**Phase 4 - Phoenix Reborn:** Survive a killing blow with Cauterize.'
          ],
          reward: {
            name: 'Ember of the Phoenix',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: Critical strike rating increased by 20.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: Critical strike rating increased by 30.', 'Use: Next Pyroblast is instant.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Hot Streak requires only 1 crit.', 'Equip: Living Bomb has no target limit.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Combustion can be cast while moving.', 'Equip: You can cast Scorch while moving.', 'Use: "Phoenix Flames" - Summon a Phoenix that fights for you and pulses Fire damage. (5 min cooldown)', '"Burn brighter."'] }
            ]
          }
        },
        frost: {
          name: 'Frost',
          icon: 'https://i.imgur.com/Zt0BQe6.png', // Placeholder
          title: 'The Lich',
          desc: 'Cold calculation. You slow their advance until they shatter.',
          steps: [
            '**Phase 1 - Shatter:** Crit a frozen target with Ice Lance.',
            '**Phase 2 - Kite Master:** Kite a melee elite for 2 minutes without getting hit.',
            '**Phase 3 - Deep Freeze:** Stun a boss during a critical cast.',
            '**Phase 4 - Water Elemental:** Keep your Elemental alive through a dungeon.'
          ],
          reward: {
            name: 'Shard of the Frozen Throne',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: Frostbolt damage increased by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: Frostbolt damage increased by 8%.', 'Use: Reset cooldown of Icy Veins.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Fingers of Frost chance increased.', 'Equip: Brain Freeze makes Fireball instant.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Ice Lance hits 2 targets.', 'Equip: You can cast Ice Block on allies.', 'Use: "Glacial Spike" - Launch a massive spike dealing 300% SP damage. (1 min cooldown)', '"Winter is coming."'] }
            ]
          }
        }
      }
    },
    warlock: {
      name: 'Warlock',
      icon: <img src="https://warcraft.wiki.gg/images/ClassIcon_warlock.png?de29f3" className="w-5 h-5 object-contain" alt="Warlock" />,
      specs: {
        affliction: {
          name: 'Affliction',
          icon: 'https://i.imgur.com/ZAsJNiE.jpeg',
          title: 'The Harvester',
          desc: 'Agony is a slow teacher, but a thorough one.',
          steps: [
            '**Phase 1 - Unstable Affliction:** Cover 5 targets with UA without getting interrupted.',
            '**Phase 2 - Drain Soul:** Execute a target with Drain Soul ticks.',
            '**Phase 3 - Fear Juggling:** Juggle 3 feared targets at once.',
            '**Phase 4 - Soul Swap:** Move dots from one target to another INSTANTLY.'
          ],
          reward: {
            name: 'Skull of the Man\'ari',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: DoT damage increased by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: DoT damage increased by 8%.', 'Use: Instantly apply Corruption to all enemies in 30yds.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Corruption ticks 20% faster.', 'Equip: Haunt lasts 5s longer.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Your DoTs can critically hit.', 'Equip: Drain Soul can move.', 'Use: "Reap Souls" - Doubles the tick rate of all your DoTs for 10 sec. (2 min cooldown)', '"Their souls are mine."'] }
            ]
          }
        },
        demonology: {
          name: 'Demonology',
          icon: 'https://i.imgur.com/ZAsJNiE.jpeg',
          title: 'The Master Summoner',
          desc: 'You do not serve the Legion. The Legion serves you.',
          steps: [
            '**Phase 1 - Metamorphosis:** Tank a boss in Meta form.',
            '**Phase 2 - Felguard:** Have your Felguard hold aggro against 3 mobs.',
            '**Phase 3 - Hand of Gul\'dan:** Summon imps on cooldown.',
            '**Phase 4 - Wilfred Fizzlebang:** Summon a Doomguard without dying.'
          ],
          reward: {
            name: 'Thal\'kiel\'s Visage',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: Pet damage increased by 10%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: Pet damage increased by 15%.', 'Use: Summon 2 Wild Imps.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Hand of Gul\'dan summons 4 imps.', 'Equip: Metamorphosis duration +10s.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: You can have 2 demons active at once.', 'Equip: Demonic Empowerment is passive.', 'Use: "Thal\'kiel\'s Consumption" - Deal damage equal to 10% of your pets\' total HP. (1.5 min cooldown)', '"Obey."'] }
            ]
          }
        },
        destro: {
          name: 'Destruction',
          icon: 'https://i.imgur.com/ZAsJNiE.jpeg',
          title: 'The Cataclysm',
          desc: 'Fire and brimstone. You are the end of days.',
          steps: [
            '**Phase 1 - Chaos Bolt:** Crit for 10k damage.',
            '**Phase 2 - Rain of Fire:** Generate burning embers from AoE.',
            '**Phase 3 - Shadowburn:** Snipe 3 low hp targets in a row.',
            '**Phase 4 - Havoc:** Cleave a Chaos Bolt to a secondary target.'
          ],
          reward: {
            name: 'Scepter of Sargeras',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: Chaos Bolt damage increased by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: Chaos Bolt damage increased by 8%.', 'Use: Conflagrate has 3 charges.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Incinerate cast time reduced 20%.', 'Equip: Rain of Fire casts while moving.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Chaos Bolt penetrates all absorption shields.', 'Equip: Havoc has no cooldown but costs Soul Shards.', 'Use: "Dimensional Rift" - Tear open a portal that fires Chaos Bolts automatically. (3 charges)', '"Burn it all."'] }
            ]
          }
        }
      }
    },
    druid: {
      name: 'Druid',
      icon: <img src="https://warcraft.wiki.gg/images/ClassIcon_druid.png?51e7c5" className="w-5 h-5 object-contain" alt="Druid" />,
      specs: {
        balance: {
          name: 'Balance',
          icon: 'https://i.imgur.com/xqYw2gI.png',
          title: 'The Archdruid',
          desc: 'The stars align at your command.',
          steps: [
            '**Phase 1 - Solar Eclipse:** Keep Moonfire on 3 targets.',
            '**Phase 2 - Starfall:** Pull 20 mobs and survive.',
            '**Phase 3 - Typhoon:** Interrupt a cast with a knockback.',
            '**Phase 4 - Moonkin Form:** Dance with other Moonkins.'
          ],
          reward: {
            name: 'Scythe of Elune',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: Starfire damage increased by 5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: Starfire damage increased by 8%.', 'Use: Grant Solar Eclipse.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Starsurge is instant.', 'Equip: Moonfire hits 2 targets.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Starfall hits all targets in 40yds.', 'Equip: You can cast in Moonkin Form while moving.', 'Use: "New Moon" - Drop a moon on the target. (15 sec recharge)', '"Balanced as all things should be."'] }
            ]
          }
        },
        feral: {
          name: 'Feral',
          icon: 'https://i.imgur.com/xqYw2gI.png',
          title: 'The Apex Predator',
          desc: 'Tooth and claw.',
          steps: [
            '**Phase 1 - Rip:** Bleed a target for 30 seconds.',
            '**Phase 2 - Shred:** Shred from behind.',
            '**Phase 3 - Survival Instincts:** Tank a heavy hit.',
            '**Phase 4 - Berserk:** Spam Mangle.'
          ],
          reward: {
            name: 'Fangs of Ashamane',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Agility'], effects: ['Equip: Energy regen increased.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Agility'], effects: ['Equip: Combo points generate faster.', 'Use: Tiger\'s Fury.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Agility'], effects: ['Equip: Bleeds can crit.', 'Equip: 5 CP finishers refund 25 energy.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Agility'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: Cat Form has 150% movement speed.', 'Equip: Shred applies Rake.', 'Use: "Ashamane\'s Frenzy" - Unleash a flurry of bleeds. (1 min cooldown)', '"The wild god returns."'] }
            ]
          }
        },
        guardian: {
          name: 'Guardian',
          icon: 'https://i.imgur.com/xqYw2gI.png',
          title: 'The Guardian',
          desc: 'The unmovable object.',
          steps: [
            '**Phase 1 - Maul:** Hold aggro on 5 mobs.',
            '**Phase 2 - Frenzied Regen:** Heal to full.',
            '**Phase 3 - Ironfur:** Reach 20k Armor.',
            '**Phase 4 - Thrash:** Bleed everyone.'
          ],
          reward: {
            name: 'Claws of Ursoc',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+45 Stamina'], effects: ['Equip: Bear Form Stamina +10%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+55 Stamina'], effects: ['Equip: Bear Form Armor +10%.', 'Use: Enrage.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+65 Stamina'], effects: ['Equip: Mangle hits 3 targets.', 'Equip: Thrash stacks 5 times.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+80 Stamina'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: You absorb 25% of magic damage.', 'Equip: Growl is AoE.', 'Use: "Rage of the Sleeper" - Reflect damage and leech health. (1.5 min cooldown)', '"The bear sleeps no more."'] }
            ]
          },
        },
        resto: {
          name: 'Restoration',
          icon: 'https://i.imgur.com/xqYw2gI.png',
          title: 'The Lifebinder',
          desc: 'A leaf on the wind.',
          steps: [
            '**Phase 1 - Rejuvenation:** Blanket the raid.',
            '**Phase 2 - Wild Growth:** Heal 5 people.',
            '**Phase 3 - Tree of Life:** Dance.',
            '**Phase 4 - Tranq:** Save the raid.'
          ],
          reward: {
            name: 'G\'Hanir, the Mother Tree',
            phases: [
              { ilvl: 115, quality: 'epic', slot: 'Trinket', stats: ['+40 Intellect'], effects: ['Equip: HoT healing +5%.'] },
              { ilvl: 128, quality: 'epic', slot: 'Trinket', stats: ['+50 Intellect'], effects: ['Equip: HoT healing +8%.', 'Use: Swiftmend no longer consumes HoT.'] },
              { ilvl: 141, quality: 'epic', slot: 'Trinket', stats: ['+60 Intellect'], effects: ['Equip: Rejuv has 2 charges.', 'Equip: Lifebloom blooms on every tick.'] },
              { ilvl: 164, quality: 'legendary', slot: 'Trinket', stats: ['+75 Intellect'], effects: ['Unique-Equipped: Pinnacle Artifact', 'Equip: You can cast while moving in Tree Form.', 'Equip: HoTs last 100% longer.', 'Use: "Flourish" - Extend all HoTs by 10s. (1 min cooldown)', '"Life finds a way."'] }
            ]
          }
        }
      }
    },
  };

  // World Legendaries data removed (Moved to dedicated Legendaries.jsx component)


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
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .obsidian-texture {
          background-color: #111;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23222' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      {/* --- HEADER --- */}
      <UnifiedHeader
        icon="https://i.imgur.com/3AyjhHT.jpeg"
        background="https://i.imgur.com/NECUWJJ.jpeg"
        section="Pinnacle Quests"
        sub="The Path of the Master"
        title="Artifacts of Power"
        quote="From the hands of heroes to the legends of eternity."
      />

      <div className="container mx-auto px-4 py-12 min-h-screen">

        {/* --- CONTENT --- */}
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
                className={`flex items-center gap-2 px-6 py-3 rounded border transition-all duration-300 relative overflow-hidden group ${activeClass === key
                  ? `bg-opacity-20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]`
                  : 'bg-[#151515] border-stone-800 text-stone-500 hover:border-stone-600'
                  }`}
                style={{
                  borderColor: activeClass === key ? classColorsHash[key] : '',
                  backgroundColor: activeClass === key ? `${classColorsHash[key]}20` : ''
                }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500`} style={{ backgroundColor: classColorsHash[key] }}></div>
                {data.icon} <span className="font-hero text-sm tracking-wide uppercase">{data.name}</span>
              </button>
            ))}
          </div>

          {/* Spec Selector */}
          <div className="flex justify-center gap-8 mb-16 border-b border-stone-800 pb-8">
            {Object.entries(pinnacleData[activeClass].specs).map(([key, spec]) => (
              <button
                key={key}
                onClick={() => setActiveSpec(key)}
                className={`text-sm font-hero tracking-widest uppercase transition-colors pb-2 border-b-2 flex items-center gap-2 ${activeSpec === key ? 'text-white border-amber-500' : 'text-stone-600 border-transparent hover:text-stone-400'
                  }`}
              >
                <img src={spec.icon} className="w-5 h-5 object-contain" alt="" />
                {spec.name}
              </button>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* LEFT: Questline */}
            <div className="lg:col-span-7">
              <div className="bg-[#111] border border-stone-800 p-8 rounded-lg obsidian-texture">
                <h3 className="font-hero text-3xl text-amber-500 mb-2">{activeSpecData.title}</h3>
                <p className="font-body text-stone-400 mb-8 italic leading-relaxed border-l-2 border-amber-900/50 pl-4">
                  {activeSpecData.desc}
                </p>

                <div className="space-y-6">
                  {activeSpecData.steps.map((step, i) => {
                    const stepKey = `${activeClass}-${activeSpec}-${i}`;
                    const isCompleted = completedSteps[stepKey];
                    return (
                      <div
                        key={i}
                        onClick={() => toggleStep(i)}
                        className={`relative pl-8 pb-6 border-l border-stone-800 last:border-0 last:pb-0 cursor-pointer group transition-all duration-300 ${isCompleted ? 'opacity-50 blur-[0.5px]' : 'opacity-100'}`}
                      >
                        <div className={`absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full border flex items-center justify-center transition-colors duration-300
                        ${isCompleted ? 'bg-green-900 border-green-500' : 'bg-[#0c0a09] border-amber-700 group-hover:border-amber-500'}
                      `}>
                          <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isCompleted ? 'bg-green-500' : 'bg-amber-500 group-hover:bg-amber-400'}`}></div>
                        </div>
                        <p className="font-body text-stone-300 text-sm leading-relaxed">
                          {formatText(step)}
                        </p>
                      </div>
                    );
                  })}

                  {/* Interactive Start Button */}
                  <button className="mt-8 w-full py-3 border border-amber-900/50 text-amber-700 font-hero tracking-[0.2em] text-xs uppercase hover:bg-amber-900/10 hover:text-amber-500 transition-colors">
                    Begin Quest
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT: Reward Tooltip */}
            <div className="lg:col-span-5">
              <div className="sticky top-52">
                <div className="flex justify-between items-end mb-4">
                  <h4 className="font-hero text-stone-500 text-xs uppercase tracking-widest">Reward Preview</h4>

                  {/* Phase Toggle */}
                  <div className="flex bg-black border border-stone-800 rounded p-1">
                    {activeRelicData.phases.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setRelicPhase(i)}
                        className={`px-3 py-1 text-[10px] font-hero font-bold transition-colors rounded ${relicPhase === i
                          ? 'bg-amber-900/40 text-amber-400'
                          : 'text-stone-600 hover:text-stone-400'
                          } ${i === 3 ? 'animate-pulse-slow text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]' : ''}`}
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