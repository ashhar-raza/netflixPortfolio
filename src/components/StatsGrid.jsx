import { stats } from '../data/profile';

export default function StatsGrid({ subset }) {
  const items = subset || stats;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
      gap: 12,
    }}>
      {items.map((s) => (
        <div key={s.label} className="stat-card">
          <div className="stat-card__value">{s.value}</div>
          <div className="stat-card__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
