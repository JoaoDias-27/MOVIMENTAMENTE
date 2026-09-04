/* ================= CONFIG ================= */
const ICONS = {
  home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9 20v-5h6v5"/></svg>',
  info:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 10v6"/><path d="M12 7h.01"/></svg>',
  movement:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="14" cy="5" r="2"/><path d="m7 11 4-2 2 2 3-1 2 7"/><path d="m10 9-2 9"/><path d="m14 13-1 7"/></svg>',
  'student-space':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V18H5Z"/><path d="M9 6V4.8A1.8 1.8 0 0 1 10.8 3h2.4A1.8 1.8 0 0 1 15 4.8V6"/><path d="M5 11h14"/></svg>',
  library:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5h11A2.5 2.5 0 0 1 18.5 7v12H7.4A2.4 2.4 0 0 0 5 21.4Z"/><path d="M18.5 19h.5"/><path d="M5 18.5V7A2.5 2.5 0 0 1 7.5 4.5"/><path d="M8.5 9.5h6"/><path d="M8.5 13h6"/></svg>',
  quiz:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 9a2.8 2.8 0 1 1 5.1 1.6c-.8 1-1.8 1.4-2.3 2.7"/><path d="M12 17h.01"/><circle cx="12" cy="12" r="9"/></svg>',
  activities:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7h11"/><path d="M8 12h11"/><path d="M8 17h11"/><path d="m4 7 1.2 1.2L7.6 6"/><path d="m4 12 1.2 1.2L7.6 11"/><path d="m4 17 1.2 1.2L7.6 16"/></svg>',
  video:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="14" height="14" rx="3"/><path d="m10 9 4.5 3L10 15Z"/><path d="m17.5 10 3-2v8l-3-2"/></svg>',
  award:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v4a4 4 0 0 1-8 0Z"/><path d="M8 5H5.8A1.8 1.8 0 0 0 4 6.8V7a3 3 0 0 0 3 3h1"/><path d="M16 5h2.2A1.8 1.8 0 0 1 20 6.8V7a3 3 0 0 1-3 3h-1"/><path d="M12 12v4"/><path d="M9 20h6"/><path d="M10 16h4"/></svg>',
  menu:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>',
  close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12"/><path d="m18 6-12 12"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5v3"/><path d="M17 3.5v3"/><rect x="4" y="5.5" width="16" height="15" rx="2.5"/><path d="M4 10h16"/></svg>',
  target:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 2v3"/><path d="M22 12h-3"/><path d="M12 22v-3"/><path d="M2 12h3"/></svg>',
  audience:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M4.5 18a4.5 4.5 0 0 1 9 0"/><path d="M14.5 18a3.8 3.8 0 0 1 6.5-2.6"/></svg>',
  puzzle:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4h3a2 2 0 0 1 2 2v1.2a1.8 1.8 0 1 0 2.5 2.6H19a2 2 0 0 1 2 2v3h-1.2a1.8 1.8 0 1 0-2.6 2.5V20a2 2 0 0 1-2 2h-3v-1.2a1.8 1.8 0 1 0-2.5-2.6V17H8a2 2 0 0 1-2-2v-3h1.2a1.8 1.8 0 1 0 2.6-2.5V8H10a2 2 0 0 1 0-4Z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="m4.5 7 7.5 6 7.5-6"/></svg>',
  pin:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s5-5.6 5-10a5 5 0 1 0-10 0c0 4.4 5 10 5 10Z"/><circle cx="12" cy="11" r="1.8"/></svg>',
  clock:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  stretch:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5.5" r="2"/><path d="M6 11h12"/><path d="M12 7.5V20"/><path d="m8 20 4-5 4 5"/></svg>',
  walk:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="14" cy="5" r="2"/><path d="m9 10 3-2 2 1"/><path d="m8 20 2-6"/><path d="m14 11-1 9"/><path d="m12 11 5 2"/></svg>',
  'team-sport':'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="9" r="2.3"/><circle cx="16" cy="9" r="2.3"/><path d="M4.5 18a3.8 3.8 0 0 1 7 0"/><path d="M12.5 18a3.8 3.8 0 0 1 7 0"/><circle cx="12" cy="13.5" r="1.8"/></svg>',
  challenge:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 3 5 13h5l-1 8 10-12h-6l2-6Z"/></svg>',
  vote:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h10v16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 12 2 2 4-4"/></svg>',
  dialogue:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.5h14A2.5 2.5 0 0 1 21.5 9v6A2.5 2.5 0 0 1 19 17.5H10l-4.5 3v-3H5A2.5 2.5 0 0 1 2.5 15V9A2.5 2.5 0 0 1 5 6.5Z"/></svg>',
  balance:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16"/><path d="M6 7h12"/><path d="m7.5 7-3 5h6Z"/><path d="m16.5 7-3 5h6Z"/><path d="M9 20h6"/></svg>',
  globe:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3.5 12h17"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>',
  'teacher-lock':'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><rect x="14" y="11" width="7" height="8" rx="2"/><path d="M16.5 11V9.8A2 2 0 0 1 18.5 8a2 2 0 0 1 2 1.8V11"/></svg>',
  dashboard:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/></svg>',
  pages:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4.5h8l3 3V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z"/><path d="M16 4.5V8h3"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>',
  settings:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1 1.6V21a2 2 0 0 1-4 0v-.1a1.8 1.8 0 0 0-1-1.6 1.8 1.8 0 0 0-2 .4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.6-1H3a2 2 0 0 1 0-4h.1a1.8 1.8 0 0 0 1.6-1 1.8 1.8 0 0 0-.4-2l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1-1.6V3a2 2 0 0 1 4 0v.1a1.8 1.8 0 0 0 1 1.6 1.8 1.8 0 0 0 2-.4l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.6 1H21a2 2 0 0 1 0 4h-.1a1.8 1.8 0 0 0-1.5 1Z"/></svg>',
  logout:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4.5H7A2.5 2.5 0 0 0 4.5 7v10A2.5 2.5 0 0 0 7 19.5h3"/><path d="M13 16.5 18 12l-5-4.5"/><path d="M8 12h10"/></svg>',
  eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.8"/></svg>',
  'eye-off':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18"/><path d="M10.6 5.2A10.8 10.8 0 0 1 12 5c6 0 9.5 7 9.5 7a17.8 17.8 0 0 1-3.4 4.2"/><path d="M6.2 6.2A18 18 0 0 0 2.5 12s3.5 6 9.5 6c1.5 0 2.8-.3 4-.8"/><path d="M9.9 9.9A3 3 0 0 0 14.1 14.1"/></svg>',
  folder:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 8.5A2.5 2.5 0 0 1 6 6h4l2 2h6A2.5 2.5 0 0 1 20.5 10.5v6A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>',
  file:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4.5h8l3 3V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z"/><path d="M16 4.5V8h3"/></svg>',
  play:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m10 8.8 5.2 3.2-5.2 3.2Z"/></svg>',
  tip:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M8.5 14.5a6 6 0 1 1 7 0c-.7.6-1.2 1.4-1.4 2.3H9.9c-.2-.9-.7-1.7-1.4-2.3Z"/></svg>',
  profile:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M4.5 19a7.5 7.5 0 0 1 15 0"/></svg>',
  'mood-great':'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.5 10h.01"/><path d="M15.5 10h.01"/><path d="M8.5 14c1 .9 2.2 1.5 3.5 1.5s2.5-.6 3.5-1.5"/></svg>',
  'mood-good':'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.5 10h.01"/><path d="M15.5 10h.01"/><path d="M8.8 14c.9.7 2 1.1 3.2 1.1s2.3-.4 3.2-1.1"/></svg>',
  'mood-neutral':'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.5 10h.01"/><path d="M15.5 10h.01"/><path d="M9 14h6"/></svg>',
  'mood-tired':'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.5 10.5h2"/><path d="M13.5 10.5h2"/><path d="M9 15c1-.5 2-.8 3-.8s2 .3 3 .8"/></svg>',
  'mood-anxious':'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.3 10.2h.01"/><path d="M15.7 10.2h.01"/><path d="M9 15.5c1-.8 2-.9 3-.9s2 .1 3 .9"/><path d="M12 6.8v1.8"/></svg>'
};
const SECTIONS = [
  {id:'inicio', label:'Início', icon:'home', bottom:true},
  {id:'sobre', label:'Sobre o Projeto', icon:'info'},
  {id:'movimento', label:'Movimento e Bem-estar', icon:'movement'},
  {id:'biblioteca', label:'Biblioteca', icon:'library', bottom:true},
  {id:'quiz', label:'Quiz', icon:'quiz', bottom:true},
  {id:'atividades', label:'Atividades', icon:'activities', bottom:true},
  {id:'videos', label:'Vídeos', icon:'video', bottom:true},
];
const LOCAL_TEACHER_PASSWORD_FALLBACK = 'movimenta2026';
const SUPABASE_URL = 'https://bjglrljgeamqkhusgxop.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_-4xysATL3AALbRJ2WMZnQg_mYIAIrxk';
const SUPABASE_STORAGE_KEY_FIELD = 'storage_key';
const SUPABASE_STORAGE_VALUE_FIELD = 'storage_value';
const SUPABASE_SHARED_KEYS = new Set([
  'quiz-modules',
  'biblioteca-modules',
  'atividades-modules',
  'videos-modules',
  'week-challenges',
  'page-edits',
  'site-config'
]);
let isTeacher = false;
let teacherSessionPassword = '';
let teacherAuthMode = 'local';
let teacherLoginPending = false;
let supabaseSyncWarned = false;

function iconMarkup(name, className='ui-icon'){
  return `<span class="${className}" data-icon="${name}" aria-hidden="true">${ICONS[name] || ''}</span>`;
}

function hydrateStaticIcons(root=document){
  root.querySelectorAll('[data-icon]').forEach(el=>{
    const name = el.dataset.icon;
    if(!name || !ICONS[name]) return;
    if(!el.querySelector('svg')) el.innerHTML = ICONS[name];
  });
}

function emptyStateMarkup(icon, content){
  return `<div class="empty-state"><div class="e-ico">${ICONS[icon] || ''}</div>${content}</div>`;
}

function setTeacherEntryState(){
  const logged = isTeacher;
  const iconName = logged ? 'dashboard' : 'teacher-lock';
  const label = logged ? 'Painel do Professor' : 'Área do Professor';
  const desk = document.getElementById('profBtn');
  const drawer = document.getElementById('drawer-professor');
  const bottom = document.getElementById('bn-professor');
  if(desk){
    desk.innerHTML = `${iconMarkup(iconName)}<span>${label}</span>`;
    desk.classList.toggle('logged', logged);
  }
  if(drawer){
    drawer.innerHTML = `${iconMarkup(iconName)}<span>${label}</span>`;
  }
  if(bottom){
    bottom.innerHTML = `<span class="bn-ico">${ICONS[iconName] || ''}</span><span>${logged ? 'Painel' : 'Professor'}</span>`;
  }
}

function toggleTeacherPassword(){
  const input = document.getElementById('profPass');
  const button = document.querySelector('.password-toggle');
  const iconHost = button?.querySelector('[data-icon]');
  if(!input || !button || !iconHost) return;
  const showing = input.type === 'text';
  input.type = showing ? 'password' : 'text';
  iconHost.dataset.icon = showing ? 'eye' : 'eye-off';
  iconHost.innerHTML = ICONS[showing ? 'eye' : 'eye-off'] || '';
  button.setAttribute('aria-label', showing ? 'Mostrar senha' : 'Ocultar senha');
}

function resetTeacherPasswordVisibility(){
  const input = document.getElementById('profPass');
  const button = document.querySelector('.password-toggle');
  const iconHost = button?.querySelector('[data-icon]');
  if(!input || !button || !iconHost) return;
  input.type = 'password';
  iconHost.dataset.icon = 'eye';
  iconHost.innerHTML = ICONS.eye || '';
  button.setAttribute('aria-label', 'Mostrar senha');
}

function hasSupabaseStorage(){
  return !!(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);
}

function isSupabaseSharedKey(key){
  return SUPABASE_SHARED_KEYS.has(String(key || ''));
}

function supabaseHeaders(includeJson = true){
  const headers = { apikey: SUPABASE_PUBLISHABLE_KEY };
  if(includeJson){
    headers.Accept = 'application/json';
    headers['Content-Type'] = 'application/json';
  }
  return headers;
}

async function supabaseReadStorageValue(key){
  const url = new URL(`${SUPABASE_URL}/rest/v1/app_storage`);
  url.searchParams.set('select', SUPABASE_STORAGE_VALUE_FIELD);
  url.searchParams.set(SUPABASE_STORAGE_KEY_FIELD, `eq.${String(key)}`);
  url.searchParams.set('limit', '1');
  const res = await fetch(url.toString(), { headers: supabaseHeaders(false) });
  if(!res.ok) throw new Error(`Supabase read failed (${res.status})`);
  const rows = await res.json();
  if(!Array.isArray(rows) || !rows.length) return null;
  const value = rows[0]?.[SUPABASE_STORAGE_VALUE_FIELD];
  return typeof value === 'string' ? value : (value == null ? null : JSON.stringify(value));
}

async function supabaseRpc(name, payload = {}){
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: 'POST',
    headers: supabaseHeaders(true),
    body: JSON.stringify(payload)
  });
  if(!res.ok){
    let detail = '';
    try{ detail = await res.text(); }catch(e){}
    throw new Error(detail || `Supabase RPC ${name} failed (${res.status})`);
  }
  const raw = await res.text();
  if(!raw) return null;
  try{ return JSON.parse(raw); }catch(e){ return raw; }
}

async function verifyTeacherPassword(password){
  if(!password) return false;
  if(hasSupabaseStorage()){
    try{
      const ok = await supabaseRpc('verify_teacher_password', { p_password: password });
      if(ok === true){
        teacherAuthMode = 'supabase';
        return true;
      }
      return false;
    }catch(e){
      console.warn('[Movimentamente] Falha ao validar a senha no Supabase; usando o modo local como fallback.', e);
    }
  }
  teacherAuthMode = 'local';
  return password === LOCAL_TEACHER_PASSWORD_FALLBACK;
}

function warnSupabaseSyncUnavailable(){
  if(supabaseSyncWarned) return;
  supabaseSyncWarned = true;
  console.warn('[Movimentamente] Mudanças do professor ficaram salvas apenas neste navegador. Finalize a configuração do Supabase para compartilhar o conteúdo com outras pessoas.');
  if(typeof showToast === 'function'){
    showToast('Mudanças salvas só neste navegador. Finalize o Supabase para compartilhar com todos.');
  }
}

function setTeacherLoginBusy(busy){
  teacherLoginPending = busy;
  const btn = document.querySelector('#loginArea .btn-solid');
  if(!btn) return;
  btn.disabled = busy;
  btn.textContent = busy ? 'Entrando...' : 'Entrar';
}

async function syncMissingSharedKeysFromLocal(){
  if(!hasSupabaseStorage() || !teacherSessionPassword) return 0;
  let synced = 0;

  for(const key of SUPABASE_SHARED_KEYS){
    let localValue = null;
    try{
      localValue = localStorage.getItem(STORAGE_PREFIX + key);
    }catch(e){
      localValue = null;
    }
    if(localValue == null || String(localValue).trim() === '') continue;

    let remoteValue = null;
    try{
      remoteValue = await supabaseReadStorageValue(key);
    }catch(e){
      remoteValue = null;
    }
    if(remoteValue !== null && String(remoteValue).trim() !== '') continue;

    try{
      await supabaseRpc('set_shared_storage', {
        p_key: String(key),
        p_value: String(localValue),
        p_password: teacherSessionPassword
      });
      synced += 1;
    }catch(e){
      console.error('supabase recovery sync error', e);
    }
  }

  return synced;
}

/* ================= NAV BUILD ================= */
function buildNav(){
  const deskNav = document.getElementById('deskNav');
  const drawerLinks = document.getElementById('drawerLinks');
  const bottomNav = document.getElementById('bottomNav');
  deskNav.innerHTML = '';
  drawerLinks.innerHTML = '';
  bottomNav.innerHTML = '';

  // Menu expansível no canto superior direito
  const trigger = document.createElement('button');
  trigger.className = 'menu-trigger';
  trigger.type = 'button';
  trigger.setAttribute('aria-expanded','false');
  trigger.innerHTML = `${iconMarkup('menu')}<span>Menu</span><span class="menu-chevron">▼</span>`;

  const panel = document.createElement('div');
  panel.className = 'menu-panel';
  panel.setAttribute('role','menu');

  SECTIONS.forEach(s=>{
    const b = document.createElement('button');
    b.id = 'desk-'+s.id;
    b.type = 'button';
    b.innerHTML = `${iconMarkup(s.icon)}<span>${s.label}</span>`;
    b.onclick = ()=>{ goTo(s.id); closeDesktopMenu(); };
    panel.appendChild(b);

    const d = document.createElement('button');
    d.className='dlink'; d.id='drawer-'+s.id;
    d.innerHTML = `${iconMarkup(s.icon)}<span>${s.label}</span>`;
    d.onclick = ()=>{ goTo(s.id); toggleDrawer(false); };
    drawerLinks.appendChild(d);
  });

  const divider=document.createElement('div');
  divider.className='menu-divider';
  panel.appendChild(divider);

  const prof = document.createElement('button');
  prof.className='professor-link';
  prof.id='profBtn';
  prof.type='button';
  prof.onclick=()=>{ goTo('professor'); closeDesktopMenu(); };
  panel.appendChild(prof);

  const profDrawer = document.createElement('button');
  profDrawer.className='dlink'; profDrawer.id='drawer-professor';
  profDrawer.onclick = ()=>{ goTo('professor'); toggleDrawer(false); };
  drawerLinks.appendChild(profDrawer);

  trigger.onclick=()=>{
    const open=panel.classList.toggle('open');
    trigger.classList.toggle('open',open);
    trigger.setAttribute('aria-expanded',String(open));
  };

  deskNav.appendChild(trigger);
  deskNav.appendChild(panel);

  SECTIONS.filter(s=>s.bottom).forEach(s=>{
    const b = document.createElement('button');
    b.className='bn-item'; b.id='bn-'+s.id;
    b.innerHTML = `<span class="bn-ico">${ICONS[s.icon] || ''}</span><span>${s.bottomLabel||s.label}</span>`;
    b.onclick = ()=>goTo(s.id);
    bottomNav.appendChild(b);
  });
  const bnProf = document.createElement('button');
  bnProf.className='bn-item'; bnProf.id='bn-professor';
  bnProf.onclick = ()=>goTo('professor');
  bottomNav.appendChild(bnProf);
  setTeacherEntryState();
}

function closeDesktopMenu(){
  const panel=document.querySelector('.menu-panel');
  const trigger=document.querySelector('.menu-trigger');
  if(panel) panel.classList.remove('open');
  if(trigger){ trigger.classList.remove('open'); trigger.setAttribute('aria-expanded','false'); }
}

document.addEventListener('click', e=>{
  const nav=document.getElementById('deskNav');
  if(nav && !nav.contains(e.target)) closeDesktopMenu();
});

function toggleDrawer(open){
  document.getElementById('drawer').classList.toggle('open', open);
}

function goTo(id){
  document.querySelectorAll('section.page').forEach(p=>p.classList.remove('active'));
  const target = document.getElementById('page-'+id);
  if(target) target.classList.add('active');
  document.getElementById('heroBlock').style.display = (id==='inicio') ? 'block' : 'none';

  document.querySelectorAll('.desk-nav button').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.drawer-panel button.dlink').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.bn-item').forEach(b=>b.classList.remove('active'));
  const deskB = document.getElementById('desk-'+id); if(deskB) deskB.classList.add('active');
  const drawerB = document.getElementById('drawer-'+id); if(drawerB) drawerB.classList.add('active');
  const bnB = document.getElementById('bn-'+id); if(bnB) bnB.classList.add('active');
  if(id==='professor'){
    document.getElementById('profBtn')?.classList.add('active');
    document.getElementById('drawer-professor')?.classList.add('active');
    document.getElementById('bn-professor')?.classList.add('active');
  }

  window.scrollTo({top:0, behavior:'smooth'});
  location.hash = id;
}

window.addEventListener('DOMContentLoaded', async ()=>{
  hydrateStaticIcons();
  buildNav();
  buildWeekDays();
  buildMood();
  buildStars();
  setupEditorKeys();
  await loadPageEdits();
  await loadSiteConfig();
  // Usa o carregador do backend central (Cultiva+), que restaura os
  // módulos mesmo depois de atualizar ou sair e voltar ao site.
  await window.loadAllModules();
  renderAllPublicModules();
  await loadChallenges();
  await loadFeedbackSummary();
  setupAutoSave();
  updateAdminStats();
  const startId = (location.hash||'#inicio').replace('#','');
  goTo(SECTIONS.find(s=>s.id===startId) ? startId : 'inicio');
});

/* ================= TOAST ================= */
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2400);
}

/* ================= WEEK DAYS ================= */
function buildWeekDays(){
  const days=['S','T','Q','Q','S','S','D'];
  const todayIdx = (new Date().getDay()+6)%7; // monday=0
  const el = document.getElementById('weekDays');
  days.forEach((d,i)=>{
    const s = document.createElement('span');
    s.textContent = d;
    if(i===todayIdx) s.classList.add('today');
    el.appendChild(s);
  });
}

/* ================= MOOD CHECK-IN ================= */
function buildMood(){
  const moods = [
    {icon:'mood-great',l:'Ótimo'},
    {icon:'mood-good',l:'Bem'},
    {icon:'mood-neutral',l:'Neutro'},
    {icon:'mood-tired',l:'Cansado'},
    {icon:'mood-anxious',l:'Ansioso'}
  ];
  const row = document.getElementById('moodRow');
  moods.forEach(m=>{
    const btn = document.createElement('button');
    btn.className='mood-btn';
    btn.innerHTML = `${iconMarkup(m.icon,'mood-icon')}<span>${m.l}</span>`;
    btn.onclick = ()=>{
      document.querySelectorAll('.mood-btn').forEach(b=>b.classList.remove('picked'));
      btn.classList.add('picked');
      document.getElementById('moodResult').textContent = 'Obrigado por compartilhar! Se precisar conversar, procure um professor ou orientador da escola.';
    };
    row.appendChild(btn);
  });
}

/* ================= CONTATO E FEEDBACK ================= */
let currentFeedbackRating = 0;

function formatLocalDate(dateValue){
  try{
    return new Date(dateValue).toLocaleString('pt-BR', {
      day:'2-digit',
      month:'2-digit',
      year:'numeric',
      hour:'2-digit',
      minute:'2-digit'
    });
  }catch(e){
    return '';
  }
}

function feedbackStarsMarkup(rating){
  const safeRating = Math.max(0, Math.min(5, Number(rating || 0)));
  return Array.from({ length: 5 }, (_, index) => {
    const filled = index < safeRating;
    return `<span class="star-chip ${filled ? 'filled' : ''}" aria-hidden="true">${filled ? '★' : '☆'}</span>`;
  }).join('');
}

function paintFeedbackStars(){
  const host = document.getElementById('starsInput');
  if(!host) return;
  host.querySelectorAll('button[data-rate]').forEach(button=>{
    const rate = Number(button.dataset.rate || 0);
    const active = rate <= currentFeedbackRating;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
    button.innerHTML = active ? '★' : '☆';
  });
}

function buildStars(){
  const host = document.getElementById('starsInput');
  if(!host) return;
  host.innerHTML = '';
  for(let rate = 1; rate <= 5; rate += 1){
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'star-btn';
    button.dataset.rate = String(rate);
    button.setAttribute('aria-label', `${rate} estrela${rate > 1 ? 's' : ''}`);
    button.onclick = ()=>{
      currentFeedbackRating = rate;
      paintFeedbackStars();
    };
    host.appendChild(button);
  }
  paintFeedbackStars();
}

async function sendContact(){
  const nameEl = document.getElementById('ctName');
  const classEl = document.getElementById('ctClass');
  const msgEl = document.getElementById('ctMsg');
  if(!nameEl || !classEl || !msgEl) return;

  const nome = nameEl.value.trim();
  const turma = classEl.value.trim();
  const mensagem = msgEl.value.trim();

  if(!nome){
    showToast('Informe seu nome para enviar a mensagem.');
    return;
  }
  if(!mensagem){
    showToast('Escreva a mensagem antes de enviar.');
    return;
  }

  const list = await storageGetList('contact-messages');
  list.unshift({
    id: uid(),
    nome,
    turma,
    mensagem,
    createdAt: new Date().toISOString()
  });
  await storageSetList('contact-messages', list);
  nameEl.value = '';
  classEl.value = '';
  msgEl.value = '';
  await renderContactAdmin();
  await updateAdminStats();
  showToast('Mensagem enviada com sucesso!');
}

async function renderContactAdmin(){
  const host = document.getElementById('contactAdminList');
  if(!host) return;
  const list = await storageGetList('contact-messages');
  if(!list.length){
    host.innerHTML = '<div class="module-empty">Nenhuma mensagem recebida até o momento.</div>';
    return;
  }
  host.innerHTML = list.map(item=>`
    <div class="admin-list-item">
      <div>
        <h5>${escapeHtml(item.nome || 'Estudante')}</h5>
        <p>${escapeHtml(item.mensagem || '')}</p>
        <div style="font-size:.78rem;color:var(--ink-soft);margin-top:6px;">
          ${item.turma ? `Turma: ${escapeHtml(item.turma)} · ` : ''}${escapeHtml(formatLocalDate(item.createdAt))}
        </div>
      </div>
    </div>
  `).join('');
}

async function loadFeedbackSummary(){
  const host = document.getElementById('feedbackSummary');
  if(!host) return;
  const list = await storageGetList('feedback-messages');
  if(!list.length){
    host.innerHTML = '<p style="color:var(--ink-soft);margin:0;">Ainda não há avaliações publicadas.</p>';
    return;
  }

  const average = (list.reduce((sum, item)=>sum + Number(item.rating || 0), 0) / list.length).toFixed(1);
  const latest = list.slice(0, 3);
  host.innerHTML = `
    <div style="display:grid;gap:14px;">
      <div>
        <strong style="font-size:1.1rem;">${average}/5</strong>
        <div style="margin-top:6px;">${feedbackStarsMarkup(Math.round(Number(average)))}</div>
        <p style="margin:8px 0 0;color:var(--ink-soft);">${list.length} avaliação(ões) enviadas.</p>
      </div>
      <div style="display:grid;gap:10px;">
        ${latest.map(item=>`
          <div class="admin-list-item">
            <div>
              <div>${feedbackStarsMarkup(item.rating)}</div>
              <p style="margin:8px 0 0;">${escapeHtml(item.comment || 'Sem comentário adicional.')}</p>
              <div style="font-size:.78rem;color:var(--ink-soft);margin-top:6px;">${escapeHtml(formatLocalDate(item.createdAt))}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

async function sendFeedback(){
  const commentEl = document.getElementById('fbComment');
  if(!commentEl) return;
  if(currentFeedbackRating < 1){
    showToast('Escolha de 1 a 5 estrelas para enviar sua avaliação.');
    return;
  }

  const list = await storageGetList('feedback-messages');
  list.unshift({
    id: uid(),
    rating: currentFeedbackRating,
    comment: commentEl.value.trim(),
    createdAt: new Date().toISOString()
  });
  await storageSetList('feedback-messages', list);
  commentEl.value = '';
  currentFeedbackRating = 0;
  paintFeedbackStars();
  await loadFeedbackSummary();
  await renderFeedbackAdmin();
  showToast('Feedback enviado. Obrigado pela sua avaliação!');
}

async function renderFeedbackAdmin(){
  const host = document.getElementById('feedbackAdminList');
  if(!host) return;
  const list = await storageGetList('feedback-messages');
  if(!list.length){
    host.innerHTML = '<div class="module-empty">Nenhum feedback recebido até o momento.</div>';
    return;
  }
  host.innerHTML = list.map(item=>`
    <div class="admin-list-item">
      <div>
        <div>${feedbackStarsMarkup(item.rating)}</div>
        <p style="margin:8px 0 0;">${escapeHtml(item.comment || 'Sem comentário adicional.')}</p>
        <div style="font-size:.78rem;color:var(--ink-soft);margin-top:6px;">${escapeHtml(formatLocalDate(item.createdAt))}</div>
      </div>
    </div>
  `).join('');
}

/* ================= CHALLENGE (Movimento) — editável pelo professor ================= */
const DEFAULT_CHALLENGES = ['Alongar por 5 minutos ao acordar','Fazer uma caminhada de 20 minutos','Praticar um esporte com amigos','Fazer uma pausa ativa entre os estudos','Subir escadas em vez de usar o elevador'];
async function loadChallenges(){
  window._challenges = await storageGetList('week-challenges');
  if(!window._challenges.length){
    window._challenges = DEFAULT_CHALLENGES.map(txt=>({id:uid(), text:txt}));
    await storageSetList('week-challenges', window._challenges);
  }
  renderChallenges();
  renderChallengeAdmin();
}
function renderChallenges(){
  const el = document.getElementById('challengeList');
  if(!el) return;
  const list = window._challenges || [];
  if(!list.length){ el.innerHTML = '<div class="empty-state">Nenhum desafio publicado no momento.</div>'; return; }
  el.innerHTML = '';
  list.forEach(item=>{
    const row = document.createElement('label');
    row.style.cssText='display:flex;align-items:center;gap:10px;font-size:.9rem;color:var(--ink-soft);cursor:pointer;';
    row.innerHTML = `<input type="checkbox" style="width:18px;height:18px;accent-color:var(--green);"> ${escapeHtml(item.text)}`;
    el.appendChild(row);
  });
}
function renderChallengeAdmin(){
  const list = window._challenges||[]; const el=document.getElementById('challengeAdminList'); if(!el) return;
  if(!list.length){ el.innerHTML='<div class="empty-state">Nenhum desafio cadastrado ainda.</div>'; return; }
  el.innerHTML = list.map(item=>`<div class="admin-list-item"><div><h5>${escapeHtml(item.text)}</h5></div><div class="admin-list-actions"><button class="btn-secondary btn-small" onclick="editChallenge('${item.id}')">Editar</button><button class="btn-danger" onclick="deleteChallenge('${item.id}')">Excluir</button></div></div>`).join('');
}
async function saveChallenge(){
  const id=document.getElementById('editingChallengeId').value;
  const text=document.getElementById('challengeText').value.trim();
  if(!text){ showToast('Digite o texto do desafio'); return; }
  window._challenges = window._challenges||[];
  if(id){ const item=window._challenges.find(x=>x.id===id); if(item) item.text=text; showToast('Desafio atualizado!'); }
  else { window._challenges.push({id:uid(), text}); showToast('Desafio adicionado!'); }
  await storageSetList('week-challenges', window._challenges);
  clearChallengeForm(); renderChallenges(); renderChallengeAdmin();
}
function editChallenge(id){
  const i=(window._challenges||[]).find(x=>x.id===id); if(!i) return;
  document.getElementById('editingChallengeId').value=i.id;
  document.getElementById('challengeText').value=i.text;
  document.getElementById('challengeFormTitle').textContent='Editar desafio';
  document.getElementById('challengeSaveBtn').textContent='Salvar desafio';
  window.scrollTo({top:document.getElementById('admin-sec-desafios').offsetTop-20,behavior:'smooth'});
}
function clearChallengeForm(){
  document.getElementById('editingChallengeId').value='';
  document.getElementById('challengeText').value='';
  document.getElementById('challengeFormTitle').textContent='Novo desafio';
  document.getElementById('challengeSaveBtn').textContent='Adicionar desafio';
}
async function deleteChallenge(id){
  window._challenges = (window._challenges||[]).filter(i=>i.id!==id);
  await storageSetList('week-challenges', window._challenges);
  renderChallenges(); renderChallengeAdmin();
  showToast('Desafio removido');
}

/* ================= SLEEP CALCULATOR ================= */
function calcSleep(){
  const wake = document.getElementById('wakeTime').value;
  if(!wake){ return; }
  const [h,m] = wake.split(':').map(Number);
  const wakeDate = new Date(); wakeDate.setHours(h,m,0,0);
  const cycles = [6,5,4]; // sleep cycle counts to suggest
  const opts = cycles.map(c=>{
    const d = new Date(wakeDate.getTime() - c*90*60000 - 15*60000);
    return d.getHours().toString().padStart(2,'0')+':'+d.getMinutes().toString().padStart(2,'0');
  });
  const box = document.getElementById('sleepResult');
  box.innerHTML = `Para acordar descansado às <strong>${wake}</strong>, considere dormir por volta de:<br><strong>${opts.join(' &nbsp;•&nbsp; ')}</strong><br><span style="font-size:.8rem;">(considerando ciclos de sono de ~90 minutos e 15 min para adormecer)</span>`;
  box.classList.add('show');
}

/* ================= QUIZ (por módulo, aluno) ================= */
let activeQuizModule = null, quizIndex = 0, quizScore = 0, totalPoints = 0;
function renderQuizModulePicker(){
  const el = document.getElementById('quizModulePicker'); if(!el) return;
  const modules = (window._modules.quiz||[]);
  if(!modules.length){
    el.innerHTML=emptyStateMarkup('quiz','Nenhum módulo de quiz publicado ainda.<br>Volte em breve!');
    document.getElementById('quizProgressWrap').style.display='none';
    document.getElementById('quizArea').innerHTML='';
    return;
  }
  const selected = activeQuizModule || modules[0];
  el.innerHTML=`
    <div class="student-module-shell">
      <aside class="student-module-sidebar">
        <div class="side-label">Módulos</div>
        <div class="student-module-list">
          ${modules.map((m,i)=>`
            <button class="student-module-btn ${m.id===selected.id?'active':''}" onclick="startQuizModule('${m.id}')">
              <strong>${escapeHtml(m.title)}</strong>
              <span>${(m.items||[]).length} pergunta(s) • ${i===0?'Liberado':'Disponível'}</span>
            </button>`).join('')}
        </div>
      </aside>
      <div class="student-module-main">
        <div class="student-module-top">
          <div>
            <span class="eyebrow">Módulo do quiz</span>
            <h3>${escapeHtml(selected.title)}</h3>
            <p>Cada módulo reúne as perguntas cadastradas pelo professor. Escolha um módulo para começar.</p>
          </div>
          <span class="student-module-badge">${(selected.items||[]).length} etapa(s)</span>
        </div>
        <div class="student-stage-list">
          ${(selected.items||[]).map((it,i)=>`
            <div class="student-stage ${i===0?'current':''}">
              <div class="student-stage-head">
                <div class="student-stage-num">${i+1}</div>
                <div>
                  <h4>${escapeHtml(it.title||`Atividade ${i+1}`)}</h4>
                  <p>${escapeHtml(it.question||it.topic||'Pergunta cadastrada pelo professor.')}</p>
                  <div class="student-stage-meta">${it.topic?`<span class="student-tag">${escapeHtml(it.topic)}</span>`:''}<span class="student-tag">${i===0?'Disponível':'Na sequência'}</span></div>
                </div>
              </div>
            </div>`).join('')}
        </div>
        <button class="btn-solid" style="margin-top:15px;" onclick="startQuizModule('${selected.id}')">Começar módulo</button>
      </div>
    </div>`;
}

function startQuizModule(moduleId){
  const mod = (window._modules.quiz||[]).find(m=>m.id===moduleId); if(!mod) return;
  activeQuizModule = mod; quizIndex=0; quizScore=0;
  document.getElementById('quizProgressWrap').style.display='block';
  renderQuiz();
  const page=document.getElementById('page-quiz'); if(page) window.scrollTo({top:page.offsetTop-10,behavior:'smooth'});
}
function backToQuizModules(){
  activeQuizModule=null;
  document.getElementById('quizProgressWrap').style.display='none';
  document.getElementById('quizArea').innerHTML='';
}
function renderQuiz(){
  const area = document.getElementById('quizArea');
  const bar = document.getElementById('quizProgressBar');
  if(!activeQuizModule) return;
  const questions = activeQuizModule.items;
  if(quizIndex >= questions.length){
    bar.style.width='100%';
    area.innerHTML = `<div class="quiz-score">
      <div class="big">${quizScore}/${questions.length}</div>
      <p style="color:var(--ink-soft);">Você acertou ${quizScore} de ${questions.length} perguntas do módulo "${escapeHtml(activeQuizModule.title)}". ${quizScore>=questions.length*0.7?'Muito bom desempenho neste módulo.':'Continue explorando o portal para aprender mais.'}</p>
      <div class="admin-actions" style="justify-content:center;">
        <button class="btn-solid" onclick="startQuizModule('${activeQuizModule.id}')">Refazer módulo</button>
        <button class="btn-secondary" onclick="backToQuizModules()">Escolher outro módulo</button>
      </div>
    </div>`;
    addPoints(quizScore);
    return;
  }
  bar.style.width = (quizIndex/questions.length*100)+'%';
  const item = questions[quizIndex];
  const opts = (item.opts||[]).filter(o=>o!==undefined && o!==null && o!=='').map((o,i)=>`
    <label class="quiz-opt" id="opt-${i}">
      <input type="radio" name="quizopt" value="${i}"> ${escapeHtml(o)}
    </label>`).join('');
  area.innerHTML = `<div class="quiz-card">
    ${item.topic?`<span class="ci-tag" style="display:inline-block;margin-bottom:8px;">${escapeHtml(item.topic)}</span>`:''}
    <div class="quiz-q">Pergunta ${quizIndex+1} de ${questions.length} — ${escapeHtml(item.question||item.title||'')}</div>
    <div class="quiz-opts">${opts}</div>
    <button class="btn-solid" style="margin-top:16px;" onclick="checkQuiz()">Confirmar resposta</button>
  </div>`;
}
function checkQuiz(){
  const sel = document.querySelector('input[name=quizopt]:checked');
  if(!sel){ showToast('Escolha uma opção antes de confirmar'); return; }
  const idx = Number(sel.value);
  const item = activeQuizModule.items[quizIndex];
  document.getElementById('opt-'+item.correct).classList.add('correct');
  if(idx!==item.correct) document.getElementById('opt-'+idx).classList.add('wrong');
  else quizScore++;
  document.querySelectorAll('.quiz-opt input').forEach(i=>i.disabled=true);
  if(item.explanation){
    const card = document.querySelector('#quizArea .quiz-card');
    const p = document.createElement('p');
    p.style.cssText='margin-top:12px;color:var(--ink-soft);font-size:.85rem;background:#F7FAFC;border-radius:10px;padding:10px 12px;line-height:1.5;';
    p.innerHTML = `${iconMarkup('tip','ui-icon ui-icon--pill')}<span style="margin-left:8px;">${escapeHtml(item.explanation)}</span>`;
    card.insertBefore(p, card.querySelector('.btn-solid'));
  }
  const btn = document.querySelector('#quizArea .btn-solid');
  btn.textContent = quizIndex===activeQuizModule.items.length-1 ? 'Ver resultado' : 'Próxima pergunta';
  btn.onclick = ()=>{ quizIndex++; renderQuiz(); };
}
function addPoints(n){ totalPoints+=n; const p=document.getElementById('pillPoints'); if(p) p.textContent = totalPoints; }

/* ================= STORAGE / PERSISTÊNCIA =================
   Usa o armazenamento do ambiente quando disponível e localStorage como
   fallback. Assim o conteúdo continua salvo mesmo abrindo o HTML diretamente.
*/
const STORAGE_PREFIX = 'movimentamente_';
let storageBackend = 'local';
let storageWarned = false;

// O armazenamento compartilhado pode ser disponibilizado pelo ambiente
// depois que este HTML já começou a executar. Por isso NÃO congelamos a
// disponibilidade em uma constante no carregamento inicial.
function hasCloudStorage(){
  return !!(typeof window !== 'undefined' && window.storage &&
    typeof window.storage.get === 'function' &&
    typeof window.storage.set === 'function');
}

function warnLocalOnlyOnce(){
  if(hasSupabaseStorage()) return;
  // Não interrompe o aluno com um alerta apenas porque o HTML está sendo
  // executado fora do ambiente que fornece window.storage. O localStorage
  // é um fallback legítimo e preserva os dados deste navegador.
  if(storageWarned) return;
  storageWarned = true;
  console.warn('[Movimentamente] Armazenamento compartilhado indisponível neste ambiente; usando uma cópia local de segurança.');
}

async function storageGetValue(key){
  if(isSupabaseSharedKey(key) && hasSupabaseStorage()){
    try{
      const supabaseValue = await supabaseReadStorageValue(key);
      if(supabaseValue !== null && String(supabaseValue).trim() !== ''){
        storageBackend = 'supabase';
        try{ localStorage.setItem(STORAGE_PREFIX + key, supabaseValue); }catch(e){}
        return supabaseValue;
      }
    }catch(e){
      console.warn('[Movimentamente] Falha ao ler conteúdo compartilhado no Supabase.', e);
    }
  }

  if(hasCloudStorage()){
    try{
      const res = await window.storage.get(key, true);
      storageBackend = 'cloud';
      // Uma resposta vazia do armazenamento compartilhado não deve apagar
      // o cache local. Isso acontece em alguns ambientes quando a conexão
      // ainda está inicializando ou quando a chave ainda não existe.
      if(res && typeof res.value !== 'undefined' && res.value !== null && String(res.value).trim() !== '') return res.value;
      const localValue = localStorage.getItem(STORAGE_PREFIX + key);
      return localValue;
    }catch(e){
      // Se a nuvem falhar durante um refresh, NÃO perde o conteúdo.
      // Recupera imediatamente a cópia local.
      storageBackend = 'local';
      try{
        const localValue = localStorage.getItem(STORAGE_PREFIX + key);
        if(localValue !== null) return localValue;
      }catch(e2){}
      return null;
    }
  }
  try{
    warnLocalOnlyOnce();
    storageBackend = 'local';
    return localStorage.getItem(STORAGE_PREFIX + key);
  }catch(e){ return null; }
}

async function storageSetValue(key, value){
  const serialized = String(value);

  // Primeiro mantém a cópia local. Isso garante persistência mesmo se a
  // página for atualizada, fechada ou a conexão compartilhada cair.
  let localOk = false;
  try{
    localStorage.setItem(STORAGE_PREFIX + key, serialized);
    localOk = true;
  }catch(e){
    console.error('local storage error', e);
  }

  if(isSupabaseSharedKey(key) && hasSupabaseStorage()){
    if(!teacherSessionPassword){
      storageBackend = 'local';
      return localOk;
    }
    try{
      await supabaseRpc('set_shared_storage', {
        p_key: String(key),
        p_value: serialized,
        p_password: teacherSessionPassword
      });
      storageBackend = 'supabase';
      return true;
    }catch(e){
      storageBackend = 'local';
      console.error('supabase storage error', e);
      if(isTeacher) warnSupabaseSyncUnavailable();
      return localOk;
    }
  }

  if(hasCloudStorage()){
    try{
      await window.storage.set(key, serialized, true);
      storageBackend = 'cloud';
      return true;
    }catch(e){
      storageBackend = 'local';
      console.error('cloud storage error', e);
      // Não mostra mais o aviso falso de "sem conexão" a cada refresh.
      // Só registra no console; o dado continua salvo localmente.
      return localOk;
    }
  }

  warnLocalOnlyOnce();
  storageBackend = 'local';
  return localOk;
}
async function storageGetList(key){
  try{
    const value = await storageGetValue(key);
    return value ? JSON.parse(value) : [];
  }catch(e){ return []; }
}
async function storageSetList(key, arr){
  return storageSetValue(key, JSON.stringify(arr));
}
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,7); }

async function storageRemoveValue(key){
  if(isSupabaseSharedKey(key) && hasSupabaseStorage() && teacherSessionPassword){
    try{
      await supabaseRpc('delete_shared_storage', {
        p_key: String(key),
        p_password: teacherSessionPassword
      });
      storageBackend = 'supabase';
    }catch(e){
      storageBackend = 'local';
      console.error('supabase delete error', e);
      if(isTeacher) warnSupabaseSyncUnavailable();
    }
  }
  try{
    if(hasCloudStorage() && typeof window.storage.delete==='function'){
      await window.storage.delete(key, true);
      return true;
    }
  }catch(e){}
  try{ localStorage.removeItem(STORAGE_PREFIX + key); return true; }catch(e){ return false; }
}

/* ================= SISTEMA DE MÓDULOS (base Cultiva) ================= */
/* Aplicado a: Quiz, Biblioteca, Atividades e Vídeos.
   Cada tipo tem "módulos" (ex: "Módulo quiz - Razões e colheita") e cada módulo
   guarda uma lista de itens (perguntas, materiais, atividades ou vídeos). */

const MODULE_FIELDS = {
  quiz:[
    {key:'title',label:'Nome da atividade',type:'text',placeholder:'Ex: Atividade sobre irrigação',full:true},
    {key:'topic',label:'Tópico',type:'text',placeholder:''},
    {key:'question',label:'Pergunta principal',type:'textarea',placeholder:'',full:true},
    {key:'optA',label:'Alternativa A',type:'text'},
    {key:'optB',label:'Alternativa B',type:'text'},
    {key:'optC',label:'Alternativa C',type:'text'},
    {key:'optD',label:'Alternativa D',type:'text'},
    {key:'correct',label:'Resposta correta',type:'select',options:['Alternativa A','Alternativa B','Alternativa C','Alternativa D'],full:true},
    {key:'explanation',label:'Explicação da resposta',type:'textarea',placeholder:'Ex: 85% de 180 = 153, porque 0,85 x 180 = 153.',full:true},
  ],
  biblioteca:[
    {key:'title',label:'Título',type:'text',placeholder:'Ex: Guia de respiração'},
    {key:'topic',label:'Tópico / Categoria',type:'text',placeholder:'Ex: Saúde Mental'},
    {key:'desc',label:'Descrição',type:'textarea',placeholder:'Breve descrição do material',full:true},
    {key:'link',label:'Link / arquivo',type:'text',placeholder:'https://... ou nome-do-arquivo.pdf',full:true},
  ],
  atividades:[
    {key:'title',label:'Nome da atividade',type:'text',placeholder:'Ex: Exercício de respiração'},
    {key:'topic',label:'Tópico',type:'text',placeholder:''},
    {key:'due',label:'Prazo',type:'text',placeholder:'Ex: 25/08'},
    {key:'desc',label:'Instruções',type:'textarea',placeholder:'Descreva a atividade para os estudantes',full:true},
    {key:'file',label:'Anexo / link',type:'text',placeholder:'https://... ou arquivo.pdf',full:true},
    {key:'thumbnail',label:'Link da Thumbnail',type:'text',placeholder:'https://.../imagem.jpg',full:true},
  ],
  videos:[
    {key:'title',label:'Título do vídeo',type:'text',placeholder:'Ex: Como respirar corretamente'},
    {key:'topic',label:'Tópico',type:'text',placeholder:''},
    {key:'url',label:'Link do vídeo (YouTube, Vimeo...)',type:'text',placeholder:'https://youtube.com/...',full:true},
    {key:'desc',label:'Descrição do vídeo',type:'textarea',placeholder:'Breve descrição do vídeo',full:true},
    {key:'thumbnail',label:'Link da Thumbnail',type:'text',placeholder:'https://.../imagem.jpg',full:true},
  ],
};

const MODULE_META = {
  quiz:{singular:'módulo de quiz',modulePlaceholder:'Ex: Módulo 3 - Medições no campo',itemFormLabel:'Nova atividade',itemAddAnother:'Adicionar outra atividade',itemPublish:'Publicar atividades do quiz',emptyModules:'Nenhum módulo de quiz cadastrado ainda.',emptyItems:'Nenhuma pergunta publicada neste módulo ainda.',itemLabel:'Pergunta'},
  biblioteca:{singular:'módulo da biblioteca',modulePlaceholder:'Ex: Módulo 1 - Saúde mental',itemFormLabel:'Novo material',itemAddAnother:'Adicionar outro material',itemPublish:'Publicar materiais do módulo',emptyModules:'Nenhum módulo de biblioteca cadastrado ainda.',emptyItems:'Nenhum material publicado neste módulo ainda.',itemLabel:'Material'},
  atividades:{singular:'módulo de atividades',modulePlaceholder:'Ex: Módulo 2 - Tarefas de casa',itemFormLabel:'Nova atividade',itemAddAnother:'Adicionar outra atividade',itemPublish:'Publicar atividades do módulo',emptyModules:'Nenhum módulo de atividades cadastrado ainda.',emptyItems:'Nenhuma atividade publicada neste módulo ainda.',itemLabel:'Atividade'},
  videos:{singular:'módulo de vídeos',modulePlaceholder:'Ex: Módulo 1 - Introdução',itemFormLabel:'Novo vídeo',itemAddAnother:'Adicionar outro vídeo',itemPublish:'Publicar vídeos do módulo',emptyModules:'Nenhum módulo de vídeos cadastrado ainda.',emptyItems:'Nenhum vídeo publicado neste módulo ainda.',itemLabel:'Vídeo'},
};
const MODULE_TYPES = Object.keys(MODULE_META);
window._modules = {}; window._selectedModule = {};

async function loadAllModules(){
  for(const type of MODULE_TYPES){
    let list = await storageGetList(`${type}-modules`);
    if(!list.length && type==='quiz'){
      list = [{id:uid(), title:'Módulo inicial - Saúde e bem-estar', items:[
        {id:uid(), title:'Ansiedade antes da prova', topic:'Saúde Mental', question:'Qual técnica ajuda a reduzir a ansiedade antes de uma prova?', opts:['Respiração consciente','Assistir TV até tarde','Pular o café da manhã',''], correct:0, explanation:'Técnicas de respiração ajudam a acalmar o corpo e a mente antes de momentos de tensão.'},
        {id:uid(), title:'Caminhada diária', topic:'Movimento', question:'Quantos minutos de caminhada por dia já trazem benefícios para a saúde?', opts:['2 minutos','20 minutos','2 horas',''], correct:1, explanation:'Cerca de 20 minutos de caminhada já trazem benefícios comprovados ao corpo e à mente.'},
        {id:uid(), title:'Qualidade do sono', topic:'Sono', question:'O que ajuda a melhorar a qualidade do sono?', opts:['Usar o celular na cama','Manter rotina fixa de horários','Dormir em horários diferentes todo dia',''], correct:1, explanation:'Manter uma rotina fixa ajuda o corpo a regular o relógio biológico.'},
      ]}];
      await storageSetList('quiz-modules', list);
    }
    window._modules[type] = list;
    if(!window._selectedModule[type] && list.length) window._selectedModule[type] = list[0].id;
  }
}

function itemSubtitle(type,it){
  if(type==='quiz') return it.question||'';
  if(type==='atividades') return (it.due?'Entrega: '+it.due+' · ':'')+(it.desc||'Sem instruções');
  if(type==='videos') return it.desc||it.url||'';
  return it.desc||'';
}

function buildItemFieldsHtml(type){
  return MODULE_FIELDS[type].map(f=>{
    const id = `f-${type}-${f.key}`;
    const cls = 'admin-field'+(f.full?' full':'');
    if(f.type==='textarea') return `<div class="${cls}"><label>${f.label}</label><textarea id="${id}" placeholder="${escapeAttr(f.placeholder||'')}"></textarea></div>`;
    if(f.type==='select') return `<div class="${cls}"><label>${f.label}</label><select id="${id}">${f.options.map((o,i)=>`<option value="${i}">${o}</option>`).join('')}</select></div>`;
    if(f.type==='file') return `<div class="${cls}"><label>${f.label}</label><input id="${id}" type="file" accept="${escapeAttr(f.accept||'image/*')}"><div id="${id}-preview" class="thumbnail-field-help">Cole o link direto da imagem. Ex.: https://site.com/imagem.jpg</div></div>`;
    return `<div class="${cls}"><label>${f.label}</label><input id="${id}" type="text" placeholder="${escapeAttr(f.placeholder||'')}"></div>`;
  }).join('');
}
function renderItemsAdminHtml(type,mod){
  const meta = MODULE_META[type];
  const items = mod.items||[];
  if(!items.length) return `<div class="module-empty">${meta.emptyItems}</div>`;
  const compact = (type==='atividades' || type==='videos');
  const wrapper = compact ? 'module-content-grid' : '';
  const cards = items.map((it,idx)=>`
    <div class="content-item-card ${compact?'compact':''}">
      ${it.thumbnail?`<img src="${escapeAttr(it.thumbnail)}" class="content-thumb" alt="Thumbnail de ${escapeAttr(it.title||meta.itemLabel)}">`:''}
      <div class="${compact?'content-item-body':''}">
        <span class="ci-num">${meta.itemLabel} ${idx+1}</span>
        <h5>${escapeHtml(it.title||'')}${it.topic?` <span class="ci-tag" style="margin-left:4px;">${escapeHtml(it.topic)}</span>`:''}</h5>
        <p>${escapeHtml(itemSubtitle(type,it))}</p>
        <div class="admin-list-actions">
          <button class="btn-secondary btn-small" onclick="editItem('${type}','${mod.id}','${it.id}')">Editar</button>
          <button class="btn-danger" onclick="deleteItem('${type}','${mod.id}','${it.id}')">Excluir</button>
        </div>
      </div>
    </div>`).join('');
  return compact ? `<div class="${wrapper}">${cards}</div>` : cards;
}

function renderModuleAdmin(type){
  const host = document.getElementById('moduleAdmin-'+type); if(!host) return;
  const meta = MODULE_META[type];
  const modules = window._modules[type]||[];
  const selectedId = window._selectedModule[type];
  const selected = modules.find(m=>m.id===selectedId);
  host.innerHTML = `
    <div class="module-shell">
      <div class="module-side">
        <div class="admin-card">
          <h4>Módulos cadastrados</h4>
          <p class="module-count">${modules.length} módulo(s)</p>
          <div class="module-list">
            ${modules.length?modules.map(m=>`
              <div class="module-item-card ${m.id===selectedId?'selected':''}" onclick="selectModule('${type}','${m.id}')">
                <h5>${escapeHtml(m.title)}</h5>
                <div class="m-count">${(m.items||[]).length} item(ns)</div>
                <div class="module-item-actions">
                  <button class="btn-secondary btn-small" onclick="event.stopPropagation();renameModule('${type}','${m.id}')">Editar</button>
                  <button class="btn-danger" onclick="event.stopPropagation();deleteModule('${type}','${m.id}')">Excluir</button>
                </div>
              </div>`).join(''):`<div class="module-empty">${meta.emptyModules}</div>`}
          </div>
        </div>
        <div class="admin-card">
          <div class="module-eyebrow">Novo módulo</div>
          <h4>Criar ${meta.singular}</h4>
          <div class="admin-field"><label>Título do módulo</label><input id="newModuleTitle-${type}" placeholder="${escapeAttr(meta.modulePlaceholder)}" onkeydown="if(event.key==='Enter')createModule('${type}')"></div>
          <button class="btn-solid btn-small" style="width:100%;margin-top:10px;" onclick="createModule('${type}')">Criar módulo</button>
        </div>
      </div>
      <div class="module-main">
        <div class="admin-card">
          <div class="module-eyebrow">${meta.itemFormLabel}</div>
          <h4>${selected?('Publicar em '+escapeHtml(selected.title)):'Selecione um módulo'}</h4>
          <p class="module-help">${selected?'Cada item pode ter nome próprio e conteúdo. O formulário guarda rascunhos automaticamente, mas só conteúdos completos entram na área do aluno.':'Crie ou selecione um módulo ao lado para publicar conteúdo.'}</p>
          ${selected?`
            <input type="hidden" id="editingItemId-${type}">
            <div class="admin-form-grid">${buildItemFieldsHtml(type)}</div>
            <div class="admin-actions" style="margin-top:14px;">
              <button class="btn-secondary btn-small" onclick="addAnotherItem('${type}')">${meta.itemAddAnother}</button>
              <button class="btn-solid btn-small" onclick="publishItem('${type}')">${meta.itemPublish}</button>
            </div>`:''}
        </div>
        <div class="admin-card">
          <div class="module-eyebrow">Conteúdo atual</div>
          <h4>${selected?escapeHtml(selected.title):'—'}</h4>
          <div>${selected?renderItemsAdminHtml(type,selected):'<div class="module-empty">Selecione um módulo para ver o conteúdo publicado.</div>'}</div>
        </div>
      </div>
    </div>`;
}

function selectModule(type,id){ window._selectedModule[type]=id; renderModuleAdmin(type); }

async function createModule(type){
  const input = document.getElementById('newModuleTitle-'+type);
  const title = input.value.trim();
  if(!title){ showToast('Digite um título para o módulo'); return; }
  const mod = {id:uid(), title, items:[]};
  window._modules[type] = window._modules[type]||[];
  window._modules[type].push(mod);
  window._selectedModule[type] = mod.id;
  await storageSetList(`${type}-modules`, window._modules[type]);
  input.value = '';
  renderModuleAdmin(type); renderPublicModules(type); updateAdminStats();
  showToast('Módulo criado!');
}
async function renameModule(type,id){
  const mod=(window._modules[type]||[]).find(m=>m.id===id); if(!mod) return;
  const novo = prompt('Novo título do módulo:', mod.title);
  if(novo===null) return;
  const t = novo.trim(); if(!t) return;
  mod.title = t;
  await storageSetList(`${type}-modules`, window._modules[type]);
  renderModuleAdmin(type); renderPublicModules(type); updateAdminStats();
  showToast('Módulo atualizado!');
}
async function deleteModule(type,id){
  if(!confirm('Excluir este módulo e todo o seu conteúdo?')) return;
  window._modules[type] = (window._modules[type]||[]).filter(m=>m.id!==id);
  if(window._selectedModule[type]===id) window._selectedModule[type] = (window._modules[type][0]||{}).id || null;
  await storageSetList(`${type}-modules`, window._modules[type]);
  renderModuleAdmin(type); renderPublicModules(type); updateAdminStats();
  showToast('Módulo removido');
}

function readItemForm(type){
  const obj={};
  MODULE_FIELDS[type].forEach(f=>{
    const el = document.getElementById(`f-${type}-${f.key}`); if(!el) return;
    if(f.type==='select') obj[f.key]=Number(el.value);
    else obj[f.key]=el.value.trim();
  });
  return obj;
}
function clearItemForm(type){
  MODULE_FIELDS[type].forEach(f=>{
    const el = document.getElementById(`f-${type}-${f.key}`); if(!el) return;
    el.value = f.type==='select' ? '0' : '';
  });
  const hid = document.getElementById('editingItemId-'+type); if(hid) hid.value='';
  delete window._draftItemIds[type];
  storageRemoveValue(`${type}-draft`);
}
function buildItemObject(type,raw,id){
  if(type==='quiz') return {id, title:raw.title, topic:raw.topic, question:raw.question, opts:[raw.optA,raw.optB,raw.optC,raw.optD], correct:raw.correct||0, explanation:raw.explanation};
  if(type==='atividades') return {id, title:raw.title, topic:raw.topic, desc:raw.desc, due:raw.due, file:raw.file, thumbnail:raw.thumbnail||''};
  if(type==='videos') return {id, title:raw.title, topic:raw.topic, desc:raw.desc, url:raw.url, thumbnail:raw.thumbnail||''};
  return {id, title:raw.title, topic:raw.topic, desc:raw.desc, link:raw.link, due:raw.due, file:raw.file, url:raw.url};
}

function validateItemData(type, raw){
  const issues = [];
  if(!raw.title) issues.push('Preencha o nome ou título do conteúdo.');
  if(type==='quiz'){
    const opts = [raw.optA, raw.optB, raw.optC, raw.optD].filter(Boolean);
    if(!raw.question) issues.push('Adicione a pergunta principal do quiz.');
    if(opts.length < 2) issues.push('Cadastre pelo menos duas alternativas no quiz.');
    if(opts.length && Number(raw.correct||0) > opts.length-1) issues.push('A resposta correta precisa apontar para uma alternativa preenchida.');
  }
  if(type==='biblioteca' && !raw.desc && !raw.link) issues.push('Adicione uma descrição ou um link para o material.');
  if(type==='atividades' && !raw.desc) issues.push('Descreva as instruções da atividade.');
  if(type==='videos' && !raw.url) issues.push('Informe o link do vídeo.');
  return issues;
}

function saveCurrentItem(type){
  const mod = (window._modules[type]||[]).find(m=>m.id===window._selectedModule[type]);
  if(!mod){ showToast('Selecione um módulo primeiro'); return false; }
  const raw = readItemForm(type);
  const issues = validateItemData(type, raw);
  if(issues.length){ showToast(issues[0]); return false; }
  mod.items = mod.items || [];
  const editingId = document.getElementById('editingItemId-'+type).value;
  const item = buildItemObject(type, raw, editingId||uid());
  if(editingId){
    const idx = mod.items.findIndex(i=>i.id===editingId);
    if(idx>-1) mod.items[idx]=item;
  } else {
    mod.items.push(item);
  }
  return true;
}
async function addAnotherItem(type){
  if(!saveCurrentItem(type)) return;
  await storageSetList(`${type}-modules`, window._modules[type]);
  clearItemForm(type);
  renderModuleAdmin(type); renderPublicModules(type); updateAdminStats();
  showToast('Item adicionado! Continue preenchendo o próximo.');
}
async function publishItem(type){
  if(!saveCurrentItem(type)) return;
  await storageSetList(`${type}-modules`, window._modules[type]);
  clearItemForm(type);
  renderModuleAdmin(type); renderPublicModules(type); updateAdminStats();
  showToast('Conteúdo publicado!');
}
function editItem(type,moduleId,itemId){
  window._selectedModule[type]=moduleId;
  renderModuleAdmin(type);
  const mod=(window._modules[type]||[]).find(m=>m.id===moduleId); if(!mod) return;
  const it=mod.items.find(i=>i.id===itemId); if(!it) return;
  document.getElementById('editingItemId-'+type).value=itemId;
  if(type==='quiz'){
    document.getElementById(`f-${type}-title`).value=it.title||'';
    document.getElementById(`f-${type}-topic`).value=it.topic||'';
    document.getElementById(`f-${type}-question`).value=it.question||'';
    document.getElementById(`f-${type}-optA`).value=(it.opts||[])[0]||'';
    document.getElementById(`f-${type}-optB`).value=(it.opts||[])[1]||'';
    document.getElementById(`f-${type}-optC`).value=(it.opts||[])[2]||'';
    document.getElementById(`f-${type}-optD`).value=(it.opts||[])[3]||'';
    document.getElementById(`f-${type}-correct`).value=it.correct||0;
    document.getElementById(`f-${type}-explanation`).value=it.explanation||'';
  } else {
    MODULE_FIELDS[type].forEach(f=>{
      const el=document.getElementById(`f-${type}-${f.key}`); if(!el) return;
      if(f.type==='file'){
        el.value='';
        el.dataset.value=it[f.key]||'';
        updateThumbnailFieldPreview(type,f.key,it[f.key]||'');
      }else{
        el.value=it[f.key]||'';
      }
    });
  }
  const sec=document.getElementById('admin-sec-'+type); if(sec) window.scrollTo({top:sec.offsetTop-20,behavior:'smooth'});
}
async function deleteItem(type,moduleId,itemId){
  const mod=(window._modules[type]||[]).find(m=>m.id===moduleId); if(!mod) return;
  mod.items=(mod.items||[]).filter(i=>i.id!==itemId);
  await storageSetList(`${type}-modules`, window._modules[type]);
  renderModuleAdmin(type); renderPublicModules(type); updateAdminStats();
  showToast('Item removido');
}

/* ============ RENDERIZAÇÃO PÚBLICA (visão do estudante) ============ */
function renderPublicModules(type){
  if(type==='quiz') return renderQuizModulePicker();
  if(type==='biblioteca') return renderLibraryPublic();
  if(type==='atividades') return renderAtividadesPublic();
  if(type==='videos') return renderVideosPublic();
}
function renderAllPublicModules(){ MODULE_TYPES.forEach(renderPublicModules); }

function renderLibraryPublic(){
  const el = document.getElementById('libraryList'); if(!el) return;
  const modules = (window._modules.biblioteca||[]).filter(m=>(m.items||[]).length);
  if(!modules.length){ el.innerHTML = emptyStateMarkup('file','Nenhum material publicado ainda.<br>Volte em breve!'); return; }
  el.innerHTML = modules.map(m=>`
    <div class="module-public-block">
      <div class="module-public-head"><h3>${escapeHtml(m.title)}</h3><span class="m-badge">${m.items.length} material(is)</span></div>
      ${m.items.map(it=>`<div class="resource-item"><div class="resource-ico g-purple">📄</div><div style="flex:1;">${it.topic?`<span class="resource-tag">${escapeHtml(it.topic)}</span>`:''}<h4 style="margin-top:6px;">${escapeHtml(it.title)}</h4><p>${escapeHtml(it.desc||'')}</p>${it.link?`<a href="${/^https?:\/\//.test(it.link)?it.link:'#'}" target="_blank" style="font-size:.82rem;font-weight:700;color:var(--blue-dark);">🔗 ${escapeHtml(it.link)}</a>`:''}</div></div>`).join('')}
    </div>`).join('');
  updateHomeLibraryTeaser();
}
function updateHomeLibraryTeaser(){
  const allItems = (window._modules.biblioteca||[]).flatMap(m=>m.items||[]);
  const t=document.getElementById('homeLibTitle'), d=document.getElementById('homeLibDesc');
  if(allItems.length && t && d){
    const last = allItems[allItems.length-1];
    t.textContent = last.title;
    d.textContent = last.desc || 'Novo material disponível na biblioteca.';
  }
}

function renderAtividadesPublic(){
  const modules = (window._modules.atividades||[]);
  const grouped = document.getElementById('atividadesModulesView');
  if(!grouped) return;
  if(!modules.length){
    grouped.innerHTML=emptyStateMarkup('folder','Nenhuma atividade publicada no momento.<br>As tarefas enviadas pelos professores aparecerão aqui.');
    return;
  }
  const activeId = window._studentActivityModule || modules.find(m=>(m.items||[]).length)?.id || modules[0].id;
  const active = modules.find(m=>m.id===activeId) || modules[0];
  window._studentActivityModule = active.id;

  grouped.innerHTML=`
    <div class="student-module-shell">
      <aside class="student-module-sidebar">
        <div class="side-label">MÓDULOS</div>
        <div class="student-module-list">
          ${modules.map((m,i)=>`
            <button class="student-module-btn ${m.id===active.id?'active':''} ${!(m.items||[]).length?'locked':''}"
              ${!(m.items||[]).length?'disabled':''}
              onclick="selectStudentActivityModule('${m.id}')">
              <strong>${escapeHtml(m.title)}</strong>
              <span>${(m.items||[]).length} atividade(s) • ${i===0?'Liberado':'Disponível'}</span>
            </button>`).join('')}
        </div>
      </aside>
      <div class="student-module-main">
        <div class="student-module-top">
          <div>
            <span class="eyebrow">MÓDULO SELECIONADO</span>
            <h3>${escapeHtml(active.title)}</h3>
            <p>Realize as atividades na sequência. Cada etapa apresenta o conteúdo publicado pelo professor.</p>
          </div>
          <span class="student-module-badge">${(active.items||[]).length} atividade(s)</span>
        </div>
        <div class="student-stage-list">
          ${(active.items||[]).length ? (active.items||[]).map((it,i)=>`
            <article class="student-stage ${i===0?'current':''} ${it.thumbnail?'':'no-thumb'}">
              ${it.thumbnail?`<img src="${escapeAttr(it.thumbnail)}" class="content-thumb" alt="Thumbnail de ${escapeAttr(it.title||`Atividade ${i+1}`)}">`:''}
              <div class="student-stage-head">
                <div class="student-stage-num">${i+1}</div>
                <div style="flex:1;min-width:0;">
                  <h4>${escapeHtml(it.title||`Atividade ${i+1}`)}</h4>
                  <p>${escapeHtml(it.desc||it.topic||'Atividade publicada pelo professor.')}</p>
                  <div class="student-stage-meta">
                    ${it.topic?`<span class="student-tag">${escapeHtml(it.topic)}</span>`:''}
                    ${it.due?`<span class="student-tag">Entrega: ${escapeHtml(it.due)}</span>`:''}
                    <span class="student-stage-status ${i===0?'available':'sequence'}">${i===0?'Disponível':'Na sequência'}</span>
                  </div>
                  ${it.file?`<div style="margin-top:9px;"><a href="${/^https?:\/\//.test(it.file)?it.file:'#'}" target="_blank" rel="noopener" style="font-size:.72rem;font-weight:800;color:var(--blue-dark);">Abrir anexo / material</a></div>`:''}
                </div>
              </div>
            </article>`).join('') : '<div class="module-empty">Este módulo ainda não possui atividades publicadas.</div>'}
        </div>
      </div>
    </div>`;
}

function selectStudentActivityModule(id){
  window._studentActivityModule=id;
  renderAtividadesPublic();
}

function videoEmbedUrl(url){
  if(!url) return null;
  let m = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([\w-]{6,})/);
  if(m) return `https://www.youtube.com/embed/${m[1]}`;
  m = url.match(/vimeo\.com\/(\d+)/);
  if(m) return `https://player.vimeo.com/video/${m[1]}`;
  return null;
}
function renderVideosPublic(){
  const el = document.getElementById('videosModulesView'); if(!el) return;
  const modules = (window._modules.videos||[]).filter(m=>(m.items||[]).length);
  if(!modules.length){ el.innerHTML = emptyStateMarkup('video','Nenhum vídeo publicado ainda.<br>Volte em breve!'); return; }
  const activeId = window._studentVideoModule || modules[0].id;
  const active = modules.find(m=>m.id===activeId) || modules[0];
  window._studentVideoModule = active.id;

  el.innerHTML = `
    <div class="student-module-shell">
      <aside class="student-module-sidebar">
        <div class="side-label">MÓDULOS</div>
        <div class="student-module-list">
          ${modules.map((m,i)=>`
            <button class="student-module-btn ${m.id===active.id?'active':''}" onclick="selectStudentVideoModule('${m.id}')">
              <strong>${escapeHtml(m.title)}</strong>
              <span>${(m.items||[]).length} vídeo(s) • ${i===0?'Liberado':'Disponível'}</span>
            </button>`).join('')}
        </div>
      </aside>
      <div class="student-module-main">
        <div class="student-module-top">
          <div>
            <span class="eyebrow">MÓDULO SELECIONADO</span>
            <h3>${escapeHtml(active.title)}</h3>
            <p>Assista aos vídeos na sequência da trilha. Cada vídeo apresenta o conteúdo publicado pelo professor.</p>
          </div>
          <span class="student-module-badge">${(active.items||[]).length} vídeo(s)</span>
        </div>
        <div class="student-stage-list">
          ${(active.items||[]).map((it,i)=>{
            const embed = videoEmbedUrl(it.url);
            return `<article class="student-stage ${i===0?'current':''} ${it.thumbnail?'':'no-thumb'}">
              ${it.thumbnail?`<img src="${escapeAttr(it.thumbnail)}" class="content-thumb" alt="Thumbnail de ${escapeAttr(it.title||'Vídeo')}">`:''}
              <div class="student-stage-head">
                <div class="student-stage-num">${i+1}</div>
                <div style="flex:1;min-width:0;">
                  <h4>${escapeHtml(it.title||`Vídeo ${i+1}`)}</h4>
                  <p>${escapeHtml(it.desc||it.topic||'Vídeo publicado pelo professor.')}</p>
                  <div class="student-stage-meta">
                    ${it.topic?`<span class="student-tag">${escapeHtml(it.topic)}</span>`:''}
                    <span class="student-stage-status ${i===0?'available':'sequence'}">${i===0?'Disponível':'Na sequência'}</span>
                  </div>
                  ${embed?`<div class="video-embed" style="margin-top:10px;"><iframe src="${embed}" allowfullscreen title="${escapeAttr(it.title||'Vídeo')}"></iframe></div>`:''}
                  ${(!embed && it.url)?`<div style="margin-top:9px;"><a href="${escapeAttr(it.url)}" target="_blank" rel="noopener" style="font-size:.72rem;font-weight:800;color:var(--blue-dark);">Assistir vídeo</a></div>`:''}
                </div>
              </div>
            </article>`;
          }).join('')}
        </div>
      </div>
    </div>`;
}
function selectStudentVideoModule(id){
  window._studentVideoModule=id;
  renderVideosPublic();
}

/* ================= EDITOR DE PÁGINAS ================= */
const PAGE_EDITABLE_SELECTORS=['.eyebrow','.section-title','.section-sub','h1','h2','h3','h4','h5','p','li','strong','button','.resource-tag','.grad-cta'];
const pageEditorMeta={
  inicio:{label:'Início',title:'Página inicial'},sobre:{label:'Sobre o Projeto',title:'Sobre o projeto'},movimento:{label:'Movimento e Bem-estar',title:'Movimento e bem-estar'},'espaco-estudante':{label:'Espaço do Estudante',title:'Espaço do estudante'},biblioteca:{label:'Biblioteca',title:'Biblioteca'},quiz:{label:'Quiz',title:'Quiz'},atividades:{label:'Atividades',title:'Atividades'},videos:{label:'Vídeos',title:'Vídeos'}};
let pageEdits={};
async function loadPageEdits(){try{const value=await storageGetValue('page-edits');pageEdits=value?JSON.parse(value):{};}catch(e){pageEdits={};}applyPageEdits();}
async function savePageEdits(){return await storageSetValue('page-edits',JSON.stringify(pageEdits));}
function applyPageEdits(){Object.keys(pageEdits).forEach(id=>{const page=document.getElementById('page-'+id);if(!page)return;Object.entries(pageEdits[id]||{}).forEach(([key,val])=>{if(key==='_extra')return;const el=page.querySelector(`[data-editor-key="${CSS.escape(key)}"]`);if(el)el.textContent=val;});if(pageEdits[id]&&pageEdits[id]._extra){const box=document.createElement('div');box.className='teacher-extra-content';box.innerHTML=pageEdits[id]._extra;page.appendChild(box);}});if(pageEdits.inicio){const hero=document.getElementById('heroBlock');if(hero){Object.entries(pageEdits.inicio).forEach(([key,val])=>{if(key.startsWith('hero-')){const el=hero.querySelector(`[data-editor-key="${CSS.escape(key)}"]`);if(el)el.textContent=val;}});}}}
function setupEditorKeys(){Object.keys(pageEditorMeta).forEach(id=>{const page=document.getElementById('page-'+id);if(!page)return;let n=0;page.querySelectorAll(PAGE_EDITABLE_SELECTORS.join(',')).forEach(el=>{if(!el.textContent.trim()||el.closest('#adminArea'))return;if(!el.dataset.editorKey)el.dataset.editorKey='e'+(++n);});if(id==='inicio'){const hero=document.getElementById('heroBlock');if(hero)hero.querySelectorAll('h1,p').forEach(el=>{if(!el.dataset.editorKey)el.dataset.editorKey='hero-'+(++n);});}});}
function buildPageEditorOptions(){const sel=document.getElementById('pageEditorSelect');sel.innerHTML=Object.entries(pageEditorMeta).map(([id,m])=>`<option value="${id}">${m.label}</option>`).join('');loadPageEditor();}
function loadPageEditor(){const id=document.getElementById('pageEditorSelect').value,page=document.getElementById('page-'+id),wrap=document.getElementById('pageEditorFields');if(!page||!wrap)return;wrap.innerHTML='';let n=0;const nodes=[...page.querySelectorAll(PAGE_EDITABLE_SELECTORS.join(','))].filter(el=>el.textContent.trim()&&!el.closest('#adminArea'));if(id==='inicio'){const hero=document.getElementById('heroBlock');if(hero)nodes.push(...hero.querySelectorAll('h1,p'));}nodes.forEach(el=>{const key=el.dataset.editorKey||('e'+(++n));el.dataset.editorKey=key;const row=document.createElement('div');row.className='editor-row';const label=document.createElement('label');label.textContent=(el.closest('#heroBlock')?'Home / ':'')+el.tagName.toLowerCase()+' · '+el.textContent.trim().slice(0,28);const input=document.createElement('input');input.value=el.textContent.trim();input.dataset.key=key;row.appendChild(label);row.appendChild(input);wrap.appendChild(row);});document.getElementById('pageExtraHtml').value=(pageEdits[id]&&pageEdits[id]._extra)||'';}
async function savePageEditor(){const id=document.getElementById('pageEditorSelect').value,fields=document.querySelectorAll('#pageEditorFields input[data-key]');pageEdits[id]=pageEdits[id]||{};fields.forEach(input=>{pageEdits[id][input.dataset.key]=input.value;let el=document.querySelector(`#page-${id} [data-editor-key="${CSS.escape(input.dataset.key)}"]`);if(!el&&id==='inicio')el=document.querySelector(`#heroBlock [data-editor-key="${CSS.escape(input.dataset.key)}"]`);if(el)el.textContent=input.value;});await savePageEdits();showToast('Alterações da página salvas!');}
async function savePageExtra(){const id=document.getElementById('pageEditorSelect').value,html=document.getElementById('pageExtraHtml').value.trim();if(!html){showToast('Digite um bloco HTML antes de adicionar');return;}pageEdits[id]=pageEdits[id]||{};pageEdits[id]._extra=html;const page=document.getElementById('page-'+id);const old=page.querySelector('.teacher-extra-content');if(old)old.remove();const box=document.createElement('div');box.className='teacher-extra-content';box.innerHTML=html;page.appendChild(box);await savePageEdits();showToast('Bloco adicional salvo!');}
function resetPageEditor(){const id=document.getElementById('pageEditorSelect').value;delete pageEdits[id];savePageEdits();location.reload();}

/* ================= SALVAMENTO AUTOMÁTICO DO PROFESSOR ================= */
let autoSaveTimers = {};
window._draftItemIds = window._draftItemIds || {};

function scheduleAutoSave(key, fn, delay=650){
  clearTimeout(autoSaveTimers[key]);
  autoSaveTimers[key]=setTimeout(async()=>{try{await fn();}catch(e){console.error('autosave',e);}},delay);
}

async function autoSavePageField(input){
  const id=document.getElementById('pageEditorSelect')?.value;
  if(!id || !input?.dataset?.key) return;
  pageEdits[id]=pageEdits[id]||{};
  pageEdits[id][input.dataset.key]=input.value;
  let el=document.querySelector(`#page-${id} [data-editor-key="${CSS.escape(input.dataset.key)}"]`);
  if(!el && id==='inicio') el=document.querySelector(`#heroBlock [data-editor-key="${CSS.escape(input.dataset.key)}"]`);
  if(el) el.textContent=input.value;
  const ok=await savePageEdits();
  if(ok) showToast('Alteração salva automaticamente.');
}

async function autoSavePageExtra(){
  const id=document.getElementById('pageEditorSelect')?.value;
  const html=document.getElementById('pageExtraHtml')?.value.trim()||'';
  if(!id) return;
  pageEdits[id]=pageEdits[id]||{};
  pageEdits[id]._extra=html;
  const page=document.getElementById('page-'+id);
  if(page){
    const old=page.querySelector('.teacher-extra-content'); if(old) old.remove();
    if(html){
      const box=document.createElement('div'); box.className='teacher-extra-content'; box.innerHTML=html; page.appendChild(box);
    }
  }
  await savePageEdits();
  showToast('Conteúdo adicional salvo automaticamente.');
}

async function autoSaveModuleForm(type){
  const mod=(window._modules[type]||[]).find(m=>m.id===window._selectedModule[type]);
  if(!mod) return;
  const raw=readItemForm(type);
  const issues = validateItemData(type, raw);
  await storageSetValue(`${type}-draft`, JSON.stringify(raw));
  if(!raw.title || issues.length) {
    return;
  }
  const hidden=document.getElementById('editingItemId-'+type);
  let id=hidden?.value || window._draftItemIds[type] || '';
  const item=buildItemObject(type,raw,id||uid());
  if(!id){
    id=item.id;
    window._draftItemIds[type]=id;
    if(hidden) hidden.value=id;
    mod.items=mod.items||[];
    mod.items.push(item);
  }else{
    const idx=(mod.items||[]).findIndex(i=>i.id===id);
    if(idx>=0) mod.items[idx]=item; else (mod.items=mod.items||[]).push(item);
  }
  const ok=await storageSetList(`${type}-modules`,window._modules[type]);
  renderPublicModules(type);
  updateAdminStats();
  const host=document.getElementById('moduleAdmin-'+type);
  if(host){
    const selected=window._selectedModule[type];
    const current=(window._modules[type]||[]).find(m=>m.id===selected);
    const box=host.querySelector('.module-main .admin-card:nth-child(2) > div');
    if(box && current) box.innerHTML=renderItemsAdminHtml(type,current);
  }
}

function resizeImageToDataUrl(file, maxWidth=1280, quality=.82){
  return new Promise((resolve,reject)=>{
    if(!file){ resolve(''); return; }
    if(!file.type || !file.type.startsWith('image/')){ reject(new Error('Selecione uma imagem válida.')); return; }
    const reader=new FileReader();
    reader.onload=()=>{
      const img=new Image();
      img.onload=()=>{
        const scale=Math.min(1,maxWidth/img.width);
        const w=Math.max(1,Math.round(img.width*scale));
        const h=Math.max(1,Math.round(img.height*scale));
        const canvas=document.createElement('canvas');
        canvas.width=w; canvas.height=h;
        const ctx=canvas.getContext('2d');
        ctx.drawImage(img,0,0,w,h);
        resolve(canvas.toDataURL('image/jpeg',quality));
      };
      img.onerror=()=>reject(new Error('Não foi possível ler a imagem.'));
      img.src=reader.result;
    };
    reader.onerror=()=>reject(new Error('Não foi possível carregar a imagem.'));
    reader.readAsDataURL(file);
  });
}

function updateThumbnailFieldPreview(type,key,value){
  const preview=document.getElementById(`f-${type}-${key}-preview`);
  if(!preview) return;
  if(value){
    preview.innerHTML=`<img src="${escapeAttr(value)}" class="content-thumb" style="margin-top:8px;max-height:180px;" alt="Prévia da thumbnail">`;
  }else{
    preview.textContent='Cole o link direto da imagem. Ex.: https://site.com/imagem.jpg';
  }
}


function setupThumbnailInputs(type){
  MODULE_FIELDS[type].filter(f=>f.type==='file').forEach(f=>{
    const input=document.getElementById(`f-${type}-${f.key}`);
    if(input && !input.dataset.thumbBound){
      input.dataset.thumbBound='1';
      input.addEventListener('change',()=>handleThumbnailInput(type,f.key,input));
    }
  });
}

function setupAutoSave(){
  document.addEventListener('input', e=>{
    const t=e.target;
    if(t.matches('#pageEditorFields input[data-key]')){
      scheduleAutoSave('page-'+t.dataset.key,()=>autoSavePageField(t));
    }else if(t.id==='pageExtraHtml'){
      scheduleAutoSave('page-extra',autoSavePageExtra);
    }else if(t.id && t.id.startsWith('f-')){
      const type=t.id.split('-')[1];
      if(MODULE_TYPES.includes(type)) scheduleAutoSave('module-'+type,()=>autoSaveModuleForm(type));
    }else if(['siteNameConfig','siteSubConfig','footerDescConfig'].includes(t.id)){
      scheduleAutoSave('site-config',()=>saveSiteConfig(false));
    }else if(t.id==='challengeText'){
      scheduleAutoSave('challenge-draft',async()=>{
        const value=t.value.trim();
        await storageSetValue('challenge-draft',value);
        if(value.length>=5){
          const hidden=document.getElementById('editingChallengeId');
          if(hidden && hidden.value){
            const item=(window._challenges||[]).find(x=>x.id===hidden.value);
            if(item){ item.text=value; await storageSetList('week-challenges',window._challenges); renderChallenges(); renderChallengeAdmin(); }
          }else{
            const item={id:uid(),text:value};
            window._challenges=window._challenges||[];
            window._challenges.push(item);
            if(hidden) hidden.value=item.id;
            document.getElementById('challengeFormTitle').textContent='Editar desafio';
            document.getElementById('challengeSaveBtn').textContent='Salvo automaticamente';
            await storageSetList('week-challenges',window._challenges);
            renderChallenges(); renderChallengeAdmin(); updateAdminStats();
          }
          showToast('Desafio salvo automaticamente e publicado para o aluno.');
        }else{
          showToast('Rascunho salvo automaticamente.');
        }
      });
    }
  });

  document.addEventListener('change', e=>{
    const t=e.target;
    if(t.matches('#pageEditorFields input[data-key]')){
      scheduleAutoSave('page-'+t.dataset.key,()=>autoSavePageField(t),100);
    }else if(t.id && t.id.startsWith('f-')){
      const type=t.id.split('-')[1];
      if(MODULE_TYPES.includes(type)) scheduleAutoSave('module-'+type,()=>autoSaveModuleForm(type),100);
    }
  });

  window.addEventListener('beforeunload',()=>{
    try{
      Object.values(autoSaveTimers).forEach(clearTimeout);
    }catch(e){}
  });

  // Criação automática de módulos: basta digitar o título e sair do campo.
  document.addEventListener('blur', e=>{
    const t=e.target;
    if(t.id && t.id.startsWith('newModuleTitle-')){
      const type=t.id.replace('newModuleTitle-','');
      if(MODULE_TYPES.includes(type) && t.value.trim()) scheduleAutoSave('new-module-'+type,()=>autoCreateModule(type),100);
    }
  },true);
}

async function autoCreateModule(type){
  const input=document.getElementById('newModuleTitle-'+type);
  if(!input || !input.value.trim()) return;
  const title=input.value.trim();
  const mod={id:uid(),title,items:[]};
  window._modules[type]=window._modules[type]||[];
  window._modules[type].push(mod);
  window._selectedModule[type]=mod.id;
  await storageSetList(`${type}-modules`,window._modules[type]);
  input.value='';
  renderModuleAdmin(type); renderPublicModules(type); updateAdminStats();
  showToast('Módulo criado e salvo automaticamente.');
}

/* ================= ADMIN DASHBOARD ================= */
function openAdminSection(id){document.querySelectorAll('.admin-section').forEach(x=>x.classList.remove('active'));const sec=document.getElementById('admin-sec-'+id);if(sec)sec.classList.add('active');document.querySelectorAll('.admin-nav-btn[data-admin-section]').forEach(x=>x.classList.toggle('active',x.dataset.adminSection===id));const titles={dashboard:['Painel do Professor','Visão geral do portal'],paginas:['Páginas do site','Edite textos e conteúdos sem alterar as funções'],atividades:['Atividades','Crie módulos e publique tarefas organizadas por assunto'],desafios:['Desafios da Semana','Adicione e edite os desafios do pilar Movimento e Bem-estar'],biblioteca:['Biblioteca','Crie módulos e publique materiais organizados por assunto'],quiz:['Quiz','Crie módulos de quiz e publique perguntas por assunto'],videos:['Vídeos','Crie módulos e publique vídeos organizados por assunto'],mensagens:['Mensagens e Feedback','Acompanhe o retorno dos estudantes'],config:['Configurações','Ajustes gerais do portal']};document.getElementById('adminPageTitle').textContent=titles[id][0];document.getElementById('adminPageSubtitle').textContent=titles[id][1];if(id==='paginas'){buildPageEditorOptions();loadPageEditor();}if(MODULE_TYPES.includes(id))renderModuleAdmin(id);if(id==='mensagens'){renderContactAdmin();renderFeedbackAdmin();}if(id==='dashboard')updateAdminStats();}
function countModuleItems(type){return (window._modules[type]||[]).reduce((sum,m)=>sum+(m.items||[]).length,0);}
async function updateAdminStats(){document.getElementById('statActivities').textContent=countModuleItems('atividades');document.getElementById('statLibrary').textContent=countModuleItems('biblioteca');document.getElementById('statQuiz').textContent=countModuleItems('quiz');document.getElementById('statVideos').textContent=countModuleItems('videos');document.getElementById('statPages').textContent=Object.keys(pageEditorMeta).length;const msgs=await storageGetList('contact-messages');document.getElementById('statMessages').textContent=msgs.length;}
async function saveSiteConfig(showMessage=true){const name=document.getElementById('siteNameConfig').value.trim()||'Movimentamente',sub=document.getElementById('siteSubConfig').value.trim(),foot=document.getElementById('footerDescConfig').value.trim();await storageSetValue('site-config',JSON.stringify({name,sub,foot}));document.querySelector('.site-brand-name').textContent=name;document.querySelector('.site-brand-sub').textContent=sub;document.querySelectorAll('.fcol p').forEach(p=>{if(p.textContent.includes('Portal educativo')||p.dataset.footerConfig==='1'){p.dataset.footerConfig='1';p.textContent=foot;}});if(showMessage)showToast('Configurações salvas automaticamente!');}
async function loadSiteConfig(){try{const value=await storageGetValue('site-config');if(!value)return;const c=JSON.parse(value);if(c.name)document.querySelector('.site-brand-name').textContent=c.name;if(c.sub)document.querySelector('.site-brand-sub').textContent=c.sub;if(c.foot)document.querySelectorAll('.fcol p').forEach(p=>{if(p.textContent.includes('Portal educativo')||p.dataset.footerConfig==='1'){p.dataset.footerConfig='1';p.textContent=c.foot;}});document.getElementById('siteNameConfig').value=c.name||'Movimentamente';document.getElementById('siteSubConfig').value=c.sub||'Educação • Saúde • Movimento';document.getElementById('footerDescConfig').value=c.foot||'';}catch(e){}}

/* ================= PROFESSOR LOGIN ================= */
async function doLogin(){
  if(teacherLoginPending) return;
  const input = document.getElementById('profPass');
  const error = document.getElementById('loginErr');
  const val = input.value.trim();
  error.textContent = '';
  if(!val){
    error.textContent = 'Digite a senha para continuar.';
    return;
  }

  setTeacherLoginBusy(true);
  try{
    const ok = await verifyTeacherPassword(val);
    if(!ok){
      error.textContent = 'Senha incorreta. Tente novamente.';
      return;
    }
    teacherSessionPassword = val;
    isTeacher = true;
    document.getElementById('loginArea').style.display = 'none';
    document.getElementById('adminArea').style.display = 'block';
    let recoveredSharedKeys = 0;
    if(teacherAuthMode === 'supabase'){
      recoveredSharedKeys = await syncMissingSharedKeysFromLocal();
    }
    setTeacherEntryState();
    openAdminSection('dashboard');
    updateAdminStats();
    showToast(
      recoveredSharedKeys > 0
        ? 'Conteúdos locais foram sincronizados para todos. Atualize o site no outro aparelho.'
        : teacherAuthMode === 'supabase'
        ? 'Bem-vindo(a) ao painel do professor!'
        : 'Painel liberado neste navegador. Rode o SQL do Supabase para compartilhar com todos.'
    );
  }catch(e){
    console.error('teacher login error', e);
    error.textContent = 'Não foi possível validar o acesso agora. Tente novamente.';
  }finally{
    setTeacherLoginBusy(false);
  }
}
function doLogout(){isTeacher=false;teacherSessionPassword='';teacherAuthMode='local';document.getElementById('loginArea').style.display='block';document.getElementById('adminArea').style.display='none';document.getElementById('profPass').value='';document.getElementById('loginErr').textContent='';resetTeacherPasswordVisibility();setTeacherLoginBusy(false);setTeacherEntryState();showToast('Sessão encerrada');}

/* ================= UTIL ================= */
function escapeAttr(str){ return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = str||'';
  return d.innerHTML;
}

/* ============================================================
   MOVIMENTAMENTE CORE BACKEND v2 — arquitetura inspirada no Cultiva+
   Mantém compatibilidade com os módulos antigos e acrescenta:
   - banco único persistente (nuvem quando disponível + localStorage)
   - perfis de estudantes
   - progresso individual
   - desbloqueio sequencial por módulo/atividade
   - tentativas de quiz
   - métricas para o professor
   - migração automática do conteúdo já cadastrado
   ============================================================ */
(function installMovimentamenteCoreBackend(){
  const LEGACY_GET_VALUE = storageGetValue;
  const LEGACY_SET_VALUE = storageSetValue;
  const LEGACY_GET_LIST = storageGetList;
  const LEGACY_SET_LIST = storageSetList;
  const CORE_KEY = 'core-database-v2';
  const CURRENT_STUDENT_KEY = 'current-student-id';
  const CORE_VERSION = 2;
  let coreDb = null;

  const coreEmpty = () => ({
    version: CORE_VERSION,
    modules: { quiz: [], biblioteca: [], atividades: [], videos: [] },
    students: [],
    quizAttempts: [],
    activityEvents: []
  });

  function normalizeStudent(s){
    return {
      id: s.id || uid(),
      nome: s.nome || 'Estudante deste dispositivo',
      comunidade: s.comunidade || 'Não informada',
      completed: {
        atividades: Array.isArray(s.completed?.atividades) ? s.completed.atividades : (Array.isArray(s.completedActivities) ? s.completedActivities : []),
        videos: Array.isArray(s.completed?.videos) ? s.completed.videos : (Array.isArray(s.watchedVideos) ? s.watchedVideos : []),
        quiz: Array.isArray(s.completed?.quiz) ? s.completed.quiz : []
      },
      quizAttempts: Array.isArray(s.quizAttempts) ? s.quizAttempts : [],
      feedbacks: Number(s.feedbacks || 0),
      ultimoAcesso: s.ultimoAcesso || new Date().toISOString()
    };
  }

  function normalizeModule(mod, category){
    const m = mod || {};
    const items = Array.isArray(m.items) ? m.items : (Array.isArray(m.atividades) ? m.atividades : []);
    return {
      id: m.id || uid(),
      title: m.title || m.titulo || `Módulo ${category}`,
      titulo: m.titulo || m.title || `Módulo ${category}`,
      difficulty: m.difficulty || m.dificuldade || (category==='exercicios' ? 'facil' : ''),
      dificuldade: m.dificuldade || m.difficulty || '',
      items: items.map((it, index) => normalizeItem(it, category, index)),
      atividades: items.map((it, index) => normalizeItem(it, category, index))
    };
  }

  function normalizeItem(it, category, index){
    const x = it || {};
    const opts = x.opts || x.opcoes || [];
    const item = {
      ...x,
      id: x.id || uid(),
      ordem: Number(x.ordem || x.num || index + 1) || index + 1,
      title: x.title || x.titulo || `${category==='quiz'?'Pergunta':'Atividade'} ${index+1}`,
      topic: x.topic || x.subcategoria || '',
      desc: x.desc || x.conteudo_resumo || x.enunciado || '',
      thumbnail: x.thumbnail || x.capa_url || '',
      file: x.file || '',
      due: x.due || ''
    };
    if(category === 'quiz'){
      item.opts = opts.length ? opts : [x.opcaoA||'',x.opcaoB||'',x.opcaoC||'',x.opcaoD||''];
      item.correct = Number.isFinite(Number(x.correct)) ? Number(x.correct) :
        Math.max(0, item.opts.indexOf(x.resposta_correta));
      item.question = x.question || x.pergunta || item.desc || '';
      item.explanation = x.explanation || x.explicacao || '';
    }
    if(category === 'videos'){
      item.url = x.url || x.video_url || '';
      item.desc = x.desc || '';
    }
    if(category === 'atividades'){
      item.desc = x.desc || x.instrucoes || x.description || '';
      item.file = x.file || x.link || '';
    }
    return item;
  }

  function normalizeDb(db){
    const safe = db && typeof db === 'object' ? db : coreEmpty();
    safe.version = CORE_VERSION;
    safe.modules ||= {quiz:[],biblioteca:[],atividades:[],videos:[]};
    ['quiz','biblioteca','atividades','videos'].forEach(type=>{
      safe.modules[type] = (safe.modules[type] || []).map(m=>{
        const nm = normalizeModule(m,type);
        nm.items = nm.items.map((it,i)=>normalizeItem(it,type,i));
        nm.atividades = nm.items;
        return nm;
      });
    });
    safe.students = (safe.students || []).map(normalizeStudent);
    safe.quizAttempts ||= [];
    safe.activityEvents ||= [];
    return safe;
  }

  async function saveCoreDb(){
    if(!coreDb) return false;
    const payload = JSON.stringify(coreDb);
    return await LEGACY_SET_VALUE(CORE_KEY, payload);
  }

  function syncPublicArrays(){
    window._modules = window._modules || {};
    ['quiz','biblioteca','atividades','videos'].forEach(type=>{
      window._modules[type] = coreDb.modules[type];
      window._modules[type].forEach(m=>{
        m.items = m.items || m.atividades || [];
        m.atividades = m.items;
      });
      if(!window._selectedModule[type] || !window._modules[type].some(m=>m.id===window._selectedModule[type])){
        window._selectedModule[type] = window._modules[type][0]?.id || null;
      }
    });
  }

  async function migrateLegacy(){
    const db = coreEmpty();
    for(const type of ['quiz','biblioteca','atividades','videos']){
      const old = await LEGACY_GET_LIST(`${type}-modules`);
      db.modules[type] = (old || []).map(m=>normalizeModule(m,type));
    }
    // Aproveita o eventual aluno local já existente, sem apagar conteúdo.
    const storedStudent = await LEGACY_GET_VALUE(CURRENT_STUDENT_KEY);
    if(storedStudent){
      db.students.push(normalizeStudent({id:storedStudent,nome:'Estudante deste dispositivo'}));
    }
    return db;
  }

  async function loadCore(){
    // O carregamento é feito por MERGE. Nunca confiamos somente no
    // armazenamento compartilhado, porque ele pode retornar vazio durante
    // um refresh. O cache local e os dados legados entram como fontes de
    // recuperação e são combinados sem duplicar módulos/itens.
    let remoteDb = null;
    let localDb = null;

    try{
      const raw = await LEGACY_GET_VALUE(CORE_KEY);
      if(raw && String(raw).trim()) remoteDb = JSON.parse(raw);
    }catch(e){ remoteDb = null; }

    try{
      const rawLocal = localStorage.getItem(STORAGE_PREFIX + CORE_KEY);
      if(rawLocal && String(rawLocal).trim()) localDb = JSON.parse(rawLocal);
    }catch(e){ localDb = null; }

    const legacyDb = await migrateLegacy();
    const sources = [localDb, remoteDb, legacyDb].filter(Boolean).map(normalizeDb);
    const merged = coreEmpty();

    // Mantém o conteúdo mais completo entre as fontes.
    const mergeModules = (type) => {
      const byId = new Map();
      for(const source of sources){
        for(const mod of (source.modules?.[type] || [])){
          const normalized = normalizeModule(mod,type);
          const existing = byId.get(normalized.id);
          if(!existing){
            byId.set(normalized.id, normalized);
          }else{
            // Se a mesma versão existe em mais de uma fonte, preserva a que
            // possui mais itens. Depois combina itens ausentes pelo id.
            const itemMap = new Map((existing.items||[]).map(it=>[it.id,it]));
            for(const it of (normalized.items||[])) itemMap.set(it.id,it);
            existing.items = [...itemMap.values()];
            existing.atividades = existing.items;
            if(!existing.title && normalized.title) existing.title = normalized.title;
          }
        }
      }
      return [...byId.values()];
    };

    for(const type of ['quiz','biblioteca','atividades','videos']){
      merged.modules[type] = mergeModules(type);
    }

    // Recupera também caches específicos antigos, caso o banco central tenha
    // sido criado antes desta versão.
    for(const type of ['quiz','biblioteca','atividades','videos']){
      try{
        const raw = localStorage.getItem(STORAGE_PREFIX + `${type}-modules`);
        if(!raw) continue;
        const cached = JSON.parse(raw);
        if(!Array.isArray(cached)) continue;
        const map = new Map((merged.modules[type]||[]).map(m=>[m.id,m]));
        cached.forEach(m=>{
          const nm = normalizeModule(m,type);
          const existing = map.get(nm.id);
          if(!existing) map.set(nm.id,nm);
          else{
            const items = new Map((existing.items||[]).map(it=>[it.id,it]));
            (nm.items||[]).forEach(it=>items.set(it.id,it));
            existing.items=[...items.values()];
            existing.atividades=existing.items;
          }
        });
        merged.modules[type]=[...map.values()];
      }catch(e){}
    }

    // Preserva estudantes e progresso de qualquer fonte disponível.
    const studentsById = new Map();
    for(const source of sources){
      for(const student of (source.students||[])){
        const ns = normalizeStudent(student);
        const old = studentsById.get(ns.id);
        if(!old){ studentsById.set(ns.id,ns); continue; }
        old.completed.atividades=[...new Set([...(old.completed.atividades||[]),...(ns.completed.atividades||[])])];
        old.completed.videos=[...new Set([...(old.completed.videos||[]),...(ns.completed.videos||[])])];
        old.completed.quiz=[...new Set([...(old.completed.quiz||[]),...(ns.completed.quiz||[])])];
        old.quizAttempts=[...(old.quizAttempts||[]),...(ns.quizAttempts||[])];
        if(ns.ultimoAcesso && (!old.ultimoAcesso || ns.ultimoAcesso>old.ultimoAcesso)) old.ultimoAcesso=ns.ultimoAcesso;
      }
    }
    merged.students=[...studentsById.values()];
    merged.quizAttempts=sources.flatMap(x=>x.quizAttempts||[]);
    merged.activityEvents=sources.flatMap(x=>x.activityEvents||[]);
    coreDb=normalizeDb(merged);

    const storedCurrentStudent = await LEGACY_GET_VALUE(CURRENT_STUDENT_KEY);
    if(!coreDb.students.length){
      const student=normalizeStudent({id:uid(),nome:'Estudante deste dispositivo',comunidade:'Não informada'});
      coreDb.students.push(student);
      window._currentStudentId=student.id;
    }else if(storedCurrentStudent && coreDb.students.some(s=>s.id===storedCurrentStudent)){
      window._currentStudentId=storedCurrentStudent;
    }else{
      window._currentStudentId=coreDb.students[0].id;
    }

    syncPublicArrays();

    // Salva o MERGE localmente primeiro. Só depois tenta sincronizar com a
    // camada compartilhada. Assim um refresh nunca transforma conteúdo em []
    // por causa de uma resposta vazia da nuvem.
    try{
      localStorage.setItem(STORAGE_PREFIX + CORE_KEY, JSON.stringify(coreDb));
      for(const type of ['quiz','biblioteca','atividades','videos']){
        localStorage.setItem(STORAGE_PREFIX + `${type}-modules`, JSON.stringify(coreDb.modules[type]||[]));
      }
      localStorage.setItem(STORAGE_PREFIX + CURRENT_STUDENT_KEY, window._currentStudentId || '');
    }catch(e){}

    await saveCoreDb();
    await LEGACY_SET_VALUE(CURRENT_STUDENT_KEY, window._currentStudentId || '');
  }

  function currentStudent(){
    const id = window._currentStudentId || null;
    return coreDb?.students.find(s=>s.id===id) || coreDb?.students[0] || null;
  }

  function ensureStudentLoaded(){
    if(!coreDb) return null;
    let id = window._currentStudentId;
    if(!id){
      // leitura síncrona para o fallback local; no armazenamento cloud o primeiro aluno é usado.
      try{ id = localStorage.getItem(STORAGE_PREFIX + CURRENT_STUDENT_KEY); }catch(e){}
    }
    let student = coreDb.students.find(s=>s.id===id) || coreDb.students[0];
    if(!student){
      student = normalizeStudent({id:uid(),nome:'Estudante deste dispositivo'});
      coreDb.students.push(student);
    }
    window._currentStudentId = student.id;
    student.ultimoAcesso = new Date().toISOString();
    return student;
  }

  function completedSet(category, student){
    const s = student || currentStudent();
    const key = category==='quiz' ? 'quiz' : category;
    return new Set((s?.completed?.[key] || []).map(String));
  }

  function isCompleted(category, itemId, student){
    return completedSet(category,student).has(String(itemId));
  }

  function moduleItems(module){
    return (module?.items || module?.atividades || [])
      .slice()
      .sort((a,b)=>(Number(a.ordem||a.num||9999)-Number(b.ordem||b.num||9999)));
  }

  function moduleCompleted(category,module,student){
    const items = moduleItems(module);
    if(!items.length) return true;
    if(category==='quiz'){
      return (student?.completed?.quiz || []).includes(module.id);
    }
    return items.every(it=>isCompleted(category,it.id,student));
  }

  function moduleUnlocked(category,moduleId,student){
    const mods = coreDb.modules[category] || [];
    const index = mods.findIndex(m=>m.id===moduleId);
    if(index<=0) return true;
    return moduleCompleted(category,mods[index-1],student);
  }

  function activityUnlocked(category,module,itemId,student){
    if(!module || !moduleUnlocked(category,module.id,student)) return false;
    const items = moduleItems(module);
    const index = items.findIndex(it=>it.id===itemId);
    if(index<=0) return true;
    return isCompleted(category,items[index-1].id,student);
  }

  async function persistProgress(){
    if(!coreDb) return;
    const s=currentStudent();
    if(s) s.ultimoAcesso=new Date().toISOString();
    syncPublicArrays();
    await saveCoreDb();
    await LEGACY_SET_VALUE(CURRENT_STUDENT_KEY, s?.id || '');
  }

  window.markStudentCompleted = async function(category,itemId){
    const s=ensureStudentLoaded();
    if(!s) return;
    const key=category==='quiz'?'quiz':category;
    s.completed[key] ||= [];
    if(!s.completed[key].includes(itemId)) s.completed[key].push(itemId);
    coreDb.activityEvents.push({id:uid(),studentId:s.id,category,itemId,type:'completed',createdAt:new Date().toISOString()});
    await persistProgress();
    renderAllPublicModules();
    updateAdminStats();
  };

  window.setStudentProfile = async function(){
    const s=ensureStudentLoaded();
    if(!s) return;
    const nome=prompt('Nome do aluno:',s.nome);
    if(nome===null) return;
    const comunidade=prompt('Turma / comunidade:',s.comunidade||'');
    if(comunidade===null) return;
    if(!nome.trim()) return showToast('Informe um nome válido.');
    s.nome=nome.trim();
    s.comunidade=comunidade.trim() || 'Não informada';
    await persistProgress();
    renderAllPublicModules();
    updateAdminStats();
    showToast('Perfil do aluno atualizado.');
  };

  window.selectStudentForProfessor = async function(id){
    const s=coreDb.students.find(x=>x.id===id);
    if(!s) return;
    window._professorPreviewStudent=id;
    updateAdminStats();
  };

  function studentProgress(s){
    let total=0,done=0;
    ['atividades','videos'].forEach(category=>{
      (coreDb.modules[category]||[]).forEach(m=>{
        moduleItems(m).forEach(it=>{
          total++; if(isCompleted(category,it.id,s)) done++;
        });
      });
    });
    total += (coreDb.modules.quiz||[]).length;
    done += (s.completed?.quiz||[]).length;
    return total ? Math.min(100,Math.round(done/total*100)) : 0;
  }

  function renderStudentAdminPanel(){
    const dash=document.getElementById('admin-sec-dashboard');
    if(!dash || !coreDb) return;
    let box=document.getElementById('coreStudentAdminPanel');
    if(!box){
      box=document.createElement('div');
      box.id='coreStudentAdminPanel';
      box.className='admin-card';
      dash.appendChild(box);
    }
    const students=coreDb.students || [];
    const preview=window._professorPreviewStudent;
    box.innerHTML=`
      <h4>Progresso dos alunos</h4>
      <p style="color:var(--ink-soft);font-size:.84rem;line-height:1.5;margin:0 0 12px;">
        Acompanhe individualmente quem iniciou, concluiu vídeos, atividades e módulos de quiz.
      </p>
      ${students.length ? students.map(s=>{
        const p=studentProgress(s);
        return `<div class="admin-list-item" style="margin-bottom:8px;">
          <div style="flex:1;">
            <strong>${escapeHtml(s.nome)}</strong>
            <div style="font-size:.74rem;color:var(--ink-soft);">${escapeHtml(s.comunidade)} · ${p}% concluído</div>
            <div style="height:7px;background:#EEF1EA;border-radius:999px;margin-top:7px;overflow:hidden;">
              <div style="height:100%;width:${p}%;background:#AFC59F;border-radius:999px;"></div>
            </div>
          </div>
          <button class="btn-secondary btn-small" onclick="selectStudentForProfessor('${s.id}')">Ver progresso</button>
        </div>`;
      }).join('') : '<div class="module-empty">Nenhum aluno registrado ainda.</div>'}
      ${preview && students.some(s=>s.id===preview) ? (()=>{const s=students.find(x=>x.id===preview);return `
        <div style="margin-top:14px;padding:13px;border:1px solid var(--line);border-radius:12px;background:#FCFEF9;">
          <strong>${escapeHtml(s.nome)}</strong>
          <div style="font-size:.78rem;color:var(--ink-soft);margin-top:4px;">${escapeHtml(s.comunidade)} · ${studentProgress(s)}% geral</div>
          <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:9px;">
            <span class="student-tag">Atividades: ${(s.completed?.atividades||[]).length}</span>
            <span class="student-tag">Vídeos: ${(s.completed?.videos||[]).length}</span>
            <span class="student-tag">Quizzes: ${(s.completed?.quiz||[]).length}</span>
          </div>
        </div>`})() : ''}
    `;
  }

  // Substitui o carregamento dos módulos por um banco único, sem quebrar os dados antigos.
  window.loadAllModules = async function(){
    if(window._movimentamenteCoreReady){
      await window._movimentamenteCoreReady;
    }else{
      await loadCore();
    }
    syncPublicArrays();
    ensureStudentLoaded();
    await persistProgress();
  };

  // Toda alteração feita pelos controles antigos também passa a alimentar o banco central.
  window.storageSetList = async function(key,arr){
    const ok=await LEGACY_SET_LIST(key,arr);
    const match=String(key).match(/^(quiz|biblioteca|atividades|videos)-modules$/);
    if(match && coreDb){
      const type=match[1];
      const normalized=(arr||[]).map(m=>normalizeModule(m,type));
      coreDb.modules[type]=normalized;
      // Espelho local imediato, inclusive para vídeos, para sobreviver a
      // refresh/fechamento do site e a uma eventual indisponibilidade da nuvem.
      try{ localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(normalized)); }catch(e){}
      syncPublicArrays();
      await saveCoreDb();
    }
    return ok;
  };

  window.addEventListener('pagehide', ()=>{
    try{
      if(coreDb){
        const snapshot=JSON.stringify(coreDb);
        localStorage.setItem(STORAGE_PREFIX + CORE_KEY, snapshot);
        localStorage.setItem(STORAGE_PREFIX + 'videos-modules', JSON.stringify(coreDb.modules.videos||[]));
      }
    }catch(e){}
  });

  window.addEventListener('beforeunload', ()=>{
    try{
      if(coreDb){
        const snapshot=JSON.stringify(coreDb);
        localStorage.setItem(STORAGE_PREFIX + CORE_KEY, snapshot);
        localStorage.setItem(STORAGE_PREFIX + 'videos-modules', JSON.stringify(coreDb.modules.videos||[]));
      }
    }catch(e){}
  });

  window.updateAdminStats = async function(){
    if(!coreDb) return;
    const count=type=>(coreDb.modules[type]||[]).reduce((n,m)=>n+moduleItems(m).length,0);
    const set=(id,val)=>{const e=document.getElementById(id);if(e)e.textContent=val;};
    set('statActivities',count('atividades'));
    set('statLibrary',count('biblioteca'));
    set('statQuiz',count('quiz'));
    set('statVideos',count('videos'));
    set('statPages',Object.keys(pageEditorMeta||{}).length);
    try{
      const msgs=await LEGACY_GET_LIST('contact-messages');
      set('statMessages',msgs.length);
    }catch(e){}
    const totalStudents=coreDb.students.length;
    const avg=totalStudents ? Math.round(coreDb.students.reduce((a,s)=>a+studentProgress(s),0)/totalStudents) : 0;
    const studentStat=document.getElementById('statStudents');
    const progressStat=document.getElementById('statAvgProgress');
    if(studentStat) studentStat.textContent=totalStudents;
    if(progressStat) progressStat.textContent=avg+'%';
    renderStudentAdminPanel();
  };

  // Cards do aluno com desbloqueio sequencial e registro de conclusão.
  window.renderAtividadesPublic = function(){
    const modules=coreDb.modules.atividades||[];
    const grouped=document.getElementById('atividadesModulesView');
    if(!grouped) return;
    const student=ensureStudentLoaded();
    if(!modules.length){
      grouped.innerHTML=emptyStateMarkup('folder','Nenhuma atividade publicada no momento.<br>As tarefas enviadas pelos professores aparecerão aqui.');
      return;
    }
    const activeId=window._studentActivityModule || modules.find(m=>moduleUnlocked('atividades',m.id,student))?.id || modules[0].id;
    const active=modules.find(m=>m.id===activeId)||modules[0];
    window._studentActivityModule=active.id;
    grouped.innerHTML=`
      <div class="student-module-shell">
        <aside class="student-module-sidebar">
          <div class="side-label">Módulos</div>
          <div class="student-module-list">
            ${modules.map((m,i)=>{
              const unlocked=moduleUnlocked('atividades',m.id,student);
              const done=moduleCompleted('atividades',m,student);
              return `<button class="student-module-btn ${m.id===active.id?'active':''} ${!unlocked?'locked':''}" ${!unlocked?'disabled':''} onclick="selectStudentActivityModule('${m.id}')">
                <strong>${escapeHtml(m.title)}</strong>
                <span>${moduleItems(m).length} atividade(s) · ${done?'Concluído':unlocked?'Liberado':'Bloqueado'}</span>
              </button>`;
            }).join('')}
          </div>
          <button class="btn-secondary btn-small" style="width:100%;margin-top:10px;" onclick="setStudentProfile()">${iconMarkup('profile','ui-icon ui-icon--pill')}<span style="margin-left:8px;">${escapeHtml(student.nome)}</span></button>
        </aside>
        <div class="student-module-main">
          <div class="student-module-top">
            <div><span class="eyebrow">Módulo selecionado</span><h3>${escapeHtml(active.title)}</h3>
            <p>As etapas são liberadas em sequência. Conclua uma atividade para liberar a próxima.</p></div>
            <span class="student-module-badge">${moduleItems(active).length} atividade(s)</span>
          </div>
          <div class="student-stage-list">
            ${moduleItems(active).map((it,i)=>{
              const unlocked=activityUnlocked('atividades',active,it.id,student);
              const done=isCompleted('atividades',it.id,student);
              return `<article class="student-stage ${i===0?'current':''} ${!unlocked?'locked':''}">
                ${it.thumbnail?`<img src="${escapeAttr(it.thumbnail)}" class="content-thumb" alt="${escapeAttr(it.title)}">`:''}
                <div class="student-stage-head">
                  <div class="student-stage-num">${i+1}</div>
                  <div style="flex:1;">
                    <h4>${escapeHtml(it.title)}</h4>
                    <p>${escapeHtml(it.desc||it.topic||'Atividade publicada pelo professor.')}</p>
                    <div class="student-stage-meta">
                      ${it.topic?`<span class="student-tag">${escapeHtml(it.topic)}</span>`:''}
                      ${it.due?`<span class="student-tag">Entrega: ${escapeHtml(it.due)}</span>`:''}
                      <span class="student-stage-status ${done?'available':unlocked?'available':'sequence'}">${done?'Concluída':unlocked?'Disponível':'Na sequência'}</span>
                    </div>
                    ${unlocked ? `<div style="margin-top:10px;display:flex;gap:7px;flex-wrap:wrap;">
                      ${it.file?`<a class="btn-secondary btn-small" href="${/^https?:\/\//.test(it.file)?escapeAttr(it.file):'#'}" target="_blank" rel="noopener" onclick="markStudentCompleted('atividades','${it.id}')">Abrir material</a>`:''}
                      ${!done?`<button class="btn-solid btn-small" onclick="markStudentCompleted('atividades','${it.id}')">Concluir atividade</button>`:`<span class="student-tag">Atividade concluída</span>`}
                    </div>`:''}
                  </div>
                </div>
              </article>`;
            }).join('')}
          </div>
        </div>
      </div>`;
  };

  window.renderVideosPublic = function(){
    const modules=coreDb.modules.videos||[];
    const el=document.getElementById('videosModulesView'); if(!el) return;
    const student=ensureStudentLoaded();
    if(!modules.length){el.innerHTML=emptyStateMarkup('video','Nenhum vídeo publicado ainda.<br>Volte em breve!');return;}
    const activeId=window._studentVideoModule || modules.find(m=>moduleUnlocked('videos',m.id,student))?.id || modules[0].id;
    const active=modules.find(m=>m.id===activeId)||modules[0];
    window._studentVideoModule=active.id;
    el.innerHTML=`
      <div class="student-module-shell">
        <aside class="student-module-sidebar">
          <div class="side-label">Módulos</div>
          <div class="student-module-list">
            ${modules.map(m=>{
              const unlocked=moduleUnlocked('videos',m.id,student),done=moduleCompleted('videos',m,student);
              return `<button class="student-module-btn ${m.id===active.id?'active':''} ${!unlocked?'locked':''}" ${!unlocked?'disabled':''} onclick="selectStudentVideoModule('${m.id}')">
                <strong>${escapeHtml(m.title)}</strong><span>${moduleItems(m).length} vídeo(s) · ${done?'Concluído':unlocked?'Liberado':'Bloqueado'}</span>
              </button>`;
            }).join('')}
          </div>
          <button class="btn-secondary btn-small" style="width:100%;margin-top:10px;" onclick="setStudentProfile()">${iconMarkup('profile','ui-icon ui-icon--pill')}<span style="margin-left:8px;">${escapeHtml(student.nome)}</span></button>
        </aside>
        <div class="student-module-main">
          <div class="student-module-top"><div><span class="eyebrow">Módulo selecionado</span><h3>${escapeHtml(active.title)}</h3>
          <p>Assista aos vídeos na sequência da trilha. Cada vídeo visto libera a próxima etapa.</p></div>
          <span class="student-module-badge">${moduleItems(active).length} vídeo(s)</span></div>
          <div class="student-stage-list">
          ${moduleItems(active).map((it,i)=>{
            const unlocked=activityUnlocked('videos',active,it.id,student),done=isCompleted('videos',it.id,student);
            return `<article class="student-stage ${i===0?'current':''} ${!unlocked?'locked':''}">
              ${it.thumbnail?`<img src="${escapeAttr(it.thumbnail)}" class="content-thumb" alt="${escapeAttr(it.title)}">`:''}
              <div class="student-stage-head"><div class="student-stage-num">${i+1}</div><div style="flex:1;">
                ${it.topic?`<span class="student-tag">${escapeHtml(it.topic)}</span>`:''}
                <h4>${escapeHtml(it.title)}</h4>
                <p>${escapeHtml(it.desc||'Assista à explicação e retorne para continuar seu progresso.')}</p>
                <div class="student-stage-meta"><span class="student-stage-status ${done?'available':unlocked?'available':'sequence'}">${done?'Assistido':unlocked?'Disponível':'Bloqueado'}</span></div>
                ${unlocked?`<div style="margin-top:10px;"><button class="btn-solid btn-small" onclick="openCoreVideo('${it.id}')">${done?'Assistir novamente':'Assistir vídeo'}</button></div>`:''}
              </div></div>
            </article>`;
          }).join('')}
          </div>
        </div>
      </div>`;
  };

  window.selectStudentVideoModule=function(id){window._studentVideoModule=id;renderVideosPublic();};

  window.openCoreVideo=async function(itemId){
    const found=(coreDb.modules.videos||[]).flatMap(m=>moduleItems(m).map(it=>({m,it}))).find(x=>x.it.id===itemId);
    if(!found) return;
    const student=ensureStudentLoaded();
    if(!activityUnlocked('videos',found.m,itemId,student)){showToast('Conclua o vídeo anterior para liberar esta etapa.');return;}
    await markStudentCompleted('videos',itemId);
    const url=found.it.url;
    if(url) window.open(url,'_blank','noopener');
  };

  // Quiz com registro de tentativa e desbloqueio de módulos.
  window.renderQuizModulePicker=function(){
    const el=document.getElementById('quizModulePicker'); if(!el)return;
    const modules=coreDb.modules.quiz||[],student=ensureStudentLoaded();
    if(!modules.length){el.innerHTML=emptyStateMarkup('quiz','Nenhum módulo de quiz publicado ainda.');return;}
    const selected=activeQuizModule && modules.find(m=>m.id===activeQuizModule.id) || modules[0];
    el.innerHTML=`<div class="student-module-shell">
      <aside class="student-module-sidebar"><div class="side-label">Módulos</div><div class="student-module-list">
      ${modules.map(m=>{
        const unlocked=moduleUnlocked('quiz',m.id,student),done=moduleCompleted('quiz',m,student);
        return `<button class="student-module-btn ${m.id===selected.id?'active':''} ${!unlocked?'locked':''}" ${!unlocked?'disabled':''} onclick="startQuizModule('${m.id}')">
          <strong>${escapeHtml(m.title)}</strong><span>${moduleItems(m).length} pergunta(s) · ${done?'Concluído':unlocked?'Liberado':'Bloqueado'}</span>
        </button>`;
      }).join('')}</div><button class="btn-secondary btn-small" style="width:100%;margin-top:10px;" onclick="setStudentProfile()">${iconMarkup('profile','ui-icon ui-icon--pill')}<span style="margin-left:8px;">${escapeHtml(student.nome)}</span></button></aside>
      <div class="student-module-main"><div class="student-module-top"><div><span class="eyebrow">Módulo do quiz</span><h3>${escapeHtml(selected.title)}</h3>
      <p>Conclua o módulo para liberar o próximo.</p></div><span class="student-module-badge">${moduleItems(selected).length} etapa(s)</span></div>
      <div class="student-stage-list">${moduleItems(selected).map((it,i)=>`<div class="student-stage ${i===0?'current':''}"><div class="student-stage-head"><div class="student-stage-num">${i+1}</div><div><h4>${escapeHtml(it.title)}</h4><p>${escapeHtml(it.question||it.topic||'Pergunta cadastrada pelo professor.')}</p><div class="student-stage-meta"><span class="student-tag">${i+1}ª etapa</span></div></div></div></div>`).join('')}</div>
      <button class="btn-solid btn-small" style="margin-top:15px;" onclick="startQuizModule('${selected.id}')">Começar módulo</button></div></div>`;
  };

  const originalStartQuizModule = window.startQuizModule;
  window.startQuizModule=function(moduleId){
    const mod=coreDb.modules.quiz.find(m=>m.id===moduleId),student=ensureStudentLoaded();
    if(!mod) return;
    if(!moduleUnlocked('quiz',moduleId,student)){showToast('Conclua o módulo anterior para liberar este quiz.');return;}
    activeQuizModule=mod;quizIndex=0;quizScore=0;
    const p=document.getElementById('quizProgressWrap');if(p)p.style.display='block';
    renderQuiz();
    const page=document.getElementById('page-quiz');if(page)window.scrollTo({top:page.offsetTop-10,behavior:'smooth'});
  };

  const originalRenderQuiz = window.renderQuiz;
  window.renderQuiz= function(){
    if(!activeQuizModule) return;
    const questions=moduleItems(activeQuizModule), area=document.getElementById('quizArea'), bar=document.getElementById('quizProgressBar');
    if(!area||!bar)return;
    if(quizIndex>=questions.length){
      bar.style.width='100%';
      const student=ensureStudentLoaded();
      student.completed.quiz ||= [];
      if(!student.completed.quiz.includes(activeQuizModule.id)) student.completed.quiz.push(activeQuizModule.id);
      const attempt={id:uid(),studentId:student.id,moduleId:activeQuizModule.id,score:quizScore,total:questions.length,createdAt:new Date().toISOString()};
      student.quizAttempts.push(attempt);coreDb.quizAttempts.push(attempt);
      saveCoreDb();
      area.innerHTML=`<div class="quiz-score"><div class="big">${quizScore}/${questions.length}</div><p style="color:var(--ink-soft);">Você acertou ${quizScore} de ${questions.length} perguntas do módulo "${escapeHtml(activeQuizModule.title)}".</p>
      <div class="admin-actions" style="justify-content:center;"><button class="btn-solid" onclick="startQuizModule('${activeQuizModule.id}')">Refazer módulo</button><button class="btn-secondary" onclick="backToQuizModules();renderQuizModulePicker();">Escolher outro módulo</button></div></div>`;
      renderQuizModulePicker();updateAdminStats();return;
    }
    bar.style.width=(quizIndex/questions.length*100)+'%';
    const item=questions[quizIndex],opts=(item.opts||[]).filter(o=>o!==undefined&&o!==null&&o!=='').map((o,i)=>`<label class="quiz-opt" id="opt-${i}"><input type="radio" name="quizopt" value="${i}"> ${escapeHtml(o)}</label>`).join('');
    area.innerHTML=`<div class="quiz-card">${item.topic?`<span class="ci-tag" style="display:inline-block;margin-bottom:8px;">${escapeHtml(item.topic)}</span>`:''}<div class="quiz-q">Pergunta ${quizIndex+1} de ${questions.length} — ${escapeHtml(item.question||item.title||'')}</div><div class="quiz-opts">${opts}</div><button class="btn-solid" style="margin-top:16px;" onclick="checkQuiz()">Confirmar resposta</button></div>`;
  };

  window.checkQuiz=function(){
    const sel=document.querySelector('input[name=quizopt]:checked');
    if(!sel){showToast('Escolha uma opção antes de confirmar');return;}
    const idx=Number(sel.value),item=moduleItems(activeQuizModule)[quizIndex];
    const correct=Number(item.correct||0);
    document.getElementById('opt-'+correct)?.classList.add('correct');
    if(idx!==correct) document.getElementById('opt-'+idx)?.classList.add('wrong'); else quizScore++;
    document.querySelectorAll('.quiz-opt input').forEach(i=>i.disabled=true);
    if(item.explanation){
      const card=document.querySelector('#quizArea .quiz-card'),p=document.createElement('p');
      p.style.cssText='margin-top:12px;color:var(--ink-soft);font-size:.85rem;background:#F7FAFC;border-radius:10px;padding:10px 12px;line-height:1.5;';
      p.innerHTML=`${iconMarkup('tip','ui-icon ui-icon--pill')}<span style="margin-left:8px;">${escapeHtml(item.explanation)}</span>`;card.insertBefore(p,card.querySelector('.btn-solid'));
    }
    const btn=document.querySelector('#quizArea .btn-solid');
    btn.textContent=quizIndex===moduleItems(activeQuizModule).length-1?'Ver resultado':'Próxima pergunta';
    btn.onclick=()=>{quizIndex++;renderQuiz();};
  };

  // Se o professor editar/excluir/publicar por meio das funções existentes, o banco central é atualizado.
  const originalDeleteItem = window.deleteItem;
  window.deleteItem = async function(type,moduleId,itemId){
    await originalDeleteItem(type,moduleId,itemId);
    if(coreDb){
      coreDb.modules[type]=(window._modules[type]||[]).map(m=>normalizeModule(m,type));
      syncPublicArrays();await saveCoreDb();updateAdminStats();
    }
  };

  // Mantém a função de seleção de atividades atual, mas força re-render com o backend novo.
  window.selectStudentActivityModule=function(id){
    const s=ensureStudentLoaded();
    if(!moduleUnlocked('atividades',id,s)){showToast('Conclua o módulo anterior para liberar este módulo.');return;}
    window._studentActivityModule=id;renderAtividadesPublic();
  };

  // Inicializa o backend após a página carregar.
  const oldReady = window._movimentamenteCoreReady;
  window._movimentamenteCoreReady = (async()=>{await loadCore();syncPublicArrays();ensureStudentLoaded();await persistProgress();})();
})();
