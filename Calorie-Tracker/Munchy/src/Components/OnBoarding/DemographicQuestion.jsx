import "../../Styling/DemographicQuestion.css";

const DemographicQuestion = () => {
  return (
    <div className="wrapper2">
      <h2 className="demoText">What is your gender?</h2>
      <p>Male Female</p>
      <h2 className="demoText">When were you born?</h2>
      <input className="demoInput" placeholder="MM/DD/YYYY"></input>

      <div className="buttonWrapper">
        <button className="demoBack">Back</button>
        <button className="demoNext">Next</button>
      </div>
    </div>
  );
};

export default DemographicQuestion;
