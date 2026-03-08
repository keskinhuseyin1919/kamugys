import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MockExams() {
  // Geri sayım simülasyonu (Mart 2026 Sınavı İçin)
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, mins: 45, secs: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => ({ ...prev, secs: prev.secs > 0 ? prev.secs - 1 : 59 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activeExams = [
    { id: "tg-102", title: "2026 Mart Dönemi - Büyük GYS Denemesi", participants: "12.450+", status: "Geri Sayım", isVip: true, date: "07 Mart 2026" },
    { id: "tg-101", title: "Kurum İçi Yükselme Genel Provası", participants: "8.120+", status: "Tamamlandı", isVip: false, date: "25 Şubat 2026", myRank: "412" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20">
      
      {/* ÜST BAŞLIK VE MOTİVASYON */}
      <header className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-10">
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-5xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
            TÜRKİYE <span className="text-gov-blue">GENELİ</span> DENEMELER
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-[0.3em] flex items-center justify-center md:justify-start gap-3">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
            Kürsüye bir adım kala, rakiplerinle yarış.
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-3xl border border-slate-200 dark:border-slate-700 flex gap-6 px-10 shadow-inner">
          <div className="text-center"><p className="text-[10px] font-black text-slate-400 uppercase">Aktif Aday</p><p className="text-xl font-black text-gov-blue">15.4K</p></div>
          <div className="w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
          <div className="text-center"><p className="text-[10px] font-black text-slate-400 uppercase">Toplam Deneme</p><p className="text-xl font-black text-gov-blue">48</p></div>
        </div>
      </header>

      {/* 1. KATMAN: ANA GERİ SAYIM (VİTRİN SINAV) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="relative bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white overflow-hidden shadow-2xl shadow-blue-900/40"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gov-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="px-5 py-2 bg-gov-blue text-white text-[10px] font-black rounded-full uppercase tracking-[0.4em] shadow-lg shadow-blue-500/40">Gelecek Sınav</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              BÜYÜK MART <br /> <span className="text-gov-blue">MARATONU</span>
            </h2>
            <p className="text-blue-200/60 font-bold uppercase tracking-widest text-xs">
              Tüm kurumların katılımıyla gerçekleşecek dev GYS provası.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black border border-white/10 uppercase italic">⚖️ Tam Müfredat</span>
              <span className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black border border-white/10 uppercase italic">🏆 Sıralama Garantili</span>
            </div>
          </div>

          {/* GERİ SAYIM WIDGET */}
          <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white/10 text-center">
            <p className="text-[10px] font-black text-blue-300 uppercase tracking-[0.4em] mb-8">Sınav Başlangıcına</p>
            <div className="flex justify-center gap-4 md:gap-8">
              {[
                { val: timeLeft.days, label: 'GÜN' },
                { val: timeLeft.hours, label: 'SAAT' },
                { val: timeLeft.mins, label: 'DK' },
                { val: timeLeft.secs, label: 'SN' }
              ].map((t, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-5xl font-black font-mono tracking-tighter">{String(t.val).padStart(2, '0')}</div>
                  <div className="text-[9px] font-black text-slate-500 mt-2 uppercase">{t.label}</div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-5 bg-white text-slate-900 font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
              SINAV KAYDINI OLUŞTUR
            </button>
          </div>
        </div>
      </motion.div>

      {/* 2. KATMAN: DİĞER DENEMELER VE ARŞİV */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* AKTİF LİSTE */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] ml-4 italic">Deneme Takvimi & Arşivi</h3>
          {activeExams.map((exam, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + (i*0.1) }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 hover:border-gov-blue transition-all group"
            >
              <div className="flex items-center gap-6 flex-1 text-center md:text-left flex-col md:flex-row">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${exam.status === 'Tamamlandı' ? 'bg-slate-100' : 'bg-blue-50'} dark:bg-slate-800`}>
                  {exam.status === 'Tamamlandı' ? '🏁' : '🕒'}
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight italic group-hover:text-gov-blue transition-colors">
                    {exam.title}
                  </h4>
                  <div className="flex gap-4 mt-1 justify-center md:justify-start">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">👥 {exam.participants} Katılım</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">📅 {exam.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {exam.myRank && (
                  <div className="text-right pr-4 border-r border-slate-100 dark:border-slate-800">
                    <p className="text-[9px] font-black text-slate-400 uppercase">Sıralaman</p>
                    <p className="text-lg font-black text-emerald-500">#{exam.myRank}</p>
                  </div>
                )}
                <Link 
                  to={exam.status === 'Tamamlandı' ? '/panel/exam-result' : '#'}
                  className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    exam.status === 'Tamamlandı' 
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-gov-blue hover:text-white' 
                    : 'bg-gov-blue text-white shadow-lg shadow-blue-500/20 hover:scale-105'
                  }`}
                >
                  {exam.status === 'Tamamlandı' ? 'ANALİZİ GÖR' : 'DETAYLAR'}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SAĞ TARAF: SIRALAMA LİDERLERİ (PRESTİJ) */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <h3 className="text-[10px] font-black text-gov-blue uppercase tracking-[0.3em] mb-8 italic border-b dark:border-slate-800 pb-4 flex justify-between items-center">
            AYIN ŞAMPİYONLARI 🏆
            <span className="bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded text-[8px]">MART '26</span>
          </h3>
          <div className="space-y-6">
            {[
              { rank: 1, name: "Mehmet A.", score: "98.5", institution: "EGM" },
              { rank: 2, name: "Selin Y.", score: "97.2", institution: "ADALET" },
              { rank: 3, name: "Burak K.", score: "96.8", institution: "SAĞLIK" }
            ].map((lead, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${
                    i === 0 ? 'bg-amber-400 text-white' : i === 1 ? 'bg-slate-300 text-slate-700' : 'bg-orange-400 text-white'
                  }`}>
                    {lead.rank}
                  </span>
                  <div>
                    <p className="text-[11px] font-black text-slate-800 dark:text-white uppercase">{lead.name}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{lead.institution}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-gov-blue">{lead.score}</p>
                  <p className="text-[8px] font-black text-slate-400 uppercase">PUAN</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 font-bold text-center mt-8 leading-relaxed uppercase tracking-tighter italic">
            Sıralamada yerini almak için <br /> <span className="text-gov-blue underline cursor-pointer">VIP üye olmalısın.</span>
          </p>
        </div>

      </div>
    </div>
  );
}