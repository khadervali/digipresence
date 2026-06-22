import { Button, Eyebrow } from '../designSystem';
import { IconChevron, IconSparkle } from '../ds/icons';

const markUrl = new URL('../assets/mark.png', import.meta.url).href;

function HeroVisual() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 720, height: 360, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
      <style>{`
        @keyframes dp-pulse {
          0%   { transform: translate(-50%,-50%) scale(.55); opacity:.5; }
          70%  { opacity:0; }
          100% { transform: translate(-50%,-50%) scale(1.7); opacity:0; }
        }
        @keyframes dp-float { 0%,100%{ transform: translateY(0);} 50%{ transform: translateY(-10px);} }
        @media (prefers-reduced-motion: reduce){ .dp-ring,.dp-mark{ animation:none !important; } }
      `}</style>
      {[0, 1, 2].map((i) => (
        <span key={i} className="dp-ring" style={{
          position: 'absolute', left: '50%', top: '50%', width: 300, height: 300,
          border: '1.5px solid var(--blue-400)', borderRadius: '50%',
          animation: `dp-pulse 4.6s ${i * 1.5}s cubic-bezier(0.16,1,0.3,1) infinite`,
          pointerEvents: 'none',
        }} />
      ))}
      <img className="dp-mark" src={markUrl} alt="DigiPresence" style={{
        position: 'relative',
        width: 260,
        height: 260,
        objectFit: 'contain',
        animation: 'dp-float 6s ease-in-out infinite',
        filter: 'drop-shadow(0 0 30px rgba(79,172,254,0.35)) drop-shadow(0 0 60px rgba(168,85,247,0.22))',
        pointerEvents: 'none',
      }} />
    </div>
  );
}

export default function Hero({ onStart }) {
  return (
    <section style={{ textAlign: 'center', padding: '92px 22px 48px' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <Eyebrow style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 14px',
          borderRadius: 980,
          background: 'var(--accent-100)',
          color: 'var(--blue-400)',
          fontSize: 14,
          fontWeight: 600,
          marginBottom: 26,
        }}>
          <IconSparkle size={16} /> Digital presence, done right
        </Eyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'clamp(44px, 7vw, 84px)',
          lineHeight: 1.04,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          margin: 0,
        }}>
          Your brand,<br />impossible to ignore.
        </h1>
        <p style={{
          fontSize: 'clamp(19px, 2.4vw, 24px)',
          lineHeight: 1.45,
          color: 'var(--text-secondary)',
          maxWidth: 620,
          margin: '24px auto 0',
          letterSpacing: '-0.01em',
        }}>
          Websites, social, and the strategy to make both land. DigiPresence builds the digital presence that makes a small business feel ten times its size.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center', marginTop: 34, flexWrap: 'wrap' }}>
          <Button size="lg" onClick={onStart}>Start a project</Button>
          <Button
            size="lg"
            variant="text"
            iconRight={<IconChevron size={18} />}
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            See our work
          </Button>
        </div>
      </div>
      <div style={{ marginTop: 48 }}><HeroVisual /></div>
    </section>
  );
}
