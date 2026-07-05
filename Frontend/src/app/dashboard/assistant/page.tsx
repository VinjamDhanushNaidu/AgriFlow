"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sprout, Brain, Shield, Layers, Droplet, CloudSun, User, 
  Bot, Heart, Sparkles, Send, Mic, Camera, Upload, 
  MapPin, CheckCircle, HelpCircle, FileText, ArrowRight, 
  Share2, Bookmark, Check, ThumbsUp, ThumbsDown, AlertTriangle, 
  Leaf, TrendingUp, Building, Home, Calendar, Volume2, Scale
} from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text?: string;
  timestamp: string;
  isDiseaseCard?: boolean;
}

export default function AssistantPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Form/Input state
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Chat list state
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 'msg1', 
      sender: 'user', 
      text: 'My tomato leaves have yellow spots.', 
      timestamp: '10:24 AM' 
    },
    { 
      id: 'msg2', 
      sender: 'bot', 
      isDiseaseCard: true, 
      timestamp: '10:25 AM' 
    }
  ]);

  // Handle message send
  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    // Add user message
    const newMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    if (!textToSend) setInputValue('');

    // Trigger AI response simulation
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let reply = "I am checking that for you. Green Valley Farm looks optimal, but I'll monitor the moisture level.";
      
      const lowercaseText = text.toLowerCase();
      if (lowercaseText.includes('water') || lowercaseText.includes('irrigate')) {
        reply = "AI Recommendation: Based on tomorrow's rain forecast, you can delay irrigation by 1 day to prevent overwatering and conserve resources.";
      } else if (lowercaseText.includes('price') || lowercaseText.includes('market')) {
        reply = "Current market trends indicate tomato prices are ₹24/kg, showing a steady 8% increase due to regional demand shifts. I suggest scheduling harvests accordingly.";
      } else if (lowercaseText.includes('disease') || lowercaseText.includes('spots') || lowercaseText.includes('leaf')) {
        reply = "Early Blight has been identified in Block C. I recommend applying copper-based fungicides immediately and pruning lower infected leaves.";
      } else if (lowercaseText.includes('hello') || lowercaseText.includes('hi')) {
        reply = "Good morning! How can I help you manage Green Valley Farm today?";
      }

      setMessages(prev => [...prev, {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1200);
  };

  // Mock Disease scan trigger
  const triggerDiseaseScan = () => {
    toast.info("Disease Detection Scan Initialized...", {
      description: "Upload an image of a leaf to inspect details.",
    });
    fileInputRef.current?.click();
  };

  // File upload change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileName = e.target.files[0].name;
      toast.success(`Image uploaded: ${fileName}`, {
        description: "Processing image with AgriFlow Vision AI Model...",
      });
      
      // Simulate detection response
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: `bot-disease-${Date.now()}`,
          sender: 'bot',
          isDiseaseCard: true,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        toast.success("AI Analysis Complete: Early Blight Detected in leaf sample.");
      }, 1500);
    }
  };

  // Mock Report Generation
  const handleGenerateReport = () => {
    const toastId = toast.loading("Generating full AI Farm Report...", {
      description: "Analyzing soil, yield forecasting, and disease logs...",
    });
    setTimeout(() => {
      toast.dismiss(toastId);
      toast.success("AI Farm Report generated successfully!", {
        description: "Ready to download or print.",
      });
    }, 1800);
  };

  // Mock PDF Export
  const handleExportPDF = () => {
    toast.success("Exporting chatbot insights to PDF...", {
      description: "Document downloaded to your device.",
    });
  };

  // Mock Voice Mode Toggle
  const toggleVoiceMode = () => {
    toast.info("Voice Assistant activated. Speak now...", {
      description: "Listening for your agricultural questions.",
    });
  };

  return (
    <div className="flex flex-col xl:flex-row h-full">
      {/* Hidden file input for disease scan upload */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />

      {/* LEFT PANEL / MAIN CHAT AREA (Spans 75% on large screens) */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 space-y-6 overflow-y-auto">
        
        {/* Row 1: Memory/Profile summary card */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <Brain className="w-5.5 h-5.5" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1 text-slate-800 font-bold text-xs sm:text-sm">
                <span>I remember your farm</span>
              </div>
              
              {/* Variable metrics */}
              <div className="flex flex-wrap items-center gap-3 mt-1.5 text-[10px] sm:text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-500" />
                  Crop: <strong className="text-slate-700">Tomato</strong>
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-500" />
                  Farm Health: <strong className="text-slate-700">94/100</strong>
                </span>
                <span className="flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-emerald-500" />
                  Soil: <strong className="text-slate-700">Black Soil</strong>
                </span>
                <span className="flex items-center gap-1">
                  <Droplet className="w-3.5 h-3.5 text-emerald-500" />
                  Last Irrigation: <strong className="text-slate-700">Yesterday</strong>
                </span>
                <span className="flex items-center gap-1">
                  <CloudSun className="w-3.5 h-3.5 text-emerald-500" />
                  Weather: <strong className="text-slate-700">27°C Partly Cloudy</strong>
                </span>
              </div>
            </div>
          </div>
          <Link href="/dashboard/farm-twin" className="text-xs font-extrabold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-0.5 whitespace-nowrap self-end md:self-center">
            View Full Profile &rarr;
          </Link>
        </div>

        {/* Row 2: Good Morning Waving Robot Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-950 to-slate-950 border border-emerald-800/20 text-white p-6 sm:p-8 flex items-center justify-between min-h-[140px] shadow-sm select-none">
          <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-15" style={{ backgroundImage: "url('/hero.png')" }} />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl -z-0 pointer-events-none" />

          <div className="z-10 space-y-2 text-left max-w-sm sm:max-w-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-outfit leading-tight">
              Good Morning, Dhanush! 👋
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/70 font-medium">
              Ask me anything about your farm. I can diagnose disease, forecast pricing trends, or configure watering timings.
            </p>
          </div>

          {/* Waving Robot Asset */}
          <div className="z-10 w-24 h-24 sm:w-28 sm:h-28 relative flex-shrink-0 hidden sm:block">
            <Image
              src="/farming_robot.png"
              alt="AgriFlow AI Waving Robot Illustration"
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
        </div>

        {/* Row 3: Quick Action Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: 'Should I irrigate today?', icon: Droplet, desc: 'Get irrigation advice', action: () => handleSend("Should I irrigate my farm today?") },
            { label: 'Detect crop disease', icon: Leaf, desc: 'Upload image & detect', action: triggerDiseaseScan },
            { label: 'Market prices', icon: TrendingUp, desc: 'Check latest prices', action: () => handleSend("What are the current tomato market prices?") },
            { label: 'Government schemes', icon: Building, desc: 'Find new schemes', action: () => handleSend("Are there any new government schemes for smart farming?") },
            { label: 'Farm health report', icon: FileText, desc: 'Get AI summary', action: handleGenerateReport },
            { label: 'Water recommendations', icon: Sparkles, desc: 'Smart water usage', action: () => handleSend("Can you provide water management recommendations?") },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <button
                key={idx}
                onClick={card.action}
                className="p-3 bg-white border border-slate-200/50 hover:border-emerald-500/30 rounded-2xl text-left flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 min-h-[100px] cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col mt-3">
                  <span className="text-[11px] font-bold text-slate-800 leading-snug">{card.label}</span>
                  <span className="text-[9px] font-semibold text-slate-400 mt-0.5">{card.desc}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Row 4: Chat messages viewport */}
        <div className="flex-grow space-y-4 pt-4 border-t border-slate-100 flex flex-col">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'user' ? (
                /* USER MESSAGE */
                <div className="flex items-start gap-2.5 max-w-[80%]">
                  <div className="flex flex-col items-end">
                    <div className="bg-emerald-50/80 border border-emerald-100/50 text-slate-800 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tr-none text-left shadow-sm">
                      {msg.text}
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-[9px] font-bold text-slate-400">
                      <span>{msg.timestamp}</span>
                      <Check className="w-3 h-3 text-emerald-500 stroke-[3px]" />
                    </div>
                  </div>
                  {/* User Profile avatar icon */}
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white font-extrabold text-xs shadow-sm flex-shrink-0">
                    D
                  </div>
                </div>
              ) : (
                /* BOT MESSAGE */
                <div className="flex items-start gap-2.5 max-w-[90%]">
                  {/* Robot Profile avatar icon */}
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200/50 flex items-center justify-center text-slate-600 shadow-sm flex-shrink-0">
                    <Bot className="w-4.5 h-4.5" />
                  </div>
                  
                  {msg.isDiseaseCard ? (
                    /* SPECIAL DISEASE DIAGNOSTIC CARD (Early Blight) */
                    <div className="flex flex-col space-y-2 text-left">
                      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg p-5 w-full max-w-[620px]">
                        
                        {/* Title Header */}
                        <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-4">
                          <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                            <Shield className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Disease Detected</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 items-start">
                          {/* Left: Leaf image */}
                          <div className="relative w-36 h-36 rounded-2xl overflow-hidden border border-slate-200 flex-shrink-0 mx-auto sm:mx-0">
                            <Image
                              src="/tomato_leaves_blight.png"
                              alt="Diseased Tomato Leaf Early Blight Analysis"
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Middle/Right: Info & Treatment */}
                          <div className="flex-1 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Possible Disease</span>
                                <span className="text-base font-black text-slate-800 font-outfit mt-0.5">Early Blight</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Confidence</span>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <span className="text-base font-black text-slate-800 font-outfit">96%</span>
                                  <div className="w-5 h-5 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90">
                                      <circle cx="10" cy="10" r="8" className="text-slate-100" strokeWidth="2.5" stroke="currentColor" fill="transparent" />
                                      <circle cx="10" cy="10" r="8" className="text-emerald-500" strokeWidth="2.5" stroke="currentColor" fill="transparent" strokeDasharray={50.2} strokeDashoffset={50.2 * (1 - 0.96)} />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col space-y-2">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recommended Treatment</span>
                              <ul className="space-y-1 text-xs text-slate-600 font-medium">
                                <li className="flex items-center gap-2">
                                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3px] flex-shrink-0" />
                                  Spray Copper Fungicide
                                </li>
                                <li className="flex items-center gap-2">
                                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3px] flex-shrink-0" />
                                  Monitor affected leaves regularly
                                </li>
                                <li className="flex items-center gap-2">
                                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3px] flex-shrink-0" />
                                  Reduce leaf moisture
                                </li>
                                <li className="flex items-center gap-2">
                                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3px] flex-shrink-0" />
                                  Ensure proper air circulation
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Card footer details / actions */}
                        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold text-slate-400">
                          <span>{msg.timestamp}</span>
                          <div className="flex items-center gap-3">
                            <button onClick={() => toast.success("Feedback recorded: Helpful")} className="hover:text-slate-600 transition-colors flex items-center gap-1 cursor-pointer"><ThumbsUp className="w-3.5 h-3.5" /></button>
                            <button onClick={() => toast.success("Feedback recorded: Not Helpful")} className="hover:text-slate-600 transition-colors flex items-center gap-1 cursor-pointer"><ThumbsDown className="w-3.5 h-3.5" /></button>
                            <button onClick={() => toast.success("Saved to bookmarks")} className="hover:text-slate-600 transition-colors flex items-center gap-1 cursor-pointer"><Bookmark className="w-3.5 h-3.5" /></button>
                            <button onClick={() => toast.success("Diagnosis shared")} className="hover:text-slate-600 transition-colors flex items-center gap-1 cursor-pointer"><Share2 className="w-3.5 h-3.5" /></button>
                          </div>
                        </div>

                      </div>

                      {/* Diagnostic Card Action Buttons */}
                      <div className="flex flex-wrap gap-2">
                        <button onClick={handleGenerateReport} className="py-2 px-3 border border-emerald-200 hover:border-emerald-300 text-emerald-700 bg-emerald-50/50 hover:bg-emerald-50 text-[11px] font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer">
                          <FileText className="w-3.5 h-3.5" />
                          View Detailed Report
                        </button>
                        <button onClick={() => toast.success("Event added to Farm Timeline.")} className="py-2 px-3 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 text-[11px] font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer">
                          <Calendar className="w-3.5 h-3.5" />
                          Save to Timeline
                        </button>
                        <button onClick={() => toast.success("Reminder created for Block C irrigation check.")} className="py-2 px-3 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 text-[11px] font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer">
                          <Volume2 className="w-3.5 h-3.5" />
                          Create Reminder
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* STANDARD BOT TEXT MESSAGE */
                    <div className="flex flex-col items-start">
                      <div className="bg-white border border-slate-200/80 text-slate-800 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tl-none text-left shadow-sm max-w-lg leading-relaxed">
                        {msg.text}
                      </div>
                      <div className="text-[9px] font-bold text-slate-400 mt-1 pl-1">
                        {msg.timestamp}
                      </div>
                    </div>
                  )}

                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200/50 flex items-center justify-center text-slate-600 shadow-sm flex-shrink-0">
                <Bot className="w-4.5 h-4.5" />
              </div>
              <div className="bg-white border border-slate-200/80 p-3 px-4 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Input Bar at the Bottom */}
        <div className="pt-4 border-t border-slate-100 flex-shrink-0 flex flex-col space-y-2">
          
          <div className="relative flex items-center">
            {/* Camera input trigger */}
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about your farm..."
              className="w-full text-xs sm:text-sm py-4 pl-4 pr-32 sm:pr-40 rounded-2xl border border-slate-200/80 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
            />
            
            {/* Input Action Controls */}
            <div className="absolute right-3 flex items-center gap-1.5 sm:gap-2 text-slate-400">
              <button 
                type="button"
                onClick={() => {
                  toast.info("Voice Input activated.");
                  handleSend("What is my current soil pH level?");
                }}
                className="p-1.5 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                title="Voice input"
              >
                <Mic className="w-4 h-4" />
              </button>
              <button 
                type="button"
                onClick={triggerDiseaseScan}
                className="p-1.5 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                title="Camera diagnosis"
              >
                <Camera className="w-4 h-4" />
              </button>
              <button 
                type="button"
                onClick={triggerDiseaseScan}
                className="p-1.5 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                title="Upload image file"
              >
                <Upload className="w-4 h-4" />
              </button>
              
              {/* Send Button */}
              <button
                type="button"
                onClick={() => handleSend()}
                className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors active:scale-95 cursor-pointer shadow-sm shadow-emerald-600/10"
              >
                <Send className="w-3.5 h-3.5 transform rotate-45 mr-0.5 mb-0.5 fill-current" />
              </button>
            </div>
          </div>
          
          <span className="text-[9px] sm:text-[10px] text-slate-400 text-center font-medium leading-none">
            AgriFlow AI can make mistakes. Please verify important information.
          </span>
        </div>

      </div>

      {/* RIGHT UTILITY PANEL (Spans 25% on large screens, stacks below chat on mobile) */}
      <div className="w-full xl:w-[320px] bg-slate-50 border-t xl:border-t-0 xl:border-l border-slate-200/50 p-6 flex flex-col space-y-6 overflow-y-auto flex-shrink-0">
        
        {/* Component 1: AI Memory Card */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col space-y-4 text-left select-none">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">AI Memory</span>
            <button onClick={() => toast.info("See All Memory clicked.")} className="text-[10px] font-bold text-emerald-600 hover:underline cursor-pointer">See All</button>
          </div>

          <div className="space-y-3.5">
            {[
              { label: 'Farm Name', value: 'Green Valley Farm', icon: Home },
              { label: 'Location', value: 'Anantapur, Andhra Pradesh', icon: MapPin },
              { label: 'Current Crop', value: 'Tomato (Flowering)', icon: Sprout },
              { label: 'Farm Size', value: '5.6 Acres', icon: Scale },
              { label: 'Soil Type', value: 'Black Soil', icon: Layers },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-7.5 h-7.5 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center flex-shrink-0 border border-slate-100">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-none">{item.label}</span>
                    <span className="text-xs font-extrabold text-slate-800 mt-1 leading-snug">{item.value}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={() => toast.success("Full AI Memory database opened.")} className="w-full py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-[10px] rounded-xl transition-all shadow-sm active:scale-[0.99] cursor-pointer">
            View Full Memory
          </button>
        </div>

        {/* Component 2: Today's AI Suggestions */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col space-y-4 text-left select-none">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Today&apos;s AI Suggestions</span>

          <div className="space-y-4">
            {[
              { title: 'Delay irrigation until tomorrow', desc: 'Rain expected in 16 hours', icon: Droplet, color: 'text-blue-500 bg-blue-50 border-blue-100/50' },
              { title: 'Tomato prices rising', desc: '8% increase in local market', icon: TrendingUp, color: 'text-rose-500 bg-rose-50 border-rose-100/50' },
              { title: 'Monitor Block A', desc: 'Slight disease risk increase', icon: CheckCircle, color: 'text-emerald-500 bg-emerald-50 border-emerald-100/50' },
              { title: 'Harvest in 19 Days', desc: 'Expected yield: 3.2 Tonnes', icon: Sprout, color: 'text-amber-500 bg-amber-50 border-amber-100/50' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3 cursor-pointer group">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-slate-800 leading-tight group-hover:text-emerald-600 transition-colors">{item.title}</span>
                    <span className="text-[9px] font-semibold text-slate-400 mt-0.5 leading-none">{item.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={() => toast.success("Recommendation history database opened.")} className="w-full py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-[10px] rounded-xl transition-all shadow-sm active:scale-[0.99] cursor-pointer">
            View All Suggestions
          </button>
        </div>

        {/* Component 3: Quick Actions (Grid 2x3) */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col space-y-4 text-left select-none">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Quick Actions</span>
          
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Scan Crop', icon: Camera, action: triggerDiseaseScan },
              { label: 'Voice Assistant', icon: Mic, action: toggleVoiceMode },
              { label: 'View Timeline', icon: Calendar, action: () => toast.info("Navigating to Farm Timeline...") },
              { label: 'Generate Farm Report', icon: FileText, action: handleGenerateReport },
              { label: 'Export PDF', icon: Sprout, iconOverride: 'pdf', action: handleExportPDF },
              { label: 'Share Insights', icon: Share2, action: () => toast.success("Share link copied to clipboard.") },
            ].map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={idx}
                  onClick={action.action}
                  className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-100 hover:border-emerald-500/20 bg-slate-50/20 hover:bg-emerald-50/10 transition-all cursor-pointer text-center space-y-1.5 aspect-square"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-50 text-slate-500 border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105">
                    {action.iconOverride === 'pdf' ? (
                      <span className="text-[9px] font-black font-outfit text-slate-600">PDF</span>
                    ) : (
                      <Icon className="w-3.5 h-3.5 text-slate-500" />
                    )}
                  </div>
                  <span className="text-[9px] font-bold text-slate-600 leading-tight block truncate max-w-full">
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
