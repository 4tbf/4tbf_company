import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import promocodeImage from 'public/images/nfcs/promocode-min.png';
import promocodeImageMobile from 'public/images/nfcs/promocode-mobile.png';
import { AnimatePresence, motion } from 'framer-motion';
import { memo } from 'react';
import styles from './MyPromocode.module.scss';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const MyPromocode = () => {
  const { t } = useTranslation();
  const mobile = useMediaQuery('(max-width: 767.98px)');
  const listItems = [
    t('cases.nfcs.promocode.list.1'),
    t('cases.nfcs.promocode.list.2'),
    t('cases.nfcs.promocode.list.3'),
  ];

  return (
    <div>
      <h1 className={styles.title}>{t('cases.nfcs.promocode.title')}</h1>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.info}>{t('cases.nfcs.promocode.info')}</p>
          <ul className={styles.list}>
            {listItems.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
          <p className={styles.description}>{t('cases.nfcs.promocode.description')}</p>
        </div>
        <AnimatePresence>
          <motion.div
            className={styles.promocodeImage}
            initial={{ x: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key="promocodeImage"
          >
            <Image
              src={mobile ? promocodeImageMobile : promocodeImage}
              alt="nfcs"
              className={styles.promocodeImage}
              width={888}
              height={474}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default memo(MyPromocode);
