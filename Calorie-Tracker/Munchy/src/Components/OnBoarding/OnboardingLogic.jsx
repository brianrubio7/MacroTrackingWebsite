import WelcomePage from "./WelcomePage";
import DemographicQuestion from "./DemographicQuestion";
import BaseLineActivity from "./BaseLineActivity";
import WeightForm from "./WeightForm";
import UserCreation from "./UserCreation";
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
        <DemographicQuestion onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 2 && (
        <BaseLineActivity onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 3 && (
        <WeightForm onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 4 && (
        <UserCreation onNext={handleNext} onBack={handleBack} />
      )}
    </div>
  );
};

export default OnboardingLogic;
