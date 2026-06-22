import { useEffect, useMemo, useState } from 'react';
import { Button, Input } from '../designSystem';
import { pageContent } from './pageContent';

const longformBySlug = {
  'web-product-services': [
    {
      heading: 'Why Website Strategy Matters for Small Business SEO',
      paragraphs: [
        'Most small business websites fail to rank because pages are written as generic brochures instead of intent-matched landing assets. We structure each service page around what real buyers search for, how they compare options, and what proof they need before taking action. That improves both organic visibility and conversion quality.',
        'Our web and product delivery combines technical SEO foundations with conversion architecture. That means clear page hierarchy, faster loading templates, high-clarity CTAs, and content blocks designed for featured snippets and AI-generated answer summaries. The result is not just traffic growth, but lead-ready traffic.',
      ],
    },
    {
      heading: 'How We Build GEO-Ready Service Pages',
      paragraphs: [
        'Generative Engine Optimization (GEO) requires clean answers, authority signals, and clear context windows. We write page sections that answer direct user questions in concise language, then support those answers with examples, trust indicators, and semantic relevance across connected pages.',
        'For local and regional businesses, we map geo-intent phrases directly into page flows without keyword stuffing. This helps search engines and AI systems understand service relevance by location, business type, and user outcome, which increases discoverability for high-intent queries.',
      ],
    },
  ],
  'social-content-services': [
    {
      heading: 'Content That Supports Search, Social, and Sales Together',
      paragraphs: [
        'Social media visibility and SEO performance should not live in separate silos. We build one integrated content system where short-form social posts, website articles, and service-page updates reinforce the same positioning signals. That compounds authority and improves recall when buyers are ready to decide.',
        'Instead of publishing random trends, we prioritize topic clusters tied to demand and conversion. This gives your brand a repeatable way to appear in social discovery, traditional search results, and AI answer surfaces while keeping messaging consistent across channels.',
      ],
    },
    {
      heading: 'From Posting Volume to Business Impact',
      paragraphs: [
        'A high posting frequency does not guarantee qualified leads. We define performance by outcomes such as inquiry quality, repeat engagement from the right audience, and assisted conversions into website actions. That creates a measurable connection between content operations and business growth.',
        'Creative execution is paired with funnel logic: awareness content earns attention, authority content builds trust, and decision content drives conversion. This layered model improves both retention and lead flow compared to one-dimensional content calendars.',
      ],
    },
  ],
  'talent-consultancy-services': [
    {
      heading: 'Consulting Built for Execution, Not Just Strategy Slides',
      paragraphs: [
        'Many teams have high-level goals but no operational system to achieve them. Our consultancy translates growth targets into practical quarterly plans across SEO, content, website conversion, and paid channels. Each recommendation is tied to ownership, timeline, and expected impact.',
        'We focus on removing delivery bottlenecks first. That can include role clarity, process redesign, or channel prioritization based on real demand signals. The objective is faster decision-making and better use of budget, not complexity for its own sake.',
      ],
    },
    {
      heading: 'Hiring and Team Design for Sustainable Growth',
      paragraphs: [
        'Scaling digital performance requires the right team structure, not only more tools. We help businesses define critical roles, create hiring scorecards, and set quality standards so new hires can contribute quickly without rework loops.',
        'This approach improves consistency in output and reduces dependency on ad-hoc freelancers. Over time, teams gain a stronger internal capability to maintain SEO momentum, content quality, and campaign discipline.',
      ],
    },
  ],
  'paid-ads-services': [
    {
      heading: 'Paid Media Performance Starts Before the First Campaign',
      paragraphs: [
        'Paid ads fail when campaigns are launched without clear audience segmentation, message relevance, or landing page alignment. We start by mapping user intent and offer fit so each campaign objective is supported by the right creative and destination page.',
        'This reduces wasted spend and improves conversion quality. Rather than chasing vanity metrics, we optimize for cost per qualified lead, conversion depth, and downstream sales readiness.',
      ],
    },
    {
      heading: 'Google and Meta Optimization with Conversion Discipline',
      paragraphs: [
        'Our campaign management combines bid strategy, negative keyword governance, and ad-copy testing with structured review cycles. On Meta, we refine creative angles and audience cohorts to improve signal quality and lower lead acquisition cost over time.',
        'The biggest gains usually come from ad-plus-page optimization together. We continuously improve messaging continuity between ad click and landing experience so intent is not lost, which increases close-ready lead volume.',
      ],
    },
  ],
  work: [
    {
      heading: 'Case-Led Delivery Across Healthcare, Local, and SaaS Brands',
      paragraphs: [
        'Our portfolio strategy is built around measurable business outcomes, not cosmetic redesigns. For healthcare and local service businesses, we prioritize trust architecture, local discoverability, and inquiry friction reduction. For SaaS teams, we focus on clarity, activation pathways, and product value articulation.',
        'Each engagement blends design, performance, and messaging into one operating system. That is why work quality scales beyond launch and continues to improve lead generation, retention, and brand credibility.',
      ],
    },
  ],
  about: [
    {
      heading: 'Who We Are and How We Think About Growth',
      paragraphs: [
        'DigiPresence partners with ambitious small businesses that need premium-quality digital execution without agency bloat. Our model is simple: understand demand, improve visibility, and build conversion systems that turn attention into revenue.',
        'We combine strategic depth with direct implementation, so clients are never left with disconnected recommendations. Every project is structured around clarity, fast iteration, and measurable commercial impact.',
      ],
    },
  ],
  contact: [
    {
      heading: 'Start With a Focused Growth Conversation',
      paragraphs: [
        'The fastest way to improve results is to align scope with the right growth bottleneck. During the first conversation, we identify whether your biggest opportunity is search visibility, conversion performance, content consistency, or paid acquisition efficiency.',
        'From there, we propose an execution path with practical milestones and realistic timelines. This avoids over-scoping and helps teams prioritize the channels that can generate impact first.',
      ],
    },
  ],
  blog: [
    {
      heading: 'Practical Insights for High-Intent Digital Growth',
      paragraphs: [
        'Our blog content is built for operators, founders, and marketers who need actionable frameworks, not theory-heavy commentary. We focus on methods that improve discoverability, conversion, and channel efficiency in real business environments.',
        'Topics include SEO execution, GEO content structuring, landing-page optimization, and paid media discipline. Each article is designed to support both implementation and strategic decision-making.',
      ],
    },
  ],
  guides: [
    {
      heading: 'Step-by-Step Guides for SEO and GEO Execution',
      paragraphs: [
        'Our guides translate complex growth topics into implementation checklists that teams can execute with confidence. Instead of abstract advice, we provide practical sequences for content architecture, technical SEO hygiene, and funnel improvements.',
        'This format helps small businesses build repeatable internal systems while reducing dependency on guesswork. It also accelerates learning for in-house teams responsible for ongoing digital growth.',
      ],
    },
  ],
  pricing: [
    {
      heading: 'Transparent Pricing Linked to Scope and Outcomes',
      paragraphs: [
        'Pricing is structured around business objectives, not vague package language. We define deliverables, review cadence, and expected outputs before engagement begins so teams can evaluate investment against growth potential.',
        'Whether you need project-based delivery or ongoing optimization support, plans are designed to balance execution depth with budget clarity. This keeps commercial decisions straightforward and outcome-oriented.',
      ],
    },
  ],
  support: [
    {
      heading: 'Support That Protects Delivery Quality',
      paragraphs: [
        'Support quality directly affects campaign performance and project velocity. Our support process emphasizes response clarity, context-rich updates, and action-focused resolutions so teams can move quickly without confusion.',
        'We provide structured communication around implementation questions, reporting interpretation, and priority adjustments. This reduces friction and helps clients maintain operational momentum.',
      ],
    },
  ],
  privacy: [
    {
      heading: 'Data Handling With Practical Transparency',
      paragraphs: [
        'Our privacy standards are designed to collect only necessary information and use it responsibly for service delivery and communication. We avoid unnecessary data retention and protect submitted information through controlled handling practices.',
        'Users can request corrections, access details, or removal of submitted data according to applicable policy conditions. Transparency and accountability remain central to our privacy approach.',
      ],
    },
  ],
  terms: [
    {
      heading: 'Clear Terms That Reduce Project Risk',
      paragraphs: [
        'Strong terms and conditions create predictability for both client and delivery teams. We document scope boundaries, review cycles, and payment milestones to prevent ambiguity during execution.',
        'This helps projects stay aligned on responsibilities, timelines, and quality standards, while protecting long-term working relationships through clear expectations.',
      ],
    },
  ],
  cookies: [
    {
      heading: 'Cookie Use for Better Performance and Experience',
      paragraphs: [
        'Cookies support core functionality, user preferences, and analytics insights that help improve website performance. We aim for minimal, purpose-specific usage rather than excessive tracking.',
        'Visitors retain control through browser-level management options and can clear cookie data at any time. Policy clarity ensures users understand what is collected and why.',
      ],
    },
  ],
};

const faqBySlug = {
  'web-product-services': [
    { q: 'How long does a typical website project take?', a: 'Most small-business websites launch in 3 to 6 weeks depending on scope, content readiness, and approval cycles.' },
    { q: 'Do you include SEO during development?', a: 'Yes. Technical SEO, metadata structure, page hierarchy, and intent-based copy planning are integrated from the start.' },
  ],
  'social-content-services': [
    { q: 'Do you handle monthly content calendars?', a: 'Yes. We provide channel-specific content planning, creative direction, and publishing workflows on a recurring basis.' },
    { q: 'Can social content improve SEO?', a: 'Indirectly yes, through stronger authority signals, branded search behavior, and connected content architecture.' },
  ],
  'paid-ads-services': [
    { q: 'Which ad platforms do you manage?', a: 'We manage Google Ads and Meta Ads, including strategy, optimization, and conversion reporting.' },
    { q: 'How do you measure campaign quality?', a: 'We track conversion quality, CPL, CAC trends, and downstream sales relevance, not only click metrics.' },
  ],
  about: [
    { q: 'What type of businesses do you work with?', a: 'We primarily support ambitious small businesses and growth-stage brands in services, healthcare, and digital products.' },
    { q: 'What makes DigiPresence different?', a: 'We combine strategy and implementation so recommendations are directly translated into measurable execution.' },
  ],
  contact: [
    { q: 'What should I include in my inquiry?', a: 'Share your current channels, growth goals, expected timeline, and the main bottleneck you want solved first.' },
    { q: 'How quickly do you respond?', a: 'We typically respond within two working days with the next best action plan.' },
  ],
};

function ensureMetaTag(name) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  return tag;
}

function getTheme(slug) {
  const map = {
    about: { a: '#1f6feb', b: '#123571' },
    contact: { a: '#0f9d58', b: '#154a3a' },
    work: { a: '#7c3aed', b: '#2f1b59' },
    pricing: { a: '#ea580c', b: '#5b2a0a' },
  };
  return map[slug] || { a: '#2563eb', b: '#102b66' };
}

function LeadInlineForm({ variant }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', need: '', message: '' });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [waLink, setWaLink] = useState('');

  const title = variant === 'about' ? 'Tell us about your brand' : 'Send us your project brief';
  const subtitle = variant === 'about'
    ? 'Share your growth goal and we will suggest the right direction.'
    : 'Share requirements and timeline. We will reply within two working days.';

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const getFallbackWhatsApp = () => {
    const number = '919000000000';
    const text = [
      'Hi DigiPresence, I want to start a project.',
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || '-'}`,
      `Need: ${(form.need || form.message || form.company).trim()}`,
    ].join('\n');
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim()) {
      setError('Please enter your name and email.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    const needValue = variant === 'about'
      ? `${form.company.trim() || 'General inquiry'} | ${form.message.trim() || 'No extra details'}`
      : `${form.need.trim() || 'Project request'} | ${form.message.trim() || 'No extra details'}`;

    setSending(true);
    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          need: needValue,
          source: variant === 'about' ? 'about-page' : 'contact-page',
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data?.error || 'Unable to submit right now.');
      }

      setWaLink(data.whatsapp_url || getFallbackWhatsApp());
      setDone(true);
    } catch {
      setWaLink(getFallbackWhatsApp());
      setError('Automatic submission is unavailable on this host. Please continue via WhatsApp below.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section style={{ marginTop: 18, border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', background: 'var(--paper-bright)', padding: 20 }}>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.02em' }}>{title}</h2>
      <p style={{ margin: '8px 0 16px', color: 'var(--text-secondary)' }}>{subtitle}</p>

      {done ? (
        <div>
          <div style={{ fontSize: 16, color: 'var(--ink-800)', fontWeight: 600 }}>Thanks, your message is in our queue.</div>
          <p style={{ color: 'var(--text-secondary)', marginTop: 8 }}>We will get back to you within two working days.</p>
          {waLink && (
            <a href={waLink} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-600)', fontWeight: 600, textDecoration: 'none' }}>
              Send on WhatsApp as well
            </a>
          )}
        </div>
      ) : (
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <Input label="Name" placeholder="Your name" value={form.name} onChange={(e) => setField('name', e.target.value)} disabled={sending} />
            <Input label="Email" placeholder="you@company.com" type="email" value={form.email} onChange={(e) => setField('email', e.target.value)} disabled={sending} />
          </div>

          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <Input label="Phone (optional)" placeholder="+91..." value={form.phone} onChange={(e) => setField('phone', e.target.value)} disabled={sending} />
            {variant === 'about' ? (
              <Input label="Business (optional)" placeholder="Healthcare clinic" value={form.company} onChange={(e) => setField('company', e.target.value)} disabled={sending} />
            ) : (
              <Input label="Need" placeholder="Website + SEO + Ads" value={form.need} onChange={(e) => setField('need', e.target.value)} disabled={sending} />
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-700)' }}>Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setField('message', e.target.value)}
              placeholder={variant === 'about' ? 'Tell us where you want to take your brand in the next 6 months.' : 'Share your scope, timeline, and goals.'}
              rows={4}
              disabled={sending}
              style={{
                width: '100%',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                background: 'var(--paper-bright)',
                color: 'var(--ink-900)',
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                padding: '12px 14px',
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          {error && <div style={{ fontSize: 13, color: 'var(--danger)' }}>{error}</div>}
          {error && waLink && (
            <a href={waLink} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-600)', fontWeight: 600, textDecoration: 'none' }}>
              Continue via WhatsApp
            </a>
          )}

          <div>
            <Button type="submit" size="lg" disabled={sending}>{sending ? 'Sending...' : 'Submit request'}</Button>
          </div>
        </form>
      )}
    </section>
  );
}

export default function SeoPage({ slug }) {
  const content = pageContent[slug];
  const theme = useMemo(() => getTheme(slug), [slug]);
  const longform = useMemo(() => longformBySlug[slug] || [], [slug]);
  const faqs = useMemo(() => faqBySlug[slug] || [], [slug]);
  const keywordPills = useMemo(() => {
    if (!content?.keywords) {
      return [];
    }
    return content.keywords.split(',').map((k) => k.trim()).filter(Boolean).slice(0, 5);
  }, [content]);

  useEffect(() => {
    if (!content) {
      document.title = 'Page Not Found | DigiPresence';
      ensureMetaTag('description').setAttribute('content', 'The requested page was not found on DigiPresence.');
      ensureMetaTag('keywords').setAttribute('content', 'digi presence, page not found');
      return;
    }

    document.title = `${content.title} | DigiPresence`;
    ensureMetaTag('description').setAttribute('content', content.description);
    ensureMetaTag('keywords').setAttribute('content', content.keywords);
  }, [content]);

  useEffect(() => {
    const existing = document.getElementById('dp-page-schema');
    if (existing) {
      existing.remove();
    }

    if (!content) {
      return;
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: content.title,
      description: content.description,
      keywords: content.keywords,
      mainEntity: faqs.length
        ? {
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }
        : undefined,
    };

    const script = document.createElement('script');
    script.id = 'dp-page-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [content, faqs]);

  if (!content) {
    return (
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '88px 22px 96px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,56px)', margin: 0 }}>Page not found</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 18, marginTop: 16 }}>
          The page you are looking for does not exist. Please return to the home page.
        </p>
        <a href="/#" style={{ display: 'inline-block', marginTop: 16, color: 'var(--accent-600)' }}>Go to home</a>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 1040, margin: '0 auto', padding: '74px 22px 96px' }}>
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 'var(--radius-2xl)',
          border: '1px solid var(--border-color)',
          padding: '30px 28px',
          background: `radial-gradient(120% 130% at 8% 0%, ${theme.a} 0%, ${theme.b} 55%, #0f172a 100%)`,
          boxShadow: '0 20px 60px rgba(3,10,30,0.35)',
        }}
      >
        <div style={{ position: 'absolute', right: -26, top: -24, width: 170, height: 170, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
        <div style={{ position: 'absolute', right: 66, bottom: -36, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.09)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 999, border: '1px solid rgba(255,255,255,0.3)', padding: '5px 12px', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#fff', marginBottom: 14 }}>
            {content.eyebrow}
          </div>
          <h1 style={{ margin: 0, color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(38px,5vw,60px)', letterSpacing: '-0.03em', lineHeight: 1.04, maxWidth: 880 }}>
            {content.title}
          </h1>
          <p style={{ margin: '14px 0 0', fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.72, maxWidth: 760 }}>{content.intro}</p>

          <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {keywordPills.map((k) => (
              <span key={k} style={{ borderRadius: 999, background: 'rgba(255,255,255,0.14)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 10px', fontSize: 12 }}>
                {k}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
        {content.sections.map((section, idx) => (
          <section
            key={section.heading}
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--paper-bright)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-xl)',
              padding: '20px 20px 18px',
              boxShadow: '0 10px 30px rgba(3,10,30,0.06)',
            }}
          >
            <div style={{ position: 'absolute', right: -24, top: -24, width: 86, height: 86, borderRadius: '50%', background: idx % 2 === 0 ? 'rgba(37,99,235,0.13)' : 'rgba(14,116,144,0.13)' }} />
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: '-0.02em' }}>{section.heading}</h2>
            <ul style={{ margin: '12px 0 0', paddingLeft: 20, color: 'var(--ink-700)', fontSize: 15, lineHeight: 1.8 }}>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {longform.length > 0 && (
        <section style={{ marginTop: 16, display: 'grid', gap: 14 }}>
          {longform.map((block) => (
            <article key={block.heading} style={{ background: 'var(--paper-bright)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', padding: '20px 22px' }}>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.02em' }}>{block.heading}</h2>
              <div style={{ marginTop: 10, display: 'grid', gap: 10 }}>
                {block.paragraphs.map((p) => (
                  <p key={p} style={{ margin: 0, color: 'var(--ink-700)', fontSize: 16, lineHeight: 1.82 }}>
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>
      )}

      {faqs.length > 0 && (
        <section style={{ marginTop: 16, background: 'var(--paper-bright)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', padding: '18px 22px' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: '-0.02em' }}>Frequently asked questions</h2>
          <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
            {faqs.map((f) => (
              <article key={f.q} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '12px 14px' }}>
                <h3 style={{ margin: 0, fontSize: 16, color: 'var(--ink-900)' }}>{f.q}</h3>
                <p style={{ margin: '6px 0 0', color: 'var(--ink-600)', fontSize: 15, lineHeight: 1.7 }}>{f.a}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section style={{ marginTop: 16, background: 'var(--paper-bright)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', padding: '18px 22px' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 22 }}>SEO and GEO keyword intent</h2>
        <p style={{ margin: '10px 0 0', color: 'var(--text-secondary)' }}>{content.keywords}</p>
      </section>

      {(slug === 'about' || slug === 'contact') && <LeadInlineForm variant={slug} />}
    </main>
  );
}
