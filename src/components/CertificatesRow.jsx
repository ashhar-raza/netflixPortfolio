import { useState } from 'react';
import { certifications } from '../data/certifications';
import CertificateModal from './CertificateModal';

export default function CertificatesRow({ title = 'CERTIFICATIONS' }) {
  const [selected, setSelected] = useState(null);

  const handleWheel = (event) => {
    if (event.deltaY === 0) return;

    event.preventDefault();
    event.currentTarget.scrollLeft += event.deltaY;
  };

  return (
    <div className="netflix-row">
      <div className="netflix-row__title">{title}</div>
      <div className="netflix-row__scroll" onWheel={handleWheel}>
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="cert-card"
            onClick={() => setSelected(cert)}
            tabIndex={0}
            role="button"
            aria-label={`View ${cert.title} certificate`}
            onKeyDown={(e) => e.key === 'Enter' && setSelected(cert)}
          >
            <img src={cert.image} alt={cert.title} loading="lazy" />
            <div className="cert-card__body">
              <div className="cert-card__title">{cert.title}</div>
              <div className="cert-card__issuer">{cert.issuer}</div>
            </div>
          </div>
        ))}
      </div>
      {selected && (
        <CertificateModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
