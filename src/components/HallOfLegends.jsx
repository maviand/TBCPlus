import React, { useState } from 'react';
import {
  Sword, Shield, Zap, Crosshair, Heart, Skull,
  Activity, Moon, Sun, Droplet, Flame, Snowflake,
  Ghost, Hammer, BookOpen, ArrowLeft, Leaf, Crown, Layout, Sparkles
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const HallOfLegends = ({ setPage, setSelectedClass, initialClass }) => {
  const [activeClass, setActiveClass] = useState(initialClass || 'druid');


  // Effect to update active class if initialClass prop changes (from external nav)
  React.useEffect(() => {
    if (initialClass) {
      setActiveClass(initialClass);
    }
  }, [initialClass]);

  // Helper function to convert markdown bold (**) and newlines (\n) to JSX elements
  const formatText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');

    return lines.map((line, lineIndex) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);

      const content = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex} className="text-[#c29c55] font-normal">{part.slice(2, -2)}</strong>;
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

  // --- CLASS DATA ---
  const classes = {
    druid: {
      name: 'Druid',
      title: 'The Wild Heart Reforged',
      icon: <Leaf className="w-6 h-6" />,
      crest: "https://warcraft.wiki.gg/images/ClassIcon_druid.png?a3333f",
      color: 'text-orange-400',
      borderColor: 'border-orange-500',
      bgGradient: 'from-orange-900/80 to-black',
      masterwork: {
        name: 'Primal Surge',
        desc: '**Masterwork Ability: Primal Surge** \n**Instant | 15 sec Cooldown** \nAdapts to your current shapeshift form. Unleashes the raw aspect of your current form, projecting your power to influence multiple targets at once.',
        mechanic: '🐯 **Cat Form: Primal Wrath** (35 Energy | 1-5 CP). Finishing move that strikes all enemies within 8 yards for instant damage and applies Rip. Duration increases with CP (4-20s). \n\n🐻 **Bear Form: Primal Tremor** (20 Rage). Slams the ground, dealing Physical damage to all enemies within 8 yards. Applies 1 stack of Lacerate. Generates high threat. \n\n🦉 **Moonkin Form: Primal Flare** (21% Base Mana). Blasts target with lunar energy. If target has Moonfire, duplicates it to up to 4 additional enemies within 10 yards. \n\n🌿 **Caster Form: Primal Bloom** (18% Base Mana). Consumes Rejuv/Regrowth on target for an instant moderate heal. Radiates a Rejuvenation effect (8s) to 4 nearby injured party members.',
      },
      customization: {
        title: "Forms of the Wild",
        desc: "The connection to the Emerald Dream has deepened. Druids can now discover and unlock 'Marks of the Wild' to permanently alter their shapeshift forms. These are high-definition models that reflect the druid's environment.",
        options: [
          { name: "Avatar of Ursol", icon: "ability_druid_challangingroar", desc: "A hulking, rune-etched bear form reminiscent of the Guardian artifacts." },
          { name: "Saber of the Moon", icon: "ability_druid_catform", desc: "A glowing, astral panther form for feral combatants." },
          { name: "Keeper of the Grove", icon: "spell_nature_forceofnature", desc: "Tree of Life form becomes a literal Treant similar to Cenarius' children." }
        ]
      },
      pinnacleQuest: {
        name: "Wings of the Storm",
        reward: "Swift Stormcrow Form",
        icon: "ability_druid_flightform",
        desc: "Ascend to the highest peaks of Hyjal and prove your mastery over the winds to unlock the Swift Stormcrow form, capable of carrying a passenger."
      },
      races: ['Night Elf', 'Tauren', 'Saberon', 'Wildhammer'],
      specs: [
        {
          name: 'Balance',
          icon: 'https://i.imgur.com/xqYw2gI.png',
          title: 'Celestial Arcanist',
          fantasy: 'A master of the stars, harnessing the rhythmic cycle of the sun and moon to call down astral devastation.',
          abilities: [
            { name: 'Starsurge', icon: 'spell_arcane_arcane03', desc: 'Instant-cast Arcane nuke that defines the rotation.' },
            { name: 'Typhoon', icon: 'ability_druid_typhoon', desc: 'Frontal-cone knockback for unparalleled control.' },
            { name: 'Solar Beam', icon: 'ability_vehicle_sonicshockwave', desc: 'Area-of-effect silence that creates a zone of nullification.' }
          ]
        },
        {
          name: 'Feral',
          icon: 'https://i.imgur.com/su1345k.jpeg',
          title: 'Primal Predator',
          fantasy: 'A shapeshifting skirmisher who bleeds foes or acts as an unbreakable wall of fur and claw.',
          abilities: [
            { name: 'Thrash (Bear)', icon: 'spell_druid_thrash', desc: 'Massive AoE bleed for tanking threat.' },
            { name: 'Primal Fury (Cat)', icon: 'ability_racial_cannibalize', desc: 'Finisher that grants physical damage dominance.' },
            { name: 'Swipe (Cat)', icon: 'inv_misc_monsterclaw_03', desc: 'Now strikes all nearby enemies.' }
          ]
        },
        {
          name: 'Restoration',
          icon: 'https://i.imgur.com/8WViTgN.png',
          title: 'Grove Warden',
          fantasy: 'A healer who mends wounds with the essence of life itself, mobile and reactive like the wind.',
          abilities: [
            { name: 'Wild Growth', icon: 'ability_druid_flourish', desc: 'Smart AoE heal that prioritizes injured allies.' },
            { name: 'Efflorescence', icon: 'inv_misc_herb_talandrasrose', desc: 'Swiftmend plants a healing garden at the target\'s feet.' },
            { name: 'Revitalize', icon: 'ability_druid_empoweredrejuvination', desc: 'Periodically restores Energy or Rage to healed targets.' }
          ]
        }
      ]
    },
    hunter: {
      name: 'Hunter',
      title: 'The Patient Predator',
      icon: <Crosshair className="w-6 h-6" />,
      crest: "https://warcraft.wiki.gg/images/ClassIcon_hunter.png?45616d",
      color: 'text-green-400',
      borderColor: 'border-green-500',
      bgGradient: 'from-green-900/80 to-black',
      masterwork: {
        name: 'Hunter\'s Focus',
        desc: 'This system is the elegant, universal solution to the class\'s two biggest problems: the "1-button Steady Shot macro" and mana-dependency. It shifts the Hunter from a mana conservation class (a caster) to a true resource management class (a predator), enforcing a rhythmic rotation and rewarding planning.',
        mechanic: 'The mana bar is replaced by a 100-point **Focus** bar. \n**Steady Shot** is the Focus **builder** (generates 20 Focus). Spenders (Arcane Shot, Multi-Shot) cost Focus. \n\n**Empowered Shot (Passive):** Every 3rd Steady Shot grants Hunter\'s Focus, making your next spec-specific spender (like **Kill Command** or **Aimed Shot**) **free and massively empowered**. \n\nThe **Deadzone (5-8 yard minimum range) is entirely eliminated**.',
      },
      customization: {
        title: "The Stable Master",
        desc: "Hunters can now tame creatures from families previously thought untamable, and customize the appearance of their loyal companions.",
        options: [
          { name: "Exotic Families", icon: "ability_hunter_pet_devilsaur", desc: "Beast Masters can now tame Devilsaurs, worms, and chimeras." },
          { name: "Pet Collars", icon: "inv_misc_collar_01", desc: "Equip your pet with collars that provide visual flair (bandanas, spikes)." },
          { name: "Aspect Visuals", icon: "spell_nature_ravenform", desc: "Your Aspects (Hawk, Cheetah) now exhibit a subtle spectral aura of the animal." }
        ]
      },
      pinnacleQuest: {
        name: "The Ancient Leaf",
        reward: "Rhok'delar, Reforged",
        icon: "inv_weapon_bow_07",
        desc: "Track and slay four ancient demons without your pet to reforge the legendary longbow, Rhok'delar."
      },
      races: ['Dwarf', 'Night Elf', 'Draenei', 'Orc', 'Tauren', 'Troll', 'Blood Elf', 'Goblin', 'High Elf', 'Ogre', 'Saberon', 'Broken', 'Wildhammer'],
      specs: [
        {
          name: 'Beast Mastery',
          icon: 'https://i.imgur.com/O9XtjlG.png',
          title: 'Primal Bond',
          fantasy: 'Fighting as one with your beast, unleashing coordinated rage and commanding the wilds.',
          abilities: [
            { name: 'Kill Command', icon: 'ability_hunter_killcommand', desc: 'Active, high-impact Focus spender.' },
            { name: 'Call of the Wild', icon: 'ability_hunter_callofthewild', desc: 'Party gains 10% AP for 20s.' },
            { name: 'Exotic Beasts', icon: 'ability_hunter_beasttaming', desc: 'Tame Devilsaurs, Spirit Beasts, and Core Hounds.' }
          ]
        },
        {
          name: 'Marksmanship',
          icon: 'https://i.imgur.com/qtQxThz.png',
          title: 'Master Sniper',
          fantasy: 'The precise executioner, eliminating targets from extreme range with calculated shots.',
          abilities: [
            { name: 'Chimera Shot', icon: 'ability_hunter_chimerashot2', desc: 'Refreshes Sting duration and deals heavy damage.' },
            { name: 'Disengage', icon: 'ability_rogue_feint', desc: 'Leaps backward to create tactical distance.' },
            { name: 'Kill Shot', icon: 'ability_hunter_assassinate2', desc: 'Devastating execute on low-health targets.' }
          ]
        },
        {
          name: 'Survival',
          icon: 'https://i.imgur.com/xHx9U5j.jpeg',
          title: 'Cunning Trapper',
          fantasy: 'Using gadgets, venom, and explosives to control the battlefield.',
          abilities: [
            { name: 'Explosive Shot', icon: 'ability_hunter_explosiveshot', desc: 'Fires a volatile payload into the target.' },
            { name: 'Black Arrow', icon: 'spell_shadow_painspike', desc: 'Curses target with Shadow damage.' },
            { name: 'Trap Launcher', icon: 'ability_hunter_traplauncher', desc: 'Hurl your traps to any location within 40 yards.' }
          ]
        }
      ]
    },
    mage: {
      name: 'Mage',
      title: 'The Volatile Artificer',
      icon: <Flame className="w-6 h-6" />,
      crest: "https://warcraft.wiki.gg/images/ClassIcon_mage.png?2574d1",
      color: 'text-blue-400',
      borderColor: 'border-blue-500',
      bgGradient: 'from-blue-900/80 to-black',
      masterwork: {
        name: 'Volatile Magic',
        desc: 'The entire purpose of this system is to solve the TBC problem of **"proc munching"** (where a new proc would overwrite and waste an existing one) and turn it into a high-skill-ceiling reward. A great Mage banks and spends their procs for maximum impact, transforming all three specs from static turrets into explosive proc-based art forms.',
        mechanic: '**Stacking Procs:** \n**Hot Streak (Fire):** Can now stack up to **2 times**, guaranteeing Pyroblast! Pyroblast! burst during Combustion. \n**Fingers of Frost (Frost):** Can stack up to **3 times**, allowing for rapid-fire Ice Lance bursts. \n**Ley Line Mastery (Arcane):** Stacks to make Missiles/Barrage **instant and mana-free**.',
      },
      customization: {
        title: "Arcane Schools",
        desc: "Mages can now attune their magic to specific schools, altering the color and visual effects of their spells to match their heritage.",
        options: [
          { name: "Blood Mage", icon: "spell_fire_felflamebolt", desc: "Fire spells burn with crimson and black flames (Sin'dorei style)." },
          { name: "Frostfire", icon: "ability_mage_frostfirebolt", desc: "Frost and Fire spells combine into a blue-white plasma." },
          { name: "Chrono-Mancer", icon: "spell_holy_borrowedtime", desc: "Arcane missiles and blasts appear as golden sands of time." }
        ]
      },
      pinnacleQuest: {
        name: "Secrets of the Violet Citadel",
        reward: "Archmage's Prismatic Disc",
        icon: "spell_nature_polymorph_cow", // Placeholder icon
        desc: "Master the three schools of magic within the Violet Hold to earn the Prismatic Disc mount, capable of changing colors based on your spec."
      },
      races: ['Human', 'Gnome', 'Draenei', 'Undead', 'Troll', 'Blood Elf', 'Goblin', 'High Elf', 'Ogre', 'Broken'],
      specs: [
        {
          name: 'Arcane',
          icon: 'https://i.imgur.com/Zt0BQe6.png',
          title: 'Temporal Weaver',
          fantasy: 'Bending time and space to overwhelm enemies with raw, volatile power.',
          abilities: [
            { name: 'Arcane Barrage', icon: 'ability_mage_arcanebarrage', desc: 'Instant-cast missile barrage for mobile damage.' },
            { name: 'Mirror Image', icon: 'spell_magic_lesserinvisibilty', desc: 'Summon duplicates to distract enemies.' },
            { name: 'Focus Magic', icon: 'spell_arcane_studentofmagic', desc: 'Buffs a friendly caster, granting Crit to both.' }
          ]
        },
        {
          name: 'Fire',
          icon: 'https://i.imgur.com/TRNTMys.png',
          title: 'Explosive Pyromancer',
          fantasy: 'Igniting the very air, leaving nothing but ash in the wake of destruction.',
          abilities: [
            { name: 'Living Bomb', icon: 'ability_mage_livingbomb', desc: 'Turns the target into a ticking bomb.' },
            { name: 'Dragon\'s Breath', icon: 'inv_misc_head_dragon_01', desc: 'Disorients enemies in a fiery cone.' },
            { name: 'Cauterize', icon: 'spell_fire_playingwithfire', desc: 'Fatal damage instead burns you over time.' }
          ]
        },
        {
          name: 'Frost',
          icon: 'https://i.imgur.com/oR1e4BK.png',
          title: 'Glacial Controller',
          fantasy: 'Shattering enemies with precision, unyielding cold, and absolute control.',
          abilities: [
            { name: 'Deep Freeze', icon: 'ability_mage_deepfreeze', desc: 'Stuns frozen targets or deals massive damage.' },
            { name: 'Frozen Orb', icon: 'spell_frost_frozenorb', desc: 'Launches a ball of ice that slows enemies.' },
            { name: 'Ice Floes', icon: 'spell_frost_icefloes', desc: 'Allows casting while moving.' }
          ]
        }
      ]
    },
    paladin: {
      name: 'Paladin',
      title: 'The Silver Hand\'s Resolve',
      icon: <Hammer className="w-6 h-6" />,
      crest: "https://warcraft.wiki.gg/images/ClassIcon_paladin.png?4d2aad",
      color: 'text-pink-400',
      borderColor: 'border-pink-500',
      bgGradient: 'from-pink-900/80 to-black',
      masterwork: {
        name: 'Holy Power',
        desc: 'This is the single most important fix for the class, transforming the Paladin into a dynamic, resource-managing hybrid. The Light\'s favor is stored as **Holy Power**, then unleashed in devastating finishers. This 3-point resource system replaces mana as the primary cost for your most powerful abilities, solving Retribution\'s mana starvation and adding tactical depth to all specs.',
        mechanic: 'Holy Power is generated by core abilities (e.g., Crusader Strike, Holy Shock, Hammer of the Righteous, Holy Shield Block). \n\n**Spenders (Cost 3 HP) create a choice:** \n**Ret:** **Divine Storm** (AoE) or **Templar\'s Verdict** (Single-Target). \n**Prot:** **Shield of the Righteous** (Threat) or **Word of Glory** (Instant Self-Heal). \n**Holy:** **Light of Dawn** (AoE Heal).',
      },
      customization: {
        title: "Librams & Auras",
        desc: "Paladins can now visibly display their devotion through specific Librams attached to their belt and customized aura effects.",
        options: [
          { name: "Libram of Justice", icon: "inv_relics_libramofgrace", desc: "A floating tome that opens when you cast Judgement." },
          { name: "Tyrael's Wings", icon: "spell_holy_divinepurpose", desc: "Avenging Wrath manifests as tendrils of pure light (Diablo style)." },
          { name: "Argent Crusader", icon: "inv_jewelry_talisman_08", desc: "Auras appear as a definitive golden circle on the ground." }
        ]
      },
      pinnacleQuest: {
        name: "The Light's Vengeance",
        reward: "Highlord's Charger",
        icon: "ability_mount_charger",
        desc: "Cleanse the corrupted soul of a deathcharger to earn the Highlord's Charger, an armored holy steed."
      },
      races: ['Human', 'Dwarf', 'Draenei', 'Blood Elf', 'High Elf'],
      specs: [
        {
          name: 'Holy',
          icon: 'https://i.imgur.com/nbn8UHD.jpeg',
          title: 'Beacon of Faith',
          fantasy: 'The radiant healer who stands near the fray, guiding the Light to where it is needed most.',
          abilities: [
            { name: 'Beacon of Light', icon: 'ability_paladin_beaconoflight', desc: 'Copies heals to a designated ally.' },
            { name: 'Light of Dawn', icon: 'spell_paladin_lightofdawn', desc: 'Frontal cone heal that consumes Holy Power.' },
            { name: 'Aura Mastery', icon: 'spell_holy_auramastery', desc: 'Empowers your active aura with a raid-wide effect.' }
          ]
        },
        {
          name: 'Protection',
          icon: 'https://i.imgur.com/tcWwZXg.png',
          title: 'Divine Fortress',
          fantasy: 'A bulwark against darkness, using holy magic to shield allies and judge the wicked.',
          abilities: [
            { name: 'Shield of the Righteous', icon: 'ability_paladin_shieldofvengeance', desc: 'Slams target with shield (Holy Power spender).' },
            { name: 'Ardent Defender', icon: 'spell_holy_ardentdefender', desc: 'Cheat Death effect that heals you.' },
            { name: 'Grand Crusader', icon: 'ability_paladin_swiftretribution', desc: 'Avenger\'s Shield procs reset its cooldown.' }
          ]
        },
        {
          name: 'Retribution',
          icon: 'https://i.imgur.com/dpHn8vW.png',
          title: 'Righteous Vindicator',
          fantasy: 'The instrument of judgment, unleashing holy wrath to purge the wicked.',
          abilities: [
            { name: 'Templar\'s Verdict', icon: 'spell_paladin_templarsverdict', desc: 'Powerful single-target Holy Power spender.' },
            { name: 'Divine Storm', icon: 'ability_paladin_divinestorm', desc: 'AoE Holy Power spender that heals party members.' },
            { name: 'Hand of Hindrance', icon: 'spell_holy_sealofwisdom', desc: 'Burden the enemy with the weight of their sins (Slow).' }
          ]
        }
      ]
    },
    priest: {
      name: 'Priest',
      title: 'The Duality of Faith',
      icon: <BookOpen className="w-6 h-6" />,
      crest: "https://warcraft.wiki.gg/images/ClassIcon_priest.png?55e800",
      color: 'text-white',
      borderColor: 'border-gray-400',
      bgGradient: 'from-gray-800/80 to-black',
      masterwork: {
        name: 'Evangelism',
        desc: 'The **Evangelism** system is a powerful **"setup-and-payoff"** mechanic that provides a much-needed burst window for all three specs, rewarding sustained, skillful gameplay with a surge of spiritual power. It addresses the need for powerful, controlled cooldowns beyond simple throughput.',
        mechanic: 'Generation: Casting Flash Heal/Greater Heal (Light) or DoT Ticks (Shadow) grants stacks of Evangelism (max 5). \n\n**Payoff (1m CD):** \n**Archangel (Healer):** Consumes 5 stacks to restore **25% mana** and increase healing done by **15% for 10s**. \n**Dark Archangel (Shadow):** Consumes 5 stacks to deal burst damage and increase all Shadow damage by **20% for 12s**.',
      },
      customization: {
        title: "Vestments of Faith",
        desc: "Priests can choose the source of their power, dramatically altering the visuals of their healing and shadow magic.",
        options: [
          { name: "Moon Priestess", icon: "spell_nature_starfall", desc: "Holy spells are silver and lunar-themed (Elune)." },
          { name: "Scarlet Crusader", icon: "spell_holy_searinglight", desc: "Smite and Holy Fire burn with righteous red fanaticism." },
          { name: "Cult of the Damned", icon: "spell_shadow_shadowpact", desc: "Shadowform is less transparent and more skeletal/icy." }
        ]
      },
      pinnacleQuest: {
        name: "Balance of Light & Shadow",
        reward: "Anathema & Benediction",
        icon: "inv_staff_30",
        desc: "Restore the broken staff of the priesthood. Grants a weapon that transforms between Holy and Shadow modes."
      },
      races: ['Human', 'Dwarf', 'Night Elf', 'Draenei', 'Undead', 'Troll', 'Blood Elf', 'Goblin', 'High Elf'],
      specs: [
        {
          name: 'Discipline',
          icon: 'https://i.imgur.com/yKNBawv.png',
          title: 'Proactive Bulwark',
          fantasy: 'Preventing damage before it happens through disciplined shielding and atonement.',
          abilities: [
            { name: 'Penance', icon: 'spell_holy_penance', desc: 'Channels holy light to heal or damage.' },
            { name: 'Power Word: barrier', icon: 'spell_holy_powerwordbarrier', desc: 'Creates a dome of light that reduces damage.' },
            { name: 'Rapture', icon: 'spell_holy_rapture', desc: 'Refunds mana when shields break.' }
          ]
        },
        {
          name: 'Holy',
          icon: 'https://i.imgur.com/2JfVmju.png',
          title: 'Reactive Wellspring',
          fantasy: 'A miracle worker who creates fonts of healing light to restore the fallen.',
          abilities: [
            { name: 'Divine Hymn', icon: 'spell_holy_divinehymn', desc: 'Powerful channeled raid-heal.' },
            { name: 'Guardian Spirit', icon: 'spell_holy_guardianspirit', desc: 'Prevents death and boosts healing.' },
            { name: 'Holy Word: Serenity', icon: 'spell_holy_persuitofjustice', desc: 'Instant, massive single-target heal.' }
          ]
        },
        {
          name: 'Shadow',
          icon: 'https://i.imgur.com/cgUNFcU.png',
          title: 'Void Ascendant',
          fantasy: 'Using the maddening power of the void to rot enemies\' minds and devour their essence.',
          abilities: [
            { name: 'Shadowfiend', icon: 'spell_shadow_shadowfiend', desc: 'Summon a void creature to restore mana.' },
            { name: 'Dispersion', icon: 'spell_shadow_dispersion', desc: 'Dissolve into shadow, mitigating damage.' },
            { name: 'Devouring Plague', icon: 'spell_shadow_devouringplague', desc: 'Now a baseline DoT for all Shadow Priests.' }
          ]
        }
      ]
    },
    rogue: {
      name: 'Rogue',
      title: 'The Unseen Blade',
      icon: <Sword className="w-6 h-6" />,
      crest: "https://warcraft.wiki.gg/images/ClassIcon_rogue.png?3cfde1",
      color: 'text-yellow-400',
      borderColor: 'border-yellow-600',
      bgGradient: 'from-yellow-900/80 to-black',
      masterwork: {
        name: 'Ruthless Efficiency',
        desc: '**Passive: Fluidity** \nCombo Points are now bound to the Rogue, not the target. You do not lose Combo Points when switching targets or when a target dies.',
        mechanic: '**Active: Cunning Maneuver** \n**Instant | 20 sec Cooldown** \nAdapts to your primary specialization. Executes a specialized technique designed to exploit enemy weaknesses. \n\n☠️ **Assassination: Toxic Shiv** (15 Energy | 1 CP). Off-hand lunge dealing Nature damage. Applies 5 stacks of Deadly Poison. If already at 5, consumes them for instant Burst damage. \n\n⚔️ **Combat: Cross-Cut** (20 Energy | 1 CP/hit). Sweeping strike that hits your primary target and up to 2 nearby enemies for 100% weapon damage. \n\n👻 **Subtlety: Shadow Play** (No Cost). Fade partially into shadows. For the next 3 seconds, your abilities can be used as if you were Stealthed, even while in combat.',
      },
      customization: {
        title: "Tools of the Trade",
        desc: "Rogues can now customize the visual flair of their stealth, poisons, and movement abilities.",
        options: [
          { name: "Smoke Bomb", icon: "ability_rogue_smoke", desc: "Vanish leaves a cloud of smoke instead of simple transparency." },
          { name: "Venom Drip", icon: "ability_rogue_dualweild", desc: "Weapons visibly drip with green or purple poison." },
          { name: "Shadow Clone", icon: "spell_shadow_nethercloak", desc: "Sprint leaves behind shadowy after-images." }
        ]
      },
      pinnacleQuest: {
        name: "The Shadowy Deal",
        reward: "Fangs of the Father",
        icon: "inv_weapon_shortblade_11",
        desc: "Infiltrate Ravenholdt Manor and uncover the traitor to earn the legendary daggers, Fangs of the Father."
      },
      races: ['Human', 'Dwarf', 'Night Elf', 'Gnome', 'Orc', 'Undead', 'Troll', 'Blood Elf', 'Goblin', 'High Elf', 'Saberon', 'Broken', 'Wildhammer'],
      specs: [
        {
          name: 'Assassination',
          icon: 'https://wowmeta.com/_app/immutable/assets/classic-rogue-assassination.BssFEmMX.png',
          title: 'Master Poisoner',
          fantasy: 'A deadly master of poisons, ensuring the target dies slowly and painfully.',
          abilities: [
            { name: 'Vendetta', icon: 'ability_rogue_deadliness', desc: 'Marks target for death, boosting damage.' },
            { name: 'Envenom', icon: 'ability_rogue_disembowel', desc: 'Consumes poison for massive Nature damage.' },
            { name: 'Fan of Knives', icon: 'ability_rogue_fanofknives', desc: 'Spray knives at all nearby enemies.' }
          ]
        },
        {
          name: 'Combat',
          icon: 'https://wowmeta.com/_app/immutable/assets/rogue.BcZrWFcx.png',
          title: 'Relentless Swashbuckler',
          fantasy: 'A face-to-face duelist who fights with agility, parries, and dirty tricks.',
          abilities: [
            { name: 'Killing Spree', icon: 'ability_rogue_murderspree', desc: 'Step through shadows to strike enemies instantly.' },
            { name: 'Blade Flurry', icon: 'ability_warrior_punishingblow', desc: 'Toggle ability to strike a second nearby target.' },
            { name: 'Revealing Strike', icon: 'inv_sword_97', desc: 'Exposes defenses, increasing finisher effectiveness.' }
          ]
        },
        {
          name: 'Subtlety',
          icon: 'https://wowmeta.com/_app/immutable/assets/rogue.BcZrWFcx.png',
          title: 'Shadow Stalker',
          fantasy: 'A phantom that strikes from the dark, utilizing stealth in the heat of battle.',
          abilities: [
            { name: 'Shadow Dance', icon: 'ability_rogue_shadowdance', desc: 'Allows use of Stealth abilities while in combat.' },
            { name: 'Shadowstep', icon: 'ability_rogue_shadowstep', desc: 'Teleport behind your target and gain speed.' },
            { name: 'Shuriken Toss', icon: 'ability_rogue_throwingshuriken', desc: 'Ranged combo point generator.' }
          ]
        }
      ]
    },
    shaman: {
      name: 'Shaman',
      title: 'The Primal Conduit',
      icon: <Zap className="w-6 h-6" />,
      crest: "https://warcraft.wiki.gg/images/ClassIcon_shaman.png?fa2e62",
      color: 'text-blue-600',
      borderColor: 'border-blue-600',
      bgGradient: 'from-blue-900/80 to-black',
      masterwork: {
        name: 'Call of the Elements',
        desc: 'This is a complete baseline overhaul of the Totem system, solving the "turret" problem of being chained to the ground by a clunky setup and long cast times. It allows the Shaman to feel like a master of the elements, not a clumsy setup-artist.',
        mechanic: '**Totem Deployment QoL:** \n**Call of the Elements (Baseline):** Instantly places **all four totems** (one of each element) at your feet **in a single global cooldown**. \n**Totemic Recall (Baseline):** Refunds **75% of the mana cost**. \n**Totemic Projection (Talent):** Projects your active totems up to **40 yards away**. \n\n**Primal Bloodlust/Heroism:** The ultimate ability now grants a powerful, spec-specific rider (e.g., Elemental = **Mana Reduction**, Enhancement = **Movement Speed/Damage Proc**, Restoration = **Healing Buffer**).',
      },
      customization: {
        title: "Totemic Carvings",
        desc: "Shamans can now carve their own totems, changing their appearance to match their race or the elements they command.",
        options: [
          { name: "Racial Totems", icon: "spell_nature_stoneclawtotem", desc: "Trolls get Voodoo masks, Orcs get axes/skulls, Tauren get carved logs, Draenei get crystals." },
          { name: "Elemental Ascendance", icon: "spell_fire_elementaldevastation", desc: "Ascendance form now turns you into a pure elemental of your specialized type." },
          { name: "Ghost Wolf Skins", icon: "spell_nature_spiritwolf", desc: "Unlock Spectral Raptor (Troll) or Talbuk (Draenei) forms." }
        ]
      },
      pinnacleQuest: {
        name: "Echoes of the Elements",
        reward: "Totem of the Earthen Ring",
        icon: "inv_relics_totemoftheelems",
        desc: "Unite the four elemental lords to earn the Totem of the Earthen Ring, a back-worn totem that boosts your elemental bond."
      },
      races: ['Draenei', 'Orc', 'Tauren', 'Troll', 'Ogre', 'Saberon', 'Broken', 'Wildhammer'],
      specs: [
        {
          name: 'Elemental',
          icon: 'https://i.imgur.com/8ChsJBV.png',
          title: 'The Stormcaller',
          fantasy: 'A conduit of storm and earth, hurling lava and lighting to obliterate foes.',
          abilities: [
            { name: 'Lava Burst', icon: 'spell_shaman_lavaburst', desc: 'Guaranteed crit on Flame Shocked targets.' },
            { name: 'Thunderstorm', icon: 'spell_shaman_thunderstorm', desc: 'Knockback nearby enemies and restore mana.' },
            { name: 'Earthquake', icon: 'spell_shaman_earthquake', desc: 'Topple enemies in a large area with tremors.' }
          ]
        },
        {
          name: 'Enhancement',
          icon: 'https://i.imgur.com/38aMS1Y.png',
          title: 'The Storm-Warrior',
          fantasy: 'Imbuing weapons with elemental power to strike down foes with primal fury.',
          abilities: [
            { name: 'Lava Lash', icon: 'ability_shaman_lavalash', desc: 'Strike with your off-hand charged with fire.' },
            { name: 'Feral Spirits', icon: 'spell_shaman_feralspirit', desc: 'Summon spirit wolves to fight by your side.' },
            { name: 'Maelstrom Weapon', icon: 'spell_shaman_maelstromweapon', desc: 'Instant spells after building stacks from melee.' }
          ]
        },
        {
          name: 'Restoration',
          icon: 'https://i.imgur.com/2msDhl4.png',
          title: 'The Spirit-Healer',
          fantasy: 'Using the cleansing power of water to heal allies and wash away wounds.',
          abilities: [
            { name: 'Riptide', icon: 'spell_nature_riptide', desc: 'Instant heal that leaves a HoT.' },
            { name: 'Spirit Link Totem', icon: 'spell_shaman_spiritlink', desc: 'Reduces raid damage by equalizing health.' },
            { name: 'Healing Rain', icon: 'spell_nature_starfall', desc: 'Area of effect healing shower.' }
          ]
        }
      ]
    },
    warlock: {
      name: 'Warlock',
      title: 'The Dark Harvester',
      icon: <Skull className="w-6 h-6" />,
      crest: "https://warcraft.wiki.gg/images/ClassIcon_warlock.png?2afb06",
      color: 'text-purple-500',
      borderColor: 'border-purple-600',
      bgGradient: 'from-purple-900/80 to-black',
      masterwork: {
        name: 'The Soul Harvest',
        desc: 'This system completely overhauls the **Soul Shard** mechanic, turning it from a bag-clogging chore (a farmed item) into the beating, fel-green heart of the Warlock\'s combat loop (a UI resource). This liberates the Warlock to use their best utility without gritting their teeth.',
        mechanic: '**Resource QoL:** \n**Shards are a 3-point UI resource.** All non-combat utility (Soulstone, Healthstone, Summon) is now **FREE**. \n\n**In-Combat Generation:** Shards are generated via spec-specific rotations (DoT Ticks, Crits, Drain Soul execute). \n**Spenders (Cost 1 Shard):** \n**Affliction:** **Haunt** (Burst setup). \n**Demonology:** **Demonic Empowerment** (Pet burst). \n**Destruction:** **Chaos Bolt** (Signature nuke).',
      },
      customization: {
        title: " Grimoire of Supremacy",
        desc: "Warlocks can perform rituals to enslave more powerful demons, permanently replacing their standard minions.",
        options: [
          { name: "The Observer", icon: "spell_shadow_summonfelhunter", desc: "Replaces the Felhunter. A floating many-eyed horror." },
          { name: "The Shivarra", icon: "spell_shadow_summonsuccubus", desc: "Replaces the Succubus. A six-armed blade mistress." },
          { name: "The Voidlord", icon: "spell_shadow_summonvoidwalker", desc: "Replaces the Voidwalker. An armored void colossus." }
        ]
      },
      pinnacleQuest: {
        name: "The Codex of Xerrath",
        reward: "Green Fire (Fel-Infused)",
        icon: "spell_fire_felfire",
        desc: "Hunt down the Council of the Black Harvest to absorb the fel power of Xerrath, permanently turning your fire spells green."
      },
      races: ['Human', 'Gnome', 'Orc', 'Undead', 'Blood Elf', 'Goblin', 'Ogre', 'Broken'],
      specs: [
        {
          name: 'Affliction',
          icon: 'https://i.imgur.com/ZAsJNiE.jpeg',
          title: 'The Soul-Harvester',
          fantasy: 'A master of curses who drains the victim\'s life force until they are a husk.',
          abilities: [
            { name: 'Haunt', icon: 'ability_warlock_haunt', desc: 'Ghostly soul that increases DoT damage.' },
            { name: 'Soul Swap', icon: 'ability_warlock_soulswap', desc: 'Instantly moves your DoTs to a new target.' },
            { name: 'Malefic Grasp', icon: 'ability_warlock_everlastingaffliction', desc: 'Channel that accelerates your DoT ticks.' }
          ]
        },
        {
          name: 'Demonology',
          icon: 'https://i.imgur.com/iGZVgov.png',
          title: 'The Demonic Commander',
          fantasy: 'Commanding a legion of demons and embracing fel power to become a demon yourself.',
          abilities: [
            { name: 'Metamorphosis', icon: 'spell_shadow_demonform', desc: 'Transform into a Demon, gaining armor and abilities.' },
            { name: 'Hand of Gul\'dan', icon: 'ability_warlock_handofguldan', desc: 'Call down a meteor that summons Wild Imps.' },
            { name: 'Demonic Empowerment', icon: 'ability_warlock_demonicpower', desc: 'Buff your active demon with haste and health.' }
          ]
        },
        {
          name: 'Destruction',
          icon: 'https://i.imgur.com/67hJXkU.png',
          title: 'The Fel-Fire Annihilator',
          fantasy: 'Unleashing chaos and fire to incinerate everything in a storm of destruction.',
          abilities: [
            { name: 'Chaos Bolt', icon: 'ability_warlock_chaosbolt', desc: 'Massive damage projectile that pierces shields.' },
            { name: 'Havoc', icon: 'ability_warlock_baneofhavoc', desc: 'Copy spells to a second target for cleave.' },
            { name: 'Conflagrate', icon: 'spell_fire_fireball', desc: 'Instant burst that consumes Immolate for haste.' }
          ]
        }
      ]
    },
    warrior: {
      name: 'Warrior',
      title: 'The Unbroken',
      icon: <Shield className="w-6 h-6" />,
      crest: "https://warcraft.wiki.gg/images/ClassIcon_warrior.png?2c4dad",
      color: 'text-red-600',
      borderColor: 'border-red-700',
      bgGradient: 'from-red-900/80 to-black',
      masterwork: {
        name: 'Rage & Steel',
        desc: '**Passive: Stance Mastery** \nYou retain up to 25 Rage when changing stances. Additionally, Charge is no longer restricted to out-of-combat use.',
        mechanic: '**Active: Battle Focus** \n**Instant | 30 sec Cooldown** \nAdapts to your current Stance. Heightens your combat senses to perform a specialized maneuver. \n\n⚔️ **Battle Stance (Arms): Calculated Strike** (No Cost). Instantly activates Overpower (no dodge required). Costs no Rage and cannot be blocked, dodged, or parried. \n\n🩸 **Berserker Stance (Fury): Bloodsurge** (No Cost). For the next 6 seconds, your Slam ability becomes instant cast and does not pause your main-hand swing timer. \n\n🛡️ **Defensive Stance (Protection): Vanguard\'s Momentum** (Gen 10 Rage). Instantly resets the cooldowns of Shield Slam and Revenge, allowing for immediate threat generation.',
      },
      customization: {
        title: "War Banners",
        desc: "Warriors can now carry a visible banner on their back that persists through combat, rallying their allies.",
        options: [
          { name: "High Warlord's Flag", icon: "inv_banner_02", desc: "A tattered Horde banner with spikes." },
          { name: "Grand Marshal's Standard", icon: "inv_banner_01", desc: "A pristine Alliance standard with gold trim." },
          { name: "Burning Legion Trophy", icon: "inv_banner_03", desc: "A fel-touched banner torn from a demon commander." }
        ]
      },
      pinnacleQuest: {
        name: "Forging of Quel'Serrar",
        reward: "Quel'Serrar, Might of the Highblade",
        icon: "inv_sword_42",
        desc: "Recover the battered blade and temper it in the breath of Onyxia to restore the Highblade."
      },
      races: ['Human', 'Dwarf', 'Night Elf', 'Gnome', 'Draenei', 'Orc', 'Undead', 'Tauren', 'Troll', 'Goblin', 'Ogre', 'Saberon', 'Wildhammer'],
      specs: [
        {
          name: 'Arms',
          icon: 'https://i.imgur.com/tgSiYFd.png',
          title: 'The Battlefield Tactician',
          fantasy: 'The master of two-handed weapons and heavy trauma, dominating the frontline.',
          abilities: [
            { name: 'Banner of the Iron Legion', icon: 'inv_banner_03', desc: 'Plants a banner granting 20% Armor Pen to party.' },
            { name: 'Bladestorm', icon: 'ability_warrior_bladestorm', desc: 'Unstoppable area damage spin.' },
            { name: 'Colossus Smash', icon: 'ability_warrior_colossussmash', desc: 'Smashes defenses, bypassing armor.' }
          ]
        },
        {
          name: 'Fury',
          icon: 'https://i.imgur.com/wJbmNeR.png',
          title: 'The Unstoppable Berserker',
          fantasy: 'A dual-wielding whirlwind of rage and steel, attacking with reckless abandon.',
          abilities: [
            { name: 'Banner of the Bloodthirst', icon: 'inv_banner_02', desc: 'Plants a banner granting 20% Haste to party.' },
            { name: 'Titan\'s Grip', icon: 'ability_warrior_titansgrip', desc: 'Dual-wield two-handed weapons.' },
            { name: 'Rampage', icon: 'ability_warrior_rampage', desc: 'Enrage state increasing damage dealt.' }
          ]
        },
        {
          name: 'Protection',
          icon: 'https://i.imgur.com/FhuhqTX.png',
          title: 'The Battlefield Commander',
          fantasy: 'The immovable object, a wall of iron and will that protects allies.',
          abilities: [
            { name: 'Banner of the Bulwark', icon: 'inv_banner_01', desc: 'Plants a banner that Mocks all enemies for 6s.' },
            { name: 'Shockwave', icon: 'ability_warrior_shockwave', desc: 'Cone stun and damage.' },
            { name: 'Avatar', icon: 'spell_nature_stoneclawtotem', desc: 'Transform into stone, removing CC and boosting dmg.' }
          ]
        }
      ]
    },
  };

  // --- VISUAL ASSETS & HELPERS ---
  const raceIcons = {
    'Human': 'https://warcraft.wiki.gg/images/thumb/a/a2/Ui-charactercreate-races_human-male.png/64px-Ui-charactercreate-races_human-male.png',
    'Dwarf': 'https://warcraft.wiki.gg/images/thumb/e/e0/Ui-charactercreate-races_dwarf-male.png/64px-Ui-charactercreate-races_dwarf-male.png',
    'Night Elf': 'https://warcraft.wiki.gg/images/thumb/0/00/Ui-charactercreate-races_nightelf-male.png/64px-Ui-charactercreate-races_nightelf-male.png',
    'Gnome': 'https://warcraft.wiki.gg/images/thumb/2/22/Ui-charactercreate-races_gnome-male.png/64px-Ui-charactercreate-races_gnome-male.png',
    'Draenei': 'https://wow.zamimg.com/images/wow/icons/large/race_draenei_male.jpg',
    'Orc': 'https://warcraft.wiki.gg/images/thumb/5/53/Ui-charactercreate-races_orc-male.png/64px-Ui-charactercreate-races_orc-male.png',
    'Undead': 'https://wow.zamimg.com/images/wow/icons/large/race_scourge_male.jpg',
    'Tauren': 'https://warcraft.wiki.gg/images/thumb/2/23/Ui-charactercreate-races_tauren-male.png/64px-Ui-charactercreate-races_tauren-male.png',
    'Troll': 'https://warcraft.wiki.gg/images/thumb/c/c5/Ui-charactercreate-races_troll-male.png/64px-Ui-charactercreate-races_troll-male.png',
    'Blood Elf': 'https://wow.zamimg.com/images/wow/icons/large/race_bloodelf_male.jpg',
    'Goblin': 'https://wow.zamimg.com/images/wow/icons/large/race_goblin_male.jpg',
    'High Elf': 'https://wow.zamimg.com/images/wow/icons/large/race_bloodelf_male.jpg',
    'Ogre': 'https://i.imgur.com/DgEuQYV.png',
    'Saberon': 'https://i.imgur.com/ozJwhB2.png',
    'Broken': 'https://wow.zamimg.com/images/wow/icons/large/race_draenei_male.jpg',
    'Wildhammer': 'https://i.imgur.com/M6nFkwe.png'
  };

  const getRoleIcon = (name) => {
    // Simple heuristic for roles based on spec names
    const tanks = ['Protection', 'Guardian', 'Blood', 'Brewmaster', 'Vengeance'];
    const healers = ['Holy', 'Restoration', 'Mistweaver', 'Discipline'];
    if (tanks.some(t => name.includes(t))) return <Shield className="w-3 h-3 text-blue-400" />;
    if (healers.some(h => name.includes(h))) return <Heart className="w-3 h-3 text-green-400" />;
    return <Sword className="w-3 h-3 text-red-400" />; // DPS default
  };

  const RaceMatrix = ({ availableRaces }) => (
    <div className="mb-6">
      <h4 className="font-hero text-[10px] uppercase tracking-widest text-gray-500 mb-2">Available Races</h4>
      <div className="flex flex-wrap gap-2">
        {availableRaces && availableRaces.map(race => (
          <div key={race} className="group relative">
            <img
              src={raceIcons[race]}
              alt={race}
              className="w-8 h-8 rounded border border-white/10 group-hover:border-white/50 transition-colors bg-black object-cover"
            />
            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black px-2 py-1 rounded text-[10px] uppercase tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 border border-white/10">
              {race}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ResourcePreview = ({ className, color }) => {
    if (className === 'Paladin') {
      return (
        <div className="flex gap-2 justify-center my-4 p-4 bg-black/20 rounded-lg border border-white/5">
          <div className="w-8 h-8 bg-yellow-400/20 border border-yellow-400 rounded rotate-45 animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
          <div className="w-8 h-8 bg-yellow-400/20 border border-yellow-400 rounded rotate-45 animate-pulse delay-100 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
          <div className="w-8 h-8 bg-black/40 border border-gray-600 rounded rotate-45"></div>
          <span className="ml-4 font-hero text-xs text-yellow-400 self-center uppercase tracking-widest">Holy Power System</span>
        </div>
      );
    }
    if (className === 'Warlock') {
      return (
        <div className="flex gap-2 justify-center my-4 p-4 bg-black/20 rounded-lg border border-white/5">
          <div className="w-6 h-10 bg-purple-600/40 border border-purple-500 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)]"></div>
          <div className="w-6 h-10 bg-purple-600/40 border border-purple-500 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)]"></div>
          <div className="w-6 h-10 bg-purple-600/40 border border-purple-500 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)]"></div>
          <span className="ml-4 font-hero text-xs text-purple-400 self-center uppercase tracking-widest">Soul Shards (UI)</span>
        </div>
      );
    }
    if (className === 'Hunter') {
      return (
        <div className="my-4 p-4 bg-black/20 rounded-lg border border-white/5">
          <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-600 relative">
            <div className="absolute top-0 left-0 h-full w-3/4 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-black/50"></div> {/* Tick mark */}
          </div>
          <div className="flex justify-between mt-1 px-1">
            <span className="font-hero text-[10px] text-orange-400 uppercase tracking-widest">0</span>
            <span className="font-hero text-[10px] text-orange-400 uppercase tracking-widest">Focus Resource</span>
            <span className="font-hero text-[10px] text-orange-400 uppercase tracking-widest">100</span>
          </div>
        </div>
      );
    }
    return null;
  };

  const TierSetGallery = ({ className }) => (
    <div className="mt-8 pt-6 border-t border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-hero text-sm text-gray-400 uppercase tracking-widest">Tier Set Evolution</h4>
        <span className="text-[10px] text-gray-500 bg-black/40 px-2 py-1 rounded">Mouse over to preview</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['Tier 4', 'Tier 5', 'Tier 6.5'].map((tier, i) => (
          <div key={i} className="group relative aspect-[3/4] bg-black/40 rounded border border-white/10 overflow-hidden hover:border-[#c29c55] transition-colors cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-hero text-xs uppercase group-hover:text-[#c29c55] text-center px-2">
              {tier} Visual
            </div>
            {/* Note: In a real app, we would load actual images here. For now, placeholders/text overlay. */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-2">
              <div className="text-[10px] text-gray-400 text-center">{tier}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- COMPARE MODE STATE ---
  const [compareMode, setCompareMode] = useState(false);
  const [compareClass, setCompareClass] = useState('shaman');

  const activeData = classes[activeClass];


  // --- HELPER FUNCTIONS ---
  const getClassUtility = (name) => {
    const utils = {
      'Druid': ['Battle Rez (Rebirth)', 'Mark of the Wild', 'Innervate'],
      'Hunter': ['Misdirection', 'Expose Weakness', 'Traps (CC)'],
      'Mage': ['Polymorph (CC)', 'Intellect Buff', 'Food/Water tables'],
      'Paladin': ['Auras (Devotion/Retribution)', 'Blessing of Kings/Might', 'Battle Rez (Ret)'],
      'Priest': ['Power Word: Fortitude', 'Mass Dispel', 'Fear Ward'],
      'Rogue': ['Shroud of Concealment', 'Tricks of the Trade', 'Numbing Poison (Slow)'],
      'Shaman': ['Bloodlust (Heroism)', 'Windfury Totem', 'Reincarnation (Ankh)'],
      'Warlock': ['Healthstones', 'Summoning Portal', 'Soulstone (Brez)', 'Demonic Pact'],
      'Warrior': ['Battle Shout (AP)', 'Commanding Shout (HP)', 'Blood Frenzy', 'Banners (Spec)'],
    };
    return utils[name] || [];
  };

  const getSynergy = (name) => {
    const syns = {
      'Druid': 'Best paired with Rogues (Stealth) or Warlocks (DoT Amplification).',
      'Hunter': 'Synergizes with Feral Druids (Bleeds) and Enhancement Shamans.',
      'Mage': 'Best paired with Warlocks (Caster Cleave) or Shadow Priests.',
      'Paladin': 'Strong synergy with Warriors (Freedom) and DKs.',
      'Priest': 'Works well with Mages (PI) and Rogues (Fear peels).',
      'Rogue': 'Excel with Mages (Control) or Druids (Stealth checks).',
      'Shaman': 'Essential for Melee cleaves (Windfury) and Caster groups (Skyfury).',
      'Warlock': 'Synergizes with Shadow Priests (Shadow Dmg) and Boomkins.',
      'Warrior': 'Best paired with Paladins (Dispel/Freedom) or Shamans (WF).',
    };
    return syns[name] || 'Adaptable to any composition.';
  };

  const getNotableHeroes = (name) => {
    const heroes = {
      'Druid': ['Malfurion Stormrage', 'Hamuul Runetotem', 'Zen\'kiki'],
      'Hunter': ['Rexxar', 'Hemet Nesingwary', 'Vereesa Windrunner'],
      'Mage': ['Jaina Proudmoore', 'Khadgar', 'Medivh'],
      'Paladin': ['Turalyon', 'Lady Liadrin', 'Uther the Lightbringer'],
      'Priest': ['Tyrande Whisperwind', 'Prophet Velen', 'Anduin Wrynn'],
      'Rogue': ['Valeera Sanguinar', 'Garona Halforcen', 'Edwin VanCleef'],
      'Shaman': ['Thrall', 'Nobundo', 'Rehgar Earthfury'],
      'Warlock': ['Gul\'dan', 'Cho\'gall', 'Wilfred Fizzlebang'],
      'Warrior': ['Varian Wrynn', 'Garrosh Hellscream', 'Broxigar'],
    };
    return heroes[name] || [];
  };

  // --- SUB-COMPONENT: PINNACLE QUEST TEASER ---
  const ClassQuestTeaser = ({ quest, color }) => {
    if (!quest) return null;
    return (
      <div className="mt-8 relative group cursor-pointer overflow-hidden rounded-xl border border-[#c29c55]/30 bg-black">
        {/* Background Image (Placeholder or specific) */}
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/X2D1sO5.jpeg')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-700 transform group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          {/* Reward Icon/Model Preview */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-lg border-2 border-[#c29c55] shadow-[0_0_20px_rgba(194,156,85,0.3)] overflow-hidden bg-black/50">
              <img
                src={`https://wow.zamimg.com/images/wow/icons/large/${quest.icon}.jpg`}
                alt={quest.reward}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'; }}
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[#c29c55] text-black text-[10px] font-bold px-2 py-1 rounded border border-white/20">
              EPIC
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Crown className="w-4 h-4 text-[#c29c55]" />
              <h4 className="font-hero text-xs text-[#c29c55] uppercase tracking-[0.2em]">Pinnacle Questline</h4>
            </div>
            <h3 className="font-hero text-2xl text-white mb-2">{quest.name}</h3>
            <p className="text-sm text-gray-400 font-body italic leading-relaxed max-w-lg">
              "{quest.desc}"
            </p>
            <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
              <span className="text-xs text-gray-500 uppercase tracking-widest">Reward:</span>
              <span className={`text-sm font-bold ${color}`}>{quest.reward}</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="shrink-0">
            <button className="px-6 py-3 border border-[#c29c55] text-[#c29c55] font-hero text-xs uppercase tracking-widest hover:bg-[#c29c55] hover:text-black transition-all rounded">
              Begin Journey
            </button>
          </div>
        </div>
      </div>
    );
  };

  // --- SUB-COMPONENT: CLASS DETAIL VIEW ---
  const ClassDetailView = ({ data, isCompare = false, onSelectClass }) => {
    if (!data) return null;

    return (
      <div className={`animate-fade-in ${isCompare ? 'text-xs' : ''}`}>

        {/* Comparison Selector */}
        {isCompare && onSelectClass && (
          <div className="mb-4">
            <select
              value={compareClass}
              onChange={(e) => onSelectClass(e.target.value)}
              className="w-full bg-[#111] border border-[#333] text-white p-2 rounded font-hero uppercase"
            >
              {Object.entries(classes).map(([key, cls]) => (
                <option key={key} value={key}>{cls.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Hero Banner with Crest */}
        <div className={`relative rounded-xl overflow-hidden border ${data.borderColor} ${isCompare ? 'p-6' : 'p-8 md:p-12'} mb-8 rune-border`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${data.bgGradient} opacity-20`}></div>
          <div className="absolute inset-0 paper-texture opacity-50 mix-blend-overlay"></div>

          <div className="relative z-10">
            <div className={`flex flex-col ${isCompare ? 'items-center text-center' : 'md:flex-row gap-8 items-center md:items-start text-center md:text-left'}`}>
              <div className={`rounded-full border-2 ${data.borderColor} bg-black/60 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden shrink-0`}>
                <img
                  src={data.crest}
                  alt={`${data.name} Crest`}
                  className={`${isCompare ? 'w-20 h-20' : 'w-32 h-32'} object-contain p-2`}
                />
              </div>
              <div>
                <h2 className={`font-hero ${isCompare ? 'text-3xl mt-4' : 'text-5xl md:text-6xl'} text-[#c29c55] mb-2 drop-shadow-lg`}>
                  {data.name}
                </h2>
                <p className={`font-hero ${isCompare ? 'text-sm' : 'text-xl'} ${data.color} uppercase tracking-widest mb-6`}>
                  {data.title}
                </p>

                {!isCompare && (
                  <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
                    <button
                      onClick={() => setPage('talents')}
                      className={`flex items-center gap-2 px-4 py-2 rounded border border-white/20 bg-white/5 hover:bg-white/10 hover:border-${data.color.split('-')[1]}-500 transition-all text-xs font-hero tracking-wider uppercase text-gray-300 hover:text-white`}>
                      <Sword className="w-4 h-4" /> Talents
                    </button>
                    <button
                      onClick={() => setPage('interface')}
                      className={`flex items-center gap-2 px-4 py-2 rounded border border-white/20 bg-white/5 hover:bg-white/10 hover:border-cyan-400 transition-all text-xs font-hero tracking-wider uppercase text-gray-300 hover:text-white`}>
                      <Layout className="w-4 h-4 text-cyan-400" /> UI Theme
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Masterwork */}
        {/* Masterwork & Specs Layout */}

        {/* Specs */}
        {/* --- MAIN LAYOUT GRID --- */}
        <div className={`grid grid-cols-1 ${!isCompare ? 'lg:grid-cols-3' : ''} gap-8`}>

          {/* LEFT COLUMN (Masterwork & Specs) - Spans 2 cols */}
          <div className={`${!isCompare ? 'lg:col-span-2' : ''} space-y-8`}>

            {/* Resource Preview (New Feature) */}
            <ResourcePreview className={data.name} color={data.color} />

            {/* Masterwork */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className={`h-8 w-1 ${data.color.replace('text-', 'bg-')}`}></div>
                <h3 className={`font-hero ${isCompare ? 'text-lg' : 'text-2xl'} text-white tracking-widest`}>
                  Masterwork: <span className={data.color}>{data.masterwork.name}</span>
                </h3>
              </div>

              <div className="bg-[#121212] border border-white/10 p-6 rounded-lg relative overflow-hidden">
                <div className={`absolute top-0 right-0 p-20 rounded-full bg-gradient-to-br ${data.bgGradient} blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2`}></div>
                <div className="relative z-10">
                  <p className={`font-body ${isCompare ? 'text-xs' : 'text-lg'} text-gray-300 leading-relaxed mb-4`}>
                    {formatText(data.masterwork.desc)}
                  </p>
                  <div className="bg-black/40 p-4 border-l-2 border-gray-600 rounded-r-lg">
                    <span className="block font-hero text-[10px] text-gray-500 uppercase tracking-widest mb-2">Core Mechanic</span>
                    <p className="font-body text-gray-400 italic text-xs">
                      {formatText(data.masterwork.mechanic)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specs */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`h-8 w-1 ${data.color.replace('text-', 'bg-')}`}></div>
                <h3 className={`font-hero ${isCompare ? 'text-xl' : 'text-2xl'} text-white tracking-widest`}>Specializations</h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {data.specs.map((spec, idx) => (
                  <div key={idx} className="group relative p-6 bg-[#121212] border border-white/10 rounded-lg hover:border-white/20 transition-all">
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${data.bgGradient} opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                    <div className="mb-4">
                      <div className="flex justify-between items-start">
                        <h4 className={`font-hero ${isCompare ? 'text-lg' : 'text-2xl'} text-white mb-1 flex items-center gap-3`}>
                          <img src={spec.icon} className="w-8 h-8 object-contain rounded" alt="" />
                          {spec.name}
                        </h4>
                        <div className="px-2 py-1 bg-black/50 rounded border border-white/5 flex items-center gap-2">
                          {getRoleIcon(spec.name)}
                        </div>
                      </div>
                      <span className={`font-hero text-[10px] ${data.color} uppercase tracking-wider`}>{spec.title}</span>
                    </div>

                    <p className="text-gray-400 text-xs mb-4 italic leading-relaxed pl-4 border-l-2 border-white/10">
                      "{spec.fantasy}"
                    </p>

                    <div className="space-y-3">
                      {spec.abilities.map((ability, i) => (
                        <div key={i} className="flex gap-3 items-start p-2 bg-black/20 rounded border border-white/5 hover:border-white/10 transition-colors">
                          <img
                            src={`https://wow.zamimg.com/images/wow/icons/large/${ability.icon}.jpg`}
                            alt={ability.name}
                            className="w-8 h-8 rounded border border-white/20 object-cover"
                            onError={(e) => { e.target.src = 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'; }}
                          />
                          <div>
                            <div className={`text-xs font-bold text-gray-200 group-hover:${data.color}`}>{ability.name}</div>
                            <div className="text-[10px] text-gray-400 leading-tight mt-1">{ability.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Sidebar) - Spans 1 col */}
          <div className="space-y-8">

            {/* Race Matrix */}
            <div className="bg-[#121212] border border-white/10 p-6 rounded-lg">
              <RaceMatrix availableRaces={data.races} />

              {/* Raid Utility */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-hero text-sm text-gray-400 uppercase tracking-widest mb-4">Raid Utility</h4>
                <ul className="space-y-2">
                  {getClassUtility(data.name).map((util, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <Zap className="w-3 h-3 text-[#c29c55]" /> {util}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Synergy */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-hero text-sm text-gray-400 uppercase tracking-widest mb-2">Synergy</h4>
                <p className="text-xs text-gray-400 italic">
                  "{getSynergy(data.name)}"
                </p>
              </div>

              {/* Notable Heroes */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-hero text-sm text-gray-400 uppercase tracking-widest mb-2">Notable Heroes</h4>
                <div className="flex flex-wrap gap-2">
                  {getNotableHeroes(data.name).map((hero, i) => (
                    <span key={i} className="text-xs text-gray-300 bg-black/40 px-2 py-1 rounded border border-white/5">{hero}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Customization Preview */}
            {data.customization && (
              <div className="bg-[#121212] border border-white/10 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className={data.color}><Sparkles className="w-4 h-4" /></span>
                  <h4 className="font-hero text-sm text-white uppercase tracking-widest">{data.customization.title}</h4>
                </div>
                <p className="text-xs text-gray-400 mb-6">{data.customization.desc}</p>
                <div className="space-y-4">
                  {data.customization.options.map((opt, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-black/20 rounded hover:bg-black/40 transition-colors">
                      <img
                        src={`https://wow.zamimg.com/images/wow/icons/large/${opt.icon}.jpg`}
                        className="w-8 h-8 rounded border border-white/10"
                        alt=""
                        onError={(e) => { e.target.src = 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'; }}
                      />
                      <div>
                        <div className="text-xs font-bold text-gray-200">{opt.name}</div>
                        <div className="text-[10px] text-gray-500">{opt.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tier Sets */}
            <TierSetGallery className={data.name} />

            {/* Pinnacle Quest Teaser */}
            <ClassQuestTeaser quest={data.pinnacleQuest} color={data.color} />

          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-amber-900 selection:text-amber-100" >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .paper-texture {
          background-color: #1a1a1a;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23262626' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        .rune-border {
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 0 0 1px rgba(0,0,0,1), inset 0 0 20px rgba(0,0,0,0.8);
        }
      `}</style>

      {/* --- UNIFIED HEADER --- */}
      <UnifiedHeader
        icon="https://i.imgur.com/I9kB9z6.png"
        background="https://i.imgur.com/X2D1sO5.jpeg"
        section="Class Design Manifest"
        sub="The Heroes of Azeroth"
        title="Hall of Legends"
        quote="New powers awakened. Ancient weaknesses forged into strength."
      />

      <div className="container mx-auto px-4 py-12 lg:flex gap-12">

        {/* --- LEFT COLUMN: CLASS PICKER --- */}
        <aside className="lg:w-1/4 mb-12 lg:mb-0">
          <div className="sticky top-24 max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar">



            {/* Compare Toggle */}
            <button
              onClick={() => setCompareMode(!compareMode)}
              className={`w-full mb-6 py-2 rounded text-xs font-hero uppercase tracking-widest border transition-all ${compareMode ? 'bg-[#c29c55] text-black border-[#c29c55]' : 'bg-transparent text-[#c29c55] border-[#c29c55] hover:bg-[#c29c55]/10'}`}
            >
              {compareMode ? 'Exit Comparison' : 'Compare Classes'}
            </button>

            <h3 className="font-hero text-gray-400 text-sm uppercase tracking-widest mb-6 text-center lg:text-left">
              Select Your Hero Class
            </h3>


            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              {Object.entries(classes).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveClass(key);
                    setSelectedClass(key);
                  }}
                  className={`group flex items-center gap-4 p-3 rounded-lg border transition-all duration-300 ${activeClass === key
                    ? `bg-gradient-to-r ${data.bgGradient} ${data.borderColor} border-l-4`
                    : 'bg-black/40 border-white/5 hover:bg-white/5 hover:border-white/20'
                    }`}
                >
                  <div className={`p-2 rounded-md bg-black/50 ${activeClass === key ? data.color : 'text-gray-500 group-hover:text-gray-300'}`}>
                    <img src={data.crest} alt={data.name} className="w-8 h-8 object-contain" />
                  </div>
                  <span className={`font-hero tracking-wide hidden md:block ${activeClass === key ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {data.name}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </aside>

        {/* --- RIGHT COLUMN: CLASS CONTENT --- */}
        <main className={`lg:w-3/4 animate-fade-in ${compareMode ? 'w-full' : ''}`}>
          {compareMode ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Active Class */}
              <div className="relative">
                <div className="absolute -top-6 left-0 text-xs font-hero text-[#c29c55] uppercase tracking-widest">Primary Selection</div>
                <ClassDetailView data={activeData} isCompare={true} />
              </div>

              {/* Right: Compare Class */}
              <div className="relative">
                <div className="absolute -top-6 left-0 text-xs font-hero text-gray-500 uppercase tracking-widest">Comparison Target</div>
                <ClassDetailView
                  data={classes[compareClass]}
                  isCompare={true}
                  onSelectClass={setCompareClass}
                />
              </div>
            </div>
          ) : (
            <ClassDetailView data={activeData} />
          )}


        </main>
      </div>
    </div >
  );
};

export default HallOfLegends;