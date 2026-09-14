import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StatsGrid from '../components/StatsGrid';
import NetflixRow from '../components/NetflixRow';
import CertificatesRow from '../components/CertificatesRow';
import Footer from '../components/Footer';
import { personalInfo, stats } from '../data/profile';
import { experience } from '../data/experience';
import { education } from '../data/education';
import { skills } from '../data/skills';
import { featuredProjects, moreEpisodes } from '../data/projects';

const CORE_SKILLS = ['Java', 'Spring Boot', 'Microservices', 'Node.js', 'React', 'Kafka', 'AWS', 'AI/LLM', 'RAG'];

export default function Recruiter() {
  const navigate = useNavigate();
  useEffect(() => { localStorage.setItem('selectedProfile', 'recruiter'); }, []);

  const finvu = experience[0];  // Current company — always first
  const peol  = experience[1];  // Previous company
  const vtu   = education.find((e) => e.id === 'vtu');

  return (
    <div id="top" className="page-enter">
      <Navbar profile="recruiter" />

      {/* ── HERO ── */}
      <section className="hero" style={{ background: 'linear-gradient(160deg, #0d0d0d 0%, #080808 100%)', paddingTop: 80 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 30% 60%, rgba(37,99,235,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(0deg, #080808 0%, transparent 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
          <div className="hero__eyebrow anim-fade-up">SOFTWARE ENGINEER · PUNE, INDIA</div>
          <h1 className="hero__name anim-fade-up anim-delay-1">
            Ashhar<br />
            <span style={{ color: 'var(--muted)', fontWeight: 300 }}>Raza</span>
          </h1>
          <div className="hero__title anim-fade-up anim-delay-2">
            Software Engineer · Backend | Java | Spring Boot | Microservices
          </div>
          <p className="hero__desc anim-fade-up anim-delay-3">
            Building scalable backend &amp; full-stack systems with Java, Spring Boot, Node.js, and modern cloud infrastructure.
            3+ years shipping production applications across fintech and enterprise domains.
          </p>
          <div className="hero__stats anim-fade-up anim-delay-4">
            {stats.slice(0, 4).map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="hero__actions anim-fade-up anim-delay-5">
            <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              ▶ View Resume
            </a>
            <a href={personalInfo.resume} download className="btn btn-secondary">
              ↓ Download
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              LinkedIn →
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-ghost">
              Contact
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        {/* ── FEATURED PROJECTS ── */}
        <section id="projects" style={{ paddingTop: 60 }}>
          <NetflixRow title="FEATURED PROJECTS" projects={featuredProjects} badge="NEW" />
          <NetflixRow title="MORE EPISODES" projects={moreEpisodes} />
        </section>

        {/* ── CORE SKILLS ── */}
        <section id="skills" style={{ padding: '40px 0' }}>
          <div className="netflix-row__title">CORE SKILLS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
            {CORE_SKILLS.map((s) => (
              <span key={s} className="skill-chip" style={{ fontSize: 13, padding: '7px 16px' }}>{s}</span>
            ))}
          </div>

          {/* Full skill grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12, marginBottom: 40 }}>
            {Object.values(skills).slice(0, 5).map(({ label, items }) => (
              <div key={label} className="card" style={{ padding: '16px 18px' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 2, marginBottom: 12 }}>
                  {label.toUpperCase()}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {items.map((item) => (
                    <span key={item} className="skill-chip" style={{ fontSize: 11 }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" style={{ padding: '20px 0 40px' }}>
          <div className="netflix-row__title">EXPERIENCE</div>

          {/* Current Role — Finvu */}
          <div className="card" style={{ padding: '24px 28px', marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 2, marginBottom: 8 }}>
                  {finvu.start.toUpperCase()} — PRESENT
                </div>
                <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{finvu.role}</h3>
                <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
                  {finvu.company} · {finvu.location}
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignSelf: 'flex-start' }}>
                {finvu.technologies.slice(0, 6).map((t) => (
                  <span key={t} className="skill-chip" style={{ fontSize: 11 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ height: 1, background: 'var(--border)', margin: '16px 0' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 8 }}>
              {finvu.achievements.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 12px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 6 }}>
                  <span style={{ color: 'var(--green)', flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Role — PEOL */}
          <div className="card" style={{ padding: '24px 28px', marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)', letterSpacing: 2, marginBottom: 8 }}>
                  {peol.start.toUpperCase()} — {peol.end.toUpperCase()}
                </div>
                <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{peol.role}</h3>
                <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
                  {peol.company} · {peol.location}
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignSelf: 'flex-start' }}>
                {peol.technologies.slice(0, 6).map((t) => (
                  <span key={t} className="skill-chip" style={{ fontSize: 11 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ height: 1, background: 'var(--border)', margin: '16px 0' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 8 }}>
              {peol.achievements.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 12px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 6 }}>
                  <span style={{ color: 'var(--muted2)', flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" style={{ padding: '20px 0 40px' }}>
          <div className="netflix-row__title">EDUCATION</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            <div className="card" style={{ padding: '20px 24px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)', letterSpacing: 2, marginBottom: 10 }}>UNDERGRADUATE</div>
              <h4 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{vtu.degree}</h4>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 4, fontFamily: 'var(--mono)' }}>{vtu.institution}</p>
              <p style={{ fontSize: 12, color: 'var(--muted2)', fontFamily: 'var(--mono)', marginBottom: 16 }}>{vtu.start} – {vtu.end}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 32, fontWeight: 800, color: 'var(--accent)' }}>{vtu.cgpa.split(' ')[0]}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted2)' }}>CGPA</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                {vtu.highlights.map((h) => (
                  <span key={h} className="tag">{h}</span>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: '20px 24px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)', letterSpacing: 2, marginBottom: 10 }}>CONTINUING EDUCATION</div>
              <h4 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Scaler Software Development Program</h4>
              <p style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 16 }}>2025 – Ongoing</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['DSA', 'Java', 'SQL', 'LLD', 'HLD', 'System Design', 'Kafka', 'Docker', 'AWS'].map((s) => (
                  <span key={s} className="skill-chip" style={{ fontSize: 11 }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROOF OF WORK ── */}
        <section style={{ padding: '20px 0 40px' }}>
          <div className="netflix-row__title">PROOF OF WORK</div>
          <StatsGrid />
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section id="certifications" style={{ padding: '20px 0 40px', minWidth: 0, overflowX: 'auto' }}>
          <CertificatesRow title="SCALER CERTIFICATIONS" />
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: '20px 0 60px' }}>
          <div className="netflix-row__title">CONTACT</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10, maxWidth: 600 }}>
            {[
              { label: '📧 Email', href: `mailto:${personalInfo.email}`, val: personalInfo.email },
              { label: '🐙 GitHub', href: personalInfo.github, val: 'ashhar-raza' },
              { label: '💼 LinkedIn', href: personalInfo.linkedin, val: 'ashhar-raza' },
              { label: '🏆 LeetCode', href: personalInfo.leetcode, val: 'raza_ashhar' },
            ].map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="card"
                style={{ padding: '14px 18px', textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted2)' }}>{c.val}</div>
              </a>
            ))}
          </div>
        </section>
      </div>

      <Footer profile="recruiter" />
    </div>
  );
}
