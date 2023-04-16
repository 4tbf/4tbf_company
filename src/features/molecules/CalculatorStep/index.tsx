import React from 'react';
import { FormikProps } from 'formik';
import clsx from 'clsx';
import { IStepWizardCommon } from '../../../constants_types/global.types';
import styles from './CalculatorStep.module.scss';
import { TCalculatorCurrentElement } from '../../../constants_types/calculator.types';
import Text from '../../atoms/text';
import CheckIcon from '../../../components/svgs/CheckIcon';
import Button from '../../../components/multiusable/button/Button';
import LongArrowIcon from '../../../components/svgs/LongArrowIcon';

interface ICalculatorStep extends IStepWizardCommon {
  currentStepData: any;
  formik: FormikProps<Record<string, string>>;
}

const CalculatorStep: React.FC<ICalculatorStep> = ({
  previousStep,
  nextStep,
  currentStep,
  currentStepData,
  totalSteps,
  formik,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const { value } = event.target;
    formik.setFieldValue(key, value);
  };

  return (
    <div className={styles.stepWrapper}>
      {currentStepData.map((element: TCalculatorCurrentElement) => {
        return (
          <div className={styles.calcCurrElementWrapper} key={element.key}>
            <Text as="h3" className={styles.title}>
              {element.title}
            </Text>
            <Text as="p" className={styles.descr}>
              {element.description}
            </Text>
            <div className={styles.inpurWrapper}>
              {element.mode === 'multiple'
                ? element.values.map((currInputValue) => {
                    const isChecked = formik.values[element.key] === currInputValue;
                    return (
                      <label key={currInputValue}>
                        <input
                          onChange={(event) => handleChange(event, element.key)}
                          name={element.key}
                          value={currInputValue}
                          type="checkbox"
                          checked={isChecked}
                        />
                        <Text
                          className={clsx(styles.checkItem, {
                            [styles.checked]: isChecked,
                          })}
                        >
                          <CheckIcon /> {currInputValue}
                        </Text>
                      </label>
                    );
                  })
                : element.values.map((currInputValue) => {
                    const isChecked = formik.values[element.key] === currInputValue;

                    return (
                      <label key={currInputValue}>
                        <input
                          onChange={(event) => handleChange(event, element.key)}
                          name={element.key}
                          value={currInputValue}
                          type="checkbox"
                          checked={isChecked}
                        />
                        <Text
                          className={clsx(styles.checkItem, {
                            [styles.checked]: isChecked,
                          })}
                        >
                          <CheckIcon /> {currInputValue}
                        </Text>
                      </label>
                    );
                  })}
            </div>
          </div>
        );
      })}
      <div className={styles.buttonWrapper}>
        {currentStep > 1 && (
          <button className={styles.prevButton} type="button" onClick={() => previousStep?.()}>
            <LongArrowIcon /> Back
          </button>
        )}
        {currentStep !== totalSteps ? (
          <Button type="button" onClick={() => nextStep?.()}>
            NEXT
          </Button>
        ) : (
          <button
            type="submit"
            onClick={() => {
              nextStep?.();
            }}
          >
            Calculate
          </button>
        )}
      </div>
    </div>
  );
};
export default React.memo(CalculatorStep);
