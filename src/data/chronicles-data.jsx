import React from 'react';
import {
    Skull, Scroll, Map, Sword, Shield, Crown, Zap, Eye, Ghost, BookOpen, Clock,
    Anchor, Compass, Gem, Flame, Star, Leaf, Heart, Feather, Droplet, Mountain
} from 'lucide-react';

export const chroniclesData = {
    // --- HEROES OF AZEROTH ---
    rexxar: {
        id: 'rexxar',
        group: 'Heroes of Azeroth',
        title: "Rexxar: The Last Guardian",
        quote: "I have hunted alone for a lifetime. But some beasts cannot be brought down by one spear.",
        icon: <Sword className="w-5 h-5" />,
        token: "https://i.imgur.com/B1X2DWg.jpeg",
        image: "https://i.imgur.com/B1X2DWg.jpeg",
        faction: 'Horde',
        color: "text-amber-600",
        audio: true,
        legacy: "In the original Burning Crusade, Rexxar was a static quest giver in Blade's Edge Mountains. He patrolled a small area, gave a few quests to kill ogres, and had a brief, unemotional reunion with his father, Leoroxx, which ended in rejection. He then disappeared from the narrative.",
        plus: "Rexxar is reimaged as the 'Aragorn' of Blade's Edge. He isn't just seeking his father's love; he is trying to save the Mok'Nathal from extinction. The lore emphasizes their ancient pact: they are the Keepers of the Dragon Skulls, the only thing preventing the spirits of the Black Dragonflight from rising again. The 'Gronn Uprising' isn't just a battle; it's a desperate defense of these sacred barrows. Rexxar's duel with Gruul is personal—Gruul killed his wolf, Haratha, years ago. This time, Rexxar doesn't fight alone; he leads a coalition of Ogres, Orcs, and players, proving to Leoroxx that 'Strength alone' is a weakness, and 'Unity' is the only survival.",
        links: [
            { type: "Event", name: "Gronn Uprising", zone: "Blade's Edge" },
            { type: "Quest", name: "The Ghost of Haratha", zone: "Thunderlord Stronghold" },
            { type: "Raid", name: "Gruul's Lair", zone: "Blade's Edge" }
        ]
    },
    khadgar: {
        id: 'khadgar',
        group: 'Heroes of Azeroth',
        title: "Khadgar: The Bridge Between Worlds",
        quote: "I have seen the future in the cracks of the crystals. We are not ready.",
        icon: <BookOpen className="w-5 h-5" />,
        token: "https://i.imgur.com/hXMZfxh.png",
        image: "https://static.wikia.nocookie.net/wowpedia/images/5/53/Khadgar_HS_cropped.jpg/revision/latest?cb=20160416122417",
        faction: 'Alliance',
        color: "text-sky-400",
        audio: true,
        legacy: "Khadgar stood in the center of Shattrath as a generic quest hub NPC. He barely mentioned Medivh or his past, functioning mostly as a tour guide for fresh level 60s.",
        plus: "Khadgar is the burdened successor. He carries Atiesh not as a trophy, but as a curse. He is the only one who can hear Medivh's 'Echoes' across the Twisting Nether. His role is diplomatic but desperate; he is trying to hold the fragile coalition of Shattrath together while secretly decoding his master's final warnings about the Burning Legion. He fears he is becoming Medivh, and his questline involves a trippy journey into his own mind within the Mana-Tombs to purge the 'Sargeras corruption' that lingers in all Guardians.",
        links: [
            { type: "Hub", name: "Shattrath City", zone: "Terokkar Forest" },
            { type: "Dungeon", name: "The Mana-Tombs", zone: "Auchindoun" }
        ]
    },
    saurfang: {
        id: 'saurfang',
        group: 'Heroes of Azeroth',
        title: "Saurfang: The Weight of Honor",
        quote: "I do not eat pork. It reminds me too much of the sound... of breaking ribs.",
        icon: <Shield className="w-5 h-5" />,
        token: "https://i.imgur.com/Qnzbbv9.png",
        image: "https://i.imgur.com/blxQgDI.jpeg",
        faction: 'Horde',
        color: "text-orange-800",
        audio: true,
        legacy: "Varok Saurfang was in Thrallmar/Orgrimmar. Dranosh was a quest giver in Nagrand. Their relationship was underdeveloped.",
        plus: "Varok Saurfang is the conscience of the Horde. We see him struggling with the new 'Fel Orcs'—seeing his old comrades twisted. He isn't just killing them; he is granting them mercy. The questline with Dranosh is a passing of the torch. Varok gives Dranosh his axe, Broxigar's axe, telling him that a weapon is only as good as the heart that wields it. It establishes the bond that makes the Wrathgate cinematic hurt so much more.",
        links: [
            { type: "Event", name: "Legion Assault", zone: "Hellfire Peninsula" },
            { type: "Dungeon", name: "Auchindoun", zone: "Terokkar Forest" }
        ]
    },

    // --- THE ILLIDARI ---
    illidan: {
        id: 'illidan',
        group: 'The Illidari',
        title: "Illidan: The Jailer of Argus",
        quote: "You simply cannot see what I see. A thousand worlds burning... and I am the only bucket of water.",
        icon: <Eye className="w-5 h-5" />,
        token: "https://www.hiveworkshop.com/media/p113-png.136107/full",
        image: "https://i.imgur.com/7dooolU.png",
        faction: 'Neutral',
        color: "text-emerald-500",
        audio: true,
        legacy: "Illidan spent the entire expansion brooding on top of the Black Temple, waiting to be raided. We were told he was the 'Betrayer', but we mainly saw him hoarding water and training orcs.",
        plus: "Illidan is playing a game on a cosmic scale. The 'water' in Zangarmarsh? Not for drinking—it was coolant for the Soul Engines. The 'Fel Orcs'? Biological weapons resistant to Legion corruption. We find encrypted projection crystals where Illidan speaks directly to an imprisoned Sargeras merely to taunt him. He isn't hiding from Kil'jaeden; he is baiting him. The Black Temple is a star-fortress aimed explicitly at the portal to Argus.",
        links: [
            { type: "Raid", name: "Black Temple", zone: "Shadowmoon Valley" },
            { type: "Lore", name: "The Sargerite Keystone", zone: "Startling reveal" }
        ]
    },
    kaelthas: {
        id: 'kaelthas',
        group: 'The Illidari',
        title: "Kael'thas: The Sun King's Gambit",
        quote: "My people have not drowned in their sorrow. They have learned to breathe underwater.",
        icon: <Crown className="w-5 h-5" />,
        token: "https://i.imgur.com/cNDbCnP.jpeg",
        image: "https://i.imgur.com/cNDbCnP.jpeg",
        faction: 'Neutral',
        color: "text-red-500",
        audio: true,
        legacy: "Kael'thas Sunstrider was treated as a cartoon villain. His motivation for serving the Legion was weak, and his 'Setback' speech became a meme.",
        plus: "We reveal the terrifying truth: Kael'thas knew the Legion was unbeatable. His alliance with Kil'jaeden was a Trojan Horse. The Mana Forges were designed to collapse the localized reality of the Twisting Nether *onto* the Legion's fleet. He was willing to sacrifice himself, his people, and all of Outland to deal a crippling blow to the Dark Titan.",
        links: [
            { type: "Raid", name: "The Eye (Tempest Keep)", zone: "Netherstorm" },
            { type: "Raid", name: "Sunwell Plateau", zone: "Quel'Danas" }
        ]
    },
    vashj: {
        id: 'vashj',
        group: 'The Illidari',
        title: "Vashj: The Abyssal Queen",
        quote: "The surface world is a dry husk. The true power lies in the deep.",
        icon: <Droplet className="w-5 h-5" />,
        token: "https://www.hiveworkshop.com/media/p112-png.136106/full",
        image: "https://i.imgur.com/nxNxVuK.png",
        faction: 'Neutral',
        color: "text-blue-500",
        audio: true,
        legacy: "Lady Vashj stole water. That was it. Why? To... control the ecosystem? It felt like a Captain Planet villain plot.",
        plus: "Vashj serves the Old Gods. Specifically, N'Zoth. She plays the role of loyal lieutenant to Illidan, but her Naga are secretly poisoning the fungal giants of Zangarmarsh to rot the roots of the world, creating a pathway for the 'Black Empire' to surface. The drainage of the marsh isn't to create a reservoir; it's to lower the water level enough to expose the 'Titan Vault' beneath.",
        links: [
            { type: "Raid", name: "The Abyssal Maw", zone: "Zangarmarsh" },
            { type: "Raid", name: "Serpentshrine Cavern", zone: "Coilfang Reservoir" }
        ]
    },
    akama: {
        id: 'akama',
        group: 'The Illidari',
        title: "Akama: The Silent Dissent",
        quote: "He promised us the Light. He gave us only shadows.",
        icon: <Ghost className="w-5 h-5" />,
        token: "https://i.imgur.com/JfQMOBm.png",
        image: "https://i.imgur.com/3n8KKb9.png",
        faction: 'Neutral',
        color: "text-gray-400",
        audio: true,
        legacy: "Akama was a passive figure who waited for players to do everything. He skulked around the Black Temple acting sad until the final moment.",
        plus: "This is a story of philosophical divergence. Illidan believes the ends justify the means. Akama believes: 'If we sacrifice our souls, there is nothing left to save.' The 'Undercity of Karabor' reveals Akama's secret project: he is using the stolen light from the Naaru *M'uru* to purify the broken souls of his people, unbeknownst to his master.",
        links: [
            { type: "Dungeon", name: "Undercity of Karabor", zone: "Shadowmoon Valley" },
            { type: "Raid", name: "Black Temple", zone: "Shadowmoon Valley" }
        ]
    },
    teron: {
        id: 'teron',
        group: 'The Illidari',
        title: "Teron Gorefiend: The First Knight",
        quote: "I was the first... you are merely an echo.",
        icon: <Skull className="w-5 h-5" />,
        token: "https://static.wikia.nocookie.net/wowpedia/images/0/09/Teron_Gorefiend_TCG2.jpg/revision/latest?cb=20130723195915",
        image: "https://static.wikia.nocookie.net/wowpedia/images/0/09/Teron_Gorefiend_TCG2.jpg/revision/latest?cb=20130723195915",
        faction: 'Horde',
        color: "text-indigo-400",
        audio: true,
        legacy: "Teron Gorefiend was a cool questline in SMV where we accidentally resurrected him. Then he became a raid boss in Black Temple with a fun mini-game mechanic, but little lore depth.",
        plus: "Teron is the bridge between the Old Horde warlocks and the Scourge. He serves Illidan not out of loyalty, but functionality. He is building the 'Death Knight' program for the Illidari using the spirits of fallen Orcs. He represents cold, industrialized death. His section of the Black Temple is a necromantic laboratory. We learn that *he* taught Arthas (indirectly via Ner'zhul) the art of rune-forging. Killing him feels like destroying the blueprint of the Scourge.",
        links: [
            { type: "Quest", name: "I Was A Lot of Things...", zone: "Shadowmoon Valley" },
            { type: "Raid", name: "Black Temple", zone: "Shadowmoon Valley" }
        ]
    },

    // --- THE BURNING LEGION ---
    kazzak: {
        id: 'kazzak',
        group: 'The Burning Legion',
        title: "Doom Lord Kazzak: The Vanguard",
        quote: "The Legion will conquer all!",
        icon: <Skull className="w-5 h-5" />,
        token: "https://static.wikia.nocookie.net/wowpedia/images/a/ad/Doom_Lord_Kazzak_TCG.jpg/revision/latest?cb=20121228074845",
        image: "https://static.wikia.nocookie.net/wowpedia/images/c/c0/Kazzakthrone.jpg/revision/latest/scale-to-width-down/1000?cb=20201002194437",
        faction: 'Neutral',
        color: "text-green-600",
        audio: true,
        legacy: "Kazzak reopened the Dark Portal and then flew off to Hellfire Peninsula to be a world boss. He yelled a lot but didn't do much commanding.",
        plus: "Kazzak is the Supreme Commander of the Legion's ground forces. He isn't just standing on a hill; he is orchestrating the bombardment of Honor Hold and Thrallmar. The 'Legion Assault' dynamic events in Hellfire are triggered by him. He is a tactical genius, using Fel Reavers as siege engines. His 'Plus' lore reveals he is trying to summon a Pit Lord commander *larger* than Magtheridon, turning the entire peninsula into a summoning circle.",
        links: [
            { type: "Event", name: "Legion Assault", zone: "Hellfire Peninsula" },
            { type: "Raid", name: "Throne of Kil'jaeden", zone: "Hellfire Peninsula" }
        ]
    },
    magtheridon: {
        id: 'magtheridon',
        group: 'The Burning Legion',
        title: "Magtheridon: The Living Battery",
        quote: "My blood... is your strength... ungrateful worms!",
        icon: <Zap className="w-5 h-5" />,
        token: "https://i.imgur.com/R9DX5Qu.png",
        image: "https://i.imgur.com/R9DX5Qu.png",
        faction: 'Neutral',
        color: "text-green-600",
        audio: true,
        legacy: "He was a loot piñata in a basement.",
        plus: "We emphasize the body horror. Magtheridon is the battery powering the entire Fel Orc army. He is kept in a state of constant, agonizing regeneration. Illidan's scientists extract his blood with industrial pumps. The raid fight now includes mechanics where players must physically break the siphon tubes to stop his blood from empowering the adds.",
        links: [
            { type: "Raid", name: "Magtheridon's Lair", zone: "Hellfire Citadel" }
        ]
    },
    council: {
        id: 'council',
        group: 'The Burning Legion',
        title: "The Shadow Council: Industrial Evil",
        quote: "Soul shards... fresh supply.",
        icon: <Skull className="w-5 h-5" />,
        token: "https://i.imgur.com/8phmhr5.jpeg",
        image: "https://i.imgur.com/8phmhr5.jpeg",
        faction: 'Neutral',
        color: "text-purple-900",
        audio: false,
        legacy: "They were generic warlock bad guys in caves.",
        plus: "The Shadow Council are the bureaucrats of Hell. They have turned summoning demons into a factory line. We see them bartering souls like currency. They are the 'Deep State' within the Illidari, undermining Illidan at every turn to prepare for Kil'jaeden's arrival.",
        links: [
            { type: "Dungeon", name: "Undercity of Karabor", zone: "Shadowmoon Valley" }
        ]
    },

    // --- NATIVE POWERS ---
    adal: {
        id: 'adal',
        group: 'Native Powers',
        title: "A'dal: The Tyranny of Light",
        quote: "Calculations complete. The probability of your survival is... irrelevant.",
        icon: <Star className="w-5 h-5" />,
        token: "https://i.imgur.com/qqbbWii.png",
        image: "https://i.imgur.com/a9SeEGG.png",
        faction: 'Neutral',
        color: "text-purple-400",
        audio: true,
        legacy: "The Naaru were presented as purely benevolent wind-chimes.",
        plus: "A'dal is terrifying. He is a being of pure calculation. He sends players to die in the Mechanar not because it is 'good', but because the probability of success increases by 0.4%. We explore the Naaru lifecycle: they *must* become Void Gods to balance the cosmos. A'dal is not our friend; he is our general, and we are expendable ammunition.",
        links: [
            { type: "Hub", name: "Shattrath City", zone: "Terokkar Forest" },
            { type: "Raid", name: "Citadel of the Void", zone: "Netherstorm" }
        ]
    },
    gruul: {
        id: 'gruul',
        group: 'Native Powers',
        title: "Gruul: The God-Slayer",
        quote: "Dragons... tiny bones to pick.",
        icon: <Mountain className="w-5 h-5" />,
        token: "https://i.imgur.com/bl9NXRh.png",
        image: "https://i.imgur.com/6FjPHEj.png",
        faction: 'Neutral',
        color: "text-amber-800",
        audio: true,
        legacy: "He was a big gronn. We killed him. The title was just flavor.",
        plus: "Gruul is an apex predator who hunted Black Dragons to near extinction. We see the ecological impact: Blade's Edge is a graveyard of dragons because of *him*. He is an ancient force of nature, older than the Orcs, resisting the encroaching 'civilization' of the Ogres and the Legion.",
        links: [
            { type: "Raid", name: "Gruul's Lair", zone: "Blade's Edge" }
        ]
    },
    zuljin: {
        id: 'zuljin',
        group: 'Native Powers',
        title: "Zul'jin: The Unconquered",
        quote: "We bury you here. In da earth you stole.",
        icon: <Sword className="w-5 h-5" />,
        token: "https://www.hiveworkshop.com/media/p097-png.136093/full",
        image: "https://static.wikia.nocookie.net/wowpedia/images/7/7d/Zul%27jinWallpaperCrop1.PNG/revision/latest?cb=20071117013555",
        faction: 'Neutral',
        color: "text-emerald-700",
        audio: true,
        legacy: "Zul'jin sat in Zul'Aman and waited to be raided. His hatred for the Blood Elves was clear, but his interaction with the Horde player (who might be an Orc or Troll) was purely hostile.",
        plus: "Zul'jin is fighting a war against colonization. He views the Blood Elves as invaders who stole Troll lands, and the Horde as traitors for allying with them. In TBC+, we get a 'Diplomacy' option for Troll players to try and talk him down—which fails, but reveals his deep sadness. He has bound the spirits of the Loa into his champions not out of malice, but desperation. He is the last King of the Amani, refusing to bow to a world that has already forgotten him.",
        links: [
            { type: "Raid", name: "Zul'Aman", zone: "Ghostlands" },
            { type: "Lore", name: "The Amani Empire", zone: "History" }
        ]
    },
    arakkoa: {
        id: 'arakkoa',
        group: 'Native Powers',
        title: "The Arakkoa: Sun, Shadow, Blood",
        quote: "Shadows gather... the sun burns...",
        icon: <Feather className="w-5 h-5" />,
        token: "https://i.imgur.com/QtECOZq.png",
        image: "https://i.imgur.com/OFYIELX.png",
        faction: 'Neutral',
        color: "text-orange-700",
        audio: false,
        legacy: "The Arakkoa were bird-men who worshipped Terokk. Skettis was a grind spot.",
        plus: "We dive into the eldritch horror of the Arakkoa gods. Sethe, the Dead God, whose blood cursed the land. Anzu, the Raven God, who hid in the shadows to protect his children. Ruhkmar, the Sun God, whose light burns the 'impure'. The new questline involves synthesizing the blood of all three to create a 'Twilight' cure.",
        links: [
            { type: "Event", name: "Arakkoa Ritual", zone: "Terokkar Forest" }
        ]
    },
    ethereals: {
        id: 'ethereals',
        group: 'Native Powers',
        title: "The Brokers: Void Capitalists",
        quote: "Everything has a price. Even your reality.",
        icon: <Gem className="w-5 h-5" />,
        token: "https://wow.zamimg.com/images/wow/icons/large/ability_racial_etherealconnection.jpg",
        image: "https://static.wikia.nocookie.net/wowpedia/images/c/cf/Artificer_Xy%27mox_HS.jpg/revision/latest?cb=20220802183011",
        faction: 'Neutral',
        color: "text-fuchsia-500",
        audio: false,
        legacy: "Ethereals were cool space-mummies who sold illegal goods.",
        plus: "The Ethereals are the only ones who know the truth: The Legion is a distraction. The real threat is the Void Lords. Nexus-Prince Shaffar is reimagined as a desperate refugee trying to buy passage out of this reality before Dimensius returns.",
        links: [
            { type: "Raid", name: "The Rip", zone: "Netherstorm" }
        ]
    },
    dragonmaw: {
        id: 'dragonmaw',
        group: 'Native Powers',
        title: "Dragonmaw: Sins of the Father",
        quote: "Break their will. Ride the sky.",
        icon: <Flame className="w-5 h-5" />,
        token: "https://www.hiveworkshop.com/media/p087-png.136014/full",
        image: "https://i.imgur.com/w1WHOn7.png",
        faction: 'Horde',
        color: "text-red-800",
        audio: false,
        legacy: "The Dragonmaw Orcs were generic bad guys enslaving dragons.",
        plus: "This is horror. Pure and simple. We lean into the lore that the Dragonmaw wielded the 'Demon Soul' artifact. Though destroyed, its residual radiation still twists them. Zuluhed the Whacked isn't just an orc; he is a husk possessed by the echoes of Deathwing's madness.",
        links: [
            { type: "Dungeon", name: "Netherwing Mines", zone: "Shadowmoon Valley" }
        ]
    },

    // --- AGENTS OF TIME ---
    infinite: {
        id: 'infinite',
        group: 'Agents of Time',
        title: "The Infinite: Twisted Hope",
        quote: "We only wish to save you from yourselves.",
        icon: <Clock className="w-5 h-5" />,
        token: "https://i.imgur.com/7oe2dlQ.png",
        image: "https://i.imgur.com/vZwppvB.png",
        faction: 'Neutral',
        color: "text-yellow-600",
        audio: true,
        legacy: "The Infinite Dragonflight appeared in Caverns of Time dungeons with little explanation other than 'we want to change time'.",
        plus: "The Infinite Dragonflight has a specific target: Thrall. They believe that if Thrall never unites the Horde, the Cataclysm never happens. They are trying to kill Medivh to prevent the Dark Portal from opening, sparing Azeroth from the Orcs entirely.",
        links: [
            { type: "Dungeon", name: "The Wardens' Prison", zone: "Caverns of Time" }
        ]
    },
    medivh: {
        id: 'medivh',
        group: 'Agents of Time',
        title: "Medivh: The Echo",
        quote: "The circle must be broken.",
        icon: <BookOpen className="w-5 h-5" />,
        token: "https://www.hiveworkshop.com/media/p072-png.135999/full",
        image: "https://static.wikia.nocookie.net/wowpedia/images/2/27/Medivh_Cropped.jpg/revision/latest?cb=20150615151106",
        faction: 'Alliance',
        audio: true,
        legacy: "Medivh was a chess piece. His presence in Karazhan was purely historical.",
        plus: "Medivh is the ghost in the machine. He foresaw the Legion's return and left 'breadcrumbs' across the timelines. In Karazhan, we find his private journals which predict the arrival of the Naaru and the fall of Illidan. He whispers to Khadgar, guiding his former apprentice to trust the 'untrustworthy'.",
        links: [
            { type: "Raid", name: "Karazhan", zone: "Deadwind Pass" }
        ]
    },

    // --- OTHERS ---
    garrosh: {
        id: 'garrosh',
        group: 'Others',
        title: "Garrosh: The Shadow",
        quote: "My father's blood... is my own.",
        icon: <Sword className="w-5 h-5" />,
        image: "https://i.imgur.com/e12sl6o.jpeg",
        faction: 'Horde',
        color: "text-red-900",
        audio: true,
        legacy: "Garrosh was 'Emo Garrosh' in TBC. He sat by a fire in Garadar and whined about his dad.",
        plus: "We depict the struggle for Garrosh's soul. He is terrified that the 'Blood Haze' is genetic. The 'Twilight of the Mag'har' raid shows a potential future where Garrosh drank the demon blood—and liked it. He fights alongside the players against this 'Void-Garrosh', literally beating the weakness out of himself.",
        links: [
            { type: "Raid", name: "Twilight of the Mag'har", zone: "Nagrand" }
        ]
    },
    maiev: {
        id: 'maiev',
        group: 'Others',
        title: "Maiev: Justice Blinded",
        quote: "There is nowhere to hide.",
        icon: <Compass className="w-5 h-5" />,
        token: "https://www.hiveworkshop.com/media/p103-png.136099/full",
        image: "https://i.imgur.com/35EEUZP.jpeg",
        faction: 'Alliance',
        color: "text-teal-600",
        audio: true,
        legacy: "She showed up at the end of BT to kill steal.",
        plus: "Maiev is a study in obsession. She finds evidence of Illidan's anti-Legion crusade—and destroys it. She cannot accept a world where the Betrayer is the hero. She uses 'Forbidden Watcher Magic', turning the bodies of her fallen sisters into Avatars of Vengeance.",
        links: [
            { type: "Quest", name: "The Long Hunt", zone: "Shadowmoon Valley" }
        ]
    },
    liadrin: {
        id: 'liadrin',
        group: 'Others',
        title: "Liadrin: The Shattered Sun",
        quote: "The Light burns... but it cleanses.",
        icon: <Shield className="w-5 h-5" />,
        token: "https://i.imgur.com/4hMcU7t.jpeg",
        image: "https://static.wikia.nocookie.net/wowpedia/images/8/8c/Liadrin_Hearthstone.jpg/revision/latest/scale-to-width-down/414?cb=20160501001642",
        faction: 'Horde',
        audio: true,
        legacy: "She renounced Kael'thas and joined the Shattered Sun. It happened quickly.",
        plus: "Liadrin's journey is the heart of the Blood Elf redemption. She starts as a zealous believer in Kael'thas's 'methods'. But as she sees the wretchedness of her people in Netherstorm, she breaks. Her conversion to the Naaru isn't easy; she hates herself for 'begging' for the Light again.",
        links: [
            { type: "Raid", name: "Sunwell Plateau", zone: "Quel'Danas" }
        ]
    },
    velen: {
        id: 'velen',
        group: 'Others',
        title: "Velen: The Prophet",
        quote: "Not all who wander are lost... but we are.",
        icon: <Star className="w-5 h-5" />,
        token: "https://wow.zamimg.com/images/wow/icons/large/achievement_leader_prophet_velen.jpg",
        image: "https://i.imgur.com/L6N5iN6.png",
        faction: 'Alliance',
        color: "text-blue-400",
        audio: true,
        legacy: "Velen was invisible in TBC.",
        plus: "Velen is the grandmaster of the chess board. He has seen a billion futures where the Legion wins. TBC is the *one* timeline where they might lose. He manipulates events from the shadows, sending players to help the Mag'har, the Broken, and even the Illidari (indirectly).",
        links: [
            { type: "Hub", name: "The Exodar", zone: "Azuremyst Isle" }
        ]
    },
    mystery: {
        id: 'mystery',
        group: 'Secrets',
        title: "LOCKED RECORD",
        quote: "Unknown signal detected...",
        icon: <Ghost className="w-5 h-5" />,
        color: "text-gray-600",
        audio: false,
        isLocked: true,
        legacy: "Data Corrupted.",
        plus: "You have accessed the terminal of the Dark Titan. The Burning Legion is not the end. The Void Lords watch from the spaces between stars. Sargeras was not trying to destroy Azeroth to kill us; he was trying to kill the World Soul before IT corrupts the universe.",
        links: []
    }
};

