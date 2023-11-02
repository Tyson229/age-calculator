import "./style.scss";
const SubmitButton = () => {
  return (
    <div className="btn__container">
      <div className="line"></div>

      <button className="btn__submit" type="submit">
        <img src="./assets/images/icon-arrow.svg" alt="submit button" />
      </button>

      <div className="line hidden"></div>
    </div>
  );
};

export default SubmitButton;
