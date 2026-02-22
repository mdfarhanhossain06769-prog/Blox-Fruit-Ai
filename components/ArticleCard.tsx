
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <div 
      className="group bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all hover:translate-y-[-4px] cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        <span className="absolute bottom-4 left-4 bg-indigo-600/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
          Guide
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
          {article.title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
          {article.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">
              {article.author[0]}
            </div>
            <span className="text-xs text-slate-500 font-medium">{article.author}</span>
          </div>
          <span className="text-xs text-slate-600">{article.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
