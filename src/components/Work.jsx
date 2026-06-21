import { useState } from 'react';
import { Tag, Badge } from '../designSystem';

function BrowserMock({ accent, label }) {
  return (
    <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid var(--ink-100)',
      background: '#fff', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ height: 34, background: 'var(--ink-50)', display: 'flex', alignItems: 'center',
        gap: 6, padding: '0 12px', borderBottom: '1px solid var(--ink-100)' }}>
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#ff5f57' }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#febc2e' }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#28c840' }} />
        <span style={{ marginLeft: 10, fontSize: 11, color: 'var(--ink-400)', fontFamily: 'var(--font-mono)' }}>{label}</span>
      </div>
      <div style={{ height: 150, background: accent, position: 'relative' }}>
        <div style={{ position: 'absolute', left: 18, top: 20, width: '46%', height: 12, borderRadius: 6, background: 'rgba(255,255,255,0.9)' }} />
        <div style={{ position: 'absolute', left: 18, top: 40, width: '64%', height: 8, borderRadius: 5, background: 'rgba(255,255,255,0.55)' }} />
        <div style={{ position: 'absolute', left: 18, bottom: 18, width: 84, height: 26, borderRadius: 980, background: '#fff' }} />
        <div style={{ position: 'absolute', right: 18, top: 22, width: 96, height: 96, borderRadius: 16, background: 'rgba(255,255,255,0.25)' }} />
      </div>
    </div>
  );
}

const all = [
  { name: 'Suresh Allergy & Chest Hospital', cat: 'Web',    accent: '#0071e3', url: 'sureshchest.in' },
  { name: 'Uma Maheswari Care',              cat: 'Web',    accent: '#00a85a', url: 'umacare.in' },
  { name: 'CoolComfort HVAC',                cat: 'Social', accent: '#6e6e73', url: '@coolcomfort' },
  { name: 'VyapariTrack SaaS',               cat: 'Web',    accent: '#1d1d1f', url: 'vyaparitrack.com' },
  { name: 'NearbyDine',                      cat: 'Social', accent: '#f08c00', url: '@nearbydine' },
  { name: 'Star Clinic',                     cat: 'Ads',    accent: '#0058b0', url: 'starclinic.in' },
];

export default function Work() {
  const [filter, setFilter] = useState('All');
  const cats = ['All', 'Web', 'Social', 'Ads'];
  const shown = filter === 'All' ? all : all.filter((p) => p.cat === filter);

  return (
    <section id="work" style={{ maxWidth: 1100, margin: '0 auto', padding: '88px 22px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        flexWrap: 'wrap', gap: 18, marginBottom: 36 }}>
        <div>
          <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--accent-600)', marginBottom: 10 }}>Selected work</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(32px,4.4vw,48px)', letterSpacing: '-0.025em', margin: 0 }}>
            Brands we've made unmissable.
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {cats.map((c) => <Tag key={c} active={filter === c} onClick={() => setFilter(c)}>{c}</Tag>)}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 22 }}>
        {shown.map((p) => (
          <div key={p.name} style={{ cursor: 'pointer' }}>
            <BrowserMock accent={p.accent} label={p.url} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17,
                letterSpacing: '-0.01em', margin: 0 }}>{p.name}</h3>
              <Badge tone="neutral">{p.cat}</Badge>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
