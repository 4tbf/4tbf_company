import React, { useState } from 'react';
import Image from 'next/image';
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
              key="1"
              viewport={{ once: true, amount: 0.8 }}
              initial="offscreen"
              whileInView="onscreen"
            >
              <motion.div className={styles.projectsRow} variants={cardVariants} key="1.1">
                <div className="col_">
                  <div className={styles.projecstsImage}>
                    <Image
                      width={1447}
                      height={1400}
                      alt="image"
                      src={
                        tablet
                          ? '/images/home-projects/tablet_nfc-image.png'
                          : mobile
                          ? '/images/home-projects/mobile_nfc-image.png'
                          : '/images/home-projects/nfc-image.png'
                      }
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
                      onClick={() => router.push('/cases/nfcs')}
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
              viewport={{ once: true, amount: 0.8 }}
              initial="offscreen"
              whileInView="onscreen"
              key="2"
            >
              <motion.div className={styles.projectsRow} variants={cardVariants} key="2.1">
                <div className="col_">
                  <div className={styles.projecstsImage}>
                    <Image
                      width={1447}
                      height={1400}
                      alt="image"
                      src={
                        tablet
                          ? '/images/home-projects/tablet_invest-image.png'
                          : mobile
                          ? '/images/home-projects/mobile_invest-image.png'
                          : '/images/home-projects/invest-image.png'
                      }
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
                      onClick={() => router.push('/cases/investonus')}
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
              viewport={{ once: true, amount: 0.8 }}
              initial="offscreen"
              whileInView="onscreen"
              key="3"
            >
              <motion.div className={styles.projectsRow} variants={cardVariants} key="3.1">
                <div className="col_">
                  <div className={styles.projecstsImage}>
                    <Image
                      width={1447}
                      height={1400}
                      alt="image"
                      src={
                        tablet
                          ? '/images/home-projects/tablet_qr-image.png'
                          : mobile
                          ? '/images/home-projects/mobile_qr-image.png'
                          : '/images/home-projects/qr-image.png'
                      }
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
                      onClick={() => router.push('/cases/qr')}
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
