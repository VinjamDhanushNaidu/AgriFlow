import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import farmerCtaImg from '../assets/farmer_cta.png';

export default function CtaBanner() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 border border-emerald-800/30 text-white shadow-2xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
      >
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-500/5 blur-3xl -z-0 pointer-events-none" />

        {/* Text Content */}
        <div className="z-10 flex-1 space-y-6 max-w-xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-outfit leading-tight">
            Ready to Build the <br className="hidden sm:inline" />
            <span className="text-emerald-400">Farm of Tomorrow?</span>
          </h2>
          
          <p className="text-sm sm:text-base text-emerald-100/70 leading-relaxed max-w-lg">
            Let AI manage your farm while you focus on growing. Automate irrigation, 
            predict disease risks, and track market value in real-time.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="#get-started"
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm py-3 px-6 rounded-full flex items-center gap-1.5 transition-colors duration-150 shadow-md shadow-emerald-500/20"
            >
              Start Farming Smarter
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
            
            <button
              className="bg-transparent hover:bg-white/5 text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center gap-2 border border-white/20 hover:border-white/30 transition-all duration-150"
            >
              <Play className="w-4 h-4 fill-current text-white/70" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Image on Right (Spans half) */}
        <div className="z-10 w-full md:w-2/5 lg:w-[35%] flex justify-center flex-shrink-0">
          <div className="relative rounded-2xl overflow-hidden border border-emerald-800/40 shadow-xl max-w-[280px] sm:max-w-[320px] md:max-w-none">
            <img 
              src={farmerCtaImg} 
              alt="Farmer with tablet" 
              className="w-full h-auto object-cover transform hover:scale-[1.03] transition-transform duration-500" 
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Stats Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-emerald-500/20 rounded-xl p-2.5 flex items-center gap-2">
              <div className="w-7.5 h-7.5 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <span className="text-xs font-bold font-outfit">96%</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">AI Yield Prediction</span>
                <span className="text-[10px] text-white font-semibold">Tomato Crop: High Yield</span>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
