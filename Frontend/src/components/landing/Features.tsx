"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Sprout, CloudSun, HeartHandshake, 
  TrendingUp, BellRing, Sparkles 
} from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      title: 'AI Assistant',
      desc: 'Your farming expert available 24/7 to answer any question about crops, irrigation, pest management, and soil health.',
      icon: Bot,
      color: 'text-emerald-500 bg-emerald-500/10 border border-emerald-500/20',
      glow: 'group-hover:shadow-emerald-500/10'
    },
    {
      title: 'AI Farm Twin',
      desc: 'A complete digital model of your farm that learns from history, tracks moisture, maps layout, and predicts yield outcomes.',
      icon: Sprout,
      color: 'text-green-500 bg-green-500/10 border border-green-500/20',
      glow: 'group-hover:shadow-green-500/10'
    },
    {
      title: 'Weather Intelligence',
      desc: 'Hyperlocal weather predictions, micro-climate insights, and real-time precipitation radars tailored for your exact location.',
      icon: CloudSun,
      color: 'text-amber-500 bg-amber-500/10 border border-amber-500/20',
      glow: 'group-hover:shadow-amber-500/10'
    },
    {
      title: 'Crop Health',
      desc: 'Utilize vision sensors and plant analysis models to detect pathogens early, prevent disease spread, and optimize treatment.',
      icon: HeartHandshake,
      color: 'text-rose-500 bg-rose-500/10 border border-rose-500/20',
      glow: 'group-hover:shadow-rose-500/10'
    },
    {
      title: 'Market Intelligence',
      desc: 'Track global commodity prices, forecast regional demands, negotiate crops, and schedule harvests for maximum revenue.',
      icon: TrendingUp,
      color: 'text-blue-500 bg-blue-500/10 border border-blue-500/20',
      glow: 'group-hover:shadow-blue-500/10'
    },
    {
      title: 'Smart Alerts',
      desc: 'Instant push alerts for critical weather warnings, disease threats, price drops, and available government subsidies.',
      icon: BellRing,
      color: 'text-purple-500 bg-purple-500/10 border border-purple-500/20',
      glow: 'group-hover:shadow-purple-500/10'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/40">
      
      {/* Title */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          Our Capabilities
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit flex items-center gap-3">
          <Sprout className="w-6 h-6 text-emerald-500" />
          Core Features
          <Sprout className="w-6 h-6 text-emerald-500" />
        </h2>
        <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
          Advanced agricultural technologies simplified into intuitive tools to maximize 
          your farm efficiency and profitability.
        </p>
      </div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {featuresList.map((feat) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={feat.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group glass-card rounded-2xl p-6 md:p-8 border border-slate-200/60 hover:border-emerald-500/40 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer ${feat.glow}`}
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feat.color}`}>
                <Icon className="w-6 h-6" />
              </div>

              {/* Text info */}
              <h3 className="text-lg font-bold text-slate-900 font-outfit mb-3 group-hover:text-emerald-600 transition-colors">
                {feat.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}
