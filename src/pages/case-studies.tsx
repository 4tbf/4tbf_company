import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import CaseStudiesHero from '../features/molecules/case-studies-components/case-studies-hero/CaseStudiesHero';
import CaseStudyIems from '../features/molecules/case-studies-components/case-study-items/CaseStudyIems';

export default function CaeStudies() {
  return (
    <div className="case-studies-page">
      <Head>
        <title>4The BRIGHT Future</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudyIems />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
