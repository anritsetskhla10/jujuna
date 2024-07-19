import React, { useEffect, useState } from 'react';
import Moon from '/images/moon.svg';
import Sun from '/images/sun.svg';
import { Switch } from 'antd';

function Footer() {
  const [mode, setMode] = useState(false);

  const handleChange = () => {
    setMode(!mode);
    toggleTheme();
  };

  const switchStyle = {
    width: '60px',
    backgroundColor: mode ? 'gray' : 'yellow',
  };

  const toggleTheme = () => {
    const htmlClasses = document.documentElement.classList;
    if (htmlClasses.contains('darkMode')) {
      htmlClasses.remove('darkMode');
      localStorage.setItem('theme', 'light');
    } else {
      htmlClasses.add('darkMode');
      localStorage.setItem('theme', 'darkMode');
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'darkMode') {
      document.documentElement.classList.add('darkMode');
    }
  }, []);

  return (
    <div className='bg-backgroundColor-dark-backgroundCol 
    py-[20px] px-[5.5%] flexCol'>
      <div className='flexDir'>
        <img src="/images/logo.svg" alt="logo icon" className='w-[45px] h-[45px] mr-[80px] self-start' />
        <div className='flexCol gap-4'>
          <div className='flexCol gap-3'>
            <p className='paragraphFont text-[12px]'>ტელეფონი</p>
            <p className='paragraphFont text-[12px]'>+995579760006</p>
          </div>
          <div className='flexCol gap-3'>
            <p className='paragraphFont text-[12px]'>ელ.ფოსტა</p>
            <p className='paragraphFont text-[12px]'>Hello@jujuna.ge</p>
          </div>
          <div className='flexCol gap-3'>
            <p className='paragraphFont text-[12px]'>მისამართი:</p>
            <p className='paragraphFont text-[12px]'>ნინოშვილი #8 თბილისი, საქართველო</p>
          </div>
        </div>
        <div className='flexCol gap-32 ml-auto'>
          <Switch
            checked={mode}
            checkedChildren={<img src={Moon} alt="Moon" className='w-[20px] h-[20px]' />}
            unCheckedChildren={<img src={Sun} alt="Sun" className='w-[30px] h-[22px]' />}
            onChange={handleChange}
            style={switchStyle} 
          />
          <div className='flexDir gap-4'>
            <img src="./images/instagram.svg" alt="IG icon" />
            <img src="./images/facebook.svg" alt="FB icon" />
            <img src="./images/linkedin.svg" alt="Linkedin icon" />
          </div>
        </div>
      </div>
      <div className='flexDir gap-[49px] justify-end'>
        <p className='paragraphFont text-[14px] text-[#908f8f] whitespace-nowrap'>პერსონალური მონაცემების დაცვის პოლიტიკა</p>
        <p className='paragraphFont text-[14px] text-[#908f8f] whitespace-nowrap'>უსაფრთხოების ცენტრი</p>
      </div>
    </div>
  )
}

export default Footer;
