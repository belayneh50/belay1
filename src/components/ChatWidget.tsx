import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Welcome to Alkebulan Web Design! How can we help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
    {
      id: '2',
      text: 'እንኳን ደህና መጡ! በአለከቡላን ድረ ገጽ ዲዛይን እንዴት ያግዝናችሁ ይችላሉ?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { message: inputValue },
      });

      if (error || !data || (data as { text?: string }).text === undefined) {
        throw new Error('Invalid response from AI service');
      }

      const botMessage: Message = {
        id: Date.now().toString(),
        text: (data as { text: string }).text,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Error:', err);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: 'Error connecting to AI. Please try again or contact us directly.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyan-400 hover:bg-cyan-500 text-black rounded-full p-4 shadow-lg shadow-cyan-400/50 transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="w-96 h-96 bg-slate-900 border-2 border-cyan-400 rounded-lg shadow-2xl shadow-cyan-400/20 flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-4 py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm">ALKEBULAN AI</h3>
              <p className="text-xs opacity-75">Online</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-black/20 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-950">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.sender === 'user'
                      ? 'bg-cyan-500 text-black rounded-br-none'
                      : 'bg-slate-800 text-cyan-300 border border-cyan-400 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-cyan-300 px-4 py-2 rounded-lg border border-cyan-400 rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSendMessage}
            className="border-t border-cyan-400/30 p-3 bg-slate-900 flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 bg-slate-800 text-cyan-300 border border-cyan-400/50 rounded px-3 py-2 text-sm placeholder-cyan-600 focus:outline-none focus:border-cyan-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-cyan-400 hover:bg-cyan-500 disabled:bg-gray-600 text-black rounded px-3 py-2 transition-colors flex items-center justify-center"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
