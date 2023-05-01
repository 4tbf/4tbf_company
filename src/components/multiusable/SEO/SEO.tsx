import Head from 'next/head';
import React from 'react';

interface ISEO {
  title: string;
  description: string;
  image: string;
  url: string;
}

const SEO: React.FC<ISEO> = ({ description, title, url, image }) => {
  return (
    <Head>
      <title>4The BRIGHT Future</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://www.4tbf.company/calculator/advanced" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="development, apps, webiste, website development, website cost calculator, website calculator, web development"
      />
      <meta name="author" content="4TBF" />

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`/meta/${image}`} />
      <meta property="og:url" content={url} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`/meta/${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
