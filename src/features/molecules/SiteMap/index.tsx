import { useTranslation } from 'react-i18next';
import siteMapImage from 'public/images/nfcs/site-map-min.png';
import Image from 'next/image';
import styles from './SiteMap.module.scss';

const SiteMap = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t('cases.nfcs.siteMap.title')}</h1>
        <p className={styles.description}>{t('cases.nfcs.siteMap.description')}</p>
      </div>
      <Image
        src={siteMapImage}
        className={styles.siteMapImage}
        alt="Site Map"
        height={920}
        width={1465}
      />
    </div>
  );
};
export default SiteMap;
