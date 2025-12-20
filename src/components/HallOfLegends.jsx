import React, { useState } from 'react';
import {
  Sword, Shield, Zap, Crosshair, Heart, Skull,
  Activity, Moon, Sun, Droplet, Flame, Snowflake,
  Ghost, Hammer, BookOpen, ArrowLeft, Leaf, Crown
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const HallOfLegends = () => {
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
          return <strong key={partIndex} className="text-white font-bold">{part.slice(2, -2)}</strong>;
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
        name: 'The Primal Weave',
        desc: 'The core fantasy of the Druid is adaptability, and this redesign transforms that adaptability from a costly gimmick into their single greatest strength. This passive system, the **Primal Weave**, enhances their core kit by rewarding seamless, adaptive gameplay and creating a high-skill ceiling for hybrid players.',
        mechanic: '**Primal Echo:** Using a key ability in one form (e.g., Shred (Cat), Mangle (Bear), Starfire (Moonkin), Swiftmend (Caster)) grants you Primal Echo for 8 seconds. This buff is then consumed when you use an ability from a *different* form, granting it a powerful, one-time bonus. \n\n**Example 1 (Clutch Heal):** Shred (Cat) -> Regrowth (Caster) becomes **instant cast**. \n**Example 2 (Tank Off-DPS):** Mangle (Bear) -> Starfire (Moonkin) cast time reduced by **50%**. \n**Example 3 (Utility/PvP):** Swiftmend (Caster) -> Pounce (Cat) **no longer requires stealth** and stuns for 2 seconds.',
      },
      specs: [
        { name: 'Balance', title: 'Celestial Arcanist', desc: '**Core Problem Solved:** The "Oomkin" curse and static rotation. \n\n**Mana Sustain:** \n**Lunar Guidance** provides a **30% mana cost reduction** and grants **15% of your total Intellect as Spell Power** for premier scaling. \n**Celestial Anointment** and **Starlight\'s Duality** provide sustained mana return and DoT extension based on crit. \n\n**New Rotation & Abilities:** \n**Eclipse (Reworked):** Replaced random proc with a rhythmic, low-RNG cycle: two consecutive Starfire spells empower Wrath, and vice-versa, creating an engaging A-B-B-A rotation. \n**Starsurge (Baseline):** An **instant-cast**, high-damage Arcane execute spell (100% more damage below 25% health). \n**Starfall (Channeled):** Powerful, thematic AoE cooldown that prioritizes DoT-afflicted targets. \n**Typhoon:** Frontal-cone blast that **knocks enemies back 20 yards** and dazes them. \n\n**Raid Utility:** \n**Empowered Moonkin Form** now provides **3% Spell Haste to the entire raid**, solidifying the spec as a mandatory caster force multiplier.' },
        { name: 'Feral', title: 'Primal Predator & Guardian', desc: '**Core Problem Solved:** Bear lacks defensive cooldowns; Cat rotation is clunky and mana-dependent. \n\n**I. The Guardian (Bear):** \n**Thrash (Baseline):** Solves AoE threat. Applies a **12-second bleed** effect to all enemies within 8 yards. \n**Survival Instincts (Talent):** The "Shield Wall" Bears always needed. Reduces all damage taken by **50% for 6 seconds** (2 charges on a 1.5m cooldown). \n**Guardian\'s Burden (LoTP Rework):** **3% of all party damage** within 20 yards is **redirected to the Bear** (mitigated by armor), acting as passive party-wide damage reduction. \n\n**II. The Predator (Cat):** \n**Powershifting Refined:** Shifting to Cat form now instantly grants **40 Energy** (up from 20), smoothing out the rotation. \n**Savage Roar (Finisher):** Adds a strategic layer by granting a **30% physical damage buff** to the Druid, forcing management of two key timers (Rip and Roar). \n**Predator\'s Rhythm (LoTP Rework):** While in Cat Form, all **party bleed effects deal 5% increased damage** to targets you are bleeding, making the Feral the linchpin of any physical DPS group.' },
        { name: 'Restoration', title: 'Grove-Warden', desc: '**Core Problem Solved:** Lack of reactive, group-wide burst healing and "oh sh*t" cooldowns. \n\n**New Burst & Raid Tools:** \n**Wild Growth (10s CD):** A powerful "smart" heal that instantly heals the **5 most-injured party/raid members**, providing the Chain Heal equivalent. \n**Ironbark (1.5m CD):** A premier external defensive cooldown that reduces a friendly target\'s damage taken by **20% for 12 seconds** and increases healing received from your HoTs by 30%. \n**Efflorescence (Reworks Swiftmend):** Casting Swiftmend now also spawns a **ground-placement AoE heal** at the target\'s location for 9 seconds. \n\n**Empowered Throughput:** \n**Empowered Tree of Life:** Reworked into a 3-minute transformation lasting 20 seconds. While active, **Healing Touch becomes instant cast** and Wild Growth hits 2 additional targets. \n**Symbiotic Embrace:** Rewards stacking Lifebloom by granting a mutual **10% healing increase** between you and the target for 10 seconds.' }
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
        { name: 'Beast Mastery', title: 'Primal Bond', desc: '**Core Problem Solved:** The "Glass Cannon Pet" that dies to all raid AoE. \n\n**Pet Resiliency Overhaul:** \n**Avoidance (Passive):** Pet takes **90% reduced damage** from all non-player AoE effects. \n**Primal Endurance (Passive):** Pet inherits **100% of your Armor** and scales with your gear. \n\n**New Rotation & Abilities:** \n**Kill Command (Reworked):** No longer a proc. It is your active, high-impact Focus spender. \n**Barbed Shot:** Applies a bleed and **Enrages your pet** (+30% attack speed). \n**Pinnacle Talent - Animal Companion:** Summons a **second pet** from your stable to fight alongside you, providing passive cleave damage.' },
        { name: 'Marksmanship', title: 'Master Sniper', desc: '**Core Problem Solved:** Horrible late-game scaling and reliance on the Steady Shot macro. \n\n**Core Fixes:** \n**Aimed Shot** base cast time reduced to **2.5s**. \n**Scaling Trueshot Aura:** Now grants an additional **20% of the Hunter\'s own Attack Power** to the party aura, ensuring scaling with gear. \n\n**New Abilities:** \n**Chimera Shot (10s CD):** An instant shot that deals high damage and **refreshes Serpent Sting** on the target. \n**Lethal Precision:** Makes your Empowered Aimed Shot a **guaranteed critical strike** that deals 50% more damage, creating a devastating sniper blast. \n**Master\'s Aim:** Chimera Shot marks the target, causing your next Aimed Shot to **ignore 20% of the target\'s armor**.' },
        { name: 'Survival', title: 'Cunning Trapper', desc: '**Core Problem Solved:** Traps are useless in combat; the spec has no damage identity. \n\n**Trap Overhaul:** \n**Trap Launcher (Baseline):** Allows your next trap to be **launched up to 40 yards away**. \n**Improved Traps (Baseline):** Immolation and Explosive Trap can now be **active on the same target**. \n\n**New Rotation & Abilities:** \n**Explosive Shot (Core Spender):** Fires an explosive charge that deals fire damage over 2 seconds. \n**Pinnacle Talent - Lock and Load:** Trap ticks have a chance to trigger Lock and Load, **resetting Explosive Shot** and making your next 2 Explosive Shots **cost 0 Focus**. This is the core, proc-based gameplay loop. \n**Black Arrow:** A new Shadow damage DoT to manage that synergizes with Explosive Shot for AoE cleave.' }
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
        mechanic: '**Stacking Procs:** \n**Hot Streak (Fire):** Can now stack up to **2 times**, guaranteeing Pyroblast! Pyroblast! burst during Combustion. \n**Fingers of Frost (Frost):** Can stack up to **3 times**, allowing for rapid-fire Ice Lance bursts. \n**Arcane Potency (Arcane):** Stacks to make Missiles/Barrage **instant and mana-free**.',
      },
      specs: [
        { name: 'Arcane', title: 'Temporal Weaver', desc: '**Core Problem Solved:** The rigid, "1-button Arcane Blast" turret gameplay. \n\n**Rotation & Abilities:** \n**Arcane Barrage (Baseline):** An **instant-cast** blast that **resets your Arcane Blast stacks**, providing crucial mobile damage and rotational flexibility. \n**Temporal Shield (1.5m CD):** A powerful defensive cooldown. All damage taken during the shield\'s 6-second duration is **healed back** over the next 6 seconds, rewarding foresight against massive boss mechanics. \n**Temporal Flux:** Mechanically rewards the "burn-and-conserve" cycle, granting **10% spell haste** during your conserve phase and **10% crit** during your burn phase.' },
        { name: 'Fire', title: 'Explosive Pyromancer', desc: '**Core Problem Solved:** The fundamentally broken and damage-losing **Ignite munching** mechanic. \n\n**Core Fixes:** \n**Ignite (Reworked):** The crit damage is now **"banked"** and delivered instantly on the next non-crit hit, guaranteeing every crit\'s value lands. \n**Living Bomb (Baseline):** A critical DoT that explodes for AoE damage and can trigger **Hot Streak**. \n**New Abilities:** \n**Combustion (Reworked):** Consumes active Fire DoTs (Living Bomb, Pyro DoT) and combines their remaining damage into a single **"Super-Ignite"** DoT, and **doubles the chance to trigger Hot Streak** for 10 seconds. \n**Pinnacle Talent - Meteor (1m CD):** Calls down a meteor that deals **massive AoE damage** and stuns all enemies hit.' },
        { name: 'Frost', title: 'Glacial Controller', desc: '**Core Problem Solved:** A "PvP-only" spec with zero raid viability due to bosses being immune to freeze. \n\n**Core Fixes:** \n**Fingers of Frost (FoF):** Now stacks up to 3 times (via Masterwork system). \n**Ice Lance (Buffed):** Now deals **TRIPLE damage** (up from double) to targets consuming an FoF charge. \n\n**New Abilities:** \n**Deep Freeze (51-pt):** This is the PvE solution. It is usable on stun-immune bosses and deals **massive nuke damage** (shattering the very air around the target). \n**Frozen Orb (1m CD):** Launches an orb of ice that slows, damages, and acts as a **proc battery** by generating multiple Fingers of Frost charges. \n**Glacial Bastion:** Casting Ice Barrier grants a small **damage-absorption shield** to nearby party members, giving Frost unique defensive raid utility.' }
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
        { name: 'Holy', title: 'Beacon of Faith', desc: '**Core Problem Solved:** No AoE healing; being "tethered" to one target. \n\n**New Healing Tools:** \n**Light of Dawn (51-pt, 3 HP Spender):** Unleashes a **30-yard frontal cone of healing** to 5 allies, providing the needed AoE burst heal. \n**Beacon of Light (41-pt):** Copies **50% of all healing** done to other targets to the Beacon target (usually the Main Tank), untethering the healer to triage the raid. \n**Aura Mastery (Raid CD):** Empowers the active Aura; Devotion Aura grants **interrupt/silence immunity** to the raid for 10s. \n**Holy Shock (Buffed):** Cooldown reduced to 10s and healing increased by 30%, making it a core rotational button for HP generation.' },
        { name: 'Protection', title: 'Divine Fortress', desc: '**Core Problem Solved:** No major defensive cooldowns; vulnerability to spike damage. \n\n**Survivability & Utility:** \n**Word of Glory (WoG) / Shield of the Righteous (SoR):** Holy Power creates a dynamic, in-combat decision between offense (SoR threat-bomb) and defense (WoG self-heal). \n**Ardent Defender (Reworked):** A passive **"cheat death"** that negates a killing blow and heals you for 15% of max health (2m CD). \n**Guardian of Ancient Kings (51-pt):** The Paladin\'s **"Shield Wall."** Reduces all damage taken by **30%** and redirects party damage to the Paladin. \n**Grand Crusader (Talent):** Proc when you block, granting extra Holy Power, speeding up the build/spend cycle.' },
        { name: 'Retribution', title: 'Righteous Vindicator', desc: '**Core Problem Solved:** Mana-starvation and clunky Seal/Judgement rotation. \n\n**QoL Fixes:** \n**Judgements Refresh Seals:** Using any Judgement **no longer consumes your active Seal**, ending the clunky rotation. \n**Holy Power Rotation:** The new 4-button builder/spender rotation is fast and mana-sustainable. \n\n**New Finishers:** \n**Divine Storm (3 HP):** The iconic AoE/cleave finisher that **also heals** 3 nearby allies. \n**Templar\'s Verdict (3 HP):** A brutal single-target overhead strike. \n**Hand System (QoL):** Blessing of Freedom, Protection, and Sacrifice are moved to a separate "Hand" category and **do not overwrite** Kings/Might/Wisdom.' }
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
        { name: 'Discipline', title: 'Proactive Bulwark', desc: '**Core Problem Solved:** PW:S **Weakened Soul** debuff actively conflicting with Holy\'s Prayer of Mending. \n\n**Core Fixes:** \n**Weakened Soul (Reworked):** **No longer applied by Prayer of Mending**, removing the internal conflict. PW:S absorption is heavily buffed. \n**New Abilities:** \n**Penance (51-pt):** Channels a 3-bolt volley of Holy light (heal or damage) that can be **cast while moving**. \n**Power Word: Barrier (41-pt):** The Discipline **"raid wall."** Summons a barrier that reduces all damage taken by **25% for 10 seconds** for allies inside. \n**Rapture:** PW:S crits have a 50% chance to grant an Evangelism stack, tying the mitigation loop to the burst cycle.' },
        { name: 'Holy', title: 'Reactive Wellspring', desc: '**Core Problem Solved:** One-dimensional gameplay (spamming Circle of Healing). \n\n**New Abilities:** \n**Circle of Healing (Reworked):** Becomes the 51-pt talent. Its healing is increased but now has a **6-second cooldown**, forcing rotational depth. \n**Divine Hymn (41-pt):** The "oh-shit" button Holy needed. A channeled **raid-saver** that heals the 5 most-injured raid members for massive amounts and increases healing received by 10%. \n**Serendipity:** Flash Heal/Binding Heal crits **reduce the cast time** of your next Greater Heal or Prayer of Healing by 35% (stacks 2x), creating a fast-heal-to-big-heal rhythm. \n**Holy Word: Sanctuary:** Prayer of Healing crits consecrate the ground, healing allies who stand in it.' },
        { name: 'Shadow', title: 'Void Ascendant', desc: '**Core Problem Solved:** Critically low personal DPS; serving only as a mana battery. \n\n**Damage & Utility:** \n**Vampiric Touch (Buffed):** Damage increased by **40%**. \n**Shadow Weaving (Fixed):** Is now a **personal buff** on the Priest, not a debuff on the target, allowing multiple Shadow Priests in a raid. \n**Mind Sear (41-pt):** Channels psychic energy into a hostile target, radiating **massive Shadow AoE damage** to all enemies within 10 yards. \n**Dispersion (51-pt):** The ultimate survival/mana tool. Priest dissolves into shadow, reducing all damage taken by **90% for 6 seconds** and regenerating 36% mana. \n**Void Torrent:** Mind Flay ticks have a chance to make your next Mind Blast **instant cast**.' }
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
        name: 'Vicious Techniques',
        desc: 'This system smooths out the clunky nature of Combo Points, ensuring the Rogue wastes no movement and no opportunity. It transforms the resource from being target-bound to Rogue-bound, rewarding fast, fluid gameplay. It ends the frustration of losing valuable Combo Points.',
        mechanic: '**Baseline QoL:** \n**Redirect (1m CD):** Instantly **transfers CPs** from a dead or invalid target to your current target. \n**Anticipation (Passive):** Prevents **over-capping** CPs, banking "wasted" points to be applied by the next generator. This fixes the major rotational frustration of the class.',
      },
      specs: [
        { name: 'Assassination', title: 'Master Poisoner', desc: '**Core Problem Solved:** The **"Spell Hit"** gearing nightmare; clunky damage profile. \n\n**Core Fixes:** \n**Poisoner\'s Precision (41-pt):** Causes **100% of Melee Hit Rating to also apply to your Poisons**, fixing gearing complexity overnight. \n**Vile Poisons (Buffed):** Deadly Poison application is **100% guaranteed** when Wound Poison is active, massively smoothing ramp-up. \n\n**New Abilities:** \n**Envenom (51-pt Finisher):** Consumes Deadly Poison stacks for **massive Nature (Poison) damage** and increases your poison application chance by 75%, defining the new rotation. \n**Vendetta (41-pt CD):** Marks an enemy, increasing all damage you deal to the target by **20% for 20 seconds**, solidifying the spec as a single-target executioner.' },
        { name: 'Combat', title: 'The Relentless Swashbuckler', desc: '**Core Problem Solved:** One-dimensional "SS-bot" with zero AoE capability. \n\n**AoE & Cleave:** \n**Blade Flurry (Reworked CD):** Hits up to **2 additional nearby targets for full damage**, making Combat the undisputed cleave king. \n**Killing Spree (51-pt CD):** The iconic WotLK AoE burst finisher, teleporting to and attacking up to 5 nearby enemies for massive damage over 3 seconds. \n**Crimson Tempest (Finisher):** A resource-dumping **AoE finishing move** that applies a powerful bleed-over-time to all enemies within 8 yards, completing the AoE toolkit. \n**Adrenaline Rush (Reworked):** Also **reduces the Energy cost of all abilities by 20%**, turning it into a true "God Mode" burst window.' },
        { name: 'Subtlety', title: 'The Shadowy Debuffer', desc: '**Core Problem Solved:** PvP-Only spec with zero utility, lacking sustained damage talents. \n\n**Raid Utility & Burst:** \n**Hemorrhage (Reworked 41-pt):** The new raid ticket. Applies the **Trauma debuff**, causing all Physical Critical Strikes against the target to deal an **additional 15% damage**. This is a massive physical raid damage multiplier. \n**Find Weakness (Passive):** Opener abilities (Ambush, Garrote) apply **70% armor reduction** for 10s. \n**Shadow Dance (51-pt CD):** The core fantasy. For 8 seconds, you can use **all Stealth-required abilities** (Ambush, Garrote, Cheap Shot) in combat, creating an explosive, on-demand burst window. \n**Marked for Death (1m CD):** Instantly mark a target and **generate 5 Combo Points**.' }
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
        { name: 'Elemental', title: 'The Stormcaller', desc: '**Core Problem Solved:** "Oom-an" mana starvation and static gameplay. \n\n**Mana & Rotation:** \n**Elemental Focus (Reworked):** Crit now makes your next **TWO spells cost 100% less mana**. \n**Lava Burst (41-pt):** Guaranteed **critical strike** if Flame Shock is applied, becoming the new rotation-maker. \n**Lava Surge (Talent):** Flame Shock ticks have a chance to **reset Lava Burst** and make it **instant-cast**, adding a crucial proc layer. \n**Thunderstorm (30s CD):** An AoE, knockback utility tool that **restores 15% of your maximum mana**.' },
        { name: 'Enhancement', title: 'The Storm-Warrior', desc: '**Core Problem Solved:** The **"Hybrid Tax"** (poor scaling, split-stat needs) and clunky totem twisting. \n\n**Scaling & Flow:** \n**Mental Quickness (Passive):** You gain **30% of your Attack Power as Spell Power**, ensuring Shocks and Lightning Bolt scale with melee gear. \n**Maelstrom Weapon (41-pt):** Melee attacks have a chance to grant a stack, reducing the cast time of your next spell. At 5 stacks, your spell is **instant-cast**, creating the hybrid dream (Swing -> Swing -> INSTANT LIGHTNING BOLT). \n**Feral Spirit (51-pt):** Summons **two Spirit Wolves** for 30 seconds for massive DPS, self-healing, and an on-demand stun. \n**Lava Lash:** An instant off-hand attack that **spreads Flame Shock DoT** to another target.' },
        { name: 'Restoration', title: 'The Spirit-Healer', desc: '**Core Problem Solved:** Complete lack of mobility, reducing HPS to zero on moving fights. \n\n**Mobility & Burst:** \n**Riptide (Baseline):** Instant-cast, low-mana HoT that provides **mobile healing**. \n**Tidal Waves (Passive):** Riptide/Chain Heal casts grant a buff that **reduces the cast time** of your next Healing Wave/Lesser Healing Wave. \n**Pinnacle Talent - Spiritwalker\'s Grace (2m CD):** For 15 seconds, you can **move while casting all Shaman spells**, solving the mobility problem entirely. \n**Ancestral Vigor:** Critical heals apply a buff that **increases the target\'s total health by 10%** for 15 seconds, providing a proactive "health buffer."' }
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
        { name: 'Affliction', title: 'The Soul-Harvester', desc: '**Core Problem Solved:** "DoT Clipping" and clunky execute phase. \n\n**Rotation & Utility:** \n**Pandemic (New Talent):** Refreshing DoTs (Corruption, UA, CoA) on a target with less than 5 seconds remaining now **adds the remaining duration** to the new DoT, fixing clipping. \n**Haunt (41-pt, Shard Spender):** Sends a soul to haunt the target, increasing all shadow **DoT damage you deal to them by 20% for 12 seconds**. This is the core burst window setup. \n**Empowered Drain Soul:** Deals **100% increased damage** on execute targets (below 25% health) and **automatically refreshes** all your DoTs on that target while channeling, making the execute self-sustaining.' },
        { name: 'Demonology', title: 'The Demonic Commander', desc: '**Core Problem Solved:** Terrible pet scaling and weak, "support-only" fantasy. \n\n**Pet Power & Transformation:** \n**Demonic Knowledge (Buffed):** Demon pets now inherit **100% of Warlock Spell Power, Spell Hit, and Stamina**. Your demon is a direct reflection of your gear. \n**Demonic Pact (Reworked):** Your demon\'s crits apply the buff **raid-wide**, and it scales directly with your Spell Power. \n**Metamorphosis (51-pt CD):** The ultimate capstone. Transform into a powerful demon for 30s, gaining **+20% damage**, **+600% armor**, and new abilities like Shadow Cleave and Immolation Aura. \n**Demonic Empowerment (Shard Spender):** Empowers your active demon with a unique effect (e.g., Felguard gains 20% Haste).' },
        { name: 'Destruction', title: 'The Fel-Fire Annihilator', desc: '**Core Problem Solved:** The "Destruction" Warlock famously spamming Shadow Bolt. \n\n**Rotation & Burst:** \n**Chaos Bolt (51-pt, Shard Spender):** Hurls a bolt of fel-fire that deals massive **Chaos damage** that **cannot be resisted and pierces all absorption effects**. This is the signature nuke. \n**Backdraft (Reworked Talent):** Casting Conflagrate (which generates a Shard) grants a buff, making your next 3 **Incinerate spells have 30% reduced cast time**, creating the Fire-mage rotation. \n**Havoc (45s CD):** Curses a target, causing all **single-target spells you cast on another target to be copied** to the Havoc\'d target for 100% damage (skillful cleave). \n**Shadowfury (Baseline):** A crucial AoE stun for trash packs and add control.' }
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
        desc: 'The redesign fixes the single worst-feeling mechanic in the game: **Rage starvation**. Rage is now a rewarding resource instead of a limiting one, and stance penalties have been drastically reduced to allow for fluid combat and the true feeling of being a charging, steel-clad heart of the battlefield.',
        mechanic: '**Rage Smoothing & QoL:** \n**Tactical Mastery QoL:** Allows retaining up to **20 Rage** when changing stances. \n**Ragefont (Prot/Fury):** You gain **Rage every time you dodge or parry** an attack. \n**Arms** receives **Anger Management** (10% Rage cost reduction on offensive abilities). \n**Battle Stride:** New ability grants **40% movement speed** in any stance for 15s.',
      },
      specs: [
        { name: 'Arms', title: 'The Battlefield Tactician', desc: '**Core Problem Solved:** One-button rotation and low raid value. \n\n**Raid Utility & Burst:** \n**Trauma (Reworked Talent):** The new raid ticket. Your critical strikes apply a debuff that increases all **Physical damage taken by the target by 5%** (stacks with Rogue Hemorrhage). \n**Bladestorm (31-pt CD):** Replaces Mortal Strike in the talent tree. You become an unstoppable storm of steel for 6 seconds, hitting all nearby enemies and granting **CC immunity**. \n**Sudden Death:** Auto-attack hits have a chance to **reset Overpower** and make it usable on any target, ensuring a reliable rotational attack. \n**Anger Management:** Reduces the **Rage cost of all offensive abilities by 10%**.' },
        { name: 'Fury', title: 'The Unstoppable Berserker', desc: '**Core Problem Solved:** Threat-capped and Rage-starved while gearing. \n\n**DPS & Sustain:** \n**Threat Control (Passive):** All damage dealt while in Berserker Stance **generates 30% less threat**, allowing Fury to play at 100% speed. \n**Rampage:** New talent grants a stacking buff to **attack speed** that rewards high crit and sustained uptime. \n**Bloodrage Surge:** Rewards skillful Rage management by granting **additional damage to Bloodthirst** when Rage is above 80. \n**War Banner (Raid Utility):** A placeable banner that **increases the attack speed of all raid members by 5%** for 20 seconds.' },
        { name: 'Protection', title: 'The Battlefield Commander', desc: '**Core Problem Solved:** Weak AoE snap threat and no "big" defensive CDs. \n\n**Threat & Control:** \n**Thunder Clap (Buffed):** Now a **360-degree AoE** with 100% damage and massive threat increase for snap AoE. \n**Shockwave (41-pt):** Slams the ground, dealing high threat-damage and **stunning all enemies in a cone for 3 seconds**. \n**Guardian of Ancient Kings (Reworked):** The new major defensive cooldown. \n**Last Stand (Upgraded):** Now **taunts all nearby enemies for 3 seconds** when activated, turning it into a raid-saving peel tool.' }
      ]
    },
  };

  // --- ARTIFACT DATA ---
  const artifacts = {
    ashbringer: {
      name: 'The Ashbringer',
      title: 'Blade of the Scarlet Highlord',
      icon: <Sword className="w-6 h-6" />,
      crest: "https://i.imgur.com/bX9I5zR.png",
      color: 'text-amber-500',
      borderColor: 'border-amber-600',
      bgGradient: 'from-amber-900/80 to-black',
      lore: "The blade that shattered the Frostmourne. Legends say it was forged from a dark crystal purified by the Holy Light. Its original wielder, Alexandros Mograine, was betrayed and murdered by his own son, Renault, in the ruins of Stratholme. Now, the corrupted blade rests in Naxxramas, but its light is not extinguished. It waits for a champion to redeem it.",
      stats: {
        damage: "350 - 520",
        speed: "3.60",
        dps: "120.8",
        effects: [
          "Chance on hit: Blasts the target with Holy Fire for 700 damage.",
          "Equip: Increases Attack Power by 180.",
          "Equip: Increases Critical Strike Rating by 45.",
          "Use: 'Wake of Ashes' - Stuns all Undead and Demons in a 12 yd cone for 6 sec. (2 Min Cooldown)"
        ]
      },
      questline: {
        title: "The Corrupted Heart",
        desc: "A journey across time and space to redeem the most powerful weapon ever forged.",
        phases: [
          {
            name: "Phase 0: The Drop (Classic)",
            steps: [
              { name: "Naxxramas (60)", desc: "Loot the 'Corrupted Ashbringer' from the Four Horsemen chest." },
              { name: "Scarlet Monastery", desc: "Equip the blade and enter the Monastery. The Crusaders will kneel. Speak to Commander Mograine to hear the tragedy." }
            ]
          },
          {
            name: "Phase 1: The Whisper (T4)",
            steps: [
              { name: "Hellfire Peninsula", desc: "The blade whispers to you. It hungers for demons. Slay 100 Legion enemies to feed its thirst." },
              { name: "A'dal", desc: "Show the blade to A'dal in Shattrath. He refuses to touch it, but points you to a blacksmith who walks the line between Light and Void." }
            ]
          },
          {
            name: "Phase 2: The Smith (T5)",
            steps: [
              { name: "Shattered Reach", desc: "Find 'Kurdran's Smith', a Son of Lothar living in the neutral hub on the edge of Terokkar." },
              { name: "Materials", desc: "He demands payment: 20 Primal Nethers, 10 Fel Steel Bars, and the 'Hammer of the Naaru' (Drop from Gruul)." },
              { name: "The Reforging", desc: "The smith shatters the corrupted crystal, but cannot purify it. He forges a new housing: 'The Empty Shell'." }
            ]
          },
          {
            name: "Phase 3: The Light (T6)",
            steps: [
              { name: "Mount Hyjal", desc: "Take the shell to the summit of Hyjal during the Archimonde encounter." },
              { name: "The World Tree", desc: "Soak the blade in the waters of the Well of Eternity right after Archimonde falls." },
              { name: "Infusion", desc: "The blade begins to glow, but the soul inside is still screaming." }
            ]
          },
          {
            name: "Phase 4: Redemption (Sunwell/Naxx 70)",
            steps: [
              { name: "Sunwell Plateau", desc: "Defeat M'uru. Use the 'Empty Shell' to absorb his essence as he shifts from Void to Light." },
              { name: "Naxxramas (Timelocked)", desc: "Enter Naxxramas 70. Defeat the Four Horsemen again. The ghost of Alexandros appears." },
              { name: "The Choice", desc: "Give the blade to Alexandros to free his soul. He blesses it and returns it to you. You are now the Highlord." }
            ]
          }
        ]
      }
    }
  };

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
          <div className="sticky top-52">

            {/* TAB SWITCHER */}
            <div className="flex border border-white/10 rounded mb-6 overflow-hidden">
              <button
                onClick={() => setActiveTab('classes')}
                className={`flex-1 py-3 text-xs font-hero uppercase tracking-widest ${activeTab === 'classes' ? 'bg-[#c29c55] text-black' : 'bg-black/40 text-gray-500 hover:bg-white/5'}`}
              >
                Heroes
              </button>
              <button
                onClick={() => setActiveTab('artifacts')}
                className={`flex-1 py-3 text-xs font-hero uppercase tracking-widest ${activeTab === 'artifacts' ? 'bg-[#c29c55] text-black' : 'bg-black/40 text-gray-500 hover:bg-white/5'}`}
              >
                Relics
              </button>
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
                    onClick={() => setActiveClass(key)}
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
                  <h2 className={`font-hero text-5xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg`}>
                    {activeData.name}
                  </h2>
                  <p className={`font-hero text-xl ${activeData.color} uppercase tracking-widest mb-6`}>
                    {activeData.title}
                  </p>
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
                  {activeData.specs.map((spec, idx) => {
                    const parts = spec.desc.split('\n\n');
                    const problemPart = parts.find(p => p.startsWith('**Core Problem Solved:**'));
                    const otherParts = parts.filter(p => p !== problemPart);

                    return (
                      <div key={idx} className="group relative p-8 bg-[#121212] border border-white/10 rounded-lg hover:border-white/20 transition-all">
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${activeData.bgGradient} opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-4">
                          <div>
                            <h4 className="font-hero text-2xl text-white mb-1 flex items-center gap-3">
                              {spec.name}
                            </h4>
                            <span className={`font-hero text-xs ${activeData.color} uppercase tracking-wider`}>{spec.title}</span>
                          </div>
                        </div>

                        {problemPart && (
                          <div className="mb-8 p-4 bg-red-900/10 border border-red-900/30 rounded flex gap-4 items-start">
                            <div className="mt-1 shrink-0 text-red-500">
                              <Skull className="w-5 h-5" />
                            </div>
                            <div>
                              <h5 className="font-hero text-red-500 text-xs uppercase tracking-widest mb-1">Core Issue Resolved</h5>
                              <p className="font-body text-gray-300 text-sm">
                                {formatText(problemPart.replace('**Core Problem Solved:**', ''))}
                              </p>
                            </div>
                          </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-8">
                          {otherParts.map((part, pIdx) => {
                            const lines = part.split('\n');
                            const titleLine = lines[0];
                            const contentLines = lines.slice(1);
                            const isHeader = titleLine.startsWith('**') && titleLine.includes(':');
                            const sectionTitle = isHeader ? titleLine.replace(/\*\*/g, '').split(':')[0] : null;

                            return (
                              <div key={pIdx} className="space-y-3">
                                {sectionTitle ? (
                                  <h5 className={`font-hero text-sm ${activeData.color} border-b border-white/5 pb-2 mb-2 flex items-center gap-2`}>
                                    {sectionTitle === "Core Fixes" && <Shield className="w-3 h-3" />}
                                    {sectionTitle === "New Abilities" && <Zap className="w-3 h-3" />}
                                    {sectionTitle === "Raid Utility" && <Crown className="w-3 h-3" />}
                                    {sectionTitle.toUpperCase()}
                                  </h5>
                                ) : (
                                  <p className="font-body text-gray-300 mb-2">{formatText(titleLine)}</p>
                                )}
                                <ul className="space-y-3">
                                  {contentLines.map((line, lIdx) => {
                                    const abilityMatch = line.match(/^\*\*(.*?):\*\*\s*(.*)/);
                                    if (abilityMatch) {
                                      return (
                                        <li key={lIdx} className="text-sm leading-relaxed text-gray-400 pl-4 border-l-2 border-white/5 hover:border-white/20 transition-colors">
                                          <strong className="text-gray-200 block mb-0.5">{abilityMatch[1]}</strong>
                                          {formatText(abilityMatch[2])}
                                        </li>
                                      );
                                    }
                                    return <li key={lIdx} className="text-sm text-gray-400">{formatText(line)}</li>;
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
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