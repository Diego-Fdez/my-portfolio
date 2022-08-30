import Button from './Button';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const ContactForm = ({ contactActive, setContactActive }) => {
  const [loading, setLoading] = useState(false);

  // the form hook variables are declared
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  /**
   * It sends an email using emailjs
   */
  const sendEmail = ({ name, email, message }) => {
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        { name, email, message },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success('Correo enviado, me pondré en contacto pronto');
          setLoading(false);
          reset();
        },
        (error) => {
          toast.error('Oh! sucedió un error, vuelve a intentar.');
          setLoading(false);
        }
      );
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
        <form
          id='inputs'
          className='w-full flex flex-col items-start justify-start'
          onSubmit={handleSubmit(sendEmail)}
        >
          <input
            type='text'
            name='name'
            className='w-full px-2 py-[12px] mb-4 rounded-md bg-dark-100 border-[2px] border-none outline-none '
            placeholder='Full Name'
            {...register('name', {
              required: 'Please enter your name',
              minLength: {
                value: 4,
                message: 'The name must have at least 4 characters',
              },
              maxLength: {
                value: 38,
                message: 'The name must have a maximum of 12 characters',
              },
            })}
          />
          {/* react hook forms errors */}
          {errors.name && toast.error(errors.name.message)}
          <input
            type='email'
            name='email'
            className='w-full px-2 py-[12px] mb-4 rounded-md bg-dark-100 border-[2px] border-none outline-none '
            placeholder='johndoe@mail.com'
            {...register('email', {
              required: 'Please enter an email',
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: 'Please enter a valid email',
              },
            })}
          />
          {/* react hook forms errors */}
          {errors.email && toast.error(errors.email.message)}
          <textarea
            cols='30'
            rows='5'
            name='message'
            className='w-full h-full bg-dark-100 resize-none rounded-md outline-none px-2 py-2 mb-3'
            placeholder='Message'
            {...register('message', {
              required: 'Please enter your message',
            })}
          ></textarea>
          {/* react hook forms errors */}
          {errors.message && toast.error(errors.message.message)}
          <Button
            title={loading ? 'Sending' : 'Send Message'}
            marginTop={'mt-6'}
            type='submit'
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
