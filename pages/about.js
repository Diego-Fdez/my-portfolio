import Head from 'next/head';
import NavBar from '../components/NavBar';
import AboutScreen from '../components/AboutScreen';

const About = () => {
  return (
    <>
      <Head>
        <title>Acerca de - Diego Fedez</title>
        <meta
          name='description'
          content='acerca de mi, conoce mis proyectos de desarrollo web, freelance, React developer'
        />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta charset='utf-8' />
      </Head>
      <NavBar />
      <AboutScreen />
    </>
  );
};

export default About;
