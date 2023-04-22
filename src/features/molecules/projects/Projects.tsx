import React from 'react';
import Image from 'next/image';
import styles from './Projects.module.scss';
import Text from '../../atoms/text';
import Button from '../../../components/multiusable/button/Button';

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsRow}>
          <div className="col_">
            <div className={styles.projecstsImage}>
              <Image alt="image" src="/images/home-projects/nfc-image.pnf" />
            </div>
          </div>
          <div className="col_">
            <div className={styles.aboutProjectInfo}>
              <Text as="p" className={styles.projectName}>
                Platform name
              </Text>
              <Text as="h2" className={styles.projectTitle}>
                about project two words
              </Text>
              <Text as="p" className={styles.projectDescr}>
                Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et commodo
                consectetur. Suspendisse semper tellus accumsan nec.
              </Text>
              <Button type="button" variant="dark" children="Work With us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
