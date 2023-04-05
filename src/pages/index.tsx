import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/header/Header';
import styles from './index.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>4The BRIGHT Future</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section
          className={styles.heroSection}
          style={{ backgroundImage: 'url(/images/hero_bg.png)' }}
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
