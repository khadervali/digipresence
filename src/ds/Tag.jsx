import React from 'react';

/**
 * Pill chip for filters / categories. Soft grey by default, solid ink when active.
 */
export function Tag({ children, dotColor, onRemove, active = false, style = {}, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 7,
      fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, lineHeight: 1,
      padding: '7px 14px', borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: active ? 'var(--text-primary)' : 'var(--ink-100)',
      color: active ? 'var(--bg)' : 'var(--ink-700)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style,
    }} {...rest}>
      {dotColor && <span style={{ width: 8, height: 8, borderRadius: 999, background: dotColor }} />}
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Remove" style={{
          border: 'none', background: 'transparent', cursor: 'pointer', padding: 0,
          color: 'inherit', fontSize: 16, lineHeight: 1, marginLeft: 1, opacity: 0.6,
        }}>×</button>
      )}
    </span>
  );
}
