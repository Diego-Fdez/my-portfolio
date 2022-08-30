import Head from 'next/head';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../components/NavBar';
import ContactScreen from '../components/ContactScreen';
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';

const Contact = () => {
  const [contactActive, setContactActive] = useState(false);

  return (
    <>
      <Head>
        <title>Contacto - Diego Fedez</title>
        <meta
          name='description'
          content='contácteme y conoce mis proyectos en react, javascript, desarrollo web'
        />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta charset='utf-8' />
      </Head>
      <NavBar />
      <ContactForm
        contactActive={contactActive}
        setContactActive={setContactActive}
      />
      <ContactScreen
        contactActive={contactActive}
        setContactActive={setContactActive}
      />
      <aside className='flex justify-center items-center gap-3 mb-6'>
        <h1 className='text-lg md:text-xl font-bold'>Ponte en contacto</h1>
        <FontAwesomeIcon
          icon={faComments}
          className='text-custom text-3xl hover:cursor-pointer hover:text-custom2 transition-all duration-200'
          onClick={() => setContactActive(!contactActive)}
        />
      </aside>
      <ToastContainer />
    </>
  );
};

export default Contact;
