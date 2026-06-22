import { Card, Eyebrow, Stat } from '../designSystem';

const values = [
  {
    title: 'Clarity over noise',
    body: 'Every decision starts from your business goal, not a trend. We design for understanding first.',
  },
  {
    title: 'Premium execution',
    body: 'Fast builds, sharp copy, polished motion, and measurable outcomes across web and social.',
  },
  {
    title: 'One accountable team',
    body: 'Strategy, design, build, and optimization stay under one roof so momentum never breaks.',
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '92px 22px', background: 'transparent' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div data-reveal style={{ maxWidth: 760, marginBottom: 36 }}>
          <Eyebrow style={{ marginBottom: 12, color: '#7cb2ff' }}>About DigiPresence</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(34px,4.8vw,56px)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            margin: 0,
            color: '#f2f6ff',
          }}>
            Rebuilt to match the new DS and execution quality bar.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gap: 18,
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}>
          {values.map((item) => (
            <Card key={item.title} variant="default" data-reveal style={{
              padding: 24,
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(161,184,224,0.18)',
              background: 'linear-gradient(160deg, rgba(15,24,43,0.94) 0%, rgba(12,20,36,0.94) 100%)',
              color: '#ebf2ff',
            }}>
              <h3 style={{
                margin: '0 0 12px',
                fontFamily: 'var(--font-display)',
                fontSize: 24,
                letterSpacing: '-0.02em',
                color: '#f4f7ff',
              }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, color: '#aec2e8', lineHeight: 1.55, fontSize: 16 }}>
                {item.body}
              </p>
            </Card>
          ))}
        </div>

        <div data-reveal style={{
          marginTop: 40,
          display: 'grid',
          gap: 18,
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          padding: '22px 24px',
          borderRadius: 'var(--radius-2xl)',
          border: '1px solid rgba(161,184,224,0.18)',
          background: 'linear-gradient(130deg, rgba(11,20,35,0.95), rgba(8,16,30,0.95))',
        }}>
          <Stat value="180+" label="Projects delivered" accent="#8dc2ff" labelColor="#9fb5db" />
          <Stat value="14" label="Average launch days" accent="#8dc2ff" labelColor="#9fb5db" />
          <Stat value="4.9" label="Client satisfaction" accent="#8dc2ff" labelColor="#9fb5db" />
          <Stat value="3.2x" label="Average visibility lift" accent="#8dc2ff" labelColor="#9fb5db" />
        </div>
      </div>
    </section>
  );
}
