import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import OurServicesHero from '../features/molecules/our-services-components/our-services-hero/OurServicesHero';
import Technologies from '../features/molecules/our-services-components/technologies/Technologies';
import Industries from '../features/molecules/our-services-components/induscries/Industries';

export default function OurServices() {
  return (
    <motion.div
      className="services-page"
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
      <main>
        <OurServicesHero />
        <Technologies />
        <Industries />
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
