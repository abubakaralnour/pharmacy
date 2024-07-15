import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const Complogo = ({logg}) => {
    return(
  <div className='Compnavlog'>
   
    <h3>  اهم العلامات التجارية</h3>
     <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={30}
    slidesPerView={9}

    

    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  > 
    {logg.map((logg)=>(
       <SwiperSlide key={logg.image} >
     <div className='ptitle'> 
     
       <a href='#'> <img className='pmg' src={logg.image} alt={logg.title}  />
        </a>
        </div> 
       </SwiperSlide>
    ))}
   
  </Swiper>
  </div>
  )
}

export default Complogo