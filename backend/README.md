# backend/ — FastAPI оркестратор на Modal.com (Фаза 2)

Тонкий API-слой между Cloudflare Pages (`web/`) и инференсом модели.

## Что здесь будет

- `app/main.py` — FastAPI-приложение: `/health`, `/solve` (SSE-стриминг).
- `modal` деплой: vLLM поднимает GPU по запросу и гасит после ~30 c простоя
  (Zero-Idle-Cost).
- Проксирование гибридного RAG (Qdrant / pgvector / Cloudflare Vectorize) и
  патентного поиска (BigQuery Patents).

## Локальный запуск

```bash
cd backend
python3.12 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Проверка: `curl http://127.0.0.1:8000/health`

## Контракт `/solve`

```json
// POST /solve
{ "mode": "engineering", "problem": "...", "context": "..." }

// 200
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

> Деплой на Modal и стриминг SSE добавляются на Фазе 2 чек-листа из `README.md`.
