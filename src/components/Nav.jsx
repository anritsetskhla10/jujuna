import { Link } from 'react-scroll';

function Nav() {
  return (
    <div className='flexDir justify-between bg-backgroundColor-dark-backgroundCol py-[11px] pr-[70px] pl-[80px]'>
        <div>
            <img src="/images/logo.svg" alt="logo icon" />
        </div>
        <nav className='flexDir gap-[40px]'>
            <Link to="about" smooth={true} duration={500} 
            className='linkFont'>
                ჩვენ შესახებ
            </Link>
            <Link to="news" smooth={true} duration={500} 
            className='linkFont'>
                სიახლეები
            </Link>
            <Link to="bottle" smooth={true} duration={500}
            className='linkFont'>
                ბოთლი
            </Link>
            <Link to="cocktails" smooth={true} duration={500}
            className='linkFont'>
                კოქტეილები
            </Link>
            <Link to="bar" smooth={true} duration={500}
            className='linkFont'>
                მობილური ბარი
            </Link>
            <Link to="contact" smooth={true} duration={500}
            className='linkFont'>
                კონტაქტი
            </Link>
        </nav>
        <div className='flexDir'>
            <img className='w-[26px] h-[20px]' src="/images/georgia.svg" alt="georgian flag" />
            <img className='w-[22px] h-[16px]' src="/images/usa.svg" alt="usa flag" />
        </div>
      </div>
  )
}

export default Nav
