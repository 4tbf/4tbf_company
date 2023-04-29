import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';
import { useFormik, FormikProps } from 'formik';
import clsx from 'clsx';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'next-i18next';
import CalculatorStep from '../../molecules/CalculatorStep';
import { CALCULATOR } from '../../../constants_types/calculator.constants';
import FinalCalculation from '../../molecules/FinalCalculation';
import { useCalculateData } from '../../../hooks/useCalculateData';
import { useAdvancedCalculator } from '../../../hooks/useAdvancedCalculator';
import CalculateHeader from '../../molecules/calculate-header/CalculateHeader';
import styles from './AdvancedCalculator.module.scss';
import Text from '../../atoms/text';
import CheckIcon from '../../../components/svgs/CheckIcon';
import { TCalculatorCurrentElement } from '../../../constants_types/calculator.types';
import SuccessModal from '../../atoms/SuccessModal';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const AdvancedCalculator: React.FC = () => {
  const currentCalcSteps = CALCULATOR.advanced;
  const { t } = useTranslation();
  const { iitialValues, validationSchem } = useAdvancedCalculator(currentCalcSteps, t);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const mobile = useMediaQuery('(max-width: 767.98px)');

  const handleFetch = async (values: Record<string, string>) => {
    await emailjs.send(
      'service_e4pwdli',
      'template_hhjw6i9',
      { data: JSON.stringify(values), email },
      's9kdGmtpc_11aAgwC'
    );
    setIsOpen(true);
  };
  const formik: FormikProps<Record<string, string>> = useFormik({
    initialValues: iitialValues,
    validationSchema: validationSchem,
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: iitialValues });
      handleFetch(values);
    },
  });
  const cost = useCalculateData(formik.values, currentCalcSteps);

  return (
    <div>
      <CalculateHeader
        title={t('main.calculator.advanced.title')}
        descr={t('main.calculator.advanced.description')}
      />
      <SuccessModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
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
                  <CalculatorStep formik={formik} currentStepData={currentCalcSteps[4]} />
                  <CalculatorStep formik={formik} currentStepData={currentCalcSteps[5]} />
                  <CalculatorStep formik={formik} currentStepData={currentCalcSteps[6]} />
                  <CalculatorStep formik={formik} currentStepData={currentCalcSteps[7]} />
                  <FinalCalculation email={email} setEmail={setEmail} cost={cost} formik={formik} />
                </StepWizard>
              </div>
            </div>
            <div className="col_">
              <div className={styles.stepRight}>
                {mobile ? (
                  <div>
                    <div className={styles.mobileStepCounts}>
                      <Text as="p" className={styles.stepText}>
                        Current Step
                      </Text>
                      <Text as="p" className={styles.stepNumbers}>
                        <Text as="span">2</Text>
                        <Text as="span">/8</Text>
                      </Text>
                    </div>
                  </div>
                ) : (
                  <ul className={styles.setepList}>
                    {currentCalcSteps.map((current: TCalculatorCurrentElement[], index) => {
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
                              {t(current[0].stepName)}
                            </Text>
                            <Text as="p" className={styles.stepNumber}>
                              {index < step - 1 ? <CheckIcon /> : index + 1}
                            </Text>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AdvancedCalculator);
