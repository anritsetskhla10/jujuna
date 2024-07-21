import React, { useEffect } from 'react';
import Moon from '/images/moon.svg';
import Sun from '/images/sun.svg';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';

function Footer({ isDarkMode, toggleTheme }) {
  const { t } = useTranslation();

  const handleChange = () => {
    toggleTheme();
  };

  const switchStyle = {
    width: '60px',
    backgroundColor: isDarkMode ? 'gray' : 'yellow',
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className='bg-backgroundColor-dark-backgroundCol py-[20px] px-[5.5%] flexCol'>
      <div className='flexDir'>
        <img src="/images/logo.svg" alt="logo icon" className='w-[45px] h-[45px] mr-[80px] self-start max-mobile:mr-5' />
        <div className='flexCol gap-4'>
          <div className='flexCol gap-3'>
            <p className='paragraphFont text-[12px]'>{t('phone')}</p>
            <p className='paragraphFont text-[12px]'>+995579760006</p>
          </div>
          <div className='flexCol gap-3'>
            <p className='paragraphFont text-[12px]'>{t('mail')}</p>
            <p className='paragraphFont text-[12px]'>Hello@jujuna.ge</p>
          </div>
          <div className='flexCol gap-3'>
            <p className='paragraphFont text-[12px]'>{t('address')}:</p>
            <p className='paragraphFont text-[12px]'>ნინოშვილი #8 თბილისი, საქართველო</p>
          </div>
        </div>
        <div className='flexCol gap-32 ml-auto'>
          <Switch
            checked={isDarkMode}
            checkedChildren={<img src={Moon} alt="Moon" className='w-[20px] h-[20px]' />}
            unCheckedChildren={<img src={Sun} alt="Sun" className='w-[30px] h-[22px]' />}
            onChange={handleChange}
            style={switchStyle}
          />
          <div className='flexDir gap-4 max-mobile:gap-1'>
            <img src="./images/instagram.svg" alt="IG icon" className='max-mobile:w-[12px] max-mobile:h-[12px]' />
            <img src="./images/facebook.svg" alt="FB icon" className='max-mobile:w-[12px] max-mobile:h-[12px]' />
            <img src="./images/linkedin.svg" alt="Linkedin icon" className='max-mobile:w-[12px] max-mobile:h-[12px]' />
          </div>
        </div>
      </div>
      <div className='flexDir gap-[49px] justify-end'>
        <p className='paragraphFont text-[14px] text-[#908f8f] max-mobile:text-[10px] whitespace-nowrap'>{t('privacyPolicy')}</p>
        <p className='paragraphFont text-[14px] text-[#908f8f] max-mobile:text-[10px] whitespace-nowrap'>{t('securityCenter')}</p>
      </div>
    </div>
  );
}

export default Footer;
