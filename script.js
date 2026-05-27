const state={lang:'en'};
const hero={en:'assets/hero-en.png',ja:'assets/hero-ja.png'};
function setLang(lang){state.lang=lang;document.documentElement.lang=lang;document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=el.dataset[lang]});document.querySelectorAll('.lang-switch button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));const img=document.getElementById('hero-image');const source=document.getElementById('hero-mobile-source');img.src=hero[lang];source.srcset=hero[lang];img.alt=lang==='en'?'ACE Total Consulting first view':'ACE総合コンサル ファーストビュー'}
document.querySelectorAll('.lang-switch button').forEach(btn=>btn.addEventListener('click',()=>setLang(btn.dataset.lang)));
setLang('en');
