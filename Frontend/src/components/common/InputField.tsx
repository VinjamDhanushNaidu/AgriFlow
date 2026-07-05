import React, { forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: LucideIcon;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, icon: Icon, className = '', ...props }, ref) => {
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
            className={`w-full text-sm py-3 ${Icon ? 'pl-11' : 'px-4'} pr-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/80 transition-all duration-200 ${
              error ? 'border-red-500 focus:ring-red-500/10 focus:border-red-500' : ''
            } ${className}`}
            {...props}
          />
        </div>
        {error && <span className="text-[11px] font-semibold text-red-500">{error}</span>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
