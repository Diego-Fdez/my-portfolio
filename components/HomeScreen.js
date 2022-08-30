import { useRouter } from 'next/router';
import Button from './Button';
import ImageScreen from './ImageScreen';
import Link from 'next/link';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <main className='flex flex-col md:flex-row w-full h-full  items-center justify-center relative'>
      <article className='flex flex-col h-full items-center justify-center my-24 px-8'>
        <h1 className='text-3xl md:text-7xl font-bold'>
          Hola, Soy Diego{' '}
          <span className='text-3xl md:text-7xl font-bold text-custom'>
            Fedez
          </span>
        </h1>
        <h4 className='text-xl md:text-3xl'>
          Ingeniero de software / desarrollador web, vivo en Costa Rica.
        </h4>
        <Link href={'/contact'}>
          <a>
            <Button title='Contacto' marginTop={'mt-8'} type='button' />
          </a>
        </Link>
        <div className='bg-new w-60 h-60 -z-10 blur-custom rounded-middle absolute top-16 left-0'></div>
      </article>
      <aside className='flex flex-1 relative justify-center items-center top-2 md:top-16 mb-6 md:mb-0'>
        <ImageScreen
          image={'/3D render.webp'}
          alt={'3D Robot Fly'}
          color={'bg-custom'}
        />
      </aside>
    </main>
  );
};

export default HomeScreen;
