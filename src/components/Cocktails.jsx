import React from 'react'
import useWindowWidth from './WindowWidth'

function Cocktails() {

  let width = useWindowWidth();


  return (
    <div className='px-[5.5%] max-tablet:px-0 max-tablet:pb-0 pb-[40px] bg-backgroundColor-backgroundCol dark:bg-backgroundColor-dark-backgroundCol'>
      <h2 className='titleFontBlack dark:titleFont text-[64px] mb-[10px] max-tablet:text-[40px] max-tablet:pl-5 dark:text-color-dark-black'>კოქტეილი</h2>
      <div className='gridCocktails max-tablet:flexCol max-tablet:gap-0'>
        <div className='flexDir justify-between max-mobile:justify-normal  bg-backgroundColor-dark-backgroundCol col-span-full max-tablet:relative max-tablet:pt-[91px]'>
          <img src={`${width < 1024 ? '/images/cocktail1-mobile.png ' : '/images/cocktail1.png'} `}  alt="cocktail picture" />
          <div className='pr-[14.5%] py-[38px] max-tablet:p-0 max-mobile:ml-[-30px] gridCocktails gap-x-[29px] gap-y-0'>
            <h3 className='titleFont text-[40px] mb-[38px] col-span-full 
            max-tablet:absolute max-tablet:top-[23px] max-tablet:text-[32px]
            max-tablet:left-[50%] max-tablet:translate-x-[-50%] 
            whitespace-nowrap'>აპეროლ შპრიტსი</h3>
              <div className='flexCol borderB'>
                <p className='paragraphFont text-[20px] max-mobile:text-[14px]'>აპეროლი</p>
                <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>50 მლ</span>
              </div>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px] max-mobile:text-[14px]'>ფორთოხალი</p>
              <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>1 ნაჭერი</span>
            </div>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px] max-mobile:text-[14px]'>ყინული</p>
              <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>სავსე ჭიქა</span>
            </div>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px] max-mobile:text-[14px]'>ტონიკი</p>
              <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>20 მგ</span>
            </div>
            <div className='flexCol '>
              <p className='paragraphFont text-[20px] max-mobile:text-[14px]'>ჟუჟუნა</p>
              <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>150 მლ</span>
            </div>
          </div>
        </div>
        <div className='flexDir justify-between max-mobile:justify-normal  bg-backgroundColor-dark-backgroundCol  max-tablet:relative max-tablet:pt-[91px] '>
          <img src={`${width < 1024 ? '/images/cocktail2-mobile.png ' : '/images/cocktail2.png'} `} alt="cocktail image" />
          <div className='pr-[10%] py-[33px] flexCol gap-0 max-tablet:p-0 max-tablet:gridCocktails max-tablet:gap-y-0 max-tablet:self-start max-tablet:gap-x-2 max-tablet:mr-2'>
          <h3 className='titleFont text-[40px] 
          max-tablet:text-[32px] mb-[34px] max-tablet:absolute 
          max-tablet:top-[23px] 
            max-tablet:left-[50%] max-tablet:translate-x-[-50%] 
            max-tablet:mb-0 whitespace-nowrap'>კენკრიანი ჟუჟუნა</h3>
            <div className='flexCol borderB max-tablet:gap-0'>
              <p className='paragraphFont text-[20px] max-mobile:text-[14px] max-tablet:mb-5'>ყინული</p>
              <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>ნახევარი ჭიქა</span>
            </div>
            <div className='flexCol borderB max-tablet:border-0 '>
              <p className='paragraphFont text-[20px] max-mobile:text-[14px] '>კენკრა</p>
              <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>70 გრ</span>
            </div>
            <div className='flexCol borderB max-tablet:border-0 '>
              <p className='paragraphFont text-[20px] max-mobile:text-[14px]'>ჟუჟუნა</p>
              <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>150 მლ</span>
            </div>
            <div className='flexCol max-tablet:borderB max-tablet:gap-0 
            max-tablet:col-start-2 max-tablet:col-end-2 
            max-tablet:row-start-1 '>
              <p className='paragraphFont text-[20px] max-mobile:text-[14px] '>გრენადინის სიროფი</p>
              <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>10 მლ</span>
            </div>
          </div>
        </div>
        <div className='flexDir justify-between max-mobile:justify-normal  
        bg-backgroundColor-dark-backgroundCol  max-tablet:relative max-tablet:pt-[91px]  '>
          <img  src={`${width < 1024 ? '/images/cocktail3-mobile.png ' : '/images/cocktail3.png'} `} alt="cocktail image" />
          <div className='pr-[10%] py-[33px] flexCol gap-0 max-tablet:p-0 max-tablet:gridCocktails
          max-tablet:gap-y-0 max-tablet:self-start max-tablet:gap-x-2 max-tablet:mr-2'>
          <h3 className='titleFont text-[40px] mb-[34px]    max-tablet:text-[32px] max-tablet:absolute 
          max-tablet:top-[23px] 
            max-tablet:left-[50%] max-tablet:translate-x-[-50%] 
            max-tablet:mb-0 whitespace-nowrap'>მიმოზა</h3>
            <div className='flexCol borderB  max-tablet:gap-0'>
              <p className='paragraphFont text-[20px] max-mobile:text-[14px] max-tablet:mb-9'>ყინული</p>
              <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>ნახევარი ჭიქა</span>
            </div>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px] max-mobile:text-[14px]'>ფორთოხლის ფრეში</p>
              <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>50 მლ</span>
            </div>
            <div className='flexCol'>
              <p className='paragraphFont text-[20px] max-mobile:text-[14px]'>ჟუჟუნა</p>
              <span className='paragraphFont text-[20px] opacity-60 max-mobile:text-[14px]'>130 მლ</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Cocktails
