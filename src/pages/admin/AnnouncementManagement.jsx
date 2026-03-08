import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function AnnouncementManagement() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "7445 Sayılı Kanun Değişikliği Hakkında", type: "Mevzuat", target: "Herkes", date: "08.03.2026", status: "Yayında" },
    { id: 2, title: "VIP Üyelere Özel: 5.000 Yeni Soru Paketi!", type: "Kampanya", target: "Sadece VIP", date: "07.03.2026", status: "Yayında" },
    { id: 3, title: "Sistem Bakım Çalışması (Gece 02:00)", type: "Duyuru", target: "Herkes", date: "05.03.2026", status: "Arşivlendi" },
  ]);

  const handleDelete = (id) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
    toast.error("Duyuru yayından kaldırıldı.");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      
      {/* 🚀 ÜST BAŞLIK VE YENİ EKLEME */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-slate-200 dark:border-slate-800 pb-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
            DUYURU <span className="text-gov-blue">MERKEZİ</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            Tüm Adaylara Anlık Bilgi Akışını Yönet
          </p>
        </div>
        
        <button className="px-10 py-4 bg-gov-blue text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-105 transition-all">
          + YENİ DUYURU YAYINLA
        </button>
      </header>

      {/* 📋 AKTİF DUYURULAR LİSTESİ */}
      <div className="grid grid-cols-1 gap-6">
        {announcements.map((ann, i) => (
          <motion.div 
            key={ann.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-gov-blue transition-all"
          >
            <div className="flex items-center gap-6 flex-1">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl ${
                ann.type === 'Mevzuat' ? 'bg-amber-50 text-amber-500' : 
                ann.type === 'Kampanya' ? 'bg-blue-50 text-blue-500' : 'bg-slate-100 text-slate-500'
              } dark:bg-slate-800`}>
                {ann.type === 'Mevzuat' ? '⚖️' : ann.type === 'Kampanya' ? '💎' : '📢'}
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight group-hover:text-gov-blue transition-colors italic">
                    {ann.title}
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter ${
                    ann.status === 'Yayında' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {ann.status}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-black text-gov-blue uppercase tracking-widest">{ann.type}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter italic">Hedef: {ann.target}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{ann.date}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 text-[9px] font-black uppercase rounded-xl hover:bg-slate-200 transition-all">DÜZENLE</button>
              <button onClick={() => handleDelete(ann.id)} className="p-2.5 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all">🗑️</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 📊 BİLDİRİM İSTATİSTİĞİ (WIDGET) */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gov-blue/20 rounded-full blur-[100px]"></div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none">Anlık Bildirim (Push) Gönder</h2>
            <p className="text-slate-400 text-xs font-medium max-w-lg leading-relaxed uppercase tracking-wide">
              Duyuruları sadece site içinde bırakma; mobil bildirim ve e-posta yoluyla adayların telefonuna "mühürlü" bir haber olarak düşür.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center min-w-[120px]">
              <p className="text-[10px] font-black opacity-50 uppercase">Okunma</p>
              <p className="text-3xl font-black text-gov-blue">%94</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center min-w-[120px]">
              <p className="text-[10px] font-black opacity-50 uppercase">E-Posta</p>
              <p className="text-3xl font-black text-emerald-400">12K</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}