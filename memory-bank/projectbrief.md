# Project Brief — Brasaland

> Hechos de empresa: `CONTEXT.md`. Todo lo que proviene de `company-choice.md` es **plan personal de la autora** y está marcado como _propuesta_.

## Qué es Brasaland

- Cadena de restaurantes de cocina a la brasa, fundada en 2008 en Medellín, Colombia (`CONTEXT.md:7`).
- 14 restaurantes propios en 2 países: Colombia y Estados Unidos (Florida) (`CONTEXT.md:7`).
- ~115 empleados y ~6M USD de facturación anual (`CONTEXT.md:7`).
- Tres compromisos de marca: comida consistente, servicio cálido y cocina rápida (`CONTEXT.md:9`).
- Operación desde la sede de Medellín con una oficina comercial y de operaciones en Miami (`CONTEXT.md:13`).
- CEO: **Mariana Restrepo** (desde 2019). Creó el equipo interno **Brasaland Digital** para modernizar la empresa (`CONTEXT.md:13`, `CONTEXT.md:37`).

## Áreas de la empresa

| Área                              | Responsable                 | Necesidad clave                                                                                                             | Fuente               |
| --------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Operaciones de Restaurante        | Felipe Guerrero             | Dashboard de ventas en tiempo real por local; sistema inteligente de pedidos de ingredientes; alertas de locales sin ventas | `CONTEXT.md:47-51`   |
| Compras y Proveedores             | Lucía Fernández             | Plataforma de gestión de proveedores con historial de precios y alertas; visibilidad consolidada de compras                 | `CONTEXT.md:57-61`   |
| Marketing y Experiencia Digital   | Camila Ospina               | App de fidelización y pedidos; CRM de clientes; motor de personalización                                                    | `CONTEXT.md:67-71`   |
| Personas y Cultura                | Ashley Turner (Miami)       | Portal interno de RRHH; onboarding automatizado; dashboard de KPIs                                                          | `CONTEXT.md:77-81`   |
| Formación y Estándares de Calidad | Jake Morrison (Miami)       | Plataforma de formación con catálogo de recetas; soporte multiidioma (opcional)                                             | `CONTEXT.md:87-91`   |
| Tecnología                        | CTO Nicolás Park (Medellín) | API central (locales, menús, ventas, clientes, proveedores); telemetría; pipeline de datos                                  | `CONTEXT.md:97-101`  |
| Dirección Ejecutiva               | Mariana Restrepo            | Dashboard ejecutivo en USD/COP; asistente de IA en lenguaje natural; informe semanal automatizado                           | `CONTEXT.md:107-111` |

## Problema que quiere resolver

- Operación en 2 países gestionada con herramientas pensadas para un único restaurante local (`CONTEXT.md:33`).
- Pedidos de materia prima por WhatsApp/teléfono **sin datos de inventario**: exceso de stock en unos locales y roturas en otros (`CONTEXT.md:33`, `CONTEXT.md:49`).
- Compras negocia por email y Excel; sin visión consolidada del gasto a nivel de cadena (`CONTEXT.md:19`, `CONTEXT.md:59`).
- Sin visibilidad en tiempo real de los locales; los informes semanales llegan en PDF (`CONTEXT.md:33`, `CONTEXT.md:107`).
- Stack tecnológico mínimo: web estática, app desactualizada, POS distintos por país, hojas de cálculo (`CONTEXT.md:27`, `CONTEXT.md:99`).
- Competidores avanzan con pedidos digitales, marketing basado en datos y dashboards operativos (`CONTEXT.md:35`).

## Propuesta personal (de `company-choice.md`, NO es un hecho de la empresa)

- Interés en **Operaciones** (Felipe Guerrero): solución que reúna inventario actualizado y ventas por local para detectar reposición (`company-choice.md:11`).
- Interés en **Compras** (Lucía Fernández): centralizar proveedores, historial de precios y pedidos para comparar opciones, considerando disponibilidad, plazos y mercado además del precio (`company-choice.md:15`).
- Reto elegido: **sistema inteligente de pedidos de ingredientes** basado en ventas históricas y stock actual (`company-choice.md:19`).
- Agente de IA propuesto: asistente para el chef, el responsable del local y Compras; consulta inventario, recetas, ventas históricas, pedidos pendientes y proveedores; genera propuesta de pedido con cantidades, motivos y alertas, que requiere aprobación antes de comprar (`company-choice.md:25`).
- Restricciones de la propuesta: el agente no inferiría inventario desde el menú — requiere registros actualizados y pediría confirmarlos si faltan datos; las alertas por mínimos usarían reglas, la IA consultaría y explicaría; empezaría en español (`company-choice.md:27`).

## Restricciones generales

> Solo hechos de `CONTEXT.md`. Las decisiones técnicas del repo (p. ej. FastAPI) están en `techContext.md`.

- **Dualidad de mercados:** dos países, dos monedas (COP/USD), dos idiomas y legislaciones distintas (`CONTEXT.md:7`, `CONTEXT.md:23`, `CONTEXT.md:33`).
- **Consistencia de marca:** comida, servicio y cocina iguales en todos los locales, independientemente del país (`CONTEXT.md:9`, `CONTEXT.md:89`).
- **Sin datos consolidados previos:** no hay API interna, ni datos consolidados, ni telemetría (`CONTEXT.md:99`).
- **Stack tecnológico mínimo:** web estática, app desactualizada, POS distintos por país y hojas de cálculo actuando como sistemas de gestión (`CONTEXT.md:27`, `CONTEXT.md:99`).
