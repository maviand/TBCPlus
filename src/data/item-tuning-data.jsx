
export const raidLootData = {
    karazhan: {
        id: 'karazhan',
        name: "Karazhan",
        description: "The ivory tower of Medivh. Items here have been retuned to provide a more competitive entry-level experience, smoothing the transition into 25-man content.",
        bosses: [
            {
                name: "Attumen the Huntsman",
                items: [
                    {
                        name: "Steelhawk Crossbow",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_crossbow_07.jpg",
                        original: "Binds when picked up\nRanged  Crossbow\n2.80 Speed\nEquip: Increases attack power by 30.\nEquip: Improves hit rating by 16.\nItem Level 115\nRequires Level 70",
                        rationale: "Align speed with the 3.00 rotation standard for BM Hunters to prevent Steady Shot clipping.",
                        after: "Binds when picked up\nRanged  Crossbow\n3.00 Speed\n42 - 88 Damage\n(21.7 damage per second)\nEquip: Increases attack power by 30.\nEquip: Improves hit rating by 16.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Gloves of Saintly Blessings",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_gauntlets_18.jpg",
                        original: "Binds when picked up\nHands  Cloth\n100 Armor\n+20 Intellect\n+20 Spirit\nDurability 35 / 35\nEquip: Increases healing done by spells and effects by up to 35.\nItem Level 115\nRequires Level 70",
                        rationale: "Add a Yellow socket; Spirit budget reduction for increased raw Intellect.",
                        after: "Binds when picked up\nHands  Cloth\n100 Armor\n+20 Intellect\n+20 Stamina\nYellow Socket\nSocket Bonus: +2 Healing\nDurability 35 / 35\nEquip: Increases healing done by spells and effects by up to 35.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Stalker's War Bands",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_17.jpg",
                        original: "Binds when picked up\nWrist  Mail\n250 Armor\n+18 Agility\n+12 Stamina\n+10 Intellect\nDurability 40 / 40\nItem Level 115\nRequires Level 70",
                        rationale: "Add Armor Penetration rating to provide Mail wearers with late-patch throughput.",
                        after: "Binds when picked up\nWrist  Mail\n250 Armor\n+18 Agility\n+12 Stamina\n+10 Intellect\nDurability 40 / 40\nEquip: Increases your armor penetration rating by 15.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Moroes",
                items: [
                    {
                        name: "Emerald Ripper",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_shortblade_27.jpg",
                        original: "Binds when picked up\nMain Hand  Dagger\n1.80 Speed\n70 - 105 Damage\n(48.6 damage per second)\n+15 Agility\nEquip: Increases attack power by 15.\nItem Level 115\nRequires Level 70",
                        rationale: "Remove 'Main-Hand' restriction to allow Rogue/Shaman off-hand utility and dual-wield flexibility.",
                        after: "Binds when picked up\nOne-Hand  Dagger\n1.80 Speed\n70 - 105 Damage\n(48.6 damage per second)\n+15 Agility\nEquip: Increases attack power by 15.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Moroes' Lucky Pocket Watch",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_pocketwatch_01.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases your dodge rating by 38.\nUse: Increases dodge rating by 300 for 10 sec.\nItem Level 115\nRequires Level 70",
                        rationale: "Increase static Stamina to ensure it scales with 'Effective Health' tanking metas.",
                        after: "Binds when picked up\nTrinket\n+15 Stamina\nEquip: Increases your dodge rating by 38.\nUse: Increases dodge rating by 300 for 10 sec.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Idol of the Avian Heart",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_statue_08.jpg",
                        original: "Binds when picked up\nRelic  Idol\nEquip: Your Healing Touch spell has a chance to grant 120 Spirit for 15 sec.\nItem Level 115\nRequires Level 70",
                        rationale: "Replace Spirit requirement with static +20 Healing on Lifebloom.",
                        after: "Binds when picked up\nRelic  Idol\nEquip: Increases the healing of your Lifebloom by 20.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Boots of Elusion",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_boots_chain_03.jpg",
                        original: "Binds when picked up\nFeet  Leather\n200 Armor\n+20 Stamina\nDurability 50 / 50\nEquip: Increases defense rating by 15.\nEquip: Increases dodge rating by 15.\nEquip: Increases parry rating by 12.\nItem Level 115\nRequires Level 70",
                        rationale: "Convert Parry rating into Armor to increase physical damage mitigation consistency.",
                        after: "Binds when picked up\nFeet  Leather\n300 Armor\n+30 Stamina\nDurability 50 / 50\nEquip: Increases defense rating by 15.\nEquip: Increases dodge rating by 15.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Maiden of Virtue",
                items: [
                    {
                        name: "Shard of the Virtuous",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_mace_38.jpg",
                        original: "Binds when picked up\nMain Hand  Mace\n2.20 Speed\n50 - 120 Damage\n(38.6 damage per second)\n+15 Intellect\n+15 Spirit\nEquip: Increases healing done by spells and effects by up to 120.\nItem Level 115\nRequires Level 70",
                        rationale: "Strip Spirit budget for Paladins/Shamans; replace with static MP5 to ensure universal healer utility.",
                        after: "Binds when picked up\nMain Hand  Mace\n2.20 Speed\n50 - 120 Damage\n(38.6 damage per second)\n+15 Intellect\nPrismatic Socket\nSocket Bonus: +2 MP5\nEquip: Restores 12 mana per 5 sec.\nEquip: Increases healing done by spells and effects by up to 120.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Barbed Choker of Discipline",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_28.jpg",
                        original: "Binds when picked up\nNeck\n+39 Stamina\nEquip: Increases defense rating by 16.\nEquip: Increases dodge rating by 14.\nItem Level 115\nRequires Level 70",
                        rationale: "Replace RNG-heavy Dodge with Expertise Rating to help tanks bypass boss parries.",
                        after: "Binds when picked up\nNeck\n+39 Stamina\nEquip: Increases defense rating by 16.\nEquip: Increases expertise rating by 20.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Opera Event",
                items: [
                    {
                        name: "Wolfslayer Sniper Rifle",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_rifle_05.jpg",
                        original: "Binds when picked up\nRanged  Gun\n2.70 Speed\n42 - 88 Damage\n(24.1 damage per second)\nEquip: Increases attack power by 32.\nEquip: Increases critical strike rating by 15.\nItem Level 115\nRequires Level 70",
                        rationale: "Standardize speed to 3.00 to optimize rotation; convert raw AP to Agility for better scaling.",
                        after: "Binds when picked up\nRanged  Gun\n3.00 Speed\n42 - 88 Damage\n(21.7 damage per second)\n+22 Agility\nEquip: Increases critical strike rating by 15.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Legacy",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_axe_09.jpg",
                        original: "Binds when picked up\nTwo-Hand  Axe\n3.50 Speed\n200 - 300 Damage\n(71.4 damage per second)\n+38 Agility\nEquip: Increases hit rating by 15.\nEquip: Increases attack power by 50.\nItem Level 115\nRequires Level 70",
                        rationale: "Convert Agility on an Axe (hybrid stat) into raw Strength for Warrior/Shaman clarity.",
                        after: "Binds when picked up\nTwo-Hand  Axe\n3.50 Speed\n200 - 300 Damage\n(71.4 damage per second)\n+38 Strength\nEquip: Increases hit rating by 15.\nEquip: Increases attack power by 50.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Despair",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_26.jpg",
                        original: "Binds when picked up\nTwo-Hand  Sword\n3.50 Speed\n200 - 300 Damage\n(71.4 damage per second)\n+40 Strength\nEquip: Increases critical strike rating by 32.\n" + '"And when he fell, there was only silence."\nItem Level 115\nRequires Level 70',
                        rationale: "Increase weapon damage range to compete with High Warlord rank 14 rewards.",
                        after: "Binds when picked up\nTwo-Hand  Sword\n3.50 Speed\n200 - 300 Damage\n(71.4 damage per second)\n+40 Strength\nEquip: Increases critical strike rating by 32.\nEquip: Weapon Damage increased by 10% (Hidden).\n" + '"And when he fell, there was only silence."\nItem Level 115\nRequires Level 70',
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Shade of Aran",
                items: [
                    {
                        name: "Tirisfal Wand of Ascendancy",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_wand_11.jpg",
                        original: "Binds when picked up\nRanged  Wand\n1.40 Speed\n100 - 180 Shadow Damage\n(100.0 damage per second)\n+15 Intellect\nEquip: Increases damage and healing done by magical spells and effects by up to 22.\nItem Level 115\nRequires Level 70",
                        rationale: "Strip useless white Wand DPS; reallocate budget into Spell Hit Rating for caster caps.",
                        after: "Binds when picked up\nRanged  Wand\n1.60 Speed\n100 - 180 Shadow Damage\n(87.5 damage per second)\n+15 Intellect\nEquip: Increases spell hit rating by 14.\nEquip: Increases damage and healing done by magical spells and effects by up to 22.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    },
                ]
            },
            {
                name: "Terestian Illhoof",
                items: [
                    {
                        name: "The Lightning Capacitor",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_trinket_naxxramas05.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: You gain an electrical charge each time you cause a spell critical strike. When you reach 3 charges, an electrical bolt is fired for 694 to 806 damage.\nItem Level 115\nRequires Level 70",
                        rationale: "Perfect mechanical design; increase the proc damage scaling with Spell Power.",
                        after: "Binds when picked up\nTrinket\nEquip: You gain an electrical charge each time you cause a spell critical strike. When you reach 3 charges, an electrical bolt is fired for 600 to 800 Nature damage (+15% of your Spell Power).\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    },

                ]
            },
            {
                name: "Netherspite",
                items: [
                    {
                        name: "Spiteblade",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_66.jpg",
                        original: "Binds when picked up\nMain Hand  Sword\n2.70 Speed\n150 - 280 Damage\n(79.6 damage per second)\n+18 Agility\nEquip: Increases attack power by 36.\nItem Level 115\nRequires Level 70",
                        rationale: "Revert to One-Handed to allow for diverse dual-wield combinations with heroic or badge gear.",
                        after: "Binds when picked up\nOne-Hand  Sword\n2.70 Speed\n150 - 280 Damage\n(79.6 damage per second)\n+18 Agility\nEquip: Increases attack power by 36.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Chess Event",
                items: [
                    {
                        name: "Triptych Shield of the Ancients",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shield_23.jpg",
                        original: "Binds when picked up\nOff Hand  Shield\n2500 Armor\n90 Block\n+15 Intellect\n+15 Spirit\nDurability 100 / 100\nEquip: Increases healing done by spells and effects by up to 35.\nItem Level 115\nRequires Level 70",
                        rationale: "Replace Spirit with MP5 to make it the definitive Paladin/Shaman healing shield.",
                        after: "Binds when picked up\nOff Hand  Shield\n2500 Armor\n90 Block\n+15 Intellect\nBlue Socket\nSocket Bonus: +2 MP5\nDurability 100 / 100\nEquip: Restores 10 mana per 5 sec.\nEquip: Increases healing done by spells and effects by up to 35.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "King's Defender",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_44.jpg",
                        original: "Binds when picked up\nOne-Hand  Sword\n1.60 Speed\n100 - 150 Damage\n(78.1 damage per second)\n3000 Armor\n+20 Stamina\nEquip: Increases hit rating by 17.\nEquip: Increases dodge rating by 13.\nItem Level 115\nRequires Level 70",
                        rationale: "Increase Armor value to reinforce the 'Wall of Iron' fantasy for Protection Warriors.",
                        after: "Binds when picked up\nOne-Hand  Sword\n1.60 Speed\n100 - 150 Damage\n(78.1 damage per second)\n3150 Armor\n+28 Stamina\nEquip: Increases hit rating by 17.\nEquip: Increases dodge rating by 13.\nItem Level 115\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Prince Malchezaar",
                items: [
                    {
                        name: "Gorehowl",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_axe_48.jpg",
                        original: "Binds when picked up\nTwo-Hand  Axe\n3.40 Speed\n350 - 520 Damage\n(127.9 damage per second)\n+49 Strength\n+43 Agility\nItem Level 125\nRequires Level 70",
                        rationale: "Infuse the weapon with 'Warsong Legacy' through a unique proc, reflecting its legendary history.",
                        after: "Binds when picked up\nTwo-Hand  Axe\n3.40 Speed\n350 - 520 Damage\n(127.9 damage per second)\n+49 Strength\n+43 Agility\nChance on hit: Grants 'Warsong Howl', increasing Attack Power by 200 for 10 sec.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Sunfury Bow of the Phoenix",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_bow_28.jpg",
                        original: "Binds when picked up\nRanged  Bow\n2.90 Speed\n160 - 280 Damage\n(75.9 damage per second)\n+19 Agility\nEquip: Increases attack power by 34.\nItem Level 125\nRequires Level 70",
                        rationale: "Increase speed to 3.00; add a Red socket for Agility gemming.",
                        after: "Binds when picked up\nRanged  Bow\n3.00 Speed\n160 - 280 Damage\n(73.3 damage per second)\n+19 Agility\nRed Socket\nSocket Bonus: +2 Agility\nEquip: Increases attack power by 34.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Nathrezim Mindblade",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_shortblade_08.jpg",
                        original: "Binds when picked up\nMain Hand  Dagger\n1.80 Speed\n40 - 100 Damage\n(38.9 damage per second)\n+18 Intellect\n+15 Stamina\nEquip: Increases spell critical strike rating by 23.\nEquip: Increases damage and healing done by magical spells and effects by up to 203.\nItem Level 125\nRequires Level 70",
                        rationale: "Add a Red socket to allow casters to reach hit caps earlier in Phase 1.",
                        after: "Binds when picked up\nMain Hand  Dagger\n1.80 Speed\n40 - 100 Damage\n(38.9 damage per second)\n+18 Intellect\n+15 Stamina\nRed Socket\nSocket Bonus: +2 Spell Crit\nEquip: Increases spell critical strike rating by 23.\nEquip: Increases damage and healing done by magical spells and effects by up to 203.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Pauldrons of the Fallen Defender",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_29.jpg",
                        original: "Binds when picked up\nTier 4 Shoulder Token\nClasses: Warrior, Priest, Druid\nItem Level 125\nRequires Level 70",
                        rationale: "Restructure to 'Universal Tier Token' to reduce raid social friction and loot rot.",
                        after: "Binds when picked up\nTier 4 Shoulder Token\nClasses: All Classes\nUse: Creates a class-specific T4 Shoulder piece.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Nightbane",
                items: [
                    {
                        name: "Nightstaff of the Everliving",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_staff_57.jpg",
                        original: "Binds when picked up\nTwo-Hand  Staff\n3.20 Speed\n140 - 260 Damage\n(62.5 damage per second)\n+30 Intellect\n+30 Spirit\nEquip: Increases healing done by spells and effects by up to 140.\nItem Level 125\nRequires Level 70",
                        rationale: "Convert Spirit into a Meta-gem socket to allow Druids and Priests to customize their throughput.",
                        after: "Binds when picked up\nTwo-Hand  Staff\n3.20 Speed\n140 - 260 Damage\n(62.5 damage per second)\n+30 Intellect\nBlue Socket\nPrismatic Socket\nSocket Bonus: +4 Healing\nEquip: Increases healing done by spells and effects by up to 140.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Shield of Impenetrable Darkness",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shield_12.jpg",
                        original: "Binds when picked up\nOff Hand  Shield\n3500 Armor\n140 Block\nDurability 100 / 100\nEquip: Increases defense rating by 18.\nEquip: Increases dodge rating by 12.\nEquip: Increases shield block rating by 15.\nItem Level 125\nRequires Level 70",
                        rationale: "Perfect itemization; increase raw Block Value slightly to mitigate 'crushing' hits.",
                        after: "Binds when picked up\nOff Hand  Shield\n3500 Armor\n175 Block\nDurability 100 / 100\nEquip: Increases defense rating by 18.\nEquip: Increases dodge rating by 12.\nEquip: Increases shield block rating by 15.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            }
        ]
    },
    // Placeholders for other raids - populated in next steps
    gruul_mag: {
        id: 'gruul_mag',
        name: "Gruul & Magtheridon",
        description: "The first 25-man challenges. Loot has been improved to bridge the gap to Tier 5 significantly.",
        bosses: [
            {
                name: "High King Maulgar",
                items: [
                    {
                        name: "Bladespire Warbands",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_02.jpg",
                        original: "Binds when picked up\nWrist  Plate\n400 Armor\n+20 Strength\n+18 Stamina\nDurability 40 / 40\nEquip: Increases critical strike rating by 15.\nItem Level 125\nRequires Level 70",
                        rationale: "Add a Blue Socket; plate bracers at this level are often skipped for leather alternatives unless they offer sockets.",
                        after: "Binds when picked up\nWrist  Plate\n400 Armor\n+20 Strength\n+18 Stamina\nBlue Socket\nSocket Bonus: +2 Strength\nDurability 40 / 40\nEquip: Increases critical strike rating by 15.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Maulgar's Warhelm",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_helmet_71.jpg",
                        original: "Binds when picked up\nHead  Mail\n600 Armor\n+32 Agility\n+30 Stamina\n+21 Intellect\nDurability 70 / 70\nEquip: Increases critical strike rating by 24.\nItem Level 125\nRequires Level 70",
                        rationale: "This Mail helm often forces Hunters into 'Stat-Stick' builds; add Armor Penetration for late-patch scaling.",
                        after: "Binds when picked up\nHead  Mail\n600 Armor\n+32 Agility\n+30 Stamina\n+21 Intellect\nDurability 70 / 70\nEquip: Increases critical strike rating by 24.\nEquip: Increases your armor penetration rating by 25.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Hammer of the Naaru",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_mace_32.jpg",
                        original: "Binds when picked up\nTwo-Hand  Mace\n3.50 Speed\n300 - 450 Damage\n(107.1 damage per second)\n+30 Strength\n+25 Stamina\nEquip: Increases critical strike rating by 30.\nItem Level 125\nRequires Level 70",
                        rationale: "Infuse with a 'Naaru's Radiance' proc (Holy damage/heal) to better reflect its lore as a Draenei artifact.",
                        after: "Binds when picked up\nTwo-Hand  Mace\n3.50 Speed\n350 - 525 Damage\n(125.0 damage per second)\n+45 Strength\n+38 Stamina\nEquip: Increases critical strike rating by 30.\nChance on hit: Blasts the enemy with Naaru's Radiance, dealing 150 Holy damage and healing you for 150.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Brute Cloak of Ogre-Magi",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_cape_16.jpg",
                        original: "Binds when picked up\nBack\n100 Armor\n+16 Intellect\n+14 Stamina\nDurability 20 / 20\nEquip: Increases damage and healing done by magical spells and effects by up to 21.\nItem Level 125\nRequires Level 70",
                        rationale: "Add a Yellow Socket to help mages bridge the hit-cap gap before Tier 5 content.",
                        after: "Binds when picked up\nBack\n100 Armor\n+20 Intellect\n+18 Stamina\nYellow Socket\nSocket Bonus: +2 Spell Crit\nDurability 20 / 20\nEquip: Increases damage and healing done by magical spells and effects by up to 28.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Gruul the Dragonkiller",
                items: [
                    {
                        name: "Dragonspine Trophy",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_bone_04.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases attack power by 40.\nEquip: Chance on melee or ranged hit to increase your haste rating by 325 for 10 sec.\nItem Level 125\nRequires Level 70",
                        rationale: "Already iconic, but add static Agility to reinforce its status as the definitive physical DPS trinket.",
                        after: "Binds when picked up\nTrinket\n+22 Agility\nEquip: Increases attack power by 40.\nEquip: Chance on melee or ranged hit to increase your haste rating by 325 for 10 sec.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Eye of Gruul",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_eye_02.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases healing done by spells and effects by up to 44.\nEquip: Your healing spells have a 2% chance to reduce the mana cost of your next healing spell by 450.\nItem Level 125\nRequires Level 70",
                        rationale: "The 2% proc is too low for Druid/Priest HoT rotations; increase proc chance and add static Spirit.",
                        after: "Binds when picked up\nTrinket\n+15 Spirit\nEquip: Increases healing done by spells and effects by up to 44.\nEquip: Your healing spells have a 5% chance to reduce the mana cost of your next healing spell by 450.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Aldori Legacy Defender",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shield_31.jpg",
                        original: "Binds when picked up\nOff Hand  Shield\n4100 Armor\n142 Block\nDurability 100 / 100\nEquip: Increases defense rating by 19.\nEquip: Increases shield block rating by 16.\nItem Level 125\nRequires Level 70",
                        rationale: "Add a Yellow Socket for Defense/Hit flexibility; increase Block Value to better soak Magtheridon's Cleaves.",
                        after: "Binds when picked up\nOff Hand  Shield\n4100 Armor\n175 Block\n+15 Stamina\nYellow Socket\nSocket Bonus: +3 Stamina\nDurability 100 / 100\nEquip: Increases defense rating by 19.\nEquip: Increases shield block rating by 16.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Teeth of Gruul",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shield_20.jpg",
                        original: "Binds when picked up\nOff Hand  Shield\n3000 Armor\n+18 Intellect\n+12 Spirit\nEquip: Restores 8 mana per 5 sec.\nEquip: Increases damage and healing done by magical spells and effects by up to 21.\nItem Level 125\nRequires Level 70",
                        rationale: "Remove Spirit budget for Paladin/Shaman utility; replace with Spell Critical Strike Rating.",
                        after: "Binds when picked up\nOff Hand  Shield\n3000 Armor\n+21 Intellect\nEquip: Restores 10 mana per 5 sec.\nEquip: Increases spell critical strike rating by 22.\nEquip: Increases damage and healing done by magical spells and effects by up to 25.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Axe of the Gronn Lords",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_axe_06.jpg",
                        original: "Binds when picked up\nTwo-Hand  Axe\n3.40 Speed\n350 - 520 Damage\n(127.9 damage per second)\n+26 Strength\n+18 Agility\nEquip: Increases critical strike rating by 24.\nItem Level 125\nRequires Level 70",
                        rationale: "Increase speed to 3.60 to maximize Mortal Strike and Whirlwind damage coefficients for Fury Warriors.",
                        after: "Binds when picked up\nTwo-Hand  Axe\n3.60 Speed\n350 - 520 Damage\n(120.8 damage per second)\n+26 Strength\n+18 Agility\nEquip: Increases critical strike rating by 24.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Windshear Boots",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_boots_mail_03.jpg",
                        original: "Binds when picked up\nFeet  Mail\n400 Armor\n+20 Agility\n+20 Stamina\n+15 Intellect\nDurability 50 / 50\nEquip: Restores 6 mana per 5 sec.\nItem Level 125\nRequires Level 70",
                        rationale: "Hybrid stats on Mail; remove MP5 and replace with static Attack Power for Enhancement Shamans.",
                        after: "Binds when picked up\nFeet  Mail\n400 Armor\n+20 Agility\n+20 Stamina\n+15 Intellect\nDurability 50 / 50\nEquip: Increases attack power by 60.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Chestguard Tokens (Tier 4)",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_chest_chain_15.jpg",
                        original: "Binds when picked up\nTier 4 Chest Token\nClasses: Warrior, Priest, Druid\nItem Level 125\nRequires Level 70",
                        rationale: "Move to 'Universal Tier Token' fragments to ensure 25-man groups don't shard 4 tokens in a row.",
                        after: "Binds when picked up\nToken: Core Armor Fragment (Usable by any Class)\nUse: Creates a class-specific T4 Chest piece.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Magtheridon",
                items: [
                    {
                        name: "Eye of Magtheridon",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_eye_01.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases damage and healing done by magical spells and effects by up to 54.\nEquip: Your spell resists grant you 170 spell damage for 10 sec.\nItem Level 125\nRequires Level 70",
                        rationale: "Change proc trigger from 'Resist' to 'Spell Critical Strike' to remove RNG-frustration for hit-capped casters.",
                        after: "Binds when picked up\nTrinket\nEquip: Increases damage and healing done by magical spells and effects by up to 54.\nEquip: Your spell critical strikes grant you 170 spell damage for 10 sec.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Glaive of the Pit",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_polearm_08.jpg",
                        original: "Binds when picked up\nTwo-Hand  Polearm\n3.50 Speed\n350 - 520 Damage\n(124.3 damage per second)\n+35 Agility\n+35 Stamina\nEquip: Increases critical strike rating by 40.\nItem Level 125\nRequires Level 70",
                        rationale: "Convert budget from generic Stamina into Expertise Rating, making it the premier polearm for Feral Druid threat.",
                        after: "Binds when picked up\nTwo-Hand  Polearm\n3.50 Speed\n350 - 520 Damage\n(124.3 damage per second)\n+40 Agility\n+22 Stamina\nEquip: Increases expertise rating by 25.\nEquip: Increases critical strike rating by 40.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Bloodmaw Magus-Blade",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_64.jpg",
                        original: "Binds when picked up\nMain Hand  Sword\n1.80 Speed\n40 - 100 Damage\n(38.9 damage per second)\n+15 Intellect\n+15 Stamina\nEquip: Increases damage and healing done by magical spells and effects by up to 203.\nItem Level 125\nRequires Level 70",
                        rationale: "Add a Red Socket to allow for hit-cap refinement; increase Intellect to support Arcane Mage sustainability.",
                        after: "Binds when picked up\nMain Hand  Sword\n1.80 Speed\n40 - 100 Damage\n(38.9 damage per second)\n+22 Intellect\n+16 Stamina\nRed Socket\nSocket Bonus: +2 Spell Damage\nEquip: Increases damage and healing done by magical spells and effects by up to 203.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Eredar Wand of Obliteration",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_wand_01.jpg",
                        original: "Binds when picked up\nRanged  Wand\n1.30 Speed\n100 - 180 Shadow Damage\n(107.7 damage per second)\n+10 Intellect\nEquip: Increases damage and healing done by magical spells and effects by up to 14.\nItem Level 125\nRequires Level 70",
                        rationale: "Reallocate useless Wand DPS budget into Haste Rating to support Destruction Warlock Shadowbolt spam.",
                        after: "Binds when picked up\nRanged  Wand\n1.50 Speed\n100 - 180 Shadow Damage\n(93.3 damage per second)\n+15 Intellect\nEquip: Increases casting speed (haste) rating by 18.\nEquip: Increases damage and healing done by magical spells and effects by up to 22.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Aegis of the Vindicator",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shield_32.jpg",
                        original: "Binds when picked up\nOff Hand  Shield\n4500 Armor\n150 Block\n+18 Intellect\nDurability 100 / 100\nEquip: Increases healing done by spells and effects by up to 30.\nItem Level 125\nRequires Level 70",
                        rationale: "Replace Block Value with MP5; Healers should not be spending budget on mitigation stats.",
                        after: "Binds when picked up\nOff Hand  Shield\n4500 Armor\n+18 Intellect\nBlue Socket\nSocket Bonus: +2 MP5\nDurability 100 / 100\nEquip: Restores 12 mana per 5 sec.\nEquip: Increases healing done by spells and effects by up to 30.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Liar's Tongue Gloves",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_gauntlets_24.jpg",
                        original: "Binds when picked up\nHands  Leather\n250 Armor\n+20 Agility\n+30 Stamina\nDurability 35 / 35\nEquip: Increases critical strike rating by 20.\nEquip: Increases attack power by 50.\nItem Level 125\nRequires Level 70",
                        rationale: "Add Expertise Rating to help Rogues and Feral Cats bypass boss dodge/parry mechanics.",
                        after: "Binds when picked up\nHands  Leather\n250 Armor\n+20 Agility\n+30 Stamina\nDurability 35 / 35\nEquip: Increases expertise rating by 18.\nEquip: Increases critical strike rating by 20.\nEquip: Increases attack power by 50.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Soul-Eater's Handwraps",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_gauntlets_29.jpg",
                        original: "Binds when picked up\nHands  Cloth\n120 Armor\n+20 Intellect\n+25 Stamina\nDurability 30 / 30\nEquip: Increases spell critical strike rating by 21.\nEquip: Increases damage and healing done by magical spells and effects by up to 36.\nItem Level 125\nRequires Level 70",
                        rationale: "Reallocate a portion of Stamina into Haste Rating to fit the 'Soul-Eater' identity of fast casting.",
                        after: "Binds when picked up\nHands  Cloth\n120 Armor\n+20 Intellect\n+18 Stamina\nDurability 30 / 30\nEquip: Increases casting speed (haste) rating by 15.\nEquip: Increases spell critical strike rating by 21.\nEquip: Increases damage and healing done by magical spells and effects by up to 36.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Crystalheart Pulse-Staff",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_staff_53.jpg",
                        original: "Binds when picked up\nTwo-Hand  Staff\n3.20 Speed\n140 - 260 Damage\n(62.5 damage per second)\n+30 Intellect\n+30 Stamina\n+25 Spirit\nEquip: Increases healing done by spells and effects by up to 130.\nItem Level 125\nRequires Level 70",
                        rationale: "Convert the Spirit budget into a Meta-gem socket to make it the definitive healing staff of Phase 1.",
                        after: "Binds when picked up\nTwo-Hand  Staff\n3.20 Speed\n140 - 260 Damage\n(62.5 damage per second)\n+30 Intellect\n+30 Stamina\nPrismatic Socket\nBlue Socket\nSocket Bonus: +4 Healing\nEquip: Increases healing done by spells and effects by up to 130.\nItem Level 125\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            }
        ]
    },
    ssc_tk: {
        id: 'ssc_tk',
        name: "SSC & Tempest Keep",
        description: "Tier 5 raids. Major overhauls to weapon speeds and trinket budgets to prepare players for the brutalities of Tier 6.",
        bosses: [
            {
                name: "Lady Vashj",
                items: [
                    {
                        name: "Vestments of the Sea-Witch",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_chest_cloth_46.jpg",
                        original: "Binds when picked up\nChest  Cloth\n300 Armor\n+28 Stamina\n+28 Intellect\n3 Blue Sockets\nDurability 40 / 40\nBonus: +5 Spell Power\nEquip: Increases spell critical strike rating by 23.\nEquip: Increases spell hit rating by 17.\nEquip: Increases damage and healing done by magical spells and effects by up to 57.\nItem Level 141\nRequires Level 70",
                        rationale: "Add a third Blue socket; the final boss of SSC should offer a power curve that lasts until Sunwell.",
                        after: "Binds when picked up\nChest  Cloth\n300 Armor\n+35 Stamina\n+35 Intellect\n2 Blue Sockets\n1 Yellow Socket\nSocket Bonus: +5 Spell Power\nDurability 40 / 40\nEquip: Increases spell critical strike rating by 23.\nEquip: Increases spell hit rating by 17.\nEquip: Increases damage and healing done by magical spells and effects by up to 57.\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Belt of One-Hundred Deaths",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_belt_29.jpg",
                        original: "Binds when picked up\nWaist  Leather\n250 Armor\n+25 Stamina\n+25 Agility\nRed Socket\nBlue Socket\nDurability 40 / 40\nEquip: Increases expertise rating by 25.\nEquip: Increases attack power by 56.\nItem Level 141\nRequires Level 70",
                        rationale: "Add +12 Strength; Fury Warriors prize this belt for its expertise but lose raw AP scaling compared to plate alternatives.",
                        after: "Binds when picked up\nWaist  Leather\n250 Armor\n+12 Strength\n+25 Stamina\n+25 Agility\nRed Socket\nBlue Socket\nSocket Bonus: +4 Attack Power\nDurability 40 / 40\nEquip: Increases expertise rating by 25.\nEquip: Increases attack power by 56.\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Fang of Vashj",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_shortblade_23.jpg",
                        original: "Binds when picked up\nUnique\nMain Hand  Dagger\n1.80 Speed\n100 - 150 Damage\n(69.4 damage per second)\n+14 Agility\nEquip: Increases hit rating by 16.\nEquip: Increases attack power by 44.\nItem Level 141\nRequires Level 70",
                        rationale: "Remove 'Unique' and 'Main-Hand' tags to allow Rogues and Shamans to dual-wield these oceanic fangs.",
                        after: "Binds when picked up\nOne-Hand  Dagger\n1.80 Speed\n100 - 150 Damage\n(69.4 damage per second)\n+14 Agility\nEquip: Increases hit rating by 16.\nEquip: Increases attack power by 44.\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Kael'thas Sunstrider",
                items: [
                    {
                        name: "Twinblade of the Phoenix",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_67.jpg",
                        original: "Binds when picked up\nTwo-Hand  Sword\n3.50 Speed\n400 - 600 Damage\n(142.9 damage per second)\n+50 Strength\n+50 Agility\nEquip: Increases attack power by 100.\nEquip: Increases critical strike rating by 30.\nItem Level 141\nRequires Level 70",
                        rationale: "Change speed to 3.60 to maximize Slam and Whirlwind damage; add a Red socket for Agility/Strength customization.",
                        after: "Binds when picked up\nTwo-Hand  Sword\n3.60 Speed\n400 - 600 Damage\n(138.9 damage per second)\n+50 Strength\n+50 Agility\nRed Socket\nSocket Bonus: +4 Strength\nEquip: Increases attack power by 100.\nEquip: Increases critical strike rating by 30.\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "The Nexus Key",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_staff_55.jpg",
                        original: "Binds when picked up\nTwo-Hand  Staff\n2.40 Speed\n150 - 280 Damage\n(89.6 damage per second)\n+50 Stamina\n+50 Intellect\nEquip: Increases spell critical strike rating by 35.\nEquip: Increases damage and healing done by magical spells and effects by up to 200.\nItem Level 141\nRequires Level 70",
                        rationale: "Reallocate the 'Spirit' budget hidden in its secondary stats into raw Spell Haste to support late-expansion caster caps.",
                        after: "Binds when picked up\nTwo-Hand  Staff\n2.40 Speed\n150 - 280 Damage\n(89.6 damage per second)\n+50 Stamina\n+50 Intellect\nEquip: Increases casting speed (haste) rating by 25.\nEquip: Increases spell critical strike rating by 35.\nEquip: Increases damage and healing done by magical spells and effects by up to 200.\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Rod of the Sun King",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_mace_57.jpg",
                        original: "Binds when picked up\nOne-Hand  Mace\n2.70 Speed\n200 - 350 Damage\n(101.9 damage per second)\n+18 Stamina\nEquip: Increases critical strike rating by 20.\nEquip: Chance on melee hit to grant 5 rage or 5 energy.\nItem Level 141\nRequires Level 70",
                        rationale: "Increase the Energy/Rage return from 5 to 10 to reflect the higher resource costs of 2.4.3 rotations.",
                        after: "Binds when picked up\nOne-Hand  Mace\n2.70 Speed\n200 - 350 Damage\n(101.9 damage per second)\n+18 Stamina\nEquip: Increases critical strike rating by 20.\nChance on hit: Grants 10 Rage or 10 Energy.\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Tome of Fiery Redemption",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_offhand_hyjal_d_01.jpg",
                        original: "Binds when picked up\nHeld In Off-hand\n+16 Intellect\nEquip: Increases healing done by spells and effects by up to 30.\nEquip: Chance on spell cast to heal you for 200.\nItem Level 141\nRequires Level 70",
                        rationale: "Increase the proc magnitude; currently, it is outclassed by Phase 1 trinkets for most Holy Paladin builds.",
                        after: "Binds when picked up\nHeld In Off-hand\n+16 Intellect\nEquip: Increases healing done by spells and effects by up to 30.\nEquip: Chance on spell cast to heal your target for 600. (8s Cooldown)\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Leotheras the Blind",
                items: [
                    {
                        name: "Tsunami Talisman",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_trinket_04.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases critical strike rating by 38.\nEquip: Increases hit rating by 10.\nEquip: Chance on critical hit to increase attack power by 340 for 10 sec.\nItem Level 128\nRequires Level 70",
                        rationale: "Increase the duration of the 'Tsunami' proc from 10s to 15s to better align with physical DPS burst rotations.",
                        after: "Binds when picked up\nTrinket\nEquip: Increases critical strike rating by 38.\nEquip: Increases hit rating by 10.\nEquip: Chance on critical hit to increase attack power by 340 for 15 sec.\nItem Level 128\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Fathom-Lord Karathress",
                items: [
                    {
                        name: "World Breaker",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_mace_44.jpg",
                        original: "Binds when picked up\nTwo-Hand  Mace\n3.70 Speed\n350 - 520 Damage\n(117.6 damage per second)\n+40 Strength\n+35 Agility\nEquip: Increases critical strike rating by 28.\nItem Level 128\nRequires Level 70",
                        rationale: "Standardize speed to 3.80 to maximize the damage coefficient of Crusader Strike and Mortal Strike.",
                        after: "Binds when picked up\nTwo-Hand  Mace\n3.80 Speed\n350 - 520 Damage\n(114.5 damage per second)\n+40 Strength\n+35 Agility\nEquip: Increases critical strike rating by 28.\nItem Level 128\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Morogrim Tidewalker",
                items: [
                    {
                        name: "Serpent-Coil Braid",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_trinket_03.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases spell critical strike rating by 30.\nEquip: Increases hit rating by 12.\nUse: Increases mana gem mana by 25%.\nItem Level 128\nRequires Level 70",
                        rationale: "The proc chance is high, but add +10 Spell Haste to support the Tier 5 Arcane Mage '2-piece' rotation.",
                        after: "Binds when picked up\nTrinket\nEquip: Increases spell critical strike rating by 30.\nEquip: Increases hit rating by 12.\nEquip: Increases casting speed (haste) rating by 10.\nUse: Increases mana gem mana by 25%.\nItem Level 128\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Talon of Azshara",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_48.jpg",
                        original: "Binds when picked up\nMain Hand  Sword\n2.70 Speed\n180 - 320 Damage\n(92.6 damage per second)\n+18 Agility\nEquip: Increases attack power by 36.\nItem Level 128\nRequires Level 70",
                        rationale: "Revert to One-Handed; Ehn Shamans and Fury Warriors need slow off-hands for Flurry and Whirlwind scaling.",
                        after: "Binds when picked up\nOne-Hand  Sword\n2.70 Speed\n180 - 320 Damage\n(92.6 damage per second)\n+18 Agility\nEquip: Increases attack power by 36.\nItem Level 128\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Hydross the Unstable",
                items: [
                    {
                        name: "Wildfury Greatstaff",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_staff_22.jpg",
                        original: "Binds when picked up\nTwo-Hand  Staff\n500 Armor\n+75 Stamina\nDurability 120 / 120\nRequires Level 70\nEquip: Increases your dodge rating by 54.\nEquip: Increases attack power by 992 in Cat, Bear, Dire Bear, and Moonkin forms only.",
                        rationale: "Add +22 Expertise Rating to solve the chronic threat-scaling issues for Feral Druids in 25-man environments.",
                        after: "Binds when picked up\nTwo-Hand  Staff\n500 Armor\n+65 Stamina\nDurability 120 / 120\nRequires Level 70\nEquip: Increases your dodge rating by 54.\nEquip: Increases expertise rating by 22.\nEquip: Increases attack power by 992 in Cat, Bear, Dire Bear, and Moonkin forms only.",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "High Astromancer Solarian",
                items: [
                    {
                        name: "Solarian's Sapphire",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_gem_14.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases attack power by 70.\nUse: Increases attack power by 300 for 15 sec.\nItem Level 128\nRequires Level 70",
                        rationale: "Add +15 Stamina to ensure it meets the 'Effective Health' requirements for Warriors tanking Morogrim or Kael.",
                        after: "Binds when picked up\nTrinket\n+15 Stamina\nEquip: Increases attack power by 70.\nUse: Increases attack power by 300 for 15 sec.\nItem Level 128\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Wand of the Forgotten Star",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_wand_12.jpg",
                        original: "Binds when picked up\nRanged  Wand\n1.30 Speed\n120 - 200 Arcane Damage\n(123.1 damage per second)\n+10 Intellect\nEquip: Increases damage and healing done by magical spells and effects by up to 22.\nItem Level 128\nRequires Level 70",
                        rationale: "Strip the useless Wand DPS budget; replace with +15 Spell Haste to make it a true BiS for Warlocks.",
                        after: "Binds when picked up\nRanged  Wand\n1.50 Speed\n120 - 200 Arcane Damage\n(106.7 damage per second)\n+10 Intellect\nEquip: Increases casting speed (haste) rating by 15.\nEquip: Increases damage and healing done by magical spells and effects by up to 22.\nItem Level 128\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Etherium Life-Staff",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_staff_54.jpg",
                        original: "Binds when picked up\nTwo-Hand  Staff\n3.20 Speed\n140 - 260 Damage\n(62.5 damage per second)\n+40 Intellect\n+35 Spirit\nEquip: Increases healing done by spells and effects by up to 130.\nItem Level 128\nRequires Level 70",
                        rationale: "Reallocate Spirit budget for Paladin/Shaman utility into MP5 and add a Meta-gem socket.",
                        after: "Binds when picked up\nTwo-Hand  Staff\n3.20 Speed\n140 - 260 Damage\n(62.5 damage per second)\n+40 Intellect\n+35 Stamina\n+15 MP5\nPrismatic Socket\nSocket Bonus: +4 Healing\nEquip: Increases healing done by spells and effects by up to 130.\nItem Level 128\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Void Reaver",
                items: [
                    {
                        name: "Void Star Talisman",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_talisman_08.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases damage and healing done by magical spells and effects by up to 48.\nUse: Increases resistance of your pet by 130 and damage done by your pet by 40 for 30 sec.\nItem Level 128\nRequires Level 70",
                        rationale: "Increase the Pet Stamina/Resist scaling; Warlock pets are too fragile in pre-nerf TK encounters.",
                        after: "Binds when picked up\nTrinket\nEquip: Increases damage and healing done by magical spells and effects by up to 48.\nEquip: Increases your pet's Stamina by 40 and all Resistances by 50.\nItem Level 128\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Warp-Spring Coil",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_trinket_02.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases critical strike rating by 30.\nEquip: Chance on melee or ranged hit to ignore 300 armor for 10 sec.\nItem Level 128\nRequires Level 70",
                        rationale: "Standardize the proc to a flat Armor Penetration stat instead of a chance-on-hit to reduce RNG variance.",
                        after: "Binds when picked up\nTrinket\n+30 Critical Strike Rating\n+120 Armor Penetration\nRed Socket\nSocket Bonus: +2 Strength\nItem Level 128\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Luminescent Rod of the Naaru",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_wand_02.jpg",
                        original: "Binds when picked up\nRanged  Wand\n1.40 Speed\n100 - 180 Fire Damage\n(100.0 damage per second)\n+12 Intellect\nEquip: Increases healing done by spells and effects by up to 26.\nItem Level 128\nRequires Level 70",
                        rationale: "Add a Yellow socket; healing wands are rare and need the flexibility to help reach hit or crit caps.",
                        after: "Binds when picked up\nRanged  Wand\n1.40 Speed\n100 - 180 Fire Damage\n(100.0 damage per second)\n+12 Intellect\nYellow Socket\nSocket Bonus: +2 Healing\nEquip: Increases healing done by spells and effects by up to 26.\nItem Level 128\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            }
        ]
    },
    mh_bt: {
        id: 'mh_bt',
        name: "Hyjal & Black Temple",
        description: "The pinnacle of the Illidari era. Changes focus on weapon speed normalization (2.7/3.0), solving the Expertise starvation for melee, and removing 'dead stats' like Spirit from DPS casters.",
        bosses: [
            {
                name: "Archimonde",
                items: [
                    {
                        name: "Tempest of Chaos",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_109.jpg",
                        original: "Binds when picked up\nMain Hand  Sword\n2.50 Speed\n200 - 380 Damage\n(116.0 damage per second)\n+30 Stamina\n+22 Intellect\nEquip: Increases spell critical strike rating by 24.\nEquip: Increases damage and healing done by magical spells and effects by up to 259.\nItem Level 151\nRequires Level 70",
                        rationale: "Increase the Spell Haste budget to reinforce its status as the definitive caster sword for Sunwell preparation.",
                        after: "Binds when picked up\nMain Hand  Sword\n2.50 Speed\n200 - 380 Damage\n(116.0 damage per second)\n+30 Stamina\n+22 Intellect\nEquip: Increases spell critical strike rating by 24.\nEquip: Increases casting speed (haste) rating by 35.\nEquip: Increases damage and healing done by magical spells and effects by up to 259.\nChance on spell hit: Calls down a Fel Meteor, dealing 450 to 550 Fire damage and increasing your spell haste rating by 200 for 10 sec.\nItem Level 151\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Apostle of Argus",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_staff_62.jpg",
                        original: "Binds when picked up\nTwo-Hand  Staff\n3.20 Speed\n160 - 300 Damage\n(71.9 damage per second)\n+62 Stamina\n+59 Intellect\nEquip: Increases healing done by spells and effects by up to 486.\nEquip: Restores 23 mana per 5 sec.\nItem Level 151\nRequires Level 70",
                        rationale: "Remove Spirit and Stamina redundancy; replace with static Spell Haste and a Meta Socket for healer throughput.",
                        after: "Binds when picked up\nTwo-Hand  Staff\n3.20 Speed\n160 - 300 Damage\n(71.9 damage per second)\n+62 Stamina\n+59 Intellect\nPrismatic Socket\nSocket Bonus: +4 Healing\nEquip: Increases healing done by spells and effects by up to 486.\nEquip: Increases casting speed (haste) rating by 30.\nEquip: Restores 23 mana per 5 sec.\nItem Level 151\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Cataclysm's Edge",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_69.jpg",
                        original: "Binds when picked up\nTwo-Hand  Sword\n3.50 Speed\n480 - 720 Damage\n(171.4 damage per second)\n+75 Strength\n+50 Stamina\nEquip: Increases critical strike rating by 50.\nEquip: Your attacks ignore 335 of your opponent's armor.\nItem Level 151\nRequires Level 70",
                        rationale: "Speed normalization to 3.60; increase the Armor Penetration budget to make it a viable Arms Warrior alternative to Apolyon.",
                        after: "Binds when picked up\nTwo-Hand  Sword\n3.60 Speed\n480 - 720 Damage\n(166.7 damage per second)\n+75 Strength\n+50 Stamina\nEquip: Increases critical strike rating by 50.\nEquip: Increases your armor penetration rating by 120.\nItem Level 151\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Bristleblitz Striker",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_bow_30.jpg",
                        original: "Binds when picked up\nRanged  Bow\n3.00 Speed\n200 - 370 Damage\n(95.3 damage per second)\n+25 Agility\nEquip: Increases attack power by 34.\nEquip: Increases critical strike rating by 20.\nItem Level 151\nRequires Level 70",
                        rationale: "Normalization to 3.00 speed; add +15 Armor Penetration to support physical hunter scaling in Tier 6.",
                        after: "Binds when picked up\nRanged  Bow\n3.00 Speed\n200 - 370 Damage\n(95.3 damage per second)\n+25 Agility\n+18 Stamina\nEquip: Increases attack power by 34.\nEquip: Increases critical strike rating by 20.\nEquip: Increases your armor penetration rating by 15.\nItem Level 151\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Illidan Stormrage",
                items: [
                    {
                        name: "Warglaive of Azzinoth",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_glaive_01.jpg",
                        original: "Binds when picked up\nMain Hand  Sword\n2.80 Speed\n214 - 398 Damage\n(109.3 damage per second)\n+20 Agility\n+20 Stamina\nSet: The Twin Blades of Azzinoth (0/2)\n(2) Set: Your melee attacks have a chance to increase your haste rating by 450 for 10 sec.\n(2) Set: Increases attack power by 200 when fighting Demons.\nItem Level 156\nRequires Level 70",
                        rationale: "Perfect lore item; add +20 Expertise Rating to the 2-set bonus to solve melee scaling against high-armor bosses.",
                        after: "Binds when picked up\nMain Hand  Sword\n2.80 Speed\n214 - 398 Damage\n(109.3 damage per second)\n+20 Agility\n+20 Stamina\nSet: The Twin Blades of Azzinoth (0/2)\n(2) Set: Increases expertise rating by 20.\n(2) Set: Your melee attacks have a chance to increase your haste rating by 450 for 10 sec.\n(2) Set: Increases attack power by 200 when fighting Demons.\nItem Level 156\nRequires Level 70",
                        quality: "Legendary"
                    },
                    {
                        name: "Bulwark of Azzinoth",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shield_32.jpg",
                        original: "Binds when picked up\nOff Hand  Shield\n6000 Armor\n185 Block\n+40 Stamina\nDurability 120 / 120\nEquip: Increases defense rating by 30.\nEquip: 2% Chance on being hit to increase armor by 2000 for 10 sec.\nItem Level 151\nRequires Level 70",
                        rationale: "Increase the Shield Block Value significantly; it should be the ultimate \"Effective Health\" tool for Illidan tanks.",
                        after: "Binds when picked up\nOff Hand  Shield\n6000 Armor\n185 Block\n+55 Stamina\nBlue Socket\nSocket Bonus: +3 Stamina\nDurability 120 / 120\nEquip: Increases defense rating by 30.\nEquip: 5% Chance on being hit to increase armor by 2000 for 10 sec.\nItem Level 151\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Zhar'doom, Greatstaff of the Devourer",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_staff_63.jpg",
                        original: "Binds when picked up\nTwo-Hand  Staff\n3.20 Speed\n160 - 300 Damage\n(71.9 damage per second)\n+70 Stamina\n+65 Intellect\nEquip: Increases spell critical strike rating by 50.\nEquip: Increases damage and healing done by magical spells and effects by up to 259.\nItem Level 151\nRequires Level 70",
                        rationale: "Add a Red socket; the Felhunter-themed staff needs customization to allow Warlocks to reach hit-caps without downgrading.",
                        after: "Binds when picked up\nTwo-Hand  Staff\n3.20 Speed\n160 - 300 Damage\n(71.9 damage per second)\n+70 Stamina\n+65 Intellect\nRed Socket\nSocket Bonus: +4 Spell Damage\nEquip: Increases spell critical strike rating by 50.\nEquip: Increases damage and healing done by magical spells and effects by up to 259.\nItem Level 151\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Cursed Vision of Sargeras",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_mask_10.jpg",
                        original: "Binds when picked up\nHead  Leather\n400 Armor\n+40 Stamina\n+38 Agility\nMeta Socket\nYellow Socket\nSocket Bonus: +4 Attack Power\nDurability 60 / 60\nEquip: Increases hit rating by 20.\nEquip: Increases critical strike rating by 30.\nEquip: Increases attack power by 80.\nItem Level 151\nRequires Level 70",
                        rationale: "Perfection; increase Agility slightly to better scale with late-expansion melee critical strike requirements.",
                        after: "Binds when picked up\nHead  Leather\n400 Armor\n+42 Stamina\n+42 Agility\nMeta Socket\nYellow Socket\nSocket Bonus: +4 Attack Power\nDurability 60 / 60\nEquip: Increases hit rating by 25.\nEquip: Increases critical strike rating by 30.\nEquip: Increases attack power by 84.\nItem Level 151\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "The Skull of Gul'dan",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_orb_03.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases spell hit rating by 25.\nEquip: Increases damage and healing done by magical spells and effects by up to 55.\nUse: Increases casting speed (haste) rating by 175 for 20 sec.\nItem Level 151\nRequires Level 70",
                        rationale: "Increase the duration of the Haste proc to 25 seconds to align with the 1.0s GCD floor for Arcane Mages.",
                        after: "Binds when picked up\nTrinket\nEquip: Increases spell hit rating by 25.\nEquip: Increases damage and healing done by magical spells and effects by up to 55.\nUse: Increases casting speed (haste) rating by 175 for 25 sec.\nItem Level 151\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Crystal Spire of Karabor",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_mace_56.jpg",
                        original: "Binds when picked up\nMain Hand  Mace\n1.80 Speed\n30 - 120 Damage\n(41.7 damage per second)\n+22 Stamina\n+20 Intellect\nEquip: Increases healing done by spells and effects by up to 486.\nEquip: Your direct healing spells heal the target for an additional 180 to 220.\nItem Level 151\nRequires Level 70",
                        rationale: "Add static MP5 to the proc; healers in Black Temple struggle with the \"Shadowmoon\" mana-drain mechanics.",
                        after: "Binds when picked up\nMain Hand  Mace\n1.80 Speed\n30 - 120 Damage\n(41.7 damage per second)\n+22 Stamina\n+20 Intellect\nEquip: Restores 12 mana per 5 sec.\nEquip: Increases healing done by spells and effects by up to 486.\nEquip: Your direct healing spells heal the target for an additional 200 health. If the target is below 50% health, this effect is doubled.\nItem Level 151\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Black Bow of the Betrayer",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_bow_31.jpg",
                        original: "Binds when picked up\nRanged  Bow\n3.00 Speed\n200 - 370 Damage\n(95.0 damage per second)\n+28 Stamina\n+20 Agility\nEquip: Increases attack power by 40.\nEquip: Your ranged attacks restore 8 mana.\nItem Level 151\nRequires Level 70",
                        rationale: "Perfect BM Hunter bow; increase the mana-return per hit to better support long Archimonde/Illidan encounters.",
                        after: "Binds when picked up\nRanged  Bow\n3.00 Speed\n200 - 370 Damage\n(95.0 damage per second)\n+28 Stamina\n+20 Agility\nEquip: Increases attack power by 40.\nEquip: Your ranged attacks restore 2 focus.\nItem Level 151\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "High Warlord Naj'entus",
                items: [
                    {
                        name: "Rising Tide",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_axe_63.jpg",
                        original: "Binds when picked up\nOne-Hand  Axe\n2.60 Speed\n200 - 380 Damage\n(111.5 damage per second)\n+20 Stamina\n+18 Agility\nEquip: Increases attack power by 38.\nEquip: Increases critical strike rating by 20.\nItem Level 141\nRequires Level 70",
                        rationale: "Slower speed (2.70) to improve Enhancement Shaman Stormstrike coefficients and Fury Warrior Whirlwind scaling.",
                        after: "Binds when picked up\nOne-Hand  Axe\n2.70 Speed\n200 - 380 Damage\n(107.4 damage per second)\n+20 Stamina\n+18 Strength\nEquip: Increases attack power by 38.\nEquip: Increases critical strike rating by 20.\nEquip: Increases haste rating by 12.\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Slippers of the Seacaller",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_boots_cloth_16.jpg",
                        original: "Binds when picked up\nFeet  Cloth\n150 Armor\n+30 Stamina\n+28 Intellect\n+20 Spirit\nDurability 40 / 40\nEquip: Increases spell critical strike rating by 25.\nEquip: Increases damage and healing done by magical spells and effects by up to 45.\nItem Level 141\nRequires Level 70",
                        rationale: "Strip Spirit; replace with Spell Haste to make them the true Phase 3 BiS for Mages and Warlocks.",
                        after: "Binds when picked up\nFeet  Cloth\n150 Armor\n+30 Stamina\n+28 Intellect\nDurability 40 / 40\nEquip: Increases spell critical strike rating by 25.\nEquip: Increases casting speed (haste) rating by 22.\nEquip: Increases damage and healing done by magical spells and effects by up to 56.\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "The Illidari Council",
                items: [
                    {
                        name: "Madness of the Betrayer",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_trinket_02.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases hit rating by 20.\nEquip: Increases attack power by 84.\nEquip: Chance on hit to ignore 300 armor for 10 sec.\nItem Level 151\nRequires Level 70",
                        rationale: "Standardize the proc into static Armor Penetration to reduce RNG-variance in high-end physical rotations.",
                        after: "Binds when picked up\nTrinket\nEquip: Increases hit rating by 20.\nEquip: Increases attack power by 84.\nEquip: Increases your armor penetration rating by 140.\nItem Level 151\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Supremus",
                items: [
                    {
                        name: "Syphon of the Nathrezim",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_mace_49.jpg",
                        original: "Binds when picked up\nMain Hand  Mace\n2.80 Speed\n200 - 380 Damage\n(103.6 damage per second)\n+30 Stamina\nEquip: Increases attack power by 50.\nChance on hit: Steals 100 life from target.\nItem Level 141\nRequires Level 70",
                        rationale: "Re-architect as a \"One-Handed\" weapon; the current 2.80 speed is excellent, but \"Main-Hand\" tags restrict hybrid builds.",
                        after: "Binds when picked up\nOne-Hand  Mace\n2.80 Speed\n200 - 380 Damage\n(103.6 damage per second)\n+30 Stamina\nEquip: Increases attack power by 50.\nChance on hit: Steals 100 life from target.\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    },
                    {
                        name: "Legionkiller",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_crossbow_11.jpg",
                        original: "Binds when picked up\nRanged  Crossbow\n2.90 Speed\n200 - 370 Damage\n(98.3 damage per second)\n+25 Agility\n+22 Stamina\nEquip: Increases attack power by 40.\nEquip: Increases critical strike rating by 15.\nItem Level 141\nRequires Level 70",
                        rationale: "Align speed with the BM Hunter 3.00 rotation to prevent rotation clipping during Rapid Fire.",
                        after: "Binds when picked up\nRanged  Crossbow\n3.00 Speed\n200 - 370 Damage\n(95.0 damage per second)\n+25 Agility\n+22 Stamina\nEquip: Increases attack power by 40.\nEquip: Increases critical strike rating by 15.\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Mother Shahraz",
                items: [
                    {
                        name: "Pauldrons of the Forgotten Vanquisher",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_66.jpg",
                        original: "Binds when picked up\nTier 6 Shoulder Token\nClasses: Rogue, Mage, Druid\nItem Level 141\nRequires Level 70",
                        rationale: "Restructure to \"Universal Tier Fragment\" to eliminate the social friction of 25-man groups vendoring dead tokens.",
                        after: "Binds when picked up\nToken: High-Astromancer Armor Fragment (Redeemable by any Class)\nUse: Creates a class-specific T6 Shoulder piece.\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            },
            {
                name: "Reliquary of Souls",
                items: [
                    {
                        name: "Torch of the Damned",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_mace_53.jpg",
                        original: "Binds when picked up\nTwo-Hand  Mace\n3.80 Speed\n480 - 720 Damage\n(157.9 damage per second)\n+50 Strength\n+45 Stamina\nEquip: Increases critical strike rating by 38.\nEquip: Increases haste rating by 38.\nItem Level 141\nRequires Level 70",
                        rationale: "Perfect Retribution/Arms stats; increase weapon damage range by 5% to compete with Sunwell blue-tier items.",
                        after: "Binds when picked up\nTwo-Hand  Mace\n3.80 Speed\n480 - 720 Damage\n(157.9 damage per second)\n+50 Strength\n+45 Stamina\nEquip: Increases critical strike rating by 38.\nEquip: Increases haste rating by 38.\n(Weapon Damage increased by 10% hidden)\nItem Level 141\nRequires Level 70",
                        quality: "Epic"
                    }
                ]
            }
        ]
    },
    tier5_5: {
        id: 'tier5_5',
        name: "The Abyssal Maw",
        description: "Venture into the Elemental Plane of Water to confront the naga and their master, Neptulon the Tidehunter.",
        bosses: [
            {
                name: "L'ghorek the Ancient",
                items: [
                    {
                        name: "Bioluminescent Spire",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_staff_crystal_01.jpg",
                        original: "Binds when picked up\nTwo-Hand  Staff\n+60 Stamina\n+70 Intellect\n+50 Spirit\nEquip: Increases damage and healing done by magical spells and effects by up to 255.\nChance on hit: Roots the target in place.",
                        rationale: "Reallocate 50 Spirit into +35 Spell Haste to support the Tier 5 Arcane/Resto meta.",
                        after: "Binds when picked up\nTwo-Hand  Staff\n+60 Stamina\n+70 Intellect\nEquip: Increases casting speed (haste) rating by 35.\nEquip: Increases damage and healing done by magical spells and effects by up to 255.\nChance on hit: Roots the target in place.",
                        quality: "Epic"
                    },
                    {
                        name: "Membrane of the Ancient",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_belt_29.jpg",
                        original: "Binds when picked up\nWaist  Cloth\n+26 Intellect\n+24 Stamina\nEquip: Increases spell hit rating by 22.\nEquip: Increases damage and healing done by magical spells and effects by up to 38.",
                        rationale: "Add 2 Yellow Sockets to solve Warlock hit-cap friction before BT.",
                        after: "Binds when picked up\nWaist  Cloth\n+26 Intellect\n+24 Stamina\nYellow Socket\nYellow Socket\nSocket Bonus: +4 Spell Hit\nEquip: Increases spell hit rating by 22.\nEquip: Increases damage and healing done by magical spells and effects by up to 38.",
                        quality: "Epic"
                    },
                    {
                        name: "Parasitic Bindings",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_12.jpg",
                        original: "Binds when picked up\nWrist  Leather\n+22 Agility\n+20 Stamina\nEquip: Increases attack power by 45.\nEquip: Increases haste rating by 18.",
                        rationale: "Perfect Haste-stick; add 1 Red Socket for Agility scaling.",
                        after: "Binds when picked up\nWrist  Leather\n+22 Agility\n+20 Stamina\nRed Socket\nSocket Bonus: +2 Agility\nEquip: Increases attack power by 45.\nEquip: Increases haste rating by 18.",
                        quality: "Epic"
                    },
                    {
                        name: "Heart of the Abyssal Demigod",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_organ_03.jpg",
                        original: "Binds when picked up\nTrinket\nEquip: Increases damage and healing done by magical spells and effects by up to 55.\nEquip: Your spells have a chance to increase your haste rating by 200 for 10 sec.",
                        rationale: "Increase Proc duration to 15s to match Tsunami Talisman's restoration logic.",
                        after: "Binds when picked up\nTrinket\nEquip: Increases damage and healing done by magical spells and effects by up to 55.\nEquip: Your spells have a chance to increase your haste rating by 200 for 15 sec.",
                        quality: "Epic"
                    },
                    {
                        name: "Tentacle-Weave Cord",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_belt_13.jpg",
                        quality: "Epic",
                        original: null,
                        after: "Binds when picked up\nWaist  Cloth\n+28 Stamina\n+26 Intellect\n+22 Spirit\nBlue Socket\nYellow Socket\nSocket Bonus: +4 Spell Power\nEquip: Increases damage and healing done by magical spells and effects by up to 45.",
                        rationale: "A high-spirit cloth belt optimized for Arcane Mages and Holy Priests."
                    },
                    {
                        name: "Mucus-Coated Stompers",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_boots_cloth_05.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nFeet  Leather\n+30 Agility\n+28 Stamina\nYellow Socket\nBlue Socket\nSocket Bonus: +3 Hit Rating\nEquip: Increases attack power by 56.\nEquip: Increases hit rating by 18.",
                        rationale: "Leather boots filling the hit-rating gap for Rogues and Feral Druids."
                    },
                    {
                        name: "L'ghorek's Digesting Acid",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_potion_22.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nHeld In Off-hand\n+22 Stamina\n+20 Intellect\nEquip: Increases spell critical strike rating by 24.\nEquip: Increases damage and healing done by magical spells and effects by up to 38.",
                        rationale: "A Crit/SP off-hand for Elemental Shamans and Balance Druids."
                    },
                    {
                        name: "Ancient's Resonating Gland",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_organ_08.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nTrinket\nEquip: Increases healing done by spells and effects by up to 105.\nUse: Your next direct heal consumes the gland, restoring 800 mana. (2 Min Cooldown)",
                        rationale: "An on-use mana return trinket designed for burst-healing phases."
                    },
                    {
                        name: "Spaulders of the Living Host",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_29.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nShoulder  Plate\n+35 Strength\n+45 Stamina\nRed Socket\nYellow Socket\nSocket Bonus: +3 Parry Rating\nEquip: Increases defense rating by 25.\nEquip: Increases parry rating by 20.",
                        rationale: "Avoidance-heavy plate shoulders for Paladins and Warriors."
                    },
                    {
                        name: "Ring of the Symbiote",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_45.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nFinger\n+28 Agility\n+30 Stamina\nEquip: Increases attack power by 54.\nEquip: Increases expertise rating by 18.",
                        rationale: "Expertise ring for melee classes."
                    }
                ]
            },
            {
                name: "Lady Naz'jar",
                items: [
                    {
                        name: "Gauntlets of the Deep Guard",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_gauntlets_28.jpg",
                        original: "Binds when picked up\nHands  Plate\n1000 Armor\n+45 Strength\n+55 Stamina\nBlue Socket\nYellow Socket\nEquip: Increases defense rating by 30.\nEquip: Increases shield block value by 45.",
                        rationale: "Increase Strength to +50 to compete with iLvl 139 budget.",
                        after: "Binds when picked up\nHands  Plate\n1000 Armor\n+50 Strength\n+55 Stamina\nBlue Socket\nYellow Socket\nSocket Bonus: +3 Defense\nEquip: Increases defense rating by 30.\nEquip: Increases shield block value by 45.",
                        quality: "Epic"
                    },
                    {
                        name: "Ring of the Ancient Shell",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_59.jpg",
                        original: "Binds when picked up\nFinger\n+28 Intellect\n+30 Stamina\nEquip: Restores 14 mana per 5 sec.\nEquip: Increases healing done by spells and effects by up to 68.",
                        rationale: "Perfect healer ring; no changes needed as it purges Spirit correctly.",
                        after: "Binds when picked up\nFinger\n+28 Intellect\n+30 Stamina\nEquip: Restores 14 mana per 5 sec.\nEquip: Increases healing done by spells and effects by up to 68.",
                        quality: "Epic"
                    },
                    {
                        name: "Mantle of the Swirling Current",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_26.jpg",
                        original: "Binds when picked up\nShoulder  Mail\n+28 Agility\n+25 Stamina\n+18 Intellect\nEquip: Increases expertise rating by 22.",
                        rationale: "High-value Shaman piece; maintain Expertise as the core mechanical engine. Added sockets.",
                        after: "Binds when picked up\nShoulder  Mail\n+28 Agility\n+25 Stamina\n+18 Intellect\nRed Socket\nBlue Socket\nSocket Bonus: +3 Agility\nEquip: Increases expertise rating by 22.",
                        quality: "Epic"
                    },
                    {
                        name: "Naz'jar's Mutated Rapier",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_47.jpg",
                        original: "Binds when picked up\nOne-Hand  Sword\n2.70 Speed\n+22 Agility\nEquip: Increases attack power by 48.\nEquip: Increases hit rating by 15.",
                        rationale: "Maintain 2.70 speed to maximize Stormstrike coefficients.",
                        after: "Binds when picked up\nOne-Hand  Sword\n2.70 Speed\n210 - 395 Damage\n+22 Agility\nEquip: Increases attack power by 48.\nEquip: Increases hit rating by 15.",
                        quality: "Epic"
                    },
                    {
                        name: "Scales of the Highborn",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_chest_chain_11.jpg",
                        quality: "Epic",
                        original: null,
                        after: "Binds when picked up\nChest  Mail\n+40 Agility\n+38 Stamina\n+28 Intellect\nRed Socket\nRed Socket\nBlue Socket\nSocket Bonus: +6 Attack Power\nEquip: Increases attack power by 80.",
                        rationale: "Premium Hunter/Enhancement chest with high agility and sockets."
                    },
                    {
                        name: "Sash of the Deep Currents",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_belt_12.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nWaist  Plate\n+28 Strength\n+45 Stamina\nBlue Socket\nYellow Socket\nSocket Bonus: +3 Defense Rating\nEquip: Increases defense rating by 24.",
                        rationale: "Plate tanking belt with solid stamina and sockets for flexibility."
                    },
                    {
                        name: "Storm-Caller's Loop",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_68.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nFinger\n+22 Intellect\n+20 Stamina\nEquip: Increases spell critical strike rating by 22.\nEquip: Increases damage and healing done by magical spells and effects by up to 34.",
                        rationale: "Standard caster ring with a focus on Crit for Fire Mages/Destro Warlocks."
                    },
                    {
                        name: "Tide-Hunter's Greatcloak",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_cape_20.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nBack\n+22 Agility\n+20 Stamina\nEquip: Increases attack power by 48.\nEquip: Increases hit rating by 15.",
                        rationale: "Physical DPS cloak with a good mix of AP and Hit."
                    },
                    {
                        name: "Naz'jar's Fused Coral Helm",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_helmet_14.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nHead  Leather\n+35 Stamina\n+32 Intellect\nMeta Socket\nYellow Socket\nSocket Bonus: +4 Spell Hit\nEquip: Increases damage and healing done by magical spells and effects by up to 52.",
                        rationale: "Boomkin/Resto Druid helm with a Meta socket for customization."
                    },
                    {
                        name: "Wand of the Abyssal Witch",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_wand_08.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nRanged  Wand\n+15 Intellect\n+12 Stamina\nEquip: Increases damage and healing done by magical spells and effects by up to 28.\nEquip: Restores 6 mana per 5 sec.",
                        rationale: "A balanced wand for healers and casters prioritizing longevity."
                    }
                ]
            },
            {
                name: "Erunak Stonespeaker (Mind Controlled)",
                items: [
                    {
                        name: "The Mind-Squid's Tentacle",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_wand_12.jpg",
                        original: "Binds when picked up\nRanged  Wand\n+16 Intellect\n+18 Stamina\nEquip: Increases casting speed (haste) rating by 22.\nEquip: Increases damage and healing done by magical spells and effects by up to 34.",
                        rationale: "22 Haste is massive for iLvl 139; maintain budget focus on Haste over SP.",
                        after: "Binds when picked up\nRanged  Wand\n+16 Intellect\n+18 Stamina\nEquip: Increases casting speed (haste) rating by 22.\nEquip: Increases damage and healing done by magical spells and effects by up to 34.",
                        quality: "Epic"
                    },
                    {
                        name: "Bulwark of Obsidian Walls",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shield_23.jpg",
                        original: "Binds when picked up\nOff Hand  Shield\n+35 Stamina\nEquip: Increases defense rating by 22.\nEquip: Increases shield block rating by 25.",
                        rationale: "Increase Block Value to +55 to mitigate \"Crushing Blow\" variance.",
                        after: "Binds when picked up\nOff Hand  Shield\n+35 Stamina\nEquip: Increases defense rating by 22.\nEquip: Increases shield block rating by 25.\nEquip: Increases shield block value by 55.",
                        quality: "Epic"
                    },
                    {
                        name: "Totem of the Stonespeaker",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_relics_totemoflife.jpg",
                        original: "Binds when picked up\nRelic  Totem\nEquip: Increases the base damage of your Lightning Bolt and Chain Lightning by 25.",
                        rationale: "Re-architect to include +25 MP5 while in water-based zones (flavor budget).",
                        after: "Binds when picked up\nRelic  Totem\nEquip: Increases the base damage of your Lightning Bolt and Chain Lightning by 25.\nEquip: Restores 25 mana per 5 sec while swimming or submerged in water.",
                        quality: "Epic"
                    },
                    {
                        name: "Stonespeaker's Casque",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_helmet_09.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nHead  Mail\n+38 Agility\n+35 Stamina\n+22 Intellect\nMeta Socket\nRed Socket\nSocket Bonus: +4 Agility\nEquip: Increases attack power by 72.\nEquip: Increases armor penetration rating by 15.",
                        rationale: "Enhancement/Hunter helm with a meta socket and armor pen."
                    },
                    {
                        name: "Earth-Mender's Leggings",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_pants_mail_15.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nLegs  Mail\n+38 Intellect\n+35 Stamina\n+25 Spirit\nRed Socket\nBlue Socket\nYellow Socket\nSocket Bonus: +6 Healing\nEquip: Restores 12 mana per 5 sec.\nEquip: Increases healing done by spells and effects by up to 88.",
                        rationale: "Premium Restoration Shaman legs with excellent socket layout."
                    },
                    {
                        name: "Obsidian-Fleeced Cape",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_cape_16.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nBack\n150 Armor\n+22 Strength\n+30 Stamina\nEquip: Increases defense rating by 18.\nEquip: Increases shield block value by 24.",
                        rationale: "Tanking cloak with block value, ideal for Paladins and Warriors."
                    },
                    {
                        name: "Unstable Core of the Depths",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_gem_pearl_04.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nTrinket\nEquip: Increases your spell critical strike rating by 35.\nChance on Spell Critical Hit: Grants 120 Spell Damage for 10 sec.",
                        rationale: "A proc-based trinket for crit-heavy casters."
                    },
                    {
                        name: "Ring of the Crashing Wave",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_56.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nFinger\n+24 Stamina\n+22 Intellect\nEquip: Increases spell haste rating by 28.\nEquip: Increases damage and healing done by magical spells and effects by up to 34.",
                        rationale: "Haste/Spell Power ring for casters."
                    },
                    {
                        name: "Gauntlets of the Stone Grip",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_gauntlets_10.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nHands  Plate\n+35 Strength\n+32 Stamina\nRed Socket\nYellow Socket\nSocket Bonus: +3 Crit Rating\nEquip: Increases critical strike rating by 24.",
                        rationale: "DPS plate gloves with sockets."
                    }
                ]
            },
            {
                name: "Ozumat & The Kraken",
                items: [
                    {
                        name: "Trident of the Tidal Throne",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_spear_06.jpg",
                        original: "Binds when picked up\nTwo-Hand  Polearm\n3.60 Speed\n+65 Agility\n+60 Stamina\nEquip: Increases attack power by 140.",
                        rationale: "Perfect BM rotation speed (3.60); increase Tidal Wave proc damage to 800.",
                        after: "Binds when picked up\nTwo-Hand  Polearm\n3.60 Speed\n520 - 785 Damage\n+65 Agility\n+60 Stamina\nEquip: Increases attack power by 140.\nChance on hit: Blasts the target with a Tidal Wave for 800 Frost damage.",
                        quality: "Epic"
                    },
                    {
                        name: "Ring of the Crushing Depths",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_68.jpg",
                        original: "Binds when picked up\nFinger\n+24 Agility\n+22 Stamina\nEquip: Increases attack power by 48.\nEquip: Increases your armor penetration rating by 140.",
                        rationale: "Maintain static Armor Penetration as the first major ring to support T6 scaling.",
                        after: "Binds when picked up\nFinger\n+24 Agility\n+22 Stamina\nEquip: Increases attack power by 48.\nEquip: Increases your armor penetration rating by 140.",
                        quality: "Epic"
                    },
                    {
                        name: "Carapace of the Ancient Kraken",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_shell_01.jpg",
                        original: "Binds when picked up\nTrinket\n+57 Stamina\nUse: Increases shield block value by 1500 for 20 sec. (2 Min Cooldown)",
                        rationale: "Exceptional tanking design; reduce Cooldown to 1.5 min for better alignment with boss cycles.",
                        after: "Binds when picked up\nTrinket\n+57 Stamina\nUse: Increases shield block value by 1500 for 20 sec. (1.5 Min Cooldown)",
                        quality: "Epic"
                    },
                    {
                        name: "Beak-Crusher of the Dark Below",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_axe_25.jpg",
                        original: "Binds when picked up\nTwo-Hand  Axe\n3.80 Speed\n+62 Strength\n+58 Stamina\nEquip: Increases critical strike rating by 45.",
                        rationale: "Maintain 3.80 speed to maximize Mortal Strike/Crusader Strike scaling.",
                        after: "Binds when picked up\nTwo-Hand  Axe\n3.80 Speed\n545 - 820 Damage\n+62 Strength\n+58 Stamina\nEquip: Increases critical strike rating by 45.",
                        quality: "Epic"
                    },
                    {
                        name: "Scepter of the Tidehunter",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_mace_32.jpg",
                        original: "Binds when picked up\nMain Hand  Mace\n+75 Intellect\n+55 Stamina\nEquip: Increases casting speed (haste) rating by 42.\nEquip: Increases damage and healing done by magical spells and effects by up to 245.",
                        rationale: "Essential for Druid 113-Haste breakpoint; add 1 Blue Socket for mana sustain.",
                        after: "Binds when picked up\nMain Hand  Mace\n+75 Intellect\n+55 Stamina\nBlue Socket\nSocket Bonus: +2 Spell Haste\nEquip: Increases casting speed (haste) rating by 42.\nEquip: Increases damage and healing done by magical spells and effects by up to 245.",
                        quality: "Epic"
                    },
                    {
                        name: "Ozumat's Slime-Encrusted Scale",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_monster_scales_12.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nTrinket\nEquip: Increases attack power by 85.\nUse: Spew slime at the target, dealing 250 Nature damage every 2 sec for 20 sec and reducing their armor by 400. (2 Min Cooldown)",
                        rationale: "Armor pen debuff trinket for physical DPS."
                    },
                    {
                        name: "Kraken-Hide Legguards",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_pants_leather_26.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nLegs  Leather\n+42 Agility\n+45 Stamina\nRed Socket\nRed Socket\nBlue Socket\nSocket Bonus: +4 Agility\nEquip: Increases attack power by 92.\nEquip: Increases hit rating by 22.",
                        rationale: "Best-in-slot leather legs for Feral Druids and Rogues."
                    },
                    {
                        name: "Girdle of the Ancient One",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_belt_18.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nWaist  Mail\n+28 Intellect\n+30 Stamina\n+22 MP5\nRed Socket\nBlue Socket\nSocket Bonus: +3 MP5\nEquip: Increases healing done by spells and effects by up to 68.",
                        rationale: "Restoration Shaman belt with heavy MP5."
                    },
                    {
                        name: "Tentacle of the Doom-Beast",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_shortblade_68.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nOne-Hand  Dagger\n1.40 Speed\n105 - 198 Damage\n+24 Stamina\n+22 Intellect\nEquip: Increases spell critical strike rating by 22.\nEquip: Increases damage and healing done by magical spells and effects by up to 155.",
                        rationale: "Fast caster dagger for mages/warlocks."
                    },
                    {
                        name: "Ink-Stained Robes",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_chest_cloth_08.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nChest  Cloth\n+45 Stamina\n+42 Intellect\nYellow Socket\nYellow Socket\nBlue Socket\nSocket Bonus: +5 Spell Haste\nEquip: Increases casting speed (haste) rating by 40.\nEquip: Increases damage and healing done by magical spells and effects by up to 68.",
                        rationale: "High-haste cloth chest for Arcane Mages."
                    },
                    {
                        name: "The Tidal Buster",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_rifle_08.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nRanged  Gun\n2.80 Speed\n185 - 345 Damage\n+24 Agility\n+22 Stamina\nEquip: Increases attack power by 42.\nEquip: Increases critical strike rating by 18.",
                        rationale: "Slow gun for Hunters."
                    }
                ]
            }
        ]
    },
    tier5_5_qd: {
        id: 'tier5_5_qd',
        name: 'The Siege of Quel\'Danil',
        description: 'Defend the Hinterlands high elf lodge from a massive troll incursion led by the Vilebranch and Witherbark tribes.',
        bosses: [
            {
                name: 'Warlord Gorefang',
                items: [
                    {
                        name: 'Wildhammer \'Diplomacy\' Adjuster',
                        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_mace_45.jpg',
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nOne-Hand  Mace\n2.70 Speed\n215 - 400 Damage\n+30 Agility\n+25 Stamina\nEquip: Increases critical strike rating by 24.\nEquip: Increases attack power by 48.",
                        rationale: 'A slow off-hand mace designed for Enhancement Shamans and Combat Rogues seeking higher weapon damage.'
                    },
                    {
                        name: 'Gorefang\'s Tusk',
                        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_weapon_shortblade_23.jpg',
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nOne-Hand  Dagger\n1.80 Speed\n135 - 255 Damage\n+25 Agility\n+30 Stamina\nEquip: Increases attack power by 50.\nEquip: Increases your armor penetration rating by 120.\nChance on hit: Refunds 10 Energy.",
                        rationale: 'A specialized dagger for Mutilate Rogues offering sustain and armor penetration.'
                    },
                    {
                        name: "Legplates of the Gorefang-Hide",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_pants_leather_12.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nLegs  Leather\n+32 Agility\n+30 Stamina\nRed Socket\nRed Socket\nYellow Socket\nSocket Bonus: +4 Agility\nEquip: Increases critical strike rating by 25.\nEquip: Increases your armor penetration rating by 115.",
                        rationale: 'Aggressively stated leather legs focusing on raw physical damage output.'
                    },
                    {
                        name: "Zul'Jin's Spare Eye",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_gem_opal_01.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nTrinket\nEquip: Increases hit rating by 35.\nChance on hit: Increases your haste rating by 225 for 10 sec.",
                        rationale: "Classic DST-style trinket for melee."
                    },
                    {
                        name: "Vilebranch Soul-Eater",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_26.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nTwo-Hand  Sword\n3.50 Speed\n505 - 760 Damage\n+52 Strength\n+48 Stamina\nEquip: Increases critical strike rating by 42.\nEquip: Increases attack power by 95.",
                        rationale: "Generic but powerful 2H sword for entry-level raiders."
                    },
                    {
                        name: "Treads of the Blood-Letter",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_boots_plate_09.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nFeet  Plate\n+30 Strength\n+28 Stamina\nRed Socket\nYellow Socket\nSocket Bonus: +3 Crit Rating\nEquip: Increases critical strike rating by 22.",
                        rationale: "Offensive plate boots with sockets."
                    },
                    {
                        name: "Amulet of the Witherbark",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_26.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nNeck\n+22 Agility\n+20 Stamina\n+18 Intellect\nEquip: Increases attack power by 42.\nEquip: Increases armor penetration rating by 15.",
                        rationale: "Hunter/Enhancement neck with ArP."
                    },
                    {
                        name: "Gorefang's Ritual Bands",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_11.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nWrist  Mail\n+20 Intellect\n+22 Stamina\n+15 MP5\nEquip: Increases healing done by spells and effects by up to 48.",
                        rationale: "Standard restoration mail bracers."
                    },
                    {
                        name: "Totem of the Savage Hunt",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_relics_totemoflife.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nRelic  Totem\nEquip: Your Stormstrike ability grants you 40 Attack Power for 10 sec. Stacks up to 3 times.",
                        rationale: "Stacking AP buff for Enhancement shamans to encourage consistent rotation."
                    }
                ]
            },
            {
                name: 'High Priestess Lyandra',
                items: [
                    {
                        name: 'Robes of the Corrupted Runestone',
                        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_cloth_23.jpg',
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nChest  Cloth\n+40 Intellect\n+40 Stamina\n+30 Spirit\nEquip: Increases casting speed (haste) rating by 35.\nEquip: Increases damage and healing done by magical spells and effects by up to 72.",
                        rationale: 'Tailored for Fire Mages and Destruction Warlocks needing haste and spirit for sustain.'
                    },
                    {
                        name: 'Lyandra\'s Greatstaff of Overloading',
                        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_staff_23.jpg',
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nTwo-Hand  Staff\n+70 Intellect\n+65 Stamina\nEquip: Increases casting speed (haste) rating by 45.\nEquip: Increases damage and healing done by magical spells and effects by up to 245.",
                        rationale: 'A massive stat stick for casters who prefer raw throughput over Hit rating.'
                    },
                    {
                        name: 'Choker of Ley-Line Flux',
                        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_22.jpg',
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nNeck\n+22 Intellect\n+20 Stamina\nEquip: Restores 18 mana per 5 sec.\nEquip: Increases healing done by spells and effects by up to 62.",
                        rationale: 'A mana-regeneration focused neck for healers in long encounters.'
                    },
                    {
                        name: "Cowl of the Highborne Magi",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_helmet_53.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nHead  Cloth\n+38 Intellect\n+40 Stamina\nMeta Socket\nRed Socket\nSocket Bonus: +5 Spell Damage\nEquip: Increases spell critical strike rating by 28.\nEquip: Increases damage and healing done by magical spells and effects by up to 62.",
                        rationale: "Destruction Warlock / Fire Mage helm with a Meta socket."
                    },
                    {
                        name: "Amice of the Sun-Touched",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_02.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nShoulder  Cloth\n+28 Stamina\n+26 Intellect\n+22 Spirit\nYellow Socket\nBlue Socket\nSocket Bonus: +3 Spirit\nEquip: Increases casting speed (haste) rating by 24.\nEquip: Increases damage and healing done by magical spells and effects by up to 45.",
                        rationale: "Spirit/Haste shoulders for Priest/Druid sustain."
                    },
                    {
                        name: "Vambraces of the Arcane Torrent",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_07.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nWrist  Cloth\n+20 Intellect\n+22 Stamina\nYellow Socket\nSocket Bonus: +2 Spell Crit\nEquip: Increases spell critical strike rating by 18.\nEquip: Increases damage and healing done by magical spells and effects by up to 38.",
                        rationale: "Crit-heavy bracers for Arcane Mages."
                    },
                    {
                        name: "Band of the Runestone",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_66.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nFinger\n+22 Stamina\n+20 Intellect\nEquip: Increases spell hit rating by 18.\nEquip: Increases damage and healing done by magical spells and effects by up to 35.",
                        rationale: "Spell hit ring to help casters reach caps."
                    },
                    {
                        name: "Talisman of Ley-Line Mastery",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_talisman_14.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nTrinket\nEquip: Increases damage and healing done by magical spells and effects by up to 52.\nUse: Restores 300 Mana and increases Spell Power by 100 for 15 sec. (2 Min Cooldown)",
                        rationale: "A hybrid mana/throughput trinket."
                    },
                    {
                        name: "Blade of the Sun-King's Fall",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_shortblade_28.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nMain Hand  Dagger\n1.80 Speed\n105 - 198 Damage\n+18 Intellect\n+25 Stamina\nEquip: Increases spell critical strike rating by 22.\nEquip: Increases damage and healing done by magical spells and effects by up to 185.",
                        rationale: "Caster dagger with high SP budget."
                    }
                ]
            },
            {
                name: 'Twin Val\'kyr Prototypes',
                items: [
                    {
                        name: 'Aegis of the Twin Sentinels',
                        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_shield_23.jpg',
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nOff Hand  Shield\n+45 Stamina\nEquip: Increases defense rating by 25.\nEquip: Increases shield block rating by 30.\nEquip: 5% chance to reflect spells.",
                        rationale: 'A defensive shield with a unique spell reflection utility for tanking magic-heavy bosses.'
                    },
                    {
                        name: 'Mantle of the Twin Vanguard',
                        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_25.jpg',
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nShoulder  Mail\n+28 Agility\n+25 Stamina\nRed Socket\nBlue Socket\nSocket Bonus: +3 Critical Strike Rating\nEquip: Increases expertise rating by 22.",
                        rationale: 'Expertise-heavy mail shoulders for Hunters and Enhancement Shamans.'
                    },
                    {
                        name: "Helm of the Twin Destinies",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_helmet_71.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nHead  Plate\n+45 Stamina\n+35 Strength\nMeta Socket\nBlue Socket\nSocket Bonus: +4 Dodge Rating\nEquip: Increases defense rating by 35.\nEquip: Increases parry rating by 24.",
                        rationale: "Defensive plate helm with high stamina."
                    },
                    {
                        name: "Pauldrons of Light and Shadow",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_66.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nShoulder  Plate\n+35 Strength\n+40 Stamina\nRed Socket\nYellow Socket\nSocket Bonus: +3 Defense\nEquip: Increases defense rating by 22.\nEquip: Increases shield block rating by 18.",
                        rationale: "Balanced tanking shoulders."
                    },
                    {
                        name: "Breastplate of the Val'kyr",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_chest_plate_12.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nChest  Plate\n+55 Stamina\n+45 Strength\nBlue Socket\nBlue Socket\nRed Socket\nSocket Bonus: +6 Stamina\nEquip: Increases defense rating by 38.\nEquip: Increases dodge rating by 25.",
                        rationale: "Massive stamina chest for effective health pools."
                    },
                    {
                        name: "Girdle of the Two-Fold Path",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_belt_26.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nWaist  Plate\n+35 Strength\n+42 Stamina\nBlue Socket\nYellow Socket\nSocket Bonus: +3 Hit Rating\nEquip: Increases expertise rating by 24.",
                        rationale: "Threat-focused plate belt."
                    },
                    {
                        name: "Signet of the Twin Sentinels",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_55.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nFinger\n+32 Stamina\n+22 Strength\nEquip: Increases defense rating by 18.\nEquip: Increases dodge rating by 18.",
                        rationale: "Standard tanking ring."
                    },
                    {
                        name: "Essence of the Light-Bonded",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_gem_pearl_06.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nTrinket\n+55 Stamina\nUse: Absorbs 2000 damage. Lasts 15 sec. (2 Min Cooldown)",
                        rationale: "A \"mini\" shield wall trinket for tanks."
                    }
                ]
            },
            {
                name: 'General Salaris',
                items: [
                    {
                        name: 'Salaris\'s Heavy Mallet',
                        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_hammer_23.jpg',
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nTwo-Hand  Mace\n3.70 Speed\n530 - 805 Damage\n+52 Strength\n+45 Stamina\nEquip: Increases critical strike rating by 45.\nEquip: Increases attack power by 92.",
                        rationale: 'A slow, heavy-hitting mace perfect for Arms Warriors and Retribution Paladins.'
                    },
                    {
                        name: 'Siege-Heart Dynamo',
                        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_trinket_naxxramas01.jpg',
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nTrinket\nEquip: Increases damage and healing done by magical spells and effects by up to 55.\nUse: Increases haste rating by 200 for 20 sec. (2 Min Cooldown)",
                        rationale: 'An on-use burst trinket for casters to line up with Bloodlust/Heroism.'
                    },
                    {
                        name: 'Vambraces of Fortified Gates',
                        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_bracer_18.jpg',
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nWrist  Plate\n+35 Strength\n+32 Stamina\nEquip: Increases expertise rating by 18.",
                        rationale: 'High-strength plate bracers with expertise for threat generation.'
                    },
                    {
                        name: 'Libram of the Silver Mirror',
                        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_relics_libram_02.jpg',
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nRelic  Libram\nEquip: Increases the damage dealt by your Holy Shield by 40.",
                        rationale: 'Boosts Paladin AoE threat generation and damage reflection.'
                    },
                    {
                        name: "Crossbow of the Final Stand",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_crossbow_07.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nRanged  Crossbow\n2.80 Speed\n195 - 355 Damage\n+24 Agility\n+22 Stamina\nEquip: Increases attack power by 48.\nEquip: Increases critical strike rating by 15.",
                        rationale: "A slow, hard-hitting crossbow for Hunters."
                    },
                    {
                        name: "Blade of the Tactician",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_62.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nOne-Hand  Sword\n1.60 Speed\n105 - 198 Damage\n+35 Stamina\nEquip: Increases defense rating by 18.\nEquip: Increases hit rating by 15.",
                        rationale: "Prot Warrior/Paladin tanking sword."
                    },
                    {
                        name: "Gauntlets of the Siege-Master",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_gauntlets_24.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nHands  Mail\n+28 Agility\n+25 Stamina\n+20 Intellect\nRed Socket\nBlue Socket\nSocket Bonus: +3 Agility\nEquip: Increases attack power by 56.",
                        rationale: "Hunter/Enhancement gloves."
                    },
                    {
                        name: "Leggings of the Witherbark",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_pants_leather_21.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nLegs  Leather\n+40 Agility\n+45 Stamina\nRed Socket\nYellow Socket\nBlue Socket\nSocket Bonus: +4 Hit Rating\nEquip: Increases attack power by 85.\nEquip: Increases hit rating by 24.",
                        rationale: "Rogue/Feral legs with a focus on Hit rating."
                    },
                    {
                        name: "Medallion of the General",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_29.jpg",
                        quality: 'Epic',
                        original: null,
                        after: "Binds when picked up\nNeck\n+25 Strength\n+30 Stamina\nEquip: Increases critical strike rating by 22.\nEquip: Increases attack power by 48.",
                        rationale: "Strength DPS neck."
                    }
                ]
            }
        ]
    },
    tier6_5_za: {
        id: 'tier6_5_za',
        name: 'Zul\'Aman (T6.5)',
        description: 'Venture into the Amani empire to stop Zul\'jin\'s dark ritual. Time is of the essence.',
        bosses: [
            {
                name: 'Nalorakk (Bear Avatar)',
                items: [
                    {
                        name: "Pauldrons of Primal Fury",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_25.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nShoulder  Plate\n1650 Armor\n+58 Strength\n+62 Stamina\nBlue Socket\nRed Socket\nSocket Bonus: +3 Defense Rating\nEquip: Improves defense rating by 38.\nEquip: Improves hit rating by 24 (1.52% @ L70).\nEquip: Increases shield block value by 42.",
                        rationale: "Solid defensive plate shoulders."
                    },
                    {
                        name: "Jungle Stompers",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_boots_chain_04.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nFeet  Mail\n885 Armor\n+48 Agility\n+65 Stamina\n+38 Intellect\nRed Socket\nRed Socket\nSocket Bonus: +3 Agility\nEquip: Increases attack power by 84.\nEquip: Improves hit rating by 22 (1.39% @ L70).",
                        rationale: "Mail boots with strong attack power and hit."
                    },
                    {
                        name: "Mask of the Bear Spirit",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_helmet_04.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nHead  Leather\n440 Armor\n+62 Agility\n+75 Stamina\nMeta Socket\nYellow Socket\nSocket Bonus: +4 Agility\nEquip: Improves hit rating by 30 (1.90% @ L70).\nEquip: Increases attack power by 110.",
                        rationale: "A powerhouse leather helm for druids and rogues."
                    },
                    {
                        name: "Fury",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_hand_04.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nOff Hand  Fist Weapon\n1.50 Speed\n105 - 198 Damage\n+22 Agility\n+24 Stamina\nEquip: Increases critical strike rating by 22.\nEquip: Increases attack power by 44.",
                        rationale: "Fast off-hand fist weapon for combat rogues and fury warriors."
                    },
                    {
                        name: "Pauldrons of Nalorakk",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_23.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nShoulder  Mail\n+28 Intellect\n+25 Stamina\n+20 MP5\nRed Socket\nBlue Socket\nSocket Bonus: +3 MP5\nEquip: Increases healing done by spells and effects by up to 68.",
                        rationale: "Good restoration mail shoulders."
                    },
                    {
                        name: "Bladeangel's Money Belt",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_belt_14.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nWaist  Leather\n+35 Agility\n+38 Stamina\nRed Socket\nYellow Socket\nSocket Bonus: +3 Hit Rating\nEquip: Increases attack power by 72.\nEquip: Increases hit rating by 22.",
                        rationale: "Rogue/Feral belt with sockets."
                    }
                ]
            },
            {
                name: 'Akil\'zon (Eagle Avatar)',
                items: [
                    {
                        name: "Staff of the Amani Diviner",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_staff_32.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nTwo-Hand  Staff\n165 - 318 Damage\nSpeed 3.20\n+70 Stamina\n+72 Intellect\n+55 Spirit\nRed Socket\nBlue Socket\nBlue Socket\nSocket Bonus: +5 Spell Power\nEquip: Increases damage and healing done by magical spells and effects by up to 265.\nEquip: Improves spell haste rating by 58 (3.68% @ L70).",
                        rationale: "A massive caster staff with significant haste."
                    },
                    {
                        name: "Brooch of Nature's Mercy",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_necklace_21.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nNeck\n+40 Stamina\n+38 Intellect\n+35 Spirit\nYellow Socket\nSocket Bonus: +2 Mana Regen\nEquip: Increases healing done by up to 96 and damage done by up to 32.\nEquip: Restores 14 mana per 5 sec.",
                        rationale: "Premium healer neck with a socket."
                    },
                    {
                        name: "Talon of the Tempest",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_60.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nFinger\n+38 Stamina\n+35 Intellect\nEquip: Increases damage and healing done by magical spells and effects by up to 52.\nEquip: Improves spell critical strike rating by 34 (1.54% @ L70).\nEquip: Improves spell hit rating by 28 (2.22% @ L70).",
                        rationale: "Great caster ring with Hit and Crit."
                    },
                    {
                        name: "Akil'zon's Talonblade",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_27.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nOne-Hand  Sword\n2.60 Speed\n185 - 345 Damage\n+24 Agility\n+22 Stamina\nEquip: Increases attack power by 46.\nEquip: Increases armor penetration rating by 115.",
                        rationale: "Armor pen sword for combat rogues/warriors."
                    },
                    {
                        name: "Mojo-Mender's Gloves",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_gauntlets_14.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nHands  Leather\n+35 Intellect\n+30 Stamina\n+28 Spirit\nRed Socket\nBlue Socket\nSocket Bonus: +3 Healing\nEquip: Increases healing done by spells and effects by up to 72.",
                        rationale: "Resto druid gloves."
                    },
                    {
                        name: "Chestguard of the Eagle",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_chest_chain_14.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nChest  Mail\n+45 Agility\n+42 Stamina\n+30 Intellect\nRed Socket\nYellow Socket\nBlue Socket\nSocket Bonus: +6 Attack Power\nEquip: Increases attack power by 92.",
                        rationale: "Hunter/Enhancement chest with great sockets."
                    }
                ]
            },
            {
                name: 'Jan\'alai (Dragonhawk Avatar)',
                items: [
                    {
                        name: "Wub's Cursed Hexblade",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_27.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nMain Hand  Sword\n+20 Intellect\n+20 Stamina\nEquip: Increases damage and healing done by magical spells and effects by up to 203.\nEquip: Improves spell hit rating by 19 (1.5% @ L70).",
                        rationale: "Caster sword with hit."
                    },
                    {
                        name: "Embroidered Spellpyre Boots",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_boots_cloth_16.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nFeet  Cloth\n134 Armor\n+25 Intellect\n+18 Stamina\nRed Socket\nYellow Socket\nSocket Bonus: +4 Spell Power\nEquip: Increases damage and healing done by magical spells and effects by up to 39.\nEquip: Improves spell haste rating by 24.",
                        rationale: "Cloth boots with added haste."
                    },
                    {
                        name: "Runed Spell-Cuffs",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_07.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nWrist  Cloth\n84 Armor\n+15 Intellect\n+12 Stamina\n+15 Spirit\nEquip: Increases damage and healing done by magical spells and effects by up to 29.\nEquip: Improves spell hit rating by 14.",
                        rationale: "Spirit/Hit bracers for priests."
                    },
                    {
                        name: "Bulwark of the Amani Empire",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shield_20.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nOff Hand  Shield\n5400 Armor\n141 Block\n+42 Stamina\nRed Socket\nSocket Bonus: +3 Stamina\nEquip: Increases defense rating by 32.\nEquip: Increases shield block rating by 22.",
                        rationale: "Solid tanking shield with a socket."
                    },
                    {
                        name: "Signet of Primal Wrath",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_56.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nUnique-Equipped\nFinger\n+28 Agility\n+28 Stamina\nEquip: Increases attack power by 58.\nEquip: Attacks ignore 126 of the target's armor.",
                        rationale: "BiS Physical DPS ring."
                    },
                    {
                        name: "Amani'shi Bracers",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_18.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nWrist  Leather\n118 Armor\n+20 Agility\n+18 Stamina\nRed Socket\nSocket Bonus: +2 Critical Strike Rating\nEquip: Increases attack power by 52.\nEquip: Attacks ignore 70 of the target's armor.",
                        rationale: "Leather bracers with ArP."
                    }
                ]
            },
            {
                name: 'Halazzi (Lynx Avatar)',
                items: [
                    {
                        name: "Shoulderpads of Dancing Blades",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_21.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nShoulder  Leather\n20 Armor\n+19 Agility\n+36 Stamina\nRed Socket\nYellow Socket\nSocket Bonus: +3 Agility\nEquip: Increases attack power by 94.\nEquip: Improves haste rating by 42 (2.66% @ L70).",
                        rationale: "Leather shoulders with added AP/Haste."
                    },
                    {
                        name: "Cloak of Ancient Rituals",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_cape_18.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nBack\n+16 Intellect\n+15 Stamina\nEquip: Increases healing done by up to 35 and damage done by up to 12.\nEquip: Restores 6 mana per 5 sec.",
                        rationale: "Healer cloak."
                    },
                    {
                        name: "Hood of the Third Eye",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_helmet_31.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nHead  Cloth\n+25 Intellect\n+27 Stamina\nMeta Socket\nBlue Socket\nSocket Bonus: +5 Spell Power\nEquip: Increases damage and healing done by magical spells and effects by up to 68.\nEquip: Improves spell hit rating by 24 (1.90% @ L70).",
                        rationale: "Hit-heavy cloth hood."
                    },
                    {
                        name: "Staff of Primal Fury",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_staff_33.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nTwo-Hand  Staff\n+52 Agility\n+48 Stamina\nEquip: Increases attack power by 975 in Cat, Bear, Dire Bear, and Moonkin forms only.",
                        rationale: "Feral Druid staff."
                    },
                    {
                        name: "Shimmerclaw Band",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_57.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nFinger\n+35 Agility\n+28 Stamina\nEquip: Increases attack power by 54.\nEquip: Improves hit rating by 15.",
                        rationale: "Physical DPS ring."
                    },
                    {
                        name: "Wristwraps of Departed Spirits",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_bracer_02.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nWrist  Cloth\n+15 Intellect\n+12 Spirit\nEquip: Increases healing done by up to 33 and damage done by up to 11.",
                        rationale: "Spirit Healer bracers."
                    }
                ]
            },
            {
                name: 'Hex Lord Malacrass',
                items: [
                    {
                        name: "Hex Shrunken Head",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_head_troll_01.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nUnique-Equipped\nTrinket\nEquip: Increases damage and healing done by magical spells and effects by up to 53.\nUse: Increases damage and healing done by magical spells and effects by up to 211 for 20 sec. (2 Min Cooldown)",
                        rationale: "Iconic caster trinket, unchanged."
                    },
                    {
                        name: "Tome of the Diabolic",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_offhand_bloodelf_01.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nHeld In Off-hand\n+15 Intellect\n+15 Stamina\nEquip: Increases damage and healing done by magical spells and effects by up to 28.\nEquip: Improves spell hit rating by 12.",
                        rationale: "Caster off-hand."
                    },
                    {
                        name: "Coif of the Jungle Stalker",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_helmet_32.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nHead  Mail\n+40 Agility\n+40 Stamina\nMeta Socket\nRed Socket\nSocket Bonus: +4 Agility\nEquip: Increases attack power by 84.\nEquip: Improves hit rating by 24.",
                        rationale: "Physical DPS mail helm."
                    },
                    {
                        name: "Cloak of the Fiend-Slayer",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_misc_cape_20.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nBack\n+20 Agility\n+20 Stamina\nEquip: Increases attack power by 48.\nEquip: Attacks ignore 75 of the target's armor.",
                        rationale: "ArP cloak."
                    },
                    {
                        name: "Ring of the Ancient Hex",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_68.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nFinger\n+25 Intellect\n+20 Stamina\nEquip: Increases healing done by up to 58.\nEquip: Restores 10 mana per 5 sec.",
                        rationale: "Healer ring."
                    },
                    {
                        name: "Band of the Eternal Sage",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_62.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nFinger\n+25 Intellect\n+20 Stamina\nEquip: Increases damage and healing done by magical spells and effects by up to 34.\nEquip: Improves spell critical strike rating by 22.",
                        rationale: "Caster crit ring."
                    }
                ]
            },
            {
                name: 'Zul\'jin',
                items: [
                    {
                        name: "Jin'rohk, The Great Apocalypse (Ancient)",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_sword_25.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nTwo-Hand  Sword\n545 - 818 Damage\nSpeed 3.70\n+85 Stamina\nEquip: Improves hit rating by 55 (3.5% @ L70).\nEquip: Increases attack power by 155.\nEquip: Your critical strikes have a chance to sunder the target's armor, reducing it by 200 for 10 sec. Stacks up to 5 times.",
                        rationale: "The iconic ZA sword. Added an armor pen proc to make it a true alternative to Cataclysm's Edge."
                    },
                    {
                        name: "Ancient Amani Longbow (Ancient)",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_weapon_bow_30.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nRanged  Bow\n288 - 536 Damage\nSpeed 3.00\nEquip: Increases attack power by 72.\nEquip: Improves critical strike rating by 24 (1.09% @ L70).\nEquip: Attacks ignore 175 of the target's armor.",
                        rationale: "Stat stick for Warriors/Rogues, powerful weapon for Hunters."
                    },
                    {
                        name: "Berserker's Call (Ancient)",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_talisman_06.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nUnique-Equipped\nTrinket\nEquip: Increases attack power by 130.\nUse: Increases attack power by 460 for 20 sec. (2 Min CD)",
                        rationale: "Best-in-slot trinket for many physical DPS classes until SWP."
                    },
                    {
                        name: "Dark Blessing (Ancient)",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_mace_74.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nMain Hand  Mace\n155 - 322 Damage\nSpeed 2.60\n+45 Stamina\n+42 Intellect\nEquip: Increases healing done by up to 485 and damage done by up to 162.\nEquip: Restores 14 mana per 5 sec.\nEquip: Your direct healing spells have a chance to bless the target, reducing magical damage taken by 5% for 8 sec.",
                        rationale: "Healer mace with a unique damage reduction proc."
                    },
                    {
                        name: "Chestguard of the Warlord",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_chest_plate_12.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nChest  Plate\n+65 Strength\n+75 Stamina\nRed Socket\nYellow Socket\nBlue Socket\nSocket Bonus: +6 Strength\nEquip: Increases critical strike rating by 32.\nEquip: Increases attack power by 24.",
                        rationale: "Massive plate chest for Warriors/Paladins."
                    },
                    {
                        name: "Helm of the Amani Empire",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_helmet_09.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nHead  Plate\n+55 Stamina\n+40 Strength\nMeta Socket\nBlue Socket\nSocket Bonus: +4 Defense\nEquip: Increases defense rating by 35.\nEquip: Increases dodge rating by 24.",
                        rationale: "Tanking helm."
                    }
                ]
            },
            {
                name: 'The Timed Chests (Amani Rush)',
                items: [
                    {
                        name: "Signet of the Quiet Forest (Timed Chest 3)",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_68.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nFinger\n+38 Stamina\n+35 Intellect\nEquip: Increases healing done by up to 88 and damage done by up to 29.\nEquip: Restores 12 mana per 5 sec.\nUse: Increases Spirit by 80 for 15 sec. (2 Min CD).",
                        rationale: "Healer ring with a spirit burst."
                    },
                    {
                        name: "Ring of the Amani Empire (Timed Chest 4)",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_70.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nFinger\n+42 Agility\n+55 Stamina\nEquip: Increases attack power by 72.\nEquip: Improves hit rating by 24 (1.52% @ L70).\nEquip: Improves critical strike rating by 32 (1.45% @ L70).",
                        rationale: "The hunter/melee reward for a perfect run."
                    },
                    {
                        name: "Amani War Bear",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/ability_druid_challengingroar.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nMount\nRequires Level 70\nRequires Riding (150)\nUse: Teaches you how to summon this mount. This is a very fast mount.",
                        rationale: "The ultimate status symbol."
                    },
                    {
                        name: "Mana-Attuned Band (Timed Chest 2)",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_67.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nFinger\n+22 Intellect\n+25 Stamina\nEquip: Increases damage and healing done by magical spells and effects by up to 35.\nEquip: Improves spell haste rating by 24.",
                        rationale: "Caster haste ring."
                    },
                    {
                        name: "Steps of the Bear (Timed Chest 1)",
                        icon: "https://wow.zamimg.com/images/wow/icons/large/inv_boots_plate_05.jpg",
                        quality: 'Epic',
                        after: "Binds when picked up\nFeet  Plate\n1450 Armor\n+40 Strength\n+55 Stamina\nRed Socket\nYellow Socket\nSocket Bonus: +3 Defense\nEquip: Increases defense rating by 25.\nEquip: Increases shield block value by 32.",
                        rationale: "Early tanking plate boots."
                    }
                ]
            }
        ]
    }
};
