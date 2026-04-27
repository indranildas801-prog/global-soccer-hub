import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Trophy, Play, Info, Home as HomeIcon, Globe, Mail, User, Menu, X, Star, Award, ExternalLink } from 'lucide-react';
import { PLAYERS, LEAGUES, VIDEOS, TABS, TOURNAMENTS } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState<typeof LEAGUES[0] | null>(null);

  // Filter logic
  const filteredPlayers = useMemo(() => 
    PLAYERS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.position.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );
  const filteredLeagues = useMemo(() => 
    LEAGUES.filter(l => l.name.toLowerCase().includes(searchQuery.toLowerCase()) || l.country.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-accent/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Globe className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-extrabold tracking-tighter hidden sm:block">FOOTBALL <span className="text-accent">HUB</span></span>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-1">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setSearchQuery(''); setSelectedLeague(null); }}
                    className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer
                      ${isActive ? 'text-accent after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-4">
              <div className="relative group hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 transition-colors" />
                <input
                  type="text"
                  placeholder={`SEARCH...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 bg-[#151515] border border-white/10 rounded-full text-xs focus:outline-none focus:border-accent transition-all w-48 lg:w-64"
                />
              </div>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-400 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-b border-white/10 bg-[#0a0a0a] overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="SEARCH..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-[#151515] border border-white/10 rounded-lg text-xs focus:outline-none focus:border-accent"
                  />
                </div>
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => { setActiveTab(tab.id); setIsMobileMenuOpen(false); setSearchQuery(''); setSelectedLeague(null); }}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 font-semibold uppercase tracking-widest text-sm transition-colors ${
                        isActive ? 'text-accent bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Area */}
      <main className="pt-20 pb-16 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
          >
            {/* HOME SECTION */}
            {activeTab === 'home' && (
              <div className="space-y-12">
                {/* Marquee */}
                <div className="w-full overflow-hidden whitespace-nowrap bg-accent text-black font-extrabold uppercase py-1 text-xs tracking-[2px] rounded-sm">
                  {/* Using standard marquee tag as requested for simplicity & direct HTML translation */}
                  <marquee scrollamount="8" className="inline-block">
                    FOOTBALL IS THE SPORT WHICH IS BEST SPORT IN THE WORLD • FOOTBALL IS THE SPORT WHICH IS BEST SPORT IN THE WORLD • THE BEAUTIFUL GAME
                  </marquee>
                </div>

                {/* Intro */}
                <section className="max-w-3xl">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
                    The Beautiful <span className="text-accent">Game</span>
                  </h1>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    Football, known globally as soccer, is an intricately woven tapestry of history, passion, and culture that transcends borders. Originating thousands of years ago in ancient games and evolving in 19th-century Britain, it has grown into an unparalleled global phenomenon. Today, it unites billions of fans worldwide, celebrating extraordinary athletic talent, tactical brilliance, and the sheer unpredictability of every match. The sport consistently proves that it is more than just a game—it is a universal language.
                  </p>
                </section>

                {/* Top Players Table */}
                <section>
                  <div className="flex justify-between items-end mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent" />
                      <h2 className="text-xl font-bold uppercase tracking-wider italic">Top 10 Football Players</h2>
                    </div>
                  </div>
                  <div className="overflow-x-auto border border-white/5 rounded-lg glass">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead className="bg-white/5 text-gray-400 uppercase text-[10px] font-bold">
                        <tr className="border-b border-white/5">
                          <th className="px-4 py-3">Name</th>
                          <th className="px-4 py-3 whitespace-nowrap">Position</th>
                          <th className="px-4 py-3">Rating</th>
                          <th className="px-4 py-3">G+A</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {filteredPlayers.length > 0 ? filteredPlayers.map((player, idx) => (
                          <tr key={idx} className="hover:bg-white/[0.02] even:bg-white/[0.02] transition-colors group">
                            <td className="px-4 py-2 font-bold flex items-center gap-3">
                              <span className="text-accent font-mono w-4">{(idx + 1).toString().padStart(2, '0')}</span>
                              <img src={player.image} alt={player.name} className="w-8 h-8 rounded-full object-cover border border-white/10 shrink-0" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(player.name) + '&background=00ff87&color=000&bold=true'; }} />
                              {player.name}
                            </td>
                            <td className="px-4 py-2 text-gray-400">{player.position}</td>
                            <td className="px-4 py-2">{player.rating}</td>
                            <td className="px-4 py-2">{player.stats}</td>
                          </tr>
                        )) : (
                          <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-500">No players found matching "{searchQuery}"</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            )}

            {/* LEAGUES SECTION */}
            {activeTab === 'leagues' && (
              <div className="space-y-8">
                {!selectedLeague ? (
                  <>
                    <div className="max-w-2xl">
                      <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Global <span className="text-accent">Leagues</span></h1>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">Explore the top tiers of professional football from around the globe, each featuring unique styles of play, historic rivalries, and incredible talent.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredLeagues.length > 0 ? filteredLeagues.map((league, i) => (
                        <div 
                          key={i} 
                          onClick={() => setSelectedLeague(league)}
                          className="group glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-accent transition-all duration-300 relative overflow-hidden flex flex-col min-h-[160px] cursor-pointer"
                        >
                          <div className="absolute inset-0 opacity-10 blur-sm z-0">
                            <img src={league.image} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex items-center gap-4 mb-3">
                              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center font-bold text-lg overflow-hidden p-1 shadow-lg border border-white/5 shrink-0">
                                {league.logo ? (
                                  <img src={league.logo} alt={league.name} className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(league.name)}&background=111&color=00ff87&size=64&bold=true`; }} />
                                ) : (
                                  league.name.substring(0, 2).toUpperCase()
                                )}
                              </div>
                              <h3 className="text-xl font-bold leading-tight">{league.name}</h3>
                            </div>
                            <p className="text-[10px] text-gray-400 leading-tight mt-auto line-clamp-2">{league.desc}</p>
                          </div>
                        </div>
                      )) : (
                        <div className="col-span-full py-12 text-center text-gray-500">No leagues found matching "{searchQuery}"</div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <button 
                      onClick={() => setSelectedLeague(null)}
                      className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-accent transition-colors flex items-center gap-2"
                    >
                      ← Back to Leagues
                    </button>
                    
                    <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden relative border border-white/10">
                      <img src={selectedLeague.image} alt={selectedLeague.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-8 md:p-12 flex items-end gap-6 md:gap-8">
                        {selectedLeague.logo && (
                          <div className="hidden sm:flex w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 items-center justify-center shrink-0 shadow-2xl">
                            <img src={selectedLeague.logo} alt={selectedLeague.name} className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedLeague.name)}&background=111&color=00ff87&size=128&bold=true`; }} />
                          </div>
                        )}
                        <div>
                          <div className="inline-block px-3 py-1 bg-accent text-black font-bold text-[10px] items-center gap-2 rounded mb-4 uppercase tracking-widest">
                            {selectedLeague.country}
                          </div>
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black drop-shadow-lg">{selectedLeague.name}</h1>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
                        <div className="glass p-8 rounded-2xl border border-white/10">
                          <h3 className="text-xl font-bold text-white mb-4">League Overview</h3>
                          <p className="mb-4">{selectedLeague.desc}</p>
                          <p>{selectedLeague.history}</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="glass p-6 rounded-2xl border border-white/10">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Key Statistics</h4>
                          <div className="space-y-4 font-mono text-sm">
                            <div className="flex justify-between border-b border-white/5 pb-2">
                              <span className="text-gray-500">Founded</span>
                              <span className="text-white">{selectedLeague.founded}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                              <span className="text-gray-500">Number of Teams</span>
                              <span className="text-white">{selectedLeague.teamsCount}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                              <span className="text-gray-500">Domestic Cup</span>
                              <span className="text-white">Yes</span>
                            </div>
                            <div className="flex justify-between pb-2">
                              <span className="text-gray-500">Format</span>
                              <span className="text-white">Double Round-Robin</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="glass p-6 md:p-8 rounded-2xl border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-accent" />
                        Participating Teams <span className="text-gray-500 text-sm font-normal">({selectedLeague.teams?.length || selectedLeague.teamsCount})</span>
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {selectedLeague.teams?.map((team: string, idx: number) => (
                          <div key={idx} className="bg-white/5 py-3 px-4 rounded-lg flex items-center gap-3 hover:bg-white/10 transition-colors border border-white/5">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-accent shrink-0 text-sm overflow-hidden">
                              <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(team)}&background=${idx % 2 === 0 ? '111' : '222'}&color=fff&size=64&bold=true`} alt={team} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-semibold truncate leading-tight" title={team}>{team}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TOURNAMENTS SECTION */}
            {activeTab === 'tournaments' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="max-w-2xl">
                  <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Elite <span className="text-accent">Tournaments</span></h1>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">The most prestigious competitions where legends are made and dreams are realized.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  {TOURNAMENTS.map((tournament, idx) => (
                    <div key={tournament.id} className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:border-accent/50 transition-colors border border-white/10 flex flex-col">
                      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        {idx % 2 === 0 ? <Globe className="w-32 h-32 md:w-48 md:h-48" /> : <Trophy className="w-32 h-32 md:w-48 md:h-48" />}
                      </div>
                      <div className="relative z-10 flex flex-col h-full">
                        <div className={`inline-block px-3 py-1 text-xs font-bold rounded mb-4 uppercase tracking-widest w-fit ${idx % 2 === 0 ? 'bg-accent text-black' : 'bg-blue-500 text-white'}`}>
                          {tournament.category}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">{tournament.title}</h2>
                        <div className="space-y-4 text-gray-400 text-sm leading-relaxed mt-auto">
                          {tournament.description.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* HIGHLIGHTS SECTION */}
            {activeTab === 'highlights' && (
              <div className="space-y-8">
                <div className="max-w-2xl">
                  <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Video <span className="text-accent">Highlights</span></h1>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">Relive the defining moments, incredible goals, and breathtaking skills that make football the beautiful game.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {VIDEOS.map((video) => (
                    <div key={video.id} className="flex flex-col gap-3 group">
                      <a 
                        href={`https://www.youtube.com/watch?v=${video.ytId}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="aspect-video glass rounded-xl overflow-hidden relative block cursor-pointer"
                      >
                        <img 
                          src={`https://img.youtube.com/vi/${video.ytId}/maxresdefault.jpg`} 
                          alt={video.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://img.youtube.com/vi/${video.ytId}/hqdefault.jpg`; }}
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/10">
                          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center pl-1.5 shadow-[0_0_30px_rgba(0,255,135,0.4)] group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-black" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/80 px-2 flex items-center gap-2 rounded text-[10px] py-1 font-mono text-white tracking-widest uppercase">
                          <ExternalLink className="w-3 h-3 text-accent" /> Watch on YouTube
                        </div>
                      </a>
                      <h4 className="text-sm font-bold uppercase tracking-wider pl-1">{video.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ABOUT SECTION */}
            {activeTab === 'about' && (
              <div className="h-full flex flex-col justify-center items-center text-center py-12">
                <div className="w-24 h-1 bg-accent mb-10"></div>
                <h2 className="text-4xl lg:text-5xl font-black italic uppercase mb-6">Beyond the <span className="text-accent">90 Minutes</span></h2>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed italic px-4 md:px-10 max-w-2xl">
                  "Football is not just a sport; it's a heartbeat that connects millions. It teaches resilience, unity, and the beauty of working together for a common goal. Its global impact is immeasurable, fostering peace and inspiration in every corner of the planet."
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl">
                  <div className="md:text-right md:border-r border-white/10 md:pr-10 border-b md:border-b-0 pb-10 md:pb-0">
                    <h3 className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Created By</h3>
                    <div className="text-xl font-bold">Indranil Official</div>
                    <div className="text-gray-500 text-sm">indranil803@gmail.com</div>
                  </div>
                  <div className="md:text-left md:pl-10">
                    <h3 className="text-accent font-bold uppercase tracking-widest text-xs mb-2">About Me</h3>
                    <p className="text-sm text-gray-400 max-w-[300px] mx-auto md:mx-0">
                      A passionate sports enthusiast and web developer dedicated to bringing the excitement of the pitch to the digital screen. Let's talk football!
                    </p>
                  </div>
                </div>
              </div>
            )}
            
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <footer className="h-12 bg-black flex flex-col sm:flex-row items-center justify-between px-8 text-[10px] text-gray-500 font-mono border-t border-white/5 uppercase tracking-widest">
        <div>&copy; {new Date().getFullYear()} FOOTBALL HUB</div>
        <div className="hidden sm:block">DESIGNED BY INDRANIL OFFICIAL</div>
        <div>STAY IN THE GAME</div>
      </footer>
    </div>
  );
}

