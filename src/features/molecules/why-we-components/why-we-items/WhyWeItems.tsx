import React from 'react';
import styles from './WhyWeItems.module.scss';
import Text from '../../../atoms/text';

const WhyWeItems = () => {
  return (
    <section className={styles.whyeWeItems}>
      <div className="container">
        <div className={styles.itemsRow}>
          <div className="col_">
            <div className={styles.itemContent}>
              <Text as="h2" className={styles.itemTitle}>
                1. some title
              </Text>
              <Text as="p" className={styles.itemDescr}>
                Lorem ipsum dolor sit amet consectetur. Fusce neque pharetra suspendisse sed
                ullamcorper imperdiet aliquet. Justo lobortis nam nulla ac enim amet. Arcu nulla
                platea quis viverra integer quam integer id diam. Nulla urna elit id nullam. Eget
                odio molestie quam leo consequat suscipit ut elementum aliquam.
              </Text>
            </div>
          </div>
          <div className="col_">
            <div className={styles.itemContent}>
              <Text as="h2" className={styles.itemTitle}>
                1. some title
              </Text>
              <Text as="p" className={styles.itemDescr}>
                Lorem ipsum dolor sit amet consectetur. Fusce neque pharetra suspendisse sed
                ullamcorper imperdiet aliquet. Justo lobortis nam nulla ac enim amet. Arcu nulla
                platea quis viverra integer quam integer id diam. Nulla urna elit id nullam. Eget
                odio molestie quam leo consequat suscipit ut elementum aliquam.
              </Text>
            </div>
          </div>
          <div className="col_">
            <div className={styles.itemContent}>
              <Text as="h2" className={styles.itemTitle}>
                1. some title
              </Text>
              <Text as="p" className={styles.itemDescr}>
                Lorem ipsum dolor sit amet consectetur. Fusce neque pharetra suspendisse sed
                ullamcorper imperdiet aliquet. Justo lobortis nam nulla ac enim amet. Arcu nulla
                platea quis viverra integer quam integer id diam. Nulla urna elit id nullam. Eget
                odio molestie quam leo consequat suscipit ut elementum aliquam.
              </Text>
            </div>
          </div>
          <div className="col_">
            <div className={styles.itemContent}>
              <Text as="h2" className={styles.itemTitle}>
                1. some title
              </Text>
              <Text as="p" className={styles.itemDescr}>
                Lorem ipsum dolor sit amet consectetur. Fusce neque pharetra suspendisse sed
                ullamcorper imperdiet aliquet. Justo lobortis nam nulla ac enim amet. Arcu nulla
                platea quis viverra integer quam integer id diam. Nulla urna elit id nullam. Eget
                odio molestie quam leo consequat suscipit ut elementum aliquam.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeItems;
