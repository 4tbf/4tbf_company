import React, { useState, useEffect } from 'react';
import { FormikProps } from 'formik';
import styles from './FinalCalculation.module.scss';
import { IStepWizardCommon } from '../../../constants_types/global.types';

interface IFinalCalculation extends IStepWizardCommon {
  formik: FormikProps<Record<string, string>>;
  cost: number;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const FinalCalculation: React.FC<IFinalCalculation> = ({ goToStep, formik, cost }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const handleSubmit = () => {
    const isValid = validateEmail(email);
    if (isValid) {
      formik.handleSubmit();
    } else {
      setEmailError(true);
    }
  };

  useEffect(() => {
    return () => {
      setEmail('');
      setEmailError(false);
    };
  }, []);

  return (
    <div className={styles.finalWrapper}>
      <div>FinalCalculation</div>
      <div>Approximate cost ${cost}</div>
      <div className={styles.submitText}>
        If you want to make clarifications or know the details, please write your mail below and
        click Sumbit
        <div className={styles.email}>
          <input
            placeholder="email"
            type="emal"
            value={email}
            onChange={(e) => {
              if (emailError) {
                setEmailError(false);
              }
              setEmail(e.target.value);
            }}
          />
          {emailError && <span>Email is not valid</span>}
        </div>
      </div>
      <button className={styles.submit} type="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
      <button className={styles.recalculate} type="button" onClick={() => goToStep?.(1)}>
        Recalculate
      </button>
    </div>
  );
};

export default React.memo(FinalCalculation);
