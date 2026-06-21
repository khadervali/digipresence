import { Button } from '../designSystem';

export default function Cta({ onStart }) {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 22px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: 'clamp(36px,5.4vw,64px)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
          Ready to be<br />impossible to ignore?
        </h2>
        <p style={{ fontSize: 'clamp(18px,2.2vw,22px)', color: 'var(--ink-600)',
          maxWidth: 540, margin: '22px auto 0' }}>
          Tell us about your brand. We'll send back a plan within two working days.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
          <Button size="lg" onClick={onStart}>Start a project</Button>
          <Button size="lg" variant="secondary">Book a call</Button>
        </div>
      </div>
    </section>
  );
}
