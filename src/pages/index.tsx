import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/dumb/header/Header';
import ScrollBreadCrumbs from '../features/molecules/ScrollBreadCrumbs';
import OurServices from '../features/molecules/OurServices';
import Hero from '../components/dumb/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>4The BRIGHT Future</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <ScrollBreadCrumbs />
        <OurServices />
      </main>
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
