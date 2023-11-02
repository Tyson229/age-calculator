import {
  ChangeEvent,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  useRef,
} from "react";

interface InputTypeProps {
  attributes: {
    name: string;
    id: string;
  };
  title: string;
  placeholder: string;
  value: string;
  handleInputChanged: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}

const Input = (props: InputTypeProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  if (props.errorMessage) {
    labelRef.current?.classList.add("error");
    inputRef.current?.classList.add("error__input");
  } else {
    labelRef.current?.classList.remove("error");
    inputRef.current?.classList.remove("error__input");
  }
  return (
    <div className="flexBox inputBox">
      <label
        ref={labelRef}
        className="inputBox__label"
        htmlFor={props.attributes.id}
      >
        {props.title}
      </label>
      <input
        ref={inputRef}
        type="number"
        placeholder={props.placeholder}
        onChange={props.handleInputChanged}
        value={props.value}
        {...props.attributes}
        className="inputBox__input"
      />
      <div className="errorMessage">{props.errorMessage}</div>
    </div>
  );
};

export default Input;
