import React from 'react';
import StepWizard from 'react-step-wizard';
import CalculatorStep from '../../molecules/CalculatorStep';
import { CALCULATOR } from '../../../constants_types/calculator.constants';
import styles from './BasicCalculator.module.scss';

const BasicCalculator: React.FC = () => {
  const currentCalcSteps = CALCULATOR.basic;
  return (
    <main className={styles.calculatorWrapper}>
      <StepWizard>
        <CalculatorStep currentStepData={currentCalcSteps[0]} />
        <CalculatorStep currentStepData={currentCalcSteps[1]} />
        <CalculatorStep currentStepData={currentCalcSteps[2]} />
        <CalculatorStep currentStepData={currentCalcSteps[3]} />
      </StepWizard>
    </main>
  );
};

export default React.memo(BasicCalculator);
