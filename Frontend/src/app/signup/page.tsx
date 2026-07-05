"use client";

import React from 'react';
import Link from 'next/link';
import { Sprout } from 'lucide-react';
import OnboardingWizard from '../../components/auth/OnboardingWizard';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      
      {/* Background blurs */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-emerald-400/5 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-green-300/5 blur-3xl -z-10" />

      {/* Top Header */}
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto py-2 flex-shrink-0 z-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-sm">
            <Sprout className="w-4.5 h-4.5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-bold tracking-tight text-slate-900 font-outfit leading-none">
              AgriFlow AI
            </span>
            <span className="text-[8px] font-medium text-slate-500 tracking-wider uppercase mt-0.5">
              AI Farm Manager
            </span>
          </div>
        </Link>
        <Link 
          href="/login" 
          className="text-xs sm:text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors"
        >
          Sign In instead
        </Link>
      </header>

      {/* Centered Wizard Content */}
      <main className="flex-grow flex items-center justify-center my-8 z-10 w-full">
        <OnboardingWizard />
      </main>

      {/* Footer */}
      <footer className="text-center text-[10px] sm:text-xs text-slate-400 font-semibold flex-shrink-0 z-10">
        &copy; 2026 AgriFlow AI. All rights reserved.
      </footer>

    </div>
  );
}
