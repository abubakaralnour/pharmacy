
import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from 'react';
import Login from './Login';
import {  NavLink,Link } from 'react-router-dom';
import { useEffect,useRef } from 'react';
const CollapsedSidePanel = ({show}) => {
const  [first, setfirst] = useState(show)
let menuref=useRef();
useEffect(() => {
 

  //document.addEventListener("mousedown",()=>hd())
//console.log("vaue of first",first)
//console.log("vaue of showw",show)
  
})


//(showNav ?  document.body.style.background="black":null)




const hd=()=>{

document.querySelector(".sidenave").style.left="-100%";
 
}
//let justtestt = document.querySelector(".justtestt");
//document.addEventListener("click", ()=>{});
//justtest =document.removeEventListener("click",hd)

  return (
   <>

    <div className=' navflex' >
     <div className={show ? 'sidenave active':'sidenave' }>
     <CloseButton onClick={hd}  />   
     
      <p class="title"> الدخول</p>
      <form class="form">
        <input type="email" class="input" placeholder="البريد الالكتروني"/>
        <input type="password" class="input" placeholder="الرقم السري"/>
       
        <button class="form-btn">دخول</button>
        <p class="page-link">
        <Link to="/Login"  >  <span class="page-link-label"> هل نسيت الرقم السري؟</span></Link>
        </p>
      </form>
     
      <Link to="/Login"  > <button class="form-btnn"> إنشاء حساب</button></Link>
      
    
    </div>
</div>


   
   
   
   </>
  );
}

export default CollapsedSidePanel

  
