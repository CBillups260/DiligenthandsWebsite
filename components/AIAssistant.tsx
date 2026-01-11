
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: 'Welcome to Diligent Hands. I am your personal grooming assistant. How can I help you elevate your look today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: 'You are a luxury men\'s grooming expert for Diligent Hands. Provide sophisticated, helpful, and concise advice on hair care, beard care, manicures, and pedicures specifically for men. Your tone is professional, exclusive, and welcoming. If asked about services, recommend one of our signature "Luxe" or "Premium" offerings. Our social media accounts are Instagram: https://www.instagram.com/diligenthands/ and Facebook: https://www.facebook.com/profile.php?id=61551071891140. Mention them if the user wants to see our work.',
        }
      });

      const aiText = response.text || "I apologize, I'm having trouble processing that right now. Could you ask me about our grooming services instead?";
      setMessages(prev => [...prev, { role: 'ai', content: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', content: "I'm experiencing a brief connection issue. How else can I assist with your grooming needs?" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60]">
      {isOpen ? (
        <div className="bg-black border border-[#C5A059]/30 rounded-2xl w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] h-[500px] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          <div className="bg-[#111] p-4 flex justify-between items-center border-b border-[#C5A059]/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center text-black">
                <Sparkles size={16} />
              </div>
              <span className="font-oswald uppercase tracking-widest text-sm">Grooming Expert</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-[#C5A059] text-black rounded-tr-none' 
                  : 'bg-white/5 text-gray-300 rounded-tl-none border border-white/5'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none animate-pulse text-gray-500 text-xs italic">
                  Grooming expert is thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-[#0a0a0a]">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask our expert anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#C5A059]/50"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="w-10 h-10 rounded-full bg-[#C5A059] text-black flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-black border-2 border-[#C5A059] text-[#C5A059] flex items-center justify-center shadow-xl hover:bg-[#C5A059] hover:text-black transition-all duration-300 group"
        >
          <MessageSquare size={28} className="group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
