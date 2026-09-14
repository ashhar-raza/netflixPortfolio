import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { personalInfo } from '../data/profile';

const PROFILES = [
  {
    id: 'recruiter',
    name: 'Recruiter',
    emoji: '🧑‍💼',
    color: '#2563eb',
    desc: 'Fast. Professional. Career-focused.',
  },
  {
    id: 'developer',
    name: 'Developer',
    emoji: '💻',
    color: '#16a34a',
    desc: 'Architecture. Systems. Depth.',
  },
  {
    id: 'stalker',
    name: 'Stalker',
    emoji: '🕵️',
    color: '#d97706',
    desc: 'Everything. Seriously, everything.',
  },
  {
    id: 'adventurer',
    name: 'Adventurer',
    emoji: '🧭',
    color: '#7c3aed',
    desc: 'A cinematic career journey.',
  },
];

export default function ProfileSelection() {
  const navigate = useNavigate();
  const [returning, setReturning] = useState(null);
  const [hovered, setHovered] = useState(null);

  // useEffect(() => {
  //   // const saved = localStorage.getItem('selectedProfile');
  //   // if (saved) setReturning(saved);
  // }, []);

  const handleSelect = (profileId) => {
    localStorage.setItem('selectedProfile', profileId);
    navigate(`/${profileId}`);
  };

  return (
    <div className="profile-selection-page" style={{ padding: '20px' }}>
      {/* Background ambient glow */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(229,9,20,0.06) 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1100, textAlign: 'center' }}>
        {/* Logo */}
        <div style={{ marginBottom: 8 }} className="anim-fade-down">
          <span style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 900, color: 'var(--accent)' }}>
            ASHHAR<span style={{ color: '#fff' }}></span>
          </span>
        </div>

        {/* Returning user banner */}
        {returning && (
          <div className="anim-fade-in" style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 8, padding: '14px 20px', marginBottom: 32,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)', letterSpacing: 2, marginBottom: 4 }}>
                WELCOME BACK
              </div>
              <div style={{ fontSize: 14, color: 'var(--text2)' }}>
                Continue as <span style={{ color: 'var(--text)', fontWeight: 700, textTransform: 'capitalize' }}>{returning}</span>?
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                className="btn btn-primary"
                style={{ fontSize: 12, padding: '8px 16px' }}
                onClick={() => handleSelect(returning)}
              >
                Continue
              </button>
              <button
                className="btn btn-ghost"
                style={{ fontSize: 12, padding: '8px 14px' }}
                onClick={() => { setReturning(null); localStorage.removeItem('selectedProfile'); }}
              >
                Change
              </button>
            </div>
          </div>
        )}

        {/* Who's Watching */}
        <div style={{ marginBottom: 40 }} className="anim-fade-up">
          <h1 style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 400, color: 'var(--muted)', letterSpacing: 1 }}>
            Who's watching?
          </h1>
        </div>

        {/* Profile Grid */}
        <div className="profile-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: 24,
          maxWidth: 1000,
          margin: '0 auto 48px',
        }}>
          {PROFILES.map((p, i) => (
            <div
              key={p.id}
              className={`profile-card anim-fade-up anim-delay-${i + 1}`}
              onClick={() => handleSelect(p.id)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              tabIndex={0}
              role="button"
              aria-label={`Select ${p.name} profile`}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(p.id)}
            >
              <div
                className="profile-card__avatar"
                style={{
                  background: hovered === p.id
                    ? `linear-gradient(135deg, ${p.color}22, var(--card))`
                    : 'var(--card)',
                  borderColor: hovered === p.id ? p.color : 'var(--border)',
                  transition: 'all 0.25s ease',
                }}
              >
                <span style={{ fontSize: 'clamp(36px, 6vw, 52px)' }}>{p.emoji}</span>
              </div>
              <div>
                <div className="profile-card__name" style={{ fontSize: 15, fontWeight: 700 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: 'var(--muted2)', fontFamily: 'var(--mono)', marginTop: 3 }}>
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="anim-fade-in anim-delay-5" style={{
          fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted2)',
          letterSpacing: 1.5,
        }}>
          PUNE, INDIA · {personalInfo.title}
        </p>
      </div>
    </div>
  );
}
