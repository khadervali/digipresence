import { useState, useEffect } from 'react';
import { Button } from '../designSystem';
import { IconMenu, IconX } from '../ds/icons';

const logoUrl = new URL('../../assets/logo-lockup.svg', import.meta.url).href;

export default function Header({ onStart }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Work', 'Services', 'Pricing', 'About'];

  const nav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(251,251,253,0.88)' : 'rgba(251,251,253,0.6)',
      backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      borderBottom: `1px solid ${scrolled ? 'var(--ink-100)' : 'transparent'}`,
      transition: 'border-color 0.24s ease, background 0.24s ease',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', height: 56, padding: '0 22px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', flexShrink: 0 }}>
          <img src={logoUrl} height="38" alt="DigiPresence" />
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 34 }} className="dp-desktop-nav">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); nav(l.toLowerCase()); }}
              style={{ fontSize: 14, fontWeight: 400, color: 'var(--ink-700)', textDecoration: 'none', transition: 'color 0.18s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink-900)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-700)')}>
              {l}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="dp-desktop-nav">
            <Button size="sm" onClick={onStart}>Get started</Button>
          </div>
          <button onClick={() => setOpen(!open)} className="dp-mobile-nav"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--ink-900)', display: 'flex' }}
            aria-label="Toggle menu">
            {open ? <IconX size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="dp-mobile-nav" style={{
          borderTop: '1px solid var(--ink-100)', background: 'rgba(251,251,253,0.97)',
          padding: '16px 22px 20px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); nav(l.toLowerCase()); }}
              style={{ fontSize: 16, color: 'var(--ink-800)', textDecoration: 'none',
                padding: '10px 0', borderBottom: '1px solid var(--ink-50)' }}>
              {l}
            </a>
          ))}
          <div style={{ marginTop: 14 }}><Button fullWidth onClick={onStart}>Get started</Button></div>
        </div>
      )}

      <style>{`
        @media (min-width: 700px) { .dp-mobile-nav { display: none !important; } }
        @media (max-width: 699px)  { .dp-desktop-nav { display: none !important; } }
      `}</style>
    </header>
  );
}
