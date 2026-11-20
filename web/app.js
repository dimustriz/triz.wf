var I18N = {
  en: {
    "steps.mode.title": "Mode",
    "steps.mode.subtitle": "Choose the type of task",
    "steps.problem.title": "Problem",
    "steps.problem.subtitle": "Describe the problem in your own words",
    "steps.context.title": "Context",
    "steps.context.subtitle": "Constraints and what has been tried",
    "steps.review.title": "Review",
    "steps.review.subtitle": "Confirm and run the analysis",
    "steps.result.title": "Analysis",
    "steps.result.subtitle": "TRIZ analysis result",
    "mode.engineering": "Engineering & hardware",
    "mode.engineeringDesc": "Mechanics, materials, electronics, DeepTech — physical and technical contradictions.",
    "mode.product": "Product & UX",
    "mode.productDesc": "Improve a feature or the experience without trading off simplicity, cost or speed.",
    "mode.business": "Business & strategy",
    "mode.businessDesc": "Monetization, distribution, growth — system contradictions in the business model.",
    "mode.science": "Science & R&D",
    "mode.scienceDesc": "Research problems and abstract system contradictions.",
    "mode.universal": "Universal",
    "mode.universalDesc": "Any task where a contradiction blocks you — the generic TRIZ path.",
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
    "steps.mode.subtitle": "Выберите тип задачи",
    "steps.problem.title": "Задача",
    "steps.problem.subtitle": "Опишите проблему своими словами",
    "steps.context.title": "Контекст",
    "steps.context.subtitle": "Ограничения и что уже пробовали",
    "steps.review.title": "Проверка",
    "steps.review.subtitle": "Подтвердите и запустите разбор",
    "steps.result.title": "Разбор",
    "steps.result.subtitle": "Результат TRIZ-анализа",
    "mode.engineering": "Инженерия и железо",
    "mode.engineeringDesc": "Механика, материалы, электроника, DeepTech — физические и технические противоречия.",
    "mode.product": "Продукт и UX",
    "mode.productDesc": "Улучшить функцию или опыт без потери простоты, цены или скорости.",
    "mode.business": "Бизнес и стратегия",
    "mode.businessDesc": "Монетизация, дистрибуция, рост — системные противоречия в бизнес-модели.",
    "mode.science": "Наука и R&D",
    "mode.scienceDesc": "Исследовательские задачи и абстрактные системные противоречия.",
    "mode.universal": "Универсальный",
    "mode.universalDesc": "Любая задача, где мешает противоречие — универсальный путь ТРИЗ.",
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
    "steps.mode.subtitle": "Оберіть тип задачі",
    "steps.problem.title": "Задача",
    "steps.problem.subtitle": "Опишіть проблему своїми словами",
    "steps.context.title": "Контекст",
    "steps.context.subtitle": "Обмеження та що вже пробували",
    "steps.review.title": "Перевірка",
    "steps.review.subtitle": "Підтвердіть і запустіть розбір",
    "steps.result.title": "Розбір",
    "steps.result.subtitle": "Результат TRIZ-аналізу",
    "mode.engineering": "Інженерія та залізо",
    "mode.engineeringDesc": "Механіка, матеріали, електроніка, DeepTech — фізичні й технічні протиріччя.",
    "mode.product": "Продукт і UX",
    "mode.productDesc": "Покращити функцію чи досвід без втрати простоти, ціни або швидкості.",
    "mode.business": "Бізнес і стратегія",
    "mode.businessDesc": "Монетизація, дистрибуція, зростання — системні протиріччя в бізнес-моделі.",
    "mode.science": "Наука та R&D",
    "mode.scienceDesc": "Дослідницькі задачі та абстрактні системні протиріччя.",
    "mode.universal": "Універсальний",
    "mode.universalDesc": "Будь-яка задача, де заважає протиріччя — універсальний шлях ТРИЗ.",
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
    "steps.mode.subtitle": "Choisissez le type de tâche",
    "steps.problem.title": "Problème",
    "steps.problem.subtitle": "Décrivez le problème avec vos mots",
    "steps.context.title": "Contexte",
    "steps.context.subtitle": "Contraintes et ce qui a été essayé",
    "steps.review.title": "Vérification",
    "steps.review.subtitle": "Confirmez et lancez l'analyse",
    "steps.result.title": "Analyse",
    "steps.result.subtitle": "Résultat de l'analyse TRIZ",
    "mode.engineering": "Ingénierie & hardware",
    "mode.engineeringDesc": "Mécanique, matériaux, électronique, DeepTech — contradictions physiques et techniques.",
    "mode.product": "Produit & UX",
    "mode.productDesc": "Améliorer une fonction ou l'expérience sans sacrifier la simplicité, le coût ou la vitesse.",
    "mode.business": "Business & stratégie",
    "mode.businessDesc": "Monétisation, distribution, croissance — contradictions système du modèle économique.",
    "mode.science": "Science & R&D",
    "mode.scienceDesc": "Problèmes de recherche et contradictions système abstraites.",
    "mode.universal": "Universel",
    "mode.universalDesc": "Toute tâche où une contradiction vous bloque — le chemin TRIZ générique.",
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
  },
  de: {
    "steps.mode.title": "Modus",
    "steps.mode.subtitle": "Wähle den Aufgabentyp",
    "steps.problem.title": "Problem",
    "steps.problem.subtitle": "Beschreibe das Problem in deinen eigenen Worten",
    "steps.context.title": "Kontext",
    "steps.context.subtitle": "Einschränkungen und was bereits versucht wurde",
    "steps.review.title": "Prüfung",
    "steps.review.subtitle": "Bestätigen und Analyse starten",
    "steps.result.title": "Analyse",
    "steps.result.subtitle": "Ergebnis der TRIZ-Analyse",
    "mode.engineering": "Ingenieurwesen & Hardware",
    "mode.engineeringDesc": "Mechanik, Materialien, Elektronik, DeepTech — physikalische und technische Widersprüche.",
    "mode.product": "Produkt & UX",
    "mode.productDesc": "Eine Funktion oder das Erlebnis verbessern, ohne Einfachheit, Kosten oder Tempo zu opfern.",
    "mode.business": "Business & Strategie",
    "mode.businessDesc": "Monetarisierung, Vertrieb, Wachstum — Systemwidersprüche im Geschäftsmodell.",
    "mode.science": "Wissenschaft & R&D",
    "mode.scienceDesc": "Forschungsprobleme und abstrakte Systemwidersprüche.",
    "mode.universal": "Universell",
    "mode.universalDesc": "Jede Aufgabe, bei der ein Widerspruch blockiert — der generische TRIZ-Weg.",
    "problem.label": "Problemstellung",
    "problem.placeholder": "z. B. „Wir wollen ein dünneres Gehäuse, aber es verliert an Festigkeit“…",
    "problem.hint": "Mach dir keine Gedanken um die Formulierung — das System entfernt den Jargon.",
    "context.label": "Kontext (optional)",
    "context.placeholder": "Was du versucht hast, Einschränkungen, was nicht schlechter werden darf…",
    "context.hint": "Hilft, branchenübergreifende Analogien zu finden und schwache Kompromisse zu verwerfen.",
    "review.mode": "Modus",
    "review.problem": "Problem",
    "review.context": "Kontext",
    "result.cleaned": "Bereinigte Formulierung",
    "result.contradiction": "Widerspruchspaar",
    "result.physical": "Physikalischer Widerspruch",
    "result.ifr": "Idealbild (IFR)",
    "result.analogies": "Branchenübergreifende Analogien",
    "result.critique": "Kritik",
    "result.solution": "Lösung",
    "nav.back": "← Zurück",
    "nav.next": "Weiter →",
    "nav.run": "Analyse starten",
    "nav.restart": "Neues Problem",
    "loading": "TRIZ-Analyse läuft…",
    "notice.title": "Löser noch nicht verbunden.",
    "notice.body": "Das Backend (FastAPI + Modell auf Modal) ist noch nicht bereitgestellt, daher liefert der Assistent einen Platzhalter. Setze TRIZ_SOLVER_API in Cloudflare Pages, um die echte TRIZ-Analyse zu aktivieren.",
    "notice.sent": "Gesendete Anfrage",
    "error.prefix": "API nicht erreichbar: "
  }
  ,
  es: {
    "steps.mode.title": "Modo",
    "steps.mode.subtitle": "Elige el tipo de tarea",
    "steps.problem.title": "Problema",
    "steps.problem.subtitle": "Describe el problema con tus propias palabras",
    "steps.context.title": "Contexto",
    "steps.context.subtitle": "Restricciones y lo que ya se ha probado",
    "steps.review.title": "Revisión",
    "steps.review.subtitle": "Confirma y lanza el análisis",
    "steps.result.title": "Análisis",
    "steps.result.subtitle": "Resultado del análisis TRIZ",
    "mode.engineering": "Ingeniería y hardware",
    "mode.engineeringDesc": "Mecánica, materiales, electrónica, DeepTech — contradicciones físicas y técnicas.",
    "mode.product": "Producto y UX",
    "mode.productDesc": "Mejorar una función o la experiencia sin sacrificar simplicidad, coste o velocidad.",
    "mode.business": "Negocio y estrategia",
    "mode.businessDesc": "Monetización, distribución, crecimiento — contradicciones de sistema en el modelo de negocio.",
    "mode.science": "Ciencia e I+D",
    "mode.scienceDesc": "Problemas de investigación y contradicciones de sistema abstractas.",
    "mode.universal": "Universal",
    "mode.universalDesc": "Cualquier tarea donde una contradicción te bloquea — la vía TRIZ genérica.",
    "problem.label": "Planteamiento del problema",
    "problem.placeholder": "p. ej. «Queremos una carcasa más fina, pero pierde resistencia»…",
    "problem.hint": "No te preocupes por la redacción — el sistema limpiará la jerga.",
    "context.label": "Contexto (opcional)",
    "context.placeholder": "Qué has probado, restricciones, qué no debe empeorar…",
    "context.hint": "Ayuda a encontrar analogías entre dominios y descartar compromisos débiles.",
    "review.mode": "Modo",
    "review.problem": "Problema",
    "review.context": "Contexto",
    "result.cleaned": "Planteamiento depurado",
    "result.contradiction": "Par de contradicción",
    "result.physical": "Contradicción física",
    "result.ifr": "Resultado final ideal",
    "result.analogies": "Analogías entre dominios",
    "result.critique": "Crítica",
    "result.solution": "Solución",
    "nav.back": "← Atrás",
    "nav.next": "Siguiente →",
    "nav.run": "Lanzar análisis",
    "nav.restart": "Nuevo problema",
    "loading": "Ejecutando análisis TRIZ…",
    "notice.title": "Solucionador aún no conectado.",
    "notice.body": "El backend (FastAPI + modelo en Modal) aún no está desplegado, así que el asistente devuelve un marcador. Define TRIZ_SOLVER_API en Cloudflare Pages para activar el análisis TRIZ real.",
    "notice.sent": "Solicitud enviada",
    "error.prefix": "No se pudo alcanzar la API: "
  }
  ,
  it: {
    "steps.mode.title": "Modalità",
    "steps.mode.subtitle": "Scegli il tipo di attività",
    "steps.problem.title": "Problema",
    "steps.problem.subtitle": "Descrivi il problema con parole tue",
    "steps.context.title": "Contesto",
    "steps.context.subtitle": "Vincoli e cosa è già stato provato",
    "steps.review.title": "Verifica",
    "steps.review.subtitle": "Conferma e avvia l'analisi",
    "steps.result.title": "Analisi",
    "steps.result.subtitle": "Risultato dell'analisi TRIZ",
    "mode.engineering": "Ingegneria e hardware",
    "mode.engineeringDesc": "Meccanica, materiali, elettronica, DeepTech — contraddizioni fisiche e tecniche.",
    "mode.product": "Prodotto e UX",
    "mode.productDesc": "Migliorare una funzione o l'esperienza senza sacrificare semplicità, costi o velocità.",
    "mode.business": "Business e strategia",
    "mode.businessDesc": "Monetizzazione, distribuzione, crescita — contraddizioni di sistema nel modello di business.",
    "mode.science": "Scienza e R&D",
    "mode.scienceDesc": "Problemi di ricerca e contraddizioni di sistema astratte.",
    "mode.universal": "Universale",
    "mode.universalDesc": "Qualsiasi attività in cui una contraddizione ti blocca — il percorso TRIZ generico.",
    "problem.label": "Descrizione del problema",
    "problem.placeholder": "es. «Vogliamo un involucro più sottile, ma perde resistenza»…",
    "problem.hint": "Non preoccuparti della formulazione — il sistema toglierà il gergo.",
    "context.label": "Contesto (facoltativo)",
    "context.placeholder": "Cosa hai provato, vincoli, cosa non deve peggiorare…",
    "context.hint": "Aiuta a trovare analogie tra domini e a scartare compromessi deboli.",
    "review.mode": "Modalità",
    "review.problem": "Problema",
    "review.context": "Contesto",
    "result.cleaned": "Formulazione ripulita",
    "result.contradiction": "Coppia di contraddizione",
    "result.physical": "Contraddizione fisica",
    "result.ifr": "Risultato finale ideale",
    "result.analogies": "Analogie tra domini",
    "result.critique": "Critica",
    "result.solution": "Soluzione",
    "nav.back": "← Indietro",
    "nav.next": "Avanti →",
    "nav.run": "Avvia analisi",
    "nav.restart": "Nuovo problema",
    "loading": "Analisi TRIZ in corso…",
    "notice.title": "Risolutore non ancora collegato.",
    "notice.body": "Il backend (FastAPI + modello su Modal) non è ancora distribuito, quindi il wizard restituisce un segnaposto. Imposta TRIZ_SOLVER_API in Cloudflare Pages per attivare l'analisi TRIZ reale.",
    "notice.sent": "Richiesta inviata",
    "error.prefix": "Impossibile raggiungere l'API: "
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

function modeLabel(m) { return t('mode.' + m) || m; }
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

var MODES = ['engineering', 'product', 'business', 'science', 'universal'];

function renderMode() {
  var cards = MODES.map(function (m) {
    var checked = state.mode === m ? 'checked' : '';
    return '<label class="mode-card"><input type="radio" name="mode" value="' + m + '" ' + checked + ' />' +
      '<span class="mode-title">' + t('mode.' + m) + '</span>' +
      '<p class="mode-desc">' + t('mode.' + m + 'Desc') + '</p></label>';
  }).join('');
  return '<div class="mode-grid">' + cards + '</div>';
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
    el.addEventListener('change', function () { state.mode = el.value; if (window.TrizFace) window.TrizFace.set('surprised'); });
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
  if (action === 'back') { state.step = Math.max(0, state.step - 1); if (window.TrizFace) window.TrizFace.hide(); if (window.TrizSkeptic) window.TrizSkeptic.set('skeptic'); render(); return; }
  if (action === 'next') {
    if (state.step === 1 && !state.problem.trim()) return;
    if (state.step === 3) return submit();
    state.step += 1;
    if (window.TrizFace) window.TrizFace.set('thinking');
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
    if (window.TrizSkeptic) window.TrizSkeptic.set('skeptic');
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
if (window.TrizFace) window.TrizFace.set('idle');


