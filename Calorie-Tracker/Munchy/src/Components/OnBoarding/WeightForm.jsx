import "../../Styling/WeightForm.css";

const WeightForm = ({ onNext, onBack }) => {
  return (
    <>
      <div className="wrapper4">
        <h4>How tall are you?</h4>
        <input type="number" placeholder="Weight (lbs)"></input>
      </div>
    </>
  );
};

export default WeightForm;
