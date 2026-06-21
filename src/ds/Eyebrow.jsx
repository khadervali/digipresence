import React from 'react';

/**
 * Eyebrow / kicker that sits above a heading — small, accent-colored, semibold.
 * Apple-style: a quiet category cue, not a loud label.
 */
export function Eyebrow({ color = 'var(--accent-600)', children, style = {}, ...rest }) {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 0,
      lineHeight: 1.2,
      color,
      ...style,
    }} {...rest}>
      {children}
    </span>
  );
}
