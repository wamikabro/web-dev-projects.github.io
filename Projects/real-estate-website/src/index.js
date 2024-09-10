const hamburgerIcon = document.querySelector(".hamburger-icon");
const navItemsSection = document.querySelector(".nav-items-section");
hamburgerIcon.addEventListener("click", () => {
  navItemsSection.classList.toggle("nav-items-section-toggle");
});
