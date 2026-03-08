import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/layout/AdminSidebar';
import MobileNav from '../components/layout/MobileNav'; // Alt barı buraya da ekliyoruz

export default function AdminLayout() {
  // Sidebar kontrol anahtarı
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      
      {/* 1. ADMIN SIDEBAR (Prop'lar gidiyor) */}
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 flex flex-col min-w-0">
        
        {/* 2. MOBİL ÜST BAR (Admin Karakterli) */}
        {/* Sadece mobilde (lg:hidden) görünür */}
        <div className="lg:hidden bg-slate-900 p-4 flex justify-between items-center text-white z-30 shadow-xl">
          {/* SOL: Menü Butonu */}
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
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Yönetim Paneli</p>
          </div>
          
          {/* SAĞ: Admin Rozeti */}
          <div className="w-10 h-10 bg-red-600/20 text-red-500 rounded-xl flex items-center justify-center text-[10px] font-black border border-red-500/20">
            ADM
          </div>
        </div>
        
        {/* 3. DİNAMİK İÇERİK ALANI */}
        {/* pb-24 ekledik ki içerik MobileNav'ın altında kalmasın */}
        <div className="flex-1 p-6 lg:p-10 overflow-y-auto pb-24 lg:pb-10">
          <Outlet /> 
        </div>

        {/* 4. MOBİL ALT NAVİGASYON */}
        <MobileNav />

      </main>
    </div>
  );
}