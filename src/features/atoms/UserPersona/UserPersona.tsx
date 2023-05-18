import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { userData } from './data';
import styles from './UserPersona.module.scss';
import LocationIcon from '../../../components/svgs/LocationIcon';
import { useDelayedChildrenAnimation } from '../../../hooks/useDelayedChildrenAnimation';

const UserPersona = () => {
  const { containerVariants, itemVariants } = useDelayedChildrenAnimation();

  return (
    <div>
      {userData.map((el) => (
        <div className={styles.wrapper} key={el.name}>
          <div>
            <Image
              src={el.image}
              alt="UserImage"
              width={274}
              height={277}
              className={styles.userImage}
            />
            <h1 className={styles.userName}>{el.name}</h1>
            <p className={styles.userShortInfo}>{el.shortInfo}</p>
            <div className={styles.locationWrapper}>
              <LocationIcon />
              {el.location}
            </div>
          </div>
          <AnimatePresence>
            <motion.div
              className={styles.mainInfo}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key="mainInfo"
            >
              <motion.div variants={itemVariants} key={el.bio}>
                <h3 className={styles.title}>Bio</h3>
                <div className={styles.info}>{el.bio}</div>
              </motion.div>
              <motion.div variants={itemVariants} key={el.name}>
                <h3 className={styles.title}>Pain Points</h3>
                <ul className={styles.infoList}>
                  {el.painPoints.map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} key={el.goals[0]}>
                <h3 className={(styles.title, styles.titleGoals)}>Goals</h3>
                <ul className={styles.infoListGoals}>
                  {el.goals.map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default UserPersona;
