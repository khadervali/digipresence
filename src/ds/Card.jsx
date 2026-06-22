import React from 'react';

/**
 * DigiPresence Card — v2 dark-theme surface container.
 * default = dark surface + subtle border, glow on interactive hover.
 */
export function Card({ variant = 'default', as = 'div', interactive = false, children, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);

  const variants = {
    default: {
      bg: 'var(--surface-card)',
      fg: 'var(--text-primary)',
      border: '1px solid var(--border-color)',
      shadow: 'var(--shadow-sm)',
      hoverShadow: 'var(--shadow-md), var(--glow-sm)',
    },
    panel: {
      bg: 'var(--surface-0)',
      fg: 'var(--text-primary)',
      border: 'none',
      shadow: 'none',
      hoverShadow: 'var(--shadow-sm)',
    },
    flat: {
      bg: 'var(--surface-card)',
      fg: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)',
      shadow: 'none',
      hoverShadow: 'var(--glow-sm)',
    },
    gradient: {
      bg: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
      fg: 'var(--text-primary)',
      border: '1px solid rgba(79,172,254,0.18)',
      shadow: 'none',
      hoverShadow: 'var(--glow-brand)',
    },
    inverse: {
      bg: 'var(--ink-50)',
      fg: 'var(--ink-900)',
      border: 'none',
      shadow: 'none',
      hoverShadow: 'var(--shadow-md)',
    },
  };
  const v = variants[variant] || variants.default;
  const Tag = as;

  return (
    <Tag
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: v.bg,
        color: v.fg,
        border: v.border,
        borderRadius: 'var(--radius-xl)',
        boxShadow: interactive && hover ? v.hoverShadow : v.shadow,
        padding: 'var(--space-6)',
        transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'box-shadow var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
