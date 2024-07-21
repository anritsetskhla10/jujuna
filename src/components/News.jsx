import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardsData from '../assets/cards.json';

function News({ isDarkMode }) {
  return (
    <div className='bg-backgroundColor-backgroundCol px-[5.5%] py-[40px] max-mobile:px-[15px] dark:bg-backgroundColor-dark-backgroundCol'>
      <h2 className='titleFontBlack dark:titleFont text-[48px] mb-[10px]'>სიახლეები</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          1024: {
            spaceBetween: 30,
            slidesPerView: 2 
          },
          1440: {
            spaceBetween: 40,
            slidesPerView: 3
          }
        }}
      >
        {CardsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='w-[400px]'>
              <img src={item.image} alt={`${item.title} image`} />
              <div style={{
                backgroundColor: isDarkMode ? item.darkColor : item.color,
              }} className='flex flex-col gap-5 p-4 rounded-b-[16px]'>
                <p className='font-arialgeo text-[14px] text-color-primary dark:text-color-black'>{item.date}</p>
                <h3 className='paragraphFont dark:text-color-black'>{item.title}</h3>
                <p className='linkFont w-[340px] dark:text-color-black'>{item.info}</p>
                <button
                  style={{
                    backgroundColor: isDarkMode ? item.darkBtnColor : item.btnColor,
                  }}
                  className='btn'
                >
                  გაიგე მეტი
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default News;
