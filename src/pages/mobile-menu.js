document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".nav-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    // Initialize hamburger icon
    menuBtn.innerHTML = "☰";

    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navLinks.classList.toggle("active");

      // Toggle between hamburger and close icon
      if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
      } else {
        menuBtn.innerHTML = "☰";
      }
    });

    // Close menu when clicking on links
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navLinks.contains(e.target) && e.target !== menuBtn) {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";
      }
    });
  } else {
    console.error("Navigation elements not found!");
  }
});
