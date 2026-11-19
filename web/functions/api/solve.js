// POST /api/solve — Cloudflare Pages Function.
//
// Проксирует запрос мастера на бэкенд (FastAPI + vLLM на Modal.com), когда тот
// развёрнут (переменная окружения TRIZ_SOLVER_API). До этого возвращает
// документированную заглушку, чтобы фронтенд можно было тестировать end-to-end.

export async function onRequestPost(context) {
  const { request, env } = context;

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400);
  }

  const upstream = String((env && env.TRIZ_SOLVER_API) || '').replace(/\/+$/, '');
  if (upstream) {
    // Пересылаем на Modal FastAPI (тот вернёт JSON или SSE-поток).
    const res = await fetch(`${upstream}/solve`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    return new Response(text, {
      status: res.status,
      headers: { 'content-type': res.headers.get('content-type') || 'application/json' },
    });
  }

  return json(
    {
      ok: false,
      status: 'not_configured',
      message:
        'Solver backend is not wired yet. Set TRIZ_SOLVER_API in Cloudflare Pages to enable real TRIZ analysis.',
      request: payload,
    },
    501,
  );
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
