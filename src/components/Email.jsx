import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mm8gsw8', 'template_z722gse', form.current, {
        publicKey: 'hfkQFDAgTrDym5cHz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flexCol gap-[17px]'>
      <label htmlFor='number' className='flexCol gap-[10px] 
      paragraphFont text-[20px]'>ტელეფონი
      <input type="text" name='number' id='number' autoComplete="off" placeholder="მიუთითეთ ნომერი..." 
      className='inputStyle' />
      </label>
      <label htmlFor='email'  className='flexCol gap-[10px] 
      paragraphFont text-[20px]'>
      ელ.ფოსტა
      <input type="email" name='email' id='email' autoComplete="off" placeholder="მიუთითეთ ელ-ფოსტა..." 
      className='inputStyle' />
      </label>
      <label htmlFor='message' className='flexCol gap-[10px] 
      mb-[27px] paragraphFont text-[20px]'>მესიჯი
      <textarea name="message" id='message' placeholder='დაწერეთ მესიჯი...'
      className='un inputStyle h-[120px]'/>
      </label>
      <button type="submit"  className='purpleBox rounded-[50px] ml-auto 
      w-fit linkFont text-[18px]'>გაგზავნა</button>
    </form>
  );
};

export default Email