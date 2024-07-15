import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const Cardd  = ({cardprop}) => {

  return (<>
    <div className='card-contaner-title-buttonseeall'>
    <div className='card-title-contaner'><h4>اقوي العروض</h4></div>
    <div className='card-showall-contaner'><a href='#dfdfdfdfd'>   عرض الكل </a></div>
    <div className='whatsapp'><img src='whatsapp.jpg' alt='asd '/> </div>
  </div>
   <div className='cardContaner'>
      
    
      
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {cardprop.map((cardprop)=>(
      <SwiperSlide key={cardprop.cardimg} >


    <Card style={{ width: '15rem' } }>
      <Card.Img className='card-img' variant="top" src={cardprop.cardimg}  alt={cardprop.title}/>
      <Card.Body>
        <Card.Title className='discount-degree'><p>-{cardprop.discountdegree}%</p> </Card.Title>
        <Card.Text className='text-card'><a href='#'>{cardprop.cardtext} </a>

        </Card.Text>
        <Card.Title className='price-old'><p>{cardprop.priceold}</p></Card.Title>
        <Card.Title className='price-new'><p>{cardprop.pricenew}</p></Card.Title>
        <button className='buttonn-card'>أضف للسلة</button>
      </Card.Body>
    </Card>


    
    </SwiperSlide>
    ))}
    </Swiper>
    </div>
    
    </>
  )
}

export default Cardd