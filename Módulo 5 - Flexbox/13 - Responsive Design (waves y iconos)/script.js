// Toggle basic accesible para el nav en mobile
const menuToggle = document.getElementById("menu-toggle");
const primaryNav = document.getElementById("primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    // optional: move focus into the nav on open for better a11y
    if (isOpen) {
      const firstLink = primaryNav.querySelector(".nav__link");
      if (firstLink) firstLink.focus();
    } else {
      menuToggle.focus();
    }
  });
}
