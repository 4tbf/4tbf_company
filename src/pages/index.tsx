import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>4TBF</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      {/* <main className={styles.main}>
        <section
          className={styles.heroSection}
          style={{ backgroundImage: 'url(/images/brand_image.png)' }}
        >
          <div className="container">
            <div className={styles.heroRow}>
              <div className="col_">
                <p className={styles.subTitle}>
                  Hit a line and our friendly folks will get back to you as soon as possible.
                </p>
                <h1>Stex Mi Hat Bomb Title Mrrr</h1>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.scrolledSection}>
          <div className={styles.scroledItems}>
            <div className={styles.scroledItem}>
              <p>Quality assurance</p>
            </div>
            <div className={styles.scroledItem}>
              <p>Safety</p>
            </div>
            <div className={styles.scroledItem}>
              <p>modernity</p>
            </div>
            <div className={styles.scroledItem}>
              <p>rapidity</p>
            </div>
            <div className={styles.scroledItem}>
              <p>adaptability</p>
            </div>
            <div className={styles.scroledItem}>
              <p>uniqueness</p>
            </div>
          </div>
        </section>
        <section className={styles.ourServices}>
          <div className="container">
            <div className={styles.servicesRow}>
              <div className="col_">
                <div className={styles.mainItem}>
                  <h2 className={styles.mainTitle}>OUR SERVICES</h2>
                  <Link href="#" className={styles.arrowLink}>
                    Show more <LongArrowIcon />
                  </Link>
                </div>
              </div>
              <div className="col_">
                <Link href="#" className={styles.clasicItem}>
                  <div className={styles.imageItem}>
                    <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
                  </div>
                  <h2 className={styles.serviceTitle}>Web Development</h2>
                  <p className={styles.serviceDescr}>
                    Hit a line and our friendly folks will get back to you as soon as possible.
                  </p>
                </Link>
              </div>
              <div className="col_">
                <Link href="#" className={styles.clasicItem}>
                  <div className={styles.imageItem}>
                    <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
                  </div>
                  <h2 className={styles.serviceTitle}>Web Development</h2>
                  <p className={styles.serviceDescr}>
                    Hit a line and our friendly folks will get back to you as soon as possible.
                  </p>
                </Link>
              </div>
              <div className="col_">
                <Link href="#" className={styles.clasicItem}>
                  <div className={styles.imageItem}>
                    <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
                  </div>
                  <h2 className={styles.serviceTitle}>Web Development</h2>
                  <p className={styles.serviceDescr}>
                    Hit a line and our friendly folks will get back to you as soon as possible.
                  </p>
                </Link>
              </div>
              <div className="col_">
                <Link href="#" className={styles.clasicItem}>
                  <div className={styles.imageItem}>
                    <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
                  </div>
                  <h2 className={styles.serviceTitle}>Web Development</h2>
                  <p className={styles.serviceDescr}>
                    Hit a line and our friendly folks will get back to you as soon as possible.
                  </p>
                </Link>
              </div>
              <div className="col_">
                <Link href="#" className={styles.clasicItem}>
                  <div className={styles.imageItem}>
                    <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
                  </div>
                  <h2 className={styles.serviceTitle}>Web Development</h2>
                  <p className={styles.serviceDescr}>
                    Hit a line and our friendly folks will get back to you as soon as possible.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main> */}
      <main className={styles.soon}>
        <h1>coming soon</h1>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
