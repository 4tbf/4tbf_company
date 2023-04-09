import React from 'react';
import StepWizard from 'react-step-wizard';
import { useFormik, FormikProps } from 'formik';
import CalculatorStep from '../../molecules/CalculatorStep';
import { CALCULATOR } from '../../../constants_types/calculator.constants';
import styles from './AdvancedCalculator.module.scss';
import FinalCalculation from '../../molecules/FinalCalculation';
import { useCalculateData } from '../../../hooks/useCalculateData';
import { useAdvancedCalculator } from '../../../hooks/useAdvancedCalculator';

const AdvancedCalculator: React.FC = () => {
  const currentCalcSteps = CALCULATOR.advanced;
  const { iitialValues, validationSchem } = useAdvancedCalculator(currentCalcSteps);
  const formik: FormikProps<Record<string, string>> = useFormik({
    initialValues: iitialValues,
    validationSchema: validationSchem,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const cost = useCalculateData(formik.values, currentCalcSteps);
  return (
    <main className={styles.calculatorWrapper}>
      <StepWizard>
        <CalculatorStep formik={formik} currentStepData={currentCalcSteps[0]} />
        <CalculatorStep formik={formik} currentStepData={currentCalcSteps[1]} />
        <CalculatorStep formik={formik} currentStepData={currentCalcSteps[2]} />
        <CalculatorStep formik={formik} currentStepData={currentCalcSteps[3]} />
        <CalculatorStep formik={formik} currentStepData={currentCalcSteps[4]} />
        <CalculatorStep formik={formik} currentStepData={currentCalcSteps[5]} />
        <CalculatorStep formik={formik} currentStepData={currentCalcSteps[6]} />
        <CalculatorStep formik={formik} currentStepData={currentCalcSteps[7]} />
        <FinalCalculation cost={cost} formik={formik} />
      </StepWizard>
    </main>
  );
};

export default React.memo(AdvancedCalculator);
