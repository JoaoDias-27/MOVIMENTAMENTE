/* Movimentamente loader: mantém o núcleo original e aplica a sincronização corrigida. */
(function(){
  function loadSync(url){
    var xhr=new XMLHttpRequest();
    xhr.open('GET',url,false);
    xhr.send(null);
    if(xhr.status>=200&&xhr.status<300||xhr.status===0) return xhr.responseText;
    throw new Error('Falha ao carregar '+url+' ('+xhr.status+')');
  }
  try{
    (0,eval)(loadSync('assets/app-core.js?v=20260904-01'));
    (0,eval)(loadSync('assets/backend-sync-fix.js?v=20260904-01'));
  }catch(e){console.error('[Movimentamente] Falha ao iniciar o portal',e);}
})();
