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
  const days = +dayInput.value;
  const month = +monthInput.value;
  const year = +yearInput.value;
  fetchTheDay(days, month, year);
});

function fetchTheDay(days, month, year) {
  if (validateTheGivenDate(days, month, year)) {
    dayFromDate(days, month, year);
  } else {
    alert(`Invalid Date. There are no ${days} days month ${month} in ${year}.`);
  }
}

function dayFromDate(days, month, year) {
  // take 2 last digits of the year
  // plus 25% of the last 2 digits in it
  // divide it by 7 and take its remainder : this is year code
  // if its leap year -1

  const yearCode = getYearCode(year);
}

function getYearCode(year) {
  const partialResult =
    last2DigitsOfYear(year) + find25Percent(last2DigitsOfYear(year));

  // if the sum is non zero
  if (partialResult) {
    // full result
    return (partialResult - subtract1IfLeapYear(year) + howMuchToAdd(year)) % 7;
  }
  // otherwise the answer will be zero
  return 0;
}

const monthCode = {
  january: 6,
  february: 2,
  march: 2,
  april: 5,
  may: 0,
  june: 3,
  july: 5,
  august: 1,
  september: 4,
  october: 6,
  november: 2,
  december: 4,
};

function subtract1IfLeapYear(year) {
  if (isLeapYear(year)) return 1;
  return 0;
}

function find25Percent(number) {
  return Math.floor((number / 100) * 25);
}

function last2DigitsOfYear(year) {
  return year % 100;
}

function howMuchToAdd(year) {
  const mappingArray = [0, 5, 3, 1];
  return mappingArray[Math.floor(year / 100) % 4]; // %4 is ensuring repeatation of cycle
}

function validateTheGivenDate(days, month, year) {
  return days <= howManyDaysInMonth(month, year);
}

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
