import "../../Styling/BaseLineActivity.css";
import React, { useState } from "react";

const BaseLineActivity = ({ onNext, onBack }) => {
  const [activityLevel, setActivityLevel] = useState("");

  const handleActivityLevel = (event) => {
    setActivityLevel(event.target.value);
  };

  const handleNextClick = () => {
    onNext({
      activityLevel,
    });
  };

  return (
    <div className="wrapper3">
      <h2>What is your baseline Activity?</h2>

      <input
        type="radio"
        id="sedentary"
        name="activity"
        value="1.2"
        hidden
        onClick={handleActivityLevel}
      />
      <label htmlFor="sedentary" className="boxSelection">
        <h4> Not Very Active</h4>
        <p>Spend most of the day sitting(e.g., bank teller, desk job)</p>
      </label>
      <input
        type="radio"
        id="light"
        name="activity"
        value="1.375"
        hidden
        onClick={handleActivityLevel}
      />
      <label htmlFor="light" className="boxSelection">
        <h4>Lightly Active</h4>
        <p>
          Spend a good part of the day on your feet(e.g., teacher, salesperson)
        </p>
      </label>

      <input
        type="radio"
        id="moderate"
        name="activity"
        value="1.55"
        hidden
        onClick={handleActivityLevel}
      />
      <label htmlFor="moderate" className="boxSelection">
        <h4>Active</h4>
        <p>
          Spend a good part of the day doing some physical activity (e.g., food
          server, postal carrier )
        </p>
      </label>
      <input
        type="radio"
        id="very"
        name="activity"
        value="1.9"
        hidden
        onClick={handleActivityLevel}
      />
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
        <button className="demoNext" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BaseLineActivity;
