var I18N = {
  en: {
    "about.title": "About triz.wf",
    "about.subtitle": "An anti-compromise R&D solver built on TRIZ, patent graphs and LLMs.",
    "about.what.title": "What we do",
    "about.what.p1": "Language models tend to produce statistically averaged, compromise answers — the “vector of inertia”. triz.wf replaces free prompting with a rigid deterministic algorithm (a modern ARIZ).",
    "about.what.p2": "It sharpens the contradiction, finds cross-industry engineering analogs in the world patent base, and passes every hypothesis through an adversarial critic that rejects solutions built on added complexity or expensive external resources.",
    "about.how.title": "How it works",
    "about.how.intro": "You do not need to know TRIZ theory — the wizard leads you through fixed steps:",
    "about.how.s1": "Pick a mode — engineering or business.",
    "about.how.s2": "Describe the problem in your own words.",
    "about.how.s3": "Add context: constraints and what has been tried.",
    "about.how.s4": "The system strips the jargon, extracts the conflicting pair and formulates the physical contradiction and the ideal final result.",
    "about.how.s5": "It retrieves cross-domain patent analogs (excluding your own CPC class), critiques the hypotheses and returns a solution.",
    "about.modes.title": "Two modes",
    "about.modes.eng.title": "Engineering (Hardware / DeepTech)",
    "about.modes.eng.desc": "Relies on physical effects and the patent base.",
    "about.modes.biz.title": "Business & product (Business TRIZ)",
    "about.modes.biz.desc": "Resolves system contradictions in monetization, distribution and UX.",
    "about.stack.title": "How it is built",
    "about.stack.body": "Lightweight shell on Cloudflare Pages. AI inference with a fine-tuned open model on Modal (FastAPI + vLLM). Hybrid retrieval (dense + BM25) over the TRIZ theory archive. Cross-domain patent search on Google BigQuery Patents.",
    "about.status": "Status: the interface is live; the solver backend is being wired up."
  },
  ru: {
    "about.title": "О triz.wf",
    "about.subtitle": "Анти-компромиссный R&D-решатель на базе ТРИЗ, патентных графов и LLM.",
    "about.what.title": "Что мы делаем",
    "about.what.p1": "Языковые модели склонны выдавать статистически усреднённые, компромиссные ответы — «вектор инерции». triz.wf заменяет свободные промпты жёстким детерминированным алгоритмом (современным АРИЗ).",
    "about.what.p2": "Он обостряет противоречие, находит межотраслевые инженерные аналоги в мировой патентной базе и прогоняет каждую гипотезу через агента-критика, который отбраковывает решения на усложнении системы или дорогих внешних ресурсах.",
    "about.how.title": "Как это работает",
    "about.how.intro": "Знать теорию ТРИЗ не нужно — мастер ведёт по фиксированным шагам:",
    "about.how.s1": "Выберите режим — инженерный или бизнес.",
    "about.how.s2": "Опишите проблему своими словами.",
    "about.how.s3": "Добавьте контекст: ограничения и что уже пробовали.",
    "about.how.s4": "Система очищает от жаргона, выделяет конфликтующую пару и формулирует физическое противоречие и ИКР.",
    "about.how.s5": "Ищет межотраслевые патентные аналоги (исключая ваш класс CPC), критикует гипотезы и возвращает решение.",
    "about.modes.title": "Два режима",
    "about.modes.eng.title": "Инженерный (Hardware / DeepTech)",
    "about.modes.eng.desc": "Опора на физические эффекты и патентную базу.",
    "about.modes.biz.title": "Бизнес и продукт (Business TRIZ)",
    "about.modes.biz.desc": "Разрешение системных противоречий в монетизации, дистрибуции и UX.",
    "about.stack.title": "Как устроено",
    "about.stack.body": "Лёгкая оболочка на Cloudflare Pages. ИИ-инференс дообученной открытой модели на Modal (FastAPI + vLLM). Гибридный поиск (dense + BM25) по архиву теории ТРИЗ. Межотраслевой патентный поиск в Google BigQuery Patents.",
    "about.status": "Статус: интерфейс работает; бэкенд решателя подключается."
  }
  ,
  uk: {
    "about.title": "Про triz.wf",
    "about.subtitle": "Антикомпромісний R&D-розв’язувач на базі ТРИЗ, патентних графів і LLM.",
    "about.what.title": "Що ми робимо",
    "about.what.p1": "Мовні моделі схильні видавати статистично усереднені, компромісні відповіді — «вектор інерції». triz.wf замінює вільні промпти жорстким детермінованим алгоритмом (сучасним АРІЗ).",
    "about.what.p2": "Він загострює протиріччя, знаходить міжгалузеві інженерні аналоги у світовій патентній базі та проганяє кожну гіпотезу через агента-критика, який відбраковує рішення на ускладненні системи чи дорогих зовнішніх ресурсах.",
    "about.how.title": "Як це працює",
    "about.how.intro": "Знати теорію ТРИЗ не потрібно — майстер веде за фіксованими кроками:",
    "about.how.s1": "Оберіть режим — інженерний або бізнес.",
    "about.how.s2": "Опишіть проблему своїми словами.",
    "about.how.s3": "Додайте контекст: обмеження та що вже пробували.",
    "about.how.s4": "Система очищає від жаргону, виділяє конфліктуючу пару та формулює фізичне протиріччя й ІКР.",
    "about.how.s5": "Шукає міжгалузеві патентні аналоги (виключаючи ваш клас CPC), критикує гіпотези та повертає рішення.",
    "about.modes.title": "Два режими",
    "about.modes.eng.title": "Інженерний (Hardware / DeepTech)",
    "about.modes.eng.desc": "Опора на фізичні ефекти та патентну базу.",
    "about.modes.biz.title": "Бізнес і продукт (Business TRIZ)",
    "about.modes.biz.desc": "Розв’язання системних протиріч у монетизації, дистрибуції та UX.",
    "about.stack.title": "Як влаштовано",
    "about.stack.body": "Легка оболонка на Cloudflare Pages. ШІ-інференс донавченої відкритої моделі на Modal (FastAPI + vLLM). Гібридний пошук (dense + BM25) за архівом теорії ТРИЗ. Міжгалузевий патентний пошук у Google BigQuery Patents.",
    "about.status": "Статус: інтерфейс працює; бекенд розв’язувача підключається."
  },
  fr: {
    "about.title": "À propos de triz.wf",
    "about.subtitle": "Un résolveur R&D anti-compromis fondé sur TRIZ, les graphes de brevets et les LLM.",
    "about.what.title": "Ce que nous faisons",
    "about.what.p1": "Les modèles de langage tendent à produire des réponses statistiquement moyennes et compromettantes — le « vecteur d’inertie ». triz.wf remplace le prompting libre par un algorithme déterministe rigide (un ARIZ moderne).",
    "about.what.p2": "Il accentue la contradiction, trouve des analogues d’ingénierie inter-domaines dans la base mondiale de brevets et fait passer chaque hypothèse par un critique adverse qui rejette les solutions fondées sur la complexité ajoutée ou des ressources externes coûteuses.",
    "about.how.title": "Comment ça marche",
    "about.how.intro": "Pas besoin de connaître la théorie TRIZ — l’assistant vous guide par étapes fixes :",
    "about.how.s1": "Choisissez un mode — ingénierie ou business.",
    "about.how.s2": "Décrivez le problème avec vos mots.",
    "about.how.s3": "Ajoutez le contexte : contraintes et ce qui a été essayé.",
    "about.how.s4": "Le système nettoie le jargon, extrait la paire en conflit et formule la contradiction physique et le RIF.",
    "about.how.s5": "Il récupère des analogues de brevets inter-domaines (hors votre classe CPC), critique les hypothèses et renvoie une solution.",
    "about.modes.title": "Deux modes",
    "about.modes.eng.title": "Ingénierie (Hardware / DeepTech)",
    "about.modes.eng.desc": "S’appuie sur les effets physiques et la base de brevets.",
    "about.modes.biz.title": "Business & produit (Business TRIZ)",
    "about.modes.biz.desc": "Résout les contradictions système en monétisation, distribution et UX.",
    "about.stack.title": "Architecture",
    "about.stack.body": "Coque légère sur Cloudflare Pages. Inférence IA avec un modèle ouvert affiné sur Modal (FastAPI + vLLM). Recherche hybride (dense + BM25) sur l’archive de la théorie TRIZ. Recherche de brevets inter-domaines sur Google BigQuery Patents.",
    "about.status": "Statut : l’interface est en ligne ; le backend du résolveur est en cours de branchement."
  }
};
var LANG = 'ru';
try { LANG = localStorage.getItem('triz-lang') || 'ru'; } catch (e) {}

function t(key) {
  var dict = I18N[LANG] || I18N.ru;
  return dict[key] || I18N.ru[key] || key;
}

function render() {
  var el = document.getElementById('about');
  if (!el) return;
  document.title = t('about.title') + ' — triz.wf';
  el.innerHTML =
    '<h1>' + t('about.title') + '</h1>' +
    '<p class="about-subtitle">' + t('about.subtitle') + '</p>' +
    '<section><h2>' + t('about.what.title') + '</h2>' +
      '<p>' + t('about.what.p1') + '</p>' +
      '<p>' + t('about.what.p2') + '</p></section>' +
    '<section><h2>' + t('about.how.title') + '</h2>' +
      '<p>' + t('about.how.intro') + '</p>' +
      '<ol>' +
        '<li>' + t('about.how.s1') + '</li>' +
        '<li>' + t('about.how.s2') + '</li>' +
        '<li>' + t('about.how.s3') + '</li>' +
        '<li>' + t('about.how.s4') + '</li>' +
        '<li>' + t('about.how.s5') + '</li>' +
      '</ol></section>' +
    '<section><h2>' + t('about.modes.title') + '</h2>' +
      '<div class="about-modes">' +
        '<div><h3>' + t('about.modes.eng.title') + '</h3><p>' + t('about.modes.eng.desc') + '</p></div>' +
        '<div><h3>' + t('about.modes.biz.title') + '</h3><p>' + t('about.modes.biz.desc') + '</p></div>' +
      '</div></section>' +
    '<section><h2>' + t('about.stack.title') + '</h2><p>' + t('about.stack.body') + '</p></section>' +
    '<p class="about-status">' + t('about.status') + '</p>';
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

