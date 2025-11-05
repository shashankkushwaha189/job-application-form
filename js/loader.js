document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("/components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(err => console.error("Header load failed:", err));

  // Load footer
  fetch("/components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Footer load failed:", err));
});
