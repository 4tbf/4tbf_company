import React from 'react';
import styles from './FaqSection.module.scss';
import Text from '../../atoms/text';
import Collapse from '../../../components/multiusable/collapse/Collapse';

const FaqSection = () => {
  return (
    <section className={styles.faqSection}>
      <div className="container">
        <Text as="h2" className={styles.faqTitle}>
          FAQ
        </Text>
        <Text className={styles.faqDescr} as="p">
          Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et commodo
          consectetur. Suspendisse semper tellus accumsan nec.
        </Text>
        <div className={styles.faqList}>
          <Collapse
            title="What are your main services?"
            children={<Text as="p">What are your main services?</Text>}
          />
          <Collapse
            title="What are your main services?"
            children={<Text as="p">What are your main services?</Text>}
          />
          <Collapse
            title="What are your main services?"
            children={<Text as="p">What are your main services?</Text>}
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
