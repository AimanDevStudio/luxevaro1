/* =====================================================================
   LUXEVARO - Main site script
   Builds the shared header/footer/WhatsApp icon, renders products,
   handles filters, navigation, animations and the contact form.
   Requires: products.js and cart.js (loaded before this file).
   ===================================================================== */

/* ---------- Small utilities ---------- */

/** Escape text before inserting it into HTML. */
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

/** Show a short message at the bottom of the screen. */
let toastTimer = null;
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
}

/** wa.me link for general enquiries (not orders). */
function whatsAppLink(text) {
  return "https://wa.me/" + STORE.whatsappNumber + (text ? "?text=" + encodeURIComponent(text) : "");
}

/** Name of the current page file, e.g. "perfumes.html". */
function currentPage() {
  const file = window.location.pathname.split("/").pop();
  return file || "index.html";
}

/* ---------- Shared layout: header, footer, WhatsApp icon ---------- */

const NAV_LINKS = [
  { label: "Home", href: "index.html", match: "index.html" },
  { label: "Perfumes", href: "perfumes.html", match: "perfumes.html" },
  { label: "Watches", href: "watches.html", match: "watches.html" },
  { label: "About Us", href: "index.html#about", match: "#about" },
  { label: "Contact", href: "index.html#contact", match: "#contact" }
];

const ICON_CART = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h14l-1.5 9H7.5z"/><path d="M6 7L5 3H2"/><circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/></svg>';
const ICON_WHATSAPP = '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.19 1.6 6.02L4 28l7.14-1.87a12 12 0 0 0 4.9 1.05h.01C22.68 27.18 28 21.78 28 15.14 28 8.5 22.68 3 16.04 3zm0 22.1h-.01a10 10 0 0 1-5.1-1.4l-.37-.22-4.24 1.11 1.13-4.13-.24-.38a10 10 0 0 1-1.54-5.3C5.67 9.4 10.2 5 16.04 5c5.5 0 9.96 4.5 9.96 10.04 0 5.55-4.46 10.06-9.96 10.06zm5.46-7.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>';
const ICON_LOGO = '<svg class="logo-mark" viewBox="0 0 32 32" fill="none" stroke="#c9a45c" stroke-width="1.8" aria-hidden="true"><path d="M16 3l11 13-11 13L5 16z"/><path d="M16 10v12"/></svg>';

function buildHeader() {
  const page = currentPage();
  const links = NAV_LINKS.map(function (l) {
    const active = l.match === page ? ' class="active"' : "";
    return '<li><a href="' + l.href + '"' + active + ' data-match="' + l.match + '">' + l.label + "</a></li>";
  }).join("");
  return (
    '<div class="container header-inner">' +
    '<a class="logo" href="index.html" aria-label="LUXEVARO home">' + ICON_LOGO + '<span class="logo-text">LUXE<span>VARO</span></span></a>' +
    '<nav class="main-nav" id="main-nav" aria-label="Main navigation"><ul>' + links + "</ul></nav>" +
    '<div class="header-actions">' +
    '<a class="cart-link" href="cart.html" aria-label="Shopping cart">' + ICON_CART + '<span class="cart-count" hidden>0</span></a>' +
    '<button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>' +
    "</div></div>"
  );
}

function buildFooter() {
  const perfumeBrands = BRANDS.filter(function (b) { return b.category === "perfume"; });
  const watchBrands = BRANDS.filter(function (b) { return b.category === "watch"; });
  const brandLinks = function (list, page) {
    return list.map(function (b) { return '<li><a href="' + page + "#" + b.slug + '">' + escapeHTML(b.name) + "</a></li>"; }).join("");
  };
  return (
    '<div class="container footer-grid">' +
    '<div><a class="logo" href="index.html">' + ICON_LOGO + '<span class="logo-text">LUXE<span>VARO</span></span></a>' +
    '<p style="margin-top:1rem">Premium perfumes and luxury watches, delivered with care and confirmed personally on WhatsApp.</p></div>' +
    "<div><h4>Perfumes</h4><ul>" + brandLinks(perfumeBrands, "perfumes.html") + "</ul></div>" +
    "<div><h4>Watches</h4><ul>" + brandLinks(watchBrands, "watches.html") + "</ul></div>" +
    "<div><h4>Contact</h4><ul>" +
    '<li><a href="' + whatsAppLink("Hello LUXEVARO!") + '" target="_blank" rel="noopener">WhatsApp: ' + STORE.whatsappDisplay + "</a></li>" +
    '<li><a href="index.html#contact">Send us a message</a></li>' +
    '<li><a href="cart.html">My Cart</a></li>' +
    '<li style="margin-top:1rem;font-size:.8rem">' + escapeHTML(STORE.paymentTerms) + "</li></ul></div></div>" +
    '<div class="footer-bottom"><div class="container">&copy; ' + new Date().getFullYear() + " LUXEVARO. All rights reserved. Prices shown as Rs. 00 are placeholders.</div></div>"
  );
}

/** Inject header, footer and floating WhatsApp icon on every page. */
function renderLayout() {
  const header = document.getElementById("site-header");
  if (header) { header.className = "site-header"; header.innerHTML = buildHeader(); }

  const footer = document.getElementById("site-footer");
  if (footer) { footer.className = "site-footer"; footer.innerHTML = buildFooter(); }

  if (!document.querySelector(".whatsapp-float")) {
    const a = document.createElement("a");
    a.className = "whatsapp-float";
    a.href = whatsAppLink("Hello LUXEVARO, I would like to enquire about your products.");
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Chat with LUXEVARO on WhatsApp");
    a.innerHTML = ICON_WHATSAPP;
    document.body.appendChild(a);
  }
  Cart.updateBadge();
}

/* ---------- Navigation behaviour ---------- */
function initNavigation() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");

  window.addEventListener("scroll", function () {
    if (header) header.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    });
  }

  // On the homepage, highlight About/Contact while their section is on screen
  if (currentPage() === "index.html" && "IntersectionObserver" in window) {
    const links = document.querySelectorAll(".main-nav a");
    const setActive = function (key) {
      links.forEach(function (a) { a.classList.toggle("active", a.dataset.match === key); });
    };
    setActive(window.location.hash === "#about" ? "#about" : window.location.hash === "#contact" ? "#contact" : "index.html");
    const spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) setActive(en.target.id === "about" ? "#about" : en.target.id === "contact" ? "#contact" : "index.html");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["home", "about", "contact"].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }
}

/* ---------- Product rendering ---------- */

/** HTML for one product card. */
function productCardHTML(p) {
  return (
    '<article class="product-card reveal">' +
    '<div class="product-media">' +
    '<img src="' + escapeHTML(p.image) + '" alt="' + escapeHTML(p.name) + '" loading="lazy" width="400" height="500">' +
    '<span class="product-tag">' + (p.category === "perfume" ? "Perfume" : "Watch") + "</span></div>" +
    '<div class="product-body">' +
    '<p class="product-brand">' + escapeHTML(p.brand) + "</p>" +
    "<h3>" + escapeHTML(p.name) + "</h3>" +
    '<p class="product-desc">' + escapeHTML(p.description) + "</p>" +
    '<div class="product-foot"><span class="price">' + formatPrice(p.price) + "</span>" +
    '<button type="button" class="btn btn-gold btn-sm" data-add="' + escapeHTML(p.id) + '">Add to Cart</button></div>' +
    "</div></article>"
  );
}

/** Featured products on the homepage. */
function renderFeatured() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  grid.innerHTML = FEATURED_IDS.map(getProductById).filter(Boolean).map(productCardHTML).join("");
}

/** Brand showcase tiles on the homepage. */
function renderBrandShowcase() {
  const root = document.getElementById("brand-showcase");
  if (!root) return;
  const groups = [
    { title: "Perfume Houses", category: "perfume", page: "perfumes.html" },
    { title: "Watchmakers", category: "watch", page: "watches.html" }
  ];
  root.innerHTML = groups.map(function (g) {
    const tiles = BRANDS.filter(function (b) { return b.category === g.category; }).map(function (b) {
      return '<a class="brand-tile reveal" href="' + g.page + "#" + b.slug + '"><span class="brand-name">' + escapeHTML(b.label) + "</span><small>5 products</small></a>";
    }).join("");
    return '<div class="brand-group"><h3>' + g.title + '</h3><div class="brand-row">' + tiles + "</div></div>";
  }).join("");
}

/** Full catalogue page (perfumes.html / watches.html), organised by brand. */
function renderCatalogue() {
  const root = document.getElementById("catalogue");
  if (!root) return;
  const category = root.dataset.category; // "perfume" or "watch"
  const brands = BRANDS.filter(function (b) { return b.category === category; });
  const chips = document.getElementById("brand-chips");

  chips.innerHTML =
    '<button type="button" class="chip active" data-brand="all">All Brands</button>' +
    brands.map(function (b) { return '<button type="button" class="chip" data-brand="' + b.slug + '">' + escapeHTML(b.label) + "</button>"; }).join("");

  root.innerHTML = brands.map(function (b) {
    const items = getProducts(category, b.slug);
    return (
      '<section class="brand-section" id="' + b.slug + '" data-brand="' + b.slug + '">' +
      '<div class="brand-title"><h2>' + escapeHTML(b.label) + "</h2><p>" + escapeHTML(b.blurb) + "</p></div>" +
      '<div class="product-grid">' + items.map(productCardHTML).join("") + "</div></section>"
    );
  }).join("");

  /** Show one brand (or all) and mark the matching chip. */
  function applyFilter(slug) {
    chips.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("active", c.dataset.brand === slug); });
    root.querySelectorAll(".brand-section").forEach(function (s) { s.hidden = slug !== "all" && s.dataset.brand !== slug; });
    observeReveals();
  }

  chips.addEventListener("click", function (e) {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    applyFilter(chip.dataset.brand);
    history.replaceState(null, "", chip.dataset.brand === "all" ? window.location.pathname : "#" + chip.dataset.brand);
    window.scrollTo({ top: root.offsetTop - 140, behavior: "smooth" });
  });

  // Open directly on a brand when the URL has a hash, e.g. perfumes.html#gucci
  const hash = window.location.hash.replace("#", "");
  applyFilter(brands.some(function (b) { return b.slug === hash; }) ? hash : "all");
  window.addEventListener("hashchange", function () {
    const h = window.location.hash.replace("#", "");
    if (brands.some(function (b) { return b.slug === h; })) applyFilter(h);
  });
}

/** One click handler for every "Add to Cart" button on the page. */
function initAddToCart() {
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-add]");
    if (!btn) return;
    const product = getProductById(btn.dataset.add);
    if (!product) return;
    Cart.add(product.id, 1);
    showToast(product.name + " added to cart");
    document.querySelectorAll(".cart-count").forEach(function (el) {
      el.classList.remove("bump");
      void el.offsetWidth; // restart animation
      el.classList.add("bump");
    });
    btn.textContent = "Added \u2713";
    setTimeout(function () { btn.textContent = "Add to Cart"; }, 1200);
  });
}

/* ---------- Image fallback + scroll animation ---------- */

/** If an image fails to load (e.g. a wrong path after you add photos), show the placeholder. */
function initImageFallback() {
  document.addEventListener("error", function (e) {
    const img = e.target;
    if (img.tagName === "IMG" && !img.dataset.fallback) {
      img.dataset.fallback = "1";
      img.src = "assets/images/placeholder.svg";
    }
  }, true);
}

let revealObserver = null;
function observeReveals() {
  const items = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) { items.forEach(function (el) { el.classList.add("visible"); }); return; }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); revealObserver.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
  }
  items.forEach(function (el) { revealObserver.observe(el); });
}

/* ---------- Homepage contact form (opens WhatsApp) ---------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const message = form.elements.message.value.trim();
    let ok = true;
    [[form.elements.name, name.length >= 2], [form.elements.message, message.length >= 5]].forEach(function (pair) {
      pair[0].closest(".field").classList.toggle("invalid", !pair[1]);
      if (!pair[1]) ok = false;
    });
    if (!ok) return;
    const text = "Hello LUXEVARO,\n\nName: " + name + (phone ? "\nContact: " + phone : "") + "\n\n" + message;
    window.open(whatsAppLink(text), "_blank", "noopener");
    form.reset();
    showToast("Opening WhatsApp...");
  });
}

/* ---------- Start ---------- */
document.documentElement.classList.remove("no-js");
document.addEventListener("DOMContentLoaded", function () {
  renderLayout();
  initNavigation();
  renderFeatured();
  renderBrandShowcase();
  renderCatalogue();
  initAddToCart();
  initImageFallback();
  initContactForm();
  observeReveals();
});
