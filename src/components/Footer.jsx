const markUrl = new URL('../assets/mark.png', import.meta.url).href;

const cols = [
  {
    h: 'Services',
    items: [
      { label: 'Web & Product', href: '/#/pages/web-product-services' },
      { label: 'Social & Content', href: '/#/pages/social-content-services' },
      { label: 'Talent & Consultancy', href: '/#/pages/talent-consultancy-services' },
      { label: 'Paid Ads', href: '/#/pages/paid-ads-services' },
    ],
  },
  {
    h: 'Company',
    items: [
      { label: 'Work', href: '/#/pages/work' },
      { label: 'About', href: '/#/pages/about' },
      { label: 'Careers', href: '/#/pages/careers' },
      { label: 'Contact', href: '/#/pages/contact' },
    ],
  },
  {
    h: 'Resources',
    items: [
      { label: 'Blog', href: '/#/pages/blog' },
      { label: 'Guides', href: '/#/pages/guides' },
      { label: 'Pricing', href: '/#/pages/pricing' },
      { label: 'Support', href: '/#/pages/support' },
      { label: 'Brand Assets', href: '/#/assets' },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy', href: '/#/pages/privacy' },
  { label: 'Terms', href: '/#/pages/terms' },
  { label: 'Cookies', href: '/#/pages/cookies' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', background: 'var(--paper)' }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '52px 22px 40px',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 28,
      }} className="dp-footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src={markUrl} height="26" width="26" alt="" style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(79,172,254,0.3))' }} />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 15,
              fontWeight: 300,
              letterSpacing: '0.01em',
              color: 'var(--ink-900)',
              lineHeight: 1,
            }}>
              Digi<span style={{ fontWeight: 600, color: 'var(--blue-400)' }}>Prezence</span>
            </span>
          </div>
          <p style={{ fontSize: 14, color: 'var(--ink-500)', marginTop: 16, maxWidth: 240, lineHeight: 1.5 }}>
            The digital presence partner for ambitious small businesses. Based in India, working everywhere.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-900)', marginBottom: 14 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {c.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} style={{ fontSize: 14, color: 'var(--ink-500)', textDecoration: 'none' }}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--border-color)' }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '20px 22px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
          fontSize: 13,
          color: 'var(--ink-500)',
        }}>
          <span>© 2026 DigiPrezence. All rights reserved.</span>
          <span style={{ display: 'flex', gap: 22 }}>
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} style={{ color: 'var(--ink-500)', textDecoration: 'none' }}>{l.label}</a>
            ))}
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dp-footer-grid { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) !important; }
        }
      `}</style>
    </footer>
  );
}
