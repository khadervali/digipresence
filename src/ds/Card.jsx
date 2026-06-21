import React from 'react';

/**
 * Surface container — flat & refined. default = hairline + soft shadow,
 * panel = grey fill (Apple section card), inverse = black.
 */
export function Card({ variant = 'default', as = 'div', interactive = false, children, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    default: { bg: 'var(--surface-card)', fg: 'var(--text-primary)', border: '1px solid var(--ink-100)', shadow: 'var(--shadow-sm)' },
    panel:   { bg: 'var(--ink-50)', fg: 'var(--text-primary)', border: 'none', shadow: 'none' },
    flat:    { bg: 'var(--surface-card)', fg: 'var(--text-primary)', border: '1px solid var(--ink-200)', shadow: 'none' },
    inverse: { bg: 'var(--black)', fg: 'var(--text-inverse)', border: 'none', shadow: 'none' },
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
        boxShadow: interactive && hover ? 'var(--shadow-md)' : v.shadow,
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
