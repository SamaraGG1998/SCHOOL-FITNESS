/**
 * SCHOOL FITNESS - By Maggie Zarate
 * Script interactivo: Navegación, Carrito, Calendario, Galería, Blog, Contacto y Modal.
 * Todo el contenido está centralizado aquí para facilitar su edición manual.
 */

// =============================================================================
// CONFIGURACIÓN EDITABLE (Sin base de datos)
// =============================================================================

// Correo donde se recibirán los mensajes de contacto
const CONTACT_EMAIL = "hola@schoolfitness.com";

// Curso destacado para la ventana emergente (modal al cargar la página)
const PROMO_COURSE = {
  id: 2,
  badge: "⚡ Próximo Inicio",
  title: "Formación de Instructor Reformer",
  date: "15 de Mayo, 2025",
  modalidad: "Híbrido · 16 semanas (Online + Mentorías)",
  description: "Últimos 3 cupos disponibles con precio especial de preventa y kit digital incluido.",
  image: "images/CURSO2.JPG",
};

// Catálogo de Cursos para el Carrito y Modal de Temario
const COURSES = {
  1: {
    id: 1,
    title: "Certificación en Pilates Mat",
    level: "Fundamentos",
    format: "12 semanas · En línea",
    price: 695,
    image: "images/CURSO1.JPG",
    summary: "Construye bases sólidas para enseñar anatomía, indicaciones verbales, programación y el repertorio clásico completo de Mat.",
    syllabus: [
      "Módulo 1 · Principios del método Pilates y anatomía aplicada",
      "Módulo 2 · Respiración tridimensional, centro y alineación postural",
      "Módulo 3 · Repertorio clásico completo de Mat (básico a avanzado)",
      "Módulo 4 · Progresiones, adaptaciones y uso de implementos",
      "Módulo 5 · Pedagogía, cueing verbal y estructura de una clase real",
      "Módulo 6 · Práctica docente supervisada y evaluación final",
    ],
    highlights: ["Aval SEP - CONOCER", "Manual completo incluido", "Evaluación práctica"],
  },
  2: {
    id: 2,
    title: "Formación de Instructor Reformer",
    level: "Profesional",
    format: "16 semanas · Híbrido",
    price: 1295,
    image: "images/CURSO2.JPG",
    summary: "Domina una enseñanza segura e inteligente de Reformer con práctica guiada, mentorías en vivo y horas de clase supervisadas.",
    syllabus: [
      "Módulo 1 · Biomecánica del carro, resortes y seguridad en Reformer",
      "Módulo 2 · Repertorio fundamental e intermedio sobre máquina",
      "Módulo 3 · Transiciones fluidas y correcciones táctiles/verbales",
      "Módulo 4 · Adaptación para distintas morfologías y lesiones comunes",
      "Módulo 5 · Diseño de clases grupales y sesiones privadas",
      "Módulo 6 · Mentorías en vivo y prácticas supervisadas con Maggie Zarate",
    ],
    highlights: ["Aval SEP - CONOCER", "Mentorías en vivo", "Prácticas supervisadas"],
  },
  3: {
    id: 3,
    title: "Pilates Pre y Postnatal",
    level: "Especialización",
    format: "6 semanas · En línea",
    price: 449,
    image: "images/CURSO3.JPG",
    summary: "Acompaña cada etapa de la maternidad con movimiento basado en evidencia, adaptaciones conscientes y plena confianza.",
    syllabus: [
      "Módulo 1 · Cambios anatómicos, hormonales y posturales en el embarazo",
      "Módulo 2 · Trabajo seguro de suelo pélvico y faja abdominal",
      "Módulo 3 · Programación por trimestres y contraindicaciones clave",
      "Módulo 4 · Recuperación postnatal y manejo de diástasis abdominal",
      "Módulo 5 · Diseño de secuencias adaptadas y casos prácticos",
    ],
    highlights: ["Especialización enfocada", "Protocolos por trimestre", "Aval SEP - CONOCER"],
  },
  4: {
    id: 4,
    title: "Certificación en Barre School·Fitness",
    level: "Curso intensivo",
    format: "Teórico-Práctico",
    price: 695,
    image: "images/FOTO10.JPG",
    summary: "Experiencia teórico-práctica intensiva para dominar el entrenamiento, diseñar secuencias musicales e impartir clases de Barre de forma efectiva, creativa y segura.",
    syllabus: [
      "Módulo 1 · Fundamentos técnicos del Barre y técnica postural",
      "Módulo 2 · Biomecánica de barra, centro y trabajo muscular isométrico",
      "Módulo 3 · Musicalidad, conteo rítmico y fluidez en transiciones",
      "Módulo 4 · Diseño creativo de clases y uso de accesorios (ligas, mancuernas, pelota)",
      "Módulo 5 · Prevención de lesiones y adaptaciones multinivel",
      "Módulo 6 · Laboratorio práctico: dirige tu propia clase frente a grupo",
    ],
    highlights: ["Abierto a público general e instructoras", "Aval SEP - CONOCER", "Práctica real guiada"],
  },
  5: {
    id: 5,
    title: "Certificación en Cadillac, Chair & Barrel",
    level: "Avanzado",
    format: "10 semanas · Híbrido",
    price: 995,
    image: "images/CURSO2.JPG",
    summary: "Completa tu dominio integral de aparatos de estudio con progresiones seguras en Cadillac, Wunda Chair, Corrector Espinal y Ladder Barrel.",
    syllabus: [
      "Módulo 1 · Mecánica de resortes y asistencia en Cadillac",
      "Módulo 2 · Trabajo de fuerza, estabilidad y equilibrio en Chair",
      "Módulo 3 · Movilidad de columna en Ladder Barrel y Corrector Espinal",
      "Módulo 4 · Integración de circuito completo en estudio",
      "Módulo 5 · Prácticas supervisadas y evaluación técnica",
    ],
    highlights: ["Aval SEP - CONOCER", "Aparatos de estudio", "Práctica presencial"],
  },
  7: {
    id: 7,
    title: "Acondicionamiento para Adultos Mayores",
    level: "Especialización",
    format: "6 semanas · En línea",
    price: 429,
    image: "images/CURSO1.JPG",
    summary: "Diseña sesiones seguras enfocadas en movilidad articular, equilibrio, prevención de caídas y vitalidad funcional para adultos mayores.",
    syllabus: [
      "Módulo 1 · Cambios fisiológicos en el envejecimiento activo",
      "Módulo 2 · Adaptaciones seguras en Mat y silla",
      "Módulo 3 · Entrenamiento de equilibrio, fuerza funcional y marcha",
      "Módulo 4 · Primeros auxilios fitness y protocolos preventivos",
    ],
    highlights: ["Salud funcional", "Adaptación multinivel", "Aval SEP - CONOCER"],
  },
};

// Catálogo de Fotos de la Galería (Todas con el mismo tamaño en visualización)
const GALLERY_PHOTOS = [
  {
    id: 1,
    image: "images/IMG1.jpg",
    title: "Alineación y fluidez en el carro",
    caption: "Práctica guiada en Reformer con alineación consciente y respiración tridimensional.",
    category: "reformer",
    categoryLabel: "Reformer",
  },
  {
    id: 2,
    image: "images/FOTO16.jpg",
    title: "Aprender en tribu y crecer juntas",
    caption: "Comunidad de alumnas compartiendo reflexiones y correcciones tras la clase de estudio.",
    category: "studio",
    categoryLabel: "Comunidad",
  },
  {
    id: 3,
    image: "images/FOTO11.jpg",
    title: "Control del centro y respiración",
    caption: "Fundamentos y progresiones pedagógicas del repertorio clásico completo de Mat.",
    category: "mat",
    categoryLabel: "Mat",
  },
  {
    id: 4,
    image: "images/FOTO4.jpg",
    title: "Dominio de la máquina y seguridad",
    caption: "Ajuste de resortes, transiciones suaves y pedagogía de enseñanza en Reformer.",
    category: "reformer",
    categoryLabel: "Reformer",
  },
  {
    id: 5,
    image: "images/FOTO12.jpg",
    title: "Atención personal para cada instructora",
    caption: "Maggie Zarate guiando una sesión de mentoría individual con retroalimentación precisa.",
    category: "studio",
    categoryLabel: "Mentoría",
  },
  {
    id: 6,
    image: "images/FOTO3.jpg",
    title: "Espacios pensados para el bienestar",
    caption: "Estudio equipado con luz natural y materiales de primera calidad para moverte segura.",
    category: "studio",
    categoryLabel: "Estudio",
  },
  {
    id: 7,
    image: "images/FOTO6.jpg",
    title: "Acompañamiento consciente de la maternidad",
    caption: "Adaptaciones seguras y biomecánica especializada para etapas pre y postnatales.",
    category: "mat",
    categoryLabel: "Pre & Postnatal",
  },
  {
    id: 8,
    image: "images/FOTO14.jpg",
    title: "Enseñar desde el corazón y con ciencia",
    caption: "Nuestra fundadora en el estudio combinando rigor anatómico con calidez humana.",
    category: "studio",
    categoryLabel: "Vocación",
  },
  {
    id: 9,
    image: "images/FOTO10.jpg",
    title: "Fuerza, equilibrio y extensión",
    caption: "Trabajo de estabilidad lumbo-pélvica y movilidad de columna en plano sagital.",
    category: "mat",
    categoryLabel: "Movimiento",
  },
];

// Artículos del Blog para lectura completa en ventana modal
const BLOG_ARTICLES = {
  1: {
    title: "5 claves para indicaciones verbales (cueing) claras y seguras",
    category: "Metodología",
    date: "28 de Abril, 2025",
    readTime: "4 min de lectura",
    excerpt: "La diferencia entre una clase promedio y una inolvidable radica en cómo verbalizas el movimiento. Aprende a guiar sin sobrecargar de información.",
    content: `
      <p>Uno de los mayores retos que enfrentan las instructoras recién graduadas no es recordar el orden de los ejercicios, sino encontrar las palabras exactas para que el alumno entienda el movimiento sin detener su ritmo respiratorio.</p>
      <h3>1. Menos es más: una indicación a la vez</h3>
      <p>Cuando un alumno está temblando en un ejercicio de abdomen o estabilizando una barra de reformer, su capacidad de procesar frases largas disminuye. Utiliza comandos de máximo cuatro palabras: <em>"Baja hombros, alarga coronilla"</em> funciona mucho mejor que una explicación biomecánica de tres minutos.</p>
      <blockquote>“Las mejores indicaciones no describen la anatomía; despiertan la sensación interna del cuerpo.”</blockquote>
      <h3>2. Emplea imágenes sensoriales</h3>
      <p>Decir 'activa el transverso abdominal' puede ser confuso para una alumna primeriza. En su lugar, sugiere: <em>'Imagina que abrochas un corsé suavemente de abajo hacia arriba'</em> o <em>'siente que creces dos centímetros hacia el techo'</em>.</p>
      <h3>3. Dirige la mirada para alinear la columna</h3>
      <p>La columna sigue hacia donde miran los ojos. Ajustando la mirada de tu alumna con una instrucción simple como <em>'mira hacia tus rodillas'</em> o <em>'fija tu vista en la diagonal alta'</em>, corregirás el cuello sin necesidad de tocarla.</p>
    `,
  },
  2: {
    title: "Pilates en el embarazo: adaptaciones conscientes para cada trimestre",
    category: "Especialización",
    date: "14 de Abril, 2025",
    readTime: "5 min de lectura",
    excerpt: "El movimiento durante la gestación debe generar espacio, estabilidad pélvica y confianza corporal. Estas son las claves esenciales.",
    content: `
      <p>El Pilates es una de las disciplinas más recomendadas durante el embarazo gracias a su énfasis en el control postural, la respiración tridimensional y el fortalecimiento consciente del suelo pélvico.</p>
      <h3>El papel de la relaxina y la estabilidad articular</h3>
      <p>Durante la gestación, la hormona relaxina aumenta la elasticidad de los ligamentos. Nuestro rol como instructoras no es buscar mayor flexibilidad, sino aportar <strong>estabilidad y soporte</strong> en rangos articulares seguros.</p>
      <blockquote>“No entrenamos para exigir al cuerpo de la madre, sino para acompañar su transformación con ternura y fuerza.”</blockquote>
      <h3>Puntos clave por trimestre:</h3>
      <p><strong>Primer trimestre:</strong> Énfasis en la conexión respiratoria diafragmática y control de la fatiga.</p>
      <p><strong>Segundo trimestre:</strong> Evitar la posición supina prolongada para no comprometer el retorno venoso; incorporar planos inclinados y trabajo en cuadrupedia.</p>
      <p><strong>Tercer trimestre:</strong> Movilidad de caderas, apertura torácica y preparación del suelo pélvico para el parto mediante la relajación consciente.</p>
    `,
  },
  3: {
    title: "De alumna apasionada a instructora: lo que nadie te dice al emprender",
    category: "Negocio & Vocación",
    date: "02 de Abril, 2025",
    readTime: "6 min de lectura",
    excerpt: "Construir una agenda llena de alumnos fieles requiere técnica rigurosa, pero también visión de negocio y autenticidad humana.",
    content: `
      <p>Muchas alumnas dan el salto hacia la docencia impulsadas por el amor al Pilates, pero se sienten desorientadas al momento de fijar precios, promocionarse o fidelizar clientes.</p>
      <h3>1. Tu voz es tu mayor ventaja competitiva</h3>
      <p>No intentes imitar a tu mentora ni a las instructoras de redes sociales. Las personas vuelven a tu clase por la atmósfera que creas, tu empatía y tu calidez al recibirles.</p>
      <h3>2. Aprende a comunicar el valor de tu hora</h3>
      <p>Una hora de clase no son solo 60 minutos de ejercicio: incluye tus horas de estudio, tu planificación individualizada y tu energía emocional. No compitas por precio; compite por calidad de acompañamiento.</p>
      <blockquote>“El éxito en el mundo del fitness consciente no se mide por cuántos seguidores tienes, sino por la profundidad del impacto en cada alumna que confía en ti.”</blockquote>
    `,
  },
};

// =============================================================================
// ESTADO DEL CARRITO (Con persistencia en localStorage)
// =============================================================================
let cart = {};
try {
  const savedCart = localStorage.getItem("sf_cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  cart = {};
}

function saveCart() {
  try {
    localStorage.setItem("sf_cart", JSON.stringify(cart));
  } catch (e) {}
}

// =============================================================================
// NAVEGACIÓN ENTRE PESTAÑAS (TABS)
// =============================================================================
function goTo(pageId) {
  const validPages = [
    "home",
    "courses",
    "calendar",
    "gallery",
    "testimonials",
    "blog",
    "about",
    "contact",
  ];
  const targetPage = validPages.includes(pageId) ? pageId : "home";

  // Actualizar hash en la barra de direcciones
  window.location.hash = `/${targetPage}`;

  // Ocultar todas las páginas y mostrar la activa
  document.querySelectorAll(".page-view").forEach((view) => {
    view.classList.remove("active");
  });
  const currentView = document.getElementById(`page-${targetPage}`);
  if (currentView) {
    currentView.classList.add("active");
  }

  // Actualizar estado 'active' en los botones de navegación
  const communityPages = ["gallery", "testimonials", "blog"];
  document.querySelectorAll(".site-header nav button[data-page]").forEach((btn) => {
    if (btn.getAttribute("data-page") === targetPage) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Resaltar 'Comunidad' si alguna subpágina está activa y cerrar dropdown
  const communityDropdown = document.getElementById("nav-comunidad");
  if (communityDropdown) {
    communityDropdown.classList.remove("open");
    const trigger = communityDropdown.querySelector(".nav-dropdown-trigger");
    if (trigger) {
      trigger.classList.toggle("active", communityPages.includes(targetPage));
      trigger.setAttribute("aria-expanded", "false");
    }
  }

  // Cerrar menú móvil si está abierto y actualizar aria-expanded
  const nav = document.getElementById("main-nav");
  if (nav) {
    nav.classList.remove("mobile-open");
  }
  const menuBtn = document.getElementById("menu-toggle-btn");
  if (menuBtn) {
    menuBtn.setAttribute("aria-expanded", "false");
  }

  // Scroll suave al inicio
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Escuchar cambios de hash en la URL
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace("#/", "").replace("#", "");
  goTo(hash || "home");
});

// Menú móvil con actualización de aria-expanded
function toggleMobileMenu() {
  const nav = document.getElementById("main-nav");
  const menuBtn = document.getElementById("menu-toggle-btn");
  if (nav) {
    const isOpen = nav.classList.toggle("mobile-open");
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
  }
}

// Dropdown de Comunidad
function toggleNavDropdown(triggerBtn) {
  const dropdown = triggerBtn ? triggerBtn.closest(".nav-dropdown") : null;
  if (!dropdown) return;
  const isOpen = dropdown.classList.toggle("open");
  triggerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

// Cerrar dropdown si se hace clic fuera
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("nav-comunidad");
  if (dropdown && !dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
    const trigger = dropdown.querySelector(".nav-dropdown-trigger");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  }
});

// =============================================================================
// ACCESIBILIDAD: GESTIÓN Y ATRAPADO DE FOCO (FOCUS TRAP PARA MODALES/DRAWER)
// =============================================================================
let activeDialogContainer = null;
let lastFocusedBeforeDialog = null;

function getFocusableElements(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => el.offsetParent !== null || getComputedStyle(el).position === "fixed");
}

function handleDialogTabKey(e) {
  if (e.key !== "Tab" || !activeDialogContainer) return;
  const focusables = getFocusableElements(activeDialogContainer);
  if (focusables.length === 0) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first || !activeDialogContainer.contains(document.activeElement)) {
      e.preventDefault();
      last.focus();
    }
  } else if (document.activeElement === last || !activeDialogContainer.contains(document.activeElement)) {
    e.preventDefault();
    first.focus();
  }
}

function activateDialogFocus(containerEl) {
  if (!containerEl) return;
  lastFocusedBeforeDialog = document.activeElement;
  activeDialogContainer = containerEl;
  document.addEventListener("keydown", handleDialogTabKey);

  requestAnimationFrame(() => {
    const focusables = getFocusableElements(containerEl);
    if (focusables.length > 0) {
      focusables[0].focus();
    }
  });
}

function releaseDialogFocus(targetContainer) {
  if (targetContainer && activeDialogContainer !== targetContainer) return;
  document.removeEventListener("keydown", handleDialogTabKey);
  activeDialogContainer = null;
  if (lastFocusedBeforeDialog && typeof lastFocusedBeforeDialog.focus === "function") {
    lastFocusedBeforeDialog.focus();
  }
  lastFocusedBeforeDialog = null;
}

// =============================================================================
// CARRITO DE COMPRAS
// =============================================================================
function openCart() {
  const overlay = document.getElementById("cart-overlay");
  const drawer = document.getElementById("cart-drawer");
  if (overlay) overlay.classList.add("show");
  if (drawer) {
    drawer.classList.add("open");
    activateDialogFocus(drawer);
  }
}

function closeCart() {
  const overlay = document.getElementById("cart-overlay");
  const drawer = document.getElementById("cart-drawer");
  if (overlay) overlay.classList.remove("show");
  if (drawer && drawer.classList.contains("open")) {
    drawer.classList.remove("open");
    releaseDialogFocus(drawer);
  }
}

function addToCart(courseId) {
  cart[courseId] = (cart[courseId] || 0) + 1;
  saveCart();
  renderCart();
  openCart();
}

function updateQuantity(courseId, delta) {
  if (cart[courseId]) {
    cart[courseId] += delta;
    if (cart[courseId] <= 0) {
      delete cart[courseId];
    }
    saveCart();
    renderCart();
  }
}

function renderCart() {
  const cartBody = document.getElementById("cart-body");
  const cartFooter = document.getElementById("cart-footer");
  const cartBadge = document.getElementById("cart-count-badge");

  const itemIds = Object.keys(cart).map(Number);
  const totalCount = itemIds.reduce((sum, id) => sum + (cart[id] || 0), 0);

  // Actualizar badge del carrito
  if (cartBadge) {
    if (totalCount > 0) {
      cartBadge.style.display = "grid";
      cartBadge.textContent = totalCount;
    } else {
      cartBadge.style.display = "none";
    }
  }

  if (itemIds.length === 0) {
    cartBody.innerHTML = `
      <div class="empty-cart">
        <span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 8h12l-1 12H7L6 8Z" />
            <path d="M9 9V6a3 3 0 0 1 6 0v3" />
          </svg>
        </span>
        <h3>Tu carrito está vacío.</h3>
        <p>Elige una certificación y comienza tu próximo capítulo.</p>
        <button class="btn btn-light" onclick="closeCart(); goTo('courses');">
          Ver certificaciones
        </button>
      </div>
    `;
    if (cartFooter) cartFooter.style.display = "none";
    return;
  }

  let subtotal = 0;
  let itemsHtml = "";

  itemIds.forEach((id) => {
    const course = COURSES[id];
    if (!course) return;
    const quantity = cart[id];
    subtotal += course.price * quantity;

    itemsHtml += `
      <div class="cart-item">
        <img src="${course.image}" alt="${course.title}" />
        <div>
          <span>${course.level}</span>
          <h3>${course.title}</h3>
          <strong>$${course.price.toLocaleString()}</strong>
          <div class="quantity">
            <button onclick="updateQuantity(${course.id}, -1)" aria-label="Disminuir un curso">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 12h12" /></svg>
            </button>
            <span>${quantity}</span>
            <button onclick="updateQuantity(${course.id}, 1)" aria-label="Aumentar un curso">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 6v12" /><path d="M6 12h12" /></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  cartBody.innerHTML = itemsHtml;

  if (cartFooter) {
    cartFooter.style.display = "block";
    cartFooter.innerHTML = `
      <div>
        <span>Subtotal</span>
        <strong>$${subtotal.toLocaleString()}</strong>
      </div>
      <p>Planes de pago disponibles al finalizar la compra.</p>
      <button class="btn btn-dark checkout-button" onclick="checkout()">
        Finalizar compra
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></svg>
      </button>
    `;
  }
}

function checkout() {
  alert("¡Tu pago seguro está listo! Puedes contactarnos directamente o coordinar tu transferencia en la sección de Contacto.");
}

// =============================================================================
// FILTROS DE CALENDARIO
// =============================================================================
function filterCalendar(category, btnElement) {
  if (btnElement) {
    const filterGroup = btnElement.parentElement;
    if (filterGroup) {
      filterGroup.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
    }
    btnElement.classList.add("active");
  }

  const cards = document.querySelectorAll(".calendar-card");
  cards.forEach((card) => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "grid";
    } else {
      card.style.display = "none";
    }
  });
}
// =============================================================================
// FILTROS DE CERTIFICACIONES
// =============================================================================
function filterCertifications(category, btnElement) {
  if (btnElement) {
    const filterGroup = btnElement.parentElement;
    if (filterGroup) {
      filterGroup.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
    }
    btnElement.classList.add("active");
  }

  const cards = document.querySelectorAll("#page-courses .course-card");
  cards.forEach((card) => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}
// =============================================================================
// FILTROS DE GALERÍA & VISOR INTERACTIVO CON FLECHAS
// =============================================================================
let currentGalleryIndex = 0;
let currentGalleryFilter = "all";
let touchStartX = 0;
let touchEndX = 0;

function getFilteredGallery() {
  if (currentGalleryFilter === "all") {
    return GALLERY_PHOTOS;
  }
  return GALLERY_PHOTOS.filter((item) => item.category === currentGalleryFilter);
}

function filterGallery(category, btnElement) {
  currentGalleryFilter = category;
  if (btnElement) {
    const filterGroup = btnElement.parentElement;
    if (filterGroup) {
      filterGroup.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
    }
    btnElement.classList.add("active");
  }

  const items = document.querySelectorAll(".gallery-item");
  items.forEach((item) => {
    const itemCat = item.getAttribute("data-category");
    if (category === "all" || itemCat === category) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  const countTag = document.getElementById("gallery-counter-tag");
  if (countTag) {
    const count = getFilteredGallery().length;
    countTag.textContent = `Mostrando ${count} fotografías`;
  }
}

function openGalleryPhoto(indexInFiltered) {
  const list = getFilteredGallery();
  if (list.length === 0) return;

  currentGalleryIndex = Math.max(0, Math.min(indexInFiltered, list.length - 1));
  updateGalleryLightbox();

  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    activateDialogFocus(modal);
  }
}

// Mantener compatibilidad hacia atrás
function openLightbox(imageSrc, caption) {
  const list = getFilteredGallery();
  const foundIdx = list.findIndex((item) => item.image === imageSrc);
  if (foundIdx !== -1) {
    openGalleryPhoto(foundIdx);
  } else {
    openGalleryPhoto(0);
  }
}

function updateGalleryLightbox() {
  const list = getFilteredGallery();
  if (list.length === 0) return;
  const item = list[currentGalleryIndex];

  const img = document.getElementById("lightbox-img");
  const counter = document.getElementById("lightbox-counter");
  const mobileCounter = document.getElementById("lightbox-mobile-counter");
  const cat = document.getElementById("lightbox-cat");
  const title = document.getElementById("lightbox-title");
  const cap = document.getElementById("lightbox-caption");

  if (img) {
    img.style.opacity = "0.3";
    setTimeout(() => {
      img.src = item.image;
      img.alt = item.title;
      img.style.opacity = "1";
    }, 120);
  }

  const counterText = `${currentGalleryIndex + 1} / ${list.length}`;
  if (counter) counter.textContent = counterText;
  if (mobileCounter) mobileCounter.textContent = counterText;
  if (cat) cat.textContent = item.categoryLabel;
  if (title) title.textContent = item.title;
  if (cap) cap.textContent = item.caption;
}

function nextGalleryPhoto(event) {
  if (event) event.stopPropagation();
  const list = getFilteredGallery();
  if (list.length === 0) return;

  currentGalleryIndex = (currentGalleryIndex + 1) % list.length;
  updateGalleryLightbox();
}

function prevGalleryPhoto(event) {
  if (event) event.stopPropagation();
  const list = getFilteredGallery();
  if (list.length === 0) return;

  currentGalleryIndex = (currentGalleryIndex - 1 + list.length) % list.length;
  updateGalleryLightbox();
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal && modal.classList.contains("open")) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    releaseDialogFocus(modal);
  }
}

// Control táctil para celulares (Deslizar con el dedo / Swipe)
function setupGalleryTouchGestures() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;

  modal.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  modal.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (diff < -45) {
        // Deslizar izquierda -> Siguiente
        nextGalleryPhoto();
      } else if (diff > 45) {
        // Deslizar derecha -> Anterior
        prevGalleryPhoto();
      }
    },
    { passive: true }
  );
}

// =============================================================================
// MODAL DE LECTURA DE ARTÍCULOS DE BLOG
// =============================================================================
function openArticleModal(articleId) {
  const article = BLOG_ARTICLES[articleId];
  if (!article) return;

  const modal = document.getElementById("article-modal");
  const catEl = document.getElementById("article-modal-cat");
  const titleEl = document.getElementById("article-modal-title");
  const metaEl = document.getElementById("article-modal-meta");
  const bodyEl = document.getElementById("article-modal-body");

  if (catEl) catEl.textContent = article.category;
  if (titleEl) titleEl.textContent = article.title;
  if (metaEl) metaEl.textContent = `${article.date} · ${article.readTime}`;
  if (bodyEl) bodyEl.innerHTML = article.content;

  if (modal) {
    modal.classList.add("open");
    activateDialogFocus(modal);
  }
}

function closeArticleModal() {
  const modal = document.getElementById("article-modal");
  if (modal && modal.classList.contains("open")) {
    modal.classList.remove("open");
    releaseDialogFocus(modal);
  }
}

// =============================================================================
// FORMULARIO DE CONTACTO
// =============================================================================
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("contact-name")?.value.trim() || "";
  const email = document.getElementById("contact-email")?.value.trim() || "";
  const phone = document.getElementById("contact-phone")?.value.trim() || "";
  const interest = document.getElementById("contact-interest")?.value || "Consulta General";
  const message = document.getElementById("contact-message")?.value.trim() || "";

  // Crear enlace mailto con datos codificados
  const subject = encodeURIComponent(`Nuevo contacto desde la web: ${interest} - ${name}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\n` +
    `Email: ${email}\n` +
    `Teléfono / WhatsApp: ${phone}\n` +
    `Interés: ${interest}\n\n` +
    `Mensaje:\n${message}\n`
  );

  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  // Mostrar alerta visual de éxito
  const alertBox = document.getElementById("contact-success-alert");
  if (alertBox) {
    alertBox.style.display = "block";
    alertBox.innerHTML = `
      <strong>¡Gracias, ${name}!</strong> Tu mensaje ha sido preparado. Si tu cliente de correo no se abrió automáticamente, 
      puedes escribirnos directamente a <a href="mailto:${CONTACT_EMAIL}" style="text-decoration: underline; font-weight: 600;">${CONTACT_EMAIL}</a>.
    `;
  }

  // Abrir cliente de correo
  window.location.href = mailtoLink;

  // Limpiar formulario tras unos segundos
  const form = document.getElementById("contact-form");
  if (form) form.reset();
}

// =============================================================================
// VENTANA EMERGENTE NO INTRUSIVA (MODAL DE PRÓXIMO CURSO)
// =============================================================================
function checkAndOpenPromoModal() {
  try {
    const isDismissed = sessionStorage.getItem("sf_promo_dismissed");
    if (isDismissed === "true") {
      return;
    }
  } catch (e) {}

  let triggered = false;
  const tryOpenPromo = () => {
    if (triggered) return;
    try {
      if (sessionStorage.getItem("sf_promo_dismissed") === "true") return;
    } catch (e) {}

    const homeActive = document.getElementById("page-home")?.classList.contains("active");
    const backdrop = document.getElementById("promo-modal-backdrop");
    const syllabusOpen = document.getElementById("syllabus-modal")?.classList.contains("open");
    const cartOpen = document.getElementById("cart-drawer")?.classList.contains("open");

    if (backdrop && homeActive && !syllabusOpen && !cartOpen && !activeDialogContainer) {
      triggered = true;
      backdrop.classList.add("active");
      activateDialogFocus(backdrop);
      window.removeEventListener("scroll", onScrollOpenPromo);
    }
  };

  // Esperar a que el usuario recorra el inicio (> 360px) o permanezca 12s
  const onScrollOpenPromo = () => {
    if (window.scrollY > 360) {
      tryOpenPromo();
    }
  };

  window.addEventListener("scroll", onScrollOpenPromo, { passive: true });
  setTimeout(tryOpenPromo, 12000);
}

function closePromoModal() {
  const backdrop = document.getElementById("promo-modal-backdrop");
  if (backdrop && backdrop.classList.contains("active")) {
    backdrop.classList.remove("active");
    releaseDialogFocus(backdrop);
  }
  try {
    sessionStorage.setItem("sf_promo_dismissed", "true");
  } catch (e) {}
}

function acceptPromoModal() {
  closePromoModal();
  openCourseSyllabus(PROMO_COURSE.id);
}

// =============================================================================
// MODAL DE TEMARIO DE CERTIFICACIONES (VER TEMARIO)
// =============================================================================
function openCourseSyllabus(courseId) {
  const course = COURSES[courseId];
  if (!course) return;

  const modal = document.getElementById("syllabus-modal");
  const levelEl = document.getElementById("syllabus-modal-level");
  const titleEl = document.getElementById("syllabus-modal-title");
  const metaEl = document.getElementById("syllabus-modal-meta");
  const summaryEl = document.getElementById("syllabus-modal-summary");
  const highlightsEl = document.getElementById("syllabus-modal-highlights");
  const listEl = document.getElementById("syllabus-modal-list");
  const addBtn = document.getElementById("syllabus-modal-add-btn");

  if (levelEl) levelEl.textContent = course.level;
  if (titleEl) titleEl.textContent = course.title;
  if (metaEl) metaEl.textContent = `${course.format} · $${course.price.toLocaleString()} (IVA incluido)`;
  if (summaryEl) summaryEl.textContent = course.summary || "";

  if (highlightsEl) {
    highlightsEl.innerHTML = (course.highlights || [])
      .map((item) => `<span>✦ ${item}</span>`)
      .join("");
  }

  if (listEl) {
    listEl.innerHTML = (course.syllabus || [])
      .map((mod) => `<li>${mod}</li>`)
      .join("");
  }

  if (addBtn) {
    addBtn.onclick = () => {
      closeCourseSyllabus();
      addToCart(course.id);
    };
  }

  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    activateDialogFocus(modal);
  }
}

function closeCourseSyllabus() {
  const modal = document.getElementById("syllabus-modal");
  if (modal && modal.classList.contains("open")) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    releaseDialogFocus(modal);
  }
}

// =============================================================================
// COPIAR CLABE INTERBANCARIA
// =============================================================================
function copyClabe(clabe, btnElement) {
  const showCopiedFeedback = () => {
    if (!btnElement) return;
    const originalText = btnElement.textContent;
    btnElement.textContent = "¡Copiada!";
    setTimeout(() => {
      btnElement.textContent = originalText;
    }, 2000);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(clabe).then(showCopiedFeedback).catch(() => {
      fallbackCopyText(clabe);
      showCopiedFeedback();
    });
  } else {
    fallbackCopyText(clabe);
    showCopiedFeedback();
  }
}

function fallbackCopyText(text) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  tempInput.setAttribute("readonly", "");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
  } catch (e) {}
  document.body.removeChild(tempInput);
}

// =============================================================================
// INICIALIZACIÓN GENERAL
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCart();

  const hash = window.location.hash.replace("#/", "").replace("#", "");
  goTo(hash || "home");

  checkAndOpenPromoModal();
  setupGalleryTouchGestures();

  document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox-modal");
    const isLightboxOpen = lightbox && lightbox.classList.contains("open");

    if (e.key === "Escape") {
      closePromoModal();
      closeLightbox();
      closeArticleModal();
      closeCourseSyllabus();
      closeCart();
    } else if (isLightboxOpen) {
      if (e.key === "ArrowRight") {
        nextGalleryPhoto();
      } else if (e.key === "ArrowLeft") {
        prevGalleryPhoto();
      }
    }
  });
});
