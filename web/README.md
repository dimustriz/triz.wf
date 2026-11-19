# web/ — оболочка triz.wf на Cloudflare Pages (Фаза 3)

Сверхлёгкий пошаговый wizard (State Machine), который ведёт пользователя по
жёсткому алгоритму ТРИЗ. Собран без фреймворков — чистые HTML/CSS/JS.

## Структура

```
web/
├── index.html            # каркас страницы
├── style.css             # стили
├── app.js                # state machine мастера
├── functions/api/solve.js # Pages Function: POST /api/solve
└── wrangler.toml         # конфиг Pages
```

## Локальный запуск

```bash
cd web
npx wrangler pages dev . --port 4321
```

Откройте http://localhost:4321 — мастер пройдёт все шаги и на финале вызовет
`POST /api/solve` (сейчас вернёт заглушку 501, пока не настроен бэкенд).

## Деплой

```bash
cd web
npx wrangler pages deploy . --project-name=triz-wf --branch=production
```

Перед релизом подключите бэкенд через переменную окружения:

```bash
npx wrangler pages secret put TRIZ_SOLVER_API --project-name=triz-wf
```

## Контракт `/api/solve`

Фронтенд шлёт `POST /api/solve` с телом:

```json
{ "mode": "engineering", "problem": "...", "context": "..." }
```

Ожидаемый ответ (200):

```json
{
  "cleaned_problem": "...",
  "contradiction": "...",
  "physical_contradiction": "...",
  "ideal_final_result": "...",
  "analogies": ["..."],
  "critique": "...",
  "solution": "..."
}
```

> Стриминг (SSE) и приём платежей (Paddle) добавляются на Фазе 3 чек-листа.
