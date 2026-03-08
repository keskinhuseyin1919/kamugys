import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function NotificationCenter() {
  const [activeTab, setActiveTab] = useState('errors'); // 'errors' veya 'copyright'

  // Örnek Hata Bildirimleri (Soru Hataları)
  const [errorReports, setErrorReports] = useState([
    { id: 101, questionId: 45, user: "Ahmet Y.", issue: "Cevap anahtarı C değil B olmalı.", date: "04.03.2026", status: "Beklemede" },
    { id: 102, questionId: 12, user: "Merve K.", issue: "Soru kökünde yazım yanlışı var.", date: "03.03.2026", status: "İnceleniyor" },
  ]);

  // Örnek Telif Bildirimleri
  const [copyrightReports, setCopyrightReports] = useState([
    { id: 201, materialName: "Anayasa Özet PDF", owner: "X Yayınevi", issue: "İzinsiz içerik kullanımı.", date: "02.03.2026" },
  ]);

  const resolveReport = (id) => {
    setErrorReports(errorReports.filter(r => r.id !== id));
    toast.success("Sorun çözüldü olarak işaretlendi! ✅");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* BAŞLIK */}
      <header className="flex items-center gap-4">
        <div className="bg-red-600 text-white p-4 rounded-2xl shadow-lg shadow-red-900/20 animate-pulse">
          🚨
        </div>
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">Bildirim Merkezi</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Sistem güvenliği ve veri doğruluğu için gelen ihbarlar.</p>
        </div>
      </header>

      {/* TAB NAVİGASYON */}
      <div className="flex bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm w-full md:w-max">
        <button 
          onClick={() => setActiveTab('errors')}
          className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'errors' ? 'bg-red-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
        >
          ⚠️ Soru Hataları ({errorReports.length})
        </button>
        <button 
          onClick={() => setActiveTab('copyright')}
          className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'copyright' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
        >
          ©️ Telif İhbarları ({copyrightReports.length})
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'errors' ? (
          <motion.div 
            key="errors" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 gap-4"
          >
            {errorReports.map((report) => (
              <div key={report.id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border-l-8 border-l-red-500 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 group">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-slate-100 dark:bg-slate-800 text-[10px] font-black text-slate-500 px-2 py-1 rounded">SORU #{report.questionId}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{report.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100">{report.issue}</h3>
                  <p className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-widest">Bildiren: {report.user}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-6 py-2.5 bg-gov-navy dark:bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gov-accent transition-all">Soruyu Düzenle</button>
                  <button onClick={() => resolveReport(report.id)} className="px-6 py-2.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-900/30 hover:bg-emerald-100 transition-all">Çözüldü</button>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="copyright" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 gap-4"
          >
            {copyrightReports.map((report) => (
              <div key={report.id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border-l-8 border-l-slate-800 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-slate-800 text-white text-[10px] font-black px-2 py-1 rounded">TELİF İHBARI</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{report.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100">İçerik: {report.materialName}</h3>
                  <p className="text-xs text-red-500 font-bold mt-1 uppercase">{report.owner} tarafından bildirildi.</p>
                </div>
                <button className="px-10 py-3 bg-red-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-900/20">Materyali Kaldır 🗑️</button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}