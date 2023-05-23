import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import LongArrow from '../../../../components/svgs/LongArrow';
import styles from './InvesTonusHero.module.scss';
import Button from '../../../../components/multiusable/button/Button';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';

const InvesTonusHero = () => {
  const tablet = useMediaQuery('(max-width: 1279.98px)');
  const mobile = useMediaQuery('(max-width: 767.98px)');
  const { t } = useTranslation();
  const route = useRouter();
  return (
    <AnimatePresence>
      <div>
        {mobile ? (
          <div>
            <div className="container">
              <section className={styles.invesTonusHero}>
                {tablet ? (
                  <div>
                    {' '}
                    <div>
                      <div>
                        {' '}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          key="invesTonus.arow.1"
                        >
                          <Link onClick={() => route.back()} href="/" className={styles.arrowLink}>
                            <LongArrow />
                          </Link>
                        </motion.div>
                        <motion.h1
                          initial={{ x: -1000, scale: 0.7 }}
                          animate={{ x: 0, scale: 1 }}
                          transition={{ duration: 0.8 }}
                          key={t('invesTonus.title')}
                        >
                          {t('invesTonus.title')}
                        </motion.h1>
                        <motion.p
                          initial={{ x: -1000, scale: 0.7 }}
                          animate={{ x: 0, scale: 1 }}
                          transition={{ duration: 0.8 }}
                          key={t('invesTonus.subtitle')}
                        >
                          {' '}
                          {t('invesTonus.subtitle')}
                        </motion.p>
                      </div>
                      <div className={styles.invesTonusHerocontainer}>
                        <motion.div
                          className={styles.invesTonusWiewBtn}
                          initial={{ x: -1000, scale: 0.7 }}
                          animate={{ x: 0, scale: 1 }}
                          transition={{ duration: 0.8 }}
                          key="invesTonus.subtitle.2"
                        >
                          <Button href="https://investonus.pro/" target="_blank">
                            {t('invesTonus.view.website')}
                          </Button>
                        </motion.div>
                      </div>
                    </div>{' '}
                  </div>
                ) : null}
              </section>
            </div>
            <motion.div
              className={styles.invesTonusPageImg}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={t('invesTonus.arow')}
            >
              <Image
                className="invesTonus_hero_image"
                width={780}
                height={316}
                src="/images/invesTonus/invesTonus-hero.png"
                alt="page"
              />
            </motion.div>
          </div>
        ) : (
          <div className="container">
            <section className={styles.invesTonusHero}>
              {tablet ? (
                <div>
                  {' '}
                  <div>
                    <div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        key="invesTonus.arow.3"
                      >
                        <Link onClick={() => route.back()} href="/" className={styles.arrowLink}>
                          <LongArrow />
                        </Link>
                      </motion.div>
                      <motion.h1
                        initial={{ x: -1000, scale: 0.7 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        key="invesTonus.title.4"
                      >
                        {t('invesTonus.title')}
                      </motion.h1>
                      <motion.p
                        initial={{ x: -1000, scale: 0.7 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        key="invesTonus.subtitle.5"
                      >
                        {' '}
                        {t('invesTonus.subtitle')}
                      </motion.p>
                    </div>
                    <div className={styles.invesTonusHerocontainer}>
                      <motion.div
                        className={styles.invesTonusWiewBtn}
                        initial={{ x: -1000, scale: 0.7 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        key="invesTonus.subtitle.6"
                      >
                        <Button href="https://investonus.pro/" target="_blank">
                          {t('invesTonus.view.website')}
                        </Button>
                      </motion.div>
                      <motion.div
                        className={styles.invesTonusPageImg}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        key="invesTonus.arow.7"
                      >
                        <Image
                          className="invesTonus_hero_image"
                          width={577}
                          height={506}
                          src="/images/invesTonus/invesTonus-hero.png"
                          alt="page"
                        />
                      </motion.div>
                    </div>
                  </div>{' '}
                </div>
              ) : (
                <div className={styles.invesTonusHeroDesk}>
                  <div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      key="invesTonus.arow.9"
                    >
                      <Link onClick={() => route.back()} href="/" className={styles.arrowLink}>
                        <LongArrow />
                      </Link>
                    </motion.div>
                    <motion.h1
                      initial={{ x: -1000, scale: 0.7 }}
                      animate={{ x: 0, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      key="invesTonus.title.10"
                    >
                      {t('invesTonus.title')}
                    </motion.h1>
                    <motion.p
                      initial={{ x: -1000, scale: 0.7 }}
                      animate={{ x: 0, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      key="invesTonus.subtitle.11"
                    >
                      {' '}
                      {t('invesTonus.subtitle')}
                    </motion.p>
                    <motion.div
                      className={styles.invesTonusWiewBtn}
                      initial={{ x: -1000, scale: 0.7 }}
                      animate={{ x: 0, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      key="invesTonus.subtitle.12"
                    >
                      <Button href="https://investonus.pro/" target="_blank">
                        {t('invesTonus.view.website')}
                      </Button>
                    </motion.div>
                  </div>
                  <motion.div
                    className={styles.invesTonusPageImg}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key="invesTonus.arow.13"
                  >
                    <Image
                      className="invesTonus_hero_image"
                      width={577}
                      height={506}
                      src="/images/invesTonus/invesTonus-hero.png"
                      alt="page"
                    />
                  </motion.div>
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
export default InvesTonusHero;
