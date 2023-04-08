import React from 'react';
import { IStepWizardCommon } from '../../../constants_types/global.types';
import styles from './CalculatorStep.module.scss';
import { TCalculatorCurrentElement } from '../../../constants_types/calculator.types';

interface ICalculatorStep extends IStepWizardCommon {
  currentStepData: any;
}

const CalculatorStep: React.FC<ICalculatorStep> = ({
  previousStep,
  nextStep,
  currentStep,
  currentStepData,
  totalSteps,
}) => {
  console.log(currentStep, totalSteps);
  return (
    <div className={styles.stepWrapper}>
      {currentStepData.map((element: TCalculatorCurrentElement) => {
        return (
          <div className={styles.calcCurrElementWrapper} key={element.key}>
            <div>{element.title}</div>
            <div className={styles.inpurWrapper}>
              {element.mode === 'multiple'
                ? element.values.map((currInputValue, currentInputIndex) => {
                    const isChecked =
                      typeof element.defaultIndex === 'number' &&
                      currentInputIndex === element.defaultIndex;
                    return (
                      <div key={currInputValue}>
                        <input name={element.key} type="checkbox" checked={isChecked} readOnly />
                        <span>{currInputValue}</span>
                      </div>
                    );
                  })
                : element.values.map((currInputValue, currentInputIndex) => {
                    const isChecked =
                      typeof element.defaultIndex === 'number' &&
                      currentInputIndex === element.defaultIndex;
                    return (
                      <div key={currInputValue}>
                        <input name={element.key} type="checkbox" checked={isChecked} readOnly />
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
          <button type="button" onClick={() => console.log('calculate')}>
            Calculate
          </button>
        )}
      </div>
    </div>
  );
};
export default React.memo(CalculatorStep);
