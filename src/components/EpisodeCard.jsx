import { useState } from 'react';
import ProjectModal from './ProjectModal';

const GENRE_ICONS = {
  'AI': '🤖', 'Voice AI': '🎙️', 'Backend': '⚙️', 'Microservices': '🔗',
  'Enterprise': '🏢', 'EdTech': '📚', 'Full Stack': '🖥️', 'Education': '🎓',
  'Social': '⭐', 'Distributed Systems': '🌐', default: '💡',
};

function getIcon(genre) {
  if (!genre?.length) return GENRE_ICONS.default;
  return GENRE_ICONS[genre[0]] || GENRE_ICONS.default;
}

export default function EpisodeCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="episode-card"
        onClick={() => setOpen(true)}
        tabIndex={0}
        role="button"
        aria-label={`Open ${project.title}`}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
      >
        <div className="episode-card__thumb">
          <span className="episode-card__ep">{project.episode}</span>
          <span className="episode-card__icon">{getIcon(project.genre)}</span>
          <div className="episode-card__play">
            <span style={{
              fontSize: 24,
              background: 'rgba(229,9,20,0.9)',
              borderRadius: '50%',
              width: 44, height: 44,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>▶</span>
          </div>
        </div>
        <div className="episode-card__body">
          <div className="episode-card__title">{project.title}</div>
          <div className="episode-card__sub">{project.subtitle}</div>
          <div className="episode-card__tags">
            {project.technologies?.slice(0, 3).map((t) => (
              <span key={t} style={{
                fontSize: 9,
                fontFamily: 'var(--mono)',
                color: 'var(--muted2)',
                background: 'var(--bg)',
                padding: '2px 6px',
                borderRadius: 3,
                border: '1px solid var(--border)',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}
