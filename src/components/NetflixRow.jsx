import EpisodeCard from './EpisodeCard';

export default function NetflixRow({ title, projects, badge }) {
  if (!projects?.length) return null;
  return (
    <div className="netflix-row">
      <div className="netflix-row__title">
        {title}
        {badge && <span>{badge}</span>}
      </div>
      <div className="netflix-row__scroll">
        {projects.map((p) => (
          <EpisodeCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
