import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from '../components/layout/UserSidebar';
import MobileNav from '../components/layout/MobileNav'; // <-- Yeni parçayı ekledik

export default function UserLayout() {
  // Sol Sidebar'ın (Yandan açılan) kontrolü
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gov-bg dark:bg-slate-950">
      
      {/* 1. SOL MENÜ (Masaüstünde sabit, Mobilde yandan açılır) */}
      <UserSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className="flex-1 flex flex-col min-w-0">
        
        {/* 2. MOBİL ÜST BAR (Kimlik Alanı) */}
        <div className="lg:hidden bg-gov-navy p-4 flex justify-between items-center text-white z-30 shadow-md">
          <h1 className="font-black text-lg italic">
            KAMU<span className="text-blue-300">GYS</span>
          </h1>
          {/* İstersen buraya küçük bir profil ikonu veya arama butonu koyabilirsin */}
          <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-[10px]">👤</div>
        </div>
        
        {/* 3. DİNAMİK İÇERİK ALANI (Sayfalar buraya gelir) */}
        {/* ÖNEMLİ: pb-24 ekledik ki içerik alttaki MobileNav'ın arkasında kalmasın */}
        <div className="flex-1 p-6 lg:p-10 overflow-y-auto pb-24 lg:pb-10">
          <Outlet /> 
        </div>

        {/* 4. MOBİL ALT NAVİGASYON (Hızlı Erişim) */}
        {/* Bu parça sadece mobilde (lg:hidden) görünecek şekilde ayarlı */}
        <MobileNav />

      </main>
    </div>
  );
}