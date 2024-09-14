const hamburgerIcon = document.querySelector(".hamburger-icon");
const navItemsSection = document.querySelector(".nav-items-section");
const closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.add("hamburger-icon-hide");
  navItemsSection.classList.add("nav-items-section-toggle");
  closeIcon.classList.add("close-icon-show");
});

closeIcon.addEventListener("click", () => {
  hamburgerIcon.classList.remove("hamburger-icon-hide");
  navItemsSection.classList.remove("nav-items-section-toggle");
  closeIcon.classList.remove("close-icon-show");
});
