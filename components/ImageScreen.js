import Image from 'next/image';

const ImageScreen = ({ image, alt, color }) => {
  return (
    <div
      className={`${color} rounded-custom w-72 h-72 md:w-96 md:h-96 custom-shadow relative`}
    >
      <Image
        src={image}
        width={150}
        height={150}
        layout='responsive'
        alt={alt}
      />
    </div>
  );
};

export default ImageScreen;
