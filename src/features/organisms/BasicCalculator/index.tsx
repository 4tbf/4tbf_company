import React from 'react';
import StepWizard from 'react-step-wizard';
import { useFormik, FormikProps } from 'formik';
import CalculatorStep from '../../molecules/CalculatorStep';
import { CALCULATOR } from '../../../constants_types/calculator.constants';
import styles from './BasicCalculator.module.scss';
import { useBasicCalculator } from '../../../hooks/useBasicCalculator';
import FinalCalculation from '../../molecules/FinalCalculation';
import { useCalculateData } from '../../../hooks/useCalculateData';

const BasicCalculator: React.FC = () => {
  const currentCalcSteps = CALCULATOR.basic;
  const { iitialValues, validationSchem } = useBasicCalculator(currentCalcSteps);
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
        <FinalCalculation cost={cost} formik={formik} />
      </StepWizard>
    </main>
  );
};

export default React.memo(BasicCalculator);
