import { NavLink, useNavigate } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';

export default function UserSidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  
  // YOLLARIN BAŞINA /panel EKLENDİ (AppRouter ile tam uyum)
  const menuItems = [
    { title: 'Ana Sayfa', icon: '🏠', path: '/panel' },
    { title: 'Soru Ekranı', icon: '📝', path: '/panel/exams' },
    { title: 'Deneme Sınavları', icon: '⏱️', path: '/panel/mock-exams' },
    { title: 'Ders Notları', icon: '📚', path: '/panel/materials' },
    { title: 'Başarı Analizi', icon: '📊', path: '/panel/stats' },
    { title: 'Duyurular', icon: '📢', path: '/panel/announcements' },
    { title: 'Destek Merkezi', icon: '🎧', path: '/panel/support' },
    { title: 'Profilim', icon: '👤', path: '/panel/profile' },
  ];

  return (
    <>
      {/* Mobil Karartma (Overlay) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Ana Gövde */}
      <div className={`fixed lg:sticky top-0 left-0 z-50 w-72 bg-gov-navy dark:bg-slate-950 min-h-screen shadow-2xl flex flex-col transition-all duration-300 transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        {/* Logo ve Tema Değiştirici */}
        <div className="p-8 border-b border-blue-900/30 dark:border-slate-800 flex justify-between items-center bg-blue-950/20">
          <div>
            <h1 className="text-2xl font-black text-white tracking-tighter italic">
              KAMU<span className="text-blue-400">GYS</span>
            </h1>
            <p className="text-[10px] text-blue-300/60 dark:text-slate-500 font-black uppercase tracking-[0.2em] mt-1">GYS Hazırlık</p>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(false)} className="lg:hidden text-white text-2xl ml-2">✕</button>
          </div>
        </div>

        {/* Menü Navigasyonu */}
        <nav className="flex-1 p-4 mt-6 overflow-y-auto custom-scrollbar">
          <ul className="space-y-1.5">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  // /panel ana sayfasındayken diğer sayfaların aktif görünmemesi için end eklendi
                  end={item.path === '/panel'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all duration-300 group ${
                      isActive 
                        ? 'bg-gov-accent dark:bg-slate-800 text-white shadow-lg border-l-4 border-blue-400 translate-x-1' 
                        : 'text-blue-100/70 dark:text-slate-400 hover:bg-white/10 dark:hover:bg-slate-800/50 hover:text-white'
                    }`
                  }
                >
                  <span className="text-xl opacity-80 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="text-[11px] uppercase tracking-[0.15em]">{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kurumsal Alt Bölüm ve Çıkış */}
        <div className="p-4 border-t border-blue-900/30 dark:border-slate-900 bg-blue-950/40">
          <div className="mb-4 px-4 py-3 bg-blue-900/20 rounded-2xl border border-blue-800/30">
              <p className="text-[9px] font-black text-blue-300 uppercase tracking-widest text-center">Resmi Eğitim Portalı</p>
          </div>
          <button 
            onClick={() => {
              if(window.confirm("Güvenli çıkış yapmak istediğinize emin misiniz?")) {
                navigate('/login');
              }
            }}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500 hover:text-white rounded-xl transition-all font-black text-[10px] uppercase tracking-[0.2em] border border-red-500/30"
          >
            🚪 OTURUMU KAPAT
          </button>
        </div>
      </div>
    </>
  );
}