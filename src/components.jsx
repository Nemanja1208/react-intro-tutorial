import React from 'react';
import { T, clay } from './theme.js';
import { highlight } from './highlighter.js';

// ─── Badge (Claymorphism pill) ──────────────────────────────────────────────
export function Badge({ text, color = T.bl }) {
  return (
    <span style={{
      display: 'inline-block',
      background: color + '18',
      border: `2px solid ${color}30`,
      color,
      padding: '4px 14px',
      borderRadius: 30,
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      boxShadow: `3px 3px 8px ${color}15, -2px -2px 6px rgba(255,255,255,0.8), inset 1px 1px 3px rgba(255,255,255,0.7)`,
    }}>{text}</span>
  );
}

// ─── Section Label (with animated bar) ──────────────────────────────────────
export function SectionLabel({ text, color = T.bl }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, marginTop: 8 }}>
      <div style={{
        width: 4, height: 18,
        background: `linear-gradient(180deg, ${color}, ${color}80)`,
        borderRadius: 4,
        boxShadow: `0 0 8px ${color}40`,
      }} />
      <span style={{ color, fontSize: 11, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>{text}</span>
    </div>
  );
}

// ─── Note (Claymorphism callout) ────────────────────────────────────────────
export function Note({ type, children }) {
  const cfg = {
    info:   { bg: T.blP, color: T.bl, ic: 'i',  border: T.bl },
    warn:   { bg: T.yeP, color: '#b8860b', ic: '!', border: T.ye },
    tip:    { bg: T.grP, color: T.gr, ic: '✓', border: T.gr },
    danger: { bg: T.reP, color: T.re, ic: '✗', border: T.re },
  }[type];
  return (
    <div style={{
      background: cfg.bg,
      borderRadius: 16,
      padding: '12px 16px',
      marginBottom: 10,
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      boxShadow: clay.sm,
      borderLeft: `4px solid ${cfg.border}`,
    }}>
      <span style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 24, height: 24, borderRadius: 12,
        background: cfg.border + '20', color: cfg.color,
        fontSize: 13, fontWeight: 800, flexShrink: 0,
        boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.5)`,
      }}>{cfg.ic}</span>
      <div style={{ color: T.txt, fontSize: 12.5, lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}

// ─── CodeBlock (Dark themed with clay frame) ────────────────────────────────
export function CodeBlock({ code, lang = 'js', filename = '', maxHeight = 280 }) {
  const html = highlight(code, lang);
  return (
    <div style={{
      borderRadius: 18,
      overflow: 'hidden',
      marginBottom: 10,
      boxShadow: clay.lg,
    }}>
      {filename && (
        <div style={{
          background: '#1a1a3a',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#ff5f57','#ffbd2e','#28c840'].map(c => (
              <div key={c} style={{
                width: 12, height: 12, borderRadius: '50%', background: c,
                boxShadow: `inset 1px 1px 2px rgba(255,255,255,0.3), 0 1px 3px rgba(0,0,0,0.2)`,
              }} />
            ))}
          </div>
          <span style={{ color: '#8888bb', fontSize: 12, fontFamily: "'Fira Code', monospace", fontWeight: 500 }}>{filename}</span>
        </div>
      )}
      <pre style={{
        background: T.codeBg,
        margin: 0,
        padding: '14px 18px',
        fontFamily: "'Fira Code','JetBrains Mono',monospace",
        fontSize: 12.5,
        lineHeight: 1.75,
        overflow: 'auto',
        maxHeight,
      }}>
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}

// ─── Inline code (M) ────────────────────────────────────────────────────────
export function M({ children }) {
  return (
    <code style={{
      background: T.bl + '15',
      color: T.bl,
      padding: '2px 8px',
      borderRadius: 8,
      fontSize: 12,
      fontFamily: "'Fira Code', monospace",
      fontWeight: 600,
      boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.5), inset -1px -1px 2px rgba(0,0,0,0.03)',
    }}>{children}</code>
  );
}

// ─── Keyboard tag ───────────────────────────────────────────────────────────
export function KbdTag({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      background: '#fff',
      color: T.txt,
      border: `2px solid ${T.dim}40`,
      padding: '2px 10px',
      borderRadius: 10,
      fontSize: 12,
      fontFamily: "'Fira Code', monospace",
      fontWeight: 600,
      marginRight: 4,
      boxShadow: '2px 2px 6px rgba(0,0,0,0.06), inset 1px 1px 2px rgba(255,255,255,0.9), inset -1px -1px 2px rgba(0,0,0,0.04)',
    }}>{children}</span>
  );
}

// ─── Clay Card (reusable container) ─────────────────────────────────────────
export function ClayCard({ children, color, style = {}, className = '' }) {
  const bg = color ? (T[color + 'P'] || color + '12') : T.surf;
  return (
    <div className={className} style={{
      background: bg,
      borderRadius: 20,
      padding: 18,
      boxShadow: color ? clay.colored(T[color] || color) : clay.md,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Animated Step indicator ────────────────────────────────────────────────
export function StepNumber({ n, color = T.bl }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: 32, height: 32, borderRadius: 16,
      background: `linear-gradient(135deg, ${color}, ${color}cc)`,
      color: '#fff',
      fontSize: 14, fontWeight: 800,
      flexShrink: 0,
      boxShadow: `0 4px 12px ${color}40, inset 1px 1px 3px rgba(255,255,255,0.3)`,
    }}>{n}</div>
  );
}

// ─── Flow Arrow (animated) ──────────────────────────────────────────────────
export function FlowArrow({ direction = 'right', color = T.bl }) {
  const isDown = direction === 'down';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: isDown ? '4px 0' : '0 4px',
      color,
      fontSize: 18,
      fontWeight: 800,
    }}>
      <span className={isDown ? 'bounce' : 'arrow-bounce'}>
        {isDown ? '↓' : '→'}
      </span>
    </div>
  );
}

// ─── Decorative blob (floating background) ──────────────────────────────────
export function Blob({ color, size = 120, top, left, right, bottom, delay = 0 }) {
  return (
    <div
      className={`float float-delay-${delay}`}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color}25 0%, ${color}08 70%, transparent 100%)`,
        filter: 'blur(20px)',
        top, left, right, bottom,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
