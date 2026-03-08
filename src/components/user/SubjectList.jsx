import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SubjectList() {
  // Mevzuat Konuları ve Başarı Oranları
  const subjects = [
    { name: "Anayasa Hukuku", progress: 75, color: "bg-blue-500" },
    { name: "İdare Hukuku", progress: 40, color: "bg-amber-500" },
    { name: "657 Sayılı Devlet Memurları Kanunu", progress: 90, color: "bg-emerald-500" },
    { name: "Resmi Yazışma Kuralları", progress: 20, color: "bg-red-500" },
    { name: "Bilgi Edinme Hakkı Kanunu", progress: 60, color: "bg-indigo-500" },
  ];

  return (
    <div className="flex-1 h-full bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
      
      {/* BAŞLIK: Resimdeki Canlı Mavi/Navy Tasarım */}
      <div className="bg-gov-blue dark:bg-blue-600 p-5 border-b-2 border-blue-700/30 flex justify-between items-center relative overflow-hidden">
        <div className="flex items-center gap-3 relative z-10">
          <span className="text-xl">📚</span>
          <h3 className="font-black text-white text-[11px] uppercase tracking-[0.2em] italic">
            Konu Çalışma Durumu
          </h3>
        </div>
        <span className="relative z-10 text-[9px] bg-white/20 text-white px-3 py-1 rounded-lg font-black uppercase tracking-widest border border-white/20">
          MART 2026
        </span>
        {/* Dekoratif Arka Plan Yazısı */}
        <div className="absolute -right-4 top-2 text-4xl font-black text-white/5 italic select-none">GYS</div>
      </div>

      {/* LİSTE ALANI: Kaydırılabilir ve Animasyonlu */}
      <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
        <div className="space-y-8">
          {subjects.map((subject, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-end mb-3">
                <div className="space-y-1">
                  <span className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Mevzuat Başlığı</span>
                  <h4 className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-tight group-hover:text-gov-blue transition-colors leading-none">
                    {subject.name}
                  </h4>
                </div>
                <div className="flex flex-col items-end gap-2">
                   {/* ROTA: /panel/exams altına mühürlendi */}
                  <Link 
                    to="/panel/exams" 
                    className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-[9px] font-black text-slate-500 hover:bg-gov-blue hover:text-white rounded-md uppercase tracking-widest transition-all border border-slate-100 dark:border-slate-700"
                  >
                    Soru Çöz
                  </Link>
                  <span className={`text-xs font-black ${subject.progress > 70 ? 'text-emerald-500' : 'text-amber-500'}`}>
                    %{subject.progress}
                  </span>
                </div>
              </div>

              {/* İlerleme Çubuğu: Framer Motion ile Animasyonlu */}
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-200/50 dark:border-slate-700">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${subject.progress}%` }}
                  transition={{ duration: 1.2, ease: "circOut", delay: index * 0.1 }}
                  className={`${subject.color} h-full rounded-full shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)]`} 
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ALT AKSİYON: Tüm konulara yönlendirir */}
      <div className="bg-slate-50/50 dark:bg-slate-800/20 p-6 border-t border-slate-100 dark:border-slate-800 text-center">
        <Link 
          to="/panel/materials"
          className="inline-flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-gov-blue transition-all uppercase tracking-[0.2em]"
        >
          Tüm Konu Başlıklarını Görüntüle <span className="text-xs">→</span>
        </Link>
      </div>
    </div>
  );
}