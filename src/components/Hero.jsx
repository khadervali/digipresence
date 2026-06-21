import { Button } from '../designSystem';
import { IconSparkle, IconChevron } from '../ds/icons';

const logoUrl = new URL('../../assets/logo-mark-inverse.svg', import.meta.url).href;

function PresenceVisual() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 760, height: 360, margin: '0 auto' }} aria-hidden="true">
      <style>{`
        @keyframes dp-pulse { 0%{transform:scale(.6);opacity:.55} 70%{opacity:0} 100%{transform:scale(1.9);opacity:0} }
        @media (prefers-reduced-motion: reduce){ .dp-ring{animation:none!important;opacity:.18!important} }
      `}</style>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="dp-ring" style={{
          position: 'absolute', left: '50%', top: '50%', width: 320, height: 320, marginLeft: -160, marginTop: -160,
          border: '1.5px solid var(--accent-500)', borderRadius: '50%',
          animation: `dp-pulse 4.4s ${i * 1.1}s cubic-bezier(0.16,1,0.3,1) infinite`,
        }} />
      ))}
      <div style={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
        width: 132, height: 132, borderRadius: '50%', background: 'var(--ink-900)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 30px 80px rgba(0,113,227,0.25)',
      }}>
        <img src={logoUrl} width="64" alt="" />
      </div>
    </div>
  );
}

export default function Hero({ onStart }) {
  return (
    <section style={{ textAlign: 'center', padding: '92px 22px 40px' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 980,
          background: 'var(--accent-100)', color: 'var(--accent-600)', fontSize: 14, fontWeight: 600, marginBottom: 26 }}>
          <IconSparkle size={16} /> Digital presence, done right
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(44px, 7vw, 84px)',
          lineHeight: 1.04, letterSpacing: '-0.03em', color: 'var(--ink-900)', margin: 0 }}>
          Your brand,<br />impossible to ignore.
        </h1>
        <p style={{ fontSize: 'clamp(19px, 2.4vw, 24px)', lineHeight: 1.45, color: 'var(--ink-600)',
          maxWidth: 620, margin: '24px auto 0', letterSpacing: '-0.01em' }}>
          Websites, social, and the strategy to make both land. DigiPresence builds the digital presence that makes a small business feel ten times its size.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center',
          marginTop: 34, flexWrap: 'wrap' }}>
          <Button size="lg" onClick={onStart}>Start a project</Button>
          <Button size="lg" variant="text" iconRight={<IconChevron size={18} />}
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            See our work
          </Button>
        </div>
      </div>
      <div style={{ marginTop: 56 }}><PresenceVisual /></div>
    </section>
  );
}
