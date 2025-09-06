import WelcomePage from "./WelcomePage";
import DemogrpahicQuestion from "./DemographicQuestion";
import BaseLineActivity from "./BaseLineActivity";
import React, { useState } from "react";

const OnboardingLogic = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div>
      {currentStep === 0 && <WelcomePage onNext={handleNext} />}
      {currentStep === 1 && (
        <DemogrpahicQuestion onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 2 && (
        <BaseLineActivity onNext={handleNext} onBack={handleBack} />
      )}
    </div>
  );
};

export default OnboardingLogic;
