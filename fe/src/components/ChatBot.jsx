import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane, FaRobot, FaTimes, FaCommentDots } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Pitch & Pulse Academy! 🎶 How can I help you today?", sender: 'bot' }
  ]);
  
  const scrollRef = useRef(null);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput }),
      });

      if (!response.ok) throw new Error('Server returned an error');

      const data = await response.json();
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: data.reply || "I'm sorry, I couldn't process that.", 
        sender: 'bot' 
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "Connection error. Is the server running?", 
        sender: 'bot' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-1 right-22 md:right-22 z-[100]">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-amber-600 transition-all active:scale-95 z-50 relative"
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="
          /* Mobile: Center Screen */
          fixed inset-0 m-auto w-[90%] h-[500px] 
          /* Desktop: Bottom Right */
          md:absolute md:inset-auto md:bottom-20 md:right-0 md:w-[350px] 
          bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 z-40"
        >
          
          {/* Header */}
          <div className="bg-stone-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-inner">
                <FaRobot size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Pulse Assistant</h4>
                <p className="text-[10px] text-amber-200 uppercase tracking-widest">AI Expert</p>
              </div>
            </div>
            {/* Mobile-only close text/button inside header if desired */}
            <button onClick={() => setIsOpen(false)} className="md:hidden text-stone-400 hover:text-white">
               <FaTimes size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-stone-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-amber-600 text-white rounded-br-none shadow-md' 
                    : 'bg-white text-stone-800 border border-stone-200 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl border border-stone-200 animate-pulse text-stone-400 text-xs">
                  Assistant is typing...
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-stone-100 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about music lessons..."
              className="flex-grow bg-stone-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none transition-all"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className={`p-3 rounded-xl transition-colors ${isLoading ? 'text-stone-300' : 'text-amber-600 hover:bg-amber-50'}`}
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Overlay Background (Optional - darkens page when chat is open) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ChatBot;