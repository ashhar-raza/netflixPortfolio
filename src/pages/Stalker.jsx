import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CertificatesRow from '../components/CertificatesRow';
import Footer from '../components/Footer';
import { personalInfo, stats } from '../data/profile';
import { projects } from '../data/projects';

const TIMELINE_EVENTS = [
  { year: '2019', label: 'Started CSE', detail: 'Visvesvaraya Technological University', type: 'education' },
  { year: '2023', label: 'Joined PEOL Technologies', detail: 'Software Engineer · October 2023 · Bengaluru', type: 'work' },
  { year: '2023', label: 'Graduated B.E.', detail: '8.0 CGPA · No backlogs · Distinction', type: 'milestone' },
  { year: '2024', label: 'Enterprise Applications', detail: '6+ production apps delivered', type: 'work' },
  { year: '2025', label: 'Started Scaler', detail: 'DSA, LLD, HLD, System Design, Kafka, AWS...', type: 'education' },
  { year: '2026', label: 'Joined Finvu', detail: 'Software Engineer · August 2026 · Pune, India · Fintech / AA', type: 'work' },
  { year: '2026', label: 'Account Aggregator APIs', detail: 'Production-grade AA ecosystem, RBAC, WebSocket APIs', type: 'skill' },
];

const TYPE_COLORS = {
  education: '#3b82f6', milestone: '#E50914', work: '#16a34a', skill: '#8b5cf6', next: '#f59e0b',
};

const STALKER_COPY = [
  "Looking at everything, huh? 👀",
  "Okay, we're going in deep.",
  "Full disclosure mode activated.",
  "You asked for it...",
];

export default function Stalker() {
  useEffect(() => { localStorage.setItem('selectedProfile', 'stalker'); }, []);
  const [revealed, setRevealed] = useState(false);
  const [copyIdx] = useState(() => Math.floor(Math.random() * STALKER_COPY.length));

  return (
    <div id="top" className="page-enter">
      <Navbar profile="stalker" />

      {/* ── HERO ── */}
      <section className="hero" style={{ paddingTop: 80, minHeight: '70vh' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 70% 50%, rgba(217,119,6,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(0deg, #080808 0%, transparent 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680 }}>
          <div className="hero__eyebrow anim-fade-up">STALKER MODE · YOU CHOSE THE DANGEROUS OPTION</div>
          <h1 className="hero__name anim-fade-up anim-delay-1" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>
            So... you really<br />
            <span style={{ color: 'var(--accent)' }}>want to know</span>
            <br />everything? 👀
          </h1>
          <p className="hero__desc anim-fade-up anim-delay-2" style={{ fontSize: 15, color: 'var(--muted)' }}>
            {STALKER_COPY[copyIdx]}
          </p>
          <div className="hero__actions anim-fade-up anim-delay-3">
            <a href="#timeline" className="btn btn-primary">Let's Go ↓</a>
            <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Fine. Here's the resume.
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        {/* ── TIMELINE ── */}
        <section id="timeline" style={{ paddingTop: 60, paddingBottom: 40 }}>
          <div className="netflix-row__title">ASHHAR'S TIMELINE</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
            {[...TIMELINE_EVENTS].sort((a, b) => Number(b.year) - Number(a.year)).map((ev, i) => (
              <div key={i} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                animation: `fadeUp 0.4s ease both`,
                animationDelay: `${i * 0.08}s`,
              }}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted2)',
                  width: 40, flexShrink: 0, paddingTop: 14, textAlign: 'right',
                }}>
                  {ev.year}
                </div>
                <div style={{ width: 1, background: 'var(--border)', flexShrink: 0, marginTop: 8, alignSelf: 'stretch' }} />
                <div className="card" style={{
                  flex: 1, padding: '12px 16px',
                  borderLeft: `2px solid ${TYPE_COLORS[ev.type] || 'var(--border)'}`,
                }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 3 }}>{ev.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{ev.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── THINGS YOU WANT TO KNOW ── */}
        <section style={{ padding: '20px 0 40px' }}>
          <div className="netflix-row__title">THINGS YOU MAY WANT TO KNOW</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10, maxWidth: 600 }}>
            {stats.map((s) => (
              <div key={s.label} className="card" style={{ padding: '16px 18px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', marginTop: 6, letterSpacing: 1 }}>{s.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section style={{ padding: '20px 0 40px' }}>
          <div className="netflix-row__title">THINGS I BUILT</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 600 }}>
            {projects.filter(p => p.id.startsWith('S01')).map((p, i) => (
              <a key={p.id} href="/developer"
                className="card"
                style={{ padding: '14px 18px', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', marginBottom: 3 }}>{p.episode}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{p.title}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{p.subtitle}</div>
                </div>
                <span style={{ color: 'var(--muted2)', fontSize: 18 }}>→</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section style={{ padding: '20px 0 40px' }}>
          <CertificatesRow title="CERTIFICATIONS (all 8 of them)" />
        </section>

        {/* ── PLACES TO FIND ME ── */}
        <section id="links" style={{ padding: '20px 0 40px' }}>
          <div className="netflix-row__title">PLACES YOU CAN FIND ME</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10, maxWidth: 540 }}>
            {[
              { label: '🐙 GitHub', href: personalInfo.github, sub: 'ashhar-raza' },
              { label: '💼 LinkedIn', href: personalInfo.linkedin, sub: 'ashhar-raza' },
              { label: '🏆 LeetCode', href: personalInfo.leetcode, sub: 'raza_ashhar' },
              { label: '📧 Email', href: `mailto:${personalInfo.email}`, sub: personalInfo.email },
            ].map((l) => (
              <a key={l.label} href={l.href} target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer" className="card"
                style={{ padding: '14px 18px', textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>{l.label}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted2)' }}>{l.sub}</div>
              </a>
            ))}
          </div>
        </section>

        {/* ── END ── */}
        <section style={{ padding: '20px 0 80px', maxWidth: 540 }}>
          <div className="card" style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🔚</div>
            <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>
              You have reached the end.
            </p>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', marginBottom: 24 }}>
              There is nothing else here.
              <br />Probably.
            </p>
            {!revealed ? (
              <button className="btn btn-secondary" onClick={() => setRevealed(true)} style={{ fontSize: 13 }}>
                Continue Anyway →
              </button>
            ) : (
              <div className="anim-fade-up">
                <p style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--accent)', marginBottom: 16 }}>
                  ...except my GitHub. 😏
                </p>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary" style={{ fontSize: 13 }}>
                  github.com/ashhar-raza →
                </a>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer profile="stalker" />
    </div>
  );
}
