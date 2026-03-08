import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext'; // <-- Tema desteği
import toast from 'react-hot-toast';

export default function QuestionSolve() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { darkMode } = useTheme();

  // --- SINAV MANTIĞI (STATE) ---
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(2700); // 45 Dakika
  const [flaggedQuestions, setFlaggedQuestions] = useState({});

  // Örnek Soru Veri Seti (Gerçekte API'den gelir)
  const questions = [
    {
      id: 1,
      text: "657 Sayılı Devlet Memurları Kanunu'na göre, adaylık süresi içinde hal ve hareketlerinde memuriyetle bağdaşmayacak durumları tespit edilenlerin ilişiği kimin onayı ile kesilir?",
      options: ["Disiplin Amiri", "Birim Amiri", "Atamaya Yetkili Amir", "Vali", "Bakan"]
    },
    {
      id: 2,
      text: "Anayasamıza göre aşağıdakilerden hangisi siyasi haklar ve ödevler arasında yer almaz?",
      options: ["Seçme ve seçilme hakkı", "Vatan hizmeti", "Vergi ödevi", "Eğitim ve öğrenim hakkı", "Kamu hizmetlerine girme hakkı"]
    },
    // Daha fazla soru eklenebilir...
  ];

  // --- SAYAÇ MANTIĞI ---
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // --- AKSİYONLAR ---
  const handleOptionSelect = (optIdx) => {
    setSelectedAnswers({ ...selectedAnswers, [currentIdx]: optIdx });
  };

  const toggleFlag = () => {
    setFlaggedQuestions({ ...flaggedQuestions, [currentIdx]: !flaggedQuestions[currentIdx] });
  };

  const handleFinish = () => {
    if (window.confirm("Sınavı bitirmek ve sonuçları görmek istiyor musunuz?")) {
      toast.success("Sınav tamamlandı!");
      navigate(`/result/${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
      
      {/* ÜST BAR */}
      <header className="bg-gov-navy dark:bg-slate-900 text-white p-4 shadow-lg flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/exams')}
            className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded text-[10px] font-bold uppercase transition-all border border-white/20"
          >
            ⬅ Sınavdan Çık
          </button>
          <h2 className="font-black text-xs uppercase tracking-widest hidden md:block italic">
            Genel Mevzuat Tarama #{id}
          </h2>
        </div>
        
        <div className="flex items-center gap-6">
          <div className={`px-4 py-1 rounded-full font-mono font-bold text-lg border-2 transition-all ${
            timeLeft < 300 ? 'bg-red-600 border-red-400 animate-pulse' : 'bg-blue-600/20 border-blue-400'
          }`}>
            {formatTime(timeLeft)}
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-[10px] text-blue-200 uppercase font-black tracking-tighter">İlerleme</p>
            <p className="text-sm font-black italic">{currentIdx + 1} / {questions.length}</p>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row p-6 gap-6 max-w-7xl mx-auto w-full">
        
        {/* SOL: Soru Alanı */}
        <div className="flex-1 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm min-h-[450px] flex flex-col relative"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="bg-gov-navy dark:bg-blue-600 text-white px-3 py-1 rounded font-black text-xs uppercase">
                    Soru {currentIdx + 1}
                  </span>
                </div>
                <button 
                  onClick={toggleFlag}
                  className={`text-xl transition-all ${flaggedQuestions[currentIdx] ? 'scale-125 grayscale-0' : 'grayscale opacity-20 hover:opacity-100'}`}
                  title="Soruyu İşaretle"
                >
                  🚩
                </button>
              </div>
              
              <p className="text-xl text-slate-800 dark:text-slate-100 font-bold leading-relaxed mb-12">
                {questions[currentIdx].text}
              </p>

              <div className="space-y-3">
                {questions[currentIdx].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionSelect(i)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center gap-4 group ${
                      selectedAnswers[currentIdx] === i 
                      ? 'border-gov-navy dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 ring-4 ring-blue-50 dark:ring-blue-900/10' 
                      : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-white dark:bg-slate-800/50'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-all ${
                      selectedAnswers[currentIdx] === i 
                      ? 'bg-gov-navy dark:bg-blue-500 text-white shadow-md' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className={`text-sm font-bold ${selectedAnswers[currentIdx] === i ? 'text-gov-navy dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}>
                      {opt}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Alt Navigasyon */}
          <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <button 
              onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="px-6 py-2.5 text-slate-400 font-black text-xs uppercase hover:text-gov-navy disabled:opacity-20 transition-all"
            >
              ⬅ Önceki
            </button>
            <button 
              onClick={() => {
                if(currentIdx < questions.length - 1) {
                  setCurrentIdx(prev => prev + 1);
                } else {
                  handleFinish();
                }
              }}
              className={`px-10 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95 ${
                currentIdx === questions.length - 1 
                ? 'bg-emerald-600 text-white' 
                : 'bg-gov-navy dark:bg-blue-600 text-white'
              }`}
            >
              {currentIdx === questions.length - 1 ? 'Sınavı Bitir' : 'Sonraki Soru ➡'}
            </button>
          </div>
        </div>

        {/* SAĞ: Soru Paleti */}
        <div className="w-full lg:w-72 space-y-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 border-b dark:border-slate-800 pb-2">Soru Navigasyonu</h4>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`h-10 rounded-xl text-xs font-black transition-all border-2 ${
                    currentIdx === i ? 'border-gov-navy dark:border-blue-500 scale-110' : 'border-transparent'
                  } ${
                    selectedAnswers[i] !== undefined 
                    ? 'bg-emerald-500 text-white' 
                    : flaggedQuestions[i] 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t dark:border-slate-800 space-y-2">
               <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Cevaplandı
               </div>
               <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span> İşaretlendi (Flag)
               </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border border-blue-100 dark:border-blue-900/30">
            <p className="text-[10px] text-blue-700 dark:text-blue-400 font-bold leading-relaxed italic">
              💡 Analiz: Şu ana kadar soruların %{Math.round((Object.keys(selectedAnswers).length / questions.length) * 100)} kısmını tamamladınız.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}