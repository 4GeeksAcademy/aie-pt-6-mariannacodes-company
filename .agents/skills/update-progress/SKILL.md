---
name: update-progress
description: 'Actualiza memory-bank/progress.md al terminar una tarea. Úsala cuando se pida "actualiza el progreso", "update progress" o "registra lo que hemos hecho". NO la uses para editar projectbrief.md, techContext.md o CONTEXT.md, ni para escribir código o hacer commits.'
---

# Objetivo

Mantener `memory-bank/progress.md` al día con lo que realmente se ha hecho en el repo (AGENTS.md, paso 4 del flujo antes del commit).

# Inputs

- Salida de `git log main..HEAD --oneline` y `git diff --stat` (qué ha cambiado).
- El contenido actual de `memory-bank/progress.md`.

# Pasos

1. Leer `memory-bank/progress.md`.
2. Ejecutar `git log main..HEAD --oneline` y `git diff --stat` para ver los cambios reales.
3. Mover a **Hecho** lo que esté terminado, citando el hash del commit.
4. Añadir a **Pendiente** los problemas nuevos encontrados.
5. Cambiar **Próximos pasos** solo si el desarrollador lo confirma.
6. Mostrar el diff de `progress.md` y esperar aprobación antes de cualquier commit.

# Criterios de aceptación

- Solo se modifica `memory-bank/progress.md` (confirmarlo con `git status`).
- Cada punto de **Hecho** cita un commit o archivo real.
- No se borra ningún punto sin indicarlo en la respuesta.
- No se inventan datos: lo dudoso se marca con ❓ (regla `.agents/rules/memory-bank-sources.md`).
- Se mantienen las secciones **Hecho** / **Pendiente** / **Próximos pasos**.

# Ejemplo

✅ "Hecho: AGENTS.md con flujo de 5 pasos antes del commit (1ba62cc)."

❌ "Hecho: se mejoró la documentación." (vago, sin evidencia)
