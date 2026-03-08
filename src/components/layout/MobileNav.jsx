import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function MobileNav() {
  const location = useLocation();

  const menuItems = [
    { path: '/panel', icon: '🏠', label: 'Ana Sayfa' },
    { path: '/panel/exams', icon: '📝', label: 'Sınavlar' },
    { path: '/panel/mock-exams', icon: '🏆', label: 'Deneme' },
    { path: '/panel/materials', icon: '📚', label: 'Kütüphane' },
    { path: '/panel/profile', icon: '👤', label: 'Profil' },
  ];

  return (
    <motion.nav 
      initial={{ y: 100 }} animate={{ y: 0 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-3 z-[100] flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-[2.5rem]"
    >
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link key={item.path} to={item.path} className="relative flex flex-col items-center gap-1">
            <span className={`text-xl transition-all ${isActive ? 'scale-125' : 'opacity-40 grayscale'}`}>
              {item.icon}
            </span>
            <span className={`text-[8px] font-black uppercase tracking-tighter ${isActive ? 'text-gov-blue' : 'text-slate-400'}`}>
              {item.label}
            </span>
            {isActive && (
              <motion.div 
                layoutId="activeTab"
                className="absolute -top-3 w-8 h-1 bg-gov-blue rounded-full"
              />
            )}
          </Link>
        );
      })}
    </motion.nav>
  );
}