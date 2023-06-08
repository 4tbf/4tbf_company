import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { YMInitializer } from 'react-yandex-metrika';
import { useEffect, useState } from 'react';
import CookieBanner from '../features/atoms/CookieBanner/CookieBanner';

function App({ Component, pageProps }: AppProps) {
  const [acceptCookie, setAcceptCookie] = useState<any>(true);
  useEffect(() => {
    const isAccept = localStorage.getItem('cookie_banner');
    setAcceptCookie(isAccept);
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <AnimatePresence mode="wait" initial={false}>
        {process.env.NEXT_PUBLIC_ANALYTICS_ID && acceptCookie ? (
          <YMInitializer
            accounts={[Number(process.env.NEXT_PUBLIC_ANALYTICS_ID)]}
            options={{ webvisor: true }}
            version="2"
            key="app"
          />
        ) : (
          <YMInitializer accounts={[0]} options={{ webvisor: true }} version="2" key="app" />
        )}
        <Component {...pageProps} />
        {(acceptCookie === undefined || acceptCookie === null) && (
          <CookieBanner setAccept={setAcceptCookie} />
        )}
      </AnimatePresence>
    </>
  );
}

export default appWithTranslation(App);
