import { createContext } from "react";

export interface DobType {
  day: string;
  month: string;
  year: string;
}

export interface DobContextType {
  dob: DobType;
  setDob: React.Dispatch<React.SetStateAction<DobType>>;
}

export const DobContext = createContext<DobContextType>({
  dob: {
    day: "",
    month: "",
    year: "",
  },
  setDob: () => {},
});

export interface AgeContextType {
  age: DobType;
  setAge: React.Dispatch<React.SetStateAction<DobType>>;
}

export const AgeContext = createContext<AgeContextType>({
  age: {
    day: "",
    month: "",
    year: "",
  },
  setAge: () => {},
});

export interface ErrorType {
  dayError: string;
  monthError: string;
  yearError: string;
}

export interface ErrorContextType {
  errorMessages: ErrorType;
  setErrorMessages: React.Dispatch<React.SetStateAction<ErrorType>>;
}

export const ErrorContext = createContext<ErrorContextType>({
  errorMessages: {
    dayError: "",
    monthError: "",
    yearError: "",
  },
  setErrorMessages: () => {},
});
