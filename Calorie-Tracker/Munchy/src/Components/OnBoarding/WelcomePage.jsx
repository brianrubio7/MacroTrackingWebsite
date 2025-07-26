import { useState } from "react";
import "../..//Styling/WelcomePage.css";

const WelcomePage = ({ onNext }) => {
  return (
    <div className="wrapper">
      <h1 className="loginHeader">Welcome to Munchy!</h1>
      <p className="larger-text">
        <span className="wlcText">
          Your personal assistant for tracking calories, macros, and healthy
          habits.
        </span>
      </p>
      <button className="wlcBtn" onClick={onNext}>
        Get Started
      </button>
    </div>
  );
};
export default WelcomePage;
