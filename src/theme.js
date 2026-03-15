// ─── Claymorphism Theme ──────────────────────────────────────────────────────
// Soft, rounded, puffy 3D clay-like aesthetic with warm pastels

export const T = {
  // Backgrounds
  bg:      '#f0eaff',
  bgGrad:  'linear-gradient(135deg, #ede5ff 0%, #dfeeff 40%, #fce4f0 100%)',
  surf:    '#ffffff',
  card:    '#f7f3ff',
  cardAlt: '#eef5ff',
  codeBg:  '#1e1e3f',
  codeSurf:'#2a2a4a',

  // Text
  txt:  '#2d1b69',
  txtL: '#3d2b79',
  mut:  '#7c6ba5',
  dim:  '#b5a8d0',

  // Accent palette (vivid but soft)
  bl: '#6C63FF',
  gr: '#43B581',
  pu: '#9B59B6',
  or: '#F39C12',
  re: '#E74C3C',
  ye: '#F1C40F',
  cy: '#1ABC9C',
  pi: '#E91E90',

  // Pastel tints (for card backgrounds)
  blP: '#eef0ff',
  grP: '#eaf7ef',
  puP: '#f5ecfa',
  orP: '#fef5e7',
  reP: '#fdecea',
  yeP: '#fef9e7',
  cyP: '#e8f8f5',
  piP: '#fce4f0',

  // Syntax highlighting (dark code blocks)
  kw:  '#ff79c6',
  str: '#f1fa8c',
  fn:  '#8be9fd',
  tp:  '#ffb86c',
  cm:  '#6272a4',
  nm:  '#bd93f9',
};

// ─── Clay shadow presets ─────────────────────────────────────────────────────
export const clay = {
  sm: '4px 4px 12px rgba(0,0,0,0.07), -2px -2px 8px rgba(255,255,255,0.9), inset 1px 1px 3px rgba(255,255,255,0.9), inset -1px -1px 2px rgba(0,0,0,0.03)',
  md: '8px 8px 20px rgba(0,0,0,0.08), -4px -4px 14px rgba(255,255,255,0.9), inset 2px 2px 5px rgba(255,255,255,0.85), inset -2px -2px 4px rgba(0,0,0,0.04)',
  lg: '12px 12px 30px rgba(0,0,0,0.1), -6px -6px 20px rgba(255,255,255,0.9), inset 3px 3px 6px rgba(255,255,255,0.8), inset -3px -3px 5px rgba(0,0,0,0.05)',
  pressed: '2px 2px 6px rgba(0,0,0,0.06), -1px -1px 4px rgba(255,255,255,0.8), inset 3px 3px 8px rgba(0,0,0,0.08), inset -2px -2px 5px rgba(255,255,255,0.7)',
  colored: (color) => `8px 8px 20px ${color}25, -4px -4px 14px rgba(255,255,255,0.9), inset 2px 2px 5px rgba(255,255,255,0.7), inset -2px -2px 4px ${color}12`,
  glow: (color) => `0 0 20px ${color}30, 8px 8px 20px rgba(0,0,0,0.07), inset 2px 2px 5px rgba(255,255,255,0.8), inset -2px -2px 4px rgba(0,0,0,0.04)`,
};
