import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import AboutHero from '../features/molecules/about/about-hero/AboutHero';
import WhoWe from '../features/molecules/about/who-we/WhoWe';
import Progress from '../features/molecules/about/progress/Progress';

export default function About() {
  return (
    <div className="about-page">
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
