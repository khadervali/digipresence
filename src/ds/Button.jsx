import React, { useState } from 'react';

/**
 * DigiPresence Button — v2 dark-theme particle brand.
 * Primary = blue→violet gradient pill. Secondary/outline for dark surfaces.
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
    sm: { height: 36, padding: '0 18px', fontSize: 14, gap: 6,  radius: 'var(--radius-pill)' },
    md: { height: 46, padding: '0 26px', fontSize: 16, gap: 8,  radius: 'var(--radius-pill)' },
    lg: { height: 56, padding: '0 34px', fontSize: 18, gap: 10, radius: 'var(--radius-pill)' },
  };
  const s = sizes[size] || sizes.md;

  const palette = {
    primary: {
      bg:      'linear-gradient(135deg, #4facfe 0%, #a855f7 100%)',
      bgHover: 'linear-gradient(135deg, #7ec2fe 0%, #c893ff 100%)',
      fg: '#ffffff', border: 'transparent',
      shadow: hover ? 'var(--glow-brand)' : 'none',
    },
    secondary: {
      bg:      hover ? 'rgba(255,255,255,0.11)' : 'rgba(255,255,255,0.07)',
      bgHover: 'rgba(255,255,255,0.11)',
      fg: 'var(--text-primary)', border: 'rgba(255,255,255,0.12)',
      shadow: 'none',
    },
    outline: {
      bg:      hover ? 'rgba(79,172,254,0.08)' : 'transparent',
      bgHover: 'rgba(79,172,254,0.08)',
      fg: 'var(--blue-400)', border: 'var(--blue-400)',
      shadow: hover ? 'var(--glow-sm)' : 'none',
    },
    inverse: {
      bg:      hover ? '#d4d8f5' : 'var(--ink-50)',
      bgHover: '#d4d8f5',
      fg: 'var(--canvas)', border: 'transparent',
      shadow: 'none',
    },
    text: {
      bg: 'transparent', bgHover: 'transparent',
      fg: hover ? 'var(--blue-300)' : 'var(--blue-400)',
      border: 'transparent', shadow: 'none',
    },
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
    fontFamily: 'var(--font-display)',
    fontSize: s.fontSize,
    fontWeight: 500,
    lineHeight: 1,
    color: disabled ? 'var(--ink-400)' : p.fg,
    background: disabled ? 'rgba(255,255,255,0.06)' : (hover ? p.bgHover : p.bg),
    border: p.border === 'transparent' ? 'none' : `1px solid ${p.border}`,
    borderRadius: isText ? 0 : s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transform: !disabled && active && !isText ? 'scale(0.97)' : 'scale(1)',
    textDecoration: isText && hover ? 'underline' : 'none',
    boxShadow: disabled ? 'none' : p.shadow,
    transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    letterSpacing: '0.01em',
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
