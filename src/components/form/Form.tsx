import { FormEvent, useContext, useState } from "react";
import InputList from "../input/InputList";
import SubmitButton from "../submitButton/SubmitButton";
import {
  AgeContext,
  DobContext,
  DobType,
  ErrorContext,
  ErrorType,
} from "../../context/context";
import {
  areFieldsFilled,
  calculateAge,
  isDateValid,
  isDayValid,
  isMonthValid,
  isYearValid,
  updateErrorMessages,
} from "./utilities";

const Form = () => {
  const [dob, setDob] = useState<DobType>({ day: "", month: "", year: "" });
  const { day, month, year } = dob;
  const [errorMessages, setErrorMessages] = useState<ErrorType>({
    dayError: "",
    monthError: "",
    yearError: "",
  });
  const { age, setAge } = useContext(AgeContext);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errorMessage = "This field is required";
    const parsedDay = parseInt(day);
    const parsedMonth = parseInt(month);
    const parsedYear = parseInt(year);

    if (!areFieldsFilled(parsedDay, parsedMonth, parsedYear)) {
      updateErrorMessages(setErrorMessages, {
        dayError: errorMessage,
        monthError: errorMessage,
        yearError: errorMessage,
      });
      return;
    }

    const validDay = isDayValid(parsedDay);
    const validMonth = isMonthValid(parsedMonth);
    const validYear = isYearValid(parsedYear);
    updateErrorMessages(setErrorMessages, {
      dayError: validDay ? "Must be a valid day" : "",
    });

    updateErrorMessages(setErrorMessages, {
      monthError: validMonth ? "" : "Must be a valid month",
    });
    updateErrorMessages(setErrorMessages, {
      yearError: validYear ? "" : "Year must be in the past",
    });

    if (!validDay || !validMonth || !validYear) return;

    const validDate = isDateValid(parsedDay, parsedMonth, parsedYear);
    updateErrorMessages(setErrorMessages, {
      dayError: validDate ? "Must be a valid date" : "",
    });

    const { yearsDiff, monthsDiff, daysDiff } = calculateAge(
      parsedDay,
      parsedMonth,
      parsedYear
    );

    console.log(yearsDiff);
    setAge({
      ...age,
      year: yearsDiff.toString(),
      month: monthsDiff.toString(),
      day: daysDiff.toString(),
    });
  };

  return (
    <DobContext.Provider value={{ dob, setDob }}>
      <ErrorContext.Provider value={{ errorMessages, setErrorMessages }}>
        <form onSubmit={handleFormSubmit}>
          <InputList />
          <SubmitButton />
        </form>
      </ErrorContext.Provider>
    </DobContext.Provider>
  );
};

export default Form;
