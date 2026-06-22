import { useState } from 'react';
import { Badge, Button, Switch } from '../designSystem';
import { IconCheck } from '../ds/icons';

function PricingCard({ plan, price, period, blurb, features, featured, onStart }) {
  return (
    <div style={{
      background: featured ? 'var(--black)' : 'var(--paper-bright)',
      color: featured ? 'var(--text-inverse)' : 'var(--ink-900)',
      border: featured ? 'none' : '1px solid var(--ink-100)',
      borderRadius: 'var(--radius-2xl)',
      padding: 32,
      boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      transform: featured ? 'translateY(-8px)' : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 21, margin: 0 }}>{plan}</h3>
        {featured && <Badge tone="accent" solid>Most popular</Badge>}
      </div>
      <p style={{ fontSize: 15, color: featured ? '#a1a1a6' : 'var(--ink-600)', margin: '0 0 22px', lineHeight: 1.45 }}>{blurb}</p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 48, letterSpacing: '-0.03em' }}>{price}</span>
        <span style={{ fontSize: 15, color: featured ? '#a1a1a6' : 'var(--ink-500)' }}>/{period}</span>
      </div>
      <div style={{ margin: '24px 0' }}>
        <Button fullWidth variant={featured ? 'inverse' : 'primary'} onClick={onStart}>Choose {plan}</Button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {features.map((f) => (
          <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: featured ? '#d2d2d7' : 'var(--ink-700)' }}>
            <IconCheck size={18} style={{ color: 'var(--accent-400)', flex: 'none', marginTop: 1 }} />{f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing({ onStart }) {
  const [annual, setAnnual] = useState(true);
  const mult = annual ? 0.8 : 1;
  const fmt = (n) => `₹${Math.round(n * mult).toLocaleString('en-IN')}k`;

  return (
    <section id="pricing" style={{ background: 'var(--ink-50)', padding: '88px 22px' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--accent-600)', marginBottom: 12 }}>Pricing</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(32px,4.4vw,48px)', letterSpacing: '-0.025em', margin: 0 }}>
            Plans that scale with you.
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, margin: '26px 0 44px' }}>
          <span style={{ fontSize: 15, color: annual ? 'var(--ink-500)' : 'var(--ink-900)', fontWeight: 500 }}>Monthly</span>
          <Switch checked={annual} onChange={setAnnual} />
          <span style={{ fontSize: 15, color: annual ? 'var(--ink-900)' : 'var(--ink-500)', fontWeight: 500 }}>
            Annual <span style={{ color: 'var(--accent-600)' }}>· save 20%</span>
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, alignItems: 'start' }}>
          <PricingCard
            plan="Starter"
            price={fmt(15)}
            period="mo"
            blurb="A presence to be proud of, fast."
            features={['1-page website', 'Social profile setup', 'Monthly report']}
            onStart={onStart}
          />
          <PricingCard
            plan="Growth"
            price={fmt(35)}
            period="mo"
            featured
            blurb="Always-on web + social, fully managed."
            features={['Up to 8-page website', '12 social posts / mo', 'Community management', 'Quarterly strategy call']}
            onStart={onStart}
          />
          <PricingCard
            plan="Scale"
            price={fmt(70)}
            period="mo"
            blurb="A full digital team on tap."
            features={['Unlimited pages & apps', 'Daily social + ads', 'Dedicated manager', 'Hiring & consultancy']}
            onStart={onStart}
          />
        </div>
      </div>
    </section>
  );
}
