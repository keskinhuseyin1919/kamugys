import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../common/ThemeToggle';

export default function AdminSidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const adminMenuItems = [
    { title: 'Kontrol Paneli', icon: '🏠', path: '/admin' },
    { title: 'Kullanıcı Yönetimi', icon: '👥', path: '/admin/users' },
    // YENİ EKLEDİĞİMİZ DENEME SINAVI YÖNETİMİ
    { title: 'Deneme Sınavları', icon: '🏆', path: '/admin/mock-exams' }, 
    { title: 'Müfredat & Mevzuat', icon: '⚖️', path: '/admin/curriculum' },
    { title: 'Soru Bankası', icon: '📝', path: '/admin/questions' },
    { title: 'Kurum & Pozisyon', icon: '🏛️', path: '/admin/institutions' },
    { title: 'Materyal Yönetimi', icon: '📁', path: '/admin/materials' },
    { title: 'Duyuru Yönetimi', icon: '📢', path: '/admin/announcements' },
    { 
      title: 'Bildirim Merkezi', 
      icon: '🚨', 
      path: '/admin/notifications',
      badge: '3'
    },
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
      <div className={`fixed lg:sticky top-0 left-0 z-50 w-72 bg-gov-navy dark:bg-black min-h-screen shadow-2xl flex flex-col transition-all duration-300 transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        {/* Logo ve Üst Bölüm */}
        <div className="p-8 border-b border-blue-900/30 flex justify-between items-center bg-blue-950/20">
          <div className="group cursor-pointer" onClick={() => navigate('/admin')}>
            <h1 className="text-xl font-black text-white tracking-tighter italic">
              ADMİN<span className="text-blue-400">PANEL</span>
            </h1>
            <p className="text-[9px] text-blue-300/60 font-black uppercase tracking-[0.3em] mt-1">Komuta Merkezi v2.0</p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(false)} className="lg:hidden text-white text-xl ml-2">✕</button>
          </div>
        </div>

        {/* Menü Navigasyonu */}
        <nav className="flex-1 p-4 mt-6 overflow-y-auto custom-scrollbar">
          <ul className="space-y-1.5">
            {adminMenuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  // /admin ana sayfasının çakışmaması için 'end' kuralı
                  end={item.path === '/admin'} 
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `flex items-center justify-between px-4 py-3.5 rounded-xl font-bold transition-all duration-300 group ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 border-l-4 border-white translate-x-1' 
                        : 'text-blue-100/70 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-[11px] uppercase tracking-[0.2em]">{item.title}</span>
                  </div>
                  
                  {item.badge && (
                    <span className="bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full animate-pulse shadow-lg shadow-red-500/20">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kurumsal Alt Bölüm ve Çıkış */}
        <div className="p-4 border-t border-blue-900/30 bg-blue-950/30">
          <div className="mb-4 px-4 py-3 bg-blue-900/10 rounded-xl border border-blue-800/20">
             <p className="text-[9px] font-black text-blue-300/50 uppercase tracking-widest text-center italic">Admin Güvenlik Modu Aktif</p>
          </div>
          <button 
            onClick={() => {
              if(window.confirm("Yönetici oturumunu sonlandırmak istiyor musunuz?")) {
                navigate('/login');
              }
            }}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500 hover:text-white rounded-xl transition-all font-black text-[10px] uppercase tracking-[0.2em] border border-red-500/30"
          >
            🚪 GÜVENLİ ÇIKIŞ
          </button>
        </div>
      </div>
    </>
  );
}