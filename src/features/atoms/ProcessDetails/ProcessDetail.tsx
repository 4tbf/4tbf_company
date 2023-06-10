// import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './ProcessDetail.module.scss';
import { TDetails } from '../typesAtoms';
import Text from '../text';
import { useDelayedChildrenAnimation } from '../../../hooks/useDelayedChildrenAnimation';

const ProcessDetail: React.FC<TDetails> = ({
  detailsPhase,
  imageSketch,
  title,
  description,
  phaseDeliverablesTitle,
  phaseDeliverables,
  ellipseSvg,
}) => {
  const { t } = useTranslation();
  const { containerVariants, itemVariants } = useDelayedChildrenAnimation();
  const Component = imageSketch;
  const EllipseComponent = ellipseSvg;
  return (
    <AnimatePresence>
      <section className={styles.processDetail}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.processDetailWrapper}
          key={detailsPhase}
        >
          <motion.div className={styles.processDetailLeftSection} variants={itemVariants}>
            <Text className={styles.processDetailPhase} as="p">
              {t(detailsPhase)}
            </Text>
            <Component />
          </motion.div>
          <motion.div className={styles.processDetailRightSection} variants={itemVariants}>
            <Text className={styles.processDetailTitle} as="h1">
              {t(title)}
            </Text>
            <Text className={styles.processDetailDescription} as="p">
              {t(description)}
            </Text>
            <Text className={styles.processDetailPhaseDeliverablesTitle} as="p">
              {t(phaseDeliverablesTitle)}
            </Text>
            <div>
              <div className={styles.processDetailPhaseDeliverables}>
                {phaseDeliverables.map((item) => {
                  return (
                    <div
                      className={styles.processDetailPhaseDeliverablesList}
                      key={item}
                      style={
                        phaseDeliverables?.length === 1
                          ? {
                              flex: '0 0 100%',
                              alignItems: 'baseline',
                            }
                          : {}
                      }
                    >
                      <EllipseComponent />
                      {t(item)}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default ProcessDetail;
