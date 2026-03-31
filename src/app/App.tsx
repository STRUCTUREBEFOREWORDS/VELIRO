import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { Home } from './components/pages/Home';
import { Sample } from './components/pages/Sample';
import { Process } from './components/pages/Process';
import { Price } from './components/pages/Price';
import { Contact } from './components/pages/Contact';

const AppFooter = () => {
  const { t } = useApp();
  return (
    <footer className="relative z-0 py-16 md:py-32 border-t border-white/5">
      <div className="max-w-[1200px] px-6 mx-auto flex justify-between opacity-30 text-[10px] tracking-[0.4em] uppercase font-light">
        <div>{t('footer.copy')}</div>
        <div>{t('footer.location')}</div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-[#0a0a12] text-white selection:bg-white selection:text-[#0a0a12] overflow-x-hidden">
          <Navigation />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sample" element={<Sample />} />
              <Route path="/process" element={<Process />} />
              <Route path="/price" element={<Price />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <AppFooter />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;