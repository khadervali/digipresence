import React, { useState } from 'react';

/**
 * Text input — rounded, hairline border, soft blue focus ring.
 */
export function Input({
  label, hint, error, iconLeft = null, id,
  type = 'text', disabled = false, style = {}, containerStyle = {}, ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || `dp-input-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : (focus ? 'var(--accent-500)' : 'var(--ink-200)');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontFamily: 'var(--font-sans)', ...containerStyle }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-700)' }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 9,
        height: 48, padding: '0 16px',
        background: disabled ? 'var(--ink-50)' : 'var(--paper-bright)',
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        {iconLeft && <span style={{ display: 'inline-flex', color: 'var(--ink-400)' }}>{iconLeft}</span>}
        <input
          id={inputId} type={type} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--ink-900)',
            minWidth: 0, ...style,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 13, color: error ? 'var(--danger)' : 'var(--text-muted)' }}>{error || hint}</span>
      )}
    </div>
  );
}
