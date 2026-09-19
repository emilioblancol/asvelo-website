(function () {
  'use strict';

  var STORAGE_KEY = 'asvelo-lang';

  var dict = {
    es: {
      'menu.toggle': 'Abrir menú', 'menu.home': 'Inicio', 'menu.features': 'Qué incluye', 'menu.pricing': 'Precios', 'menu.contact': 'Contacto', 'menu.howItWorks': 'Cómo funciona',

      'contact.title': 'Contáctanos',
      'contact.sub': '¿Tienes dudas sobre el sistema o quieres saber si tu base califica? Escríbenos directamente o llena el formulario — te respondemos en menos de un día hábil.',
      'contact.emailLabel': 'Correo directo:',
      'contact.submit': 'Enviar mensaje',
      'contact.formNote': 'Se abrirá tu programa de correo para enviar el mensaje a contact@asvelo.com.',

      'hero.eyebrow': 'Reactivación de base de datos gratis',
      'hero.title': 'Gana <span class="accent">más con cada cliente</span>,<br>sin gastar más en<br>conseguir nuevos.',
      'hero.sub': 'Asvelo opera los seguimientos para convertir más leads, traer clientes de vuelta y generar reseñas y referidos.',
      'hero.cta.primary': 'Ver si mi base califica',
      'hero.microcopy': 'Reactivación gratuita para negocios con 300+ contactos.',

      'trustStrip.body': 'Segmentamos tu base de datos - lanzamos la campaña - reportamos las oportunidades recuperadas',

      'pricing.eyebrow': 'Precios',

      'pricing.hero.title': 'Pagas una vez por instalar el sistema. Después, tú decides qué más comprar.',
      'pricing.hero.sub': 'No es una suscripción. Instalamos el sistema completo en tu CRM por una tarifa única de fundador; después, compras Kits de Campaña solo cuando los necesitas.',
      'pricing.hero.anchor': 'Instalación desde MXN 20,000, pago único.',
      'pricing.hero.cta': 'Solicitar mi reactivación gratuita',
      'pricing.hero.reassurance': 'Empiezas con una reactivación gratuita — ves resultados reales antes de pagar la instalación.',

      'pricing.table.badge': 'El sistema completo',
      'pricing.table.scopeNote': 'Campañas personalizadas (~MXN 3,000–4,000) y totalmente gestionadas (~MXN 6,000–10,000) se cotizan aparte.',
      'pricing.currency.note': 'Conversión aproximada.',

      'pricing.offer1.name': 'Reactivación gratuita',
      'pricing.offer1.price': 'Gratis',
      'pricing.offer1.for': 'Antes de pagar nada',
      'pricing.offer1.item1': 'Recuperamos oportunidades de un segmento real de tu base',
      'pricing.offer1.item2': 'Corre de 10 a 14 días, sin contrato',
      'pricing.offer1.item3': 'Ves resultados reales antes de decidir',

      'pricing.offer2.name': 'Instalación del sistema',
      'pricing.offer2.for': 'Pago único — tarifa de fundador',
      'pricing.offer2.item1': 'Segmentación y mapeo de tu ciclo de cliente',
      'pricing.offer2.item2': 'Respuesta a llamadas perdidas, leads y cotizaciones abiertas',
      'pricing.offer2.item3': 'Confirmaciones, recordatorios y recuperación de citas y no-shows',
      'pricing.offer2.item4': 'Reactivación de contactos dormidos y recordatorios de recompra',
      'pricing.offer2.item5': 'Primera campaña completa de reactivación, capacitación y entrega',
      'pricing.offer2.item6': '30 días de correcciones técnicas incluidos',

      'pricing.offer3.name': 'Kit de Campaña',
      'pricing.offer3.for': 'Por kit, cuando quieras',
      'pricing.offer3.item1': 'Segmento, oferta y dos variaciones de mensaje listas para lanzar',
      'pricing.offer3.item2': 'Tú la ejecutas dentro del sistema ya instalado',
      'pricing.offer3.item3': 'Personalizada (~$3,000–4,000) o gestionada por nosotros (~$6,000–10,000)',

      'pricing.philosophy.title': '¿Por qué una tarifa única en vez de una mensualidad?',
      'pricing.philosophy.body': 'Una vez instalado, el sistema sigue trabajando solo dentro de tu CRM — no necesitamos ser nosotros quienes lo mantengamos vivo cada mes, así que no te cobramos por eso. Lo que sí cobramos después son campañas nuevas: un Kit de Campaña es trabajo real — un segmento nuevo, una oferta nueva, copy nuevo — no una cuota por dejar prendido lo que ya instalamos.',

      'pricing.nocrm.title': '¿No tienes un CRM?',
      'pricing.nocrm.body': 'Te recomendamos abrir tu propia cuenta de GoHighLevel — tuya, con tus datos y tus flujos de trabajo, y tú le pagas directo a GoHighLevel. Es la infraestructura que usamos para operar el sistema en un solo lugar. Podemos recibir una comisión de afiliado por la recomendación; te lo decimos de frente — no somos revendedores de GoHighLevel.',

      'pricing.finalCta.title': 'Primero vemos si hay dinero que recuperar.',
      'pricing.finalCta.body': 'Corremos una reactivación gratuita sobre parte de tu base. Con resultados reales, decides si instalar el sistema completo.',
      'pricing.finalCta.cta': 'Solicitar reactivación gratuita',
      'pricing.finalCta.reassurance': 'Sin compromiso — pagas la instalación solo si decides continuar.',

      'features.eyebrow': 'El sistema', 'features.imagePlaceholder': 'Captura de pantalla próximamente',
      'features.intro': 'Primero recuperamos lo que ya perdiste. Luego instalamos el sistema que evita que lo sigas perdiendo.',
      'feature1.title': 'Trae de vuelta a tus clientes',
      'feature1.body': 'Le escribimos a tus clientes de hace 3, 6 o 12 meses en el momento justo de su ciclo de recompra — para que vuelvan sin que tengas que acordarte tú de contactarlos.',
      'feature2.title': 'Reactiva tu base cada trimestre',
      'feature2.body': 'Cada trimestre le escribimos a tus contactos inactivos — pero primero segmentamos tu base, así cada quien recibe el mensaje que le aplica. Nada de mandar el mismo blast de WhatsApp Business a toda tu lista de un jalón.',
      'feature3.title': 'Recupera oportunidades',
      'feature3.body': 'Llamadas perdidas, leads sin responder y cotizaciones abiertas reciben seguimiento automático — para que ninguna se enfríe antes de convertirse en cita o venta.',
      'feature4.title': 'Protege tu agenda',
      'feature4.body': 'Confirmaciones, recordatorios y reprogramación en un clic reducen las cancelaciones y los espacios vacíos — y si aun así no se presentan, recuperamos la cita.',
      'feature5.title': 'Nada importante se queda sin responder',
      'feature5.body': 'Si una respuesta valiosa no recibe atención de tu equipo a tiempo, se escala automáticamente — para que ninguna oportunidad se pierda por descuido.',
      'feature6.title': 'Genera reseñas automáticamente',
      'feature6.body': 'Cada compra o cita exitosa dispara una solicitud de reseña — para construir la prueba social que te ayuda a cerrar al siguiente cliente.',
      'feature7.title': 'Convierte clientes contentos en clientes nuevos',
      'feature7.body': 'Cuando confirmamos que un cliente quedó satisfecho, podemos activar una solicitud de referido — una extensión sobre el sistema base, para conseguir clientes nuevos al costo más bajo posible.',
      'feature8.title': 'Ve el ingreso que se recupera',
      'feature8.body': 'El sistema registra cada cita, cada ingreso y cada oportunidad recuperada por cada parte del sistema — para que el retorno sea visible, no una promesa.',

      'wa.title': '¿Y si ya tengo WhatsApp Business?',
      'wa.body': 'WhatsApp Business te da un chat: tú decides cuándo escribir, a quién y qué. Asvelo corre por detrás. Detecta la llamada perdida, la cita que se acerca o el cliente que no ha vuelto, y dispara el mensaje sin que tengas que acordarte tú. Sigue siendo WhatsApp del otro lado. Solo que ya no depende de tu memoria.',
      'wa.diagram.waLabel': 'Solo WhatsApp Business',
      'wa.diagram.wa1': 'Tú recuerdas escribir',
      'wa.diagram.wa2': 'Un chat, un mensaje a la vez',
      'wa.diagram.wa3': 'Sin registro de qué faltó',
      'wa.diagram.asveloLabel': 'Con el sistema',
      'wa.diagram.asvelo1': 'El sistema dispara el mensaje',
      'wa.diagram.asvelo2': 'Cada contacto sigue su propio flujo',
      'wa.diagram.asvelo3': 'Reporte de qué se recuperó',

      'footer.trust': 'Tus datos se quedan en tu CRM · Sin contrato en la reactivación gratuita · El sistema instalado es tuyo',
      'footer.copy': '© 2026 Asvelo. Todos los derechos reservados.',
      'footer.privacy': 'Privacidad', 'footer.terms': 'Términos', 'footer.contact': 'Contacto',

      'aria.skipToContent': 'Saltar al contenido', 'aria.diagBack': 'Pregunta anterior',

      'nav.backHome': 'Volver al inicio',

      'vsl.eyebrow': 'Reactivación gratuita para negocios con 300+ contactos',
      'vsl.title': 'Tu base de datos podría tener ventas que nunca recuperaste.',
      'vsl.sub': 'Reactivamos tus antiguos prospectos y clientes por WhatsApp para descubrir cuánto ingreso sigue escondido en tu base de datos. Sin costo inicial.',
      'vsl.videoCaption': 'Cómo recuperamos oportunidades que tu negocio ya pagó por conseguir',
      'vsl.videoPlaceholder': 'Video próximamente',
      'vsl.cta': 'Quiero saber si mi base califica',
      'vsl.microcopy': 'Toma menos de 2 minutos. No todas las bases de datos califican.',

      'how.eyebrow': 'Cómo funciona',
      'how.title': 'De diagnóstico a resultados, sin arriesgar nada',
      'how.pageSub': 'Así es todo el proceso, de principio a fin — pensado para que sepas exactamente qué esperar antes de empezar.',
      'how.step1.title': 'Responde el diagnóstico',
      'how.step1.body': 'Menos de 2 minutos, aquí mismo en la página. Sin costo ni compromiso.',
      'how.step2.title': 'Validamos tu base',
      'how.step2.body': 'Una llamada corta para confirmar volumen y calidad de tus contactos — sin compromiso de continuar.',
      'how.step3.title': 'Lanzamos tu reactivación gratis',
      'how.step3.body': 'Corremos la campaña sobre un segmento real de tu base durante 10–14 días. Sin costo, sin contrato.',
      'how.step4.title': 'Ves los resultados y decides',
      'how.step4.body': 'Te mostramos las citas y el ingreso recuperado. Tú decides si seguir — sin presión.',
      'how.step5.title': 'Instalamos el sistema completo',
      'how.step5.body': 'Si decides continuar, instalamos el sistema dentro de tu CRM por una tarifa única de MXN 20,000. Después, compras Kits de Campaña solo cuando quieras lanzar algo nuevo.',
      'how.note': 'Sin costo inicial · Sin contrato · Tus datos se quedan en tu CRM',

      'notforall.eyebrow': 'Sé honesto contigo mismo',
      'notforall.title': 'Esto no es para todos',
      'notforall.sub': 'No corremos el piloto gratuito con cualquier negocio. Lo reservamos para los que ya tienen algo real que recuperar.',
      'notforall.item1': 'Apenas estás empezando y todavía no tienes clientes o leads propios.',
      'notforall.item2': 'Tu lista es comprada o descargada, no gente con la que ya tuviste una relación real.',
      'notforall.item3': 'No podrías atender 10 citas o ventas extra si te llegaran la próxima semana.',
      'notforall.note': 'Si nada de esto te describe, probablemente sí calificas. Por eso solo corremos unos cuantos pilotos gratuitos a la vez. Cada uno lleva atención real de nuestro equipo, no piloto automático.',

      'trust.eyebrow': 'Antes de continuar',
      'trust.title': 'Esto es lo que necesitas para calificar',
      'trust.item1': '300+ contactos reales — clientes o leads, no listas compradas',
      'trust.item2': 'Un CRM, o al menos una lista organizada (Excel, WhatsApp, papel)',
      'trust.item3': 'Capacidad para atender 10–15 citas o ventas adicionales',
      'trust.item4': 'Alguien que pueda responder a un contacto interesado en minutos, no días',

      'howmany.eyebrow': '¿No sabes tu número exacto?',
      'howmany.title': 'Cómo saber cuántos clientes tengo en mis bases de datos',
      'howmany.sub': 'No necesitas el número exacto para responder el diagnóstico — así puedes revisar dónde están tus contactos:',
      'howmany.item1.title': 'CRM (GoHighLevel, HubSpot, etc.)',
      'howmany.item1.body': 'Entra a la sección de Contactos — el total aparece arriba de la lista o en el dashboard.',
      'howmany.item2.title': 'WhatsApp Business',
      'howmany.item2.body': 'Ve a Herramientas de empresa → Estadísticas, o cuenta tus chats guardados y las etiquetas de clientes.',
      'howmany.item3.title': 'Excel o Google Sheets',
      'howmany.item3.body': 'Cuenta las filas de tu lista de clientes o leads — la mayoría de las hojas muestra el total abajo o con Ctrl+Fin.',
      'howmany.item4.title': 'Sistema de citas o punto de venta (Booksy, Fresha, Square, etc.)',
      'howmany.item4.body': 'Revisa el reporte de clientes o el total de perfiles guardados en la plataforma.',
      'howmany.note': 'Si usas varias herramientas, súmalas — no hace falta que el número sea exacto.',

      'faq.eyebrow': 'Preguntas frecuentes',
      'faq.title': 'Antes de que respondas el diagnóstico',
      'faq.q1': '¿Por qué es gratis?',
      'faq.a1': 'Corremos la primera campaña sin costo para demostrar que hay ingresos recuperables reales antes de pedirte que pagues por el sistema completo.',
      'faq.q2': '¿Qué necesito para calificar?',
      'faq.a2': 'Al menos 300 contactos reales — clientes o leads, no listas compradas — con datos de contacto válidos y la capacidad de atender las citas o ventas que recuperemos.',
      'faq.q3': '¿Cuánto tarda en verse el resultado?',
      'faq.a3': 'La campaña corre de 10 a 14 días sobre un segmento de tu base — verás respuestas, conversaciones y citas agendadas durante ese periodo.',
      'faq.q4': '¿Por qué no solo uso WhatsApp Business?',
      'faq.a4': 'WhatsApp Business te da un chat: tú decides cuándo escribir. Asvelo detecta la llamada perdida, la cita próxima o el cliente dormido, y dispara el mensaje sin que tengas que acordarte. Sigue siendo WhatsApp del otro lado.',

      'diag.done.recapLabel': 'Con base en tus respuestas, esto es lo que podrías recuperar:',

      'diag.eyebrow': 'Diagnóstico rápido',
      'diag.title': '¿Calificas para tu reactivación gratis?',
      'diag.sub': 'Responde estas preguntas — toma menos de un minuto.',
      'diag.questionPrefix': 'Pregunta', 'diag.questionJoin': 'de',

      'diag.q0': '¿Tienes un CRM o una lista de leads y clientes?',
      'diag.q0.opt1': 'Sí, uso un CRM (GoHighLevel, HubSpot, etc.)',
      'diag.q0.opt2': 'Tengo una lista, pero no es un CRM formal (Excel, WhatsApp, papel)',
      'diag.q0.opt3': 'No, no tengo nada organizado todavía',

      'diag.q1': '¿Cuántos leads o clientes tienes en total?',
      'diag.q1.opt1': 'Menos de 300', 'diag.q1.opt2': '300 – 500', 'diag.q1.opt3': '500 – 2,000', 'diag.q1.opt4': '2,000+',

      'diag.q2': '¿De dónde vienen esos contactos?',
      'diag.q2.opt1': 'Clientes o leads reales, de los últimos 2 años',
      'diag.q2.opt2': 'Clientes o leads reales, pero más antiguos',
      'diag.q2.opt3': 'Lista comprada o descargada',
      'diag.q2.opt4': 'No estoy seguro',

      'diag.q3': '¿Cuál es tu ticket promedio, o el valor de un cliente recurrente?',
      'diag.q3.opt1': 'Menos de MXN 2,000', 'diag.q3.opt2': 'MXN 2,000 – 5,000', 'diag.q3.opt3': 'MXN 5,000+',
      'diag.q3.opt4': 'Ticket bajo, pero compran seguido (alto LTV)',

      'diag.reveal.eyebrow': 'Tu estimado',
      'diag.reveal.cta': 'Continuar',
      'diag.reveal.perMonth': '',
      'diag.reveal.qualified.headline': 'Podrías tener esto en ingresos recuperables:',
      'diag.reveal.qualified.note': 'Estimado conservador — contactos × 3% de conversión × ticket promedio. El mismo cálculo que usamos para calificar pilotos gratuitos.',
      'diag.reveal.looseNote': 'Como no está en un CRM formal, empezamos por organizar tu lista antes de lanzar la campaña.',
      'diag.reveal.belowfloor.headline': 'Aún no llegas al volumen mínimo del piloto.',
      'diag.reveal.belowfloor.note': 'Trabajamos mejor con 300+ contactos reales. Con menos, te lo decimos con honestidad — pero sigue para que veamos qué opción tiene sentido para ti.',
      'diag.reveal.disqualified.headline': 'Este tipo de lista no aplica para el piloto gratuito.',
      'diag.reveal.disqualified.note': 'Las campañas de reactivación funcionan sobre contactos con los que ya tienes una relación real — no sobre listas compradas o descargadas. Sigue y te decimos qué otra opción tiene sentido.',
      'diag.reveal.nocrm.headline': 'Sin una lista de contactos, todavía no hay nada que reactivar.',
      'diag.reveal.nocrm.note': 'El piloto gratuito reactiva contactos que ya tienes. Si aún no tienes una base organizada, podemos ayudarte a armar una primero — sigue y te contactamos con esa opción.',

      'diag.q4': 'Si recuperamos 10–15 citas o ventas en las próximas dos semanas, ¿tienes capacidad para atenderlas?',
      'diag.q4.opt1': 'Sí, sin problema', 'diag.q4.opt2': 'Sí, con algunos ajustes', 'diag.q4.opt3': 'No, estamos saturados ahora mismo',

      'diag.q5': '¿Alguien puede responder a un contacto interesado en menos de 10 minutos?',
      'diag.q5.opt1': 'Sí, siempre', 'diag.q5.opt2': 'A veces', 'diag.q5.opt3': 'No, tardamos más',

      'diag.q6': '¿A dónde enviamos tus resultados?', 'diag.submit': 'Ver si califico',

      'form.name': 'Nombre completo', 'form.business': 'Nombre del negocio', 'form.phone': 'Teléfono o correo',
      'form.privacy': 'Sin spam — solo tus resultados.',
      'form.email': 'Correo electrónico', 'form.message': 'Mensaje',

      'diag.persona.no_list.title': 'Diagnóstico: aún no tienes una base que reactivar.',
      'diag.persona.no_list.body': 'Sin una lista de contactos no hay nada que recuperar todavía. El primer paso es instalar un sistema simple que capture y organice cada lead nuevo — para que en unos meses sí tengas una base lista para un piloto gratuito.',
      'diag.persona.no_list.cta': 'Conocer el sistema de captura',

      'diag.persona.purchased_list.title': 'Diagnóstico: esta lista no aplica para el piloto gratuito.',
      'diag.persona.purchased_list.body': 'Las campañas de reactivación funcionan sobre contactos con los que ya tienes una relación real — no sobre listas compradas o descargadas. Podemos ayudarte a construir una base propia a partir de tus leads reales.',
      'diag.persona.purchased_list.cta': 'Hablar de mi base propia',

      'diag.persona.below_floor.title': 'Diagnóstico: te falta volumen para un piloto representativo.',
      'diag.persona.below_floor.body': 'Con menos de 300 contactos reales, el piloto gratuito no genera una muestra suficiente para probar el sistema. Mientras acumulas más volumen, podemos instalar la captura de leads — y considerar una campaña pagada más pequeña si tiene sentido ahora.',
      'diag.persona.below_floor.cta': 'Ver opciones mientras creces',

      'diag.persona.saturated.title': 'Diagnóstico: tu equipo está saturado ahora mismo.',
      'diag.persona.saturated.body': 'No tiene sentido generar más citas o ventas de las que puedes atender — el piloto solo sirve si puedes capturar el resultado. Te agregamos a la lista para relanzar en cuanto tengas espacio.',
      'diag.persona.saturated.cta': 'Unirme a la lista de espera',

      'diag.persona.slow_response.title': 'Diagnóstico: la respuesta lenta puede hundir el piloto.',
      'diag.persona.slow_response.body': 'Si un contacto recuperado responde y nadie contesta a tiempo, el piloto falla por una razón que no tiene que ver con la campaña. Primero instalamos respuesta automática y enrutamiento — después corremos la reactivación.',
      'diag.persona.slow_response.cta': 'Automatizar mi respuesta primero',

      'diag.persona.loose_data.title': 'Diagnóstico: tu base existe, pero no está organizada.',
      'diag.persona.loose_data.body': 'Antes de lanzar cualquier campaña, limpiamos y organizamos tu lista de Excel, WhatsApp o papel en un formato que se pueda trabajar. Es rápido y es el paso obligado antes del piloto gratuito.',
      'diag.persona.loose_data.cta': 'Organizar mi base primero',

      'diag.persona.stale_data.title': 'Diagnóstico: la antigüedad o el origen de tus datos no está claro.',
      'diag.persona.stale_data.body': 'Contactos muy antiguos o de origen incierto bajan la confianza del estimado. En la llamada de diagnóstico revisamos la base real para confirmar qué tan recuperable es antes de confirmar el piloto.',
      'diag.persona.stale_data.cta': 'Agendar revisión de mi base',

      'diag.persona.low_ticket.title': 'Diagnóstico: hay que confirmar que la economía funcione.',
      'diag.persona.low_ticket.body': 'Con un ticket bajo, el piloto solo tiene sentido si la frecuencia de recompra o el margen lo compensan. Lo confirmamos juntos antes de comprometer trabajo gratuito de ambos lados.',
      'diag.persona.low_ticket.cta': 'Revisar la economía de mi negocio',

      'diag.persona.capacity_conditional.title': 'Diagnóstico: probablemente tengas capacidad, hay que confirmarla.',
      'diag.persona.capacity_conditional.body': 'Antes de lanzar, confirmamos exactamente cuántas citas o ventas adicionales puedes atender en las próximas dos semanas — para que el piloto no te rebase.',
      'diag.persona.capacity_conditional.cta': 'Confirmar mi capacidad',

      'diag.persona.response_conditional.title': 'Diagnóstico: tu tiempo de respuesta es inconsistente.',
      'diag.persona.response_conditional.body': 'Antes del piloto, asignamos a alguien específico para responder a los contactos recuperados — así ninguna oportunidad se pierde por falta de seguimiento.',
      'diag.persona.response_conditional.cta': 'Asignar quién responde',

      'diag.persona.prequalified.title': 'Diagnóstico: tu negocio parece un candidato fuerte.',
      'diag.persona.prequalified.body': 'El siguiente paso es validar la calidad y cantidad real de los contactos antes de confirmar la reactivación gratuita. Te contactamos dentro de un día hábil.',
      'diag.persona.prequalified.cta': 'Agendar mi validación'
    },

    en: {
      'menu.toggle': 'Open menu', 'menu.home': 'Home', 'menu.features': "What’s Included", 'menu.pricing': 'Pricing', 'menu.contact': 'Contact', 'menu.howItWorks': 'How It Works',

      'contact.title': 'Contact Us',
      'contact.sub': "Questions about the system, or want to know if your database qualifies? Write to us directly or fill out the form — we'll reply within one business day.",
      'contact.emailLabel': 'Direct email:',
      'contact.submit': 'Send message',
      'contact.formNote': 'This opens your email app to send the message to contact@asvelo.com.',

      'hero.eyebrow': 'Free database reactivation',
      'hero.title': 'Earn <span class="accent">more from every customer</span>,<br>without spending more<br>to get new ones.',
      'hero.sub': 'Asvelo runs the follow-ups that convert more leads, bring back customers, and generate reviews and referrals.',
      'hero.cta.primary': 'See If My Database Qualifies',
      'hero.microcopy': 'Free reactivation for businesses with 300+ contacts.',

      'trustStrip.body': 'We segment your database - launch the campaign - report the opportunities recovered',

      'pricing.eyebrow': 'Pricing',

      'pricing.hero.title': 'You pay once to install the system. After that, you decide what else to buy.',
      'pricing.hero.sub': "It's not a subscription. We install the complete system in your CRM for a one-time founding price; after that, you buy Campaign Test Kits only when you need them.",
      'pricing.hero.anchor': 'Install from MXN 20,000, one time.',
      'pricing.hero.cta': 'Request my free reactivation',
      'pricing.hero.reassurance': "You start with a free reactivation — see real results before you pay for the install.",

      'pricing.table.badge': 'The complete system',
      'pricing.table.scopeNote': 'Customized campaigns (~MXN 3,000–4,000) and fully managed campaigns (~MXN 6,000–10,000) are quoted separately.',
      'pricing.currency.note': 'Approximate conversion.',

      'pricing.offer1.name': 'Free reactivation',
      'pricing.offer1.price': 'Free',
      'pricing.offer1.for': 'Before you pay anything',
      'pricing.offer1.item1': 'We recover opportunities from a real segment of your database',
      'pricing.offer1.item2': 'Runs 10 to 14 days, no contract',
      'pricing.offer1.item3': 'You see real results before deciding',

      'pricing.offer2.name': 'System install',
      'pricing.offer2.for': 'One-time payment — founding price',
      'pricing.offer2.item1': 'Segmentation and mapping of your customer lifecycle',
      'pricing.offer2.item2': 'Response to missed calls, open leads, and quotes',
      'pricing.offer2.item3': 'Confirmations, reminders, and recovery for appointments and no-shows',
      'pricing.offer2.item4': 'Dormant-contact reactivation and repurchase reminders',
      'pricing.offer2.item5': 'First complete reactivation campaign, training, and handoff',
      'pricing.offer2.item6': '30 days of technical corrections included',

      'pricing.offer3.name': 'Campaign Test Kit',
      'pricing.offer3.for': 'Per kit, whenever you want one',
      'pricing.offer3.item1': 'Segment, offer, and two message variations ready to launch',
      'pricing.offer3.item2': 'You run it yourself inside the already-installed system',
      'pricing.offer3.item3': 'Customized (~$3,000–4,000) or fully managed by us (~$6,000–10,000)',

      'pricing.philosophy.title': 'Why a one-time fee instead of a monthly plan?',
      'pricing.philosophy.body': "Once installed, the system keeps working on its own inside your CRM — we don't need to be the ones keeping it alive every month, so we don't charge for that. What we do charge for afterward is new work: a Campaign Test Kit is a new segment, a new offer, new copy — not a fee for leaving what we already installed turned on.",

      'pricing.nocrm.title': "Don't have a CRM?",
      'pricing.nocrm.body': "We recommend opening your own GoHighLevel account — yours, with your data and your workflows, and you pay GoHighLevel directly. It's the infrastructure we use to run the system in one place. We may earn an affiliate commission on that recommendation; we tell you upfront — we're not a GoHighLevel reseller.",

      'pricing.finalCta.title': "First we check if there's money to recover.",
      'pricing.finalCta.body': "We run a free reactivation on part of your database. With real results, you decide whether to install the complete system.",
      'pricing.finalCta.cta': 'Request my free reactivation',
      'pricing.finalCta.reassurance': "No commitment — you only pay for the install if you decide to continue.",

      'features.eyebrow': 'The system', 'features.imagePlaceholder': 'Screenshot coming soon',
      'features.intro': 'First, we recover what you already lost. Then, we install the system that stops you from losing it again.',
      'feature1.title': 'Bring Back Your Old Customers',
      'feature1.body': "We message your customers from 3, 6, or 12 months ago at the exact right point in their repurchase cycle — so they come back without you having to remember to reach out.",
      'feature2.title': 'Reactivate Your Database Every Quarter',
      'feature2.body': "Every quarter, we reach out to your dormant contacts — but we segment your base first, so each person gets the message that actually applies to them. Not a mass WhatsApp Business blast to your whole list at once.",
      'feature3.title': 'Recover Opportunities',
      'feature3.body': "Missed calls, unanswered leads, and open quotes get automatic follow-up — so nothing goes cold before it becomes a booked appointment or a sale.",
      'feature4.title': 'Protect Your Calendar',
      'feature4.body': "Confirmations, reminders, and one-click rescheduling cut cancellations and empty slots — and we recover the booking even when someone doesn’t show.",
      'feature5.title': 'Nothing Important Goes Unanswered',
      'feature5.body': "If a valuable reply doesn’t get a response from your team in time, it escalates automatically — so no opportunity slips through from neglect.",
      'feature6.title': 'Generate Reviews Automatically',
      'feature6.body': 'Every successful visit or purchase triggers a review request — building the social proof that helps you close the next customer.',
      'feature7.title': 'Turn Happy Customers Into New Ones',
      'feature7.body': "Once we confirm a customer is satisfied, we can turn on a referral ask — an extension on top of the base system, the cheapest way you'll ever acquire a new customer.",
      'feature8.title': "See the Revenue You’re Recovering",
      'feature8.body': 'The system tracks every appointment, every dollar, and every opportunity recovered by each part of the system — so the return stays visible, not a promise.',

      'wa.title': "What if I already have WhatsApp Business?",
      'wa.body': "WhatsApp Business gives you a chat: you decide when to write, to whom, and what. Asvelo runs in the background. It catches the missed call, the upcoming appointment, or the customer who hasn't come back, and sends the message without you having to remember. It's still WhatsApp on the other end. It just doesn't depend on your memory anymore.",
      'wa.diagram.waLabel': 'WhatsApp Business alone',
      'wa.diagram.wa1': 'You remember to write',
      'wa.diagram.wa2': 'One chat, one message at a time',
      'wa.diagram.wa3': 'No record of what got missed',
      'wa.diagram.asveloLabel': 'With the system',
      'wa.diagram.asvelo1': 'The system sends the message',
      'wa.diagram.asvelo2': 'Every contact follows its own flow',
      'wa.diagram.asvelo3': 'A report on what got recovered',

      'footer.trust': 'Data stays in your CRM · No contract on the free reactivation · The installed system is yours to keep',
      'footer.copy': '© 2026 Asvelo. All rights reserved.',
      'footer.privacy': 'Privacy', 'footer.terms': 'Terms', 'footer.contact': 'Contact',

      'aria.skipToContent': 'Skip to content', 'aria.diagBack': 'Previous question',

      'nav.backHome': 'Back to home',

      'vsl.eyebrow': 'Free reactivation for businesses with 300+ contacts',
      'vsl.title': 'Your database could be hiding sales you never recovered.',
      'vsl.sub': "We reactivate your past leads and customers over WhatsApp to find out how much revenue is still sitting in your database. No upfront cost.",
      'vsl.videoCaption': 'How we recover opportunities your business already paid to get',
      'vsl.videoPlaceholder': 'Video coming soon',
      'vsl.cta': 'Find out if my database qualifies',
      'vsl.microcopy': 'Takes less than 2 minutes. Not every database qualifies.',

      'how.eyebrow': 'How it works',
      'how.title': 'From diagnostic to results, without risking anything',
      'how.pageSub': "Here's the entire process, start to finish — so you know exactly what to expect before you begin.",
      'how.step1.title': 'Take the diagnostic',
      'how.step1.body': "Under 2 minutes, right here on the page. No cost, no commitment.",
      'how.step2.title': 'We validate your database',
      'how.step2.body': "A short call to confirm the volume and quality of your contacts — no commitment to continue.",
      'how.step3.title': 'We launch your free reactivation',
      'how.step3.body': 'We run the campaign on a real segment of your database for 10–14 days. No cost, no contract.',
      'how.step4.title': 'You see the results and decide',
      'how.step4.body': "We show you the appointments and revenue recovered. You decide whether to continue — no pressure.",
      'how.step5.title': 'We install the complete system',
      'how.step5.body': 'If you decide to continue, we install the system inside your CRM for a one-time MXN 20,000 fee. After that, you buy Campaign Test Kits only when you want to launch something new.',
      'how.note': 'No upfront cost · No contract · Your data stays in your CRM',

      'notforall.eyebrow': 'Be honest with yourself',
      'notforall.title': "This isn't for everyone",
      'notforall.sub': "We don't run the free pilot with just any business. We save it for the ones that already have something real to recover.",
      'notforall.item1': "You're just starting out and don't have real customers or leads yet.",
      'notforall.item2': "Your list is purchased or scraped, not people you've actually had a relationship with.",
      'notforall.item3': "You couldn't handle 10 extra appointments or sales if they showed up next week.",
      'notforall.note': "If none of that sounds like you, you probably qualify. That's also why we only run a handful of free pilots at a time. Each one gets real attention from our team, not autopilot.",

      'trust.eyebrow': 'Before you continue',
      'trust.title': "Here's what you need to qualify",
      'trust.item1': '300+ real contacts — customers or leads, not purchased lists',
      'trust.item2': 'A CRM, or at least an organized list (Excel, WhatsApp, paper)',
      'trust.item3': 'Capacity to handle 10–15 extra appointments or sales',
      'trust.item4': 'Someone who can respond to an interested contact in minutes, not days',

      'howmany.eyebrow': "Don't know your exact number?",
      'howmany.title': 'How to find out how many clients are in your databases',
      'howmany.sub': "You don't need the exact number to take the diagnostic — here's where to check:",
      'howmany.item1.title': 'CRM (GoHighLevel, HubSpot, etc.)',
      'howmany.item1.body': 'Go to the Contacts section — the total shows above the list or on the dashboard.',
      'howmany.item2.title': 'WhatsApp Business',
      'howmany.item2.body': 'Go to Business Tools → Statistics, or count your saved chats and customer labels.',
      'howmany.item3.title': 'Excel or Google Sheets',
      'howmany.item3.body': 'Count the rows in your customer or lead list — most spreadsheets show the total at the bottom or with Ctrl+End.',
      'howmany.item4.title': 'Booking or point-of-sale system (Booksy, Fresha, Square, etc.)',
      'howmany.item4.body': 'Check the customer report or the total number of saved profiles on the platform.',
      'howmany.note': "If you use several tools, add them up — it doesn't need to be exact.",

      'faq.eyebrow': 'FAQ',
      'faq.title': 'Before you take the diagnostic',
      'faq.q1': 'Why is it free?',
      'faq.a1': "We run the first campaign at no cost to prove there's real recoverable revenue before asking you to pay for the full system.",
      'faq.q2': 'What do I need to qualify?',
      'faq.a2': 'At least 300 real contacts — customers or leads, not purchased lists — with valid contact info and the capacity to handle the appointments or sales we recover.',
      'faq.q3': 'How long until I see results?',
      'faq.a3': "The campaign runs for 10 to 14 days against a segment of your database — you'll see replies, conversations, and booked appointments during that window.",
      'faq.q4': "Why not just use WhatsApp Business?",
      'faq.a4': "WhatsApp Business gives you a chat: you decide when to write. Asvelo catches the missed call, the upcoming appointment, or the dormant customer, and sends the message without you having to remember. It's still WhatsApp on the other end.",

      'diag.done.recapLabel': "Based on your answers, here's what you could recover:",

      'diag.eyebrow': 'Quick diagnostic',
      'diag.title': 'Do you qualify for your free reactivation?',
      'diag.sub': "Answer these questions — it takes less than a minute.",
      'diag.questionPrefix': 'Question', 'diag.questionJoin': 'of',

      'diag.q0': 'Do you have a CRM or a list of leads/customers?',
      'diag.q0.opt1': 'Yes, I use a CRM (GoHighLevel, HubSpot, etc.)',
      'diag.q0.opt2': "I have a list, but it's not a formal CRM (Excel, WhatsApp, paper)",
      'diag.q0.opt3': "No, I don't have anything organized yet",

      'diag.q1': 'How many leads or customers do you have in total?',
      'diag.q1.opt1': 'Under 300', 'diag.q1.opt2': '300 – 500', 'diag.q1.opt3': '500 – 2,000', 'diag.q1.opt4': '2,000+',

      'diag.q2': 'Where do those contacts come from?',
      'diag.q2.opt1': 'Real customers or leads, from the last 2 years',
      'diag.q2.opt2': 'Real customers or leads, but older',
      'diag.q2.opt3': 'A purchased or scraped list',
      'diag.q2.opt4': 'Not sure',

      'diag.q3': "What's your average ticket, or the value of a repeat customer?",
      'diag.q3.opt1': 'Under MXN 2,000', 'diag.q3.opt2': 'MXN 2,000 – 5,000', 'diag.q3.opt3': 'MXN 5,000+',
      'diag.q3.opt4': 'Low ticket, but they buy often (high LTV)',

      'diag.reveal.eyebrow': 'Your estimate',
      'diag.reveal.cta': 'Continue',
      'diag.reveal.perMonth': '',
      'diag.reveal.qualified.headline': "Here's what you could have in recoverable revenue:",
      'diag.reveal.qualified.note': 'Conservative estimate — contacts × 3% conversion × average ticket. The same math we use to qualify free pilots.',
      'diag.reveal.looseNote': "Since it's not in a formal CRM yet, we start by organizing your list before launching the campaign.",
      'diag.reveal.belowfloor.headline': "You're not quite at the pilot's minimum volume yet.",
      'diag.reveal.belowfloor.note': "We work best with 300+ real contacts. With fewer, we'll tell you honestly — but keep going so we can see what makes sense for you.",
      'diag.reveal.disqualified.headline': "This type of list doesn't work for the free pilot.",
      'diag.reveal.disqualified.note': "Reactivation campaigns run on contacts you already have a real relationship with — not purchased or scraped lists. Keep going and we'll tell you what does make sense.",
      'diag.reveal.nocrm.headline': "Without a contact list, there's nothing to reactivate yet.",
      'diag.reveal.nocrm.note': "The free pilot reactivates contacts you already have. If you don't have an organized list yet, we can help you build one first — keep going and we'll follow up with that option.",

      'diag.q4': 'If we recover 10–15 appointments or sales in the next two weeks, do you have capacity to handle them?',
      'diag.q4.opt1': 'Yes, no problem', 'diag.q4.opt2': 'Yes, with some adjustments', 'diag.q4.opt3': "No, we're at capacity right now",

      'diag.q5': 'Can someone respond to an interested contact within 10 minutes?',
      'diag.q5.opt1': 'Yes, always', 'diag.q5.opt2': 'Sometimes', 'diag.q5.opt3': "No, it takes us longer",

      'diag.q6': 'Where should we send your results?', 'diag.submit': 'See if I qualify',

      'form.name': 'Full name', 'form.business': 'Business name', 'form.phone': 'Phone or email',
      'form.privacy': 'No spam — just your results.',
      'form.email': 'Email address', 'form.message': 'Message',

      'diag.persona.no_list.title': "Diagnosis: you don't have a database to reactivate yet.",
      'diag.persona.no_list.body': "Without a contact list there's nothing to recover yet. The first step is a simple system that captures and organizes every new lead — so in a few months you'll have a base ready for a free pilot.",
      'diag.persona.no_list.cta': 'See the capture system',

      'diag.persona.purchased_list.title': "Diagnosis: this list doesn't qualify for the free pilot.",
      'diag.persona.purchased_list.body': 'Reactivation campaigns run on contacts you already have a real relationship with — not purchased or downloaded lists. We can help you build a real first-party base from your actual leads.',
      'diag.persona.purchased_list.cta': 'Talk about my own database',

      'diag.persona.below_floor.title': "Diagnosis: you're short on volume for a representative pilot.",
      'diag.persona.below_floor.body': "With fewer than 300 real contacts, the free pilot can't generate a big enough sample to prove the system. While you build up volume, we can install lead capture — and consider a smaller paid campaign if it makes sense now.",
      'diag.persona.below_floor.cta': 'See options while you grow',

      'diag.persona.saturated.title': 'Diagnosis: your team is at capacity right now.',
      'diag.persona.saturated.body': "There's no point generating more appointments or sales than you can handle — the pilot only works if you can capture the result. We'll add you to the list to relaunch once you have room.",
      'diag.persona.saturated.cta': 'Join the waitlist',

      'diag.persona.slow_response.title': 'Diagnosis: slow response could sink the pilot.',
      'diag.persona.slow_response.body': "If a recovered contact replies and nobody answers in time, the pilot fails for reasons that have nothing to do with the campaign. We install automated response and routing first — then run the reactivation.",
      'diag.persona.slow_response.cta': 'Automate my response first',

      'diag.persona.loose_data.title': "Diagnosis: your database exists, it's just not organized.",
      'diag.persona.loose_data.body': "Before launching anything, we clean and organize your Excel, WhatsApp, or paper list into something workable. It's quick, and it's the required step before the free pilot.",
      'diag.persona.loose_data.cta': 'Organize my database first',

      'diag.persona.stale_data.title': "Diagnosis: your data's age or source isn't clear.",
      'diag.persona.stale_data.body': 'Very old contacts or an uncertain source lower confidence in the estimate. On the diagnostic call we review the real database to confirm how recoverable it actually is before confirming the pilot.',
      'diag.persona.stale_data.cta': 'Schedule a database review',

      'diag.persona.low_ticket.title': 'Diagnosis: we need to confirm the economics work.',
      'diag.persona.low_ticket.body': 'With a low ticket, the pilot only makes sense if repeat frequency or margin makes up for it. We confirm that together before committing free work on both sides.',
      'diag.persona.low_ticket.cta': 'Review my business economics',

      'diag.persona.capacity_conditional.title': "Diagnosis: you likely have capacity — let's confirm it.",
      'diag.persona.capacity_conditional.body': "Before launching, we confirm exactly how many extra appointments or sales you can handle in the next two weeks — so the pilot doesn't overwhelm you.",
      'diag.persona.capacity_conditional.cta': 'Confirm my capacity',

      'diag.persona.response_conditional.title': 'Diagnosis: your response time is inconsistent.',
      'diag.persona.response_conditional.body': 'Before the pilot, we assign someone specific to respond to recovered contacts — so no opportunity is lost to a missed follow-up.',
      'diag.persona.response_conditional.cta': 'Assign who responds',

      'diag.persona.prequalified.title': 'Diagnosis: your business looks like a strong candidate.',
      'diag.persona.prequalified.body': "Next step is validating the real quality and count of your contacts before confirming the free reactivation. We'll reach out within one business day.",
      'diag.persona.prequalified.cta': 'Schedule my validation'
    }
  };

  function detectBrowserLang() {
    var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
    for (var i = 0; i < langs.length; i++) {
      if (/^en/i.test(langs[i])) return 'en';
    }
    return 'es';
  }

  var storedLang = localStorage.getItem(STORAGE_KEY);
  var currentLang = (storedLang === 'en' || storedLang === 'es') ? storedLang : detectBrowserLang();

  function setText(el, val) {
    if (val.indexOf('Asvelo') !== -1) {
      el.innerHTML = val.split('Asvelo').join('<span translate="no">Asvelo</span>');
    } else {
      el.textContent = val;
    }
  }

  function applyStaticText(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = dict[lang][el.getAttribute('data-i18n')];
      if (val != null) setText(el, val);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = dict[lang][el.getAttribute('data-i18n-html')];
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = dict[lang][el.getAttribute('data-i18n-placeholder')];
      if (val != null) el.setAttribute('placeholder', val);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var val = dict[lang][el.getAttribute('data-i18n-aria-label')];
      if (val != null) el.setAttribute('aria-label', val);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyStaticText(lang);
    document.dispatchEvent(new CustomEvent('asvelo:langchange', { detail: { lang: lang } }));
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyStaticText(currentLang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
    });
  });

  window.ASVELO_I18N = {
    dict: dict,
    getLang: function () { return currentLang; },
    setLang: setLang,
    t: function (key) { return dict[currentLang][key]; }
  };
})();
