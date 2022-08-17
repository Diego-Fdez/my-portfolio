import { useRouter } from 'next/router';
import Button from './Button';
import ImageScreen from './ImageScreen';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <main className='flex flex-col md:flex-row w-full h-full  items-center justify-center relative'>
      <div className='flex flex-col h-full items-center justify-center my-24 px-8'>
        <h1 className='text-4xl md:text-7xl font-bold'>
          Hola, Soy Diego{' '}
          <span className='text-4xl md:text-7xl font-bold text-custom'>
            Fedez
          </span>
        </h1>
        <h4 className='text-xl md:text-3xl'>
          Ingeniero en sistemas y desarrollador web de soy de Costa Rica
        </h4>
        <Button title='Contacto' marginTop={'mt-8'} type='button' />
        <div className='bg-new w-60 h-60 -z-10 blur-custom rounded-middle absolute top-16 left-0'></div>
      </div>
      <div className='flex flex-1 relative justify-center items-center top-2 md:top-16 mb-6 md:mb-0'>
        <ImageScreen
          image={'/3D render.png'}
          alt={'3D Robot Fly'}
          color={'bg-custom'}
        />
      </div>
    </main>
  );
};

export default HomeScreen;
