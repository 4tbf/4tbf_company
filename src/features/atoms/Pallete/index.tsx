import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Pallete.module.scss';

const Pallete: React.FC<any> = ({ data }) => {
  return (
    <div className={styles.pallete}>
      <AnimatePresence>
        {data.map((el) =>
          el.color ? (
            <div className={styles.colorWrapper} key={el.color}>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: `#${el.color}` }}
                className={styles.color}
              />
              <p className={styles.colorTitle}>{el.color}</p>
            </div>
          ) : (
            <div className={styles.fontWrapper} key={el.font}>
              <div className={styles.font}>
                <motion.h1
                  initial={{ x: 20, opacity: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {el.font}
                </motion.h1>
                <div className={styles.fontVariants}>
                  {el.variants.map((el) => (
                    <p
                      style={{
                        fontWeight: el.fontWeight,
                      }}
                      key={el.name}
                    >
                      {el.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Pallete;
