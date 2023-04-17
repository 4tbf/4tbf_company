import React from 'react';
import Text from '../../atoms/text';
import styles from './Custom404.module.scss';

const Custom404 = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentTextWapper}>
        <Text as="h1">404</Text>
        <Text as="p">Oops!</Text>
        <Text as="p"> You’ve lost in space.</Text>
        <Text as="p">We can’t find the page that you are looking for.</Text>
      </div>
    </div>
  );
};

export default Custom404;
