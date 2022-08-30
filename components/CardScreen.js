import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Cards } from '../helpers/constants';

const CardScreen = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 flex-wrap gap-5 justify-center items-center -mt-8'>
      {Cards.map((card) => (
        <div className={`${isShow ? 'active' : ''} card`} key={card.id}>
          <div className='contentBx'>
            <div className='content'>
              <h2 className='text-custom2 font-bold text-lg'>{card.title}</h2>
              <span className='text-custom2 font-semibold text-base'>
                {card.subTitle}
              </span>
              <div className='imgBx rounded-md'>
                <Image
                  src={card.url}
                  width={280}
                  height={150}
                  alt={card.text}
                  layout='responsive'
                />
                <div className='dark-glass p-1 mt-2 flex flex-col items-center justify-center'>
                  <p className='text-white font-medium text-sm text-justify'>
                    {card.description}
                  </p>
                  <p className='text-white font-medium text-xs text-justify'>
                    {card.technology}
                  </p>
                  <div className='flex gap-3 p-2'>
                    <Link href={card.linkGithub} passHref>
                      <a target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon
                          icon={faGithub}
                          className='text-5xl cursor-pointer hover:text-white'
                        />
                      </a>
                    </Link>
                    <Link href={card.linkDemo} passHref>
                      <a target='_blank' rel='noopener noreferrer'>
                        <Button
                          title={'Demo'}
                          type='button'
                          className='btn-portfolio'
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='toggle'>
            <span onClick={() => setIsShow(!isShow)}></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardScreen;
