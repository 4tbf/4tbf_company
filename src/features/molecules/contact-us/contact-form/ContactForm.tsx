import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import styles from './ContactForm.module.scss';
import Input from '../../../../components/multiusable/input/Input';
import Button from '../../../../components/multiusable/button/Button';
import Text from '../../../atoms/text';
import LinkedInIcon from '../../../../components/svgs/LinkedInIcon';
import TwiiterIcon from '../../../../components/svgs/TwiiterIcon';
import FacebookIcon from '../../../../components/svgs/FacebookIcon';
import InstagramIcon from '../../../../components/svgs/InstagramIcon';
import SuccessModal from '../../../atoms/SuccessModal';
import ErrorMessage from '../../../../components/multiusable/error-message/ErrorMessage';
import { CONTACT_US } from './constants';

const validationSchema = object({
  name: string().required('Requiere Field'),
  email: string().email('Not Valid Email').required('Requiere Field'),
  phone: string()
    .matches(/^\+?[1-9][0-9]{7,14}$/, 'Not valid phone')
    .required('Requiere Field'),
});

const ContactForm = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { setFieldValue, errors, values, handleSubmit } = useFormik({
    initialValues: CONTACT_US,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <section className={styles.contactFrom}>
      <SuccessModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      <div className="container">
        <div className={styles.contactRow}>
          <div className="col_">
            <div className={styles.formWrapper}>
              <div className={styles.formRow}>
                <div className="col_">
                  <Input
                    error={errors.name}
                    type="text"
                    label="Name"
                    placeholder="name"
                    value={values.name}
                    onChange={(e) => setFieldValue('name', e.target.value)}
                  />
                  {errors.name && <ErrorMessage text={errors.name} />}
                </div>
                <div className="col_">
                  <Input
                    type="text"
                    label="Surname"
                    placeholder="Surname"
                    value={values.surname}
                    onChange={(e) => setFieldValue('surname', e.target.value)}
                  />
                </div>
                <div className="col_">
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Email"
                    error={errors.email}
                    value={values.email}
                    onChange={(e) => setFieldValue('email', e.target.value)}
                  />
                  {errors.email && <ErrorMessage text={errors.email} />}
                </div>
                <div className="col_">
                  <Input
                    type="tel"
                    label="Phone"
                    placeholder="Phone"
                    error={errors.phone}
                    value={values.phone}
                    onChange={(e) => setFieldValue('phone', e.target.value)}
                  />
                  {errors.phone && <ErrorMessage text={errors.phone} />}
                </div>
                <div className="col_">
                  <Input
                    type="textarea"
                    label="Message"
                    placeholder="Message"
                    value={values.message}
                    onChange={(e) => setFieldValue('message', e.target.value)}
                  />
                </div>
                <div className="col_">
                  <Input
                    type="file"
                    label="Upload File  ( PDF, JPG, PNG )"
                    placeholder="Upload File"
                    onChange={(e) => {
                      setFieldValue('file', e.target.files[0]);
                    }}
                  />
                </div>
                <div
                  className="col_"
                  onClick={() => {
                    handleSubmit();
                    setIsOpen(true);
                  }}
                >
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
