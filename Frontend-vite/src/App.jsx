import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AiAssistant from './components/AiAssistant';
import DashboardPage from './Pages/DashboardPage';
import TimelinePage from './Pages/TimelinePage';
import DigitalFarmTwin from './components/DigitalFarmTwin';
import { 
  Leaf, Sprout, Droplet, CloudSun, LineChart, 
  Landmark, Warehouse, FileBarChart, Settings, 
  ArrowLeft, Cpu, Activity, Thermometer, ShieldAlert 
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Subsystem detail config mapping
  const subsystemData = {
    'farm-twin': {
      title: 'AI Farm Twin Model',
      icon: Cpu,
      color: 'emerald',
      desc: 'Real-time 3D telemetry and digital simulation of farm soil, moisture, and vegetation indexes.',
      stats: [
        { label: 'Twin Satellites Connected', value: '4 / 4' },
        { label: 'Mesh Nodes Online', value: '12 / 12' },
        { label: 'Simulation Confidence', value: '98.4%' },
        { label: 'Virtual Twin State', value: 'Synced' }
      ]
    },
    'field-insights': {
      title: 'Field Insights & Diagnostics',
      icon: Leaf,
      color: 'emerald',
      desc: 'Advanced telemetry on soil biochemistry, canopy density, and drone vegetation index maps.',
      stats: [
        { label: 'Soil Organic Carbon', value: '1.8%' },
        { label: 'Average NDVI Index', value: '0.78' },
        { label: 'Nitrogen (N) Content', value: 'Optimal' },
        { label: 'Phosphorus (P) Content', value: 'Optimal' }
      ]
    },
    'crop-health': {
      title: 'Crop Health Diagnostics',
      icon: Sprout,
      color: 'emerald',
      desc: 'Computer-vision leaf scanners and thermal cameras tracking plant pathogens, pests, and growth stress.',
      stats: [
        { label: 'Pathogen Threat Index', value: '12 / 100' },
        { label: 'Defoliation Rate', value: '0.8%' },
        { label: 'Leaf Wetness Sensor', value: '14%' },
        { label: 'Scans Performed (24h)', value: '142' }
      ]
    },
    'irrigation': {
      title: 'Smart Irrigation Telemetry',
      icon: Droplet,
      color: 'blue',
      desc: 'Closed-loop irrigation automation utilizing weather predictions and real-time volumetric water sensors.',
      stats: [
        { label: 'Water Saved (This Month)', value: '48,200 Liters' },
        { label: 'Volumetric Water Content', value: '38.2%' },
        { label: 'Active Valve Controllers', value: '4 / 4' },
        { label: 'Next Scheduled Cycle', value: 'Postponed' }
      ]
    },
    'weather': {
      title: 'Microclimate Weather Station',
      icon: CloudSun,
      color: 'amber',
      desc: 'Localized hyper-weather station reading barometric pressure, wind currents, and vapor demand deficits.',
      stats: [
        { label: 'Ambient Temperature', value: '27.4 °C' },
        { label: 'Wind Velocity', value: '14.2 km/h' },
        { label: 'Evapotranspiration (ET0)', value: '4.8 mm/day' },
        { label: 'Atmospheric Pressure', value: '1012 hPa' }
      ]
    },
    'market': {
      title: 'Market Intelligence & Mandis',
      icon: LineChart,
      color: 'purple',
      desc: 'Real-time market price monitoring, supply forecasting, and crop yield arbitrage algorithms.',
      stats: [
        { label: 'Current Wholesale Price', value: '₹24.00 / kg' },
        { label: 'Local Market Volume', value: '14.2 Tons' },
        { label: 'AI Arbitration Signal', value: 'Hold & Sell' },
        { label: 'Estimated Profit Margins', value: '+14%' }
      ]
    },
    'schemes': {
      title: 'Government Scheme Eligibility',
      icon: Landmark,
      color: 'purple',
      desc: 'AI matching tool identifying national subsidy opportunities and crop insurance policies.',
      stats: [
        { label: 'Matched Opportunities', value: '2 Available' },
        { label: 'Estimated Subsidy Cashflow', value: '₹42,000' },
        { label: 'Application Deadline', value: '14 Days Left' },
        { label: 'Pre-requisites Met', value: '100%' }
      ]
    },
    'inventory': {
      title: 'Warehouse & Seed Inventory',
      icon: Warehouse,
      color: 'amber',
      desc: 'RFIDs tracking seeds, organic fertilizers, pesticides, and machinery maintenance intervals.',
      stats: [
        { label: 'Seed Stock (Tomato)', value: '12 bags' },
        { label: 'NPK Fertilizer', value: '2 bags (Low)' },
        { label: 'Irrigation Fittings', value: 'Optimal' },
        { label: 'Machinery Status', value: 'All Inspected' }
      ]
    },
    'reports': {
      title: 'AI Analytical Reports',
      icon: FileBarChart,
      color: 'emerald',
      desc: 'Automated seasonal summaries and soil health certifications generated as PDF/CSV audits.',
      stats: [
        { label: 'Latest Generated Report', value: 'May 2026 Monthly' },
        { label: 'Soil Quality Index', value: '92 / 100' },
        { label: 'Resource Usage Report', value: 'Optimized' },
        { label: 'Compliance Index', value: '100% Met' }
      ]
    },
    'settings': {
      title: 'System Preferences & Integrations',
      icon: Settings,
      color: 'slate',
      desc: 'Configure API integrations, IoT mesh node protocols, alert webhooks, and device settings.',
      stats: [
        { label: 'Active Webhooks', value: '2 Online' },
        { label: 'IoT Protocol', value: 'LoRaWAN Mesh' },
        { label: 'Data Encryption', value: 'AES-256' },
        { label: 'API Connection', value: 'Healthy' }
      ]
    }
  };

  const renderActivePage = () => {
    if (activePage === 'dashboard') {
      return <DashboardPage />;
    }
    if (activePage === 'timeline') {
      return <TimelinePage />;
    }
    
    // Subsystem page fallback
    const sub = subsystemData[activePage];
    if (sub) {
      const Icon = sub.icon;
      const colorClass = 
        sub.color === 'emerald' ? 'text-emerald-600 bg-emerald-50 border-emerald-250/20' :
        sub.color === 'blue' ? 'text-blue-600 bg-blue-50 border-blue-250/20' :
        sub.color === 'amber' ? 'text-amber-600 bg-amber-50 border-amber-250/20' :
        sub.color === 'purple' ? 'text-purple-600 bg-purple-50 border-purple-250/20' :
        'text-slate-650 bg-slate-50 border-slate-200';

      const buttonColor = 
        sub.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' :
        sub.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
        sub.color === 'amber' ? 'bg-amber-500 hover:bg-amber-600' :
        sub.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
        'bg-slate-800 hover:bg-slate-900';

      return (
        <div className="flex-1 p-6 flex flex-col gap-6 text-left overflow-y-auto">
          <div>
            <button 
              onClick={() => setActivePage('dashboard')}
              className="text-xs font-bold text-slate-500 hover:text-slate-850 flex items-center gap-1 bg-white border border-slate-200/50 rounded-xl px-3 py-1.5 shadow-sm transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Details Panel */}
            <div className="lg:col-span-7 glass-card rounded-3xl p-6 border border-slate-200/50 bg-white">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${colorClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800 font-outfit leading-none">{sub.title}</h2>
                  <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Telemetry
                  </span>
                </div>
              </div>

              <p className="text-xs font-semibold text-slate-500 leading-relaxed mb-6">{sub.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sub.stats.map((stat, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200/30 rounded-2xl p-4 text-left">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{stat.label}</span>
                    <span className="text-base font-extrabold text-slate-800 font-outfit mt-1.5 block">{stat.value}</span>
                  </div>
                ))}
              </div>

              <button className={`${buttonColor} text-white font-bold py-3 px-6 rounded-2xl text-xs transition-colors shadow-md mt-6`}>
                Configure Analytics Settings
              </button>
            </div>

            {/* Farm twin view embed on sidebar */}
            {activePage !== 'farm-twin' ? (
              <div className="lg:col-span-5">
                <DigitalFarmTwin />
              </div>
            ) : (
              <div className="lg:col-span-5 glass-card rounded-3xl p-6 border border-slate-200/50 bg-white flex flex-col items-center justify-center text-center py-12">
                <Activity className="w-10 h-10 text-emerald-600 animate-pulse-subtle mb-3" />
                <h4 className="text-sm font-bold text-slate-800 font-outfit">Virtual Farm Environment Ready</h4>
                <p className="text-xs text-slate-400 max-w-xs mt-1.5">Go back to the main Command Center to explore visual sensor nodes.</p>
                <button 
                  onClick={() => setActivePage('dashboard')}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-xl text-xs mt-4 shadow-sm"
                >
                  Go to Command Center
                </button>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="flex-1 p-6 text-center text-slate-400 flex flex-col items-center justify-center">
        <Info className="w-8 h-8 text-slate-300 mb-2" />
        <p className="text-xs font-semibold">Page under construction</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 font-sans flex relative">
      
      {/* Desktop Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Mobile Drawer Sidebar */}
      <AnimatePresence>
        {showMobileSidebar && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileSidebar(false)}
              className="fixed inset-0 bg-slate-950"
            />
            {/* Sidebar content container */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="relative w-64 bg-white h-full flex flex-col shadow-2xl z-50"
            >
              <Sidebar 
                activePage={activePage} 
                setActivePage={(page) => {
                  setActivePage(page);
                  setShowMobileSidebar(false);
                }} 
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Navbar */}
        <Navbar 
          onMobileMenuClick={() => setShowMobileSidebar(!showMobileSidebar)} 
          showMobileMenu={showMobileSidebar}
        />
        
        {/* Active Page View */}
        {renderActivePage()}
      </div>

      {/* Floating AI Chat Assistant */}
      <AiAssistant />
    </div>
  );
}
