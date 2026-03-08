import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from '../components/layout/UserSidebar';
import MobileNav from '../components/layout/MobileNav';

export default function UserLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gov-bg dark:bg-slate-950">
      
      {/* 1. SOL MENÜ (Prop'ları gönderiyoruz) */}
      <UserSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className="flex-1 flex flex-col min-w-0">
        
        {/* 2. MOBİL ÜST BAR (Artık Menü Butonu Var) */}
        <div className="lg:hidden bg-gov-navy p-4 flex justify-between items-center text-white z-30 shadow-md">
          {/* SOL: Menü Butonu */}
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-lg active:scale-90 transition-all border border-white/10"
          >
            ☰
          </button>

          {/* ORTA: Logo */}
          <h1 className="font-black text-lg italic tracking-tighter">
            KAMU<span className="text-blue-300">GYS</span>
          </h1>
          
          {/* SAĞ: Profil İkonu */}
          <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center text-[10px] border border-white/10 shadow-inner">
            👤
          </div>
        </div>
        
        {/* 3. İÇERİK ALANI */}
        <div className="flex-1 p-6 lg:p-10 overflow-y-auto pb-24 lg:pb-10">
          <Outlet /> 
        </div>

        {/* 4. MOBİL ALT NAVİGASYON */}
        <MobileNav />

      </main>
    </div>
  );
}