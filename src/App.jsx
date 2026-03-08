import AppRouter from './routes/AppRouter';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext'; // <-- Ekle

function App() {
  return (
    <ThemeProvider> {/* <-- Sarmala */}
      <Toaster position="top-right" />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;