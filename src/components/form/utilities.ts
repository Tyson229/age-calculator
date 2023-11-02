import { ErrorType } from "../../context/context";

const updateErrorMessages = (
  handler: React.Dispatch<React.SetStateAction<ErrorType>>,
  updates: Object
) => {
  handler((prev) => (prev = { ...prev, ...updates }));
};

const areFieldsFilled = (day: number, month: number, year: number) =>
  day && month && year;

const isYearValid = (year: number) => {
  const currentYear = new Date().getFullYear();
  const validYear = year <= currentYear && year >= 1900;
  return validYear;
};

const isMonthValid = (month: number) => {
  const validMonth = month >= 1 && month <= 12;
  return validMonth;
};

const isDayValid = (day: number) => {
  const validDay = day >= 1 && day <= 31;
  return validDay;
};

const isDateValid = (day: number, month: number, year: number) => {
  return (
    (day > 31 && [1, 3, 5, 7, 8, 10, 12].includes(month)) ||
    (day > 30 && [4, 6, 9, 11].includes(month)) ||
    (day > 29 && year % 4 === 0 && month === 2) ||
    (day > 28 && year % 4 !== 0 && month === 2)
  );
};

const calculateAge = (day: number, month: number, year: number) => {
  const inputDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  let yearsDiff = currentDate.getFullYear() - inputDate.getFullYear();
  let monthsDiff = currentDate.getMonth() - inputDate.getMonth();
  let daysDiff = currentDate.getDate() - inputDate.getDate();
  if (daysDiff < 0) {
    var lastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      0
    );
    daysDiff += lastMonth.getDate();
    monthsDiff--;
  }
  if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff += 12;
  }

  return { yearsDiff, monthsDiff, daysDiff };
};

export {
  updateErrorMessages,
  areFieldsFilled,
  isYearValid,
  isMonthValid,
  isDayValid,
  isDateValid,
  calculateAge
};
