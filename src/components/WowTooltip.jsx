import React from 'react';

const WowTooltip = ({ item, phaseLabel, bindStatus = "Binds when picked up" }) => {
    if (!item || typeof item !== 'object') return null;

    // Quality Colors (Default to Epic/Purple per request if not specified or for standardization)
    // User requested "Trident" not be legendary, so we default high ilvl to Epic.
    const isLegendary = item.quality === 'legendary';
    const nameColor = isLegendary ? 'text-[#ff8000]' : 'text-[#a335ee]';
    const borderColor = isLegendary ? 'border-[#ff8000]' : 'border-[#a335ee]';

    // Safe stats parsing
    const getStats = () => {
        if (!item.stats) return [];
        if (Array.isArray(item.stats)) return item.stats;
        // Handle "comma separated" or "newline separated"
        if (typeof item.stats === 'string') {
            if (item.stats.includes(',')) return item.stats.split(',').map(s => s.trim());
            return item.stats.split('\n');
        }
        return [];
    };

    const stats = getStats();

    // Normalize effects to array
    let effects = [];
    if (item.effect) effects.push(item.effect); // Legacy field
    if (item.effects && Array.isArray(item.effects)) effects = [...effects, ...item.effects];

    return (
        <div className={`bg-[#07080a]/95 border ${borderColor} rounded p-3 shadow-[0_0_30px_rgba(0,0,0,0.9)] max-w-[320px] w-full font-sans text-xs backdrop-blur-sm z-[10002]`}>
            {/* Name */}
            <h3 className={`font-bold text-[15px] mb-0.5 leading-tight ${nameColor}`}>
                {item.name}
            </h3>

            {/* Item Level */}
            {item.ilvl && <div className="text-[#ffd100] font-bold mb-2">Item Level {item.ilvl}</div>}

            {/* Binding */}
            <div className="text-white mb-0.5">{bindStatus}</div>
            {item.unique && <div className="text-white mb-0.5">Unique{item.unique === 'Equipped' ? '-Equipped' : ''}</div>}

            {/* Slot & Type */}
            {(item.slot || item.type || item.armorType) && (
                <div className="flex justify-between text-white mb-1">
                    <span>{item.slot}</span>
                    <span>{item.type || item.armorType}</span>
                </div>
            )}

            {/* Armor */}
            {item.armor && <div className="text-white mb-0.5">{item.armor} Armor</div>}

            {/* Weapon Stats - Add spacing AFTER this block */}
            {item.damage && (
                <div className="flex justify-between text-white mb-0.5">
                    <span>{item.damage} Damage</span>
                    <span>Speed {item.speed}</span>
                </div>
            )}
            {item.dps && <div className="text-white mb-0.5">({item.dps} damage per second)</div>}

            {/* Divider spacer only if it's a weapon (has damage) */}
            {item.damage && <div className="mb-3"></div>}

            {/* Primary Stats (White) */}
            {stats.map((stat, i) => (
                <div key={`stat-${i}`} className="text-white mb-0.5 leading-tight">
                    {stat.startsWith('+') ? stat : `+ ${stat}`}
                </div>
            ))}

            {/* Durability / Classes etc would go here */}

            {/* Requirements */}
            <div className="text-white mb-3 mt-1">Requires Level 70</div>
            {item.classes && <div className="text-white mb-1">Classes: {item.classes}</div>}

            {/* Sockets */}
            {item.sockets && item.sockets.length > 0 && (
                <div className="mb-2 space-y-1">
                    {item.sockets.map((socketType, i) => {
                        let iconUrl = '';
                        if (socketType.includes('Red')) iconUrl = 'https://i.imgur.com/vhyS9Bz.png';
                        else if (socketType.includes('Yellow')) iconUrl = 'https://i.imgur.com/AMiiZ42.png';
                        else if (socketType.includes('Blue')) iconUrl = 'https://i.imgur.com/tASSMFD.png';
                        else if (socketType.includes('Meta')) iconUrl = 'https://i.imgur.com/hjsdO4S.png';
                        else iconUrl = 'https://i.imgur.com/hPlKMiO.png';

                        return (
                            <div key={i} className="flex items-center gap-2">
                                <img src={iconUrl} alt={socketType} className="w-4 h-4" />
                                <span className="text-gray-500">{socketType}</span>
                            </div>
                        );
                    })}
                    {item.socketBonus && <div className="text-gray-500 mt-1">Socket Bonus: {item.socketBonus}</div>}
                </div>
            )}

            {/* Effects (Green) */}
            {effects.length > 0 && (
                <div className="space-y-1 mb-2">
                    {effects.map((effect, i) => {
                        const cleanEffect = effect.replace(/[""]/g, '"');
                        const isQuote = cleanEffect.startsWith('"');

                        // Determine color
                        let colorClass = 'text-[#1eff00]'; // Green default
                        if (isQuote) colorClass = 'text-[#ffd100] italic'; // Gold Italic for Quotes
                        else if (cleanEffect.includes('Set:')) colorClass = 'text-[#a335ee]'; // Basic handling for set header if needed, though usually part of effects
                        else if (cleanEffect.startsWith('(')) colorClass = 'text-[#ffd100]'; // Gold for Set Bonuses (2) Set: ... usually

                        // Override for specific starts if needed, but 'isQuote' takes precedence

                        return (
                            <div key={i} className={`${colorClass} leading-normal`}>
                                {cleanEffect}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Flavor / Description */}
            {(item.desc || item.description || item.flavor) && (
                <div className="text-[#ffd100] text-[11px] italic leading-tight border-t border-[#444] pt-2 mt-2">
                    "{item.desc || item.description || item.flavor}"
                </div>
            )}
        </div>
    );
};

export default WowTooltip;
