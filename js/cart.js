/* =====================================================================
   LUXEVARO - Cart (localStorage) + cart page + WhatsApp order
   Requires: products.js (before this file) and main.js (after it).
   ===================================================================== */

/* ---------- Cart data layer ----------
   Only { id, qty } pairs are stored, so when you add real prices to
   products.js the cart automatically shows the updated prices. */
const Cart = (function () {
  const KEY = "luxevaro_cart_v1";
  const MAX_QTY = 99;
  let memory = []; // fallback if localStorage is blocked (e.g. private mode)

  /** Read the cart from storage and discard anything invalid. */
  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      const data = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(data)) return [];
      return data.filter(function (i) {
        return i && typeof i.id === "string" && Number.isInteger(i.qty) && i.qty > 0 && getProductById(i.id);
      });
    } catch (e) {
      return memory.slice();
    }
  }

  /** Save the cart and tell the page it changed. */
  function write(items) {
    memory = items.slice();
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) { /* storage unavailable */ }
    updateBadge();
    document.dispatchEvent(new CustomEvent("cart:change"));
  }

  /** Cart lines joined with their product data. */
  function lines() {
    return read().map(function (i) {
      return { product: getProductById(i.id), qty: i.qty };
    });
  }

  function add(id, qty) {
    if (!getProductById(id)) return;
    const items = read();
    const found = items.find(function (i) { return i.id === id; });
    if (found) found.qty = Math.min(MAX_QTY, found.qty + (qty || 1));
    else items.push({ id: id, qty: qty || 1 });
    write(items);
  }

  function setQty(id, qty) {
    if (qty <= 0) return remove(id);
    const items = read();
    const found = items.find(function (i) { return i.id === id; });
    if (found) { found.qty = Math.min(MAX_QTY, qty); write(items); }
  }

  function remove(id) {
    write(read().filter(function (i) { return i.id !== id; }));
  }

  function clear() { write([]); }

  function count() {
    return read().reduce(function (sum, i) { return sum + i.qty; }, 0);
  }

  function total() {
    return lines().reduce(function (sum, l) { return sum + (Number(l.product.price) || 0) * l.qty; }, 0);
  }

  /** Update every cart badge in the header. */
  function updateBadge() {
    const n = count();
    document.querySelectorAll(".cart-count").forEach(function (el) {
      el.textContent = n;
      el.hidden = n === 0;
    });
  }

  return { add: add, remove: remove, setQty: setQty, clear: clear, count: count, total: total, lines: lines, updateBadge: updateBadge };
})();

/* ---------- WhatsApp order message ---------- */

/** Build the plain-text order message (encoded later with encodeURIComponent). */
function buildOrderMessage(details) {
  const lines = Cart.lines();
  let msg = "*NEW ORDER REQUEST - " + STORE.name + "*\n\n";
  msg += "*Customer Details*\n";
  msg += "Name: " + details.name + "\n";
  msg += "Contact: " + details.phone + "\n";
  msg += "City: " + details.city + "\n";
  msg += "Address: " + details.address + "\n";
  msg += "Notes: " + (details.notes || "None") + "\n\n";
  msg += "*Order Items*\n";
  lines.forEach(function (l, idx) {
    const unit = formatPrice(l.product.price);
    const sub = formatPrice((Number(l.product.price) || 0) * l.qty);
    msg += (idx + 1) + ". " + l.product.name + " (" + l.product.brand + ")\n";
    msg += "   Qty: " + l.qty + " x " + unit + " = " + sub + "\n";
  });
  msg += "\n*Order Total: " + formatPrice(Cart.total()) + "*\n\n";
  msg += "*Payment Terms*\n" + STORE.paymentTerms + "\n\n";
  msg += "Note: " + STORE.confirmationNote;
  return msg;
}

/** Full wa.me link with the encoded message. */
function buildWhatsAppUrl(details) {
  return "https://wa.me/" + STORE.whatsappNumber + "?text=" + encodeURIComponent(buildOrderMessage(details));
}

/* ---------- Cart page UI ---------- */
function renderCartPage() {
  const root = document.getElementById("cart-root");
  if (!root) return; // not on cart.html

  const lines = Cart.lines();

  if (lines.length === 0) {
    root.innerHTML =
      '<div class="cart-empty">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>' +
      "<h2>Your cart is empty</h2><p>Discover our perfumes and watches and add your favourites.</p>" +
      '<div class="hero-cta" style="justify-content:center">' +
      '<a class="btn btn-gold" href="perfumes.html">Shop Perfumes</a>' +
      '<a class="btn btn-dark" href="watches.html">Shop Watches</a></div></div>';
    return;
  }

  const itemsHTML = lines.map(function (l) {
    const p = l.product;
    return (
      '<div class="cart-item" data-id="' + escapeHTML(p.id) + '">' +
      '<img src="' + escapeHTML(p.image) + '" alt="' + escapeHTML(p.name) + '" width="96" height="120">' +
      "<div>" +
      '<p class="product-brand">' + escapeHTML(p.brand) + "</p>" +
      "<h3>" + escapeHTML(p.name) + "</h3>" +
      '<p class="cart-meta">Unit price: ' + formatPrice(p.price) + "</p>" +
      "</div>" +
      '<div class="cart-side">' +
      '<div class="qty" role="group" aria-label="Quantity for ' + escapeHTML(p.name) + '">' +
      '<button type="button" data-action="dec" aria-label="Decrease quantity">&minus;</button>' +
      "<span>" + l.qty + "</span>" +
      '<button type="button" data-action="inc" aria-label="Increase quantity">+</button></div>' +
      '<strong class="price">' + formatPrice((Number(p.price) || 0) * l.qty) + "</strong>" +
      '<button type="button" class="remove-btn" data-action="remove">Remove</button>' +
      "</div></div>"
    );
  }).join("");

  root.innerHTML =
    '<div class="cart-layout">' +
    '<div><div class="cart-items">' + itemsHTML + "</div>" +
    '<div class="hero-cta mt-2"><a class="btn btn-dark" href="perfumes.html">Continue Shopping</a>' +
    '<button type="button" class="btn" id="clear-cart">Clear Cart</button></div></div>' +
    '<aside class="summary"><h3>Order Summary</h3>' +
    '<div class="summary-row"><span>Items (' + Cart.count() + ")</span><span>" + formatPrice(Cart.total()) + "</span></div>" +
    '<div class="summary-row"><span>Delivery</span><span>Confirmed on WhatsApp</span></div>' +
    '<div class="summary-row total"><span>Total</span><span>' + formatPrice(Cart.total()) + "</span></div>" +
    '<div class="terms-box"><p><strong>Payment terms:</strong> ' + escapeHTML(STORE.paymentTerms) + "</p>" +
    "<p>" + escapeHTML(STORE.confirmationNote) + "</p></div>" +
    '<button type="button" class="btn btn-gold" id="proceed-order">Proceed to Order</button>' +
    "</aside></div>";
}

/** Handle +, - and remove buttons (event delegation on the cart root). */
function bindCartActions() {
  const root = document.getElementById("cart-root");
  if (!root) return;

  root.addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;

    if (btn.id === "proceed-order") return openOrderModal();
    if (btn.id === "clear-cart") {
      if (window.confirm("Remove all items from your cart?")) Cart.clear();
      return;
    }

    const row = btn.closest(".cart-item");
    const action = btn.dataset.action;
    if (!row || !action) return;
    const id = row.dataset.id;
    const current = Cart.lines().find(function (l) { return l.product.id === id; });
    if (!current) return;

    if (action === "inc") Cart.setQty(id, current.qty + 1);
    if (action === "dec") Cart.setQty(id, current.qty - 1);
    if (action === "remove") { Cart.remove(id); showToast("Item removed from cart"); }
  });

  // Re-render whenever the cart changes (also when changed in another tab)
  document.addEventListener("cart:change", renderCartPage);
  window.addEventListener("storage", function (e) {
    if (e.key === "luxevaro_cart_v1") { Cart.updateBadge(); renderCartPage(); }
  });
}

/* ---------- Order modal + form ---------- */
let lastFocused = null;

function openOrderModal() {
  const modal = document.getElementById("order-modal");
  if (!modal || Cart.count() === 0) return;
  lastFocused = document.activeElement;
  resetOrderModal();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  const first = modal.querySelector("input");
  if (first) first.focus();
}

function closeOrderModal() {
  const modal = document.getElementById("order-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

/** Restore the form view (in case the redirect step was shown earlier). */
function resetOrderModal() {
  const form = document.getElementById("order-form");
  const done = document.getElementById("order-redirect");
  if (form) form.hidden = false;
  if (done) done.hidden = true;
}

/** Validate a single field; returns true when valid. */
function validateField(input) {
  const value = input.value.trim();
  let ok = true;
  if (input.name === "name") ok = value.length >= 3;
  if (input.name === "phone") ok = /^\+?[\d\s\-()]{9,18}$/.test(value);
  if (input.name === "city") ok = value.length >= 2;
  if (input.name === "address") ok = value.length >= 10;
  if (input.name === "agree") ok = input.checked;
  const wrap = input.closest(".field, .check");
  if (wrap) wrap.classList.toggle("invalid", !ok);
  return ok;
}

function bindOrderForm() {
  const modal = document.getElementById("order-modal");
  const form = document.getElementById("order-form");
  if (!modal || !form) return;

  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.closest("[data-close-modal]")) { e.preventDefault(); closeOrderModal(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("open")) closeOrderModal();
  });

  form.querySelectorAll("input, textarea").forEach(function (input) {
    input.addEventListener("blur", function () { if (input.name !== "notes") validateField(input); });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let allValid = true;
    form.querySelectorAll("input[name], textarea[name]").forEach(function (input) {
      if (input.name !== "notes" && !validateField(input)) allValid = false;
    });
    if (!allValid) { showToast("Please complete the highlighted fields"); return; }
    if (Cart.count() === 0) { closeOrderModal(); return; }

    const data = new FormData(form);
    const details = {
      name: String(data.get("name")).trim(),
      phone: String(data.get("phone")).trim(),
      city: String(data.get("city")).trim(),
      address: String(data.get("address")).trim(),
      notes: String(data.get("notes") || "").trim()
    };
    const url = buildWhatsAppUrl(details);

    // Show a short "redirecting" step with a manual link as a fallback
    form.hidden = true;
    const done = document.getElementById("order-redirect");
    done.hidden = false;
    document.getElementById("order-whatsapp-link").href = url;
    window.setTimeout(function () { window.location.href = url; }, 900);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  Cart.updateBadge();
  renderCartPage();
  bindCartActions();
  bindOrderForm();
});
