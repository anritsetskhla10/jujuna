import React from 'react'

function AboutSection() {
  return (
    <div className='aboutBG pt-[4.8%] pb-[37px] pl-[5.5%]
    max-mobile:aboutBGMin  '>
      <h2 className='titleFont mb-[69px] max-md:mb-[32px]'>ჩვენ შესახებ</h2>
      <div className='w-[64%] min-w-[357px]'>
        <p className='paragraphFont max-md:text-[16px] mb-5 max-md:mb-[10px]'> ჟუჟუნა ძალიან მშრალი და მომჟავო ღვინო 2017 წელს შეიქმნა.</p>
        <p className='paragraphFont max-md:text-[16px] mb-5 max-md:mb-[10px]'>
        ბევრი ფიქრისა და ღვინის მრავალწლიანი სიყვარულის შემდეგ, კომპანია, 
        ჩვენივე სახსრებით, 6-მა მეგობარმა დავაარსეთ. ჩვენი მთავარი მიზანი, 
        დალევის კულტურის განსხვავებული გამოცდილების შექმნა და აქამდე არარსებული 
        თანამდეროვე ღვინის თანამედროვე კულტურაში პოპულარიზაცია იყო.
        </p>
        <p className='paragraphFont max-md:text-[16px] mb-5 max-md:mb-[10px]'>
        ჩამოსასხმელი ჟუჟუნა საქართველოს უამრავ კაფე-ბარს მალევე დაუმეგობრდა და 
        2020 წელს ბოთლის ფორმითაც შეავსო მაღაზიათა ქსელი, რაც ასეთ მოკლე დროში, 
        ჩვენთვის, მნიშვნელოვანი სიახლეა.
        </p>
        <p className='paragraphFont max-md:text-[16px] mb-5 max-md:mb-[10px]'>
        ჟუჟუს ისტორია საქართველოს ფარგლებსაც სცდება და ჩინეთსა და იაპონიაში 
        ექსპორტით გააქვს თბილისური დალევის კულტურა.
        </p>
      </div>
    </div>
  )
}

export default AboutSection
