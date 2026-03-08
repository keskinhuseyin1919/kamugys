import { Link } from 'react-router-dom';

export default function ProfileCard() {
  return (
    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300">
      
      {/* Resimdeki Canlı Mavi Başlık Çubuğu */}
      <div className="bg-gov-blue px-6 py-4 flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <h2 className="font-bold text-white text-[11px] tracking-[0.2em] uppercase italic">Kullanıcı Bilgileri</h2>
      </div>

      {/* İçerik Alanı */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-5 mb-8">
          {/* Vesikalık Tarzı Avatar Alanı */}
          <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-800 dark:text-white leading-tight tracking-tighter">Hüseyin Keskin</h3>
            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1 italic">Kamu Personeli</p>
          </div>
        </div>

        {/* Detay Listesi */}
        <div className="space-y-5 flex-1">
          <div className="flex justify-between items-center text-[11px] border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tighter">E-Posta:</span>
            <span className="font-black text-slate-700 dark:text-slate-300">keskinhuseyin1919@gmail.com</span>
          </div>
          <div className="flex justify-between items-center text-[11px] border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tighter">Kayıt Yılı:</span>
            <span className="font-black text-gov-blue dark:text-blue-400">2026</span>
          </div>
          <div className="flex justify-between items-center text-[11px] border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tighter">Üyelik:</span>
            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-gov-blue dark:text-blue-400 rounded-lg text-[9px] font-black border border-blue-100 dark:border-blue-900/30 uppercase tracking-[0.15em]">
              STANDART
            </span>
          </div>
        </div>

        {/* Alt Aksiyon Butonu - YENİ ROTA BAĞLANDI */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <Link 
            to="/panel/profile" 
            className="block w-full py-4 text-center bg-slate-50 dark:bg-slate-800/50 hover:bg-gov-blue dark:hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-slate-700 hover:border-gov-blue text-gov-blue dark:text-blue-400 text-[10px] font-black rounded-2xl transition-all tracking-[0.2em] uppercase shadow-sm"
          >
            Profil Detaylarını Düzenle
          </Link>
        </div>
      </div>
    </div>
  );
}