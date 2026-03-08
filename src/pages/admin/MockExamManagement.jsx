import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function MockExamManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // SAHTE VERİ: Mevcut Deneme Sınavları
  const [mockExams, setMockExams] = useState([
    { id: 1, title: "2026 Mart Büyük GYS Provası", date: "07.03.2026", time: "10:00", duration: "120 dk", target: "Tüm Kurumlar", status: "Yayında", participants: 12450 },
    { id: 2, title: "Adalet Bakanlığı Görevde Yükselme", date: "15.03.2026", time: "14:00", duration: "90 dk", target: "Adalet Bak.", status: "Taslak", participants: 0 },
    { id: 3, title: "Şubat Sonu Genel Tekrar Denemesi", date: "28.02.2026", time: "20:00", duration: "100 dk", target: "Tüm Kurumlar", status: "Tamamlandı", participants: 8120 },
  ]);

  const handleCreateExam = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    toast.success("Türkiye Geneli Deneme Sınavı başarıyla planlandı! 🚀", {
      icon: '🏆',
      style: { borderRadius: '15px', background: '#1e293b', color: '#fff', fontSize: '12px', fontWeight: 'bold' }
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      
      {/* ÜST BAŞLIK VE AKSİYON */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
            DENEME <span className="text-gov-blue">OLUŞTURUCU</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-2">
            Türkiye geneli veya kuruma özel deneme sınavlarını planlayın ve kuralları belirleyin.
          </p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-gov-blue text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 hover:scale-105 transition-all"
        >
          + YENİ DENEME SINAVI PLANLA
        </button>
      </header>

      {/* DENEME LİSTESİ */}
      <div className="grid grid-cols-1 gap-6">
        {mockExams.map((exam, index) => (
          <motion.div 
            key={exam.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-8 group hover:border-gov-blue transition-all"
          >
            <div className="flex items-center gap-6 flex-1">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner ${
                exam.status === 'Yayında' ? 'bg-blue-50 text-blue-500' : 
                exam.status === 'Tamamlandı' ? 'bg-emerald-50 text-emerald-500' : 'bg-slate-100 text-slate-400'
              } dark:bg-slate-800`}>
                {exam.status === 'Yayında' ? '📡' : exam.status === 'Tamamlandı' ? '🏁' : '📝'}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
                    {exam.title}
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                    exam.status === 'Yayında' ? 'bg-blue-500 text-white animate-pulse' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {exam.status}
                  </span>
                </div>
                <div className="flex gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>📅 {exam.date} • {exam.time}</span>
                  <span>⏱️ {exam.duration}</span>
                  <span className="text-gov-blue">👥 {exam.participants} Katılımcı</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto">
              <button className="flex-1 lg:flex-none px-6 py-3 bg-slate-50 dark:bg-slate-800 text-slate-500 text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-slate-100 transition-all border border-slate-100 dark:border-slate-700">
                İSTATİSTİKLER
              </button>
              <button className="flex-1 lg:flex-none px-6 py-3 bg-slate-900 text-white text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-gov-blue transition-all shadow-lg">
                DÜZENLE
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* OLUŞTURMA MODALI */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" />
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-3xl rounded-[3rem] p-10 md:p-14 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-y-auto max-h-[90vh] custom-scrollbar"
            >
              <h2 className="text-3xl font-black text-slate-800 dark:text-white uppercase italic mb-8 tracking-tighter">Yeni Deneme Kurgula</h2>
              
              <form onSubmit={handleCreateExam} className="space-y-8">
                {/* TEMEL BİLGİLER */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Sınav Başlığı</label>
                    <input type="text" placeholder="Örn: 2026 Nisan Genel Prova" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Sınav Tarihi</label>
                    <input type="date" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Başlangıç Saati</label>
                    <input type="time" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white" required />
                  </div>
                </div>

                {/* SORU DAĞILIM KURALLARI */}
                <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] border border-dashed border-slate-300 dark:border-slate-700 space-y-6">
                  <h4 className="text-[10px] font-black text-gov-blue uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <span>🧠</span> Otomatik Soru Seçim Kuralları
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase">657 DMK Soru Sayısı</label>
                      <input type="number" placeholder="20" className="w-full p-3 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase">Anayasa Soru Sayısı</label>
                      <input type="number" placeholder="10" className="w-full p-3 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase">Toplam Süre (Dk)</label>
                      <input type="number" placeholder="100" className="w-full p-3 bg-white dark:bg-slate-900 border-none rounded-xl text-xs font-bold" />
                    </div>
                  </div>
                </div>

                {/* SINAV KURALLARI */}
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded accent-gov-blue" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-800 dark:group-hover:text-white transition-colors">4 Yanlış 1 Doğruyu Götürsün</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded accent-gov-blue" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-800 dark:group-hover:text-white transition-colors">Sadece VIP Üyeler Girebilir</span>
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-gov-blue text-white font-black rounded-[2rem] text-[11px] uppercase tracking-[0.3em] shadow-xl shadow-blue-600/20 active:scale-95 transition-all mt-4"
                >
                  DENEME SINAVINI MÜHÜRLE VE YAYINLA 🏆
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}