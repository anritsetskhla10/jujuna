import React from 'react'

function Bottle() {

  
  return (
    <div className='px-[5.5%] pb-[40px] bg-backgroundColor-backgroundCol'>
      <h2 className='titleFontBlack text-[64px] mb-[10px]'>ბოთლი</h2>
      <div className='w-full flexDir bottleBanner border-solid border-[3px] border-buttonColor-primary'>
        <img src="/images/bottle1.png" alt="bottle picture" className='h-[500px]'/>
        <div className='pr-[60px] pl-[77px]'>
            <h3 className='titleFontBlack mb-[40px]'>ჟუჟუნა ბოთლი</h3>
            <div className='flexDir gap-5 mb-[50px]'>
                <div className='purpleBox items-center'>
                    <p className='paragraphFont text-[20px]'>მოცულობა</p>
                    <p className='paragraphFont text-[20px]'>250 მლ</p>
                </div>
                <div className='purpleBox items-center'>
                    <p className='paragraphFont text-[20px]'>ალკოჰოლი</p>
                    <p className='paragraphFont text-[20px]'>11%</p>
                </div>
                <div className='purpleBox items-center'>
                    <p className='paragraphFont text-[20px]'>ბუნებრივი გაზი</p>
                    <p className='paragraphFont text-[20px]'>2.5 ბარი</p>
                </div>
            </div>
            <p className='paragraphFont text-color-black mb-[46px]'>ჟუჟუს ბოთლი 250 მლ-იანია , რადგან სწორედ ეს პორც<span className='text-color-primary'>ია</span> ინარჩუნებს მისართმევად საუკეთესო ტემპერატურასა <span className='text-color-primary'>&nbsp; და გაზს</span>.</p>
            <div className='purpleBox w-fit py-[40px] ml-auto'>
                <span className='paragraphFont '>4.5₾</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Bottle
