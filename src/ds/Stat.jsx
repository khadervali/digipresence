import React from 'react';

/**
 * Headline metric — big display number + quiet label + optional trend delta.
 */
export function Stat({ value, label, delta, trend = 'up', accent = 'var(--ink-900)', style = {}, ...rest }) {
  const trendColor = trend === 'down' ? 'var(--danger)' : 'var(--success)';
  return (
    <div style={{ fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 52, lineHeight: 1, letterSpacing: '-0.025em', color: accent }}>{value}</span>
        {delta != null && (
          <span style={{ fontSize: 15, fontWeight: 600, color: trendColor }}>
            {trend === 'down' ? '↓' : '↑'} {delta}
          </span>
        )}
      </div>
      <div style={{ marginTop: 8, fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 400, color: 'var(--text-secondary)' }}>{label}</div>
    </div>
  );
}
