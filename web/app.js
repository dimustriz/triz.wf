const STEPS = [
  { id: 'mode', title: 'Режим', subtitle: 'Какой класс противоречия решаем' },
  { id: 'problem', title: 'Задача', subtitle: 'Опишите проблему своими словами' },
  { id: 'context', title: 'Контекст', subtitle: 'Ограничения и что уже пробовали' },
  { id: 'review', title: 'Проверка', subtitle: 'Подтвердите и запустите разбор' },
  { id: 'result', title: 'Разбор', subtitle: 'Результат TRIZ-анализа' },
];

const state = {
  step: 0,
  mode: 'engineering',
  problem: '',
  context: '',
  status: 'idle', // idle | loading | done | error
  result: null,
  error: null,
};

const app = document.getElementById('app');

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

function modeLabel(m) {
  return m === 'engineering' ? 'Инженерный (Hardware / DeepTech)' : 'Бизнес и Продукт (Business TRIZ)';
}

function render() {
  const s = STEPS[state.step];
  let body = '';
  if (state.step === 0) body = renderMode();
  else if (state.step === 1) body = renderProblem();
  else if (state.step === 2) body = renderContext();
  else if (state.step === 3) body = renderReview();
  else body = renderResult();

  app.innerHTML = `
    <section class="card">
      <header class="step-head">
        <span class="step-count">STEP ${String(state.step + 1).padStart(2, '0')} / ${String(STEPS.length).padStart(2, '0')}</span>
        <h1>${s.title}</h1>
        <p class="step-subtitle">${s.subtitle}</p>
      </header>
      <div class="step-body">${body}</div>
      ${renderNav()}
    </section>
  `;
  bind();
}

function renderMode() {
  const eng = state.mode === 'engineering' ? 'checked' : '';
  const biz = state.mode === 'business' ? 'checked' : '';
  return `
    <div class="mode-grid">
      <label class="mode-card">
        <input type="radio" name="mode" value="engineering" ${eng} />
        <span class="mode-title">Инженерный</span>
        <p class="mode-desc">Hardware / DeepTech — физические эффекты и патентная база.</p>
      </label>
      <label class="mode-card">
        <input type="radio" name="mode" value="business" ${biz} />
        <span class="mode-title">Бизнес и продукт</span>
        <p class="mode-desc">Системные противоречия в монетизации, дистрибуции, UX.</p>
      </label>
    </div>
  `;
}

function renderProblem() {
  return `
    <label class="field-label" for="problem">Формулировка проблемы</label>
    <textarea id="problem" placeholder="Например: «Мы хотим сделать корпус тоньше, но он теряет прочность»…">${esc(state.problem)}</textarea>
    <p class="hint">Не думайте о «правильной» формулировке — система сама очистит её от жаргона.</p>
  `;
}

function renderContext() {
  return `
    <label class="field-label" for="context">Контекст (необязательно)</label>
    <textarea id="context" placeholder="Что уже пробовали, какие есть ограничения, что не должно ухудшиться…">${esc(state.context)}</textarea>
    <p class="hint">Помогает найти межотраслевые аналоги и отсечь слабые компромиссы.</p>
  `;
}

function renderReview() {
  return `
    <div class="review">
      <dl>
        <dt>Режим</dt>
        <dd>${modeLabel(state.mode)}</dd>
        <dt>Задача</dt>
        <dd>${esc(state.problem)}</dd>
        <dt>Контекст</dt>
        <dd>${esc(state.context) || '—'}</dd>
      </dl>
    </div>
  `;
}

function renderResult() {
  if (state.status === 'loading') {
    return `<div class="notice"><span class="spinner"></span> Идёт TRIZ-разбор…</div>`;
  }
  if (state.status === 'error') {
    return `<div class="notice">${esc(state.error || 'Что-то пошло не так.')}</div>`;
  }

  const r = state.result;
  if (r && r.ok) {
    const a = (r.analogies || []).map((x) => `<li>${esc(x)}</li>`).join('');
    return `
      <div class="result-block"><h2>Очищенная формулировка</h2><p>${esc(r.cleaned_problem)}</p></div>
      <div class="result-block"><h2>Конфликтующая пара</h2><p>${esc(r.contradiction)}</p></div>
      <div class="result-block"><h2>Физическое противоречие</h2><p>${esc(r.physical_contradiction)}</p></div>
      <div class="result-block"><h2>ИКР</h2><p>${esc(r.ideal_final_result)}</p></div>
      ${a ? `<div class="result-block"><h2>Межотраслевые аналоги</h2><ul>${a}</ul></div>` : ''}
      <div class="result-block"><h2>Критика</h2><p>${esc(r.critique)}</p></div>
      <div class="result-block"><h2>Решение</h2><p>${esc(r.solution)}</p></div>
    `;
  }

  return `
    <div class="notice">
      <strong>Решатель ещё не подключён.</strong>
      Пока бэкенд (FastAPI + модель на Modal) не развёрнут, фронтенд возвращает заглушку.
      Укажите переменную окружения <code>TRIZ_SOLVER_API</code> в Cloudflare Pages,
      чтобы мастер начал отдавать реальный TRIZ-анализ.
    </div>
    <div class="result-block"><h2>Отправленный запрос</h2><p>${esc(JSON.stringify(r, null, 2))}</p></div>
  `;
}

function renderNav() {
  if (state.step === 4) {
    return `<div class="step-nav spacer"><button class="btn primary" data-action="restart">Новая задача</button></div>`;
  }
  const back = state.step > 0
    ? `<button class="btn" data-action="back">← Назад</button>`
    : `<span></span>`;
  const nextLabel = state.step === 3 ? 'Запустить разбор' : 'Далее →';
  const disabled = state.step === 1 && !state.problem.trim() ? 'disabled' : '';
  return `
    <div class="step-nav">
      ${back}
      <button class="btn primary" data-action="next" ${disabled}>${nextLabel}</button>
    </div>
  `;
}

function bind() {
  app.querySelectorAll('input[name="mode"]').forEach((el) => {
    el.addEventListener('change', () => { state.mode = el.value; });
  });

  const problem = app.querySelector('#problem');
  if (problem) problem.addEventListener('input', () => { state.problem = problem.value; });

  const context = app.querySelector('#context');
  if (context) context.addEventListener('input', () => { state.context = context.value; });

  app.querySelectorAll('[data-action]').forEach((btn) => {
    btn.addEventListener('click', () => onAction(btn.dataset.action));
  });
}

async function onAction(action) {
  if (action === 'restart') {
    Object.assign(state, { step: 0, problem: '', context: '', status: 'idle', result: null, error: null });
    if (window.TrizFace) window.TrizFace.set('idle');
    render();
    return;
  }
  if (action === 'back') {
    state.step = Math.max(0, state.step - 1);
    render();
    return;
  }
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

  try {
    const res = await fetch('/api/solve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode: state.mode, problem: state.problem, context: state.context }),
    });
    let data = null;
    try { data = await res.json(); } catch { /* non-JSON */ }
    state.result = data;
    state.status = 'done';
    if (window.TrizFace) window.TrizFace.set(res.ok && data && data.ok ? 'happy' : 'sad');
  } catch (err) {
    state.error = 'Не удалось достучаться до API: ' + err.message;
    state.status = 'error';
    if (window.TrizFace) window.TrizFace.set('sad');
  }
  render();
}

render();

