import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'next-i18next';
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
import { blank } from '../../../../utils/blank';

const ContactForm = () => {
  const { t } = useTranslation();
  const validationSchema = object({
    name: string().required('contact.error'),
    email: string().email('contact.field.error.email').required('contact.error'),
    phone: string()
      .matches(/^\+?[1-9][0-9]{7,14}$/, 'contact.field.error.phone')
      .required('contact.error'),
  });

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const handleFetch = async (values: Record<string, string>) => {
    const newValues = values.file ? { ...values, file: 'FILE' } : values;

    await emailjs.send('service_e4pwdli', 'template_0hd5k5r', newValues, 's9kdGmtpc_11aAgwC');
    setIsOpen(true);
  };

  const { setFieldValue, errors, values, handleSubmit } = useFormik({
    initialValues: CONTACT_US,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      handleFetch(values);
      resetForm({ values: CONTACT_US });
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
                    label={t('contact.field.name')}
                    placeholder={t('contact.field.name')}
                    value={values.name}
                    onChange={(e) => setFieldValue('name', e.target.value)}
                  />
                  {errors.name && <ErrorMessage text={t(errors.name)} />}
                </div>
                <div className="col_">
                  <Input
                    type="text"
                    label={t('contact.field.surname')}
                    placeholder={t('contact.field.surname')}
                    value={values.surname}
                    onChange={(e) => setFieldValue('surname', e.target.value)}
                  />
                </div>
                <div className="col_">
                  <Input
                    type="email"
                    label={t('contact.field.email')}
                    placeholder={t('contact.field.email')}
                    error={errors.email}
                    value={values.email}
                    onChange={(e) => setFieldValue('email', e.target.value)}
                  />
                  {errors.email && <ErrorMessage text={t(errors.email)} />}
                </div>
                <div className="col_">
                  <Input
                    type="tel"
                    label={t('contact.field.phone')}
                    placeholder={t('contact.field.phone')}
                    error={errors.phone}
                    value={values.phone}
                    onChange={(e) => setFieldValue('phone', e.target.value)}
                  />
                  {errors.phone && <ErrorMessage text={t(errors.phone)} />}
                </div>
                <div className="col_">
                  <Input
                    type="textarea"
                    label={t('contact.field.message')}
                    placeholder={t('contact.field.message')}
                    value={values.message}
                    onChange={(e) => setFieldValue('message', e.target.value)}
                  />
                </div>
                <div className="col_">
                  <Input
                    type="file"
                    label={t('contact.field.upload')}
                    placeholder={t('contact.field.upload.placeholder')}
                    value={values.file}
                    hanldeFileDelete={() => setFieldValue('file', null)}
                    onChange={(e) => {
                      setFieldValue('file', e.target.files[0]);
                    }}
                  />
                </div>
                <div
                  className="col_"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  <Button type="submit" children={t('contact.form.submit')} />
                </div>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.getInTouch}>
              <div className={styles.getInTouchTop}>
                <Text className={styles.getInTouchTitle} as="h2">
                  {t('contact.getinTouch')}
                </Text>
                <Link href="mailto:4tbf.company@gmail.com">4tbf.company@gmail.com</Link>
                <Link href="tel:+374 99 62 45 53">+374 (99) 62-45-53</Link>
                <Link href="tel:+1 661 401 5426">+1 (661) 401-5426</Link>

                <div className={styles.socialList}>
                  <div onClick={() => blank('https://www.linkedin.com/company/93818519')}>
                    <LinkedInIcon />
                  </div>
                  <div onClick={() => blank('https://twitter.com/4tbf_company')}>
                    <TwiiterIcon />
                  </div>
                  <div
                    onClick={() =>
                      blank('https://www.facebook.com/people/4The-Bright-Future/100091433303988')
                    }
                  >
                    <FacebookIcon />
                  </div>
                  <div onClick={() => blank('https://www.instagram.com/4the.brightfuture')}>
                    <InstagramIcon />
                  </div>
                </div>
              </div>
              {/* <div className={styles.getInTouchBottom}>
                <Text className={styles.getInTouchTitle} as="h2">
                  Visit Us
                </Text>
                <Text className={styles.getInTouchAddress} as="p">
                  Aystex karox e linel dzer hascen
                </Text>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
