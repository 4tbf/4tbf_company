import React from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';
import Text from '../../../features/atoms/text';
import { X } from '../../../assets/X';
import { Document } from '../../../assets/Document';

const Input = ({
  label,
  type = 'text',
  placeholder,
  onChange,
  value,
  name,
  error,
  hanldeFileDelete,
}: {
  placeholder?: any;
  label?: any;
  type?: any;
  onChange?: any;
  value?: any;
  name?: any;
  error?: any;
  hanldeFileDelete?: () => void;
}) => {
  const input = () => {
    switch (type) {
      case 'textarea':
        return <textarea value={value} onChange={onChange} placeholder={placeholder || ''} />;
      case 'file':
        return (
          <label
            className={clsx(styles.fileInputWrapper, {
              [styles.fileInputWrapperWithValue]: value,
            })}
          >
            <input
              onChange={onChange}
              type="file"
              accept="application/pdf, image/*, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
            {value ? (
              <div className={styles.document}>
                <Document />
                <Text>{value.name}</Text>
              </div>
            ) : (
              <Text>{placeholder}</Text>
            )}
          </label>
        );
      default:
        return (
          <input value={value} onChange={onChange} type={type} placeholder={placeholder || ''} />
        );
    }
  };

  return (
    <div
      className={clsx(styles.inputWrapper, {
        [styles.error]: error,
      })}
    >
      {label && <label>{label}</label>}
      {type === 'file' && value && (
        <span onClick={hanldeFileDelete} className={styles.x}>
          <X />
        </span>
      )}

      {input()}
    </div>
  );
};

export default Input;
