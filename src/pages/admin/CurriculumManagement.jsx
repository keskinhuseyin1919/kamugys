import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CurriculumManagement() {
  const [categories, setCategories] = useState([
    { id: 1, name: "657 Sayılı Kanun", subCount: 12, qCount: 4500, color: "bg-blue-500" },
    { id: 2, name: "T.C. Anayasası", subCount: 8, qCount: 3200, color: "bg-emerald-500" },
    { id: 3, name: "İdare Hukuku", subCount: 15, qCount: 2800, color: "bg-amber-500" },
    { id: 4, name: "Resmi Yazışma", subCount: 4, qCount: 1200, color: "bg-red-500" },
  ]);

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      
      {/* ÜST BAŞLIK */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 dark:border-slate-800 pb-10">
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
            MÜFREDAT <span className="text-gov-blue">YÖNETİMİ</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
            Sistemin Eğitim İskeletini ve Konu Dağılımını Mühürle
          </p>
        </div>
        <button className="px-10 py-4 bg-slate-900 dark:bg-slate-800 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-gov-blue transition-all shadow-xl shadow-slate-900/20">
          + YENİ MEVZUAT EKLE
        </button>
      </header>

      {/* KATEGORİ KARTLARI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl hover:border-gov-blue transition-all group relative overflow-hidden"
          >
            {/* Arka Plan Dekoratif Sayı */}
            <span className="absolute -right-4 -bottom-4 text-8xl font-black text-slate-50 dark:text-slate-800/50 group-hover:text-blue-50 transition-colors">
              0{cat.id}
            </span>

            <div className="relative z-10 space-y-6">
              <div className={`w-12 h-1.5 ${cat.color} rounded-full`}></div>
              
              <div>
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight italic leading-tight">
                  {cat.name}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Ana Mevzuat</p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-50 dark:border-slate-800">
                <div className="text-center">
                  <p className="text-[9px] font-black text-slate-400 uppercase">Alt Konu</p>
                  <p className="text-lg font-black text-slate-700 dark:text-slate-300">{cat.subCount}</p>
                </div>
                <div className="w-px h-8 bg-slate-100 dark:bg-slate-800"></div>
                <div className="text-center">
                  <p className="text-[9px] font-black text-slate-400 uppercase">Soru</p>
                  <p className="text-lg font-black text-gov-blue">{cat.qCount}</p>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <button className="flex-1 py-3 bg-slate-50 dark:bg-slate-800 text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-gov-blue hover:text-white transition-all">Düzenle</button>
                <button className="p-3 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all">🗑️</button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* EKLEME KARTI */}
        <button className="border-4 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 flex flex-col items-center justify-center gap-4 text-slate-300 hover:border-gov-blue hover:text-gov-blue transition-all group">
          <span className="text-4xl group-hover:scale-125 transition-transform">➕</span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Hızlı Mevzuat Ekle</span>
        </button>
      </div>

      {/* ALT DETAY: ALT KONU YÖNETİMİ PANELİ (Görsel Temsil) */}
      <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gov-blue/20 rounded-full blur-[80px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter">Detaylı Alt Konu Yapılandırması</h2>
            <p className="text-slate-400 text-xs font-medium max-w-xl leading-relaxed">
              Her mevzuatın altına sınırsız sayıda alt konu ekleyebilir, bu konuların sınavda çıkma ağırlığını (yüzdesini) belirleyebilirsiniz. 
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-slate-900 font-black text-[10px] uppercase tracking-widest rounded-xl hover:scale-105 transition-all whitespace-nowrap">
            ALT KONULARI YÖNET →
          </button>
        </div>
      </div>

    </div>
  );
}