
import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";
import Favorte from './Favorte.js';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import CloseButton from 'react-bootstrap/CloseButton';
import { Form } from 'react-bootstrap';
import Createacount from './Createacount.js'
import CollapsedSidePanel from './CollapsedSidePanel.js'
import Login from './Login.js';
import Search from './Search.js';
const Header = ({cardprop}) => {
  const [sea ,setSea]=useState('')
  const [showNav, setshowNav] = useState(false)
const matr=[{title:"ee",addr:"sdf"},{title:"dsdsf",addr:"dsdd"},{title:"dasd",addr:"dsdwf"},{title:"ddfeg",addr:"dsdfr"}]
 
 // for(var i=0;i<matr.length;i++){
//
 //     if(matr[i].title=="ddfeg"){
 //       let r=matr[i].title
 //  console.log("result is",r)
 // // for(var j=0;j<matr[i].length;j++){
 // //   console.log(matr[i][j])
 // // 
 // //}
 // }else{console.log("erorr")}}
//
//
 function btnSearch(e){
   setSea(sea)
let indx=0




for( var ele of cardprop){
      
  
 if(ele.cardtext==sea ){
  var isok=true
  var resS=ele.cardtext
   console.log("this is",ele.cardtext)
 }
  
  //
  
      }if(!isok==true){let f= ` ${sea}   " لا توجد اصناف مشابهة ل"`
      alert(f)
      //  alert(" لا توجد اصناف مشابهة ل")
      }
      console.log("am out of loop",resS)

  //console.log(cardprop)

  //
}
  return (

    <>
      <div className='container-header'>
        <Link className='lnktext' to="/">
          <div className='logopharmcy-brandpharmcy'>

            <div className='logopharmcy-brandpharmcy-a'> <img className='logopharmcy' src='images.png'></img> </div>
            <div className='logopharmcy-brandpharmcy-b' ><h2>Sidalih <br /> صيدلية</h2></div>
          </div></Link>
        <div className='input-iconsSearch'>

          <input type='text' onChange={(e)=>{setSea(e.target.value)} } value={sea} placeholder='ابحث ضمن أكثر من 33.0000 الف منتج' className='se' />
          <span><AiOutlineSearch className='searchiconsearch'  onClick={btnSearch}/></span>

        </div>

        <div className='ahref-and-icons-enter-favorte-basket'>
          <Row>

            <Row>
              <Col className='icons-header-a'><NavLink to="/Favorte" > <FaRegHeart className='iconheart' />
              </NavLink></Col>



              <Col > <a> <RxPerson className='iconperson' onClick={() => setshowNav(!showNav)} /> </a> </Col>










              <Col className='icons-header-c'><Link to="/Basket"><SlBasket className='iconbasket' /></Link>  </Col>
            </Row>

            <Row>
              <Col className='ahref-favorte'><Link to="/Favorte" > <a  >المفضلة</a></Link></Col>
              <Col className='ahref-enter'><a onClick={() => setshowNav(!showNav)} >الدخول</a>   </Col>





              <Col className='ahref-basket'><a href='#'  >السلة</a>   </Col>







              <CollapsedSidePanel show={showNav} />

                



            </Row>


          </Row>
        </div>
      </div>
      <div>
        <div className='whatsapp'><a href='https://www.google.com'> <img src='whatsapp.jpg' alt='asd ' /> </a></div>
      </div>

    </>
  )
}

export default Header