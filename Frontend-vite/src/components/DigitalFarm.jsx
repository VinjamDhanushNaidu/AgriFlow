import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, MapPin, Scale, Shield, 
  Sparkles, Calendar, Layers, Activity, ArrowRight 
} from 'lucide-react';
import digitalFarmImg from '../assets/digital_farm.png';

export default function DigitalFarm() {
  const farmDetails = [
    { 
      label: 'Location', 
      value: 'Anantapur, Andhra Pradesh', 
      icon: MapPin 
    },
    { 
      label: 'Farm Size', 
      value: '5.6 Acres', 
      icon: Scale 
    },
    { 
      label: 'Primary Crop', 
      value: 'Tomato', 
      icon: Sprout 
    },
    { 
      label: 'Soil Type', 
      value: 'Black Soil', 
      icon: Layers 
    },
    { 
      label: 'Farm Health', 
      value: '94 / 100', 
      icon: Activity,
      isProgress: true,
      progressVal: 94
    },
    { 
      label: 'AI Confidence', 
      value: '96%', 
      icon: Sparkles 
    },
    { 
      label: 'Disease Risk', 
      value: 'Low', 
      icon: Shield,
      isRisk: true
    },
    { 
      label: 'Next Harvest', 
      value: '19 Days Left', 
      icon: Calendar 
    },
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/40">
      
      {/* Title / Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
          <Sprout className="w-4 h-4" />
          Meet Your Digital Farm
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit">
          Your farm now has a memory
        </h2>
        <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
          The AI learns from every season and continuously improves its recommendations, 
          giving you a detailed, live digital representation of your crops.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Isometric Farm Image & Explore CTA */}
        <div className="lg:col-span-6 flex flex-col space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 bg-gradient-to-tr from-emerald-500/5 to-teal-500/5 p-4 flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <img 
              src={digitalFarmImg} 
              alt="Digital Farm Isometric" 
              className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500" 
            />
            
            {/* Tech overlays */}
            <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-full px-3 py-1 text-[10px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Digital Twin Online
            </div>
          </motion.div>

          <div className="flex justify-start">
            <a
              href="#twin"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 px-6 rounded-full flex items-center gap-1.5 transition-colors duration-150 shadow-sm"
            >
              Explore Farm Twin
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Side: Status Information Card */}
        <div className="lg:col-span-6">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-6 md:p-8 border border-slate-200/60 shadow-xl"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-200/50 mb-6">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 font-outfit">
                  Green Valley Farm
                </h3>
                <span className="text-xs text-slate-400 mt-0.5">ID: AG-48902</span>
              </div>
              <span className="flex items-center gap-1 py-1 px-2.5 rounded-full bg-emerald-50 border border-emerald-200/20 text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </span>
            </div>

            {/* Grid Table Details */}
            <div className="space-y-4">
              {farmDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div 
                    key={detail.label}
                    className="flex items-center justify-between py-1 border-b border-slate-100/50 last:border-0 pb-3"
                  >
                    {/* Left: icon + label */}
                    <div className="flex items-center gap-3 text-slate-500">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold">{detail.label}</span>
                    </div>

                    {/* Right: Value or progress */}
                    <div className="flex items-center gap-4 text-right">
                      {detail.isProgress ? (
                        <div className="flex items-center gap-3">
                          <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${detail.progressVal}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.1 }}
                              className="bg-emerald-500 h-full rounded-full" 
                            />
                          </div>
                          <span className="text-xs font-bold text-slate-800 font-outfit">
                            {detail.value}
                          </span>
                        </div>
                      ) : detail.isRisk ? (
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {detail.value}
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-slate-800 font-outfit">
                          {detail.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>
        </div>

      </div>

    </section>
  );
}
