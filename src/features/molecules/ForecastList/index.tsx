import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import forecastListImage from 'public/images/nfcs/forecast-list-min.png';
import forecastListImageMobile from 'public/images/nfcs/forecast-list-min-mobile.png';

import readyForecastImage from 'public/images/nfcs/ready-forecast-min.png';
import readyForecastImageMobile from 'public/images/nfcs/ready-forecast-min-mobile.png';

import yourForecastImage from 'public/images/nfcs/your-forecast-min.png';
import yourForecastImageMobile from 'public/images/nfcs/your-forecast-min-mobile.png';

import { AnimatePresence, motion } from 'framer-motion';
import { memo } from 'react';
import styles from './ForecastList.module.scss';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const ForecastList = () => {
  const { t } = useTranslation();
  const mobile = useMediaQuery('(max-width: 767.98px)');

  return (
    <AnimatePresence>
      <div className={styles.mainWrapper}>
        <div>
          <h1 className={styles.mainTitle}>{t('cases.nfcs.forecastList.title')}</h1>
          <div className={styles.description}>
            <p className={styles.description_first}>
              {t('cases.nfcs.forecastList.first.description')}
            </p>
            <div className={styles.description_second}>
              <p>{t('cases.nfcs.forecastList.second.description')}</p>
              <p> {t('cases.nfcs.forecastList.second.description.2')}</p>
            </div>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key="forecast Image"
          >
            <Image
              src={mobile ? forecastListImageMobile : forecastListImage}
              className={styles.forecastImage}
              alt="Forecast List"
              width={1145}
              height={610}
            />
          </motion.div>
        </div>
        <div className={styles.readyForecast}>
          <div className={styles.forecast}>
            <p className={styles.forecast_title}>
              <b>{t('cases.nfcs.forecastList.readyForecast.title')}</b>
            </p>
            <p className={styles.forecast_text}>{t('cases.nfcs.forecastList.readyForecast')}</p>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key="Ready Forecast"
          >
            <Image
              src={mobile ? readyForecastImageMobile : readyForecastImage}
              alt="Ready Forecast"
              className={styles.readyForecastImage}
              width={1145}
              height={610}
            />
          </motion.div>
        </div>
        <div className={styles.yourForecast}>
          <div className={styles.your_forecast}>
            <p className={styles.forecast_title}>
              <b>{t('cases.nfcs.forecastList.yourForecast.title')}</b>
            </p>
            <p className={styles.forecast_text}>{t('cases.nfcs.forecastList.yourForecast')}</p>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key="Your Forecast"
          >
            <Image
              src={mobile ? yourForecastImageMobile : yourForecastImage}
              alt="Your Forecast"
              className={styles.yourForecastImage}
              width={1145}
              height={610}
            />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
export default memo(ForecastList);
