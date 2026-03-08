import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function UserDashboard() {
  // 🧠 TESİSAT: Adayın Güncel İstatistikleri
  const stats = [
    { label: "Çözülen Soru", val: "2,450", icon: "📚", color: "text-blue-500" },
    { label: "Başarı Oranı", val: "%82", icon: "🎯", color: "text-emerald-500" },
    { label: "Sınava Kalan", val: "42 Gün", icon: "⏳", color: "text-amber-500" },
    { label: "Türkiye Sırası", val: "128", icon: "🏆", color: "text-purple-500" },
  ];

  const progressData = [
    { name: "657 Sayılı Kanun", progress: 85, color: "bg-blue-500" },
    { name: "T.C. Anayasası", progress: 40, color: "bg-red-500" },
    { name: "İdare Hukuku", progress: 65, color: "bg-emerald-500" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      
      {/* 🎖️ ÜST KARŞILAMA VE PROFİL ÖZETİ */}
      <header className="flex flex-col lg:flex-row gap-8 items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="flex-1 bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800 flex items-center gap-8 shadow-sm"
        >
          <div className="w-24 h-24 bg-gov-blue rounded-3xl flex items-center justify-center text-4xl shadow-lg shadow-blue-500/20 text-white">
            👤
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">HÜSEYİN KESKİN</h1>
              <span className="px-3 py-1 bg-amber-100 text-amber-600 text-[8px] font-black rounded-full uppercase tracking-widest ring-4 ring-amber-50 dark:ring-amber-900/20">VIP ÜYE</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">Adalet Bakanlığı / Yazı İşleri Müdürü Adayı</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          className="bg-gov-navy dark:bg-slate-800 p-10 rounded-[3rem] text-white flex flex-col justify-center items-center text-center space-y-2 relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">GÜNLÜK HEDEF</p>
            <h2 className="text-4xl font-black italic tracking-tighter">150 / 200 Soru</h2>
          </div>
          <div className="absolute -right-4 -bottom-4 text-9xl font-black opacity-5 pointer-events-none italic">TARGET</div>
        </motion.div>
      </header>

      {/* 📊 İSTATİSTİK KARTLARI */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <motion.div 
            key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:border-gov-blue transition-all"
          >
            <span className="text-2xl mb-2 block">{item.icon}</span>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
            <p className={`text-2xl font-black ${item.color} italic tracking-tighter`}>{item.val}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 📈 MEVZUAT HAKİMİYETİ (SOL) */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">Mevzuat Hakimiyeti</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Konu Bazlı Başarı Analizi</p>
            </div>
            <Link to="/panel/statistics" className="text-[9px] font-black text-gov-blue uppercase underline">Tüm Analizi Gör</Link>
          </div>

          <div className="space-y-8">
            {progressData.map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase italic tracking-tight">{item.name}</span>
                  <span className="text-xs font-black text-gov-blue">%{item.progress}</span>
                </div>
                <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🕒 SON AKTİVİTELER (SAĞ) */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-6 italic">Son Aktiviteler</h3>
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 p-8 shadow-sm divide-y dark:divide-slate-800">
            {[
              { type: 'Sınav', title: '657 Sayılı Kanun Testi', result: '18D 2Y', time: '2 saat önce' },
              { type: 'Materyal', title: 'İdare Hukuku Notları', result: 'Okundu', time: 'Dün' },
              { type: 'Deneme', title: 'TG-102 Maratonu', result: '#412. Sıra', time: '3 gün önce' },
            ].map((act, i) => (
              <div key={i} className="py-5 first:pt-0 last:pb-0 group cursor-default">
                <p className="text-[8px] font-black text-gov-blue uppercase tracking-widest">{act.type}</p>
                <h4 className="text-[11px] font-bold text-slate-800 dark:text-white mt-1 group-hover:text-gov-blue transition-colors uppercase">{act.title}</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] font-black text-emerald-500 italic">{act.result}</span>
                  <span className="text-[9px] text-slate-400 font-medium uppercase tracking-tighter">{act.time}</span>
                </div>
              </div>
            ))}
          </div>
          
          <Link to="/panel/exams" className="block w-full py-5 bg-gov-blue text-white text-center font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all">
            HIZLI TEST BAŞLAT 🚀
          </Link>
        </div>

      </div>

    </div>
  );
}