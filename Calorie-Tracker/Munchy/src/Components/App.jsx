import React from "react";
import LoginPage from "./OnBoarding/LoginPage";
import WelcomePage from "./OnBoarding/WelcomePage";
import Header from "./Header";
import OnboardingLogic from "./OnBoarding/OnboardingLogic";
const App = () => {
  return (
    <div>
      <Header />
      <OnboardingLogic />
    </div>
  );
};

export default App;
