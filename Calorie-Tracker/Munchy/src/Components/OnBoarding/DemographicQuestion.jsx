import "../../Styling/DemographicQuestion.css";

const DemographicQuestion = ({ onNext, onBack }) => {
  return (
    <div className="wrapper2">
      <h2 className="demoText">
        Please select which sex we should use to calculate your calorie needs.
      </h2>
      <form>
        <label>
          <input type="radio" name="gender" value="male"></input>
          <span class="circle">Male</span>
        </label>
        <label>
          <input type="radio" name="gender" value="female"></input>
          <span class="circle">Female</span>
        </label>
      </form>
      <h2 className="demoText">When were you born?</h2>
      <form>
        <input placeholder="MM/DD/YYYY" class="demoInput"></input>
      </form>

      <div className="buttonWrapper">
        <button className="demoBack" onClick={onBack}>
          Back
        </button>
        <button className="demoNext" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DemographicQuestion;
