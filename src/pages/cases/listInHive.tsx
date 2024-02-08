import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Footer from '../../components/dumb/footer/Footer';
import Header from '../../components/dumb/header/Header';
import CaseStudyIems from '../../features/molecules/case-studies-components/case-study-items/CaseStudyIems';

const ListInHiveHero = dynamic(
  () => import('../../features/molecules/listInHive-cpmponent/invesTonus-hero/listInHiveHero'),
  { ssr: false }
);
const ListInHiveAbout = dynamic(
  () => import('../../features/molecules/listInHive-cpmponent/invesTonus-about/listInHiveAbout'),
  { ssr: false }
);
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
      <ListInHiveHero />
      <ListInHiveAbout />
      <CaseStudyIems declude="listInHive" />
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
