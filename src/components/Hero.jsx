export default function Hero() {
  return (
    <div className="py-20 px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        GYS Sınavlarına <span className="text-accent">Dijital</span> Hazırlanın
      </h1>
      <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
        En güncel mevzuat ve binlerce özgün soru ile hedefinize ulaşın.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-accent px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition">Hemen Başla</button>
        <button className="border border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary transition">İncele</button>
      </div>
    </div>
  );
}