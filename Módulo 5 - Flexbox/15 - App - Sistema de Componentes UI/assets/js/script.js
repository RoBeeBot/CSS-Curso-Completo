// Ejemplo sencillo: si necesitás reordenar elementos con JS según pantalla,
// o añadir funcionalidad al nav, éste es un stub útil.

document.addEventListener("DOMContentLoaded", () => {
  // ejemplo: en mobile forzamos un order distinto (alternativa al uso de data-order)
  const mq = window.matchMedia("(max-width:900px)");
  function applyMobileOrder(e) {
    const items = document.querySelectorAll(".item-list__item");
    if (e.matches) {
      // mobile: invertir el orden visual (solo demo)
      items.forEach((it, i) => (it.style.order = items.length - i));
    } else {
      // desktop: usar el valor del atributo data-order
      items.forEach((it) => (it.style.order = it.dataset.order || 0));
    }
  }
  applyMobileOrder(mq);
  mq.addEventListener("change", applyMobileOrder);
});
