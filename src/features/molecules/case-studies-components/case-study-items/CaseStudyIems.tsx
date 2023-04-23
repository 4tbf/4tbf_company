import React from 'react';
import Image from 'next/image';
import styles from './CaseStudyIems.module.scss';
import Text from '../../../atoms/text';
import ArrowButton from '../../../../components/multiusable/arrow-button/ArrowButton';

const CaseStudyIems = () => {
  return (
    <section className={styles.caseStudiItems}>
      <div className="container">
        <div className={styles.itemsRow}>
          <div className="col_">
            <div className={styles.item}>
              <div className={styles.innerRow}>
                <div className="col_">
                  <div className={styles.innerContent}>
                    <div className={styles.imageWrapper}>
                      <Image
                        alt="case study"
                        src="/images/case-studies/nft.png"
                        width={576}
                        height={269}
                      />
                    </div>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.itemContent}>
                    <Text as="h2">Some title</Text>
                    <div className={styles.itemMarks}>
                      <Text as="p">PHP</Text>
                      <Text as="p">Laravel</Text>
                      <Text as="p">JavaScript</Text>
                    </div>
                    <Text as="p" className={styles.itemDescr}>
                      Lorem ipsum dolor sit amet consectetur. Fusce neque pharetra suspendisse sed
                      ullamcorper imperdiet aliquet. Justo lobortis nam nulla ac enim amet. Arcu
                      nulla platea quis viverra integer quam integer id diam. Nulla urna elit id
                      nullam. Eget odio molestie quam leo consequat suscipit ut elementum aliquam.
                    </Text>
                    <ArrowButton text="Show more" href="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.item}>
              <div className={styles.innerRow}>
                <div className="col_">
                  <div className={styles.innerContent}>
                    <div className={styles.imageWrapper}>{/* IMAGE */}</div>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.itemContent}>
                    <Text as="h2">Some title</Text>
                    <div className={styles.itemMarks}>
                      <Text as="p">PHP</Text>
                      <Text as="p">Laravel</Text>
                      <Text as="p">JavaScript</Text>
                    </div>
                    <Text as="p" className={styles.itemDescr}>
                      Lorem ipsum dolor sit amet consectetur. Fusce neque pharetra suspendisse sed
                      ullamcorper imperdiet aliquet. Justo lobortis nam nulla ac enim amet. Arcu
                      nulla platea quis viverra integer quam integer id diam. Nulla urna elit id
                      nullam. Eget odio molestie quam leo consequat suscipit ut elementum aliquam.
                    </Text>
                    <ArrowButton text="Show more" href="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyIems;
