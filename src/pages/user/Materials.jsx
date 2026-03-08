import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Materials() {
  const [selectedMevzuat, setSelectedMevzuat] = useState(null); // Seçili Mevzuat
  const [activeTab, setActiveTab] = useState('Hepsi'); // PDF veya Video filtresi

  // 🗂️ YAPILANDIRILMIŞ VERİ SETİ
  const libraryData = [
    {
      id: "m1",
      name: "657 Sayılı Devlet Memurları Kanunu",
      icon: "⚖️",
      subTopics: [
        { 
          name: "Disiplin Hükümleri", 
          items: [
            { title: "Disiplin Cezaları Özet Tablo", type: "PDF", size: "1.2 MB", isVip: false },
            { title: "Soruşturma Usulleri Anlatımı", type: "Video", duration: "25 dk", isVip: true }
          ]
        },
        { 
          name: "Memurluğa Alınma ve Adaylık", 
          items: [
            { title: "Aday Memur El Kitabı", type: "PDF", size: "3.4 MB", isVip: false }
          ]
        }
      ]
    },
    {
      id: "m2",
      name: "T.C. Anayasası",
      icon: "🏛️",
      subTopics: [
        { 
          name: "Temel Hak ve Hürriyetler", 
          items: [
            { title: "Haklar ve Ödevler PDF", type: "PDF", size: "2.1 MB", isVip: false },
            { title: "Anayasa Değişiklikleri 2024", type: "Video", duration: "40 dk", isVip: true }
          ]
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      
      {/* ÜST BAŞLIK */}
      <header className="border-b border-slate-200 dark:border-slate-800 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
            EĞİTİM <span className="text-gov-blue">KÜTÜPHANESİ</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest mt-2">
            Mevzuat bazlı çalışma dökümanları ve ders videoları.
          </p>
        </div>

        {selectedMevzuat && (
          <button 
            onClick={() => setSelectedMevzuat(null)}
            className="px-6 py-3 bg-slate-900 text-white text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-gov-blue transition-all shadow-xl"
          >
            ← Mevzuat Listesine Dön
          </button>
        )}
      </header>

      <AnimatePresence mode="wait">
        {!selectedMevzuat ? (
          /* ==========================================
             1. ADIM: MEVZUAT SEÇİM EKRANI (Ana Klasörler)
             ========================================== */
          <motion.div 
            key="grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {libraryData.map((mevzuat) => (
              <div 
                key={mevzuat.id}
                onClick={() => setSelectedMevzuat(mevzuat)}
                className="group cursor-pointer bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-gov-blue hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{mevzuat.icon}</div>
                <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tighter leading-tight mb-4">
                  {mevzuat.name}
                </h3>
                <span className="text-[10px] font-black text-gov-blue uppercase tracking-[0.2em] bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-xl">
                  {mevzuat.subTopics.length} Alt Konu İncele
                </span>
                {/* Arka Plan Süsü */}
                <div className="absolute -bottom-6 -right-6 text-9xl font-black text-slate-50 dark:text-slate-800/10 italic -rotate-12 group-hover:rotate-0 transition-transform">
                  DOC
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          /* ==========================================
             2. ADIM: DETAYLI MATERYAL LİSTESİ
             ========================================== */
          <motion.div 
            key="details" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-12"
          >
            {selectedMevzuat.subTopics.map((sub, sIdx) => (
              <div key={sIdx} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                  <h2 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] italic">
                    {sub.name}
                  </h2>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sub.items.map((item, iIdx) => (
                    <div key={iIdx} className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 shadow-sm group hover:border-gov-blue transition-all flex flex-col justify-between">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${item.type === 'PDF' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'} dark:bg-slate-800`}>
                          {item.type === 'PDF' ? '📄' : '🎬'}
                        </div>
                        {item.isVip && <span className="px-3 py-1 bg-amber-500 text-white text-[9px] font-black rounded-lg uppercase">💎 VIP</span>}
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase leading-tight group-hover:text-gov-blue transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {item.type === 'PDF' ? `Boyut: ${item.size}` : `Süre: ${item.duration}`}
                        </p>
                      </div>

                      <button className={`mt-8 w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        item.isVip ? 'bg-slate-900 text-white hover:bg-amber-500' : 'bg-slate-50 dark:bg-slate-800 text-slate-500 hover:bg-gov-blue hover:text-white'
                      }`}>
                        {item.isVip ? '🔒 KİLİDİ AÇ' : 'GÖRÜNTÜLE'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}