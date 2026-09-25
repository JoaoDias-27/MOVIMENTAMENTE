/* Movimentamente loader */
(function(){
  function loadSync(url){
    var xhr=new XMLHttpRequest();
    xhr.open('GET',url,false);
    xhr.send(null);
    if((xhr.status>=200&&xhr.status<300)||xhr.status===0)return xhr.responseText;
    throw new Error('Falha ao carregar '+url+' ('+xhr.status+')');
  }
  function run(text){var s=document.createElement('script');s.text=text;document.head.appendChild(s);}
  function css(url){var l=document.createElement('link');l.rel='stylesheet';l.href=url;document.head.appendChild(l);}
  try{
    run(loadSync('assets/app-core.js?v=20260925-01'));
    run(loadSync('assets/backend-sync-fix.js?v=20260925-01'));
    css('assets/content-pages.css?v=20260925-01');
    run(loadSync('assets/content-pages.js?v=20260925-01'));
  }catch(e){console.error('[Movimentamente] Falha ao iniciar o portal',e);}
})();