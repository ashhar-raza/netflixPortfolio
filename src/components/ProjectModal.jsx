import { useState, useEffect, useCallback } from 'react';

export default function ProjectModal({ project, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop anim-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="modal-box anim-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="project-modal">
          {/* Header */}
          <div style={{ marginBottom: 24, paddingRight: 40 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 2, marginBottom: 8 }}>
              {project.episode}
            </div>
            <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>
              {project.title}
            </h2>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
              {project.genre?.map((g) => (
                <span key={g} className="tag">{g}</span>
              ))}
            </div>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{project.description}</p>
          </div>

          {/* Tech stack */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)', letterSpacing: 2, marginBottom: 12 }}>
              TECH STACK
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.technologies?.map((t) => (
                <span key={t} className="skill-chip">{t}</span>
              ))}
            </div>
          </div>

          {/* Problem */}
          {project.problem && (
            <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '16px 20px', marginBottom: 20 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 2, marginBottom: 8 }}>THE PROBLEM</div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{project.problem}</p>
            </div>
          )}

          {/* Engineering Challenges */}
          {project.engineeringChallenges && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)', letterSpacing: 2, marginBottom: 12 }}>
                ENGINEERING CHALLENGES
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {project.engineeringChallenges.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 12px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 6 }}>
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 12, flexShrink: 0 }}>⚡</span>
                    <span style={{ fontSize: 13, color: 'var(--muted)' }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)', letterSpacing: 2, marginBottom: 12 }}>
                ARCHITECTURE
              </div>
              <div className="arch-diagram">
                {project.architecture.map((step, i) => (
                  <div key={i}>
                    <div className="arch-step">
                      <span style={{ color: 'var(--accent)', marginRight: 8 }}>{step.label}</span>
                      <span style={{ color: 'var(--muted2)', fontSize: 11 }}>{step.tech}</span>
                    </div>
                    {i < project.architecture.length - 1 && (
                      <div className="arch-arrow">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights?.length > 0 && (
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)', letterSpacing: 2, marginBottom: 12 }}>
                KEY HIGHLIGHTS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 2 }}>✓</span>
                    <span style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GitHub link */}
          <div style={{ display: 'flex', gap: 12, borderTop: '1px solid var(--border)', paddingTop: 20 }}>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: 13 }}
              >
                View on GitHub →
              </a>
            ) : (
              <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted2)', padding: '10px 0' }}>
                Private / Enterprise project
              </span>
            )}
            <button className="btn btn-secondary" onClick={onClose} style={{ fontSize: 13 }}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
