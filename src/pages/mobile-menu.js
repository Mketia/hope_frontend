document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".nav-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    // Optional: Change hamburger to X when active
    if (navLinks.classList.contains("active")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }
  });

  // Close menu when clicking on links (mobile)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.textContent = "☰";
    });
  });
});
