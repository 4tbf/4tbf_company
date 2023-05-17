import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './QrReview.module.scss';
import { THOUGHTS } from './data';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';

const QrReview: React.FC = () => {
  const { t } = useTranslation();
  const tablet = useMediaQuery('(max-width: 1279.98px)');
  const mobile = useMediaQuery('(max-width: 767.98px)');
  const scope = 'cases.qr.qrReview';
  const goalsList = [t(`${scope}.second.list.item.1`), t(`${scope}.second.list.item.2`)];

  return (
    <section className={styles.qrReview}>
      <div className={styles.wrapper}>
        <div>
          <h2 className={styles.title}>{t(`${scope}.first.title`)}</h2>
          <p className={styles.description}>{t(`${scope}.first.description`)}</p>
        </div>
        <div>
          <h2 className={styles.title}>{t(`${scope}.second.title`)}</h2>
          <ul className={styles.list}>
            {goalsList.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.titleWrapper}>
          <h1>
            {t(`${scope}.main.title`)} <br />
            <span>{t(`${scope}.main.title.colored`)}</span>
          </h1>
          <p>{t(`${scope}.main.description`)}</p>
        </div>
        <AnimatePresence>
          <div className={styles.userThoughts}>
            {THOUGHTS.map((el) => (
              <div key={el.top} className={styles.usersContainer}>
                <Image
                  src={el.icon}
                  className={styles.icon}
                  width={131}
                  height={131}
                  alt="User Thoughts"
                  style={{
                    top: `${(mobile && el.topMobile) || (tablet && el.topTablet) || el.top}`,
                    left: `${(mobile && el.leftMobile) || (tablet && el.leftTablet) || el.left}`,
                    right: `${
                      (mobile && el.rightMobile) || (tablet && el.rightTablet) || el.right
                    }`,
                  }}
                />
                <Image
                  src={el.emoji}
                  alt="User Thoughts"
                  className={styles.emoji}
                  style={{
                    top: `${
                      (mobile && el.emojiTopMobile) || (tablet && el.emojiTopTablet) || el.emojiTop
                    }`,
                    left: `${
                      (mobile && el.emojiLeftMobile) ||
                      (tablet && el.emojiLeftTablet) ||
                      el.emojiLeft
                    }`,
                    right: `${
                      (mobile && el.emojiRightMobile) ||
                      (tablet && el.emojiRightTablet) ||
                      el.emojiRight
                    }`,
                  }}
                />
                <motion.div
                  className={styles.comment}
                  initial={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  key={`${el.comment}`}
                >
                  <Image
                    src={(mobile && el.commentMobile) || (tablet && el.commentTablet) || el.comment}
                    alt="User Thoughts"
                    style={{
                      top: `${
                        (mobile && el.commentTopMobile) ||
                        (tablet && el.commentTopTablet) ||
                        el.commentTop
                      }`,
                      left: `${
                        (mobile && el.commentLeftMobile) ||
                        (tablet && el.commentLeftTablet) ||
                        el.commentLeft
                      }`,
                      right: `${
                        (mobile && el.commentRightMobile) ||
                        (tablet && el.commentRightTablet) ||
                        el.commentRight
                      }`,
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QrReview;
