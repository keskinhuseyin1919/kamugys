export default function CountdownCard() {
  return (
    <div className="w-80 bg-white rounded-lg overflow-hidden shadow-md border border-slate-200">
      {/* Kurumsal Başlık Çubuğu */}
      <div className="bg-gov-navy p-4 flex items-center gap-3 border-b-2 border-blue-800">
        <div className="bg-white/10 p-1.5 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        </div>
        <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Sınav Takvimi</h3>
      </div>

      {/* İçerik Alanı */}
      <div className="p-8 text-center">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">GYS Sınavına Kalan Süre</p>
        
        {/* Büyük Sayaç Rakamı */}
        <div className="text-6xl font-black text-gov-navy mb-2 tracking-tighter">
          53
        </div>
        <div className="text-sm font-bold text-slate-400 uppercase mb-6">GÜN KALDI</div>

        {/* Saat ve Dakika Detayı (Gri Tonlarda) */}
        <div className="flex justify-center gap-6 border-t border-slate-100 pt-6">
          <div className="text-center">
            <span className="block text-xl font-bold text-slate-700">11</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">Saat</span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-slate-700">19</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">Dakika</span>
          </div>
        </div>
      </div>

      {/* Sınav Tarihi Altlığı */}
      <div className="bg-slate-50 p-3 text-center border-t border-slate-200">
        <p className="text-xs text-slate-600">
          Sınav Tarihi: <span className="font-bold text-slate-800">26.04.2026</span>
        </p>
      </div>
    </div>
  );
}