const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let sectionIndex = 0;

document.querySelectorAll(".controls ul li").forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    sectionIndex = index;
    slider.style.transform = "translateX(" + sectionIndex * -25 + "%)";
  });
});

rightArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  slider.style.transform = "translateX(" + sectionIndex * -25 + "%)";
});

leftArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  slider.style.transform = "translateX(" + sectionIndex * -25 + "%)";
});
