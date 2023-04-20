import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import AboutHero from '../features/molecules/about/about-hero/AboutHero';
import WhoWe from '../features/molecules/about/who-we/WhoWe';
import Progress from '../features/molecules/about/progress/Progress';

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
      <Head>
        <title>4The BRIGHT Future</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
