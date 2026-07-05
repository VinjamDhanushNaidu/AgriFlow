import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomChart({ 
  type = 'area', 
  data = [], 
  labels = [], 
  color = 'green', 
  height = 120, 
  title = '', 
  subtitle = '',
  stats = '',
  changeText = '',
  isChangePositive = true
}) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const colors = {
    green: {
      stroke: '#16a34a',
      fill: 'url(#gradient-green)',
      dot: '#15803d',
      gradient: ['rgba(22, 163, 74, 0.25)', 'rgba(22, 163, 74, 0.0)']
    },
    blue: {
      stroke: '#3b82f6',
      fill: 'url(#gradient-blue)',
      dot: '#1d4ed8',
      gradient: ['rgba(59, 130, 246, 0.25)', 'rgba(59, 130, 246, 0.0)']
    },
    purple: {
      stroke: '#a855f7',
      fill: 'url(#gradient-purple)',
      dot: '#7e22ce',
      gradient: ['rgba(168, 85, 247, 0.25)', 'rgba(168, 85, 247, 0.0)']
    },
    amber: {
      stroke: '#f59e0b',
      fill: 'url(#gradient-amber)',
      dot: '#b45309',
      gradient: ['rgba(245, 158, 11, 0.25)', 'rgba(245, 158, 11, 0.0)']
    }
  };

  const activeColor = colors[color] || colors.green;

  // Chart layout calculations
  const paddingX = 10;
  const paddingY = 15;
  const chartHeight = height - paddingY * 2;
  const chartWidth = 260; // Standard size fallback

  const maxVal = Math.max(...data, 1);
  const minVal = Math.min(...data, 0);
  const valRange = maxVal - minVal;

  const points = data.map((val, index) => {
    const x = paddingX + (index / (data.length - 1)) * (chartWidth - paddingX * 2);
    const y = paddingY + chartHeight - ((val - minVal) / valRange) * chartHeight;
    return { x, y, val, label: labels[index] };
  });

  // Create path string for line / area
  const getLinePath = () => {
    if (points.length === 0) return '';
    return points.reduce((path, p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      // Smooth curve calculation using bezier control points
      const prev = points[i - 1];
      const cpX1 = prev.x + (p.x - prev.x) / 2;
      const cpY1 = prev.y;
      const cpX2 = prev.x + (p.x - prev.x) / 2;
      const cpY2 = p.y;
      return `${path} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p.x} ${p.y}`;
    }, '');
  };

  const getAreaPath = () => {
    const linePath = getLinePath();
    if (!linePath) return '';
    return `${linePath} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    
    // Find closest index
    let closestIdx = 0;
    let minDiff = Infinity;
    points.forEach((p, i) => {
      const diff = Math.abs(p.x - mouseX);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    });

    setHoverIndex(closestIdx);
    setTooltipPos({
      x: points[closestIdx].x,
      y: points[closestIdx].y
    });
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="glass-card-dense rounded-2xl p-4.5 flex flex-col justify-between h-56 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-slate-200/50">
      
      {/* Header Info */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{subtitle}</span>
          <h4 className="text-xs font-bold text-slate-700 mt-0.5">{title}</h4>
        </div>
        <div className="text-right">
          <div className="text-sm font-extrabold text-slate-800 font-outfit">{stats}</div>
          {changeText && (
            <span className={`text-[9px] font-bold flex items-center gap-0.5 justify-end mt-0.5 ${
              isChangePositive ? 'text-emerald-600' : 'text-slate-500'
            }`}>
              {isChangePositive ? '↑' : '↓'} {changeText}
            </span>
          )}
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div 
        ref={containerRef}
        className="relative flex-1 mt-4 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <svg viewBox={`0 0 260 ${height}`} className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="gradient-green" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="gradient-blue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="gradient-purple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="gradient-amber" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1={paddingX} y1={paddingY} x2={260 - paddingX} y2={paddingY} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3" />
          <line x1={paddingX} y1={paddingY + chartHeight / 2} x2={260 - paddingX} y2={paddingY + chartHeight / 2} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3" />
          <line x1={paddingX} y1={height - paddingY} x2={260 - paddingX} y2={height - paddingY} stroke="#e2e8f0" strokeWidth="1" />

          {type === 'area' && points.length > 1 && (
            <motion.path 
              d={getAreaPath()} 
              fill={activeColor.fill}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}

          {(type === 'line' || type === 'area') && points.length > 1 && (
            <motion.path 
              d={getLinePath()} 
              fill="none" 
              stroke={activeColor.stroke} 
              strokeWidth="2.5" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          )}

          {type === 'bar' && points.map((p, i) => {
            const barWidth = Math.max(12, (260 - paddingX * 2) / data.length - 8);
            const barHeight = height - paddingY - p.y;
            return (
              <motion.rect
                key={i}
                x={p.x - barWidth / 2}
                y={p.y}
                width={barWidth}
                height={barHeight}
                rx="3.5"
                fill={hoverIndex === i ? activeColor.stroke : `${activeColor.stroke}cc`}
                initial={{ height: 0, y: height - paddingY }}
                animate={{ height: barHeight, y: p.y }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
              />
            );
          })}

          {/* Interactive Hover Line */}
          {hoverIndex !== null && (
            <line 
              x1={tooltipPos.x} 
              y1={paddingY} 
              x2={tooltipPos.x} 
              y2={height - paddingY} 
              stroke="#cbd5e1" 
              strokeWidth="1.5" 
              strokeDasharray="2" 
            />
          )}

          {/* Interactive Hover Dot */}
          {hoverIndex !== null && (type === 'line' || type === 'area') && (
            <circle 
              cx={tooltipPos.x} 
              cy={tooltipPos.y} 
              r="4.5" 
              fill={activeColor.dot} 
              stroke="white" 
              strokeWidth="2" 
            />
          )}
        </svg>

        {/* Hover Tooltip Overlay */}
        {hoverIndex !== null && (
          <div 
            className="absolute z-10 pointer-events-none bg-slate-900 text-white rounded-xl py-1.5 px-2.5 text-[9px] font-bold shadow-md flex flex-col gap-0.5 shrink-0"
            style={{ 
              left: `${(tooltipPos.x / 260) * 100}%`,
              top: `${Math.max(5, (tooltipPos.y / height) * 100 - 45)}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <span>{points[hoverIndex].label}</span>
            <span className="text-emerald-400 font-outfit text-xs font-extrabold">{points[hoverIndex].val}</span>
          </div>
        )}
      </div>

      {/* Footer labels */}
      <div className="flex justify-between text-[8px] font-bold text-slate-400 mt-2 border-t border-slate-100/60 pt-1.5 px-1 uppercase tracking-wider">
        {labels.slice(0, 1).map((lbl) => <span key={lbl}>{lbl}</span>)}
        {labels.length > 2 && <span>{labels[Math.floor(labels.length / 2)]}</span>}
        {labels.slice(-1).map((lbl) => <span key={lbl}>{lbl}</span>)}
      </div>

    </div>
  );
}
