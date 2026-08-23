import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { personalInfo } from '../data/profile';

const NAV_CONFIGS = {
  recruiter: [
    { label: 'Home', href: '#top' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ],
  developer: [
    { label: 'Home', href: '#top' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Skills', href: '#skills' },
    { label: 'Episodes', href: '#episodes' },
    { label: 'Interview Mode', href: '#interview' },
  ],
  stalker: [
    { label: 'Home', href: '#top' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Links', href: '#links' },
  ],
  adventurer: [
    { label: 'Home', href: '#top' },
    { label: 'Journey', href: '#journey' },
  ],
};

export default function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const links = NAV_CONFIGS[profile] || [];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProfileSwitch = () => {
    localStorage.removeItem('selectedProfile');
    navigate('/');
  };

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--top'} ${menuOpen ? 'navbar--mobile-open' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <span className="navbar__logo" onClick={() => navigate('/')} tabIndex={0} role="button" aria-label="ASHHAR home">
        ASHHAR<span style={{ color: '#fff' }}></span>
      </span>

      {/* Desktop links */}
      <div className="navbar__links" style={{ display: 'flex' }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} className="navbar__link">{l.label}</a>
        ))}
        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          style={{ fontSize: 12, padding: '6px 14px' }}
        >
          Resume ↗
        </a>
        <button
          className="navbar__link"
          onClick={handleProfileSwitch}
          style={{ fontSize: 11, color: 'var(--muted2)', fontFamily: 'var(--mono)' }}
          title="Switch profile"
        >
          Switch
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="btn btn-ghost"
        style={{ display: 'none', padding: '6px 10px', fontSize: 18 }}
        id="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <style>{`
        @media (max-width: 768px) {
          .navbar__links { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute', top: 64, left: 0, right: 0,
            background: 'rgba(8,8,8,0.98)', borderBottom: '1px solid var(--border)',
            padding: '24px clamp(16px,4vw,60px)', display: 'flex',
            flexDirection: 'column', gap: 20, zIndex: 499,
          }}
        >
          {links.map((l) => (
            <a key={l.label} href={l.href} className="navbar__link" style={{ fontSize: 15 }}
              onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary" style={{ fontSize: 13, alignSelf: 'flex-start' }}>
            Resume ↗
          </a>
          <button onClick={handleProfileSwitch} className="navbar__link"
            style={{ alignSelf: 'flex-start', fontSize: 12, color: 'var(--muted2)' }}>
            Switch Profile
          </button>
        </div>
      )}
    </nav>
  );
}
