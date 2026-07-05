"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play, ArrowRight, Bot, BarChart3, Database, Zap, Star } from 'lucide-react';
import DashboardCard from './DashboardCard';

export default function Hero() {
  const quickFeatures = [
    { 
      name: 'AI Assistant', 
      desc: '24/7 Expert Advice', 
      icon: Bot, 
      color: 'text-emerald-500 bg-emerald-50' 
    },
    { 
      name: 'Smart Predictions', 
      desc: 'Predict Risk Early', 
      icon: BarChart3, 
      color: 'text-blue-500 bg-blue-50' 
    },
    { 
      name: 'Data-Driven', 
      desc: 'Optimize Yields', 
      icon: Database, 
      color: 'text-purple-500 bg-purple-50' 
    },
    { 
      name: 'Automation', 
      desc: 'Streamlined Tasks', 
      icon: Zap, 
      color: 'text-amber-500 bg-amber-50' 
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pb-28 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-emerald-300/10 blur-3xl -z-10" />
      <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-green-200/10 blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content (Spans 5 on desktop) */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6 md:space-y-8">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-700"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            Flowpoint Hackathon 2026 Demo
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-outfit leading-tight">
              Your Personal <br />
              <span className="text-gradient-green">AI Farm Manager</span>
            </h1>
            
            <p className="text-lg font-bold text-slate-800 font-outfit">
              One AI Assistant. One Digital Farm. <br />
              Smarter Farming Through Artificial Intelligence.
            </p>
            
            <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-xl">
              AgriFlow AI creates a digital twin of every farm, predicts risks before they happen, 
              automates workflows, and helps farmers make smarter decisions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/signup"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-3.5 px-7 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/15 hover:shadow-xl duration-200 w-full sm:w-auto"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <button
              className="bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base py-3.5 px-7 rounded-full flex items-center justify-center gap-2 border border-slate-200 transition-colors duration-150 w-full sm:w-auto"
            >
              <Play className="w-4 h-4 fill-current text-slate-400" />
              Watch Demo
            </button>
          </motion.div>

          {/* Four feature badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full border-t border-slate-200/50 pt-8"
          >
            {quickFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={feat.name}
                  className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/40 border border-slate-200/30 hover:shadow-md hover:border-emerald-500/10 transition-all duration-300"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${feat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 block truncate max-w-full">
                    {feat.name}
                  </span>
                  <span className="text-[9px] font-semibold text-slate-400 mt-0.5 block truncate max-w-full">
                    {feat.desc}
                  </span>
                </div>
              );
            })}
          </motion.div>

        </div>

        {/* Right Content - Floatable Dashboard */}
        <div className="lg:col-span-7 flex justify-center items-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent blur-2xl rounded-full scale-75 -z-10" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 7, 
              ease: "easeInOut" 
            }}
            className="w-full"
          >
            <DashboardCard />
          </motion.div>
        </div>

      </div>

    </section>
  );
}
