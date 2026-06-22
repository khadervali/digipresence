import { useEffect, useState } from 'react';
import { Button, Input } from '../designSystem';
import { IconCheck, IconX } from '../ds/icons';

export default function StartModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [whatsAppLink, setWhatsAppLink] = useState('');
  const [form, setForm] = useState({ name: '', email: '', need: '' });
  const [errors, setErrors] = useState({ name: '', email: '', need: '' });

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const validate = () => {
    const next = { name: '', email: '', need: '' };
    if (!form.name.trim()) {
      next.name = 'Please enter your name.';
    }
    const email = form.email.trim();
    if (!email) {
      next.email = 'Please enter your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.need.trim()) {
      next.need = 'Please tell us what you need.';
    }
    setErrors(next);
    return !next.name && !next.email && !next.need;
  };

  const buildWhatsAppFallback = () => {
    const number = '919000000000';
    const text = [
      'Hi DigiPresence, I want to start a project.',
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Need: ${form.need.trim()}`,
    ].join('\n');
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) {
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          need: form.need.trim(),
          source: 'start-modal',
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data?.error || 'Failed to send request.');
      }

      setWhatsAppLink(data.whatsapp_url || buildWhatsAppFallback());
      setSent(true);
    } catch {
      setWhatsAppLink(buildWhatsAppFallback());
      setSubmitError('Could not send automatically from this host. Use WhatsApp below, or try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (open) {
      setSent(false);
      setSubmitting(false);
      setSubmitError('');
      setWhatsAppLink('');
      setForm({ name: '', email: '', need: '' });
      setErrors({ name: '', email: '', need: '' });
    }
  }, [open]);

  if (!open) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
      animation: 'dp-fade 0.25s ease',
    }}>
      <style>{`
        @keyframes dp-fade{from{opacity:0}to{opacity:1}}
        @keyframes dp-rise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
      `}</style>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: 'min(460px, 100%)', background: 'var(--paper-bright)',
        borderRadius: 'var(--radius-2xl)', padding: 32, boxShadow: 'var(--shadow-lg)',
        animation: 'dp-rise 0.3s cubic-bezier(0.16,1,0.3,1)',
        position: 'relative', border: '1px solid var(--border-color)',
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {whatsAppLink && (
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--ink-800)',
                    fontSize: 14,
                    fontWeight: 600,
                    padding: '10px 12px',
                  }}
                >
                  Send on WhatsApp too
                </a>
              )}
            </div>
            <Button fullWidth onClick={onClose}>Done</Button>
          </div>
        ) : (
          <>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26,
              letterSpacing: '-0.02em', margin: '0 0 6px' }}>Start a project</h3>
            <p style={{ fontSize: 15, color: 'var(--ink-600)', margin: '0 0 22px' }}>
              A few details and we'll send back a plan.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input
                label="Your name"
                placeholder="Asha Rao"
                value={form.name}
                onChange={(e) => setField('name', e.target.value)}
                error={errors.name}
                disabled={submitting}
              />
              <Input
                label="Work email"
                placeholder="you@company.com"
                type="email"
                value={form.email}
                onChange={(e) => setField('email', e.target.value)}
                error={errors.email}
                disabled={submitting}
              />
              <Input
                label="What do you need?"
                placeholder="Website + social management"
                value={form.need}
                onChange={(e) => setField('need', e.target.value)}
                error={errors.need}
                disabled={submitting}
              />
              {submitError && (
                <div style={{ color: 'var(--danger)', fontSize: 13, marginTop: -6 }}>{submitError}</div>
              )}
              {submitError && whatsAppLink && (
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--ink-800)',
                    fontSize: 14,
                    fontWeight: 600,
                    padding: '10px 12px',
                  }}
                >
                  Continue via WhatsApp
                </a>
              )}
              <Button fullWidth size="lg" type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send request'}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
