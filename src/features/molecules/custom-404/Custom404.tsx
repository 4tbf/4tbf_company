import React from 'react';
import { useRouter } from 'next/router';
import Text from '../../atoms/text';
import styles from './Custom404.module.scss';
import Button from '../../../components/multiusable/button/Button';

const Custom404 = () => {
  const router = useRouter();
  const hanleButtonClick = () => {
    router.push('/');
  };
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentTextWapper}>
        <Text as="h1">404</Text>
        <Text as="p">Oops!</Text>
        <Text as="p"> You’ve lost in space.</Text>
        <Text as="p">We can’t find the page that you are looking for.</Text>
        <Button type="button" children="Go Home" onClick={hanleButtonClick} />
      </div>
    </div>
  );
};

export default Custom404;
