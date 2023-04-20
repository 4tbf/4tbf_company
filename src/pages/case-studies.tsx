import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import CaseStudiesHero from '../features/molecules/case-studies-components/case-studies-hero/CaseStudiesHero';
import CaseStudyIems from '../features/molecules/case-studies-components/case-study-items/CaseStudyIems';

export default function CaeStudies() {
  return (
    <motion.div
      className="case-studies-page"
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
        <CaseStudiesHero />
        <CaseStudyIems />
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
