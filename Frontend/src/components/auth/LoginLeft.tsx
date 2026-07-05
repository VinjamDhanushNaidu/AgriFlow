"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Sprout, Sun, CloudRain, Calendar, Shield, Zap, Sparkles, TrendingUp, CheckCircle2 
} from 'lucide-react';

export default function LoginLeft() {
  return (
    <div className="hidden lg:flex flex-col justify-between w-1/2 min-h-screen bg-slate-50 p-8 xl:p-12 relative overflow-hidden border-r border-slate-200/50">
      
      {/* Background radial blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-emerald-300/10 blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-green-200/10 blur-3xl -z-10" />

      {/* Top Header */}
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/25">
          <Sprout className="w-5.5 h-5.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-slate-900 font-outfit leading-none">
            AgriFlow AI
          </span>
          <span className="text-[10px] font-medium text-slate-500 tracking-wider uppercase mt-1">
            AI Farm Manager
          </span>
        </div>
      </div>

      {/* Main Title & Isometric Illustration */}
      <div className="my-auto flex flex-col items-center">
        
        {/* Big Heading */}
        <div className="w-full max-w-lg mb-8 text-left">
          <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 font-outfit leading-tight">
            Your Digital Farm. <br />
            <span className="text-emerald-600">Smarter</span> Every Day.
          </h1>
        </div>

        {/* Floating Farm Illustration Container */}
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
          
          {/* Base Farm Image */}
          <div className="w-[85%] h-[85%] relative flex items-center justify-center">
            <Image
              src="/digital_farm.png"
              alt="AgriFlow Digital Farm Model"
              width={500}
              height={500}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* CARD 1: Farm Health (Top Left) */}
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-[8%] left-[-4%] w-[160px] glass-card-dense rounded-2xl p-3.5 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300"
          >
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Farm Health</span>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="24" cy="24" r="20" className="text-slate-100" strokeWidth="4" stroke="currentColor" fill="transparent" />
                  <circle cx="24" cy="24" r="20" className="text-emerald-500" strokeWidth="4" stroke="currentColor" fill="transparent" strokeDasharray={125.6} strokeDashoffset={125.6 * (1 - 0.94)} />
                </svg>
                <span className="absolute text-xs font-bold text-slate-800">94</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-extrabold text-slate-800">Excellent</span>
                <span className="text-[9px] font-bold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> +6%
                </span>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Weather (Top Right) */}
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-[12%] right-[-4%] w-[170px] glass-card-dense rounded-2xl p-3.5 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300"
          >
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Weather Now</span>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-800 font-outfit">27°C</span>
                <span className="text-[9px] font-bold text-slate-500">Partly Cloudy</span>
              </div>
              <Sun className="w-8 h-8 text-amber-500 animate-[spin_12s_linear_infinite] flex-shrink-0" />
            </div>
            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[8px] font-semibold text-slate-400">
              <span>H: 32°C L: 20°C</span>
              <span>Humidity: 62%</span>
            </div>
          </motion.div>

          {/* CARD 3: AI Daily Briefing (Bottom Left) */}
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            className="absolute bottom-[6%] left-[-8%] w-[210px] glass-card-dense rounded-2xl p-4 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Daily Briefing</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            </div>
            <ul className="space-y-1.5 text-[10px] font-medium text-slate-600">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                Rain expected after 4 PM
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                No irrigation required today
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                Disease Risk: Low
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                Tomato prices ↑ 8%
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                New govt scheme available
              </li>
            </ul>
            <span className="text-[9px] font-extrabold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-0.5 mt-3 cursor-pointer">
              View Full Briefing &rarr;
            </span>
          </motion.div>

          {/* CARD 4: Upcoming Task (Bottom Right) */}
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute bottom-[10%] right-[-5%] w-[170px] glass-card-dense rounded-2xl p-3.5 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300"
          >
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Upcoming Task</span>
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-extrabold text-slate-800 leading-tight">Irrigation Check</span>
                <span className="text-[9px] font-bold text-slate-400 mt-0.5">Today, 4:00 PM</span>
              </div>
            </div>
            <span className="text-[9px] font-extrabold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-0.5 mt-3.5 cursor-pointer block">
              View All Tasks &rarr;
            </span>
          </motion.div>

        </div>

      </div>

      {/* Bottom Quote & Feature Badges */}
      <div className="flex flex-col space-y-6 w-full max-w-lg mt-auto">
        {/* Quote */}
        <div className="flex items-center gap-3 bg-white/40 border border-slate-200/30 rounded-2xl p-4 shadow-sm">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
            <Sprout className="w-4.5 h-4.5" />
          </div>
          <p className="text-sm font-semibold text-slate-700 italic">
            &ldquo;Helping farmers make smarter decisions through AI.&rdquo;
          </p>
        </div>

        {/* Features Row */}
        <div className="flex items-center justify-between border-t border-slate-200/50 pt-4 px-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Secure
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
            <Zap className="w-4 h-4 text-emerald-500" />
            AI-Powered
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            Always Learning
          </div>
        </div>
      </div>

    </div>
  );
}
