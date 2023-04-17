import React, { useState, useEffect } from 'react';
import { FormikProps } from 'formik';
import styles from './FinalCalculation.module.scss';
import { IStepWizardCommon } from '../../../constants_types/global.types';
import Text from '../../atoms/text';
import Input from '../../../components/multiusable/input/Input';
import ErrorMessage from '../../../components/multiusable/error-message/ErrorMessage';
import Button from '../../../components/multiusable/button/Button';
import RestoreIcon from '../../../components/svgs/RestoreIcon';

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
  function numberWithCommas(x) {
    x = x.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1.$2');
    return x;
  }

  const finalCost = cost < 1000 ? cost * 8 : cost * 3.2;
  return (
    <div className={styles.finalWrapper}>
      <div className={styles.finalHeader}>
        <Text as="h3" className={styles.finalTitle}>
          FinalCalculation
        </Text>
        <Text as="p" className={styles.appoximateName}>
          Approximate cost
        </Text>
        <Text as="p" className={styles.count}>
          ${numberWithCommas(Math.round(0.9 * finalCost))} - $
          {numberWithCommas(Math.round(1.1 * finalCost))}
        </Text>
      </div>
      <div className={styles.submitItem}>
        <Text as="p" className={styles.submitText}>
          If you want to make clarifications or know the details, please write your mail below and
          click <strong>Sumbit</strong>
        </Text>
        <div className={styles.email}>
          <Input
            type="email"
            value={email}
            placeholder="Email"
            label="Email"
            error={emailError}
            onChange={(e) => {
              if (emailError) {
                setEmailError(false);
              }
              setEmail(e.target.value);
            }}
          />
          {emailError && <ErrorMessage text="Email is not valid" />}
        </div>
      </div>
      <div className={styles.finalButtons}>
        <button className={styles.recalculate} type="button" onClick={() => goToStep?.(1)}>
          <RestoreIcon /> Recalculate
        </button>
        <Button type="submit" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default React.memo(FinalCalculation);
