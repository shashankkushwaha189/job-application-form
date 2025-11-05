// Dynamically load header and footer
document.addEventListener("DOMContentLoaded", async () => {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  const headerHTML = await fetch("../components/header.html").then(res => res.text());
  const footerHTML = await fetch("../components/footer.html").then(res => res.text());

  header.innerHTML = headerHTML;
  footer.innerHTML = footerHTML;

  // Dark mode toggle
  const toggle = document.getElementById("darkToggle");
  if (toggle) {
    const mode = localStorage.getItem("theme") || "light";
    document.body.classList.toggle("dark", mode === "dark");
    toggle.textContent = mode === "dark" ? "☀️" : "🌙";

    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const newMode = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      toggle.textContent = newMode === "dark" ? "☀️" : "🌙";
    });
  }
});
