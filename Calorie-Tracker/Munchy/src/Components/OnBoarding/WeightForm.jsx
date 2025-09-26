import "../../Styling/WeightForm.css";

const WeightForm = ({ onNext, onBack }) => {
  return (
    <>
      <div className="wrapper4">
        <h2>How tall are you?</h2>
        <div className="heightInput">
          <input type="number" placeholder="Height(feet)"></input>
          <input type="number" placeholder="Inches(in)"></input>
        </div>
        <h2>What is your weight?</h2>
        <div className="weightInput">
          <input type="number" placeHolder="Weight (lbs)"></input>
        </div>
        <h2>What is your goal weight?</h2>
        <div className="goalWeightInput">
          <input type="number" placeHolder="Weight (lbs)"></input>
        </div>
        <div className="buttonWrapper2">
          <button onClick={onBack} className="weightBack">
            Back
          </button>
          <button onClick={onNext} className="weightNext">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default WeightForm;
