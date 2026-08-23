import { personalInfo } from '../data/profile';

export default function Footer({ profile }) {
  const profiles = ['recruiter', 'developer', 'stalker', 'adventurer'];
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '48px clamp(16px,4vw,60px) 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--accent)', marginBottom: 8 }}>
              ASHHAR<span style={{ color: '#fff' }}></span>
            </div>
            <p style={{ fontSize: 12, color: 'var(--muted2)', fontFamily: 'var(--mono)', maxWidth: 220, lineHeight: 1.6 }}>
              {personalInfo.location}
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)', letterSpacing: 2, marginBottom: 12 }}>CONNECT</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'GitHub', href: personalInfo.github },
                  { label: 'LinkedIn', href: personalInfo.linkedin },
                  { label: 'LeetCode', href: personalInfo.leetcode },
                  { label: `Email`, href: `mailto:${personalInfo.email}` },
                ].map((l) => (
                  <a key={l.label} href={l.href} target={l.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--text)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
                  >{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)', letterSpacing: 2, marginBottom: 12 }}>PROFILES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {profiles.map((p) => (
                  <a key={p} href={`/${p}`}
                    style={{
                      fontSize: 13, color: p === profile ? 'var(--text)' : 'var(--muted)',
                      textDecoration: 'none', transition: 'color 0.15s',
                      textTransform: 'capitalize',
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--text)'}
                    onMouseLeave={(e) => e.target.style.color = p === profile ? 'var(--text)' : 'var(--muted)'}
                  >{p}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: 20,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted2)' }}>
            © 2026 Ashhar Raza · All rights reserved
          </span>
          <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer"
            className="btn btn-ghost" style={{ fontSize: 12, padding: '6px 14px' }}>
            Resume ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
