import React from 'react'
import Email from './Email'

function Contact() {
  return (
    <div className='contactBanner pt-[112px] pb-[73px] pl-[5.5%] pr-[17%] flexDir gap-[7.5%]'>
      <Email/>
      <div>
        <p className='paragraphFont mb-5'>
        ქორფა ჟუჟუნა უუუამრავ კაფე-ბარში შეგხვდება და 
        შენთვის საყვარელ კოქტეილებს ააცქრიალებს. ცივი და 
        ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ ონკანიდან ეშვება.
        </p>
        <p className='paragraphFont'>        
          ჩამოსასხმელი ჟუჟუნა კაფე-ბარებს მრავალჯერადი გამოყენების კეგებში მიეწოდება და დამატებით შეფუთვას არ საჭიროებს, რის გამოც გარემოსთან 
          განსაკუთრებით მეგობრობს და არც მის დაბინძურებას იწვევს.
        </p>
      </div>
    </div>
  )
}

export default Contact
