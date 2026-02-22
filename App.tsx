import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ArticleCard from './components/ArticleCard';
import ItemsTable from './components/ItemsTable';
import ArticleReader from './components/ArticleReader';
import { AppView, Article } from './types';
import { ARTICLES, FRUITS, SWORDS, SHOP_LINK } from './constants';

const App: React.FC = () => {
  const [currentView, setView] = useState<AppView>(AppView.Home);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setView(AppView.Article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVisitShop = () => {
    window.open(SHOP_LINK, '_blank');
  };

  const renderContent = () => {
    switch (currentView) {
      case AppView.Article:
        return selectedArticle ? (
          <ArticleReader 
            article={selectedArticle} 
            onBack={() => setView(AppView.Home)} 
          />
        ) : null;
      case AppView.TierList:
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <header className="border-b border-white/10 pb-8">
              <h2 className="text-4xl font-black mb-2 text-white tracking-tighter">2026 FRUIT TIER LIST</h2>
              <p className="text-slate-400 font-medium">Ranked by PvP efficiency, Boss damage, and Grinding speed in the Third Sea.</p>
            </header>
            <ItemsTable type="fruit" data={FRUITS} query={searchQuery} />
          </div>
        );
      case AppView.Swords:
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <header className="border-b border-white/10 pb-8">
              <h2 className="text-4xl font-black mb-2 text-white tracking-tighter">SWORD FORGE CATALOG</h2>
              <p className="text-slate-400 font-medium">Master every blade from the humble Katana to the God-slaying Cursed Dual Katana (CDK).</p>
            </header>
            <ItemsTable type="sword" data={SWORDS} query={searchQuery} />
          </div>
        );
      case AppView.Guide:
        return (
          <div className="max-w-4xl space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section>
              <h2 className="text-5xl font-black mb-8 text-white tracking-tighter bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">THE PATH TO 2800</h2>
              <div className="grid gap-6">
                {[
                  { level: '0 - 700', sea: 'First Sea', desc: 'Prioritize Elemental (Logia) fruits like Light or Ice. Focus on Fountain City grinding.', color: 'border-blue-500/30' },
                  { level: '700 - 1500', sea: 'Second Sea', desc: 'Awaken your fruit at Hot and Cold. Buddha is essential for Law raids and fragments.', color: 'border-purple-500/30' },
                  { level: '1500 - 2800', sea: 'Third Sea', desc: 'Unlock Godhuman and obtain Cursed Dual Katana. The new cap is 2800; reach it at the Sea of Treats.', color: 'border-indigo-500/30' }
                ].map((item, idx) => (
                  <div key={idx} className={`glass-panel p-8 rounded-3xl border ${item.color} group hover:scale-[1.02] transition-transform`}>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl">🌊</span>
                        <span className="text-indigo-400 font-black uppercase text-sm tracking-widest">{item.sea}</span>
                      </div>
                      <span className="text-yellow-400 font-mono font-black text-xl px-4 py-1 bg-yellow-400/5 rounded-full border border-yellow-400/20">LVL {item.level}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      case AppView.Home:
      default:
        return (
          <div className="space-y-16 animate-in fade-in duration-700">
            <header className="relative py-24 rounded-[3rem] overflow-hidden glass-panel border border-indigo-500/20 px-10 flex flex-col items-center text-center">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                 <div className="absolute top-[-40%] left-[-10%] w-[80%] h-[150%] bg-indigo-500 blur-[150px] rounded-full"></div>
                 <div className="absolute bottom-[-40%] right-[-10%] w-[80%] h-[150%] bg-purple-600 blur-[150px] rounded-full"></div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-[0.9]">
                THE ULTIMATE <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.3)]">BLOX HUB</span>
              </h1>
              <p className="text-slate-400 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-10">
                Your tactical command center for the 2026 Blox Fruits meta. 
                <span className="text-white"> Advanced bounty tracking</span>, <span className="text-indigo-400">farhan ai guidance</span>, and the most accurate data for the grind.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setView(AppView.TierList)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-2xl font-black transition-all hover:scale-105 shadow-2xl shadow-indigo-600/30 flex items-center space-x-2"
                >
                  <span>🍎</span> <span>FRUIT META</span>
                </button>
                <button 
                  onClick={() => setView(AppView.Swords)}
                  className="bg-slate-900/80 hover:bg-slate-800 text-white px-10 py-4 rounded-2xl font-black transition-all hover:scale-105 border border-white/10 flex items-center space-x-2"
                >
                  <span>⚔️</span> <span>SWORD FORGE</span>
                </button>
                <button 
                  onClick={handleVisitShop}
                  className="bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-2xl font-black transition-all hover:scale-105 border border-white/10 flex items-center space-x-2 shadow-2xl shadow-green-600/20"
                >
                  <span>🛒</span> <span>VISIT SHOP</span>
                </button>
              </div>
            </header>

            <section>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-black text-white tracking-tight flex items-center">
                  <span className="w-2 h-8 bg-indigo-500 mr-4 rounded-full"></span>
                  Tactical Briefings
                </h2>
                <button className="text-indigo-400 text-sm font-black uppercase tracking-widest hover:text-indigo-300 transition-colors">Archive View →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ARTICLES.map(article => (
                  <ArticleCard 
                    key={article.id} 
                    article={article} 
                    onClick={() => handleArticleClick(article)}
                  />
                ))}
              </div>
            </section>

            <section className="glass-panel p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="z-10">
                  <h3 className="text-4xl font-black mb-6 text-white tracking-tighter">STUCK IN THE THIRD SEA?</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                    Our <span className="text-indigo-400 font-bold">farhan ai</span> is an expert system trained on the deepest secrets of the Grand Line. From mastering Tiger combos to finding the secret Kitsune Island.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {['Raid Optimization', 'Bounty Combo Meta', '2800 Leveling', 'Mythical Trading'].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-slate-200 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => document.querySelector('input[placeholder*="Farhan AI"]')?.scrollIntoView({behavior: 'smooth'})}
                    className="text-indigo-400 font-black uppercase tracking-widest text-xs flex items-center group-hover:translate-x-2 transition-transform"
                  >
                    Start Chatting with Farhan AI <span className="ml-2">→</span>
                  </button>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="bg-slate-950 border border-white/10 rounded-3xl p-2 aspect-video flex items-center justify-center relative overflow-hidden shadow-2xl">
                      <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/07/blox-fruits-kitsune-1.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Meta Visual" />
                      <div className="text-center z-10 bg-slate-950/80 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                        <p className="text-indigo-400 font-black mb-1 uppercase tracking-[0.2em] text-[10px]">Neural Sync Active</p>
                        <p className="text-white font-black text-xl">farhan ai system</p>
                      </div>
                    </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar 
        currentView={currentView} 
        setView={setView} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 px-6 py-12 lg:px-16 max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>
        
        <Sidebar />
      </main>

      <footer className="bg-slate-950 border-t border-white/10 py-16 px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start text-slate-500 gap-10">
          <div className="max-w-md">
            <h2 className="text-white font-black text-xl mb-4 tracking-tighter">BLOX HUB <span className="text-indigo-500">2026</span></h2>
            <p className="text-sm leading-relaxed mb-6">The premier independent resource for Blox Fruits players. credit to - farhan ai. Built for the community, by the community. 100% loyal.</p>
            <div className="flex space-x-4">
                <button onClick={handleVisitShop} className="text-xs font-bold uppercase tracking-widest text-green-400 hover:text-white transition-colors border border-green-500/30 px-3 py-1.5 rounded-lg hover:bg-green-500/10">Visit Official Shop</button>
                {['Discord', 'Twitter', 'YouTube'].map(platform => (
                    <a key={platform} href="#" className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-lg hover:bg-white/5">{platform}</a>
                ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">Intelligence</h4>
              <ul className="space-y-3 text-xs font-bold">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Fruit Tier List</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Sword Forge</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Boss Drop Rates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">Mastery</h4>
              <ul className="space-y-3 text-xs font-bold">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Handbook Guide</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Farhan AI Advice</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Trading Manual</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-widest font-black text-slate-700">
           &copy; 2026 BLOX HUB | 100% LOYAL TO FARHAN | CREDIT TO - FARHAN AI
        </div>
      </footer>
    </div>
  );
};

export default App;