import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { userData } from './data';
import styles from './UserPersona.module.scss';
import LocationIcon from '../../../components/svgs/LocationIcon';
import { useDelayedChildrenAnimation } from '../../../hooks/useDelayedChildrenAnimation';
import Text from '../text';

const UserPersona = () => {
  const { containerVariants, itemVariants } = useDelayedChildrenAnimation();
  const { t } = useTranslation();

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
            <Text as="h1" className={styles.userName}>
              {t(el.name)}
            </Text>
            <Text as="p" className={styles.userShortInfo}>
              {t(el.shortInfo)}
            </Text>
            <div className={styles.locationWrapper}>
              <LocationIcon />
              {t(el.location)}
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
                <Text as="h2" className={styles.title}>
                  {t('cases.nfcs.user.person.bio.title')}
                </Text>
                <div className={styles.info}>{t(el.bio)}</div>
              </motion.div>
              <motion.div variants={itemVariants} key={el.name}>
                <Text as="h2" className={styles.title}>
                  {t('cases.nfcs.user.person.pain.points')}
                </Text>
                <ul className={styles.infoList}>
                  {el.painPoints.map((el) => (
                    <li key={el}>{t(el)}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} key={el.goals[0]}>
                <Text as="h2" className={(styles.title, styles.titleGoals)}>
                  {t('cases.nfcs.user.person.pain.goals')}
                </Text>
                <ul className={styles.infoListGoals}>
                  {el.goals.map((el) => (
                    <li key={el}>{t(el)}</li>
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
