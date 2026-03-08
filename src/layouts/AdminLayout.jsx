import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/layout/AdminSidebar';

export default function AdminLayout() {
  // Sidebar kontrol anahtarı (Sol menü için)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      
      {/* 1. ADMIN SIDEBAR (Sol menü - mobilde soldan kayarak gelir) */}
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 flex flex-col min-w-0">
        
        {/* 2. MOBİL ÜST BAR (Sadece telefonlarda görünür) */}
        <div className="lg:hidden bg-slate-900 p-4 flex justify-between items-center text-white z-30 shadow-xl">
          {/* SOL: Menüyü Açan Buton (Mühürlü) */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl active:scale-90 transition-all border border-white/5"
          >
            ☰
          </button>

          {/* ORTA: Admin Başlığı */}
          <div className="text-center">
            <h1 className="font-black text-sm italic tracking-tighter">
              KAMU<span className="text-red-500">GYS</span>
            </h1>
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest italic">Admin Panel</p>
          </div>
          
          {/* SAĞ: Admin Rozeti */}
          <div className="w-10 h-10 bg-red-600/20 text-red-500 rounded-xl flex items-center justify-center text-[10px] font-black border border-red-500/20">
            ADM
          </div>
        </div>
        
        {/* 3. İÇERİK ALANI */}
        {/* pb-24'ü kaldırdık, pb-10 yeterli çünkü artık altta bir bar yok */}
        <div className="flex-1 p-6 lg:p-10 overflow-y-auto pb-10">
          <Outlet /> 
        </div>

        {/* 🛑 MOBİL ALT NAVİGASYON (MobileNav) BURADAN KALDIRILDI! */}

      </main>
    </div>
  );
}