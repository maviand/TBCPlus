import React from 'react';
import { Lock } from 'lucide-react';

const TalentTooltip = ({ talent, treeKey, points, classData }) => {
    if (!talent || !classData || !classData[treeKey]) return null;

    const rank = points[talent.id] || 0;
    const maxPoints = talent.maxPoints || 0;
    const treeData = classData[treeKey];

    // Helper to safely get tree points
    const getTreePoints = (key) => {
        try {
            return classData[key].talents.reduce((acc, t) => acc + (points[t.id] || 0), 0);
        } catch (e) { return 0; }
    };

    // Helper to safely get description
    const getDescription = (r) => {
        try {
            if (typeof talent.description !== 'function') return "Description unavailable";
            const desc = talent.description(r);
            return typeof desc === 'string' ? desc : String(desc);
        } catch (e) {
            return "Description unavailable";
        }
    };

    // Helper to safe get Name
    const safeName = (name) => {
        if (typeof name === 'string') return name;
        return String(name || 'Unknown Talent');
    };

    // Prereq Check
    const prereqTalent = talent.prereq ? treeData.talents.find(t => t.id === talent.prereq) : null;
    const prereqMet = !talent.prereq || (points[talent.prereq] || 0) >= (prereqTalent?.maxPoints || 0);
    const lockedByPoints = getTreePoints(treeKey) < (talent.row || 0) * 5;

    return (
        <div
            style={{
                top: (talent.row || 0) < 5 ? `${((talent.row || 0) * 64) + 80}px` : 'auto',
                bottom: (talent.row || 0) >= 5 ? `${((8 - (talent.row || 0)) * 64) + 80}px` : 'auto',
            }}
            className="absolute left-1/2 -translate-x-1/2 w-[90%] p-3 bg-slate-950/95 border border-white/20 rounded-lg backdrop-blur-md z-50 shadow-2xl transition-all duration-200 pointer-events-none"
        >
            <div className="flex justify-between items-start mb-1">
                <h4 className="font-normal text-amber-400 text-sm">{safeName(talent.name)}</h4>
                <span className="text-[10px] text-gray-500 font-mono bg-black/50 px-1.5 py-0.5 rounded">
                    Rank {rank}/{maxPoints}
                </span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap mb-2">
                {getDescription(rank === 0 ? 1 : rank)}
            </p>

            {rank < maxPoints && (
                <div className="mt-2 pt-2 border-t border-white/10">
                    <p className="text-[10px] uppercase text-green-500 font-bold mb-0.5">Next Rank</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        {getDescription(rank + 1)}
                    </p>
                </div>
            )}

            {/* LOCKED STATE INFO */}
            {!prereqMet && (
                <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                    <Lock size={10} /> Requires {safeName(prereqTalent?.name)}
                </p>
            )}
            {lockedByPoints && (
                <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                    <Lock size={10} /> Requires {(talent.row || 0) * 5} points in {treeData.name || 'Tree'}
                </p>
            )}
        </div>
    );
};

export default TalentTooltip;
