import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import NetflixRow from '../components/NetflixRow';
import Footer from '../components/Footer';
import { personalInfo } from '../data/profile';
import { skills, interviewTopics } from '../data/skills';
import { featuredProjects } from '../data/projects';

const HOW_I_THINK = [
  'Understand the problem',
  'Identify bottlenecks',
  'Design the data model',
  'Define service boundaries',
  'Think about concurrency',
  'Design for failure',
  'Implement',
  'Test',
  'Observe',
  'Optimize',
];

const PRINCIPLES = [
  'SOLID', 'Clean Architecture', 'Concurrency', 'Consistency',
  'Scalability', 'Observability', 'Fault Tolerance', 'Performance',
];

export default function Developer() {
  useEffect(() => { localStorage.setItem('selectedProfile', 'developer'); }, []);
  const [interviewMode, setInterviewMode] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [openTopic, setOpenTopic] = useState(null);

  return (
    <div id="top" className="page-enter">
      <Navbar profile="developer" />

      {/* ── HERO ── */}
      <section className="hero" style={{ background: '#080808', paddingTop: 80 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 60% 50%, rgba(22,163,74,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(0deg, #080808 0%, transparent 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700 }}>
          <div className="hero__eyebrow anim-fade-up">DEVELOPER MODE · LET'S TALK ARCHITECTURE</div>
          <h1 className="hero__name anim-fade-up anim-delay-1">
            System<br />
            <span style={{ color: 'var(--accent)', fontWeight: 900 }}>Architect</span>
          </h1>
          <div className="hero__title anim-fade-up anim-delay-2">
            Ashhar Raza · Backend Engineer
          </div>
          {/* Tech flow */}
          <div className="anim-fade-up anim-delay-3" style={{
            fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)',
            lineHeight: 2.2, marginBottom: 32,
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 8, padding: '16px 20px', maxWidth: 420,
          }}>
            <span style={{ color: '#f59e0b' }}>Java</span>{' → '}
            <span style={{ color: '#3b82f6' }}>Spring Boot</span>{' → '}
            <span style={{ color: '#10b981' }}>Kafka</span>{' → '}
            <span style={{ color: '#ef4444' }}>Redis</span>{' → '}
            <span style={{ color: '#8b5cf6' }}>PostgreSQL</span>
            <br />
            <span style={{ color: 'var(--muted2)' }}>{'                    ↓'}</span>
            <br />
            <span style={{ color: '#06b6d4' }}>{'    Microservices'}</span>
            <br />
            <span style={{ color: 'var(--muted2)' }}>{'                    ↓'}</span>
            <br />
            <span style={{ color: '#ec4899' }}>{'    AI Agents'}</span>
          </div>
          <div className="hero__actions anim-fade-up anim-delay-4">
            <button
              className={`btn ${interviewMode ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setInterviewMode(!interviewMode)}
              style={{ fontSize: 13 }}
            >
              👨‍💻 {interviewMode ? 'Exit Interview Mode' : 'Interview Mode'}
            </button>
            <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: 13 }}>
              500+ LeetCode →
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        {/* ── INTERVIEW MODE ── */}
        {interviewMode && (
          <section id="interview" style={{ paddingTop: 60, paddingBottom: 20 }}>
            <div className="netflix-row__title">INTERVIEW MODE <span>ASK ME ABOUT</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {interviewTopics.map((cat) => (
                <div key={cat.category} className="interview-mode">
                  <div
                    className="interview-topic"
                    onClick={() => setOpenCategory(openCategory === cat.category ? null : cat.category)}
                  >
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 18 }}>{cat.icon}</span>
                      <span className="interview-topic__name" style={{ fontSize: 15, fontWeight: 700 }}>{cat.category}</span>
                    </div>
                    <span style={{ color: 'var(--muted2)', fontSize: 12 }}>{openCategory === cat.category ? '▲' : '▼'}</span>
                  </div>
                  {openCategory === cat.category && cat.topics.map((topic) => (
                    <div key={topic.name}>
                      <div
                        className="interview-topic"
                        style={{ paddingLeft: 42 }}
                        onClick={() => setOpenTopic(openTopic === topic.name ? null : topic.name)}
                      >
                        <span className="interview-topic__name">{topic.name}</span>
                        <span style={{ color: 'var(--muted2)', fontSize: 12 }}>{openTopic === topic.name ? '▲' : '▼'}</span>
                      </div>
                      {openTopic === topic.name && (
                        <div className="interview-topic__desc">{topic.desc}</div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── ARCHITECTURE EPISODES ── */}
        <section id="architecture" style={{ paddingTop: 60 }}>
          <NetflixRow title="ARCHITECTURE EPISODES" projects={featuredProjects} badge="DEEP DIVE" />
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" style={{ padding: '40px 0' }}>
          <div className="netflix-row__title">TECHNICAL DEPTH</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12, marginBottom: 32 }}>
            {Object.values(skills).map(({ label, items }) => (
              <div key={label} className="card" style={{ padding: '18px 20px' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: 2, marginBottom: 12, borderLeft: '2px solid var(--accent)', paddingLeft: 8 }}>
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

          {/* Scrolling skills marquee */}
          <div style={{ marginBottom: 40 }}>
            <div className="marquee-wrap">
              <div className="marquee-track">
                {[...Object.values(skills).flatMap(g => g.items), ...Object.values(skills).flatMap(g => g.items)].map((s, i) => (
                  <span key={i} className="skill-chip">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW I THINK ── */}
        <section style={{ padding: '20px 0 40px' }}>
          <div className="netflix-row__title">HOW I THINK</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            <div className="card" style={{ padding: '24px' }}>
              {HOW_I_THINK.map((step, i) => (
                <div key={step} className="think-step">
                  <span className="think-step__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="think-step__label">{step}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="netflix-row__title" style={{ marginBottom: 16 }}>ENGINEERING PRINCIPLES</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {PRINCIPLES.map((p) => (
                  <div key={p} className="card" style={{ padding: '12px 18px', fontSize: 13, fontWeight: 600, color: 'var(--text2)' }}>
                    {p}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 32 }}>
                <div className="netflix-row__title" style={{ marginBottom: 16 }}>DSA</div>
                <div className="card" style={{ padding: '20px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>500+</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', marginTop: 8, letterSpacing: 2 }}>
                    DSA PROBLEMS SOLVED
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--muted2)', marginTop: 10, lineHeight: 1.6 }}>
                    Arrays, Trees, Graphs, DP, Sliding Window,<br />Two Pointers, Binary Search, Heap
                  </p>
                  <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer"
                    className="btn btn-primary" style={{ marginTop: 16, fontSize: 12 }}>
                    View LeetCode →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer profile="developer" />
    </div>
  );
}
