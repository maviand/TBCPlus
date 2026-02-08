export const factionsData = {
    // --- HELLFIRE PENINSULA ---
    honor: {
        id: 'honor',
        name: 'Honor Hold / Thrallmar',
        icon: "https://i.imgur.com/BR2rIUh.jpeg",
        color: 'text-orange-500',
        location: "Hellfire Peninsula",
        hubs: ["Honor Hold (Alliance)", "Thrallmar (Horde)", "Hellfire Citadel"],
        desc: "The vanguard of the Alliance and Horde in Outland. Veterans of the Second War, they have held the line against the Burning Legion for decades, waiting for reinforcements from through the Dark Portal.",
        lore: "Founded by the Sons of Lothar and the original Horde forces, these strongholds represent the first foothold for players in Outland. For years they have been besieged by the Fel Orcs of Hellfire Citadel, surviving only through sheer grit and the leadership of heroes like Danath Trollbane and Nazgrel. They seek to break the Legion's siege and push deeper into the shattered world.",
        repGuide: "Reputation is initially gained by completing quests in Hellfire Peninsula and running **Hellfire Ramparts** and **The Blood Furnace**. Once you reach Honored, you must run the **Shattered Halls** or Heroic dungeons to advance further. Daily PvP quests involving the fortifications in Hellfire also grant reputation.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Formula: Enchant Bracer - Superior Healing", quality: "uncommon", type: "Enchanting", effects: ["Permanently enchant bracers to increase healing done by spells and effects by up to 30."] } },
            { req: "Friendly", item: { name: "Design: Inscribed Flame Spessarite", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts an Inscribed Flame Spessarite (+4 Crit & +4 Strength)."] } },
            { req: "Friendly", item: { name: "Footman's Longsword", quality: "uncommon", ilvl: 95, type: "One-Hand", slot: "Sword", speed: 2.4, damage: "85 - 130", dps: 44.8, stats: ["+8 Strength", "+8 Stamina"], effects: ["A standard issue blade for the Alliance vanguard."] } },
            { req: "Friendly", item: { name: "Grunt's Waraxe", quality: "uncommon", ilvl: 95, type: "One-Hand", slot: "Axe", speed: 2.5, damage: "88 - 134", dps: 44.4, stats: ["+9 Strength", "+7 Stamina"], effects: ["Favored by the heavy infantry of Thrallmar."] } },
            // Honored
            { req: "Honored", item: { name: "Flamewrought Key", quality: "rare", ilvl: 1, type: "Key", slot: "Key", effects: ["Unlocks Heroic difficulty for Hellfire Citadel dungeons.", "Required for: Ramparts, Blood Furnace, Shattered Halls."] } },
            { req: "Honored", item: { name: "Ring of Conquered Power", quality: "rare", ilvl: 100, slot: "Finger", type: "Ring", stats: ["+18 Spell Critical Strike Rating", "+15 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 14."] } },
            { req: "Honored", item: { name: "Leggings of the Felguard", quality: "rare", ilvl: 100, slot: "Legs", type: "Plate", stats: ["+25 Strength", "+20 Stamina", "+15 Hit Rating"], effects: ["Equip: Improves critical strike rating by 15."] } },
            { req: "Honored", item: { name: "Pattern: Cobra Hide Legarmor", quality: "rare", type: "Leatherworking", effects: ["Permanently attach legarmor to pants to increase attack power by 40 and critical strike rating by 10."] } },
            { req: "Honored", item: { name: "Recipe: Elixir of Major Agility", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew an Elixir of Major Agility (+35 Agility)."] } },
            // Revered
            { req: "Revered", item: { name: "Blade of the Unbroken", quality: "rare", ilvl: 115, type: "One-Hand", slot: "Sword", speed: 2.60, damage: "135 - 204", dps: 65.2, stats: ["+15 Strength", "+14 Stamina"], effects: ["Equip: Improves hit rating by 12."] } },
            { req: "Revered", item: { name: "Hellfire Shotgun", quality: "rare", ilvl: 115, type: "Ranged", slot: "Gun", speed: 2.80, damage: "140 - 265", dps: 72.3, stats: ["+14 Agility"], effects: ["Equip: Increases attack power by 24."] } },
            { req: "Revered", item: { name: "Band of the Drill Sergeant", quality: "rare", ilvl: 115, slot: "Finger", type: "Ring", stats: ["+22 Strength", "+15 Hit Rating"], effects: ["Equip: Improves critical strike rating by 14."] } },
            { req: "Revered", item: { name: "Design: Dawnstone Crab", quality: "rare", type: "Jewelcrafting", effects: ["Teaches you how to cut a Dawnstone Crab trinket (+30 Defense)."] } },
            { req: "Revered", item: { name: "Formula: Enchant Chest - Exceptional Stats", quality: "rare", type: "Enchanting", effects: ["Permanently enchant chest to increase all stats by 6."] } },
            // Exalted
            { req: "Exalted", item: { name: "Hellforged Battle Axe", quality: "epic", ilvl: 135, type: "Two-Hand", slot: "Axe", speed: 3.50, damage: "340 - 511", dps: 121.6, stats: ["+45 Strength", "+38 Stamina", "+30 Critical Strike Rating"], effects: ["“Forged in the fires of the Citadel itself.”"] } },
            { req: "Exalted", item: { name: "Marksman's Glory", quality: "epic", ilvl: 135, type: "Ranged", slot: "Bow", speed: 2.90, damage: "215 - 380", dps: 102.6, stats: ["+28 Agility", "+20 Hit Rating"], effects: ["Equip: Increases attack power by 50."] } },
            { req: "Exalted", item: { name: "Tabard of the Protector", quality: "epic", type: "Tabard", effects: ["Use: Create a visual explosion of holy light. 5 min cooldown.", "Equip: Represents your dedication to the defense of the Dark Portal."] } },
            { req: "Exalted", item: { name: "Plans: Felsteel Shield Spike", quality: "epic", type: "Blacksmithing", effects: ["Teaches you how to craft Felsteel Shield Spikes (Deal damage on block)."] } },
        ]
    },

    // --- ZANGARMARSH ---
    cenarion: {
        id: 'cenarion',
        name: 'Cenarion Expedition',
        icon: "https://i.imgur.com/rs1mDNV.jpeg",
        color: 'text-green-500',
        location: "Zangarmarsh",
        hubs: ["Cenarion Refuge (Zangarmarsh)", "Evergrove (Blade's Edge)", "Coilfang Reservoir"],
        desc: "A force of druids and explorers sent to study the strange ecosystems of Outland. They are increasingly concerned by the Naga's drainage of Zangarmarsh's lakes and the corruption spreading from Hellfire.",
        lore: "Led by Ysiel Windsinger, the Expedition seeks to maintain the delicate balance of nature in a broken world. They are currently investigating the drying lakes of Zangarmarsh, a catastrophe caused by Lady Vashj's pumping operations in Coilfang Reservoir. They welcome all adventurers who respect the wild.",
        repGuide: "Questing in Zangarmarsh provides the base reputation. You can turn in **Unidentified Plant Parts** until Honored. Running **The Slave Pens** and **The Underbog** grants reputation up to Honored (and beyond in Heroic). For Revered/Exalted, you must clear **The Steamvaults** or turn in **Coilfang Armaments**.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Pattern: Heavy Clefthoof Boots", quality: "common", type: "Leatherworking", effects: ["Teaches you how to craft Heavy Clefthoof Boots (Tanking Leather)."] } },
            { req: "Friendly", item: { name: "Expedition Scout's Leggings", quality: "uncommon", ilvl: 98, slot: "Legs", type: "Leather", stats: ["+18 Agility", "+15 Stamina"], effects: ["Equip: Improves hit rating by 10."] } },
            { req: "Friendly", item: { name: "Preserver's Cudgel", quality: "uncommon", ilvl: 98, type: "Main-Hand", slot: "Mace", speed: 1.80, damage: "45 - 94", dps: 38.6, stats: ["+10 Stamina", "+12 Intellect"], effects: ["Equip: Increases healing done by spells and effects by up to 45."] } },
            { req: "Friendly", item: { name: "Formula: Enchant Gloves - Herbalism", quality: "uncommon", type: "Enchanting", effects: ["Permanently enchant gloves to increase Herbalism skill by 5."] } },
            // Honored
            { req: "Honored", item: { name: "Reservoir Key", quality: "rare", ilvl: 1, type: "Key", slot: "Key", effects: ["Unlocks Heroic difficulty for Coilfang Reservoir dungeons.", "Required for: Slave Pens, Underbog, Steamvault."] } },
            { req: "Honored", item: { name: "Watcher's Cowl", quality: "rare", ilvl: 100, slot: "Head", type: "Leather", stats: ["+24 Agility", "+18 Stamina", "+16 Hit Rating"], effects: ["Equip: Increases attack power by 32."] } },
            { req: "Honored", item: { name: "Preserver's Ring", quality: "rare", ilvl: 100, slot: "Finger", type: "Ring", stats: ["+12 Intellect", "+10 Spirit"], effects: ["Equip: Increases healing done by spells and effects by up to 26."] } },
            { req: "Honored", item: { name: "Recipe: Flask of Distilled Wisdom", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Flask of Distilled Wisdom (+65 Intellect)."] } },
            { req: "Honored", item: { name: "Design: Luminous Noble Topaz", quality: "rare", type: "Jewelcrafting", effects: ["Cuts Luminous Noble Topaz (+4 Intellect & +8 Healing)."] } },
            // Revered
            { req: "Revered", item: { name: "Warden's Hauberk", quality: "rare", ilvl: 115, slot: "Chest", type: "Leather", stats: ["+28 Agility", "+30 Stamina", "+22 Hit Rating"], effects: ["Equip: Increases attack power by 50."] } },
            { req: "Revered", item: { name: "Cenarion Naturalist's Staff", quality: "rare", ilvl: 115, type: "Two-Hand", slot: "Staff", speed: 3.20, damage: "145 - 248", dps: 61.4, stats: ["+35 Stamina", "+32 Intellect", "+25 Spirit"], effects: ["Equip: Increases healing done by spells and effects by up to 120."] } },
            { req: "Revered", item: { name: "Windcaller's Orb", quality: "rare", ilvl: 115, slot: "Off-Hand", type: "Misc", stats: ["+15 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 25 and improves spell hit rating by 10."] } },
            { req: "Revered", item: { name: "Recipe: Transmute Earthstorm Diamond", quality: "rare", type: "Alchemy", effects: ["Teaches transmutation of Earthstorm Diamonds."] } },
            { req: "Revered", item: { name: "Plans: Adamantite Weightstone", quality: "rare", type: "Blacksmithing", effects: ["Craft Adamantite Weightstones (+12 Weapon Damage, +14 Crit Rating)."] } },
            // Exalted
            { req: "Exalted", item: { name: "Earthwarden", quality: "epic", ilvl: 125, type: "Two-Hand", slot: "Mace", speed: 2.30, damage: "155 - 280", dps: 94.6, stats: ["+550 Armor", "+35 Stamina"], effects: ["Equip: Increases defense rating by 25.", "Shape: Critical strikes grant 'Skin of Stone', increasing armor by 10% for 10 sec.", "A Druid Tanking Staple."] } },
            { req: "Exalted", item: { name: "Ashleaf Sprig", quality: "epic", ilvl: 135, slot: "Relic", type: "Idol", effects: ["Equip: Your Tree of Life form now increases healing done by your party members by an additional 3%."] } },
            { req: "Exalted", item: { name: "Verdant Sphere", quality: "epic", ilvl: 135, slot: "Neck", type: "Neck", stats: ["+15 Nature Resistance", "+25 Stamina"], effects: ["Equip: Increases healing done by spells and effects by up to 55."] } },
            { req: "Exalted", item: { name: "Cenarion War Hippogryph", quality: "epic", type: "Mount", effects: ["Summons and dismisses a swift Cenarion War Hippogryph.", "100% Ground Speed / 280% Flying Speed."] } },
        ]
    },
    sporeggar: {
        id: 'sporeggar',
        name: 'Sporeggar',
        icon: "https://i.imgur.com/g10RjZv.jpeg",
        color: 'text-emerald-400',
        location: "Zangarmarsh",
        hubs: ["Sporeggar (Western Zangarmarsh)"],
        desc: "A timid race of mushroom people native to Zangarmarsh. Threatened by the bog giants and fungal giants, they seek allies to help them survive the rapidly changing ecosystem.",
        lore: "The Sporelings are the indigenous people of the marsh, simple yet resilient. They are under constant threat from the Marsh Lurkers and the oppression of the Naga. Gaining their trust requires patience and a willingness to get your hands dirty with the local fungi.",
        repGuide: "You start as Unfriendly. You must grind **Bog Lord Tendrils** or **Mature Spore Sacs** to hit Neutral. From there, quests in Sporeggar and running **The Underbog** (collecting Sanguine Hibiscus) will take you to Exalted. It is a grind-heavy reputation.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Sporeling Snack", quality: "uncommon", type: "Pet Food", effects: ["Use: Feed your pet. Increases their happiness and stamina/spirit by 15 for 30 min."] } },
            { req: "Friendly", item: { name: "Tallstalk Mushroom", quality: "common", type: "Consumable", effects: ["Restores 1500 health. Can be gathered easily in the marsh."] } },
            { req: "Friendly", item: { name: "Red Hibiscus", quality: "common", type: "Crafting Reagent", effects: ["Used to purchase items from Sporeggar vendors."] } },
            { req: "Friendly", item: { name: "Recipe: Clam Bar", quality: "common", type: "Cooking", effects: ["Teaches you how to cook Clam Bars (Heals 1300 HP/Mana)."] } },
            // Honored
            { req: "Honored", item: { name: "Muck-Covered Drape", quality: "rare", ilvl: 105, slot: "Back", type: "Cloth", stats: ["+15 Stamina", "+10 Nature Resistance"], effects: ["Equip: Reduces Nature damage taken by 1%."] } },
            { req: "Honored", item: { name: "Petrified Lichen Guard", quality: "rare", ilvl: 115, slot: "Shield", type: "Off-Hand", stats: ["+2400 Armor", "+18 Stamina"], effects: ["Equip: Increases shield block rating by 15.", "Use: Releases jagged spores, dealing 150 Nature damage to attackers."] } },
            { req: "Honored", item: { name: "Sporeling's Cloak", quality: "rare", ilvl: 105, slot: "Back", type: "Cloth", stats: ["+12 Stamina", "+10 Intellect"], effects: ["Equip: Increases your spell penetration by 10."] } },
            { req: "Honored", item: { name: "Recipe: Transmute Primal Earth to Primal Life", quality: "rare", type: "Alchemy", effects: ["Allows Alchemists to transmute Earth elements into Life elements."] } },
            { req: "Honored", item: { name: "Pattern: Mycah's Botanical Bag", quality: "rare", type: "Tailoring", effects: ["Teaches you how to sew a 28-slot Herb bag."] } },
            // Revered
            { req: "Revered", item: { name: "Hardened Mushroom Shield", quality: "rare", ilvl: 115, slot: "Shield", type: "Shield", stats: ["+3500 Armor", "+120 Block Value"], effects: ["Equip: Chance when hit to release a cloud of poison dealing 30 Nature damage per second."] } },
            { req: "Revered", item: { name: "Sporeggar Tabard", quality: "rare", type: "Tabard", effects: ["Show your allegiance to the mushroom people."] } },
            { req: "Revered", item: { name: "Recipe: Shrouding Potion", quality: "rare", type: "Alchemy", effects: ["Creates a potion that reduces threat against nearby enemies."] } },
            { req: "Revered", item: { name: "Staff of the Fungal Lord", quality: "rare", ilvl: 115, type: "Two-Hand", slot: "Staff", speed: 2.90, damage: "125 - 210", dps: 57.7, stats: ["+35 Stamina", "+20 Spirit"], effects: ["Equip: Increases damage done by Nature spells and effects by up to 55."] } },
            { req: "Revered", item: { name: "Ring of the Marsh", quality: "rare", ilvl: 115, slot: "Finger", type: "Ring", stats: ["+20 Stamina", "+15 Nature Resistance"], effects: ["Equip: Restores 3 mana per 5 sec."] } },
            // Exalted
            { req: "Exalted", item: { name: "Tiny Sporebat", quality: "epic", type: "Pet", effects: ["Use: Right Click to summon and dismiss your tiny sporebat.", "Flavor: 'It glows in the dark!'"] } },
            { req: "Exalted", item: { name: "Recipe: Major Nature Protection Potion", quality: "epic", type: "Alchemy", effects: ["Teaches you how to brew potions that absorb 2800 to 4000 Nature damage."] } },
            { req: "Exalted", item: { name: "Fungal Heart", quality: "epic", ilvl: 125, slot: "Trinket", type: "Misc", effects: ["Use: Summon a Fungal Giant to fight for you for 1 min. (10 Min Cooldown)"] } },
            { req: "Exalted", item: { name: "Truffle Hunter", quality: "epic", type: "Title", effects: ["Grants the title 'Truffle Hunter %s'."] } },
        ]
    },
    maghar: {
        id: 'maghar',
        name: 'Kurenai & The Mag\'har',
        icon: "https://i.imgur.com/G5g2mJc.jpeg",
        color: 'text-orange-900',
        location: "Nagrand",
        hubs: ["Telaar (Alliance)", "Garadar (Horde)"],
        desc: "The Kurenai ('Redeemed') are Broken Draenei seeking a new destiny. The Mag'har ('Uncorrupted') are brown-skinned orcs who escaped the demon blood. Both seek to reclaim their ancestral home of Nagrand.",
        lore: "In the rolling plains of Nagrand, these two factions face similar threats: the ogres, the void, and the Burning Legion. They offer unique rewards, most notably the famous riding Talbuks.",
        repGuide: "Reputation is gained by killing Ogres and other mobs in Nagrand, and by turning in **Obsidian Warbeads**. There are also many quests in Telaar and Garadar.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Recipe: Roasted Clefthoof", quality: "common", type: "Cooking", effects: ["Teaches you how to cook Roasted Clefthoof (+20 Strength)."] } },
            { req: "Friendly", item: { name: "Pattern: Netherfury Belt", quality: "uncommon", type: "Leatherworking", effects: ["Craft Netherfury Belt (Mail Agi/Int)."] } },
            { req: "Friendly", item: { name: "Pattern: Reinforced Mining Bag", quality: "uncommon", type: "Leatherworking", effects: ["Craft a 28-slot Mining Bag."] } },
            { req: "Friendly", item: { name: "Design: Dawnstone Crab", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts Dawnstone Crab (+Defense)."] } },
            // Honored
            { req: "Honored", item: { name: "Band of Ancestral Spirits", quality: "rare", ilvl: 115, slot: "Ring", type: "Ring", stats: ["+18 Intellect", "+12 Spirit"], effects: ["Equip: Increases healing done by spells and effects by up to 46."] } },
            { req: "Honored", item: { name: "Pattern: Netherfury Leggings", quality: "rare", type: "Leatherworking", effects: ["Craft Netherfury Leggings (Mail Agi/Int)."] } },
            { req: "Honored", item: { name: "Pattern: Drums of Restoration", quality: "rare", type: "Leatherworking", effects: ["Teaches Drums of Restoration (Mana/Health regen)."] } },
            { req: "Honored", item: { name: "Recipe: Elixir of Major Agility", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Elixir of Major Agility (+35 Agility)."] } },
            // Revered
            { req: "Revered", item: { name: "Blackened Spear", quality: "rare", ilvl: 115, type: "Polearm", slot: "Two-Hand", speed: 3.40, damage: "285 - 430", dps: 105.1, stats: ["+35 Agility", "+30 Stamina"], effects: ["Equip: Increases attack power by 50."] } },
            { req: "Revered", item: { name: "Kurenai Kilt", quality: "rare", ilvl: 115, slot: "Legs", type: "Leather", stats: ["+30 Stamina", "+25 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 35."] } },
            { req: "Revered", item: { name: "Talbuk Hide Spaulders", quality: "rare", ilvl: 115, slot: "Shoulder", type: "Leather", stats: ["+25 Agility", "+20 Stamina"], effects: ["Equip: Increases attack power by 40."] } },
            { req: "Revered", item: { name: "Pattern: Nethercobra Legarmor", quality: "epic", type: "Leatherworking", effects: ["Teaches you how to craft Nethercobra Legarmor (+50 AP & +12 Crit)."] } },
            // Exalted
            { req: "Exalted", item: { name: "Reins of the White War Talbuk", quality: "epic", type: "Mount", effects: ["Summons a White War Talbuk. 100% Ground Speed."] } },
            { req: "Exalted", item: { name: "Reins of the Cobalt War Talbuk", quality: "epic", type: "Mount", effects: ["Summons a Cobalt War Talbuk. 100% Ground Speed."] } },
            { req: "Exalted", item: { name: "Reins of the Silver War Talbuk", quality: "epic", type: "Mount", effects: ["Summons a Silver War Talbuk. 100% Ground Speed."] } },
            { req: "Exalted", item: { name: "Reins of the Tan War Talbuk", quality: "epic", type: "Mount", effects: ["Summons a Tan War Talbuk. 100% Ground Speed."] } },
            { req: "Exalted", item: { name: "Tabard of the Mag'har / Kurenai", quality: "epic", type: "Tabard", effects: ["Wear the colors of the people of Nagrand."] } },
        ]
    },

    // --- TEROKKAR / SHATTRATH ---
    lower: {
        id: 'lower',
        name: 'Lower City',
        icon: "https://i.imgur.com/uh7sUKY.jpeg",
        color: 'text-stone-400',
        location: "Shattrath City",
        hubs: ["Lower City (Shattrath)", "Auchindoun"],
        desc: "The refugees of Shattrath. Broken, Arakkoa, and other displaced races huddle in the Lower City, surviving day to day. They possess street-smarts and keys to the city's underbelly.",
        lore: "While the Sha'tar rule the heights, the Lower City is the heart of Shattrath. It is a melting pot of victims from the wars across Outland. They value survival above all else. Their reputation is tied to **Auchindoun**, the spirit-mausoleum of the Draenei now infested with ethereal, demons, and cultists.",
        repGuide: "Reputation is gained by running **Auchenai Crypts**, **Sethekk Halls**, and **Shadow Labyrinth**. You can also turn in **Arakkoa Feathers** found on mobs in Terokkar Forest (until Honored). Shadow Labyrinth is the primary source for end-game reputation.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Pattern: Cloak of Arcane Evasion", quality: "common", type: "Tailoring", effects: ["Teaches you how to sew a cloak with Arcane Resistance and Dodge."] } },
            { req: "Friendly", item: { name: "Formula: Enchant Ring - Striking", quality: "common", type: "Enchanting", effects: ["Permanently enchant a ring to increase weapon damage by 2. (Enchanter Only)."] } },
            { req: "Friendly", item: { name: "Design: Solid Star of Elune", quality: "common", type: "Jewelcrafting", effects: ["Cuts a Solid Star of Elune (+12 Stamina)."] } },
            { req: "Friendly", item: { name: "Idol of the Avenger", quality: "uncommon", type: "Idol", slot: "Relic", effects: ["Equip: Increases the damage dealt by your Mangle ability by 15."] } },
            // Honored
            { req: "Honored", item: { name: "Auchenai Key", quality: "rare", ilvl: 1, type: "Key", slot: "Key", effects: ["Unlocks Heroic difficulty for Auchindoun dungeons.", "Required for: Sethekk Halls, Shadow Labs, Mana Tombs, Crypts."] } },
            { req: "Honored", item: { name: "Ring of the Shadow Deeps", quality: "rare", ilvl: 109, slot: "Finger", type: "Ring", stats: ["+18 Shadow Resistance", "+20 Stamina"], effects: ["Equip: Increases damage done by Shadow spells and effects by up to 22."] } },
            { req: "Honored", item: { name: "Pattern: Dodge Kit", quality: "rare", type: "Leatherworking", effects: ["Permanently attach a dodge kit to boots to increase dodge rating by 12."] } },
            { req: "Honored", item: { name: "Recipe: Elixir of Major Shadow Power", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Elixir of Major Shadow Power (+55 Shadow Dmg)."] } },
            { req: "Honored", item: { name: "Design: Falling Star", quality: "rare", type: "Jewelcrafting", effects: ["Cuts the Falling Star (+18 Stamina)."] } },
            // Revered
            { req: "Revered", item: { name: "Ring of the Exarchs", quality: "rare", ilvl: 120, slot: "Finger", type: "Ring", stats: ["+18 Intellect", "+15 Stamina", "+12 Spirit"], effects: ["Equip: Increases healing done by spells and effects by up to 44."] } },
            { req: "Revered", item: { name: "Lower City Prayerbook", quality: "rare", ilvl: 115, slot: "Trinket", type: "Misc", effects: ["Use: Reduces the mana cost of your next spell by 450. (1 Min CD)"] } },
            { req: "Revered", item: { name: "Leggings of the Skettis Exile", quality: "rare", ilvl: 115, slot: "Legs", type: "Mail", stats: ["+30 Stamina", "+20 Agility", "+25 Intellect"], effects: ["Equip: Increases attack power by 60."] } },
            { req: "Revered", item: { name: "Formula: Enchant Ring - Stats", quality: "rare", type: "Enchanting", effects: ["Permanently enchant ring to increase all stats by 4. (Enchanter Only)."] } },
            { req: "Revered", item: { name: "Recipe: Flask of the Titans", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Flask of the Titans (+400 Health)."] } },
            // Exalted
            { req: "Exalted", item: { name: "Gavel of the Lower City", quality: "epic", ilvl: 135, type: "One-Hand", slot: "Mace", speed: 1.80, damage: "85 - 165", dps: 69.4, stats: ["+25 Stamina", "+15 Intellect"], effects: ["Equip: Increases healing done by spells and effects by up to 220.", "Chance on Cast: Call upon the refugees' prayers, restoring 100 mana."] } },
            { req: "Exalted", item: { name: "Trident of the Outcast", quality: "epic", ilvl: 135, type: "Two-Hand", slot: "Polearm", speed: 3.40, damage: "320 - 490", dps: 119.1, stats: ["+45 Agility", "+40 Stamina", "+25 Hit Rating"], effects: ["Equip: Increases attack power by 90."] } },
            { req: "Exalted", item: { name: "Tabard of the Lower City", quality: "epic", type: "Tabard", effects: ["Equip: Displays the symbol of the broken and the lost."] } },
            { req: "Exalted", item: { name: "Shape of the Peaceful Spirit", quality: "epic", ilvl: 135, slot: "Ring", type: "Ring", stats: ["+28 Stamina", "+20 Spirit"], effects: ["Equip: Increases healing done by spells and effects by up to 66."] } },
        ]
    },
    shatar: {
        id: 'shatar',
        name: 'The Sha\'tar',
        icon: "https://i.imgur.com/h1Ovjrw.jpeg",
        color: 'text-cyan-300',
        location: "Shattrath City",
        hubs: ["Terrace of Light (Shattrath)", "Tempest Keep"],
        desc: "The Naaru who rule Shattrath. Led by A'dal, they are beings of pure light who coordinate the war against the Burning Legion and Illidan Stormrage.",
        lore: "The Sha'tar (Born of Light) arrived in Outland to stop the Legion. They retook Shattrath and established it as a sanctuary for all races, Horde and Alliance alike. They are the supreme authority in the city and work closely with the Aldor and Scryers to reclaim the world.",
        repGuide: "Gaining favor with the Sha'tar requires proving your worth in **Tempest Keep**. Running **The Botanica**, **The Mechanar**, and **The Arcatraz** yields reputation. You can also gain reputation by handing in **Scryer Sunfury Signets** or **Aldor Mark of Sargeras** (indirectly, via quest turn-ins).",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Design: Insightful Earthstorm Diamond", quality: "rare", type: "Jewelcrafting", effects: ["Teaches you how to cut an Insightful Earthstorm Diamond (+12 Int & Chance to restore mana)."] } },
            { req: "Friendly", item: { name: "Sha'tari Anchorite's Cloak", quality: "uncommon", ilvl: 100, slot: "Back", type: "Cloth", stats: ["+15 Intellect", "+10 Stamina"], effects: ["Equip: Increases healing done by spells and effects by up to 26."] } },
            { req: "Friendly", item: { name: "Formula: Enchant Gloves - Major Healing", quality: "rare", type: "Enchanting", effects: ["Permanently enchant gloves to increase healing done by spells and effects by 35."] } },
            { req: "Friendly", item: { name: "Recipe: Transmute Primal Air to Fire", quality: "uncommon", type: "Alchemy", effects: ["Transmute Air to Fire."] } },
            // Honored
            { req: "Honored", item: { name: "Warpforged Key", quality: "rare", ilvl: 1, type: "Key", slot: "Key", effects: ["Unlocks Heroic difficulty for Tempest Keep dungeons.", "Required for: Botanica, Mechanar, Arcatraz."] } },
            { req: "Honored", item: { name: "Crest of the Sha'tar", quality: "rare", ilvl: 115, slot: "Shield", type: "Off-Hand", stats: ["+3000 Armor", "+25 Stamina", "+15 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 20.", "Essential Paladin Tank starter shield."] } },
            { req: "Honored", item: { name: "Design: Kailee's Rose", quality: "rare", type: "Jewelcrafting", effects: ["Cuts Kailee's Rose (+26 Healing)."] } },
            { req: "Honored", item: { name: "Formula: Enchant Weapon - Major Healing", quality: "rare", type: "Enchanting", effects: ["Permanently enchant weapon to increase healing done by spells and effects by 81."] } },
            { req: "Honored", item: { name: "Headress of the Tides", quality: "rare", ilvl: 115, slot: "Head", type: "Mail", stats: ["+25 Intellect", "+25 Stamina", "+15 MP5"], effects: ["Equip: Increases healing done by spells and effects by up to 55."] } },
            // Revered
            { req: "Revered", item: { name: "Xi'ri's Gift", quality: "rare", ilvl: 115, slot: "Trinket", type: "Misc", effects: ["Use: Increases damage and healing done by magical spells and effects by up to 150 and healing done by spells and effects by up to 280 for 15 sec. (1.5 Min CD)"] } },
            { req: "Revered", item: { name: "Gavel of Pure Light", quality: "rare", ilvl: 115, type: "One-Hand", slot: "Mace", speed: 2.20, damage: "110 - 210", dps: 72.7, stats: ["+18 Stamina", "+15 Intellect"], effects: ["Equip: Increases healing done by spells and effects by up to 90."] } },
            { req: "Revered", item: { name: "Ring of the Light", quality: "rare", ilvl: 115, slot: "Finger", type: "Ring", stats: ["+20 Stamina", "+15 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 29."] } },
            { req: "Revered", item: { name: "Recipe: Alchemist's Stone", quality: "rare", type: "Alchemy", effects: ["Craft the Alchemist's Stone (Trinket)."] } },
            { req: "Revered", item: { name: "Pattern: Drums of Battle", quality: "rare", type: "Leatherworking", effects: ["Teaches Drums of Battle (Haste buff for party)."] } },
            // Exalted
            { req: "Exalted", item: { name: "A'dal's Command", quality: "epic", ilvl: 115, slot: "Trinket", type: "Misc", effects: ["Use: Increases damage and healing done by magical spells and effects by up to 200 for 20 sec.", "Equip: Restores 12 mana per 5 sec."] } },
            { req: "Exalted", item: { name: "Shattrath Champion's Shield", quality: "epic", ilvl: 115, slot: "Shield", type: "Shield", stats: ["+5200 Armor", "+45 Stamina"], effects: ["Equip: Increases your shield block rating by 30.", "Equip: Increases the block value of your shield by 45."] } },
            { req: "Exalted", item: { name: "Sha'tari Tabard", quality: "epic", type: "Tabard", effects: ["Wear the crest of the Naaru."] } },
            { req: "Exalted", item: { name: "Runed Spell-Cuffs", quality: "epic", ilvl: 115, slot: "Wrist", type: "Cloth", stats: ["+24 Stamina", "+24 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 35."] } },
        ]
    },
    aldor: {
        id: 'aldor',
        name: 'The Aldor',
        icon: "https://i.imgur.com/qycghSf.jpeg",
        color: 'text-indigo-400',
        location: "Shattrath City",
        hubs: ["Aldor Rise (Shattrath)", "Shadowmoon Valley"],
        desc: "An ancient order of Draenei priests who worship the Naaru. Rivalry with the Scryers is fierce, but their devotion to the light is unquestionable. They offer powerful shoulder enchantments focused on defense and healing.",
        lore: "The Aldor are the priesthood of the Draenei, survivors of the genocide by the Orcs. They initially hesitated to allow the Blood Elves (Scryers) into Shattrath, leading to a bitter cold war within the city. Choosing the Aldor allows access to their rise, but makes you an enemy of the Scryers.",
        repGuide: "Turn in **Marks of Kil'jaeden** (from low level demons) and **Marks of Sargeras** (from high level demons) to gain reputation. They also accept **Fel Armaments** for large rep boosts. Aldor is typically preferred by Healers and Tanks for their shoulder enchants.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Design: Gleaming Golden Draenite", quality: "uncommon", type: "Jewelcrafting", effects: ["Teaches you how to cut Gleaming Golden Draenite (+Spell Crit)."] } },
            { req: "Friendly", item: { name: "Inscription of Faith", quality: "uncommon", type: "Shoulder Enchant", effects: ["Permanently adds 29 healing to shoulder armor."] } },
            { req: "Friendly", item: { name: "Design: Royal Shadow Draenite", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts Royal Shadow Draenite (+MP5 / +Str?)."] } },
            { req: "Friendly", item: { name: "Pattern: Flame Heart Bracers", quality: "rare", type: "Tailoring", effects: ["Craft Flame Heart Bracers (Fire Res)."] } },
            // Honored
            { req: "Honored", item: { name: "Inscription of the Warding", quality: "rare", type: "Shoulder Enchant", effects: ["Permanently adds 13 dodge rating and 10 defense rating to shoulder armor."] } },
            { req: "Honored", item: { name: "Anchorite's Robes", quality: "rare", ilvl: 105, slot: "Chest", type: "Cloth", stats: ["+25 Stamina", "+25 Intellect", "+20 Spirit"], effects: ["Equip: Increases healing done by spells and effects by up to 60."] } },
            { req: "Honored", item: { name: "Lightwarden's Band", quality: "rare", ilvl: 105, slot: "Ring", type: "Ring", stats: ["+18 Stamina", "+15 Intellect"], effects: ["Equip: Increases healing done by spells and effects by up to 40."] } },
            { req: "Honored", item: { name: "Design: Pendant of Shadow's End", quality: "rare", type: "Jewelcrafting", effects: ["Craft Pendant of Shadow's End (Shadow Res)."] } },
            { req: "Honored", item: { name: "Inscribed Holy Staff", quality: "rare", ilvl: 105, type: "Two-Hand", slot: "Staff", speed: 3.00, damage: "130 - 230", dps: 60.0, stats: ["+30 Stamina", "+30 Intellect"], effects: ["Equip: Increases healing done by spells and effects by up to 100."] } },
            // Revered
            { req: "Revered", item: { name: "Vindicator's Hauberk", quality: "rare", ilvl: 115, slot: "Chest", type: "Mail", stats: ["+30 Stamina", "+25 Intellect", "+15 MP5"], effects: ["Equip: Increases healing done by spells and effects by up to 50."] } },
            { req: "Revered", item: { name: "Auchenai Staff", quality: "rare", ilvl: 115, type: "Two-Hand", slot: "Staff", speed: 3.40, damage: "145 - 260", dps: 59.5, stats: ["+35 Stamina", "+35 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 45."] } },
            { req: "Revered", item: { name: "Ring of the Vindicator", quality: "rare", ilvl: 115, slot: "Ring", type: "Ring", stats: ["+22 Stamina", "+18 Defense Rating"], effects: ["Equip: Increases the block value of your shield by 20."] } },
            { req: "Revered", item: { name: "Pattern: Silver Spellthread", quality: "rare", type: "Tailoring", effects: ["Teaches Silver Spellthread (+Healing/Stam leg enchant)."] } },
            { req: "Revered", item: { name: "Pattern: Vindicator's Armor Kit", quality: "rare", type: "Leatherworking", effects: ["Craft Vindicator's Armor Kit (+Defense to chest/legs/hands/feet)."] } },
            // Exalted
            { req: "Exalted", item: { name: "Golden Spellthread", quality: "epic", type: "Leg Enchant", effects: ["Permanently embroiders pants to increase healing done by spells and effects by up to 66 and Stamina by 20.", "Essential for Healers."] } },
            { req: "Exalted", item: { name: "Greater Inscription of Faith", quality: "epic", type: "Shoulder Enchant", effects: ["Adds 33 healing and 4 mana per 5 sec to shoulder armor."] } },
            { req: "Exalted", item: { name: "Greater Inscription of Warding", quality: "epic", type: "Shoulder Enchant", effects: ["Adds 15 dodge rating and 10 defense rating to shoulder armor."] } },
            { req: "Exalted", item: { name: "Vindicator's Brand", quality: "epic", ilvl: 115, type: "One-Hand", slot: "Sword", speed: 2.50, damage: "160 - 300", dps: 92.0, stats: ["+25 Stamina", "+15 Strength"], effects: ["Equip: Increases attack power by 40.", "Use: Increases attack speed by 20% for 15 sec."] } },
        ]
    },
    scryers: {
        id: 'scryers',
        name: 'The Scryers',
        icon: "https://i.imgur.com/Q2MrJdS.jpeg",
        color: 'text-red-400',
        location: "Shattrath City",
        hubs: ["Scryer's Tier (Shattrath)", "Shadowmoon Valley"],
        desc: "Blood Elves who defected from Kael'thas Sunstrider's army to serve the Naaru. They are masters of magic and lore, offering powerful shoulder enchantments focused on damage and critical strike.",
        lore: "Led by Voren'thal the Seer, these elves saw the madness in Kael'thas's alliance with the Legion and defected. They brought immense magical knowledge to Shattrath. Choosing the Scryers grants access to their tier and libraries, but makes you hated by the Aldor.",
        repGuide: "Turn in **Firewing Signets** (low level) and **Sunfury Signets** (high level) dropped by Blood Elves across Outland. They also accept **Arcane Tomes** for large reputation gains. Scryers are typically preferred by Caster DPS for their shoulder enchants and spell hit trinket.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Design: Runed Blood Garnet", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts Runed Blood Garnet (+Spell Dmg)."] } },
            { req: "Friendly", item: { name: "Inscription of the Orb", quality: "uncommon", type: "Shoulder Enchant", effects: ["Permanently adds 15 spell critical strike rating to shoulder armor."] } },
            { req: "Friendly", item: { name: "Recipe: Elixir of Firepower", quality: "uncommon", type: "Alchemy", effects: ["Teaches you how to brew Elixir of Firepower (+Fire Dmg)."] } },
            { req: "Friendly", item: { name: "Plans: Enchanted Adamantite Belt", quality: "rare", type: "Blacksmithing", effects: ["Craft Enchanted Adamantite Belt (Plate DPS)."] } },
            // Honored
            { req: "Honored", item: { name: "Inscription of the Oracle", quality: "rare", type: "Shoulder Enchant", effects: ["Permanently adds 22 spell damage and 14 spell critical strike rating to shoulder armor."] } },
            { req: "Honored", item: { name: "Scryer's Bloodgem", quality: "rare", ilvl: 105, slot: "Trinket", type: "Misc", effects: ["Use: Increases damage and healing done by magical spells and effects by up to 150 for 15 sec."] } },
            { req: "Honored", item: { name: "Gauntlets of the Sun King", quality: "rare", ilvl: 105, slot: "Hands", type: "Plate", stats: ["+25 Strength", "+20 Stamina"], effects: ["Equip: Improves critical strike rating by 15."] } },
            { req: "Honored", item: { name: "Recipe: Flask of Pure Death", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Flask of Pure Death (+80 Shadow Dmg)."] } },
            { req: "Honored", item: { name: "Design: Dazzling Deep Peridot", quality: "rare", type: "Jewelcrafting", effects: ["Cuts Dazzling Deep Peridot (+Int/+MP5)."] } },
            // Revered
            { req: "Revered", item: { name: "Seer's Signet", quality: "rare", ilvl: 115, slot: "Ring", type: "Ring", stats: ["+18 Stamina", "+20 Intellect"], effects: ["Equip: Improves spell critical strike rating by 18."] } },
            { req: "Revered", item: { name: "Scryer's Blade of Focus", quality: "rare", ilvl: 115, type: "One-Hand", slot: "Dagger", speed: 1.80, damage: "85 - 145", dps: 63.8, stats: ["+18 Stamina", "+15 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 55."] } },
            { req: "Revered", item: { name: "Pattern: Mystic Spellthread", quality: "rare", type: "Tailoring", effects: ["Teaches Mystic Spellthread (+Spell Dmg/Stam leg enchant)."] } },
            { req: "Revered", item: { name: "Leggings of the Scryers", quality: "rare", ilvl: 115, slot: "Legs", type: "Leather", stats: ["+30 Agility", "+25 Stamina"], effects: ["Equip: Increases attack power by 66."] } },
            { req: "Revered", item: { name: "Retainer's Blade", quality: "rare", ilvl: 115, type: "One-Hand", slot: "Sword", speed: 1.50, damage: "75 - 145", dps: 73.3, stats: ["+20 Agility", "+15 Stamina"], effects: ["Equip: Improves hit rating by 15."] } },
            // Exalted
            { req: "Exalted", item: { name: "Mystic Spellthread", quality: "epic", type: "Leg Enchant", effects: ["Permanently embroiders pants to increase damage and healing done by magical spells and effects by up to 35 and Stamina by 20.", "Essential for Casters."] } },
            { req: "Exalted", item: { name: "Greater Inscription of the Orb", quality: "epic", type: "Shoulder Enchant", effects: ["Adds 15 spell critical strike rating and 12 spell damage and healing to shoulder armor."] } },
            { req: "Exalted", item: { name: "Greater Inscription of the Oracle", quality: "epic", type: "Shoulder Enchant", effects: ["Adds 22 spell damage and healing and 14 spell critical strike rating to shoulder armor."] } },
            { req: "Exalted", item: { name: "Scryer's Tabard", quality: "epic", type: "Tabard", effects: ["Wear the crest of the Blood Elves."] } },
        ]
    },

    // --- OTHER REGIONS ---
    consortium: {
        id: 'consortium',
        name: 'The Consortium',
        icon: "https://i.imgur.com/7q2YluU.jpeg",
        color: 'text-purple-300',
        location: "Nagrand / Netherstorm",
        hubs: ["Aeris Landing (Nagrand)", "Stormspire (Netherstorm)"],
        desc: "Ethereal smugglers, traders, and thieves led by Nexus-Prince Haramad. They are interested in local artifacts and exotic goods, and will sell anything for the right price.",
        lore: "The Consortium considers Outland a business opportunity. They are rivals with the Ethereals of the mana tombs who have gone mad with void energy. They run the eco-domes in Netherstorm and facilitate trade across the shattered world. They love gems, beads, and ancient technology.",
        repGuide: "Gain reputation by running **Mana Tombs** and completing quests in Nagrand and Netherstorm. You can also turn in **Obsidian Warbeads** dropped by Ogres (if you are a Mag'har/Kurenai friend) or **Zaxxis Insignias**.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Design: Shifting Shadow Draenite", quality: "uncommon", type: "Jewelcrafting", effects: ["Teaches you how to cut Shifting Shadow Draenite (Agility/Stam)."] } },
            { req: "Friendly", item: { name: "Pattern: Bag of Jewels", quality: "rare", type: "Tailoring", effects: ["Teaches you how to sew a 24-slot Gem Bag."] } },
            { req: "Friendly", item: { name: "Design: Bracing Earthstorm Diamond", quality: "rare", type: "Jewelcrafting", effects: ["Cuts Bracing Earthstorm Diamond (+Healing/Threat Reduc)."] } },
            // Honored
            { req: "Honored", item: { name: "Formula: Enchant Weapon - Major Striking", quality: "rare", type: "Enchanting", effects: ["Permanently enchant a weapon to increase weapon damage by 7."] } },
            { req: "Honored", item: { name: "Gift of the Ethereal", quality: "rare", ilvl: 110, slot: "Trinket", type: "Misc", effects: ["Use: Reduces threat by 40% for 10 sec.", "Equip: Improves hit rating by 20."] } },
            { req: "Honored", item: { name: "Netherscale Ammo Pouch", quality: "rare", type: "Leatherworking", effects: ["Craft an 18-slot Ammo Pouch."] } },
            { req: "Honored", item: { name: "Design: Delicate Blood Garnet", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts Delicate Blood Garnet (+Agility)."] } },
            // Revered
            { req: "Revered", item: { name: "Design: Relentless Earthstorm Diamond", quality: "rare", type: "Jewelcrafting", effects: ["Teaches you how to cut a Relentless Earthstorm Diamond (+12 Agility & +3% Crit Damage)."] } },
            { req: "Revered", item: { name: "Stormspire Vest", quality: "rare", ilvl: 115, slot: "Chest", type: "Leather", stats: ["+30 Agility", "+20 Stamina", "+20 Hit Rating"], effects: ["Equip: Increases attack power by 66."] } },
            { req: "Revered", item: { name: "Consortium Blaster", quality: "rare", ilvl: 115, type: "Ranged", slot: "Gun", speed: 2.70, damage: "140 - 260", dps: 74.0, stats: ["+18 Agility"], effects: ["Equip: Improves critical strike rating by 14."] } },
            { req: "Revered", item: { name: "Design: Pendant of the Null Rune", quality: "rare", type: "Jewelcrafting", effects: ["Craft Pendant of the Null Rune (Arcane Res)."] } },
            // Exalted
            { req: "Exalted", item: { name: "Guile of Khoraazi", quality: "epic", ilvl: 115, slot: "Trinket", type: "Misc", effects: ["Equip: Improves critical strike rating by 40.", "Equip: Chance on hit to reveal the target's weakness, ignoring 100% of armor for 10 sec.", "BiS for Rogues."] } },
            { req: "Exalted", item: { name: "Consortium Tabard", quality: "epic", type: "Tabard", effects: ["Flaunt your wealth and connections."] } },
            { req: "Exalted", item: { name: "Nexus-Prince's Ring of Greed", quality: "epic", ilvl: 115, slot: "Ring", type: "Ring", stats: ["+25 Agility", "+30 Stamina"], effects: ["Equip: Increases gold dropped by monsters you kill by 15%."] } },
            { req: "Exalted", item: { name: "Smuggler's Ammo Pouch", quality: "epic", type: "Leatherworking", effects: ["Teaches you to craft a 28-slot Ammo Pouch."] } },
        ]
    },
    koT: {
        id: 'koT',
        name: 'Keepers of Time',
        icon: "https://i.imgur.com/bvSCAoE.jpeg",
        color: 'text-yellow-500',
        location: "Caverns of Time",
        hubs: ["Caverns of Time (Tanaris)"],
        desc: "The Bronze Dragonflight, dedicated to preserving the timeline. They have sensed a disturbance in the history of Azeroth and seek mortals to help correct the anomalies.",
        lore: "The Infinite Dragonflight seeks to alter history to prevent the dark future they foresee. The Keepers of Time enable players to travel back to **Old Hillsbrad** (to save Thrall) and the **Black Morass** (to ensure the Dark Portal opens). They are neutral custodians of destiny.",
        repGuide: "Reputation is earned exclusively by running the Caverns of Time dungeons: **Old Hillsbrad Foothills** and **The Black Morass**. Heroic difficulty provides significant reputation gains.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Design: Enigmatic Skyfire Diamond", quality: "rare", type: "Jewelcrafting", effects: ["Teaches you how to cut an Enigmatic Skyfire Diamond (+Crit & +5% Snare Resist)."] } },
            { req: "Friendly", item: { name: "Pattern: Enchant Gloves - Major Spellpower", quality: "rare", type: "Enchanting", effects: ["Permanently enchant gloves to increase damage and healing done by magical spells and effects by 20."] } },
            { req: "Friendly", item: { name: "Recipe: Flask of Supreme Power", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Flask of Supreme Power (+70 Spell Dmg)."] } },
            { req: "Friendly", item: { name: "Timewarden's Leggings", quality: "uncommon", ilvl: 105, slot: "Legs", type: "Plate", stats: ["+25 Stamina", "+20 Strength"], effects: ["Equip: Improves critical strike rating by 14."] } },
            // Honored
            { req: "Honored", item: { name: "Key of Time", quality: "rare", ilvl: 1, type: "Key", slot: "Key", effects: ["Unlocks Heroic difficulty for Caverns of Time dungeons.", "Required for: Old Hillsbrad, Black Morass."] } },
            { req: "Honored", item: { name: "Timewarden's Helm", quality: "rare", ilvl: 110, slot: "Head", type: "Plate", stats: ["+30 Stamina", "+20 Strength", "+20 Defense Rating"], effects: ["Equip: Increases your shield block rating by 15."] } },
            { req: "Honored", item: { name: "Design: Facet of Eternity", quality: "rare", type: "Jewelcrafting", effects: ["Cuts Facet of Eternity (+Defense/+Dodge)."] } },
            { req: "Honored", item: { name: "Formula: Enchant Ring - Spellpower", quality: "rare", type: "Enchanting", effects: ["Permanently enchant a ring to increase damage and healing done by magical spells and effects by 12. (Enchanter Only)."] } },
            { req: "Honored", item: { name: "Recipe: Elixir of Major Mageblood", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Elixir of Major Mageblood (+16 MP5)."] } },
            // Revered
            { req: "Revered", item: { name: "Continuum Blade", quality: "rare", ilvl: 115, type: "One-Hand", slot: "Dagger", speed: 1.80, damage: "100 - 155", dps: 70.8, stats: ["+15 Intellect", "+12 Hit Rating"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 125."] } },
            { req: "Revered", item: { name: "Bindings of the Timeless", quality: "rare", ilvl: 115, slot: "Wrist", type: "Cloth", stats: ["+18 Stamina", "+18 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 22."] } },
            { req: "Revered", item: { name: "Keepers of Time Tabard", quality: "rare", type: "Tabard", effects: ["Represent the bronze dragonflight."] } },
            { req: "Revered", item: { name: "Design: Living Ruby Serpent", quality: "rare", type: "Jewelcrafting", effects: ["Teaches you to cut a Living Ruby Serpent trinket (+Int/Use: Spell Dmg)."] } },
            { req: "Revered", item: { name: "Pattern: Drums of Panic", quality: "rare", type: "Leatherworking", effects: ["Teaches Drums of Panic (Fear nearby enemies)."] } },
            // Exalted
            { req: "Exalted", item: { name: "Riftmaker", quality: "epic", ilvl: 115, type: "Two-Hand", slot: "Staff", speed: 3.40, damage: "150 - 285", dps: 64.0, stats: ["+55 Stamina", "+60 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 250.", "Use: Open a portal in time, resetting the cooldown of your last spell cast (10 min CD)."] } },
            { req: "Exalted", item: { name: "Timewarden's Leggings", quality: "epic", ilvl: 115, slot: "Legs", type: "Mail", stats: ["+40 Agility", "+40 Stamina", "+30 Intellect"], effects: ["Equip: Increases attack power by 80."] } },
            { req: "Exalted", item: { name: "Pauldrons of the Time-Lost", quality: "epic", ilvl: 115, slot: "Shoulder", type: "Plate", stats: ["+35 Strength", "+35 Stamina"], effects: ["Equip: Improves critical strike rating by 25."] } },
            { req: "Exalted", item: { name: "Recipe: Flask of Relentless Assault", quality: "epic", type: "Alchemy", effects: ["Teaches you how to brew Flask of Relentless Assault (+120 AP)."] } },
        ]
    },
    violet: {
        id: 'violet',
        name: 'The Violet Eye',
        icon: "https://i.imgur.com/AeJnDZW.jpeg",
        color: 'text-fuchsia-500',
        location: "Karazhan",
        hubs: ["Karazhan Exterior (Deadwind Pass)"],
        desc: "A secret sect of Dalaran mages charged with watching over Medivh and Karazhan. They seek to understand the secrets of the tower and prevent the dark magic within from escaping.",
        lore: "Led by Archmage Alturus, the Violet Eye has realized that Karazhan has sealed itself and is emanating a new, dark power. They recruit adventurers to breach the tower, defeat the ghosts of the past, and confront the demonic presence of Prince Malchezaar at the summit.",
        repGuide: "Reputation is gained almost exclusively by killing trash and bosses inside the **Karazhan** raid instance. A long questline involving the Key to Karazhan also grants reputation.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Design: The Eye of Night", quality: "epic", type: "Jewelcrafting", effects: ["Teaches you how to cut The Eye of Night (+Spell Damage & Detect Stealth)."] } },
            { req: "Friendly", item: { name: "Pattern: Boots of the Crimson Hawk", quality: "epic", type: "Leatherworking", effects: ["Craft Boots of the Crimson Hawk (Agility/Int/AP)."] } },
            { req: "Friendly", item: { name: "Plans: Iceguard Breastplate", quality: "epic", type: "Blacksmithing", effects: ["Craft Iceguard Breastplate (Frost Res Plate)."] } },
            { req: "Friendly", item: { name: "Inscription of Endurance", quality: "uncommon", type: "Shoulder Enchant", effects: ["Permanently adds 7 resistance to all magic schools to shoulder armor."] } },
            // Honored
            { req: "Honored", item: { name: "Violet Signet", quality: "epic", ilvl: 115, slot: "Finger", type: "Ring", effects: ["The starting ring from the Violet Eye path. Upgrades at each tier."] } },
            { req: "Honored", item: { name: "Pattern: Shadowprowler's Chestguard", quality: "epic", type: "Leatherworking", effects: ["Craft Shadowprowler's Chestguard (Leather DPS)."] } },
            { req: "Honored", item: { name: "Plans: Iceguard Leggings", quality: "epic", type: "Blacksmithing", effects: ["Craft Iceguard Leggings (Frost Res Plate)."] } },
            { req: "Honored", item: { name: "Formula: Enchant Weapon - Greater Agility", quality: "rare", type: "Enchanting", effects: ["Permanently enchant a weapon to increase Agility by 20."] } },
            { req: "Honored", item: { name: "Recipe: Major Frost Protection Potion", quality: "rare", type: "Alchemy", effects: ["Absorb 2800 to 4000 Frost Damage."] } },
            // Revered
            { req: "Revered", item: { name: "Violet Signet of the Archmage", quality: "epic", ilvl: 125, slot: "Finger", type: "Ring", stats: ["+25 Intellect", "+18 Stamina"], effects: ["Equip: Improves spell critical strike rating by 20.", "Equip: Increases damage and healing done by magical spells and effects by up to 35.", "This ring upgrades at each reputation tier."] } },
            { req: "Revered", item: { name: "Pendant of the Violet Eye", quality: "epic", ilvl: 125, slot: "Trinket", type: "Misc", effects: ["Equip: Restores 40 mana per 5 sec.", "Use: Increases Intellect by 150 for 20 sec."] } },
            { req: "Revered", item: { name: "Pattern: Battlecast Hood", quality: "epic", type: "Tailoring", effects: ["Craft Battlecast Hood (Spell Hit Cloth)."] } },
            { req: "Revered", item: { name: "Formula: Enchant Weapon - Executioner", quality: "rare", type: "Enchanting", effects: ["Permanently enchant a weapon to occasionally ignore 840 armor when hitting an enemy."] } },
            { req: "Revered", item: { name: "Recipe: Flask of Chromatic Resistance", quality: "rare", type: "Alchemy", effects: ["Increases all resistances by 25."] } },
            // Exalted
            { req: "Exalted", item: { name: "Eternal Sage's Loop", quality: "epic", ilvl: 115, slot: "Finger", type: "Ring", stats: ["+30 Intellect", "+25 Spirit"], effects: ["Use: Restores 500 mana immediately and increases spell casting speed by 20% for 15 sec."] } },
            { req: "Exalted", item: { name: "Violet Signet of the Great Protector", quality: "epic", ilvl: 128, slot: "Ring", type: "Ring", stats: ["+35 Stamina", "+20 Defense Rating"], effects: ["Equip: Increases the block value of your shield by 20.", "The final tank ring upgrade."] } },
            { req: "Exalted", item: { name: "Violet Signet of the Master Assassin", quality: "epic", ilvl: 128, slot: "Ring", type: "Ring", stats: ["+30 Stamina", "+25 Hit Rating"], effects: ["Equip: Increases attack power by 60.", "The final physical DPS ring upgrade."] } },
            { req: "Exalted", item: { name: "Violet Champion's Tabard", quality: "epic", type: "Tabard", effects: ["Wear the symbol of the Watchers of Karazhan."] } },
        ]
    },

    // --- NEW FACTIONS ---
    silverhand: {
        id: 'silverhand',
        name: 'The Silver Hand',
        icon: "https://i.imgur.com/o49wwBy.jpeg",
        color: 'text-pink-400',
        location: "Eastern Plaguelands / Honor Hold",
        hubs: ["Light's Hope Chapel", "Honor Hold"],
        desc: "Reformed under the guidance of A'dal and the surviving paladins of Lordaeron, the Silver Hand seeks to purify the corrupted lands of Outland and redeem those lost to the Legion's influence.",
        lore: "Tirion Fordring has sent envoys to Outland to unite the various Paladin orders. They work closely with the Sha'tar to bring judgment to the wicked and salvation to the damned. Their main goal is the purification of the Plaguelands of the South (Terokkar) and the redemption of the Broken.",
        repGuide: "Gained by killing Undead and Demons in specific zones, and by turning in **Scourgestones** (classic mechanic brought to Outland). They also offer daily quests in the Shadowmoon Valley to cleanse corrupted areas.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Plans: Adamantite Weightstone", quality: "common", type: "Blacksmithing", effects: ["Teaches you how to craft heavy sharpening stones (Blunt Dmg)."] } },
            { req: "Friendly", item: { name: "Design: Brilliant Golden Draenite", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts Brilliant Golden Draenite (+Intellect)."] } },
            { req: "Friendly", item: { name: "Crusader's Cloak", quality: "uncommon", ilvl: 105, slot: "Back", type: "Cloth", stats: ["+15 Strength", "+15 Stamina"], effects: ["Equip: Improves critical strike rating by 10."] } },
            { req: "Friendly", item: { name: "Recipe: Major Holy Protection Potion", quality: "rare", type: "Alchemy", effects: ["Absorbs 2800 to 4000 Holy damage."] } },
            // Honored
            { req: "Honored", item: { name: "Libram of Divine Purpose", quality: "rare", ilvl: 115, slot: "Relic", type: "Libram", effects: ["Equip: Your Judgement abilities now heal the nearest injured party member for 150."] } },
            { req: "Honored", item: { name: "Girdle of the Lightbringer", quality: "rare", ilvl: 115, slot: "Waist", type: "Plate", stats: ["+25 Intellect", "+20 Stamina", "+15 MP5"], effects: ["Equip: Increases healing done by spells and effects by up to 44."] } },
            { req: "Honored", item: { name: "Recipe: Transmute Primal Shadow to Primal Water", quality: "rare", type: "Alchemy", effects: ["Purify Shadow into Water."] } },
            { req: "Honored", item: { name: "Pattern: Gloves of the Redeemer", quality: "rare", type: "Leatherworking", effects: ["Craft Gloves of the Redeemer (Healer Leather)."] } },
            { req: "Honored", item: { name: "Formula: Enchant Shield - Major Stamina", quality: "rare", type: "Enchanting", effects: ["Permanently enchant a shield to increase Stamina by 18."] } },
            // Revered
            { req: "Revered", item: { name: "Tabard of the Lightbringer", quality: "epic", type: "Tabard", effects: ["Use: Illuminates the area around you with holy light."] } },
            { req: "Revered", item: { name: "Argent Warblade", quality: "rare", ilvl: 120, type: "Two-Hand", slot: "Sword", speed: 3.50, damage: "330 - 495", dps: 117.8, stats: ["+45 Strength", "+35 Stamina"], effects: ["Equip: Improves critical strike rating by 30."] } },
            { req: "Revered", item: { name: "Design: Pendant of the Dawn", quality: "rare", type: "Jewelcrafting", effects: ["Craft Pendant of the Dawn (Holy Resistance)."] } },
            { req: "Revered", item: { name: "Sabatons of the Silver Hand", quality: "rare", ilvl: 120, slot: "Feet", type: "Plate", stats: ["+30 Stamina", "+20 Defense Rating"], effects: ["Equip: Increases your shield block rating by 15."] } },
            { req: "Revered", item: { name: "Plans: Breastplate of the Light", quality: "rare", type: "Blacksmithing", effects: ["Craft Breastplate of the Light (Healer Plate)."] } },
            // Exalted
            { req: "Exalted", item: { name: "Charger of the Dawn", quality: "epic", type: "Mount", effects: ["Use: Summons a holy charger clad in white and gold armor. Usable by all Paladins."] } },
            { req: "Exalted", item: { name: "Tirion's Gift", quality: "epic", ilvl: 115, slot: "Trinket", type: "Misc", effects: ["Equip: Increases healing done by spells and effects by up to 88.", "Use: Restores 1500 mana. (2 Min CD)."] } },
            { req: "Exalted", item: { name: "Legacy of the Silver Hand", quality: "epic", ilvl: 115, type: "One-Hand", slot: "Mace", speed: 1.90, damage: "135 - 280", dps: 109.2, stats: ["+25 Stamina", "+20 Intellect"], effects: ["Equip: Increases healing done by spells and effects by up to 400.", "A relic of the First War."] } },
            { req: "Exalted", item: { name: "Recipe: Flask of Supreme Mana", quality: "epic", type: "Alchemy", effects: ["Teaches you how to brew Flask of Supreme Mana (+35 MP5)."] } },
        ]
    },
    cult: {
        id: 'cult',
        name: 'Cult of the Damned',
        icon: "https://i.imgur.com/OA59o7k.jpeg",
        color: 'text-purple-600',
        location: "Shadowmoon Valley",
        hubs: ["Legion Hold (Infiltration)"],
        desc: "Though officially enemies of the Alliance and Horde, a splinter group of the Cult has broken free from the Lich King's control. They offer forbidden knowledge to those willing to pay the price.",
        lore: "Led by a lich who regained his free will, this faction sells necromantic secrets. They are hated by the Argus Wake and the Silver Hand alike. Dealing with them is dangerous, but Warlocks and Shadow Priests find their power... intoxicating.",
        repGuide: "Gained by turning in **Soul Shards** (Yes, the Warlock item) and **Hearts of Darkness** found in Hyjal. You can also gain reputation by hunting members of the Burning Legion, as the Cult views them as rivals for domination.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Recipe: Elixir of Shadow Power", quality: "common", type: "Alchemy", effects: ["Teaches you to craft elixir boosting Shadow Damage."] } },
            { req: "Friendly", item: { name: "Pattern: Shadoweave Mask", quality: "uncommon", type: "Tailoring", effects: ["Teaches you how to sew a Shadoweave Mask (+Shadow Dmg)."] } },
            { req: "Friendly", item: { name: "Design: Void Sphere", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts Void Sphere (+Shadow Res)."] } },
            { req: "Friendly", item: { name: "Skull of the Initiate", quality: "uncommon", ilvl: 100, slot: "Off-Hand", type: "Misc", stats: ["+15 Intellect"], effects: ["Equip: Increases damage done by Shadow spells and effects by up to 20."] } },
            // Honored
            { req: "Honored", item: { name: "Formula: Enchant Weapon - Soulfrost", quality: "rare", type: "Enchanting", effects: ["Permanently enchant a weapon to increase damage done by Shadow and Frost spells and effects by up to 54."] } },
            { req: "Honored", item: { name: "Robes of the Lich", quality: "rare", ilvl: 115, slot: "Chest", type: "Cloth", stats: ["+30 Stamina", "+30 Intellect"], effects: ["Equip: Increases damage done by Shadow spells and effects by up to 50."] } },
            { req: "Honored", item: { name: "Design: Runed Living Ruby", quality: "rare", type: "Jewelcrafting", effects: ["Cuts Runed Living Ruby (+Spell Dmg)."] } },
            { req: "Honored", item: { name: "Recipe: Major Shadow Protection Potion", quality: "rare", type: "Alchemy", effects: ["Absorbs 2800 to 4000 Shadow Damage."] } },
            { req: "Honored", item: { name: "Tome of Shadow", quality: "rare", ilvl: 115, slot: "Off-Hand", type: "Book", stats: ["+18 Stamina", "+18 Intellect"], effects: ["Equip: Increases damage done by Shadow spells and effects by up to 35."] } },
            // Revered
            { req: "Revered", item: { name: "Hood of the Damned", quality: "rare", ilvl: 120, slot: "Head", type: "Cloth", stats: ["+40 Stamina", "+45 Shadow Spell Damage"], effects: ["Equip: Shows your face as a skull."] } },
            { req: "Revered", item: { name: "Scythe of the Unseen", quality: "rare", ilvl: 125, type: "Two-Hand", slot: "Staff", speed: 3.20, damage: "140 - 260", dps: 62.5, stats: ["+45 Stamina", "+40 Intellect"], effects: ["Equip: Increases damage done by Shadow spells and effects by up to 88."] } },
            { req: "Revered", item: { name: "Pattern: Soulcloth Vest", quality: "rare", type: "Tailoring", effects: ["Teaches Soulcloth Vest (Shadow Dmg/Arcane Res)."] } },
            { req: "Revered", item: { name: "Recipe: Flask of Shadow Fortification", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Flask of Shadow Fortification (+Shadow Res & Health)."] } },
            // Exalted
            { req: "Exalted", item: { name: "Grimoire of Sacrifice", quality: "epic", ilvl: 115, slot: "Off-Hand", type: "Book", stats: ["+25 Stamina", "+25 Intellect"], effects: ["Equip: Increases damage done by Shadow spells and effects by up to 55.", "Use: Sacrifices 20% of your total health to increase damage done by magical spells and effects by 30% for 15 sec."] } },
            { req: "Exalted", item: { name: "Phylactery of the Free Will", quality: "epic", ilvl: 115, slot: "Trinket", type: "Misc", effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 60.", "Use: Become immune to fear and charm effects for 10 sec."] } },
            { req: "Exalted", item: { name: "Tabard of the Damned", quality: "epic", type: "Tabard", effects: ["Feared by the living."] } },
            { req: "Exalted", item: { name: "Necromancer's Bone Wand", quality: "epic", ilvl: 115, type: "Ranged", slot: "Wand", speed: 1.60, damage: "220 - 410", dps: 196.9, stats: ["+15 Intellect"], effects: ["Equip: Increases damage done by Shadow spells and effects by up to 30."] } },
        ]
    },
    unshackled: {
        id: 'unshackled',
        name: 'The Unshackled',
        icon: "https://i.imgur.com/oB3QPQF.jpeg",
        color: 'text-blue-400',
        location: "Zangarmarsh (Steamvault Entrance)",
        hubs: ["Serpentshrine Cavern Entrance"],
        desc: "Naga who have rebelled against Lady Vashj and Illidan. Led by High Warlord Naj'entus, they seek to free the waters of Outland from fel corruption using ancient shamanistic rituals.",
        lore: "Not all Naga serve the Betrayer. The Unshackled remember their origins as Highborne and seek redemption. They provide water-breathing buffs and safe passage through the treacherous waters of Zangarmarsh. They are key allies for removing the corruption from the Steamvaults.",
        repGuide: "Gained by killing 'Loyalist' Naga in Zangarmarsh and running **The Steamvaults** on Heroic difficulty. They also accept **Coilfang Armaments** turn-ins.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Potion of Water Breathing", quality: "common", type: "Consumable", effects: ["Use: Allows water breathing for 1 hour. (5 Stack)"] } },
            { req: "Friendly", item: { name: "Design: Jagged Deep Peridot", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts Jagged Deep Peridot (+Crit/Stam)."] } },
            { req: "Friendly", item: { name: "Tidecaller's Sash", quality: "uncommon", ilvl: 100, slot: "Waist", type: "Cloth", stats: ["+15 Intellect", "+10 Spirit"], effects: ["Equip: Increases healing done by spells and effects by up to 22."] } },
            { req: "Friendly", item: { name: "Recipe: Elixir of Major Water Breathing", quality: "common", type: "Alchemy", effects: ["Teaches you how to brew Elixir of Major Water Breathing."] } },
            // Honored
            { req: "Honored", item: { name: "Trident of the Tides", quality: "rare", ilvl: 115, type: "Polearm", slot: "Two-Hand", speed: 3.40, damage: "145 - 265", dps: 60.3, stats: ["+35 Agility", "+30 Stamina"], effects: ["Equip: Chance on hit to blast target with water for 150 damage."] } },
            { req: "Honored", item: { name: "Pattern: Net of the Deep", quality: "rare", type: "Tailoring", effects: ["Teaches you how to weave a net to root targets."] } },
            { req: "Honored", item: { name: "Ring of the Crashing Wave", quality: "rare", ilvl: 115, slot: "Ring", type: "Ring", stats: ["+18 Stamina", "+15 Intellect"], effects: ["Equip: Restores 6 mana per 5 sec."] } },
            { req: "Honored", item: { name: "Formula: Enchant Bracer - Fortitude", quality: "rare", type: "Enchanting", effects: ["Permanently enchant bracers to increase Stamina by 12."] } },
            { req: "Honored", item: { name: "Recipe: Potion of Fishing", quality: "uncommon", type: "Alchemy", effects: ["Teaches you to brew Potion of Fishing (+50 Fishing Skill)."] } },
            // Revered
            { req: "Revered", item: { name: "Design: Ocean's Heart", quality: "epic", type: "Jewelcrafting", effects: ["Teaches you how to cut an Ocean's Heart (+20 Stamina & +20 Res)."] } },
            { req: "Revered", item: { name: "Hydra-Skin Cuirass", quality: "rare", ilvl: 120, slot: "Chest", type: "Leather", stats: ["+35 Stamina", "+25 Agility", "+20 Hit Rating"], effects: ["Equip: Increases attack power by 60."] } },
            { req: "Revered", item: { name: "Tidal Loop", quality: "rare", ilvl: 120, slot: "Ring", type: "Ring", stats: ["+18 Intellect", "+15 Spirit"], effects: ["Equip: Increases healing done by spells and effects by up to 50."] } },
            { req: "Revered", item: { name: "Idol of the Emerald Queen", quality: "rare", item: "Relic", slot: "Idol", effects: ["Equip: Increases the healing of your Lifebloom ability by up to 30."] } },
            { req: "Revered", item: { name: "Totem of the Maelstrom", quality: "rare", item: "Relic", slot: "Totem", effects: ["Equip: Increases the damage of your Lightning Bolt spell by up to 25."] } },
            // Exalted
            { req: "Exalted", item: { name: "Scale of the Sea Giant", quality: "epic", ilvl: 115, slot: "Trinket", type: "Misc", stats: ["+45 Stamina"], effects: ["Use: Gain a shield that absorbs 2500 damage and reflects 50% of spell damage taken for 10 sec.", "BiS Tank Trinket."] } },
            { req: "Exalted", item: { name: "Sea-Witch's Staff", quality: "epic", ilvl: 115, type: "Two-Hand", slot: "Staff", speed: 2.80, damage: "160 - 310", dps: 83.9, stats: ["+55 Stamina", "+45 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 180."] } },
            { req: "Exalted", item: { name: "Tabard of the Unshackled", quality: "epic", type: "Tabard", effects: ["Decorated with Naga scales."] } },
            { req: "Exalted", item: { name: "Plan: Breastplate of the Sea", quality: "epic", type: "Blacksmithing", effects: ["Craft Breastplate of the Sea (Plate MP5)."] } },
        ]
    },

    saberon: {
        id: 'saberon',
        name: 'The Saberon Hunt',
        icon: "https://i.imgur.com/k6x35cT.jpeg",
        color: 'text-orange-500',
        location: "Blade's Edge Mountains",
        hubs: ["Bloodmaul Outpost", "The Pit"],
        desc: "Fierce feline hunters native to Draenor, the Saberon have a strict code of honor. They respect only strength and the thrill of the hunt.",
        lore: "The Saberon are a primitive but proud race. They are currently hunting the Gronn, the massive giants who rule Blade's Edge. Players who prove their hunting prowess can join their 'pride'. They offer unique agility-based rewards and stealth-enhancing items.",
        repGuide: "Gained by killing Gronn and Ogres in Blade's Edge Mountains. The elite quests to kill the Sons of Gruul grant massive reputation. Skinning beasts in the zone also occasionally yields 'Trophy Hides' which can be turned in.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Saberon's Tooth", quality: "common", type: "Consumable", effects: ["Use: Increases Agility by 10 for 30 min. (Stackable with food)."] } },
            { req: "Friendly", item: { name: "Pattern: Cat's Swiftness", quality: "uncommon", type: "Enchanting", effects: ["Permanently enchant boots to increase Agility by 6 and minor movement speed."] } },
            { req: "Friendly", item: { name: "Hunter's Belt", quality: "uncommon", ilvl: 105, slot: "Waist", type: "Mail", stats: ["+20 Agility", "+15 Stamina"], effects: ["Equip: Increases attack power by 30."] } },
            { req: "Friendly", item: { name: "Design: Glinting Shadow Draenite", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts Glinting Shadow Draenite (+Hit)."] } },
            // Honored
            { req: "Honored", item: { name: "Design: Crimson Sun", quality: "rare", type: "Jewelcrafting", effects: ["Cuts Crimson Sun (+AP)."] } },
            { req: "Honored", item: { name: "Claw of the Stalker", quality: "rare", ilvl: 115, type: "One-Hand", slot: "Fist Weapon", speed: 1.60, damage: "85 - 130", dps: 67.2, stats: ["+18 Agility"], effects: ["Equip: Chance on hit to increase attack speed by 20% for 10 sec.", "Set Piece (1/2)."] } },
            { req: "Honored", item: { name: "Mantle of the Hunt", quality: "rare", ilvl: 115, slot: "Shoulder", type: "Mail", stats: ["+25 Agility", "+20 Stamina", "+15 Intellect"], effects: ["Equip: Increases attack power by 50."] } },
            { req: "Honored", item: { name: "Pattern: Quiver of a Thousand Feathers", quality: "rare", type: "Leatherworking", effects: ["Craft 24-slot Quiver."] } },
            { req: "Honored", item: { name: "Recipe: Elixir of Major Agility", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Elixir of Major Agility (+35 Agility)."] } },
            // Revered
            { req: "Revered", item: { name: "Claw of the Watcher", quality: "rare", ilvl: 120, type: "Off-Hand", slot: "Fist Weapon", speed: 1.50, damage: "80 - 120", dps: 66.6, stats: ["+20 Agility"], effects: ["Equip: Increases hit rating by 15.", "Set Piece (2/2): Your attacks have a chance to bleed the target for 200 damage over 10 sec."] } },
            { req: "Revered", item: { name: "Pendant of the Pride", quality: "rare", ilvl: 120, slot: "Neck", type: "Neck", stats: ["+25 Agility", "+20 Stamina"], effects: ["Equip: Increases attack power by 50."] } },
            { req: "Revered", item: { name: "Idol of the Feral Spirit", quality: "rare", item: "Relic", slot: "Idol", effects: ["Equip: Increases the damage of your Shred ability by 30."] } },
            { req: "Revered", item: { name: "Pattern: Leggings of the Prowler", quality: "rare", type: "Tailoring", effects: ["Craft Leggings of the Prowler (Leather Agi/Stealth)."] } },
            // Exalted
            { req: "Exalted", item: { name: "Reins of the Saber Cat", quality: "epic", type: "Mount", effects: ["Summons a swift Saberon battle-mount (Tiger model)."] } },
            { req: "Exalted", item: { name: "Fang of the Primal", quality: "epic", ilvl: 115, slot: "Trinket", type: "Misc", effects: ["Equip: Increases attack power by 80.", "Use: Transform into a Saberon for 20 sec, increasing movement speed by 50% and damage by 15%. (3 Min CD)."] } },
            { req: "Exalted", item: { name: "Tabard of the Hunt", quality: "epic", type: "Tabard", effects: ["Wear the trophies of your kills."] } },
            { req: "Exalted", item: { name: "Design: Relentless Earthstorm Diamond", quality: "epic", type: "Jewelcrafting", effects: ["Teaches you how to cut Relentless Earthstorm Diamond (+12 Agility & +3% Crit Damage)."] } },
        ]
    },
    ogrila: {
        id: 'ogrila',
        name: 'Ogri\'la',
        icon: "https://i.imgur.com/G5g2mJc.jpeg",
        color: 'text-amber-600',
        location: "Blade's Edge Mountains",
        hubs: ["Ogri'la (Plateau)"],
        desc: "Ogres of Blade's Edge who have been enlightened by apexis crystals. They are intelligent, peaceful, and seek to study the crystals to further their evolution.",
        lore: "An anomaly among Ogres, the citizens of Ogri'la speak with perfect grammar and ponder philosophy. They are constantly under attack by the Burning Legion and the Black Dragonflight. They use Apexis Shards to power their defenses and their minds.",
        repGuide: "This is a Daily Quest hub. You must complete the 'Simon Says' crystal mini-game and hunt demons in the area. Turning in **Apexis Shards** also grants reputation.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Apexis Crystal Potion", quality: "common", type: "Consumable", effects: ["Restores 2000 health and mana. Cooldown shared with potions."] } },
            { req: "Friendly", item: { name: "Design: Fluorescent Tanzanite", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts Fluorescent Tanzanite (+Spirit/Stam)."] } },
            { req: "Friendly", item: { name: "Blue Ogre Brew", quality: "common", type: "Drink", effects: ["Increases Spirit by 20 for 15 min."] } },
            { req: "Friendly", item: { name: "Pattern: Bracers of the Ogre", quality: "uncommon", type: "Leatherworking", effects: ["Craft Bracers of the Ogre (Leather Stam/Int)."] } },
            // Honored
            { req: "Honored", item: { name: "Apexis Cloak", quality: "rare", ilvl: 115, slot: "Back", type: "Cloth", stats: ["+18 Stamina", "+18 Intellect", "+12 Spirit"], effects: ["Equip: Increases healing done by spells and effects by up to 35."] } },
            { req: "Honored", item: { name: "Crystalforged Trinket", quality: "rare", ilvl: 115, slot: "Trinket", type: "Misc", effects: ["Use: Summons a crystal guardian to fight for you for 1 min. (10 Min CD)."] } },
            { req: "Honored", item: { name: "Design: Steady Talasite", quality: "rare", type: "Jewelcrafting", effects: ["Cuts Steady Talasite (+Resilience/Stam)."] } },
            { req: "Honored", item: { name: "Recipe: Elixir of Major Fortitude", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Elixir of Major Fortitude (+250 Health)."] } },
            // Revered
            { req: "Revered", item: { name: "Crystalline Crossbow", quality: "rare", ilvl: 120, type: "Ranged", slot: "Crossbow", speed: 2.60, damage: "145 - 270", dps: 79.8, stats: ["+15 Agility", "+15 Hit Rating"], effects: ["Equip: Increases attack power by 36."] } },
            { req: "Revered", item: { name: "Orb of the Ogre-Magi", quality: "rare", ilvl: 120, slot: "Off-Hand", type: "Misc", stats: ["+25 Stamina", "+25 Intellect"], effects: ["Equip: Increases damage and healing done by magical spells and effects by up to 35."] } },
            { req: "Revered", item: { name: "Pattern: Blastguard Pants", quality: "rare", type: "Leatherworking", effects: ["Craft Blastguard Pants (Mail Crit/AP)."] } },
            { req: "Revered", item: { name: "Recipe: Flask of Distilled Wisdom", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Flask of Distilled Wisdom (+65 Int)."] } },
            // Exalted
            { req: "Exalted", item: { name: "Vortext of the Enlightened", quality: "epic", ilvl: 115, slot: "Trinket", type: "Misc", effects: ["Equip: Chance on spell cast to increase spell haste rating by 200 for 10 sec.", "BiS Caster Trinket."] } },
            { req: "Exalted", item: { name: "Barrier of the Ogre King", quality: "epic", ilvl: 115, slot: "Shield", type: "Shield", stats: ["+6000 Armor", "+50 Stamina"], effects: ["Equip: Increases defense rating by 35."] } },
            { req: "Exalted", item: { name: "Tabard of Ogri'la", quality: "epic", type: "Tabard", effects: ["Wear the symbol of the enlightened ogres."] } },
            { req: "Exalted", item: { name: "Design: Chaotic Skyfire Diamond", quality: "epic", type: "Jewelcrafting", effects: ["Teaches you how to cut Chaotic Skyfire Diamond (+12 Crit & +3% Crit Damage)."] } },
        ]
    },
    skyguard: {
        id: 'skyguard',
        name: 'Sha\'tari Skyguard',
        icon: "https://i.imgur.com/G5g2mJc.jpeg",
        color: 'text-sky-300',
        location: "Terokkar Forest / Blade's Edge",
        hubs: ["Blackwind Landing"],
        desc: "The air force of Shattrath. They patrol the skies of Outland, protecting trade routes and hunting the Arakkoa of Skettis.",
        lore: "Riding Nether Rays, the Skyguard are the first line of defense against aerial threats. They are engaged in a war with the Arakkoa of Skettis, who are summoning an ancient god. Join them to take to the skies and bomb the enemy from above.",
        repGuide: "Daily quests involving bombing runs in Skettis and Blade's Edge. You also gain reputation by killing Arakkoa in Skettis and summoning mini-bosses using Shadow Dust.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Enchanted Water", quality: "common", type: "Drink", effects: ["Restores 4500 mana over 30 sec."] } },
            { req: "Friendly", item: { name: "Design: Infused Amethyst", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts Infused Amethyst (+Spell Pen/Stam)."] } },
            { req: "Friendly", item: { name: "Airman's Ribbon of Gallantry", quality: "uncommon", ilvl: 105, slot: "Trinket", type: "Misc", effects: ["Equip: Increases attack power by 30."] } },
            { req: "Friendly", item: { name: "Recipe: Elixir of Major Defense", quality: "common", type: "Alchemy", effects: ["Teaches you how to brew Elixir of Major Defense (+550 Armor)."] } },
            // Honored
            { req: "Honored", item: { name: "Skyguard Silver Cross", quality: "rare", ilvl: 115, slot: "Trinket", type: "Misc", effects: ["Use: Increases health by 1000 for 15 sec. (Cannot be used in arena/bg)."] } },
            { req: "Honored", item: { name: "Cloak of the Skyguard", quality: "rare", ilvl: 115, slot: "Back", type: "Cloth", stats: ["+15 Agility", "+15 Stamina"], effects: ["Equip: Increases stealth detection."] } },
            { req: "Honored", item: { name: "Design: Sparkling Star of Elune", quality: "rare", type: "Jewelcrafting", effects: ["Cuts Sparkling Star of Elune (+Spirit/Spell Dmg)."] } },
            { req: "Honored", item: { name: "Recipe: Haste Potion", quality: "rare", type: "Alchemy", effects: ["Teaches you how to brew Haste Potion (+400 Haste Rating)."] } },
            // Revered
            { req: "Revered", item: { name: "Skyguard's Drape", quality: "rare", ilvl: 120, slot: "Back", type: "Cloth", stats: ["+18 Stamina", "+18 Intellect"], effects: ["Equip: Reduces fall damage."] } },
            { req: "Revered", item: { name: "Adorned Super Mana Potion", quality: "rare", type: "Consumable", effects: ["Restores 2400 to 3500 Mana. (Cheap to buy)."] } },
            { req: "Revered", item: { name: "Pattern: Redeemed Soul Cinch", quality: "rare", type: "Tailoring", effects: ["Craft Redeemed Soul Cinch (Cloth Healer Waist)."] } },
            { req: "Revered", item: { name: "Formula: Enchant Cloak - Major Agility", quality: "rare", type: "Enchanting", effects: ["Permanently enchant cloak to increase Agility by 12."] } },
            // Exalted
            { req: "Exalted", item: { name: "Purple Riding Nether Ray", quality: "epic", type: "Mount", effects: ["Summons a Purple Riding Nether Ray. 280% Flying Speed."] } },
            { req: "Exalted", item: { name: "Green Riding Nether Ray", quality: "epic", type: "Mount", effects: ["Summons a Green Riding Nether Ray. 280% Flying Speed."] } },
            { req: "Exalted", item: { name: "Silver Riding Nether Ray", quality: "epic", type: "Mount", effects: ["Summons a Silver Riding Nether Ray. 280% Flying Speed."] } },
            { req: "Exalted", item: { name: "Red Riding Nether Ray", quality: "epic", type: "Mount", effects: ["Summons a Red Riding Nether Ray. 280% Flying Speed."] } },
            { req: "Exalted", item: { name: "Blue Riding Nether Ray", quality: "epic", type: "Mount", effects: ["Summons a Blue Riding Nether Ray. 280% Flying Speed."] } },
            { req: "Exalted", item: { name: "Skyguard Tabard", quality: "epic", type: "Tabard", effects: ["Wear the wings of the Skyguard."] } },
            { req: "Exalted", item: { name: "Trinket of the Sky", quality: "epic", ilvl: 115, slot: "Trinket", type: "Misc", effects: ["Equip: Increases mount speed by 10% (Does not stack).", "Use: Slow fall for 10 sec."] } },
        ]
    },
    sun: {
        id: 'sun',
        name: 'Shattered Sun Offensive',
        icon: "https://i.imgur.com/k6x35cT.jpeg",
        color: 'text-amber-300',
        location: "Isle of Quel'Danas",
        hubs: ["Sun's Reach"],
        desc: "A joint task force of Aldor and Scryers, united to reclaim the Sunwell from Kael'thas and the Legion. This is the final push to save Azeroth.",
        lore: "Putting aside their differences, the Draenei and Blood Elves have formed the Shattered Sun Offensive. They are fighting to open a staging area on the Isle of Quel'Danas. As the server completes daily quests, the hub physically builds up, unlocking new vendors and portals.",
        repGuide: "Daily Quests on the Isle of Quel'Danas. Running **Magister's Terrace** (Regular and Heroic) also grants reputation.",
        rewards: [
            // Friendly
            { req: "Friendly", item: { name: "Naaru Ration", quality: "common", type: "Consumable", effects: ["Restores health and mana. Cheap basic food."] } },
            { req: "Friendly", item: { name: "Design: Steady Seaspray Emerald", quality: "uncommon", type: "Jewelcrafting", effects: ["Cuts Steady Seaspray Emerald (+Resilience/Stam)."] } },
            { req: "Friendly", item: { name: "Pattern: Sun-Drenched Scale Chestguard", quality: "rare", type: "Leatherworking", effects: ["Craft Mail Agi/AP Chest."] } },
            { req: "Friendly", item: { name: "Formula: Enchant Chest - Defense", quality: "rare", type: "Enchanting", effects: ["Enchant chest +15 Defense."] } },
            // Honored
            { req: "Honored", item: { name: "Shattered Sun Pendant of Might", quality: "rare", ilvl: 115, slot: "Neck", type: "Neck", stats: ["+18 Strength", "+18 Stamina"], effects: ["Equip: Chance on hit to increase attack power by 120 (Aldor) or deliver a magical strike (Scryer)."] } },
            { req: "Honored", item: { name: "Shattered Sun Pendant of Acumen", quality: "rare", ilvl: 115, slot: "Neck", type: "Neck", stats: ["+18 Intellect", "+12 Spell Crit"], effects: ["Equip: Special proc based on Aldor/Scyer alignment."] } },
            { req: "Honored", item: { name: "Weapon: Crystal of the Offensive", quality: "rare", type: "Misc", effects: ["Adds a glow effect to your weapon."] } },
            { req: "Honored", item: { name: "Design: Forceful Seaspray Emerald", quality: "rare", type: "Jewelcrafting", effects: ["Teaches you how to cut +Haste/Stam gems."] } },
            // Revered
            { req: "Revered", item: { name: "Leggings of the Shattered Sun", quality: "epic", ilvl: 141, slot: "Legs", type: "Various", effects: ["High level rewards for all armor types (Plate/Mail/Leather/Cloth)."] } },
            { req: "Revered", item: { name: "Helm of the Lightbringer", quality: "epic", ilvl: 141, slot: "Head", type: "Plate", stats: ["+45 Strength", "+40 Stamina"], effects: ["Equip: Improves critical strike rating by 35."] } },
            { req: "Revered", item: { name: "Dawnsteel Bracers", quality: "epic", ilvl: 141, slot: "Wrist", type: "Plate", stats: ["+30 Strength", "+20 Stamina"], effects: ["Equip: Improves critical strike rating by 20."] } },
            { req: "Revered", item: { name: "Design: Quick Lionseye", quality: "epic", type: "Jewelcrafting", effects: ["Cuts Quick Lionseye (+Haste)."] } },
            // Exalted
            { req: "Exalted", item: { name: "Title: Of the Shattered Sun", quality: "epic", type: "Title", effects: ["Grants the title '%s of the Shattered Sun'.", "Access to purchase Sunmotes."] } },
            { req: "Exalted", item: { name: "Shattered Sun Tabard", quality: "epic", type: "Tabard", effects: ["Wear the colors of the offensive."] } },
            { req: "Exalted", item: { name: "Shield of the Sun", quality: "epic", ilvl: 154, type: "Off-Hand", slot: "Shield", stats: ["+6000 Armor", "+180 Stamina"], effects: ["Equip: Increases defense rating by 35.", "BiS Tank Shield."] } },
            { req: "Exalted", item: { name: "Recipe: Flask of Chromatic Resistance", quality: "epic", type: "Alchemy", effects: ["Teaches you how to brew Flask of Chromatic Resistance."] } },
        ]
    },
};
