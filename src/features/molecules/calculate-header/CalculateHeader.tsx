import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CalculateHeader.module.scss';

const CalculateHeader = ({ title, descr }: { title: string; descr: string }) => {
  return (
    <section className={styles.calculateHeader}>
      <div className="container">
        <AnimatePresence>
          <motion.h1
            className={styles.title}
            initial={{ x: -1000, scale: 0.7 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            key={title}
          >
            {title}
          </motion.h1>
          <motion.p
            className={styles.descr}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={descr}
          >
            {descr}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CalculateHeader;
