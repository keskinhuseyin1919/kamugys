import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Landing() {
  const features = [
    { title: "45.000+ Mühürlü Soru", desc: "Tamamı güncel mevzuata uygun, açıklamalı soru bankası.", icon: "📚" },
    { title: "Yapay Zeka Analizi", desc: "Zayıf olduğun konuları tespit eden akıllı algoritma.", icon: "🧠" },
    { title: "Türkiye Geneli Denemeler", desc: "Rakiplerinle gerçek sınav provasında yarışma imkanı.", icon: "🏆" },
    { title: "VIP Materyal Arşivi", desc: "Özel PDF notlar, video dersler ve özet tablolar.", icon: "💎" },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      
      {/* 🚀 NAVİGASYON BARI (Landing Özel) */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-50">
        <h1 className="text-2xl font-black italic tracking-tighter">KAMU<span className="text-gov-blue">GYS</span></h1>
        <div className="flex items-center gap-8">
          <Link to="/auth" className="text-[10px] font-black uppercase tracking-widest hover:text-gov-blue transition-all">Giriş Yap</Link>
          <Link to="/auth" className="px-8 py-3 bg-gov-blue text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">Ücretsiz Başla</Link>
        </div>
      </nav>

      {/* 🏛️ HERO SECTION (VİTRİN) */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        {/* Arka Plan Dekorasyonu */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none text-[30rem] font-black italic -translate-x-20 -translate-y-20">GYS</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gov-blue/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 text-center space-y-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="px-5 py-2 bg-slate-100 dark:bg-slate-900 text-gov-blue text-[10px] font-black rounded-full uppercase tracking-[0.4em] shadow-sm border border-slate-200 dark:border-slate-800">
              Yeni Nesil Sınav Hazırlık Portalı
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9]"
          >
            KÜRSÜYE BİR <br /> <span className="text-gov-blue">ADIM KALA</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 font-bold text-sm md:text-lg uppercase tracking-widest max-w-2xl mx-auto leading-relaxed"
          >
            Görevde yükselme maratonunda en güçlü yardımcın. Mühürlü sorular, dev döküman arşivi ve gerçek zamanlı analizler burada.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
             className="flex flex-col md:flex-row justify-center items-center gap-6 pt-10"
          >
            <Link to="/auth" className="w-full md:w-auto px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.3em] shadow-2xl hover:bg-gov-blue hover:text-white transition-all">
              MARATONU BAŞLAT ⚔️
            </Link>
            <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-gov-blue transition-colors">
              Sistemi Keşfet ↓
            </button>
          </motion.div>
        </div>
      </header>

      {/* 🎯 ÖZELLİKLER (FEATURES) */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={i} whileHover={{ y: -10 }}
            className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-6"
          >
            <div className="text-4xl">{f.icon}</div>
            <h4 className="text-sm font-black uppercase italic tracking-tight text-slate-800 dark:text-white">{f.title}</h4>
            <p className="text-[11px] font-medium text-slate-400 leading-relaxed uppercase">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* 📊 KURUMSAL GÜVEN (STATS) */}
      <section className="bg-gov-navy dark:bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          <div><p className="text-5xl font-black tracking-tighter italic">45.000</p><p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mt-2">Mühürlü Soru</p></div>
          <div><p className="text-5xl font-black tracking-tighter italic">12.500</p><p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mt-2">Aktif Aday</p></div>
          <div><p className="text-5xl font-black tracking-tighter italic">82</p><p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mt-2">Farklı Kurum</p></div>
          <div><p className="text-5xl font-black tracking-tighter italic">48</p><p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mt-2">Deneme Sınavı</p></div>
        </div>
      </section>

      {/* 🏁 FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100 dark:border-slate-800 text-center space-y-8">
        <h2 className="text-xl font-black italic tracking-tighter uppercase">KAMU<span className="text-gov-blue">GYS</span></h2>
        <div className="flex justify-center gap-10 text-[9px] font-black text-slate-400 uppercase tracking-widest">
          <button className="hover:text-gov-blue transition-colors">KVKK Aydınlatma</button>
          <button className="hover:text-gov-blue transition-colors">Mesafeli Satış</button>
          <button className="hover:text-gov-blue transition-colors">Kullanım Koşulları</button>
        </div>
        <p className="text-[9px] font-bold text-slate-300 uppercase italic">© 2026 Tüm Hakları Saklıdır. Mühürlü İçerik.</p>
      </footer>

    </div>
  );
}