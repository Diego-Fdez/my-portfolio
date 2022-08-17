import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import SkillsScreen from './SkillsScreen';
import Button from './Button';

const AboutScreen = () => {
  return (
    <main className='flex flex-col w-full h-full  items-center justify-center relative'>
      <div className='bg-new w-60 h-60 -z-10 blur-custom rounded-middle absolute top-8 -left-8 hidden md:flex'></div>
      <div className='flex flex-col w-3/4'>
        <h1 className='text-4xl md:text-7xl font-bold text-custom2 text-center mt-8 md:mt-16'>
          Servicios de desarrollo{' '}
          <span className='text-4xl md:text-7xl font-bold text-custom'>
            web
          </span>
        </h1>
        <p className='mt-4 text-justify font-semibold text-custom2'>
          Hola, mi nombre es Diego Fernández, soy un ingeniero de sistemas de
          Costa Rica. ¿Necesitas un sitio o aplicación web para tu negocio?
          Déjame ayudarte con la creación, optimización y desarrollo de tu
          negocio por medio de un sitio o aplicación web a la medida.
        </p>
      </div>
      <aside className='flex flex-col md:flex-row justify-center items-center p-3 w-3/4 gap-10 md:gap-14 mt-6'>
        <div className='flex flex-col gap-3 p-3 justify-center items-center w-80 glass'>
          <FontAwesomeIcon
            icon={faSearchengin}
            className='text-custom text-5xl'
          />
          <h6 className='text-lg font-semibold text-custom2'>
            SEO, analítica y optimización
          </h6>
          <p className='text-justify text-custom2'>
            ¿Quieres un sitio web que este en la parte superior de los
            resultados de búsqueda?
          </p>
        </div>
        <div className='flex flex-col gap-3 p-3  justify-center items-center w-80 glass'>
          <FontAwesomeIcon icon={faLaptop} className='text-custom text-5xl' />
          <h6 className='text-lg font-semibold text-custom2'>
            Creación de sitio web
          </h6>
          <p className='text-justify text-custom2'>
            Creación de sitios web en el menor tiempo, con máxima calidad y a un
            precio justo.
          </p>
        </div>
      </aside>
      <div className='mt-8'>
        <Button title={'Portafolio'} />
      </div>
      <SkillsScreen />
    </main>
  );
};

export default AboutScreen;
