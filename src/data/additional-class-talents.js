export const hunterTalents = {
    beastMastery: {
        name: "Beast Mastery",
        icon: "https://i.imgur.com/O9XtjlG.png",
        background: "https://i.imgur.com/Mzli4Ic.jpeg",
        talents: [
            // Row 1
            { id: "improved-aspect-of-the-hawk", name: "Imp. Aspect of the Hawk", icon: "spell_nature_ravenform", row: 0, col: 1, maxPoints: 5, description: (rank) => `While Aspect of the Hawk is active, all normal ranged attacks have a ${rank * 2}% chance of increasing ranged attack speed by 30% for 12 sec.` },
            { id: "endurance-training", name: "Endurance Training", icon: "spell_nature_protectionformnature", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases the Health of your pets by ${rank * 2}% and your total Health by ${rank * 1}%.` },

            // Row 2
            { id: "focused-fire", name: "Focused Fire", icon: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_silenthunter.jpg", row: 1, col: 0, maxPoints: 2, description: (rank) => `Increases all damage you deal by ${rank * 1}% while your pet is active.` },
            { id: "improved-aspect-of-the-monkey", name: "Imp. Aspect of the Monkey", icon: "ability_hunter_aspectofthemonkey", row: 1, col: 1, maxPoints: 3, description: (rank) => `Increases the Dodge bonus of your Aspect of the Monkey by ${rank * 2}%.` },
            { id: "thick-hide", name: "Thick Hide", icon: "inv_misc_pelt_bear_03", row: 1, col: 2, maxPoints: 3, description: (rank) => `Increases the armor rating of your pets by ${rank * 7}% and your armor contribution from items by ${rank * 4}%.` },
            { id: "improved-revive-pet", name: "Imp. Revive Pet", icon: "ability_hunter_beastsoothe", row: 1, col: 3, maxPoints: 2, description: (rank) => `Revive Pet's casting time is reduced by ${rank * 3} sec, Focus cost is reduced by ${rank * 20}%, and increases the health your pet returns with by an additional ${rank * 15}%.` },

            // Row 3
            { id: "pathfinding", name: "Pathfinding", icon: "ability_mount_jungletiger", row: 2, col: 0, maxPoints: 2, description: (rank) => `Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ${rank * 4}%.` },
            { id: "cobra-shot", name: "Cobra Shot", icon: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_cobrashot.jpg", row: 2, col: 1, maxPoints: 1, description: (rank) => `A quick shot that deals Physical damage. Replaces Arcane Shot. Generates 14 Focus. No Cooldown.` },
            { id: "unleashed-fury", name: "Unleashed Fury", icon: "ability_bullrush", row: 2, col: 2, maxPoints: 5, description: (rank) => `Increases the damage done by your pets by ${rank * 4}%.` },

            // Row 4
            { id: "improved-mend-pet", name: "Imp. Mend Pet", icon: "ability_hunter_mendpet", row: 3, col: 1, maxPoints: 2, description: (rank) => `Gives the Mend Pet spell a ${rank * 15}% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.` },
            { id: "ferocity", name: "Ferocity", icon: "inv_misc_monsterclaw_04", row: 3, col: 2, maxPoints: 5, description: (rank) => `Increases the critical strike chance of your pets by ${rank * 2}%.` },

            // Row 5
            { id: "spirit-bond", name: "Spirit Bond", icon: "ability_druid_demoralizingroar", row: 4, col: 0, maxPoints: 2, description: (rank) => `While your pet is active, you and your pet regenerate ${rank * 1}% of total health every 10 sec.` },
            { id: "intimidation", name: "Intimidation", icon: "ability_devour", row: 4, col: 1, maxPoints: 1, description: (rank) => `Command your pet to intimidate the target, causing a high amount of threat and stunning the target for 3 sec. If the target is immune to Stun effects, they instead take 10% increased damage from your pet for 10 sec. 1.5 min cooldown. Costs 0 Focus.` },
            { id: "bestial-discipline", name: "Bestial Discipline", icon: "spell_nature_abolishmagic", row: 4, col: 3, maxPoints: 2, description: (rank) => `Increases the Focus regeneration of your pets by ${rank * 50}%.` },

            // Row 6
            { id: "animal-handler", name: "Animal Handler", icon: "ability_hunter_animalhandler", row: 5, col: 0, maxPoints: 2, description: (rank) => `Increases your pet's chance to hit by ${rank * 2}% and increases the duration of your Bestial Wrath effect by ${rank * 2} sec.` },
            { id: "frenzy", name: "Frenzy", icon: "inv_misc_monsterclaw_03", row: 5, col: 2, maxPoints: 5, prereq: "ferocity", description: (rank) => `Gives your pet a ${rank * 20}% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.` },

            // Row 7
            { id: "ferocious-inspiration", name: "Ferocious Inspiration", icon: "ability_hunter_ferociousinspiration", row: 6, col: 0, maxPoints: 3, description: (rank) => `When your pet scores a critical hit, all party members have damage increased by 3% for 10 sec, and you instantly regenerate ${rank * 3.33} Focus.` },
            { id: "bestial-wrath", name: "Bestial Wrath", icon: "ability_druid_ferociousbite", row: 6, col: 1, maxPoints: 1, prereq: "intimidation", description: (rank) => `Send your pet into a rage causing 50% additional damage for 18 sec. The Hunter also goes into a rage causing 10% additional damage and reducing Focus costs of all spells by 20% for 18 sec. While enraged, both you and your pet do not feel pity or remorse or fear and cannot be stopped unless killed. Instantly restores 50 Focus to you and your pet.` },
            { id: "catlike-reflexes", name: "Catlike Reflexes", icon: "ability_hunter_catlikereflexes", row: 6, col: 2, maxPoints: 3, description: (rank) => `Increases your chance to dodge by ${rank * 1}% and your pet's chance to dodge by an additional ${rank * 3}%.` },

            // Row 8
            { id: "serpents-swiftness", name: "Serpent's Swiftness", icon: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_serpentswiftness.jpg", row: 7, col: 2, maxPoints: 5, description: (rank) => `Increases ranged attack speed by ${rank * 4}% and your pet's melee attack speed by ${rank * 4}%.` },

            // Row 9
            {
                id: "spirit-of-the-pack", name: "Spirit of the Pack", icon: "spell_nature_spiritwolf", row: 8, col: 1, maxPoints: 1, prereq: "bestial-wrath", description: (rank) => `Your connection to the wild manifests as a permanent spectral beast that fights at your side. Passive.

Pack Tactics: The beast attacks your target for Physical damage, generating 2 Focus for you.
Dual Kill: Kill Command causes the beast to strike for 50% damage and dash to the target.
Guardian: The beast takes 90% reduced damage from AoE effects.` },
        ]
    },
    marksmanship: {
        name: "Marksmanship",
        icon: "https://i.imgur.com/qtQxThz.png",
        background: "https://i.imgur.com/4GCx3tq.jpeg",
        talents: [
            // Row 1
            { id: "improved-concussive-shot", name: "Imp. Concussive Shot", icon: "spell_frost_stun", row: 0, col: 1, maxPoints: 5, description: (rank) => `Gives your Concussive Shot a ${rank * 4}% chance to stun the target for 3 sec.` },
            { id: "lethal-shots", name: "Lethal Shots", icon: "ability_searingarrow", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases your critical strike chance with ranged weapons by ${rank * 1}%.` },

            // Row 2
            { id: "improved-hunters-mark", name: "Imp. Hunter's Mark", icon: "ability_hunter_snipershot", row: 1, col: 1, maxPoints: 5, description: (rank) => `Increases the melee, ranged, and pet attack power bonus of your Hunter's Mark ability by ${rank * 20}%.` },
            { id: "efficiency", name: "Thrill of the Hunt", icon: "spell_frost_wizardmark", row: 1, col: 2, maxPoints: 5, description: (rank) => `Your critical strikes with ranged attacks have a ${rank * 10}% chance to reduce the Focus cost of your next Aimed Shot or Multi-Shot by 20.` },

            // Row 3
            { id: "go-for-the-throat", name: "Go for the Throat", icon: "ability_hunter_goforthethroat", row: 2, col: 0, maxPoints: 2, description: (rank) => `Your ranged critical hits cause your pet to generate ${rank * 25} Focus.` },
            { id: "improved-arcane-shot", name: "Imp. Arcane Shot", icon: "ability_impalingbolt", row: 2, col: 1, maxPoints: 5, description: (rank) => `Reduces the cooldown of your Arcane Shot by ${rank * 0.2} sec.` },
            { id: "aimed-shot", name: "Aimed Shot", icon: "inv_spear_07", row: 2, col: 2, maxPoints: 1, description: (rank) => `An aimed shot that increases ranged damage by 70 and reduces healing done to that target by 50%. Instant Cast. Costs 50 Focus.` },
            { id: "rapid-killing", name: "Rapid Killing", icon: "ability_hunter_rapidkilling", row: 2, col: 3, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Rapid Fire ability by ${rank * 1} min. In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Auto Shot causes ${rank * 10}% additional damage.` },

            // Row 4
            { id: "marked-for-death", name: "Marked for Death", icon: "ability_hunter_snipershot", row: 3, col: 0, maxPoints: 2, description: (rank) => `Your ranged attacks deal ${rank * 2}% more damage to targets affected by your Hunter's Mark.` },
            { id: "improved-stings", name: "Improved Stings", icon: "ability_hunter_quickshot", row: 3, col: 1, maxPoints: 3, description: (rank) => `Increases the damage done by your Serpent Sting and Wyvern Sting by ${rank * 10}% and the focus drained by your Viper Sting by ${rank * 10}%.` },
            { id: "mortal-shots", name: "Mortal Shots", icon: "https://wow.zamimg.com/images/wow/icons/large/ability_piercedamage.jpg", row: 3, col: 2, maxPoints: 5, prereq: "aimed-shot", description: (rank) => `Increases your ranged weapon critical strike damage bonus by ${rank * 6}%.` },

            // Row 5
            { id: "concussive-barrage", name: "Concussive Barrage", icon: "spell_arcane_starfire", row: 4, col: 0, maxPoints: 3, description: (rank) => `Your successful Auto Shot attacks have a ${rank * 2}% chance to Daze the target for 4 sec.` },
            { id: "scatter-shot", name: "Scatter Shot", icon: "ability_golemstormbolt", row: 4, col: 1, maxPoints: 1, description: (rank) => `A short-range shot that deals 50% weapon damage and disorients the target for 4 sec. Any damage caused will remove the effect.` },
            { id: "barrage", name: "Barrage", icon: "ability_upgrademoonglaive", row: 4, col: 2, maxPoints: 3, description: (rank) => `Increases the damage done by your Multi-Shot and Volley spells by ${rank * 4}%.` },

            // Row 6
            { id: "combat-experience", name: "Combat Experience", icon: "ability_hunter_combatexperience", row: 5, col: 0, maxPoints: 5, description: (rank) => `Increases your total Agility by ${rank * 2}% and your total Haste by ${rank * 2}%.` },
            { id: "ranged-weapon-specialization", name: "Ranged Weapon Spec", icon: "inv_weapon_rifle_06", row: 5, col: 3, maxPoints: 5, description: (rank) => `Increases the damage you deal with ranged weapons by ${rank * 1}%.` },

            // Row 7
            { id: "careful-aim", name: "Careful Aim", icon: "ability_hunter_zenarchery", row: 6, col: 0, maxPoints: 3, description: (rank) => `Increases your Ranged Attack Power by an amount equal to ${rank * 10}% of your total Agility.` },
            { id: "trueshot-aura", name: "Trueshot Aura", icon: "ability_trueshot", row: 6, col: 1, maxPoints: 1, prereq: "scatter-shot", description: (rank) => `Increases the attack power of party members within 45 yards by 50 plus 5% of the Hunter's current Attack Power. Lasts 30 min.` },
            { id: "improved-barrage", name: "Improved Barrage", icon: "ability_upgrademoonglaive", row: 6, col: 2, maxPoints: 3, prereq: "barrage", description: (rank) => `Increases the critical strike chance of your Multi-Shot ability by ${rank * 4}% and gives your Volley ability a ${rank * 33}% chance to be uninterrupted by damage.` },

            // Row 8
            { id: "master-marksman", name: "Master Marksman", icon: "ability_hunter_mastermarksman", row: 7, col: 1, maxPoints: 5, description: (rank) => `Increases your ranged attack power by ${rank * 2}%.` },

            // Row 9
            { id: "silencing-shot", name: "Silencing Shot", icon: "ability_theblackarrow", row: 8, col: 1, maxPoints: 1, prereq: "master-marksman", description: (rank) => `A shot that deals 50% weapon damage and silences the target for 3 sec. Costs 0 Focus. Off-GCD.` },
        ]
    },
    survival: {
        name: "Survival",
        icon: "https://i.imgur.com/xHx9U5j.jpeg",
        background: "https://i.imgur.com/J29bzwN.jpeg",
        talents: [
            // Row 1
            { id: "monster-slaying", name: "Monster Slaying", icon: "inv_misc_head_dragon_black", row: 0, col: 0, maxPoints: 3, description: (rank) => `Increases all damage caused against Beast, Giants and Dragonkin targets by ${rank * 1}% and increases critical damage caused against Beast, Giants and Dragonkin targets by ${rank * 1}%.` },
            { id: "humanoid-slaying", name: "Humanoid Slaying", icon: "spell_holy_prayerofhealing", row: 0, col: 1, maxPoints: 3, description: (rank) => `Increases all damage caused against Humanoid targets by ${rank * 1}% and increases critical damage caused against Humanoid targets by ${rank * 1}%.` },
            { id: "hawk-eye", name: "Hawk Eye", icon: "ability_townwatch", row: 0, col: 2, maxPoints: 3, description: (rank) => `Increases the range of your ranged weapons by ${rank * 2} yards.` },
            { id: "savage-strikes", name: "Savage Strikes", icon: "ability_racial_bloodrage", row: 0, col: 3, maxPoints: 2, description: (rank) => `Increases the critical strike chance of your Raptor Strike and Mongoose Bite abilities by ${rank * 10}%.` },

            // Row 2
            { id: "entrapment", name: "Entrapment", icon: "spell_nature_stranglevines", row: 1, col: 0, maxPoints: 3, description: (rank) => `Gives your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap a ${rank * 8}% chance to entrap the target, preventing them from moving for 4 sec.` },
            { id: "deflection", name: "Deflection", icon: "ability_parry", row: 1, col: 1, maxPoints: 3, description: (rank) => `Increases your Parry chance by ${rank * 1}%.` },
            { id: "improved-wing-clip", name: "Imp. Wing Clip", icon: "ability_rogue_trip", row: 1, col: 2, maxPoints: 5, description: (rank) => `Gives your Wing Clip ability a ${rank * 4}% chance to immobilize the target for 5 sec.` },

            // Row 3
            { id: "clever-traps", name: "Clever Traps", icon: "spell_nature_timestop", row: 2, col: 0, maxPoints: 2, description: (rank) => `Increases the duration of Freezing and Frost trap effects by ${rank * 15}% and the damage of Immolation and Explosive trap effects by ${rank * 15}%.` },
            { id: "survivalist", name: "Survivalist", icon: "spell_shadow_twilight", row: 2, col: 1, maxPoints: 5, description: (rank) => `Increases total Health by ${rank * 2}%.` },
            { id: "readiness", name: "Readiness", icon: "ability_hunter_readiness", row: 2, col: 2, maxPoints: 1, description: (rank) => `When activated, this ability immediately finishes the cooldown on your other Hunter abilities.` },

            // Row 4
            { id: "trap-mastery", name: "Trap Mastery", icon: "ability_ensnare", row: 3, col: 0, maxPoints: 2, description: (rank) => `Decreases the chance enemies will resist trap effects by ${rank * 5}%.` },
            { id: "surefooted", name: "Surefooted", icon: "ability_kick", row: 3, col: 1, maxPoints: 3, description: (rank) => `Increases hit chance by ${rank * 1}% and increases the chance you resist movement impairing effects by ${rank * 5}%.` },
            { id: "improved-feign-death", name: "Imp. Feign Death", icon: "ability_rogue_feigndeath", row: 3, col: 3, maxPoints: 2, description: (rank) => `Reduces the chance your Feign Death ability will be resisted by ${rank * 2}%.` },
            { id: "lock-and-load", name: "Lock and Load", icon: "ability_hunter_lockandload", row: 4, col: 3, maxPoints: 2, prereq: "improved-feign-death", description: (rank) => `When your traps trigger, you have a ${rank * 50}% chance to cause your next 2 Arcane Shots or Explosive Shots to cost 0 Focus and trigger no cooldown.` },

            // Row 5
            { id: "survival-instincts", name: "Survival Instincts", icon: "ability_hunter_survivalinstincts", row: 4, col: 0, maxPoints: 2, description: (rank) => `Reduces all damage taken by ${rank * 2}% and increases attack power by ${rank * 2}%.` },
            { id: "killer-instinct", name: "Killer Instinct", icon: "spell_holy_blessingofstamina", row: 4, col: 1, maxPoints: 3, description: (rank) => `Increases your critical strike chance with all attacks by ${rank * 1}%.` },
            { id: "trap-launcher", name: "Trap Launcher", icon: "ability_hunter_traplauncher", row: 4, col: 2, maxPoints: 1, prereq: "readiness", description: (rank) => `Your traps can now be launched to a target location within 40 yards. Traps cost 50% less Focus.` },

            // Row 6
            { id: "resourcefulness", name: "Resourcefulness", icon: "ability_hunter_resourcefulness", row: 5, col: 0, maxPoints: 3, description: (rank) => `Reduces the Focus cost of all traps and melee abilities by ${rank * 20}% and reduces the cooldown of all traps by ${rank * 2} sec.` },
            { id: "lightning-reflexes", name: "Lightning Reflexes", icon: "spell_nature_invisibilty", row: 5, col: 2, maxPoints: 5, description: (rank) => `Increases your Agility by ${rank * 3}%.` },

            // Row 7
            { id: "thrill-of-the-hunt", name: "Thrill of the Hunt", icon: "ability_hunter_thrillofthehunt", row: 6, col: 0, maxPoints: 3, description: (rank) => `Gives you a ${rank * 33}% chance to regain 40% of the Focus cost of any shot when it critically hits.` },
            { id: "explosive-shot", name: "Explosive Shot", icon: "ability_hunter_explosiveshot", row: 6, col: 1, maxPoints: 1, prereq: "killer-instinct", description: (rank) => `Fires an explosive charge into the enemy target, dealing Fire damage. Costs 25 Focus. 6 sec Cooldown (Shared with Arcane Shot).` },
            { id: "expose-weakness", name: "Expose Weakness", icon: "ability_rogue_findweakness", row: 6, col: 2, maxPoints: 3, prereq: "lightning-reflexes", description: (rank) => `Your Ranged criticals have a ${rank * 33}% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the attack power of all attackers against that target by 25% of your Agility for 7 sec. Also reduces the Focus cost of your next Multi-Shot by 50%.` },

            // Row 8
            { id: "master-tactician", name: "Master Tactician", icon: "https://wow.zamimg.com/images/wow/icons/large/ability_hunter_mastertactitian.jpg", row: 7, col: 1, maxPoints: 5, description: (rank) => `Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by ${rank * 2}% for 8 sec.` },

            // Row 9 
            { id: "black-arrow", name: "Black Arrow", icon: "spell_shadow_painspike", row: 8, col: 1, maxPoints: 1, prereq: "master-tactician", description: (rank) => `Fires an arrow that deals Shadow damage over 15 seconds. While Black Arrow is active, your periodic damage ticks have a chance to reset the cooldown of Explosive Shot. Also debuffs the target for +8% Nature and Fire damage taken from the Hunter. 30 sec Cooldown. Costs 35 Focus.` },
        ]
    }
};

export const mageTalents = {
    arcane: {
        name: "Arcane",
        icon: "https://i.imgur.com/Zt0BQe6.png",
        background: "https://i.imgur.com/IkUZKRI.jpeg",
        talents: [
            // Row 1
            { id: "arcane-subtlety", name: "Arcane Subtlety", icon: "spell_holy_dispelmagic", row: 0, col: 0, maxPoints: 2, description: (rank) => `Reduces your target's resistance to all your spells by ${rank * 5} and reduces the threat caused by your Arcane spells by ${rank * 20}%.` },
            { id: "arcane-focus", name: "Arcane Focus", icon: "spell_holy_devotion", row: 0, col: 1, maxPoints: 5, description: (rank) => `Reduces the chance that the opponent can resist your Arcane spells by ${rank * 2}%.` },
            { id: "improved-arcane-missiles", name: "Imp. Arcane Missiles", icon: "spell_nature_starfall", row: 0, col: 2, maxPoints: 3, description: (rank) => `Gives you a ${rank * 33}% chance to avoid interruption caused by damage while channeling Arcane Missiles.` },

            // Row 2
            { id: "wand-specialization", name: "Wand Specialization", icon: "inv_wand_01", row: 1, col: 0, maxPoints: 2, description: (rank) => `Increases your damage with Wands by ${rank * 12.5}%.` },
            { id: "magic-absorption", name: "Magic Absorption", icon: "spell_nature_astralrecalgroup", row: 1, col: 1, maxPoints: 5, description: (rank) => `Increases all resistances by ${rank * 2} and causes all spells you fully resist to restore ${rank * 1}% of your total mana.` },
            { id: "arcane-concentration", name: "Arcane Concentration", icon: "spell_shadow_manaburn", row: 1, col: 2, maxPoints: 5, description: (rank) => `Gives you a ${rank * 2}% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.` },

            // Row 3
            { id: "arcane-reach", name: "Arcane Reach", icon: "spell_nature_abolishmagic", row: 2, col: 0, maxPoints: 2, description: (rank) => `Increases the range of your Arcane spells by ${rank * 10}% and the radius of your Arcane Explosion by ${rank * 10}%.` },
            { id: "arcane-barrage", name: "Arcane Barrage", icon: "https://wow.zamimg.com/images/wow/icons/large/ability_mage_arcanebarrage.jpg", row: 2, col: 3, maxPoints: 1, description: (rank) => `Launches bolts of arcane energy at the target, dealing moderate damage. Consumes all Arcane Blast stacks to deal bonus damage per stack consumed. Instant cast, 4.5s CD.` },
            { id: "arcane-impact", name: "Arcane Impact", icon: "spell_nature_wispheal", row: 2, col: 1, maxPoints: 3, description: (rank) => `Increases the critical strike chance of your Arcane Explosion and Arcane Blast spells by an additional ${rank * 2}%.` },

            // Row 4
            { id: "student-of-the-mind", name: "Student of the Mind", icon: "spell_arcane_mindmastery", row: 3, col: 0, maxPoints: 2, description: (rank) => `Increases your total Spirit by ${rank * 5}%.` },
            { id: "arcane-meditation", name: "Arcane Meditation", icon: "spell_shadow_siphonmana", row: 3, col: 3, maxPoints: 3, description: (rank) => `Allows ${rank * 10}% of your Mana regeneration to continue while casting.` },
            { id: "imp-blink", name: "Imp. Blink", icon: "spell_arcane_blink", row: 3, col: 1, maxPoints: 2, description: (rank) => `Reduces the mana cost of your Blink spell by ${rank * 25}%.` },

            // Row 5
            { id: "improved-counterspell", name: "Imp. Counterspell", icon: "spell_frost_iceshock", row: 4, col: 0, maxPoints: 2, description: (rank) => `Gives your Counterspell a ${rank * 50}% chance to silence the target for 4 sec.` },
            { id: "presence-of-mind", name: "Presence of Mind", icon: "spell_nature_enchantarmor", row: 4, col: 1, maxPoints: 1, description: (rank) => `When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell. 2.5 min cooldown.` },
            { id: "arcane-mind", name: "Arcane Mind", icon: "spell_shadow_charm", row: 4, col: 3, maxPoints: 5, description: (rank) => `Increases your total Intellect by ${rank * 3}%.` },
            { id: "prismatic-cloak", name: "Prismatic Cloak", icon: "spell_arcane_prismaticcloak", row: 5, col: 0, maxPoints: 2, description: (rank) => `Reduces all damage taken by ${rank * 2}% and reduces the fade time of your Invisibility spell by ${rank * 1} sec.` },

            // Row 6
            { id: "arcane-instability", name: "Arcane Instability", icon: "spell_shadow_teleport", row: 5, col: 1, maxPoints: 3, prereq: "presence-of-mind", description: (rank) => `Increases your spell damage and critical strike chance by ${rank * 1}%.` },
            { id: "arcane-potency", name: "Arcane Potency", icon: "spell_arcane_arcanepotency", row: 4, col: 2, maxPoints: 3, prereq: "arcane-concentration", description: (rank) => `Increases the critical strike chance of your next damaging spell by ${rank * 10}% after gaining Clearcasting.` },

            // Row 7
            { id: "empowered-arcane-missiles", name: "Emp. Arcane Missiles", icon: "spell_nature_starfall", row: 6, col: 0, maxPoints: 3, description: (rank) => `Your Arcane Missiles spell gains an additional ${rank * 15}% of your bonus spell damage effects but mana cost is increased by ${rank * 2}%.` },
            { id: "arcane-power", name: "Arcane Power", icon: "spell_nature_lightning", row: 6, col: 1, maxPoints: 1, prereq: "arcane-instability", description: (rank) => `When activated, your spells deal 30% more damage while costing 30% more mana to cast. This effect lasts 17 sec. 2 min cooldown.` },
            { id: "spell-power", name: "Spell Power", icon: "spell_arcane_arcane02", row: 6, col: 2, maxPoints: 2, description: (rank) => `Increases critical strike damage bonus of all spells by ${rank * 25}%.` },

            // Row 8
            { id: "mind-mastery", name: "Mind Mastery", icon: "spell_arcane_mindmastery", row: 7, col: 1, maxPoints: 5, description: (rank) => `Increases spell damage by up to ${rank * 5}% of your total Intellect.` },

            // Row 9 
            { id: "alter-time", name: "Alter Time", icon: "spell_mage_altertime", row: 8, col: 1, maxPoints: 1, description: (rank) => `Instantly alters the fabric of time, taking a snapshot of your current Mana and Location. After 10 sec or when cast again, you are returned to that location and mana amount. 3 min cooldown.` },
        ]
    },
    fire: {
        name: "Fire",
        icon: "https://i.imgur.com/TRNTMys.png",
        background: "https://i.imgur.com/akiCtIM.jpeg",
        talents: [
            // Row 1
            { id: "improved-fireball", name: "Imp. Fireball", icon: "spell_fire_flamebolt", row: 0, col: 1, maxPoints: 5, description: (rank) => `Reduces the casting time of your Fireball spell by ${rank * 0.1} sec.` },
            { id: "impact", name: "Impact", icon: "spell_fire_meteorstorm", row: 0, col: 2, maxPoints: 5, description: (rank) => `Gives your Fire spells a ${rank * 3}% chance to stun the target for 2 sec.` },

            // Row 2
            { id: "ignite", name: "Ignite", icon: "spell_fire_incinerate", row: 1, col: 0, maxPoints: 5, description: (rank) => `Your critical strikes from Fire damage spells cause the target to burn for an additional ${rank * 8}% of your spell's damage over 4 sec.` },
            { id: "flame-throwing", name: "Flame Throwing", icon: "spell_fire_flare", row: 1, col: 1, maxPoints: 2, description: (rank) => `Increases the range of your Fire spells by ${rank * 3} yards. Additionally, increases the radius of your Blast Wave, Living Bomb and Dragon's Breath spells by ${rank * 2} yards.` },
            { id: "improved-fire-blast", name: "Imp. Fire Blast", icon: "spell_fire_fireball", row: 1, col: 2, maxPoints: 3, description: (rank) => `Reduces the cooldown of your Fire Blast spell by ${rank * 1} sec and increases its critical strike chance by ${rank * 10}%.` },

            // Row 3
            { id: "incinerate", name: "Incinerate", icon: "spell_fire_flameshock", row: 2, col: 0, maxPoints: 2, description: (rank) => `Increases the critical strike chance of your Fire Blast and Scorch spells by ${rank * 2}% and increases the critical strike damage multiplier of Pyroblast by ${rank * 5}%.` },
            { id: "wildfire", name: "Wildfire", icon: "spell_fire_elementaldevastation", row: 2, col: 1, maxPoints: 3, description: (rank) => `Increases the critical strike chance of your Flamestrike, Blast Wave, Dragon's Breath, Meteor, and Living Bomb spells by ${rank * 3}%.` },
            { id: "blast-wave", name: "Blast Wave", icon: "spell_holy_excorcism_02", row: 2, col: 2, maxPoints: 1, description: (rank) => `A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for Fire damage and dazing them for 6 sec.` },
            { id: "burning-soul", name: "Burning Soul", icon: "spell_fire_fire", row: 2, col: 3, maxPoints: 2, description: (rank) => `Reduces the threat caused by your Fire spells by ${rank * 5}% and gives your Fire spells a ${rank * 35}% chance to not be interrupted by damage.` },

            // Row 4
            { id: "improved-scorch", name: "Imp. Scorch", icon: "spell_fire_soulburn", row: 3, col: 0, maxPoints: 2, description: (rank) => `Your Scorch strikes have a ${rank * 50}% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases the Fire damage taken by your target by 3% and lasts 30 sec. Stacks up to 5 times. Applies 2 stacks per application.` },
            { id: "molten-shields", name: "Molten Shields", icon: "spell_fire_firearmor", row: 3, col: 1, maxPoints: 2, description: (rank) => `Reduces the chance you will be critically hit by attacks by ${rank * 2}%. Additionally, your Molten Armor deals additional damage equal to ${rank * 15}% of your Spell Power.` },
            { id: "master-of-elements", name: "Master of Elements", icon: "spell_fire_masterofelements", row: 3, col: 3, maxPoints: 3, description: (rank) => `Your Fire and Frost spell criticals will refund ${rank * 10}% of their base mana cost.` },

            // Row 5
            { id: "cauterize", name: "Cauterize", icon: "spell_fire_playingwithfire", row: 4, col: 0, maxPoints: 3, description: (rank) => `Increases fire damage by ${rank * 1}%. In addition, an attack that would otherwise kill you instead heals you to 40% of your maximum health. However, you will burn for 12% of your maximum health every second for 4 sec. 1 min Internal Cooldown.` },
            { id: "critical-mass", name: "Critical Mass", icon: "spell_nature_wispheal", row: 4, col: 1, maxPoints: 3, description: (rank) => `Increases the critical strike chance of your Fire spells by ${rank * 2}%.` },
            { id: "meteor", name: "Meteor", icon: "spell_fire_meteorstorm", row: 4, col: 2, maxPoints: 1, prereq: "blast-wave", description: (rank) => `Calls down a meteor that strikes the target location after 3 seconds, dealing high Fire damage split evenly among targets within 8 yards, and applying a burning ground effect. 45s CD.` },

            // Row 6
            { id: "blazing-speed", name: "Blazing Speed", icon: "spell_fire_burningspeed", row: 5, col: 0, maxPoints: 2, description: (rank) => `Gives you a ${rank * 5}% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all movement impairing effects. Lasts 8 sec.` },
            { id: "fire-power", name: "Fire Power", icon: "spell_fire_immolation", row: 5, col: 2, maxPoints: 5, description: (rank) => `Increases the damage done by your Fire spells by ${rank * 2}%. Your critical strikes with Fire spells have a ${rank * 20}% chance to grant "Accelerated Burn," reducing the cast time of your next Scorch or Fireball by 0.5 sec.` },
            { id: "dragons-breath", name: "Dragon's Breath", icon: "inv_misc_head_dragon_01", row: 5, col: 3, maxPoints: 1, prereq: "master-of-elements", description: (rank) => `Targets in a cone in front of the caster take Fire damage and are Disoriented for 3 sec. Any direct damaging attack will revive targets.` },

            // Row 7
            { id: "pyromaniac", name: "Pyromaniac", icon: "spell_fire_burnout", row: 6, col: 0, maxPoints: 3, description: (rank) => `Increases chance to critically hit by ${rank * 1}% and reduces mana cost of Fire spells by ${rank * 1}%. You have a ${rank * 33}% chance that when you score 2 spell critical hits in a row, your next Pyroblast becomes instant cast and costs no mana.` },
            { id: "combustion", name: "Combustion", icon: "spell_fire_sealoffire", row: 6, col: 1, maxPoints: 1, prereq: "critical-mass", description: (rank) => `Combines your Fire DoTs (Ignite, Pyroblast DoT, Living Bomb) on the target into a single 10-second DoT dealing their remaining damage rapidly. Also increases your critical strike chance against the target by 100% for the duration. 2 min CD.` },
            { id: "molten-fury", name: "Molten Fury", icon: "spell_fire_moltenblood", row: 6, col: 2, maxPoints: 2, description: (rank) => `Increases damage of all spells against targets with less than 20% health by ${rank * 10}%.` },

            // Row 8
            { id: "empowered-fireball", name: "Emp. Fireball", icon: "spell_fire_flamebolt", row: 7, col: 2, maxPoints: 5, description: (rank) => `Your Fireball spell gains an additional ${rank * 3}% of your bonus spell damage effects.` },

            // Row 9 
            { id: "living-bomb", name: "Living Bomb", icon: "spell_fire_sae", row: 8, col: 1, maxPoints: 1, prereq: "combustion", description: (rank) => `The target becomes a Living Bomb, taking Fire damage over 12 sec. After 12 sec or when the spell is dispelled, the target explodes dealing Fire damage to all enemies within 10 yards.` },
        ]
    },
    frost: {
        name: "Frost",
        icon: "https://i.imgur.com/oR1e4BK.png",
        background: "https://i.imgur.com/Wu3ePx9.jpeg",
        talents: [
            // Row 1
            { id: "frost-warding", name: "Frost Warding", icon: "spell_frost_frostward", row: 0, col: 0, maxPoints: 2, description: (rank) => `Increases the armor and resistance given by your Frost Armor and Ice Armor spells by ${rank * 15}%. In addition, gives your Frost Ward and Fire Ward spells a ${rank * 15}% chance to reflect the reflected spell back at its caster.` },
            { id: "improved-frostbolt", name: "Imp. Frostbolt", icon: "spell_frost_frostbolt02", row: 0, col: 1, maxPoints: 5, description: (rank) => `Reduces the casting time of your Frostbolt spell by ${rank * 0.1} sec.` },
            { id: "elemental-precision", name: "Elemental Precision", icon: "spell_ice_magicdamage", row: 0, col: 2, maxPoints: 3, description: (rank) => `Reduces the mana cost of your Frost spells by ${rank * 1}% and gives your Frost spells a ${rank * 1}% chance to hit.` },

            // Row 2
            { id: "ice-shards", name: "Ice Shards", icon: "spell_frost_iceshard", row: 1, col: 0, maxPoints: 5, description: (rank) => `Increases the critical strike damage bonus of your Frost spells by ${rank * 20}%.` },
            { id: "frostbite", name: "Frostbite", icon: "spell_frost_frostarmor", row: 1, col: 1, maxPoints: 3, description: (rank) => `Gives your Chill effects a ${rank * 5}% chance to freeze the target for 5 sec.` },
            { id: "improved-frost-nova", name: "Imp. Frost Nova", icon: "spell_frost_freezingbreath", row: 1, col: 2, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Frost Nova spell by ${rank * 2} sec.` },
            { id: "permafrost", name: "Permafrost", icon: "spell_frost_wisp", row: 1, col: 3, maxPoints: 3, description: (rank) => `Increases the duration of your Chill effects by ${rank * 1} sec and reduces the target's speed by an additional ${rank * 4}%.` },

            // Row 3
            { id: "piercing-ice", name: "Piercing Ice", icon: "spell_frost_frostbolt", row: 2, col: 0, maxPoints: 3, description: (rank) => `Increases the damage done by your Frost spells by ${rank * 2}%.` },
            { id: "icy-veins", name: "Icy Veins", icon: "spell_frost_coldhearted", row: 2, col: 1, maxPoints: 1, description: (rank) => `Reduces casting time of all spells by 20% and increases the chance your Chill effects will freeze the target by 10%. Lasts 20 sec.` },
            { id: "improved-blizzard", name: "Imp. Blizzard", icon: "spell_frost_icestorm", row: 2, col: 3, maxPoints: 3, description: (rank) => `Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by ${rank * 10}%. Lasts 1.50 sec.` },

            // Row 4
            { id: "arctic-reach", name: "Arctic Reach", icon: "spell_shadow_darkritual", row: 3, col: 0, maxPoints: 2, description: (rank) => `Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by ${rank * 10}%.` },
            { id: "frost-channeling", name: "Frost Channeling", icon: "spell_frost_stun", row: 3, col: 1, maxPoints: 3, description: (rank) => `Reduces the mana cost of your Frost spells by ${rank * 5}% and reduces the threat caused by your Frost spells by ${rank * 4}%.` },
            { id: "shatter", name: "Shatter", icon: "spell_frost_frostshock", row: 3, col: 2, maxPoints: 5, prereq: "improved-frost-nova", description: (rank) => `Increases the critical strike chance of all your spells against frozen targets by ${rank * 10}%.` },

            // Row 5
            { id: "deep-freeze", name: "Deep Freeze", icon: "ability_mage_deepfreeze", row: 4, col: 1, maxPoints: 1, description: (rank) => `Stuns the target for 5 sec. Only usable on Frozen targets. If the target is immune to stuns (Bosses), it deals massive Frost damage instead. 30 sec cooldown.` },
            { id: "improved-cone-of-cold", name: "Imp. Cone of Cold", icon: "spell_frost_glacier", row: 4, col: 2, maxPoints: 3, description: (rank) => `Increases the damage dealt by your Cone of Cold spell by ${rank * 10}%.` },
            { id: "shattered-barrier", name: "Shattered Barrier", icon: "spell_frost_frozensection", row: 4, col: 0, maxPoints: 2, description: (rank) => `Your Ice Barrier now gains additional absorption equal to ${rank * 40}% of your Spell Power. When your Ice Barrier is destroyed, it freezes all enemies within 10 yards for 4 sec.` },
            { id: "frozen-orb", name: "Frozen Orb", icon: "spell_frost_frozenorb", row: 4, col: 3, maxPoints: 1, prereq: "improved-blizzard", description: (rank) => `Launches an orb of swirling ice forward, dealing Frost damage every second to nearby enemies for 10 seconds and slowing them. Grants 1 charge of Fingers of Frost the first time it hits a target. 1 min CD.` },

            // Row 6
            { id: "ice-floes", name: "Ice Floes", icon: "spell_frost_icefloes", row: 5, col: 0, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Cone of Cold, Cold Snap, Ice Barrier and Ice Block spells by ${rank * 10}%.` },
            { id: "fingers-of-frost", name: "Fingers of Frost", icon: "spell_frost_frostblast", row: 5, col: 2, maxPoints: 3, description: (rank) => `Your Chill effects have a ${rank * 5}% chance to grant you the Fingers of Frost effect, causing your next 2 spells to treat the target as if it were Frozen.` },
            { id: "brain-freeze", name: "Brain Freeze", icon: "spell_frost_brainfreeze", row: 5, col: 3, maxPoints: 2, description: (rank) => `Your Frostbolt has a ${rank * 5}% chance to make your next Fireball or Frostfire Bolt instant cast and cost no mana.` },

            // Row 7
            { id: "ice-barrier", name: "Ice Barrier", icon: "spell_ice_lament", row: 6, col: 1, maxPoints: 1, prereq: "cold-snap", description: (rank) => `Instantly shields you, absorbing damage. Lasts 1 min. While the shield holds, spells will not be interrupted.` },
            { id: "arctic-winds", name: "Arctic Winds", icon: "spell_frost_arcticwinds", row: 6, col: 2, maxPoints: 5, description: (rank) => `Increases all Frost damage caused by ${rank * 1}% and reduces the chance melee and ranged attacks will hit you by ${rank * 1}%. Your Chill effects have a ${rank * 3}% chance to grant you Glacial Spike. Your next Ice Lance treats the target as Frozen.` },

            // Row 8
            { id: "empowered-frostbolt", name: "Emp. Frostbolt", icon: "spell_frost_frostbolt02", row: 7, col: 1, maxPoints: 5, description: (rank) => `Reduces the casting time of your Frostbolt spell by ${rank * 0.1} sec and increases your critical strike chance with it by ${rank * 1}%. Increases the damage of your Frostbolt by an amount equal to ${rank * 5}% of your Intellect.` },

            // Row 9 
            { id: "summon-water-elemental", name: "Summon Water Elemental", icon: "spell_frost_summonwaterelemental_2", row: 8, col: 1, maxPoints: 1, description: (rank) => `Summons a Water Elemental to fight for you. It lasts until dismissed or killed.` },
        ]
    }
};


export const paladinTalents = {
    holy: {
        name: "Holy",
        icon: "https://i.imgur.com/nbn8UHD.jpeg",
        background: "https://i.imgur.com/jXu8owF.jpeg",
        talents: [
            // Row 1
            { id: "divine-strength", name: "Divine Strength", icon: "spell_holy_auraoflight", row: 0, col: 1, maxPoints: 5, description: (rank) => `Increases your Strength by ${rank * 2}%.` },
            { id: "divine-intellect", name: "Divine Intellect", icon: "spell_nature_sleep", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases your total Intellect by ${rank * 2}%.` },

            // Row 2
            { id: "spiritual-focus", name: "Spiritual Focus", icon: "spell_arcane_blink", row: 1, col: 1, maxPoints: 5, description: (rank) => `Gives your Flash of Light and Holy Light spells a ${rank * 14}% chance to not lose casting time when you take damage.` },
            { id: "improved-seal-of-righteousness", name: "Imp. Seal of Righteousness", icon: "ability_thunderbolt", row: 1, col: 2, maxPoints: 5, description: (rank) => `Increases the damage done by your Seal of Righteousness and Judgement of Righteousness by ${rank * 3}%.` },

            // Row 3
            { id: "healing-light", name: "Healing Light", icon: "spell_holy_holybolt", row: 2, col: 0, maxPoints: 3, description: (rank) => `Increases the amount healed by your Holy Light and Flash of Light spells by ${rank * 4}%.` },
            { id: "aura-mastery", name: "Aura Mastery", icon: "spell_holy_auramastery", row: 2, col: 1, maxPoints: 1, description: (rank) => `Empowers your active Aura for 10 seconds, granting a unique effect based on the Aura currently active. Sharing this effect does not remove the passive Aura benefit.` },
            { id: "improved-lay-on-hands", name: "Imp. Lay on Hands", icon: "spell_holy_layonhands", row: 2, col: 2, maxPoints: 2, description: (rank) => `Gives the target of your Lay on Hands spell a ${rank * 15}% bonus to their armor value from items for 2 min. In addition, the cooldown for your Lay on Hands spell is reduced by ${rank * 10} min.` },
            { id: "unyielding-faith", name: "Unyielding Faith", icon: "spell_holy_unyieldingfaith", row: 2, col: 3, maxPoints: 2, description: (rank) => `Reduces the chance you will be afflicted by Fear and Disorient effects by ${rank * 5}%.` },

            // Row 4
            { id: "illumination", name: "Illumination", icon: "spell_holy_greaterheal", row: 3, col: 1, maxPoints: 5, description: (rank) => `After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock spell, gives you a ${rank * 12}% chance to gain Mana equal to 60% of the base cost of your spell.` },
            { id: "improved-blessing-of-wisdom", name: "Imp. Blessing of Wisdom", icon: "spell_holy_sealofwisdom", row: 3, col: 2, maxPoints: 2, description: (rank) => `Increases the effect of your Blessing of Wisdom spell by ${rank * 10}%.` },

            // Row 5
            { id: "pure-of-heart", name: "Pure of Heart", icon: "spell_holy_pureofheart", row: 4, col: 0, maxPoints: 3, description: (rank) => `Reduces the duration of Curse and Disease effects by ${rank * 15}%.` },
            { id: "lights-hammer", name: "Light's Hammer", icon: "spell_paladin_lightshammer", row: 4, col: 1, maxPoints: 1, prereq: "illumination", description: (rank) => `Hurls a Light-infused hammer to the ground, healing friendly targets within 10 yards for a moderate amount every 2 sec for 14 sec. 1 min Cooldown.` },
            { id: "sanctified-light", name: "Sanctified Light", icon: "spell_holy_healingaura", row: 4, col: 2, maxPoints: 3, description: (rank) => `Increases the critical effect chance of your Holy Light and Holy Shock spells by ${rank * 2}%.` },

            // Row 6
            { id: "purifying-power", name: "Purifying Power", icon: "spell_holy_purifyingpower", row: 5, col: 0, maxPoints: 2, description: (rank) => `Reduces the mana cost of your Cleanse, Purify, and Consecration spells by ${rank * 5}% and reduces the threat generated by your Holy spells by ${rank * 10}% and increases the critical strike chance of your Holy Wrath and Exorcism spells by ${rank * 10}%.` },
            { id: "holy-power", name: "Holy Power", icon: "spell_holy_power", row: 5, col: 2, maxPoints: 5, description: (rank) => `Increases the critical effect chance of your Holy spells by ${rank * 1}% and reduces the cast time of your Holy Light by ${rank * 0.1} sec.` },

            // Row 7
            { id: "infusion-of-light", name: "Infusion of Light", icon: "spell_holy_lightsgrace", row: 6, col: 0, maxPoints: 1, prereq: "holy-shock", description: (rank) => `Your Holy Shock critical hits reduce the cast time of your next Holy Light by 1.0 sec.` },
            { id: "holy-shock", name: "Holy Shock", icon: "spell_holy_searinglight", row: 6, col: 1, maxPoints: 1, prereq: "lights-hammer", description: (rank) => `Blasts the target with Holy energy, causing 277 to 300 Holy damage to an enemy, or 277 to 300 healing to an ally.` },
            { id: "blessed-life", name: "Blessed Life", icon: "spell_holy_blessedlife", row: 6, col: 2, maxPoints: 3, description: (rank) => `All attacks against you have a ${rank * 3}% chance to cause half damage.` },

            // Row 8
            { id: "holy-guidance", name: "Holy Guidance", icon: "spell_holy_holyguidance", row: 7, col: 1, maxPoints: 5, description: (rank) => `Increases your spell damage and healing by ${rank * 7}% of your total Intellect.` },

            // Row 9 
            { id: "beacon-of-light", name: "Beacon of Light", icon: "ability_paladin_beaconoflight", row: 8, col: 1, maxPoints: 1, description: (rank) => `The target becomes a Beacon of Light. Any heals you cast on other party or raid members will also heal the Beacon for 50% of the amount healed.` },
        ]
    },
    protection: {
        name: "Protection",
        icon: "https://i.imgur.com/tcWwZXg.png",
        background: "https://i.imgur.com/tbZ5OcF.jpeg",
        talents: [
            // Row 1
            { id: "improved-devotion-aura", name: "Imp. Devotion Aura", icon: "spell_holy_devotionaura", row: 0, col: 1, maxPoints: 5, description: (rank) => `Increases the armor bonus of your Devotion Aura by ${rank * 8}%.` },
            { id: "redoubt", name: "Redoubt", icon: "ability_defend", row: 0, col: 2, maxPoints: 5, description: (rank) => `Damaging melee or ranged attacks against you have a 10% chance to increase your chance to block by ${rank * 6}%. Lasts 10 sec or 5 blocks.` },

            // Row 2
            { id: "precision", name: "Precision", icon: "ability_rogue_ambush", row: 1, col: 0, maxPoints: 3, description: (rank) => `Increases your chance to hit with melee weapons and spells by ${rank * 1}%.` },
            { id: "guardians-favor", name: "Guardian's Favor", icon: "spell_holy_sealofprotection", row: 1, col: 1, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Blessing of Protection by ${rank * 60} sec and increases the duration of your Blessing of Freedom by ${rank * 3} sec.` },
            { id: "toughness", name: "Toughness", icon: "spell_holy_devotion", row: 1, col: 3, maxPoints: 5, description: (rank) => `Increases your armor value from items by ${rank * 2}%.` },

            // Row 3
            { id: "hammer-of-the-righteous", name: "Hammer of Righteous", icon: "ability_paladin_hammeroftherighteous", row: 2, col: 0, maxPoints: 1, description: (rank) => `Hammer the current target and up to 2 additional nearby targets for 4 times your main hand DPS as Holy damage. 6 sec Cooldown.` },
            { id: "improved-righteous-fury", name: "Imp. Righteous Fury", icon: "spell_holy_sealoffury", row: 2, col: 1, maxPoints: 3, description: (rank) => `While Righteous Fury is active, all damage taken is reduced by ${rank * 2}% and generates ${rank * 16}% increased threat.` },
            { id: "shield-specialization", name: "Shield Specialization", icon: "inv_shield_06", row: 2, col: 2, maxPoints: 3, prereq: "redoubt", description: (rank) => `Increases the amount of damage absorbed by your shield by ${rank * 10}%.` },
            { id: "anticipation", name: "Anticipation", icon: "spell_magic_lesserinvisibilty", row: 2, col: 3, maxPoints: 5, description: (rank) => `Increases your Defense skill by ${rank * 4}. In addition, whenever you Dodge, Parry, or Block an attack, you have a ${rank * 20}% chance to gain the 'Anticipation' effect, reducing the mana cost of your next Holy Shield, Consecration, or Judgement by 100%.` },

            // Row 4
            { id: "stoicism", name: "Stoicism", icon: "spell_holy_stoicism", row: 3, col: 0, maxPoints: 2, description: (rank) => `Reduces the duration of Stun effects by ${rank * 10}% and reduces the chance your spells will be dispelled by an additional ${rank * 15}%.` },
            { id: "improved-hammer-of-justice", name: "Imp. Hammer of Justice", icon: "spell_holy_sealofmight", row: 3, col: 1, maxPoints: 3, description: (rank) => `Reduces the cooldown of your Hammer of Justice spell by ${rank * 5} sec.` },
            { id: "improved-concentration-aura", name: "Imp. Concentration Aura", icon: "spell_holy_mindsooth", row: 3, col: 2, maxPoints: 3, description: (rank) => `Increases the effect of your Concentration Aura by an additional ${rank * 5}% and reduces the duration of Silence and Interrupt effects by ${rank * 10}% for group members using the aura.` },

            // Row 5
            { id: "spell-warding", name: "Spell Warding", icon: "spell_holy_spellwarding", row: 4, col: 0, maxPoints: 2, description: (rank) => `Reduces all spell damage taken by ${rank * 2}%.` },
            { id: "blessing-of-sanctuary", name: "Blessing of Sanctuary", icon: "spell_nature_lightningshield", row: 4, col: 1, maxPoints: 1, description: (rank) => `Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 10 for 5 min. In addition, when the target blocks, dodges, or parries a melee attack the attacker will take 14 Holy damage and the target restores 2% of maximum mana. Also, your Judgements instantly restore 15% of your maximum mana.` },
            { id: "reckoning", name: "Reckoning", icon: "spell_holy_blessingofstrength", row: 4, col: 2, maxPoints: 5, description: (rank) => `Gives you a ${rank * 2}% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.` },

            // Row 6
            { id: "sacred-duty", name: "Sacred Duty", icon: "spell_holy_divineintervention", row: 5, col: 0, maxPoints: 2, description: (rank) => `Increases your total Stamina by ${rank * 3}% and reduces the cooldown of your Divine Shield spell by ${rank * 30} sec.` },
            { id: "one-handed-weapon-specialization", name: "One-Handed Spec.", icon: "inv_sword_20", row: 5, col: 2, maxPoints: 5, description: (rank) => `Increases all damage you deal when a one-handed melee weapon is equipped by ${rank * 1}%.` },

            // Row 7
            { id: "holy-shield", name: "Holy Shield", icon: "spell_holy_blessingofprotection", row: 6, col: 1, maxPoints: 1, prereq: "blessing-of-sanctuary", description: (rank) => `Increases block chance by 30% for 10 sec and deals 79 Holy damage for each attack blocked. Damage caused generates 20% additional threat. 4 charges.` },
            { id: "ardent-defender", name: "Ardent Defender", icon: "spell_holy_ardentdefender", row: 6, col: 2, maxPoints: 5, description: (rank) => `When you have less than 35% health, all damage taken is reduced by ${rank * 6}%.` },

            // Row 8
            { id: "combat-expertise", name: "Combat Expertise", icon: "spell_holy_weaponmastery", row: 7, col: 2, maxPoints: 5, description: (rank) => `Increases your expertise by ${rank * 1} and your total Stamina by ${rank * 2}%.` },

            // Row 9 
            { id: "avengers-shield", name: "Avenger's Shield", icon: "spell_holy_avengersshield", row: 8, col: 1, maxPoints: 1, prereq: "holy-shield", description: (rank) => `Hurls a holy shield at the enemy, dealing 270 to 330 Holy damage, Dazing them and then jumping to additional nearby enemies. Affects 3 total targets. Duration 10 sec.` },
        ]
    },
    retribution: {
        name: "Retribution",
        icon: "https://i.imgur.com/dpHn8vW.png",
        background: "https://i.imgur.com/KSO1EqH.jpeg",
        talents: [
            // Row 1
            { id: "improved-judgement", name: "Imp. Judgement", icon: "spell_holy_righteousfury", row: 0, col: 0, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Judgement spell by ${rank * 1} sec.` },
            { id: "improved-blessing-of-might", name: "Imp. Blessing of Might", icon: "spell_holy_fistofjustice", row: 0, col: 1, maxPoints: 5, description: (rank) => `Increases the attack power bonus of your Blessing of Might by ${rank * 4}%.` },
            { id: "benediction", name: "Benediction", icon: "spell_frost_windwalkon", row: 0, col: 2, maxPoints: 3, description: (rank) => `Reduces the Mana cost of your Judgement and Seal spells by ${rank * 5}%.` },

            // Row 2
            { id: "divine-purpose", name: "Divine Purpose", icon: "spell_holy_divinepurpose", row: 1, col: 0, maxPoints: 2, description: (rank) => `Increases your total Strength by ${rank * 2}%. In addition, your Strength attribute increases your Spell Power by an amount equal to ${rank * 40}% of your Strength.` },
            { id: "improved-seal-of-the-crusader", name: "Imp. Seal of Crusader", icon: "spell_holy_holysmite", row: 1, col: 1, maxPoints: 3, description: (rank) => `In addition to the normal effect, your Judgement of the Crusader increases the critical strike chance of all attacks against that target by an additional ${rank * 1}%.` },
            { id: "deflection", name: "Deflection", icon: "ability_parry", row: 1, col: 2, maxPoints: 5, description: (rank) => `Increases your Parry chance by ${rank * 1}%.` },

            // Row 3
            { id: "vindication", name: "Vindication", icon: "spell_holy_vindication", row: 2, col: 0, maxPoints: 3, description: (rank) => `Gives the Paladin's damaging attacks a chance to reduce the target's attributes by ${rank * 5}% for 15 sec.` },
            { id: "conviction", name: "Conviction", icon: "spell_holy_retributionaura", row: 2, col: 1, maxPoints: 5, description: (rank) => `Increases your critical strike chance with melee weapons by ${rank * 1}%.` },
            { id: "seal-of-command", name: "Seal of Command", icon: "ability_warrior_innerrage", row: 2, col: 2, maxPoints: 1, description: (rank) => `Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage. Only one Seal can be active on the Paladin at any one time. Lasts 30 sec.` },
            { id: "pursuit-of-justice", name: "Pursuit of Justice", icon: "spell_holy_persuitofjustice", row: 2, col: 3, maxPoints: 3, description: (rank) => `Increases movement speed by ${rank * 5}% and reduces the chance you will be hit by spells by ${rank * 1}%. This does not stack with other movement speed increasing effects.` },

            // Row 4
            { id: "eye-for-an-eye", name: "Eye for an Eye", icon: "spell_holy_eyeforaneye", row: 3, col: 0, maxPoints: 2, description: (rank) => `All spell criticals against you cause ${rank * 15}% of the damage taken to be returned to the caster as well.` },
            { id: "imp-retribution-aura", name: "Imp. Retribution Aura", icon: "spell_holy_auraoflight", row: 3, col: 2, maxPoints: 2, description: (rank) => `Increases the damage done by your Retribution Aura by ${rank * 25}%.` },
            { id: "crusade", name: "Crusade", icon: "spell_holy_crusade", row: 3, col: 3, maxPoints: 3, description: (rank) => `Increases all damage caused by ${rank * 1}% and all damage caused against Demon, Undead, Humanoids and Elementals by an additional ${rank * 1}%.` },

            // Row 5
            { id: "two-handed-weapon-specialization", name: "Two-Handed Spec.", icon: "inv_hammer_04", row: 4, col: 0, maxPoints: 3, description: (rank) => `Increases the damage you deal with two-handed melee weapons by ${rank * 2}%.` },
            { id: "sanctity-aura", name: "Sanctity Aura", icon: "spell_holy_mindvision", row: 4, col: 2, maxPoints: 1, description: (rank) => `Increases Holy damage done by party members within 30 yards by 10%. Players may only have one Aura on them per Paladin at any one time.` },
            { id: "improved-sanctity-aura", name: "Imp. Sanctity Aura", icon: "spell_holy_mindvision", row: 4, col: 3, maxPoints: 2, prereq: "sanctity-aura", description: (rank) => `Increases the amount of damage dealt by targets affected by your Sanctity Aura by ${rank * 1}%.` },

            // Row 6
            { id: "long-arm-of-the-law", name: "Long Arm of the Law", icon: "ability_paladin_longarmofthelaw", row: 5, col: 0, maxPoints: 2, prereq: "two-handed-weapon-specialization", description: (rank) => `Your Judgement hits increase your movement speed by ${rank * 15}% for 3 sec.` },
            { id: "vengeance", name: "Vengeance", icon: "ability_racial_avatar", row: 5, col: 1, maxPoints: 5, prereq: "conviction", description: (rank) => `Gives you a ${rank * 3}% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability. Stacks up to 3 times.` },
            { id: "sanctified-judgement", name: "Sanctified Judgement", icon: "spell_holy_righteousfury", row: 5, col: 2, maxPoints: 3, description: (rank) => `Gives you a ${rank * 33}% chance to regain mana equal to 80% of the cost of the Judgement spell, after you cast Judgement.` },

            // Row 7
            { id: "sanctified-seals", name: "Sanctified Seals", icon: "https://wow.zamimg.com/images/wow/icons/large/spell_holy_holysmite.jpg", row: 6, col: 0, maxPoints: 3, description: (rank) => `Increases your critical strike chance with all spells and attacks by ${rank * 1}% and reduces the chance your Seal spells will be dispelled by ${rank * 33}%.` },
            { id: "divine-storm", name: "Divine Storm", icon: "ability_paladin_divinestorm", row: 6, col: 1, maxPoints: 1, prereq: "vengeance", description: (rank) => `An instant weapon attack that causes 110% of weapon damage to up to 4 enemies within 8 yards. Heals up to 3 party members for 25% of the damage caused. 10 sec Cooldown.` },

            // Row 8
            { id: "fanaticism", name: "Fanaticism", icon: "spell_holy_fanaticism", row: 7, col: 1, maxPoints: 5, prereq: "divine-storm", description: (rank) => `Increases the critical strike chance of all Judgements capable of a critical hit by ${rank * 3}% and reduces threat caused by all actions by ${rank * 6}% except when under the effects of Righteous Fury.` },

            // Row 9 
            { id: "crusader-strike", name: "Crusader Strike", icon: "spell_holy_crusaderstrike", row: 8, col: 1, maxPoints: 1, description: (rank) => `An instant strike that causes 110% weapon damage and refreshes all Judgements on the target.` },
        ]
    }
};

export const priestTalents = {
    discipline: {
        name: "Discipline",
        icon: "https://i.imgur.com/VDu6yQx.jpeg",
        background: "https://i.imgur.com/lZRbYFf.jpeg",
        talents: [
            // Row 1
            { id: "unbreakable-will", name: "Adamant Resolve", icon: "spell_magic_magearmor", row: 0, col: 1, maxPoints: 5, description: (rank) => `Increases chance to resist Stun, Fear, and Silence effects by ${rank * 3}%. In addition, while your Power Word: Shield is active on yourself, you suffer ${rank * 10}% less spell pushback from damaging attacks.` },
            { id: "wand-specialization", name: "Inquisitor's Training", icon: "inv_wand_01", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases damage dealt with wands by ${rank * 5}%. In addition, your Wand hits have a ${rank * 20}% chance to apply Inquisitor's Focus, reducing the cast time of your next Smite or Holy Fire by 0.1 sec. Stacks up to 5 times.` },

            // Row 2
            { id: "silent-resolve", name: "Silent Resolve", icon: "spell_nature_manaregentotem", row: 1, col: 0, maxPoints: 5, description: (rank) => `Reduces the threat generated by your Holy and Discipline spells by ${rank * 4}% and reduces the chance your spells will be dispelled by ${rank * 4}%.` },
            { id: "improved-power-word-fortitude", name: "Imp. Power Word: Fortitude", icon: "spell_holy_wordfortitude", row: 1, col: 1, maxPoints: 2, description: (rank) => `Increases the effect of your Power Word: Fortitude and Prayer of Fortitude spells by ${rank * 15}%.` },
            { id: "improved-power-word-shield", name: "Imp. Power Word: Shield", icon: "spell_holy_powerwordshield", row: 1, col: 2, maxPoints: 3, description: (rank) => `Increases the damage absorbed by your Power Word: Shield by ${rank * 5}%. When your Power Word: Shield is fully absorbed, it releases a burst of holy energy, healing up to 3 injured party members within 10 yards for a moderate amount.` },
            { id: "martyrdom", name: "Martyrdom", icon: "spell_nature_tranquility", row: 1, col: 3, maxPoints: 2, description: (rank) => `Gives you a ${rank * 50}% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a Melee or Ranged Critical Strike. The Focused Casting effect prevents you from losing casting time when taking damage and increases resistance to Interrupt effects by ${rank * 10}%.` },

            // Row 3
            { id: "absolution", name: "Absolution", icon: "spell_holy_absolution", row: 2, col: 0, maxPoints: 3, description: (rank) => `Reduces the Mana cost of your Dispel Magic, Cure Disease, Abolish Disease and Mass Dispel spells by ${rank * 5}%.` },
            { id: "inner-focus", name: "Inner Focus", icon: "spell_frost_windwalkon", row: 2, col: 1, maxPoints: 1, description: (rank) => `When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is capable of a critical effect.` },
            { id: "meditation", name: "Meditation", icon: "spell_nature_sleep", row: 2, col: 2, maxPoints: 3, description: (rank) => `Allows ${rank * 10}% of your Mana regeneration to continue while casting.` },

            // Row 4
            { id: "improved-inner-fire", name: "Imp. Inner Fire", icon: "spell_holy_innerfire", row: 3, col: 0, maxPoints: 3, description: (rank) => `Increases the Armor bonus of your Inner Fire spell by ${rank * 10}%.` },
            { id: "mental-agility", name: "Mental Agility", icon: "ability_hibernation", row: 3, col: 1, maxPoints: 5, description: (rank) => `Reduces the mana cost of your instant cast spells by ${rank * 2}%.` },
            { id: "improved-mana-burn", name: "Imp. Mana Burn", icon: "spell_shadow_manaburn", row: 3, col: 3, maxPoints: 2, description: (rank) => `Reduces the casting time of your Mana Burn spell by ${rank * 0.25} sec.` },

            // Row 5
            { id: "divine-aegis", name: "Divine Aegis", icon: "spell_holy_devotionaura", row: 4, col: 0, maxPoints: 2, description: (rank) => `Critical heals from your Flash Heal and Greater Heal create a protective shield on the target, absorbing ${rank * 15}% of the amount healed. Lasts 12 sec.` },
            { id: "mental-strength", name: "Mental Strength", icon: "spell_nature_enchantarmor", row: 4, col: 1, maxPoints: 3, description: (rank) => `Increases your maximum Mana by ${rank * 5}%.` },
            { id: "penance", name: "Penance", icon: "spell_holy_penance", row: 4, col: 2, maxPoints: 1, prereq: "meditation", description: (rank) => `Channels a volley of 3 holy bolts at the target over 2 seconds. Can be cast on enemy (deals damage) or ally (heals). 10s CD.` },

            // Row 6
            { id: "focused-power", name: "Focused Power", icon: "spell_shadow_focusedpower", row: 5, col: 0, maxPoints: 2, description: (rank) => `Reduces the cast time of your Mass Dispel spell by ${rank * 0.5} sec and increases chance to hit with Mass Dispel, Smite, and Holy Fire by ${rank * 2}%.` },
            { id: "force-of-will", name: "Force of Will", icon: "https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_amulet_01.jpg", row: 5, col: 2, maxPoints: 5, description: (rank) => `Increases your spell damage by ${rank * 1}% and the critical strike chance of your offensive spells by ${rank * 1}%.` },

            // Row 7
            { id: "focused-will", name: "Focused Will", icon: "spell_arcane_focusedpower", row: 6, col: 0, maxPoints: 3, description: (rank) => `After taking a critical hit you gain the Focused Will effect, reducing all damage taken by ${rank * 2}% and increasing healing effects on you by ${rank * 4}%. Stacks up to 3 times.` },
            { id: "power-infusion", name: "Power Infusion", icon: "spell_holy_powerinfusion", row: 6, col: 1, maxPoints: 1, prereq: "mental-strength", description: (rank) => `Infuses the target with power, increasing spell haste by 20% and reducing mana cost of all spells by 20% for 15 sec. If cast on an ally, the Priest also gains 10% spell haste and 10% cost reduction for the duration.` },
            { id: "reflective-shield", name: "Reflective Shield", icon: "spell_holy_powerwordshield", row: 6, col: 2, maxPoints: 3, description: (rank) => `Causes ${rank * 20 + 20}% of the damage absorbed by your Power Word: Shield to be reflected back at the attacker. This reflected damage causes high threat.` },

            // Row 8
            { id: "enlightenment", name: "Enlightenment", icon: "spell_arcane_mindmastery", row: 7, col: 1, maxPoints: 5, prereq: "power-infusion", description: (rank) => `Increases your total Stamina, Intellect and Spirit by ${rank * 1}%.` },

            // Row 9 
            { id: "pain-suppression", name: "Pain Suppression", icon: "spell_holy_painsupression", row: 8, col: 1, maxPoints: 1, prereq: "enlightenment", description: (rank) => `Instantly reduces the target's threat by 5% and reduces all damage taken by 40% for 8 sec. 2 min cooldown.` },
        ]
    },
    holy: {
        name: "Holy",
        icon: "https://i.imgur.com/Feu0d0F.png",
        background: "https://i.imgur.com/kDyn09Y.jpeg",
        talents: [
            // Row 1
            { id: "healing-focus", name: "Healing Focus", icon: "spell_holy_healingfocus", row: 0, col: 0, maxPoints: 2, description: (rank) => `Gives you a ${rank * 35}% chance to avoid interruption caused by damage while casting any Healing spell.` },
            { id: "improved-renew", name: "Imp. Renew", icon: "spell_holy_renew", row: 0, col: 1, maxPoints: 3, description: (rank) => `Increases the amount healed by your Renew spell by ${rank * 5}%.` },
            { id: "holy-specialization", name: "Holy Specialization", icon: "spell_holy_sealofsalvation", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases the critical effect chance of your Holy spells by ${rank * 1}%.` },

            // Row 2
            { id: "serendipity", name: "Serendipity", icon: "spell_holy_serendipity", row: 1, col: 0, maxPoints: 3, description: (rank) => `Your Flash Heal and Binding Heal spells reduce the cast time of your next Greater Heal or Prayer of Healing by ${rank * 6 + (rank === 3 ? 2 : 0)}%. Stacks up to 2 times.` },
            { id: "spell-warding", name: "Spell Warding", icon: "spell_holy_spellwarding", row: 1, col: 1, maxPoints: 2, description: (rank) => `Reduces all spell damage taken by ${rank * 5}%.` },
            { id: "divine-fury", name: "Divine Fury", icon: "spell_holy_sealofwrath", row: 1, col: 2, maxPoints: 5, description: (rank) => `Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by ${rank * 0.1} sec.` },

            // Row 3
            { id: "holy-nova", name: "Holy Nova", icon: "spell_holy_holynova", row: 2, col: 0, maxPoints: 1, description: (rank) => `Causes an explosion of holy light around the caster, causing Holy damage to all enemy targets within 10 yards and healing all party members within 10 yards. Enemies hit are slowed by 25% for 4 sec. Allies healed gain 10% movement speed for 2 sec.` },
            { id: "blessed-recovery", name: "Blessed Recovery", icon: "spell_holy_blessedrecovery", row: 2, col: 1, maxPoints: 3, description: (rank) => `After being struck by a melee or ranged critical hit, heal ${rank * 8}% of the damage taken over 6 sec.` },
            { id: "inspiration", name: "Inspiration", icon: "spell_holy_layonhands", row: 2, col: 3, maxPoints: 3, description: (rank) => `Increases your target's armor by ${rank * 8}% for 15 sec after getting a critical effect from your Flash of Heal, Heal, Greater Heal, Binding Heal, Prayer of Healing, or Circle of Healing spell.` },

            // Row 4
            { id: "holy-reach", name: "Holy Reach", icon: "spell_holy_purify", row: 3, col: 0, maxPoints: 2, description: (rank) => `Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing, Holy Nova, Divine Spirit and Circle of Healing spells by ${rank * 10}%.` },
            { id: "improved-healing", name: "Imp. Healing", icon: "spell_holy_heal02", row: 3, col: 1, maxPoints: 3, description: (rank) => `Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Divine Hymn and Penance spells by ${rank * 5}%.` },
            { id: "searing-light", name: "Searing Light", icon: "spell_holy_searinglight", row: 3, col: 2, maxPoints: 2, prereq: "divine-fury", description: (rank) => `Increases the damage of your Smite and Holy Fire spells by ${rank * 5}%.` },

            // Row 5
            { id: "healing-prayers", name: "Healing Prayers", icon: "spell_holy_prayerofhealing02", row: 4, col: 0, maxPoints: 2, description: (rank) => `Reduces the Mana cost of your Prayer of Healing and Prayer of Mending spell by ${rank * 10}%.` },
            { id: "spirit-of-redemption", name: "Spirit of Redemption", icon: "inv_enchant_essenceeternallarge", row: 4, col: 1, maxPoints: 1, description: (rank) => `Active Ability: You assume the Spirit of Redemption form for 10 sec. While in this form, all healing done is increased by 25% and your healing spells cost 100% less mana. You cannot move or be attacked. 5 min cooldown. (Passive: On death, spirit persists for 15 sec).` },
            { id: "spiritual-guidance", name: "Spiritual Guidance", icon: "spell_holy_spiritualguidence", row: 4, col: 2, maxPoints: 3, description: (rank) => `Increases spell damage and healing by up to ${rank * 8}% of your total Spirit.` },

            // Row 6
            { id: "surge-of-light", name: "Surge of Light", icon: "spell_holy_surgeoflight", row: 5, col: 0, maxPoints: 2, description: (rank) => `Your spell criticals have a ${rank * 25}% chance to cause your next Smite spell to be instant cast and have no mana cost.` },
            { id: "spiritual-healing", name: "Spiritual Healing", icon: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_moonglow.jpg", row: 5, col: 2, maxPoints: 3, description: (rank) => `Increases the amount healed by your healing spells by ${rank === 1 ? 4 : rank === 2 ? 7 : 10}%.` },

            // Row 7
            { id: "holy-concentration", name: "Holy Concentration", icon: "spell_holy_fanaticism", row: 6, col: 0, maxPoints: 3, prereq: "surge-of-light", description: (rank) => `Gives you a ${rank * 2}% chance to enter a Clearcasting state after casting any Flash Heal, Binding Heal, or Greater Heal spell. The Clearcasting state reduces the mana cost of your next Flash Heal, Binding Heal, or Greater Heal spell by 100%.` },
            { id: "lightwell", name: "Lightwell", icon: "spell_holy_summonlightwell", row: 6, col: 1, maxPoints: 1, prereq: "spirit-of-redemption", description: (rank) => `Summons a Lightwell at the target location. Every 2 sec, the Lightwell attempts to heal the most injured party or raid member within 20 yards for a moderate amount over 6 sec. The HoT does not break on damage. Lasts 30 sec. 3 min cooldown.` },
            { id: "blessed-resilience", name: "Blessed Resilience", icon: "spell_holy_blessedresillience", row: 6, col: 2, maxPoints: 3, description: (rank) => `Critical hits against you have a ${rank * 20}% chance to prevent you from being physically critically hit again for 6 sec.` },

            // Row 8
            { id: "empowered-healing", name: "Empowered Healing", icon: "spell_holy_greaterheal", row: 7, col: 1, maxPoints: 5, prereq: "lightwell", description: (rank) => `Your Greater Heal spell gains an additional ${rank * 4}% and your Flash Heal and Binding Heal gain an additional ${rank * 2}% of your bonus healing effects.` },

            // Row 9 
            { id: "circle-of-healing", name: "Circle of Healing", icon: "spell_holy_circleofrenewal", row: 8, col: 1, maxPoints: 1, prereq: "empowered-healing", description: (rank) => `Heals up to 5 friendly party or raid members within 15 yards of the target.` },
        ]
    },
    shadow: {
        name: "Shadow",
        icon: "https://i.imgur.com/3Yd62vM.png",
        background: "https://i.imgur.com/xkil0Kk.jpeg",
        talents: [
            // Row 1
            { id: "spirit-tap", name: "Spirit Tap", icon: "spell_shadow_requiem", row: 0, col: 1, maxPoints: 5, description: (rank) => `Gives you a ${rank * 20}% chance to gain a 100% bonus to your Spirit after killing a target that yields experience or honor. For the duration, your mana will regenerate at a 50% rate while casting. Lasts 15 sec.` },
            { id: "blackout", name: "Blackout", icon: "spell_shadow_gathershadows", row: 0, col: 2, maxPoints: 5, description: (rank) => `Gives your Shadow damage spells a ${rank * 2}% chance to stun the target for 3 sec.` },

            // Row 2
            { id: "shadow-affinity", name: "Shadow Affinity", icon: "spell_shadow_shadowward", row: 1, col: 0, maxPoints: 3, description: (rank) => `Reduces the threat generated by your Shadow spells by ${rank * 8}%.` },
            { id: "improved-shadow-word-pain", name: "Imp. Shadow Word: Pain", icon: "spell_shadow_shadowwordpain", row: 1, col: 1, maxPoints: 2, description: (rank) => `Increases the duration of your Shadow Word: Pain spell by ${rank * 3} sec.` },
            { id: "shadow-focus", name: "Shadow Focus", icon: "spell_shadow_burningspirit", row: 1, col: 2, maxPoints: 5, description: (rank) => `Reduces your target's chance to resist your Shadow spells by ${rank * 2}%.` },

            // Row 3
            { id: "improved-psychic-scream", name: "Imp. Psychic Scream", icon: "spell_shadow_psychicscream", row: 2, col: 0, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Psychic Scream spell by ${rank * 2} sec.` },
            { id: "improved-mind-blast", name: "Imp. Mind Blast", icon: "spell_shadow_unholyfrenzy", row: 2, col: 1, maxPoints: 5, description: (rank) => `Reduces the cooldown of your Mind Blast spell by ${rank * 0.5} sec.` },
            { id: "mind-flay", name: "Mind Flay", icon: "spell_shadow_siphonmana", row: 2, col: 2, maxPoints: 1, description: (rank) => `Assault the target's mind with Shadow energy, causing damage over 3 sec and slowing their movement speed by 50%.` },

            // Row 4
            { id: "improved-fade", name: "Imp. Fade", icon: "spell_magic_lesserinvisibilty", row: 3, col: 1, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Fade spell by ${rank * 3} sec.` },
            { id: "shadow-reach", name: "Shadow Reach", icon: "spell_shadow_chilltouch", row: 3, col: 2, maxPoints: 2, description: (rank) => `Increases the range of your Shadow offensive spells by ${rank * 10}%.` },
            { id: "shadow-weaving", name: "Shadow Weaving", icon: "spell_shadow_blackplague", row: 3, col: 3, maxPoints: 3, description: (rank) => `Your Shadow damage spells have a ${rank === 3 ? 100 : rank * 33}% chance to cause your target to be vulnerable to Shadow damage. This vulnerability increases the Shadow damage dealt to your target by 2% and lasts 15 sec. Stacks up to 5 times.` },

            // Row 5
            { id: "silence", name: "Silence", icon: "spell_shadow_impphaseshift", row: 4, col: 0, maxPoints: 1, prereq: "improved-psychic-scream", description: (rank) => `Silences the target, preventing them from casting spells for 5 sec.` },
            { id: "vampiric-embrace", name: "Vampiric Embrace", icon: "spell_shadow_unsummonbuilding", row: 4, col: 1, maxPoints: 1, description: (rank) => `Afflicts your target with Shadow energy that causes all party members to be healed for 15% of any Shadow spell damage you deal for 1 min.` },
            { id: "improved-vampiric-embrace", name: "Imp. Vampiric Embrace", icon: "spell_shadow_improvedvampiricembrace", row: 4, col: 2, maxPoints: 2, prereq: "vampiric-embrace", description: (rank) => `Increases the percentage healed by Vampiric Embrace by an additional ${rank * 5}%.` },
            { id: "focused-mind", name: "Focused Mind", icon: "spell_nature_focusedmind", row: 4, col: 3, maxPoints: 3, description: (rank) => `Reduces the mana cost of your Mind Blast, Mind Control and Mind Flay spells by ${rank * 5}%.` },

            // Row 6
            { id: "shadow-resilience", name: "Shadow Resilience", icon: "spell_shadow_grimward", row: 5, col: 0, maxPoints: 2, description: (rank) => `Reduces the chance you will be critically hit by all spells by ${rank * 2}%.` },
            { id: "darkness", name: "Darkness", icon: "spell_shadow_twilight", row: 5, col: 2, maxPoints: 5, description: (rank) => `Your Mind Flay spell has a ${rank * 20}% chance to reset the duration of your Shadow Word: Pain on the target back to its full duration.` },
            { id: "dispersion", name: "Dispersion", icon: "spell_shadow_dispersion", row: 5, col: 3, maxPoints: 1, prereq: "focused-mind", description: (rank) => `Disperse into pure shadow energy, reducing all damage taken by 90% for 6 sec. You cannot attack or cast spells while dispersed, but you regenerate 6% health and mana every 1 sec for the duration. Usable while stunned, feared, or silenced. 3 min cooldown.` },

            // Row 7
            { id: "twist-of-fate", name: "Twist of Fate", icon: "spell_shadow_mindtwisting", row: 6, col: 0, maxPoints: 2, description: (rank) => `Dealing damage to enemies below 35% health increases your Shadow damage by ${rank * 5}% for 8 seconds.` },
            { id: "shadowform", name: "Shadowform", icon: "spell_shadow_shadowform", row: 6, col: 1, maxPoints: 1, prereq: "vampiric-embrace", description: (rank) => `Assume a Shadowform, increasing your Shadow damage by 15%, reducing physical damage taken by 15%, and reducing threat generated by 30%. However, you may not cast Holy spells while in this form.` },
            { id: "shadow-power", name: "Shadow Power", icon: "spell_shadow_shadowpower", row: 6, col: 2, maxPoints: 5, description: (rank) => `Increases the critical strike chance of your Mind Blast and Shadow Word: Death spells by ${rank * 3}%.` },

            // Row 8
            { id: "shadowy-insight", name: "Shadowy Insight", icon: "spell_shadow_shadowwordpain", row: 7, col: 0, maxPoints: 2, description: (rank) => `Your Shadow Word: Pain and Vampiric Touch periodic damage has a ${rank * 2}% chance to reset the cooldown of your Mind Blast and cause your next Mind Blast to be Instant Cast and cost no mana.` },
            { id: "misery", name: "Misery", icon: "spell_shadow_misery", row: 7, col: 2, maxPoints: 5, description: (rank) => `Your Shadow Word: Pain, Mind Flay and Vampiric Touch spells also cause the target to take an additional ${rank * 1}% spell damage.` },

            // Row 9 
            { id: "vampiric-touch", name: "Vampiric Touch", icon: "spell_holy_stoicism", row: 8, col: 1, maxPoints: 1, prereq: "shadowform", description: (rank) => `Causes damage over 15 sec and causes all party members to gain mana equal to 5% of any Shadow spell damage you deal.` },
        ]
    }
};

export const rogueTalents = {
    assassination: {
        name: "Assassination",
        icon: "https://wowmeta.com/_app/immutable/assets/classic-rogue-assassination.BssFEmMX.png",
        background: "https://i.imgur.com/RdS8XZw.jpeg",
        talents: [
            // Row 1
            { id: "improved-eviscerate", name: "Imp. Eviscerate", icon: "ability_rogue_eviscerate", row: 0, col: 0, maxPoints: 3, description: (rank) => `Increases the damage done by your Eviscerate ability by ${rank * 5}%.` },
            { id: "remorseless", name: "Remorseless", icon: "ability_fiegndead", row: 0, col: 1, maxPoints: 2, description: (rank) => `Your finishing moves have a ${rank * 20}% chance per Combo Point to energize you, increasing your Energy regeneration rate by 20% for 6 sec.` },
            { id: "malice", name: "Malice", icon: "ability_racial_bloodrage", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases your critical strike chance by ${rank * 1}%.` },

            // Row 2
            { id: "ruthlessness", name: "Ruthlessness", icon: "ability_druid_disembowel", row: 1, col: 0, maxPoints: 3, description: (rank) => `Gives your melee finishing moves a ${rank * 20}% chance to add a combo point to your target.` },
            { id: "murder", name: "Murder", icon: "spell_shadow_deathscream", row: 1, col: 1, maxPoints: 2, description: (rank) => `Increases all damage caused by ${rank * 1}% against Humanoid, Giant, Beast and Dragonkin targets.` },
            { id: "puncture", name: "Puncture", icon: "ability_backstab", row: 1, col: 3, maxPoints: 3, description: (rank) => `Increases the critical strike damage bonus of your Backstab ability by ${rank * 10}%.` },

            // Row 3
            { id: "relentless-strikes", name: "Relentless Strikes", icon: "ability_warrior_decisivestrike", row: 2, col: 0, maxPoints: 1, description: (rank) => `Your finishing moves have a 20% chance per combo point to restore 25 energy.` },
            { id: "improved-expose-armor", name: "Imp. Expose Armor", icon: "ability_warrior_riposte", row: 2, col: 1, maxPoints: 2, description: (rank) => `Increases the armor reduced by your Expose Armor ability by ${rank * 25}%.` },
            { id: "lethality", name: "Lethality", icon: "ability_criticalstrike", row: 2, col: 2, maxPoints: 5, prereq: "malice", description: (rank) => `Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv and Hemorrhage abilities by ${rank * 6}%.` },

            // Row 4
            { id: "vile-poisons", name: "Vile Poisons", icon: "ability_rogue_feigndeath", row: 3, col: 1, maxPoints: 5, description: (rank) => `Increases the damage of your poisons by ${rank * 20}% and gives your poisons a ${rank * 30}% chance to resist dispel effects. In addition, your Envenom ability now refreshes your poison duration on the target.` },
            { id: "improved-poisons", name: "Imp. Poisons", icon: "ability_poisons", row: 3, col: 2, maxPoints: 5, description: (rank) => `Increases the chance to apply poisons to your target by ${rank * 2}%.` },
            { id: "vendetta", name: "Vendetta", icon: "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_deadliness.jpg", row: 3, col: 3, maxPoints: 1, prereq: "improved-poisons", description: (rank) => `Marks an enemy for death for 20 seconds, increasing all damage your poisons deal to the target by 20%. 2 min CD.` },

            // Row 5
            { id: "quick-recovery", name: "Quick Recovery", icon: "ability_rogue_quickrecovery", row: 4, col: 0, maxPoints: 2, description: (rank) => `Reduces the energy cost of your finishing moves by 5 and increases your movement speed by ${rank * 8}%.` },
            { id: "cold-blood", name: "Cold Blood", icon: "spell_ice_lament", row: 4, col: 1, maxPoints: 1, description: (rank) => `Instantly grants 50 Energy and increases your critical strike chance by 100% for the next 3 abilities you use. 2 min Cooldown.` },
            { id: "improved-kidney-shot", name: "Imp. Kidney Shot", icon: "ability_rogue_kidneyshot", row: 4, col: 2, maxPoints: 3, description: (rank) => `While affected by your Kidney Shot ability, the target receives an additional ${rank * 3}% damage from all sources.` },

            // Row 6
            { id: "seal-fate", name: "Seal Fate", icon: "spell_shadow_chilltouch", row: 5, col: 1, maxPoints: 5, prereq: "cold-blood", description: (rank) => `Your critical strikes from abilities that add combo points have a ${rank * 20}% chance to add an additional combo point.` },
            { id: "master-poisoner", name: "Master Poisoner", icon: "ability_creature_poison_06", row: 5, col: 2, maxPoints: 2, description: (rank) => `Reduces the chance your poisons will be resisted by ${rank * 5}% and reduces the duration of all Poison effects applied to you by ${rank * 25}%.` },

            // Row 7
            { id: "poison-bomb", name: "Poison Bomb", icon: "https://wow.zamimg.com/images/wow/icons/large/rogue_paralytic_poison.jpg", row: 6, col: 1, maxPoints: 1, description: (rank) => `Envenom has a 15% chance per combo point spent to smash a vial of poison at the target's location, creating a pool of acidic death that deals Nature damage over 8 seconds to enemies within it.` },
            { id: "deadened-nerves", name: "Deadened Nerves", icon: "ability_rogue_deadenednerves", row: 6, col: 2, maxPoints: 3, description: (rank) => `You instantly take 10% less damage from all sources. However, 50% of the damage prevented is applied to you as a Nature damage DoT over 10 seconds. While this DoT is active, your Energy regeneration is increased by ${rank * 5}%.` },

            // Row 8
            { id: "imp-find-weakness", name: "Find Weakness", icon: "ability_rogue_findweakness", row: 7, col: 2, maxPoints: 5, description: (rank) => `Your finishing moves increase the damage of all offensive abilities by ${rank * 2}% for 10 sec.` },

            // Row 9 
            { id: "mutilate", name: "Mutilate", icon: "ability_rogue_shadowstrikes", row: 8, col: 1, maxPoints: 1, prereq: "poison-bomb", description: (rank) => `Instantly attacks with both weapons for 100% weapon damage plus 44 with each weapon. Damage is increased by 50% against Poisoned targets. Awards 2 combo points.` },
        ]
    },
    combat: {
        name: "Combat",
        icon: "https://wowmeta.com/_app/immutable/assets/rogue.BcZrWFcx.png",
        background: "https://i.imgur.com/m5zUEVf.jpeg",
        talents: [
            // Row 1
            { id: "improved-gouges", name: "Imp. Gouge", icon: "ability_gouge", row: 0, col: 0, maxPoints: 3, description: (rank) => `Increases the effect duration of your Gouge ability by ${rank * 0.5} sec.` },
            { id: "improved-sinister-strike", name: "Imp. Sinister Strike", icon: "spell_shadow_ritualofsacrifice", row: 0, col: 1, maxPoints: 2, description: (rank) => `Reduces the Energy cost of your Sinister Strike ability by ${rank * 2.5} (rounded up).` },
            { id: "adrenaline-flow", name: "Adrenaline Flow", icon: "spell_nature_invisibilty", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases your Attack Speed by ${rank * 2}% and your Energy Regeneration by ${rank * 2}%.` },

            // Row 2
            { id: "improved-slice-and-dice", name: "Imp. Slice and Dice", icon: "ability_rogue_slicedice", row: 1, col: 0, maxPoints: 3, description: (rank) => `Increases the duration of your Slice and Dice ability by ${rank * 15}%.` },
            { id: "deflection", name: "Deflection", icon: "ability_parry", row: 1, col: 1, maxPoints: 5, description: (rank) => `Increases your Parry chance by ${rank * 1}%.` },
            { id: "precision", name: "Precision", icon: "ability_marksmanship", row: 1, col: 2, maxPoints: 5, description: (rank) => `Increases your chance to hit with melee weapons by ${rank * 1}%.` },

            // Row 3
            { id: "endurance", name: "Endurance", icon: "spell_shadow_shadowward", row: 2, col: 0, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Sprint and Evasion abilities by ${rank * 45} sec.` },
            { id: "riposte", name: "Riposte", icon: "ability_warrior_challange", row: 2, col: 1, maxPoints: 1, description: (rank) => `A strike that becomes active after you Dodge or Critically Strike. Disarms the target and deals 150% weapon damage.` },

            // Row 4
            { id: "improved-kick", name: "Imp. Kick", icon: "ability_kick", row: 3, col: 0, maxPoints: 2, description: (rank) => `Gives your Kick ability a ${rank * 50}% chance to silence the target for 2 sec.` },
            { id: "improved-sprint", name: "Imp. Sprint", icon: "ability_rogue_sprint", row: 3, col: 1, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Sprint ability by ${rank * 60} sec. When you activate Sprint, you remove all movement impairing effects and your next 5 special abilities cost ${rank * 10}% less Energy.` },
            { id: "dual-wield-specialization", name: "Dual Wield Spec.", icon: "ability_dualwield", row: 3, col: 2, maxPoints: 5, prereq: "precision", description: (rank) => `Increases the damage done by your offhand weapon by ${rank * 10}%.` },

            // Row 5
            { id: "blade-flurry", name: "Blade Flurry", icon: "ability_warrior_punishingblow", row: 4, col: 1, maxPoints: 1, description: (rank) => `While active, your attacks strike an additional nearby opponent. Lasts 15 sec. 45 sec Cooldown. Costs 25 Energy.` },
            { id: "close-quarters-combat", name: "Close Quarters Combat", icon: "inv_gauntlets_04", row: 4, col: 2, maxPoints: 5, description: (rank) => `Increases your chance to get an extra attack (Sword/Fist) OR your critical strike chance (Dagger/Mace) by ${rank * 1}%.` },

            // Row 6
            { id: "blade-twisting", name: "Blade Twisting", icon: "ability_rogue_bladetwisting", row: 5, col: 0, maxPoints: 2, description: (rank) => `Increases the damage dealt by your Sinister Strike and Backstab abilities by ${rank * 5}% and gives your damaging melee attacks a ${rank * 10}% chance to Daze the target for 4 sec.` },
            { id: "weapon-expertise", name: "Weapon Expertise", icon: "spell_holy_blessingofstrength", row: 5, col: 1, maxPoints: 2, prereq: "blade-flurry", description: (rank) => `Increases your expertise by ${rank * 5}.` },
            { id: "aggression", name: "Aggression", icon: "ability_racial_avatar", row: 5, col: 2, maxPoints: 3, description: (rank) => `Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by ${rank * 2}%.` },

            // Row 7
            { id: "vitality", name: "Vitality", icon: "spell_nature_undyingstrength", row: 6, col: 0, maxPoints: 2, description: (rank) => `Increases your Stamina by ${rank * 2}% and your Agility by ${rank * 1}%.` },
            { id: "adrenaline-rush", name: "Adrenaline Rush", icon: "spell_shadow_shadowworddominate", row: 6, col: 1, maxPoints: 1, description: (rank) => `Increases your Energy regeneration rate by 100% for 15 sec.` },
            { id: "nerves-of-steel", name: "Nerves of Steel", icon: "ability_rogue_nervesofsteel", row: 6, col: 2, maxPoints: 2, description: (rank) => `Increases your chance to resist Stun and Fear effects by ${rank * 5}%.` },

            // Row 8
            { id: "combat-potency", name: "Combat Potency", icon: "inv_weapon_shortblade_38", row: 7, col: 2, maxPoints: 5, description: (rank) => `Gives your successful off-hand melee attacks a ${rank * 20}% chance to generate 3 Energy.` },

            // Row 9 
            { id: "crimson-tempest", name: "Crimson Tempest", icon: "https://wow.zamimg.com/images/wow/icons/large/inv_knife_1h_cataclysm_c_05.jpg", row: 8, col: 1, maxPoints: 1, prereq: "adrenaline-rush", description: (rank) => `Finishing move that slashes all enemies within 10 yards, dealing Physical damage and causing victims to bleed for additional damage over 12 sec.` },
        ]
    },
    subtlety: {
        name: "Subtlety",
        icon: "https://wowmeta.com/_app/immutable/assets/rogue.BcZrWFcx.png",
        background: "https://i.imgur.com/6m9j8qI.jpeg",
        talents: [
            // Row 1
            { id: "master-of-deception", name: "Master of Deception", icon: "spell_shadow_charm", row: 0, col: 1, maxPoints: 5, description: (rank) => `Reduces the chance enemies have to detect you while in Stealth mode.` },
            { id: "opportunity", name: "Opportunity", icon: "ability_warrior_waracry", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases the damage dealt when striking from behind with your Backstab, Mutilate, Garrote and Ambush abilities by ${rank * 4}%.` },

            // Row 2
            { id: "sleight-of-hand", name: "Sleight of Hand", icon: "ability_rogue_feint", row: 1, col: 0, maxPoints: 2, description: (rank) => `Reduces the chance you are critically hit by melee and ranged attacks by ${rank * 1}% and reduces the threat generated by your Feint ability by ${rank * 10}%.` },
            { id: "dirty-tricks", name: "Dirty Tricks", icon: "ability_sap", row: 1, col: 1, maxPoints: 2, description: (rank) => `Increases the range of your Blind and Sap abilities by ${rank * 2} yards and reduces the Energy cost of your Blind and Sap abilities by ${rank * 25}%.` },
            { id: "camouflage", name: "Camouflage", icon: "ability_stealth", row: 1, col: 2, maxPoints: 5, description: (rank) => `Increases your speed while stealthed by ${rank * 3}% and reduces the cooldown of your Stealth ability by ${rank * 1} sec.` },

            // Row 3
            { id: "initiative", name: "Initiative", icon: "spell_shadow_fumble", row: 2, col: 0, maxPoints: 3, description: (rank) => `Gives you a ${rank * 25}% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.` },
            { id: "ghostly-strike", name: "Ghostly Strike", icon: "spell_shadow_curse", row: 2, col: 1, maxPoints: 1, description: (rank) => `A strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 sec. Awards 1 combo point.` },
            { id: "improved-ambush", name: "Imp. Ambush", icon: "ability_rogue_ambush", row: 2, col: 2, maxPoints: 3, description: (rank) => `Increases the critical strike chance of your Ambush ability by ${rank * 15}%.` },

            // Row 4
            { id: "setup", name: "Setup", icon: "spell_nature_mirrorimage", row: 3, col: 0, maxPoints: 3, description: (rank) => `Gives you a ${rank * 33}% chance to add a Combo Point to your target after dodging an attack or fully resisting a spell.` },
            { id: "master-of-subtlety", name: "Master of Subtlety", icon: "ability_rogue_masterofsubtlety", row: 3, col: 1, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Vanish and Blind abilities by ${rank * 45} sec. In addition, attacks made while in Stealth and for 6 sec after breaking Stealth deal an additional ${rank * 5}% damage.` },
            { id: "serrated-blades", name: "Serrated Blades", icon: "inv_sword_17", row: 3, col: 2, maxPoints: 3, description: (rank) => `Causes your attacks to ignore ${rank * 167} of your target's Armor and increases the damage dealt by your Rupture ability by ${rank * 10}%.` },

            // Row 5
            { id: "heightened-senses", name: "Heightened Senses", icon: "ability_ambush", row: 4, col: 0, maxPoints: 2, description: (rank) => `Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by ${rank * 2}%.` },
            { id: "preparation", name: "Preparation", icon: "spell_shadow_antishadow", row: 4, col: 1, maxPoints: 1, description: (rank) => `When activated, this ability immediately finishes the cooldown on your Evasion, Sprint, Vanish, Cold Blood and Blind abilities.` },
            { id: "dirty-deeds", name: "Dirty Deeds", icon: "spell_shadow_summonsuccubus", row: 4, col: 2, maxPoints: 2, description: (rank) => `Reduces the Energy cost of your Cheap Shot and Garrote abilities by ${rank * 10}.` },
            { id: "hemorrhage", name: "Hemorrhage", icon: "spell_shadow_lifedrain", row: 4, col: 3, maxPoints: 1, prereq: "serrated-blades", description: (rank) => `An instant strike that deals 110% weapon damage and causes the target to bleed for additional damage if they are moving. Increases physical damage taken by the target by 30% for 15 sec.` },

            // Row 6
            { id: "deadliness", name: "Deadliness", icon: "inv_weapon_crossbow_11", row: 5, col: 2, maxPoints: 5, description: (rank) => `Increases your Attack Power by ${rank * 3}%.` },

            // Row 7
            { id: "enveloping-shadows", name: "Enveloping Shadows", icon: "ability_rogue_envelopingshadows", row: 6, col: 0, maxPoints: 3, description: (rank) => `Reduces the chance your Feint ability will be resisted by ${rank * 10}% and gives you a ${rank * 10}% chance to avoid any area of effect damage from non-player opponents.` },
            { id: "marked-for-death", name: "Marked for Death", icon: "spell_shadow_possession", row: 6, col: 1, maxPoints: 1, prereq: "preparation", description: (rank) => `Instantly generates 5 combo points on the target. 1 min CD.` },
            { id: "cheat-death", name: "Cheat Death", icon: "ability_rogue_cheatdeath", row: 6, col: 2, maxPoints: 3, prereq: "deadliness", description: (rank) => `Passive: Fatal attacks instead reduce you to 10% health. Active: When triggered, you fade into shadows, reducing all damage taken by 90% for 3 sec. 90 sec Internal Cooldown.` },

            // Row 8
            { id: "sinister-calling", name: "Sinister Calling", icon: "ability_rogue_sinistercalling", row: 7, col: 1, maxPoints: 5, prereq: "marked-for-death", description: (rank) => `Increases your total Agility by ${rank * 3}% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional ${rank * 2}%.` },

            // Row 9 
            { id: "shadowstep", name: "Shadowstep", icon: "ability_rogue_shadowstep", row: 8, col: 1, maxPoints: 1, description: (rank) => `Step through the shadows and reappear behind your enemy, increasing the damage of your next ability by 20% and your movement speed by 70% for 3 sec.` },
        ]
    }
};

export const shamanTalents = {
    elemental: {
        name: "Elemental",
        icon: "https://i.imgur.com/8ChsJBV.png",
        background: "https://i.imgur.com/hYojXHB.jpeg",
        talents: [
            // Row 1
            { id: "convection", name: "Convection", icon: "spell_nature_wispheal", row: 0, col: 1, maxPoints: 5, description: (rank) => `Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by ${rank * 2}%.` },
            { id: "concussion", name: "Concussion", icon: "spell_fire_fireball", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases the damage done by your Lightning Bolt, Chain Lightning, Thunderstorm, Molten Earth and Shock spells by ${rank * 1}%.` },

            // Row 2
            { id: "earths-grasp", name: "Earth's Grasp", icon: "spell_nature_stoneclawtotem", row: 1, col: 0, maxPoints: 2, description: (rank) => `Increases the health of your Stoneclaw Totem by ${rank * 25}% and the radius of your Earthbind Totem by ${rank * 10}%.` },
            { id: "elemental-warding", name: "Elemental Warding", icon: "spell_nature_spiritarmor", row: 1, col: 1, maxPoints: 3, description: (rank) => `Reduces the damage taken from Fire, Frost and Nature effects by ${rank * 4}% and reduces all damage taken by ${rank * 5}% for 6 sec after taking Fire, Frost, or Nature damage.` },
            { id: "call-of-flame", name: "Call of Flame", icon: "spell_fire_immolation", row: 1, col: 2, maxPoints: 3, description: (rank) => `Increases the damage done by your Fire Totems by ${rank * 5}%.` },

            // Row 3
            { id: "reverberation", name: "Reverberation", icon: "spell_frost_frostward", row: 2, col: 0, maxPoints: 5, description: (rank) => `Reduces the cooldown of your Shock spells by ${rank * 0.2} sec. Additionally, your Earth Shock no longer shares a cooldown with Flame Shock or Frost Shock.` },
            { id: "elemental-focus", name: "Elemental Focus", icon: "spell_shadow_manaburn", row: 2, col: 1, maxPoints: 1, description: (rank) => `After getting a critical strike with a Fire, Frost, or Nature damage spell, you enter a Clearcasting state. The Clearcasting state reduces the mana cost of your next 2 damage or healing spells by 100%.` },
            { id: "call-of-thunder", name: "Call of Thunder", icon: "spell_nature_callstorm", row: 2, col: 2, maxPoints: 5, description: (rank) => `Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by ${rank * 1}% and increases the critical strike damage bonus of your Lightning Bolt and Chain Lightning spells by ${rank * 115}%.` },

            // Row 4
            { id: "improved-fire-totems", name: "Improved Fire Totems", icon: "spell_fire_sealoffire", row: 3, col: 0, maxPoints: 2, description: (rank) => `Reduces the casting time of your Fire Nova Totem by ${rank * 1} sec and decreases the threat generated by your Magma Totem by ${rank * 25}%.` },
            { id: "eye-of-the-storm", name: "Eye of the Storm", icon: "spell_nature_eyeofthestorm", row: 3, col: 1, maxPoints: 3, description: (rank) => `Gives you a ${rank * 33}% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a Melee or Ranged Critical Strike. The Focused Casting effect prevents you from losing casting time when taking damage.` },
            { id: "elemental-devastation", name: "Elemental Devastation", icon: "spell_fire_elementaldevastation", row: 3, col: 3, maxPoints: 3, description: (rank) => `Your offensive spell crits have a ${rank * 33}% chance to increase your chance to hit with melee attacks by 9% for 10 sec.` },

            // Row 5
            { id: "storm-reach", name: "Storm Reach", icon: "spell_nature_stormreach", row: 4, col: 0, maxPoints: 2, description: (rank) => `Increases the range of your Lightning Bolt and Chain Lightning spells by ${rank * 3} yards.` },
            { id: "elemental-fury", name: "Elemental Fury", icon: "spell_fire_volcano", row: 4, col: 1, maxPoints: 1, description: (rank) => `Increases the critical strike damage bonus of your Searing, Magma, and Fire Nova Totems and your Fire, Frost, and Nature spells by 100%.` },
            { id: "unrelenting-storm", name: "Unrelenting Storm", icon: "spell_nature_unrelentingstorm", row: 4, col: 3, maxPoints: 5, description: (rank) => `Regenerate mana equal to ${rank * 2}% of your Intellect every 5 sec. Additionally, your Lightning Bolt critical strikes restore 2% of your total mana.` },
            { id: "thunderstorm", name: "Thunderstorm", icon: "spell_shaman_thunderstorm", row: 5, col: 3, maxPoints: 1, prereq: "unrelenting-storm", description: (rank) => `You call down a bolt of lightning, dealing Nature damage to all enemies within 10 yards, reducing their movement speed by 40% for 5 sec, and knocking them back 20 yards. Instantly restores 8% mana. 45 sec cooldown.` },

            // Row 6
            { id: "elemental-precision", name: "Elemental Precision", icon: "spell_nature_elementalprecision_1", row: 5, col: 0, maxPoints: 3, description: (rank) => `Increases your chance to hit with Fire, Frost, and Nature spells by ${rank * 2}% and reduces the threat caused by Fire, Frost, and Nature spells by ${rank * 4}%.` },
            { id: "lightning-mastery", name: "Lightning Mastery", icon: "spell_lightning_lightningbolt01", row: 5, col: 2, maxPoints: 5, prereq: "call-of-thunder", description: (rank) => `Reduces the cast time of your Lightning Bolt and Chain Lightning spells by ${rank * 0.1} sec. Gives your Lightning Bolt and Chain Lightning spells a ${rank * 2}% chance to cast a second, similar spell on the same target at no additional cost that deals half damage and causes no threat.` },

            // Row 7
            { id: "elemental-mastery", name: "Elemental Mastery", icon: "spell_nature_wispheal", row: 6, col: 1, maxPoints: 1, prereq: "elemental-fury", description: (rank) => `When activated, this spell gives your next Fire, Frost, or Nature damage spell a 100% critical strike chance and reduces the mana cost by 100%. 2 min cooldown.` },
            { id: "elemental-shields", name: "Elemental Shields", icon: "spell_nature_elementalshields", row: 6, col: 2, maxPoints: 3, description: (rank) => `Reduces the chance you will be critically hit by melee and ranged attacks by ${rank * 2}%.` },

            // Row 8
            { id: "lightning-overload", name: "Lightning Overload", icon: "spell_nature_lightningoverload", row: 7, col: 1, maxPoints: 5, prereq: "elemental-mastery", description: (rank) => `Lightning Bolt and Chain Lightning gain an additional ${rank * 1}% of your bonus spell damage effects. Your Wrath of Air Totem now gives a ${rank * 2}% chance to cast a second, similar spell on the same target at no additional cost.` },

            // Row 9 
            { id: "totem-of-wrath", name: "Totem of Wrath", icon: "spell_fire_totemofwrath", row: 8, col: 1, maxPoints: 1, prereq: "lightning-overload", description: (rank) => `Summons a Totem of Wrath with 5 health at the feet of the caster. The totem increases the critical strike chance of spells by 3% and the chance to hit with spells by 3% for all party members within 20 yards. Lasts 2 min.` },
        ]
    },
    enhancement: {
        name: "Enhancement",
        icon: "https://i.imgur.com/38aMS1Y.png",
        background: "https://i.imgur.com/HPk3cb1.jpeg",
        talents: [
            // Row 1
            { id: "ancestral-knowledge", name: "Ancestral Knowledge", icon: "spell_shadow_grimward", row: 0, col: 1, maxPoints: 5, description: (rank) => `Increases your total Intellect by ${rank * 1}%.` },
            { id: "shield-specialization", name: "Shield Specialization", icon: "inv_shield_06", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases your chance to block attacks with a shield by ${rank * 1}% and increases the amount blocked by ${rank * 5}%.` },

            // Row 2
            { id: "guardian-totems", name: "Guardian Totems", icon: "spell_nature_stoneskintotem", row: 1, col: 0, maxPoints: 2, description: (rank) => `Increases the amount of armor increased by your Stoneskin Totem and Windwall Totem by ${rank * 10}% and reduces the cooldown of your Grounding Totem by ${rank * 1} sec.` },
            { id: "thundering-strikes", name: "Thundering Strikes", icon: "spell_nature_thunderclap", row: 1, col: 1, maxPoints: 5, description: (rank) => `Increases your critical strike chance with your weapon and spells by ${rank * 1}%.` },
            { id: "improved-ghost-wolf", name: "Imp. Ghost Wolf", icon: "spell_nature_spiritwolf", row: 1, col: 2, maxPoints: 2, description: (rank) => `Reduces the cast time of your Ghost Wolf spell by ${rank * 1.5} sec and allows it to be used indoors. While in Ghost Wolf form, movement impairing effects cannot reduce your speed below 100%.` },
            { id: "improved-lightning-shield", name: "Imp. Lightning Shield", icon: "spell_nature_lightningshield", row: 1, col: 3, maxPoints: 3, description: (rank) => `Increases the damage done by your Lightning Shield orbs by ${rank * 5}%.` },

            // Row 3
            { id: "enhancing-totems", name: "Enhancing Totems", icon: "spell_nature_earthbindtotem", row: 2, col: 0, maxPoints: 2, description: (rank) => `Increases the effect of your Strength of Earth and Grace of Air Totems by ${rank * 8}% and your Strength of Earth and Windfury Totems persist on party members for ${rank * 5} sec after the totem is destroyed or replaced.` },
            { id: "spirit-weapons", name: "Spirit Weapons", icon: "ability_parry", row: 2, col: 1, maxPoints: 1, prereq: "thundering-strikes", description: (rank) => `Gives a chance to parry enemy melee attacks with a chance of 5% and reduces the threat generated by your melee attacks by 30%.` },
            { id: "shamanistic-focus", name: "Shamanistic Focus", icon: "spell_nature_elementalabsorption", row: 2, col: 2, maxPoints: 3, description: (rank) => `Reduces the mana cost of your instant cast Shaman spells by ${rank * 2}% and after landing a melee critical strike, you enter a Focused State, reducing the mana costs of your shock spells by ${rank * 20}%.` },

            // Row 4
            { id: "flurry", name: "Flurry", icon: "ability_ghoulfrenzy", row: 3, col: 1, maxPoints: 5, description: (rank) => `Increases your attack speed by ${rank * 10}% for your next 3 swings after dealing a critical strike.` },
            { id: "toughness", name: "Ancestral Toughness", icon: "spell_holy_devotion", row: 3, col: 2, maxPoints: 5, description: (rank) => `While you have a Shield equipped or are Dual Wielding, your chance to be critically hit by melee and ranged attacks is reduced by ${rank * 1}%. Additionally, if a single attack deals more than 30% of your total health, you instantly take ${rank * 10}% less damage for the next 3 seconds. This effect has a 45 sec internal cooldown.` },

            // Row 5
            { id: "improved-weapon-totems", name: "Imp. Weapon Totems", icon: "spell_fire_enchantweapon", row: 4, col: 0, maxPoints: 2, description: (rank) => `Increases the melee attack power bonus of your Windfury Totem by ${rank * 15}% and increases the damage caused by your Flametongue Totem by ${rank * 6}%.` },
            { id: "feral-spirits", name: "Feral Spirits", icon: "spell_shaman_feralspirit", row: 4, col: 1, maxPoints: 1, prereq: "flurry", description: (rank) => `Summons two Spirit Wolves to fight for the Shaman for 30 seconds. Wolves scale with Shaman's AP and benefit from Shaman buffs. 3 min CD.` },
            { id: "elemental-weapons", name: "Elemental Weapons", icon: "spell_fire_flametounge", row: 4, col: 2, maxPoints: 3, description: (rank) => `Increases the damage caused by your Rockbiter Weapon by ${rank * 7}%, your Windfury Weapon effect by ${rank * 13}% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by ${rank * 5}%.` },
            { id: "weapon-mastery", name: "Weapon Mastery", icon: "ability_hunter_swiftstrike", row: 4, col: 3, maxPoints: 2, description: (rank) => `Increases the damage you deal with all weapons by ${rank * 5}%.` },

            // Row 6
            { id: "mental-quickness", name: "Mental Quickness", icon: "spell_nature_mentalquickness", row: 5, col: 0, maxPoints: 3, description: (rank) => `Increases your Attack Power by an amount equal to ${Math.floor(rank * 33.333)}% of your Intellect, and increases your Spell Power by an amount equal to ${rank * 10}% of your Attack Power.` },
            { id: "maelstrom-weapon", name: "Maelstrom Weapon", icon: "spell_shaman_maelstromweapon", row: 5, col: 1, maxPoints: 5, description: (rank) => `Successful melee attacks have a chance to grant a stack of Maelstrom Weapon (max 5). Each stack reduces the cast time and mana cost of the next Lightning Bolt, Chain Lightning, or Healing Wave by ${rank * 4}% (Max 20%).` },

            // Row 7
            { id: "dual-wield-specialization", name: "Dual Wield Spec.", icon: "ability_dualwield", row: 6, col: 0, maxPoints: 3, prereq: "dual-wield", description: (rank) => `Increases your chance to hit while dual wielding by an additional ${rank * 2}%.` },
            { id: "dual-wield", name: "Dual Wield", icon: "ability_dualwield", row: 6, col: 1, maxPoints: 1, description: (rank) => `Allows you to equip one-handed axes, maces, and daggers in your off-hand.` },
            { id: "stormstrike", name: "Stormstrike", icon: "spell_holy_sealofmight", row: 6, col: 2, maxPoints: 1, prereq: "elemental-weapons", description: (rank) => `Instantly attack with both weapons. In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%. Lasts 12 sec.` },

            // Row 8
            { id: "unleashed-rage", name: "Unleashed Rage", icon: "spell_nature_unleashedrage", row: 7, col: 1, maxPoints: 5, description: (rank) => `Causes your critical hits with melee attacks to increase all party members' melee attack power by ${rank * 2}% if within 20 yards of the Shaman. Lasts 10 sec.` },

            // Row 9 
            { id: "shamanistic-rage", name: "Shamanistic Rage", icon: "spell_nature_shamanrage", row: 8, col: 1, maxPoints: 1, prereq: "unleashed-rage", description: (rank) => `Reduces all damage taken by 15% and gives your successful melee attacks a chance to regenerate mana equal to 30% of your attack power. Lasts 15 sec. 1 min cooldown.` },
        ]
    },
    restoration: {
        name: "Restoration",
        icon: "https://i.imgur.com/2msDhl4.png",
        background: "https://i.imgur.com/Nj9SKSk.jpeg",
        talents: [
            // Row 1
            { id: "improved-healing-wave", name: "Imp. Healing Wave", icon: "spell_nature_magicimmunity", row: 0, col: 1, maxPoints: 5, description: (rank) => `Reduces the casting time of your Healing Wave spell by ${rank * 0.1} sec.` },
            { id: "tidal-focus", name: "Tidal Focus", icon: "spell_frost_manarecharge", row: 0, col: 2, maxPoints: 5, description: (rank) => `Reduces the Mana cost of your Healing spells by ${rank * 1}%.` },

            // Row 2
            { id: "improved-reincarnation", name: "Imp. Reincarnation", icon: "spell_nature_reincarnation", row: 1, col: 0, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Reincarnation spell by ${rank * 10} min and increases the amount of health and mana you reincarnate with by an additional ${rank * 10}%.` },
            { id: "ancestral-healing", name: "Ancestral Healing", icon: "spell_nature_undyingstrength", row: 1, col: 1, maxPoints: 3, description: (rank) => `Increases your target's armor value by ${rank * 8}% for 15 sec after getting a critical effect from one of your healing spells.` },
            { id: "totemic-focus", name: "Totemic Focus", icon: "spell_nature_moonglow", row: 1, col: 2, maxPoints: 5, description: (rank) => `Reduces the Mana cost of your Totems by ${rank * 5}%.` },

            // Row 3
            { id: "nature-guidance", name: "Nature's Guidance", icon: "spell_frost_stun", row: 2, col: 0, maxPoints: 3, description: (rank) => `Increases your chance to hit with melee attacks and spells by ${rank * 1}%.` },
            { id: "healing-focus", name: "Healing Focus", icon: "spell_nature_healingwavelesser", row: 2, col: 1, maxPoints: 5, description: (rank) => `Gives you a ${rank * 14}% chance to avoid interruption caused by damage while casting any Healing spell.` },
            { id: "tidal-waves", name: "Tidal Waves", icon: "spell_shaman_tidalwaves", row: 2, col: 2, maxPoints: 1, description: (rank) => `When you cast Chain Heal, the cast time of your next Healing Wave is reduced by 30%, or the critical effect chance of your next Lesser Healing Wave is increased by 25%.` },
            { id: "healing-grace", name: "Healing Grace", icon: "spell_holy_healingfocus", row: 2, col: 3, maxPoints: 3, description: (rank) => `Reduces the threat generated by your Healing spells by ${rank * 5}% and reduces the chance your spells will be dispelled by ${rank * 10}%.` },

            // Row 4
            { id: "restorative-totems", name: "Restorative Totems", icon: "spell_nature_manaregentotem", row: 3, col: 1, maxPoints: 5, description: (rank) => `Increases the effect of your Mana Spring Totem by ${rank * 5}% and increases the amount healed by your Healing Stream Totem by ${rank * 5}%.` },
            { id: "tidal-mastery", name: "Tidal Mastery", icon: "spell_nature_tranquility", row: 3, col: 2, maxPoints: 5, description: (rank) => `Increases the critical effect chance of your healing and lightning spells by ${rank * 1}%.` },

            // Row 5
            { id: "healing-way", name: "Healing Way", icon: "spell_nature_healingway", row: 4, col: 0, maxPoints: 3, description: (rank) => `Your Healing Wave spells have a ${rank * 33}% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec. Stacks up to 3 times.` },
            { id: "earth-shield", name: "Earth Shield", icon: "spell_nature_skinofearth", row: 4, col: 1, maxPoints: 1, prereq: "restorative-totems", description: (rank) => `Protects the target with an earthen shield, giving a 30% chance of ignoring spell interruption when damaged and causing attacks to heal the shielded target. 6 charges. Lasts 10 min.` },
            { id: "natures-swiftness", name: "Nature's Swiftness", icon: "spell_nature_ravenform", row: 4, col: 2, maxPoints: 1, prereq: "tidal-mastery", description: (rank) => `When activated, your next Nature spell with a base casting time of less than 10 sec becomes an instant cast spell.` },
            { id: "focused-mind", name: "Focused Mind", icon: "spell_nature_focusedmind", row: 4, col: 3, maxPoints: 3, description: (rank) => `Reduces the duration of any Silence or Interrupt effects used against the Shaman by ${rank * 10}%.` },

            // Row 6
            { id: "purification", name: "Purification", icon: "spell_frost_wizardmark", row: 5, col: 1, maxPoints: 5, description: (rank) => `Increases the effectiveness of your healing spells by ${rank * 2}%.` },

            // Row 7
            { id: "mana-tide-totem", name: "Mana Tide Totem", icon: "spell_frost_summonwaterelemental", row: 6, col: 1, maxPoints: 1, prereq: "purification", description: (rank) => `Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores mana to party members within 40 yards. Restores mana equal to 30% of the Caster's Bonus Healing every 3 sec.` },
            { id: "spiritwalkers-grace", name: "Spiritwalker's Grace", icon: "spell_shaman_spiritwalkersgrace", row: 6, col: 0, maxPoints: 1, prereq: "healing-way", description: (rank) => `Calls upon the guidance of the spirits, permitting movement while casting Shaman spells. This spell may be cast while casting other spells. Lasts 8 sec. 2 min cooldown.` },
            { id: "natures-guardian", name: "Nature's Guardian", icon: "spell_nature_natureguardian", row: 6, col: 2, maxPoints: 5, description: (rank) => `Whenever a damaging attack brings you below 30% health, you have a ${rank * 10}% chance to heal 10% of your total health and reduce your threat to that target. 5 sec cooldown.` },

            // Row 8
            { id: "natures-blessing", name: "Nature's Blessing", icon: "spell_nature_natureblessing", row: 7, col: 1, maxPoints: 3, description: (rank) => `Increases your spell damage and healing by an amount equal to ${rank * 10}% of your Intellect.` },
            { id: "improved-chain-heal", name: "Imp. Chain Heal", icon: "spell_nature_healingwavegreater", row: 7, col: 2, maxPoints: 2, description: (rank) => `Increases the amount healed by your Chain Heal spell by ${rank * 10}%.` },

            // Row 9 
            { id: "riptide", name: "Riptide", icon: "spell_nature_riptide", row: 8, col: 1, maxPoints: 1, prereq: "natures-blessing", description: (rank) => `Heals a friendly target for 639 to 691 and another 665 over 15 sec. Your next Chain Heal cast on that primary target within 15 sec will consume the healing over time effect and increase the amount healed by the Chain Heal by 25%.` },
        ]
    }
};

export const warlockTalents = {
    affliction: {
        name: "Affliction",
        icon: "https://i.imgur.com/ZAsJNiE.jpeg",
        background: "https://i.imgur.com/A8sxcgQ.jpeg",
        talents: [
            // Row 1
            { id: "grim-precision", name: "Grim Precision", icon: "spell_shadow_unsummonbuilding", row: 0, col: 1, maxPoints: 5, description: (rank) => `Increases your chance to hit with all spells by ${rank * 1}% and reduces the mana cost of your Affliction spells by ${rank * 2}%.` },
            { id: "improved-corruption", name: "Imp. Corruption", icon: "spell_shadow_abominationexplosion", row: 0, col: 2, maxPoints: 5, description: (rank) => `Reduces the casting time of your Corruption spell by ${rank * 0.4} sec.` },

            // Row 2
            { id: "improved-curse-of-weakness", name: "Imp. Curse of Weakness", icon: "spell_shadow_curseofmannoroth", row: 1, col: 0, maxPoints: 2, description: (rank) => `Increases the amount of attack power reduced by your Curse of Weakness by ${rank * 10}%.` },
            { id: "improved-drain-soul", name: "Imp. Drain Soul", icon: "spell_shadow_haunting", row: 1, col: 1, maxPoints: 2, description: (rank) => `Return ${rank * 7}% of your maximum Mana if the target is killed by you while you drain its soul.` },
            { id: "improved-life-tap", name: "Imp. Life Tap", icon: "spell_shadow_burningspirit", row: 1, col: 2, maxPoints: 2, description: (rank) => `Increases the amount of Mana awarded by your Life Tap spell by ${rank * 10}%.` },
            { id: "soul-siphon", name: "Soul Siphon", icon: "spell_shadow_lifedrain02", row: 1, col: 3, maxPoints: 2, description: (rank) => `Increases the amount drained by your Drain Life and Drain Soul spells by an additional ${rank * 2}% for every Affliction effect on the target (up to 4%). Drain Soul deals 100% increased damage to targets below 25% health.` },

            // Row 3
            { id: "improved-curse-of-agony", name: "Imp. Curse of Agony", icon: "spell_shadow_curseofsargeras", row: 2, col: 0, maxPoints: 2, description: (rank) => `Increases the damage done by your Curse of Agony by ${rank * 5}%.` },
            { id: "fel-concentration", name: "Fel Concentration", icon: "spell_shadow_fingerofdeath", row: 2, col: 1, maxPoints: 5, description: (rank) => `Gives you a ${rank * 14}% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.` },
            { id: "amplify-curse", name: "Amplify Curse", icon: "spell_shadow_contagion", row: 2, col: 2, maxPoints: 1, description: (rank) => `Increases the effect of your next Curse of Weakness or Curse of Agony by 50%, or your next Curse of Exhaustion by 20%. Lasts 30 sec.` },

            // Row 4
            { id: "grim-reach", name: "Grim Reach", icon: "spell_shadow_callofbone", row: 3, col: 0, maxPoints: 2, description: (rank) => `Increases the range of your Affliction spells by ${rank * 10}%.` },
            { id: "nightfall", name: "Nightfall", icon: "spell_shadow_twilight", row: 3, col: 1, maxPoints: 2, description: (rank) => `Gives your Corruption and Drain Life spells a ${rank * 2}% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.` },
            { id: "empowered-corruption", name: "Emp. Corruption", icon: "spell_shadow_abominationexplosion", row: 3, col: 3, maxPoints: 3, description: (rank) => `Increases the damage of your Corruption spell by an amount equal to ${rank * 12}% of your spell damage effects.` },

            // Row 5
            { id: "shadow-embrace", name: "Shadow Embrace", icon: "spell_shadow_shadowembrace", row: 4, col: 0, maxPoints: 5, description: (rank) => `Your Shadow Bolt, Haunt, and Drain Life spells apply the Shadow Embrace effect, which reduces all physical damage dealt by the target by ${rank * 1}%.` },
            { id: "siphon-life", name: "Siphon Life", icon: "spell_shadow_requiem", row: 4, col: 1, maxPoints: 1, description: (rank) => `Transfers health from the target to the caster. Lasts 30 sec.` },
            { id: "curse-of-exhaustion", name: "Curse of Exhaustion", icon: "spell_shadow_grimward", row: 4, col: 2, maxPoints: 1, prereq: "amplify-curse", description: (rank) => `Reduces the target's movement speed by 30% for 12 sec. Only one Curse per Warlock can be active on any one target.` },

            // Row 6
            { id: "improved-felhunter", name: "Imp. Felhunter", icon: "spell_shadow_summonfelhunter", row: 5, col: 0, maxPoints: 2, description: (rank) => `Your Felhunter regains ${rank * 4}% of its maximum mana every time it bites.` },
            { id: "shadow-mastery", name: "Shadow Mastery", icon: "https://wow.zamimg.com/images/wow/icons/large/spell_priest_divinestar_shadow.jpg", row: 5, col: 1, maxPoints: 5, prereq: "siphon-life", description: (rank) => `Increases the damage dealt or life drained by your Shadow spells by ${rank * 2}%.` },

            // Row 7
            { id: "pandemic", name: "Pandemic", icon: "spell_shadow_unstableaffliction_2", row: 6, col: 0, maxPoints: 2, description: (rank) => `Your Corruption and Unstable Affliction periodic damage has a chance to critically strike equal to ${rank * 50}% of your spell critical strike chance and deals 150% damage.` },
            { id: "contagion", name: "Contagion", icon: "spell_shadow_painfulafflictions", row: 6, col: 1, maxPoints: 3, description: (rank) => `Increases the damage of Curse of Agony, Corruption and Seed of Corruption by ${rank * 2}% and reduces the chance your Affliction spells will be dispelled by an additional ${rank * 5}%.` },
            { id: "haunt", name: "Haunt", icon: "ability_warlock_haunt", row: 6, col: 2, maxPoints: 1, prereq: "curse-of-exhaustion", description: (rank) => `You send a ghostly soul into the target, dealing Shadow damage and increasing all damage done by your Damage over Time effects on the target by 20% for 12 sec. When the Haunt spell ends or is dispelled, the soul returns to you, healing you for 100% of the damage it dealt.` },

            // Row 8
            { id: "improved-howl-of-terror", name: "Imp. Howl of Terror", icon: "spell_shadow_deathscream", row: 7, col: 0, maxPoints: 2, description: (rank) => `Reduces the cast time of Howl of Terror by ${rank * 0.75} sec. In addition, your Fear spell now applies Curse of Exhaustion to the target automatically.` },
            { id: "malediction", name: "Malediction", icon: "spell_shadow_curseofachimonde", row: 7, col: 2, maxPoints: 3, description: (rank) => `Increases the damage bonus of your Curse of the Elements and Curse of Shadow spells by ${rank * 1}%. Your Curse of the Elements and Curse of Shadow spells now affect all targets within 20 yards of the primary target.` },

            // Row 9 
            { id: "unstable-affliction", name: "Unstable Affliction", icon: "spell_shadow_unstableaffliction_3", row: 8, col: 1, maxPoints: 1, prereq: "contagion", description: (rank) => `Shadow energy slowly destroys the target, causing 870 damage over 18 sec. In addition, if the Unstable Affliction is dispelled it will cause 1575 damage to the dispeller and silence them for 5 sec.` },
        ]
    },
    demonology: {
        name: "Demonology",
        icon: "https://i.imgur.com/iGZVgov.png",
        background: "https://static.wikia.nocookie.net/wowpedia/images/4/46/Talents_background_-_warlock_Demonology.png/revision/latest?cb=20210223035346",
        talents: [
            // Row 1
            { id: "improved-healthstone", name: "Imp. Healthstone", icon: "inv_stone_04", row: 0, col: 0, maxPoints: 2, description: (rank) => `Increases the amount of Health restored by your Healthstone by ${rank * 10}%.` },
            { id: "demonic-instructor", name: "Demonic Instructor", icon: "spell_shadow_summonimp", row: 0, col: 1, maxPoints: 3, description: (rank) => `Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by ${rank * 10}%.` },
            { id: "demonic-embrace", name: "Demonic Embrace", icon: "spell_shadow_metamorphosis", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases your total Stamina by ${rank * 3}% but reduces your total Spirit by ${rank * 1}%.` },

            // Row 2
            { id: "improved-health-funnel", name: "Imp. Health Funnel", icon: "spell_shadow_lifedrain", row: 1, col: 0, maxPoints: 2, description: (rank) => `Increases the amount of Health transferred by your Health Funnel spell by ${rank * 10}%.` },
            { id: "improved-voidwalker", name: "Imp. Voidwalker", icon: "spell_shadow_summonvoidwalker", row: 1, col: 1, maxPoints: 3, description: (rank) => `Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by ${rank * 10}%.` },
            { id: "fel-intellect", name: "Fel Intellect", icon: "spell_holy_magicalsentry", row: 1, col: 2, maxPoints: 3, description: (rank) => `Increases the maximum Mana of your Imp, Voidwalker, Succubus, and Felhunter by ${rank * 5}%.` },
            { id: "demonic-aegis", name: "Demonic Aegis", icon: "spell_shadow_ragingscream", row: 1, col: 3, maxPoints: 3, description: (rank) => `Increases the effectiveness of your Demon Skin and Demon Armor spells by ${rank * 10}%.` },

            // Row 3
            { id: "improved-succubus", name: "Imp. Succubus", icon: "spell_shadow_summonsuccubus", row: 2, col: 0, maxPoints: 3, description: (rank) => `Increases the effect of your Succubus's Lash of Pain and Soothing Kiss spells by ${rank * 10}%, and increases the duration of your Succubus's Seduction and Lesser Invisibility spells by ${rank * 10}%.` },
            { id: "fel-domination", name: "Fel Domination", icon: "spell_nature_removecurse", row: 2, col: 1, maxPoints: 1, description: (rank) => `Your next Summon Imp, Voidwalker, Succubus, or Felhunter spell has its casting time reduced by 5.5 sec and its Mana cost reduced by 50%.` },
            { id: "fel-stamina", name: "Fel Stamina", icon: "spell_shadow_antishadow", row: 2, col: 2, maxPoints: 3, description: (rank) => `Increases the maximum Health of your Imp, Voidwalker, Succubus, and Felhunter by ${rank * 5}%.` },
            { id: "improved-enslave-demon", name: "Imp. Enslave Demon", icon: "spell_shadow_enslavedemon", row: 2, col: 3, maxPoints: 2, description: (rank) => `Reduces the Attack Speed and Casting Speed penalty of your Enslaved Demon by ${rank * 10}%. Reduces the chance your Enslaved Demon will resist Enslave Demon by ${rank * 10}%.` },

            // Row 4
            { id: "master-conjuror", name: "Master Conjuror", icon: "inv_ammo_firetar", row: 3, col: 3, maxPoints: 2, description: (rank) => `Increases the Firestone and Spellstone effects by ${rank * 15}%.` },
            { id: "master-summoner", name: "Master Summoner", icon: "spell_shadow_impphaseshift", row: 3, col: 1, maxPoints: 2, prereq: "fel-domination", description: (rank) => `Reduces the casting time of your Summon Imp, Voidwalker, Succubus, and Felhunter spells by ${rank * 2} sec and having the Mana cost by ${rank * 20}%.` },
            { id: "unholy-power", name: "Unholy Power", icon: "spell_shadow_shadowworddominate", row: 3, col: 2, maxPoints: 5, description: (rank) => `Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard melee attacks by ${rank * 4}%.` },

            // Row 5
            { id: "demonic-empowerment", name: "Demonic Empowerment", icon: "ability_warlock_demonicempowerment", row: 4, col: 0, maxPoints: 1, description: (rank) => `Grants your summoned demon a unique ability for 20 sec.\n• Felguard: 20% Attack Speed and break CC\n• Imp: 30% Spell Crit\n• Voidwalker: +30% Health\n• Succubus: Instant Invisibility\n• Felhunter: Removes all magic effects` },
            { id: "demonic-pact", name: "Demonic Pact", icon: "spell_shadow_demonicpact", row: 4, col: 1, maxPoints: 5, description: (rank) => `Your pet's critical strikes apply the Demonic Pact effect to your party or raid members, increasing their Spell Power by ${rank * 2}% of your Spell Damage for 45 sec.` },

            // Row 6
            { id: "fel-gluttony", name: "Fel Gluttony", icon: "spell_shadow_manafeed", row: 5, col: 0, maxPoints: 3, description: (rank) => `When you gain Mana from Drain Mana or Life Tap, your pet gains ${rank * 33}% of the mana you gained. In addition, when your pet deals damage, you heal for ${rank * 2}% of the damage dealt.` },
            { id: "master-demonologist", name: "Master Demonologist", icon: "spell_shadow_shadowpact", row: 5, col: 2, maxPoints: 5, prereq: "unholy-power", description: (rank) => `Grant effects to Warlock and Demon while active:\n• Imp: -${rank * 4}% Threat\n• Voidwalker: -${rank * 2}% Phys Dmg\n• Succubus: +${rank * 2}% All Dmg\n• Felhunter: +${rank * 0.2} All Res\n• Felguard: +${rank * 1}% Dmg & -${rank * 1}% Phys Dmg` },

            // Row 7
            { id: "soul-link", name: "Soul Link", icon: "spell_shadow_gathershadows", row: 6, col: 1, maxPoints: 1, prereq: "demonic-pact", description: (rank) => `When active, 20% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, Felhunter, or Felguard instead.` },
            { id: "demonic-knowledge", name: "Demonic Knowledge", icon: "spell_shadow_improvedvampiricembrace", row: 6, col: 2, maxPoints: 3, description: (rank) => `Your summoned demons gain ${rank * 33}% of your Hit Rating, ${rank * 33}% of your Resilience, and ${rank * 15}% of your Haste Rating.` },

            // Row 8
            { id: "demonic-tactics", name: "Demonic Tactics", icon: "spell_shadow_demonictactics", row: 7, col: 1, maxPoints: 5, description: (rank) => `Increases melee and spell critical strike chance for you and your summoned demon by ${rank * 1}%.` },

            // Row 9 
            { id: "summon-felguard", name: "Summon Felguard", icon: "spell_shadow_summonfelguard", row: 8, col: 1, maxPoints: 1, prereq: "soul-link", description: (rank) => `Summons a Felguard to fight for the caster.` },
        ]
    },
    destruction: {
        name: "Destruction",
        icon: "https://i.imgur.com/67hJXkU.png",
        background: "https://static.wikia.nocookie.net/wowpedia/images/9/90/Talents_background_-_warlock_Destruction.png/revision/latest?cb=20210223035145",
        talents: [
            // Row 1
            { id: "improved-shadow-bolt", name: "Imp. Shadow Bolt", icon: "spell_shadow_shadowbolt", row: 0, col: 1, maxPoints: 5, description: (rank) => `Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 20% until 4 non-periodic damage sources are applied. Effect lasts 12 sec.` },
            { id: "cataclysm", name: "Cataclysm", icon: "spell_fire_windsofwoe", row: 0, col: 2, maxPoints: 5, description: (rank) => `Reduces the Mana cost of your Destruction spells by ${rank * 1}%.` },

            // Row 2
            { id: "fire-and-brimstone", name: "Fire and Brimstone", icon: "spell_fire_soulburn", row: 1, col: 0, maxPoints: 3, description: (rank) => `Increases the damage of your Incinerate and Chaos Bolt spells by ${rank * 5}% on targets afflicted by your Immolate.` },
            { id: "bane", name: "Bane", icon: "spell_shadow_deathpact", row: 1, col: 1, maxPoints: 5, description: (rank) => `Reduces the casting time of your Shadow Bolt and Immolate spells by ${rank * 0.1} sec and your Soul Fire spell by ${rank * 0.4} sec.` },
            { id: "aftermath", name: "Aftermath", icon: "spell_fire_fire", row: 1, col: 2, maxPoints: 2, description: (rank) => `Gives your Destruction spells a ${rank * 5}% chance to Daze the target for 5 sec.` },

            // Row 3
            { id: "improved-firebolt", name: "Imp. Firebolt", icon: "spell_fire_firebolt", row: 2, col: 0, maxPoints: 2, description: (rank) => `Reduces the casting time of your Imp's Firebolt spell by ${rank * 0.25} sec.` },
            { id: "improved-lash-of-pain", name: "Imp. Lash of Pain", icon: "spell_shadow_curse", row: 2, col: 1, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Succubus's Lash of Pain spell by ${rank * 3} sec.` },
            { id: "devastation", name: "Devastation", icon: "spell_fire_flamebolt", row: 2, col: 2, maxPoints: 5, description: (rank) => `Increases the critical strike chance of your Destruction spells by ${rank * 1}%.` },
            { id: "chaos-bolt", name: "Chaos Bolt", icon: "ability_warlock_chaosbolt", row: 2, col: 3, maxPoints: 1, description: (rank) => `Sends a bolt of chaotic fire at the enemy, dealing [High Fire Damage]. Chaos Bolt pierces through all absorption effects and cannot be resisted. 10 sec Cooldown.` },

            // Row 4
            { id: "intensity", name: "Intensity", icon: "spell_fire_lavaspawn", row: 3, col: 0, maxPoints: 2, description: (rank) => `Gives you a ${rank * 35}% chance to resist interruption caused by damage while casting or channeling any Destruction spell.` },
            { id: "destructive-reach", name: "Destructive Reach", icon: "spell_shadow_corpseexplode", row: 3, col: 1, maxPoints: 2, description: (rank) => `Increases the range of your Destruction spells by ${rank * 10}% and reduces threat caused by Destruction spells by ${rank * 5}%.` },
            { id: "improved-searing-pain", name: "Imp. Searing Pain", icon: "spell_fire_soulburn", row: 3, col: 3, maxPoints: 2, description: (rank) => `Increases the critical strike chance of your Searing Pain spell by ${rank * 4}%. Allows Searing Pain to be cast while moving. 6 sec cooldown.` },

            // Row 5
            { id: "pyroclasm", name: "Pyroclasm", icon: "spell_fire_volcano", row: 4, col: 0, maxPoints: 2, description: (rank) => `Gives your Rain of Fire, Hellfire, and Soul Fire spells a ${rank * 13}% chance to stun the target for 3 sec.` },
            { id: "improved-immolate", name: "Imp. Immolate", icon: "spell_fire_immolation", row: 4, col: 1, maxPoints: 5, description: (rank) => `Increases the initial damage of your Immolate spell by ${rank * 5}%.` },
            { id: "ruin", name: "Ruin", icon: "spell_shadow_shadowwordpain", row: 4, col: 2, maxPoints: 1, prereq: "devastation", description: (rank) => `Increases the critical strike damage bonus of your Destruction spells by 100%.` },

            // Row 6
            { id: "nether-ward", name: "Nether Ward", icon: "spell_shadow_netherprotection", row: 5, col: 0, maxPoints: 1, description: (rank) => `Active: Surrounds the caster in a shield that absorbs Shadow and Fire damage equal to 40% of your Spell Power. 30 sec Cooldown.` },
            { id: "emberstorm", name: "Emberstorm", icon: "spell_fire_selfdestruct", row: 5, col: 2, maxPoints: 5, description: (rank) => `Reduces the cast time of your Incinerate and Soul Fire spells by ${rank * 0.1} sec.` },

            // Row 7
            { id: "backlash", name: "Backlash", icon: "spell_fire_flare", row: 6, col: 0, maxPoints: 3, prereq: "nether-ward", description: (rank) => `Increases your critical strike chance with spells by ${rank * 1}% and gives you a ${rank * 8}% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%.` },
            { id: "conflagrate", name: "Conflagrate", icon: "spell_fire_fireball", row: 6, col: 1, maxPoints: 1, prereq: "improved-immolate", description: (rank) => `Ignites a target that is already afflicted by Immolate, dealing instant Fire damage and consuming the Immolate spell.` },
            { id: "soul-leech", name: "Soul Leech", icon: "spell_shadow_soulleech_3", row: 6, col: 2, maxPoints: 3, description: (rank) => `Gives your Shadow Bolt, Shadowburn, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a ${rank * 10}% chance to return health equal to 20% of the damage caused.` },

            // Row 8
            { id: "shadow-and-flame", name: "Shadow and Flame", icon: "spell_shadow_shadowandflame", row: 7, col: 1, maxPoints: 5, description: (rank) => `Your Shadow Bolt and Incinerate spells gain an additional ${rank * 4}% of your bonus spell damage effects.` },

            // Row 9 
            { id: "shadowfury", name: "Shadowfury", icon: "spell_shadow_shadowfury", row: 8, col: 1, maxPoints: 1, description: (rank) => `Shadowfury is unleashed, causing Shadow damage and stunning all enemies within 12 yds for 2 sec. Targets also take 20% increased Fire damage for 6 sec. Instant Cast. 20 sec Cooldown.` },
        ]
    }
};

export const warriorTalents = {
    arms: {
        name: "Arms",
        icon: "https://i.imgur.com/tgSiYFd.png",
        background: "https://i.imgur.com/sR0hs3l.jpeg", // NEW URL
        talents: [
            // Row 1
            { id: "improved-heroic-strike", name: "Imp. Heroic Strike", icon: "ability_rogue_ambush", row: 0, col: 0, maxPoints: 3, description: (rank) => `Reduces the cost of your Heroic Strike ability by ${rank * 1} rage point.` },
            { id: "deflection", name: "Deflection", icon: "ability_parry", row: 0, col: 1, maxPoints: 5, description: (rank) => `Increases your Parry chance by ${rank * 1}%.` },
            { id: "improved-rend", name: "Imp. Rend", icon: "ability_gouge", row: 0, col: 2, maxPoints: 3, description: (rank) => `Increases the bleed damage done by your Rend ability by ${rank * 10}%.` },

            // Row 2
            { id: "vanguards-momentum", name: "Vanguard's Momentum", icon: "ability_warrior_charge", row: 1, col: 0, maxPoints: 2, description: (rank) => `Increases Rage generated by Charge by ${rank * 3}. Additionally, your Intervene ability now safeguards the target, placing a shield on them that absorbs damage equal to ${rank * 15}% of your Attack Power plus ${rank * 5}% of your Maximum Health. Lasts 6 sec.` },
            { id: "iron-will", name: "Iron Will", icon: "spell_magic_magearmor", row: 1, col: 1, maxPoints: 5, description: (rank) => `Reduces the chance you will be afflicted by Stun, Charm and Disorient effects by an additional ${rank * 3}%.` },
            { id: "improved-thunder-clap", name: "Imp. Thunder Clap", icon: "ability_thunderbolt", row: 1, col: 2, maxPoints: 3, description: (rank) => `Reduces the cost of your Thunder Clap ability by ${rank * 2} rage points and increases the damage by ${rank * 20}% and the slowing effect by an additional ${rank * 6}%.` },

            // Row 3
            { id: "improved-overpower", name: "Imp. Overpower", icon: "inv_sword_05", row: 2, col: 0, maxPoints: 2, description: (rank) => `Increases the critical strike chance of your Overpower ability by ${rank * 25}%.` },
            { id: "second-wind", name: "Second Wind", icon: "ability_hunter_harass", row: 2, col: 1, maxPoints: 2, description: (rank) => `Whenever you are struck by a Stun or Immobilize effect, you generate ${rank * 10} rage and ${rank * 2.5}% of your total health over 10 sec.` },
            { id: "deep-wounds", name: "Deep Wounds", icon: "ability_backstab", row: 2, col: 2, maxPoints: 3, description: (rank) => `Your critical strikes cause the opponent to bleed, dealing ${rank * 20}% of your melee weapon's average damage over 12 sec.` },

            // Row 4
            { id: "sudden-death", name: "Sudden Death", icon: "ability_warrior_improveddisciplines", row: 3, col: 0, maxPoints: 3, description: (rank) => `Your melee hits have a chance to allow the use of Execute regardless of the target's health level. Execute used from Sudden Death costs no rage.` },
            { id: "two-handed-weapon-specialization", name: "Two-Handed Spec.", icon: "inv_axe_09", row: 3, col: 1, maxPoints: 5, description: (rank) => `Increases the damage you deal with two-handed melee weapons by ${rank * 1}%.` },
            { id: "impale", name: "Impale", icon: "ability_searingarrow", row: 3, col: 2, maxPoints: 2, prereq: "deep-wounds", description: (rank) => `Increases the critical strike damage bonus of your abilities in Battle, Defensive, and Berserker stance by ${rank * 10}%.` },

            // Row 5
            { id: "death-wish", name: "Death Wish", icon: "spell_shadow_deathpact", row: 4, col: 1, maxPoints: 1, description: (rank) => `When activated, gives you immunity to Fear effects, and increases your physical damage by 20%, but increases all damage taken by 5%. Lasts 30 sec.` },
            { id: "weapon-mastery", name: "Weapon Mastery", icon: "ability_warrior_weaponmastery", row: 4, col: 2, maxPoints: 5, description: (rank) => `Your mastery over the instruments of war adapts to the weapon you wield:\n• Axes & Polearms: Increases your chance to get a critical strike by ${rank * 1}%.\n• Swords: Grants a ${rank * 1}% chance to grant an extra attack on the same target.\n• Maces: Your attacks ignore 10% of opponent's Armor and have a ${rank * 1}% chance to stun the target for 3 sec.` }, // Shortened for array readability, will use full desc in logic if needed or just this text. The prompt gave specific text, I should use that.

            // Row 6
            { id: "improved-intercept", name: "Imp. Intercept", icon: "ability_rogue_sprint", row: 5, col: 0, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Intercept ability by ${rank * 5} sec.` },
            { id: "mortal-strike", name: "Mortal Strike", icon: "ability_warrior_savageblow", row: 5, col: 1, maxPoints: 1, prereq: "death-wish", description: (rank) => `A vicious strike that deals weapon damage plus 10% and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec.` },
            { id: "improved-hamstring", name: "Imp. Hamstring", icon: "ability_shockwave", row: 5, col: 2, maxPoints: 3, description: (rank) => `Gives your Hamstring ability a ${rank * 5}% chance to immobilize the target for 5 sec.` },
            { id: "improved-disciplines", name: "Imp. Disciplines", icon: "ability_warrior_shieldwall", row: 5, col: 3, maxPoints: 3, description: (rank) => `Reduces the cooldown of your Retaliation, Recklessness and Shield Wall abilities by ${rank * 10} min.` },

            // Row 7
            { id: "blood-frenzy", name: "Blood Frenzy", icon: "ability_warrior_bloodfrenzy", row: 6, col: 0, maxPoints: 2, description: (rank) => `Your Bleed effects cause the target to take 4% increased physical damage. In addition, your attack speed is increased by ${rank * 1.5}% for each bleeding enemy within 10 yards (Stacks 3 times).` },


            // Row 8
            { id: "improved-mortal-strike", name: "Imp. Mortal Strike", icon: "ability_warrior_savageblow", row: 7, col: 1, maxPoints: 5, prereq: "mortal-strike", description: (rank) => `Reduces the cooldown of your Mortal Strike ability by ${rank * 0.2} sec and increases the damage it causes by ${rank * 1}%.` },

            // Row 9 
            { id: "bladestorm", name: "Bladestorm", icon: "ability_warrior_bladestorm", row: 8, col: 1, maxPoints: 1, prereq: "improved-mortal-strike", description: (rank) => `Become an unstoppable storm of destructive force, hitting up to 4 nearby targets with both weapons every 1 second for 4 seconds. Immune to CC during Bladestorm. 1.5 min CD.` },
        ]
    },
    fury: {
        name: "Fury",
        icon: "https://i.imgur.com/wJbmNeR.png",
        background: "https://i.imgur.com/G8K6nti.jpeg", // NEW URL
        talents: [
            // Row 1
            { id: "booming-voice", name: "Booming Voice", icon: "spell_nature_purge", row: 0, col: 1, maxPoints: 5, description: (rank) => `Increases the area of effect and duration of your Battle Shout, Demoralizing Shout and Commanding Shout abilities by ${rank * 10}%.` },
            { id: "cruelty", name: "Cruelty", icon: "ability_rogue_eviscerate", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases your critical strike chance with melee weapons by ${rank * 1}%.` },

            // Row 2
            { id: "improved-demoralizing-shout", name: "Imp. Demoralizing Shout", icon: "ability_warrior_warcry", row: 1, col: 1, maxPoints: 5, description: (rank) => `Increases the melee attack power reduction of your Demoralizing Shout by ${rank * 8}%.` },
            { id: "unbridled-wrath", name: "Unbridled Wrath", icon: "spell_nature_stoneclawtotem", row: 1, col: 2, maxPoints: 5, description: (rank) => `Gives you a ${rank * 40}% chance to generate an additional rage point when you deal melee damage with a weapon.` },

            // Row 3
            { id: "improved-cleave", name: "Imp. Cleave", icon: "ability_warrior_cleave", row: 2, col: 0, maxPoints: 3, description: (rank) => `Increases the bonus damage done by your Cleave ability by ${rank * 40}%.` },
            { id: "raging-blow", name: "Raging Blow", icon: "ability_hunter_swiftstrike", row: 2, col: 1, maxPoints: 1, description: (rank) => `A mighty blow that deals 100% weapon damage, but can only be used while Enraged.` },
            { id: "blood-craze", name: "Blood Craze", icon: "spell_shadow_summonimp", row: 2, col: 2, maxPoints: 3, description: (rank) => `Regenerates ${rank * 1}% of your total Health over 6 sec after being the victim of a critical strike.` },
            { id: "commanding-presence", name: "Commanding Presence", icon: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_focusedmind.jpg", row: 2, col: 3, maxPoints: 3, description: (rank) => `Increases the health bonus of your Commanding Shout by ${rank * 10}%, the attack power bonus of your Battle Shout by ${rank * 10}%, and increases the movement speed reduction of your Piercing Howl by ${rank * 10}%.` },

            // Row 4
            { id: "dual-wield-specialization", name: "Dual Wield Spec.", icon: "ability_dualwield", row: 3, col: 0, maxPoints: 5, description: (rank) => `Increases the damage done by your off-hand weapon by ${rank * 5}%.` },
            { id: "improved-execute", name: "Imp. Execute", icon: "inv_sword_48", row: 3, col: 1, maxPoints: 2, description: (rank) => `Reduces the Rage cost of your Execute ability by ${rank * 2.5}.` },
            { id: "fresh-meat", name: "Fresh Meat", icon: "https://wow.zamimg.com/images/wow/icons/large/ability_deathwing_bloodcorruption_death.jpg", row: 3, col: 2, maxPoints: 5, description: (rank) => `Your Bloodthirst critical strikes have a ${rank * 20}% chance to Enrage you, increasing physical damage done by 10% for 12 sec. This effect does not stack with Enrage.` },

            // Row 5
            { id: "improved-slam", name: "Imp. Slam", icon: "ability_warrior_decisivestrike", row: 4, col: 0, maxPoints: 2, description: (rank) => `Decreases the casting time of your Slam ability by ${rank * 0.5} sec.` },
            { id: "sweeping-strikes", name: "Sweeping Strikes", icon: "https://wow.zamimg.com/images/wow/icons/large/ability_rogue_slicedice.jpg", row: 4, col: 1, maxPoints: 1, description: (rank) => `Your next 10 melee attacks strike an additional nearby opponent.` },
            { id: "weapon-mastery", name: "Weapon Mastery", icon: "ability_warrior_weaponmastery", row: 4, col: 3, maxPoints: 2, description: (rank) => `Reduces the duration of all Disarm effects used against you by ${rank * 25}%.` },

            // Row 6
            { id: "improved-berserker-rage", name: "Imp. Berserker Rage", icon: "spell_nature_ancestralguardian", row: 5, col: 0, maxPoints: 2, description: (rank) => `The Berserker Rage ability will generate ${rank * 10} rage when used.` },
            { id: "flurry", name: "Flurry", icon: "ability_ghoulfrenzy", row: 5, col: 2, maxPoints: 5, prereq: "fresh-meat", description: (rank) => `Increases your attack speed by ${rank * 5}% for your next 3 swings after dealing a melee critical strike.` },

            // Row 7
            { id: "precision", name: "Precision", icon: "ability_marksmanship", row: 6, col: 0, maxPoints: 3, description: (rank) => `Increases your chance to hit with melee weapons by ${rank * 1}%. Additionally, your attacks ignore ${rank * 10} of the target's Armor for every 1% of Hit Chance you possess.` },
            { id: "bloodthirst", name: "Bloodthirst", icon: "spell_nature_bloodlust", row: 6, col: 1, maxPoints: 1, prereq: "sweeping-strikes", description: (rank) => `Instantly attacks the target creating 30 damage. In addition, the next 5 successful melee attacks will restore 10 health. This effect lasts 8 sec. Attack power increases damage.` },
            { id: "improved-whirlwind", name: "Imp. Whirlwind", icon: "ability_whirlwind", row: 6, col: 2, maxPoints: 2, description: (rank) => `Increases the damage of your Whirlwind ability by ${rank * 10}%.` },

            // Row 8
            { id: "improved-berserker-stance", name: "Imp. Berserker Stance", icon: "ability_racial_avatar", row: 7, col: 2, maxPoints: 5, description: (rank) => `Increases attack power by ${rank * 2}% and reduces threat caused by ${rank * 2}% while in Berserker Stance.` },

            // Row 9 
            { id: "titanic-grip", name: "Titanic Grip", icon: "ability_warrior_titansgrip", row: 8, col: 1, maxPoints: 1, prereq: "bloodthirst", description: (rank) => `Allows you to equip two-handed axes, maces and swords in one hand. While you have a two-handed weapon equipped in one hand, your physical damage dealt is reduced by 10%.` },
        ]
    },
    protection: {
        name: "Protection",
        icon: "https://i.imgur.com/FhuhqTX.png",
        background: "https://i.imgur.com/1Qa1rkr.jpeg", // NEW URL
        talents: [
            // Row 1
            { id: "improved-bloodrage", name: "Imp. Bloodrage", icon: "ability_racial_bloodrage", row: 0, col: 0, maxPoints: 2, description: (rank) => `Increases the Rage generated by your Bloodrage ability by ${rank * 25}%. While in Defensive Stance, you generate ${rank * 0.5} Rage every 3 seconds.` },
            { id: "tactical-mastery", name: "Tactical Mastery", icon: "spell_nature_enchantarmor", row: 0, col: 1, maxPoints: 3, description: (rank) => `You retain up to ${rank * 5} of your Rage points when you change stances. In addition, greatly increases the threat generated by your Bloodthirst and Mortal Strike abilities when in Defensive Stance.` },
            { id: "anticipation", name: "Anticipation", icon: "spell_magic_lesserinvisibilty", row: 0, col: 2, maxPoints: 5, description: (rank) => `Increases your Defense ability by ${rank * 4}. Whenever you Dodge, Parry, or are Missed by an attack, you instantly generate ${rank * 2} Rage.` },

            // Row 2
            { id: "shield-specialization", name: "Shield Specialization", icon: "inv_shield_06", row: 1, col: 1, maxPoints: 5, description: (rank) => `Increases your chance to block attacks with a shield by ${rank * 1}% and has a ${rank * 20}% chance to generate 1 rage when a block occurs.` },
            { id: "toughness", name: "Toughness", icon: "spell_holy_devotion", row: 1, col: 2, maxPoints: 5, description: (rank) => `Increases your armor value from items by ${rank * 2}%.` },

            // Row 3
            { id: "last-stand", name: "Last Stand", icon: "spell_holy_ashestoashes", row: 2, col: 0, maxPoints: 1, description: (rank) => `When activated, this ability temporarily grants you 30% of your maximum hit points for 20 sec. After the effect expires, the health is lost. 5 min cooldown.` },
            { id: "vigilance", name: "Vigilance", icon: "spell_nature_sleep", row: 2, col: 1, maxPoints: 1, prereq: "shield-specialization", description: (rank) => `Place Vigilance on a party or raid member. For 30 min, you transfer 15% of the threat they generate to yourself. In addition, your Taunt cooldown is reset each time they are hit by a melee attack, and they take 3% reduced damage. 2 min CD.` },
            { id: "improved-revenge", name: "Imp. Revenge", icon: "ability_warrior_revenge", row: 2, col: 2, maxPoints: 3, description: (rank) => `Gives your Revenge ability a ${rank * 15}% chance to stun the target for 3 sec.` },
            { id: "defiance", name: "Defiance", icon: "ability_warrior_innerrage", row: 2, col: 3, maxPoints: 3, description: (rank) => `Increases the threat generated by your attacks by ${rank * 5}% while in Defensive Stance and increases your expertise by ${rank * 2}.` },

            // Row 4
            { id: "improved-sunder-armor", name: "Imp. Sunder Armor", icon: "ability_warrior_sunder", row: 3, col: 0, maxPoints: 3, description: (rank) => `Reduces the cost of your Sunder Armor and Devastate abilities by ${rank * 1} rage point.` },
            { id: "improved-disarm", name: "Imp. Disarm", icon: "ability_warrior_disarm", row: 3, col: 1, maxPoints: 3, description: (rank) => `Reduces the cooldown of your Disarm ability by ${rank * 10} sec, increases the duration by ${rank * 1} sec, and increases the damage the target takes while disarmed by ${rank * 5}%.` },
            { id: "improved-taunt", name: "Imp. Taunt", icon: "spell_nature_reincarnation", row: 3, col: 2, maxPoints: 2, description: (rank) => `Reduces the cooldown of your Taunt ability by ${rank * 1} sec.` },

            // Row 5
            { id: "improved-shield-wall", name: "Imp. Shield Wall", icon: "ability_warrior_shieldwall", row: 4, col: 0, maxPoints: 2, description: (rank) => `Increases the effect duration of your Shield Wall ability by ${rank * 3} sec and reduces its cooldown by ${rank * 60} sec.` },
            { id: "mass-spell-reflection", name: "Mass Spell Reflection", icon: "ability_warrior_shieldreflection", row: 4, col: 1, maxPoints: 1, description: (rank) => `Reflects the next spell cast on you and all party members within 20 yards. Lasts 5 seconds. 1 min CD.` },
            { id: "improved-shield-bash", name: "Imp. Shield Bash", icon: "ability_warrior_shieldbash", row: 4, col: 2, maxPoints: 2, description: (rank) => `Increases the silence duration of your Shield Bash ability by ${rank * 1.5} sec.` },

            // Row 6
            { id: "shield-mastery", name: "Shield Mastery", icon: "ability_warrior_shieldmastery", row: 5, col: 0, maxPoints: 3, description: (rank) => `Increases the amount of damage absorbed by your Shield Block ability by ${rank * 33}%.` },
            { id: "one-handed-weapon-specialization", name: "One-Handed Spec.", icon: "inv_sword_20", row: 5, col: 2, maxPoints: 5, description: (rank) => `Increases all damage you deal when a one-handed melee weapon is equipped by ${rank * 2}%.` },

            // Row 7
            { id: "improved-defensive-stance", name: "Imp. Defensive Stance", icon: "ability_warrior_defensivestance", row: 6, col: 0, maxPoints: 2, description: (rank) => `Reduces all spell damage taken by ${rank * 4}% while in Defensive Stance.` },
            { id: "shockwave", name: "Shockwave", icon: "ability_warrior_shockwave", row: 6, col: 1, maxPoints: 1, prereq: "mass-spell-reflection", description: (rank) => `Sends a wave of force in front of the warrior, causing 1200 damage (based on AP) and stunning all enemy targets within 10 yards in a frontal cone for 4 sec. 20 sec CD.` },
            { id: "focused-rage", name: "Focused Rage", icon: "ability_warrior_focusedrage", row: 6, col: 2, maxPoints: 3, description: (rank) => `Reduces the rage cost of your offensive abilities by ${rank * 1}.` },

            // Row 8
            { id: "vitality", name: "Vitality", icon: "spell_nature_undyingstrength", row: 7, col: 1, maxPoints: 5, description: (rank) => `Increases your total Stamina by ${rank * 1}% and your total Strength by ${rank * 2}%.` },

            // Row 9 
            { id: "devastate", name: "Devastate", icon: "inv_sword_11", row: 8, col: 1, maxPoints: 1, description: (rank) => `Sunder the target's armor, causing the Sunder Armor effect. In addition, Devastate deals 50% weapon damage plus bonus damage per stack of Sunder Armor. Critical hits with Devastate reset the cooldown of Shield Slam.` },
        ]
    }
};
