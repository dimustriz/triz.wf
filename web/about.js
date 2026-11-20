var I18N = {
  en: {
    "about.title": "About triz.wf",
    "about.subtitle": "An anti-compromise R&D solver built on TRIZ, patent graphs and LLMs.",
    "about.why.title": "Why this matters",
    "about.why.p1": "Ordinary language models answer by reproducing the most common patterns, so on open questions they drift toward the statistical average — a compromise.",
    "about.why.p2": "On one class of problems this fails hard: when improving one parameter inevitably worsens another — “thinner but weaker”, “cheaper but worse”, “more features but more complex”. The average answer to a contradiction is just a weak trade-off.",
    "about.why.p3": "TRIZ is a method built exactly for resolving such contradictions — without compromise, using the system’s own internal resources. triz.wf runs it for you, so you don’t need to know the theory.",
    "about.types.title": "Types of tasks",
    "about.types.eng.title": "Engineering & hardware",
    "about.types.eng.desc": "Mechanics, materials, electronics, DeepTech — physical and technical contradictions.",
    "about.types.prod.title": "Product & UX",
    "about.types.prod.desc": "Improve a feature or the experience without trading off simplicity, cost or speed.",
    "about.types.biz.title": "Business & strategy",
    "about.types.biz.desc": "Monetization, distribution, growth — system contradictions in the business model.",
    "about.types.sci.title": "Science & R&D",
    "about.types.sci.desc": "Research problems and abstract system contradictions.",
    "about.types.univ.title": "Universal",
    "about.types.univ.desc": "Any task where a contradiction blocks you — the generic TRIZ path.",
    "about.how.title": "How it works",
    "about.how.intro": "You don’t need to know TRIZ theory — the wizard leads you through fixed steps:",
    "about.how.s1": "Pick the task type.",
    "about.how.s2": "Describe the problem in your own words.",
    "about.how.s3": "Add context: constraints and what has been tried.",
    "about.how.s4": "The system strips the jargon, extracts the conflicting pair and formulates the physical contradiction and the ideal final result.",
    "about.how.s5": "It retrieves cross-domain patent analogs (excluding your own CPC class), critiques the hypotheses and returns a solution.",
    "about.stack.title": "How it is built",
    "about.stack.simple": "In simple words: the interface runs on Cloudflare’s edge, and the heavy AI model spins up on demand only while you use it — so when nobody is solving, it costs nothing.",
    "about.stack.detail": "Under the hood: a lightweight shell on Cloudflare Pages; a fine-tuned open model served on Modal (FastAPI + vLLM) that starts in seconds and stops after idle; hybrid retrieval (dense + BM25) over the TRIZ theory archive; cross-domain patent search on Google BigQuery Patents.",
    "about.stack.why": "Why it’s good: zero idle cost, fast startup, and the forced cross-domain patent search plus the adversarial critic break the psychological inertia that makes a plain AI give the average answer.",
    "about.status": "Status: the interface is live; the solver backend is being wired up."
  }
  ,
  ru: {
    "about.title": "О triz.wf",
    "about.subtitle": "Анти-компромиссный R&D-решатель на базе ТРИЗ, патентных графов и LLM.",
    "about.why.title": "Зачем это нужно",
    "about.why.p1": "Обычные языковые модели отвечают, воспроизводя самые частые паттерны, поэтому на открытых вопросах они скатываются к статистическому среднему — компромиссу.",
    "about.why.p2": "На одном классе задач это ломается: когда улучшение одного параметра неизбежно ухудшает другой — «тоньше, но слабее», «дешевле, но хуже», «больше функций, но сложнее». Средний ответ на противоречие — это слабый компромисс.",
    "about.why.p3": "ТРИЗ — метод, созданный именно для разрешения таких противоречий: без компромисса, за счёт внутренних ресурсов самой системы. triz.wf прогоняет его за вас, поэтому знать теорию не нужно.",
    "about.types.title": "Типы задач",
    "about.types.eng.title": "Инженерия и железо",
    "about.types.eng.desc": "Механика, материалы, электроника, DeepTech — физические и технические противоречия.",
    "about.types.prod.title": "Продукт и UX",
    "about.types.prod.desc": "Улучшить функцию или опыт без потери простоты, цены или скорости.",
    "about.types.biz.title": "Бизнес и стратегия",
    "about.types.biz.desc": "Монетизация, дистрибуция, рост — системные противоречия в бизнес-модели.",
    "about.types.sci.title": "Наука и R&D",
    "about.types.sci.desc": "Исследовательские задачи и абстрактные системные противоречия.",
    "about.types.univ.title": "Универсальный",
    "about.types.univ.desc": "Любая задача, где мешает противоречие — универсальный путь ТРИЗ.",
    "about.how.title": "Как это работает",
    "about.how.intro": "Знать теорию ТРИЗ не нужно — мастер ведёт по фиксированным шагам:",
    "about.how.s1": "Выберите тип задачи.",
    "about.how.s2": "Опишите проблему своими словами.",
    "about.how.s3": "Добавьте контекст: ограничения и что уже пробовали.",
    "about.how.s4": "Система очищает от жаргона, выделяет конфликтующую пару и формулирует физическое противоречие и ИКР.",
    "about.how.s5": "Ищет межотраслевые патентные аналоги (исключая ваш класс CPC), критикует гипотезы и возвращает решение.",
    "about.stack.title": "Как устроено",
    "about.stack.simple": "Простыми словами: интерфейс работает на edge Cloudflare, а тяжёлая ИИ-модель запускается по требованию — только пока вы решаете задачу. Поэтому в простое это ничего не стоит.",
    "about.stack.detail": "Под капотом: лёгкая оболочка на Cloudflare Pages; дообученная открытая модель на Modal (FastAPI + vLLM), которая стартует за секунды и гасится после простоя; гибридный поиск (dense + BM25) по архиву теории ТРИЗ; межотраслевой патентный поиск в Google BigQuery Patents.",
    "about.stack.why": "Почему это хорошо: нулевая стоимость простоя, быстрый старт, а принудительный межотраслевой патентный поиск и агент-критик ломают психологическую инерцию, из-за которой обычный ИИ выдаёт средний ответ.",
    "about.status": "Статус: интерфейс работает; бэкенд решателя подключается."
  }
  ,
  uk: {
    "about.title": "Про triz.wf",
    "about.subtitle": "Антикомпромісний R&D-розв’язувач на базі ТРИЗ, патентних графів і LLM.",
    "about.why.title": "Навіщо це потрібно",
    "about.why.p1": "Звичайні мовні моделі відповідають, відтворюючи найчастіші патерни, тож на відкритих питаннях вони скочуються до статистичного середнього — компромісу.",
    "about.why.p2": "На одному класі задач це ламається: коли покращення одного параметра неминуче погіршує інший — «тонше, але слабше», «дешевше, але гірше», «більше функцій, але складніше». Середня відповідь на протиріччя — це слабкий компроміс.",
    "about.why.p3": "ТРИЗ — метод, створений саме для розв’язання таких протиріч: без компромісу, за рахунок внутрішніх ресурсів системи. triz.wf проганяє його за вас, тож знати теорію не потрібно.",
    "about.types.title": "Типи задач",
    "about.types.eng.title": "Інженерія та залізо",
    "about.types.eng.desc": "Механіка, матеріали, електроніка, DeepTech — фізичні й технічні протиріччя.",
    "about.types.prod.title": "Продукт і UX",
    "about.types.prod.desc": "Покращити функцію чи досвід без втрати простоти, ціни або швидкості.",
    "about.types.biz.title": "Бізнес і стратегія",
    "about.types.biz.desc": "Монетизація, дистрибуція, зростання — системні протиріччя в бізнес-моделі.",
    "about.types.sci.title": "Наука та R&D",
    "about.types.sci.desc": "Дослідницькі задачі та абстрактні системні протиріччя.",
    "about.types.univ.title": "Універсальний",
    "about.types.univ.desc": "Будь-яка задача, де заважає протиріччя — універсальний шлях ТРИЗ.",
    "about.how.title": "Як це працює",
    "about.how.intro": "Знати теорію ТРИЗ не потрібно — майстер веде за фіксованими кроками:",
    "about.how.s1": "Оберіть тип задачі.",
    "about.how.s2": "Опишіть проблему своїми словами.",
    "about.how.s3": "Додайте контекст: обмеження та що вже пробували.",
    "about.how.s4": "Система очищає від жаргону, виділяє конфліктуючу пару та формулює фізичне протиріччя й ІКР.",
    "about.how.s5": "Шукає міжгалузеві патентні аналоги (виключаючи ваш клас CPC), критикує гіпотези та повертає рішення.",
    "about.stack.title": "Як влаштовано",
    "about.stack.simple": "Простими словами: інтерфейс працює на edge Cloudflare, а важка ШІ-модель запускається за вимогою — лише поки ви розв’язуєте задачу. Тому в простій це нічого не коштує.",
    "about.stack.detail": "Під капотом: легка оболонка на Cloudflare Pages; донавчена відкрита модель на Modal (FastAPI + vLLM), що стартує за секунди й гаситься після простою; гібридний пошук (dense + BM25) за архівом теорії ТРИЗ; міжгалузевий патентний пошук у Google BigQuery Patents.",
    "about.stack.why": "Чому це добре: нульова вартість простою, швидкий старт, а примусовий міжгалузевий патентний пошук і агент-критик ламають психологічну інерцію, через яку звичайний ШІ видає середню відповідь.",
    "about.status": "Статус: інтерфейс працює; бекенд розв’язувача підключається."
  }
  ,
  fr: {
    "about.title": "À propos de triz.wf",
    "about.subtitle": "Un résolveur R&D anti-compromis fondé sur TRIZ, les graphes de brevets et les LLM.",
    "about.why.title": "Pourquoi c’est important",
    "about.why.p1": "Les modèles de langage ordinaires répondent en reproduisant les schémas les plus fréquents, donc sur les questions ouvertes ils dérivent vers la moyenne statistique — un compromis.",
    "about.why.p2": "Sur une classe de problèmes, cela échoue : quand améliorer un paramètre dégrade inévitablement l’autre — « plus fin mais plus fragile », « moins cher mais moins bon », « plus de fonctions mais plus complexe ». La réponse moyenne à une contradiction n’est qu’un compromis faible.",
    "about.why.p3": "TRIZ est une méthode conçue précisément pour résoudre ces contradictions — sans compromis, en utilisant les ressources internes du système. triz.wf l’exécute pour vous, donc pas besoin de connaître la théorie.",
    "about.types.title": "Types de tâches",
    "about.types.eng.title": "Ingénierie & hardware",
    "about.types.eng.desc": "Mécanique, matériaux, électronique, DeepTech — contradictions physiques et techniques.",
    "about.types.prod.title": "Produit & UX",
    "about.types.prod.desc": "Améliorer une fonction ou l’expérience sans sacrifier la simplicité, le coût ou la vitesse.",
    "about.types.biz.title": "Business & stratégie",
    "about.types.biz.desc": "Monétisation, distribution, croissance — contradictions système du modèle économique.",
    "about.types.sci.title": "Science & R&D",
    "about.types.sci.desc": "Problèmes de recherche et contradictions système abstraites.",
    "about.types.univ.title": "Universel",
    "about.types.univ.desc": "Toute tâche où une contradiction vous bloque — le chemin TRIZ générique.",
    "about.how.title": "Comment ça marche",
    "about.how.intro": "Pas besoin de connaître la théorie TRIZ — l’assistant vous guide par étapes fixes :",
    "about.how.s1": "Choisissez le type de tâche.",
    "about.how.s2": "Décrivez le problème avec vos mots.",
    "about.how.s3": "Ajoutez le contexte : contraintes et ce qui a été essayé.",
    "about.how.s4": "Le système nettoie le jargon, extrait la paire en conflit et formule la contradiction physique et le RIF.",
    "about.how.s5": "Il récupère des analogues de brevets inter-domaines (hors votre classe CPC), critique les hypothèses et renvoie une solution.",
    "about.stack.title": "Architecture",
    "about.stack.simple": "En clair : l’interface tourne sur l’edge de Cloudflare, et le lourd modèle IA ne démarre qu’à la demande — seulement pendant que vous résolvez. Donc quand personne ne résout, cela ne coûte rien.",
    "about.stack.detail": "Sous le capot : une coque légère sur Cloudflare Pages ; un modèle ouvert affiné servi sur Modal (FastAPI + vLLM) qui démarre en quelques secondes puis s’arrête après inactivité ; une recherche hybride (dense + BM25) sur l’archive de la théorie TRIZ ; une recherche de brevets inter-domaines sur Google BigQuery Patents.",
    "about.stack.why": "Pourquoi c’est bien : coût d’inactivité nul, démarrage rapide, et la recherche forcée de brevets inter-domaines plus le critique adverse cassent l’inertie psychologique qui fait produire la réponse moyenne à une IA ordinaire.",
    "about.status": "Statut : l’interface est en ligne ; le backend du résolveur est en cours de branchement."
  }
};
var LANG = 'ru';
try { LANG = localStorage.getItem('triz-lang') || 'ru'; } catch (e) {}

function t(key) {
  var dict = I18N[LANG] || I18N.ru;
  return dict[key] || I18N.ru[key] || key;
}

function typeCard(key) {
  return '<div><h3>' + t(key + '.title') + '</h3><p>' + t(key + '.desc') + '</p></div>';
}

function render() {
  var el = document.getElementById('about');
  if (!el) return;
  document.title = t('about.title') + ' — triz.wf';
  el.innerHTML =
    '<h1>' + t('about.title') + '</h1>' +
    '<p class="about-subtitle">' + t('about.subtitle') + '</p>' +
    '<section><h2>' + t('about.why.title') + '</h2>' +
      '<p>' + t('about.why.p1') + '</p>' +
      '<p>' + t('about.why.p2') + '</p>' +
      '<p>' + t('about.why.p3') + '</p></section>' +
    '<section><h2>' + t('about.types.title') + '</h2>' +
      '<div class="about-types">' +
        typeCard('about.types.eng') +
        typeCard('about.types.prod') +
        typeCard('about.types.biz') +
        typeCard('about.types.sci') +
        typeCard('about.types.univ') +
      '</div></section>' +
    '<section><h2>' + t('about.how.title') + '</h2>' +
      '<p>' + t('about.how.intro') + '</p>' +
      '<ol>' +
        '<li>' + t('about.how.s1') + '</li>' +
        '<li>' + t('about.how.s2') + '</li>' +
        '<li>' + t('about.how.s3') + '</li>' +
        '<li>' + t('about.how.s4') + '</li>' +
        '<li>' + t('about.how.s5') + '</li>' +
      '</ol></section>' +
    '<section><h2>' + t('about.stack.title') + '</h2>' +
      '<p>' + t('about.stack.simple') + '</p>' +
      '<p>' + t('about.stack.detail') + '</p>' +
      '<p class="about-why">' + t('about.stack.why') + '</p></section>' +
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

