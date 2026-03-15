import { T } from './theme.js';

const JS_KW = new Set([
  'const','let','var','function','async','await','return','if','else',
  'try','catch','throw','new','class','export','default','import','from',
  'typeof','null','undefined','true','false','for','while','of','in',
  'switch','case','break','this','finally',
]);

const CS_KW = new Set([
  'using','namespace','public','private','protected','class','void','var',
  'new','return','if','else','string','int','bool','async','await',
  'true','false','null','static','readonly','builder','app','options',
  'policy','AllowAnyHeader','AllowAnyMethod','WithOrigins','AddCors',
  'UseCors','MapControllers','Build','AddAuthentication','AddJwtBearer',
  'TokenValidationParameters','ValidateIssuerSigningKey','IssuerSigningKey',
  'SymmetricSecurityKey','ValidateIssuer','ValidateAudience',
  'ValidAudience','ValidIssuer','Encoding','GetBytes',
]);

function tokenize(code, lang) {
  const kws = lang === 'cs' ? CS_KW : JS_KW;
  const out = [];
  let i = 0;
  const c = code;
  while (i < c.length) {
    if (c[i] === '/' && c[i + 1] === '/') {
      const nl = c.indexOf('\n', i);
      const v = nl < 0 ? c.slice(i) : c.slice(i, nl);
      out.push(['cm', v]); i += v.length;
    } else if (c[i] === '"' || c[i] === "'" || c[i] === '`') {
      const q = c[i]; let j = i + 1;
      while (j < c.length && c[j] !== q) { if (c[j] === '\\') j++; j++; }
      out.push(['str', c.slice(i, j + 1)]); i = j + 1;
    } else if (c[i] === '[' && lang === 'cs') {
      const cl = c.indexOf(']', i);
      if (cl > 0) { out.push(['tp', c.slice(i, cl + 1)]); i = cl + 1; }
      else { out.push(['tx', c[i]]); i++; }
    } else if (/[a-zA-Z_$]/.test(c[i])) {
      let j = i;
      while (j < c.length && /[\w$]/.test(c[j])) j++;
      const w = c.slice(i, j);
      let k = j;
      while (c[k] === ' ') k++;
      const tp = kws.has(w) ? 'kw' : c[k] === '(' ? 'fn' : /^[A-Z]/.test(w) ? 'tp' : 'id';
      out.push([tp, w]); i = j;
    } else if (/\d/.test(c[i])) {
      let j = i;
      while (j < c.length && /[\d.]/.test(c[j])) j++;
      out.push(['nm', c.slice(i, j)]); i = j;
    } else {
      out.push(['tx', c[i]]); i++;
    }
  }
  return out;
}

export function highlight(src, lang = 'js') {
  const tokens = tokenize(src.trim(), lang);
  const clr = { kw: T.kw, str: T.str, fn: T.fn, tp: T.tp, cm: T.cm, nm: T.nm };
  return tokens.map(([t, v]) => {
    const esc = v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return clr[t] ? `<span style="color:${clr[t]}">${esc}</span>` : `<span style="color:#e6e6e6">${esc}</span>`;
  }).join('');
}
