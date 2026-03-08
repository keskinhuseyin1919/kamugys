import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xl shadow-inner border border-slate-200 dark:border-slate-700 transition-colors"
    >
      {darkMode ? '☀️' : '🌙'}
    </motion.button>
  );
}