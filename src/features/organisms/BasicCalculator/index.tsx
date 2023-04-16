import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';
import { useFormik, FormikProps } from 'formik';
import clsx from 'clsx';
import CalculatorStep from '../../molecules/CalculatorStep';
import { CALCULATOR } from '../../../constants_types/calculator.constants';
import styles from './BasicCalculator.module.scss';
import { useBasicCalculator } from '../../../hooks/useBasicCalculator';
import FinalCalculation from '../../molecules/FinalCalculation';
import { useCalculateData } from '../../../hooks/useCalculateData';
import CalculateHeader from '../../molecules/calculate-header/CalculateHeader';
import Text from '../../atoms/text';
import CheckIcon from '../../../components/svgs/CheckIcon';
import { TCalculatorCurrentElement } from '../../../constants_types/calculator.types';

const BasicCalculator: React.FC = () => {
  const currentCalcSteps = CALCULATOR.basic;
  const { iitialValues, validationSchem } = useBasicCalculator(currentCalcSteps);
  const [step, setStep] = useState(1);
  const formik: FormikProps<Record<string, string>> = useFormik({
    initialValues: iitialValues,
    validationSchema: validationSchem,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const cost = useCalculateData(formik.values, currentCalcSteps);

  return (
    <div>
      <CalculateHeader
        title="Parz Calculator"
        descr="Hit a line and our friendly folks will get back to you as soon as possible."
      />
      <div className="container">
        <div className={styles.stepContainer}>
          <div className={styles.stepRow}>
            <div className="col_">
              <div className={styles.stepLet}>
                <StepWizard
                  onStepChange={({ activeStep }: { activeStep: number }) => setStep(activeStep)}
                  className={styles.stepMainItem}
                >
                  <CalculatorStep formik={formik} currentStepData={currentCalcSteps[0]} />
                  <CalculatorStep formik={formik} currentStepData={currentCalcSteps[1]} />
                  <CalculatorStep formik={formik} currentStepData={currentCalcSteps[2]} />
                  <CalculatorStep formik={formik} currentStepData={currentCalcSteps[3]} />
                  <FinalCalculation cost={cost} formik={formik} />
                </StepWizard>
              </div>
            </div>
            <div className="col_">
              <div className={styles.stepRight}>
                <ul className={styles.setepList}>
                  {currentCalcSteps.map((current: TCalculatorCurrentElement[], index) => {
                    console.log(step, index);
                    return (
                      <li
                        key={current[0].stepName}
                        className={clsx({
                          [styles.selectedStep]: index < step,
                          [styles.selectedLastStep]:
                            index === currentCalcSteps.length - 1 && index < step,
                        })}
                      >
                        <div className={styles.stepContent}>
                          <Text as="p" className={styles.stepText}>
                            {current[0].stepName}
                          </Text>
                          <Text as="p" className={styles.stepNumber}>
                            {index < step - 1 ? <CheckIcon /> : index + 1}
                          </Text>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BasicCalculator);
