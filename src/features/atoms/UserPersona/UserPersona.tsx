import Image from 'next/image';
import { userData } from './data';
import styles from './UserPersona.module.scss';
import LocationIcon from '../../../components/svgs/LocationIcon';

const UserPersona = () => {
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
          <div className={styles.mainInfo}>
            <div>
              <h3 className={styles.title}>Bio</h3>
              <div className={styles.info}>{el.bio}</div>
            </div>
            <div>
              <h3 className={styles.title}>Pain Points</h3>
              <ul className={styles.infoList}>
                {el.painPoints.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={(styles.title, styles.titleGoals)}>Goals</h3>
              <ul className={styles.infoListGoals}>
                {el.goals.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPersona;
