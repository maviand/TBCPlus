export const druidTalents = {
    balance: {
        name: "Balance",
        icon: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg",
        background: "https://static.wikia.nocookie.net/wowpedia/images/4/47/Talents_background_-_druid_Balance.png",
        talents: [
            // ROW 1
            { id: "starlight-wrath", name: "Starlight Wrath", icon: "spell_nature_abolishmagic", row: 0, col: 1, maxPoints: 5, description: (rank) => `Reduces the cast time of your Wrath and Starfire spells by ${rank * 0.1} sec.` },
            { id: "natures-grasp", name: "Nature's Grasp", icon: "spell_nature_naturetouchgrow", row: 0, col: 2, maxPoints: 1, description: (rank) => `While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).` },
            { id: "improved-natures-grasp", name: "Imp. Nature's Grasp", icon: "spell_nature_naturetouchgrow", row: 0, col: 3, maxPoints: 4, prereq: "natures-grasp", description: (rank) => `Increases the chance for your Nature's Grasp to entangle an enemy by ${rank * 15}%.` },

            // ROW 2
            { id: "control-of-nature", name: "Control of Nature", icon: "spell_nature_stranglevines", row: 1, col: 0, maxPoints: 3, description: (rank) => `Gives you a ${rank * 33}% chance to avoid interruption caused by damage while casting Entangling Roots and Cyclone.` },
            { id: "focused-starlight", name: "Focused Starlight", icon: "spell_arcane_starfire", row: 1, col: 1, maxPoints: 2, description: (rank) => `Increases the critical strike chance of your Wrath and Starfire spells by ${rank * 2}%.` },
            { id: "improved-moonfire", name: "Improved Moonfire", icon: "spell_nature_starfall", row: 1, col: 2, maxPoints: 2, description: (rank) => `Increases the damage and critical strike chance of your Moonfire spell by ${rank * 5}%.` },

            // ROW 3
            { id: "brambles", name: "Brambles", icon: "spell_nature_thorns", row: 2, col: 0, maxPoints: 3, description: (rank) => `Increases damage caused by your Thorns and Entangling Roots spells by ${rank * 25}% and damage done by your Treants by ${rank * 5}%.` },
            { id: "insect-swarm", name: "Insect Swarm", icon: "spell_nature_insectswarm", row: 2, col: 2, maxPoints: 1, prereq: "improved-moonfire", description: (rank) => `The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing Nature damage over 12 sec.` },
            { id: "reach-of-cenarius", name: "Reach of Cenarius", icon: "spell_nature_naturetouchgrow", row: 2, col: 3, maxPoints: 2, description: (rank) => `Increases the range of your Balance spells and Faerie Fire (Feral) by ${rank * 10}%.` },

            // ROW 4
            { id: "vengeance", name: "Vengeance", icon: "spell_nature_purge", row: 3, col: 1, maxPoints: 5, prereq: "focused-starlight", description: (rank) => `Increases the critical strike damage bonus of your Starfire, Starfall, and Wrath spells by ${rank * 20}%.` },
            { id: "celestial-focus", name: "Celestial Focus", icon: "spell_arcane_starfire", row: 3, col: 2, maxPoints: 3, description: (rank) => `Gives your Starfire spell a ${rank * 5}% chance to stun the target for 3 sec.` },

            // ROW 5
            { id: "lunar-guidance", name: "Lunar Guidance", icon: "spell_arcane_prismaticcloak", row: 4, col: 0, maxPoints: 3, description: (rank) => `Increases your spell damage and healing by ${rank * 8}% of your total Intellect.` },
            { id: "natures-grace", name: "Nature's Grace", icon: "spell_nature_naturesblessing", row: 4, col: 1, maxPoints: 1, description: (rank) => `All spell critical strikes grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec.` },
            { id: "moonglow", name: "Moonglow", icon: "spell_nature_sentinal", row: 4, col: 2, maxPoints: 3, description: (rank) => `Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by ${rank * 3}%.` },

            // ROW 6
            { id: "moonfury", name: "Moonfury", icon: "spell_nature_moonglow", row: 5, col: 1, maxPoints: 5, prereq: "natures-grace", description: (rank) => `Increases the damage done by your Starfire, Moonfire and Wrath spells by ${rank * 2}%.` },

            // ROW 7
            { id: "balance-of-power", name: "Balance of Power", icon: "spell_nature_natureguardian", row: 6, col: 0, maxPoints: 2, description: (rank) => `Increases your chance to hit with all spells and reduces the chance you'll be hit by spells by ${rank * 2}%.` },
            { id: "moonkin-form", name: "Moonkin Form", icon: "spell_nature_forceofnature", row: 6, col: 1, maxPoints: 1, prereq: "moonfury", description: (rank) => `Transforms the Druid into Moonkin Form. Increases armor and party spell crit. TBC+: Provides 3% Spell Haste.` },
            { id: "dreamstate", name: "Dreamstate", icon: "spell_nature_healingtouch", row: 6, col: 2, maxPoints: 3, description: (rank) => `Regenerate mana equal to ${rank * 4}% of your Intellect every 5 sec, even while casting.` },

            // ROW 8
            { id: "improved-faerie-fire", name: "Imp. Faerie Fire", icon: "spell_nature_faeriefire", row: 7, col: 0, maxPoints: 3, description: (rank) => `Your Faerie Fire spell also increases the chance the target will be hit by melee and ranged attacks by ${rank}%.` },
            { id: "wrath-of-cenarius", name: "Wrath of Cenarius", icon: "ability_druid_twilightvanquisher", row: 7, col: 2, maxPoints: 5, description: (rank) => `Your Starfire spell gains an additional ${rank * 4}% and your Wrath gains an additional ${rank * 2}% of your bonus damage effects.` },

            // ROW 9
            { id: "force-of-nature", name: "Force of Nature", icon: "spell_nature_forceofnature", row: 8, col: 1, description: (rank) => `Summons 3 Treants to aid the Druid for 30 sec.`, maxPoints: 1 },
        ]
    },
    feral: {
        name: "Feral Combat",
        icon: "https://wow.zamimg.com/images/wow/icons/large/ability_druid_catform.jpg",
        background: "https://static.wikia.nocookie.net/wowpedia/images/0/0b/Talents_background_-_druid_Feral_Combat.png",
        talents: [
            // ROW 1
            { id: "ferocity", name: "Ferocity", icon: "ability_hunter_pet_hyena", row: 0, col: 1, maxPoints: 5, description: (rank) => `Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by ${rank}.` },
            { id: "feral-aggression", name: "Feral Aggression", icon: "ability_druid_demoralizingroar", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases the Attack Power reduction of your Demoralizing Roar by ${rank * 8}% and the damage caused by your Ferocious Bite by ${rank * 3}%.` },

            // ROW 2
            { id: "feral-instinct", name: "Feral Instinct", icon: "ability_ambush", row: 1, col: 0, maxPoints: 3, description: (rank) => `Increases threat caused in Bear Form by ${rank * 5}% and reduces the chance enemies have to detect you while Prowling.` },
            { id: "savage-fury", name: "Savage Fury", icon: "ability_druid_ravage", row: 1, col: 1, maxPoints: 2, description: (rank) => `Increases the damage caused by your Claw, Rake, Mangle (Cat), Mangle (Bear) and Maul capabilities by ${rank * 10}%.` },
            { id: "thick-hide", name: "Thick Hide", icon: "inv_misc_pelt_bear_03", row: 1, col: 2, maxPoints: 3, description: (rank) => `Increases your Armor contribution from items by ${rank * 4}%.` },

            // ROW 3
            { id: "feral-swiftness", name: "Feral Swiftness", icon: "spell_druid_feralchargescat", row: 2, col: 0, maxPoints: 2, description: (rank) => `Increases your movement speed by ${rank * 15}% in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by ${rank * 2}%.` },
            { id: "feral-charge", name: "Feral Charge", icon: "ability_hunter_pet_bear", row: 2, col: 1, maxPoints: 1, description: (rank) => `Causes you to charge an enemy, immobilizing them for 4 sec and interrupting any spell being cast.` },
            { id: "sharpened-claws", name: "Sharpened Claws", icon: "inv_misc_monsterclaw_04", row: 2, col: 2, maxPoints: 3, description: (rank) => `Increases your critical strike chance while in Bear, Dire Bear or Cat Form by ${rank * 2}%.` },

            // ROW 4
            { id: "shredding-attacks", name: "Shredding Attacks", icon: "spell_shadow_vampiricaura", row: 3, col: 0, maxPoints: 2, description: (rank) => `Reduces the energy cost of your Shred ability by ${rank * 9} and the rage cost of your Lacerate ability by ${rank}.` },
            { id: "predatory-strikes", name: "Predatory Strikes", icon: "ability_hunter_pet_cat", row: 3, col: 1, maxPoints: 3, description: (rank) => `Increases your Melee Attack Power in Cat, Bear, Dire Bear and Moonkin Forms by ${rank * 50}% of your level.` },
            { id: "primal-fury", name: "Primal Fury", icon: "ability_racial_cannibalize", row: 3, col: 2, maxPoints: 2, prereq: "sharpened-claws", description: (rank) => `Gives you a ${rank * 50}% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form.` },

            // ROW 5
            { id: "savage-strikes", name: "Savage Strikes", icon: "ability_racial_bloodrage", row: 4, col: 0, maxPoints: 2, description: (rank) => `Increases the critical strike chance of your Claw, Rake, Mangle (Cat), Mangle (Bear) and Maul capabilities by ${rank * 10}%.` },
            { id: "faerie-fire-feral", name: "Faerie Fire (Feral)", icon: "spell_nature_faeriefire", row: 4, col: 1, maxPoints: 1, description: (rank) => `Decrease the armor of the target, prevent them from stealthing or turning invisible.` },
            { id: "nurturing-instinct", name: "Nurturing Instinct", icon: "ability_druid_healinginstincts", row: 4, col: 3, maxPoints: 2, description: (rank) => `Increases your healing spells by up to ${rank * 25}% of your Agility.` },

            // ROW 6
            { id: "heart-of-the-wild", name: "Heart of the Wild", icon: "spell_holy_blessingofagility", row: 5, col: 1, maxPoints: 5, prereq: "predatory-strikes", description: (rank) => `Increases your Intellect by ${rank * 4}%. In addition, while in Cat Form your Attack Power is increased by ${rank * 2}%.` },
            { id: "survival-of-the-fittest", name: "Survival of the Fittest", icon: "spell_nature_spiritarmor", row: 5, col: 2, maxPoints: 3, description: (rank) => `Increases all attributes by ${rank * 1}% and reduces the chance you'll be critically hit by melee attacks by ${rank * 1}%.` },

            // ROW 7
            { id: "primal-tenacity", name: "Primal Tenacity", icon: "ability_druid_primaltenacity", row: 6, col: 0, maxPoints: 3, description: (rank) => `Increases your chance to resist Stun and Fear mechanics by ${rank * 5}%.` },
            { id: "leader-of-the-pack", name: "Leader of the Pack", icon: "spell_nature_unyeildingstamina", row: 6, col: 1, maxPoints: 1, description: (rank) => `While in Cat, Bear or Dire Bear Form, Leader of the Pack increases ranged and melee critical chance of all party members within 45 yards by 5%.` },
            { id: "improved-leader-of-the-pack", name: "Improved LotP", icon: "spell_nature_unyeildingstamina", row: 6, col: 2, maxPoints: 2, prereq: "leader-of-the-pack", description: (rank) => `Your Leader of the Pack ability also causes affected targets to heal themselves for ${rank * 2}% of their total health when they critically hit.` },

            // ROW 8
            { id: "predatory-instincts", name: "Predatory Instincts", icon: "ability_druid_predatoryinstincts", row: 7, col: 2, maxPoints: 5, description: (rank) => `Increases the damage dealt by your critical strikes by ${rank * 2}%.` },

            // ROW 9
            { id: "mangle", name: "Mangle", icon: "ability_druid_mangle2", row: 8, col: 1, maxPoints: 1, prereq: "leader-of-the-pack", description: (rank) => `Mangle the target, inflicting damage and causing the target to take additional damage from Shred and Bleed effects.` },
        ]
    },
    restoration: {
        name: "Restoration",
        icon: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg",
        background: "https://static.wikia.nocookie.net/wowpedia/images/a/a2/Talents_background_-_druid_Restoration.png",
        talents: [
            // ROW 1
            { id: "improved-mark", name: "Improved Mark of the Wild", icon: "spell_nature_regeneration", row: 0, col: 1, maxPoints: 5, description: (rank) => `Increases the effects of your Mark of the Wild and Gift of the Wild spells by ${rank * 7}%.` },
            { id: "furor", name: "Furor", icon: "spell_holy_blessingofstamina", row: 0, col: 2, maxPoints: 5, description: (rank) => `Gives you ${rank * 20}% chance to gain 10 Rage when you shapeshift into Bear Form or 40 Energy when you shapeshift into Cat Form.` },

            // ROW 2
            { id: "naturalist", name: "Naturalist", icon: "spell_nature_healingtouch", row: 1, col: 0, maxPoints: 5, description: (rank) => `Reduces the cast time of your Healing Touch spell by ${rank * 0.1} sec and increases physical damage you deal by ${rank * 2}%.` },
            { id: "nature-focus", name: "Nature's Focus", icon: "spell_nature_healingwavegreater", row: 1, col: 1, maxPoints: 5, description: (rank) => `Gives you a ${rank * 14}% chance to avoid interruption caused by damage while casting Healing Touch, Regrowth and Tranquility.` },
            { id: "natural-shapeshifter", name: "Natural Shapeshifter", icon: "spell_nature_wispsplode", row: 1, col: 2, maxPoints: 3, description: (rank) => `Reduces the mana cost of all shapeshifting by ${rank * 10}%.` },

            // ROW 3
            { id: "intensity", name: "Intensity", icon: "spell_frost_windwalkon", row: 2, col: 0, maxPoints: 3, description: (rank) => `Allows ${rank * 10}% of your Mana regeneration to continue while casting.` },
            { id: "subtlety", name: "Subtlety", icon: "ability_eyeoftheowl", row: 2, col: 1, maxPoints: 5, description: (rank) => `Reduces the threat generated by your healing spells by ${rank * 4}% and reduces the chance your spells will be dispelled by ${rank * 6}%.` },
            { id: "omen-of-clarity", name: "Omen of Clarity", icon: "spell_nature_crystalball", row: 2, col: 2, maxPoints: 1, description: (rank) => `Your damage and healing spells have a chance to cause you to enter a Clearcasting state, reducing the Mana, Rage or Energy cost of your next spell by 100%.` },

            // ROW 4
            { id: "tranquil-spirit", name: "Tranquil Spirit", icon: "spell_holy_elunesgrace", row: 3, col: 1, maxPoints: 5, description: (rank) => `Reduces the mana cost of your Healing Touch and Tranquility spells by ${rank * 2}%.` },
            { id: "improved-rejuvenation", name: "Improved Rejuvenation", icon: "spell_nature_rejuvenation", row: 3, col: 2, maxPoints: 3, description: (rank) => `Increases the effect of your Rejuvenation spell by ${rank * 5}%.` },

            // ROW 5
            { id: "natures-swiftness", name: "Nature's Swiftness", icon: "spell_nature_ravenform", row: 4, col: 0, maxPoints: 1, prereq: "intensity", description: (rank) => `When activated, your next Nature spell with a base casting time of less than 10 sec becomes an instant cast spell.` },
            { id: "gift-of-nature", name: "Gift of Nature", icon: "spell_nature_protectionformnature", row: 4, col: 1, maxPoints: 5, description: (rank) => `Increases the effect of all healing spells by ${rank * 2}%.` },
            { id: "improved-tranquility", name: "Improved Tranquility", icon: "spell_nature_tranquility", row: 4, col: 3, maxPoints: 2, description: (rank) => `Reduces threat caused by Tranquility by ${rank * 50}%.` },

            // ROW 6
            { id: "empowered-touch", name: "Empowered Touch", icon: "ability_druid_empoweredtouch", row: 5, col: 0, maxPoints: 2, description: (rank) => `Your Healing Touch gains an additional ${rank * 10}% of your bonus Healing effects.` },
            { id: "improved-regrowth", name: "Improved Regrowth", icon: "spell_nature_resistnature", row: 5, col: 2, maxPoints: 5, description: (rank) => `Increases the critical effect chance of your Regrowth spell by ${rank * 10}%.` },

            // ROW 7
            { id: "living-spirit", name: "Living Spirit", icon: "spell_nature_giftofthewaterspirit", row: 6, col: 0, maxPoints: 3, description: (rank) => `Increases total Spirit by ${rank * 5}%.` },
            { id: "swiftmend", name: "Swiftmend", icon: "inv_relics_idolofrejuvenation", row: 6, col: 1, maxPoints: 1, prereq: "gift-of-nature", description: (rank) => `Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them.` },
            { id: "natural-perfection", name: "Natural Perfection", icon: "spell_nature_protectionformnature", row: 6, col: 2, maxPoints: 3, description: (rank) => `Your critical strike heals give you the Natural Perfection buff, reducing all damage taken by ${rank * 1}%. Stacks 3 times.` },

            // ROW 8
            { id: "empowered-rejuvenation", name: "Empowered Rejuve", icon: "ability_druid_empoweredrejuvination", row: 7, col: 1, maxPoints: 5, description: (rank) => `The bonus healing effects of your healing over time spells is increased by ${rank * 4}%.` },

            // ROW 9
            { id: "tree-of-life", name: "Tree of Life", icon: "ability_druid_treeoflife", row: 8, col: 1, maxPoints: 1, prereq: "empowered-rejuvenation", description: (rank) => `Shapeshift into the Tree of Life. Increases healing received by party members nearby.` },
        ]
    }
};
