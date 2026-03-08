import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function Statistics() {
  const { darkMode } = useTheme();

  // Simüle Edilen İstatistik Verileri
  const generalStats = [
    { label: "Toplam Çözülen", value: "1,450", icon: "📝", color: "text-blue-500" },
    { label: "Doğru Oranı", value: "%82", icon: "🎯", color: "text-emerald-500" },
    { label: "Soru Başı Süre", value: "42 sn", icon: "⏱️", color: "text-amber-500" },
    { label: "Genel Sıralama", value: "128 / 5.400", icon: "🏆", color: "text-indigo-500" },
  ];

  const topicPerformance = [
    { topic: "657 Sayılı DMK", solved: 450, accuracy: 88, color: "bg-blue-500" },
    { topic: "T.C. Anayasası", solved: 320, accuracy: 65, color: "bg-emerald-500" },
    { topic: "İdare Hukuku", solved: 280, accuracy: 42, color: "bg-red-500" },
    { topic: "Resmi Yazışma", solved: 150, accuracy: 95, color: "bg-amber-500" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      
      {/* ÜST BAŞLIK */}
      <header className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-2">
        <h1 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">
          BAŞARI <span className="text-gov-blue dark:text-blue-500">ANALİZİ</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Verileriniz 2026 GYS müfredatına göre anlık analiz ediliyor.
        </p>
      </header>

      {/* 1. KATMAN: GENEL ÖZET KARTLARI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {generalStats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center group hover:border-gov-blue transition-all"
          >
            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</span>
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">{stat.label}</span>
            <span className={`text-3xl font-black tracking-tighter ${stat.color} dark:text-white`}>{stat.value}</span>
          </motion.div>
        ))}
      </div>

      {/* 2. KATMAN: MEVZUAT BAZLI PERFORMANS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Detaylı İlerleme Listesi */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 p-10 shadow-sm"
        >
          <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mb-10 border-b dark:border-slate-800 pb-4">
            Mevzuat Performans Detayı
          </h3>
          <div className="space-y-10">
            {topicPerformance.map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase">{item.topic}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.solved} Soru Çözüldü</p>
                  </div>
                  <span className={`text-lg font-black ${item.accuracy > 70 ? 'text-emerald-500' : item.accuracy > 50 ? 'text-amber-500' : 'text-red-500'}`}>
                    %{item.accuracy}
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.accuracy}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className={`h-full rounded-full ${item.color} shadow-lg shadow-black/5`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* VIP ÖZEL: GÜNLÜK AKTİVİTE GRAFİĞİ SİMÜLASYONU */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gov-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div>
            <span className="px-3 py-1 bg-amber-500 text-white text-[9px] font-black rounded-lg uppercase tracking-widest italic">💎 VIP ANALİZ</span>
            <h3 className="text-2xl font-black uppercase italic tracking-tighter mt-4 leading-none">Haftalık Soru <br /> <span className="text-gov-blue">Trendi</span></h3>
          </div>

          {/* Sahte Grafik Çizgileri */}
          <div className="flex items-end justify-between h-48 gap-2 mt-8">
            {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                  className="w-full bg-gov-blue/40 group-hover:bg-gov-blue rounded-t-xl transition-all relative"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity">
                    {h * 5}
                  </div>
                </motion.div>
                <span className="text-[9px] font-black text-slate-500 uppercase">G{i+1}</span>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-8 border-t border-slate-800 pt-6">
            Son 7 günde performansın <span className="text-emerald-400">%12 arttı!</span> 🚀
          </p>
        </motion.div>

      </div>

    </div>
  );
}