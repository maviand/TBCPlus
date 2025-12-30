import React, { useState } from 'react';
import {
  Sword, Shield, Zap, Crosshair, Heart, Skull,
  Activity, Moon, Sun, Droplet, Flame, Snowflake,
  Ghost, Hammer, BookOpen, ArrowLeft, Leaf, Crown
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const HallOfLegends = ({ setPage, setSelectedClass }) => {
  const [activeTab, setActiveTab] = useState('classes'); // 'classes' | 'artifacts'
  const [activeClass, setActiveClass] = useState('druid');
  const [activeArtifact, setActiveArtifact] = useState('ashbringer');

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
      crest: "https://i.imgur.com/t9FOweo.png",
      color: 'text-orange-400',
      borderColor: 'border-orange-500',
      bgGradient: 'from-orange-900/80 to-black',
      masterwork: {
        name: 'Primal Surge',
        desc: '**Masterwork Ability: Primal Surge** \n**Instant | 15 sec Cooldown** \nAdapts to your current shapeshift form. Unleashes the raw aspect of your current form, projecting your power to influence multiple targets at once.',
        mechanic: '🐯 **Cat Form: Primal Wrath** (35 Energy | 1-5 CP). Finishing move that strikes all enemies within 8 yards for instant damage and applies Rip. Duration increases with CP (4-20s). \n\n🐻 **Bear Form: Primal Tremor** (20 Rage). Slams the ground, dealing Physical damage to all enemies within 8 yards. Applies 1 stack of Lacerate. Generates high threat. \n\n🦉 **Moonkin Form: Primal Flare** (21% Base Mana). Blasts target with lunar energy. If target has Moonfire, duplicates it to up to 4 additional enemies within 10 yards. \n\n🌿 **Caster Form: Primal Bloom** (18% Base Mana). Consumes Rejuv/Regrowth on target for an instant moderate heal. Radiates a Rejuvenation effect (8s) to 4 nearby injured party members.',
      },
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
            { name: 'Primal Fury (Cat)', icon: 'ability_druid_primalfury', desc: 'Finisher that grants physical damage dominance.' },
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
            { name: 'Efflorescence', icon: 'spell_druid_lifebloom', desc: 'Swiftmend plants a healing garden at the target\'s feet.' },
            { name: 'Revitalize', icon: 'ability_druid_empoweredrejuvination', desc: 'Periodically restores Energy or Rage to healed targets.' }
          ]
        }
      ]
    },
    hunter: {
      name: 'Hunter',
      title: 'The Patient Predator',
      icon: <Crosshair className="w-6 h-6" />,
      crest: "https://i.imgur.com/En31Y4t.png",
      color: 'text-green-400',
      borderColor: 'border-green-500',
      bgGradient: 'from-green-900/80 to-black',
      masterwork: {
        name: 'Hunter\'s Focus',
        desc: 'This system is the elegant, universal solution to the class\'s two biggest problems: the "1-button Steady Shot macro" and mana-dependency. It shifts the Hunter from a mana conservation class (a caster) to a true resource management class (a predator), enforcing a rhythmic rotation and rewarding planning.',
        mechanic: 'The mana bar is replaced by a 100-point **Focus** bar. \n**Steady Shot** is the Focus **builder** (generates 20 Focus). Spenders (Arcane Shot, Multi-Shot) cost Focus. \n\n**Empowered Shot (Passive):** Every 3rd Steady Shot grants Hunter\'s Focus, making your next spec-specific spender (like **Kill Command** or **Aimed Shot**) **free and massively empowered**. \n\nThe **Deadzone (5-8 yard minimum range) is entirely eliminated**.',
      },
      specs: [
        {
          name: 'Beast Mastery',
          icon: 'https://i.imgur.com/O9XtjlG.png',
          title: 'Primal Bond',
          fantasy: 'Fighting as one with your beast, unleashing coordinated rage and commanding the wilds.',
          abilities: [
            { name: 'Kill Command', icon: 'ability_hunter_killcommand', desc: 'Active, high-impact Focus spender.' },
            { name: 'Call of the Wild', icon: 'ability_hunter_kobratrap', desc: 'Party gains 10% AP for 20s.' },
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
      crest: "https://i.imgur.com/qn2djXW.png",
      color: 'text-blue-400',
      borderColor: 'border-blue-500',
      bgGradient: 'from-blue-900/80 to-black',
      masterwork: {
        name: 'Volatile Magic',
        desc: 'The entire purpose of this system is to solve the TBC problem of **"proc munching"** (where a new proc would overwrite and waste an existing one) and turn it into a high-skill-ceiling reward. A great Mage banks and spends their procs for maximum impact, transforming all three specs from static turrets into explosive proc-based art forms.',
        mechanic: '**Stacking Procs:** \n**Hot Streak (Fire):** Can now stack up to **2 times**, guaranteeing Pyroblast! Pyroblast! burst during Combustion. \n**Fingers of Frost (Frost):** Can stack up to **3 times**, allowing for rapid-fire Ice Lance bursts. \n**Ley Line Mastery (Arcane):** Stacks to make Missiles/Barrage **instant and mana-free**.',
      },
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
      crest: "https://i.imgur.com/tbPW0IM.png",
      color: 'text-pink-400',
      borderColor: 'border-pink-500',
      bgGradient: 'from-pink-900/80 to-black',
      masterwork: {
        name: 'Holy Power',
        desc: 'This is the single most important fix for the class, transforming the Paladin into a dynamic, resource-managing hybrid. The Light\'s favor is stored as **Holy Power**, then unleashed in devastating finishers. This 3-point resource system replaces mana as the primary cost for your most powerful abilities, solving Retribution\'s mana starvation and adding tactical depth to all specs.',
        mechanic: 'Holy Power is generated by core abilities (e.g., Crusader Strike, Holy Shock, Hammer of the Righteous, Holy Shield Block). \n\n**Spenders (Cost 3 HP) create a choice:** \n**Ret:** **Divine Storm** (AoE) or **Templar\'s Verdict** (Single-Target). \n**Prot:** **Shield of the Righteous** (Threat) or **Word of Glory** (Instant Self-Heal). \n**Holy:** **Light of Dawn** (AoE Heal).',
      },
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
      crest: "https://i.imgur.com/aj1CVrE.png",
      color: 'text-white',
      borderColor: 'border-gray-400',
      bgGradient: 'from-gray-800/80 to-black',
      masterwork: {
        name: 'Evangelism',
        desc: 'The **Evangelism** system is a powerful **"setup-and-payoff"** mechanic that provides a much-needed burst window for all three specs, rewarding sustained, skillful gameplay with a surge of spiritual power. It addresses the need for powerful, controlled cooldowns beyond simple throughput.',
        mechanic: 'Generation: Casting Flash Heal/Greater Heal (Light) or DoT Ticks (Shadow) grants stacks of Evangelism (max 5). \n\n**Payoff (1m CD):** \n**Archangel (Healer):** Consumes 5 stacks to restore **25% mana** and increase healing done by **15% for 10s**. \n**Dark Archangel (Shadow):** Consumes 5 stacks to deal burst damage and increase all Shadow damage by **20% for 12s**.',
      },
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
      crest: "https://i.imgur.com/kQJfCCO.png",
      color: 'text-yellow-400',
      borderColor: 'border-yellow-600',
      bgGradient: 'from-yellow-900/80 to-black',
      masterwork: {
        name: 'Ruthless Efficiency',
        desc: '**Passive: Fluidity** \nCombo Points are now bound to the Rogue, not the target. You do not lose Combo Points when switching targets or when a target dies.',
        mechanic: '**Active: Cunning Maneuver** \n**Instant | 20 sec Cooldown** \nAdapts to your primary specialization. Executes a specialized technique designed to exploit enemy weaknesses. \n\n☠️ **Assassination: Toxic Shiv** (15 Energy | 1 CP). Off-hand lunge dealing Nature damage. Applies 5 stacks of Deadly Poison. If already at 5, consumes them for instant Burst damage. \n\n⚔️ **Combat: Cross-Cut** (20 Energy | 1 CP/hit). Sweeping strike that hits your primary target and up to 2 nearby enemies for 100% weapon damage. \n\n👻 **Subtlety: Shadow Play** (No Cost). Fade partially into shadows. For the next 3 seconds, your abilities can be used as if you were Stealthed, even while in combat.',
      },
      specs: [
        {
          name: 'Assassination',
          icon: 'https://wowmeta.com/_app/immutable/assets/classic-rogue-assassination.BssFEmMX.png',
          title: 'Master Poisoner',
          fantasy: 'A deadly master of poisons, ensuring the target dies slowly and painfully.',
          abilities: [
            { name: 'Vendetta', icon: 'spell_rogue_murderousintent', desc: 'Marks target for death, boosting damage.' },
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
            { name: 'Revealing Strike', icon: 'spell_weapon_glancingblow', desc: 'Exposes defenses, increasing finisher effectiveness.' }
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
      crest: "https://i.imgur.com/OaLY1Ck.png",
      color: 'text-blue-600',
      borderColor: 'border-blue-600',
      bgGradient: 'from-blue-900/80 to-black',
      masterwork: {
        name: 'Call of the Elements',
        desc: 'This is a complete baseline overhaul of the Totem system, solving the "turret" problem of being chained to the ground by a clunky setup and long cast times. It allows the Shaman to feel like a master of the elements, not a clumsy setup-artist.',
        mechanic: '**Totem Deployment QoL:** \n**Call of the Elements (Baseline):** Instantly places **all four totems** (one of each element) at your feet **in a single global cooldown**. \n**Totemic Recall (Baseline):** Refunds **75% of the mana cost**. \n**Totemic Projection (Talent):** Projects your active totems up to **40 yards away**. \n\n**Primal Bloodlust/Heroism:** The ultimate ability now grants a powerful, spec-specific rider (e.g., Elemental = **Mana Reduction**, Enhancement = **Movement Speed/Damage Proc**, Restoration = **Healing Buffer**).',
      },
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
            { name: 'Riptide', icon: 'spell_shaman_riptide', desc: 'Instant heal that leaves a HoT.' },
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
      crest: "https://i.imgur.com/MHcMLJx.png",
      color: 'text-purple-500',
      borderColor: 'border-purple-600',
      bgGradient: 'from-purple-900/80 to-black',
      masterwork: {
        name: 'The Soul Harvest',
        desc: 'This system completely overhauls the **Soul Shard** mechanic, turning it from a bag-clogging chore (a farmed item) into the beating, fel-green heart of the Warlock\'s combat loop (a UI resource). This liberates the Warlock to use their best utility without gritting their teeth.',
        mechanic: '**Resource QoL:** \n**Shards are a 3-point UI resource.** All non-combat utility (Soulstone, Healthstone, Summon) is now **FREE**. \n\n**In-Combat Generation:** Shards are generated via spec-specific rotations (DoT Ticks, Crits, Drain Soul execute). \n**Spenders (Cost 1 Shard):** \n**Affliction:** **Haunt** (Burst setup). \n**Demonology:** **Demonic Empowerment** (Pet burst). \n**Destruction:** **Chaos Bolt** (Signature nuke).',
      },
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
            { name: 'Hand of Gul\'dan', icon: 'spell_shadow_psychicscream', desc: 'Call down a meteor that summons Wild Imps.' },
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
      crest: "https://i.imgur.com/seZs5WM.png",
      color: 'text-red-600',
      borderColor: 'border-red-700',
      bgGradient: 'from-red-900/80 to-black',
      masterwork: {
        name: 'Rage & Steel',
        desc: '**Passive: Stance Mastery** \nYou retain up to 25 Rage when changing stances. Additionally, Charge is no longer restricted to out-of-combat use.',
        mechanic: '**Active: Battle Focus** \n**Instant | 30 sec Cooldown** \nAdapts to your current Stance. Heightens your combat senses to perform a specialized maneuver. \n\n⚔️ **Battle Stance (Arms): Calculated Strike** (No Cost). Instantly activates Overpower (no dodge required). Costs no Rage and cannot be blocked, dodged, or parried. \n\n🩸 **Berserker Stance (Fury): Bloodsurge** (No Cost). For the next 6 seconds, your Slam ability becomes instant cast and does not pause your main-hand swing timer. \n\n🛡️ **Defensive Stance (Protection): Vanguard\'s Momentum** (Gen 10 Rage). Instantly resets the cooldowns of Shield Slam and Revenge, allowing for immediate threat generation.',
      },
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

  // --- ARTIFACT DATA REMOVED (Moved to Legendaries) ---
  const artifacts = {};

  const activeData = activeTab === 'classes' ? classes[activeClass] : artifacts[activeArtifact];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-amber-900 selection:text-amber-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .paper-texture {
          background-color: #1a1a1a;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23262626' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
        }

        .rune-border {
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 0 0 1px rgba(0,0,0,1), inset 0 0 20px rgba(0,0,0,0.8);
        }
      `}</style>

      {/* --- UNIFIED HEADER --- */}
      <UnifiedHeader
        icon="https://i.imgur.com/yRtAtam.jpeg"
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

            {/* TAB SWITCHER REMOVED - ONLY CLASSES NOW */}
            <div className="flex border border-white/10 rounded mb-6 overflow-hidden">
              <div className="flex-1 py-3 text-xs font-hero uppercase tracking-widest bg-[#c29c55] text-black text-center">
                Heroes of Azeroth
              </div>
            </div>

            <h3 className="font-hero text-gray-400 text-sm uppercase tracking-widest mb-6 text-center lg:text-left">
              {activeTab === 'classes' ? 'Select Your Hero Class' : 'Legendary Artifacts'}
            </h3>

            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              {activeTab === 'classes' ? (
                // CLASS LIST
                Object.entries(classes).map(([key, data]) => (
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
                ))
              ) : (
                // ARTIFACT LIST
                Object.entries(artifacts).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setActiveArtifact(key)}
                    className={`group flex items-center gap-4 p-3 rounded-lg border transition-all duration-300 ${activeArtifact === key
                      ? `bg-gradient-to-r ${data.bgGradient} ${data.borderColor} border-l-4`
                      : 'bg-black/40 border-white/5 hover:bg-white/5 hover:border-white/20'
                      }`}
                  >
                    <div className={`p-2 rounded-md bg-black/50 ${activeArtifact === key ? data.color : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {data.icon}
                    </div>
                    <span className={`font-hero tracking-wide hidden md:block ${activeArtifact === key ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {data.name}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </aside>

        {/* --- RIGHT COLUMN: CLASS CONTENT --- */}
        <main className="lg:w-3/4 animate-fade-in">
          {/* Hero Banner with Crest */}
          <div className={`relative rounded-xl overflow-hidden border ${activeData.borderColor} p-8 md:p-12 mb-12 rune-border`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${activeData.bgGradient} opacity-20`}></div>
            <div className="absolute inset-0 paper-texture opacity-50 mix-blend-overlay"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                {/* Large Crest Display */}
                <div className={`rounded-full border-2 ${activeData.borderColor} bg-black/60 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden`}>
                  <img
                    src={activeData.crest}
                    alt={`${activeData.name} Crest`}
                    className="w-32 h-32 object-contain p-2"
                  />
                </div>
                <div>
                  <h2 className={`font-hero text-5xl md:text-6xl text-[#c29c55] mb-2 drop-shadow-lg`}>
                    {activeData.name}
                  </h2>
                  <p className={`font-hero text-xl ${activeData.color} uppercase tracking-widest mb-6`}>
                    {activeData.title}
                  </p>

                  {/* Link to Talents */}
                  <button
                    onClick={() => {
                      setPage('talents');
                    }}
                    className={`flex items-center gap-2 px-6 py-2 rounded border border-white/20 bg-white/5 hover:bg-white/10 hover:border-${activeData.color.split('-')[1]}-500 transition-all text-sm font-hero tracking-wider uppercase text-gray-300 hover:text-white`}>
                    <Sword className="w-4 h-4" /> View Talent Tree
                  </button>
                </div>
              </div>
            </div>
          </div>

          {activeTab === 'classes' ? (
            <>
              {/* Masterwork System Card */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-8 w-1 ${activeData.color.replace('text-', 'bg-')}`}></div>
                  <h3 className="font-hero text-2xl text-white tracking-widest">
                    Masterwork System: <span className={activeData.color}>{activeData.masterwork.name}</span>
                  </h3>
                </div>

                <div className="bg-[#121212] border border-white/10 p-8 rounded-lg relative overflow-hidden">
                  <div className={`absolute top-0 right-0 p-20 rounded-full bg-gradient-to-br ${activeData.bgGradient} blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2`}></div>

                  <div className="relative z-10">
                    <p className="font-body text-lg text-gray-300 leading-relaxed">
                      {formatText(activeData.masterwork.desc)}
                    </p>
                    <div className="bg-black/40 p-6 border-l-2 border-gray-600 rounded-r-lg">
                      <span className="block font-hero text-xs text-gray-500 uppercase tracking-widest mb-2">Core Mechanic & Examples</span>
                      <p className="font-body text-gray-400 italic">
                        {formatText(activeData.masterwork.mechanic)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specializations Grid */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-8 w-1 ${activeData.color.replace('text-', 'bg-')}`}></div>
                  <h3 className="font-hero text-2xl text-white tracking-widest">Specialization Deep Dives</h3>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {activeData.specs.map((spec, idx) => (
                    <div key={idx} className="group relative p-8 bg-[#121212] border border-white/10 rounded-lg hover:border-white/20 transition-all">
                      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${activeData.bgGradient} opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-4">
                        <div>
                          <h4 className="font-hero text-2xl text-white mb-1 flex items-center gap-3">
                            <img src={spec.icon} className="w-8 h-8 object-contain" alt="" />
                            {spec.name}
                          </h4>
                          <span className={`font-hero text-xs ${activeData.color} uppercase tracking-wider`}>{spec.title}</span>
                        </div>
                      </div>

                      {/* Fantasy */}
                      <p className="text-gray-400 text-sm mb-6 italic leading-relaxed pl-4 border-l-2 border-white/10">
                        "{spec.fantasy}"
                      </p>

                      {/* New Baseline Abilities */}
                      <div className="space-y-4">
                        <h5 className={`font-hero text-xs ${activeData.color} uppercase tracking-widest font-bold flex items-center gap-2 mb-3`}>
                          <Zap className="w-3 h-3" /> New Baseline Abilities
                        </h5>

                        <div className="grid gap-3">
                          {spec.abilities.map((ability, i) => (
                            <div key={i} className="flex gap-4 items-start p-3 bg-black/20 rounded border border-white/5 hover:border-white/10 transition-colors group/ability">
                              <div className="w-10 h-10 rounded border border-white/20 overflow-hidden shrink-0 shadow-sm relative">
                                <img
                                  src={`https://wow.zamimg.com/images/wow/icons/large/${ability.icon}.jpg`}
                                  alt={ability.name}
                                  className="w-full h-full object-cover group-hover/ability:scale-110 transition-transform duration-300"
                                  onError={(e) => { e.target.src = 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg'; }}
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/20"></div>
                              </div>
                              <div>
                                <div className={`text-sm font-bold text-gray-200 group-hover/ability:${activeData.color} transition-colors`}>{ability.name}</div>
                                <div className="text-xs text-gray-400 leading-tight mt-1">{ability.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="animate-fade-in space-y-12">
              {/* Lore Card */}
              <div className="bg-[#121212] border border-white/10 p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-24 bg-amber-500/10 blur-3xl rounded-full"></div>
                <h3 className="font-hero text-2xl text-amber-500 mb-4 flex items-center gap-3">
                  <BookOpen className="w-6 h-6" /> Legend of the Blade
                </h3>
                <p className="font-body text-lg text-gray-300 leading-relaxed italic border-l-4 border-amber-900 pl-6">
                  "{activeData.lore}"
                </p>
              </div>

              {/* Stats Card */}
              <div className="bg-[#0c0c0c] border border-amber-900/40 p-6 rounded-lg shadow-2xl relative">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Tooltip-style Stats */}
                  <div className="w-full md:w-1/3 space-y-1 text-sm font-sans text-gray-300">
                    <div className="flex justify-between text-white font-bold text-base border-b border-gray-700 pb-2 mb-2">
                      <span>{activeData.name}</span>
                      <span className="text-orange-500">Legendary</span>
                    </div>
                    <div className="flex justify-between"><span>Two-Hand</span> <span>Sword</span></div>
                    <div className="flex justify-between"><span>{activeData.stats.damage} Damage</span> <span>Speed {activeData.stats.speed}</span></div>
                    <div className="text-white">({activeData.stats.dps} damage per second)</div>

                    <div className="pt-4 space-y-2 text-green-400">
                      {activeData.stats.effects.map((effect, idx) => (
                        <p key={idx} className="leading-tight">{effect}</p>
                      ))}
                    </div>
                    <div className="pt-4 text-amber-500 italic text-xs">
                      "The hand of the Highlord guides every strike."
                    </div>
                  </div>

                  {/* Visual/Theme box */}
                  <div className="w-full md:w-2/3 bg-amber-900/10 rounded-lg p-6 border border-amber-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Sword className="w-16 h-16 text-amber-500 mx-auto mb-4 opacity-80" />
                      <h4 className="font-hero text-amber-100 uppercase tracking-widest text-sm">Forged in Light</h4>
                      <p className="text-amber-500/60 text-xs mt-2">Only the pure may wield it.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Questline Timeline */}
              <div>
                <h3 className="font-hero text-2xl text-white tracking-widest mb-8 border-b border-white/10 pb-4">
                  The Path of Redemption
                </h3>
                <div className="space-y-4 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 to-transparent"></div>

                  {activeData.questline.phases.map((phase, pIdx) => (
                    <div key={pIdx} className="relative z-10 pl-20">
                      {/* Node */}
                      <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-[#121212] border-2 border-amber-500 flex items-center justify-center text-[10px] text-amber-500 font-bold shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                        {pIdx + 1}
                      </div>

                      <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6 hover:border-amber-500/30 transition-colors">
                        <h4 className="font-hero text-amber-500 text-lg mb-4">{phase.name}</h4>
                        <div className="space-y-4">
                          {phase.steps.map((step, sIdx) => (
                            <div key={sIdx} className="flex gap-4 items-start">
                              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0"></div>
                              <div>
                                <strong className="text-gray-200 block text-sm">{step.name}</strong>
                                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default HallOfLegends;