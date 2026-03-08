import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function QuestionManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Örnek Soru Listesi
  const [questions, setQuestions] = useState([
    { id: 1, text: "657 Sayılı DMK'ya göre adaylık süresi üst sınırı nedir?", category: "Mevzuat", difficulty: "Kolay" },
    { id: 2, text: "Anayasa Mahkemesi kaç üyeden oluşur?", category: "Anayasa", difficulty: "Orta" },
    { id: 3, text: "İdare hukukunda yetki devri hangi şartla yapılabilir?", category: "İdare", difficulty: "Zor" },
  ]);

  const handleDelete = (id) => {
    if(window.confirm("Bu soruyu silmek istediğinize emin misiniz?")) {
      setQuestions(questions.filter(q => q.id !== id));
      toast.error("Soru silindi.");
    }
  };

  return (
    <div className="space-y-8">
      {/* ÜST BAŞLIK VE AKSİYON */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">Soru Havuzu Yönetimi</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Sistemdeki tüm soruları buradan yönetebilirsiniz.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-900/20 active:scale-95"
        >
          + Yeni Soru Ekle
        </button>
      </header>

      {/* FİLTRELEME VE ARAMA */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30">🔍</span>
          <input 
            type="text" 
            placeholder="Soru metni içinde ara..." 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white text-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select className="bg-slate-50 dark:bg-slate-800 px-6 py-3 rounded-xl text-xs font-bold text-slate-500 outline-none border-none">
          <option>Tüm Kategoriler</option>
          <option>Mevzuat</option>
          <option>Anayasa</option>
          <option>İdare</option>
        </select>
      </div>

      {/* SORU LİSTESİ TABLOSU */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b dark:border-slate-800">
            <tr>
              <th className="p-6">Soru Metni</th>
              <th className="p-6">Kategori</th>
              <th className="p-6">Zorluk</th>
              <th className="p-6 text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {questions.filter(q => q.text.toLowerCase().includes(searchTerm.toLowerCase())).map((q) => (
              <tr key={q.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors group">
                <td className="p-6 max-w-md">
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200 line-clamp-1 group-hover:line-clamp-none transition-all">
                    {q.text}
                  </p>
                </td>
                <td className="p-6">
                  <span className="text-[10px] font-black px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg uppercase">
                    {q.category}
                  </span>
                </td>
                <td className="p-6">
                  <span className={`text-[10px] font-bold ${
                    q.difficulty === 'Zor' ? 'text-red-500' : q.difficulty === 'Orta' ? 'text-amber-500' : 'text-emerald-500'
                  }`}>
                    ● {q.difficulty}
                  </span>
                </td>
                <td className="p-6 text-right space-x-2">
                  <button className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg text-blue-500 transition-colors">✏️</button>
                  <button 
                    onClick={() => handleDelete(q.id)}
                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg text-red-500 transition-colors"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* YENİ SORU EKLEME MODALI */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl p-10 border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tighter mb-8 italic">Yeni Soru Formu</h2>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); toast.success("Soru havuza eklendi!"); setIsModalOpen(false); }}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Soru Metni</label>
                  <textarea className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white text-sm min-h-[100px]" placeholder="Soruyu buraya yazın..." required></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['A', 'B', 'C', 'D', 'E'].map(label => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-xs text-slate-400">{label}</span>
                      <input type="text" className="flex-1 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-xs dark:text-white border-none" placeholder={`Seçenek ${label}`} required />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Doğru Cevap</label>
                    <select className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-xs dark:text-white font-bold">
                      <option>A</option><option>B</option><option>C</option><option>D</option><option>E</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kategori</label>
                    <select className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-xs dark:text-white font-bold">
                      <option>Mevzuat</option><option>Anayasa</option><option>İdare</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Zorluk</label>
                    <select className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl outline-none text-xs dark:text-white font-bold">
                      <option>Kolay</option><option>Orta</option><option>Zor</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 font-black text-[10px] uppercase text-slate-400">İptal</button>
                  <button type="submit" className="flex-[2] py-4 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-emerald-900/20">Soruyu Havuza Gönder</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}