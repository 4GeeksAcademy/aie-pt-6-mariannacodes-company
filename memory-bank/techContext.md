# Tech Context — Brasaland

Se distingue lo **confirmado en el repo** (hecho verificable en los archivos) de lo **recomendado o aún no implementado**. Lo que el repo dice que debería existir pero no se encuentra en él se marca con ❓.

## Confirmado en el repo

- Repo = plantilla de inicio ("starter template") para proyectos transversales de AI Engineering (`README.md:5`).
- Monorepo con responsabilidad única por carpeta: `uis/`+`services/` = cara al usuario; `data/` = datos; `agents/`+`skills/`+`mcps/` = IA; `workflows/` = orquestación; `packages/`+`shared/` = reutilización; `infra/`+`scripts/`+`internal/` = operaciones; `docs/` = documentación (`README.md:40`).
- Regla rápida: si tiene UI → `uis/`; si expone API o corre en segundo plano → `services/`; si mueve o transforma datos → `data/`; si un modelo de IA hace el trabajo → `agents/` (`README.md:45-46`).
- Cada carpeta de primer nivel tiene su `README.md` (verificado en el repo): `agents/`, `docs/`, `infra/`, `internal/`, `mcps/`, `packages/`, `scripts/`, `services/`, `shared/`, `skills/`, `uis/`, `workflows/`; `data/` tiene sub-READMEs por subcarpeta (`data/raw`, `data/pipelines`, `data/process`, `data/eval`).
- `uis/` contiene dos proyectos: `website` (web pública) y `backoffice` (aplicación admin interna, ideal para gestión de operaciones y otras capacidades) (`uis/README.md:7-8`).
- `uis/` se organiza por _concerns_ distintos; cada subcarpeta cubre un área y lleva su propia documentación (`uis/README.md:10`).
- `services/`: cada subcarpeta es un servicio concreto (p. ej. `admin-api`, `data-processor-worker`) con su documentación (`services/README.md:5`).
- Paquete compartido existente: `packages/shared/package.json` con nombre `@repo/shared-types` (`README.md:58`).
- Tipos compartidos presentes: `packages/shared/types/index.ts` define `Id` y `BaseEntity` como placeholder (`packages/shared/types/index.ts:5-10`).
- Devcontainer presente: `.devcontainer/devcontainer.json` (base Ubuntu 24.04, Python 3.12 con JupyterLab, Node 22, CLI de GitHub, docker-outside-of-docker) (`.devcontainer/devcontainer.json:1-7`).
- El repo no trae apps ejecutables ni scripts globales; solo estructura y documentación (`README.md:54-58`).
- **No existe `docker-compose.yml`** en la raíz ❓ (el README lo lista como orquestación local esperada — `README.md:59-61` — pero el archivo no está presente).
- **No existe `AGENTS.md`** en la raíz (`README.md:57`).

## Recomendado, aún no implementado

- **API FastAPI centralizada** (único punto de entrada, con routers/módulos por dominio: locations, menus, sales, telemetry…) — recomendación del README, **no implementada aún** (`README.md:88-94`).
- **No dividir en microservicios al inicio**: añadir endpoints a la misma app FastAPI y extraer un worker solo cuando sea necesario — recomendación del README (`README.md:97`).
- Nada de la propuesta de negocio tiene código todavía: es plan personal de `company-choice.md`.
  - UI para operaciones (inventario, ventas, alertas por mínimos) → **`uis/backoffice`** (admin interno) (`uis/README.md:8`).
  - Web pública de Brasaland (si se trabaja en marketing) → **`uis/website`** (`uis/README.md:7`).
  - Backend con endpoints por dominio (inventario, ventas, reposición) → **`services/`** con una app FastAPI central (p. ej. un subfolder tipo `services/api`) (`services/README.md:5`, `README.md:88-94`).
  - Datos de inventario/ventas → flujo `data/raw` → `data/pipelines` → `data/process` (`README.md:96-104`).
  - Agente de IA propuesto (asistente de reposición) → **`agents/`** (+ `skills/`/`mcps/` si necesitara capacidades o acceso en vivo) (`README.md:45-46`, `company-choice.md:25`).

## Restricciones técnicas

- Stack actual de Brasaland es mínimo: web estática, app desactualizada, POS distinto por país sin integración, hojas de cálculo; sin API interna, datos consolidados ni telemetría (`CONTEXT.md:99`).
- El mandato de Tecnología (Nicolás Park) es construir la plataforma desde casi cero (`CONTEXT.md:97-99`).
- Multiidioma (ES/EN) recomendado en Formación, empezando por un idioma base (`CONTEXT.md:91`); la propuesta personal empieza en español (`company-choice.md:27`).
- Buscar otros datos de stack (bases de datos, versiones de frameworks) cae en terreno ❓: no hay config concreta documentada aún en el repo.
