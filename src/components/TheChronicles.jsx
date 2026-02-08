import React, { useState } from 'react';
import UnifiedHeader from './UnifiedHeader';
import { chroniclesData } from '../data/chronicles-data';
import { BookOpen, Scroll, ArrowRight, ExternalLink, Search, Disc, Lock, Unlock, AlignLeft, X, Eye, Play, Pause, FileText, Monitor, Crown, Skull, Map, Compass, Clock } from 'lucide-react';

// --- ERROR BOUNDARY COMPONENT ---
class ChapterErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Chronicles Chapter Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="container mx-auto px-4 py-24 text-center">
                    <h2 className="text-red-500 font-hero text-2xl mb-4">Data Corruption Detected</h2>
                    <p className="text-gray-500 mb-8">This chronicle entry is currently unstable.</p>
                    <div className="bg-[#1a0f0f] border border-red-900/30 p-4 rounded text-xs font-mono text-red-400 mb-8 max-w-lg mx-auto overflow-auto">
                        {this.state.error && this.state.error.toString()}
                    </div>
                    <button onClick={this.props.reset} className="px-6 py-2 bg-[#c29c55] text-black font-bold rounded hover:bg-[#a08040]">
                        Return to Library
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

const TheChronicles = ({ setPage }) => {
    const [activeChapter, setActiveChapter] = useState(null); // Default to Library View (null)
    const [searchQuery, setSearchQuery] = useState('');
    const [scholarMode, setScholarMode] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [unlockedSecrets, setUnlockedSecrets] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [perspective, setPerspective] = useState('alliance'); // 'alliance' | 'horde'

    // Parallax Effect
    React.useEffect(() => {
        const handleScroll = () => {
            // Only track if in reader mode
            if (activeChapter) {
                setScrollY(window.scrollY);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeChapter]);

    const chapter = (activeChapter && chroniclesData[activeChapter]) ? chroniclesData[activeChapter] : null;

    // Filter and Group Data
    const filteredEntries = Object.values(chroniclesData).filter(entry => {
        // Faction Filter
        const matchesFaction = !perspective || entry.faction === 'Neutral' || entry.faction === (perspective === 'alliance' ? 'Alliance' : 'Horde') || !entry.faction;

        if (entry.isLocked && !unlockedSecrets) return matchesFaction; // Show locked items if faction matches

        const safeTitle = entry.title ? entry.title.toString().toLowerCase() : '';
        const safeQuote = entry.quote ? entry.quote.toString().toLowerCase() : '';
        const safeQuery = searchQuery ? searchQuery.toLowerCase() : '';

        return matchesFaction && (safeTitle.includes(safeQuery) || safeQuote.includes(safeQuery));
    });

    const groupedEntries = filteredEntries.reduce((acc, entry) => {
        const group = entry.group || 'Others';
        if (!acc[group]) acc[group] = [];
        acc[group].push(entry);
        return acc;
    }, {});


    const handleUnlock = () => setUnlockedSecrets(true);
    const getBgColor = (textClass) => textClass ? textClass.replace('text-', 'bg-').replace('600', '900/20').replace('500', '900/20').replace('400', '900/20') : 'bg-slate-900/20';
    const handleChapterSelect = (id) => {
        setActiveChapter(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`min-h-screen bg-[#050505] text-[#e0e0e0] pb-24 transition-colors duration-700 ${scholarMode ? 'font-serif' : 'font-sans'} selection:bg-[#c29c55] selection:text-black`}>
            <UnifiedHeader
                icon="https://i.imgur.com/0gcuUY9.png"
                section="The Archives"
                sub="Lore & History"
                title="The Chronicles of Outland"
                quote="The timeline has shifted. These are the stories that were lost."
                onClose={() => setPage('home')}
            />

            {/* LIBRARY VIEW (Grid) */}
            {!activeChapter && (
                <div className="container mx-auto px-4 max-w-7xl mt-8 animate-fade-in">

                    {/* DEBUG: Remove before final prod, helps verify data load */}
                    <div className="text-center text-xs text-gray-800 mb-2">
                        Loaded {Object.keys(chroniclesData).length} records.
                    </div>

                    {/* Search & Perspective Toggle */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search the archives..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-[#121212] border border-[#2f2f35] rounded-full py-3 pl-12 pr-6 focus:border-[#c29c55] focus:outline-none text-[#e0e0e0] placeholder-gray-600 shadow-lg"
                            />
                        </div>
                        <div className="flex items-center gap-4 bg-[#121212] p-1 rounded-full border border-[#2f2f35]">
                            <button onClick={() => setPerspective('alliance')} className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${perspective === 'alliance' ? 'bg-blue-900/40 text-blue-400 shadow-inner' : 'text-gray-600 hover:text-gray-400'}`}>Alliance</button>
                            <button onClick={() => setPerspective('horde')} className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${perspective === 'horde' ? 'bg-red-900/40 text-red-400 shadow-inner' : 'text-gray-600 hover:text-gray-400'}`}>Horde</button>
                        </div>
                    </div>

                    {Object.entries(groupedEntries).map(([group, entries]) => (
                        <div key={group} className="mb-16">
                            <h3 className="flex items-center gap-4 text-[#c29c55] font-hero uppercase tracking-widest text-xl mb-8">
                                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c29c55]/50 to-transparent"></span>
                                {group}
                                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c29c55]/50 to-transparent"></span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {entries.map((entry) => (
                                    <div
                                        key={entry.id}
                                        onClick={() => handleChapterSelect(entry.id)}
                                        className={`group relative h-96 rounded-xl overflow-hidden cursor-pointer border border-[#2f2f35] hover:border-[#c29c55] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(194,156,85,0.15)] ${entry.isLocked && !unlockedSecrets ? 'opacity-70 grayscale' : ''}`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

                                        {/* Background Image / Token */}
                                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                            {entry.image ? (
                                                <img src={entry.image} alt={entry.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                            ) : (
                                                <div className={`w-full h-full bg-gradient-to-b from-[#1a1c22] to-[#050505] flex items-center justify-center`}>
                                                    <img src={entry.token} className="w-32 h-32 object-cover rounded-full opacity-50 blur-sm" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                                            <div className="mb-auto transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-[#c29c55] mb-4">
                                                    {entry.icon}
                                                </div>
                                            </div>

                                            <h4 className={`font-hero text-xl leading-tight mb-2 ${entry.isLocked && !unlockedSecrets ? 'text-red-500 font-mono tracking-tighter' : 'text-[#f0e6d2] group-hover:text-[#c29c55] transition-colors'}`}>
                                                {entry.isLocked && !unlockedSecrets ? 'ENCRYPTED RECORD' : entry.title?.split(':')[0]}
                                            </h4>

                                            <p className="text-[#8a7b62] text-xs font-serif italic line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                                {entry.isLocked && !unlockedSecrets ? 'Access denied. Clearance required.' : `"${entry.quote}"`}
                                            </p>

                                            {entry.isLocked && !unlockedSecrets && <Lock className="absolute top-4 right-4 w-5 h-5 text-red-500 opacity-50" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* READER VIEW */}
            {activeChapter && (
                <ChapterErrorBoundary key={activeChapter} reset={() => setActiveChapter(null)}>
                    <div className="relative">
                        {/* Safety Check for Invalid Chapter */}
                        {!chapter ? (
                            <div className="container mx-auto px-4 py-24 text-center">
                                <h2 className="text-red-500 font-hero text-2xl mb-4">Error: Record Not Found</h2>
                                <p className="text-gray-500 mb-8">The requested archive entry could not be retrieved.</p>
                                <button onClick={() => setActiveChapter(null)} className="px-6 py-2 bg-[#c29c55] text-black font-bold rounded hover:bg-[#a08040]">
                                    Return to Library
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* Sticky Sidebar Navigation */}
                                <div className="fixed top-24 left-0 w-12 md:w-16 h-[calc(100vh-6rem)] z-40 flex flex-col items-center py-8 gap-4 pointer-events-none md:pointer-events-auto">
                                    <button onClick={() => setActiveChapter(null)} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1a1c22] border border-[#2f2f35] text-[#c29c55] flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-lg pointer-events-auto" title="Back to Library">
                                        <AlignLeft className="w-4 h-4" />
                                    </button>

                                    {/* Timeline Rail (Mock) */}
                                    <div className="flex-1 w-px bg-gradient-to-b from-[#2f2f35] via-[#c29c55]/50 to-transparent relative hidden md:block">
                                        <div className="absolute top-12 left-1/2 -translate-x-1/2 -ml-4 whitespace-nowrap text-[9px] font-mono text-[#5c5c63] -rotate-90 origin-center">Year 26</div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -ml-4 whitespace-nowrap text-[9px] font-mono text-[#5c5c63] -rotate-90 origin-center">Year 27</div>
                                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 -ml-4 whitespace-nowrap text-[9px] font-mono text-[#5c5c63] -rotate-90 origin-center">Year 28</div>

                                        {/* Scroll Indicator */}
                                        <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#c29c55] shadow-[0_0_10px_#c29c55]" style={{ top: `${Math.min(scrollY / 10, 95)}%` }}></div>
                                    </div>
                                </div>

                                <div className="container mx-auto px-4 max-w-5xl pl-16 md:pl-24">

                                    {/* HERO HEADER */}
                                    <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-12 border border-[#2f2f35] group">
                                        {/* Parallax Image */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out"
                                            style={{
                                                backgroundImage: `url(${chapter.image || chapter.token || 'https://i.imgur.com/7dooolU.png'})`,
                                                transform: `translateY(${scrollY * 0.3}px) scale(1.1)`
                                            }}
                                        ></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>

                                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                                            <div className="flex items-end justify-between">
                                                <div>
                                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur text-[10px] uppercase tracking-widest ${chapter.color} mb-4`}>
                                                        {chapter.icon} {chapter.group}
                                                    </div>
                                                    <h1 className="text-4xl md:text-6xl font-hero text-[#f0e6d2] mb-4 shadow-black drop-shadow-lg leading-tight">
                                                        {chapter.isLocked && !unlockedSecrets ? 'ENCRYPTED' : chapter.title}
                                                    </h1>
                                                    {chapter.quote && !chapter.isLocked && (
                                                        <p className="text-xl md:text-2xl font-serif italic text-[#c29c55] max-w-2xl leading-relaxed">
                                                            "{chapter.quote}"
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Play Button */}
                                                {chapter.audio && !chapter.isLocked && (
                                                    <button
                                                        onClick={() => setIsPlaying(!isPlaying)}
                                                        className="hidden md:flex flex-col items-center gap-2 group/btn"
                                                    >
                                                        <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all ${isPlaying ? 'border-[#c29c55] bg-[#c29c55] text-black' : 'border-white/20 text-white hover:border-white hover:scale-110'}`}>
                                                            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                                                        </div>
                                                        <span className="text-[10px] uppercase tracking-widest text-[#5c5c63] group-hover/btn:text-white transition-colors">Audio Log</span>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* CONTENT GRID */}
                                    {chapter.isLocked && !unlockedSecrets ? (
                                        <div className="bg-[#0a0a0a] border border-red-900/30 rounded-2xl p-16 text-center space-y-6">
                                            <Lock size={64} className="text-red-900/50 mx-auto" />
                                            <h3 className="font-hero text-2xl text-red-500">Clearance Level: OMEGA</h3>
                                            <p className="text-gray-500 max-w-lg mx-auto">This record contains cognito-hazardous information regarding the Void Lords. Access is restricted to Council members.</p>
                                            <button className="px-8 py-3 bg-red-900/20 border border-red-900/50 text-red-400 font-bold uppercase tracking-widest hover:bg-red-900/40 transition-all rounded" onClick={handleUnlock}>
                                                Override Protocol
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                                            {/* PRIMARY TEXT */}
                                            <div className="lg:col-span-8 space-y-12">
                                                <div className="prose prose-invert prose-lg max-w-none">
                                                    <div className="flex items-center gap-4 mb-8">
                                                        <span className="w-12 h-[1px] bg-[#c29c55]"></span>
                                                        <h3 className="text-[#c29c55] font-hero text-lg uppercase tracking-widest m-0">Reforged Canon</h3>
                                                    </div>
                                                    <p className={`leading-loose first-letter:text-5xl first-letter:font-serif first-letter:text-[#c29c55] first-letter:mr-3 first-letter:float-left ${chapter.plus && chapter.plus.includes('Void') ? 'text-gray-300' : 'text-gray-300'}`}>
                                                        {chapter.plus || "Content unavailable."}
                                                    </p>
                                                </div>

                                                {/* Legacy Comparison */}
                                                <div className="bg-[#1a1c22]/50 border border-[#2f2f35] rounded-xl p-8 relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 p-2 opacity-5">
                                                        <Scroll size={120} />
                                                    </div>
                                                    <h4 className="flex items-center gap-2 text-[#5c5c63] font-bold uppercase tracking-widest text-xs mb-4">
                                                        <Clock className="w-4 h-4" /> Original Timeline (Legacy)
                                                    </h4>
                                                    <p className="font-serif italic text-[#8a7b62] leading-relaxed">
                                                        "{chapter.legacy}"
                                                    </p>
                                                </div>
                                            </div>

                                            {/* RIGHT SIDEBAR (Portraits, Links) */}
                                            <div className="lg:col-span-4 space-y-8">

                                                {/* Perspective Toggle (Local) */}
                                                <div className="bg-[#0f0f0f] p-4 rounded-xl border border-[#2f2f35]">
                                                    <h5 className="text-[10px] uppercase text-[#5c5c63] font-bold tracking-widest mb-3">Faction Perspective</h5>
                                                    <div className="flex gap-2">
                                                        <button onClick={() => setPerspective('alliance')} className={`flex-1 py-2 text-xs font-bold uppercase rounded border transition-all ${perspective === 'alliance' ? 'bg-blue-900/20 border-blue-500 text-blue-400' : 'border-transparent text-gray-600 hover:bg-[#1a1c22]'}`}>Alliance</button>
                                                        <button onClick={() => setPerspective('horde')} className={`flex-1 py-2 text-xs font-bold uppercase rounded border transition-all ${perspective === 'horde' ? 'bg-red-900/20 border-red-500 text-red-400' : 'border-transparent text-gray-600 hover:bg-[#1a1c22]'}`}>Horde</button>
                                                    </div>
                                                    <p className="mt-3 text-[10px] text-gray-500 leading-relaxed">
                                                        *Analysis adjusted for {perspective} command protocols. Content may contain bias.*
                                                    </p>
                                                </div>

                                                {/* Links */}
                                                <div>
                                                    <h5 className="text-[10px] uppercase text-[#5c5c63] font-bold tracking-widest mb-4 border-b border-[#2f2f35] pb-2">Related Intel</h5>
                                                    <div className="space-y-3">
                                                        {chapter.links?.map((link, i) => (
                                                            <div key={i} className="group p-3 rounded bg-[#1a1c22] border border-[#2f2f35] hover:border-[#c29c55] cursor-pointer transition-all flex items-center justify-between">
                                                                <div>
                                                                    <div className="text-white font-bold text-xs group-hover:text-[#c29c55]">{link.name}</div>
                                                                    <div className="text-[10px] text-[#5c5c63]">{link.type} • {link.zone}</div>
                                                                </div>
                                                                <ArrowRight className="w-3 h-3 text-[#5c5c63] group-hover:text-[#c29c55] -translate-x-2 group-hover:translate-x-0 transition-transform" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Portrait */}
                                                {chapter.token && (
                                                    <div className="mt-8">
                                                        <img src={chapter.token} alt="Portrait" className="w-full rounded-xl border border-[#2f2f35] shadow-lg grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                                                        <p className="text-center text-[10px] text-[#5c5c63] mt-2 uppercase tracking-widest">Archival Image: {chapter.title?.split(':')[0]}</p>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="mt-24 pt-8 border-t border-[#2f2f35] text-center mb-12">
                                        <p className="text-[#5c5c63] text-xs uppercase tracking-widest">End of Record</p>
                                        <div className="flex justify-center mt-4">
                                            <AlignLeft className="w-4 h-4 text-[#c29c55] opacity-50" />
                                        </div>
                                    </div>

                                </div>
                            </>
                        )}
                    </div>
                </ChapterErrorBoundary>
            )}

            {/* Image Modal (Lightbox) */}
            {showImageModal && chapter?.image && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setShowImageModal(false)}
                >
                    <div className="relative max-w-6xl max-h-[90vh]">
                        <button
                            className="absolute -top-12 right-0 text-white/50 hover:text-white"
                            onClick={() => setShowImageModal(false)}
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={chapter.image}
                            alt={chapter.title}
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-white/10"
                        />
                        <p className="text-center text-white/50 mt-4 font-hero uppercase tracking-widest">{chapter.title}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TheChronicles;
