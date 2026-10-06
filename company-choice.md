# Elección de empresa: Brasaland

## Por qué elijo Brasaland

Elijo Brasaland porque me interesa cómo la organización interna de una cadena de restaurantes influye en la calidad de la comida y en la atención al cliente. La empresa tiene 14 locales entre Colombia y Florida, y mantener un servicio consistente requiere coordinar los ingredientes, las compras y el trabajo de cada restaurante. Me llamó la atención que los pedidos de materia prima se gestionen por WhatsApp o teléfono sin apoyarse en datos de inventario, lo que provoca exceso de stock en algunos locales y falta de productos en otros. También me interesa que Compras trabaje con unos 20 proveedores y detecte cambios de precios cuando llegan las facturas, sin una visión consolidada del gasto. Quiero aprender a construir herramientas que permitan anticipar estas necesidades y mejorar la coordinación entre los equipos para que los problemas internos no afecten a la experiencia del cliente.

## Departamentos que me interesan

### Operaciones de restaurante

Me interesa el área dirigida por Felipe Guerrero porque cada local funciona en gran medida de forma aislada y la sede no dispone de información en tiempo real. Quiero trabajar en una solución que reúna el inventario actualizado y las ventas por local para detectar ingredientes que necesitan reposición. Esto ayudaría a reducir las faltas y los excesos de stock y a organizar mejor los pedidos.

### Compras y proveedores

Me interesa el área de Lucía Fernández porque los precios y las negociaciones se gestionan por email y Excel, y no existe una visión consolidada de las compras. Me gustaría centralizar los datos de proveedores, el historial de precios y los pedidos, de manera que Compras pueda comparar opciones y coordinarse con Operaciones. La comparación debe considerar la disponibilidad, los plazos y el mercado de cada local, además del precio.

## Reto de automatización que quiero desarrollar

Quiero desarrollar el sistema inteligente de pedidos de ingredientes basado en ventas históricas y stock actual que se describe entre las necesidades de Operaciones. Mi primera versión permitiría registrar existencias por local, consultar las ventas y generar alertas cuando un ingrediente alcance un mínimo definido por el equipo. Sobre esa base, añadiría un asistente que ayude a preparar propuestas de reposición y explique qué información utilizó. Empezaría con un local y un grupo reducido de ingredientes antes de ampliar la solución a toda la cadena.

## My AI Agent Idea

### Mi idea de Agente de IA

Propongo un asistente interno para el chef, el responsable del local y el equipo de Compras. El usuario podría preguntarle qué ingredientes necesita reponer para el menú vigente o una promoción. El agente consultaría el inventario registrado, las recetas y sus cantidades, las ventas históricas, los pedidos pendientes y la información disponible de los proveedores, como precios y plazos de entrega. A partir de esos datos, generaría una propuesta de pedido con cantidades orientativas, motivos y alertas sobre posibles faltas de ingredientes. La propuesta se enviaría al responsable para revisión y aprobación antes de realizar la compra.

El agente no conocería el inventario solo por leer el menú: necesitaría registros actualizados. Si faltan datos o están desactualizados, pediría confirmarlos antes de recomendar cantidades. Las alertas por mínimos se calcularían con reglas; la IA ayudaría a consultar la información y explicar las propuestas. Comenzaría en español y plantearía el inglés como una ampliación posterior.

## Fuente

[Briefing oficial de Brasaland en español — 4Geeks Academy](https://github.com/4GeeksAcademy/ai-engineering-syllabus/blob/main/content/contexts/00-general-contexts/CONTEXT-brasaland-briefing.es.md)

El archivo `CONTEXT.md` de este proyecto contiene una copia íntegra de ese briefing.
