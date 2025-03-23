document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const animateBtn = document.getElementById("animate-btn");
  const animatedImg = document.getElementById("animated-img");

  // Load theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  // Toggle Dark Theme
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
  });

  // Animate Image on Button Click
  animateBtn.addEventListener("click", () => {
    animatedImg.style.transform = "rotate(360deg) scale(1.2)";
    setTimeout(
      () => (animatedImg.style.transform = "rotate(0deg) scale(1)"),
      1000
    );
  });
});
