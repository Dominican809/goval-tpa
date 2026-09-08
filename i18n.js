const SITE = "https://hectortorrese.github.io/goval-tpa/";

// TODO(goval): la copy EN fue adaptada del español para no romper el toggle.
// Revisar con el equipo antes de publicar y ajustar matices comerciales.

const meta = {
  es: {
    title: "Goval TPA | TPA de seguros de viaje para aseguradoras de Latinoamérica",
    description:
      "Goval TPA es el Third Party Administrator especializado en seguros de viaje para aseguradoras de Latinoamérica: reglas de negocio, red médica, reclamos, reembolsos y reportes en tiempo real bajo tu marca.",
    ogTitle: "Goval TPA | TPA de seguros de viaje para aseguradoras",
    ogDescription:
      "Diseñamos las reglas de negocio de tu producto de viaje y operamos toda la administración — red médica, reclamos, reembolsos y reportes — bajo tu marca.",
  },
  en: {
    title: "Goval TPA | Travel insurance TPA for Latin American insurers",
    description:
      "Goval TPA is the Third Party Administrator specialized in travel insurance for Latin American insurers: business rules, medical network, claims, reimbursements, and real-time reporting under your brand.",
    ogTitle: "Goval TPA | Travel insurance TPA for insurers",
    ogDescription:
      "We design your travel product's business rules and run the full administration — medical network, claims, reimbursements, and reporting — under your brand.",
  },
};

const dict = {
  es: {
    "nav.spec": "Especialización",
    "nav.services": "Qué operamos",
    "nav.process": "Cómo funciona",
    "nav.contact": "Contacto",
    "nav.cta": "Hablar con el equipo",
    "nav.ctaShort": "Contacto",
    "nav.menu": "Abrir menú",
    "nav.close": "Cerrar menú",

    "hero.eyebrow": "Third Party Administrator",
    "hero.title":
      "El TPA especializado en seguros de viaje para aseguradoras de Latinoamérica.",
    "hero.lede":
      "Diseñamos las reglas de negocio de tu producto y operamos toda la administración — red médica, reclamos, reembolsos y reportes — bajo tu marca.",
    "hero.cta1": "Hablar con el equipo",
    "hero.figureAlt":
      "Goval TPA como conector operativo y tecnológico entre la aseguradora y toda la operación del seguro de viaje: asistencia 24/7, red global de prestadores, gestión de siniestros, administración de pólizas, motor de reglas, APIs e integraciones, analítica y reportes, autorizaciones y pagos.",

    "stats.title": "Goval TPA en números",
    "stats.l1": "años de experiencia",
    "stats.l2": "países con cobertura",
    "stats.l3": "pasajeros asegurados",
    "stats.l4": "proveedores médicos aliados",

    "ops.title":
      "Conecta tu seguro de viaje a toda la infraestructura que necesita.",
    "ops.p":
      "Un solo conector. Todo el ecosistema — asistencia, red médica, reclamos, pólizas y reportes, bajo tu marca desde el primer día.",

    "diagram.connects": "Conecta con",
    "diagram.insurer": "Aseguradora",
    "diagram.insurerSub": "Producto de seguro de viaje",
    "diagram.hubSub": "Conector operativo y tecnológico",
    "diagram.n1": "Asistencia 24/7",
    "diagram.n2": "Red global de prestadores",
    "diagram.n3": "Gestión de siniestros",
    "diagram.n4": "Administración de pólizas",
    "diagram.n5": "Motor de reglas",
    "diagram.n6": "APIs e integraciones",
    "diagram.n7": "Analítica y reportes",
    "diagram.n8": "Autorizaciones y pagos",

    "spec.kicker": "¿Por qué Goval?",
    "spec.title": "Especialistas en seguros de viaje. Nada más.",
    "spec.p":
      "No somos un TPA generalista que también hace viaje. Es lo único que hacemos — lo que significa que entendemos las particularidades del ramo (redes médicas internacionales, coordinación con reaseguradoras, casos que no encajan en el manual) mejor que un proveedor que reparte su atención entre auto, salud, viaje y responsabilidad civil al mismo tiempo.",

    "services.title": "Qué operamos por ti",
    "services.s1.t": "Reglas de negocio",
    "services.s1.p":
      "Diseñamos la estructura del producto contigo, no con una plantilla genérica.",
    "services.s2.t": "Red médica",
    // Cifra alineada con #cifras (+400 proveedores / +175 países) — confirmar con Goval.
    "services.s2.p":
      "Más de 400 prestadores médicos en más de 175 países.",
    "services.s3.t": "Reclamos y reembolsos",
    // TODO(goval): SLA propuesto (estándar de industria) — confirmar cifra real.
    "services.s3.p": "Reembolsos procesados en 48 a 72 horas.",
    "services.s4.t": "Reportes en tiempo real",
    "services.s4.p":
      "Ves lo que pasa mientras pasa, no en un reporte mensual.",
    "services.s5.t": "Conectividad (e-SIM)",
    "services.s5.p":
      "Tu asegurado llega conectado, listo para contactarnos si lo necesita.",

    "phil.eyebrow": "Nuestra filosofía de servicio",
    "phil.title": "Antes de decir que no, buscamos cómo decir que sí.",
    "phil.kicker":
      "Si existe una solución lógica, la buscamos — no cerramos el caso con un no fácil.",
    "phil.p1":
      "Cada caso lo revisa un experto en seguros de viaje, no un script.",
    "phil.p2":
      "Cuando la situación no encaja exactamente en lo escrito, buscamos la solución que tenga sentido para el cliente y para la aseguradora, incluso si eso significa conectar coberturas adicionales o coordinar con otros responsables.",
    "phil.p3":
      "Un caso difícil no es una razón para decir que no. Es una razón para buscar mejor.",

    "impact.title": "Estamos ahí cuando más importa.",
    "impact.p":
      "Una emergencia médica en el extranjero no debería poner en riesgo la relación entre tu aseguradora y su cliente. Operamos para que ese momento se convierta en confianza, no en una queja.",
    "impact.cta": "Hablar con el equipo",
    "impact.s1.title":
      "Detectamos el problema antes de que el cliente lo reporte",
    "impact.s1.p":
      "Cuando algo sale mal — un vuelo cancelado, una hospitalización, un evento cubierto — no esperamos a que el asegurado llame. Actuamos primero.",
    "impact.s1.label": "Emergencia detectada",
    "impact.s1.text":
      "Hospitalización — Madrid, España — Caso abierto automáticamente",
    // TODO(goval): ventana propuesta (estándar de industria) — confirmar.
    "impact.s2.title":
      "Reembolsos resueltos en 48-72 horas, no semanas",
    "impact.s2.p":
      "Convertimos el peor momento del viaje en una experiencia que genera confianza en tu marca — con un tiempo de respuesta que puedes verificar, no solo prometer.",
    "impact.s2.label": "Reembolso procesado",
    // TODO(goval): ejemplo ilustrativo (monto y horas) — ajustar a un caso real típico.
    "impact.s2.text":
      "$1,920 — Tiempo de resolución: 54 horas",
    // TODO(goval): nº de idiomas propuesto — confirmar cobertura real.
    "impact.s3.title":
      "Soporte en 5 idiomas, sin transferencias ni esperas",
    "impact.s3.p":
      "Tu asegurado no tiene que explicar una emergencia en un idioma que no domina. Habla en el suyo, con alguien que entiende exactamente qué necesita.",
    "impact.s3.label": "Llamada en curso",
    // TODO(goval): tiempo de respuesta propuesto (estándar de industria) — confirmar.
    "impact.s3.text":
      "Idioma: Español — Agente asignado en 22 segundos",

    "process.title": "De la conversación al producto en vivo",
    "process.s1.t": "Conversación inicial",
    "process.s1.p": "Entendemos tu producto actual y tus necesidades.",
    "process.s2.t": "Diseño y configuración",
    "process.s2.p":
      "Ajustamos reglas de negocio, integraciones y reporting a tu operación.",
    "process.s3.t": "Lanzamiento",
    "process.s3.p":
      "Producto funcional en 1 semana desde el kickoff.",

    "contact.title": "Contacto TPA — Panamá",
    "contact.p": "¿Aseguradora, socio o viajero? Escríbanos o llámenos — le respondemos a la brevedad.",
    "contact.emailLabel": "Correo",
    "contact.phoneLabel": "Teléfono",
    "form.name": "Nombre",
    "form.email": "Correo",
    "form.phone": "Teléfono",
    "form.message": "Mensaje",
    "form.submit": "Enviar mensaje",
    "form.hint": "El mensaje llega al correo de Goval.",
    "form.sent": "Mensaje enviado. Gracias — le responderemos pronto.",
    "form.phonePlaceholder": "+507 6000-0000",
    "form.err.emailRequired": "Ingrese su correo electrónico.",
    "form.err.emailInvalid": "Ingrese un correo válido (ej. nombre@empresa.com).",
    "form.err.phoneRequired": "Ingrese su número de teléfono.",
    "form.err.phoneInvalid": "Ingrese un teléfono válido (mín. 7 dígitos; ej. +507 6000-0000).",
    "form.err.nameRequired": "Ingrese su nombre (mín. 2 caracteres).",
    "form.err.messageRequired": "Escriba un mensaje (mín. 10 caracteres).",

    "theme.toDark": "Activar modo oscuro",
    "theme.toLight": "Activar modo claro",
    "footer": "© Goval TPA · Panamá",
  },
  en: {
    "nav.spec": "Focus",
    "nav.services": "What we run",
    "nav.process": "How it works",
    "nav.contact": "Contact",
    "nav.cta": "Talk to the team",
    "nav.ctaShort": "Contact",
    "nav.menu": "Open menu",
    "nav.close": "Close menu",

    "hero.eyebrow": "Third Party Administrator",
    "hero.title":
      "The TPA specialized in travel insurance for Latin American insurers.",
    "hero.lede":
      "We design your product's business rules and run the entire administration — medical network, claims, reimbursements, and reporting — under your brand.",
    "hero.cta1": "Talk to the team",
    "hero.figureAlt":
      "Goval TPA as the operational and technological connector between the insurer and the entire travel insurance operation: 24/7 assistance, global provider network, claims management, policy administration, rules engine, APIs and integrations, analytics and reporting, authorizations and payments.",

    "stats.title": "Goval TPA by the numbers",
    "stats.l1": "years of experience",
    "stats.l2": "countries covered",
    "stats.l3": "passengers insured",
    "stats.l4": "partner medical providers",

    "ops.title":
      "Connect your travel insurance to all the infrastructure it needs.",
    "ops.p":
      "One connector. The whole ecosystem — assistance, medical network, claims, policies, and reporting, under your brand from day one.",

    "diagram.connects": "Connects to",
    "diagram.insurer": "Insurer",
    "diagram.insurerSub": "Travel insurance product",
    "diagram.hubSub": "Operational & technology connector",
    "diagram.n1": "24/7 assistance",
    "diagram.n2": "Global provider network",
    "diagram.n3": "Claims management",
    "diagram.n4": "Policy administration",
    "diagram.n5": "Rules engine",
    "diagram.n6": "APIs & integrations",
    "diagram.n7": "Analytics & reporting",
    "diagram.n8": "Authorizations & payments",

    "spec.kicker": "Why Goval?",
    "spec.title": "Travel insurance specialists. Nothing else.",
    "spec.p":
      "We're not a generalist TPA that also does travel. It's the only thing we do — which means we understand the specifics of the line (international medical networks, coordination with reinsurers, cases that don't fit the manual) better than a provider splitting its attention across auto, health, travel, and liability at the same time.",

    "services.title": "What we run for you",
    "services.s1.t": "Business rules",
    "services.s1.p":
      "We design the product structure with you, not from a generic template.",
    "services.s2.t": "Medical network",
    // Matches #cifras (+400 providers / +175 countries) — confirm with Goval.
    "services.s2.p":
      "Over 400 medical providers across more than 175 countries.",
    "services.s3.t": "Claims and reimbursements",
    // TODO(goval): proposed SLA (industry standard) — confirm the real figure.
    "services.s3.p": "Reimbursements processed in 48 to 72 hours.",
    "services.s4.t": "Real-time reporting",
    "services.s4.p":
      "You see what's happening as it happens, not in a monthly report.",
    "services.s5.t": "Connectivity (e-SIM)",
    "services.s5.p":
      "Your member arrives connected, ready to reach us if they need to.",

    "phil.eyebrow": "Our service philosophy",
    "phil.title": "Before we say no, we look for a way to say yes.",
    "phil.kicker":
      "If a logical solution exists, we find it — we don't close the case with an easy no.",
    "phil.p1":
      "Every case is reviewed by a travel insurance expert, not a script.",
    "phil.p2":
      "When the situation doesn't fit exactly what's written, we look for the solution that makes sense for the client and for the insurer — even if that means connecting additional coverage or coordinating with other responsible parties.",
    "phil.p3":
      "A hard case isn't a reason to say no. It's a reason to look harder.",

    "impact.title": "We're there when it matters most.",
    "impact.p":
      "A medical emergency abroad shouldn't put the relationship between your insurance company and its customer at risk. We operate so that moment becomes trust, not a complaint.",
    "impact.cta": "Talk to the team",
    "impact.s1.title": "We catch the problem before the customer reports it",
    "impact.s1.p":
      "When something goes wrong — a canceled flight, a hospitalization, a covered event — we don't wait for the member to call. We act first.",
    "impact.s1.label": "Emergency detected",
    "impact.s1.text":
      "Hospitalization — Madrid, Spain — Case opened automatically",
    // TODO(goval): proposed window (industry standard) — confirm.
    "impact.s2.title":
      "Reimbursements resolved in 48-72 hours, not weeks",
    "impact.s2.p":
      "We turn the worst moment of the trip into an experience that builds trust in your brand — with a response time you can verify, not just promise.",
    "impact.s2.label": "Reimbursement processed",
    // TODO(goval): illustrative example (amount and hours) — adjust to a typical real case.
    "impact.s2.text":
      "$1,920 — Resolution time: 54 hours",
    // TODO(goval): proposed language count — confirm real coverage.
    "impact.s3.title":
      "Support in 5 languages, no transfers or waits",
    "impact.s3.p":
      "Your member doesn't have to explain an emergency in a language they don't master. They speak in their own, with someone who understands exactly what they need.",
    "impact.s3.label": "Call in progress",
    // TODO(goval): proposed response time (industry standard) — confirm.
    "impact.s3.text":
      "Language: Spanish — Agent assigned in 22 seconds",

    "process.title": "From conversation to live product",
    "process.s1.t": "First conversation",
    "process.s1.p": "We understand your current product and your needs.",
    "process.s2.t": "Design and setup",
    "process.s2.p":
      "We tune business rules, integrations, and reporting to your operation.",
    "process.s3.t": "Launch",
    "process.s3.p":
      "A functional product one week from kickoff.",

    "contact.title": "Contact TPA — Panama",
    "contact.p": "Insurer, partner, or traveler? Write or call — we’ll respond promptly.",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "form.name": "Name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.message": "Message",
    "form.submit": "Send message",
    "form.hint": "Messages go to Goval’s inbox.",
    "form.sent": "Message sent. Thank you — we’ll reply soon.",
    "form.phonePlaceholder": "+507 6000-0000",
    "form.err.emailRequired": "Please enter your email address.",
    "form.err.emailInvalid": "Enter a valid email (e.g. name@company.com).",
    "form.err.phoneRequired": "Please enter your phone number.",
    "form.err.phoneInvalid": "Enter a valid phone (min. 7 digits; e.g. +507 6000-0000).",
    "form.err.nameRequired": "Please enter your name (min. 2 characters).",
    "form.err.messageRequired": "Please write a message (min. 10 characters).",

    "theme.toDark": "Switch to dark mode",
    "theme.toLight": "Switch to light mode",
    "footer": "© Goval TPA · Panama",
  },
};

window.dict = dict;

function setMeta(name, content, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function applyLang(lang, pushUrl = true) {
  const pack = dict[lang] || dict.es;
  const m = meta[lang] || meta.es;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (pack[key]) el.textContent = pack[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (pack[key]) el.setAttribute("aria-label", pack[key]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (pack[key]) el.setAttribute("alt", pack[key]);
  });
  document.title = m.title;
  setMeta("description", m.description);
  setMeta("og:title", m.ogTitle, "property");
  setMeta("og:description", m.ogDescription, "property");
  setMeta("og:locale", lang === "en" ? "en_US" : "es_PA", "property");
  setMeta("twitter:title", m.ogTitle);
  setMeta("twitter:description", m.ogDescription);
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  try {
    localStorage.setItem("goval-lang", lang);
  } catch (_) {}
  if (pushUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState({}, "", url);
  }
  syncThemeLabel();
  if (typeof window.refreshFormValidationCopy === "function") {
    window.refreshFormValidationCopy();
  }
  if (typeof window.redrawOpsDiagram === "function") {
    window.redrawOpsDiagram();
  }
}

document.querySelectorAll(".lang button").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

const params = new URLSearchParams(window.location.search);
const fromQuery = params.get("lang");
const saved = (() => {
  try {
    return localStorage.getItem("goval-lang");
  } catch (_) {
    return null;
  }
})();
const initial =
  fromQuery === "en" || fromQuery === "es"
    ? fromQuery
    : saved === "en" || saved === "es"
      ? saved
      : "es";
applyLang(initial, Boolean(fromQuery) || true);

if (new URLSearchParams(window.location.search).get("sent") === "1") {
  const banner = document.querySelector(".form-sent");
  if (banner) {
    banner.hidden = false;
    banner.classList.add("is-visible");
  }
}

function syncThemeLabel() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const lang = document.documentElement.lang === "en" ? "en" : "es";
  const pack = dict[lang] || dict.es;
  const dark = document.documentElement.getAttribute("data-theme") === "dark";
  const label = dark ? pack["theme.toLight"] : pack["theme.toDark"];
  btn.setAttribute("aria-label", label);
  btn.setAttribute("title", label);
}

document.getElementById("themeToggle")?.addEventListener("click", () => {
  const next =
    document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("goval-theme", next);
  } catch (_) {}
  syncThemeLabel();
});
syncThemeLabel();
