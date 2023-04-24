import React from 'react';
import { FormikProps } from 'formik';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { IStepWizardCommon } from '../../../constants_types/global.types';
import styles from './CalculatorStep.module.scss';
import { TCalculatorCurrentElement } from '../../../constants_types/calculator.types';
import Text from '../../atoms/text';
import CheckIcon from '../../../components/svgs/CheckIcon';
import Button from '../../../components/multiusable/button/Button';
import LongArrowIcon from '../../../components/svgs/LongArrowIcon';
import NoSsr from '../../../components/multiusable/NoSSR/NoSSR';

const CustomToolTIp = dynamic(
  () => import('../../../components/multiusable/CustomToolTIp/CustomToolTIp'),
  {
    loading: () => <p>Loading...</p>,
  }
);
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
    console.log(value);
    formik.setFieldValue(key, value);
  };
  const { t } = useTranslation();

  return (
    <div className={styles.stepWrapper}>
      {currentStepData.map((element: TCalculatorCurrentElement) => {
        return (
          <div className={styles.calcCurrElementWrapper} key={element.key}>
            <div className={styles.tooltipWrapper}>
              <Text as="h3" className={styles.title}>
                {t(element.title)}
              </Text>
              {element.tooltipText && (
                <NoSsr>
                  <CustomToolTIp text={t(element.tooltipText)} />
                </NoSsr>
              )}
            </div>
            <Text as="p" className={styles.descr}>
              {t(element.description)}
            </Text>
            <div className={styles.inpurWrapper}>
              {element.mode === 'multiple'
                ? element.values.map((currInputValue) => {
                    const currVal = currInputValue.includes('.')
                      ? t(currInputValue)
                      : currInputValue;
                    const currKey = formik.values[element.key].includes('.')
                      ? t(formik.values[element.key])
                      : formik.values[element.key];
                    const isChecked = currKey === currVal;
                    return (
                      <label key={currInputValue}>
                        <input
                          onChange={(event) => handleChange(event, element.key)}
                          name={element.key}
                          value={currInputValue.includes('.') ? t(currInputValue) : currInputValue}
                          type="checkbox"
                          checked={isChecked}
                        />
                        <Text
                          className={clsx(styles.checkItem, {
                            [styles.checked]: isChecked,
                            [styles.notChecked]: !isChecked,
                          })}
                        >
                          <CheckIcon />
                          {currInputValue.includes('.') ? t(currInputValue) : currInputValue}
                        </Text>
                      </label>
                    );
                  })
                : element.values.map((currInputValue) => {
                    const currVal = currInputValue.includes('.')
                      ? t(currInputValue)
                      : currInputValue;
                    const currKey = formik.values[element.key].includes('.')
                      ? t(formik.values[element.key])
                      : formik.values[element.key];

                    const isChecked = currKey === currVal;
                    return (
                      <label key={currInputValue}>
                        <input
                          onChange={(event) => handleChange(event, element.key)}
                          name={element.key}
                          value={currInputValue.includes('.') ? t(currInputValue) : currInputValue}
                          type="checkbox"
                          checked={isChecked}
                        />
                        <Text
                          className={clsx(styles.checkItem, {
                            [styles.checked]: isChecked,
                            [styles.notChecked]: !isChecked,
                          })}
                        >
                          <CheckIcon />
                          {currInputValue.includes('.') ? t(currInputValue) : currInputValue}
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
            <LongArrowIcon /> {t('calculator.finalcalc.back')}
          </button>
        )}
        {currentStep !== totalSteps ? (
          <Button type="button" onClick={() => nextStep?.()}>
            {t('calculator.finalcalc.next')}
          </Button>
        ) : (
          <button
            type="submit"
            onClick={() => {
              nextStep?.();
            }}
          >
            {t('calculator.finalcalc.calculate')}
          </button>
        )}
      </div>
    </div>
  );
};
export default React.memo(CalculatorStep);
