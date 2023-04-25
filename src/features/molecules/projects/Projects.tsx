import React from 'react';
import Image from 'next/image';
import styles from './Projects.module.scss';
import Text from '../../atoms/text';
import Button from '../../../components/multiusable/button/Button';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const Projects = () => {
  const tablet = useMediaQuery('(max-width: 1279.98px) and (min-width: 768px)');
  const mobile = useMediaQuery('(max-width: 767.98px)');
  return (
    <section className={styles.projectsSection}>
      <div className="container">
        <div className={styles.itemOfProjects}>
          <div className={styles.projectsContainer}>
            <div className={styles.projectsRow}>
              <div className="col_">
                <div className={styles.projecstsImage}>
                  <Image
                    width={1447}
                    height={1400}
                    alt="image"
                    src={
                      tablet
                        ? '/images/home-projects/tablet_nfc-image.png'
                        : mobile
                        ? '/images/home-projects/mobile_nfc-image.png'
                        : '/images/home-projects/nfc-image.png'
                    }
                  />
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
                    Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et
                    commodo consectetur. Suspendisse semper tellus accumsan nec.
                  </Text>
                  <Button type="button" variant="dark" children="Work With us" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectsContainer}>
            <div className={styles.projectsRow}>
              <div className="col_">
                <div className={styles.projecstsImage}>
                  <Image
                    width={1447}
                    height={1400}
                    alt="image"
                    src={
                      tablet
                        ? '/images/home-projects/tablet_invest-image.png'
                        : mobile
                        ? '/images/home-projects/mobile_invest-image.png'
                        : '/images/home-projects/invest-image.png'
                    }
                  />
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
                    Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et
                    commodo consectetur. Suspendisse semper tellus accumsan nec.
                  </Text>
                  <Button type="button" variant="dark" children="Work With us" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectsContainer}>
            <div className={styles.projectsRow}>
              <div className="col_">
                <div className={styles.projecstsImage}>
                  <Image
                    width={1447}
                    height={1400}
                    alt="image"
                    src={
                      tablet
                        ? '/images/home-projects/tablet_qr-image.png'
                        : mobile
                        ? '/images/home-projects/mobile_qr-image.png'
                        : '/images/home-projects/qr-image.png'
                    }
                  />
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
                    Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et
                    commodo consectetur. Suspendisse semper tellus accumsan nec.
                  </Text>
                  <Button type="button" variant="dark" children="Work With us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
