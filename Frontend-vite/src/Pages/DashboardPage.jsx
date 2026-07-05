import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CloudRain, ShieldAlert, Droplet, TrendingUp, 
  Calendar, CheckCircle2, ChevronRight, Bell, Clock, Info, 
  ArrowUpRight, AlertCircle, Bookmark, Compass, HelpCircle, X 
} from 'lucide-react';
import CustomChart from '../components/CustomChart';
import DigitalFarmTwin from '../components/DigitalFarmTwin';

export default function DashboardPage() {
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const briefingPoints = [
    { text: 'Weather looks favorable for farming activities.', icon: CloudRain, color: 'text-amber-500 bg-amber-50' },
    { text: 'Irrigation not required today due to soil moisture.', icon: Droplet, color: 'text-blue-500 bg-blue-50' },
    { text: 'Disease Risk: Low. All crops are healthy.', icon: ShieldAlert, color: 'text-emerald-500 bg-emerald-50' },
    { text: 'Tomato prices increased by 8% in local market.', icon: TrendingUp, color: 'text-emerald-500 bg-emerald-50' },
    { text: 'New Government Scheme available for drip irrigation.', icon: Compass, color: 'text-purple-500 bg-purple-50' },
  ];

  const tasks = [
    { time: '08:00 AM', title: 'Irrigation Check', desc: 'Drip irrigation system', status: 'Completed' },
    { time: '10:00 AM', title: 'Fertilizer Reminder', desc: 'Apply NPK 19:19:19', status: 'Pending' },
    { time: '12:00 PM', title: 'Crop Monitoring', desc: 'Tomato - Block A', status: 'In Progress' },
    { time: '03:00 PM', title: 'Market Review', desc: 'Check tomato prices', status: 'Pending' },
    { time: '05:00 PM', title: 'Harvest Planning', desc: 'Expected in 19 days', status: 'Upcoming' },
  ];

  const notifications = [
    { title: 'Rain expected tomorrow', desc: 'Carry out preventive measures', time: '10 min ago', icon: CloudRain, iconColor: 'text-blue-600 bg-blue-50' },
    { title: 'Disease risk increased in', desc: 'Tomato - Block B', time: '1 hr ago', icon: ShieldAlert, iconColor: 'text-amber-600 bg-amber-50' },
    { title: 'Tomato price increased by 8%', desc: 'In local market', time: '2 hrs ago', icon: TrendingUp, iconColor: 'text-emerald-600 bg-emerald-50' },
    { title: 'Inventory running low', desc: 'NPK 19:19:19', time: '3 hrs ago', icon: Droplet, iconColor: 'text-rose-600 bg-rose-50' },
    { title: 'New subsidy available', desc: 'Drip Irrigation Scheme', time: '5 hrs ago', icon: Compass, iconColor: 'text-purple-600 bg-purple-50' },
  ];

  const aiCards = [
    {
      id: 'weather',
      title: 'Weather Intelligence',
      status: 'Favorable',
      statusColor: 'text-amber-600 bg-amber-50 border-amber-200/40',
      recommendation: 'Perfect for farming activities.',
      confidence: '97%',
      desc: 'Weather predictions indicate a warm, sunny morning with light evening showers. No high-wind alerts, making it an excellent window for crop inspections and foliar spraying.'
    },
    {
      id: 'disease',
      title: 'Disease Prediction',
      status: 'Low Risk',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200/40',
      recommendation: 'Keep monitoring regularly.',
      confidence: '94%',
      desc: 'Deep learning vision models predict low spore levels for late blight. Keep greenhouse relative humidity below 75% to maintain this low risk level.'
    },
    {
      id: 'irrigation',
      title: 'Irrigation Recommendation',
      status: 'Not Required',
      statusColor: 'text-blue-600 bg-blue-50 border-blue-200/40',
      recommendation: 'Soil moisture is adequate.',
      confidence: '92%',
      desc: 'Soil moisture probes in Tomato Block-B show 38% saturation, which falls within the optimal root transpiration range. Postponing irrigation by 24h will save 12,400L of water.'
    },
    {
      id: 'market',
      title: 'Market Intelligence',
      status: 'Prices Rising',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200/40',
      recommendation: 'Good time to hold & sell.',
      confidence: '95%',
      desc: 'Market volume is down 14% this week. Wholesale tomato prices rose by 8% today to ₹24/kg. AI suggests preparing 60% of tomato crop for immediate harvest to lock in premium prices.'
    },
    {
      id: 'growth',
      title: 'Crop Growth Progress',
      status: 'On Track',
      statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200/40',
      recommendation: 'Maintain current nutrients.',
      confidence: '93%',
      desc: 'Tomato canopy covers 84% of the row length, which matches the target flowering phase. Continue standard NPK ratio fertigation to promote robust flower formation.'
    },
    {
      id: 'scheme',
      title: 'Government Scheme Match',
      status: '2 Schemes Found',
      statusColor: 'text-purple-600 bg-purple-50 border-purple-200/40',
      recommendation: 'You are eligible for benefits.',
      confidence: '91%',
      desc: 'You qualify for a 45% capital subsidy under the PM Krishi Sinchayee Yojana for drip irrigation upgrades. Application window closes in 14 days.'
    }
  ];

  const recentActivities = [
    { time: '07:30 AM', text: 'Rain predicted for tomorrow in Anantapur', category: 'Weather', catColor: 'bg-blue-50 text-blue-600' },
    { time: '06:15 AM', text: 'Irrigation postponed as per AI recommendation', category: 'Irrigation', catColor: 'bg-emerald-50 text-emerald-600' },
    { time: 'Yesterday 08:45 PM', text: 'Disease scan completed in Tomato - Block B', category: 'Crop Health', catColor: 'bg-emerald-50 text-emerald-600' },
    { time: 'Yesterday 06:30 PM', text: 'Preventive treatment recommended by AI', category: 'Crop Health', catColor: 'bg-emerald-50 text-emerald-600' },
    { time: 'Yesterday 04:20 PM', text: 'Harvest completed - Cucumber (0.8 Acres)', category: 'Harvest', catColor: 'bg-purple-50 text-purple-600' },
    { time: 'Yesterday 11:10 AM', text: 'Market price alert generated for Tomato', category: 'Market', catColor: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
      
      {/* Greetings Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 font-outfit">Good Morning, Dhanush 👋</h2>
          <p className="text-xs font-semibold text-slate-500 mt-1">Here's what's happening in your farm today.</p>
        </div>

        {/* Small inline weather widget */}
        <div className="flex items-center gap-3 bg-white border border-slate-200/60 rounded-2xl px-4 py-2 shadow-sm sm:hidden self-start">
          <CloudRain className="w-5 h-5 text-amber-500" />
          <div className="flex flex-col">
            <span className="text-xs font-extrabold text-slate-800 leading-none">27°C</span>
            <span className="text-[9px] font-semibold text-slate-400 mt-0.5">Anantapur, AP</span>
          </div>
        </div>
      </div>

      {/* Row 1: AI Briefing, 3D Farm Twin, Today's Tasks, Smart Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Column Left (Briefing & Twin) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Daily Briefing Card */}
            <div className="md:col-span-5 glass-card rounded-3xl p-5 border border-slate-200/50 flex flex-col justify-between min-h-[280px] bg-white">
              <div className="text-left">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI Daily Briefing</span>
                  <Sparkles className="w-4.5 h-4.5 text-emerald-500 animate-pulse-subtle" />
                </div>
                <ul className="space-y-3.5">
                  {briefingPoints.map((pt, i) => {
                    const Icon = pt.icon;
                    return (
                      <li key={i} className="flex items-center gap-3 text-xs font-semibold text-slate-600">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${pt.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="truncate">{pt.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button 
                onClick={() => setBriefingOpen(true)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-2xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/10 mt-6"
              >
                View Full Briefing
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Farm Twin (Modular component) */}
            <div className="md:col-span-7">
              <DigitalFarmTwin />
            </div>

          </div>
        </div>

        {/* Column Right (Today's Tasks & Alerts) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Today's Tasks */}
          <div className="glass-card rounded-3xl p-5 border border-slate-200/50 flex flex-col bg-white text-left">
            <div className="flex justify-between items-center mb-4 shrink-0">
              <h3 className="font-extrabold text-slate-800 font-outfit text-sm">Today's Tasks</h3>
              <button className="text-[10px] font-bold text-emerald-600 hover:underline">View All</button>
            </div>
            
            <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 flex-1 overflow-y-auto max-h-[160px] pr-1.5 scrollbar-thin">
              {tasks.map((task, idx) => (
                <div key={idx} className="flex items-start gap-4 text-xs relative pl-6">
                  <div className={`absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white ring-4 ring-slate-50 flex items-center justify-center ${
                    task.status === 'Completed' ? 'bg-emerald-500' :
                    task.status === 'In Progress' ? 'bg-blue-500 animate-pulse' : 'bg-slate-300'
                  }`} />
                  
                  <span className="text-[10px] font-bold text-slate-400 w-16 shrink-0 pt-0.5">{task.time}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 truncate">{task.title}</h4>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">{task.desc}</p>
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                    task.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                    task.status === 'In Progress' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'
                  }`}>{task.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Notifications */}
          <div className="glass-card rounded-3xl p-5 border border-slate-200/50 flex flex-col bg-white text-left">
            <div className="flex justify-between items-center mb-4 shrink-0">
              <h3 className="font-extrabold text-slate-800 font-outfit text-sm">Smart Notifications</h3>
              <button className="text-[10px] font-bold text-emerald-600 hover:underline">View All</button>
            </div>
            <div className="space-y-3.5 overflow-y-auto max-h-[160px] pr-1.5 scrollbar-thin">
              {notifications.map((notif, idx) => {
                const Icon = notif.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${notif.iconColor}`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-700 truncate">{notif.title}</h4>
                        <span className="text-[9px] text-slate-400 whitespace-nowrap ml-2 shrink-0">{notif.time}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">{notif.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Row 2: Six Premium AI Cards */}
      <div className="space-y-4">
        <h3 className="text-base font-extrabold text-slate-850 font-outfit text-left">Smart AI Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCards.map((card) => (
            <div 
              key={card.id}
              className="glass-card-dense rounded-2xl p-5 flex flex-col justify-between text-left transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 bg-white border border-slate-200/40"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <h4 className="text-xs font-bold text-slate-800 font-outfit">{card.title}</h4>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${card.statusColor}`}>
                    {card.status}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Recommendation</span>
                  <p className="text-xs text-slate-700 font-semibold leading-relaxed">{card.recommendation}</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-5">
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Confidence:</span>
                  <span className="text-xs font-extrabold text-emerald-600 font-outfit">{card.confidence}</span>
                </div>
                <button 
                  onClick={() => setSelectedCard(card)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 px-3.5 rounded-xl text-[10px] transition-colors flex items-center gap-1 shadow-sm"
                >
                  View Details
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Farm Analytics Overview (Charts) */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-extrabold text-slate-850 font-outfit text-left">Farm Analytics Overview</h3>
          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 border border-slate-200 px-3 py-1 rounded-xl">Custom Range</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <CustomChart 
            title="+6% this week"
            subtitle="Farm Health Trend"
            stats="94/100"
            color="green"
            data={[85, 87, 88, 90, 92, 94]}
            labels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
            changeText="6% this week"
            isChangePositive={true}
          />
          <CustomChart 
            title="+12% vs last season"
            subtitle="Yield Prediction"
            stats="3.2 Tonnes"
            color="green"
            data={[2.5, 2.7, 2.9, 3.1, 3.2]}
            labels={['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5']}
            changeText="12% vs last season"
            isChangePositive={true}
          />
          <CustomChart 
            title="Partly Cloudy"
            subtitle="Weather Trend"
            stats="27°C Avg"
            color="blue"
            type="bar"
            data={[24, 25, 27, 26, 28, 27, 26]}
            labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
            changeText="27°C Avg"
            isChangePositive={true}
          />
          <CustomChart 
            title="-8% vs last week"
            subtitle="Water Usage"
            stats="18,450 L"
            color="blue"
            data={[22000, 20500, 19800, 18450]}
            labels={['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4']}
            changeText="8% vs last week"
            isChangePositive={false}
          />
          <CustomChart 
            title="+15% vs last month"
            subtitle="Profit Estimation"
            stats="₹48,750"
            color="green"
            data={[35000, 38000, 42000, 45000, 48750]}
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
            changeText="15% vs last month"
            isChangePositive={true}
          />
          <CustomChart 
            title="+8% today"
            subtitle="Market Trend"
            stats="₹22 / kg"
            color="purple"
            data={[18, 20, 21, 24, 22]}
            labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
            changeText="8% today"
            isChangePositive={true}
          />
        </div>
      </div>

      {/* Row 4: Bottom Section (Activity Timeline & Farm Gauge) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Activity Timeline */}
        <div className="lg:col-span-8 glass-card rounded-3xl p-5 border border-slate-200/50 bg-white flex flex-col text-left">
          <div className="flex items-center justify-between mb-4 shrink-0">
            <h3 className="font-extrabold text-slate-800 font-outfit text-sm">Activity Timeline</h3>
            <span className="text-[10px] font-bold text-slate-400">Latest activities on your farm</span>
          </div>
          <div className="space-y-3.5 overflow-y-auto max-h-[220px] pr-1.5 scrollbar-thin flex-1">
            {recentActivities.map((act, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 last:border-0 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-[10px] font-bold text-slate-400 w-24 shrink-0">{act.time}</span>
                  <span className="font-bold text-slate-700 truncate max-w-sm sm:max-w-md">{act.text}</span>
                </div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ml-2 shrink-0 ${act.catColor}`}>
                  {act.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Farm Score Gauge Bottom Widget */}
        <div className="lg:col-span-4 glass-card rounded-3xl p-5 border border-slate-200/50 bg-white flex flex-col text-left justify-between">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-3 mb-3">
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Total Farm Score</span>
              <div className="text-3xl font-extrabold text-slate-800 font-outfit mt-0.5">94</div>
              <span className="text-[10px] font-bold text-emerald-600 mt-1 block">Excellent</span>
            </div>
            
            <div className="relative w-18 h-18 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="36" cy="36" r="30" className="text-slate-100" strokeWidth="4" stroke="currentColor" fill="transparent" />
                <circle cx="36" cy="36" r="30" className="text-emerald-500" strokeWidth="4" stroke="currentColor" fill="transparent" strokeDasharray={188.4} strokeDashoffset={188.4 * (1 - 0.94)} strokeLinecap="round" />
              </svg>
              <div className="absolute text-[10px] font-bold text-slate-400">94%</div>
            </div>
          </div>

          <div className="space-y-3.5">
            <div className="flex items-center justify-between py-1 border-b border-slate-100 pb-2">
              <div className="flex flex-col">
                <span className="text-[9px] font-semibold text-slate-400 uppercase">Top Performing Crop</span>
                <span className="text-xs font-bold text-slate-800 font-outfit mt-0.5">Tomato 🍅</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-semibold text-slate-400 uppercase">Health Score</span>
                <span className="text-xs font-bold text-emerald-600 font-outfit mt-0.5 block">96/100</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/40 rounded-2xl p-3 flex flex-col justify-between items-start gap-2">
              <div className="text-left">
                <span className="text-[9px] font-bold text-slate-400 uppercase">Next Recommended Action</span>
                <p className="text-[11px] text-slate-600 font-semibold leading-relaxed mt-1">
                  Apply micronutrients in Tomato - Block A
                </p>
              </div>
              <button className="text-[9px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5 border border-emerald-200/30 bg-emerald-50/50 hover:bg-emerald-50 px-2 py-1 rounded-lg transition-colors">
                View Details <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* AI Daily Briefing Modal */}
      <AnimatePresence>
        {briefingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl relative text-left"
            >
              <button 
                onClick={() => setBriefingOpen(false)}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-lg transition-all"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="flex items-center gap-2 border-b border-slate-100 pb-3.5 mb-4.5">
                <Sparkles className="w-5.5 h-5.5 text-emerald-500" />
                <h4 className="font-extrabold text-slate-900 font-outfit text-base">AI Daily Insights</h4>
              </div>
              
              <div className="space-y-4 text-xs text-slate-600">
                <div className="bg-emerald-50 border border-emerald-200/20 rounded-2xl p-4">
                  <h5 className="font-bold text-emerald-800 flex items-center gap-1.5 mb-1.5 text-xs uppercase">
                    <CloudRain className="w-4 h-4" /> Weather Advisory
                  </h5>
                  <p className="leading-relaxed">
                    Local forecasts indicate high moisture precipitation starting around 4:00 PM today. Postpone any planned pesticide spraying to avoid runoff.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200/20 rounded-2xl p-4">
                  <h5 className="font-bold text-blue-800 flex items-center gap-1.5 mb-1.5 text-xs uppercase">
                    <Droplet className="w-4 h-4" /> Soil Moisture Status
                  </h5>
                  <p className="leading-relaxed">
                    Moisture saturation is at an optimal 38% in the root zone. AI advises against supplemental watering, conserving approximately 12,400 liters of water.
                  </p>
                </div>

                <div className="bg-rose-50 border border-rose-200/20 rounded-2xl p-4">
                  <h5 className="font-bold text-rose-800 flex items-center gap-1.5 mb-1.5 text-xs uppercase">
                    <ShieldAlert className="w-4 h-4" /> Pathogen Risk Report
                  </h5>
                  <p className="leading-relaxed">
                    Disease index for early blight is currently low (12%). Keep close ventilation on the greenhouses during peak humidity times tonight.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setBriefingOpen(false)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-2xl text-xs transition-colors mt-6 shadow-md"
              >
                Acknowledge Briefing
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* AI Recommendation details Modal */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl relative text-left"
            >
              <button 
                onClick={() => setSelectedCard(null)}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-lg transition-all"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3.5 mb-4.5">
                <Sparkles className="w-5.5 h-5.5 text-emerald-500" />
                <h4 className="font-extrabold text-slate-900 font-outfit text-base">{selectedCard.title}</h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status:</span>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${selectedCard.statusColor}`}>
                    {selectedCard.status}
                  </span>
                </div>

                <div className="bg-slate-50 border border-slate-200/40 rounded-2xl p-4 text-xs leading-relaxed text-slate-600">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">AI Recommendation</span>
                  <p className="font-bold text-slate-800 text-xs mb-3">{selectedCard.recommendation}</p>
                  
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Analysis Detail</span>
                  <p className="font-semibold">{selectedCard.desc}</p>
                </div>

                <div className="flex items-center gap-2 justify-end pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">AI Confidence Score:</span>
                  <span className="text-sm font-extrabold text-emerald-600 font-outfit">{selectedCard.confidence}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Dismiss
                </button>
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors shadow-sm"
                >
                  Apply Recommendation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
