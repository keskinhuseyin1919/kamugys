import toast from 'react-hot-toast'; // <-- Bildirim kütüphanesini ekledik

export default function MaterialUpload() {
  
  // Dosya yükleme simülasyonu fonksiyonu
  const handleUpload = () => {
    // Gerçek bir yükleme süreci varmış gibi davranıyoruz
    const uploadPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // %90 ihtimalle başarılı, %10 hata payı bırakalım (test için)
        Math.random() > 0.1 ? resolve() : reject();
      }, 2000);
    });

    toast.promise(uploadPromise, {
      loading: 'Dosya sunucuya iletiliyor...',
      success: 'Doküman başarıyla sisteme eklendi ve yayına alındı! ✅',
      error: 'Yükleme başarısız! Dosya formatını kontrol edin. ❌',
    }, {
      style: {
        minWidth: '350px',
        background: '#064e3b', // Admin temasına uygun koyu zümrüt
        color: '#fff',
        fontWeight: 'bold'
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Materyal Yükleme Merkezi</h1>
        <p className="text-slate-500 font-medium italic">Sisteme yeni PDF ders notları, mevzuat özetleri ve dokümanlar ekleyin.</p>
      </header>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 space-y-6">
          
          {/* Dosya Seçim Alanı (Görsel Tasarım) */}
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center hover:border-emerald-400 transition-colors cursor-pointer bg-slate-50 group">
            <div className="bg-white w-16 h-16 rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-3xl">📁</span>
            </div>
            <h4 className="text-sm font-bold text-slate-700">Yüklenecek Dosyayı Seçin veya Sürükleyin</h4>
            <p className="text-xs text-slate-400 mt-1">Sadece PDF, DOCX veya PPT (Maks. 20MB)</p>
            <input type="file" className="hidden" id="fileInput" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Doküman Başlığı</label>
              <input 
                type="text" 
                className="w-full p-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-100 transition-all" 
                placeholder="Örn: 657 Sayılı Kanun Özet Notlar" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kategori</label>
              <select className="w-full p-3 rounded-lg border border-slate-200 outline-none bg-white font-semibold text-slate-700 cursor-pointer">
                <option>Mevzuat</option>
                <option>Anayasa</option>
                <option>İdare Hukuku</option>
                <option>Genel Kültür</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Kısa Açıklama (Opsiyonel)</label>
            <textarea 
              rows="3" 
              className="w-full p-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-100 transition-all" 
              placeholder="Doküman içeriği hakkında kısa bilgi..."
            ></textarea>
          </div>
        </div>

        {/* Alt Aksiyon Çubuğu */}
        <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase italic text-center sm:text-left">
            ⚠️ Yüklenen dosyalar tüm kullanıcılar için anında yayınlanır.
          </p>
          <button 
            onClick={handleUpload} // <-- Tıklama olayını bağladık
            className="w-full sm:w-auto bg-emerald-600 text-white px-10 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all active:scale-95"
          >
            Sisteme Yükle
          </button>
        </div>
      </div>
    </div>
  );
}