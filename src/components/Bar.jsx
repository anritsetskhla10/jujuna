import React from 'react'

function Bar() {
  return (
    <div className='barBanner pt-[104px] pb-[87px] pl-[43%] pr-[8%] flexCol gap-0
    max-md:pt-3 max-md:pb-4 max-mobile:pl-[112px]'>
      <h2 className='titleFontBlack text-[64px] max-md:text-[32px] mb-[52px] max-mobile:mb-[5px]'>მობილური ბარი</h2>
      <p className='titleFont text-[40px] max-md:text-[24px] mb-10'>გავჩნდებით ყველგან, სადაც ისურვებ</p>
      <p className='paragraphFont max-md:text-[16px] mb-[70px] max-mobile:mb-[5px]'>
        ჟუჟუნას ბარი ოგაგნებს ყველგან, სადაც იქნები. თან მოიყვანს ბარმენს, 
        ქორფა ჟუჟუნას მაცივარს დააა შენი სტუმრების ჩაჟუჟუნებაზე უუამრავი 
        კოქტეილით იზრუნებს.
      </p>
      <button className='btn bg-buttonColor-primary self-center text-[24px] w-[222px] 
      max-md:text-[16px] max-mobile:w-[130px] max-md:self-end'>გაიგე მეტი</button>
    </div>
  )
}


export default Bar
