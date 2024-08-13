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
  const yearCode = getYearCode(year);
  const monthCode = getMonthCode(year, month);
}

function getMonthCode(year, month) {
  let monthCode = monthCodeObject[month];

  // corner case: if the year is leap and month is 1 or 2, then -1
  if (isLeapYear(year) && (month == 1 || month == 2)) {
    monthCode--;
  }

  return monthCode;
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

const monthCodeObject = {
  // Month: Value
  1: 6,
  2: 2,
  3: 2,
  4: 5,
  5: 0,
  6: 3,
  7: 5,
  8: 1,
  9: 4,
  10: 6,
  11: 2,
  12: 4,
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
