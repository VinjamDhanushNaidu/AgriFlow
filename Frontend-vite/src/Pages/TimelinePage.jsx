import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CloudRain, ShieldAlert, Droplet, TrendingUp, 
  Calendar, CheckCircle2, ChevronRight, Bell, Clock, Info, 
  ArrowUpRight, AlertCircle, Bookmark, Compass, HelpCircle, X, 
  MoreVertical, Check, RefreshCw, Cpu, Layers, BarChart3
} from 'lucide-react';

export default function TimelinePage() {
  const [activeTab, setActiveTab] = useState('All Events');
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Toggles State
  const [automationStates, setAutomationStates] = useState({
    smartIrrigation: true,
    diseaseMonitoring: true,
    weatherAlerts: true,
    marketIntelligence: true,
    nutrientRecommendations: true
  });

  const categories = [
    'All Events', 'AI Decisions', 'Irrigation', 'Disease', 
    'Weather', 'Harvest', 'Market', 'Manual'
  ];

  const timelineEvents = [
    // TODAY
    {
      id: 'ev-1',
      dateGroup: 'TODAY',
      date: 'May 26, 2026',
      time: '09:30 AM',
      title: 'AI Recommendation Generated',
      desc: 'Delay irrigation by one day due to optimal soil moisture and 60% humidity forecast.',
      category: 'AI Decisions',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-250/20',
      icon: Sparkles,
      iconColor: 'bg-emerald-500 text-white shadow-emerald-500/10'
    },
    {
      id: 'ev-2',
      dateGroup: 'TODAY',
      date: 'May 26, 2026',
      time: '08:15 AM',
      title: 'Irrigation Skipped',
      desc: 'Automatic irrigation skipped in Block A & B based on AI recommendation.',
      category: 'Irrigation',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-250/20',
      icon: Droplet,
      iconColor: 'bg-blue-500 text-white shadow-blue-500/10'
    },
    {
      id: 'ev-3',
      dateGroup: 'TODAY',
      date: 'May 26, 2026',
      time: '06:45 AM',
      title: 'Weather Update',
      desc: 'Partly cloudy with 27°C temperature and 40% humidity.',
      category: 'Weather',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-250/20',
      icon: CloudRain,
      iconColor: 'bg-amber-500 text-white shadow-amber-500/10'
    },
    // YESTERDAY
    {
      id: 'ev-4',
      dateGroup: 'YESTERDAY',
      date: 'May 25, 2026',
      time: '07:20 PM',
      title: 'Disease Scan Completed',
      desc: 'Early Blight detected in Block C. Confidence: 96%. Area is flagged for review.',
      category: 'Disease',
      badgeClass: 'bg-rose-50 text-rose-700 border-rose-250/20',
      icon: ShieldAlert,
      iconColor: 'bg-rose-500 text-white shadow-rose-500/10'
    },
    {
      id: 'ev-5',
      dateGroup: 'YESTERDAY',
      date: 'May 25, 2026',
      time: '04:30 PM',
      title: 'Treatment Applied',
      desc: 'Copper fungicide applied in Block C as preventive measure.',
      category: 'Manual',
      badgeClass: 'bg-slate-100 text-slate-700 border-slate-200',
      icon: CheckCircle2,
      iconColor: 'bg-slate-600 text-white shadow-slate-650/10'
    },
    {
      id: 'ev-6',
      dateGroup: 'YESTERDAY',
      date: 'May 25, 2026',
      time: '11:10 AM',
      title: 'Irrigation Completed',
      desc: 'Drip irrigation completed in Block A & B for 45 minutes.',
      category: 'Irrigation',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-250/20',
      icon: Droplet,
      iconColor: 'bg-blue-500 text-white shadow-blue-500/10'
    },
    // MAY 24
    {
      id: 'ev-7',
      dateGroup: 'MAY 24',
      date: 'May 24, 2026',
      time: '06:30 PM',
      title: 'Market Alert',
      desc: 'Tomato prices increased by 8% in local market. Volume traded is down.',
      category: 'Market',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-250/20',
      icon: TrendingUp,
      iconColor: 'bg-purple-500 text-white shadow-purple-500/10'
    },
    {
      id: 'ev-8',
      dateGroup: 'MAY 24',
      date: 'May 24, 2026',
      time: '10:15 AM',
      title: 'Harvest Estimate Updated',
      desc: 'Expected harvest in 19 days (June 14, 2026) with high yield.',
      category: 'AI Decisions',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-250/20',
      icon: Sparkles,
      iconColor: 'bg-emerald-500 text-white shadow-emerald-500/10'
    },
    // MAY 23
    {
      id: 'ev-9',
      dateGroup: 'MAY 23',
      date: 'May 23, 2026',
      time: '09:00 AM',
      title: 'AI Report Generated',
      desc: 'Weekly farm health report generated successfully. Score rose to 94.',
      category: 'AI Decisions',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-250/20',
      icon: Sparkles,
      iconColor: 'bg-emerald-500 text-white shadow-emerald-500/10'
    }
  ];

  const sidebarOverviewStats = [
    { label: 'Total Events', val: '128', icon: Layers, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'AI Decisions', val: '34', icon: Sparkles, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Irrigation Events', val: '18', icon: Droplet, color: 'text-blue-650 bg-blue-50' },
    { label: 'Disease Alerts', val: '9', icon: ShieldAlert, color: 'text-rose-600 bg-rose-50' },
    { label: 'Manual Actions', val: '22', icon: CheckCircle2, color: 'text-slate-650 bg-slate-50' },
    { label: 'Market Alerts', val: '11', icon: TrendingUp, color: 'text-purple-650 bg-purple-50' }
  ];

  const toggleAutomation = (key) => {
    setAutomationStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Group events by Date Group
  const filteredEvents = timelineEvents.filter(ev => {
    if (activeTab === 'All Events') return true;
    return ev.category === activeTab;
  });

  // Grouping helper
  const dateGroups = {};
  filteredEvents.forEach(ev => {
    if (!dateGroups[ev.dateGroup]) {
      dateGroups[ev.dateGroup] = [];
    }
    dateGroups[ev.dateGroup].push(ev);
  });

  return (
    <div className="flex-1 p-6 flex flex-col lg:flex-row gap-6 overflow-y-auto">
      
      {/* Left Area: Main Timeline */}
      <div className="flex-1 space-y-6 text-left">
        
        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 font-outfit flex items-center gap-1.5">
            Timeline & Automation ✨
          </h2>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            Track all farm activities, AI decisions, and automation in one place.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none border-b border-slate-200/50">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-2xl whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                activeTab === cat
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-350/20 shadow-sm'
                  : 'bg-white text-slate-500 border-slate-200 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Log Grid */}
        <div className="relative pl-4 sm:pl-8 before:absolute before:left-7 sm:before:left-11 before:top-4 before:bottom-4 before:w-[1.5px] before:bg-slate-100 space-y-8">
          {Object.keys(dateGroups).length === 0 ? (
            <div className="p-8 text-center text-slate-400 bg-white border border-slate-200/40 rounded-3xl">
              <Info className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-xs font-semibold">No events found in this category.</p>
            </div>
          ) : (
            Object.keys(dateGroups).map((groupKey) => (
              <div key={groupKey} className="space-y-4">
                
                {/* Date Group Header */}
                <div className="flex items-center gap-3 relative -ml-4 sm:-ml-8">
                  <div className="w-5 h-5 rounded-full bg-slate-50 border-2 border-slate-200/60 ring-4 ring-white flex items-center justify-center shrink-0 z-10" />
                  <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest bg-slate-50/50 px-2 py-0.5 rounded">
                    {groupKey} <span className="text-[9px] text-slate-400 font-semibold lowercase">· {dateGroups[groupKey][0].date}</span>
                  </span>
                </div>

                {/* Events list under this date */}
                <div className="space-y-4">
                  {dateGroups[groupKey].map((event) => {
                    const Icon = event.icon;
                    return (
                      <div 
                        key={event.id}
                        className="bg-white border border-slate-200/50 hover:border-slate-350/50 rounded-2xl p-4.5 flex gap-4 transition-all hover:shadow-sm relative text-left"
                      >
                        {/* Vertical Timeline Dot Overlay */}
                        <div className="absolute -left-[27px] sm:-left-[43px] top-6 z-10">
                          <div className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center ${event.iconColor}`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Event Content */}
                        <div className="flex-1 space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                            <div className="flex items-center gap-2.5">
                              <h4 className="text-xs font-bold text-slate-800 font-outfit">{event.title}</h4>
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${event.badgeClass}`}>
                                {event.category}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400 font-bold shrink-0">{event.time}</span>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed font-semibold">{event.desc}</p>
                          <div className="pt-2">
                            <button 
                              onClick={() => setSelectedEvent(event)}
                              className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50/40 hover:bg-emerald-50 border border-emerald-250/20 px-3 py-1 rounded-xl transition-all"
                            >
                              View Details
                            </button>
                          </div>
                        </div>

                        {/* Menu Options Button */}
                        <div className="relative shrink-0">
                          <button 
                            onClick={() => setActiveMenuId(activeMenuId === event.id ? null : event.id)}
                            className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>

                          {activeMenuId === event.id && (
                            <div className="absolute right-0 mt-1 w-36 bg-white border border-slate-100 rounded-2xl shadow-xl p-1 z-30">
                              <button 
                                onClick={() => { setActiveMenuId(null); setSelectedEvent(event); }}
                                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-slate-50 hover:text-emerald-700"
                              >
                                View Log Details
                              </button>
                              <button 
                                onClick={() => setActiveMenuId(null)}
                                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl text-slate-600 hover:bg-slate-50 hover:text-emerald-700"
                              >
                                Export Event
                              </button>
                              <button 
                                onClick={() => setActiveMenuId(null)}
                                className="w-full text-left px-3 py-2 text-xs font-semibold rounded-xl text-rose-500 hover:bg-rose-50 hover:text-rose-600"
                              >
                                Dismiss Alert
                              </button>
                            </div>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            ))
          )}

          {/* Load More Button */}
          <div className="flex justify-center pt-2 relative -ml-4 sm:-ml-8 z-10">
            <button className="bg-white hover:bg-slate-50 border border-slate-200 rounded-full px-5 py-2 text-xs font-bold text-slate-600 flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer">
              <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
              Load More Events
            </button>
          </div>
        </div>

      </div>

      {/* Right Sidebar: Timeline Summary & Automation Diagnostics */}
      <div className="w-full lg:w-76 space-y-6">
        
        {/* Date Filter selector */}
        <div className="bg-white border border-slate-250/50 rounded-2xl p-3 flex items-center justify-between shadow-sm text-xs font-bold text-slate-600">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>May 20 – May 26, 2024</span>
          </div>
          <button className="text-emerald-600 hover:underline">Filters</button>
        </div>

        {/* Timeline Overview */}
        <div className="glass-card rounded-3xl p-5 border border-slate-200/50 bg-white text-left">
          <h3 className="font-extrabold text-slate-800 font-outfit text-sm mb-4">Timeline Overview</h3>
          <div className="grid grid-cols-2 gap-3.5">
            {sidebarOverviewStats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200/30 rounded-2xl p-3 flex flex-col justify-between h-18">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}>
                      <Icon className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <span className="text-base font-extrabold text-slate-800 font-outfit">{item.val}</span>
                    <span className="text-[8px] text-slate-400 block mt-0.5">This Week</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Automation Status */}
        <div className="glass-card rounded-3xl p-5 border border-slate-200/50 bg-white text-left">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-extrabold text-slate-800 font-outfit text-sm">Automation Status</h3>
            <span className="text-[9px] font-bold text-emerald-600 hover:underline">View All</span>
          </div>

          <div className="space-y-4">
            {/* Toggles list */}
            {[
              { key: 'smartIrrigation', label: 'Smart Irrigation', desc: 'Watering via AI soil moisture' },
              { key: 'diseaseMonitoring', label: 'Disease Monitoring', desc: 'Scan visual crops daily' },
              { key: 'weatherAlerts', label: 'Weather Alerts', desc: 'Auto push weather forecasts' },
              { key: 'marketIntelligence', label: 'Market Intelligence', desc: 'Track mandi prices daily' },
              { key: 'nutrientRecommendations', label: 'Nutrient Recommendation', desc: 'Auto adjust fertigation NPK' }
            ].map((toggle) => (
              <div key={toggle.key} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0 pb-3">
                <div className="text-left max-w-[70%]">
                  <span className="text-xs font-bold text-slate-800 font-outfit">{toggle.label}</span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">{toggle.desc}</span>
                </div>
                {/* Switch toggle */}
                <button 
                  onClick={() => toggleAutomation(toggle.key)}
                  className={`w-10 h-5.5 rounded-full p-1 cursor-pointer transition-all duration-300 relative ${
                    automationStates[toggle.key] ? 'bg-emerald-600' : 'bg-slate-350'
                  }`}
                >
                  <motion.div 
                    layout
                    className="w-3.5 h-3.5 rounded-full bg-white shadow-sm absolute top-1"
                    style={{ left: automationStates[toggle.key] ? '1.35rem' : '0.25rem' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Highlights */}
        <div className="glass-card rounded-3xl p-5 border border-slate-200/50 bg-white text-left">
          <h3 className="font-extrabold text-slate-800 font-outfit text-sm mb-4">Recent Highlights</h3>
          <div className="space-y-4.5">
            {[
              { title: 'AI saved 1,200 L water this week', desc: 'Through smart irrigation decisions', time: 'Today 09:30 AM', color: 'text-blue-600 bg-blue-50' },
              { title: 'Disease detected early in Block C', desc: 'Early action taken, risk minimized', time: 'Yesterday 07:20 PM', color: 'text-rose-600 bg-rose-50' },
              { title: 'Expected profit increase by 15%', desc: 'Based on current market trend', time: 'May 24 06:30 PM', color: 'text-emerald-600 bg-emerald-50' }
            ].map((hl, idx) => (
              <div key={idx} className="flex gap-3 text-xs leading-normal">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                <div className="flex-1 text-left min-w-0">
                  <h4 className="font-bold text-slate-700 leading-snug">{hl.title}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">{hl.desc}</p>
                  <span className="text-[9px] text-slate-400 font-bold block mt-1">{hl.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Log details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl relative text-left"
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-lg transition-all"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3.5 mb-4.5">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${selectedEvent.iconColor}`}>
                  <selectedEvent.icon className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <h4 className="font-extrabold text-slate-900 font-outfit text-base">{selectedEvent.title}</h4>
                  <span className="text-[9px] text-slate-400 font-bold">{selectedEvent.date} · {selectedEvent.time}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Event Category:</span>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${selectedEvent.badgeClass}`}>
                    {selectedEvent.category}
                  </span>
                </div>

                <div className="bg-slate-50 border border-slate-200/40 rounded-2xl p-4 text-xs leading-relaxed text-slate-650">
                  <span className="text-[9px] font-bold text-slate-450 uppercase tracking-wider block mb-1">System Log Summary</span>
                  <p className="font-semibold text-slate-800">{selectedEvent.desc}</p>
                  
                  <span className="text-[9px] font-bold text-slate-455 uppercase tracking-wider block mb-1 mt-3">Device Information</span>
                  <p className="font-medium text-slate-500">Node ID: <strong className="text-slate-700">SNS-290</strong> · Signal: <strong className="text-slate-700">Excellent (-52 dBm)</strong> · Battery: <strong className="text-emerald-600">88%</strong></p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Close
                </button>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors shadow-sm"
                >
                  Mark Verified
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
