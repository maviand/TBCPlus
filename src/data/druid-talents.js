export const druidTalents = {
    balance: {
        name: "Balance",
        icon: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg",
        background: "https://i.imgur.com/0y23crr.jpeg",
        talents: [
            // ROW 1
            { id: "starlight-wrath", name: "Starlight Wrath", icon: "spell_nature_abolishmagic", row: 0, col: 1, maxPoints: 5, description: (rank) => `Reduces the cast time of your Wrath and Starfire spells by ${rank * 0.1} sec.` },
            { id: "natures-grasp", name: "Nature's Grasp", icon: "spell_nature_naturetouchgrow", row: 0, col: 2, maxPoints: 1, description: (rank) => `While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).` },
            { id: "improved-natures-grasp", name: "Imp. Nature's Grasp", icon: "spell_nature_naturetouchgrow", row: 0, col: 3, maxPoints: 2, prereq: "natures-grasp", description: (rank) => `Increases the chance for your Nature's Grasp to entangle an enemy by ${rank * 30}%.` },

            // ROW 2
            { id: "control-of-nature", name: "Nature's Focus", icon: "spell_nature_stranglevines", row: 1, col: 0, maxPoints: 5, description: (rank) => `Gives you a ${rank * 14}% chance to avoid interruption caused by damage while casting any Druid spell.` },
            { id: "focused-starlight", name: "Focused Starlight", icon: "spell_arcane_starfire", row: 1, col: 1, maxPoints: 2, description: (rank) => `Increases the critical strike chance of your Wrath and Starfire spells by ${rank * 2}%.` },
            { id: "improved-moonfire", name: "Improved Moonfire", icon: "spell_nature_starfall", row: 1, col: 2, maxPoints: 2, description: (rank) => `Increases the damage and critical strike chance of your Moonfire spell by ${rank * 5}%. Your Moonfire now gains bonus damage equal to ${rank * 7.5}% of your Attack Power or ${rank * 12.5}% of your +Healing, whichever is higher.` },

            // ROW 3
            { id: "brambles", name: "Brambles", icon: "spell_nature_thorns", row: 0, col: 0, maxPoints: 2, description: (rank) => `Increases damage caused by your Thorns and Entangling Roots spells by ${rank * 20}% of your Intellect and damage done by your Treants by ${rank * 10}%.` },
            { id: "starsurge", name: "Starsurge", icon: "spell_arcane_arcane03", row: 2, col: 2, maxPoints: 1, prereq: "improved-moonfire", description: (rank) => `Starsurge: 12s CD. Instant cast. Deals high Arcane damage. Generates 100% threat reduction for the Druid.` },
            { id: "reach-of-cenarius", name: "Reach of Cenarius", icon: "spell_nature_naturetouchgrow", row: 2, col: 0, maxPoints: 2, description: (rank) => `Increases the range of your Balance spells and Faerie Fire (Feral) by ${rank * 10}%.` },

            // ROW 4
            { id: "vengeance", name: "Vengeance", icon: "spell_nature_purge", row: 3, col: 1, maxPoints: 5, prereq: "focused-starlight", description: (rank) => `Increases the critical strike damage bonus of your Starfire, Starfall, and Wrath spells by ${rank * 20}%.` },
            { id: "celestial-focus", name: "Celestial Focus", icon: "spell_arcane_starfire", row: 3, col: 2, maxPoints: 3, description: (rank) => `Gives your Starfire spell a ${rank * 5}% chance to stun the target for 3 sec. If the target is immune to Stun, the unstable astral energy instead triggers 'Moonfury.'\nEffect: Your Starfire echoes instantly, dealing 50% of its damage to the target and generating slightly reduced threat.` },

            // ROW 5
            { id: "lunar-guidance", name: "Dreamstate Guidance", icon: "spell_arcane_prismaticcloak", row: 4, col: 0, maxPoints: 3, description: (rank) => `Increases your spell damage and healing by ${rank * 8}% of your total Intellect. Regenerates mana equal to ${rank * 4}% of your Intellect every 5 sec, even while casting.` },
            { id: "natures-grace", name: "Nature's Grace", icon: "spell_nature_naturesblessing", row: 4, col: 1, maxPoints: 1, description: (rank) => `All spell critical strikes increase your spell casting speed by 20% for 3 sec.` },
            { id: "moonglow", name: "Moonglow", icon: "spell_nature_sentinal", row: 4, col: 2, maxPoints: 3, description: (rank) => `Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by ${rank * 3}%.` },

            // ROW 6
            { id: "moonfury", name: "Moonfury", icon: "spell_nature_moonglow", row: 5, col: 1, maxPoints: 5, prereq: "natures-grace", description: (rank) => `Increases the damage done by your Starfire and Wrath spells by ${rank * 3}%.` },
            { id: "balance-of-power", name: "Balance of Power", icon: "spell_nature_natureguardian", row: 5, col: 2, maxPoints: 2, description: (rank) => `Increases your Nature and Arcane spell damage by ${rank * 2}%. Additionally, your Spirit now grants Hit Rating equal to ${rank * 50}% of your Spirit.` },

            // ROW 7
            { id: "improved-faerie-fire", name: "Imp. Faerie Fire", icon: "spell_nature_faeriefire", row: 6, col: 0, maxPoints: 3, description: (rank) => `Your Faerie Fire spell also increases the chance the target will be hit by melee and ranged attacks by ${rank}%.` },
            { id: "moonkin-form", name: "Moonkin Form", icon: "spell_nature_forceofnature", row: 6, col: 1, maxPoints: 1, prereq: "moonfury", description: (rank) => `Transforms the Druid into Moonkin Form. Increases armor and party spell crit.` },
            { id: "improved-moonkin-form", name: "Imp. Moonkin Form", icon: "spell_nature_forceofnature", row: 6, col: 2, maxPoints: 2, prereq: "moonkin-form", description: (rank) => `Your Moonkin Form also increases ${rank * 1.5}% Spell Haste to party.` },

            // ROW 8
            { id: "wrath-of-cenarius", name: "Wrath of Cenarius", icon: "https://wow.zamimg.com/images/wow/icons/large/ability_druid_twilightswrath.jpg", row: 7, col: 1, maxPoints: 5, description: (rank) => `“The storm does not strike from a distance; it surrounds you.”\n\nIncreases the damage of Starfire by ${rank * 2}% and Wrath by ${rank * 1}%. \n\nCasting Starfire: Charges your weapons with astral energy. Your next melee attack deals Arcane Damage equal to ${rank * 8}% of your Spell Power and restores ${rank * 1}% Mana.\n\nCasting Wrath: Infuses you with solar vigor. Your next Healing spell has its Cast Time reduced by ${rank * 10}%.` },

            // ROW 9
            { id: "starfall", name: "Starfall", icon: "https://wow.zamimg.com/images/wow/icons/large/ability_druid_starfall.jpg", row: 8, col: 1, description: (rank) => `You summon a flurry of stars from the sky on all targets within 30 yards of the caster, each dealing 145-167 Arcane damage. Maximum 20 stars. Last 10 seconds. Shapeshifting into an animal form or mounting cancels the effect. Any effect which causes you to lose control of your character will suppress the starfall effect.`, maxPoints: 1 },
        ]
    },
    feral: {
        name: "Feral Combat",
        icon: "https://wow.zamimg.com/images/wow/icons/large/ability_druid_catform.jpg",
        background: "https://i.imgur.com/Czovlha.jpeg",
        talents: [
            // ROW 1
            { id: "ferocity", name: "Ferocity", icon: "ability_hunter_pet_hyena", row: 0, col: 1, maxPoints: 5, description: (rank) => `Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by ${rank}.` },
            { id: "feral-aggression", name: "Feral Aggression", icon: "ability_druid_demoralizingroar", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases the Attack Power reduction of your Demoralizing Roar by ${rank * 8}% and the damage caused by your Ferocious Bite by ${rank * 3}%.` },

            // ROW 2
            { id: "feral-instinct", name: "Feral Instinct", icon: "ability_ambush", row: 1, col: 0, maxPoints: 3, description: (rank) => `Increases threat caused in Bear Form by ${rank * 5}% and reduces the chance enemies have to detect you while Prowling. In addition, your Swipe ability hits ${rank} additional targets and applies a 'Gaping Wound' bleed for ${rank * 15}% of the direct damage dealt over 6 sec.` },
            { id: "savage-fury", name: "Savage Fury", icon: "ability_druid_ravage", row: 1, col: 1, maxPoints: 2, description: (rank) => `Increases the damage caused by your Claw, Rake, Mangle (Cat), Mangle (Bear) and Maul capabilities by ${rank * 10}%.` },
            { id: "primal-precision", name: "Primal Precision", icon: "ability_druid_primalprecision", row: 1, col: 2, maxPoints: 2, description: (rank) => `Reduces the chance your attacks will be parried by ${rank}%. Additionally, when your attacks are dodged, parried, or miss, you are refunded ${rank * 40}% of the Energy or Rage cost.` },
            { id: "thick-hide", name: "Thick Hide", icon: "inv_misc_pelt_bear_03", row: 1, col: 3, maxPoints: 2, description: (rank) => `Increases your Armor contribution from items by ${rank * 5}% and reduces the duration of all Bleed, Poison, and Disease effects by ${rank * 15}%.` },

            // ROW 3
            { id: "feral-swiftness", name: "Feral Swiftness", icon: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_spiritwolf.jpg", row: 2, col: 0, maxPoints: 2, description: (rank) => `Increases your movement speed by ${rank * 15}% in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by ${rank * 2}%.` },
            { id: "feral-charge", name: "Feral Charge", icon: "ability_hunter_pet_bear", row: 2, col: 1, maxPoints: 1, description: (rank) => `Causes you to charge an enemy, immobilizing them for 4 sec and interrupting any spell being cast.` },
            { id: "sharpened-claws", name: "Sharpened Claws", icon: "inv_misc_monsterclaw_04", row: 2, col: 2, maxPoints: 3, description: (rank) => `Increases your critical strike chance while in Bear, Dire Bear or Cat Form by ${rank}% and causes you to ignore ${rank * 2}% of the target's Armor.` },
            { id: "survival-instincts", name: "Survival Instincts", icon: "ability_druid_tigersroar", row: 2, col: 3, maxPoints: 1, prereq: "thick-hide", description: (rank) => `Activates your primal survival instincts, reducing all damage taken by 20% and increasing damage by 5% for 10 sec. Effect scales with missing health (up to 60% DR / 30% DMG). 2 min CD.` },

            // ROW 4
            { id: "shredding-attacks", name: "Shredding Attacks", icon: "spell_shadow_vampiricaura", row: 3, col: 0, maxPoints: 2, description: (rank) => `Reduces the energy cost of your Shred ability by ${rank * 9} and the rage cost of your Lacerate ability by ${rank}.` },
            { id: "predatory-strikes", name: "Predatory Strikes", icon: "ability_hunter_pet_cat", row: 3, col: 1, maxPoints: 3, description: (rank) => `Increases your Attack Power by ${rank * 10}% of your Strength and Agility. Your finishing moves have a 20% chance per Combo Point to expose the target's weakness, granting 'Sudden Opportunity.'\nEffect: Your next Ravage (Cat) can be used out of stealth and costs no Energy. Your next Maul (Bear) is a critical strike.` },
            { id: "primal-fury", name: "Primal Fury", icon: "ability_racial_cannibalize", row: 3, col: 2, maxPoints: 2, prereq: "sharpened-claws", description: (rank) => `Gives you a ${rank * 50}% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form.` },

            // ROW 5
            { id: "savage-strikes", name: "Savage Strikes", icon: "ability_racial_bloodrage", row: 4, col: 0, maxPoints: 2, description: (rank) => `Increases the critical strike chance of your Claw, Rake, Mangle (Cat), Mangle (Bear) and Maul capabilities by ${rank * 10}%.` },
            { id: "mangle", name: "Mangle", icon: "ability_druid_mangle2", row: 4, col: 2, maxPoints: 1, prereq: "primal-fury", description: (rank) => `Mangle the target, inflicting damage and causing the target to take additional damage from Shred and Bleed effects.` },
            { id: "nurturing-instinct", name: "Nurturing Instinct", icon: "ability_druid_healinginstincts", row: 4, col: 3, maxPoints: 2, description: (rank) => `Increases your healing spells by up to ${rank * 25}% of your Agility.` },

            // ROW 6
            { id: "heart-of-the-wild", name: "Heart of the Wild", icon: "spell_holy_blessingofagility", row: 5, col: 1, maxPoints: 5, prereq: "predatory-strikes", description: (rank) => `Increases your Intellect by ${rank * 4}%. In addition, while in Cat Form your Attack Power is increased by ${rank * 2}%.` },
            { id: "survival-of-the-fittest", name: "Survival of the Fittest", icon: "spell_nature_spiritarmor", row: 5, col: 2, maxPoints: 3, description: (rank) => `Increases all attributes by ${rank * 1}% and reduces the chance you'll be critically hit by melee attacks by ${rank * 1}%.` },

            // ROW 7
            { id: "primal-tenacity", name: "Primal Tenacity", icon: "ability_druid_primaltenacity", row: 6, col: 0, maxPoints: 3, description: (rank) => `Reduces the duration of Fear and Stun effects by ${rank * 10}%. Additionally, reduces all damage taken while Stunned or Feared by ${rank * 10}%.` },
            { id: "leader-of-the-pack", name: "Leader of the Pack", icon: "spell_nature_unyeildingstamina", row: 6, col: 1, maxPoints: 1, description: (rank) => `While in Cat, Bear or Dire Bear Form, Leader of the Pack increases ranged and melee critical chance of all party members within 45 yards by 5%.` },
            { id: "improved-leader-of-the-pack", name: "Improved LotP", icon: "spell_nature_unyeildingstamina", row: 6, col: 2, maxPoints: 2, prereq: "leader-of-the-pack", description: (rank) => `Your LotP also causes affected targets to heal for ${rank * 2}% of total health when they crit. In addition: \n\nBear: Redirects ${rank * 1.5}% of party damage taken (within 20 yds) to you.\nCat: Party bleed effects deal ${rank * 2.5}% increased damage to targets you bleed.` },

            // ROW 8
            { id: "predatory-instincts", name: "Predatory Instincts", icon: "ability_druid_predatoryinstincts", row: 7, col: 2, maxPoints: 5, description: (rank) => `Increases your melee critical strike damage by ${rank * 2}% and reduces damage taken from Area of Effect attacks by ${rank * 3}%. Triggers 'Fight or Flight' reflexes.\nEffect: When you take Area of Effect damage or Dodge an attack, you instantly gain ${rank * 3} Energy (Cat) or ${rank * 2} Rage (Bear) and your movement speed is increased by ${rank * 6}% for 3 seconds. (This effect has a 6-second internal cooldown).` },

            // ROW 9
            { id: "berserk", name: "Berserk", icon: "ability_druid_berserk", row: 8, col: 1, maxPoints: 1, prereq: "leader-of-the-pack", description: (rank) => `Reduces energy cost of Cat abilities by 50% and grants immunity to Fear effects for 15s. 3 min CD.` },
        ]
    },
    restoration: {
        name: "Restoration",
        icon: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg",
        background: "https://i.imgur.com/DNJwQ3e.jpeg",
        talents: [
            // ROW 1
            { id: "improved-mark", name: "Improved Mark of the Wild", icon: "spell_nature_regeneration", row: 0, col: 1, maxPoints: 5, description: (rank) => `Increases the effect of your Mark of the Wild and Gift of the Wild spells by ${rank * 7}%. Imbues the target with 'Adaptive Fur.'\nEffect: When the target takes Elemental damage (Fire, Frost, Nature, Shadow, Arcane), the Mark reacts, reducing damage taken from that specific school by ${rank * 2}% for 6 seconds. (This effect has a 10-second internal cooldown per target).` },
            { id: "furor", name: "Furor", icon: "spell_holy_blessingofstamina", row: 0, col: 2, maxPoints: 5, description: (rank) => `Gives you ${rank * 20}% chance to gain 10 Rage when you shapeshift into Bear Form or 40 Energy when you shapeshift into Cat Form.` },

            // ROW 2
            { id: "naturalist", name: "Naturalist", icon: "spell_nature_healingtouch", row: 1, col: 0, maxPoints: 5, description: (rank) => `Reduces the cast time of your Healing Touch spell by ${rank * 0.1} sec and increases physical damage you deal by ${rank * 2}%.` },
            { id: "nature-focus", name: "Nature's Focus", icon: "spell_nature_healingwavegreater", row: 1, col: 1, maxPoints: 5, description: (rank) => `Gives you a ${rank * 14}% chance to avoid interruption caused by damage while casting Healing Touch, Regrowth and Tranquility.` },
            { id: "natural-shapeshifter", name: "Natural Shapeshifter", icon: "spell_nature_wispsplode", row: 1, col: 2, maxPoints: 3, description: (rank) => `Reduces the mana cost of shapeshifting by ${rank * 10}%. Shifting forms preserves your momentum, granting 'Residual Instincts' for 6 seconds.\n\nShift into Animal (Feral): You retain ${rank * 10}% of your Spell Damage as Attack Power. Your first auto-attack deals Arcane damage (ignoring Armor).\nShift into Caster (Balance/Resto): You retain ${rank * 10}% of your Agility as Spell Power. Your next spell suffers no pushback from damage.` },

            // ROW 3
            { id: "intensity", name: "Intensity", icon: "spell_frost_windwalkon", row: 2, col: 0, maxPoints: 3, description: (rank) => `Allows ${rank * 10}% of your Mana regeneration to continue while casting.` },
            { id: "subtlety", name: "Subtlety", icon: "ability_eyeoftheowl", row: 2, col: 1, maxPoints: 5, description: (rank) => `Reduces the threat generated by your healing spells by ${rank * 4}% and reduces the chance your spells will be dispelled by ${rank * 6}%.` },
            { id: "natures-swiftness", name: "Nature's Swiftness", icon: "spell_nature_ravenform", row: 2, col: 2, maxPoints: 1, prereq: "natural-shapeshifter", description: (rank) => `When activated, your next Nature spell with a base casting time of less than 10 sec becomes an instant cast spell.` },

            // ROW 4
            { id: "tranquil-spirit", name: "Tranquil Spirit", icon: "spell_holy_elunesgrace", row: 3, col: 1, maxPoints: 5, description: (rank) => `Reduces the mana cost of your Healing Touch and Tranquility spells by ${rank * 2}%.` },
            { id: "improved-rejuvenation", name: "Improved Rejuvenation", icon: "spell_nature_rejuvenation", row: 3, col: 2, maxPoints: 3, description: (rank) => `Increases the effect of your Rejuvenation spell by ${rank * 5}%. Additionally, if you cast Rejuvenation on a target with less than 40% health, it instantly heals them for an amount equal to one tick.` },

            // ROW 5
            { id: "swiftmend", name: "Swiftmend", icon: "inv_relics_idolofrejuvenation", row: 4, col: 0, maxPoints: 1, prereq: "intensity", description: (rank) => `Instantly heals the target for an amount equal to 12 sec of your Rejuvenation or Regrowth on them. Does not consume the HoT effects. 15 sec Cooldown.` },
            { id: "gift-of-nature", name: "Gift of Nature", icon: "spell_nature_protectionformnature", row: 4, col: 1, maxPoints: 3, description: (rank) => `Increases the effect of all healing spells by ${rank === 1 ? 4 : rank === 2 ? 7 : 10}%.` },
            { id: "serenity-of-the-wild", name: "Serenity of the Wild", icon: "spell_nature_tranquility", row: 4, col: 3, maxPoints: 2, description: (rank) => `Reduces the threat caused by your Tranquility and Wild Growth spells by ${rank * 50}% and reduces the cooldown of your Tranquility by ${rank * 10}%.` },

            // ROW 6
            { id: "empowered-touch", name: "Empowered Touch", icon: "ability_druid_empoweredtouch", row: 5, col: 0, maxPoints: 2, description: (rank) => `Your Healing Touch gains an additional ${rank * 10}% of your bonus Healing effects.` },
            { id: "improved-regrowth", name: "Improved Regrowth", icon: "spell_nature_resistnature", row: 5, col: 2, maxPoints: 3, description: (rank) => `Increases the critical strike chance of your Regrowth spell by ${rank * 10}%. When you critically hit with Regrowth, you plant a Living Seed on the target for ${rank * 15}% of the amount healed.` },

            // ROW 7
            { id: "living-spirit", name: "Living Spirit", icon: "spell_nature_giftofthewaterspirit", row: 6, col: 0, maxPoints: 3, description: (rank) => `Increases total Spirit by ${rank * 5}% and increases your Bonus Healing by an amount equal to ${rank * 5}% of your total Spirit.` },
            { id: "wild-growth", name: "Wild Growth", icon: "ability_druid_flourish", row: 6, col: 1, maxPoints: 1, prereq: "gift-of-nature", description: (rank) => `Heals up to 5 injured allies within 30 yards of the target for a moderate amount over 7 seconds. Smart heal, prioritizes lowest health targets. 10s CD.` },
            { id: "natural-perfection", name: "Natural Perfection", icon: "spell_nature_protectionformnature", row: 6, col: 2, maxPoints: 3, description: (rank) => `Your critical strike heals give you the Natural Perfection buff, reducing all damage taken by ${rank * 1}%. Stacks 3 times.` },

            // ROW 8
            { id: "empowered-rejuvenation", name: "Empowered Rejuve", icon: "ability_druid_empoweredrejuvination", row: 7, col: 1, maxPoints: 5, description: (rank) => `“Nature reacts to the scent of blood.”\n\nThe bonus healing effects of your healing over time spells is increased by ${rank * 4}%. \n\nIf the target drops below 50% Health, your Rejuvenation ticks ${rank * 20}% faster (healing every 1.5s instead of 3s) until they recover or the spell expires.` },

            // ROW 9
            { id: "tree-of-life", name: "Tree of Life", icon: "ability_druid_treeoflife", row: 8, col: 1, maxPoints: 1, description: (rank) => `3-minute cooldown. Transforms the Druid into the Tree of Life for 25 seconds. While in this form, Healing Touch becomes instant cast, Regrowth applies both HoTs instantly, mana cost of healing spells reduced by 20%, and party members receive 10% increased healing from the Druid. Cannot cast damaging spells.` },
        ]
    }
};
