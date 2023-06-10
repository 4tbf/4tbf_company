import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Text from '../text';
import styles from './CookieBanner.module.scss';
import Button from '../../../components/multiusable/button/Button';

interface ICookieBanner {
  setAccept: (arg: boolean) => void;
}

const CookieBanner: React.FC<ICookieBanner> = ({ setAccept }) => {
  const { t } = useTranslation();
  const allowCookies = () => {
    window.localStorage.setItem('cookie_banner', 'true');
    setAccept(true);
  };
  const declineCookies = () => {
    window.localStorage.setItem('cookie_banner', 'false');
    setAccept(false);
  };
  return (
    <div className={styles.cookieBanner}>
      <div className={styles.cookieBannerInfo}>
        <Text as="p" className={styles.cookieBannerInfoDetails}>
          {t('cookie.banner.info.detail')}
        </Text>
        <Link href="#" className={styles.cookieBannerInfoReadMore}>
          {t('cookie.banner.info.read.more')}
        </Link>
      </div>
      <div className={styles.cookieBannerButns}>
        <div>
          <Button type="button" children={t('decline.cookies')} onClick={declineCookies} />
        </div>
        <div className={styles.acceptCookies}>
          <Button
            type="button"
            variant="filled"
            children={t('allow.cookies')}
            onClick={allowCookies}
          />
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
