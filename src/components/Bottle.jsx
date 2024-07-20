import React from 'react'
import useWindowWidth from './WindowWidth'

function Bottle() {

  let width = useWindowWidth()
  
  return (
    <div className='px-[5.5%] pb-[40px] max-tablet:p-0 bg-backgroundColor-backgroundCol dark:bg-backgroundColor-dark-backgroundCol max-tablet:relative'>
      <h2 className='titleFontBlack text-[64px] dark:titleFont max-tablet:pl-5 max-tablet:text-[40px]  mb-[10px]'>ბოთლი</h2>
      <div className='w-full flexDir bottleBanner border-solid 
      border-[3px] border-buttonColor-primary 
      max-tablet:border-y-[3px] max-tablet:border-x-0 
       max-tablet:p-[14px] max-tablet:justify-between'>
        <img src={`${width < 1440 ? '/images/bottle1-mobile.png ' : '/images/bottle1.png'} `} 
        alt="bottle picture" className='h-[500px] max-tablet:h-full max-tablet:mb-auto'/>
        <div className='pr-[60px] pl-[77px] max-tablet:pl-0 max-tablet:pr-0 max-tablet:w-[42%]'>
            <h3 className='titleFontBlack max-tablet:titleFont max-mobile:text-[32px]  mb-[40px] max-md:text-right max-tablet:text-center whitespace-nowrap'>ჟუჟუნა ბოთლი</h3>
            <div className='flexDir gap-5 mb-[50px] max-tablet:flexCol max-tablet:gap-2 max-tablet:mb-[10px]'>
                <div className='purpleBox items-center'>
                    <p className='paragraphFont text-[20px] max-tablet:text-[14px] whitespace-nowrap'>მოცულობა</p>
                    <p className='paragraphFont text-[20px] max-tablet:text-[14px] whitespace-nowrap'>250 მლ</p>
                </div>
                <div className='purpleBox items-center'> 
                    <p className='paragraphFont text-[20px] max-tablet:text-[14px] whitespace-nowrap'>ალკოჰოლი</p>
                    <p className='paragraphFont text-[20px] max-tablet:text-[14px] whitespace-nowrap'>11%</p>
                </div>
                <div className='purpleBox items-center'>
                    <p className='paragraphFont text-[20px] max-tablet:text-[14px] whitespace-nowrap'>ბუნებრივი გაზი</p>
                    <p className='paragraphFont text-[20px] max-tablet:text-[14px] whitespace-nowrap'>2.5 ბარი</p>
                </div>
            </div>
            
              <p className='paragraphFont text-color-black mb-[46px] 
              max-tablet:w-[219px] max-tablet:mb-0 max-tablet:absolute 
              max-tablet:left-[14px] max-tablet:top-[350px] max-tablet:text-[16px] dark:text-color-dark-black'>ჟუჟუს ბოთლი 250 მლ-იანია , რადგან სწორედ ეს პორც
                <span className='text-color-primary max-tablet:text-color-black dark:text-color-dark-black'>ია</span> ინარჩუნებს მისართმევად საუკეთესო ტემპერატურასა 
                <span className='text-color-primary max-tablet:text-color-black dark:text-color-dark-black'>&nbsp; და გაზს</span>.</p>
              <div className='purpleBox w-fit py-[40px] ml-auto mb-3 
              max-tablet:ml-[52%] max-md:ml-auto max-tablet:p-[18px] 
              max-tablet:bg-transparent dark:bg-buttonColor-dark-secondary
              '>
                  <span className='paragraphFont max-tablet:text-[12px] max-tablet:text-color-black dark:text-color-black '>4.5₾</span>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Bottle
