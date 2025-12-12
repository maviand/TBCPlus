import React, { useState } from 'react';
import {
  Hammer, FlaskConical, Utensils, Zap, HeartPulse, Fish,
  Leaf, Scissors, Mountain, Star, Crown, PenTool, Gem, Wrench, Sword, Skull, BookOpen, Scroll, Feather, Shield, X
} from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';

const TheArtisansCodex = () => {
  const [activeProfession, setActiveProfession] = useState('overview');

  // --- INSPECTION STATE ---
  const [selectedItem, setSelectedItem] = useState(null);

  // Helper to parse bold text
  const formatText = (text) => {
    if (!text) return null;
    // Handle both literal newlines and escaped newlines (from JSON data)
    const lines = text.split(/\\n|\n/);
    return lines.map((line, lineIndex) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const content = parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex} className="text-[#ffd100] font-bold">{part.slice(2, -2)}</strong>;
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

  // --- WOW TOOLTIP COMPONENT ---
  const WowTooltip = ({ item }) => {
    if (!item) return null;
    const qualityColors = {
      legendary: { text: 'text-[#ff8000]', border: 'border-[#ff8000]' },
      epic: { text: 'text-[#a335ee]', border: 'border-[#a335ee]' },
      rare: { text: 'text-[#0070dd]', border: 'border-[#0070dd]' },
      uncommon: { text: 'text-[#1eff00]', border: 'border-[#1eff00]' },
      common: { text: 'text-white', border: 'border-[#444]' }
    };
    const q = qualityColors[item.quality] || qualityColors.common;

    return (
      <div className={`bg-[#070710] border ${q.border} rounded-[4px] p-4 shadow-2xl max-w-[350px] w-full font-body text-[13px] leading-snug relative text-white border-opacity-60`}>
        {/* Header */}
        <div className={`font-bold text-[15px] mb-1 tracking-wide ${q.text}`}>{item.name}</div>
        {item.quality !== 'artifact' && item.ilvl && <div className="text-[#ffd100] font-bold">Item Level {item.ilvl}</div>}
        <div className="text-white">Binds when picked up</div>
        {item.unique && <div className="text-white">Unique-Equipped</div>}

        {/* Slot & Type */}
        <div className="flex justify-between text-white mt-1">
          <span>{item.slot}</span>
          <span>{item.armorType}</span>
        </div>

        {/* Stats */}
        <div className="my-2 space-y-0.5">
          {item.armor && <div className="text-white">{item.armor} Armor</div>}
          {item.damage && (
            <div className="flex justify-between text-white font-medium gap-4">
              <span>{item.damage} Damage</span>
              <span>Speed {item.speed}</span>
            </div>
          )}
          {item.dps && <div className="text-white mb-1">({item.dps} damage per second)</div>}
          {item.stats && (typeof item.stats === 'string' ? item.stats.split('\n') : item.stats).map((stat, i) => (
            <div key={i} className="text-white">{stat.startsWith('+') ? stat : `+ ${stat}`}</div>
          ))}
        </div>

        {/* Requirements */}
        <div className="mt-2 space-y-0.5">
          {item.durability && <div className="text-white">Durability {item.durability} / {item.durability}</div>}
          <div className="text-white">Requires Level 70</div>
          {item.req && <div className="text-white">{item.req}</div>}
        </div>

        {/* Effects (Green Text) */}
        <div className="text-[#1eff00] mt-3 space-y-2">
          {item.effects && item.effects.map((effect, i) => (
            <div key={i}>{effect}</div>
          ))}
        </div>

        {/* Flavor Text */}
        {item.flavor && (
          <div className="text-[#ffd100]/80 italic mt-4 text-center">"{item.flavor}"</div>
        )}
      </div>
    );
  };

  // --- MODAL TOOLTIP COMPONENT ---
  const InspectionWindow = ({ item, onClose }) => {
    if (!item) return null;

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
        <div className="relative animate-in fade-in zoom-in duration-200">
          <button onClick={onClose} className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"><X className="w-8 h-8" /></button>
          <WowTooltip item={item} />
        </div>
      </div>
    );
  };

  // --- CLICKABLE ITEM CARD ---
  const WowItem = ({ item, isLegendary = false }) => {
    if (!item) return null;
    const qualityColors = {
      legendary: { border: 'border-[#ff8000]', text: 'text-[#ff8000]', glow: 'legendary-glow' },
      epic: { border: 'border-[#a335ee]', text: 'text-[#a335ee]', glow: '' },
      rare: { border: 'border-[#0070dd]', text: 'text-[#0070dd]', glow: '' },
    };

    const q = qualityColors[item.quality] || qualityColors.epic;

    return (
      <div
        onClick={() => setSelectedItem(item)}
        className={`bg-[#0b0d10] border border-[#2f2f35] p-4 rounded flex gap-4 items-start group hover:bg-[#15171e] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] h-full ${q.glow}`}
      >
        <div className={`w-12 h-12 flex-shrink-0 bg-[#000] border-2 ${q.border} rounded flex items-center justify-center shadow-lg relative z-10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
          {item.icon || <Star className={`w-6 h-6 ${q.text}`} />}
        </div>
        <div className="relative z-10">
          <h5 className={`font-bold text-sm ${q.text} mb-1`}>{item.name}</h5>
          <span className="text-[10px] text-stone-500 uppercase tracking-widest mb-1 block">{isLegendary ? "Masterwork Reward" : item.type || "Item"}</span>
          {!isLegendary && <p className="text-xs text-[#aeb6bf] leading-relaxed line-clamp-2">{formatText(item.desc)}</p>}
          <span className="text-[9px] text-[#5c5c63] mt-2 block italic group-hover:text-[#c29c55] transition-colors">Click to Inspect</span>
        </div>
      </div>
    );
  };

  // --- DATA: PROFESSIONS ---
  const professions = {
    overview: {
      id: 'overview',
      name: 'The Mission',
      title: 'Hands of the Hero',
      icon: <BookOpen className="w-6 h-6" />,
      desc: '**Philosophy:** In The Burning Crusade, a character’s profession is not merely a revenue stream or a spreadsheet of passive stats; it is a pillar of their identity within the world. A Master Blacksmith should feel different from a Grand Master Alchemist in the heat of battle.\n\nOur mission is to shift professions from **Obligation** to **Opportunity**.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nProfessions were often binary: you either had the 'bis' profession (Drums/Ring Enchants) or you were playing sub-optimally. Gathering professions were purely economic, and secondary professions were chores.",
        plus: "**The Vision for Plus:** \nWe created three pillars for the overhaul:\n\n1. **Situational Power (On-Use):** Every profession gains specialized 'Oh Sh*t' buttons. Tailors weave nets; Blacksmiths sunder armor; Engineers interrupt.\n2. **Gathering Viability:** Gathering is no longer passive. Miners and Herbalists gain combat cooldowns and utility.\n3. **Social Interdependence:** High-level crafting requires a web of social connections, revitalizing the guild economy."
      },
      coreSystem: {
        title: 'The Bridge: Smoothing the 1-300 Curve',
        desc: 'The "Vanilla Gap" is the biggest barrier to entry for new alts. We are introducing **"Apprenticeship Projects"** to fix the material drought.\n\n**The "Bulk Commission" System:**\nInstead of crafting 40 Bracers that get vendor-trashed, players now craft "Supply Crates".\n\n**Mechanic:** Players purchase "Crate Blueprints" from trainers (Levels 75, 150, 225, 300).\n**Efficiency:** Crates consume 3x materials but grant 5 guaranteed skill points and reputation.'
      },
      raidUtility: [
        { name: 'Blacksmithing: Weighted Stones', quality: 'uncommon', type: 'Leveling Item', desc: 'Consumes Rough Stone x10. Grants skill up to 75.', ilvl: 1, slot: 'Consumable', stats: '', flavor: "Sharpens weapons.", effects: ["Removes the need to craft 500 copper bracers."] },
        { name: 'Leatherworking: Tanning Sludge', quality: 'uncommon', type: 'Leveling Item', desc: 'Consumes Ruined Leather Scraps.', ilvl: 1, slot: 'Consumable', stats: '', flavor: "Smells awful, works wonders.", effects: ["Converts scraps into Light Leather at a 3:1 ratio (Inefficient but grants skill)."] },
        { name: 'Enchanting: Vellum of the Apprentice', quality: 'uncommon', type: 'Leveling Item', desc: 'Allows low-level enchants to be placed on paper.', ilvl: 1, slot: 'Consumable', stats: '', flavor: "Practice makes perfect.", effects: ["Finally allows low-level enchanters to sell their work on the AH."] }
      ],
      specs: [
        { name: 'Situational Power', title: 'Tactical Agency', desc: '**Goal:** Every profession gains "buttons to press" that change the tide of battle, rewarding game knowledge over raw spreadsheet throughput.' },
        { name: 'Gathering Viability', title: 'Active Gameplay', desc: '**Goal:** Miners, Herbalists, and Skinners gain combat cooldowns and passive stat scaling to make them competitive with crafting professions.' },
        { name: 'Social Economy', title: 'Interdependence', desc: '**Goal:** High-level crafting requires a web of social connections. No artisan is an island; the guild economy is revitalized.' }
      ]
    },
    alchemy: {
      id: 'alchemy',
      name: 'Alchemy',
      title: 'The Philosopher\'s Legacy',
      icon: <FlaskConical className="w-6 h-6" />,
      image: 'https://i.imgur.com/2IgNFRu.jpeg',
      desc: 'Alchemy is transformed from a passive craft into a science of risk and reward. A master Alchemist is a tactical genius, deploying cauldrons and volatile concoctions to turn the tide.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nIn the original Burning Crusade, Alchemy was fundamentally a profession of passive consumption. The 'Discovery' mechanic was a brilliant addition that made crafting basic potions exciting. However, the profession's impact on gameplay was static. You crafted your flasks in Shattrath, drank them at the start of the raid, and your interaction with the profession ended there. The *Alchemist's Stone* was a solid entry-level trinket, but it was quickly replaced by Tier 4/5 drops.",
        plus: "**The Vision for Plus:** \nWe wanted to lean heavily into the 'Mad Scientist' fantasy. An Alchemist should be a master of fluids and reactions who can alter the state of the battlefield. \n\n1. **Active Utility:** We introduced 'Deployable' items. The *Cauldron of Fortification* isn't just a bag-saver; it's a physical object that the raid gathers around, reinforcing the Alchemist's role as the provider.\n2. **Risk vs. Reward:** The new 'Volatility' system adds a gambling element to high-end crafting. Do you create a safe, standard potion? Or do you attempt a 'Volatile' brew which grants significantly higher stats but carries a 5% chance to polymorph you?\n3. **Specialization Fantasy:** We deepened the specs. A *Potion Master* is now a combat medic with injectors. A *Transmutation Master* is an economist who can reshape matter."
      },
      coreSystem: {
        title: 'Volatility & Perfection',
        desc: 'The laboratory is no longer a safe haven; it is a crucible of volatility. Masters of the craft risk their very forms to achieve perfection. \n\n**Volatile (iLvl +3):** Unstable but potent. These brews thrum with chaotic energy, granting immense power but carrying a 5% risk of polymorphing the user into a harmless critter for 2s.\n**Perfected (iLvl +7):** Flawless clarity. These rare creations represent the pinnacle of alchemy, granting additional secondary stats without the instability.'
      },
      legacyMastery: {
        title: 'Legacy Mastery: Timeworn Knowledge',
        desc: 'We are re-enabling Old World recipes with "Timeworn" scaling. These items require original Azeroth materials (Black Lotus, Dreamfoil) but produce Level 70 equivalents, keeping the old world economy alive.',
        items: [
          '**Timeworn Flask of Titans:** Now grants +500 Health (Scaling up from 400). Requires Black Lotus.',
          '**Timeworn Supreme Power:** The budget option for raiders. Requires Dreamfoil.'
        ]
      },
      raidUtility: [
        { name: 'Cauldron of Fortification', quality: 'epic', type: 'Deployable', desc: 'Creates a bubbling cauldron that raid members can use to gain the "Fortified Spirits" buff, increasing all stats by 30 and restoring health and mana. The cauldron has 25 charges and persists for 3 minutes.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Bubbling with vitality.", effects: ["Use: Place a Cauldron of Fortification. Party members can use it to gain a flask-like buff."], icon: <img src="https://i.imgur.com/6ya2UAF.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Phial of Attenuation', quality: 'epic', type: 'Deployable', desc: 'Sets out a rack of unstable compounds. Allies can choose to imbibe a "Fire Warder" or "Shadow Warder" draught, granting significant resistance to that school of magic for a short duration.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Choose your poison... or your cure.", effects: ["Use: Set out a rack of phials. Allies can interact with it to gain +150 Fire or Shadow Resistance for 15 sec. (5 Min Cooldown)"], icon: <img src="https://i.imgur.com/Wcde0xN.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Potion of the Mad Alchemist', quality: 'rare', type: 'Consumable', desc: 'A volatile brew that grants a random, powerful benefit (Haste, Critical Strike, or Mastery) for 15 seconds. However, the chaotic nature of the mix causes side effects ranging from hallucinations to temporary size alteration.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Trust the science.", effects: ["Use: Drink to gain a random benefit. Side effects may include mild insanity."], icon: <img src="https://i.imgur.com/HiCsMiH.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Volatile Potion of the Cheetah', quality: 'uncommon', type: 'Consumable', desc: 'Increases movement speed by 60% for 15 seconds. Warning: The chemical reaction is unstable; taking damage while under this effect will cause a backlash, dazing the consumer for 5 seconds.', ilvl: 65, slot: 'Consumable', stats: '', flavor: "Run like the wind.", effects: ["Use: Increases run speed by 60% for 15 sec."], icon: <img src="https://i.imgur.com/awPbqSd.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Transmutation: Lead to Gold', quality: 'rare', type: 'Ability', desc: 'Uses the Philosopher\'s Stone to rearrange the atomic structure of worthless grey items, transmuting them into a small amount of gold. The process is taxing and can only be performed once per day.', ilvl: 70, slot: 'Spell', stats: '', flavor: "Fools gold?", effects: ["Use: Transmutes a stack of grey items into gold. (20 Hour Cooldown)"], icon: <img src="https://i.imgur.com/IdlSVhh.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Oil of Immolation v2', quality: 'rare', type: 'Consumable', desc: 'Coats the user in a volatile oil that combusts on contact with air. Deals 150 Fire damage every 3 seconds to all enemies within 5 yards. Lasts 15 seconds.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Burn, baby, burn.", effects: ["Use: Radiate fire damage for 15 seconds. (2 Min Cooldown)"], icon: <img src="https://i.imgur.com/ckwf3BK.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Elixir of Giant\'s Growth', quality: 'rare', type: 'Consumable', desc: 'Induces rapid cellular mitosis, increasing the user\'s size by 50% and granting +30 Strength. The strain on the body limits the duration to 2 minutes.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Fee Fi Fo Fum.", effects: ["Use: Grow large and gain +30 Strength for 2 min."], icon: <img src="https://i.imgur.com/z5vvIU7.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Philter of Unending Breath', quality: 'uncommon', type: 'Consumable', desc: 'Saturates the blood with oxygen, allowing for underwater breathing. Additionally, the user\'s movements become fluid, increasing swim speed by 20%. Lasts 1 hour.', ilvl: 60, slot: 'Consumable', stats: '', flavor: "Deep dive.", effects: ["Use: Water breathing and +20% swim speed for 1 hour."], icon: <img src="https://i.imgur.com/aN1Vt3n.jpeg" className="w-full h-full object-cover" alt="icon" /> }
      ],
      specs: [
        {
          name: 'Potion Mastery',
          title: 'Instant Reaction',
          desc: '**Perk:** "Alchemical Salve" creates potions that cleanse magic/poison effects.',
          legendary: {
            name: 'The Vial of Endless Triage',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Trinket',
            unique: true,
            stats: '+50 Stamina\n+45 Intellect',
            effects: ['Equip: Increases the effectiveness of your potions by 20%.', 'Use: Inject a healing potion into a friendly target from up to 40 yards away. (2 Min Cooldown)'],
            flavor: "It never seems to run dry, only to shimmer with liquid light."
          }
        },
        {
          name: 'Elixir Mastery',
          title: 'Science of Enhancement',
          desc: '**Perk:** "Master of the Cauldron" allows creation of raid-wide Flask Cauldrons.',
          legendary: {
            name: 'Flask of the Titan\'s Soul',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Held In Off-hand',
            unique: true,
            stats: '+40 Strength\n+40 Agility\n+40 Intellect',
            effects: ['Equip: The duration of your flasks is doubled.', 'Use: Consume the flask to gain all secondary stats for 20 sec. Acts as a Guardian Elixir. (5 Min Cooldown)'],
            flavor: "A universe in a bottle."
          }
        },
        {
          name: 'Transmutation',
          title: 'Secret of Matter',
          desc: '**Perk:** "Primal Echoes" yields extra Motes.',
          legendary: {
            name: 'The Siren\'s Tear',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Trinket',
            unique: true,
            stats: '+60 Stamina\n+60 Spirit',
            effects: ['Equip: Increases the effect that mana and healing potions have on the wearer by 40%.', 'Use: Your next non-combat potion has no cooldown. (10 Min Cooldown)'],
            flavor: "It weeps for the mana you lost."
          }
        }
      ]
    },
    blacksmithing: {
      id: 'blacksmithing',
      name: 'Blacksmithing',
      title: 'Master of War',
      icon: <Hammer className="w-6 h-6" />,
      image: 'https://i.imgur.com/omtzxB9.jpeg',
      desc: 'The smith is the backbone of the war effort. This redesign introduces crafting qualities and "deployable" heavy weaponry for raids.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nTBC gave Blacksmithing a massive upgrade with Bind-on-Pickup weapons. Items like *Stormherald* and *Dragonmaw* defined the meta for Warriors and Shamans. However, Armorsmithing often felt neglected; the 'Bulwark of Kings' chestguard was good, but quickly replaced by Tier 5. Once you crafted your big item, the profession lost almost all of its daily utility.\n",
        plus: "**The Vision for Plus:** \nWe want to expand the 'Self-Forged Hero' fantasy beyond just a single weapon. \n\n1. **Deployable Weaponry:** Why should a Master Smith just swing a sword? They should bring the forge to the fight. The *Anvil of War* and *Forgemaster's Bell* allow Blacksmiths to buff their party's physical damage windows, making them essential for melee cleave groups.\n2. **Quality Tiers:** The new 'Tempered', 'Masterwork', and 'Flawless' tiers allow dedicated smiths to push their gear beyond standard raid drops. A 'Flawless' craft is a badge of honor.\n3. **Tanking Identity:** We wanted to give Armorsmiths a true identity. The *Bulwark of the Adamant King* isn't just a stat stick; it's a defensive cooldown that allows a Paladin or Warrior to become an unmovable object."
      },
      coreSystem: {
        title: 'The War Within the Forge',
        desc: 'To forge is to impart a piece of one\'s soul into the steel. The hammer\'s rhythm dictates the weapon\'s destiny, fueled by your **Mettle**.\n\n**Masterwork (iLvl +3):** A blade that sings when swung. Enhanced base weapon damage and armor values.\n**Flawless (iLvl +7):** The smith\'s magnum opus. These items possess unique visual glows, the highest possible stat budget, and are worthy of legends.'
      },
      raidUtility: [
        { name: 'Forgemaster\'s Bell', quality: 'epic', type: 'Consumable', desc: 'Places a resonant brass bell on the ground. When struck by an ally, it emits a tone that inspires bravery, granting all party members within 30 yards **+150 Armor Penetration** for 12 seconds.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "For whom the bell tolls...", effects: ["Use: Place a bell that grants Armor Penetration."], icon: <img src="https://i.imgur.com/IKt6jgK.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Anvil of War', quality: 'epic', type: 'Deployable', desc: 'Deploys a portable anvil infused with elemental fire. Allies who interact with the anvil temper their weapons, adding **+75 Fire Damage** to their next 3 melee or ranged attacks.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Strike while the iron is hot.", effects: ["Use: Place an Anvil of War. Interaction grants Fire Damage to weapons."], icon: <img src="https://i.imgur.com/h5j6h6T.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Shield Spike Launcher', quality: 'rare', type: 'Consumable', desc: 'Mounts a spring-loaded mechanism to your shield. When activated, it launches a Mithril Spike at the target, dealing 500 Physical damage and causing them to bleed for 200 damage over 10 seconds.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Pointy end goes there.", effects: ["Use: Shoot a spike dealing damage and bleeding the target."], icon: <img src="https://i.imgur.com/CRLaC4n.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Weapon Chain: Adamantite', quality: 'rare', type: 'Item Enhancement', desc: 'Attaches a reinforced adamantite chain to your weapon, rendering you immune to Disarm effects. Additionally, the improved balance increases your Parry rating by 15.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Never let go.", effects: ["Use: Immune to Disarm and +15 Parry Rating."], icon: <img src="https://i.imgur.com/MnW4uaO.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Sharpening Wheel', quality: 'rare', type: 'Deployable', desc: 'Sets up a heavy grinding wheel. Party members can sharpen their blades, increasing weapon damage by 12 for 1 hour. Valid for both bladed and blunt weapons.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Keep it keen.", effects: ["Use: Place a Sharpening Wheel. Grants +12 Weapon Damage."], icon: <img src="https://i.imgur.com/CWEBBkw.jpeg" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Shatter-Proof Barding', quality: 'rare', type: 'Consumable', desc: 'Equips your mount with lightweight but durable plating. While mounted, you cannot be dazed by enemy attacks. The structural integrity lasts for 2 hours.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Ride hard.", effects: ["Use: Prevents daze while mounted."], icon: <img src="https://i.imgur.com/8RwcuOx.png" className="w-full h-full object-cover" alt="icon" /> },
        { name: 'Calcified Whetstone', quality: 'uncommon', type: 'Consumable', desc: 'A porous stone treated with chemical hardeners. sharpening a weapon with this stone increases Attack Power by 20 for 30 minutes.', ilvl: 65, slot: 'Consumable', stats: '', flavor: "Simple but effective.", effects: ["Use: +20 Attack Power for 30 min."], icon: <img src="https://i.imgur.com/Zt0G4SR.jpeg" className="w-full h-full object-cover" alt="icon" /> }
      ],
      specs: [
        {
          name: 'Armorsmith',
          title: 'The Unbreakable Wall',
          desc: '**Perk:** "Flawless Aegis" allows shields to proc an extra socket.',
          legendary: {
            name: 'Bulwark of the Adamant King',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Off Hand',
            unique: true,
            armorType: 'Shield',
            armor: '6500',
            stats: '220 Block\n+55 Stamina',
            durability: 120,
            effects: ['Equip: Increases defense rating by 30.', 'Equip: On block, emit a resonant hum reducing damage taken by nearby enemies by 5%.', 'Use: Become an immobile fortress, reducing all damage taken by 50% for 10 sec. (5 Min Cooldown)'],
            flavor: "The King stood alone. Now, so do you."
          }
        },
        {
          name: 'Weaponsmith',
          title: 'The Razor\'s Edge',
          desc: '**Perk:** "Serrated Edge" adds bleed effects to crafted blades.',
          legendary: {
            name: 'Drakefist Hammer, The Worldbreaker',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Two-Hand',
            unique: true,
            armorType: 'Mace',
            damage: '480 - 720',
            speed: '3.80',
            dps: '157.9',
            durability: 120,
            stats: '+65 Strength\n+50 Stamina',
            effects: ['Equip: Increases critical strike rating by 45.', 'Chance on Hit: Shatters the target\'s armor, reducing it by 500. Stacks up to 3 times.'],
            flavor: "Forged in Fel Fire."
          }
        },
        {
          name: 'Metallurgy',
          title: 'Alchemist of Steel',
          desc: '**Perk:** "Soul of the Bellows" allows adding a socket to any weapon once.',
          legendary: {
            name: 'The Universal Socket',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Item Enhancement',
            unique: true,
            stats: '',
            effects: ['Use: Permanently adds a Prismatic Socket to a Legendary quality item. This does not stack with other sockets. (One use only)'],
            flavor: "A hole in reality, filled with potential."
          }
        }
      ]
    },
    enchanting: {
      id: 'enchanting',
      name: 'Enchanting',
      title: 'Warden of the Soul',
      icon: <Zap className="w-6 h-6" />,
      image: 'https://i.imgur.com/FApg0VK.jpeg',
      desc: 'Enchanters manipulate the flow of magic itself. They can now "disenchant" the environment for buffs and craft temporary "Runes" for weapons.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nEnchanting was indispensable but functionally invisible. You were a vendor of stats. You stood in Ironforge or Shattrath spamming 'LFW'. Ring enchants were a nice personal perk, but they were just raw numbers. The profession had no 'moments of glory' in a raid.\n",
        plus: "**The Vision for Plus:** \nWe view Enchanters as masters of magical essence. They shouldn't just apply stats; they should manipulate the magic of the world. \n\n1. **Environmental Disenchanting:** Enchanters can now interact with the world—disenchanting magical barriers in dungeons, draining power from crystals in Netherstorm, or siphoning energy from raid bosses to create temporary buffs.\n2. **Weapon Runes:** Instead of permanent enchants being the only option, 'Runes' are powerful, temporary combat buffs. The *Rune of Soul-Binding* brings a 'Cheat Death' mechanic to any class.\n3. **The Soulforge:** The quality system here is visual. A 'Flawless' enchant doesn't just give +40 Spell Power; it makes your weapon drip with liquid magic."
      },
      coreSystem: {
        title: 'The Prismatic Soulforge',
        desc: 'Enchanters no longer just apply stats; they weave reality itself. Your **Focus** allows you to tap into the ley lines of Outland.\n\n**Brilliant (iLvl +3):** The glow is visibly brighter, the magic more potent. Enhanced stats and distinct particle effects.\n**Flawless (iLvl +7):** A perfect binding of magic and matter. These enchants provide the highest stats and cause the weapon to drip with liquid essence.'
      },
      raidUtility: [
        { name: 'Rune of Soul-Binding', quality: 'epic', type: 'Consumable', desc: 'Inscribes a weapon with a soul-link rune. If the bearer dies within 10 minutes, their soul is anchored to the mortal coil, resurrecting them instantly with 30% health and mana.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Death is but a delay for the prepared.", effects: ["Use: Etches a rune onto a weapon. Resurrection on death (30% HP/Mana). (5 Min Cooldown)"] },
        { name: 'Rune of Disruption', quality: 'epic', type: 'Consumable', desc: 'Etches a discordant rune onto the weapon. The next successful interrupt cast by the bearer releases a shockwave of silence, preventing all enemies within 10 yards from casting spells for 4 seconds.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Silence the chorus.", effects: ["Use: Etches a rune. Next interrupt silences AoE for 4 sec. (5 Min Cooldown)"] },
        { name: 'Dust of Levitation', quality: 'uncommon', type: 'Consumable', desc: 'A pinch of enchanted dust that alters gravity. Reduces falling speed for 15 seconds. Use carefully near strong winds.', ilvl: 60, slot: 'Consumable', stats: '', flavor: "Light as a feather.", effects: ["Use: Slows falling speed for 15 sec. (1 Min Cooldown)"] },
        { name: 'Shard of Potential', quality: 'rare', type: 'Consumable', desc: 'A crystallized fragment of raw arcane potential. Consuming it grants a flux of power, increasing a random primary stat by 30 for 1 hour. Persists through death.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Anything is possible.", effects: ["Use: +30 to a random primary stat for 1 hour."] },
        { name: 'Sigil of the Kirin Tor', quality: 'epic', type: 'Consumable', desc: 'An intricate violet sigil that warps space. Activating it instantly teleports the caster 15 yards forward.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Blink and you'll miss it.", effects: ["Use: Teleport forward 15 yards. (3 Min Cooldown)"] },
        { name: 'Enchanted Broom', quality: 'rare', type: 'Pet', desc: 'Unleashes an animated broom from your bag. It busily sweeps the ground behind you, keeping your conscience—and your boots—clean.', ilvl: 1, slot: 'Companion', stats: '', flavor: "Sweeps up loot.", effects: ["Use: Summons an Enchanted Broom companion."] }
      ],
      specs: [
        {
          name: 'Soul Binding',
          title: 'Spirit & Vitality',
          desc: '**Perk:** "Soul Resonance" grants bonus off-stats.',
          legendary: {
            name: 'The Soul-Binder\'s Phylactery',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Held In Off-hand',
            unique: true,
            stats: '+45 Intellect\n+45 Spirit',
            effects: ['Equip: Your healing spells have a chance to grant the target a "Soul Shell" absorbing 1000 damage.', 'Use: Sacrifice 10% of your total health to instantly restore 20% mana to a friendly target. (3 Min Cooldown)'],
            flavor: "A fair trade."
          }
        },
        {
          name: 'Elemental Weaving',
          title: 'Primal Forces',
          desc: '**Perk:** "Volatile Essence" increases proc rates.',
          legendary: {
            name: 'Prism of Chaotic Elements',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Trinket',
            unique: true,
            stats: '+45 Spell Critical Strike Rating',
            effects: ['Equip: Your elemental spells have a chance to trigger a secondary blast of the opposite element.', 'Use: Overload the prism, increasing spell critical strike chance by 100% for 5 sec. (5 Min Cooldown)'],
            flavor: "Fire, Frost, and Fury."
          }
        },
        {
          name: 'Prismatic Attunement',
          title: 'Light & Shadow',
          desc: '**Perk:** "Prismatic Refraction" finds rare prisms in epic items.',
          legendary: {
            name: 'Signet of the Arch-Enchanter',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Finger',
            unique: true,
            stats: '+35 Stamina\n+40 Intellect',
            effects: ['Equip: Increases spell power by 45.', 'Equip: Disenchanting yields double materials.', 'Use: Create a "Runic Ward" at your feet. Allies standing inside have the mana cost of all spells reduced by 25%. (5 Min Cooldown)'],
            flavor: "The circle is complete."
          }
        }
      ]
    },
    engineering: {
      id: 'engineering',
      name: 'Engineering',
      title: 'Architect of the Future',
      icon: <Wrench className="w-6 h-6" />,
      image: 'https://i.imgur.com/kmLvKh4.jpeg',
      desc: 'Engineers are the mad scientists of Outland. From devastating explosives to mind-bending gadgets, they define the technological edge of the war.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nTBC was arguably the golden age of Engineering. The 'Goggles' introduced in patch 2.1 were iconic. However, outside of PvP (where grenades were king), their gadgets like bombs and target dummies often fell off in high-end PvE due to scaling issues or immunities.\n",
        plus: "**The Vision for Plus:** \nWe want to fully embrace the 'Gadgeteer' class fantasy. Engineering should be chaotic, powerful, and visually loud. \n\n1. **Ordnance that Matters:** We scaled up explosives. The *Big One* Rocket Launcher isn't just a stat stick; it's a tactical nuke for AoE phases, giving Engineers a DPS cooldown that rivals class abilities. \n2. **Time & Space:** Gnomish engineers lean into the sci-fi elements of Netherstorm. The *Chronal Displacer* introduces 'Recall' mechanics into WoW, allowing for high-skill resets in raids.\n3. **Deployable Utility:** The *Gravity Well* creates crowd control zones, allowing Engineers to function as utility supports on trash packs."
      },
      coreSystem: {
        title: 'Schematic Iteration',
        desc: 'Innovation requires failure. Crafting attempts now generate **"Eureka!"** moments—flashes of brilliance that grant temporary intelligence buffs or unlock fragments of lost schematics from the Netherstorm.\n\n**Overcharge:** Most gadgets can now be "Overcharged" via a toggle, doubling their effectiveness but risking a catastrophic malfunction that could stun the user or leak radiation.'
      },
      raidUtility: [
        { name: 'Field Repair Bot 110G', quality: 'epic', type: 'Deployable', desc: 'Deploys a Field Repair Bot 110G. This rugged unit can repair armor and purchase unwanted items. Utilizing Gnomish efficiency, it remains active for 10 minutes before its fuel cell depletes.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Authorized reseller.", effects: ["Use: Deploys a vendor/repair bot for 10 min. (1 Hour Cooldown)"] },
        { name: 'Gnomish Gravity Well', quality: 'epic', type: 'Deployable', desc: 'Deploys an experimental gravity generator. It creates a localized distortion field that reduces the movement speed of all enemies within 15 yards by 60%. Warning: May cause nausea.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Watch your step.", effects: ["Use: Creates a gravity well slowing enemies by 60% for 20 sec. (5 Min Cooldown)"] },
        { name: 'Rocket Boots Xtreme Lite', quality: 'rare', type: 'Consumable', desc: 'Engages solid-fuel thrusters to increase movement speed by 300% for 5 seconds. This "Lite" version has reduced mass but retains the 10% chance of catastrophic fuel leak dealing Fire damage to the wearer.', ilvl: 115, slot: 'Feet', stats: '', flavor: "Void warranty if used indoors.", effects: ["Use: +300% Speed for 5 sec. 10% malfunction chance. (3 Min Cooldown)"] },
        { name: 'Target Dummy MKII', quality: 'rare', type: 'Deployable', desc: 'Deploys an advanced mechanical decoy. This rugged dummy taunts all nearby enemies, forcing them to attack it for 10 seconds or until it is destroyed. Constructed with reinforced plating.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Hit me!", effects: ["Use: Taunts nearby enemies for 10 sec. (3 Min Cooldown)"] },
        { name: 'Portable Mailbox', quality: 'rare', type: 'Deployable', desc: 'Deploys a MOLL-E (Mobile Otherspace Letter Launcher - Experimental) unit, allowing access to the mailbox for 5 minutes. The spacetime connection requires 1 hour to recharge.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "You've got mail.", effects: ["Use: Access mail for 5 min. (1 Hour Cooldown)"] },
        { name: 'Goblin Jumper Cables XL', quality: 'rare', type: 'Trinket', desc: 'A set of heavy-duty jumper cables. Allows a skilled Engineer to shock a dead ally back to life with 30% health and mana. 50% success rate. Side effects include singing hair and mild tremors.', ilvl: 60, slot: 'Trinket', stats: '', flavor: "Clear!", effects: ["Use: 50% chance to resurrect ally. (10 Min Cooldown)"] },
        { name: 'Holo-Projector', quality: 'uncommon', type: 'Deployable', desc: 'Projects a convincing holographic decoy at the target location. Enemies are distracted by the glimmering image for 5 seconds, reducing their detection range and aggression.', ilvl: 60, slot: 'Consumable', stats: '', flavor: "Look over there!", effects: ["Use: Distracts enemies for 5 sec. (2 Min Cooldown)"] }
      ],
      specs: [
        {
          name: 'Goblin Engineering',
          title: 'Master of Explosives',
          desc: 'Focus on destruction and rocketry.',
          legendary: {
            name: 'The "Big One" Rocket Launcher',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Ranged',
            unique: true,
            armorType: 'Gun',
            damage: '340 - 510',
            speed: '2.90',
            dps: '146.6',
            stats: '+25 Agility',
            effects: ['Equip: Increases attack power by 40.', 'Use: Fire a tactical nuke at the target area. Deals 3000 to 4000 Fire damage to all enemies in 10 yds. (10 Min Cooldown)'],
            flavor: "If brute force doesn't work, you aren't using enough."
          }
        },
        {
          name: 'Gnomish Engineering',
          title: 'Gadgeteer',
          desc: 'Focus on utility and devices.',
          legendary: {
            name: 'Chronal Displacer',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Trinket',
            unique: true,
            stats: '+50 Intellect',
            effects: ['Equip: Engineering cooldowns reduced by 20%.', 'Use: Rewind time 4 seconds, restoring your Health and Mana to their previous values. (5 Min Cooldown)'],
            flavor: "Did that just happen? Or did it un-happen?"
          }
        },
        {
          name: 'Aether-Tech',
          title: 'Energy Manipulation',
          desc: 'Focus on shielding and energy fields.',
          legendary: {
            name: 'Cognition-Enhancing Goggles v3.0',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Head',
            unique: true,
            armorType: 'Cloth',
            armor: '200',
            stats: '+50 Stamina\n+50 Intellect',
            effects: ['Equip: Slightly increases stealth detection.', 'Use: Project a Personal Force Field absorbing 5000 damage. Lasts 30 sec. (3 Min Cooldown)'],
            flavor: "I can see... everything."
          }
        }
      ]
    },
    jewelcrafting: {
      id: 'jewelcrafting',
      name: 'Jewelcrafting',
      title: 'Shaper of Light',
      icon: <Gem className="w-6 h-6" />,
      image: 'https://i.imgur.com/vERt1RC.jpeg',
      desc: 'Jewelcrafters cut the gems that power the heroes of Azeroth. They deal in precision, light, and the hidden power within stones.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nJewelcrafting was the new profession in TBC and it changed gear forever with sockets. It was highly profitable and mandatory for min-maxing stats. However, the profession itself was very industrial: buy ore, prospect, cut, sell. It lacked active gameplay.\n",
        plus: "**The Vision for Plus:** \nWe want Jewelcrafting to feel like you are manipulating light itself. \n\n1. **Facet Perfection:** A mini-game during crafting allows skilled players to create 'Perfect' gems more often, rewarding manual play over AFK crafting. A 'Perfect' gem has slightly higher stats.\n2. **Light Refraction:** Items like the *Consortium Focusing Lens* allow JCs to reveal stealth and hidden objects, giving them utility in dungeons like Shadow Labyrinth or PvP.\n3. **Legendary Sockets:** The *Prism of Infinite Facets* introduces 'Stat Swapping', allowing a player to reconfigure their stats mid-raid without regemming—perfect for hybrid classes."
      },
      coreSystem: {
        title: 'Facet Perfection',
        desc: 'Cutting a gem is a conversation with different facets of light. We have introduced a **Precision Cutting** mini-game during the crafting process. \n\nTiming your strikes perfectly results in a **"Perfect Cut"**, yielding a gem with bonus stats. Furthermore, Jewelcrafters can now craft **Prisms**, trinkets that refract ambient light to deal holy damage or cauterize wounds.'
      },
      raidUtility: [
        { name: 'Consortium Focusing Lens', quality: 'epic', type: 'Deployable', desc: 'Deploys a finely cut crystal lens on the ground. It refracts ambient light to reveal all stealth, invisible, and camouflaged units within 30 yards. The lens is fragile and lasts for 1 minute.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Nowhere to hide.", effects: ["Use: Reveals stealth within 30 yds for 1 min. (5 Min Cooldown)"] },
        { name: 'Brilliant Glass', quality: 'epic', type: 'Consumable', desc: 'A rough cluster of fused glass that hums with potential. Shattering it carefully has a chance to reveal rare or epic gems hidden within the structure.', ilvl: 70, slot: 'Item', stats: '', flavor: "A gamble in glass.", effects: ["Use: Create gems. (20 Hour Cooldown)"] },
        { name: 'Dust of Disappearance', quality: 'rare', type: 'Reagent', desc: 'A pouch of crushed prism shards. Throwing it on the ground creates a refractive cloud, granting invisibility for 3 seconds. Use to escape combat or confound enemies.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Now you see me...", effects: ["Use: Vanish for 3 seconds. (10 Min Cooldown)"] },
        { name: 'Statue of the Ruby Hare', quality: 'rare', type: 'Trinket', desc: 'A meticulously carved ruby figurine. Rubbing the statue grants a burst of kinetic energy, increasing Movement Speed by 40% for 10 seconds.', ilvl: 70, slot: 'Trinket', stats: '', flavor: "The hare is always faster.", effects: ["Use: +40% Speed for 10 sec. (2 Min Cooldown)"] },
        { name: 'Emerald Owl', quality: 'rare', type: 'Trinket', desc: 'Releases a scout constructed from living wood and emeralds. The owl flies to the target area, providing vision and detection of hidden enemies for 30 seconds.', ilvl: 70, slot: 'Trinket', stats: '', flavor: "Silent watcher.", effects: ["Use: Summon owl scout. (5 Min Cooldown)"] },
        { name: 'Diamond Ward', quality: 'epic', type: 'Consumable', desc: 'Crushes a diamond to create a protective prism around the user. The next hostile spell cast against you is reflected back at the caster. Lasts 5 seconds.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Return to sender.", effects: ["Use: Reflect next spell. (5 Min Cooldown)"] },
        { name: 'Rough Hewn Statue', quality: 'uncommon', type: 'Deployable', desc: 'Places a crude stone statue that pulses with soothing earth energy. Heals all party members within 10 yards for 50 health every 3 seconds. Lasts 30 seconds.', ilvl: 60, slot: 'Consumable', stats: '', flavor: "Simple comfort.", effects: ["Use: Pulse AoE heal. (3 Min Cooldown)"] }
      ],
      specs: [
        {
          name: 'Gem Mastery',
          title: 'The Perfect Cut',
          desc: 'Focus on stat gems.',
          legendary: {
            name: 'Prism of Infinite Facets',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Trinket',
            unique: true,
            stats: '+3 Prismatic Sockets',
            effects: ['Equip: Increases the stat bonus of all gems socketed in this item by 20%.', 'Use: Swap the stats of your socketed gems for 1 minute. (5 Min Cooldown)'],
            flavor: "Perfection is a process, not a destination."
          }
        },
        {
          name: 'Jewelry Crafting',
          title: 'Neck & Ring',
          desc: 'Focus on wearable jewelry.',
          legendary: {
            name: 'The Amulet of Lost Kings',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Neck',
            unique: true,
            stats: '+45 Stamina\n+35 Critical Strike Rating',
            effects: ['Equip: Your attacks have a chance to summon a Spectral Guardian to fight for you.', 'Use: Link your soul to a friendly target, transferring 20% of damage they take to you. (3 Min Cooldown)'],
            flavor: "Heavy is the head, and the neck."
          }
        },
        {
          name: 'Relic Hunter',
          title: 'Idols & Totems',
          desc: 'Focus on class specific items.',
          legendary: {
            name: 'Focus of the Naaru',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Relic',
            unique: true,
            stats: '+30 Spell Power',
            effects: ['Prismatic Socket', 'Equip: Your class abilities have a chance to trigger "Light\'s Favor," restoring 300 mana or energy.'],
            flavor: "It sings when you hold it."
          }
        }
      ]
    },
    tailoring: {
      id: 'tailoring',
      name: 'Tailoring',
      title: 'Weaver of Magic',
      icon: <Scissors className="w-6 h-6" />,
      image: 'https://i.imgur.com/0sgpPtf.jpeg',
      desc: 'Tailors are weavers of reality, creating banners that act as raid cooldowns and cloaks that define caster playstyles.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nTailoring was the undisputed king of early TBC. The Spellfire, Shadoweave, and Primal Mooncloth sets were mandatory for casters for months, often beating Tier 5. It was a great system for engagement, but it had a downside: it forced players to wear specific looking gear. Once you replaced the set, the profession lost much of its value.\n",
        plus: "**The Vision for Plus:** \nWe want to keep the power of the cloth sets but move that power into 'Masterwork' items and active utility. \n\n1. **Banners of War:** Tailors can now weave magical banners. These act like the Shaman's totems but are raid-wide cooldowns. The *Banner of Arcane Warding* gives the raid a massive resistance boost, making Tailors essential for surviving magical nukes.\n2. **Legendary Cloaks:** Instead of a 3-piece set that locks your slots, the specialization culminates in a single Legendary Cloak (e.g., *Sunfire Drape*). This allows players to wear raid tier sets while still having a profession-defining item that evolves with them.\n3. **Active Weaving:** The 'Void-Touched' fantasy is expanded. Shadoweave tailors can actually fade into the void to drop threat, giving Warlocks and Shadow Priests much-needed survival tools in a high-threat meta."
      },
      coreSystem: {
        title: 'The Arcane Loom',
        desc: 'The Loom is where magic meets form. Crafting quality relies on **Finesse**, the ability to weave spells into thread.\n\n**Masterwork (iLvl +3):** The fabric feels lighter, yet stronger. Enhanced stats.\n**Flawless (iLvl +7):** Shimmers with latent energy, as if the cloth itself is alive. Grants the highest possible stats and unique visual auras.'
      },
      raidUtility: [
        { name: 'Banner of Arcane Warding', quality: 'epic', type: 'Deployable', desc: 'Unfurls a shimmering silk banner inscribed with abjuration runes. It pulses with protective energy, granting +100 All Resistances to all raid members within 30 yards for 15 seconds. Essential for surviving magical storms.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "A shield of silk.", effects: ["Use: Place a banner. +100 All Resist for 15 sec. (5 Min Cooldown)"] },
        { name: 'Banner of Swift Threads', quality: 'epic', type: 'Deployable', desc: 'Plants a banner woven from wind-infused cloth. It whips violently in the air, inspiring allies and increasing attack and casting speed by 5% for all raid members within 30 yards. Lasts 15 seconds.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Wind in your sails.", effects: ["Use: Place a banner. +5% Haste for 15 sec. (5 Min Cooldown)"] },
        { name: 'Manaweave Net', quality: 'rare', type: 'Throwable', desc: 'Hurls a net woven from solidified mana at the target. It roots the enemy for 4 seconds and siphons 500 mana, transferring it to the caster.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Stick around.", effects: ["Use: Net target. Root 4s, Drain 500 Mana. (2 Min Cooldown)"] },
        { name: 'Magic Carpet', quality: 'epic', type: 'Mount', desc: 'Unrolls a luxurious, enchanted carpet capable of flight. It responds to the rider\'s mental commands, offering a smooth and stylish journey through the skies of Outland.', ilvl: 70, slot: 'Mount', stats: '', flavor: "A whole new world.", effects: ["Use: Summons a flying magic carpet. Requires Artisan Riding."] },
        { name: 'Bag of Endless Pockets', quality: 'epic', type: 'Container', desc: 'A deceptively small bag that utilizes non-Euclidean geometry to hold more items than should physically be possible. Contains 28 slots.', ilvl: 70, slot: 'Bag', stats: '', flavor: "It's bigger on the inside.", effects: ["Unique-Equipped."] },
        { name: 'Silk Glider', quality: 'rare', type: 'Back', desc: 'Equips a lightweight cloak reinforced with glider wings. Allows the wearer to fall slowly from great heights, turning a lethal plummet into a controlled descent. Lasts 30 seconds.', ilvl: 60, slot: 'Back', stats: '', flavor: "Catch the wind.", effects: ["Use: Reduces falling speed for 30 sec. (5 Min Cooldown)"] },
        { name: 'Bandage of the Void', quality: 'rare', type: 'Consumable', desc: 'A bandage infused with void energy. When applied, it shrouds the user in stealth and regenerates 2000 health over 8 seconds. Taking damage breaks the stealth.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Unseen mending.", effects: ["Use: Stealth and heal 2000 HP over 8 sec. (5 Min Cooldown)"] }
      ],
      specs: [
        {
          name: 'Shadoweave',
          title: 'Void Master',
          desc: '**Perk:** "Unraveling Presence" adds spell vulnerability to gear.',
          legendary: {
            name: 'Mantle of the Void-Touched',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Back',
            unique: true,
            armorType: 'Cloth',
            armor: '180',
            stats: '+35 Stamina\n+25 Intellect',
            effects: ['Equip: Increases Shadow and Frost spell power by 65.', 'Equip: Your Shadow and Frost spells have a chance to summon a Void Tendril to fight for you.', 'Use: Fade into the void, instantly reducing your threat to zero. (3 Min Cooldown)'],
            flavor: "The darkness embraces you."
          }
        },
        {
          name: 'Spellfire',
          title: 'Destruction',
          desc: '**Perk:** "Arcane Infusion" adds haste procs to chests.',
          legendary: {
            name: 'Sunfire Drape of the Phoenix',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Back',
            unique: true,
            armorType: 'Cloth',
            armor: '180',
            stats: '+35 Stamina\n+25 Intellect',
            effects: ['Equip: Increases Fire and Arcane spell power by 65.', 'Equip: Your critical strikes have a chance to grant "Phoenix Fire," increasing casting speed by 20% for 10 sec.', 'Use: Rise from the ashes. Rebirth yourself with 50% health. (30 Min Cooldown)'],
            flavor: "Burn brighter."
          }
        },
        {
          name: 'Mooncloth',
          title: 'Celestial',
          desc: '**Perk:** "Gift of Elune" reduces mana costs on gear.',
          legendary: {
            name: 'Cloak of the Lunar Eclipse',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Back',
            unique: true,
            armorType: 'Cloth',
            armor: '180',
            stats: '+40 Stamina\n+35 Intellect',
            effects: ['Equip: Increases healing done by up to 110.', 'Equip: Your healing spells have a chance to grant the target "Starlight\'s Grace," healing them for 200 every sec for 10 sec.', 'Use: Instantly restore 2000 Mana to yourself and your target. (5 Min Cooldown)'],
            flavor: "Elune guide you."
          }
        }
      ]
    },
    inscription: {
      id: 'inscription',
      name: 'Inscription',
      title: 'The Architect of Magic',
      icon: <PenTool className="w-6 h-6" />,
      image: 'https://i.imgur.com/bV47vOI.jpeg',
      desc: 'Scribes rewrite the laws of magic itself. They create Glyphs to alter abilities and powerful Darkmoon Cards.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nInscription didn't exist in original TBC! It was added in Wrath of the Lich King. Its absence meant there was no system to customize spell visuals or minor mechanics, and the 'Darkmoon Card' trinkets were just random world drops or vendor items with no crafting fantasy behind them.\n",
        plus: "**The Vision for Plus:** \nWe are backporting Inscription to TBC but giving it a distinct 'Outland Flavor'. It is the domain of High Elves and Draenei scholars who study the magic of the Nether. \n\n1. **Glyphs as Artifacts:** Glyphs aren't just UI elements; they are physical items you slot into your spellbook. 'Ancient' and 'Primordial' glyphs allow for customization of spell ranges, durations, and visuals.\n2. **Scrolls of Power:** Scribes bring the 'Battle Shout' mechanic to caster groups via *Scroll of Heroic Tales*. This balances the group utility, so you don't strictly need a Warrior in every caster group for shouts.\n3. **Darkmoon Cards:** We have reimagined the Darkmoon decks to be more interactive. The *Deck of Fates* is a legendary trinket that requires active management, drawing cards in combat to gain random but powerful buffs."
      },
      coreSystem: {
        title: 'The Scribe\'s Study',
        desc: 'Scribes manipulate magic through the purity of their ink and the steadiness of their hand. \n\n**Glyph Resonance:** Glyphs now come in three tiers of potency—**Standard**, **Ancient**, and **Primordial**. Higher tiers unlock new visual effects or deeper mechanical changes to spells, allowing for true customization of your class fantasy.'
      },
      raidUtility: [
        { name: 'Scroll of Heroic Tales', quality: 'epic', type: 'Deployable', desc: 'Unfurls a scroll detailing the legendary deeds of ancient heroes. Reading it aloud inspires 20 raid members, granting the "Battle Shout" effect (+305 Attack Power) for 2 minutes.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Legends never die.", effects: ["Use: Inspires raid. +305 Attack Power. (5 Min Cooldown)"] },
        { name: 'Rune of Warding', quality: 'epic', type: 'Deployable', desc: 'Draws a complex rune of protection on the ground. Allies standing within the rune take 15% reduced damage from Area of Effect spells. The rune fades after 20 seconds.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Stand your ground.", effects: ["Use: Place rune. -15% AoE Damage taken. (5 Min Cooldown)"] },
        { name: 'Scroll of Recall', quality: 'uncommon', type: 'Consumable', desc: 'A single-use parchment inscribed with teleportation sigils. Reading it instantly transports the caster to their bound Hearthstone location.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "There and back again.", effects: ["Use: Teleport to Hearthstone location. (20 Min Cooldown)"] },
        { name: 'Scroll of Unlocking', quality: 'uncommon', type: 'Consumable', desc: 'A magically charged scroll capable of manipulating tumblers and wards. Unlocks any door or chest requiring up to 375 Lockpicking skill.', ilvl: 60, slot: 'Consumable', stats: '', flavor: "Knock knock.", effects: ["Use: Opens locked objects."] },
        { name: 'Contract of Vitality', quality: 'rare', type: 'Consumable', desc: 'A binding contract signed in blood. Instantly sacrifices 20% of the user\'s maximum health to conjure a pittance of gold coins.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Sign here.", effects: ["Use: Sacrifice 20% Life for Gold. (1 Hour Cooldown)"] },
        { name: 'Forged Documents', quality: 'rare', type: 'Item', desc: 'Expertly falsified papers that appear legitimate to even the most scrutiny. Turn in to a faction quartermaster to gain 500 Reputation.', ilvl: 70, slot: 'Item', stats: '', flavor: "Looks legit.", effects: ["Use: Grant 500 Reputation."] },
        { name: 'Glyph of Shadow', quality: 'minor', type: 'Glyph', desc: 'A cosmetic glyph that alters the user\'s connection to the Void. Your Shadowform now appears as a swirling voidwalker-like entity.', ilvl: 1, slot: 'Glyph', stats: '', flavor: "Embrace the dark.", effects: ["Use: Changes Shadowform appearance."] }
      ],
      specs: [
        {
          name: 'Runebinder',
          title: 'Shoulder & Weapon',
          desc: 'Focus on raw power.',
          legendary: {
            name: 'The Quill of the Guardian',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Two-Hand',
            unique: true,
            armorType: 'Staff',
            damage: '150 - 290',
            speed: '2.40',

            dps: '91.6',
            stats: '+60 Intellect\n+55 Stamina\n+45 Haste Rating',
            effects: ['Equip: Increases spell power by 290.', 'Equip: Your spells have a chance to duplicate themselves at 50% effectiveness.', 'Use: Scribble a rune of power on the air, increasing damage done by 15% for 20 sec. (3 Min Cooldown)'],
            flavor: "The pen is mightier."
          }
        },
        {
          name: 'Darkmoon Artiste',
          title: 'Fortune Teller',
          desc: 'Focus on Trinkets.',
          legendary: {
            name: 'The Deck of Fates',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Trinket',
            unique: true,
            stats: '+55 Strength\n+55 Agility\n+55 Intellect',
            effects: ['Equip: Every 10 sec, you draw a card granting a random secondary stat buff.', 'Use: Force a "Joker" card, activating all possible buffs for 10 sec. (2 Min Cooldown)'],
            flavor: "Pick a card. Any card."
          }
        },
        {
          name: 'Calligrapher',
          title: 'Glyph Master',
          desc: 'Focus on utility.',
          legendary: {
            name: 'Brush of Reality',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Main Hand',
            unique: true,
            armorType: 'Dagger',
            damage: '105 - 180',
            speed: '1.80',
            dps: '79.2',
            stats: '+40 Stamina\n+40 Intellect',
            effects: ['Equip: Increases healing done by up to 550.', 'Equip: Your Glyphs are 10% more effective.', 'Use: Rewrite an enemy\'s fate, dispelling all magical buffs on them. (1 Min Cooldown)'],
            flavor: "Art is subjective."
          }
        }
      ]
    },
    mining: {
      id: 'mining',
      name: 'Mining',
      title: 'Earth-Warder\'s Codex',
      icon: <Mountain className="w-6 h-6" />,
      image: 'https://i.imgur.com/HeAA9bY.jpeg',
      desc: 'Miners act as battlefield engineers, constructing barricades and finding weaknesses in the earth itself.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nMining was a chore. It was purely a means to an end (Blacksmithing/Engineering) and had no inherent value in combat or social settings.\n",
        plus: "**The Vision for Plus:** \nWe want Mining to feel like you are an *Earth-Warder*, someone who understands the very ground they walk on. \n\n1. **Battlefield Engineering:** Miners can now deploy *Earthen Barricades*. These are physical objects that block Line of Sight. Imagine creating your own cover during a Vashj encounter or blocking a patrol path in a dungeon.\n2. **Combat Buffs:** The *Smelting Brazier* brings the forge to the raid, granting a massive Attack Power buff. This gives Miners a reason to exist in a raid group beyond just passive income.\n3. **Exploration:** The 'Geological Properties' system means finding a vein isn't just 'click and loot'. You might find a 'Rich' vein or a 'Jewel-Encrusted' vein."
      },
      coreSystem: {
        title: 'Geological Properties',
        desc: 'The earth speaks to those who listen. Veins now possess unique **Geological Properties** visible only to skilled miners:\n\n**Rich:** High yield.\n**Jewel-Encrusted:** Chance to drop raw gems.\n**Element-Infused:** Explodes with elemental motes when mined.\n\nMiners also gain the **Surveyor\'s Map**, allowing them to triangulate the position of these rare nodes from great distances.'
      },
      passiveBonus: {
        name: "Toughness",
        desc: "Your hardened skin and tireless endurance grant you **+60 Stamina**."
      },
      raidUtility: [
        { name: 'Earthen Barricade', quality: 'epic', type: 'Deployable', desc: 'Conjures a massive, destructible wall of stone from the ground. It completely blocks line of sight, providing critical cover for the raid. Lasts 20 seconds or until destroyed.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Hold the line.", effects: ["Use: Summons a LoS-blocking wall. (5 Min Cooldown)"] },
        { name: 'Smelting Brazier', quality: 'epic', type: 'Deployable', desc: 'Deploys a portable forge burning with intense heat. Nearby allies can interact with the brazier to temper their weapons, gaining +100 Attack Power for 15 seconds.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Fresh from the forge.", effects: ["Use: Place brazier. Interaction grants +100 AP. (5 Min Cooldown)"] },
        { name: 'Seismic Charge', quality: 'rare', type: 'Explosive', desc: 'Plants a shaped charge that detonates with a controlled seismic shock. The blast instantly clears all Fear and Stun effects from the user.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Ground shaking.", effects: ["Use: Break Fear and Stun. (5 Min Cooldown)"] },
        { name: 'Miner\'s Canary', quality: 'uncommon', type: 'Deployable', desc: 'Deploys a small cage containing a sensitive canary. The bird chirps frantically if any stealthed or invisible enemies venture within 20 yards.', ilvl: 60, slot: 'Consumable', stats: '', flavor: "Chirp chirp.", effects: ["Use: Detect Stealth nearby."] },
        { name: 'Thermal Vent', quality: 'rare', type: 'Deployable', desc: 'Drills a bore-hole into a subterranean steam pocket. The venting steam knocks the first enemy to cross it high into the air, disrupting their movement.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Watch your step.", effects: ["Use: Place a knock-up trap. (2 Min Cooldown)"] },
        { name: 'Rock Elemental Geode', quality: 'ref', type: 'Consumable', desc: 'Crushes a rare geode to release a bound Rock Elemental. This sturdy guardian taunts nearby enemies and fights for the miner for 1 minute.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "A loyal friend.", effects: ["Use: Summon Rock Elemental Guardian. (10 Min Cooldown)"] }
      ],
      masterwork: {
        name: 'The Core-Hound\'s Toothpick',
        quality: 'legendary',
        ilvl: 164,
        slot: 'Main Hand',
        unique: true,
        armorType: 'Axe',
        damage: '205 - 310',
        speed: '2.60',
        dps: '99.0',
        stats: '+35 Strength\n+35 Stamina',
        effects: ['Equip: Increases Mining skill by 20.', 'Equip: Allows you to mine deposits while mounted.', 'Use: Strike the earth to unearth a "Volcanic Geode" containing rare gems. (10 Min Cooldown)'],
        flavor: "Sharp enough to pick a dragon's teeth."
      },
      specs: [
        { name: 'Prospector', title: 'Gem Seeker', desc: '**Perk:** "Flawless Faceting" can find epic gems in ore.' },
        { name: 'Geologist', title: 'Yield Master', desc: '**Perk:** "Deep Mining" finds Primal Earth in rich veins.' },
        { name: 'Demolitionist', title: 'Blaster', desc: '**Perk:** "Master Blaster" prevents backfires.' }
      ]
    },
    skinning: {
      id: 'skinning',
      name: 'Skinning',
      title: 'Hunter\'s Compendium',
      icon: <Skull className="w-6 h-6" />,
      image: 'https://i.imgur.com/2KkDULp.jpeg',
      desc: 'Skinning is now about trophy hunting, harvesting organs for alchemy, and tracking legendary beasts.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nSkinning was the simplest profession in the game. Kill beast, right click, get leather. It was functional but flavorless. The 'Cobra Scales' and 'Nethercobra Leg Armor' were the peak of its relevance.\n",
        plus: "**The Vision for Plus:** \nWe are transforming Skinning into 'Big Game Hunting'. \n\n1. **Trophy Hunting:** Elite beasts in the world now drop 'Trophies' (Hearts, Fangs) that are used in high-end crafting. This gives Skinners a reason to form hunting parties for rare elites like *Ban'thalos* in Nagrand.\n2. **Tactical Debuffs:** Skinners know anatomy. The *Pheromone Marker* applies a debuff that increases Physical Damage taken, making Skinners highly valued in Melee Cleave groups for increasing raid DPS.\n3. **The Alpha Fantasy:** The legendary *Cloak of the Alpha* allows a Skinner to literally control beasts, fearing them or preventing aggro."
      },
      coreSystem: {
        title: 'Trophies & Tissues',
        desc: 'It is not enough to kill; one must know **how** to harvest. \n\n**Pristine Hides:** Perfect cuts yield hides required for Masterwork leather armor.\n**Beast Trophies:** Rare elites drop unique organs (e.g., "Heart of the Void Wolf") used in Alchemy and Enchanting.\n**Anatomical Samples:** Can be turned in for reputation or gold.'
      },
      passiveBonus: {
        name: "Master of Anatomy",
        desc: "Your knowledge of critical weak points grants you **+40 Critical Strike Rating**."
      },
      raidUtility: [
        { name: 'War Horn of the Wilds', quality: 'epic', type: 'Deployable', desc: 'Places a resonant primal horn on the battlefield. When sounded by an ally, it unleashes a guttural roar that inspires bloodlust, granting +5% Physical Critical Strike chance to the party for 15 seconds.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "The hunt begins.", effects: ["Use: Place War Horn. Interaction grants +5% Phys Crit. (5 Min Cooldown)"] },
        { name: 'Pheromone Marker', quality: 'epic', type: 'Throwable', desc: 'Hurls a vial of concentrated pheromones at the target. The scent marks them as prey, increasing all Physical damage taken by the target by 5% for 20 seconds.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "They can't hide.", effects: ["Use: Mark target. Enemies take +5% Phys Damage. (5 Min Cooldown)"] },
        { name: 'Hide of the Beast', quality: 'rare', type: 'Consumable', desc: 'Drapes a magically treated hide over the user, engaging a powerful camouflage to reduce detection radius. Persists for 10 minutes or until an aggressive action is taken.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Blend in.", effects: ["Use: Greatly reduce aggro radius. (10 Min Cooldown)"] },
        { name: 'Beast Lure', quality: 'uncommon', type: 'Deployable', desc: 'Sets up a musk-scented lure that attracts all neutral and aggressive beasts within 50 yards. Useful for pulling specific camps or creating a distraction.', ilvl: 60, slot: 'Consumable', stats: '', flavor: "Here kitty kitty.", effects: ["Use: Attracts nearby beasts. (5 Min Cooldown)"] },
        { name: 'Scent Mask', quality: 'rare', type: 'Consumable', desc: 'Applies a pungent paste that masks the user\'s natural scent. Reduces the range at which enemies can detect you for 10 minutes. Persists through water.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "You smell like nothing.", effects: ["Use: Reduce enemy detection range."] },
        { name: 'Trap Kit', quality: 'uncommon', type: 'Consumable', desc: 'Deploys a concealed bear trap. The first enemy to step on it is snapped in jagged steel, taking physical damage and being rooted for 5 seconds.', ilvl: 60, slot: 'Consumable', stats: '', flavor: "Snap!", effects: ["Use: Place rooting trap."] }
      ],
      masterwork: {
        name: 'Ak\'tar\'s Primal Heart',
        quality: 'legendary',
        ilvl: 164,
        slot: 'Trinket',
        unique: true,
        stats: '+120 Attack Power',
        effects: ['Equip: Allows the tracking of Hidden Beasts.', 'Use: Consume the essence of the heart, transforming into a Primal Stalker. Increases damage by 15% and run speed by 30% for 20 sec. (5 Min Cooldown)'],
        flavor: "Still beating."
      },
      specs: [
        { name: 'Tanner', title: 'Hide Master', desc: '**Perk:** "Flesh-Stitch" combines scraps into pristine hides.' },
        { name: 'Trophy Hunter', title: 'Legend Seeker', desc: '**Perk:** "Essence Extraction" harvests Motes from elementals.' },
        { name: 'Survivalist', title: 'Pragmatist', desc: '**Perk:** "Field Dressing" creates bandages from leather.' }
      ]
    },
    herbalism: {
      id: 'herbalism',
      name: 'Herbalism',
      title: 'The Emerald Compendium',
      icon: <Leaf className="w-6 h-6" />,
      image: 'https://i.imgur.com/klgJfWJ.jpeg',
      desc: 'Herbalists manipulate the battlefield with rapid-growth flora, creating cover and cleansing zones.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nHerbalism was purely economic. You flew loops for Fel Lotus and Mana Thistle. While lucrative, it had zero impact on your character's power or utility in a fight.\n",
        plus: "**The Vision for Plus:** \nHerbalism is now 'Field Botany'. You use the plants you find to alter the battlefield. \n\n1. **Active Utility:** *Field of Cleansing Moss* is a deployable AoE cleanse. This gives Herbalists a unique, non-healer role in poison/disease heavy fights.\n2. **Stealth Mechanics:** *Thicket of Obscuring Growth* creates physical cover, reducing threat. It's a way for a Herbalist to save their group from a wipe or reset a bad pull.\n3. **Gardening:** The 'Personal Garden' in Zangarmarsh allows for passive generation of rare herbs."
      },
      coreSystem: {
        title: 'Node Properties',
        desc: 'Flora in Outland has adapted to the chaotic energies of the Nether. Herbs now display unique traits:\n\n**Verdant:** Pulses with life, healing the gatherer.\n**Sun-Kissed:** imbued with solar energy, granting a haste buff.\n**Shadow-Touched:** Dangerous to touch, but yields materials for shadow resistance gear.'
      },
      passiveBonus: {
        name: "Lifeblood",
        desc: "Your connection to nature grants **+2000 Health Regeneration** over 5 sec (Passive) and **+40 Healing/Spell Power**."
      },
      raidUtility: [
        { name: 'Field of Cleansing Moss', quality: 'epic', type: 'Deployable', desc: 'Rapidly grows a patch of purified moss. Allies standing within the area are cleansed of one Poison and one Disease effect every 2 seconds. Lasts 15 seconds.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Pure ground.", effects: ["Use: Grow moss. Cleanses Poison/Disease AoE. (5 Min Cooldown)"] },
        { name: 'Thicket of Obscuring Growth', quality: 'epic', type: 'Deployable', desc: 'Seeds a dense, magical thicket that instantly obscures vision. Allies standing inside have their threat reduced by 10% per second. Lasts 10 seconds.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Fade into the green.", effects: ["Use: Grow thicket. Reduces threat/aggro. (5 Min Cooldown)"] },
        { name: 'Sun-Touched Petal', quality: 'rare', type: 'Consumable', desc: 'Consumes a petal infused with solar energy. The rush of warmth increases movement speed by 20% for 10 seconds.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Photosynthesis.", effects: ["Use: +20% Speed for 10 sec. (2 Min Cooldown)"] },
        { name: 'Spore Cloud', quality: 'rare', type: 'Throwable', desc: 'Hurls a volatile mushroom that ruptures on impact. The releasing cloud disorients all enemies within 5 yards for 3 seconds.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Choke on it.", effects: ["Use: Disorient enemies in 5 yds. (2 Min Cooldown)"] },
        { name: 'Dreamfoil Essence', quality: 'rare', type: 'Consumable', desc: 'Drags the essence from a Dreamfoil leaf. Drinking it creates a lucid state, restoring 1500 mana over 10 seconds. Effect is broken by damage.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Liquid dreams.", effects: ["Use: Restore 1500 Mana. (2 Min Cooldown)"] },
        { name: 'Root Trap', quality: 'uncommon', type: 'Deployable', desc: 'Plants a dormant seed that sprouts instantly when triggered. Entangles the first enemy to step on it, rooting them in place for 8 seconds.', ilvl: 60, slot: 'Consumable', stats: '', flavor: "Watch your feet.", effects: ["Use: Plant a rooting seed. (1 Min Cooldown)"] }
      ],
      masterwork: {
        name: 'Verdant Keeper\'s Charm',
        quality: 'legendary',
        ilvl: 164,
        slot: 'Trinket',
        unique: true,
        stats: '+65 Spirit',
        effects: ['Equip: Grants a chance to find additional herbs when gathering.', 'Use: Summon a Tranquil Treant for 30 sec that pulses healing to your party. (5 Min Cooldown)'],
        flavor: "Life finds a way."
      },
      specs: [
        { name: 'Cultivator', title: 'The Gardener', desc: '**Perk:** "Green Thumb" finds Golden Lotus in any node.' },
        { name: 'Warden', title: 'Toxicologist', desc: '**Perk:** "Venomous Touch" grants immunity to plant toxins.' },
        { name: 'Botanist', title: 'Magical Flora', desc: '**Perk:** "Arcane Symbiosis" grants stats when gathering.' }
      ]
    },
    leatherworking: {
      id: 'leatherworking',
      name: 'Leatherworking',
      title: 'The Primal Pact',
      icon: <Scissors className="w-6 h-6" />,
      image: 'https://i.imgur.com/ZNgl6A4.jpeg',
      desc: 'Leatherworking is now about "Primal Rhythms"—powerful, exclusive buffs that force a choice.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nLeatherworking had one major problem: Drums of Battle. It was so powerful that 20/25 raid members were heavily incentivized (or forced) to be Leatherworkers. It homogenized the game and punished players who wanted other professions.\n",
        plus: "**The Vision for Plus:** \nWe fixed the 'Drum Meta' by embracing it and limiting it. \n\n1. **Exclusivity:** You can only know *one* Primal Rhythm (Haste, Armor, or Mana) at a time. This forces diversity. You need one of each Leatherworker type in your raid, not 20 of the same.\n2. **Raid-Wide:** Drums are now raid-wide. A single LW covers the whole group, drastically freeing up other players to take Alchemy, Engineering, or Blacksmithing.\n3. **Fantasy:** We leaned into the 'Beast Master' vibe. The *Tribal* spec can summon Spirit Beasts, and the *Dragonscale* spec allows you to breathe fire."
      },
      coreSystem: {
        title: 'Primal Rhythms',
        desc: 'The beat of the drum echoes the heartbeat of the land. You can only attune your soul to **ONE** Rhythm at a time, defining your role in the raid:\n\n**Drums of the Primal Hunt:** A frantic beat that drives allies to attack with blinding speed (Haste).\n**Drums of the Earth Warder:** A deep, slow rhythm that hardens skin and resolve (Armor/Stamina).\n**Drums of the Serpent:** A flowing, liquid rhythm that refreshes the mind (Mana/Spirit).'
      },
      raidUtility: [
        { name: 'Primal Rhythms', quality: 'epic', type: 'Ability', desc: 'Grants access to the Primal Rhythms. Activating this ability applies a raid-wide buff determined by your specialization (Haste, Armor, or Mana).', ilvl: 70, slot: 'Ability', stats: '', flavor: "The beat of war.", effects: ["Use: Grants a powerful raid-wide buff. (5 Min Cooldown)"] },
        { name: 'Leather Tents', quality: 'rare', type: 'Deployable', desc: 'Deploys a finely stitched leather tent. Allies resting inside gain the "Rested" status immediately, allowing for rapid logouts and health regeneration.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Home is where you pitch it.", effects: ["Use: Deploys a tent. Grant Rested + HP Regen."] },
        { name: 'Drums of Panic', quality: 'rare', type: 'Consumable', desc: 'Beats a terrifying rhythm on drums of flayed skin. The sound induces primal fear in up to 5 nearby enemies, causing them to flee for 2 seconds.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Run away!", effects: ["Use: AoE Fear (5 targets) for 2 sec. (5 Min Cooldown)"] },
        { name: 'Saddlebags', quality: 'uncommon', type: 'Item Enhancement', desc: 'Crafts a set of durable saddlebags. When attached to leg armor, they increase mounted movement speed by 4%. Does not stack with other speed effects.', ilvl: 60, slot: 'Consumable', stats: '', flavor: "Pack mule.", effects: ["Use: Attach to pants. +4% Mount Speed."] },
        { name: 'Reinforced Barding', quality: 'rare', type: 'Consumable', desc: 'Fits a mount with heavy leather barding. The rider becomes immune to being dazed while mounted for 1 hour.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Ride steady.", effects: ["Use: Prevents daze while mounted for 1 hour."] }
      ],
      specs: [
        {
          name: 'Dragonscale',
          title: 'Slayer\'s Armor',
          desc: '**Perk:** "Scale Weaving" adds armor bonuses.',
          legendary: {
            name: 'Bindings of the Dragonflight',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Wrist',
            unique: true,
            armorType: 'Mail',
            armor: '550',
            stats: '+40 Strength\n+40 Intellect',
            effects: ['Equip: Reduces magic damage taken by 5%.', 'Use: Breath of the Dragon - Unleash a cone of elemental damage based on your highest resistance. (2 Min Cooldown)'],
            flavor: "Hardened by fire."
          }
        },
        {
          name: 'Elemental',
          title: 'Storm Weaver',
          desc: '**Perk:** "Storm\'s Fury" adds Nature damage procs.',
          legendary: {
            name: 'Storm-Caller\'s Grips',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Hands',
            unique: true,
            armorType: 'Mail',
            armor: '600',
            stats: '+45 Agility\n+45 Intellect',
            effects: ['Equip: Your attacks have a chance to trigger Chain Lightning.', 'Use: Summon a localized storm cloud, dealing Nature damage to all enemies in 10 yards. (3 Min Cooldown)'],
            flavor: "Ride the lightning."
          }
        },
        {
          name: 'Tribal',
          title: 'Feral Spirit',
          desc: '**Perk:** "Heart of the Wild" extends buff durations.',
          legendary: {
            name: 'Bindings of the Primal Hunt',
            quality: 'legendary',
            ilvl: 164,
            slot: 'Wrist',
            unique: true,
            armorType: 'Leather',
            armor: '300',
            stats: '+45 Agility\n+45 Stamina',
            effects: ['Equip: Critical strikes grant a stack of "Primal Fury". At 5 stacks, your next special attack unleashes a Spirit Beast strike.', 'Use: Call of the Wild - Increases Agility by 150 for 15 sec. (5 Min Cooldown)'],
            flavor: "Hunt or be hunted."
          }
        }
      ]
    },
    fishing: {
      id: 'fishing',
      name: 'Fishing',
      title: 'The Angler\'s Almanac',
      icon: <Fish className="w-6 h-6" />,
      image: 'https://i.imgur.com/gqzTA4j.jpeg',
      desc: 'Fishing is now an active sport with a "Fighting Fish" mini-game and deep-sea leviathans. It offers **Environmental Manipulation** mechanics to stealth past enemies or save allies.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nFishing was the ultimate patience test. It was necessary for buff food but the gameplay was non-existent. It was a second-screen activity where you clicked a bobber every 20 seconds.\n",
        plus: "**The Vision for Plus:** \nWe gamified Fishing. It is now a sport. \n\n1. **The Mini-Game:** Hooking a rare fish triggers a tension-management mini-game. You have to fight the fish, managing line tension against its stamina.\n2. **Utility:** Fishermen provide 'Chum Buckets' (Threat Drops) and 'Fonts of Clarity' (Mana Regen). The *Hook of the Master Angler* allows you to physically pull friends to safety.\n3. **Harpooner Spec:** We added a combat-focused spec that can drag enemies around the battlefield."
      },
      coreSystem: {
        title: 'The Fighting Fish',
        desc: 'Fishing is a battle of wills. Hooking a rare fish triggers the **"Fighting Fish"** system. \n\nA tension bar appears—you must reel when the line is slack and give slack when the fish runs. Successfully exhausting the fish\'s stamina yields "Titan-Class" catches used for the highest tier of buffs.'
      },
      raidUtility: [
        { name: 'Lure of the Deep', quality: 'epic', type: 'Deployable', desc: 'Casts a bioluminescent lure that bobs hypnotically. It distracts non-boss enemies within 20 yards, reducing their aggression radius by 50% for 15 seconds.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Shiny...", effects: ["Use: Reduce aggro radius of nearby mobs. (10 Min Cooldown)"] },
        { name: 'Slickscale Oil', quality: 'epic', type: 'Consumable', desc: 'Coats the user in a layer of viscous oil harvested from deep-sea aberrations. Grants immunity to all movement impairing effects for 3 seconds. Caution: Highly flammable.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Slippery.", effects: ["Use: Immune to slows/roots for 3 sec."] },
        { name: 'Hook of the Master Angler', quality: 'legendary', type: 'Off-hand', desc: 'A legendary hook forged from Arcanite. It grips the target\'s gear without harming them, allowing you to pull a friendly target to your location.', ilvl: 141, slot: 'Held In Off-hand', stats: '+50 Fishing Skill', flavor: "Get over here!", effects: ["Passive: Water Walking.", "Use: Grip a friendly target to your location."] }
      ],
      masterwork: {
        name: 'Nat Pagle\'s Master Angler\'s Rod',
        quality: 'legendary',
        ilvl: 164,
        slot: 'Two-Hand',
        unique: true,
        armorType: 'Fishing Pole',
        damage: '200 - 300',
        speed: '3.00',
        dps: '83.3',
        stats: '+50 Fishing Skill',
        effects: ['Equip: Water Walking.', 'Use: Cast "Recall", teleporting you to your hearthstone location. (30 Min Cooldown)'],
        flavor: "Wait for it..."
      },
      specs: [
        { name: 'Angler', title: 'Pool Master', desc: '**Perk:** "Net Casting" catches 5-10 fish instantly.' },
        { name: 'Harpooner', title: 'Monster Hunter', desc: '**Perk:** "Bloody Chum" summons elite sharks.' },
        { name: 'Tide-Warden', title: 'Mystic', desc: '**Perk:** "Whispers of the Water" reveals treasures.' }
      ]
    },
    firstaid: {
      id: 'firstaid',
      name: 'First Aid',
      title: 'Combat Medic\'s Codex',
      icon: <HeartPulse className="w-6 h-6" />,
      image: 'https://i.imgur.com/NUZb092.jpeg',
      desc: 'First Aid is no longer just bandages. It is **Battlefield Triage**. We have introduced "Active Trauma Management" with effects that are usable in combat and by non-healers.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nFirst Aid was a channeled heal, broken by damage. It was useless for active tanks or anyone under direct fire. It was purely reactive and often ignored in high-end play.\n",
        plus: "**The Vision for Plus:** \nWe are upgrading First Aid to 'Combat Medicine'. \n\n1. **Burst Survival:** The *Adrenaline-Soaked Bandage* acts as a desperate heal—instantly restoring HP but causing a bleed. It's for when you are about to die *right now*.\n2. **Area Support:** The *Field Triage Kit* allows a DPS player to heal their entire party during downtime or heavy AoE, taking pressure off the healers.\n3. **Utility:** *Anti-Venom Suture* doesn't just clear poisons; it heals for the damage prevented."
      },
      coreSystem: {
        title: 'Trauma Management',
        desc: 'A medic must make hard choices. \n\n**Triage:** Use the "Perform Triage" ability on enemy corpses to harvest supplies.\n**Field Surgery:** You can now craft "Suture Kits" that allow you to stitch wounds mid-fight. These are instant-cast but apply a "Recent Surgery" debuff preventing further aid for 1 minute.'
      },
      raidUtility: [
        { name: 'Adrenaline-Soaked Bandage', quality: 'rare', type: 'Consumable', desc: 'Slaps a chemical-drenched bandage onto the wound. Instantly heals the target for 2000 health, but the caustic chemicals deal 500 Nature damage over 10 seconds.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "This is gonna sting.", effects: ["Use: Heal 2000. Take 500 Dmg over 10s. (3 Min Cooldown)"] },
        { name: 'Field Triage Kit', quality: 'epic', type: 'Deployable', desc: 'Unpacks a sterile field kit. Creates a 5-yard zone where the medic rapidly bandages all allies, healing them for 500 every 2 seconds. Channeling must be maintained.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Hold still!", effects: ["Use: Channel AoE heal zone. (5 Min Cooldown)"] },
        { name: 'Anti-Venom Suture', quality: 'rare', type: 'Consumable', desc: 'Uses a chemically treated thread to stitch a poisoned wound. Instantly removes 1 Poison effect and heals the target for the amount of damage that poison would have caused.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Suck it out.", effects: ["Use: Remove Poison and Heal."] }
      ],
      masterwork: {
        name: 'The First-Ponder\'s Brooch',
        quality: 'legendary',
        ilvl: 164,
        slot: 'Trinket',
        unique: true,
        stats: '+65 Spirit',
        effects: ['Equip: Increases the healing of your bandages by 30%.', 'Use: "Hippocratic Oath" - Prevents death from damage that would normally kill you, instead restoring you to 20% HP. (5 Min Cooldown)'],
        flavor: "Do no harm."
      },
      specs: [
        { name: 'Field Medic', title: 'The Lifesaver', desc: '**Perk:** "Stabilize" puts a dead ally in stasis.' },
        { name: 'Toxicologist', title: 'Venom Master', desc: '**Perk:** "Immunization Serum" grants massive resistance.' },
        { name: 'Anatomist', title: 'The Surgeon', desc: '**Perk:** "Nerve Strike" reduces enemy damage dealt.' }
      ]
    },
    cooking: {
      id: 'cooking',
      name: 'Cooking',
      title: 'The Gourmand\'s Lexicon',
      icon: <Utensils className="w-6 h-6" />,
      image: 'https://i.imgur.com/fJYnwk5.jpeg',
      desc: 'Cooking becomes a social pillar. **"The Hearth\'s Morale"** encourages social interaction with deployed feasts and interactive buff sharing.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nPassive stat buff food only. You ate it, got 20 Stamina, and forgot about it.",
        plus: "**The Vision for Plus:** \nWe want Cooking to feel like you are feeding an army. \n\n1. **Combat Rations:** *Fel-Seared Jerky* restores Health/Mana instantly in combat. It tastes like sulfur but saves lives.\n2. **Deployed Feasts:** *Distilled Spore-Soup* creates a physical pot that players gather around. It can even be kicked over by enemies in PvP!\n3. **Seasoning:** *Gourmet's Flash Powder* allows cooks to 'season' Mage Tables, buffing the mana regen of summoned water."
      },
      coreSystem: {
        title: 'Flavor Profiles',
        desc: 'Cooking is the synthesis of art and alchemy. \n\n**Flavor Profiles:** Ingredients now have tags (**Fiery**, **Savory**, **Aromatic**, **Bitter**). Combining these correctly in the pot unlocks hidden buffs. For example, a "Fiery" + "Savory" combo might grant Attack Power, while "Aromatic" + "Bitter" grants Mana Regen.'
      },
      raidUtility: [
        { name: 'Ration: Fel-Seared Jerky', quality: 'uncommon', type: 'Consumable', desc: 'A strip of cured meat seared in Fel fire. Chewing it rapidly restores 15% Health and Mana over 3 seconds, even while in combat.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Tastes like sulfur, kicks like a mule.", effects: ["Use: Combat Regen 15% HP/Mana. (2 Min Cooldown)"] },
        { name: 'Distilled Spore-Soup', quality: 'epic', type: 'Deployable', desc: 'Places a steaming cauldron of Zangarmarsh mushroom soup. Party members can help themselves to gain the "Well Fed" buff instantly. The pot is fragile.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Don't ask what's floating in it.", effects: ["Use: Place a Feast. Click for Well Fed."] },
        { name: 'Gourmet\'s Flash Powder', quality: 'rare', type: 'Reagent', desc: 'A pouch of volatile spices. When applied to a Mage\'s Table or Soulwell, it "seasons" the conjured items, increasing their restoration rate by 20%.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "BAM!", effects: ["Use: Upgrade Mage Table/Soulwell."] }
      ],
      masterwork: {
        name: 'The High Chef\'s Spoon',
        quality: 'legendary',
        ilvl: 164,
        slot: 'Trinket',
        unique: true,
        stats: '+40 All Stats',
        effects: ['Use: "Taste of Argus" - Increases all primary stats by 5% for 15 sec. Acts as a food buff override. (10 Min Cooldown)'],
        flavor: "A dash of magic."
      },
      specs: [
        { name: 'Gourmand', title: 'Master of the Feast', desc: '**Perk:** "The Grand Buffet" allows creation of choice feasts.' },
        { name: 'Brewer', title: 'Potent Potables', desc: '**Perk:** "Strong Stomach" reduces drunk effects.' },
        { name: 'Artisan', title: 'Perfectionist', desc: '**Perk:** "The Perfect Meal" creates "mini-flask" foods.' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#050403] text-[#e0e0e0] font-sans selection:bg-amber-900 selection:text-white overflow-x-hidden">

      {/* --- STYLES & ANIMATIONS --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-hero { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lato', sans-serif; }
        
        .parchment-texture {
          background-color: #0b0d10;
          background-image: url('https://i.imgur.com/i9PDsfK.jpeg');
          background-size: cover;
        }

        @keyframes legendary-pulse {
          0% { box-shadow: 0 0 0px #ff8000; }
          50% { box-shadow: 0 0 15px #ff8000; }
          100% { box-shadow: 0 0 0px #ff8000; }
        }
        
        .legendary-glow {
          animation: legendary-pulse 3s infinite ease-in-out;
        }

        .cursor-help {
          cursor: help;
        }
      `}</style>

      {/* --- UNIFIED HEADER --- */}
      <UnifiedHeader
        icon="https://i.imgur.com/wgME57L.jpeg"
        background="https://i.imgur.com/3nlvCpa.jpeg"
        section="Burning Crusade Plus"
        sub="Profession Overhaul"
        title="The Artisan's Codex"
        quote="The hammer, the quill, and the vial. Tools of creation in a world of destruction."
      />

      {/* --- NAV SPACER --- */}
      <div className="h-[400px] flex items-center justify-center relative">
        <div className="text-center z-10 animate-fade-in-up">
          <h2 className="font-hero text-5xl lg:text-7xl text-[#c29c55] mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">FORGE YOUR LEGACY</h2>
          <p className="font-body text-[#aeb6bf] text-lg max-w-2xl mx-auto">The world has changed. The artisans of Outland have unlocked secrets long forgotten. Will you master the new crafts?</p>
        </div>
      </div>

      {/* --- INSPECTION WINDOW RENDER --- */}
      {selectedItem && (
        <InspectionWindow item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      <div className="container mx-auto px-4 py-8 min-h-screen">

        <div className="flex flex-col lg:flex-row gap-12 animate-fade-in">

          {/* Sidebar Selector */}
          <aside className="lg:w-1/4">
            <div className="sticky top-52 parchment-texture border border-[#2f2f35] rounded p-1 shadow-2xl">
              <div className="bg-[#050403]/80 p-4 rounded-sm">
                <h3 className="font-hero text-[#8a7b62] text-xs uppercase tracking-[0.2em] mb-6 text-center border-b border-[#2f2f35] pb-2">Select Discipline</h3>
                <div className="space-y-1">
                  {Object.entries(professions).map(([key, prof]) => (
                    <button
                      key={key}
                      onClick={() => { setActiveProfession(key); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className={`w-full text-left px-4 py-3 rounded-sm transition-all duration-200 flex items-center gap-3 border-l-2 group ${activeProfession === key
                        ? 'bg-[#c29c55]/10 border-[#c29c55] text-[#f0e6d2]'
                        : 'border-transparent hover:bg-[#1a1c22] text-[#8a7b62] hover:text-[#c29c55] hover:border-[#c29c55]/50'
                        }`}
                    >
                      <span className={`transition-colors ${activeProfession === key ? 'text-[#c29c55]' : 'text-[#5c5c63] group-hover:text-[#c29c55]'}`}>
                        {React.cloneElement(prof.icon, { size: 18 })}
                      </span>
                      <span className="font-hero text-sm tracking-wide uppercase">{prof.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:w-3/4">
            {(() => {
              const prof = professions[activeProfession];
              return (
                <div className="space-y-10">

                  {/* Hero Header Card */}
                  <div className="relative rounded-sm overflow-hidden border border-[#c29c55] shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-[#0b0d10] group min-h-[300px]">
                    {/* Optional Artwork Background */}
                    {prof.image && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={prof.image}
                          alt={`${prof.name} background`}
                          className="w-full h-full object-cover opacity-60 transition-all duration-700"
                        />
                        {/* Gradient overlay to ensure text pops */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent"></div>
                      </div>
                    )}

                    <div className="relative z-10 p-8 md:p-12 max-w-2xl">
                      <div className="flex items-center gap-4 mb-4">
                        {React.cloneElement(prof.icon, { className: `w-8 h-8 text-[#c29c55]` })}
                        <h2 className="font-hero text-4xl lg:text-5xl text-[#f0e6d2]">{prof.name}</h2>
                      </div>
                      <p className="font-hero text-sm text-[#c29c55] uppercase tracking-[0.25em] mb-6 border-l-2 border-[#c29c55] pl-3">{prof.title}</p>
                      <p className="font-body text-[#aeb6bf] text-lg leading-relaxed mb-6">
                        {formatText(prof.desc)}
                      </p>
                    </div>
                  </div>

                  {/* Architect's Notes (Philosophy) */}
                  {prof.philosophy && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="bg-[#1a1c22] border border-[#2f2f35] p-6 rounded-sm shadow-lg z-10 relative">
                        <div className="flex items-center gap-3 mb-4 border-b border-[#2f2f35] pb-2">
                          <Scroll className="text-[#5c5c63] w-5 h-5" />
                          <h4 className="font-hero text-lg text-[#8a7b62]">Historical Context</h4>
                        </div>
                        <p className="font-body text-[#aeb6bf] text-sm leading-relaxed whitespace-pre-line">
                          {formatText(prof.philosophy.tbc)}
                        </p>
                      </div>
                      <div className="bg-[#0b0d10] border border-[#c29c55] p-6 rounded-sm shadow-lg relative overflow-hidden z-10">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                          <Feather className="w-24 h-24 text-[#c29c55]" />
                        </div>
                        <div className="flex items-center gap-3 mb-4 border-b border-[#c29c55]/30 pb-2 relative z-10">
                          <PenTool className="text-[#c29c55] w-5 h-5" />
                          <h4 className="font-hero text-lg text-[#c29c55]">Design Philosophy</h4>
                        </div>
                        <p className="font-body text-[#e0e0e0] text-sm leading-relaxed whitespace-pre-line relative z-10">
                          {formatText(prof.philosophy.plus)}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Core System */}
                  <div className="parchment-texture border border-[#2f2f35] p-1 rounded-sm">
                    <div className="bg-[#050403]/90 p-8 rounded-sm">
                      <div className="flex items-center gap-3 mb-6 border-b border-[#2f2f35] pb-4">
                        <Star className="text-[#c29c55] w-5 h-5" />
                        <h3 className="font-hero text-xl text-[#f0e6d2] tracking-widest uppercase">Core System: <span className="text-[#c29c55]">{prof.coreSystem.title}</span></h3>
                      </div>
                      <p className="font-body text-[#aeb6bf] whitespace-pre-line leading-relaxed mb-4">
                        {formatText(prof.coreSystem.desc)}
                      </p>

                      {/* WotLK Style Passive Bonus */}
                      {prof.passiveBonus && (
                        <div className="bg-[#1a1c22] border border-[#c29c55]/30 p-4 rounded flex items-start gap-4">
                          <div className="p-2 bg-black rounded border border-[#c29c55] text-[#c29c55]">
                            <Shield className="w-6 h-6" />
                          </div>
                          <div>
                            <h5 className="font-hero text-[#c29c55] text-sm uppercase tracking-widest mb-1">Profession Passive: {prof.passiveBonus.name}</h5>
                            <p className="text-[#aeb6bf] text-sm leading-relaxed">{formatText(prof.passiveBonus.desc)}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Raid Utility */}
                  <div className="bg-[#0b0d10] border border-[#2f2f35] p-6 rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Sword className="w-24 h-24" />
                    </div>
                    <h4 className="font-hero text-lg text-[#c29c55] mb-6 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                      <Sword className="w-5 h-5" /> Raid Utility
                    </h4>
                    <div className="space-y-4">
                      {prof.raidUtility.map((item, i) => (
                        <WowItem key={i} item={item} />
                      ))}
                    </div>
                  </div>

                  {/* Specializations & Legendaries */}
                  <div>
                    <h4 className="font-hero text-2xl text-[#f0e6d2] mb-6 flex items-center gap-2">
                      <Crown className="w-6 h-6 text-[#ff8000]" /> Specializations & Masterworks
                    </h4>

                    {/* Rendering logic for Per-Spec vs Single Masterwork */}
                    {prof.masterwork ? (
                      // Single Masterwork Layout (Gathering/Secondary)
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {prof.specs.map((spec, i) => (
                            <div key={i} className="bg-[#1a1c22] border-t-2 border-[#2f2f35] p-6 rounded-sm shadow-lg">
                              <h4 className="font-hero text-lg text-[#f0e6d2] mb-1">{spec.name}</h4>
                              <span className="font-hero text-[10px] text-[#5c5c63] uppercase tracking-widest mb-4 block">{spec.title}</span>
                              <p className="font-body text-xs text-[#aeb6bf] whitespace-pre-line leading-relaxed">
                                {formatText(spec.desc)}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-[#0b0d10] border border-[#ff8000]/30 p-6 rounded-sm relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Crown className="w-24 h-24 text-[#ff8000]" />
                          </div>
                          <h4 className="font-hero text-lg text-[#ff8000] mb-6 flex items-center gap-2 border-b border-[#2f2f35] pb-2">
                            <Crown className="w-5 h-5" /> Grand Masterwork Reward
                          </h4>
                          <div className="max-w-2xl">
                            <WowItem item={prof.masterwork} isLegendary={true} />
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Per-Spec Legendary Layout (Crafting)
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {prof.specs.map((spec, i) => (
                          <div key={i} className="flex flex-col gap-4">
                            <div className="bg-[#1a1c22] border-t-2 border-[#2f2f35] p-6 rounded-sm shadow-lg h-full flex flex-col">
                              <h4 className="font-hero text-lg text-[#f0e6d2] mb-1">{spec.name}</h4>
                              <span className="font-hero text-[10px] text-[#5c5c63] uppercase tracking-widest mb-4 block">{spec.title}</span>
                              <p className="font-body text-xs text-[#aeb6bf] whitespace-pre-line leading-relaxed mb-4">
                                {formatText(spec.desc)}
                              </p>
                              <div className="border-t border-[#2f2f35] pt-4 mt-auto">
                                {spec.legendary && (
                                  <>
                                    <span className="text-[10px] text-[#ff8000] font-hero uppercase tracking-widest block mb-2">Legendary Reward</span>
                                    <WowItem item={spec.legendary} isLegendary={true} />
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              );
            })()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default TheArtisansCodex;