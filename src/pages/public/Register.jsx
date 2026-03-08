import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Register() {
  const navigate = useNavigate();
  
  // 1. Form State Yönetimi
  const [formData, setFormData] = useState({
    fullName: '',
    tcNo: '',
    email: '',
    institution: 'Adalet Bakanlığı',
    title: '',
    password: '',
    confirmPassword: ''
  });

  // 2. Input Değişim Takibi
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Validasyon ve Kayıt Fonksiyonu
  const handleRegister = (e) => {
    e.preventDefault();

    // T.C. Kimlik Kontrolü
    if (formData.tcNo.length !== 11) {
      return toast.error('T.C. Kimlik Numarası 11 haneli olmalıdır!');
    }

    // Şifre Eşleşme Kontrolü
    if (formData.password !== formData.confirmPassword) {
      return toast.error('Şifreler birbiriyle eşleşmiyor!', {
        icon: '⚠️',
      });
    }

    // Şifre Uzunluk Kontrolü
    if (formData.password.length < 6) {
      return toast.error('Şifre en az 6 karakter olmalıdır.');
    }

    // Başarı Simülasyonu
    toast.success('Başvurunuz başarıyla alındı! Admin onayından sonra giriş yapabilirsiniz.', {
      duration: 6000,
      style: {
        border: '1px solid #10b981',
        padding: '16px',
        color: '#064e3b',
      },
    });

    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gov-bg flex items-center justify-center p-6 py-12">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        
        <div className="bg-gov-navy p-8 text-center border-b-4 border-blue-800">
          <h1 className="text-3xl font-black text-white tracking-tighter italic">KAMUGYS</h1>
          <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mt-2">Yeni Personel Kayıt Merkezi</p>
        </div>

        <form onSubmit={handleRegister} className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* SOL SÜTUN: Kişisel Bilgiler */}
            <div className="space-y-5">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b pb-2">Kişisel Bilgiler</h3>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Ad Soyad</label>
                <input name="fullName" type="text" required onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-semibold" placeholder="Hüseyin Keskin" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">T.C. Kimlik No</label>
                <input name="tcNo" type="text" maxLength="11" required onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-mono" placeholder="12345678901" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">E-Posta</label>
                <input name="email" type="email" required onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-50 outline-none text-sm" placeholder="huseyin@kurum.gov.tr" />
              </div>
            </div>

            {/* SAĞ SÜTUN: Kurumsal ve Şifre */}
            <div className="space-y-5">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b pb-2">Kurumsal Bilgiler</h3>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Çalıştığı Kurum</label>
                <select name="institution" onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none text-sm bg-white font-semibold">
                  <option>Adalet Bakanlığı</option>
                  <option>İçişleri Bakanlığı</option>
                  <option>Sağlık Bakanlığı</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Şifre</label>
                <input name="password" type="password" required onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-50 outline-none text-sm" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Şifre Tekrar</label>
                <input name="confirmPassword" type="password" required onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-50 outline-none text-sm" placeholder="••••••••" />
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-gov-navy text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-gov-accent transition-all shadow-xl shadow-blue-900/20 active:scale-95">
            Kayıt Başvurusunu Gönder
          </button>
        </form>

        <div className="p-6 bg-slate-50 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500 font-medium">
            Zaten hesabınız var mı? <Link to="/login" className="text-gov-navy font-black hover:underline ml-1">GIRIŞ YAP</Link>
          </p>
        </div>
      </div>
    </div>
  );
}