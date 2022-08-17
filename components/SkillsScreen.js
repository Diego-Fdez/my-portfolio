import ImageScreen from './ImageScreen';
import LogoScreen from './LogoScreen';

const SkillsScreen = () => {
  return (
    <article className='flex flex-col justify-center items-center mt-8 mb-6 w-11/12'>
      <h4 className='text-xl md:text-3xl'>
        Mis conocimientos y/o habilidades:
      </h4>
      <div className='flex flex-col md:flex-row mt-8 gap-10'>
        <div className='flex glass w-80 p-4 justify-center items-center'>
          <ul>
            <li>
              <div className='flex justify-start items-center gap-'>
                <div className='w-10 h-10 rounded-middle'>
                  <LogoScreen src={'/Html5.png'} alt={'Logo Html5'} />
                </div>
                <p className='font-bold'>Html</p>
              </div>
            </li>
            <li className='mt-4'>
              <div className='flex justify-start items-center gap-2'>
                <div className='w-10 h-10 rounded-middle'>
                  <LogoScreen src={'/CSS3.png'} alt={'Logo CSS3'} />
                </div>
                <p className='font-bold'>CSS3</p>
              </div>
            </li>
            <li className='mt-4'>
              <div className='flex justify-start items-center gap-2'>
                <div className='w-10 h-10 rounded-middle'>
                  <LogoScreen src={'/JavaScript.png'} alt={'Logo JavaScript'} />
                </div>
                <p className='font-bold'>JavaScript</p>
              </div>
            </li>
            <li className='mt-4'>
              <div className='flex justify-start items-center gap-2'>
                <div className='w-10 h-10 rounded-middle'>
                  <LogoScreen src={'/React.png'} alt={'Logo React'} />
                </div>
                <p className='font-bold'>React</p>
              </div>
            </li>
          </ul>
          <ul className='ml-3'>
            <li>
              <div className='flex justify-start items-center gap-'>
                <div className='w-10 h-10 rounded-middle'>
                  <LogoScreen src={'/MongoDB.png'} alt={'Logo MongoDB'} />
                </div>
                <p className='font-bold'>MongoDB</p>
              </div>
            </li>
            <li className='mt-4'>
              <div className='flex justify-start items-center gap-2'>
                <div className='w-10 h-10 rounded-middle'>
                  <LogoScreen src={'/MySQL.png'} alt={'Logo MySQL'} />
                </div>
                <p className='font-bold'>MySQL</p>
              </div>
            </li>
            <li className='mt-4'>
              <div className='flex justify-start items-center gap-2'>
                <div className='w-10 h-10 rounded-middle'>
                  <LogoScreen src={'/fireBase.png'} alt={'Logo Firebase'} />
                </div>
                <p className='font-bold'>Firebase</p>
              </div>
            </li>
            <li className='mt-4'>
              <div className='flex justify-start items-center gap-2'>
                <div className='w-10 h-10 rounded-middle'>
                  <LogoScreen src={'/Node.png'} alt={'Logo NodeJS'} />
                </div>
                <p className='font-bold'>Node JS</p>
              </div>
            </li>
          </ul>
        </div>
        <ImageScreen
          image={'/Robot 3D y Logos.png'}
          alt={'Robot 3D + Logos'}
          color={'bg-custom2'}
        />
      </div>
    </article>
  );
};

export default SkillsScreen;
