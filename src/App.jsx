import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PredictPage from './pages/PredictPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Animated background layer */}
        <AnimatedBackground />

        {/* Navigation */}
        <Navigation />

        {/* Main content with floating animation */}
        <motion.div
          className="relative z-10 flex flex-col items-center min-h-screen pt-20"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/predict" element={<PredictPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
}