import React from 'react';
import {
    Ghost,
    Gamepad2,
    Shirt,
    Cat,
    Plane,
    Sword,
    Crown,
    Sparkles,
    Palette,
    Anchor,
    Zap,
    Star
} from 'lucide-react';

export const collectionsData = {
    mounts: {
        title: "The Stables",
        icon: <Ghost className="w-5 h-5" />,
        desc: "A showcase of the rare beasts tamed across Outland and Azeroth.",
        mechanics: [
            {
                title: "Mount Breeding",
                desc: "Combine two mounts of the same family to unlock unique color variants. Start a quest chain at the Cenarion Refuge to learn the secrets of beast husbandry."
            },
            {
                title: "Saddle Equipment",
                desc: "Equip your mount with specialized gear: 'Deep-Pockets Saddlebags' (Mobile Bank), 'Fel-Steel Spurs' (+20% Speed), or 'Gravity-Well Shoes' (Water Walking)."
            }
        ],
        categories: [
            {
                id: 'nether',
                name: 'Nether Drakes',
                desc: "The skies of Shadowmoon belong to the Dragonmaw no longer.",
                mounts: [
                    { name: "Veridian Netherwing Drake", source: "Reputation: Exalted", rarity: "Epic" },
                    { name: "Onyx Netherwing Drake", source: "Achievement: Predator of the Skies", rarity: "Legendary" },
                    { name: "Azure Netherwing Drake", source: "Quest: The Soul of the Dragon", rarity: "Epic" }
                ]
            },
            {
                id: 'rays',
                name: 'Nether Rays',
                desc: "Bred by the Skyguard to navigate the treacherous Blade's Edge.",
                mounts: [
                    { name: "Violet Nether Ray", source: "Reputation: Skyguard", rarity: "Rare" },
                    { name: "Silver Nether Ray", source: "Reputation: Skyguard", rarity: "Rare" }
                ]
            },
            {
                id: 'war',
                name: 'War Mounts',
                desc: "Beasts trained solely for the bloodshed of the arena.",
                mounts: [
                    { name: "Vengeful Nether Drake", source: "Arena: Top 0.5%", rarity: "Legendary" },
                    { name: "Amani War Bear", source: "Timed Run: Zul'Aman", rarity: "Epic" }
                ]
            }
        ]
    },
    pets: {
        title: "The Menagerie",
        icon: <Cat className="w-5 h-5" />,
        desc: "Small companions that offer big advantages in the new Pet Battle arenas.",
        mechanics: [
            {
                title: "Pet Synergies",
                desc: "Certain pets now provide minor passive buffs to the player when summoned. (e.g., Cats increase Agility by 1, Wisps increase Spirit by 1)."
            },
            {
                title: "Evolution",
                desc: "Feed your companions 'Primal Treats' found in Heroic Dungeons to evolve them into larger, combat-ready forms for open-world assistance."
            }
        ],
        featured: [
            { name: "Phoenix Hatchling", source: "Magisters' Terrace", type: "Elemental" },
            { name: "Willy", source: "Children's Week", type: "Undead" },
            { name: "Ethereal Soul-Trader", source: "The Ethereal Trade", type: "Humanoid" }
        ]
    },
    toys: {
        title: "The Toybox",
        icon: <Gamepad2 className="w-5 h-5" />,
        desc: "Fun items that no longer consume bag space.",
        mechanics: [
            {
                title: "The Toyring",
                desc: "A new UI added to the character panel used to store novelty items. Items like 'Orb of Deception' and 'Piccolo of the Flaming Fire' are now learned spells."
            }
        ],
        featured: [
            { name: "Flag of Ownership", desc: "Plant a flag on a defeated enemy's corpse." },
            { name: "Super Simian Sphere", desc: "Encalses the caster in a violet barrier." },
            { name: "Ogre Pinata", desc: "Party time!" }
        ]
    },
    wardrobe: {
        title: "The Wardrobe",
        icon: <Shirt className="w-5 h-5" />,
        desc: "Collect the appearance of every item you equip.",
        sets: [
            {
                name: "Tier 6: The Thunderheart",
                class: "Druid",
                preview: "/images/sets/t6_druid.jpg", // Placeholder
                pieces: 8,
                bonus: "Regrowth instant cast."
            },
            {
                name: "Tier 6: The Lightbringer",
                class: "Paladin",
                preview: "/images/sets/t6_paladin.jpg", // Placeholder
                pieces: 8,
                bonus: "Mana cost of Holy Light reduced by 10%."
            },
            {
                name: "Tier 5: Tirisfal Regalia",
                class: "Mage",
                preview: "/images/sets/t5_mage.jpg", // Placeholder
                pieces: 5,
                bonus: "Arcane Blast damage increased by 20%."
            }
        ]
    },
    heirlooms: {
        title: "The Vault",
        icon: <Crown className="w-5 h-5" />,
        desc: "Artifacts bound to your bloodline, growing in power as you do.",
        mechanics: [
            {
                title: "Scaling Tech",
                desc: "Items in this tab can be created by any character on your account. They automatically adjust their stats to the wearer's level (1-70)."
            }
        ],
        items: [
            { name: "Polished Spaulders of Valor", type: "Plate", bonus: "+10% XP" },
            { name: "Champion Herod's Shoulder", type: "Mail", bonus: "+10% XP" },
            { name: "Mystical Coif of Elements", type: "Leather", bonus: "+10% XP" },
            { name: "Tattered Dreadmist Mask", type: "Cloth", bonus: "+10% XP" }
        ]
    }
};
