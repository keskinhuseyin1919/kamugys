import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function InstitutionManagement() {
  const [selectedInst, setSelectedInst] = useState(null);

  // Örnek Hiyerarşik Veri (Atama Motoru Temeli)
  const [institutions, setInstitutions] = useState([
    {
      id: 1,
      name: "Adalet Bakanlığı",
      logo: "⚖️",
      positions: [
        { id: 11, title: "Zabıt Katibi", examDate: "15.05.2026", status: "Aktif" },
        { id: 12, title: "Yazı İşleri Müdürü", examDate: "20.06.2026", status: "Beklemede" }
      ]
    },
    {
      id: 2,
      name: "İçişleri Bakanlığı",
      logo: "🏠",
      positions: [
        { id: 21, title: "VHKİ", examDate: "10.07.2026", status: "Aktif" },
        { id: 22, title: "Şef", examDate: "12.08.2026", status: "Planlanıyor" }
      ]
    }
  ]);

  const addInstitution = () => {
    toast.success("Yeni kurum ekleme formu açıldı (Simülasyon)");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* ÜST BAŞLIK */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">Kurum & Atama Motoru</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Kurum bazlı hiyerarşiyi ve sınav takvimlerini buradan yönetin.</p>
        </div>
        <button 
          onClick={addInstitution}
          className="bg-gov-navy dark:bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-900/20 active:scale-95 transition-all"
        >
          + Yeni Kurum Tanımla
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SOL: KURUM LİSTESİ */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Kayıtlı Kurumlar</h3>
          {institutions.map((inst) => (
            <motion.button
              key={inst.id}
              whileHover={{ x: 10 }}
              onClick={() => setSelectedInst(inst)}
              className={`w-full p-6 rounded-[2rem] border transition-all flex items-center justify-between group ${
                selectedInst?.id === inst.id 
                ? 'bg-gov-navy dark:bg-blue-600 border-gov-navy text-white shadow-xl' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-blue-400'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{inst.logo}</span>
                <span className="font-bold text-sm uppercase tracking-tight">{inst.name}</span>
              </div>
              <span className={`text-xs ${selectedInst?.id === inst.id ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`}>➡️</span>
            </motion.button>
          ))}
        </div>

        {/* SAĞ: POZİSYON VE SINAV DETAYLARI */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {selectedInst ? (
              <motion.div
                key={selectedInst.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
              >
                <div className="p-8 border-b border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase italic">{selectedInst.name}</h2>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Bağlı Pozisyonlar ve Sınav Takvimi</p>
                  </div>
                  <button className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase border-b border-blue-600 pb-1 hover:text-blue-800 transition-colors">
                    + Pozisyon Ekle
                  </button>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 gap-4">
                    {selectedInst.positions.map((pos) => (
                      <div key={pos.id} className="flex flex-col md:flex-row justify-between items-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-200 transition-all">
                        <div className="flex flex-col mb-4 md:mb-0">
                          <span className="font-black text-slate-700 dark:text-slate-200 text-sm">{pos.title}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase">Sınav: {pos.examDate}</span>
                        </div>
                        <div className="flex items-center gap-6 w-full md:w-auto">
                          <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                            pos.status === 'Aktif' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                            {pos.status}
                          </span>
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg shadow-sm transition-all" title="Müfredatı Düzenle">🔗</button>
                            <button className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg shadow-sm transition-all" title="Tarih Ata">📅</button>
                            <button className="p-2 text-red-400 hover:text-red-600 transition-colors">🗑️</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center py-20 bg-slate-50/50 dark:bg-slate-900/50 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
                <span className="text-6xl mb-4 opacity-20">🏛️</span>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Detayları görmek için sol listeden bir kurum seçin</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* KRİTİK NOT */}
      <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-3xl border border-amber-100 dark:border-amber-900/30">
        <p className="text-[10px] text-amber-700 dark:text-amber-400 font-bold leading-relaxed italic uppercase">
          💡 Atama Motoru Notu: Bir pozisyona atanan "Sınav Tarihi", o pozisyona bağlı tüm kullanıcıların panelindeki "Sınava Kalan Süre" sayacını otomatik olarak günceller.
        </p>
      </div>
    </div>
  );
}