const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParent = document.querySelector(".controls ul");

let sectionIndex = 0;

function setIndex(sectionIndex) {
  slider.style.transform = "translateX(" + sectionIndex * -25 + "%)";
  /* remove other selected indicators */
  document.querySelector(".controls .selected").classList.remove("selected");
}

document.querySelectorAll(".controls ul li").forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    sectionIndex = index;
    setIndex(sectionIndex);
    /* impliment new selected indicator */
    indicator.classList.add("selected");
  });
});

rightArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  setIndex(sectionIndex);
  indicatorParent.children[sectionIndex].classList.add("selected");
});

leftArrow.addEventListener("click", () => {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  setIndex(sectionIndex);
  indicatorParent.children[sectionIndex].classList.add("selected");
});
