
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navs = () => {
  return (
  

    <div className="top">
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
   <div class="container-fluid">  
    <div className="iconbrandnav"><a href="#" ><i class="bi bi-grid-3x3-gap-fill " id="w" ></i></a></div>
   <NavDropdown className="brand" title="التصنيفات" 
   >
               <NavDropdown.Item  className="drop-down-item" href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item className="drop-down-item" href="#action/3.2">
                 Another action
               </NavDropdown.Item>
               <NavDropdown.Item className="drop-down-item" href="#action/3.3">Something</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item className="drop-down-item" href="#action/3.4">
                 Separated link
               </NavDropdown.Item>
             </NavDropdown>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav mb-2 mb-lg-0">
         <li class="nav-item">
           <a class="nav-link " aria-current="page" href="#">الرئيسية</a>
         </li>
         
         <li class="nav-item">
           <a class="nav-link" href="#">كرت اهداء</a>
         </li>  <li class="nav-item">
           <a class="nav-link" href="#">الطلب للشركات</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">برنامج الولاء</a>
         </li>
         <NavDropdown title="الماركات" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2">
                 Another action
               </NavDropdown.Item>
               
               <NavDropdown title="الجديد" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              

               </NavDropdown>
               
               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">
                 Separated link
               </NavDropdown.Item>
             </NavDropdown>
         
       </ul>
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
     <NavDropdown title="SAR  /AR"className="price" id="basic-nav-dropdown">
               <NavDropdown.Item className="drop-down-item" href="#action/3.1">KWD</NavDropdown.Item>
               <NavDropdown.Item className="drop-down-item" href="#action/3.2">
                 AED
               </NavDropdown.Item>
               <NavDropdown.Item className="drop-down-item" href="#action/3.3">OMR</NavDropdown.Item>
               <NavDropdown.Item className="drop-down-item" href="#action/3.3">QAR</NavDropdown.Item>
              
               <NavDropdown.Item className="drop-down-item" href="#action/3.4">
                 BHD
               </NavDropdown.Item>
             </NavDropdown>
     </ul>
     </div>
   </div>
 </nav>
    
 </div>

  
      );
    }
    
 
    export default Navs;
    
   
 