import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { useApp, LANGUAGES } from '../context/AppContext';

const navPaths = [
  { key: 'nav.home',    path: '/' },
  { key: 'nav.process', path: '/process' },
  { key: 'nav.price',   path: '/price' },
  { key: 'nav.sample',  path: '/sample' },
  { key: 'nav.contact', path: '/contact' },
];

// ── 言語セレクター ────────────────────────────────────────────────────────────
const LangSelector = ({ mobile = false }: { mobile?: boolean }) => {
  const { lang, setLang } = useApp();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (mobile) {
    return (
      <div className="px-6 py-4 border-t border-white/5">
        <p className="text-[9px] tracking-[0.6em] text-white/20 uppercase mb-3">Language</p>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`text-[10px] tracking-[0.3em] px-3 py-1.5 border transition-all cursor-pointer ${
                lang === code
                  ? 'border-[#00ffff]/60 text-[#00ffff] bg-[#00ffff]/5'
                  : 'border-white/10 text-white/30 hover:text-white/60 hover:border-white/30'
              }`}
            >
              {code}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const current = LANGUAGES.find(l => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-[10px] tracking-[0.3em] text-white/50 hover:text-white transition-colors cursor-pointer pl-4 border-l border-white/10"
      >
        <span className={lang !== 'JP' ? 'text-[#00ffff]/80' : ''}>{current.code}</span>
        <svg
          width="8" height="5" viewBox="0 0 8 5" fill="none"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-3 border border-white/10 bg-[#0a0a12]/95 backdrop-blur-xl py-1 min-w-[120px] z-50"
          >
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => { setLang(code); setOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-left cursor-pointer transition-colors hover:bg-white/5 ${
                  lang === code ? 'text-[#00ffff]' : 'text-white/50 hover:text-white'
                }`}
              >
                <span className="text-[10px] tracking-[0.3em]">{code}</span>
                <span className="text-[9px] text-white/30 ml-3">{label}</span>
              </button>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── メインナビ ────────────────────────────────────────────────────────────────
export const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { t } = useApp();

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 px-8 py-3 flex gap-8 items-center">
          {navPaths.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative text-[10px] tracking-[0.2em] font-light transition-colors"
            >
              <span className={location.pathname === item.path ? 'text-white' : 'text-white/40 hover:text-white'}>
                {t(item.key)}
              </span>
              {location.pathname === item.path && (
                <Motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                />
              )}
            </Link>
          ))}
          <LangSelector />
        </div>
      </nav>

      {/* ── Mobile nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/70 border-b border-white/10">
          <span className="text-[10px] tracking-[0.5em] uppercase font-light">arcwove</span>
          <button
            onClick={() => setOpen(!open)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="メニュー"
          >
            <Motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              className="block w-5 h-px bg-white origin-center" />
            <Motion.span animate={{ opacity: open ? 0 : 1 }}
              className="block w-5 h-px bg-white" />
            <Motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              className="block w-5 h-px bg-white origin-center" />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <Motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="backdrop-blur-xl bg-black/90 border-b border-white/10"
            >
              {navPaths.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-4 text-[11px] tracking-[0.4em] uppercase border-b border-white/5 transition-colors ${
                    location.pathname === item.path ? 'text-white' : 'text-white/40'
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              <LangSelector mobile />
            </Motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
