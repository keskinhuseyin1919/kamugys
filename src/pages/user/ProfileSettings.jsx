import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'security', 'preferences'

  const handleUpdate = (e) => {
    e.preventDefault();
    toast.success("Profil bilgileriniz başarıyla mühürlendi! ✅");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      
      {/* 🚀 ÜST BAŞLIK VE SEKME YÖNETİMİ */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-slate-200 dark:border-slate-800 pb-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
            PROFİL <span className="text-gov-blue">AYARLARI</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
            Kişisel Verilerini ve Hesap Güvenliğini Yönet
          </p>
        </div>
        
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl shadow-inner">
          {[
            { id: 'profile', label: 'KİMLİK', icon: '👤' },
            { id: 'security', label: 'GÜVENLİK', icon: '🔒' },
            { id: 'preferences', label: 'TERCİHLER', icon: '⚙️' }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                activeTab === tab.id ? 'bg-white dark:bg-slate-700 text-gov-blue shadow-md' : 'text-slate-400'
              }`}
            >
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>
      </header>

      <AnimatePresence mode="wait">
        {activeTab === 'profile' && (
          /* 👤 KİMLİK BİLGİLERİ */
          <motion.div 
            key="profile" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          >
            {/* SOL: AVATAR VE VIP KARTI */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-sm">
                <div className="relative inline-block group">
                  <div className="w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-inner border-4 border-white dark:border-slate-900">
                    👤
                  </div>
                  <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-gov-blue text-white rounded-xl flex items-center justify-center text-sm shadow-lg border-4 border-white dark:border-slate-900 hover:scale-110 transition-all">
                    📷
                  </button>
                </div>
                <div>
                  <h3 className="font-black text-slate-800 dark:text-white uppercase italic">HÜSEYİN KESKİN</h3>
                  <p className="text-[9px] font-black text-gov-blue uppercase tracking-widest">VIP Üyelik Aktif</p>
                </div>
              </div>
            </div>

            {/* SAĞ: FORM ALANI */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-10 lg:p-14 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
              <form onSubmit={handleUpdate} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Ad Soyad</label>
                    <input type="text" defaultValue="Hüseyin Keskin" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white outline-none focus:ring-2 focus:ring-gov-blue" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">E-Posta</label>
                    <input type="email" defaultValue="huseyin@kamugys.com" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white outline-none focus:ring-2 focus:ring-gov-blue" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Kurumunuz</label>
                    <input type="text" defaultValue="Adalet Bakanlığı" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white outline-none focus:ring-2 focus:ring-gov-blue" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Hedef Kadro</label>
                    <input type="text" defaultValue="Yazı İşleri Müdürü" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold dark:text-white outline-none focus:ring-2 focus:ring-gov-blue" />
                  </div>
                </div>
                <button type="submit" className="px-12 py-5 bg-gov-blue text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-blue-500/20 hover:scale-105 transition-all">
                  DEĞİŞİKLİKLERİ KAYDET
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {activeTab === 'security' && (
          /* 🔒 GÜVENLİK AYARLARI */
          <motion.div 
            key="security" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="bg-white dark:bg-slate-900 p-10 lg:p-14 rounded-[3.5rem] border border-slate-200 dark:border-slate-800 shadow-sm max-w-2xl mx-auto"
          >
            <form className="space-y-8">
              <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic border-b dark:border-slate-800 pb-4">Parola Güncelleme</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Mevcut Parola</label>
                  <input type="password" placeholder="••••••••" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-red-400 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Yeni Parola</label>
                  <input type="password" placeholder="••••••••" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-gov-blue transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Yeni Parola (Tekrar)</label>
                  <input type="password" placeholder="••••••••" className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-gov-blue transition-all" />
                </div>
              </div>
              <button type="submit" className="w-full py-5 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-gov-blue transition-all">
                PAROLAYI MÜHÜRLE
              </button>
            </form>
          </motion.div>
        )}

        {activeTab === 'preferences' && (
          /* ⚙️ SİSTEM TERCİHLERİ */
          <motion.div 
            key="preferences" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: "E-Posta Bildirimleri", desc: "Yeni denemeler ve duyurular mail kutunuza gelsin.", icon: "📧" },
              { title: "Mobil Bildirimler", desc: "Flaş haberler telefonunuza anlık düşsün.", icon: "📱" },
              { title: "Haftalık Analiz Raporu", desc: "Başarı grafiğiniz her Pazar özet olarak gelsin.", icon: "📈" },
              { title: "Karanlık Mod (Otomatik)", desc: "Sistem saatinize göre arayüz mühürlensin.", icon: "🌙" },
            ].map((pref, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex justify-between items-center group hover:border-gov-blue transition-all">
                <div className="flex items-center gap-6">
                  <div className="text-3xl">{pref.icon}</div>
                  <div>
                    <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight italic">{pref.title}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-1">{pref.desc}</p>
                  </div>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={i % 2 === 0} />
                  <div className="w-12 h-6 bg-slate-200 dark:bg-slate-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-gov-blue after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}