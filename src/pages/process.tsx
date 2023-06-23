import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import SEO from '../components/multiusable/SEO/SEO';
import ProcessHero from '../features/molecules/process/process-hero/ProcessHero';
import ProcessAbout from '../features/molecules/process/process-about/ProcessAbout';

export default function Process() {
  return (
    <motion.div
      className="calc-page"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{
        ease: 'linear',
        type: 'tween',
        duration: 1,
        x: { duration: 1 },
      }}
    >
      <Head>
        <title>4The BRIGHT Future</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEO
        description="4TBF (For The Bright Future) is a web and mobile app development company that creates innovative and custom solutions for businesses of all sizes. Contact us to start building your next digital solution today."
        title="Spark your success with our bright development solutions."
        url="https://www.4tbf.company/process"
        image="meta_main.png"
      />
      <Header />
      <main>
        <ProcessHero />
        <ProcessAbout />
      </main>
      <Footer />
    </motion.div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
