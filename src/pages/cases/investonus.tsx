import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../../components/dumb/header/Header';
import Footer from '../../components/dumb/footer/Footer';
import CaseStudyIems from '../../features/molecules/case-studies-components/case-study-items/CaseStudyIems';

export default function Invsetonus() {
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
      <Header />
      <CaseStudyIems declude="investonus" />
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
