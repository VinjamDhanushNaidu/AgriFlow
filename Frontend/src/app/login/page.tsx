"use client";

import React from 'react';
import Image from 'next/image';
import { Sprout } from 'lucide-react';
import LoginLeft from '../../components/auth/LoginLeft';
import LoginForm from '../../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50">
      
      {/* LEFT SIDE (50% on Desktop, Hidden/Restructured on Mobile) */}
      <LoginLeft />

      {/* RIGHT SIDE / MOBILE TOP SECTION (50% on Desktop, Full Width on Mobile) */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-10 lg:p-12 xl:p-16 relative overflow-y-auto">
        
        {/* Background decorative blurs for right side */}
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-emerald-400/5 blur-3xl -z-10" />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-green-300/5 blur-3xl -z-10" />

        {/* Mobile-Only Header & Illustration (visible below lg) */}
        <div className="flex lg:hidden flex-col items-center text-center space-y-6 mb-8 w-full max-w-[450px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/25">
              <Sprout className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-bold tracking-tight text-slate-900 font-outfit leading-none">
                AgriFlow AI
              </span>
              <span className="text-[9px] font-medium text-slate-500 tracking-wider uppercase mt-0.5">
                AI Farm Manager
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-outfit leading-tight">
            Your Digital Farm. <br />
            <span className="text-emerald-600">Smarter</span> Every Day.
          </h1>

          {/* Farm illustration for mobile */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            <Image
              src="/digital_farm.png"
              alt="Digital Farm Model Mobile"
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
        </div>

        {/* Login Card */}
        <LoginForm />

      </div>

    </div>
  );
}
