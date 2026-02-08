import React from 'react';
import { Scroll, Map, AlertTriangle, Coins, Users, Skull } from 'lucide-react';
import UnifiedHeader from './UnifiedHeader';
import { formatText } from './DefenderCard';

const DefenderModal = ({ isOpen, onClose, data }) => {
    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity" onClick={onClose} />
            <div className="relative w-full max-w-2xl bg-[#080808] border border-[#444] shadow-[0_0_60px_rgba(194,156,85,0.15)] rounded-lg flex flex-col max-h-[90vh] overflow-hidden" style={{ borderImage: 'linear-gradient(to bottom, #c29c55, #5a4a2d) 1' }}>
                <UnifiedHeader
                    icon={data.type?.includes("Raid") || data.type?.includes("Dungeon") ? Skull : Users}
                    section="Campaign Intel"
                    title={data.name || data.title}
                    onClose={onClose}
                    accentColor="text-[#c29c55]"
                    background={data.image}
                />

                <div className="p-8 overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
                    {/* Basic Lore */}
                    <div className="mb-6">
                        <h4 className="text-[#c29c55] font-serif text-sm mb-3 flex items-center gap-2">
                            <Scroll className="w-4 h-4" /> Briefing
                        </h4>
                        <p className="text-[#aeb6bf] text-sm whitespace-pre-line leading-relaxed">
                            {formatText(data.lore || data.content)}
                        </p>
                    </div>

                    {/* Link to Atlas for Dungeons */}
                    {data.linkToAtlas && (
                        <div className="bg-[#1a1c22] p-4 rounded border border-[#2f2f35] flex items-center gap-4">
                            <Map className="text-[#c29c55]" size={24} />
                            <div>
                                <h4 className="text-[#e0e0e0] font-bold text-sm">Tactical Analysis Required</h4>
                                <p className="text-[#888] text-xs">For detailed boss strategies, loot tables, and map geography, please consult The Atlas.</p>
                            </div>
                        </div>
                    )}

                    {/* Quests */}
                    {data.quests && (
                        <div className="mt-6">
                            <h4 className="text-[#c29c55] font-serif text-sm mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> Objectives
                            </h4>
                            {Array.isArray(data.quests) ? (
                                <div className="space-y-3 pl-2">
                                    {data.quests.map((quest, i) => (
                                        <div key={i} className="flex gap-3 relative">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-[#c29c55]" />
                                                {i !== data.quests.length - 1 && (
                                                    <div className="w-px h-full bg-[#2f2f35] absolute left-[3.5px] top-3" />
                                                )}
                                            </div>
                                            <div>
                                                <h5 className="text-[#e0e0e0] text-sm font-bold">{quest.title}</h5>
                                                <p className="text-[#888] text-xs leading-relaxed">{quest.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-[#e0e0e0] text-sm whitespace-pre-line leading-relaxed pl-4 border-l border-[#2f2f35]">
                                    {formatText(data.quests)}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Vendors */}
                    {data.vendors && (
                        <div className="mt-6">
                            <h4 className="text-[#c29c55] font-serif text-sm mb-3 flex items-center gap-2">
                                <Coins className="w-4 h-4" /> Logistics
                            </h4>
                            {Array.isArray(data.vendors) ? (
                                <div className="grid grid-cols-2 gap-3">
                                    {data.vendors.map((vendor, i) => (
                                        <div key={i} className="bg-[#15171e] p-2 rounded border border-[#2f2f35] flex items-center gap-3 hover:border-[#c29c55]/50 transition-colors">
                                            <div className="w-8 h-8 rounded bg-[#222] flex items-center justify-center border border-[#333]">
                                                {/* Fallback Icon logic could go here, for now just generic */}
                                                <Coins size={14} className="text-[#c29c55]" />
                                            </div>
                                            <div>
                                                <h5 className="text-[#e0e0e0] text-xs font-bold line-clamp-1">{vendor.name}</h5>
                                                <p className="text-[#666] text-[10px] flex gap-2">
                                                    <span>{vendor.type}</span>
                                                    <span className="text-[#c29c55]">{vendor.cost}</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-[#e0e0e0] text-sm whitespace-pre-line leading-relaxed pl-4 border-l border-[#2f2f35]">
                                    {formatText(data.vendors)}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DefenderModal;
