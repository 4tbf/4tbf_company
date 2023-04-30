import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Header from '../../components/dumb/header/Header';
import Footer from '../../components/dumb/footer/Footer';
import CaseStudyIems from '../../features/molecules/case-studies-components/case-study-items/CaseStudyIems';
import NfcsHero from '../../features/molecules/nfcs-components/nfcs-hero/NfcsHero';
import NfcsAbout from '../../features/molecules/nfcs-components/nfcs-about/NfcsAbout';

export default function NFCS() {
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
      <NfcsHero />
      <Image
        className="nfcs_hero_image"
        width={1435}
        height={913}
        src="/images/nfcs/nfcs-hero.png"
        alt="page"
      />
      <NfcsAbout />
      <CaseStudyIems declude="nfcs" />
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