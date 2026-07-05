import React, { forwardRef, useState } from 'react';
import { LucideIcon, Eye, EyeOff } from 'lucide-react';

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: LucideIcon;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, error, icon: Icon, className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="flex flex-col space-y-1.5 w-full">
        <label className="text-xs font-bold text-slate-700 tracking-wide" htmlFor={props.id || props.name}>
          {label}
        </label>
        <div className="relative">
          {Icon && (
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Icon className="w-4.5 h-4.5" />
            </div>
          )}
          <input
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            className={`w-full text-sm py-3 ${Icon ? 'pl-11' : 'px-4'} pr-11 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/80 transition-all duration-200 ${
              error ? 'border-red-500 focus:ring-red-500/10 focus:border-red-500' : ''
            } ${className}`}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
          >
            {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
          </button>
        </div>
        {error && <span className="text-[11px] font-semibold text-red-500">{error}</span>}
      </div>
    );
  }
);

PasswordField.displayName = 'PasswordField';
