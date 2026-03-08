import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function QuestionBank() {
  const [activeTab, setActiveTab] = useState('list'); // Varsayılanı 'list' yaptık ki havuzu görelim
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Mevzuat ve Alt Konu Listeleri
  const mevzuatList = ["657 Sayılı Kanun", "T.C. Anayasası", "İdare Hukuku", "Cumhurbaşkanlığı Kararnameleri"];
  const altKonuList = ["Disiplin Cezaları", "Memurluğa Alınma", "Temel Hak ve Hürriyetler", "Genel Esaslar"];

  // Örnek Soru Listesi (Havuz için)
  const [questions, setQuestions] = useState([
    { id: 1, text: "657 Sayılı Kanun'a göre memurların haftalık çalışma süresi kaç saattir?", cat: "657 Sayılı Kanun", sub: "Genel Esaslar", date: "05.03.2026" },
    { id: 2, text: "Anayasa Mahkemesi kaç üyeden oluşur?", cat: "T.C. Anayasası", sub: "Yargı", date: "04.03.2026" },
    { id: 3, text: "İdare hukukunda 'Yetki Genişliği' ilkesi kime aittir?", cat: "İdare Hukuku", sub: "Mülki İdare", date: "02.03.2026" },
  ]);

  // Excel Yükleme Simülasyonu
  const handleFileUpload = (e) => {
    e.preventDefault();
    setIsDragging(false);
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Excel verileri analiz ediliyor...',
        success: 'Seçili mevzuata 2.500 yeni soru başarıyla eklendi! 🚀',
        error: 'Dosya formatı hatalı!',
      }
    );
  };

  const handleSingleSubmit = (e) => {
    e.preventDefault();
    toast.success("Soru havuza başarıyla eklendi! ✅");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      
      {/* ÜST BAŞLIK VE SEKME DEĞİŞTİRİCİ */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
            Soru Bankası <span className="text-gov-blue">Merkezi</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-2">
            Soruları yönetin, yeni sorular ekleyin veya toplu yükleme yapın.
          </p>
        </div>
        
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-[1.5rem] shadow-inner overflow-x-auto no-scrollbar">
          {[
            { id: 'list', label: '📂 Soru Havuzu', color: 'text-gov-blue' },
            { id: 'single', label: '✏️ Tekli Soru', color: 'text-gov-blue' },
            { id: 'excel', label: '📊 Excel (Toplu)', color: 'text-emerald-600 dark:text-emerald-400' }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id ? `bg-white dark:bg-slate-700 ${tab.color} shadow-md` : 'text-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <AnimatePresence mode="wait">
        {activeTab === 'list' && (
          /* ==========================================
             1. EKRAN: SORU LİSTESİ (HAVUZ)
             ========================================== */
          <motion.div 
            key="list" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
            className="space-y-6"
          >
            {/* ARAMA VE FİLTRE BARI */}
            <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
              <input 
                type="text" 
                placeholder="Soru metninde veya kategoride ara..."
                className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl outline-none text-sm font-bold dark:text-white border-2 border-transparent focus:border-gov-blue transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-xs font-black uppercase tracking-widest outline-none cursor-pointer">
                <option>Tüm Mevzuatlar</option>
                {mevzuatList.map(m => <option key={m}>{m}</option>)}
              </select>
            </div>

            {/* SORU TABLOSU */}
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 border-b dark:border-slate-800">
                  <tr>
                    <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Soru İçeriği</th>
                    <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Mevzuat / Alt Konu</th>
                    <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {questions.filter(q => q.text.toLowerCase().includes(searchTerm.toLowerCase())).map((q) => (
                    <tr key={q.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                      <td className="p-6 max-w-md">
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-2">
                          {q.text}
                        </p>
                        <span className="text-[9px] font-black text-slate-400 uppercase mt-2 block tracking-widest">Eklendi: {q.date}</span>
                      </td>
                      <td className="p-6">
                        <div className="space-y-1">
                          <span className="text-[10px] font-black text-gov-blue dark:text-blue-400 uppercase tracking-widest block">{q.cat}</span>
                          <span className="text-[9px] font-bold text-slate-400 uppercase block italic">{q.sub}</span>
                        </div>
                      </td>
                      <td className="p-6 text-right space-x-2">
                        <button className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-gov-blue hover:text-white transition-all">✏️</button>
                        <button className="p-3 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all">🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'single' && (
          /* ==========================================
             2. EKRAN: TEKLİ SORU EKLEME EKRANI
             ========================================== */
          <motion.div 
            key="single" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm p-8 lg:p-12"
          >
            <form onSubmit={handleSingleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50/50 dark:bg-slate-800/30 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">İlgili Mevzuat</label>
                  <select className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-gov-blue text-sm font-bold dark:text-white cursor-pointer" required>
                    <option value="">Seçiniz...</option>
                    {mevzuatList.map((m, i) => <option key={i}>{m}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Alt Konu</label>
                  <select className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-gov-blue text-sm font-bold dark:text-white cursor-pointer" required>
                    <option value="">Seçiniz...</option>
                    {altKonuList.map((k, i) => <option key={i}>{k}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 italic">Soru Kökü</label>
                <textarea 
                  className="w-full p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[2rem] outline-none focus:border-gov-blue text-lg font-bold dark:text-white min-h-[150px] transition-all" 
                  placeholder="Soru metnini buraya girin..." required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['A', 'B', 'C', 'D'].map((option) => (
                  <div key={option} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-3 pl-6 rounded-2xl border border-slate-100 dark:border-slate-800 focus-within:border-gov-blue transition-all group">
                    <span className="text-xl font-black text-gov-blue dark:text-blue-400 italic">{option}</span>
                    <input type="text" className="w-full p-3 bg-transparent outline-none text-sm font-bold dark:text-white" placeholder="Seçeneği yazın..." required />
                    <div className="pr-4">
                      <input type="radio" name="correct_answer" value={option} className="w-6 h-6 accent-emerald-500 cursor-pointer" required />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-2 flex items-center gap-2">
                  <span>💡</span> Çözüm Açıklaması
                </label>
                <textarea 
                  className="w-full p-6 bg-emerald-50/30 dark:bg-emerald-900/10 border-2 border-emerald-100/50 dark:border-emerald-900/20 rounded-[2rem] outline-none focus:border-emerald-500 text-sm font-medium dark:text-slate-300 min-h-[120px] italic" 
                  placeholder="Adayın soruyu yanlış yapması durumunda göreceği not..." required
                ></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-gov-blue text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-blue-600/20 active:scale-95 transition-all">
                SORUYU HAVUZA MÜHÜRLE ✍️
              </button>
            </form>
          </motion.div>
        )}

        {activeTab === 'excel' && (
          /* ==========================================
             3. EKRAN: TOPLU İŞLEM (EXCEL YÜKLEME)
             ========================================== */
          <motion.div 
            key="excel" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Hedef Mevzuat</label>
                  <select className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white cursor-pointer">
                    <option value="">Seçiniz...</option>
                    {mevzuatList.map((m, i) => <option key={i}>{m}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Alt Konu</label>
                  <select className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white cursor-pointer">
                    <option value="">Seçiniz...</option>
                    {altKonuList.map((k, i) => <option key={i}>{k}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div 
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleFileUpload}
              className={`h-[350px] border-4 border-dashed rounded-[3.5rem] flex flex-col items-center justify-center transition-all duration-500 relative group overflow-hidden ${
                isDragging ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-400'
              }`}
            >
              <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" onChange={handleFileUpload} accept=".xlsx, .xls" />
              <div className="text-center space-y-4">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">📊</div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter">Excel Dosyasını Bırak</h3>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">veya seçmek için tıkla</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}