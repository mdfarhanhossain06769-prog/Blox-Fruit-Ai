import React from 'react';
import { AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, searchQuery, setSearchQuery }) => {
  return (
    <nav className="sticky top-0 z-[60] glass-panel h-[64px] px-6 flex items-center justify-between border-b border-white/10 shadow-xl shadow-slate-950/20">
      <div className="flex items-center space-x-10">
        <div 
          className="flex items-center space-x-3 cursor-pointer group" 
          onClick={() => setView(AppView.Home)}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
            <span className="text-xl">🏴‍☠️</span>
          </div>
          <h1 className="text-xl font-black tracking-tighter bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:brightness-125 transition-all">
            BLOX HUB <span className="text-[10px] text-indigo-500 font-bold ml-1 opacity-80 uppercase tracking-widest bg-indigo-500/10 px-1 rounded">2026</span>
          </h1>
        </div>

        <div className="hidden lg:flex items-center space-x-2">
          {[
            { id: AppView.Home, label: 'Dashboard', icon: '🏠' },
            { id: AppView.TierList, label: 'Fruit Meta', icon: '🍎' },
            { id: AppView.Swords, label: 'Sword Forge', icon: '⚔️' },
            { id: AppView.Guide, label: 'Leveling 2800', icon: '⚡' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => setView(link.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center space-x-2 border ${
                currentView === link.id 
                  ? 'text-white bg-indigo-600 border-indigo-500 shadow-lg shadow-indigo-500/20' 
                  : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative group hidden sm:block">
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-slate-950/50 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all w-40 md:w-56 focus:w-72 placeholder:text-slate-600"
          />
          <span className="absolute left-3.5 top-2.5 text-slate-600 pointer-events-none text-xs">🔍</span>
        </div>
        
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full border border-white/10 bg-slate-900 flex items-center justify-center text-xs cursor-pointer hover:bg-slate-800 transition-colors">
                🔔
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;