import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function SupportManagement() {
  const [activeTab, setActiveTab] = useState('inbox'); // 'inbox' veya 'bulk'
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Örnek Destek Talepleri
  const [tickets, setTickets] = useState([
    { id: 1, user: "Hüseyin K.", email: "keskinhuseyin1919@gmail.com", subject: "Sınav Sonucu İtiraz", message: "657 Sayılı Kanun 12. sorunun cevabında bir hata olduğunu düşünüyorum. Güncel mevzuatla çelişiyor.", date: "04.03.2026", status: "Beklemede" },
    { id: 2, user: "Ayşe D.", email: "ayse.demir@kamu.gov.tr", subject: "Ödeme Sorunu", message: "VIP üyelik aldım ancak hala standart görünüyorum. Dekontum ektedir.", date: "03.03.2026", status: "Yanıtlandı" },
  ]);

  const handleSendResponse = (e) => {
    e.preventDefault();
    toast.success("Yanıt kullanıcıya e-posta ve sistem bildirimi olarak iletildi! ✉️");
    setSelectedTicket(null);
  };

  const handleSendBulk = (e) => {
    e.preventDefault();
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Mesaj tüm kullanıcılara iletiliyor...',
        success: 'Toplu bildirim başarıyla gönderildi! 📢',
        error: 'Gönderim sırasında hata oluştu.',
      }
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      
      {/* ÜST BAŞLIK VE SEKME DEĞİŞTİRİCİ */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tighter italic leading-none">İletişim & Destek</h1>
          <p className="text-slate-500 font-medium text-sm mt-2">Kullanıcı taleplerini yanıtlayın veya sisteme toplu duyurular geçin.</p>
        </div>
        
        <div className="flex bg-slate-100 p-1.5 rounded-[1.2rem] shadow-inner">
          <button 
            onClick={() => setActiveTab('inbox')}
            className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
              activeTab === 'inbox' ? 'bg-white text-gov-blue shadow-md' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            📥 Gelen Kutusu
          </button>
          <button 
            onClick={() => setActiveTab('bulk')}
            className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
              activeTab === 'bulk' ? 'bg-white text-emerald-600 shadow-md' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            📢 Toplu Mesaj Gönder
          </button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {activeTab === 'inbox' ? (
          /* ==========================================
             1. EKRAN: DESTEK TALEPLERİ (GELEN KUTUSU)
             ========================================== */
          <motion.div 
            key="inbox" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Sol: Mesaj Listesi */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 mb-2">Aktif Talepler</h3>
              {tickets.map((ticket) => (
                <div 
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket)}
                  className={`p-6 rounded-[2rem] border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    selectedTicket?.id === ticket.id 
                    ? 'bg-gov-blue border-transparent text-white shadow-xl shadow-blue-600/20 translate-x-2' 
                    : 'bg-white border-slate-200 hover:border-gov-blue'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${selectedTicket?.id === ticket.id ? 'text-blue-100' : 'text-slate-400'}`}>
                      {ticket.date}
                    </span>
                    <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-tighter shadow-sm ${
                      ticket.status === 'Beklemede' ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white'
                    }`}>
                      {ticket.status}
                    </span>
                  </div>
                  <h4 className="font-black text-sm uppercase tracking-tight leading-tight">{ticket.subject}</h4>
                  <p className={`text-[10px] font-bold uppercase mt-2 italic ${selectedTicket?.id === ticket.id ? 'text-blue-100' : 'text-slate-500'}`}>
                    {ticket.user} • {ticket.email}
                  </p>
                </div>
              ))}
            </div>

            {/* Sağ: Mesaj Detayı ve Cevap Alanı */}
            <div className="lg:col-span-7">
              {selectedTicket ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden"
                >
                  <div className="bg-slate-50 px-8 py-6 border-b border-slate-100">
                    <h3 className="text-xl font-black text-slate-800 uppercase italic tracking-tighter">{selectedTicket.subject}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-2 h-2 rounded-full bg-gov-blue"></span>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{selectedTicket.user} tarafından gönderildi</p>
                    </div>
                  </div>

                  <div className="p-8 space-y-8">
                    {/* Kullanıcı Mesajı */}
                    <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 relative">
                      <span className="absolute -top-3 left-6 bg-white border border-slate-100 px-3 py-1 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">Gelen Mesaj</span>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed italic">
                        "{selectedTicket.message}"
                      </p>
                    </div>

                    {/* Yanıt Formu */}
                    <form onSubmit={handleSendResponse} className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Yönetici Yanıtı</label>
                      <textarea 
                        className="w-full p-6 bg-white border-2 border-slate-100 rounded-[2rem] outline-none focus:border-gov-blue text-sm font-medium transition-all" 
                        placeholder="Kullanıcıya iletilecek çözümü buraya yazın..." 
                        rows="6"
                        required
                      ></textarea>
                      <button className="w-full py-5 bg-gov-blue text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 active:scale-95 transition-all">
                        CEVABI GÖNDER & KAPAT ✉️
                      </button>
                    </form>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-slate-50/50 rounded-[3rem] border-4 border-dashed border-slate-200 text-slate-400 italic">
                  <span className="text-7xl mb-6 grayscale opacity-30">📩</span>
                  <p className="font-bold text-sm uppercase tracking-widest">Okumak ve yanıtlamak için sol listeden bir talep seçin</p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          /* ==========================================
             2. EKRAN: TOPLU MESAJ (BULK NOTIFICATION)
             ========================================== */
          <motion.div 
            key="bulk" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-200 shadow-sm space-y-10 relative overflow-hidden">
              {/* Dekoratif Arka Plan */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -translate-y-16 translate-x-16"></div>

              <div className="text-center relative z-10">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner">📢</div>
                <h2 className="text-2xl font-black text-slate-800 uppercase italic tracking-tighter">Toplu Duyuru Oluştur</h2>
                <p className="text-xs text-slate-400 font-bold uppercase mt-2 tracking-widest">Tüm kullanıcılara veya belirli kurumlara anlık bildirim gönderin</p>
              </div>

              <form onSubmit={handleSendBulk} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Hedef Kullanıcı Grubu</label>
                  <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-xs font-bold text-slate-700 cursor-pointer focus:ring-2 focus:ring-emerald-500">
                    <option>📢 Tüm Kullanıcılar (3.452 Kişi)</option>
                    <option>💎 Sadece VIP Üyeler (120 Kişi)</option>
                    <option>⚖️ Adalet Bakanlığı Personeli (850 Kişi)</option>
                    <option>🚔 İçişleri Bakanlığı Personeli (1.200 Kişi)</option>
                    <option>🏥 Sağlık Bakanlığı Personeli (420 Kişi)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Mesaj İçeriği</label>
                  <textarea 
                    className="w-full p-6 bg-slate-50 border border-slate-200 rounded-[2rem] outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium" 
                    placeholder="Sistem geneline duyurulacak metni buraya yazın..." 
                    rows="6" 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-emerald-500/20 hover:bg-emerald-700 transition-all active:scale-95 mt-4">
                  BİLDİRİMİ YAYINLA 🚀
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}