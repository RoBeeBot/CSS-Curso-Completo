// Toggle para el menú móvil: actualiza aria-expanded por accesibilidad
const navToggle = document.getElementById("nav-toggle");
const primaryNav = document.getElementById("primary-nav");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
  navToggle.setAttribute("aria-expanded", !expanded);
  // Alterna visibilidad añadiendo/clavando clase
  primaryNav.style.display = expanded ? "none" : "block";
});
