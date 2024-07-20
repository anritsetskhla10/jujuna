import React from 'react'
import Email from './Email'

function Contact() {
  return (
    <div className='contactBanner pt-[112px] pb-[73px] pl-[5.5%] pr-[17%] flexDir gap-[7.5%]
    max-mobile:py-[26px] max-mobile:px-4 max-mobile:gap-5'>
      <Email/>
      <div>
        <p className='paragraphFont max-mobile:text-[12px]  mb-5 max-mobile:mb-[9px]'>
        ქორფა ჟუჟუნა უუუამრავ კაფე-ბარში შეგხვდება და 
        შენთვის საყვარელ კოქტეილებს ააცქრიალებს. ცივი და 
        ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ ონკანიდან ეშვება.
        </p>
        <p className='paragraphFont max-mobile:text-[12px]'>        
          ჩამოსასხმელი ჟუჟუნა კაფე-ბარებს მრავალჯერადი გამოყენების კეგებში მიეწოდება და დამატებით შეფუთვას არ საჭიროებს, რის გამოც გარემოსთან 
          განსაკუთრებით მეგობრობს და არც მის დაბინძურებას იწვევს.
        </p>
      </div>
    </div>
  )
}

export default Contact
