import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ExamResult() {
  // 🧠 TESİSAT (Simüle edilmiş sınav verileri)
  const result = {
    score: 84.50,
    rank: "412 / 12.450",
    correct: 68,
    wrong: 12,
    empty: 0,
    timeSpent: "72 dk",
    topics: [
      { name: "657 Sayılı DMK", total: 20, correct: 18, color: "bg-emerald-500" },
      { name: "T.C. Anayasası", total: 15, correct: 9, color: "bg-amber-500" },
      { name: "İdare Hukuku", total: 15, correct: 6, color: "bg-red-500" },
      { name: "Resmi Yazışma", total: 10, correct: 10, color: "bg-blue-500" },
    ]
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      
      {/* 🧱 TUĞLA: SKOR VİTRİNİ */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="bg-gov-navy dark:bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl"
      >
        <div className="relative z-10 space-y-4">
          <span className="px-4 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">Resmi Sınav Sonucu</span>
          <h1 className="text-7xl font-black tracking-tighter italic">{result.score}</h1>
          <p className="text-blue-200/60 font-bold uppercase tracking-widest text-xs">Türkiye Geneli Sıralaman: <span className="text-white">{result.rank}</span></p>
        </div>
        {/* Dekoratif Mühür Arkada */}
        <div className="absolute -bottom-10 -right-10 text-[15rem] font-black text-white/5 italic pointer-events-none select-none">PASSED</div>
      </motion.div>

      {/* 📊 DETAYLI İSTATİSTİK KUTULARI */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Doğru", val: result.correct, color: "text-emerald-500", icon: "✅" },
          { label: "Yanlış", val: result.wrong, color: "text-red-500", icon: "❌" },
          { label: "Boş", val: result.empty, color: "text-slate-400", icon: "⚪" },
          { label: "Süre", val: result.timeSpent, color: "text-blue-500", icon: "⏱️" },
        ].map((item, i) => (
          <motion.div 
            key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 text-center shadow-sm"
          >
            <span className="text-2xl mb-2 block">{item.icon}</span>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
            <p className={`text-2xl font-black ${item.color}`}>{item.val}</p>
          </motion.div>
        ))}
      </div>

      {/* ⚖️ MEVZUAT BAZLI ANALİZ (En Önemli Kısım) */}
      <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 shadow-sm border border-slate-100 dark:border-slate-700">
        <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mb-10 border-b pb-4">Konu Performans Detayı</h3>
        <div className="space-y-8">
          {result.topics.map((topic, i) => {
            const percentage = (topic.correct / topic.total) * 100;
            return (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase">{topic.name}</span>
                  <span className="text-[10px] font-bold text-slate-400">{topic.correct} / {topic.total} Doğru</span>
                </div>
                <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    className={`h-full ${topic.color} rounded-full`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🚀 AKSİYON BUTONLARI */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/panel/mock-exams" className="flex-1 py-5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-white text-center font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-200 transition-all">
          ← Deneme Listesine Dön
        </Link>
        <button className="flex-1 py-5 bg-gov-blue text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all">
          Hatalı Soruları İncele 🔍
        </button>
      </div>

    </div>
  );
}