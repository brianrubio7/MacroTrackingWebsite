import "../../Styling/DemographicQuestion.css";
import react, { useState } from "react";

const DemographicQuestion = ({ onNext, onBack }) => {
  const [sex, setSex] = useState("");
  const [dob, setDateOfBirth] = useState("");

  const handleSexChange = (event) => {
    setSex(event.target.value);
    console.log("Sex selected: ", event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
    console.log("Date of birth: ", event.target.value);
  };

  const handleNextClick = () => {
    onNext({
      sex,
      dateOfBirth: dob,
    });
  };

  return (
    <div className="wrapper2">
      <h2 className="demoText">
        Please select which sex we should use to calculate your calorie needs.
      </h2>
      <form>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleSexChange}
          ></input>
          <span className="circle">Male</span>
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleSexChange}
          ></input>
          <span className="circle">Female</span>
        </label>
      </form>
      <h2 className="demoText">When were you born?</h2>
      <form>
        <input
          type="date"
          placeholder="MM/DD/YYYY"
          className="demoInput"
          value={dob}
          onChange={handleDateOfBirthChange}
        ></input>
      </form>

      <div className="buttonWrapper">
        <button className="demoBack" onClick={onBack}>
          Back
        </button>
        <button className="demoNext" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DemographicQuestion;
