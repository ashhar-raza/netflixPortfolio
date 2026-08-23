import { useState, useEffect, useCallback } from 'react';

export default function CertificateModal({ cert, onClose }) {
  const [imgLoaded, setImgLoaded] = useState(false);

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

  if (!cert) return null;

  return (
    <div
      className="modal-backdrop anim-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${cert.title}`}
    >
      <div
        style={{ position: 'relative', maxWidth: 'min(860px, 95vw)' }}
        onClick={(e) => e.stopPropagation()}
        className="anim-scale-in"
      >
        {/* Close */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close certificate"
          style={{ position: 'fixed', top: 20, right: 20 }}
        >✕</button>

        {/* Certificate image */}
        {!imgLoaded && (
          <div style={{
            width: '100%', height: 400,
            background: 'var(--card)',
            borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
              Loading certificate...
            </span>
          </div>
        )}
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          style={{
            display: imgLoaded ? 'block' : 'none',
            width: '100%',
            borderRadius: 12,
            boxShadow: '0 40px 120px rgba(0,0,0,0.8)',
            objectFit: 'contain',
          }}
        />

        {/* Actions */}
        <div style={{
          display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap',
        }}>
          <a
            href={cert.image}
            download={`${cert.title}-Scaler-Certificate.png`}
            className="btn btn-primary"
            style={{ fontSize: 13 }}
          >
            ↓ Download Certificate
          </a>
          <button className="btn btn-secondary" onClick={onClose} style={{ fontSize: 13 }}>
            Close
          </button>
        </div>

        <p style={{
          textAlign: 'center', marginTop: 12,
          fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted2)',
        }}>
          {cert.title} · {cert.issuer}
        </p>
      </div>
    </div>
  );
}
