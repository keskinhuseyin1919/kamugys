import { motion, AnimatePresence } from 'framer-motion';

export default function ExamStartModal({ isOpen, onClose, onStart, exam }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Arka Plan Karartma */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal İçeriği */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
        >
          {/* Üst Görsel/İkon Alanı */}
          <div className="bg-gov-navy p-8 text-center relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-5xl mb-4 block">📝</span>
              <h2 className="text-xl font-black text-white uppercase tracking-tighter italic">Sınav Hazırlığı</h2>
              <p className="text-blue-300 text-[10px] font-bold uppercase tracking-widest mt-1">Lütfen kuralları dikkatlice okuyunuz</p>
            </div>
            <div className="absolute -right-10 -top-10 text-9xl opacity-10 text-white italic font-black">GYS</div>
          </div>

          <div className="p-8 space-y-6">
            {/* Sınav Özet Bilgileri */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Soru Sayısı</p>
                <p className="text-lg font-black text-slate-800 dark:text-white">{exam?.questionCount || 20}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Toplam Süre</p>
                <p className="text-lg font-black text-slate-800 dark:text-white">{exam?.duration || 45} Dakika</p>
              </div>
            </div>

            {/* Kurallar Listesi */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-black text-gov-navy dark:text-blue-400 uppercase tracking-widest border-b dark:border-slate-800 pb-2">Sınav Kuralları</h4>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 font-medium">
                <li className="flex gap-2"><span>•</span> Sınav başladığında süreniz otomatik olarak işlemeye başlar.</li>
                <li className="flex gap-2"><span>•</span> Sayfayı yenilemek sınavınızı sonlandırabilir.</li>
                <li className="flex gap-2"><span>•</span> Yanlış cevaplar puanınızı etkilemez (Kurum içi kural).</li>
                <li className="flex gap-2"><span>•</span> Sınav bitiminde sonuçlarınız anında profilinize işlenir.</li>
              </ul>
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex gap-3 pt-4">
              <button 
                onClick={onClose}
                className="flex-1 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                Vazgeç
              </button>
              <button 
                onClick={onStart}
                className="flex-[2] py-4 bg-gov-navy dark:bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-gov-accent transition-all shadow-xl shadow-blue-900/20 active:scale-95"
              >
                Sınava Başla 🚀
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}