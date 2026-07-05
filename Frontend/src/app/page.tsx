import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import DigitalFarm from '../components/landing/DigitalFarm';
import Features from '../components/landing/Features';
import CtaBanner from '../components/landing/CtaBanner';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      
      <main className="space-y-6 md:space-y-8">
        <Hero />
        <div className="bg-slate-50/50">
          <DigitalFarm />
        </div>
        <Features />
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
