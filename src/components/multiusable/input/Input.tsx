import React from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';
import Text from '../../../features/atoms/text';

const Input = ({
  label,
  type = 'text',
  placeholder,
  onChange,
  value,
  name,
  error,
}: {
  placeholder?: any;
  label?: any;
  type?: any;
  onChange?: any;
  value?: any;
  name?: any;
  error?: any;
}) => {
  const input = () => {
    switch (type) {
      case 'textarea':
        return <textarea onChange={onChange} placeholder={placeholder || ''} />;
      case 'file':
        return (
          <label className={styles.fileInputWrapper}>
            <input
              onChange={onChange}
              type="file"
              accept="application/pdf, image/*, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
            <Text>{placeholder}</Text>
          </label>
        );
      default:
        return <input onChange={onChange} type={type} placeholder={placeholder || ''} />;
    }
  };

  return (
    <div
      className={clsx(styles.inputWrapper, {
        [styles.error]: error,
      })}
    >
      {label && <label>{label}</label>}

      {input()}
    </div>
  );
};

export default Input;
