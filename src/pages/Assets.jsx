import { useState, useCallback } from 'react';

// ─── SVG Definitions ─────────────────────────────────────────────────────────

const SVG = {
  bizCardFront: `<svg width="1050" height="600" viewBox="0 0 1050 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg0" x1="0" y1="0" x2="1050" y2="600" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0d1224"/><stop offset="100%" stop-color="#07080e"/>
    </linearGradient>
    <linearGradient id="br0" x1="0" y1="0" x2="1050" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4facfe"/><stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>
  <rect width="1050" height="600" fill="url(#bg0)" rx="18"/>
  <circle cx="920" cy="-30" r="260" fill="none" stroke="#4facfe" stroke-width="70" opacity="0.07"/>
  <circle cx="1010" cy="545" r="190" fill="none" stroke="#a855f7" stroke-width="55" opacity="0.07"/>
  <rect x="0" y="0" width="1050" height="5" fill="url(#br0)" rx="2"/>
  <g transform="translate(64 42)">
    <circle cx="22" cy="32" r="6" fill="#4facfe"></circle>
    <path d="M31 21.3 A14 14 0 0 1 31 42.7" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
    <path d="M36.8 14.4 A23 23 0 0 1 36.8 49.6" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
  </g>
  <g opacity="0.14" fill="#4facfe">
    <circle cx="700" cy="210" r="2.5"/><circle cx="730" cy="210" r="2.5"/><circle cx="760" cy="210" r="2.5"/><circle cx="790" cy="210" r="2.5"/><circle cx="820" cy="210" r="2.5"/>
    <circle cx="700" cy="240" r="2.5"/><circle cx="730" cy="240" r="2.5"/><circle cx="760" cy="240" r="2.5"/><circle cx="790" cy="240" r="2.5"/><circle cx="820" cy="240" r="2.5"/>
    <circle cx="700" cy="270" r="2.5"/><circle cx="730" cy="270" r="2.5"/><circle cx="760" cy="270" r="2.5"/><circle cx="790" cy="270" r="2.5"/><circle cx="820" cy="270" r="2.5"/>
    <circle cx="700" cy="300" r="2.5"/><circle cx="730" cy="300" r="2.5"/><circle cx="760" cy="300" r="2.5"/><circle cx="790" cy="300" r="2.5"/><circle cx="820" cy="300" r="2.5"/>
    <circle cx="700" cy="330" r="2.5"/><circle cx="730" cy="330" r="2.5"/><circle cx="760" cy="330" r="2.5"/><circle cx="790" cy="330" r="2.5"/><circle cx="820" cy="330" r="2.5"/>
  </g>
  <text x="64" y="384" font-family="Arial,sans-serif" font-weight="700" font-size="48" fill="#eef0ff">Your Name</text>
  <text x="64" y="428" font-family="Arial,sans-serif" font-weight="400" font-size="22" fill="#4facfe" letter-spacing="0.5">Growth Strategist</text>
  <line x1="64" y1="452" x2="986" y2="452" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
  <text x="64" y="490" font-family="Arial,sans-serif" font-size="17" fill="#8892cc">hello@digiprezence.com</text>
  <text x="64" y="518" font-family="Arial,sans-serif" font-size="17" fill="#8892cc">+91 90000 00000</text>
  <text x="64" y="546" font-family="Arial,sans-serif" font-size="17" fill="#8892cc">digiprezence.com</text>
</svg>`,

  bizCardBack: `<svg width="1050" height="600" viewBox="0 0 1050 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg1" x1="0" y1="0" x2="1050" y2="600" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0d1b40"/><stop offset="100%" stop-color="#07080e"/>
    </linearGradient>
    <linearGradient id="br1" x1="0" y1="0" x2="1050" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4facfe"/><stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4facfe" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1050" height="600" fill="url(#bg1)" rx="18"/>
  <ellipse cx="525" cy="300" rx="380" ry="280" fill="url(#glow1)"/>
  <circle cx="200" cy="160" r="220" fill="none" stroke="#4facfe" stroke-width="60" opacity="0.06"/>
  <circle cx="860" cy="460" r="200" fill="none" stroke="#a855f7" stroke-width="55" opacity="0.06"/>
  <rect x="0" y="0" width="1050" height="5" fill="url(#br1)" rx="2"/>
  <rect x="0" y="595" width="1050" height="5" fill="url(#br1)" rx="2"/>
  <g transform="translate(64 42)">
    <circle cx="22" cy="32" r="6" fill="#4facfe"></circle>
    <path d="M31 21.3 A14 14 0 0 1 31 42.7" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
    <path d="M36.8 14.4 A23 23 0 0 1 36.8 49.6" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
  </g>
  <text x="525" y="248" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="58" fill="#eef0ff">Your brand,</text>
  <text x="525" y="316" text-anchor="middle" font-family="Arial,sans-serif" font-weight="300" font-size="58" fill="rgba(238,240,255,0.75)">impossible to ignore.</text>
  <rect x="412" y="346" width="226" height="2" fill="url(#br1)" rx="1"/>
  <text x="525" y="540" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" fill="rgba(136,146,204,0.9)" letter-spacing="3">WWW.DIGIPREZENCE.COM</text>
</svg>`,

  avatar: `<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg2" cx="40%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#111628"/><stop offset="100%" stop-color="#07080e"/>
    </radialGradient>
    <linearGradient id="br2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4facfe"/><stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4facfe" stop-opacity="0.22"/><stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="800" fill="url(#bg2)"/>
  <circle cx="400" cy="400" r="360" fill="url(#glow2)"/>
  <circle cx="120" cy="140" r="180" fill="none" stroke="#4facfe" stroke-width="50" opacity="0.08"/>
  <circle cx="690" cy="660" r="160" fill="none" stroke="#a855f7" stroke-width="45" opacity="0.08"/>
  <circle cx="400" cy="400" r="310" fill="none" stroke="url(#br2)" stroke-width="3.5" opacity="0.6"/>
  <g transform="translate(240 230) scale(5)">
    <circle cx="22" cy="32" r="6" fill="#4facfe"></circle>
    <path d="M31 21.3 A14 14 0 0 1 31 42.7" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
    <path d="M36.8 14.4 A23 23 0 0 1 36.8 49.6" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
  </g>
</svg>`,

  linkedinBanner: `<svg width="1584" height="396" viewBox="0 0 1584 396" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg3" x1="0" y1="0" x2="1584" y2="396" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0b0f22"/><stop offset="100%" stop-color="#07080e"/>
    </linearGradient>
    <linearGradient id="br3" x1="0" y1="0" x2="1584" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4facfe"/><stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <radialGradient id="glow3" cx="78%" cy="40%" r="35%">
      <stop offset="0%" stop-color="#4facfe" stop-opacity="0.2"/><stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1584" height="396" fill="url(#bg3)"/>
  <rect fill="url(#glow3)" width="1584" height="396"/>
  <circle cx="1280" cy="80" r="280" fill="none" stroke="#4facfe" stroke-width="70" opacity="0.07"/>
  <circle cx="1450" cy="340" r="200" fill="none" stroke="#a855f7" stroke-width="55" opacity="0.07"/>
  <rect x="0" y="0" width="1584" height="4" fill="url(#br3)"/>
  <rect x="0" y="392" width="1584" height="4" fill="url(#br3)"/>
  <g opacity="0.12" fill="#4facfe">
    <circle cx="960" cy="120" r="2.5"/><circle cx="990" cy="120" r="2.5"/><circle cx="1020" cy="120" r="2.5"/><circle cx="1050" cy="120" r="2.5"/>
    <circle cx="960" cy="150" r="2.5"/><circle cx="990" cy="150" r="2.5"/><circle cx="1020" cy="150" r="2.5"/><circle cx="1050" cy="150" r="2.5"/>
    <circle cx="960" cy="180" r="2.5"/><circle cx="990" cy="180" r="2.5"/><circle cx="1020" cy="180" r="2.5"/><circle cx="1050" cy="180" r="2.5"/>
    <circle cx="960" cy="210" r="2.5"/><circle cx="990" cy="210" r="2.5"/><circle cx="1020" cy="210" r="2.5"/><circle cx="1050" cy="210" r="2.5"/>
  </g>
  <g transform="translate(72 46) scale(0.9)">
    <circle cx="22" cy="32" r="6" fill="#4facfe"></circle>
    <path d="M31 21.3 A14 14 0 0 1 31 42.7" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
    <path d="M36.8 14.4 A23 23 0 0 1 36.8 49.6" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
  </g>
  <text x="72" y="190" font-family="Arial,sans-serif" font-weight="700" font-size="64" fill="#eef0ff">Your brand,</text>
  <text x="72" y="264" font-family="Arial,sans-serif" font-weight="300" font-size="64" fill="rgba(238,240,255,0.7)">impossible to ignore.</text>
  <text x="72" y="336" font-family="Arial,sans-serif" font-weight="400" font-size="20" fill="#8892cc" letter-spacing="0.5">Websites · Social · Strategy · Paid Ads</text>
</svg>`,

  igPost: `<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg4" cx="30%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#0e1530"/><stop offset="100%" stop-color="#07080e"/>
    </radialGradient>
    <linearGradient id="br4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4facfe"/><stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <radialGradient id="glow4" cx="70%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#4facfe" stop-opacity="0.22"/><stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#bg4)"/>
  <rect width="1080" height="1080" fill="url(#glow4)"/>
  <circle cx="840" cy="160" r="360" fill="none" stroke="#4facfe" stroke-width="90" opacity="0.07"/>
  <circle cx="200" cy="900" r="300" fill="none" stroke="#a855f7" stroke-width="75" opacity="0.07"/>
  <rect x="0" y="0" width="1080" height="6" fill="url(#br4)"/>
  <rect x="0" y="1074" width="1080" height="6" fill="url(#br4)"/>
  <g transform="translate(64 82) scale(1.2)">
    <circle cx="22" cy="32" r="6" fill="#4facfe"></circle>
    <path d="M31 21.3 A14 14 0 0 1 31 42.7" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
    <path d="M36.8 14.4 A23 23 0 0 1 36.8 49.6" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
  </g>
  <text x="64" y="440" font-family="Arial,sans-serif" font-weight="700" font-size="88" fill="#eef0ff">Your</text>
  <text x="64" y="540" font-family="Arial,sans-serif" font-weight="700" font-size="88" fill="#eef0ff">brand,</text>
  <text x="64" y="640" font-family="Arial,sans-serif" font-weight="300" font-size="88" fill="rgba(238,240,255,0.7)">impossible</text>
  <text x="64" y="740" font-family="Arial,sans-serif" font-weight="300" font-size="88" fill="rgba(238,240,255,0.7)">to ignore.</text>
  <rect x="64" y="796" width="140" height="3" fill="url(#br4)" rx="1.5"/>
  <text x="64" y="870" font-family="Arial,sans-serif" font-weight="400" font-size="26" fill="#8892cc">Websites · Social · Strategy</text>
  <rect x="64" y="958" width="320" height="56" fill="url(#br4)" rx="28"/>
  <text x="226" y="993" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="22" fill="#fff">Get started today →</text>
  <text x="64" y="1044" font-family="Arial,sans-serif" font-size="20" fill="rgba(136,146,204,0.7)">digiprezence.com</text>
</svg>`,

  igPromoPost: `<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg5" x1="0" y1="0" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0d1b3e"/><stop offset="50%" stop-color="#1a0d2e"/><stop offset="100%" stop-color="#07080e"/>
    </linearGradient>
    <linearGradient id="br5" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4facfe"/><stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <radialGradient id="glow5" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4facfe" stop-opacity="0.16"/><stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#bg5)"/>
  <ellipse cx="540" cy="540" rx="480" ry="480" fill="url(#glow5)"/>
  <circle cx="200" cy="200" r="320" fill="none" stroke="#4facfe" stroke-width="80" opacity="0.08"/>
  <circle cx="880" cy="880" r="280" fill="none" stroke="#a855f7" stroke-width="70" opacity="0.08"/>
  <rect x="0" y="0" width="6" height="1080" fill="url(#br5)"/>
  <rect x="1074" y="0" width="6" height="1080" fill="url(#br5)"/>
  <g transform="translate(450 220) scale(2.8)">
    <circle cx="22" cy="32" r="6" fill="#4facfe"></circle>
    <path d="M31 21.3 A14 14 0 0 1 31 42.7" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
    <path d="M36.8 14.4 A23 23 0 0 1 36.8 49.6" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
  </g>
  <rect x="390" y="346" width="300" height="2" fill="url(#br5)" rx="1"/>
  <text x="540" y="500" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="118" fill="#eef0ff">3.2×</text>
  <text x="540" y="576" text-anchor="middle" font-family="Arial,sans-serif" font-weight="400" font-size="34" fill="#4facfe">average visibility lift</text>
  <rect x="390" y="620" width="300" height="2" fill="url(#br5)" rx="1"/>
  <text x="540" y="720" text-anchor="middle" font-family="Arial,sans-serif" font-weight="400" font-size="30" fill="rgba(238,240,255,0.7)">We turn small businesses into</text>
  <text x="540" y="762" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="30" fill="#eef0ff">brands impossible to ignore.</text>
  <rect x="320" y="850" width="440" height="60" fill="url(#br5)" rx="30"/>
  <text x="540" y="889" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="24" fill="#fff">Start your growth journey →</text>
  <text x="540" y="994" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" fill="rgba(136,146,204,0.7)">digiprezence.com</text>
</svg>`,

  igStory: `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg6" x1="0" y1="0" x2="1080" y2="1920" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0b1025"/><stop offset="50%" stop-color="#140c28"/><stop offset="100%" stop-color="#07080e"/>
    </linearGradient>
    <linearGradient id="br6" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4facfe"/><stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <radialGradient id="glow6" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#4facfe" stop-opacity="0.18"/><stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1080" height="1920" fill="url(#bg6)"/>
  <rect width="1080" height="1920" fill="url(#glow6)"/>
  <circle cx="140" cy="400" r="380" fill="none" stroke="#4facfe" stroke-width="90" opacity="0.07"/>
  <circle cx="960" cy="520" r="320" fill="none" stroke="#a855f7" stroke-width="80" opacity="0.07"/>
  <circle cx="540" cy="1600" r="360" fill="none" stroke="#4facfe" stroke-width="80" opacity="0.06"/>
  <rect x="0" y="0" width="1080" height="6" fill="url(#br6)"/>
  <g transform="translate(80 92) scale(1.3)">
    <circle cx="22" cy="32" r="6" fill="#4facfe"></circle>
    <path d="M31 21.3 A14 14 0 0 1 31 42.7" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
    <path d="M36.8 14.4 A23 23 0 0 1 36.8 49.6" fill="none" stroke="#eef0ff" stroke-width="5" stroke-linecap="round"></path>
  </g>
  <text x="80" y="580" font-family="Arial,sans-serif" font-weight="700" font-size="120" fill="#eef0ff">Your</text>
  <text x="80" y="710" font-family="Arial,sans-serif" font-weight="700" font-size="120" fill="#eef0ff">brand,</text>
  <text x="80" y="840" font-family="Arial,sans-serif" font-weight="300" font-size="100" fill="rgba(238,240,255,0.75)">impossible</text>
  <text x="80" y="960" font-family="Arial,sans-serif" font-weight="300" font-size="100" fill="rgba(238,240,255,0.75)">to ignore.</text>
  <rect x="80" y="1020" width="160" height="3" fill="url(#br6)" rx="1.5"/>
  <text x="80" y="1120" font-family="Arial,sans-serif" font-weight="400" font-size="36" fill="#8892cc">Websites  ·  Social  ·  Strategy</text>
  <text x="80" y="1170" font-family="Arial,sans-serif" font-weight="400" font-size="36" fill="#8892cc">Paid Ads  ·  Consultancy</text>
  <rect x="80" y="1580" width="920" height="100" fill="url(#br6)" rx="50"/>
  <text x="540" y="1641" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="36" fill="#fff">Start a project → digiprezence.com</text>
  <text x="540" y="1820" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" fill="rgba(136,146,204,0.5)" letter-spacing="3">SWIPE UP TO BEGIN</text>
</svg>`,
};

// ─── Asset Manifest ───────────────────────────────────────────────────────────

const ASSETS = [
  {
    id: 'biz-card-front',
    name: 'Business Card — Front',
    category: 'Business',
    dimensions: '3.5 × 2 in  ·  1050 × 600 px',
    description: 'Print-ready front face. Edit name, title, and contact details in the SVG.',
    fileName: 'digiprezence-bizcard-front.svg',
    svg: SVG.bizCardFront,
    aspect: 1050 / 600,
  },
  {
    id: 'biz-card-back',
    name: 'Business Card — Back',
    category: 'Business',
    dimensions: '3.5 × 2 in  ·  1050 × 600 px',
    description: 'Premium gradient back face with brand tagline.',
    fileName: 'digiprezence-bizcard-back.svg',
    svg: SVG.bizCardBack,
    aspect: 1050 / 600,
  },
  {
    id: 'avatar',
    name: 'Social Profile Picture',
    category: 'Social Media',
    dimensions: '800 × 800 px',
    description: 'Circle-safe avatar for any social platform.',
    fileName: 'digiprezence-avatar.svg',
    svg: SVG.avatar,
    aspect: 1,
  },
  {
    id: 'linkedin-banner',
    name: 'LinkedIn Cover Banner',
    category: 'Social Media',
    dimensions: '1584 × 396 px',
    description: 'LinkedIn profile and page cover banner.',
    fileName: 'digiprezence-linkedin-banner.svg',
    svg: SVG.linkedinBanner,
    aspect: 1584 / 396,
  },
  {
    id: 'ig-post',
    name: 'Instagram Brand Post',
    category: 'Social Media',
    dimensions: '1080 × 1080 px',
    description: 'Square post template with CTA for feed posting.',
    fileName: 'digiprezence-ig-post.svg',
    svg: SVG.igPost,
    aspect: 1,
  },
  {
    id: 'ig-promo',
    name: 'Instagram Promo Post',
    category: 'Social Media',
    dimensions: '1080 × 1080 px',
    description: 'Stats-led promotional post highlighting results.',
    fileName: 'digiprezence-ig-promo.svg',
    svg: SVG.igPromoPost,
    aspect: 1,
  },
  {
    id: 'ig-story',
    name: 'Instagram Story',
    category: 'Social Media',
    dimensions: '1080 × 1920 px',
    description: 'Full-screen story template with swipe-up CTA.',
    fileName: 'digiprezence-ig-story.svg',
    svg: SVG.igStory,
    aspect: 1080 / 1920,
  },
];

const CATEGORIES = ['All', 'Business', 'Social Media'];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function downloadSVG(asset) {
  const blob = new Blob([asset.svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = asset.fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function svgDataUrl(svgString) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
}

// ─── Asset Card ───────────────────────────────────────────────────────────────

function AssetCard({ asset }) {
  const [downloaded, setDownloaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleDownload = useCallback(() => {
    downloadSVG(asset);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2200);
  }, [asset]);

  // Preview box height derived from aspect ratio, capped
  const previewH = Math.min(240, Math.round(280 / asset.aspect));

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--paper-bright)',
        border: `1px solid ${hovered ? 'rgba(79,172,254,0.36)' : 'var(--border-color)'}`,
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 220ms ease, box-shadow 220ms ease, transform 220ms ease',
        boxShadow: hovered ? '0 12px 40px rgba(3,10,30,0.28), 0 0 0 1px rgba(79,172,254,0.18)' : '0 4px 18px rgba(3,10,30,0.14)',
        transform: hovered ? 'translateY(-3px)' : 'none',
      }}
    >
      {/* Preview window */}
      <div style={{
        background: 'repeating-conic-gradient(rgba(255,255,255,0.04) 0% 25%, transparent 0% 50%) 0 0 / 16px 16px',
        padding: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: previewH + 36,
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden',
      }}>
        <img
          src={svgDataUrl(asset.svg)}
          alt={asset.name}
          style={{
            width: '100%',
            height: previewH,
            objectFit: 'contain',
            borderRadius: 8,
            display: 'block',
            filter: 'drop-shadow(0 4px 18px rgba(3,8,30,0.55))',
          }}
        />
      </div>

      {/* Info block */}
      <div style={{ padding: '18px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
          <h3 style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: '-0.01em',
            color: 'var(--ink-900)',
            lineHeight: 1.3,
          }}>
            {asset.name}
          </h3>
          <span style={{
            flexShrink: 0,
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--accent-600)',
            background: 'var(--accent-100)',
            borderRadius: 999,
            padding: '3px 8px',
            letterSpacing: '0.02em',
          }}>
            SVG
          </span>
        </div>

        <p style={{ margin: 0, fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.03em' }}>
          {asset.dimensions}
        </p>
        <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55, flex: 1 }}>
          {asset.description}
        </p>

        <button
          onClick={handleDownload}
          style={{
            marginTop: 14,
            width: '100%',
            height: 42,
            borderRadius: 'var(--radius-pill)',
            border: 'none',
            background: downloaded
              ? 'linear-gradient(135deg,#22c55e,#16a34a)'
              : 'linear-gradient(135deg,#4facfe 0%,#a855f7 100%)',
            color: '#fff',
            fontFamily: 'var(--font-display)',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 300ms ease, transform 120ms ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7,
          }}
        >
          {downloaded ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>
              Downloaded!
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v13M8 12l4 4 4-4"/><path d="M5 20h14"/></svg>
              Download SVG
            </>
          )}
        </button>
      </div>
    </article>
  );
}

// ─── Download All Button ──────────────────────────────────────────────────────

function DownloadAllButton({ assets }) {
  const [active, setActive] = useState(false);
  const handle = () => {
    setActive(true);
    assets.forEach((a, i) => setTimeout(() => downloadSVG(a), i * 180));
    setTimeout(() => setActive(false), assets.length * 180 + 1000);
  };
  return (
    <button onClick={handle} style={{
      height: 44,
      padding: '0 22px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(79,172,254,0.4)',
      background: active ? 'rgba(79,172,254,0.14)' : 'rgba(79,172,254,0.08)',
      color: 'var(--blue-400)',
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      transition: 'background 180ms ease',
      whiteSpace: 'nowrap',
    }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v13M8 12l4 4 4-4"/><path d="M5 20h14"/></svg>
      {active ? 'Downloading…' : `Download all (${assets.length})`}
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AssetsPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? ASSETS : ASSETS.filter((a) => a.category === active);

  return (
    <main style={{ maxWidth: 1080, margin: '0 auto', padding: '74px 22px 120px' }}>

      {/* Hero */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-2xl)',
        border: '1px solid var(--border-color)',
        padding: '36px 32px 32px',
        background: 'radial-gradient(130% 140% at 4% 0%, #1e3a8a 0%, #1e1b4b 50%, #0f172a 100%)',
        boxShadow: '0 20px 60px rgba(3,10,30,0.35)',
        marginBottom: 36,
      }}>
        <div style={{ position: 'absolute', right: -30, top: -30, width: 180, height: 180, borderRadius: '50%', background: 'rgba(79,172,254,0.14)' }} />
        <div style={{ position: 'absolute', right: 80, bottom: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(168,85,247,0.10)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 999, border: '1px solid rgba(255,255,255,0.25)', padding: '5px 14px', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>
            Brand Assets
          </div>
          <h1 style={{ margin: 0, color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(34px,4.8vw,54px)', letterSpacing: '-0.03em', lineHeight: 1.06, maxWidth: 780 }}>
            Marketing materials,<br />ready to use.
          </h1>
          <p style={{ margin: '14px 0 0', fontSize: 17, color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, maxWidth: 640 }}>
            Vector SVG assets for your brand — business cards, social profiles, banners, and posts.
            Download, open in any editor, and customise with your details.
          </p>
          <div style={{ marginTop: 22, padding: '14px 16px', background: 'rgba(255,255,255,0.07)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.12)', display: 'inline-flex', gap: 10, alignItems: 'flex-start', maxWidth: 520 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4facfe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
              All files are <strong style={{ color: '#fff' }}>SVG (vector)</strong> — open in Figma, Illustrator, Canva, or any browser. Edit text and colours before printing or posting.
            </span>
          </div>
        </div>
      </section>

      {/* Filter + controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14, marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                height: 36,
                padding: '0 16px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                background: active === cat ? 'var(--text-primary)' : 'var(--ink-100)',
                color: active === cat ? 'var(--bg)' : 'var(--ink-700)',
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background 180ms ease, color 180ms ease',
              }}
            >
              {cat}
              <span style={{ marginLeft: 6, fontSize: 12, opacity: 0.65 }}>
                {cat === 'All' ? ASSETS.length : ASSETS.filter((a) => a.category === cat).length}
              </span>
            </button>
          ))}
        </div>
        <DownloadAllButton assets={filtered} />
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 18,
      }}>
        {filtered.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>

      {/* Usage tips */}
      <section style={{ marginTop: 48, background: 'var(--paper-bright)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', padding: '24px 26px' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '-0.02em', marginBottom: 18 }}>How to use these assets</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
          {[
            { icon: '🎨', title: 'Edit in Figma or Illustrator', body: 'Open the SVG file directly. Change name, phone, email, or colours to match your brand.' },
            { icon: '🖨️', title: 'Print business cards', body: 'Export at 300 dpi from Illustrator. Use the 1050 × 600 px file for standard 3.5 × 2 in cards.' },
            { icon: '📱', title: 'Upload to social platforms', body: 'LinkedIn banner: 1584 × 396 px. Instagram: 1080 × 1080 px posts, 1080 × 1920 px stories.' },
            { icon: '🖼️', title: 'Use in Canva', body: 'Upload the SVG as an image element in Canva, or use it as a background for a new design.' },
          ].map((tip) => (
            <div key={tip.title} style={{ display: 'flex', gap: 12 }}>
              <span style={{ fontSize: 24, flexShrink: 0, lineHeight: 1.2 }}>{tip.icon}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink-900)', marginBottom: 4 }}>{tip.title}</div>
                <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{tip.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
