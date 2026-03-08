import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    const action = isLogin ? "Giriş yapılıyor..." : "Hesabınız oluşturuluyor...";
    
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: action,
        success: isLogin ? "Hoş geldin Reis! Karargaha aktarılıyorsun. 🚀" : "Mührün hazır! Artık sen de bizdensin. 🛡️",
        error: "Bilgiler mühürlenemedi!",
      }
    ).then(() => {
        // Giriş başarılıysa Dashboard'a uçuyoruz
        navigate(isLogin ? '/panel' : '/panel/profile');
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-slate-950 overflow-hidden">
      
      {/* 🖼️ SOL TARAF: MOTİVASYON VE VİTRİN */}
      <div className="hidden lg:flex lg:col-span-7 bg-gov-navy dark:bg-slate-900 relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none text-[20rem] font-black italic -translate-x-20 translate-y-20 text-white">
          GYS
        </div>
        
        <div className="relative z-10 space-y-8 text-white max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="w-20 h-2 bg-gov-blue rounded-full"
          ></motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl font-black uppercase tracking-tighter italic leading-none"
          >
            KÜRSÜYE GİDEN <br /> <span className="text-gov-blue text-7xl">YOLDA</span> İLK ADIM
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-400 font-bold text-sm uppercase tracking-[0.3em] leading-relaxed"
          >
            Türkiye'nin en kapsamlı Görevde Yükselme ve Unvan Değişikliği portalına hoş geldin. Binlerce mühürlü soru seni bekliyor.
          </motion.p>
          
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
            <div><p className="text-2xl font-black">45K+</p><p className="text-[10px] text-slate-500 uppercase font-black">Soru</p></div>
            <div><p className="text-2xl font-black">12K+</p><p className="text-[10px] text-slate-500 uppercase font-black">Aktif Aday</p></div>
            <div><p className="text-2xl font-black">48</p><p className="text-[10px] text-slate-500 uppercase font-black">Deneme</p></div>
          </div>
        </div>
      </div>

      {/* 🔐 SAĞ TARAF: FORM ALANI */}
      <div className="lg:col-span-5 flex items-center justify-center p-8 md:p-20 relative">
        <div className="w-full max-w-md space-y-12">
          
          <div className="text-center lg:text-left space-y-2">
            <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">
              KAMU<span className="text-gov-blue">GYS</span>
            </h1>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest italic">
              {isLogin ? "Karargaha Giriş Yap" : "Yeni Mühür Oluştur"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.form 
              key={isLogin ? 'login' : 'register'}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              onSubmit={handleAuth} className="space-y-6"
            >
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Ad Soyad</label>
                  <input type="text" placeholder="Hüseyin Keskin" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white outline-none focus:ring-2 focus:ring-gov-blue transition-all" required />
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">E-Posta Adresi</label>
                <input type="email" placeholder="huseyin@kamugys.com" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white outline-none focus:ring-2 focus:ring-gov-blue transition-all" required />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Parola</label>
                  {isLogin && <button type="button" className="text-[9px] font-black text-gov-blue uppercase underline tracking-tighter">Şifremi Unuttum</button>}
                </div>
                <input type="password" placeholder="••••••••" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white outline-none focus:ring-2 focus:ring-gov-blue transition-all" required />
              </div>

              <button type="submit" className="w-full py-5 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:bg-gov-blue transition-all">
                {isLogin ? 'MÜHÜRLÜ GİRİŞ YAP' : 'ÜYELİĞİ TAMAMLA'}
              </button>
            </motion.form>
          </AnimatePresence>

          <div className="text-center space-y-6">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="h-px bg-slate-100 dark:bg-slate-800 flex-1"></div>
              <span className="text-[9px] font-black uppercase tracking-widest">VEYA</span>
              <div className="h-px bg-slate-100 dark:bg-slate-800 flex-1"></div>
            </div>

            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              {isLogin ? "Henüz hesabın yok mu?" : "Zaten üye misin?"} <br />
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-gov-blue font-black underline mt-2 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {isLogin ? "ŞİMDİ ÜCRETSİZ KAYIT OL" : "HEMEN GİRİŞ YAP"}
              </button>
            </p>
          </div>
        </div>

        {/* Kurumsal Mühür (Arkaplan) */}
        <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-slate-50 dark:text-slate-900 pointer-events-none select-none italic">
          SECURE
        </div>
      </div>

    </div>
  );
}