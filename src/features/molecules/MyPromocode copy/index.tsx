import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import promocodeImage from 'images/nfcs/promocode-min.png';
import styles from './MyPromocode.module.scss';

const MyPromocode = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className={styles.title}>{t('cases.nfcs.promocode.title')}</h1>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.info}>{t('cases.nfcs.promocode.info')}</p>
          <ul className={styles.list}>
            <li>{t('cases.nfcs.promocode.list.1')}</li>
            <li>{t('cases.nfcs.promocode.list.2')}</li>
            <li>{t('cases.nfcs.promocode.list.3')}</li>
          </ul>
          <p className={styles.description}>{t('cases.nfcs.promocode.description')}</p>
        </div>
        <div>
          <Image
            src={promocodeImage}
            alt="nfcs"
            className={styles.promocodeImage}
            width={888}
            height={474}
          />
        </div>
      </div>
    </div>
  );
};
export default MyPromocode;
