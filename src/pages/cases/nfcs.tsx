import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Header from '../../components/dumb/header/Header';
import Footer from '../../components/dumb/footer/Footer';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const NfcsAbout = dynamic(
  () => import('../../features/molecules/nfcs-components/nfcs-about/NfcsAbout'),
  { ssr: false }
);

const NfcsHero = dynamic(
  () => import('../../features/molecules/nfcs-components/nfcs-hero/NfcsHero'),
  { ssr: false }
);

export default function NFCS() {
  const mobile = useMediaQuery('(max-width: 767.98px)');

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
        src={mobile ? '/images/nfcs/nfcs-hero-mobile.png' : '/images/nfcs/nfcs-hero.png'}
        alt="page"
      />
      <NfcsAbout />
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
