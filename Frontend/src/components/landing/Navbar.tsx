"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sprout, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Product', hasDropdown: true },
    { name: 'Features', hasDropdown: false },
    { name: 'Resources', hasDropdown: true },
    { name: 'About', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 border-b border-slate-200/50 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/25">
              <Sprout className="w-5.5 h-5.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-outfit leading-none">
                AgriFlow AI
              </span>
              <span className="text-[10px] font-medium text-slate-500 tracking-wider uppercase mt-1">
                AI Farm Manager
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors duration-200 flex items-center gap-1 group"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors duration-200" />
                )}
              </a>
            ))}
          </nav>

          {/* Right actions (Login & Get Started CTA) */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/login"
              className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-2.5 px-5 rounded-full flex items-center gap-1.5 transition-all shadow-md shadow-emerald-600/10 hover:shadow-lg duration-200"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/50 bg-white px-4 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-emerald-600 transition-colors duration-150 py-2 flex items-center justify-between"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-200/50 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center font-semibold text-sm py-3 text-slate-600 hover:text-emerald-600"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-emerald-600 text-white font-semibold text-center py-3 rounded-full flex items-center justify-center gap-1.5 hover:bg-emerald-700 transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
