import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Upgrade() {
  const [paymentStep, setPaymentStep] = useState(1); // 1: Paket Seçimi, 2: Ödeme

  const handlePayment = (e) => {
    e.preventDefault();
    toast.loading("Ödemeniz doğrulanıyor...", { duration: 2000 });
    setTimeout(() => {
      toast.success("TEBRİKLER! Artık bir VIP üyesiniz. Tüm sınırlar kaldırıldı! 💎");
      window.location.href = "/profile"; // Profil sayfasına mühürleme için yönlendir
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto pb-20">
      
      {/* ÜST BAŞLIK */}
      <header className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tighter italic">
          SINIRLARI <span className="text-gov-blue">KALDIRIN</span>
        </h1>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto">
          GYS hazırlık sürecinde ihtiyacınız olan tüm güç şimdi elinizin altında. 
          VIP ile başarınızı şansa bırakmayın.
        </p>
      </header>

      {paymentStep === 1 ? (
        /* ==========================================
           1. ADIM: PAKET KARŞILAŞTIRMA
           ========================================== */
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* STANDART PLAN */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col justify-between opacity-60">
            <div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 py-1 bg-slate-100 rounded-full">Mevcut Planın</span>
              <h3 className="text-2xl font-black text-slate-800 mt-4 uppercase italic">Standart</h3>
              <p className="text-3xl font-black text-slate-400 mt-2">ÜCRETSİZ</p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium text-slate-500">❌ Toplam 10 Soru Hakkı</li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-500">❌ Kısıtlı Mevzuat Erişimi</li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-500">❌ Deneme Sınavı Oluşturma</li>
                <li className="flex items-center gap-3 text-sm font-medium text-slate-500">❌ Türkiye Geneli Sıralama</li>
              </ul>
            </div>
            <button disabled className="mt-10 w-full py-4 bg-slate-100 text-slate-400 font-black rounded-xl text-xs uppercase tracking-widest">
              ŞU ANKİ PLANINIZ
            </button>
          </div>

          {/* VIP PLAN (Göz Alıcı) */}
          <div className="bg-white p-10 rounded-[2.5rem] border-4 border-gov-blue shadow-2xl shadow-blue-600/10 flex flex-col justify-between relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-gov-blue text-white px-8 py-2 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest">EN POPÜLER</div>
            
            <div>
              <span className="text-[10px] font-black text-gov-blue uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-full">Sınırsız Hazırlık</span>
              <h3 className="text-2xl font-black text-slate-800 mt-4 uppercase italic">VIP Üyelik</h3>
              <p className="text-4xl font-black text-gov-blue mt-2">₺499 <span className="text-sm font-bold text-slate-400">/ Sınav Dönemi</span></p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">✅ Sınırsız Soru Çözme</li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">✅ Tüm Mevzuatlara Erişim</li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">✅ Akıllı Deneme Oluşturma</li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">✅ Türkiye Geneli Denemeler</li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">✅ PDF ve Video Kaynaklar</li>
              </ul>
            </div>
            <button 
              onClick={() => setPaymentStep(2)}
              className="mt-10 w-full py-5 bg-gov-blue text-white font-black rounded-2xl text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all"
            >
              ŞİMDİ YÜKSELT 💎
            </button>
          </div>
        </motion.div>
      ) : (
        /* ==========================================
           2. ADIM: ÖDEME FORMU (Simülasyon)
           ========================================== */
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden"
        >
          <div className="bg-slate-900 p-8 text-white relative">
            <button onClick={() => setPaymentStep(1)} className="absolute top-8 left-6 text-slate-400 hover:text-white transition-colors">← Geri</button>
            <div className="text-center mt-4">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">ÖDEME TUTARI</p>
              <h3 className="text-3xl font-black tracking-tighter">₺499.00</h3>
            </div>
          </div>
          
          <form onSubmit={handlePayment} className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Kart Üzerindeki İsim</label>
              <input type="text" placeholder="HÜSEYİN KESKİN" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-gov-blue text-sm font-bold" required />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Kart Numarası</label>
              <input type="text" placeholder="**** **** **** ****" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-gov-blue text-sm font-bold" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Son Kullanma</label>
                <input type="text" placeholder="AA / YY" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-gov-blue text-sm font-bold" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">CVV</label>
                <input type="text" placeholder="***" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-gov-blue text-sm font-bold" required />
              </div>
            </div>
            
            <div className="pt-4">
              <button type="submit" className="w-full py-5 bg-emerald-600 text-white font-black rounded-2xl text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all">
                GÜVENLİ ÖDEME YAP
              </button>
              <p className="text-[9px] text-center text-slate-400 mt-4 font-bold uppercase tracking-widest">🔒 256-BIT SSL GÜVENLİ ÖDEME ALTYAPISI</p>
            </div>
          </form>
        </motion.div>
      )}

      {/* ALT BİLGİ */}
      <div className="mt-16 text-center text-slate-400 font-medium text-sm">
        Herhangi bir sorunuz mu var? <span className="text-gov-blue font-bold cursor-pointer">Destek Merkezi</span> ile iletişime geçin.
      </div>
    </div>
  );
}