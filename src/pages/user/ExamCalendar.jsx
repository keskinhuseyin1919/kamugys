import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ExamCalendar() {
  const [currentDate] = useState(new Date());
  
  // Simüle Edilen Takvim Verileri
  const events = [
    { day: 12, type: 'Deneme', title: 'Türkiye Geneli - 1', color: 'bg-red-500' },
    { day: 15, type: 'Canlı', title: '657 Sayılı Kanun Soru Çözümü', color: 'bg-gov-blue' },
    { day: 22, type: 'Mevzuat', title: 'Anayasa Değişikliği Analizi', color: 'bg-emerald-500' },
    { day: 28, type: 'Hedef', title: 'İdare Hukuku Bitirme Günü', color: 'bg-amber-500' },
  ];

  // Basit bir takvim ızgarası oluşturma (Mart 2026 için temsili)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      
      {/* 🚀 ÜST BAŞLIK VE NAVİGASYON */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-slate-200 dark:border-slate-800 pb-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
            SINAV & <span className="text-gov-blue">ÇALIŞMA</span> TAKVİMİ
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-2 h-2 bg-gov-blue rounded-full"></span>
            Mart 2026 - Maraton Planı
          </p>
        </div>
        
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-gov-blue transition-all">
            AYLIK
          </button>
          <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest">
            HAFTALIK
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 📅 TAKVİM IZGARASI (SOL) */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 p-10 shadow-sm">
          <div className="grid grid-cols-7 gap-4 mb-8">
            {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(d => (
              <div key={d} className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">{d}</div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-4">
            {days.map(day => {
              const dayEvents = events.filter(e => e.day === day);
              return (
                <div 
                  key={day} 
                  className={`min-h-[100px] p-3 rounded-3xl border transition-all ${
                    day === 8 ? 'bg-gov-blue/5 border-gov-blue ring-2 ring-gov-blue/10' : 'bg-slate-50/50 dark:bg-slate-800/30 border-transparent hover:border-slate-200'
                  }`}
                >
                  <span className={`text-sm font-black ${day === 8 ? 'text-gov-blue' : 'text-slate-400'}`}>{day}</span>
                  <div className="mt-2 space-y-1">
                    {dayEvents.map((e, idx) => (
                      <div key={idx} className={`w-full h-1.5 ${e.color} rounded-full`} title={e.title}></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 📋 ETKİNLİK DETAYLARI (SAĞ) */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-6 italic">Yaklaşan Önemli Günler</h3>
          <div className="space-y-4">
            {events.map((e, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                key={i} className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-6 group hover:scale-[1.02] transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl ${e.color} flex items-center justify-center text-white font-black text-sm shadow-lg`}>
                  {e.day}
                </div>
                <div>
                  <p className="text-[8px] font-black text-gov-blue uppercase tracking-widest">{e.type}</p>
                  <h4 className="text-[11px] font-bold text-slate-800 dark:text-white uppercase leading-tight mt-1">{e.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white space-y-4 shadow-xl shadow-slate-900/20">
            <h4 className="text-sm font-black uppercase italic tracking-tighter">Mühürlü Hatırlatıcı</h4>
            <p className="text-[10px] text-slate-400 leading-relaxed font-medium uppercase tracking-wide">
              Seçtiğin önemli günlerde sistem sana mobil bildirim ve e-posta ile mühürlü bir hatırlatma gönderir. 🚀
            </p>
            <button className="w-full py-4 bg-white text-slate-900 text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-gov-blue hover:text-white transition-all">
              BİLDİRİMLERİ AYARLA
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}