import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default appWithTranslation(App);
