(function () {
  'use strict';

  var STORAGE_KEY = 'asvelo-lang';

  var dict = {
    es: {
      'nav.features': 'Qué incluye', 'nav.cta': 'Ver si mi base califica',

      'hero.eyebrow': 'Reactivación de base de datos gratis',
      'hero.title': 'Gana <span class="accent">más con cada cliente</span>,<br>sin gastar más en<br>conseguir nuevos.',
      'hero.sub': 'Asvelo opera los seguimientos para convertir más leads, traer clientes de vuelta y generar reseñas y referidos.',
      'hero.cta.primary': 'Ver si mi base califica',
      'hero.microcopy': 'Reactivación gratuita para negocios con 300+ contactos.',

      'trustStrip.body': 'Segmentamos tu base de datos - lanzamos la campaña - reportamos las oportunidades recuperadas',

      'features.eyebrow': 'El sistema', 'features.imagePlaceholder': 'Captura de pantalla próximamente',
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
      'feature7.body': 'En cuanto confirmamos que un cliente quedó satisfecho, le pedimos que te refiera — la forma más barata de conseguir un cliente nuevo.',
      'feature8.title': 'Ve el ingreso que se recupera',
      'feature8.body': 'Cada mes y trimestre ves las citas, el ingreso y el pipeline recuperado por cada parte del sistema — para que el retorno sea visible, no una promesa.',

      'footer.trust': 'Tus datos se quedan en tu CRM · Sin contrato en la reactivación gratuita · Cancela cuando quieras',
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

      'trust.eyebrow': 'Antes de continuar',
      'trust.title': 'Esto es lo que necesitas para calificar',
      'trust.item1': '300+ contactos reales — clientes o leads, no listas compradas',
      'trust.item2': 'Un CRM, o al menos una lista organizada (Excel, WhatsApp, papel)',
      'trust.item3': 'Capacidad para atender 10–15 citas o ventas adicionales',
      'trust.item4': 'Alguien que pueda responder a un contacto interesado en minutos, no días',

      'faq.eyebrow': 'Preguntas frecuentes',
      'faq.title': 'Antes de que respondas el diagnóstico',
      'faq.q1': '¿Por qué es gratis?',
      'faq.a1': 'Corremos la primera campaña sin costo para demostrar que hay ingresos recuperables reales antes de pedirte que pagues por el sistema completo.',
      'faq.q2': '¿Qué necesito para calificar?',
      'faq.a2': 'Al menos 300 contactos reales — clientes o leads, no listas compradas — con datos de contacto válidos y la capacidad de atender las citas o ventas que recuperemos.',
      'faq.q3': '¿Cuánto tarda en verse el resultado?',
      'faq.a3': 'La campaña corre de 10 a 14 días sobre un segmento de tu base — verás respuestas, conversaciones y citas agendadas durante ese periodo.',

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

      'form.name': 'Nombre completo', 'form.business': 'Nombre del negocio', 'form.phone': 'Teléfono o correo',
      'form.privacy': 'Sin spam — solo tus resultados.',

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
      'nav.features': "What’s Included", 'nav.cta': 'See If My Database Qualifies',

      'hero.eyebrow': 'Free database reactivation',
      'hero.title': 'Earn <span class="accent">more from every customer</span>,<br>without spending more<br>to get new ones.',
      'hero.sub': 'Asvelo runs the follow-ups that convert more leads, bring back customers, and generate reviews and referrals.',
      'hero.cta.primary': 'See If My Database Qualifies',
      'hero.microcopy': 'Free reactivation for businesses with 300+ contacts.',

      'trustStrip.body': 'We segment your database - launch the campaign - report the opportunities recovered',

      'features.eyebrow': 'The system', 'features.imagePlaceholder': 'Screenshot coming soon',
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
      'feature7.body': "Once we confirm a customer is satisfied, we ask for a referral — the cheapest way you’ll ever acquire a new customer.",
      'feature8.title': "See the Revenue You’re Recovering",
      'feature8.body': 'Every month and quarter, you see the appointments, revenue, and pipeline recovered by each part of the system — so the return is visible, not a promise.',

      'footer.trust': 'Data stays in your CRM · No contract on the free reactivation · Cancel anytime',
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

      'trust.eyebrow': 'Before you continue',
      'trust.title': "Here's what you need to qualify",
      'trust.item1': '300+ real contacts — customers or leads, not purchased lists',
      'trust.item2': 'A CRM, or at least an organized list (Excel, WhatsApp, paper)',
      'trust.item3': 'Capacity to handle 10–15 extra appointments or sales',
      'trust.item4': 'Someone who can respond to an interested contact in minutes, not days',

      'faq.eyebrow': 'FAQ',
      'faq.title': 'Before you take the diagnostic',
      'faq.q1': 'Why is it free?',
      'faq.a1': "We run the first campaign at no cost to prove there's real recoverable revenue before asking you to pay for the full system.",
      'faq.q2': 'What do I need to qualify?',
      'faq.a2': 'At least 300 real contacts — customers or leads, not purchased lists — with valid contact info and the capacity to handle the appointments or sales we recover.',
      'faq.q3': 'How long until I see results?',
      'faq.a3': "The campaign runs for 10 to 14 days against a segment of your database — you'll see replies, conversations, and booked appointments during that window.",

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
      'diag.reveal.perMonth': '/mo',
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
