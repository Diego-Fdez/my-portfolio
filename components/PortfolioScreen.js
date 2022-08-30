import CardScreen from './CardScreen';
import CarouselScreen from './CarouselScreen';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const PortfolioScreen = () => {
  return (
    <main className='flex flex-col w-full h-full items-center justify-center m-auto'>
      <aside className='flex flex-col md:w-2/3 relative my-12 p-8'>
        <div className='bg-new w-60 h-60 -z-40 blur-custom rounded-middle absolute top-4 -left-32'></div>
        <h1 className='text-xl text-custom2 md:text-5xl font-bold text-center'>
          Mi portafolio con algunos de mis{' '}
          <span className='text-xl md:text-5xl font-bold text-custom'>
            proyectos:
          </span>
        </h1>
        <CarouselScreen />
      </aside>
      <article className='flex flex-col mt-1 md:mt-4 mb-8 p-4 justify-center items-center relative m-auto'>
        <CardScreen />
        <div className='flex mt-12 gap-4'>
          <p>Otros proyectos:</p>
          <Link href='https://github.com/Diego-Fdez' passHref>
            <a target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon
                icon={faGithub}
                className='text-xl cursor-pointer hover:text-custom'
              />
            </a>
          </Link>
        </div>
      </article>
    </main>
  );
};

export default PortfolioScreen;
