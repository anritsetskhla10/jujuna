import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import useWindowWidth from '../components/WindowWidth';

function Nav() {

    const [navVisible, setNavVisible] = useState(false);
    const width = useWindowWidth();
    const isMobile = width <= 1024;

    const toggleNav = () => {
        if (isMobile) {
        setNavVisible(!navVisible);
        }
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
        max-md:navPosition` }> 

            <Link to="about" smooth={true} duration={500} 
            className='linkFont whitespace-nowrap' onClick={toggleNav}>
                ჩვენ შესახებ
            </Link>
            <Link to="news" smooth={true} duration={500} 
            className='linkFont whitespace-nowrap' onClick={toggleNav}>
                სიახლეები
            </Link>
            <Link to="bottle" smooth={true} duration={500}
            className='linkFont whitespace-nowrap' onClick={toggleNav}>
                ბოთლი
            </Link>
            <Link to="cocktails" smooth={true} duration={500}
            className='linkFont whitespace-nowrap' onClick={toggleNav}>
                კოქტეილები
            </Link>
            <Link to="bar" smooth={true} duration={500}
            className='linkFont whitespace-nowrap' onClick={toggleNav}>
                მობილური ბარი
            </Link>
            <Link to="contact" smooth={true} duration={500}
            className='linkFont whitespace-nowrap' onClick={toggleNav}>
                კონტაქტი
            </Link>
        </nav>
        <div className='flexDir'>
            <button onClick={toggleNav} className='hidden titleFont text-[24px] max-md:block mr-3'>მენიუ</button>
            <img className='w-[26px] h-[20px] mr-2 
            focus:border-[2px] focus:border-solid 
            focus:border-backgroundColor-purpleStart' 
            src="/images/georgia.svg" alt="georgian flag" tabIndex="0" />
            <img className='w-[26px] h-[20px]  
            focus:border-[2px] focus:border-solid 
            focus:border-backgroundColor-purpleStart'  
            src="/images/usa.svg" alt="usa flag" tabIndex="0" />
        </div>
        <div className={`fixed top-0 left-0 w-full h-full 
        bg-black opacity-60 z-[5]
        ${navVisible ? 'block' : 'hidden'} `}>

        </div>
      </div>
  )
}

export default Nav
