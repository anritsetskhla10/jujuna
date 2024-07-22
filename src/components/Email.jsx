import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6irridd', 'template_p1sto8c', form.current, {
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
    <form ref={form} onSubmit={sendEmail} className='flexCol gap-[17px] max-mobile:gap-3'>
      <label htmlFor='number' className='flexCol gap-[10px] 
      paragraphFont text-[20px] max-mobile:text-[12px] max-mobile:gap-1'>ტელეფონი
      <input type="text" name='number' id='number' autoComplete="off" placeholder="მიუთითეთ ნომერი..." 
      className='inputStyle' />
      </label>
      <label htmlFor='email'  className='flexCol gap-[10px] 
      paragraphFont text-[20px] max-mobile:text-[12px] max-mobile:gap-1'>
      ელ.ფოსტა
      <input type="email" name='email' id='email' autoComplete="off" placeholder="მიუთითეთ ელ-ფოსტა..." 
      className='inputStyle' />
      </label>
      <label htmlFor='message' className='flexCol gap-[10px] 
      mb-[27px] paragraphFont text-[20px] max-mobile:text-[12px] max-mobile:gap-1'>მესიჯი
      <textarea name="message" id='message' placeholder='დაწერეთ მესიჯი...'
      className='un inputStyle h-[120px] max-mobile:h-[90px]'/>
      </label>
      <button type="submit"  className='purpleBox rounded-[50px] ml-auto 
      w-fit linkFont text-[18px] 
      max-mobile:text-[16px] max-mobile:py-[7px] max-mobile:px-[29px]'>გაგზავნა</button>
    </form>
  );
};

export default Email