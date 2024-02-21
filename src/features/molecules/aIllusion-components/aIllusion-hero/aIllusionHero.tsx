import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import LongArrow from '../../../../components/svgs/LongArrow';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import styles from './aIllusionHero.module.scss';

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
                          {t('cases.aIllusion.title')}
                        </motion.h1>
                        <motion.p
                          initial={{ x: -1000, scale: 0.7 }}
                          animate={{ x: 0, scale: 1 }}
                          transition={{ duration: 0.8 }}
                          key={t('invesTonus.subtitle')}
                        >
                          {' '}
                          {t('cases.aIllusion.subtitle')}
                        </motion.p>
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
                unoptimized
                className="invesTonus_hero_image"
                width={421}
                height={368}
                src="/images/aillusion/aIllusionPageMainSmall.png"
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
                        {t('cases.aIllusion.title')}
                      </motion.h1>
                      <motion.p
                        initial={{ x: -1000, scale: 0.7 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        key="invesTonus.subtitle.5"
                      >
                        {' '}
                        {t('cases.aIllusion.subtitle')}
                      </motion.p>
                    </div>
                    <div className={styles.invesTonusHerocontainer}>
                      <motion.div
                        className={styles.invesTonusPageImg}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        key="invesTonus.arow.7"
                      >
                        <Image
                          unoptimized
                          className="invesTonus_hero_image"
                          width={577}
                          height={506}
                          src="/images/aillusion/aIllusionPageMain.png"
                          alt="page"
                        />
                      </motion.div>
                    </div>
                  </div>{' '}
                </div>
              ) : (
                <div className={styles.invesTonusHeroDesk}>
                  <div className={styles.mainLeftSide}>
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
                      className={styles.mainText}
                      key="invesTonus.title.10"
                    >
                      {t('aIllusion.title')}
                    </motion.h1>
                    <motion.p
                      initial={{ x: -1000, scale: 0.7 }}
                      animate={{ x: 0, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      key="invesTonus.subtitle.11"
                    >
                      {' '}
                      {t('cases.aIllusion.subtitle')}
                    </motion.p>
                  </div>
                  <motion.div
                    className={styles.invesTonusPageImg}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key="invesTonus.arow.13"
                  >
                    <Image
                      unoptimized
                      className="invesTonus_hero_image"
                      width={577}
                      height={506}
                      src="/images/aillusion/aIllusionPageMain.png"
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
