import React, { useState, useEffect } from 'react';
import { 
  Hammer, FlaskConical, Utensils, Zap, HeartPulse, Fish, 
  Leaf, Scissors, Mountain, Star, Crown, PenTool, Gem, Wrench, Sword, Skull, BookOpen, Scroll, Feather, Shield, X
} from 'lucide-react';

const TheArtisansCodex = () => {
  const [activeProfession, setActiveProfession] = useState('alchemy');
  const [scrolled, setScrolled] = useState(false);
  
  // --- INSPECTION STATE ---
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to parse bold text
  const formatText = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
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

  // --- MODAL TOOLTIP COMPONENT ---
  const InspectionWindow = ({ item, onClose }) => {
    if (!item) return null;
    
    const colors = {
      legendary: '#ff8000',
      epic: '#a335ee',
      rare: '#0070dd',
      uncommon: '#1eff00',
      common: '#ffffff'
    };
    const nameColor = colors[item.quality] || colors.common;

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
          onClick={onClose}
        ></div>

        {/* Tooltip Window */}
        <div 
          className="relative w-full max-w-md bg-[#080808] border border-[#444] shadow-[0_0_50px_rgba(0,0,0,1)] p-6 rounded-md animate-in fade-in zoom-in duration-200"
          style={{ borderImage: 'linear-gradient(to bottom, #444, #111) 1' }}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 text-stone-500 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="font-bold text-2xl mb-1 tracking-wide" style={{ color: nameColor }}>{item.name}</div>
          {item.quality !== 'artifact' && item.ilvl && <div className="text-[#ffd100] text-sm font-bold">Item Level {item.ilvl}</div>}
          <div className="text-white text-sm">Binds when picked up</div>
          {item.unique && <div className="text-white text-sm">Unique-Equipped</div>}

          {/* Slots & Type */}
          <div className="flex justify-between text-white text-sm mt-3 border-t border-[#333] pt-3">
            <span>{item.slot || "Trinket"}</span>
            <span>{item.armorType || ""}</span>
          </div>

          {/* Stats Block */}
          <div className="my-3">
            {item.armor && <div className="text-white text-sm">{item.armor} Armor</div>}
            {item.damage && (
              <div className="flex justify-between text-white text-sm font-medium">
                <span>{item.damage} Damage</span>
                <span>Speed {item.speed}</span>
              </div>
            )}
            {item.dps && <div className="text-white text-sm mb-2">({item.dps} damage per second)</div>}

            {item.stats && item.stats.split('\n').map((stat, i) => (
              <div key={i} className="text-white text-sm font-medium">{stat.startsWith('+') ? stat : `+ ${stat}`}</div>
            ))}
          </div>

          {/* Requirements */}
          {(item.durability || item.reqLevel || item.req) && (
             <div className="text-sm text-white mb-3 space-y-1">
                {item.durability && <div>Durability {item.durability} / {item.durability}</div>}
                {item.reqLevel && <div>Requires Level 70</div>}
                {item.req && <div>{item.req}</div>}
             </div>
          )}

          {/* Effects (Green Text) */}
          <div className="text-[#1eff00] text-sm space-y-3 leading-relaxed">
            {item.effects && item.effects.map((effect, i) => (
               <div key={i}>{effect}</div>
            ))}
          </div>

          {/* Flavor Text */}
          {item.flavor && (
            <div className="text-[#ffd100] italic text-sm mt-6 opacity-90 text-center">"{item.flavor}"</div>
          )}
          
          <div className="mt-6 text-[10px] text-stone-600 text-center uppercase tracking-widest">Click outside to close</div>
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
        desc: 'The act of brewing is now a gamble based on **Methodology**.\n\n**Volatile (iLvl +3):** Unstable but potent. Might polymorph the user for 2s.\n**Perfected (iLvl +7):** Flawless. Grants additional secondary stats.'
      },
      raidUtility: [
        { name: 'Cauldron of Fortification', quality: 'epic', type: 'Deployable', desc: 'Raid members receive a "Cauldron-Brewed Healing Potion" that does not consume their personal stock.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Bubbling with vitality.", effects: ["Use: Creates a cauldron that raid members can use to gain a Cauldron-Brewed Healing Potion. Lasts 3 min. (5 Min Cooldown)"] },
        { name: 'Phial of Attenuation', quality: 'epic', type: 'Deployable', desc: 'Allies can choose between Fire or Shadow Warder phials.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Choose your poison... or your cure.", effects: ["Use: Set out a rack of phials. Allies can interact with it to gain +150 Fire or Shadow Resistance for 15 sec. (5 Min Cooldown)"] }
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
        desc: 'Your **Mettle** stat determines gear quality.\n\n**Masterwork (iLvl +3):** Enhanced base armor/damage.\n**Flawless (iLvl +7):** The pinnacle. Possesses unique visual glows and the highest possible stat budget.'
      },
      raidUtility: [
        { name: 'Forgemaster\'s Bell', quality: 'epic', type: 'Consumable', desc: 'Sound the bell to grant all party members **+150 Armor Penetration** for 12s.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "For whom the bell tolls...", effects: ["Use: Sound the bell to grant all party members within 30 yards 150 Armor Penetration for 12 sec. (5 Min Cooldown)"] },
        { name: 'Anvil of War', quality: 'epic', type: 'Deployable', desc: 'Allies interacting with it gain **+75 Fire Damage** to their next 3 attacks.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Strike while the iron is hot.", effects: ["Use: Places an Anvil of War for 20 sec. Allies can interact with it to temper their weapons. (5 Min Cooldown)"] }
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
            damage: '380 - 571',
            speed: '3.80',
            dps: '125.1',
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
        desc: 'Your **Focus** stat determines quality.\n**Brilliant (iLvl +3):** Enhanced stats and visual effects.\n**Flawless (iLvl +7):** Perfect binding with highest stats.'
      },
      raidUtility: [
        { name: 'Rune of Soul-Binding', quality: 'epic', type: 'Consumable', desc: 'Weapon Buff. The next time the target dies, they are instantly resurrected at 30% HP.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Death is but a delay.", effects: ["Use: Etches a rune onto a weapon. If the bearer dies within 10 min, they are instantly resurrected at 30% HP. (5 Min Cooldown)"] },
        { name: 'Rune of Disruption', quality: 'epic', type: 'Consumable', desc: 'Weapon Buff. The next interrupt cast by the target also silences all enemies in 10y.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Silence the chorus.", effects: ["Use: Etches a rune onto a weapon. The next successful interrupt also silences all enemies within 10 yds. (5 Min Cooldown)"] }
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
        desc: 'Crafting fails can now result in **"Eureka!"** moments, granting temporary buffs or new schematic fragments. \n**Overcharge:** Most gadgets can be overcharged for double effect but risk a catastrophic malfunction.'
      },
      raidUtility: [
        { name: 'Field Repair Bot 110G', quality: 'epic', type: 'Deployable', desc: 'A robot that repairs gear and sells reagents.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Authorized reseller.", effects: ["Use: Unfolds into a Field Repair Bot that can repair items and purchase loot. Lasts 10 min."] },
        { name: 'Gnomish Gravity Well', quality: 'epic', type: 'Deployable', desc: 'Creates a localized gravity distortion.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Watch your step.", effects: ["Use: Creates a gravity well that slows all enemies within 15 yards by 60% for 20 sec. (5 Min Cooldown)"] }
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
            damage: '280 - 410',
            speed: '2.90',
            dps: '119.0',
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
        desc: 'Cutting gems now has a mini-game component. A **Perfect Cut** yields a gem with slightly higher stats than the standard version. \n**Prisms:** New trinkets that can refract light to deal damage or heal.'
      },
      raidUtility: [
        { name: 'Consortium Focusing Lens', quality: 'epic', type: 'Deployable', desc: 'Refracts light to reveal hidden enemies.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Nowhere to hide.", effects: ["Use: Places a lens that emits a beam of light, revealing all stealth and invisible units within 30 yds. (5 Min Cooldown)"] },
        { name: 'Brilliant Glass', quality: 'epic', type: 'Consumable', desc: 'Contains a random selection of gems.', ilvl: 70, slot: 'Item', stats: '', flavor: "A gamble in glass.", effects: ["Use: Shatter the glass to reveal the gems hidden within. (20 Hour Cooldown)"] }
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
        desc: 'Crafting quality relies on **Finesse**.\n**Masterwork (iLvl +3):** Enhanced stats.\n**Flawless (iLvl +7):** Shimmers with latent energy. Highest stats.'
      },
      raidUtility: [
        { name: 'Banner of Arcane Warding', quality: 'epic', type: 'Deployable', desc: 'Grants +100 All Resist to the raid.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "A shield of silk.", effects: ["Use: Places a banner that increases All Resistance by 100 for all party members within 30 yards. Lasts 15 sec. (5 Min Cooldown)"] },
        { name: 'Banner of Swift Threads', quality: 'epic', type: 'Deployable', desc: 'Grants +5% Cast/Attack Speed to the raid.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Wind in your sails.", effects: ["Use: Places a banner that increases casting and attack speed by 5% for all party members within 30 yards. Lasts 15 sec. (5 Min Cooldown)"] }
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
        desc: 'Scribes manipulate magic through **Ink Quality**. \n**Glyph Resonance:** Glyphs have tiers (Standard, Ancient, Primordial).'
      },
      raidUtility: [
        { name: 'Scroll of Heroic Tales', quality: 'epic', type: 'Deployable', desc: 'Inspires the raid, granting a "Battle Shout" buff.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Legends never die.", effects: ["Use: Inspires all party members, increasing Attack Power by 300 and Spell Power by 150. Lasts 5 min. (5 Min Cooldown)"] },
        { name: 'Rune of Warding', quality: 'epic', type: 'Deployable', desc: 'Reduces AoE magic damage taken by 15%.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Stand your ground.", effects: ["Use: Inscribes a rune on the ground. Allies standing inside take 15% less damage from Area of Effect spells. Lasts 20 sec. (5 Min Cooldown)"] }
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
            stats: '+60 Intellect\n+55 Stamina',
            effects: ['Equip: Increases spell power by 250.', 'Equip: Your spells have a chance to duplicate themselves at 50% effectiveness.', 'Use: Scribble a rune of power on the air, increasing damage done by 15% for 20 sec. (3 Min Cooldown)'],
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
            effects: ['Equip: Increases healing done by up to 400.', 'Equip: Your Glyphs are 10% more effective.', 'Use: Rewrite an enemy\'s fate, dispelling all magical buffs on them. (1 Min Cooldown)'],
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
        desc: 'Veins have traits: **Rich**, **Jewel-Encrusted**, or **Element-Infused**.\n**Surveyor\'s Map:** Triangulate rare nodes.'
      },
      passiveBonus: {
        name: "Toughness",
        desc: "Your hardened skin and tireless endurance grant you **+60 Stamina**."
      },
      raidUtility: [
        { name: 'Earthen Barricade', quality: 'epic', type: 'Deployable', desc: 'Summons a wall of rock that blocks LoS.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Hold the line.", effects: ["Use: Summons a destructible wall of rock that blocks line of sight. Lasts 20 sec. (5 Min Cooldown)"] },
        { name: 'Smelting Brazier', quality: 'epic', type: 'Deployable', desc: 'Gain +100 Attack Power for 15s.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Fresh from the forge.", effects: ["Use: Places a brazier. Allies can interact to gain +100 Attack Power for 15 sec. (5 Min Cooldown)"] }
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
        desc: 'Harvest **Pristine Hides**, **Beast Trophies**, and **Anatomical Samples**.'
      },
      passiveBonus: {
        name: "Master of Anatomy",
        desc: "Your knowledge of critical weak points grants you **+40 Critical Strike Rating**."
      },
      raidUtility: [
        { name: 'War Horn of the Wilds', quality: 'epic', type: 'Deployable', desc: 'Sound the horn to grant +5% Phys Crit to raid.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "The hunt begins.", effects: ["Use: Places a War Horn. Allies can sound it to gain +5% Physical Critical Strike chance for 15 sec. (5 Min Cooldown)"] },
        { name: 'Pheromone Marker', quality: 'epic', type: 'Throwable', desc: 'Marks a target, increasing Physical damage taken by 5%.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "They can't hide.", effects: ["Use: Marks a target, increasing Physical damage taken by 5% for 20 sec. (5 Min Cooldown)"] }
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
        desc: 'Herbs have traits: **Verdant**, **Sun-Kissed**, **Shadow-touched**.'
      },
      passiveBonus: {
        name: "Lifeblood",
        desc: "Your connection to nature grants **+2000 Health Regeneration** over 5 sec (Passive) and **+40 Healing/Spell Power**."
      },
      raidUtility: [
        { name: 'Field of Cleansing Moss', quality: 'epic', type: 'Deployable', desc: 'Cleanses poisons/diseases from allies.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Pure ground.", effects: ["Use: Grows a patch of moss. Allies standing on it are cleansed of 1 Poison and 1 Disease every 2 sec. Lasts 15 sec. (5 Min Cooldown)"] },
        { name: 'Thicket of Obscuring Growth', quality: 'epic', type: 'Deployable', desc: 'Reduces threat for allies inside.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Fade into the green.", effects: ["Use: Grows a dense thicket. Allies inside have their threat reduced by 10% per second. Lasts 10 sec. (5 Min Cooldown)"] }
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
        desc: 'You can only attune to ONE Rhythm at a time. \n**Drums of the Primal Hunt:** Raid-wide Haste. \n**Drums of the Earth Warder:** Raid-wide Armor/Stamina. \n**Drums of the Serpent:** Raid-wide Mana/Spirit.'
      },
      raidUtility: [
        { name: 'Primal Rhythms', quality: 'epic', type: 'Ability', desc: 'The core raid cooldowns (Haste, Defense, or Mana).', ilvl: 70, slot: 'Ability', stats: '', flavor: "The beat of war.", effects: ["Use: Grants a powerful raid-wide buff (Haste, Armor, or Mana) based on your specialization. (5 Min Cooldown)"] },
        { name: 'Leather Tents', quality: 'rare', type: 'Deployable', desc: 'Grants "Rested" status anywhere.', ilvl: 70, slot: 'Consumable', stats: '', flavor: "Home is where you pitch it.", effects: ["Use: Deploys a tent. Players inside gain Rested status and can log out instantly."] }
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
      desc: 'Fishing is now an active sport with a "Fighting Fish" mini-game and deep-sea leviathans.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nFishing was the ultimate patience test. It was necessary for buff food but the gameplay was non-existent. It was a second-screen activity where you clicked a bobber every 20 seconds.\n",
        plus: "**The Vision for Plus:** \nWe gamified Fishing. It is now a sport. \n\n1. **The Mini-Game:** Hooking a rare fish triggers a tension-management mini-game. You have to fight the fish, managing line tension against its stamina. This makes catching a 'Titan-Eater' feel like a boss fight.\n2. **Raid Utility:** Fishermen provide 'Chum Buckets' (Threat Drops) and 'Fonts of Clarity' (Mana Regen). This makes them useful in raids beyond just providing raw food materials.\n3. **Harpooner Spec:** We added a combat-focused spec. The *Harpooner* can drag enemies around the battlefield with a gun, giving Fishing a unique crowd-control niche."
      },
      coreSystem: {
        title: 'The Fighting Fish',
        desc: 'Hooking a rare fish triggers a mini-game. You must manage line tension against the fish\'s stamina.'
      },
      raidUtility: [
        { name: 'Chum Bucket', quality: 'epic', type: 'Deployable', desc: 'Distracts non-boss enemies.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Smells awful.", effects: ["Use: Distracts all non-boss enemies in 20 yards, reducing their threat generation by 50% for 20 sec. (5 Min Cooldown)"] },
        { name: 'Font of Clarity', quality: 'epic', type: 'Deployable', desc: 'Allies can drink to restore mana.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Clear water, clear mind.", effects: ["Use: Places a font. Allies can drink from it to restore 4000 mana over 10 sec. (5 Min Cooldown)"] }
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
      desc: 'First Aid is no longer just bandages. It is a tactical support profession involving triage and combat stims.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nFirst Aid was mandatory but boring. Everyone had it. Everyone used Heavy Netherweave Bandages. It was a binary system: either you had a bandage debuff or you didn't. It was purely reactive and uniform across all classes.\n",
        plus: "**The Vision for Plus:** \nWe are upgrading First Aid to 'Combat Medicine'. It is now a support role. \n\n1. **Triage Mechanic:** You can now 'Perform Triage' on corpses to harvest biological samples. This links the profession to the world in a grisly but thematic way. \n2. **Battlefield Resurrection:** The *Field Defibrillator* (Anatomist spec) gives non-healer classes a battle-res option, albeit a risky one. This changes the dynamics of 5-man and 10-man content significantly.\n3. **Buffs and Stims:** *Adrenaline Shots* and *Immunization Serums* allow a Medic to buff their allies proactively, preventing damage rather than just healing it."
      },
      coreSystem: {
        title: 'Anatomical Harvest',
        desc: 'Use "Perform Triage" on corpses to harvest samples like **Sterile Sinew** or **Potent Venom Glands**.'
      },
      raidUtility: [
        { name: 'Field Triage Kit', quality: 'epic', type: 'Deployable', desc: 'Allies can grab a "Field Dressing".', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Patch 'em up.", effects: ["Use: Deploys a kit. Allies can loot a Field Dressing, a one-time use powerful self-heal bandage. (5 Min Cooldown)"] },
        { name: 'Adrenaline Shot', quality: 'epic', type: 'Consumable', desc: 'Injects an ally, granting speed and immunity.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Don't pass out.", effects: ["Use: Injects an ally. Increases run speed by 30% and grants immunity to Fear for 10 sec. (5 Min Cooldown)"] }
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
      desc: 'Cooking becomes a social pillar. Flavor profiles and interactive feasts transform the kitchen into a laboratory.',
      philosophy: {
        tbc: "**The 2007 Landscape:** \nTBC introduced Daily Cooking Quests, which were great, but the food itself was just a stat stick you ate before a pull. The most social aspect was dropping a Basic Campfire.\n",
        plus: "**The Vision for Plus:** \nCooking is now the social heart of the guild. \n\n1. **Interactive Feasts:** The *Stone-Soup Cauldron* requires raid members to click and contribute meat to finish the stew. This builds camaraderie (and clears bags). \n2. **Flavor Profiles:** We added a discovery system. Combining 'Fiery' spices with 'Savory' meats yields different results than 'Aromatic' spices. It makes recipe discovery a puzzle game. \n3. **Brewer Spec:** Finally, a reason to be a Brewmaster. Alcohol now provides combat stats for *Brewers*, turning a roleplay element into a viable raiding niche."
      },
      coreSystem: {
        title: 'Flavor Profiles',
        desc: 'Ingredients have quality levels. **Flavor Profiles:** Spices are categorized (Fiery, Savory, Aromatic).'
      },
      raidUtility: [
        { name: 'Stone-Soup Cauldron', quality: 'epic', type: 'Deployable', desc: 'Raid members contribute meat to the pot.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Needs more salt.", effects: ["Use: Raid members can click to contribute meat. Once full, grants a massive HoT to the entire raid. (5 Min Cooldown)"] },
        { name: 'Spice Diffuser', quality: 'epic', type: 'Deployable', desc: 'Increases resource regeneration.', ilvl: 141, slot: 'Consumable', stats: '', flavor: "Smells like victory.", effects: ["Use: Places a diffuser. Increases Mana, Energy, and Rage regeneration for all nearby allies for 20 sec. (5 Min Cooldown)"] }
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

      {/* --- HERO HEADER --- */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-[#c29c55]/30 ${scrolled ? 'bg-[#050403]/95 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
           {/* Artisan's Table Background */}
           <img src="https://i.imgur.com/Nad4igB.jpeg" className="w-full h-[600px] object-cover opacity-40" style={{ transform: `translateY(-${scrolled ? 50 : 0}px)` }} />
           <div className="absolute inset-0 bg-gradient-to-b from-[#050403]/60 via-[#050403]/90 to-[#050403]"></div>
        </div>

        <div className="container mx-auto px-6 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 bg-[#1a1c22] border border-[#c29c55] rounded flex items-center justify-center shadow-[0_0_15px_rgba(194,156,85,0.2)]">
               <BookOpen className="text-[#c29c55] w-8 h-8" />
             </div>
             <div>
               <h1 className="font-hero text-2xl lg:text-3xl text-[#f0e6d2] tracking-[0.1em] drop-shadow-md">THE ARTISAN'S CODEX</h1>
               <p className="text-xs text-[#8a7b62] font-body tracking-[0.3em] uppercase mt-1">Burning Crusade Plus</p>
             </div>
          </div>
        </div>
      </header>

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
              <div className="sticky top-28 parchment-texture border border-[#2f2f35] rounded p-1 shadow-2xl">
                <div className="bg-[#050403]/80 p-4 rounded-sm">
                  <h3 className="font-hero text-[#8a7b62] text-xs uppercase tracking-[0.2em] mb-6 text-center border-b border-[#2f2f35] pb-2">Select Discipline</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
                    {Object.entries(professions).map(([key, prof]) => (
                      <button
                        key={key}
                        onClick={() => setActiveProfession(key)}
                        className={`flex items-center gap-4 p-3 rounded-sm transition-all border-l-2 ${
                          activeProfession === key 
                            ? `bg-[#1a1c22] border-[#c29c55] text-[#f0e6d2] shadow-inner` 
                            : 'border-transparent hover:bg-[#1a1c22] text-[#5c5c63] hover:text-[#aeb6bf]'
                        }`}
                      >
                        <div className={`${activeProfession === key ? 'text-[#c29c55]' : 'text-current'}`}>{prof.icon}</div>
                        <span className="font-hero text-sm tracking-wide">{prof.name}</span>
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
                                            <span className="text-[10px] text-[#ff8000] font-hero uppercase tracking-widest block mb-2">Legendary Reward</span>
                                            <WowItem item={spec.legendary} isLegendary={true} />
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