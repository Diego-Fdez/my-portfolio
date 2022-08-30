import Head from 'next/head';
import NavBar from '../components/NavBar';
import HomeScreen from '../components/HomeScreen';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - Diego Fedez</title>
        <meta
          name='description'
          content='mi portafolio personal, mis proyectos de desarrollo web'
        />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta charset='utf-8' />
      </Head>
      <NavBar />
      <HomeScreen />
    </>
  );
}
