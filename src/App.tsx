import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Standard Lenis Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (!loading) {
      setTimeout(() => {
        lenis.resize();
      }, 150);
    }

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <Helmet>
            <title>Agbemabiase Cornelius | Software Engineer & Tech Leader</title>
            <meta name="description" content="Portfolio of Agbemabiase Alfred Kofi Cornelius - Software Engineer, Youth Development Practitioner, Database Administrator, and Founder of Tech Dome Academy based in Accra, Ghana." />
          </Helmet>
          
          <AnimatePresence mode="wait">
            {loading ? (
              <LoadingScreen onComplete={() => setLoading(false)} />
            ) : (
              <div className="flex flex-col min-h-screen">
                <CustomCursor />
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            )}
          </AnimatePresence>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}
