"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplet, Shield, Cloud, Bell, ChevronDown, Sun, CloudRain, 
  ShieldAlert, TrendingUp, Sparkles, Bot, ArrowUpRight, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { toast } from 'sonner';

export default function DashboardHome() {
  const [selectedDate] = useState('12 May 2026');
  const [briefingOpen, setBriefingOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 text-left select-none max-w-7xl mx-auto w-full">
      
      {/* Top Banner Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 font-outfit">Welcome Back, Dhanush Patel!</h2>
          <p className="text-xs text-slate-400 mt-1 font-semibold">Live telemetry and command operations for Green Valley Farm.</p>
        </div>
        
        {/* Date Selector */}
        <button 
          onClick={() => toast.info("Custom date filter is mock-only.")}
          className="flex items-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors self-start sm:self-center"
        >
          Today, {selectedDate}
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

      {/* Main Panel Area Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Column 1: Farm Health & Irrigation */}
        <div className="md:col-span-4 flex flex-col gap-5">
          {/* Farm Health Score */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col items-center justify-center text-center flex-1 min-h-[220px]">
            <span className="text-xs font-semibold text-slate-500 mb-4">Farm Health Score</span>
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle 
                  cx="56" cy="56" r="48" 
                  className="text-slate-100" 
                  strokeWidth="8" stroke="currentColor" fill="transparent" 
                />
                <motion.circle 
                  cx="56" cy="56" r="48" 
                  className="text-emerald-500" 
                  strokeWidth="8" stroke="currentColor" fill="transparent" 
                  strokeDasharray={301.6}
                  initial={{ strokeDashoffset: 301.6 }}
                  animate={{ strokeDashoffset: 301.6 * (1 - 0.94) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-extrabold text-slate-800 font-outfit">94</span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase">/100</span>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <span className="text-sm font-bold text-slate-800">Excellent Condition</span>
              <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                <TrendingUp className="w-3 h-3" /> +6% from yesterday
              </span>
            </div>
          </div>

          {/* Irrigation Status */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
              <Droplet className="w-6 h-6 fill-current" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-bold tracking-wider text-blue-500 uppercase">Irrigation Status</span>
              <h4 className="text-base font-extrabold text-slate-800 font-outfit mt-0.5">Optimal</h4>
              <span className="text-xs text-slate-500 mt-0.5 block">Next irrigation in 2 days</span>
            </div>
          </div>
        </div>

        {/* Column 2: AI Daily Briefing & Subcards */}
        <div className="md:col-span-5 flex flex-col gap-5">
          {/* Daily Briefing Panel */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between flex-1 min-h-[220px]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500">AI Daily Briefing</span>
                <Sparkles className="w-4 h-4 text-emerald-500" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 font-outfit mb-3">
                Good morning, Ramesh! 👋
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Rain expected after 4:00 PM today
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Soil moisture content is optimal (38%)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  Low disease risk index for tomatoes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Tomato market prices are up 8%
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setBriefingOpen(true)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-xl text-xs transition-colors duration-150 mt-4 flex items-center justify-center gap-1 cursor-pointer"
            >
              View Full Briefing
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Market Trends & Disease Risk Sub-grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Market Trends */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase font-outfit">Market</span>
                <TrendingUp className="w-4 h-4 text-emerald-500" />
              </div>
              <div>
                <h5 className="text-xs font-semibold text-slate-500">Tomato Price</h5>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-base font-extrabold text-slate-800 font-outfit">₹24/kg</span>
                  <span className="text-[10px] font-semibold text-emerald-600">+8%</span>
                </div>
              </div>
            </div>

            {/* Disease Risk */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase font-outfit">Disease Risk</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div>
                <h5 className="text-xs font-semibold text-slate-500">Threat Level</h5>
                <span className="text-sm font-extrabold text-emerald-600 font-outfit mt-0.5 block">Low</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Weather & Smart Alerts */}
        <div className="md:col-span-3 flex flex-col gap-5">
          {/* Weather Card */}
          <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/10 rounded-2xl p-5 flex flex-col justify-between flex-1 min-h-[170px]">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-500">Weather Now</span>
                <Sun className="w-5 h-5 text-amber-500 animate-[spin_10s_linear_infinite]" />
              </div>
              <div className="flex items-baseline gap-1">
                <h4 className="text-3xl font-extrabold text-slate-800 font-outfit">27°C</h4>
                <span className="text-xs font-medium text-slate-500">Partly Cloudy</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 space-y-1 mt-2 border-t border-slate-200/50 pt-2.5">
              <div className="flex justify-between">
                <span>H: 32°C  L: 20°C</span>
              </div>
              <div className="flex justify-between">
                <span>Humidity</span>
                <span className="font-semibold text-slate-700">62%</span>
              </div>
            </div>
          </div>

          {/* Smart Alerts */}
          <div className="bg-rose-500/5 border border-rose-500/10 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 flex-shrink-0">
              <Bell className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-bold text-rose-500 uppercase font-outfit">Smart Alerts</span>
              <h4 className="text-sm font-extrabold text-slate-800 font-outfit leading-none mt-0.5">2 New Alerts</h4>
              <button 
                onClick={() => toast.info("Opening alerts dashboard...")}
                className="text-[10px] font-semibold text-rose-500 hover:underline mt-1 block cursor-pointer"
              >
                View all alerts
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Panel: AI Recommendation */}
      <div 
        onClick={() => toast.success("AI Recommendation details loaded.")}
        className="bg-white border border-slate-200 hover:border-emerald-500/35 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-200 rounded-2xl p-4.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer group"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
            <Bot className="w-5.5 h-5.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">AI Recommendation</span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-600">High Confidence</span>
            </div>
            <p className="text-xs text-slate-700 font-medium mt-1">
              Delay irrigation by 1 day to optimize water usage and improve root development.
            </p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-1 transition-transform self-end sm:self-center" />
      </div>

      {/* Briefing Modal */}
      {briefingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl text-slate-900"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <h4 className="font-bold text-slate-900 font-outfit">AI Daily Insights</h4>
              </div>
              <button 
                onClick={() => setBriefingOpen(false)}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Close
              </button>
            </div>
            
            <div className="space-y-4 text-sm text-slate-600">
              <div className="bg-emerald-50 border border-emerald-200/20 rounded-xl p-3.5">
                <h5 className="font-bold text-emerald-800 flex items-center gap-1.5 mb-1.5 text-xs uppercase">
                  <CloudRain className="w-4 h-4" /> Weather Advisory
                </h5>
                <p className="text-xs">
                  Weather forecasts predict 15mm of rain starting late afternoon (around 4:00 PM). Postpone scheduled crop dusting or foliar fertilizers to avoid runoff.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200/20 rounded-xl p-3.5">
                <h5 className="font-bold text-blue-800 flex items-center gap-1.5 mb-1.5 text-xs uppercase">
                  <Droplet className="w-4 h-4" /> Soil Moisture Status
                </h5>
                <p className="text-xs">
                  Moisture level is at 38% in Zone A (Tomato Fields), which is within the optimal range. Combined with incoming rainfall, no supplemental watering is needed for the next 48 hours.
                </p>
              </div>

              <div className="bg-rose-50 border border-rose-200/20 rounded-xl p-3.5">
                <h5 className="font-bold text-rose-800 flex items-center gap-1.5 mb-1.5 text-xs uppercase">
                  <ShieldAlert className="w-4 h-4" /> Pathogen Risk Report
                </h5>
                <p className="text-xs">
                  Late blight threat index remains very low (12%). Continue standard humidity controls in the greenhouse to mitigate early blight risks.
                </p>
              </div>
            </div>

            <button 
              onClick={() => setBriefingOpen(false)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 rounded-xl text-xs transition-colors duration-150 mt-5 cursor-pointer"
            >
              Acknowledge Briefing
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
}
