import React from 'react';
import { 
  Sprout, LayoutDashboard, Database, Leaf, Droplet, 
  CloudSun, LineChart, Landmark, Warehouse, ClipboardList, 
  FileBarChart, Settings, HelpCircle, ChevronRight, LogOut 
} from 'lucide-react';

export default function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'farm-twin', name: 'AI Farm Twin', icon: Database },
    { id: 'field-insights', name: 'Field Insights', icon: Leaf },
    { id: 'crop-health', name: 'Crop Health', icon: Sprout },
    { id: 'irrigation', name: 'Irrigation', icon: Droplet },
    { id: 'weather', name: 'Weather', icon: CloudSun },
    { id: 'market', name: 'Market Intelligence', icon: LineChart },
    { id: 'schemes', name: 'Government Schemes', icon: Landmark },
    { id: 'inventory', name: 'Inventory', icon: Warehouse },
    { id: 'timeline', name: 'Tasks & Timeline', icon: ClipboardList },
    { id: 'reports', name: 'Reports', icon: FileBarChart },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-66 bg-white border-r border-slate-200/60 flex flex-col h-screen sticky top-0 shrink-0 overflow-y-auto scrollbar-thin hidden md:flex">
      {/* Brand Logo */}
      <div className="p-6 border-b border-slate-100/80 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 shrink-0">
          <Sprout className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-bold text-slate-800 font-outfit leading-none">
            AgriFlow AI
          </h1>
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1.5">
            AI Farm Manager
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 flex-1 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                isActive 
                  ? 'bg-emerald-50 text-emerald-700 font-bold border-l-4 border-emerald-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
                  isActive ? 'text-emerald-600' : 'text-slate-400 group-hover:text-slate-600'
                }`} />
                <span>{item.name}</span>
              </div>
              {isActive && <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />}
            </button>
          );
        })}
      </nav>

      {/* Bottom Health & AI Widgets */}
      <div className="p-4 border-t border-slate-100/80 space-y-4">
        {/* Farm Health Gauge */}
        <div className="bg-slate-50/60 border border-slate-200/40 rounded-2xl p-4 flex flex-col items-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
            Farm Health Score
          </span>
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* SVG Ring Gauge */}
            <svg className="w-full h-full transform -rotate-90">
              <circle 
                cx="40" cy="40" r="32" 
                className="text-slate-100" 
                strokeWidth="5" stroke="currentColor" fill="transparent" 
              />
              <circle 
                cx="40" cy="40" r="32" 
                className="text-emerald-500 transition-all duration-1000" 
                strokeWidth="5" stroke="currentColor" fill="transparent" 
                strokeDasharray={201}
                strokeDashoffset={201 * (1 - 0.94)}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-xl font-bold text-slate-800 font-outfit">94</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase leading-none">/100</span>
            </div>
          </div>
          <div className="text-center mt-2.5">
            <span className="text-[11px] font-bold text-slate-700 block">Excellent</span>
            <span className="text-[9px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              +6% from yesterday
            </span>
          </div>
        </div>

        {/* AI Confidence Meter */}
        <div className="bg-slate-50/60 border border-slate-200/40 rounded-2xl p-4">
          <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            <span>AI Confidence</span>
            <span className="text-slate-700 font-outfit">96%</span>
          </div>
          <div className="w-full bg-slate-200/60 h-1.5 rounded-full overflow-hidden mb-1">
            <div className="bg-emerald-500 h-full rounded-full w-[96%]" />
          </div>
          <span className="text-[9px] font-bold text-emerald-600">High Confidence</span>
        </div>

        {/* Help & Support Card */}
        <div className="bg-emerald-600 text-white rounded-2xl p-4 relative overflow-hidden shadow-md shadow-emerald-700/10 group">
          <div className="absolute -right-8 -top-8 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-125 transition-transform" />
          <h4 className="text-xs font-bold font-outfit mb-1">Need assistance?</h4>
          <p className="text-[10px] text-emerald-100 leading-relaxed mb-3">
            Ask our AI agricultural expert about your crops.
          </p>
          <button 
            onClick={() => setActivePage('dashboard')} 
            className="w-full bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-2 rounded-xl text-[10px] transition-colors flex items-center justify-center gap-1 shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Help & Support
          </button>
        </div>

        {/* User Card */}
        <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop" 
            alt="User Profile" 
            className="w-8.5 h-8.5 rounded-xl object-cover shadow-sm border border-slate-200/50"
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-slate-800 truncate font-outfit">Dhanush</h4>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/20 px-1.5 py-0.5 rounded-full inline-block mt-0.5">
              Premium Plan
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
