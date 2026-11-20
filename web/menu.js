// Header menu: theme (light/dark/system) + language switcher.
(function () {
  var container = document.getElementById('header-actions');
  if (!container) return;

  var THEMES = [
    { id: 'light', label: 'Light' },
    { id: 'dark', label: 'Dark' },
    { id: 'system', label: 'System' },
  ];
  var LANGS = [
    { id: 'en', label: 'English' },
    { id: 'ru', label: 'Русский' },
    { id: 'uk', label: 'Українська' },
    { id: 'fr', label: 'Français' },
    { id: 'de', label: 'Deutsch' },
    { id: 'es', label: 'Español' },
    { id: 'it', label: 'Italiano' },
  ];
  var NAV = {
    en: { home: 'Solver', about: 'About' },
    ru: { home: 'Решатель', about: 'О проекте' },
    uk: { home: 'Розв’язувач', about: 'Про проєкт' },
    fr: { home: 'Solveur', about: 'À propos' },
    de: { home: 'Löser', about: 'Über' },
    es: { home: 'Solucionador', about: 'Acerca de' },
    it: { home: 'Risolutore', about: 'Informazioni' },
  };

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } }

  var theme = read('triz-theme', 'system');
  var lang = read('triz-lang', 'ru');

  function resolveTheme(t) {
    if (t === 'system') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return t;
  }

  function applyTheme() {
    var resolved = resolveTheme(theme);
    document.documentElement.setAttribute('data-theme', resolved);
    window.dispatchEvent(new CustomEvent('triz:theme', { detail: resolved }));
  }

  function applyLang() {
    if (window.TrizApp) window.TrizApp.setLang(lang);
  }

  function build() {
    var themeLabel = (THEMES.find(function (x) { return x.id === theme; }) || {}).label || 'System';
    var langLabel = (LANGS.find(function (x) { return x.id === lang; }) || {}).label || 'RU';

    container.innerHTML =
      '<details class="menu">' +
        '<summary>' + themeLabel + ' ▾</summary>' +
        '<div class="menu-items">' +
          THEMES.map(function (th) {
            return '<button data-theme="' + th.id + '"' + (theme === th.id ? ' class="active"' : '') + '>' + (theme === th.id ? '✓ ' : '') + th.label + '</button>';
          }).join('') +
        '</div>' +
      '</details>' +
      '<details class="menu">' +
        '<summary>' + langLabel + ' ▾</summary>' +
        '<div class="menu-items">' +
          LANGS.map(function (l) {
            return '<button data-lang="' + l.id + '"' + (lang === l.id ? ' class="active"' : '') + '>' + (lang === l.id ? '✓ ' : '') + l.label + '</button>';
          }).join('') +
        '</div>' +
      '</details>';

    container.querySelectorAll('[data-theme]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        theme = btn.getAttribute('data-theme');
        store('triz-theme', theme);
        applyTheme();
        build();
      });
    });
    container.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        lang = btn.getAttribute('data-lang');
        store('triz-lang', lang);
        applyLang();
        build();
      });
    });

    var nav = document.getElementById('site-nav');
    if (nav) {
      var nl = NAV[lang] || NAV.en;
      var here = location.pathname.replace(/\/+$/, '') || '/';
      nav.innerHTML =
        '<a href="/"' + (here === '/' || here === '/index.html' ? ' class="active"' : '') + '>' + nl.home + '</a>' +
        '<a href="/about"' + (here === '/about' || here === '/about.html' ? ' class="active"' : '') + '>' + nl.about + '</a>';
    }
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.menu')) {
      document.querySelectorAll('.menu[open]').forEach(function (m) { m.removeAttribute('open'); });
    }
  });

  var mq = window.matchMedia('(prefers-color-scheme: light)');
  if (mq && mq.addEventListener) {
    mq.addEventListener('change', function () { if (theme === 'system') applyTheme(); });
  }

  applyTheme();
  applyLang();
  build();
})();
