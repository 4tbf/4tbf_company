import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Header from '../../components/dumb/header/Header';
import Footer from '../../components/dumb/footer/Footer';
import QrSteps from '../../features/molecules/qr-components/QrSteps';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const QrHero = dynamic(() => import('../../features/molecules/qr-components/QrHero'), {
  ssr: false,
});

const QrReview = dynamic(() => import('../../features/molecules/qr-components/QrReview'), {
  ssr: false,
});
const QrWireframes = dynamic(() => import('../../features/molecules/qr-components/QrWireframes'), {
  ssr: false,
});

const OtherCases = dynamic(() => import('../../features/atoms/OtherCases'), {
  ssr: false,
});

export default function QR() {
  const tablet = useMediaQuery('(max-width: 1279.98px)');
  const mobile = useMediaQuery('(max-width: 767.98px)');

  return (
    <motion.div
      className="qr-page"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{
        ease: 'linear',
        type: 'tween',
        duration: 1,
        x: { duration: 1 },
      }}
      style={{
        backgroundImage:
          (mobile && 'url(/images/qr/bg-mobile.webp)') ||
          (tablet && 'url(/images/qr/bg-tablet.webp)') ||
          'url(/images/qr/review-bg.webp)',
      }}
    >
      <Head>
        <title>4The BRIGHT Future</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <QrHero />
      <QrReview />
      <QrWireframes />
      <QrSteps />
      <OtherCases />
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
