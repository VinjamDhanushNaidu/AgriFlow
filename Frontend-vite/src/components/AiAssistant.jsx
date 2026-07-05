import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Bot, X, Send, Mic, Image, 
  Paperclip, Sparkles, User, Minimize2, Check, CornerDownLeft 
} from 'lucide-react';

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello Dhanush! 👋 How can I help you with your farm today?\n\nYou can ask me anything about your crops, weather advisories, irrigation planning, or government schemes.',
      time: '12:30 PM'
    }
  ]);
  const [listening, setListening] = useState(false);
  const [fileAttached, setFileAttached] = useState(null);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const suggestedQuestions = [
    'What is the weather forecast?',
    'Should I irrigate my crops today?',
    'Any disease risk in my farm?',
    'Best time to sell my tomatoes?'
  ];

  const responseRegistry = {
    'what is the weather forecast?': 
      "The forecast for Anantapur is partly cloudy, with a temperature of 27°C. There is a high probability of localized light shower (15mm) after 4:00 PM today. Humidity will increase to 82% tonight.",
    'should i irrigate my crops today?': 
      "No irrigation is required today. Soil moisture is optimal at 38% in Tomato Block-B, and light showers are predicted for this evening. Delaying irrigation by one day will save water and prevent root decay.",
    'any disease risk in my farm?': 
      "Disease Risk is currently **Low** (12% blight probability). However, because of the high humidity expected post-rainfall tonight, keep the greenhouse ventilation active to prevent spore germination.",
    'best time to sell my tomatoes?': 
      "Now is a strong window. Market prices for premium tomatoes have increased by 8% to **₹24/kg** in local mandis due to temporary supply shortages. I recommend selling 60% of your harvest now and holding the rest."
  };

  const handleSend = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim() && !fileAttached) return;

    // User Message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text || `Uploaded file: ${fileAttached.name}`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setFileAttached(null);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponseText = "I've analyzed your query. To optimize your crop yields, AgriFlow recommends adjusting your fertilization schedule and monitoring humidity sensors. Let me know if you would like me to compile a details PDF report.";
      
      const normalizedQuery = text.toLowerCase().trim();
      const matched = Object.keys(responseRegistry).find(key => normalizedQuery.includes(key) || key.includes(normalizedQuery));
      if (matched) {
        botResponseText = responseRegistry[matched];
      } else if (fileAttached) {
        botResponseText = `Successfully analyzed crop scan: **"${fileAttached.name}"**. I detected a minor magnesium deficiency in the leaves (confidence 92%). I recommend adding a foliar spray of Epsom salt (15g per liter of water) during your next schedule.`;
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: botResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1200);
  };

  const simulateVoice = () => {
    setListening(true);
    setTimeout(() => {
      setListening(false);
      setInput("Should I irrigate my crops today?");
    }, 2000);
  };

  const simulateFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setFileAttached({
        name: file.name,
        type: type
      });
      setInput(`Scan leaf crop report: ${file.name}`);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 border border-emerald-500/50 cursor-pointer"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-6 z-40 w-[360px] sm:w-[400px] h-[550px] bg-white border border-slate-200/60 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-emerald-600 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                  <Bot className="w-5.5 h-5.5 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold font-outfit leading-none flex items-center gap-1.5">
                    AgriFlow AI Assistant
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-100 flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-all"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div className="flex flex-col max-w-[80%]">
                    <div className={`px-4 py-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-emerald-600 text-white rounded-tr-none' 
                        : 'bg-white border border-slate-200/60 text-slate-700 rounded-tl-none shadow-sm'
                    }`}>
                      {msg.text.split('\n').map((para, i) => (
                        <p key={i} className={i > 0 ? 'mt-2' : ''}>{para}</p>
                      ))}
                    </div>
                    <span className={`text-[9px] text-slate-400 mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-slate-200/60 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              {/* Suggestions (Show only when conversation is short or bot just spoke) */}
              {messages.length === 1 && !isTyping && (
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Suggested Questions</span>
                  <div className="flex flex-col gap-1.5">
                    {suggestedQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSend(q)}
                        className="text-left w-full border border-slate-200 bg-white hover:border-emerald-500/40 hover:bg-emerald-50/20 text-xs font-semibold text-slate-600 hover:text-emerald-700 px-3.5 py-2.5 rounded-xl transition-all duration-150"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Listening overlay if voice active */}
            {listening && (
              <div className="absolute inset-x-0 bottom-16 bg-emerald-600/95 backdrop-blur-sm p-4 flex flex-col items-center justify-center text-white gap-2 z-10">
                <Mic className="w-8 h-8 text-white animate-bounce" />
                <span className="text-xs font-semibold">Listening to your voice...</span>
                <span className="text-[10px] text-emerald-200">Say: "Should I irrigate my crops?"</span>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-100 bg-white">
              {fileAttached && (
                <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-[10px] font-bold text-slate-700 truncate">{fileAttached.name}</span>
                  </div>
                  <button onClick={() => setFileAttached(null)} className="text-slate-400 hover:text-slate-600">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <div className="flex items-center gap-1">
                {/* File Upload triggers */}
                <label className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors relative">
                  <Image className="w-4 h-4" />
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => simulateFileUpload(e, 'image')} />
                </label>
                
                <label className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors relative">
                  <Paperclip className="w-4 h-4" />
                  <input type="file" accept=".pdf,.csv,.json,.txt" className="hidden" onChange={(e) => simulateFileUpload(e, 'doc')} />
                </label>

                <button 
                  onClick={simulateVoice}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <Mic className="w-4 h-4" />
                </button>

                {/* Input field */}
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs font-semibold text-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-400"
                />

                {/* Send */}
                <button
                  onClick={() => handleSend()}
                  className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
