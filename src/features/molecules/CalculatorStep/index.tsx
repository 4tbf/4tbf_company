import React from 'react';
import { FormikProps } from 'formik';
import { IStepWizardCommon } from '../../../constants_types/global.types';
import styles from './CalculatorStep.module.scss';
import { TCalculatorCurrentElement } from '../../../constants_types/calculator.types';

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
            <div>{element.title}</div>
            <div className={styles.inpurWrapper}>
              {element.mode === 'multiple'
                ? element.values.map((currInputValue) => {
                    const isChecked = formik.values[element.key] === currInputValue;
                    return (
                      <div key={currInputValue}>
                        <input
                          onChange={(event) => handleChange(event, element.key)}
                          name={element.key}
                          value={currInputValue}
                          type="checkbox"
                          checked={isChecked}
                        />
                        <span>{currInputValue}</span>
                      </div>
                    );
                  })
                : element.values.map((currInputValue) => {
                    const isChecked = formik.values[element.key] === currInputValue;

                    return (
                      <div key={currInputValue}>
                        <input
                          onChange={(event) => handleChange(event, element.key)}
                          name={element.key}
                          value={currInputValue}
                          type="checkbox"
                          checked={isChecked}
                        />
                        <span>{currInputValue}</span>
                      </div>
                    );
                  })}
            </div>
          </div>
        );
      })}
      <div className={styles.buttonWrapper}>
        {currentStep > 1 && (
          <button type="button" onClick={() => previousStep?.()}>
            Previous
          </button>
        )}
        {currentStep !== totalSteps ? (
          <button type="button" onClick={() => nextStep?.()}>
            NEXT
          </button>
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
