const logoUrl = new URL('../../assets/logo-lockup.svg', import.meta.url).href;

const cols = [
  { h: 'Services', items: ['Web & Product', 'Social & Content', 'Talent & Consultancy', 'Paid Ads'] },
  { h: 'Company',  items: ['Work', 'About', 'Careers', 'Contact'] },
  { h: 'Resources', items: ['Blog', 'Guides', 'Pricing', 'Support'] },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--ink-100)', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '52px 22px 40px',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 28 }}>
        <div>
          <img src={logoUrl} height="38" alt="DigiPresence" />
          <p style={{ fontSize: 14, color: 'var(--ink-500)', marginTop: 16, maxWidth: 240, lineHeight: 1.5 }}>
            The digital presence partner for ambitious small businesses. Based in India, working everywhere.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-900)', marginBottom: 14 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" style={{ fontSize: 14, color: 'var(--ink-500)', textDecoration: 'none', transition: 'color 0.18s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink-900)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-500)')}>
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--ink-100)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 22px',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
          gap: 10, fontSize: 13, color: 'var(--ink-500)' }}>
          <span>© 2026 DigiPresence. All rights reserved.</span>
          <span style={{ display: 'flex', gap: 22 }}>
            {['Privacy', 'Terms', 'Cookies'].map((l) => (
              <a key={l} href="#" style={{ color: 'var(--ink-500)', textDecoration: 'none' }}>{l}</a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
