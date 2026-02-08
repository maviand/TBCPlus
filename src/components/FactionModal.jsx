import React, { useState } from 'react';
import { X, Shield, Sword, Crown, Quote } from 'lucide-react';
import { factionMotivations } from '../data/faction-motivations';

const FactionModal = ({ isOpen, onClose, faction }) => {
    if (!isOpen || !faction) return null;

    const data = factionMotivations[faction];
    const isAlliance = faction === 'alliance';

    const renderLeader = (leader, index) => (
        <div key={index} className={`relative group overflow-hidden rounded-lg border ${isAlliance ? 'border-blue-900/50 bg-blue-950/20' : 'border-red-900/50 bg-red-950/20'} hover:border-opacity-100 transition-all duration-300`}>
            {/* Background Image Overlay */}
            <div className="absolute inset-0">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${isAlliance ? 'from-[#0a101d] via-[#0a101d]/80' : 'from-[#1a0a0a] via-[#1a0a0a]/80'} to-transparent`}></div>
            </div>

            <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className={`font-hero text-xl ${isAlliance ? 'text-blue-400' : 'text-red-400'} uppercase font-bold`}>{leader.name}</h3>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">{leader.title}</p>
                        <p className="text-[10px] text-gray-500 mt-1">{leader.race}</p>
                    </div>
                    {isAlliance ? <Shield className="w-5 h-5 text-blue-500/50" /> : <Sword className="w-5 h-5 text-red-500/50" />}
                </div>

                <div className="mt-auto">
                    <div className="mb-4 relative">
                        <Quote className={`absolute -top-3 -left-2 w-6 h-6 ${isAlliance ? 'text-blue-600/20' : 'text-red-600/20'}`} />
                        <p className="font-serif italic text-gray-300 text-sm pl-4 leading-relaxed relative z-10">"{leader.quote}"</p>
                    </div>
                    <p className="text-xs text-gray-500 border-t border-gray-800 pt-3 leading-relaxed">
                        {leader.desc}
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl border ${isAlliance ? 'border-blue-800' : 'border-red-900'} bg-[#0b0d10] shadow-2xl animate-in fade-in zoom-in duration-300`}>

                {/* Header Section */}
                <div className={`relative h-48 overflow-hidden flex items-center justify-center border-b ${isAlliance ? 'border-blue-900/50' : 'border-red-900/50'}`}>
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={isAlliance ? 'https://i.imgur.com/uzonQnu.jpeg' : 'https://i.imgur.com/kSHZtqT.jpeg'}
                            className="w-full h-full object-cover opacity-50"
                            alt={isAlliance ? "The Grand Alliance" : "The Horde"}
                        />
                        <div className={`absolute inset-0 ${isAlliance ? 'bg-blue-900/60' : 'bg-red-900/60'} mix-blend-multiply`}></div>
                    </div>
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="relative z-10 text-center">
                        <div className={`inline-flex p-4 rounded-full border-2 ${isAlliance ? 'border-blue-500 bg-blue-900/30' : 'border-red-500 bg-red-900/30'} mb-4`}>
                            {isAlliance ? <Shield className="w-12 h-12 text-blue-400" /> : <Sword className="w-12 h-12 text-red-400" />}
                        </div>
                        <h2 className={`font-hero text-4xl md:text-5xl font-bold uppercase tracking-[0.2em] ${isAlliance ? 'text-blue-100' : 'text-red-100'}`}>
                            {data.name}
                        </h2>
                        <p className={`font-hero text-sm md:text-lg mt-2 ${isAlliance ? 'text-blue-400' : 'text-red-400'} uppercase tracking-widest`}>
                            {data.motto}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-black/50 rounded-full hover:bg-black/80 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Body Section */}
                <div className="p-8">
                    <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 font-serif text-lg leading-relaxed">
                        {data.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.leaders.map((leader, index) => renderLeader(leader, index))}
                    </div>
                </div>

                {/* Footer Decor */}
                <div className={`h-2 w-full ${isAlliance ? 'bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900' : 'bg-gradient-to-r from-red-900 via-red-500 to-red-900'}`}></div>
            </div>
        </div>
    );
};

export default FactionModal;
