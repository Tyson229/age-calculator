import { useContext } from "react";
import AgeItem from "./AgeItem";
import { AgeContext } from "../../context/context";
import './style.scss'

const Age = () => {
  const { age } = useContext(AgeContext);
  const { day, month, year } = age;
  return (
    <ul className="age__container">
      <AgeItem number={parseInt(year)} measurement="years" />

      <AgeItem number={parseInt(month)} measurement="months" />

      <AgeItem number={parseInt(day)} measurement="days" />
    </ul>
  );
};

export default Age;
