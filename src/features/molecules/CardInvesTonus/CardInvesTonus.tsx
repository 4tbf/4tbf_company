import React from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { INVES_TONUS_INFO_CARD } from '../../atoms/constantsAtoms';
import { TINvesTonus } from '../../atoms/typesAtoms';
import styles from './CardInvesTonus.module.scss';
import { useDelayedChildrenAnimation } from '../../../hooks/useDelayedChildrenAnimation';

const InvesTonusInfoCard = dynamic(
  () => import('../../atoms/InvesTonusInfoCard/InvesTonusInfoCard'),
  { ssr: false }
);

const CardInvesTonus: React.FC = () => {
  const { containerVariants, itemVariants } = useDelayedChildrenAnimation();
  return (
    <AnimatePresence>
      <div className="container">
        <div className={styles.cardItems}>
          <motion.div
            className={styles.cardInvesTonus}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="itesmRow"
          >
            {INVES_TONUS_INFO_CARD.map((current: TINvesTonus) => {
              return (
                <motion.div
                  className={styles.containerCardInvesTonus}
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
