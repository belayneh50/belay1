import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Bot, Check, Copy, Languages, MessageCircle, Send, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

type ChatMode = 'assistant' | 'translator';

const assistantMessages: Message[] = [
  {
    id: 'welcome-en',
    text: 'Hi, I’m the Alkebulan Assistant. I can help you explore our services or prepare a project inquiry.',
    sender: 'bot',
  },
  {
    id: 'welcome-am',
    text: 'እንኳን ደህና መጡ! ስለ አገልግሎቶቻችን ለማወቅ ወይም ስለ ፕሮጀክትዎ ለመወያየት ልረዳዎት እችላለሁ።',
    sender: 'bot',
  },
];

const translatorMessages: Message[] = [
  {
    id: 'translator-welcome-en',
    text: 'Amharic ↔ English Translator\nType or paste text below. I’ll detect the language and translate it automatically.',
    sender: 'bot',
  },
  {
    id: 'translator-welcome-am',
    text: 'የአማርኛ ↔ እንግሊዝኛ ተርጓሚ\nጽሑፍዎን ከታች ያስገቡ። ቋንቋውን ለይቼ በራስ-ሰር እተረጉማለሁ።',
    sender: 'bot',
  },
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>('assistant');
  const [messages, setMessages] = useState<Message[]>(assistantMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        window.requestAnimationFrame(() => launcherRef.current?.focus());
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const closeChat = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => launcherRef.current?.focus());
  };

  const goToSection = (sectionId: 'services' | 'contact') => {
    closeChat();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const prepareProjectInquiry = () => {
    setInputValue('I would like to discuss a project. ');
    inputRef.current?.focus();
  };

  const changeMode = (nextMode: ChatMode) => {
    if (nextMode === mode || isLoading) return;
    setMode(nextMode);
    setMessages(nextMode === 'assistant' ? assistantMessages : translatorMessages);
    setInputValue('');
    window.requestAnimationFrame(() => inputRef.current?.focus());
  };

  const copyMessage = async (message: Message) => {
    try {
      await navigator.clipboard.writeText(message.text);
      setCopiedMessageId(message.id);
      window.setTimeout(() => setCopiedMessageId(null), 1600);
    } catch (error) {
      console.error('Could not copy translation', error);
    }
  };

  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    const messageText = inputValue.trim();
    if (!messageText || isLoading) return;

    setMessages((previous) => [
      ...previous,
      { id: `user-${Date.now()}`, text: messageText, sender: 'user' },
    ]);
    setInputValue('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { message: messageText, mode },
      });

      const responseText = (data as { text?: string } | null)?.text?.trim();
      if (error || !responseText) throw new Error('Assistant unavailable');

      setMessages((previous) => [
        ...previous,
        { id: `bot-${Date.now()}`, text: responseText, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Chat request failed', error);
      setMessages((previous) => [
        ...previous,
        {
          id: `error-${Date.now()}`,
          text:
            mode === 'translator'
              ? 'Translation is temporarily unavailable. Please try again shortly.'
              : 'I’m temporarily unavailable. You can still use the contact section to reach Belayneh directly.',
          sender: 'bot',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Alkebulan Assistant"
          aria-controls="alkebulan-chat-dialog"
          aria-expanded="false"
          className="fixed bottom-24 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-black shadow-lg shadow-cyan-400/50 transition-all duration-300 hover:scale-105 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:bottom-20 sm:right-6"
        >
          <MessageCircle size={24} aria-hidden="true" />
        </button>
      )}

      {isOpen && (
        <section
          id="alkebulan-chat-dialog"
          role="dialog"
          aria-modal="false"
          aria-labelledby="alkebulan-chat-title"
          className="fixed inset-x-3 bottom-24 z-[60] flex h-[min(34rem,calc(100dvh-8rem))] flex-col overflow-hidden rounded-lg border-2 border-cyan-400 bg-slate-900 shadow-2xl shadow-cyan-400/20 sm:inset-x-auto sm:bottom-20 sm:right-6 sm:h-[32rem] sm:w-96"
          style={{ fontFamily: "Inter, 'Segoe UI', Arial, sans-serif" }}
        >
          <header className="flex items-center justify-between bg-gradient-to-r from-cyan-400 to-cyan-500 px-4 py-3 text-black">
            <div>
              <h2
                id="alkebulan-chat-title"
                className="text-sm font-bold"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                ALKEBULAN ASSISTANT
              </h2>
              <p className="text-xs opacity-75">
                {mode === 'translator' ? 'Amharic ↔ English translation' : 'Ask about services or your project'}
              </p>
            </div>
            <button
              type="button"
              onClick={closeChat}
              aria-label="Close Alkebulan Assistant"
              className="rounded p-1 transition-colors hover:bg-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="grid grid-cols-2 gap-1 border-b border-cyan-400/30 bg-slate-900 p-2" role="tablist" aria-label="Chat mode">
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'assistant'}
              onClick={() => changeMode('assistant')}
              className={`flex items-center justify-center gap-2 rounded px-3 py-2 text-sm font-semibold transition-colors ${
                mode === 'assistant' ? 'bg-cyan-400 text-black' : 'text-cyan-200 hover:bg-slate-800'
              }`}
            >
              <Bot size={16} aria-hidden="true" /> Assistant
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'translator'}
              onClick={() => changeMode('translator')}
              className={`flex items-center justify-center gap-2 rounded px-3 py-2 text-sm font-semibold transition-colors ${
                mode === 'translator' ? 'bg-cyan-400 text-black' : 'text-cyan-200 hover:bg-slate-800'
              }`}
            >
              <Languages size={16} aria-hidden="true" /> Translator
            </button>
          </div>

          <div
            className="flex-1 space-y-3 overflow-y-auto bg-slate-950 p-4"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-4 py-2 text-sm leading-relaxed ${
                    message.sender === 'user'
                      ? 'rounded-br-none bg-cyan-500 text-black'
                      : 'rounded-bl-none border border-cyan-400/60 bg-slate-800 text-cyan-100'
                  }`}
                >
                  {message.text}
                  {mode === 'translator' && message.sender === 'bot' && !message.id.startsWith('translator-welcome') && (
                    <button
                      type="button"
                      onClick={() => copyMessage(message)}
                      aria-label="Copy translation"
                      className="ml-2 inline-flex rounded p-1 align-middle text-cyan-300 transition-colors hover:bg-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      {copiedMessageId === message.id ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {mode === 'assistant' && messages.length === assistantMessages.length && (
              <div className="grid gap-2 pt-1" aria-label="Suggested actions">
                <button
                  type="button"
                  onClick={() => goToSection('services')}
                  className="flex items-center justify-between rounded border border-cyan-400/50 bg-slate-900 px-3 py-2 text-left text-sm text-cyan-200 transition-colors hover:border-cyan-300 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  Explore services <ArrowRight size={15} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={prepareProjectInquiry}
                  className="flex items-center justify-between rounded border border-cyan-400/50 bg-slate-900 px-3 py-2 text-left text-sm text-cyan-200 transition-colors hover:border-cyan-300 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  Discuss my project <ArrowRight size={15} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => goToSection('contact')}
                  className="flex items-center justify-between rounded border border-cyan-400/50 bg-slate-900 px-3 py-2 text-left text-sm text-cyan-200 transition-colors hover:border-cyan-300 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  Contact Belayneh <ArrowRight size={15} aria-hidden="true" />
                </button>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start" aria-label="Assistant is responding">
                <div className="flex gap-2 rounded-lg rounded-bl-none border border-cyan-400/60 bg-slate-800 px-4 py-3">
                  {[0, 1, 2].map((delay) => (
                    <span
                      key={delay}
                      className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
                      style={{ animationDelay: `${delay * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2 border-t border-cyan-400/30 bg-slate-900 p-3">
            <label htmlFor="alkebulan-chat-input" className="sr-only">Message Alkebulan Assistant</label>
            <input
              ref={inputRef}
              id="alkebulan-chat-input"
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  event.currentTarget.form?.requestSubmit();
                }
              }}
              placeholder={mode === 'translator' ? 'Type Amharic or English text...' : 'Ask about a service or project...'}
              autoComplete="off"
              maxLength={2000}
              disabled={isLoading}
              className="min-w-0 flex-1 rounded border border-cyan-400/50 bg-slate-800 px-3 py-2 text-sm text-cyan-100 placeholder-cyan-600 focus:border-cyan-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              aria-label={mode === 'translator' ? 'Translate text' : 'Send message'}
              className="flex items-center justify-center rounded bg-cyan-400 px-3 py-2 text-black transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-300"
            >
              <Send size={17} aria-hidden="true" />
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default ChatWidget;
