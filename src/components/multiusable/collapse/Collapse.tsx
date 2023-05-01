import React from 'react';
import clsx from 'clsx';
import useCollapse from './useCollapse';
import Text from '../../../features/atoms/text';
import styles from './Collapse.module.scss';
import PlusIcon from '../../svgs/PlusIcon';

const Collapse = ({ title, children }: { title: string; children: any }) => {
  const { open, handleToggle, contentRef } = useCollapse();
  return (
    <div className={styles.faqListItem}>
      <div className={styles.itemHeader}>
        <Text as="h3" className={styles.itemTitle}>
          {title}
        </Text>
        <button
          type="button"
          className={clsx(styles.itemControl, {
            [styles.openedBtn]: open,
          })}
          onClick={handleToggle}
        >
          <PlusIcon />
        </button>
      </div>
      <div
        className={styles.itemContentWrapper}
        ref={contentRef}
        style={
          open
            ? { height: `${contentRef.current && contentRef.current.scrollHeight}px` }
            : { height: '0px' }
        }
      >
        <div className={styles.itemContent}>{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
