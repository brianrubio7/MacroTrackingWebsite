import "../../Styling/BaseLineActivity.css";

const BaseLineActivity = ({ onNext, onBack }) => {
  return (
    <div className="wrapper3">
      <h2>What is your baseline Activity?</h2>

      <input type="radio" id="sedentary" name="activity" value="1.2" hidden />
      <label htmlFor="sedentary" className="boxSelection">
        <h4> Not Very Active</h4>
        <p>Spend most of the day sitting(e.g., bank teller, desk job)</p>
      </label>
      <input type="radio" id="light" name="activity" value="1.375" hidden />
      <label htmlFor="light" className="boxSelection">
        <h4>Lightly Active</h4>
        <p>
          Spend a good part of the day on your feet(e.g., teacher, salesperson)
        </p>
      </label>

      <input type="radio" id="moderate" name="activity" value="1.55" hidden />
      <label htmlFor="moderate" className="boxSelection">
        <h4>Active</h4>
        <p>
          Spend a good part of the day doing some physical activity (e.g., food
          server, postal carrier )
        </p>
      </label>
      <input type="radio" id="very" name="activity" value="1.9" hidden />
      <label htmlFor="very" className="boxSelection">
        <h4>Very Active</h4>
        <p>
          Spend a good part of the day doing heavy physical activity (e.g., bike
          messenger, carpenter)
        </p>
      </label>

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

export default BaseLineActivity;
