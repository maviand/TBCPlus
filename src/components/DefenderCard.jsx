import React from 'react';
import { ArrowRight } from 'lucide-react';

export const formatText = (text) => {
    if (!text) return null;
    const lines = text.split(/\\n|\n/);
    return lines.map((line, lineIndex) => {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        const content = parts.map((part, partIndex) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={partIndex} className="text-[#c29c55] font-bold">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
        return (
            <React.Fragment key={lineIndex}>
                {content}
                {lineIndex < lines.length - 1 && <br />}
            </React.Fragment>
        );
    });
};

const DefenderCard = ({ item, onClick, showLore = true }) => (
    <div
        onClick={() => onClick(item)}
        className="group relative bg-[#0f101a] border border-slate-800 hover:border-[#c29c55]/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col h-full"
    >
        {item.image && (
            <div className="absolute inset-0 z-0">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f101a] via-[#0f101a]/80 to-transparent" />
            </div>
        )}

        <div className="relative z-10 bg-[#1a1c29]/90 backdrop-blur-sm px-5 py-3 border-b border-slate-800 flex justify-between items-center group-hover:bg-[#202230]/95 transition-colors">
            <div className="flex items-center gap-3">
                {item.icon && <item.icon className={`${item.color} transition-transform group-hover:scale-110 duration-300`} size={18} />}
                <span className="text-[#c29c55] font-hero font-normal uppercase tracking-widest group-hover:text-white drop-shadow-md text-xs">{item.name || item.title}</span>
            </div>
            {item.type && (
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded border border-${item.color?.split('-')[1] || 'slate'}-900 bg-black/50 uppercase tracking-wider`}>
                    {item.type}
                </span>
            )}
        </div>

        <div className="relative z-10 p-5 flex-grow flex flex-col">
            <div className="text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-300 transition-colors">
                {!showLore && item.gameplay ? (
                    <div className="space-y-3">
                        {/* Smart Parsing for Tactical Mode */}
                        {item.gameplay.split('\n').map((line, idx) => {
                            if (line.includes('Mob Density:')) {
                                const density = line.split(':')[1].trim();
                                const fill = density === 'High' ? 'w-3/4 bg-red-500' : density === 'Medium' ? 'w-1/2 bg-yellow-500' : 'w-1/4 bg-green-500';
                                return (
                                    <div key={idx} className="flex flex-col gap-1">
                                        <span className="text-[10px] uppercase text-gray-500 font-bold">Mob Density: {density}</span>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className={`h-full ${fill} shadow-[0_0_10px_currentColor]`} />
                                        </div>
                                    </div>
                                );
                            }
                            if (line.includes('Bosses:')) {
                                const count = parseInt(line.split(':')[1].trim());
                                return (
                                    <div key={idx} className="flex items-center gap-2 text-xs">
                                        <span className="text-gray-500 font-bold uppercase text-[10px]">Boss Threats:</span>
                                        <div className="flex gap-1">
                                            {[...Array(count || 0)].map((_, i) => (
                                                <div key={i} className="w-2 h-2 rounded-full bg-red-900 border border-red-500 shadow-[0_0_5px_red]" />
                                            ))}
                                        </div>
                                    </div>
                                );
                            }
                            if (line.includes('Loot:')) {
                                return (
                                    <div key={idx} className="bg-[#151720] border border-slate-700/50 p-2 rounded text-xs text-[#c29c55]">
                                        <span className="font-bold text-white block mb-1">Expected Rewards:</span>
                                        {line.split(':')[1]}
                                    </div>
                                )
                            }
                            if (line.includes('Tier:')) {
                                return (
                                    <div key={idx} className="flex items-center gap-2">
                                        <span className="px-2 py-0.5 rounded bg-purple-900/30 border border-purple-500 text-purple-400 text-[10px] font-bold uppercase">{line.split(':')[1]} Content</span>
                                    </div>
                                )
                            }
                            // Default Text Line
                            return <div key={idx}>{formatText(line)}</div>;
                        })}
                    </div>
                ) : (
                    // Lore Mode (Standard Text)
                    item.lore ? formatText(item.lore) : formatText(item.content)
                )}
            </div>
            <div className="mt-auto flex justify-end">
                <div className="flex items-center gap-2 text-[#c29c55] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    {showLore ? 'Access Archives' : 'View Tactics'} <ArrowRight size={12} />
                </div>
            </div>
        </div>
    </div>
);

export default DefenderCard;
