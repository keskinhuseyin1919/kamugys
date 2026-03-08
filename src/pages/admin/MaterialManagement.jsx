import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function MaterialManagement() {
  const [filter, setFilter] = useState("Hepsi");

  // Simüle Edilen Materyal Verileri
  const [materials, setMaterials] = useState([
    { id: 1, title: "657 Sayılı Kanun Tam Metin (Güncel)", type: "PDF", category: "657 Sayılı Kanun", isVip: false, size: "2.4 MB" },
    { id: 2, title: "Anayasa Hukuku Giriş - Video Ders", type: "Video", category: "T.C. Anayasası", isVip: true, duration: "45 dk" },
    { id: 3, title: "Disiplin Cezaları Özet Tablo", type: "Görsel", category: "657 Sayılı Kanun", isVip: true, size: "850 KB" },
    { id: 4, title: "Resmi Yazışma Kuralları Kılavuzu", type: "PDF", category: "Resmi Yazışma", isVip: false, size: "1.2 MB" },
  ]);

  const handleDelete = (id) => {
    setMaterials(materials.filter(m => m.id !== id));
    toast.error("Materyal kütüphaneden kaldırıldı.");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      
      {/* 🚀 ÜST AKSİYON BARI */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-slate-200 dark:border-slate-800 pb-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
            DİJİTAL <span className="text-gov-blue">KÜTÜPHANE</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Eğitim İçeriklerini ve Dokümanları Mühürle
          </p>
        </div>
        
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-gov-blue transition-all">
            📁 KLASÖR OLUŞTUR
          </button>
          <button className="px-10 py-4 bg-gov-blue text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-105 transition-all">
            + YENİ İÇERİK YÜKLE
          </button>
        </div>
      </header>

      {/* 📊 MATERYAL LİSTESİ */}
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center justify-between px-6">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Yüklü İçerikler ({materials.length})</h3>
          <div className="flex gap-2">
            {["Hepsi", "PDF", "Video", "Görsel"].map(t => (
              <button 
                key={t} onClick={() => setFilter(t)}
                className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-tighter transition-all ${filter === t ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {materials.map((m, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                key={m.id} className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all group"
              >
                <div className="flex items-center gap-6 flex-1">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${
                    m.type === 'PDF' ? 'bg-red-50 text-red-500' : 
                    m.type === 'Video' ? 'bg-blue-50 text-blue-500' : 'bg-emerald-50 text-emerald-500'
                  }`}>
                    {m.type === 'PDF' ? '📄' : m.type === 'Video' ? '🎬' : '🖼️'}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight group-hover:text-gov-blue transition-colors">
                      {m.title}
                    </h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-[9px] font-black text-gov-blue uppercase">{m.category}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{m.size || m.duration}</span>
                      {m.isVip && <span className="px-2 py-0.5 bg-amber-100 text-amber-600 text-[8px] font-black rounded uppercase">VIP</span>}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 text-[9px] font-black uppercase rounded-xl hover:bg-slate-200 transition-all">DÜZENLE</button>
                  <button onClick={() => handleDelete(m.id)} className="p-2.5 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all">🗑️</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ⚙️ DEPOLAMA DURUMU (WIDGET) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <h4 className="text-xl font-black uppercase italic tracking-tighter">Sunucu Kapasitesi</h4>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Toplam 50 GB Bulut Depolama</p>
              </div>
              <span className="text-2xl font-black text-gov-blue">12.4 GB / 50 GB</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: "25%" }} className="h-full bg-gov-blue rounded-full" />
            </div>
            <p className="text-[9px] text-slate-500 font-bold uppercase italic">* Mevzuat güncellemeleri ve video dersler için %75 boş alan mevcut.</p>
          </div>
        </div>

        <div className="bg-gov-blue rounded-[2.5rem] p-10 text-white flex flex-col justify-center items-center text-center space-y-4 shadow-xl shadow-blue-500/20">
          <div className="text-4xl">💎</div>
          <h4 className="font-black uppercase tracking-tighter italic">VIP Erişimi Kontrolü</h4>
          <p className="text-[10px] font-medium leading-relaxed opacity-80 uppercase">İçerikleri sadece Premium üyelerin göreceği şekilde tek tıkla mühürleyin.</p>
        </div>
      </div>

    </div>
  );
}