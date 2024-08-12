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

submitButton.addEventListener("click", () => {
  fetchTheDay();
});

function fetchTheDay() {}

function howManyDaysInMonth(month, year) {
  if (isMonthFebruary(month)) {
    if (isLeapYear(year)) {
      return 29;
    }
    return 28;
  } else if (month % 2 == 0) {
    return 30;
  }
  return 31;
}

function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function isMonthFebruary(month) {
  return month == 2;
}

function isDayUnder29(value) {
  return value <= 29;
}

function isDayUnder28(value) {
  return value <= 28;
}

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
