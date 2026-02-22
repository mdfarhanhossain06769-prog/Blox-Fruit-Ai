import React, { useState, useEffect } from 'react';
import { STOCK_FRUITS } from '../constants';

const StockTicker: React.FC = () => {
  const [currentStock, setCurrentStock] = useState(STOCK_FRUITS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * STOCK_FRUITS.length);
      setCurrentStock(STOCK_FRUITS[randomIndex]);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-indigo-600 border-b border-indigo-500/30 py-1.5 px-4 overflow-hidden relative shadow-lg z-[70]">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4">
        <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] flex items-center">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 shadow-[0_0_8px_#fbbf24] animate-pulse"></span>
          Stock Alert
        </span>
        <div className="flex items-center space-x-2">
            <span className="text-indigo-100 font-bold text-xs">
              The Dealer has <span className="text-yellow-400 underline decoration-2 underline-offset-4">{currentStock}</span> in stock right now!
            </span>
            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest hidden md:inline">• Ends in 42:15</span>
        </div>
      </div>
    </div>
  );
};

export default StockTicker;