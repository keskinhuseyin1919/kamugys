import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterInstitution, setFilterInstitution] = useState("Hepsi");

  // Kurum Listesi (Filtre için)
  const institutions = ["Hepsi", "Adalet Bakanlığı", "Emniyet G.M.", "Sağlık Bakanlığı", "Milli Eğitim B.", "Tarım ve Orman B."];

  // Simüle Edilen Kullanıcı Verileri
  const [users, setUsers] = useState([
    { id: 1, name: "Hüseyin Keskin", institution: "Adalet Bakanlığı", role: "VIP", joined: "01.01.2026", activity: "Yüksek" },
    { id: 2, name: "Mehmet Demir", institution: "Emniyet G.M.", role: "Standart", joined: "15.02.2026", activity: "Orta" },
    { id: 3, name: "Selin Yıldız", institution: "Sağlık Bakanlığı", role: "VIP", joined: "20.02.2026", activity: "Çok Yüksek" },
    { id: 4, name: "Burak Kaya", institution: "Milli Eğitim B.", role: "Standart", joined: "02.03.2026", activity: "Düşük" },
    { id: 5, name: "Ayşe Yılmaz", institution: "Adalet Bakanlığı", role: "Standart", joined: "04.03.2026", activity: "Yüksek" },
  ]);

  // Kurum Bazlı Sayım Analizi (Hangi kurumdan kaç kişi var?)
  const getInstitutionCount = (inst) => users.filter(u => u.institution === inst).length;

  // Filtreleme Mantığı
  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesInst = filterInstitution === "Hepsi" || u.institution === filterInstitution;
    return matchesSearch && matchesInst;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      
      {/* 📊 ÜST ANALİZ KARTLARI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Toplam Aday</p>
          <p className="text-3xl font-black text-slate-800 dark:text-white tracking-tighter mt-1">{users.length}</p>
        </div>
        <div className="bg-gov-blue p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-500/20 relative overflow-hidden">
          <p className="text-[10px] font-black opacity-60 uppercase tracking-widest">Lider Kurum</p>
          <p className="text-2xl font-black italic tracking-tighter mt-1">Adalet Bakanlığı</p>
          <span className="absolute -right-4 -bottom-4 text-7xl opacity-10 italic font-black">TOP</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">VIP Dönüşüm Oranı</p>
          <p className="text-3xl font-black text-emerald-500 tracking-tighter mt-1">
            %{((users.filter(u => u.role === 'VIP').length / users.length) * 100).toFixed(0)}
          </p>
        </div>
      </div>

      {/* 🔍 GELİŞMİŞ FİLTRELEME PANELİ */}
      <header className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="relative w-full lg:w-1/2">
            <input 
              type="text" 
              placeholder="Personel ismi ile ara..."
              className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-gov-blue transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          </div>

          <div className="flex gap-4 w-full lg:w-auto">
            <select 
              className="flex-1 lg:w-64 p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer focus:ring-2 focus:ring-gov-blue"
              onChange={(e) => setFilterInstitution(e.target.value)}
            >
              {institutions.map(inst => (
                <option key={inst} value={inst}>
                  {inst} {inst !== "Hepsi" && `(${getInstitutionCount(inst)})`}
                </option>
              ))}
            </select>
            <button className="px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-gov-blue transition-all">
              RAPORLA
            </button>
          </div>
        </div>
      </header>

      {/* 📋 PERSONEL LİSTESİ */}
      <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50 border-b dark:border-slate-800">
            <tr>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Ad Soyad / Kimlik</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Kurumsal Aidiyet</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Yetki</th>
              <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Aksiyon</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            <AnimatePresence>
              {filteredUsers.map((user, i) => (
                <motion.tr 
                  layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gov-blue/10 text-gov-blue rounded-xl flex items-center justify-center font-black">
                        {user.name.charAt(0)}
                      </div>
                      <p className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight">{user.name}</p>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black rounded-lg uppercase tracking-tighter">
                      🏛️ {user.institution}
                    </span>
                  </td>
                  <td className="p-6 text-center">
                    <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                      user.role === 'VIP' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-6 text-right space-x-2">
                    <button className="p-3 hover:bg-gov-blue/10 text-slate-400 hover:text-gov-blue rounded-xl transition-all">✏️</button>
                    <button className="p-3 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all">🗑️</button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div className="p-20 text-center space-y-4">
            <p className="text-4xl">🔎</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Aradığınız kriterde personel bulunamadı.</p>
          </div>
        )}
      </div>

    </div>
  );
}