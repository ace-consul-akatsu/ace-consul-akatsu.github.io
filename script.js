const state = { lang: 'en' };
const hero = { en: 'assets/hero-en.png', ja: 'assets/hero-ja.png' };

function setLang(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach((el) => {
    el.textContent = el.dataset[lang];
  });
  document.querySelectorAll('.lang-switch button').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
  const heroImage = document.getElementById('hero-image');
  heroImage.src = hero[lang];
  heroImage.alt = lang === 'en'
    ? 'ACE Comprehensive Consulting first view'
    : 'ACE総合コンサル ファーストビュー';
}

document.querySelectorAll('.lang-switch button').forEach((button) => {
  button.addEventListener('click', () => setLang(button.dataset.lang));
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('#main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

setLang('en');
