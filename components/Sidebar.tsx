import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { streamChatResponse } from '../services/gemini';

const Sidebar: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Sup! Blox Fruits Sensei here. Ask me anything about the 2026 Meta, Leveling to 2800, or how to get CDK. I got 30M Bounty, so I know my stuff.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const responseStream = streamChatResponse([...messages, userMsg]);
      let fullText = '';
      
      // Delay to simulate "thinking" for a better UX
      await new Promise(resolve => setTimeout(resolve, 800));

      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of responseStream) {
        fullText += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullText;
          return newMessages;
        });
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "The Grand Line's connection is lagging. Try again later!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <aside className="w-full lg:w-96 bg-slate-950/80 border-l border-white/10 flex flex-col h-full lg:h-[calc(100vh-64px)] sticky top-[64px] backdrop-blur-xl">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-xl shadow-lg shadow-indigo-500/30 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=farhan" alt="Farhan AI" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-950 rounded-full"></div>
          </div>
          <div>
            <h2 className="font-bold text-sm text-white tracking-tight flex items-center">
              Sensei <span className="text-[9px] text-indigo-400 ml-2 font-black uppercase tracking-widest px-1 bg-indigo-400/10 rounded">Farhan AI</span>
            </h2>
            <div className="flex items-center space-x-1">
              <span className="text-[10px] bg-yellow-400/10 text-yellow-400 px-1 rounded font-bold uppercase border border-yellow-400/20">30M BOUNTY</span>
              <span className="text-[9px] text-slate-500 font-medium italic">100% Loyal</span>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
            <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm ${
              msg.role === 'user' 
                ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-tr-none shadow-lg shadow-indigo-500/10' 
                : 'bg-slate-900/80 text-slate-200 rounded-tl-none border border-white/5 backdrop-blur-sm'
            }`}>
              {msg.text || (isTyping && i === messages.length - 1 ? (
                <div className="flex space-x-1 py-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                </div>
              ) : '')}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-white/10 bg-slate-950/50">
        <div className="relative group">
          <input
            type="text"
            placeholder="Ask Farhan AI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="w-full bg-slate-900 border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="absolute right-2 top-2 w-9 h-9 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 rounded-lg flex items-center justify-center text-white transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            <span className="transform rotate-45 -mt-0.5">✈️</span>
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between">
           <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
              <p className="text-[8px] text-slate-500 uppercase tracking-widest font-extrabold">
                farhan ai system active
              </p>
           </div>
           <p className="text-[8px] text-slate-700 uppercase font-black tracking-widest">
             Credit to farhan
           </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;