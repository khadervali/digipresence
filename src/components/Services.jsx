import { Card, Button } from '../designSystem';
import { IconGlobe, IconShare, IconUsers, IconCheck, IconChevron } from '../ds/icons';

function ServiceCard({ icon, title, body, points }) {
  return (
    <Card variant="panel" interactive style={{ display: 'flex', flexDirection: 'column', padding: 30, borderRadius: 'var(--radius-2xl)' }}>
      <div style={{ width: 52, height: 52, borderRadius: 16, background: 'var(--paper-bright)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--accent-600)', boxShadow: 'var(--shadow-sm)' }}>{icon}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24,
        letterSpacing: '-0.02em', margin: '22px 0 10px' }}>{title}</h3>
      <p style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--ink-600)', margin: 0 }}>{body}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {points.map((p) => (
          <li key={p} style={{ display: 'flex', gap: 9, alignItems: 'center', fontSize: 15, color: 'var(--ink-700)' }}>
            <IconCheck size={18} style={{ color: 'var(--accent-500)', flex: 'none' }} />{p}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 22 }}>
        <Button variant="text" iconRight={<IconChevron size={16} />}>Learn more</Button>
      </div>
    </Card>
  );
}

export default function Services() {
  return (
    <>
      <section id="services" style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 22px' }}>
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 50px' }}>
          <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--accent-600)', marginBottom: 12 }}>What we do</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(34px,4.6vw,52px)',
            letterSpacing: '-0.025em', lineHeight: 1.06, margin: 0 }}>Three ways to show up bigger.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          <ServiceCard icon={<IconGlobe size={26} />} title="Web & Product"
            body="Fast, beautiful websites and web apps that turn visitors into customers."
            points={['Design + build', 'SEO foundations', 'Analytics setup']} />
          <ServiceCard icon={<IconShare size={26} />} title="Social & Content"
            body="Always-on social management with content that actually sounds like you."
            points={['Content calendars', 'Design + copy', 'Community + DMs']} />
          <ServiceCard icon={<IconUsers size={26} />} title="Talent & Consultancy"
            body="The right people and the strategy to put your presence to work."
            points={['Hiring support', 'Growth advisory', 'Brand strategy']} />
        </div>
      </section>

      {/* Proof band */}
      <section style={{ background: 'var(--black)', color: 'var(--text-inverse)', padding: '88px 22px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(30px,4vw,44px)',
            letterSpacing: '-0.025em', color: '#fff', margin: '0 0 56px' }}>
            Numbers that earn their keep.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
            {[
              { value: '3.2×', label: 'Average reach lift in 90 days' },
              { value: '180+', label: 'Brands launched & managed' },
              { value: '14d',  label: 'From kickoff to live site' },
              { value: '4.9',  label: 'Average client rating' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600,
                  fontSize: 'clamp(40px,5vw,60px)', letterSpacing: '-0.03em',
                  color: 'var(--accent-400)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 15, color: '#a1a1a6', marginTop: 12, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
