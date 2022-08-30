import PortfolioScreen from '../components/PortfolioScreen';
import NavBar from '../components/NavBar';
import Head from 'next/head';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portafolio - Diego Fedez</title>
        <meta
          name='description'
          content='portafolio web developer creado en next js'
        />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta charset='utf-8' />
        <meta name='author' content='Diego Fedez' />
        <meta name='copyright' content='Diego Fedez' />
      </Head>
      <NavBar />
      <PortfolioScreen />
    </>
  );
};

export default Portfolio;
