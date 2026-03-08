import { motion } from 'framer-motion';

export default function AnnouncementsPage() {
  const announcements = [
    { id: 1, title: "Yeni Mevzuat Değişikliği: 657 Sayılı Kanun Güncellendi.", type: "ÖNEMLİ", date: "04.03.2026", color: "red" },
    { id: 2, title: "Türkiye Geneli Deneme Sınavı Sonuçları Açıklandı.", type: "DUYURU", date: "02.03.2026", color: "blue" },
    { id: 3, title: "Sistem Bakım Çalışması Tamamlandı.", type: "BİLGİ", date: "28.02.2026", color: "slate" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <header className="border-b border-slate-200 pb-6 text-center sm:text-left">
        <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tighter italic">SİSTEM DUYURULARI</h1>
        <p className="text-slate-500 font-medium text-sm mt-1">Sistemdeki tüm güncellemeler ve önemli haberler.</p>
      </header>

      <div className="space-y-4">
        {announcements.map((item, i) => (
          <motion.div 
            key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group"
          >
            <div className="flex items-center gap-6">
              <div className="text-center hidden sm:block border-r border-slate-100 pr-6">
                <span className="block text-[10px] font-black text-slate-300 uppercase">Tarih</span>
                <span className="block text-sm font-bold text-slate-600 tracking-tighter">{item.date}</span>
              </div>
              <div>
                <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-black mb-2 uppercase tracking-widest ${
                  item.color === 'red' ? 'bg-red-50 text-red-600 border border-red-100' :
                  item.color === 'blue' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                  'bg-slate-50 text-slate-500 border border-slate-100'
                }`}>
                  {item.type}
                </span>
                <h4 className="text-sm sm:text-base font-black text-slate-800 group-hover:text-gov-blue transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
            <button className="text-[10px] font-black text-gov-blue uppercase tracking-widest hover:underline">
              Detayı Oku →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}