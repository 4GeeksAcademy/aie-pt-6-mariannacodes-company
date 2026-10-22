# Brasaland — Sitio web público

Primera versión del sitio público de Brasaland: landing page y formulario de registro al programa Brasa Points.

## Páginas

- `index.html` — Landing page de la empresa.
- `application.html` — Formulario de registro Brasa Points.
- `validation.js` — Validación del formulario (envío simulado).

## Tecnología

- HTML5 semántico
- Tailwind CSS (CDN)
- JavaScript sin frameworks
- Schema.org (JSON-LD, tipo `Restaurant`)

## Cómo ejecutar

Desde la raíz del repositorio:

```bash
npx http-server uis/website -p 3000 -a 0.0.0.0
```

En Codespaces, abre la pestaña **Puertos** y pon el puerto 3000 en **Pública**.

## Contexto

Los requisitos de contenido y validación vienen de `BRIEFING.es.md` (raíz del repositorio).
