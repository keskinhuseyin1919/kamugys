import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function AdminDashboard() {
  const { darkMode } = useTheme();

  // Üst Özet Verileri
  const summaryStats = [
    { label: "Toplam Aday", value: "8,420", growth: "+12%", icon: "👥", color: "text-blue-500" },
    { label: "VIP Üye Sayısı", value: "1,250", growth: "+24%", icon: "💎", color: "text-amber-500" },
    { label: "Toplam Soru Havuzu", value: "45,000", growth: "Güncel", icon: "📚", color: "text-emerald-500" },
    { label: "Bekleyen Destek", value: "14", growth: "Acil", icon: "💬", color: "text-red-500" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      
      {/* ÜST BAŞLIK */}
      <header className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div>
          <h1 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">
            KONTROL <span className="text-gov-blue">PANELİ</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest mt-1 italic">
            05 MART 2026 • Sistem Durumu: <span className="text-emerald-500">Kusursuz 🟢</span>
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
            Rapor Al 📥
          </button>
          <button className="px-6 py-3 bg-gov-blue text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
            Yeni Duyuru 📢
          </button>
        </div>
      </header>

      {/* 1. KATMAN: ÖZET KARTLARI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryStats.map((stat, i) => (
          <motion.div 
            key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl group-hover:scale-110 transition-transform">{stat.icon}</span>
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 ${stat.color}`}>
                {stat.growth}
              </span>
            </div>
            <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{stat.label}</h3>
            <p className="text-3xl font-black text-slate-800 dark:text-white tracking-tighter leading-none">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* 2. KATMAN: GRAFİK VE AKTİVİTE AKIŞI */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SOL: SİSTEM BÜYÜME GRAFİĞİ (Görsel Simülasyon) */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 p-10 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter">Kayıt Trendi (Son 7 Gün)</h3>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400"><span className="w-2 h-2 rounded-full bg-blue-500"></span> STANDART</div>
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400"><span className="w-2 h-2 rounded-full bg-amber-500"></span> VIP</div>
            </div>
          </div>

          <div className="flex items-end justify-between h-64 gap-4">
            {[60, 45, 80, 55, 95, 70, 85].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                <div className="w-full flex gap-1 items-end h-full">
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: `${h}%` }}
                    className="flex-1 bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-500 transition-all rounded-t-lg"
                  />
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: `${h * 0.4}%` }}
                    className="flex-1 bg-amber-100 dark:bg-amber-900/30 group-hover:bg-amber-500 transition-all rounded-t-lg"
                  />
                </div>
                <span className="text-[9px] font-black text-slate-400 uppercase">Pzt</span>
              </div>
            ))}
          </div>
        </div>

        {/* SAĞ: BEKLEYEN VIP ONAYLARI */}
        <div className="lg:col-span-4 bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
          <h3 className="text-lg font-black uppercase italic tracking-tighter mb-8 border-b border-white/10 pb-4">Bekleyen Mühürler</h3>
          <div className="space-y-6">
            {[
              { name: "Selin Y.", inst: "Adalet Bak.", time: "2dk önce" },
              { name: "Ahmet K.", inst: "Milli Eğitim", time: "15dk önce" },
              { name: "Derya M.", inst: "Sağlık Bak.", time: "1sa önce" },
            ].map((app, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer">
                <div>
                  <p className="text-sm font-black uppercase group-hover:text-gov-blue transition-colors">{app.name}</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{app.inst}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-black text-slate-400 mb-2">{app.time}</p>
                  <button className="px-3 py-1 bg-white/5 hover:bg-gov-blue rounded-lg text-[8px] font-black uppercase transition-all">Onayla</button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-4 bg-gov-blue text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl">
            Tüm Başvuruları Gör →
          </button>
        </div>

      </div>

    </div>
  );
}