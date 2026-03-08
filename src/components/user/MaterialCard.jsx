export default function MaterialCard({ title, category, type, date }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          {/* Dosya İkonu */}
          <div className="bg-blue-50 p-3 rounded-lg">
            {type === 'PDF' ? (
              <span className="text-2xl text-red-600 font-bold">PDF</span>
            ) : (
              <span className="text-2xl text-blue-600">📄</span>
            )}
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{date}</span>
        </div>
        
        <h4 className="text-slate-800 font-bold text-sm mb-1 leading-tight">{title}</h4>
        <p className="text-slate-500 text-xs mb-4">{category}</p>
      </div>

      <button className="w-full py-2 bg-slate-50 hover:bg-gov-navy hover:text-white border border-slate-200 text-gov-navy text-xs font-bold rounded transition-all uppercase tracking-tighter">
        Dokümanı Görüntüle
      </button>
    </div>
  );
}