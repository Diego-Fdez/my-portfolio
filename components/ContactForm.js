import Button from './Button';
// import { mailer } from '../helpers/email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ContactForm = ({ contactActive, setContactActive }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // mailer({ name, email, message });
  };

  return (
    <div className='w-screen '>
      <div
        className={`w-[380px] ${
          contactActive ? 'h-[100vh]' : 'h-0 overflow-hidden'
        } max-h-[450px] bg-custom2 shadow-xl z-[999] fixed bottom-[90px] right-1 px-3 rounded-md transition-all md:right-5 md:bottom-[20px] md:w-[350px]`}
        id='form'
      >
        <div
          id='head'
          className='w-full flex flex-row items-start justify-start'
        >
          <h1 className='text-[20px] py-4 text-custom'>Contact Me</h1>
          <FontAwesomeIcon
            icon={faXmarkCircle}
            className={`p-2 text-[35px] absolute top-[-16px] right-[-5px] text-custom hover:text-custom2 transition-colors duration-200 bg-red-800 rounded-[50%] cursor-pointer ${
              contactActive ? 'flex' : 'hidden'
            } `}
            onClick={() => setContactActive(!contactActive)}
          />
        </div>
        <div
          id='inputs'
          className='w-full flex flex-col items-start justify-start'
        >
          <input
            type='text'
            name='name'
            className='w-full px-2 py-[12px] mb-4 rounded-md bg-dark-100 border-[2px] border-none outline-none '
            placeholder='Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type='mail'
            name='email'
            className='w-full px-2 py-[12px] mb-4 rounded-md bg-dark-100 border-[2px] border-none outline-none '
            placeholder='johndoe@mail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            cols='30'
            rows='5'
            name='message'
            className='w-full h-full bg-dark-100 resize-none rounded-md outline-none px-2 py-2 mb-3'
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button
            title={'Send Message'}
            marginTop={'mt-6'}
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
