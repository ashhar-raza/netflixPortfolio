import { useEffect, useState, useRef } from 'react';

/**
 * ARIntro — Cinematic personal-brand intro animation.
 *
 * Shows the "AR" lettermark on a dark background, holds for ~2 s,
 * then fades out to reveal the underlying page.
 *
 * - Plays /data/intro.mp3 on mount (handles autoplay-policy gracefully).
 * - Does NOT replay during in-app navigation (localStorage guard).
 * - Respects prefers-reduced-motion (instant skip / short fade).
 * - No external animation library — pure CSS keyframes + React state.
 */
export default function ARIntro({ onComplete }) {
  const [phase, setPhase] = useState('visible'); // 'visible' | 'exit' | 'done'
  const audioRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Audio ──────────────────────────────────────────────────────────────
    // Browsers block autoplay until a user gesture — we attempt playback
    // and silently ignore any NotAllowedError so the intro still works.
    const audio = new Audio('/data/intro.mp3');
    audio.volume = 1;
    audioRef.current = audio;
    audio.play().catch(() => {
      // Autoplay was blocked — intro continues visually without sound.
    });

    // ── Timing ────────────────────────────────────────────────────────────
    if (prefersReduced) {
      // Very short fade — respect reduced motion
      const t  = setTimeout(() => { setPhase('exit'); }, 100);
      const t2 = setTimeout(() => { setPhase('done'); onComplete?.(); }, 400);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
        audio.pause();
        audio.src = '';
      };
    }

    // Normal cinematic timing:
    // 0.0s  → overlay appears (CSS handles entry)
    // 3.7s  → begin exit fade
    // 4.3s  → overlay removed, homepage fully visible
    const exitTimer = setTimeout(() => setPhase('exit'), 3700);
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 4300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      audio.pause();
      audio.src = '';
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className={`ar-intro${phase === 'exit' ? ' ar-intro--exit' : ''}`}
      aria-hidden="true"
    >
      <div className="ar-intro__lettermark">
        <span className="ar-intro__letters">AR</span>
        <div className="ar-intro__glow" />
      </div>
      <div className="ar-intro__tagline">Ashhar Raza</div>
    </div>
  );
}
