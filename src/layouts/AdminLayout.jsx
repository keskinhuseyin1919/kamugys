import { useState } from 'react'; // <-- State ekledik
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/layout/AdminSidebar';

export default function AdminLayout() {
  // Sidebar'ın mobil cihazlarda açılıp kapanmasını kontrol eden anahtar
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar'a kontrol verilerini gönderiyoruz */}
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobilde sidebar'ı açacak bir buton yoksa buraya eklenebilir */}
        <div className="flex-1 p-8 overflow-x-hidden">
           <Outlet /> 
        </div>
      </main>
    </div>
  );
}