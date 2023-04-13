import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import WhyWeHero from '../features/molecules/why-we-components/why-we-hero/WhyWeHero';
import WhyWeItems from '../features/molecules/why-we-components/why-we-items/WhyWeItems';

export default function WhyWe() {
  return (
    <div className="why-we-page">
      <Head>
        <title>4The BRIGHT Future</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <WhyWeHero />
        <WhyWeItems />
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
