import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import howToBuyForecastImage1 from 'public/images/nfcs/how-to-buy-forecast-1-min.png';
import howToBuyForecastImage2 from 'public/images/nfcs/how-to-buy-forecast-2-min.png';
import howToBuyForecastImage3 from 'public/images/nfcs/how-to-buy-forecast-3-min.png';
import howToBuyForecastImage4 from 'public/images/nfcs/how-to-buy-forecast-4-min.png';
import mobileImage from 'public/images/nfcs/binance-future-forecast-mobile.png';
import styles from './HowToBuyForecast.module.scss';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const HowToBuyForecast = () => {
  const { t } = useTranslation();
  const mobile = useMediaQuery('(max-width: 767.98px)');

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.text}>
            <h1 className={styles.title}>{t('cases.nfcs.howToBuyForecast.title')}</h1>
            <div className={styles.list}>
              <p>{t('cases.nfcs.howToBuyForecast.info.1')}</p>
              <p>{t('cases.nfcs.howToBuyForecast.info.2')}</p>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          {mobile ? (
            <Image src={mobileImage} alt="nfcs" />
          ) : (
            <>
              <div className={styles.imagesColumn}>
                <Image src={howToBuyForecastImage1} alt="nfcs" height={516} width={341} />
                <Image src={howToBuyForecastImage2} alt="nfcs" height={195} width={341} />
              </div>
              <div className={styles.imagesColumnSecond}>
                <Image src={howToBuyForecastImage3} alt="nfcs" height={264} width={341} />
                <Image src={howToBuyForecastImage4} alt="nfcs" height={410} width={341} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default HowToBuyForecast;
