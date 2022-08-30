import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { images } from '../helpers/constants';

const CarouselScreen = () => {
  return (
    <div className='relative w-full mt-10'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        {images.map((image) => (
          <picture key={image.id}>
            <Image
              src={image.url}
              alt={image.text}
              loading='lazy'
              width={850}
              height={350}
              className=' h-96'
            />
            <p className='legend'>{image.legend}</p>
          </picture>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselScreen;
