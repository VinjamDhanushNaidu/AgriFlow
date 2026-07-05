import React, { useState } from 'react';
import { 
  Search, Bell, Globe, CloudSun, ChevronDown, 
  Menu, X, Sparkles, AlertTriangle, Droplet, TrendingUp 
} from 'lucide-react';

export default function Navbar({ onMobileMenuClick, showMobileMenu }) {
  const [langOpen, setLangOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');

  const notifications = [
    {
      id: 1,
      type: 'weather',
      icon: CloudSun,
      iconColor: 'text-amber-500 bg-amber-50',
      title: 'Rain expected tomorrow',
      time: '10 min ago',
      desc: 'AI recommends postponing irrigation activities.'
    },
    {
      id: 2,
      type: 'disease',
      icon: AlertTriangle,
      iconColor: 'text-rose-500 bg-rose-50',
      title: 'Disease risk increased',
      time: '1 hr ago',
      desc: 'Early blight risk index increased in Tomato Block-B.'
    },
    {
      id: 3,
      type: 'market',
      icon: TrendingUp,
      iconColor: 'text-emerald-500 bg-emerald-50',
      title: 'Tomato price increased by 8%',
      time: '2 hrs ago',
      desc: 'Current rates rose to ₹24/kg in nearby wholesale markets.'
    },
    {
      id: 4,
      type: 'inventory',
      icon: Droplet,
      iconColor: 'text-blue-500 bg-blue-50',
      title: 'Inventory running low',
      time: '3 hrs ago',
      desc: 'NPK 19:19:19 fertilizer stock is below safety limit (2 bags left).'
    }
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 border-b border-slate-200/50 backdrop-blur-md shrink-0">
      <div className="px-6 h-18 flex items-center justify-between">
        
        {/* Left Side: Mobile Menu Trigger + Search */}
        <div className="flex items-center gap-4 flex-1 max-w-lg">
          <button 
            onClick={onMobileMenuClick}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 md:hidden transition-colors"
          >
            {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Search Bar */}
          <div className="relative w-full max-w-md hidden sm:block">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input 
              type="text" 
              placeholder="Search farm metrics, alerts, or AI twin..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2 pl-9 pr-4 text-xs font-semibold text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/80 transition-all placeholder:text-slate-400"
            />
            <div className="absolute right-3.5 top-2.5 hidden md:flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-200/60 text-[9px] font-bold text-slate-500 border border-slate-300/40">
              <span>⌘</span><span>K</span>
            </div>
          </div>
        </div>

        {/* Right Side: Widgets & Profile */}
        <div className="flex items-center gap-4.5">
          {/* Weather Widget */}
          <div className="hidden lg:flex items-center gap-3 bg-slate-50 border border-slate-200/50 rounded-2xl px-4 py-1.5 text-right transition-all hover:bg-slate-100/50">
            <CloudSun className="w-5 h-5 text-amber-500 animate-pulse-subtle shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-800 leading-none">27°C</span>
              <span className="text-[9px] font-semibold text-slate-500 mt-1">Partly Cloudy · Anantapur, AP</span>
            </div>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => { setLangOpen(!langOpen); setNotifOpen(false); }}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-800 bg-slate-50 hover:bg-slate-100/50 border border-slate-200/50 px-3.5 py-2 rounded-2xl transition-all"
            >
              <Globe className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{selectedLang}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-slate-100 rounded-2xl shadow-xl p-1.5 z-45">
                {['English', 'Telugu', 'Hindi', 'Spanish'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notification Bell */}
          <div className="relative">
            <button 
              onClick={() => { setNotifOpen(!notifOpen); setLangOpen(false); }}
              className={`w-10 h-10 rounded-2xl border flex items-center justify-center relative transition-all ${
                notifOpen 
                  ? 'bg-slate-100 border-slate-300 text-slate-800 shadow-inner' 
                  : 'bg-slate-50 border-slate-200/50 text-slate-600 hover:bg-slate-100/50 hover:text-slate-800'
              }`}
            >
              <Bell className="w-4.5 h-4.5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>

            {notifOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-100 rounded-2xl shadow-xl z-45 overflow-hidden">
                <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                  <h4 className="text-xs font-bold text-slate-800 font-outfit">Notifications</h4>
                  <span className="text-[9px] font-bold bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded-full">4 New</span>
                </div>
                <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                  {notifications.map((n) => {
                    const Icon = n.icon;
                    return (
                      <div key={n.id} className="p-4 hover:bg-slate-50/50 transition-colors cursor-pointer">
                        <div className="flex gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${n.iconColor}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h5 className="text-xs font-bold text-slate-800 truncate">{n.title}</h5>
                              <span className="text-[9px] text-slate-400 whitespace-nowrap ml-2 shrink-0">{n.time}</span>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">{n.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="p-2.5 text-center border-t border-slate-100 bg-slate-50/20">
                  <button className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                    Mark all as read
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile (Mobile / Small Screens Show Avatar, Large Show Detail) */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2.5">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop" 
                alt="Avatar" 
                className="w-9 h-9 rounded-2xl object-cover shadow-sm border border-slate-200"
              />
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-slate-800 font-outfit leading-none">Dhanush</span>
                <span className="text-[9px] font-semibold text-emerald-600 mt-1 uppercase tracking-wider">Premium Plan</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}
