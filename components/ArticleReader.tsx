import React, { useState } from 'react';
import { Article } from '../types';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
}

const TRADE_VALUES: Record<string, number> = {
  'Kitsune': 10.0,
  'Tiger': 9.5,
  'Dragon': 9.0,
  'Leopard': 4.0,
  'Dough': 3.5,
  'T-Rex': 2.5,
  'Spirit': 2.0,
  'Venom': 2.0,
  'Mammoth': 1.8,
  'Buddha': 1.0,
  'Portal': 1.0,
  'Blizzard': 0.8,
  'Rumble': 0.8,
  'Sound': 0.7,
  'Shadow': 0.7
};

const TradeChecker: React.FC = () => {
  const [myOffer, setMyOffer] = useState<string[]>([]);
  const [theirOffer, setTheirOffer] = useState<string[]>([]);

  const calculateTotal = (offer: string[]) => offer.reduce((sum, name) => sum + (TRADE_VALUES[name] || 0), 0);

  const myTotal = calculateTotal(myOffer);
  const theirTotal = calculateTotal(theirOffer);
  const diff = theirTotal - myTotal;

  const getResult = () => {
    if (myOffer.length === 0 || theirOffer.length === 0) return { text: 'Add fruits to see results', color: 'text-slate-500' };
    if (diff > 0.5) return { text: 'BIG WIN!', color: 'text-green-400' };
    if (diff > 0.1) return { text: 'Fair Win', color: 'text-green-500' };
    if (diff < -0.5) return { text: 'MASSIVE LOSS!', color: 'text-red-400' };
    if (diff < -0.1) return { text: 'Small Loss', color: 'text-red-500' };
    return { text: 'Fair Trade', color: 'text-indigo-400' };
  };

  const result = getResult();

  const toggleFruit = (offer: string[], setOffer: React.Dispatch<React.SetStateAction<string[]>>, fruit: string) => {
    if (offer.includes(fruit)) {
      setOffer(offer.filter(f => f !== fruit));
    } else if (offer.length < 4) {
      setOffer([...offer, fruit]);
    }
  };

  return (
    <div className="bg-slate-900 border border-indigo-500/20 rounded-3xl p-8 mt-12 mb-12 shadow-2xl">
      <h3 className="text-2xl font-black text-white mb-6 flex items-center">
        <span className="mr-2">⚖️</span> 2026 Trade Checker
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <p className="text-xs font-black uppercase tracking-widest text-slate-500">My Inventory</p>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(TRADE_VALUES).map(fruit => (
              <button
                key={fruit}
                onClick={() => toggleFruit(myOffer, setMyOffer, fruit)}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border ${
                  myOffer.includes(fruit) ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-slate-950 border-white/5 text-slate-400 hover:border-white/20'
                }`}
              >
                {fruit}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-black uppercase tracking-widest text-slate-500">Their Inventory</p>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(TRADE_VALUES).map(fruit => (
              <button
                key={fruit}
                onClick={() => toggleFruit(theirOffer, setTheirOffer, fruit)}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border ${
                  theirOffer.includes(fruit) ? 'bg-purple-600 border-purple-400 text-white' : 'bg-slate-950 border-white/5 text-slate-400 hover:border-white/20'
                }`}
              >
                {fruit}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-4 mb-1">
            <span className="text-slate-500 text-sm font-bold">Offer Value: <span className="text-indigo-400">{myTotal.toFixed(1)}</span></span>
            <span className="text-slate-500 text-sm font-bold">vs</span>
            <span className="text-slate-500 text-sm font-bold">Receiving: <span className="text-purple-400">{theirTotal.toFixed(1)}</span></span>
          </div>
          <p className={`text-3xl font-black ${result.color} tracking-tighter`}>{result.text}</p>
        </div>
        <button 
          onClick={() => { setMyOffer([]); setTheirOffer([]); }}
          className="text-xs font-black text-slate-600 hover:text-white transition-colors"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

const ArticleReader: React.FC<ArticleReaderProps> = ({ article, onBack }) => {
  if (!article.content) return <div className="text-white p-10">Article content coming soon!</div>;

  const lines = article.content.split('\n');

  const handleVisitShop = () => {
    window.open('https://www.roblox.com/games/2753915549/Blox-Fruits', '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="mb-8 text-indigo-400 hover:text-indigo-300 flex items-center font-bold text-sm transition-colors group"
      >
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Hub
      </button>

      <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-indigo-500/10 border border-white/5">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
                {article.title}
            </h1>
            <div className="flex items-center space-x-4 text-slate-300">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                        {article.author[0]}
                    </div>
                    <span className="font-semibold text-sm">{article.author}</span>
                </div>
                <span className="text-slate-500 text-xs">•</span>
                <span className="text-sm font-medium">{article.date}</span>
            </div>
        </div>
      </div>

      <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed text-lg">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={idx} className="h-4" />;
          
          // Pattern detection for headers
          const isMainTitle = line.includes('🌊') || line.includes('🥊') || line.includes('⚡') || line.includes('💹');
          const isSectionHeader = /^[🏗️⚔️🐅🎒🚨🤔🤔💰🔓🐯🚀🔥🔴🟣].+/.test(trimmed) || (/^\d\./.test(trimmed) && line.includes('–')) || (/^\d\./.test(trimmed) && trimmed.endsWith('Unlock')) || (/^\d\./.test(trimmed) && trimmed.includes('Professional Trading'));
          const isSubHeader = trimmed.includes('(Lv.') || trimmed.includes('Island') || trimmed.includes('Checklist') || trimmed.endsWith('Verdict)') || trimmed.endsWith('Choice)');
          
          const isSpecialLine = trimmed.startsWith('The Goal:') || 
                               trimmed.startsWith('Pro Tip:') || 
                               trimmed.startsWith('Secret:') || 
                               trimmed.startsWith('The Strategy:') ||
                               trimmed.startsWith('Best Move:') ||
                               trimmed.startsWith('The Go-to Combo:') ||
                               trimmed.startsWith('Why it’s Top') ||
                               trimmed.startsWith('Requirement:') ||
                               trimmed.startsWith('The Secret Lab:') ||
                               trimmed.startsWith('The Chip:') ||
                               trimmed.startsWith('The Key:') ||
                               trimmed.startsWith('The Scientist:') ||
                               trimmed.startsWith('The Quest:') ||
                               trimmed.startsWith('The "Buddha" Rule:') ||
                               trimmed.startsWith('Don\'t "Stockpile" Low Tiers:') ||
                               trimmed.startsWith('Be Patient:') ||
                               trimmed.startsWith('The "Link" Trick:') ||
                               trimmed.startsWith('The "Trust Trade" Trap:') ||
                               trimmed.startsWith('The "Last Second Switch":') ||
                               trimmed.startsWith('How to beat them:') ||
                               trimmed.startsWith('Cost:');

          const isTableLine = trimmed.includes('|');
          const isSenseiWarning = trimmed.startsWith("Sensei's Final Warning:");
          const isSenseiTip = trimmed.startsWith('💡') || trimmed.startsWith('🚀 Which 1 is Good?');

          if (isMainTitle) {
            return (
              <h2 key={idx} className="text-3xl md:text-4xl font-extrabold text-white mt-12 mb-6 border-b border-indigo-500/40 pb-4 tracking-tight text-glow-purple">
                {line}
              </h2>
            );
          }

          if (isSectionHeader) {
            return (
              <h3 key={idx} className="text-2xl md:text-3xl font-black text-yellow-400 mt-14 mb-6 flex items-center gap-3">
                <span className="h-8 w-1 bg-yellow-400 rounded-full hidden md:block"></span>
                {line}
              </h3>
            );
          }

          if (isSubHeader) {
            return (
              <h4 key={idx} className="text-xl md:text-2xl font-bold text-indigo-400 mt-10 mb-4 bg-indigo-500/5 px-4 py-2 rounded-lg inline-block border-l-2 border-indigo-500">
                {line}
              </h4>
            );
          }

          if (isTableLine) {
            const cells = trimmed.split('|').map(c => c.trim());
            const isHeaderRow = cells.some(c => c.toLowerCase() === 'fruit' || c.toLowerCase() === 'move key');
            return (
              <div key={idx} className={`grid grid-cols-${cells.length} gap-4 px-6 py-4 ${isHeaderRow ? 'bg-indigo-600/20 border-y border-white/10' : 'border-b border-white/5 hover:bg-white/5'} transition-all`}>
                {cells.map((cell, cIdx) => (
                  <span key={cIdx} className={`${isHeaderRow ? 'font-black text-xs uppercase text-slate-300' : 'text-sm font-bold text-slate-200'} tracking-tight`}>
                    {cell}
                  </span>
                ))}
              </div>
            );
          }

          if (isSpecialLine) {
              const [label, ...rest] = line.split(':');
              const content = rest.join(':').trim();
              const isBeatThem = label.includes('How to beat them');
              return (
                  <div key={idx} className={`${isBeatThem ? 'bg-green-950/20 border-green-500/30' : 'bg-indigo-950/40 border-indigo-500'} border-l-4 p-5 rounded-r-2xl my-6 backdrop-blur-sm`}>
                      <span className={`font-bold uppercase tracking-widest text-xs block mb-1 ${isBeatThem ? 'text-green-400' : 'text-indigo-300'}`}>{label}</span>
                      <p className="text-slate-200">{content}</p>
                  </div>
              );
          }

          if (isSenseiWarning || isSenseiTip) {
            const isWarning = isSenseiWarning;
            return (
                <div key={idx} className={`${isWarning ? 'bg-red-950/30 border-red-500/30' : 'bg-indigo-950/30 border-indigo-500/30'} border p-8 rounded-3xl mt-16 mb-12 relative overflow-hidden group shadow-2xl`}>
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-700">
                      {isWarning ? '⚠️' : '💡'}
                    </div>
                    <p className={`font-black uppercase tracking-widest text-xs mb-3 flex items-center ${isWarning ? 'text-red-500' : 'text-indigo-400'}`}>
                        <span className={`w-2 h-2 rounded-full mr-2 animate-ping ${isWarning ? 'bg-red-500' : 'bg-indigo-400'}`}></span>
                        {isWarning ? "Sensei's Final Warning" : "Sensei's Choice"}
                    </p>
                    <p className="text-white text-xl md:text-2xl font-bold leading-relaxed italic">
                        {line.replace(isWarning ? "Sensei's Final Warning: " : "💡 ", "").replace("Sensei’s Pro Tip for Your Build", "").replace("Sensei's Recommendation:", "").replace("🚀 Which 1 is Good? (Sensei’s Choice)", "").trim()}
                    </p>
                </div>
            )
          }

          return (
            <p key={idx} className="mb-4 text-slate-400 font-medium">
              {line}
            </p>
          );
        })}
        {article.id === '4' && <TradeChecker />}
      </div>
      
      <div className="mt-20 p-10 rounded-3xl bg-slate-900/50 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center space-x-6">
              <div className="hidden md:flex w-16 h-16 bg-green-500/10 rounded-2xl items-center justify-center text-3xl">🛒</div>
              <div>
                  <h4 className="text-2xl font-black text-white mb-2">Ready to Upgrade?</h4>
                  <p className="text-slate-400">Get the best fruits and items from our verified store. Credit to farhan ai.</p>
              </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button 
                onClick={handleVisitShop}
                className="bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-600/20 w-full md:w-auto flex items-center justify-center space-x-2"
              >
                <span>🛒</span> <span>VISIT SHOP</span>
              </button>
              <button 
                onClick={onBack}
                className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-2xl font-bold transition-all w-full md:w-auto"
              >
                Back to Hub
              </button>
          </div>
      </div>
    </div>
  );
};

export default ArticleReader;