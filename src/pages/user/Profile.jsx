import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showVipModal, setShowVipModal] = useState(false);

  // SİMÜLASYON VERİLERİ (Normalde bunlar global state veya API'den gelir)
  const [userStatus, setUserStatus] = useState("STANDART"); // STANDART veya VIP
  const [isProfileLocked, setIsProfileLocked] = useState(false); // VIP olunca true olacak
  
  const [profileData, setProfileData] = useState({
    adSoyad: "Hüseyin Keskin",
    email: "keskinhuseyin1919@gmail.com",
    kurum: "Adalet Bakanlığı",
    pozisyon: "Zabıt Katibi"
  });

  const [finalVipInfo, setFinalVipInfo] = useState({ ...profileData });

  // Profil Güncelleme (Sadece kilitli olmayan alanlar için)
  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
    toast.success("Bilgileriniz güncellendi! ✨");
  };

  // VIP Onay ve Mühürleme İşlemi
  const handleConfirmVip = () => {
    setUserStatus("VIP");
    setIsProfileLocked(true); // Kurum ve Pozisyon artık değiştirilemez
    setProfileData({ ...finalVipInfo });
    setShowVipModal(false);
    toast.success("TEBRİKLER! Profiliniz mühürlendi ve VIP üyeliğiniz aktif edildi. 💎", {
      duration: 5000,
      icon: '🚀',
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      
      {/* BAŞLIK */}
      <header className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">PROFİL AYARLARI</h1>
        <p className="text-slate-500 font-medium text-sm mt-1">Kişisel bilgilerinizi ve VIP durumunuzu yönetin.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* SOL KOLON: AVATAR VE VIP DURUMU */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 text-center shadow-sm">
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-slate-50 dark:bg-slate-800 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center text-5xl mb-4 mx-auto">
                👤
              </div>
            </div>
            <h2 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">{profileData.adSoyad}</h2>
            
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Mevcut Plan</span>
              <span className={`inline-block px-4 py-1.5 rounded-xl text-[11px] font-black border tracking-[0.2em] ${
                userStatus === "VIP" 
                ? "bg-amber-50 text-amber-600 border-amber-200" 
                : "bg-blue-50 text-gov-blue border-blue-100"
              }`}>
                {userStatus === "VIP" ? "💎 VIP ÜYE" : "STANDART ÜYE"}
              </span>
              
              {userStatus !== "VIP" && (
                <button 
                  onClick={() => setShowVipModal(true)}
                  className="block w-full mt-4 py-4 bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-amber-500/20"
                >
                  VIP'YE YÜKSELT
                </button>
              )}
            </div>
          </div>
        </div>

        {/* SAĞ KOLON: BİLGİ FORMU */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="bg-gov-blue text-white px-8 py-5 flex justify-between items-center">
              <h2 className="font-bold text-xs tracking-[0.2em] uppercase italic">Kişisel Bilgiler</h2>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="text-[10px] font-black uppercase bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all"
              >
                {isEditing ? "İptal" : "Düzenle"}
              </button>
            </div>
            
            <form onSubmit={handleUpdate} className="p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Her Zaman Düzenlenebilir Alanlar */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tam Adınız</label>
                  <input type="text" defaultValue={profileData.adSoyad} disabled={!isEditing} className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-gov-blue text-sm font-bold disabled:opacity-60" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-Posta</label>
                  <input type="email" defaultValue={profileData.email} disabled={!isEditing} className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-gov-blue text-sm font-bold disabled:opacity-60" />
                </div>

                {/* VIP OLUNCA KİLİTLENEN ALANLAR */}
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                    Kurum {isProfileLocked && <span title="Bu bilgi VIP üyeler için kilitlenmiştir">🔒</span>}
                  </label>
                  <input 
                    type="text" defaultValue={profileData.kurum} 
                    disabled={!isEditing || isProfileLocked}
                    className={`w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-gov-blue text-sm font-bold ${isProfileLocked ? 'cursor-not-allowed opacity-50 bg-slate-100 dark:bg-slate-950' : 'disabled:opacity-60'}`} 
                  />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-1">
                    Pozisyon {isProfileLocked && <span title="Bu bilgi VIP üyeler için kilitlenmiştir">🔒</span>}
                  </label>
                  <input 
                    type="text" defaultValue={profileData.pozisyon} 
                    disabled={!isEditing || isProfileLocked}
                    className={`w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-gov-blue text-sm font-bold ${isProfileLocked ? 'cursor-not-allowed opacity-50 bg-slate-100 dark:bg-slate-950' : 'disabled:opacity-60'}`} 
                  />
                </div>
              </div>

              {isEditing && (
                <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} type="submit" className="w-full py-5 bg-gov-blue text-white font-black rounded-2xl text-xs uppercase tracking-[0.3em] shadow-xl shadow-blue-600/20 active:scale-95 transition-all">
                  DEĞİŞİKLİKLERİ KAYDET
                </motion.button>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* ==========================================
          VIP ONAY VE BİLGİ MÜHÜRLEME MODALI
          ========================================== */}
      <AnimatePresence>
        {showVipModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowVipModal(false)} className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" />
            
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[3rem] p-10 md:p-14 shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600"></div>
              
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">VIP Üyelik & Bilgi Onayı</h3>
                <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] bg-red-50 dark:bg-red-900/20 py-3 px-4 rounded-xl">
                  ⚠️ DİKKAT: VIP sonrası bu bilgiler değiştirilemez!
                </p>
              </div>

              <div className="mt-10 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Kurumunuzu Doğrulayın</label>
                  <input type="text" value={finalVipInfo.kurum} onChange={(e) => setFinalVipInfo({...finalVipInfo, kurum: e.target.value})} className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[1.5rem] outline-none focus:border-amber-500 font-bold text-slate-700 dark:text-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pozisyonunuzu Doğrulayın</label>
                  <input type="text" value={finalVipInfo.pozisyon} onChange={(e) => setFinalVipInfo({...finalVipInfo, pozisyon: e.target.value})} className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[1.5rem] outline-none focus:border-amber-500 font-bold text-slate-700 dark:text-white transition-all" />
                </div>

                <div className="pt-6 space-y-4">
                  <button onClick={handleConfirmVip} className="w-full py-5 bg-amber-500 text-white font-black rounded-2xl text-xs uppercase tracking-[0.3em] shadow-2xl shadow-amber-500/30 hover:bg-amber-600 active:scale-95 transition-all">
                    BİLGİLERİ MÜHÜRLE VE VIP OL
                  </button>
                  <button onClick={() => setShowVipModal(false)} className="w-full py-3 text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-slate-600 transition-all">
                    Vazgeç
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}