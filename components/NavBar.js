import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faContactBook,
  faUser,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const router = useRouter();
  const [url, setUrl] = useState('');

  /* Setting the url state to the current pathname. */
  useEffect(() => {
    if (router.pathname === '/') {
      setUrl('/');
    } else if (router.pathname === '/about') {
      setUrl('/about');
    } else if (router.pathname === '/portfolio') {
      setUrl('/portfolio');
    } else {
      setUrl('/contact');
    }
  }, [router.pathname]);

  return (
    <div className='flex justify-center items-center w-screen h-14 md:h-24 relative md:top-4 overflow-hidden z-20 transition-all bg-transparent'>
      <nav className='flex justify-center w-11/12 md:w-128 md:h-24 rounded-6xl fixed bg-neutral-800'>
        {/* inicio */}
        <ul className='nav-list flex'>
          <li className='nav-item leading-10 md:leading-95'>
            <label htmlFor='input-1'>
              <input
                type='radio'
                id='input-1'
                name='group'
                className='hidden'
              />
              <span
                className={`${
                  url === '/' ? 'bg-custom cursor-default' : ''
                } btn cursor-pointer py-1 px-2 md:py-4 md:px-6 rounded-5xl`}
              >
                <FontAwesomeIcon
                  icon={faHouse}
                  className={`${
                    url === '/'
                      ? 'text-custom2 -translate-x-1 md:-translate-x-2'
                      : 'translate-x-full text-custom '
                  } btn-icon text-base md:text-2xl transition-all`}
                />
                <span
                  className={`${
                    url === '/'
                      ? ' translate-x-5 opacity-100 delay-200'
                      : 'opacity-0'
                  } btn-text text-neutral-800 text-xs md:text-xl font-bold transition-all`}
                >
                  <Link href='/'>Inicio</Link>
                </span>
              </span>
            </label>
          </li>
          {/* portafolio */}
          <li className='nav-item leading-10 md:leading-95'>
            <label htmlFor='input-2'>
              <input
                type='radio'
                id='input-2'
                name='group'
                className='hidden'
              />
              <span
                className={`${
                  url === '/portfolio' ? 'bg-custom cursor-default' : ''
                } btn cursor-pointer py-1 px-2 md:py-4 md:px-6 rounded-5xl`}
              >
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className={`${
                    url === '/portfolio'
                      ? 'text-custom2 -translate-x-1 md:-translate-x-2'
                      : 'translate-x-full text-custom'
                  } btn-icon text-base md:text-2xl  transition-all`}
                />
                <span
                  className={`${
                    url === '/portfolio'
                      ? ' translate-x-5 opacity-100 delay-200'
                      : 'opacity-0'
                  } btn-text text-neutral-800 text-xs md:text-xl font-bold transition-all`}
                >
                  <Link href='/'>Portafolio</Link>
                </span>
              </span>
            </label>
          </li>
          {/* sobre mi */}
          <li className='nav-item leading-10 md:leading-95'>
            <label htmlFor='input-3'>
              <input
                type='radio'
                id='input-3'
                name='group'
                className='hidden'
              />
              <span
                className={`${
                  url === '/about' ? 'bg-custom cursor-default' : ''
                } btn cursor-pointer py-1 px-2 md:py-4 md:px-6 rounded-5xl`}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className={`${
                    url === '/about'
                      ? 'text-custom2 -translate-x-1 md:-translate-x-2'
                      : 'translate-x-full text-custom'
                  } btn-icon text-base md:text-2xl  transition-all`}
                />
                <span
                  className={`${
                    url === '/about'
                      ? ' translate-x-5 opacity-100 delay-200'
                      : 'opacity-0'
                  } btn-text text-neutral-800 text-xs md:text-xl font-bold transition-all`}
                >
                  <Link href='/about'>Sobre mi</Link>
                </span>
              </span>
            </label>
          </li>
          {/* contacto */}
          <li className='nav-item leading-10 md:leading-95'>
            <label htmlFor='input-4'>
              <input
                type='radio'
                id='input-4'
                name='group'
                className='hidden'
              />
              <span
                className={`${
                  url === '/contact' ? 'bg-custom cursor-default' : ''
                } btn cursor-pointer py-1 px-2 md:py-4 md:px-6 rounded-5xl`}
              >
                <FontAwesomeIcon
                  icon={faContactBook}
                  className={`${
                    url === '/contact'
                      ? 'text-custom2 -translate-x-1 md:-translate-x-2'
                      : 'translate-x-full text-custom'
                  } btn-icon text-base md:text-2xl transition-all`}
                />
                <span
                  className={`${
                    url === '/contact'
                      ? ' translate-x-5 opacity-100 delay-200'
                      : 'opacity-0'
                  } btn-text text-neutral-800 text-xs md:text-xl font-bold transition-all`}
                >
                  <Link href='/contact'>Contacto</Link>
                </span>
              </span>
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
