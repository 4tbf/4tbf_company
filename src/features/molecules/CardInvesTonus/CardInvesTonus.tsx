import React from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  AILLUSION_INFO_CARS,
  INVES_TONUS_INFO_CARD,
  LIST_IN_HIVE_INFO_CARD,
} from '../../atoms/constantsAtoms';
import { TINvesTonus } from '../../atoms/typesAtoms';
import styles from './CardInvesTonus.module.scss';
import { useDelayedChildrenAnimation } from '../../../hooks/useDelayedChildrenAnimation';

const InvesTonusInfoCard = dynamic(
  () => import('../../atoms/InvesTonusInfoCard/InvesTonusInfoCard'),
  { ssr: false }
);

const CardInvesTonus: React.FC<{ forListInHive?: boolean; forAIllusion?: boolean }> = ({
  forListInHive,
  forAIllusion,
}) => {
  const { containerVariants, itemVariants } = useDelayedChildrenAnimation();
  const { locale } = useRouter();
  return (
    <AnimatePresence>
      <div className="container">
        <div className={styles.cardItems}>
          <motion.div
            className={`${locale === 'en' ? styles.cardInvesTonus : styles.cardInvesTonusRu}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="itesmRow"
          >
            {(forListInHive
              ? LIST_IN_HIVE_INFO_CARD
              : forAIllusion
              ? AILLUSION_INFO_CARS
              : INVES_TONUS_INFO_CARD
            ).map((current: TINvesTonus) => {
              return (
                <motion.div
                  className={
                    forListInHive ? styles.cardInvesTonusListInHive : styles.containerCardInvesTonus
                  }
                  variants={itemVariants}
                  key={current.info}
                >
                  <InvesTonusInfoCard
                    key={current.title}
                    title={current.title}
                    info={current.info}
                    icon={current.icon}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default CardInvesTonus;
