import React from 'react';
import Link from 'next/link';
import styles from './ContactForm.module.scss';
import Input from '../../../../components/multiusable/input/Input';
import Button from '../../../../components/multiusable/button/Button';
import Text from '../../../atoms/text';
import LinkedInIcon from '../../../../components/svgs/LinkedInIcon';
import TwiiterIcon from '../../../../components/svgs/TwiiterIcon';
import FacebookIcon from '../../../../components/svgs/FacebookIcon';
import InstagramIcon from '../../../../components/svgs/InstagramIcon';
import SuccessModal from '../../../atoms/SuccessModal';

const ContactForm = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <section className={styles.contactFrom}>
      <SuccessModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      <div className="container">
        <div className={styles.contactRow}>
          <div className="col_">
            <div className={styles.formWrapper}>
              <div className={styles.formRow}>
                <div className="col_">
                  <Input type="text" label="Name" placeholder="name" />
                </div>
                <div className="col_">
                  <Input type="text" label="Surname" placeholder="Surname" />
                </div>
                <div className="col_">
                  <Input type="email" label="Email" placeholder="Email" />
                </div>
                <div className="col_">
                  <Input type="tel" label="Phone" placeholder="Phone" />
                </div>
                <div className="col_">
                  <Input type="textarea" label="Message" placeholder="Message" />
                </div>
                <div className="col_" onClick={() => setIsOpen(true)}>
                  <Button type="submit" children="Submit" />
                </div>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.getInTouch}>
              <div className={styles.getInTouchTop}>
                <Text className={styles.getInTouchTitle} as="h2">
                  Get In touch
                </Text>
                <Link href="mailto:barevaxpers@xareb.com">barevaxpers@xareb.com</Link>
                <Link href="tel:+374 99 38 48 88">+374 99 38 48 88</Link>
                <div className={styles.socialList}>
                  <Link href="#" target="_blank">
                    <LinkedInIcon />
                  </Link>
                  <Link href="#" target="_blank">
                    <TwiiterIcon />
                  </Link>
                  <Link href="#" target="_blank">
                    <FacebookIcon />
                  </Link>
                  <Link href="#" target="_blank">
                    <InstagramIcon />
                  </Link>
                </div>
              </div>
              <div className={styles.getInTouchBottom}>
                <Text className={styles.getInTouchTitle} as="h2">
                  Visit Us
                </Text>
                <Text className={styles.getInTouchAddress} as="p">
                  Aystex karox e linel dzer hascen
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
