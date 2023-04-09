import React from 'react';
import styles from './Input.module.scss';

const Input = ({
  label,
  type = 'text',
  placeholder,
  onChange,
  value,
  name,
}: {
  placeholder?: any;
  label?: any;
  type?: any;
  onChange?: any;
  value?: any;
  name?: any;
}) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label>{label}</label>}

      {type === 'textarea' ? (
        <textarea placeholder={placeholder || ''} />
      ) : (
        <input type={type} placeholder={placeholder || ''} />
      )}
    </div>
  );
};

export default Input;
