import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import AboutHero from '../features/molecules/about/about-hero/AboutHero';
import WhoWe from '../features/molecules/about/who-we/WhoWe';
import Progress from '../features/molecules/about/progress/Progress';
import SEO from '../components/multiusable/SEO/SEO';

export default function About() {
  return (
    <motion.div
      className="about-page"
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
      <SEO
        description="4TBF (For The Bright Future) is a web and mobile app development company that creates innovative and custom solutions for businesses of all sizes. Contact us to start building your next digital solution today."
        title="Spark your success with our bright development solutions."
        url="https://www.4tbf.company/about"
        image="meta_main.png"
      />
      <Header />
      <main>
        <AboutHero />
        <WhoWe />
        <Progress />
      </main>
      <Footer />
      <main />
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
