import { motion } from 'framer-motion';

export default function SubscriptionPlans() {
  const plans = [
    {
      name: "STANDART",
      price: "Ücretsiz",
      features: ["Günlük 20 Soru Çözümü", "Temel Mevzuat Notları", "Sınırlı İstatistik", "Reklamlı Deneyim"],
      button: "Mevcut Plan",
      isVip: false,
      recommended: false
    },
    {
      name: "MÜHÜRLÜ VİP",
      price: "₺299",
      period: "/ Sınav Dönemi",
      features: ["Sınırsız Soru Çözümü", "Tüm PDF ve Video Arşivi", "Türkiye Geneli Denemeler", "Detaylı Rakip Analizi", "Reklamsız Arayüz"],
      button: "VİP'E YÜKSELT",
      isVip: true,
      recommended: true
    },
    {
      name: "KURUMSAL",
      price: "Teklif Al",
      features: ["Toplu Kullanıcı Tanımlama", "Kurum Özel Denemeleri", "Yönetici Paneli Erişimi", "7/24 Teknik Destek"],
      button: "BİZE ULAŞIN",
      isVip: false,
      recommended: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20">
      
      {/* 🚀 ÜST BAŞLIK */}
      <header className="text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic"
        >
          EĞİTİMDE <span className="text-gov-blue">AYRICALIK</span> VAKTİ
        </motion.h1>
        <p className="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-[0.4em]">
          Kürsüye giden yolda engel tanımayın, VIP mühürle fark yaratın.
        </p>
      </header>

      {/* 📦 PAKET KARTLARI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-10 rounded-[3.5rem] border-2 transition-all flex flex-col h-full ${
              plan.recommended 
                ? 'bg-slate-900 border-gov-blue shadow-2xl shadow-blue-500/20 scale-105 z-10' 
                : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm'
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gov-blue text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
                EN ÇOK TERCİH EDİLEN
              </span>
            )}

            <div className="mb-8 text-center">
              <h3 className={`text-sm font-black uppercase tracking-[0.3em] mb-4 ${plan.recommended ? 'text-gov-blue' : 'text-slate-400'}`}>
                {plan.name}
              </h3>
              <div className="flex justify-center items-baseline gap-1">
                <span className={`text-5xl font-black tracking-tighter ${plan.recommended ? 'text-white' : 'text-slate-800 dark:text-white'}`}>
                  {plan.price}
                </span>
                {plan.period && <span className="text-[10px] font-bold text-slate-500 uppercase">{plan.period}</span>}
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${plan.recommended ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-100 text-slate-400'}`}>
                    ✓
                  </span>
                  <span className={`text-[11px] font-bold uppercase tracking-tight ${plan.recommended ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all ${
              plan.recommended 
                ? 'bg-gov-blue text-white shadow-xl shadow-blue-500/40 hover:scale-105' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200'
            }`}>
              {plan.button}
            </button>
          </motion.div>
        ))}
      </div>

      {/* 🔒 GÜVENLİK VE ÖDEME NOTU */}
      <footer className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="text-3xl">🛡️</div>
          <div>
            <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">256-Bit SSL Güvenli Ödeme</h4>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Ödemeleriniz mühürlü altyapı ile korunur.</p>
          </div>
        </div>
        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Kart Logoları Gelecek */}
          <span className="font-black italic text-slate-400 uppercase tracking-tighter">VISA / MASTERCARD / TROY</span>
        </div>
      </footer>

    </div>
  );
}