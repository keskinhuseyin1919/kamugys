import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import AnimatedPage from '../../components/layout/AnimatedPage';

export default function AnnouncementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  // Simüle edilmiş duyuru verisi (Gerçekte API'den id'ye göre gelir)
  const announcement = {
    id: id,
    title: "2026 Yılı Görevde Yükselme Sınav Takvimi Açıklandı",
    date: "04 Mart 2026",
    category: "Sınav Duyurusu",
    author: "Personel Genel Müdürlüğü",
    content: `
      <p>Sayın Personelimiz,</p>
      <p>Bakanlığımız merkez ve taşra teşkilatında boş bulunan kadrolar için yapılacak olan 2026 yılı Görevde Yükselme ve Unvan Değişikliği sınav takvimi belirlenmiştir.</p>
      <br/>
      <h3 className="font-bold">Önemli Tarihler:</h3>
      <ul>
        <li>• Başvuru Başlangıç: 15 Mart 2026</li>
        <li>• Son Başvuru: 30 Mart 2026</li>
        <li>• Sınav Tarihi: 10 Mayıs 2026</li>
      </ul>
      <br/>
      <p>Sınav konuları ve başvuru şartları ekteki kılavuzda detaylı olarak belirtilmiştir. Tüm adaylara başarılar dileriz.</p>
    `
  };

  return (
    <AnimatedPage>
      <div className="max-w-4xl mx-auto space-y-6 pb-20">
        {/* ÜST NAVİGASYON */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-gov-navy dark:hover:text-blue-400 uppercase tracking-widest transition-colors"
        >
          ⬅️ Duyurulara Geri Dön
        </button>

        {/* DUYURU KARTI */}
        <article className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Header Kısmı */}
          <header className="p-8 md:p-12 border-b border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                {announcement.category}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                {announcement.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white leading-tight tracking-tighter italic">
              {announcement.title}
            </h1>
          </header>

          {/* İçerik Kısmı */}
          <div className="p-8 md:p-12">
            <div 
              className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed font-medium"
              dangerouslySetInnerHTML={{ __html: announcement.content }}
            />

            {/* İmza / Kaynak */}
            <div className="mt-12 pt-8 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Yayınlayan Birim</p>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{announcement.author}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                  🖨️
                </button>
                <button className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                  🔗
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* ALT BİLGİ NOTU */}
        <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-3xl border border-amber-100 dark:border-amber-900/30">
           <p className="text-xs text-amber-700 dark:text-amber-400 font-bold leading-relaxed">
             ⚠️ Bu duyuru resmi bilgilendirme amaçlıdır. Başvuru işlemlerinizi Kurum İçi Personel Sistemi üzerinden gerçekleştirmeyi unutmayınız.
           </p>
        </div>
      </div>
    </AnimatedPage>
  );
}