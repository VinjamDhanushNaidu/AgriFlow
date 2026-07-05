"use client";

import React from 'react';
import { Sprout, Leaf } from 'lucide-react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

const GithubIcon = (props: SVGProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props: SVGProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: SVGProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: SVGProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'AI Farm Twin', href: '#twin' },
        { name: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Help Center', href: '#help' },
        { name: 'Guides', href: '#guides' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Contact Us', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
      ],
    },
  ];

  const socialIcons = [
    { icon: GithubIcon, href: '#github' },
    { icon: TwitterIcon, href: '#twitter' },
    { icon: LinkedinIcon, href: '#linkedin' },
    { icon: YoutubeIcon, href: '#youtube' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-200/40">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-white">
                <Sprout className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-900 font-outfit leading-none">
                  AgriFlow AI
                </span>
                <span className="text-[9px] font-medium text-slate-500 tracking-wider uppercase mt-0.5">
                  AI Farm Manager
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Empowering farmers with Artificial Intelligence for a smarter, more productive, 
              and sustainable agricultural future.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    className="w-8 h-8 rounded-lg border border-slate-200/60 text-slate-400 hover:text-emerald-500 hover:border-emerald-500/30 flex items-center justify-center transition-colors duration-150"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title} className="flex flex-col space-y-4">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {col.title}
                </span>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-500 hover:text-emerald-600 transition-colors"
                      >
                        {col.title === 'Product' && link.name === 'AI Farm Twin' ? (
                          <span className="flex items-center gap-1.5">
                            {link.name}
                            <span className="px-1 py-0.2 bg-emerald-500/10 text-emerald-600 text-[8px] font-bold rounded-sm uppercase tracking-widest scale-90 origin-left">
                              New
                            </span>
                          </span>
                        ) : link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>
            &copy; 2026 AgriFlow AI. All rights reserved.
          </span>
          <div className="flex items-center gap-1 text-emerald-500">
            <Leaf className="w-3.5 h-3.5 fill-current" />
            <span className="font-semibold font-outfit tracking-wide">AgriFlow</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
