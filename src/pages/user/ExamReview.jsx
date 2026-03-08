import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ExamReview() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Simüle Edilen Sınav Soruları ve Kullanıcı Cevapları
  const reviewData = [
    {
      id: 1,
      question: "657 Sayılı Devlet Memurları Kanunu'na göre, adaylık süresi en az ne kadardır?",
      options: ["6 Ay", "1 Yıl", "2 Yıl", "3 Yıl"],
      correctAnswer: 1, // "1 Yıl"
      userAnswer: 1,    // Doğru yapmış
      explanation: "657 Sayılı Kanun Madde 54: Adaylık süresi bir yıldan az, iki yıldan çok olamaz."
    },
    {
      id: 2,
      question: "Aşağıdakilerden hangisi memurlara verilen disiplin cezalarından biri değildir?",
      options: ["Uyarma", "Kınama", "Aylıktan Kesme", "Görevden Uzaklaştırma"],
      correctAnswer: 3, // "Görevden Uzaklaştırma"
      userAnswer: 2,    // Yanlış yapmış (Aylıktan Kesme demiş)
      explanation: "Görevden uzaklaştırma bir disiplin cezası değil, bir ihtiyati tedbirdir. Disiplin cezaları: Uyarma, Kınama, Aylıktan Kesme, Kademe Durdurulması ve İhraçtır."
    }
  ];

  const q = reviewData[currentIdx];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      
      {/* ÜST NAVİGASYON: SORU NUMARALARI */}
      <div className="flex flex-wrap gap-2 bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
        {reviewData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIdx(i)}
            className={`w-10 h-10 rounded-xl font-black text-xs transition-all ${
              currentIdx === i 
                ? 'bg-gov-blue text-white ring-4 ring-blue-100 dark:ring-blue-900/30' 
                : reviewData[i].userAnswer === reviewData[i].correctAnswer
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                  : 'bg-red-50 text-red-600 border border-red-100'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* SORU ALANI */}
      <motion.div 
        key={currentIdx}
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
        className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
      >
        <div className="p-10 space-y-8">
          <div className="flex justify-between items-center">
            <span className="px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Soru {currentIdx + 1} / {reviewData.length}
            </span>
            <span className={`text-[10px] font-black uppercase tracking-widest ${q.userAnswer === q.correctAnswer ? 'text-emerald-500' : 'text-red-500'}`}>
              {q.userAnswer === q.correctAnswer ? '● DOĞRU CEVAPLANDI' : '● YANLIŞ CEVAPLANDI'}
            </span>
          </div>

          <h2 className="text-xl font-bold text-slate-800 dark:text-white leading-relaxed">
            {q.question}
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {q.options.map((opt, i) => {
              const isCorrect = i === q.correctAnswer;
              const isUserChoice = i === q.userAnswer;
              
              let style = "border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400";
              if (isCorrect) style = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 ring-2 ring-emerald-500/20";
              if (isUserChoice && !isCorrect) style = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 ring-2 ring-red-500/20";

              return (
                <div key={i} className={`p-5 rounded-2xl border-2 font-bold text-sm flex justify-between items-center ${style}`}>
                  <span>{opt}</span>
                  {isCorrect && <span className="text-lg">✅</span>}
                  {isUserChoice && !isCorrect && <span className="text-lg">❌</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* ÇÖZÜM / AÇIKLAMA ALANI */}
        <div className="bg-slate-50 dark:bg-slate-800/50 p-10 border-t border-slate-100 dark:border-slate-800">
          <h4 className="text-[10px] font-black text-gov-blue uppercase tracking-[0.2em] mb-4">📖 Hukuki Dayanak & Çözüm</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium italic">
            {q.explanation}
          </p>
        </div>
      </motion.div>

      {/* ALT NAVİGASYON */}
      <div className="flex justify-between items-center px-4">
        <button 
          disabled={currentIdx === 0}
          onClick={() => setCurrentIdx(prev => prev - 1)}
          className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-gov-blue disabled:opacity-30 transition-colors"
        >
          ← Önceki Soru
        </button>
        <Link to="/panel/exam-result" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
          Sonuçlara Dön
        </Link>
        <button 
          disabled={currentIdx === reviewData.length - 1}
          onClick={() => setCurrentIdx(prev => prev + 1)}
          className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-gov-blue disabled:opacity-30 transition-colors"
        >
          Sonraki Soru →
        </button>
      </div>

    </div>
  );
}