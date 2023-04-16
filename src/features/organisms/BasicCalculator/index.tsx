import React from 'react';
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
  // TODO CHANGE TO CORRECT BOOLEAN
  const selectedNumber = true;
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
                <StepWizard className={styles.stepMainItem}>
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
                  <li
                    className={clsx({
                      [styles.selectedStep]: selectedNumber,
                    })}
                  >
                    <div className={styles.stepContent}>
                      <Text as="p" className={styles.stepText}>
                        overal
                      </Text>
                      <Text as="p" className={styles.stepNumber}>
                        {selectedNumber ? <CheckIcon /> : '1'}
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className={styles.stepContent}>
                      <Text as="p" className={styles.stepText}>
                        Contacts
                      </Text>
                      <Text as="p" className={styles.stepNumber}>
                        2
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className={styles.stepContent}>
                      <Text as="p" className={styles.stepText}>
                        Work History
                      </Text>
                      <Text as="p" className={styles.stepNumber}>
                        3
                      </Text>
                    </div>
                  </li>
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
