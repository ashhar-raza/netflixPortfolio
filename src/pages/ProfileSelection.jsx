import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { personalInfo } from '../data/profile';

const PROFILES = [
  {
    id: 'recruiter',
    name: 'Recruiter',
    image: '/data/images/recruiter.png',
    alt: 'Recruiter profile',
    color: '#2563eb',
    desc: 'Fast. Professional. Career-focused.',
  },
  {
    id: 'developer',
    name: 'Developer',
    image: '/data/images/developer.png',
    alt: 'Developer profile',
    color: '#16a34a',
    desc: 'Architecture. Systems. Depth.',
  },
  {
    id: 'stalker',
    name: 'Stalker',
    image: '/data/images/stalker.png',
    alt: 'Stalker profile',
    color: '#d97706',
    desc: 'Everything. Seriously, everything.',
  },
  {
    id: 'adventurer',
    name: 'Adventurer',
    image: '/data/images/adventurer.png',
    alt: 'Adventurer profile',
    color: '#7c3aed',
    desc: 'A cinematic career journey.',
  },
];

export default function ProfileSelection() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

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
            ASHHAR
          </span>
        </div>

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
                  overflow: 'hidden',
                  padding: 0,
                }}
              >
                <img
                  src={p.image}
                  alt={p.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: 'inherit',
                    transform: hovered === p.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.35s ease',
                  }}
                  draggable={false}
                />
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
