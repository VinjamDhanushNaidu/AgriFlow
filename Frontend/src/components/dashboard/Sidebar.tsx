"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Sprout, Bot, LayoutGrid, Activity, CloudSun, TrendingUp, Building, 
  Calendar, Archive, BarChart3, Settings, Pin, Star, Plus, Search, 
  ChevronDown, MessageSquare, Shield, Lock, Leaf, Cloud, Droplet 
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const isAssistant = pathname?.includes('/assistant');

  // Navigation Links
  const navLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
    { name: 'AI Assistant', href: '/dashboard/assistant', icon: Bot },
    { name: 'AI Farm Twin', href: '/dashboard/farm-twin', icon: Sprout },
    { name: 'Crop Health', href: '#crop-health', icon: Activity },
    { name: 'Weather', href: '#weather', icon: CloudSun },
    { name: 'Market Intelligence', href: '#market', icon: TrendingUp },
    { name: 'Government Schemes', href: '#schemes', icon: Building },
    { name: 'Timeline', href: '#timeline', icon: Calendar },
    { name: 'Inventory', href: '#inventory', icon: Archive },
    { name: 'Reports', href: '#reports', icon: BarChart3 },
    { name: 'Settings', href: '#settings', icon: Settings },
  ];

  // Chat History Lists
  const todayChats = [
    { id: 'chat1', name: 'Disease Detection', time: '10:24 AM', icon: Leaf, active: true },
    { id: 'chat2', name: 'Weather Discussion', time: '09:15 AM', icon: Cloud },
    { id: 'chat3', name: 'Market Prices', time: '08:40 AM', icon: TrendingUp },
    { id: 'chat4', name: 'Farm Health Report', time: '07:30 AM', icon: Activity },
  ];

  const yesterdayChats = [
    { id: 'chat5', name: 'Irrigation Advice', time: 'Yesterday', icon: Droplet },
    { id: 'chat6', name: 'Government Schemes', time: 'Yesterday', icon: Building },
    { id: 'chat7', name: 'Tomato Growth', time: 'Yesterday', icon: Sprout },
  ];

  const pinnedChats = [
    { id: 'chat8', name: 'Farm Overview' },
    { id: 'chat9', name: 'Crop Planning 2024' },
  ];

  const favoriteChats = [
    { id: 'chat10', name: 'Weekly Farm Summary' },
    { id: 'chat11', name: 'Tomato Block A' },
  ];

  return (
    <aside className="w-[260px] bg-white border-r border-slate-200/50 flex flex-col justify-between h-screen sticky top-0 z-20 flex-shrink-0">
      
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-100 flex items-center gap-2.5 flex-shrink-0">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20">
            <Sprout className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-800 font-outfit leading-none">
              AgriFlow AI
            </span>
            <span className="text-[9px] font-medium text-slate-400 tracking-wider uppercase mt-1">
              AI Farm Manager
            </span>
          </div>
        </Link>
      </div>

      {/* Main Sidebar Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
        
        {/* CONDITIONAL RENDER: ASSISTANT CHAT HISTORY SIDEBAR */}
        {isAssistant ? (
          <div className="space-y-5">
            {/* New Chat Button */}
            <button className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow active:scale-[0.99] cursor-pointer">
              <Plus className="w-4 h-4" />
              New Chat
            </button>

            {/* Search Box */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full text-xs py-2.5 pl-9 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-colors"
              />
            </div>

            {/* Today's Chats */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 block mb-2">Today</span>
              {todayChats.map((chat) => {
                const Icon = chat.icon;
                return (
                  <button
                    key={chat.id}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer ${
                      chat.active 
                        ? 'bg-emerald-50 text-emerald-700 font-bold border border-emerald-100/35' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`w-4 h-4 flex-shrink-0 ${chat.active ? 'text-emerald-600' : 'text-slate-400'}`} />
                      <span className="text-xs truncate">{chat.name}</span>
                    </div>
                    <span className="text-[9px] font-semibold text-slate-400 whitespace-nowrap">{chat.time}</span>
                  </button>
                );
              })}
            </div>

            {/* Yesterday's Chats */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 block mb-2">Yesterday</span>
              {yesterdayChats.map((chat) => {
                const Icon = chat.icon;
                return (
                  <button
                    key={chat.id}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span className="text-xs truncate">{chat.name}</span>
                    </div>
                    <span className="text-[9px] font-semibold text-slate-400 whitespace-nowrap">{chat.time}</span>
                  </button>
                );
              })}
            </div>

            {/* Pinned Chats */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 block mb-2">Pinned Conversations</span>
              {pinnedChats.map((chat) => (
                <button
                  key={chat.id}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <MessageSquare className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span className="text-xs truncate">{chat.name}</span>
                  </div>
                  <Pin className="w-3.5 h-3.5 text-slate-400 rotate-45 flex-shrink-0" />
                </button>
              ))}
            </div>

            {/* Favorite Chats */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 block mb-2">Favorite Chats</span>
              {favoriteChats.map((chat) => (
                <button
                  key={chat.id}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <MessageSquare className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span className="text-xs truncate">{chat.name}</span>
                  </div>
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 flex-shrink-0" />
                </button>
              ))}
            </div>

            {/* Premium Upgrade Card */}
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50/30 border border-emerald-100/50 rounded-2xl flex flex-col space-y-3 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-emerald-500/5" />
              <h4 className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 uppercase tracking-wide">
                <Shield className="w-4 h-4" />
                AI Assistant Pro
              </h4>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                Unlimited conversations, advanced insights & priority support.
              </p>
              <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] rounded-lg shadow-sm hover:shadow transition-colors cursor-pointer">
                Upgrade Now
              </button>
            </div>
          </div>
        ) : (
          /* STANDARD NAVIGATION SIDEBAR */
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-700 font-black border border-emerald-100/30' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  <Icon className={`w-4.5 h-4.5 flex-shrink-0 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>

      {/* Bottom Footer - Help Card & User Profile */}
      <div className="p-4 border-t border-slate-100 space-y-4 flex-shrink-0">
        
        {/* Help Card (only visible on navigation sidebar) */}
        {!isAssistant && (
          <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col space-y-2">
            <span className="text-[10px] font-bold text-slate-700 leading-tight">Need Help?</span>
            <span className="text-[9px] text-slate-400 font-medium leading-relaxed">Talk to our AI Assistant</span>
            <Link 
              href="/dashboard/assistant" 
              className="py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[9px] text-center rounded-lg shadow-sm hover:shadow transition-colors cursor-pointer"
            >
              Chat Now
            </Link>
          </div>
        )}

        {/* User Card */}
        <div className="flex items-center justify-between p-1 bg-white hover:bg-slate-50 border border-transparent hover:border-slate-100/50 rounded-xl transition-all cursor-pointer">
          <div className="flex items-center gap-2.5 truncate">
            {/* User Profile Avatar */}
            <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xs uppercase shadow-sm flex-shrink-0">
              D
            </div>
            <div className="flex flex-col truncate text-left">
              <span className="text-xs font-bold text-slate-800 truncate">Dhanush</span>
              <span className="text-[9px] font-bold text-slate-400 mt-0.5 uppercase tracking-wider">Premium Plan</span>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
        </div>

      </div>

    </aside>
  );
}
