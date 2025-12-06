import React, { useState, useEffect } from 'react';
import {
  Users, Sword, Shield, Zap, Crosshair, Heart, Skull,
  Activity, Moon, Sun, Droplet, Flame, Snowflake,
  Ghost, Hammer, BookOpen, ArrowLeft, Star, Hexagon,
  Coins, Crown, Anchor, Eye, Map, Feather, Hand,
  Scroll, Compass, Axe, GraduationCap
} from 'lucide-react';

const TheNewBlood = () => {
  const [activeRace, setActiveRace] = useState('goblins');
  const [activeTab, setActiveTab] = useState('overview');
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger animation when race changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeRace]);

  // Helper function to convert markdown bold (**) and newlines (\n) to JSX elements
  const formatText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, lineIndex) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const content = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex} className="text-[#f8b700] font-bold">{part.slice(2, -2)}</strong>;
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

  const raceGroups = {
    neutral: {
      title: 'Neutral Factions',
      color: 'text-[#f8b700]', // Blizzard Gold
      borderColor: 'border-[#f8b700]/30',
      races: ['goblins', 'elves']
    },
    horde: {
      title: 'The Horde',
      color: 'text-[#8C1616]', // Horde Red
      borderColor: 'border-[#8C1616]/30',
      races: ['ogres', 'saberon']
    },
    alliance: {
      title: 'The Alliance',
      color: 'text-[#00558F]', // Alliance Blue
      borderColor: 'border-[#00558F]/30',
      races: ['wildhammer', 'broken']
    }
  };

  const races = {
    goblins: {
      id: 'goblins',
      name: 'Goblins',
      tagline: 'Profit is the New Prophet',
      faction: 'Neutral (Steamwheedle Cartel)',
      heroImage: 'https://imgur.com/nCr9SJ1.jpeg',
      icon: <Coins className="w-6 h-6" />,
      themeColor: '#00FF00', // Fel/Money Green
      accentColor: 'text-green-400',

      overview: {
        fantasy: 'The **Opportunistic Capitalist**. While the Horde and Alliance squabble over territory and honor, the Steamwheedle Cartel sees the reopening of the Dark Portal as the single greatest investment opportunity in Azerothian history. You are not a "hero"—that word doesn\'t pay the rent. You are a **"Freelance Contractor"** (read: highly expendable asset with a liability waiver) sent to strip-mine Outland before the competition does. \n\n**The Undermine Protocol:** Trade Prince Steamwheedle has officially authorized "aggressive expansion" into the Twisting Nether. This isn\'t exploration; it\'s a hostile corporate takeover. Your motivation is purely transactional. You don\'t fight for the Light or the Horde; you fight because the loot drops in Outland are currently trending 200% above market value on the Undermine Futures Exchange. The Ethereals of the Consortium are your direct competitors—stuffy, energy-based elitists who hoard technology. You intend to drive them into bankruptcy, preferably with high-explosives.',
        systemName: 'Corporate Warfare',
        systemDesc: 'At Level 20, you unlock the **"Ledger of Conflict,"** a UI that replaces your reputation pane. Instead of gaining favor, you gain **"Credit Rating."** \n\n**Mercenary Contracts:** You can accept "Contracts" from opposing factions. Sabotage a blood elf mana-forge? Pays in gold. Defend a Draenei caravan? Pays in rare gems. You can effectively work for both sides, but getting caught (dying during a contract) lowers your Credit Rating. \n\n**The Black Market:** Access to a unique Auction House in Area 52 that ignores faction restrictions but charges a brutal 20% "Cartel Tax" on all transactions. \n\n**Hostile Takeover (PvP):** A dynamic world-PvP mechanic where Goblin guilds can "buy out" (capture) resource nodes in Nagrand (Mines, Gas Clouds). Holding a node generates passive gold for the guild, but flips the local guards to be hostile to rival Goblin cartels.'
      },

      classFantasies: [
        {
          class: 'Warrior',
          title: 'Bruiser-for-Hire',
          desc: 'Less "martial arts," more "dirty fighting." You are the heavy muscle for debt collection. Your "Charge" is rocket-assisted. Your "Shield Bash" uses a reinforced vault door. Your "Execute" is a point-blank shotgun blast (visual only). You wear plate armor not for honor, but because insurance premiums are lower if you wear safety gear.'
        },
        {
          class: 'Rogue',
          title: 'Corporate Fixer',
          desc: 'Specializes in "Hostile Takeovers" and industrial espionage. Your poisons are re-purposed industrial waste and toxic sludge. Pickpocket yields 10% more gold (embezzlement). Your Stealth is less about magic and more about a high-tech cloaking field that sometimes sparks and sputters when you take damage.'
        },
        {
          class: 'Hunter',
          title: 'Big Game Poacher',
          desc: 'Pets are investments, not friends. You don\'t "tame" beasts; you "break" them with shock collars. Uses a pneumatic "Net-Gun" instead of traps. Exotic munitions leave glowing radioactive residue. You treat rare spawns as "high-value assets" to be captured and sold to the highest bidder.'
        },
        {
          class: 'Mage',
          title: 'Pyrotechnician',
          desc: 'Magic via technology. You don\'t chant; you calibrate. Fireballs are launched from wrist-mounted mortars. Blink leaves a puff of black exhaust smoke and an oil slick. Frost Nova is a coolant leak from your backpack reactor. You are walking OSHA violation.'
        },
        {
          class: 'Warlock',
          title: 'Void-Contractor',
          desc: 'Demons aren\'t summoned; they are "sub-contracted" via binding clauses written in infernal legalese. Soulstones are literal soul-batteries you screw into a socket. Very unstable visuals—your minions sometimes complain about their pay or demand hazard pay in Demonic.'
        },
        {
          class: 'Priest',
          title: 'Field Medic',
          desc: 'Healing is a fee-for-service business. You are an insurance adjustor with a med-kit. "Holy Nova" sprays a revitalizing green chemical mist. "Resurrection" involves a jumper-cable shock to the chest. Your buffs are "Performance Enhancers" (experimental drugs).'
        }
      ],

      racials: [
        { name: 'Time is Money', desc: '1% increase to casting and attack speed. Efficiency is key to quarterly earnings.' },
        { name: 'Rocket Jump', desc: 'Activates a rocket belt to launch forward. Essential for tactical retreats or beating a coworker to a node. (2m CD)' },
        { name: 'Rocket Barrage', desc: 'Launches a volley of rockets from your belt at an enemy. (2m CD)' },
        { name: 'Pack Hobgoblin', desc: 'Calls a servant for instant bank access anywhere. He looks tired. (30m CD)' },
        { name: 'Better Living Through Chemistry', desc: '+15 Alchemy skill. Explosions are just chemistry in a hurry.' },
        { name: 'Best Deals Anywhere', desc: 'Always receive the best possible vendor discount, regardless of reputation.' }
      ],

      locations: {
        start: '**Starting Zone: "The Profit-Margin"**\nA massive, instanced Goblin transport barge adrift in the Twisting Nether. The ship has suffered a catastrophic "liquidity crisis" (reactor explosion). The starting quests involve fixing the Kaja\'Cola-fueled engine, fighting off void creatures leaking into the hull, and "negotiating" (i.e., looting) escape pod parts from rival contractors who didn\'t read the fine print.',
        hub: '**Capital Hub: "Gadgetzan Exports" (Nagrand)**\nA rapidly expanding strip-mine operation that evolves visually as the server completes daily quests. It starts as a few tents and grows into a neon-lit, smog-choked city that rivals Shattrath. It features the "Black Market Auction House," the "Corporate Lounge" inn (VIP only), and a statue of Trade Prince Steamwheedle made of solid gold.',
        outpost: '**Outpost: "Area 52 Annex" (Netherstorm)**\nA hostile takeover of the eastern side of Area 52. Questlines here involve corporate espionage against the Ethereals, stealing their eco-dome tech to patent it, and sabotaging Mana-Forges to drive up the price of mana crystals.',
        dungeons: '**Dungeon Ties:**\n**The Mana-Tombs:** The Cartel hires you to "liquidate" the Ethereal competition and steal their trade secrets.\n**The Mechanar:** A salvage operation. You are sent to strip the Tempest Keep structures for raw parts and sell them back to the Sha\'tar at a markup.'
      }
    },

    elves: {
      id: 'elves',
      name: 'High & Blood Elves',
      tagline: 'The Divided Soul',
      faction: 'Neutral Start -> Choice at L20',
      heroImage: 'https://imgur.com/cuuCVtS.jpeg',
      icon: <Crown className="w-6 h-6" />,
      themeColor: '#FFD700', // Gold/Sunwell
      accentColor: 'text-amber-300',

      overview: {
        fantasy: 'An identity forged in tragedy. You are a survivor of the Scourge invasion of Quel\'Thalas, defined by how you cope with the loss of the Sunwell. Do you seek to **Restore** it through discipline and ancient tradition (High Elf), or **Devour** power from other sources to survive the magical famine (Blood Elf)?\n\nThis race is about **Duality**. You start together in the Ghostlands, united by survival, but are slowly torn apart by ideology until you must make a permanent choice at Level 20. This choice is irreversible; it changes your racials, your capital city, your faction allegiance, and your character\'s eye color forever.',
        systemName: 'The Crucible of Choice',
        systemDesc: 'A mandatory solo scenario at Level 20. You confront an Echo of the Sunwell in a dream-state, assaulted by visions of your past leaders.\n\n**Alliance Path:** Reject the hunger. Choose discipline. Your eyes glow blue. You gain **"Grace of the Sunwell"** (Passive Mana Regen) and **"Spellbreaker"** (Reflect Chance). You reject Kael\'thas\'s teachings.\n**Horde Path:** Embrace the hunger. Dominate the energy. Your eyes glow green. You gain **"Arcane Torrent"** (AoE Silence/Restore) and **"Siphon Magic"**. You embrace the path of the Sin\'dorei.'
      },

      classFantasies: [
        {
          class: 'Paladin',
          title: 'Knight of the Silver Hand (A) / Blood Knight (H)',
          desc: '**High:** Classic golden light, defensive/protective. They view the Light as a sacred trust to be rebuilt, often carrying symbols of the old Alliance. \n**Blood:** Aggressive red/gold visuals. They view the Light as a resource to be bent to their will. "Seal of Blood" is standard. Their mounts wear red caparisons compared to the High Elf blue.'
        },
        {
          class: 'Mage',
          title: 'Arcanist (A) / Magister (H)',
          desc: '**High:** Frost and Arcane focus, clean lines, Kirin Tor aesthetic. They study nether-stability and seek to cure the addiction through discipline. \n**Blood:** Fire focus, chaotic visuals, spells look like they are burning the air itself. They study nether-weaponization and use Fel crystals to amplify their power.'
        },
        {
          class: 'Hunter',
          title: 'Ranger (A) / Farstrider (H)',
          desc: '**High:** Nature-aligned, woodland visual motifs. They bond with eagles and lynxes. They patrol the forests to heal the land. \n**Blood:** Uses darker arrows, red-feathered fletching, more militaristic. They bond with Dragonhawks and Mana-Wyrms. They patrol the forests to eradicate threats.'
        },
        {
          class: 'Warlock',
          title: 'Fel-Caster (Horde Only)',
          desc: 'Blood Elves who dove too deep. They don\'t hide their demons; they parade them as symbols of mastery over the Fel. Their fire spells are tinged green. They are the ultimate pragmatists, using the very energy that destroyed their home to protect what remains of it.'
        },
        {
          class: 'Priest',
          title: 'Cleric (A) / Soul-Mender (H)',
          desc: '**High:** Traditional Holy light, focused on mending the spirit and resisting the whispers of the Void. \n**Blood:** "Discipline" takes on a sinister tone—bending the will of the light to cauterize wounds. Shadow priests are viewed as "researchers" delving into the powers of the Naaru.'
        },
        {
          class: 'Rogue',
          title: 'Shadowblade',
          desc: 'Spies used by Lor\'themar or Vereesa. They use magic to muffle their footsteps, leaving faint arcane trails. High Elves use invisibility and distraction; Blood Elves use aggressive takedowns and mana-burn poisons.'
        }
      ],

      racials: [
        { name: 'Arcane Affinity', desc: '+10 Enchanting Skill. Magic is in your blood; you can sense magic items on the minimap.' },
        { name: 'Magic Resistance', desc: 'All magical resistance increased by 5. Adaptation to a magic-rich environment.' },
        { name: 'Unique: Mana Tap (Pre-L20)', desc: 'Drains mana from target. Replaced by faction ability at L20.' },
        { name: 'High Elf: Meditation', desc: 'Regenerate mana/energy while casting. (Passive) - Represents discipline.' },
        { name: 'Blood Elf: Arcane Torrent', desc: 'Silence all enemies within 8 yds for 2 sec and restore resource. (2m CD) - Represents domination.' }
      ],

      locations: {
        start: '**Starting Zone: "Sunspire Haven"**\nA shared refugee camp in the southern Ghostlands, separate from the main Blood Elf start. The quests focus on holding back the Scourge while debating the ethics of mana-draining. You see the ideological split happening in real-time among NPCs, with arguments breaking out between "Traditionalists" and "Radicals."',
        hub: '**Capital Hubs:**\n**Alliance:** "The Silver Covenant Enclave" (Stormwind). A dedicated district in the Mage Quarter, clean, white stone, and blue banners.\n**Horde:** "The Court of the Sun" (Silvermoon City). Full access to the city, embracing the new, darker architecture.',
        outpost: '**Outpost: "The Sanctum of the Spark"**\nA hidden, ancient shrine deep beneath the Haven where the "Crucible of Choice" takes place. It acts as a pilgrimage site for max-level players to switch factions (very expensive/long cooldown), representing a change of heart.',
        dungeons: '**Dungeon Ties:**\n**Magisters\' Terrace:** The ultimate confrontation with Kael\'thas. High Elves go to punish the traitor; Blood Elves go to redeem their people and put their mad prince out of his misery.\n**The Sunwell Plateau:** The culmination of the race\'s storyline. The restoration of the Sunwell unites both factions in purpose, if not in banner.'
      }
    },

    ogres: {
      id: 'ogres',
      name: 'Ogres',
      tagline: 'The Reclaimed Legacy',
      faction: 'Horde (Stonemaul Clan)',
      heroImage: 'https://imgur.com/b4F4qBk.jpeg',
      icon: <Hammer className="w-6 h-6" />,
      themeColor: '#ea580c', // Rust/Orange
      accentColor: 'text-orange-500',

      overview: {
        fantasy: 'For too long, Ogres have been reduced to brutes and punchlines. The Stonemaul Clan remembers the **Gorian Empire**—a time when Ogres were sorcerer-kings who ruled Draenor with iron and arcane fire. You are here to prove that Ogres are the true heirs of the planet, possessing both earth-shattering strength and terrifying intellect.\n\nThis is a race of **Scale and Weight**. You are larger than Tauren. You feel heavy. When you walk, the camera shakes slightly. You are the "tank" race, physically imposing and culturally proud. You view the Orcs as "little brothers" who lost their way, and the Gronn as false gods who must be toppled.',
        systemName: 'Two-Headed Magi',
        systemDesc: '**Mage/Warlock Only:** Your character model has two heads. You can customize both names (e.g., "Cho" and "Gall") and facial features. \n\n**The Second Head:** Acts as a built-in "announcer" for your gameplay. It alerts you to procs in /say ("Burn them, idiot!"), auto-responds to whispers with insults, and grants a passive resistance to Silence effects (one head keeps chanting while the other is gagged). The heads will bicker when you are idle.'
      },

      classFantasies: [
        {
          class: 'Warrior',
          title: 'Gorian Gladiator',
          desc: 'Uses "oversized" weapon models (2H weapons held in 1H - Titan\'s Grip style by default for animations). "Thunder Clap" is a literal foot stomp that cracks the ground texture. Your shout buffs are deep, resonant bellows that fear critters. You embody the physical dominance of the Highmaul Coliseum.'
        },
        {
          class: 'Mage',
          title: 'Imperator',
          desc: 'Uses earth-based runes for magic. Fire spells look like molten lava. Frost spells look like jagged crystal formations. They cast spells by punching the air rather than wiggling fingers. They are the scholars of the race, seeking to rebuild the arcane libraries of Goria.'
        },
        {
          class: 'Warlock',
          title: 'Void-Caller',
          desc: 'Ogres of the Twilight\'s Hammer legacy. They use physical brute force to constrain their demons. "Summon" animations involve dragging the demon out of a portal by its neck. They view Fel magic as just another tool for domination.'
        },
        {
          class: 'Shaman',
          title: 'Geomancer',
          desc: 'Totems are massive stone obelisks carved with Gorian runes. Lightning Bolt is a jagged, red-hued "Gorian Lightning." Ascendance turns you into a stone golem. You speak to the earth not with requests, but with commands.'
        },
        {
          class: 'Hunter',
          title: 'Beastlord',
          desc: 'You don\'t "tame" beasts; you break them. Pets scale slightly larger than normal. Start with a Rylak. Traps are massive iron cages. You wear the trophies of your kills, covering your armor in furs and bones.'
        }
      ],

      racials: [
        { name: 'Brute Force', desc: 'Increases the Strength of all party members by 2%. Your mere presence inspires confidence.' },
        { name: 'Ogre\'s Might', desc: 'Active: Grow 20% larger. +15% Strength, -10% Intellect. (2m CD). "ME SMASH!" mode.' },
        { name: 'Titanic Build', desc: 'Increases Total Stamina by 2%. You are hard to kill, simply because there is so much of you.' },
        { name: 'Thick Skinned', desc: 'Reduces Physical damage taken by 1%. Arrows just bounce off.' },
        { name: 'Gorian Legacy', desc: '+15 Enchanting. Or "Smashing magic into things." A lost art of the Empire.' }
      ],

      locations: {
        start: '**Starting Zone: "The Stonemaul Cradle"**\nA contested canyon between Feralas and Thousand Needles. You must unite the scattered Ogre tribes under the banner of the Horde, fighting off Alliance encroachments and feral Gordunni ogres. The questline involves proving your intellect to the clan elders and recovering lost artifacts.',
        hub: '**Capital Hub: "Goria\'s Vantage" (Blade\'s Edge)**\nA rebuilt fortress in the mountains where Ogre players collect artifacts to unlock "Imperator" transmog sets. It serves as a stark contrast to the primitive ogre mounds found elsewhere, featuring actual architecture, libraries, and forges.',
        outpost: '**Outpost: "Highmaul Embassy" (Nagrand)**\nA diplomatic tent outside Garadar where Stonemaul emissaries try to convince the Mag\'har Orcs that the Ogres have changed. Quests involve proving your worth to the Orcs by hunting local fauna.',
        dungeons: '**Dungeon Ties:**\n**Gruul\'s Lair:** The ultimate vendetta. Gruul is the "Dragonkiller," but he is also the Enslaver of Ogres. You are there to break the chains and end the reign of the Gronn forever.\n**Bloodmaul Slag Mines:** A rescue mission to free your kin from servitude and recruit them to the new Gorian dream.'
      }
    },

    saberon: {
      id: 'saberon',
      name: 'Saberon',
      tagline: 'The Primal Hunter',
      faction: 'Horde (Primal Pact)',
      heroImage: 'https://imgur.com/lR8vivT.jpeg',
      icon: <Crosshair className="w-6 h-6" />,
      themeColor: '#CA8A04', // Feral Gold
      accentColor: 'text-yellow-500',

      overview: {
        fantasy: 'The apex predators of Draenor. While Orcs conquered and Draenei hid, the Saberon **hunted**. You join the Horde because they respect strength, but you view the "civilized" races with pity. You have no money, only trophies. You have no king, only the Alpha. You are a survivalist who thrives in the harshest environments.\n\nGameplay focuses on **Mobility and Bleeds**. You are a blur of fur and claws on the battlefield. You do not ride mounts comfortably; your running animation is a sprint on all fours. You speak in short, growling sentences and view armor as a second skin to be earned.',
        systemName: 'The Trophy Hunt',
        systemDesc: 'Saberon do not gain Rested XP in cities. They gain it by "Hunting" specific elites in the wild. \n\n**Trophies:** Killing dungeon bosses grants "Trophies" (teeth, ears, scales) that can be bartered at the Saberon hub for unique "Bone-Armor" cosmetics that overlay your existing gear. Completing a full "Trophy Set" (e.g., all bosses in Hellfire Citadel) grants a permanent title and a unique roar emote.'
      },

      classFantasies: [
        {
          class: 'Druid',
          title: 'Form-Shifter',
          desc: '**Cat Form:** You ARE the Saberon (no change, just prowl animation). \n**Bear Form:** A massive, armored "Alpha" Saberon. \n**Moonkin:** A "Witch Doctor" form draped in feathers and skulls. \n**Flight:** A Wyvern-hybrid shift. You view Druidism not as balance, but as mastering every predator in the ecosystem.'
        },
        {
          class: 'Rogue',
          title: 'Stalker',
          desc: 'No daggers. You use "Fist Weapons" (Claws) exclusively for your animations. Stealth run speed is significantly faster on all fours. Ambush is a throat-bite animation. You are the terror in the tall grass.'
        },
        {
          class: 'Warrior',
          title: 'Pride-Lord',
          desc: 'Battle Shout is a terrifying roar that actually fears critters. Execute is a bite animation. You fight with a savagery that unnerves even Orcs. You prefer bleeding your enemies out, watching the life drain from them.'
        },
        {
          class: 'Hunter',
          title: 'Pack-Leader',
          desc: 'You fight alongside your pet as an equal. Melee animations (Wing Clip, Raptor Strike) are seamless claw swipes. You can tame "Feral Druids" (just kidding... mostly). You communicate with your pet via growls, not commands.'
        },
        {
          class: 'Shaman',
          title: 'Element-Binder',
          desc: 'Primitive shamanism. Totems are piles of skulls and sticks tied with leather. Ghost Wolf turns you into a spectral tiger. Bloodlust is a "Primal Howl" that echoes across the map. You bargain with the elements of blood and earth.'
        }
      ],

      racials: [
        { name: 'Pounce', desc: 'Leap 20 yards to target. If used from Stealth, stuns for 2 sec. Replaces the need for a mount in combat.' },
        { name: 'Savage Roar', desc: 'Active: +10% Attack Power for 10 sec. (2m CD). Terrifies nearby critters.' },
        { name: 'Apex Predator', desc: 'Movement speed +5%. Damage against Beasts +5%. You are the top of the food chain.' },
        { name: 'Primal Senses', desc: '+15 Skinning. You can track enemies below 30% HP on the minimap (Hunter\'s Mark visual).' }
      ],

      locations: {
        start: '**Starting Zone: "Zangarmarsh Hunt" (Level 58)**\nA high-stakes survival tutorial. You start with nothing—no weapons, no armor. You must craft your first weapon from the spine of a marsh strider. You are being hunted by the Naga, and the tables must turn. The zone is dark, wet, and atmospheric.',
        hub: '**Capital Hub: "The Brood-Den" (Terokkar)**\nA hidden tree-city high in the canopy. No vendors accept gold here; only trade goods (meat, leather) and trophies. It connects to the Arakkoa spy network, allowing you to trade intel for supplies.',
        outpost: '**Outpost: "Fang\'s Edge" (Blade\'s Edge)**\nA hunting camp dedicated to bringing down the Gronn. It serves as the main daily quest hub for the "Trophy Hunt" system. Here, you plan raids on the Ogres below.',
        dungeons: '**Dungeon Ties:**\n**The Underbog:** Tracking the great hydra Ghazan. A rite of passage for all Saberon hunters. Bringing back his fang is a requirement for your epic mount.\n**The Steamvaults:** Vengeance against the Naga who encroached on your Zangarmarsh hunting grounds. You are there to reclaim the water.'
      }
    },

    broken: {
      id: 'broken',
      name: 'The Broken',
      tagline: 'The Redeemed Shadow',
      faction: 'Alliance (Ashtongue Redeemers)',
      heroImage: 'https://imgur.com/jH31cAZ.jpeg',
      icon: <Ghost className="w-6 h-6" />,
      themeColor: '#14b8a6', // Teal/Nether
      accentColor: 'text-teal-400',

      overview: {
        fantasy: 'Cut off from the Light, twisted by Fel, but not broken in spirit. You are the **Survivors**. The Draenei look at you with pity; the Orcs with disgust. But you possess a power neither understands: the ability to walk in both the Light and the Void without being consumed by either. You are the bridge between the Naaru and the darker truths of Outland.\n\nYour aesthetic is **Ragged Nobility**. Tattered cloaks, cracked crystal staves, and glowing, weeping sores of fel energy. You fight not for glory, but for a home. You are led by Akama, who plays a dangerous double-game with Illidan.',
        systemName: 'Vengeance & Atonement',
        systemDesc: 'A unique resource bar. \n**Vengeance:** Fills as you take damage. Can be spent to boost Shadow damage. Represents giving in to the despair. \n**Atonement:** Fills as you heal or deal Holy damage. Can be spent on a powerful self-sustain HoT. Represents holding onto the Light.\nMastering the Broken means balancing your inner turmoil—lean too far into Vengeance and you risk becoming a Lost One (visual debuff).'
      },

      classFantasies: [
        {
          class: 'Shaman',
          title: 'Krokul Nobundo-Disciple',
          desc: 'The defining class. "Totems" are floating, broken crystals. Elemental spirits are darker, more chaotic forms of fire and earth. They speak to the "Broken" elements of Outland—the corrupted earth and the fel-fire. They seek to heal the land to heal themselves.'
        },
        {
          class: 'Warlock',
          title: 'Fel-Binder',
          desc: 'You turn the enemy\'s weapon against them. Your demons are enslaved with chains of light. Shadow Bolts look like jagged glass. You use the Fel to destroy the Legion, a dangerous irony that makes other Alliance races uneasy.'
        },
        {
          class: 'Rogue',
          title: 'Deathsworn',
          desc: 'Masters of stealth who learned from Akama. Vanish creates a cloud of red mist. Eviscerate leaves a fel-green scar. You specialize in killing demons from the shadows, using their own tactics against them. You are the knife in the dark.'
        },
        {
          class: 'Hunter',
          title: 'Wasteland Survivor',
          desc: 'Uses scavenged technology. Traps are jury-rigged fel devices. Pets are usually Void-warped beasts (Warp Stalkers). You track demons with supernatural precision, smelling the sulfur on them from miles away.'
        },
        {
          class: 'Mage',
          title: 'Nether-Mage',
          desc: 'Magic practiced in secret. Arcane Missiles are purple void-energy. Polymorph turns the target into a mutated cockroach. You tap into the leylines of Outland directly, bypassing the need for refined mana crystals.'
        }
      ],

      racials: [
        { name: 'Soul Siphon', desc: 'Chance on hit to restore 2% Mana/Energy. You feed on the energy of your enemies.' },
        { name: 'Ashtongue Cunning', desc: '+10 Stealth Detection. +10 Lockpicking. You know how to get into places you aren\'t wanted.' },
        { name: 'Fel-Scarred', desc: '-1% Shadow Damage Taken. Immune to Fel Taint environment damage. You have already endured the worst.' },
        { name: 'Fragmented Memories', desc: '+10 Jewelcrafting. You remember the old ways of Argus, if only in flashes.' }
      ],

      locations: {
        start: '**Starting Zone: "The Ashtongue Pledge" (Level 58)**\nStart as a double-agent in Shadowmoon Valley, pretending to serve Illidan while gathering intel for Akama and the Naaru. The atmosphere is oppressive and paranoid. You must torture prisoners (who are actually demons in disguise) to prove your loyalty to the Illidari while smuggling supplies to the resistance.',
        hub: '**Capital Hub: "The Lower Rise" (Shattrath)**\nA refugee camp that you upgrade into a district. It feels desperate, crowded, and hopeful. It serves as the bridge between the Aldor and Scryers, as the Broken deal with both. It features the "Shaman\'s Stone," a place of meditation.',
        outpost: '**Outpost: "Greyheart Enclave" (Zangarmarsh)**\nA hidden village of "Lost Ones" that you are trying to rehabilitate. Quests involve gathering food and medicine for your devolved kin, defending them from Naga slavers.',
        dungeons: '**Dungeon Ties:**\n**Shadow Labyrinth:** Confronting the darker aspects of your heritage and the Shadow Council. You seek to silence the whispers.\n**The Black Temple:** The ultimate goal. Helping Akama reclaim the temple from Illidan and purifying the Karabor.'
      }
    },

    wildhammer: {
      id: 'wildhammer',
      name: 'Wildhammer Dwarves',
      tagline: 'The Sky-Reaver',
      faction: 'Alliance (Wildhammer Clan)',
      heroImage: 'https://imgur.com/NmluyOP.jpeg',
      icon: <Feather className="w-6 h-6" />,
      themeColor: '#0ea5e9', // Sky Blue
      accentColor: 'text-sky-400',

      overview: {
        fantasy: 'While the Bronzebeards hide in mountains, the Wildhammers **own the sky**. You are a tattooed, storm-charged warrior who feels claustrophobic indoors. You bond with a Gryphon not as a mount, but as a soul-partner. You are loud, boisterous, and fiercely loyal.\n\nThis is the race for **Verticality**. You have slow fall mechanics, jump boosts, and a connection to the storms of Outland. You are the Alliance\'s answer to the Orcish Wyvern riders—faster, braver, and much louder. You view the Nether Drakes as rivals to be raced, not enemies to be fought.',
        systemName: 'The Gryphon Bond',
        systemDesc: 'You start with a **Gryphon Hatchling** item. \n\n**Level 10-60:** You summon it in combat (Guardian). It levels with you, gaining abilities based on your kills. It can stun enemies or fetch loot. \n**Level 70:** It becomes your **Instant-Cast Flight Form** (functionally a mount, but instant). You can customize its armor, beak type, and feather pattern via a unique "Stable Master" UI. You can also name it, and it will appear in your character pane.'
      },

      classFantasies: [
        {
          class: 'Shaman',
          title: 'Stormcaller',
          desc: 'The iconic Wildhammer class. Lightning bolts are brighter, louder, and blue-white. Chain Lightning arcs like a tesla coil. Your totems are carved from Aerie Peak gryphon bones. You don\'t commune with the elements; you wrestle them.'
        },
        {
          class: 'Warrior',
          title: 'Thane',
          desc: 'Specializes in Dual-Wielding Hammers. "Thunder Clap" summons a localized storm cloud. "Charge" leaves a trail of static. You are a berserker of the skies, often diving into combat from above (no fall damage).'
        },
        {
          class: 'Hunter',
          title: 'Sky-Hunter',
          desc: 'Uses thrown weapons (Axes/Hammers) visually instead of bows/guns. Pets are avian (Eagles, Owls, Gryphons). You can track "Air Elementals" on the minimap. Your traps are "Storm Runes" placed on the ground.'
        },
        {
          class: 'Druid',
          title: 'Aerie-Keeper',
          desc: 'Forms are avian-themed. Moonkin is a feathered "Storm-Crow" humanoid. Bear form has Gryphon-like beak features. Cat form is a mountain lynx. You are the guardian of the roost.'
        },
        {
          class: 'Rogue',
          title: 'Wind-Walker',
          desc: 'Subtlety focused. Shadowstep looks like a gust of wind. Sprint leaves a blurred trail of leaves and feathers. You drop from the sky silently, an assassin who strikes from the clouds.'
        }
      ],

      racials: [
        { name: 'Stormborn', desc: '+10 Nature Resistance. 15% Stun Resistance. You were born in a thunderstorm; a little shock won\'t stop you.' },
        { name: 'Sky-Captain', desc: '+5% Mounted Speed (Ground & Flying). Stacks with other effects. You know how to read the wind currents.' },
        { name: 'Thunderstrike', desc: 'Active: Hurl a storm hammer. Stuns for 2 sec + Nature Dmg. (2m CD). A classic Wildhammer greeting.' },
        { name: 'Gryphon\'s Eye', desc: '+1% Hit Chance with Ranged Weapons and while Dual-Wielding. Sharp eyes from high altitudes.' },
        { name: 'Aerial Specialist', desc: '+15 Leatherworking. (Saddles/Harnesses). You make your own gear from the beasts you hunt.' }
      ],

      locations: {
        start: '**Starting Zone: "The Hinterlands Peaks"**\nGameplay takes place entirely on cliffs and Gryphon roosts. Falling is a real danger. You learn to ride the wind currents early, bombing forest trolls from above. The quests involve hatching your gryphon, defending the aerie, and proving your worth to High Thane Falstad.',
        hub: '**Capital Hub: "Kurdran\'s Watch" (Shadowmoon Valley)**\nA high-altitude fortress accessible only by flying mount, serving as the forward base for the Alliance Air Force. It has the best view in Outland. It features a flight path to every zone and a specialized "Gryphon Racer" mini-game.',
        outpost: '**Outpost: "Eagle\'s Eye" (Blade\'s Edge)**\nA small camp perched on a spire in the Blade\'s Edge Mountains. It serves as a staging ground for attacks on the Ogres below. You engage in aerial dogfights with the nether drakes.',
        dungeons: '**Dungeon Ties:**\n**Tempest Keep:** The Sky-Reavers are fascinated by the floating fortress. You want to claim it for the Alliance as the ultimate mobile aerie.\n**Sethekk Halls:** You have a special hatred for the Arakkoa, the "corrupted bird men," and seek to purge them for their mockery of the skies.'
      }
    }
  };

  const activeData = races[activeRace];

  // Component for the Tab Navigation
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-6 py-3 font-hero uppercase tracking-widest text-sm transition-all duration-300 border-b-2 
        ${activeTab === id
          ? `text-white ${activeData.accentColor.replace('text-', 'border-')}`
          : 'text-gray-500 border-transparent hover:text-gray-300'}`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-body selection:bg-[#f8b700] selection:text-black overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .hero-vignette {
          background: radial-gradient(circle at center, transparent 0%, #050505 90%);
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .gold-border {
          border: 1px solid transparent;
          border-image: linear-gradient(to right, transparent, #b8860b, transparent) 1;
        }
      `}</style>

      {/* --- HERO SECTION WITH PARALLAX --- */}
      <div className="relative w-full h-[60vh] overflow-hidden border-b-4 border-[#1a1a1a]">
        {/* Dynamic Background */}
        <div
          className={`absolute inset-0 bg-cover bg-top transition-all duration-1000 ease-out transform ${isAnimating ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`}
          style={{ backgroundImage: `url(${activeData.heroImage})` }}
        ></div>

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        <div className="absolute inset-0 hero-vignette opacity-80"></div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col items-start z-10">
          <div className={`flex items-center gap-3 mb-4 px-3 py-1 bg-black/50 border ${activeData.accentColor.replace('text-', 'border-')} rounded backdrop-blur-md`}>
            <span className={`${activeData.accentColor}`}>{activeData.icon}</span>
            <span className={`font-hero text-xs tracking-[0.2em] uppercase text-gray-200`}>{activeData.faction}</span>
          </div>
          <h1 className="font-hero text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter shadow-black drop-shadow-lg">
            {activeData.name}
          </h1>
          <p className={`font-hero text-lg md:text-xl ${activeData.accentColor} tracking-[0.3em] uppercase opacity-90`}>
            {activeData.tagline}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-20">

        {/* --- RACE SELECTOR (Floating) --- */}
        <div className="bg-[#111111] border border-white/10 rounded-lg shadow-2xl p-4 mb-12 flex flex-wrap justify-center gap-8 backdrop-blur-xl">
          {Object.entries(raceGroups).map(([groupKey, group]) => (
            <div key={groupKey} className="flex flex-col gap-2 items-center">
              <h3 className={`font-hero text-xs uppercase tracking-widest ${group.color} opacity-70 mb-2`}>{group.title}</h3>
              <div className="flex gap-2">
                {group.races.map(raceKey => {
                  const r = races[raceKey];
                  const isActive = activeRace === raceKey;
                  return (
                    <button
                      key={raceKey}
                      onClick={() => setActiveRace(raceKey)}
                      className={`relative w-16 h-16 rounded border transition-all duration-300 overflow-hidden group ${isActive
                          ? `border-${r.accentColor.split('-')[1]}-500 ring-2 ring-${r.accentColor.split('-')[1]}-500/50 scale-110`
                          : 'border-white/10 hover:border-white/30 hover:scale-105'
                        }`}
                    >
                      <img src={r.heroImage} alt={r.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-white drop-shadow-md ${isActive ? 'opacity-100' : 'opacity-70'}`}>{r.icon}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* --- MAIN CONTENT TABS --- */}
        <div className="flex justify-center mb-8 border-b border-white/10">
          <TabButton id="overview" label="Lore & Destiny" icon={BookOpen} />
          <TabButton id="classes" label="Class Fantasies" icon={Sword} />
          <TabButton id="racials" label="Racial Traits" icon={Activity} />
          <TabButton id="origins" label="Origins & Hubs" icon={Map} />
        </div>

        {/* --- TAB CONTENT AREA --- */}
        <div className="min-h-[500px] animate-fade-in pb-20">

          {/* 1. OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="font-hero text-3xl text-white border-l-4 border-[#f8b700] pl-4">The Fantasy</h2>
                <div className="text-gray-300 text-lg leading-relaxed space-y-4 font-light">
                  {formatText(activeData.overview.fantasy)}
                </div>
              </div>

              <div className="bg-[#151515] border border-white/5 rounded-xl p-8 relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${activeData.accentColor.split('-')[1]}-500 to-transparent`}></div>
                <div className="absolute -right-10 -top-10 opacity-5 rotate-12 transform group-hover:rotate-0 transition-transform duration-700">
                  <Star size={200} />
                </div>

                <h3 className={`font-hero text-xl ${activeData.accentColor} mb-4 flex items-center gap-2`}>
                  <Hexagon className="w-5 h-5" />
                  Unique System: {activeData.overview.systemName}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm whitespace-pre-line">
                  {formatText(activeData.overview.systemDesc)}
                </p>
              </div>
            </div>
          )}

          {/* 2. CLASSES TAB */}
          {activeTab === 'classes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeData.classFantasies.map((cls, idx) => (
                <div key={idx} className="bg-[#111] border border-white/10 p-6 rounded hover:border-[#f8b700]/50 transition-colors group">
                  <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                    <h3 className="font-hero text-lg text-white group-hover:text-[#f8b700] transition-colors">{cls.class}</h3>
                    <div className="text-gray-600 group-hover:text-white transition-colors"><Shield size={16} /></div>
                  </div>
                  <h4 className={`text-xs uppercase tracking-widest ${activeData.accentColor} mb-2`}>{cls.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {formatText(cls.desc)}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* 3. RACIALS TAB */}
          {activeTab === 'racials' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {activeData.racials.map((racial, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 hover:bg-white/5 rounded transition-colors">
                  <div className={`mt-1 p-2 rounded bg-black border border-white/10 ${activeData.accentColor}`}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-hero text-white text-lg">{racial.name}</h4>
                    <p className="text-gray-400 text-sm mt-1">{racial.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 4. ORIGINS TAB */}
          {activeTab === 'origins' && (
            <div className="grid grid-cols-1 gap-12">
              {/* 2x2 Grid for Location Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#111] p-8 rounded border border-white/10">
                  <div className="flex items-center gap-3 mb-4 text-[#f8b700]">
                    <Compass size={24} />
                    <h3 className="font-hero text-xl uppercase tracking-widest">Starting Experience</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                    {formatText(activeData.locations.start)}
                  </p>
                </div>

                <div className="bg-[#111] p-8 rounded border border-white/10">
                  <div className="flex items-center gap-3 mb-4 text-[#f8b700]">
                    <Anchor size={24} />
                    <h3 className="font-hero text-xl uppercase tracking-widest">Capital Hubs</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                    {formatText(activeData.locations.hub)}
                  </p>
                </div>

                <div className="bg-[#111] p-8 rounded border border-white/10">
                  <div className="flex items-center gap-3 mb-4 text-[#f8b700]">
                    <Map size={24} />
                    <h3 className="font-hero text-xl uppercase tracking-widest">Outposts</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                    {formatText(activeData.locations.outpost)}
                  </p>
                </div>

                <div className="bg-[#111] p-8 rounded border border-white/10">
                  <div className="flex items-center gap-3 mb-4 text-[#f8b700]">
                    <Skull size={24} />
                    <h3 className="font-hero text-xl uppercase tracking-widest">Dungeon Ties</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                    {formatText(activeData.locations.dungeons)}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default TheNewBlood;