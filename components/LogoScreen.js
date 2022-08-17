import Image from 'next/image';

const LogoScreen = ({ src, alt }) => {
  return (
    <div className=' w-10 h-10 rounded-middle gap-3'>
      <Image src={src} width={20} height={20} alt={alt} layout='responsive' />
    </div>
  );
};

export default LogoScreen;
