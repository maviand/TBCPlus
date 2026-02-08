import React from 'react';
import { X } from 'lucide-react';

const UnifiedHeader = ({ icon: Icon, section, sub, title, quote, onClose, background }) => (
    <div className={`relative z-50 mb-8 border-b border-[#c29c55]/30 ${onClose ? 'bg-[#0f0f0f]' : 'bg-transparent'} overflow-hidden`}>
        {/* Background Image (User Request) */}
        {background && (
            <div className="absolute inset-0">
                <img src={background} alt="" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
            </div>
        )}

        {/* Background Texture & Gradient */}
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/i9PDsfK.jpeg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        {!background && <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 pointer-events-none"></div>}

        <div className="container mx-auto px-6 py-8 relative">
            {/* Top Row: Icon + Meta + Close */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                    {/* Icon Box */}
                    <div className="w-12 h-12 bg-[#1a1c22] border border-[#c29c55] rounded-md flex items-center justify-center shadow-lg shadow-black/50 shrink-0 overflow-hidden">
                        {typeof Icon === 'string' ? (
                            <img src={Icon} alt="" className="w-full h-full object-cover scale-125" />
                        ) : React.isValidElement(Icon) ? (
                            <div className="text-[#c29c55] flex items-center justify-center w-full h-full">
                                {React.cloneElement(Icon, { className: `${Icon.props.className || ''} w-6 h-6` })}
                            </div>
                        ) : (
                            Icon && <Icon className="text-[#c29c55] w-6 h-6" />
                        )}
                    </div>

                    {/* Section & Sub */}
                    <div className="flex flex-col">
                        <span className="text-[#c29c55] font-hero text-xs uppercase tracking-[0.2em] shadow-black drop-shadow-md">{section}</span>
                        <span className="text-[#5c5c63] text-[9px] font-medium uppercase tracking-widest bg-[#1a1c22] px-2 py-0.5 rounded border border-[#2f2f35] self-start mt-1">
                            {sub}
                        </span>
                    </div>
                </div>

                {/* Close Button (Optional) */}
                {onClose && (
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1a1c22] border border-[#2f2f35] text-[#5c5c63] hover:text-[#c29c55] hover:border-[#c29c55] transition-all duration-300 group"
                    >
                        <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                    </button>
                )}
            </div>

            {/* Title & Quote */}
            <div className="pl-0 md:pl-16 mt-6 md:mt-0">
                <h2 className="font-hero uppercase tracking-widest text-3xl md:text-5xl text-[#c29c55] mb-2 leading-tight drop-shadow-xl">{title}</h2>
                {quote && (
                    <p className="font-body text-[#aeb6bf] text-sm italic max-w-2xl border-l-2 border-[#c29c55]/50 pl-4">
                        "{quote}"
                    </p>
                )}
            </div>
        </div>
    </div>
);

export default UnifiedHeader;
