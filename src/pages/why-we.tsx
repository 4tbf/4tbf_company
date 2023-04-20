import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import WhyWeHero from '../features/molecules/why-we-components/why-we-hero/WhyWeHero';
import WhyWeItems from '../features/molecules/why-we-components/why-we-items/WhyWeItems';

export default function WhyWe() {
  return (
    <motion.div
      className="why-we-page"
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
        <WhyWeHero />
        <WhyWeItems />
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
