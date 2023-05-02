import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { YMInitializer } from 'react-yandex-metrika';

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
        {process.env.NEXT_PUBLIC_ANALYTICS_ID ? (
          <YMInitializer
            accounts={[Number(process.env.NEXT_PUBLIC_ANALYTICS_ID)]}
            options={{ webvisor: true }}
            version="2"
          />
        ) : (
          <YMInitializer accounts={[0]} options={{ webvisor: true }} version="2" />
        )}
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default appWithTranslation(App);
