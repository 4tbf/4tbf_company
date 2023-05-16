import React from 'react';
import styles from './Pallete.module.scss';

const Pallete: React.FC<any> = ({ data }) => {
  return (
    <div className={styles.pallete}>
      {data.map((el) =>
        el.color ? (
          <div className={styles.colorWrapper} key={el.color}>
            <div style={{ backgroundColor: `#${el.color}` }} className={styles.color} />
            <p className={styles.colorTitle}>{el.color}</p>
          </div>
        ) : (
          <div className={styles.fontWrapper} key={el.font}>
            <div className={styles.font}>
              <h1>{el.font}</h1>
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
    </div>
  );
};

export default Pallete;
