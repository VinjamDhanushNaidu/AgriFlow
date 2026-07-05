import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, Sprout, Database, Droplet, Shield, Cloud, Bell, Settings, 
  ChevronDown, Sun, CloudRain, ShieldAlert, TrendingUp, Sparkles,
  Bot, ArrowUpRight, CheckCircle2, ChevronRight
} from 'lucide-react';

export default function DashboardCard() {
  const [selectedDate, setSelectedDate] = useState('12 May 2026');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [briefingOpen, setBriefingOpen] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', icon: Home },
    { id: 'farm-twin', icon: Sprout },
    { id: 'database', icon: Database },
    { id: 'irrigation', icon: Droplet },
    { id: 'security', icon: Shield },
    { id: 'weather', icon: Cloud },
    { id: 'alerts', icon: Bell },
    { id: 'settings', icon: Settings },
  ];

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full glass-card rounded-3xl shadow-2xl border border-slate-200/60 overflow-hidden flex h-[620px] md:h-[680px] lg:h-[650px]"
    >
      {/* Sidebar Icon Bar */}
      <div className="w-16 bg-slate-50/80 border-r border-slate-200/55 flex flex-col items-center py-6 gap-5">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 relative group ${
                isActive 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              {/* Tooltip */}
              <span className="absolute left-14 bg-slate-900 text-white text-[10px] font-semibold py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none capitalize whitespace-nowrap shadow-md z-10">
                {item.id.replace('-', ' ')}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Panel Area */}
      <div className="flex-1 flex flex-col bg-white/40 overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200/40 flex items-center justify-between flex-shrink-0 bg-white/30 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-slate-800 font-outfit text-base md:text-lg">
              AI Command Center
            </h3>
            <span className="flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-emerald-50 border border-emerald-200/30 text-[11px] font-semibold text-emerald-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Date Selector */}
            <div className="relative">
              <button className="flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg bg-slate-100/80 border border-slate-200/50 text-slate-600 hover:bg-slate-200/50 transition-colors">
                Today, {selectedDate}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
            
            {/* Notification Bell */}
            <button className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center relative text-slate-600 hover:bg-slate-200/50 transition-all border border-slate-200/50">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>

            {/* Profile Avatar */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xs uppercase shadow-sm">
              R
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-5 md:p-6 space-y-5 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            
            {/* Column 1: Farm Health & Irrigation */}
            <div className="md:col-span-4 flex flex-col gap-5">
              {/* Farm Health Score */}
              <div className="glass-card-dense rounded-2xl p-5 flex flex-col items-center justify-center text-center flex-1 min-h-[220px]">
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
              <div className="glass-card-dense rounded-2xl p-4 flex items-center gap-4">
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
              <div className="glass-card-dense rounded-2xl p-5 flex flex-col justify-between flex-1 min-h-[220px]">
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
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-xl text-xs transition-colors duration-150 mt-4 flex items-center justify-center gap-1"
                >
                  View Full Briefing
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Market Trends & Disease Risk Sub-grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Market Trends */}
                <div className="glass-card-dense rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Market</span>
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
                <div className="glass-card-dense rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Disease Risk</span>
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
              <div className="glass-card-dense rounded-2xl p-5 flex flex-col justify-between flex-1 min-h-[170px] bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-amber-500/10">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-500">Weather Now</span>
                    <Sun className="w-5 h-5 text-amber-500 animate-spin-slow" />
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
              <div className="glass-card-dense rounded-2xl p-4 flex items-center gap-4 bg-rose-500/5 border-rose-500/10">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 flex-shrink-0">
                  <Bell className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold text-rose-500 uppercase">Smart Alerts</span>
                  <h4 className="text-sm font-extrabold text-slate-800 font-outfit leading-none mt-0.5">2 New Alerts</h4>
                  <button className="text-[10px] font-semibold text-rose-500 hover:underline mt-1 block">View all alerts</button>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Panel: AI Recommendation */}
          <div className="glass-card-dense rounded-2xl p-4.5 border border-emerald-500/35 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer group">
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

        </div>
      </div>

      {/* Mock Modal for Daily Briefing */}
      {briefingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <h4 className="font-bold text-slate-900 font-outfit">AI Daily Insights</h4>
              </div>
              <button 
                onClick={() => setBriefingOpen(false)}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600"
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
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 rounded-xl text-xs transition-colors duration-150 mt-5"
            >
              Acknowledge Briefing
            </button>
          </motion.div>
        </div>
      )}

    </motion.div>
  );
}
