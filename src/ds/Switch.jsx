import React from 'react';

/**
 * iOS-style toggle. Green track when on, white knob, soft motion.
 */
export function Switch({ checked = false, onChange, disabled = false, label, id, style = {}, ...rest }) {
  const switchId = id || `dp-switch-${Math.random().toString(36).slice(2, 8)}`;
  const track = {
    width: 50, height: 30, borderRadius: 999, flex: 'none', border: 'none',
    background: checked ? 'var(--toggle-on)' : 'var(--border-strong)',
    position: 'relative', cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--dur) var(--ease-out)',
    opacity: disabled ? 0.6 : 1, padding: 0,
  };
  const knob = {
    position: 'absolute', top: 2, left: checked ? 22 : 2,
    width: 26, height: 26, borderRadius: 999, background: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
    transition: 'left var(--dur) var(--ease-emph)',
  };
  return (
    <label htmlFor={switchId} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-sans)', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <button
        id={switchId} role="switch" aria-checked={checked} type="button" disabled={disabled}
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={track} {...rest}
      >
        <span style={knob} />
      </button>
      {label && <span style={{ fontSize: 16, fontWeight: 400, color: 'var(--ink-800)' }}>{label}</span>}
    </label>
  );
}
