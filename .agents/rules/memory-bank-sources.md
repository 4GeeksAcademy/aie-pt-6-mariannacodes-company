---
applyTo: "memory-bank/**"
---

# Nombre

Fuentes del memory-bank.

# Alcance

Regla por patrón de archivo. Se aplica al crear o editar `memory-bank/projectbrief.md`, `memory-bank/techContext.md` y `memory-bank/progress.md` (patrón `memory-bank/**`).

# Justificación

Al crear el memory-bank, el agente presentó "API FastAPI" como "Confirmado en el repo", aunque `README.md:88-97` la describe como una recomendación y no existe código que la implemente. Hubo que corregirlo manualmente. ❓

# Qué hacer

1. Los hechos de la empresa salen solo de `CONTEXT.md`.
2. La información de `company-choice.md` se marca como **propuesta personal**, nunca como hecho de la empresa.
3. En `techContext.md`, separa **Confirmado en el repo** (solo contenido verificable en archivos reales) de **Recomendado, aún no implementado**.
4. Cita `archivo:línea` para cada dato, usando el archivo real que lo respalda.
5. Si algo no está en el repo, márcalo con ❓. No lo inventes ni presentes recomendaciones o planes como implementaciones existentes.

# Ejemplo

❌ Mal: "Confirmado en el repo: API FastAPI centralizada."

✅ Bien: "Recomendado, aún no implementado: API FastAPI centralizada (`README.md:88-97`)."
