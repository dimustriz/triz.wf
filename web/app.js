var I18N = {
  en: {
    "steps.mode.title": "Mode",
    "steps.mode.subtitle": "Which contradiction class to solve",
    "steps.problem.title": "Problem",
    "steps.problem.subtitle": "Describe the problem in your own words",
    "steps.context.title": "Context",
    "steps.context.subtitle": "Constraints and what has been tried",
    "steps.review.title": "Review",
    "steps.review.subtitle": "Confirm and run the analysis",
    "steps.result.title": "Analysis",
    "steps.result.subtitle": "TRIZ analysis result",
    "mode.engineering": "Engineering",
    "mode.engineeringDesc": "Hardware / DeepTech — physical effects and patent base.",
    "mode.business": "Business & product",
    "mode.businessDesc": "System contradictions in monetization, distribution, UX.",
    "problem.label": "Problem statement",
    "problem.placeholder": "e.g. “We want a thinner case, but it loses strength”…",
    "problem.hint": "Do not worry about wording — the system will strip the jargon.",
    "context.label": "Context (optional)",
    "context.placeholder": "What you have tried, constraints, what must not get worse…",
    "context.hint": "Helps find cross-domain analogies and reject weak compromises.",
    "review.mode": "Mode",
    "review.problem": "Problem",
    "review.context": "Context",
    "result.cleaned": "Cleaned statement",
    "result.contradiction": "Contradiction pair",
    "result.physical": "Physical contradiction",
    "result.ifr": "Ideal final result",
    "result.analogies": "Cross-domain analogies",
    "result.critique": "Critique",
    "result.solution": "Solution",
    "nav.back": "← Back",
    "nav.next": "Next →",
    "nav.run": "Run analysis",
    "nav.restart": "New problem",
    "loading": "Running TRIZ analysis…",
    "notice.title": "Solver not connected yet.",
    "notice.body": "The backend (FastAPI + model on Modal) is not deployed yet, so the wizard returns a stub. Set TRIZ_SOLVER_API in Cloudflare Pages to enable real TRIZ analysis.",
    "notice.sent": "Sent request",
    "error.prefix": "Could not reach the API: "
  },
  ru: {
    "steps.mode.title": "Режим",
    "steps.mode.subtitle": "Какой класс противоречия решаем",
    "steps.problem.title": "Задача",
    "steps.problem.subtitle": "Опишите проблему своими словами",
    "steps.context.title": "Контекст",
    "steps.context.subtitle": "Ограничения и что уже пробовали",
    "steps.review.title": "Проверка",
    "steps.review.subtitle": "Подтвердите и запустите разбор",
    "steps.result.title": "Разбор",
    "steps.result.subtitle": "Результат TRIZ-анализа",
    "mode.engineering": "Инженерный",
    "mode.engineeringDesc": "Hardware / DeepTech — физические эффекты и патентная база.",
    "mode.business": "Бизнес и продукт",
    "mode.businessDesc": "Системные противоречия в монетизации, дистрибуции, UX.",
    "problem.label": "Формулировка проблемы",
    "problem.placeholder": "Например: «Хотим корпус тоньше, но он теряет прочность»…",
    "problem.hint": "Не думайте о формулировке — система сама очистит её от жаргона.",
    "context.label": "Контекст (необязательно)",
    "context.placeholder": "Что уже пробовали, ограничения, что не должно ухудшиться…",
    "context.hint": "Помогает найти межотраслевые аналоги и отсечь слабые компромиссы.",
    "review.mode": "Режим",
    "review.problem": "Задача",
    "review.context": "Контекст",
    "result.cleaned": "Очищенная формулировка",
    "result.contradiction": "Конфликтующая пара",
    "result.physical": "Физическое противоречие",
    "result.ifr": "ИКР",
    "result.analogies": "Межотраслевые аналоги",
    "result.critique": "Критика",
    "result.solution": "Решение",
    "nav.back": "← Назад",
    "nav.next": "Далее →",
    "nav.run": "Запустить разбор",
    "nav.restart": "Новая задача",
    "loading": "Идёт TRIZ-разбор…",
    "notice.title": "Решатель ещё не подключён.",
    "notice.body": "Бэкенд (FastAPI + модель на Modal) ещё не развёрнут, поэтому мастер возвращает заглушку. Задайте TRIZ_SOLVER_API в Cloudflare Pages, чтобы включить реальный TRIZ-анализ.",
    "notice.sent": "Отправленный запрос",
    "error.prefix": "Не удалось достучаться до API: "
  }
  ,
  uk: {
    "steps.mode.title": "Режим",
    "steps.mode.subtitle": "Який клас протиріччя розв'язуємо",
    "steps.problem.title": "Задача",
    "steps.problem.subtitle": "Опишіть проблему своїми словами",
    "steps.context.title": "Контекст",
    "steps.context.subtitle": "Обмеження та що вже пробували",
    "steps.review.title": "Перевірка",
    "steps.review.subtitle": "Підтвердіть і запустіть розбір",
    "steps.result.title": "Розбір",
    "steps.result.subtitle": "Результат TRIZ-аналізу",
    "mode.engineering": "Інженерний",
    "mode.engineeringDesc": "Hardware / DeepTech — фізичні ефекти і патентна база.",
    "mode.business": "Бізнес і продукт",
    "mode.businessDesc": "Системні протиріччя в монетизації, дистрибуції, UX.",
    "problem.label": "Формулювання проблеми",
    "problem.placeholder": "Наприклад: «Хочемо корпус тонший, але він втрачає міцність»…",
    "problem.hint": "Не думайте про формулювання — система сама очистить його від жаргону.",
    "context.label": "Контекст (необов'язково)",
    "context.placeholder": "Що вже пробували, обмеження, що не має погіршитися…",
    "context.hint": "Допомагає знайти міжгалузеві аналоги й відсіяти слабкі компроміси.",
    "review.mode": "Режим",
    "review.problem": "Задача",
    "review.context": "Контекст",
    "result.cleaned": "Очищене формулювання",
    "result.contradiction": "Конфліктуюча пара",
    "result.physical": "Фізичне протиріччя",
    "result.ifr": "ІКР",
    "result.analogies": "Міжгалузеві аналоги",
    "result.critique": "Критика",
    "result.solution": "Рішення",
    "nav.back": "← Назад",
    "nav.next": "Далі →",
    "nav.run": "Запустити розбір",
    "nav.restart": "Нова задача",
    "loading": "Виконується TRIZ-розбір…",
    "notice.title": "Розв'язувач ще не підключено.",
    "notice.body": "Бекенд (FastAPI + модель на Modal) ще не розгорнуто, тому майстер повертає заглушку. Задайте TRIZ_SOLVER_API у Cloudflare Pages.",
    "notice.sent": "Надісланий запит",
    "error.prefix": "Не вдалося достукатися до API: "
  },
  fr: {
    "steps.mode.title": "Mode",
    "steps.mode.subtitle": "Quelle classe de contradiction",
    "steps.problem.title": "Problème",
    "steps.problem.subtitle": "Décrivez le problème avec vos mots",
    "steps.context.title": "Contexte",
    "steps.context.subtitle": "Contraintes et ce qui a été essayé",
    "steps.review.title": "Vérification",
    "steps.review.subtitle": "Confirmez et lancez l'analyse",
    "steps.result.title": "Analyse",
    "steps.result.subtitle": "Résultat de l'analyse TRIZ",
    "mode.engineering": "Ingénierie",
    "mode.engineeringDesc": "Hardware / DeepTech — effets physiques et brevets.",
    "mode.business": "Business & produit",
    "mode.businessDesc": "Contradictions système en monétisation, distribution, UX.",
    "problem.label": "Énoncé du problème",
    "problem.placeholder": "Ex. : « Un boîtier plus fin, mais il perd en solidité »…",
    "problem.hint": "Ne vous souciez pas de la formulation — le système nettoiera le jargon.",
    "context.label": "Contexte (facultatif)",
    "context.placeholder": "Ce qui a été essayé, contraintes, ce qui ne doit pas empirer…",
    "context.hint": "Aide à trouver des analogies inter-domaines et à rejeter les compromis faibles.",
    "review.mode": "Mode",
    "review.problem": "Problème",
    "review.context": "Contexte",
    "result.cleaned": "Énoncé nettoyé",
    "result.contradiction": "Paire de contradiction",
    "result.physical": "Contradiction physique",
    "result.ifr": "RIF",
    "result.analogies": "Analogies inter-domaines",
    "result.critique": "Critique",
    "result.solution": "Solution",
    "nav.back": "← Retour",
    "nav.next": "Suivant →",
    "nav.run": "Lancer l'analyse",
    "nav.restart": "Nouveau problème",
    "loading": "Analyse TRIZ en cours…",
    "notice.title": "Résolveur pas encore connecté.",
    "notice.body": "Le backend (FastAPI + modèle sur Modal) n'est pas déployé. Définissez TRIZ_SOLVER_API dans Cloudflare Pages.",
    "notice.sent": "Requête envoyée",
    "error.prefix": "Impossible d'atteindre l'API : "
  }
};
var LANG = 'ru';
try { LANG = localStorage.getItem('triz-lang') || 'ru'; } catch (e) {}

function t(key) {
  var dict = I18N[LANG] || I18N.ru;
  return dict[key] || I18N.ru[key] || key;
}

var STEPS = ['mode', 'problem', 'context', 'review', 'result'];

var state = { step: 0, mode: 'engineering', problem: '', context: '', status: 'idle', result: null, error: null };

var app = document.getElementById('app');

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function modeLabel(m) { return m === 'engineering' ? t('mode.engineering') : t('mode.business'); }
function pad(n) { return String(n).padStart(2, '0'); }

function render() {
  var id = STEPS[state.step];
  var body = '';
  if (state.step === 0) body = renderMode();
  else if (state.step === 1) body = renderProblem();
  else if (state.step === 2) body = renderContext();
  else if (state.step === 3) body = renderReview();
  else body = renderResult();

  app.innerHTML =
    '<section class="card">' +
      '<header class="step-head">' +
        '<span class="step-count">STEP ' + pad(state.step + 1) + ' / ' + pad(STEPS.length) + '</span>' +
        '<h1>' + t('steps.' + id + '.title') + '</h1>' +
        '<p class="step-subtitle">' + t('steps.' + id + '.subtitle') + '</p>' +
      '</header>' +
      '<div class="step-body">' + body + '</div>' +
      renderNav() +
    '</section>';
  bind();
}

function renderMode() {
  var eng = state.mode === 'engineering' ? 'checked' : '';
  var biz = state.mode === 'business' ? 'checked' : '';
  return '<div class="mode-grid">' +
    '<label class="mode-card"><input type="radio" name="mode" value="engineering" ' + eng + ' />' +
      '<span class="mode-title">' + t('mode.engineering') + '</span>' +
      '<p class="mode-desc">' + t('mode.engineeringDesc') + '</p></label>' +
    '<label class="mode-card"><input type="radio" name="mode" value="business" ' + biz + ' />' +
      '<span class="mode-title">' + t('mode.business') + '</span>' +
      '<p class="mode-desc">' + t('mode.businessDesc') + '</p></label>' +
  '</div>';
}

function renderProblem() {
  return '<label class="field-label" for="problem">' + t('problem.label') + '</label>' +
    '<textarea id="problem" placeholder="' + esc(t('problem.placeholder')) + '">' + esc(state.problem) + '</textarea>' +
    '<p class="hint">' + t('problem.hint') + '</p>';
}

function renderContext() {
  return '<label class="field-label" for="context">' + t('context.label') + '</label>' +
    '<textarea id="context" placeholder="' + esc(t('context.placeholder')) + '">' + esc(state.context) + '</textarea>' +
    '<p class="hint">' + t('context.hint') + '</p>';
}

function renderReview() {
  return '<div class="review"><dl>' +
    '<dt>' + t('review.mode') + '</dt><dd>' + modeLabel(state.mode) + '</dd>' +
    '<dt>' + t('review.problem') + '</dt><dd>' + esc(state.problem) + '</dd>' +
    '<dt>' + t('review.context') + '</dt><dd>' + esc(state.context || '—') + '</dd>' +
  '</dl></div>';
}

function renderResult() {
  if (state.status === 'loading') {
    return '<div class="notice"><span class="spinner"></span> ' + t('loading') + '</div>';
  }
  if (state.status === 'error') {
    return '<div class="notice">' + esc(t('error.prefix') + (state.error || '')) + '</div>';
  }
  var r = state.result;
  if (r && r.ok) {
    var a = (r.analogies || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
    var out = block('result.cleaned', esc(r.cleaned_problem));
    out += block('result.contradiction', esc(r.contradiction));
    out += block('result.physical', esc(r.physical_contradiction));
    out += block('result.ifr', esc(r.ideal_final_result));
    if (a) out += '<div class="result-block"><h2>' + t('result.analogies') + '</h2><ul>' + a + '</ul></div>';
    out += block('result.critique', esc(r.critique));
    out += block('result.solution', esc(r.solution));
    return out;
  }
  return '<div class="notice"><strong>' + t('notice.title') + '</strong> ' + t('notice.body') + '</div>' +
    '<div class="result-block"><h2>' + t('notice.sent') + '</h2><p>' + esc(JSON.stringify(r, null, 2)) + '</p></div>';
}

function block(key, html) {
  return '<div class="result-block"><h2>' + t(key) + '</h2><p>' + html + '</p></div>';
}

function renderNav() {
  if (state.step === 4) {
    return '<div class="step-nav spacer"><button class="btn primary" data-action="restart">' + t('nav.restart') + '</button></div>';
  }
  var back = state.step > 0 ? '<button class="btn" data-action="back">' + t('nav.back') + '</button>' : '<span></span>';
  var nextLabel = state.step === 3 ? t('nav.run') : t('nav.next');
  var disabled = (state.step === 1 && !state.problem.trim()) ? ' disabled' : '';
  return '<div class="step-nav">' + back + '<button class="btn primary" data-action="next"' + disabled + '>' + nextLabel + '</button></div>';
}

function bind() {
  app.querySelectorAll('input[name="mode"]').forEach(function (el) {
    el.addEventListener('change', function () { state.mode = el.value; });
  });
  var problem = app.querySelector('#problem');
  if (problem) problem.addEventListener('input', function () { state.problem = problem.value; });
  var context = app.querySelector('#context');
  if (context) context.addEventListener('input', function () { state.context = context.value; });
  app.querySelectorAll('[data-action]').forEach(function (btn) {
    btn.addEventListener('click', function () { onAction(btn.dataset.action); });
  });
}

function onAction(action) {
  if (action === 'restart') {
    state = { step: 0, mode: state.mode, problem: '', context: '', status: 'idle', result: null, error: null };
    if (window.TrizFace) window.TrizFace.set('idle');
    if (window.TrizGraph) window.TrizGraph.calm();
    render();
    return;
  }
  if (action === 'back') { state.step = Math.max(0, state.step - 1); render(); return; }
  if (action === 'next') {
    if (state.step === 1 && !state.problem.trim()) return;
    if (state.step === 3) return submit();
    state.step += 1;
    render();
  }
}

async function submit() {
  state.step = 4;
  state.status = 'loading';
  state.result = null;
  state.error = null;
  render();
  if (window.TrizFace) window.TrizFace.set('thinking');
  if (window.TrizGraph) window.TrizGraph.burst();

  try {
    var res = await fetch('/api/solve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode: state.mode, problem: state.problem, context: state.context }),
    });
    var data = null;
    try { data = await res.json(); } catch (e) {}
    state.result = data;
    state.status = 'done';
    if (window.TrizFace) window.TrizFace.set(res.ok && data && data.ok ? 'happy' : 'sad');
  } catch (err) {
    state.error = err.message;
    state.status = 'error';
    if (window.TrizFace) window.TrizFace.set('sad');
  }
  render();
}

window.TrizApp = {
  setLang: function (lang) {
    if (!I18N[lang]) return;
    LANG = lang;
    try { localStorage.setItem('triz-lang', lang); } catch (e) {}
    render();
  },
  getLang: function () { return LANG; },
};

render();


