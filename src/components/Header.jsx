import { useEffect, useState } from 'react';
import { Button } from '../designSystem';
import { IconMenu, IconX } from '../ds/icons';

const markUrl = new URL('../assets/mark.png', import.meta.url).href;

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Header({ onStart, onNav, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Work', 'Services', 'About'];

  const nav = (id) => {
    setOpen(false);
    if (onNav) {
      onNav(id);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'var(--header-bg-scrolled)' : 'var(--header-bg)',
      backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      borderBottom: `1px solid ${scrolled ? 'var(--header-border-scrolled)' : 'var(--header-border)'}`,
      transition: 'border-color 320ms ease, background 320ms ease',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        height: 56,
        padding: '0 22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            nav('home');
          }}
          style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}
        >
          <img
            src={markUrl}
            height="30"
            width="30"
            alt=""
            style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(79,172,254,0.35))', flexShrink: 0 }}
          />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 17,
            fontWeight: 300,
            letterSpacing: '0.01em',
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}>
            Digi
            <span style={{
              fontWeight: 600,
              background: 'var(--gradient-brand-h)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Prezence
            </span>
          </span>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 34 }} className="dp-desktop-nav">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                nav(l.toLowerCase());
              }}
              onMouseEnter={() => setHovered(l)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: hovered === l ? 'var(--text-primary)' : 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 180ms ease',
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="dp-desktop-nav"
            style={{
              width: 34,
              height: 34,
              borderRadius: 'var(--radius-pill)',
              background: 'transparent',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              flexShrink: 0,
            }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <div className="dp-desktop-nav"><Button size="sm" onClick={onStart}>Get started</Button></div>
          <button
            onClick={() => setOpen(!open)}
            className="dp-mobile-nav"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--text-primary)', display: 'flex' }}
            aria-label="Toggle menu"
          >
            {open ? <IconX size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="dp-mobile-nav" style={{
          borderTop: '1px solid var(--border-color)',
          background: 'var(--surface-card)',
          padding: '16px 22px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                nav(l.toLowerCase());
              }}
              style={{
                fontSize: 16,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {l}
            </a>
          ))}
          <button
            onClick={onToggleTheme}
            style={{
              marginTop: 10,
              width: '100%',
              height: 40,
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              background: 'transparent',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              cursor: 'pointer',
            }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />} {isDark ? 'Light mode' : 'Dark mode'}
          </button>
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
