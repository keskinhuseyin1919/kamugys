/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Karanlık modun 'class' bazlı çalışması için şart
  theme: {
    extend: {
      colors: {
        // KURUMSAL MAVİ & BEYAZ PALETİ
        'gov': {
          'navy': '#002855',    // O derin, resmi lacivert (Sidebar için)
          'accent': '#004080',  // Vurgu ve hover laciverti
          'bg': '#F8FAFC',      // Ferah, temiz ve göz yormayan arka plan (Beyaz/Gri geçişi)
          'emerald': '#059669', // Başarı, onay ve admin aksiyon yeşili
          'blue': '#0056b3',    // Canlı link ve buton mavisi
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      // Ekstra: Tasarımı daha yumuşak göstermek için border-radius genişletmesi
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}