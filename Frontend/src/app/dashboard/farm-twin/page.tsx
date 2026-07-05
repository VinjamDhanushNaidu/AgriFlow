"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Sprout, MapPin, Scale, Layers, Calendar, ChevronRight, 
  Droplet, Wind, Sun, AlertTriangle, CheckCircle, HelpCircle, 
  Sparkles, FileText, Download, Play, Eye, Activity, Shield, TrendingUp, BarChart3,
  User, Camera, Bot, CloudSun
} from 'lucide-react';
import { toast } from 'sonner';
import { 
  ResponsiveContainer, LineChart, Line, BarChart, Bar, AreaChart, Area, YAxis, Tooltip 
} from 'recharts';

// Data for sparkline charts
const healthData = [
  { value: 85 }, { value: 87 }, { value: 86 }, { value: 89 }, { value: 91 }, { value: 92 }, { value: 94 }
];

const yieldData = [
  { value: 2.1 }, { value: 2.3 }, { value: 2.5 }, { value: 2.8 }, { value: 3.0 }, { value: 3.1 }, { value: 3.2 }
];

const waterData = [
  { value: 2100 }, { value: 2400 }, { value: 1900 }, { value: 2800 }, { value: 3100 }, { value: 2900 }, { value: 18450 / 7 }
];

const tempData = [
  { value: 25 }, { value: 26 }, { value: 28 }, { value: 27 }, { value: 29 }, { value: 28 }, { value: 27 }
];

const diseaseData = [
  { value: 25 }, { value: 20 }, { value: 18 }, { value: 15 }, { value: 12 }, { value: 10 }, { value: 8 }
];

const profitData = [
  { value: 38000 }, { value: 41000 }, { value: 40000 }, { value: 43000 }, { value: 46000 }, { value: 47000 }, { value: 48750 }
];

export default function FarmTwinPage() {
  const [mounted, setMounted] = useState(false);
  const [activeView, setActiveView] = useState('3d');
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSimulateFuture = () => {
    setIsSimulating(true);
    toast.info("Running Future Yield Simulation...", {
      description: "Aggregating historical sensor data and weather forecast...",
    });
    setTimeout(() => {
      setIsSimulating(false);
      toast.success("Simulation Complete: Tomato Yield Projected High (+12%)", {
        description: "Soil moisture levels are expected to remain stable.",
      });
    }, 2000);
  };

  const handleBlockClick = (blockName: string, status: string, details: string) => {
    toast.success(`${blockName} Selected`, {
      description: `Status: ${status}. ${details}`,
    });
  };

  return (
    <div className="flex flex-col xl:flex-row h-full">
      
      {/* LEFT PANEL: Interactive Twin, Sensors, Charts (Spans 75%) */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 overflow-y-auto">
        
        {/* Row 1: Farm Twin Meta Details Banner */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 text-left select-none shadow-sm">
          {[
            { label: 'Farm Name', value: 'Green Valley Farm', icon: Sprout, iconColor: 'text-emerald-500 bg-emerald-50' },
            { label: 'Location', value: 'Anantapur, AP', icon: MapPin, iconColor: 'text-blue-500 bg-blue-50' },
            { label: 'Farm Size', value: '5.6 Acres', icon: Scale, iconColor: 'text-purple-500 bg-purple-50' },
            { label: 'Primary Crop', value: 'Tomato 🍅', icon: Sprout, iconColor: 'text-rose-500 bg-rose-50' },
            { label: 'Soil Type', value: 'Black Soil 🟫', icon: Layers, iconColor: 'text-amber-500 bg-amber-50' },
            { label: 'Growth Stage', value: 'Flowering 🌸', icon: Calendar, iconColor: 'text-teal-500 bg-teal-50' },
            { label: 'Farmer', value: 'Dhanush 👨‍🌾', icon: User, iconColor: 'text-slate-500 bg-slate-50' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.iconColor}`}>
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-none">{item.label}</span>
                  <span className="text-xs font-extrabold text-slate-800 mt-1 leading-none truncate">{item.value}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Digital Twin Map Visual Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-md p-4 relative min-h-[380px] lg:min-h-[440px] flex flex-col justify-end">
          
          {/* Base Twin Illustration */}
          <div className="absolute inset-0 z-0 p-4 flex items-center justify-center bg-slate-50/50">
            <Image
              src="/digital_farm.png"
              alt="AgriFlow AI Digital Twin Map Model"
              width={650}
              height={550}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* OVERLAY TAG: Block A */}
          <button 
            onClick={() => handleBlockClick("Block A", "Healthy", "Size: 4.2 Acres, Primary Crop: Tomato.")}
            className="absolute top-[48%] left-[28%] z-10 py-1.5 px-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-emerald-500/20 shadow-lg text-left flex items-start gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mt-1" />
            <div className="flex flex-col text-[10px] text-white">
              <span className="font-bold">Block A</span>
              <span className="text-[8px] text-emerald-400 font-bold uppercase mt-0.5">Healthy</span>
            </div>
          </button>

          {/* OVERLAY TAG: Block B */}
          <button 
            onClick={() => handleBlockClick("Block B", "Needs Irrigation", "Size: 0.8 Acres, Primary Crop: Tomato. Moisture: 31%")}
            className="absolute bottom-[35%] left-[45%] z-10 py-1.5 px-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-amber-500/20 shadow-lg text-left flex items-start gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse mt-1" />
            <div className="flex flex-col text-[10px] text-white">
              <span className="font-bold">Block B</span>
              <span className="text-[8px] text-amber-400 font-bold uppercase mt-0.5">Needs Irrigation</span>
            </div>
          </button>

          {/* OVERLAY TAG: Block C */}
          <button 
            onClick={() => handleBlockClick("Block C", "Disease Monitoring", "Size: 0.6 Acres, Primary Crop: Tomato. Early Blight threat detected.")}
            className="absolute top-[40%] right-[32%] z-10 py-1.5 px-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-blue-500/20 shadow-lg text-left flex items-start gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse mt-1" />
            <div className="flex flex-col text-[10px] text-white">
              <span className="font-bold">Block C</span>
              <span className="text-[8px] text-blue-400 font-bold uppercase mt-0.5">Disease Monitoring</span>
            </div>
          </button>

          {/* Floating Weather overlay card (Top-Left) */}
          <div className="absolute top-4 left-4 z-10 p-3 bg-white/90 backdrop-blur-md border border-slate-200/50 rounded-2xl shadow flex flex-col text-left text-slate-800 max-w-[170px] select-none">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Weather Now</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-xl font-black font-outfit">27°C</span>
              <span className="text-[9px] text-slate-500 font-medium">Partly Cloudy</span>
            </div>
            <div className="mt-2 pt-2 border-t border-slate-100/80 space-y-1 text-[8.5px] font-semibold text-slate-500">
              <div className="flex justify-between"><span>Humidity</span><span className="text-slate-700">62%</span></div>
              <div className="flex justify-between"><span>Wind</span><span className="text-slate-700">12 km/h</span></div>
              <div className="flex justify-between"><span>Rain Prob.</span><span className="text-slate-700">10%</span></div>
            </div>
          </div>

          {/* Floating Buttons overlay (Top-Right) */}
          <div className="absolute top-4 right-4 z-10 flex flex-wrap gap-2 items-center">
            {['3d', 'map', 'satellite'].map((view) => (
              <button
                key={view}
                onClick={() => {
                  setActiveView(view);
                  toast.success(`${view.toUpperCase()} View Activated.`);
                }}
                className={`py-1.5 px-3 rounded-xl border text-[10px] font-bold transition-all active:scale-95 cursor-pointer ${
                  activeView === view 
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-600 shadow-sm' 
                    : 'border-slate-200 bg-white/90 hover:bg-slate-50 text-slate-600'
                }`}
              >
                {view === '3d' ? '3D View' : view === 'map' ? 'Map View' : 'Satellite View'}
              </button>
            ))}
            
            {/* Toolbar overlay far right */}
            <div className="flex items-center gap-1.5 p-1 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/50 shadow-sm ml-2">
              <button onClick={() => toast.info("Lock location pins.")} className="p-1 hover:text-emerald-600 hover:bg-slate-100 rounded-lg text-slate-400 cursor-pointer"><MapPin className="w-3.5 h-3.5" /></button>
              <button onClick={() => toast.info("Configure crop health layer.")} className="p-1 hover:text-emerald-600 hover:bg-slate-100 rounded-lg text-slate-400 cursor-pointer"><Layers className="w-3.5 h-3.5" /></button>
              <button onClick={() => toast.info("Fullscreen map.")} className="p-1 hover:text-emerald-600 hover:bg-slate-100 rounded-lg text-slate-400 cursor-pointer"><Scale className="w-3.5 h-3.5" /></button>
            </div>
          </div>

          {/* Simulate Future Button Overlay (Bottom-Right) */}
          <div className="z-10 flex justify-end p-2 mt-auto">
            <button
              onClick={handleSimulateFuture}
              disabled={isSimulating}
              className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              {isSimulating ? "Simulating..." : (
                <>
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  Simulate Future
                </>
              )}
            </button>
          </div>

        </div>

        {/* Row 3: Live Farm Sensors (Updated 2 min ago) */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm text-left select-none">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Live Farm Sensors</h3>
            <span className="text-[10px] font-bold text-slate-400">Updated 2 min ago</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Temperature', value: '27.4°C', tag: 'Optimal', desc: 'Ideal for crop growth', icon: Sun, color: 'text-amber-500 bg-amber-50 border-amber-100/50' },
              { label: 'Soil Moisture', value: '42%', tag: 'Good', desc: 'No irrigation needed', icon: Droplet, color: 'text-blue-500 bg-blue-50 border-blue-100/50' },
              { label: 'Sunlight', value: '8.6 hrs', tag: 'Good', desc: 'Sufficient sunlight', icon: Sun, color: 'text-yellow-500 bg-yellow-50 border-yellow-100/50' },
              { label: 'Wind Speed', value: '12 km/h', tag: 'Moderate', desc: 'No action needed', icon: Wind, color: 'text-slate-500 bg-slate-50 border-slate-100' },
              { label: 'Rain Probability', value: '10%', tag: 'Low', desc: 'No rain expected', icon: CloudSun, color: 'text-indigo-500 bg-indigo-50 border-indigo-100/50' },
              { label: 'Soil pH', value: '6.8 pH', tag: 'Optimal', desc: 'Ideal for tomato', icon: Layers, color: 'text-emerald-500 bg-emerald-50 border-emerald-100/50' },
            ].map((sensor, idx) => {
              const Icon = sensor.icon;
              return (
                <div key={idx} className="p-3 border border-slate-100 bg-slate-50/30 rounded-xl flex flex-col justify-between min-h-[110px]">
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${sensor.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${
                      sensor.tag === 'Optimal' || sensor.tag === 'Good' 
                        ? 'bg-emerald-500/10 text-emerald-600' 
                        : sensor.tag === 'Moderate' ? 'bg-amber-500/10 text-amber-600' : 'bg-blue-500/10 text-blue-600'
                    }`}>{sensor.tag}</span>
                  </div>
                  <div className="flex flex-col mt-3">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{sensor.label}</span>
                    <span className="text-base font-black text-slate-800 font-outfit mt-0.5">{sensor.value}</span>
                    <span className="text-[8px] font-bold text-slate-400 mt-1 leading-none">{sensor.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 4: AI Predictions (Advanced AI Models) */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm text-left select-none">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">AI Predictions</h3>
            <span className="text-[9px] font-bold px-1.5 py-0.5 bg-emerald-500/10 text-emerald-600 rounded">Powered by Advanced AI Models</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Harvest Prediction', value: '19 Days', conf: '96% Confidence', icon: Calendar, color: 'text-amber-500 bg-amber-50/50' },
              { label: 'Disease Forecast', value: 'Low Risk', conf: '94% Confidence', icon: Shield, color: 'text-emerald-500 bg-emerald-50/50' },
              { label: 'Water Requirement', value: 'No Irrigation', conf: '92% Confidence', icon: Droplet, color: 'text-blue-500 bg-blue-50/50' },
              { label: 'Market Demand', value: 'High', conf: '95% Confidence', icon: TrendingUp, color: 'text-rose-500 bg-rose-50/50' },
              { label: 'Weather Impact', value: 'Favorable', conf: '91% Confidence', icon: CloudSun, color: 'text-teal-500 bg-teal-50/50' },
              { label: 'Revenue Forecast', value: '₹48,750', conf: '95% Confidence', icon: Layers, color: 'text-purple-500 bg-purple-50/50' },
            ].map((pred, idx) => {
              const Icon = pred.icon;
              return (
                <div key={idx} className="p-3 border border-slate-100 bg-slate-50/30 rounded-xl flex flex-col justify-between min-h-[100px] cursor-pointer hover:border-emerald-500/25 transition-colors">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${pred.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col mt-2.5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{pred.label}</span>
                    <span className="text-sm font-extrabold text-slate-800 mt-0.5">{pred.value}</span>
                    <span className="text-[8px] font-bold text-emerald-600 mt-1 leading-none">{pred.conf}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 5: Recharts Grid (6 sparklines) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'Farm Health Trend', metric: '94/100', color: '#10b981', data: healthData, type: 'line' },
            { label: 'Yield Forecast', metric: '3.2 Tonnes', color: '#059669', data: yieldData, type: 'line' },
            { label: 'Water Usage', metric: '18,450 L', color: '#3b82f6', data: waterData, type: 'bar' },
            { label: 'Temperature Trend', metric: '27°C Avg', color: '#f59e0b', data: tempData, type: 'area' },
            { label: 'Disease Risk Trend', metric: 'Low', color: '#10b981', data: diseaseData, type: 'line' },
            { label: 'Profit Prediction', metric: '₹48,750', color: '#8b5cf6', data: profitData, type: 'line' },
          ].map((chart, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm text-left flex flex-col justify-between min-h-[140px] select-none">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{chart.label}</span>
                <span className="text-base font-black text-slate-800 font-outfit mt-1 leading-none">{chart.metric}</span>
              </div>
              
              {/* Sparkline chart container */}
              <div className="h-12 w-full mt-4">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    {chart.type === 'line' ? (
                      <LineChart data={chart.data}>
                        <Tooltip contentStyle={{ display: 'none' }} />
                        <Line type="monotone" dataKey="value" stroke={chart.color} strokeWidth={2.5} dot={false} />
                      </LineChart>
                    ) : chart.type === 'bar' ? (
                      <BarChart data={chart.data}>
                        <Tooltip contentStyle={{ display: 'none' }} />
                        <Bar dataKey="value" fill={chart.color} radius={[2, 2, 0, 0]} />
                      </BarChart>
                    ) : (
                      <AreaChart data={chart.data}>
                        <Tooltip contentStyle={{ display: 'none' }} />
                        <defs>
                          <linearGradient id={`grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={chart.color} stopOpacity={0.4}/>
                            <stop offset="95%" stopColor={chart.color} stopOpacity={0.0}/>
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="value" stroke={chart.color} strokeWidth={2} fill={`url(#grad-${idx})`} />
                      </AreaChart>
                    )}
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT PANEL: Health Score, Zones, Quick Actions, Timeline (Spans 25%) */}
      <div className="w-full xl:w-[320px] bg-slate-50 border-t xl:border-t-0 xl:border-l border-slate-200/50 p-6 flex flex-col space-y-6 overflow-y-auto flex-shrink-0">
        
        {/* Component 1: AI Farm Health Score Circular Progress */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm text-center select-none text-left">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">AI Farm Health</span>
            <span className="flex items-center gap-1 py-0.5 px-2 rounded-full bg-emerald-50 border border-emerald-200/20 text-[9px] font-bold text-emerald-600">
              <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
              Live
            </span>
          </div>

          <div className="flex flex-col items-center">
            {/* Gauge */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="56" cy="56" r="48" className="text-slate-100" strokeWidth="8" stroke="currentColor" fill="transparent" />
                <circle cx="56" cy="56" r="48" className="text-emerald-500" strokeWidth="8" stroke="currentColor" fill="transparent" strokeDasharray={301.6} strokeDashoffset={301.6 * (1 - 0.94)} />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-extrabold text-slate-800 font-outfit">94</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase leading-none">/100</span>
              </div>
            </div>
            
            <div className="mt-3.5 flex flex-col items-center">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Farm Health Score</span>
              <span className="text-sm font-black text-emerald-600 font-outfit mt-0.5">Excellent</span>
            </div>
          </div>

          {/* Health Index Checklist variables with chevrons */}
          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
            {[
              { label: 'AI Confidence', value: '96%', icon: Sparkles, color: 'text-emerald-600' },
              { label: 'Disease Risk', value: 'Low', icon: Shield, color: 'text-emerald-600' },
              { label: 'Water Status', value: 'Optimal', icon: Droplet, color: 'text-emerald-600' },
              { label: 'Expected Harvest', value: '19 Days', icon: Calendar, color: 'text-amber-600' },
              { label: 'Yield Prediction', value: 'High', icon: TrendingUp, color: 'text-emerald-600' },
            ].map((check, idx) => {
              const Icon = check.icon;
              return (
                <div key={idx} className="flex items-center justify-between text-xs font-semibold text-slate-500 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-slate-400" />
                    <span>{check.label}</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold">
                    <span className={check.color}>{check.value}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Component 2: Crop Zones Layout info */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col space-y-4 text-left select-none">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Crop Zones</span>
            <button onClick={() => toast.info("Configure block maps.")} className="text-[10px] font-bold text-emerald-600 hover:underline cursor-pointer">View All</button>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Block A', status: 'Healthy', size: '4.2 Acres', color: 'text-emerald-600 bg-emerald-500/10' },
              { label: 'Block B', status: 'Needs Irrigation', size: '0.8 Acres', color: 'text-amber-600 bg-amber-500/10' },
              { label: 'Block C', status: 'Disease Monitoring', size: '0.6 Acres', color: 'text-blue-600 bg-blue-500/10' },
            ].map((zone, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/50">
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-slate-800">{zone.label}</span>
                  <span className="text-[9px] font-bold text-slate-400 mt-0.5 uppercase tracking-wide">Tomato &bull; {zone.size}</span>
                </div>
                <span className={`text-[8.5px] font-black px-2 py-1 rounded-lg uppercase ${zone.color}`}>{zone.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Component 3: Quick Actions */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col space-y-4 text-left select-none">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Quick Actions</span>

          <div className="grid grid-cols-2 gap-2 text-slate-600 text-xs font-bold">
            {[
              { label: 'Scan Crop', icon: Camera, action: () => toast.info("Opening scanner diagnosis...") },
              { label: 'Ask AI', icon: Bot, action: () => toast.info("Opening AI Chatbot...") },
              { label: 'Generate Report', icon: FileText, action: () => toast.success("AI Crop report compiled.") },
              { label: 'Schedule Irrigation', icon: Droplet, action: () => toast.success("Irrigation delay sequence updated.") },
              { label: 'View Insights', icon: Eye, action: () => toast.info("Retrieving satellite twin records...") },
              { label: 'Export PDF', icon: Download, action: () => toast.success("AI Twin timeline exported to PDF.") },
            ].map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={idx}
                  onClick={action.action}
                  className="flex items-center gap-2 p-2.5 border border-slate-100 hover:border-emerald-500/20 bg-slate-50/30 hover:bg-emerald-50/10 rounded-xl transition-all cursor-pointer truncate"
                >
                  <Icon className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="text-[10px] truncate">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Component 4: Chronological Farm Timeline Events */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm flex flex-col space-y-4 text-left select-none">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Farm Timeline</span>
            <button onClick={() => toast.info("Timeline audit history.")} className="text-[10px] font-bold text-emerald-600 hover:underline cursor-pointer">View All</button>
          </div>

          <div className="relative pl-4 border-l border-slate-200/80 space-y-4">
            {[
              { time: '08:30 AM', title: 'Rain detected', desc: '10mm rainfall in Anantapur', color: 'bg-blue-500 ring-blue-500/20' },
              { time: '07:15 AM', title: 'Irrigation delayed', desc: 'AI recommended postponement', color: 'bg-blue-500 ring-blue-500/20' },
              { time: 'Yesterday 06:20 PM', title: 'Disease scan completed', desc: 'Block C - Early Blight detected', color: 'bg-emerald-500 ring-emerald-500/20' },
              { time: 'Yesterday 04:45 PM', title: 'Treatment applied', desc: 'Copper fungicide recommended', color: 'bg-blue-500 ring-blue-500/20' },
              { time: 'Yesterday 11:30 AM', title: 'Harvest estimate updated', desc: 'Expected in 19 days', color: 'bg-amber-500 ring-amber-500/20' },
            ].map((event, idx) => (
              <div key={idx} className="relative">
                {/* Dot */}
                <span className={`absolute -left-[21.5px] top-1.5 w-2 h-2 rounded-full ring-4 ${event.color}`} />
                <div className="flex flex-col">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wide">{event.time}</span>
                  <span className="text-[11px] font-bold text-slate-800 mt-0.5">{event.title}</span>
                  <span className="text-[9px] font-semibold text-slate-400 mt-0.5">{event.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => toast.success("Full Farm history log database exported.")} className="w-full py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-[10px] rounded-xl transition-all shadow-sm active:scale-[0.99] cursor-pointer flex items-center justify-center gap-1">
            View Full Timeline
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

      </div>

    </div>
  );
}
