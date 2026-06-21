import React, { useState } from 'react';

/**
 * DigiPresence Button — refined pill control.
 * Primary = solid accent-blue pill. Subtle hover lighten, gentle press scale.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const sizes = {
    sm: { height: 36, padding: '0 16px', fontSize: 15, gap: 6, radius: 'var(--radius-pill)' },
    md: { height: 46, padding: '0 24px', fontSize: 17, gap: 8, radius: 'var(--radius-pill)' },
    lg: { height: 56, padding: '0 32px', fontSize: 19, gap: 9, radius: 'var(--radius-pill)' },
  };
  const s = sizes[size] || sizes.md;

  const palette = {
    primary:   { bg: 'var(--accent-500)', bgHover: 'var(--accent-450)', fg: '#fff', border: 'transparent' },
    secondary: { bg: 'var(--ink-100)', bgHover: 'var(--ink-200)', fg: 'var(--ink-900)', border: 'transparent' },
    outline:   { bg: 'transparent', bgHover: 'var(--ink-50)', fg: 'var(--ink-900)', border: 'var(--ink-200)' },
    inverse:   { bg: 'var(--white)', bgHover: '#f0f0f2', fg: 'var(--ink-900)', border: 'transparent' },
    text:      { bg: 'transparent', bgHover: 'transparent', fg: 'var(--accent-600)', border: 'transparent' },
  };
  const p = palette[variant] || palette.primary;
  const isText = variant === 'text';

  const btnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: isText ? 'auto' : s.height,
    padding: isText ? 0 : s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 500,
    lineHeight: 1,
    color: disabled ? 'var(--ink-400)' : p.fg,
    background: disabled ? 'var(--ink-100)' : (hover ? p.bgHover : p.bg),
    border: p.border === 'transparent' ? 'none' : `1px solid ${p.border}`,
    borderRadius: isText ? 0 : s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transform: !disabled && active && !isText ? 'scale(0.97)' : 'scale(1)',
    textDecoration: isText && hover ? 'underline' : 'none',
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    ...style,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={btnStyle}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
