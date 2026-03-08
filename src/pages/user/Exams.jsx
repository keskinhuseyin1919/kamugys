import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Exams() {
  const [activeView, setActiveView] = useState('menu'); // 'menu' veya 'solving'
  const [reportModal, setReportModal] = useState(null); // null, 'hata', 'telif'
  
  // ==========================================
  // PLAN KONTROL SİMÜLASYONU (Haritadaki 3. Madde)
  // ==========================================
  const userStatus = "STANDART"; // "STANDART" veya "VIP"
  const solvedQuestionsCount = 10; // Kullanıcının bugüne kadar çözdüğü toplam soru
  const FREE_PLAN_LIMIT = 10;

  const isLimitReached = userStatus === "STANDART" && solvedQuestionsCount >= FREE_PLAN_LIMIT;

  const closeModal = () => setReportModal(null);

  // 🔒 SINIR AŞILDI EKRANI (VIP'ye Yönlendirme)
  if (isLimitReached) {
    return (
      <div className="max-w-4xl mx-auto mt-10 md:mt-20 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-slate-900 rounded-[3.5rem] border-4 border-dashed border-blue-100 dark:border-slate-800 p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="text-8xl mb-6 inline-block animate-bounce">💎</div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white tracking-tighter uppercase italic leading-none">
              SORU SINIRINA <br /> <span className="text-gov-blue">ULAŞILDI!</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-slate-500 dark:text-slate-400 font-bold text-lg leading-relaxed">
                Ücretsiz plan dahilinde <span className="text-red-500 font-black underline decoration-2">{FREE_PLAN_LIMIT} soru</span> çözme hakkınız dolmuştur.
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.2em] max-w-md mx-auto">
                Binlerce güncel mevzuat sorusu ve mühürlü profil için VIP üyeliğe geçin.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link 
                to="/panel/upgrade" 
                className="px-12 py-5 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-2xl shadow-xl shadow-amber-500/20 transition-all uppercase tracking-[0.2em] text-xs"
              >
                🌟 ŞİMDİ VIP ÜYE OL
              </Link>
              <Link 
                to="/panel/support" 
                className="px-10 py-5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-black rounded-2xl transition-all uppercase tracking-[0.2em] text-xs"
              >
                Destek Al
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // ✅ NORMAL SINAV EKRANI
  return (
    <div className="max-w-6xl mx-auto pb-20">
      
      <header className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">
            {activeView === 'menu' ? 'SINAV MERKEZİ' : 'SORU PANELİ'}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-2 uppercase tracking-widest">
            {activeView === 'menu' ? 'Çalışma Modunuzu Seçin' : 'Mevzuat: 657 Sayılı Kanun'}
          </p>
        </div>
        
        {activeView === 'solving' && (
          <button 
            onClick={() => setActiveView('menu')}
            className="px-6 py-3 bg-slate-900 dark:bg-slate-800 text-white text-[10px] font-black rounded-xl transition-all uppercase tracking-[0.2em] hover:bg-gov-blue shadow-lg"
          >
            ← Merkeze Dön
          </button>
        )}
      </header>

      <AnimatePresence mode="wait">
        {activeView === 'menu' ? (
          /* MOD SEÇİM MENÜSÜ */
          <motion.div 
            key="menu" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { id: 'topic', title: 'Konu Bazlı Çöz', desc: 'Mevzuat seçerek odaklanmış testler oluşturun.', icon: '📚', color: 'hover:border-gov-blue', bg: 'bg-blue-50', text: 'text-gov-blue' },
              { id: 'mixed', title: 'Karışık Soru Çöz', desc: 'Sistemin tüm mevzuatlardan derlediği karma testler.', icon: '🔀', color: 'hover:border-amber-500', bg: 'bg-amber-50', text: 'text-amber-500' },
              { id: 'wrong', title: 'Hataları Temizle', desc: 'Daha önce yanlış yaptığınız soruları tekrar çözün.', icon: '🎯', color: 'hover:border-red-500', bg: 'bg-red-50', text: 'text-red-500' },
              { id: 'fav', title: 'Favorilerim', desc: 'Yıldızladığınız özel sorularla tekrar yapın.', icon: '⭐', color: 'hover:border-emerald-500', bg: 'bg-emerald-50', text: 'text-emerald-500' },
            ].map((mode) => (
              <div 
                key={mode.id} 
                onClick={() => setActiveView('solving')} 
                className={`bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 cursor-pointer transition-all group flex items-start gap-6 shadow-sm ${mode.color}`}
              >
                <div className={`w-16 h-16 ${mode.bg} dark:bg-slate-800 ${mode.text} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-inner`}>
                  {mode.icon}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight group-hover:text-slate-900 dark:group-hover:text-blue-400">
                    {mode.title}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 font-bold leading-relaxed uppercase tracking-widest">
                    {mode.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          /* SORU ÇÖZME PANELİ */
          <motion.div 
            key="solving" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div 
              className="relative bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm p-10 md:p-14 overflow-hidden select-none"
              onContextMenu={(e) => e.preventDefault()} 
            >
              {/* Filigran / Kopyalama Koruması */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] dark:opacity-[0.05] rotate-[-25deg] z-0">
                <span className="text-[120px] font-black tracking-tighter">KAMUGYS PROTECT</span>
              </div>

              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-6">
                  <span className="text-[10px] font-black text-gov-blue dark:text-blue-400 uppercase tracking-[0.3em] bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-xl">
                    Soru 1 / 100 • Bölüm: Disiplin Hükümleri
                  </span>
                  <button className="text-2xl text-slate-300 hover:text-amber-400 transition-colors scale-125">☆</button>
                </div>

                <p className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight tracking-tight">
                  Aşağıdakilerden hangisi 657 sayılı Devlet Memurları Kanunu'na göre "Disiplin Cezaları" arasında yer almaz?
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {['Uyarma', 'Kınama', 'Aylıktan Kesme', 'Görevden Uzaklaştırma'].map((option, idx) => (
                    <label key={idx} className="flex items-center gap-5 p-6 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 hover:border-gov-blue dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 cursor-pointer transition-all group">
                      <div className="w-8 h-8 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center font-black text-xs text-slate-400 group-hover:bg-gov-blue group-hover:border-gov-blue group-hover:text-white transition-all">
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="font-bold text-slate-700 dark:text-slate-300 text-lg">{option}</span>
                      <input type="radio" name="answer" className="hidden" />
                    </label>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex gap-2">
                    <button onClick={() => setReportModal('hata')} className="px-4 py-2 rounded-xl border border-red-100 dark:border-red-900/30 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all text-[9px] font-black uppercase tracking-widest">
                      ⚠️ Hata Bildir
                    </button>
                    <button onClick={() => setReportModal('telif')} className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50 transition-all text-[9px] font-black uppercase tracking-widest">
                      ©️ Telif
                    </button>
                  </div>
                  <button className="px-10 py-4 bg-slate-900 dark:bg-blue-600 text-white text-[10px] font-black rounded-2xl uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                    Sonraki Soru →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODALLAR (HATA & TELİF) */}
      <AnimatePresence>
        {reportModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={closeModal}></motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <div className={`px-8 py-6 border-b dark:border-slate-800 ${reportModal === 'hata' ? 'bg-red-50 dark:bg-red-900/10' : 'bg-slate-50 dark:bg-slate-800/50'}`}>
                <h3 className={`font-black uppercase tracking-widest text-xs italic ${reportModal === 'hata' ? 'text-red-600' : 'text-slate-700 dark:text-slate-300'}`}>
                  {reportModal === 'hata' ? '⚠️ Soru Hata Bildirimi' : '©️ Telif Hakkı Bildirimi'}
                </h3>
              </div>
              <div className="p-8 space-y-5">
                <textarea 
                  className="w-full p-6 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-3xl outline-none focus:border-gov-blue dark:text-white text-sm font-medium min-h-[150px] resize-none"
                  placeholder={reportModal === 'hata' ? "Lütfen sorudaki hatayı kısaca açıklayın..." : "Telif hakkı ihlali için kaynak belirtiniz..."}
                ></textarea>
                <button onClick={closeModal} className="w-full py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl">
                  BİLDİRİMİ GÖNDER
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}