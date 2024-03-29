import ImageScreen from './ImageScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const ContactScreen = ({ contactActive, setContactActive }) => {
  return (
    <main className='flex w-full h-full  items-center justify-center relative'>
      <div className='bg-new w-60 h-60 -z-10 blur-custom rounded-middle absolute top-8 -left-8 hidden md:flex'></div>
      <article className='flex flex-col md:flex-row h-full items-center justify-center my-24'>
        <ImageScreen
          image={'/3D render Robot.webp'}
          alt={'3D Robot whiteboard'}
          color={'bg-custom'}
        />
        <div className='flex flex-col gap-4 mt-14 md:mt-0 md:ml-28'>
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='text-custom text-5xl hover:cursor-pointer hover:text-custom2 transition-all duration-200'
              onClick={() => setContactActive(!contactActive)}
            />
            <Link href='mailto:info.diegodev@gmail.com' passHref>
              <a target='_blank' rel='noopener noreferrer'>
                <p className='text-custom2 text-lg cursor-pointer hover:text-custom transition-colors duration-200'>
                  info.diegodev@gmail.com
                </p>
              </a>
            </Link>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <Link href='https://wa.me/50683215708' passHref>
              <a target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className='text-custom text-5xl cursor-pointer hover:text-custom2 transition-colors duration-200'
                />
              </a>
            </Link>
            <p className='text-custom2 text-lg'>(506) 8321-5708</p>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <Link
              href='https://www.linkedin.com/in/diegofernandezdev/'
              passHref
            >
              <a target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className='text-custom text-5xl cursor-pointer hover:text-custom2 transition-colors duration-200'
                />
              </a>
            </Link>
            <p className='text-custom2 text-lg cursor-pointer hover:text-custom transition-colors duration-200'>
              <Link
                href='https://www.linkedin.com/in/diegofernandezdev/'
                passHref
              >
                <a target='_blank' rel='noopener noreferrer'>
                  Diego Fernández
                </a>
              </Link>
            </p>
          </div>
        </div>
      </article>
      <div className='bg-new w-60 h-60 -z-10 blur-custom rounded-middle absolute bottom-8 right-4'></div>
    </main>
  );
};

export default ContactScreen;
