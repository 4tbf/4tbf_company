import React, { useState, useEffect } from 'react';
import { FormikProps } from 'formik';
import { useTranslation } from 'next-i18next';
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
  email: string;
  setEmail: (arg: string) => void;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const FinalCalculation: React.FC<IFinalCalculation> = ({
  goToStep,
  formik,
  cost,
  email,
  setEmail,
}) => {
  const [emailError, setEmailError] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = () => {
    const isValid = validateEmail(email);
    if (isValid) {
      formik.handleSubmit();
      goToStep(1);
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

  return (
    <div className={styles.finalWrapper}>
      <div className={styles.finalHeader}>
        <Text as="h3" className={styles.finalTitle}>
          {t('calculator.finalcalc.title')}
        </Text>
        <Text as="p" className={styles.appoximateName}>
          {t('calculator.finalcalc.subtitle')}
        </Text>
        <Text as="p" className={styles.count}>
          ${numberWithCommas(10000)} - ${numberWithCommas(15000)}
        </Text>
      </div>
      <div className={styles.submitItem}>
        <Text as="p" className={styles.submitText}>
          {t('calculator.finalcalc.text')}
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
          {emailError && <ErrorMessage text={t('calculator.finalcalc.email.error')} />}
        </div>
      </div>
      <div className={styles.finalButtons}>
        <button
          className={styles.recalculate}
          type="button"
          onClick={() => {
            setEmail('');
            setEmailError(false);
            goToStep?.(1);
          }}
        >
          <RestoreIcon /> {t('calculator.finalcalc.recalc')}
        </button>
        <Button type="submit" onClick={handleSubmit}>
          {t('calculator.finalcalc.submit')}
        </Button>
      </div>
    </div>
  );
};

export default React.memo(FinalCalculation);
