import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import ContactHero from '../features/molecules/contact-us/contact-hero/ContactHero';
import ContactForm from '../features/molecules/contact-us/contact-form/ContactForm';

export default function ContactUs() {
  return (
    <div className="contact-page">
      <Head>
        <title>4The BRIGHT Future</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
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
