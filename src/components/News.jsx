
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import CardsData from '../assets/cards.json';

function News() {
  return (
    <div className='bg-backgroundColor-backgroundCol px-[80px] py-[40px]'>
        <h2 className='titleFontBlack text-[48px] mb-[10px]'>სიახლეები</h2>
    <Swiper
    spaceBetween={20}
    slidesPerView={3}
  >
    {CardsData.map((item, index) => (
        
            <SwiperSlide key={index} >
                <div className='w-[413px]'>
                    <img src={item.image} alt={`${item.title} image`} />
                    <div style={{ backgroundColor: item.color }} className='flex flex-col gap-5 p-4 rounded-b-[16px]'>
                        <p className='font-arialgeo text-[14px] text-color-primary'>{item.date}</p>
                        <h3 className='paragraphFont'>{item.title}</h3>
                        <p className='linkFont w-[340px]'>{item.info}</p>
                        <button style={{ backgroundColor: item.btnColor }} className='btn'>გაიგე მეტი</button>
                    </div>
                </div>
            </SwiperSlide>
      
        ))}
  </Swiper>
    </div>
  )
}

export default News
