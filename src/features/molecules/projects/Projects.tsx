/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Projects.module.scss';
import Text from '../../atoms/text';
import Button from '../../../components/multiusable/button/Button';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useBackbroundColor } from '../../../hooks/useBackgroundColor';
import { useCardVariants } from '../../../hooks/useCardVariants';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const tablet = useMediaQuery('(max-width: 1279.98px) and (min-width: 768px)');
  const mobile = useMediaQuery('(max-width: 767.98px)');
  const router = useRouter();
  const { t } = useTranslation();
  const background = useBackbroundColor(hoveredProject);
  const cardVariants = useCardVariants();

  return (
    <section
      className={styles.projectsSection}
      style={{
        backgroundColor: !tablet && !mobile ? background : '#FFFFF',
      }}
    >
      <div className="container">
        <div className={styles.itemOfProjects}>
          <AnimatePresence>
            <motion.div
              className={styles.projectsContainer}
              onMouseEnter={() => setHoveredProject('1')}
              onMouseLeave={() => setHoveredProject(null)}
              key={mobile ? '1.mobile' : '1'}
              viewport={mobile ? {} : { once: true, amount: 0.8 }}
              initial={mobile ? '' : 'offscreen'}
              whileInView={mobile ? '' : 'onscreen'}
            >
              <motion.div
                className={styles.projectsRow}
                variants={mobile ? undefined : cardVariants}
                key={mobile ? '1.1.mobile' : '1.1'}
              >
                <div className="col_">
                  <div className={styles.projecstsImage}>
                    <img
                      width={1447}
                      height={1400}
                      alt="project-nfc"
                      srcSet="
                      /images/home-projects/nfc-image.png 1x,
                      /images/home-projects/tablet_nfc-image-2x.png 2x,
                      /images/home-projects/mobile_nfc-image-3x.png 3x"
                      sizes="(max-width: 1279.98px) 100vw 1279.98px"
                    />
                  </div>
                </div>

                <div className="col_">
                  <div className={styles.aboutProjectInfo}>
                    <Text as="p" className={styles.projectName}>
                      {t('main.cases.title')}
                    </Text>
                    <Text as="h2" className={styles.projectTitle}>
                      {t('main.cases.nfcs.title')}
                    </Text>
                    <Text as="p" className={styles.projectDescr}>
                      {t('main.cases.nfcs.subtitle')}
                    </Text>
                    <Button
                      onClick={() => window.open('https://www.nfcs.space/', '_ blank')}
                      type="button"
                      variant="dark"
                      children={t('main.cases.goToCas')}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className={styles.projectsContainer}
              onMouseEnter={() => setHoveredProject('2')}
              onMouseLeave={() => setHoveredProject(null)}
              key={mobile ? '2.mobile' : '2'}
              viewport={mobile ? {} : { once: true, amount: 0.8 }}
              initial={mobile ? '' : 'offscreen'}
              whileInView={mobile ? '' : 'onscreen'}
            >
              <motion.div
                className={styles.projectsRow}
                variants={mobile ? undefined : cardVariants}
                key={mobile ? '2.2.mobile' : '2.2'}
              >
                <div className="col_">
                  <div className={styles.projecstsImage}>
                    <img
                      width={1447}
                      height={1400}
                      alt="project-invest"
                      srcSet="
                      /images/home-projects/invest-image.png 1x,
                      /images/home-projects/tablet_invest-image-2x.png 2x,
                      /images/home-projects/mobile_invest-image-3x.png 3x"
                      sizes="(max-width: 1279.98px) 100vw 1279.98px"
                    />
                  </div>
                </div>

                <div className="col_">
                  <div className={styles.aboutProjectInfo}>
                    <Text as="p" className={styles.projectName}>
                      {t('main.cases.title')}
                    </Text>
                    <Text as="h2" className={styles.projectTitle}>
                      {t('main.cases.investonus.title')}
                    </Text>
                    <Text as="p" className={styles.projectDescr}>
                      {t('main.cases.investonus.subtitle')}
                    </Text>
                    <Button
                      onClick={() => window.open('https://investonus.pro/', '_ blank')}
                      type="button"
                      variant="dark"
                      children={t('main.cases.goToCas')}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className={styles.projectsContainer}
              onMouseEnter={() => setHoveredProject('3')}
              onMouseLeave={() => setHoveredProject(null)}
              key={mobile ? '3.mobile' : '3'}
              viewport={mobile ? {} : { once: true, amount: 0.8 }}
              initial={mobile ? '' : 'offscreen'}
              whileInView={mobile ? '' : 'onscreen'}
            >
              <motion.div
                className={styles.projectsRow}
                variants={mobile ? undefined : cardVariants}
                key={mobile ? '3.1.mobile' : '3.1'}
              >
                <div className="col_">
                  <div className={styles.projecstsImage}>
                    <img
                      width={1447}
                      height={1400}
                      alt="project-qr"
                      srcSet="
                      /images/home-projects/qr-image.png 1x,
                      /images/home-projects/tablet_qr-image-2x.png 2x,
                      /images/home-projects/mobile_qr-image-3x.png 3x"
                      sizes="(max-width: 1279.98px) 100vw 1279.98px"
                    />
                  </div>
                </div>

                <div className="col_">
                  <div className={styles.aboutProjectInfo}>
                    <Text as="p" className={styles.projectName}>
                      {t('main.cases.title')}
                    </Text>
                    <Text as="h2" className={styles.projectTitle}>
                      {t('main.cases.qr.title')}
                    </Text>
                    <Text as="p" className={styles.projectDescr}>
                      {t('main.cases.qr.subtitle')}
                    </Text>
                    <Button
                      onClick={() => router.push('/case-studies')}
                      type="button"
                      variant="dark"
                      children={t('main.cases.goToCas')}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
