export interface IStepWizardCommon {
  currentStep?: number;
  nextStep?: () => void;
  previousStep?: () => void;
  totalSteps?: number;
}
