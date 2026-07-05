"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Bot, Search, Bell, Globe, ChevronDown, MoreVertical, Mic, Volume2 
} from 'lucide-react';
import { toast } from 'sonner';

export default function Topbar() {
  const pathname = usePathname();
  const isAssistant = pathname?.includes('/assistant');
  const isFarmTwin = pathname?.includes('/farm-twin');

  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const toggleVoiceMode = () => {
    setIsVoiceActive(!isVoiceActive);
    if (!isVoiceActive) {
      toast.info("Voice Mode activated. Start speaking...", {
        description: "Listening for your questions about the farm.",
      });
    } else {
      toast.success("Voice Mode deactivated.");
    }
  };

  return (
    <header className="w-full bg-white border-b border-slate-200/50 h-20 px-6 sm:px-8 flex items-center justify-between flex-shrink-0 z-10 select-none">
      
      {/* LEFT CONTENT: Conditional page headers */}
      {isAssistant ? (
        <div className="flex items-center gap-3">
          {/* Robot Icon Avatar */}
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-700 flex-shrink-0">
            <Bot className="w-5.5 h-5.5" />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-slate-800 font-outfit leading-none">
                AgriFlow AI Assistant
              </h1>
              <span className="flex items-center gap-1.5 py-0.5 px-2 rounded-full bg-emerald-50 border border-emerald-200/20 text-[9px] font-bold text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Online
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1">
              Your Personal AI Farm Manager
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            {isFarmTwin ? (
              <span className="flex items-center gap-1 text-emerald-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                AI Farm Twin
              </span>
            ) : (
              <span className="text-emerald-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                AI Command Center
              </span>
            )}
          </div>
          <h1 className="text-base sm:text-lg font-bold text-slate-800 font-outfit mt-0.5 leading-none">
            {isFarmTwin ? "AI Farm Twin" : "AgriFlow Command Panel"}
          </h1>
          <span className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1">
            {isFarmTwin 
              ? "Your living digital representation of the entire farm." 
              : "Live telemetry and agricultural analytics dashboard."}
          </span>
        </div>
      )}

      {/* MIDDLE CONTENT: Search Bar (Hidden in Assistant Page, visible in Farm Twin/Dashboard) */}
      {!isAssistant && (
        <div className="hidden md:flex items-center w-full max-w-[320px] lg:max-w-[400px] relative mx-4">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full text-xs py-2.5 pl-9 pr-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/80 transition-all duration-200"
          />
        </div>
      )}

      {/* RIGHT CONTENT: Page-specific controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        {isAssistant ? (
          <>
            {/* Voice Mode Button */}
            <button
              onClick={toggleVoiceMode}
              className={`py-2 px-4 rounded-xl border font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm active:scale-[0.98] cursor-pointer ${
                isVoiceActive 
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-600 shadow-md shadow-emerald-500/10' 
                  : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
              }`}
            >
              <Mic className={`w-4 h-4 ${isVoiceActive ? 'animate-bounce text-emerald-500' : 'text-slate-400'}`} />
              Voice Mode
            </button>
            {/* Three Dot Menu */}
            <button className="w-9 h-9 rounded-xl border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer">
              <MoreVertical className="w-4.5 h-4.5" />
            </button>
          </>
        ) : (
          <>
            {/* Mobile Search Icon */}
            <button className="md:hidden w-9 h-9 rounded-xl border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer">
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Notification Bell */}
            <button 
              onClick={() => toast.info("You have 5 unread alerts.", {
                description: "Block C disease risk alert is currently active.",
              })}
              className="w-9 h-9 rounded-xl border border-slate-200 hover:bg-slate-50 flex items-center justify-center relative text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <Bell className="w-4.5 h-4.5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => toast.info("Language selection is mock-only.")}
                className="hidden sm:flex items-center gap-1.5 py-1.5 px-3 border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                English
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Profile Avatar */}
            <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white font-extrabold text-xs shadow-sm cursor-pointer">
              D
            </div>
          </>
        )}
      </div>

    </header>
  );
}
