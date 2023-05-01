import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/dumb/header/Header';
import Footer from '../components/dumb/footer/Footer';
import OurServicesHero from '../features/molecules/our-services-components/our-services-hero/OurServicesHero';
import Technologies from '../features/molecules/our-services-components/technologies/Technologies';
import Industries from '../features/molecules/our-services-components/induscries/Industries';
import SEO from '../components/multiusable/SEO/SEO';

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
      <SEO
        description="4TBF (For The Bright Future) is a web and mobile app development company that creates innovative and custom solutions for businesses of all sizes. Contact us to start building your next digital solution today."
        title="Spark your success with our bright development solutions."
        url="https://www.4tbf.company/services"
        image="meta_main.png"
      />
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
