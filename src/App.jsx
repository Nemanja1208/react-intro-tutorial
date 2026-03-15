import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './slides.jsx';
import { Badge } from './components.jsx';
import { T, clay } from './theme.js';

export default function App() {
  const [cur, setCur] = useState(0);
  const [animDir, setAnimDir] = useState('right');
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((next, dir) => {
    if (next < 0 || next >= SLIDES.length) return;
    setAnimDir(dir ?? (next > cur ? 'right' : 'left'));
    setAnimKey(k => k + 1);
    setCur(next);
  }, [cur]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goTo(cur + 1, 'right'); }
      if (e.key === 'ArrowLeft')                   { e.preventDefault(); goTo(cur - 1, 'left'); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [cur, goTo]);

  const slide = SLIDES[cur];
  const { Component, isTitle, badge, bc, title } = slide;
  const progress = Math.round((cur / (SLIDES.length - 1)) * 100);

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100vh',
      background: T.bgGrad,
      overflow: 'hidden',
    }}>
      {/* Progress bar */}
      <div style={{
        height: 6,
        background: 'rgba(255,255,255,0.5)',
        borderRadius: '0 0 3px 3px',
        boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.05)',
        overflow: 'hidden',
      }}>
        <div className="gradient-anim" style={{
          height: '100%',
          background: `linear-gradient(90deg, ${T.bl}, ${T.pu}, ${T.pi}, ${T.bl})`,
          backgroundSize: '200% 200%',
          width: `${progress}%`,
          transition: 'width .4s cubic-bezier(0.22, 1, 0.36, 1)',
          borderRadius: 3,
          boxShadow: `0 0 12px ${T.bl}40`,
        }} />
      </div>

      {/* Slide header */}
      {!isTitle && (
        <div style={{
          padding: '10px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          flexShrink: 0,
        }}>
          <Badge text={badge} color={bc} />
          <span style={{ color: T.dim, fontSize: 13 }}>—</span>
          <span style={{ color: T.mut, fontSize: 13.5, fontWeight: 500 }}>{title}</span>
          <span style={{
            marginLeft: 'auto',
            color: T.dim,
            fontSize: 12,
            fontFamily: "'Fira Code', monospace",
            background: 'rgba(255,255,255,0.5)',
            padding: '3px 10px',
            borderRadius: 12,
            boxShadow: clay.sm,
          }}>{cur}/{SLIDES.length - 1}</span>
        </div>
      )}

      {/* Slide content */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <div key={animKey} className={`anim-${animDir}`} style={{ padding: isTitle ? 0 : '16px 28px' }}>
          {!isTitle && (
            <div style={{ marginBottom: 16 }}>
              <h1 style={{
                fontSize: 26,
                fontWeight: 900,
                color: T.txt,
                lineHeight: 1.2,
                letterSpacing: '-.02em',
              }}>{title}</h1>
            </div>
          )}
          <Component />
        </div>
      </div>

      {/* Navigation footer */}
      <div style={{
        padding: '12px 28px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexShrink: 0,
        background: 'rgba(255,255,255,0.3)',
        backdropFilter: 'blur(10px)',
      }}>
        <NavButton disabled={cur === 0} onClick={() => goTo(cur - 1, 'left')}>←</NavButton>
        <div style={{ flex: 1, display: 'flex', gap: 6, justifyContent: 'center', alignItems: 'center' }}>
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              title={s.title}
              onClick={() => goTo(i, i > cur ? 'right' : 'left')}
              style={{
                width: i === cur ? 28 : 10,
                height: 10,
                borderRadius: 8,
                background: i === cur
                  ? `linear-gradient(135deg, ${T.bl}, ${T.pu})`
                  : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                transition: 'all .3s cubic-bezier(0.22, 1, 0.36, 1)',
                flexShrink: 0,
                boxShadow: i === cur
                  ? `0 2px 8px ${T.bl}40, inset 1px 1px 2px rgba(255,255,255,0.3)`
                  : clay.sm,
              }}
            />
          ))}
        </div>
        <NavButton disabled={cur === SLIDES.length - 1} onClick={() => goTo(cur + 1, 'right')}>→</NavButton>
      </div>
    </div>
  );
}

function NavButton({ disabled, onClick, children }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="clay-hover"
      style={{
        background: disabled ? 'rgba(255,255,255,0.3)' : '#fff',
        border: 'none',
        color: disabled ? T.dim : T.bl,
        width: 42,
        height: 42,
        borderRadius: 14,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 700,
        opacity: disabled ? 0.4 : 1,
        transition: 'all .2s ease',
        fontFamily: 'inherit',
        boxShadow: disabled ? 'none' : clay.md,
      }}
    >{children}</button>
  );
}
