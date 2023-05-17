import { useTranslation } from 'react-i18next';
import CaseStudyIems from '../../molecules/case-studies-components/case-study-items/CaseStudyIems';
import styles from './OtherCases.module.scss';

const OtherCases = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.otherCases_container}>
      <h1 className={styles.otherCases_title}>{t('cases.nfcs.otherCases')}</h1>
      <CaseStudyIems declude="qr" />
    </div>
  );
};

export default OtherCases;
