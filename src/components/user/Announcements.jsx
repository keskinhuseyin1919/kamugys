import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Announcements() {
  // Sahte Duyuru Verileri
  const announcementList = [
    { id: 1, title: "657 Sayılı Kanun Güncellemesi Hakkında", date: "05 Mart 2026", type: "Mevzuat", isNew: true },
    { id: 2, title: "Nisan Ayı Deneme Sınav Takvimi Açıklandı", date: "04 Mart 2026", type: "Sınav", isNew: true },
    { id: 3, title: "Sistem Bakım Çalışması Tamamlandı", date: "02 Mart 2026", type: "Duyuru", isNew: false },
    { id: 4, title: "Anayasa Hukuku Yeni Video Dersler Yüklendi", date: "28 Şubat 2026", type: "Eğitim", isNew: false },
  ];

  return (
    <div className="flex-1 h-full bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-slate-500/5">
      
      {/* BAŞLIK: Resimdeki Canlı Mavi/Navy Tasarım */}
      <div className="bg-gov-blue dark:bg-blue-600 p-5 border-b-2 border-blue-700/30 flex justify-between items-center relative overflow-hidden">
        <div className="flex items-center gap-3 relative z-10">
          <span className="text-xl">📢</span>
          <h3 className="font-black text-white text-[11px] uppercase tracking-[0.2em] italic">
            Sistem Duyuruları
          </h3>
        </div>
        <div className="relative z-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_#34d399]"></div>
        
        {/* Dekoratif Arka Plan Yazısı */}
        <div className="absolute -right-2 top-2 text-4xl font-black text-white/5 italic select-none">INFO</div>
      </div>

      {/* DUYURU LİSTESİ */}
      <div className="p-6 flex-1 overflow-y-auto custom-scrollbar space-y-4">
        {announcementList.map((news, index) => (
          <motion.div 
            key={news.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link 
              to={`/panel/announcements/${news.id}`}
              className="group block p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-gov-blue dark:hover:border-blue-500 transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none">
                  {news.date}
                </span>
                {news.isNew && (
                  <span className="bg-emerald-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter">
                    YENİ
                  </span>
                )}
              </div>
              
              <h4 className="text-xs font-black text-slate-700 dark:text-slate-200 uppercase tracking-tight group-hover:text-gov-blue dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {news.title}
              </h4>
              
              <div className="mt-3 flex items-center gap-2">
                <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Kategori: {news.type}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ALT AKSİYON: Tüm duyurulara yönlendirir */}
      <div className="bg-slate-50/50 dark:bg-slate-800/20 p-5 border-t border-slate-100 dark:border-slate-800 text-center">
        <Link 
          to="/panel/announcements"
          className="inline-flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-gov-blue transition-all uppercase tracking-[0.2em]"
        >
          Tüm Duyuru Arşivini Gör <span className="text-xs">→</span>
        </Link>
      </div>
    </div>
  );
}