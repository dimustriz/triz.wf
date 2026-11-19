"""triz.wf solver API — FastAPI orchestrator (Phase 2).

This is the thin API layer deployed to Modal.com. In production it will:

1. Receive a validated SolveRequest from the Cloudflare Pages wizard.
2. Run the fine-tuned TRIZ model on a Modal Serverless GPU (vLLM) and stream
   the result back over SSE.
3. Query cross-domain patent analogues (Google BigQuery Patents) and the
   theoretical TRIZ archive (hybrid RAG).

Until the model is wired in, /solve returns a documented placeholder so the
frontend wizard is testable end-to-end.
"""

from __future__ import annotations

from typing import Literal, Optional

from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI(title="triz.wf solver", version="0.1.0")

Mode = Literal["engineering", "business"]


class SolveRequest(BaseModel):
    mode: Mode = Field("engineering", description="engineering | business")
    problem: str = Field(..., description="Raw problem statement")
    context: Optional[str] = Field(None, description="Constraints / what has been tried")


class SolveResponse(BaseModel):
    cleaned_problem: str
    contradiction: str
    physical_contradiction: str
    ideal_final_result: str
    analogies: list[str] = []
    critique: str
    solution: str


@app.get("/health")
def health() -> dict:
    return {"ok": True, "service": "triz.wf solver"}


@app.post("/solve", response_model=SolveResponse)
def solve(req: SolveRequest) -> SolveResponse:
    # TODO(Phase 2): call the fine-tuned model via vLLM and stream via SSE.
    # The placeholder echoes the request so the frontend can be tested now.
    return SolveResponse(
        cleaned_problem=req.problem,
        contradiction="(плейсхолдер) Конфликтующая пара ещё не вычислена.",
        physical_contradiction="(плейсхолдер) Физическое противоречие ещё не вычислено.",
        ideal_final_result="(плейсхолдер) ИКР ещё не сформулирован.",
        analogies=[],
        critique="(плейсхолдер) Агент-критик ещё не запущен.",
        solution="(плейсхолдер) Решение ещё не сгенерировано.",
    )
