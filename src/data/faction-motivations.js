export const factionMotivations = {
    alliance: {
        name: "The Grand Alliance",
        motto: "Stand as One",
        description: "Bound by duty and honor, the Alliance ventures through the Dark Portal not for conquest, but to end the burning crusade that threatens their existence.",
        leaders: [
            {
                name: "High King Varian Wrynn", // Technically Bolvar is Regent, but Varian is the face. Let's stick to TBC era canon or TBC+ flavor. TBC was Bolvar. But Varian returned later. Let's use Bolvar Fordragon for accuracy to TBC or Varian if TBC+ changes it.
                // User asked for "existing faction leaders". In TBC, Human leader is Bolvar Fordragon (Regent). Varian is missing.
                // However, TBC+ might have Varian back. I will use Bolvar Fordragon as the default TBC leader unless otherwise specified.
                // Wait, user said "All existing faction leaders".
                // I will use the standard TBC leaders: Bolvar, Magni, Tyrande, Mekkatorque.
                name: "Highlord Bolvar Fordragon",
                title: "Regent Lord of Stormwind",
                race: "Human",
                image: "https://i.imgur.com/WfksQpV.jpeg", // Placeholder or specific image if I have one. Reusing generic for now or finding one.
                // I'll use a placeholder for now and the user can update images later if needed.
                quote: "The King is missing, but the kingdom remains. We go to Outland to find the sons of Lothar... and perhaps, our King.",
                desc: "With Varian Wrynn missing, Bolvar bears the weight of the crown. He seeks to reunite with the Expeditionary Force lost beyond the portal years ago."
            },
            {
                name: "King Magni Bronzebeard",
                title: "Lord of Ironforge",
                race: "Dwarf",
                image: "https://i.imgur.com/R3SmEkZ.jpeg",
                quote: "Aye, the dark iron are busy, but deeper secrets lie in that shattered world. The Titans were there. I can feel it in the stone.",
                desc: "Magni is driven by more than war. He believes the origins of the Dwarven race—and the curse of flesh—might find answers in the ruins of Draenor."
            },
            {
                name: "High Priestess Tyrande Whisperwind",
                title: "Leader of the Kaldorei",
                race: "Night Elf",
                image: "https://i.imgur.com/YS1j7xX.jpeg",
                quote: "Illidan... he is out there. A monster, or a savior? I must know the truth of what he has become.",
                desc: "For Tyrande, the mission is personal. She leads the Sentinels to hunt down Illidan Stormrage, the Betrayer, to hold him accountable for his crimes... or save him."
            },
            {
                name: "High Tinker Gelbin Mekkatorque",
                title: "King of Gnomes",
                race: "Gnome",
                image: "https://i.imgur.com/hJNP40m.jpeg",
                quote: "The Exodar! Just imagine the technology! If we can study their crystal-tech, we might retake Gnomeregan!",
                desc: "Gelbin sees Outland not as a threat, but a playground of technology. The Naaru ships and Fel Reavers offer the blueprints he needs to reclaim his home."
            }
        ]
    },
    horde: {
        name: "The New Horde",
        motto: "Strength and Honor",
        description: "Forged in the fires of survival, the Horde enters the portal to rediscover their heritage and ensure no demon ever threatens their freedom again.",
        leaders: [
            {
                name: "Warchief Thrall",
                title: "Son of Durotan",
                race: "Orc",
                image: "https://i.imgur.com/agd7UZj.jpeg",
                quote: "We return not to conquer, but to remember. This is the birthplace of our people... and the graveyard of our shame.",
                desc: "Thrall returns to the ancestral home of the Orcs to meet the Mag'har—the uncorrupted brown orcs—and show his people that they are more than fel-crazed killers."
            },
            {
                name: "Vol'jin",
                title: "Chieftain of the Darkspear",
                race: "Troll",
                image: "https://i.imgur.com/jCHAzlN.jpeg",
                quote: "De spirits be restless. De Amani, de Gurubashi... dey be weak correctly. But in Outland? Something darker stirrin'.",
                desc: "Vol'jin senses a disturbance in the loa. He travels to Outland to confront the Forest Trolls of Zul'Aman and ensure the Darkspear future is secure."
            },
            {
                name: "Cairne Bloodhoof",
                title: "High Chieftain",
                race: "Tauren",
                image: "https://i.imgur.com/66UtpLO.jpeg",
                quote: "The Earthmother is crying. Even across the stars, I can hear the planet screaming. We must heal this broken world.",
                desc: "Cairne seeks to heal the shattered lands of Outland. He believes that by restoring balance to Draenor, he can prevent similar destruction on Azeroth."
            },
            {
                name: "Lady Sylvanas Windrunner",
                title: "The Banshee Queen",
                race: "Undead",
                image: "https://i.imgur.com/tpSlaGM.jpeg",
                quote: "The Legion treats death as a currency. I will show them the true economy of the grave. We will expand our numbers.",
                desc: "Sylvanas has no love for heritage. She goes to secure new weapons, new blights, and perhaps... new Val'kyr to sustain her people."
            }
        ]
    }
};
