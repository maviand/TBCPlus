export const druidTalents = {
    balance: {
        name: "Balance",
        icon: "https://i.imgur.com/xqYw2gI.png",
        background: "https://i.imgur.com/1jWqK7k.jpeg", // Placeholder or generic space background
        talents: [
            // ROW 1
            {
                id: "starlight-wrath",
                name: "Starlight Wrath",
                icon: "spell_nature_abolishmagic",
                row: 0,
                col: 1,
                maxPoints: 5,
                description: (rank) => `Reduces the cast time of your Wrath and Starfire spells by ${rank * 0.1} sec.`,
            },
            {
                id: "natures-grasp",
                name: "Nature's Grasp",
                icon: "spell_nature_naturetouchgrow",
                row: 0,
                col: 2,
                maxPoints: 1,
                description: (rank) => `While active, any time an enemy strikes the caster they have a ${rank * 35}% chance to become afflicted by Entangling Roots.`,
            },
            {
                id: "improved-moonfire",
                name: "Improved Moonfire",
                icon: "spell_nature_starfall",
                row: 0,
                col: 3,
                maxPoints: 2,
                description: (rank) => `Increases the damage and critical strike chance of your Moonfire spell by ${rank * 5}%.`,
            },
            // ROW 2
            {
                id: "control-of-nature",
                name: "Control of Nature",
                icon: "spell_nature_stranglevines",
                row: 1,
                col: 0,
                maxPoints: 3,
                description: (rank) => `Gives you a ${rank * 33}% chance to avoid interruption caused by damage while casting Entangling Roots and Cyclone.`,
            },
            {
                id: "focused-starlight",
                name: "Focused Starlight",
                icon: "spell_arcane_starfire",
                row: 1,
                col: 1,
                maxPoints: 2,
                description: (rank) => `Increases the critical strike chance of your Wrath and Starfire spells by ${rank * 2}%.`,
            },
            {
                id: "improved-swarm",
                name: "Improved Insect Swarm",
                icon: "spell_nature_insectswarm",
                row: 1,
                col: 2,
                maxPoints: 3,
                description: (rank) => `Increases the damage done by your Insect Swarm spell by ${rank * 10}% and the duration by ${rank * 2} sec.`,
            },
            // ROW 3
            {
                id: "insect-swarm",
                name: "Insect Swarm",
                icon: "spell_nature_insectswarm",
                row: 2,
                col: 1,
                maxPoints: 1,
                reqPoints: 10,
                description: (rank) => `The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing Nature damage over 12 sec.`,
            },
            {
                id: "reach-of-cenarius",
                name: "Reach of Cenarius",
                icon: "spell_nature_naturetouchgrow",
                row: 2,
                col: 2,
                maxPoints: 2,
                description: (rank) => `Increases the range of your Balance spells and Faerie Fire (Feral) by ${rank * 10}%.`,
            },
            {
                id: "vengeance",
                name: "Vengeance",
                icon: "spell_nature_purge",
                row: 2,
                col: 3,
                maxPoints: 5,
                description: (rank) => `Increases the critical strike damage bonus of your Starfire, Starfall, and Wrath spells by ${rank * 20}%.`,
            },
            // ROW 4 (TBC+ Start Integration)
            {
                id: "celestial-focus",
                name: "Celestial Focus",
                icon: "spell_arcane_starfire",
                row: 3,
                col: 1,
                maxPoints: 3,
                description: (rank) => `Gives your Starfire spell a ${rank * 5}% chance to stun the target for 3 sec.`,
            },
            {
                id: "lunar-guidance",
                name: "Lunar Guidance",
                icon: "spell_arcane_prismaticcloak",
                row: 3,
                col: 2,
                maxPoints: 3,
                description: (rank) => `Provides a ${rank * 10}% mana cost reduction and grants ${rank * 5}% of your total Intellect as Spell Power.`,
            },
            // ROW 5
            {
                id: "moonkin-form",
                name: "Moonkin Form",
                icon: "spell_nature_forceofnature",
                row: 4,
                col: 1,
                maxPoints: 1,
                reqPoints: 20,
                description: (rank) => `Transforms the Druid into Moonkin Form. While in this form, the armor contribution from items is increased by 400%, and all party members within 30 yards have their spell critical chance increased by 5%. TBC+: Provides 3% Spell Haste to raid.`,
            },
            // ROW 8 -> Eclipse
            {
                id: "eclipse",
                name: "Eclipse",
                icon: "spell_druid_eclipse",
                row: 7, // Deep in tree
                col: 1,
                maxPoints: 3,
                reqPoints: 35,
                description: (rank) => `[TBC+ Reworked] Two consecutive Starfire spells empower your next 2 Wraths, and vice-versa, increasing their damage by ${rank * 10}%.`,
            },
            // ROW 9 -> Typhoon
            {
                id: "typhoon",
                name: "Typhoon",
                icon: "spell_shaman_thunderstorm",
                row: 8,
                col: 1,
                maxPoints: 1,
                reqPoints: 40,
                description: (rank) => `Summons a violent Typhoon that travels forward, knocking back enemies 20 yards and dazing them for 6 sec.`,
            },
            // ROW 10 -> Starfall
            {
                id: "starfall",
                name: "Starfall",
                icon: "spell_arcane_starfire",
                row: 10,
                col: 1,
                maxPoints: 1,
                reqPoints: 50,
                description: (rank) => `Summons a flurry of stars from the sky on all targets within 30 yards of the caster, each dealing Arcane damage.`,
            },
        ]
    },
    feral: {
        name: "Feral Combat",
        icon: "https://i.imgur.com/su1345k.jpeg",
        background: "https://i.imgur.com/8WViTgN.png", // Placeholder
        talents: [
            // ROW 1
            {
                id: "ferocity",
                name: "Ferocity",
                icon: "ability_hunter_pet_hyena",
                row: 0,
                col: 1,
                maxPoints: 5,
                description: (rank) => `Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by ${rank}.`,
            },
            // ... Placeholder for middle
            {
                id: "survival-instincts",
                name: "Survival Instincts",
                icon: "ability_druid_tigersroar",
                row: 4,
                col: 1,
                maxPoints: 1,
                description: (rank) => `[TBC+ New] Reduces all damage taken by 50% for 6 seconds. (2 Charges, 1.5m CD).`,
            },
            {
                id: "savage-roar",
                name: "Savage Roar",
                icon: "ability_druid_skinteeth",
                row: 6,
                col: 1,
                maxPoints: 1,
                description: (rank) => `[TBC+ New] Finishing move that increases physical damage done by 30%.`,
            },
            {
                id: "predators-rhythm",
                name: "Predator's Rhythm",
                icon: "ability_hunter_pet_cat",
                row: 8,
                col: 1,
                maxPoints: 1,
                description: (rank) => `[TBC+ New] Leader of the Pack Rework: Grants 5% Crit to party. Bleeds deal 5% increased damage to bleeding targets.`,
            },
        ]
    },
    restoration: {
        name: "Restoration",
        icon: "https://i.imgur.com/8WViTgN.png",
        background: "https://i.imgur.com/su1345k.jpeg", // Placeholder
        talents: [
            // ROW 1
            {
                id: "improved-mark",
                name: "Improved Mark of the Wild",
                icon: "spell_nature_regeneration",
                row: 0,
                col: 1,
                maxPoints: 5,
                description: (rank) => `Increases the effects of your Mark of the Wild and Gift of the Wild spells by ${rank * 7}%.`,
            },
            // ... Placeholder for middle
            {
                id: "tree-of-life",
                name: "Tree of Life",
                icon: "ability_druid_treeoflife",
                row: 8, // Usually 41
                col: 1,
                maxPoints: 1,
                description: (rank) => `[TBC+ Empowered] Reworked into a 3-minute transformation lasting 20 sec. Healing Touch becomes instant cast.`,
            },
            {
                id: "wild-growth",
                name: "Wild Growth",
                icon: "spell_nature_rejuvenation",
                row: 10, // 51 pt
                col: 1,
                maxPoints: 1,
                description: (rank) => `[TBC+ New] Heals up to 5 friendly party or raid members within 15 yards of the target over 7 sec.`,
            },
        ]
    }
};
