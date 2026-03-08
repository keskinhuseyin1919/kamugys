import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast'; // <-- Bildirim kütüphanesini çağırdık

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Giriş başarılı bildirimi tetikleniyor
    toast.success('Giriş başarılı! Hoş geldiniz.', {
      duration: 4000,
      icon: '🔐',
      style: {
        border: '1px solid #1e293b',
        padding: '16px',
        color: '#f8fafc',
        background: '#0f172a',
      },
    });

    // Ana sayfaya (Dashboard) yönlendir
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gov-bg flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Üst Logo ve Başlık Alanı */}
        <div className="bg-gov-navy p-8 text-center border-b-4 border-blue-800">
          <h1 className="text-3xl font-black text-white tracking-tighter">
            KAMU<span className="text-blue-400">GYS</span>
          </h1>
          <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mt-2">
            Görevde Yükselme Sınavı Hazırlık Platformu
          </p>
        </div>

        {/* Giriş Formu */}
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">T.C. Kimlik No / E-Posta</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gov-navy focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 font-medium"
              placeholder="Bilgilerinizi giriniz"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Şifre</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gov-navy focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-700 font-medium"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
              <input type="checkbox" className="rounded text-gov-navy border-slate-300" /> Beni Hatırla
            </label>
            <a href="#" className="text-gov-accent font-bold hover:underline transition-all">Şifremi Unuttum</a>
          </div>

          <button 
            type="submit"
            className="w-full bg-gov-navy text-white py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-gov-accent transition-all shadow-lg active:scale-95"
          >
            Sisteme Giriş Yap
          </button>
        </form>

        {/* Alt Bilgi */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500">
            Hesabınız yok mu? <Link to="/register" className="text-gov-navy font-bold hover:underline text-sm ml-1 transition-all">Kayıt Ol</Link>
          </p>
        </div>
      </div>
    </div>
  );
}