import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import useWindowWidth from '../components/WindowWidth';

function Nav() {
  const { t, i18n } = useTranslation();
  const [navVisible, setNavVisible] = useState(false);
  const width = useWindowWidth();
  const isMobile = width <= 1024;

  const toggleNav = () => {
    if (isMobile) {
      setNavVisible(!navVisible);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (!isMobile) {
      setNavVisible(false);
    }
  }, [isMobile]);

  return (
    <div className='flexDir justify-between bg-backgroundColor-dark-backgroundCol py-[11px] pr-[70px] pl-[80px] max-md:relative'>
      <div>
        <img src="/images/logo.svg" alt="logo icon" />
      </div>
      <nav className={`flexDir gap-[40px] max-md:flexCol 
      ${navVisible ? 'max-md:navVisible' : 'max-md:Invisible'} 
      max-md:navPosition`}>
        <Link to="about" smooth={true} duration={500} 
        className='linkFont whitespace-nowrap' onClick={toggleNav}>
          {t('about')}
        </Link>
        <Link to="news" smooth={true} duration={500} 
        className='linkFont whitespace-nowrap' onClick={toggleNav}>
          {t('news')}
        </Link>
        <Link to="bottle" smooth={true} duration={500}
        className='linkFont whitespace-nowrap' onClick={toggleNav}>
          {t('bottle')}
        </Link>
        <Link to="cocktails" smooth={true} duration={500}
        className='linkFont whitespace-nowrap' onClick={toggleNav}>
          {t('cocktails')}
        </Link>
        <Link to="bar" smooth={true} duration={500}
        className='linkFont whitespace-nowrap' onClick={toggleNav}>
          {t('bar')}
        </Link>
        <Link to="contact" smooth={true} duration={500}
        className='linkFont whitespace-nowrap' onClick={toggleNav}>
          {t('contact')}
        </Link>
      </nav>
      <div className='flexDir'>
        <button onClick={toggleNav} className='hidden titleFont text-[24px] max-md:block mr-3'>{t('menu')}</button>
        <img className='w-[26px] h-[20px] mr-2 
        focus:border-[2px] focus:border-solid 
        focus:border-backgroundColor-purpleStart' 
        src="/images/georgia.svg" alt="georgian flag" tabIndex="0" onClick={() => changeLanguage('ka')} />
        <img className='w-[26px] h-[20px]  
        focus:border-[2px] focus:border-solid 
        focus:border-backgroundColor-purpleStart'  
        src="/images/usa.svg" alt="usa flag" tabIndex="0" onClick={() => changeLanguage('en')} />
      </div>
      <div className={`fixed top-0 left-0 w-full h-full 
      bg-black opacity-60 z-[5]
      ${navVisible ? 'block' : 'hidden'}`}>
      </div>
    </div>
  )
}

export default Nav;
