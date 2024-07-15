import React from 'react'
import { Row,Col, Button, NavLink } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (<>
    <div className='footer'>
        
        <Row className='asd'>

            <Col  xs={5}>
                <Row >
                <p className='prgraph-footer-title'>أشهر التصنيفات</p>
                </Row>
                <Row lassName='row-paddng'>
                    <Col  xs={5}>
                    <a href='#' className='prgraph-a'>الفايتمينات والمكملات الغذائية</a>
                    </Col >
                    <Col  xs={4}>
                        <a href='#' className='prgraph-a'>الصحة والعناية الشخصية</a>
                    </Col>
                
                </Row>
                <Row className='row-paddng'>
                <Col  > 
                <a href='#' className='prgraph-a'> منتجات  العناية بالبشرة</a>
                </Col>
                <Col> 
                <a href='#' className='prgraph-a'>    منتجات العناية بالشعر</a>
                </Col>
                <Col> 
                <a href='#' className='prgraph-a'>    المكياج ومستلزماتة</a>
                </Col>

                </Row>
                <Row className='row-paddng'>
                <Col  xs={4}> 
                <a href='#' className='prgraph-a'>     العطور ومعطرات الجسم</a>
                </Col>
                <Col> 
                <a href='#' className='prgraph-a'>     العناية بالطفل</a>
                </Col>
                <Col> 
                <a href='#' className='prgraph-a'>     العناة بالمراءة</a>
                </Col>
                <Col> 
                <a href='#' className='prgraph-a'>     العنايةبالرجل</a>
                </Col>
                </Row>
                
                <Row>
                <Col> 
                <a href='#' className='prgraph-a'>الغذاء العضوي والصحي</a>
                </Col>
                <Col> 
                <a href='#' className='prgraph-a'>     المستلزمات الطبية</a>
                </Col>
                <Col> 
                <a href='#' className='prgraph-a'>    العناية المنزلية </a>
                </Col>
                </Row>
            </Col>
            <Col   xs={2}>
            <Row>
            <p className='prgraph-footer-title'> صيدلية كوم</p>
            </Row>
            <Row className='row-paddng'>
            <a  href='#' className='prgraph-a'>  سياسية الخصوصية</a>
            </Row>
            <Row className='row-paddng'>
            <a  href='#' className='prgraph-a'>   الشحن والتوصيل</a>
            </Row>
            <Row className='row-paddng'>
            <a  href='#' className='prgraph-a'>    شروط الاستخدام</a>
            </Row>
            <Row className='row-paddng'>
            <a  href='#' className='prgraph-a'>    طرق الدفع </a>
            </Row>
            <Row className='row-paddng'>
            <a  href='#' className='prgraph-a'>     كن من مزودينا </a>
            </Row>
            <Row className='row-paddng'>
            <a  href='#' className='prgraph-a'>      سياسة الاستبدال ولاسترجاع  </a>
            </Row>
            <Row className='row-paddng'>
            <a  href='#' className='prgraph-a'>      اتصل بنا    </a>
            </Row>
            <Row className='row-paddng'>
            <a  href='#' className='prgraph-a'>       برنامج الولاء    </a>
            </Row>
            <Row>
            <a  href='#' className='prgraph-a'>       الطلب للشركات    </a>
            </Row>
            </Col>

            <Col xs={2}>
              <Row>
              <p className='prgraph-footer-title'>تواصل معنا </p>
             </Row>  
            <Row>
                <Col>
             <button className='iconsocialmedia'>  <FaFacebook /> </button> 
             </Col>
             <Col>
             <button  className='iconsocialmedia'><FaInstagramSquare/></button>
             </Col>
             <Col>
            <button  className='iconsocialmedia'><FaMusic/></button> 
             </Col>
             </Row>
             <Row className='sepatr'>
                <Col>
                <button className='iconsocialmedia'><IoIosNotifications /></button>
                </Col>
                <Col>
               <button className='iconsocialmedia'><NavLink to="https://www.google.com"><FaYoutube /></NavLink></button> 
                </Col>
                <Col>
              <button className='iconsocialmedia'> <FaXTwitter /></button> 
                </Col>
             </Row>
            </Col>
           
            <Col>
           <Row> <p className='prgraph-footer-title'>تطبيقات الموبايل </p></Row>
            <Row>
            <div className='footer-mg'><a href="https://www.google.com">    <img src='googleplay.jpg'  alt='asd'  /></a></div>  
            </Row>
            <Row>

                  <div className='footer-mg'><img src='appstore.jpg' alt='asd' /></div>  
            </Row>
            </Col>
          

        </Row>

    </div>
        
    <div className='bootom-footer'>
    <div className='bootom-footer-p'>جميع الحقوق محفوظة sidalih.Com 2024</div>   
    <div className='bootom-footer-icon'>

       <div className='bootom-footer-icon-a'><a href="https://www.google.com"><img src='log5.jpg' alt=''asd   /></a></div>
       <div className='bootom-footer-icon-a'><a href="https://www.google.com"><img src='log6.jpg' alt=''asd   /></a></div>
       <div className='bootom-footer-icon-a'><a href="https://www.google.com"><img src='log3.jpg' alt=''asd   /></a></div>
       <div className='bootom-footer-icon-a'><a href="https://www.google.com"><img src='log4.jpg' alt=''asd   /></a></div>
       <div className='bootom-footer-icon-a'><a href="https://www.google.com"><img src='tamara.jpg' alt=''asd  /></a></div>
       <a href="https://www.google.com"><div className='bootom-footer-icon-a'><img src='tabby.jpg' alt=''asd   /> </div></a>



    </div>

    </div>
    </>
  )
}

export default Footer