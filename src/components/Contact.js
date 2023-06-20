import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_798gcgh', 'template_m58iu46', form.current, 'paZVfGZ40gJeIKN4x')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section className="bg-gray-700 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-4">Send me a 
          <span>
          <TypeAnimation className='text-green-300' sequence={[
                    ' message...',
                    8000,
                    ' inquiry...',
                    8000,
                    ' project proposal...',
                    8000,
                    ' idea...',
                    8000,
                    ' goodmoring...',
                    8000,
                    ' message...',
                    8000,
                    ' inquiry...',
                    8000,
                    ' project proposal...',
                    8000,
                    ' idea...',
                    8000,
                    8000,
                    ' goodmoring...',
                    8000,
                    ' message...',
                    8000,
                    ' inquiry...',
                    8000,
                    ' project proposal...',
                    8000,
                    ' idea...',
                    8000,
                ]}/>
          </span>
          </h2>
          <form ref={form} onSubmit={sendEmail}>
              <div className='text-gray-900'>
        <div className='text-left mb-2'>
      <label className='text-white font-bold'>Name</label>
      </div>
      <div>
      <input className='p-1 w-full rounded-lg px-2' type="text" name="user_name" />
      </div>
      <div className='text-left my-2'>
      <label className='text-white font-bold'>Email</label>
      </div>
      <div>
      <input className='p-1 w-full rounded-lg px-2' type="email" name="user_email" />
      </div>
      <div className='text-left my-2'>
      <label className='text-white font-bold'>Message</label>
      </div>
      <div>
      <textarea className='p-2 w-full rounded-lg px-2 pb-8' name="message" />
      </div>
      <div className='text-left'>
      <button className='bg-green-300 px-6 py-3 rounded-full mt-4' type="submit" value="Send">Send</button>
      </div>
      </div>
    </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;