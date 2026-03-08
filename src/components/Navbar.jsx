export default function Navbar() {
  return (
    <nav className="bg-secondary/80 backdrop-blur-md sticky top-0 z-50 p-4 border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-2xl font-black text-accent">KAMU<span className="text-white">GYS</span></span>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-accent transition">Ana Sayfa</a>
          <a href="#" className="hover:text-accent transition">Paketler</a>
          <button className="bg-accent px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition">Giriş Yap</button>
        </div>
      </div>
    </nav>
  );
}