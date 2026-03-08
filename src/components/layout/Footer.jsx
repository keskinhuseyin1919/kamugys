import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
          
          {/* Logo ve Kısa Bilgi */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-black text-gov-navy tracking-tighter mb-4">
              KAMU<span className="text-blue-500">GYS</span>
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Türkiye'nin en kapsamlı Görevde Yükselme ve Unvan Değişikliği sınav hazırlık platformu.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Platform</h4>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li><Link to="/exams" className="hover:text-gov-navy transition-colors">Sınavlar</Link></li>
              <li><Link to="/materials" className="hover:text-gov-navy transition-colors">Ders Notları</Link></li>
              <li><Link to="/announcements" className="hover:text-gov-navy transition-colors">Duyurular</Link></li>
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Kurumsal</h4>
            <ul className="space-y-2 text-xs font-bold text-slate-600">
              <li><a href="#" className="hover:text-gov-navy transition-colors">KVKK Aydınlatma Metni</a></li>
              <li><a href="#" className="hover:text-gov-navy transition-colors">Kullanım Koşulları</a></li>
              <li><a href="#" className="hover:text-gov-navy transition-colors">Bize Ulaşın</a></li>
            </ul>
          </div>

          {/* Destek Hattı */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Destek Hattı</h4>
            <p className="text-sm font-black text-gov-navy mb-1">destek@kamugys.com</p>
            <p className="text-[10px] text-slate-400 font-medium italic">7/24 Mevzuat Destek Ekibi</p>
          </div>
        </div>

        {/* Alt Çizgi ve Telif */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {currentYear} KAMUGYS • TÜM HAKLARI SAKLIDIR.
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs grayscale opacity-50 hover:grayscale-0 hover:opacity-100 cursor-pointer transition-all">🇹🇷</span>
            <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs grayscale opacity-50 hover:grayscale-0 hover:opacity-100 cursor-pointer transition-all">⚖️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}