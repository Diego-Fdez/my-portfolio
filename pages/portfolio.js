import PortfolioScreen from '../components/PortfolioScreen';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import Image from 'next/image';

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
      <div className='relative hidden md:flex md:-m-[120px] md:ml-16 m-6 md:mb-[10px] overflow-hidden'>
        <Image
          src={'/logo.png'}
          alt={'logo-Diego-Fedez'}
          width={170}
          height={170}
          className='flex relative '
        />
      </div>
      <PortfolioScreen />
    </>
  );
};

export default Portfolio;
