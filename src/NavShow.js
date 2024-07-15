import {React} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const NavShow = ({slides}) => {

 
  return (
    
    
    <div className='Navshow'>
    <h3> الاقسام الاكثر مبيعا</h3>
     <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={30}
    slidesPerView={10}
    
    navigation

    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  > 
    {slides.map((slide)=>(
       <SwiperSlide key={slide.image} >
     <div className='ptitle'> 
     
       <a href='#'> <img className='pmg' src={slide.image} alt={slide.title}  />
        <p className='pptitle'>{slide.title}</p></a>
        </div> 
       </SwiperSlide>
    ))}
   
    
    
  </Swiper>
  

  </div>
  )
}

export default NavShow