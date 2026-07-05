import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import Topbar from '../../components/dashboard/Topbar';
import { Toaster } from 'sonner';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main View Shell */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header Controls */}
        <Topbar />

        {/* Dashboard Pages Content */}
        <div className="flex-grow overflow-y-auto bg-slate-50/50">
          {children}
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}
