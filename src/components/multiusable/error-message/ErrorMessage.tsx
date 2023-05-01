import React from 'react';
import styles from './ErrorMessage.module.scss';
import Text from '../../../features/atoms/text';

const ErrorMessage = ({ text }: { text: any }) => {
  return (
    <Text as="p" className={styles.errorText}>
      {text}
    </Text>
  );
};

export default ErrorMessage;
