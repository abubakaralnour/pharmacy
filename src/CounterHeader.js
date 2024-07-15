import React from 'react'
import { useState,useEffect } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import { MdCancelPresentation } from "react-icons/md";

import { Row,Col } from 'react-bootstrap';
const CounterHeader = ({duraton}) => {
  const [show, setshow] = useState(true)
    const [time, setTime] = useState(duraton)
   


useEffect(() => {
  
 setTimeout(()=>{
  setTime(time-1000);

 },1000);

  
}, [time])
 const gettimeformated=(milliseconds)=>{
const total_second =parseInt(Math.floor(milliseconds /1000));
const total_minutes=parseInt(Math.floor( total_second /60));
const total_hour   =parseInt(Math.floor(total_minutes  /60));
const day          =parseInt(Math.floor(total_hour /24));

const second =parseInt(total_second %60)
const minutes =parseInt(total_minutes %60)
const hour =parseInt(total_hour %24)
return `${second} :         ${minutes} :           ${hour} : ${day}`
}

  return (
    <>
    {show?  
    
    <Row  className='counter'>
         <Col xs={5} className='textcounterr'>
     <p >لا تفوت فرصتك مع عروض عيد الاضحي قسطها الان ووفر ميزانيتك     </p>
     </Col>
    
      <Col  xs={5}>
     <Row  className='countnumber'>  
     
     <Col xs={4}>
     {gettimeformated(time)}
     </Col>

    
     </Row>
     <Row xs={6} className='counter-peroud' >
   <Col  xs={1} > <p>ثانية</p>  </Col>
   <Col  xs={1} > <  p>دقيقة</p>  </Col>
   <Col  xs={1} > <p>ساعة  </p></Col>
   <Col  xs={1} > <p>يوم  </p>  </Col>
    </Row>
    </Col> 
    <Col xs={1} className=' close-btn-counter-divv'><i class="bi bi-x-lg"   onClick={()=>setshow(false)}></i></Col> 
     
    

    
    </Row>   :null}
    </>
  )
}

export default CounterHeader


