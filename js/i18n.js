(function () {
  'use strict';

  var STORAGE_KEY = 'asvelo-lang';

  var dict = {
    es: {
      'nav.problem': 'Problema', 'nav.how': 'Cómo funciona',
      'nav.faq': 'Preguntas', 'nav.cta': 'Empezar reactivación gratis',

      'hero.eyebrow': 'Reactivación de base de datos gratis',
      'hero.title': 'Consigue más ventas sin conseguir <span class="accent">más leads</span>.',
      'hero.sub': 'Asvelo convierte los leads y clientes que ya tienes en tu CRM en citas agendadas — sin comprar un solo lead nuevo.',
      'hero.cta.primary': 'Empezar reactivación gratis',
      'hero.stat1.label': 'Costo para empezar', 'hero.stat2.label': 'Tiempo de respuesta', 'hero.stat3.label': 'Cobertura de seguimiento',
      'hero.form.eyebrow': 'Gratis — sin tarjeta', 'hero.form.title': 'Reactivar mi base de datos',
      'hero.form.sub': 'Tus leads y clientes inactivos reciben una campaña real de reactivación, sin costo.',
      'hero.form.submit': 'Reactivar mi base — gratis', 'hero.form.thanks': 'Gracias — te contactaremos pronto',

      'form.name': 'Nombre completo', 'form.business': 'Nombre del negocio', 'form.phone': 'Teléfono o correo',
      'form.privacy': 'Sin spam — solo tus resultados.',

      'problem.eyebrow': 'La fuga', 'problem.title': 'Tu base de datos ya está llena de compradores.',
      'problem.sub': 'Cada llamada perdida, lead sin cerrar y cita no asistida es dinero que ya pagaste por conseguir — y se fuga por atrás de tu embudo mientras sigues gastando en anuncios nuevos para reemplazarlo.',
      'problem.card1.stamp': 'Llamadas perdidas',
      'problem.card1.body': 'Una gran parte de las llamadas entrantes a negocios de servicio quedan sin contestar en horario laboral — y la mayoría de quienes llaman nunca vuelven a intentarlo.',
      'problem.card1.loss': '→ Se pierde: citas agendadas',
      'problem.card2.stamp': 'Leads fríos',
      'problem.card2.body': 'Los leads que no se contactan en los primeros minutos convierten a una fracción de la tasa de un seguimiento instantáneo.',
      'problem.card2.loss': '→ Se pierde: pipeline',
      'problem.card3.stamp': 'Clientes inactivos',
      'problem.card3.body': 'Los clientes anteriores que podrían volver a agendar, subir de plan o referir siguen sin contactarse dentro del CRM.',
      'problem.card3.loss': '→ Se pierde: ingresos recurrentes',
      'problem.statbar.line': 'más ingresos suelen ser recuperables desde una base de datos existente que desde inversión publicitaria nueva, antes de gastar un solo peso adicional.',

      'why.eyebrow': 'Por qué Asvelo', 'why.title': 'Diseñado para cerrar la fuga, no para sumarse a ella.',
      'why1.title': 'Velocidad de respuesta',
      'why1.body': 'Cada lead nuevo recibe una llamada, mensaje o correo instantáneo — la mayoría en menos de 5 minutos, de día o de noche, antes de que llame a tu competencia.',
      'why2.title': 'Cobertura de todo el ciclo',
      'why2.body': 'Del primer mensaje al lead nuevo hasta la reactivación dos años después — seguimiento instantáneo, recuperación de llamadas perdidas e inasistencias, reactivación de contactos inactivos, y solicitudes de reseña y referido. Cada etapa tiene una acción definida — nadie se queda sin seguimiento.',
      'why3.title': 'Funciona dentro de tu CRM',
      'why3.body': 'Asvelo se conecta al CRM que ya usas. Sin migraciones ni sistemas nuevos que tu equipo tenga que aprender.',
      'why4.title': 'Comprobado antes de pagar',
      'why4.body': 'Tu primera campaña de reactivación corre gratis, para que veas ingresos recuperados antes de comprometerte a algo.',

      'how.eyebrow': 'Cómo trabajamos', 'how.title': 'De diagnóstico a sistema activo, en cinco pasos.',
      'how.step1.tag': 'Paso 01', 'how.step1.title': 'Diagnóstico', 'how.step1.body': 'Tu CRM y tu flujo de leads quedan auditados — así ves exactamente dónde se fuga el ingreso.',
      'how.step2.tag': 'Paso 02', 'how.step2.title': 'Reactivación gratuita', 'how.step2.body': 'Tus contactos inactivos reciben una campaña real — sin costo, sin compromiso.',
      'how.step3.tag': 'Paso 03', 'how.step3.title': 'Revisión de resultados', 'how.step3.body': 'Ves las respuestas, conversaciones y citas agendadas que se recuperaron.',
      'how.step4.tag': 'Paso 04', 'how.step4.title': 'Instalación del sistema', 'how.step4.body': 'Tienes seguimiento de todo el ciclo instalado: leads nuevos, inasistencias, reactivación y retención.',
      'how.step5.tag': 'Paso 05', 'how.step5.title': 'Optimización mensual', 'how.step5.body': 'Cada mes ves tus mensajes y tu enrutamiento monitoreados, reportados y ajustados.',
      'how.counterPrefix': 'Paso',

      'install.slot1': '[ LUGARES ESTE MES ]', 'install.slot2': '06 / 10 OCUPADOS',
      'install.title': 'Tu primera campaña es <span class="accent">gratis</span>.',
      'install.sub': 'Tus leads y clientes inactivos reciben una campaña real de reactivación antes de que pagues nada. Solo avanzas si encuentra ingresos.',
      'install.qualify.title': 'Puedes calificar si:',
      'install.qualify.li1': 'Ya tienes 500+ leads o clientes en un CRM',
      'install.qualify.li2': 'Tienes un negocio basado en citas, cotizaciones o recompra',
      'install.qualify.li3': 'Has notado que leads o clientes anteriores se enfrían',
      'install.qualify.li4': 'Tus contactos tienen datos de contacto válidos y consentimiento para recibir mensajes',
      'install.qualify.li5': 'Alguien de tu equipo puede dar seguimiento cuando un contacto responda',
      'install.qualify.disclaimer': 'La disponibilidad es limitada a pocos negocios al mes para que cada campaña reciba atención real — no una plantilla.',
      'install.cta': 'Reclama tu reactivación gratis',
      'install.item1.title': 'Campaña completa', 'install.item1.body': 'Tu base de datos recibe una secuencia de reactivación por SMS, WhatsApp, correo o voz — construida y lanzada para ti.',
      'install.item2.title': 'Resultados reales, no una demo', 'install.item2.body': 'Corre sobre tus contactos inactivos reales, así que lo que ves es justo lo que podrías recuperar.',
      'install.item3.title': 'Sin obligación', 'install.item3.body': 'Te quedas con los resultados de cualquier forma — no hay contrato para completar la campaña gratuita.',
      'install.priceWas': 'Instalación MXN 3,000', 'install.priceNow': 'Gratis',
      'install.progressLabel': '6 de 10 lugares ocupados este mes',

      'pc.p1.eyebrow': 'Personalización', 'pc.p1.title': 'Cada mensaje suena como tú.', 'pc.p1.sub': 'No es un script de bot genérico.',
      'pc.tile1.title': 'Voz de marca', 'pc.tile1.body': 'El tono y los guiones se escriben para sonar como tu negocio, no como una plantilla.',
      'pc.tile2.title': 'Con base en el historial', 'pc.tile2.body': 'Los mensajes reflejan lo que un contacto ya agendó, compró o preguntó.',
      'pc.tile3.title': 'Canal correcto por contacto', 'pc.tile3.body': 'SMS, WhatsApp, correo o voz — según lo que cada contacto responde mejor.',
      'pc.tile4.title': 'Traspaso a un humano', 'pc.tile4.body': 'Las conversaciones listas para cerrar se enrutan directo a tu equipo.',
      'pc.p1.footnote': 'El tono y los guiones se revisan contigo antes de publicarse.',
      'pc.p2.eyebrow': 'Cumplimiento', 'pc.p2.title': 'Diseñado para mantenerte del lado correcto de las reglas.', 'pc.p2.sub': 'Consentimiento y baja de mensajes manejados por defecto.',
      'pc.check1.title': 'Baja respetada al instante', 'pc.check1.body': 'Cada respuesta se monitorea para que una solicitud de baja se respete de inmediato, en cualquier canal.',
      'pc.check2.title': 'Contacto con consentimiento previo', 'pc.check2.body': 'Las campañas de reactivación se ejecutan sobre contactos que ya aceptaron recibir mensajes tuyos.',
      'pc.check3.title': 'Registro completo de mensajes', 'pc.check3.body': 'Cada envío, respuesta y resultado queda registrado y disponible para revisión.',
      'pc.p2.footnote': 'Los requisitos varían por canal y región — lo configuramos según el tuyo.',

      'onboarding.eyebrow': 'Implementación', 'onboarding.title': 'Operando en días, no meses.',
      'onboarding.sub': 'Sin migraciones ni implementaciones largas. Esto es lo que pasa en realidad después de que dices que sí.',
      'ob1.title': 'Conectar', 'ob1.body': 'Vincula el CRM que ya usas, o importa tu base de datos — sin necesidad de migrar.',
      'ob2.title': 'Configurar', 'ob2.body': 'Las etapas de tu ciclo quedan mapeadas, con la cadencia, canales y tono de tus mensajes definidos.',
      'ob3.title': 'Lanzar', 'ob3.body': 'El seguimiento instantáneo y tus primeras campañas de reactivación entran en operación.',
      'ob4.title': 'Revisar', 'ob4.body': 'Recibes un recorrido de lo que está corriendo y dónde ver los resultados.',
      'ob5.title': 'Optimizar', 'ob5.body': 'Tus mensajes, tiempos y enrutamiento se ajustan cada mes según las respuestas reales.',

      'faq.eyebrow': 'Preguntas frecuentes', 'faq.title': 'Preguntas, respondidas.',
      'faq.q1': '¿Necesito cambiar de CRM?', 'faq.a1': 'No. Asvelo se conecta al CRM que ya usas. Si no tienes uno, podemos configurarte uno sencillo.',
      'faq.q2': '¿Qué me cuesta en realidad la reactivación gratuita?', 'faq.a2': 'Nada por adelantado. Es posible que cubras costos de mensajería o API en volúmenes altos, y solo pasas a un plan pagado si los resultados valen la pena.',
      'faq.q3': '¿Qué tan rápido se contacta a los leads nuevos?', 'faq.a3': 'La mayoría recibe una llamada, mensaje o correo instantáneo — normalmente en minutos, a cualquier hora del día.',
      'faq.q4': '¿Esto reemplaza a mi equipo de ventas?', 'faq.a4': 'No — se asegura de que cada lead y cliente tenga una acción de seguimiento, para que tu equipo dedique tiempo a las conversaciones listas para cerrar en lugar de perseguir contactos fríos.',
      'faq.q5': '¿En qué se diferencia de un chatbot o una agencia de IA?', 'faq.a5': 'No compras software ni automatizaciones — obtienes un sistema completo de ingresos por cliente, con resultados de los que somos responsables: más citas agendadas e ingresos recuperados.',
      'faq.q6': '¿Qué pasa si mi base de datos es pequeña?', 'faq.a6': 'Necesitas volumen real de leads o clientes para que esto funcione bien — algunos cientos de contactos o más. Si estás por debajo, te lo decimos con honestidad.',
      'faq.q7': '¿Mis datos de clientes están seguros?', 'faq.a7': 'Sí. Los datos se quedan dentro de tu CRM y solo se usan para operar tus campañas — nunca se venden ni se comparten.',
      'faq.aside.title': '¿Aún tienes dudas?',
      'faq.aside.body': 'La forma más rápida de resolverlas: corre tu reactivación gratis y mira los resultados sobre tus propios contactos — sin compromiso.',
      'faq.aside.cta': 'Empezar reactivación gratis',

      'diag.questionPrefix': 'Pregunta', 'diag.questionJoin': 'de',
      'diag.q0': '¿Tienes un CRM o una lista de leads/clientes?',
      'diag.q0.opt1': 'Sí, uso un CRM (GoHighLevel, HubSpot, etc.)',
      'diag.q0.opt2': 'Tengo una lista, pero no es un CRM formal (Excel, WhatsApp, papel)',
      'diag.q0.opt3': 'No, no tengo nada organizado todavía',
      'diag.q1': '¿Cuántos leads o clientes tienes en total?',
      'diag.q1.opt1': 'Menos de 300', 'diag.q1.opt2': '300 – 500', 'diag.q1.opt3': '500 – 2,000', 'diag.q1.opt4': '2,000+',
      'diag.q2': '¿De dónde vienen esos contactos?',
      'diag.q2.opt1': 'Clientes anteriores o leads reales, de los últimos 2 años',
      'diag.q2.opt2': 'Clientes o leads reales, pero más antiguos',
      'diag.q2.opt3': 'Lista comprada o descargada',
      'diag.q2.opt4': 'No estoy seguro',
      'diag.q3': '¿Cuál es tu ticket promedio, o el valor de un cliente recurrente?',
      'diag.q3.opt1': 'Menos de MXN 2,000', 'diag.q3.opt2': 'MXN 2,000 – 5,000', 'diag.q3.opt3': 'MXN 5,000+',
      'diag.q3.opt4': 'Ticket bajo, pero compran seguido (alto LTV)',
      'diag.reveal.eyebrow': 'Tu estimado',
      'diag.reveal.cta': 'Continuar',
      'diag.reveal.perMonth': '/mes',
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
      'diag.persona.prequalified.cta': 'Agendar mi validación',

      'footer.trust': 'Tus datos se quedan en tu CRM · Sin contrato en la reactivación gratuita · Cancela cuando quieras',
      'footer.copy': '© 2026 Asvelo. Todos los derechos reservados.',
      'footer.privacy': 'Privacidad', 'footer.terms': 'Términos', 'footer.contact': 'Contacto',

      'aria.toggleMenu': 'Abrir menú',
      'aria.prevStep': 'Paso anterior', 'aria.nextStep': 'Paso siguiente',

      marquee: ['LEAD', 'SEGUIMIENTO', 'CITA', 'VENTA', 'RESEÑA', 'RECOMPRA', 'REACTIVACIÓN'],

      howSteps: [
        { log: ['Escaneando el CRM en busca de contactos inactivos…', '214 contactos inactivos encontrados', 'Mapeando huecos de respuesta por etapa', 'Tasa de llamadas perdidas marcada: arriba del promedio', 'Reporte de diagnóstico listo'] },
        { log: ['Secuencia de reactivación redactada', 'Enviada a 214 contactos inactivos', 'Empiezan a llegar las primeras respuestas', 'Contactos interesados marcados', 'Resumen de campaña compilado'] },
        { log: ['18 respuestas recibidas', '6 conversaciones abiertas', '3 citas agendadas', 'Ingreso recuperado estimado', 'Sesión de revisión agendada contigo'] },
        { log: ['Seguimiento de leads nuevos conectado', 'Recuperación de inasistencias configurada', 'Cadencia de reactivación programada', 'Flujo de reseñas y referidos activado', 'Sistema entrando en operación'] },
        { log: ['Tiempos de respuesta revisados', 'Desempeño de mensajes comparado', 'Reglas de enrutamiento ajustadas', 'Reporte enviado', 'Siguiente ciclo programado'] }
      ]
    },

    en: {
      'nav.problem': 'Problem', 'nav.how': 'How it works',
      'nav.faq': 'FAQ', 'nav.cta': 'Start Free Reactivation',

      'hero.eyebrow': 'Free database reactivation',
      'hero.title': 'Get more sales without getting <span class="accent">more leads</span>.',
      'hero.sub': 'Asvelo is the customer revenue system that turns the leads you already have into booked appointments — no new leads required.',
      'hero.cta.primary': 'Start Free Reactivation',
      'hero.stat1.label': 'Cost to start', 'hero.stat2.label': 'Avg. response time', 'hero.stat3.label': 'Follow-up coverage',
      'hero.form.eyebrow': 'Free — no card required', 'hero.form.title': 'Reactivate my database',
      'hero.form.sub': 'Your dormant leads and customers get one real reactivation campaign, on us.',
      'hero.form.submit': 'Reactivate my database — free', 'hero.form.thanks': "Thanks — we'll reach out shortly",

      'form.name': 'Full name', 'form.business': 'Business name', 'form.phone': 'Phone or email',
      'form.privacy': 'No spam — just your results.',

      'problem.eyebrow': 'The leak', 'problem.title': 'Your database is already full of buyers.',
      'problem.sub': "Every missed call, unclosed lead, and no-show is money you already paid to acquire — and it leaks out the back of your funnel while you keep spending on new ads to replace it.",
      'problem.card1.stamp': 'Missed calls',
      'problem.card1.body': 'A large share of inbound calls to service businesses go unanswered during business hours — and most callers never call back.',
      'problem.card1.loss': '→ Lost: booked appointments',
      'problem.card2.stamp': 'Cold leads',
      'problem.card2.body': 'Leads not contacted within the first few minutes convert at a fraction of the rate of an instant follow-up.',
      'problem.card2.loss': '→ Lost: pipeline',
      'problem.card3.stamp': 'Dormant customers',
      'problem.card3.body': 'Past customers who could rebook, upgrade, or refer sit untouched in the CRM, never re-engaged.',
      'problem.card3.loss': '→ Lost: repeat revenue',
      'problem.statbar.line': 'more revenue is typically recoverable from an existing database than from net-new ad spend, before a single new lead is bought.',

      'why.eyebrow': 'Why Asvelo', 'why.title': 'Built to close the leak, not add to it.',
      'why1.title': 'Speed to lead',
      'why1.body': 'Every new lead gets an instant call, text, or email — most in under 5 minutes, day or night, before they call your next competitor.',
      'why2.title': 'Full lifecycle coverage',
      'why2.body': "From a new lead's first message to reactivation two years later — instant follow-up, missed-call and no-show recovery, dormant-lead reactivation, and review and referral requests. Every stage has a defined next action — nobody falls through.",
      'why3.title': 'Works inside your CRM',
      'why3.body': 'Asvelo connects to the CRM you already run. No migration, no new system for your team to learn.',
      'why4.title': 'Proven before you pay',
      'why4.body': 'Your first reactivation campaign runs free, so you see recovered revenue before committing to anything.',

      'how.eyebrow': 'How we work', 'how.title': 'From audit to always-on, in five steps.',
      'how.step1.tag': 'Step 01', 'how.step1.title': 'Diagnostic', 'how.step1.body': 'Your CRM and lead flow get audited so you see exactly where revenue is leaking.',
      'how.step2.tag': 'Step 02', 'how.step2.title': 'Free reactivation', 'how.step2.body': 'Your dormant contacts get a real campaign — no cost, no commitment.',
      'how.step3.tag': 'Step 03', 'how.step3.title': 'Results review', 'how.step3.body': 'You see the replies, conversations, and booked appointments it recovered.',
      'how.step4.tag': 'Step 04', 'how.step4.title': 'System install', 'how.step4.body': 'You get full-lifecycle follow-up installed: new leads, no-shows, reactivation, retention.',
      'how.step5.tag': 'Step 05', 'how.step5.title': 'Monthly optimization', 'how.step5.body': 'Every month, you see your messaging and routing monitored, reported, and tuned.',
      'how.counterPrefix': 'Step',

      'install.slot1': '[ SPOTS THIS MONTH ]', 'install.slot2': '06 / 10 CLAIMED',
      'install.title': 'Your first campaign is <span class="accent">free</span>.',
      'install.sub': 'Your dormant leads and customers get a real reactivation campaign before you pay for anything. You only move forward if it finds revenue.',
      'install.qualify.title': 'You may qualify if:',
      'install.qualify.li1': 'You already have 500+ leads or customers in a CRM',
      'install.qualify.li2': 'You run an appointment-based, quote-based, or repeat-purchase business',
      'install.qualify.li3': "You've noticed leads or past customers going cold",
      'install.qualify.li4': 'Your contacts have valid contact info and consent to be messaged',
      'install.qualify.li5': 'Someone on your team can follow up when a contact replies',
      'install.qualify.disclaimer': 'Availability is limited to a small number of businesses per month so every campaign gets real attention — not a template.',
      'install.cta': 'Claim your free reactivation',
      'install.item1.title': 'Full campaign build', 'install.item1.body': 'Your database gets a reactivation sequence across SMS, WhatsApp, email, or voice — built and launched for you.',
      'install.item2.title': 'Real results, not a demo', 'install.item2.body': "It runs on your actual dormant contacts, so what you see is what you'd actually recover.",
      'install.item3.title': 'Zero obligation', 'install.item3.body': "Keep the results either way — there's no contract to see the free campaign through.",
      'install.priceWas': 'MXN 3,000 setup', 'install.priceNow': 'Free',
      'install.progressLabel': '6 of 10 spots claimed this month',

      'pc.p1.eyebrow': 'Personalization', 'pc.p1.title': 'Every message sounds like you.', 'pc.p1.sub': 'Not a generic bot script.',
      'pc.tile1.title': 'Brand voice matched', 'pc.tile1.body': 'Tone and scripts are written to sound like your business, not a template.',
      'pc.tile2.title': 'History-aware', 'pc.tile2.body': 'Messages reflect what a contact already booked, bought, or asked about.',
      'pc.tile3.title': 'Right channel, per contact', 'pc.tile3.body': 'SMS, WhatsApp, email, or voice — chosen by what each contact responds to.',
      'pc.tile4.title': 'Human handoff', 'pc.tile4.body': 'Ready-to-close conversations route straight to your team.',
      'pc.p1.footnote': 'Tone and scripts are reviewed with you before anything goes live.',
      'pc.p2.eyebrow': 'Compliance', 'pc.p2.title': 'Built to stay on the right side of the rules.', 'pc.p2.sub': 'Consent and opt-out handled by default.',
      'pc.check1.title': 'Opt-out honored instantly', 'pc.check1.body': 'Every reply is monitored so a stop request is respected immediately, on every channel.',
      'pc.check2.title': 'Consent-first outreach', 'pc.check2.body': 'Reactivation campaigns run against contacts who already opted in to hear from you.',
      'pc.check3.title': 'Full message logs', 'pc.check3.body': 'Every send, reply, and outcome is logged and available for review.',
      'pc.p2.footnote': 'Requirements vary by channel and region — we configure to yours.',

      'onboarding.eyebrow': 'Onboarding', 'onboarding.title': 'Live in days, not months.',
      'onboarding.sub': "No migration, no long implementation. Here's what actually happens after you say yes.",
      'ob1.title': 'Connect', 'ob1.body': 'Link the CRM you already use, or import your database — no migration required.',
      'ob2.title': 'Configure', 'ob2.body': 'Your lifecycle stages get mapped, with messaging cadence, channels, and tone set.',
      'ob3.title': 'Launch', 'ob3.body': 'Instant follow-up and your first reactivation campaigns go live.',
      'ob4.title': 'Review', 'ob4.body': "You get a walkthrough of what's running, and where to watch results.",
      'ob5.title': 'Optimize', 'ob5.body': 'Your messaging, timing, and routing get tuned every month based on real replies.',

      'faq.eyebrow': 'FAQ', 'faq.title': 'Questions, answered.',
      'faq.q1': 'Do I need to switch CRMs?', 'faq.a1': "No. Asvelo connects to the CRM you already use. If you don't have one, we can set up a simple one for you.",
      'faq.q2': 'What does the free reactivation actually cost me?', 'faq.a2': 'Nothing upfront. You may cover message or API costs at higher volumes, and only move to a paid plan if the results are worth it.',
      'faq.q3': 'How fast do new leads get contacted?', 'faq.a3': 'Most get an instant call, text, or email — typically within minutes, any time of day.',
      'faq.q4': 'Will this replace my sales team?', 'faq.a4': 'No — it makes sure every lead and customer gets a next action, so your team spends time on conversations that are ready to close instead of chasing cold contacts.',
      'faq.q5': 'How is this different from a chatbot or an AI agency?', 'faq.a5': "You're not buying software or automations — you get a full customer revenue system, with an outcome we're accountable for: more booked appointments and recovered revenue.",
      'faq.q6': 'What if my database is small?', 'faq.a6': "You'll get the most out of this with real lead or customer volume already — a few hundred contacts or more. If you're below that, you'll hear it from us honestly.",
      'faq.q7': 'Is my customer data safe?', 'faq.a7': 'Yes. Data stays inside your CRM and is only used to run your campaigns — never sold or shared.',
      'faq.aside.title': 'Still have questions?',
      'faq.aside.body': "The fastest way to answer them: run your free reactivation and see the results on your own contacts — no commitment.",
      'faq.aside.cta': 'Start Free Reactivation',

      'diag.questionPrefix': 'Question', 'diag.questionJoin': 'of',
      'diag.q0': 'Do you have a CRM or a list of leads/customers?',
      'diag.q0.opt1': 'Yes, I use a CRM (GoHighLevel, HubSpot, etc.)',
      'diag.q0.opt2': "I have a list, but it's not a formal CRM (Excel, WhatsApp, paper)",
      'diag.q0.opt3': "No, I don't have anything organized yet",
      'diag.q1': 'How many leads or customers do you have in total?',
      'diag.q1.opt1': 'Under 300', 'diag.q1.opt2': '300 – 500', 'diag.q1.opt3': '500 – 2,000', 'diag.q1.opt4': '2,000+',
      'diag.q2': 'Where do those contacts come from?',
      'diag.q2.opt1': 'Real past customers or leads, from the last 2 years',
      'diag.q2.opt2': 'Real past customers or leads, but older',
      'diag.q2.opt3': 'A purchased or scraped list',
      'diag.q2.opt4': 'Not sure',
      'diag.q3': "What's your average ticket, or the value of a repeat customer?",
      'diag.q3.opt1': 'Under MXN 2,000', 'diag.q3.opt2': 'MXN 2,000 – 5,000', 'diag.q3.opt3': 'MXN 5,000+',
      'diag.q3.opt4': 'Low ticket, but they buy often (high LTV)',
      'diag.reveal.eyebrow': 'Your estimate',
      'diag.reveal.cta': 'Continue',
      'diag.reveal.perMonth': '/mo',
      'diag.reveal.qualified.headline': "Here's what you could have in recoverable revenue:",
      'diag.reveal.qualified.note': 'Conservative estimate — contacts × 3% conversion × average ticket. The same math we use to qualify pilots.',
      'diag.reveal.looseNote': "Since it's not in a formal CRM yet, we start by organizing your list before launching the campaign.",
      'diag.reveal.belowfloor.headline': "You're not quite at the pilot's minimum volume yet.",
      'diag.reveal.belowfloor.note': "We work best with 300+ real contacts. With fewer, we'll tell you honestly — but keep going so we can see what makes sense for you.",
      'diag.reveal.disqualified.headline': "This type of list doesn't work for the free pilot.",
      'diag.reveal.disqualified.note': "Reactivation campaigns run on contacts you already have a real relationship with — not purchased or scraped lists. Keep going and we'll tell you what does make sense.",
      'diag.reveal.nocrm.headline': "Without a contact list, there's nothing to reactivate yet.",
      'diag.reveal.nocrm.note': "The free pilot reactivates contacts you already have. If you don't have an organized list yet, we can help you build one first — keep going and we'll follow up with that option.",
      'diag.q4': "If we recover 10–15 appointments or sales in the next two weeks, do you have capacity to handle them?",
      'diag.q4.opt1': 'Yes, no problem', 'diag.q4.opt2': "Yes, with some adjustments", 'diag.q4.opt3': "No, we're at capacity right now",
      'diag.q5': 'Can someone respond to an interested contact within 10 minutes?',
      'diag.q5.opt1': 'Yes, always', 'diag.q5.opt2': 'Sometimes', 'diag.q5.opt3': "No, it takes us longer",
      'diag.q6': 'Where should we send your results?', 'diag.submit': 'See if I qualify',

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
      'diag.persona.prequalified.cta': 'Schedule my validation',

      'footer.trust': 'Data stays in your CRM · No contract on the free reactivation · Cancel anytime',
      'footer.copy': '© 2026 Asvelo. All rights reserved.',
      'footer.privacy': 'Privacy', 'footer.terms': 'Terms', 'footer.contact': 'Contact',

      'aria.toggleMenu': 'Toggle menu',
      'aria.prevStep': 'Previous step', 'aria.nextStep': 'Next step',

      marquee: ['LEAD', 'FOLLOW-UP', 'APPOINTMENT', 'SALE', 'REVIEW', 'REPEAT PURCHASE', 'REACTIVATION'],

      howSteps: [
        { log: ['Scanning CRM for stale contacts…', '214 dormant contacts found', 'Mapping lead-response gaps by stage', 'Missed-call rate flagged: above benchmark', 'Diagnostic report ready'] },
        { log: ['Reactivation sequence drafted', 'Sent to 214 dormant contacts', 'First replies coming in', 'Interested contacts flagged', 'Campaign summary compiled'] },
        { log: ['18 replies received', '6 conversations opened', '3 appointments booked', 'Recovered revenue estimated', 'Walkthrough scheduled with you'] },
        { log: ['New-lead follow-up connected', 'No-show recovery configured', 'Reactivation cadence scheduled', 'Review & referral flow enabled', 'System going live'] },
        { log: ['Response times reviewed', 'Message performance compared', 'Routing rules tuned', 'Report sent to you', 'Next cycle scheduled'] }
      ]
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

    var track = document.getElementById('marqueeTrack');
    if (track) {
      var words = dict[lang].marquee;
      var frag = '';
      for (var r = 0; r < 2; r++) {
        words.forEach(function (w) { frag += '<span>' + w + '</span><span>·</span>'; });
      }
      track.innerHTML = frag;
    }
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
