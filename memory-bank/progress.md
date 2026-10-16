# Progress — Brasaland

## Hecho

- File `CONTEXT.md` tiene el briefing completo de Brasaland ya reemplazado (README pedía sustituir el placeholder) (`README.md:17`, `README.md:56`; contenido en `CONTEXT.md:1-131`).
- `company-choice.md` documenta la elección de empresa y el plan personal (áreas de interés + reto + idea de agente de IA).
- Estructura de carpetas del monorepo en su lugar (documentación skeleton) (`README.md:54-58`).
- `packages/shared` con `@repo/shared-types` y tipos placeholder `Id` / `BaseEntity` (`packages/shared/types/index.ts:5-10`).
- Repositorio en rama `feature/agent-memory-bank` (rama activa del workspace).
- Este `memory-bank/` (projectbrief, techContext, progress) creado.

## Pendiente / problemas detectados

- **`CONTEXT.es.md` sigue siendo un placeholder** — dice "Sustituye este archivo" por el CONTEXT de la empresa asignada (`CONTEXT.es.md:1-3`). Debería contener el briefing de Brasaland igual que `CONTEXT.md` o enlazarlo.
- **`README.md` raíz está desactualizado**: declara el estado de la plantilla como "placeholder-only" y dice que "no workspace runner is configured" (`README.md:54-58`), pero `CONTEXT.md` ya está poblado con Brasaland.
- **`README.md` menciona `docker-compose.yml` en la raíz pero no existe el archivo** (`README.md:59-61`) ❓.
- **No existe `AGENTS.md`** en la raíz (confirmado: `ls AGENTS.md` falla; también lo señala `README.md:57`).
- `README.md` / `README.es.md` siguen describiendo la plantilla genérica (mencionan TrackFlow/Nexova) y no la empresa elegida.
- Sin código de negocio implementado todavía (ni en `uis/`, ni `services/`, ni `agents/`).

## Próximos pasos

1. **Sincronizar la documentación raíz**: reemplazar `CONTEXT.es.md` por el briefing de Brasaland y actualizar el estado actual en `README.md`/`README.es.md` (dejar de decir "placeholder").
2. **Reto de la propuesta (plan personal, `company-choice.md:19`)**: empezar con **1 local** y un **grupo reducido de ingredientes**:
   - **Registrar existencias** por local (datos → `data/raw`/`data/process`).
   - **Consultar ventas** del local (endpoint en `services/`, app FastAPI central).
   - **Generar alertas** cuando un ingrediente alcance un mínimo definido por el equipo (reglas).
   - Interfaz de registro/consulta → **`uis/backoffice`** (`uis/README.md:8`).
3. Fase 2 de la propuesta: añadir el **asistente de IA** que prepare propuestas de reposición y explique qué información usó (`company-choice.md:25`) → **`agents/`** (+ `skills/`/`mcps/` según necesidad).
4. Ampliación posterior a toda la cadena (14 locales) y apertura al inglés (`company-choice.md:19`, `company-choice.md:27`).

> Nota: los pasos 2-4 provienen de `company-choice.md` (propuesta personal), no del briefing de la empresa. El alineamiento con Operaciones/Compras está descrito en las necesidades de esas áreas (`CONTEXT.md:51`, `CONTEXT.md:61`).
