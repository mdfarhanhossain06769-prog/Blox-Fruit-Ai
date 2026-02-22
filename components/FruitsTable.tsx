
import React from 'react';
import { FRUITS } from '../constants';

interface FruitsTableProps {
  query: string;
}

const FruitsTable: React.FC<FruitsTableProps> = ({ query }) => {
  const filtered = FRUITS.filter(f => 
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.tier.toLowerCase().includes(query.toLowerCase())
  );

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'S+': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'S': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      case 'A': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'B': return 'text-green-400 bg-green-400/10 border-green-400/30';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/30';
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-white/5 bg-slate-900/30">
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="bg-slate-900/50 border-b border-white/5">
            <th className="px-6 py-4 font-bold text-slate-300">Fruit Name</th>
            <th className="px-6 py-4 font-bold text-slate-300">Tier</th>
            <th className="px-6 py-4 font-bold text-slate-300">Rarity</th>
            <th className="px-6 py-4 font-bold text-slate-300">Type</th>
            <th className="px-6 py-4 font-bold text-slate-300">Dealer Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {filtered.map((fruit, idx) => (
            <tr key={idx} className="hover:bg-white/5 transition-colors">
              <td className="px-6 py-4 font-semibold text-white">{fruit.name}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded text-xs font-bold border ${getTierColor(fruit.tier)}`}>
                  {fruit.tier}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className={`text-xs ${fruit.rarity === 'Mythical' ? 'text-red-400' : 'text-slate-400'}`}>
                  {fruit.rarity}
                </span>
              </td>
              <td className="px-6 py-4 text-slate-400">{fruit.type}</td>
              <td className="px-6 py-4 text-green-400 font-mono">{fruit.price}</td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                No fruits found matching your quest criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FruitsTable;
