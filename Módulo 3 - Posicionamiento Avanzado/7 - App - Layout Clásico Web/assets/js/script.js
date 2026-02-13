// Toggle sidebar (móvil)
const navToggle = document.getElementById("nav-toggle");
const sidebar = document.querySelector(".sidebar");

navToggle?.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

// Overlay (z-index demo)
const openOverlay = document.getElementById("open-overlay");
const closeOverlay = document.getElementById("close-overlay");
const overlay = document.getElementById("demo-overlay");

openOverlay?.addEventListener("click", () => {
  overlay.setAttribute("aria-hidden", "false");
  // focus trap simple: llevar foco al panel
  overlay.querySelector(".overlay__panel")?.focus();
});

closeOverlay?.addEventListener("click", () => {
  overlay.setAttribute("aria-hidden", "true");
});

// Cerrar overlay con Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") overlay.setAttribute("aria-hidden", "true");
});
