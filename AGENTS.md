# Instrucciones del agente de código

## Inicio de cada sesión

Leer siempre, en este orden:

1. `CONTEXT.md` — fuente del contexto de la empresa (`README.md:40`, `CONTEXT.md:1-4`).
2. `memory-bank/projectbrief.md` — resumen del proyecto y sus restricciones.
3. `memory-bank/techContext.md` — contexto técnico, arquitectura y estado de implementación.
4. `memory-bank/progress.md` — avance, pendientes y próximos pasos.

## Flujo obligatorio antes de cada commit

1. Revisar con `git status` y `git diff` que solo cambian los archivos de la tarea.
2. Comprobar que lo escrito coincide con `CONTEXT.md` y el `memory-bank`, sin inventar datos.
3. Si existen tests en la carpeta modificada, ejecutarlos y comprobar que pasan.
4. Actualizar `memory-bank/progress.md` si cambió el estado del proyecto.
5. Escribir un mensaje de commit claro: qué cambió y por qué.

## Archivos y carpetas protegidos

No modificar sin confirmación explícita del desarrollador:

- `CONTEXT.md`.
- `company-choice.md`.
- `.devcontainer/`.
- `agents/` y `skills/`, reservadas para módulos futuros y no para la configuración del agente de código.

## Ubicación del código de la app

Cuando exista código de producto, ubicarlo según el README y el contexto técnico:

- `uis/website`: web pública (`uis/README.md:7`; `memory-bank/techContext.md`).
- `uis/backoffice`: aplicación interna para operaciones y otras capacidades (`uis/README.md:8`; `memory-bank/techContext.md`).
- `services/`: backend, APIs o workers; cada servicio debe tener su subcarpeta y documentación (`services/README.md:3-8`; `memory-bank/techContext.md`).

La API FastAPI centralizada es una recomendación aún no implementada (`README.md:88-97`; `memory-bank/techContext.md`). Si algo no está en el repo o no se ha implementado, marcarlo con ❓ y no inventarlo.
