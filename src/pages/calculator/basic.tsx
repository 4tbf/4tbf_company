import Head from 'next/head';
import Header from '../../components/dumb/header/Header';
import BasicCalculator from '../../features/organisms/BasicCalculator';
import Footer from '../../components/dumb/footer/Footer';

export default function CalculatorBasic() {
  return (
    <div className="calc-page">
      <Head>
        <title>4The BRIGHT Future</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BasicCalculator />
      <Footer />
    </div>
  );
}
