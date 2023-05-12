import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import forecastImage from 'public/images/nfcs/forecast-min.png';
import forecastImageMobile from 'public/images/nfcs/forecast-min-mobile.png';

import styles from './OrderForecast.module.scss';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const OrderForecast = () => {
  const { t } = useTranslation();
  const mobile = useMediaQuery('(max-width: 767.98px)');

  return (
    <div className={styles.mainWrapper}>
      <h1 className={styles.title}>{t('cases.nfcs.forecast.title')}</h1>
      <div className={styles.wrapper}>
        <div>
          <Image
            src={mobile ? forecastImageMobile : forecastImage}
            alt="nfcs"
            className={styles.forecastImage}
            width={888}
            height={500}
          />
        </div>
        <div>
          <div className={styles.list}>
            <p>{t('cases.nfcs.forecast.info.1')}</p>
            <p>{t('cases.nfcs.forecast.info.2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderForecast;
