/* Movimentamente — correção de sincronização compartilhada (Supabase) */
(function(){
  const URL='https://bjglrljgeamqkhusgxop.supabase.co';
  const KEY='sb_publishable_-4xysATL3AALbRJ2WMZnQg_mYIAIrxk';
  const TYPES=['quiz','biblioteca','atividades','videos'];
  const PREFIX='movimentamente_';
  async function read(key){
    const u=new URL(URL+'/rest/v1/app_storage');
    u.searchParams.set('select','storage_value');
    u.searchParams.set('storage_key','eq.'+key);
    u.searchParams.set('limit','1');
    const r=await fetch(u.toString(),{headers:{apikey:KEY,Accept:'application/json'},cache:'no-store'});
    if(!r.ok) throw new Error('Supabase read '+r.status);
    const rows=await r.json();
    return rows.length ? rows[0].storage_value : null;
  }
  function normalize(list){return Array.isArray(list)?list.map(m=>({...m,id:m.id||Date.now().toString(36)+Math.random().toString(36).slice(2,7),title:m.title||m.titulo||'Módulo',items:Array.isArray(m.items)?m.items:[]})):[]}
  window.loadAllModules=async function(){
    const next={};
    for(const type of TYPES){
      try{
        const raw=await read(type+'-modules');
        next[type]=normalize(raw?JSON.parse(raw):[]);
        try{localStorage.setItem(PREFIX+type+'-modules',JSON.stringify(next[type]));}catch(e){}
      }catch(e){
        console.error('[Movimentamente] Falha ao sincronizar '+type,e);
        try{next[type]=normalize(JSON.parse(localStorage.getItem(PREFIX+type+'-modules')||'[]'));}catch(e2){next[type]=[]}
      }
    }
    window._modules=next;
    window._selectedModule=window._selectedModule||{};
    TYPES.forEach(t=>{if(!window._selectedModule[t]||!next[t].some(m=>m.id===window._selectedModule[t]))window._selectedModule[t]=next[t][0]?.id||null;});
  };
  window.renderAtividadesPublic=function(){
    const host=document.getElementById('atividadesModulesView');if(!host)return;const modules=window._modules.atividades||[];
    if(!modules.length){host.innerHTML='<div class="empty-state">Nenhuma atividade publicada no momento.<br>As tarefas enviadas pelos professores aparecerão aqui.</div>';return;}
    const active=modules.find(m=>m.id===window._studentActivityModule)||modules.find(m=>(m.items||[]).length)||modules[0];window._studentActivityModule=active.id;
    host.innerHTML='<div class="student-module-shell"><aside class="student-module-sidebar"><div class="side-label">MÓDULOS</div><div class="student-module-list">'+modules.map(m=>'<button class="student-module-btn '+(m.id===active.id?'active':'')+'" onclick="selectStudentActivityModule(\''+m.id+'\')"><strong>'+escapeHtml(m.title)+'</strong><span>'+(m.items||[]).length+' atividade(s) • Disponível</span></button>').join('')+'</div></aside><div class="student-module-main"><div class="student-module-top"><div><span class="eyebrow">MÓDULO SELECIONADO</span><h3>'+escapeHtml(active.title)+'</h3><p>Conteúdo publicado pelo professor.</p></div><span class="student-module-badge">'+(active.items||[]).length+' atividade(s)</span></div><div class="student-stage-list">'+(active.items||[]).map((it,i)=>'<article class="student-stage '+(it.thumbnail?'':'no-thumb')+'">'+(it.thumbnail?'<img src="'+escapeAttr(it.thumbnail)+'" class="content-thumb" alt="Thumbnail de '+escapeAttr(it.title||'Atividade')+'">':'')+'<div class="student-stage-head"><div class="student-stage-num">'+(i+1)+'</div><div style="flex:1"><h4>'+escapeHtml(it.title||('Atividade '+(i+1)))+'</h4><p>'+escapeHtml(it.desc||it.topic||'Atividade publicada pelo professor.')+'</p><div class="student-stage-meta">'+(it.topic?'<span class="student-tag">'+escapeHtml(it.topic)+'</span>':'')+(it.due?'<span class="student-tag">Entrega: '+escapeHtml(it.due)+'</span>':'')+'</div>'+(it.file?'<div style="margin-top:9px"><a href="'+(/^https?:\/\//.test(it.file)?escapeAttr(it.file):'#')+'" target="_blank" rel="noopener">Abrir material</a></div>':'')+'</div></div></article>').join('')+'</div></div></div>';
  };
  window.renderVideosPublic=function(){
    const host=document.getElementById('videosModulesView');if(!host)return;const modules=(window._modules.videos||[]).filter(m=>(m.items||[]).length);
    if(!modules.length){host.innerHTML='<div class="empty-state">Nenhum vídeo publicado ainda.<br>Volte em breve!</div>';return;}
    const active=modules.find(m=>m.id===window._studentVideoModule)||modules[0];window._studentVideoModule=active.id;
    host.innerHTML='<div class="student-module-shell"><aside class="student-module-sidebar"><div class="side-label">MÓDULOS</div><div class="student-module-list">'+modules.map(m=>'<button class="student-module-btn '+(m.id===active.id?'active':'')+'" onclick="selectStudentVideoModule(\''+m.id+'\')"><strong>'+escapeHtml(m.title)+'</strong><span>'+(m.items||[]).length+' vídeo(s) • Disponível</span></button>').join('')+'</div></aside><div class="student-module-main"><div class="student-module-top"><div><span class="eyebrow">MÓDULO SELECIONADO</span><h3>'+escapeHtml(active.title)+'</h3><p>Vídeos publicados pelo professor.</p></div><span class="student-module-badge">'+(active.items||[]).length+' vídeo(s)</span></div><div class="student-stage-list">'+(active.items||[]).map((it,i)=>'<article class="student-stage '+(it.thumbnail?'':'no-thumb')+'">'+(it.thumbnail?'<img src="'+escapeAttr(it.thumbnail)+'" class="content-thumb" alt="Thumbnail de '+escapeAttr(it.title||'Vídeo')+'">':'')+'<div class="student-stage-head"><div class="student-stage-num">'+(i+1)+'</div><div style="flex:1"><h4>'+escapeHtml(it.title||('Vídeo '+(i+1)))+'</h4><p>'+escapeHtml(it.desc||it.topic||'Vídeo publicado pelo professor.')+'</p><div class="student-stage-meta">'+(it.topic?'<span class="student-tag">'+escapeHtml(it.topic)+'</span>':'')+'</div><div style="margin-top:9px"><a href="'+escapeAttr(it.url||'#')+'" target="_blank" rel="noopener">Assistir vídeo</a></div></div></div></article>').join('')+'</div></div></div>';
  };
  window.renderLibraryPublic=function(){
    const host=document.getElementById('libraryList');if(!host)return;const modules=(window._modules.biblioteca||[]).filter(m=>(m.items||[]).length);
    if(!modules.length){host.innerHTML='<div class="empty-state">Nenhum material publicado ainda.<br>Volte em breve!</div>';return;}
    host.innerHTML=modules.map(m=>'<div class="module-public-block"><div class="module-public-head"><h3>'+escapeHtml(m.title)+'</h3><span class="m-badge">'+(m.items||[]).length+' material(is)</span></div>'+m.items.map(it=>'<div class="resource-item"><div class="resource-ico g-purple">📄</div><div style="flex:1"><h4>'+escapeHtml(it.title||'Material')+'</h4><p>'+escapeHtml(it.desc||'')+'</p>'+(it.link?'<a href="'+escapeAttr(it.link)+'" target="_blank" rel="noopener" class="resource-link">🔗 Abrir material</a>':'')+'</div></div>').join('')+'</div>').join('');
  };
})();
