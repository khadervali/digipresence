import { Badge, Tag } from '../designSystem';
import { useState } from 'react';

function getPreviewImage(url) {
  return `https://image.thum.io/get/width/1600/noanimate/${encodeURIComponent(url)}`;
}

function PreviewModal({ project, onClose }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!project) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 90, background: 'rgba(0,0,0,0.62)', display: 'grid', placeItems: 'center', padding: 20 }}>
      <div style={{ width: 'min(1180px, 96vw)', borderRadius: 20, overflow: 'hidden', background: 'var(--bg-elevated)', border: '1px solid var(--ink-100)', boxShadow: '0 24px 80px rgba(10,16,38,0.35)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, padding: '14px 16px', borderBottom: '1px solid var(--ink-100)' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.08em', color: 'var(--ink-400)', textTransform: 'uppercase' }}>Live Preview</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{project.name}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', borderRadius: 999, border: '1px solid var(--ink-200)', color: 'var(--text-primary)', padding: '8px 12px', fontSize: 12, fontWeight: 700 }}
            >
              Open in new tab
            </a>
            <button
              onClick={onClose}
              style={{ border: '1px solid var(--ink-200)', background: 'var(--bg)', color: 'var(--text-primary)', borderRadius: 999, padding: '8px 12px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        </div>

        <div style={{ position: 'relative', background: '#f8f9fb', height: 'min(72vh, 780px)' }}>
          {!imageFailed ? (
            <img
              src={getPreviewImage(project.previewUrl)}
              alt={`${project.name} website preview`}
              onError={() => setImageFailed(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ height: '100%', display: 'grid', placeItems: 'center', background: `linear-gradient(132deg, ${project.accent} 0%, #0b1024 100%)`, color: '#fff', textAlign: 'center', padding: 24 }}>
              <div>
                <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 8 }}>Preview image unavailable</div>
                <div style={{ opacity: 0.86, fontSize: 14, lineHeight: 1.6, maxWidth: 520 }}>
                  This project blocks embeddable previews. Open the real website in a new tab to view the full experience.
                </div>
              </div>
            </div>
          )}

          <div style={{ position: 'absolute', left: 14, right: 14, bottom: 14, borderRadius: 12, background: 'rgba(10,16,38,0.86)', color: '#fff', fontSize: 12, lineHeight: 1.4, padding: '10px 12px' }}>
            Screenshot preview is shown here to avoid iframe restrictions. Use "Open in new tab" for the live site.
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({ project, onPreview }) {
  const tone = project.accent;
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <article style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid var(--ink-100)', background: 'var(--bg-elevated)', boxShadow: '0 8px 34px rgba(7,12,28,0.06)' }}>
      <div style={{ position: 'relative', minHeight: 210, padding: 18, background: `linear-gradient(132deg, ${tone} 0%, #0b1024 100%)` }}>
        <div style={{ position: 'absolute', right: -26, top: -30, width: 136, height: 136, borderRadius: '50%', background: 'rgba(255,255,255,0.14)', filter: 'blur(1px)' }} />
        <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.34)', background: 'rgba(255,255,255,0.1)' }}>
          <div style={{ height: 30, display: 'flex', alignItems: 'center', gap: 6, padding: '0 10px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
            <span style={{ marginLeft: 8, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.88)' }}>{project.displayUrl}</span>
          </div>
          <div style={{ height: 120, position: 'relative', background: 'rgba(255,255,255,0.08)' }}>
            {!imageFailed ? (
              <img
                src={getPreviewImage(project.previewUrl)}
                alt={`${project.name} thumbnail`}
                onError={() => setImageFailed(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{ height: '100%', display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,0.84)', fontSize: 12, fontWeight: 600 }}>
                Site snapshot unavailable
              </div>
            )}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,12,28,0.02) 15%, rgba(7,12,28,0.34) 100%)' }} />
          </div>
        </div>
        <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {project.results.map((item) => (
            <span key={item} style={{ borderRadius: 999, border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '5px 10px', background: 'rgba(255,255,255,0.14)' }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em', margin: 0 }}>{project.name}</h3>
          <Badge tone="neutral">{project.cat}</Badge>
        </div>
        <p style={{ margin: '9px 0 12px', color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.55 }}>{project.summary}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <button
            onClick={() => onPreview(project)}
            style={{ border: 0, background: 'var(--accent-600)', color: '#fff', borderRadius: 999, padding: '10px 14px', fontWeight: 700, fontSize: 12, cursor: 'pointer' }}
          >
            Large live preview
          </button>
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', borderRadius: 999, border: '1px solid var(--ink-200)', color: 'var(--text-primary)', padding: '9px 13px', fontWeight: 700, fontSize: 12 }}
          >
            Visit website
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const all = [
    {
      name: 'Suresh Allergy & Chest Hospital',
      cat: 'Web',
      accent: '#1f7ae0',
      displayUrl: 'Suresh Chest',
      previewUrl: 'https://khadervali.com/suresh-chest/',
      summary: 'Built a clean, trust-heavy healthcare website with clear service pathways and fast mobile experience.',
      results: ['+48% appointment calls', 'LCP 2.0s'],
    },
    {
      name: 'Uma Maheswari Care',
      cat: 'Web',
      accent: '#16a085',
      displayUrl: 'uma-maheswari.com',
      previewUrl: 'https://khadervali.com/uma-maheswari/',
      summary: 'Positioned the brand with a premium editorial layout, stronger service narrative, and easier lead capture.',
      results: ['+2.7x form submissions', '72% mobile users'],
    },
    {
      name: 'CoolComfort HVAC',
      cat: 'Social',
      accent: '#505d7a',
      displayUrl: 'coolcomfortkadapa.com',
      previewUrl: 'https://coolcomfortkadapa.com',
      summary: 'Unified web and social identity for a local service brand to look larger, sharper, and conversion-ready.',
      results: ['+34% quote requests', 'CAC -21%'],
    },
    {
      name: 'VyapariTrack SaaS',
      cat: 'Web',
      accent: '#1d1d1f',
      displayUrl: 'vyaparitrack.com',
      previewUrl: 'https://vyaparitrack.com',
      summary: 'Created a product-first SaaS story with stronger information hierarchy and better trial onboarding cues.',
      results: ['+41% demo bookings', 'Bounce -29%'],
    },
    {
      name: 'Mrudula Hospital',
      cat: 'Web',
      accent: '#334155',
      displayUrl: 'mrudulahospital.com',
      previewUrl: 'https://khadervali.com/mrudula-hospital',
      summary: 'Designed a reassuring patient journey with specialist visibility, proof signals, and quick action paths.',
      results: ['+31% direct leads', 'TTI 2.4s'],
    },
    {
      name: 'Star Clinic',
      cat: 'Ads',
      accent: '#0058b0',
      displayUrl: 'starclinic.in',
      previewUrl: 'https://khadervali.com/star-clinic',
      summary: 'Connected landing page and ad messaging to improve ad quality score and reduce lead acquisition cost.',
      results: ['CPL -38%', 'CTR +52%'],
    },
  ];

  const [filter, setFilter] = useState('All');
  const [previewProject, setPreviewProject] = useState(null);
  const cats = ['All', 'Web', 'Social', 'Ads'];
  const shown = filter === 'All' ? all : all.filter((p) => p.cat === filter);

  return (
    <section id="work" style={{ maxWidth: 1100, margin: '0 auto', padding: '88px 22px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 18, marginBottom: 36 }}>
        <div>
          <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--accent-600)', marginBottom: 10 }}>Selected work</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(32px,4.4vw,48px)', letterSpacing: '-0.025em', margin: 0 }}>
            Brands we've made unmissable.
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {cats.map((c) => (
            <Tag key={c} active={filter === c} onClick={() => setFilter(c)}>{c}</Tag>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 22 }}>
        {shown.map((p) => (
          <ShowcaseCard key={p.name} project={p} onPreview={setPreviewProject} />
        ))}
      </div>

      <PreviewModal key={previewProject?.previewUrl || 'none'} project={previewProject} onClose={() => setPreviewProject(null)} />
    </section>
  );
}
