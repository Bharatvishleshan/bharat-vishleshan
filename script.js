function toggleMenu() {
  const nav = document.getElementById("navlinks");
  if (nav) nav.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("navlinks");
  if (!nav) return;

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });
});
