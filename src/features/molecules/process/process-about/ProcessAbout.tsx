import React from 'react';
import { useTranslation } from 'next-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './ProcessAbout.module.scss';
import { TDetails } from '../../../atoms/typesAtoms';
import { PROCESS_DETAILS } from '../../../atoms/constantsAtoms';
import ProcessDetail from '../../../atoms/ProcessDetails/ProcessDetail';
import { useDelayedChildrenAnimation } from '../../../../hooks/useDelayedChildrenAnimation';

const ProcessAbout = () => {
  const { t } = useTranslation();
  const { containerVariants, itemVariants } = useDelayedChildrenAnimation();

  return (
    <AnimatePresence>
      <section className={styles.processAbout}>
        <div className="container">
          <div className={styles.processAboutFirstSection}>
            <div className={styles.processAboutTitleWrapper}>
              <div className={styles.processAboutSubtitle}>{t('process.about.subtitle')}</div>
              <div className={styles.processAboutTitle}>{t('process.about.title')}</div>
            </div>
            <div className={styles.processPrefaceAboutTitle}>
              {t('process.about.processPrefacTitle')}
            </div>
          </div>
          <motion.div
            key="PROCESS_DETAILS"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.processAboutDetailSection}
          >
            {PROCESS_DETAILS.map((current: TDetails) => {
              return (
                <motion.div key={current.title} variants={itemVariants}>
                  <ProcessDetail
                    key={current.title}
                    detailsPhase={current.detailsPhase}
                    imageSketch={current.imageSketch}
                    title={current.title}
                    description={current.description}
                    phaseDeliverablesTitle={current.phaseDeliverablesTitle}
                    phaseDeliverables={current.phaseDeliverables}
                    ellipseSvg={current.ellipseSvg}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default ProcessAbout;
