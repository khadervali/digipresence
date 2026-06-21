/* DigiPresence icon set — Lucide-style strokes */
import React from 'react';

function Icon({ d, size = 22, stroke = 1.75, fill = 'none', children, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      {d ? <path d={d} /> : children}
    </svg>
  );
}

export const IconGlobe = (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></Icon>;
export const IconShare = (p) => <Icon {...p}><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.6M8.2 13.2l7.6 4.6"/></Icon>;
export const IconUsers = (p) => <Icon {...p}><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c0-3 2.6-5 5.5-5s5.5 2 5.5 5"/><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 14c2 .5 3.5 2.4 3.5 5"/></Icon>;
export const IconChevron = (p) => <Icon {...p} size={p.size||16}><path d="M9 6l6 6-6 6"/></Icon>;
export const IconCheck = (p) => <Icon {...p}><path d="M5 12.5l4.5 4.5L19 7"/></Icon>;
export const IconSparkle = (p) => <Icon {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></Icon>;
export const IconMenu = (p) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>;
export const IconX = (p) => <Icon {...p}><path d="M18 6L6 18M6 6l12 12"/></Icon>;
