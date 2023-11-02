import { ChangeEvent, useContext } from "react";
import Input from "./Input";
import { DobContext, ErrorContext } from "../../context/context";
import './style.scss'

const InputList = () => {
  const { dob, setDob } = useContext(DobContext);
  const { errorMessages } = useContext(ErrorContext);
  const { dayError, monthError, yearError } = errorMessages;

  const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setDob({ ...dob, [event.target.name]: event.target.value });
  };
  return (
    <section className="flexBox inputList">
      <Input
        attributes={{ id: "dayInput", name: "day" }}
        placeholder="DD"
        title="Day"
        value={dob.day}
        handleInputChanged={handleInputChanged}
        errorMessage={dayError}
      />

      <Input
        attributes={{ id: "monthInput", name: "month" }}
        placeholder="MM"
        title="Month"
        value={dob.month}
        handleInputChanged={handleInputChanged}
        errorMessage={monthError}
      />

      <Input
        attributes={{ id: "yearInput", name: "year" }}
        placeholder="YYYY"
        title="Year"
        value={dob.year}
        handleInputChanged={handleInputChanged}
        errorMessage={yearError}
      />
    </section>
  );
};

export default InputList;
