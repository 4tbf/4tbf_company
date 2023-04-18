import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import OurServicesHero from '../features/molecules/our-services-components/our-services-hero/OurServicesHero';
import Technologies from '../features/molecules/our-services-components/technologies/Technologies';

export default function OurServices() {
  return (
    <div className="services-page">
      <Head>
        <title>4The BRIGHT Future</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <OurServicesHero />
        <Technologies />
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
