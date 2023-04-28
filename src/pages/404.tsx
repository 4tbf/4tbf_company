import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/dumb/header/Header';
import Custom404 from '../features/molecules/custom-404/Custom404';

function CustomNotFound() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Header />
      <Custom404 />
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
export default CustomNotFound;
