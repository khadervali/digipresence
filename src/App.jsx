import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Cta from './components/Cta';
import Footer from './components/Footer';
import StartModal from './components/StartModal';
import SeoPage from './pages/SeoPage';
import AssetsPage from './pages/Assets';

const pageMap = [
  'web-product-services',
  'social-content-services',
  'talent-consultancy-services',
  'paid-ads-services',
  'work',
  'about',
  'blog',
  'guides',
  'pricing',
  'contact',
  'support',
  'privacy',
  'terms',
  'cookies',
  'careers',
];



function GlobalClickRipple({ ripples }) {
  return (
    <>
      <style>{`@media (prefers-reduced-motion: reduce){ .dp-global-ripple{ display:none !important; } }`}</style>
      <div aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 75 }}>
        {ripples.map((r) => (
          <span
            key={r.id}
            className="dp-global-ripple"
            style={{ position: 'absolute', left: r.x, top: r.y, transform: 'translate(-50%,-50%)' }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transform: 'translate(-50%,-50%)',
                  borderRadius: '50%',
                  width: 0,
                  height: 0,
                  border: `1.5px solid ${['rgba(79,172,254,0.52)', 'rgba(124,120,255,0.4)', 'rgba(168,85,247,0.28)'][i]}`,
                }}
                ref={(el) => {
                  if (el && !el.dataset.an) {
                    el.dataset.an = '1';
                    el.animate(
                      [{ width: '0px', height: '0px', opacity: 0.78 }, { width: '420px', height: '420px', opacity: 0 }],
                      { duration: 1500, delay: i * 130, easing: 'cubic-bezier(0.16,1,0.3,1)', fill: 'forwards' }
                    );
                  }
                }}
              />
            ))}
          </span>
        ))}
      </div>
    </>
  );
}

function SeoPageRoute() {
  const { slug = '' } = useParams();
  return <SeoPage slug={slug} />;
}

function HomePage({ onStart }) {
  return (
    <main>
      <Helmet>
        <title>DigiPrezence | Premium digital presence for small businesses</title>
        <link rel="canonical" href="https://digiprezence.com" />
      </Helmet>
      <Hero onStart={onStart} />
      <Services />
      <Work />
      <Cta onStart={onStart} />
    </main>
  );
}

function SeoPageCatchAll() {
  const pathname = useLocation().pathname.replace(/^\//, '');
  return <SeoPage slug={pageMap.includes(pathname) ? pathname : ''} />;
}

export default function App() {
  const [startOpen, setStartOpen] = useState(false);
  const [ripples, setRipples] = useState([]);
  const rippleIdRef = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('dp-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dp-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const nav = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 56, behavior: 'smooth' });
        }
      }, 60);
      return;
    }

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 56, behavior: 'smooth' });
  };

  const spawnRipple = (x, y) => {
    const id = rippleIdRef.current;
    rippleIdRef.current += 1;
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1800);
  };

  const onGlobalPointerDown = (e) => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    spawnRipple(e.clientX, e.clientY);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }} onPointerDown={onGlobalPointerDown}>
      <GlobalClickRipple ripples={ripples} />
      <Header onStart={() => setStartOpen(true)} onNav={nav} theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage onStart={() => setStartOpen(true)} />} />
        {pageMap.map((slug) => (
          <Route key={slug} path={`/${slug}`} element={<SeoPage slug={slug} />} />
        ))}
        <Route path="/pages/:slug" element={<SeoPageRoute />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="*" element={<SeoPageCatchAll />} />
      </Routes>
      <Footer />
      <StartModal open={location.pathname === '/' && startOpen} onClose={() => setStartOpen(false)} />
    </div>
  );
}
