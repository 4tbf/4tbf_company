import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './Projects.module.scss';
import Text from '../../atoms/text';
import Button from '../../../components/multiusable/button/Button';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const Projects = () => {
  const tablet = useMediaQuery('(max-width: 1279.98px)');
  const mobile = useMediaQuery('(max-width: 767.98px)');
  return (
    <section className={styles.projectsSection}>
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
                Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et commodo
                consectetur. Suspendisse semper tellus accumsan nec.
              </Text>
              <Button type="button" variant="dark" children="Work With us" />
            </div>
          </div>
        </div>
        {!mobile && (
          <div className={styles.projectsDots}>
            <button
              aria-label="dot"
              type="button"
              className={clsx(styles.dotsItem, {
                [styles.activeDots]: true,
              })}
            />
            <button
              aria-label="dot"
              type="button"
              className={clsx(styles.dotsItem, {
                [styles.activeDots]: false,
              })}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
