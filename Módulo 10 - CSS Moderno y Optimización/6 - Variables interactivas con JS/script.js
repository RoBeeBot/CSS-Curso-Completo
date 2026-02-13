const root = document.documentElement;
const primaryColorInput = document.getElementById("primaryColor");
const toggleThemeBtn = document.getElementById("toggle-theme");

// Cambiar color principal dinámicamente
primaryColorInput.addEventListener("input", (e) => {
  root.style.setProperty("--primary-color", e.target.value);
});

// Cambiar tema claro/oscuro usando variables CSS
let darkMode = false;
toggleThemeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    root.style.setProperty("--bg-color", "#111");
    root.style.setProperty("--text-color", "#fff");
  } else {
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--text-color", "#111");
  }
});
