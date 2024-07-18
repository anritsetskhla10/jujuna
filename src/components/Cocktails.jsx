import React from 'react'

function Cocktails() {
  return (
    <div className='px-[5.5%] pb-[40px] bg-backgroundColor-backgroundCol'>
      <h2 className='titleFontBlack text-[64px] mb-[10px]'>კოქტეილი</h2>
      <div className='gridCocktails'>
        <div className='flexDir justify-between bg-backgroundColor-dark-backgroundCol col-span-full'>
          <img src="/images/cocktail1.png" alt="cocktail picture" />
          <div className='pr-[14.5%] py-[38px] gridCocktails gap-x-[29px] gap-y-0'>
            <h3 className='titleFont text-[40px] mb-[38px] col-span-full'>აპეროლ შპრიტსი</h3>
              <div className='flexCol borderB'>
                <p className='paragraphFont text-[20px]'>აპეროლი</p>
                <span className='paragraphFont text-[20px] opacity-60'>50 მლ</span>
              </div>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px]'>ფორთოხალი</p>
              <span className='paragraphFont text-[20px] opacity-60'>1 ნაჭერი</span>
            </div>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px]'>ყინული</p>
              <span className='paragraphFont text-[20px] opacity-60'>სავსე ჭიქა</span>
            </div>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px]'>ტონიკი</p>
              <span className='paragraphFont text-[20px] opacity-60'>20 მგ</span>
            </div>
            <div className='flexCol '>
              <p className='paragraphFont text-[20px]'>ჟუჟუნა</p>
              <span className='paragraphFont text-[20px] opacity-60'>150 მლ</span>
            </div>
          </div>
        </div>
        <div className='flexDir justify-between bg-backgroundColor-dark-backgroundCol '>
          <img src="/images/cocktail2.png" alt="cocktail image" />
          <div className='pr-[10%] py-[33px] flexCol gap-0'>
          <h3 className='titleFont text-[40px] mb-[34px] whitespace-nowrap'>კენკრიანი ჟუჟუნა</h3>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px]'>ყინული</p>
              <span className='paragraphFont text-[20px] opacity-60'>ნახევარი ჭიქა</span>
            </div>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px]'>კენკრა</p>
              <span className='paragraphFont text-[20px] opacity-60'>70 გრ</span>
            </div>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px]'>ჟუჟუნა</p>
              <span className='paragraphFont text-[20px] opacity-60'>150 მლ</span>
            </div>
            <div className='flexCol'>
              <p className='paragraphFont text-[20px]'>გრენადინის სიროფი</p>
              <span className='paragraphFont text-[20px] opacity-60'>10 მლ</span>
            </div>
          </div>
        </div>
        <div className='flexDir justify-between bg-backgroundColor-dark-backgroundCol '>
          <img src="/images/cocktail3.png" alt="cocktail image" />
          <div className='pr-[10%] py-[33px] flexCol gap-0'>
          <h3 className='titleFont text-[40px] mb-[34px] whitespace-nowrap'>მიმოზა</h3>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px]'>ყინული</p>
              <span className='paragraphFont text-[20px] opacity-60'>ნახევარი ჭიქა</span>
            </div>
            <div className='flexCol borderB'>
              <p className='paragraphFont text-[20px]'>ფორთოხლის ფრეში</p>
              <span className='paragraphFont text-[20px] opacity-60'>50 მლ</span>
            </div>
            <div className='flexCol'>
              <p className='paragraphFont text-[20px]'>ჟუჟუნა</p>
              <span className='paragraphFont text-[20px] opacity-60'>130 მლ</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Cocktails
