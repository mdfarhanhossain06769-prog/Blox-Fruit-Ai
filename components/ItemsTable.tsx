import React from 'react';
import { Fruit, Sword } from '../types';

interface ItemsTableProps {
  type: 'fruit' | 'sword';
  data: (Fruit | Sword)[];
  query: string;
}

const ItemsTable: React.FC<ItemsTableProps> = ({ type, data, query }) => {
  const filtered = data.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.tier.toLowerCase().includes(query.toLowerCase()) ||
    item.rarity.toLowerCase().includes(query.toLowerCase())
  );

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'S+': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/40 shadow-[0_0_10px_rgba(250,204,21,0.2)]';
      case 'S': return 'text-purple-400 bg-purple-400/10 border-purple-400/40';
      case 'A': return 'text-blue-400 bg-blue-400/10 border-blue-400/40';
      case 'B': return 'text-green-400 bg-green-400/10 border-green-400/40';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/40';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Mythical': return 'text-red-400 font-black tracking-tighter uppercase text-[10px]';
      case 'Legendary': return 'text-purple-400 font-bold uppercase text-[10px]';
      case 'Rare': return 'text-blue-400 font-bold uppercase text-[10px]';
      case 'Uncommon': return 'text-green-400 font-bold uppercase text-[10px]';
      default: return 'text-slate-500 font-bold uppercase text-[10px]';
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-2xl backdrop-blur-md">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-slate-950/60 border-b border-white/10">
              <th className="px-6 py-5 font-extrabold text-slate-300 uppercase tracking-widest text-xs">Essential Gear</th>
              <th className="px-6 py-5 font-extrabold text-slate-300 uppercase tracking-widest text-xs text-center">Efficiency</th>
              <th className="px-6 py-5 font-extrabold text-slate-300 uppercase tracking-widest text-xs">Class</th>
              <th className="px-6 py-5 font-extrabold text-slate-300 uppercase tracking-widest text-xs">{type === 'fruit' ? 'Modality' : 'Origin'}</th>
              <th className="px-6 py-5 font-extrabold text-slate-300 uppercase tracking-widest text-xs">{type === 'fruit' ? 'Beli Cost' : 'Main Usage'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filtered.map((item, idx) => (
              <tr 
                key={idx} 
                className={`group hover:bg-white/[0.03] transition-all duration-300 ${item.rarity === 'Mythical' ? 'bg-red-500/[0.02]' : ''}`}
              >
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className={`font-bold text-base tracking-tight ${item.rarity === 'Mythical' ? 'text-red-100' : 'text-white'}`}>
                      {item.name}
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal mt-1 leading-tight max-w-[280px]">
                      {item.description}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <span className={`inline-block w-10 py-1 rounded-lg text-sm font-black border ${getTierColor(item.tier)}`}>
                    {item.tier}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <div className={`flex items-center space-x-1.5 ${item.rarity === 'Mythical' ? 'animate-pulse' : ''}`}>
                    {item.rarity === 'Mythical' && <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_red]"></span>}
                    <span className={getRarityColor(item.rarity)}>
                      {item.rarity}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-slate-400 font-medium">
                    {type === 'fruit' ? (item as Fruit).type : (item as Sword).obtained}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className={`font-mono font-bold text-sm ${type === 'fruit' ? 'text-green-400' : 'text-indigo-400'}`}>
                    {type === 'fruit' ? (item as Fruit).price : (item.tier === 'S+' ? 'PvP Dominant' : 'PvE Master')}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl mb-4">🏴‍☠️</span>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">No records found in the 2026 Archive</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemsTable;