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
    "about.stack.web.title": "Web shell",
    "about.stack.web.desc": "A fast wizard on Cloudflare Pages — leads you through the steps and streams the answer back.",
    "about.stack.solver.title": "Solver model",
    "about.stack.solver.desc": "A fine-tuned open model trained on patents and TRIZ theory — sharpens the contradiction, formulates the ideal final result and generates the solution.",
    "about.stack.skeptic.title": "Skeptic model",
    "about.stack.skeptic.desc": "A separate model trained on a corpus of critical materials (analyses of mistakes and dead ends) — rejects weak, compromise solutions.",
    "about.stack.patents.title": "Patent base",
    "about.stack.patents.desc": "Direct integration with Google BigQuery Patents — cross-domain analog retrieval that excludes your own CPC class.",
    "about.stack.rag.title": "Theory archive",
    "about.stack.rag.desc": "Hybrid retrieval (dense embeddings + BM25) over the archive of TRIZ articles and heuristics.",
    "about.status": "Status: the interface is live; the solver backend is being wired up.",
    "about.train.title": "How the models are trained",
    "about.train.base.title": "Base model",
    "about.train.base.desc": "An open 7B–14B model from the Qwen or Llama family.",
    "about.train.method.title": "Fine-tuning",
    "about.train.method.desc": "QLoRA (SFT first, then DPO) with PyTorch + Unsloth + Hugging Face TRL, on rented RTX 4090s (RunPod / Vast.ai). We train compact LoRA adapters, not full weights.",
    "about.train.update.title": "Updates",
    "about.train.update.desc": "When a stronger base model is released, we re-run the same dataset and adapter on it and swap the adapter — cheap and fast, no full retraining."
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
    "about.stack.web.title": "Веб-оболочка",
    "about.stack.web.desc": "Быстрый мастер на Cloudflare Pages — ведёт по шагам и стримит ответ обратно.",
    "about.stack.solver.title": "Модель-решатель",
    "about.stack.solver.desc": "Дообученная открытая модель на патентах и теории ТРИЗ — обостряет противоречие, формулирует ИКР и генерирует решение.",
    "about.stack.skeptic.title": "Модель-скептик",
    "about.stack.skeptic.desc": "Отдельная модель, обученная на корпусе критических материалов (разборы ошибок и тупиков), — отбраковывает слабые компромиссные решения.",
    "about.stack.patents.title": "Патентная база",
    "about.stack.patents.desc": "Прямая интеграция с Google BigQuery Patents — межотраслевой поиск аналогов с исключением вашего класса CPC.",
    "about.stack.rag.title": "Архив теории",
    "about.stack.rag.desc": "Гибридный поиск (плотные эмбеддинги + BM25) по архиву статей и эвристик ТРИЗ.",
    "about.status": "Статус: интерфейс работает; бэкенд решателя подключается.",
    "about.train.title": "Как обучаются модели",
    "about.train.base.title": "Базовая модель",
    "about.train.base.desc": "Открытая модель 7B–14B параметров — семейства Qwen или Llama.",
    "about.train.method.title": "Дообучение",
    "about.train.method.desc": "QLoRA (сначала SFT, затем DPO) на PyTorch + Unsloth + Hugging Face TRL, на арендованных RTX 4090 (RunPod / Vast.ai). Обучаем компактные LoRA-адаптеры, а не полные веса.",
    "about.train.update.title": "Обновление",
    "about.train.update.desc": "Когда выходит более сильная базовая модель, мы заново прогоняем тот же датасет и адаптер на ней и меняем адаптер — дёшево и быстро, без полного переобучения."
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
    "about.stack.web.title": "Веб-оболонка",
    "about.stack.web.desc": "Швидкий майстер на Cloudflare Pages — веде за кроками та стримить відповідь назад.",
    "about.stack.solver.title": "Модель-розв’язувач",
    "about.stack.solver.desc": "Донавчена відкрита модель на патентах і теорії ТРИЗ — загострює протиріччя, формулює ІКР і генерує рішення.",
    "about.stack.skeptic.title": "Модель-скептик",
    "about.stack.skeptic.desc": "Окрема модель, навчена на корпусі критичних матеріалів (розбори помилок і глухих кутів), — відбраковує слабкі компромісні рішення.",
    "about.stack.patents.title": "Патентна база",
    "about.stack.patents.desc": "Пряма інтеграція з Google BigQuery Patents — міжгалузевий пошук аналогів із виключенням вашого класу CPC.",
    "about.stack.rag.title": "Архів теорії",
    "about.stack.rag.desc": "Гібридний пошук (щільні ембеддинги + BM25) за архівом статей і евристик ТРИЗ.",
    "about.status": "Статус: інтерфейс працює; бекенд розв’язувача підключається.",
    "about.train.title": "Як навчаються моделі",
    "about.train.base.title": "Базова модель",
    "about.train.base.desc": "Відкрита модель 7B–14B параметрів — родини Qwen або Llama.",
    "about.train.method.title": "Донавчання",
    "about.train.method.desc": "QLoRA (спочатку SFT, потім DPO) на PyTorch + Unsloth + Hugging Face TRL, на орендованих RTX 4090 (RunPod / Vast.ai). Навчаємо компактні LoRA-адаптери, а не повні ваги.",
    "about.train.update.title": "Оновлення",
    "about.train.update.desc": "Коли виходить сильніша базова модель, ми заново проганяємо той самий датасет і адаптер на ній і міняємо адаптер — дешево і швидко, без повного перенавчання."
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
    "about.stack.web.title": "Coque web",
    "about.stack.web.desc": "Un assistant rapide sur Cloudflare Pages — vous guide par étapes et renvoie la réponse en streaming.",
    "about.stack.solver.title": "Modèle résolveur",
    "about.stack.solver.desc": "Un modèle ouvert affiné sur les brevets et la théorie TRIZ — accentue la contradiction, formule le RIF et génère la solution.",
    "about.stack.skeptic.title": "Modèle sceptique",
    "about.stack.skeptic.desc": "Un modèle séparé, entraîné sur un corpus de matériaux critiques (analyses d’erreurs et d’impasses) — rejette les solutions faibles de compromis.",
    "about.stack.patents.title": "Base de brevets",
    "about.stack.patents.desc": "Intégration directe avec Google BigQuery Patents — recherche d’analogues inter-domaines excluant votre propre classe CPC.",
    "about.stack.rag.title": "Archive de la théorie",
    "about.stack.rag.desc": "Recherche hybride (embeddings denses + BM25) sur l’archive d’articles et d’heuristiques TRIZ.",
    "about.status": "Statut : l’interface est en ligne ; le backend du résolveur est en cours de branchement.",
    "about.train.title": "Comment les modèles sont entraînés",
    "about.train.base.title": "Modèle de base",
    "about.train.base.desc": "Un modèle ouvert de 7B–14B paramètres de la famille Qwen ou Llama.",
    "about.train.method.title": "Fine-tuning",
    "about.train.method.desc": "QLoRA (SFT d’abord, puis DPO) avec PyTorch + Unsloth + Hugging Face TRL, sur des RTX 4090 louées (RunPod / Vast.ai). Nous entraînons des adaptateurs LoRA compacts, pas les poids complets.",
    "about.train.update.title": "Mises à jour",
    "about.train.update.desc": "Quand un modèle de base plus fort sort, nous ré-exécutons le même jeu de données et l’adaptateur dessus et remplaçons l’adaptateur — rapide et bon marché, sans réentraînement complet."
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
      '<div class="about-stack">' +
        typeCard('about.stack.web') +
        typeCard('about.stack.solver') +
        typeCard('about.stack.skeptic') +
        typeCard('about.stack.patents') +
        typeCard('about.stack.rag') +
      '</div></section>' +
    '<section><h2>' + t('about.train.title') + '</h2>' +
      '<div class="about-train">' +
        typeCard('about.train.base') +
        typeCard('about.train.method') +
        typeCard('about.train.update') +
      '</div></section>' +
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

