import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ page, subPage, setPage }) => {
    if (page === 'home') return null;

    const formatLabel = (str) => {
        if (!str) return '';
        return str.replace(/-/g, ' ').toUpperCase();
    };

    return (
        <div className="bg-[#0a0a0a] border-b border-[#222] py-2 px-6 sticky top-20 z-[90]">
            <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-hero tracking-widest text-gray-500">
                <button
                    onClick={() => setPage('home')}
                    className="hover:text-white transition-colors flex items-center gap-1"
                >
                    <Home size={12} /> HOME
                </button>

                <ChevronRight size={12} />

                <span className={subPage ? "hover:text-gray-300" : "text-[var(--class-color)]"}>
                    {formatLabel(page)}
                </span>

                {subPage && (
                    <>
                        <ChevronRight size={12} />
                        <span className="text-[var(--class-color)] drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
                            {formatLabel(subPage)}
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default Breadcrumbs;
