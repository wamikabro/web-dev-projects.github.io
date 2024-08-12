const dayInput = document.querySelector("#day-input");
const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");
const submitButton = document.querySelector("#submit-button");

const result = document.querySelector(".result");
const dateContainer = document.querySelector("#date-container");
const dayContainer = document.querySelector("#day-container");

dayInput.addEventListener("input", () => {
  minAndMaxValueValidator(dayInput, "minAndmax");
});

yearInput.addEventListener("input", () => {
  minAndMaxValueValidator(yearInput, "min");
});

// Validate inputs before submission
function minAndMaxValueValidator(selector, checkValidationOf) {
  if (checkValidationOf == "min") {
    if (+selector.value < selector.min) {
      // using + operator to automatically parse a value to Integer,
      // and since one value is Integer, the second will be implicitly made Integer
      selector.value = selector.min;
    }
  } else if (checkValidationOf == "max") {
    if (+selector.value > selector.max) {
      selector.value = selector.max;
    }
  } else if (checkValidationOf == "minAndmax") {
    if (+selector.value < selector.min) {
      selector.value = selector.min;
    }
    if (+selector.value > selector.max) {
      selector.value = selector.max;
    }
  }
}
