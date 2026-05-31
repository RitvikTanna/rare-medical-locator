import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-slate-800 font-sans">
      {/* Clean Enterprise Header */}
      <header className="w-full px-8 py-3.5 bg-primary text-white border-b border-white/20 flex justify-between items-center z-10 shadow-sm shadow-primary/20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
            </svg>
          </div>
          <div>
            <h1 className="text-base font-extrabold text-slate-900 tracking-tight leading-none">RareMed Locator</h1>
            <span className="text-[9px] text-slate-500 font-bold tracking-wider uppercase">Enterprise Access</span>
          </div>
        </div>

        {/* User Account Controls */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-slate-800">Pharmacy Operations</span>
            <span className="text-[9px] text-emerald-600 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Secured Session
            </span>
          </div>
          <div className="w-8.5 h-8.5 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 font-bold text-xs shadow-sm">
            PO
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Soft Modern Sidebar */}
        <nav className="w-60 p-5 bg-slate-100/50 border-r border-slate-200/80 flex flex-col justify-between">
          <ul className="space-y-1.5">
            <li className="px-3 mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Navigation</span>
            </li>
            <li>
              <Link
                to="/dashboard/medicines"
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary/10 text-primary hover:text-primary font-semibold text-xs transition duration-150 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4.5 h-4.5 text-slate-500 group-hover:text-primary transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
                </svg>
                <span>Medicines Inventory</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/shops" 
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary/10 text-primary hover:text-primary font-semibold text-xs transition duration-150 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4.5 h-4.5 text-slate-500 group-hover:text-accent transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615 3.001 3.001 0 0 0 3.75.615 3.001 3.001 0 0 0 3.75-.615 3.001 3.001 0 0 0 3.75.615m-15 0h15" />
                </svg>
                <span>Nearby Pharmacies</span>
              </Link>
            </li>
          </ul>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 w-full bg-white border border-slate-200 hover:border-rose-200 hover:bg-rose-50 text-slate-600 hover:text-rose-600 font-semibold text-xs rounded-xl transition duration-150 shadow-sm shadow-slate-100/50 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.25 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
            <span>Sign Out</span>
          </button>
        </nav>
        
        {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-y-auto bg-gray-50">
          <div className="bg-white/70 border border-slate-200/80 rounded-2xl p-8 min-h-[calc(100vh-120px)] shadow-md shadow-slate-100/50 backdrop-blur-lg relative overflow-hidden">
            {/* Elegant side identity line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/80"></div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );


}
