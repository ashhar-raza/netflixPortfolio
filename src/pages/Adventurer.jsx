import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { personalInfo } from '../data/profile';
import { timeline } from '../data/timeline';

const TYPE_COLORS = {
  education: '#3b82f6',
  milestone: '#E50914',
  work: '#16a34a',
  skill: '#8b5cf6',
  project: '#f59e0b',
  next: '#ec4899',
};

const TYPE_ICONS = {
  education: '📚', milestone: '🏆', work: '💼', skill: '⚡', project: '🔧', next: '❓',
};

export default function Adventurer() {
  useEffect(() => { localStorage.setItem('selectedProfile', 'adventurer'); }, []);
  const [activeYear, setActiveYear] = useState(null);

  return (
    <div id="top" className="page-enter">
      <Navbar profile="adventurer" />

      {/* ── HERO ── */}
      <section className="hero" style={{ paddingTop: 80, minHeight: '80vh' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(0deg, #080808 0%, transparent 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
          <div className="hero__eyebrow anim-fade-up">THE JOURNEY · A CAREER DOCUMENTARY</div>
          <h1 className="hero__name anim-fade-up anim-delay-1">
            The Journey<br />
            <span style={{ color: '#8b5cf6', fontStyle: 'italic', fontWeight: 300 }}>of Ashhar Raza</span>
          </h1>
          <p className="hero__desc anim-fade-up anim-delay-2">
            From a first-year CS student in 2019 to building AI-powered distributed systems.
            Every year added a new chapter to this engineering story.
          </p>
          <div className="hero__actions anim-fade-up anim-delay-3">
            <a href="#journey" className="btn btn-primary">▶ Begin Journey</a>
            <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              View Resume ↗
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        {/* ── JOURNEY TIMELINE ── */}
        <section id="journey" style={{ paddingTop: 60, paddingBottom: 40 }}>
          <div className="netflix-row__title">THE JOURNEY</div>

          <div style={{ position: 'relative', paddingLeft: 0 }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: 60, top: 0, bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, var(--accent) 0%, #8b5cf6 60%, var(--border2) 100%)',
              borderRadius: 2,
            }} />

            {[...timeline].sort((a, b) => Number(b.year) - Number(a.year)).map((yearBlock, yi) => (
              <div key={yearBlock.year} style={{ display: 'flex', gap: 0, marginBottom: 40 }}>
                {/* Year label */}
                <div
                  style={{
                    width: 60, flexShrink: 0, paddingTop: 16,
                    fontFamily: 'var(--mono)',
                    fontSize: 'clamp(20px, 3vw, 32px)',
                    fontWeight: 700,
                    color: activeYear === yearBlock.year ? 'var(--accent)' : 'var(--border2)',
                    transition: 'color 0.2s',
                    cursor: 'pointer',
                    textAlign: 'right',
                    paddingRight: 12,
                  }}
                  onClick={() => setActiveYear(activeYear === yearBlock.year ? null : yearBlock.year)}
                >
                  {yearBlock.year}
                </div>

                {/* Connector dot */}
                <div style={{
                  width: 12, height: 12, borderRadius: '50%', flexShrink: 0,
                  background: yearBlock.year === '2026' ? 'var(--accent)' : 'var(--card2)',
                  border: `2px solid ${yearBlock.year === '2026' ? 'var(--accent)' : 'var(--border2)'}`,
                  marginTop: 20, marginLeft: -7,
                  boxShadow: yearBlock.year === '2026' ? '0 0 12px rgba(229,9,20,0.5)' : 'none',
                  zIndex: 1, position: 'relative',
                }} />

                {/* Events */}
                <div style={{ flex: 1, paddingLeft: 20, paddingTop: 8 }}>
                  {yearBlock.events.map((ev, ei) => (
                    <div
                      key={ei}
                      className="card"
                      style={{
                        marginBottom: 8,
                        padding: '12px 16px',
                        borderLeft: `3px solid ${TYPE_COLORS[ev.type] || 'var(--border)'}`,
                        opacity: ev.type === 'next' ? 0.7 : 1,
                        animation: `fadeUp 0.4s ease both`,
                        animationDelay: `${(yi * 0.1) + (ei * 0.05)}s`,
                      }}
                    >
                      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 16, flexShrink: 0 }}>{TYPE_ICONS[ev.type]}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 14, fontWeight: 600, color: ev.type === 'next' ? 'var(--muted)' : 'var(--text)', marginBottom: 3 }}>
                            {ev.label}
                          </div>
                          <div style={{ fontSize: 12, color: 'var(--muted2)', fontFamily: 'var(--mono)' }}>
                            {ev.detail}
                          </div>
                        </div>
                        {ev.type === 'milestone' && (
                          <span className="tag" style={{ flexShrink: 0, alignSelf: 'center' }}>MILESTONE</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── NEXT EPISODE ── */}
        <section style={{ padding: '20px 0 80px', maxWidth: 540 }}>
          <div className="next-episode-card">
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 3, marginBottom: 12 }}>
              NEXT EPISODE
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--muted)', marginBottom: 8 }}>Loading...</div>
            <p style={{ fontSize: 13, color: 'var(--muted2)', fontFamily: 'var(--mono)', lineHeight: 1.7 }}>
              The story isn't over. What's next is still being written.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: 12 }}>
                Follow on GitHub →
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: 12 }}>
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer profile="adventurer" />
    </div>
  );
}
