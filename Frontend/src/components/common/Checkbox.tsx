import React, { forwardRef } from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <label className="flex items-center space-x-2.5 cursor-pointer select-none">
        <input
          type="checkbox"
          ref={ref}
          className={`w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 focus:ring-opacity-25 focus:ring-2 accent-emerald-600 transition-colors cursor-pointer ${className}`}
          {...props}
        />
        <span className="text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-700 transition-colors">
          {label}
        </span>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
