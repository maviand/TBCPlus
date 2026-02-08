export const CHANGELOG_DATA = {
    druid: {
        Balance: [
            { type: 'rework', name: 'Eclipse', desc: 'Now a reliable toggle state. Casting Starfire buffs Wrath, and vice versa. No more RNG.', icon: 'spell_nature_starfall' },
            { type: 'rework', name: 'Starsurge', desc: 'Replaces Insect Swarm (Row 3). Instant cast Arcane nuke that generates Eclipse energy.', icon: 'spell_arcane_arcane03' },
            { type: 'new', name: 'Starfall', desc: '(51pt). Calls down stars to strike enemies within 30 yards. Core AoE CD.', icon: 'ability_druid_starfall' },
            { type: 'buff', name: 'Moonfury', desc: 'Now grants 15% bonus damage to Starfire and Wrath.', icon: 'spell_nature_moonglow' }
        ],
        Feral: [
            { type: 'new', name: 'Berserk', desc: '(51pt). Reduces energy cost of all Cat Form abilities by 50% for 15 sec.', icon: 'ability_druid_berserk' },
            { type: 'rework', name: 'Savage Roar', desc: 'Finishing move that increases physical damage done by 30%.', icon: 'ability_druid_skinteeth' },
            { type: 'buff', name: 'Survival of the Fittest', desc: 'Grants immunity to critical strikes, making Druids viable Main Tanks.', icon: 'ability_druid_enrage' }
        ],
        Restoration: [
            { type: 'new', name: 'Wild Growth', desc: '(51pt). Heals up to 5 party members within 15 yards. Smart target selection.', icon: 'ability_druid_flourish' },
            { type: 'new', name: 'Nourish', desc: 'Fast heal that heals for more for each HoT on the target.', icon: 'ability_druid_nourish' },
            { type: 'buff', name: 'Tree of Life', desc: 'No longer reduces movement speed. Now provides passive healing aura to party.', icon: 'ability_druid_treeoflife' }
        ]
    },
    hunter: {
        Marksmanship: [
            { type: 'new', name: 'Chimera Shot', desc: '(51pt). Deals damage and refreshes your Sting duration. Core rotational ability.', icon: 'ability_hunter_chimerashot2' },
            { type: 'rework', name: 'Steady Shot', desc: 'Now scales correctly with Attack Power and does not cliiping auto-shots.', icon: 'ability_hunter_steadyshot' }
        ],
        Survival: [
            { type: 'new', name: 'Explosive Shot', desc: '(51pt). Fire an explosive charge into the enemy, dealing Fire damage over 2 sec.', icon: 'ability_hunter_explosiveshot' },
            { type: 'new', name: 'Black Arrow', desc: 'Fires a black arrow that deals Shadow damage and increases damage taken by the target.', icon: 'spell_shadow_painspike' },
            { type: 'rework', name: 'Lock and Load', desc: 'Trap activation causes your next 2 Explosive Shots to cost no mana and have no cooldown.', icon: 'ability_hunter_lockandload' }
        ],
        "Beast Mastery": [
            { type: 'new', name: 'Beast Mastery', desc: '(51pt). You master the art of Beast training, allowing you to tame Exotic pets.', icon: 'ability_hunter_beastmastery' },
            { type: 'buff', name: 'Kindred Spirits', desc: 'Increases your pet\'s damage and movement speed.', icon: 'ability_hunter_separationanxiety' }
        ]
    },
    mage: {
        Arcane: [
            { type: 'new', name: 'Arcane Barrage', desc: '(51pt). Launches a bolt of arcane energy. Instant cast. Consumes Arcane Blast stacks.', icon: 'ability_mage_arcanebarrage' },
            { type: 'new', name: 'Missile Barrage', desc: 'Arcane Blast has a chance to reduce the channel time of Arcane Missiles by 50%.', icon: 'ability_mage_missilebarrage' }
        ],
        Fire: [
            { type: 'new', name: 'Living Bomb', desc: '(51pt). The target becomes a Living Bomb, taking Fire damage then exploding.', icon: 'ability_mage_livingbomb' },
            { type: 'new', name: 'Hot Streak', desc: 'Two non-periodic spell criticals in a row make your next Pyroblast instant cast.', icon: 'ability_mage_hotstreak' }
        ],
        Frost: [
            { type: 'new', name: 'Deep Freeze', desc: '(51pt). Stuns the target for 5 sec. Only usable on Frozen targets.', icon: 'ability_mage_deepfreeze' },
            { type: 'new', name: 'Fingers of Frost', desc: 'Your Chill effects have a chance to treat your next 2 spells as if the target were Frozen.', icon: 'ability_mage_wintersgrasp' }
        ]
    },
    paladin: {
        Holy: [
            { type: 'new', name: 'Beacon of Light', desc: '(51pt). The target becomes a Beacon of Light, receiving heals you cast on other targets.', icon: 'ability_paladin_beaconoflight' },
            { type: 'new', name: 'Sacred Shield', desc: 'Protects the target, absorbing damage when they are hit.', icon: 'ability_paladin_blessedhands' }
        ],
        Protection: [
            { type: 'new', name: 'Hammer of the Righteous', desc: '(51pt). Hammer the current target and up to 2 additional targets.', icon: 'ability_paladin_hammeroftherighteous' },
            { type: 'new', name: 'Shield of the Righteous', desc: 'Slam the target with your shield, dealing Holy damage based on your Block Value.', icon: 'ability_paladin_shieldofvengeance' }
        ],
        Retribution: [
            { type: 'new', name: 'Divine Storm', desc: '(51pt). Instant weapon attack that hits up to 4 enemies and heals party members.', icon: 'ability_paladin_divinestorm' },
            { type: 'rework', name: 'Judgements of the Wise', desc: 'Your Judgements grant mana to you and your party.', icon: 'ability_paladin_judgementofthewise' }
        ]
    },
    priest: {
        Discipline: [
            { type: 'new', name: 'Penance', desc: '(51pt). Launches a volley of holy light at the target. Heals allies or damages enemies.', icon: 'spell_holy_penance' },
            { type: 'buff', name: 'Rapture', desc: 'When your Shield breaks, you regenerate mana.', icon: 'spell_holy_rapture' }
        ],
        Holy: [
            { type: 'new', name: 'Guardian Spirit', desc: '(51pt). Calls upon a guardian spirit to watch over the friendly target. Prevents death.', icon: 'spell_holy_guardianspirit' },
            { type: 'new', name: 'Circle of Healing', desc: 'Heals up to 5 friendly party or raid members within 15 yards.', icon: 'spell_holy_circleofrenewal' }
        ],
        Shadow: [
            { type: 'new', name: 'Dispersion', desc: '(51pt). Disperse into pure shadow energy, reducing all damage taken by 90%. Regenerates mana.', icon: 'spell_shadow_dispersion' },
            { type: 'new', name: 'Psychic Horror', desc: 'Terrifies the target, causing them to tremble in horror for 3 sec and disarming them.', icon: 'spell_shadow_psychichorrors' }
        ]
    },
    rogue: {
        Assassination: [
            { type: 'new', name: 'Hunger For Blood', desc: '(51pt). Enrages you, increasing all damage caused. Stacks up to 3 times.', icon: 'ability_rogue_hungerforblood' },
            { type: 'new', name: 'Mutilate', desc: 'Instantly attacks with both weapons. Damage increased against Poisoned targets.', icon: 'ability_rogue_shadowstrikes' }
        ],
        Combat: [
            { type: 'new', name: 'Killing Spree', desc: '(51pt). Step through the shadows from enemy to enemy, attacking them.', icon: 'ability_rogue_murderspree' },
            { type: 'rework', name: 'Savage Combat', desc: 'Increases your total Attack Power by 4% and increases physical damage done to poisoned enemies.', icon: 'ability_rogue_savagecombat' }
        ],
        Subtlety: [
            { type: 'new', name: 'Shadow Dance', desc: '(51pt). Enter Shadow Dance, allowing use of Stealth abilities while in combat for 6 sec.', icon: 'ability_rogue_shadowdance' },
            { type: 'new', name: 'Honor Among Thieves', desc: 'When anyone in your group critically hits with a spell or ability, you gain a combo point.', icon: 'ability_rogue_honoramongthieves' }
        ]
    },
    shaman: {
        Elemental: [
            { type: 'new', name: 'Thunderstorm', desc: '(51pt). Call down lightning, damaging enemies and knocking them back 20 yards. Mana restore.', icon: 'spell_shaman_thunderstorm' },
            { type: 'new', name: 'Lava Burst', desc: 'You hurl molten lava at the target. Critical strike if Flame Shock is on target.', icon: 'spell_shaman_lavaburst' }
        ],
        Enhancement: [
            { type: 'new', name: 'Feral Spirit', desc: '(51pt). Summons two Spirit Wolves to fight by the shaman\'s side for 45 sec.', icon: 'spell_shaman_feralspirit' },
            { type: 'new', name: 'Maelstrom Weapon', desc: 'When you deal damage with a melee weapon, you have a chance to reduce cast time of spells.', icon: 'spell_shaman_maelstromweapon' }
        ],
        Restoration: [
            { type: 'new', name: 'Riptide', desc: '(51pt). Heals a friendly target and applies a HoT. Your next Chain Heal consumes the HoT for bonus.', icon: 'spell_shaman_riptide' },
            { type: 'new', name: 'Earth Shield', desc: 'Protects the target with an earthen shield. Heals the target when hit.', icon: 'spell_nature_skinofearth' }
        ]
    },
    warlock: {
        Affliction: [
            { type: 'new', name: 'Haunt', desc: '(51pt). You send a ghostly soul into the target, dealing damage and increasing DoT damage.', icon: 'ability_warlock_haunt' },
            { type: 'new', name: 'Unstable Affliction', desc: 'Shadow energy slowly destroys the target. If dispelled, deals massive damage and silences.', icon: 'spell_shadow_unstableaffliction_3' }
        ],
        Demonology: [
            { type: 'new', name: 'Metamorphosis', desc: '(51pt). You transform into a Demon for 30 sec. Armor increased by 600%, damage increased.', icon: 'spell_shadow_demonform' },
            { type: 'new', name: 'Demonic Pact', desc: 'Your pet\'s criticals grant your party spell power.', icon: 'spell_shadow_demonicpact' }
        ],
        Destruction: [
            { type: 'new', name: 'Chaos Bolt', desc: '(51pt). Sends a bolt of chaotic fire at the enemy. Chaos Bolt cannot be resisted.', icon: 'ability_warlock_chaosbolt' },
            { type: 'new', name: 'Shadowburn', desc: 'Instantly blasts the target for Shadow damage. Only usable when target is below 20% health.', icon: 'spell_shadow_scourgebuild' }
        ]
    },
    warrior: {
        Arms: [
            { type: 'new', name: 'Bladestorm', desc: '(51pt). You become a whirling storm of destructive force, striking all nearby targets.', icon: 'ability_warrior_bladestorm' },
            { type: 'rework', name: 'Taste for Blood', desc: 'Whenever your Rend ability causes damage, your Overpower ability becomes active.', icon: 'ability_rogue_hungerforblood' }
        ],
        Fury: [
            { type: 'new', name: 'Titan\'s Grip', desc: '(51pt). Allows you to equip two-handed axes, maces and swords in one hand.', icon: 'ability_warrior_titansgrip' },
            { type: 'rework', name: 'Raging Blow', desc: 'A mighty blow that deals weapon damage. Only usable while Enraged.', icon: 'ability_hunter_swiftstrike' }
        ],
        Protection: [
            { type: 'new', name: 'Shockwave', desc: '(51pt). Sends a wave of force in a frontal cone, causing damage and stunning all enemy targets.', icon: 'ability_warrior_shockwave' },
            { type: 'new', name: 'Warbringer', desc: 'Your Charge, Intercept and Intervene abilities are now usable while in combat.', icon: 'ability_warrior_warbringer' }
        ]
    }
};
