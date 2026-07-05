import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, Settings2, Sliders, MapPin, Activity, 
  Sparkles, ShieldCheck, Calendar, Info, Thermometer, 
  Droplet, Eye, ShieldAlert 
} from 'lucide-react';
import digitalFarmImg from '../assets/digital_farm.png';

export default function DigitalFarmTwin() {
  const [activeSensor, setActiveSensor] = useState(null);

  const sensors = [
    {
      id: 'sns-1',
      name: 'Temp/Humidity Sensor #1',
      type: 'weather',
      x: '30%',
      y: '35%',
      temp: '26.8°C',
      humidity: '62%',
      status: 'optimal'
    },
    {
      id: 'sns-2',
      name: 'Soil Moisture Sensor #4',
      type: 'moisture',
      x: '55%',
      y: '45%',
      moisture: '38%',
      npk: 'Optimal',
      status: 'optimal'
    },
    {
      id: 'sns-3',
      name: 'Crop Health Camera #2',
      type: 'camera',
      x: '75%',
      y: '32%',
      health: '94%',
      risk: 'None Detected',
      status: 'optimal'
    },
    {
      id: 'sns-4',
      name: 'Drip Valve Controller #3',
      type: 'irrigation',
      x: '42%',
      y: '68%',
      flowRate: '12L/min',
      status: 'idle'
    }
  ];

  const details = [
    { label: 'Farm Size', value: '5.6 Acres', icon: Maximize2 },
    { label: 'Current Crop', value: 'Tomato', icon: Info, extra: '🍅' },
    { label: 'Growth Stage', value: 'Flowering', icon: Activity },
    { label: 'Soil Type', value: 'Black Soil', icon: Settings2 },
    { label: 'Farm Health', value: '94 / 100', icon: Activity, isProgress: true, progressVal: 94 },
    { label: 'AI Confidence', value: '96%', icon: Sparkles },
    { label: 'Disease Risk', value: 'Low', icon: ShieldCheck, isGreen: true },
    { label: 'Expected Harvest', value: '19 Days Left', icon: Calendar }
  ];

  return (
    <div className="glass-card rounded-3xl p-5 md:p-6 border border-slate-200/50 flex flex-col h-full bg-white/70">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4 shrink-0">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <h3 className="font-extrabold text-slate-800 font-outfit text-sm sm:text-base">
              AI Farm Twin
            </h3>
            <span className="flex items-center gap-1.5 py-0.5 px-2 rounded-full bg-emerald-50 border border-emerald-200/25 text-[9px] font-bold text-emerald-600 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          </div>
          <span className="text-[10px] font-semibold text-slate-400 mt-0.5">Real-time digital representation of your farm</span>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-1.5">
          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100/60 rounded-xl transition-all border border-slate-200/20">
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100/60 rounded-xl transition-all border border-slate-200/20">
            <Settings2 className="w-3.5 h-3.5" />
          </button>
          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100/60 rounded-xl transition-all border border-slate-200/20">
            <Sliders className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Isometric Farm Display */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200/40 bg-slate-50 flex items-center justify-center p-2 mb-5 group min-h-[220px] flex-1">
        
        {/* Farm Twin image */}
        <img 
          src={digitalFarmImg} 
          alt="Digital Farm Twin 3D" 
          className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
        />

        {/* Overlay Grid lines simulation */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-slate-900/5 pointer-events-none" />

        {/* Live digital twin banner */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-slate-200/50 rounded-full px-3 py-1 text-[9px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Twin Model Verified
        </div>

        {/* Interactive Sensor Nodes */}
        {sensors.map((sensor) => (
          <button
            key={sensor.id}
            onClick={() => setActiveSensor(activeSensor?.id === sensor.id ? null : sensor)}
            className="absolute p-1 focus:outline-none cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: sensor.x, top: sensor.y }}
          >
            <span className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-white items-center justify-center text-white text-[8px] font-bold shadow-md hover:bg-emerald-600 transition-colors">
                •
              </span>
            </span>
          </button>
        ))}

        {/* Sensor details popup card */}
        <AnimatePresence>
          {activeSensor && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-4 inset-x-4 bg-slate-900/95 backdrop-blur-md border border-slate-800 text-white rounded-2xl p-4 shadow-xl flex items-center justify-between z-20"
            >
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 shrink-0">
                  {activeSensor.type === 'weather' && <Thermometer className="w-4 h-4 text-amber-400" />}
                  {activeSensor.type === 'moisture' && <Droplet className="w-4 h-4 text-blue-400" />}
                  {activeSensor.type === 'camera' && <Eye className="w-4 h-4 text-emerald-400" />}
                  {activeSensor.type === 'irrigation' && <Droplet className="w-4 h-4 text-cyan-400 animate-pulse" />}
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold font-outfit">{activeSensor.name}</h4>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-300 mt-1">
                    {activeSensor.temp && <span>Temp: <strong className="text-white">{activeSensor.temp}</strong></span>}
                    {activeSensor.humidity && <span>Humidity: <strong className="text-white">{activeSensor.humidity}</strong></span>}
                    {activeSensor.moisture && <span>Moisture: <strong className="text-white">{activeSensor.moisture}</strong></span>}
                    {activeSensor.npk && <span>NPK: <strong className="text-white">{activeSensor.npk}</strong></span>}
                    {activeSensor.health && <span>Health: <strong className="text-emerald-400">{activeSensor.health}</strong></span>}
                    {activeSensor.risk && <span>Risk: <strong className="text-emerald-400">{activeSensor.risk}</strong></span>}
                    {activeSensor.flowRate && <span>Flow: <strong className="text-white">{activeSensor.flowRate}</strong></span>}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setActiveSensor(null)} 
                className="text-slate-400 hover:text-white p-1 hover:bg-slate-800 rounded-lg transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Metadata Detail Grid (Bottom) */}
      <div className="border-t border-slate-100 pt-4 shrink-0">
        {/* Farm name details */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-800 font-outfit leading-none">Green Valley Farm</h4>
            <span className="text-[10px] text-slate-400 mt-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              Anantapur, Andhra Pradesh
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 px-2 py-0.5 rounded">ID: AG-48902</span>
        </div>

        {/* 2x4 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50/50 border border-slate-200/40 rounded-2xl p-3.5">
          {details.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col text-left">
                <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">{item.label}</span>
                {item.isProgress ? (
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-12 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full w-[94%]" />
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-800 font-outfit">94</span>
                  </div>
                ) : item.isGreen ? (
                  <span className="text-[10px] font-extrabold text-emerald-600 flex items-center gap-0.5 mt-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {item.value}
                  </span>
                ) : (
                  <span className="text-[10px] font-extrabold text-slate-800 font-outfit mt-1 flex items-center gap-1">
                    {item.value} {item.extra && <span>{item.extra}</span>}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
