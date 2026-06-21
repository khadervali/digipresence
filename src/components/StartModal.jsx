import { useState } from 'react';
import { Button, Input } from '../designSystem';
import { IconCheck, IconX } from '../ds/icons';

export default function StartModal({ open, onClose }) {
  const [sent, setSent] = useState(false);

  if (!open) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.4)',
      backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
    }}>
      <style>{`
        @keyframes dp-fade{from{opacity:0}to{opacity:1}}
        @keyframes dp-rise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
      `}</style>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: 'min(460px, 100%)', background: 'var(--paper-bright)',
        borderRadius: 'var(--radius-2xl)', padding: 32, boxShadow: 'var(--shadow-lg)',
        animation: 'dp-rise 0.3s cubic-bezier(0.16,1,0.3,1)',
        position: 'relative',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16, background: 'none', border: 'none',
          cursor: 'pointer', color: 'var(--ink-500)', display: 'flex', padding: 4,
        }}>
          <IconX size={18} />
        </button>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--success-bg)',
              color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 18px' }}>
              <IconCheck size={28} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, margin: '0 0 8px' }}>
              You're in the queue.
            </h3>
            <p style={{ fontSize: 16, color: 'var(--ink-600)', margin: '0 0 24px' }}>
              We'll be in touch within two working days.
            </p>
            <Button fullWidth onClick={onClose}>Done</Button>
          </div>
        ) : (
          <>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26,
              letterSpacing: '-0.02em', margin: '0 0 6px' }}>Start a project</h3>
            <p style={{ fontSize: 15, color: 'var(--ink-600)', margin: '0 0 22px' }}>
              A few details and we'll send back a plan.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input label="Your name" placeholder="Asha Rao" />
              <Input label="Work email" placeholder="you@company.com" />
              <Input label="What do you need?" placeholder="Website + social management" />
              <Button fullWidth size="lg" onClick={() => setSent(true)}>Send request</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
