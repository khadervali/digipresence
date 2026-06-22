import React from 'react';

/**
 * Small status / category label, pill-shaped, soft-tinted or solid.
 */
export function Badge({ tone = 'neutral', solid = false, dot = false, children, style = {}, ...rest }) {
  const tones = {
    neutral: { bg: 'var(--ink-100)', fg: 'var(--ink-700)', solidBg: 'var(--text-primary)', solidFg: 'var(--bg)' },
    accent:  { bg: 'var(--accent-100)', fg: 'var(--accent-600)', solidBg: 'var(--accent-500)', solidFg: '#fff' },
    success: { bg: 'var(--success-bg)', fg: 'var(--success)', solidBg: 'var(--success)', solidFg: '#fff' },
    warning: { bg: 'var(--warning-bg)', fg: 'var(--warning)', solidBg: 'var(--warning)', solidFg: '#fff' },
    danger:  { bg: 'var(--danger-bg)', fg: 'var(--danger)', solidBg: 'var(--danger)', solidFg: '#fff' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, lineHeight: 1,
      padding: '5px 11px', borderRadius: 'var(--radius-pill)',
      background: solid ? t.solidBg : t.bg,
      color: solid ? t.solidFg : t.fg,
      ...style,
    }} {...rest}>
      {dot && <span style={{ width: 7, height: 7, borderRadius: 999, background: 'currentColor' }} />}
      {children}
    </span>
  );
}
