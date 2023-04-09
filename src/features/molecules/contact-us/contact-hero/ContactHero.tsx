import React from 'react';
import styles from './ContactHero.module.scss';
import Text from '../../../atoms/text';

const ContactHero = () => {
  return (
    <section className={styles.contactHero}>
      <div className="container">
        <Text className={styles.contactTitle} as="h1">
          Stex Mi <br /> hat bomb title .
        </Text>
        <Text className={styles.contactSubTitle} as="p">
          Hit a line and our friendly folks will get back to you as soon as possible.
        </Text>
      </div>
    </section>
  );
};

export default ContactHero;
