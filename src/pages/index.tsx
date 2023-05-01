import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/dumb/header/Header';
import ScrollBreadCrumbs from '../features/molecules/ScrollBreadCrumbs';
import OurServices from '../features/molecules/OurServices';
import Hero from '../components/dumb/Hero';
import CalcualateWebsite from '../features/molecules/calculate-website/CalcualateWebsite';
import WhyWe from '../features/molecules/whe-we/WhyWe';
import FaqSection from '../features/molecules/faq-section/FaqSection';
import Footer from '../components/dumb/footer/Footer';
import Projects from '../features/molecules/projects/Projects';
import SEO from '../components/multiusable/SEO/SEO';

export default function Home() {
  return (
    <>
      <SEO
        description="4TBF (For The Bright Future) is a web and mobile app development company that creates innovative and custom solutions for businesses of all sizes. Contact us to start building your next digital solution today."
        title="Spark your success with our bright development solutions."
        url="https://www.4tbf.company/en"
        image="meta_main.png"
      />
      <Header />
      <main>
        <Hero />
        <ScrollBreadCrumbs />
        <OurServices />
        <CalcualateWebsite />
        <WhyWe />
        <Projects />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
