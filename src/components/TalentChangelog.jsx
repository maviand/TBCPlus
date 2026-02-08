import React from 'react';
import { Info, AlertCircle } from 'lucide-react';
import { CHANGELOG_DATA } from '../data/changelog-data';

const TalentChangelog = ({ activeClass, classConfig }) => {
    // 1. Validate Data Source
    if (!CHANGELOG_DATA) return <div className="p-4 text-red-500">Error: Changelog Data Missing</div>;

    // 2. Validate Active Class
    if (!activeClass || !CHANGELOG_DATA[activeClass]) {
        // Safe fallback or return null
        return null;
    }

    // 3. Validate Configuration
    const safeConfig = classConfig || { name: activeClass, crest: '' };

    const entries = Object.entries(CHANGELOG_DATA[activeClass]);
    if (entries.length === 0) return null;

    // Safety helper for images
    const getCrestUrl = () => {
        if (!safeConfig.crest || typeof safeConfig.crest !== 'string') return '';
        try {
            return safeConfig.crest.split('?')[0];
        } catch (e) { return ''; }
    };

    const crestUrl = getCrestUrl();

    return (
        <div className="container mx-auto px-4 pb-12 max-w-4xl">
            <div className="bg-[#121212] border border-white/10 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Info className="w-5 h-5 text-amber-500" />
                        <h3 className="font-hero text-xl text-[#c29c55] uppercase tracking-widest">Class Design Changelog</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white/5 rounded p-4 border border-white/5">
                            <h4 className="font-bold text-gray-400 text-sm mb-2 flex items-center gap-2">
                                {crestUrl && <img src={crestUrl} className="w-5 h-5 rounded" alt="" />}
                                {safeConfig.name || activeClass} Updates
                            </h4>
                            <div className="space-y-6">
                                {entries.map(([specName, changes]) => (
                                    <div key={specName} className="bg-white/5 rounded p-4 border border-white/5">
                                        <h4 className="font-bold text-gray-400 text-sm mb-2 flex items-center gap-2">
                                            {crestUrl && <img src={crestUrl} className="w-5 h-5 rounded" alt="" />}
                                            {specName}
                                        </h4>
                                        <ul className="space-y-3 text-sm text-gray-400">
                                            {Array.isArray(changes) && changes.map((change, idx) => (
                                                <li key={idx || Math.random()} className="flex items-start gap-2">
                                                    <div className="mt-1 min-w-[20px]">
                                                        {change.icon && (
                                                            <img
                                                                src={`https://wow.zamimg.com/images/wow/icons/medium/${change.icon}.jpg`}
                                                                className="w-5 h-5 rounded border border-white/10"
                                                                onError={(e) => e.target.style.display = 'none'}
                                                                alt=""
                                                            />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <span className={`text-xs font-bold uppercase mr-2 px-1.5 py-0.5 rounded border ${change.type === 'new' ? 'border-green-500/30 text-green-400 bg-green-500/10' :
                                                                change.type === 'rework' ? 'border-amber-500/30 text-amber-400 bg-amber-500/10' :
                                                                    'border-blue-500/30 text-blue-400 bg-blue-500/10'
                                                            }`}>
                                                            {change.type || 'Update'}
                                                        </span>
                                                        <span className="text-[#e2e8f0] font-bold mr-1">{change.name}:</span>
                                                        <span className="text-gray-400">{change.desc || ''}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TalentChangelog;
