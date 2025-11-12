document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById('intro');
  setTimeout(() => {
    intro.style.transition = "opacity 1s ease";
    intro.style.opacity = "0";
    setTimeout(() => intro.remove(), 1000);
  }, 3000);
});
