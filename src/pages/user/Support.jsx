import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Support() {
  const [activeTab, setActiveTab] = useState('new'); // 'new' veya 'history'

  const tickets = [
    { id: "TKT-4521", subject: "657 Sayılı Kanun 48. Madde Soru Hatası", status: "Cevaplandı", date: "07.03.2026", priority: "Yüksek" },
    { id: "TKT-4410", subject: "VIP Üyelik Aktivasyon Sorunu", status: "İnceleniyor", date: "05.03.2026", priority: "Kritik" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Destek talebiniz mühürlendi! En kısa sürede dönüş yapılacaktır. 🛡️");
    setActiveTab('history');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-20">
      
      {/* 🚀 ÜST BAŞLIK VE SEKME SEÇİCİ */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-slate-200 dark:border-slate-800 pb-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
            DESTEK <span className="text-gov-blue">MERKEZİ</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-2 h-2 bg-gov-blue rounded-full animate-pulse"></span>
            Sorunlarını İlet, Çözümü Mühürleyelim
          </p>
        </div>
        
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl shadow-inner">
          <button 
            onClick={() => setActiveTab('new')}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'new' ? 'bg-white dark:bg-slate-700 text-gov-blue shadow-md' : 'text-slate-400'}`}
          >
            YENİ TALEP
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'history' ? 'bg-white dark:bg-slate-700 text-gov-blue shadow-md' : 'text-slate-400'}`}
          >
            TALEPLERİM ({tickets.length})
          </button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {activeTab === 'new' ? (
          /* 📝 YENİ DESTEK TALEBİ FORMU */
          <motion.div 
            key="new" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 p-10 lg:p-16 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Konu Kategorisi</label>
                  <select className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white outline-none focus:ring-2 focus:ring-gov-blue transition-all" required>
                    <option value="">Seçiniz...</option>
                    <option>Soru Hatası Bildirimi</option>
                    <option>Ödeme ve VIP Sorunları</option>
                    <option>Teknik Hata / Bug</option>
                    <option>Öneri ve Görüşler</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Aciliyet Durumu</label>
                  <select className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white outline-none focus:ring-2 focus:ring-gov-blue transition-all" required>
                    <option>Normal</option>
                    <option>Yüksek</option>
                    <option className="text-red-500 font-bold">Kritik (Acil)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Mesajınız</label>
                <textarea 
                  className="w-full p-8 bg-slate-50 dark:bg-slate-800 border-none rounded-[2rem] text-sm font-medium dark:text-white outline-none focus:ring-2 focus:ring-gov-blue transition-all min-h-[200px]"
                  placeholder="Sorununuzu veya bildirmek istediğiniz hatayı detaylıca yazın..."
                  required
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                <p className="text-[10px] text-slate-400 font-bold uppercase italic tracking-wider max-w-md">
                  * Soru hatası bildirimlerinde lütfen Soru ID numarasını belirtmeyi unutmayın.
                </p>
                <button type="submit" className="px-12 py-5 bg-gov-blue text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-blue-500/20 hover:scale-105 transition-all">
                  TALEBİ GÖNDER 🛡️
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          /* 📜 TALEP GEÇMİŞİ LİSTESİ */
          <motion.div 
            key="history" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {tickets.map((t, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-gov-blue transition-all">
                <div className="flex items-center gap-6 flex-1">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black ${
                    t.status === 'Cevaplandı' ? 'bg-emerald-50 text-emerald-500' : 'bg-amber-50 text-amber-500'
                  } dark:bg-slate-800`}>
                    {t.status === 'Cevaplandı' ? '✓' : '⌛'}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight">{t.subject}</h3>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase ${t.priority === 'Kritik' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                        {t.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-[9px] font-black text-gov-blue uppercase">{t.id}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{t.date}</span>
                    </div>
                  </div>
                </div>
                <button className="px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl text-[9px] font-black uppercase hover:bg-gov-blue hover:text-white transition-all">
                  DETAYLARI GÖR
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 📞 HIZLI İLETİŞİM KARTI */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gov-blue/20 rounded-full blur-[80px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter">Acil Bir Durum mu Var?</h2>
            <p className="text-slate-400 text-xs font-medium max-w-lg leading-relaxed uppercase tracking-wider">
              VIP üyelerimiz için öncelikli destek hattımız 7/24 hizmetinizdedir. WhatsApp üzerinden mühürlü destek alabilirsiniz.
            </p>
          </div>
          <button className="px-10 py-5 bg-emerald-500 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all">
            WHATSAPP DESTEK HATTI 🟢
          </button>
        </div>
      </div>

    </div>
  );
}