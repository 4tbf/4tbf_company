import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Text from '../../atoms/text';
import styles from './Custom404.module.scss';
import Button from '../../../components/multiusable/button/Button';

const Custom404 = () => {
  const router = useRouter();
  const hanleButtonClick = () => {
    router.push('/');
  };
  const { t } = useTranslation();

  return (
    <div className={styles.pageContent}>
      <div className={styles.contentTextWapper}>
        <Text as="h1">404</Text>
        <Text as="p">{t('404.oops')}</Text>
        <Text as="p">{t('404.title')}</Text>
        <Text as="p">{t('404.subtitle')}</Text>
        <Button type="button" children={t('404.home')} onClick={hanleButtonClick} />
      </div>
    </div>
  );
};

export default Custom404;
